import React from "react";
import PropTypes from "prop-types";
import defaultProfilePic from "../default.jpg";
import "../App.css";
import { ButtonGroup } from "react-bootstrap";

export function ViewComment({ comment }) {
  return (
    <div className="view-comment">
      <div className="comment-header">
        <h3>{comment.text}</h3>
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
      <ButtonGroup></ButtonGroup>
    </div>
  );
}
