"use strict";(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[985],{29862:function(t,e,a){a.d(e,{K:function(){return i}});var s=a(34867),i=function(t){return(0,s.ZP)(t)}},64428:function(t,e,a){a.d(e,{Z:function(){return c}});var s=a(15671),i=a(43144),r=a(60136),o=a(29388),n=a(72791),l=(a(74008),a(80184)),c=function(t){(0,r.Z)(a,t);var e=(0,o.Z)(a);function a(){return(0,s.Z)(this,a),e.apply(this,arguments)}return(0,i.Z)(a,[{key:"render",value:function(){var t=this.props,e=t.item,a=t.wall,s=!!(e.ugc_products&&e.ugc_products.length>0&&0===e.hotspot),i=3===e.type||5===e.type,r=a&&a.User&&31724!==a.User.id,o=a&&a.ThemeRule&&a.ThemeRule.fontSize?a.ThemeRule.fontSize:"40px",n=!!(e.imageList&&e.imageList.length>0),c=!(!n||!s),d=55==a.Personalization.commerceTheme?"tb_cs_video_multiImage":"";return(0,l.jsxs)("div",{className:"ts_post_iocn",children:[(0,l.jsxs)("div",{className:"ts_social-icon ".concat(d),style:{fontSize:40,color:"rgb(112, 112, 112)"},children:[i?(0,l.jsx)("div",{className:"ts_video_icon tb_cs_video_multiImage",children:(0,l.jsx)("div",{className:"tb__icon tb-video-alt",style:{fontSize:o},children:(0,l.jsx)("div",{})})}):"",s&&r&&55!==a.Personalization.commerceTheme?(0,l.jsx)("div",{className:"ts_shop_icon",children:31665===a.User.id?(0,l.jsx)("svg",{fill:"#ffffff",height:"22",viewBox:"0 0 48 48",width:"22",children:(0,l.jsx)("path",{d:"M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"})}):(0,l.jsx)("div",{className:"tb__icon tb-shopping-bag",style:{fontSize:o},children:(0,l.jsx)("div",{})})}):"",!c&&n&&55!==a.Personalization.commerceTheme?(0,l.jsx)("div",{className:"tb__icon tb-multiple tb_cs_carousal_icon",style:{fontSize:o},children:" "}):"",n&&55==a.Personalization.commerceTheme?(0,l.jsxs)("div",{className:"ts_cs_multiple_option",children:[" ",(0,l.jsx)("div",{className:"tb__icon tb-multiple",style:{fontSize:o},children:" "})]}):""]}),c&&55!==a.Personalization.commerceTheme?(0,l.jsx)("div",{className:"tb__icon tb-multiple tb_cs_carousal_icon_bottom",style:{fontSize:o},children:" "}):""]})}}]),a}(n.PureComponent)},64602:function(t,e,a){a.d(e,{Z:function(){return d}});var s=a(15671),i=a(43144),r=a(60136),o=a(29388),n=a(72791),l=a(59950),c=a(80184),d=function(t){(0,r.Z)(a,t);var e=(0,o.Z)(a);function a(){var t;(0,s.Z)(this,a);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).onSharePost=function(e){var a=t.props,s=a.item,i=a.wall;e&&(0,l.S5)({type:2,action:2,wall:i.Wall.id,feed:s.feedId,post:s.referenceId})},t}return(0,i.Z)(a,[{key:"render",value:function(){var t=this.props,e=t.item,a=t.wall,s=t.network,i=505==a.ThemeRule.iconType?s.color:a.ThemeRule.iconColor;return(0,c.jsx)("div",{className:"ts_cp_card_socialAction",style:{color:"rgb(255, 255, 255)"},children:1==e.networkId?(0,c.jsxs)(n.Fragment,{children:[(0,c.jsx)("a",{target:"_blank",href:"https://twitter.com/intent/tweet?in_reply_to=".concat(atob(e.postId)),title:"View 12",className:"ts_icon_count_tagg",children:(0,c.jsx)("div",{className:"tb__icon tb-eye",style:{color:i},children:(0,c.jsx)("div",{})})}),(0,c.jsx)("a",{target:"_blank",onClick:this.onSharePost,href:"https://twitter.com/intent/tweet?in_reply_to=".concat(atob(e.postId)),title:"Replay",className:"ts_icon_count_tagg",children:(0,c.jsx)("div",{className:"tb__icon tb-share-square",style:{color:i},children:(0,c.jsx)("div",{})})}),(0,c.jsxs)("a",{href:"https://twitter.com/intent/retweet?tweet_id=".concat(atob(e.postId)),title:"Retweet",target:"_blank",className:"ts_icon_count_tagg",children:[(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:i,viewBox:"0 0 640 512",children:(0,c.jsx)("path",{d:"M614.2 334.8C610.5 325.8 601.7 319.1 592 319.1H544V176C544 131.9 508.1 96 464 96h-128c-17.67 0-32 14.31-32 32s14.33 32 32 32h128C472.8 160 480 167.2 480 176v143.1h-48c-9.703 0-18.45 5.844-22.17 14.82s-1.656 19.29 5.203 26.16l80 80.02C499.7 445.7 505.9 448 512 448s12.28-2.344 16.97-7.031l80-80.02C615.8 354.1 617.9 343.8 614.2 334.8zM304 352h-128C167.2 352 160 344.8 160 336V192h48c9.703 0 18.45-5.844 22.17-14.82s1.656-19.29-5.203-26.16l-80-80.02C140.3 66.34 134.1 64 128 64S115.7 66.34 111 71.03l-80 80.02C24.17 157.9 22.11 168.2 25.83 177.2S38.3 192 48 192H96V336C96 380.1 131.9 416 176 416h128c17.67 0 32-14.31 32-32S321.7 352 304 352z"})}),(0,c.jsx)("div",{style:{color:i},children:0!=e.comment_count?e.comment_count:""})]}),(0,c.jsxs)("a",{href:"https://twitter.com/intent/favorite?tweet_id=".concat(atob(e.postId)),title:"Like",target:"_blank",className:"ts_icon_count_tagg",children:[(0,c.jsx)("div",{className:"tb__icon tb-heart",style:{color:i},children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{style:{color:i},children:0!=e.like_count?e.like_count:""})]})]}):2==e.networkId||3==e.networkId||7==e.networkId||8==e.networkId||10==e.networkId||18==e.networkId?(0,c.jsxs)(n.Fragment,{children:[(0,c.jsxs)("a",{href:e.link,title:"Like",target:"_blank",className:"ts_icon_count_tagg",children:[(0,c.jsx)("div",{className:"tb__icon tb-thumbs-up",style:{color:i},children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{style:{color:i},children:10==e.networkId&&e.feedId>73590||18==e.networkId?e.like_count:null})]}),(0,c.jsxs)("a",{href:e.link,title:"Comment",target:"_blank",className:"ts_icon_count_tagg",children:[(0,c.jsx)("div",{className:"tb__icon tb-comment-dots",style:{color:i},children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{style:{color:i},children:10==e.networkId&&e.feedId>73590||18==e.networkId?e.comment_count:null})]})]}):4==e.networkId?(0,c.jsx)("a",{href:e.link,className:"fa fa-comment-o tooltips",title:"Comment",target:"_blank",children:(0,c.jsx)("div",{})}):null})}}]),a}(n.PureComponent)},91134:function(t,e,a){var s=a(4942),i=a(15671),r=a(43144),o=a(60136),n=a(29388),l=a(72791),c=a(59950),d=a(80184),h=function(t){(0,o.Z)(a,t);var e=(0,n.Z)(a);function a(){var t;(0,i.Z)(this,a);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).onShareFacebook=function(e){var a=t.props,s=a.item,i=(a.wall,"https://www.facebook.com/sharer/sharer.php?display=popup&u="+s.share.facebook);window.open(i,"sharer","toolbar=0,status=0,resizable=1,width=626,height=436")},t.onTwitterClick=function(e){var a=t.props,s=a.item,i=a.wall;e&&(0,c.S5)({type:2,action:2,wall:i.Wall.id,feed:s.feedId,post:s.referenceId})},t.linkedinShareCount=function(e){var a=t.props,s=a.item,i=a.wall;(0,c.S5)({type:2,action:2,wall:i.Wall.id,feed:s.feedId,post:s.referenceId})},t}return(0,r.Z)(a,[{key:"componentDidMount",value:function(){var t=this;window.twttr&&window.twttr.ready((function(e){window.twttr.events.bind("tweet",t.onTwitterClick)}))}},{key:"render",value:function(){var t,e=this.props,a=e.network,i=e.item;e.wall;return(0,d.jsx)(d.Fragment,{children:0!==i.share.status&&7!==a.id?(0,d.jsxs)("div",{className:"ts__share-icon_wrapper",style:{fontSize:40,color:"rgb(112, 112, 112)"},children:[(0,d.jsx)("a",{herf:"",target:"_blank",children:(0,d.jsx)("div",{className:"tb__icon tb-share-alt",children:(0,d.jsx)("div",{})})}),(0,d.jsx)("a",{onClick:this.onShareFacebook,children:(0,d.jsx)("div",{className:"tb__icon tb-facebook-f",children:(0,d.jsx)("div",{})})}),(0,d.jsx)("a",{onClick:this.onTwitterClick,href:i.share.twitter,target:"_blank",children:(0,d.jsx)("div",{className:"tb__icon tb-twitter",children:(0,d.jsx)("div",{})})}),(0,d.jsx)("a",(t={onClick:this.linkedinShareCount},(0,s.Z)(t,"onClick",this.linkedinShareCount),(0,s.Z)(t,"href",i.share.linkedin),(0,s.Z)(t,"target","_blank"),(0,s.Z)(t,"children",(0,d.jsx)("div",{className:"tb__icon tb-linkedin",children:(0,d.jsx)("div",{})})),t))]}):null})}}]),a}(l.Component);e.Z=h},92894:function(t,e,a){a.d(e,{Z:function(){return h}});var s=a(15671),i=a(43144),r=a(60136),o=a(29388),n=a(72791),l=a(72426),c=a.n(l),d=a(80184),h=function(t){(0,r.Z)(a,t);var e=(0,o.Z)(a);function a(){return(0,s.Z)(this,a),e.apply(this,arguments)}return(0,i.Z)(a,[{key:"render",value:function(){var t=this.props,e=t.postTime,a=t.timeClass,s=t.timeStyle,i=c()(new Date(1e3*e)).fromNow();return(0,d.jsxs)("div",{className:a,style:s,children:[" ",i]})}}]),a}(n.PureComponent)},5362:function(t,e,a){a.r(e),a.d(e,{default:function(){return C}});var s=a(1413),i=a(15671),r=a(43144),o=a(60136),n=a(29388),l=a(72791),c=a(2703),d=(a(29862),a(59950)),h=(a(72426),a(41166),a(92894)),u=a(80184),p=function(t){(0,o.Z)(a,t);var e=(0,n.Z)(a);function a(){var t;(0,i.Z)(this,a);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={isAuthorImageValid:!0},t}return(0,r.Z)(a,[{key:"componentDidMount",value:function(){var t=this.props.item,e=(0,c.uB)(t.author.picture);this.setState({isAuthorImagevalid:e})}},{key:"render",value:function(){var t,e=this.props,a=e.wall,s=e.item,i=e.network,r=(t=s.cta,a.Personalization.postAuthor),o={backgroundColor:a.ThemeRule.authorColor},n={color:a.ThemeRule.authorColor},l=!!(s.ugc_products&&s.ugc_products.length>0&&0===s.hotspot),c=i.icon.replace("fa-",""),d=a.Personalization.postTime,p=505==a.ThemeRule.iconType?i.color:a.ThemeRule.iconColor;return(0,u.jsxs)("div",{className:"tb_st_author_wrapper",children:[l?(0,u.jsxs)("div",{className:"ts_st_shop_icon",children:[(0,u.jsx)("div",{className:"tb__icon tb-shopping-bag ts_shopping_hover",children:(0,u.jsx)("div",{})}),(0,u.jsx)("div",{className:"tb_st_shop_hover",children:"View Product"})]}):"",(0,u.jsx)("div",{className:"tb_st_social_",children:(0,u.jsx)("div",{className:"tb__icon tb-".concat(c),style:{color:p},children:(0,u.jsx)("div",{})})}),s.author.isInstaUser?"":(0,u.jsxs)("div",{className:"tb_st_author",children:[r?(0,u.jsxs)("div",{className:"tb_st_author_profile",children:[(0,u.jsx)("img",{src:s.author.picture,onError:function(t){t.target.onerror=null,t.target.src=s.author.errorPic},alt:"image"})," "]}):"",(0,u.jsxs)("div",{className:"tb_st_author_info",children:[r?(0,u.jsxs)("div",{className:"tb_st_authorname",style:n,children:["@",s.author.name]}):"",(0,u.jsxs)("div",{className:"tb_st_post_info",children:[r?(0,u.jsxs)("div",{className:"tb_st_username",style:n,children:["@",s.author.username]}):"",d&&r?(0,u.jsx)("div",{className:"tb_st_seprator",style:o,children:(0,u.jsx)("div",{})}):"",d?(0,u.jsx)(h.Z,{postTime:s.createdAt,timeClass:"tb_sc_time",timeStyle:n}):""]})]})]})]})}}]),a}(l.PureComponent),m=a(21170),_=function(t){(0,o.Z)(a,t);var e=(0,n.Z)(a);function a(){return(0,i.Z)(this,a),e.apply(this,arguments)}return(0,r.Z)(a,[{key:"componentDidMount",value:function(){(0,c.ll)()}},{key:"render",value:function(){var t=this.props,e=t.ImageClass,a=t.ImageUrl,s=t.item,i=t.width,r=t.height,o=t.wall,n=t.ugc_products,l={backgroundImage:"url(".concat(a,")")},d={height:s.hotspot?"auto":"100%",width:s.hotspot?"100%":"auto"},h={height:s.hotspot?"auto":"100%",width:(s.hotspot,"100%")};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"ts_st_image_blur_bg",style:l,children:(0,u.jsx)("div",{})}),(0,u.jsxs)("div",{className:s.hotspot?"tb_st_image_hotspot":e,style:h,children:[(0,u.jsx)("img",{src:a,"data-src":a,"data-is-optmized":"0","data-link":s.link,"data-load":"0","data-wall-id":o.Wall.id,"data-item-id":s.id,onLoad:this.onLoadImage,"data-filter-id":s.filterId,"data-stories":s.stories,"data-network":s.networkId,width:i,className:"imgID".concat(s.id),onError:function(t){"28"==!s.networkId&&(0,c.bO)(t)},height:r,style:d,alt:"image"}),s.hotspot?(0,u.jsx)(m.Z,{ugc_products:n,UgcSetting:s.ugc_personalizaion.UgcSetting,item:s}):(0,u.jsx)("div",{}),3==s.type||5==s.type?(0,u.jsx)("img",{className:"ts_st_playIcon",src:"https://cloud.taggbox.com/embed-build/commerce/assets/images/play.svg",alt:"Play"}):""]})]})}}]),a}(l.PureComponent),v=a(3104),w=function(t){(0,o.Z)(a,t);var e=(0,n.Z)(a);function a(t){var s;return(0,i.Z)(this,a),(s=e.call(this,t)).state={height:"100",width:"100",imgUrl:t.item.postFileNew},s}return(0,r.Z)(a,[{key:"componentWillMount",value:function(){var t=this,e=this.props.item;e.mediaHeight&&""!=e.mediaWidth?this.setState({height:100*e.mediaHeight/e.mediaWidth,width:100*e.mediaWidth/e.mediaHeight}):(0,v.Z)(e.postFileNew).then((function(e){var a=e.width,s=e.height;return t.setState({height:100*s/a,width:100*a/s})})).catch((function(e){return t.setState({height:100,width:100,error:e})}))}},{key:"render",value:function(){var t=this.props,e=t.item,a=t.wall,s=(0,c.HS)(e.ugc_products),i=this.state,r=i.height,o=i.width;return(0,u.jsx)("div",{className:"tb_st_media_wrap",children:o?(0,u.jsx)(_,{ImageClass:"tb_st_image",height:r,width:o,ImageUrl:e.postFileNew,ugc_products:s,item:e,wall:a}):""})}}]),a}(l.PureComponent),f=(a(91134),a(64428),a(42353)),g=(a(64602),a(70188),function(t){(0,o.Z)(a,t);var e=(0,n.Z)(a);function a(){var t;(0,i.Z)(this,a);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).onLoadPopup=function(e){var a=t.props,s=a.itemData,i=a.wall,r=(a.appendData,a.postData),o=a.itemIndex,n=a.languageSetting,l=a.completeDataObject,h=a.wallId,u=a.webFilters,p=r.map((function(t){return l[t]})),m=p.filter((function(t){return!String(t.id).includes("free_add_")})),_=(0,c.E6)(m,s.id,o);1===i.Personalization.postFeatured&&t.props.showPopUP({type:"post",card:s,idArray:m,index:_,viewOnText:n.viewOnText,shareText:n.shareText,personalization:i.Personalization,ThemeRule:i.ThemeRule,webFilters:u,UserRule:i.UserRule,wall:i}),(0,d.S5)({action:2,wall:h,feed:s.feedId,post:s.referenceId})},t}return(0,r.Z)(a,[{key:"componentDidMount",value:function(){var t=this;(0,c.kA)(this.props.itemData.id)&&(this.onLoadPopup(),setTimeout((function(){var e=document.querySelector(".ts_p_".concat(t.props.itemData.id));e&&e.scrollIntoView(!0)}),500))}},{key:"render",value:function(){var t=this.props,e=t.itemData,a=(t.itemIndex,t.wall),s=t.webFilters,i=(t.adjustWidth,e.highlight,(0,c.EH)(e.networkId,s)),r={backgroundColor:a.ThemeRule.cardColor},o=!!(e.imageList&&e.imageList.length>0);return(0,u.jsx)("div",{className:"tb_st_post_wrapper_outer",children:(0,u.jsx)("div",{className:"tb_st_post_wrapper",children:(0,u.jsxs)("div",{className:"tb_st_post_in tb__post_in",style:r,onClick:e.isPost?null:this.onLoadPopup,children:[(0,u.jsx)(w,{item:e,wall:a}),(0,u.jsx)(p,{wall:a,item:e,network:i}),o?(0,u.jsx)("div",{className:"tb_st_tb_multiple_ico tb__icon tb-multiple",children:" "}):""]})})})}}]),a}(l.PureComponent)),x=(0,f.$j)((function(t){return{wallId:t.appData.wallID}}),(function(t){return{showPopUP:function(e){return t((0,d.Bm)(e))}}}))(g),b=a(77092),j=a(98460);a(4676);function k(t){var e=t.classNameCustom,a=t.onClick,s=t.windowWidth,i=100/t.items;i=-i;var r=s/1e3+.8;return(0,u.jsx)("div",{className:e,style:{width:"clamp(1.5rem, "+r+"rem, 3.5rem)",right:i-2+"%"},onClick:a,children:(0,u.jsx)("div",{className:"tb__icon tb-chevron-right",children:(0,u.jsx)("div",{})})})}function y(t){var e=t.classNameCustom,a=(t.style,t.onClick),s=t.windowWidth,i=100/t.items;i=-i;var r=s/1e3+.8;return(0,u.jsx)("div",{className:e,style:{width:"clamp(1.5rem, "+r+"rem, 3.5rem)",left:i-2+"%"},onClick:a,children:(0,u.jsx)("div",{className:"tb__icon tb-chevron-left",children:(0,u.jsx)("div",{})})})}var N=function(t){(0,o.Z)(a,t);var e=(0,n.Z)(a);function a(){var t;(0,i.Z)(this,a);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={cardCount:null,windowWidth:document.querySelector(".taggshopContainer")?document.querySelector(".taggshopContainer").clientWidth:""},t.onUpdateData=function(){setTimeout((function(){return t.requestData()}),1e3)},t.requestData=function(){var e=t.props,a=e.wall,s=(e.postData,e.appendData),i=e.hasMoreData,r=e.loaderData,o=a.ThemeRule.numberOfPosts,n=Math.floor(Date.now()/1e3);i&&!r.isShowMoreLoading&&t.props.getDataNextSteps(a.Wall.id,n,o,s.networkID,s.after,s.heightEvent)},t}return(0,r.Z)(a,[{key:"render",value:function(){var t=this,e=this.props,a=(e.appendData,e.postData),i=e.completeDataObject,r=e.adjustWidth,o=(e.hasMoreData,e.wall),n=(e.webFilters,e.languageSetting,e.loaderData,this.state),l=n.windowWidth,d=(n.onResponsive,o.Personalization.columnCount),h=o.ThemeRule.mobileColumn,p=o.ThemeRule.slidePost,m=d>=7?"100%":5===d&&l>767?"90%":3===d&&l>767?"70%":"100%",_=l>767?9==d||l>1600?"_17":7==d||l>1400?"_20":5==d||l>1024?"_25":"_34":9==h?"_17":7==h?"_20":5==h?"_25":3==h?"_34":"_90";return(0,u.jsxs)("div",{className:"tb_st_post_container ".concat((0,c.G)()?"checkPreview":""),id:window.isEditor?"isEditorCls ts_theme_container":"ts_theme_container",children:[(0,u.jsx)(y,{classNameCustom:"sw_slider_prev_arrow ts_st_left_arrow".concat(_)}),(0,u.jsx)(b.tq,{style:{width:m},autoHeight:!0,speed:500,loop:"false",navigation:{prevEl:".sw_slider_prev_arrow",nextEl:".sw_slider_next_arrow"},effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:9==d?6:7==d?5:5==d?4:3==d?3:6,coverflowEffect:{rotate:0,stretch:d>=5?0:d>=3?-6:0,depth:d>=5?15:10,modifier:10,slideShadows:!1},autoplay:{delay:p?1e3*o.ThemeRule.slideDuration:99e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{320:{slidesPerView:9==h?6:7==h?5:5==h?4:3==h?3:1,coverflowEffect:{stretch:h>=5?0:h>=3?-2:-6,depth:h>=5?10:15}},576:{slidesPerView:9==h?6:7==h?5:5==h?4:3==h?3:1,coverflowEffect:{stretch:h>=5?0:h>=3?-4:-6,depth:h>=5?10:15}},767:{slidesPerView:9==d?6:7==d?5:5==d?4:3,coverflowEffect:{stretch:d>=5?0:d>=3?-2:-6,depth:d>=5?15:d>=3?10:15}},1024:{slidesPerView:9==d?6:7==d?5:5==d?4:3==d?3:4,coverflowEffect:{stretch:d>=5?0:d>=3?-3:0,depth:d>=5?15:d>=3?10:15}},1400:{slidesPerView:9==d?6:7==d?5:5==d?4:3==d?3:5,coverflowEffect:{stretch:d>=5?0:d>=3?-4:0,depth:d>=5?15:d>=3?10:16}},1600:{slidesPerView:9==d?6:7==d?5:5==d?4:3==d?3:6,coverflowEffect:{stretch:d>=5?0:d>=3?-6:0,depth:d>=5?15:d>=3?10:15}}},modules:[j.lI,j.pt,j.tl,j.W_],className:"ts_st_mySwiper",children:a&&a.length>0?a.map((function(e,a){var o=i[e];return(0,u.jsx)(b.o5,{children:(0,u.jsx)(x,(0,s.Z)({itemData:o,itemIndex:a,adjustWidth:r},t.props),"post_Id_".concat(a))},"poid_".concat(a))})):null}),(0,u.jsx)(k,{classNameCustom:"sw_slider_next_arrow ts_st_right_arrow".concat(_),onClick:this.onUpdateData,hasMoreData:this.hasMoreData})]})}}]),a}(l.PureComponent),C=(0,f.$j)((function(t){var e=t.appData;return{appData:e,loaderData:t.loaderData,appendData:e.postData.appendData,hasMoreData:!e.postData.hasMoreData[0]||0!=e.postData.hasMoreData[0].hasMoreData&&(!e.postData.hasMoreData[e.postData.appendData.networkID]||e.postData.hasMoreData[e.postData.appendData.networkID].hasMoreData)}}),(function(t){return{getDataNextSteps:function(e,a,s,i,r,o,n){return t((0,d.Sx)(e,a,s,i,r,o,n))}}}))(N)}}]);
//# sourceMappingURL=985.be772d83.chunk.js.map