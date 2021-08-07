import React from 'react'
import "../css/cardartisan.css";
import {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux"
import {allArtisan} from "../redux/action/actionArtisan"


const GetArtisan=()=>{
    const artisan = useSelector(state =>state.artisanStore.datas)
    
    const dispatch = useDispatch()
  useEffect(()=>{
    dispatch( allArtisan());
  },[]);
  console.log("produit", artisan)
  
  
  
  
    return(
    <div>

{artisan.map((el,key)=>(
<div key={key}>

<h1>{el.nom}</h1>
<h1> {el.prenom} </h1>
<h1> {el.role} </h1>
<h1> {el.desc} </h1>

</div>


))}

 {/* start card  */}
 <ul class="cards">
  <li>
    <a href="" class="card">
      <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
            <path />
          </svg>
          <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Jessica Parker</h3>
            <span class="card__status">1 hour ago</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>
 
  
  
</ul>

{/* END CARD */}




    </div>
   )

 }

export default  GetArtisan