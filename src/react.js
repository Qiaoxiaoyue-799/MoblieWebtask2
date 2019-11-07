var obj = {
    type:'h1',
    props:{
        id:'tit',
        class:'tit',
        //children:['hello']
    }
}

function render(obj,container){
    var {type,props} = obj;
    var ele = document.createElement(type);
    for(var item in props){
        if(item ==='class'){
            ele.className = props[item];
        }
        else if(item ==='children'){
            for(var i=0;i<props.children.length;i++){
                // ele.innerHTML += props.children[i];
                if(typeof props.children[i] === 'object'){
                    var txt = document.createTextNode(props.children);
                    render(props.children[i],ele);
                }else{
                    var txt = document.createTextNode()
                    ele.appendChild(txt);
                }
            }
        }
        else{
            ele[item] = props[item];
        }
    }
    container.appendChild(ele);
}

render(obj,document.getElementById('root'));