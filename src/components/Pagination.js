import "./Pagination.css";

const Pagination = ({ disabledPrev, disabledNext, handleClickPrevious, page, handleClickNext}) => {

  return (
    <nav>
      <button onClick={handleClickPrevious} disabled={!disabledPrev}>Prev</button>
      <p>{page}</p>
      <button onClick={handleClickNext} disabled={!disabledNext}>Next</button>
    </nav>
  );
};

export default Pagination;