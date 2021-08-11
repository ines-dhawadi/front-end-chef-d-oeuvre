import React from 'react'
import NavbarC from '../view/navbard'
import Navbar2 from "../view/navbar2";
import Part1Homme from '../view/part-1-homme';
import "../css/homme.css";
import TopNavbar from "../view/top-navbar";


function Homme(){
  return(
    <div className="container   bg-home">
<TopNavbar />


<NavbarC />

{/* <img className="img-1-home" src="images/image-view/car2.jpg" alt="" /> */}
<h1 className="titre-1-home">GUIDE ME</h1>
<Part1Homme />
    </div>
   )

 }

export default  Homme