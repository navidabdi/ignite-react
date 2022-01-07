import axios from "axios";

import { gameDetailsURL, gameScreenShotsURL } from "../api";

export const loadGameDetails = (id) => async (dispathch) => {
  const gameDetailData = await axios.get(gameDetailsURL(id));
  const screenShotData = await axios.get(gameScreenShotsURL(id));
  dispathch({
    type: "GET_DETAIL",
    payload: {
      game: gameDetailData.data,
      screen: screenShotData.data,
    },
  });
};
