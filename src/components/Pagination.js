import "./Pagination.css";

const Pagination = ({ handleClickPrevious, page, handleClickNext}) => {
  return (
    <nav>
      <button onClick={handleClickPrevious}>Prev</button>
      <p>{page}</p>
      <button onClick={handleClickNext}>Next</button>
    </nav>
  );
};

export default Pagination;