import React,{Component} from 'react';
import * as SemanticUi from 'semantic-ui-react';

class Error extends Component{
 
  render()
  {
    return(
        <SemanticUi.Message>
        <SemanticUi.Message.Header></SemanticUi.Message.Header>
        <p>
          {this.props.msg}
        </p>
      </SemanticUi.Message>
    );
    
  }
}
export default Error;


