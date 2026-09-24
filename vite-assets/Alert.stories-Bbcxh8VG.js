import{j as e}from"./jsx-runtime-DKrqkDUy.js";import{c as h}from"./index-CkIaN0ex.js";import{c as n}from"./utils-DCADjnpI.js";import{c as v}from"./createLucideIcon-Mgf0ALGj.js";import{I as A}from"./info-B2CJqEz_.js";import"./iframe-Cd4DJLTJ.js";import"./preload-helper-Dp1pzeXC.js";/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};g.node;const y=v(g),_=h("group/alert relative grid w-full gap-0.5 rounded-lg border px-2.5 py-2 text-left text-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4",{variants:{variant:{default:"bg-card text-card-foreground",destructive:"bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 *:[svg]:text-current"}},defaultVariants:{variant:"default"}});function o({className:t,variant:r,...f}){return e.jsx("div",{"data-slot":"alert",role:"alert",className:n(_({variant:r}),t),...f})}function i({className:t,...r}){return e.jsx("div",{"data-slot":"alert-title",className:n("font-medium group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground",t),...r})}function l({className:t,...r}){return e.jsx("div",{"data-slot":"alert-description",className:n("text-sm text-balance text-muted-foreground md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",t),...r})}o.__docgenInfo={description:"",methods:[],displayName:"Alert"};i.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"};l.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};const T={title:"Catalog/Alert",component:o,parameters:{layout:"centered",docs:{description:{component:"Standard shadcn/ui catalog component, re-skinned onto existing --nb-* tokens."}}}},s={render:()=>e.jsxs(o,{className:"w-[420px]",children:[e.jsx(A,{}),e.jsx(i,{children:"Booking window extended"}),e.jsx(l,{children:"West Coquitlam is now taking bookings through the holidays."})]})},a={render:()=>e.jsxs(o,{variant:"destructive",className:"w-[420px]",children:[e.jsx(y,{}),e.jsx(i,{children:"Deposit required"}),e.jsx(l,{children:"This appointment needs a deposit to be confirmed."})]})};var c,d,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Alert className="w-[420px]">
      <InfoIcon />
      <AlertTitle>Booking window extended</AlertTitle>
      <AlertDescription>West Coquitlam is now taking bookings through the holidays.</AlertDescription>
    </Alert>
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,u,x;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Alert variant="destructive" className="w-[420px]">
      <CircleAlertIcon />
      <AlertTitle>Deposit required</AlertTitle>
      <AlertDescription>This appointment needs a deposit to be confirmed.</AlertDescription>
    </Alert>
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const q=["Info","Destructive"];export{a as Destructive,s as Info,q as __namedExportsOrder,T as default};
