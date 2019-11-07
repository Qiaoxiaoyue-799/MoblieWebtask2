// import React,{Fragment,Component} from 'react';
import React,{Fragment} from 'react';
// import React from 'react';
import ReactDOM from 'react-dom';

//外部引入：
import ShowTime from './ShowTime';
import Todolist from './ToDolist/Todolist';
//import './index.css';
import Request from './Request';

import Parent from './Context/Parent'
//Contest：1、生成Context，可写在一个js文件中，export导出
//2、在根组件写上Provider，加上value属性
//3、在需要获取数据的组件，import Consumer并配置Consumer
//Consumer组件里是个函数，函数的参数是传过来的value值


import {con,con2} from './Context/Contest'
import Child from './Context/Child';

import Hoc from './Hoc/Hoc';
import Portal from './Portal/Portal'
import ParentPortal from './Portal/ParentPortal'
import App from './App';
//let id=123;
//只有被放进ReactDOM.render的组件才能看到
//index.js引入Todolist组件，Todolist组件引进Todoinput和Todoing组件
// ReactDOM.render(
//     <con.Provider value={id}>
//         <div>ddd</div>
//         <con2.Provider value='aaaa'>
//             <Parent />
//         </con2.Provider>
//         <Parent />
//         {/* 这是npm start打开的组件 */}
//     </con.Provider>,
//     document.getElementById('root')
// )
// import App from './App';
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)

/*
//外部引入：
var num=[1,2,3,4,5];
ReactDOM.render(
    <ShowTime age={num} name="zhangsan"/>,
    document.getElementById('root')
)
*/

/*
class ShowTime extends Component{
    constructor(){
        super();
        this.state = {
            time:new Date().toLocaleString(),
            a:100,
            b:200
        }
        setInterval(()=>{
            this.setState({
                time:new Date().toLocaleString()
            });
        },1000)
    }
    shouldComponentUpdate(){
        if(this.state.a>10){
            return true;
        }
        return false;
    }
    componentDidUpdate(preProps,preState,data){
        console.log('didupdate');
        console.log(preProps,preState);
    }
    getSnapshotBeforeUpdate(){
        console.log('getSnapshot');
        return {name:this.state.a}
    }
    componentDidMount(){
        console.log('didmount');
    }
    render(){
        var {name,age} = this.props;
        return (<Fragment>
                    {/*条件渲染 三目运算符代替if语句，因为if只能在函数中用}
                    {name.length>5?<div>姓名:{name}</div>:''}
                    {name.length>5&&<div>姓名:{name}</div>}

                    <div>{this.state.time}</div>
                    <div>姓名:{name}</div>
                    <div>年龄:{age}</div>
                    {/*循环渲染}
                    <div>
                        {
                            age.map((item,index)=>{
                                if(index%2 === 0){return <p key={index}>{item}</p>}
                               
                            })
                        }
                    </div> 
                </Fragment>)
    }
}
var num=[1,2,3,4,5];
ReactDOM.render(
    <ShowTime age={num} name="zhangsan"/>,
    document.getElementById('root')
)

*/

//显示当前系统时间
//变量都要用{}括起来
/*
function ShowTime(props){
    console.log(props);
    return (<Fragment>
            <div>{props.name}</div>
            <div>
                {new Date().toLocaleString()}
            </div></Fragment>)
}
var num=20;
ReactDOM.render(
    <ShowTime age={num} name="zhangsan"/>,
    document.getElementById('root')
)
*/

/*
function showTime(){
    var ele = <div>
        <p>当前时间是：</p>
        <div>
            {new Date().toLocaleString()}
        </div>
    </div>;
    ReactDOM.render(ele,
        document.querySelector('#root')
    );
}
showTime();
setInterval(showTime,1000);
*/

/*
var obj = {
    type: 'div',
    props: {
        id: 'box',
        class: 'box',
        children: [
            'hello',
            'react',
            {
                type: 'h1',
                props: {
                    id: 'tit',
                    class: 'tit',
                    children: [
                        'title',
                        'react'
                    ]
                }
            }
        ]
    }
}
function render(obj,container){
    var {type,props} = obj;
    //文档碎片fragment
    var fragment = document.createDocumentFragment();

    var ele = document.createElement(type);
    for(var item in props){
        if(item === 'class'){
            ele.className = props[item]
        }else if(item === 'children'){
            for(var i=0;i<props.children.length;i++){
                // ele.innerHTML += props.children[i];
                if(typeof props.children[i] === 'object'){
                    render(props.children[i],ele);
                }else{
                    var txt = document.createTextNode(props.children[i]);
                    ele.appendChild(txt);
                }
            }
        }else{
            ele[item] = props[item];
        }
    }
    fragment.appendChild(ele);
    container.appendChild(ele);
}
render(obj,document.getElementById('root'));
*/



//页面渲染过程
//请求HTML页面、浏览器HTML解析器解析html文件、生成DOM树
//link引入css文件、css解析器解析css，生成css对象模型,CSSOM和DOM tree结合生成一个render tree,最后浏览器绘制页面

//页面回流(重排reflow)引起的原因:DOM结构变化、内容变化、大小、位置的变化
//页面重绘(repaint)引起的原因:颜色的变化(背景色、字体颜色、边框颜色)

// var ele = <h1 class="tit">hello <p>react</p></h1>;
// var ele = React.createElement(
//     'h1',
//     {id:'tit',class:'title'},
//     'hello',
//     React.createElement(
//         'p',
//         {id:'t',class:'tit'},
//         'react')
// );
// ReactDOM.render(ele, document.getElementById('root'));

/*
//1.先用变量进行dom处理，最后一次渲染。
console.time('time');
var div = document.getElementById('root');
var str = '';
for(var i=0;i<1000;i++){
    str += '<p>'+i+'</p>';
}
div.innerHTML = str;
console.timeEnd('time');
*/

/*
//2.对于样式处理,声明一个css类
var div = document.getElementById('root');
// div.style.width='200px';
// div.style.height='100px';
// div.style.background='red';//这种写法至少回流两次

//css类：
// .active{
//     width='200px';
//     height='100px';
//     background='red';
// }
div.className = 'active';
*/

/*
//3.offsetLeft、offsetWidth等都会引起回流
console.log(div.offsetLeft);
var wid = div.offsetWidth;
setInterval(()=>{
    wid += 1;
    div.style.width = wid + 'px';
},1000)
*/


//4.