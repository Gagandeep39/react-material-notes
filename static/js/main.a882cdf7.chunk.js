(this["webpackJsonpreact-material-notes"]=this["webpackJsonpreact-material-notes"]||[]).push([[0],{71:function(e,t,n){},72:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(11),r=n.n(o),i=(n(71),n(72),n(59)),l=n(10),s=n(25),j=n(116),b=n(120),u=n(121),d=n(6),h=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){fetch("http://localhost:3001/notes").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]),Object(d.jsx)(j.a,{children:Object(d.jsx)(b.a,{container:!0,children:n.map((function(e){return Object(d.jsx)(b.a,{item:!0,xs:12,md:6,lg:4,children:Object(d.jsxs)(u.a,{children:[e.title," "]})},e.id)}))})})},O=n(122),f=n(82),x=n(129),m=n(132),g=n(123),p=n(131),v=n(124),y=n(130),S=n(125),C=n(126),k=Object(O.a)({btn:{fontSize:90,backgroundColor:"violet","&:hover":{backgroundColor:"blue"}},title:{textDecoration:"underline",marginBottom:20},field:{marginTop:20,marginBottom:20,display:"block"}}),W=function(){var e=k(),t=Object(a.useState)(""),n=Object(s.a)(t,2),c=n[0],o=n[1],r=Object(a.useState)(""),i=Object(s.a)(r,2),b=i[0],u=i[1],h=Object(a.useState)(!1),O=Object(s.a)(h,2),W=O[0],N=O[1],w=Object(a.useState)(!1),B=Object(s.a)(w,2),T=B[0],D=B[1],J=Object(a.useState)("todos"),M=Object(s.a)(J,2),q=M[0],E=M[1],I=Object(l.f)();return Object(d.jsxs)(j.a,{children:[Object(d.jsx)(f.a,{variant:"h6",color:"textSecondary",component:"h2",gutterBottom:!0,children:"Create a new Note"}),Object(d.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),N(!1),D(!1),c||N(!0),b||D(!0),c&&b&&(console.log(c,b,q),fetch("http://localhost:3001/notes",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({title:c,details:b,category:q})}).then((function(){return I.push("/")})))},children:[Object(d.jsx)(x.a,{onChange:function(e){return o(e.target.value)},label:"Title",variant:"outlined",required:!0,fullWidth:!0,color:"secondary",className:e.field,error:W}),Object(d.jsx)(x.a,{onChange:function(e){return u(e.target.value)},label:"Details",variant:"outlined",required:!0,fullWidth:!0,multiline:!0,rows:"4",color:"secondary",className:e.field,error:T}),Object(d.jsxs)(m.a,{className:e.field,children:[Object(d.jsx)(g.a,{children:"Notes Category"}),Object(d.jsxs)(p.a,{value:q,onChange:function(e){return E(e.target.value)},children:[Object(d.jsx)(v.a,{value:"money",control:Object(d.jsx)(y.a,{}),label:"Money"}),Object(d.jsx)(v.a,{value:"todos",control:Object(d.jsx)(y.a,{}),label:"Todo"}),Object(d.jsx)(v.a,{value:"reminders",control:Object(d.jsx)(y.a,{}),label:"Reminder"}),Object(d.jsx)(v.a,{value:"work",control:Object(d.jsx)(y.a,{}),label:"Work"})]})]}),Object(d.jsx)(S.a,{type:"submit",variant:"contained",color:"secondary",startIcon:Object(d.jsx)(C.a,{}),children:"Submit"})]})]})},N=n(60),w=n(128),B=n(127),T=Object(N.a)({palette:{primary:{main:"#fefefe"},secondary:B.a},typography:{fontFamily:"Quicksand",fontWeightLight:400,fontWeightBold:700,fontWeightRegular:500,fontWeightMedium:600}});var D=function(){return Object(d.jsx)(w.a,{theme:T,children:Object(d.jsx)(i.a,{children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",children:Object(d.jsx)(h,{})}),Object(d.jsx)(l.a,{path:"/create",children:Object(d.jsx)(W,{})})]})})})};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(D,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.a882cdf7.chunk.js.map