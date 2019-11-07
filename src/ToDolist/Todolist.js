import React, { Component } from 'react'
import Todoing from './Todoing'
import Todoinput from './Todoinput'
import './todo.css'

export default class Todolist extends Component {
    constructor(){
        super();
        this.state={
            todo:[1,2,3],
            a:100,
            b:100
        }
    }
    addItem = (data) => {
        //this.state.todo.push(data);
        this.setState({
            todo:[...this.state.todo,data]
        })
    }
    delItem = (idx)=>{
        //深拷贝、浅拷贝
        /*
        //法一：深拷贝：
        var obj = {a:100,b:[1,2,3]}
        var o = JSON.parse(JSON.stringify(obj));
        o.b[0] = 200;
        console.log(obj);
        */
       
        /*
        //法二：浅拷贝：
        var obj = {a:100,b:[1,2,3]};
        var obj1 = {c:300};
        var o = Object.assign({},obj,obj1);
        console.log(o);
        */

        /*
        //遍历对象简便方法：
        Object.keys(obj).forEach((item)=>{
            console.log(item)
            console.log(obj[item])
        })
        */

        //法三：
        //1.不能直接改变或处理state，通过setState改变
        //console.log(idx);
        let todo = [...this.state.todo]//拷贝
        todo.splice(idx,1);
        //2.setState是异步执行
        //即使constructor有多个对象，setState修改一个对象，其他对象并不会受到影响。 
        //在setState里获取state可能会出错，可以把第一个参数写成函数
        /*1:
        this.setState((state,props)=>{
            console.log(state.todo);
            return{
                todo:todo
            }
        })
        */

        /*2:
        this.setState({
            todo:todo
        },()=>{console.log(this.state.todo)})
        */
    }
    render() {
        return (
            <div>
                <Todoing todo={this.state.todo} del={this.delItem}/>
                <Todoinput add={this.addItem}/>
            </div>
        )
        
    }
}
