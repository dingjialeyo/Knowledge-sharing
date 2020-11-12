// 组件间的嵌套传值
import React, { Component } from 'react'

class Header extends Component {
    // 该组件的默认属性
    static defaultProps = { // 固定写法  defaultProps 
        bgc: "blue",
        title: "标题",
        children: "默认的子元素"
    }
    render () {
        return (
            <h1 style={{backgroundColor : this.props.bgc }}>
                {/* this.props 获取对应组件标签的属性 */}
                {/* 子组件接收 父组件传过来的值 */}
                {this.props.title}
                {/* 组件写成双标签时，获取该里面的元素 */}
                {this.props.children}
                {console.log(this.props.children)}
            </h1>
        )
    }
}

export default class App2 extends Component {
    constructor (props) {
        super(props)

        this.state = {
            // 父组件传值
            title : '这是list标题',
            bgc : '#eee'
        }
    }
    render() {
        return (
            <div>
                {/* 在组件内部定义组件 */}
                <Header title={this.state.title} bgc={this.state.bgc} />
                <Header title="这是login标题" bgc="pink" />
                <Header />
                <Header>
                    哈哈哈哈
                </Header>
                <div>这是内容区域</div>
            </div>
        )
    }
}
