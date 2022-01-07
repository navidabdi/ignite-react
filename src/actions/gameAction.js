import axios from "axios";
import { popularGamesURL, upComingGamesURL, newGamesURL } from "../api";

// Action Creator

export const loadGeames = () => async (dispath) => {
  // Fetch Axios
  const popularData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upComingData = await axios.get(upComingGamesURL());

  dispath({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      newGames: newGamesData.data.results,
      upcoming: upComingData.data.results,
    },
  });
};
