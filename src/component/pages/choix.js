import React from 'react'
import Authentifixation from "../authentification/index";
import NewNavbar from "../view/newnavbar";
import UpdateProfil from '../profil/UpdateProfil'
import AddArtisanFront from '../view/addArtisanFront';
import  "../../styles/index.scss";
import NavbarC from '../view/navbard'
import TopNavbar from "../view/top-navbar";
import Footer from "../view/footer";
import { Link  } from "react-router-dom";

function Choix(){
  return(
    <div className="container-site" >
       <TopNavbar />

<div className="bg-top-contact">
<NavbarC /> 
</div>
<div class="custom-shape-divider-top-1630769194">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>

<h4 className="text-center mb-5"> vous inscrire Merci de bien vouloir remplir le formulaire  ci-joint <br></br> <br></br> <i class="fas fa-arrow-down "></i> </h4>
   
    
    <div className="Choix-page">
      
        
{/* <Link to='/localisation'>
<h6 className="chois-right">voir les localisation géographique de different artisan </h6>
</Link> <br></br> */}

<AddArtisanFront/>

    </div>
    <Link to='/localisation'>
<h6 className="chois-right texte-center">voir les localisations géographiques de different artisans  <i class="fas fa-arrow-right ml-2"></i></h6>
</Link> 
    <Footer />
    </div>
   )

 }

export default  Choix