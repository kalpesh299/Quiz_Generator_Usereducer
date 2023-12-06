import {useContext,createContext, useReducer} from 'react';
import {reducer} from "../reducer/Quizreducer"


const Qcontext=createContext();

const initialState={
    questions:[],
    marks:0,
   idx:0

}

const QuizProvider=({children})=>{
const[state,dispatch]=useReducer(reducer,initialState);
return <Qcontext.Provider value={{state,dispatch}}>
    {children}
</Qcontext.Provider>

}


const useQuizcontext=()=>{

const context=useContext(Qcontext);
return context;

}


export {useQuizcontext,QuizProvider}



