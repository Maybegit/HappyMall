import React from 'react';
import ReactDOM from 'react-dom';

class Es6Component extends React.Component{
  constructor(props){
    super(props);
    // this.state = {
    //   name: 'maybe'
    // }
  }
  render(){
    return <h1>I am {this.props.name}</h1>
  }
}

ReactDOM.render(
  <div>
    <Es6Component name="maybe123"/>
  </div>,
  document.getElementById('app')
)