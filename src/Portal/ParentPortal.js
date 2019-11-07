import React, { Component } from 'react'
import Portal from './Portal'
export default class ParentPortal extends Component {
    handleClick = ()=>{
        console.log("ParentPortalclick");
    }
    render() {
        return (
            <div>
                <div onClick={this.handleClick}>
                    <Portal/>
                </div>
            </div>
        )
    }
}
