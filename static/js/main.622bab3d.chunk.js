(this.webpackJsonpsweetreact=this.webpackJsonpsweetreact||[]).push([[0],{331:function(e,t,n){e.exports=n(559)},528:function(e,t,n){},529:function(e,t,n){},536:function(e,t){},537:function(e,t){},545:function(e,t){},559:function(e,t,n){"use strict";n.r(t);n(332),n(336),n(337),n(338),n(339),n(340),n(341),n(342),n(343),n(344),n(345),n(346),n(347),n(348),n(349),n(350),n(351),n(352),n(353),n(354),n(355),n(356),n(357),n(359),n(360),n(171),n(361),n(362),n(363),n(364),n(365),n(366),n(367),n(368),n(369),n(370),n(371),n(372),n(374),n(375),n(376),n(377),n(378),n(379),n(380),n(381),n(382),n(383),n(384),n(386),n(387),n(389),n(390),n(391),n(392),n(393),n(394),n(395),n(396),n(397),n(398),n(399),n(400),n(401),n(402),n(403),n(404),n(405),n(406),n(407),n(408),n(409),n(410),n(411),n(412),n(413),n(414),n(415),n(416),n(417),n(418),n(419),n(420),n(421),n(422),n(424),n(425),n(426),n(427),n(434),n(435),n(436),n(438),n(439),n(440),n(441),n(442),n(443),n(444),n(445),n(446),n(447),n(448),n(275),n(451),n(452),n(453),n(454),n(455),n(456),n(457),n(278),n(458),n(459),n(460),n(461),n(462),n(463),n(465),n(467),n(468),n(469),n(470),n(471),n(472),n(477),n(478),n(479),n(480),n(481),n(482),n(483),n(484),n(485),n(486),n(487),n(488),n(491),n(492),n(493),n(494),n(495),n(496),n(497),n(498),n(499),n(500),n(501),n(502),n(503),n(504),n(505),n(506),n(507),n(508),n(509),n(510),n(511),n(512),n(514),n(515),n(516),n(517),n(519),n(289);var a=n(11),i=n.n(a),o=n(235),r=n.n(o),c=n(161),l=n(567),s=n(294),u=n(295),d=n(565),f=n(136),h=n.n(f);n(524),n(525),c.a.use(d.a).use(s.a).use(u.a).init({fallbackLng:"en",ns:["translations"],defaultNS:"translations",load:"unspecific",debug:!1,saveMissing:!0,interpolation:{escapeValue:!1,formatSeparator:",",format:function(e,t){return e instanceof Date?"relative"===t?h()(e).fromNow():h()(e).format(t):e.toString()}},returnObjects:!0,react:{useSuspense:!0,defaultTransParent:"span"}}),c.a.on("languageChanged",(function(e){h.a.locale(e)})),c.a.on("missingKey",(function(e,t,n){var a=new Error("Missing translation key in ".concat(e,": ").concat(n));l.a(a)}));c.a,n(291),n(526),n(527),n(528),n(529),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=n(6),y=n(15),m=n(44),p=n(43),g=n(237),x=n(52),v=n(324),w=n(79),k=n.n(w),E=n(197),j=n.n(E),O=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null);return i.a.createElement("div",null,i.a.createElement(j.a,{ref:e,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:9,width:720,height:500}}),i.a.createElement("canvas",{ref:t,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:9,width:720,height:500}}))},S=n(89),N=n(33),M=n(8),C=n.n(M),z=n(12),A=n(7),T=n(203),P=n(239),D=(n(0),n(558),.4),B=.6,W=.4,R=.6,F=.01,L=.01,I=.01,V=.01,q=!0,J=1,H=1,K=function(e){var t=e.x1,n=e.y1,a=e.x2-t,i=e.y2-n,o=e.x3-t,r=e.y3-n;return Math.abs(a*r-i*o)},X=function(e){var t=e.x1,n=e.y1,a=e.x2-t,i=e.y2-n;return Math.sqrt(a*a+i*i)},Y=function(e){return Math.round(100*e)/100},$=function(){var e=Object(a.useState)(!1),t=Object(A.a)(e,2),n=(t[0],t[1]),o=Object(a.useState)(!1),r=Object(A.a)(o,2),c=r[0],l=r[1],s=Object(a.useState)(!0),u=Object(A.a)(s,2),d=(u[0],u[1]),f=Object(a.useState)(0),h=Object(A.a)(f,2),b=h[0],y=h[1],m=Object(a.useState)(0),p=Object(A.a)(m,2),g=p[0],x=p[1],v=Object(a.useState)(null),w=Object(A.a)(v,2),k=w[0],E=w[1],O=Object(a.useState)(1),M=Object(A.a)(O,2),$=M[0],_=M[1],G=Object(a.useState)(1),Q=Object(A.a)(G,2),U=Q[0],Z=Q[1],ee=Object(a.useState)(1),te=Object(A.a)(ee,2),ne=te[0],ae=te[1],ie=Object(a.useRef)(null),oe=Object(a.useRef)(null),re=null,ce=function(){var e=Object(z.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.b(P.a.MediaPipeFaceMesh,{runtime:"mediapipe",solutionPath:"https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh"});case 2:re=e.sent,n(!0),setInterval((function(){return de(re)}),200);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){ce()}),[]);Object(a.useEffect)((function(){!function e(){var t=350+1200*F,n=50+800*L,a=Math.abs(F-I)<=.03&&Math.abs(L-V)<=.03;a!==q&&d(a),q=a;var i=document.elementFromPoint(t,n),o=q&&H>=1.1*J;o&&(l(!0),setTimeout((function(){l(!1)}),300)),o,((null===i||void 0===i?void 0:i.id)||"").indexOf("target")>=0&&q&&H>=1.1*J&&i.click(),setTimeout(e,100)}()}),[]);var le=function(e){var t=e.ctx,n=e.x,a=e.y,i=e.color,o=e.radius;t.beginPath(),t.arc(n,a,o,0,3*Math.PI),t.fillStyle=i,t.fill()},se=function(e,t,n){if(!T.a.isEmpty(t)){var a,i=0,o=0,r=Object(N.a)(t||[]);try{for(r.s();!(a=r.n()).done;){var c=a.value,l=c.x,s=c.y;i+=l,o+=s}}catch(f){r.e(f)}finally{r.f()}var u=Math.floor(i/t.length),d=Math.floor(o/t.length);le({ctx:e,x:u,y:d,color:n,radius:2})}},ue=function(e,t){if(null===t||void 0===t?void 0:t[0]){var n,a=t[0],i=(a.box,a.keypoints),o={},r=0,c=Object(N.a)(i||[]);try{for(c.s();!(n=c.n()).done;){var l=n.value;l.name&&(o[l.name]||(o[l.name]=[]),o[l.name].push(Object(S.a)(Object(S.a)({},l),{},{index:r}))),r++}}catch(ie){c.e(ie)}finally{c.f()}se(e,o.leftEye,"aqua"),se(e,o.rightEye,"red"),se(e,o.lips,"yellow"),se(e,o.rightEyebrow,"brown"),se(e,o.leftEyebrow,"purple");!function(e,t,n){var a,i=new Path2D,o=!0,r=Object(N.a)(t||[]);try{for(r.s();!(a=r.n()).done;){var c=a.value,l=c.x,s=c.y;c.name;o?i.moveTo(l,s):i.lineTo(l,s),o=!1}}catch(ie){r.e(ie)}finally{r.f()}i.closePath(),e.strokeStyle=n,e.lineWidth=3,e.stroke(i)}(e,T.a.map([132,58,172,136,150,149,176,148,152,377,400,378,379,365,397,288,361,323,454,356,389,251,284,332,297,338,10,109,67,103,54,21,93,162,234,127],(function(e){return i[e]})),"lightgrey");var s=function(e){var t=e.keypoints;if(T.a.isEmpty(t))return{x:0,y:0};var n,a=0,i=0,o=Object(N.a)(t||[]);try{for(o.s();!(n=o.n()).done;){var r=n.value,c=r.x,l=r.y;a+=c,i+=l}}catch(ie){o.e(ie)}finally{o.f()}return{x:Math.floor(a/t.length),y:Math.floor(i/t.length)}},u=s({keypoints:o.leftEyebrow}),d=u.x,f=u.y,h=s({keypoints:o.rightEyebrow}),b=h.x,m=h.y,p=s({keypoints:o.leftEye}),g=p.x,v=p.y,w=s({keypoints:o.rightEye}),k=w.x,E=w.y,j=s({keypoints:o.lips}),O=j.x,M=j.y,C=Math.floor((g+k)/2),z=Math.floor((v+E)/2),A=Math.floor((d+b)/2),P=Math.floor((f+m)/2),q=Math.floor((2*C+O)/3),Y=Math.floor((2*z+M)/3),$=i[10].x,G=i[10].y,Q=X({x1:A,y1:P,x2:C,y2:z})/Math.max(.001,X({x1:C,y1:z,x2:O,y2:M}))/Math.max(.001,X({x1:C,y1:z,x2:$,y2:G})/Math.max(.001,X({x1:C,y1:z,x2:O,y2:M})));ae(Q),H=Q,setTimeout((function(){J=Q}),500),le({ctx:e,x:C,y:z,color:"red",radius:2}),le({ctx:e,x:q,y:Y,color:"green",radius:4}),le({ctx:e,x:$,y:G,color:"white",radius:6});var U=(B-D)*oe.current.width,ee=(R-W)*oe.current.height,te=1-(q-(1-B)*oe.current.width)/U,ne=(Y-W*oe.current.height)/ee;y(te),x(ne),F=te,setTimeout((function(){I=te}),500),L=ne,setTimeout((function(){V=ne}),500),_(K({x1:g,y1:v,x2:d,y2:f,x3:b,y3:m})+K({x1:g,y1:v,x2:b,y2:m,x3:k,y3:E})),Z(K({x1:g,y1:v,x2:k,y2:E,x3:O,y3:M})),function(e){var t=(1-B)*oe.current.width,n=(1-D)*oe.current.width,a=W*oe.current.height,i=R*oe.current.height,o=new Path2D;o.moveTo(t,a),o.lineTo(t,i),o.lineTo(n,i),o.lineTo(n,a),o.closePath(),e.strokeStyle="grey",e.lineWidth=2,e.stroke(o)}(e)}},de=function(){var e=Object(z.a)(C.a.mark((function e(t){var n,a,i,o,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof ie.current||null===ie.current||4!==ie.current.video.readyState){e.next=15;break}return n=ie.current.video,a=ie.current.video.videoWidth,i=ie.current.video.videoHeight,ie.current.video.width=a,ie.current.video.height=i,oe.current.width=a,oe.current.height=i,e.next=10,t.estimateFaces(n);case 10:o=e.sent,(r=oe.current.getContext("2d")).translate(a,0),r.scale(-1,1),ue(r,o);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i.a.createElement("div",{id:"my-container",style:{opacity:.6}},i.a.createElement("div",{id:"fake-screen",className:"fake-screen",style:{position:"absolute",left:350,top:50,textAlign:"center",zindex:8,width:1200,height:800,background:"whitesmoke"}},i.a.createElement("div",{id:"target-yellow",className:"target-yellow",style:Object(S.a)({position:"absolute",left:230,top:30,textAlign:"center",zindex:10,width:35,height:35,background:"yellow"},"yellow"===k&&{border:"3px solid black"}),onClick:function(){E("yellow")}}),i.a.createElement("div",{id:"target-purple",className:"target-purple",style:Object(S.a)({position:"absolute",left:680,top:70,textAlign:"center",zindex:8,width:35,height:35,background:"purple"},"purple"===k&&{border:"4px solid black"}),onClick:function(){E("purple")}}),i.a.createElement("div",{id:"target-orange",className:"target-orange",style:Object(S.a)({position:"absolute",left:580,top:500,textAlign:"center",zindex:8,width:35,height:35,background:"orange"},"orange"===k&&{border:"4px solid black"}),onClick:function(){E("orange")}}),i.a.createElement("div",{id:"target-brown",className:"target-brown",style:Object(S.a)({position:"absolute",left:140,top:230,textAlign:"center",zindex:8,width:35,height:35,background:"brown"},"brown"===k&&{border:"4px solid black"}),onClick:function(){E("brown")}}),i.a.createElement("div",{id:"target-grey",className:"target-grey",style:Object(S.a)({position:"absolute",left:540,top:330,textAlign:"center",zindex:8,width:35,height:35,background:"grey"},"grey"===k&&{border:"4px solid black"}),onClick:function(){E("grey")}}),i.a.createElement("div",{id:"target-blue",className:"target-blue",style:Object(S.a)({position:"absolute",left:190,top:430,textAlign:"center",zindex:8,width:35,height:35,background:"blue"},"blue"===k&&{border:"4px solid black"}),onClick:function(){E("blue")}}),i.a.createElement("div",{id:"my-cross-top",style:{position:"absolute",left:1200*b+3,top:800*g-20,textAlign:"center",zindex:8,width:4,height:20,background:c?"white":"cyan"}}),i.a.createElement("div",{id:"my-cross-bottom",style:{position:"absolute",left:1200*b+3,top:800*g+10,textAlign:"center",zindex:8,width:4,height:20,background:c?"white":"cyan"}}),i.a.createElement("div",{id:"my-cross-left",style:{position:"absolute",left:1200*b-20,top:800*g+3,textAlign:"center",zindex:8,width:20,height:4,background:c?"white":"cyan"}}),i.a.createElement("div",{id:"my-cross-right",style:{position:"absolute",left:1200*b+10,top:800*g+3,textAlign:"center",zindex:8,width:20,height:4,background:c?"white":"cyan"}}),i.a.createElement("div",{style:{position:"absolute",left:10,top:10,zindex:20}},i.a.createElement("div",null,i.a.createElement("span",null,"X ratio: ",Y(b),"%")),i.a.createElement("div",null,i.a.createElement("span",null,"Y ratio: ",Y(g),"%")),i.a.createElement("div",null,i.a.createElement("span",null,"A ratio ",Y($/Math.max(U,1)),"%")),i.a.createElement("div",null,i.a.createElement("span",null,"B ratio ",Y(ne))))),i.a.createElement(j.a,{id:"my-webcam",ref:ie,mirrored:!0,style:{position:"absolute",left:0,right:0,textAlign:"center",zindex:9,width:288,height:200}}),i.a.createElement("canvas",{id:"my-canvas",ref:oe,style:{position:"absolute",left:0,right:0,textAlign:"center",zindex:9,width:288,height:200}}))},_=n(105),G=n(321),Q=n.n(G),U=function(){},Z=i.a.createContext({onShowNotification:U,onClearNotifications:U,success:U,error:U}),ee={Containers:{DefaultStyle:{padding:"0 15px 15px 15px",width:"320px"}},NotificationItem:{DefaultStyle:{border:"none",color:"#ffffff",padding:"15px"},success:{backgroundColor:"#4864C9",WebkitBoxShadow:"none",MozBoxShadow:"none",boxShadow:"none"},error:{backgroundColor:"#F86E7F",WebkitBoxShadow:"none",MozBoxShadow:"none",boxShadow:"none"}},Dismiss:{DefaultStyle:{backgroundColor:"none",fontWeight:"lighter",top:"16px",right:"10px"},success:{fontSize:"25px"},error:{fontSize:"0px"}}},te=function(e){return function(t){Object(m.a)(a,t);var n=Object(p.a)(a);function a(e){var t;return Object(b.a)(this,a),(t=n.call(this,e)).notificationSystem=null,t.addNotification=t.addNotification.bind(Object(_.a)(t)),t.clearNotifications=t.clearNotifications.bind(Object(_.a)(t)),t.success=t.success.bind(Object(_.a)(t)),t.error=t.error.bind(Object(_.a)(t)),t}return Object(y.a)(a,[{key:"componentDidMount",value:function(){this.notificationSystem=this.refs.notificationSystem}},{key:"addNotification",value:function(e){var t=e.message,n=e.level,a=e.type,i=e.autoDismiss;"networkStatus"===a?this.notificationSystem.addNotification({message:"Vous \xeates actuellement hors ligne",level:"error",position:this.props.shiftSidebar?"bl":"br",autoDismiss:0}):this.notificationSystem.addNotification(Object(S.a)({message:t,level:n,position:this.props.shiftSidebar?"bl":"br"},"number"===typeof i&&{autoDismiss:i}))}},{key:"success",value:function(e){this.addNotification({message:e,level:"success"})}},{key:"error",value:function(e){this.addNotification({message:e,level:"error"})}},{key:"clearNotifications",value:function(){this.notificationSystem&&this.notificationSystem.clearNotifications()}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(Z.Provider,{value:{onClearNotifications:this.clearNotifications,onShowNotification:this.addNotification,success:this.success,error:this.error}},i.a.createElement(e,Object.assign({},this.props,{addNotification:this.addNotification,onShowNotification:this.addNotification,onClearNotifications:this.clearNotifications}))),i.a.createElement(Q.a,{ref:"notificationSystem",style:ee}))}}]),a}(i.a.Component)},ne=function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Test View 1"))},ae=function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Test View 2"))},ie=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"getChildContext",value:function(){return{onShowNotification:this.props.onShowNotification,onClearNotifications:this.props.onClearNotifications}}},{key:"render",value:function(){return i.a.createElement(g.BrowserRouter,null,i.a.createElement(v.LastLocationProvider,null,i.a.createElement(x.g,null,i.a.createElement(x.d,{exact:!0,path:"/",component:$}),i.a.createElement(x.d,{exact:!0,path:"/test1",component:ne}),i.a.createElement(x.d,{exact:!0,path:"/test2",component:ae}),i.a.createElement(x.d,{exact:!0,path:"/face",component:O}),i.a.createElement(x.d,{exact:!0,path:"/facelm",component:$}),i.a.createElement(x.c,{from:"*",to:"/404"}))))}}]),n}(a.Component);ie.childContextTypes={onShowNotification:k.a.func,onClearNotifications:k.a.func};var oe=te(ie),re=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){return i.a.createElement(oe,null)}}]),n}(a.Component);r.a.render(i.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[331,1,2]]]);