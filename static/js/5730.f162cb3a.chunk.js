(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[5730],{95730:(t,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>b});var e=r(47313),o=r(59204),u=r(73763),i=r(69867),c=r(83773);function a(t){return new Promise(((n,r)=>{const e=new Image;e.onload=function(){n(e)},e.onerror=e.onabort=function(){r(t)},e.src=t}))}function f(t,n){const[r,o]=(0,e.useState)(!1);return(0,e.useEffect)((()=>{let r=!1;return setTimeout((()=>{!async function(){if(console.log("_"),r)return;const e=[];for(const r of t)n[r].file&&e.push(a(n[r].file));await Promise.all(e),r||o(!0)}()}),4e3),()=>{r=!0}}),[t,n]),{imagesPreloaded:r}}var l=r(46417);const s=(0,e.lazy)((()=>Promise.all([r.e(182),r.e(2744)]).then(r.bind(r,92744)))),p=(0,e.lazy)((()=>Promise.all([r.e(6390),r.e(816),r.e(510),r.e(182),r.e(2233),r.e(4498)]).then(r.bind(r,71571)))),d=(0,e.lazy)((()=>Promise.all([r.e(8215),r.e(510),r.e(182),r.e(9885),r.e(9395),r.e(3298),r.e(7462)]).then(r.bind(r,57462)))),y=(0,e.lazy)((()=>Promise.all([r.e(816),r.e(6189)]).then(r.bind(r,6189)))),h=(0,c.componentWillAppendToBody)((t=>{let{children:n}=t;return n})),v=t=>{const{imagesPreloaded:n}=f(t.postData.postData,t.postData.completeDataObject);return t.loader&&null!=t.loader.loader&&null==t.error.errorWithMessage&&!t.error.planLimit?(0,l.jsx)(e.Suspense,{fallback:null,children:(0,l.jsx)(s,{...t})}):null!=t.error.errorWithMessage?(0,l.jsx)(l.Fragment,{children:"ERROR"}):null};class m extends e.PureComponent{componentDidMount(){const{wallID:t,appData:n}=this.props,r=new URLSearchParams(window.location.search).get("onsite-upload"),e=n.wall;this.props.getThemeDataWithWallID(t,null),this.props.heightEvent(window.location.href,t),"true"==r&&this.props.showPopUP({type:"submit-pic",card:{},personalization:null===e||void 0===e?void 0:e.Personalization,ThemeRule:null===e||void 0===e?void 0:e.ThemeRule,UserRule:null===e||void 0===e?void 0:e.UserRule,wall:e})}render(){const{appData:t,modalPop:n}=this.props,r=t&&t.error&&t.error.themeError?t.error.themeError.error_code:0,o=!(!(t&&t.postData&&t.postData.postData&&0==t.postData.postData.length)||window.isEditor);return(0,l.jsx)("div",{className:"taggshopContainer",children:o?"":r?(0,l.jsx)(e.Suspense,{fallback:null,children:(0,l.jsx)(y,{wall:t.wall,errorData:t.error})}):(0,l.jsxs)("div",{className:"taggshopContainer1",children:[(0,l.jsx)(v,{...t}),n.isShowPopUp&&(0,l.jsx)(i.Z,{children:(0,l.jsx)(e.Suspense,{fallback:null,children:(0,l.jsx)(h,{children:(0,l.jsx)(p,{data:n.data})})})}),n.isShowReelPopUp&&(0,l.jsx)(i.Z,{children:(0,l.jsx)(e.Suspense,{fallback:null,children:(0,l.jsx)(h,{children:(0,l.jsx)(i.Z,{children:(0,l.jsx)(d,{data:n.data})})})})})]})})}}const b=(0,o.$j)((t=>({appData:t.appData,modalPop:t.modalPop})),(t=>({getThemeDataWithWallID:(n,r)=>t((0,u.fD)(n,r)),heightEvent:(n,r)=>t((0,u.Du)(n,r)),showPopUP:n=>t((0,u.Bm)(n))})))(m)},69867:(t,n,r)=>{"use strict";r.d(n,{Z:()=>i});var e=r(47313),o=r(46417);class u extends e.Component{constructor(t){super(t),this.state={hasError:!1}}static getDerivedStateFromError(t){return{hasError:!0}}componentDidCatch(t,n){console.log("error",t,n)}render(){return this.state.hasError?(0,o.jsx)("h1",{}):this.props.children}}const i=u},83773:(t,n,r)=>{var e,o;window,t.exports=(e=r(1168),o=r(47313),function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/",r(r.s=9)}([function(t,n,r){!function(t){"use strict";function n(t,r,e){return void 0===r?function(r,e){return n(t,r,e)}:void 0===e?function(e){return n(t,r,e)}:void 0!==e[t]?e[t](r):void 0}function r(t){return function(n,r){return void 0===r?function(r){return t(n,r)}:t(n,r)}}function e(t){return function(n,e,o){return void 0===e?r((function(r,e){return t(n,r,e)})):void 0===o?function(r){return t(n,e,r)}:t(n,e,o)}}var o=e((function(t,n,r){switch(t){case"+":return n+r;case"-":return n-r;case"/":return n/r;case"*":return n*r;case"%":return n%r}}));function u(t,n){return void 0===n?function(n){return u(t,n)}:void 0!==n[t]?n[t]():void 0}var i=e((function(t,n,r){return r.concat().map((function(e,o){return o===n?t(r[n]):e}))})),c=r((function(t,n){if(void 0===n.length)return function(t,n){var r={};for(var e in n)t(n[e])&&(r[e]=n[e]);return r}(t,n);for(var r=-1,e=0,o=n.length,u=[];++r<o;){var i=n[r];t(i)&&(u[e++]=i)}return u})),a=r((function(t,n){return c(t,n).length===n.length})),f=r((function(t,n){for(var r=0;r<n.length;){if(t(n[r]))return!0;r++}return!1})),l=r((function(t,n){if("string"==typeof n)return""+n+t;var r=n.concat();return r.push(t),r})),s=r((function(t,n){return function(r){return t(r)&&n(r)}}));function p(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(t){for(var r=n.slice();r.length>0;)t=r.pop()(t);return t}}var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y=(function(){function t(t){this.value=t}function n(n){var r,e;function o(r,e){try{var i=n[r](e),c=i.value;c instanceof t?Promise.resolve(c.value).then((function(t){o("next",t)}),(function(t){o("throw",t)})):u(i.done?"return":"normal",i.value)}catch(t){u("throw",t)}}function u(t,n){switch(t){case"return":r.resolve({value:n,done:!0});break;case"throw":r.reject(n);break;default:r.resolve({value:n,done:!1})}(r=r.next)?o(r.key,r.arg):e=null}this._invoke=function(t,n){return new Promise((function(u,i){var c={key:t,arg:n,resolve:u,reject:i,next:null};e?e=e.next=c:(r=e=c,o(t,n))}))},"function"!=typeof n.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(n.prototype[Symbol.asyncIterator]=function(){return this}),n.prototype.next=function(t){return this._invoke("next",t)},n.prototype.throw=function(t){return this._invoke("throw",t)},n.prototype.return=function(t){return this._invoke("return",t)}}(),function(t){if(Array.isArray(t)){for(var n=0,r=Array(t.length);n<t.length;n++)r[n]=t[n];return r}return Array.from(t)});function h(t){var n=void 0===t?"undefined":d(t);if(null===t)return"Null";if(void 0===t)return"Undefined";if("boolean"===n)return"Boolean";if("number"===n)return"Number";if("string"===n)return"String";if(Array.isArray(t))return"Array";if(t instanceof RegExp)return"RegExp";var r=t.toString();return r.startsWith("async")?"Async":"[object Promise]"===r?"Promise":r.includes("function")||r.includes("=>")?"Function":"Object"}function v(t,n){if(1===arguments.length)return function(n){return v(t,n)};if(t===n)return!0;var r=h(t);if(r!==h(n))return!1;if("Array"===r){var e=Array.from(t),o=Array.from(n);return e.sort().toString()===o.sort().toString()}if("Object"===r){var u=Object.keys(t);if(u.length===Object.keys(n).length){if(0===u.length)return!0;var i=!0;return u.map((function(r){if(i){var e=h(t[r]);e===h(n[r])?"Object"===e?Object.keys(t[r]).length===Object.keys(n[r]).length?0!==Object.keys(t[r]).length&&(v(t[r],n[r])||(i=!1)):i=!1:v(t[r],n[r])||(i=!1):i=!1}})),i}}return!1}var m=r((function(t,n){for(var r=-1,e=!1;++r<n.length&&!e;)v(n[r],t)&&(e=!0);return e}));function b(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return function(){for(var r=arguments.length,e=Array(r),o=0;o<r;o++)e[o]=arguments[o];return(u=[].concat(y(n),e)).length>=t.length?t.apply(void 0,y(u)):b(t,u);var u}}function g(t,n){return 1===arguments.length?function(n){return g(t,n)}:null==n||!0===Number.isNaN(n)?t:n}var j=r((function(t,n){return n.slice(t)})),O=r((function(t,n){return n.slice(0,-t)})),w=r((function(t,n){return function(r){return t(r)||n(r)}})),P=r((function(t,n){return n.find(t)})),x=r((function(t,n){for(var r=n.length,e=-1;++e<r;)if(t(n[e]))return e;return-1})),S=r((function(t,n){return t(n),n})),k=r((function(t,n){if(void 0===n.length)return function(t,n){var r={};for(var e in n)r[e]=t(n[e]);return r}(t,n);for(var r=-1,e=n.length,o=Array(e);++r<e;)o[r]=t(n[r]);return o})),C=r((function(t,n){return k(S(t),n)})),E=r((function(t,n){return void 0!==n[t]})),_=e((function(t,n,r){return function(e){return!0===t(e)?n(e):r(e)}})),A=r((function(t,n){for(var r=-1,e=n.length;++r<e;)if(n[r]===t)return r;return-1}));function R(t,n,r){var e=-1,o=t.length;(r=r>o?o:r)<0&&(r+=o),o=n>r?0:r-n>>>0,n>>>=0;for(var u=Array(o);++e<o;)u[e]=t[e+n];return u}var D=r((function(t,n){var r=n.match(t);return null===r?[]:r})),T=r((function(t,n){return Object.assign({},t,n)}));function I(t,n){if(1===arguments.length)return function(n){return I(t,n)};if(null!=n){var r=n,e=0;for("string"==typeof t&&(t=t.split("."));e<t.length;){if(null==r)return;r=r[t[e]],e++}return r}}var W=b((function(t,n,r){return g(t,I(n,r))})),U=r((function(t,n){var r=[];return k((function(n){void 0!==n[t]&&r.push(n[t])}),n),r})),q=r((function(t,n){if("string"==typeof n)return""+t+n;var r=n.concat();return r.unshift(t),r})),M=r((function(t,n){return n[t]})),N=e((function(t,n,r){return r[t]===n}));function L(t,n){for(var r=[],e=t;e<n;e++)r.push(e);return r}var B=e((function(t,n,r){return r.reduce(t,n)})),z=r((function(t,n){return Array(n).fill(t)})),F=e((function(t,n,r){return r.replace(t,n)})),V=r((function(t,n){return n.concat().sort(t)})),Z=r((function(t,n){return n.concat().sort((function(n,r){var e=t(n),o=t(r);return e<o?-1:e>o?1:0}))})),$=r((function(t,n){return n.split(t)})),H=r((function(t,n){t=t>1?t:1;for(var r=[],e=0;e<n.length;)r.push(n.slice(e,e+=t));return r})),Y=r((function(t,n){return"string"==typeof n?n.slice(0,t):R(n,0,t)})),G=r((function(t,n){var r=n.length;return t=t>r?r:t,"string"==typeof n?n.slice(r-t):R(n,t=r-t,r)})),J=r((function(t,n){return-1!==n.search(t)})),K=r((function(t,n){return k(t,L(0,n))}));function Q(t,n){return 1===arguments.length?function(n){return Q(t,n)}:h(n)!==h(t)?t:n}var X=b((function(t,n,r){return Q(t,I(n,r))})),tt=e((function(t,n,r){return r.concat().fill(n,t,t+1)})),nt=o("+"),rt=function t(n,r,e){return void 0===r?function(r,e){return t(n,r,e)}:void 0===e?function(e){return t(n,r,e)}:void 0!==r[n]?r[n](e):void 0}("concat"),et=o("/"),ot=n("endsWith"),ut=n("includes"),it=n("join"),ct=n("lastIndexOf"),at=function t(n,r){return void 0===r?function(r){return t(n,r)}:r[n]}("length"),ft=o("%"),lt=o("*"),st=n("padEnd"),pt=n("padStart"),dt=u("reverse"),yt=n("startsWith"),ht=o("-"),vt=u("toLowerCase"),mt=u("toString"),bt=u("toUpperCase"),gt=u("trim");t.add=nt,t.always=function(t){return function(){return t}},t.complement=function(t){return function(n){return!t(n)}},t.concat=rt,t.divide=et,t.endsWith=ot,t.F=function(){return!1},t.identity=function(t){return t},t.includes=ut,t.join=it,t.lastIndexOf=ct,t.length=at,t.modulo=ft,t.multiply=lt,t.not=function(t){return!t},t.padEnd=st,t.padStart=pt,t.reverse=dt,t.startsWith=yt,t.subtract=ht,t.T=function(){return!0},t.toLower=vt,t.toString=mt,t.toUpper=bt,t.trim=gt,t.addIndex=function(t){return function(n){for(var r=0,e=function(){for(var t=arguments.length,e=Array(t),o=0;o<t;o++)e[o]=arguments[o];return n.apply(null,[].concat(e,[r++]))},o=arguments.length,u=Array(o>1?o-1:0),i=1;i<o;i++)u[i-1]=arguments[i];return t.apply(null,[e].concat(u))}},t.adjust=i,t.all=a,t.allPass=function t(n,r){return 1===arguments.length?function(r){return t(n,r)}:!f((function(t){return!t(r)}),n)},t.anyPass=function t(n,r){return 1===arguments.length?function(r){return t(n,r)}:f((function(t){return t(r)}))(n)},t.any=f,t.append=l,t.both=s,t.compose=p,t.contains=m,t.curry=b,t.dec=function(t){return t-1},t.defaultTo=g,t.drop=j,t.dropLast=O,t.either=w,t.inc=function(t){return t+1},t.equals=v,t.filter=c,t.find=P,t.findIndex=x,t.flatten=function t(n,r){r=void 0===r?[]:r;for(var e=0;e<n.length;e++)Array.isArray(n[e])?t(n[e],r):r.push(n[e]);return r},t.flip=function(t){return function(t){return function(){for(var n=arguments.length,r=Array(n),e=0;e<n;e++)r[e]=arguments[e];return 1===r.length?function(n){return t(n,r[0])}:2===r.length?t(r[1],r[0]):void 0}}(t)},t.forEach=C,t.has=E,t.head=function(t){return"string"==typeof t?t[0]||"":t[0]},t.ifElse=_,t.isNil=function(t){return null==t},t.indexOf=A,t.init=function(t){return"string"==typeof t?t.slice(0,-1):t.length?R(t,0,-1):[]},t.last=function(t){return"string"==typeof t?t[t.length-1]||"":t[t.length-1]},t.map=k,t.match=D,t.merge=T,t.omit=function t(n,r){if(1===arguments.length)return function(r){return t(n,r)};if(null!=r){"string"==typeof n&&(n=n.split(",").map((function(t){return t.trim()})));var e={};for(var o in r)n.includes(o)||(e[o]=r[o]);return e}},t.partialCurry=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(r){return"Async"===h(t)||"Promise"===h(t)?new Promise((function(e,o){t(T(r,n)).then(e).catch(o)})):t(T(r,n))}},t.path=I,t.pathOr=W,t.pick=function t(n,r){if(1===arguments.length)return function(r){return t(n,r)};if("Object"===h(r)){"String"===h(n)&&(n=n.split(",").map((function(t){return t.trim()})));for(var e={},o=0;o<n.length;)n[o]in r&&(e[n[o]]=r[n[o]]),o++;return e}},t.pipe=function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return p.apply(void 0,y(n.reverse()))},t.pluck=U,t.prepend=q,t.prop=M,t.propEq=N,t.range=L,t.reduce=B,t.repeat=z,t.replace=F,t.sort=V,t.sortBy=Z,t.split=$,t.splitEvery=H,t.tap=S,t.tail=function(t){return j(1,t)},t.take=Y,t.takeLast=G,t.test=J,t.times=K,t.type=h,t.typedPathOr=X,t.typedDefaultTo=Q,t.uniq=function(t){for(var n=-1,r=[];++n<t.length;){var e=t[n];m(e,r)||r.push(e)}return r},t.update=tt,t.values=function(t){var n=[];for(var r in t)n.push(t[r]);return n},Object.defineProperty(t,"__esModule",{value:!0})}(n)},function(t,n){t.exports=e},function(t,n){t.exports=o},function(t,n,r){t.exports=r(7)()},function(t,n,r){var e=r(5),o=r(6);t.exports=function(t,n,r){var u=n&&r||0;"string"==typeof t&&(n="binary"===t?new Array(16):null,t=null);var i=(t=t||{}).random||(t.rng||e)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,n)for(var c=0;c<16;++c)n[u+c]=i[c];return n||o(i)}},function(t,n){var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(r){var e=new Uint8Array(16);t.exports=function(){return r(e),e}}else{var o=new Array(16);t.exports=function(){for(var t,n=0;n<16;n++)0==(3&n)&&(t=4294967296*Math.random()),o[n]=t>>>((3&n)<<3)&255;return o}}},function(t,n){for(var r=[],e=0;e<256;++e)r[e]=(e+256).toString(16).substr(1);t.exports=function(t,n){var e=n||0,o=r;return[o[t[e++]],o[t[e++]],o[t[e++]],o[t[e++]],"-",o[t[e++]],o[t[e++]],"-",o[t[e++]],o[t[e++]],"-",o[t[e++]],o[t[e++]],"-",o[t[e++]],o[t[e++]],o[t[e++]],o[t[e++]],o[t[e++]],o[t[e++]]].join("")}},function(t,n,r){"use strict";var e=r(8);function o(){}function u(){}u.resetWarningCache=o,t.exports=function(){function t(t,n,r,o,u,i){if(i!==e){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return t}t.isRequired=t;var r={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:u,resetWarningCache:o};return r.PropTypes=r,r}},function(t,n,r){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,n,r){"use strict";r.r(n),r.d(n,"unMountComponentWillAppendToBody",(function(){return M})),r.d(n,"componentWillAppendToBody",(function(){return N}));var e=r(4),o=r.n(e),u=r(2),i=r.n(u),c=r(1),a=r.n(c),f=r(3),l=r.n(f);function s(t){return document.querySelector(t)}var p=r(0);function d(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(t){if("string"==typeof t)return y(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function h(t){return Object(p.reduce)((function(n,r){return n.push(t[r]),n}),[],(n=t,Object.keys(n)));var n}function v(t,n){var r=s(t);if(r)return a.a.render(i.a.createElement("span",null,n),r)}function m(t,n){return Object(p.compose)((e=[n],(r=v).bind.apply(r,[null].concat(d(e)))),Object(p.reduce)((function(t,n){return t.push(n.element),t}),[]),Object(p.filter)(Object(p.propEq)("selector",n)))(h(t));var r,e}function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function j(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function O(t,n){return(O=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function w(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,e=x(t);if(n){var o=x(this).constructor;r=Reflect.construct(e,arguments,o)}else r=e.apply(this,arguments);return P(this,r)}}function P(t,n){return!n||"object"!==b(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function x(t){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function S(t){var n=function(n){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&O(t,n)}(i,n);var r,e,o,u=w(i);function i(){return g(this,i),u.apply(this,arguments)}return r=i,(e=[{key:"getChildContext",value:function(){return t}},{key:"render",value:function(){return this.props.children}}])&&j(r.prototype,e),o&&j(r,o),i}(i.a.Component);return n.propTypes={children:l.a.any.isRequired},n.childContextTypes={},Object.keys(t).forEach((function(t){n.childContextTypes[t]=l.a.any.isRequired})),n}function k(t){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function C(t,n){if(null==t)return{};var r,e,o=function(t,n){if(null==t)return{};var r,e,o={},u=Object.keys(t);for(e=0;e<u.length;e++)r=u[e],n.indexOf(r)>=0||(o[r]=t[r]);return o}(t,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(e=0;e<u.length;e++)r=u[e],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function E(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function _(t,n,r){return n&&E(t.prototype,n),r&&E(t,r),t}function A(t,n){return(A=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function R(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,e=T(t);if(n){var o=T(this).constructor;r=Reflect.construct(e,arguments,o)}else r=e.apply(this,arguments);return D(this,r)}}function D(t,n){return!n||"object"!==k(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function T(t){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var I,W,U=(I={containerExists:s,unMountContainer:function(t){a.a.unmountComponentAtNode(t)}},W=function(t){return Object(p.map)(m.bind(null,t),function(t){return Object(p.compose)(p.uniq,Object(p.map)(Object(p.prop)("selector")))(h(t))}(t))},function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{updateElement:function(n,r,e){return t.hasOwnProperty(n)?t[n].element=r:t[n]={element:r,selector:e},W(t)},deleteElement:function(n){if(t.hasOwnProperty(n)){var r=t[n];delete t[n];var e=I.containerExists(r.selector);if(e)return I.unMountContainer(e),W(t)}}}}),q=U();function M(){q=U()}function N(t){return function(n){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&A(t,n)}(e,n);var r=R(e);function e(t,n){var u;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),(u=r.call(this,t)).ContextProvider=S(n),"#subtree-container"===t.subtreeContainer&&function(){if(!s("#subtree-container")){var t=document.createElement("div");t.setAttribute("id","subtree-container"),t.setAttribute("class","subtree-container"),document.body.appendChild(t)}}(),u.uniqueId=o()(),!a.a.createPortal&&u.update(),u}return _(e,null,[{key:"defaultProps",get:function(){return{subtreeContainer:"#subtree-container",context:{}}}},{key:"propTypes",get:function(){return{subtreeContainer:l.a.string,className:l.a.string}}}]),_(e,[{key:"componentDidUpdate",value:function(){!a.a.createPortal&&this.update()}},{key:"componentWillUnmount",value:function(){q.deleteElement(this.uniqueId)}},{key:"getComponent",value:function(){var n=this.ContextProvider,r=this.props,e=(r.subtreeContainer,C(r,["subtreeContainer"]));return i.a.createElement(n,{key:this.uniqueId},i.a.createElement(t,e))}},{key:"update",value:function(){return q.updateElement(this.uniqueId,this.getComponent(),this.props.subtreeContainer)}},{key:"render",value:function(){return a.a.createPortal?a.a.createPortal(this.getComponent(),s(this.props.subtreeContainer)):null}}]),e}(i.a.Component)}}]))}}]);