import React, { useContext } from "react";
import { UidContext } from "../AppContext";
import LeftNav from "../view/LeftNav";
import NewNavbar from '../view/newnavbar'
import NewPostForm from "../post/NewPostForm";
import Thread from "../post/Fil";
import Authentifixation from "../authentification/index";
//import Trends from "../components/Trends";
import Friends from "../profil/Friend";

const Chat = () => {
  const uid = useContext(UidContext);

  return (
  <div>
    <NewNavbar/>
     
  
    <div className="home">
      <LeftNav />
      <div className="main">
        <div className="home-header">
        {uid ? <NewPostForm /> : <Authentifixation signin={true} signup={false} />}
        </div>
        <Thread />
      </div>
      <div className="right-side">
        <div className="right-side-container">
          <div className="wrapper">
            {/* <Trends />*/}
             {uid && <Friends />} 
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Chat;
