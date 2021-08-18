import React from 'react'
import ReactDOM from 'react-dom'

// export default class Demo extends React.Component {
//   state = { count: 1 }

//   add = () => {
//     this.setState(state => ({ count: state.count + 1 }))
//   }

//   unmount = () => {
//     ReactDOM.unmountComponentAtNode(document.getElementById("root"))
//   }

//   show = () => {
//     const { inp } = this;
//     alert(inp.value)
//   }

//   componentDidMount() {
//     this.timer = setInterval(() => {
//       this.setState(state => ({ count: state.count + 1 }))
//     }, 1000)
//   }

//   componentWillUnmount() {
//     console.log("root将要被卸载了");
//     clearInterval(this.timer)
//   }

//   render() {
//     return (
//       <div>
//         <input type="text" ref={c => {this.inp = c}}/>
//         <h2>当前求和为{this.state.count}</h2>
//         <button onClick={this.add}>点我+1</button>
//         <button onClick={this.unmount}>卸载组件</button>
//         <button onClick={this.show}>点击提示数据</button>
//       </div>
//     )
//   }
// }

export default function Demo() {
  // console.log('Demo');
  // 初始化创建状态
  const [count, setCount] = React.useState(0)

  const myRef = React.useRef();

  React.useEffect(() => {
    let timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => {
      console.log("将要卸载");
      clearInterval(timer)
    }
  }, [])

  // 加的回调
  function add() {
    // setCount(count + 1) // 第一种写法
    setCount(count => count + 1)
  }

  function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"))
  }

  function show(){
    console.log(myRef.current);
    alert(myRef.current.value)
  }

  return (
    <div>
      <input type="text" ref={myRef} />
      <h2>当前求和为{count}</h2>
      <button onClick={add}>点我+1</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>提示数据</button>
    </div>
  )
}
