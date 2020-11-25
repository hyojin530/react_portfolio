(this.webpackJsonpmy_portfolio=this.webpackJsonpmy_portfolio||[]).push([[0],{101:function(e,c,t){},160:function(e,c,t){},161:function(e,c,t){},171:function(e,c,t){},172:function(e,c,t){},276:function(e,c,t){},277:function(e,c,t){},279:function(e,c,t){"use strict";t.r(c);var s=t(3),a=t(1),n=t.n(a),i=t(68),j=t.n(i),r=(t(160),t(101),t(161),t(288)),l=t(289),b=t(290),d=t(291),o=t(305),x=t(292),O=t(293),m=t(294),h=t(295);var u=function(){return Object(s.jsx)("div",{id:"menu",children:Object(s.jsx)(r.a,{children:Object(s.jsx)(l.a,{children:Object(s.jsx)(b.a,{xs:12,sm:12,md:12,children:Object(s.jsxs)(d.a,{light:!0,expand:"md",className:"nav",fixed:"top",children:[Object(s.jsx)(o.a,{navbar:!0,className:"navbar-collapse",children:Object(s.jsxs)(x.a,{navbar:!0,className:"navbar-ul",children:[Object(s.jsx)(O.a,{className:"navItem",children:Object(s.jsx)(m.a,{href:"#aboutme",children:"ABOUT ME"})}),Object(s.jsx)(O.a,{className:"navItem",children:Object(s.jsx)(m.a,{href:"#dev-stacks",children:"STACK"})})]})}),Object(s.jsx)(b.a,{xs:{size:1},sm:{size:1},md:{size:1,offset:1},children:Object(s.jsx)(h.a,{href:"",children:Object(s.jsx)("span",{className:"mainTitle",children:"PORTFOLIO"})})}),Object(s.jsx)(b.a,{xs:3,sm:2,md:{size:1,offset:1}}),Object(s.jsx)(o.a,{navbar:!0,className:"navbar-collapse",children:Object(s.jsxs)(x.a,{navbar:!0,className:"navbar-ul",children:[Object(s.jsx)(O.a,{className:"navItem",children:Object(s.jsx)(m.a,{href:"#projects",children:"PROJECTS"})}),Object(s.jsx)(O.a,{className:"navItem",children:Object(s.jsx)(m.a,{href:"#contact",children:"CONTACT"})})]})})]})})})})})},p=t(152),v=(t(171),["dkakfl56@gmail.com","hyojin530","@hyojinm.530"]);var f=function(){var e=Object(a.useState)(0),c=Object(p.a)(e,2),t=c[0],n=c[1],i=function(e){var c=e.target.value;n(c)};return Object(s.jsxs)("div",{className:"contact",children:[Object(s.jsx)("div",{children:Object(s.jsx)("p",{className:"contact-text",children:"CONTACT"})}),Object(s.jsx)(r.a,{children:Object(s.jsx)(l.a,{children:Object(s.jsxs)(b.a,{xs:12,sm:12,md:12,children:[Object(s.jsx)("button",{className:"gmail-button",value:0,onClick:i}),Object(s.jsx)("button",{className:"github-button",value:1,onClick:i}),Object(s.jsx)("button",{className:"instagram-button",value:2,onClick:i}),Object(s.jsx)("p",{class:"content",children:v[t]})]})})})]})},N=t(297),k=t(303),g=t(299),y=(t(172),t.p+"static/media/webfront.babcdf4f.png"),I=t.p+"static/media/server.11bfb163.png",T=t.p+"static/media/ai.dfa0e768.png",E=t.p+"static/media/android.9e8ea722.png",S=[y,I,T,E],A=[{cate:"Web",contents:["HTML","Javascript","React.js"]},{cate:"Server",contents:["Flask","AWS","Mysql"]},{cate:"Data/AI",contents:["Pandas","Pytorch"]},{cate:"Android",contents:["Android Studio"]}];function C(e){return Object(s.jsx)("div",{className:"bars",style:{width:400,top:-20*e.num,position:"relative",display:"inline-block"},children:Object(s.jsxs)(N.a,{height:80,width:400,children:[Object(s.jsx)(k.a,{dependentAxis:!0,tickValues:[e.loc,95],offsetY:30,tickFormat:function(c){return c===e.loc?e.stack:e.percent},style:{axis:{stroke:"black"}}}),Object(s.jsx)(g.a,{barWidth:6,data:[{y:[e.percent],x:[1]}],domain:{y:[0,100],x:[0,1]},style:{label:{fill:"black"}},horizontal:!0})]})})}function P(e){var c={width:"100%",height:"100px",backgroundImage:"url("+e.img+")",backgroundSize:"60px",backgroundRepeat:"no-repeat",backgroundPosition:"center"};return Object(s.jsxs)("div",{className:"categorybox",children:[Object(s.jsx)("div",{className:"cate-name",children:Object(s.jsx)("p",{className:"cate-nametext",children:e.name})}),Object(s.jsx)("div",{className:"cate-img",style:c}),Object(s.jsx)("div",{children:A.map((function(c){return c.cate===e.name&&Object(s.jsx)("p",{children:c.contents.map((function(e){return Object(s.jsx)("p",{class:"stackvalue",children:e})}))})}))})]})}var M=function(){return Object(s.jsxs)("div",{className:"techstack",children:[Object(s.jsx)("div",{children:Object(s.jsx)("p",{className:"stack-text",children:"TECH STACKS"})}),Object(s.jsx)(r.a,{children:Object(s.jsxs)(l.a,{children:[Object(s.jsxs)(b.a,{children:[Object(s.jsx)("div",{children:Object(s.jsx)("p",{className:"sub-text",children:"OVERVIEW"})}),Object(s.jsxs)("div",{className:"chart",children:[Object(s.jsx)(C,{stack:"Python",percent:"75",loc:8,num:1}),Object(s.jsx)(C,{stack:"Flask",percent:"60",loc:6,num:2}),Object(s.jsx)(C,{stack:"Mysql",percent:"65",loc:7,num:3}),Object(s.jsx)(C,{stack:"Pytorch",percent:"25",loc:9,num:4}),Object(s.jsx)(C,{stack:"Java",percent:"40",loc:5,num:5})]})]}),Object(s.jsxs)(b.a,{children:[Object(s.jsx)("div",{children:Object(s.jsx)("p",{className:"sub-text",children:"EXPERIENCE"})}),Object(s.jsxs)(l.a,{children:[Object(s.jsxs)(b.a,{children:[Object(s.jsx)(P,{name:"Web",img:S[0]}),Object(s.jsx)(P,{name:"Data/AI",img:S[1]})]}),Object(s.jsxs)(b.a,{children:[Object(s.jsx)(P,{name:"Server",img:S[2]}),Object(s.jsx)(P,{name:"Android",img:S[3]})]})]})]})]})})]})},F=(t(276),[{company:"Medici Soft",job:["Intern","IT Business"]},{company:"Prediction",job:["Intern","Backend Developer"]}]);function R(e){return Object(s.jsxs)("div",{className:"intershipdiv",children:[Object(s.jsx)("p",{className:"interntitle",children:e.name}),F.map((function(c){return c.company===e.name&&Object(s.jsx)("div",{children:c.job.map((function(e){return Object(s.jsx)("p",{className:"interntext",children:e})}))})}))]})}var J=function(){return Object(s.jsxs)("div",{className:"about",children:[Object(s.jsx)("div",{className:"about-text",children:Object(s.jsx)("p",{children:"ABOUT ME"})}),Object(s.jsx)(r.a,{children:Object(s.jsxs)(l.a,{children:[Object(s.jsxs)(b.a,{children:[Object(s.jsxs)("div",{className:"aboutblock",children:[Object(s.jsx)("p",{className:"subtitle",children:"FROM"}),Object(s.jsx)("p",{className:"valuetext",children:"JEJU/SEOUL"})]}),Object(s.jsxs)("div",{className:"aboutblock",children:[Object(s.jsx)("p",{className:"subtitle",children:"EDUCATE"}),Object(s.jsx)("p",{className:"valuetext",children:"EWHA WOMANS UNIVERSITY"})]})]}),Object(s.jsxs)(b.a,{children:[Object(s.jsx)("p",{className:"subtitle",children:"INTERNSHIP"}),Object(s.jsx)(R,{name:"Medici Soft"}),Object(s.jsx)(R,{name:"Prediction"})]})]})})]})};t(277);var W=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(u,{}),Object(s.jsx)(J,{}),Object(s.jsx)(M,{}),Object(s.jsx)(f,{})]})},w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,306)).then((function(c){var t=c.getCLS,s=c.getFID,a=c.getFCP,n=c.getLCP,i=c.getTTFB;t(e),s(e),a(e),n(e),i(e)}))};t(278);j.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(W,{})}),document.getElementById("root")),w()}},[[279,1,2]]]);
//# sourceMappingURL=main.821985e2.chunk.js.map