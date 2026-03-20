import React from "react";
import { useFormik } from "formik";
import { addComment } from "./commentsSlice";
import { useDispatch } from "react-redux";

function CommentForm(props) {
  const dispatch = useDispatch();

  const comment = useFormik({
    initialValues: {
      text: "",
      likes: 0,
      reply: [],
    },
    onSubmit: (values) => {
      dispatch(addComment({ values, i: props.i }));
    },
  });
  return (
    <div>
      <form onSubmit={comment.handleSubmit}>
        <textarea {...comment.getFieldProps("text")}></textarea>
        <button type="submit">Comment</button>
        <br />
      </form>
    </div>
  );
}

export default CommentForm;
