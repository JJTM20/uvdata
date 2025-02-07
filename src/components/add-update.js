import React from "react";
import { update } from "../data";

export default class AddUpdate extends React.PureComponent {
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
    const { update } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Add update to newsfeed:</h5>
            <div className="form-group">
              <textarea
                className="form-control form-control-sm"
                onChange={this.handleChange}
                name="text"
                value={update}
              />
              <button
                disabled={update.length === 0}
                className="btn btn-primary add-update-button"
                type="submit"
              >
                Add update
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}
