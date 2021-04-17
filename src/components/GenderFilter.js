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
        />
        <InputRadio
          nameRadio="gender"
          value="male"
          handleChange={handleChangeGender}
          text="Male"
        />
        <InputRadio
          nameRadio="gender"
          value="genderless"
          handleChange={handleChangeGender}
          text="Genderless"
        />
        <InputRadio
          nameRadio="gender"
          value="unknown"
          handleChange={handleChangeGender}
          text="Unknown"
        />
        <InputRadio
          nameRadio="gender"
          value=""
          handleChange={handleChangeGender}
          text="All"
        />
      </div>
    </label>
  );
};

export default GenderFilter;
