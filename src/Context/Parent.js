import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    constructor(){
        super();
        this.state = {
            time:new Date().toLocaleString()
        }
    }
    componentDidMount(){
        console.log("111");
        this.timeId = setInterval(()=>{
            this.setState({
                time:new Date().toLocaleString()
            })
        })
    }
    componentWillUnmount(){
        clearInterval(this.timeId);
    }
    render() {
        return (
            <div>
                <h1>{this.state.time}</h1>
                Parent组件
                <Child/>
            </div>
        )
    }
}
