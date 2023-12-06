import React from 'react'
import { useQuizcontext } from '../localcontext/QuizContext'
import { v4 as uuidv4 } from 'uuid';

export const DataTwo = () => {
    const {state,dispatch}=useQuizcontext();
    
  return (
    <div>
        {state.questions.map((el)=>{
            return <h1 key={uuidv4()}>{el.category}</h1>
        })}
    </div>
  )
}
