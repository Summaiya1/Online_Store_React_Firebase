import React,{Component} from 'react';
import {Route,Switch} from "react-router-dom";
import Home from'./Home';
import Login from './Login';
import ItemsShow from './ItemsShow';
import ItemDetails from './ItemDetails';
import SignUp from './SignUp';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component{
  render()
  {
  return (
    <div>

      <Switch>
      <Route path='/login' render={() => <Login/>}/>
      <Route path='/signup' render={() => <SignUp/>}/>
      <Route exact path="/items" component={ItemsShow}/>
      <Route exact path="/items/:name" render={routeProps => <ItemDetails name={routeProps.match.params.name}/>}/>
      <Route exact path="/" component={Home}/>
      </Switch>
       
    </div>
  );
  }
}
export default App;