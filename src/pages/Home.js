import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGeames } from "../actions/gameAction";
// Styling and Animations
import styled from "styled-components";
import { motion } from "framer-motion";
// Components
import Game from "../components/Game";
import GameDetails from "../components/GameDetails";
// Router
import { useLocation } from "react-router-dom";

const Home = () => {
  // Get The Current Location
  const location = useLocation();
  const pathID = location.pathname.split("/")[2];
  // console.log(pathID);
  // Fetch Games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGeames());
  }, [dispatch]);
  // Get The Data Back To Here
  const { popular, newGames, upComing } = useSelector((state) => state.games);

  return (
    <GameList>
      {pathID && <GameDetails />}
      <h2>Upcoming Games</h2>
      <div className="games">
        {upComing.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </div>
      <h2>Popular Games</h2>
      <div className="games">
        {popular.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </div>
      <h2>New Games</h2>
      <div className="games">
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </div>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  .games {
    padding: 3rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(430px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }
`;

export default Home;
