import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Blogpost({ match }) {
  useEffect(() => {
    fetchBlog();
    console.log(match);
    
  }, []);
  const [blog, setBlog] = useState([]);

  const fetchBlog = async () => {
    const data = await fetch(window.location.href, {
      mode: "cors",
      method: "GET",
    });
    console.log(window.location.href.url)
    const items = await data.json();
    console.log(items);
    setBlog(items.post_data);
  };

  return (
    <div>
      <div>
        <div>blogpost</div>
      </div>
    </div>
  );
}
