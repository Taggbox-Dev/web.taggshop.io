(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[508],{13946:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return Q}});var r=o(15671),a=o(43144),i=o(97326),n=o(60136),s=o(29388),l=o(47313),c=o(8354),d=o(16231),p=o(73763),h=o(17739),_=o(1413),u=o(7142),m=o(24557),g=o(20510),f=o(85942),v=o(29335),x=o(46417),y=function(t){(0,n.Z)(o,t);var e=(0,s.Z)(o);function o(t){var a;return(0,r.Z)(this,o),(a=e.call(this,t)).state={height:"",padding:"",error:""},a}return(0,a.Z)(o,[{key:"componentWillMount",value:function(){var t,e,o,r=this,a=this.props.ImageUrl;(0,f.Z)(a).then((function(a){var i=a.width,n=a.height;t=(o=i>n)?100:100*i/n,e=o?100*n/i:100,r.setState({height:e,width:t})})).catch((function(t){return r.setState({height:100,width:100,error:t})}))}},{key:"render",value:function(){var t=this.props,e=t.ImageClass,o=t.ImageUrl,r=t.item,a=t.ugc_products,i=t.product,n=this.state,s=n.width,l=n.height,c={backgroundImage:"url(".concat(o,")"),height:s>l?l+"%":"100%",width:s>l?"100%":s+"%",padding:"unset"};return(0,x.jsx)("div",{className:e,style:c,children:2!=r.type&&4!=r.type||1!=r.hotspot||1!=r.ugc_personalizaion.UgcSetting.status?(0,x.jsx)("div",{}):(0,x.jsx)(v.Z,{product:i,item:r,ugc_products:a,UgcSetting:r.ugc_personalizaion.UgcSetting})})}}]),o}(l.PureComponent),b=o(90182),w=(l.Component,function(t){(0,n.Z)(o,t);var e=(0,s.Z)(o);function o(t){var a;return(0,r.Z)(this,o),(a=e.call(this,t)).state={isHotspot:!1,loadedImg:!1},a.myRef=l.createRef(),a}return(0,a.Z)(o,[{key:"render",value:function(){var t=this,e=this.props,o=e.item,r=(e.instaImg,e.ugc_products),a=e.isVideoError,i=e.wall,n=e.custmClass,s=e.ImageUrl,l=e.videoUrl,c=e.active,d=e.showHotspot,p=this.state.loadedImg;return(0,x.jsx)("div",{className:"tb_media_holder",children:c?(0,x.jsxs)("div",{className:n,children:[2===o.type||4===o.type?(0,x.jsxs)("div",{className:"tb_img_holder",ref:this.myRef,onMouseEnter:function(){return d({showAll:!0})},onMouseLeave:function(){return d({showAll:!1})},children:[(0,x.jsx)("img",{src:s,"data-src":s,style:{height:"0",display:"none"},onLoad:function(){return t.setState({loadedImg:!0})},onError:function(t){return(0,h.bO)(t,(function(){}))},"data-network":o.networkId,"data-filter-id":o.filterId,"data-stories":o.stories,"data-load":"0","data-item-id":o.id,"data-wall-id":i.Wall.id,alt:"popupImg"}),p?(0,x.jsxs)(x.Fragment,{children:[" ",(0,x.jsx)("div",{className:"tb_img_blur__0",style:{backgroundImage:"url(".concat(s,")")},children:(0,x.jsx)("div",{})}),(0,x.jsx)(y,{ImageClass:"tb_modal_npopup_img",ImageUrl:s,ugc_products:r,item:o,wall:i})]}):(0,x.jsx)("div",{className:"sk_loader_product",children:(0,x.jsx)("div",{})})]}):1===o.type?(0,x.jsx)(x.Fragment,{}):3!==o.type&&5!==o.type||!(o.link.indexOf("youtube")>=0||o.link.indexOf("youtu.be")>=0||o.link.indexOf("vimeo")>=0||o.link.indexOf("tumblr")>=0||o.link.indexOf("vk")>=0&&30==o.networkId)?a?(0,x.jsxs)("div",{className:"tb_img_holder",children:[" ",(0,x.jsxs)("div",{className:"tb_modal_img_holder_001",children:[(0,x.jsx)("img",{src:"https://app.taggbox.com/widget/image/no-camera.svg",style:{visibility:"visible!important",width:180,margin:"20px auto",objectFit:"contain"}})," "]})]}):o.link.indexOf("facebook")>=0?(0,x.jsx)("div",{className:"tb_img_holder",children:(0,x.jsx)("div",{className:"tb_modal_img_holder_001",children:(0,x.jsx)(g.Z,{style:{display:"contents"},className:"tb-detail-image-iframe",url:l,"data-type":"video","data-stories":o.stories,"data-filter-id":o.filterId,"data-network":o.networkId,"data-link":o.link,"data-wall-id":i.Wall.id,"data-item-id":o.id,"data-load":0,onError:function(t){(0,h.b3)(t)},autoPlay:!0})})}):(0,x.jsx)("div",{className:"tb_img_holder",children:(0,x.jsx)("div",{className:"tb_modal_img_holder_001",children:(0,x.jsx)("div",{className:"tb_video_wrap",children:(0,x.jsx)("video",{src:l,autoPlay:!0,"data-type":"video","data-stories":o.stories,"data-filter-id":o.filterId,"data-network":o.networkId,"data-link":o.link,onError:function(t){(0,h.b3)(t)},"data-load":0,poster:o.postFileNew,"data-wall-id":i.Wall.id,"data-item-id":o.id})})})}):(0,x.jsx)("div",{className:"tb_img_holder",children:(0,x.jsx)("div",{className:"tb_modal_img_holder_001",children:(0,x.jsx)("div",{className:"tb_video_wrap",children:(0,x.jsx)(m.Z,{className:"tb-detail-image-iframe",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",src:"".concat(l),allowFullScreen:"true",style:{width:"100%!important"},onError:function(t){(0,h.b3)(t)},"data-type":"video","data-stories":o.stories,"data-filter-id":o.filterId,"data-network":o.networkId,"data-link":o.link,"data-wall-id":i.Wall.id,"data-item-id":o.id,"data-load":0})})})}),24==o.networkId?(0,x.jsxs)("div",{className:"tb_img_holder",children:[" ",(0,x.jsxs)("div",{className:"tb_modal_img_holder_001",children:[" ",(0,x.jsx)("img",{src:"img/loading.gif",alt:"",className:"img-responsive spotify-img",style:{visibility:"visible",position:"relative",transform:"translate(-50%, -50%)",top:"50%",left:"50%",display:"none",width:"60px"}})," "]})]}):null]}):(0,x.jsx)("div",{className:n,children:(0,x.jsxs)("div",{className:"tb_img_holder",ref:this.myRef,children:[(0,x.jsx)("div",{className:"tb_img_blur__0",style:{backgroundImage:"url(".concat(s,")")},children:(0,x.jsx)("div",{})}),(0,x.jsx)(y,{ImageClass:"tb_modal_npopup_img",ImageUrl:s,ugc_products:r,item:o,wall:i})]})})},"postID".concat(o.id))}}]),o}(l.Component)),j=(0,c.$j)((function(t){return{}}),(function(t){return{showHotspot:function(e){return t((0,p.EG)(e))}}}))(w),k=o(70816),N=o.n(k),P=(o(2956),function(t){(0,n.Z)(o,t);var e=(0,s.Z)(o);function o(){return(0,r.Z)(this,o),e.apply(this,arguments)}return(0,a.Z)(o,[{key:"render",value:function(){var t,e,o,r,a=this.props,i=a.item,n=a.personalization,s=(a.isAuthorImagevalid,a.onMediaUpdate,a.wall),l=a.networkData,c=(t="#ffffff",e=s.ThemeRule.authorColor,o="#000000",(r=s.ThemeRule.cardColor)===t?t==e?o:e:r===o?o==e?t:e:t==e?o:e),d=(n.postTime,i.author.isInstaUser),p=n.postAuthor,_=(l.icon.replace("fa-",""),505==s.ThemeRule.iconType?l.color:"#ffffff"==s.ThemeRule.iconColor?"rgba(63, 66, 72, 0.3)":s.ThemeRule.iconColor),u={color:c,textDecoration:"none"};"url(".concat(i.author.picture,")");return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:"tb_post_author",children:[0!=p||4==n.commerceTheme?d?"":(0,x.jsxs)("div",{className:"tb_author_details",children:[(0,x.jsx)("div",{className:"tb_sc_author_profile",children:(0,x.jsx)("img",{src:i.author.picture,onError:function(t){t.target.onerror=null,t.target.src=i.author.errorPic},alt:"image"})}),(0,x.jsxs)("div",{className:"tb_author_detail_outer",children:[(0,x.jsx)("div",{className:"tb_author_usrname",style:u,children:(0,x.jsx)("a",{href:i.link,target:"_blank",className:"m_post_title",style:u,children:i.author.name})}),(0,x.jsx)("div",{className:"tb_author_info",children:(0,x.jsx)("div",{className:"tb_post_time",style:u,children:N()(new Date(1e3*i.createdAt)).fromNow()})})]})]}):"",(0,x.jsx)("div",{className:"tb_social_ico","data-network":l.name,children:(0,x.jsx)("div",{className:"tb__icon tb-".concat(l.icon.replace("fa-","")),style:{color:_},children:(0,x.jsx)("div",{children:"twitter"==l.icon.replace("fa-","")&&(0,x.jsx)(h.yi,{color:_})})})})]})})}}]),o}(l.Component)),C=P,I=o(16390),U=o(77560),S=function(t,e,o){return'<span className="gridhashtag" style="color:'.concat(t,';font-weight:bold;">').concat(o?"#":"").concat(e,"</span>")},Z=function(t){var e=t.fdata,o=t.content,r=t.personalization,a=t.unicodeyEmojiConvert;return(0,x.jsx)(l.Fragment,{children:1===r.hashtag_highlight&&0===r.hashtag_feed&&0===r.hashtag_all?a(o):1===r.hashtag_highlight&&0===r.hashtag_feed&&1===r.hashtag_all?a(U(o,/#(\w+)/g,(function(t,e){return S(r.hashtag_color,t,!0)}))):1===r.hashtag_highlight&&1===r.hashtag_feed&&0===r.hashtag_all?a(U(o,e.hash.hashString,(function(t,e){return S(r.hashtag_color,t,!1)}))):1===r.hashtag_highlight&&1===r.hashtag_feed&&1===r.hashtag_all?a(U(o,/#(\w+)/g,(function(t,e){return S(r.hashtag_color,t,!0)}))):a(o)})},T=function(t){var e=t.fdata,o=t.content,r=t.personalization;return(0,x.jsx)(l.Fragment,{children:1===r.hashtag_highlight&&0===r.hashtag_feed&&0===r.hashtag_all?(0,I.ZP)(o):1===r.hashtag_highlight&&0===r.hashtag_feed&&1===r.hashtag_all?U((0,I.ZP)(o),/#(\w+)/g,(function(t,e){return(0,x.jsxs)("span",{className:"gridhashtag",style:{color:r.hashtag_color,fontWeight:"bold"},children:["#",t]},(0,d.v4)())})):1===r.hashtag_highlight&&1===r.hashtag_feed&&0===r.hashtag_all?U((0,I.ZP)(o),e.hash.hashString,(function(t,e){return(0,x.jsx)("span",{className:"gridhashtag",style:{color:r.hashtag_color,fontWeight:"bold"},children:t},(0,d.v4)())})):1===r.hashtag_highlight&&1===r.hashtag_feed&&1===r.hashtag_all?U((0,I.ZP)(o),/#(\w+)/g,(function(t,e){return(0,x.jsxs)("span",{className:"gridhashtag",style:{color:r.hashtag_color,fontWeight:"bold"},children:["#",t]},(0,d.v4)())})):(0,I.ZP)(o)})},z=(l.Component,o(98501)),A=o(77560),E=function(t){(0,n.Z)(o,t);var e=(0,s.Z)(o);function o(){var t;(0,r.Z)(this,o);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(t=e.call.apply(e,[this].concat(i))).state={isTrimEnable:!1},t.onClickReadText=function(e){var o=t.state.isTrimEnable;t.setState({isTrimEnable:!o})},t}return(0,a.Z)(o,[{key:"render",value:function(){var t,e,o,r,a=this.props,i=a.item,n=(a.currentIndex,a.personalization),s=a.wall,l=this.state.isTrimEnable,c={backgroundImage:"url(".concat(z.KA).concat(i.networkId,"/").concat(i.rating,".png)")},p=(1===i.hideContent&&1!==i.type&&16!=n.commerceTheme&&4!=n.commerceTheme||0==i.popupContent&&16==n.commerceTheme&&n.commerceTheme,{fontFamily:s.ThemeRule.css_font,fontSize:1==i.type?1==s.Personalization.textDecorate?s.ThemeRule.fontSizeDecorate:s.ThemeRule.fontSizeNormal:s.ThemeRule.fontSize,color:(t="#ffffff",e=s.ThemeRule.fontColor,o="#000000",r=s.ThemeRule.cardColor,r===t?t==e?o:e:r===o?o==e?t:e:t==e?o:e)}),_=(0,h.Fx)(i.content),u=String(_).substring(0,200),m=l?_:u;return s&&s.ThemeRule&&Object.keys(s.ThemeRule).length>0&&(0,x.jsxs)("div",{className:"tb_post_content",children:[null!=i.rating&&0!=i.rating&&(0,x.jsxs)("div",{className:"tb_post_rating_wrap",children:[" ",(0,x.jsx)("div",{className:"tb_post_rating",style:c,children:(0,x.jsx)("div",{})})," "]}),(0,x.jsx)("div",{className:"tb_post_rating_wrap",children:" "}),i.popupContent?(0,x.jsxs)("div",{className:"tb_post_content001 ".concat(1===s.Personalization.textDecorate&&1===i.type?i.textDecoClass:"","   tb-cTSfont-").concat(s.ThemeRule.font_varient),style:p,children:[0!==s.Personalization.hashtag_highlight?1===s.Personalization.hashtag_all?A((0,I.ZP)(m),/#(\w+)/g,(function(t,e){return(0,x.jsxs)("div",{className:"ts_popup_hash_tag",style:{color:s.Personalization.hashtag_color,fontWeight:"bold"},children:["#",t]},(0,d.v4)())})):1===s.Personalization.hashtag_feed?A((0,I.ZP)(m),i.hash.hashString,(function(t,e){return(0,x.jsx)("div",{className:"ts_popup_hash_tag",style:{color:s.Personalization.hashtag_color,fontWeight:"bold"},children:t},(0,d.v4)())})):(0,I.ZP)(m):(0,I.ZP)(m),m.length>199?this.state.isTrimEnable?(0,x.jsx)("a",{className:"lesslink",onClick:this.onClickReadText,children:" Read Less"}):(0,x.jsx)("a",{className:"morelink",onClick:this.onClickReadText,children:" Read More..."}):""]}):""]})}}]),o}(l.Component),L=E,R=function(t){(0,n.Z)(o,t);var e=(0,s.Z)(o);function o(){var t;(0,r.Z)(this,o);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(t=e.call.apply(e,[this].concat(i))).onShareFacebook=function(e){var o=t.props,r=o.item,a=(o.wall,"https://www.facebook.com/sharer/sharer.php?display=popup&u="+r.share.facebook);window.open(a,"sharer","toolbar=0,status=0,resizable=1,width=626,height=436")},t.onTwitterClick=function(e){var o=t.props,r=o.item,a=o.wall;e&&(0,p.S5)({type:2,action:2,wall:a.Wall.id,feed:r.feedId,post:r.referenceId})},t.linkedinShareCount=function(e){var o=t.props,r=o.item,a=o.wall;(0,p.S5)({type:2,action:2,wall:a.Wall.id,feed:r.feedId,post:r.referenceId})},t}return(0,a.Z)(o,[{key:"render",value:function(){var t=this.props,e=t.wall,o=t.item,r={color:505==e.ThemeRule.iconType?"":"#ffffff"==e.ThemeRule.iconColor?"rgba(63, 66, 72, 0.3)":e.ThemeRule.iconColor},a=505==e.ThemeRule.iconType?"":"#ffffff"==e.ThemeRule.iconColor?"rgba(63, 66, 72, 0.3)":e.ThemeRule.iconColor;return(0,x.jsx)("div",{className:"tb_post_footer",children:(0,x.jsxs)("div",{className:"tb_share_ico",children:[(0,x.jsx)("div",{className:"tb_share_ico_list",children:(0,x.jsx)("a",{onClick:this.onShareFacebook,className:"fbPanel",children:(0,x.jsx)("div",{className:"tb__icon tb-facebook-f",style:r,children:(0,x.jsx)("div",{})})})}),(0,x.jsx)("div",{className:"tb_share_ico_list",children:(0,x.jsx)("a",{onClick:this.onTwitterClick,href:o.share.twitter,className:"twPanel",target:"_blank",children:(0,x.jsx)("div",{className:"tb__icon tb-twitter",style:r,children:(0,x.jsx)("div",{children:(0,x.jsx)(h.yi,{color:a})})})})}),(0,x.jsx)("div",{className:"tb_share_ico_list",children:(0,x.jsx)("a",{onClick:this.linkedinShareCount,href:o.share.linkedin,target:"_blank",children:(0,x.jsx)("div",{className:"tb__icon tb-linkedin",style:r,children:(0,x.jsx)("div",{})})})}),o.networkId&&null!=o.link?(0,x.jsx)("div",{className:"tb_share_ico_list",children:(0,x.jsxs)("a",{href:o.link,className:"linkedinPanel",target:"_blank",children:[(0,x.jsx)("div",{className:"tb__icon tb-link",style:r,children:(0,x.jsx)("div",{})})," "]})}):null]})})}}]),o}(l.PureComponent),D=function(t){(0,n.Z)(o,t);var e=(0,s.Z)(o);function o(){return(0,r.Z)(this,o),e.apply(this,arguments)}return(0,a.Z)(o,[{key:"render",value:function(){var t=this.props,e=t.item,o=t.networkData,r=(t.wall,e.ugc_personalizaion.UgcSetting),a=r&&Object.keys(r).length>0;return e.ugc_personalizaion&&r&&(0,x.jsxs)(b.q,{children:[a&&r.title_link_font?(0,x.jsx)("link",{href:"".concat(z.jN,"/").concat(r.title_link_font,".css"),rel:"stylesheet"}):null,a&&r.price_link_font?(0,x.jsx)("link",{href:"".concat(z.jN,"/").concat(r.price_link_font,".css"),rel:"stylesheet"}):null,a&&r.feature_link_font?(0,x.jsx)("link",{href:"".concat(z.jN,"/").concat(r.feature_link_font,".css"),rel:"stylesheet"}):null,a&&r.discount_link_font?(0,x.jsx)("link",{href:"".concat(z.jN,"/").concat(r.discount_link_font,".css"),rel:"stylesheet"}):null,a&&r.feature_link_font?(0,x.jsx)("link",{href:"".concat(z.jN,"/").concat(r.feature_link_font,".css"),rel:"stylesheet"}):null,a&&r.button_link_font?(0,x.jsx)("link",{href:"".concat(z.jN,"/").concat(r.button_link_font,".css"),rel:"stylesheet"}):null,(0,x.jsx)("style",{children:"\n        .tb_pro_title_user {font-family: ".concat(r.feature_css_font,"; font-size: ").concat(r.feature_font_size,"; color: ").concat(r.feature_text_color,"}\n        .tb_author_avatar0012{background: ").concat(o.color,"!important}\n        .ugc-product-title{ font-family: ").concat(r.title_css_font,"!important; color: ").concat(r.product_title_color,"!important; font-size:").concat(r.product_title_font_size,"px!important}\n        .tb_pro_discount_price{ font-family: ").concat(r.discount_css_font,"!important; color: ").concat(r.discount_price_color,"!important; font-size:").concat(r.discount_price_font_size,"px!important}\n        .tb_pro_price{ font-family: ").concat(r.price_css_font,"!important; color: ").concat(r.original_price_color,"!important; font-size:").concat(r.original_price_font_size,"px!important}\n        .ugc-product-link a{ font-family: ").concat(r.button_css_font,"!important; color: ").concat(r.buy_now_color,"!important; font-size:").concat(r.buy_font_size,"px!important; background:").concat(r.buy_now_background,"!important;}\n        ")})]})}}]),o}(l.Component),W=function(t){(0,n.Z)(o,t);var e=(0,s.Z)(o);function o(){var t;(0,r.Z)(this,o);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(t=e.call.apply(e,[this].concat(i))).state={prdImgLoaded:!1,noImg:!1},t}return(0,a.Z)(o,[{key:"render",value:function(){var t=this,e=this.props.imgUrl,o=this.state,r=o.prdImgLoaded,a=o.noImg;return(0,x.jsxs)("div",{className:"ugc-product-images ".concat(a?"tb_popup_image":""),style:{display:a?"none":"block"},children:[(0,x.jsx)("img",{src:e,style:{height:"0%",display:"none"},onLoad:function(){return t.setState({prdImgLoaded:!0})},onError:function(){return t.setState({noImg:!0})}}),r?(0,x.jsxs)("div",{className:"ugc_pro_img_holder ",style:{backgroundImage:"url(".concat(e,")")},children:[(0,x.jsx)("div",{})," "]}):(0,x.jsx)("div",{className:"sk_loader_product_thumb",children:(0,x.jsx)("div",{})})]})}}]),o}(l.Component),F=function(t){(0,n.Z)(o,t);var e=(0,s.Z)(o);function o(){var t;(0,r.Z)(this,o);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(t=e.call.apply(e,[this].concat(i))).state={prdImgLoaded:!1,noImg:!1},t.openUrl=function(e){return function(o){var r=t.props.item.ugc_personalizaion.UgcSetting;2==parseInt(r.tab_target)?window.parent.location.href=e:window.open(e,"_blank")}},t}return(0,a.Z)(o,[{key:"render",value:function(){var t=this,e=this.props,o=e.item,r=e.ugc_products,a=e.wall,i=e.showHotspot,n=this.state,s=(n.prdImgLoaded,n.noImg,o.ugc_personalizaion.UgcSetting),l=this.props.appData.wall.User.id;return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:"tb_shop_cont",children:[(0,x.jsx)("div",{className:"tb_pro_title tb_pro_title_user tb-cTSfont-".concat(s.feature_font_varient),children:(0,I.ZP)(s.feature_text)}),(0,x.jsx)("div",{className:"ts_modal_product tb_modal_pro",children:r.map((function(e,r){return(0,x.jsx)("div",{className:"tb_pro_item",children:(0,x.jsxs)("div",{className:"tb_pro_wrapp product-item-".concat(r),onMouseEnter:function(){return i({showHotspot:!0,index:r,hotspotId:e.id})},onMouseLeave:function(){return i({showHotspot:!1,index:r,hotspotId:e.id})},children:[(0,x.jsx)(W,{imgUrl:e.UgcProduct.product_image}),o.ugc_personalizaion&&s&&e.UgcProduct.product_title?(0,x.jsxs)("div",{className:"ugc-product-title tb-cTSfont-".concat(s.title_font_varient),children:[" ",e.UgcProduct.product_title]}):null,e.UgcProduct.product_price>0||e.UgcProduct.product_discount>0?(0,x.jsx)("div",{className:"ugc-product-price",children:(0,x.jsxs)("div",{className:"tb_pro_price tb-cTSfont-".concat(s.price_font_varient),children:[" ",e.UgcProduct.price_currency_symbol," ",e.UgcProduct.product_discount>0?e.UgcProduct.product_discount:e.UgcProduct.product_price]})}):null,e.UgcProduct.product_discount>0?(0,x.jsxs)("div",{className:"tb_pro_discount_price  tb-cTSfont-".concat(s.discount_font_varient),children:[e.UgcProduct.price_currency_symbol," ",e.UgcProduct.product_price]}):null,(0,x.jsx)("div",{className:"ugc-product-link ".concat(30656==l?"homepage-ig-product-link":""),children:(0,x.jsx)("a",{onClick:t.openUrl(e.UgcProduct.product_url),className:"tb-cTSfont-".concat(s.button_font_varient),target:a&&a.User&&"102810"!=a.User.id?"_blank":"",children:s.buy_now_text})})]})},r)}))})]})})}}]),o}(l.Component),M=(0,c.$j)((function(t){return{appData:t.appData}}),(function(t){return{showHotspot:function(e){return t((0,p.EG)(e))}}}))(F),H=o(69867);function O(t){t.style.setProperty("visibility","visible","important"),t.style.setProperty("opacity","1","important"),t.style.setProperty("display","flex","important")}var B=function(t){(0,n.Z)(o,t);var e=(0,s.Z)(o);function o(){return(0,r.Z)(this,o),e.apply(this,arguments)}return(0,a.Z)(o,[{key:"render",value:function(){return(0,x.jsxs)("a",{href:z.Cx,target:"_blank",ref:function(t){t&&(t.style.setProperty("position","absolute","important"),t.style.setProperty("left","auto","important"),t.style.setProperty("right","0","important"),t.style.setProperty("bottom","-40px","important"),t.style.setProperty("align-items","center","important"),t.style.setProperty("padding","4px 0","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("width","auto","important"),t.style.setProperty("font-family","Inter","important"),t.style.setProperty("text-decoration","none","important"),O(t))},children:[(0,x.jsx)("div",{ref:function(t){t&&(t.style.setProperty("font-size","14px","important"),t.style.setProperty("color","#fff","important"),t.style.setProperty("margin-right","6px","important"),t.style.setProperty("width","100%","important"),t.style.setProperty("height","auto","important"),t.style.setProperty("font-family","Inter","important"),O(t))},children:"Powered By"}),(0,x.jsx)("div",{ref:function(t){t&&(t.style.setProperty("background-image","url(https://cloud.taggbox.com/taggshop/assets/images/home-page/tagshop-logo-white.svg)","important"),t.style.setProperty("background-size","contain","important"),t.style.setProperty("background-position","left center","important"),t.style.setProperty("background-repeat","no-repeat","important"),t.style.setProperty("height","35px","important"),t.style.setProperty("min-height","35px","important"),t.style.setProperty("width","102px","important"),t.style.setProperty("min-width","102px","important"),O(t))}})]})}}]),o}(l.PureComponent),K=(o(46425),o(11774));var V=function(t){(0,n.Z)(o,t);var e=(0,s.Z)(o);function o(){var t;(0,r.Z)(this,o);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(t=e.call.apply(e,[this].concat(i))).state={activeSlider:0},t.changeActive=function(e){t.setState({activeSlider:e})},t}return(0,a.Z)(o,[{key:"render",value:function(){var t=this,e=this.props,o=e.item,r=e.instaImg,a=e.ugc_products,i=e.isVideoError,n=e.wall,s=(e.data,this.state.activeSlider);return(0,x.jsx)("div",{className:"tb_post_modal_media_wrapper___",children:(0,x.jsx)("div",{className:"tb_post_modal_slide_holder_",children:(0,x.jsxs)(K.tv,{hasTrack:!1,className:"tb_post_modal_media_slider",options:{rewind:!0,speed:1e3,gap:0,autoplay:!1,padding:0,pagination:!0,arrows:!0,focus:"center",Slide:"123456",classes:{pagination:"splide__pagination tb_modal_slider_dots",page:"splide__pagination__page tb_modal_slider_dot"}},ref:this.myRef,onMove:function(e,o){t.changeActive(o)},children:[(0,x.jsx)(K.Gj,{children:o.imageList.map((function(t,e){return(0,x.jsx)(K.jw,{style:{margin:0,padding:0},children:(0,x.jsx)("div",{className:"tb_post_modal_slide_list",children:(0,x.jsx)(j,{wall:n,item:t,instaImg:r,ugc_products:a,isVideoError:i,custmClass:"ts_popup_slider",ImageUrl:t.postFile,videoUrl:t.mediaFile,active:e==s})})},"psId".concat(e))}))}),(0,x.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_post_modal_arrow_wrapper_",children:[(0,x.jsx)("div",{className:"splide__arrow splide__arrow--prev tb_post_modal_arrow tb_post_modal_arrow_left__ tb__icon tb-chevron-left",children:(0,x.jsx)("div",{})}),(0,x.jsx)("div",{className:"splide__arrow splide__arrow--next  tb_post_modal_arrow tb_post_modal_arrow_right__ tb__icon  tb-chevron-right",children:(0,x.jsx)("div",{})})]})]})})})}}]),o}(l.PureComponent),G=function(t){var e=t.item,o=t.personalization,r=t.currentIndex,a=t.ugc_products,i=t.wall;return(0,x.jsx)(x.Fragment,{children:e.ugc_personalizaion.UgcSetting&&1==e.ugc_personalizaion.UgcSetting.status&&1==o.themeType&&e.ugc_products&&Object.keys(e.ugc_products).length>0?(0,x.jsxs)("div",{className:"tb_post_wrap_in",children:[(0,x.jsx)(M,{wall:i,item:e,personalization:o,currentIndex:r,ugc_products:a})," "]}):null})},$=function(t){(0,n.Z)(o,t);var e=(0,s.Z)(o);function o(){var t;(0,r.Z)(this,o);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(t=e.call.apply(e,[this].concat(i))).state={currentIndex:t.props.currentIndex,item:t.props.item,isVideoError:!1,windowWidth:window.innerWidth,isAuthorImagevalid:!0,instaImg:(0,h.TI)(t.props.imgData,t.props.item.link),isHotspot:!1},t.onErrorVideo=function(e){return t.setState({isVideoError:!0})},t.onMediaUpdate=function(e){return t.setState({isAuthorImagevalid:!1})},t}return(0,a.Z)(o,[{key:"componentDidMount",value:function(){var t=this.props,e=t.currentIndex,o=t.item,r=t.slideWithArrowKeys,a=(0,h.uB)(o.author.picture);this.setState({currentIndex:e,item:o,isAuthorImagevalid:a,instaImg:(0,h.TI)(this.props.imgData,this.props.item.link)});var i=document.querySelector("#modalPost0");i&&i.focus(),document.addEventListener("keydown",r)}},{key:"componentWillReceiveProps",value:function(t){var e=t.currentIndex,o=t.item,r=(0,h.uB)(o.author.picture);this.setState({currentIndex:e,item:o,isVideoError:!1,isAuthorImagevalid:r,instaImg:(0,h.TI)(this.props.imgData,this.props.item.link)})}},{key:"render",value:function(){var t=this.props,e=t.personalization,o=t.onClosePopUp,r=t.featuredPopSliderChangeIndex,a=t.slideWithArrowKeys,i=(t.hostUrl,t.viewOnText),n=(t.platform,t.wall),s=t.webFilters,l=this.state,c=l.currentIndex,d=l.item,p=l.isVideoError,m=l.windowWidth,g=l.instaImg,f=(0,h.HS)(d.ugc_products),v=(0,h.EH)(d.networkId,s),y={backgroundColor:n.ThemeRule.cardColor};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(D,{wall:n,item:d,networkData:v}),(0,x.jsx)("div",{className:"modalId".concat(d.id," tb_modal_001 tb_fade ").concat(4==d.type||5==d.type||d.ugc_products&&Object.keys(d.ugc_products).length>0?"modal-text-image":2==d.type||3==d.type?"modal-only-image":"modal-only-text"),onKeyDown:a,onKeyPress:a,onLoad:a,onClick:function(t){return t.currentTarget==t.target&&o(t)},children:(0,x.jsx)("div",{className:"tb_modal_dialog taggModal",children:(0,x.jsxs)("div",{className:"tb_conetent",children:[(0,x.jsxs)("div",{className:"tb_modal_head",children:[(0,x.jsxs)("div",{className:"tb_modal_header",children:[(0,x.jsx)("div",{className:"tb_post_link_small",children:(0,x.jsx)("div",{className:"tb_post_address",children:(0,x.jsxs)("a",{className:"Instagram Business",target:"_blank",href:d.link,children:[(0,x.jsxs)("span",{children:[i," ",v.name]}),(0,x.jsxs)("svg",{id:"Group_4485","data-name":"Group 4485",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[(0,x.jsx)("rect",{id:"Rectangle_2094","data-name":"Rectangle 2094",width:"48",height:"48",fill:"none",opacity:"0"}),(0,x.jsx)("g",{id:"Group",transform:"translate(7.954 4.094)",children:(0,x.jsx)("path",{id:"Path",d:"M33.729,21.333a1.094,1.094,0,0,1,1.559,0l6.837,6.837a1.094,1.094,0,0,1,0,1.559l-6.837,6.837a1.1,1.1,0,0,1-1.559-1.559l6.044-6.072-6.044-6.072a1.094,1.094,0,0,1,0-1.53Z",transform:"translate(-33.407 -21.007)",fill:"#545454"})})]})]})})}),(0,x.jsx)("div",{className:"tb_close_wrap",children:(0,x.jsx)("div",{className:"tb_close_btn","data-dismiss":"modal",onClick:o,children:(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:(0,x.jsx)("path",{d:"M19.457 18.8906C19.1055 19.2422 18.4609 19.2422 18.1094 18.8906L10.375 11.0977L2.58203 18.8906C2.23047 19.2422 1.58594 19.2422 1.23438 18.8906C0.882812 18.5391 0.882812 17.8945 1.23438 17.543L9.02734 9.75L1.23438 2.01562C0.882812 1.66406 0.882812 1.01953 1.23438 0.667969C1.58594 0.316406 2.23047 0.316406 2.58203 0.667969L10.375 8.46094L18.1094 0.667969C18.4609 0.316406 19.1055 0.316406 19.457 0.667969C19.8086 1.01953 19.8086 1.66406 19.457 2.01562L11.6641 9.75L19.457 17.543C19.8086 17.8945 19.8086 18.5391 19.457 18.8906Z",fill:"white"})})})})]}),1==e.popupSlideShow?(0,x.jsxs)("div",{className:"tb_navigation tb_nav_content",children:[(0,x.jsx)("div",{className:"tb_nav tb_prev_btn",onClick:r(c-1),children:(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"27",viewBox:"0 0 15 27",fill:"none",children:(0,x.jsx)("path",{d:"M13.7109 0.917964C13.9453 1.09375 14.0039 1.32812 14.0039 1.5625C14.0039 1.79687 13.9453 2.03125 13.7695 2.20703L3.10547 13.75L13.7109 25.3516C14.0625 25.7031 14.0625 26.2891 13.6523 26.6406C13.3008 26.9922 12.7148 26.9922 12.3633 26.582L1.11328 14.3945C0.761719 14.043 0.761719 13.5156 1.11328 13.1641L12.3633 0.976558C12.7734 0.566402 13.3594 0.566402 13.7109 0.917964Z",fill:"white"})})}),(0,x.jsx)("div",{className:"tb_nav tb_nxt_btn",id:"wq12",onClick:r(c+1),children:(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"27",viewBox:"0 0 14 27",fill:"none",children:(0,x.jsx)("path",{d:"M0.980469 26.6406C0.746094 26.4648 0.628906 26.2305 0.628906 25.9961C0.628906 25.7617 0.746094 25.5273 0.921875 25.3516L11.5273 13.8086L0.921875 2.20703C0.570312 1.85546 0.570312 1.26953 0.980469 0.917964C1.33203 0.566402 1.91797 0.566402 2.26953 0.976558L13.5195 13.1641C13.8711 13.5156 13.8711 14.043 13.5195 14.3945L2.26953 26.582C1.91797 26.9922 1.33203 26.9922 0.980469 26.6406Z",fill:"white"})})})]}):null]}),(0,x.jsx)("div",{className:"tb_modal_body",children:(0,x.jsxs)("div",{className:"tb_modal_body_wrap",children:[(0,x.jsxs)("div",{className:"tb_details_left tb_modal_network-".concat(d.networkId),children:[1==e.popupSlideShow?(0,x.jsxs)("div",{className:"tb_navigation tb_nav_img",children:[(0,x.jsx)("div",{className:"tb_nav tb_prev_btn",onClick:r(c-1),children:(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"27",viewBox:"0 0 15 27",fill:"none",children:(0,x.jsx)("path",{d:"M13.7109 0.917964C13.9453 1.09375 14.0039 1.32812 14.0039 1.5625C14.0039 1.79687 13.9453 2.03125 13.7695 2.20703L3.10547 13.75L13.7109 25.3516C14.0625 25.7031 14.0625 26.2891 13.6523 26.6406C13.3008 26.9922 12.7148 26.9922 12.3633 26.582L1.11328 14.3945C0.761719 14.043 0.761719 13.5156 1.11328 13.1641L12.3633 0.976558C12.7734 0.566402 13.3594 0.566402 13.7109 0.917964Z",fill:"white"})})}),(0,x.jsx)("div",{className:"tb_nav tb_nxt_btn ",onClick:r(c+1),children:(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"27",viewBox:"0 0 14 27",fill:"none",children:(0,x.jsx)("path",{d:"M0.980469 26.6406C0.746094 26.4648 0.628906 26.2305 0.628906 25.9961C0.628906 25.7617 0.746094 25.5273 0.921875 25.3516L11.5273 13.8086L0.921875 2.20703C0.570312 1.85546 0.570312 1.26953 0.980469 0.917964C1.33203 0.566402 1.91797 0.566402 2.26953 0.976558L13.5195 13.1641C13.8711 13.5156 13.8711 14.043 13.5195 14.3945L2.26953 26.582C1.91797 26.9922 1.33203 26.9922 0.980469 26.6406Z",fill:"white"})})})]}):null,d.file?d.imageList&&d.imageList.length>0?(0,x.jsx)(V,{wall:n,item:d,instaImg:g,ugc_products:f,isVideoError:p}):(0,x.jsx)(j,{wall:n,item:d,instaImg:g,ugc_products:f,isVideoError:p,custmClass:"tb_media_wrap_002",ImageUrl:d.postFileNew,videoUrl:d.mediaUrl,active:!0}):""]}),(0,x.jsx)("div",{className:"tb_details_right",style:y,children:(0,x.jsx)("div",{className:"tb_content_wrap",children:(0,x.jsxs)("div",{className:"tb_post_detail_wrap",children:[m<991?(0,x.jsx)("div",{className:"tb_post_wrapper",children:(0,x.jsxs)("div",{className:"tb_modal_content_001",children:[(0,x.jsx)(G,{item:d,wall:n,personalization:e,currentIndex:c,ugc_products:f}),(0,x.jsx)(C,{item:d,personalization:e,isAuthorImagevalid:this.state.isAuthorImagevalid,onMediaUpdate:this.onMediaUpdate,wall:n,networkData:v}),(0,x.jsx)(H.Z,{children:(0,x.jsx)(L,{item:d,personalization:e,currentIndex:c,wall:n})})]})}):(0,x.jsx)(u.$B,{autoHide:!0,autoHeightMax:200,className:"tb_post_wrapper",style:{height:"calc(100% - 35px)"},renderTrackHorizontal:function(t){return(0,x.jsx)("div",(0,_.Z)((0,_.Z)({},t),{},{className:"track-horizontal",style:{display:"none"}}))},children:(0,x.jsxs)("div",{className:"tb_modal_content_001",children:[(0,x.jsx)(G,{item:d,wall:n,personalization:e,currentIndex:c,ugc_products:f}),(0,x.jsx)(C,{item:d,personalization:e,isAuthorImagevalid:this.state.isAuthorImagevalid,onMediaUpdate:this.onMediaUpdate,wall:n,networkData:v}),(0,x.jsx)(H.Z,{children:(0,x.jsx)(L,{item:d,personalization:e,currentIndex:c,wall:n})})]})}),n.ThemeRule.socialAction?(0,x.jsx)(R,{wall:n,item:d}):""]})})})]})}),n&&n.UserRule&&"1"==n.UserRule.taggBranding?(0,x.jsx)(B,{}):""]})})})]})}}]),o}(l.PureComponent),q=(0,l.lazy)((function(){return Promise.all([o.e(817),o.e(385)]).then(o.bind(o,73385))})),J=function(t){(0,n.Z)(o,t);var e=(0,s.Z)(o);function o(){var t;(0,r.Z)(this,o);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={isEnable:0,eventData:{},shareText:"SHARE",viewOnText:"View on",currentIndex:null,completeData:{},personalization:{},url:null,platform:null,imgData:[],type:""},t.closeCommercePopUP=function(e){(0,h.st)("remove"),t.setState({isEnable:0,currentIndex:null,type:""}),t.props.closePopUP();var o=document.getElementsByTagName("html");o&&o[0]&&(o[0].style.overflow="")},t.getCommercePopUPEvent=function(e){void 0!==e&&""!==e&&e.card&&("post"===e.type?t.setState({url:"",isEnable:1,eventData:e,currentIndex:e.index,completeData:e.idArray,viewOnText:e.viewOnText,shareText:e.shareText,windowParent:e,imgData:e.imgData,personalization:e.personalization,type:e.type},(function(){return t.CommercePopUPSlideWithArrowKey()})):"submit-pic"===e.type&&t.setState({isEnable:1,type:e.type,windowParent:e}))},t.featuredPopSliderChangeIndex=function(e){return function(o){var r=t.state.eventData;-1===e?t.setState({currentIndex:r.idArray.length-1}):t.setState({currentIndex:r.idArray.length===e?0:e})}},t.SliderWithKey=function(e){var o=t.state.eventData;-1===e?t.setState({currentIndex:o.idArray.length-1}):t.setState({currentIndex:o.idArray.length===e?0:e})},t.CommercePopUPSlideWithArrowKey=function(e){var o=t.state.personalization;if(o&&1===o.popupSlideShow){e=e||window.event;var r=(0,i.Z)(t);e&&e.keyCode&&void 0!==e.keyCode&&(37===e.keyCode?r.SliderWithKey(r.state.currentIndex-1):39===e.keyCode?r.SliderWithKey(r.state.currentIndex+1):27===e.keyCode&&t.closeCommercePopUP())}},t}return(0,a.Z)(o,[{key:"componentDidMount",value:function(){var t=this.props.data;this.getCommercePopUPEvent(t);var e=document.getElementsByTagName("html");e&&e[0]&&(e[0].style.overflow="hidden")}},{key:"render",value:function(){var t=this.state,e=t.viewOnText,o=t.isEnable,r=t.currentIndex,a=t.personalization,i=t.completeData,n=t.eventData,s=t.url,c=t.platform,p=t.imgData,h=t.type,_=null;"post"===h&&(_=-1===r?i[n.idArray.length-1]:i[r]);var u=this.props,m=u.wall,g=u.webFilters;return 1===o&&m&&"submit-pic"===h?(0,x.jsx)(l.Suspense,{fallback:null,children:(0,x.jsx)(q,{wall:m,wallId:m.Wall.id,onClosePopUp:this.closeCommercePopUP})}):1===o&&"post"===h?(0,x.jsx)($,{webFilters:g,wall:m,item:_,onClosePopUp:this.closeCommercePopUP,currentIndex:r,personalization:a,viewOnText:e,slideWithArrowKeys:this.CommercePopUPSlideWithArrowKey,featuredPopSliderChangeIndex:this.featuredPopSliderChangeIndex,hostUrl:s,platform:c,imgData:p},(0,d.v4)()):null}}]),o}(l.PureComponent),Q=(0,c.$j)((function(t){return{wall:t.appData.wall,webFilters:t.appData.webFilters}}),(function(t){return{closePopUP:function(e){return t((0,p.zj)(e))}}}))(J)},2956:function(t,e,o){"use strict";o(47313),o(46417)},29335:function(t,e,o){"use strict";o.d(e,{Z:function(){return n}});var r=o(1413),a=(o(47313),o(8354)),i=o(46417);function n(t){var e=t.ugc_products,o=t.UgcSetting,n=t.item,s=(t.isPopUp,{background:o?o.hotspot_color:null}),l={background:o?o.hotspot_color:null,color:o?o.hotspot_type_color:null},c=(0,a.v9)((function(t){return t.modalPop})),d=function(t){return function(e){2==parseInt(o.tab_target)?window.parent.location.href=t:window.open(t,"_blank")}};return(0,i.jsx)("div",{className:"ts__post_hotspot",children:e.map((function(t,e){var a,p,h=parseInt(t.hotspot_cordinates.top),_=parseInt(t.hotspot_cordinates.left),u=t.UgcProduct.product_discount>0?n.ugc_personalizaion.UgcSetting.discount_price_color:n.ugc_personalizaion.UgcSetting.original_price_color,m={top:h<"30"||h<"70"&&h>"30"?"18px":"auto",left:_<"30"?"18px":_<"70"&&_>"30"?"-25px":"auto",bottom:h<"30"||h<"70"&&h>"30"?"auto":"18px",right:_<"30"||_<"70"&&_>"30"?"auto":"15px"};return(0,i.jsx)("div",{className:"ts_st_post_hotspot_icon",style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},onClick:(a=function(){return console.log("Child Element!")},function(t){t&&t.preventDefault(),!p&&t&&t.stopPropagation();for(var e=arguments.length,o=new Array(e>1?e-1:0),r=1;r<e;r++)o[r-1]=arguments[r];a.apply(void 0,[t].concat(o))}),children:1==o.hotspot_type?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{onClick:d(t.UgcProduct.product_url),className:"ts_st_post_hotspot_icon_blob_outer ts_st_post_numberHotspot",children:c.showAll||!c.isShowPopUp||c.showHotspot&&c.index==e&&c.hotspotId==t.id?(0,i.jsxs)("div",{className:"ts_st_post_hotspot_icon_blob_custom",id:"ts_st_post_hotspot_icon_blob".concat(e),style:(0,r.Z)((0,r.Z)({},l),{},{textAlign:"center"}),children:[" ",e+1]}):null}),c.showAll||!c.isShowPopUp||c.showHotspot&&c.index==e&&c.hotspotId==t.id?(0,i.jsxs)("div",{className:"".concat(c.showAll?"ts_st_post_hotspot_icon_hover":"ts_st_post_hotspot_icon_hover_custom "," ").concat(c.isShowPopUp?"":"ts_st_post_hotspot_icon_hover"),style:m,children:[(0,i.jsx)("div",{className:"ts_st_post_hotspot_icon_hover_p_name",children:t.UgcProduct.product_title}),(0,i.jsxs)("div",{style:{color:u},className:"ts_st_post_hotspot_icon_hover_act_price ".concat(t.UgcProduct.product_discount>0?"ts_st_post_hotspot_icon_hover_act_prise_diabled":""),children:[t.UgcProduct.price_currency_symbol," "," ",t.UgcProduct.product_pric]}),t.UgcProduct.product_discount>0?(0,i.jsxs)("div",{className:"ts_st_post_hotspot_icon_hover_dis_price",style:{color:n.ugc_personalizaion.UgcSetting.original_price_color},children:[t.UgcProduct.price_currency_symbol," "," ",t.UgcProduct.product_discount]}):""]}):null]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{onClick:d(t.UgcProduct.product_url),className:"ts_st_post_hotspot_icon_blob_outer",children:(0,i.jsx)("div",{className:"ts_st_post_hotspot_icon_blob",style:s,children:(0,i.jsx)("div",{})})}),(0,i.jsxs)("div",{className:"ts_st_post_hotspot_icon_hover ",style:m,children:[(0,i.jsx)("div",{className:"ts_st_post_hotspot_icon_hover_p_name",children:t.UgcProduct.product_title}),(0,i.jsxs)("div",{style:{color:u},className:"ts_st_post_hotspot_icon_hover_act_price ".concat(t.UgcProduct.product_discount>0?"ts_st_post_hotspot_icon_hover_act_prise_diabled":""),children:[t.UgcProduct.price_currency_symbol," "," ",t.UgcProduct.product_price]}),t.UgcProduct.product_discount>0?(0,i.jsxs)("div",{className:"ts_st_post_hotspot_icon_hover_dis_price",style:{color:n.ugc_personalizaion.UgcSetting.original_price_color},children:[t.UgcProduct.price_currency_symbol," "," ",t.UgcProduct.product_discount," "]}):""]})]})},e)}))})}},50247:function(){}}]);