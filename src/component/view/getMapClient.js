import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux"
import {allArtisan} from "../redux/action/actionArtisan"

const  GestMap=()=> {

  const artisan = useSelector(state =>state.artisanStore.datas)
    
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch( allArtisan());
  },[]);
  console.log("produit", artisan)

  return(
    <div>
      <MapContainer center={[36.806496, 10.181532]} zoom={6.5} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
{artisan.map((el,key)=>(
  <div key={el._id}>

 {/* **** START MAP */}
 
  <Marker position={[el.latitude, el.longitude]}>
    <Popup>
      <img  className="image-popup" src={el.image1}  alt=""/>
      
     {el.nom} <br /> {el.prenom}.
    </Popup>
  </Marker>

{/* ******END MAP */}
  </div>
))

}
</MapContainer>     
    </div>
   )

 }

export default GestMap