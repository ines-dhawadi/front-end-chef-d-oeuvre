import React from 'react'
import "../css/cardartisan.css";
import {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux"
import { deleteArtisanB ,allArtisan} from "../redux/action/actionArtisan"
import  UpdateArtisan from "../view/updateArtisan"

const GetArtisan=()=>{
    const artisan = useSelector(state =>state.artisanStore.datas)
    
    const dispatch = useDispatch()
  useEffect(()=>{
    dispatch( allArtisan());
  },[]);
  console.log("produit", artisan)
  
  

  //Delete ARTISAN
  const deleteARTISAN =(id)=>{
    dispatch (deleteArtisanB(id) )
    console.log(deleteArtisanB(id))
  }
  
  
    return(
    <div id="card-artisan">

{artisan.map((el,key)=>(
<div>

<div class="card" key={key}>
  <div class="">
{/* <img className="card-logo " src='images/logo.webp'/> */}
<img class="img-avatar" src={el.imageP} alt="" />
  </div>
  <div class="card-text">
    <div class="portada" >
 
    <img class="portada"  src={el.image1}/>
    </div>
    <div class="title-total">   
      <div class="title">{el.role}</div>
      <h2>{el.non} {el.prenom}</h2>
  
  <div class="desc">{el.desc}</div>
  <div class="actions">
    <button><i class="far fa-heart"></i></button>
    <button onClick={() => deleteARTISAN(el._id)}><i class="far fa-trash-alt"></i> </button>

< UpdateArtisan id={el._id}  el={el}/>

  
    
    {/* <button><i class="far fa-envelope"></i></button>
    <button><i class="fas fa-user-friends"></i></button> */}
  </div></div>
 
  </div>
  
 
  
</div>


  
</div>



))}

{/* END CARD */}




    </div>
   )

 }

export default  GetArtisan