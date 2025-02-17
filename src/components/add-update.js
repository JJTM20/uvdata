import React, { useState } from "react";
import "../style/add-update.css";

export default function AddUpdate(props) {
  const [currentUpdate, setcurrentUpdate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(currentUpdate);
    setcurrentUpdate("");
  };

  const handleChange = (event) => {
    setcurrentUpdate(event.target.value);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="view-update"
        aria-labelledby="add-update-title"
      >
        <div className="card-body">
          <h5 id="add-update-title" className="card-title">
            Add update to newsfeed:
          </h5>
          <div className="form-group">
            <textarea
              className="form-control form-control-sm"
              onChange={handleChange}
              name="text"
              value={currentUpdate}
              placeholder="Update your status..."
            />
            <button
              disabled={currentUpdate.length === 0}
              className="btn btn-primary add-update-button"
              type="submit"
              aria-label="Add update"
              aria-required="true"
              aria-disabled={currentUpdate.length === 0}
            >
              Add update
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
