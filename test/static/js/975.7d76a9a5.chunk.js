"use strict";(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[975],{30137:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var s=a(47313),i=a(59204),r=a(73763),o=a(17739),n=a(2651),l=a(12488),c=a(46417);(0,l.z2)();class d extends s.PureComponent{constructor(e){super(e),this.allImageQueue=[],this.state={allFirstImage:!1,showSlides:!1},this.onUpdateData=()=>{setTimeout((()=>this.requestData()),1e3)},this.requestData=()=>{const{wall:e,appendData:t,hasMoreData:a,loaderData:s}=this.props,i=e.ThemeRule.numberOfPosts,r=Math.floor(Date.now()/1e3);a&&!s.isShowMoreLoading&&this.props.getDataNextSteps(e.Wall.id,r,i,t.networkID,t.after,t.heightEvent)},this.onLoadPopup=(e,t)=>{const{wall:a,postData:s,languageSetting:i,completeDataObject:n,wallId:l,webFilters:c}=this.props;let d=s.map((e=>n[e])),h=d.filter((e=>!String(e.id).includes("free_add_"))),p=(0,o.E6)(h,t.id,e);1===a.Personalization.postFeatured&&((0,o.st)("add"),this.props.showPopUP({type:"post",card:t,idArray:h,index:p,viewOnText:i.viewOnText,shareText:i.shareText,personalization:a.Personalization,ThemeRule:a.ThemeRule,webFilters:c,UserRule:a.UserRule,wall:a})),(0,r.S5)({action:2,wall:l,feed:t.feedId,post:t.referenceId})},this.handleAllImageError=e=>{try{const t=e.target.getAttribute("data-item-id");this.allImageQueue.push({src:t,e:e}),this.state.allFirstImage||this.processAllImageQueue()}catch(t){}},this.processAllImageQueue=()=>{if(this.allImageQueue.length){this.setState({allFirstImage:!0});const{src:e,e:t}=this.allImageQueue[0];e&&(0,o.bO)(t,this.nextProcessAllImageQueue)}},this.nextProcessAllImageQueue=()=>{try{this.allImageQueue.shift(),this.processAllImageQueue()}catch(e){}},this.secondaryRef=s.createRef()}componentDidMount(){const e=document.querySelector("swiper-container");setTimeout((()=>{e.initialize(),this.setState({showSlides:!0})}),500)}render(){const{completeDataObject:e,hasMoreData:t,wall:a,newPostData:s,loaderData:i}=this.props,r=a.Personalization.columnCount,o=a.ThemeRule.mobileColumn,l={2400:{slidesPerView:"".concat(0===r?9:r)},2200:{slidesPerView:"".concat(0===r?8:r)},1800:{slidesPerView:"".concat(0===r?7:r)},1500:{slidesPerView:"".concat(0===r?6:r)},1367:{slidesPerView:"".concat(0===r?5:r)},1200:{slidesPerView:"".concat(0===r?4:r)},768:{slidesPerView:"".concat(0===r?3:r)},576:{slidesPerView:"".concat(0===r?2:r)},0:{slidesPerView:"".concat(0===o?1:o)}};return(0,c.jsxs)("div",{className:"ts_csl_post_container",id:"ts_theme_container",style:this.state.showSlides?{}:{visibility:"hidden"},children:[(0,c.jsx)("swiper-container",{ref:this.secondaryRef,"slides-per-view":"".concat(0===r?6:r),navigation:JSON.stringify({nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}),breakpoints:JSON.stringify(l),init:"false","active-index":"0","initial-slide":"0","long-swipes-ratio":.01,"long-swipes-ms":100,children:s&&s.length>0?s.map(((t,a)=>{const s=e[t];return(0,c.jsx)("swiper-slide",{children:(0,c.jsx)(n.Z,{className:"ts_csl_post_wrapper",handleAllImageError:this.handleAllImageError,itemData:s,itemIndex:a,...this.props},"post_id_".concat(a))},"cs".concat(a))})):null}),(0,c.jsx)("div",{className:"swiper-button-prev swiper__arrow--prev ts_slider_arrow-prev",children:(0,c.jsx)("div",{className:"swiperArrow_inner",children:(0,c.jsx)("div",{className:"tb__icon tb-chevron-left",children:(0,c.jsx)("div",{})})})}),(0,c.jsx)("div",{className:"swiper-button-next swiper__arrow--next ts_slider_arrow-next",onClick:t&&i.isShowMoreLoading?null:this.onUpdateData,children:t&&i.isShowMoreLoading?(0,c.jsxs)("svg",{width:"26px",height:"26px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:"uil-ring-alt",children:[(0,c.jsx)("rect",{x:"0",y:"0",width:"100",height:"100",fill:"none",className:"bk"}),(0,c.jsx)("circle",{cx:"50",cy:"50",r:"40",stroke:"#afafb7",fill:"none",strokeWidth:"10",strokeLinecap:"round"}),(0,c.jsxs)("circle",{cx:"50",cy:"50",r:"40",stroke:"#000000",fill:"none",strokeWidth:"6",strokeLinecap:"round",children:[(0,c.jsx)("animate",{attributeName:"stroke-dashoffset",dur:"2s",repeatCount:"indefinite",from:"0",to:"502"}),(0,c.jsx)("animate",{attributeName:"stroke-dasharray",dur:"2s",repeatCount:"indefinite",values:"150.6 100.4;1 250;150.6 100.4"})]})]}):(0,c.jsx)("div",{className:"swiperArrow_inner",children:(0,c.jsx)("div",{className:"tb__icon tb-chevron-right",children:(0,c.jsx)("div",{})})})})]})}}const h=(0,i.$j)((e=>{const{appData:t}=e;return{appData:t,loaderData:e.loaderData,newPostData:t.newPostData,appendData:t.postData.appendData,hasMoreData:!t.postData.hasMoreData[0]||!1!==t.postData.hasMoreData[0].hasMoreData&&(!t.postData.hasMoreData[t.postData.appendData.networkID]||t.postData.hasMoreData[t.postData.appendData.networkID].hasMoreData)}}),(e=>({getDataNextSteps:(t,a,s,i,o,n,l)=>e((0,r.Sx)(t,a,s,i,o,n,l)),showPopUP:t=>e((0,r.Bm)(t))})))(d)},34041:(e,t,a)=>{a.d(t,{Z:()=>r});const s="Window variable not found",i="Timeout exception",r=(e,t)=>new Promise(((a,r)=>{if("undefined"===typeof window)return r(s);let o=null;const n=new Image;n.addEventListener("load",(()=>{o&&clearTimeout(o),a({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(e=>{o&&clearTimeout(o),r("".concat(e.type,": ").concat(e.message))})),n.src=e,t&&(o=setTimeout((()=>r(i)),t))}))}}]);