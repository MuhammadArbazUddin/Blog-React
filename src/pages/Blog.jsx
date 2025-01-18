import React from "react";
import BlogInput from "../components/BlogInput";
import BlogModal from "../components/BlogModal";

const Blog = () => {
  return (
    <div className="px-8 py-4">
      <BlogInput />
      <BlogModal />
    </div>
  );
};

export default Blog;
