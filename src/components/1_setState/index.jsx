import React, { Component } from 'react'

export default class Demo extends Component {
  state = {count : 0}

  add = async () => {
    // 对象式的setState
    /* // 1.获取原来的值
    const { count } = this.state;
    // 2.更新状态(状态更新是异步的)
    await this.setState({ count : count + 1 }, () => {
      console.log(this.state.count); 
    })
    console.log("状态更新完成",this.state.count); */

    // 函数式的setState
    this.setState((state, props) => ({count:state.count+1}), () => {});
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.add}>点我+1</button>
      </div>
    )
  }
}