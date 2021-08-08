import {BrowserRouter,Route} from 'react-router-dom'
import './App.css';
import GetArtisan from './component/view/getArtisan'
import Client from "./component/admin/client";
 import Admin from "./component/admin/admin";
 import Users from "./component/admin/users";
import FormAjoutArtisan from "./component/view/addArtisan";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route  path="/IDHCAR"> <Admin />  </Route>
     
      <Route path="/artisan">  <Users /> </Route>
      <Route path="/users">  <Client /> </Route>
     
      
      
      </BrowserRouter>

      

<GetArtisan />


    </div>
  );
}

export default App;
