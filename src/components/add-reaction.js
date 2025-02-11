import React, { useState } from "react";
import { Button, ButtonGroup, ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import { MdOutlineAddReaction } from "react-icons/md";
import ReactionList from "./reaction-list";
import { reaction, availableReactionsPredefined } from "../data";
import "../style/reaction.css";

export function AddReaction({ parent, style }) {
  const [reactions, setReactions] = useState(parent.reactions);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [availableReactions, setAvailableReactions] = useState(
    availableReactionsPredefined.filter(
      (reaction) => !parent.reactions.some((r) => r.type === reaction.type)
    )
  );

  const addReaction = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const handleReactionClick = (reactionType) => {
    setReactions((prevReactions) => {
      const existingReaction = prevReactions.find(
        (r) => r.type === reactionType
      );
      if (existingReaction) {
        return prevReactions.map((r) =>
          r.type === reactionType ? { ...r, count: r.count + 1 } : r
        );
      } else {
        return [...prevReactions, reaction(reactionType, 1)];
      }
    });

    setAvailableReactions((prevReactions) =>
      prevReactions.filter((reaction) => reaction.type !== reactionType)
    );

    setDropdownVisible(false);
  };

  return (
    <div className="reaction-group" style={style}>
      <ReactionList reactions={reactions} handleClick={handleReactionClick} />
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
  );
}

AddReaction.propTypes = {
  parent: PropTypes.shape({
    by: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    created: PropTypes.number.isRequired,
    imageSrc: PropTypes.string,
    id: PropTypes.string.isRequired,
    reactions: PropTypes.array.isRequired,
  }).isRequired,
};

export default AddReaction;
