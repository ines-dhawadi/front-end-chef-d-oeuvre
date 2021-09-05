

import React, { useState } from 'react'
import  "../../styles/index.scss";
import LeftNav from '../view/LeftNav'
import { useDispatch, useSelector } from "react-redux";
import UploadImg from "../profil/UploadImg";
import {updateBio} from "../redux/action/actionUser";
import { dateParser } from "../Utils";
import {  Modal,Button} from "react-bootstrap";
import { getUsers } from "../redux/action/actionUserss";
import ModalFollowers from '../profil/modalfollowers'
import  FollowHandler from "./followhandler";
//import "../css/profil.css";



function UpdateProfil() {
  const [bio, setBio] = useState("");
  const [updateForm, setUpdateForm] = useState(false);
  const userData = useSelector((state) => state.userStore);
  const usersData = useSelector((state) => state.usersStore.dataUsersss);
  const error = useSelector((state) => state.errorStore.userError);
  const dispatch = useDispatch();
  const [followingPopup, setFollowingPopup] = useState(false);
  const [followersPopup, setFollowersPopup] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getusersss = () => {
    dispatch(getUsers())
  };

    const handleUpdate = () => {
      dispatch(updateBio(userData._id, bio));
      setUpdateForm(false);
    };

  return(
       <div className="profil-container">
      <LeftNav />
      <h1 className="user-pseudo"> Profil de <span>{userData.pseudo}</span> </h1>
      <div className="update-container">
        <div className="left-part">
          <h3 className="pic-profil">Photo de profil</h3>
          <img  className="user-pic" src={userData.picture} alt="user-pic" />
          <UploadImg />
          <p>{error.maxSize}</p>
          <p>{error.format}</p>
        </div>
        <div className="right-part">
          <div className="bio-update">
            <h3>Bio</h3>
            {updateForm === false && (
              <>
                <p className="p-bio" onClick={() => setUpdateForm(!updateForm)}>{userData.bio}</p>
                <button onClick={() => setUpdateForm(!updateForm)}>
                  Modifier bio
                </button>
              </>
            )}
            {updateForm && (
              <>
                <textarea
                  type="text"
                  defaultValue={userData.bio}
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
                <button onClick={handleUpdate}>Valider modifications</button>
              </>
            )}
          </div>
         
          {/* /************* */ }
          <h4>Membre depuis le : {dateParser(userData.createdAt)}</h4>
          <>
    
     
           <h5 className="bnt-modl-abon"  onClick={handleShow}>
            Abonnements : {userData.following ? userData.following.length : ""}
         
          </h5>
    

      <Modal className="modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Abonnements</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {userData.following  &&(
        <div >
        {/* className="popup-profil-container" */}
          <div >
          {/* className="modal" */}
           
            
            <ul  className="cont-modal">
          
              {usersData.map((user) => {
              // 
                for (let i = 0; i < userData.following.length; i++) {
                  if (user._id === userData.following[i]) {
                    return (
                      <li key={user._id}>
                        <img className="img-modai-fillow" src={user.picture} alt="user-pic" />
                        <h4>{user.pseudo}</h4>
                        <div className="follow-handler">
                          <FollowHandler idToFollow={user._id} type={'suggestion'} />
                        </div>
                      </li>
                    );
                  } 
                }
                return null;
              })}
            </ul>
          </div>
        </div>
     
     )}
        </Modal.Body>
       
      </Modal>
    </>


          {/* ******************** */}
         
          <>
    
     
   <ModalFollowers />
</>
        </div>
       </div>
       
      


    </div>
   )

 }

export default UpdateProfil