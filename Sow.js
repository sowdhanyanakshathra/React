import React,{Component} from 'react';
class TwoWay extends Component{
    constructor(props)
    {
    super(props);
    this.state={
      inputValue:''
    };
  }
  handleInputChange = (event)=>
    this.setState(
      {
         inputValue:event.target.value
      }
    )
    render()
    {
        return(
            <div>
                <input type="text" value={this.state.inputValue} onChange={ this.handleInputChange } />
                <h1>{this.state.inputValue}</h1>
            </div>
        )
    }
}
export default TwoWay;