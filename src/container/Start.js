import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import Home from './Home';
export default class Start extends Component {
    render() {
        return (
            <div>
                <div className="startall">
                    <div className="startleft">
                        <div className="start">
                            <Link to='/home'>主页</Link>
                            <span>/Node.js 新手入门</span>
                        </div>
                        <div className="start1">
                            <div className="start11">
                                <p>Node.js 入门</p>
                            </div>
                            <div className="start12">
                                <p>《快速搭建 Node.js 开发环境以及加速 npm》</p>
                                <a href="http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html">
                                http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html
                                </a>
                                <p>《Node.js 包教不包会》</p>
                                <a href="https://github.com/alsotang/node-lessons">
                                https://github.com/alsotang/node-lessons
                                </a>
                                <p>《ECMAScript 6入门》</p>
                                <a href="http://es6.ruanyifeng.com/">
                                http://es6.ruanyifeng.com/
                                </a>
                                <p>《七天学会NodeJS》</p>
                                <a href="https://github.com/nqdeng/7-days-nodejs">
                                https://github.com/nqdeng/7-days-nodejs
                                </a>
                            </div>
                        </div>
                        <div className="start2">
                            <div className="start11">
                                <p>Node.js 资源</p>
                            </div>
                            <div className="start12">
                                <p>《前端资源教程》</p>
                                <a href="https://cnodejs.org/topic/56ef3edd532839c33a99d00e">
                                https://cnodejs.org/topic/56ef3edd532839c33a99d00e
                                </a>
                                <p>《国内的 npm 镜像源》</p>
                                <a href="http://cnpmjs.org/">
                                http://cnpmjs.org/
                                </a>
                                <p>《node weekly》</p>
                                <a href="http://nodeweekly.com/issues">
                                http://nodeweekly.com/issues
                                </a>
                                <p>《node123-node.js中文资料导航》</p>
                                <a href="https://github.com/youyudehexie/node123">
                                https://github.com/youyudehexie/node123
                                </a>
                                <p>《A curated list of delightful Node.js packages and resources》</p>
                                <a href="https://github.com/sindresorhus/awesome-nodejs">
                                https://github.com/sindresorhus/awesome-nodejs
                                </a>
                                <p>《Node.js Books》</p>
                                <a href="https://github.com/pana/node-books">
                                https://github.com/pana/node-books
                                </a>
                            </div>
                        </div>
                        <div className="start3">
                            <div className="start11">
                                <p>Node.js 名人</p>
                            </div>
                            <div className="start12">
                                <p>《名人堂》</p>
                                <a href="https://github.com/cnodejs/nodeclub/wiki/名人堂">
                                https://github.com/cnodejs/nodeclub/wiki/名人堂
                                </a>
                            </div>
                        </div>
                        <div className="start4">
                            <div className="start11">
                                <p>Node.js 服务器</p>
                            </div>
                            <div className="start12">
                                <span>新手搭建 Node.js 服务器，推荐使用无需备案的</span>
                                <a href="DigitalOcean(https://www.digitalocean.com/)">
                                DigitalOcean(https://www.digitalocean.com/)
                                </a>
                            </div>
                        </div>    
                    </div>
                    <div className="startright">
                        <div className="right">
                            <div className="right1">
                                <p>CNode：Node.js专业中文社区</p>
                                <span>您可以</span>
                                <Link>登录</Link>
                                <span>或</span>
                                <Link>注册</Link>
                                <span>,也可以</span>
                                <button className="right11">通过github登录</button>
                            </div>
                            <div className="right2">
                                <img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt=""/>
                                <img src="https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-" alt=""/>
                                <img src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt=""/>
                            </div>
                            <div className="right3">
                                <div className="right31">
                                    <p>友情社区</p>
                                </div>
                                <div className="right32">
                                    <img src="https://static2.cnodejs.org/public/images/ruby-china-20150529.png" alt=""/>
                                    <img src="https://static2.cnodejs.org/public/images/golangtc-logo.png" alt=""/>
                                    <img src="https://static2.cnodejs.org/public/images/phphub-logo.png" alt=""/>
                                    <img src="https://static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
