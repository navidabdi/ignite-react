import React from "react";

// Styling and Animations
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// Resize Image
import { smallImage } from "../util";
const GameDetails = () => {
  // Exit Detail
  const history = useHistory();
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      // document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  // Get The Data
  const { game, screen, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <StyeldGameDetails className="shadow" onClick={exitDetailHandler}>
          <div className="detail">
            <div className="stats">
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
              </div>
              <div className="info">
                <h3>Platforms</h3>
                <div className="platforms">
                  {game.platforms.map((data) => (
                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                  ))}
                </div>
              </div>
            </div>
            <div className="media">
              <img
                src={smallImage(game.background_image, 1280)}
                alt={game.name}
              />
            </div>
            <div className="description">{game.description_raw}</div>
            <div className="gallery">
              {screen.results.map((slide) => (
                <img
                  src={smallImage(slide.image, 1280)}
                  key={slide.id}
                  alt={game.name}
                />
              ))}
            </div>
          </div>
        </StyeldGameDetails>
      )}
    </>
  );
};

const StyeldGameDetails = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;

  .detail {
    @media only screen and (max-width: 992px) {
      width: 90%;
    }
    height: 90%;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 70%;
    border-radius: 0.5rem;
    padding: 2rem 3rem;
    background: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &::-webkit-scrollbar {
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
      background: #ff7676;
    }
    &::-webkit-scrollbar-track {
      background: white;
      border-radius: 0.5rem;
    }
    .stats {
      .rating {
        h3 {
          margin-bottom: 1rem;
        }
      }
      display: flex;
      align-items: center;
      justify-content: space-between;
      .info {
        h3 {
          margin-bottom: 1rem;
        }
        .platforms {
          display: flex;
          align-items: center;
          justify-content: space-between;
          h3 {
            font-size: 0.8rem;
            font-weight: 300;
            margin-left: 0.7rem;
            &:first-child {
              margin-left: 0;
            }
          }
        }
      }
    }
    .media {
      margin-top: 2rem;
    }
    .description {
      margin: 3rem 0;
    }
  }
`;

export default GameDetails;
