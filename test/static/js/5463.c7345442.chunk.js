"use strict";(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[5463,9031,4771],{54771:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});a(47313);var s=a(12488),r=(a(9223),a(46417));(0,s.z2)();const i=e=>{let{children:t,...a}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("swiper-container",{"auto-height":"true","watch-overflow":!1,...a,children:t}),a.showCustomArrow?a.customArrow:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"swiper-button-prev swiper__arrow--prev ts_slider_arrow-prev",children:(0,r.jsx)("div",{className:"swiperArrow_inner",children:(0,r.jsx)("div",{className:"tb__icon tb-chevron-left",children:(0,r.jsx)("div",{})})})}),(0,r.jsx)("div",{className:"swiper-button-next swiper__arrow--next ts_slider_arrow-next",onClick:a.hasMoreData&&a.loaderData.isShowMoreLoading?null:a.onUpdateData,children:a.hasMoreData&&a.loaderData.isShowMoreLoading?(0,r.jsxs)("svg",{width:"26px",height:"26px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:"uil-ring-alt",children:[(0,r.jsx)("rect",{x:"0",y:"0",width:"100",height:"100",fill:"none",className:"bk"}),(0,r.jsx)("circle",{cx:"50",cy:"50",r:"40",stroke:"#afafb7",fill:"none",strokeWidth:"10",strokeLinecap:"round"}),(0,r.jsxs)("circle",{cx:"50",cy:"50",r:"40",stroke:"#000000",fill:"none",strokeWidth:"6",strokeLinecap:"round",children:[(0,r.jsx)("animate",{attributeName:"stroke-dashoffset",dur:"2s",repeatCount:"indefinite",from:"0",to:"502"}),(0,r.jsx)("animate",{attributeName:"stroke-dasharray",dur:"2s",repeatCount:"indefinite",values:"150.6 100.4;1 250;150.6 100.4"})]})]}):(0,r.jsx)("div",{className:"swiperArrow_inner",children:(0,r.jsx)("div",{className:"tb__icon tb-chevron-right",children:(0,r.jsx)("div",{})})})})]})]})}},9031:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});var s=a(47313),r=a(59204),i=a(46417);const o=s.lazy((()=>a.e(9849).then(a.bind(a,39849))));class l extends s.PureComponent{render(){const{modalPop:e,appData:t}=this.props;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(o,{wall:t.wall,wallId:t.wall.Wall.id,feeds:t.feeds})})}}const n=(0,r.$j)((e=>({modalPop:e.modalPop,appData:e.appData,loaderData:e.loaderData})))(l)},33599:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var s=a(47313),r=a(2651),i=(a(9031),a(46417));class o extends s.PureComponent{render(){const{dataArr:e,indexNo:t,completeDataObject:a,wall:s,onSiteUploadShow:o,cardWidth:l,largeDiv:n,smallDiv:d,handleAllImageError:h}=this.props,c=s.ThemeRule.highlightPosition,p=t<3?"1":"0",u={width:n+"%",float:"0"==p?"right"==c?"right":"left":"right"==c?"left":"right"},m={width:d+"%",float:"right"==c?"left":"right"};return(0,i.jsx)("div",{className:"ts_gs_post_row",children:e&&e.length>0?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"ts_gs_post_large",style:u,children:[" ",(0,i.jsx)(r.Z,{className:"ts_gs_post_wrapper",itemData:a[e[0]],cardWidth:l,itemId:a[e[0]].id,fullWidth:!0,...this.props})," "]}),(0,i.jsxs)("div",{className:"ts_gs_post_small",style:m,children:[e&&e.length>0?e.map(((e,t)=>{const s=a[e];return 0==t?"":(0,i.jsx)(r.Z,{className:"ts_gs_post_wrapper",itemData:s,handleAllImageError:h,cardWidth:l,fullWidth:!1,itemId:s.id,...this.props},"post_id_".concat(s.id))})):null," "]})]}):""})}}var l=a(17739),n=a(73763),d=a(59204),h=a(54771);class c extends s.PureComponent{constructor(){super(...arguments),this.allImageQueue=[],this.state={cardWidth:null,largeDiv:null,smallDiv:null,allFirstImage:!1},this.requestData=()=>{const{wall:e,appendData:t,hasMoreData:a,loaderData:s}=this.props,r=e.ThemeRule.numberOfPosts,i=Math.floor(Date.now()/1e3);a&&!s.isShowMoreLoading&&this.props.getDataNextSteps(e.Wall.id,i,r,t.networkID,t.after,t.heightEvent)},this.onCollageDataFormation=e=>{const{wall:t}=e;var a=document.querySelector(".taggshopContainer")?document.querySelector(".taggshopContainer").clientWidth:"";const s=t.ThemeRule.numberOfCoumn,{cardWidth:r,largeDiv:i,smallDiv:o}=(0,l.nf)(a,s,t.Personalization.commerceTheme);this.setState({cardWidth:r,largeDiv:i,smallDiv:o})},this.onUpdateData=()=>{setTimeout((()=>this.requestData()),1e3)},this.handleAllImageError=e=>{try{const t=e.target.getAttribute("data-item-id");this.allImageQueue.push({src:t,e:e}),this.state.allFirstImage||this.processAllImageQueue()}catch(t){}},this.processAllImageQueue=async()=>{if(this.allImageQueue.length){this.setState({allFirstImage:!0});const{src:e,e:t}=this.allImageQueue[0];e&&(0,l.bO)(t,this.nextProcessAllImageQueue)}},this.nextProcessAllImageQueue=()=>{try{this.allImageQueue.shift(),this.processAllImageQueue()}catch(e){}}}componentDidMount(){const e=document.querySelector("swiper-container");setTimeout((()=>{e.initialize()}),500),this.onCollageDataFormation(this.props);const{wall:t,appendData:a}=this.props;a&&t.Personalization.autoScrollStatus&&window.addEventListener("scroll",(()=>{let e=document.getElementById("scrlBarComanW");var t=window.innerHeight+window.scrollY;e.scrollHeight-10<t&&setTimeout((()=>this.requestData()),1e3)}))}render(){const{cardWidth:e}=this.state,{wall:t,newPostData:a,loaderData:s,hasMoreData:r}=this.props,n=t.UserRule.on_site_upload&&(!window.isEditor||(0,l.G)());return(0,i.jsx)("div",{className:"tb_gst_post_container",id:"ts_theme_container",children:(0,i.jsx)(h.default,{ref:this.secondaryRef,autoplay:"".concat(1===t.ThemeRule.slidePost),"slides-per-view":"2.5",navigation:JSON.stringify({nextEl:".swiper-button-next",prevEl:".swiper-button-prev",disabledClass:"swiper-button-none"}),breakpoints:JSON.stringify({1920:{slidesPerView:4},1601:{slidesPerView:3},1367:{slidesPerView:3},768:{slidesPerView:2},767:{slidesPerView:1},0:{slidesPerView:1}}),"initial-slide":"0","long-swipes-ratio":.01,"long-swipes-ms":100,hasMoreData:r,loaderData:s,onUpdateData:this.onUpdateData,children:a&&a.length>0?a.map(((t,a)=>{const s=0===a&&n&&2===t.length;return 3===t.length||s?(0,i.jsx)("swiper-slide",{children:(0,i.jsx)(o,{dataArr:t,handleAllImageError:this.handleAllImageError,onSiteUploadShow:s,indexNo:a<6?a:"0",...this.props,cardWidth:e,largeDiv:66.66,smallDiv:33.33},"post_id_".concat(a))},"splide_Id".concat(a)):""})):null})})}}const p=(0,d.$j)((e=>{const{appData:t}=e;return{appData:t,loaderData:e.loaderData,newPostData:t.newPostData,appendData:t.postData.appendData,hasMoreData:!t.postData.hasMoreData[0]||!1!==t.postData.hasMoreData[0].hasMoreData&&(!t.postData.hasMoreData[t.postData.appendData.networkID]||t.postData.hasMoreData[t.postData.appendData.networkID].hasMoreData)}}),(e=>({getDataNextSteps:(t,a,s,r,i,o,l)=>e((0,n.Sx)(t,a,s,r,i,o,l)),showPopUP:t=>e((0,n.Bm)(t))})))(c)},34041:(e,t,a)=>{a.d(t,{Z:()=>i});const s="Window variable not found",r="Timeout exception",i=(e,t)=>new Promise(((a,i)=>{if("undefined"===typeof window)return i(s);let o=null;const l=new Image;l.addEventListener("load",(()=>{o&&clearTimeout(o),a({width:l.naturalWidth,height:l.naturalHeight})})),l.addEventListener("error",(e=>{o&&clearTimeout(o),i("".concat(e.type,": ").concat(e.message))})),l.src=e,t&&(o=setTimeout((()=>i(r)),t))}))}}]);