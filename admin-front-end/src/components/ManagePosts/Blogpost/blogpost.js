import React, { useState, useEffect } from "react";
import moment from "moment";
import "./blogpost.css";
import { Link } from "react-router-dom";

export default function Blogpost({ match }) {
  const [blog, setBlog] = useState({ author: {} });
  const [comments, setComments] = useState([]);
  const [commentId, setCommentId] = useState({ commentId: "" });

  useEffect(() => {
    fetchBlog();
    fetchComments();
  }, []);
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
  const fetchDeleteComment = (commentId) => {
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

  const handleDelete = async (commentIdSelect) => {
    const setId = setCommentId({ commentId: commentIdSelect });
    const deleteComment = await fetchDeleteComment(commentId);
    const retrieveComments = await fetchComments();
    return [setId, deleteComment, retrieveComments];
  };
  /*
  const handleDelete2 = (commentIdSelect) => {}

  const handleDelete = (commentIdSelect) => {
   return setCommentId({ commentId: commentIdSelect })
      .then(fetchDeleteComment(commentId))
      .then(fetchComments());
      
  };



  const a = await setCommentId({ commentId: commentIdSelect})
  const b = await fetchDeleteComment(commentId)
  const c = await fetchComments()

  await setCommentId({ commentId: commentIdSelect})
  await fetchDeleteComment(commentId)
  await fetchComments()

    await setCommentId({ commentId: commentIdSelect})
  fetchDeleteComment(commentId)
  await fetchComments()


  // L1
console.log('🥪 Synchronous 1');

// L2
setTimeout(_ => console.log(`🍅 Timeout 2`), 0);

// L3
Promise.resolve().then(_ => console.log('🍍 Promise 3'));

// L4
console.log('🥪 Synchronous 4');

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
          <Link to={`/blog/${blog._id}/edit`} key={blog._id}>
            <div>Preview</div>
          </Link>
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
                <button
                  onClick={() => {
                    handleDelete(comment._id);
                  }}
                >
                  {" "}
                  Delete Comment
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
