import React,{Component} from 'react';
import * as SemanticUi from 'semantic-ui-react';
import NavbarReact from './NavbarReact';
import ControlShop from './ControlShop';
import Fire from './Fire';
import Cart from './Cart';
import {withRouter} from'react-router-dom';
import './ItemDetails.css';

class ItemDetails extends Component{

constructor(props)
  {
    super(props);
    this.state={
      item:null,
      isloaded:false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount()
    {
      Fire.firestore().collection('items').get().then(snapshot =>{
        const items=[];
        snapshot.forEach(doc=>{
          const data=doc.data();
          items.push(data);
        })
        const item_wanted = items.filter(i=> i.Name==this.props.name);
        this.setState({item:item_wanted,isloaded:true});
      })
      
    }

  handleClick(e)
  {
    //this.setState({clicked:true});
    this.props.history.push('/items');
  }
  render()
  {
    
    let div;
    if(this.state.isloaded)
    {
       div=(<div>
        <NavbarReact />
        <div className="ItemDetails">
        <SemanticUi.Container>
        <p>
        <SemanticUi.Header as='h2'>{this.state.item[0].Name}</SemanticUi.Header>
        <SemanticUi.Image src={require(`./${this.state.item[0].Picture}`)} size='medium' rounded className="img"/>
        
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
          ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
          ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
          quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
          arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
          Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
          dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
          Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
          viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
          Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
        </p>
        <SemanticUi.Header as='h1'>{`Rs.${this.state.item[0].Price}`}</SemanticUi.Header>
        <SemanticUi.Button onClick={this.handleClick} primary>Go back</SemanticUi.Button>
        <SemanticUi.Button secondary>Leave A Review</SemanticUi.Button>
        <ControlShop/>
      </SemanticUi.Container>
     
  
     </div>
        </div>
  );
    }
    else
    {
      div=(<div className="loader">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
   </div>); 
    } 
  return (
    <div>
    {div}
    </div>
    
  );
  }
}
export default withRouter(ItemDetails);

