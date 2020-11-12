// Tab栏案列组件
// 快捷键 rcc 快速生成模板
import React, { Component } from 'react'
import style from './assets/css/tab.css'

export default class Tab extends Component {
    constructor(props) {
        super(props)

        // 初始状态值
        this.state = {
            num: 1
        }
    }
    handleClick (number) {
        this.setState({
            num: number
        })
    }
    render() {
        return (
            <div className="tab_con">
                <div className="tab_btns">
                    <input type="button" value="按钮1" className={ this.state.num === 1 ? "active" : ""} 
                    onClick={this.handleClick.bind(this,1)} />
                    <input type="button" value="按钮2" className={ this.state.num === 2 ? "active" : ""} onClick={this.handleClick.bind(this,2)} />
                    <input type="button" value="按钮3" className={ this.state.num === 3 ? "active" : ""} onClick={this.handleClick.bind(this,3)} />
                </div>
                <div className="tab_cons">
                    <div className={this.state.num === 1 ? "current" : ""}>按钮1内容</div>
                    <div className={this.state.num === 2 ? "current" : ""}>按钮2内容</div>
                    <div className={this.state.num === 3 ? "current" : ""}>按钮3内容</div>
                </div>
            </div>
        )
    }
}
