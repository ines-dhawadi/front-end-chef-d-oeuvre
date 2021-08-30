import React ,{ useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {  Modal,Button} from "react-bootstrap";
import  "../../styles/index.scss";
import  FollowHandler from "./followhandler";


function ModalFollowers(){
    const userData = useSelector((state) => state.userStore);
    const usersData = useSelector((state) => state.usersStore.dataUsersss);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return(
    <div>

<>
    
     
    <h5 className="bnt-modl-followers"  onClick={handleShow}>
    Abonnés : {userData.followers ? userData.followers.length : ""}
   </h5>


<Modal className="modal" show={show} onHide={handleClose}>
 <Modal.Header closeButton>
   <Modal.Title>Abonnés</Modal.Title>
 </Modal.Header>
 <Modal.Body>
 {userData.followers  &&(
 <div >
 {/* className="popup-profil-container" */}
   <div >
   {/* className="modal" */}
    
   

     <ul className="cont-modal">
       {usersData.map((user) => {
         for (let i = 0; i <  userData.followers .length; i++) {
           if (user._id === userData.followers [i]) {
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

    </div>
   )

 }

export default ModalFollowers