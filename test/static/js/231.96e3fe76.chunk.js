"use strict";(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[231],{14231:function(e,t,a){a.r(t);var r=a(1413),n=a(15671),o=a(43144),s=a(79340),l=a(48347),i=a(47313),u=a(8354),c=a(61395),p=a.n(c),d=a(73763),m=a(17739),h=a(2651),D=a(46417),g=function(e){(0,s.Z)(a,e);var t=(0,l.Z)(a);function a(){var e;(0,n.Z)(this,a);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).allImageQueue=[],e.state={allFirstImage:!1},e.requestData=function(){var t=e.props,a=t.wall,r=(t.postData,t.appendData),n=t.hasMoreData,o=t.loaderData,s=a.Personalization.numberOfPosts,l=Math.floor(Date.now()/1e3);n&&!o.isShowMoreLoading&&e.props.getDataNextSteps(a.Wall.id,l,s,r.networkID,r.after,r.heightEvent)},e.handleAllImageError=function(t){try{var a=t.target.getAttribute("data-item-id");e.allImageQueue.push({src:a,e:t}),e.state.allFirstImage||e.processAllImageQueue()}catch(r){}},e.processAllImageQueue=function(){if(e.allImageQueue.length){e.setState({allFirstImage:!0});var t=e.allImageQueue[0],a=t.src,r=t.e;a&&(0,m.bO)(r,e.nextProcessAllImageQueue)}},e.nextProcessAllImageQueue=function(){try{e.allImageQueue.shift(),e.processAllImageQueue()}catch(t){}},e}return(0,o.Z)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.wall,r=(t.postData,t.appendData);t.hasMoreData,t.loaderData,document.getElementById("scrlBarComanW");new ResizeObserver((function(e){window.dispatchEvent(new Event("resize"))})).observe(document.querySelector(".taggshopContainer")),r&&a.Personalization.autoScrollStatus&&window.addEventListener("scroll",(function(t){var a=document.getElementById("scrlBarComanW"),r=(document.body.scrollHeight,window.innerHeight+window.scrollY);a.scrollHeight-10<r&&setTimeout((function(){return e.requestData()}),1e3)}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.postData,n=t.completeDataObject,o=t.adjustWidth,s=t.wall;t.webFilters,t.languageSetting;return(0,D.jsx)("div",{className:"ts_cp_post_container",id:"ts_theme_container",children:(0,D.jsx)(p(),{className:"ts_cp_post_container theme".concat(s.Personalization.commerceTheme),elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".ts_cp_post_wrapper",fitWidth:!1,columnWidth:0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:a&&a.length>0?a.map((function(t,s){m.j6&&a&&a.length-1==s&&setTimeout((function(){var e=document.querySelectorAll("img[data-is-optmized='0']");e&&e.length>0&&e.forEach((function(e){e.setAttribute("src",e.getAttribute("data-src")),e.setAttribute("data-is-optmized","1")}))}),1300);var l=n[t];return(0,D.jsx)(h.Z,(0,r.Z)({className:"ts_cp_post_wrapper",itemData:l,handleAllImageError:e.handleAllImageError,itemIndex:s,adjustWidth:o},e.props),"post_id_".concat(s))})):null})})}}]),a}(i.PureComponent);t.default=(0,u.$j)((function(e){var t=e.appData;return{appData:t,loaderData:e.loaderData,postData:t.postData.postData,appendData:t.appendData,hasMoreData:!t.postData.hasMoreData[0]||0!=t.postData.hasMoreData[0].hasMoreData&&(!t.postData.hasMoreData[t.appendData.networkID]||t.postData.hasMoreData[t.appendData.networkID].hasMoreData)}}),(function(e){return{getDataNextSteps:function(t,a,r,n,o,s,l){return e((0,d.Sx)(t,a,r,n,o,s,l))}}}))(g)}}]);