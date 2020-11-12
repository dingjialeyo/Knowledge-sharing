import React, { Component } from 'react'

// 定义一个子组件
class Child extends Component {
    handleClick () {
        // 点击按钮 调用 父组件 传过来的 方法
        this.props.fatherClick(50)
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}></button>
                {this.props.title}
                {/* 接收到的组件 内部 内容 ---num */}
                {this.props.children}
            </div>
        )
    }
}

export default class App6 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num : 20
        }
    }
    fatherClick(val) {
        this.setState({
            num: val
        })
    }
    render() {
        return (
            <div>
                {/* 传递了 fatherClick方法 给 子组件的props来调用 */}
                <Child fatherClick={this.fatherClick.bind(this)} title={'hello'}>
                    {this.state.num}
                </Child>
            </div>
        )
    }
}
