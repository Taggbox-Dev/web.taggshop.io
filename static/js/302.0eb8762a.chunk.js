"use strict";(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[302,519,771],{54771:function(t,e,a){a.r(e),a.d(e,{default:function(){return l}});var n=a(1413),s=a(45987),r=(a(47313),a(12488)),i=(a(9223),a(46417)),o=["children"];(0,r.z2)();var l=function(t){var e=t.children,a=(0,s.Z)(t,o);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("swiper-container",(0,n.Z)((0,n.Z)({"auto-height":"true","watch-overflow":!1},a),{},{children:e})),a.showCustomArrow?a.customArrow:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"swiper-button-prev swiper__arrow--prev ts_slider_arrow-prev",children:(0,i.jsx)("div",{className:"swiperArrow_inner",children:(0,i.jsx)("div",{className:"tb__icon tb-chevron-left",children:(0,i.jsx)("div",{})})})}),(0,i.jsx)("div",{className:"swiper-button-next swiper__arrow--next ts_slider_arrow-next",onClick:a.hasMoreData&&a.loaderData.isShowMoreLoading?null:a.onUpdateData,children:a.hasMoreData&&a.loaderData.isShowMoreLoading?(0,i.jsxs)("svg",{width:"26px",height:"26px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:"uil-ring-alt",children:[(0,i.jsx)("rect",{x:"0",y:"0",width:"100",height:"100",fill:"none",className:"bk"}),(0,i.jsx)("circle",{cx:"50",cy:"50",r:"40",stroke:"#afafb7",fill:"none",strokeWidth:"10",strokeLinecap:"round"}),(0,i.jsxs)("circle",{cx:"50",cy:"50",r:"40",stroke:"#000000",fill:"none",strokeWidth:"6",strokeLinecap:"round",children:[(0,i.jsx)("animate",{attributeName:"stroke-dashoffset",dur:"2s",repeatCount:"indefinite",from:"0",to:"502"}),(0,i.jsx)("animate",{attributeName:"stroke-dasharray",dur:"2s",repeatCount:"indefinite",values:"150.6 100.4;1 250;150.6 100.4"})]})]}):(0,i.jsx)("div",{className:"swiperArrow_inner",children:(0,i.jsx)("div",{className:"tb__icon tb-chevron-right",children:(0,i.jsx)("div",{})})})})]})]})}},50519:function(t,e,a){a.r(e);var n=a(15671),s=a(43144),r=a(79340),i=a(48347),o=a(47313),l=a(8354),c=a(73763),u=a(97914),d=a(46417),m=function(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())},p=function(t){(0,r.Z)(a,t);var e=(0,i.Z)(a);function a(){var t;(0,n.Z)(this,a);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={isOpen:!1,step:1,wall_id:null,name:null,email:null,upload_image:[],receiveMail:!1,tandc:!0,nameError:!1,emailError:!1},t.onShowCloseSubmitPicPopUp=function(e){var a=t.props,n=(a.appendData,a.wall);t.props.showPopUP({type:"submit-pic",card:{},personalization:n.Personalization,ThemeRule:n.ThemeRule,UserRule:n.UserRule,wall:n})},t.updateImageWithData=function(e){var a=t.state.upload_image;a&&a.length<5&&(a.push(e),t.setState({upload_image:a}))},t.onUpdateImageAddCaption=function(e){return function(a){var n=t.state.upload_image;n&&n.length>0&&n[e]&&(n[e].caption=a.target.value,n[e].review="",n[e].rating=0,t.setState({upload_image:n}))}},t.onUpdateImageAddReview=function(e){return function(a){var n=t.state.upload_image;n&&n.length>0&&n[e]&&(n[e].review=a.target.value,n[e].caption="",t.setState({upload_image:n}))}},t.onUpdateImageAddRatings=function(e,a){var n=t.state.upload_image;n&&n.length>0&&n[a]&&(n[a].caption="",n[a].rating=e,t.setState({upload_image:n}))},t.onUpdateStep=function(e){return function(a){t.setState({step:e})}},t.onTextName=function(e){t.setState({name:e.target.value,nameError:!1},(function(){null!=t.state.name&&0!=t.state.name.length||t.setState({nameError:!0})}))},t.onTextEmail=function(e){t.setState({email:e.target.value,emailError:!1},(function(){null!=t.state.email&&0!=t.state.email.length&&m(t.state.email)&&!t.state.email.includes("mailinator")||t.setState({emailError:!0})}))},t.onSubmitData=function(e){var a=t.state,n=a.name,s=a.email,r=a.upload_image,i=a.tandc,o=a.receiveMail,l=t.props.wallId;i&&n&&n.length>0&&s&&s.length>0&&m(s)&&!s.includes("mailinator")&&r&&r.length>0&&i?(0,c.uM)({wall_id:l,name:n,email:s,upload_image:r,receive_mail:o}).then((function(e){t.setState({step:3})})).catch((function(t){console.error(t)})):(null!=t.state.name&&0!=t.state.name.length||t.setState({nameError:!0}),null!=t.state.email&&0!=t.state.email.length&&m(t.state.email)&&!s.includes("mailinator")||t.setState({emailError:!0}))},t.onUpdatereceiveMail=function(e){var a=t.state.receiveMail;t.setState({receiveMail:!a})},t.onUpdatetandc=function(e){var a=t.state.tandc;t.setState({tandc:!a})},t.removeProductImage=function(e){return function(a){var n=t.state.upload_image;n&&n.length>0&&n.splice(e,1),t.setState({upload_image:n})}},t}return(0,s.Z)(a,[{key:"render",value:function(){var t=this.state,e=(t.isOpen,t.upload_image,t.step,t.name,t.email,t.receiveMail,t.tandc,t.nameError,t.emailError,this.props.wall),a=e.UgcSettings,n=a.onsite_status?{backgroundColor:a.onsite_btn_color,borderColor:a.onsite_btn_color,color:a.onsite_btn_txt_color}:"",s={fontSize:e.UgcSettings.btn_fontSize+"px",fontFamily:e.UgcSettings.onsite_css_font_btn};return(0,d.jsx)(d.Fragment,{children:0!==a.onsite_status?(0,d.jsx)("div",{id:"tb_post_submit_container_button",className:"50"!=e.Personalization.commerceTheme?"tb_post_submit_container":"ts_gst__post_submit_container_button",children:"50"!=e.Personalization.commerceTheme?(0,d.jsx)("div",{className:"btn-scan",children:(0,d.jsxs)("div",{style:n,className:"tb_post_submit_btn",onClick:this.onShowCloseSubmitPicPopUp,children:[1==e.UgcSettings.onsite_qr_code_status?(0,d.jsxs)(d.Fragment,{children:[" ",(0,d.jsx)("div",{className:"qr-image",children:(0,d.jsx)(u.Z,{level:"L",size:60,value:e.UgcSettings.onsite_popup_url})})]}):null,a.onsite_qr_code_btn_text?(0,d.jsxs)(d.Fragment,{children:[1==e.UgcSettings.onsite_qr_code_status?(0,d.jsx)("div",{className:"ts__qr_separator",children:(0,d.jsx)("div",{})}):"",(0,d.jsx)("div",{className:"ts_qr-text  tb-cTSfont-".concat(e.UgcSettings.onsite_font_varient_btn),style:s,children:(0,d.jsx)("div",{className:"ts_qr-text_wrap tb-cTSfont-".concat(e.UgcSettings.onsite_font_varient_btn),style:s,children:a.onsite_qr_code_status&&a.onsite_status||a.onsite_qr_code_status?a.onsite_qr_code_btn_text:a.onsite_status?a.onsite_btn_txt:"Submit a Post"})})," "]}):""]})}):(0,d.jsx)("div",{className:"ts_gst_btn-scan",style:n,children:(0,d.jsxs)("div",{className:"ts_gst_post_submit_btn",onClick:this.onShowCloseSubmitPicPopUp,children:[(0,d.jsxs)("div",{className:"ts_gst_qr-image",children:["1"==e.UgcSettings.onsite_qr_code_status?(0,d.jsx)("div",{style:{backgroundColor:"white",padding:"4.5px",width:"70px",height:"70px",marginLeft:"auto",marginRight:"auto"},children:(0,d.jsx)(u.Z,{level:"L",size:60,value:e.UgcSettings.onsite_popup_url})}):"",(0,d.jsx)("div",{className:"ts_gst_qr-text  tb-cTSfont-".concat(e.UgcSettings.font_varient),style:s,children:(0,d.jsx)("div",{className:"ts_gst_qr-text_wrap ".concat("1"==e.UgcSettings.onsite_qr_code_status?"wt_qrcode":"wo_qrcode"),children:a.onsite_qr_code_status&&a.onsite_status||a.onsite_qr_code_status?a.onsite_qr_code_btn_text:a.onsite_status?a.onsite_btn_txt:"Submit a Post"})})]}),(0,d.jsx)("div",{className:"ts_gst_qr-image_mobile",children:"Add Your Photo"})]})})}):""})}}]),a}(o.Component);e.default=(0,l.$j)((function(t){return{wallId:t.appData.wallID}}),(function(t){return{showPopUP:function(e){return t((0,c.Bm)(e))}}}))(p)},33599:function(t,e,a){a.r(e),a.d(e,{default:function(){return D}});var n=a(1413),s=a(15861),r=a(15671),i=a(43144),o=a(79340),l=a(48347),c=a(87757),u=a.n(c),d=a(47313),m=a(50519),p=a(2651),h=a(46417),_=function(t){(0,o.Z)(a,t);var e=(0,l.Z)(a);function a(){return(0,r.Z)(this,a),e.apply(this,arguments)}return(0,i.Z)(a,[{key:"render",value:function(){var t=this,e=this.props,a=e.dataArr,s=e.indexNo,r=e.completeDataObject,i=e.wall,o=e.onSiteUploadShow,l=e.cardWidth,c=e.largeDiv,u=e.smallDiv,d=e.handleAllImageError,_=i.ThemeRule.highlightPosition,g=s<3?"1":"0",v={width:c+"%",float:"0"==g?"right"==_?"right":"left":"right"==_?"left":"right"},f={width:u+"%",float:"right"==_?"left":"right"};return(0,h.jsx)("div",{className:"ts_gs_post_row",children:a&&a.length>0?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"ts_gs_post_large",style:v,children:[" ",(0,h.jsx)(p.Z,(0,n.Z)({className:"ts_gs_post_wrapper",itemData:r[a[0]],cardWidth:l,itemId:r[a[0]].id,fullWidth:!0},this.props))," "]}),(0,h.jsxs)("div",{className:"ts_gs_post_small",style:f,children:[o?(0,h.jsx)(m.default,{isGalleryTheme:!1,wall:i}):"",a&&a.length>0?a.map((function(e,a){var s=r[e];return 0==a?"":(0,h.jsx)(p.Z,(0,n.Z)({className:"ts_gs_post_wrapper",itemData:s,handleAllImageError:d,cardWidth:l,fullWidth:!1,itemId:s.id},t.props),"post_id_".concat(s.id))})):null," "]})]}):""})}}]),a}(d.PureComponent),g=a(17739),v=a(73763),f=a(8354),w=a(54771),x=function(t){(0,o.Z)(a,t);var e=(0,l.Z)(a);function a(){var t;(0,r.Z)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).allImageQueue=[],t.state={cardWidth:null,largeDiv:null,smallDiv:null,allFirstImage:!1},t.requestData=function(){var e=t.props,a=e.wall,n=e.appendData,s=e.hasMoreData,r=e.loaderData,i=a.ThemeRule.numberOfPosts,o=Math.floor(Date.now()/1e3);s&&!r.isShowMoreLoading&&t.props.getDataNextSteps(a.Wall.id,o,i,n.networkID,n.after,n.heightEvent)},t.onCollageDataFormation=function(e){var a=e.wall,n=document.querySelector(".taggshopContainer")?document.querySelector(".taggshopContainer").clientWidth:"",s=a.ThemeRule.numberOfCoumn,r=(0,g.nf)(n,s,a.Personalization.commerceTheme),i=r.cardWidth,o=r.largeDiv,l=r.smallDiv;t.setState({cardWidth:i,largeDiv:o,smallDiv:l})},t.onUpdateData=function(){setTimeout((function(){return t.requestData()}),1e3)},t.handleAllImageError=function(e){try{var a=e.target.getAttribute("data-item-id");t.allImageQueue.push({src:a,e:e}),t.state.allFirstImage||t.processAllImageQueue()}catch(n){}},t.processAllImageQueue=(0,s.Z)(u().mark((function e(){var a,n,s;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.allImageQueue.length&&(t.setState({allFirstImage:!0}),a=t.allImageQueue[0],n=a.src,s=a.e,n&&(0,g.bO)(s,t.nextProcessAllImageQueue));case 1:case"end":return e.stop()}}),e)}))),t.nextProcessAllImageQueue=function(){try{t.allImageQueue.shift(),t.processAllImageQueue()}catch(e){}},t}return(0,i.Z)(a,[{key:"componentDidMount",value:function(){var t=this,e=document.querySelector("swiper-container");setTimeout((function(){e.initialize()}),500),this.onCollageDataFormation(this.props);var a=this.props,n=a.wall;a.appendData&&n.Personalization.autoScrollStatus&&window.addEventListener("scroll",(function(){var e=document.getElementById("scrlBarComanW"),a=window.innerHeight+window.scrollY;e.scrollHeight-10<a&&setTimeout((function(){return t.requestData()}),1e3)}))}},{key:"render",value:function(){var t=this,e=this.state.cardWidth,a=this.props,s=a.wall,r=a.newPostData,i=a.loaderData,o=a.hasMoreData,l=s.UserRule.on_site_upload&&(!window.isEditor||(0,g.G)());return(0,h.jsx)("div",{className:"tb_gst_post_container",id:"ts_theme_container",children:(0,h.jsx)(w.default,{ref:this.secondaryRef,autoplay:"".concat(1===s.ThemeRule.slidePost),"slides-per-view":"2.5",navigation:JSON.stringify({nextEl:".swiper-button-next",prevEl:".swiper-button-prev",disabledClass:"swiper-button-none"}),breakpoints:JSON.stringify({1920:{slidesPerView:4},1601:{slidesPerView:3},1367:{slidesPerView:3},768:{slidesPerView:2},767:{slidesPerView:1},0:{slidesPerView:1}}),"initial-slide":"0","long-swipes-ratio":.01,"long-swipes-ms":100,hasMoreData:o,loaderData:i,onUpdateData:this.onUpdateData,children:r&&r.length>0?r.map((function(a,s){var r=0===s&&l&&2===a.length;return 3===a.length||r?(0,h.jsx)("swiper-slide",{children:(0,h.jsx)(_,(0,n.Z)((0,n.Z)({dataArr:a,handleAllImageError:t.handleAllImageError,onSiteUploadShow:r,indexNo:s<6?s:"0"},t.props),{},{cardWidth:e,largeDiv:66.66,smallDiv:33.33}),"post_id_".concat(s))},"splide_Id".concat(s)):""})):null})})}}]),a}(d.PureComponent),D=(0,f.$j)((function(t){var e=t.appData;return{appData:e,loaderData:t.loaderData,newPostData:e.newPostData,appendData:e.postData.appendData,hasMoreData:!e.postData.hasMoreData[0]||!1!==e.postData.hasMoreData[0].hasMoreData&&(!e.postData.hasMoreData[e.postData.appendData.networkID]||e.postData.hasMoreData[e.postData.appendData.networkID].hasMoreData)}}),(function(t){return{getDataNextSteps:function(e,a,n,s,r,i,o){return t((0,v.Sx)(e,a,n,s,r,i,o))},showPopUP:function(e){return t((0,v.Bm)(e))}}}))(x)},85942:function(t,e,a){a.d(e,{Z:function(){return n}});var n=function(t,e){return new Promise((function(a,n){var s=null,r=new Image;r.addEventListener("load",(function(){s&&clearTimeout(s),a(r)})),r.addEventListener("error",(function(t){s&&clearTimeout(s),n("".concat(t.type,": ").concat(t.message))})),r.src=t,e&&(s=setTimeout((function(){return n("Timeout exception")}),e))}))}}}]);