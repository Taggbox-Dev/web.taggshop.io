"use strict";(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[201],{40201:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d});var s=a(47313),o=a(61395),r=a.n(o),n=a(59204),i=a(73763),l=a(17739),p=a(2651),h=a(46417);class c extends s.PureComponent{constructor(){super(...arguments),this.allImageQueue=[],this.state={allFirstImage:!1},this.requestData=()=>{const{wall:t,appendData:e,hasMoreData:a,loaderData:s}=this.props,o=t.Personalization.numberOfPosts,r=Math.floor(Date.now()/1e3);a&&!s.isShowMoreLoading&&this.props.getDataNextSteps(t.Wall.id,r,o,e.networkID,e.after,e.heightEvent)},this.handleAllImageError=t=>{try{const e=t.target.getAttribute("data-item-id");this.allImageQueue.push({src:e,e:t}),this.state.allFirstImage||this.processAllImageQueue()}catch(e){}},this.processAllImageQueue=async()=>{if(this.allImageQueue.length){this.setState({allFirstImage:!0});const{src:t,e:e}=this.allImageQueue[0];t&&(0,l.bO)(e,this.nextProcessAllImageQueue)}},this.nextProcessAllImageQueue=()=>{try{this.allImageQueue.shift(),this.processAllImageQueue()}catch(t){}}}componentDidMount(){const{wall:t,appendData:e}=this.props;new ResizeObserver((()=>{window.dispatchEvent(new Event("resize"))})).observe(document.querySelector(".taggshopContainer")),e&&t.Personalization.autoScrollStatus&&window.addEventListener("scroll",(()=>{let t=document.getElementById("scrlBarComanW");var e=window.innerHeight+window.scrollY;t.scrollHeight-10<e&&this.requestData()}))}render(){const{newPostData:t,completeDataObject:e,adjustWidth:a,wall:s}=this.props,o=this.props.appData.wall.User.id;return(0,h.jsx)("div",{className:"ts_sp_post_container",id:"ts_theme_container",children:(0,h.jsx)(r(),{className:"ts_sp_post_container theme".concat(s.Personalization.commerceTheme),elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".ts_sp_post_wrapper",fitWidth:!0,columnWidth:0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},style:{width:"100%!important"},enableResizableChildren:!1,children:t&&t.length>0?t.map(((t,s)=>{const r=e[t];return(0,h.jsx)(p.Z,{className:"ts_sp_post_wrapper",handleAllImageError:this.handleAllImageError,ownerId:o,itemData:r,itemIndex:s,adjustWidth:a,...this.props},"post_id_".concat(s))})):null})})}}const d=(0,n.$j)((t=>{const{appData:e}=t;return{appData:e,loaderData:t.loaderData,newPostData:e.newPostData,postData:e.postData.postData,appendData:e.postData.appendData,hasMoreData:!e.postData.hasMoreData[0]||0!=e.postData.hasMoreData[0].hasMoreData&&(!e.postData.hasMoreData[e.postData.appendData.networkID]||e.postData.hasMoreData[e.postData.appendData.networkID].hasMoreData)}}),(t=>({getDataNextSteps:(e,a,s,o,r,n,l)=>t((0,i.Sx)(e,a,s,o,r,n,l))})))(c)}}]);