import Button from "../Button/Button";
import TextInput from "../Textbox/TextInput";


function TextInputform({inputType, handleFormSubmit, handleChangeInput ,showHide }){

    console.log("handleFormSubmit:", handleFormSubmit);
    return(

        
        <form onSubmit={handleFormSubmit}>
            <div>
                <TextInput type={inputType} label="Enter a word or phrase" placeholder="enter your phrase" onChangeHandler={handleChangeInput}/>
            </div>
            
            
            <div>
              

                <Button text={inputType==='password'? "show" : "hide"} styleType="warning" onClickHandler={showHide} />
            </div>


            <div>
              

                <Button text="Submit" styleType="primary" type="submit" />
            </div>
        </form>
    )
}

export default TextInputform;