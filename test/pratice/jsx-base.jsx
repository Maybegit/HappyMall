import React from 'react';
import ReactDOM from 'react-dom';

import 'font-awesome/css/font-awesome.min.css'
import './index.scss';

let name = "maybe"
let flag = false
let names = ['zhangzhang','qingqing','haha']
let jsx = (
  <div>
    {/*变量使用*/}
    <p> I am {name}</p>
    {/*条件判断*/}
    {
      flag ?  <p> I am {name}</p>: <p> I am not {name}</p>
    }
    {/*数组循环*/}
    {
      names.map((name,index) => <p key={index}>I am {name}</p>)
    }
  </div>)

ReactDOM.render(
  jsx,
  document.getElementById('app')
)