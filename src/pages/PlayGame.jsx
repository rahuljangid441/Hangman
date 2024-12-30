// import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import MaskedText from "../MaskedText/MaskedText";
import LetterButtons from "../LetterButtons/LetterButtons";
import { useState , useContext} from "react";
import HangMan from "../components/HangMan/HangMan";
import { WordContext } from "../context/WordContext";
import wordStore from '../store/WordStore';


function PlayGame(){

    // const location = useLocation();
    // const word = location.state?.value;

    // const { word} = useContext(WordContext);

    const { wordList ,word } = wordStore();

    // const { state } = useLocation();

    const[guessedLetter , setGuessedLetters] = useState([]);

    const[step , setStep] = useState(0);

    function handleLetterClick(letter){
        if(word.toUpperCase().includes(letter)){
            console.log("correct")
        }
        else{
            console.log("wrong");
            setStep(step+1);
        }
        setGuessedLetters([...guessedLetter , letter]);
    }

    console.log("hjh",word);
    return(
       <>
         <h1>
            Play Game  </h1>

           {/* {wordList.map((word)=>{
                return(
                    <li key={word.id}>
                        {word.wordValue}
                    </li>
                )
           })} */}

            {word && (
                <>
                <MaskedText text={word} guessedLetters={guessedLetter}/>


<div>
    <LetterButtons text={word} guessedLetter={guessedLetter} onLetterClick={handleLetterClick}/>
</div>

<div>
<HangMan step ={step}/>
</div>
                </>
            )}



<Link to='/start' className = "text-blue-400">Start Game</Link>
       </>
       
    )
}

export default PlayGame;