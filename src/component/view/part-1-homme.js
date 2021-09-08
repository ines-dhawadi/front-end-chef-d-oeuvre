import React from 'react'
import "../css/homme.css";
import {Link} from "react-router-dom"




function Part1Homme(){
  return(
    <div className="">
<div >
    {/* <h3 className="section-accueil"> Accueil </h3> */}
<h1 className="big-title">Bienvenue À <span className="font-logo">GUIDE ME  </span>  </h1>
<p className="parag-homme"> Plateforme pour discuter des pannes mécaniques et faciliter la détection  <br></br> géographique de divers services automobiles. </p>
</div>
<div>
  < div className="alll-part-1-homme">
  <h1  className="big-title text-left">Explorez les environs</h1>
<div className="row  part2-h"> 
<div className="col-md-3 col-sm-6 "> <figure> <img className="img-4-g-t" src="/images/image-view/tunus.png" aly="" /> <figcaption> Gouvernorat de Tunis</figcaption> <Link to="/Tunis"><button className="bnt-voir">voir</button></Link> </figure>
 </div>
<div className="col-md-3 col-sm-6 "> <figure> <img className="img-4-g-t" src="/images/image-view/ariana.jpeg" aly="" /> <figcaption> Gouvernorat de Ariana</figcaption> <Link to="/Ariana"><button className="bnt-voir">voir</button> </Link></figure> </div>
<div className="col-md-3 col-sm-6 "> <figure> <img className="img-4-g-t" src="/images/image-view/manouba.jpg" aly="" /> <figcaption> Gouvernorat de Manouba</figcaption> <Link to="/Manouba"><button className="bnt-voir">voir</button></Link></figure> </div>
<div className="col-md-3 col-sm-6 "> <figure> <img className="img-4-g-t" src="/images/image-view/benarous.jpg" aly="" /> <figcaption> Gouvernorat de ben arous</figcaption> <Link to="/BenArous"><button className="bnt-voir">voir</button></Link></figure> </div>
</div>

 </div>
 {/* *******???********** */}
 <div className="container">
<div className="row">

<div className="col-md-12 col-sm-12"> 
<div className="row">
<div className="col-md-5 col-sm-12"> <p className="parg-homme-problm text-center">Guide Me, vous accompagne pendant vos déplacements longs et courts, pour des pannes mécaniques simples et compliquées. N'hésitez pas à nous contacter.</p></div>
<div className="col-md-7 col-sm-12 "><img className="img-homme-QSM" src="/images/image-view/v2.png" alt=""  /></div>
</div>
<div class="custom-shape-divider-bottom-1631056526">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg>
</div>
 </div>
{/* <div className="col-md-6 col-sm-12"><img src="/images/image-view/v2.png" alt=""  /></div> */}
</div>
 </div>
 <div className="container container-card-homme">
<div className="row">
<div className="col-md-4 col-sm-12"> <a class="card11" href="#">
    <h3>Vous êtes artisan ?</h3>
    <p class="small">
Partager vos coordonnées afin de vous contacter.</p>
    <div class="go-corner" href="#">
      <div class="go-arrow">
        →
      </div>
    </div>
  </a></div>
<div className="col-md-4 col-sm-12">
  <a class="card11" href="#">
    <h3>Vous avez l'information ?</h3>
    <p class="small">
N'hésitez pas à la partager avec nous.</p>
    <div class="go-corner" href="#">
      <div class="go-arrow">
        →
      </div>
    </div>
  </a>
  
  
  
 

  
</div>
<div className="col-md-4 col-sm-12"> <a class="card11" href="#">
    <h3>Vous avez besoin d'aide?</h3>
    <p class="small">
Postez votre problème, on vous Guide</p>
    <div class="go-corner" href="#">
      <div class="go-arrow">
        →
      </div>
    </div>
  </a></div>
</div>
 </div>

{/* ***************** */}
<div className=" new-part-homme">
  <div className="row">
<div className="col-md-12">
<img  className=" img-new-part-homme " src="/images/image-view/_.png" alt="" />
<div className="row parg-new-part-homme">
<div className="col-md-6 p-5">
Échange de problèmes et d'informations<br></br> pour dépannage  rapide et réparation <br></br> partout  et à tout moment.</div> 
<div className="col-md-6 p-5">
Partager votre profil, expérience <br></br> et localisation sur notre map, afin que vous<br></br> soyez plus accessible et plus connu.
</div>

</div>

</div>

  </div>
  <button className="bnt-new-part-homme"> <Link to="/Chat">Discussion  </Link></button>
</div>
{/* ***************** */}
<div className="row mt-5 part-all-objectif pb-5"> 
<h1 className="big-title">Nos objectifs  </h1>
<div className="col-md-6 col-sm-6"> <img className="img-local" src="/images/image-view/img-phone.png" aly="" />  </div>
<div className="col-md-6 col-sm-6  blok-2-objectif">
  <div className="d-flex"><i id="far" class=" far fa-comments fa-3x  mr-1 "></i><p className="blokobjectif ml-2">Aider les clients à trouver de l'information pour leurs questions et des solutions, pour leurs problèmes mécaniques.</p></div><br></br>
  <div className="d-flex"><i class="fas fa-cogs fa-3x mr-3"></i><p className="blokobjectif">Notre plateforme vous permet de partager  votre expérience, si vous avez <br></br> la réponsed'une question et/ou  <br></br>la solution pour une panne.</p></div><br></br>
  <div className="d-flex"><i class="fas fa-search-location fa-3x mr-3"></i> <p className="blokobjectif ml-3 ">Facilite la détection de la géolocalisation <br></br> des services automobiles plus rapide</p></div>
</div> 
 </div>
</div>



    </div>
   )

 }

export default  Part1Homme