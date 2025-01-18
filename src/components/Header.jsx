import React, { useEffect, useState } from "react";

const Header = () => {
  const [click, setClick] = useState(false);

  const toggleClick = () => setClick((prev) => !prev);

  const handleClickOutside = (e) => {
    if (!e.target.closest(".profile") && !e.target.closest(".modal")) {
      setClick(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center justify-between px-8 py-6 relative">
      <h1 className="font-bold text-blue-500 text-4xl">Blog</h1>
      <div
        className="profile w-12 h-12 bg-blue-500 rounded-full hover:cursor-pointer hover:border border-gray-200 active:border-2 active:border-gray-300 transition-all ease-in-out"
        onClick={(e) => {
          e.stopPropagation();
          toggleClick();
        }}
      ></div>
      {click && (
        <div className="modal h-[100px] w-32 rounded-lg mt-4 bg-gray-50 border border-blue-500 absolute top-16 right-8 ">
          <ul className="flex flex-col items-start  pt-5 pl-4 space-y-3 text-blue-500">
            <li
              className="cursor-pointer hover:underline"
              onClick={toggleClick}
            >
              Profile
            </li>
            <li
              className="cursor-pointer hover:underline"
              onClick={toggleClick}
            >
              Sign out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
