(this["webpackJsonpra-6-1-livecycle-clock"]=this["webpackJsonpra-6-1-livecycle-clock"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(9),a=c.n(s),r=(c(19),c(13)),o=c(6),l=c(3),m=c(8),j=c(4),u=(c(20),c(10)),b=c(11),d=c(14),O=c(12),f=(c(21),c(0));function h(e){var t=e.hh,c=e.mm,n=e.ss,i=6*n,s=6*(c+n/60),a=30*(t+c/60),r=function(e){return{transform:"rotate(".concat(e,"deg)")}};return Object(f.jsx)("div",{className:"clock",children:Object(f.jsxs)("div",{className:"wrap",children:[Object(f.jsx)("span",{className:"hour",style:r(a)}),Object(f.jsx)("span",{className:"minute",style:r(s)}),Object(f.jsx)("span",{className:"second",style:r(i)}),Object(f.jsx)("span",{className:"dot"})]})})}c(23);var v=function(e){Object(d.a)(c,e);var t=Object(O.a)(c);function c(){var e;return Object(u.a)(this,c),(e=t.call(this)).timer=null,e.state={time:new Date},e}return Object(b.a)(c,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){return e.setState({time:new Date})}),200)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this.state.time,t=this.props.clock,c=t.city,n=t.timezone,i=this.props.removeClock;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"clock-city-plate",children:[c,Object(f.jsx)("button",{className:"clock-delete-button",type:"button",onClick:i,children:"\xd7"})]}),Object(f.jsx)("div",{children:Object(f.jsx)(h,{hh:e.getUTCHours()+parseInt(n,10),mm:e.getUTCMinutes(),ss:e.getUTCSeconds()})})]})}}]),c}(i.a.Component);var p=function(){var e=Object(n.useState)([{id:Object(j.a)(),city:"Moscow",timezone:3},{id:Object(j.a)(),city:"London",timezone:0},{id:Object(j.a)(),city:"Novosibirsk",timezone:7}]),t=Object(m.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)({city:"",timezone:0}),a=Object(m.a)(s,2),u=a[0],b=a[1],d=function(e){var t=e.target,c=t.name,n=t.value;b((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(o.a)({},c,n))}))};return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("div",{className:"form-bar",children:Object(f.jsxs)("form",{className:"form",onSubmit:function(e){var t;(e.preventDefault(),u.city)&&(t=Object(l.a)(Object(l.a)({},u),{},{id:Object(j.a)()}),i((function(e){var c=Object(r.a)(e);return c.push(t),c})),b((function(){return{city:"",timezone:0}})))},children:[Object(f.jsxs)("div",{className:"form-field",children:[Object(f.jsx)("label",{className:"form-label",htmlFor:"city",children:"City"}),Object(f.jsx)("input",{className:"form-input",type:"text",id:"city",name:"city",value:u.city,onChange:d})]}),Object(f.jsxs)("div",{className:"form-field",children:[Object(f.jsx)("label",{className:"form-label",htmlFor:"timezone",children:"Timezone"}),Object(f.jsx)("input",{className:"form-input",type:"number",step:"1",min:"-12",max:"12",id:"timezone",name:"timezone",value:u.timezone,onChange:d})]}),Object(f.jsx)("div",{className:"form-field",children:Object(f.jsx)("button",{className:"form-button",type:"submit",children:"Add"})})]})}),Object(f.jsx)("ul",{className:"clocks",children:c.map((function(e){return Object(f.jsx)("li",{className:"clocks-clock-item",children:Object(f.jsx)(v,{clock:e,removeClock:function(){return t=e.id,void i((function(e){return e.filter((function(e){return e.id!==t}))}));var t}})},e.id)}))})]})};a.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(p,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.c9c08dd8.chunk.js.map