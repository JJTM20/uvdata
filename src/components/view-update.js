import React, { useState } from "react";
// import PropTypes from 'prop-types'
// import moment from 'moment'
import { Button } from "react-bootstrap";
import { Check } from "react-bootstrap-icons";
import defaultProfilePic from "../default.jpg";
import { CommentList } from "./comment-list";

function ViewUpdate({ handleSubmit, onSubmit, ...props }) {
  const [update, setupdate] = useState("");

  handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(update);
  };
  return (
    <div>
      <h3>{props.text}</h3>
      <p>By: {props.by}</p>
      <p>Created: {new Date(props.created).toLocaleString()}</p>
      {(props.imageSrc && <img src={props.imageSrc} alt="Update" />) || (
        <img src={defaultProfilePic} alt="Update" />
      )}
      <CommentList comments={props.comments}></CommentList>
    </div>
  );
}
export default ViewUpdate;
