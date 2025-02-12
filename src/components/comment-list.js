import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AddComment } from "./add-comment";
import { ListGroup } from "react-bootstrap";
import { ViewComment } from "./view-comment";

export function CommentList({ commentList, setcommentList }) {
  return (
    <div className="comments-list">
      <ListGroup className="comment-lg">
        {commentList.length > 0 ? (
          commentList.map((comment) => (
            <ListGroup.Item
              key={comment.id}
              className="comment-li"
              role="listitem"
            >
              <ViewComment comment={comment} setcommentList={setcommentList} />
            </ListGroup.Item>
          ))
        ) : (
          <p role="status">No comments yet. Be the first to comment!</p>
        )}
      </ListGroup>
      <AddComment setCommentList={setcommentList} />
    </div>
  );
}
