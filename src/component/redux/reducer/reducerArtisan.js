import {REACT_APP_DELETE_ARTISAN,REACT_APP_POST_ARTISAN,REACT_APP_GET_ARTISAN,REACT_APP_GET_ARTISAN_FAILED} from '../action/type'



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

    case "GET_ArtisanById_SUCCEDED":
  return {
    ...state,
    datas: payload,
   
  };

case REACT_APP_POST_ARTISAN:
  return{
    ...state,
    datas:[...state.datas,payload]
  };
  case REACT_APP_DELETE_ARTISAN:
                return {
                  ...state,
                  datas: state.datas.filter(
                    data => data._id !== payload
                  )
                };

}
  console.log('state action', state)
  return state
}
