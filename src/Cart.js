import React,{Component} from 'react';
import * as SemanticUi from 'semantic-ui-react';
import * as ReactBootstrap from 'react-bootstrap';
import './Cart.css';
import {Redirect} from "react-router-dom";

class Cart extends Component{
  constructor(props)
  {
    super(props);
   
  }

  render()
  {
    return(
    <div className="Cart">
        <ReactBootstrap.Button variant="primary">
            Cart <ReactBootstrap.Badge variant="light">0</ ReactBootstrap.Badge>
            <span className="sr-only">unread messages</span>
        </ReactBootstrap.Button>
        
    </div>
    );
    
  }
}
export default Cart;

 
    