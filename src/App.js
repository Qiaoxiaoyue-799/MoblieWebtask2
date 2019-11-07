import React, { Component } from 'react';
import Header from './components/Header';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
import Home from './container/Home';
import Start from './container/Start';
import Api from './container/Api';
import About from './container/About';
import Login from './container/Login';
import Content from './container/subContainer/Content';

export default class App extends Component {
    render() {
        return (
            <Router basename="/MoblieWebtask2/build/">
                <div>
                    <Header/>
                </div>
                <div>
                    <div className='content'>
                        <div>
                            <Route exact path="/" render={() => (<Redirect from='/' to="/home/all/1"/>)}/>
                            <Route path='/home' component={Home}/>
                            <Route path='/start' component={Start}/>
                            <Route path='/api' component={Api}/>
                            <Route path='/about' component={About}/>
                            <Route path='/login' component={Login}/>
                            <Route path="/content" component={Content}/>
                            <Route path='/content/:id' component={Content}/>
                            {/* <Route path='/login' component={Home}/>
                            <Route path='/home' component={Home}/> */}

                        </div>
                    </div>
                    <div className="bottom">
                        <a href="https://cnodejs.org/rss">
                            RSS
                        </a>
                        <span>|</span>
                        <a href="https://github.com/cnodejs/nodeclub/">
                            源码地址
                        </a>
                        <p id="bottom1">CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
                        <p id="bottom2">服务器赞助商为</p>
                        <img src="https://static.cnodejs.org/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9"></img>
                        <p id="bottom2">，存储赞助商为</p>
                        <img src="https://static.cnodejs.org/Fg0jtDIcTqVC049oVu5-sn6Om4NX"></img>
                        <p id="bottom2">，由</p>
                        <img src="https://static.cnodejs.org/FpMZk31PDyxkC8yStmMQL4XroaGD"></img>
                        <p id="bottom2">提供应用性能服务。</p>
                        <p id="bottom3">新手搭建 Node.js 服务器，推荐使用无需备案的
                        <a href="DigitalOcean(https://www.digitalocean.com/)">
                        DigitalOcean(https://www.digitalocean.com/)
                        </a>
                        </p>
                    </div>
                </div>
            </Router>
        )
    }
}
