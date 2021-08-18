import React, { Component } from 'react'
import './index.css'

export default class Parent extends Component {
  render() {
    return (
      <div className="parent">
        <h3>我是Parent组件</h3>
        <A render={(state) => <B {...state}/>}/>
      </div>
    )
  }
}

class A extends Component {
  state = {name:'tom'}
  render() {
    console.log(this.props);
    return (
      <div className="a">
        <h3>我是A组件</h3>
        {this.props.render(this.state)}
      </div>
    )
  }
}

class B extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="b">
        <h3>我是B组件</h3>
      </div>
    )
  }
}
