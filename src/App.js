import React from "react";
// Components And Pages
import Nav from "./components/Nav";
import Home from "./pages/Home";
// Global Style
import GlobalStyle from "./globalStyles";
// Router
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <div className="App container">
        <GlobalStyle />
        <Route path={["/games/:id", "/"]}>
          <Home />
        </Route>
      </div>
    </>
  );
}

export default App;
