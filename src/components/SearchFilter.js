const SearchFilter = ({ handleChangeSearch, value }) => {
  return (
    <label htmlFor="search">
      <p>Search</p>
      <input
        type="search"
        onChange={handleChangeSearch}
        value={value}
        placeholder="Character's Name"
        id="search"
      />
    </label>
  );
};

export default SearchFilter;
