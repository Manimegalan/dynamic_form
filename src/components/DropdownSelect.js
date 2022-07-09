import React from 'react';

function DropdownSelect(props){
	const {handleChange} = props
	const {label,isRequired, items, isReadonly} = props.value;
	
	return(
		<>
			<label>{label}: </label>
			<select name={label} required={isRequired} readOnly={isReadonly} onChange={e=>handleChange(e)}>
				<option value="">Select the option</option>
				{items?.map(values=><option value={values.value} key={values}>{values.text}</option>)}
			</select>
			<br/>
		</>
	);
};

export default DropdownSelect;