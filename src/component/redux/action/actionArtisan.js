import {updateArtisanR,deleteArtisan,addArtisan,fetchArtisan} from '../requests/requestArtisan'
import {REACT_APP_UPDATE_ARTISAN,REACT_APP_DELETE_ARTISAN,REACT_APP_POST_ARTISAN,REACT_APP_GET_ARTISAN,REACT_APP_GET_ARTISAN_FAILED} from './type'



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
export const updateArtisan = (nom,
    id,
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
      const res = await updateArtisanR(nom,
        id,
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
      console.log("superrr")
    } catch (error) {
      console.log(error);
    }
  };