import React, { Component } from 'react'

export default class Content extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        console.log(id);
        fetch('https://cnodejs.org/api/v1/topic/'+id)
        
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
            let id = this.props.match.params.id
            fetch('https://cnodejs.org/api/v1/topic/'+id)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({
                        data:res.data
                    })                
                })
        }
    }
    render() {
        return (
            <div className='all'>
                <div className='titles'>
                    <div className='jing'>{this.state.data.tab}</div>
                    <p className='tit'>{this.state.data.title}</p>
                </div>
            <div dangerouslySetInnerHTML={{__html:this.state.data.content}}></div>               
            </div>
        );
    }
}
