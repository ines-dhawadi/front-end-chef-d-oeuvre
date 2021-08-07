import {REACT_APP_GET_ARTISAN,REACT_APP_GET_ARTISAN_FAILED} from '../action/type'



const initialState ={
    datas :[]
}



export const artisanReducer =(state =initialState ,action )=>{
  
    
    const {type,payload}= action;
    
    switch(type){
      case  REACT_APP_GET_ARTISAN:
  return {
    ...state,
    datas: payload};
}
  console.log('state action', state)
  return state
}
