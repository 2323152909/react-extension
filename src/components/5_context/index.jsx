import React, { Component } from 'react'
import './index.css'

// 创建context对象
const MyContext = React.createContext();
const { Provider, Consumer } = MyContext
export default class Demo extends Component {
  state = { username: 'tom', age: 18 }

  render() {
    const { username } = this.state;
    return (
      <div className="parent">
        <h2>我是Demo组件</h2>
        <h4>我的用户名是:{username}</h4>
        <Provider value={this.state}>
          <B />
        </Provider>
      </div>
    )
  }
}

class B extends Component {
  render() {
    console.log(this);
    return (
      <div className="child">
        <h2>我是B组件</h2>
        <C />
      </div>
    )
  }
}

// class C extends Component {
//   // 声明接收context
//   static contextType = MyContext
//   render() {
//     console.log(this.contxt);
//     const { username, age } = this.context;
//     return (
//       <div className="grand">
//         <h2>我是C组件</h2>
//         <h4>我从Demo组件接收到的用户名是:{username}，年龄是：{age}</h4>
//       </div>
//     )
//   }
// }

function C() {
  return (
    <div className="grand">
      <h2>我是C组件</h2>
      <h4>
        <Consumer>
          {
            value => `我从Demo组件接收到的用户名是:${value.username},年龄：${value.age}`
          }
        </Consumer>
      </h4>
    </div>
  )
}

