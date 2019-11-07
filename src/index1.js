/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/
import React from 'react';
import ReactDOM from 'react-dom';
var str = 'react';
//var ele = <h1>hello {str}</h1>;
var obj = {
    type:'h1',
    props:{
        id:'tit',
        class:'tit',
        children:['hello']
    }
}
//var ele = <h1 class="tit">hello {str}</h1>; 等效于下行
var ele = React.createElement(
    'h1',
    {id:'tit',class:'title'},
    'hello',
    React.createElement(
        'p',
        {id:'t',class:'tit'},
        'react'
    ));
ReactDOM.render(ele,document.getElementById('root'));