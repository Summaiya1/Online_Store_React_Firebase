import React,{Component} from 'react';
import Fire from './Fire';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap';


class NavbarReact extends Component{

  constructor(props)
  {
      super(props);
      this.state = {};
      this.handleClick = this.handleClick.bind(this);
  }
  handleClick()
  {
    Fire.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }
  render()
  {

  return (
     
    <ReactBootstrap.Navbar bg="dark" variant="dark" expand="lg">
    <ReactBootstrap.Navbar.Brand href="/">Buy Made Easy</ReactBootstrap.Navbar.Brand>
    <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
    <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
        <ReactBootstrap.Nav className="mr-auto">
        <ReactBootstrap.Nav.Link href="/login">Login</ReactBootstrap.Nav.Link>
        <ReactBootstrap.Nav.Link href="/signup">Signup</ReactBootstrap.Nav.Link>
       
        </ReactBootstrap.Nav>
        <button onClick={this.handleClick}>Logout</button>    
    </ReactBootstrap.Navbar.Collapse>
    </ReactBootstrap.Navbar>
  );
  }
}
export default NavbarReact;
