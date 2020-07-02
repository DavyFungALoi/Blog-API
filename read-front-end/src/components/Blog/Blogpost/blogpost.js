import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Blogpost({ match }) {
  useEffect(() => {
    fetchBlog();
    console.log(match)
  }, []);
  const [blog, setBlog] = useState([]);

  const fetchBlog = async () => {
    const data = await fetch("http://localhost:5000/blog/user", {
      mode: "cors",
      method: "GET",
    });
    const items = await data.json();
    console.log(items);
    setBlog(items.users_list);
  };

  return (
    <div>
      <div>
        <div>blogpost</div>
      </div>
    </div>
  );
}
