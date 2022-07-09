import React,{useState} from "react";
import './App.css';
import Form from "./Form"

import drug1 from "./data/drug1.json"
import drug2 from "./data/drug2.json"

function App() {
	const [state,setState] = useState()
	
	console.log(state)
	
	const handleDrug1=()=>{
		setState(drug1)
	}
	
	const handleDrug2 = ()=>{
		setState(drug2)
	}	
	
	return (
		<div>
		<span>Select the drug type: </span>
		<button onClick={handleDrug1}>Drug1</button><span>   </span>
		<button onClick={handleDrug2}>Drug2</button>
		{state ? <Form state={state}/> : null}
		</div>
  );
}

export default App;
