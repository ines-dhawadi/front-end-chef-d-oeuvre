// import React from 'react'
// import "../css/cardartisan.css";
// import {useEffect} from "react";
// import {useSelector,useDispatch} from "react-redux"
// import { deleteArtisanB ,allArtisan} from "../redux/action/actionArtisan"
// import  UpdateArtisan from "../view/updateArtisan"

// const GetArtisan=()=>{
//     const artisan = useSelector(state =>state.artisanStore.datas)
    
//     const dispatch = useDispatch()
//   useEffect(()=>{
//     dispatch( allArtisan());
//   },[]);
//   console.log("produit", artisan)
  
  

//   //Delete ARTISAN
//   const deleteARTISAN =(id)=>{
//     dispatch (deleteArtisanB(id) )
//     console.log(deleteArtisanB(id))
//   }
  
  
//     return(
//     <div id="card-artisan">

// {artisan.map((el,key)=>(
// <div key={key}>
// <h1>{el.nom} {el.prenom}</h1>
// < UpdateArtisan id={el._id}  el={el} />



//  {/* start card  */}
//  <ul class="cards">
//   <li>
//     <a href="" class="cardc">
//       <img src={el.image1} class="card__image" alt="" />
//       <div class="card__overlay">
//         <div class="card__header">
//           <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
//             <path />
//           </svg>
//           <img class="card__thumb" src={el.imageP} alt="" />
//           <div class="card__header-text">
//             <h3 class="card__title">{el.nom} {el.prenom}</h3>
//             < UpdateArtisan id={el._id}  el={el} />
           
//             <span class="card__status">{el.role}</span>
//           </div>
//         </div>
//         <p class="card__description">{el.desc}</p>

//         <div class="d-flex ml-5">
//         <i onClick={() => deleteARTISAN(el._id)} class="far fa-trash-alt fa-2x"></i>
     
//         </div>
      
//       {/* <button><i class="far fa-trash-alt"></i> </button>
//       <button><i class="far fa-edit"></i></button> */}
//       </div>
//     </a>
//   </li>
 
  
  
// </ul>



// </div>



// ))}

// {/* END CARD */}




//     </div>
//    )

//  }

// export default  GetArtisan




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

<div class="card1" key={key}>
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
      <h6>{el.nom} {el.prenom}</h6>
     
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