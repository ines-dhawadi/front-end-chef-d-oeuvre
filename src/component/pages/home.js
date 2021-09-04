import React from 'react'
import NavbarC from '../view/navbard'
import Navbar2 from "../view/navbar2";
import Part1Homme from '../view/part-1-homme';
import "../css/homme.css";
import TopNavbar from "../view/top-navbar";
import Footer from "../view/footer";

function Homme(){
  return(
    <div className="bg-home">

      <div className="container-site   ">
      <TopNavbar />


<NavbarC />
<div class="custom-shape-divider-top-1630758667">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
    </svg>
</div>
<div>
<img className="img-homme-top" src='/images/image-view/0.png' alt=""/>
</div>
{/* <h1 className="titre-1-home">GUIDE ME</h1> */}
<Part1Homme />
<Footer />
      </div>


    </div>
   )

 }

export default  Homme