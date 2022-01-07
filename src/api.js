// Base URL
const {REACT_APP_RAWG_API}= process.env;
const base_url = "https://api.rawg.io/api/";
const sample_url =
  "https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7";
const base_url_platforms = "https://api.rawg.io/api/platforms?key=";

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
const popular_games = `games?key=${REACT_APP_RAWG_API}&dates=${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
