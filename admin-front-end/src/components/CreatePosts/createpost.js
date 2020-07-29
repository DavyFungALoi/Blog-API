import React, { useState, useEffect } from "react";

export default function Createpost() {
    const [username, setUsername] = useState({ username: "" });
    const [title, setTitle] = useState({ title: "" });
    const [commentInput, setCommentInput] = useState({ commentInput: "" });
  
    const handleUsernameChange = (e) => {
      setUsername({ username: e.target.value });
    };
  
    const handleTitleChange = (e) => {
      setTitle({ title: e.target.value });
    };
  
    const handleCommentChange = (e) => {
      setCommentInput({ commentInput: e.target.value });
    };
  
    const handlePostCommentAndRetrieve = async () => {
     console.log("hello")
    };
  
  
    return (
      <div>
        <div>
          Create new Post here
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
  
            <button onClick={handlePostCommentAndRetrieve}>Submit Comment</button>
          </form>
        </div>
      </div>
    );
  
}


  
