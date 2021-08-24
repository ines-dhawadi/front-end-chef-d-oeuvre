

import {REACT_APP_SIGNIN_USER} from '../action/type'



const initialState ={
    datasUsers :[]
}



export const UserReducer =(state =initialState ,action )=>{
  
    
    const {type,payload}= action;
    
    switch(type){
//       case  REACT_APP_GET_ARTISAN:
//   return {
//     ...state,
//     datas: payload};

case REACT_APP_SIGNIN_USER:
  return{
    ...state,
    datasUsers:[...state.datas,payload]
  };
//   case REACT_APP_DELETE_ARTISAN:
//                 return {
//                   ...state,
//                   datas: state.datas.filter(
//                     data => data._id !== payload
//                   )
//                 };

}
  console.log('state action', state)
  return state
}
