import React from "react";
import { useLocation } from "react-router-dom";

function PostDetails() {
  var { state: post } = useLocation();
  console.log(post);
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default PostDetails;
