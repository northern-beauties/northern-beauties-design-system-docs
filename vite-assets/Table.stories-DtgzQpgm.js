import{j as e}from"./jsx-runtime-DKrqkDUy.js";import{c as t}from"./utils-DCADjnpI.js";import"./iframe-Cd4DJLTJ.js";import"./preload-helper-Dp1pzeXC.js";function r({className:a,...l}){return e.jsx("div",{"data-slot":"table-container",className:"relative w-full overflow-x-auto",children:e.jsx("table",{"data-slot":"table",className:t("w-full caption-bottom text-sm",a),...l})})}function m({className:a,...l}){return e.jsx("thead",{"data-slot":"table-header",className:t("[&_tr]:border-b",a),...l})}function p({className:a,...l}){return e.jsx("tbody",{"data-slot":"table-body",className:t("[&_tr:last-child]:border-0",a),...l})}function s({className:a,...l}){return e.jsx("tr",{"data-slot":"table-row",className:t("border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted",a),...l})}function d({className:a,...l}){return e.jsx("th",{"data-slot":"table-head",className:t("h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0",a),...l})}function n({className:a,...l}){return e.jsx("td",{"data-slot":"table-cell",className:t("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0",a),...l})}r.__docgenInfo={description:"",methods:[],displayName:"Table"};m.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};p.__docgenInfo={description:"",methods:[],displayName:"TableBody"};d.__docgenInfo={description:"",methods:[],displayName:"TableHead"};s.__docgenInfo={description:"",methods:[],displayName:"TableRow"};n.__docgenInfo={description:"",methods:[],displayName:"TableCell"};const j={title:"Catalog/Table",component:r,parameters:{layout:"centered",docs:{description:{component:"Standard shadcn/ui catalog component, re-skinned onto existing --nb-* tokens."}}}},o={render:()=>e.jsxs(r,{className:"w-[420px]",children:[e.jsx(m,{children:e.jsxs(s,{children:[e.jsx(d,{children:"Client"}),e.jsx(d,{children:"Service"}),e.jsx(d,{children:"Time"})]})}),e.jsxs(p,{children:[e.jsxs(s,{children:[e.jsx(n,{children:"Jane D."}),e.jsx(n,{children:"Nano bonds"}),e.jsx(n,{children:"Fri 2:00pm"})]}),e.jsxs(s,{children:[e.jsx(n,{children:"Amy K."}),e.jsx(n,{children:"Tape-ins"}),e.jsx(n,{children:"Sat 11:00am"})]})]})]})};var i,c,b;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Table className="w-[420px]">
      <TableHeader>
        <TableRow>
          <TableHead>Client</TableHead>
          <TableHead>Service</TableHead>
          <TableHead>Time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Jane D.</TableCell>
          <TableCell>Nano bonds</TableCell>
          <TableCell>Fri 2:00pm</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Amy K.</TableCell>
          <TableCell>Tape-ins</TableCell>
          <TableCell>Sat 11:00am</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...(b=(c=o.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};const f=["UpcomingAppointments"];export{o as UpcomingAppointments,f as __namedExportsOrder,j as default};
