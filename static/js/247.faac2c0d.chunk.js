"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{1687:function(n,t,r){r.d(t,{Hx:function(){return d},KJ:function(){return s},Mc:function(){return o},_6:function(){return u},az:function(){return p},uV:function(){return f}});var e=r(4165),a=r(5861),c=r(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="9172c4d325a71ee6e99b7941097e9eed",u=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(t,r){var a;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?query=".concat(t.split("/")[1],"&api_key=").concat(i,"&page=").concat(r));case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(t){var r;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(t){var r;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(i,"&page=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(t){var r;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(t){var r;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(t){var r;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},1247:function(n,t,r){r.r(t),r.d(t,{default:function(){return h}});var e=r(4165),a=r(3433),c=r(5861),i=r(9439),u=r(1687),o=r(2791),s=r(7689),p=r(5811),f=r(9263),d=r(184);function h(){var n=(0,s.UO)().movieId,t=(0,o.useState)([]),r=(0,i.Z)(t,2),h=r[0],x=r[1],l=(0,o.useState)(!1),v=(0,i.Z)(l,2),Z=v[0],m=v[1],g=(0,o.useState)(!1),b=(0,i.Z)(g,2),w=b[0],k=b[1];(0,o.useEffect)((function(){function t(){return(t=(0,c.Z)((0,e.Z)().mark((function n(t){var r;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,k(!0),m(!1),n.next=5,(0,u.uV)(t);case 5:r=n.sent,x((0,a.Z)(r.cast)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),m(!0);case 12:return n.prev=12,k(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(n){t.apply(this,arguments)}(n)}),[n]);return(0,d.jsxs)("div",{children:[h.length>0&&!w&&(0,d.jsxs)("section",{children:[(0,d.jsx)(p.px,{children:"Cast"}),(0,d.jsx)(p.ds,{children:h.map((function(n){return(0,d.jsxs)(p.dh,{children:[(0,d.jsx)(p.R5,{src:n.profile_path?"https://image.tmdb.org/t/p/w500".concat(n.profile_path):"https://via.placeholder.com/400x600.png?text=Poster+Not+Available",alt:n.name,width:"282px"}),(0,d.jsx)(p.lC,{children:(0,d.jsx)(p.es,{children:n.name})})]},n.id)}))})]}),w&&(0,d.jsx)(f.a,{}),Z&&(0,d.jsx)("div",{children:"OPPS! THERE WAS AN ERROR!"})]})}},5811:function(n,t,r){r.d(t,{R5:function(){return x},dh:function(){return h},ds:function(){return d},es:function(){return v},lC:function(){return l},px:function(){return f}});var e,a,c,i,u,o,s=r(168),p=r(5867),f=p.ZP.h2(e||(e=(0,s.Z)(["\n  color: #c8c5c5;\n  font-size: 40px;\n  font-weight: 400;\n  line-height: normal;\n  margin-bottom: 32px;\n"]))),d=p.ZP.ul(a||(a=(0,s.Z)(["\n  display: grid;\n  max-width: calc(100vw - 72px);\n  grid-template-columns: repeat(auto-fill, minmax(282px, 1fr));\n  grid-gap: 24px;\n  margin-top: 0;\n  margin-bottom: 48px;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),h=p.ZP.li(c||(c=(0,s.Z)(["\n  border-radius: 8px;\n  background: #413b3b;\n  box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.25);\n\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),x=p.ZP.img(i||(i=(0,s.Z)(["\n  width: 100%;\n  height: 400px;\n  object-fit: cover;\n  border-radius: 8px;\n"]))),l=p.ZP.div(u||(u=(0,s.Z)(["\n  padding: 8px 8px 12px 8px;\n"]))),v=p.ZP.h2(o||(o=(0,s.Z)(["\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 1.04;\n  margin-bottom: 4px;\n"])))}}]);
//# sourceMappingURL=247.faac2c0d.chunk.js.map