import React, { Component } from 'react'

export default class content extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
        
    }
    componentDidMount(){
        let page = this.props.match.params.id;
        fetch('https://cnodejs.org/api/v1/topic/'+page)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res)
                this.setState({
                    data: res.data
                });
                console.log(this.state.data);
            })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id!==this.props.match.params.id){
            let page = this.props.match.params.id;
            fetch('https://cnodejs.org/api/v1/topic/'+page)
                .then((res)=>res.json())
                .then((res)=>{
                    console.log(res)
                    this.setState({
                        data: res.data
                        
                    });
                })
        }
    }
    render() {
        return (
            <div className='all'>
                <div className='titles'>
                    {/* <div className='jing'>{this.state.data.tab}</div> */}
                    {/* <p className='tit'>{this.state.data.title}</p> */}
                </div>
            <div dangerouslySetInnerHTML={{__html:this.state.data.content}}></div>               
            </div>
        );

        // return (
        //     <div>
        //         {
        //             <div style={{border:'2px solid green',width:500,height:200,overflow:'hidden'}} key={item.id}>
        //                 <h2>{item.title}</h2>
        //                 <div dangerouslySetInnerHTML={{__html:this.state.data.content}}></div>
        //             </div>
        //         }
                    
        //     </div>
        // )
    }
}
