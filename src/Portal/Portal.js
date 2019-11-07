import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Portal extends Component {
    handleClick = ()=>{
        console.log("Portalclick");
    }
    //ReactDOM.createPortal是可以将子节点渲染到父组件以外的DOM节点的方式
    render() {
        return (
            ReactDOM.createPortal(
                <div>
                    <h1 onClick={this.handleClick}>Portal</h1>
                </div>,
                document.body
            )
        )
    }
}
