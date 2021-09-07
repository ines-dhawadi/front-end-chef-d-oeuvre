import { Button, Form,Modal } from "react-bootstrap";
import { Link  } from "react-router-dom";
import React  from 'react';
import { useState } from "react";
import {AddArtisanAdmin} from "../redux/action/actionArtisan";
import { useSelector,useDispatch } from 'react-redux';
import  "../../styles/index.scss";


function AddArtisanFront(){

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
//const [postPicture, setPostPicture] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //const [file, setFile] = useState();
  
  // const handlePicture = (e) => {

  //   setPostPicture(URL.createObjectURL(e.target.files[0]));
  //  // send to db
  //   setFile(e.target.files[0]);
    
   
  // }; 


  return(
    <div>
{/* ********************modal********************* */}

     {/* <div >
     <Button variant="primary" onClick={handleShow}>
      Ajouter un nouveau produit
      </Button>

      <Modal  show={show} onHide={handleClose}>
        <Modal.Header className="modal-content-add" closeButton>
          <Modal.Title>Vous pouvez Ajouter un nouveau produit
              
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-content-add"> */}
{/* ************************************* */}
<div>

<form onSubmit={handelSubmit}  className=" all-form-add-artisan-front">
<div className="troix-1-input">

    {/* <Form.Label>Titre de votre film</Form.Label> */}
    <input  className="text-center mb-4  w-50"   onChange={handelChange}  name="nom"  type="text" placeholder="nom" />

    <input className="text-center mb-4  w-50" onChange={handelChange}  name="prenom" type="text" placeholder="prenom" />

 
  </div>
  <input className="text-center mb-4 w-100" name="role" onChange={handelChange}  type="text" placeholder="role" />

    <input className="text-center w-100 mb-4"  name="desc" onChange={handelChange}  type="text" placeholder="description " />

<label className="text-center">Si vous ne connaissez pas votre latitude et votre longitude ce site peut vous aider </label>
<button className=" bnt-add-artisan ml-2 mb-4">visite du site<Link to="https://www.latlong.net/"> </Link></button>

<div className="troix-1-input">
  
    <input className="text-center w-50 mb-4"  name="latitude" onChange={handelChange}  type="text" placeholder="lalitude" />

    <input  className="text-center w-50 mb-4"  name="longitude" onChange={handelChange}  type="text" placeholder="longitude" />

  </div>

    <input className="text-center w-100 mb-4"  name="imageP"  placeholder="image personnel" onChange={handelChange}  
        
        type="text" />
        
 

 
    <input  className="text-center w-100 mb-4" name="image1" onChange={handelChange}  placeholder="image(url) 1 de votre atelier"   type="text"
        />



    <input className="text-center w-100 mb-4"  name="image2" onChange={handelChange}  placeholder="image(url) 2 de votre atelier"  type="text"
        />

 
    <input className="text-center w-100 mb-4"  name="image3" onChange={handelChange}  placeholder=" image(url) 3 de votre atelier" type="text"
       />



    <input className="text-center w-100  mb-4"  name="image4" onChange={handelChange}  placeholder="image(url) 4 de votre atelier"  type="text"
        />


<div className="troix-1-input">
 
    <input className="text-center w-50 mb-4"  name="Ntelf" onChange={handelChange}   type="text" placeholder="N telephone" />


    <input className="text-center w-50 mb-4"  name="adress" onChange={handelChange} type="text" placeholder="adress" />




  </div>
  <input className="text-center w-100 mb-4"  name="gouvernorat" onChange={handelChange}  type="text" placeholder="gouvernorat" />

  <button className="bnt-add-artisan" type="submit">  Valider</button>
</form>


</div>
{/* ********************************* */}
        {/* </Modal.Body>
       
      </Modal>
    </div>
  */}


{/* ******************** END modal********************* */}


    </div>
   )

 }

export default AddArtisanFront