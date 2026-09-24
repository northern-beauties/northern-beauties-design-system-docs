import{j as e}from"./jsx-runtime-DKrqkDUy.js";import{r as v}from"./iframe-Cd4DJLTJ.js";import{P as g}from"./index-BQkqygPp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D6yLfSYc.js";import"./index-CLMb9QMM.js";import"./index-s_M8_4QD.js";var j=Object.defineProperty,R=(t,a)=>j(t,"name",{value:a,configurable:!0}),b=v.forwardRef(R(function(a,l){const{ratio:u=1/1,style:x,...f}=a;return e.jsx("div",{style:{position:"relative",width:"100%",paddingBottom:`${100/u}%`},"data-radix-aspect-ratio-wrapper":"",children:e.jsx(g.div,{...f,ref:l,style:{...x,position:"absolute",top:0,right:0,bottom:0,left:0}})})},"AspectRatio")),y=b;function s({...t}){return e.jsx(y,{"data-slot":"aspect-ratio",...t})}s.__docgenInfo={description:"",methods:[],displayName:"AspectRatio"};const S={title:"Catalog/Aspect Ratio",component:s,parameters:{layout:"centered",docs:{description:{component:"Standard shadcn/ui catalog component, re-skinned onto existing --nb-* tokens."}}}},r={render:()=>e.jsx("div",{className:"w-[320px]",children:e.jsx(s,{ratio:1,className:"flex items-center justify-center rounded-md bg-pink-100 text-pink-800",children:"1:1 gallery tile"})})},o={render:()=>e.jsx("div",{className:"w-[420px]",children:e.jsx(s,{ratio:16/9,className:"flex items-center justify-center rounded-md bg-blue-100 text-blue-800",children:"16:9 video slot"})})};var i,n,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div className="w-[320px]">
      <AspectRatio ratio={1} className="flex items-center justify-center rounded-md bg-pink-100 text-pink-800">
        1:1 gallery tile
      </AspectRatio>
    </div>
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var d,p,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="w-[420px]">
      <AspectRatio ratio={16 / 9} className="flex items-center justify-center rounded-md bg-blue-100 text-blue-800">
        16:9 video slot
      </AspectRatio>
    </div>
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const E=["Square","Widescreen"];export{r as Square,o as Widescreen,E as __namedExportsOrder,S as default};
