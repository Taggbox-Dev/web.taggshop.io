"use strict";(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[415],{9415:function(t,e,a){a.r(e),a.d(e,{default:function(){return b}});var i=a(1413),n=a(15671),s=a(43144),o=a(60136),r=a(29388),c=a(47313),l=a(7284),d=a(98501),u=a(46417),h=function(t){(0,o.Z)(a,t);var e=(0,r.Z)(a);function a(){return(0,n.Z)(this,a),e.apply(this,arguments)}return(0,s.Z)(a,[{key:"render",value:function(){var t=this.props,e=t.item,a=t.wall,i=t.network,n=t.adjustWidth,s=!!(e.ugc_products&&e.ugc_products.length>0),o=505==a.ThemeRule.iconType?i.color:a.ThemeRule.iconColor,r=i.icon.replace("fa-",""),c={fontFamily:a.ThemeRule.css_font};return(0,u.jsx)("div",{className:"ts_cs_social_warpper",children:(0,u.jsxs)("div",{className:"ts_cs_social_wrappeer_in",children:[(0,u.jsx)("div",{className:"ts_cs_social_",style:{color:"rgb(255,255,255)"},children:null!=e.rating&&0!=e.rating?(0,u.jsx)("div",{className:"ts_cs_social_rating",style:{backgroundImage:"url(".concat(d.KA).concat(e.networkId,"/").concat(e.rating,".png)")}}):(0,u.jsx)("div",{className:"tb__icon tb-".concat(r),style:{color:o},children:(0,u.jsx)("div",{})})}),(0,u.jsx)("div",{className:"ts_cs_btn_wrapper",children:n>190&&s?(0,u.jsx)(l.Z,{shoppingText:a.ThemeRule.shoppingText,ctaClass:"ts_cs_button",styleCta:c}):""})]})})}}]),a}(c.PureComponent),p=a(34041),m=a(17739),_=function(t){(0,o.Z)(a,t);var e=(0,r.Z)(a);function a(){return(0,n.Z)(this,a),e.apply(this,arguments)}return(0,s.Z)(a,[{key:"componentDidMount",value:function(){var t=this;new ResizeObserver((function(e){window.dispatchEvent(new Event("resize")),t.getMarginTop()})).observe(document.querySelector(".taggshopContainer"))}},{key:"getMarginTop",value:function(){setTimeout((function(){return window.isEditor?(0,m.ll)(99):""}),100)}},{key:"render",value:function(){var t=this.props,e=t.ImageClass,a=t.ImageUrl,i=t.wall,n=t.item,s=t.width,o=t.height,r=("url(".concat(a,")"),{height:n.hotspot?"100%":"auto",width:n.hotspot?"auto":"100%",margin:"0px auto"});return(0,u.jsx)("div",{className:e,style:r,children:(0,u.jsx)("img",{loading:"lazy","data-src":a,className:"ts_cs_img__ imgID".concat(n.id),src:a,"data-is-optmized":"0","data-link":n.link,"data-load":"0","data-wall-id":i.Wall.id,"data-item-id":n.id,onLoad:this.onLoadImage,"data-filter-id":n.filterId,"data-stories":n.stories,"data-network":n.networkId,height:o,width:s,style:r,onError:function(t){"28"==!n.networkId&&(0,m.bO)(t)},alt:"image"})})}}]),a}(c.PureComponent),f=function(t){(0,o.Z)(a,t);var e=(0,r.Z)(a);function a(t){var i;return(0,n.Z)(this,a),(i=e.call(this,t)).state={height:"100",width:"100"},i}return(0,s.Z)(a,[{key:"componentWillMount",value:function(){var t=this,e=this.props.item;e.mediaHeight&&""!=e.mediaWidth?this.setState({height:100*e.mediaHeight/e.mediaWidth,width:100*e.mediaWidth/e.mediaHeight}):(0,p.Z)(e.postFileNew).then((function(e){var a=e.width,i=e.height;return t.setState({height:100*i/a,width:100*a/i})})).catch((function(e){return t.setState({height:100,width:100,error:e})}))}},{key:"render",value:function(){var t=this.props,e=t.item,a=t.wall,i=(0,m.HS)(e.ugc_products),n=this.state,s=n.height,o=n.width;return(0,u.jsx)("div",{className:"ts_cs_media_wrap",children:o?(0,u.jsx)(_,{ImageClass:"ts_cs_image",height:s,width:o,ImageUrl:e.postFileNew,ugc_products:i,item:e,wall:a}):""})}}]),a}(c.PureComponent),v=a(42417),w=a(8354),g=a(73763),x=function(t){(0,o.Z)(a,t);var e=(0,r.Z)(a);function a(){var t;(0,n.Z)(this,a);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).onLoadPopup=function(e){var a=t.props,i=a.itemData,n=a.wall,s=(a.appendData,a.postData),o=a.itemId,r=a.languageSetting,c=a.completeDataObject,l=a.wallId,d=a.webFilters,u=s.map((function(t){return c[t]})),h=u.filter((function(t){return!String(t.id).includes("free_add_")})),p=(0,m.E6)(h,i.id,s.indexOf(o));1===n.Personalization.postFeatured&&((0,m.st)("add"),t.props.showPopUP({type:"post",card:i,idArray:h,index:p,viewOnText:r.viewOnText,shareText:r.shareText,personalization:n.Personalization,ThemeRule:n.ThemeRule,webFilters:d,UserRule:n.UserRule,wall:n})),(0,g.S5)({action:2,wall:l,feed:i.feedId,post:i.referenceId})},t}return(0,s.Z)(a,[{key:"componentDidMount",value:function(){var t=this;(0,m.kA)(this.props.itemData.id)&&(this.onLoadPopup(),setTimeout((function(){var e=document.querySelector(".ts_p_".concat(t.props.itemData.id));e&&e.scrollIntoView(!0)}),500))}},{key:"render",value:function(){var t=this.props,e=t.itemData,a=t.wall,i=t.webFilters,n=t.adjustWidth,s=(e.highlight,a.ThemeRule.shareOption,a.ThemeRule.hideContent,(0,m.EH)(e.networkId,i)),o={backgroundColor:a.ThemeRule.cardColor},r={width:"100%",height:"auto",padding:a.Personalization.padding/2};return(0,u.jsx)("div",{className:"ts_cs_post_wrapper ".concat(e&&e.id?"ts_p_"+e.id:""),id:"ts_".concat(e.id),style:r,children:(0,u.jsxs)("div",{className:"ts_cs_post_in",style:o,onClick:e.isPost?null:this.onLoadPopup,children:[(0,u.jsx)(v.Z,{item:e,wall:a}),(0,u.jsx)(f,{item:e,wall:a}),(0,u.jsx)(h,{item:e,wall:a,network:s,adjustWidth:n})]})})}}]),a}(c.PureComponent),j=(0,w.$j)((function(t){return{wallId:t.appData.wallID}}),(function(t){return{showPopUP:function(e){return t((0,g.Bm)(e))}}}))(x),D=(a(46425),a(11774)),y=function(t){(0,o.Z)(a,t);var e=(0,r.Z)(a);function a(t){var i;return(0,n.Z)(this,a),(i=e.call(this,t)).state={cardCount:null,widnowWidth:document.querySelector(".taggshopContainer")?document.querySelector(".taggshopContainer").clientWidth:""},i.onCardCountFormation=function(t){var e=i.props.wall,a=i.state.widnowWidth,n=e.Personalization.minimumPostWidth,s=parseInt(a/n);i.setState({cardCount:s})},i.onUpdateData=function(){setTimeout((function(){return i.requestData()}),1e3)},i.requestData=function(){var t=i.props,e=t.wall,a=(t.postData,t.appendData),n=t.hasMoreData,s=t.loaderData,o=e.ThemeRule.numberOfPosts,r=Math.floor(Date.now()/1e3);n&&!s.isShowMoreLoading&&i.props.getDataNextSteps(e.Wall.id,r,o,a.networkID,a.after,a.heightEvent)},i.secondaryRef=(0,c.createRef)(),i}return(0,s.Z)(a,[{key:"componentDidMount",value:function(){this.onCardCountFormation(this.props)}},{key:"render",value:function(){var t=this,e=this.props,a=(e.appendData,e.postData),n=e.completeDataObject,s=e.adjustWidth,o=e.hasMoreData,r=e.wall,c=(e.webFilters,e.languageSetting,e.newPostData),l=e.loaderData,d=this.state,h=d.cardCount,p=d.widnowWidth,m={type:a.length<parseInt(p/r.Personalization.minimumPostWidth)&&"slider",perPage:h,perMove:1,pagination:!1};return(0,u.jsx)("div",{className:"ts_cs_post_container",id:window.isEditor?"isEditorCls ts_theme_container":"ts_theme_container",children:(0,u.jsxs)(D.tv,{hasTrack:!1,options:m,ref:this.secondaryRef,children:[(0,u.jsx)(D.Gj,{children:c&&c.length>0?c.map((function(e,a){var o=n[e];return(0,u.jsx)(D.jw,{children:(0,u.jsx)(j,(0,i.Z)({itemData:o,itemIndex:a,adjustWidth:s},t.props),"post_Id_".concat(a))},"spli".concat(a))})):null}),(0,u.jsxs)("div",{className:"splide__arrows",children:[(0,u.jsx)("div",{className:"splide__arrow--next tb_cs_slider_next_arrow-next",onClick:this.onUpdateData,children:o&&l.isShowMoreLoading?(0,u.jsxs)("svg",{width:"26px",height:"26px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:"uil-ring-alt",children:[(0,u.jsx)("rect",{x:"0",y:"0",width:"100",height:"100",fill:"none",className:"bk"}),(0,u.jsx)("circle",{cx:"50",cy:"50",r:"40",stroke:"#afafb7",fill:"none",strokeWidth:"10",strokeLinecap:"round"}),(0,u.jsxs)("circle",{cx:"50",cy:"50",r:"40",stroke:"#000000",fill:"none",strokeWidth:"6",strokeLinecap:"round",children:[(0,u.jsx)("animate",{attributeName:"stroke-dashoffset",dur:"2s",repeatCount:"indefinite",from:"0",to:"502"}),(0,u.jsx)("animate",{attributeName:"stroke-dasharray",dur:"2s",repeatCount:"indefinite",values:"150.6 100.4;1 250;150.6 100.4"})]})]}):(0,u.jsx)("div",{className:"tb__icon tb-chevron-right",children:(0,u.jsx)("div",{})})}),(0,u.jsx)("div",{className:"splide__arrow--prev tb_cs_slider_pre_arrow-prev",children:(0,u.jsx)("div",{className:"tb__icon tb-chevron-left",children:(0,u.jsx)("div",{})})})]})]})})}}]),a}(c.PureComponent),b=(0,w.$j)((function(t){var e=t.appData;return{appData:e,loaderData:t.loaderData,newPostData:e.newPostData,appendData:e.postData.appendData,hasMoreData:!e.postData.hasMoreData[0]||0!=e.postData.hasMoreData[0].hasMoreData&&(!e.postData.hasMoreData[e.postData.appendData.networkID]||e.postData.hasMoreData[e.postData.appendData.networkID].hasMoreData)}}),(function(t){return{getDataNextSteps:function(e,a,i,n,s,o,r){return t((0,g.Sx)(e,a,i,n,s,o,r))},showPopUP:function(e){return t((0,g.Bm)(e))}}}))(y)},42417:function(t,e,a){a.d(e,{Z:function(){return l}});var i=a(15671),n=a(43144),s=a(60136),o=a(29388),r=a(47313),c=(a(89800),a(46417)),l=function(t){(0,s.Z)(a,t);var e=(0,o.Z)(a);function a(){return(0,i.Z)(this,a),e.apply(this,arguments)}return(0,n.Z)(a,[{key:"render",value:function(){var t=this.props,e=t.item,a=t.wall,i=!!(e.ugc_products&&e.ugc_products.length>0&&0===e.hotspot),n=3===e.type||5===e.type,s=a&&a.User&&31724!==a.User.id,o=a&&a.ThemeRule&&a.ThemeRule.fontSize?a.ThemeRule.fontSize:"40px",r=!!(e.imageList&&e.imageList.length>0),l=!(!r||!i),d=55==a.Personalization.commerceTheme?"tb_cs_video_multiImage":"";return(0,c.jsxs)("div",{className:"ts_post_iocn",children:[(0,c.jsxs)("div",{className:"ts_social-icon ".concat(d),style:{fontSize:40,color:"rgb(112, 112, 112)"},children:[n?(0,c.jsx)("div",{className:"ts_video_icon tb_cs_video_multiImage",children:(0,c.jsx)("div",{className:"tb__icon tb-video-alt",style:{fontSize:o},children:(0,c.jsx)("div",{})})}):"",i&&s&&55!==a.Personalization.commerceTheme?(0,c.jsx)("div",{className:"ts_shop_icon",children:31665===a.User.id?(0,c.jsx)("svg",{fill:"#ffffff",height:"22",viewBox:"0 0 48 48",width:"22",children:(0,c.jsx)("path",{d:"M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"})}):(0,c.jsx)("div",{className:"tb__icon tb-shopping-bag",style:{fontSize:o},children:(0,c.jsx)("div",{})})}):"",!l&&r&&55!==a.Personalization.commerceTheme?(0,c.jsx)("div",{className:"tb__icon tb-multiple tb_cs_carousal_icon",style:{fontSize:o},children:" "}):"",r&&55==a.Personalization.commerceTheme?(0,c.jsxs)("div",{className:"ts_cs_multiple_option",children:[" ",(0,c.jsx)("div",{className:"tb__icon tb-multiple",style:{fontSize:o},children:" "})]}):""]}),l&&55!==a.Personalization.commerceTheme?(0,c.jsx)("div",{className:"tb__icon tb-multiple tb_cs_carousal_icon_bottom",style:{fontSize:o},children:" "}):""]})}}]),a}(r.PureComponent)},7284:function(t,e,a){a.d(e,{Z:function(){return d}});var i=a(15671),n=a(43144),s=a(60136),o=a(29388),r=a(47313),c=a(73763),l=a(46417),d=function(t){(0,s.Z)(a,t);var e=(0,o.Z)(a);function a(){var t;(0,i.Z)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).onClickCtAButton=function(e){var a=t.props,i=a.item,n=a.wall;e&&(0,c.S5)({type:1,action:2,wall:n.Wall.id,feed:i.feedId,post:i.referenceId})},t}return(0,n.Z)(a,[{key:"render",value:function(){var t=this.props,e=t.shoppingText,a=t.ctaClass,i=t.styleCta;return(0,l.jsxs)("div",{className:a,style:i,onClick:this.onClickCtAButton,children:[" ",e," "]})}}]),a}(r.PureComponent)},46425:function(){}}]);