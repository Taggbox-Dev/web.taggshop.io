"use strict";(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[7462],{87684:(t,e,o)=>{o.d(e,{Ue:()=>l,ki:()=>n,o2:()=>d,uD:()=>i});var s=o(31881),a=o.n(s),r=o(35179);o(32626);const i=t=>a().get("".concat(t,".js")),n=t=>a().post("".concat(r.Yh,"/cart/add.js"),t),d=()=>a().get("".concat(r.Yh,"/cart.js")),l=t=>{a().post(r.rS,t).then((t=>{})).catch((t=>console.log("error",t)))}},57462:(t,e,o)=>{o.r(e),o.d(e,{default:()=>A});var s=o(47313),a=o(59204),r=o(12549),i=o(73763),n=o(17739),d=o(90182),l=o(98501),c=o(46417);class p extends s.Component{render(){const{item:t,networkData:e,wall:o}=this.props,s=t.ugc_personalizaion.UgcSetting,a=s&&Object.keys(s).length>0;return t.ugc_personalizaion&&s&&(0,c.jsxs)(d.q,{children:[a&&s.title_link_font?(0,c.jsx)("link",{href:"".concat(l.jN,"/").concat(s.title_link_font,".css"),rel:"stylesheet"}):null,a&&s.price_link_font?(0,c.jsx)("link",{href:"".concat(l.jN,"/").concat(s.price_link_font,".css"),rel:"stylesheet"}):null,a&&s.feature_link_font?(0,c.jsx)("link",{href:"".concat(l.jN,"/").concat(s.feature_link_font,".css"),rel:"stylesheet"}):null,a&&s.discount_link_font?(0,c.jsx)("link",{href:"".concat(l.jN,"/").concat(s.discount_link_font,".css"),rel:"stylesheet"}):null,a&&s.feature_link_font?(0,c.jsx)("link",{href:"".concat(l.jN,"/").concat(s.feature_link_font,".css"),rel:"stylesheet"}):null,a&&s.button_link_font?(0,c.jsx)("link",{href:"".concat(l.jN,"/").concat(s.button_link_font,".css"),rel:"stylesheet"}):null,(0,c.jsx)("style",{children:"\n        .tb_pro_title_user {font-family: ".concat(s.feature_css_font,"; font-size: ").concat(s.feature_font_size,"px; color: ").concat(s.feature_text_color,"}\n        .tb_author_avatar0012{background: ").concat(e.color,"!important}\n        .ugc-product-title{ font-family: ").concat(s.title_css_font,"!important; color: ").concat(s.product_title_color,"!important; font-size:").concat(s.product_title_font_size,"px!important}\n        .tb_pro_discount_price{ font-family: ").concat(s.discount_css_font,"!important; color: ").concat(s.discount_price_color,"!important; font-size:").concat(s.discount_price_font_size,"px!important}\n        .tb_pro_price{ font-family: ").concat(s.price_css_font,"!important; color: ").concat(s.original_price_color,"!important; font-size:").concat(s.original_price_font_size,"px!important}\n        .ts_reelTheme_btn { font-family: ").concat(s.button_css_font,"!important; color: ").concat(s.buy_now_color,"!important; font-size:").concat(s.buy_font_size,"px!important; background:").concat(s.buy_now_background,"!important;}\n        ")})]})}}var u=o(87684),h=o(32626);class m extends s.Component{constructor(){super(...arguments),this.state={allSizes:null,allColors:null,selectedColor:null,selectedSize:null,availableSize:[],productImage:"",optionError:!1},this.getOptions=()=>{const{productDetails:t}=this.props;var e=[],o=[];if(t&&t.options&&t.options.length&&t.options.map((t=>{t.values&&t.values.length&&("color"==t.name.toLowerCase()&&(e=t.values,this.setState({selectedColor:t.values[0]})),"size"==t.name.toLowerCase()?o=t.values:(e=t.values,this.setState({selectedColor:t.values[0]})))})),this.setState({allSizes:o,allColors:e}),e&&e.length)o&&o.length&&this.checkAvablity(e[0]);else{var s=[];t.variants.map((t=>{t.available&&(s.includes(t.option1)||s.push(t.option1))})),this.setState({availableSize:s})}},this.checkAvablity=t=>{const{variants:e}=this.props.productDetails;this.getProductImage();var o=[];e.map((e=>{var s;e.option1.toLowerCase()==t.toLowerCase()&&e.available&&(o.includes(e.option2)||o.push(e.option2)),(null===(s=e.option2)||void 0===s?void 0:s.toLowerCase())==t.toLowerCase()&&e.available&&(o.includes(e.option1)||o.push(e.option1))})),this.setState({availableSize:o})},this.onAddToCart=()=>{const{variants:t}=this.props.productDetails,{selectedColor:e,selectedSize:o,allColors:s,allSizes:a}=this.state;o&&""!=o||!a||!a.length?1==t.length?(this.props.onSelectedVariant(t[0]),this.addProductsToCart(t[0])):t.map((t=>{e&&e.length?(t.options.includes(e)&&t.options.includes(o)||t.options.includes(e))&&(this.props.onSelectedVariant(t),this.addProductsToCart(t)):t.options.includes(o)&&(this.props.onSelectedVariant(t),this.addProductsToCart(t))})):this.setState({optionError:!0})},this.addProductsToCart=t=>{const{wall:e,productDetails:o,tagshopProductDeatil:s}=this.props,a=new FormData;a.append("id",t.id),a.append("quantity",1),(0,u.ki)(a).then((o=>{const a={variant:t.options?t.options.join(","):"",price:t.price/100,wall:e.Wall.wallId,website_id:"website"==h.q?e.Wall.id:0,product_id:s.UgcProduct.id,quantity:1,post:s.post_id};(0,u.Ue)(a),this.props.onAddToCart()})).catch((t=>{this.props.onAddToCart()}))},this.getColorImage=t=>{const{productDetails:e}=this.props;if(t){var o;const s=e.variants.find((e=>e.options.includes(t)));return s.featured_image?null===(o=s.featured_image)||void 0===o?void 0:o.src:this.props.productImg}},this.getProductImage=()=>{const{productDetails:t}=this.props,{selectedColor:e}=this.state;if(e){var o;const s=t.variants.find((t=>t.options.includes(e)));this.setState({productImage:s.featured_image?null===(o=s.featured_image)||void 0===o?void 0:o.src:this.props.productImg})}else this.setState({productImage:t.featured_image})}}componentDidMount(){const{productDetails:t}=this.props;this.getOptions(),this.getProductImage()}render(){var t;const{closeAddtocart:e,addtoCartPopup:o,productDetails:s,onSelectedVariant:a,productImg:r,wall:i,tagshopProductDeatil:n}=this.props,{allColors:d,allSizes:p,selectedColor:u,availableSize:h,selectedSize:m,productImage:_,optionError:g}=this.state;return(0,c.jsx)("div",{className:"ts_rt_addToCart_mobile_modal","aria-hidden":"true",children:(0,c.jsxs)("div",{className:"ts_rt_addToCart_mobilePopup_modalDialog",role:"document",children:[(0,c.jsx)("div",{className:"ts_rt_addToCart_mobilePopup_close_btn",onClick:e,children:(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",children:(0,c.jsx)("path",{d:"M14.5352 14.4531C14.2773 14.7109 13.8047 14.7109 13.5469 14.4531L7.875 8.73828L2.16016 14.4531C1.90234 14.7109 1.42969 14.7109 1.17188 14.4531C0.914062 14.1953 0.914062 13.7227 1.17188 13.4648L6.88672 7.75L1.17188 2.07812C0.914062 1.82031 0.914062 1.34766 1.17188 1.08984C1.42969 0.832031 1.90234 0.832031 2.16016 1.08984L7.875 6.80469L13.5469 1.08984C13.8047 0.832031 14.2773 0.832031 14.5352 1.08984C14.793 1.34766 14.793 1.82031 14.5352 2.07812L8.82031 7.75L14.5352 13.4648C14.793 13.7227 14.793 14.1953 14.5352 14.4531Z",fill:"white"})})}),(0,c.jsx)("div",{className:"ts_rt_addToCart_mobilePopup_modalContent",children:(0,c.jsx)("div",{className:"ts_rt_addToCart_mobilePopup_modalBody",children:(0,c.jsxs)("div",{className:"ts_rt_addToCart_mobilePopup_modalBody_inner",children:[(0,c.jsxs)("div",{className:"ts_rt_addToCart_mobilePopup_product_deatil",children:[(0,c.jsx)("div",{className:"ts_rt_addToCart_mobilePopup_productImage",children:(0,c.jsx)("img",{src:_||l.O1,alt:"product img",onError:t=>this.setState({productImage:l.O1})})}),(0,c.jsxs)("div",{className:"ts_rt_addToCart_mobilePopup_productDeatil_rightAlign",children:[(0,c.jsx)("div",{className:"ts_rt_addToCart_mobilePopup_productTitle",children:s.title}),(0,c.jsxs)("div",{className:"ts_rt_addToCart_mobilePopup_productPrice",children:[null===n||void 0===n||null===(t=n.UgcProduct)||void 0===t?void 0:t.price_currency_symbol,(null===n||void 0===n?void 0:n.UgcProduct.product_discount)>0?null===n||void 0===n?void 0:n.UgcProduct.product_discount:null===n||void 0===n?void 0:n.UgcProduct.product_price]})]})]}),(0,c.jsxs)("div",{className:"ts_rt_addToCart_mobilePopup_productDetail",children:[g?(0,c.jsx)("div",{className:"ts_addToCart_selectOptionsError",children:"Please select any one variant to proceed!"}):(0,c.jsx)(c.Fragment,{}),(0,c.jsx)("div",{className:"ts_rt_addToCart_mobilePopup_colorPalate_section",children:d&&d.length?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"ts_rt_addToCart_mobilePopup_colorHeading",children:"Color:"}),(0,c.jsx)("div",{className:"ts_rt_addToCart_mobilePopup_colorPalate",children:d.map((t=>(0,c.jsx)("div",{className:"ts_rt_addToCart_mobilePopup_color ".concat(u==t?"active":""),children:(0,c.jsx)("div",{className:"ts_rt_addToCart_mobilePopup_colorTile",style:{backgroundColor:t},onClick:()=>this.setState({selectedColor:t},(()=>this.checkAvablity(t))),children:(0,c.jsx)("img",{src:this.getColorImage(t),style:{height:"100%",width:"100%"},onError:t=>t.target.src=l.O1})})})))})]}):(0,c.jsx)(c.Fragment,{})}),p&&p.length?(0,c.jsxs)("div",{className:"ts_rt_addToCart_mobilePopup_sizeChart",children:[(0,c.jsx)("div",{className:"ts_rt_addToCart_mobilePopup_sizeChart_label",children:"Size"}),p.map((t=>h.includes(t)?(0,c.jsx)("div",{className:"ts_rt_addToCart_mobilePopup_sizebutton  ".concat(t==m?"active":""),onClick:()=>this.setState({selectedSize:t,optionError:!1}),children:t}):(0,c.jsxs)("div",{className:"ts_rt_addToCart_mobilePopup_sizebutton ts_productSize_unvavailable",children:[(0,c.jsx)("span",{className:"ts_rt_addToCart_mobilePopup_productSize_unvavailable_cross"}),t]})))]}):(0,c.jsx)(c.Fragment,{}),(0,c.jsxs)("div",{className:"ts_rt_addToCart_actions",children:[(0,c.jsx)("div",{className:"ts_rt_addToCart_actions_cancel",onClick:e,children:"Cancel"}),(0,c.jsx)("div",{className:"ts_rt_addToCart_actions_addCart",onClick:this.onAddToCart,children:"ADD TO CART"})]}),i&&i.UserRule&&"1"==i.UserRule.taggBranding?(0,c.jsx)("div",{className:"ts_rt_branding ts_rt_branding_addToCart",children:(0,c.jsx)("img",{src:"http://cloud.taggbox.com/taggshop/app/assets/media/tagshop-branding.svg",alt:"brand logo"})}):(0,c.jsx)(c.Fragment,{})]})]})})})]})})}}var _=o(35179);class g extends s.Component{constructor(){super(...arguments),this.state={cartItems:1}}componentDidMount(){(0,u.o2)().then((t=>{const{item_count:e}=t.data;e&&this.setState({cartItems:e})})).catch((t=>{console.error(t)}))}render(){var t;const{productDetails:e,closeAddtocart:o,productImg:s,wall:a,tagshopProductDeatil:r,onBack:i}=this.props;return(0,c.jsx)("div",{className:"ts_rt_proceedCheckout_modal","aria-hidden":"true",children:(0,c.jsxs)("div",{className:"ts_rt_proceedCheckout_modalDialog",role:"document",children:[(0,c.jsx)("div",{className:"ts_rt_proceedCheckout_close_btn",onClick:i,children:(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",children:(0,c.jsx)("path",{d:"M14.5352 14.4531C14.2773 14.7109 13.8047 14.7109 13.5469 14.4531L7.875 8.73828L2.16016 14.4531C1.90234 14.7109 1.42969 14.7109 1.17188 14.4531C0.914062 14.1953 0.914062 13.7227 1.17188 13.4648L6.88672 7.75L1.17188 2.07812C0.914062 1.82031 0.914062 1.34766 1.17188 1.08984C1.42969 0.832031 1.90234 0.832031 2.16016 1.08984L7.875 6.80469L13.5469 1.08984C13.8047 0.832031 14.2773 0.832031 14.5352 1.08984C14.793 1.34766 14.793 1.82031 14.5352 2.07812L8.82031 7.75L14.5352 13.4648C14.793 13.7227 14.793 14.1953 14.5352 14.4531Z",fill:"white"})})}),(0,c.jsx)("div",{className:"ts_rt_proceedCheckout_modalContent",children:(0,c.jsx)("div",{className:"ts_rt_proceedCheckout_modalBody",children:(0,c.jsxs)("div",{className:"ts_rt_proceedCheckout_modalBody_inner",children:[(0,c.jsx)("div",{className:"ts_rt_proceedCheckout_productImage",children:(0,c.jsx)("img",{src:e.featured_image?e.featured_image.src:s,alt:"product img",onError:t=>t.target.src=l.O1})}),(0,c.jsxs)("div",{className:"ts_rt_proceedCheckout_productDetail",children:[(0,c.jsx)("div",{className:"ts_rt_proceedCheckout_productTitle",children:e.name}),(0,c.jsxs)("div",{className:"ts_rt_proceedCheckout_productPrice",children:[null===r||void 0===r||null===(t=r.UgcProduct)||void 0===t?void 0:t.price_currency_symbol,(null===r||void 0===r?void 0:r.UgcProduct.product_discount)>0?null===r||void 0===r?void 0:r.UgcProduct.product_discount:null===r||void 0===r?void 0:r.UgcProduct.product_price]}),this.state.cartItems?(0,c.jsxs)("div",{className:"ts_rt_proceedCheckout_product_added",children:["Your cart now has ",this.state.cartItems," item"]}):(0,c.jsx)(c.Fragment,{}),(0,c.jsxs)("div",{className:"ts_rt_proceedCheckout_actions",children:[(0,c.jsx)("div",{className:"ts_rt_proceedCheckout_actions_checkOut",onClick:()=>window.location="".concat(_.Yh,"/cart"),children:"Proceed to checkout"}),(0,c.jsx)("div",{className:"ts_rt_proceedCheckout_actions_shopping",onClick:o,children:"Continue Shopping"}),a&&a.UserRule&&"1"==a.UserRule.taggBranding?(0,c.jsx)("div",{className:"ts_rt_branding ts_rt_branding_addToCart",children:(0,c.jsx)("img",{src:"http://cloud.taggbox.com/taggshop/app/assets/media/tagshop-branding.svg",alt:"brand logo"})}):(0,c.jsx)(c.Fragment,{})]})]})]})})})]})})}}var v=o(20510),C=o.n(v),x=o(29335),w=o(25370);const y=(0,a.$j)((t=>({mediaHeight:t.modalPop.mediaHeight,mediaWidth:t.modalPop.mediaWidth})),(t=>({setMediaSize:e=>t({type:w.x0,payload:e}),showHotspot:e=>t((0,i.EG)(e))})))((t=>{let{item:e,setMediaSize:o,ugc_products:a,wall:r,ImageUrl:i,videoUrl:d,showHotspot:l,mediaWidth:p,mediaHeight:u,inViewport:h,handleProgress:m,muted:_}=t;const[g,v]=(0,s.useState)(!1),[w,y]=(0,s.useState)(!1),[P,f]=(0,s.useState)(i),[j,b]=(0,s.useState)(0),[S,D]=(0,s.useState)(0),[k,I]=(0,s.useState)(.8),[N,T]=(0,s.useState)(d),[U,L]=(0,s.useState)(!1),z=(0,s.useRef)(),A=(0,s.useRef)();(0,s.useEffect)((()=>{P!==i&&(f(i),y(!1))}),[i]),(0,s.useEffect)((()=>{}),[h]);const E=t=>{const e=t.target.offsetHeight,s=t.target.offsetHeight;o({mediaHeight:e,mediaWidth:s}),y(!0)};return(0,c.jsx)("div",{className:"tb_media_holder",children:(0,c.jsx)(c.Fragment,{children:2===e.type||4===e.type?(0,c.jsx)("div",{className:"tb_img_holder",ref:z,onMouseEnter:()=>l({showAll:!0}),onMouseLeave:()=>l({showAll:!1}),style:{minHeight:w?null:u,minWidth:w?null:p,backgroundColor:"#000",display:"flex",alignItems:"center"},children:(0,c.jsxs)("div",{className:"ts_outter_hotspot",children:[2!=e.type&&4!=e.type||1!=e.hotspot||1!=e.ugc_personalizaion.UgcSetting.status?null:(0,c.jsx)(x.Z,{item:e,ugc_products:e.ugc_products,UgcSetting:e.ugc_personalizaion.UgcSetting}),(0,c.jsx)("img",{className:1==e.hotspot&&1==e.ugc_personalizaion.UgcSetting.status?"":"ts_popup_no_hotspots",src:i,"data-src":i,onLoad:t=>{v(!0),E(t)},onError:t=>(0,n.bO)(t,(()=>{})),"data-network":e.networkId,"data-filter-id":e.filterId,"data-stories":e.stories,"data-load":"0","data-item-id":e.id,"data-wall-id":r.Wall.id,alt:"popupImg"})]})}):(0,c.jsx)("div",{className:"tb_img_holder",style:{backgroundColor:"#000"},children:(0,c.jsxs)("div",{className:"tb_modal_img_holder_001",children:[U?(0,c.jsx)(c.Fragment,{}):(0,c.jsx)("div",{className:"ts_reelTheme_overlay_loader"}),h?(0,c.jsx)(C(),{style:U?{display:"contents",backgroundColor:"#000"}:{display:"none"},ref:A,className:"tb-detail-image-iframe",config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{forceVideo:!0,attributes:{muted:_}}},url:h?N||"www.sdklfjlksdhfkld.sdkkfjlsdh":"",progressInterval:100,"data-type":"video","data-stories":e.stories,"data-filter-id":e.filterId,"data-network":e.networkId,"data-link":e.link,"data-wall-id":r.Wall.id,"data-item-id":e.id,"data-load":"0",loop:!0,volume:k,onReady:()=>{L(!0)},muted:_,onProgress:t=>m(t),onError:t=>(0,n.b3)(t),playing:h,playsinline:!0,width:"auto",height:"100%"}):(0,c.jsx)(c.Fragment,{}),U?(0,c.jsx)(c.Fragment,{}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"ts_reelTheme_spinner ts_reelTheme_spinner-white ts_reelTheme_spinner-right"}),(0,c.jsx)("img",{src:i,"data-src":i,onLoad:t=>{v(!0),E(t)},onError:t=>(0,n.bO)(t,(()=>{})),"data-network":e.networkId,"data-filter-id":e.filterId,"data-stories":e.stories,"data-load":"0","data-item-id":e.id,"data-wall-id":r.Wall.id,height:"100%",alt:"popupImg",style:{maxWidth:"fit-content",maxHeight:"100%"}})]})]})})})},"postID".concat(e.id))}));var P=o(12488);(0,P.z2)();class f extends s.PureComponent{constructor(){super(...arguments),this.state={activeSlider:0},this.changeActive=t=>{this.setState({activeSlider:t})}}render(){const{item:t,instaImg:e,ugc_products:o,isVideoError:s,wall:a}=this.props,{activeSlider:r}=this.state;return(0,c.jsx)("div",{className:"tb_post_modal_media_wrapper___",children:(0,c.jsxs)("div",{className:"tb_post_modal_slide_holder_",children:[(0,c.jsx)("swiper-container",{ref:this.myRef,className:"tb_post_modal_media_slider",navigation:JSON.stringify({nextEl:".tb_post_modal_arrow_right__",prevEl:".tb_post_modal_arrow_left__"}),pagination:"true",children:t.imageList.map(((t,i)=>(0,c.jsx)("swiper-slide",{style:{margin:0,padding:0},children:(0,c.jsx)("div",{className:"tb_post_modal_slide_list",children:(0,c.jsx)(y,{wall:a,item:t,instaImg:e,ugc_products:o,isVideoError:s,custmClass:"ts_popup_slider",ImageUrl:t.postFile,videoUrl:t.mediaFile,active:i==r})})},"psId".concat(i))))}),(0,c.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_post_modal_arrow_wrapper_",children:[(0,c.jsx)("div",{className:"splide__arrow splide__arrow--prev tb_post_modal_arrow tb_post_modal_arrow_left__ tb__icon tb-chevron-left",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"splide__arrow splide__arrow--next  tb_post_modal_arrow tb_post_modal_arrow_right__ tb__icon  tb-chevron-right",children:(0,c.jsx)("div",{})})]})]})})}}function j(t){t.style.setProperty("visibility","visible","important"),t.style.setProperty("opacity","1","important"),t.style.setProperty("display","flex","important")}class b extends s.PureComponent{render(){return(0,c.jsxs)("a",{href:l.Cx,target:"_blank",ref:t=>{t&&(t.style.setProperty("position","absolute","important"),t.style.setProperty("left","auto","important"),t.style.setProperty("right","0","important"),t.style.setProperty("bottom","-40px","important"),t.style.setProperty("align-items","center","important"),t.style.setProperty("padding","4px 0","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("width","auto","important"),t.style.setProperty("text-decoration","none","important"),j(t))},children:[(0,c.jsx)("div",{ref:t=>{t&&(t.style.setProperty("font-size","14px","important"),t.style.setProperty("color","#fff","important"),t.style.setProperty("margin-right","6px","important"),t.style.setProperty("width","100%","important"),t.style.setProperty("height","auto","important"),j(t))},children:"Powered By"}),(0,c.jsx)("div",{ref:t=>{t&&(t.style.setProperty("background-image","url(https://cloud.taggbox.com/taggshop/assets/images/home-page/tagshop-logo-white.svg)","important"),t.style.setProperty("background-size","contain","important"),t.style.setProperty("background-position","left center","important"),t.style.setProperty("background-repeat","no-repeat","important"),t.style.setProperty("height","35px","important"),t.style.setProperty("min-height","35px","important"),t.style.setProperty("width","102px","important"),t.style.setProperty("min-width","102px","important"),j(t))}})]})}}const S=t=>{let{product:e,productLoading:o,showAddToCart:a,wall:r,ugcSetting:n,onsetProductImg:d,openAddtocart:l,item:p,setOnProductDetails:h}=t;const[m,_]=(0,s.useState)(!1),[g,v]=(0,s.useState)(!1),C=r.User.id,x=t=>{var e;const o=p.ugc_personalizaion.UgcSetting;var s=t;114259==(null===r||void 0===r||null===(e=r.User)||void 0===e?void 0:e.id)?s+="?utm_source=tagshop&utm_medium=gallery&utm_campaign=".concat(p.network.name):1==(null===r||void 0===r?void 0:r.Wall.utm_status)&&(s+="?utm_source=".concat(null===r||void 0===r?void 0:r.Wall.utm_source,"&utm_medium=").concat(null===r||void 0===r?void 0:r.Wall.utm_medium,"&utm_campaign=").concat(null===r||void 0===r?void 0:r.Wall.utm_campaign)),2==parseInt(o.tab_target)?window.parent.location.href=s:window.open(s,"_blank")};return(0,c.jsxs)("div",{className:"ts_reelTheme_Product ".concat(m?"ts_reelTheme_No_Product":""),children:[m?(0,c.jsx)(c.Fragment,{}):(0,c.jsx)("div",{className:"ts_reelTheme_rProductImage",children:(0,c.jsx)("img",{src:e.UgcProduct.product_image,alt:"",onError:()=>_(!0)})}),(0,c.jsxs)("div",{className:"ts_reelTheme_rProductDetail",children:[(0,c.jsx)("div",{className:"ts_reelTheme_rProductTitle",children:e.UgcProduct.product_title}),(0,c.jsxs)("div",{className:"ts_reelTheme_rProductPrice",children:[e.UgcProduct.product_price>0||e.UgcProduct.product_discount>0?(0,c.jsxs)("div",{className:"ts_reelTheme_rProductPrice_disconted",children:[e.UgcProduct.price_currency_symbol," ",e.UgcProduct.product_discount>0?e.UgcProduct.product_discount:e.UgcProduct.product_price]}):(0,c.jsx)(c.Fragment,{}),0==e.UgcProduct.product_discount||e.UgcProduct.product_price==e.UgcProduct.product_discount?(0,c.jsx)(c.Fragment,{}):(0,c.jsxs)("div",{className:"ts_reelTheme_rProductPrice_original",children:[e.UgcProduct.price_currency_symbol," ",e.UgcProduct.product_price]})]}),(0,c.jsxs)("button",{className:"ts_reelTheme_btn ".concat(30656==C?"homepage-ig-product-link":""," ").concat(g?"ts_reelTheme_spinner ts_reelTheme_spinner-white ts_reelTheme_spinner-right":""),disabled:g,onClick:()=>{(async()=>{v(!0);const t={};if(console.log("checkForShopify"),e&&e.UgcProduct&&e.UgcProduct.product_url)try{(0,u.uD)(e.UgcProduct.product_url).then((o=>{o.data&&(t[e.id]=o.data,v(!1),h(t),l(e.id,e))})).catch((t=>{console.log("error",t),x(e.UgcProduct.product_url),v(!1)}))}catch(o){console.log("error",o),x(e.UgcProduct.product_url),v(!1)}})(),d(e.UgcProduct.product_image),((t,e)=>{var o;(0,i.S5)({type:1,action:2,wall:null===t||void 0===t||null===(o=t.Wall)||void 0===o?void 0:o.id,product_id:e,post:p.referenceId})})(r,e.UgcProduct.id)},children:[n.buy_now_text," "]})]})]})};var D=o(97529),k=o(69867);const I=t=>{let{wall:e,item:o,instaImg:a,ugc_products:r,isVideoError:i,personalization:d,productLoading:l,showAddToCart:p,onsetProductImg:u,openAddtocart:h,onClosePopUp:m,addtoCartPopup:_,continueShopping:g,onItemChange:v,setOnProductDetails:C,muted:x,setMuted:w}=t;const P=(0,s.useRef)(),[j,I]=(0,s.useState)(0),N=((t,e)=>{const[o,a]=(0,s.useState)(!1),r=(0,s.useDeferredValue)(o);return(0,s.useEffect)((()=>{const o=new IntersectionObserver((t=>{let[e]=t;a(e.isIntersecting)}),{rootMargin:e});t.current&&o.observe(t.current)}),[]),r})(P,"-120px");return(0,c.jsx)(k.Z,{children:(0,c.jsx)("div",{className:"tb_modal_dialog taggModal reelTheme_modalDialog",ref:P,children:(0,c.jsxs)("div",{className:"tb_conetent",style:{height:"100%"},children:[(0,c.jsx)("div",{className:"tb_modal_head"}),(0,c.jsx)("div",{className:"tb_modal_body reelTheme_modalBody",children:(0,c.jsxs)("div",{className:"tb_modal_body_wrap",style:{height:"100%"},children:[o.file?o.imageList&&o.imageList.length>0?(0,c.jsx)(f,{inViewport:N,muted:x,wall:e,item:o,instaImg:a,ugc_products:r,isVideoError:i}):(0,c.jsx)(y,{muted:x,handleProgress:t=>{I(t.played)},wall:e,item:o,inViewport:N,instaImg:a,ugc_products:r,isVideoError:i,custmClass:"tb_media_wrap_002",ImageUrl:o.postFileNew,videoUrl:o.mediaUrl,active:!0}):"",(0,c.jsxs)("div",{className:"ts_reelTheme_overlay",style:o.imageList&&o.imageList.length>0?{pointerEvents:"none"}:{},children:[_||g?(0,c.jsx)(c.Fragment,{}):(0,c.jsx)("div",{className:"ts_reel_close_btn",onClick:m,children:(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",children:(0,c.jsx)("path",{d:"M14.5352 14.4531C14.2773 14.7109 13.8047 14.7109 13.5469 14.4531L7.875 8.73828L2.16016 14.4531C1.90234 14.7109 1.42969 14.7109 1.17188 14.4531C0.914062 14.1953 0.914062 13.7227 1.17188 13.4648L6.88672 7.75L1.17188 2.07812C0.914062 1.82031 0.914062 1.34766 1.17188 1.08984C1.42969 0.832031 1.90234 0.832031 2.16016 1.08984L7.875 6.80469L13.5469 1.08984C13.8047 0.832031 14.2773 0.832031 14.5352 1.08984C14.793 1.34766 14.793 1.82031 14.5352 2.07812L8.82031 7.75L14.5352 13.4648C14.793 13.7227 14.793 14.1953 14.5352 14.4531Z",fill:"white"})})}),(0,c.jsx)("div",{className:"ts_reel_progress_bar",style:{width:"".concat(100*j,"%")}}),(0,c.jsxs)("div",{className:"ts_reelTheme_bottom",children:[(0,c.jsxs)("div",{className:"ts_rt_addToCart_modal_productSlider",children:[3==o.type||5==o.type?(0,c.jsx)("button",{className:"ts_reel_mute_button",onClick:()=>{w(!x)},children:x?(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"26",height:"21",viewBox:"0 0 26 21",fill:"none",children:(0,c.jsx)("path",{d:"M14.711 3.03906L11.586 5.8125L10.5704 5.03125L13.8907 2.10156C14.1251 1.86719 14.4376 1.75 14.7501 1.75C14.9064 1.75 15.0626 1.78906 15.2579 1.86719C15.6876 2.0625 16.0001 2.53125 16.0001 3V9.28906L14.711 8.3125V3.03906ZM19.7501 10.5C19.7501 9.71875 19.3204 8.97656 18.6564 8.54687C18.3829 8.35156 18.3048 7.96094 18.5001 7.6875C18.6954 7.375 19.086 7.29687 19.3595 7.49219C20.3751 8.19531 21.0001 9.32812 21.0001 10.5C21.0001 11.3203 20.6876 12.0625 20.2579 12.6484L19.2814 11.9062C19.5548 11.5156 19.7501 11.0078 19.7501 10.5ZM23.5001 10.5C23.5001 8.46875 22.4454 6.55469 20.7267 5.42187C20.4532 5.22656 20.3751 4.83594 20.5704 4.5625C20.7657 4.25 21.1564 4.17187 21.4298 4.36719C23.5001 5.77344 24.7501 8.03906 24.7501 10.5C24.7501 12.1406 24.1642 13.7031 23.1876 14.9922L22.211 14.2109C23.0314 13.1562 23.5001 11.8672 23.5001 10.5ZM14.711 18V14.6797L16.0001 15.6953V18C16.0001 18.5078 15.6876 18.9375 15.2579 19.1719C15.0626 19.25 14.9064 19.25 14.7501 19.25C14.4376 19.25 14.1251 19.1719 13.8907 18.8984L8.61729 14.25H5.37511C4.32042 14.25 3.50011 13.4297 3.50011 12.375V8.625C3.50011 7.80469 4.04698 7.10156 4.82823 6.86719L6.27354 8H5.37511C5.02354 8 4.75011 8.27344 4.75011 8.625V12.375C4.75011 12.6875 5.02354 13 5.37511 13H9.08604L14.711 18ZM25.7267 19.4062C26.0001 19.6016 26.0782 19.9922 25.8048 20.2656C25.6876 20.4219 25.4923 20.5 25.336 20.5C25.2189 20.5 25.1017 20.4609 24.9845 20.3828L1.23448 1.63281C0.961043 1.4375 0.882918 1.00781 1.11729 0.773436C1.31261 0.499999 1.70323 0.421874 1.97667 0.656249L25.7267 19.4062Z",fill:"white"})}):(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"19",viewBox:"0 0 22 19",fill:"none",children:(0,c.jsx)("path",{d:"M12.0078 0.867188C12.4375 1.0625 12.75 1.53125 12.75 2V17C12.75 17.5078 12.4375 17.9375 12.0078 18.1719C11.8125 18.25 11.6562 18.25 11.5 18.25C11.1875 18.25 10.875 18.1719 10.6406 17.8594L5.36719 13.1719H2.125C1.07031 13.1719 0.25 12.3516 0.25 11.3359V7.625C0.25 6.60938 1.07031 5.75 2.125 5.75H5.36719L10.6406 1.10156C10.875 0.867188 11.1875 0.75 11.5 0.75C11.6562 0.75 11.8125 0.789062 12.0078 0.867188ZM11.4609 17L11.4219 2.03906L5.83594 7H2.125C1.77344 7 1.5 7.27344 1.5 7.625V11.375C1.5 11.6875 1.77344 12 2.125 12H5.83594L11.4609 17ZM18.1797 3.36719C20.25 4.77344 21.5 7.03906 21.5 9.5C21.5 11.9609 20.25 14.2656 18.1797 15.6719C18.0625 15.75 17.9453 15.75 17.8281 15.75C17.6328 15.75 17.4375 15.6719 17.3203 15.4766C17.125 15.2031 17.2031 14.8125 17.4766 14.6172C19.1953 13.4844 20.25 11.5703 20.25 9.5C20.25 7.46875 19.1953 5.55469 17.4766 4.42188C17.2031 4.22656 17.125 3.83594 17.3203 3.5625C17.5156 3.25 17.9062 3.17188 18.1797 3.36719ZM16.1094 6.49219C17.125 7.19531 17.75 8.32812 17.75 9.5C17.75 10.7109 17.125 11.8438 16.1094 12.5469C15.9922 12.625 15.875 12.625 15.7578 12.625C15.5625 12.625 15.3672 12.5469 15.25 12.3516C15.0547 12.0781 15.1328 11.6875 15.4062 11.4922C16.0703 11.0625 16.5 10.3203 16.5 9.5C16.5 8.71875 16.0703 7.97656 15.4062 7.54688C15.1328 7.35156 15.0547 6.96094 15.25 6.6875C15.4453 6.375 15.8359 6.29688 16.1094 6.49219Z",fill:"white"})})}):(0,c.jsx)(c.Fragment,{}),o.ugc_personalizaion.UgcSetting&&1==o.ugc_personalizaion.UgcSetting.status&&1==d.themeType&&o.ugc_products&&Object.keys(o.ugc_products).length>0?(0,c.jsx)(D.tq,{autoHeight:!0,speed:400,edgeSwipeDetection:!0,slidesPerView:o.ugc_products&&o.ugc_products.length>1?1.4:1.04,touchRatio:2,spaceBetween:20,direction:"horizontal",className:"reelThemeProduct_slider",children:(0,n.HS)(o.ugc_products).map(((t,s)=>(0,c.jsx)(D.o5,{children:(0,c.jsx)(S,{product:t,openAddtocart:h,onsetProductImg:u,showAddToCart:p,productLoading:l,wall:e,ugcSetting:o.ugc_personalizaion.UgcSetting,item:o,setOnProductDetails:C})},s)))}):null]}),e&&e.UserRule&&"1"==e.UserRule.taggBranding?(0,c.jsx)("div",{className:"ts_rt_branding",children:(0,c.jsx)("img",{src:"http://cloud.taggbox.com/taggshop/app/assets/media/tagshop-branding.svg",alt:"brand logo"})}):(0,c.jsx)(c.Fragment,{})]})]})]})}),e&&e.UserRule&&"1"==e.UserRule.taggBranding?(0,c.jsx)(b,{}):""]})})})},N=s.memo(I);o(9223),o(98871);(0,P.z2)();class T extends s.PureComponent{constructor(t){var e;super(t),this.setMuted=t=>this.setState({muted:t}),this.setOnProductDetails=t=>{this.setState({allProductDetails:t})},this.onErrorVideo=t=>this.setState({isVideoError:!0}),this.onMediaUpdate=t=>this.setState({isAuthorImagevalid:!1}),this.onAddToCart=(t,e)=>{this.setState({selectedProductDetails:this.state.allProductDetails[t],tagshopProductDeatil:e})},this.onUpdateData=()=>{setTimeout((()=>this.requestData()),0)},this.requestData=()=>{console.log("moredata-------------");const{wall:t,appendData:e,hasMoreData:o,loaderData:s}=this.props,a=t.ThemeRule.numberOfPosts,r=Math.floor(Date.now()/1e3);o&&!s.isShowMoreLoading&&(console.log("--------------"),this.props.getDataNextSteps(t.Wall.id,r,a,e.networkID,e.after,e.heightEvent))},this.onItemChange=t=>{console.log("item",t),this.setState({item:t})},this.getShopifyProducts=t=>{console.log("getShopifyProducts");var e={};t&&t.ugc_products&&t.ugc_products.length&&(t.ugc_products.map((t=>{(0,u.uD)(t.UgcProduct.product_url).then((o=>{o.data&&(e[t.id]=o.data,this.setState({showAddToCart:!0,productLoading:!1}))})).catch((t=>{this.setState({showAddToCart:!1,productLoading:!1})}))})),this.setState({allProductDetails:e}))},this.sliderRef=s.createRef(),this.state={currentIndex:null===(e=this.props)||void 0===e?void 0:e.currentIndex,item:this.props.item,isVideoError:!1,windowWidth:window.innerWidth,isAuthorImagevalid:!0,instaImg:(0,n.TI)(this.props.imgData,this.props.item.link),isHotspot:!1,addtoCartPopup:!1,allProductDetails:null,selectedProductId:null,selectedProductDetails:null,continueShopping:!1,selectedVariant:null,showAddToCart:!1,productLoading:!0,productImg:"",tagshopProductDeatil:null,muted:!0},this.splideRef=s.createRef()}componentDidMount(){const{currentIndex:t,item:e,slideWithArrowKeys:o}=this.props,s=(0,n.uB)(e.author.picture);this.setState({currentIndex:t,item:e,isAuthorImagevalid:s,instaImg:(0,n.TI)(this.props.imgData,this.props.item.link)}),this.splideRef.current.addEventListener("swiperslidechange",(t=>{this.props.hasMoreData&&t.detail[0].progress>.9&&this.onUpdateData()}))}UNSAFE_componentWillReceiveProps(t){const{currentIndex:e,item:o}=t,s=(0,n.uB)(o.author.picture);this.setState({currentIndex:e,item:o,isVideoError:!1,isAuthorImagevalid:s,instaImg:(0,n.TI)(this.props.imgData,this.props.item.link)})}render(){const{personalization:t,onClosePopUp:e,slideWithArrowKeys:o,wall:s,webFilters:a,completeData:r,hasMoreData:i}=this.props,{currentIndex:d,item:l,isVideoError:u,instaImg:h,addtoCartPopup:_,selectedProductDetails:v,continueShopping:C,selectedVariant:x,showAddToCart:w,productImg:y,productLoading:P,tagshopProductDeatil:f,muted:j}=this.state,b=(0,n.HS)(l.ugc_products),S=(0,n.EH)(l.networkId,a);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(p,{wall:s,item:l,networkData:S}),(0,c.jsx)("div",{className:"modalId".concat(l.id," tb_modal_001 tb_fade ").concat(4==l.type||5==l.type||l.ugc_products&&Object.keys(l.ugc_products).length>0?"modal-text-image":2==l.type||3==l.type?"modal-only-image":"modal-only-text"),onKeyDown:o,onKeyPress:o,onLoad:o,onClick:t=>t.currentTarget==t.target&&e(t),children:(0,c.jsx)("swiper-container",{ref:this.splideRef,direction:"vertical",freeMode:JSON.stringify({enabled:!0,sticky:!0}),height:"".concat(window.innerHeight),"initial-slide":d,"passive-listeners":!0,children:r&&r.length>0?r.map(((o,a)=>(0,c.jsx)("swiper-slide",{children:(0,c.jsx)(N,{onItemChange:this.onItemChange,onClosePopUp:e,wall:s,item:o,instaImg:h,showAddToCart:w,openAddtocart:(t,e)=>this.setState({addtoCartPopup:!0},(()=>this.onAddToCart(t,e))),onsetProductImg:t=>this.setState({productImg:t}),productLoading:P,sliderRef:this.sliderRef,personalization:t,ugc_products:b,isVideoError:u,addtoCartPopup:_,continueShopping:C,setOnProductDetails:this.setOnProductDetails,muted:j,setMuted:this.setMuted},"".concat(o.id,"-").concat(a))},"".concat(o.id,"-").concat(a)))):(0,c.jsx)(c.Fragment,{})})}),_&&v&&!C?(0,c.jsx)(m,{productImg:y,addtoCartPopup:_,productDetails:v,tagshopProductDeatil:f,closeAddtocart:()=>this.setState({addtoCartPopup:!1,selectedProductDetails:null}),onAddToCart:()=>this.setState({continueShopping:!0}),onSelectedVariant:t=>this.setState({selectedVariant:t}),wall:s}):(0,c.jsx)(c.Fragment,{}),C?(0,c.jsx)(g,{productImg:y,wall:s,addtoCartPopup:_,productDetails:x,tagshopProductDeatil:f,onBack:()=>this.setState({addtoCartPopup:!0,continueShopping:!1}),closeAddtocart:()=>this.setState({addtoCartPopup:!1,continueShopping:!1,selectedProductDetails:null})}):(0,c.jsx)(c.Fragment,{})]})}}const U=(0,a.$j)((t=>{const{appData:e}=t;return{loaderData:t.loaderData,appendData:e.postData.appendData,hasMoreData:!e.postData.hasMoreData[0]||0!=e.postData.hasMoreData[0].hasMoreData&&(!e.postData.hasMoreData[e.postData.appendData.networkID]||e.postData.hasMoreData[e.postData.appendData.networkID].hasMoreData)}}),(t=>({getDataNextSteps:(e,o,s,a,r,n,d)=>t((0,i.Sx)(e,o,s,a,r,n,d))})))(T),L=(0,s.lazy)((()=>Promise.all([o.e(6552),o.e(3154)]).then(o.bind(o,83154))));class z extends s.PureComponent{constructor(){super(...arguments),this.state={isEnable:0,eventData:{},shareText:"SHARE",viewOnText:"View on",currentIndex:null,completeData:{},personalization:{},url:null,platform:null,imgData:[],type:""},this.closeCommercePopUP=t=>{(0,n.st)("remove"),this.setState({isEnable:0,currentIndex:null,type:""}),this.props.closePopUP();var e=document.getElementsByTagName("html");e&&e[0]&&(e[0].style.overflow="")},this.getCommercePopUPEvent=t=>{void 0!==t&&""!==t&&t.card&&("post"===t.type?this.setState({url:"",isEnable:1,eventData:t,currentIndex:t.index,completeData:t.idArray,viewOnText:t.viewOnText,shareText:t.shareText,windowParent:t,imgData:t.imgData,personalization:t.personalization,type:t.type},(()=>this.CommercePopUPSlideWithArrowKey())):"submit-pic"===t.type&&this.setState({isEnable:1,type:t.type,windowParent:t}))},this.featuredPopSliderChangeIndex=t=>e=>{const{eventData:o}=this.state;-1===t?this.setState({currentIndex:o.idArray.length-1}):this.setState({currentIndex:o.idArray.length===t?0:t})},this.SliderWithKey=t=>{const{eventData:e}=this.state;-1===t?this.setState({currentIndex:e.idArray.length-1}):this.setState({currentIndex:e.idArray.length===t?0:t})},this.CommercePopUPSlideWithArrowKey=t=>{const{personalization:e}=this.state;if(e&&1===e.popupSlideShow){let e=this;(t=t||window.event)&&t.keyCode&&void 0!==t.keyCode&&(37===t.keyCode?e.SliderWithKey(e.state.currentIndex-1):39===t.keyCode?e.SliderWithKey(e.state.currentIndex+1):27===t.keyCode&&this.closeCommercePopUP())}}}componentDidMount(){const{data:t}=this.props;this.getCommercePopUPEvent(t);var e=document.getElementsByTagName("html");e&&e[0]&&(e[0].style.overflow="hidden")}componentDidUpdate(t){this.props.data!==t.data&&this.getCommercePopUPEvent(this.props.data)}render(){const{viewOnText:t,isEnable:e,currentIndex:o,personalization:a,completeData:i,eventData:n,url:d,platform:l,imgData:p,type:u}=this.state;let h=null;"post"===u&&(h=-1===o?i[n.idArray.length-1]:i[o]);const{wall:m,webFilters:_}=this.props;return 1===e&&m&&"submit-pic"===u?(0,c.jsx)(s.Suspense,{fallback:null,children:(0,c.jsx)(L,{wall:m,wallId:m.Wall.id,onClosePopUp:this.closeCommercePopUP})}):1===e&&"post"===u?(0,c.jsx)(U,{webFilters:_,wall:m,item:h,completeData:i,onClosePopUp:this.closeCommercePopUP,currentIndex:o,personalization:a,viewOnText:t,slideWithArrowKeys:this.CommercePopUPSlideWithArrowKey,featuredPopSliderChangeIndex:this.featuredPopSliderChangeIndex,hostUrl:d,platform:l,imgData:p},(0,r.Z)()):null}}const A=(0,a.$j)((t=>({wall:t.appData.wall,webFilters:t.appData.webFilters})),(t=>({closePopUP:e=>t((0,i.iT)(e))})))(z)},12549:(t,e,o)=>{o.d(e,{Z:()=>l});const s={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let a;const r=new Uint8Array(16);function i(){if(!a&&(a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!a))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(r)}const n=[];for(let c=0;c<256;++c)n.push((c+256).toString(16).slice(1));function d(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return n[t[e+0]]+n[t[e+1]]+n[t[e+2]]+n[t[e+3]]+"-"+n[t[e+4]]+n[t[e+5]]+"-"+n[t[e+6]]+n[t[e+7]]+"-"+n[t[e+8]]+n[t[e+9]]+"-"+n[t[e+10]]+n[t[e+11]]+n[t[e+12]]+n[t[e+13]]+n[t[e+14]]+n[t[e+15]]}const l=function(t,e,o){if(s.randomUUID&&!e&&!t)return s.randomUUID();const a=(t=t||{}).random||(t.rng||i)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,e){o=o||0;for(let t=0;t<16;++t)e[o+t]=a[t];return e}return d(a)}}}]);