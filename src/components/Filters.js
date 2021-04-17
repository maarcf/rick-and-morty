import SearchFilter from './SearchFilter';
import GenderFilter from './GenderFilter';
import StatusFilter from './StatusFilter';

import "./Filters.css";

const Filters = ({ value, handleChangeSearch, handleChangeGender, handleChangeStatus }) => {
  
  const handleSubmit = e => e.preventDefault();

  return (
    <form onSubmit={handleSubmit}>      
      <SearchFilter 
        handleChangeSearch= {handleChangeSearch} 
        value={value} 
      />

      <GenderFilter 
        handleChangeGender={handleChangeGender} 
      />

      <StatusFilter 
        handleChangeStatus={handleChangeStatus} 
      />      
    </form>
  );
};

export default Filters;
