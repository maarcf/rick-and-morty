import React, { useState, useEffect } from 'react';
import CardsSection from './components/CardsSection';
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(data => {
      setCharacters(data.results);
    });
  }, []);

  console.log(characters);

  return (
    <div className="App">
      <CardsSection characters={characters} />
    </div>
  );
}

export default App;
