// Base URL
const { REACT_APP_RAWG_API } = process.env;
const base_url = `https://api.rawg.io/api/games?key=${REACT_APP_RAWG_API}`;

// Getting The Date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const naextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games
const popular_games = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`;
export const popularGamesURL = () => `${base_url}${popular_games}`;

// Up Coming Games
const upcoming_games = `&dates=${currentDate},${naextYear}&ordering=-added&page_size=12`;
export const upComingGamesURL = () => `${base_url}${upcoming_games}`;

// New Games
const new_games = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=12`;
export const newGamesURL = () => `${base_url}${new_games}`;

// Game Details
export const gameDetailsURL = (gameID) =>
  `https://api.rawg.io/api/games/${gameID}?key=${REACT_APP_RAWG_API}`;

// Game ScreenShots URL
export const gameScreenShotsURL = (gameID) =>
  `https://api.rawg.io/api/games/${gameID}/screenshots?key=${REACT_APP_RAWG_API}`;

// Searched Game
export const searchGameURL = (gameName) =>
  `${base_url}&search=${gameName}&page_size=9`;
