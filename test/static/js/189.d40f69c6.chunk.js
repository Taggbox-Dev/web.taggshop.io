"use strict";(self.webpackChunkcommerce_themes_update=self.webpackChunkcommerce_themes_update||[]).push([[189],{6189:(e,r,s)=>{s.r(r),s.d(r,{default:()=>y});var t=s(47313),o=s(98501),a=s(46417);class l extends t.PureComponent{render(){return(0,a.jsxs)("div",{className:"tb_error_content",children:[(0,a.jsx)("div",{className:"tb_error_title",children:"No Posts!"}),(0,a.jsx)("div",{className:"tb_error_des",children:"If Moderation is ON, then the posts might be in the moderation section and you need to approve them by going to MODERATION."}),(0,a.jsx)("div",{className:"tb_error_des",children:"Else, there might not be any posts on feeds which you have added."})]})}}class n extends t.PureComponent{render(){const{wall:e}=this.props;return(0,a.jsxs)("div",{className:"tb_error_content",children:[(0,a.jsx)("div",{className:"tb_error_title",children:"No Feeds!"}),(0,a.jsx)("div",{className:"tb_error_des",children:"It seems you have not added any Feed. Please Add Social Networks !"})]})}}var d=s(35179);class c extends t.PureComponent{constructor(){super(...arguments),this.onClicktoUrl=e=>r=>{window.top.location.href=e}}render(){const{wall:e}=this.props;return(0,a.jsxs)("div",{className:"tb_error_content",children:[(0,a.jsx)("div",{className:"tb_error_title",children:"Feed Not Activated!"}),(0,a.jsxs)("div",{className:"tb_error_des",children:["It seems you have not actived any Feed. Please Activate feed from your",(0,a.jsx)("a",{onClick:this.onClicktoUrl("".concat(d.xt,"wall/index/").concat(e.Wall.id)),className:"manage-feed",style:{cursor:"pointer"},children:" wall editor"})]})]})}}class i extends t.PureComponent{constructor(){super(...arguments),this.onClicktoUrl=e=>r=>{window.top.location.href=e}}render(){const{wall:e}=this.props;return(0,a.jsxs)("div",{className:"tb_error_content",children:[(0,a.jsx)("div",{className:"tb_error_title",children:"Feed Not Authorized!"}),(0,a.jsxs)("div",{className:"tb_error_des",children:["It seems you have not authorized any Feed. Please ",(0,a.jsx)("a",{style:{cursor:"pointer"},onClick:this.onClicktoUrl("".concat(d.xt,"wall/index/").concat(e.Wall.id)),className:"manage-feed",children:"Click here"})," to authorize Feed !"]})]})}}class h extends t.PureComponent{render(){const{wall:e,error:r}=this.props;return(0,a.jsxs)("div",{className:"tb_error_content",children:[(0,a.jsxs)("div",{className:"tb_error_title",children:["No ",r.post_message,"!"]}),(0,a.jsxs)("div",{className:"tb_error_des",children:["It seems there are no ",r.post_message," available on the entered ",(0,a.jsxs)("div",{className:"strongCssSpan",children:[o.QE["".concat(r.older_post)],r.older_days]}),". All Upcoming posts will appear here."]}),(0,a.jsx)("div",{className:"tb_error_title",children:"OR"}),(0,a.jsx)("div",{className:"tb_error_des",children:"You can Click here to create another feed."})]})}}class _ extends t.PureComponent{render(){const{wall:e,error:r}=this.props;return(0,a.jsxs)("div",{className:"tb_error_content",children:[(0,a.jsx)("div",{className:"tb_error_title",children:"No Tweets!"}),(0,a.jsxs)("div",{className:"tb_error_des",children:["It seems there are no tweets available on the entered ",(0,a.jsxs)("div",{className:"strongCssSpan",children:[o.QE["".concat(r.older_post)],r.older_days," "]}),". All Upcoming tweets will appear here."]})]})}}class m extends t.PureComponent{render(){const{wall:e}=this.props;return(0,a.jsxs)("div",{className:"tb_error_content",children:[(0,a.jsx)("div",{className:"tb_error_title",children:"No Posts!"}),(0,a.jsxs)("div",{className:"tb_error_des",children:["It seems your all posts are private. Please go to ",(0,a.jsx)("a",{href:"".concat(d.xt,"moderation/index/").concat(e.Wall.id),target:"_blank",rel:"noreferrer",children:"Moderation"})," and make some posts public."]})]})}}var p=s(70816),x=s.n(p);class v extends t.PureComponent{render(){const{wall:e,error:r}=this.props;return(0,a.jsxs)("div",{className:"tb_error_content",children:[(0,a.jsx)("div",{className:"tb_error_title",children:"No Posts!"}),(0,a.jsxs)("div",{className:"tb_error_des",children:["It seems available posts are older than ",8!==r.older_days?"".concat(r.older_days," Days"):x()(new Date(1e3*r.older_post)).format("LL"),". "," All new posts will appear here."]})]})}}class N extends t.PureComponent{render(){return(0,a.jsxs)("div",{className:"tb_error_content",children:[(0,a.jsx)("div",{className:"tb_error_title",children:"No Posts!"}),(0,a.jsx)("div",{className:"tb_error_des",children:"It seems there are no posts with image and video."})]})}}class b extends t.PureComponent{render(){return(0,a.jsxs)("div",{className:"tb_error_content",children:[(0,a.jsx)("div",{className:"tb_error_title",children:"No Posts!"}),(0,a.jsx)("div",{className:"tb_error_des",children:"It seems there are no posts with image and video."})]})}}class j extends t.PureComponent{render(){const{wall:e,error:r}=this.props;return(0,a.jsxs)("div",{className:"tb_error_content",children:[(0,a.jsx)("div",{className:"tb_error_title",children:"No Posts!"}),(0,a.jsxs)("div",{className:"tb_error_des",children:["It seems there are no posts available on the entered ",o.QE["".concat(r.older_post)],r.older_days,". All Upcoming posts will appear here."]}),(0,a.jsx)("div",{className:"tb_error_title",children:"OR"}),(0,a.jsx)("div",{className:"tb_error_des",children:"Post are older than 24 hours."})]})}}class u extends t.PureComponent{render(){const{wall:e,error:r}=this.props;return(0,a.jsxs)("div",{className:"tb_error_content",children:[(0,a.jsx)("div",{className:"tb_error_title",children:"No Posts!"}),(0,a.jsxs)("div",{className:"tb_error_des",children:["Only newly posted Instagram ",r.older_days," will be displayed. Unlike other feed sources, ",r.older_days,"  posted in the past will not be retrieved."]})]})}}class g extends t.PureComponent{render(){const{wall:e,error:r}=this.props;return(0,a.jsxs)("div",{className:"tb_error_content",children:[(0,a.jsx)("div",{className:"tb_error_title",children:"Shoppable gallery is not active"}),(0,a.jsx)("div",{className:"tb_error_des",children:"Oops! Seems like there is something went wrong. If you are the owner of this Taggshop account, Please click below link to access your account."}),(0,a.jsx)("div",{className:"tb_error_page_actions"})]})}}var w=s(17739);class y extends t.PureComponent{render(){const{wall:e,errorData:r}=this.props,s=r.themeError.error_code,t={backgroundImage:"url(".concat(o.E,"taggshop-theme/media/error/nopost.png)")},d={backgroundImage:"url(".concat(o.E,"taggshop-theme/logo/logo-taggshop.svg)")};return(0,a.jsxs)("div",{className:"tb_error_page",children:[(0,a.jsx)("div",{className:"tb_error_page_bg",style:t,children:(0,a.jsx)("div",{})}),(0,a.jsxs)("div",{className:"tb_error_page_wrapper",children:[201===s?(0,a.jsx)(l,{}):202===s?(0,a.jsx)(n,{wall:e}):203===s?(0,a.jsx)(c,{wall:e}):204===s?(0,a.jsx)(i,{wall:e}):205===s?(0,a.jsx)(h,{wall:e,error:r.themeError}):206===s?(0,a.jsx)(_,{wall:e,error:r.themeError}):207===s?(0,a.jsx)(m,{wall:e,error:r.themeError}):208===s?(0,a.jsx)(v,{wall:e,error:r.themeError}):209===s?(0,a.jsx)(N,{wall:e,error:r.themeError}):210===s?(0,a.jsx)(b,{wall:e,error:r.themeError}):211===s?(0,a.jsx)(j,{wall:e,error:r.themeError}):212===s?(0,a.jsx)(u,{wall:e,error:r.themeError}):404===s||400===s?(0,a.jsx)(g,{wall:e,error:r}):"",(0,a.jsx)("div",{className:"tb_error_page_logo",children:(0,w.G)()?(0,a.jsx)("span",{className:"tb_error_page_logo_ico",style:d}):(0,a.jsx)("a",{href:"https://taggshop.io/?utm_source=Not_active_logo&utm_medium=https%3A%2F%2Ftaggbox.com&utm_campaign=commerce_not_active",className:"tb_error_page_logo_ico",style:d})})]})]})}}}}]);