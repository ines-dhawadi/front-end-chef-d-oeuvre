
import  "../css/navbar.css";
import {Navbar,Nav,Form,FormControl,Button } from "react-bootstrap";
import { Link  } from "react-router-dom";

import React, { useState ,useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UidContext } from "../AppContext";
import Logout from "../authentification/Logout";


function NavbarC(){
  const uid = useContext(UidContext);
 const userData = useSelector((state) => state.userStore);
const [navmedia,setNavmedia ] = useState(false)
  const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 120){
        setColorchange(true);
        }
        else{
        setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);



  return(
    <div className="">

<Navbar collapseOnSelect  fixed="top"  className={colorChange ? 'navbar-1 colorChange' : 'navbar-1'}>
                 <Link to="/" className="linked--brand ml-auto" >GUIDE ME</Link>
                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
 
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="">
                        <div  className="part2-nav par-2-scrol mt-4">
                        <Link className="linked--page part2-nav-hover" to="/"  exact activeClassName="active-left-nav">Accueil</Link>
                        <Link className="linked--page part2-nav-hover " to="/localisation"  exact activeClassName="active-left-nav">Localisation </Link>
                        <Link className="linked--page part2-nav-hover" to="/Chat"  exact  activeClassName="active-left-nav">Discussion</Link>
                        <Link className="linked--page part2-nav-hover" to="/Contact"  exact activeClassName="active-left-nav">Contact</Link>
                       
                        </div>
                        <div className="part3-nav mr-auto">
                        <Form inline>
                            {/* <FormControl type="text" placeholder="SEARCH"/> */}
                           {/* <i class="fas fa-search  "></i> */}
                        </Form>
                        {uid ? (
                        <Link  to="/profilUser" className="d-flex">
                        
                          <> <i class="far fa-user mt-4 "></i>
                           <h5 className="mt-4">Bienvenue {userData.pseudo}  {''} </h5>

 <Logout  />
 </>  </Link>
                        ): (
                           <Link to="/Singninup" className="d-flex mt-3"> <h5>Se connecter / S'inscrire </h5><i class="fas fa-sign-in-alt ml-3"></i></Link>
                        )
                        }
                      
                        {/* <Link className="heart" to="/Favorite"><i class="far fa-heart mb-4"></i><span className="favorite--value"></span></Link> */}
                       
                        
                        {/* <SignUp/> */}
                        </div>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>



                {/* ************nav media */}
                 <Navbar className="nav-media" >
                 <Link to="" className=" ml-auto" onClick={()=>setNavmedia(true)} >GUIDE ME</Link> <br></br>
                 {navmedia &&  <div><Navbar.Toggle aria-controls="responsive-navbar-nav" />
 
                    <Nav className="">
                        <div  className=" par-2-scrol">
                       <br></br> <Link className=" " to="/"  exact activeClassName="active-left-nav">Accueil</Link> <br></br>
                        <Link className="" to="/localisation"  exact activeClassName="active-left-nav">Localisation </Link><br></br>
                        <Link className=" " to="/Chat"  exact  activeClassName="active-left-nav">Discussion</Link><br></br>
                        <Link className="" to="/Contact"  exact activeClassName="active-left-nav">Contact</Link><br></br>
                        {uid ? (
                        <Link  to="/profilUser" className="d-flex">
                        
                          <> <i class="far fa-user mt-4 "></i>
                           <h5 className="mt-4">Bienvenue {userData.pseudo}  {''} </h5>

 <Logout  />
 </>  </Link>
                        ): (
                           <Link to="/Singninup" className="d-flex mt-3"> <h5>Se connecter / S'inscrire </h5><i class="fas fa-sign-in-alt ml-3"></i></Link>
                        )
                        }
                        </div>
                     
                      
                        
                      
                        {/* <Link className="heart" to="/Favorite"><i class="far fa-heart mb-4"></i><span className="favorite--value"></span></Link> */}
                       
                        
                        {/* <SignUp/> */}
                       
                    </Nav> </div>}
            
                </Navbar>
          
    </div>
   )

 }

export default NavbarC