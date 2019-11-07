import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Hoc from './Hoc/Hoc';
import Parent from './Context/Parent';
import Sider from './Sider';
import NoMatch from './NoMatch';
import Content from './Router/Content';
import Hooks from './Router/Hooks';
export default class App extends Component {
    render() {
        return (
            // basename是基准路径，可以不用在route里每个前面都加一个/build
            <Router basename="/build">
                <div>
                    {/* <Content name='zhangsan'/> */}
                        
                        {/* <h2>这是children内容</h2>
                        <ul>
                            <li>1</li>
                        </ul> */}
                    <Sider/>
                    <div style={
                        {float:'left',
                        border:'2px solid red',
                        marginLeft: 100}
                    }>
                        {/* Route里面render里是一个函数 */}
                        {/* 两种书写方式 */}
                        {/* <Route path='/hoc' component={Hoc} render={()=><h1>Render 方法</h1>}/> */}
                        {/* 什么时候添加exact？ exact是严格匹配*/}
                    <Switch>
                        <Route excat path='/hoc' component={Hoc}>
                            <Hoc/>
                        </Route>
                        <Route path='/hooks/:id' component={Hooks}/>
                        {/* <Route path='/parent' component={Parent} /> */}
                        {/* <Redirect from='/old' to='/hoc' /> */}
                        <Route path='/old' render={()=><Redirect to='/hoc' />}/>
                        <Route path='/content/:id' component={Content}/>
                        <Route>
                            {/* NoMatch要放到最后，否则会只出现该页面 */}
                            <NoMatch/>
                        </Route>
                    </Switch>
                    </div>
                </div>  
            </Router>
        )
    }
}