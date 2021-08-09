import { Button, Form,Modal } from "react-bootstrap";
import "../admin/admin.css"
import React  from 'react';
import { useState } from "react";
import {updateClient} from "../redux/action/actionClient";
import { useSelector,useDispatch } from 'react-redux';

function UpdateClientC({el,id}){

  //dispatch function
   const dispatch = useDispatch()

// récupération val input

const [Input,setInput] = useState(
  {
    nom:el.nom,
    prenom: el.prenom,
    telephone: el.telephone,
    email: el.email,
    password:el.password,
    image:el.image
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
    dispatch( updateClient(id,Input.nom,Input.prenom, Input.telephone, Input.email,Input.password,Input.image))
   
    console.log('val input', Input)
    setShow(false)
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
    <i  onClick={handleShow}class="material-icons">edit</i> 
       
     
     

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
    <Form.Control className="text-center" name="telephone"  defaultValue={el.telephone} onChange={handelChange}  type="text" placeholder="telephone" />
  </Form.Group>
  </div>
  <Form.Group controlId="formGroupPassword">
    <Form.Control className="text-center"  name="email" defaultValue={el.email}  onChange={handelChange}  type="text" placeholder="email" />
  </Form.Group>


  <Form.Group controlId="formGroupPassword">
    <Form.Control className="text-center"  name="password" defaultValue={el.password}  onChange={handelChange}  type="text" placeholder="password" />
  </Form.Group>

  <Form.Group controlId="formGroupPassword">
    <Form.Control  className="text-center"  name="image" defaultValue={el.image}  onChange={handelChange}  type="text" placeholder="image" />
  </Form.Group>
  

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

export default UpdateClientC