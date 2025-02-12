import jarjarImage from "./jarjar.jpg";
import r2Image from "./r2d2.jpg";
import c3poImage from "./3po.jpg";
import b1droidImage from "./b1droid.jpg";
import { FaRegAngry, FaRegSadCry } from "react-icons/fa";
import { LiaSpaceShuttleSolid } from "react-icons/lia";
import { GiLightSabers } from "react-icons/gi";
import { MdFavorite, MdThumbUp } from "react-icons/md";
import { FaRegLaughSquint } from "react-icons/fa";
import moment from "moment";
import { v4 as uuid } from "uuid";
import React from "react";

export const reaction = (type, count, icon) => ({
  type,
  count,
  icon,
});

const getRandomDate = () => {
  const randomNumber = Math.floor(Math.random() * Math.floor(5));
  return moment(Date.now()).subtract(randomNumber, "days").valueOf();
};

export const availableReactionsPredefined = [
  { type: "lightsaber", icon: <GiLightSabers /> },
  { type: "spaceship", icon: <LiaSpaceShuttleSolid /> },
  { type: "angry", icon: <FaRegAngry /> },
  { type: "cry", icon: <FaRegSadCry /> },
  { type: "like", icon: <MdThumbUp /> },
  { type: "love", icon: <MdFavorite /> },
  { type: "funny", icon: <FaRegLaughSquint /> },
];

export const comment = (
  by,
  text,
  imageSrc,
  created = getRandomDate(),
  updateId,
  reactions
) => ({
  text,
  by,
  created,
  imageSrc,
  id: uuid(),
  updateId,
  reactions,
});

export const update = (
  by,
  text,
  imageSrc,
  created = getRandomDate(),
  reactions = []
) => {
  return {
    by,
    text,
    created,
    imageSrc,
    id: uuid(),
    comments: [
      comment(
        "C3P0",
        "Sir, it's very possible this asteroid is not stable",
        c3poImage,
        getRandomDate(),
        uuid(),
        [reaction("like", 1), reaction("love", 5), reaction("funny", 2)]
      ),
      comment(
        "C3P0",
        "I suggest a new strategy, Artoo: let the Wookie win",
        c3poImage,
        getRandomDate(),
        uuid(),
        [reaction("like", 100), reaction("love", 5), reaction("funny", 6)]
      ),
      comment(
        "B1_battle_droid",
        "Roger, roger.",
        b1droidImage,
        getRandomDate(),
        uuid(),
        [reaction("like", 42), reaction("love", 3), reaction("funny", 9)]
      ),
    ],
    reactions,
  };
};

export default {
  updates: [
    update(
      "JarJar",
      "Mesa called Jar Jar Binks, mesa your humble servant!",
      jarjarImage
    ),
    update("R2-D2", "Bleep boop, beep beep.", r2Image),
    update(
      "JarJar",
      "Yousa should follow me now, okay? My warning yous: Gungans no like outsiders. Do not 'spect a warm welcome.",
      jarjarImage,
      Date.parse("24 Dec 2024 00:12:00"),
      [reaction("love", 6), reaction("funny", 32), reaction("spaceship", 25)]
    ),
    update(
      "JarJar",
      "The BOOOM! Getin very scared and grabin that Jedi, the pah ... mesa here",
      jarjarImage,
      Date.parse("04 Dec 2024 00:12:00"),
      [
        reaction("like", 5),
        reaction("love", 10),
        reaction("funny", 7),
        reaction("spaceship", 25),
      ]
    ),
    update(
      "JarJar",
      'It\'s-A Clear Desa Separatists Made A Pact Wesa Desa Federation Du Trade. Senators, "Dellow Felagates." In Response To This Direct Threat To The Republic, Mesa Propose That The Senate Immediately Provides Emergency Powers To The Supreme Chancellor.',
      jarjarImage,
      Date.now(),
      [reaction("like", 5), reaction("love", 1), reaction("funny", 7)]
    ),
  ],
};

export const commentComments = [
  comment(
    "B1_battle_droid",
    "Roger, roger.",
    b1droidImage,
    getRandomDate(),
    uuid(),
    [reaction("like", 2), reaction("love", 3), reaction("funny", 1)]
  ),
  comment("R2", "Roger, roger.", r2Image, getRandomDate(), uuid(), [
    reaction("like", 8),
    reaction("love", 1),
    reaction("funny", 54),
  ]),
];
