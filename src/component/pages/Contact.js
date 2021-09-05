import React from 'react'
import NavbarC from '../view/navbard'
// import Navbar2 from "../view/navbar2";
// import Part1Homme from '../view/part-1-homme';
import "../css/contact.css";
import TopNavbar from "../view/top-navbar";
import Footer from "../view/footer";
const Contact = () => {
    return (
        <div  className="container-site   ">
              <TopNavbar />

<div className="bg-top-contact">
<NavbarC /> 
</div>
<div class="custom-shape-divider-top-1630769194">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>

<div className="container">
    <div className="row">
        <div className="col-lg-6 col-md-6 col col-sm-12">
        <form action=""  id="cont-form">
        <label htmlFor="pseudo">Pseudo</label>
        <br />
        <input
          type="text"
          name="pseudo"
          id="pseudo"
      
        />
      
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="text"
          name="email"
          id="email"
        
        />
  
        <br />
        <label htmlFor="password">Mot de passe</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
         
        />
       
        <br />
        <label htmlFor="password-conf">Message</label>
        <br/>
        
        <textarea
                  type="text"
                
                ></textarea>
       <div className='d-flex mt-4'>
       <input className='mr-2' type="submit" value="Envoyer" />
        <input type="submit" value="Annuler" />
       </div>
      
       
      </form>
        </div>
        <div className="col-lg-6 col-md-6 col col-sm-12">

        <div class="mapouter"><div class="gmap_canvas"><iframe width="505" height="460" id="gmap_canvas" src="https://maps.google.com/maps?q=hammem%20chatt&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://yt2.org">yt2</a><br></br>
     <a href="https://www.embedgooglemap.net">iframe google maps</a>
        </div></div>
        </div>

    </div>

</div>

<Footer />
        </div>
    )
}

export default Contact
