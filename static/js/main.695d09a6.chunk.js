(this["webpackJsonpreact-material-notes"]=this["webpackJsonpreact-material-notes"]||[]).push([[0],{79:function(e,t,n){},80:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(11),o=n.n(r),i=(n(79),n(80),n(62)),l=n(10),s=n(49),j=n.n(s),u=n(57),d=n(26),b=n(128),h=n(129),O=n(120),f=n(124),x=n(125),m=n(127),p=n(36),g=n(126),v=n(6),y=function(e){var t=e.note,n=e.handleDelete;return Object(v.jsx)("div",{children:Object(v.jsxs)(O.a,{elevation:1,children:[Object(v.jsx)(f.a,{action:Object(v.jsx)(x.a,{onClick:function(){return n(t.id)},children:Object(v.jsx)(g.a,{})}),title:t.title,subheader:t.category}),Object(v.jsx)(m.a,{children:Object(v.jsx)(p.a,{variant:"body2",color:"textSecondary",children:t.details})})]})})},S=function(e){e.inMemoryNotes;var t=Object(a.useState)([]),n=Object(d.a)(t,2),c=n[0],r=n[1];Object(a.useEffect)((function(){fetch("http://localhost:3001/notes").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]);var o=function(){var e=Object(u.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3001/notes"+t,{method:"DELETE"});case 2:n=c.filter((function(e){return e.id!==t})),r(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)(b.a,{children:Object(v.jsx)(h.a,{container:!0,spacing:3,children:c.map((function(e){return Object(v.jsx)(h.a,{item:!0,xs:12,md:6,lg:4,children:Object(v.jsx)(y,{note:e,handleDelete:o})},e.id)}))})})},C=n(130),k=n(137),N=n(140),w=n(131),W=n(139),D=n(132),B=n(138),E=n(133),M=n(134),T=Object(C.a)({btn:{fontSize:90,backgroundColor:"violet","&:hover":{backgroundColor:"blue"}},title:{textDecoration:"underline",marginBottom:20},field:{marginTop:20,marginBottom:20,display:"block"}}),J=function(e){e.handleCreate;var t=T(),n=Object(a.useState)(""),c=Object(d.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)(""),s=Object(d.a)(i,2),j=s[0],u=s[1],h=Object(a.useState)(!1),O=Object(d.a)(h,2),f=O[0],x=O[1],m=Object(a.useState)(!1),g=Object(d.a)(m,2),y=g[0],S=g[1],C=Object(a.useState)("todos"),J=Object(d.a)(C,2),q=J[0],I=J[1],L=Object(l.f)();return Object(v.jsxs)(b.a,{children:[Object(v.jsx)(p.a,{variant:"h6",color:"textSecondary",component:"h2",gutterBottom:!0,children:"Create a new Note"}),Object(v.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),x(!1),S(!1),r||x(!0),j||S(!0),r&&j&&fetch("http://localhost:3001/notes",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({title:r,details:j,category:q})}).then((function(){return L.push("/")}))},children:[Object(v.jsx)(k.a,{onChange:function(e){return o(e.target.value)},label:"Title",variant:"outlined",required:!0,fullWidth:!0,color:"secondary",className:t.field,error:f}),Object(v.jsx)(k.a,{onChange:function(e){return u(e.target.value)},label:"Details",variant:"outlined",required:!0,fullWidth:!0,multiline:!0,rows:"4",color:"secondary",className:t.field,error:y}),Object(v.jsxs)(N.a,{className:t.field,children:[Object(v.jsx)(w.a,{children:"Notes Category"}),Object(v.jsxs)(W.a,{value:q,onChange:function(e){return I(e.target.value)},children:[Object(v.jsx)(D.a,{value:"money",control:Object(v.jsx)(B.a,{}),label:"Money"}),Object(v.jsx)(D.a,{value:"todos",control:Object(v.jsx)(B.a,{}),label:"Todo"}),Object(v.jsx)(D.a,{value:"reminders",control:Object(v.jsx)(B.a,{}),label:"Reminder"}),Object(v.jsx)(D.a,{value:"work",control:Object(v.jsx)(B.a,{}),label:"Work"})]})]}),Object(v.jsx)(E.a,{type:"submit",variant:"contained",color:"secondary",startIcon:Object(v.jsx)(M.a,{}),children:"Submit"})]})]})},q=n(63),I=n(136),L=n(135),R=Object(q.a)({palette:{primary:{main:"#fefefe"},secondary:L.a},typography:{fontFamily:"Quicksand",fontWeightLight:400,fontWeightBold:700,fontWeightRegular:500,fontWeightMedium:600}}),z=[];var F=function(){return Object(v.jsx)(I.a,{theme:R,children:Object(v.jsx)(i.a,{children:Object(v.jsxs)(l.c,{children:[Object(v.jsx)(l.a,{exact:!0,path:"/",children:Object(v.jsx)(S,{inMemoryNotes:z})}),Object(v.jsx)(l.a,{path:"/create",children:Object(v.jsx)(J,{handleCreate:function(e,t,n){z.push({title:e,details:t,category:n,id:z.length})}})})]})})})};o.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(F,{})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.695d09a6.chunk.js.map