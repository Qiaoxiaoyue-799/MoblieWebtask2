import React, { Component } from 'react'
import Axios from 'axios'
import {fetch} from 'whatwg-fetch'
//数据请求：Axios
export default class Request extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    componentDidMount() {
        let url = 'https://api.apiopen.top/musicRankingsDetails?type=1';
        fetch(url,{method:'post'})
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
                data:res.result
            })
        })
    }
    render() {
        // Axios.get('https://api.apiopen.top/musicRankingsDetails?type=1').then((res)=>{
        //     console.log(res);
        //     this.setState({
        //         data:res.data.result
        //     })
        // });//异步执行
        return (
            <div>
                <h1>数据请求：</h1>
                <ul>
                    {this.state.data.map(
                        (item,idx)=><li key={idx}>
                            <p>歌名：{item.title}</p>
                            <p>作者：{item.author}</p>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}
