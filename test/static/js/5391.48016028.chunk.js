"use strict";(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[5391],{79880:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var s=a(47313),o=a(2651),l=a(46417);class i extends s.PureComponent{render(){const{dataArr:e,completeDataObject:t,cardWidth:a,handleAllImageError:s}=this.props;return(0,l.jsx)("div",{className:"ts_ms_post_row",children:e&&e.length>0?e&&e.length>0?e.map(((e,i)=>{const r=t[e];return(0,l.jsx)(o.Z,{handleAllImageError:s,className:"ts_ms_post_wrapper",itemData:r,cardWidth:a,fullWidth:!1,itemId:r.id,...this.props},"post_idMs_".concat(i))})):null:""})}}var r=a(59204),n=a(17739),d=a(73763);const h=(0,s.lazy)((()=>Promise.all([a.e(8215),a.e(9885),a.e(4771)]).then(a.bind(a,54771))));class p extends s.PureComponent{constructor(){super(...arguments),this.allImageQueue=[],this.state={data:[],cardWidth:null,loadMore:!1,allFirstImage:!1,showSlides:!0,isMobile:!1},this.onUpdateData=()=>{setTimeout((()=>this.requestData()),1e3)},this.requestData=()=>{const{wall:e,appendData:t,hasMoreData:a,loaderData:s}=this.props,o=e.ThemeRule.numberOfPosts,l=Math.floor(Date.now()/1e3);a&&!s.isShowMoreLoading&&this.props.getDataNextSteps(e.Wall.id,l,o,t.networkID,t.after,t.heightEvent)},this.onSliderDataFormation=e=>{const{wall:t,postData:a}=e,s=t.ThemeRule.multiRow,o=(0,n.td)(a,s);this.setState({data:o})},this.preloadImages=async e=>{e&&e.length&&e.forEach((async e=>{const t=this.props.completeDataObject[e];await this.preloadImage(t.postFileNew)}))},this.preloadImage=e=>new Promise(((t,a)=>{const s=new Image;s.src=e,s.style.display="none",s.onload=()=>{document.body.removeChild(s),t()},s.onerror=a,document.body.appendChild(s)})),this.handleAllImageError=e=>{try{const t=e.target.getAttribute("data-item-id");this.allImageQueue.push({src:t,e:e}),this.state.allFirstImage||this.processAllImageQueue()}catch(t){}},this.processAllImageQueue=async()=>{if(this.allImageQueue.length){this.setState({allFirstImage:!0});const{src:e,e:t}=this.allImageQueue[0];e&&(0,n.bO)(t,this.nextProcessAllImageQueue)}},this.nextProcessAllImageQueue=()=>{try{this.allImageQueue.shift(),this.processAllImageQueue()}catch(e){}},this.DetectIphone=()=>{var e=navigator.userAgent.toLowerCase();e.search("iphone")>-1||e.search("android")>-1?this.setState({isMobile:!0}):this.setState({isMobile:!1})}}componentDidMount(){setTimeout((()=>this.setState({loadMore:!0})),500),this.DetectIphone(),this.preloadImages(this.props.postData),this.onSliderDataFormation(this.props)}render(){var e,t,a,o;const{postData:r,hasMoreData:d,wall:p,loaderData:m,newPostData:c}=this.props,u=(p.ThemeRule.numberOfCoumn,p.ThemeRule.mobileColumn,this.props.appData.wall.User.id),D=(0,n.XR)(null===p||void 0===p||null===(e=p.ThemeRule)||void 0===e?void 0:e.mobileColumn,null===p||void 0===p||null===(t=p.ThemeRule)||void 0===t?void 0:t.numberOfCoumn,null===p||void 0===p||null===(a=p.Personalization)||void 0===a?void 0:a.commerceTheme);return(0,l.jsx)("div",{className:"ts_ms_post_container",id:"ts_theme_container ",style:this.state.showSlides?{}:{visibility:"hidden"},children:(16677===u&&"product"===window.dataFilterType?r&&r.length>=5:r&&r.length)?(0,l.jsx)(s.Suspense,{fallback:(0,l.jsx)("div",{children:"Loading..."}),children:(0,l.jsx)(h,{autoplay:"".concat(1==p.ThemeRule.slidePost),"slides-per-view":D,navigation:JSON.stringify({nextEl:".swiper-button-next",prevEl:".swiper-button-prev",disabledClass:"swiper-button-none"}),"css-mode":this.state.isMobile,"passive-listeners":!1,"long-swipes-ratio":.01,"long-swipes-ms":100,hasMoreData:d,loaderData:m,onUpdateData:this.onUpdateData,children:c&&c.length>0?137350===(null===p||void 0===p||null===(o=p.User)||void 0===o?void 0:o.id)?r&&r.length>3?c.map(((e,t)=>(0,l.jsx)("swiper-slide",{children:(0,l.jsx)(i,{handleAllImageError:this.handleAllImageError,dataArr:e,...this.props},"post_id_ms-1-{index}")},"mn-1-".concat(t)))):null:c.map(((e,t)=>(0,l.jsx)("swiper-slide",{children:(0,l.jsx)(i,{handleAllImageError:this.handleAllImageError,dataArr:e,...this.props},"post_id_ms-2-".concat(t))},"mn-2-".concat(t)))):null})}):null})}}const m=(0,r.$j)((e=>{const{appData:t}=e;return{appData:t,loaderData:e.loaderData,newPostData:t.newPostData,appendData:t.postData.appendData,hasMoreData:!t.postData.hasMoreData[0]||!1!==t.postData.hasMoreData[0].hasMoreData&&(!t.postData.hasMoreData[t.postData.appendData.networkID]||t.postData.hasMoreData[t.postData.appendData.networkID].hasMoreData)}}),(e=>({getDataNextSteps:(t,a,s,o,l,i,r)=>e((0,d.Sx)(t,a,s,o,l,i,r)),showPopUP:t=>e((0,d.Bm)(t))})))(p)},34041:(e,t,a)=>{a.d(t,{Z:()=>l});const s="Window variable not found",o="Timeout exception",l=(e,t)=>new Promise(((a,l)=>{if("undefined"===typeof window)return l(s);let i=null;const r=new Image;r.addEventListener("load",(()=>{i&&clearTimeout(i),a({width:r.naturalWidth,height:r.naturalHeight})})),r.addEventListener("error",(e=>{i&&clearTimeout(i),l("".concat(e.type,": ").concat(e.message))})),r.src=e,t&&(i=setTimeout((()=>l(o)),t))}))}}]);