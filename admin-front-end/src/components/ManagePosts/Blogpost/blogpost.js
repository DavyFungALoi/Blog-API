import React, { useState, useEffect } from "react";
import moment from "moment";
import "./blogpost.css";

export default function Blogpost({ match }) {
  const [username, setUsername] = useState({ username: "" });
  const [title, setTitle] = useState({ title: "" });
  const [commentInput, setCommentInput] = useState({ commentInput: "" });
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

  const fetchPostComment = () => {
    const currentblogID = window.location.pathname.split("/").pop();
    const variable = window.location.pathname.split("/");
    const commentVariable = variable[2];
    fetch(
      `http://localhost:5000${window.location.pathname}/comment/${commentVariable}`,
      {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          title: title,
          body: commentInput,
          postId: currentblogID,
        }),
      }
    )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  const handlePostCommentAndRetrieve = async () => {
    const responsePostComments = await fetchPostComment();
    const responseRetrieveComments = await fetchComments();
    return [responsePostComments, responseRetrieveComments];
  };

  const handleUsernameChange = (e) => {
    setUsername({ username: e.target.value });
  };

  const handleTitleChange = (e) => {
    setTitle({ title: e.target.value });
  };

  const handleCommentChange = (e) => {
    setCommentInput({ commentInput: e.target.value });
  };

  const handleDelete = (e) => {
    ///setCommentId({ commentId: comment._id});
    ///setCommentId({ commentId: e.target.comment._id });
    console.log(commentId);
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
                <button onClick={()=> {setCommentId({ commentId: comment._id})}}> set ID</button>
                <button onClick={handleDelete}> Delete Comment</button>
              </div>
            ))}
          </div>
          <form
            className="blogpost_postCommentAndRetrieveHandler_container__commentform"
            action=""
          >
            <label htmlFor="username">Username (optional)</label>
            <input
              name="username"
              type="text"
              value={username.username}
              onChange={handleUsernameChange}
            />
            <label htmlFor="title">title</label>
            <input
              name="title"
              type="text"
              value={title.title}
              onChange={handleTitleChange}
            />
            <label htmlFor="body">comment</label>
            <input
              name="body"
              type="text"
              value={commentInput.commentInput}
              onChange={handleCommentChange}
            />

            <button onClick={handlePostCommentAndRetrieve}>
              Submit Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
