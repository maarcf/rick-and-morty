import InputRadio from "./InputRadio";

const GenderFilter = ({ handleChangeGender }) => {
  return (
    <label htmlFor="gender">
      <p>Gender</p>
      <div className="radio-container">
        <InputRadio
          nameRadio="gender"
          value="female"
          handleChange={handleChangeGender}
          text="Female"
          id="gender"
        />
        <InputRadio
          nameRadio="gender"
          value="male"
          handleChange={handleChangeGender}
          text="Male"
          id="gender"
        />
        <InputRadio
          nameRadio="gender"
          value="genderless"
          handleChange={handleChangeGender}
          text="Genderless"
          id="gender"
        />
        <InputRadio
          nameRadio="gender"
          value="unknown"
          handleChange={handleChangeGender}
          text="Unknown"
          id="gender"
        />
        <InputRadio
          nameRadio="gender"
          value=""
          handleChange={handleChangeGender}
          text="All"
          id="gender"
        />
      </div>
    </label>
  );
};

export default GenderFilter;
