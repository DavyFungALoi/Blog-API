import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./blogoverview.css";
import moment from "moment";

export default function Blogoverview() {
  useEffect(() => {
    fetchBlogs();
  }, []);
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const data = await fetch("http://localhost:5000/blog/admin", {
      mode: "cors",
      method: "GET",
    });
    const items = await data.json();
    setBlogs(items.post_list);
  };



  return (
    <div>
      <div className="blog_overview__title">Blogoverview</div>
      <div className="blogoverview__container">
        {blogs.map((blog) => (
          <Link to={`/blog/${blog._id}`} key={blog._id}>
            
            <div className="blogoverview__post">
              <div>{blog.title}</div>
              <div>{blog.author.first_name}</div>
              <div>{moment(blog.time).format("MMMM Do, YYYY")}</div>
              <div>{blog.status}</div>
              <div>Preview</div>
            </div>
          </Link>
        ))}
      </div>

      
    </div>
  );
}
