import React, { useState, useEffect } from "react";


export default function Blogpost({ match }) {
  useEffect(() => {
    fetchBlog();
    fetchComments();
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
    const variable = (window.location.pathname.split( '/' ))
    const commentVariable=variable[2]
    const data = await fetch(
      
      `http://localhost:5000${window.location.pathname}/comment/${commentVariable}`,
      {
        mode: "cors",
        method: "GET",
      }
    );
    const items = await data.json();
    setComments(items.comments_list);
  };

  return (
    <div>
      <div>
        <div>blogpost</div>
        <div>{blog.title}</div>
        {comments.map((comment) => (
          
          <div key={comment._id} className="comment_overview"> 
            <div>{comment.title}</div>
            <div>{comment.body}</div>
            <div>{comment.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/*
"http://localhost:5000/blog/5f02c0beaa1f5759eac5475d/comment/5f02c0beaa1f5759eac5475d/

http://localhost:3000/blog/5f02c0beaa1f5759eac5475d"
*/