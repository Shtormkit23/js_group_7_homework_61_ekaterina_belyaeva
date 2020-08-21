import React, {useState} from 'react';
import './App.css';
import Countries from "./container/Countries/Countries";
import RickAndMorty from "./container/RickAndMorty/RickAndMorty";


function App() {
  const [componentName, setComponentName] = useState('Countries');

  let component;
  switch (componentName) {
    case 'Countries':
      component =  <Countries/>;
      break;
    case 'RickAndMorty':
      component = <RickAndMorty/>;
      break;
    default:
      component = null;
  }
  return (
      <>
        <div className="App-switch">
          <button onClick={() => setComponentName('Countries')}>Countries</button>
          <button onClick={() => setComponentName('RickAndMorty')}>Rick and Morty</button>
        </div>
        {component}
      </>
  )
}

export default App;
