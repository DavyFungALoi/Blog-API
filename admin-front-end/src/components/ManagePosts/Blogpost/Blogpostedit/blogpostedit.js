import React, { useState, useEffect } from "react";
import moment from "moment";

export default function Blogpostedit() {
  const [blog, setBlog] = useState({ author: {} });
  useEffect(() => {
    fetchBlog();
  }, []);
  const fetchBlog = async () => {
    const variable = window.location.pathname.split("/");
    const blogpostId = variable[2];
    const data = await fetch(
      `http://localhost:5000/blog/${blogpostId}`,
      {
        mode: "cors",
        method: "GET",
      }
    );
    const items = await data.json();
    setBlog(items.post_data);
    console.log(items)
  };

  const handleTest = () => {
  };
  return (
    <div>
      <div className="blogpost__container">
        <div className="blogpost__container__summary">
          <div className="blogpost__container__summary__title">
            {blog.title}
          </div>
          <div className="blogpost__container__summary__author">
            {blog.author.first_name}
          </div>
          <div className="blogpost__container__summary__time">
            {moment(blog.time).format("MMMM Do, YYYY")}
          </div>
        </div>
        <div>{blog.body}</div>
        <button
          onClick={() => {
            handleTest();
          }}
        >
          Click
        </button>
      </div>
    </div>
  );
}
