import React, { useState } from "react";
import defaultProfilePic from "../default.jpg";
import "../style/comment.css";
import AddReaction from "./add-reaction";
import { Button } from "react-bootstrap";
import { MdDeleteOutline } from "react-icons/md";
import { CommentList } from "./comment-list";
import { commentComments } from "../data";

export function ViewComment({ comment, setcommentList, commentList }) {
  const [internalcommentList, setinternalcommentList] =
    useState(commentComments);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showComments, setshowComments] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      setcommentList((prevComments) =>
        prevComments.filter((c) => c.id !== comment.id)
      );
    }, 200);
  };

  const handleShowComments = () => setshowComments((prev) => !prev);

  const parseMentions = (text, commentList) => {
    return text.split(/(@\w+)/).map((part, index) => {
      if (part.startsWith("@")) {
        const username = part.slice(1);

        const mentionedComment = [...commentList]
          .reverse()
          .find((c) => c.by === username);

        if (mentionedComment) {
          return (
            <a
              key={index}
              href={`#comment-${mentionedComment.id}`}
              className="mention"
              tabIndex={0}
              aria-label={`Mentioned user: ${username}`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(`comment-${mentionedComment.id}`)
                  ?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              {part}
            </a>
          );
        }
      }
      return part;
    });
  };

  return (
    <div id={`comment-${comment.by}`}>
      <div
        id={`comment-${comment.id}`}
        className={`view-comment ${isDeleting ? "fade-out" : ""}`}
        aria-live="polite"
      >
        <Button
          onClick={handleDelete}
          className="delete-btn"
          aria-label="Delete comment"
        >
          <MdDeleteOutline />
        </Button>
        <div className="comment-header">
          <h3 id={`comment-text-${comment.id}`}>
            {parseMentions(comment.text, commentList)}
          </h3>
        </div>
        <span className="comment-details">
          <div className="add-reactions">
            <AddReaction parent={comment} style={{}} />
          </div>
          <span className="image-text-container">
            <img
              src={comment.imageSrc || defaultProfilePic}
              alt={`Commenter for ${comment.by}`}
            />
            <div className="comment-details-text">
              <p>By: {comment.by}</p>
              <p>Created: {new Date(comment.created).toLocaleString()}</p>
            </div>
          </span>
        </span>
      </div>
      <Button
        onClick={handleShowComments}
        className="w-100"
        aria-expanded={showComments}
        aria-controls={`comment-thread-${comment.id}`}
        aria-label={showComments ? "Hide replies" : "Show replies"}
      >
        {showComments ? "Hide Comments" : "Show Comments"}
      </Button>
      {showComments && (
        <div id={`comment-thread-${comment.id}`}>
          <CommentList
            commentList={internalcommentList}
            setcommentList={setinternalcommentList}
          />
        </div>
      )}
    </div>
  );
}
