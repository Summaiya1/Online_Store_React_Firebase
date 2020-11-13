import React,{Component} from 'react';
import Error from './Error';
import * as SemanticUi from 'semantic-ui-react';
import Fire from './Fire'; 
import NavbarReact from './NavbarReact';
import {withRouter} from 'react-router-dom';
import './Login.css';

class Login extends Component{
    constructor(props)
    {
        super(props);
        this.state = {email:"",password:"",error:false,user:{}};
        this.handleChange = this.handleChange.bind(this);
        this.login=this.login.bind(this);
    }
    handleChange(evt)
    {
        this.setState({ [evt.target.name] : evt.target.value});
    }
    login(e)
    {
       e.preventDefault();
       Fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u) =>{  this.setState({error:false});
       this.props.history.goBack();}
       ).catch((error)=>{
         this.setState({error:true});
       });
  
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
    <NavbarReact />
    {this.state.user?<Error msg="user is already logged in"/>:(<SemanticUi.Form className="Login">
    <SemanticUi.Form.Field>
      <label>Email</label>
      <input type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange}/>
    </SemanticUi.Form.Field>
    <SemanticUi.Form.Field>
      <label>Password</label>
      <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
    </SemanticUi.Form.Field>
    <SemanticUi.Form.Field>
      <SemanticUi.Checkbox label='I agree to the Terms and Conditions' />
    </SemanticUi.Form.Field>
    <SemanticUi.Button type='submit' onClick={this.login}>Submit</SemanticUi.Button>
    {this.state.error?<Error msg="Please enter details correctly"/>:null}
  </SemanticUi.Form>
  )}
    </div>
  
  );
  }
}
export default withRouter(Login);

