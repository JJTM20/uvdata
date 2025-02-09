import React, { useState } from "react";
// import PropTypes from 'prop-types'
// import moment from 'moment'
import { Button } from "react-bootstrap";
import { Check } from "react-bootstrap-icons";
import defaultProfilePic from "../default.jpg";
import { CommentList } from "./comment-list";
import "../App.css";

function ViewUpdate({ handleSubmit, onSubmit, ...props }) {
  const [update, setupdate] = useState("");
  const [commentList, setcommentList] = useState(props.comments);
  const [showComments, setshowComments] = useState(false);

  handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(update);
  };
  const handleShowComments = () => setshowComments((prev) => !prev);
  return (
    <div className="view-update">
      <h3>{props.text}</h3>
      <div className="update-details">
        {(props.imageSrc && <img src={props.imageSrc} alt="Update" />) || (
          <img src={defaultProfilePic} alt="Update" />
        )}
        <div className="update-details-text">
          <p>By: {props.by}</p>
          <p>Created: {new Date(props.created).toLocaleString()}</p>
        </div>
      </div>
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
