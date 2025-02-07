import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import { AddComment } from "./add-comment";
import { ListGroup } from "react-bootstrap";
import { ViewComment } from "./view-comment";

// Internal typechecking
CommentList.PropTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};

export function CommentList(comments) {
  const [commentList, setcommentList] = useState(comments);
  return (
    <>
      <ListGroup>
        {commentList.map((comment) => (
          <ListGroup.Item key={comment.id}>
            <ViewComment />
          </ListGroup.Item>
        ))}
      </ListGroup>
      <AddComment commentList={commentList} setCommentList={setcommentList} />
    </>
  );
}
