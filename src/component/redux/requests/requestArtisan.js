import axios from "axios"
import { SERVER_BASE_API ,GET_ARTISAN_API,ADD_ARTISAN_API} from "../shared/apiURL"


// GET ARTISAN
export const fetchArtisan=()=>
axios.get( GET_ARTISAN_API,{
    Accept: 'application/json',
    'Content-type': 'application/json',
}  ).then(res=>res.data)



// ADD ARTISAN
export const addArtisan=(nom,
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
    gouvernorat)=>{
    axios.post(ADD_ARTISAN_API,{nom,
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
        gouvernorat
}).then(res=>res.data).then(res=> window.location.reload()); 
}

//delete artisan 
export const deleteArtisan =(id)=>{
    axios.delete(`${SERVER_BASE_API}/artisan/${id}/delete`).then(res=>res.data).then(res=> window.location.reload()) ;
}



export const updateArtisanR=(id,nom,
   
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
    gouvernorat)=>{
    axios.put(`${SERVER_BASE_API}/artisan/${id}/update`,{ id,nom,
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
        gouvernorat
}).then(res=>res.data).then(res=> window.location.reload()) ;
}



