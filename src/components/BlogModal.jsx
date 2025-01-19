import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/modalSlice";
import { AiOutlineFileImage } from "react-icons/ai";
import { FaX } from "react-icons/fa6";
import { useClickOutside } from "../hooks/useClickOutside";

const BlogModal = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);

  const modalRef = useRef(null);
  useClickOutside(modalRef, () => dispatch(closeModal()));

  if (!isModalOpen) return null;

  return (
    <div
      ref={modalRef}
      className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 border border-blue-500 shadow-lg rounded-lg p-6 w-[40rem]"
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-700">Create Blog Post</h2>
        <button
          onClick={() => dispatch(closeModal())}
          className="bg-blue-500 text-white p-2 rounded-lg"
        >
          <FaX />
        </button>
      </div>
      <textarea
        className="w-full h-32 text-sm p-2 bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none resize-none border-none"
        placeholder="Write your blog content here..."
      ></textarea>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center  space-x-2">
          <AiOutlineFileImage className="text-2xl text-blue-500 cursor-pointer" />
          <span className="text-gray-500 text-sm">Upload an image</span>
        </div>
        <button className="text-sm bg-blue-500 text-white p-2 rounded-lg">
          Post
        </button>
      </div>
    </div>
  );
};

export default BlogModal;
