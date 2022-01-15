import React, { useState } from "react";
// Styling and Animations
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux And Router
import { fetchSearch } from "../actions/gameAction";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const sumbitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <StyledNav>
      <div className="container">
        <a onClick={clearSearched} className="logo">
          Ignite
        </a>
        <form className="search">
          <input value={textInput} onChange={inputHandler} type="text" />
          <button onClick={sumbitSearch} type="submit">
            Search
          </button>
        </form>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  background: #fff;
  margin-bottom: 2rem;
  .container {
    display: flex;
    align-items: center;
    padding: 3rem 0;
    justify-content: space-between;
    a {
      font-size: 2rem;
      font-weight: bold;
      font-family: "Abril Fatface", cursive;
      cursor: pointer;
    }
    .search {
      display: flex;
      align-items: center;
      button,
      input {
        padding: 0.3rem 1rem;
        border: 1px solid #cfcfcf;
        outline: none;
        font-size: 1.1rem;
        line-height: 1.8rem;
      }
      button {
        cursor: pointer;
        font-size: 0.9rem;
      }
      input {
        width: 250px;
        border-right: 0;
      }
    }
  }
`;

export default Nav;
