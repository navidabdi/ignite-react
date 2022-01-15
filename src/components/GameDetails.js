import React from "react";

// Styling and Animations
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// Resize API Images
import { smallImage } from "../util";
// Import Images
import Android from "../img/Android.svg";
import iOS from "../img/iOS.svg";
import Iphone from "../img/Iphone.svg";
import Nintendo from "../img/Nintendo.svg";
import Steam from "../img/PC.svg";
import PlayStation from "../img/PlayStation.svg";
import Xbox from "../img/Xbox.svg";
import Gamepad from "../img/Gamepad.svg";
const GameDetails = ({ pathID }) => {
  // Exit Detail
  const history = useHistory();
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      // document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  // Get Platform Images
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return PlayStation;
      case "Xbox One":
        return Xbox;
      case "PC":
        return Steam;
      case "Nintendo Switch":
        return Nintendo;
      case "iOS":
        return iOS;
      case "Android":
        return Android;
      default:
        return Gamepad;
    }
  };

  // Get The Data
  const { game, screen, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <StyeldGameDetails className="shadow" onClick={exitDetailHandler}>
          <motion.div
            initial={{ x: "50%", y: "-50%" }}
            animate={{
              x: "-50%",
              y: "-50%",
            }}
            exit={{ x: "-50%", y: "50%" }}
            className="detail"
            layoutid={pathID}
          >
            <div className="stats">
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
              </div>
              <div className="info">
                <h3>Platforms</h3>
                <div className="platforms">
                  {game.platforms.map((data) => (
                    <img
                      className={data.platform.id}
                      src={getPlatform(data.platform.name)}
                      key={data.platform.id}
                    />
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
            <div className="description">
              <p>{game.description_raw}</p>
            </div>
            <div className="gallery">
              {screen.results.map((slide) => (
                <img
                  src={smallImage(slide.image, 1280)}
                  key={slide.id}
                  alt={game.name}
                />
              ))}
            </div>
          </motion.div>
        </StyeldGameDetails>
      )}
    </>
  );
};

const StyeldGameDetails = styled.div`
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
          img {
            width: 20px;
            margin-right: 1rem;
          }
          display: flex;
          align-items: center;
          justify-content: flex-start;
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
      p {
        font-size: 1.1rem;
        line-height: 2rem;
        text-align: justify;
        font-weight: 500;
      }
    }
  }
`;

export default GameDetails;
