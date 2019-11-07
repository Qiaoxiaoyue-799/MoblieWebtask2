import React, { Component } from 'react'
//受控组件：value值被react控制的表单元素
//可以实时获取表单元素的值
export default class Todoinput extends Component {
    constructor(){
        super();
        this.handleInput = this.handleInput.bind(this);
        this.state={
            a:'',
            b:'',
            c:''        
        }

    }
    // handleInput(e){
    //     if(e.keyCode === 13){
    //         console.log(e.target.value);//获得输入的值
    //         this.props.add();//调用这个属性的函数
    //     }
    // }
    handleInput = (e) =>{
        //绑定this，事件处理函数写成箭头函数，或者用bind绑定
        if(e.keyCode === 13){
            //console.log(e.target.value);//获得输入的值
            this.props.add(e.target.value);//调用这个属性的函数
        }
    }
    handleChange = (e) => {
        this.setState({
            // 必须加[],不然非法
            [e.target.name]:parseInt(e.target.value===''?0:e.target.value)
        })
    }
    //聚焦
    // componentDidMount(){
    //     console.log(this.refs.a);
    //     this.a.focus();
    // }
    //render是个函数
    render() {
        return (
            <div className={this.b+this.c>10?'box':''}>
                <label htmlFor="inp">请输入第一个数：</label>
                {/* state是当前数据存储数据的对象，改变数据要setstate */}
                <input id="inp" name="a"  onChange={this.handleChange} value={this.state.input} onKeyDown={this.handleInput} type="text"/>
                +
                <input name="b" onChange={this.handleChange} value={this.state.input} onKeyDown={this.handleInput} type="text"/>
                +
                <input name="c" onChange={this.handleChange} value={this.state.input} onKeyDown={this.handleInput} type="text"/>                
                <p>{this.state.a+this.state.b+this.state.c}</p>

                {/* 以下两种形式新版本建议第二种 */}
                <input ref="a" type="text"></input>
                <input ref={(inp)=>{this.inp=inp}} type="text"></input>
                {/* <button className="btn" onClick={()=>{console.log(this.inp.value)}}>提交</button> */}
                <button style={{color:'red',fontSize:'100px'}} 
                    onClick={()=>console.log(this.inp.value)}>提交</button>
            </div>
        )
    }
}
