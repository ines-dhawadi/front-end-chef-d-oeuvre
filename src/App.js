import {BrowserRouter,Route} from 'react-router-dom'
import './App.css';
//import GetAllClientC  from './component/view/getClient'
import Client from "./component/admin/client";
 import Admin from "./component/admin/admin";
 import Users from "./component/admin/users";
import FormAjoutArtisan from "./component/view/addArtisan";
import GestMap from "./component/view/getMapClient";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route  path="/IDHCAR"> <Admin />  </Route>
     
      <Route path="/artisan">  <Users /> </Route>
      <Route path="/users">  <Client /> </Route>
     
      
      
      </BrowserRouter>

      <GestMap />




    </div>
  );
}

export default App;
