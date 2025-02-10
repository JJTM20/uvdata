import React, { useState } from "react";
// import PropTypes from 'prop-types'
// import moment from 'moment'
import { Button } from "react-bootstrap";
import { Check } from "react-bootstrap-icons";
import defaultProfilePic from "../default.jpg";
import { CommentList } from "./comment-list";
import "../App.css";
import AddReaction from "./add-reaction";

function ViewUpdate({ update }) {
  const [commentList, setcommentList] = useState(update.comments);
  const [showComments, setshowComments] = useState(false);

  const handleShowComments = () => setshowComments((prev) => !prev);
  return (
    <div className="view-update">
      <div className="update-details">
        {(update.imageSrc && <img src={update.imageSrc} alt="Update" />) || (
          <img src={defaultProfilePic} alt="Update" />
        )}
        <div className="update-details-text">
          <p>By: {update.by}</p>
          <p>Created: {new Date(update.created).toLocaleString()}</p>
        </div>
      </div>
      <br />
      <h3>{update.text}</h3>
      <AddReaction
        parent={update}
        style={{ justifyContent: "left", marginBottom: "10px" }}
      />
      <Button onClick={handleShowComments} className="w-100">
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
