import { artisanReducer } from "../reducer/reducerArtisan";
import { reducerClient } from "../reducer/reducerClient";
import {  userReducer} from "../reducer/reducerUser";
import thunk from "redux-thunk"
import { createStore ,applyMiddleware,combineReducers}  from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import usersReducer from "../reducer/reducerUserss";



const Reducers = combineReducers({

    artisanStore :artisanReducer, 
    clientStore:reducerClient,
    userStore:userReducer,
     usersStore: usersReducer
   })
  
  const store =   createStore(Reducers,composeWithDevTools(applyMiddleware(thunk)));
    export default store