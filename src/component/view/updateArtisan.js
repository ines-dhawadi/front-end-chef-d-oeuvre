import { Button, Form,Modal } from "react-bootstrap";
import "../admin/admin.css"
import React  from 'react';
import { useState } from "react";
import {updateArtisan} from "../redux/action/actionArtisan";
import { useSelector,useDispatch } from 'react-redux';

function UpdateArtisan({el,id}){

  //dispatch function
   const dispatch = useDispatch()

// récupération val input

const [Input,setInput] = useState(
  {
    nom:el.nom,
    prenom: el.prenom,
    role:el.role,
    desc:el.desc,
    latitude:el.latitude,
    longitude:el.longitude,
    imageP: el.imageP,
    image1:el.image1,
    image2:el.image2,
    image3: el.image3,
    image4: el.image4,
    Ntelf: el.Ntelf,
    adress: el.adress,
    gouvernorat:el.gouvernorat

  }
)
const handelChange=(e)=>{
  const {name,value}= e.target 
  setInput({
    ...Input,
    [name]: value
  });
  }
// *************** add to db

  const handelSubmit=(e)=>{
   e.preventDefault()
    dispatch( updateArtisan(id,Input.nom,Input.prenom, Input.role, Input.desc,Input.latitude,Input.longitude, Input.imageP,Input.image1,Input.image2,Input.image3,Input.image4,Input.Ntelf,Input.adress,Input.gouvernorat))
   
    console.log('val input', Input)
    setShow(false)
  }

  

const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div>
{/* ********************modal********************* */}

    <div >
   <button className="button-card-artisan "> <i  onClick={handleShow} class="far fa-edit"></i>  </button>
       
     
     

      <Modal  show={show} onHide={handleClose}>
        <Modal.Header className="" closeButton>
          <Modal.Title>update a craftswoman
              
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="">
{/* ************************************* */}
<div>

<form onSubmit={handelSubmit}  className="">
<div className="troix-1-input">

    <input  className="text-center w-50 mb-3"   onChange={handelChange}  name="nom" defaultValue={el.nom}   type="text" placeholder="nom" />
  


    <input  className="text-center w-50 mb-3" onChange={handelChange}  name="prenom" defaultValue={el.prenom}  type="text" placeholder="prenom" />
 


  
   
 
  </div>
  

    <input  className="text-center w-100 mb-3"  name="desc" defaultValue={el.desc}  onChange={handelChange}  type="text" placeholder="description " />


<div className="troix-1-input">

    <input  className="text-center w-50 mb-3"  name="latitude" defaultValue={el.latitude}  onChange={handelChange}  type="text" placeholder="lalitude" />


    <input   className="text-center w-50 mb-3"  name="longitude" defaultValue={el.longitude}  onChange={handelChange}  type="text" placeholder="longitude" />

  </div>
 
    <input  className="text-center w-100 mb-3"  name="imageP" defaultValue={el.imageP}  onChange={handelChange}  type="text" placeholder="image personnel" />
  

 
    <input   className="text-center w-100 mb-3" name="image1" defaultValue={el.image1}  onChange={handelChange}   type="text" placeholder="image 1 de votre atelier" />



    <input  className="text-center w-100 mb-3"  name="image2" defaultValue={el.image2}   onChange={handelChange}   type="text" placeholder="image 2 de votre atelier" />
 


    <input  className="text-center w-100 mb-3"  name="image3" defaultValue={el.image3}  onChange={handelChange}  type="text" placeholder="image 3 de votre atelier" />



    <input  className="text-center w-100 mb-3"  name="image4" defaultValue={el.image4}  onChange={handelChange}   type="text" placeholder="image 4 de votre atelier" />

<div className="troix-1-input">
 
    <input  className="text-center w-25 mb-3"  name="Ntelf" defaultValue={el.Ntelf}  onChange={handelChange}   type="text" placeholder="N telephone" />



    <input  className="text-center w-25 mb-3"  name="adress" defaultValue={el.adress}  onChange={handelChange} type="text" placeholder="adress" />


    <input className="text-center w-25 mb-3"  name="gouvernorat" defaultValue={el.gouvernorat}  onChange={handelChange}  type="text" placeholder="gouvernorat" />

  </div>
  <button id="valider-bnt-modal-add-admin" onClick={handelSubmit} type="submit">  Valider</button>
</form>


</div>
{/* ********************************* */}
        </Modal.Body>
       
      </Modal>
    </div>
 


{/* ******************** END modal********************* */}


    </div>
   )

 }

export default UpdateArtisan