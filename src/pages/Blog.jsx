import React, { useEffect, useState } from "react";
import BlogInput from "../components/BlogInput";
import BlogModal from "../components/BlogModal";
import BlogPreview from "../components/BlogPreview";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Load blogs from localStorage on component mount
    const savedBlog = localStorage.getItem("blog");
    if (savedBlog) {
      setBlogs([JSON.parse(savedBlog)]);
    }
  }, []);

  const handleNewBlog = () => {
    const savedBlog = localStorage.getItem("blog");
    if (savedBlog) {
      setBlogs((prevBlogs) => [...prevBlogs, JSON.parse(savedBlog)]);
    }
  };

  return (
    <div className="px-8 py-4">
      <BlogInput />
      <BlogModal onNewBlog={handleNewBlog} />
      <BlogPreview blogs={blogs} />
    </div>
  );
};

export default Blog;
