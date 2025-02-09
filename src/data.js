import jarjarImage from "./jarjar.jpg";
import r2Image from "./r2d2.jpg";
import c3poImage from "./3po.jpg";
import b1droidImage from "./b1droid.jpg";

import moment from "moment";
import { v4 as uuid } from "uuid";

export const reaction = (type, count, icon) => ({
  type,
  count,
  icon,
});

const getRandomDate = () => {
  const randomNumber = Math.floor(Math.random() * Math.floor(5));
  return moment(Date.now()).subtract(randomNumber, "days").valueOf();
};

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

export const update = (by, text, imageSrc, created = getRandomDate()) => {
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
        [reaction("like", 1), reaction("love", 0), reaction("funny", 2)]
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
        "B1 battle droid",
        "Roger, roger.",
        b1droidImage,
        getRandomDate(),
        uuid(),
        [reaction("like", 42), reaction("love", 3), reaction("funny", 0)]
      ),
    ],
  };
};

export default {
  updates: [
    update(
      "Jar Jar",
      "Mesa called Jar Jar Binks, mesa your humble servant!",
      jarjarImage
    ),
    update("R2-D2", "Bleep boop, beep beep.", r2Image),
    update(
      "Jar Jar",
      "Yousa should follow me now, okay? My warning yous: Gungans no like outsiders. Do not 'spect a warm welcome.",
      jarjarImage
    ),
    update(
      "Jar Jar",
      "The BOOOM! Getin very scared and grabin that Jedi, the pah ... mesa here",
      jarjarImage
    ),
    update(
      "Jar Jar",
      'It\'s-A Clear Desa Separatists Made A Pact Wesa Desa Federation Du Trade. Senators, "Dellow Felagates." In Response To This Direct Threat To The Republic, Mesa Propose That The Senate Immediately Provides Emergency Powers To The Supreme Chancellor.',
      jarjarImage
    ),
  ],
};
