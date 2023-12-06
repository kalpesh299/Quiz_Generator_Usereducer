import axios  from "axios";
import{
    FETCH_ALL_QESTIONS,
    INCREMENT_MARKS,
    IDX_INCR
} from "../constants/Actions"


export const FetchAllquestions=async(dispatch)=>{
    try{
        const response=await axios.get("https://opentdb.com/api.php?amount=10&type=multiple");
      

     dispatch({type:FETCH_ALL_QESTIONS,payload:response.data.results})
    }catch(error){
        console.log("Issue in API",error)
    }
   

}

export const IncrementMarks=(dispatch)=>{
    dispatch({type:INCREMENT_MARKS})
    dispatch({type: IDX_INCR})
}

export const IncrmentIndex=(dispatch)=>{
dispatch({type: IDX_INCR})
}

// export const QuizStarted=(dispatch)=>{
//     // dispatch
//     dispatch({type:QUIZ_STARTED})
//     console.log("hello")
// }