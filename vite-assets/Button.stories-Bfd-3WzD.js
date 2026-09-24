import{j as m}from"./jsx-runtime-DKrqkDUy.js";import{B as G}from"./Button-oWIEciLu.js";import"./iframe-Cd4DJLTJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CkIaN0ex.js";import"./utils-DCADjnpI.js";import"./index-s_M8_4QD.js";const re={title:"Components/Button",component:G,argTypes:{variant:{control:"inline-radio",options:["primary","default","text"],description:"Visual emphasis. Primary = sole CTA, Default = secondary, Text = low-emphasis."},size:{control:"inline-radio",options:["sm","default","lg"],description:"Stock shadcn control sizing: 28px / 32px / 36px tall."},disabled:{control:"boolean",description:"Web addition — not defined in source."},children:{control:"text"}},args:{variant:"primary",size:"default",disabled:!1,children:"Book now"},parameters:{confidence:"observed / medium-high; interaction states are web additions",docs:{description:{component:"**Confidence ceiling: observed / medium-high; interaction states are web additions.** The variant and size matrix is observed. Hover, focus, and disabled behavior is not brand-confirmed."}}}},e={},s={args:{variant:"primary",children:"Book now"}},t={args:{variant:"default",children:"Learn more"}},n={args:{variant:"text",children:"Cancel"}},o={args:{size:"sm",children:"Small"}},i={args:{size:"lg",children:"Large"}},c={args:{disabled:!0,children:"Unavailable"}},r={args:{variant:"default",type:"submit",children:"Submit form"}},a={parameters:{controls:{disable:!0}},render:()=>{const I=["primary","default","text"],J=["sm","default","lg"];return m.jsx("div",{className:"flex flex-col gap-6",children:J.map(d=>m.jsx("div",{className:"flex flex-wrap items-center gap-3",children:I.map(l=>m.jsxs(G,{variant:l,size:d,children:[l," / ",d]},l))},d))})}};var p,u,g,f,v;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(g=(u=e.parameters)==null?void 0:u.docs)==null?void 0:g.source},description:{story:"Playground — flip variant/size/disabled in the Controls panel.",...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.description}}};var h,b,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Book now"
  }
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var y,S,z;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: "default",
    children: "Learn more"
  }
}`,...(z=(S=t.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var w,B,L;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "text",
    children: "Cancel"
  }
}`,...(L=(B=n.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var N,T,k;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: "sm",
    children: "Small"
  }
}`,...(k=(T=o.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var C,P,j;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: "lg",
    children: "Large"
  }
}`,...(j=(P=i.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var D,A,V;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: "Unavailable"
  }
}`,...(V=(A=c.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var E,H,U,_,M;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: "default",
    type: "submit",
    children: "Submit form"
  }
}`,...(U=(H=r.parameters)==null?void 0:H.docs)==null?void 0:U.source},description:{story:"Native form behavior: visual emphasis is independent from HTML button type.",...(M=(_=r.parameters)==null?void 0:_.docs)==null?void 0:M.description}}};var O,R,W,q,F;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const types = ["primary", "default", "text"] as const;
    const sizes = ["sm", "default", "lg"] as const;
    return <div className="flex flex-col gap-6">
        {sizes.map(s => <div key={s} className="flex flex-wrap items-center gap-3">
            {types.map(variant => <Button key={variant} variant={variant} size={s}>
                {variant} / {s}
              </Button>)}
          </div>)}
      </div>;
  }
}`,...(W=(R=a.parameters)==null?void 0:R.docs)==null?void 0:W.source},description:{story:"All 9 real variant × size combinations at once (the full source matrix).",...(F=(q=a.parameters)==null?void 0:q.docs)==null?void 0:F.description}}};const ae=["Playground","Primary","Default","Text","Small","Large","Disabled","NativeSubmit","AllVariants"];export{a as AllVariants,t as Default,c as Disabled,i as Large,r as NativeSubmit,e as Playground,s as Primary,o as Small,n as Text,ae as __namedExportsOrder,re as default};
