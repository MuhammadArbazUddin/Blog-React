import React from "react";
import { AiOutlineFileImage } from "react-icons/ai"; // Image icon from react-icons

const BlogModal = () => {
  return (
    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg p-6 w-[30rem]">
      <h2 className="text-2xl font-bold mb-6 text-gray-700 ">
        Create Blog Post
      </h2>

      {/* Text Area */}
      <textarea
        className="w-full h-32 text-sm p-2 text-gray-700 placeholder-gray-400 focus:outline-none resize-none border-none"
        placeholder="Write your blog content here..."
      ></textarea>

      {/* Image Upload Section */}
      <div className="flex items-center mt-4 space-x-2">
        <AiOutlineFileImage className="text-2xl text-blue-500 cursor-pointer" />
        <span className="text-gray-500 text-sm">Upload an image</span>
      </div>
    </div>
  );
};

export default BlogModal;
