import React,{Component} from 'react';
import Error from './Error';
import * as SemanticUi from 'semantic-ui-react';
import Fire from './Fire'; 
import NavbarReact from './NavbarReact';
import {withRouter} from 'react-router-dom';
import './SignUp.css';

class SignUp extends Component{
    constructor(props)
    {
        super(props);
        this.state = {email:"",password:"",error:false,user:{}};
        this.handleChange = this.handleChange.bind(this);
        this.SignUp=this.SignUp.bind(this);
    }
    handleChange(evt)
    {
        this.setState({ [evt.target.name] : evt.target.value});
    }
    SignUp(e)
    {
       e.preventDefault();
       Fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u) =>{  this.setState({error:false});
       this.props.history.goBack();}
       ).catch((error)=>{
         this.setState({error:true});
       });
  
    }

  render()
  {
  return (
    <div>
    <NavbarReact/>
    <SemanticUi.Form className="SignUp">
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
    <SemanticUi.Button type='submit' onClick={this.SignUp}>Submit</SemanticUi.Button>
    {this.state.error?<Error msg="Please enter details correctly"/>:null}
  </SemanticUi.Form>
  
    </div>
  
  );
  }
}
export default withRouter(SignUp);

