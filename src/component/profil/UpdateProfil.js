import React, { useState } from 'react'
import LeftNav from '../view/LeftNav'
import { useDispatch, useSelector } from "react-redux";
import UploadImg from "../profil/UploadImg";
import  "../../styles/index.scss";

//import { updateBio } from "../redux/action/actionUser";
// import { dateParser } from "../Utils";
// import FollowHandler from "./FollowHandler";



function UpdateProfil() {
    // const [bio, setBio] = useState("");
    // const [updateForm, setUpdateForm] = useState(false);
    const userData = useSelector((state) => state.userStore);
    //const usersData = useSelector((state) => state.usersStore);
    //const error = useSelector((state) => state.errorReducer.userError);
    const dispatch = useDispatch();
    // const [followingPopup, setFollowingPopup] = useState(false);
    // const [followersPopup, setFollowersPopup] = useState(false);
  
    // const handleUpdate = () => {
    //   dispatch();
    //   setUpdateForm(false);
    // };



  return(
       <div className="profil-container">
      <LeftNav />
      <h1> Profil de {userData.pseudo}</h1>
      <div className="update-container">
        <div className="left-part">
          <h3>Photo de profil</h3>
          <img src={userData.picture} alt="user-pic" />
          <UploadImg />
          {/* <p>{error.maxSize}</p>
          <p>{error.format}</p> */}
        </div>
       </div>
    </div>
   )

 }

export default UpdateProfil