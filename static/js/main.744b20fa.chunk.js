(this.webpackJsonptodolistapp=this.webpackJsonptodolistapp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(6),c=a.n(i),s=(a(13),a(1)),m=a(2),l=a(4),o=a(3),d=function(e){var t=e.items,a=e.deleteItem,n=t.length?t.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("span",{className:"name"},e.name),r.a.createElement("span",{className:"age"},e.age),r.a.createElement("span",{className:"action icon",onClick:function(){return a(e.id)}},"\xd7"))})):r.a.createElement("p",null," there is NO item to show ");return r.a.createElement("div",{className:"todoitems"},r.a.createElement("div",null,r.a.createElement("span",{className:"name title"},"Name"),r.a.createElement("span",{className:"age title"},"Age"),r.a.createElement("span",{className:"action title"},"Action")),n)},u=a(7),h=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={name:"",age:""},e.handleChange=function(t){e.setState(Object(u.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){if(t.preventDefault(),""===t.target.name.value)return!1;e.props.addItem(e.state),e.setState({name:"",age:""})},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"additem"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{className:"form_name",type:"text",placeholder:"Enter Your name ... ",id:"name",onChange:this.handleChange,value:this.state.name}),r.a.createElement("input",{className:"form_age",type:"number",placeholder:"Enter age ... ",id:"age",onChange:this.handleChange,value:this.state.age}),r.a.createElement("input",{className:"form_submit",type:"submit",value:"Add Todo"})))}}]),a}(n.Component),p=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={items:[{id:1,name:"Ahmed",age:22},{id:2,name:"Mohamed",age:30},{id:3,name:"Manal",age:50}]},e.deleteItem=function(t){var a=e.state.items,n=a.findIndex((function(e){return e.id===t}));a.splice(n,1),e.setState({items:a})},e.addItem=function(t){t.id=Math.random();var a=e.state.items;a.push(t),e.setState({items:a})},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"app container"},r.a.createElement("h1",{className:"text-center"},"Todo App List "),r.a.createElement(d,{items:this.state.items,deleteItem:this.deleteItem}),r.a.createElement(h,{addItem:this.addItem}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.744b20fa.chunk.js.map