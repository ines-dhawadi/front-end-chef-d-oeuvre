import {BrowserRouter,Route,Switch ,Redirect} from 'react-router-dom'


//import GetAllClientC  from './component/view/getClient'
import Client from "../admin/client";
 import Admin from "../admin/admin";
 import Users from "../admin/users";
import FormAjoutArtisan from "../view/addArtisan";
import GestMap from "../view/getMapClient";
import NavbarC from "../view/navbard";
import Homme from '../pages/home';
import Localisation from "../pages/localisation";
import Chat from '../pages/chat';
import Tendance from '../pages/tendance';
import ProfilUser from '../pages/profilUser';
import ProfilArtisan from '../view/ProfilArtisan'
//import NewNavbar from "../view/newnavbar";


function Routes() {
  return (
    <div className="">
      <BrowserRouter>

<Switch>

<Route  path="/"   exact component={Homme}/>
<Route path="/localisation"  exact component={Localisation}/> 
<Route  path="/IDHCAR"   exact component={Admin} /> 
<Route path="/artisan" exact component={Users} /> 
<Route path="/users" exact component={Client} /> 
<Route path="/userone" exact component={ProfilArtisan} /> 



{/* pages chat  */}

        <Route path="/Chat" exact component={Chat} />
        <Route path="/Tendance" exact component={Tendance} />
        <Route path="/ProfilUser" exact component={ProfilUser} />
        <Redirect to="/" />
  
</Switch>







    
      
      
      </BrowserRouter>

     




    </div>
  );
}

export default Routes;
