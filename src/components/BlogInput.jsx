import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../redux/modalSlice";

const BlogInput = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center">
      <div
        onClick={() => dispatch(openModal())}
        className="bg-gray-50 border-2 border-blue-500 px-32 py-3 rounded-full text-gray-700 text-xl cursor-pointer"
      >
        Start A Post!
      </div>
    </div>
  );
};

export default BlogInput;
