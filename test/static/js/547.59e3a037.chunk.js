(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[547],{13946:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return G}});var r=o(15671),i=o(43144),n=o(97326),s=o(60136),a=o(29388),l=o(47313),c=o(8354),d=o(16231),p=o(73763),u=o(17739),_=o(1413),h=o(7142),m=o(24557),g=o(20510),v=o(34041),f=o(29335),x=o(46417),y=function(t){(0,s.Z)(o,t);var e=(0,a.Z)(o);function o(t){var i;return(0,r.Z)(this,o),(i=e.call(this,t)).state={height:"",padding:"",error:""},i}return(0,i.Z)(o,[{key:"componentWillMount",value:function(){var t,e,o,r=this,i=this.props.ImageUrl;(0,v.Z)(i).then((function(i){var n=i.width,s=i.height;t=(o=n>s)?100:100*n/s,e=o?100*s/n:100,r.setState({height:e,width:t})})).catch((function(t){return r.setState({height:100,width:100,error:t})}))}},{key:"render",value:function(){var t=this.props,e=t.ImageClass,o=t.ImageUrl,r=t.item,i=t.ugc_products,n=t.product,s=this.state,a=s.width,l=s.height,c={backgroundImage:"url(".concat(o,")"),height:a>l?l+"%":"100%",width:a>l?"100%":a+"%",padding:"unset"};return(0,x.jsx)("div",{className:e,style:c,children:2!=r.type&&4!=r.type||1!=r.hotspot||1!=r.ugc_personalizaion.UgcSetting.status?(0,x.jsx)("div",{}):(0,x.jsx)(f.Z,{product:n,item:r,ugc_products:i,UgcSetting:r.ugc_personalizaion.UgcSetting})})}}]),o}(l.PureComponent),b=o(90182),w=function(t){(0,s.Z)(o,t);var e=(0,a.Z)(o);function o(t){var i;return(0,r.Z)(this,o),(i=e.call(this,t)).state={isHotspot:!1,loadedImg:!1},i.myRef=(0,l.createRef)(),i}return(0,i.Z)(o,[{key:"render",value:function(){var t=this,e=this.props,o=e.item,r=(e.instaImg,e.ugc_products),i=e.isVideoError,n=e.wall,s=e.custmClass,a=e.ImageUrl,l=e.videoUrl,c=e.active,d=e.showHotspot,p=this.state.loadedImg;return(0,x.jsx)("div",{className:"tb_media_holder",children:c?(0,x.jsxs)("div",{className:s,children:[2===o.type||4===o.type?(0,x.jsxs)("div",{className:"tb_img_holder",ref:this.myRef,onMouseEnter:function(){return d({showAll:!0})},onMouseLeave:function(){return d({showAll:!1})},children:[(0,x.jsx)("img",{loading:"lazy",src:a,style:{height:"0",display:"none"},onLoad:function(){return t.setState({loadedImg:!0})}}),p?(0,x.jsxs)(x.Fragment,{children:[" ",(0,x.jsx)("div",{className:"tb_img_blur__0",style:{backgroundImage:"url(".concat(a,")")},children:(0,x.jsx)("div",{})}),(0,x.jsx)(y,{ImageClass:"tb_modal_npopup_img",ImageUrl:a,ugc_products:r,item:o,wall:n})]}):(0,x.jsx)("div",{className:"sk_loader_product",children:(0,x.jsx)("div",{})})]}):1===o.type?(0,x.jsx)(x.Fragment,{}):3!==o.type&&5!==o.type||!(o.link.indexOf("youtube")>=0||o.link.indexOf("youtu.be")>=0||o.link.indexOf("vimeo")>=0||o.link.indexOf("tumblr")>=0||o.link.indexOf("vk")>=0&&30==o.networkId)?i?(0,x.jsxs)("div",{className:"tb_img_holder",children:[" ",(0,x.jsxs)("div",{className:"tb_modal_img_holder_001",children:[(0,x.jsx)("img",{src:"https://app.taggbox.com/widget/image/no-camera.svg",style:{visibility:"visible!important",width:180,margin:"20px auto",objectFit:"contain"}})," "]})]}):o.link.indexOf("facebook")>=0?(0,x.jsx)("div",{className:"tb_img_holder",children:(0,x.jsx)("div",{className:"tb_modal_img_holder_001",children:(0,x.jsx)(g.Z,{style:{display:"contents"},className:"tb-detail-image-iframe",url:l,"data-type":"video","data-stories":o.stories,"data-filter-id":o.filterId,"data-network":o.networkId,"data-link":o.link,"data-wall-id":n.Wall.id,"data-item-id":o.id,"data-load":0,onError:function(t){(0,u.b3)(t)},autoPlay:!0})})}):(0,x.jsx)("div",{className:"tb_img_holder",children:(0,x.jsx)("div",{className:"tb_modal_img_holder_001",children:(0,x.jsx)("div",{className:"tb_video_wrap",children:(0,x.jsx)("video",{src:l,autoPlay:!0,"data-type":"video","data-stories":o.stories,"data-filter-id":o.filterId,"data-network":o.networkId,"data-link":o.link,onError:function(t){(0,u.b3)(t)},"data-load":0,poster:o.postFileNew,"data-wall-id":n.Wall.id,"data-item-id":o.id})})})}):(0,x.jsx)("div",{className:"tb_img_holder",children:(0,x.jsx)("div",{className:"tb_modal_img_holder_001",children:(0,x.jsx)("div",{className:"tb_video_wrap",children:(0,x.jsx)(m.Z,{className:"tb-detail-image-iframe",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",src:"".concat(l),allowFullScreen:"true",style:{width:"100%!important"},onError:function(t){(0,u.b3)(t)},"data-type":"video","data-stories":o.stories,"data-filter-id":o.filterId,"data-network":o.networkId,"data-link":o.link,"data-wall-id":n.Wall.id,"data-item-id":o.id,"data-load":0})})})}),24==o.networkId?(0,x.jsxs)("div",{className:"tb_img_holder",children:[" ",(0,x.jsxs)("div",{className:"tb_modal_img_holder_001",children:[" ",(0,x.jsx)("img",{src:"img/loading.gif",alt:"",className:"img-responsive spotify-img",style:{visibility:"visible",position:"relative",transform:"translate(-50%, -50%)",top:"50%",left:"50%",display:"none",width:"60px"}})," "]})]}):null]}):(0,x.jsx)("div",{className:s,children:(0,x.jsxs)("div",{className:"tb_img_holder",ref:this.myRef,children:[(0,x.jsx)("div",{className:"tb_img_blur__0",style:{backgroundImage:"url(".concat(a,")")},children:(0,x.jsx)("div",{})}),(0,x.jsx)(y,{ImageClass:"tb_modal_npopup_img",ImageUrl:a,ugc_products:r,item:o,wall:n})]})})},"postID".concat(o.id))}}]),o}(l.Component),j=(0,c.$j)((function(t){return{}}),(function(t){return{showHotspot:function(e){return t((0,p.EG)(e))}}}))(w),k=o(70816),N=o.n(k),P=(o(2956),function(t){(0,s.Z)(o,t);var e=(0,a.Z)(o);function o(){return(0,r.Z)(this,o),e.apply(this,arguments)}return(0,i.Z)(o,[{key:"render",value:function(){var t,e,o,r,i=this.props,n=i.item,s=i.personalization,a=(i.isAuthorImagevalid,i.onMediaUpdate,i.wall),l=i.networkData,c=(t="#ffffff",e=a.ThemeRule.authorColor,o="#000000",(r=a.ThemeRule.cardColor)===t?t==e?o:e:r===o?o==e?t:e:t==e?o:e),d=(s.postTime,n.author.isInstaUser),p=s.postAuthor,u=(l.icon.replace("fa-",""),505==a.ThemeRule.iconType?l.color:"#ffffff"==a.ThemeRule.iconColor?"rgba(63, 66, 72, 0.3)":a.ThemeRule.iconColor),_={color:c,textDecoration:"none"},h={backgroundColor:c};"url(".concat(n.author.picture,")");return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:"tb_post_author",children:[0!=p||4==s.commerceTheme?d?"":(0,x.jsxs)("div",{className:"tb_author_details",children:[(0,x.jsxs)("div",{className:"tb_sc_author_profile",children:[(0,x.jsx)("img",{loading:"lazy",src:n.author.picture,onError:function(t){t.target.onerror=null,t.target.src=n.author.errorPic},alt:"image"})," "]}),(0,x.jsx)("div",{className:"tb_author_usrname",style:_,children:(0,x.jsx)("a",{href:n.link,target:"_blank",className:"m_post_title",style:_,children:n.author.name})}),(0,x.jsxs)("div",{className:"tb_author_info",children:[(0,x.jsx)("div",{className:"modal_seprator_dot001",style:h,children:(0,x.jsx)("div",{})}),(0,x.jsx)("div",{className:"tb_post_time",style:_,children:N()(new Date(1e3*n.createdAt)).fromNow()})]})]}):"",(0,x.jsx)("div",{className:"tb_social_ico","data-network":l.name,children:(0,x.jsx)("div",{className:"tb__icon tb-".concat(l.icon.replace("fa-","")),style:{color:u},children:(0,x.jsx)("div",{})})})]})})}}]),o}(l.Component)),C=P,I=o(16390),U=(o(77560),o(98501)),S=o(77560),Z=function(t){(0,s.Z)(o,t);var e=(0,a.Z)(o);function o(){var t;(0,r.Z)(this,o);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={isTrimEnable:!1},t.onClickReadText=function(e){var o=t.state.isTrimEnable;t.setState({isTrimEnable:!o})},t}return(0,i.Z)(o,[{key:"render",value:function(){var t,e,o,r,i=this.props,n=i.item,s=(i.currentIndex,i.personalization),a=i.wall,l=this.state.isTrimEnable,c={backgroundImage:"url(".concat(U.KA).concat(n.networkId,"/").concat(n.rating,".png)")},p=(1===n.hideContent&&1!==n.type&&16!=s.commerceTheme&&4!=s.commerceTheme||0==n.popupContent&&16==s.commerceTheme&&s.commerceTheme,{fontFamily:a.ThemeRule.css_font,fontSize:1==n.type?1==a.Personalization.textDecorate?a.ThemeRule.fontSizeDecorate:a.ThemeRule.fontSizeNormal:a.ThemeRule.fontSize,color:(t="#ffffff",e=a.ThemeRule.fontColor,o="#000000",r=a.ThemeRule.cardColor,r===t?t==e?o:e:r===o?o==e?t:e:t==e?o:e)}),_=(0,u.Fx)(n.content),h=String(_).substring(0,200),m=l?_:h;return a&&a.ThemeRule&&Object.keys(a.ThemeRule).length>0&&(0,x.jsxs)("div",{className:"tb_post_content",children:[null!=n.rating&&0!=n.rating&&(0,x.jsxs)("div",{className:"tb_post_rating_wrap",children:[" ",(0,x.jsx)("div",{className:"tb_post_rating",style:c,children:(0,x.jsx)("div",{})})," "]}),(0,x.jsx)("div",{className:"tb_post_rating_wrap",children:" "}),n.popupContent?"":(0,x.jsxs)("div",{className:"tb_post_content001 ".concat(1===a.Personalization.textDecorate&&1===n.type?n.textDecoClass:"","   tb-cTSfont-").concat(a.ThemeRule.font_varient),style:p,children:[0!==a.Personalization.hashtag_highlight?1===a.Personalization.hashtag_all?S((0,I.ZP)(m),/#(\w+)/g,(function(t,e){return(0,x.jsxs)("div",{className:"ts_popup_hash_tag",style:{color:a.Personalization.hashtag_color,fontWeight:"bold"},children:["#",t]},(0,d.v4)())})):1===a.Personalization.hashtag_feed?S((0,I.ZP)(m),n.hash.hashString,(function(t,e){return(0,x.jsx)("div",{className:"ts_popup_hash_tag",style:{color:a.Personalization.hashtag_color,fontWeight:"bold"},children:t},(0,d.v4)())})):(0,I.ZP)(m):(0,I.ZP)(m),m.length>199?this.state.isTrimEnable?(0,x.jsx)("a",{className:"lesslink",onClick:this.onClickReadText,children:" Read Less"}):(0,x.jsx)("a",{className:"morelink",onClick:this.onClickReadText,children:" Read More..."}):""]})]})}}]),o}(l.Component),z=Z,T=function(t){(0,s.Z)(o,t);var e=(0,a.Z)(o);function o(){var t;(0,r.Z)(this,o);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).onShareFacebook=function(e){var o=t.props,r=o.item,i=(o.wall,"https://www.facebook.com/sharer/sharer.php?display=popup&u="+r.share.facebook);window.open(i,"sharer","toolbar=0,status=0,resizable=1,width=626,height=436")},t.onTwitterClick=function(e){var o=t.props,r=o.item,i=o.wall;e&&(0,p.S5)({type:2,action:2,wall:i.Wall.id,feed:r.feedId,post:r.referenceId})},t.linkedinShareCount=function(e){var o=t.props,r=o.item,i=o.wall;(0,p.S5)({type:2,action:2,wall:i.Wall.id,feed:r.feedId,post:r.referenceId})},t}return(0,i.Z)(o,[{key:"render",value:function(){var t=this.props,e=t.wall,o=t.item,r={color:505==e.ThemeRule.iconType?"":"#ffffff"==e.ThemeRule.iconColor?"rgba(63, 66, 72, 0.3)":e.ThemeRule.iconColor};return(0,x.jsx)("div",{className:"tb_post_footer",children:(0,x.jsxs)("div",{className:"tb_share_ico",children:[(0,x.jsx)("div",{className:"tb_share_ico_list",children:(0,x.jsx)("a",{onClick:this.onShareFacebook,className:"fbPanel",children:(0,x.jsx)("div",{className:"tb__icon tb-facebook-f",style:r,children:(0,x.jsx)("div",{})})})}),(0,x.jsx)("div",{className:"tb_share_ico_list",children:(0,x.jsx)("a",{onClick:this.onTwitterClick,href:o.share.twitter,className:"twPanel",target:"_blank",children:(0,x.jsx)("div",{className:"tb__icon tb-twitter",style:r,children:(0,x.jsx)("div",{})})})}),(0,x.jsx)("div",{className:"tb_share_ico_list",children:(0,x.jsx)("a",{onClick:this.linkedinShareCount,href:o.share.linkedin,target:"_blank",children:(0,x.jsx)("div",{className:"tb__icon tb-linkedin",style:r,children:(0,x.jsx)("div",{})})})}),o.networkId&&null!=o.link?(0,x.jsx)("div",{className:"tb_share_ico_list",children:(0,x.jsxs)("a",{href:o.link,className:"linkedinPanel",target:"_blank",children:[(0,x.jsx)("div",{className:"tb__icon tb-link",style:r,children:(0,x.jsx)("div",{})})," "]})}):null]})})}}]),o}(l.PureComponent),A=function(t){(0,s.Z)(o,t);var e=(0,a.Z)(o);function o(){return(0,r.Z)(this,o),e.apply(this,arguments)}return(0,i.Z)(o,[{key:"render",value:function(){var t=this.props,e=t.item,o=t.networkData,r=(t.wall,e.ugc_personalizaion.UgcSetting),i=r&&Object.keys(r).length>0;return e.ugc_personalizaion&&r&&(0,x.jsxs)(b.q,{children:[i&&r.title_link_font?(0,x.jsx)("link",{href:"".concat(U.jN,"/").concat(r.title_link_font,".css"),rel:"stylesheet"}):null,i&&r.price_link_font?(0,x.jsx)("link",{href:"".concat(U.jN,"/").concat(r.price_link_font,".css"),rel:"stylesheet"}):null,i&&r.feature_link_font?(0,x.jsx)("link",{href:"".concat(U.jN,"/").concat(r.feature_link_font,".css"),rel:"stylesheet"}):null,i&&r.discount_link_font?(0,x.jsx)("link",{href:"".concat(U.jN,"/").concat(r.discount_link_font,".css"),rel:"stylesheet"}):null,i&&r.feature_link_font?(0,x.jsx)("link",{href:"".concat(U.jN,"/").concat(r.feature_link_font,".css"),rel:"stylesheet"}):null,i&&r.button_link_font?(0,x.jsx)("link",{href:"".concat(U.jN,"/").concat(r.button_link_font,".css"),rel:"stylesheet"}):null,(0,x.jsx)("style",{children:"\n        .tb_pro_title_user {font-family: ".concat(r.feature_css_font,"; font-size: ").concat(r.feature_font_size,"; color: ").concat(r.feature_text_color,"}\n        .tb_author_avatar0012{background: ").concat(o.color,"!important}\n        .ugc-product-title{ font-family: ").concat(r.title_css_font,"!important; color: ").concat(r.product_title_color,"!important; font-size:").concat(r.product_title_font_size,"px!important}\n        .tb_pro_discount_price{ font-family: ").concat(r.discount_css_font,"!important; color: ").concat(r.discount_price_color,"!important; font-size:").concat(r.discount_price_font_size,"px!important}\n        .tb_pro_price{ font-family: ").concat(r.price_css_font,"!important; color: ").concat(r.original_price_color,"!important; font-size:").concat(r.original_price_font_size,"px!important}\n        .ugc-product-link a{ font-family: ").concat(r.button_css_font,"!important; color: ").concat(r.buy_now_color,"!important; font-size:").concat(r.buy_font_size,"px!important; background:").concat(r.buy_now_background,"!important;}\n        ")})]})}}]),o}(l.Component),L=function(t){(0,s.Z)(o,t);var e=(0,a.Z)(o);function o(){var t;(0,r.Z)(this,o);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={prdImgLoaded:!1,noImg:!1},t}return(0,i.Z)(o,[{key:"render",value:function(){var t=this,e=this.props.imgUrl,o=this.state,r=o.prdImgLoaded,i=o.noImg;return(0,x.jsxs)("div",{className:"ugc-product-images ".concat(i?"tb_popup_image":""),style:{display:i?"none":"block"},children:[(0,x.jsx)("img",{loading:"lazy",src:e,style:{height:"0%",display:"none"},onLoad:function(){return t.setState({prdImgLoaded:!0})},onError:function(){return t.setState({noImg:!0})}}),r?(0,x.jsxs)("div",{className:"ugc_pro_img_holder ",style:{backgroundImage:"url(".concat(e,")")},children:[(0,x.jsx)("div",{})," "]}):(0,x.jsx)("div",{className:"sk_loader_product_thumb",children:(0,x.jsx)("div",{})})]})}}]),o}(l.Component),E=function(t){(0,s.Z)(o,t);var e=(0,a.Z)(o);function o(){var t;(0,r.Z)(this,o);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={prdImgLoaded:!1,noImg:!1},t.openUrl=function(e){return function(o){var r=t.props.item.ugc_personalizaion.UgcSetting;2==parseInt(r.tab_target)?window.parent.location.href=e:window.open(e,"_blank")}},t}return(0,i.Z)(o,[{key:"render",value:function(){var t=this,e=this.props,o=e.item,r=e.ugc_products,i=e.wall,n=e.showHotspot,s=this.state,a=(s.prdImgLoaded,s.noImg,o.ugc_personalizaion.UgcSetting);return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:"tb_shop_cont",children:[(0,x.jsx)("div",{className:"tb_pro_title tb_pro_title_user tb-cTSfont-".concat(a.feature_font_varient),children:(0,I.ZP)(a.feature_text)}),(0,x.jsx)("div",{className:"ts_modal_product tb_modal_pro",children:r.map((function(e,r){return(0,x.jsx)("div",{className:"tb_pro_item",children:(0,x.jsxs)("div",{className:"tb_pro_wrapp product-item-".concat(r),onMouseEnter:function(){return n({showHotspot:!0,index:r,hotspotId:e.id})},onMouseLeave:function(){return n({showHotspot:!1,index:r,hotspotId:e.id})},children:[(0,x.jsx)(L,{imgUrl:e.UgcProduct.product_image}),o.ugc_personalizaion&&a&&e.UgcProduct.product_title?(0,x.jsxs)("div",{className:"ugc-product-title tb-cTSfont-".concat(a.title_font_varient),children:[" ",e.UgcProduct.product_title]}):null,e.UgcProduct.product_price>0||e.UgcProduct.product_discount>0?(0,x.jsx)("div",{className:"ugc-product-price",children:(0,x.jsxs)("div",{className:"tb_pro_price tb-cTSfont-".concat(a.price_font_varient),children:[" ",e.UgcProduct.price_currency_symbol," ",Math.trunc(100*(e.UgcProduct.product_discount>0?e.UgcProduct.product_discount:e.UgcProduct.product_price))/100]})}):null,e.UgcProduct.product_discount>0?(0,x.jsxs)("div",{className:"tb_pro_discount_price  tb-cTSfont-".concat(a.discount_font_varient),children:[e.UgcProduct.price_currency_symbol," ",Math.trunc(100*e.UgcProduct.product_price)/100]}):null,(0,x.jsx)("div",{className:"ugc-product-link",children:(0,x.jsx)("a",{onClick:t.openUrl(e.UgcProduct.product_url),className:"tb-cTSfont-".concat(a.button_font_varient),target:i&&i.User&&"102810"!=i.User.id?"_blank":"",children:a.buy_now_text})})]})},r)}))})]})})}}]),o}(l.Component),R=(0,c.$j)((function(t){return{}}),(function(t){return{showHotspot:function(e){return t((0,p.EG)(e))}}}))(E),D=o(69867);function M(t){t.style.setProperty("visibility","visible","important"),t.style.setProperty("opacity","1","important"),t.style.setProperty("display","flex","important")}var F=function(t){(0,s.Z)(o,t);var e=(0,a.Z)(o);function o(){return(0,r.Z)(this,o),e.apply(this,arguments)}return(0,i.Z)(o,[{key:"render",value:function(){return(0,x.jsxs)("a",{href:U.Cx,target:"_blank",ref:function(t){t&&(t.style.setProperty("position","absolute","important"),t.style.setProperty("left","auto","important"),t.style.setProperty("right","0","important"),t.style.setProperty("bottom","-40px","important"),t.style.setProperty("align-items","center","important"),t.style.setProperty("padding","4px 0","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("width","auto","important"),t.style.setProperty("font-family","Inter","important"),t.style.setProperty("text-decoration","none","important"),M(t))},children:[(0,x.jsx)("div",{ref:function(t){t&&(t.style.setProperty("font-size","14px","important"),t.style.setProperty("color","#fff","important"),t.style.setProperty("margin-right","6px","important"),t.style.setProperty("width","100%","important"),t.style.setProperty("height","auto","important"),t.style.setProperty("font-family","Inter","important"),M(t))},children:"Powered By"}),(0,x.jsx)("div",{ref:function(t){t&&(t.style.setProperty("background-image","url(https://cloud.taggbox.com/taggshop/assets/images/home-page/logo-taggshop-white.svg)","important"),t.style.setProperty("background-size","contain","important"),t.style.setProperty("background-position","left center","important"),t.style.setProperty("background-repeat","no-repeat","important"),t.style.setProperty("height","35px","important"),t.style.setProperty("min-height","35px","important"),t.style.setProperty("width","102px","important"),t.style.setProperty("min-width","102px","important"),M(t))}})]})}}]),o}(l.PureComponent),W=(o(46425),o(11774));var H=function(t){(0,s.Z)(o,t);var e=(0,a.Z)(o);function o(){var t;(0,r.Z)(this,o);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={activeSlider:0},t.changeActive=function(e){t.setState({activeSlider:e})},t}return(0,i.Z)(o,[{key:"render",value:function(){var t=this,e=this.props,o=e.item,r=e.instaImg,i=e.ugc_products,n=e.isVideoError,s=e.wall,a=(e.data,this.state.activeSlider);return(0,x.jsx)("div",{className:"tb_post_modal_media_wrapper___",children:(0,x.jsx)("div",{className:"tb_post_modal_slide_holder_",children:(0,x.jsxs)(W.tv,{hasTrack:!1,className:"tb_post_modal_media_slider",options:{rewind:!0,speed:1e3,gap:0,autoplay:!1,padding:0,pagination:!0,arrows:!0,focus:"center",Slide:"123456",classes:{pagination:"splide__pagination tb_modal_slider_dots",page:"splide__pagination__page tb_modal_slider_dot"}},ref:this.myRef,onMove:function(e,o){t.changeActive(o)},children:[(0,x.jsx)(W.Gj,{children:o.imageList.map((function(t,e){return(0,x.jsx)(W.jw,{style:{margin:0,padding:0},children:(0,x.jsx)("div",{className:"tb_post_modal_slide_list",children:(0,x.jsx)(j,{wall:s,item:t,instaImg:r,ugc_products:i,isVideoError:n,custmClass:"ts_popup_slider",ImageUrl:t.postFile,videoUrl:t.mediaFile,active:e==a})})},"psId".concat(e))}))}),(0,x.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_post_modal_arrow_wrapper_",children:[(0,x.jsx)("div",{className:"splide__arrow splide__arrow--prev tb_post_modal_arrow tb_post_modal_arrow_left__ tb__icon tb-chevron-left",children:(0,x.jsx)("div",{})}),(0,x.jsx)("div",{className:"splide__arrow splide__arrow--next  tb_post_modal_arrow tb_post_modal_arrow_right__ tb__icon  tb-chevron-right",children:(0,x.jsx)("div",{})})]})]})})})}}]),o}(l.PureComponent),O=function(t){var e=t.item,o=t.personalization,r=t.currentIndex,i=t.ugc_products,n=t.wall;return(0,x.jsx)(x.Fragment,{children:e.ugc_personalizaion.UgcSetting&&1==e.ugc_personalizaion.UgcSetting.status&&1==o.themeType&&e.ugc_products&&Object.keys(e.ugc_products).length>0?(0,x.jsxs)("div",{className:"tb_post_wrap_in",children:[(0,x.jsx)(R,{wall:n,item:e,personalization:o,currentIndex:r,ugc_products:i})," "]}):null})},B=function(t){(0,s.Z)(o,t);var e=(0,a.Z)(o);function o(){var t;(0,r.Z)(this,o);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={currentIndex:t.props.currentIndex,item:t.props.item,isVideoError:!1,windowWidth:window.innerWidth,isAuthorImagevalid:!0,instaImg:(0,u.TI)(t.props.imgData,t.props.item.link),isHotspot:!1},t.onErrorVideo=function(e){return t.setState({isVideoError:!0})},t.onMediaUpdate=function(e){return t.setState({isAuthorImagevalid:!1})},t}return(0,i.Z)(o,[{key:"componentDidMount",value:function(){var t=this.props,e=t.currentIndex,o=t.item,r=t.slideWithArrowKeys,i=(0,u.uB)(o.author.picture);this.setState({currentIndex:e,item:o,isAuthorImagevalid:i,instaImg:(0,u.TI)(this.props.imgData,this.props.item.link)});var n=document.querySelector("#modalPost0");n&&n.focus(),document.addEventListener("keydown",r)}},{key:"componentWillReceiveProps",value:function(t){var e=t.currentIndex,o=t.item,r=(0,u.uB)(o.author.picture);this.setState({currentIndex:e,item:o,isVideoError:!1,isAuthorImagevalid:r,instaImg:(0,u.TI)(this.props.imgData,this.props.item.link)})}},{key:"render",value:function(){var t=this.props,e=t.personalization,o=t.onClosePopUp,r=t.featuredPopSliderChangeIndex,i=t.slideWithArrowKeys,n=(t.hostUrl,t.viewOnText),s=(t.platform,t.wall),a=t.webFilters,l=this.state,c=l.currentIndex,d=l.item,p=l.isVideoError,m=l.windowWidth,g=l.instaImg,v=(0,u.HS)(d.ugc_products),f=(0,u.EH)(d.networkId,a),y={backgroundColor:s.ThemeRule.cardColor};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(A,{wall:s,item:d,networkData:f}),(0,x.jsx)("div",{className:"modalId".concat(d.id," tb_modal_001 tb_fade ").concat(4==d.type||5==d.type||d.ugc_products&&Object.keys(d.ugc_products).length>0?"modal-text-image":2==d.type||3==d.type?"modal-only-image":"modal-only-text"),onKeyDown:i,onKeyPress:i,onLoad:i,onClick:function(t){return t.currentTarget==t.target&&o(t)},children:(0,x.jsx)("div",{className:"tb_modal_dialog taggModal",children:(0,x.jsxs)("div",{className:"tb_conetent",children:[(0,x.jsxs)("div",{className:"tb_modal_head",children:[(0,x.jsxs)("div",{className:"tb_modal_header",children:[(0,x.jsx)("div",{className:"tb_post_link_small",children:(0,x.jsx)("div",{className:"tb_post_address",children:(0,x.jsxs)("a",{className:"Instagram Business",target:"_blank",href:d.link,children:[(0,x.jsxs)("span",{children:[n," ",f.name]}),(0,x.jsxs)("svg",{id:"Group_4485","data-name":"Group 4485",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[(0,x.jsx)("rect",{id:"Rectangle_2094","data-name":"Rectangle 2094",width:"48",height:"48",fill:"none",opacity:"0"}),(0,x.jsx)("g",{id:"Group",transform:"translate(7.954 4.094)",children:(0,x.jsx)("path",{id:"Path",d:"M33.729,21.333a1.094,1.094,0,0,1,1.559,0l6.837,6.837a1.094,1.094,0,0,1,0,1.559l-6.837,6.837a1.1,1.1,0,0,1-1.559-1.559l6.044-6.072-6.044-6.072a1.094,1.094,0,0,1,0-1.53Z",transform:"translate(-33.407 -21.007)",fill:"#545454"})})]})]})})}),(0,x.jsx)("div",{className:"tb_close_wrap",children:(0,x.jsx)("div",{className:"tb_close_btn","data-dismiss":"modal",onClick:o,children:(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:(0,x.jsx)("path",{d:"M19.457 18.8906C19.1055 19.2422 18.4609 19.2422 18.1094 18.8906L10.375 11.0977L2.58203 18.8906C2.23047 19.2422 1.58594 19.2422 1.23438 18.8906C0.882812 18.5391 0.882812 17.8945 1.23438 17.543L9.02734 9.75L1.23438 2.01562C0.882812 1.66406 0.882812 1.01953 1.23438 0.667969C1.58594 0.316406 2.23047 0.316406 2.58203 0.667969L10.375 8.46094L18.1094 0.667969C18.4609 0.316406 19.1055 0.316406 19.457 0.667969C19.8086 1.01953 19.8086 1.66406 19.457 2.01562L11.6641 9.75L19.457 17.543C19.8086 17.8945 19.8086 18.5391 19.457 18.8906Z",fill:"white"})})})})]}),1==e.popupSlideShow?(0,x.jsxs)("div",{className:"tb_navigation tb_nav_content",children:[(0,x.jsx)("div",{className:"tb_nav tb_prev_btn",onClick:r(c-1),children:(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"27",viewBox:"0 0 15 27",fill:"none",children:(0,x.jsx)("path",{d:"M13.7109 0.917964C13.9453 1.09375 14.0039 1.32812 14.0039 1.5625C14.0039 1.79687 13.9453 2.03125 13.7695 2.20703L3.10547 13.75L13.7109 25.3516C14.0625 25.7031 14.0625 26.2891 13.6523 26.6406C13.3008 26.9922 12.7148 26.9922 12.3633 26.582L1.11328 14.3945C0.761719 14.043 0.761719 13.5156 1.11328 13.1641L12.3633 0.976558C12.7734 0.566402 13.3594 0.566402 13.7109 0.917964Z",fill:"white"})})}),(0,x.jsx)("div",{className:"tb_nav tb_nxt_btn",id:"wq12",onClick:r(c+1),children:(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"27",viewBox:"0 0 14 27",fill:"none",children:(0,x.jsx)("path",{d:"M0.980469 26.6406C0.746094 26.4648 0.628906 26.2305 0.628906 25.9961C0.628906 25.7617 0.746094 25.5273 0.921875 25.3516L11.5273 13.8086L0.921875 2.20703C0.570312 1.85546 0.570312 1.26953 0.980469 0.917964C1.33203 0.566402 1.91797 0.566402 2.26953 0.976558L13.5195 13.1641C13.8711 13.5156 13.8711 14.043 13.5195 14.3945L2.26953 26.582C1.91797 26.9922 1.33203 26.9922 0.980469 26.6406Z",fill:"white"})})})]}):null]}),(0,x.jsx)("div",{className:"tb_modal_body",children:(0,x.jsxs)("div",{className:"tb_modal_body_wrap",children:[(0,x.jsxs)("div",{className:"tb_details_left tb_modal_network-".concat(d.networkId),children:[1==e.popupSlideShow?(0,x.jsxs)("div",{className:"tb_navigation tb_nav_img",children:[(0,x.jsx)("div",{className:"tb_nav tb_prev_btn",onClick:r(c-1),children:(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"27",viewBox:"0 0 15 27",fill:"none",children:(0,x.jsx)("path",{d:"M13.7109 0.917964C13.9453 1.09375 14.0039 1.32812 14.0039 1.5625C14.0039 1.79687 13.9453 2.03125 13.7695 2.20703L3.10547 13.75L13.7109 25.3516C14.0625 25.7031 14.0625 26.2891 13.6523 26.6406C13.3008 26.9922 12.7148 26.9922 12.3633 26.582L1.11328 14.3945C0.761719 14.043 0.761719 13.5156 1.11328 13.1641L12.3633 0.976558C12.7734 0.566402 13.3594 0.566402 13.7109 0.917964Z",fill:"white"})})}),(0,x.jsx)("div",{className:"tb_nav tb_nxt_btn ",onClick:r(c+1),children:(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"27",viewBox:"0 0 14 27",fill:"none",children:(0,x.jsx)("path",{d:"M0.980469 26.6406C0.746094 26.4648 0.628906 26.2305 0.628906 25.9961C0.628906 25.7617 0.746094 25.5273 0.921875 25.3516L11.5273 13.8086L0.921875 2.20703C0.570312 1.85546 0.570312 1.26953 0.980469 0.917964C1.33203 0.566402 1.91797 0.566402 2.26953 0.976558L13.5195 13.1641C13.8711 13.5156 13.8711 14.043 13.5195 14.3945L2.26953 26.582C1.91797 26.9922 1.33203 26.9922 0.980469 26.6406Z",fill:"white"})})})]}):null,d.file?d.imageList&&d.imageList.length>0?(0,x.jsx)(H,{wall:s,item:d,instaImg:g,ugc_products:v,isVideoError:p}):(0,x.jsx)(j,{wall:s,item:d,instaImg:g,ugc_products:v,isVideoError:p,custmClass:"tb_media_wrap_002",ImageUrl:d.filename,videoUrl:d.mediaUrl,active:!0}):""]}),(0,x.jsx)("div",{className:"tb_details_right",style:y,children:(0,x.jsx)("div",{className:"tb_content_wrap",children:(0,x.jsxs)("div",{className:"tb_post_detail_wrap",children:[m<991?(0,x.jsx)("div",{className:"tb_post_wrapper",children:(0,x.jsxs)("div",{className:"tb_modal_content_001",children:[(0,x.jsx)(O,{item:d,wall:s,personalization:e,currentIndex:c,ugc_products:v}),(0,x.jsx)(C,{item:d,personalization:e,isAuthorImagevalid:this.state.isAuthorImagevalid,onMediaUpdate:this.onMediaUpdate,wall:s,networkData:f}),(0,x.jsx)(D.Z,{children:(0,x.jsx)(z,{item:d,personalization:e,currentIndex:c,wall:s})})]})}):(0,x.jsx)(h.$B,{autoHide:!0,autoHeightMax:200,className:"tb_post_wrapper",style:{height:"calc(100% - 35px)"},renderTrackHorizontal:function(t){return(0,x.jsx)("div",(0,_.Z)((0,_.Z)({},t),{},{className:"track-horizontal",style:{display:"none"}}))},children:(0,x.jsxs)("div",{className:"tb_modal_content_001",children:[(0,x.jsx)(O,{item:d,wall:s,personalization:e,currentIndex:c,ugc_products:v}),(0,x.jsx)(C,{item:d,personalization:e,isAuthorImagevalid:this.state.isAuthorImagevalid,onMediaUpdate:this.onMediaUpdate,wall:s,networkData:f}),(0,x.jsx)(D.Z,{children:(0,x.jsx)(z,{item:d,personalization:e,currentIndex:c,wall:s})})]})}),s.ThemeRule.socialAction?"":(0,x.jsx)(T,{wall:s,item:d})]})})})]})}),s&&s.UserRule&&"1"==s.UserRule.taggBranding?(0,x.jsx)(F,{}):""]})})})]})}}]),o}(l.PureComponent),K=(0,l.lazy)((function(){return Promise.all([o.e(552),o.e(385)]).then(o.bind(o,73385))})),V=function(t){(0,s.Z)(o,t);var e=(0,a.Z)(o);function o(){var t;(0,r.Z)(this,o);for(var i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={isEnable:0,eventData:{},shareText:"SHARE",viewOnText:"View on",currentIndex:null,completeData:{},personalization:{},url:null,platform:null,imgData:[],type:""},t.closeCommercePopUP=function(e){(0,u.st)("remove"),t.setState({isEnable:0,currentIndex:null,type:""}),t.props.closePopUP();var o=document.getElementsByTagName("html");o&&o[0]&&(o[0].style.overflow="")},t.getCommercePopUPEvent=function(e){void 0!==e&&""!==e&&e.card&&("post"===e.type?t.setState({url:"",isEnable:1,eventData:e,currentIndex:e.index,completeData:e.idArray,viewOnText:e.viewOnText,shareText:e.shareText,windowParent:e,imgData:e.imgData,personalization:e.personalization,type:e.type},(function(){return t.CommercePopUPSlideWithArrowKey()})):"submit-pic"===e.type&&t.setState({isEnable:1,type:e.type,windowParent:e}))},t.featuredPopSliderChangeIndex=function(e){return function(o){var r=t.state.eventData;-1===e?t.setState({currentIndex:r.idArray.length-1}):t.setState({currentIndex:r.idArray.length===e?0:e})}},t.SliderWithKey=function(e){var o=t.state.eventData;-1===e?t.setState({currentIndex:o.idArray.length-1}):t.setState({currentIndex:o.idArray.length===e?0:e})},t.CommercePopUPSlideWithArrowKey=function(e){var o=t.state.personalization;if(o&&1===o.popupSlideShow){e=e||window.event;var r=(0,n.Z)(t);e&&e.keyCode&&void 0!==e.keyCode&&(37===e.keyCode?r.SliderWithKey(r.state.currentIndex-1):39===e.keyCode?r.SliderWithKey(r.state.currentIndex+1):27===e.keyCode&&t.closeCommercePopUP())}},t}return(0,i.Z)(o,[{key:"componentDidMount",value:function(){var t=this.props.data;this.getCommercePopUPEvent(t);var e=document.getElementsByTagName("html");e&&e[0]&&(e[0].style.overflow="hidden")}},{key:"render",value:function(){var t=this.state,e=t.viewOnText,o=t.isEnable,r=t.currentIndex,i=t.personalization,n=t.completeData,s=t.eventData,a=t.url,c=t.platform,p=t.imgData,u=t.type,_=null;"post"===u&&(_=-1===r?n[s.idArray.length-1]:n[r]);var h=this.props,m=h.wall,g=h.webFilters;return 1===o&&m&&"submit-pic"===u?(0,x.jsx)(l.Suspense,{fallback:null,children:(0,x.jsx)(K,{wall:m,wallId:m.Wall.id,onClosePopUp:this.closeCommercePopUP})}):1===o&&"post"===u?(0,x.jsx)(B,{webFilters:g,wall:m,item:_,onClosePopUp:this.closeCommercePopUP,currentIndex:r,personalization:i,viewOnText:e,slideWithArrowKeys:this.CommercePopUPSlideWithArrowKey,featuredPopSliderChangeIndex:this.featuredPopSliderChangeIndex,hostUrl:a,platform:c,imgData:p},(0,d.v4)()):null}}]),o}(l.PureComponent),G=(0,c.$j)((function(t){return{wall:t.appData.wall,webFilters:t.appData.webFilters}}),(function(t){return{closePopUP:function(e){return t((0,p.zj)(e))}}}))(V)},2956:function(t,e,o){"use strict";o(47313),o(46417)},29335:function(t,e,o){"use strict";o.d(e,{Z:function(){return s}});var r=o(1413),i=(o(47313),o(8354)),n=o(46417);function s(t){var e=t.ugc_products,o=t.UgcSetting,s=t.item,a=(t.isPopUp,{background:o?o.hotspot_color:null}),l={background:o?o.hotspot_color:null,color:o?o.hotspot_type_color:null},c=(0,i.v9)((function(t){return t.modalPop})),d=function(t){return function(e){2==parseInt(o.tab_target)?window.parent.location.href=t:window.open(t,"_blank")}};return(0,n.jsx)("div",{className:"ts__post_hotspot",children:e.map((function(t,e){var i,p,u=parseInt(t.hotspot_cordinates.top),_=parseInt(t.hotspot_cordinates.left),h=t.UgcProduct.product_discount>0?s.ugc_personalizaion.UgcSetting.discount_price_color:s.ugc_personalizaion.UgcSetting.original_price_color,m={top:u<"30"||u<"70"&&u>"30"?"18px":"auto",left:_<"30"?"18px":_<"70"&&_>"30"?"-25px":"auto",bottom:u<"30"||u<"70"&&u>"30"?"auto":"18px",right:_<"30"||_<"70"&&_>"30"?"auto":"15px"};return(0,n.jsx)("div",{className:"ts_st_post_hotspot_icon",style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},onClick:(i=function(){return console.log("Child Element!")},function(t){t&&t.preventDefault(),!p&&t&&t.stopPropagation();for(var e=arguments.length,o=new Array(e>1?e-1:0),r=1;r<e;r++)o[r-1]=arguments[r];i.apply(void 0,[t].concat(o))}),children:1==o.hotspot_type?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{onClick:d(t.UgcProduct.product_url),className:"ts_st_post_hotspot_icon_blob_outer ts_st_post_numberHotspot",children:c.showAll||!c.isShowPopUp||c.showHotspot&&c.index==e&&c.hotspotId==t.id?(0,n.jsxs)("div",{className:"ts_st_post_hotspot_icon_blob_custom",id:"ts_st_post_hotspot_icon_blob".concat(e),style:(0,r.Z)((0,r.Z)({},l),{},{textAlign:"center"}),children:[" ",e+1]}):null}),c.showAll||!c.isShowPopUp||c.showHotspot&&c.index==e&&c.hotspotId==t.id?(0,n.jsxs)("div",{className:"".concat(c.showAll?"ts_st_post_hotspot_icon_hover":"ts_st_post_hotspot_icon_hover_custom "," ").concat(c.isShowPopUp?"":"ts_st_post_hotspot_icon_hover"),style:m,children:[(0,n.jsx)("div",{className:"ts_st_post_hotspot_icon_hover_p_name",children:t.UgcProduct.product_title}),(0,n.jsxs)("div",{style:{color:h},className:"ts_st_post_hotspot_icon_hover_act_price ".concat(t.UgcProduct.product_discount>0?"ts_st_post_hotspot_icon_hover_act_prise_diabled":""),children:[t.UgcProduct.price_currency_symbol," "," ",Math.trunc(100*t.UgcProduct.product_price)/100]}),t.UgcProduct.product_discount>0?(0,n.jsxs)("div",{className:"ts_st_post_hotspot_icon_hover_dis_price",style:{color:s.ugc_personalizaion.UgcSetting.original_price_color},children:[t.UgcProduct.price_currency_symbol," "," ",Math.trunc(100*t.UgcProduct.product_discount)/100]}):""]}):null]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{onClick:d(t.UgcProduct.product_url),className:"ts_st_post_hotspot_icon_blob_outer",children:(0,n.jsx)("div",{className:"ts_st_post_hotspot_icon_blob",style:a,children:(0,n.jsx)("div",{})})}),(0,n.jsxs)("div",{className:"ts_st_post_hotspot_icon_hover ",style:m,children:[(0,n.jsx)("div",{className:"ts_st_post_hotspot_icon_hover_p_name",children:t.UgcProduct.product_title}),(0,n.jsxs)("div",{style:{color:h},className:"ts_st_post_hotspot_icon_hover_act_price ".concat(t.UgcProduct.product_discount>0?"ts_st_post_hotspot_icon_hover_act_prise_diabled":""),children:[t.UgcProduct.price_currency_symbol," "," ",Math.trunc(100*t.UgcProduct.product_price)/100]}),t.UgcProduct.product_discount>0?(0,n.jsxs)("div",{className:"ts_st_post_hotspot_icon_hover_dis_price",style:{color:s.ugc_personalizaion.UgcSetting.original_price_color},children:[t.UgcProduct.price_currency_symbol," "," ",Math.trunc(100*t.UgcProduct.product_discount)/100," "]}):""]})]})},e)}))})}},50247:function(){}}]);