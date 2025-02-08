import React from "react";
import PropTypes from "prop-types";
import defaultProfilePic from "../default.jpg";
import "../comment.css";
export function ViewComment({ comment }) {
  return (
    <div className=".view-comment">
      <h3>{comment.text}</h3>
      <p>By: {comment.by}</p>
      <p>Created: {new Date(comment.created).toLocaleString()}</p>
      {(comment.imageSrc && <img src={comment.imageSrc} alt="Update" />) || (
        <img src={defaultProfilePic} alt="Update" />
      )}
    </div>
  );
}
