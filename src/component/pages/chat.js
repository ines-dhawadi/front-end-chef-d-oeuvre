import React, { useContext } from "react";
import NavbarC from '../view/navbard'
import "../css/contact.css";
import TopNavbar from "../view/top-navbar";
import Footer from "../view/footer";
import { UidContext } from "../AppContext";
import LeftNav from "../view/LeftNav";
import NewNavbar from '../view/newnavbar'
import NewPostForm from "../post/NewPostForm";
import Thread from "../post/Fil";
import Authentifixation from "../authentification/index";
import { Link  } from "react-router-dom";
//import Trends from "../components/Trends";
import Friends from "../profil/Friend";

const Chat = () => {
  const uid = useContext(UidContext);

  return (
  <div className="container-site"  >
     <TopNavbar />
     <div className="bg-top-chat">
     <NavbarC /> 
     </div>
    

<div class="custom-shape-divider-top-1630769194">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
    {/* <NewNavbar/> */}
     
  
    <div className="home">
      <LeftNav />
      <div className="main">
        <div className="home-header">
        {uid ? <NewPostForm /> : <Authentifixation signin={true} signup={false} />}
        </div>
        <Thread />
      </div>
      <div className="right-side">
        <div className="right-side-container">
          <div className="wrapper">
            {/* <Trends />*/}
       
        {uid && 
        <div className="chois-right">
        <p>Vous disposez d'un lave-auto ou  atelier mécanique ou électrique et vous souhaitez attirer de nombreux clients, vous pouvez vous inscrire chez nous</p>
        <button className="bnt-add-artisan mb-5">   <Link to="/Choix" className="chois-left"> inscrire chez nous </Link> </button> 
        </div>
        } 
           
             {uid && <Friends />} 
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Chat;
