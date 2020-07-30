import React, { useState, useEffect } from "react";

export default function Createpost() {
  const [username, setUsername] = useState({ username: "" });
  const [title, setTitle] = useState({ title: "" });
  const [commentInput, setCommentInput] = useState({ commentInput: "" });
  const [bodyInput, setBodyInput] = useState({ bodyInput: "" });

  const handleAuthorChange = (e) => {
    setUsername({ username: e.target.value });
  };

  const handleTitleChange = (e) => {
    setTitle({ title: e.target.value });
  };

  const handleBodyChange = (e) => {
    setBodyInput({ commentInput: e.target.value });
  };

  const handleCreatePost = async () => {
    console.log("hello");
  };

  return (
    <div>
      <div>
        Create new Post here
        <form
          className="blogpost_postCommentAndRetrieveHandler_container__commentform"
          action=""
        >
          <label htmlFor="title">Title</label>
          <input
            name="author"
            type="text"
            value={title.title}
            onChange={handleTitleChange}
          />
          <label htmlFor="author">Author (optional)</label>
          <input
            name="title"
            type="text"
            value={username.username}
            onChange={handleAuthorChange}
          />
          <label htmlFor="body">Body</label>
          <textarea
            name="body"
            type="text"
            value={bodyInput.bodyInput}
            onChange={handleBodyChange}
          />
          <label htmlFor="status">Status</label>
          <select name="status">
          <option value="" selected disabled hidden>Choose publishing status</option>
            <option value = "unpublished">Unpublished</option>
            <option value = "published">Published</option>
          </select>

          <button onClick={handleCreatePost}>Create Post</button>
        </form>
      </div>
    </div>
  );
}
