(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{112:function(t,e,n){},118:function(t,e,n){},119:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(72),s=n.n(a),i=(n(80),n(17)),o=n.n(i),u=n(25),j=n(3),d=n(26),l=n.n(d),p=n(73),b=n.n(p),h=n(2);function O(){var t=Object(c.useState)(""),e=Object(j.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(""),s=Object(j.a)(a,2),i=s[0],d=s[1],p=Object(c.useState)(""),O=Object(j.a)(p,2),f=O[0],x=O[1],m=function(){var t=Object(u.a)(o.a.mark((function t(e){var c,r,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),c={name:n,description:i,stock:f},t.next=4,l.a.post("http://localhost:4000/api",c);case 4:r=t.sent,a=r.data.msg,console.log(r),b.a.fire({icon:"success",title:a});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(h.jsxs)("form",{onSubmit:m,method:"POST",children:[Object(h.jsx)("input",{type:"text",name:"name",placeholder:"name",onChange:function(t){return r(t.target.value)}}),Object(h.jsx)("input",{type:"text",name:"description",placeholder:"description",onChange:function(t){return d(t.target.value)}}),Object(h.jsx)("input",{type:"number",name:"stock",placeholder:"stock",onChange:function(t){return x(t.target.value)}}),Object(h.jsx)("button",{type:"submit",children:"Crear"})]})}var f=n(5),x=n(124),m=function(){var t=Object(u.a)(o.a.mark((function t(e,n){var c,r,a,s,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.name,r=n.description,a=n.stock,t.next=3,l.a.put("http://localhost:4000/api/".concat(e),{name:c,description:r,stock:a});case 3:return s=t.sent,i=s.data,console.log("response",i),t.abrupt("return",i);case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),v=function(){var t=Object(u.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("http://localhost:4000/api");case 2:return e=t.sent,n=e.data,console.log("response",n),t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(){var t=Object(u.a)(o.a.mark((function t(e){var n,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("http://localhost:4000/api/".concat(e));case 2:return n=t.sent,c=n.data,console.log("response",c),t.abrupt("return",c);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=Object(u.a)(o.a.mark((function t(e){var n,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.delete("http://localhost:4000/api/".concat(e));case 2:return n=t.sent,c=n.data,console.log("response",c),t.abrupt("return",c);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();n(112);function y(){var t=Object(f.f)().push,e=Object(c.useState)(!1),n=Object(j.a)(e,2),r=n[0],a=n[1],s=Object(c.useState)([]),i=Object(j.a)(s,2),o=i[0],u=i[1];return Object(c.useEffect)((function(){a(!0),v().then((function(t){return u(t)})).then((function(){return a(!1)}))}),[]),r?Object(h.jsx)("div",{children:"Cargando datos.."}):Object(h.jsx)("div",{className:"list",children:Object(h.jsxs)(x.a,{variant:"striped",children:[Object(h.jsx)(x.e,{children:Object(h.jsxs)(x.f,{children:[Object(h.jsx)(x.d,{children:"Nombre"}),Object(h.jsx)(x.d,{children:"Descripci\xf3n"}),Object(h.jsx)(x.d,{children:"Stock"}),Object(h.jsx)(x.d,{isNumeric:!0,children:"Editar"}),Object(h.jsx)(x.d,{isNumeric:!0,children:"Eliminar"})]})}),Object(h.jsx)(x.b,{children:o.length>0&&(null===o||void 0===o?void 0:o.map((function(e){return Object(h.jsxs)(x.f,{children:[Object(h.jsx)(x.c,{children:e.name}),Object(h.jsx)(x.c,{children:e.description}),Object(h.jsx)(x.c,{children:e.stock}),Object(h.jsx)(x.c,{onClick:function(){return t("/edit/".concat(e._id))},isNumeric:!0,children:"Edit"}),Object(h.jsx)(x.c,{onClick:function(){return k(e._id)},isNumeric:!0,children:"Delete"})]},e._id)})))})]})})}var w=n(12),S=n(53);function C(t){var e=t.match,n=Object(f.f)().push,r=e.params.id,a=Object(c.useState)({name:"",description:"",stock:""}),s=Object(j.a)(a,2),i=s[0],o=s[1];Object(c.useEffect)((function(){g(r).then((function(t){return o(t)}))}),[]);var u=function(t){o(Object(S.a)(Object(S.a)({},i),{},Object(w.a)({},t.target.name,t.target.value)))};return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"EDITAR ELEMENTO"}),Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault(),m(r,i),n("/")},children:[Object(h.jsx)("input",{name:"name",type:"text",defaultValue:i.name,onChange:u}),Object(h.jsx)("input",{name:"description",type:"text",defaultValue:i.description,onChange:u}),Object(h.jsx)("input",{name:"stock",type:"number",defaultValue:i.stock,onChange:u}),Object(h.jsx)("button",{type:"submit",children:"Guardar"})]})]})}var E=n(36);n(118);function N(t){var e=t.children;return Object(h.jsxs)("div",{className:"layout",children:[Object(h.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light px-5",children:[Object(h.jsx)(E.b,{to:"/",children:"Inicio"}),Object(h.jsx)(E.b,{to:"/add",children:"Agregar"})]}),Object(h.jsx)("div",{children:e})]})}var D=function(){return Object(h.jsx)(E.a,{children:Object(h.jsx)(N,{children:Object(h.jsxs)(f.c,{children:[Object(h.jsx)(f.a,{exact:!0,path:"/",component:y}),Object(h.jsx)(f.a,{exact:!0,path:"/add",component:O}),Object(h.jsx)(f.a,{exact:!0,path:"/edit/:id",component:C})]})})})};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(D,{})}),document.getElementById("root"))},80:function(t,e,n){}},[[119,1,2]]]);
//# sourceMappingURL=main.d9fa0128.chunk.js.map