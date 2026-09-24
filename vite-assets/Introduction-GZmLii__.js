import{j as e}from"./jsx-runtime-DKrqkDUy.js";import{useMDXComponents as t}from"./index-D94H5L6Y.js";import{M as i}from"./blocks-CuqSOWJk.js";import"./iframe-Cd4DJLTJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D6yLfSYc.js";import"./index-CLMb9QMM.js";function o(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Introduction"}),`
`,e.jsx(n.h1,{id:"northern-beauties--design-system",children:"Northern Beauties — Design System"}),`
`,e.jsx(n.p,{children:`This Storybook is the living home of the Northern Beauties product design system.
It documents reusable product tokens and components only.`}),`
`,e.jsxs(n.p,{children:[`The system rules and confidence ceilings trace to the ratified
`,e.jsx(n.a,{href:"../design-intelligence/dna/design-dna.json",children:e.jsx(n.code,{children:"design-intelligence/dna/design-dna.json"})}),`.
Only authorized training evidence informs this phase; holdout references remain isolated.`]}),`
`,e.jsx(n.h2,{id:"reading-confidence-labels",children:"Reading confidence labels"}),`
`,e.jsx(n.p,{children:`Every component Docs page begins with its evidence ceiling. These labels are
preserved from the component contracts and implementation headers:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"OBSERVED"})," — directly supported by authorized reference evidence."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ADAPTATION"}),` — composed from canonical tokens without direct component evidence;
it remains low confidence unless stated otherwise.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"WEB ADDITION"}),` — interaction or product-UI behavior needed for the web but not
defined by the static brand references.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"CONFLICTED"}),` — evidence does not support a canonical choice. The Logo is a
`,e.jsx(n.strong,{children:"CONFLICTED PLACEHOLDER"}),", not an approved brand mark."]}),`
`]}),`
`,e.jsx("div",{style:{padding:"16px 20px",borderRadius:8,background:"var(--nb-pink-50)",color:"var(--nb-pink-800)",border:"1px solid var(--nb-pink-200)",margin:"16px 0",fontFamily:"var(--nb-font-body)"},children:e.jsxs(n.p,{children:[e.jsx("strong",{children:"Code = canonical. Figma = token-import target."}),` The code system
(`,e.jsx("code",{children:"components/"}),", ",e.jsx("code",{children:"tokens/"}),", ",e.jsx("code",{children:"src/styles/"}),`) is the
single source of truth. Figma receives tokens via Tokens Studio import + the
written `,e.jsx("code",{children:"docs/"}),", not a reimported component set. (See ",e.jsx("code",{children:"HANDOFF.md"}),".)"]})}),`
`,e.jsx(n.h2,{id:"how-the-repo-maps-to-this-storybook",children:"How the repo maps to this Storybook"}),`
`,e.jsxs(n.p,{children:[`| Source of truth | Role | Surfaced here as |
|---|---|---|
| `,e.jsx(n.code,{children:"tokens/northern-beauties.tokens.json"})," | W3C DTCG tokens, 3-layer (primitive → semantic → component) | ",e.jsx(n.strong,{children:"Foundations"}),` pages |
| `,e.jsx(n.code,{children:"src/styles/tokens.css"})," + ",e.jsx(n.code,{children:"theme.css"})," | CSS custom properties + Tailwind v4 ",e.jsx(n.code,{children:"@theme"})," mapping | Imported globally in ",e.jsx(n.code,{children:".storybook/preview.ts"}),` |
| `,e.jsx(n.code,{children:"packages/ui/src/components/*.tsx"})," | React + Tailwind component library | ",e.jsx(n.strong,{children:"Components"}),` section |
| `,e.jsx(n.code,{children:"docs/*.md"}),` | Plain-language spec per component (variants/states/props/a11y) | Source for each story's variant lists |
| `,e.jsx(n.code,{children:"public/assets/"})," | Product design-system assets | Served at ",e.jsx(n.code,{children:"/assets/*"})," |"]}),`
`,e.jsxs(n.h2,{id:"no-copy-principle-the-fix-for-the-web-footgun",children:["No-copy principle (the fix for the ",e.jsx(n.code,{children:"web/"})," footgun)"]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"web/"})," Next.js app keeps ",e.jsx(n.strong,{children:"physical copies"})," of ",e.jsx(n.code,{children:"components/"})," and ",e.jsx(n.code,{children:"tokens.css"}),`
because Turbopack refuses to resolve modules outside its project root. Storybook
has no such limitation: it imports the root `,e.jsx(n.code,{children:"components/"})," and ",e.jsx(n.code,{children:"src/styles/theme.css"}),`
`,e.jsx(n.strong,{children:"directly"})," via ",e.jsx(n.code,{children:"@tailwindcss/vite"}),`. One edit at the root updates every story —
which is exactly how a design system's living documentation should behave.`]}),`
`,e.jsx(n.h2,{id:"running-it",children:"Running it"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install
npm run storybook        # dev server on http://localhost:6006
npm run build-storybook  # static build → storybook-static/
`})}),`
`,e.jsx(n.h2,{id:"whats-inside",children:"What's inside"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Foundations"}),` — Colors, Typography, Spacing, Radius & Elevation, rendered
from the real CSS custom properties.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Components"}),` — Button, Divider, Logo (conflicted placeholder), Typography,
Card, Input, and Badge. Each variant/state is a live control.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Catalog"}),` — the standard shadcn/ui component set, re-skinned onto the
same brand tokens.`]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Social-media components, imagery, and post templates are not built into this
Storybook. They live in `,e.jsx(n.code,{children:"/social-templates"}),", a separate marketing/SMM kit."]}),`
`,e.jsxs(n.p,{children:["Accessibility findings for any story appear in the ",e.jsx(n.strong,{children:"Accessibility"}),` panel
(`,e.jsx(n.code,{children:"@storybook/addon-a11y"}),"), and every component ships ",e.jsx(n.strong,{children:"autodocs"}),"."]})]})}function m(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{m as default};
