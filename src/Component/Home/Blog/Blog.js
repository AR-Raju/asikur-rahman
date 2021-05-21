import React, { useEffect, useState } from "react";
import BlogContent from "../BlogContent/BlogContent";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch("https://dev.to/api/articles?username=arraju")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  return (
    <div className="container py-5" id="blog">
      <h1 className="text-center pt-5 pb-3">BLOG</h1>
      <div className="row py-5">
        {console.log(blog)}
        {blog.map((blg) => (
          <div className="col-md-3">
            <BlogContent blog={blg} key={blg.id}></BlogContent>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
