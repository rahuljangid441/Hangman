import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { useEffect } from "react";
import { useContext } from "react";
import { WordContext } from "../context/WordContext";
import wordStore from "../store/WordStore";
function Home(){

    // const[word , setWord] = useState('');
    // const{  setWord} = useContext(WordContext);

    const { setWordList ,setWord } = wordStore()

    async function fetchWords(){
        const response = await fetch('http://localhost:3000/words');
        const data = await response.json();
        console.log(data);

        setWordList([...data])

        const randomIndex = Math.floor(Math.random() * data.length);
        console.log(data[randomIndex]);

        setWord(data[randomIndex].wordValue);

    }
    useEffect(()=>{
        fetchWords();
    },[]);

    return(
        <>
            <Link to='/play' >
            <Button text="Single Player" />
            </Link>
            <br/>
            <div className="mt-4">
            <Link to="/start">
            <Button text="Multi-player" styleType="secondary" />
            </Link>
            </div>
           
        </>
    )
}

export default Home;