"use strict";(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[933],{52933:(t,e,a)=>{a.r(e),a.d(e,{default:()=>u});var s=a(47313),o=a(59204),r=a(61395),n=a.n(r),l=a(73763),i=a(17739),c=a(2651),p=a(46417);const h={background:!0};class d extends s.PureComponent{constructor(){super(...arguments),this.allImageQueue=[],this.state={allFirstImage:!1},this.requestData=()=>{const{wall:t,postData:e,appendData:a,hasMoreData:s,loaderData:o}=this.props,r=t.Personalization.numberOfPosts,n=Math.floor(Date.now()/1e3);s&&!o.isShowMoreLoading&&this.props.getDataNextSteps(t.Wall.id,n,r,a.networkID,a.after,a.heightEvent)},this.handleAllImageError=t=>{try{const e=t.target.getAttribute("data-item-id");this.allImageQueue.push({src:e,e:t}),this.state.allFirstImage||this.processAllImageQueue()}catch(e){}},this.processAllImageQueue=async()=>{if(this.allImageQueue.length){this.setState({allFirstImage:!0});const{src:t,e:e}=this.allImageQueue[0];t&&(0,i.bO)(e,this.nextProcessAllImageQueue)}},this.nextProcessAllImageQueue=()=>{try{this.allImageQueue.shift(),this.processAllImageQueue()}catch(t){}}}componentDidMount(){const{wall:t,postData:e,appendData:a,hasMoreData:s,loaderData:o}=this.props;document.getElementById("scrlBarComanW");new ResizeObserver((t=>{window.dispatchEvent(new Event("resize"))})).observe(document.querySelector(".taggshopContainer")),a&&t.Personalization.autoScrollStatus&&window.addEventListener("scroll",(t=>{let e=document.getElementById("scrlBarComanW");document.body.scrollHeight;var a=window.innerHeight+window.scrollY;e.scrollHeight-10<a&&setTimeout((()=>this.requestData()),1e3)}))}render(){const{postData:t,completeDataObject:e,adjustWidth:a,wall:s,webFilters:o,languageSetting:r}=this.props;return(0,p.jsx)("div",{className:"tb_sc_post_container",id:"ts_theme_container",children:(0,p.jsx)(n(),{className:"tb_sc_post_container theme".concat(s.Personalization.commerceTheme),elementType:"div",options:{transitionDuration:0,itemSelector:".tb_sc_post_wrapper",columnWidth:0},disableImagesLoaded:!1,updateOnEachImageLoad:!0,imagesLoadedOptions:h,enableResizableChildren:!0,children:t&&t.length>0?t.map(((s,o)=>{i.j6&&t&&t.length-1==o&&setTimeout((()=>{let t=document.querySelectorAll("img[data-is-optmized='0']");t&&t.length>0&&t.forEach((t=>{t.setAttribute("src",t.getAttribute("data-src")),t.setAttribute("data-is-optmized","1")}))}),1300);const r=e[s];return(0,p.jsx)(c.Z,{className:"tb_sc_post_wrapper",handleAllImageError:this.handleAllImageError,itemData:r,itemIndex:o,adjustWidth:a,...this.props},"post_id_".concat(o))})):null})})}}const u=(0,o.$j)((t=>{const{appData:e}=t;return{appData:e,loaderData:t.loaderData,postData:e.postData.postData,appendData:e.postData.appendData,hasMoreData:!e.postData.hasMoreData[0]||0!=e.postData.hasMoreData[0].hasMoreData&&(!e.postData.hasMoreData[e.postData.appendData.networkID]||e.postData.hasMoreData[e.postData.appendData.networkID].hasMoreData)}}),(t=>({getDataNextSteps:(e,a,s,o,r,n,i)=>t((0,l.Sx)(e,a,s,o,r,n,i))})))(d)}}]);