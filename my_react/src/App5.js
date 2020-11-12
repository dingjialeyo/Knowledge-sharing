// App4.js 的父组件 给 子组件 传值  不简便 在父组件使用api  就不需要在子组件一个个的嵌套传值   直接从父组件给到需要的的子组件

import React, { Component } from 'react'
import PropsTypes from 'prop-types'


// 子组件

// 最后接收值  渲染
class Childchild extends Component {
    // 在指定子组件获取context里面的这个属性及类型
    static contextTypes = {  // 属性值的类型验证   固定写法 propTypes
        // 规定 title 类型为 string 如果不为该类型 则报错
        title: PropsTypes.string
    }
    render () {
        return (
            <div>
                {this.context.title}
            </div>
        )
    }
}

// 接收到值后，给Childchild传值
class Child extends Component {
    render () {
        return (
            <div>
                <Childchild />
            </div>
        )
    }
}

// 给child传值
export default class App3 extends Component {
    // 在父组件中指定传值的类型 
    static childContextTypes = {
        title: PropsTypes.string
    }
    // 在父组件写需要传递的值
    getChildContext () {
        return {
            title: '爷爷aaaa'
        }
    }
    render() {
        return (
            <div>
                <Child />
            </div>
        )
    }
}
