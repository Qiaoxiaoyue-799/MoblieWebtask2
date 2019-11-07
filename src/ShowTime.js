import React,{Fragment,Component} from 'react';
//类定义组件
class ShowTime extends React.Component{
    constructor(){
        super();
        this.state = {
            time:new Date().toLocaleString(),
            a:100,
            b:200
        }
        setTimeout(()=>
        {
            this.setState({           
                time:new Date().toLocaleString()
            });
        },1000)
    }  
    shouldComponentUpdate(){
        if(this.state.a>10){
            return true;
        }
        return false;
    }
    componentDidUpdate(preProps,preState,data){
        console.log('didupdate');
        console.log(preProps,preState);
        console.log(this.state.time);
    }
    getSnapshotBeforeUpdate(){
        console.log('getSnapshot');
        return{name:this.state.a};
    }
    render(){
        var {name,age} = this.props;
        return(
            <Fragment>
                {/*条件渲染 */}
                {name.length>5?<div>姓名：{name}</div>:''}
                {name.length>5&&<div>姓名：{name}</div>}
                <div>{this.state.time}</div>
                <div>姓名：{name}</div>
                <div>年龄：{age}</div>
                {/*循环渲染 */}
                <div>
                    {
                        age.map((item,index)=>{
                            if(index%2 === 0)
                            return <p key={item}>{item}</p>
                        })
                    }
                </div>
            </Fragment>
        )
    }
}
//默认导出:只能导出一次,被引入时可以重命名。
//export default ShowTime;

//命名导出:可以导出多个
export {ShowTime};
export const num = 100;
export const num1 = 100;
export const num2 = 100;
