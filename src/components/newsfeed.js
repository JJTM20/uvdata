import React from "react";
import PropTypes from "prop-types";
import { ListGroup } from "react-bootstrap";
import ViewUpdate from "./view-update";
import AddUpdate from "./add-update";
import "../style/newsfeed.css";

export default function JarJarNewsfeed(props) {
  const { onAddUpdate, updates, title } = props;
  return (
    <div className="view-update">
      <h1 className="newsfeed-title">{title} - Newsfeed</h1>
      <AddUpdate onSubmit={onAddUpdate} />
      <ListGroup className="update-list-group">
        {updates.map((update) => (
          <ListGroup.Item key={update.id} className="view-update-item">
            <ViewUpdate update={update} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

JarJarNewsfeed.propTypes = {
  onAddUpdate: PropTypes.func.isRequired,
  updates: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};
