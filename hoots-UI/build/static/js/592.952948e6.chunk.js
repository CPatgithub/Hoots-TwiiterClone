"use strict";(self.webpackChunkHoots=self.webpackChunkHoots||[]).push([[592],{5815:function(e,n,t){t(2791);var r=t(4880),o=t(364),i=t(4020),a=t(261),s=t(3329);n.Z=function(e){var n=e.heading,t=e.text,c=(0,o.v9)((function(e){return e.theme})),l=(0,r.k6)();return(0,s.jsx)(a.Pz,{border:c.border,children:(0,s.jsxs)(a.h4,{bg:c.bg,color:c.color,children:[(0,s.jsx)("div",{children:(0,s.jsx)(a.a5,{onClick:l.goBack,children:(0,s.jsx)(i.Z,{d:["M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"],width:"22.5px",height:"22.5px",fill:"rgb(29, 161, 242)"})})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:n}),t&&(0,s.jsx)("p",{children:t})]})]})})}},7326:function(e,n,t){t.d(n,{Z:function(){return I}});var r=t(4942),o=t(1413),i=t(2982),a=t(4165),s=t(5861),c=t(885),l=t(2791),d=t(4569),u=t.n(d),h=t(4880),f=t(1523),x=t(364),p=t(4020),m=t(261),g=t(5226),v=t(3329),j="https://hoots-server.onrender.com",w=function(e){var n=(0,l.useState)(!1),t=(0,c.Z)(n,2),r=t[0],o=t[1],i=(0,x.v9)((function(e){return e.profile.user.token})),d=e.tweets,h=e.tweet,f=e.idx,w=e.updateDetails,b=e.myId,Z=e.getData,y=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(n,t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),o(!0),!d[t].selfLiked){e.next=16;break}return e.prev=3,e.next=6,u().delete("".concat(j,"/tweet/like/remove"),{data:{userId:b,tweetId:d[t]["Tweets.id"]}});case 6:w(t,[["selfLiked",!1],["Tweets.likesCount",d[t]["Tweets.likesCount"]-1]]),Z&&Z(),o(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),o(!1);case 14:e.next=26;break;case 16:return e.prev=16,e.next=19,u().post("".concat(j,"/tweet/like/add"),{userId:b,tweetId:d[t]["Tweets.id"]},{headers:{Authorization:"Bearer ".concat(i)}});case 19:w(t,[["selfLiked",!0],["Tweets.likesCount",d[t]["Tweets.likesCount"]+1]]),o(!1),e.next=26;break;case 23:e.prev=23,e.t1=e.catch(16),o(!1);case 26:case"end":return e.stop()}}),e,null,[[3,11],[16,23]])})));return function(n,t){return e.apply(this,arguments)}}();return(0,v.jsxs)(g._I,{onClick:function(e){return y(e,f)},disabled:r,hoverColor:"rgb(224,36,94)",hoverBg:"rgba(224,36,94,0.1)",children:[(0,v.jsx)(g.AH,{children:(0,v.jsx)(p.Z,{d:["M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"],width:"18.75px",height:"18.75px",fill:h.selfLiked?"rgb(224, 36, 94)":"rgb(101, 119, 134)"})}),(0,v.jsx)(m.xv,{color:h.selfLiked?"rgb(224, 36, 94)":"rgb(101, 119, 134)",children:h["Tweets.likesCount"]})]})},b=["M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"],Z=function(e){e.tweets;var n=e.tweet,t=(e.idx,e.updateDetails,e.myId,e.getData,e.onClick);return(0,v.jsxs)(g._I,{hoverColor:"rgb(29,161,242)",hoverBg:"rgba(29,161,242,0.1)",onClick:t,children:[(0,v.jsx)(g.AH,{children:(0,v.jsx)(p.Z,{d:b,width:"18.75px",height:"18.75px",fill:"rgb(101, 119, 134)"})}),(0,v.jsx)(m.xv,{color:"rgb(101, 119, 134)",children:n["Tweets.commentsCount"]})]})},y=t(294),k=t(5695),C=t(3182),F=t(505),I=function(e){var n=(0,l.useState)(null),t=(0,c.Z)(n,2),d=t[0],p=t[1],g=(0,l.useState)(!1),j=(0,c.Z)(g,2),b=j[0],I=j[1],S=(0,l.useState)(null),z=(0,c.Z)(S,2),T=z[0],D=z[1],L=(0,h.UO)().username,B=(0,x.v9)((function(e){return e.profile.user})).id,H=(0,x.v9)((function(e){return e.update.refresh})),U=(0,x.v9)((function(e){return e.theme})),M=e.url,A=e.dataKey,E=e.header,O=e.handleHeaderText,V=e.feed;(0,l.useEffect)((function(){P()}),[M,H]);var P=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get(M);case 3:n=e.sent,p(n.data.tweets),O&&O("".concat(n.data.tweets.length," ").concat(E)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),Y=function(e,n){var t;p([].concat((0,i.Z)(d.slice(0,e)),[(0,o.Z)((0,o.Z)({},d[e]),{},(t={},(0,r.Z)(t,n[0][0],n[0][1]),(0,r.Z)(t,n[1][0],n[1][1]),t))],(0,i.Z)(d.slice(e+1))))},K=function(){I(!1)};return d?d.length?(0,v.jsxs)(l.Fragment,{children:[b&&(0,v.jsx)(C.Z,{children:(0,v.jsx)(F.Z,{handleClose:K,tweetId:T}),handleClose:K,padding:"15px"}),d.map((function(e,n){var t=new Date(e["Tweets.createdAt"]);return(0,v.jsx)(l.Fragment,{children:(0,v.jsx)(f.rU,{to:"/".concat(e.username,"/status/").concat(e["Tweets.id"]),children:(0,v.jsxs)(m.aO,{hover:!0,border:U.border,tweetHov:U.tweetHov,children:[(0,v.jsx)(m.n5,{children:(0,v.jsx)(m.sJ,{src:e.avatar})}),(0,v.jsxs)("div",{style:{width:"80%"},children:[(0,v.jsxs)(m.Xb,{color:U.color,children:[(0,v.jsx)("object",{children:(0,v.jsx)(f.rU,{to:"/profile/".concat(e.username),children:(0,v.jsxs)("h3",{children:[e.firstname," ",e.lastname]})})}),(0,v.jsxs)("p",{style:{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",maxWidth:"18%"},children:["@",e.username]}),(0,v.jsxs)("span",{children:[t.toLocaleString("default",{month:"short"})," ",t.getDate()," ",(new Date).getFullYear()!==t.getFullYear()&&t.getFullYear()]})]}),(0,v.jsx)("div",{style:{color:U.color,wordBreak:"break-word"},children:e["Tweets.text"]}),e["Tweets.media"]&&(0,y.O)(e["Tweets.media"])&&(0,v.jsx)("img",{src:e["Tweets.media"],style:{width:"100%"}}),e["Tweets.media"]&&(0,y.W)(e["Tweets.media"])&&(0,v.jsx)("video",{src:e["Tweets.media"],style:{width:"100%"},controls:!0}),(0,v.jsxs)(m.Xb,{style:{justifyContent:"space-between"},children:[(0,v.jsx)(Z,{tweets:d,tweet:e,idx:n,myId:B,getData:P,onClick:function(n){n.preventDefault(),D(e["Tweets.id"]),I(!0)}}),(0,v.jsx)(w,{tweets:d,tweet:e,idx:n,updateDetails:Y,myId:B,getData:P})]})]})]})},e["Tweets.id"])})}))]}):(0,v.jsx)(m.um,{children:V?"You are all caught up!":"@".concat(L," has no ").concat(A," yet!")}):(0,v.jsx)(k.Z,{})}},7592:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var r=t(1413),o=t(4165),i=t(5861),a=t(885),s=t(2791),c=t(4880),l=t(364),d=t(4569),u=t.n(d),h=t(1523),f=t(261),x=(t(3082),t(3329)),p=function(e){var n=(0,s.useState)(null),t=(0,a.Z)(n,2),r=t[0],d=t[1],p=e.user,m=(0,c.UO)().username,g=(0,l.v9)((function(e){return e.profile.user.id})),v=(0,l.v9)((function(e){return e.theme}));return(0,s.useEffect)((function(){(0,i.Z)((0,o.Z)().mark((function e(){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("".concat("https://hoots-server.onrender.com","/follow/details?id=").concat(p.id,"&myId=").concat(g));case 2:n=e.sent,d({followers:n.data.followers,following:n.data.following});case 4:case"end":return e.stop()}}),e)})))()}),[p]),r?(0,x.jsxs)(f.kS,{children:[(0,x.jsx)("div",{children:(0,x.jsx)(h.rU,{to:"/profile/".concat(m,"/following"),children:(0,x.jsxs)("p",{children:[(0,x.jsx)("span",{style:{color:v.color},children:r.following.length})," ",(0,x.jsx)("span",{children:"Following"})]})})}),(0,x.jsx)("div",{children:(0,x.jsx)(h.rU,{to:"/profile/".concat(m,"/followers"),children:(0,x.jsxs)("p",{children:[(0,x.jsx)("span",{style:{color:v.color},children:r.followers.length})," ",(0,x.jsx)("span",{children:"Followers"})]})})})]}):(0,x.jsx)(s.Fragment,{})},m=t(4020),g=t(5815),v=function(e){var n=e.tabList,t=(0,l.v9)((function(e){return e.theme})),r=(0,c.UO)(),o=r.username,i=r.activity,a={borderBottom:"2px solid rgb(29,161,242)",color:"rgb(29,161,242)"};return(0,x.jsx)(f.OK,{border:t.border,children:n.map((function(e){var n="tweets"===e.name?"/profile/".concat(o):"/profile/".concat(o).concat(e.path);return(0,x.jsx)(h.rU,{to:n,replace:!0,style:i===e.name||void 0==i&&"tweets"===e.name?a:{},children:(0,x.jsx)("div",{children:e.title})},e.name)}))})},j=t(4942),w=t(2982),b=t(5226),Z=t(5695),y=t(5122),k="https://hoots-server.onrender.com",C=function(){var e=(0,s.useState)(null),n=(0,a.Z)(e,2),t=n[0],d=n[1],p=(0,s.useState)(!1),m=(0,a.Z)(p,2),C=m[0],F=m[1],I=(0,c.UO)(),S=I.username,z=I.activity,T=(0,l.v9)((function(e){return e.profile.user})),D=(0,l.v9)((function(e){return e.theme})),L=T.id,B=(0,l.I0)();(0,s.useEffect)((function(){(0,i.Z)((0,o.Z)().mark((function e(){var n,t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("".concat(k,"/user/get-user?username=").concat(S));case 2:return n=e.sent,e.next=5,u().get("".concat(k,"/follow/details?id=").concat(n.data.id,"&myId=").concat(L));case 5:t=e.sent,d({user:n.data,following:t.data.following.map((function(e){return(0,r.Z)((0,r.Z)({},e),{},{unfollow:!1})})),followers:t.data.followers.map((function(e){return(0,r.Z)((0,r.Z)({},e),{},{unfollow:!1})}))});case 7:case"end":return e.stop()}}),e)})))()}),[]);var H=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(n,i,a,s){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),F(!0),e.next=4,u().post("".concat(k,"/follow"),{followedId:i,followerId:L});case 4:d((0,r.Z)((0,r.Z)({},t),{},(0,j.Z)({},z,[].concat((0,w.Z)(t[z].slice(0,a)),[(0,r.Z)((0,r.Z)({},t[z][a]),{},{isFollowing:s,unfollow:s})],(0,w.Z)(t[z].slice(a+1)))))),F(!1),B({type:y.i3});case 7:case"end":return e.stop()}}),e)})));return function(n,t,r,o){return e.apply(this,arguments)}}(),U=function(e){d((0,r.Z)((0,r.Z)({},t),{},(0,j.Z)({},z,[].concat((0,w.Z)(t[z].slice(0,e)),[(0,r.Z)((0,r.Z)({},t[z][e]),{},{unfollow:!t[z][e].unfollow})],(0,w.Z)(t[z].slice(e+1))))))};return t?(0,x.jsxs)(b.V7,{border:D.border,children:[(0,x.jsx)(g.Z,{heading:"".concat(t.user.firstname," ").concat(t.user.lastname),text:"@".concat(t.user.username)}),(0,x.jsx)(v,{tabList:[{name:"followers",title:"Followers",path:"/followers"},{name:"following",title:"Following",path:"/following"}]}),t[z].length?(0,x.jsx)("div",{children:t[z].map((function(e,n){return(0,x.jsx)(h.rU,{to:"/profile/".concat(e.username),children:(0,x.jsxs)(f.aO,{border:D.border,tweetHov:D.tweetHov,children:[(0,x.jsx)("div",{children:(0,x.jsx)(f.sJ,{src:e.avatar})}),(0,x.jsxs)("div",{style:{width:"100%"},children:[(0,x.jsxs)(f.OJ,{children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("object",{children:(0,x.jsx)(h.rU,{to:"/profile/".concat(e.username),children:(0,x.jsxs)("h3",{style:{color:D.color},children:[e.firstname," ",e.lastname]})})}),(0,x.jsx)("object",{children:(0,x.jsx)(h.rU,{to:"/profile/".concat(e.username),children:(0,x.jsxs)("p",{children:["@",e.username]})})})]}),e.id!==L&&(0,x.jsxs)(s.Fragment,{children:[e.isFollowing&&(0,x.jsx)(b.zx,{disabled:C,onMouseEnter:function(){return U(n)},onMouseLeave:function(){return U(n)},onClick:function(t){return H(t,e.id,n,!1)},bg:"rgb(29, 161, 242)",hoverBg:"rgb(202,32,85)",color:"rgb(255,255,255)",padding:"2% 5%",children:e.unfollow?"Unfollow":"Following"}),!e.isFollowing&&(0,x.jsx)(b.zx,{disabled:C,onClick:function(t){return H(t,e.id,n,!0)},bg:"transparent",hoverBg:"rgba(29, 161, 242,0.1)",color:"rgb(29, 161, 242)",padding:"2% 5%",border:"1px solid rgb(29,161,242)",children:"Follow"})]})]}),(0,x.jsx)("div",{children:(0,x.jsx)("p",{style:{color:D.color},children:e.bio})})]})]},e.id)},e.id)}))}):(0,x.jsx)(f.um,{children:"@".concat(S,"following"===z?" doesn't follow anyone!":" has no followers!")})]}):(0,x.jsx)(Z.Z,{})},F=t(7326),I=t(3182),S=t(6139),z=t(1232),T=t(2537),D=t(9586),L=function(e){var n=e.input,t=e.type,o=e.placeholder,i=e.meta,a=i.touched,c=i.error,d=(0,l.v9)((function(e){return e.theme}));return(0,x.jsxs)(s.Fragment,{children:[(0,x.jsx)(b.Fy,(0,r.Z)((0,r.Z)({},n),{},{type:t,placeholder:o,inputBg:d.tweetHov,color:d.color})),a&&c&&(0,x.jsx)(T.jj,{children:c})]})},B=function(e){var n=(0,s.useState)(e.initialValues.cover),t=(0,a.Z)(n,2),r=t[0],o=t[1],i=(0,s.useState)(e.initialValues.avatar),c=(0,a.Z)(i,2),d=c[0],u=c[1],h=(0,l.v9)((function(e){return e.theme})),p=e.isSaveDisabled;return(0,x.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,x.jsx)(f.Y9,{bg:h.border,style:{display:"flex",justifyContent:"center",alignItems:"center",backgroundImage:"url(".concat(r,")"),backgroundSize:"cover"},children:(0,x.jsx)(S.Z,{type:"file",name:"cover",component:function(e){var n=e.input;return(0,x.jsxs)(s.Fragment,{children:[(0,x.jsx)("label",{htmlFor:"cover",style:{zIndex:1},children:(0,x.jsx)(D.Z,{isCamera:!0,color:"rgb(255,255,255)",width:"22.5px",height:"22.5px"})}),(0,x.jsx)("input",{type:"file",id:"cover",name:"cover",accept:"image/*",onChange:function(e){return function(e,n){var t=e.target.files[0],r=new FileReader;r.readAsDataURL(t),r.onloadend=function(){o(r.result),n(t)}}(e,n.onChange)},style:{display:"none"}})]})}})}),(0,x.jsx)(f.bf,{children:(0,x.jsx)(f.qE,{style:{position:"relative"},backgroundImage:d,bg:h.bg,children:(0,x.jsx)(S.Z,{type:"file",name:"avatar",component:function(e){var n=e.input;return(0,x.jsxs)(s.Fragment,{children:[(0,x.jsx)("label",{htmlFor:"avatar",style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},children:(0,x.jsx)(D.Z,{isCamera:!0,color:"rgb(255,255,255)",width:"22.5px",height:"22.5px"})}),(0,x.jsx)("input",{type:"file",id:"avatar",name:"avatar",accept:"image/*",onChange:function(e){return function(e,n){var t=e.target.files[0],r=new FileReader;r.readAsDataURL(t),r.onloadend=function(){u(r.result),n(t)}}(e,n.onChange)},style:{display:"none"}})]})}})})}),(0,x.jsx)("div",{style:{marginBottom:"5%"},children:(0,x.jsx)(S.Z,{type:"text",name:"firstname",component:L,placeholder:"Firstname"})}),(0,x.jsx)("div",{style:{marginBottom:"5%"},children:(0,x.jsx)(S.Z,{type:"text",name:"lastname",component:L,placeholder:"Lastname"})}),(0,x.jsx)("div",{style:{marginBottom:"5%"},children:(0,x.jsx)(S.Z,{type:"text",name:"bio",component:L,placeholder:"Bio"})}),(0,x.jsx)("div",{style:{marginBottom:"5%"},children:(0,x.jsx)(S.Z,{type:"text",name:"location",component:L,placeholder:"Location"})}),(0,x.jsx)("div",{style:{marginBottom:"5%"},children:(0,x.jsx)(S.Z,{type:"date",name:"dob",component:L,placeholder:"Birth Date"})}),(0,x.jsx)(b.zx,{type:"submit",bg:"rgb(29, 161, 242)",color:"rgb(255,255,255)",padding:"3px 10px",hoverBg:"rgb(26,145,218)",disabled:p,children:"Save"})]})},H=B=(0,z.Z)({form:"editprofile",validate:function(e){var n={};return e.firstname||(n.firstname="Firstname required"),e.lastname||(n.lastname="Lastname required"),e.dob||(n.dob="Date of birth required"),e.bio||(e.bio=""),e.location||(e.location=""),n}})(B),U=t(533),M="https://hoots-server.onrender.com",A=function(e){var n=(0,s.useState)(null),t=(0,a.Z)(n,2),d=t[0],h=t[1],j=(0,s.useState)(""),w=(0,a.Z)(j,2),k=w[0],S=w[1],z=(0,s.useState)(!1),T=(0,a.Z)(z,2),D=T[0],L=T[1],B=(0,s.useState)(!1),A=(0,a.Z)(B,2),E=A[0],O=A[1],V=(0,c.UO)(),P=V.username,Y=V.activity,K=(0,l.v9)((function(e){return e.profile.user})),q=(0,l.v9)((function(e){return e.update.refresh})),J=(0,l.v9)((function(e){return e.theme})),R=K.id,W=(K.token,(0,l.I0)());(0,s.useEffect)((function(){(0,i.Z)((0,o.Z)().mark((function e(){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("".concat(M,"/user/get-user?username=").concat(P));case 2:n=e.sent,h(n.data);case 4:case"end":return e.stop()}}),e)})))()}),[P,q]);var X=function(e){S(e)},_=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(n){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),(t=new FormData).append("userId",d.id),t.append("firstname",n.firstname),t.append("lastname",n.lastname),t.append("dob",n.dob),t.append("bio",n.bio),t.append("location",n.location),"object"===typeof n.avatar&&t.append("avatar",n.avatar),"object"===typeof n.cover&&t.append("cover",n.cover),e.next=12,u().put("".concat(M,"/user/edit-user"),t);case 12:e.sent,O(!1),L(!1),(0,U.Am)("Profile was edited successfully"),W({type:y.QE,payload:(0,r.Z)((0,r.Z)({},K),{},{firstname:n.firstname,lastname:n.lastname,dob:n.dob,bio:n.bio,location:n.location,avatar:n.avatar,cover:n.cover})}),W({type:y.i3});case 18:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();if(null===d)return(0,x.jsx)(Z.Z,{});var Q=new Date(d.dob),G=new Date(d.createdAt),N=[{name:"tweets",title:"Tweets",path:void 0},{name:"media",title:"Media",path:"/media"},{name:"likes",title:"Likes",path:"/likes"}];if("followers"===Y||"following"===Y)return(0,x.jsx)(C,{});return(0,x.jsxs)(s.Fragment,{children:[D&&(0,x.jsx)(I.Z,{children:(0,x.jsx)(H,{onSubmit:_,initialValues:d,isSaveDisabled:E}),handleClose:function(){return L(!1)},padding:"15px",heading:"Edit profile"}),(0,x.jsxs)(b.V7,{border:J.border,children:[(0,x.jsx)(g.Z,{heading:"".concat(d.firstname," ").concat(d.lastname),text:k}),(0,x.jsxs)("div",{children:[(0,x.jsx)(f.Y9,{bg:J.border,style:{backgroundImage:"url(".concat(d.cover,")"),backgroundSize:"cover"}}),(0,x.jsxs)(f.bf,{children:[(0,x.jsx)(f.qE,{backgroundImage:d.avatar,bg:J.bg}),K.id===d.id&&(0,x.jsx)(f.zx,{bg:J.bg,onClick:function(){return L(!0)},children:"Edit profile"})]})]}),(0,x.jsxs)(f.kI,{color:J.color,children:[(0,x.jsxs)("h2",{children:[d.firstname," ",d.lastname]}),(0,x.jsxs)("p",{children:["@",d.username]}),d.bio&&(0,x.jsx)("p",{children:d.bio}),(0,x.jsxs)(f.L0,{children:[d.location&&(0,x.jsxs)("div",{children:[(0,x.jsx)(m.Z,{d:["M12 14.315c-2.088 0-3.787-1.698-3.787-3.786S9.913 6.74 12 6.74s3.787 1.7 3.787 3.787-1.7 3.785-3.787 3.785zm0-6.073c-1.26 0-2.287 1.026-2.287 2.287S10.74 12.814 12 12.814s2.287-1.025 2.287-2.286S13.26 8.24 12 8.24z","M20.692 10.69C20.692 5.9 16.792 2 12 2s-8.692 3.9-8.692 8.69c0 1.902.603 3.708 1.743 5.223l.003-.002.007.015c1.628 2.07 6.278 5.757 6.475 5.912.138.11.302.163.465.163.163 0 .327-.053.465-.162.197-.155 4.847-3.84 6.475-5.912l.007-.014.002.002c1.14-1.516 1.742-3.32 1.742-5.223zM12 20.29c-1.224-.99-4.52-3.715-5.756-5.285-.94-1.25-1.436-2.742-1.436-4.312C4.808 6.727 8.035 3.5 12 3.5s7.192 3.226 7.192 7.19c0 1.57-.497 3.062-1.436 4.313-1.236 1.57-4.532 4.294-5.756 5.285z"],width:"18.75px",height:"18.75px",fill:"rgb(101,119,134)"}),(0,x.jsx)("span",{children:d.location})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)(m.Z,{d:["M7.75 11.083c-.414 0-.75-.336-.75-.75C7 7.393 9.243 5 12 5c.414 0 .75.336.75.75s-.336.75-.75.75c-1.93 0-3.5 1.72-3.5 3.833 0 .414-.336.75-.75.75z","M20.75 10.333c0-5.01-3.925-9.083-8.75-9.083s-8.75 4.074-8.75 9.083c0 4.605 3.32 8.412 7.605 8.997l-1.7 1.83c-.137.145-.173.357-.093.54.08.182.26.3.46.3h4.957c.198 0 .378-.118.457-.3.08-.183.044-.395-.092-.54l-1.7-1.83c4.285-.585 7.605-4.392 7.605-8.997zM12 17.917c-3.998 0-7.25-3.402-7.25-7.584S8.002 2.75 12 2.75s7.25 3.4 7.25 7.583-3.252 7.584-7.25 7.584z"],width:"18.75",height:"18.75",fill:"rgb(101, 119, 134)"}),(0,x.jsxs)("span",{children:["Born ",Q.toLocaleString("default",{month:"long"})," ",Q.getDate(),", ",Q.getFullYear()]})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)(m.Z,{d:["M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"],width:"18.75",height:"18.75",fill:"rgb(101, 119, 134)"}),(0,x.jsxs)("span",{children:[" ","Joined"," ",G.toLocaleString("default",{month:"long"})," ",G.getFullYear()]})]})]}),(0,x.jsx)(p,{user:d})]}),(0,x.jsx)(v,{tabList:N}),function(){switch(Y){case void 0:return(0,x.jsx)("div",{children:(0,x.jsx)(F.Z,{url:"".concat(M,"/user/get-tweets?userId=").concat(d.id,"&myId=").concat(R),dataKey:"tweets",header:"Tweets",handleHeaderText:X})});case"media":return(0,x.jsx)("div",{children:(0,x.jsx)(F.Z,{url:"".concat(M,"/user/get-media?userId=").concat(d.id,"&myId=").concat(R),dataKey:"media",header:"Photos & Videos",handleHeaderText:X})});case"likes":return(0,x.jsx)("div",{children:(0,x.jsx)(F.Z,{url:"".concat(M,"/user/get-likes?userId=").concat(d.id,"&myId=").concat(R),dataKey:"likes",header:"Likes",handleHeaderText:X})})}}()]})]})}},2537:function(e,n,t){t.d(n,{K7:function(){return u},M4:function(){return h},jj:function(){return m},kC:function(){return p},l0:function(){return x},zx:function(){return f}});var r,o,i,a,s,c,l=t(1766),d=t(6444),u=d.ZP.div(r||(r=(0,l.Z)(["\n  background: rgb(113, 201, 248);\n  height: 100vh;\n  overflow: hidden;\n"]))),h=d.ZP.div(o||(o=(0,l.Z)(["\n  margin-bottom: 40px;\n  span {\n    color: rgb(255, 255, 255);\n    font-size: 19px;\n    font-weight: bold;\n    margin-left: 15px;\n  }\n"]))),f=d.ZP.button(i||(i=(0,l.Z)(["\n  width: 100%;\n  background: ",";\n  color: ",";\n  border: 1px solid rgb(29, 161, 242);\n  border-radius: 50px;\n  font-size: 15px;\n  font-weight: bold;\n  padding: 5px 10px;\n  outline: none;\n  cursor: pointer;\n\n  &:hover {\n    background: ",";\n  }\n  &:disabled {\n    cursor: not-allowed;\n  }\n"])),(function(e){return e.bg}),(function(e){return e.color}),(function(e){return e.hovbg})),x=d.ZP.div(a||(a=(0,l.Z)(["\n  display: flex;\n  justify-content: ",";\n  flex-wrap: wrap;\n  margin-bottom: ",";\n  div {\n    ","\n    height: 63px;\n    ","\n    ","\n  }\n  input {\n    width: 100%;\n    border: none;\n    height: 50px;\n    border-bottom: 2px solid gray;\n    background: rgba(29, 161, 242, 0.1);\n    outline: none;\n    &:focus {\n      border-bottom: 2px solid rgb(29, 161, 242);\n    }\n  }\n  @media (max-width: 768px) {\n    margin-bottom: ",";\n    div {\n      width: 100%;\n      margin-bottom: 20px;\n    }\n  }\n"])),(function(e){return e.twoField?"space-around":"center"}),(function(e){return e.isLogin?"100px":"12px"}),(function(e){return!e.twoField&&"margin-right: 10px;"}),(function(e){return e.single&&"width: 100%;"}),(function(e){return e.twoField&&"width: 43%"}),(function(e){return e.isLogin?"50px":"12px"})),p=d.ZP.div(s||(s=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  div {\n    width: 50%;\n  }\n  h1 {\n    font-size: 30px;\n    font-weight: bold;\n  }\n  p {\n    font-size: 15px;\n    font-weight: bold;\n    color: black;\n    margin-top: 15%;\n  }\n  @media (max-width: 768px) {\n    div {\n      width: 100%;\n    }\n  }\n"]))),m=d.ZP.p(c||(c=(0,l.Z)(["\n  font-size: 13px;\n  color: rgb(255, 0, 0);\n  margin: 0;\n"])))},2982:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(907);var o=t(181);function i(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=592.952948e6.chunk.js.map