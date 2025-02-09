import React, { useState } from "react";
import PropTypes from "prop-types";
import defaultProfilePic from "../default.jpg";
import "../App.css";
import { Button, ButtonGroup, ListGroup } from "react-bootstrap";
import { MdOutlineAddReaction } from "react-icons/md";
import { LiaSpaceShuttleSolid } from "react-icons/lia";
import { GiLightSabers } from "react-icons/gi";
import ReactionList from "./reaction-list";
import { FaRegAngry, FaRegSadCry } from "react-icons/fa";
import { reaction } from "../data";
import AddReaction from "./add-reaction";

export function ViewComment({ comment }) {
  const [reactions, setReactions] = useState(comment.reactions);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [availableReactions, setAvailableReactions] = useState([
    { type: "lightsaber", icon: <GiLightSabers /> },
    { type: "spaceship", icon: <LiaSpaceShuttleSolid /> },
    { type: "angry", icon: <FaRegAngry /> },
    { type: "cry", icon: <FaRegSadCry /> },
  ]);

  const addReaction = () => {
    setDropdownVisible(!dropdownVisible); // Toggle the dropdown visibility
  };
  const handleReactionClick = (reactionType) => {
    setReactions((prevReactions) => {
      const existingReaction = prevReactions.find(
        (r) => r.type === reactionType
      );
      console.log(reactionType);
      if (existingReaction) {
        console.log("reaction updated");
        return prevReactions.map((r) =>
          r.type === reactionType ? { ...r, count: r.count + 1 } : r
        );
      } else {
        console.log("reaction added");

        return [...prevReactions, reaction(reactionType, 1)];
      }
    });

    setAvailableReactions((prevReactions) =>
      prevReactions.filter((reaction) => reaction.type !== reactionType)
    );

    setDropdownVisible(false);
  };

  return (
    <div className="view-comment">
      <div className="comment-header">
        <h3>{comment.text}</h3>
        <AddReaction comment={comment} />
        <div className="reaction-group">
          <ReactionList
            reactions={reactions}
            handleClick={handleReactionClick}
          />
          <Button size="sm" className="icon-button" onClick={addReaction}>
            <MdOutlineAddReaction />
          </Button>
          {dropdownVisible && (
            <ListGroup className="more-reactions">
              {availableReactions.map((reaction) => (
                <ListGroup.Item
                  key={reaction.type}
                  onClick={() => handleReactionClick(reaction.type)}
                >
                  {reaction.icon}
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </div>
      </div>
      <div className="comment-details">
        {(comment.imageSrc && <img src={comment.imageSrc} alt="Update" />) || (
          <img src={defaultProfilePic} alt="Update" />
        )}
        <div className="comment-details-text">
          <p>By: {comment.by}</p>
          <p>Created: {new Date(comment.created).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
