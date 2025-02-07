import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { defaultProfilePic } from "../default.jpg";

export function AddComment({ commentList, setCommentList }) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      id: uuid(),
      text: comment,
      created: Date.now(),
      by: "Unknown",
      imageSrc: defaultProfilePic,
    };

    setCommentList((prevComments) => [...prevComments, newComment]);
    setComment("");
  };
  return (
    <form onSubmit={handleSubmit} className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Add comment to update:</h5>
        <div className="form-group">
          <textarea
            className="form-control form-control-sm"
            onChange={(e) => setComment(e.target.value)}
            name="text"
            value={comment}
          />
          <button
            disabled={comment.length === 0}
            className="btn btn-primary add-update-button"
            type="submit"
          >
            Add comment
          </button>
        </div>
      </div>
    </form>
  );
}
