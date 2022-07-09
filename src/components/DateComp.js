import React from "react";

function DateComp(props){
	const {handleChange} = props
	const {label, isRequired, isReadonly} = props.value;
	
	return(
		<>
			<label>{label}: </label>
			<input name={label} type="date" required={isRequired} readOnly={isReadonly} onChange={e=>handleChange(e)}></input><br/>
		</>
	);
};

export default DateComp;