import React, { useEffect } from "react";
// Redux
import { useDispatch } from "react-redux";
import { loadGeames } from "../actions/gameAction";

function Home() {
  // Fetch Games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGeames());
  });
  return (
    <div className="home">
      <h1>Home</h1>
    </div>
  );
}

export default Home;
