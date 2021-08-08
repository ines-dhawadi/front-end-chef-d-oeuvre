import axios from "axios"
import { GET_client_API } from "../shared/apiURL";




export const getAllClient=()=>
    axios.get( GET_client_API,{
        Accept: 'application/json',
    'Content-type': 'application/json',
}).then(res=>res.data)



// // GET ARTISAN
// export const fetchArtisan=()=>
// axios.get( GET_ARTISAN_API,{
//     Accept: 'application/json',
//     'Content-type': 'application/json',
// }  ).then(res=>res.data)


