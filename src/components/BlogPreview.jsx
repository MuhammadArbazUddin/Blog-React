const BlogPreview = ({ blogs }) => {
  return (
    <div>
      <h2>Blog Posts</h2>
      {blogs.length > 0 ? (
        blogs.map((blog, index) => (
          <div key={index} className="blog-item">
            <p>{blog.postData}</p>
            {blog.postImg && (
              <img
                src={blog.postImg}
                alt="Blog Preview"
                className="w-full h-48 object-cover rounded-lg"
              />
            )}
          </div>
        ))
      ) : (
        <p>No blogs available</p>
      )}
    </div>
  );
};

export default BlogPreview;
