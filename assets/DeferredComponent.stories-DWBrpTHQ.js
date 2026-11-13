import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-BKXkO2qw.js";import{n as r,t as i}from"./Button-CPyB4zts.js";import{n as a,t as o}from"./loader-circle-Cs2wm9zf.js";import{n as s,t as c}from"./DeferredComponent-BuoSS28w.js";var l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{l=t(),a(),r(),s(),u=n(),d={title:`Feedback/DeferredComponent`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{timeout:{control:{type:`number`,step:100},description:`렌더링을 지연시킬 시간 (밀리초 단위)`},children:{control:!1,description:`지연 후 마운트될 대상 자식 요소`}}},f={render:e=>(0,u.jsxs)(`div`,{className:`flex flex-col items-center gap-3 p-6 text-center`,children:[(0,u.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[e.timeout,`ms가 경과하면 아래 영역이 나타납니다.`]}),(0,u.jsx)(c,{...e,children:(0,u.jsxs)(`div`,{className:`animate-in rounded-md border border-primary/20 bg-primary/10 px-4 py-3 text-xs font-semibold text-primary fade-in`,children:[e.timeout,`ms 지연 후 렌더링된 컴포넌트입니다.`]})})]}),args:{timeout:500}},p={render:e=>{let[t,n]=(0,l.useState)(0);return(0,u.jsxs)(`div`,{className:`flex flex-col items-center gap-4 p-6 text-center`,children:[(0,u.jsx)(i,{variant:`secondary`,size:`sm`,onClick:()=>n(e=>e+1),children:`타이머 재시작 (Remount)`}),(0,u.jsx)(`div`,{className:`flex h-16 w-80 items-center justify-center rounded-lg border border-dashed border-secondary-border p-4`,children:(0,u.jsx)(c,{...e,children:(0,u.jsxs)(`span`,{className:`text-foreground animate-in text-xs font-semibold fade-in`,children:[`마운트 완료 (`,e.timeout,`ms 경과)`]})},t)})]})},args:{timeout:800}},m={render:()=>{let[e,t]=(0,l.useState)(!1),[n,r]=(0,l.useState)(null),a=e=>{t(!0),r(null),setTimeout(()=>{t(!1),r(`요청 완료 (${e}ms 소요)`)},e)};return(0,u.jsxs)(`div`,{className:`flex flex-col items-center gap-4 p-6`,children:[(0,u.jsxs)(`div`,{className:`flex gap-2`,children:[(0,u.jsx)(i,{size:`sm`,variant:`outline-primary`,disabled:e,onClick:()=>a(150),children:`빠른 API (150ms) - 스피너 안 뜸`}),(0,u.jsx)(i,{size:`sm`,variant:`outline-primary`,disabled:e,onClick:()=>a(1200),children:`느린 API (1200ms) - 300ms 후 스피너 노출`})]}),(0,u.jsxs)(`div`,{className:`bg-muted/10 flex h-20 w-80 flex-col items-center justify-center rounded-lg border p-4`,children:[e&&(0,u.jsx)(c,{timeout:300,children:(0,u.jsxs)(`div`,{className:`flex animate-in items-center gap-2 text-xs text-muted-foreground fade-in`,children:[(0,u.jsx)(o,{className:`size-4 animate-spin text-primary`}),(0,u.jsx)(`span`,{children:`데이터를 불러오는 중입니다...`})]})}),!e&&n&&(0,u.jsx)(`span`,{className:`text-xs font-semibold text-primary`,children:n}),!e&&!n&&(0,u.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`버튼을 클릭하여 테스트하세요.`})]})]})}},h={render:e=>(0,u.jsx)(`div`,{className:`p-6 text-center`,children:(0,u.jsx)(c,{...e,children:(0,u.jsx)(`div`,{className:`bg-background text-foreground rounded border border-secondary-border p-3 text-xs`,children:`timeout이 0 이하이므로 지연 없이 즉시 마운트됩니다.`})})}),args:{timeout:0}},g=[`Default`,`ResetInteractive`,`LoadingSpinnerPrevention`,`ImmediateRender`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className="flex flex-col items-center gap-3 p-6 text-center">
        <p className="text-xs text-muted-foreground">
          {args.timeout}ms가 경과하면 아래 영역이 나타납니다.
        </p>

        <DeferredComponent {...args}>
          <div className="animate-in rounded-md border border-primary/20 bg-primary/10 px-4 py-3 text-xs font-semibold text-primary fade-in">
            {args.timeout}ms 지연 후 렌더링된 컴포넌트입니다.
          </div>
        </DeferredComponent>
      </div>;
  },
  args: {
    timeout: 500
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [renderKey, setRenderKey] = useState(0);
    return <div className="flex flex-col items-center gap-4 p-6 text-center">
        <Button variant="secondary" size="sm" onClick={() => setRenderKey(prev => prev + 1)}>
          타이머 재시작 (Remount)
        </Button>

        <div className="flex h-16 w-80 items-center justify-center rounded-lg border border-dashed border-secondary-border p-4">
          <DeferredComponent key={renderKey} {...args}>
            <span className="text-foreground animate-in text-xs font-semibold fade-in">
              마운트 완료 ({args.timeout}ms 경과)
            </span>
          </DeferredComponent>
        </div>
      </div>;
  },
  args: {
    timeout: 800
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const triggerRequest = (durationMs: number) => {
      setLoading(true);
      setResult(null);
      setTimeout(() => {
        setLoading(false);
        setResult(\`요청 완료 (\${durationMs}ms 소요)\`);
      }, durationMs);
    };
    return <div className="flex flex-col items-center gap-4 p-6">
        <div className="flex gap-2">
          <Button size="sm" variant="outline-primary" disabled={loading} onClick={() => triggerRequest(150)}>
            빠른 API (150ms) - 스피너 안 뜸
          </Button>
          <Button size="sm" variant="outline-primary" disabled={loading} onClick={() => triggerRequest(1200)}>
            느린 API (1200ms) - 300ms 후 스피너 노출
          </Button>
        </div>

        <div className="bg-muted/10 flex h-20 w-80 flex-col items-center justify-center rounded-lg border p-4">
          {loading && <DeferredComponent timeout={300}>
              <div className="flex animate-in items-center gap-2 text-xs text-muted-foreground fade-in">
                <Loader2 className="size-4 animate-spin text-primary" />
                <span>데이터를 불러오는 중입니다...</span>
              </div>
            </DeferredComponent>}

          {!loading && result && <span className="text-xs font-semibold text-primary">{result}</span>}

          {!loading && !result && <span className="text-xs text-muted-foreground">
              버튼을 클릭하여 테스트하세요.
            </span>}
        </div>
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className="p-6 text-center">
        <DeferredComponent {...args}>
          <div className="bg-background text-foreground rounded border border-secondary-border p-3 text-xs">
            timeout이 0 이하이므로 지연 없이 즉시 마운트됩니다.
          </div>
        </DeferredComponent>
      </div>;
  },
  args: {
    timeout: 0
  }
}`,...h.parameters?.docs?.source}}}})))()}_();export{f as Default,h as ImmediateRender,m as LoadingSpinnerPrevention,p as ResetInteractive,g as __namedExportsOrder,d as default};