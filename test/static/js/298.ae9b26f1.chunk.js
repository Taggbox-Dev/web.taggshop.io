"use strict";(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[298],{29335:(e,t,r)=>{r.d(t,{Z:()=>n});r(47313);var s=r(59204),o=r(46417);function n(e){const{ugc_products:t,UgcSetting:r,item:n,isPopUp:c=!1}=e,a={background:r?r.hotspot_color:null},i={background:r?r.hotspot_color:null,color:r?r.hotspot_type_color:null},l=(0,s.v9)((e=>e.modalPop)),p=e=>t=>{2==parseInt(r.tab_target)?window.parent.location.href=e:window.open(e,"_blank")};return(0,o.jsx)("div",{className:"ts__post_hotspot",children:t.map(((e,t)=>{let s=parseInt(e.hotspot_cordinates.top),c=parseInt(e.hotspot_cordinates.left);const u=e.UgcProduct.product_discount>0?n.ugc_personalizaion.UgcSetting.discount_price_color:n.ugc_personalizaion.UgcSetting.original_price_color;let d={top:s<"30"||s<"70"&&s>"30"?"18px":"auto",left:c<"30"?"18px":c<"70"&&c>"30"?"-25px":"auto",bottom:s<"30"||s<"70"&&s>"30"?"auto":"18px",right:c<"30"||c<"70"&&c>"30"?"auto":"15px"};return(0,o.jsx)("div",{className:"ts_st_post_hotspot_icon",style:{top:e.hotspot_cordinates.top,left:e.hotspot_cordinates.left},children:1==r.hotspot_type?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{onClick:p(e.UgcProduct.product_url),className:"ts_st_post_hotspot_icon_blob_outer ts_st_post_numberHotspot",children:l.showAll||!l.isShowPopUp||l.showHotspot&&l.index==t&&l.hotspotId==e.id?(0,o.jsxs)("div",{className:"ts_st_post_hotspot_icon_blob_custom",id:"ts_st_post_hotspot_icon_blob".concat(t),style:{...i,textAlign:"center"},children:[" ",t+1]}):null}),l.showAll||!l.isShowPopUp||l.showHotspot&&l.index==t&&l.hotspotId==e.id?(0,o.jsxs)("div",{className:"".concat(l.showAll?"ts_st_post_hotspot_icon_hover":"ts_st_post_hotspot_icon_hover_custom "," ").concat(l.isShowPopUp?"":"ts_st_post_hotspot_icon_hover"),style:d,children:[(0,o.jsx)("div",{className:"ts_st_post_hotspot_icon_hover_p_name",children:e.UgcProduct.product_title}),(0,o.jsxs)("div",{style:{color:u},className:"ts_st_post_hotspot_icon_hover_act_price ".concat(e.UgcProduct.product_discount>0?"ts_st_post_hotspot_icon_hover_act_prise_diabled":""),children:[e.UgcProduct.price_currency_symbol," "," ",e.UgcProduct.product_price]}),e.UgcProduct.product_discount>0?(0,o.jsxs)("div",{className:"ts_st_post_hotspot_icon_hover_dis_price",style:{color:n.ugc_personalizaion.UgcSetting.original_price_color},children:[e.UgcProduct.price_currency_symbol," "," ",e.UgcProduct.product_discount]}):""]}):null]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{onClick:p(e.UgcProduct.product_url),className:"ts_st_post_hotspot_icon_blob_outer",children:(0,o.jsx)("div",{className:"ts_st_post_hotspot_icon_blob",style:a,children:(0,o.jsx)("div",{})})}),(0,o.jsxs)("div",{className:"ts_st_post_hotspot_icon_hover ",style:d,children:[(0,o.jsx)("div",{className:"ts_st_post_hotspot_icon_hover_p_name",children:e.UgcProduct.product_title}),(0,o.jsxs)("div",{style:{color:u},className:"ts_st_post_hotspot_icon_hover_act_price ".concat(e.UgcProduct.product_discount>0?"ts_st_post_hotspot_icon_hover_act_prise_diabled":""),children:[e.UgcProduct.price_currency_symbol," "," ",e.UgcProduct.product_price]}),e.UgcProduct.product_discount>0?(0,o.jsxs)("div",{className:"ts_st_post_hotspot_icon_hover_dis_price",style:{color:n.ugc_personalizaion.UgcSetting.original_price_color},children:[e.UgcProduct.price_currency_symbol," "," ",e.UgcProduct.product_discount," "]}):""]})]})},t)}))})}},98871:()=>{},97529:(e,t,r)=>{r.d(t,{tq:()=>_,o5:()=>h});var s=r(47313),o=r(86257),n=r(65451);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},c.apply(this,arguments)}function a(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function i(e){const t=[];return s.Children.toArray(e).forEach((e=>{a(e)?t.push(e):e.props&&e.props.children&&i(e.props.children).forEach((e=>t.push(e)))})),t}function l(e){const t=[],r={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return s.Children.toArray(e).forEach((e=>{if(a(e))t.push(e);else if(e.props&&e.props.slot&&r[e.props.slot])r[e.props.slot].push(e);else if(e.props&&e.props.children){const s=i(e.props.children);s.length>0?s.forEach((e=>t.push(e))):r["container-end"].push(e)}else r["container-end"].push(e)})),{slides:t,slots:r}}function p(e,t){return"undefined"===typeof window?(0,s.useEffect)(e,t):(0,s.useLayoutEffect)(e,t)}const u=(0,s.createContext)(null),d=(0,s.createContext)(null),_=(0,s.forwardRef)((function(e,t){let{className:r,tag:a="div",wrapperTag:i="div",children:u,onSwiper:_,...h}=void 0===e?{}:e,f=!1;const[m,g]=(0,s.useState)("swiper"),[v,w]=(0,s.useState)(null),[b,y]=(0,s.useState)(!1),x=(0,s.useRef)(!1),E=(0,s.useRef)(null),P=(0,s.useRef)(null),N=(0,s.useRef)(null),j=(0,s.useRef)(null),S=(0,s.useRef)(null),U=(0,s.useRef)(null),C=(0,s.useRef)(null),k=(0,s.useRef)(null),{params:O,passedParams:R,rest:z,events:I}=function(e,t){void 0===e&&(e={}),void 0===t&&(t=!0);const r={on:{}},s={},c={};(0,n.e)(r,o.d),r._emitClasses=!0,r.init=!1;const a={},i=n.p.map((e=>e.replace(/_/,""))),l=Object.assign({},e);return Object.keys(l).forEach((o=>{"undefined"!==typeof e[o]&&(i.indexOf(o)>=0?(0,n.i)(e[o])?(r[o]={},c[o]={},(0,n.e)(r[o],e[o]),(0,n.e)(c[o],e[o])):(r[o]=e[o],c[o]=e[o]):0===o.search(/on[A-Z]/)&&"function"===typeof e[o]?t?s["".concat(o[2].toLowerCase()).concat(o.substr(3))]=e[o]:r.on["".concat(o[2].toLowerCase()).concat(o.substr(3))]=e[o]:a[o]=e[o])})),["navigation","pagination","scrollbar"].forEach((e=>{!0===r[e]&&(r[e]={}),!1===r[e]&&delete r[e]})),{params:r,passedParams:c,rest:a,events:s}}(h),{slides:A,slots:H}=l(u),L=()=>{y(!b)};Object.assign(O.on,{_containerClasses(e,t){g(t)}});const F=()=>{Object.assign(O.on,I),f=!0;const e={...O};if(delete e.wrapperClass,P.current=new o.S(e),P.current.virtual&&P.current.params.virtual.enabled){P.current.virtual.slides=A;const e={cache:!1,slides:A,renderExternal:w,renderExternalUpdate:!1};(0,n.e)(P.current.params.virtual,e),(0,n.e)(P.current.originalParams.virtual,e)}};E.current||F(),P.current&&P.current.on("_beforeBreakpoint",L);return(0,s.useEffect)((()=>()=>{P.current&&P.current.off("_beforeBreakpoint",L)})),(0,s.useEffect)((()=>{!x.current&&P.current&&(P.current.emitSlidesClasses(),x.current=!0)})),p((()=>{if(t&&(t.current=E.current),E.current)return P.current.destroyed&&F(),function(e,t){let{el:r,nextEl:s,prevEl:o,paginationEl:c,scrollbarEl:a,swiper:i}=e;(0,n.n)(t)&&s&&o&&(i.params.navigation.nextEl=s,i.originalParams.navigation.nextEl=s,i.params.navigation.prevEl=o,i.originalParams.navigation.prevEl=o),(0,n.a)(t)&&c&&(i.params.pagination.el=c,i.originalParams.pagination.el=c),(0,n.b)(t)&&a&&(i.params.scrollbar.el=a,i.originalParams.scrollbar.el=a),i.init(r)}({el:E.current,nextEl:S.current,prevEl:U.current,paginationEl:C.current,scrollbarEl:k.current,swiper:P.current},O),_&&_(P.current),()=>{P.current&&!P.current.destroyed&&P.current.destroy(!0,!1)}}),[]),p((()=>{!f&&I&&P.current&&Object.keys(I).forEach((e=>{P.current.on(e,I[e])}));const e=function(e,t,r,s,o){const c=[];if(!t)return c;const a=e=>{c.indexOf(e)<0&&c.push(e)};if(r&&s){const e=s.map(o),t=r.map(o);e.join("")!==t.join("")&&a("children"),s.length!==r.length&&a("children")}return n.p.filter((e=>"_"===e[0])).map((e=>e.replace(/_/,""))).forEach((r=>{if(r in e&&r in t)if((0,n.i)(e[r])&&(0,n.i)(t[r])){const s=Object.keys(e[r]),o=Object.keys(t[r]);s.length!==o.length?a(r):(s.forEach((s=>{e[r][s]!==t[r][s]&&a(r)})),o.forEach((s=>{e[r][s]!==t[r][s]&&a(r)})))}else e[r]!==t[r]&&a(r)})),c}(R,N.current,A,j.current,(e=>e.key));return N.current=R,j.current=A,e.length&&P.current&&!P.current.destroyed&&(0,n.u)({swiper:P.current,slides:A,passedParams:R,changedParams:e,nextEl:S.current,prevEl:U.current,scrollbarEl:k.current,paginationEl:C.current}),()=>{I&&P.current&&Object.keys(I).forEach((e=>{P.current.off(e,I[e])}))}})),p((()=>{var e;!(e=P.current)||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())}),[v]),s.createElement(a,c({ref:E,className:(0,n.d)("".concat(m).concat(r?" ".concat(r):""))},z),s.createElement(d.Provider,{value:P.current},H["container-start"],s.createElement(i,{className:(0,n.w)(O.wrapperClass)},H["wrapper-start"],O.virtual?function(e,t,r){if(!r)return null;const o=e=>{let r=e;return e<0?r=t.length+e:r>=t.length&&(r-=t.length),r},n=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:"".concat(r.offset,"px")}:{top:"".concat(r.offset,"px")},{from:c,to:a}=r,i=e.params.loop?-t.length:0,l=e.params.loop?2*t.length:t.length,p=[];for(let s=i;s<l;s+=1)s>=c&&s<=a&&p.push(t[o(s)]);return p.map(((t,r)=>s.cloneElement(t,{swiper:e,style:n,key:"slide-".concat(r)})))}(P.current,A,v):A.map(((e,t)=>s.cloneElement(e,{swiper:P.current,swiperSlideIndex:t}))),H["wrapper-end"]),(0,n.n)(O)&&s.createElement(s.Fragment,null,s.createElement("div",{ref:U,className:"swiper-button-prev"}),s.createElement("div",{ref:S,className:"swiper-button-next"})),(0,n.b)(O)&&s.createElement("div",{ref:k,className:"swiper-scrollbar"}),(0,n.a)(O)&&s.createElement("div",{ref:C,className:"swiper-pagination"}),H["container-end"]))}));_.displayName="Swiper";const h=(0,s.forwardRef)((function(e,t){let{tag:r="div",children:o,className:a="",swiper:i,zoom:l,lazy:d,virtualIndex:_,swiperSlideIndex:h,...f}=void 0===e?{}:e;const m=(0,s.useRef)(null),[g,v]=(0,s.useState)("swiper-slide"),[w,b]=(0,s.useState)(!1);function y(e,t,r){t===m.current&&v(r)}p((()=>{if("undefined"!==typeof h&&(m.current.swiperSlideIndex=h),t&&(t.current=m.current),m.current&&i){if(!i.destroyed)return i.on("_slideClass",y),()=>{i&&i.off("_slideClass",y)};"swiper-slide"!==g&&v("swiper-slide")}})),p((()=>{i&&m.current&&!i.destroyed&&v(i.getSlideClasses(m.current))}),[i]);const x={isActive:g.indexOf("swiper-slide-active")>=0,isVisible:g.indexOf("swiper-slide-visible")>=0,isPrev:g.indexOf("swiper-slide-prev")>=0,isNext:g.indexOf("swiper-slide-next")>=0},E=()=>"function"===typeof o?o(x):o;return s.createElement(r,c({ref:m,className:(0,n.d)("".concat(g).concat(a?" ".concat(a):"")),"data-swiper-slide-index":_,onLoad:()=>{b(!0)}},f),l&&s.createElement(u.Provider,{value:x},s.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":"number"===typeof l?l:void 0},E(),d&&!w&&s.createElement("div",{className:"swiper-lazy-preloader"}))),!l&&s.createElement(u.Provider,{value:x},E(),d&&!w&&s.createElement("div",{className:"swiper-lazy-preloader"})))}));h.displayName="SwiperSlide"}}]);