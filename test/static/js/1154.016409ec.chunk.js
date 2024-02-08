"use strict";(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[1154],{95649:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var s=a(47313),i=a(59204),r=a(73763),o=a(17739),n=a(2651),l=a(46417);const d=(0,s.lazy)((()=>Promise.all([a.e(8215),a.e(2488),a.e(162)]).then(a.bind(a,10162))));class h extends s.PureComponent{constructor(e){super(e),this.allImageQueue=[],this.state={cardCount:null,widnowWidth:document.querySelector(".taggshopContainer")?document.querySelector(".taggshopContainer").clientWidth:"",allFirstImage:!1,showSlides:!1},this.preloadImages=async e=>{e&&e.length&&e.forEach((async e=>{const t=this.props.completeDataObject[e];await this.preloadImage(t.postFileNew)}))},this.preloadImage=e=>new Promise(((t,a)=>{const s=new Image;s.src=e,s.style.display="none",s.onload=()=>{console.log("removed"),document.body.removeChild(s),t()},s.onerror=a,document.body.appendChild(s)})),this.onCardCountFormation=()=>{const{wall:e}=this.props,{widnowWidth:t}=this.state,a=e.Personalization.minimumPostWidth,s=parseInt(t/a);this.setState({cardCount:s})},this.onUpdateData=()=>{setTimeout((()=>this.requestData()),1e3)},this.requestData=()=>{const{wall:e,appendData:t,hasMoreData:a,loaderData:s}=this.props,i=e.ThemeRule.numberOfPosts,r=Math.floor(Date.now()/1e3);a&&!s.isShowMoreLoading&&this.props.getDataNextSteps(e.Wall.id,r,i,t.networkID,t.after,t.heightEvent)},this.handleAllImageError=e=>{try{const t=e.target.getAttribute("data-item-id");this.allImageQueue.push({src:t,e:e}),this.state.allFirstImage||this.processAllImageQueue()}catch(t){}},this.processAllImageQueue=()=>{if(this.allImageQueue.length){this.setState({allFirstImage:!0});const{src:e,e:t}=this.allImageQueue[0];e&&(0,o.bO)(t,this.nextProcessAllImageQueue)}},this.nextProcessAllImageQueue=()=>{try{this.allImageQueue.shift(),this.processAllImageQueue()}catch(e){}},this.secondaryRef=s.createRef()}componentDidMount(){this.onCardCountFormation(this.props),this.preloadImages(this.props.postData)}render(){const{completeDataObject:e,adjustWidth:t,hasMoreData:a,newPostData:i,loaderData:r}=this.props,{cardCount:o}=this.state;return(0,l.jsxs)("div",{className:"ts_cs_post_container",id:window.isEditor?"isEditorCls ts_theme_container":"ts_theme_container",children:[(0,l.jsx)(s.Suspense,{fallback:(0,l.jsx)("div",{children:"Loading..."}),children:(0,l.jsx)(d,{ref:this.secondaryRef,"slides-per-view":"".concat(o),navigation:JSON.stringify({nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}),breakpoints:JSON.stringify({2400:{slidesPerView:9},2200:{slidesPerView:8},1800:{slidesPerView:7},1500:{slidesPerView:6},1367:{slidesPerView:5},1200:{slidesPerView:4},768:{slidesPerView:3},576:{slidesPerView:2},575:{slidesPerView:1}}),"initial-slide":"0","long-swipes-ratio":.01,"long-swipes-ms":100,hasMoreData:a,loaderData:r,onUpdateData:this.onUpdateData,children:i&&i.length>0?i.map(((a,s)=>{const i=e[a];return(0,l.jsx)("swiper-slide",{children:(0,l.jsx)(n.Z,{className:"ts_cs_post_wrapper",handleAllImageError:this.handleAllImageError,itemData:i,itemIndex:s,adjustWidth:t,...this.props},"post_Id_".concat(s))},"spli".concat(s))})):null})}),(0,l.jsx)("div",{className:"swiper-button-prev swiper__arrow--prev ts_slider_arrow-prev",children:(0,l.jsx)("div",{className:"swiperArrow_inner",children:(0,l.jsx)("div",{className:"tb__icon tb-chevron-left",children:(0,l.jsx)("div",{})})})}),(0,l.jsx)("div",{className:"swiper-button-next swiper__arrow--next ts_slider_arrow-next",onClick:a&&r.isShowMoreLoading?null:this.onUpdateData,children:a&&r.isShowMoreLoading?(0,l.jsxs)("svg",{width:"26px",height:"26px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:"uil-ring-alt",children:[(0,l.jsx)("rect",{x:"0",y:"0",width:"100",height:"100",fill:"none",className:"bk"}),(0,l.jsx)("circle",{cx:"50",cy:"50",r:"40",stroke:"#afafb7",fill:"none",strokeWidth:"10",strokeLinecap:"round"}),(0,l.jsxs)("circle",{cx:"50",cy:"50",r:"40",stroke:"#000000",fill:"none",strokeWidth:"6",strokeLinecap:"round",children:[(0,l.jsx)("animate",{attributeName:"stroke-dashoffset",dur:"2s",repeatCount:"indefinite",from:"0",to:"502"}),(0,l.jsx)("animate",{attributeName:"stroke-dasharray",dur:"2s",repeatCount:"indefinite",values:"150.6 100.4;1 250;150.6 100.4"})]})]}):(0,l.jsx)("div",{className:"swiperArrow_inner",children:(0,l.jsx)("div",{className:"tb__icon tb-chevron-right",children:(0,l.jsx)("div",{})})})})]})}}const c=(0,i.$j)((e=>{const{appData:t}=e;return{appData:t,loaderData:e.loaderData,newPostData:t.newPostData,appendData:t.postData.appendData,hasMoreData:!t.postData.hasMoreData[0]||!1!==t.postData.hasMoreData[0].hasMoreData&&(!t.postData.hasMoreData[t.postData.appendData.networkID]||t.postData.hasMoreData[t.postData.appendData.networkID].hasMoreData)}}),(e=>({getDataNextSteps:(t,a,s,i,o,n,l)=>e((0,r.Sx)(t,a,s,i,o,n,l)),showPopUP:t=>e((0,r.Bm)(t))})))(h)},34041:(e,t,a)=>{a.d(t,{Z:()=>r});const s="Window variable not found",i="Timeout exception",r=(e,t)=>new Promise(((a,r)=>{if("undefined"===typeof window)return r(s);let o=null;const n=new Image;n.addEventListener("load",(()=>{o&&clearTimeout(o),a({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(e=>{o&&clearTimeout(o),r("".concat(e.type,": ").concat(e.message))})),n.src=e,t&&(o=setTimeout((()=>r(i)),t))}))}}]);