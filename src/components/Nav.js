import React from "react";
// Styling and Animations
import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <StyledNav>
      <div className="container">
        <a href="/" className="logo">
          Ignite
        </a>
        <div className="search">
          <input type="text" />
          <button>Search</button>
        </div>
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
