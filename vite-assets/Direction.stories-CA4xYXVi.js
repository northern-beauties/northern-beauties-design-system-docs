import{j as r}from"./jsx-runtime-DKrqkDUy.js";import{D as c}from"./index-Bw8q5LO5.js";import"./iframe-Cd4DJLTJ.js";import"./preload-helper-Dp1pzeXC.js";function t({dir:a,direction:s,children:d}){return r.jsx(c,{dir:s??a,children:d})}t.__docgenInfo={description:"",methods:[],displayName:"DirectionProvider",props:{direction:{required:!1,tsType:{name:'ReactComponentProps["dir"]',raw:'React.ComponentProps<typeof Direction.DirectionProvider>["dir"]'},description:""}}};const x={title:"Catalog/Direction",component:t,parameters:{layout:"centered",docs:{description:{component:`Standard shadcn/ui catalog component (Radix direction context provider),
re-skinned onto existing --nb-* tokens where applicable. No RTL content
exists in this brand today — included for catalog completeness so any
consumer needing RTL support has it available.`}}}},e={render:()=>r.jsx(t,{direction:"ltr",children:r.jsx("p",{className:"text-sm text-neutral-900",children:"Reading direction: ltr (brand default)"})})};var o,n,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <DirectionProvider direction="ltr">
      <p className="text-sm text-neutral-900">Reading direction: ltr (brand default)</p>
    </DirectionProvider>
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const f=["LeftToRight"];export{e as LeftToRight,f as __namedExportsOrder,x as default};
