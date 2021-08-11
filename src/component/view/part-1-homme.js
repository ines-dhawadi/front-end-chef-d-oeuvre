import React from 'react'
import "../css/homme.css";





function Part1Homme(){
  return(
    <div>
<div>
    <h3 className="section-accueil"> Accueil </h3>
<h1 className="big-title">Bienvenue À <span className="font-logo">GUIDE ME  </span>  </h1>
<p className="parag-homme">Une plateforme qui facilite la détection géographique <br></br> de divers services automobiles</p>
</div>
<div>
  <h1  className="big-title text-center">Explorez les environs</h1>
<div className="row"> 
<div className="col-md-3 col-sm-6 "> <figure> <img className="img-4-g-t" src="/images/image-view/tunus.png" aly="" /> <figcaption> Gouvernorat de Tunis</figcaption> <button className="bnt-voir">voir</button></figure>
 </div>
<div className="col-md-3 col-sm-6 "> <figure> <img className="img-4-g-t" src="/images/image-view/ariana.jpeg" aly="" /> <figcaption> Gouvernorat de Ariana</figcaption><button className="bnt-voir">voir</button> </figure> </div>
<div className="col-md-3 col-sm-6 "> <figure> <img className="img-4-g-t" src="/images/image-view/manouba.jpg" aly="" /> <figcaption> Gouvernorat de Manouba</figcaption> <button className="bnt-voir">voir</button></figure> </div>
<div className="col-md-3 col-sm-6 "> <figure> <img className="img-4-g-t" src="/images/image-view/benarous.jpg" aly="" /> <figcaption> Gouvernorat de ben arous</figcaption> <button className="bnt-voir">voir</button></figure> </div>


 </div>
<div className="row"> 
<div className="col-md-6 col-sm-6"> <img className="" src="/images/image-view/local.png" aly="" />  </div>
<div className="col-md-6 col-sm-6"></div> 
 </div>
</div>



    </div>
   )

 }

export default  Part1Homme