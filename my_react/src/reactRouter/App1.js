import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from "react-router"

// 引入对应的组件
import Index from './index.js'
import List from './lisst.js'

export default class App1 extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a href="#/index">首页</a></li>
                    <li><a href="#/lisst">列表页</a></li>
                </ul>
            </div>
        )
    }
}

// 定义一个路由
let routers = <Router history={hashHistory}>
    <Route path="/" component={App1} />
    <Route path="/index" component={Index} />
    <Route path="/lisst" component={List} />
</Router>

ReactDOM.render(routers, document.getElementById('root'))
