import React from 'react';
import Portrait from '../../../public/portrait.jpg';

const Profile = () => {
  return (
    <div className="w-56 md:w-64 h-40 md:h-48 flex flex-col items-center justify-center">
      <img
        className="rounded-full w-24 h-24 md:w-40 md:h-40"
        src={Portrait}
        alt="Avatar"
      />

      <h2 className="mt-4 text-base md:text-lg font-bold">John Doe</h2>
      <div className="text-YellowDark text-sm md:text-base font-medium">
        Admin
      </div>
    </div>
  );
};

export default Profile;
