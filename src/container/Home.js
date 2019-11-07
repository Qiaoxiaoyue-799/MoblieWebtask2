import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import All from './subContainer/All';
import Jinghua from './subContainer/Jinghua';
import Share from './subContainer/Share';
import Question from './subContainer/Question';
import Recruit from './subContainer/Recruit';
import Test from './subContainer/Test';
export default class Home extends Component {
    render() {
        // this.props.match.url
        console.log(this.props.match.url);
        let {url} = this.props.match;
        return (
            <div class="homeall">
                <div class="homeleft">
                    <div className="home">
                        <Link to={`${url}/all/1`}>全部</Link>
                        <Link to={`${url}/jinghua/1`}>精华</Link>
                        <Link to={`${url}/share/1`}>分享</Link>
                        <Link to={`${url}/question/1`}>问答</Link>
                        <Link to={`${url}/recruit/1`}>招聘</Link>
                        <Link to={`${url}/test/1`}>客户端测试</Link>

                    </div>
                    <div>
                        {/* <Route path={url+'/all'} component={All}/>
                        <Route path={url+'/jinghua'} component={JingHua}/> */}
                        {/* <Route path={`${url}/all/:id`} component={All}/> */}
                        <Route path='/home/all/:id' component={All}/>
                        <Route path='/home/jinghua/:id' component={Jinghua}/>
                        <Route path='/home/share/:id' component={Share}/>
                        <Route path='/home/question/:id' component={Question}/>
                        <Route path='/home/recruit/:id' component={Recruit}/>
                        <Route path='/home/test/:id' component={Test}/>

                    </div>
                </div>
                <div className="homeright">
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
                </div>
            </div>
        )
    }
}
