import React from 'react'
import NavbarC from '../view/navbard'
import  GestMap from "../view/getMapClient";
import "../css/localisation.css";
import '../../App.css';
import TopNavbar from "../view/top-navbar";
import Footer from "../view/footer";




function Localisation(){
  return(
    <div>
 <div className="bg-home">

<div className="container-site  ">
<TopNavbar />


<NavbarC />
<div class="custom-shape-divider-top-1630758667">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
    </svg>
</div>
< GestMap />

<Footer />
{/* <h1 className="titre-1-localisation "></h1> */}


</div>

</div>


    </div>
   )

 }

export default Localisation