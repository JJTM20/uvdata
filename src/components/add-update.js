import React, { useState } from "react";
import { update } from "../data";

export default function AddUpdate(props) {
  const [update, setUpdateState] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(update);
    setUpdateState("");
  };

  const handleChange = (event) => {
    setUpdateState(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Add update to newsfeed:</h5>
          <div className="form-group">
            <textarea
              className="form-control form-control-sm"
              onChange={handleChange}
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
