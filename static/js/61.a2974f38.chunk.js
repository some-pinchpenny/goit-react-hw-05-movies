"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[61],{1687:function(n,e,t){t.d(e,{Hx:function(){return l},KJ:function(){return s},Mc:function(){return u},_6:function(){return c},az:function(){return p},uV:function(){return d}});var r=t(4165),a=t(5861),i=t(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="9172c4d325a71ee6e99b7941097e9eed",c=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t){var a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?query=".concat(e.split("/")[1],"&api_key=").concat(o,"&page=").concat(t));case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),u=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/day?api_key=".concat(o,"&page=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/credits?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/reviews?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},3580:function(n,e,t){t.d(e,{a:function(){return k}});var r,a,i,o,c,u,s,p=t(7689),d=t(1087),l=t(168),x=t(5867),h=x.ZP.li(r||(r=(0,l.Z)(["\n  border-radius: 8px;\n  background: #413b3b;\n  box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.25);\n\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n  /* border-radius: 8px; */\n  /* box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12); */\n"]))),f=x.ZP.img(a||(a=(0,l.Z)(["\n  width: 100%;\n  height: 400px;\n  object-fit: cover;\n  border-radius: 8px;\n"]))),g=x.ZP.div(i||(i=(0,l.Z)(["\n  padding: 8px 8px 12px 8px;\n"]))),v=x.ZP.h2(o||(o=(0,l.Z)(["\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 1.04;\n  margin-bottom: 4px;\n"]))),Z=x.ZP.ul(c||(c=(0,l.Z)(["\n  display: flex;\n  grid-gap: 8px;\n"]))),m=x.ZP.li(u||(u=(0,l.Z)(["\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.25;\n  color: #c8c5c5;\n"]))),b=t(6691),y=t(184),w=function(n){var e=n.movie,t=(0,p.TH)();return(0,y.jsx)(h,{children:(0,y.jsxs)(d.rU,{to:"/movies/".concat(e.id),state:{from:t},children:[(0,y.jsx)(f,{src:e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):"https://via.placeholder.com/400x600.png?text=Poster+Not+Available",alt:e.title,width:"282px"}),(0,y.jsxs)(g,{children:[(0,y.jsx)(v,{children:e.title}),(0,y.jsxs)(Z,{children:[e.release_date&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(m,{children:(0,b.p)(e.release_date,"dd MMMM yyyy")}),(0,y.jsx)(m,{children:"|"})]}),(0,y.jsx)(m,{children:e.vote_average.toFixed(1)})]})]})]})})},j=x.ZP.ul(s||(s=(0,l.Z)(["\n  display: grid;\n  max-width: 100%;\n  grid-template-columns: repeat(auto-fill, minmax(282px, 1fr));\n  grid-gap: 24px;\n  margin-top: 0;\n  margin-bottom: 48px;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),k=function(n){var e=n.items;return(0,y.jsx)(j,{children:e.map((function(n){return(0,y.jsx)(w,{movie:n},n.id)}))})}},9593:function(n,e,t){t.d(e,{t:function(){return f}});var r,a,i,o=t(3433),c=t(9439),u=t(2791),s=t(168),p=t(5867),d=p.ZP.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),l=p.ZP.li(a||(a=(0,s.Z)(["\n  &.active {\n    background-color: #b64343;\n    border-radius: 6px;\n  }\n"]))),x=p.ZP.a(i||(i=(0,s.Z)(["\n  display: block;\n  padding: 0.75rem 1rem;\n  min-width: 3.5rem;\n  text-align: center;\n  font-weight: 400;\n  font-size: 16px;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 6px;\n\n  &:hover {\n    color: #b64343;\n    background-color: white;\n    font-weight: 600;\n  }\n"]))),h=t(184),f=function(n){var e=n.onPageChange,t=n.currentPage,r=n.totalPages,a=(0,u.useState)(2),i=(0,c.Z)(a,1)[0],s="LEFT",p="RIGHT",f=function(n,e){for(var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=n,a=[];r<=e;)a.push(r),r+=t;return a},g=function(n){return function(t){t.preventDefault(),e(n)}},v=function(n){n.preventDefault(),e(t-2*i-1)},Z=function(n){n.preventDefault(),e(t+2*i+1)},m=function(){var n=2*i+3;if(r>n+2){var e=Math.max(2,t-i),a=Math.min(r-1,t+i),c=f(e,a),u=e>2,d=r-a>1,l=n-(c.length+1);switch(!0){case u&&!d:var x=f(e-l,e-1);c=[s].concat((0,o.Z)(x),(0,o.Z)(c));break;case!u&&d:var h=f(a+1,a+l);c=[].concat((0,o.Z)(c),(0,o.Z)(h),[p]);break;default:c=[s].concat((0,o.Z)(c),[p])}return[1].concat((0,o.Z)(c),[r])}return f(1,r)}();return(0,h.jsx)("div",{children:r>=2&&(0,h.jsx)(d,{children:m.map((function(n,e){return n===s?(0,h.jsx)(l,{children:(0,h.jsx)(x,{href:"#","aria-label":"Previous",onClick:v,children:(0,h.jsx)("span",{"aria-hidden":"true",children:"\xab"})})},e):n===p?(0,h.jsx)(l,{children:(0,h.jsx)(x,{href:"#","aria-label":"Next",onClick:Z,children:(0,h.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})},e):(0,h.jsx)(l,{className:"page-item".concat(t===n?" active":""),children:(0,h.jsx)(x,{href:"#",onClick:g(n),children:n})},e)}))})})}},6691:function(n,e,t){t.d(e,{p:function(){return a}});var r=t(8977);function a(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dd MMMM yyyy, HH:mm",t=new Date(n);return(0,r.Z)(t,e)}},1061:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,a,i,o,c,u=t(4165),s=t(3433),p=t(5861),d=t(9439),l=t(3580),x=t(9482),h=t(168),f=t(5867),g=f.ZP.div(r||(r=(0,h.Z)(["\n  padding-top: 138px;\n  padding-bottom: 48px;\n"]))),v=f.ZP.h1(a||(a=(0,h.Z)(["\n  font-size: 48px;\n  font-weight: 400;\n  line-height: normal;\n"]))),Z=f.ZP.form(i||(i=(0,h.Z)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n\n  margin-bottom: 56px;\n"]))),m=f.ZP.button(o||(o=(0,h.Z)(["\n  border-radius: 0px 22px 22px 0px;\n  background-color: #b64343;\n  color: #fff;\n  width: 75px;\n  height: 48px;\n  display: inline-block;\n  box-shadow: 0px 0px 14px 1px rgba(47, 42, 42, 0.77);\n  border: none;\n\n  &:hover {\n    background-color: #ee4f4f;\n  }\n"]))),b=f.ZP.input(c||(c=(0,h.Z)(["\n  border-radius: 22px 0px 0px 22px;\n  box-shadow: 0px 0px 14px 1px rgba(47, 42, 42, 0.77);\n  border: none;\n  width: 491px;\n  height: 48px;\n  padding: 10px 32px;\n  background-color: transparent;\n  display: inline-block;\n  color: #c8c5c5;\n  font-size: 24px;\n  line-height: 1.17;\n\n  &::placeholder {\n    color: #c8c5c5;\n    font-size: 24px;\n    line-height: 1.17;\n  }\n"]))),y=t(184),w=function(n){var e=n.onSubmit,t=n.query,r=t?"Here's what we found with the word \u201c".concat(t.split("/")[1],"\u201d"):"What would you like to watch today?";return(0,y.jsxs)(g,{children:[(0,y.jsxs)(Z,{onSubmit:e,children:[(0,y.jsx)(b,{type:"text",name:"query",placeholder:"Start typing here..."}),(0,y.jsx)(m,{type:"submit",children:(0,y.jsx)(x.t2h,{size:"32px"})})]}),(0,y.jsx)(v,{children:r})]})},j=t(1687),k=t(2791),P=t(9014),_=t(1087),z=t(9593),M=t(9263);function S(){var n,e=(0,k.useState)([]),t=(0,d.Z)(e,2),r=t[0],a=t[1],i=(0,k.useState)(!1),o=(0,d.Z)(i,2),c=o[0],x=o[1],h=(0,k.useState)(!1),f=(0,d.Z)(h,2),g=f[0],v=f[1],Z=(0,k.useState)(1),m=(0,d.Z)(Z,2),b=m[0],S=m[1],q=(0,_.lr)(),C=(0,d.Z)(q,2),E=C[0],R=C[1],D=null!==(n=E.get("query"))&&void 0!==n?n:"",H=Number(E.get("page"));(0,k.useEffect)((function(){function n(){return(n=(0,p.Z)((0,u.Z)().mark((function n(){var e;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,v(!0),x(!1),n.next=5,(0,j._6)(D,H);case 5:if(0!==(e=n.sent).length){n.next=8;break}return n.abrupt("return",P.ZP.error("Opps, there are no pictures according to your request... "));case 8:a((0,s.Z)(e.results)),S(e.total_pages<=100?e.total_pages:100),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),"ERR_CANCELED"!==n.t0.code&&x(!0);case 15:return n.prev=15,v(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,12,15,18]])})))).apply(this,arguments)}""!==D&&function(){n.apply(this,arguments)}()}),[D,H]);return(0,y.jsxs)("div",{children:[(0,y.jsx)(w,{query:D,onSubmit:function(n){n.preventDefault(),""===n.target.elements.query.value.trim()?P.ZP.error("You have not entered anything!"):(R({query:"".concat(Date.now(),"/").concat(n.target.elements.query.value),page:1}),S(1),a([]))}}),r.length>0&&!g&&(0,y.jsx)(l.a,{items:r}),b>=2&&!g&&(0,y.jsx)(z.t,{currentPage:H,totalPages:b,onPageChange:function(n){R((function(e){return e.set("page",n),e}))}}),(0,y.jsx)(P.x7,{position:"top-right"}),g&&(0,y.jsx)(M.a,{}),c&&(0,y.jsx)("div",{children:"OPPS! THERE WAS AN ERROR!"})]})}}}]);
//# sourceMappingURL=61.a2974f38.chunk.js.map