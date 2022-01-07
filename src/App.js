import React from 'react';
import GlobalStyle from './globalStyles';
// Components And Pages
import Home from './pages/Home';

function App() {
  return (
    <div className="App container">
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;
