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
      <Button variant="primary" onClick={handleShow}>
      Ajouter Artisan
      </Button>

      <Modal  show={show} onHide={handleClose}>
        <Modal.Header className="modal-content-add" closeButton>
          <Modal.Title>Vous pouvez Ajouter un nouveau produit
              
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-content-add">
{/* ************************************* */}
<div>

<Form onSubmit={handelSubmit}  className="">
<div className="troix-1-input">
<Form.Group controlId="formGroupPassword" className="ml-2">
    {/* <Form.Label>Titre de votre film</Form.Label> */}
    <Form.Control  className="text-center"   onChange={handelChange}  name="nom"  type="text" placeholder="nom" />
    </Form.Group>


  <Form.Group controlId="formGroupEmail">
    {/* <Form.Label>Langue de votre film</Form.Label> */}
    <Form.Control className="text-center" onChange={handelChange}  name="prenom" type="text" placeholder="prenom" />
  </Form.Group>


  <Form.Group controlId="formGroupPassword">
    {/* <Form.Label>Acteur  de votre film</Form.Label> */}
    <Form.Control className="text-center" name="role" onChange={handelChange}  type="text" placeholder="role" />
  </Form.Group>
  </div>
  <Form.Group controlId="formGroupPassword">
    <Form.Control className="text-center"  name="desc" onChange={handelChange}  type="text" placeholder="description " />
  </Form.Group>

<div className="troix-1-input">
  <Form.Group controlId="formGroupPassword">
    <Form.Control className="text-center"  name="latitude" onChange={handelChange}  type="text" placeholder="lalitude" />
  </Form.Group>

  <Form.Group controlId="formGroupPassword">
    <Form.Control  className="text-center"  name="longitude" onChange={handelChange}  type="text" placeholder="longitude" />
  </Form.Group>
  </div>
  <Form.Group controlId="formGroupPassword">
    <Form.Control className="text-center"  name="imageP" onChange={handelChange}  type="text" placeholder="image personnel" />
  </Form.Group>

  <Form.Group controlId="formGroupPassword">
    <Form.Control  className="text-center" name="image1" onChange={handelChange}   type="text" placeholder="image 1 de votre atelier" />
  </Form.Group>

  <Form.Group controlId="formGroupPassword">
    <Form.Control className="text-center"  name="image2" onChange={handelChange}   type="text" placeholder="image 2 de votre atelier" />
  </Form.Group>

  <Form.Group controlId="formGroupPassword">
    <Form.Control className="text-center"  name="image3" onChange={handelChange}  type="text" placeholder="image 3 de votre atelier" />
  </Form.Group>

  <Form.Group controlId="formGroupPassword">
    <Form.Control className="text-center"  name="image4" onChange={handelChange}   type="text" placeholder="image 4 de votre atelier" />
  </Form.Group>

<div className="troix-1-input">
  <Form.Group controlId="formGroupPassword">
    <Form.Control className="text-center"  name="Ntelf" onChange={handelChange}   type="text" placeholder="N telephone" />
  </Form.Group>

  <Form.Group controlId="formGroupPassword">
    <Form.Control className="text-center"  name="adress" onChange={handelChange} type="text" placeholder="adress" />
  </Form.Group>

  <Form.Group controlId="formGroupPassword">
    <Form.Control className="text-center"  name="gouvernorat" onChange={handelChange}  type="text" placeholder="gouvernorat" />
  </Form.Group>
  </div>
  <Button type="submit">  Valider</Button>
</Form>


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