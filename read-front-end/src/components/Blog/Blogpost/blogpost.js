import React, { useState, useEffect } from "react";
import moment from "moment";
import "./blogpost.css";

export default function Blogpost({ match }) {
  useEffect(() => {
    fetchBlog();
    fetchComments();
  }, []);
  const [blog, setBlog] = useState({ author: {} });
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
    console.log(items.post_data);
    setBlog(items.post_data);
  };
  const fetchComments = async () => {
    const variable = window.location.pathname.split("/");
    const commentVariable = variable[2];
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
        <div className="blogpost__container">
          <div className="blogpost__container__summary">
            <div className="blogpost__container__summary__title">{blog.title}</div>
            <div className="blogpost__container__summary__author">{blog.author.first_name}</div>
            <div className="blogpost__container__summary__time">{moment(blog.time).format("MMMM Do, YYYY")}</div>
          </div>
          <div>{blog.body}</div>

          {comments.map((comment) => (
            <div key={comment._id} className="blogpost__comment_overview">
              <div>{comment.title}</div>
              <div>{comment.body}</div>
              <div>{moment(comment.time).format("MMMM Do, YYYY")}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/*
"http://localhost:5000/blog/5f02c0beaa1f5759eac5475d/comment/5f02c0beaa1f5759eac5475d/

http://localhost:3000/blog/5f02c0beaa1f5759eac5475d"
*/
