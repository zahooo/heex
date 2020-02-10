import React, { useState } from 'react';
import './css/main.css';

//import components
import Map from './components/Map';
import ControlPanel from './components/ControlPanel';

//import helpers
import { settings } from './utils/appUtils';

const App = () => {
  // State hook for the map size.
  const [mapSize, setMapSize] = useState('medium');
  // State hook for the map type.
  const [mapType, setMapType] = useState('land');
  // State hook 
  const [stage, setStage] = useState('initial');

  // Event handler for selecting the map size
  const selectMapsize = e => {
    setMapSize(e.target.value);
  }
  // Event handler for selecting the map type
  const selectMapType = e => {
    setMapType(e.target.value);
  }

  return (
    <>
      <ControlPanel
        settings={settings}
        setters={[selectMapsize, selectMapType]}
      />
      {true === false && <Map />}
    </>
  )
};

export default App;
