import React, { useState } from "react";
import defaultProfilePic from "../default.jpg";
import "../style/comment.css";
import AddReaction from "./add-reaction";
import { Button } from "react-bootstrap";
import { MdDeleteOutline } from "react-icons/md";
import { CommentList } from "./comment-list";
import { commentComments } from "../data";

export function ViewComment({ comment, setcommentList }) {
  const [internalcommentList, setinternalcommentList] =
    useState(commentComments);
  const [isDeleting, setIsDeleting] = useState(false);
  const handleDelete = () => {
    setIsDeleting(true);

    setTimeout(() => {
      setcommentList((prevComments) =>
        prevComments.filter((c) => c.id !== comment.id)
      );
    }, 200);
  };
  const [showComments, setshowComments] = useState(false);
  const handleShowComments = () => setshowComments((prev) => !prev);

  return (
    <div>
      <div className={`view-comment ${isDeleting ? "fade-out" : ""}`}>
        <Button onClick={handleDelete} className="delete-btn">
          <MdDeleteOutline />
        </Button>
        <div className="comment-header">
          <h3>{comment.text}</h3>
          <AddReaction parent={comment} style={{}} />
        </div>
        <div className="comment-details">
          {(comment.imageSrc && (
            <img src={comment.imageSrc} alt="Update" />
          )) || <img src={defaultProfilePic} alt="Update" />}
          <div className="comment-details-text">
            <p>By: {comment.by}</p>
            <p>Created: {new Date(comment.created).toLocaleString()}</p>
          </div>
        </div>
      </div>
      <Button onClick={handleShowComments} className="w-100">
        {showComments ? "Hide Comments" : "Show Comments"}
      </Button>
      {showComments && (
        <CommentList
          commentList={internalcommentList}
          setcommentList={setinternalcommentList}
        />
      )}
    </div>
  );
}
