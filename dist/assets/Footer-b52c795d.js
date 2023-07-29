import{o as b,G as h}from"./firebase.config-a847182b.js";import{r as v,j as g}from"./index-72685862.js";import{n as y}from"./emotion-styled.browser.esm-e07269da.js";import{f as x}from"./mixins-0b8905f2.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function p(n,u,r,a){function i(t){return t instanceof r?t:new r(function(o){o(t)})}return new(r||(r=Promise))(function(t,o){function s(l){try{e(a.next(l))}catch(f){o(f)}}function c(l){try{e(a.throw(l))}catch(f){o(f)}}function e(l){l.done?t(l.value):i(l.value).then(s,c)}e((a=a.apply(n,u||[])).next())})}function w(n,u){var r={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},a,i,t,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(l){return c([e,l])}}function c(e){if(a)throw new TypeError("Generator is already executing.");for(;r;)try{if(a=1,i&&(t=e[0]&2?i.return:e[0]?i.throw||((t=i.return)&&t.call(i),0):i.next)&&!(t=t.call(i,e[1])).done)return t;switch(i=0,t&&(e=[e[0]&2,t.value]),e[0]){case 0:case 1:t=e;break;case 4:return r.label++,{value:e[1],done:!1};case 5:r.label++,i=e[1],e=[0];continue;case 7:e=r.ops.pop(),r.trys.pop();continue;default:if(t=r.trys,!(t=t.length>0&&t[t.length-1])&&(e[0]===6||e[0]===2)){r=0;continue}if(e[0]===3&&(!t||e[1]>t[0]&&e[1]<t[3])){r.label=e[1];break}if(e[0]===6&&r.label<t[1]){r.label=t[1],t=e;break}if(t&&r.label<t[2]){r.label=t[2],r.ops.push(e);break}t[2]&&r.ops.pop(),r.trys.pop();continue}e=u.call(n,r)}catch(l){e=[6,l],i=0}finally{a=t=0}if(e[0]&5)throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var d=function(){return d=Object.assign||function(u){for(var r,a=1,i=arguments.length;a<i;a++){r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(u[t]=r[t])}return u},d.apply(this,arguments)},m=function(n){return{loading:n==null,value:n}},z=function(){return function(n,u){switch(u.type){case"error":return d(d({},n),{error:u.error,loading:!1,value:void 0});case"reset":return m(u.defaultValue);case"value":return d(d({},n),{error:void 0,loading:!1,value:u.value});default:return n}}},H=function(n){var u=n?n():void 0,r=v.useReducer(z(),m(u)),a=r[0],i=r[1],t=v.useCallback(function(){var c=n?n():void 0;i({type:"reset",defaultValue:c})},[n]),o=v.useCallback(function(c){i({type:"error",error:c})},[]),s=v.useCallback(function(c){i({type:"value",value:c})},[]);return v.useMemo(function(){return{error:a.error,loading:a.loading,reset:t,setError:o,setValue:s,value:a.value}},[a.error,a.loading,t,o,s,a.value])},_=function(n,u){var r=H(function(){return n.currentUser}),a=r.error,i=r.loading,t=r.setError,o=r.setValue,s=r.value;return v.useEffect(function(){var c=b(n,function(e){return p(void 0,void 0,void 0,function(){var l;return w(this,function(f){switch(f.label){case 0:if(!(u!=null&&u.onUserChanged))return[3,4];f.label=1;case 1:return f.trys.push([1,3,,4]),[4,u.onUserChanged(e)];case 2:return f.sent(),[3,4];case 3:return l=f.sent(),t(l),[3,4];case 4:return o(e),[2]}})})},t);return function(){c()}},[n]),[s,i,a]};function B(n){return h({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9z"}}]}]})(n)}function F(n){return h({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 22H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12h4v4a3 3 0 0 1-3 3zm-1-5v2a1 1 0 0 0 2 0v-2h-2zM6 7v2h8V7H6zm0 4v2h8v-2H6zm0 4v2h5v-2H6z"}}]}]})(n)}function L(n){return h({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"}}]}]})(n)}function C(n){return h({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5zm10-6l5-4-5-4v3H9v2h6v3z"}}]}]})(n)}function S(n){return h({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 14v8H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm9 4h1v5h-8v-5h1v-1a3 3 0 0 1 6 0v1zm-2 0v-1a1 1 0 0 0-2 0v1h2z"}}]}]})(n)}const M=y.div`
  ${x}

  gap: 5px;
  font-size: 12px;
  margin-bottom: 15px;

  a {
    text-decoration: underline;
    color: #0057b8;

    &:hover {
      background-color: #ffd700;
    }
  }
`,V=()=>g.jsx("footer",{children:g.jsxs(M,{children:[g.jsx("p",{children:"Розроблено"}),g.jsx("a",{href:"mailto:smisyuk@gmail.com",children:"smisyuk@gmail.com"})]})});export{V as F,F as R,S as a,L as b,B as c,C as d,_ as u};
