(this.webpackJsonpmy_portfolio=this.webpackJsonpmy_portfolio||[]).push([[0],{107:function(e,t,c){},168:function(e,t,c){},169:function(e,t,c){},179:function(e,t,c){},180:function(e,t,c){},284:function(e,t,c){},285:function(e,t,c){},286:function(e,t,c){},290:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(1),s=c.n(a),i=c(69),r=c.n(i),j=(c(168),c(107),c(169),c(298)),l=c(299),d=c(300),b=c(301),o=c(314),x=c(302),O=c(303),u=c(304),m=c(305);var h=function(){return Object(n.jsx)("div",{id:"menu",children:Object(n.jsx)(j.a,{children:Object(n.jsx)(l.a,{children:Object(n.jsx)(d.a,{xs:12,sm:12,md:12,children:Object(n.jsxs)(b.a,{light:!0,expand:"md",className:"nav",fixed:"top",children:[Object(n.jsx)(o.a,{navbar:!0,className:"navbar-collapse",children:Object(n.jsxs)(x.a,{navbar:!0,className:"navbar-ul",children:[Object(n.jsx)(O.a,{className:"navItem",children:Object(n.jsx)(u.a,{href:"#aboutme",children:"ABOUT ME"})}),Object(n.jsx)(O.a,{className:"navItem",children:Object(n.jsx)(u.a,{href:"#stack",children:"STACK"})})]})}),Object(n.jsx)(d.a,{xs:{size:1},sm:{size:1},md:{size:1,offset:1},children:Object(n.jsx)(m.a,{href:"",children:Object(n.jsx)("span",{className:"mainTitle",children:"PORTFOLIO"})})}),Object(n.jsx)(d.a,{xs:3,sm:2,md:{size:1,offset:1}}),Object(n.jsx)(o.a,{navbar:!0,className:"navbar-collapse",children:Object(n.jsxs)(x.a,{navbar:!0,className:"navbar-ul",children:[Object(n.jsx)(O.a,{className:"navItem",children:Object(n.jsx)(u.a,{href:"#project",children:"PROJECTS"})}),Object(n.jsx)(O.a,{className:"navItem",children:Object(n.jsx)(u.a,{href:"#contact",children:"CONTACT"})})]})})]})})})})})},p=c(78),v=(c(179),["dkakfl56@gmail.com","hyojin530","@hyojinm.530"]);var f=function(){var e=Object(a.useState)(0),t=Object(p.a)(e,2),c=t[0],s=t[1],i=function(e){var t=e.target.value;s(t)};return Object(n.jsxs)("div",{id:"contact",className:"contact",children:[Object(n.jsx)("div",{children:Object(n.jsx)("p",{className:"contact-text",children:"CONTACT"})}),Object(n.jsx)(j.a,{children:Object(n.jsx)(l.a,{children:Object(n.jsxs)(d.a,{xs:12,sm:12,md:12,children:[Object(n.jsx)("button",{className:"gmail-button",value:0,onClick:i}),Object(n.jsx)("button",{className:"github-button",value:1,onClick:i}),Object(n.jsx)("button",{className:"instagram-button",value:2,onClick:i}),Object(n.jsx)("p",{class:"content",children:v[c]})]})})})]})},N=c(309),k=c(312),g=c(308),y=(c(180),c.p+"static/media/webfront.babcdf4f.png"),T=c.p+"static/media/server.11bfb163.png",E=c.p+"static/media/ai.dfa0e768.png",I=c.p+"static/media/android.9e8ea722.png",S=[y,T,E,I],C=[{cate:"Web",contents:["HTML","Javascript","React.js"]},{cate:"Server",contents:["Flask","AWS","Mysql"]},{cate:"Data/AI",contents:["Pandas","Pytorch"]},{cate:"Android",contents:["Android Studio"]}];function A(e){return Object(n.jsx)("div",{className:"bars",style:{width:400,top:-20*e.num,position:"relative",display:"inline-block"},children:Object(n.jsxs)(N.a,{height:80,width:400,children:[Object(n.jsx)(k.a,{dependentAxis:!0,tickValues:[e.loc,95],offsetY:30,tickFormat:function(t){return t===e.loc?e.stack:e.percent},style:{axis:{stroke:"black"}}}),Object(n.jsx)(g.a,{barWidth:6,data:[{y:[e.percent],x:[1]}],domain:{y:[0,100],x:[0,1]},style:{label:{fill:"black"}},horizontal:!0})]})})}function P(e){var t={width:"100%",height:"100px",backgroundImage:"url("+e.img+")",backgroundSize:"60px",backgroundRepeat:"no-repeat",backgroundPosition:"center"};return Object(n.jsxs)("div",{className:"categorybox",children:[Object(n.jsx)("div",{className:"cate-name",children:Object(n.jsx)("p",{className:"cate-nametext",children:e.name})}),Object(n.jsx)("div",{className:"cate-img",style:t}),Object(n.jsx)("div",{children:C.map((function(t){return t.cate===e.name&&Object(n.jsx)("p",{children:t.contents.map((function(e){return Object(n.jsx)("p",{class:"stackvalue",children:e})}))})}))})]})}var w=function(){return Object(n.jsxs)("div",{id:"stack",className:"techstack",children:[Object(n.jsx)("div",{children:Object(n.jsx)("p",{className:"stack-text",children:"TECH STACKS"})}),Object(n.jsx)(j.a,{children:Object(n.jsxs)(l.a,{children:[Object(n.jsxs)(d.a,{children:[Object(n.jsx)("div",{children:Object(n.jsx)("p",{className:"sub-text",children:"OVERVIEW"})}),Object(n.jsxs)("div",{className:"chart",children:[Object(n.jsx)(A,{stack:"Python",percent:"75",loc:8,num:1}),Object(n.jsx)(A,{stack:"Flask",percent:"60",loc:6,num:2}),Object(n.jsx)(A,{stack:"Mysql",percent:"65",loc:7,num:3}),Object(n.jsx)(A,{stack:"Pytorch",percent:"25",loc:9,num:4}),Object(n.jsx)(A,{stack:"Java",percent:"40",loc:5,num:5})]})]}),Object(n.jsxs)(d.a,{children:[Object(n.jsx)("div",{children:Object(n.jsx)("p",{className:"sub-text",children:"EXPERIENCE"})}),Object(n.jsxs)(l.a,{children:[Object(n.jsxs)(d.a,{children:[Object(n.jsx)(P,{name:"Web",img:S[0]}),Object(n.jsx)(P,{name:"Data/AI",img:S[1]})]}),Object(n.jsxs)(d.a,{children:[Object(n.jsx)(P,{name:"Server",img:S[2]}),Object(n.jsx)(P,{name:"Android",img:S[3]})]})]})]})]})})]})},M=(c(284),[{company:"Medici Soft",job:["Intern","IT Business"]},{company:"Prediction",job:["Intern","Backend Developer"]}]);function R(e){return Object(n.jsxs)("div",{className:"intershipdiv",children:[Object(n.jsx)("p",{className:"interntitle",children:e.name}),M.map((function(t){return t.company===e.name&&Object(n.jsx)("div",{children:t.job.map((function(e){return Object(n.jsx)("p",{className:"interntext",children:e})}))})}))]})}var z=function(){return Object(n.jsxs)("div",{id:"aboutme",className:"about",children:[Object(n.jsx)("div",{className:"about-text",children:Object(n.jsx)("p",{children:"ABOUT ME"})}),Object(n.jsx)(j.a,{children:Object(n.jsxs)(l.a,{children:[Object(n.jsxs)(d.a,{children:[Object(n.jsxs)("div",{className:"aboutblock",children:[Object(n.jsx)("p",{className:"subtitle",children:"FROM"}),Object(n.jsx)("p",{className:"valuetext",children:"JEJU/SEOUL"})]}),Object(n.jsxs)("div",{className:"aboutblock",children:[Object(n.jsx)("p",{className:"subtitle",children:"EDUCATE"}),Object(n.jsx)("p",{className:"valuetext",children:"EWHA WOMANS UNIVERSITY"})]})]}),Object(n.jsxs)(d.a,{children:[Object(n.jsx)("p",{className:"subtitle",children:"INTERNSHIP"}),Object(n.jsxs)(l.a,{children:[Object(n.jsx)(d.a,{children:Object(n.jsx)(R,{name:"Medici Soft"})}),Object(n.jsx)(d.a,{children:Object(n.jsx)(R,{name:"Prediction"})})]})]})]})})]})};c(285);var F=c(81),J=c(57);c(286);function W(){var e=Object(F.a)(["\n  width: 100%;\n  display: flex; //\uc774\ubbf8\uc9c0\ub4e4\uc744 \uac00\ub85c\ub85c \ub098\uc5f4\ud569\ub2c8\ub2e4.\n"]);return W=function(){return e},e}function B(){var e=Object(F.a)(["\n  all: unset;\n  border: 1px solid #315200;\n  padding: 0.5em 2em;\n  color: #315200;\n  border-radius: 10px;\n  &:hover {\n    transition: all 0.3s ease-in-out;\n    background-color: #315200;\n    color: #fff;\n  }\n"]);return B=function(){return e},e}function U(){var e=Object(F.a)(["\n  width: 60%;\n  overflow: hidden; // \uc120\uc744 \ub118\uc5b4\uac04 \uc774\ubbf8\uc9c0\ub4e4\uc740 \ubcf4\uc774\uc9c0 \uc54a\ub3c4\ub85d \ucc98\ub9ac\ud569\ub2c8\ub2e4.\n  margin: auto;\n"]);return U=function(){return e},e}var D=[{name:"re-fit",description:"shop platform"},{name:"auto-summarization",description:"auto summarization web service for online news"},{name:"bbi-Talk",description:"android messenger application for not using "}];function L(e){return Object(n.jsxs)("div",{className:"slide-div",children:[Object(n.jsx)("div",{children:e.name}),D.map((function(t){return t.name===e.name&&Object(n.jsx)("div",{children:t.description})}))]})}var H=J.a.div(U()),V=J.a.button(B()),q=J.a.div(W());function K(){var e=Object(a.useState)(0),t=Object(p.a)(e,2),c=t[0],s=t[1],i=Object(a.useRef)(null);return Object(a.useEffect)((function(){i.current.style.transition="all 0.5s ease-in-out",i.current.style.transform="translateX(-".concat(c,"00%)")}),[c]),Object(n.jsxs)("div",{id:"project",className:"project",children:[Object(n.jsx)("div",{className:"project-title",children:"Project"}),Object(n.jsx)(j.a,{children:Object(n.jsx)(l.a,{children:Object(n.jsx)(d.a,{children:Object(n.jsxs)(H,{children:[c,Object(n.jsxs)(q,{ref:i,children:[Object(n.jsx)(L,{name:"re-fit"}),Object(n.jsx)(L,{name:"auto-summarization"}),Object(n.jsx)(L,{name:"bbi-Talk"})]}),Object(n.jsx)(V,{onClick:function(){s(0===c?2:c-1)},children:"Previous"}),Object(n.jsx)(V,{onClick:function(){s(c>=2?0:c+1)},children:"Next"})]})})})})]})}var X=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(h,{}),Object(n.jsx)(z,{}),Object(n.jsx)(w,{}),Object(n.jsx)(K,{}),Object(n.jsx)(f,{})]})},Y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,316)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};c(289);r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(X,{})}),document.getElementById("root")),Y()}},[[290,1,2]]]);
//# sourceMappingURL=main.393bbc2a.chunk.js.map