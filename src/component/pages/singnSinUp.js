import React from 'react'
import Authentifixation from "../authentification/index";
import NewNavbar from "../view/newnavbar";
import UpdateProfil from '../profil/UpdateProfil'
import  "../../styles/index.scss";
import NavbarC from '../view/navbard'
import TopNavbar from "../view/top-navbar";
import Footer from "../view/footer";


function Singninup(){
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
      {/* <NewNavbar /> */}
    
    <div className="profil-page">
<div className="log-container">
          <Authentifixation  signin={false} signup={true} /> 
           
          <div className="img-container">
            <img src="/images/imgChat/log2.svg" alt="img-log" />
          </div>
        </div>
       
    </div>
    <Footer />
    </div>
   )

 }

export default  Singninup