"use strict";(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[730],{95730:function(e,t,n){n.r(t),n.d(t,{default:function(){return W}});var r=n(15671),a=n(43144),o=n(79340),i=n(48347),l=n(1413),s=n(47313),u=n(8354),c=n(73763),p=n(69867),d=n(83773),h=n(37762),f=n(15861),m=n(70885),x=n(87757),g=n.n(x);function v(e){return new Promise((function(t,n){var r=new Image;r.onload=function(){t(r)},r.onerror=r.onabort=function(){n(e)},r.src=e}))}function y(e,t){var n=(0,s.useState)(!1),r=(0,m.Z)(n,2),a=r[0],o=r[1];return(0,s.useEffect)((function(){var n=!1;function r(){return(r=(0,f.Z)(g().mark((function r(){var a,i,l,s;return g().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n){r.next=2;break}return r.abrupt("return");case 2:a=[],i=(0,h.Z)(e);try{for(i.s();!(l=i.n()).done;)s=l.value,t[s].file&&a.push(v(t[s].file))}catch(u){i.e(u)}finally{i.f()}return r.next=7,Promise.all(a);case 7:if(!n){r.next=9;break}return r.abrupt("return");case 9:o(!0);case 10:case"end":return r.stop()}}),r)})))).apply(this,arguments)}return setTimeout((function(){!function(){r.apply(this,arguments)}()}),4e3),function(){n=!0}}),[e,t]),{imagesPreloaded:a}}var w=n(46417),b=(0,s.lazy)((function(){return Promise.all([n.e(182),n.e(744)]).then(n.bind(n,92744))})),D=(0,s.lazy)((function(){return Promise.all([n.e(390),n.e(816),n.e(510),n.e(182),n.e(233),n.e(498)]).then(n.bind(n,71571))})),j=(0,s.lazy)((function(){return Promise.all([n.e(874),n.e(885),n.e(510),n.e(182),n.e(484),n.e(298),n.e(462)]).then(n.bind(n,57462))})),k=(0,s.lazy)((function(){return Promise.all([n.e(816),n.e(189)]).then(n.bind(n,6189))})),P=(new BroadcastChannel("connect3"),(0,d.componentWillAppendToBody)((function(e){return e.children}))),S=function(e){y(e.postData.postData,e.postData.completeDataObject).imagesPreloaded;return e.loader&&null!=e.loader.loader&&null==e.error.errorWithMessage?(0,w.jsx)(s.Suspense,{fallback:null,children:(0,w.jsx)(b,(0,l.Z)({},e))}):null!=e.error.errorWithMessage?(0,w.jsx)(w.Fragment,{children:"ERROR"}):null},Z=function(e){(0,o.Z)(n,e);var t=(0,i.Z)(n);function n(e){var a;return(0,r.Z)(this,n),(a=t.call(this,e)).state={newdata:!0},a}return(0,a.Z)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.wallID,n=e.appData,r=e.updateAppData,a=window.location.href.includes("onsite-upload"),o=n.wall;this.props.getThemeDataWithWallID(t,null),this.props.heightEvent(window.location.href,t),a&&this.props.showPopUP({type:"submit-pic",card:{},personalization:null===o||void 0===o?void 0:o.Personalization,ThemeRule:null===o||void 0===o?void 0:o.ThemeRule,UserRule:null===o||void 0===o?void 0:o.UserRule,wall:o}),window.onmessage=function(e){var t=JSON.parse(e.data);console.log("e---",t),r(t)}}},{key:"render",value:function(){var e=this.props,t=e.appData,n=e.modalPop,r=t&&t.error&&t.error.themeError?t.error.themeError.error_code:0,a=!(!(t&&t.postData&&t.postData.postData&&0==t.postData.postData.length)||window.isEditor);null===t||void 0===t||t.wall;return(0,w.jsxs)("div",{className:"taggshopContainer",children:[window.isEditor?"":(0,w.jsx)(P,{children:(0,w.jsx)("a",{target:"_blank",href:"https://tagshop.ai/blog/how-to-embed-video-on-website/","aria-label":"embed video on website",title:"embed video on website",style:{display:"none"},children:"Shoppable Video Platforms"})}),a?"":r?(0,w.jsx)(s.Suspense,{fallback:null,children:(0,w.jsx)(k,{wall:t.wall,errorData:t.error})}):(0,w.jsxs)("div",{className:"taggshopContainer1",children:["3946"!=this.props.wallID?"":"product"===window.dataFilterType?t.postData.postData&&t.postData.postData.length>=5?(0,w.jsxs)("div",{className:"ts_gallery_heading",style:{textAlign:"center"},children:[(0,w.jsx)("div",{style:{fontSize:"22px",lineHeight:"35px",fontWeight:"400",fontStyle:"normal",color:"#000",marginBottom:"15px",fontFamily:'"Canela Web",Georgia,"Times New Roman","serif"'},children:"Real homes, exceptional style "}),(0,w.jsx)("div",{style:{fontSize:"15px",lineHeight:"21px",fontWeight:"400",fontStyle:"normal",color:"#000",marginBottom:"10px",fontFamily:'"Montserrat","Montserrat-FB",Helvetica,sans-serif'},children:"Mention @featherandblack and #featherandblack on Instagram to share your style with our community."})]}):(0,w.jsx)(w.Fragment,{}):(0,w.jsxs)("div",{className:"ts_gallery_heading",style:{textAlign:"center"},children:[(0,w.jsx)("div",{style:{fontSize:"22px",lineHeight:"35px",fontWeight:"400",fontStyle:"normal",color:"#000",marginBottom:"15px",fontFamily:'"Canela Web",Georgia,"Times New Roman","serif"'},children:"Real homes, exceptional style "}),(0,w.jsx)("div",{style:{fontSize:"15px",lineHeight:"21px",fontWeight:"400",fontStyle:"normal",color:"#000",marginBottom:"10px",fontFamily:'"Montserrat","Montserrat-FB",Helvetica,sans-serif'},children:"Mention @featherandblack and #featherandblack on Instagram to share your style with our community."})]}),(0,w.jsx)(S,(0,l.Z)({},t)),n.isShowPopUp&&(0,w.jsx)(p.Z,{children:(0,w.jsx)(s.Suspense,{fallback:null,children:(0,w.jsx)(P,{children:(0,w.jsx)(D,{data:n.data})})})}),n.isShowReelPopUp&&(0,w.jsx)(p.Z,{children:(0,w.jsx)(s.Suspense,{fallback:null,children:(0,w.jsx)(P,{children:(0,w.jsx)(p.Z,{children:(0,w.jsx)(j,{data:n.data})})})})})]})]})}}]),n}(s.PureComponent),W=(0,u.$j)((function(e){return{appData:e.appData,modalPop:e.modalPop}}),(function(e){return{getThemeDataWithWallID:function(t,n){return e((0,c.fD)(t,n))},heightEvent:function(t,n){return e((0,c.Du)(t,n))},showPopUP:function(t){return e((0,c.Bm)(t))},updateAppData:function(t){return e({type:"WALL_DATA_UPDATE",payload:t})}}}))(Z)},69867:function(e,t,n){var r=n(15671),a=n(43144),o=n(79340),i=n(48347),l=n(47313),s=n(46417),u=function(e){(0,o.Z)(n,e);var t=(0,i.Z)(n);function n(e){var a;return(0,r.Z)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return(0,a.Z)(n,[{key:"componentDidCatch",value:function(e,t){console.log("error",e,t)}},{key:"render",value:function(){return this.state.hasError?(0,s.jsx)("h1",{}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(l.Component);t.Z=u}}]);