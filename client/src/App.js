import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Components/Home';
import Userdata from './Components/Userdata';
const App=() =>{
  return (
    <Router className="router">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Userdata" component={Userdata}/>
      </Switch>
    </Router>
  );
}
export default App;