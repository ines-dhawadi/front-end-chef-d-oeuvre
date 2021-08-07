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
    dispatch( updateArtisan(Input.nom,Input.prenom, Input.role, Input.desc,Input.latitude,Input.longitude, Input.imageP,Input.image1,Input.image2,Input.image3,Input.image4,Input.Ntelf,Input.adress,Input.gouvernorat))
   
    console.log('val input', Input)
  }

  
//*************add to file json */
// const handleSubmit=(e)=>{
// e.preventDefault()
// console.log('input',input)

// axios.post('https://movies-762da-default-rtdb.firebaseio.com/posts.json', input)
// .then((response)=> console.log(response))
// .then(response=> window.location.reload())
// .catch((error)=> console.log('error'))


// }
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div>
{/* ********************modal********************* */}

    <div >
     
      <i onClick={handleShow} class="far fa-edit fa-2x"></i>
     

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
    <Form.Control  className="text-center"   onChange={handelChange}  name="nom" defaultValue={el.nom}   type="text" placeholder="nom" />
    </Form.Group>


  <Form.Group controlId="formGroupEmail">
    {/* <Form.Label>Langue de votre film</Form.Label> */}
    <Form.Control className="text-center" onChange={handelChange}  name="prenom" defaultValue={el.prenom}  type="text" placeholder="prenom" />
  </Form.Group>


  <Form.Group controlId="formGroupPassword">
    {/* <Form.Label>Acteur  de votre film</Form.Label> */}
    <Form.Control className="text-center" name="role"  defaultValue={el.role} onChange={handelChange}  type="text" placeholder="role" />
  </Form.Group>
  </div>
  <Form.Group controlId="formGroupPassword">
    <Form.Control className="text-center"  name="desc" defaultValue={el.desc}  onChange={handelChange}  type="text" placeholder="description " />
  </Form.Group>

<div className="troix-1-input">
  <Form.Group controlId="formGroupPassword">
    <Form.Control className="text-center"  name="latitude" defaultValue={el.latitude}  onChange={handelChange}  type="text" placeholder="lalitude" />
  </Form.Group>

  <Form.Group controlId="formGroupPassword">
    <Form.Control  className="text-center"  name="longitude" defaultValue={el.longitude}  onChange={handelChange}  type="text" placeholder="longitude" />
  </Form.Group>
  </div>
  <Form.Group controlId="formGroupPassword">
    <Form.Control className="text-center"  name="imageP" defaultValue={el.imageP}  onChange={handelChange}  type="text" placeholder="image personnel" />
  </Form.Group>

  <Form.Group controlId="formGroupPassword">
    <Form.Control  className="text-center" name="image1" defaultValue={el.image1}  onChange={handelChange}   type="text" placeholder="image 1 de votre atelier" />
  </Form.Group>

  <Form.Group controlId="formGroupPassword">
    <Form.Control className="text-center"  name="image2" defaultValue={el.image2}   onChange={handelChange}   type="text" placeholder="image 2 de votre atelier" />
  </Form.Group>

  <Form.Group controlId="formGroupPassword">
    <Form.Control className="text-center"  name="image3" defaultValue={el.image3}  onChange={handelChange}  type="text" placeholder="image 3 de votre atelier" />
  </Form.Group>

  <Form.Group controlId="formGroupPassword">
    <Form.Control className="text-center"  name="image4" defaultValue={el.image4}  onChange={handelChange}   type="text" placeholder="image 4 de votre atelier" />
  </Form.Group>

<div className="troix-1-input">
  <Form.Group controlId="formGroupPassword">
    <Form.Control className="text-center"  name="Ntelf" defaultValue={el.Ntelf}  onChange={handelChange}   type="text" placeholder="N telephone" />
  </Form.Group>

  <Form.Group controlId="formGroupPassword">
    <Form.Control className="text-center"  name="adress" defaultValue={el.adress}  onChange={handelChange} type="text" placeholder="adress" />
  </Form.Group>

  <Form.Group controlId="formGroupPassword">
    <Form.Control className="text-center"  name="gouvernorat" defaultValue={el.gouvernorat}  onChange={handelChange}  type="text" placeholder="gouvernorat" />
  </Form.Group>
  </div>
  <Button onClick={handelSubmit} type="submit">  Valider</Button>
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

export default UpdateArtisan