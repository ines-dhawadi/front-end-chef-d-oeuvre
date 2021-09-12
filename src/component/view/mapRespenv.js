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
             
        </div>
    )
}

export default  MapRespenv
