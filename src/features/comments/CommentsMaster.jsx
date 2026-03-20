import React from "react";
import { useSelector } from "react-redux";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
function CommentsMaster() {
  const { comments } = useSelector((state) => state.commentsR);

  return (
    <div className="mybox">
      <CommentForm></CommentForm>
      <ul>
        {comments.map((comment, i) => {
          return <Comment comment={comment} i={i} key={comment.text}></Comment>;
        })}
      </ul>
    </div>
  );
}

export default CommentsMaster;
