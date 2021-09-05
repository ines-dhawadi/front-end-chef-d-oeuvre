import axios from "axios";

export  const deleteUsers=(id)=>{
    axios.delete(`${process.env.REACT_APP_API_URL}idhcar/user/${id}`).then(res=>res.data).then(res=> window.location.reload()) ;
}
