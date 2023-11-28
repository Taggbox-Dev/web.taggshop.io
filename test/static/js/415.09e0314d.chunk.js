"use strict";(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[415],{9415:function(e,t,a){a.r(t),a.d(t,{default:function(){return I}});var i=a(1413),n=a(15671),r=a(43144),s=a(79340),o=a(48347),l=a(47313),c=a(7284),d=a(98501),u=a(17739),h=a(46417),p=function(e){(0,s.Z)(a,e);var t=(0,o.Z)(a);function a(){return(0,n.Z)(this,a),t.apply(this,arguments)}return(0,r.Z)(a,[{key:"render",value:function(){var e=this.props,t=e.item,a=e.wall,n=e.network,r=e.adjustWidth,s=e.cardWidth,o=!!(t.ugc_products&&t.ugc_products.length>0),l=505==a.ThemeRule.iconType?n.color:a.ThemeRule.iconColor,p=n.icon.replace("fa-",""),m={fontFamily:a.ThemeRule.css_font},f=s<=700&&s>500?{fontSize:"26px"}:s<=500&&s>200?{fontSize:"22px"}:s<=200?{fontSize:"18px"}:{};return(0,h.jsx)("div",{className:"ts_cs_social_warpper",children:(0,h.jsxs)("div",{className:"ts_cs_social_wrappeer_in",children:[(0,h.jsx)("div",{className:"ts_cs_social_",style:{color:"rgb(255,255,255)"},children:null!=t.rating&&0!=t.rating?(0,h.jsx)("div",{className:"ts_cs_social_rating",style:{backgroundImage:"url(".concat(d.KA).concat(t.networkId,"/").concat(t.rating,".png)")}}):(0,h.jsx)("div",{className:"tb__icon tb-".concat(p),style:(0,i.Z)({color:l},f),children:(0,h.jsxs)("div",{children:["twitter"==p?(0,h.jsx)(u.yi,{color:l}):""," "]})})}),(0,h.jsx)("div",{className:"ts_cs_btn_wrapper",children:r>190&&o?(0,h.jsx)(c.Z,{shoppingText:a.ThemeRule.shoppingText,ctaClass:"ts_cs_button",styleCta:m}):""})]})})}}]),a}(l.PureComponent),m=function(e){(0,s.Z)(a,e);var t=(0,o.Z)(a);function a(){return(0,n.Z)(this,a),t.apply(this,arguments)}return(0,r.Z)(a,[{key:"componentDidMount",value:function(){var e=this;new ResizeObserver((function(t){window.dispatchEvent(new Event("resize")),e.getMarginTop()})).observe(document.querySelector(".taggshopContainer"))}},{key:"getMarginTop",value:function(){setTimeout((function(){return window.isEditor?(0,u.ll)(99):""}),100)}},{key:"render",value:function(){var e=this.props,t=e.ImageClass,a=e.ImageUrl,i=e.wall,n=e.item,r=e.width,s=e.height,o=e.handleAllImageError,l=("url(".concat(a,")"),{height:n.hotspot?"100%":"auto",width:n.hotspot?"auto":"100%",margin:"0px auto"});return(0,h.jsx)("div",{className:t,style:l,children:(0,h.jsx)("img",{loading:"lazy","data-src":a,className:"ts_cs_img__ imgID".concat(n.id),src:a,"data-is-optmized":"0","data-link":n.link,"data-load":"0","data-wall-id":i.Wall.id,"data-item-id":n.id,onLoad:this.onLoadImage,"data-filter-id":n.filterId,"data-stories":n.stories,"data-network":n.networkId,height:s,width:r,style:l,onError:function(e){"28"!==n.networkId&&o(e)},alt:"post"})})}}]),a}(l.PureComponent),f=a(85942),g=function(e){(0,s.Z)(a,e);var t=(0,o.Z)(a);function a(e){var i;return(0,n.Z)(this,a),(i=t.call(this,e)).state={height:"100",width:"100"},i}return(0,r.Z)(a,[{key:"componentWillMount",value:function(){var e=this,t=this.props.item;t.mediaHeight&&""!=t.mediaWidth?this.setState({height:100*t.mediaHeight/t.mediaWidth,width:100*t.mediaWidth/t.mediaHeight}):(0,f.Z)(t.postFileNew).then((function(t){var a=t.width,i=t.height;return e.setState({height:100*i/a,width:100*a/i})})).catch((function(t){return e.setState({height:100,width:100,error:t})}))}},{key:"render",value:function(){var e=this.props,t=e.item,a=e.wall,i=e.handleAllImageError,n=(0,u.HS)(t.ugc_products),r=this.state,s=r.height,o=r.width;return(0,h.jsx)("div",{className:"ts_cs_media_wrap",children:o?(0,h.jsx)(m,{handleAllImageError:i,ImageClass:"ts_cs_image",height:s,width:o,ImageUrl:t.postFileNew,ugc_products:n,item:t,wall:a}):""})}}]),a}(l.PureComponent),_=a(42417),v=a(8354),w=a(73763),x=function(e){(0,s.Z)(a,e);var t=(0,o.Z)(a);function a(e){var i;return(0,n.Z)(this,a),(i=t.call(this,e)).onLoadPopup=function(e){var t=i.props,a=t.itemData,n=t.wall,r=(t.appendData,t.postData),s=t.itemId,o=t.languageSetting,l=t.completeDataObject,c=t.wallId,d=t.webFilters,h=r.map((function(e){return l[e]})),p=h.filter((function(e){return!String(e.id).includes("free_add_")})),m=(0,u.E6)(p,a.id,r.indexOf(s));1===n.Personalization.postFeatured&&((0,u.st)("add"),i.props.showPopUP({type:"post",card:a,idArray:p,index:m,viewOnText:o.viewOnText,shareText:o.shareText,personalization:n.Personalization,ThemeRule:n.ThemeRule,webFilters:d,UserRule:n.UserRule,wall:n})),(0,w.S5)({action:2,wall:c,feed:a.feedId,post:a.referenceId})},i.myRef_gallery=l.createRef(),i.state={cardWidth:null},i}return(0,r.Z)(a,[{key:"componentDidMount",value:function(){var e=this;(0,u.kA)(this.props.itemData.id)&&(this.onLoadPopup(),setTimeout((function(){var t=document.querySelector(".ts_p_".concat(e.props.itemData.id));t&&t.scrollIntoView(!0)}),500))}},{key:"componentDidUpdate",value:function(){var e=this;setTimeout((function(){e.myRef_gallery&&e.myRef_gallery.current&&e.setState({cardWidth:e.myRef_gallery.current.clientWidth})}),1e3)}},{key:"render",value:function(){var e=this.props,t=e.itemData,a=e.wall,i=e.webFilters,n=e.adjustWidth,r=e.handleAllImageError,s=(t.highlight,a.ThemeRule.shareOption,a.ThemeRule.hideContent,(0,u.EH)(t.networkId,i)),o={backgroundColor:a.ThemeRule.cardColor},l={width:"100%",height:"auto",padding:a.Personalization.padding/2};return(0,h.jsx)("div",{className:"ts_cs_post_wrapper ".concat(t&&t.id?"ts_p_"+t.id:""),ref:this.myRef_gallery,id:"ts_".concat(t.id),style:l,children:(0,h.jsxs)("div",{className:"ts_cs_post_in",style:o,onClick:t.isPost?null:this.onLoadPopup,children:[(0,h.jsx)(_.Z,{item:t,cardWidth:this.state.cardWidth,wall:a}),(0,h.jsx)(g,{handleAllImageError:r,item:t,wall:a}),(0,h.jsx)(p,{item:t,cardWidth:this.state.cardWidth,wall:a,network:s,adjustWidth:n})]})})}}]),a}(l.PureComponent),y=(0,v.$j)((function(e){return{wallId:e.appData.wallID}}),(function(e){return{showPopUP:function(t){return e((0,w.Bm)(t))}}}))(x),j=(a(46425),a(11774)),D=function(e){(0,s.Z)(a,e);var t=(0,o.Z)(a);function a(e){var i;return(0,n.Z)(this,a),(i=t.call(this,e)).allImageQueue=[],i.state={cardCount:null,widnowWidth:document.querySelector(".taggshopContainer")?document.querySelector(".taggshopContainer").clientWidth:"",allFirstImage:!1},i.onCardCountFormation=function(e){var t=i.props.wall,a=i.state.widnowWidth,n=t.Personalization.minimumPostWidth,r=parseInt(a/n);i.setState({cardCount:r})},i.onUpdateData=function(){setTimeout((function(){return i.requestData()}),1e3)},i.requestData=function(){var e=i.props,t=e.wall,a=(e.postData,e.appendData),n=e.hasMoreData,r=e.loaderData,s=t.ThemeRule.numberOfPosts,o=Math.floor(Date.now()/1e3);n&&!r.isShowMoreLoading&&i.props.getDataNextSteps(t.Wall.id,o,s,a.networkID,a.after,a.heightEvent)},i.handleAllImageError=function(e){try{var t=e.target.getAttribute("data-item-id");i.allImageQueue.push({src:t,e:e}),i.state.allFirstImage||i.processAllImageQueue()}catch(a){}},i.processAllImageQueue=function(){if(i.allImageQueue.length){i.setState({allFirstImage:!0});var e=i.allImageQueue[0],t=e.src,a=e.e;t&&(0,u.bO)(a,i.nextProcessAllImageQueue)}},i.nextProcessAllImageQueue=function(){try{i.allImageQueue.shift(),i.processAllImageQueue()}catch(e){}},i.secondaryRef=l.createRef(),i}return(0,r.Z)(a,[{key:"componentDidMount",value:function(){this.onCardCountFormation(this.props)}},{key:"render",value:function(){var e=this,t=this.props,a=(t.appendData,t.postData),n=t.completeDataObject,r=t.adjustWidth,s=t.hasMoreData,o=t.wall,l=(t.webFilters,t.languageSetting,t.newPostData),c=t.loaderData,d=this.state,u=d.cardCount,p=d.widnowWidth,m={type:a.length<parseInt(p/o.Personalization.minimumPostWidth)&&"slider",perPage:u,perMove:1,pagination:!1};return(0,h.jsx)("div",{className:"ts_cs_post_container",id:window.isEditor?"isEditorCls ts_theme_container":"ts_theme_container",children:(0,h.jsxs)(j.tv,{hasTrack:!1,options:m,ref:this.secondaryRef,children:[(0,h.jsx)(j.Gj,{children:l&&l.length>0?l.map((function(t,a){var s=n[t];return(0,h.jsx)(j.jw,{children:(0,h.jsx)(y,(0,i.Z)({handleAllImageError:e.handleAllImageError,itemData:s,itemIndex:a,adjustWidth:r},e.props),"post_Id_".concat(a))},"spli".concat(a))})):null}),(0,h.jsxs)("div",{className:"splide__arrows",children:[(0,h.jsx)("div",{className:"splide__arrow--next tb_cs_slider_next_arrow-next",onClick:this.onUpdateData,children:s&&c.isShowMoreLoading?(0,h.jsxs)("svg",{width:"26px",height:"26px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:"uil-ring-alt",children:[(0,h.jsx)("rect",{x:"0",y:"0",width:"100",height:"100",fill:"none",className:"bk"}),(0,h.jsx)("circle",{cx:"50",cy:"50",r:"40",stroke:"#afafb7",fill:"none",strokeWidth:"10",strokeLinecap:"round"}),(0,h.jsxs)("circle",{cx:"50",cy:"50",r:"40",stroke:"#000000",fill:"none",strokeWidth:"6",strokeLinecap:"round",children:[(0,h.jsx)("animate",{attributeName:"stroke-dashoffset",dur:"2s",repeatCount:"indefinite",from:"0",to:"502"}),(0,h.jsx)("animate",{attributeName:"stroke-dasharray",dur:"2s",repeatCount:"indefinite",values:"150.6 100.4;1 250;150.6 100.4"})]})]}):(0,h.jsx)("div",{className:"splideArrow_inner",children:(0,h.jsx)("div",{className:"tb__icon tb-chevron-right",children:(0,h.jsx)("div",{})})})}),(0,h.jsx)("div",{className:"splide__arrow--prev tb_cs_slider_pre_arrow-prev",children:(0,h.jsx)("div",{className:"splideArrow_inner",children:(0,h.jsx)("div",{className:"tb__icon tb-chevron-left",children:(0,h.jsx)("div",{})})})})]})]})})}}]),a}(l.PureComponent),I=(0,v.$j)((function(e){var t=e.appData;return{appData:t,loaderData:e.loaderData,newPostData:t.newPostData,appendData:t.postData.appendData,hasMoreData:!t.postData.hasMoreData[0]||0!=t.postData.hasMoreData[0].hasMoreData&&(!t.postData.hasMoreData[t.postData.appendData.networkID]||t.postData.hasMoreData[t.postData.appendData.networkID].hasMoreData)}}),(function(e){return{getDataNextSteps:function(t,a,i,n,r,s,o){return e((0,w.Sx)(t,a,i,n,r,s,o))},showPopUP:function(t){return e((0,w.Bm)(t))}}}))(D)},42417:function(e,t,a){a.d(t,{Z:function(){return c}});var i=a(15671),n=a(43144),r=a(79340),s=a(48347),o=a(47313),l=(a(89800),a(46417)),c=function(e){(0,r.Z)(a,e);var t=(0,s.Z)(a);function a(){return(0,i.Z)(this,a),t.apply(this,arguments)}return(0,n.Z)(a,[{key:"render",value:function(){var e=this.props,t=e.item,a=e.wall,i=e.cardWidth,n=!!(t.ugc_products&&t.ugc_products.length>0),r=(3===t.type||t.type,a&&a.User&&31724!==a.User.id),s=(a&&a.ThemeRule&&a.ThemeRule.fontSize&&a.ThemeRule.fontSize,!!(t.imageList&&t.imageList.length>0)),o=!(!s||!n),c=55==a.Personalization.commerceTheme?"tb_cs_video_multiImage":"",d=i<=700&&i>500?{fontSize:"16px"}:i<=500&&i>350?{fontSize:"14px"}:i<=350&&i>250?{fontSize:"12px"}:i<=250&&i>=150?{fontSize:"11px"}:i<150&&i>100?{fontSize:"10px"}:i<=100&&i>50?{fontSize:"8px"}:{};return(0,l.jsxs)("div",{className:"ts_post_iocn",children:[(0,l.jsxs)("div",{className:"ts_social-icon ".concat(c),style:{color:"rgb(112, 112, 112)"},children:[n,n&&r&&55!==a.Personalization.commerceTheme?(0,l.jsx)("div",{className:"ts_shop_icon",style:d,children:31665===a.User.id?(0,l.jsx)("svg",{fill:"#ffffff",height:"22",viewBox:"0 0 48 48",width:"22",children:(0,l.jsx)("path",{d:"M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"})}):(0,l.jsx)("div",{className:"tb__icon tb-shopping-bag",children:(0,l.jsx)("div",{})})}):"",!o&&s&&55!==a.Personalization.commerceTheme?(0,l.jsx)("div",{className:"tb__icon tb-multiple tb_cs_carousal_icon",style:d,children:" "}):"",s&&55==a.Personalization.commerceTheme?(0,l.jsxs)("div",{className:"ts_cs_multiple_option",children:[" ",(0,l.jsx)("div",{className:"tb__icon tb-multiple",style:d,children:" "})]}):""]}),o&&55!==a.Personalization.commerceTheme?(0,l.jsx)("div",{className:"tb__icon tb-multiple tb_cs_carousal_icon_bottom",style:d,children:" "}):""]})}}]),a}(o.PureComponent)},7284:function(e,t,a){a.d(t,{Z:function(){return d}});var i=a(15671),n=a(43144),r=a(79340),s=a(48347),o=a(47313),l=a(73763),c=a(46417),d=function(e){(0,r.Z)(a,e);var t=(0,s.Z)(a);function a(){var e;(0,i.Z)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onClickCtAButton=function(t){var a=e.props,i=a.item,n=a.wall;t&&(0,l.S5)({type:1,action:2,wall:n.Wall.id,feed:i.feedId,post:i.referenceId})},e}return(0,n.Z)(a,[{key:"render",value:function(){var e=this.props,t=e.shoppingText,a=e.ctaClass,i=e.styleCta;return(0,c.jsxs)("div",{className:a,style:i,children:[" ",t," "]})}}]),a}(o.PureComponent)},46425:function(){}}]);