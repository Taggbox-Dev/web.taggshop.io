"use strict";(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[385],{73385:(e,t,i)=>{i.r(t),i.d(t,{default:()=>y});var s=i(47313),a=i(97626),l=i(30192),c=i.n(l),n=(i(31881),i(32626)),o=i(68375),r=(i(19161),i(36240),i(170),i(46417));const d=()=>(0,r.jsxs)("div",{className:"uppy-Root uppy-StatusBar is-postprocessing","aria-hidden":"false",dir:"ltr",children:[(0,r.jsx)("div",{className:"uppy-StatusBar-progress is-indeterminate",role:"progressbar","aria-label":"100%","aria-valuetext":"100%","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"100",style:{width:"100%"},children:(0,r.jsx)("div",{})}),(0,r.jsxs)("div",{className:"uppy-StatusBar-content",children:[(0,r.jsx)("svg",{className:"uppy-StatusBar-spinner","aria-hidden":"true",focusable:"false",width:"14",height:"14",children:(0,r.jsx)("path",{d:"M13.983 6.547c-.12-2.509-1.64-4.893-3.939-5.936-2.48-1.127-5.488-.656-7.556 1.094C.524 3.367-.398 6.048.162 8.562c.556 2.495 2.46 4.52 4.94 5.183 2.932.784 5.61-.602 7.256-3.015-1.493 1.993-3.745 3.309-6.298 2.868-2.514-.434-4.578-2.349-5.153-4.84a6.226 6.226 0 0 1 2.98-6.778C6.34.586 9.74 1.1 11.373 3.493c.407.596.693 1.282.842 1.988.127.598.073 1.197.161 1.794.078.525.543 1.257 1.15.864.525-.341.49-1.05.456-1.592-.007-.15.02.3 0 0",fillRule:"evenodd"})}),"Uploading..."]})]});var m=i(66266),p=i.n(m);const _=class{constructor(e,t){this.uppy=new(c())({meta:{type:"avatar"},autoProceed:!0,debug:!0,allowMultipleUploads:!0,restrictions:{maxFileSize:104857600,maxNumberOfFiles:1,minNumberOfFiles:1,allowedFileTypes:["image/*","video/*"]},onBeforeFileAdded:e,onBeforeUpload:t}),this.uppy.use(p(),{params:{auth:{key:"0701d3d7f8d94e92a65a9cba388b1d96"},steps:{store:{robot:"/wasabi/store",bucket_region:"us-west-1",result:!0,bucket:"cloud.taggbox.com",key:"47ABVORKG52UYE1KB28S",secret:"pcaTfeokaz28geAAns08H3yaGbOVz6ILgTptu19v",path:"onsiteupload/images/${file.id}"}}},waitForEncoding:!0})}};var h=i(98501),u=i(17739);class b extends s.Component{constructor(){super(...arguments),this.state={isLoading:!1,selectedFile:null,selectedUrl:null,type:null,thumb_file:"",fileSize:!1,throwError:!1,videoPath:"",fileSizeText:"",mediaHeight:"",mediaWidth:""},this.beforeFileAdded=(e,t)=>{const{size:i,sizeText:s}=(0,u.RD)(e.size);(["GB","TB"].includes(s)||"MB"==s&&i>=100)&&this.setState({fileSize:!0,fileSizeText:"".concat(i).concat(s)},(()=>setTimeout((()=>this.setState({fileSize:!1,fileSizeText:""})),2e3)))},this.beforeUpload=e=>{const t=Object.keys(e);if(t&&t.length>0&&e[t[0]]&&e[t[0]].meta&&e[t[0]].meta.type.includes("video")){try{this.setState({isLoading:!0});const i=e[t[0]],s=new FormData;s.append("file",i.data),(new n.Z).post(h.so,s).then((e=>{const{responseData:t}=e.data;t&&t.length>0?this.setState({videoPath:t[0].sscode,isLoading:!1,type:5,selectedFile:t[0].s3Url,selectedUrl:t[0].s3Url,thumb_file:t[0].s3ThumbUrl},(()=>this.onUpdateLocalState())):this.setState({isLoading:!1,throwError:!0},(()=>setTimeout((()=>this.setState({throwError:!1})),2e3)))})).catch((e=>{this.setState({isLoading:!1,throwError:!0},(()=>setTimeout((()=>this.setState({throwError:!1})),2e3)))}))}catch(i){this.setState({isLoading:!1,throwError:!0},(()=>setTimeout((()=>this.setState({throwError:!1})),2e3)))}return!1}},this.uppyUploader=new _(this.beforeFileAdded,this.beforeUpload),this.onUpdateLocalState=async()=>{const{updateImageWithData:e}=this.props,{selectedUrl:t,type:i,thumb_file:s,videoPath:a,mediaHeight:l,mediaWidth:c}=this.state;var n="",o="";if(5==i){const e=await(0,u.po)(5==i?s:t);n=e.height,o=e.width}e({file:t,caption:"",review:"",rating:0,error:!1,activeTab:1,type:i,thumb_file:5==i?s:t,videoPath:a,mediaHeight:5==i?n:l,mediaWidth:5==i?o:c}),this.setState({selectedFile:null,selectedUrl:null,type:null,thumb_file:"",fileSize:!1,fileSizeText:"",videoPath:"",mediaHeight:"",mediaWidth:""},(()=>this.uppyUploader.uppy.reset()))}}componentDidMount(){this.uppyUploader.uppy.on("transloadit:result",((e,t)=>{this.setState({mediaHeight:t.meta.height,mediaWidth:t.meta.width,type:t.mime.includes("video")?5:4,selectedFile:t.id,selectedUrl:"https://cloud.taggbox.com/onsiteupload/images/".concat(t.id)},(()=>this.onUpdateLocalState()))}))}render(){const{isLoading:e,fileSize:t,throwError:i,fileSizeText:s}=this.state;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"submit_pic_uploader_wrap",children:[(0,r.jsx)(o.v0,{className:"submit_pic_uploader",note:"",uppy:this.uppyUploader.uppy,allowMultipleFiles:!1,locale:{strings:{dropHereOr:"",browse:""}}}),(0,r.jsxs)("div",{className:"submit_pic_uppy_content",children:[(0,r.jsx)("div",{className:"submit_pic_uppy_h",children:"Drag a video / image to upload"}),(0,r.jsx)("div",{className:"submit_pic_uppy_p",children:"Video Size : Max 100MB | Photo Size : Max 50MB | Max 3 Posts"})]})]}),(0,r.jsxs)("div",{className:"submit_pic_uploader_status",children:[(0,r.jsx)(o.A_,{uppy:this.uppyUploader.uppy,hideUploadButton:!0,hideAfterFinish:!1,showProgressDetails:!0}),e?(0,r.jsx)(d,{}):null,t?(0,r.jsxs)("div",{className:"submit_pic_limit_error submit_limit_size",style:{marginTop:5,display:"flex",alignItems:"center"},children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",version:"1.1",children:(0,r.jsxs)("g",{id:"Stockholm-icons-/-Code-/-Info-circle",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd",children:[(0,r.jsx)("rect",{id:"bound",x:"0",y:"0",width:"24",height:"24"}),(0,r.jsx)("circle",{id:"Oval-5",fill:"#db4b20",opacity:"0.3",cx:"12",cy:"12",r:"10"}),(0,r.jsx)("rect",{id:"Rectangle-9",fill:"#db4b20",x:"11",y:"10",width:"2",height:"7",rx:"1"}),(0,r.jsx)("rect",{id:"Rectangle-9-Copy",fill:"#db4b20",x:"11",y:"7",width:"2",height:"2",rx:"1"})]})}),"File Size (",s,") Limit Exceeded.Video Size : Max 100MB"]}):null,i?(0,r.jsxs)("div",{className:"submit_pic_limit_error submit_limit_size",style:{marginTop:5,display:"flex",alignItems:"center"},children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",version:"1.1",children:(0,r.jsxs)("g",{id:"Stockholm-icons-/-Code-/-Info-circle",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd",children:[(0,r.jsx)("rect",{id:"bound",x:"0",y:"0",width:"24",height:"24"}),(0,r.jsx)("circle",{id:"Oval-5",fill:"#db4b20",opacity:"0.3",cx:"12",cy:"12",r:"10"}),(0,r.jsx)("rect",{id:"Rectangle-9",fill:"#db4b20",x:"11",y:"10",width:"2",height:"7",rx:"1"}),(0,r.jsx)("rect",{id:"Rectangle-9-Copy",fill:"#db4b20",x:"11",y:"7",width:"2",height:"2",rx:"1"})]})}),"Something went wrong , Please try again."]}):null]})]})}}const g=b;class v extends s.Component{constructor(){super(...arguments),this.state={isActive:1},this.onUpdateTab=e=>t=>{const{index:i,updateActiveTab:s}=this.props;this.setState({isActive:e},(()=>s(i,e)))},this.ratingChanged=e=>{const{index:t,onUpdateImageAddRatings:i}=this.props;i(e,t)}}componentWillMount(){const{item:e}=this.props;this.setState({isActive:e.activeTab})}componentDidMount(){const{item:e}=this.props;this.setState({isActive:e.activeTab})}render(){const{item:e,onUpdateImageAddCaption:t,onUpdateImageAddReview:i,onUpdateImageAddRatings:s,index:l,onRemoveImage:c}=this.props,{isActive:n}=this.state;return(0,r.jsxs)("div",{className:"submit_pic_post_wrapper",children:[(0,r.jsxs)("div",{className:"submit_pic_submit_post_wrap",children:[(0,r.jsx)("img",{className:"submit_pic_submit_post",src:e.thumb_file,alt:"image"}),(0,r.jsx)("div",{className:"submit_pic_remove_post",onClick:c(l),children:(0,r.jsx)("div",{className:"tb__icon tb-times-circle",children:(0,r.jsx)("div",{})})})]}),(0,r.jsxs)("div",{className:"submit_pic_post_content",children:[(0,r.jsxs)("div",{className:"submit_pic_tab_btn_wrap",children:[(0,r.jsx)("div",{className:"submit_pic_tab_btn ".concat(1==n?"submit_pic_active_btn":""),onClick:this.onUpdateTab(1),children:"Caption"}),(0,r.jsx)("div",{className:"submit_pic_tab_txt",children:"OR"}),(0,r.jsx)("div",{className:"submit_pic_tab_btn ".concat(2==n?"submit_pic_active_btn":""),onClick:this.onUpdateTab(2),children:"Review"})]}),(0,r.jsxs)("div",{className:"submit_pic_tab_content",style:1==n?{display:"block"}:{display:"none"},children:[(0,r.jsx)("textarea",{className:"submit_pic_content_input",placeholder:"Add your caption here....",rows:"1",onChange:t(l),value:e.caption,children:e.caption}),e.error&&1==e.activeTab?(0,r.jsx)("div",{className:"submit_pic_error_",children:"* Please add caption."}):null]}),(0,r.jsxs)("div",{className:"submit_pic_tab_content",style:2==n?{display:"block"}:{display:"none"},children:[(0,r.jsx)("textarea",{className:"submit_pic_content_input",placeholder:"Add your review here....",rows:"1",onChange:i(l),value:e.review,children:e.review}),2==n?(0,r.jsx)(a.Z,{count:5,onChange:this.ratingChanged,size:20,color:"#d1d1d1",activeColor:"#F8B808",value:e.rating}):null,e.error&&2==e.activeTab?(0,r.jsx)("div",{className:"submit_pic_error_",children:"* Please add review and ratings."}):null]})]})]})}}const x=v;class j extends s.Component{render(){const{upload_image:e}=this.props;return(0,r.jsx)("div",{className:"submit_pic_products",children:e&&e.map(((e,t)=>(0,r.jsx)(x,{item:e,index:t,...this.props})))})}}const w=j;var N=i(73763);const f=e=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase());class S extends s.Component{constructor(){super(...arguments),this.state={isOpen:!0,step:1,wall_id:null,name:null,email:null,upload_image:[],receiveMail:!1,tandc:!0,nameError:!1,emailError:!1,submitErrorMessage:null,apiRequest:!1},this.onShowCloseSubmitPicPopUp=e=>{const{isOpen:t}=this.state;this.setState({isOpen:!t})},this.updateImageWithData=e=>{const{upload_image:t}=this.state;t&&t.length<3&&(t.push(e),this.setState({upload_image:t}))},this.onUpdateImageAddCaption=e=>t=>{const{upload_image:i}=this.state;i&&i.length>0&&i[e]&&(i[e].caption=t.target.value,i[e].review="",i[e].rating=0,this.setState({upload_image:i}))},this.onUpdateImageAddReview=e=>t=>{const{upload_image:i}=this.state;i&&i.length>0&&i[e]&&(i[e].review=t.target.value,i[e].caption="",this.setState({upload_image:i}))},this.onUpdateImageAddRatings=(e,t)=>{const{upload_image:i}=this.state;i&&i.length>0&&i[t]&&(i[t].caption="",i[t].rating=e,this.setState({upload_image:i}))},this.onUpdateStep=e=>t=>{var i=!1;const{upload_image:s}=this.state;2==e&&s&&s.length>0&&s.map(((e,t)=>{1==e.activeTab?""==e.caption||0==e.caption.length?(e.error=!0,i=!0):e.error=!1:2==e.activeTab&&(""==e.review||0==e.review.length||0==e.rating?(e.error=!0,i=!0):e.error=!1)})),i?this.setState({upload_image:s}):this.setState({step:e,submitErrorMessage:null})},this.onTextName=e=>{this.setState({name:e.target.value,nameError:!1},(()=>{null!=this.state.name&&0!=this.state.name.length||this.setState({nameError:!0})}))},this.onTextEmail=e=>{this.setState({email:e.target.value,emailError:!1},(()=>{null!=this.state.email&&0!=this.state.email.length&&f(this.state.email)&&!this.state.email.includes("mailinator")||this.setState({emailError:!0})}))},this.onSubmitData=e=>{const{name:t,email:i,upload_image:s,tandc:a,receiveMail:l,apiRequest:c}=this.state,{wallId:n,wall:o}=this.props;a&&t&&t.length>0&&i&&i.length>0&&f(i)&&!i.includes("mailinator")&&s&&s.length>0&&a?(this.setState({apiRequest:!0}),(0,N.uM)({wall_id:null!==o&&void 0!==o&&o.Wall.wallId?null===o||void 0===o?void 0:o.Wall.wallId:n,name:t,email:i,upload_file:s,receive_mail:l}).then((e=>{this.setState({step:3,apiRequest:!1})})).catch((e=>{const{data:t}=e.response;404==t.response_code&&this.setState({submitErrorMessage:t.message,apiRequest:!1}),console.error(e)}))):(null!=this.state.name&&0!=this.state.name.length||this.setState({nameError:!0,apiRequest:!1}),null!=this.state.email&&0!=this.state.email.length&&f(this.state.email)&&!i.includes("mailinator")||this.setState({emailError:!0,apiRequest:!1}))},this.onUpdatereceiveMail=e=>{const{receiveMail:t}=this.state;this.setState({receiveMail:!t})},this.onUpdatetandc=e=>{const{tandc:t}=this.state;this.setState({tandc:!t})},this.removeProductImage=e=>t=>{const{upload_image:i}=this.state;i&&i.length>0&&i.splice(e,1),this.setState({upload_image:i})},this.updateActiveTab=(e,t)=>{let{upload_image:i}=this.state;i&&i.length>0&&i.map(((s,a)=>{a==e&&(i[a].activeTab=t)})),this.setState({upload_image:i})}}render(){const{isOpen:e,upload_image:t,step:i,name:s,email:l,receiveMail:c,tandc:n,nameError:o,emailError:d,submitErrorMessage:m,apiRequest:p}=this.state,{wall:_,onClosePopUp:h}=this.props;return(0,r.jsx)(r.Fragment,{children:e?(0,r.jsx)("div",{id:"modalPost",className:"modalId716 submit_pic_tb_modal_001 submit_pic_tb_fade submit_pic_modal-text-image  submit_pic_webModalPopup submit_pic_themeModal55 ",children:(0,r.jsx)("div",{className:"submit_pic_tb_modal_dialog submit_pic_taggModal",children:(0,r.jsx)("div",{className:"submit_pic_tb_conetent",children:3==i?(0,r.jsxs)("div",{className:"submit_pic_success_modal_body",children:[(0,r.jsx)("div",{className:"submit_pic_tb_close_wrap",children:(0,r.jsx)("div",{className:"submit_pic_tb_close_btn","data-dismiss":"modal",onClick:h,children:(0,r.jsx)("div",{className:"tb__icon tb-times",children:(0,r.jsx)("div",{})})})}),(0,r.jsxs)("div",{className:"submit_pic_success_modal_content",children:[(0,r.jsx)("div",{className:"submit_pic_success_modal_content_h",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"65",height:"65",viewBox:"0 0 75 75",children:(0,r.jsxs)("g",{"data-name":"Group 7979",transform:"translate(-1011 -411)",children:[(0,r.jsx)("circle",{id:"Ellipse_454","data-name":"Ellipse 454",cx:"37.5",cy:"37.5",r:"37.5",transform:"translate(1011 411)",fill:"#6ac259"}),(0,r.jsx)("g",{id:"Group_4566","data-name":"Group 4566",transform:"translate(1033.57 437.042)",children:(0,r.jsx)("path",{id:"Path_5270","data-name":"Path 5270",d:"M275.762,248.9a3.647,3.647,0,0,0-5.134,0l-13.115,13.115-3.759-3.792a3.693,3.693,0,0,0-5.134,5.266l5.992,6.349a3.706,3.706,0,0,0,5.187,0L275.776,254.1a3.713,3.713,0,0,0-.013-5.206Z",transform:"translate(-247.74 -247.84)",fill:"#fff"})})]})})}),(0,r.jsx)("div",{className:"submit_pic_success_modal_content_p tb-cTSfont-".concat(_.UgcSettings.onsite_font_varient_msg),style:{color:"#ffffff"==_.UgcSettings.onsite_thank_txt_color?"#000000":_.UgcSettings.onsite_thank_txt_color,fontFamily:_.UgcSettings.onsite_css_font_msg,fontSize:parseInt(_.UgcSettings.onsite_thank_fontSize)},children:_.UgcSettings.onsite_status?_.UgcSettings.onsite_succ_msg:"Thank you for sharing your amazing content with us."}),(0,r.jsx)("div",{className:"submit_pic_success_modal_close_btn",onClick:h,children:"Close"})]})]}):(0,r.jsxs)("div",{className:"submit_pic_tb_modal_body",children:[(0,r.jsx)("div",{className:"submit_pic_tb_close_wrap",children:(0,r.jsx)("div",{className:"submit_pic_tb_close_btn","data-dismiss":"modal",onClick:h,children:(0,r.jsx)("div",{className:"tb__icon tb-times",children:(0,r.jsx)("div",{})})})}),(0,r.jsxs)("div",{className:"submit_pic_tb_modal_body_wrap",children:[(0,r.jsx)("div",{className:"submit_pic_tb_details_left",children:1==i?(0,r.jsxs)("div",{className:"submit_pic_tb_media_wrap_002",children:[(0,r.jsx)("div",{className:"submit_pic_h3",children:_.UgcSettings.onsite_status?_.UgcSettings.onsite_popup_title:"Share Your Images With Us"}),(0,r.jsxs)("div",{className:"submit_pic_p",children:[" ",_.UgcSettings.onsite_status?_.UgcSettings.onsite_popup_sub_heading:"Upload your image featuring our brand products and get a chance to feature in our UGC lookbook. "," "]}),(0,r.jsx)("div",{className:"submit_pic_uploader_container",children:(0,r.jsx)(g,{updateImageWithData:this.updateImageWithData})})]}):(0,r.jsxs)("div",{className:"submit_pic_tb_media_wrap_002",children:[(0,r.jsx)("div",{className:"submit_pic_h3",children:"Fill following information"}),(0,r.jsxs)("div",{className:"submit_pic_strong",children:[(0,r.jsx)("div",{className:"submit_pic_required",children:"*"})," Indicates required field"]}),(0,r.jsxs)("div",{className:"submit_pic_post_submit_form_wrap",children:[(0,r.jsxs)("div",{className:"submit_pic_post_submit_form",children:[(0,r.jsxs)("div",{className:"submit_pic_form_group",children:[(0,r.jsxs)("div",{className:"submit_pic_form_label",for:"displayName",children:["Display Name ",(0,r.jsx)("div",{className:"submit_pic_required",children:"*"})]}),(0,r.jsx)("input",{className:"submit_pic_input_box",type:"text",id:"displayName",name:"firstname",placeholder:"Enter your name..",onChange:this.onTextName,value:s}),o?(0,r.jsx)("div",{className:"submit_pic_error_",children:"* Please enter correct display name."}):null]}),(0,r.jsxs)("div",{className:"submit_pic_form_group",children:[(0,r.jsxs)("div",{className:"submit_pic_form_label",for:"emailID",children:["Email Address ",(0,r.jsx)("div",{className:"submit_pic_required",children:"*"})]}),(0,r.jsx)("input",{className:"submit_pic_input_box",value:l,type:"text",id:"emailID",name:"lastname",placeholder:"Enter your email id..",onChange:this.onTextEmail}),d?(0,r.jsx)("div",{className:"submit_pic_error_",children:"* Please enter correct email."}):null]})]}),(0,r.jsxs)("div",{className:"submit_pic_form_terms",children:[(0,r.jsx)("div",{className:"submit_pic_email_updates",children:(0,r.jsxs)("label",{className:"submit_pic_checkbox_",for:"receiveMail____",children:[(0,r.jsx)("input",{type:"checkbox",id:"receiveMail____",name:"receiveMail",checked:c,onClick:this.onUpdatereceiveMail}),(0,r.jsx)("div",{className:"submit_pic_checkbox__in",children:(0,r.jsx)("div",{})}),"I want to receive email updates from this brand."]})}),(0,r.jsxs)("div",{className:"submit_pic_terms_conditions",children:["By clicking on Submit, you are agreeing to our ",(0,r.jsx)("a",{href:_.UgcSettings.onsite_term_url,target:"_blank",children:" terms and conditions "}),(0,r.jsx)("div",{className:"submit_pic_required",children:"*"})]}),0==n?(0,r.jsx)("div",{className:"submit_pic_error_",children:"* Please agree to the terms and conditions to submit your media."}):null,m&&m.length>0?(0,r.jsxs)("div",{className:"submit_pic_limit_error",children:[(0,r.jsx)("div",{className:"tb__icon tb-info-circle",children:(0,r.jsx)("div",{})}),m]}):null]})]})]})}),(0,r.jsx)("div",{className:"submit_pic_tb_details_right",children:(0,r.jsx)("div",{className:"submit_pic_tb_content_wrap",children:(0,r.jsxs)("div",{className:"submit_pic_tb_post_detail_wrap",children:[(0,r.jsx)("div",{className:"submit_pic_tb_post_wrapper tb_submit_pic_product",children:1==i?(0,r.jsx)("div",{className:"tb_product_submit_scroll",children:t&&t.length>0?(0,r.jsx)(w,{upload_image:t,onUpdateImageAddCaption:this.onUpdateImageAddCaption,onUpdateImageAddReview:this.onUpdateImageAddReview,onUpdateImageAddRatings:this.onUpdateImageAddRatings,onRemoveImage:this.removeProductImage,updateActiveTab:this.updateActiveTab}):(0,r.jsxs)("div",{className:"submit_pic_tb_img_holder",children:[(0,r.jsx)("img",{className:"submit_pic_content_no_img",src:"https://cloud.taggbox.com/embed-build/commerce/assets/images/image_icon.svg",alt:"image"}),(0,r.jsx)("div",{className:"submit_pic_content_p",children:"No content uploaded."})]})}):(0,r.jsx)("div",{className:"tb_product_submit_scroll",children:t&&t.length>0?t.map(((e,t)=>(0,r.jsxs)("div",{className:"submit_pic_post_data_wrap",children:[(0,r.jsxs)("div",{className:"submit_pic_submit_post_wrap",children:[(0,r.jsx)("img",{className:"submit_pic_submit_post",src:e.thumb_file,alt:"image"}),(0,r.jsx)("div",{className:"submit_pic_remove_post",onClick:this.removeProductImage(t),children:(0,r.jsx)("div",{className:"tb__icon tb-times-circle",children:(0,r.jsx)("div",{})})})]}),(0,r.jsxs)("div",{className:"submit_pic_submit_post_content_wrap",children:[(0,r.jsx)("div",{className:"submit_pic_submit_post_content",children:e.caption&&e.caption.length>0?e.caption:e.review&&e.review.length>0?e.review:null}),""==e.caption&&e.rating||e.review&&e.review.length>0?(0,r.jsx)(a.Z,{edit:!1,count:5,size:16,color:"#d1d1d1",activeColor:"#F8B808",value:e.rating}):null]})]},t))):(0,r.jsxs)("div",{className:"submit_pic_tb_img_holder",children:[(0,r.jsx)("img",{className:"submit_pic_content_no_img",src:"https://cloud.taggbox.com/widget-embed/no-camera.svg",alt:"image"}),(0,r.jsx)("div",{className:"submit_pic_content_p",children:"No content uploaded."})]})})}),(0,r.jsxs)("div",{className:"submit_pic_tb_post_footer",children:[(0,r.jsx)("div",{children:2==i?(0,r.jsx)("div",{className:"submit_pic_btn_outline",onClick:this.onUpdateStep(1),children:"Back"}):""}),(0,r.jsx)("div",{className:"submit_pic_btn ".concat(t.length>0?"":"submit_pic_disabled"," ").concat(1==i?"":p?"submit_pic_spinner":""),onClick:t.length>0?1==i?this.onUpdateStep(2):this.onSubmitData:null,children:(0,r.jsx)("span",{children:1==i?"Next":"".concat(_.UgcSettings.onsite_popup_btn_txt)})})]})]})})})]})]})})})}):null})}}const y=S}}]);