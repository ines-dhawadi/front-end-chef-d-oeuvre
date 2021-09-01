
import Routes from './component/Routes';
import React, { useEffect, useState } from "react";

import { UidContext } from "./component/AppContext";
import axios from "axios";
import { useDispatch } from "react-redux";
import {getUser} from './component/redux/action/actionUser'

function App() {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
       await axios.get(`${process.env.REACT_APP_API_URL}jwtid`,{ withCredentials: true}).then((res) => {
       
          setUid(res.data);
          console.log("resssssss",setUid)
        })
        .catch((err) => console.log("No token"));
    };
    fetchToken();
    if (uid) dispatch(getUser(uid));

  }, [uid,dispatch]);

  return (
    <div className="App">
       {/* <Routes /> */}
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>


    </div>
  );
}

export default App;
