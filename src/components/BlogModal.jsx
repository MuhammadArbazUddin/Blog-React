import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/modalSlice";
import { AiOutlineFileImage } from "react-icons/ai";
import { FaX } from "react-icons/fa6";
import { useClickOutside } from "../hooks/useClickOutside";

const BlogModal = () => {
  const [image, setImage] = useState(null);

  const [data, setData] = useState()
  const [recieveData, setRecieveData] = useState([])

  console.log(recieveData)

  const storeData = () => {

    const postObj = {
        postData : data,
        postImg : image
    }

    const parsedPostObj = JSON.stringify(postObj)
    localStorage.setItem("blog", parsedPostObj)

  }

  const showData = () => {
    
    if(!data) return;
    setRecieveData((prevData)=>[...prevData,localStorage.getItem("blog")])
  
  }

  const handleOnClick = () => {
    storeData();
    showData();
  }



  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  const modalRef = useRef(null);
  useClickOutside(modalRef, () => dispatch(closeModal()));

  if (!isModalOpen) return null;



  return (
    <div

      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 border border-blue-500 shadow-lg rounded-lg p-6 w-[40rem]"
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
        onChange={(e) => { setData(e.target.value) }}
      ></textarea>

      <div className="flex flex-col items- mt-4">
        <div className="mt-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <AiOutlineFileImage className="text-2xl text-blue-500" />
            <span className="text-gray-500 text-sm">Upload an image</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
          {image && (
            <div className="mt-6">
              <p className="text-sm text-gray-500">Preview:</p>
              <div className="relative w-full h-48 mt-2">
                <button
                  onClick={handleRemoveImage}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                >
                  <FaX className="text-sm" />
                </button>
                <img
                  src={image}
                  alt="Uploaded Preview"
                  className="w-full h-full object-cover rounded-lg border border-gray-300"
                />
              </div>
            </div>
          )}
        </div>
        <button className="text-sm  bg-blue-500 text-white p-2 mt-4 rounded-lg" onClick={handleOnClick}>
          Post
        </button>

      </div>
    </div>
  );
};

export default BlogModal;
