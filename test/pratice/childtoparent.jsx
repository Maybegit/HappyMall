import React from 'react';
import ReactDOM from 'react-dom';

class Child1 extends React.Component{
  constructor(props){
    super(props);
  }
  handleClick(){
    this.props.changeColor('red')
  }
  render(){
    return (
      <div>
        <h1>父组件的背景颜色：{this.props.bgColor}</h1>
        <button onClick={(e)=>{this.handleClick(e)}}>改变父组件bgColor</button>
      </div>
    )
  }
}
class Father extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bgColor:'#999'
    }
  }
  onBgColorChange(color){
    this.setState({
      bgColor:color
    })
  }
  render(props) {
    return (
      <div style={{background:this.state.bgColor}}>
        <Child bgColor = {this.state.bgColor} changeColor={(color) => {this.onBgColorChange(color)}}/>
      </div>
    )
  }
}


ReactDOM.render(
  <div>
    <Father />
  </div>,
  document.getElementById('app')
)