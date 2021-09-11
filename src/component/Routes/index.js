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
import Contact from "../pages/Contact";
import Singninup from '../pages/singnSinUp'
import Choix from "../pages/choix";
import Tunis from "../view/tunis";
import Ariana from "../view/Ariana";
import Manouba from "../view/Manouba";
import BenArous from "../view/BenArous";
import SignInAdmin from "../authentification/signInAdmin"
//import NewNavbar from "../view/newnavbar";


function Routes() {
  return (
    <div className="">
      <BrowserRouter>

<Switch>

<Route  path="/"   exact component={Homme}/>
<Route path="/localisation"  exact component={Localisation}/> 
<Route  path="/IDHCAR/INES/DHAWADI/APP/CAR"   exact component={Admin} /> 
<Route path="/artisan" exact component={Users} /> 
<Route path="/users" exact component={Client} /> 
<Route path="/Contact" exact component={Contact}/>
<Route path="/userone" exact component={ProfilArtisan} /> 
<Route path="/Singninup" exact component={Singninup} /> 
<Route path="/Choix" exact component={Choix} /> 
<Route path="/Tunis" exact component={Tunis} /> 
<Route path="/Ariana" exact component={Ariana} /> 
<Route path="/Manouba" exact component={Manouba} /> 
<Route path="/BenArous" exact component={BenArous} /> 


{/* DASHBOARD ADLIN */}
<Route path="/DASHBOARD-ADLIN" exact component={SignInAdmin} />

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
