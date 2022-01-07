import React from "react";

// Styling and Animations
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ name, released, image }) => {
  return (
    <StyledGame>
      <div className="des">
        <h3>{name}</h3>
        <p>{released}</p>
      </div>
      <img src={image} alt={name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  background-color: white;
  box-shadow: 0 0 8px 3px rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  .des {
    padding: 1.5rem;
    h3 {
      margin-bottom: 0.5rem;
    }
    p {
      color: #607d8b;
    }
  }
  img {
    height: 33vh;
    object-fit: cover;
    margin-bottom: -5px;
  }
`;

export default Game;
