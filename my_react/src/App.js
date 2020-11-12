// 组件App

// 引入核心模块
import React from 'react'
// 引入样式模块
import style from './assets/css/App.css'
// 导入图片模块
import img from './assets/img/transform.png'

let name = "小米"
let age = 10
let list = [10,20,30,40]

// 定义组件
class App extends React.Component{
    // 构造函数
    constructor (props) {
        super(props)
        // 定义一个组件的state状态 里面的  初始值
        this.state = {
            num : 20,
            text : ''
        }
    }
    // 事件
    handleClick () {
        // console.log('点击了')
        // 修改 state状态 需要调用setstate方法
        this.setState({
            num: this.state.num+1
        })
    }
    // 双向数据绑定事件
    handleChange (e) {
        // console.log(e.target.value)  获取你键盘上输入的值
        this.setState({
            text: e.target.value
        })
    }
    render () {  // 渲染
        return (
            <div>
                <div className="app" style={{width: "150px", height: "200px", backgroundColor: "blue"}}>
                <p>第一个App组件</p>
                <img src={img} style={{width: '20px', height: '50px'}}/>
                </div>
                {
                    // 注释也需要括起来
                }
                <br/>
                {
                    // 数据的渲染
                }
                <div>
                    <p>姓名:{name}</p>
                    <p>年龄:{age}</p>
                    <p>是否成年?: {age > 18 ? '已经成年' : '小学生'}</p>
                    <ul>
                        {
                            list.map((value, index) => {
                                return (
                                    <li key={index}>{value}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                {/** 事件的使用 */}
                <div>
                    <p>{ this.state.num }</p>
                    <button onClick={this.handleClick.bind(this)}>按钮</button>
                </div>
                {/** 双向数据绑定 */}
                <div>
                    <input type="text" value={this.state.text} onChange={this.handleChange.bind(this)} />
                    <p>{this.state.text}</p>
                </div>
            </div>
        )
    }
}

// 导出组件
export default App