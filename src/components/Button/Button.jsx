
import getStyledElements from "./getButtonStyling";
function Button({text , onClickHandler, styleType ='primary' , type="button"}){


    return(
        <button 
        onClick={onClickHandler} 
        className={`px-4 py-2 text-white ${getStyledElements(styleType)} `} 
        type={type}
        >
        {text}
           
        </button>
    )
}



export default Button;
