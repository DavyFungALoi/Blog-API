import React, { useState, useEffect } from "react";
import moment from "moment";
import "./blogpost.css";
import { isCompositeComponent } from "react-dom/test-utils";

export default function Blogpost({ match }) {

const [commentInput, setUsername] = useState({username: "", title:""})

  useEffect(() => {
    fetchBlog();
    fetchComments();
    console.log("useeffect used");
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
    console.log("retrieve Comments");
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
    console.log("Post Comments");
    fetch("http://localhost:5000/blog/comment/test", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Comment 6",
        body: "This is a Post Request",
        postId: "5f02c0beaa1f5759eac5475d",
      }),
    })
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
    setUsername({username: e.target.value})
  }

  const handleTitleChange = (e) => {
    setUsername({title: e.target.value})

  }
 
  /*

   const handleTitleChange = (e) => {
    setUsername({title: e.target.value})
  }

  const fetchPostComment = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "comment 1" }),
    };
    const response = await fetch(
      "http://localhost:5000/blog/comment/test",
      requestOptions
    );
    const data = await response.json();
  };
  */

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
                <div>{comment.title}</div>
                <div>
                  {comment.name}-{moment(comment.time).format("MMMM Do, YYYY")}
                </div>
                <div>{comment.body}</div>
              </div>
            ))}
          </div>
          <form className="blogpost_postCommentAndRetrieveHandler_container__commentform" action="">
            <label htmlFor="username">Username (optional)</label>
            <input name="username" type="text" value={commentInput.username} onChange={handleUsernameChange}/>
            <label htmlFor="title">title</label>
            <input name="title" type="text" value={commentInput.title} onChange={handleTitleChange}/>
            <label htmlFor="body">comment</label>
            <input name="body" type="text" />

            <button onClick={handlePostCommentAndRetrieve}>
              Submit Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

/*
"http://localhost:5000/blog/5f02c0beaa1f5759eac5475d/comment/5f02c0beaa1f5759eac5475d/

http://localhost:3000/blog/5f02c0beaa1f5759eac5475d"
*/
