import {getAllClient} from "../requests/requestClient";
import { REACT_APP_GET_CLIENT, REACT_APP_GET_CLIENT_FAILED } from "./type";




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

// // GET ARTISAN
// export function allArtisan(){
//     return dispatch =>{
//         fetchArtisan() 
//         .then(artisan => dispatch(
// {type :REACT_APP_GET_ARTISAN, payload :artisan })
//         )
//         .catch(err=> dispatch({
//             type:REACT_APP_GET_ARTISAN_FAILED,
//             payload: err
//         }))
//     }
// }
