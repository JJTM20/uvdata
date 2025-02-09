import React, { Component, useCallback, useEffect, useState } from "react";
import "./App.css";
import data, { update } from "./data"; // update, // comment,
import JarJarNewsfeed from "./components/newsfeed";

export function App() {
  const [updates, setUpdates] = useState(() => data.updates);

  useEffect(() => {
    console.log("Effect hook.");
  }, []);

  const handleAddUpdate = useCallback(
    /**
     * @param {string }text
     */
    (text) => {
      const newUpdate = update("Unknown", text, undefined, Date.now());
      setUpdates((prevUpdates) =>
        [...prevUpdates, newUpdate].sort((f, s) => s.created - f.created)
      );
      console.log("Add an update to updates, with text: ", text);
    },
    []
  );

  return (
    <div className="container">
      {/* Display the newsfeed */}
      <JarJarNewsfeed
        title="Forcebook"
        updates={updates}
        onAddUpdate={handleAddUpdate}
      />
    </div>
  );
}
