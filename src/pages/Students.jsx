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
        const response = await axios.put(
          `https://dummyjson.com/users/${formData.id}`,
          formData
        );
        const updatedStudent = response.data;
        setStudents(
          students.map((student) =>
            student.id === formData.id ? updatedStudent : student
          )
        );
      } else {
        const response = await axios.post(
          `https://dummyjson.com/users/add`,
          formData,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
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
    <div className="mx-12">
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
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-300 px-6 py-2 text-center">
              Photo
            </th>
            <th className="border border-gray-300 px-6 py-2 text-center">
              Name
            </th>
            <th className="border border-gray-300 px-6 py-2 text-center">
              Email
            </th>
            <th className="border border-gray-300 px-6 py-2 text-center">
              Phone
            </th>
            <th className="border border-gray-300 px-6 py-2 text-center">
              Website
            </th>
            <th className="border border-gray-300 px-6 py-2 text-center">
              Company Name
            </th>
            <th className="border border-gray-300 px-6 py-2 text-center">
              Actions
            </th>
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
                <td className="border border-gray-300 px-6 py-2 text-center">
                  <img
                    className="w-20 h-20 object-cover"
                    src={student.image}
                    alt={student.firstName + ' ' + student.lastName}
                  />
                </td>
                <td className="border border-gray-300 px-6 py-2 text-center">
                  {student.firstName + ' ' + student.lastName}
                </td>
                <td className="border border-gray-300 px-6 py-2 text-center">
                  {student.email}
                </td>
                <td className="border border-gray-300 px-6 py-2 text-center">
                  {student.phone}
                </td>
                <td className="border border-gray-300 px-6 py-2 text-center">
                  {student.domain}
                </td>
                <td className="border border-gray-300 px-6 py-2 text-center">
                  {student.company.name}
                </td>
                <td className="border border-gray-300 px-6 py-2 text-center">
                  <button
                    className="mr-2 bg-blue-500 text-white rounded px-2 py-1 hover:bg-blue-600"
                    onClick={() => handleEditStudent(student.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white rounded px-2 py-1 hover:bg-red-600"
                    onClick={() => handleDeleteStudent(student.id)}
                  >
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
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="firstName"
            >
              First Name:
            </label>
            <input
              className="border rounded-lg p-2 w-full"
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="lastName"
            >
              Last Name:
            </label>
            <input
              className="border rounded-lg p-2 w-full"
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="border rounded-lg p-2 w-full"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="phone">
              Phone:
            </label>
            <input
              className="border rounded-lg p-2 w-full"
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="website">
              Website:
            </label>
            <input
              className="border rounded-lg p-2 w-full"
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="companyName"
            >
              Company Name:
            </label>
            <input
              className="border rounded-lg p-2 w-full"
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Students;
