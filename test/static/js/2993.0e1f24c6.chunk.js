"use strict";(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[2993],{52993:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(47313),r=n(98501),c=n(34041),o=n(46417);class s extends a.PureComponent{constructor(e){super(e),this.state={height:"",padding:"100",error:""}}UNSAFE_componentWillMount(){const{BannerImage:e}=this.props,t="".concat(r.A7).concat(e.path).concat(e.newName);(0,c.Z)(t).then((e=>{let{width:t,height:n}=e;return this.setState({height:n,width:t})})).catch((e=>this.setState({height:100,width:100,error:e})))}render(){const{BannerImage:e}=this.props,{width:t,height:n}=this.state,a={backgroundImage:"url(".concat(r.A7).concat(e.path).concat(e.newName,")"),height:n+"px",width:"100%"};return(0,o.jsx)("div",{className:"tb_custom_bannerTop",style:a,children:(0,o.jsx)("div",{})})}}},34041:(e,t,n)=>{n.d(t,{Z:()=>c});const a="Window variable not found",r="Timeout exception",c=(e,t)=>new Promise(((n,c)=>{if("undefined"===typeof window)return c(a);let o=null;const s=new Image;s.addEventListener("load",(()=>{o&&clearTimeout(o),n({width:s.naturalWidth,height:s.naturalHeight})})),s.addEventListener("error",(e=>{o&&clearTimeout(o),c("".concat(e.type,": ").concat(e.message))})),s.src=e,t&&(o=setTimeout((()=>c(r)),t))}))}}]);