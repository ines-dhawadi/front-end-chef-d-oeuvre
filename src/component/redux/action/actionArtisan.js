import {updateArtisanR,deleteArtisan,addArtisan,fetchArtisan} from '../requests/requestArtisan'
import {REACT_APP_UPDATE_ARTISAN,REACT_APP_DELETE_ARTISAN,REACT_APP_POST_ARTISAN,REACT_APP_GET_ARTISAN,REACT_APP_GET_ARTISAN_FAILED} from './type'
import axios from 'axios'
import {GET_ONEARTISAN_API,GET_ARTISAN_API,SERVER_BASE_API} from '../shared/apiURL'
//import { SERVER_BASE_API ,GET_ARTISAN_API,ADD_ARTISAN_API} from "../shared/apiURL"


// GET ARTISAN
// export function allArtisan(num){
//     return dispatch =>{
//         fetchArtisan() 
//         .then((res) =>  {
//            const arry = res.data.slice(0,num)
//           dispatch(
// {type :REACT_APP_GET_ARTISAN, payload :arry })
//         })
//         .catch(err=> dispatch({
//             type:REACT_APP_GET_ARTISAN_FAILED,
//             payload: err
//         }))
//     }
// }
//******************* */

export const allArtisan = (num) => {
  return (dispatch) => {
    return axios
      .get(`${GET_ARTISAN_API}`)
      .then((res) => {
        const arry = res.data.slice(0,num)
       
        dispatch({ type: REACT_APP_GET_ARTISAN, payload: arry });
      })
      .catch((err) => console.log(err));
  };
};
// // get by id
export const getArtisanById=(id)=> async (dispatch)=> {
  try{
  const res = await axios.get(`${GET_ONEARTISAN_API}/${id}`)
  dispatch({
  type:"GET_ArtisanById_SUCCEDED",
  payload:res.data 
  
  })
  console.log('getPubById',res.data)
  }
  catch (error) {
          console.log(error);
         }
  }

// ADD ARTISAN 

export const AddArtisanAdmin=(nom,
    prenom,
    role,
    desc,
    latitude,
    longitude,
    imageP,
    image1,
    image2,
    image3,
    image4,
    Ntelf,
    adress,
    gouvernorat)=> async (dispatch)=>{
try{
    const res= await addArtisan (nom,
        prenom,
        role,
        desc,
        latitude,
        longitude,
        imageP,
        image1,
        image2,
        image3,
        image4,
        Ntelf,
        adress,
        gouvernorat);
dispatch({
    type:REACT_APP_POST_ARTISAN,
    payload :res.data })



}catch (error){
    console.log(error);
}


}

// delete

export const deleteArtisanB = (id)=> async (dispatch) => {
    try {
      await deleteArtisan (id);
      dispatch({
        type:REACT_APP_DELETE_ARTISAN,
        payload:id
    })
      console.log("delete")
      dispatch(allArtisan);
    } catch (error) {
      console.log(error);
    }
  };


   // update ARTISAN
export const updateArtisan = ( id,nom,
    
    prenom,
    role,
    desc,
    latitude,
    longitude,
    imageP,
    image1,
    image2,
    image3,
    image4,
    Ntelf,
    adress,
    gouvernorat) => async dispatch => {
    try {
      const res = await updateArtisanR(id,nom,
       
        prenom,
        role,
        desc,
        latitude,
        longitude,
        imageP,
        image1,
        image2,
        image3,
        image4,
        Ntelf,
        adress,
        gouvernorat) 
       
      dispatch({
        type:  REACT_APP_UPDATE_ARTISAN, 
        payload: res.data
      });
      console.log("superrr", )
    } catch (error) {
      console.log(error);
    }
  };