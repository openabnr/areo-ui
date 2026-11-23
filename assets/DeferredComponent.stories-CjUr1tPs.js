import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-Di8_Mevq.js";import{n as r,t as i}from"./Button-DaMgOn2H.js";import{n as a,t as o}from"./createLucideIcon-BSjRREhY.js";import{n as s,t as c}from"./DeferredComponent-x198CPwR.js";var l,u;function d(){return(d=e((()=>{a(),l={name:`loader-circle`,size:24,node:[[`path`,{d:`M21 12a9 9 0 1 1-6.219-8.56`,key:`13zald`}]],aliases:[`loader-2`]},l.node,u=o(l)})))()}var f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{f=t(),d(),r(),s(),p=n(),{expect:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Feedback/DeferredComponent`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{timeout:{control:{type:`number`,step:100},description:`렌더링을 지연시킬 시간 (밀리초 단위)`},children:{control:!1,description:`지연 후 마운트될 대상 자식 요소`}}},v={render:e=>(0,p.jsxs)(`div`,{className:`flex flex-col items-center gap-3 p-6 text-center`,children:[(0,p.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[e.timeout,`ms가 경과하면 아래 영역이 나타납니다.`]}),(0,p.jsx)(c,{...e,children:(0,p.jsxs)(`div`,{className:`animate-in rounded-md border border-primary/20 bg-primary/10 px-4 py-3 text-xs font-semibold text-primary fade-in`,children:[e.timeout,`ms 지연 후 렌더링된 컴포넌트입니다.`]})})]}),args:{timeout:50},play:async({canvasElement:e})=>{let t=g(e);await m(await t.findByText(/지연 후 렌더링된 컴포넌트입니다/)).toBeInTheDocument()}},y={render:e=>{let[t,n]=(0,f.useState)(0);return(0,p.jsxs)(`div`,{className:`flex flex-col items-center gap-4 p-6 text-center`,children:[(0,p.jsx)(i,{variant:`secondary`,size:`sm`,onClick:()=>n(e=>e+1),children:`타이머 재시작 (Remount)`}),(0,p.jsx)(`div`,{className:`flex h-16 w-80 items-center justify-center rounded-lg border border-dashed border-secondary-border p-4`,children:(0,p.jsx)(c,{...e,children:(0,p.jsxs)(`span`,{className:`text-foreground animate-in text-xs font-semibold fade-in`,children:[`마운트 완료 (`,e.timeout,`ms 경과)`]})},t)})]})},args:{timeout:200},play:async({canvasElement:e})=>{let t=g(e),n=t.getByRole(`button`,{name:`타이머 재시작 (Remount)`});await h.click(n),await m(await t.findByText(/마운트 완료/)).toBeInTheDocument()}},b={render:()=>{let[e,t]=(0,f.useState)(!1),[n,r]=(0,f.useState)(null),a=e=>{t(!0),r(null),setTimeout(()=>{t(!1),r(`요청 완료 (${e}ms 소요)`)},e)};return(0,p.jsxs)(`div`,{className:`flex flex-col items-center gap-4 p-6`,children:[(0,p.jsxs)(`div`,{className:`flex gap-2`,children:[(0,p.jsx)(i,{size:`sm`,variant:`outline-primary`,disabled:e,onClick:()=>a(150),children:`빠른 API (150ms) - 스피너 안 뜸`}),(0,p.jsx)(i,{size:`sm`,variant:`outline-primary`,disabled:e,onClick:()=>a(1200),children:`느린 API (1200ms) - 300ms 후 스피너 노출`})]}),(0,p.jsxs)(`div`,{className:`bg-muted/10 flex h-20 w-80 flex-col items-center justify-center rounded-lg border p-4`,children:[e&&(0,p.jsx)(c,{timeout:300,children:(0,p.jsxs)(`div`,{className:`flex animate-in items-center gap-2 text-xs text-muted-foreground fade-in`,children:[(0,p.jsx)(u,{className:`size-4 animate-spin text-primary`}),(0,p.jsx)(`span`,{children:`데이터를 불러오는 중입니다...`})]})}),!e&&n&&(0,p.jsx)(`span`,{className:`text-xs font-semibold text-primary`,children:n}),!e&&!n&&(0,p.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`버튼을 클릭하여 테스트하세요.`})]})]})}},x={render:e=>(0,p.jsxs)(`div`,{className:`p-6 text-center`,children:[(0,p.jsx)(c,{...e,children:(0,p.jsx)(`div`,{className:`bg-background text-foreground rounded border border-secondary-border p-3 text-xs`,children:`timeout이 0 이하이므로 지연 없이 즉시 마운트됩니다.`})}),(0,p.jsx)(c,{timeout:0}),(0,p.jsx)(c,{children:(0,p.jsx)(`span`,{className:`sr-only`,children:`기본 지연 마운트`})})]}),args:{timeout:0}},S=[`Default`,`ResetInteractive`,`LoadingSpinnerPrevention`,`ImmediateRender`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
    timeout: 50
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(await canvas.findByText(/지연 후 렌더링된 컴포넌트입니다/)).toBeInTheDocument();
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
    timeout: 200
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const remountBtn = canvas.getByRole('button', {
      name: '타이머 재시작 (Remount)'
    });
    await userEvent.click(remountBtn);
    await expect(await canvas.findByText(/마운트 완료/)).toBeInTheDocument();
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className="p-6 text-center">
        <DeferredComponent {...args}>
          <div className="bg-background text-foreground rounded border border-secondary-border p-3 text-xs">
            timeout이 0 이하이므로 지연 없이 즉시 마운트됩니다.
          </div>
        </DeferredComponent>
        {/* children 생략(Line 39 null 반환) 및 timeout 생략(기본값 300ms) 커버 */}
        <DeferredComponent timeout={0} />
        <DeferredComponent>
          <span className="sr-only">기본 지연 마운트</span>
        </DeferredComponent>
      </div>;
  },
  args: {
    timeout: 0
  }
}`,...x.parameters?.docs?.source}}}})))()}C();export{v as Default,x as ImmediateRender,b as LoadingSpinnerPrevention,y as ResetInteractive,S as __namedExportsOrder,_ as default};