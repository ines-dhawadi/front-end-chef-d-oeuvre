import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UidContext } from "../AppContext";
import Logout from "../authentification/Logout";
import  "../../styles/index.scss";


function NewNavbar(){
  const uid = useContext(UidContext);
 const userData = useSelector((state) => state.userStore);

  return(
    <div> 
      <nav className="nav2">
      <div className="nav-container">
        <div className="logo">
          <NavLink exact to="/">
            <div className="logo">
              {/* <img src="/images/imgChat/icon.png" alt="icon" /> */}
              <h3>GUIDE ME</h3>
            </div>
          </NavLink>
        </div>
        {uid ? (
          <ul>
            <li></li>
            <li className="welcome">
              <NavLink exact to="/profil">
                <h5>Bienvenue {userData.pseudo} </h5> 
                 
              </NavLink>
            </li>
            <Logout />
          </ul>
        ) : (
          <ul>
            <li></li>
            <li>
              <NavLink exact to="/profil">
              <img src="/images/imgChat/login.svg" alt="login"/>
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
    </div>
   )

 }

export default NewNavbar