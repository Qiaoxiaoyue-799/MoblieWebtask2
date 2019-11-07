// 匹配不成功时出现的组件
import React from "react";
// props是父子组件调用NoMatch含有的属性
export default function NoMatch(props){
    console.log();
    return <h1>你的页面飞走了</h1>;
}