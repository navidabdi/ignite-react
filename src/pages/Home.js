import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGeames } from "../actions/gameAction";
// Styling and Animations
import styled from "styled-components";
import { motion } from "framer-motion";
// Components
import Game from "../components/Game";

function Home() {
  // Fetch Games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGeames());
  }, [dispatch]);
  // Get The Data Back To Here
  const { popular, newGames, upComing } = useSelector((state) => state.games);

  return (
    <GameList>
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
    </GameList>
  );
}

const GameList = styled(motion.div)`
  .games {
    padding: 3rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }
`;

export default Home;
