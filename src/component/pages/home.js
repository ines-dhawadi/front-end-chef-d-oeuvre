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

<h1 className="titre-1-home">GUIDE ME</h1>
<Part1Homme />

      </div>

<Footer />
    </div>
   )

 }

export default  Homme