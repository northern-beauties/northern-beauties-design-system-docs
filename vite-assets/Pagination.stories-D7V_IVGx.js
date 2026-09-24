import{j as n}from"./jsx-runtime-DKrqkDUy.js";import{c as s}from"./utils-DCADjnpI.js";import{B as P}from"./button-CHITjIF3.js";import{C as x}from"./chevron-left-aRF7gqrP.js";import{C as h}from"./chevron-right-BMnMDMCp.js";import"./iframe-Cd4DJLTJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CkIaN0ex.js";import"./index-s_M8_4QD.js";import"./createLucideIcon-Mgf0ALGj.js";function d({className:e,...a}){return n.jsx("nav",{role:"navigation","aria-label":"pagination","data-slot":"pagination",className:s("mx-auto flex w-full justify-center",e),...a})}function p({className:e,...a}){return n.jsx("ul",{"data-slot":"pagination-content",className:s("flex items-center gap-0.5",e),...a})}function t({...e}){return n.jsx("li",{"data-slot":"pagination-item",...e})}function o({className:e,isActive:a,size:i="icon",...f}){return n.jsx(P,{asChild:!0,variant:a?"outline":"ghost",size:i,className:s(e),children:n.jsx("a",{"aria-current":a?"page":void 0,"data-slot":"pagination-link","data-active":a,...f})})}function g({className:e,text:a="Previous",...i}){return n.jsxs(o,{"aria-label":"Go to previous page",size:"default",className:s("pl-1.5!",e),...i,children:[n.jsx(x,{"data-icon":"inline-start"}),n.jsx("span",{className:"hidden sm:block",children:a})]})}function u({className:e,text:a="Next",...i}){return n.jsxs(o,{"aria-label":"Go to next page",size:"default",className:s("pr-1.5!",e),...i,children:[n.jsx("span",{className:"hidden sm:block",children:a}),n.jsx(h,{"data-icon":"inline-end"})]})}d.__docgenInfo={description:"",methods:[],displayName:"Pagination"};p.__docgenInfo={description:"",methods:[],displayName:"PaginationContent"};t.__docgenInfo={description:"",methods:[],displayName:"PaginationItem"};o.__docgenInfo={description:"",methods:[],displayName:"PaginationLink",props:{isActive:{required:!1,tsType:{name:"boolean"},description:""},size:{defaultValue:{value:'"icon"',computed:!1},required:!1}}};u.__docgenInfo={description:"",methods:[],displayName:"PaginationNext",props:{text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Next"',computed:!1}}}};g.__docgenInfo={description:"",methods:[],displayName:"PaginationPrevious",props:{text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Previous"',computed:!1}}}};const q={title:"Catalog/Pagination",component:d,parameters:{layout:"centered",docs:{description:{component:"Standard shadcn/ui catalog component, re-skinned onto existing --nb-* tokens."}}}},r={render:()=>n.jsx(d,{children:n.jsxs(p,{children:[n.jsx(t,{children:n.jsx(g,{href:"#"})}),n.jsx(t,{children:n.jsx(o,{href:"#",isActive:!0,children:"1"})}),n.jsx(t,{children:n.jsx(o,{href:"#",children:"2"})}),n.jsx(t,{children:n.jsx(u,{href:"#"})})]})})};var l,c,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const G=["GalleryPages"];export{r as GalleryPages,G as __namedExportsOrder,q as default};
