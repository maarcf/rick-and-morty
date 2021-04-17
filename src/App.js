import React, { useState, useEffect } from 'react';

import CardsSection from './components/CardsSection';
import Filters from './components/Filters';
import Header from './components/Header';
import Pagination from './components/Pagination';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [baseUrl, setBaseUrl] = useState("https://rickandmortyapi.com/api/character/?page=1");
  const [pageInfo, setPageInfo] = useState({});
  const [page, setPage] = useState(1);
  const [value, setValue] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch(`${baseUrl}&name=${value}&gender=${gender}&status=${status}`)
    .then(res => res.json())
    .then(data => {
      setCharacters(data.results);
      setPageInfo(data.info)
    })
  }, [ value, gender, status, baseUrl ]);

  console.log(pageInfo)

  const handleChangeSearch = e => {
    setValue(e.target.value);
    setPage(page - page + 1);
    setBaseUrl("https://rickandmortyapi.com/api/character/?page=1");
  }

  const handleChangeGender = e => {
    setGender(e.target.value);
    setPage(page - page + 1);
    setBaseUrl("https://rickandmortyapi.com/api/character/?page=1");
  }

  const handleChangeStatus = e => {
    setStatus(e.target.value);
    setPage(page - page + 1);
    setBaseUrl("https://rickandmortyapi.com/api/character/?page=1");
  }

  const handleClickPrevious = () => {
    pageInfo.prev && setBaseUrl(pageInfo.prev);
    pageInfo.prev && setPage(page - 1);
  }

  const handleClickNext = () => {
    pageInfo.next && setBaseUrl(pageInfo.next)
    pageInfo.next && setPage(page + 1)
  }


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

      <Pagination 
        handleClickPrevious={handleClickPrevious}
        page={page}
        handleClickNext={handleClickNext}
      />

      <Footer />
    </div>
  );
}

export default App;
