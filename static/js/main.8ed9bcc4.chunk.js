(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,t,n){e.exports=n(79)},71:function(e,t){},74:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(33),l=n.n(a),i=n(34),c=n.n(i),s=(n(74),n(5)),m=n(9),u=n(1),d={display:"flex",justifyContent:"center"},f={fill:"#e6e6e6",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"6px",stroke:"white",cursor:"pointer"},h={fontWeight:"bold",fontSize:"32px",dominantBaseline:"middle",textAnchor:"middle",userSelect:"none",cursor:"pointer"},y={width:"75%",maxWidth:"400px",margin:"1em auto 2em"},p=function(e){var t=e.centerLetter,n=void 0===t?"":t,r=e.otherLetters,a=void 0===r?[]:r,l=e.addLetter;return n=n.toUpperCase(),a=a.map((function(e){return e.toUpperCase()})),o.a.createElement("div",{style:d},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 250 259.8",style:y},o.a.createElement("defs",null,o.a.createElement("symbol",{id:"hexagon"},o.a.createElement("polygon",{points:"25 0, 75 0, 100 43.3, 75 86.6, 25 86.6, 0 43.3"})),o.a.createElement("symbol",{id:"top"},o.a.createElement("use",{href:"#hexagon",style:f}),o.a.createElement("text",{x:"50%",y:"55%",style:h},a[0])),o.a.createElement("symbol",{id:"top-left"},o.a.createElement("use",{href:"#hexagon",style:f}),o.a.createElement("text",{x:"50%",y:"55%",style:h},a[1])),o.a.createElement("symbol",{id:"top-right"},o.a.createElement("use",{href:"#hexagon",style:f}),o.a.createElement("text",{x:"50%",y:"55%",style:h},a[2])),o.a.createElement("symbol",{id:"bottom-left"},o.a.createElement("use",{href:"#hexagon",style:f}),o.a.createElement("text",{x:"50%",y:"55%",style:h},a[3])),o.a.createElement("symbol",{id:"bottom-right"},o.a.createElement("use",{href:"#hexagon",style:f}),o.a.createElement("text",{x:"50%",y:"55%",style:h},a[4])),o.a.createElement("symbol",{id:"bottom"},o.a.createElement("use",{href:"#hexagon",style:f}),o.a.createElement("text",{x:"50%",y:"55%",style:h},a[5])),o.a.createElement("symbol",{id:"center"},o.a.createElement("use",{href:"#hexagon",style:Object(s.a)({},f,{fill:"#facd04"})}),o.a.createElement("text",{x:"50%",y:"55%",style:h},n))),o.a.createElement("use",{href:"#top",onClick:function(){return l(a[0])},x:"75",y:"0",width:"100",height:"86.6"}),o.a.createElement("use",{href:"#top-left",onClick:function(){return l(a[1])},x:"0",y:"43.3",width:"100",height:"86.6"}),o.a.createElement("use",{href:"#top-right",onClick:function(){return l(a[2])},x:"0",y:"129.9",width:"100",height:"86.6"}),o.a.createElement("use",{href:"#bottom-left",onClick:function(){return l(a[3])},x:"150",y:"43.3",width:"100",height:"86.6"}),o.a.createElement("use",{href:"#bottom-right",onClick:function(){return l(a[4])},x:"150",y:"129.9",width:"100",height:"86.6"}),o.a.createElement("use",{href:"#bottom",onClick:function(){return l(a[5])},x:"75",y:"173.2",width:"100",height:"86.6"}),o.a.createElement("use",{href:"#center",onClick:function(){return l(n)},x:"75",y:"86.6",width:"100",height:"86.6"})))},g={display:"flex",justifyContent:"center"},b={border:"1px solid #e6e6e6",borderRadius:"2em",padding:".5em 1em",color:"black",margin:"1em",background:"transparent",fontSize:"1em",cursor:"pointer"},E={height:"1.5em",padding:".5em 0em .25em"},x=function(e){var t=e.shuffleLetters,n=e.deleteLetter,r=e.submitWord;return o.a.createElement("div",{style:g},o.a.createElement("button",{style:b,onClick:n},"Delete"),o.a.createElement("button",{style:b,onClick:function(){return t()}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 100 100",style:E},o.a.createElement("circle",{cx:"50",cy:"50",r:"47",stroke:"black",strokeWidth:"6",fill:"white"}),o.a.createElement("line",{x1:"0",y1:"0",x2:"100",y2:"100",strokeWidth:"20",stroke:"white"}),o.a.createElement("polygon",{points:"18,0 18,20 38,20",fill:"black"}),o.a.createElement("polygon",{points:"82,100 82,80 62,80",fill:"black"}))),o.a.createElement("button",{style:b,onClick:r},"Enter"))},v=n(35),w=n(36),k=n.n(w),j=function(e){var t,n=e.foundWords,r=void 0===n?[]:n,a=e.answerLengths,l=void 0===a?{}:a,i=Math.max.apply(Math,Object(m.a)(Object.keys(l))),c={},s=Object(v.a)(r);try{for(s.s();!(t=s.n()).done;){var u=t.value.word.length.toString();c[u]=c[u]?c[u]+1:1}}catch(b){s.e(b)}finally{s.f()}for(var d=[],f=4;f<=i;f++)d.push(f);var h=d.map((function(e){return l[e]||0})),y=d.map((function(e){return c[e]||0})),p=h.map((function(e,t){return e-y[t]})),g={labels:d,series:[y,p]};return o.a.createElement("div",{style:{textAlign:"center",padding:"2em 1.5em 0em 0em"}},o.a.createElement(k.a,{data:g,options:{low:0,stackBars:!0,onlyInteger:!0},type:"Bar"}))},O={display:"flex",flexDirection:"column",border:"1px solid #e6e6e6",borderRadius:".5em",padding:"1em 1.5em",margin:"1em",flex:"1"},L={display:"flex",flexDirection:"row",flexWrap:"wrap"},C={margin:".25em 0",borderBottom:"1px solid #e6e6e6",width:"50%",minWidth:"8em"},S=function(e){var t=e.foundWords,n=void 0===t?[]:t,r=e.numOfAnswers,a=void 0===r?0:r,l=e.answerLengths;return n=n.sort((function(e,t){return e.word>t.word})),o.a.createElement("div",{style:O},o.a.createElement("div",{style:{margin:"0 0 1em"}},"You have found ",n.length," out of ",a," words"),o.a.createElement("div",{style:L},n.map((function(e){return o.a.createElement("div",{style:C,key:e.word},o.a.createElement("span",{style:{backgroundColor:7===new Set(e.word.toLowerCase().split("")).size?"#facd04":"transparent"}},"".concat(e.word.charAt(0).toUpperCase()).concat(e.word.substring(1,e.word.length).toLowerCase())),o.a.createElement("span",{style:{fontSize:".8em",color:"rgba(0, 0, 0, 0.4)",fontStyle:"italic"}}," by ",e.name))}))),o.a.createElement(j,{foundWords:n,answerLengths:l}))},W={display:"flex",fontSize:"2.25em",fontWeight:"bold",justifyContent:"center",margin:".5em",minHeight:"1em"},A=function(e){var t=e.centerLetter,n=void 0===t?"":t,r=e.otherLetters,a=void 0===r?"":r,l=e.playerInput,i=void 0===l?"":l;return o.a.createElement("div",{style:W},i.split("").map((function(e){return o.a.createElement("span",{key:Math.random(),style:e===n?{color:"#facd04"}:a.includes(e)?{color:"black"}:{color:"#e6e6e6"}},e.toUpperCase())})),o.a.createElement("span",{style:{color:"#facd04",fontWeight:"normal",visibility:"hidden"}},"|"))},I={display:"flex",flexWrap:"wrap",minHeight:"100vh"},B={justifyContent:"center",maxWidth:"300px",padding:"1em",margin:"1em auto",flexWrap:"wrap"},M={flex:"1 1 0",minWidth:"300px",display:"flex",flexDirection:"column"},z={color:"salmon",padding:".25em",textAlign:"center",margin:".5em",borderTop:"1px solid salmon",fontWeight:"bold"},D=function(e){var t=e.socket,n=Object(r.useState)([]),a=Object(u.a)(n,2),l=a[0],i=a[1],c=Object(r.useState)([]),d=Object(u.a)(c,2),f=d[0],h=d[1],y=Object(r.useState)(""),g=Object(u.a)(y,2),b=g[0],E=g[1],v=Object(r.useState)(0),w=Object(u.a)(v,2),k=w[0],j=w[1],O=Object(r.useState)("."),L=Object(u.a)(O,2),C=L[0],W=L[1],D=Object(r.useState)(""),T=Object(u.a)(D,2),R=T[0],U=T[1],F=Object(r.useState)(localStorage.getItem("playerName")||""),N=Object(u.a)(F,2),H=N[0],J=N[1],q=Object(r.useState)(""),Y=Object(u.a)(q,2),G=Y[0],K=Y[1],P=Object(r.useState)({}),Q=Object(u.a)(P,2),V=Q[0],X=Q[1];Object(r.useEffect)((function(){t.emit("initRequest",{roomId:1}),t.on("initResponse",(function(e){console.log(e),i(e.foundWords),h(e.letters),E(e.centerLetter),j(e.numOfAnswers),X(e.answerLengths)})),t.on("updateFoundWords",(function(e){console.log("someone found a word"),console.log(e),i(e.foundWords)})),t.on("alreadyFound",(function(e){console.log("already found "+e),W("Already found by ".concat(e.name)),setTimeout((function(){return W(".")}),3e3)})),t.on("incorrectLetters",(function(e){console.log("incorrect letters: "+e),W("Incorrect letters"),setTimeout((function(){return W(".")}),3e3)})),t.on("noCenterLetter",(function(e){console.log("no center letter: "+e),W("Missing middle letter"),setTimeout((function(){return W(".")}),3e3)})),t.on("notInList",(function(e){console.log("not in list: "+e),W("Not in word list"),setTimeout((function(){return W(".")}),3e3)}))}),[]);return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{style:Object(s.a)({},B,{display:H?"none":"flex"}),onSubmit:function(e){e.preventDefault(),J(G),localStorage.setItem("playerName",G)}},o.a.createElement("input",{type:"text",placeholder:"Enter your name...",value:G,onChange:function(e){return K(e.target.value)},style:{flex:"1 0 100%",margin:".5em",border:"none",borderBottom:"1px solid black"}}),o.a.createElement("button",{style:{flex:"1 0 100%",margin:".5em"}},"Enter")),o.a.createElement("div",{style:{textAlign:"center",display:f.length?"none":"block"}},o.a.createElement("div",null,"Loading..."),o.a.createElement("br",null),o.a.createElement("p",{style:{fontSize:".75em"}},"...if you have the time to read this, there is probably something wrong.")),o.a.createElement("div",{style:Object(s.a)({},I,{display:H&&f.length?"flex":"none"})},o.a.createElement("div",{style:M},o.a.createElement("div",{style:Object(s.a)({},z,{visibility:"."!==C?"visible":"hidden"})},C),o.a.createElement(A,{playerInput:R,centerLetter:b,otherLetters:f.filter((function(e){return e!==b}))}),o.a.createElement(p,{centerLetter:b,otherLetters:f.filter((function(e){return e!==b})),addLetter:function(e){U(R+e.toLowerCase())}}),o.a.createElement(x,{shuffleLetters:function(){var e=f.filter((function(e){return e!==b}));for(var t in e){var n=Math.floor(Math.random()*t),r=e[t];e[t]=e[n],e[n]=r}h([b].concat(Object(m.a)(e)))},deleteLetter:function(){U(R.substring(0,R.length-1))},submitWord:function(){R&&(t.emit("submit",{word:R,name:H,roomId:1}),console.log("submitting word: "+R),U(""))}})),o.a.createElement("div",{style:M},o.a.createElement(S,{foundWords:l,numOfAnswers:k,answerLengths:V}),o.a.createElement("p",{onClick:function(){return J()},style:{textAlign:"right",color:"rgba(0,0,0,.4)",margin:"0 1em .25em",textDecoration:"underline",fontStyle:"italic",cursor:"pointer"}},"not ",H,"?"))))},T=c()("https://spelling-bee-server.herokuapp.com");l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(D,{socket:T})),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.8ed9bcc4.chunk.js.map