import React, { useState, useEffect } from "react";
import moment from "moment";
import "./blogpost.css";

export default function Blogpost({ match }) {
  const [commentId, setCommentId] = useState({ commentId: "" });

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
  const fetchDeleteComment = () => {
    const currentCommentId = commentId;
    fetch(`http://localhost:5000/blog/comment/${currentCommentId}`, {
      mode: "cors",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        commentId: commentId,
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };
  const handleDelete = (e) => {
    ///setCommentId({ commentId: comment._id});
    ///setCommentId({ commentId: e.target.comment._id });
    console.log(commentId);
    fetchDeleteComment()
    fetchComments()
  };

  return (
    <div>
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
          <div className="blogpost__container__comment__container">
            {comments.map((comment) => (
              <div
                key={comment._id}
                className="blogpost__container__comment_overview"
              >
                <div>
                  {comment.name}-{moment(comment.time).format("MMMM Do, YYYY")}
                </div>
                <div>{comment.title}</div>
                <div>{comment.body}</div>
                <div>{comment._id}</div>
                <button
                  onClick={() => {
                    setCommentId({ commentId: comment._id });
                  }}
                >
                  {" "}
                  set ID
                </button>
                <button onClick={handleDelete}> Delete Comment</button>
              </div>
            ))}
          </div>
   
        </div>
      </div>
    </div>
  );
}
