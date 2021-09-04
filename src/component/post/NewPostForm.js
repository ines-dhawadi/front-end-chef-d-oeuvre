import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
 import { isEmpty, timestampParser } from "../Utils";
 import { NavLink } from "react-router-dom";
 import { addPost, getPosts } from "../redux/action/actionPost";

const NewPostForm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [postPicture, setPostPicture] = useState(null);
  const [video, setVideo] = useState("");
  const [file, setFile] = useState();
  const userData = useSelector((state) => state.userStore);
const error = useSelector((state) => state.errorStore.postError);
   const dispatch = useDispatch();
  
  const handlePost = async () => {
    //1 condut si message ou  postPicture  ou video n p vide 
    if (message || postPicture || video) {
      // New data 
      const data = new FormData();
      data.append('posterId', userData._id);
      data.append('message', message);
      if (file) data.append("file", file);
      data.append('video', video);
// envoyer ver bacend
      await dispatch(addPost(data));
      dispatch(getPosts());
      cancelPost();
    }
     // si  vide (message ou  postPicture  ou video ) 
     else {
      alert("Veuillez entrer un message")
    }
  };
 
  const handlePicture = (e) => {
    setPostPicture(URL.createObjectURL(e.target.files[0]));
   // send to db
    setFile(e.target.files[0]);
    // video vide
    setVideo('');
  }; 

  const cancelPost = () => {
    setMessage("");
    setPostPicture("");
    setVideo("");
    setFile("");
  };


  useEffect(() => {
    if (!isEmpty(userData)) setIsLoading(false);

    const handleVideo = () => {
      // split pou boucle
      let findLink = message.split(" ");
      for (let i = 0; i < findLink.length; i++) {
        if (
          // si exist soit 1 soit 2
          findLink[i].includes("https://www.yout") ||
          findLink[i].includes("https://yout")
        ) {
          // remplace "watch?v=", "embed/"
          // embed/ pour que le vidéo etre dispo hors youtub
          let embed = findLink[i].replace("watch?v=", "embed/");
          // supp aprés  & => time
          setVideo(embed.split("&")[0]);
          // supp lien de vidéo de l'affichage
          findLink.splice(i, 1);
          setMessage(findLink.join(" "));
          // imd vide => soit vidéo soit img
          setPostPicture('');
        }
      }
    };
    handleVideo();
   }, [userData, message, video]);

  return (
    <div className="post-container">
      {isLoading ? (
        <i className="fas fa-spinner fa-pulse"></i>
      ) : (
        <>
          <div className="data">
            <p>
              <span>{userData.following ? userData.following.length : 0}</span>{" "}
              Abonnement
              {userData.following && userData.following.length > 1 ? "s" : null}
            </p>
            <p>
              <span>{userData.followers ? userData.followers.length : 0}</span>{" "}
              Abonné
              {userData.followers && userData.followers.length > 1 ? "s" : null}
            </p>
          </div>
          <NavLink exact to="/profil">
            <div className="user-info">
              <img src={userData.picture} alt="user-img" />
            </div>
          </NavLink>
          <div className="post-form">
            <textarea
              name="message"
              id="message"
              placeholder="Quoi de neuf ?"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            {message || postPicture || video.length > 20 ? (
              <li className="card-container">
                <div className="card-left">
                  <img src={userData.picture} alt="user-pic" />
                </div>
                <div className="card-right">
                  <div className="card-header">
                    <div className="pseudo">
                      <h3>{userData.pseudo}</h3>
                    </div>
                    <span>{timestampParser(Date.now())}</span>
                  </div>
                  <div className="content">
                    <p>{message}</p>
                    <img src={postPicture} alt="" />
                    {video && (
                      <iframe
                        src={video}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={video}
                      ></iframe>
                    )}
                  </div>
                </div>
              </li>
            ) : null}
            <div className="footer-form">
              <div className="icon">
                {isEmpty(video) && (
                  <>
                    <img src="/images/imgChat/picture.svg" alt="img" />
                    <input
                      type="file"
                      id="file-upload"
                      name="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={(e) => handlePicture(e)}
                    />
                  </>
                 )}
                {video && (
                  <button onClick={() => setVideo("")}>Supprimer video</button>
                )}  
              </div>
              {!isEmpty(error.format) && <p>{error.format}</p>}
              {!isEmpty(error.maxSize) && <p>{error.maxSize}</p>}
              <div className="btn-send">
                {message || postPicture || video.length > 20 ? (
                  <button className="cancel" onClick={cancelPost}>
                    Annuler message
                  </button>
                ) : null}
                <button className="send" onClick={handlePost}>
                  Envoyer
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NewPostForm;
