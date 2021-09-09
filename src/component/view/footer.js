import React from 'react'
import  "../css/footer.css";
import {Link} from 'react-router-dom'
function Footer() {
  return(
    <div className="footer-bg:after">
    
    <div class="custom-shape-divider-bottom-1630767245">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>

<div id="footer2" className="container-fluid">

<hr id="lign-footer2"/>
    <div className="row d-flex">
{/* *************1**************** */}
<div className="col-md-3">

<div class="tpmoviestar-ft-info-img">
<img class="img1-footer" src="/images/image-view/siti.png" alt="Home"/>
</div>
                    <p className="pag-1-footer2">Une plateforme qui facilite la détection géographique (map) de divers services automobiles 


     
</p>





</div>
{/* ****2***** */}
<div className="col-md-5 col-sm-12">

<div id="nav_menu-2" class="widget_nav_menu masonry-item  sm-width widget ft-widget mb-50 masonry-brick" ><h2 class="widget-title"><span>Liens utiles</span></h2>
<div class="menu-movie-category-container">
    <ul id="menu-movie-category" class="menu">
        <Link to="/">
        <li id="menu-item-210" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-210"> Accueil</li>

        </Link>
        <Link to="/localisation">
<li id="menu-item-211" class="menu-item menu-item-type-taxonomy menu-item-object-movie_cat menu-item-211">Localisation</li>
        
        </Link>
        <Link to="/Chat">
<li id="menu-item-212" class="menu-item menu-item-type-taxonomy menu-item-object-movie_cat menu-item-212">Discution</li>
        
        </Link>
        <Link to="/Contact">
<li id="menu-item-212" class="menu-item menu-item-type-taxonomy menu-item-object-movie_cat menu-item-212">Contact</li>
        
        </Link>


</ul></div></div>
</div>
{/* *****3**** */}

{/* ****4***** */}
<div  id="photo-footer2" className="col-md-4">  
<h2 class="widget-title"> services automobiles </h2>
<div className="d-flex">
    <img id="img1-footre2" src="https://ad962edbae8ba7b03b7f-d10007df79b5b7a4e475a291e50a08cf.ssl.cf3.rackcdn.com/2387/business-plan-station-lavage.jpg"/>
    <p id="pag-img-footer2">Stations Lavages. </p>
</div>


<div className="d-flex">
    <img id="img1-footre2" src="https://media.istockphoto.com/photos/professional-mechanic-repairing-a-car-in-auto-repair-shop-picture-id931914684?k=6&m=931914684&s=612x612&w=0&h=EBent1B4iot8qQIMFRO2U7xAgyXqZ-O2O3QJREk4bug="/>
    <p id="pag-img-footer2">Mecanique automobile.</p>
</div>


<div className="d-flex">
    <img id="img1-footre2" src="https://media.istockphoto.com/photos/engineer-manual-workers-standing-in-a-aluminum-mill-and-working-used-picture-id1208587711?k=6&m=1208587711&s=612x612&w=0&h=g3D4HxYpO1jZTWuYGLxCSW3Tjzq0yQZhgNPlk_UgsDA="/>
    <p id="pag-img-footer2"> électricité automobile.</p>
</div>



</div>
{/* <div className="col-md-1">
<img className="img-end-footer" src="https://demo.astemplates.com/joomla-templates/002039/templates/as002039/images/bg.btn.png"  alt=""/>
</div> */}





<div  className="section-en-footer">
<hr id="lign-footer2"/>
    <div className="icon-footer">
        <i class="fab fa-facebook-square fa-2x"></i>
    <i class="fas fa-envelope fa-2x"></i>
    <i class="fab fa-twitter-square fa-2x "></i>
    <i class="fab fa-instagram fa-2x"></i>
   
    
    
    </div>
</div>


{/* ***************************** */}
    </div>
    <p className="titref mt-5 text-center" > copyright © 2021 by DHAWADI Ines.</p>
</div>








{/* ******************************************************** */}
</div>
   )

 }

export default Footer