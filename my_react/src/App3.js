// 子组件 验证props属性值的类型

import React, { Component } from 'react'
import PropsTypes from 'prop-types'
// 调用模块 组件 充当 子组件 
import Son from './App2.js'


// 子组件
class Header extends Component {
    static propTypes = {  // 属性值的类型验证   固定写法 propTypes
        // 规定 title 类型为 number 如果不为该类型 则报错
        title: PropsTypes.number
    }
    render () {
        return (
            <div>
                {this.props.title}
            </div>
        )
    }
}



export default class App3 extends Component {
    render() {
        return (
            <div>
                <Header title={123} />
                <Son />
            </div>
        )
    }
}
