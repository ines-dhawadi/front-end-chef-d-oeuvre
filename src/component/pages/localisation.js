import React from 'react'
import NavbarC from '../view/navbard'
import  GestMap from "../view/getMapClient";
import "../css/localisation.css";

import TopNavbar from "../view/top-navbar";
import Footer from "../view/footer";




function Localisation(){
  return(
    <div>
 <div className="bg-home">

<div className="container-site  ">
<TopNavbar />


<NavbarC />

<h1 className="titre-1-localisation "></h1>


</div>
< GestMap />

<Footer />
</div>


    </div>
   )

 }

export default Localisation