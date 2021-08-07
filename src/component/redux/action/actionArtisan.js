import {fetchArtisan} from '../requests/requestArtisan'
import {REACT_APP_GET_ARTISAN,REACT_APP_GET_ARTISAN_FAILED} from './type'



// GET ARTISAN
export function allArtisan(){
    return dispatch =>{
        fetchArtisan() 
        .then(artisan => dispatch(
{type :REACT_APP_GET_ARTISAN, payload :artisan })
        )
        .catch(err=> dispatch({
            type:REACT_APP_GET_ARTISAN_FAILED,
            payload: err
        }))
    }
}