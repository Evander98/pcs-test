import React from "react";

export const Banner = () => {
  return (
    <div className="px-5 mt-5 font-semibold">
      <p className="mb-2">Hi, Good Morning!</p>
      <div className="bg-gradient-to-r from-[#EE2724] to-[#C5105E] p-3 rounded-xl shadow-xl text-white">
        <div className="flex mb-3">
          <div className="rounded-full">
            <img
              src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"
              alt="Profile"
              className="max-w-12"
            />
          </div>
          <div className="flex-1 px-4">
            <p>Evan</p>
            <p className="text-xs font-light italic">Frontend Developer</p>
          </div>
          <div>
            <p className="text-xs font-light italic">Member since</p>
            <p>01 Juni 2021</p>
          </div>
        </div>
        <div>
          <p className="text-xs font-light">Location</p>
          <div className="flex justify-between items-center">
            <p>Kantor Sahid</p>
            <p className="text-xs font-light italic">ICO</p>
          </div>
        </div>
      </div>
    </div>
  );
};
