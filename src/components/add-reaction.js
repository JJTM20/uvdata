import React, { useState } from "react";
import { Button, ButtonGroup, ListGroup } from "react-bootstrap";
import { MdOutlineAddReaction } from "react-icons/md";
import { LiaSpaceShuttleSolid } from "react-icons/lia";
import { GiLightSabers } from "react-icons/gi";
import ReactionList from "./reaction-list";
import { FaRegAngry, FaRegSadCry } from "react-icons/fa";
import { reaction } from "../data";

export function AddReaction() {
  const [reactions, setReactions] = useState(comment.reactions);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [availableReactions, setAvailableReactions] = useState([
    { type: "lightsaber", icon: <GiLightSabers /> },
    { type: "spaceship", icon: <LiaSpaceShuttleSolid /> },
    { type: "angry", icon: <FaRegAngry /> },
    { type: "cry", icon: <FaRegSadCry /> },
  ]);
  return <div>AddReaction</div>;
}

export default AddReaction;
