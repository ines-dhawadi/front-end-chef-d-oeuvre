import { artisanReducer } from "../reducer/reducerArtisan";
import thunk from "redux-thunk"
import { createStore ,applyMiddleware,combineReducers}  from "redux";

const Reducers = combineReducers({

    artisanStore :artisanReducer 
  
   })
  
  const store =   createStore(Reducers,applyMiddleware(thunk));
    export default store