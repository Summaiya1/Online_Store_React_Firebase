import React,{Component} from 'react';
import NavbarReact from './NavbarReact';
import {Redirect} from "react-router-dom";
import Cover from './cover.jpg';
import './Home.css';

class Home extends Component{
    
    constructor(props)
    {
      super(props);
      this.state = {
        clicked : false
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e)
    {
   this.setState({clicked:true});
    }
  render()
  {
  return (
    <div className="Home">
    {this.state.clicked ? <Redirect to="/items"/>:<div className="Home">
      <NavbarReact/>
      <img src={Cover}/>
      <button className="btn" onClick={this.handleClick}>Shop</button>
    </div>
    }
    </div>
  );
  }
}
export default Home;
