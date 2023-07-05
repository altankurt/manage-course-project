import React from 'react';

const Profile = () => {
  return (
    <div className="w-[270px] h-[196px] flex items-center flex-col relative">
      <img
        className="w-32 h-32 justify-center items-center flex flex-col rounded-full"
        src="/assets/images/avatar.png"
        alt="Avatar"
      />
      <h2 className="flex flex-col mt-4 mb-2 text-black text-[17px] font-bold">
        John Doe
      </h2>
      <div className="text-yellow-500 text-sm font-medium">Admin</div>
      <div className="" />
    </div>
  );
};

export default Profile;
