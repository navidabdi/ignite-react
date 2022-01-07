import React from "react";
// Components And Pages
import Home from "./pages/Home";
import GlobalStyle from "./globalStyles";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App container">
      <GlobalStyle />
      <Route path={["/games/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
