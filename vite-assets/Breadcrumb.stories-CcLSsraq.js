import{j as e}from"./jsx-runtime-DKrqkDUy.js";import{c as n}from"./utils-DCADjnpI.js";import{C as x}from"./chevron-right-BMnMDMCp.js";import{S as f}from"./index-s_M8_4QD.js";import"./iframe-Cd4DJLTJ.js";import"./preload-helper-Dp1pzeXC.js";import"./createLucideIcon-Mgf0ALGj.js";function m({className:r,...a}){return e.jsx("nav",{"aria-label":"breadcrumb","data-slot":"breadcrumb",className:n(r),...a})}function b({className:r,...a}){return e.jsx("ol",{"data-slot":"breadcrumb-list",className:n("flex flex-wrap items-center gap-1.5 text-sm wrap-break-word text-muted-foreground",r),...a})}function s({className:r,...a}){return e.jsx("li",{"data-slot":"breadcrumb-item",className:n("inline-flex items-center gap-1",r),...a})}function d({asChild:r,className:a,...o}){const B=r?f:"a";return e.jsx(B,{"data-slot":"breadcrumb-link",className:n("transition-colors hover:text-foreground",a),...o})}function p({className:r,...a}){return e.jsx("span",{"data-slot":"breadcrumb-page",role:"link","aria-disabled":"true","aria-current":"page",className:n("font-normal text-foreground",r),...a})}function c({children:r,className:a,...o}){return e.jsx("li",{"data-slot":"breadcrumb-separator",role:"presentation","aria-hidden":"true",className:n("[&>svg]:size-3.5",a),...o,children:r??e.jsx(x,{})})}m.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb"};b.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};s.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};d.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};p.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};c.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};const k={title:"Catalog/Breadcrumb",component:m,parameters:{layout:"centered",docs:{description:{component:"Standard shadcn/ui catalog component, re-skinned onto existing --nb-* tokens."}}}},t={render:()=>e.jsx(m,{children:e.jsxs(b,{children:[e.jsx(s,{children:e.jsx(d,{href:"#",children:"Services"})}),e.jsx(c,{}),e.jsx(s,{children:e.jsx(d,{href:"#",children:"Extensions"})}),e.jsx(c,{}),e.jsx(s,{children:e.jsx(p,{children:"Nano Bonds"})})]})})};var i,u,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Services</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Extensions</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Nano Bonds</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...(l=(u=t.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const L=["ServicePath"];export{t as ServicePath,L as __namedExportsOrder,k as default};
