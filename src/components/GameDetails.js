import React from "react";

// Styling and Animations
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useSelector } from "react-redux";

const GameDetails = () => {
  // Get The Data
  const { game, screen } = useSelector((state) => state.details);
  return (
    <StyeldGameDetails>
      <div className="detail">
        <div className="stats">
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.reting}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms">
              {game.platforms.map((platform) => (
                <h3 key={platform.platform.id}>(platform.platform.name)</h3>
              ))}
            </div>
          </div>
        </div>
        <div className="media">
          <img src={game.background_image} alt={game.name} />
        </div>
        <div className="description">{game.description_raw}</div>
        <div className="gallery">
          {screen.results.map((slide) => (
            <img src={slide.image} key={slide.id} alt={game.name} />
          ))}
        </div>
      </div>
    </StyeldGameDetails>
  );
};

const StyeldGameDetails = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
  .detail {
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 4rem;
    background: white;
    position: absolute;
    left: 10%;
  }
`;

export default GameDetails;
