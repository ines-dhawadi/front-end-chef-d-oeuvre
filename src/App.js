import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './App.css';
//import GetAllClientC  from './component/view/getClient'
import Client from "./component/admin/client";
 import Admin from "./component/admin/admin";
 import Users from "./component/admin/users";
import FormAjoutArtisan from "./component/view/addArtisan";
import GestMap from "./component/view/getMapClient";
import NavbarC from "./component/view/navbard";
import Homme from './component/pages/home';




function App() {
  return (
    <div className="App">
      <BrowserRouter>

<Switch>
<Route exact path="/"> <Homme /> </Route>
{/* <Route exact path="/">  <GestMap /> </Route> */}
<Route  path="/IDHCAR"> <Admin />  </Route>
     
     <Route path="/artisan">  <Users /> </Route>
     <Route path="/users">  <Client /> </Route>
    
  
</Switch>







    
      
      
      </BrowserRouter>

     




    </div>
  );
}

export default App;
