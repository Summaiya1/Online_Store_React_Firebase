import React,{Component} from 'react';
import NavbarReact from './NavbarReact';
import Items from './Items';
import Cart from './Cart';
import Fire from './Fire';
import './ItemsShow.css';
class ItemsShow extends Component{
    // static defaultProps={
    //     items_array : [
    //         {name:'Chocolate Cake',img:'Choco-Cake'},
    //         {name:'Burger',img:'burger'},
    //         {name:'Icecream',img:'icecream'},
    //         {name:'Soup',img:'soup'}]
    // }
    constructor(props)
    {
      super(props);
      this.state={
        items:null,
        isloaded:false,
      }
    }
    componentDidMount()
    {
      Fire.firestore().collection('items').get().then(snapshot =>{
        const items=[];
        snapshot.forEach(doc=>{
          const data=doc.data();
          items.push(data);
        })
        this.setState({items:items,isloaded:true});
      })
    }


  render()
  {
  return (
      <div>
    <NavbarReact/>
    <img className="imgg" src={require(`./banner.jpg`)}/>
    {this.state.isloaded?(<div  className="items-container">
                                    {this.state.items.map(i =>
                                    (<div className="items">
                                          <Items name={i.Name} img={i.Picture} price={i.Price}/>
                                      </div>)
                                    )}
                            </div>):
  (<div class="loader">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
 </div>)}
 
 </div>
  );
  }
}
export default ItemsShow;

