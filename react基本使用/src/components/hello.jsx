// 必须导入react这个模块
import React from 'react'


// 导出这个类 组件   内部返回一个需要的组件
export default function Hello(props) {
    console.log(props)
    return <div>
        这是Hello组件提供的信息
    </div>
}