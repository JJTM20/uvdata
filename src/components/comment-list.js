import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AddComment } from "./add-comment";
import { ListGroup } from "react-bootstrap";
import { ViewComment } from "./view-comment";

// Internal typechecking

export function CommentList({ comments }) {
  const [commentList, setcommentList] = useState(comments);

  useEffect(() => {
    console.log("CommentList updated");
  }, [commentList]);

  return (
    <>
      <ListGroup className="commentList">
        {commentList.map((comment) => (
          <ListGroup.Item key={comment.id}>
            <ViewComment comment={comment} />
          </ListGroup.Item>
        ))}
      </ListGroup>
      <AddComment setCommentList={setcommentList} />
    </>
  );
}
