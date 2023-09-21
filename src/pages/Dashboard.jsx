import React from 'react';
import Card from '../components/Card';
import {
  CourseCard,
  PaymentCard,
  StudentCard,
  UsersCard,
} from '../assets/icons/icons';

const Dashboard = () => {
  const cards = [
    {
      icon: <StudentCard />,
      title: 'Students',
      backgroundColor: 'bg-sky-50',
      value: 243,
      link: '/dashboard/students',
    },
    {
      icon: <CourseCard />,
      title: 'Course',
      backgroundColor: 'bg-fuchsia-50',
      value: 12,
      link: '/dashboard/#',
    },
    {
      icon: <PaymentCard />,
      title: 'Payments',
      backgroundColor: 'bg-amber-50',
      value: 75,
      link: '/dashboard/#',
    },
    {
      icon: <UsersCard />,
      title: 'Users',
      backgroundColor: 'bg-gradient-to-r from-yellow-500 to-amber-300',
      value: 15,
      link: '/dashboard/#',
    },
  ];

  return (
    <div className="flex justify-center mt-4 mx-16 space-x-4">
      {cards.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          title={card.title}
          backgroundColor={card.backgroundColor}
          value={card.value}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default Dashboard;
