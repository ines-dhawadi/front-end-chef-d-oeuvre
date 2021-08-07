import {BrowserRouter,Route} from 'react-router-dom'
import './App.css';
import GetArtisan from './component/view/getArtisan'

// import Admin from "./component/admin/admin";
// import Users from "./component/admin/users";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Route  path="/IDHCAR"> <Admin />  </Route>
      <Route path="/users">  <Users /> </Route> */}
     
      
      
      </BrowserRouter>

<GetArtisan />


    </div>
  );
}

export default App;
