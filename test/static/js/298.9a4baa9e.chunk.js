"use strict";(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[298],{29335:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(1413),o=(r(47313),r(8354)),s=r(46417);function c(e){var t,r,c,i=(0,o.v9)((function(e){var t,r;return null===(t=e.appData)||void 0===t||null===(r=t.wall)||void 0===r?void 0:r.ProductSetting})),a=e.ugc_products,l=(e.UgcSetting,e.item,e.isPopUp,{background:i?null===i||void 0===i||null===(t=i.Hotspot)||void 0===t?void 0:t.background:null}),u={background:i?null===i||void 0===i||null===(r=i.Hotspot)||void 0===r?void 0:r.background:null,color:i?null===i||void 0===i||null===(c=i.Hotspot)||void 0===c?void 0:c.color:null},p=(0,o.v9)((function(e){return e.modalPop})),d=function(e){return function(t){var r;2==parseInt(null===i||void 0===i||null===(r=i.Button)||void 0===r?void 0:r.newTab)?window.parent.location.href=e:window.open(e,"_blank")}};return(0,s.jsx)("div",{className:"ts__post_hotspot",children:a.map((function(e,t){var r,o=parseInt(e.hotspot_cordinates.top),c=parseInt(e.hotspot_cordinates.left),a=(e.UgcProduct.product_discount,null===i||void 0===i?void 0:i.Price.color),_={top:o<"30"||o<"70"&&o>"30"?"18px":"auto",left:c<"30"?"18px":c<"70"&&c>"30"?"-25px":"auto",bottom:o<"30"||o<"70"&&o>"30"?"auto":"18px",right:c<"30"||c<"70"&&c>"30"?"auto":"15px"};return(0,s.jsx)("div",{className:"ts_st_post_hotspot_icon",style:{top:e.hotspot_cordinates.top,left:e.hotspot_cordinates.left},children:1==(null===i||void 0===i||null===(r=i.Hotspot)||void 0===r?void 0:r.type)?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{onClick:d(e.UgcProduct.product_url),className:"ts_st_post_hotspot_icon_blob_outer ts_st_post_numberHotspot",children:p.showAll||!p.isShowPopUp||p.showHotspot&&p.index==t&&p.hotspotId==e.id?(0,s.jsxs)("div",{className:"ts_st_post_hotspot_icon_blob_custom",id:"ts_st_post_hotspot_icon_blob".concat(t),style:(0,n.Z)((0,n.Z)({},u),{},{textAlign:"center"}),children:[" ",t+1]}):null}),p.showAll||!p.isShowPopUp||p.showHotspot&&p.index==t&&p.hotspotId==e.id?(0,s.jsxs)("div",{className:"".concat(p.showAll?"ts_st_post_hotspot_icon_hover":"ts_st_post_hotspot_icon_hover_custom "," ").concat(p.isShowPopUp?"":"ts_st_post_hotspot_icon_hover"),style:_,children:[(0,s.jsx)("div",{className:"ts_st_post_hotspot_icon_hover_p_name",children:e.UgcProduct.product_title}),(0,s.jsxs)("div",{style:{color:a},className:"ts_st_post_hotspot_icon_hover_act_price ".concat(e.UgcProduct.product_discount>0?"ts_st_post_hotspot_icon_hover_act_prise_diabled":""),children:[e.UgcProduct.price_currency_symbol," "," ",e.UgcProduct.product_price]}),e.UgcProduct.product_discount>0?(0,s.jsxs)("div",{className:"ts_st_post_hotspot_icon_hover_dis_price",style:{color:null===i||void 0===i?void 0:i.Price.color},children:[e.UgcProduct.price_currency_symbol," "," ",e.UgcProduct.product_discount]}):""]}):null]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{onClick:d(e.UgcProduct.product_url),className:"ts_st_post_hotspot_icon_blob_outer",children:(0,s.jsx)("div",{className:"ts_st_post_hotspot_icon_blob",style:l,children:(0,s.jsx)("div",{})})}),(0,s.jsxs)("div",{className:"ts_st_post_hotspot_icon_hover ",style:_,children:[(0,s.jsx)("div",{className:"ts_st_post_hotspot_icon_hover_p_name",children:e.UgcProduct.product_title}),(0,s.jsxs)("div",{style:{color:a},className:"ts_st_post_hotspot_icon_hover_act_price ".concat(e.UgcProduct.product_discount>0?"ts_st_post_hotspot_icon_hover_act_prise_diabled":""),children:[e.UgcProduct.price_currency_symbol," "," ",e.UgcProduct.product_price]}),e.UgcProduct.product_discount>0?(0,s.jsxs)("div",{className:"ts_st_post_hotspot_icon_hover_dis_price",style:{color:null===i||void 0===i?void 0:i.Price.color},children:[e.UgcProduct.price_currency_symbol," "," ",e.UgcProduct.product_discount," "]}):""]})]})},t)}))})}},98871:function(){},97529:function(e,t,r){r.d(t,{tq:function(){return w},o5:function(){return b}});var n=r(1413),o=r(70885),s=r(45987),c=r(4942),i=r(47313),a=r(86257),l=r(65451);var u=["className","tag","wrapperTag","children","onSwiper"],p=["tag","children","className","swiper","zoom","lazy","virtualIndex","swiperSlideIndex"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function _(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function f(e){var t=[];return i.Children.toArray(e).forEach((function(e){_(e)?t.push(e):e.props&&e.props.children&&f(e.props.children).forEach((function(e){return t.push(e)}))})),t}function v(e){var t=[],r={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return i.Children.toArray(e).forEach((function(e){if(_(e))t.push(e);else if(e.props&&e.props.slot&&r[e.props.slot])r[e.props.slot].push(e);else if(e.props&&e.props.children){var n=f(e.props.children);n.length>0?n.forEach((function(e){return t.push(e)})):r["container-end"].push(e)}else r["container-end"].push(e)})),{slides:t,slots:r}}function h(e,t){return"undefined"===typeof window?(0,i.useEffect)(e,t):(0,i.useLayoutEffect)(e,t)}var m=(0,i.createContext)(null),g=(0,i.createContext)(null),w=(0,i.forwardRef)((function(e,t){var r=void 0===e?{}:e,p=r.className,_=r.tag,f=void 0===_?"div":_,m=r.wrapperTag,w=void 0===m?"div":m,b=r.children,x=r.onSwiper,y=(0,s.Z)(r,u),E=!1,P=(0,i.useState)("swiper"),N=(0,o.Z)(P,2),j=N[0],S=N[1],U=(0,i.useState)(null),k=(0,o.Z)(U,2),C=k[0],O=k[1],Z=(0,i.useState)(!1),R=(0,o.Z)(Z,2),I=R[0],z=R[1],A=(0,i.useRef)(!1),H=(0,i.useRef)(null),T=(0,i.useRef)(null),L=(0,i.useRef)(null),B=(0,i.useRef)(null),F=(0,i.useRef)(null),q=(0,i.useRef)(null),D=(0,i.useRef)(null),V=(0,i.useRef)(null),G=function(e,t){void 0===e&&(e={}),void 0===t&&(t=!0);var r={on:{}},n={},o={};(0,l.e)(r,a.d),r._emitClasses=!0,r.init=!1;var s={},c=l.p.map((function(e){return e.replace(/_/,"")})),i=Object.assign({},e);return Object.keys(i).forEach((function(i){"undefined"!==typeof e[i]&&(c.indexOf(i)>=0?(0,l.i)(e[i])?(r[i]={},o[i]={},(0,l.e)(r[i],e[i]),(0,l.e)(o[i],e[i])):(r[i]=e[i],o[i]=e[i]):0===i.search(/on[A-Z]/)&&"function"===typeof e[i]?t?n["".concat(i[2].toLowerCase()).concat(i.substr(3))]=e[i]:r.on["".concat(i[2].toLowerCase()).concat(i.substr(3))]=e[i]:s[i]=e[i])})),["navigation","pagination","scrollbar"].forEach((function(e){!0===r[e]&&(r[e]={}),!1===r[e]&&delete r[e]})),{params:r,passedParams:o,rest:s,events:n}}(y),J=G.params,K=G.passedParams,M=G.rest,Q=G.events,W=v(b),X=W.slides,Y=W.slots,$=function(){z(!I)};Object.assign(J.on,{_containerClasses:function(e,t){S(t)}});var ee=function(){Object.assign(J.on,Q),E=!0;var e=(0,n.Z)({},J);if(delete e.wrapperClass,T.current=new a.S(e),T.current.virtual&&T.current.params.virtual.enabled){T.current.virtual.slides=X;var t={cache:!1,slides:X,renderExternal:O,renderExternalUpdate:!1};(0,l.e)(T.current.params.virtual,t),(0,l.e)(T.current.originalParams.virtual,t)}};H.current||ee(),T.current&&T.current.on("_beforeBreakpoint",$);return(0,i.useEffect)((function(){return function(){T.current&&T.current.off("_beforeBreakpoint",$)}})),(0,i.useEffect)((function(){!A.current&&T.current&&(T.current.emitSlidesClasses(),A.current=!0)})),h((function(){if(t&&(t.current=H.current),H.current)return T.current.destroyed&&ee(),function(e,t){var r=e.el,n=e.nextEl,o=e.prevEl,s=e.paginationEl,c=e.scrollbarEl,i=e.swiper;(0,l.n)(t)&&n&&o&&(i.params.navigation.nextEl=n,i.originalParams.navigation.nextEl=n,i.params.navigation.prevEl=o,i.originalParams.navigation.prevEl=o),(0,l.a)(t)&&s&&(i.params.pagination.el=s,i.originalParams.pagination.el=s),(0,l.b)(t)&&c&&(i.params.scrollbar.el=c,i.originalParams.scrollbar.el=c),i.init(r)}({el:H.current,nextEl:F.current,prevEl:q.current,paginationEl:D.current,scrollbarEl:V.current,swiper:T.current},J),x&&x(T.current),function(){T.current&&!T.current.destroyed&&T.current.destroy(!0,!1)}}),[]),h((function(){!E&&Q&&T.current&&Object.keys(Q).forEach((function(e){T.current.on(e,Q[e])}));var e=function(e,t,r,n,o){var s=[];if(!t)return s;var c=function(e){s.indexOf(e)<0&&s.push(e)};if(r&&n){var i=n.map(o),a=r.map(o);i.join("")!==a.join("")&&c("children"),n.length!==r.length&&c("children")}return l.p.filter((function(e){return"_"===e[0]})).map((function(e){return e.replace(/_/,"")})).forEach((function(r){if(r in e&&r in t)if((0,l.i)(e[r])&&(0,l.i)(t[r])){var n=Object.keys(e[r]),o=Object.keys(t[r]);n.length!==o.length?c(r):(n.forEach((function(n){e[r][n]!==t[r][n]&&c(r)})),o.forEach((function(n){e[r][n]!==t[r][n]&&c(r)})))}else e[r]!==t[r]&&c(r)})),s}(K,L.current,X,B.current,(function(e){return e.key}));return L.current=K,B.current=X,e.length&&T.current&&!T.current.destroyed&&(0,l.u)({swiper:T.current,slides:X,passedParams:K,changedParams:e,nextEl:F.current,prevEl:q.current,scrollbarEl:V.current,paginationEl:D.current}),function(){Q&&T.current&&Object.keys(Q).forEach((function(e){T.current.off(e,Q[e])}))}})),h((function(){var e;!(e=T.current)||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())}),[C]),i.createElement(f,d({ref:H,className:(0,l.d)("".concat(j).concat(p?" ".concat(p):""))},M),i.createElement(g.Provider,{value:T.current},Y["container-start"],i.createElement(w,{className:(0,l.w)(J.wrapperClass)},Y["wrapper-start"],J.virtual?function(e,t,r){if(!r)return null;for(var n=function(e){var r=e;return e<0?r=t.length+e:r>=t.length&&(r-=t.length),r},o=e.isHorizontal()?(0,c.Z)({},e.rtlTranslate?"right":"left","".concat(r.offset,"px")):{top:"".concat(r.offset,"px")},s=r.from,a=r.to,l=e.params.loop?-t.length:0,u=e.params.loop?2*t.length:t.length,p=[],d=l;d<u;d+=1)d>=s&&d<=a&&p.push(t[n(d)]);return p.map((function(t,r){return i.cloneElement(t,{swiper:e,style:o,key:"slide-".concat(r)})}))}(T.current,X,C):X.map((function(e,t){return i.cloneElement(e,{swiper:T.current,swiperSlideIndex:t})})),Y["wrapper-end"]),(0,l.n)(J)&&i.createElement(i.Fragment,null,i.createElement("div",{ref:q,className:"swiper-button-prev"}),i.createElement("div",{ref:F,className:"swiper-button-next"})),(0,l.b)(J)&&i.createElement("div",{ref:V,className:"swiper-scrollbar"}),(0,l.a)(J)&&i.createElement("div",{ref:D,className:"swiper-pagination"}),Y["container-end"]))}));w.displayName="Swiper";var b=(0,i.forwardRef)((function(e,t){var r=void 0===e?{}:e,n=r.tag,c=void 0===n?"div":n,a=r.children,u=r.className,_=void 0===u?"":u,f=r.swiper,v=r.zoom,g=r.lazy,w=r.virtualIndex,b=r.swiperSlideIndex,x=(0,s.Z)(r,p),y=(0,i.useRef)(null),E=(0,i.useState)("swiper-slide"),P=(0,o.Z)(E,2),N=P[0],j=P[1],S=(0,i.useState)(!1),U=(0,o.Z)(S,2),k=U[0],C=U[1];function O(e,t,r){t===y.current&&j(r)}h((function(){if("undefined"!==typeof b&&(y.current.swiperSlideIndex=b),t&&(t.current=y.current),y.current&&f){if(!f.destroyed)return f.on("_slideClass",O),function(){f&&f.off("_slideClass",O)};"swiper-slide"!==N&&j("swiper-slide")}})),h((function(){f&&y.current&&!f.destroyed&&j(f.getSlideClasses(y.current))}),[f]);var Z={isActive:N.indexOf("swiper-slide-active")>=0,isVisible:N.indexOf("swiper-slide-visible")>=0,isPrev:N.indexOf("swiper-slide-prev")>=0,isNext:N.indexOf("swiper-slide-next")>=0},R=function(){return"function"===typeof a?a(Z):a};return i.createElement(c,d({ref:y,className:(0,l.d)("".concat(N).concat(_?" ".concat(_):"")),"data-swiper-slide-index":w,onLoad:function(){C(!0)}},x),v&&i.createElement(m.Provider,{value:Z},i.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":"number"===typeof v?v:void 0},R(),g&&!k&&i.createElement("div",{className:"swiper-lazy-preloader"}))),!v&&i.createElement(m.Provider,{value:Z},R(),g&&!k&&i.createElement("div",{className:"swiper-lazy-preloader"})))}));b.displayName="SwiperSlide"}}]);