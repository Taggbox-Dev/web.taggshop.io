(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[769],{42417:function(t,e,o){"use strict";o.d(e,{Z:function(){return c}});var s=o(15671),i=o(43144),a=o(60136),n=o(29388),r=o(47313),l=(o(89800),o(46417)),c=function(t){(0,a.Z)(o,t);var e=(0,n.Z)(o);function o(){return(0,s.Z)(this,o),e.apply(this,arguments)}return(0,i.Z)(o,[{key:"render",value:function(){var t=this.props,e=t.item,o=t.wall,s=t.cardWidth,i=!!(e.ugc_products&&e.ugc_products.length>0),a=3===e.type||5===e.type,n=o&&o.User&&31724!==o.User.id,r=(o&&o.ThemeRule&&o.ThemeRule.fontSize&&o.ThemeRule.fontSize,!!(e.imageList&&e.imageList.length>0)),c=!(!r||!i),d=55==o.Personalization.commerceTheme?"tb_cs_video_multiImage":"",u=s<=700&&s>500?{fontSize:"16px"}:s<=500&&s>350?{fontSize:"14px"}:s<=350&&s>250?{fontSize:"12px"}:s<=250&&s>=150?{fontSize:"11px"}:s<150&&s>100?{fontSize:"10px"}:s<=100&&s>50?{fontSize:"8px"}:{};return(0,l.jsxs)("div",{className:"ts_post_iocn",children:[(0,l.jsxs)("div",{className:"ts_social-icon ".concat(d),style:{color:"rgb(112, 112, 112)"},children:[a?(0,l.jsx)("div",{className:"ts_video_icon tb_cs_video_multiImage",style:u,children:(0,l.jsx)("div",{className:"tb__icon tb-video-alt",children:(0,l.jsx)("div",{})})}):"",i,i&&n&&55!==o.Personalization.commerceTheme?(0,l.jsx)("div",{className:"ts_shop_icon",style:u,children:31665===o.User.id?(0,l.jsx)("svg",{fill:"#ffffff",height:"22",viewBox:"0 0 48 48",width:"22",children:(0,l.jsx)("path",{d:"M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"})}):(0,l.jsx)("div",{className:"tb__icon tb-shopping-bag",children:(0,l.jsx)("div",{})})}):"",!c&&r&&55!==o.Personalization.commerceTheme?(0,l.jsx)("div",{className:"tb__icon tb-multiple tb_cs_carousal_icon",style:u,children:" "}):"",r&&55==o.Personalization.commerceTheme?(0,l.jsxs)("div",{className:"ts_cs_multiple_option",children:[" ",(0,l.jsx)("div",{className:"tb__icon tb-multiple",style:u,children:" "})]}):""]}),c&&55!==o.Personalization.commerceTheme?(0,l.jsx)("div",{className:"tb__icon tb-multiple tb_cs_carousal_icon_bottom",style:u,children:" "}):""]})}}]),o}(r.PureComponent)},7284:function(t,e,o){"use strict";o.d(e,{Z:function(){return d}});var s=o(15671),i=o(43144),a=o(60136),n=o(29388),r=o(47313),l=o(73763),c=o(46417),d=function(t){(0,a.Z)(o,t);var e=(0,n.Z)(o);function o(){var t;(0,s.Z)(this,o);for(var i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))).onClickCtAButton=function(e){var o=t.props,s=o.item,i=o.wall;e&&(0,l.S5)({type:1,action:2,wall:i.Wall.id,feed:s.feedId,post:s.referenceId})},t}return(0,i.Z)(o,[{key:"render",value:function(){var t=this.props,e=t.shoppingText,o=t.ctaClass,s=t.styleCta;return(0,c.jsxs)("div",{className:o,style:s,children:[" ",e," "]})}}]),o}(r.PureComponent)},29335:function(t,e,o){"use strict";o.d(e,{Z:function(){return n}});var s=o(1413),i=(o(47313),o(8354)),a=o(46417);function n(t){var e=t.ugc_products,o=t.UgcSetting,n=t.item,r=(t.isPopUp,{background:o?o.hotspot_color:null}),l={background:o?o.hotspot_color:null,color:o?o.hotspot_type_color:null},c=(0,i.v9)((function(t){return t.modalPop})),d=function(t){return function(e){2==parseInt(o.tab_target)?window.parent.location.href=t:window.open(t,"_blank")}};return(0,a.jsx)("div",{className:"ts__post_hotspot",children:e.map((function(t,e){var i,u,p=parseInt(t.hotspot_cordinates.top),h=parseInt(t.hotspot_cordinates.left),_=t.UgcProduct.product_discount>0?n.ugc_personalizaion.UgcSetting.discount_price_color:n.ugc_personalizaion.UgcSetting.original_price_color,m={top:p<"30"||p<"70"&&p>"30"?"18px":"auto",left:h<"30"?"18px":h<"70"&&h>"30"?"-25px":"auto",bottom:p<"30"||p<"70"&&p>"30"?"auto":"18px",right:h<"30"||h<"70"&&h>"30"?"auto":"15px"};return(0,a.jsx)("div",{className:"ts_st_post_hotspot_icon",style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},onClick:(i=function(){return console.log("Child Element!")},function(t){t&&t.preventDefault(),!u&&t&&t.stopPropagation();for(var e=arguments.length,o=new Array(e>1?e-1:0),s=1;s<e;s++)o[s-1]=arguments[s];i.apply(void 0,[t].concat(o))}),children:1==o.hotspot_type?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{onClick:d(t.UgcProduct.product_url),className:"ts_st_post_hotspot_icon_blob_outer ts_st_post_numberHotspot",children:c.showAll||!c.isShowPopUp||c.showHotspot&&c.index==e&&c.hotspotId==t.id?(0,a.jsxs)("div",{className:"ts_st_post_hotspot_icon_blob_custom",id:"ts_st_post_hotspot_icon_blob".concat(e),style:(0,s.Z)((0,s.Z)({},l),{},{textAlign:"center"}),children:[" ",e+1]}):null}),c.showAll||!c.isShowPopUp||c.showHotspot&&c.index==e&&c.hotspotId==t.id?(0,a.jsxs)("div",{className:"".concat(c.showAll?"ts_st_post_hotspot_icon_hover":"ts_st_post_hotspot_icon_hover_custom "," ").concat(c.isShowPopUp?"":"ts_st_post_hotspot_icon_hover"),style:m,children:[(0,a.jsx)("div",{className:"ts_st_post_hotspot_icon_hover_p_name",children:t.UgcProduct.product_title}),(0,a.jsxs)("div",{style:{color:_},className:"ts_st_post_hotspot_icon_hover_act_price ".concat(t.UgcProduct.product_discount>0?"ts_st_post_hotspot_icon_hover_act_prise_diabled":""),children:[t.UgcProduct.price_currency_symbol," "," ",t.UgcProduct.product_price]}),t.UgcProduct.product_discount>0?(0,a.jsxs)("div",{className:"ts_st_post_hotspot_icon_hover_dis_price",style:{color:n.ugc_personalizaion.UgcSetting.original_price_color},children:[t.UgcProduct.price_currency_symbol," "," ",t.UgcProduct.product_discount]}):""]}):null]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{onClick:d(t.UgcProduct.product_url),className:"ts_st_post_hotspot_icon_blob_outer",children:(0,a.jsx)("div",{className:"ts_st_post_hotspot_icon_blob",style:r,children:(0,a.jsx)("div",{})})}),(0,a.jsxs)("div",{className:"ts_st_post_hotspot_icon_hover ",style:m,children:[(0,a.jsx)("div",{className:"ts_st_post_hotspot_icon_hover_p_name",children:t.UgcProduct.product_title}),(0,a.jsxs)("div",{style:{color:_},className:"ts_st_post_hotspot_icon_hover_act_price ".concat(t.UgcProduct.product_discount>0?"ts_st_post_hotspot_icon_hover_act_prise_diabled":""),children:[t.UgcProduct.price_currency_symbol," "," ",t.UgcProduct.product_price]}),t.UgcProduct.product_discount>0?(0,a.jsxs)("div",{className:"ts_st_post_hotspot_icon_hover_dis_price",style:{color:n.ugc_personalizaion.UgcSetting.original_price_color},children:[t.UgcProduct.price_currency_symbol," "," ",t.UgcProduct.product_discount," "]}):""]})]})},e)}))})}},24387:function(t,e,o){"use strict";o.d(e,{Z:function(){return d}});var s=o(15671),i=o(43144),a=o(60136),n=o(29388),r=o(47313),l=o(73763),c=o(46417),d=function(t){(0,a.Z)(o,t);var e=(0,n.Z)(o);function o(){var t;(0,s.Z)(this,o);for(var i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))).onSharePost=function(e){var o=t.props,s=o.item,i=o.wall;e&&(0,l.S5)({type:2,action:2,wall:i.Wall.id,feed:s.feedId,post:s.referenceId})},t}return(0,i.Z)(o,[{key:"render",value:function(){var t=this.props,e=t.item,o=t.wall,s=t.network,i=505==o.ThemeRule.iconType?s.color:o.ThemeRule.iconColor;return(0,c.jsx)("div",{className:"ts__card_socialAction",style:{color:"rgb(255, 255, 255)"},children:1==e.networkId?(0,c.jsxs)(r.Fragment,{children:[(0,c.jsx)("a",{target:"_blank",onClick:this.onSharePost,href:"https://twitter.com/intent/tweet?in_reply_to=".concat(atob(e.postId)),title:"View",children:(0,c.jsx)("div",{className:"tb__icon tb-share-square",style:{color:i},children:(0,c.jsx)("div",{})})}),(0,c.jsxs)("a",{href:"https://twitter.com/intent/retweet?tweet_id=".concat(atob(e.postId)),title:"Comment",target:"_blank",className:"ts_icon_count_tagg",children:[(0,c.jsx)("div",{className:" tb__icon",style:{color:i},children:(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:i,viewBox:"0 0 640 512",children:(0,c.jsx)("path",{d:"M614.2 334.8C610.5 325.8 601.7 319.1 592 319.1H544V176C544 131.9 508.1 96 464 96h-128c-17.67 0-32 14.31-32 32s14.33 32 32 32h128C472.8 160 480 167.2 480 176v143.1h-48c-9.703 0-18.45 5.844-22.17 14.82s-1.656 19.29 5.203 26.16l80 80.02C499.7 445.7 505.9 448 512 448s12.28-2.344 16.97-7.031l80-80.02C615.8 354.1 617.9 343.8 614.2 334.8zM304 352h-128C167.2 352 160 344.8 160 336V192h48c9.703 0 18.45-5.844 22.17-14.82s1.656-19.29-5.203-26.16l-80-80.02C140.3 66.34 134.1 64 128 64S115.7 66.34 111 71.03l-80 80.02C24.17 157.9 22.11 168.2 25.83 177.2S38.3 192 48 192H96V336C96 380.1 131.9 416 176 416h128c17.67 0 32-14.31 32-32S321.7 352 304 352z"})})}),(0,c.jsx)("div",{style:{color:i},children:0!=e.comment_count?e.comment_count:""})]}),(0,c.jsxs)("a",{href:"https://twitter.com/intent/favorite?tweet_id=".concat(atob(e.postId)),title:"Like",target:"_blank",className:"ts_icon_count_tagg",children:[(0,c.jsx)("div",{className:"tb__icon tb-heart",style:{color:i},children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{style:{color:i},children:0!=e.like_count?e.like_count:""})]})]}):2==e.networkId||3==e.networkId||7==e.networkId||8==e.networkId||10==e.networkId||18==e.networkId?(0,c.jsxs)(r.Fragment,{children:[(0,c.jsx)("a",{href:e.link,title:"Like",target:"_blank",className:"ts_icon_count_tagg",children:(0,c.jsx)("div",{className:"tb__icon tb-thumbs-up",style:{color:i},children:(0,c.jsx)("div",{className:"",children:10==e.networkId&&e.feedId>73590||18==e.networkId?e.like_count:null})})}),(0,c.jsx)("a",{href:e.link,title:"Comment",target:"_blank",className:"ts_icon_count_tagg",children:(0,c.jsxs)("div",{className:"tb__icon tb-comment-dots",style:{color:i},children:[(0,c.jsx)("div",{}),(0,c.jsx)("div",{children:10==e.networkId&&e.feedId>73590||18==e.networkId?e.comment_count:null})]})})]}):4==e.networkId?(0,c.jsx)("a",{href:e.link,className:"fa fa-comment-o tooltips",title:"Comment",target:"_blank",children:(0,c.jsx)("div",{})}):null})}}]),o}(r.PureComponent)},6552:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return R}});var s=o(1413),i=o(15671),a=o(43144),n=o(60136),r=o(29388),l=o(47313),c=o(70885),d=(o(29335),o(17739)),u=o(46417),p=function(t){(0,n.Z)(o,t);var e=(0,r.Z)(o);function o(){return(0,i.Z)(this,o),e.apply(this,arguments)}return(0,a.Z)(o,[{key:"componentDidMount",value:function(){var t=this;new ResizeObserver((function(e){window.dispatchEvent(new Event("resize")),t.getMarginTop()})).observe(document.querySelector(".taggshopContainer"))}},{key:"getMarginTop",value:function(){setTimeout((function(){return window.isEditor?(0,d.ll)(99):""}),100)}},{key:"render",value:function(){var t=this.props,e=t.ImageClass,o=t.ImageUrl,s=t.item,i=(t.ugc_products,t.wall),a=(t.width,t.height,t.handleAllImageError),n={backgroundImage:"url(".concat(o,")")};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"ts_rt_image_blur_bg",style:n,children:(0,u.jsx)("div",{})}),(0,u.jsx)("div",{className:e,children:(0,u.jsx)("img",{loading:"lazy","data-src":o,src:o,"data-is-optmized":"0","data-link":s.link,"data-load":"0","data-wall-id":i.Wall.id,"data-item-id":s.id,onLoad:this.onLoadImage,"data-filter-id":s.filterId,"data-stories":s.stories,"data-network":s.networkId,width:"auto",height:"100%",className:"imgID".concat(s.id),onError:function(t){"28"!==s.networkId&&a(t)},alt:"post"})})]})}}]),o}(l.PureComponent),h=o(85942),_=o(20510),m=function(t){var e=t.videoRef,o=t.inViewport,s=t.item,i=t.wall,a=t.setVideoLoaded,n=t.playing,r=t.onPlayingVideo,l=t.videoLoaded,c=t.handleAllImageError;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(_.Z,{ref:e,poster:s.postFileNew,className:"tb-detail-image-iframe",url:o?s.mediaUrl:"","data-type":"video","data-network":s.networkId,"data-link":s.link,"data-wall-id":i.Wall.id,"data-item-id":s.id,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?document.querySelector(".ts_rt_post_in").clientHeight:"100%")}}},onError:function(t){o&&((0,d.b3)(t),a(!1))},autoPlay:o,muted:!0,onReady:function(t){return a(!0)},playing:n,height:"100%",width:"auto",onProgress:r,style:l&&o?{position:"relative"}:{display:"none"}}),l?(0,u.jsx)(u.Fragment,{}):(0,u.jsx)("div",{className:"ts_rt_image",children:(0,u.jsx)("img",{loading:"lazy","data-src":s.postFileNew,src:s.postFileNew,"data-is-optmized":"0","data-link":s.link,"data-load":"0","data-wall-id":i.Wall.id,"data-item-id":s.id,"data-filter-id":s.filterId,"data-stories":s.stories,"data-network":s.networkId,width:"auto",height:"100%",className:"imgID".concat(s.id),onError:function(t){"28"!==s.networkId&&c(t)},alt:"post"})})]})},g=function(t){var e=(0,l.useState)("100"),o=(0,c.Z)(e,2),s=o[0],i=o[1],a=(0,l.useState)("100"),n=(0,c.Z)(a,2),r=n[0],_=n[1],g=(0,l.useState)(!1),f=(0,c.Z)(g,2),v=f[0],w=f[1],x=(0,l.useState)(""),y=(0,c.Z)(x,2),b=(y[0],y[1]),j=(0,l.useState)(!1),k=(0,c.Z)(j,2),I=k[0],P=k[1],D=(0,l.useRef)(),N=(0,l.useRef)();(0,l.useEffect)((function(){var e=t.item;console.log("item",e),e.mediaHeight&&""!=e.mediaWidth?(i(100*e.mediaHeight/e.mediaWidth),_(100*e.mediaWidth/e.mediaHeight)):(0,h.Z)(e.postFileNew).then((function(t){var e=t.width,o=t.height;i(100*o/100),_(100*e/100)})).catch((function(t){i(100*s/100),_(100*r/100),b(t)}))}),[]),(0,l.useEffect)((function(){w(t.isVisible)}),[t.isVisible]);var R=t.item,T=t.wall,C=t.handleAllImageError,S=t.isVisible,Z=(0,d.HS)(R.ugc_products);return(0,u.jsx)("div",{className:"ts_rt_post_image",ref:D,children:(0,u.jsx)("div",{className:"ts_rt_media_wrap",children:3==R.type||5==R.type?(0,u.jsx)(m,{videoRef:N,inViewport:S,item:R,wall:T,setVideoLoaded:P,playing:v,onPlayingVideo:function(t){t.playedSeconds>=3&&N.current.seekTo(0)},videoLoaded:I,handleAllImageError:C}):r?(0,u.jsx)(p,{handleAllImageError:C,ImageClass:"ts_rt_image",height:s,width:r,ImageUrl:R.postFileNew,ugc_products:Z,item:R,wall:T}):""})})},f=(o(24387),o(7284)),v=(o(16390),o(98501)),w=function(t){(0,n.Z)(o,t);var e=(0,r.Z)(o);function o(){return(0,i.Z)(this,o),e.apply(this,arguments)}return(0,a.Z)(o,[{key:"render",value:function(){var t=this.props,e=t.wall,o=t.item,s=t.isHover;e.ThemeRule.css_font,e.ThemeRule.fontSize,s&&"#ffffff"===e.ThemeRule.fontColor||(s||"#000000"!==e.ThemeRule.fontColor)&&e.ThemeRule.fontColor,(0,d.Fx)(o.content),e.Personalization.hashtag_color;return(0,u.jsx)(u.Fragment,{})}}]),o}(l.PureComponent),x=function(t){(0,n.Z)(o,t);var e=(0,r.Z)(o);function o(){return(0,i.Z)(this,o),e.apply(this,arguments)}return(0,a.Z)(o,[{key:"render",value:function(){var t=this.props,e=t.item,o=t.wall,i=t.network,a=t.cardWidth,n=!!(e.ugc_products&&e.ugc_products.length>0),r=o.ThemeRule.hideContent,l=505==o.ThemeRule.iconType?i.color:o.ThemeRule.iconColor,c=""==o.ThemeRule.postHover||1!=o.ThemeRule.postHover,p=c?"ts_white_bg_hover":"ts_black_bg_hover",h={backgroundColor:c?"rgb(255, 255, 255, 0.8)":"rgba(0, 0, 0, 0.8)"},_={fontFamily:o.ThemeRule.css_font},m=i.icon.replace("fa-",""),g=a<=700&&a>500?{fontSize:"26px"}:a<=500&&a>200?{fontSize:"22px"}:a<=200?{fontSize:"18px"}:{};return(0,u.jsx)("div",{className:"ts_rt_Post_hover",children:(0,u.jsxs)("div",{className:"ts_card_hover_in",children:[(0,u.jsx)("div",{className:"ts_rt_card_hover_overlay",style:h,children:(0,u.jsx)("div",{})}),(0,u.jsxs)("div",{className:"ts_rt_card_hover_content",children:[(0,u.jsx)("div",{className:"ts_rt_slider-social-icon",style:g,children:null!=e.rating&&0!=e.rating?(0,u.jsx)("div",{className:"ts_rt_social_rating",style:{backgroundImage:"url(".concat(v.KA).concat(e.networkId,"/").concat(e.rating,".png)")},children:(0,u.jsx)("div",{})}):(0,u.jsx)("div",{className:"tb__icon tb-".concat(m),style:(0,s.Z)({color:l},g),children:(0,u.jsxs)("div",{children:["twitter"==m?(0,u.jsx)(d.yi,{color:l}):""," "]})})}),(0,u.jsx)("div",{className:"ts_rt_card_content_00",children:n?0==r?(0,u.jsx)(w,{wall:o,item:e,isHover:c}):(0,u.jsx)("div",{className:"ts_rt_card_shop_btn  ".concat(p),children:(0,u.jsx)(f.Z,{shoppingText:o.ThemeRule.shoppingText,ctaClass:"ts_rt_shop_btn",styleCta:_})}):(0,u.jsx)(w,{wall:o,item:e,isHover:c})})]})]})})}}]),o}(l.PureComponent),y=o(42417),b=o(8354),j=o(73763),k=function(t){(0,n.Z)(o,t);var e=(0,r.Z)(o);function o(t){var s;return(0,i.Z)(this,o),(s=e.call(this,t)).onLoadPopup=function(t){var e=s.props,o=e.itemData,i=e.wall,a=(e.appendData,e.postData),n=e.itemId,r=e.languageSetting,l=e.completeDataObject,c=e.wallId,u=e.webFilters,p=a.map((function(t){return l[t]})),h=p.filter((function(t){return!String(t.id).includes("free_add_")})),_=(0,d.E6)(h,o.id,a.indexOf(n));1===i.Personalization.postFeatured&&((0,d.st)("add"),s.props.showPopUP({type:"post",card:o,idArray:h,index:_,viewOnText:r.viewOnText,shareText:r.shareText,personalization:i.Personalization,ThemeRule:i.ThemeRule,webFilters:u,UserRule:i.UserRule,wall:i})),(0,j.S5)({action:2,wall:c,feed:o.feedId,post:o.referenceId})},s.myRef=l.createRef(),s.state={cardWidth:null},s}return(0,a.Z)(o,[{key:"componentDidMount",value:function(){var t=this;console.log("this.props.slideRef",this.props.slideRef),(0,d.kA)(this.props.itemData.id)&&(this.onLoadPopup(),setTimeout((function(){var e=document.querySelector(".ts_p_".concat(t.props.itemData.id));e&&e.scrollIntoView(!0),t.myRef&&t.myRef.current&&t.setState({cardWidth:t.myRef.current.clientWidth})}),500))}},{key:"componentDidUpdate",value:function(){var t=this;setTimeout((function(){t.myRef&&t.myRef.current&&t.setState({cardWidth:t.myRef.current.clientWidth})}),1e3)}},{key:"render",value:function(){var t=this.props,e=t.itemData,o=t.wall,s=t.webFilters,i=(t.cardWidth,t.handleAllImageError),a=t.isVisible,n=(e.highlight,o.ThemeRule.shareOption,o.ThemeRule.hideContent,(0,d.EH)(e.networkId,s)),r={backgroundColor:o.ThemeRule.cardColor,borderRadius:o.ThemeRule.roundEdge},l={width:"100%",height:"auto",padding:o.Personalization.padding/2},c=!!(e.ugc_products&&e.ugc_products.length>0),p=(3===e.type||e.type,!!(e.imageList&&e.imageList.length>0));return(0,u.jsx)("div",{className:"ts_rt_post_wrapper ".concat(e&&e.id?"ts_p_"+e.id:""),ref:this.myRef,id:"ts_".concat(e.id),onClick:e.isPost?null:this.onLoadPopup,style:l,"data-method":e.id,children:(0,u.jsxs)("div",{className:"ts_rt_post_in ".concat(e.hotspot?"":"ts_rt_post_in_hostpot_hover"),style:r,children:[c||p?(0,u.jsx)(y.Z,{item:e,cardWidth:this.state.cardWidth,wall:o}):"",(0,u.jsx)(g,{handleAllImageError:i,item:e,wall:o,isVisible:a,mediaRef:this.myRef}),(0,u.jsx)(x,{cardWidth:this.state.cardWidth,item:e,wall:o,network:n})]})})}}]),o}(l.PureComponent),I=(0,b.$j)((function(t){return{wallId:t.appData.wallID}}),(function(t){return{showPopUP:function(e){return t((0,j.Bm)(e))}}}))(k),P=o(82783),D=(o(83151),o(66909)),N=function(t){(0,n.Z)(o,t);var e=(0,r.Z)(o);function o(t){var s;return(0,i.Z)(this,o),(s=e.call(this,t)).allImageQueue=[],s.state={allFirstImage:!1,windowWidth:document.querySelector(".taggshopContainer")?document.querySelector(".taggshopContainer").clientWidth:""},s.onUpdateData=function(){setTimeout((function(){return s.requestData()}),1e3)},s.requestData=function(){var t=s.props,e=t.wall,o=(t.postData,t.appendData),i=t.hasMoreData,a=t.loaderData,n=e.ThemeRule.numberOfPosts,r=Math.floor(Date.now()/1e3);i&&!a.isShowMoreLoading&&s.props.getDataNextSteps(e.Wall.id,r,n,o.networkID,o.after,o.heightEvent)},s.onLoadPopup=function(t,e){var o=s.props,i=o.wall,a=o.postData,n=o.languageSetting,r=o.completeDataObject,l=o.wallId,c=o.webFilters,u=a.map((function(t){return r[t]})),p=u.filter((function(t){return!String(t.id).includes("free_add_")})),h=(0,d.E6)(p,e.id,t);1===i.Personalization.postFeatured&&((0,d.st)("add"),s.props.showPopUP({type:"post",card:e,idArray:p,index:h,viewOnText:n.viewOnText,shareText:n.shareText,personalization:i.Personalization,ThemeRule:i.ThemeRule,webFilters:c,UserRule:i.UserRule,wall:i})),(0,j.S5)({action:2,wall:l,feed:e.feedId,post:e.referenceId})},s.handleAllImageError=function(t){try{var e=t.target.getAttribute("data-item-id");s.allImageQueue.push({src:e,e:t}),s.state.allFirstImage||s.processAllImageQueue()}catch(o){}},s.processAllImageQueue=function(){if(s.allImageQueue.length){s.setState({allFirstImage:!0});var t=s.allImageQueue[0],e=t.src,o=t.e;e&&(0,d.bO)(o,s.nextProcessAllImageQueue)}},s.nextProcessAllImageQueue=function(){try{s.allImageQueue.shift(),s.processAllImageQueue()}catch(t){}},s.secondaryRef=l.createRef(),s.slideRef=l.createRef(),s}return(0,a.Z)(o,[{key:"componentDidMount",value:function(){var t=this.props,e=t.wall,o=t.hasMoreData,s=t.postData;e.ThemeRule.numberOfCoumn==s.length&&o&&this.onUpdateData()}},{key:"render",value:function(){var t=this,e=this.props,o=e.completeDataObject,i=e.hasMoreData,a=e.wall,n=(e.newPostData,e.loaderData,e.postData),r=(e.adjustWidth,a.Personalization.columnCount),l=(a.ThemeRule.mobileColumn,a.ThemeRule.slidePost,a.ThemeRule.numberOfCoumn),c=a.ThemeRule.mobileColumn,d=(a.ThemeRule.slidePost,r>=7?"100%":5===r&&h>767?"90%":3===r&&h>767?"70%":"100%"),p=this.state,h=p.windowWidth;p.onResponsive;return(0,u.jsx)("div",{className:"ts_csl_post_container",id:"ts_theme_container",children:(0,u.jsx)(P.tq,{style:{width:d},onScroll:function(e){i&&e.progress>.8&&t.onUpdateData()},autoHeight:!0,speed:300,forceToAxis:!0,slidesPerView:0==l?6.2:l+.2,breakpoints:{480:{slidesPerView:0==c?1:c},560:{slidesPerView:0==c?2:c},767:{slidesPerView:0==c?3.2:c+.2},1024:{slidesPerView:0==l?4.2:l+.2},1400:{slidesPerView:0==l?5.2:l+.2}},mousewheel:{forceToAxis:!0},watchSlidesProgress:!0,modules:[D.pt,D.Gk],className:"ts_st_mySwiper",children:n&&n.length>0?n.map((function(e,i){var a=o[e];return(0,u.jsx)(P.o5,{ref:t.slideRef,children:function(e){var o=e.isVisible;return(0,u.jsx)(I,(0,s.Z)({handleAllImageError:t.handleAllImageError,isVisible:o,slideRef:t.slideRef,itemData:a,itemIndex:i},t.props),"post_id_".concat(i))}},"poid_".concat(i))})):null})})}}]),o}(l.PureComponent),R=(0,b.$j)((function(t){var e=t.appData;return{appData:e,loaderData:t.loaderData,newPostData:e.newPostData,appendData:e.postData.appendData,hasMoreData:!e.postData.hasMoreData[0]||0!=e.postData.hasMoreData[0].hasMoreData&&(!e.postData.hasMoreData[e.postData.appendData.networkID]||e.postData.hasMoreData[e.postData.appendData.networkID].hasMoreData)}}),(function(t){return{getDataNextSteps:function(e,o,s,i,a,n,r){return t((0,j.Sx)(e,o,s,i,a,n,r))},showPopUP:function(e){return t((0,j.Bm)(e))}}}))(N)},50247:function(){}}]);