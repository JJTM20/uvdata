import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Check } from "react-bootstrap-icons";
import defaultProfilePic from "../default.jpg";
import { CommentList } from "./comment-list";
import "../style/update.css";
import AddReaction from "./add-reaction";

function ViewUpdate({ update }) {
  const [commentList, setcommentList] = useState(update.comments);
  const [showComments, setshowComments] = useState(false);

  const handleShowComments = () => setshowComments((prev) => !prev);

  return (
    <div
      className="view-update"
      role="region"
      aria-labelledby={`update-${update.id}`}
    >
      <section className="update-details">
        <img
          src={update.imageSrc || defaultProfilePic}
          alt={`Profile picture of ${update.by}`}
          width="80"
          height="80"
        />
        <div className="update-details-text">
          <p>
            <strong>By:</strong> {update.by}
          </p>
          <p>
            <strong>Created:</strong>{" "}
            {new Date(update.created).toLocaleString()}
          </p>
        </div>
      </section>

      <h3 id={`update-${update.id}`}>{update.text}</h3>

      <AddReaction
        parent={update}
        style={{ justifyContent: "left", marginBottom: "10px" }}
      />

      <Button
        onClick={handleShowComments}
        className="w-100"
        aria-label={showComments ? "Hide comments" : "Show comments"}
        aria-pressed={showComments}
      >
        {showComments ? "Hide Comments" : "Show Comments"}
      </Button>

      {showComments && (
        <CommentList
          commentList={commentList}
          setcommentList={setcommentList}
        />
      )}
    </div>
  );
}

export default ViewUpdate;
