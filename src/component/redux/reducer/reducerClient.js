import { REACT_APP_DELETE_CLIENT, REACT_APP_GET_CLIENT, REACT_APP_GET_CLIENT_FAILED } from "../action/type";


const initialState = {
dataClient:[]
}

export const reducerClient=(state =initialState ,action)=>{
    const {type,payload}= action
    switch(type){
        case REACT_APP_GET_CLIENT:
        return{
            ...state,
            dataClient:payload,
        };
        case  REACT_APP_DELETE_CLIENT:
                return {
                  ...state,
                  dataClient: state.dataClient.filter(
                    data => data._id !== payload
                  )
                };
    }
    return state
}




// export const artisanReducer =(state =initialState ,action )=>{
  
    
//     const {type,payload}= action
    
//     switch(type){
//       case  REACT_APP_GET_ARTISAN:
//   return {
//     ...state,
//     datas: payload};

// case REACT_APP_POST_ARTISAN:
//   return{
//     ...state,
//     datas:[...state.datas,payload]
//   };
//   case REACT_APP_DELETE_ARTISAN:
//                 return {
//                   ...state,
//                   datas: state.datas.filter(
//                     data => data._id !== payload
//                   )
//                 };

// }
//   console.log('state action', state)
//   return state
// }
