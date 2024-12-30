import { useEffect, useState } from "react";
import TextInputform from "./TextInputform";
import { useNavigate } from "react-router-dom";


function TextInputFormContainer() {
    const[inputType,setInputType] = useState("password");
    const[value , setValue] = useState("");

    const navigation = useNavigate();

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log("event is prevented");
    console.log("form submitted",value);
    if(value){
      navigation("/play",{state:{value: value}});
    }
  }

  function handleChangeInput(e) {
    console.log("text input changed");
    console.log(e.target.value);
    setValue(e.target.value);
  }

  function showHide(){
    console.log("show/hide button clicked");
    if(inputType==='password'){
        setInputType("text")
    }
    else{
        setInputType("password");
    }
  }
 
  function Temp(){
    useEffect(()=>{
      console.log("temp comp loaded");

      return () =>{
        console.log("unmounted");
      }
    },[]);
    return(
      <>
        <h1>Temp is here</h1>
      </>
    )
  }

  return (
    <>
   <TextInputform
    inputType={inputType}
      handleFormSubmit={handleFormSubmit}
      handleChangeInput={handleChangeInput}
      showHide={showHide}

    />

    {inputType==='password' ? <Temp/> : null}
    </>
 

    
  );
}

export default TextInputFormContainer;
