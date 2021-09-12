import React from 'react'
import NavbarC from '../view/navbard'
import  GestMap from "../view/getMapClient";
import "../css/localisation.css";
import '../../App.css';
import TopNavbar from "../view/top-navbar";
import Footer from "../view/footer";
import MapRespenv from '../view/mapRespenv';
import TestMap from '../view/testmap'


function Localisation(){
  return(
    <div>
 <div className="bg-home">

<div className="container-site  ">
<TopNavbar />

<div className="bg-top-contact">
<NavbarC /> 
</div>
<div class="custom-shape-divider-top-1631053512">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>

{/* < GestMap /> */}
<TestMap />
<MapRespenv />
<Footer />
{/* <h1 className="titre-1-localisation "></h1> */}


</div>

</div>


    </div>
   )

 }

export default Localisation