import {addClient,updtClient,deleteClient,getAllClient} from "../requests/requestClient";
import { REACT_APP_ADD_CLIENT, REACT_APP_UPDATE_CLIENT,REACT_APP_DELETE_CLIENT, REACT_APP_GET_CLIENT, REACT_APP_GET_CLIENT_FAILED } from "./type";




export function GetAllClientA(){
    return dispatch =>{
        getAllClient() 
        .then(client => dispatch(
{type :REACT_APP_GET_CLIENT, payload :client })
        )
        .catch(err=> dispatch({
            type: REACT_APP_GET_CLIENT_FAILED,
            payload: err
        }))
    }
}
// add client
export const AddClientA=()=> async (dispatch)=>{
try{
  const res= await addClient ();
dispatch({
  type:REACT_APP_ADD_CLIENT,
  payload :res.data })



}catch (error){
  console.log(error);
}


}
 // delete client 


  export const deleteClientA = (id)=> async (dispatch) => {
    try {
      await deleteClient (id);
      dispatch({
        type:REACT_APP_DELETE_CLIENT,
        payload:id
    })
      console.log("delete")
      dispatch(GetAllClientA);
    } catch (error) {
      console.log(error);
    }
  };


// UPDATE CLIENT 
export const updateClient=(id,nom,
    prenom,
    telephone,
    email,
    image,
    password)=> async dispatch =>{
    try{
      const res =  await  updtClient(id,nom,
        prenom,
        telephone,
        email,
        image,
        password);
        dispatch({
            type:REACT_APP_UPDATE_CLIENT,
        payload: res.data
        })

        console.log('jitouch', )
    }catch(err){
        console.log(err);
    }
}

  