import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="aboutall">
                    <div className="aboutleft">
                        <div className="start">
                            <Link to='/home'>主页</Link>
                            <span>/关于</span>
                        </div>
                        <div className="api11">
                            <p>关于</p>
                        </div>
                        <span id="aboutsp">
                        CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。
                        </span>
                        <span id="aboutsp">
                        CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。
                        </span>
                        <span id="aboutsp">
                        CNode 的 SLA 保证是，一个9，即 90.000000%。
                        </span>
                        <p id="aboutwen">请关注我们的官方微博：
                            <a href="http://weibo.com/cnodejs">
                            http://weibo.com/cnodejs
                            </a>
                        </p>
                        <div className="api11">
                            <p>移动客户端</p>
                        </div>
                        <span id="aboutsp">
                        客户端由<a href="https://cnodejs.org/user/soliury"> @soliury </a>开发维护。
                        </span>
                        <span id="aboutsp">
                        源码地址：<a href="https://github.com/soliury/noder-react-native"> https://github.com/soliury/noder-react-native </a>。
                        </span>
                        <span id="aboutsp">
                        立即体验 CNode 客户端，直接扫描页面右侧二维码。
                        </span>
                        <span id="aboutsp">
                        另，安卓用户同时可选择：<a href="https://github.com/TakWolf/CNode-Material-Design">https://github.com/TakWolf/CNode-Material-Design </a>，这是 Java 原生开发的安卓客户端。
                        </span>
                        <div className="api11">
                            <p>友情链接</p>
                        </div>
                        <div className="aboutimg">
                            <img src="https://static.cnodejs.org/Ftmw28ed0I_rir7YYz3c_jVPkCGx"></img>
                            <img src="https://static.cnodejs.org/FmU1Ik57z6wrl9JDTNdcYBTDetFq"></img>
                            <img src="https://static.cnodejs.org/FkMR_SqpCp4Q0eDIaWrQlALiXdmP"></img>
                            <img src="https://static.cnodejs.org/Fq2cV_14IFHwelZ-6jey42Z0-eOR"></img>
                            <img src="https://static.cnodejs.org/FijGJbij9GObh5AXw-Vyu5LGn08a"></img>
                            <img src="https://static2.cnodejs.org/public/images/temp/sf.png"></img>
                            <img src="https://static2.cnodejs.org/public/images/temp/ionichina.png"></img>
                        </div>
                        <div className="api11">
                            <p>LOGO</p>
                        </div>
                        <span id="aboutsp">
                        白底：<a href=" /public/images/cnodejs.svg"> /public/images/cnodejs.svg</a>
                        </span>
                        <span id="aboutsp">
                        黑底： <a href="/public/images/cnodejs_light.svg">/public/images/cnodejs_light.svg</a>
                        </span>
                    </div>
                    
                    <div className="aboutright">
                        
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
        )
    }
}
