import React from 'react'
import Authentifixation from "../authentification/index";
import NewNavbar from "../view/newnavbar";

function ProfilUser(){
  return(
    <div>
      <NewNavbar />
    <div className="profil-page">
<div className="log-container">
          <Authentifixation  signin={false} signup={true} /> 
           
          <div className="img-container">
            <img src="/images/imgChat/log.svg" alt="img-log" />
          </div>
        </div>
       
    </div>
    </div>
   )

 }

export default  ProfilUser