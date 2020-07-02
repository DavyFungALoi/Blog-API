import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Blogoverview() {
  useEffect(() => {
    fetchBlogs();
  }, []);
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const data = await fetch("http://localhost:5000/blog/user", {
      mode: "cors",
      method: "GET",
    });
    const items = await data.json();
    console.log(items);
    setBlogs(items.users_list);
  };

  return (
    <div>
      <div>
        {blogs.map((blog) => (
          <div key={blog._id}>
            <Link to={`/blog/${blog._id}`}>{blog.first_name}</Link>
          </div>
        ))}
      </div>

      <div>blogoverview</div>
    </div>
  );
}
