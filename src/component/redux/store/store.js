import { artisanReducer } from "../reducer/reducerArtisan";
import { reducerClient } from "../reducer/reducerClient";
import {  userReducer} from "../reducer/reducerUser";
import thunk from "redux-thunk"
import { createStore ,applyMiddleware,combineReducers}  from "redux";
import { composeWithDevTools } from "redux-devtools-extension";



const Reducers = combineReducers({

    artisanStore :artisanReducer, 
    clientStore:reducerClient,
    userStore:userReducer
   })
  
  const store =   createStore(Reducers,composeWithDevTools(applyMiddleware(thunk)));
    export default store