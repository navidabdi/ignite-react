import React from "react";

// Styling and Animations
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useDispatch } from "react-redux";
import { loadGameDetails } from "../actions/detailsAction";
// Router
import { Link } from "react-router-dom";
// Resize Image
import { smallImage } from "../util";
// Animations
import { popup } from "../animations";

const Game = ({ name, released, image, id }) => {
  const stringPathId = id.toString();

  // Load Details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadGameDetails(id));
    // document.body.style.overflow = "hidden";
  };
  return (
    <StyledGame
      variants={popup}
      initial="hidden"
      animate="show"
      layoutid={stringPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`/games/${id}`}>
        <div className="des">
          <h3>{name}</h3>
          <p>{released}</p>
        </div>
        <img src={smallImage(image, 640)} alt={name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  background-color: white;
  box-shadow: 0 0 8px 3px rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  .des {
    padding: 1.5rem;
    h3 {
      margin-bottom: 0.5rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    p {
      color: #607d8b;
    }
  }
  img {
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
