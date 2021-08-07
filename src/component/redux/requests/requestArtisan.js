import axios from "axios"
import { GET_ARTISAN_API} from "../shared/apiURL"


// GET ARTISAN
export const fetchArtisan=()=>
axios.get( GET_ARTISAN_API,{
    Accept: 'application/json',
    'Content-type': 'application/json',
}  ).then(res=>res.data)