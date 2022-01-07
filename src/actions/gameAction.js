import axios from "axios";
import { popularGamesURL } from "../api";

// Action Creator

export const loadGeames = () => async (dispath) => {
  // Fetch Axios
  const popularData = await axios.get(popularGamesURL());

  dispath({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
    },
  });
};
