import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {useEffect, useState} from "react";
import {useSelector,useDispatch} from "react-redux"
import {allArtisan,getArtisanById} from "../redux/action/actionArtisan"
import { Carousel } from "react-bootstrap";
import  "../css/localisation.css";
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import { Link } from "react-router-dom";

//import { useHistory} from 'react-router-dom';


const  TestMap=()=> {

  const artisan = useSelector(state =>state.artisanStore.datas)
  const [Num, setNum] = useState(10)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch( allArtisan());
  },[]);
  console.log("produit", artisan)


  const getById=(id)=>{
    dispatch(getArtisanById(id))
  }
  return(
    <div>
            <div className="container mb-5">
<div className="row">
  <div className="col-md-4 col col-sm-12"></div>
  <div className="col-md-4 col col-sm-12"><div className="all-top-part-locl"><p className="text-center"> <i id="icon-location" class="fas fa-3x fa-map-marked-alt"></i> <br></br> <br></br>Partager votre profil, expérience <br></br>
et localisation sur notre map, afin que vous<br></br>
soyez plus accessible et plus connu.
<br></br><br></br>
<i class="fas fa-arrow-down"></i></p></div></div>
  <div className="col-md-4 col col-sm-12"></div>



</div>
      </div>
<div className="container-fluid all-new-amp-loc mt-5">
    <div className="row">
<div className="col-md-5  carousel-desc">
{artisan.map((el,key)=>(
  <div className="mart-1-p-map">
  <div className="d-flex">
  <Carousel key={key} className="mb-3">
  <Carousel.Item interval={1000}>
    <img
      className="d-block imag-carosel-artisan-map"
      src={el.image4}
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block imag-carosel-artisan-map"
      src={el.image2}
      alt="Second slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block imag-carosel-artisan-map"
      src={el.image3}
      alt="Third slide"
    />
   
  </Carousel.Item>
</Carousel>

<div className='part-desc-local'> 
<h4 className="nom-prenom ml-5 "><i class="fad fa-car-garage ml-5 mr-2"></i> {el.role}</h4>

  <h4 className="nom-prenom"> <i class="fas fa-user ml-2 mr-3"></i>  {el.nom}     {el.prenom}</h4>
<h4><i class="fas fa-map-marker-alt ml-3 mr-2"></i> {el.gouvernorat}</h4>

{/* <h6  className="nom-prenom">{el.desc}fffffffffffffffffff <br></br> ffffffffffff</h6> */}
<div>
                      {/* <span><Rater id="retiong" total={10} rating="2" />  &nbsp;</span>
                      <span>2</span> &nbsp; &nbsp; 
                      <spann>Metascore</spann> */}
           <h5> <i class="fas fa-phone ml-3 mr-2"> </i> {el.Ntelf} </h5>     
                   </div>
                  
 </div>
</div>
<div className="hr"></div>
</div>
))}

</div>
{/* *********** map ************** */}
<div className="col-md-7 new-map-loc">
<MapContainer className="w-100" center={[36.806496, 10.181532]} zoom={6.5} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
  />
{artisan.map((el,key)=>(
  <div key={el._id}>

 {/* **** START MAP */}
 
  <Marker position={[el.latitude, el.longitude]}  >
    
    <Popup>
      <img  className="image-popup" src={el.image1}  alt=""/>
      
     {el.nom} <br /> {el.prenom}.
     
     <Link  to={`/userone/${el._id}`}>User <button  onClick= {()=>getById(el._id) }>profil</button></Link>
     
    </Popup>
  </Marker>

{/* ******END MAP */}
  </div>
))

}
</MapContainer>     
</div>
    </div>

</div>
      
    </div> )

 }

export default TestMap