"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[2661],{82661:function(e,n,a){a.r(n),a.d(n,{default:function(){return R}});var t=a(29439),l=a(1413),i=a(72791),s=a(61889),c=a(75952),o=a(11135),r=a(25787),u=a(81207),d=a(56890),f=a(35855),x=a(53994),Z=a(53382),v=a(94454),p=a(79836),h=a(23814),m=a(56028),b=a(21435),j=a(27391),g=a(30829),k=a(20068),C=a(68096),N=a(72455),P=a(66172),S=a(80184),T=(0,N.Z)((function(e){return(0,o.Z)((0,l.Z)({},h.gM))}));function w(e){var n=T();return(0,S.jsx)(j.Z,(0,l.Z)({InputProps:{classes:n}},e))}var E=(0,r.Z)((function(e){return(0,o.Z)((0,l.Z)((0,l.Z)({},h.YI),h.Hr))}))((function(e){var n=e.classes,a=e.id,o=e.name,r=e.onChange,u=e.options,d=e.label,f=e.tooltip,x=void 0===f?"":f,Z=e.value,v=e.disabled,p=void 0!==v&&v,h=(0,i.useState)(u[0]),m=(0,t.Z)(h,2),b=m[0],j=m[1];return(0,S.jsx)(i.Fragment,{children:(0,S.jsxs)(s.ZP,{item:!0,xs:12,className:n.fieldContainer,children:[""!==d&&(0,S.jsxs)(g.Z,{htmlFor:a,className:n.inputLabel,children:[(0,S.jsx)("span",{children:d}),""!==x&&(0,S.jsx)("div",{className:n.tooltipContainer,children:(0,S.jsx)(k.Z,{title:x,placement:"top-start",children:(0,S.jsx)("div",{className:n.tooltip,children:(0,S.jsx)(c.byK,{})})})})]}),(0,S.jsx)(C.Z,{fullWidth:!0,children:(0,S.jsx)(P.Z,{id:a,options:u,getOptionLabel:function(e){return e.label},isOptionEqualToValue:function(e){return e.value===Z},disabled:p,renderInput:function(e){return(0,S.jsx)(w,(0,l.Z)((0,l.Z)({},e),{},{name:o}))},value:b,onChange:function(e,n){n&&(r(n.value),j(n))},autoHighlight:!0})})]})})})),F=a(87995),O=a(25469),R=(0,r.Z)((function(e){return(0,o.Z)((0,l.Z)((0,l.Z)({arnField:{"& div div .MuiOutlinedInput-root":{padding:0}}},h.DF),h.ID))}))((function(e){var n=e.classes,a=e.open,l=e.selectedBucket,o=e.closeModalAndRefresh,r=(0,O.TL)(),h=(0,i.useState)(!1),j=(0,t.Z)(h,2),g=j[0],k=j[1],C=(0,i.useState)(""),N=(0,t.Z)(C,2),P=N[0],T=N[1],w=(0,i.useState)(""),R=(0,t.Z)(w,2),y=R[0],H=R[1],M=(0,i.useState)(""),I=(0,t.Z)(M,2),z=I[0],D=I[1],B=(0,i.useState)([]),L=(0,t.Z)(B,2),A=L[0],G=L[1],U=(0,i.useState)([]),V=(0,t.Z)(U,2),W=V[0],_=V[1],q=(0,i.useCallback)((function(){k(!0),u.Z.invoke("GET","/api/v1/admin/arns").then((function(e){var n=[];null!==e.arns&&(n=e.arns),k(!1),_(n)})).catch((function(e){k(!1),r((0,F.zb)(e))}))}),[r]);(0,i.useEffect)((function(){q()}),[q]);var K=function(e,n){var a=A.indexOf(n),t=[];-1===a?t=t.concat(A,n):0===a?t=t.concat(A.slice(1)):a===A.length-1?t=t.concat(A.slice(0,-1)):a>0&&(t=t.concat(A.slice(0,a),A.slice(a+1))),G(t)},Y=W.map((function(e){return{label:e,value:e}}));return(0,S.jsx)(m.Z,{modalOpen:a,onClose:function(){o()},title:"Subscribe To Bucket Events",titleIcon:(0,S.jsx)(c.c3W,{}),children:(0,S.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),g||(k(!0),u.Z.invoke("POST","/api/v1/buckets/".concat(l,"/events"),{configuration:{arn:z,events:A,prefix:P,suffix:y},ignoreExisting:!0}).then((function(){k(!1),o()})).catch((function(e){k(!1),r((0,F.zb)(e))})))},children:(0,S.jsxs)(s.ZP,{container:!0,children:[(0,S.jsxs)(s.ZP,{item:!0,xs:12,className:n.formScrollable,children:[(0,S.jsx)(s.ZP,{item:!0,xs:12,className:"".concat(n.arnField," ").concat(n.formFieldRow),children:(0,S.jsx)(E,{onChange:function(e){D(e)},id:"select-access-policy",name:"select-access-policy",label:"ARN",value:z,options:Y})}),(0,S.jsx)(s.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,S.jsx)(b.Z,{id:"prefix-input",name:"prefix-input",label:"Prefix",value:P,onChange:function(e){T(e.target.value)}})}),(0,S.jsx)(s.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,S.jsx)(b.Z,{id:"suffix-input",name:"suffix-input",label:"Suffix",value:y,onChange:function(e){H(e.target.value)}})}),(0,S.jsx)(s.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,S.jsxs)(p.Z,{size:"medium",children:[(0,S.jsx)(d.Z,{className:n.minTableHeader,children:(0,S.jsxs)(f.Z,{children:[(0,S.jsx)(x.Z,{children:"Select"}),(0,S.jsx)(x.Z,{children:"Event"})]})}),(0,S.jsx)(Z.Z,{children:[{label:"PUT - Object Uploaded",value:"put"},{label:"GET - Object accessed",value:"get"},{label:"DELETE - Object Deleted",value:"delete"}].map((function(e){return(0,S.jsxs)(f.Z,{onClick:function(n){return K(0,e.value)},children:[(0,S.jsx)(x.Z,{padding:"checkbox",children:(0,S.jsx)(v.Z,{value:e.value,color:"primary",inputProps:{"aria-label":"secondary checkbox"},onChange:function(n){return K(0,e.value)},checked:A.includes(e.value)})}),(0,S.jsx)(x.Z,{className:n.wrapCell,children:e.label})]},"group-".concat(e.value))}))})]})})]}),(0,S.jsxs)(s.ZP,{item:!0,xs:12,className:n.modalButtonBar,children:[(0,S.jsx)(c.zxk,{id:"cancel-add-event",type:"button",variant:"regular",disabled:g,onClick:function(){o()},label:"Cancel"}),(0,S.jsx)(c.zxk,{id:"save-event",type:"submit",variant:"callAction",disabled:g,label:"Save"})]})]})})})}))},56890:function(e,n,a){a.d(n,{Z:function(){return b}});var t=a(87462),l=a(63366),i=a(72791),s=a(28182),c=a(94419),o=a(829),r=a(31402),u=a(66934),d=a(75878),f=a(21217);function x(e){return(0,f.Z)("MuiTableHead",e)}(0,d.Z)("MuiTableHead",["root"]);var Z=a(80184),v=["className","component"],p=(0,u.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,n){return n.root}})({display:"table-header-group"}),h={variant:"head"},m="thead",b=i.forwardRef((function(e,n){var a=(0,r.Z)({props:e,name:"MuiTableHead"}),i=a.className,u=a.component,d=void 0===u?m:u,f=(0,l.Z)(a,v),b=(0,t.Z)({},a,{component:d}),j=function(e){var n=e.classes;return(0,c.Z)({root:["root"]},x,n)}(b);return(0,Z.jsx)(o.Z.Provider,{value:h,children:(0,Z.jsx)(p,(0,t.Z)({as:d,className:(0,s.Z)(j.root,i),ref:n,role:d===m?null:"rowgroup",ownerState:b},f))})}))}}]);
//# sourceMappingURL=2661.9ab78ca3.chunk.js.map