"use strict";(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[5463,519],{50519:(t,e,s)=>{s.r(e),s.d(e,{default:()=>d});var a=s(47313),i=s(59204),n=s(73763),o=s(97914),l=s(46417);const r=t=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase());class c extends a.Component{constructor(){super(...arguments),this.state={isOpen:!1,step:1,wall_id:null,name:null,email:null,upload_image:[],receiveMail:!1,tandc:!0,nameError:!1,emailError:!1},this.onShowCloseSubmitPicPopUp=t=>{const{appendData:e,wall:s}=this.props;this.props.showPopUP({type:"submit-pic",card:{},personalization:s.Personalization,ThemeRule:s.ThemeRule,UserRule:s.UserRule,wall:s})},this.updateImageWithData=t=>{const{upload_image:e}=this.state;e&&e.length<5&&(e.push(t),this.setState({upload_image:e}))},this.onUpdateImageAddCaption=t=>e=>{const{upload_image:s}=this.state;s&&s.length>0&&s[t]&&(s[t].caption=e.target.value,s[t].review="",s[t].rating=0,this.setState({upload_image:s}))},this.onUpdateImageAddReview=t=>e=>{const{upload_image:s}=this.state;s&&s.length>0&&s[t]&&(s[t].review=e.target.value,s[t].caption="",this.setState({upload_image:s}))},this.onUpdateImageAddRatings=(t,e)=>{const{upload_image:s}=this.state;s&&s.length>0&&s[e]&&(s[e].caption="",s[e].rating=t,this.setState({upload_image:s}))},this.onUpdateStep=t=>e=>{this.setState({step:t})},this.onTextName=t=>{this.setState({name:t.target.value,nameError:!1},(()=>{null!=this.state.name&&0!=this.state.name.length||this.setState({nameError:!0})}))},this.onTextEmail=t=>{this.setState({email:t.target.value,emailError:!1},(()=>{null!=this.state.email&&0!=this.state.email.length&&r(this.state.email)&&!this.state.email.includes("mailinator")||this.setState({emailError:!0})}))},this.onSubmitData=t=>{const{name:e,email:s,upload_image:a,tandc:i,receiveMail:o}=this.state,{wallId:l}=this.props;i&&e&&e.length>0&&s&&s.length>0&&r(s)&&!s.includes("mailinator")&&a&&a.length>0&&i?(0,n.uM)({wall_id:l,name:e,email:s,upload_image:a,receive_mail:o}).then((t=>{this.setState({step:3})})).catch((t=>{console.error(t)})):(null!=this.state.name&&0!=this.state.name.length||this.setState({nameError:!0}),null!=this.state.email&&0!=this.state.email.length&&r(this.state.email)&&!s.includes("mailinator")||this.setState({emailError:!0}))},this.onUpdatereceiveMail=t=>{const{receiveMail:e}=this.state;this.setState({receiveMail:!e})},this.onUpdatetandc=t=>{const{tandc:e}=this.state;this.setState({tandc:!e})},this.removeProductImage=t=>e=>{const{upload_image:s}=this.state;s&&s.length>0&&s.splice(t,1),this.setState({upload_image:s})}}render(){const{isOpen:t,upload_image:e,step:s,name:a,email:i,receiveMail:n,tandc:r,nameError:c,emailError:d}=this.state,{wall:h}=this.props,m=h.UgcSettings,p=m.onsite_status?{backgroundColor:m.onsite_btn_color,borderColor:m.onsite_btn_color,color:m.onsite_btn_txt_color}:"",u={fontSize:h.UgcSettings.btn_fontSize+"px",fontFamily:h.UgcSettings.onsite_css_font_btn};return(0,l.jsx)(l.Fragment,{children:0!==m.onsite_status?(0,l.jsx)("div",{id:"tb_post_submit_container_button",className:"50"!=h.Personalization.commerceTheme?"tb_post_submit_container":"ts_gst__post_submit_container_button",children:"50"!=h.Personalization.commerceTheme?(0,l.jsx)("div",{className:"btn-scan",children:(0,l.jsxs)("div",{style:p,className:"tb_post_submit_btn",onClick:this.onShowCloseSubmitPicPopUp,children:[1==h.UgcSettings.onsite_qr_code_status?(0,l.jsxs)(l.Fragment,{children:[" ",(0,l.jsx)("div",{className:"qr-image",children:(0,l.jsx)(o.ZP,{level:"L",size:60,value:h.UgcSettings.onsite_popup_url})})]}):null,m.onsite_qr_code_btn_text?(0,l.jsxs)(l.Fragment,{children:[1==h.UgcSettings.onsite_qr_code_status?(0,l.jsx)("div",{className:"ts__qr_separator",children:(0,l.jsx)("div",{})}):"",(0,l.jsx)("div",{className:"ts_qr-text  tb-cTSfont-".concat(h.UgcSettings.onsite_font_varient_btn),style:u,children:(0,l.jsx)("div",{className:"ts_qr-text_wrap tb-cTSfont-".concat(h.UgcSettings.onsite_font_varient_btn),style:u,children:m.onsite_qr_code_status&&m.onsite_status||m.onsite_qr_code_status?m.onsite_qr_code_btn_text:m.onsite_status?m.onsite_btn_txt:"Submit a Post"})})," "]}):""]})}):(0,l.jsx)("div",{className:"ts_gst_btn-scan",style:p,children:(0,l.jsxs)("div",{className:"ts_gst_post_submit_btn",onClick:this.onShowCloseSubmitPicPopUp,children:[(0,l.jsxs)("div",{className:"ts_gst_qr-image",children:["1"==h.UgcSettings.onsite_qr_code_status?(0,l.jsx)("div",{style:{backgroundColor:"white",padding:"4.5px",width:"70px",height:"70px",marginLeft:"auto",marginRight:"auto"},children:(0,l.jsx)(o.ZP,{level:"L",size:60,value:h.UgcSettings.onsite_popup_url})}):"",(0,l.jsx)("div",{className:"ts_gst_qr-text  tb-cTSfont-".concat(h.UgcSettings.font_varient),style:u,children:(0,l.jsx)("div",{className:"ts_gst_qr-text_wrap ".concat("1"==h.UgcSettings.onsite_qr_code_status?"wt_qrcode":"wo_qrcode"),children:m.onsite_qr_code_status&&m.onsite_status||m.onsite_qr_code_status?m.onsite_qr_code_btn_text:m.onsite_status?m.onsite_btn_txt:"Submit a Post"})})]}),(0,l.jsx)("div",{className:"ts_gst_qr-image_mobile",children:"Add Your Photo"})]})})}):""})}}const d=(0,i.$j)((t=>({wallId:t.appData.wallID})),(t=>({showPopUP:e=>t((0,n.Bm)(e))})))(c)},33599:(t,e,s)=>{s.r(e),s.d(e,{default:()=>p});var a=s(47313),i=s(50519),n=s(2651),o=s(46417);class l extends a.PureComponent{render(){const{dataArr:t,indexNo:e,completeDataObject:s,wall:a,onSiteUploadShow:l,cardWidth:r,largeDiv:c,smallDiv:d,handleAllImageError:h}=this.props,m=a.ThemeRule.highlightPosition,p=e<3?"1":"0",u={width:c+"%",float:"0"==p?"right"==m?"right":"left":"right"==m?"left":"right"},_={width:d+"%",float:"right"==m?"left":"right"};return(0,o.jsx)("div",{className:"ts_gs_post_row",children:t&&t.length>0?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"ts_gs_post_large",style:u,children:[" ",(0,o.jsx)(n.Z,{className:"ts_gs_post_wrapper",itemData:s[t[0]],cardWidth:r,itemId:s[t[0]].id,fullWidth:!0,...this.props})," "]}),(0,o.jsxs)("div",{className:"ts_gs_post_small",style:_,children:[l?(0,o.jsx)(i.default,{isGalleryTheme:!1,wall:a}):"",t&&t.length>0?t.map(((t,e)=>{const a=s[t];return 0==e?"":(0,o.jsx)(n.Z,{className:"ts_gs_post_wrapper",itemData:a,handleAllImageError:h,cardWidth:r,fullWidth:!1,itemId:a.id,...this.props},"post_id_".concat(a.id))})):null," "]})]}):""})}}var r=s(17739),c=s(73763),d=s(59204);const h=(0,a.lazy)((()=>Promise.all([s.e(8215),s.e(9885),s.e(4771)]).then(s.bind(s,54771))));class m extends a.PureComponent{constructor(){super(...arguments),this.allImageQueue=[],this.state={cardWidth:null,largeDiv:null,smallDiv:null,allFirstImage:!1},this.requestData=()=>{const{wall:t,appendData:e,hasMoreData:s,loaderData:a}=this.props,i=t.ThemeRule.numberOfPosts,n=Math.floor(Date.now()/1e3);s&&!a.isShowMoreLoading&&this.props.getDataNextSteps(t.Wall.id,n,i,e.networkID,e.after,e.heightEvent)},this.onCollageDataFormation=t=>{const{wall:e}=t;var s=document.querySelector(".taggshopContainer")?document.querySelector(".taggshopContainer").clientWidth:"";const a=e.ThemeRule.numberOfCoumn,{cardWidth:i,largeDiv:n,smallDiv:o}=(0,r.nf)(s,a,e.Personalization.commerceTheme);this.setState({cardWidth:i,largeDiv:n,smallDiv:o})},this.onUpdateData=()=>{setTimeout((()=>this.requestData()),1e3)},this.handleAllImageError=t=>{try{const e=t.target.getAttribute("data-item-id");this.allImageQueue.push({src:e,e:t}),this.state.allFirstImage||this.processAllImageQueue()}catch(e){}},this.processAllImageQueue=async()=>{if(this.allImageQueue.length){this.setState({allFirstImage:!0});const{src:t,e:e}=this.allImageQueue[0];t&&(0,r.bO)(e,this.nextProcessAllImageQueue)}},this.nextProcessAllImageQueue=()=>{try{this.allImageQueue.shift(),this.processAllImageQueue()}catch(t){}}}componentDidMount(){const t=document.querySelector("swiper-container");setTimeout((()=>{t.initialize()}),500),this.onCollageDataFormation(this.props);const{wall:e,appendData:s}=this.props;s&&e.Personalization.autoScrollStatus&&window.addEventListener("scroll",(()=>{let t=document.getElementById("scrlBarComanW");var e=window.innerHeight+window.scrollY;t.scrollHeight-10<e&&setTimeout((()=>this.requestData()),1e3)}))}render(){const{cardWidth:t}=this.state,{wall:e,newPostData:s,loaderData:i,hasMoreData:n}=this.props,c=e.UserRule.on_site_upload&&(!window.isEditor||(0,r.G)());return(0,o.jsx)("div",{className:"tb_gst_post_container",id:"ts_theme_container",children:(0,o.jsx)(a.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading..."}),children:(0,o.jsx)(h,{ref:this.secondaryRef,autoplay:"".concat(1===e.ThemeRule.slidePost),"slides-per-view":"2.5",navigation:JSON.stringify({nextEl:".swiper-button-next",prevEl:".swiper-button-prev",disabledClass:"swiper-button-none"}),breakpoints:JSON.stringify({1920:{slidesPerView:4},1601:{slidesPerView:3},1367:{slidesPerView:3},768:{slidesPerView:2},767:{slidesPerView:1},0:{slidesPerView:1}}),"initial-slide":"0","long-swipes-ratio":.01,"long-swipes-ms":100,hasMoreData:n,loaderData:i,onUpdateData:this.onUpdateData,children:s&&s.length>0?s.map(((e,s)=>{const a=0===s&&c&&2===e.length;return 3===e.length||a?(0,o.jsx)("swiper-slide",{children:(0,o.jsx)(l,{dataArr:e,handleAllImageError:this.handleAllImageError,onSiteUploadShow:a,indexNo:s<6?s:"0",...this.props,cardWidth:t,largeDiv:66.66,smallDiv:33.33},"post_id_".concat(s))},"splide_Id".concat(s)):""})):null})})})}}const p=(0,d.$j)((t=>{const{appData:e}=t;return{appData:e,loaderData:t.loaderData,newPostData:e.newPostData,appendData:e.postData.appendData,hasMoreData:!e.postData.hasMoreData[0]||!1!==e.postData.hasMoreData[0].hasMoreData&&(!e.postData.hasMoreData[e.postData.appendData.networkID]||e.postData.hasMoreData[e.postData.appendData.networkID].hasMoreData)}}),(t=>({getDataNextSteps:(e,s,a,i,n,o,l)=>t((0,c.Sx)(e,s,a,i,n,o,l)),showPopUP:e=>t((0,c.Bm)(e))})))(m)},34041:(t,e,s)=>{s.d(e,{Z:()=>n});const a="Window variable not found",i="Timeout exception",n=(t,e)=>new Promise(((s,n)=>{if("undefined"===typeof window)return n(a);let o=null;const l=new Image;l.addEventListener("load",(()=>{o&&clearTimeout(o),s({width:l.naturalWidth,height:l.naturalHeight})})),l.addEventListener("error",(t=>{o&&clearTimeout(o),n("".concat(t.type,": ").concat(t.message))})),l.src=t,e&&(o=setTimeout((()=>n(i)),e))}))}}]);