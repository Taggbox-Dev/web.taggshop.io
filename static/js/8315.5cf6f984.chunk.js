(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[8315],{2651:(t,e,s)=>{"use strict";s.d(e,{Z:()=>N});var o=s(47313),i=s(59204),r=s(17739),a=s(73763),c=s(29335),n=s(46417);class l extends o.PureComponent{getMarginTop(){}render(){const{ImageClass:t,ImageUrl:e,item:s,ugc_products:o,wall:i,width:r,height:a,handleAllImageError:l,themeId:d,showBlur:h}=this.props,_={backgroundImage:"url(".concat(e,")")};var m={height:s.hotspot?r>a?"auto":"100%":r>a?"100%":"auto",width:s.hotspot?r>a?"100%":"auto":r>a?"auto":"100%"};return(0,n.jsxs)(n.Fragment,{children:[h?(0,n.jsx)("div",{className:"ts_image_blur_bg",style:_,children:(0,n.jsx)("div",{})}):(0,n.jsx)(n.Fragment,{}),(0,n.jsxs)("div",{className:t,style:m,children:[(0,n.jsx)("img",{"data-src":e,src:e,"data-is-optmized":"0","data-link":s.link,"data-load":"0","data-wall-id":i.Wall.id,"data-item-id":s.id,onLoad:this.onLoadImage,"data-filter-id":s.filterId,"data-stories":s.stories,"data-network":s.networkId,width:[3,19].includes(d)?"100%":r,height:[3,19].includes(d)?"auto":a,className:"imgID".concat(s.id),onError:t=>{"28"!==s.networkId&&l(t)},alt:"post",style:[3,19].includes(d)?{}:m}),s.hotspot?(0,n.jsx)(c.Z,{ugc_products:o,UgcSetting:s.ugc_personalizaion.UgcSetting,item:s}):null]})]})}}var d=s(34041);class h extends o.PureComponent{render(){const{item:t,wall:e,cardWidth:s}=this.props,o=!!(t.ugc_products&&t.ugc_products.length>0),i=3===t.type||5===t.type,r=e&&e.User&&31724!==e.User.id,a=!!(t.imageList&&t.imageList.length>0),c=!(!a||!o),l=55==e.Personalization.commerceTheme?"tb_cs_video_multiImage":"",d=s<=700&&s>500?{fontSize:"16px"}:s<=500&&s>350?{fontSize:"14px"}:s<=350&&s>250?{fontSize:"12px"}:s<=250&&s>=150?{fontSize:"11px"}:s<150&&s>100?{fontSize:"10px"}:s<=100&&s>50?{fontSize:"8px"}:{};return(0,n.jsxs)("div",{className:"ts_post_iocn",children:[(0,n.jsxs)("div",{className:"ts_social-icon ".concat(l),style:{color:"rgb(112, 112, 112)"},children:[i&&61!==e.Personalization.commerceTheme?(0,n.jsx)("div",{className:"ts_video_icon tb_cs_video_multiImage",style:d,children:(0,n.jsx)("div",{className:"tb__icon tb-video-alt",children:(0,n.jsx)("div",{})})}):"",o&&r&&55!==e.Personalization.commerceTheme?(0,n.jsx)("div",{className:"ts_shop_icon",style:d,children:31665===e.User.id?(0,n.jsx)("svg",{fill:"#ffffff",height:"22",viewBox:"0 0 48 48",width:"22",children:(0,n.jsx)("path",{d:"M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"})}):(0,n.jsx)("div",{className:"tb__icon tb-shopping-bag",children:(0,n.jsx)("div",{})})}):"",!c&&a&&55!==e.Personalization.commerceTheme?(0,n.jsx)("div",{className:"tb__icon tb-multiple tb_cs_carousal_icon",style:d,children:" "}):"",a&&55==e.Personalization.commerceTheme?(0,n.jsxs)("div",{className:"ts_cs_multiple_option",children:[" ",(0,n.jsx)("div",{className:"tb__icon tb-multiple",style:d,children:" "})]}):""]}),c&&55!==e.Personalization.commerceTheme?(0,n.jsx)("div",{className:"tb__icon tb-multiple tb_cs_carousal_icon_bottom",style:d,children:" "}):""]})}}class _ extends o.PureComponent{constructor(t){super(t),this.state={height:"100",width:"100"}}componentDidMount(){const{item:t}=this.props;t.mediaHeight&&""!==t.mediaWidth?this.setState({height:100*t.mediaHeight/t.mediaWidth,width:100*t.mediaWidth/t.mediaHeight}):(0,d.Z)(t.postFileNew).then((t=>{let{width:e,height:s}=t;return this.setState({height:100*s/e,width:100*e/s})})).catch((t=>this.setState({height:100,width:100,error:t})))}render(){const{item:t,wall:e,handleAllImageError:s,cardWidth:o,themeId:i,showBlur:a}=this.props,c=(0,r.HS)(t.ugc_products),{height:d,width:h}=this.state;t.ugc_products&&t.ugc_products.length>0&&t.hotspot,3===t.type||t.type,t.imageList&&t.imageList.length;return(0,n.jsx)("div",{className:"ts_post_image",children:(0,n.jsx)("div",{className:"tb_media_wrap",children:h?(0,n.jsx)(l,{themeId:i,showBlur:a,handleAllImageError:s,ImageClass:"tb_sp_image",height:d,width:h,ImageUrl:t.postFileNew,ugc_products:c,item:t,wall:e}):""})})}}var m=s(16390),p=s(98501);class u extends o.PureComponent{render(){const{wall:t,item:e,isHover:s}=this.props,o=(t.ThemeRule.css_font,t.ThemeRule.fontSize,s&&"#ffffff"===t.ThemeRule.fontColor||(s||"#000000"!==t.ThemeRule.fontColor)&&t.ThemeRule.fontColor,{fontFamily:t.ThemeRule.css_font,fontSize:1==e.type?1===t.Personalization.textDecorate?t.ThemeRule.fontSizeDecorate:t.ThemeRule.fontSizeNormal:t.ThemeRule.fontSize,color:"#000000"===t.ThemeRule.cardColor&&"#000000"===t.ThemeRule.fontColor?"#ffffff":"#ffffff"===t.ThemeRule.cardColor&&"#ffffff"===t.ThemeRule.fontColor?"#000000":t.ThemeRule.fontColor});let i=(0,r.Fx)(e.content);const a={color:t.Personalization.hashtag_color,fontWeight:"bold"};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"ts_card_content tb-cTSfont-".concat(t.ThemeRule.font_varient),style:o,children:0!==t.Personalization.hashtag_highlight?1===t.Personalization.hashtag_all?(0,p.uz)((0,m.ZP)(i),/#(\w+)/g,((t,e)=>(0,n.jsxs)("div",{className:"tb_hash_tag",style:a,children:["#",t]},t+e))):1===t.Personalization.hashtag_feed?(0,p.uz)((0,m.ZP)(i),e.hash.hashString,((t,e)=>(0,n.jsx)("div",{className:"tb_hash_tag",style:a,children:t},t+e))):(0,m.ZP)(i):(0,m.ZP)(i)})})}}var g=s(7284);class x extends o.PureComponent{render(){const{item:t,wall:e,network:s}=this.props,i=505==e.ThemeRule.iconType?s.color:e.ThemeRule.iconColor;return(0,n.jsx)("div",{className:"ts__card_socialAction",style:{color:"rgb(255, 255, 255)"},children:1==t.networkId?(0,n.jsxs)(o.Fragment,{children:[(0,n.jsx)("a",{target:"_blank",href:"https://twitter.com/intent/tweet?in_reply_to=".concat(atob(t.postId)),title:"View",children:(0,n.jsx)("div",{className:"tb__icon tb-share-square",style:{color:i},children:(0,n.jsx)("div",{})})}),(0,n.jsxs)("a",{href:"https://twitter.com/intent/retweet?tweet_id=".concat(atob(t.postId)),title:"Like",target:"_blank",children:[(0,n.jsx)("div",{className:"tb__icon tb-mixer",style:{color:i},children:(0,n.jsx)("div",{})}),0!=t.comment_count?t.comment_count:""]}),(0,n.jsxs)("a",{href:"https://twitter.com/intent/favorite?tweet_id=".concat(atob(t.postId)),title:"Comment",target:"_blank",children:[(0,n.jsx)("div",{className:"tb__icon tb-heart",style:{color:i},children:(0,n.jsx)("div",{})}),0!=t.like_count?t.like_count:""]})]}):2==t.networkId||3==t.networkId||5==t.networkId||7==t.networkId||8==t.networkId||10==t.networkId||18==t.networkId?(0,n.jsxs)(o.Fragment,{children:[(0,n.jsxs)("a",{href:t.link,title:"Like",target:"_blank",children:[(0,n.jsx)("div",{className:"tb__icon tb-eye",style:{color:i},children:(0,n.jsx)("div",{})}),10==t.networkId&&t.feedId>73590||18==t.networkId?t.like_count:null]}),(0,n.jsxs)("a",{href:t.link,title:"Like",target:"_blank",children:[(0,n.jsx)("div",{className:"tb__icon tb-thumbs-up",style:{color:i},children:(0,n.jsx)("div",{})}),10==t.networkId&&t.feedId>73590||18==t.networkId?t.like_count:null]}),(0,n.jsxs)("a",{href:t.link,title:"Comment",target:"_blank",children:[(0,n.jsx)("div",{className:"tb__icon tb-comment-dots",style:{color:i},children:(0,n.jsx)("div",{})}),10==t.networkId&&t.feedId>73590||18==t.networkId?t.comment_count:null]})]}):4==t.networkId?(0,n.jsx)("a",{href:t.link,className:"fa fa-comment-o tooltips",title:"Comment",target:"_blank",children:(0,n.jsx)("div",{})}):null})}}class f extends o.PureComponent{render(){const{item:t,wall:e,network:s,cardWidth:o}=this.props,i=!!(t.ugc_products&&t.ugc_products.length>0&&0===t.hotspot),a=e.ThemeRule.hideContent,c=505===e.ThemeRule.iconType?s.color:e.ThemeRule.iconColor,l=""===e.ThemeRule.postHover||1!==e.ThemeRule.postHover,d=l?"ts_white_bg_hover":"ts_black_bg_hover",h={backgroundColor:l?"rgb(255, 255, 255, 0.8)":"rgba(0, 0, 0, 0.8)"},_={fontFamily:e.ThemeRule.css_font},m=s.icon.replace("fa-",""),f=o<=700&&o>500?{fontSize:"26px"}:o<=500&&o>200?{fontSize:"22px"}:o<=200?{fontSize:"18px"}:{};return(0,n.jsx)("div",{className:"ts_Post_hover",children:(0,n.jsxs)("div",{className:"ts_card_hover_in",children:[(0,n.jsx)("div",{className:"ts_card_hover_overlay",style:h,children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"ts_card_hover_content",children:[(0,n.jsx)("div",{className:"ts_slider-social-icon",style:f,children:null!=t.rating&&0!==t.rating?(0,n.jsx)("div",{className:"ts_social_rating",style:{backgroundImage:"url(".concat(p.KA).concat(t.networkId,"/").concat(t.rating,".png)")},children:(0,n.jsx)("div",{})}):(0,n.jsx)("div",{className:"tb__icon tb-".concat(m),style:{color:c,...f},children:(0,n.jsxs)("div",{children:["twitter"===m?(0,n.jsx)(r.yi,{color:c}):""," "]})})}),(0,n.jsx)("div",{className:"ts_card_content_00",children:i?0===a?[55].includes(e.Personalization.commerceTheme)?(0,n.jsx)(n.Fragment,{}):(0,n.jsx)(u,{wall:e,item:t,isHover:l}):(0,n.jsx)("div",{className:"ts_card_shop_btn  ".concat(d),children:(0,n.jsx)(g.Z,{shoppingText:e.ThemeRule.shoppingText,ctaClass:"ts_shop_btn",styleCta:_})}):[55].includes(e.Personalization.commerceTheme)?(0,n.jsx)(n.Fragment,{}):(0,n.jsx)(u,{wall:e,item:t,isHover:l})})]}),e.ThemeRule.socialAction?(0,n.jsx)(x,{item:t,wall:e,network:s}):""]})})}}const v=t=>(0,m.ZP)(t);var j=s(70816),w=s.n(j);class b extends o.PureComponent{render(){const{postTime:t,timeClass:e,timeStyle:s}=this.props,o=w()(new Date(1e3*t)).fromNow();return(0,n.jsxs)("div",{className:e,style:s,children:[" ",o]})}}class y extends o.PureComponent{constructor(){super(...arguments),this.state={isAuthorImageValid:!0},this.onCtaClick=()=>{const{wall:t,item:e}=this.props;(0,a.S5)({type:1,action:2,wall:t.Wall.id,feed:e.feedId,post:e.referenceId})}}componentDidMount(){const{item:t}=this.props,e=(0,r.uB)(t.author.picture);this.setState({isAuthorImagevalid:e})}render(){const{wall:t,item:e,network:s}=this.props,o=t.Personalization.postTime,i=null!=(a=e.cta)&&""!==a&&0!==a;var a;const c=t.Personalization.postAuthor,l=505==t.ThemeRule.iconType?s.color:t.ThemeRule.iconColor,d={backgroundColor:t.ThemeRule.authorColor},h={color:t.ThemeRule.authorColor},_=s.icon.replace("fa-","");return(0,n.jsxs)(n.Fragment,{children:[i?(0,n.jsxs)("span",{onClick:this.onCtaClick,children:[" ",v(e.cta)]}):null,(0,n.jsxs)("div",{className:"tb_sc_author_wrapper",children:[e.author.isInstaUser?null:(0,n.jsxs)("div",{className:"tb_sc_author",children:[(0,n.jsxs)("div",{className:"tb_sc_author_profile",children:[(0,n.jsx)("img",{loading:"lazy",src:e.author.picture,onError:t=>{t.target.onerror=null,t.target.src=e.author.errorPic},height:44,width:44,alt:"image"})," "]}),(0,n.jsxs)("div",{className:"tb_sc_author_info",children:[c?(0,n.jsx)("div",{className:"tb_sc_authorname",style:h,children:e.author.name}):"",(0,n.jsxs)("div",{className:"tb_sc_post_info",children:[c?(0,n.jsxs)("div",{className:"tb_sc_username",style:h,children:["@",e.author.username]}):"",o&&c?(0,n.jsx)("div",{className:"tb_sc_seprator",style:d,children:(0,n.jsx)("div",{})}):"",o?(0,n.jsx)(b,{postTime:e.createdAt,timeClass:"tb_sc_time",timeStyle:h}):""]})]})]}),(0,n.jsx)("div",{className:"tb_sc_social_",children:(0,n.jsx)("div",{className:"tb__icon tb-".concat(_),style:{color:l},children:(0,n.jsxs)("div",{children:["twitter"==_?(0,n.jsx)(r.yi,{color:l}):""," "]})})})]})]})}}class P extends o.PureComponent{render(){const{wall:t,item:e}=this.props,s={fontFamily:t.ThemeRule.css_font,fontSize:1==e.type?1==t.Personalization.textDecorate?t.ThemeRule.fontSizeDecorate:t.ThemeRule.fontSizeNormal:t.ThemeRule.fontSize,color:"#000000"===t.ThemeRule.cardColor&&"#000000"===t.ThemeRule.fontColor?"#ffffff":"#ffffff"===t.ThemeRule.cardColor&&"#ffffff"===t.ThemeRule.fontColor?"#000000":t.ThemeRule.fontColor},o={backgroundImage:"url(".concat(p.KA).concat(e.networkId,"/").concat(e.rating,".png)")},i={color:t.Personalization.hashtag_color,fontWeight:"bold"};let a=(0,r.Fx)(e.content);const c=null!=(l=e.cta)&&""!==l&&0!==l;var l;e.author.isInstaUser,t.Personalization.postAuthor;return(0,n.jsxs)(n.Fragment,{children:[e.rating?(0,n.jsx)("div",{className:"tb_post_rating",style:o,children:(0,n.jsx)("div",{})}):"",c?(0,n.jsxs)("div",{onClick:this.onCtaClick,children:[" ",v(e.cta)]}):null,(0,n.jsx)("div",{className:"ts_cs_content tb-cTSfont-".concat(t.ThemeRule.font_varient).concat(1===t.Personalization.textDecorate&&1===e.type?e.textDecoClass:""),style:s,children:0!==t.Personalization.hashtag_highlight?1===t.Personalization.hashtag_all?(0,p.uz)((0,m.ZP)(a),/#(\w+)/g,((t,e)=>(0,n.jsxs)("div",{className:"ts_cs_hash_tag",style:i,children:["#",t]},t+e))):1===t.Personalization.hashtag_feed?(0,p.uz)((0,m.ZP)(a),e.hash.hashString,((t,e)=>(0,n.jsx)("div",{className:"ts_cs_hash_tag",style:i,children:t},t+e))):(0,m.ZP)(a):(0,m.ZP)(a)})]})}}class T extends o.PureComponent{constructor(t){super(t),this.onLoadPopup=t=>{const{itemData:e,wall:s,postData:o,itemId:i,itemIndex:c,languageSetting:n,completeDataObject:l,wallId:d,webFilters:h}=this.props;console.log(s.Personalization.postFeatured);let _=o.map((t=>l[t])),m=_.filter((t=>!String(t.id).includes("free_add_"))),p=(0,r.E6)(m,e.id,c||o.indexOf(i));1===s.Personalization.postFeatured&&((0,r.st)("add"),this.state.isMobile&&"1"!=e.type?this.props.showReelPopUP({type:"post",card:e,idArray:m,index:p,viewOnText:n.viewOnText,shareText:n.shareText,personalization:s.Personalization,ThemeRule:s.ThemeRule,webFilters:h,UserRule:s.UserRule,wall:s}):this.props.showPopUP({type:"post",card:e,idArray:m,index:p,viewOnText:n.viewOnText,shareText:n.shareText,personalization:s.Personalization,ThemeRule:s.ThemeRule,webFilters:h,UserRule:s.UserRule,wall:s})),(0,a.S5)({action:2,wall:d,feed:e.feedId,post:e.referenceId})},this.myRef=o.createRef(),this.state={cardWidth:null,isMobile:(0,r.EV)()}}componentDidMount(){(0,r.kA)(this.props.itemData.id)&&(this.onLoadPopup(),setTimeout((()=>{const t=document.querySelector(".ts_p_".concat(this.props.itemData.id));t&&t.scrollIntoView(!0)}),500)),setTimeout((()=>{this.myRef&&this.myRef.current&&this.setState({cardWidth:this.myRef.current.clientWidth})}),500)}componentDidUpdate(){setTimeout((()=>{this.myRef&&this.myRef.current&&this.setState({cardWidth:this.myRef.current.clientWidth})}),1e3)}render(){const{itemData:t,wall:e,webFilters:s,adjustWidth:o,handleAllImageError:i,className:a,cardWidth:c,fullWidth:l}=this.props,d=t.highlight,m=(e.ThemeRule.shareOption,e.ThemeRule.hideContent),g=(0,r.EH)(t.networkId,s);var x={backgroundColor:e.ThemeRule.cardColor,borderRadius:e.ThemeRule.roundEdge};const v=(t=>{const{wall:e,adjustWidth:s,highlight:o,fullWidth:i,cardWidth:r}=t;switch(parseInt(e.Personalization.commerceTheme)){case 4:return{width:1==o?2*s:s,height:1==o?2*s:s,padding:e.Personalization.padding/2};case 16:case 55:return{width:"100%",height:"auto",padding:e.Personalization.padding/2};case 53:return{width:i?"100%":r+"%",padding:3};case 50:return{width:"100%",padding:3};case 47:return{width:"100%"};case 19:case 3:return{width:1==o?2*s:s,padding:e.Personalization.padding/2}}})({wall:e,highlight:d,adjustWidth:o,cardWidth:c,fullWidth:l}),j=!!(t.ugc_products&&t.ugc_products.length>0&&0===t.hotspot),w=3===t.type||5===t.type,b=!!(t.imageList&&t.imageList.length>0),T={backgroundImage:"url(".concat(p.KA).concat(t.networkId,"/").concat(t.rating,".png)")};return(0,n.jsx)("div",{className:"".concat(a," ").concat(t&&t.id?"ts_p_"+t.id:""),ref:this.myRef,id:"ts_".concat(t.id),onClick:this.onLoadPopup,style:v,"data-method":t.id,children:(0,n.jsxs)("div",{className:"ts_post_in ".concat(t.hotspot?"":"ts_post_in_hostpot_hover"),style:x,children:[(j||w||b)&&![19,47,3].includes(e.Personalization.commerceTheme)?(0,n.jsx)(h,{item:t,cardWidth:this.state.cardWidth,wall:e}):"","1"==t.type?(0,n.jsx)(n.Fragment,{}):(0,n.jsx)(_,{handleAllImageError:i,showBlur:t.hotspot,cardWidth:this.state.cardWidth,item:t,wall:e,themeId:e.Personalization.commerceTheme}),t.hotspot||[19,47,3].includes(e.Personalization.commerceTheme)?(0,n.jsx)(n.Fragment,{}):(0,n.jsx)(f,{cardWidth:this.state.cardWidth,item:t,wall:e,network:g}),[19,47,3].includes(e.Personalization.commerceTheme)?(0,n.jsxs)("div",{className:"tb_content_wrapper",children:[(0,n.jsx)(y,{wall:e,item:t,network:g}),[3,19].includes(e.Personalization.commerceTheme)?(0,n.jsx)("div",{className:"ts_cp_postContentCard_ratting",children:t.rating?(0,n.jsx)("div",{className:"tb_post_rating",style:T,children:(0,n.jsx)("div",{})}):""}):(0,n.jsx)(n.Fragment,{}),(0,n.jsx)(n.Fragment,{children:[3].includes(e.Personalization.commerceTheme)?(0,n.jsx)(n.Fragment,{}):[47].includes(e.Personalization.commerceTheme)?m?"":(0,n.jsx)(P,{wall:e,item:t}):m?"":(0,n.jsx)(u,{wall:e,item:t})})]}):(0,n.jsx)(n.Fragment,{})]})})}}const N=(0,i.$j)((t=>({wallId:t.appData.wallID})),(t=>({showPopUP:e=>t((0,a.Bm)(e)),showReelPopUP:e=>t((0,a.Sy)(e))})))(T)},7284:(t,e,s)=>{"use strict";s.d(e,{Z:()=>a});var o=s(47313),i=s(73763),r=s(46417);class a extends o.PureComponent{constructor(){super(...arguments),this.onClickCtAButton=t=>{const{item:e,wall:s}=this.props;t&&(0,i.S5)({type:1,action:2,wall:s.Wall.id,feed:e.feedId,post:e.referenceId})}}render(){const{shoppingText:t,ctaClass:e,styleCta:s}=this.props;return(0,r.jsxs)("div",{className:e,style:s,children:[" ",t," "]})}}},29335:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});s(47313);var o=s(59204),i=s(46417);function r(t){const{ugc_products:e,UgcSetting:s,item:r,isPopUp:a=!1}=t,c={background:s?s.hotspot_color:null},n={background:s?s.hotspot_color:null,color:s?s.hotspot_type_color:null},l=(0,o.v9)((t=>t.modalPop)),d=t=>e=>{2==parseInt(s.tab_target)?window.parent.location.href=t:window.open(t,"_blank")};return(0,i.jsx)("div",{className:"ts__post_hotspot",children:e.map(((t,e)=>{let o=parseInt(t.hotspot_cordinates.top),a=parseInt(t.hotspot_cordinates.left);const h=t.UgcProduct.product_discount>0?r.ugc_personalizaion.UgcSetting.discount_price_color:r.ugc_personalizaion.UgcSetting.original_price_color;let _={top:o<"30"||o<"70"&&o>"30"?"18px":"auto",left:a<"30"?"18px":a<"70"&&a>"30"?"-25px":"auto",bottom:o<"30"||o<"70"&&o>"30"?"auto":"18px",right:a<"30"||a<"70"&&a>"30"?"auto":"15px"};return(0,i.jsx)("div",{className:"ts_st_post_hotspot_icon",style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},children:1==s.hotspot_type?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{onClick:d(t.UgcProduct.product_url),className:"ts_st_post_hotspot_icon_blob_outer ts_st_post_numberHotspot",children:l.showAll||!l.isShowPopUp||l.showHotspot&&l.index==e&&l.hotspotId==t.id?(0,i.jsxs)("div",{className:"ts_st_post_hotspot_icon_blob_custom",id:"ts_st_post_hotspot_icon_blob".concat(e),style:{...n,textAlign:"center"},children:[" ",e+1]}):null}),l.showAll||!l.isShowPopUp||l.showHotspot&&l.index==e&&l.hotspotId==t.id?(0,i.jsxs)("div",{className:"".concat(l.showAll?"ts_st_post_hotspot_icon_hover":"ts_st_post_hotspot_icon_hover_custom "," ").concat(l.isShowPopUp?"":"ts_st_post_hotspot_icon_hover"),style:_,children:[(0,i.jsx)("div",{className:"ts_st_post_hotspot_icon_hover_p_name",children:t.UgcProduct.product_title}),(0,i.jsxs)("div",{style:{color:h},className:"ts_st_post_hotspot_icon_hover_act_price ".concat(t.UgcProduct.product_discount>0?"ts_st_post_hotspot_icon_hover_act_prise_diabled":""),children:[t.UgcProduct.price_currency_symbol," "," ",t.UgcProduct.product_price]}),t.UgcProduct.product_discount>0?(0,i.jsxs)("div",{className:"ts_st_post_hotspot_icon_hover_dis_price",style:{color:r.ugc_personalizaion.UgcSetting.original_price_color},children:[t.UgcProduct.price_currency_symbol," "," ",t.UgcProduct.product_discount]}):""]}):null]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{onClick:d(t.UgcProduct.product_url),className:"ts_st_post_hotspot_icon_blob_outer",children:(0,i.jsx)("div",{className:"ts_st_post_hotspot_icon_blob",style:c,children:(0,i.jsx)("div",{})})}),(0,i.jsxs)("div",{className:"ts_st_post_hotspot_icon_hover ",style:_,children:[(0,i.jsx)("div",{className:"ts_st_post_hotspot_icon_hover_p_name",children:t.UgcProduct.product_title}),(0,i.jsxs)("div",{style:{color:h},className:"ts_st_post_hotspot_icon_hover_act_price ".concat(t.UgcProduct.product_discount>0?"ts_st_post_hotspot_icon_hover_act_prise_diabled":""),children:[t.UgcProduct.price_currency_symbol," "," ",t.UgcProduct.product_price]}),t.UgcProduct.product_discount>0?(0,i.jsxs)("div",{className:"ts_st_post_hotspot_icon_hover_dis_price",style:{color:r.ugc_personalizaion.UgcSetting.original_price_color},children:[t.UgcProduct.price_currency_symbol," "," ",t.UgcProduct.product_discount," "]}):""]})]})},e)}))})}},50247:()=>{}}]);