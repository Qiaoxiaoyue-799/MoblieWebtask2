import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';//2.导包
import './index.css';
//容器组件/UI组件（展示组件）
//智能组件/木偶组件

//容器组件(container/pages)：逻辑，功能
//UI组件(components)：写成函数组件，展示，返回React元素

ReactDOM.render(
    // <div>hello</div>,
    //1.引入<App/>
    <App/>,
    document.getElementById('root')
)