import React from 'react'
import  "../css/navbar.css";
import {Navbar,Nav,Form,FormControl,Button } from "react-bootstrap";
import { Link  } from "react-router-dom";
import  { useState } from 'react'


function NavbarC(){

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
    <div className="container">

<Navbar collapseOnSelect  fixed="top"  className={colorChange ? 'navbar-1 colorChange' : 'navbar-1'}>
                 <Link to="/" className="linked--brand ml-auto" >GUIDE ME</Link>
                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
 
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="">
                        <div  className="part2-nav par-2-scrol">
                        <Link className="linked--page part2-nav-hover" to="/">Accueil</Link>
                        <Link className="linked--page part2-nav-hover " to="/localisation">Localisation des service</Link>
                        <Link className="linked--page part2-nav-hover" to="/contact">contact</Link>
                        {/* <Link className="linked--page" to="/WatchedList">Watched</Link> */}
                        </div>
                        <div className="part3-nav">
                        <Form inline>
                            {/* <FormControl type="text" placeholder="SEARCH"/> */}
                           <i class="fas fa-search  "></i>
                        </Form>
                        <Link className="heart" to="/Favorite"><i class="far fa-heart mb-4"></i><span className="favorite--value"></span></Link>
                        <i class="far fa-user mt-4 "></i>
                        
                        {/* <SignUp/> */}
                        </div>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
          
    </div>
   )

 }

export default NavbarC