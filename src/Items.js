import React,{Component} from 'react';
import * as SemanticUi from 'semantic-ui-react';
import {Redirect} from "react-router-dom";
import './Items.css';
class Items extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      clicked:false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e)
  {
    this.setState({clicked:true});
  }
  render()
  {
    return(
    <div>
    {this.state.clicked ? <Redirect to={`/items/${this.props.name}`}/> : (<SemanticUi.Card>
      <SemanticUi.Image src={require(`./${this.props.img}`)} wrapped ui={false}/>
      <SemanticUi.Card.Content>
        <SemanticUi.Card.Header>{this.props.name}</SemanticUi.Card.Header>
      </SemanticUi.Card.Content>
      <SemanticUi.Button content='Show Details' secondary onClick={this.handleClick}/>
    </SemanticUi.Card>)}
    </div>
    );
    
  }
}
export default Items;


