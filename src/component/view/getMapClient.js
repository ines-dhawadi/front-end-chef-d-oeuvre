import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux"
import {allArtisan} from "../redux/action/actionArtisan"
import { Carousel } from "react-bootstrap";
import  "../css/localisation.css";
import NavbarC from "../view/navbard"
import { Link } from "react-router-dom";
//import { useHistory} from 'react-router-dom';


const  GestMap=()=> {

  // const marqicon = L.Icon({
  //   Url : "https://cdn.pixabay.com/photo/2012/04/16/11/39/plumber-35611_960_720.png",
  //   iconSize: [35,45]
  // })


  // const history = useHistory();

  // const abc = path => {
  //   history.push(path);
  // };
  const artisan = useSelector(state =>state.artisanStore.datas)
    
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch( allArtisan());
  },[]);
  console.log("produit", artisan)

  return(
    <div>

    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-sm-12">
{/* *************** */}
<div className="col-md-63 col-sm-6 mart-1-p-map">
{/* *******carosel******** */}

{artisan.map((el,key)=>(
  <div>
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

<div > <h4 className="nom-prenom"> nom et prénom : {el.nom}     {el.prenom}</h4>

<h4 className="nom-prenom"> spécialité : {el.role}</h4>

<h6>{el.desc}ffffffffffffffffffffffffffffffffffffffff</h6>
 </div>
</div>
<div className="hr"></div>
</div>
))}

{/* *******EnD carosel******** */}
</div>



{/* *************** */}

        </div>
        <div className="col-md-5 col-sm-12 map-all  position-sticky ">
        <div>
      <MapContainer center={[36.806496, 10.181532]} zoom={6.5} scrollWheelZoom={true}>
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
     
     <Link  to='/user'>User</Link>
     
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
    
</div>

    // ***********
    
    </div> )

 }

export default GestMap