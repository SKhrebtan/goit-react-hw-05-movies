/*! For license information please see 656.a2452d89.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[656],{9656:function(t,n,e){e.r(n),e.d(n,{default:function(){return S}});var r=e(9439),o=e(2791),i=e(7689),a=e(5861),c=e(2007),u=e.n(c);function l(){l=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,r=Object.defineProperty||function(t,n,e){t[n]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{u({},"")}catch(Z){u=function(t,n,e){return t[n]=e}}function s(t,n,e,o){var i=n&&n.prototype instanceof p?n:p,a=Object.create(i.prototype),c=new _(o||[]);return r(a,"_invoke",{value:k(t,e,c)}),a}function h(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(Z){return{type:"throw",arg:Z}}}t.wrap=s;var f={};function p(){}function d(){}function v(){}var y={};u(y,i,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(O([])));m&&m!==n&&e.call(m,i)&&(y=m);var x=v.prototype=p.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(n){u(t,n,(function(t){return this._invoke(n,t)}))}))}function w(t,n){function o(r,i,a,c){var u=h(t[r],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&e.call(s,"__await")?n.resolve(s.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):n.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;r(this,"_invoke",{value:function(t,e){function r(){return new n((function(n,r){o(t,e,n,r)}))}return i=i?i.then(r,r):r()}})}function k(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===f)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var u=h(t,n,e);if("normal"===u.type){if(r=e.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r="completed",e.method="throw",e.arg=u.arg)}}}function j(t,n){var e=n.method,r=t.iterator[e];if(void 0===r)return n.delegate=null,"throw"===e&&t.iterator.return&&(n.method="return",n.arg=void 0,j(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),f;var o=h(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,f;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,f):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function L(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function E(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function O(t){if(t||""===t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return d.prototype=v,r(x,"constructor",{value:v,configurable:!0}),r(v,"constructor",{value:d,configurable:!0}),d.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===d||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},b(w.prototype),u(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var a=new w(s(n,e,r,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(x),u(x,c,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=O,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),f},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),E(e),f}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;E(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:O(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},t}function s(t){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)(l().mark((function t(n){var e,r;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=7704615e0d5baf851bf04ec2239749fe"));case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}s.propTypes={id:u().string};var f,p,d,v,y,g,m=e(4324),x=e(168),b=e(5867),w=e(1087),k=(0,b.ZP)(w.rU)(f||(f=(0,x.Z)(["\nborder: none;\nfont-size: 18px;\ndisplay: flex;\npadding-left: 20px;\npadding-right: 20px;\njustify-content: space-between;\nalign-items: center;\nbackground-color: black;\ncolor: orange;\ntext-decoration: none;\nborder-radius: 10px;\nwidth: 120px;\nheight: 40px;\nmargin-bottom: 10px;\ntransition: all 300ms linear;\n&:hover,\n:focus {\nbackground-color: orange;\ncolor: black;\n}\nsvg {\n    color: orange;\n    transition: all 400ms linear;\n}\n&:hover svg{\n    color: black;\n}\n"]))),j=(0,b.ZP)(w.OL)(p||(p=(0,x.Z)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nborder: 2px solid orange;\nwidth: 100px;\nheight: 35px;\nbackground-color: black;\ncolor: orange;\nborder-radius: 15px;\noutline: none;\ntext-decoration: none;\ntransition: all 300ms linear;\n\n&:hover,\n:focus {\n    background-color: orange;\n    border-color: black;\n    color: black\n}\n"]))),L=b.ZP.h2(d||(d=(0,x.Z)(["\ncolor: orange;\nfont-family: Robato;\n"]))),E=b.ZP.div(v||(v=(0,x.Z)(["\npadding:20px;\n"]))),_=b.ZP.ul(y||(y=(0,x.Z)(["\nlist-style: none;\ndisplay: flex;\ngap: 30px;\nmargin: 0;\npadding: 0;\n"]))),O=b.ZP.li(g||(g=(0,x.Z)(["\n// display: flex;\n// justify-content: center;\n// align-items: center;\n// border: 1px solid orange;\n// width: 100px;\n// height: 35px;\n// background-color: black;\n// color: orange;\n// border-radius: 15px;\n// outline: none;\n// transition: all 300ms linear;\n\n// &:hover,\n// :focus {\n//     background-color: orange;\n//     border-color: black;\n// }\n\n// &:hover a,\n// :focus a {\n//     color: black;\n// }\n"]))),Z=e(184),P=(0,o.lazy)((function(){return e.e(636).then(e.bind(e,1636))})),S=function(){var t,n,e=(0,o.useState)({}),a=(0,r.Z)(e,2),c=a[0],u=a[1],l=(0,i.UO)().movieId,h=(0,i.TH)(),f=(0,o.useRef)(null!==(t=null===(n=h.state)||void 0===n?void 0:n.from)&&void 0!==t?t:"/movies");return(0,o.useEffect)((function(){s(l).then((function(t){return u(t)}))}),[l]),(0,Z.jsxs)(E,{children:[(0,Z.jsxs)(k,{to:f.current,children:["Back",(0,Z.jsx)(m.wFh,{size:30})]}),(0,Z.jsx)(P,{movie:c}),(0,Z.jsx)(L,{children:"Additional information"}),(0,Z.jsxs)(_,{children:[(0,Z.jsx)(O,{children:(0,Z.jsx)(j,{to:"cast",children:"Cast"})}),(0,Z.jsx)(O,{children:(0,Z.jsx)(j,{to:"reviews",children:"Reviews"})})]}),(0,Z.jsx)(o.Suspense,{fallback:"isLoading",children:(0,Z.jsx)(i.j3,{})})]})}}}]);
//# sourceMappingURL=656.a2452d89.chunk.js.map