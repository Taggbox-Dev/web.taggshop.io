"use strict";(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[604,519],{50519:function(t,e,a){a.r(e);var s=a(15671),o=a(43144),n=a(60136),i=a(29388),r=a(47313),l=a(8354),c=a(73763),d=a(97914),u=a(46417),h=function(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())},p=function(t){(0,n.Z)(a,t);var e=(0,i.Z)(a);function a(){var t;(0,s.Z)(this,a);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))).state={isOpen:!1,step:1,wall_id:null,name:null,email:null,upload_image:[],receiveMail:!1,tandc:!0,nameError:!1,emailError:!1},t.onShowCloseSubmitPicPopUp=function(e){var a=t.props,s=(a.appendData,a.wall);t.props.showPopUP({type:"submit-pic",card:{},personalization:s.Personalization,ThemeRule:s.ThemeRule,UserRule:s.UserRule,wall:s})},t.updateImageWithData=function(e){var a=t.state.upload_image;a&&a.length<5&&(a.push(e),t.setState({upload_image:a}))},t.onUpdateImageAddCaption=function(e){return function(a){var s=t.state.upload_image;s&&s.length>0&&s[e]&&(s[e].caption=a.target.value,s[e].review="",s[e].rating=0,t.setState({upload_image:s}))}},t.onUpdateImageAddReview=function(e){return function(a){var s=t.state.upload_image;s&&s.length>0&&s[e]&&(s[e].review=a.target.value,s[e].caption="",t.setState({upload_image:s}))}},t.onUpdateImageAddRatings=function(e,a){var s=t.state.upload_image;s&&s.length>0&&s[a]&&(s[a].caption="",s[a].rating=e,t.setState({upload_image:s}))},t.onUpdateStep=function(e){return function(a){t.setState({step:e})}},t.onTextName=function(e){t.setState({name:e.target.value,nameError:!1},(function(){null!=t.state.name&&0!=t.state.name.length||t.setState({nameError:!0})}))},t.onTextEmail=function(e){t.setState({email:e.target.value,emailError:!1},(function(){null!=t.state.email&&0!=t.state.email.length&&h(t.state.email)&&!t.state.email.includes("mailinator")||t.setState({emailError:!0})}))},t.onSubmitData=function(e){var a=t.state,s=a.name,o=a.email,n=a.upload_image,i=a.tandc,r=a.receiveMail,l=t.props.wallId;i&&s&&s.length>0&&o&&o.length>0&&h(o)&&!o.includes("mailinator")&&n&&n.length>0&&i?(0,c.uM)({wall_id:l,name:s,email:o,upload_image:n,receive_mail:r}).then((function(e){t.setState({step:3})})).catch((function(t){console.error(t)})):(null!=t.state.name&&0!=t.state.name.length||t.setState({nameError:!0}),null!=t.state.email&&0!=t.state.email.length&&h(t.state.email)&&!o.includes("mailinator")||t.setState({emailError:!0}))},t.onUpdatereceiveMail=function(e){var a=t.state.receiveMail;t.setState({receiveMail:!a})},t.onUpdatetandc=function(e){var a=t.state.tandc;t.setState({tandc:!a})},t.removeProductImage=function(e){return function(a){var s=t.state.upload_image;s&&s.length>0&&s.splice(e,1),t.setState({upload_image:s})}},t}return(0,o.Z)(a,[{key:"render",value:function(){var t=this.state,e=(t.isOpen,t.upload_image,t.step,t.name,t.email,t.receiveMail,t.tandc,t.nameError,t.emailError,this.props.wall),a=e.UgcSettings,s=a.onsite_status?{backgroundColor:a.onsite_btn_color,borderColor:a.onsite_btn_color,color:a.onsite_btn_txt_color}:"",o={fontSize:e.UgcSettings.btn_fontSize+"px",fontFamily:e.UgcSettings.onsite_css_font_btn};return(0,u.jsx)(u.Fragment,{children:0!==a.onsite_status?(0,u.jsx)("div",{id:"tb_post_submit_container_button",className:"50"!=e.Personalization.commerceTheme?"tb_post_submit_container":"ts_gst__post_submit_container_button",children:"50"!=e.Personalization.commerceTheme?(0,u.jsx)("div",{className:"btn-scan",children:(0,u.jsxs)("div",{style:s,className:"tb_post_submit_btn",onClick:this.onShowCloseSubmitPicPopUp,children:[1==e.UgcSettings.onsite_qr_code_status?(0,u.jsxs)(u.Fragment,{children:[" ",(0,u.jsx)("div",{className:"qr-image",children:(0,u.jsx)(d.Z,{level:"L",size:60,value:e.UgcSettings.onsite_popup_url})})]}):null,a.onsite_qr_code_btn_text?(0,u.jsxs)(u.Fragment,{children:[1==e.UgcSettings.onsite_qr_code_status?(0,u.jsx)("div",{className:"ts__qr_separator",children:(0,u.jsx)("div",{})}):"",(0,u.jsx)("div",{className:"ts_qr-text  tb-cTSfont-".concat(e.UgcSettings.onsite_font_varient_btn),style:o,children:(0,u.jsx)("div",{className:"ts_qr-text_wrap tb-cTSfont-".concat(e.UgcSettings.onsite_font_varient_btn),style:o,children:a.onsite_qr_code_status&&a.onsite_status||a.onsite_qr_code_status?a.onsite_qr_code_btn_text:a.onsite_status?a.onsite_btn_txt:"Submit a Post"})})," "]}):""]})}):(0,u.jsx)("div",{className:"ts_gst_btn-scan",style:s,children:(0,u.jsxs)("div",{className:"ts_gst_post_submit_btn",onClick:this.onShowCloseSubmitPicPopUp,children:[(0,u.jsxs)("div",{className:"ts_gst_qr-image",children:["1"==e.UgcSettings.onsite_qr_code_status?(0,u.jsx)("div",{style:{backgroundColor:"white",padding:"4.5px",width:"70px",height:"70px",marginLeft:"auto",marginRight:"auto"},children:(0,u.jsx)(d.Z,{level:"L",size:60,value:e.UgcSettings.onsite_popup_url})}):"",(0,u.jsx)("div",{className:"ts_gst_qr-text  tb-cTSfont-".concat(e.UgcSettings.font_varient),style:o,children:(0,u.jsx)("div",{className:"ts_gst_qr-text_wrap ".concat("1"==e.UgcSettings.onsite_qr_code_status?"wt_qrcode":"wo_qrcode"),children:a.onsite_qr_code_status&&a.onsite_status||a.onsite_qr_code_status?a.onsite_qr_code_btn_text:a.onsite_status?a.onsite_btn_txt:"Submit a Post"})})]}),(0,u.jsx)("div",{className:"ts_gst_qr-image_mobile",children:"Add Your Photo"})]})})}):""})}}]),a}(r.Component);e.default=(0,l.$j)((function(t){return{wallId:t.appData.wallID}}),(function(t){return{showPopUP:function(e){return t((0,c.Bm)(e))}}}))(p)},42417:function(t,e,a){a.d(e,{Z:function(){return c}});var s=a(15671),o=a(43144),n=a(60136),i=a(29388),r=a(47313),l=(a(89800),a(46417)),c=function(t){(0,n.Z)(a,t);var e=(0,i.Z)(a);function a(){return(0,s.Z)(this,a),e.apply(this,arguments)}return(0,o.Z)(a,[{key:"render",value:function(){var t=this.props,e=t.item,a=t.wall,s=t.cardWidth,o=!!(e.ugc_products&&e.ugc_products.length>0),n=(3===e.type||e.type,a&&a.User&&31724!==a.User.id),i=(a&&a.ThemeRule&&a.ThemeRule.fontSize&&a.ThemeRule.fontSize,!!(e.imageList&&e.imageList.length>0)),r=!(!i||!o),c=55==a.Personalization.commerceTheme?"tb_cs_video_multiImage":"",d=s<=700&&s>500?{fontSize:"16px"}:s<=500&&s>350?{fontSize:"14px"}:s<=350&&s>250?{fontSize:"12px"}:s<=250&&s>=150?{fontSize:"11px"}:s<150&&s>100?{fontSize:"10px"}:s<=100&&s>50?{fontSize:"8px"}:{};return(0,l.jsxs)("div",{className:"ts_post_iocn",children:[(0,l.jsxs)("div",{className:"ts_social-icon ".concat(c),style:{color:"rgb(112, 112, 112)"},children:[o,o&&n&&55!==a.Personalization.commerceTheme?(0,l.jsx)("div",{className:"ts_shop_icon",style:d,children:31665===a.User.id?(0,l.jsx)("svg",{fill:"#ffffff",height:"22",viewBox:"0 0 48 48",width:"22",children:(0,l.jsx)("path",{d:"M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"})}):(0,l.jsx)("div",{className:"tb__icon tb-shopping-bag",children:(0,l.jsx)("div",{})})}):"",!r&&i&&55!==a.Personalization.commerceTheme?(0,l.jsx)("div",{className:"tb__icon tb-multiple tb_cs_carousal_icon",style:d,children:" "}):"",i&&55==a.Personalization.commerceTheme?(0,l.jsxs)("div",{className:"ts_cs_multiple_option",children:[" ",(0,l.jsx)("div",{className:"tb__icon tb-multiple",style:d,children:" "})]}):""]}),r&&55!==a.Personalization.commerceTheme?(0,l.jsx)("div",{className:"tb__icon tb-multiple tb_cs_carousal_icon_bottom",style:d,children:" "}):""]})}}]),a}(r.PureComponent)},7284:function(t,e,a){a.d(e,{Z:function(){return d}});var s=a(15671),o=a(43144),n=a(60136),i=a(29388),r=a(47313),l=a(73763),c=a(46417),d=function(t){(0,n.Z)(a,t);var e=(0,i.Z)(a);function a(){var t;(0,s.Z)(this,a);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))).onClickCtAButton=function(e){var a=t.props,s=a.item,o=a.wall;e&&(0,l.S5)({type:1,action:2,wall:o.Wall.id,feed:s.feedId,post:s.referenceId})},t}return(0,o.Z)(a,[{key:"render",value:function(){var t=this.props,e=t.shoppingText,a=t.ctaClass,s=t.styleCta;return(0,c.jsxs)("div",{className:a,style:s,children:[" ",e," "]})}}]),a}(r.PureComponent)},29335:function(t,e,a){a.d(e,{Z:function(){return i}});var s=a(1413),o=(a(47313),a(8354)),n=a(46417);function i(t){var e=t.ugc_products,a=t.UgcSetting,i=t.item,r=(t.isPopUp,{background:a?a.hotspot_color:null}),l={background:a?a.hotspot_color:null,color:a?a.hotspot_type_color:null},c=(0,o.v9)((function(t){return t.modalPop})),d=function(t){return function(e){2==parseInt(a.tab_target)?window.parent.location.href=t:window.open(t,"_blank")}};return(0,n.jsx)("div",{className:"ts__post_hotspot",children:e.map((function(t,e){var o=parseInt(t.hotspot_cordinates.top),u=parseInt(t.hotspot_cordinates.left),h=t.UgcProduct.product_discount>0?i.ugc_personalizaion.UgcSetting.discount_price_color:i.ugc_personalizaion.UgcSetting.original_price_color,p={top:o<"30"||o<"70"&&o>"30"?"18px":"auto",left:u<"30"?"18px":u<"70"&&u>"30"?"-25px":"auto",bottom:o<"30"||o<"70"&&o>"30"?"auto":"18px",right:u<"30"||u<"70"&&u>"30"?"auto":"15px"};return(0,n.jsx)("div",{className:"ts_st_post_hotspot_icon",style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},children:1==a.hotspot_type?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{onClick:d(t.UgcProduct.product_url),className:"ts_st_post_hotspot_icon_blob_outer ts_st_post_numberHotspot",children:c.showAll||!c.isShowPopUp||c.showHotspot&&c.index==e&&c.hotspotId==t.id?(0,n.jsxs)("div",{className:"ts_st_post_hotspot_icon_blob_custom",id:"ts_st_post_hotspot_icon_blob".concat(e),style:(0,s.Z)((0,s.Z)({},l),{},{textAlign:"center"}),children:[" ",e+1]}):null}),c.showAll||!c.isShowPopUp||c.showHotspot&&c.index==e&&c.hotspotId==t.id?(0,n.jsxs)("div",{className:"".concat(c.showAll?"ts_st_post_hotspot_icon_hover":"ts_st_post_hotspot_icon_hover_custom "," ").concat(c.isShowPopUp?"":"ts_st_post_hotspot_icon_hover"),style:p,children:[(0,n.jsx)("div",{className:"ts_st_post_hotspot_icon_hover_p_name",children:t.UgcProduct.product_title}),(0,n.jsxs)("div",{style:{color:h},className:"ts_st_post_hotspot_icon_hover_act_price ".concat(t.UgcProduct.product_discount>0?"ts_st_post_hotspot_icon_hover_act_prise_diabled":""),children:[t.UgcProduct.price_currency_symbol," "," ",t.UgcProduct.product_price]}),t.UgcProduct.product_discount>0?(0,n.jsxs)("div",{className:"ts_st_post_hotspot_icon_hover_dis_price",style:{color:i.ugc_personalizaion.UgcSetting.original_price_color},children:[t.UgcProduct.price_currency_symbol," "," ",t.UgcProduct.product_discount]}):""]}):null]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{onClick:d(t.UgcProduct.product_url),className:"ts_st_post_hotspot_icon_blob_outer",children:(0,n.jsx)("div",{className:"ts_st_post_hotspot_icon_blob",style:r,children:(0,n.jsx)("div",{})})}),(0,n.jsxs)("div",{className:"ts_st_post_hotspot_icon_hover ",style:p,children:[(0,n.jsx)("div",{className:"ts_st_post_hotspot_icon_hover_p_name",children:t.UgcProduct.product_title}),(0,n.jsxs)("div",{style:{color:h},className:"ts_st_post_hotspot_icon_hover_act_price ".concat(t.UgcProduct.product_discount>0?"ts_st_post_hotspot_icon_hover_act_prise_diabled":""),children:[t.UgcProduct.price_currency_symbol," "," ",t.UgcProduct.product_price]}),t.UgcProduct.product_discount>0?(0,n.jsxs)("div",{className:"ts_st_post_hotspot_icon_hover_dis_price",style:{color:i.ugc_personalizaion.UgcSetting.original_price_color},children:[t.UgcProduct.price_currency_symbol," "," ",t.UgcProduct.product_discount," "]}):""]})]})},e)}))})}},24387:function(t,e,a){a.d(e,{Z:function(){return d}});var s=a(15671),o=a(43144),n=a(60136),i=a(29388),r=a(47313),l=a(73763),c=a(46417),d=function(t){(0,n.Z)(a,t);var e=(0,i.Z)(a);function a(){var t;(0,s.Z)(this,a);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))).onSharePost=function(e){var a=t.props,s=a.item,o=a.wall;e&&(0,l.S5)({type:2,action:2,wall:o.Wall.id,feed:s.feedId,post:s.referenceId})},t}return(0,o.Z)(a,[{key:"render",value:function(){var t=this.props,e=t.item,a=t.wall,s=t.network,o=505==a.ThemeRule.iconType?s.color:a.ThemeRule.iconColor;return(0,c.jsx)("div",{className:"ts__card_socialAction",style:{color:"rgb(255, 255, 255)"},children:1==e.networkId?(0,c.jsxs)(r.Fragment,{children:[(0,c.jsx)("a",{target:"_blank",onClick:this.onSharePost,href:"https://twitter.com/intent/tweet?in_reply_to=".concat(atob(e.postId)),title:"View",children:(0,c.jsx)("div",{className:"tb__icon tb-share-square",style:{color:o},children:(0,c.jsx)("div",{})})}),(0,c.jsxs)("a",{href:"https://twitter.com/intent/retweet?tweet_id=".concat(atob(e.postId)),title:"Comment",target:"_blank",className:"ts_icon_count_tagg",children:[(0,c.jsx)("div",{className:" tb__icon",style:{color:o},children:(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:o,viewBox:"0 0 640 512",children:(0,c.jsx)("path",{d:"M614.2 334.8C610.5 325.8 601.7 319.1 592 319.1H544V176C544 131.9 508.1 96 464 96h-128c-17.67 0-32 14.31-32 32s14.33 32 32 32h128C472.8 160 480 167.2 480 176v143.1h-48c-9.703 0-18.45 5.844-22.17 14.82s-1.656 19.29 5.203 26.16l80 80.02C499.7 445.7 505.9 448 512 448s12.28-2.344 16.97-7.031l80-80.02C615.8 354.1 617.9 343.8 614.2 334.8zM304 352h-128C167.2 352 160 344.8 160 336V192h48c9.703 0 18.45-5.844 22.17-14.82s1.656-19.29-5.203-26.16l-80-80.02C140.3 66.34 134.1 64 128 64S115.7 66.34 111 71.03l-80 80.02C24.17 157.9 22.11 168.2 25.83 177.2S38.3 192 48 192H96V336C96 380.1 131.9 416 176 416h128c17.67 0 32-14.31 32-32S321.7 352 304 352z"})})}),(0,c.jsx)("div",{style:{color:o},children:0!=e.comment_count?e.comment_count:""})]}),(0,c.jsxs)("a",{href:"https://twitter.com/intent/favorite?tweet_id=".concat(atob(e.postId)),title:"Like",target:"_blank",className:"ts_icon_count_tagg",children:[(0,c.jsx)("div",{className:"tb__icon tb-heart",style:{color:o},children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{style:{color:o},children:0!=e.like_count?e.like_count:""})]})]}):2==e.networkId||3==e.networkId||7==e.networkId||8==e.networkId||10==e.networkId||18==e.networkId?(0,c.jsxs)(r.Fragment,{children:[(0,c.jsx)("a",{href:e.link,title:"Like",target:"_blank",className:"ts_icon_count_tagg",children:(0,c.jsx)("div",{className:"tb__icon tb-thumbs-up",style:{color:o},children:(0,c.jsx)("div",{className:"",children:10==e.networkId&&e.feedId>73590||18==e.networkId?e.like_count:null})})}),(0,c.jsx)("a",{href:e.link,title:"Comment",target:"_blank",className:"ts_icon_count_tagg",children:(0,c.jsxs)("div",{className:"tb__icon tb-comment-dots",style:{color:o},children:[(0,c.jsx)("div",{}),(0,c.jsx)("div",{children:10==e.networkId&&e.feedId>73590||18==e.networkId?e.comment_count:null})]})})]}):4==e.networkId?(0,c.jsx)("a",{href:e.link,className:"fa fa-comment-o tooltips",title:"Comment",target:"_blank",children:(0,c.jsx)("div",{})}):null})}}]),a}(r.PureComponent)},12268:function(t,e,a){var s=a(4942),o=a(15671),n=a(43144),i=a(60136),r=a(29388),l=a(47313),c=a(73763),d=a(17739),u=a(46417),h=function(t){(0,i.Z)(a,t);var e=(0,r.Z)(a);function a(){var t;(0,o.Z)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))).onShareFacebook=function(e){var a=t.props,s=a.item,o=(a.wall,"https://www.facebook.com/sharer/sharer.php?display=popup&u="+s.share.facebook);window.open(o,"sharer","toolbar=0,status=0,resizable=1,width=626,height=436")},t.onTwitterClick=function(e){var a=t.props,s=a.item,o=a.wall;e&&(0,c.S5)({type:2,action:2,wall:o.Wall.id,feed:s.feedId,post:s.referenceId})},t.linkedinShareCount=function(e){var a=t.props,s=a.item,o=a.wall;(0,c.S5)({type:2,action:2,wall:o.Wall.id,feed:s.feedId,post:s.referenceId})},t}return(0,n.Z)(a,[{key:"render",value:function(){var t,e=this.props,a=e.network,o=e.item;e.wall;return(0,u.jsx)(u.Fragment,{children:0!==o.share.status&&7!==a.id?(0,u.jsxs)("div",{className:"ts__share-icon_wrapper",style:{fontSize:40,color:"rgb(112, 112, 112)"},children:[(0,u.jsx)("a",{herf:"",target:"_blank",children:(0,u.jsx)("div",{className:"tb__icon tb-share-alt",children:(0,u.jsx)("div",{})})}),(0,u.jsx)("a",{onClick:this.onShareFacebook,children:(0,u.jsx)("div",{className:"tb__icon tb-facebook-f",children:(0,u.jsx)("div",{})})}),(0,u.jsx)("a",{onClick:this.onTwitterClick,href:o.share.twitter,target:"_blank",children:(0,u.jsx)("div",{className:"tb__icon tb-twitter",children:(0,u.jsx)("div",{children:(0,u.jsx)(d.yi,{color:"#0F1419"})})})}),(0,u.jsx)("a",(t={onClick:this.linkedinShareCount},(0,s.Z)(t,"onClick",this.linkedinShareCount),(0,s.Z)(t,"href",o.share.linkedin),(0,s.Z)(t,"target","_blank"),(0,s.Z)(t,"children",(0,u.jsx)("div",{className:"tb__icon tb-linkedin",children:(0,u.jsx)("div",{})})),t))]}):null})}}]),a}(l.Component);e.Z=h},85604:function(t,e,a){a.r(e),a.d(e,{default:function(){return Z}});var s=a(1413),o=a(15861),n=a(15671),i=a(43144),r=a(60136),l=a(29388),c=a(87757),d=a.n(c),u=a(47313),h=(a(16231),a(24387)),p=a(7284),_=a(98501),m=a(17739),g=a(46417),v=function(t){(0,r.Z)(a,t);var e=(0,l.Z)(a);function a(){return(0,n.Z)(this,a),e.apply(this,arguments)}return(0,i.Z)(a,[{key:"render",value:function(){var t=this.props,e=t.item,a=t.wall,o=t.network,n=t.cardWidth,i=!!(e.ugc_products&&e.ugc_products.length>0&&0===e.hotspot),r=505==a.ThemeRule.iconType?o.color:a.ThemeRule.iconColor,l=(""==a.ThemeRule.postHover||a.ThemeRule.postHover,{fontFamily:a.ThemeRule.css_font}),c=o.icon.replace("fa-",""),d=n<=700&&n>500?{fontSize:"26px"}:n<=500&&n>200?{fontSize:"22px"}:n<=200?{fontSize:"18px"}:{};return(0,g.jsxs)("div",{className:"ts_gs_social_warpper",children:[(0,g.jsxs)("div",{className:"ts_gs_social_wrappeer_in",children:[(0,g.jsx)("div",{className:"ts_gs_social_",style:{color:"rgb(255,255,255)"},children:null!=e.rating&&0!=e.rating?(0,g.jsx)("div",{className:"ts_gs_social_rating",style:{backgroundImage:"url(".concat(_.KA).concat(e.networkId,"/").concat(e.rating,".png)")},children:(0,g.jsx)("div",{})}):(0,g.jsx)("div",{className:"tb__icon tb-".concat(c),style:(0,s.Z)({color:r},d),children:(0,g.jsxs)("div",{children:["twitter"==c?(0,g.jsx)(m.yi,{color:r}):""," "]})})}),(0,g.jsx)("div",{className:"ts_gs_btn_wrapper",children:i&&(0,g.jsx)(p.Z,{shoppingText:a.ThemeRule.shoppingText,ctaClass:"ts_gs_button",styleCta:l})})]}),a.ThemeRule.socialAction?(0,g.jsx)(h.Z,{item:e,wall:a,network:o}):""]})}}]),a}(u.PureComponent),f=a(29335),x=function(t){(0,r.Z)(a,t);var e=(0,l.Z)(a);function a(){return(0,n.Z)(this,a),e.apply(this,arguments)}return(0,i.Z)(a,[{key:"componentDidMount",value:function(){(0,m.ll)()}},{key:"render",value:function(){var t=this.props,e=t.ImageClass,a=t.ImageUrl,s=t.item,o=t.ugc_products,n=t.width,i=t.height,r=t.wall,l=t.handleAllImageError,c={backgroundImage:"url(".concat(a,")")},d={height:s.hotspot?n>i?"auto":"100%":"auto",width:s.hotspot?n>i?"100%":"".concat(n,"%"):"100%"};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{className:"ts_gs_image_blur_bg",style:c,children:(0,g.jsx)("div",{})}),(0,g.jsxs)("div",{className:e,style:d,children:[(0,g.jsx)("img",{loading:"lazy","data-src":a,"data-id":s.id,src:a,"data-is-optmized":"0",style:{height:"100%",width:"100%"},"data-link":s.link,"data-load":"0","data-wall-id":r.Wall.id,"data-item-id":s.id,onLoad:this.onLoadImage,"data-filter-id":s.filterId,"data-stories":s.stories,"data-network":s.networkId,height:i,width:n,className:"imgID".concat(s.id),onError:function(t){"28"!==s.networkId&&l(t)},alt:"posts"}),s.hotspot?(0,g.jsx)(f.Z,{ugc_products:o,UgcSetting:s.ugc_personalizaion.UgcSetting,item:s}):null]})]})}}]),a}(u.PureComponent),w=a(85942),b=function(t){(0,r.Z)(a,t);var e=(0,l.Z)(a);function a(t){var s;return(0,n.Z)(this,a),(s=e.call(this,t)).myRef=u.createRef(),s.state={height:"100",width:"100"},s}return(0,i.Z)(a,[{key:"componentWillMount",value:function(){var t=this,e=this.props.item;e.mediaHeight&&""!=e.mediaWidth?this.setState({height:100*e.mediaHeight/e.mediaWidth,width:100*e.mediaWidth/e.mediaHeight}):(0,w.Z)(e.postFileNew).then((function(e){var a=e.width,s=e.height;return t.setState({height:100*s/a,width:100*a/s})})).catch((function(e){return t.setState({height:100,width:100,error:e})}))}},{key:"render",value:function(){var t=this.props,e=t.item,a=t.wall,s=t.handleAllImageError,o=this.state,n=o.width,i=o.height,r=(0,m.HS)(e.ugc_products);return(0,g.jsx)("div",{className:"ts_gs_media_wrap",children:n?(0,g.jsx)(x,{handleAllImageError:s,ImageClass:"ts_gs_image",height:i,width:n,ImageUrl:e.postFileNew,ugc_products:r,item:e,wall:a}):""})}}]),a}(u.PureComponent),j=a(42417),y=(a(12268),a(8354)),k=a(73763),S=function(t){(0,r.Z)(a,t);var e=(0,l.Z)(a);function a(t){var s;return(0,n.Z)(this,a),(s=e.call(this,t)).onLoadPopup=function(t){var e=s.props,a=e.itemData,o=e.wall,n=(e.appendData,e.postData),i=e.itemId,r=e.languageSetting,l=e.completeDataObject,c=e.wallId,d=e.webFilters,u=n.map((function(t){return l[t]})),h=u.filter((function(t){return!String(t.id).includes("free_add_")})),p=(0,m.E6)(h,a.id,n.indexOf(i));1===o.Personalization.postFeatured&&((0,m.st)("add"),s.props.showPopUP({type:"post",card:a,idArray:h,index:p,viewOnText:r.viewOnText,shareText:r.shareText,personalization:o.Personalization,ThemeRule:o.ThemeRule,webFilters:d,UserRule:o.UserRule,wall:o})),(0,k.S5)({action:2,wall:c,feed:a.feedId,post:a.referenceId})},s.myRef_gallery=u.createRef(),s.state={cardWidth:null},s}return(0,i.Z)(a,[{key:"componentDidMount",value:function(){var t=this;(0,m.kA)(this.props.itemData.id)&&(this.onLoadPopup(),setTimeout((function(){var e=document.querySelector(".ts_p_".concat(t.props.itemData.id));e&&e.scrollIntoView(!0),t.myRef_gallery&&t.myRef_gallery.current&&t.setState({cardWidth:t.myRef_gallery.current.clientWidth})}),500))}},{key:"componentDidUpdate",value:function(){var t=this;setTimeout((function(){t.myRef_gallery&&t.myRef_gallery.current&&t.setState({cardWidth:t.myRef_gallery.current.clientWidth})}),1e3)}},{key:"render",value:function(){var t=this.props,e=t.itemData,a=(t.itemId,t.wall),s=t.webFilters,o=(t.adjustWidth,t.cardWidth,t.fullWidth,t.handleAllImageError),n=(e.highlight,a.ThemeRule.shareOption,a.ThemeRule.hideContent,(0,m.EH)(e.networkId,s)),i={backgroundColor:a.ThemeRule.cardColor,borderRadius:a.ThemeRule.roundEdge},r=!!(e.ugc_products&&e.ugc_products.length>0&&0===e.hotspot),l=3===e.type||5===e.type,c=!!(e.imageList&&e.imageList.length>0);return(0,g.jsx)("div",{className:"ts_gs_post_wrapper ".concat(e&&e.id?"ts_p_"+e.id:""),ref:this.myRef_gallery,style:{width:"100%",padding:3},children:(0,g.jsxs)("div",{className:"ts_gs_post_in ".concat(e.hotspot?"":"ts_gs_post_in_hostpot_hover"),onClick:e.isPost?null:this.onLoadPopup,style:i,children:[r||l||c?(0,g.jsx)(j.Z,{item:e,cardWidth:this.state.cardWidth,wall:a}):"",(0,g.jsx)(b,{handleAllImageError:o,item:e,wall:a}),e.hotspot?null:(0,g.jsx)(v,{cardWidth:this.state.cardWidth,wall:a,item:e,network:n})]})})}}]),a}(u.PureComponent),I=(0,y.$j)((function(t){return{wallId:t.appData.wallID}}),(function(t){return{showPopUP:function(e){return t((0,k.Bm)(e))}}}))(S),N=a(50519),D=function(t){(0,r.Z)(a,t);var e=(0,l.Z)(a);function a(){return(0,n.Z)(this,a),e.apply(this,arguments)}return(0,i.Z)(a,[{key:"render",value:function(){var t=this,e=this.props,a=e.dataArr,o=e.indexNo,n=e.completeDataObject,i=e.wall,r=e.onSiteUploadShow,l=e.cardWidth,c=e.largeDiv,d=e.smallDiv,u=e.handleAllImageError,h=i.ThemeRule.highlightPosition,p=o<3?"1":"0",_={width:c+"%",float:"0"==p?"right"==h?"right":"left":"right"==h?"left":"right"},m={width:d+"%",float:"right"==h?"left":"right"};return(0,g.jsx)("div",{className:"ts_gs_post_row",children:a&&a.length>0?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:"ts_gs_post_large",style:_,children:[" ",(0,g.jsx)(I,(0,s.Z)({itemData:n[a[0]],cardWidth:l,itemId:n[a[0]].id,fullWidth:!0},this.props))," "]}),(0,g.jsxs)("div",{className:"ts_gs_post_small",style:m,children:[r?(0,g.jsx)(N.default,{isGalleryTheme:!1,wall:i}):"",a&&a.length>0?a.map((function(e,a){var o=n[e];return 0==a?"":(0,g.jsx)(I,(0,s.Z)({itemData:o,handleAllImageError:u,cardWidth:l,fullWidth:!1,itemId:o.id},t.props),"post_id_".concat(o.id))})):null," "]})]}):""})}}]),a}(u.PureComponent),P=(a(1598),a(11774)),C=function(t){(0,r.Z)(a,t);var e=(0,l.Z)(a);function a(){var t;(0,n.Z)(this,a);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).allImageQueue=[],t.state={cardWidth:null,largeDiv:null,smallDiv:null,allFirstImage:!1},t.requestData=function(){var e=t.props,a=e.wall,s=(e.postData,e.appendData),o=e.hasMoreData,n=e.loaderData,i=a.ThemeRule.numberOfPosts,r=Math.floor(Date.now()/1e3);o&&!n.isShowMoreLoading&&t.props.getDataNextSteps(a.Wall.id,r,i,s.networkID,s.after,s.heightEvent)},t.onCollageDataFormation=function(e){var a=e.wall,s=(e.postData,document.querySelector(".taggshopContainer")?document.querySelector(".taggshopContainer").clientWidth:""),o=a.ThemeRule.numberOfCoumn,n=(0,m.nf)(s,o,a.Personalization.commerceTheme),i=n.cardWidth,r=n.largeDiv,l=n.smallDiv;t.setState({cardWidth:i,largeDiv:r,smallDiv:l})},t.onUpdateData=function(){setTimeout((function(){return t.requestData()}),1e3)},t.handleAllImageError=function(e){try{var a=e.target.getAttribute("data-item-id");t.allImageQueue.push({src:a,e:e}),t.state.allFirstImage||t.processAllImageQueue()}catch(s){}},t.processAllImageQueue=(0,o.Z)(d().mark((function e(){var a,s,o;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.allImageQueue.length&&(t.setState({allFirstImage:!0}),a=t.allImageQueue[0],s=a.src,o=a.e,s&&(0,m.bO)(o,t.nextProcessAllImageQueue));case 1:case"end":return e.stop()}}),e)}))),t.nextProcessAllImageQueue=function(){try{t.allImageQueue.shift(),t.processAllImageQueue()}catch(e){}},t}return(0,i.Z)(a,[{key:"componentDidMount",value:function(){var t=this;this.onCollageDataFormation(this.props);var e=this.props,a=e.wall,s=(e.postData,e.appendData);document.getElementById("scrlBarComanW");s&&a.Personalization.autoScrollStatus&&window.addEventListener("scroll",(function(e){var a=document.getElementById("scrlBarComanW"),s=(document.body.scrollHeight,window.innerHeight+window.scrollY);a.scrollHeight-10<s&&setTimeout((function(){return t.requestData()}),1e3)}),{passive:!0})}},{key:"render",value:function(){var t=this,e=this.state,a=(e.data,e.cardWidth),o=(e.largeDiv,e.smallDiv,this.props),n=(o.postData,o.completeDataObject,o.adjustWidth,o.wall),i=(o.webFilters,o.languageSetting,o.newPostData),r=o.loaderData,l=o.hasMoreData,c=n.UserRule.on_site_upload&&(!window.isEditor||(0,m.G)()),d={type:"slide",autoplay:1==n.ThemeRule.slidePost,interval:1==n.ThemeRule.slidePost?1e3*parseInt(n.ThemeRule.slideDuration):5e3,speed:1300,perPage:2.5,perMove:2,focus:0,waitForTransition:!1,updateOnMove:!0,breakpoints:{480:{perPage:1.5,perMove:1}}};return(0,g.jsx)("div",{className:"tb_gst_post_container",id:"ts_theme_container",children:(0,g.jsxs)(P.tv,{hasTrack:!1,options:d,children:[(0,g.jsx)(P.Gj,{children:i&&i.length>0?i.map((function(e,o){var n=0==o&&c&&2==e.length;return 3==e.length||n?(0,g.jsx)(P.jw,{children:(0,g.jsx)(D,(0,s.Z)((0,s.Z)({dataArr:e,handleAllImageError:t.handleAllImageError,onSiteUploadShow:n,indexNo:o<6?o:"0"},t.props),{},{cardWidth:a,largeDiv:66.66,smallDiv:33.33}),"post_id_".concat(o))},"splide_Id".concat(o)):""})):null}),(0,g.jsxs)("div",{className:"splide__arrows",children:[(0,g.jsx)("div",{className:" splide__arrow--next tb_gs_slider_next_arrow-next",onClick:this.onUpdateData,children:l&&r.isShowMoreLoading?(0,g.jsxs)("svg",{width:"26px",height:"26px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:"uil-ring-alt",children:[(0,g.jsx)("rect",{x:"0",y:"0",width:"100",height:"100",fill:"none",className:"bk"}),(0,g.jsx)("circle",{cx:"50",cy:"50",r:"40",stroke:"#afafb7",fill:"none",strokeWidth:"10",strokeLinecap:"round"}),(0,g.jsxs)("circle",{cx:"50",cy:"50",r:"40",stroke:"#000000",fill:"none",strokeWidth:"6",strokeLinecap:"round",children:[(0,g.jsx)("animate",{attributeName:"stroke-dashoffset",dur:"2s",repeatCount:"indefinite",from:"0",to:"502"}),(0,g.jsx)("animate",{attributeName:"stroke-dasharray",dur:"2s",repeatCount:"indefinite",values:"150.6 100.4;1 250;150.6 100.4"})]})]}):(0,g.jsx)("div",{className:"splideArrow_inner",children:(0,g.jsx)("div",{className:"tb__icon tb-chevron-right",children:(0,g.jsx)("div",{})})})}),(0,g.jsx)("div",{className:" splide__arrow--prev tb_gs_slider_pre_arrow-prev",children:(0,g.jsx)("div",{className:"splideArrow_inner",children:(0,g.jsx)("div",{className:"tb__icon tb-chevron-left",children:(0,g.jsx)("div",{})})})})]})]})})}}]),a}(u.PureComponent),Z=(0,y.$j)((function(t){var e=t.appData;return{appData:e,loaderData:t.loaderData,newPostData:e.newPostData,appendData:e.postData.appendData,hasMoreData:!e.postData.hasMoreData[0]||0!=e.postData.hasMoreData[0].hasMoreData&&(!e.postData.hasMoreData[e.postData.appendData.networkID]||e.postData.hasMoreData[e.postData.appendData.networkID].hasMoreData)}}),(function(t){return{getDataNextSteps:function(e,a,s,o,n,i,r){return t((0,k.Sx)(e,a,s,o,n,i,r))},showPopUP:function(e){return t((0,k.Bm)(e))}}}))(C)},1598:function(){}}]);