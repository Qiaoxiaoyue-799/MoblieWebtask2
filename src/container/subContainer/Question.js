import React, { Component } from 'react'
import {NavLink,Link} from 'react-router-dom';
export default class Question extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        let page = this.props.match.params.id;
        console.log(page);
        fetch('https://cnodejs.org/api/v1/topics?tab=ask&&page='+page)
        
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data:res.data
                })                
            })
    }
    // 更新完毕之后执行
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id!==this.props.match.params.id){
            let page = this.props.match.params.id
            fetch('https://cnodejs.org/api/v1/topics?tab=ask&&page='+page)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({
                        data:res.data
                    })                
                })
        }
    }
    render(){
        var list=[1,2,3,4,5,6,7,8,9,10];
        return (
            <div>
                <div>
                    {
                        this.state.data.map((item)=>(
                            <div id="lie">
                                <p>
                                    <img src={
                                        item.author.avatar_url
                                    }/>
                                </p>
                                <p>
                                    {item.reply_count}/{item.visit_count}
                                    <button>问答</button>
                                    <a onClick={this.xiangqing}>{item.title}</a>
                                    {/* <Link to={/content}></Link> */}
                                    <div id="alldate">3天前</div>
                                </p>
                                
                                {/* <h2>{item.title}</h2> */}
                            </div>
                        ))
                    }
                </div>
                <div>
                    {
                        list.map((item)=>(
                            <div key={item} style={{float:'left',width:'30px',height:'30px',border:'1px black solid ',padding:'5px',textAlign:'center',backgroundColor:'transparent'}}>
                                <NavLink activeStyle={
                                    {background:'green',color:'#fff'}
                                } to={'/home/question/'+item}>{item}</NavLink>
                            </div>
                        ))

                    }
                </div>

            </div>
        )
    }
}
