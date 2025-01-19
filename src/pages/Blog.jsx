import React from "react";
import BlogInput from "../components/BlogInput";
import BlogModal from "../components/BlogModal";
import BlogPreview from "../components/BlogPreview";

const Blog = () => {
  return (
    <div className="px-8 py-4">
      <BlogInput />
      <BlogModal />
      <BlogPreview/>
    </div>
  );
};

export default Blog;
