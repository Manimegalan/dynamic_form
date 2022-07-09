import React,{useState,useEffect} from "react";
import DropdownSelect from "./components/DropdownSelect";
import DateComp from "./components/DateComp"
import NumberComp from "./components/NumberComp"

function Form({state}){
	const [formData,setFormData] = useState(state)
	const [formState, setFormState] = useState()
	
	const handleChange = (e)=>{
		setFormState((prevState)=>(
			{...prevState,[e.target.name]:e.target.value }
		))
	}
	
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formState)
	}
	
	useEffect(()=>{
		setFormData(state)
	},[state])
	
	useEffect(()=>{
		const weight = formState?.Weight, height = formState?.Height*0.01;
		const updatedState = state.fields.map(val=>val.key==="bmi"? {...val, value:weight/(height*height)} : val)
		if(formState?.Height&&formState?.Weight){
			setFormState((prevState)=>(
				{...prevState, BMI: weight/(height*height) }
			))
			setFormData({fields:updatedState})
		}
	},[formState?.Height&&formState?.Weight])
	
	return(
		<form onSubmit={handleSubmit}>
		{formData?.fields.sort((a,b)=>(a.order-b.order)).map((value,index)=>{
			let result;
			if(value.type === "dropdown"){
				result= <DropdownSelect value={value} key={value.key} handleChange={handleChange}/>
			}
			else if(value.type === "date"){
				result= <DateComp value={value} key={value.key} handleChange={handleChange}/>
			}else if(value.type === "number"){
				result= <NumberComp value={value} key={value.key} handleChange={handleChange}/>
			}
			return result;
		})}
		<button type="submit">Submit</button>
		</form>
	);
};

export default Form;