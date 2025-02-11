import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import "../style/reaction.css";
import { MdFavorite, MdThumbUp } from "react-icons/md";
import { FaRegLaughSquint } from "react-icons/fa";
import { LiaSpaceShuttleSolid } from "react-icons/lia";
import { GiLightSabers } from "react-icons/gi";
import { FaRegAngry, FaRegSadCry } from "react-icons/fa";

const iconMap = {
  like: <MdThumbUp />,
  love: <MdFavorite />,
  funny: <FaRegLaughSquint />,
  lightsaber: <GiLightSabers />,
  spaceship: <LiaSpaceShuttleSolid />,
  angry: <FaRegAngry />,
  cry: <FaRegSadCry />,
};

function ReactionList({ reactions, handleClick }) {
  return (
    <ButtonToolbar>
      <ButtonGroup className="reaction-buttons">
        {reactions.map((reaction) => (
          <div key={reaction.type} className="reaction-container">
            <Button
              size="sm"
              className={`icon-button ${reaction.type}`}
              onClick={() => handleClick(reaction.type)}
            >
              {iconMap[reaction.type] || null}
            </Button>
            <span className="reaction-count">{reaction.count}</span>
          </div>
        ))}
      </ButtonGroup>
    </ButtonToolbar>
  );
}

export default ReactionList;
