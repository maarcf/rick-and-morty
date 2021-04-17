import React, { useState, useEffect } from 'react';

import CardsSection from './components/CardsSection';
import Filters from './components/Filters';
import Header from './components/Header';

import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [value, setValue] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?name=${value}&gender=${gender}&status=${status}`)
    .then(res => res.json())
    .then(data => {
      setCharacters(data.results);
    })
  }, [ value, gender, status ]);

  const handleChangeSearch = e => setValue(e.target.value);
  const handleChangeGender = e => setGender(e.target.value);
  const handleChangeStatus = e => setStatus(e.target.value);

  return (
    <div className="App">
      < Header />
      
      <Filters 
        value={value} 
        handleChangeSearch={handleChangeSearch}
        handleChangeGender={handleChangeGender}
        handleChangeStatus={handleChangeStatus}
      />

      <CardsSection characters={characters} />
    </div>
  );
}

export default App;
