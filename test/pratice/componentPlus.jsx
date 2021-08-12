import React from 'react';
import ReactDOM from 'react-dom';

class Component extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'maybe',
      age:18
    }
  }
  handleClick(){
    this.setState({
      age:this.state.age + 1
    })
  }
  onValueChange(e){
    this.setState({
      age:e.target.value
    })
  }
  render(){
    return (
      <div>
        <h1>I am {this.state.name}</h1>
        <p>I am {this.state.age} years old </p>
        <button onClick={(e)=>{this.handleClick(e)}}>加一岁</button>
        <input type="text" onChange={(e)=>{this.onValueChange(e)}} />
      </div>
    )
  }
}
class Title extends React.Component {
  constructor(props){
    super(props);
  }
  render(props) {
    // return <h1>{this.props.title}</h1>
    return <h1>{this.props.children}</h1>
  }
}

class App extends  React.Component {
  render() {
    return (
      <div className="">
        {/* <Title title="App2" /> */}
        {/* 容器组件*/}
        <Title>
          <span>zhangzhang</span>
          <a href="www.baidu.com">去百度</a>
        </Title>
        <hr />
        {/* 单纯组件*/}
        <Component />
      </div>
    )
  }
}


ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('app')
)