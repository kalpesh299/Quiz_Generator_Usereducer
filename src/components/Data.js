import React, { useEffect,useState } from 'react'
import { useQuizcontext } from '../localcontext/QuizContext'
import { FetchAllquestions } from '../constants/Allactions';
import {IncrmentIndex,IncrementMarks} from '../constants/Allactions'
import { v4 as uuidv4 } from 'uuid';

export const Data = () => {
    const {state,dispatch}=useQuizcontext();
    const [isload,setisload]=useState(false);
    const [timer,setTime]=useState(60);

    useEffect(()=>{
        FetchAllquestions(dispatch)
       },[])
    //    console.log(state.idx)
    //    console.log(state.marks)
    useEffect(()=>{

        const setTimer=setInterval(()=>{
           if(timer>0){setTime(timer-1)} 
        },1000)
        return ()=>{
                 clearTimeout(setTimer);
        }
        

    },[timer,state.idx])
    
   


  return (
    <div>
        {
          !isload ?( 
          <h1 onClick={()=>setisload(true)} className='text-2xl font-bold'>Start Your Quiz</h1>
          ) : state.idx<10 && (<div>
            <h1  className='text-2xl font-bold'>Quiz Stared</h1>
            <h1 className='font-bold'>You need to complete test In <span className={`font-bold ${timer > 10 && 'text-green-600'} ${timer <= 10 && 'text-red-600'}`}>{timer}</span> Sec</h1>
            <div>
                <h1 className='text-blue-800 font-mono text-lg font-bold'>Question no {state.idx+1}</h1>
                <h2 className='text-xl bg-gray-200 p-3 font-bold'>Q.{state.idx+1}){state.questions[state.idx].question}</h2>
                <ul>
{
state.questions[state.idx].incorrect_answers.map((el,idx)=>{
    return <li className='text-xl bg-red-200 p-2 mt-2 w-1/5 m-auto' onClick={()=>{IncrmentIndex(dispatch)}} key={uuidv4()}>Opt {idx+1}- {el}</li>
})   
}
                
<li className='text-xl bg-red-200 p-2 mt-2 w-1/5 m-auto' onClick={()=>{IncrementMarks(dispatch)}}>Opt 4- {state.questions[state.idx].correct_answer}</li>
                </ul>
                
            </div>
          </div>) 
        }

        {state.idx>9&&
        <div className='flex justify-center items-center flex-col'>
            <h1 className='text-2xl font-bold'>Quiz Has been ended </h1>
            <h2 className='text-xl font-bold text-gray-800'>Your Score is {state.marks}/10</h2>
            <h1 className='text-lg font-bold text-green-400'>Visit us for more practice</h1>
            </div>
        }
        
    </div>
  )
}
