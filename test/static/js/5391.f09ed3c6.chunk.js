"use strict";(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[5391],{79880:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var s=a(47313),r=a(2651),o=a(46417);class i extends s.PureComponent{render(){const{dataArr:e,completeDataObject:t,cardWidth:a,handleAllImageError:s}=this.props;return(0,o.jsx)("div",{className:"ts_ms_post_row",children:e&&e.length>0?e&&e.length>0?e.map(((e,i)=>{const n=t[e];return(0,o.jsx)(r.Z,{handleAllImageError:s,className:"ts_ms_post_wrapper",itemData:n,cardWidth:a,fullWidth:!1,itemId:n.id,wall:this.props.wall,...this.props},"post_idMs_".concat(i))})):null:""})}}var n=a(59204),l=a(17739),d=a(73763);(0,a(12488).z2)();class c extends s.PureComponent{constructor(e){super(e),this.allImageQueue=[],this.state={data:[],cardWidth:null,loadMore:!1,allFirstImage:!1},this.onUpdateData=()=>{setTimeout((()=>this.requestData()),1e3)},this.requestData=()=>{const{wall:e,appendData:t,hasMoreData:a,loaderData:s}=this.props,r=e.ThemeRule.numberOfPosts,o=Math.floor(Date.now()/1e3);a&&!s.isShowMoreLoading&&this.props.getDataNextSteps(e.Wall.id,o,r,t.networkID,t.after,t.heightEvent)},this.onSliderDataFormation=e=>{const{wall:t,postData:a}=e,s=t.ThemeRule.multiRow,r=(0,l.td)(a,s);this.setState({data:r})},this.preloadImages=async e=>{e&&e.length&&e.forEach((async e=>{const t=this.props.completeDataObject[e];await this.preloadImage(t.postFileNew)}))},this.preloadImage=e=>new Promise(((t,a)=>{const s=new Image;s.src=e,s.style.display="none",s.onload=()=>{console.log("removed"),document.body.removeChild(s),t()},s.onerror=a,document.body.appendChild(s)})),this.handleAllImageError=e=>{try{const t=e.target.getAttribute("data-item-id");this.allImageQueue.push({src:t,e:e}),this.state.allFirstImage||this.processAllImageQueue()}catch(t){}},this.processAllImageQueue=async()=>{if(this.allImageQueue.length){this.setState({allFirstImage:!0});const{src:e,e:t}=this.allImageQueue[0];e&&(0,l.bO)(t,this.nextProcessAllImageQueue)}},this.nextProcessAllImageQueue=()=>{try{this.allImageQueue.shift(),this.processAllImageQueue()}catch(e){}},this.secondaryRef=s.createRef()}componentDidMount(){setTimeout((()=>this.setState({loadMore:!0})),500),this.preloadImages(this.props.postData),this.onSliderDataFormation(this.props)}render(){var e;const{postData:t,hasMoreData:a,wall:s,loaderData:r,newPostData:n}=this.props,l=s.ThemeRule.numberOfCoumn,d=s.ThemeRule.mobileColumn,c=this.props.appData.wall.User.id,h={480:{slidesPerView:"".concat(0===l?6:l),perMove:"".concat(1===s.ThemeRule.slidePost?1:0===l?6:l)},120:{slidesPerView:"".concat(0===d?1:d),perMove:"".concat(1===s.ThemeRule.slidePost||0===d?1:d)}};return(0,o.jsxs)("div",{className:"ts_ms_post_container",id:"ts_theme_container ",children:[(16677===c&&"product"===window.dataFilterType?t&&t.length>=5:t&&t.length)?(0,o.jsx)("swiper-container",{ref:this.secondaryRef,autoplay:"true","slides-per-view":"".concat(0===l?6:l),navigation:JSON.stringify({nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}),breakpoints:JSON.stringify(h),children:n&&n.length>0?137350===(null===s||void 0===s||null===(e=s.User)||void 0===e?void 0:e.id)?t&&t.length>3?n.map(((e,t)=>(0,o.jsx)("swiper-slide",{children:(0,o.jsx)(i,{handleAllImageError:this.handleAllImageError,dataArr:e,indexNo:t,evenRow:t%2==="0",completeDataObject:this.props.completeDataObject,wall:s},"post_id_ms".concat(t))},"mn".concat(t)))):null:n.map(((e,t)=>(0,o.jsx)("swiper-slide",{children:(0,o.jsx)(i,{handleAllImageError:this.handleAllImageError,dataArr:e,indexNo:t,evenRow:t%2==="0",completeDataObject:this.props.completeDataObject,wall:s},"post_id_ms".concat(t))},"mn".concat(t)))):null}):null,(0,o.jsx)("div",{className:"swiper-button-prev swiper__arrow--prev ts_slider_arrow-prev",children:(0,o.jsx)("div",{className:"swiperArrow_inner",children:(0,o.jsx)("div",{className:"tb__icon tb-chevron-left",children:(0,o.jsx)("div",{})})})}),(0,o.jsx)("div",{className:"swiper-button-next swiper__arrow--next ts_slider_arrow-next",onClick:a&&r.isShowMoreLoading?null:this.onUpdateData,children:a&&r.isShowMoreLoading?(0,o.jsxs)("svg",{width:"26px",height:"26px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:"uil-ring-alt",children:[(0,o.jsx)("rect",{x:"0",y:"0",width:"100",height:"100",fill:"none",className:"bk"}),(0,o.jsx)("circle",{cx:"50",cy:"50",r:"40",stroke:"#afafb7",fill:"none",strokeWidth:"10",strokeLinecap:"round"}),(0,o.jsxs)("circle",{cx:"50",cy:"50",r:"40",stroke:"#000000",fill:"none",strokeWidth:"6",strokeLinecap:"round",children:[(0,o.jsx)("animate",{attributeName:"stroke-dashoffset",dur:"2s",repeatCount:"indefinite",from:"0",to:"502"}),(0,o.jsx)("animate",{attributeName:"stroke-dasharray",dur:"2s",repeatCount:"indefinite",values:"150.6 100.4;1 250;150.6 100.4"})]})]}):(0,o.jsx)("div",{className:"swiperArrow_inner",children:(0,o.jsx)("div",{className:"tb__icon tb-chevron-right",children:(0,o.jsx)("div",{})})})})]})}}const h=(0,n.$j)((e=>{const{appData:t}=e;return{appData:t,loaderData:e.loaderData,newPostData:t.newPostData,appendData:t.postData.appendData,hasMoreData:!t.postData.hasMoreData[0]||!1!==t.postData.hasMoreData[0].hasMoreData&&(!t.postData.hasMoreData[t.postData.appendData.networkID]||t.postData.hasMoreData[t.postData.appendData.networkID].hasMoreData)}}),(e=>({getDataNextSteps:(t,a,s,r,o,i,n)=>e((0,d.Sx)(t,a,s,r,o,i,n)),showPopUP:t=>e((0,d.Bm)(t))})))(c)},34041:(e,t,a)=>{a.d(t,{Z:()=>o});const s="Window variable not found",r="Timeout exception",o=(e,t)=>new Promise(((a,o)=>{if("undefined"===typeof window)return o(s);let i=null;const n=new Image;n.addEventListener("load",(()=>{i&&clearTimeout(i),a({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(e=>{i&&clearTimeout(i),o("".concat(e.type,": ").concat(e.message))})),n.src=e,t&&(i=setTimeout((()=>o(r)),t))}))}}]);