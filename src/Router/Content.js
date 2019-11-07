
// import React from 'react';

// // export default是一个接口
// export default function Content(props){
//     //props是父组件传来的属性
//     console.log(props);
//     function handleClick(){
//         props.history.push("../Hoc")
//     }
//     return(
//         <div>
//             {/* {props.children} */}
//             {/* Content{props.match.params.id} */}
//             <button onclick={handleClick}>click me!!</button>
//         </div>
//     )
// }

import React from 'react';
// 无状态组件
export default class Content extends React.Component{
    constructor(){
        super();
        this.state = {
            data: []
        }
        
    }
    componentDidMount(){
        let page = this.props.match.params.id;
        fetch('https://cnodejs.org/api/v1/topics?page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res)
                this.setState({
                    data: res.data
                });
            })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id!==this.props.match.params.id){
            let page = this.props.match.params.id;
            fetch('https://cnodejs.org/api/v1/topics?page='+page)
                .then((res)=>res.json())
                .then((res)=>{
                    console.log(res)
                    this.setState({
                        data: res.data
                    });
                })
        }
    }
    render(){
        return (
            <div>
                {
                    this.state.data.map((item)=>(
                        <div style={{border:'2px solid green',width:500,height:200,overflow:'hidden'}} key={item.id}>
                            <h2>{item.title}</h2>
                            <div dangerouslySetInnerHTML={{__html:item.content}}></div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
