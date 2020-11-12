// 父组件 向 子组件之间嵌套 传值 

import React, { Component } from 'react'
import PropsTypes from 'prop-types'


// 子组件

// 最后接收值  渲染
class Childchild extends Component {
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

// 接收到值后，给Childchild传值
class Child extends Component {
    render () {
        return (
            <div>
                <Childchild title={this.props.title} />
            </div>
        )
    }
}

// 给child传值
export default class App3 extends Component {
    render() {
        return (
            <div>
                <Child title={'爷爷'}/>
            </div>
        )
    }
}
