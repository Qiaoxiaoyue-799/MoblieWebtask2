import React, { Component } from 'react'
import {con} from './Contest'

export default class Child extends Component {
    render() {
        return (
            <div>
                Child组件
                <div>{this.context}</div>
                {/* <con.Consumer>
                    {
                        (id)=><div>{id}</div>
                    }
                </con.Consumer> */}
            </div>
        )
    }
}
Child.contextType=con;