import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { dateParser } from "../Utils";

import "./material-dashboard.css"
const Doshboard = () => {
  const artisan = useSelector(state =>state.artisanStore.datas)
  const userData = useSelector((state) => state.userStore);
  const usersData = useSelector((state) => state.usersStore.dataUsersss);
    return(
        <div class="dark-edition">
            <div class="wrapper ">
        <div class="sidebar" data-color="purple" data-background-color="black" data-image="../assets/img/sidebar-2.jpg">
    {/*       
            Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"
    
            Tip 2: you can also add an image using data-image tag */}
        
          <div class="logo"><a href="http://www.creative-tim.com" class="simple-text logo-normal">
          <img src="/images/image-Dhashb/admin-img.jpg" alt="..." className="logo-dash mb-5 "/>
           <p class="NON-ADMIN mr-5">Ines DHAWADI  <i id="online " class=" fas fa-circle"></i></p>
            </a></div>
          <div class="sidebar-wrapper">
            <ul class="nav">
              <li class="nav-item active  ">
                <Link class="nav-link" to="/IDHCAR/INES/DHAWADI/APP/CAR">
                  <i class="material-icons">dashboard</i>
                  <p>Dashboard</p>
                </Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link" to="/artisan">
                  <i class="material-icons">person</i>
                  <p>craftswoman  Profile </p>
                  {/* <p>User Profile</p> */}
                </Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link" to="/users">
                  <i class="material-icons">content_paste</i>
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
                <Link class="nav-link" to="./notifications.html">
                  <i class="material-icons">messages</i>
                  <p>messages</p>
                </Link>
              </li>
                 {/* <li class="nav-item active-pro ">
                    <a class="nav-link" href="./upgrade.html">
                        <i class="material-icons">unarchive</i>
                        <p>Upgrade to PRO</p>
                    </a>
                </li>  */}
            </ul>
          </div>
        </div>
        <div class="main-panel">
          {/* Navbar */}
          {/* <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top " id="navigation-example">
            <div class="container-fluid">
              <div class="navbar-wrapper">
                <a class="navbar-brand" href="javascript:void(0)">Dashboard</a>
              </div>
              <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation" data-target="#navigation-example">
                <span class="sr-only">Toggle navigation</span>
                <span class="navbar-toggler-icon icon-bar"></span>
                <span class="navbar-toggler-icon icon-bar"></span>
                <span class="navbar-toggler-icon icon-bar"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-end">
                <form class="navbar-form">
                <div className="input-group no-border">
                <input type="text" value="" className="form-control search-admin" placeholder="Search..."/>
                <button type="submit" className="btn btn-default btn-round btn-just-icon">
                  <i className="material-icons">search</i>
                  <div className="ripple-container"></div>
                </button>
              </div>
                </form>
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0)">
                      <i class="material-icons">dashboard</i>
                      <p class="d-lg-none d-md-block">
                        Stats
                      </p>
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link" href="javscript:void(0)" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="material-icons">notifications</i>
                      <span class="notification">5</span>
                      <p class="d-lg-none d-md-block">
                        Some Actions
                      </p>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                      <a class="dropdown-item" href="javascript:void(0)">Mike John responded to your email</a>
                      <a class="dropdown-item" href="javascript:void(0)">You have 5 new tasks</a>
                      <a class="dropdown-item" href="javascript:void(0)">You're now friend with Andrew</a>
                      <a class="dropdown-item" href="javascript:void(0)">Another Notification</a>
                      <a class="dropdown-item" href="javascript:void(0)">Another One</a>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0)">
                      <i class="material-icons">person</i>
                      <p class="d-lg-none d-md-block">
                        Account
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
               </nav> */}
       
          {/* End Navbar */}
          <div class="content">
            <div class="container-fluid">
              {/* <div class="row">
                <div class="col-xl-4 col-lg-12">
                  <div class="card card-chart">
                    <div class="card-header card-header-success">
                      <div class="ct-chart" id="dailySalesChart"></div>
                    </div>
                    <div class="card-body">
                      <h4 class="card-title">Daily Sales</h4>
                      <p class="card-category">
                        <span class="text-success"><i class="fa fa-long-arrow-up"></i> 55% </span> increase in today sales.</p>
                    </div>
                    <div class="card-footer">
                      <div class="stats">
                        <i class="material-icons">access_time</i> updated 4 minutes ago
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-12">
                  <div class="card card-chart">
                    <div class="card-header card-header-warning">
                      <div class="ct-chart" id="websiteViewsChart"></div>
                    </div>
                    <div class="card-body">
                      <h4 class="card-title">Email Subscriptions</h4>
                      <p class="card-category">Last Campaign Performance</p>
                    </div>
                    <div class="card-footer">
                      <div class="stats">
                        <i class="material-icons">access_time</i> campaign sent 2 days ago
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-12">
                  <div class="card card-chart">
                    <div class="card-header card-header-danger">
                      <div class="ct-chart" id="completedTasksChart"></div>
                    </div>
                    <div class="card-body">
                      <h4 class="card-title">Completed Tasks</h4>
                      <p class="card-category">Last Campaign Performance</p>
                    </div>
                    <div class="card-footer">
                      <div class="stats">
                        <i class="material-icons">access_time</i> campaign sent 2 days ago
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}



            
              <div class="row">
                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                  <div class="card card-stats">
                    <div class="card-header card-header-warning card-header-icon">
                      <div class="card-icon">
                        <i class="material-icons">content_copy</i>
                      </div>
                      <p class="card-category">ines dhawadi</p>
                      <h3 class="card-title">49/50
                        <small>GB</small>
                      </h3>
                    </div>
                    <div class="card-footer">
                      <div class="stats">
                        <i class="material-icons text-warning">warning</i>GUIDE ME
                      <Link to='/'>  </Link>  
                     
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                  <div class="card card-stats">
                    <div class="card-header card-header-success card-header-icon">
                      <div class="card-icon">
                        <i class="material-icons">store</i>
                      </div>
                      <p class="card-category"> Number of users : {usersData&& usersData.length}</p>
                      <h3 class="card-title">$34,245</h3>
                    </div>
                    <div class="card-footer">
                      <div class="stats">
                        <i class="material-icons">date_range</i> Last 24 Hours
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                  <div class="card card-stats">
                    <div class="card-header card-header-danger card-header-icon">
                      <div class="card-icon">
                        <i class="material-icons">info_outline</i>
                      </div>
                      <p class="card-category">  Number of users : {artisan && artisan.length}</p>
                      <h3 class="card-title">75</h3>
                    </div>
                    <div class="card-footer">
                      <div class="stats">
                        <i class="material-icons">local_offer</i> Tracked from Github
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                  <div class="card card-stats">
                    <div class="card-header card-header-info card-header-icon">
                      <div class="card-icon">
                        <i class="fa fa-twitter"></i>
                      </div>
                      <p class="card-category">Followers</p>
                      <h3 class="card-title">+245</h3>
                    </div>
                    <div class="card-footer">
                      <div class="stats">
                        <i class="material-icons">update</i> Just Updated
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <din className="container-fluide">
              <div class="row section-2-dash-admin pb-5 mt-5">
                <div class="col-lg-6 col-md-12">
                <img className="img-fluid" src="/images/image-view/s.png" alt="img" />
                </div>
                <div class="col-lg-6 col-md-12">
                <img className="img-fluid" src="/images/image-view/st.svg" alt="img" />
                </div>
              </div>
              </din>
            </div>
          </div>
         
          
          
        </div>
      </div>

      
        </div>
       
      
       
       )
    
    
 }

export default Doshboard