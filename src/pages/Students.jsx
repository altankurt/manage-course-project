import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Modal from '../components/Modal';
import Pagination from '../components/Pagination';

const Students = () => {
  const location = useLocation();
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    website: '',
    companyName: '',
  });

  const queryParams = new URLSearchParams(location.search);
  const page = parseInt(queryParams.get('page')) || 1;
  const pageSize = 10;

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/users?page=${page}&pageSize=${pageSize}`
        );
        setStudents(response.data.users);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudents();
  }, [page]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddStudent = () => {
    setFormData({
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      website: '',
      companyName: '',
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteStudent = async (id) => {
    try {
      await axios.delete(`https://dummyjson.com/users/${id}`);
      setStudents(students.filter((student) => student.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditStudent = async (id) => {
    try {
      const response = await axios.get(`https://dummyjson.com/users/${id}`);
      const editedStudent = response.data;
      setFormData({
        id: editedStudent.id,
        firstName: editedStudent.firstName,
        lastName: editedStudent.lastName,
        email: editedStudent.email,
        phone: editedStudent.phone,
        website: editedStudent.website,
        companyName: editedStudent.company.name,
      });
      setIsModalOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.id) {
        await axios.put(`https://dummyjson.com/users/${formData.id}`, formData);
        setStudents(
          students.map((student) =>
            student.id === formData.id ? formData : student
          )
        );
      } else {
        const response = await axios.post(
          `https://dummyjson.com/users`,
          formData
        );
        const newStudent = response.data;
        setStudents([...students, newStudent]);
      }
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Students List</h2>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-md p-2 mr-2"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button
            className="bg-blue-500 text-white rounded-md px-4 py-2"
            onClick={handleAddStudent}
          >
            Add New Student
          </button>
        </div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Phone</th>
            <th className="border border-gray-300 px-4 py-2">Website</th>
            <th className="border border-gray-300 px-4 py-2">Company Name</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students
            .filter(
              (student) =>
                student.firstName
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                student.lastName
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
            )
            .map((student) => (
              <tr key={student.id}>
                <td className="border w-36 h-36 border-gray-300 px-4 py-2">
                  <img
                    src={student.image}
                    alt={student.firstName + ' ' + student.lastName}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.firstName + ' ' + student.lastName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.phone}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.domain}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.company.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button onClick={() => handleEditStudent(student.id)}>
                    Edit
                  </button>
                  <button onClick={() => handleDeleteStudent(student.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination
        currentPage={page}
        pageSize={pageSize}
        totalItems={students.length}
      />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <label>
            Website:
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
            />
          </label>
          <label>
            Company Name:
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </div>
  );
};

export default Students;
