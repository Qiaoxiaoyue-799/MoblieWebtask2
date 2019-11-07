import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Todoing extends Component {
    render() {
        var {todo} = this.props;
        return (
            <ul>
                {
                    todo.map((item,idx)=>
                    <li key={idx}>
                        {item}---<button onClick={(e)=>this.props.del(idx,e)}>删除</button>
                    </li>)
                }
            </ul>
        )
    }
}

Todoing.propTypes = {
    todo:PropTypes.string,
    del:PropTypes.func
}

Todoing.defaultProps = {
    todo:[1,2,3,4]
}