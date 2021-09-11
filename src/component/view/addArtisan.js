import { Button, Form,Modal } from "react-bootstrap";
import "../admin/admin.css"
import React  from 'react';
import { useState } from "react";
import {AddArtisanAdmin} from "../redux/action/actionArtisan";
import { useSelector,useDispatch } from 'react-redux';

function FormAjoutArtisan(){

  //dispatch function
   const dispatch = useDispatch()

// récupération val input

const [Input,setInput] = useState(
  {
    nom:"",
    prenom:"",
    role:"",
    desc:"",
    latitude:"",
    longitude:"",
    imageP:"",
    image1:"",
    image2:"",
    image3:"",
    image4:"",
    Ntelf:"",
    adress:"",
    gouvernorat:""

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
    dispatch( AddArtisanAdmin(Input.nom,Input.prenom, Input.role, Input.desc,Input.latitude,Input.longitude, Input.imageP,Input.image1,Input.image2,Input.image3,Input.image4,Input.Ntelf,Input.adress,Input.gouvernorat))
   
    console.log('val input', Input)
  }

  


// }
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div>
{/* ********************modal********************* */}

    <div >
      <button className="bnt-add-artisan-admin mb-5 mr-5" onClick={handleShow}>
      <i class="fas fa-user-plus ml-5 mr-5"></i> Add craftswoman 
      </button>

      <Modal  show={show} onHide={handleClose}>
        <Modal.Header className="modal-content-add-admin" closeButton>
          <Modal.Title>Add new craftswoman 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-content-add-admin">
{/* ************************************* */}
<div>

<form onSubmit={handelSubmit}  className="">
<div className="troix-1-input">

  
    <input className="text-center w-50 mb-3"   onChange={handelChange}  name="nom"  type="text" placeholder="nom" />
  
    <input className="text-center mb-3 w-50" onChange={handelChange}  name="prenom" type="text" placeholder="prenom" />
 
   
 
  </div>
 
    <input className="text-center w-50 mb-3"  name="desc" onChange={handelChange}  type="text" placeholder="description " />
    <input  className="text-center w-50 mb-3" name="role" onChange={handelChange}  type="text" placeholder="role" />
<br></br>
<div className="troix-1-input">
 
    <input  className="text-center w-50 mb-3"  name="latitude" onChange={handelChange}  type="text" placeholder="lalitude" />



    <input   className="text-center w-50 mb-3"  name="longitude" onChange={handelChange}  type="text" placeholder="longitude" />
 
  </div>

    <input  className="text-center w-100 mb-3"  name="imageP" onChange={handelChange}  type="text" placeholder="image personnel" /> <br></br>


    <input   className="text-center w-100 mb-3" name="image1" onChange={handelChange}   type="text" placeholder="image 1 de votre atelier" /><br></br>


  
    <input  className="text-center w-100 mb-3"  name="image2" onChange={handelChange}   type="text" placeholder="image 2 de votre atelier" /><br></br>



    <input  className="text-center w-100 mb-3"  name="image3" onChange={handelChange}  type="text" placeholder="image 3 de votre atelier" /><br></br>
 


    <input  className="text-center w-100 mb-3"  name="image4" onChange={handelChange}   type="text" placeholder="image 4 de votre atelier" /><br></br>


<div className="troix-1-input">
 
    <input className="text-center w-25 mb-3"  name="Ntelf" onChange={handelChange}   type="text" placeholder="N telephone" />


    <input  className="text-center w-25 mb-3"  name="adress" onChange={handelChange} type="text" placeholder="adress" />


    <input  className="text-center w-25 mb-3"  name="gouvernorat" onChange={handelChange}  type="text" placeholder="gouvernorat" />
  
  </div>
  <button id="valider-bnt-modal-add-admin" type="submit">  Valider</button>
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

export default FormAjoutArtisan