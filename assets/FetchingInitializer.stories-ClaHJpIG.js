import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-D8PjfN8a.js";import{n as r,t as i}from"./Button-Ch-LtICR.js";import{n as a,t as o}from"./CircularProgress-DmGapdJ7.js";import{n as s,t as c}from"./DeferredComponent-CMWtPoMb.js";import{n as l,t as u}from"./QueryErrorBoundary-QVZQfcS5.js";function d(e){return Promise.resolve().then(()=>e())}function f({promise:e}){return(0,h.use)(e)??null}function p({onRetry:e}){return(0,g.jsxs)(`div`,{role:`alert`,className:`absolute inset-0 flex flex-col items-center justify-center p-4 text-center`,children:[(0,g.jsxs)(`p`,{className:`text-foreground mt-5 mb-8 text-sm`,children:[`데이터를 가져오지 못했습니다. `,(0,g.jsx)(`br`,{}),`다시 시도 하시겠습니까?`]}),(0,g.jsx)(i,{size:`lg`,onClick:e,children:`다시 로드하기`})]})}function m({fetchRenderer:e,loadingDelay:t=300,errorFallback:n}){let[r,i]=(0,h.useState)(()=>d(e)),a=(0,h.useCallback)(()=>{i(d(e))},[e]),s=(0,h.useCallback)((e,t)=>n?n(e,t):(0,g.jsx)(p,{onRetry:e}),[n]);return(0,g.jsx)(u,{onReset:a,fallback:s,children:(0,g.jsx)(h.Suspense,{fallback:(0,g.jsx)(c,{timeout:t,children:(0,g.jsx)(`div`,{className:`absolute inset-0 flex flex-col items-center justify-center`,children:(0,g.jsx)(o,{size:`lg`})})}),children:(0,g.jsx)(f,{promise:r})})})}var h,g;function _(){return(_=e((()=>{h=t(),r(),a(),s(),l(),g=n(),m.__docgenInfo={description:``,methods:[],displayName:`FetchingInitializer`,props:{loadingDelay:{defaultValue:{value:`300`,computed:!1},required:!1}}}})))()}function v(e){if(e instanceof Error)return e.message;if(typeof e==`string`)return e;try{return JSON.stringify(e)}catch{return`알 수 없는 오류가 발생했습니다.`}}function y(e){let t=(0,b.useRef)(0),n=(0,b.useCallback)(async()=>{await new Promise(e=>setTimeout(e,80));let e=t.current;if(e===0)throw Error(`첫 번째 시도에서 일시적 통신 오류가 발생했습니다.`);return(0,x.jsxs)(`div`,{className:`flex h-full flex-col items-center justify-center gap-2 text-center`,children:[(0,x.jsx)(`span`,{className:`text-xl font-bold text-emerald-500`,children:`성공!`}),(0,x.jsx)(`p`,{className:`text-foreground text-xs`,children:`재시도 결과 정상적으로 데이터를 불러왔습니다.`}),(0,x.jsxs)(`span`,{className:`text-[10px] text-muted-foreground`,children:[`(총 시도 횟수: `,e+1,`)`]})]})},[]),r=(0,b.useCallback)((e,n)=>(0,x.jsxs)(`div`,{className:`flex h-full flex-col items-center justify-center gap-3 p-4 text-center`,children:[(0,x.jsx)(`span`,{className:`text-sm font-semibold text-destructive`,children:v(n)}),(0,x.jsx)(i,{size:`sm`,onClick:()=>{t.current+=1,e()},children:`다시 시도하여 복구하기`})]}),[]);return(0,x.jsx)(m,{loadingDelay:50,...e,fetchRenderer:n,errorFallback:r})}var b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{b=t(),r(),_(),x=n(),{expect:S,spyOn:C,userEvent:w,within:T}=__STORYBOOK_MODULE_TEST__,E={title:`Components/FetchingInitializer`,component:m,parameters:{layout:`centered`},tags:[`autodocs`],args:{loadingDelay:300,fetchRenderer:()=>Promise.resolve((0,x.jsx)(`div`,{children:`기본 콘텐츠`}))},decorators:[e=>(0,x.jsx)(`div`,{className:`border-border bg-background relative h-72 w-96 rounded-lg border p-4 shadow-sm`,children:(0,x.jsx)(e,{})})]},D={args:{loadingDelay:50,fetchRenderer:async()=>(await new Promise(e=>setTimeout(e,120)),(0,x.jsxs)(`div`,{className:`flex h-full flex-col items-center justify-center gap-2 text-center`,children:[(0,x.jsx)(`span`,{className:`text-2xl font-bold text-emerald-500`,children:`✓`}),(0,x.jsx)(`h3`,{className:`text-foreground font-semibold`,children:`데이터 로드 완료`}),(0,x.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`비동기 컴포넌트가 성공적으로 렌더링되었습니다.`})]}))},play:async({canvasElement:e})=>{let t=T(e);await S(await t.findByText(`데이터 로드 완료`)).toBeInTheDocument()}},O={args:{loadingDelay:300,fetchRenderer:async()=>(await new Promise(e=>setTimeout(e,20)),null)}},k={beforeEach:()=>{let e=C(console,`error`).mockImplementation(()=>{});return()=>e.mockRestore()},args:{loadingDelay:50,fetchRenderer:async()=>{throw await new Promise(e=>setTimeout(e,80)),Error(`네트워크 연결이 원활하지 않습니다 (503 Service Unavailable)`)}},play:async({canvasElement:e})=>{let t=T(e),n=await t.findByRole(`button`,{name:`다시 로드하기`});await S(t.getByRole(`alert`)).toBeInTheDocument(),await w.click(n),await S(await t.findByRole(`button`,{name:`다시 로드하기`})).toBeInTheDocument()}},A={beforeEach:()=>{let e=C(console,`error`).mockImplementation(()=>{});return()=>e.mockRestore()},args:{loadingDelay:50,fetchRenderer:async()=>{throw await new Promise(e=>setTimeout(e,80)),Error(`인증 토큰이 만료되었습니다.`)},errorFallback:(e,t)=>{let n=v(t);return(0,x.jsxs)(`div`,{className:`flex h-full flex-col items-center justify-center gap-3 p-4 text-center`,children:[(0,x.jsx)(`div`,{className:`rounded-full bg-destructive/10 p-2 text-destructive`,children:`⚠️`}),(0,x.jsx)(`div`,{className:`text-xs font-semibold text-destructive`,children:n}),(0,x.jsx)(`p`,{className:`text-[11px] text-muted-foreground`,children:`사용자 정의 errorFallback 렌더러가 호출되었습니다.`}),(0,x.jsx)(i,{size:`sm`,variant:`outline-primary`,onClick:e,children:`재시도 수행`})]})}},play:async({canvasElement:e})=>{let t=T(e);await S(await t.findByText(`인증 토큰이 만료되었습니다.`)).toBeInTheDocument()}},j={beforeEach:()=>{let e=C(console,`error`).mockImplementation(()=>{});return()=>e.mockRestore()},render:e=>(0,x.jsx)(y,{...e}),play:async({canvasElement:e})=>{let t=T(e),n=await t.findByRole(`button`,{name:`다시 시도하여 복구하기`});await w.click(n),await S(await t.findByText(`재시도 결과 정상적으로 데이터를 불러왔습니다.`)).toBeInTheDocument()}},M=[`Success`,`FastResolutionNoSpinner`,`ErrorWithDefaultFallback`,`CustomErrorFallback`,`InteractiveRetrySuccess`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    loadingDelay: 50,
    fetchRenderer: async () => {
      await new Promise(resolve => setTimeout(resolve, 120));
      return <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
          <span className="text-2xl font-bold text-emerald-500">✓</span>
          <h3 className="text-foreground font-semibold">데이터 로드 완료</h3>
          <p className="text-xs text-muted-foreground">
            비동기 컴포넌트가 성공적으로 렌더링되었습니다.
          </p>
        </div>;
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(await canvas.findByText('데이터 로드 완료')).toBeInTheDocument();
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    loadingDelay: 300,
    fetchRenderer: async (): Promise<ReactNode> => {
      await new Promise(resolve => setTimeout(resolve, 20));
      return null;
    }
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  beforeEach: () => {
    const spy = spyOn(console, 'error').mockImplementation(() => {});
    return () => spy.mockRestore();
  },
  args: {
    loadingDelay: 50,
    fetchRenderer: async () => {
      await new Promise(resolve => setTimeout(resolve, 80));
      throw new Error('네트워크 연결이 원활하지 않습니다 (503 Service Unavailable)');
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const retryBtn = await canvas.findByRole('button', {
      name: '다시 로드하기'
    });
    await expect(canvas.getByRole('alert')).toBeInTheDocument();

    // 기본 폴백 재시도 버튼 클릭 -> handleRetry 실행
    await userEvent.click(retryBtn);
    await expect(await canvas.findByRole('button', {
      name: '다시 로드하기'
    })).toBeInTheDocument();
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  beforeEach: () => {
    const spy = spyOn(console, 'error').mockImplementation(() => {});
    return () => spy.mockRestore();
  },
  args: {
    loadingDelay: 50,
    fetchRenderer: async () => {
      await new Promise(resolve => setTimeout(resolve, 80));
      throw new Error('인증 토큰이 만료되었습니다.');
    },
    errorFallback: (retry, error) => {
      const message = getErrorMessage(error);
      return <div className="flex h-full flex-col items-center justify-center gap-3 p-4 text-center">
          <div className="rounded-full bg-destructive/10 p-2 text-destructive">
            ⚠️
          </div>
          <div className="text-xs font-semibold text-destructive">
            {message}
          </div>
          <p className="text-[11px] text-muted-foreground">
            사용자 정의 errorFallback 렌더러가 호출되었습니다.
          </p>
          <Button size="sm" variant="outline-primary" onClick={retry}>
            재시도 수행
          </Button>
        </div>;
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(await canvas.findByText('인증 토큰이 만료되었습니다.')).toBeInTheDocument();
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  beforeEach: () => {
    const spy = spyOn(console, 'error').mockImplementation(() => {});
    return () => spy.mockRestore();
  },
  render: args => <InteractiveRetryTestView {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const recoverBtn = await canvas.findByRole('button', {
      name: '다시 시도하여 복구하기'
    });
    await userEvent.click(recoverBtn);
    await expect(await canvas.findByText('재시도 결과 정상적으로 데이터를 불러왔습니다.')).toBeInTheDocument();
  }
}`,...j.parameters?.docs?.source}}}})))()}N();export{A as CustomErrorFallback,k as ErrorWithDefaultFallback,O as FastResolutionNoSpinner,j as InteractiveRetrySuccess,D as Success,M as __namedExportsOrder,E as default};