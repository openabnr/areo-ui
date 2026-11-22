import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-jXlimBCT.js";import{l as n,t as r}from"./utils-CXswP1E2.js";import{n as i,t as a}from"./dist-DxSsHBlF.js";import{n as o,t as s}from"./createLucideIcon-DJP1deQG.js";import{n as c,t as l}from"./check-6uo2AdZd.js";var u,d;function f(){return(f=e((()=>{o(),u={name:`circle-alert`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`line`,{x1:`12`,x2:`12`,y1:`8`,y2:`12`,key:`1pkeuh`}],[`line`,{x1:`12`,x2:`12.01`,y1:`16`,y2:`16`,key:`4dfq90`}]],aliases:[`alert-circle`]},u.node,d=s(u)})))()}var p,m;function h(){return(h=e((()=>{o(),p={name:`info`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 16v-4`,key:`1dtifu`}],[`path`,{d:`M12 8h.01`,key:`e9boi3`}]]},p.node,m=s(p)})))()}var g,_;function v(){return(v=e((()=>{o(),g={name:`tag`,size:24,node:[[`path`,{d:`M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z`,key:`vktsd0`}],[`circle`,{cx:`7.5`,cy:`7.5`,r:`.5`,fill:`currentColor`,key:`kqv944`}]]},g.node,_=s(g)})))()}function y({className:e,variant:t=`default`,...n}){return(0,b.jsx)(`span`,{"data-slot":`badge`,className:r(x({variant:t??`default`}),e),...n})}var b,x;function S(){return(S=e((()=>{i(),n(),b=t(),x=a(`inline-flex w-fit shrink-0 items-center justify-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium whitespace-nowrap [&>svg]:pointer-events-none [&>svg]:size-3`,{variants:{variant:{default:`border-transparent bg-primary text-white`,secondary:`border-secondary-border bg-surface-muted text-secondary-foreground`,outline:`border-secondary-border-hover bg-white text-secondary-foreground`,info:`border-primary/30 bg-alert-info-bg text-alert-info-fg`,success:`border-transparent bg-alert-success-bg text-alert-success-fg`,warning:`border-transparent bg-alert-warning-bg text-alert-warning-fg`,destructive:`border-transparent bg-alert-destructive-bg text-alert-destructive-btn`}},defaultVariants:{variant:`default`}}),y.__docgenInfo={description:``,methods:[],displayName:`Badge`,props:{variant:{defaultValue:{value:`'default'`,computed:!1},required:!1}}}})))()}var C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{f(),c(),h(),v(),S(),C=t(),w=[`default`,`secondary`,`outline`,`info`,`success`,`warning`,`destructive`],T={title:`Components/Badge`,component:y,tags:[`autodocs`],parameters:{layout:`centered`},argTypes:{variant:{control:`select`,options:w}},args:{children:`Badge`,variant:`default`}},E={},D={render:e=>(0,C.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,C.jsx)(y,{children:`implicit default`}),(0,C.jsx)(y,{variant:null,children:`null fallback`}),w.map(t=>(0,C.jsx)(y,{...e,variant:t,children:t},t))]})},O={render:()=>(0,C.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,C.jsxs)(y,{variant:`default`,children:[(0,C.jsx)(_,{"aria-hidden":`true`}),`태그`]}),(0,C.jsxs)(y,{variant:`info`,children:[(0,C.jsx)(m,{"aria-hidden":`true`}),`진행중`]}),(0,C.jsxs)(y,{variant:`success`,children:[(0,C.jsx)(l,{"aria-hidden":`true`}),`완료`]}),(0,C.jsxs)(y,{variant:`destructive`,children:[(0,C.jsx)(d,{"aria-hidden":`true`}),`오류`]})]})},k={render:()=>(0,C.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,C.jsx)(y,{variant:`default`,className:`min-w-5 px-1.5 font-mono tabular-nums`,children:`8`}),(0,C.jsx)(y,{variant:`destructive`,className:`min-w-5 px-1.5 font-mono tabular-nums`,children:`99+`})]})},A=[`Default`,`Variants`,`WithIcon`,`NumericCount`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap items-center gap-2">
      {/* variant 생략(undefined -> 매개변수 기본값) 및 variant={null}(46번 라인 ?? 폴백) 분기 커버 */}
      <Badge>implicit default</Badge>
      <Badge variant={null}>null fallback</Badge>
      {BADGE_VARIANTS.map(variant => <Badge key={variant} {...args} variant={variant}>
          {variant}
        </Badge>)}
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-2">
      <Badge variant="default">
        <Tag aria-hidden="true" />
        태그
      </Badge>
      <Badge variant="info">
        <Info aria-hidden="true" />
        진행중
      </Badge>
      <Badge variant="success">
        <Check aria-hidden="true" />
        완료
      </Badge>
      <Badge variant="destructive">
        <AlertCircle aria-hidden="true" />
        오류
      </Badge>
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <Badge variant="default" className="min-w-5 px-1.5 font-mono tabular-nums">
        8
      </Badge>
      <Badge variant="destructive" className="min-w-5 px-1.5 font-mono tabular-nums">
        99+
      </Badge>
    </div>
}`,...k.parameters?.docs?.source}}}})))()}j();export{E as Default,k as NumericCount,D as Variants,O as WithIcon,A as __namedExportsOrder,T as default};