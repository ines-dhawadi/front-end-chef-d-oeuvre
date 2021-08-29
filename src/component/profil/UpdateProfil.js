import React, { useState } from 'react'
import  "../../styles/index.scss";
import LeftNav from '../view/LeftNav'
import { useDispatch, useSelector } from "react-redux";
import UploadImg from "../profil/UploadImg";
import {updateBio} from "../redux/action/actionUser";
import { dateParser } from "../Utils";
//import "../css/profil.css";



function UpdateProfil() {
  const [bio, setBio] = useState("");
  const [updateForm, setUpdateForm] = useState(false);
 
    const userData = useSelector((state) => state.userStore);
    const dispatch = useDispatch();
 
    const handleUpdate = () => {
      dispatch(updateBio(userData._id, bio));
      setUpdateForm(false);
    };

  return(
       <div className="profil-container">
      <LeftNav />
      <h1> Profil de {userData.pseudo}</h1>
      <div className="update-container">
        <div className="left-part">
          <h3>Photo de profil</h3>
          <img  className="user-pic" src={userData.picture} alt="user-pic" />
          <UploadImg />
          {/* <p>{error.maxSize}</p>
          <p>{error.format}</p> */}
        </div>
        <div className="right-part">
          <div className="bio-update">
            <h3>Bio</h3>
            {updateForm === false && (
              <>
                <p onClick={() => setUpdateForm(!updateForm)}>{userData.bio}</p>
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
          <h4>Membre depuis le : {dateParser(userData.createdAt)}</h4>
           {/*<h5 onClick={() => setFollowingPopup(true)}>
            Abonnements : {userData.following ? userData.following.length : ""}
          </h5>
          <h5 onClick={() => setFollowersPopup(true)}>
            Abonnés : {userData.followers ? userData.followers.length : ""}
          </h5> */}
        </div>
       </div>
    </div>
   )

 }

export default UpdateProfil