import React, { Component } from 'react'

export default class Child extends Component {
  state = {
    // users: [
    //   { id: '001', name: 'tom', age: 18 },
    //   { id: '002', name: 'pcy', age: 22 },
    //   { id: '003', name: 'lhd', age: 22 }
    // ],
    users: "lhd"
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <h2>我是Child组件</h2>
        {
          users.map(user => {
            return (
              <h4 key={user.id}>姓名：{user.name},年龄：{user.age}</h4>
            )
          })
        }
      </div>
    )
  }
}
