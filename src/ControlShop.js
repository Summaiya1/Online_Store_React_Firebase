import React,{Component} from 'react';
import * as SemanticUi from 'semantic-ui-react';
import Cart from './Cart';
import Fire from './Fire';
import {Link} from 'react-router-dom';
import './ControlShop.css';

class ControlShop extends Component{
 
    constructor(props)
    {
        super(props);
        this.state={
            user:{},
        }
    }

    componentDidMount()
    { 
     this.authListener();
    }
    authListener()
    {
        Fire.auth().onAuthStateChanged((user)=>{
         if(user)
         {
             this.setState({user});
         }
         else
         {
             this.setState({user:null});
         }
        });
     
    }
 
    render()
    {
      
  return (
     <div>
     <br/>
     {this.state.user? (<Cart/>) : (<Link to="/login" className="ControlShop">Please Login First</Link>)}
     </div> 
  );
  }
}
export default ControlShop;
// <SemanticUi.Button animated='vertical'>
//      <SemanticUi.Button.Content hidden>Shop</SemanticUi.Button.Content>
//     <SemanticUi.Button.Content visible>
//      <SemanticUi.Icon name='shop' />
//       </SemanticUi.Button.Content>
//      </SemanticUi.Button>

// <SemanticUi.Icon color='yellow' name='cart arrow down' size='massive' />

// <div className="t"></div>

