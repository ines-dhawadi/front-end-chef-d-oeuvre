import {BrowserRouter,Route,Switch} from 'react-router-dom'


//import GetAllClientC  from './component/view/getClient'
import Client from "../admin/client";
 import Admin from "../admin/admin";
 import Users from "../admin/users";
import FormAjoutArtisan from "../view/addArtisan";
import GestMap from "../view/getMapClient";
import NavbarC from "../view/navbard";
import Homme from '../pages/home';
import Localisation from "../pages/localisation";



function Routes() {
  return (
    <div className="">
      <BrowserRouter>

<Switch>
<Route exact path="/"> <Homme /> </Route>
<Route exact path="/localisation"> <Localisation /> </Route>
<Route  path="/IDHCAR"> <Admin />  </Route>
     
     <Route path="/artisan">  <Users /> </Route>
     <Route path="/users">  <Client /> </Route>
    
  
</Switch>







    
      
      
      </BrowserRouter>

     




    </div>
  );
}

export default Routes;
