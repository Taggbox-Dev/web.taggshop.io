"use strict";(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[5391,4771],{54771:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});a(47313);var s=a(12488),r=(a(9223),a(46417));(0,s.z2)();const i=e=>{let{children:t,...a}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("swiper-container",{"auto-height":"true","watch-overflow":!1,...a,children:t}),a.showCustomArrow?a.customArrow:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"swiper-button-prev swiper__arrow--prev ts_slider_arrow-prev",children:(0,r.jsx)("div",{className:"swiperArrow_inner",children:(0,r.jsx)("div",{className:"tb__icon tb-chevron-left",children:(0,r.jsx)("div",{})})})}),(0,r.jsx)("div",{className:"swiper-button-next swiper__arrow--next ts_slider_arrow-next",onClick:a.hasMoreData&&a.loaderData.isShowMoreLoading?null:a.onUpdateData,children:a.hasMoreData&&a.loaderData.isShowMoreLoading?(0,r.jsxs)("svg",{width:"26px",height:"26px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:"uil-ring-alt",children:[(0,r.jsx)("rect",{x:"0",y:"0",width:"100",height:"100",fill:"none",className:"bk"}),(0,r.jsx)("circle",{cx:"50",cy:"50",r:"40",stroke:"#afafb7",fill:"none",strokeWidth:"10",strokeLinecap:"round"}),(0,r.jsxs)("circle",{cx:"50",cy:"50",r:"40",stroke:"#000000",fill:"none",strokeWidth:"6",strokeLinecap:"round",children:[(0,r.jsx)("animate",{attributeName:"stroke-dashoffset",dur:"2s",repeatCount:"indefinite",from:"0",to:"502"}),(0,r.jsx)("animate",{attributeName:"stroke-dasharray",dur:"2s",repeatCount:"indefinite",values:"150.6 100.4;1 250;150.6 100.4"})]})]}):(0,r.jsx)("div",{className:"swiperArrow_inner",children:(0,r.jsx)("div",{className:"tb__icon tb-chevron-right",children:(0,r.jsx)("div",{})})})})]})]})}},79880:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var s=a(47313),r=a(2651),i=a(46417);class o extends s.PureComponent{render(){const{dataArr:e,completeDataObject:t,cardWidth:a,handleAllImageError:s}=this.props;return(0,i.jsx)("div",{className:"ts_ms_post_row",children:e&&e.length>0?e&&e.length>0?e.map(((e,o)=>{const n=t[e];return(0,i.jsx)(r.Z,{handleAllImageError:s,className:"ts_ms_post_wrapper",itemData:n,cardWidth:a,fullWidth:!1,itemId:n.id,...this.props},"post_idMs_".concat(o))})):null:""})}}var n=a(59204),l=a(17739),d=a(73763),h=a(54771);class c extends s.PureComponent{constructor(){super(...arguments),this.allImageQueue=[],this.state={data:[],cardWidth:null,loadMore:!1,allFirstImage:!1,showSlides:!0,isMobile:!1},this.onUpdateData=()=>{setTimeout((()=>this.requestData()),1e3)},this.requestData=()=>{const{wall:e,appendData:t,hasMoreData:a,loaderData:s}=this.props,r=e.ThemeRule.numberOfPosts,i=Math.floor(Date.now()/1e3);a&&!s.isShowMoreLoading&&this.props.getDataNextSteps(e.Wall.id,i,r,t.networkID,t.after,t.heightEvent)},this.onSliderDataFormation=e=>{const{wall:t,postData:a}=e,s=t.ThemeRule.multiRow,r=(0,l.td)(a,s);this.setState({data:r})},this.preloadImages=async e=>{e&&e.length&&e.forEach((async e=>{const t=this.props.completeDataObject[e];await this.preloadImage(t.postFileNew)}))},this.preloadImage=e=>new Promise(((t,a)=>{const s=new Image;s.src=e,s.style.display="none",s.onload=()=>{document.body.removeChild(s),t()},s.onerror=a,document.body.appendChild(s)})),this.handleAllImageError=e=>{try{const t=e.target.getAttribute("data-item-id");this.allImageQueue.push({src:t,e:e}),this.state.allFirstImage||this.processAllImageQueue()}catch(t){}},this.processAllImageQueue=async()=>{if(this.allImageQueue.length){this.setState({allFirstImage:!0});const{src:e,e:t}=this.allImageQueue[0];e&&(0,l.bO)(t,this.nextProcessAllImageQueue)}},this.nextProcessAllImageQueue=()=>{try{this.allImageQueue.shift(),this.processAllImageQueue()}catch(e){}},this.DetectIphone=()=>{var e=navigator.userAgent.toLowerCase();e.search("iphone")>-1||e.search("android")>-1?this.setState({isMobile:!0}):this.setState({isMobile:!1})}}componentDidMount(){setTimeout((()=>this.setState({loadMore:!0})),500),this.DetectIphone(),this.preloadImages(this.props.postData),this.onSliderDataFormation(this.props)}render(){var e;const{postData:t,hasMoreData:a,wall:r,loaderData:n,newPostData:l}=this.props,d=r.ThemeRule.numberOfCoumn,c=r.ThemeRule.mobileColumn,p=this.props.appData.wall.User.id,m={2400:{slidesPerView:"".concat(0===d?9:d)},2200:{slidesPerView:"".concat(0===d?8:d)},1800:{slidesPerView:"".concat(0===d?7:d)},1500:{slidesPerView:"".concat(0===d?6:d)},1367:{slidesPerView:"".concat(0===d?5:d)},1200:{slidesPerView:"".concat(0===d?4:d)},768:{slidesPerView:"".concat(0===d?3:d)},576:{slidesPerView:"".concat(0===d?2:d)},0:{slidesPerView:"".concat(0===c?1:c)}};return(0,i.jsx)("div",{className:"ts_ms_post_container",id:"ts_theme_container ",style:this.state.showSlides?{}:{visibility:"hidden"},children:(16677===p&&"product"===window.dataFilterType?t&&t.length>=5:t&&t.length)?(0,i.jsx)(s.Suspense,{fallback:(0,i.jsx)("div",{children:"Loading..."}),children:(0,i.jsx)(h.default,{autoplay:"".concat(1==r.ThemeRule.slidePost),"slides-per-view":"".concat(0===d?6:d),navigation:JSON.stringify({nextEl:".swiper-button-next",prevEl:".swiper-button-prev",disabledClass:"swiper-button-none"}),breakpoints:JSON.stringify(m),"css-mode":this.state.isMobile,"passive-listeners":!1,"long-swipes-ratio":.01,"long-swipes-ms":100,hasMoreData:a,loaderData:n,onUpdateData:this.onUpdateData,children:l&&l.length>0?137350===(null===r||void 0===r||null===(e=r.User)||void 0===e?void 0:e.id)?t&&t.length>3?l.map(((e,t)=>(0,i.jsx)("swiper-slide",{children:(0,i.jsx)(o,{handleAllImageError:this.handleAllImageError,dataArr:e,...this.props},"post_id_ms-1-{index}")},"mn-1-".concat(t)))):null:l.map(((e,t)=>(0,i.jsx)("swiper-slide",{children:(0,i.jsx)(o,{handleAllImageError:this.handleAllImageError,dataArr:e,...this.props},"post_id_ms-2-".concat(t))},"mn-2-".concat(t)))):null})}):null})}}const p=(0,n.$j)((e=>{const{appData:t}=e;return{appData:t,loaderData:e.loaderData,newPostData:t.newPostData,appendData:t.postData.appendData,hasMoreData:!t.postData.hasMoreData[0]||!1!==t.postData.hasMoreData[0].hasMoreData&&(!t.postData.hasMoreData[t.postData.appendData.networkID]||t.postData.hasMoreData[t.postData.appendData.networkID].hasMoreData)}}),(e=>({getDataNextSteps:(t,a,s,r,i,o,n)=>e((0,d.Sx)(t,a,s,r,i,o,n)),showPopUP:t=>e((0,d.Bm)(t))})))(c)},34041:(e,t,a)=>{a.d(t,{Z:()=>i});const s="Window variable not found",r="Timeout exception",i=(e,t)=>new Promise(((a,i)=>{if("undefined"===typeof window)return i(s);let o=null;const n=new Image;n.addEventListener("load",(()=>{o&&clearTimeout(o),a({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(e=>{o&&clearTimeout(o),i("".concat(e.type,": ").concat(e.message))})),n.src=e,t&&(o=setTimeout((()=>i(r)),t))}))}}]);