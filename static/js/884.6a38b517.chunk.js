"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{884:function(e,n,t){t.r(n);var r=t(439),i=t(861),c=t(757),o=t.n(c),s=t(791),a=t(689),u=t(87),f=t(184),h=(0,s.lazy)((function(){return t.e(75).then(t.bind(t,75))}));function l(){return(l=(0,i.Z)(o().mark((function e(n){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=7704615e0d5baf851bf04ec2239749fe"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.default=function(e){e.firstsearch;var n,t,i=(0,s.useState)({}),c=(0,r.Z)(i,2),o=c[0],d=c[1],v=(0,a.UO)().movieId,p=(0,a.TH)(),m=(0,s.useRef)(null!==(n=null===(t=p.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/movies").current,x=m.pathname,j=m.search;return(0,s.useEffect)((function(){(function(e){return l.apply(this,arguments)})(v).then((function(e){return d(e)}))}),[v]),(0,f.jsxs)("div",{children:[(0,f.jsx)(u.OL,{to:"".concat(x).concat(j),children:"Back to the Movies"}),(0,f.jsx)(h,{movie:o}),(0,f.jsx)("h2",{children:"Additional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(u.OL,{to:"cast",children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(u.OL,{to:"reviews",children:"Reviews"})})]}),(0,f.jsx)(s.Suspense,{fallback:"isLoading",children:(0,f.jsx)(a.j3,{})})]})}},861:function(e,n,t){function r(e,n,t,r,i,c,o){try{var s=e[c](o),a=s.value}catch(u){return void t(u)}s.done?n(a):Promise.resolve(a).then(r,i)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(i,c){var o=e.apply(n,t);function s(e){r(o,i,c,s,a,"next",e)}function a(e){r(o,i,c,s,a,"throw",e)}s(void 0)}))}}t.d(n,{Z:function(){return i}})}}]);
//# sourceMappingURL=884.6a38b517.chunk.js.map