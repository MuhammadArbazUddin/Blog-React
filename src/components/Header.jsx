import React, { useState } from "react";

const Header = () => {
  const [click, setClick] = useState(false);

  const toggleClick = () => {
    setClick((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-between px-8 py-4">
      <h1 className="font-bold text-blue-500 text-4xl">Blog</h1>
      <div
        className="w-12 h-12 bg-blue-500 rounded-full hover:cursor-pointer"
        onClick={toggleClick}
      ></div>
      {click && (
        <div className="h-16 w-32 rounded-lg mt-2 bg-gray-50 absolute top-16 right-8">
          <ul className="flex flex-col items-start pt-2 pl-4 text-blue-500">
            <li className="cursor-pointer hover:underline">Profile</li>
            <li className="cursor-pointer hover:underline">Sign out</li>
          </ul>
        </div>
      )}{" "}
    </div>
  );
};

export default Header;
