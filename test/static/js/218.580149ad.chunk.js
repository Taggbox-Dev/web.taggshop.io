(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[218],{42417:function(e,t,o){"use strict";o.d(t,{Z:function(){return c}});var n=o(15671),i=o(43144),a=o(79340),r=o(48347),s=o(47313),l=(o(89800),o(46417)),c=function(e){(0,a.Z)(o,e);var t=(0,r.Z)(o);function o(){return(0,n.Z)(this,o),t.apply(this,arguments)}return(0,i.Z)(o,[{key:"render",value:function(){var e=this.props,t=e.item,o=e.wall,n=e.cardWidth,i=!!(t.ugc_products&&t.ugc_products.length>0),a=(3===t.type||t.type,o&&o.User&&31724!==o.User.id),r=(o&&o.ThemeRule&&o.ThemeRule.fontSize&&o.ThemeRule.fontSize,!!(t.imageList&&t.imageList.length>0)),s=!(!r||!i),c=55==o.Personalization.commerceTheme?"tb_cs_video_multiImage":"",d=n<=700&&n>500?{fontSize:"16px"}:n<=500&&n>350?{fontSize:"14px"}:n<=350&&n>250?{fontSize:"12px"}:n<=250&&n>=150?{fontSize:"11px"}:n<150&&n>100?{fontSize:"10px"}:n<=100&&n>50?{fontSize:"8px"}:{};return(0,l.jsxs)("div",{className:"ts_post_iocn",children:[(0,l.jsxs)("div",{className:"ts_social-icon ".concat(c),style:{color:"rgb(112, 112, 112)"},children:[i,i&&a&&55!==o.Personalization.commerceTheme?(0,l.jsx)("div",{className:"ts_shop_icon",style:d,children:31665===o.User.id?(0,l.jsx)("svg",{fill:"#ffffff",height:"22",viewBox:"0 0 48 48",width:"22",children:(0,l.jsx)("path",{d:"M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"})}):(0,l.jsx)("div",{className:"tb__icon tb-shopping-bag",children:(0,l.jsx)("div",{})})}):"",!s&&r&&55!==o.Personalization.commerceTheme?(0,l.jsx)("div",{className:"tb__icon tb-multiple tb_cs_carousal_icon",style:d,children:" "}):"",r&&55==o.Personalization.commerceTheme?(0,l.jsxs)("div",{className:"ts_cs_multiple_option",children:[" ",(0,l.jsx)("div",{className:"tb__icon tb-multiple",style:d,children:" "})]}):""]}),s&&55!==o.Personalization.commerceTheme?(0,l.jsx)("div",{className:"tb__icon tb-multiple tb_cs_carousal_icon_bottom",style:d,children:" "}):""]})}}]),o}(s.PureComponent)},7284:function(e,t,o){"use strict";o.d(t,{Z:function(){return d}});var n=o(15671),i=o(43144),a=o(79340),r=o(48347),s=o(47313),l=o(73763),c=o(46417),d=function(e){(0,a.Z)(o,e);var t=(0,r.Z)(o);function o(){var e;(0,n.Z)(this,o);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).onClickCtAButton=function(t){var o=e.props,n=o.item,i=o.wall;t&&(0,l.S5)({type:1,action:2,wall:i.Wall.id,feed:n.feedId,post:n.referenceId})},e}return(0,i.Z)(o,[{key:"render",value:function(){var e=this.props,t=e.shoppingText,o=e.ctaClass,n=e.styleCta;return(0,c.jsxs)("div",{className:o,style:n,children:[" ",t," "]})}}]),o}(s.PureComponent)},29335:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var n=o(1413),i=(o(47313),o(8354)),a=o(46417);function r(e){var t=e.ugc_products,o=e.UgcSetting,r=e.item,s=(e.isPopUp,{background:o?o.hotspot_color:null}),l={background:o?o.hotspot_color:null,color:o?o.hotspot_type_color:null},c=(0,i.v9)((function(e){return e.modalPop})),d=function(e){return function(t){2==parseInt(o.tab_target)?window.parent.location.href=e:window.open(e,"_blank")}};return(0,a.jsx)("div",{className:"ts__post_hotspot",children:t.map((function(e,t){var i=parseInt(e.hotspot_cordinates.top),u=parseInt(e.hotspot_cordinates.left),p=e.UgcProduct.product_discount>0?r.ugc_personalizaion.UgcSetting.discount_price_color:r.ugc_personalizaion.UgcSetting.original_price_color,h={top:i<"30"||i<"70"&&i>"30"?"18px":"auto",left:u<"30"?"18px":u<"70"&&u>"30"?"-25px":"auto",bottom:i<"30"||i<"70"&&i>"30"?"auto":"18px",right:u<"30"||u<"70"&&u>"30"?"auto":"15px"};return(0,a.jsx)("div",{className:"ts_st_post_hotspot_icon",style:{top:e.hotspot_cordinates.top,left:e.hotspot_cordinates.left},children:1==o.hotspot_type?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{onClick:d(e.UgcProduct.product_url),className:"ts_st_post_hotspot_icon_blob_outer ts_st_post_numberHotspot",children:c.showAll||!c.isShowPopUp||c.showHotspot&&c.index==t&&c.hotspotId==e.id?(0,a.jsxs)("div",{className:"ts_st_post_hotspot_icon_blob_custom",id:"ts_st_post_hotspot_icon_blob".concat(t),style:(0,n.Z)((0,n.Z)({},l),{},{textAlign:"center"}),children:[" ",t+1]}):null}),c.showAll||!c.isShowPopUp||c.showHotspot&&c.index==t&&c.hotspotId==e.id?(0,a.jsxs)("div",{className:"".concat(c.showAll?"ts_st_post_hotspot_icon_hover":"ts_st_post_hotspot_icon_hover_custom "," ").concat(c.isShowPopUp?"":"ts_st_post_hotspot_icon_hover"),style:h,children:[(0,a.jsx)("div",{className:"ts_st_post_hotspot_icon_hover_p_name",children:e.UgcProduct.product_title}),(0,a.jsxs)("div",{style:{color:p},className:"ts_st_post_hotspot_icon_hover_act_price ".concat(e.UgcProduct.product_discount>0?"ts_st_post_hotspot_icon_hover_act_prise_diabled":""),children:[e.UgcProduct.price_currency_symbol," "," ",e.UgcProduct.product_price]}),e.UgcProduct.product_discount>0?(0,a.jsxs)("div",{className:"ts_st_post_hotspot_icon_hover_dis_price",style:{color:r.ugc_personalizaion.UgcSetting.original_price_color},children:[e.UgcProduct.price_currency_symbol," "," ",e.UgcProduct.product_discount]}):""]}):null]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{onClick:d(e.UgcProduct.product_url),className:"ts_st_post_hotspot_icon_blob_outer",children:(0,a.jsx)("div",{className:"ts_st_post_hotspot_icon_blob",style:s,children:(0,a.jsx)("div",{})})}),(0,a.jsxs)("div",{className:"ts_st_post_hotspot_icon_hover ",style:h,children:[(0,a.jsx)("div",{className:"ts_st_post_hotspot_icon_hover_p_name",children:e.UgcProduct.product_title}),(0,a.jsxs)("div",{style:{color:p},className:"ts_st_post_hotspot_icon_hover_act_price ".concat(e.UgcProduct.product_discount>0?"ts_st_post_hotspot_icon_hover_act_prise_diabled":""),children:[e.UgcProduct.price_currency_symbol," "," ",e.UgcProduct.product_price]}),e.UgcProduct.product_discount>0?(0,a.jsxs)("div",{className:"ts_st_post_hotspot_icon_hover_dis_price",style:{color:r.ugc_personalizaion.UgcSetting.original_price_color},children:[e.UgcProduct.price_currency_symbol," "," ",e.UgcProduct.product_discount," "]}):""]})]})},t)}))})}},24387:function(e,t,o){"use strict";o.d(t,{Z:function(){return d}});var n=o(15671),i=o(43144),a=o(79340),r=o(48347),s=o(47313),l=o(73763),c=o(46417),d=function(e){(0,a.Z)(o,e);var t=(0,r.Z)(o);function o(){var e;(0,n.Z)(this,o);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).onSharePost=function(t){var o=e.props,n=o.item,i=o.wall;t&&(0,l.S5)({type:2,action:2,wall:i.Wall.id,feed:n.feedId,post:n.referenceId})},e}return(0,i.Z)(o,[{key:"render",value:function(){var e=this.props,t=e.item,o=e.wall,n=e.network,i=505==o.ThemeRule.iconType?n.color:o.ThemeRule.iconColor;return(0,c.jsx)("div",{className:"ts__card_socialAction",style:{color:"rgb(255, 255, 255)"},children:1==t.networkId?(0,c.jsxs)(s.Fragment,{children:[(0,c.jsx)("a",{target:"_blank",onClick:this.onSharePost,href:"https://twitter.com/intent/tweet?in_reply_to=".concat(atob(t.postId)),title:"View",children:(0,c.jsx)("div",{className:"tb__icon tb-share-square",style:{color:i},children:(0,c.jsx)("div",{})})}),(0,c.jsxs)("a",{href:"https://twitter.com/intent/retweet?tweet_id=".concat(atob(t.postId)),title:"Comment",target:"_blank",className:"ts_icon_count_tagg",children:[(0,c.jsx)("div",{className:" tb__icon",style:{color:i},children:(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:i,viewBox:"0 0 640 512",children:(0,c.jsx)("path",{d:"M614.2 334.8C610.5 325.8 601.7 319.1 592 319.1H544V176C544 131.9 508.1 96 464 96h-128c-17.67 0-32 14.31-32 32s14.33 32 32 32h128C472.8 160 480 167.2 480 176v143.1h-48c-9.703 0-18.45 5.844-22.17 14.82s-1.656 19.29 5.203 26.16l80 80.02C499.7 445.7 505.9 448 512 448s12.28-2.344 16.97-7.031l80-80.02C615.8 354.1 617.9 343.8 614.2 334.8zM304 352h-128C167.2 352 160 344.8 160 336V192h48c9.703 0 18.45-5.844 22.17-14.82s1.656-19.29-5.203-26.16l-80-80.02C140.3 66.34 134.1 64 128 64S115.7 66.34 111 71.03l-80 80.02C24.17 157.9 22.11 168.2 25.83 177.2S38.3 192 48 192H96V336C96 380.1 131.9 416 176 416h128c17.67 0 32-14.31 32-32S321.7 352 304 352z"})})}),(0,c.jsx)("div",{style:{color:i},children:0!=t.comment_count?t.comment_count:""})]}),(0,c.jsxs)("a",{href:"https://twitter.com/intent/favorite?tweet_id=".concat(atob(t.postId)),title:"Like",target:"_blank",className:"ts_icon_count_tagg",children:[(0,c.jsx)("div",{className:"tb__icon tb-heart",style:{color:i},children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{style:{color:i},children:0!=t.like_count?t.like_count:""})]})]}):2==t.networkId||3==t.networkId||7==t.networkId||8==t.networkId||10==t.networkId||18==t.networkId?(0,c.jsxs)(s.Fragment,{children:[(0,c.jsx)("a",{href:t.link,title:"Like",target:"_blank",className:"ts_icon_count_tagg",children:(0,c.jsx)("div",{className:"tb__icon tb-thumbs-up",style:{color:i},children:(0,c.jsx)("div",{className:"",children:10==t.networkId&&t.feedId>73590||18==t.networkId?t.like_count:null})})}),(0,c.jsx)("a",{href:t.link,title:"Comment",target:"_blank",className:"ts_icon_count_tagg",children:(0,c.jsxs)("div",{className:"tb__icon tb-comment-dots",style:{color:i},children:[(0,c.jsx)("div",{}),(0,c.jsx)("div",{children:10==t.networkId&&t.feedId>73590||18==t.networkId?t.comment_count:null})]})})]}):4==t.networkId?(0,c.jsx)("a",{href:t.link,className:"fa fa-comment-o tooltips",title:"Comment",target:"_blank",children:(0,c.jsx)("div",{})}):null})}}]),o}(s.PureComponent)},23182:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return Z}});var n=o(1413),i=o(42982),a=o(15861),r=o(15671),s=o(43144),l=o(79340),c=o(48347),d=o(87757),u=o.n(d),p=o(47313),h=o(70885),f=(o(29335),o(17739)),m=o(46417),_=function(e){(0,l.Z)(o,e);var t=(0,c.Z)(o);function o(){return(0,r.Z)(this,o),t.apply(this,arguments)}return(0,s.Z)(o,[{key:"componentDidMount",value:function(){var e=this;new ResizeObserver((function(t){window.dispatchEvent(new Event("resize")),e.getMarginTop()})).observe(document.querySelector(".taggshopContainer"))}},{key:"getMarginTop",value:function(){setTimeout((function(){return window.isEditor?(0,f.ll)(99):""}),100)}},{key:"render",value:function(){var e=this.props,t=e.ImageClass,o=e.ImageUrl,n=e.item,i=(e.ugc_products,e.wall),a=(e.width,e.height,e.handleAllImageError),r=(e.itemIndex,e.inViewport);"url(".concat(o,")");return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{className:t,children:(0,m.jsx)("img",{loading:r?"eager":"lazy",fetchpriority:r?"high":"auto","data-src":o,src:o,"data-is-optmized":"0","data-link":n.link,"data-load":"0","data-wall-id":i.Wall.id,"data-item-id":n.id,onLoad:this.onLoadImage,"data-filter-id":n.filterId,"data-stories":n.stories,"data-network":n.networkId,width:"auto",height:"100%",className:"imgID".concat(n.id),onError:function(e){"28"!==n.networkId&&a(e)},alt:"post"})})})}}]),o}(p.PureComponent),v=o(85942),g=o(20510),w=o(84526),y=function(e){var t=e.videoRef,o=e.inViewport,n=e.item,i=e.wall,a=e.setVideoLoaded,r=e.onPlayingVideo,s=e.videoLoaded,l=e.handleAllImageError,c=e.addLoadedMedia,d=e.loadedMedia,u=e.isMobile;return(0,m.jsxs)(m.Fragment,{children:[u?(0,m.jsx)(w.ZP,{style:{height:"100%"},children:(0,m.jsxs)("div",{className:"ts_rt_image reelThemeCard sk_img",children:[(0,m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"512",height:"512",x:"0",y:"0",viewBox:"0 0 439.575 439.575",className:"",children:(0,m.jsxs)("g",{children:[(0,m.jsx)("path",{d:"M375.741 63.834c-86.554-85.707-226.199-85.021-311.906 1.533-85.112 85.953-85.112 224.421 0 310.374 86.554 85.707 226.199 85.021 311.906-1.533 85.112-85.953 85.112-224.421 0-310.374zM219.788 422.618c-111.842 0-202.831-90.988-202.831-202.831s90.988-202.83 202.831-202.83 202.831 90.988 202.831 202.831-90.989 202.83-202.831 202.83z",fill:"#FFFFFF",opacity:"1","data-original":"#FFFFFF",className:""}),(0,m.jsx)("path",{d:"M339.349 212.108v.01L160.277 108.733a8.861 8.861 0 0 0-13.292 7.671v206.769a8.861 8.861 0 0 0 13.293 7.67L339.35 227.458a8.862 8.862 0 0 0-.001-15.35z",fill:"#FFFFFF",opacity:"1","data-original":"#FFFFFF",className:""})]})}),(0,m.jsx)("img",{loading:o?"eager":"lazy",fetchpriority:o?"high":"auto","data-src":n.postFileNew,src:n.postFileNew,"data-is-optmized":"0","data-link":n.link,"data-load":"0","data-wall-id":i.Wall.id,"data-item-id":n.id,"data-filter-id":n.filterId,"data-stories":n.stories,"data-network":n.networkId,width:"auto",height:"100%",className:"imgID".concat(n.id),onError:function(e){"28"!==n.networkId&&l(e)},alt:"post"})]})}):(0,m.jsxs)(w.ZP,{unmountIfInvisible:!0,style:s?{height:"100%"}:{height:"0px"},debounce:!0,children:[(0,m.jsx)(g.Z,{ref:t,poster:n.postFileNew,className:"tb-detail-image-iframe",url:o||d.includes(n.id)?n.mediaUrl:"","data-type":"video","data-network":n.networkId,"data-link":n.link,"data-wall-id":i.Wall.id,"data-item-id":n.id,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto"}}},loop:!0,onError:function(e){l(e),a(!1)},autoPlay:o,muted:!0,playsinline:!0,onReady:function(e){a(!0),c(n.id)},playing:o,height:"100%",width:"100%",onProgress:r,style:s?{position:"relative",opacity:1}:{opacity:1}})," "]}),s?(0,m.jsx)(m.Fragment,{}):(0,m.jsx)("div",{className:"ts_rt_image reelThemeCard sk_img",children:(0,m.jsx)("img",{loading:o?"eager":"lazy",fetchpriority:o?"high":"auto","data-src":n.postFileNew,src:n.postFileNew,"data-is-optmized":"0","data-link":n.link,"data-load":"0","data-wall-id":i.Wall.id,"data-item-id":n.id,"data-filter-id":n.filterId,"data-stories":n.stories,"data-network":n.networkId,width:"auto",height:"100%",className:"imgID".concat(n.id),onError:function(e){"28"!==n.networkId&&l(e)},alt:"post"})})]})},b=function(e){var t=(0,p.useState)("100"),o=(0,h.Z)(t,2),n=o[0],i=o[1],a=(0,p.useState)("100"),r=(0,h.Z)(a,2),s=r[0],l=r[1],c=(0,p.useState)(!1),d=(0,h.Z)(c,2),u=d[0],g=d[1],w=(0,p.useState)(""),b=(0,h.Z)(w,2),x=(b[0],b[1]),j=(0,p.useState)(!1),I=(0,h.Z)(j,2),k=I[0],P=I[1],N=(0,p.useState)(!1),D=(0,h.Z)(N,2),T=D[0],R=D[1],C=(0,p.useRef)(),S=(0,p.useRef)();(0,p.useEffect)((function(){var t=e.item;R((0,f.EV)()),t.mediaHeight&&""!=t.mediaWidth?(i(100*t.mediaHeight/t.mediaWidth),l(100*t.mediaWidth/t.mediaHeight)):(0,v.Z)(t.postFileNew).then((function(e){var t=e.width,o=e.height;i(100*o/100),l(100*t/100)})).catch((function(e){i(100*n/100),l(100*s/100),x(e)}))}),[]),(0,p.useEffect)((function(){g(e.isVisible)}),[e.isVisible]);var M=e.item,Z=e.wall,z=e.handleAllImageError,E=e.isVisible,F=e.itemIndex,U=e.addLoadedMedia,A=e.loadedMedia,L=(0,f.HS)(M.ugc_products);return(0,m.jsx)("div",{className:"ts_rt_post_image",ref:C,children:(0,m.jsx)("div",{className:"ts_rt_media_wrap",children:3==M.type||5==M.type?(0,m.jsx)(y,{videoRef:S,inViewport:E,item:M,loadedMedia:A,isMobile:T,addLoadedMedia:U,wall:Z,itemIndex:F,setVideoLoaded:P,playing:u,onPlayingVideo:function(e){e.playedSeconds>=3&&S.current.seekTo(0)},videoLoaded:k,handleAllImageError:z}):s?(0,m.jsx)(_,{handleAllImageError:z,inViewport:E,ImageClass:"ts_rt_image",itemIndex:F,height:n,width:s,ImageUrl:M.postFileNew,ugc_products:L,item:M,wall:Z}):""})})},x=(o(24387),o(7284)),j=(o(16390),o(98501)),I=function(e){(0,l.Z)(o,e);var t=(0,c.Z)(o);function o(){return(0,r.Z)(this,o),t.apply(this,arguments)}return(0,s.Z)(o,[{key:"render",value:function(){var e=this.props,t=e.wall,o=e.item,n=e.isHover;t.ThemeRule.css_font,t.ThemeRule.fontSize,n&&"#ffffff"===t.ThemeRule.fontColor||(n||"#000000"!==t.ThemeRule.fontColor)&&t.ThemeRule.fontColor,(0,f.Fx)(o.content),t.Personalization.hashtag_color;return(0,m.jsx)(m.Fragment,{})}}]),o}(p.PureComponent),k=function(e){(0,l.Z)(o,e);var t=(0,c.Z)(o);function o(){return(0,r.Z)(this,o),t.apply(this,arguments)}return(0,s.Z)(o,[{key:"render",value:function(){var e=this.props,t=e.item,o=e.wall,i=e.network,a=e.cardWidth,r=!!(t.ugc_products&&t.ugc_products.length>0),s=o.ThemeRule.hideContent,l=505==o.ThemeRule.iconType?i.color:o.ThemeRule.iconColor,c=""==o.ThemeRule.postHover||1!=o.ThemeRule.postHover,d=c?"ts_white_bg_hover":"ts_black_bg_hover",u={backgroundColor:c?"rgb(255, 255, 255, 0.8)":"rgba(0, 0, 0, 0.8)"},p={fontFamily:o.ThemeRule.css_font},h=i.icon.replace("fa-",""),_=a<=700&&a>500?{fontSize:"26px"}:a<=500&&a>200?{fontSize:"22px"}:a<=200?{fontSize:"18px"}:{};return(0,m.jsx)("div",{className:"ts_rt_Post_hover",children:(0,m.jsxs)("div",{className:"ts_card_hover_in",children:[(0,m.jsx)("div",{className:"ts_rt_card_hover_overlay",style:u,children:(0,m.jsx)("div",{})}),(0,m.jsxs)("div",{className:"ts_rt_card_hover_content",children:[(0,m.jsx)("div",{className:"ts_rt_slider-social-icon",style:_,children:null!=t.rating&&0!=t.rating?(0,m.jsx)("div",{className:"ts_rt_social_rating",style:{backgroundImage:"url(".concat(j.KA).concat(t.networkId,"/").concat(t.rating,".png)")},children:(0,m.jsx)("div",{})}):(0,m.jsx)("div",{className:"tb__icon tb-".concat(h),style:(0,n.Z)({color:l},_),children:(0,m.jsxs)("div",{children:["twitter"==h?(0,m.jsx)(f.yi,{color:l}):""," "]})})}),(0,m.jsx)("div",{className:"ts_rt_card_content_00",children:r?0==s?(0,m.jsx)(I,{wall:o,item:t,isHover:c}):(0,m.jsx)("div",{className:"ts_rt_card_shop_btn  ".concat(d),children:(0,m.jsx)(x.Z,{shoppingText:o.ThemeRule.shoppingText,ctaClass:"ts_rt_shop_btn",styleCta:p})}):(0,m.jsx)(I,{wall:o,item:t,isHover:c})})]})]})})}}]),o}(p.PureComponent),P=o(42417),N=o(8354),D=o(73763),T=function(e){(0,l.Z)(o,e);var t=(0,c.Z)(o);function o(e){var n;return(0,r.Z)(this,o),(n=t.call(this,e)).onLoadPopup=function(e){var t=n.props,o=t.itemData,i=t.wall,a=t.postData,r=t.itemId,s=t.languageSetting,l=t.completeDataObject,c=t.wallId,d=t.webFilters,u=a.map((function(e){return l[e]})),p=u.filter((function(e){return!String(e.id).includes("free_add_")})),h=(0,f.E6)(p,o.id,a.indexOf(r));1===i.Personalization.postFeatured&&((0,f.st)("add"),n.state.isMobile?n.props.showReelPopUP({type:"post",card:o,idArray:p,index:h,viewOnText:s.viewOnText,shareText:s.shareText,personalization:i.Personalization,ThemeRule:i.ThemeRule,webFilters:d,UserRule:i.UserRule,wall:i}):n.props.showPopUP({type:"post",card:o,idArray:p,index:h,viewOnText:s.viewOnText,shareText:s.shareText,personalization:i.Personalization,ThemeRule:i.ThemeRule,webFilters:d,UserRule:i.UserRule,wall:i})),(0,D.S5)({action:2,wall:c,feed:o.feedId,post:o.referenceId})},n.myRef=p.createRef(),n.state={cardWidth:null,isMobile:(0,f.EV)()},n}return(0,s.Z)(o,[{key:"componentDidMount",value:function(){var e=this;(0,f.kA)(this.props.itemData.id)&&(this.onLoadPopup(),setTimeout((function(){var t=document.querySelector(".ts_p_".concat(e.props.itemData.id));t&&t.scrollIntoView(!0),e.myRef&&e.myRef.current&&e.setState({cardWidth:e.myRef.current.clientWidth})}),500))}},{key:"componentDidUpdate",value:function(){var e=this;setTimeout((function(){e.myRef&&e.myRef.current&&e.setState({cardWidth:e.myRef.current.clientWidth})}),1e3)}},{key:"render",value:function(){var e=this.props,t=e.itemData,o=e.wall,n=e.webFilters,i=e.handleAllImageError,a=e.isVisible,r=e.itemIndex,s=e.addLoadedMedia,l=e.loadedMedia,c=(0,f.EH)(t.networkId,n),d={backgroundColor:o.ThemeRule.cardColor,borderRadius:o.ThemeRule.roundEdge},u={width:"100%",height:"auto",padding:o.Personalization.padding/2},p=!!(t.ugc_products&&t.ugc_products.length>0),h=(3===t.type||t.type,!!(t.imageList&&t.imageList.length>0));return(0,m.jsx)("div",{className:"ts_rt_post_wrapper ".concat(t&&t.id?"ts_p_"+t.id:""),ref:this.myRef,id:"ts_".concat(t.id),onClick:t.isPost?null:this.onLoadPopup,style:u,"data-method":t.id,children:(0,m.jsxs)("div",{className:"ts_rt_post_in ".concat(t.hotspot?"":"ts_rt_post_in_hostpot_hover"),style:d,children:[p||h?(0,m.jsx)(P.Z,{item:t,cardWidth:this.state.cardWidth,wall:o}):"",(0,m.jsx)(b,{handleAllImageError:i,loadedMedia:l,addLoadedMedia:s,item:t,wall:o,itemIndex:r,isVisible:a,mediaRef:this.myRef}),(0,m.jsx)(k,{cardWidth:this.state.cardWidth,item:t,wall:o,network:c})]})})}}]),o}(p.PureComponent),R=(0,N.$j)((function(e){return{wallId:e.appData.wallID}}),(function(e){return{showPopUP:function(t){return e((0,D.Bm)(t))},showReelPopUP:function(t){return e((0,D.Sy)(t))}}}))(T),C=o(83912),S=(o(98871),o(63680),o(26173),o(37595)),M=function(e){(0,l.Z)(o,e);var t=(0,c.Z)(o);function o(e){var n;return(0,r.Z)(this,o),(n=t.call(this,e)).allImageQueue=[],n.state={allFirstImage:!1,windowWidth:document.querySelector(".taggshopContainer")?document.querySelector(".taggshopContainer").clientWidth:"",loadedMedia:[],isMobile:!1},n.preloadImages=function(){var e=(0,a.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&t.length&&t.forEach(function(){var e=(0,a.Z)(u().mark((function e(t){var o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n.props.completeDataObject[t],e.next=3,n.preloadImage(o.postFileNew);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.preloadImage=function(e){return new Promise((function(t,o){var n=new Image;n.src=e,n.style.display="none",n.onload=function(){console.log("removed"),document.body.removeChild(n),t()},n.onerror=o,document.body.appendChild(n)}))},n.onUpdateData=function(){setTimeout((function(){return n.requestData()}),1e3)},n.requestData=function(){var e=n.props,t=e.wall,o=(e.postData,e.appendData),i=e.hasMoreData,a=e.loaderData,r=t.ThemeRule.numberOfPosts,s=Math.floor(Date.now()/1e3);i&&!a.isShowMoreLoading&&n.props.getDataNextSteps(t.Wall.id,s,r,o.networkID,o.after,o.heightEvent)},n.onLoadPopup=function(e,t){var o=n.props,i=o.wall,a=o.postData,r=o.languageSetting,s=o.completeDataObject,l=o.wallId,c=o.webFilters,d=a.map((function(e){return s[e]})),u=d.filter((function(e){return!String(e.id).includes("free_add_")})),p=(0,f.E6)(u,t.id,e);1===i.Personalization.postFeatured&&((0,f.st)("add"),n.props.showPopUP({type:"post",card:t,idArray:u,index:p,viewOnText:r.viewOnText,shareText:r.shareText,personalization:i.Personalization,ThemeRule:i.ThemeRule,webFilters:c,UserRule:i.UserRule,wall:i})),(0,D.S5)({action:2,wall:l,feed:t.feedId,post:t.referenceId})},n.handleAllImageError=function(e){try{var t=e.target.getAttribute("data-item-id");n.allImageQueue.push({src:t,e:e}),n.state.allFirstImage||n.processAllImageQueue()}catch(o){}},n.processAllImageQueue=function(){if(n.allImageQueue.length){n.setState({allFirstImage:!0});var e=n.allImageQueue[0],t=e.src,o=e.e;t&&(console.log("src",t),(0,f.bO)(o,n.nextProcessAllImageQueue))}},n.nextProcessAllImageQueue=function(){try{n.allImageQueue.shift(),n.processAllImageQueue()}catch(e){}},n.DetectIphone=function(){var e=navigator.userAgent.toLowerCase();e.search("iphone")>-1||e.search("android")>-1?n.setState({isMobile:!0}):n.setState({isMobile:!1})},n.addLoadedMedia=function(e){return n.setState({loadedMedia:[].concat((0,i.Z)(n.state.loadedMedia),[e])})},n.secondaryRef=p.createRef(),n.slideRef=p.createRef(),n}return(0,s.Z)(o,[{key:"componentDidMount",value:function(){var e=this.props,t=e.wall,o=e.hasMoreData,n=e.postData;this.preloadImages(n),this.DetectIphone(),t.ThemeRule.numberOfCoumn==n.length&&o&&this.onUpdateData()}},{key:"render",value:function(){var e=this,t=this.props,o=t.completeDataObject,i=t.hasMoreData,a=t.wall,r=t.loaderData,s=t.postData,l=this.state,c=(l.windowWidth,l.loadedMedia),d=l.isMobile,u=(a.Personalization.columnCount,a.ThemeRule.slidePost),p=a.ThemeRule.numberOfCoumn;return(0,m.jsx)("div",{className:"ts_rl_post_container",id:"ts_theme_container",children:(0,m.jsxs)(C.tq,{style:{width:"100%"},onScroll:function(t){i&&t.progress>.8&&e.onUpdateData()},onSlideChange:function(t){i&&t.progress>.8&&e.onUpdateData()},onAutoplay:function(t){i&&t.progress>.8&&e.onUpdateData()},autoHeight:!0,speed:700,edgeSwipeDetection:!0,slidesPerView:0==p?6.2:p+.5,touchRatio:2,cssMode:d,passiveListeners:!0,height:"250px",freeMode:{enabled:!0,sticky:!1,momentumBounceRatio:2,momentumVelocityRatio:3},autoplay:{delay:u?1e3*a.ThemeRule.slideDuration:99e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{320:{slidesPerView:1.6},480:{slidesPerView:1.6},575:{slidesPerView:1.6},767:{slidesPerView:0==p?3.6:p+.6},1024:{slidesPerView:0==p?4.6:p+.6},1400:{slidesPerView:0==p?5.6:p+.6}},mousewheel:{forceToAxis:!0,sensitivity:2},watchSlidesProgress:!0,modules:[S.pt,S.Gk,S.Rv],className:"ts_st_mySwiper",children:[s&&s.length>0?s.map((function(t,i){var a=o[t];return(0,m.jsx)(C.o5,{ref:e.slideRef,children:function(t){var o=t.isVisible;return(0,m.jsx)(R,(0,n.Z)({handleAllImageError:e.handleAllImageError,isVisible:o,addLoadedMedia:e.addLoadedMedia,loadedMedia:c,slideRef:e.slideRef,itemData:a,itemIndex:i},e.props),"post_id_".concat(i))}},"poid_".concat(i))})):null,i&&r.isShowMoreLoading?(0,m.jsx)(C.o5,{children:(0,m.jsx)("div",{className:"ts_rt_post_wrapper",style:{width:"100%",height:"auto",padding:a.Personalization.padding/2},children:(0,m.jsx)("div",{className:"sk_img reelThemeCard m-0",children:(0,m.jsx)("div",{})})})},"poid_loading"):(0,m.jsx)(m.Fragment,{})]})})}}]),o}(p.PureComponent),Z=(0,N.$j)((function(e){var t=e.appData;return{appData:t,loaderData:e.loaderData,newPostData:t.newPostData,appendData:t.postData.appendData,hasMoreData:!t.postData.hasMoreData[0]||0!=t.postData.hasMoreData[0].hasMoreData&&(!t.postData.hasMoreData[t.postData.appendData.networkID]||t.postData.hasMoreData[t.postData.appendData.networkID].hasMoreData)}}),(function(e){return{getDataNextSteps:function(t,o,n,i,a,r,s){return e((0,D.Sx)(t,o,n,i,a,r,s))},showPopUP:function(t){return e((0,D.Bm)(t))}}}))(M)},84526:function(e,t,o){"use strict";var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=o(47313),a=u(i),r=u(o(75192)),s=o(45159),l=u(o(63077)),c=u(o(15895)),d=u(o(15396));function u(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function f(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var m=0,_=0,v=0,g=0,w="data-lazyload-listened",y=[],b=[],x=!1;try{var j=Object.defineProperty({},"passive",{get:function(){x=!0}});window.addEventListener("test",null,j)}catch(S){}var I=!!x&&{capture:!1,passive:!0},k=function(e){var t=e.ref;if(t instanceof HTMLElement){var o=(0,l.default)(t),n=e.props.overflow&&o!==t.ownerDocument&&o!==document&&o!==document.documentElement?function(e,t){var o=e.ref,n=void 0,i=void 0,a=void 0,r=void 0;try{var s=t.getBoundingClientRect();n=s.top,i=s.left,a=s.height,r=s.width}catch(S){n=m,i=_,a=g,r=v}var l=window.innerHeight||document.documentElement.clientHeight,c=window.innerWidth||document.documentElement.clientWidth,d=Math.max(n,0),u=Math.max(i,0),p=Math.min(l,n+a)-d,h=Math.min(c,i+r)-u,f=void 0,w=void 0,y=void 0,b=void 0;try{var x=o.getBoundingClientRect();f=x.top,w=x.left,y=x.height,b=x.width}catch(S){f=m,w=_,y=g,b=v}var j=f-d,I=w-u,k=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return j-k[0]<=p&&j+y+k[1]>=0&&I-k[0]<=h&&I+b+k[1]>=0}(e,o):function(e){var t=e.ref;if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var o=void 0,n=void 0;try{var i=t.getBoundingClientRect();o=i.top,n=i.height}catch(S){o=m,n=g}var a=window.innerHeight||document.documentElement.clientHeight,r=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return o-r[0]<=a&&o+n+r[1]>=0}(e);n?e.visible||(e.props.once&&b.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},P=function(){b.forEach((function(e){var t=y.indexOf(e);-1!==t&&y.splice(t,1)})),b=[]},N=function(){for(var e=0;e<y.length;++e){var t=y[e];k(t)}P()},D=void 0,T=null,R=function(e){function t(e){p(this,t);var o=h(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.visible=!1,o.setRef=o.setRef.bind(o),o}return f(t,e),n(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"===typeof t&&(e=e.document.querySelector(t));var o=void 0!==this.props.debounce&&"throttle"===D||"debounce"===D&&void 0===this.props.debounce;if(o&&((0,s.off)(e,"scroll",T,I),(0,s.off)(window,"resize",T,I),T=null),T||(void 0!==this.props.debounce?(T=(0,c.default)(N,"number"===typeof this.props.debounce?this.props.debounce:300),D="debounce"):void 0!==this.props.throttle?(T=(0,d.default)(N,"number"===typeof this.props.throttle?this.props.throttle:300),D="throttle"):T=N),this.props.overflow){var n=(0,l.default)(this.ref);if(n&&"function"===typeof n.getAttribute){var i=+n.getAttribute(w)+1;1===i&&n.addEventListener("scroll",T,I),n.setAttribute(w,i)}}else if(0===y.length||o){var a=this.props,r=a.scroll,u=a.resize;r&&(0,s.on)(e,"scroll",T,I),u&&(0,s.on)(window,"resize",T,I)}y.push(this),k(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,l.default)(this.ref);if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(w)-1;0===t?(e.removeEventListener("scroll",T,I),e.removeAttribute(w)):e.setAttribute(w,t)}}var o=y.indexOf(this);-1!==o&&y.splice(o,1),0===y.length&&"undefined"!==typeof window&&((0,s.off)(window,"resize",T,I),(0,s.off)(window,"scroll",T,I))}},{key:"setRef",value:function(e){e&&(this.ref=e)}},{key:"render",value:function(){var e=this.props,t=e.height,o=e.children,n=e.placeholder,i=e.className,r=e.classNamePrefix,s=e.style;return a.default.createElement("div",{className:r+"-wrapper "+i,ref:this.setRef,style:s},this.visible?o:n||a.default.createElement("div",{style:{height:t},className:r+"-placeholder"}))}}]),t}(i.Component);R.propTypes={className:r.default.string,classNamePrefix:r.default.string,once:r.default.bool,height:r.default.oneOfType([r.default.number,r.default.string]),offset:r.default.oneOfType([r.default.number,r.default.arrayOf(r.default.number)]),overflow:r.default.bool,resize:r.default.bool,scroll:r.default.bool,children:r.default.node,throttle:r.default.oneOfType([r.default.number,r.default.bool]),debounce:r.default.oneOfType([r.default.number,r.default.bool]),placeholder:r.default.node,scrollContainer:r.default.oneOfType([r.default.string,r.default.object]),unmountIfInvisible:r.default.bool,style:r.default.object},R.defaultProps={className:"",classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var C=function(e){return e.displayName||e.name||"Component"};t.ZP=R},15895:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,o){var n=void 0,i=void 0,a=void 0,r=void 0,s=void 0,l=function l(){var c=+new Date-r;c<t&&c>=0?n=setTimeout(l,t-c):(n=null,o||(s=e.apply(a,i),n||(a=null,i=null)))};return function(){a=this,i=arguments,r=+new Date;var c=o&&!n;return n||(n=setTimeout(l,t)),c&&(s=e.apply(a,i),a=null,i=null),s}}},45159:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,o,n){n=n||!1,e.addEventListener?e.addEventListener(t,o,n):e.attachEvent&&e.attachEvent("on"+t,(function(t){o.call(e,t||window.event)}))},t.off=function(e,t,o,n){n=n||!1,e.removeEventListener?e.removeEventListener(t,o,n):e.detachEvent&&e.detachEvent("on"+t,o)}},63077:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,o=/(scroll|auto)/,n=e;n;){if(!n.parentNode)return e.ownerDocument||document.documentElement;var i=window.getComputedStyle(n),a=i.position,r=i.overflow,s=i["overflow-x"],l=i["overflow-y"];if("static"===a&&t)n=n.parentNode;else{if(o.test(r)&&o.test(s)&&o.test(l))return n;n=n.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},15396:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,o){var n,i;return t||(t=250),function(){var a=o||this,r=+new Date,s=arguments;n&&r<n+t?(clearTimeout(i),i=setTimeout((function(){n=r,e.apply(a,s)}),t)):(n=r,e.apply(a,s))}}},50247:function(){}}]);