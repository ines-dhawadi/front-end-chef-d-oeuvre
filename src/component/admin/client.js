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
      <img src="/images/image-Dhashb/admin-img.jpg" alt="..." className="logo-dash mb-5"/>
           <p class="NON-ADMIN">Ines DHAOUADI</p>
  </div>
      <div className="sidebar-wrapper mt-5">
        <ul className="nav">
          <li className="nav-item   ">
            <Link className="nav-link" to='/IDHCAR'>
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
         
         
          <li className="nav-item ">
            <Link className="nav-link" to="notification">
              <i className="material-icons">notifications</i>
              <p>Notifications</p>
            </Link>
          </li>
         
        </ul>
      </div>
    </div>
    <div className="main-panel">
    
      {/* <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top " id="navigation-example">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <a className="navbar-brand" href="javascript:void(0)">Dashboard</a>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation" data-target="#navigation-example">
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon icon-bar"></span>
            <span className="navbar-toggler-icon icon-bar"></span>
            <span className="navbar-toggler-icon icon-bar"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end">
            <form className="navbar-form">
              <div className="input-group no-border">
                <input type="text" value="" className="form-control search-admin" placeholder="Search..."/>
                <button type="submit" className="btn btn-default btn-round btn-just-icon">
                  <i className="material-icons">search</i>
                  <div className="ripple-container"></div>
                </button>
              </div>
            </form>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  <i className="material-icons">dashboard</i>
                  <p className="d-lg-none d-md-block">
                    Stats
                  </p>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="javscript:void(0)" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="material-icons">notifications</i>
                  <span className="notification">5</span>
                  <p className="d-lg-none d-md-block">
                    Some Actions
                  </p>
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="javascript:void(0)">Mike John responded to your email</a>
                  <a className="dropdown-item" href="javascript:void(0)">You have 5 new tasks</a>
                  <a className="dropdown-item" href="javascript:void(0)">You're now friend with Andrew</a>
                  <a className="dropdown-item" href="javascript:void(0)">Another Notification</a>
                  <a className="dropdown-item" href="javascript:void(0)">Another One</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  <i className="material-icons">person</i>
                  <p className="d-lg-none d-md-block">
                    Account
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      {/* <GetArtisan  /> */}

      <div class="users-dh-chbord">
      <GetAllClientC />
      </div>


    </div>



  
 
  </div>


 
  
    </div>
   )

 }

export default Client