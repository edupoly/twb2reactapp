import React, { useState } from "react";
import CommentForm from "./CommentForm";

function Comment(props) {
  const [showCommentForm, setShowCommentForm] = useState(false);
  return (
    <div className="border p-2 m-2 rounded">
      <li>{props.comment.text}</li>
      {showCommentForm && <CommentForm i={props.i}></CommentForm>}
      <button
        onClick={() => {
          setShowCommentForm(!showCommentForm);
        }}
      >
        Reply
      </button>
      <ul>
        {props.comment.reply.map((rep) => {
          return <li>{rep.text}</li>;
        })}
      </ul>
    </div>
  );
}

export default Comment;
