import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Blogpost({ match }) {
  useEffect(() => {
    fetchBlog();
    fetchComments()
    console.log(match);
  }, []);
  const [blog, setBlog] = useState([]);
  const [comments, setComments] = useState([]);

  const fetchBlog = async () => {
    const data = await fetch(
      `http://localhost:5000${window.location.pathname}`,
      {
        mode: "cors",
        method: "GET",
      }
    );
    const items = await data.json();
    setBlog(items.post_data);
  };
  const fetchComments = async () => {
    const data = await fetch(
      'http://localhost:5000/blog/comment/5f02c0beaa1f5759eac5475d',
      {
        mode: "cors",
        method: "GET",
      }
    );
    const items = await data.json();
    console.log(items)
    setComments(items.comments_data);
  };

  return (
    <div>
      <div>
        <div>blogpost</div>
        <div>{blog.title}</div>
      </div>
    </div>
  );
}
