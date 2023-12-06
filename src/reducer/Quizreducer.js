import{
    FETCH_ALL_QESTIONS,
    INCREMENT_MARKS,
    IDX_INCR
} from "../constants/Actions"


export const reducer =(state,action)=>{

    switch(action.type){
        case FETCH_ALL_QESTIONS:{
          return {...state,questions:action.payload}
        }
        case INCREMENT_MARKS:{
            return {...state,marks:state.marks+1}
        }
      case IDX_INCR:{
        
        return {...state,idx:state.idx+1}
      }
        default:
    return state
    }
    

}