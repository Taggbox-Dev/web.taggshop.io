(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[394],{42417:function(e,t,o){"use strict";o.d(t,{Z:function(){return c}});var a=o(15671),i=o(43144),s=o(60136),n=o(29388),r=o(47313),l=(o(89800),o(46417)),c=function(e){(0,s.Z)(o,e);var t=(0,n.Z)(o);function o(){return(0,a.Z)(this,o),t.apply(this,arguments)}return(0,i.Z)(o,[{key:"render",value:function(){var e=this.props,t=e.item,o=e.wall,a=e.cardWidth,i=!!(t.ugc_products&&t.ugc_products.length>0),s=3===t.type||5===t.type,n=o&&o.User&&31724!==o.User.id,r=(o&&o.ThemeRule&&o.ThemeRule.fontSize&&o.ThemeRule.fontSize,!!(t.imageList&&t.imageList.length>0)),c=!(!r||!i),d=55==o.Personalization.commerceTheme?"tb_cs_video_multiImage":"",u=a<=700&&a>500?{fontSize:"16px"}:a<=500&&a>350?{fontSize:"14px"}:a<=350&&a>250?{fontSize:"12px"}:a<=250&&a>=150?{fontSize:"11px"}:a<150&&a>100?{fontSize:"10px"}:a<=100&&a>50?{fontSize:"8px"}:{};return(0,l.jsxs)("div",{className:"ts_post_iocn",children:[(0,l.jsxs)("div",{className:"ts_social-icon ".concat(d),style:{color:"rgb(112, 112, 112)"},children:[s?(0,l.jsx)("div",{className:"ts_video_icon tb_cs_video_multiImage",style:u,children:(0,l.jsx)("div",{className:"tb__icon tb-video-alt",children:(0,l.jsx)("div",{})})}):"",i,i&&n&&55!==o.Personalization.commerceTheme?(0,l.jsx)("div",{className:"ts_shop_icon",style:u,children:31665===o.User.id?(0,l.jsx)("svg",{fill:"#ffffff",height:"22",viewBox:"0 0 48 48",width:"22",children:(0,l.jsx)("path",{d:"M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"})}):(0,l.jsx)("div",{className:"tb__icon tb-shopping-bag",children:(0,l.jsx)("div",{})})}):"",!c&&r&&55!==o.Personalization.commerceTheme?(0,l.jsx)("div",{className:"tb__icon tb-multiple tb_cs_carousal_icon",style:u,children:" "}):"",r&&55==o.Personalization.commerceTheme?(0,l.jsxs)("div",{className:"ts_cs_multiple_option",children:[" ",(0,l.jsx)("div",{className:"tb__icon tb-multiple",style:u,children:" "})]}):""]}),c&&55!==o.Personalization.commerceTheme?(0,l.jsx)("div",{className:"tb__icon tb-multiple tb_cs_carousal_icon_bottom",style:u,children:" "}):""]})}}]),o}(r.PureComponent)},7284:function(e,t,o){"use strict";o.d(t,{Z:function(){return d}});var a=o(15671),i=o(43144),s=o(60136),n=o(29388),r=o(47313),l=o(73763),c=o(46417),d=function(e){(0,s.Z)(o,e);var t=(0,n.Z)(o);function o(){var e;(0,a.Z)(this,o);for(var i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).onClickCtAButton=function(t){var o=e.props,a=o.item,i=o.wall;t&&(0,l.S5)({type:1,action:2,wall:i.Wall.id,feed:a.feedId,post:a.referenceId})},e}return(0,i.Z)(o,[{key:"render",value:function(){var e=this.props,t=e.shoppingText,o=e.ctaClass,a=e.styleCta;return(0,c.jsxs)("div",{className:o,style:a,children:[" ",t," "]})}}]),o}(r.PureComponent)},29335:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var a=o(1413),i=(o(47313),o(8354)),s=o(46417);function n(e){var t=e.ugc_products,o=e.UgcSetting,n=e.item,r=(e.isPopUp,{background:o?o.hotspot_color:null}),l={background:o?o.hotspot_color:null,color:o?o.hotspot_type_color:null},c=(0,i.v9)((function(e){return e.modalPop})),d=function(e){return function(t){2==parseInt(o.tab_target)?window.parent.location.href=e:window.open(e,"_blank")}};return(0,s.jsx)("div",{className:"ts__post_hotspot",children:t.map((function(e,t){var i=parseInt(e.hotspot_cordinates.top),u=parseInt(e.hotspot_cordinates.left),p=e.UgcProduct.product_discount>0?n.ugc_personalizaion.UgcSetting.discount_price_color:n.ugc_personalizaion.UgcSetting.original_price_color,h={top:i<"30"||i<"70"&&i>"30"?"18px":"auto",left:u<"30"?"18px":u<"70"&&u>"30"?"-25px":"auto",bottom:i<"30"||i<"70"&&i>"30"?"auto":"18px",right:u<"30"||u<"70"&&u>"30"?"auto":"15px"};return(0,s.jsx)("div",{className:"ts_st_post_hotspot_icon",style:{top:e.hotspot_cordinates.top,left:e.hotspot_cordinates.left},children:1==o.hotspot_type?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{onClick:d(e.UgcProduct.product_url),className:"ts_st_post_hotspot_icon_blob_outer ts_st_post_numberHotspot",children:c.showAll||!c.isShowPopUp||c.showHotspot&&c.index==t&&c.hotspotId==e.id?(0,s.jsxs)("div",{className:"ts_st_post_hotspot_icon_blob_custom",id:"ts_st_post_hotspot_icon_blob".concat(t),style:(0,a.Z)((0,a.Z)({},l),{},{textAlign:"center"}),children:[" ",t+1]}):null}),c.showAll||!c.isShowPopUp||c.showHotspot&&c.index==t&&c.hotspotId==e.id?(0,s.jsxs)("div",{className:"".concat(c.showAll?"ts_st_post_hotspot_icon_hover":"ts_st_post_hotspot_icon_hover_custom "," ").concat(c.isShowPopUp?"":"ts_st_post_hotspot_icon_hover"),style:h,children:[(0,s.jsx)("div",{className:"ts_st_post_hotspot_icon_hover_p_name",children:e.UgcProduct.product_title}),(0,s.jsxs)("div",{style:{color:p},className:"ts_st_post_hotspot_icon_hover_act_price ".concat(e.UgcProduct.product_discount>0?"ts_st_post_hotspot_icon_hover_act_prise_diabled":""),children:[e.UgcProduct.price_currency_symbol," "," ",e.UgcProduct.product_price]}),e.UgcProduct.product_discount>0?(0,s.jsxs)("div",{className:"ts_st_post_hotspot_icon_hover_dis_price",style:{color:n.ugc_personalizaion.UgcSetting.original_price_color},children:[e.UgcProduct.price_currency_symbol," "," ",e.UgcProduct.product_discount]}):""]}):null]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{onClick:d(e.UgcProduct.product_url),className:"ts_st_post_hotspot_icon_blob_outer",children:(0,s.jsx)("div",{className:"ts_st_post_hotspot_icon_blob",style:r,children:(0,s.jsx)("div",{})})}),(0,s.jsxs)("div",{className:"ts_st_post_hotspot_icon_hover ",style:h,children:[(0,s.jsx)("div",{className:"ts_st_post_hotspot_icon_hover_p_name",children:e.UgcProduct.product_title}),(0,s.jsxs)("div",{style:{color:p},className:"ts_st_post_hotspot_icon_hover_act_price ".concat(e.UgcProduct.product_discount>0?"ts_st_post_hotspot_icon_hover_act_prise_diabled":""),children:[e.UgcProduct.price_currency_symbol," "," ",e.UgcProduct.product_price]}),e.UgcProduct.product_discount>0?(0,s.jsxs)("div",{className:"ts_st_post_hotspot_icon_hover_dis_price",style:{color:n.ugc_personalizaion.UgcSetting.original_price_color},children:[e.UgcProduct.price_currency_symbol," "," ",e.UgcProduct.product_discount," "]}):""]})]})},t)}))})}},24387:function(e,t,o){"use strict";o.d(t,{Z:function(){return d}});var a=o(15671),i=o(43144),s=o(60136),n=o(29388),r=o(47313),l=o(73763),c=o(46417),d=function(e){(0,s.Z)(o,e);var t=(0,n.Z)(o);function o(){var e;(0,a.Z)(this,o);for(var i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).onSharePost=function(t){var o=e.props,a=o.item,i=o.wall;t&&(0,l.S5)({type:2,action:2,wall:i.Wall.id,feed:a.feedId,post:a.referenceId})},e}return(0,i.Z)(o,[{key:"render",value:function(){var e=this.props,t=e.item,o=e.wall,a=e.network,i=505==o.ThemeRule.iconType?a.color:o.ThemeRule.iconColor;return(0,c.jsx)("div",{className:"ts__card_socialAction",style:{color:"rgb(255, 255, 255)"},children:1==t.networkId?(0,c.jsxs)(r.Fragment,{children:[(0,c.jsx)("a",{target:"_blank",onClick:this.onSharePost,href:"https://twitter.com/intent/tweet?in_reply_to=".concat(atob(t.postId)),title:"View",children:(0,c.jsx)("div",{className:"tb__icon tb-share-square",style:{color:i},children:(0,c.jsx)("div",{})})}),(0,c.jsxs)("a",{href:"https://twitter.com/intent/retweet?tweet_id=".concat(atob(t.postId)),title:"Comment",target:"_blank",className:"ts_icon_count_tagg",children:[(0,c.jsx)("div",{className:" tb__icon",style:{color:i},children:(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:i,viewBox:"0 0 640 512",children:(0,c.jsx)("path",{d:"M614.2 334.8C610.5 325.8 601.7 319.1 592 319.1H544V176C544 131.9 508.1 96 464 96h-128c-17.67 0-32 14.31-32 32s14.33 32 32 32h128C472.8 160 480 167.2 480 176v143.1h-48c-9.703 0-18.45 5.844-22.17 14.82s-1.656 19.29 5.203 26.16l80 80.02C499.7 445.7 505.9 448 512 448s12.28-2.344 16.97-7.031l80-80.02C615.8 354.1 617.9 343.8 614.2 334.8zM304 352h-128C167.2 352 160 344.8 160 336V192h48c9.703 0 18.45-5.844 22.17-14.82s1.656-19.29-5.203-26.16l-80-80.02C140.3 66.34 134.1 64 128 64S115.7 66.34 111 71.03l-80 80.02C24.17 157.9 22.11 168.2 25.83 177.2S38.3 192 48 192H96V336C96 380.1 131.9 416 176 416h128c17.67 0 32-14.31 32-32S321.7 352 304 352z"})})}),(0,c.jsx)("div",{style:{color:i},children:0!=t.comment_count?t.comment_count:""})]}),(0,c.jsxs)("a",{href:"https://twitter.com/intent/favorite?tweet_id=".concat(atob(t.postId)),title:"Like",target:"_blank",className:"ts_icon_count_tagg",children:[(0,c.jsx)("div",{className:"tb__icon tb-heart",style:{color:i},children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{style:{color:i},children:0!=t.like_count?t.like_count:""})]})]}):2==t.networkId||3==t.networkId||7==t.networkId||8==t.networkId||10==t.networkId||18==t.networkId?(0,c.jsxs)(r.Fragment,{children:[(0,c.jsx)("a",{href:t.link,title:"Like",target:"_blank",className:"ts_icon_count_tagg",children:(0,c.jsx)("div",{className:"tb__icon tb-thumbs-up",style:{color:i},children:(0,c.jsx)("div",{className:"",children:10==t.networkId&&t.feedId>73590||18==t.networkId?t.like_count:null})})}),(0,c.jsx)("a",{href:t.link,title:"Comment",target:"_blank",className:"ts_icon_count_tagg",children:(0,c.jsxs)("div",{className:"tb__icon tb-comment-dots",style:{color:i},children:[(0,c.jsx)("div",{}),(0,c.jsx)("div",{children:10==t.networkId&&t.feedId>73590||18==t.networkId?t.comment_count:null})]})})]}):4==t.networkId?(0,c.jsx)("a",{href:t.link,className:"fa fa-comment-o tooltips",title:"Comment",target:"_blank",children:(0,c.jsx)("div",{})}):null})}}]),o}(r.PureComponent)},76544:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return T}});var a=o(1413),i=o(42982),s=o(15671),n=o(43144),r=o(60136),l=o(29388),c=o(47313),d=o(70885),u=(o(29335),o(17739)),p=o(46417),h=function(e){(0,r.Z)(o,e);var t=(0,l.Z)(o);function o(){return(0,s.Z)(this,o),t.apply(this,arguments)}return(0,n.Z)(o,[{key:"componentDidMount",value:function(){var e=this;new ResizeObserver((function(t){window.dispatchEvent(new Event("resize")),e.getMarginTop()})).observe(document.querySelector(".taggshopContainer"))}},{key:"getMarginTop",value:function(){setTimeout((function(){return window.isEditor?(0,u.ll)(99):""}),100)}},{key:"render",value:function(){var e=this.props,t=e.ImageClass,o=e.ImageUrl,a=e.item,i=(e.ugc_products,e.wall),s=(e.width,e.height,e.handleAllImageError),n=e.itemIndex,r=e.inViewport;"url(".concat(o,")");return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("div",{className:t,children:(0,p.jsx)("img",{loading:r&&n<2?"eager":"lazy",fetchpriority:r&&n<2?"high":"auto","data-src":o,src:o,"data-is-optmized":"0","data-link":a.link,"data-load":"0","data-wall-id":i.Wall.id,"data-item-id":a.id,onLoad:this.onLoadImage,"data-filter-id":a.filterId,"data-stories":a.stories,"data-network":a.networkId,width:"auto",height:"100%",className:"imgID".concat(a.id),onError:function(e){"28"!==a.networkId&&s(e)},alt:"post"})})})}}]),o}(c.PureComponent),_=o(85942),m=o(20510),g=o(98501),f=function(e){var t=e.videoRef,o=e.inViewport,a=e.item,i=e.wall,s=e.setVideoLoaded,n=(e.playing,e.onPlayingVideo),r=e.videoLoaded,l=e.handleAllImageError,c=e.itemIndex,d=e.addLoadedMedia,h=(e.loadedMedia,e.isMobile);return(0,p.jsxs)(p.Fragment,{children:[h?(0,p.jsxs)("div",{className:"ts_rt_image",children:[(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"512",height:"512",x:"0",y:"0",viewBox:"0 0 439.575 439.575",class:"",children:(0,p.jsxs)("g",{children:[(0,p.jsx)("path",{d:"M375.741 63.834c-86.554-85.707-226.199-85.021-311.906 1.533-85.112 85.953-85.112 224.421 0 310.374 86.554 85.707 226.199 85.021 311.906-1.533 85.112-85.953 85.112-224.421 0-310.374zM219.788 422.618c-111.842 0-202.831-90.988-202.831-202.831s90.988-202.83 202.831-202.83 202.831 90.988 202.831 202.831-90.989 202.83-202.831 202.83z",fill:"#FFFFFF",opacity:"1","data-original":"#FFFFFF",class:""}),(0,p.jsx)("path",{d:"M339.349 212.108v.01L160.277 108.733a8.861 8.861 0 0 0-13.292 7.671v206.769a8.861 8.861 0 0 0 13.293 7.67L339.35 227.458a8.862 8.862 0 0 0-.001-15.35z",fill:"#FFFFFF",opacity:"1","data-original":"#FFFFFF",class:""})]})}),(0,p.jsx)("img",{loading:o&&c<2?"eager":"lazy",fetchpriority:o&&c<1?"high":"auto","data-src":a.postFileNew,src:a.postFileNew,"data-is-optmized":"0","data-link":a.link,"data-load":"0","data-wall-id":i.Wall.id,"data-item-id":a.id,"data-filter-id":a.filterId,"data-stories":a.stories,"data-network":a.networkId,width:"auto",height:"100%",className:"imgID".concat(a.id," lazyload"),onError:function(e){"28"!==a.networkId&&l(e)},alt:"post"})]}):(0,p.jsx)(m.Z,{ref:t,poster:a.postFileNew,className:"tb-detail-image-iframe",url:o?a.mediaUrl:"","data-type":"video","data-network":a.networkId,"data-link":a.link,"data-wall-id":i.Wall.id,"data-item-id":a.id,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}}},onError:function(e){(0,u.b3)(e),s(!1)},autoPlay:o,muted:!0,playsinline:!0,onReady:function(e){s(!0),d(a.id)},playing:o,height:"100%",width:"auto",onProgress:n,style:r&&o?{position:"relative"}:{display:"none"}}),r?(0,p.jsx)(p.Fragment,{}):(0,p.jsx)("div",{className:"ts_rt_image",children:(0,p.jsx)("img",{loading:o&&c<2?"eager":"lazy",fetchpriority:o&&c<1?"high":"auto","data-src":a.postFileNew,src:a.postFileNew,"data-is-optmized":"0","data-link":a.link,"data-load":"0","data-wall-id":i.Wall.id,"data-item-id":a.id,"data-filter-id":a.filterId,"data-stories":a.stories,"data-network":a.networkId,width:"auto",height:"100%",className:"imgID".concat(a.id," lazyload"),onError:function(e){"28"!==a.networkId&&l(e)},alt:"post"})})]})},v=c.memo(f),w=function(e){var t=(0,c.useState)("100"),o=(0,d.Z)(t,2),a=o[0],i=o[1],s=(0,c.useState)("100"),n=(0,d.Z)(s,2),r=n[0],l=n[1],m=(0,c.useState)(!1),g=(0,d.Z)(m,2),f=g[0],w=g[1],x=(0,c.useState)(""),y=(0,d.Z)(x,2),j=(y[0],y[1]),b=(0,c.useState)(!1),I=(0,d.Z)(b,2),k=I[0],P=I[1],D=(0,c.useState)(!1),N=(0,d.Z)(D,2),S=N[0],R=N[1],T=(0,c.useRef)(),C=(0,c.useRef)();(0,c.useEffect)((function(){var t=e.item;R((0,u.EV)()),t.mediaHeight&&""!=t.mediaWidth?(i(100*t.mediaHeight/t.mediaWidth),l(100*t.mediaWidth/t.mediaHeight)):(0,_.Z)(t.postFileNew).then((function(e){var t=e.width,o=e.height;i(100*o/100),l(100*t/100)})).catch((function(e){i(100*a/100),l(100*r/100),j(e)}))}),[]),(0,c.useEffect)((function(){w(e.isVisible)}),[e.isVisible]);var F=e.item,M=e.wall,Z=e.handleAllImageError,z=e.isVisible,U=e.itemIndex,A=e.addLoadedMedia,L=e.loadedMedia,V=(0,u.HS)(F.ugc_products);return(0,p.jsx)("div",{className:"ts_rt_post_image",ref:T,children:(0,p.jsx)("div",{className:"ts_rt_media_wrap",children:3==F.type||5==F.type?(0,p.jsx)(v,{videoRef:C,inViewport:z,item:F,loadedMedia:L,isMobile:S,addLoadedMedia:A,wall:M,itemIndex:U,setVideoLoaded:P,playing:f,onPlayingVideo:function(e){e.playedSeconds>=3&&C.current.seekTo(0)},videoLoaded:k,handleAllImageError:Z}):r?(0,p.jsx)(h,{handleAllImageError:Z,inViewport:z,ImageClass:"ts_rt_image",itemIndex:U,height:a,width:r,ImageUrl:F.postFileNew,ugc_products:V,item:F,wall:M}):""})})},x=(o(24387),o(7284)),y=(o(16390),function(e){(0,r.Z)(o,e);var t=(0,l.Z)(o);function o(){return(0,s.Z)(this,o),t.apply(this,arguments)}return(0,n.Z)(o,[{key:"render",value:function(){var e=this.props,t=e.wall,o=e.item,a=e.isHover;t.ThemeRule.css_font,t.ThemeRule.fontSize,a&&"#ffffff"===t.ThemeRule.fontColor||(a||"#000000"!==t.ThemeRule.fontColor)&&t.ThemeRule.fontColor,(0,u.Fx)(o.content),t.Personalization.hashtag_color;return(0,p.jsx)(p.Fragment,{})}}]),o}(c.PureComponent)),j=function(e){(0,r.Z)(o,e);var t=(0,l.Z)(o);function o(){return(0,s.Z)(this,o),t.apply(this,arguments)}return(0,n.Z)(o,[{key:"render",value:function(){var e=this.props,t=e.item,o=e.wall,i=e.network,s=e.cardWidth,n=!!(t.ugc_products&&t.ugc_products.length>0),r=o.ThemeRule.hideContent,l=505==o.ThemeRule.iconType?i.color:o.ThemeRule.iconColor,c=""==o.ThemeRule.postHover||1!=o.ThemeRule.postHover,d=c?"ts_white_bg_hover":"ts_black_bg_hover",h={backgroundColor:c?"rgb(255, 255, 255, 0.8)":"rgba(0, 0, 0, 0.8)"},_={fontFamily:o.ThemeRule.css_font},m=i.icon.replace("fa-",""),f=s<=700&&s>500?{fontSize:"26px"}:s<=500&&s>200?{fontSize:"22px"}:s<=200?{fontSize:"18px"}:{};return(0,p.jsx)("div",{className:"ts_rt_Post_hover",children:(0,p.jsxs)("div",{className:"ts_card_hover_in",children:[(0,p.jsx)("div",{className:"ts_rt_card_hover_overlay",style:h,children:(0,p.jsx)("div",{})}),(0,p.jsxs)("div",{className:"ts_rt_card_hover_content",children:[(0,p.jsx)("div",{className:"ts_rt_slider-social-icon",style:f,children:null!=t.rating&&0!=t.rating?(0,p.jsx)("div",{className:"ts_rt_social_rating",style:{backgroundImage:"url(".concat(g.KA).concat(t.networkId,"/").concat(t.rating,".png)")},children:(0,p.jsx)("div",{})}):(0,p.jsx)("div",{className:"tb__icon tb-".concat(m),style:(0,a.Z)({color:l},f),children:(0,p.jsxs)("div",{children:["twitter"==m?(0,p.jsx)(u.yi,{color:l}):""," "]})})}),(0,p.jsx)("div",{className:"ts_rt_card_content_00",children:n?0==r?(0,p.jsx)(y,{wall:o,item:t,isHover:c}):(0,p.jsx)("div",{className:"ts_rt_card_shop_btn  ".concat(d),children:(0,p.jsx)(x.Z,{shoppingText:o.ThemeRule.shoppingText,ctaClass:"ts_rt_shop_btn",styleCta:_})}):(0,p.jsx)(y,{wall:o,item:t,isHover:c})})]})]})})}}]),o}(c.PureComponent),b=o(42417),I=o(8354),k=o(73763),P=function(e){(0,r.Z)(o,e);var t=(0,l.Z)(o);function o(e){var a;return(0,s.Z)(this,o),(a=t.call(this,e)).onLoadPopup=function(e){var t=a.props,o=t.itemData,i=t.wall,s=(t.appendData,t.postData),n=t.itemId,r=t.languageSetting,l=t.completeDataObject,c=t.wallId,d=t.webFilters,p=s.map((function(e){return l[e]})),h=p.filter((function(e){return!String(e.id).includes("free_add_")})),_=(0,u.E6)(h,o.id,s.indexOf(n));1===i.Personalization.postFeatured&&((0,u.st)("add"),a.props.showPopUP({type:"post",card:o,idArray:h,index:_,viewOnText:r.viewOnText,shareText:r.shareText,personalization:i.Personalization,ThemeRule:i.ThemeRule,webFilters:d,UserRule:i.UserRule,wall:i})),(0,k.S5)({action:2,wall:c,feed:o.feedId,post:o.referenceId})},a.myRef=c.createRef(),a.state={cardWidth:null},a}return(0,n.Z)(o,[{key:"componentDidMount",value:function(){var e=this;(0,u.kA)(this.props.itemData.id)&&(this.onLoadPopup(),setTimeout((function(){var t=document.querySelector(".ts_p_".concat(e.props.itemData.id));t&&t.scrollIntoView(!0),e.myRef&&e.myRef.current&&e.setState({cardWidth:e.myRef.current.clientWidth})}),500))}},{key:"componentDidUpdate",value:function(){var e=this;setTimeout((function(){e.myRef&&e.myRef.current&&e.setState({cardWidth:e.myRef.current.clientWidth})}),1e3)}},{key:"render",value:function(){var e=this.props,t=e.itemData,o=e.wall,a=e.webFilters,i=(e.cardWidth,e.handleAllImageError),s=e.isVisible,n=e.itemIndex,r=e.addLoadedMedia,l=e.loadedMedia,c=(t.highlight,o.ThemeRule.shareOption,o.ThemeRule.hideContent,(0,u.EH)(t.networkId,a)),d={backgroundColor:o.ThemeRule.cardColor,borderRadius:o.ThemeRule.roundEdge},h={width:"100%",height:"auto",padding:o.Personalization.padding/2},_=!!(t.ugc_products&&t.ugc_products.length>0),m=(3===t.type||t.type,!!(t.imageList&&t.imageList.length>0));return(0,p.jsx)("div",{className:"ts_rt_post_wrapper ".concat(t&&t.id?"ts_p_"+t.id:""),ref:this.myRef,id:"ts_".concat(t.id),onClick:t.isPost?null:this.onLoadPopup,style:h,"data-method":t.id,children:(0,p.jsxs)("div",{className:"ts_rt_post_in ".concat(t.hotspot?"":"ts_rt_post_in_hostpot_hover"),style:d,children:[_||m?(0,p.jsx)(b.Z,{item:t,cardWidth:this.state.cardWidth,wall:o}):"",(0,p.jsx)(w,{handleAllImageError:i,loadedMedia:l,addLoadedMedia:r,item:t,wall:o,itemIndex:n,isVisible:s,mediaRef:this.myRef}),(0,p.jsx)(j,{cardWidth:this.state.cardWidth,item:t,wall:o,network:c})]})})}}]),o}(c.PureComponent),D=(0,I.$j)((function(e){return{wallId:e.appData.wallID}}),(function(e){return{showPopUP:function(t){return e((0,k.Bm)(t))}}}))(P),N=o(82783),S=(o(83151),o(66909)),R=function(e){(0,r.Z)(o,e);var t=(0,l.Z)(o);function o(e){var a;return(0,s.Z)(this,o),(a=t.call(this,e)).allImageQueue=[],a.state={allFirstImage:!1,windowWidth:document.querySelector(".taggshopContainer")?document.querySelector(".taggshopContainer").clientWidth:"",loadedMedia:[],isMobile:!1},a.onUpdateData=function(){setTimeout((function(){return a.requestData()}),1e3)},a.requestData=function(){var e=a.props,t=e.wall,o=(e.postData,e.appendData),i=e.hasMoreData,s=e.loaderData,n=t.ThemeRule.numberOfPosts,r=Math.floor(Date.now()/1e3);i&&!s.isShowMoreLoading&&a.props.getDataNextSteps(t.Wall.id,r,n,o.networkID,o.after,o.heightEvent)},a.onLoadPopup=function(e,t){var o=a.props,i=o.wall,s=o.postData,n=o.languageSetting,r=o.completeDataObject,l=o.wallId,c=o.webFilters,d=s.map((function(e){return r[e]})),p=d.filter((function(e){return!String(e.id).includes("free_add_")})),h=(0,u.E6)(p,t.id,e);1===i.Personalization.postFeatured&&((0,u.st)("add"),a.props.showPopUP({type:"post",card:t,idArray:p,index:h,viewOnText:n.viewOnText,shareText:n.shareText,personalization:i.Personalization,ThemeRule:i.ThemeRule,webFilters:c,UserRule:i.UserRule,wall:i})),(0,k.S5)({action:2,wall:l,feed:t.feedId,post:t.referenceId})},a.handleAllImageError=function(e){try{var t=e.target.getAttribute("data-item-id");a.allImageQueue.push({src:t,e:e}),a.state.allFirstImage||a.processAllImageQueue()}catch(o){}},a.processAllImageQueue=function(){if(a.allImageQueue.length){a.setState({allFirstImage:!0});var e=a.allImageQueue[0],t=e.src,o=e.e;t&&(console.log("src",t),(0,u.bO)(o,a.nextProcessAllImageQueue))}},a.nextProcessAllImageQueue=function(){try{a.allImageQueue.shift(),a.processAllImageQueue()}catch(e){}},a.DetectIphone=function(){var e=navigator.userAgent.toLowerCase();e.search("iphone")>-1||e.search("android")>-1?a.setState({isMobile:!0}):a.setState({isMobile:!1})},a.addLoadedMedia=function(e){return a.setState({loadedMedia:[].concat((0,i.Z)(a.state.loadedMedia),[e])})},a.secondaryRef=c.createRef(),a.slideRef=c.createRef(),a}return(0,n.Z)(o,[{key:"componentDidMount",value:function(){var e=this.props,t=e.wall,o=e.hasMoreData,a=e.postData;this.DetectIphone(),t.ThemeRule.numberOfCoumn==a.length&&o&&this.onUpdateData()}},{key:"render",value:function(){var e=this,t=this.props,o=t.completeDataObject,i=t.hasMoreData,s=t.wall,n=(t.newPostData,t.loaderData),r=t.postData,l=(t.adjustWidth,this.state),c=l.windowWidth,d=l.loadedMedia,u=l.isMobile,h=s.Personalization.columnCount,_=s.ThemeRule.slidePost,m=s.ThemeRule.numberOfCoumn,g=h>=7?"100%":5===h&&c>767?"90%":3===h&&c>767?"70%":"100%";return(0,p.jsx)("div",{className:"ts_csl_post_container",id:"ts_theme_container",children:(0,p.jsxs)(N.tq,{style:{width:g},onScroll:function(t){i&&t.progress>.8&&e.onUpdateData()},onSlideChange:function(t){i&&t.progress>.8&&e.onUpdateData()},onAutoplay:function(t){i&&t.progress>.8&&e.onUpdateData()},autoHeight:!0,speed:400,edgeSwipeDetection:!0,shortSwipes:!1,slidesPerView:0==m?6.2:m+.2,touchRatio:2,cssMode:u,freeMode:{enabled:!0,sticky:!1,momentumBounceRatio:2,momentumVelocityRatio:3},autoplay:{delay:_?1e3*s.ThemeRule.slideDuration:99e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{320:{slidesPerView:1.6},480:{slidesPerView:1.6},575:{slidesPerView:1.6},767:{slidesPerView:0==m?3.2:m+.2},1024:{slidesPerView:0==m?4.2:m+.2},1400:{slidesPerView:0==m?5.2:m+.2}},mousewheel:{forceToAxis:!0,sensitivity:2},watchSlidesProgress:!0,modules:[S.pt,S.Gk],className:"ts_st_mySwiper",children:[r&&r.length>0?r.map((function(t,i){var s=o[t];return(0,p.jsx)(N.o5,{ref:e.slideRef,children:function(t){var o=t.isVisible;return(0,p.jsx)(D,(0,a.Z)({handleAllImageError:e.handleAllImageError,isVisible:o,addLoadedMedia:e.addLoadedMedia,loadedMedia:d,slideRef:e.slideRef,itemData:s,itemIndex:i},e.props),"post_id_".concat(i))}},"poid_".concat(i))})):null,i&&n.isShowMoreLoading?(0,p.jsx)(N.o5,{children:(0,p.jsx)("div",{className:"ts_rt_post_wrapper",style:{width:"100%",height:"auto",padding:s.Personalization.padding/2},children:(0,p.jsx)("div",{className:"sk_img reelThemeCard m-0",children:(0,p.jsx)("div",{})})})},"poid_loading"):(0,p.jsx)(p.Fragment,{})]})})}}]),o}(c.PureComponent),T=(0,I.$j)((function(e){var t=e.appData;return{appData:t,loaderData:e.loaderData,newPostData:t.newPostData,appendData:t.postData.appendData,hasMoreData:!t.postData.hasMoreData[0]||0!=t.postData.hasMoreData[0].hasMoreData&&(!t.postData.hasMoreData[t.postData.appendData.networkID]||t.postData.hasMoreData[t.postData.appendData.networkID].hasMoreData)}}),(function(e){return{getDataNextSteps:function(t,o,a,i,s,n,r){return e((0,k.Sx)(t,o,a,i,s,n,r))},showPopUP:function(t){return e((0,k.Bm)(t))}}}))(R)},50247:function(){}}]);