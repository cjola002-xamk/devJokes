(this["webpackJsonpsoveltava-harjoitustyo-cjola002-xamk"]=this["webpackJsonpsoveltava-harjoitustyo-cjola002-xamk"]||[]).push([[0],{251:function(e,a,t){},253:function(e,a,t){},260:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t(13),n=t.n(c),s=(t(251),t(142)),j=t.n(s),i=t(225),o=t(52),l=(t(253),t(55)),d=t(18),b=t(298),h=t(283),O=t(265),v=t(297),x=t(287),u=t(288),k=t(289),p=t(226),f=t.n(p),m=t(7);var y=function(e){return e.jokeArray.length>0?Object(m.jsx)("div",{className:"savedJokes",children:Object(m.jsxs)("div",{className:"savedJokesContainer",children:[Object(m.jsx)(h.a,{variant:"h4",className:"savedJokesHeader",children:"Saved jokes"}),e.jokeArray.map((function(e,a){return Object(m.jsxs)("div",{className:"jokeCardWrapper",children:[Object(m.jsx)(x.a,{className:"jokeCard",children:Object(m.jsxs)(u.a,{children:[Object(m.jsx)(h.a,{variant:"h5",children:e.setup}),Object(m.jsx)(h.a,{variant:"h5",children:e.delivery})]})}),Object(m.jsxs)(k.a,{component:l.b,to:"/deletejoke/".concat(e.id),variant:"contained",children:[Object(m.jsx)(f.a,{}),Object(m.jsx)(h.a,{variant:"h6",children:"DeleteJoke"})]})]},a)}))]})}):Object(m.jsx)("div",{className:"savedJokes",children:Object(m.jsxs)("div",{className:"savedJokesContainer",children:[Object(m.jsx)(h.a,{variant:"h4",className:"savedJokesHeader",children:"Saved jokes"}),Object(m.jsx)(h.a,{variant:"h5",children:"There is no saved jokes"})]})})},g=t(74),C=t(104),N=t.n(C),J=t(227),A=t.n(J);var S=function(e){return console.log(e.jokeData),Object(m.jsx)("div",{className:"jokesDiv",children:Object(m.jsxs)("div",{className:"jokeCards",children:[Object(m.jsx)(h.a,{variant:"h4",children:"Generate a joke"}),Object(m.jsx)("div",{className:"jokeCardWrapper",children:Object(m.jsx)(x.a,{className:"jokeCard",children:Object(m.jsxs)(u.a,{children:[Object(m.jsx)(h.a,{variant:"h5",children:e.jokeData.setup}),Object(m.jsx)(h.a,{variant:"h5",children:e.jokeData.delivery})]})})}),Object(m.jsxs)(k.a,{onClick:function(){e.getJoke()},variant:"contained",children:[Object(m.jsx)(A.a,{}),Object(m.jsx)(h.a,{variant:"h6",children:"Generate New"})]}),Object(m.jsxs)(k.a,{"aria-label":"save",onClick:function(){e.setJokeArray([].concat(Object(g.a)(e.jokeArray),[e.jokeData]))},children:[Object(m.jsx)(N.a,{}),Object(m.jsx)(h.a,{variant:"h6",children:"Save"})]})]})})},D=t(290),w=t(291),T=t(37),W=t(267),F=t(294),I=t(295),B=t(228),E=t.n(B),G=t(229),L=t.n(G),H=t(231),P=t.n(H),q=t(230),z=t.n(q);var K=function(){var e=Object(r.useState)(!1),a=Object(o.a)(e,2),t=a[0],c=a[1];return Object(m.jsx)(D.a,{position:"static",className:"topBar",children:Object(m.jsxs)(w.a,{variant:"dense",children:[Object(m.jsx)(k.a,{edge:"start",className:"menuBtn",color:"inherit","aria-label":"menu",onClick:function(){c(!0)},children:Object(m.jsx)(E.a,{})}),Object(m.jsx)(T.a,{open:t,onClose:function(){c(!1)},children:Object(m.jsxs)(W.a,{onClick:function(){c(!1)},children:[Object(m.jsx)(F.a,{button:!0,component:l.b,to:"/",children:Object(m.jsxs)(I.a,{children:[Object(m.jsx)(L.a,{}),Object(m.jsx)(h.a,{variant:"h6",children:"Generate a joke"})]})}),Object(m.jsx)(F.a,{button:!0,component:l.b,to:"/addJoke",children:Object(m.jsxs)(I.a,{children:[Object(m.jsx)(z.a,{}),Object(m.jsx)(h.a,{variant:"h6",children:"Add a joke"})]})}),Object(m.jsx)(F.a,{button:!0,component:l.b,to:"/savedjokes",children:Object(m.jsxs)(I.a,{children:[Object(m.jsx)(P.a,{}),Object(m.jsx)(h.a,{variant:"h6",children:"Saved jokes"})]})})]})}),Object(m.jsx)(h.a,{variant:"h6",color:"inherit",children:"DevJokes"})]})})},M=t(232),Q=t.n(M),R=t(106),U=t.n(R);var V=function(e){var a=Object(d.e)(),t=Object(d.f)().id,r=e.jokeArray.filter((function(e){return e.id===t}))[0];return Object(m.jsx)("div",{className:"jokesDiv",children:Object(m.jsxs)("div",{className:"jokeCardWrapper",children:[Object(m.jsxs)("div",{className:"targetJoke",children:[Object(m.jsx)(h.a,{variant:"h3",children:"Delete this joke?"}),Object(m.jsx)(x.a,{className:"jokeCard",children:Object(m.jsxs)(u.a,{children:[Object(m.jsx)(h.a,{variant:"h5",children:r.setup}),Object(m.jsx)(h.a,{variant:"h5",children:r.delivery})]})})]}),Object(m.jsxs)(k.a,{onClick:function(){!function(){var r=e.jokeArray.filter((function(e){return e.id!==t}));e.setJokeArray(Object(g.a)(r)),a.push("/savedjokes")}()},variant:"contained",children:[Object(m.jsx)(Q.a,{}),Object(m.jsx)(h.a,{variant:"h6",children:"Delete"})]}),Object(m.jsxs)(k.a,{onClick:function(){a.push("/savedjokes")},variant:"contained",children:[Object(m.jsx)(U.a,{}),Object(m.jsx)(h.a,{variant:"h6",children:"Cancel"})]})]})})},X=t(296);var Y=function(e){var a=Object(d.e)(),t=Object(r.useState)(""),c=Object(o.a)(t,2),n=c[0],s=c[1],j=Object(r.useState)({color:"green",text:""}),i=Object(o.a)(j,2),l=i[0],O=i[1];return Object(m.jsx)("div",{className:"jokesDiv",children:Object(m.jsxs)("div",{className:"jokeCards",children:[Object(m.jsx)(h.a,{variant:"h4",children:"Write your own joke"}),Object(m.jsx)("div",{className:"jokeCardWrapper",children:Object(m.jsx)(x.a,{className:"jokeCard",children:Object(m.jsxs)(u.a,{children:[Object(m.jsx)(h.a,{variant:"h5"}),Object(m.jsx)(X.a,{label:"Write your joke here",multiline:!0,rows:4,variant:"outlined",fullWidth:!0,onChange:function(e){s({id:Object(b.a)(),error:!1,setup:"",delivery:e.target.value})}})]})})}),Object(m.jsxs)(k.a,{"aria-label":"save",onClick:function(){e.jokeArray.some((function(e){return e.delivery===n.delivery}))?O({color:"red",text:"This masterpiece is already saved"}):(e.setJokeArray([].concat(Object(g.a)(e.jokeArray),[n])),O({color:"green",text:"Saved"})),console.log(n.delivery)},children:[Object(m.jsx)(N.a,{}),Object(m.jsx)(h.a,{variant:"h6",children:"Save"})]}),Object(m.jsxs)(k.a,{onClick:function(){a.push("/")},variant:"contained",children:[Object(m.jsx)(U.a,{}),Object(m.jsx)(h.a,{variant:"h6",children:"Cancel"})]}),Object(m.jsx)(h.a,{variant:"h6",style:{color:l.color},children:l.text})]})})},Z=t(56).Typography;var $=function(){return Object(m.jsx)("div",{className:"botFooter",color:"inheritance",children:Object(m.jsx)(Z,{variant:"h6",children:"2021 \xa9 J.L"})})};var _=function(){var e=Object(r.useState)({error:!1,setup:"",delivery:""}),a=Object(o.a)(e,2),t=a[0],c=a[1],n=Object(r.useState)([]),s=Object(o.a)(n,2),x=s[0],u=s[1],k=Object(r.useState)(!1),p=Object(o.a)(k,2),f=p[0],g=p[1],C=function(){var e=Object(i.a)(j.a.mark((function e(){var a,t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://v2.jokeapi.dev/joke/programming");case 3:return a=e.sent,e.next=6,a.json();case 6:"single"===(t=e.sent).type?c({id:Object(b.a)(),error:!1,setup:"",delivery:t.joke}):c({id:Object(b.a)(),error:!1,setup:t.setup,delivery:t.delivery}),g(!0),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),c({id:"",error:!0,setup:"",delivery:""}),console.log("error");case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){localStorage.getItem("jokes")?u(JSON.parse(localStorage.getItem("jokes"))):u([{id:Object(b.a)(),error:!1,setup:"T\xe4m\xe4 on 2 vaiheinen vitsi",delivery:"t\xe4ss\xe4 vastaus"},{id:Object(b.a)(),error:!1,setup:"",delivery:"T\xe4m\xe4 on 1-vaiheinen vitsi"}])}),[]),Object(r.useEffect)((function(){C()}),[x]),Object(r.useEffect)((function(){localStorage.setItem("jokes",JSON.stringify(x))}),[x]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(l.a,{basename:"/devjokes",children:[Object(m.jsx)(K,{}),Object(m.jsx)(d.a,{path:"/",exact:!0,children:t.error?Object(m.jsx)(h.a,{variant:"h4",color:"error",children:"Could not contact server"}):f?Object(m.jsx)(S,{jokeData:t,getJoke:C,setJokeArray:u,jokeArray:x}):Object(m.jsx)(O.a,{open:!0,children:Object(m.jsx)(v.a,{color:"inherit"})})}),Object(m.jsx)(d.a,{path:"/savedjokes",children:Object(m.jsx)(y,{setJokeArray:u,jokeArray:x})}),Object(m.jsx)(d.a,{path:"/deletejoke/:id",children:Object(m.jsx)(V,{jokeArray:x,setJokeArray:u})}),Object(m.jsx)(d.a,{path:"/addjoke",children:Object(m.jsx)(Y,{setJokeData:c,setJokeArray:u,jokeArray:x})}),Object(m.jsx)($,{})]})})},ee=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,301)).then((function(a){var t=a.getCLS,r=a.getFID,c=a.getFCP,n=a.getLCP,s=a.getTTFB;t(e),r(e),c(e),n(e),s(e)}))};n.a.render(Object(m.jsx)(_,{}),document.getElementById("root")),ee()}},[[260,1,2]]]);
//# sourceMappingURL=main.36c96ce5.chunk.js.map