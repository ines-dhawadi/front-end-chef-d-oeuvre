import { artisanReducer } from "../reducer/reducerArtisan";
import { reducerClient } from "../reducer/reducerClient";
import thunk from "redux-thunk"
import { createStore ,applyMiddleware,combineReducers}  from "redux";

const Reducers = combineReducers({

    artisanStore :artisanReducer, 
    clientStore:reducerClient
  
   })
  
  const store =   createStore(Reducers,applyMiddleware(thunk));
    export default store