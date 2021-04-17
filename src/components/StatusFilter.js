import InputRadio from "./InputRadio";

const StatusFilter = ({ handleChangeStatus }) => {
  return (
    <label htmlFor="status">
      <p>Status</p>
      <div className="radio-container">
        <InputRadio
          nameRadio="gender"
          value="alive"
          handleChange={handleChangeStatus}
          text="Alive"
          id="status"
        />
        <InputRadio
          nameRadio="gender"
          value="dead"
          handleChange={handleChangeStatus}
          text="Dead"
          id="status"
        />
        <InputRadio
          nameRadio="gender"
          value="unknow"
          handleChange={handleChangeStatus}
          text="Unknow"
          id="status"
        />
        <InputRadio
          nameRadio="gender"
          value=""
          handleChange={handleChangeStatus}
          text="All"
          id="status"
        />
      </div>
    </label>
  );
};

export default StatusFilter;
