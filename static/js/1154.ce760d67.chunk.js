"use strict";(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[1154,7463],{37463:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});a(47313);var s=a(12488),r=(a(9223),a(46417));(0,s.z2)();const o=e=>{let{children:t,...a}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("swiper-container",{"auto-height":"true","watch-overflow":!1,...a,children:t}),a.showCustomArrow?a.customArrow:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"swiper-button-prev swiper__arrow--prev ts_slider_arrow-prev",children:(0,r.jsx)("div",{className:"swiperArrow_inner",children:(0,r.jsx)("div",{className:"tb__icon tb-chevron-left",children:(0,r.jsx)("div",{})})})}),(0,r.jsx)("div",{className:"swiper-button-next swiper__arrow--next ts_slider_arrow-next",onClick:a.hasMoreData&&a.loaderData.isShowMoreLoading?null:a.onUpdateData,children:a.hasMoreData&&a.loaderData.isShowMoreLoading?(0,r.jsxs)("svg",{width:"26px",height:"26px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:"uil-ring-alt",children:[(0,r.jsx)("rect",{x:"0",y:"0",width:"100",height:"100",fill:"none",className:"bk"}),(0,r.jsx)("circle",{cx:"50",cy:"50",r:"40",stroke:"#afafb7",fill:"none",strokeWidth:"10",strokeLinecap:"round"}),(0,r.jsxs)("circle",{cx:"50",cy:"50",r:"40",stroke:"#000000",fill:"none",strokeWidth:"6",strokeLinecap:"round",children:[(0,r.jsx)("animate",{attributeName:"stroke-dashoffset",dur:"2s",repeatCount:"indefinite",from:"0",to:"502"}),(0,r.jsx)("animate",{attributeName:"stroke-dasharray",dur:"2s",repeatCount:"indefinite",values:"150.6 100.4;1 250;150.6 100.4"})]})]}):(0,r.jsx)("div",{className:"swiperArrow_inner",children:(0,r.jsx)("div",{className:"tb__icon tb-chevron-right",children:(0,r.jsx)("div",{})})})})]})]})}},95649:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var s=a(47313),r=a(59204),o=a(73763),i=a(17739),n=a(2651),l=a(37463),d=a(46417);class c extends s.PureComponent{constructor(e){super(e),this.allImageQueue=[],this.state={cardCount:null,allFirstImage:!1,showSlides:!1},this.preloadImages=async e=>{e&&e.length&&e.forEach((async e=>{const t=this.props.completeDataObject[e];await this.preloadImage(t.postFileNew)}))},this.preloadImage=e=>new Promise(((t,a)=>{const s=new Image;s.src=e,s.style.display="none",s.onload=()=>{document.body.removeChild(s),t()},s.onerror=a,document.body.appendChild(s)})),this.onUpdateData=()=>{setTimeout((()=>this.requestData()),1e3)},this.requestData=()=>{const{wall:e,appendData:t,hasMoreData:a,loaderData:s}=this.props,r=e.ThemeRule.numberOfPosts,o=Math.floor(Date.now()/1e3);a&&!s.isShowMoreLoading&&this.props.getDataNextSteps(e.Wall.id,o,r,t.networkID,t.after,t.heightEvent)},this.handleAllImageError=e=>{try{const t=e.target.getAttribute("data-item-id");this.allImageQueue.includes({src:t,e:e})||this.allImageQueue.push({src:t,e:e}),this.state.allFirstImage||this.processAllImageQueue()}catch(t){}},this.processAllImageQueue=async()=>{if(this.allImageQueue.length){this.setState({allFirstImage:!0});const{src:e,e:t}=this.allImageQueue[0];e&&(0,i.bO)(t,this.nextProcessAllImageQueue)}},this.nextProcessAllImageQueue=()=>{try{this.allImageQueue.shift(),this.processAllImageQueue()}catch(e){}}}componentDidMount(){this.preloadImages(this.props.postData)}render(){const{completeDataObject:e,adjustWidth:t,hasMoreData:a,newPostData:s,loaderData:r,wall:o}=this.props;var i=document.querySelector(".taggshopContainer")?document.querySelector(".taggshopContainer").clientWidth:window.innerWidth;const c=parseInt(i/o.Personalization.minimumPostWidth);return(0,d.jsx)("div",{className:"ts_cs_post_container",id:window.isEditor?"isEditorCls ts_theme_container":"ts_theme_container",children:(0,d.jsx)(l.default,{"slides-per-view":"".concat(c),navigation:JSON.stringify({nextEl:".swiper-button-next",prevEl:".swiper-button-prev",disabledClass:"swiper-button-none"}),"initial-slide":"0","long-swipes-ratio":.01,"long-swipes-ms":100,hasMoreData:a,loaderData:r,onUpdateData:this.onUpdateData,children:s&&s.length>0?s.map(((a,s)=>{const r=e[a];return(0,d.jsx)("swiper-slide",{children:(0,d.jsx)(n.Z,{className:"ts_cs_post_wrapper",handleAllImageError:this.handleAllImageError,itemData:r,itemIndex:s,adjustWidth:t,...this.props},"post_Id_".concat(s))},"spli".concat(s))})):null})})}}const h=(0,r.$j)((e=>{const{appData:t}=e;return{appData:t,loaderData:e.loaderData,newPostData:t.newPostData,appendData:t.postData.appendData,hasMoreData:!t.postData.hasMoreData[0]||!1!==t.postData.hasMoreData[0].hasMoreData&&(!t.postData.hasMoreData[t.postData.appendData.networkID]||t.postData.hasMoreData[t.postData.appendData.networkID].hasMoreData)}}),(e=>({getDataNextSteps:(t,a,s,r,i,n,l)=>e((0,o.Sx)(t,a,s,r,i,n,l)),showPopUP:t=>e((0,o.Bm)(t))})))(c)},34041:(e,t,a)=>{a.d(t,{Z:()=>o});const s="Window variable not found",r="Timeout exception",o=(e,t)=>new Promise(((a,o)=>{if("undefined"===typeof window)return o(s);let i=null;const n=new Image;n.addEventListener("load",(()=>{i&&clearTimeout(i),a({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(e=>{i&&clearTimeout(i),o("".concat(e.type,": ").concat(e.message))})),n.src=e,t&&(i=setTimeout((()=>o(r)),t))}))}}]);