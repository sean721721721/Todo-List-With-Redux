(this["webpackJsonptodo-list-with-redux"]=this["webpackJsonptodo-list-with-redux"]||[]).push([[0],{25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(5),i=n.n(a),r=n(2),o=n(12),l=n(4),d=n(6),u={data:[{title:"Get up early",done:!1},{title:"Have Breakfast",done:!1},{title:"Start coding",done:!1}]};var j=Object(d.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t.task),t.type){case"ADD_TASK":return Object(l.a)(Object(l.a)({},e),{},{data:[].concat(Object(o.a)(e.data),[t.task])});case"REMOVE_TASK":return Object(l.a)(Object(l.a)({},e),{},{data:Object(o.a)(t.tasks)});default:return e}})),f=(n(25),n(14)),b=n(1),O=function(e){var t=e.task,n=e.handleRemove;return Object(b.jsx)("div",{className:"wait_item_icons_trash",children:Object(b.jsx)("i",{className:"far fa-trash-alt","data-text":t,onClick:n})})},h=function(e){var t=e.task,n=e.handleCheck;return Object(b.jsx)("div",{className:"wait_item_icons_done",children:Object(b.jsx)("i",{className:"fas fa-check-circle","data-text":t,onClick:n})})},x=function(e){return{type:"REMOVE_TASK",tasks:e}},m=function(e){var t=e.tasks,n=t.done,s=t.title,a=Object(r.c)((function(e){return e.data})),i=Object(c.useRef)(null),o=Object(c.useRef)(null),l=Object(c.useRef)(null),d=Object(r.b)();return Object(c.useEffect)((function(){setTimeout((function(){i.current.classList.add("active"),o.current.classList.add("active"),l.current.classList.add("active")}),0)})),Object(b.jsxs)("div",{ref:i,className:"".concat(n?"done":"wait","-item"),children:[Object(b.jsx)("span",{ref:o,children:s}),Object(b.jsxs)("div",{ref:l,className:"item_icons",children:[Object(b.jsx)(O,{task:s,handleRemove:function(t){t.preventDefault(),a.splice(e.index,1),d(x(a))}}),!n&&Object(b.jsx)(h,{task:s,handleCheck:function(t){t.preventDefault(),a[e.index].done=!0,d(x(a))}})]})]})},v=function(e){var t=e.type,n=e.tasks;return Object(b.jsx)("div",{className:"".concat(t,"-list"),children:n.map((function(e,t){return Object(b.jsx)(m,{tasks:e,index:t},t)}))})},p=(n(27),function(){var e=Object(c.useState)(""),t=Object(f.a)(e,2),n=t[0],s=t[1],a=Object(r.c)((function(e){return e.data}));console.log(a);var i=Object(c.useRef)(null),o=Object(r.b)();return Object(c.useEffect)((function(){i.current.focus()})),console.log("render TodoList"),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("header",{children:"To-Do List"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o(function(e){return{type:"ADD_TASK",task:e}}(n)),console.log("add"),s({title:"",done:!1}),e.target.reset()},children:[Object(b.jsx)("input",{ref:i,type:"text",onChange:function(e){s({title:e.target.value,done:!1})}}),Object(b.jsx)("button",{type:"submit",children:Object(b.jsx)("i",{className:"fas fa-plus-circle send"})})]}),Object(b.jsxs)("div",{className:"wait-item-list",children:[Object(b.jsxs)("span",{children:["Wait Item",Object(b.jsx)("i",{className:"fas fa-list-ul"})]}),Object(b.jsx)(v,{type:"wait",tasks:a.filter((function(e){return!e.done}))})]}),Object(b.jsxs)("div",{className:"done-item-list",children:[Object(b.jsxs)("span",{children:["Done Item",Object(b.jsx)("i",{className:"far fa-calendar-check"})]}),Object(b.jsx)(v,{type:"done",tasks:a.filter((function(e){return e.done}))})]})]})}),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(r.a,{store:j,children:Object(b.jsx)(p,{})})}),document.getElementById("root")),k()}},[[28,1,2]]]);
//# sourceMappingURL=main.f0d04659.chunk.js.map