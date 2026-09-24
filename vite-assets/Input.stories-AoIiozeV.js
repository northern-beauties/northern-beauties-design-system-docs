import{j as e}from"./jsx-runtime-DKrqkDUy.js";import{I as h}from"./Input-Cf6xV3R4.js";import"./iframe-Cd4DJLTJ.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DCADjnpI.js";const E={title:"Components/Input",component:h,argTypes:{placeholder:{control:"text"},disabled:{control:"boolean",description:"Web addition — not defined by a brand reference."},type:{control:"text"}},args:{placeholder:"name@example.com",disabled:!1,type:"email"},parameters:{confidence:"low-confidence adaptation / web addition",docs:{description:{component:"**Confidence ceiling: low-confidence adaptation / web addition.** No form input exists in the authorized references; anatomy and states use canonical tokens."}}},decorators:[o=>e.jsx("div",{style:{width:360},children:e.jsx(o,{})})]},a={},s={args:{defaultValue:"name@example.com"}},r={args:{disabled:!0,defaultValue:"disabled"}},t={render:o=>e.jsxs("label",{className:"flex flex-col gap-2",children:[e.jsx("span",{className:"font-body text-sm font-medium text-neutral-900",children:"Email address"}),e.jsx(h,{...o})]})};var n,d,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,i,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    defaultValue: "name@example.com"
  }
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,u,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: "disabled"
  }
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var x,b,g;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <label className="flex flex-col gap-2">
      <span className="font-body text-sm font-medium text-neutral-900">Email address</span>
      <Input {...args} />
    </label>
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const I=["Default","Filled","Disabled","WithLabel"];export{a as Default,r as Disabled,s as Filled,t as WithLabel,I as __namedExportsOrder,E as default};
