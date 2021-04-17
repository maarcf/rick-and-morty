const InputRadio = ({nameRadio, value, handleChange, text}) => {
  return(
    <>
      <input 
        type="radio" 
        name={nameRadio} 
        value={value} 
        onChange={handleChange}
        />
        {text}
    </>
  )
}

export default InputRadio;