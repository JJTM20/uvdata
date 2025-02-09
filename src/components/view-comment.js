import React, { useState } from "react";
import defaultProfilePic from "../default.jpg";
import "../App.css";
import AddReaction from "./add-reaction";

export function ViewComment({ comment }) {
  return (
    <div className="view-comment">
      <div className="comment-header">
        <h3>{comment.text}</h3>
        <AddReaction parent={comment} style={{}} />
      </div>
      <div className="comment-details">
        {(comment.imageSrc && <img src={comment.imageSrc} alt="Update" />) || (
          <img src={defaultProfilePic} alt="Update" />
        )}
        <div className="comment-details-text">
          <p>By: {comment.by}</p>
          <p>Created: {new Date(comment.created).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
