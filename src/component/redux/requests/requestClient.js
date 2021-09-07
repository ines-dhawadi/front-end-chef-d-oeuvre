import axios from "axios"
import {ADD_client_API, DELETE_client_API,GET_client_API } from "../shared/apiURL";




export const getAllClient=()=>
    axios.get( GET_client_API,{
        Accept: 'application/json',
    'Content-type': 'application/json',
}).then(res=>res.data)

// ADD CLIENT
export const addClient=(nom,
    prenom,
    telephone,
    email,
    image,
    password)=>
    axios.post('http://localhost:5000/idhcar/client/add',{nom,
        prenom,
        telephone,
        email,
        image,
        password
       
}).then(res=>res.data)

export  const deleteClient=(id)=>{
    axios.delete(`http://localhost:5000/idhcar/client/${id}/delete`).then(res=>res.data).then(res=> window.location.reload()) ;
}



export const updtClient=(id,nom,
    prenom,
    telephone,
    email,
    image,
    password)=>{
    axios.put(`http://localhost:5000/idhcar/client/${id}/update`,{id,nom,
    prenom,
    telephone,
    email,
    image,
    password}).then(res=>res.data).then(res=> window.location.reload()) ;
}
