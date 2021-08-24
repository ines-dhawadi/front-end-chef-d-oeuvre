import {signInR } from'../requests/requestUser'
import {REACT_APP_SIGNIN_USER} from './type'

// SignIn 

export const  SignInA =(email,password)=> async (dispatch)=>{
try{
const res = await signInR(email,password);
dispatch({
    type: REACT_APP_SIGNIN_USER,
    payload:res.data})
}
catch(err) {
    console.log(err);
  }


}