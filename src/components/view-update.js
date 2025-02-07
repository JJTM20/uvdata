import React from "react";
// import PropTypes from 'prop-types'
// import moment from 'moment'
import { Button } from "react-bootstrap";
import { Check } from "react-bootstrap-icons";
import defaultProfilePic from "../default.jpg";
import { CommentList } from "./comment-list";

export default class ViewUpdate extends React.PureComponent {
  state = {
    update: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.update);

    this.setState({
      update: "",
    });
  };

  handleChange = (event) => {
    this.setState({
      update: event.target.value,
    });
  };

  render() {
    const { text, by, created, imageSrc } = this.props;
    const { update } = this.state;
    return (
      <div>
        <h3>{text}</h3>
        <p>By: {by}</p>
        <p>Created: {new Date(created).toLocaleString()}</p>
        {(imageSrc && <img src={imageSrc} alt="Update" />) || (
          <img src={defaultProfilePic} alt="Update" />
        )}
        <CommentList></CommentList>
      </div>
    );
  }
}
