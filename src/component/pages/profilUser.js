import React from 'react'
import Authentifixation from "../authentification/index";


function ProfilUser(){
  return(
    <div className="profil-page">
<div className="log-container">
          <Authentifixation  signin={false} signup={true} /> 
           
          <div className="img-container">
            <img src="./img/log.svg" alt="img-log" />
          </div>
        </div>
       
    </div>
   )

 }

export default  ProfilUser