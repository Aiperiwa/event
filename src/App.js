import React from 'react';
import './App.css';
import Header from './components/header/header';
import FirstContent from './components/first-section/FirstSection';
import Map from './components/map/map'

export const App = () => {
  return (
    <div>
      <Header />
      <FirstContent />
      <Map />
    </div>
  );
};

export default App; 
