"use strict";(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[5391],{79880:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var s=a(47313),o=a(2651),i=a(46417);class r extends s.PureComponent{render(){const{dataArr:e,completeDataObject:t,cardWidth:a,handleAllImageError:s}=this.props;return(0,i.jsx)("div",{className:"ts_ms_post_row",children:e&&e.length>0?e&&e.length>0?e.map(((e,r)=>{const l=t[e];return(0,i.jsx)(o.Z,{handleAllImageError:s,className:"ts_ms_post_wrapper",itemData:l,cardWidth:a,fullWidth:!1,itemId:l.id,...this.props},"post_idMs_".concat(r))})):null:""})}}var l=a(59204),n=a(17739),d=a(73763);const h=(0,s.lazy)((()=>Promise.all([a.e(8215),a.e(9885),a.e(4771)]).then(a.bind(a,54771))));class p extends s.PureComponent{constructor(){super(...arguments),this.allImageQueue=[],this.state={data:[],cardWidth:null,loadMore:!1,allFirstImage:!1,showSlides:!0,isMobile:!1},this.onUpdateData=()=>{setTimeout((()=>this.requestData()),1e3)},this.requestData=()=>{const{wall:e,appendData:t,hasMoreData:a,loaderData:s}=this.props,o=e.ThemeRule.numberOfPosts,i=Math.floor(Date.now()/1e3);a&&!s.isShowMoreLoading&&this.props.getDataNextSteps(e.Wall.id,i,o,t.networkID,t.after,t.heightEvent)},this.onSliderDataFormation=e=>{const{wall:t,postData:a}=e,s=t.ThemeRule.multiRow,o=(0,n.td)(a,s);this.setState({data:o})},this.preloadImages=async e=>{e&&e.length&&e.forEach((async e=>{const t=this.props.completeDataObject[e];await this.preloadImage(t.postFileNew)}))},this.preloadImage=e=>new Promise(((t,a)=>{const s=new Image;s.src=e,s.style.display="none",s.onload=()=>{document.body.removeChild(s),t()},s.onerror=a,document.body.appendChild(s)})),this.handleAllImageError=e=>{try{const t=e.target.getAttribute("data-item-id");this.allImageQueue.push({src:t,e:e}),this.state.allFirstImage||this.processAllImageQueue()}catch(t){}},this.processAllImageQueue=async()=>{if(this.allImageQueue.length){this.setState({allFirstImage:!0});const{src:e,e:t}=this.allImageQueue[0];e&&(0,n.bO)(t,this.nextProcessAllImageQueue)}},this.nextProcessAllImageQueue=()=>{try{this.allImageQueue.shift(),this.processAllImageQueue()}catch(e){}},this.DetectIphone=()=>{var e=navigator.userAgent.toLowerCase();e.search("iphone")>-1||e.search("android")>-1?this.setState({isMobile:!0}):this.setState({isMobile:!1})}}componentDidMount(){setTimeout((()=>this.setState({loadMore:!0})),500),this.DetectIphone(),this.preloadImages(this.props.postData),this.onSliderDataFormation(this.props)}render(){var e;const{postData:t,hasMoreData:a,wall:o,loaderData:l,newPostData:n}=this.props,d=o.ThemeRule.numberOfCoumn,p=o.ThemeRule.mobileColumn,c=this.props.appData.wall.User.id,m={2400:{slidesPerView:"".concat(0===d?9:d)},2200:{slidesPerView:"".concat(0===d?8:d)},1800:{slidesPerView:"".concat(0===d?7:d)},1500:{slidesPerView:"".concat(0===d?6:d)},1367:{slidesPerView:"".concat(0===d?5:d)},1200:{slidesPerView:"".concat(0===d?4:d)},768:{slidesPerView:"".concat(0===d?3:d)},576:{slidesPerView:"".concat(0===d?2:d)},0:{slidesPerView:"".concat(0===p?1:p)}};return(0,i.jsx)("div",{className:"ts_ms_post_container",id:"ts_theme_container ",style:this.state.showSlides?{}:{visibility:"hidden"},children:(16677===c&&"product"===window.dataFilterType?t&&t.length>=5:t&&t.length)?(0,i.jsx)(s.Suspense,{fallback:(0,i.jsx)("div",{children:"Loading..."}),children:(0,i.jsx)(h,{autoplay:"".concat(1==o.ThemeRule.slidePost),"slides-per-view":"".concat(0===d?6:d),navigation:JSON.stringify({nextEl:".swiper-button-next",prevEl:".swiper-button-prev",disabledClass:"swiper-button-none"}),breakpoints:JSON.stringify(m),"css-mode":this.state.isMobile,"passive-listeners":!1,"long-swipes-ratio":.01,"long-swipes-ms":100,hasMoreData:a,loaderData:l,onUpdateData:this.onUpdateData,children:n&&n.length>0?137350===(null===o||void 0===o||null===(e=o.User)||void 0===e?void 0:e.id)?t&&t.length>3?n.map(((e,t)=>(0,i.jsx)("swiper-slide",{children:(0,i.jsx)(r,{handleAllImageError:this.handleAllImageError,dataArr:e,...this.props},"post_id_ms-1-{index}")},"mn-1-".concat(t)))):null:n.map(((e,t)=>(0,i.jsx)("swiper-slide",{children:(0,i.jsx)(r,{handleAllImageError:this.handleAllImageError,dataArr:e,...this.props},"post_id_ms-2-".concat(t))},"mn-2-".concat(t)))):null})}):null})}}const c=(0,l.$j)((e=>{const{appData:t}=e;return{appData:t,loaderData:e.loaderData,newPostData:t.newPostData,appendData:t.postData.appendData,hasMoreData:!t.postData.hasMoreData[0]||!1!==t.postData.hasMoreData[0].hasMoreData&&(!t.postData.hasMoreData[t.postData.appendData.networkID]||t.postData.hasMoreData[t.postData.appendData.networkID].hasMoreData)}}),(e=>({getDataNextSteps:(t,a,s,o,i,r,l)=>e((0,d.Sx)(t,a,s,o,i,r,l)),showPopUP:t=>e((0,d.Bm)(t))})))(p)},34041:(e,t,a)=>{a.d(t,{Z:()=>i});const s="Window variable not found",o="Timeout exception",i=(e,t)=>new Promise(((a,i)=>{if("undefined"===typeof window)return i(s);let r=null;const l=new Image;l.addEventListener("load",(()=>{r&&clearTimeout(r),a({width:l.naturalWidth,height:l.naturalHeight})})),l.addEventListener("error",(e=>{r&&clearTimeout(r),i("".concat(e.type,": ").concat(e.message))})),l.src=e,t&&(r=setTimeout((()=>i(o)),t))}))}}]);