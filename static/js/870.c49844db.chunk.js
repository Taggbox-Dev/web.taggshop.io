(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[870],{42417:function(e,t,o){"use strict";o.d(t,{Z:function(){return c}});var a=o(15671),i=o(43144),s=o(79340),n=o(48347),r=o(47313),l=(o(89800),o(46417)),c=function(e){(0,s.Z)(o,e);var t=(0,n.Z)(o);function o(){return(0,a.Z)(this,o),t.apply(this,arguments)}return(0,i.Z)(o,[{key:"render",value:function(){var e=this.props,t=e.item,o=e.wall,a=e.cardWidth,i=!!(t.ugc_products&&t.ugc_products.length>0),s=3===t.type||5===t.type,n=o&&o.User&&31724!==o.User.id,r=(o&&o.ThemeRule&&o.ThemeRule.fontSize&&o.ThemeRule.fontSize,!!(t.imageList&&t.imageList.length>0)),c=!(!r||!i),d=55==o.Personalization.commerceTheme?"tb_cs_video_multiImage":"",u=a<=700&&a>500?{fontSize:"16px"}:a<=500&&a>350?{fontSize:"14px"}:a<=350&&a>250?{fontSize:"12px"}:a<=250&&a>=150?{fontSize:"11px"}:a<150&&a>100?{fontSize:"10px"}:a<=100&&a>50?{fontSize:"8px"}:{};return(0,l.jsxs)("div",{className:"ts_post_iocn",children:[(0,l.jsxs)("div",{className:"ts_social-icon ".concat(d),style:{color:"rgb(112, 112, 112)"},children:[s&&61!==o.Personalization.commerceTheme?(0,l.jsx)("div",{className:"ts_video_icon tb_cs_video_multiImage",style:u,children:(0,l.jsx)("div",{className:"tb__icon tb-video-alt",children:(0,l.jsx)("div",{})})}):"",i,i&&n&&55!==o.Personalization.commerceTheme?(0,l.jsx)("div",{className:"ts_shop_icon",style:u,children:31665===o.User.id?(0,l.jsx)("svg",{fill:"#ffffff",height:"22",viewBox:"0 0 48 48",width:"22",children:(0,l.jsx)("path",{d:"M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"})}):(0,l.jsx)("div",{className:"tb__icon tb-shopping-bag",children:(0,l.jsx)("div",{})})}):"",!c&&r&&55!==o.Personalization.commerceTheme?(0,l.jsx)("div",{className:"tb__icon tb-multiple tb_cs_carousal_icon",style:u,children:" "}):"",r&&55==o.Personalization.commerceTheme?(0,l.jsxs)("div",{className:"ts_cs_multiple_option",children:[" ",(0,l.jsx)("div",{className:"tb__icon tb-multiple",style:u,children:" "})]}):""]}),c&&55!==o.Personalization.commerceTheme?(0,l.jsx)("div",{className:"tb__icon tb-multiple tb_cs_carousal_icon_bottom",style:u,children:" "}):""]})}}]),o}(r.PureComponent)},7284:function(e,t,o){"use strict";o.d(t,{Z:function(){return d}});var a=o(15671),i=o(43144),s=o(79340),n=o(48347),r=o(47313),l=o(73763),c=o(46417),d=function(e){(0,s.Z)(o,e);var t=(0,n.Z)(o);function o(){var e;(0,a.Z)(this,o);for(var i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).onClickCtAButton=function(t){var o=e.props,a=o.item,i=o.wall;t&&(0,l.S5)({type:1,action:2,wall:i.Wall.id,feed:a.feedId,post:a.referenceId})},e}return(0,i.Z)(o,[{key:"render",value:function(){var e=this.props,t=e.shoppingText,o=e.ctaClass,a=e.styleCta;return(0,c.jsxs)("div",{className:o,style:a,children:[" ",t," "]})}}]),o}(r.PureComponent)},29335:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var a=o(1413),i=(o(47313),o(8354)),s=o(46417);function n(e){var t=e.ugc_products,o=e.UgcSetting,n=e.item,r=(e.isPopUp,{background:o?o.hotspot_color:null}),l={background:o?o.hotspot_color:null,color:o?o.hotspot_type_color:null},c=(0,i.v9)((function(e){return e.modalPop})),d=function(e){return function(t){2==parseInt(o.tab_target)?window.parent.location.href=e:window.open(e,"_blank")}};return(0,s.jsx)("div",{className:"ts__post_hotspot",children:t.map((function(e,t){var i=parseInt(e.hotspot_cordinates.top),u=parseInt(e.hotspot_cordinates.left),p=e.UgcProduct.product_discount>0?n.ugc_personalizaion.UgcSetting.discount_price_color:n.ugc_personalizaion.UgcSetting.original_price_color,h={top:i<"30"||i<"70"&&i>"30"?"18px":"auto",left:u<"30"?"18px":u<"70"&&u>"30"?"-25px":"auto",bottom:i<"30"||i<"70"&&i>"30"?"auto":"18px",right:u<"30"||u<"70"&&u>"30"?"auto":"15px"};return(0,s.jsx)("div",{className:"ts_st_post_hotspot_icon",style:{top:e.hotspot_cordinates.top,left:e.hotspot_cordinates.left},children:1==o.hotspot_type?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{onClick:d(e.UgcProduct.product_url),className:"ts_st_post_hotspot_icon_blob_outer ts_st_post_numberHotspot",children:c.showAll||!c.isShowPopUp||c.showHotspot&&c.index==t&&c.hotspotId==e.id?(0,s.jsxs)("div",{className:"ts_st_post_hotspot_icon_blob_custom",id:"ts_st_post_hotspot_icon_blob".concat(t),style:(0,a.Z)((0,a.Z)({},l),{},{textAlign:"center"}),children:[" ",t+1]}):null}),c.showAll||!c.isShowPopUp||c.showHotspot&&c.index==t&&c.hotspotId==e.id?(0,s.jsxs)("div",{className:"".concat(c.showAll?"ts_st_post_hotspot_icon_hover":"ts_st_post_hotspot_icon_hover_custom "," ").concat(c.isShowPopUp?"":"ts_st_post_hotspot_icon_hover"),style:h,children:[(0,s.jsx)("div",{className:"ts_st_post_hotspot_icon_hover_p_name",children:e.UgcProduct.product_title}),(0,s.jsxs)("div",{style:{color:p},className:"ts_st_post_hotspot_icon_hover_act_price ".concat(e.UgcProduct.product_discount>0?"ts_st_post_hotspot_icon_hover_act_prise_diabled":""),children:[e.UgcProduct.price_currency_symbol," "," ",e.UgcProduct.product_price]}),e.UgcProduct.product_discount>0?(0,s.jsxs)("div",{className:"ts_st_post_hotspot_icon_hover_dis_price",style:{color:n.ugc_personalizaion.UgcSetting.original_price_color},children:[e.UgcProduct.price_currency_symbol," "," ",e.UgcProduct.product_discount]}):""]}):null]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{onClick:d(e.UgcProduct.product_url),className:"ts_st_post_hotspot_icon_blob_outer",children:(0,s.jsx)("div",{className:"ts_st_post_hotspot_icon_blob",style:r,children:(0,s.jsx)("div",{})})}),(0,s.jsxs)("div",{className:"ts_st_post_hotspot_icon_hover ",style:h,children:[(0,s.jsx)("div",{className:"ts_st_post_hotspot_icon_hover_p_name",children:e.UgcProduct.product_title}),(0,s.jsxs)("div",{style:{color:p},className:"ts_st_post_hotspot_icon_hover_act_price ".concat(e.UgcProduct.product_discount>0?"ts_st_post_hotspot_icon_hover_act_prise_diabled":""),children:[e.UgcProduct.price_currency_symbol," "," ",e.UgcProduct.product_price]}),e.UgcProduct.product_discount>0?(0,s.jsxs)("div",{className:"ts_st_post_hotspot_icon_hover_dis_price",style:{color:n.ugc_personalizaion.UgcSetting.original_price_color},children:[e.UgcProduct.price_currency_symbol," "," ",e.UgcProduct.product_discount," "]}):""]})]})},t)}))})}},24387:function(e,t,o){"use strict";o.d(t,{Z:function(){return d}});var a=o(15671),i=o(43144),s=o(79340),n=o(48347),r=o(47313),l=o(73763),c=o(46417),d=function(e){(0,s.Z)(o,e);var t=(0,n.Z)(o);function o(){var e;(0,a.Z)(this,o);for(var i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).onSharePost=function(t){var o=e.props,a=o.item,i=o.wall;t&&(0,l.S5)({type:2,action:2,wall:i.Wall.id,feed:a.feedId,post:a.referenceId})},e}return(0,i.Z)(o,[{key:"render",value:function(){var e=this.props,t=e.item,o=e.wall,a=e.network,i=505==o.ThemeRule.iconType?a.color:o.ThemeRule.iconColor;return(0,c.jsx)("div",{className:"ts__card_socialAction",style:{color:"rgb(255, 255, 255)"},children:1==t.networkId?(0,c.jsxs)(r.Fragment,{children:[(0,c.jsx)("a",{target:"_blank",onClick:this.onSharePost,href:"https://twitter.com/intent/tweet?in_reply_to=".concat(atob(t.postId)),title:"View",children:(0,c.jsx)("div",{className:"tb__icon tb-share-square",style:{color:i},children:(0,c.jsx)("div",{})})}),(0,c.jsxs)("a",{href:"https://twitter.com/intent/retweet?tweet_id=".concat(atob(t.postId)),title:"Comment",target:"_blank",className:"ts_icon_count_tagg",children:[(0,c.jsx)("div",{className:" tb__icon",style:{color:i},children:(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:i,viewBox:"0 0 640 512",children:(0,c.jsx)("path",{d:"M614.2 334.8C610.5 325.8 601.7 319.1 592 319.1H544V176C544 131.9 508.1 96 464 96h-128c-17.67 0-32 14.31-32 32s14.33 32 32 32h128C472.8 160 480 167.2 480 176v143.1h-48c-9.703 0-18.45 5.844-22.17 14.82s-1.656 19.29 5.203 26.16l80 80.02C499.7 445.7 505.9 448 512 448s12.28-2.344 16.97-7.031l80-80.02C615.8 354.1 617.9 343.8 614.2 334.8zM304 352h-128C167.2 352 160 344.8 160 336V192h48c9.703 0 18.45-5.844 22.17-14.82s1.656-19.29-5.203-26.16l-80-80.02C140.3 66.34 134.1 64 128 64S115.7 66.34 111 71.03l-80 80.02C24.17 157.9 22.11 168.2 25.83 177.2S38.3 192 48 192H96V336C96 380.1 131.9 416 176 416h128c17.67 0 32-14.31 32-32S321.7 352 304 352z"})})}),(0,c.jsx)("div",{style:{color:i},children:0!=t.comment_count?t.comment_count:""})]}),(0,c.jsxs)("a",{href:"https://twitter.com/intent/favorite?tweet_id=".concat(atob(t.postId)),title:"Like",target:"_blank",className:"ts_icon_count_tagg",children:[(0,c.jsx)("div",{className:"tb__icon tb-heart",style:{color:i},children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{style:{color:i},children:0!=t.like_count?t.like_count:""})]})]}):2==t.networkId||3==t.networkId||7==t.networkId||8==t.networkId||10==t.networkId||18==t.networkId?(0,c.jsxs)(r.Fragment,{children:[(0,c.jsx)("a",{href:t.link,title:"Like",target:"_blank",className:"ts_icon_count_tagg",children:(0,c.jsx)("div",{className:"tb__icon tb-thumbs-up",style:{color:i},children:(0,c.jsx)("div",{className:"",children:10==t.networkId&&t.feedId>73590||18==t.networkId?t.like_count:null})})}),(0,c.jsx)("a",{href:t.link,title:"Comment",target:"_blank",className:"ts_icon_count_tagg",children:(0,c.jsxs)("div",{className:"tb__icon tb-comment-dots",style:{color:i},children:[(0,c.jsx)("div",{}),(0,c.jsx)("div",{children:10==t.networkId&&t.feedId>73590||18==t.networkId?t.comment_count:null})]})})]}):4==t.networkId?(0,c.jsx)("a",{href:t.link,className:"fa fa-comment-o tooltips",title:"Comment",target:"_blank",children:(0,c.jsx)("div",{})}):null})}}]),o}(r.PureComponent)},23182:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return F}});var a=o(1413),i=o(42982),s=o(15861),n=o(15671),r=o(43144),l=o(79340),c=o(48347),d=o(87757),u=o.n(d),p=o(47313),h=o(70885),m=(o(29335),o(17739)),_=o(46417),g=function(e){(0,l.Z)(o,e);var t=(0,c.Z)(o);function o(){return(0,n.Z)(this,o),t.apply(this,arguments)}return(0,r.Z)(o,[{key:"componentDidMount",value:function(){var e=this;new ResizeObserver((function(t){window.dispatchEvent(new Event("resize")),e.getMarginTop()})).observe(document.querySelector(".taggshopContainer"))}},{key:"getMarginTop",value:function(){setTimeout((function(){return window.isEditor?(0,m.ll)(99):""}),100)}},{key:"render",value:function(){var e=this.props,t=e.ImageClass,o=e.ImageUrl,a=e.item,i=(e.ugc_products,e.wall),s=(e.width,e.height,e.handleAllImageError),n=(e.itemIndex,e.inViewport);"url(".concat(o,")");return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("div",{className:t,children:(0,_.jsx)("img",{loading:n?"eager":"lazy",fetchpriority:n?"high":"auto","data-src":o,src:o,"data-is-optmized":"0","data-link":a.link,"data-load":"0","data-wall-id":i.Wall.id,"data-item-id":a.id,onLoad:this.onLoadImage,"data-filter-id":a.filterId,"data-stories":a.stories,"data-network":a.networkId,width:"auto",height:"100%",className:"imgID".concat(a.id),onError:function(e){"28"!==a.networkId&&s(e)},alt:"post"})})})}}]),o}(p.PureComponent),f=o(85942),v=o(20510),w=o(84526),x=function(e){var t=e.videoRef,o=e.inViewport,a=e.item,i=e.wall,s=e.setVideoLoaded,n=(e.onPlayingVideo,e.videoLoaded),r=e.handleAllImageError,l=e.addLoadedMedia,c=e.loadedMedia,d=e.isMobile;return(0,_.jsxs)(_.Fragment,{children:[d?(0,_.jsx)(w.ZP,{style:{height:"100%"},children:(0,_.jsxs)("div",{className:"ts_rt_image reelThemeCard sk_img",children:[(0,_.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"512",height:"512",x:"0",y:"0",viewBox:"0 0 439.575 439.575",className:"",children:(0,_.jsxs)("g",{children:[(0,_.jsx)("path",{d:"M375.741 63.834c-86.554-85.707-226.199-85.021-311.906 1.533-85.112 85.953-85.112 224.421 0 310.374 86.554 85.707 226.199 85.021 311.906-1.533 85.112-85.953 85.112-224.421 0-310.374zM219.788 422.618c-111.842 0-202.831-90.988-202.831-202.831s90.988-202.83 202.831-202.83 202.831 90.988 202.831 202.831-90.989 202.83-202.831 202.83z",fill:"#FFFFFF",opacity:"1","data-original":"#FFFFFF",className:""}),(0,_.jsx)("path",{d:"M339.349 212.108v.01L160.277 108.733a8.861 8.861 0 0 0-13.292 7.671v206.769a8.861 8.861 0 0 0 13.293 7.67L339.35 227.458a8.862 8.862 0 0 0-.001-15.35z",fill:"#FFFFFF",opacity:"1","data-original":"#FFFFFF",className:""})]})}),(0,_.jsx)("img",{loading:o?"eager":"lazy",fetchpriority:o?"high":"auto","data-src":a.postFileNew,src:a.postFileNew,"data-is-optmized":"0","data-link":a.link,"data-load":"0","data-wall-id":i.Wall.id,"data-item-id":a.id,"data-filter-id":a.filterId,"data-stories":a.stories,"data-network":a.networkId,width:"auto",height:"100%",className:"imgID".concat(a.id),onError:function(e){"28"!==a.networkId&&r(e)},alt:"post"})]})}):(0,_.jsxs)(w.ZP,{style:n?{height:"100%"}:{height:"0px"},debounce:!0,children:[(0,_.jsx)(v.Z,{ref:t,poster:a.postFileNew,className:"tb-detail-image-iframe",url:o||c.includes(a.id)?(a.mediaClip,a.mediaClip):"","data-type":"video","data-network":a.networkId,"data-link":a.link,"data-wall-id":i.Wall.id,"data-item-id":a.id,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto"}}},loop:!0,onError:function(e){r(e),s(!1)},autoPlay:o,muted:!0,playsinline:!0,onReady:function(e){s(!0),l(a.id)},playing:o,height:"100%",width:"auto",style:n?{position:"relative",opacity:1}:{opacity:1}})," "]}),n?(0,_.jsx)(_.Fragment,{}):(0,_.jsx)("div",{className:"ts_rt_image reelThemeCard sk_img",children:(0,_.jsx)("img",{loading:o?"eager":"lazy",fetchpriority:o?"high":"auto","data-src":a.postFileNew,src:a.postFileNew,"data-is-optmized":"0","data-link":a.link,"data-load":"0","data-wall-id":i.Wall.id,"data-item-id":a.id,"data-filter-id":a.filterId,"data-stories":a.stories,"data-network":a.networkId,width:"auto",height:"100%",className:"imgID".concat(a.id),onError:function(e){"28"!==a.networkId&&r(e)},alt:"post"})})]})},y=function(e){var t=(0,p.useState)("100"),o=(0,h.Z)(t,2),a=o[0],i=o[1],s=(0,p.useState)("100"),n=(0,h.Z)(s,2),r=n[0],l=n[1],c=(0,p.useState)(!1),d=(0,h.Z)(c,2),u=d[0],v=d[1],w=(0,p.useState)(""),y=(0,h.Z)(w,2),b=(y[0],y[1]),j=(0,p.useState)(!1),I=(0,h.Z)(j,2),k=I[0],P=I[1],N=(0,p.useState)(!1),D=(0,h.Z)(N,2),R=D[0],T=D[1],S=(0,p.useRef)(),C=(0,p.useRef)();(0,p.useEffect)((function(){var t=e.item;T((0,m.EV)()),t.mediaHeight&&""!=t.mediaWidth?(i(100*t.mediaHeight/t.mediaWidth),l(100*t.mediaWidth/t.mediaHeight)):(0,f.Z)(t.postFileNew).then((function(e){var t=e.width,o=e.height;i(100*o/100),l(100*t/100)})).catch((function(e){i(100*a/100),l(100*r/100),b(e)}))}),[]),(0,p.useEffect)((function(){v(e.isVisible)}),[e.isVisible]);var Z=e.item,F=e.wall,M=e.handleAllImageError,U=e.isVisible,z=e.itemIndex,A=e.addLoadedMedia,V=e.loadedMedia,L=(0,m.HS)(Z.ugc_products);return(0,_.jsx)("div",{className:"ts_rt_post_image",ref:S,children:(0,_.jsx)("div",{className:"ts_rt_media_wrap",children:3==Z.type||5==Z.type?(0,_.jsx)(x,{videoRef:C,inViewport:U,item:Z,loadedMedia:V,isMobile:R,addLoadedMedia:A,wall:F,itemIndex:z,setVideoLoaded:P,playing:u,onPlayingVideo:function(e){e.playedSeconds>=3&&C.current.seekTo(0)},videoLoaded:k,handleAllImageError:M}):r?(0,_.jsx)(g,{handleAllImageError:M,inViewport:U,ImageClass:"ts_rt_image",itemIndex:z,height:a,width:r,ImageUrl:Z.postFileNew,ugc_products:L,item:Z,wall:F}):""})})},b=(o(24387),o(7284)),j=(o(16390),o(98501)),I=function(e){(0,l.Z)(o,e);var t=(0,c.Z)(o);function o(){return(0,n.Z)(this,o),t.apply(this,arguments)}return(0,r.Z)(o,[{key:"render",value:function(){var e=this.props,t=e.wall,o=e.item,a=e.isHover;t.ThemeRule.css_font,t.ThemeRule.fontSize,a&&"#ffffff"===t.ThemeRule.fontColor||(a||"#000000"!==t.ThemeRule.fontColor)&&t.ThemeRule.fontColor,(0,m.Fx)(o.content),t.Personalization.hashtag_color;return(0,_.jsx)(_.Fragment,{})}}]),o}(p.PureComponent),k=function(e){(0,l.Z)(o,e);var t=(0,c.Z)(o);function o(){return(0,n.Z)(this,o),t.apply(this,arguments)}return(0,r.Z)(o,[{key:"render",value:function(){var e=this.props,t=e.item,o=e.wall,i=e.network,s=e.cardWidth,n=!!(t.ugc_products&&t.ugc_products.length>0),r=o.ThemeRule.hideContent,l=505==o.ThemeRule.iconType?i.color:o.ThemeRule.iconColor,c=""==o.ThemeRule.postHover||1!=o.ThemeRule.postHover,d=c?"ts_white_bg_hover":"ts_black_bg_hover",u={backgroundColor:c?"rgb(255, 255, 255, 0.8)":"rgba(0, 0, 0, 0.8)"},p={fontFamily:o.ThemeRule.css_font},h=i.icon.replace("fa-",""),g=s<=700&&s>500?{fontSize:"26px"}:s<=500&&s>200?{fontSize:"22px"}:s<=200?{fontSize:"18px"}:{};return(0,_.jsx)("div",{className:"ts_rt_Post_hover",children:(0,_.jsxs)("div",{className:"ts_card_hover_in",children:[(0,_.jsx)("div",{className:"ts_rt_card_hover_overlay",style:u,children:(0,_.jsx)("div",{})}),(0,_.jsxs)("div",{className:"ts_rt_card_hover_content",children:[(0,_.jsx)("div",{className:"ts_rt_slider-social-icon",style:g,children:null!=t.rating&&0!=t.rating?(0,_.jsx)("div",{className:"ts_rt_social_rating",style:{backgroundImage:"url(".concat(j.KA).concat(t.networkId,"/").concat(t.rating,".png)")},children:(0,_.jsx)("div",{})}):(0,_.jsx)("div",{className:"tb__icon tb-".concat(h),style:(0,a.Z)({color:l},g),children:(0,_.jsxs)("div",{children:["twitter"==h?(0,_.jsx)(m.yi,{color:l}):""," "]})})}),(0,_.jsx)("div",{className:"ts_rt_card_content_00",children:n?0==r?(0,_.jsx)(I,{wall:o,item:t,isHover:c}):(0,_.jsx)("div",{className:"ts_rt_card_shop_btn  ".concat(d),children:(0,_.jsx)(b.Z,{shoppingText:o.ThemeRule.shoppingText,ctaClass:"ts_rt_shop_btn",styleCta:p})}):(0,_.jsx)(I,{wall:o,item:t,isHover:c})})]})]})})}}]),o}(p.PureComponent),P=o(42417),N=o(8354),D=o(73763),R=function(e){(0,l.Z)(o,e);var t=(0,c.Z)(o);function o(e){var a;return(0,n.Z)(this,o),(a=t.call(this,e)).onLoadPopup=function(e){var t=a.props,o=t.itemData,i=t.wall,s=t.postData,n=t.itemId,r=t.languageSetting,l=t.completeDataObject,c=t.wallId,d=t.webFilters,u=s.map((function(e){return l[e]})),p=u.filter((function(e){return!String(e.id).includes("free_add_")})),h=(0,m.E6)(p,o.id,s.indexOf(n));1===i.Personalization.postFeatured&&((0,m.st)("add"),a.state.isMobile?a.props.showReelPopUP({type:"post",card:o,idArray:p,index:h,viewOnText:r.viewOnText,shareText:r.shareText,personalization:i.Personalization,ThemeRule:i.ThemeRule,webFilters:d,UserRule:i.UserRule,wall:i}):a.props.showPopUP({type:"post",card:o,idArray:p,index:h,viewOnText:r.viewOnText,shareText:r.shareText,personalization:i.Personalization,ThemeRule:i.ThemeRule,webFilters:d,UserRule:i.UserRule,wall:i})),(0,D.S5)({action:2,wall:c,feed:o.feedId,post:o.referenceId})},a.myRef=p.createRef(),a.state={cardWidth:null,isMobile:(0,m.EV)()},a}return(0,r.Z)(o,[{key:"componentDidMount",value:function(){var e=this;(0,m.kA)(this.props.itemData.id)&&(this.onLoadPopup(),setTimeout((function(){var t=document.querySelector(".ts_p_".concat(e.props.itemData.id));t&&t.scrollIntoView(!0),e.myRef&&e.myRef.current&&e.setState({cardWidth:e.myRef.current.clientWidth})}),500))}},{key:"componentDidUpdate",value:function(){var e=this;setTimeout((function(){e.myRef&&e.myRef.current&&e.setState({cardWidth:e.myRef.current.clientWidth})}),1e3)}},{key:"render",value:function(){var e=this.props,t=e.itemData,o=e.wall,a=e.webFilters,i=e.handleAllImageError,s=e.isVisible,n=e.itemIndex,r=e.addLoadedMedia,l=e.loadedMedia,c=(0,m.EH)(t.networkId,a),d={backgroundColor:o.ThemeRule.cardColor,borderRadius:o.ThemeRule.roundEdge},u={width:"100%",height:"auto",padding:o.Personalization.padding/2},p=!!(t.ugc_products&&t.ugc_products.length>0),h=(3===t.type||t.type,!!(t.imageList&&t.imageList.length>0));return(0,_.jsx)("div",{className:"ts_rt_post_wrapper ".concat(t&&t.id?"ts_p_"+t.id:""),ref:this.myRef,id:"ts_".concat(t.id),onClick:t.isPost?null:this.onLoadPopup,style:u,"data-method":t.id,children:(0,_.jsxs)("div",{className:"ts_rt_post_in ".concat(t.hotspot?"":"ts_rt_post_in_hostpot_hover"),style:d,children:[p||h?(0,_.jsx)(P.Z,{item:t,cardWidth:this.state.cardWidth,wall:o}):"",(0,_.jsx)(y,{handleAllImageError:i,loadedMedia:l,addLoadedMedia:r,item:t,wall:o,itemIndex:n,isVisible:s,mediaRef:this.myRef}),(0,_.jsx)(k,{cardWidth:this.state.cardWidth,item:t,wall:o,network:c})]})})}}]),o}(p.PureComponent),T=(0,N.$j)((function(e){return{wallId:e.appData.wallID}}),(function(e){return{showPopUP:function(t){return e((0,D.Bm)(t))},showReelPopUP:function(t){return e((0,D.Sy)(t))}}}))(R),S=o(83912),C=(o(98871),o(63680),o(26173),o(37595)),Z=function(e){(0,l.Z)(o,e);var t=(0,c.Z)(o);function o(e){var a;return(0,n.Z)(this,o),(a=t.call(this,e)).allImageQueue=[],a.state={allFirstImage:!1,windowWidth:document.querySelector(".taggshopContainer")?document.querySelector(".taggshopContainer").clientWidth:"",loadedMedia:[],isMobile:!1},a.preloadImages=function(){var e=(0,s.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&t.length&&t.forEach(function(){var e=(0,s.Z)(u().mark((function e(t){var o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=a.props.completeDataObject[t],e.next=3,a.preloadImage(o.postFileNew);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.preloadImage=function(e){return new Promise((function(t,o){var a=new Image;a.src=e,a.style.display="none",a.onload=function(){console.log("removed"),document.body.removeChild(a),t()},a.onerror=o,document.body.appendChild(a)}))},a.onUpdateData=function(){setTimeout((function(){return a.requestData()}),1e3)},a.requestData=function(){var e=a.props,t=e.wall,o=(e.postData,e.appendData),i=e.hasMoreData,s=e.loaderData,n=t.ThemeRule.numberOfPosts,r=Math.floor(Date.now()/1e3);i&&!s.isShowMoreLoading&&a.props.getDataNextSteps(t.Wall.id,r,n,o.networkID,o.after,o.heightEvent)},a.onLoadPopup=function(e,t){var o=a.props,i=o.wall,s=o.postData,n=o.languageSetting,r=o.completeDataObject,l=o.wallId,c=o.webFilters,d=s.map((function(e){return r[e]})),u=d.filter((function(e){return!String(e.id).includes("free_add_")})),p=(0,m.E6)(u,t.id,e);1===i.Personalization.postFeatured&&((0,m.st)("add"),a.props.showPopUP({type:"post",card:t,idArray:u,index:p,viewOnText:n.viewOnText,shareText:n.shareText,personalization:i.Personalization,ThemeRule:i.ThemeRule,webFilters:c,UserRule:i.UserRule,wall:i})),(0,D.S5)({action:2,wall:l,feed:t.feedId,post:t.referenceId})},a.handleAllImageError=function(e){try{var t=e.target.getAttribute("data-item-id");a.allImageQueue.push({src:t,e:e}),a.state.allFirstImage||a.processAllImageQueue()}catch(o){}},a.processAllImageQueue=function(){if(a.allImageQueue.length){a.setState({allFirstImage:!0});var e=a.allImageQueue[0],t=e.src,o=e.e;t&&(console.log("src",t),(0,m.bO)(o,a.nextProcessAllImageQueue))}},a.nextProcessAllImageQueue=function(){try{a.allImageQueue.shift(),a.processAllImageQueue()}catch(e){}},a.DetectIphone=function(){var e=navigator.userAgent.toLowerCase();e.search("iphone")>-1||e.search("android")>-1?a.setState({isMobile:!0}):a.setState({isMobile:!1})},a.addLoadedMedia=function(e){return a.setState({loadedMedia:[].concat((0,i.Z)(a.state.loadedMedia),[e])})},a.secondaryRef=p.createRef(),a.slideRef=p.createRef(),a}return(0,r.Z)(o,[{key:"componentDidMount",value:function(){var e=this.props,t=e.wall,o=e.hasMoreData,a=e.postData;this.preloadImages(a),this.DetectIphone(),t.ThemeRule.numberOfCoumn==a.length&&o&&this.onUpdateData()}},{key:"render",value:function(){var e=this,t=this.props,o=t.completeDataObject,i=t.hasMoreData,s=t.wall,n=t.loaderData,r=t.postData,l=this.state,c=(l.windowWidth,l.loadedMedia),d=l.isMobile,u=(s.Personalization.columnCount,s.ThemeRule.slidePost),p=s.ThemeRule.numberOfCoumn;return(0,_.jsx)("div",{className:"ts_rl_post_container",id:"ts_theme_container",children:(0,_.jsxs)(S.tq,{style:{width:"100%"},onScroll:function(t){i&&t.progress>.8&&e.onUpdateData()},onSlideChange:function(t){i&&t.progress>.8&&e.onUpdateData()},onAutoplay:function(t){i&&t.progress>.8&&e.onUpdateData()},autoHeight:!0,speed:700,edgeSwipeDetection:!0,slidesPerView:0==p?6.2:p+.5,touchRatio:2,cssMode:d,passiveListeners:!0,height:"250px",freeMode:{enabled:!0,sticky:!1,momentumBounceRatio:2,momentumVelocityRatio:3},autoplay:{delay:u?1e3*s.ThemeRule.slideDuration:99e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{0:{slidesPerView:1.6},576:{slidesPerView:0==p?2.6:p+.6},768:{slidesPerView:0==p?3.6:p+.6},1024:{slidesPerView:0==p?4.6:p+.6},1200:{slidesPerView:0==p?5.6:p+.6},1440:{slidesPerView:0==p?6.6:p+.6},1800:{slidesPerView:0==p?7.6:p+.6},2500:{slidesPerView:0==p?8.6:p+.6}},mousewheel:{forceToAxis:!0,sensitivity:2},watchSlidesProgress:!0,modules:[C.pt,C.Gk,C.Rv],className:"ts_st_mySwiper",children:[r&&r.length>0?r.map((function(t,i){var s=o[t];return(0,_.jsx)(S.o5,{ref:e.slideRef,children:function(t){var o=t.isVisible;return(0,_.jsx)(T,(0,a.Z)({handleAllImageError:e.handleAllImageError,isVisible:o,addLoadedMedia:e.addLoadedMedia,loadedMedia:c,slideRef:e.slideRef,itemData:s,itemIndex:i},e.props),"post_id_".concat(i))}},"poid_".concat(i))})):null,i&&n.isShowMoreLoading?(0,_.jsx)(S.o5,{children:(0,_.jsx)("div",{className:"ts_rt_post_wrapper",style:{width:"100%",height:"auto",padding:s.Personalization.padding/2},children:(0,_.jsx)("div",{className:"sk_img reelThemeCard m-0",children:(0,_.jsx)("div",{})})})},"poid_loading"):(0,_.jsx)(_.Fragment,{})]})})}}]),o}(p.PureComponent),F=(0,N.$j)((function(e){var t=e.appData;return{appData:t,loaderData:e.loaderData,newPostData:t.newPostData,appendData:t.postData.appendData,hasMoreData:!t.postData.hasMoreData[0]||0!=t.postData.hasMoreData[0].hasMoreData&&(!t.postData.hasMoreData[t.postData.appendData.networkID]||t.postData.hasMoreData[t.postData.appendData.networkID].hasMoreData)}}),(function(e){return{getDataNextSteps:function(t,o,a,i,s,n,r){return e((0,D.Sx)(t,o,a,i,s,n,r))},showPopUP:function(t){return e((0,D.Bm)(t))}}}))(Z)},50247:function(){}}]);