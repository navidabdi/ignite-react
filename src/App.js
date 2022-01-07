import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { loadGeames } from './actions/gameAction';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(loadGeames());
  })
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
