import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import defaultProfilePic from "../default.jpg";
import { comment } from "../data";

export function AddComment({ setCommentList }) {
  const [commentText, setCommentText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    setCommentList((prevComments) => [
      ...prevComments,
      comment(
        "Unknown",
        commentText,
        defaultProfilePic,
        Date.now(),
        uuid(),
        []
      ),
    ]);
    setCommentText("");
  };
  return (
    <div className="add-comment">
      <form onSubmit={handleSubmit} className="card mb-3 add-form">
        <div className="card-body">
          <h5 className="card-title">Add comment to update:</h5>
          <div className="form-group">
            <textarea
              className="form-control form-control-sm"
              onChange={(e) => setCommentText(e.target.value)}
              name="text"
              value={commentText}
            />
            <button
              disabled={commentText.length === 0}
              className="btn btn-primary add-update-button"
              type="submit"
              aria-label="Add comment"
              aria-required="true"
            >
              Add comment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
