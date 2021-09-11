import React,{useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {allArtisan,getArtisanById} from "../redux/action/actionArtisan"
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";



const MapRespenv = () => {
    const artisan = useSelector(state =>state.artisanStore.datas)
    
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch( allArtisan());
    },[]);



  const getById=(id)=>{
    dispatch(getArtisanById(id))
  }
    return (
        <div>
            <div className="container-fluid map-respensv ">
                <div className="row">
<div className="col-md-12">
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
            {/* *****************carousel desc******************* */}
            {artisan.map((el,key)=>(
  <div className="mart-r-p-map">
  <div className="cacodel">
  <Carousel key={key} className="mb-3 w-100">
  <Carousel.Item interval={1000}>
    <img
      className="d-block imag-carosel-artisan "
      src={el.image4}
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block imag-carosel-artisa"
      src={el.image2}
      alt="Second slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block imag-carosel-artisan"
      src={el.image3}
      alt="Third slide"
    />
   
  </Carousel.Item>
</Carousel> <br></br>

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

</div>
))}
            
        </div>
    )
}

export default  MapRespenv
