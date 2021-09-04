import React from 'react'
import  "../css/navbar.css";


function TopNavbar(){
  return(
    <div className="top-navb">
<div className="row">
    <div className="col-md-6 col-sm-12">
    <p className="logo-top-navbar">GUIDE ME <br></br>
    <span className="petit-titre-numbr">application Tunisian 100%</span> 
    </p>

    </div>
    <div className="col-md-2 col-sm-12">

    </div>
    <div className="col-md-4 col-sm-12">
    <p  className="prag-top-navbar"> Localisation des service <br></br>Appelez maintenant : <span className="phone-numbr">25501434</span>   </p>
    </div>
</div>

    </div>
   )

 }

export default TopNavbar