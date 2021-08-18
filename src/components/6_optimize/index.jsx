import React, { PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {
  state = { carName: '奔驰c63' }

  change = () => {
    this.setState({ carName: "红旗H9" })
  }

  /* shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props, this.state); //目前的props和state
    console.log(nextProps, nextState); //接下来要变化的目标props，目标state
    return !this.state.carName === nextState.carName
  } */

  render() {
    const { carName } = this.state
    console.log("parent--render")
    return (
      <div className="parent">
        <h3>我是Parent组件</h3>
        <h4>汽车为：{carName}</h4>
        <button onClick={this.change}>点我换车</button>
        <Child carName={carName}/>
      </div>
    )
  }
}

class Child extends PureComponent {
  /* shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props, this.state); //目前的props和state
    console.log(nextProps, nextState); //接下来要变化的目标props，目标state
    return !this.props.carName === nextProps.carName
  } */

  render() {
    console.log("child--render");
    return (
      <div className="child">
        <h3>我是Child组件</h3>
        <h4>我接到的车的名字为：{this.props.carName}</h4>
      </div>
    )
  }
}
