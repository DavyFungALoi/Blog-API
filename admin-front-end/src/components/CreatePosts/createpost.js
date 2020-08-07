import React, { useState} from "react";
import "./createpost.css";

export default function Createpost() {
  const [author, setAuthor] = useState({ author: "" });
  const [title, setTitle] = useState({ title: "" });
  const [bodyInput, setBodyInput] = useState({ bodyInput: "" });
  const [postStatus, setPostStatus] = useState({ postStatus: "unpublished" });

  const fetchPostPost = () => {
    fetch(`http://localhost:5000/blog/post`, {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author: "5ef7bc99d225e9839931888c",
        title: title,
        body: bodyInput,
        status: postStatus,
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  const handleAuthorChange = (e) => {
    setAuthor({ author: e.target.value });
  };

  const handleTitleChange = (e) => {
    setTitle({ title: e.target.value });
  };

  const handleBodyChange = (e) => {
    setBodyInput({ bodyInput: e.target.value });
  };
  
  const handleStatusChange = (e) => {
    setPostStatus({ postStatus: e.target.value });
  
    console.log(postStatus)
  };
  
  const handleCreatePostSubmit = async (event) => {
   fetchPostPost()
    event.preventDefault();
    alert("Post has been submitted")
  };



  return (
    <div>
      <div className="createpost__container">
        <div className="createpost__container__title">Create new Post here</div>
        <form
          className="createpost_formcontainer"
          action=""
          onSubmit={handleCreatePostSubmit}
        >
          <div className="createpost_formcontainer__title">
            <label htmlFor="title">Title</label>
            <input
              name="author"
              type="text"
              value={title.title}
              onChange={handleTitleChange}
              required
            />
          </div>
          <div className="createpost_formcontainer__author">
            <label htmlFor="author">Author (optional)</label>
            <input
              name="title"
              type="text"
              value={author.author}
              onChange={handleAuthorChange}
            />
          </div>
          <div className="createpost_formcontainer__body">
            <label htmlFor="body">Body</label>
            <textarea
              rows="8"
              cols="50"
              name="body"
              type="text"
              value={bodyInput.bodyInput}
              onChange={handleBodyChange}
            />
          </div>
          <div className="createpost_formcontainer__status">
            <label htmlFor="status">Status</label>
            <select
              name="status"
             
              onChange={handleStatusChange}
             
            >
             
              <option value="unpublished">Unpublished</option>
              <option value="published">Published</option>
            </select>
          </div>
          <input
            className="createpost_formcontainer__submitbutton"
            type="submit"
            value="Create Post"
          />
        </form>
      </div>
  
    </div>
  );
}

