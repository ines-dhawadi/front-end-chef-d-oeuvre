import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux"
import {allArtisan,getArtisanById} from "../redux/action/actionArtisan"
import { Carousel } from "react-bootstrap";
import  "../css/localisation.css";
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import { Link } from "react-router-dom";
import TopNavbar from "../view/top-navbar";
import NavbarC from "../view/navbard";
import Footer  from "../view/footer";
//import { useHistory} from 'react-router-dom';


const BenArous=()=> {

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


  const getById=(id)=>{
    dispatch(getArtisanById(id))
  }
  return(
    
        <div className="container-site  ">
<TopNavbar />

<div className="bg-top-contact">
<NavbarC /> 
</div>
<div class="custom-shape-divider-top-1631053512">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
<div className="all-top-part-locl"><p className="text-center"> <i id="icon-location" class="fas fa-3x fa-map-marked-alt"></i> <br></br> <br></br>Gouvernorat de ben arous
<br></br><br></br>
<i class="fas fa-arrow-down"></i></p></div>
    <div className="container">
      <div className="row all-local">
        <div className="col-md-4 col-sm-12">
{/* *************** */}
<div className="col-md-3 col-sm-6  carousel-desc">
{/* *******carosel******** */}
{/* .filter(el=>el.gouvernorat==="Tunis") */}
{artisan.filter(el=>el.gouvernorat==="ben arous").map((el,key)=>(
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

{/* *******EnD carosel******** */}
</div>



{/* *************** */}

        </div>
        <div className="col-md-9 col-sm-12 map-all  position-sticky ">
        <div>
      <MapContainer className="w-75" center={[36.743500, 10.231976]} zoom={12} scrollWheelZoom={true}>
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
    
</div>

<Footer />
    </div> )

 }

export default BenArous