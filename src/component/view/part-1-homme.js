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
<div className="row  part2-h"> 
<div className="col-md-3 col-sm-6 "> <figure> <img className="img-4-g-t" src="/images/image-view/tunus.png" aly="" /> <figcaption> Gouvernorat de Tunis</figcaption> <button className="bnt-voir">voir</button></figure>
 </div>
<div className="col-md-3 col-sm-6 "> <figure> <img className="img-4-g-t" src="/images/image-view/ariana.jpeg" aly="" /> <figcaption> Gouvernorat de Ariana</figcaption><button className="bnt-voir">voir</button> </figure> </div>
<div className="col-md-3 col-sm-6 "> <figure> <img className="img-4-g-t" src="/images/image-view/manouba.jpg" aly="" /> <figcaption> Gouvernorat de Manouba</figcaption> <button className="bnt-voir">voir</button></figure> </div>
<div className="col-md-3 col-sm-6 "> <figure> <img className="img-4-g-t" src="/images/image-view/benarous.jpg" aly="" /> <figcaption> Gouvernorat de ben arous</figcaption> <button className="bnt-voir">voir</button></figure> </div>


 </div>
 <h1 className="big-title">Nos objectifs  </h1>
<div className="row mt-5 part-all-objectif"> 

<div className="col-md-6 col-sm-6"> <img className="img-local" src="/images/image-view/local.png" aly="" />  </div>
<div className="col-md-6 col-sm-6  blok-2-objectif">
  <div className="d-flex"><i class="fas fa-search-location fa-3x mr-3"></i> <p>Facilite la détection de la géolocalisation <br></br> des services automobiles plus rapidement</p></div><br></br>
  <div className="d-flex"><i class="fas fa-cogs fa-3x mr-3"></i><p>Facilite la détection de la géolocalisation <br></br> des services automobiles plus rapidement</p></div><br></br>
  <div className="d-flex"><i class="fas fa-history fa-3x mr-3"></i> <p>Facilite la détection de la géolocalisation <br></br> des services automobiles plus rapidement</p></div>
</div> 
 </div>
</div>



    </div>
   )

 }

export default  Part1Homme