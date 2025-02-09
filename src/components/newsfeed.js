import React from "react";
import PropTypes from "prop-types";
import { ListGroup } from "react-bootstrap";
import ViewUpdate from "./view-update";
import AddUpdate from "./add-update";
// import AddUpdate from './add-update'

export default function JarJarNewsfeed(props) {
  const { onAddUpdate, updates, title } = props;

  return (
    <div>
      <h1>{title} - Newsfeed</h1>
      <AddUpdate onSubmit={props.onAddUpdate}></AddUpdate>
      <ListGroup>
        {updates.map((update) => (
          <ListGroup.Item key={update.id}>
            <ViewUpdate {...update} />
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
