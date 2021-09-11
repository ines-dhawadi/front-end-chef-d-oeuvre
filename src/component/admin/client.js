import React from 'react'
import { Link } from 'react-router-dom';
import "./admin.css";
import "./material-dashboard.css"
import GetAllClientC from "../view/getClient";
//import GetArtisan from '../view/getArtisan'





const Client = ({email} ) => {
  return(
    <div class="dark-edition">
          <div class="wrapper ">
    <div className="sidebar" data-color="purple" data-background-color="black" >
    
      <div className="logo">
      <img src="/images/image-Dhashb/admin-img.jpg" alt="..." className="logo-dash mb-5 ml-5"/>
           <p class="NON-ADMIN">Ines DHAOUADI <i id="online " class=" fas fa-circle"></i></p>
  </div>
      <div className="sidebar-wrapper mt-5">
        <ul className="nav">
          <li className="nav-item   ">
            <Link className="nav-link" to='/IDHCAR/INES/DHAWADI/APP/CAR'>
              <i className="material-icons">dashboard</i>
              <p>Dashboard</p>
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/artisan">
              <i className="material-icons">person</i>

              <p>craftswoman  Profile </p>
              {/* <p>User Profile</p> */}
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link " to="/users">
              <i className="material-icons">content_paste</i>
              <p>User Profile</p>
            </Link>
          </li>
         
          <li class="nav-item ">
                <Link class="nav-link" to="/Chat">
                  <i class="material-icons">library_books</i>
                  <p>Chat</p>
                </Link>
              </li>
              {/* <li class="nav-item ">
                <Link class="nav-link" to="./icons.html">
                  <i class="material-icons">bubble_chart</i>
                  <p>Icons</p>
                </Link>
              </li> */}
              <li class="nav-item ">
                <Link class="nav-link" to="/localisation">
                  <i class="material-icons">location_ons</i>
                  <p>Maps</p>
                </Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link" to="/message">
                  <i class="material-icons">messages</i>
                  <p>messages</p>
                </Link>
              </li>
         
        </ul>
      </div>
    </div>
    <div className="main-panel">
    
   
      <div class="users-dh-chbord">
      <GetAllClientC />
      </div>


    </div>



  
 
  </div>


 
  
    </div>
   )

 }

export default Client