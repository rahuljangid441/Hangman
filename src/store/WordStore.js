import { create } from 'zustand';

//creates a stroe for the us

const wordStore = create((set)=>({
    wordList: [],
    word: '',

   

    setWordList: (list)=>{
        set((state)=>{
            console.log("state is ss",state)
            return{
                ...state,
                wordList: list
            }
        })
    },
    setWord:(newWord)=>{
        set((state)=>{
            return{
                ...state,
                word: newWord
            }
        })
    }
}));

export default wordStore;