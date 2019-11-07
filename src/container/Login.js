import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Login extends Component {
    home=(e)=>{
        window.location.href="http://localhost:3000/home/all/1";
    }
    render() {
        return (
            <div>
                <div className="aboutall">
                    <div className="aboutleft">
                        <div className="start">
                            <Link to='/home'>主页</Link>
                            <span>/登录</span>
                        </div>
                        <div className="login">
                            <p>用户：</p>
                            <input type="text"></input>
                            <p>密码：</p>
                            <input type="text"></input>
                            <button onClick={this.home}>登录</button>
                        </div>
                    </div>
                    
                    <div className="aboutright">
                            <div className="right2">
                                <img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt=""/>
                                <img src="https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-" alt=""/>
                                <img src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt=""/>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
