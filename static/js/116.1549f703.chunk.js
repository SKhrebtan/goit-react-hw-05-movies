"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[116],{8442:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(3433),o=n(9439),c=n(2791);var a=n.p+"static/media/empty.ade49d80dfa5b6510f24.jpg",u=n(6471),i=n(3975),s=n(184),f=(0,c.lazy)((function(){return n.e(164).then(n.bind(n,3164))})),d=(0,c.lazy)((function(){return n.e(491).then(n.bind(n,5491))})),l=function(){var e=(0,c.useState)(""),t=(0,o.Z)(e,2),n=t[0],l=t[1],p=(0,c.useState)([]),m=(0,o.Z)(p,2),h=m[0],j=m[1],v=(0,c.useState)(null),b=(0,o.Z)(v,2),g=b[0],k=b[1],y=(0,c.useState)("idle"),x=(0,o.Z)(y,2),_=x[0],w=x[1];return(0,c.useEffect)((function(){n&&(console.log(n),w("pending"),function(e){return fetch("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=").concat("7704615e0d5baf851bf04ec2239749fe"))}(n).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a, \u043f\u043e\u0432\u0442\u043e\u0440\u0456\u0442\u044c \u0441\u043f\u0440\u043e\u0431\u0443"))})).then((function(e){var t=e.results,n=e.total_results;j((0,r.Z)(t),w((function(e){return 0===n?"empty":"resolved"})))})).catch((function(e){k(e),w("rejected")})))}),[n]),(0,s.jsxs)("div",{children:[(0,s.jsx)(f,{onSubmit:function(e){l(e)}}),"pending"===_&&(0,s.jsx)(i.Rf,{}),"empty"===_&&(0,s.jsx)("img",{src:a,alt:"empty"}),"error"===_&&(0,s.jsx)("img",{src:u,alt:g}),"resolved"===_&&(0,s.jsx)(d,{movies:h})]})}},6471:function(e,t,n){e.exports=n.p+"static/media/error.4472dd823a5a4e4f875f.jpg"}}]);
//# sourceMappingURL=116.1549f703.chunk.js.map