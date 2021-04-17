const InputRadio = ({nameRadio, value, handleChange, text, labelFor}) => {
  return(
    <>
      <input 
        type="radio" 
        name={nameRadio} 
        value={value} 
        onChange={handleChange}
        id={labelFor}/>
        {text}
    </>
  )
}

export default InputRadio;