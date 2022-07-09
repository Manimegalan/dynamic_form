import React from "react";

function NumberComp(props){
	const {handleChange} = props
	const {label,value,isRequired,unit,isReadonly} = props.value;
	
	return(
		<>
			<label>{label}: </label>
			<input name={label} type="number" value={value} required={isRequired} readOnly={isReadonly} onChange={e=>handleChange(e)}></input>
			<span> {unit}</span>
			<br/>
		</>
	);
};

export default NumberComp;