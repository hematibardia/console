(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[7092],{23804:function(e,n,t){"use strict";t(72791);var r=t(11135),i=t(25787),o=t(61889),a=t(80184);n.Z=(0,i.Z)((function(e){return(0,r.Z)({root:{border:"1px solid #E2E2E2",borderRadius:2,backgroundColor:"#FBFAFA",paddingLeft:25,paddingTop:31,paddingBottom:21,paddingRight:30},leftItems:{fontSize:16,fontWeight:"bold",marginBottom:15,display:"flex",alignItems:"center","& .min-icon":{marginRight:15,height:28,width:38}},helpText:{fontSize:16,paddingLeft:5}})}))((function(e){var n=e.classes,t=e.iconComponent,r=e.title,i=e.help;return(0,a.jsx)("div",{className:n.root,children:(0,a.jsxs)(o.ZP,{container:!0,children:[(0,a.jsxs)(o.ZP,{item:!0,xs:12,className:n.leftItems,children:[t,r]}),(0,a.jsx)(o.ZP,{item:!0,xs:12,className:n.helpText,children:i})]})})}))},81806:function(e,n,t){"use strict";var r=t(1413),i=t(45987),o=(t(72791),t(11135)),a=t(25787),c=t(80184),s=["classes","children"];n.Z=(0,a.Z)((function(e){return(0,o.Z)({root:{padding:0,margin:0,border:0,backgroundColor:"transparent",textDecoration:"underline",cursor:"pointer",fontSize:"inherit",color:e.palette.info.main,fontFamily:"Lato, sans-serif"}})}))((function(e){var n=e.classes,t=e.children,o=(0,i.Z)(e,s);return(0,c.jsx)("button",(0,r.Z)((0,r.Z)({},o),{},{className:n.root,children:t}))}))},75578:function(e,n,t){"use strict";var r=t(1413),i=t(72791),o=t(80184);n.Z=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;function t(t){return(0,o.jsx)(i.Suspense,{fallback:n,children:(0,o.jsx)(e,(0,r.Z)({},t))})}return t}},47986:function(e,n,t){"use strict";t(72791);var r=t(61889),i=t(64554),o=t(23804),a=t(80184);n.Z=function(e){var n=e.iconComponent,t=e.entity;return(0,a.jsx)(r.ZP,{container:!0,alignItems:"center",children:(0,a.jsx)(r.ZP,{item:!0,xs:12,children:(0,a.jsx)(o.Z,{title:"".concat(t," not available"),iconComponent:n,help:(0,a.jsxs)(i.Z,{sx:{fontSize:"14px",display:"flex",border:"none",flexFlow:{xs:"column",md:"row"},"& a":{color:function(e){return e.colors.link},textDecoration:"underline"}},children:[(0,a.jsx)("div",{children:"This feature is not available for a single-disk setup."}),(0,a.jsxs)("div",{children:["Please deploy a server in"," ",(0,a.jsx)("a",{href:"https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-multi-node-multi-drive.html?ref=con",target:"_blank",rel:"noreferrer",children:"Distributed Mode"})," ","to use this feature."]})]})})})})}},59114:function(e,n,t){"use strict";var r=t(4942),i=t(1413),o=(t(72791),t(63466)),a=t(74900),c=t(27391),s=t(25787),l=t(11135),u=t(23814),d=t(80184);n.Z=(0,s.Z)((function(e){return(0,l.Z)({searchField:(0,i.Z)({},u.qg.searchField),adornment:{}})}))((function(e){var n=e.placeholder,t=void 0===n?"":n,i=e.classes,s=e.onChange,l=e.adornmentPosition,u=void 0===l?"end":l,m=e.overrideClass,h=e.value,f=(0,r.Z)({disableUnderline:!0},"".concat(u,"Adornment"),(0,d.jsx)(o.Z,{position:u,className:i.adornment,children:(0,d.jsx)(a.Z,{})}));return(0,d.jsx)(c.Z,{placeholder:t,className:m||i.searchField,id:"search-resource",label:"",InputProps:f,onChange:function(e){s(e.target.value)},variant:"standard",value:h})}))},28770:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return B}});var r=t(29439),i=t(1413),o=t(72791),a=t(26181),c=t.n(a),s=t(60364),l=t(11135),u=t(25787),d=t(64554),m=t(40986),h=t(75952),f=t(61889),p=t(23814),x=t(56096),v=t(81207),j=t(92983),g=t(28789),Z=t(32291),b=t(23804),y=t(81806),F=t(74794),C=t(59114),w=t(75578),T=t(47986),k=t(56087),I=t(38442),S=t(34345),z=t(87995),P=t(16871),O=t(25469),M=t(27454),N=t(80184),A=function(e){return(0,N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",children:(0,N.jsx)("path",{id:"online-icon",d:"M7,14a7.052,7.052,0,0,1-1.411-.142,6.962,6.962,0,0,1-2.5-1.053A7.02,7.02,0,0,1,.55,9.725,6.965,6.965,0,0,1,.142,8.411a7.068,7.068,0,0,1,0-2.821A6.962,6.962,0,0,1,1.2,3.086,7.02,7.02,0,0,1,4.275.55,6.965,6.965,0,0,1,5.589.142a7.068,7.068,0,0,1,2.821,0,6.962,6.962,0,0,1,2.5,1.053,7.02,7.02,0,0,1,2.536,3.08,6.965,6.965,0,0,1,.408,1.314,7.068,7.068,0,0,1,0,2.821,6.962,6.962,0,0,1-1.053,2.5,7.02,7.02,0,0,1-3.08,2.536,6.965,6.965,0,0,1-1.314.408A7.052,7.052,0,0,1,7,14ZM3.958,6h0L2.953,7.008l3.016,3.016L10.995,5,9.99,3.992,5.969,8.013,3.958,6Z",fill:"#4ccb92"})})},E=function(e){return(0,N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",children:(0,N.jsx)("path",{id:"offline-icon",d:"M91.4,4.551l-.825-.825-2.44,2.439L85.7,3.726l-.825.825L87.312,6.99,84.873,9.429l.825.825,2.439-2.439,2.44,2.439.825-.825L88.961,6.99Zm-.155,9.44H85.027l-3.89-4.279V4.269L85.027-.01h6.219l3.89,4.279V9.711Z",transform:"translate(-81.136 0.01)",fill:"#c83b51","fill-rule":"evenodd"})})},L=(0,w.Z)(o.lazy((function(){return t.e(4414).then(t.bind(t,34414))}))),B=(0,u.Z)((function(e){return(0,l.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},p.OR),p.qg),p.Je),p.fc),(0,p.Bz)(e.spacing(4))),{},{customConfigurationPage:{minHeight:400},actionsTray:(0,i.Z)({},p.OR.actionsTray),searchField:(0,i.Z)((0,i.Z)({},p.qg.searchField),{},{marginRight:"auto",maxWidth:380}),rightActionButtons:{display:"flex","& button":{whiteSpace:"nowrap"}}},p.VX))}))((function(e){var n=e.classes,t=(0,O.TL)(),i=(0,P.s0)(),a=(0,s.v9)(z.N5),l=(0,o.useState)([]),u=(0,r.Z)(l,2),p=u[0],w=u[1],B=(0,o.useState)(""),R=(0,r.Z)(B,2),D=R[0],_=R[1],V=(0,o.useState)(!0),H=(0,r.Z)(V,2),K=H[0],X=H[1],q=(0,o.useState)(!1),Y=(0,r.Z)(q,2),U=Y[0],G=Y[1],W=(0,o.useState)({type:"unsupported",status:!1}),J=(0,r.Z)(W,2),Q=J[0],$=J[1],ee=(0,I.F)(k.C3,[k.Ft.ADMIN_SET_TIER]);(0,o.useEffect)((function(){if(K)if(a){v.Z.invoke("GET","/api/v1/admin/tiers").then((function(e){w(e.items||[]),X(!1)})).catch((function(e){t((0,z.Ih)(e)),X(!1)}))}else X(!1)}),[K,t,a]);var ne=p.filter((function(e){if(""===D)return!0;var n=c()(e,"".concat(e.type,".name"),""),t=c()(e,"type","");return n.indexOf(D)>=0||t.indexOf(D)>=0})),te=function(){i(k.gA.TIERS_ADD)};return(0,N.jsxs)(o.Fragment,{children:[U&&(0,N.jsx)(L,{open:U,tierData:Q,closeModalAndRefresh:function(){G(!1)}}),(0,N.jsx)(Z.Z,{label:"Tiers"}),(0,N.jsx)(F.Z,{children:a?(0,N.jsxs)(o.Fragment,{children:[(0,N.jsxs)(f.ZP,{item:!0,xs:12,className:n.actionsTray,children:[(0,N.jsx)(C.Z,{placeholder:"Filter",onChange:_,overrideClass:n.searchField,value:D}),(0,N.jsxs)("div",{className:n.rightActionButtons,children:[(0,N.jsx)(h.zx,{id:"refresh-list",icon:(0,N.jsx)(g.default,{}),label:"Refresh List",onClick:function(){X(!0)}}),(0,N.jsx)(M.Z,{tooltip:ee?"":"You require additional permissions in order to create a new Tier. Please ask your MinIO administrator to grant you "+k.Ft.ADMIN_SET_TIER+" permission in order to create a Tier.",children:(0,N.jsx)(I.s,{scopes:[k.Ft.ADMIN_SET_TIER],resource:k.C3,errorProps:{disabled:!0},children:(0,N.jsx)(h.zx,{id:"add-tier",icon:(0,N.jsx)(x.dtP,{}),label:"Create Tier",onClick:te,variant:"callAction"})})})]})]}),K&&(0,N.jsx)(m.Z,{}),!K&&(0,N.jsxs)(o.Fragment,{children:[p.length>0&&(0,N.jsxs)(o.Fragment,{children:[(0,N.jsx)(f.ZP,{item:!0,xs:12,className:n.tableBlock,children:(0,N.jsx)(I.s,{scopes:[k.Ft.ADMIN_LIST_TIERS],resource:k.C3,errorProps:{disabled:!0},children:(0,N.jsx)(j.Z,{itemActions:[{type:"edit",onClick:function(e){$(e),G(!0)}}],columns:[{label:"Tier Name",elementKey:"type",renderFunction:function(e){var n=c()(e,"".concat(e.type,".name"),"");return null!==n?(0,N.jsx)("b",{children:n}):""},renderFullObject:!0},{label:"Status",elementKey:"status",renderFunction:function(e){return e?(0,N.jsxs)(f.ZP,{container:!0,sx:{display:"flex",alignItems:"center",justifyItems:"start",color:"#4CCB92",fontSize:"8px"},flexDirection:"column",display:"flex",children:[(0,N.jsx)(A,{}),"ONLINE"]}):(0,N.jsxs)(f.ZP,{container:!0,sx:{display:"flex",alignItems:"center",color:"#C83B51",fontSize:"8px"},flexDirection:"column",display:"flex",children:[(0,N.jsx)(E,{}),"OFFLINE"]})},width:50},{label:"Type",elementKey:"type",renderFunction:function(e){var n=(S.Bh.find((function(n){return n.serviceName===e}))||{}).logoXs;return e?(0,N.jsx)(d.Z,{sx:{display:"flex",alignItems:"center","& .min-icon":{width:"18px",height:"22px"}},children:n}):""},width:50},{label:"Endpoint",elementKey:"type",renderFunction:function(e){var n=c()(e,"".concat(e.type,".endpoint"),"");return null!==n?n:""},renderFullObject:!0},{label:"Bucket",elementKey:"type",renderFunction:function(e){var n=c()(e,"".concat(e.type,".bucket"),"");return null!==n?n:""},renderFullObject:!0},{label:"Prefix",elementKey:"type",renderFunction:function(e){var n=c()(e,"".concat(e.type,".prefix"),"");return null!==n?n:""},renderFullObject:!0},{label:"Region",elementKey:"type",renderFunction:function(e){var n=c()(e,"".concat(e.type,".region"),"");return null!==n?n:""},renderFullObject:!0},{label:"Usage",elementKey:"type",renderFunction:function(e){var n=c()(e,"".concat(e.type,".usage"),"");return null!==n?n:""},renderFullObject:!0},{label:"Objects",elementKey:"type",renderFunction:function(e){var n=c()(e,"".concat(e.type,".objects"),"");return null!==n?n:""},renderFullObject:!0},{label:"Versions",elementKey:"type",renderFunction:function(e){var n=c()(e,"".concat(e.type,".versions"),"");return null!==n?n:""},renderFullObject:!0}],isLoading:K,records:ne,entityName:"Tiers",idField:"service_name",customPaperHeight:n.customConfigurationPage})})}),(0,N.jsx)(f.ZP,{item:!0,xs:12,sx:{marginTop:"15px"},children:(0,N.jsx)(b.Z,{title:"Learn more about TIERS",iconComponent:(0,N.jsx)(x.y2Y,{}),help:(0,N.jsxs)(o.Fragment,{children:["Tiers are used by the MinIO Object Lifecycle Management which allows creating rules for time or date based automatic transition or expiry of objects. For object transition, MinIO automatically moves the object to a configured remote storage tier.",(0,N.jsx)("br",{}),(0,N.jsx)("br",{}),"You can learn more at our"," ",(0,N.jsx)("a",{href:"https://min.io/docs/minio/linux/administration/object-management/object-lifecycle-management.html?ref=con",target:"_blank",rel:"noreferrer",children:"documentation"}),"."]})})})]}),0===p.length&&(0,N.jsx)(f.ZP,{container:!0,justifyContent:"center",alignContent:"center",alignItems:"center",children:(0,N.jsx)(f.ZP,{item:!0,xs:8,children:(0,N.jsx)(b.Z,{title:"Tiers",iconComponent:(0,N.jsx)(x.y2Y,{}),help:(0,N.jsxs)(o.Fragment,{children:["Tiers are used by the MinIO Object Lifecycle Management which allows creating rules for time or date based automatic transition or expiry of objects. For object transition, MinIO automatically moves the object to a configured remote storage tier.",(0,N.jsx)("br",{}),(0,N.jsx)("br",{}),ee?(0,N.jsxs)("div",{children:["To get started,"," ",(0,N.jsx)(y.Z,{onClick:te,children:"Create Tier"}),"."]}):""]})})})})]})]}):(0,N.jsx)(T.Z,{entity:"Tiers",iconComponent:(0,N.jsx)(x.gXu,{})})})]})}))},34345:function(e,n,t){"use strict";t.d(n,{Bh:function(){return l},Pp:function(){return o},b2:function(){return c},f0:function(){return a},vB:function(){return s}});var r=t(56096),i=t(80184),o="minio",a="gcs",c="s3",s="azure",l=[{serviceName:o,targetTitle:"MinIO",logo:(0,i.jsx)(r.$E9,{}),logoXs:(0,i.jsx)(r.YEz,{})},{serviceName:a,targetTitle:"Google Cloud Storage",logo:(0,i.jsx)(r.UQG,{}),logoXs:(0,i.jsx)(r.Vwu,{})},{serviceName:c,targetTitle:"AWS S3",logo:(0,i.jsx)(r.feu,{}),logoXs:(0,i.jsx)(r.Xj3,{})},{serviceName:s,targetTitle:"Azure",logo:(0,i.jsx)(r.jze,{}),logoXs:(0,i.jsx)(r.nAe,{})}]},26759:function(e,n,t){"use strict";var r=t(64836);n.Z=void 0;var i=r(t(45649)),o=t(80184),a=(0,i.default)((0,o.jsx)("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown");n.Z=a},70366:function(e,n,t){"use strict";var r=t(64836);n.Z=void 0;var i=r(t(45649)),o=t(80184),a=(0,i.default)((0,o.jsx)("path",{d:"m7 14 5-5 5 5z"}),"ArrowDropUp");n.Z=a},97911:function(e,n,t){"use strict";var r=t(64836);n.Z=void 0;var i=r(t(45649)),o=t(80184),a=(0,i.default)((0,o.jsx)("path",{d:"M14.67 5v14H9.33V5h5.34zm1 14H21V5h-5.33v14zm-7.34 0V5H3v14h5.33z"}),"ViewColumn");n.Z=a},94454:function(e,n,t){"use strict";t.d(n,{Z:function(){return T}});var r=t(4942),i=t(63366),o=t(87462),a=t(72791),c=t(94419),s=t(12065),l=t(97278),u=t(76189),d=t(80184),m=(0,u.Z)((0,d.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),h=(0,u.Z)((0,d.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),f=(0,u.Z)((0,d.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=t(14036),x=t(31402),v=t(66934),j=t(21217);function g(e){return(0,j.Z)("MuiCheckbox",e)}var Z=(0,t(75878).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),b=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],y=(0,v.ZP)(l.Z,{shouldForwardProp:function(e){return(0,v.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.indeterminate&&n.indeterminate,"default"!==t.color&&n["color".concat((0,p.Z)(t.color))]]}})((function(e){var n,t=e.theme,i=e.ownerState;return(0,o.Z)({color:(t.vars||t).palette.text.secondary},!i.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===i.color?t.vars.palette.action.activeChannel:t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,s.Fq)("default"===i.color?t.palette.action.active:t.palette[i.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==i.color&&(n={},(0,r.Z)(n,"&.".concat(Z.checked,", &.").concat(Z.indeterminate),{color:(t.vars||t).palette[i.color].main}),(0,r.Z)(n,"&.".concat(Z.disabled),{color:(t.vars||t).palette.action.disabled}),n))})),F=(0,d.jsx)(h,{}),C=(0,d.jsx)(m,{}),w=(0,d.jsx)(f,{}),T=a.forwardRef((function(e,n){var t,r,s=(0,x.Z)({props:e,name:"MuiCheckbox"}),l=s.checkedIcon,u=void 0===l?F:l,m=s.color,h=void 0===m?"primary":m,f=s.icon,v=void 0===f?C:f,j=s.indeterminate,Z=void 0!==j&&j,T=s.indeterminateIcon,k=void 0===T?w:T,I=s.inputProps,S=s.size,z=void 0===S?"medium":S,P=(0,i.Z)(s,b),O=Z?k:v,M=Z?k:u,N=(0,o.Z)({},s,{color:h,indeterminate:Z,size:z}),A=function(e){var n=e.classes,t=e.indeterminate,r=e.color,i={root:["root",t&&"indeterminate","color".concat((0,p.Z)(r))]},a=(0,c.Z)(i,g,n);return(0,o.Z)({},n,a)}(N);return(0,d.jsx)(y,(0,o.Z)({type:"checkbox",inputProps:(0,o.Z)({"data-indeterminate":Z},I),icon:a.cloneElement(O,{fontSize:null!=(t=O.props.fontSize)?t:z}),checkedIcon:a.cloneElement(M,{fontSize:null!=(r=M.props.fontSize)?r:z}),ownerState:N,ref:n},P,{classes:A}))}))},26769:function(e,n,t){var r=t(39066),i=t(93629),o=t(43141);e.exports=function(e){return"string"==typeof e||!i(e)&&o(e)&&"[object String]"==r(e)}}}]);
//# sourceMappingURL=7092.016f352b.chunk.js.map