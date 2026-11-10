import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-BMcTjw50.js";import{n as r,t as i}from"./Button-BIxzI073.js";import{n as a,t as o}from"./CircularProgress-C3pigMzj.js";import{n as s,t as c}from"./DeferredComponent-CzxPRX0r.js";var l,u;function d(){return(d=e((()=>{l=t(),u=class extends l.Component{state={hasError:!1,error:null};static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error(`[QueryErrorBoundary] Caught an error:`,e,t)}reset=()=>{this.props.onReset?.(),this.setState({hasError:!1,error:null})};render(){return this.state.hasError?this.props.fallback(this.reset,this.state.error):this.props.children}},u.__docgenInfo={description:``,methods:[{name:`reset`,docblock:null,modifiers:[],params:[],returns:null}],displayName:`QueryErrorBoundary`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},fallback:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(retry: () => void, error: unknown) => ReactNode`,signature:{arguments:[{type:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},name:`retry`},{type:{name:`unknown`},name:`error`}],return:{name:`ReactNode`}}},description:``},onReset:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})))()}function f({promise:e}){let t=(0,m.use)(e);return(0,h.jsx)(h.Fragment,{children:t})}function p({fetchRenderer:e,loadingDelay:t=300,errorFallback:n}){let[r,a]=(0,m.useState)(()=>e()),s=(0,m.useCallback)(()=>{a(e())},[e]),l=e=>(0,h.jsxs)(`div`,{className:`absolute inset-0 flex flex-col items-center justify-center p-4 text-center`,children:[(0,h.jsxs)(`div`,{className:`text-foreground mt-5 mb-8 text-sm`,children:[`데이터를 가져오지 못했습니다. `,(0,h.jsx)(`br`,{}),`다시 시도 하시겠습니까?`]}),(0,h.jsx)(i,{size:`lg`,onClick:e,children:`다시 로드하기`})]});return(0,h.jsx)(u,{onReset:s,fallback:(e,t)=>n?n(e,t):l(e),children:(0,h.jsx)(m.Suspense,{fallback:(0,h.jsx)(c,{timeout:t,children:(0,h.jsx)(`div`,{className:`absolute inset-0 flex flex-col items-center justify-center`,children:(0,h.jsx)(o,{size:`lg`})})}),children:(0,h.jsx)(f,{promise:r})})})}var m,h;function g(){return(g=e((()=>{m=t(),r(),a(),s(),d(),h=n(),p.__docgenInfo={description:``,methods:[],displayName:`FetchingInitializer`,props:{loadingDelay:{defaultValue:{value:`300`,computed:!1},required:!1}}}})))()}function _(e){if(e instanceof Error)return e.message;if(typeof e==`string`)return e;try{return JSON.stringify(e)}catch{return`알 수 없는 오류가 발생했습니다.`}}function v(e){let[t,n]=(0,y.useState)(0),r=(0,y.useCallback)(async()=>{if(await new Promise(e=>setTimeout(e,500)),t===0)throw Error(`첫 번째 시도에서 일시적 통신 오류가 발생했습니다.`);return(0,b.jsxs)(`div`,{className:`flex h-full flex-col items-center justify-center gap-2 text-center`,children:[(0,b.jsx)(`span`,{className:`text-xl font-bold text-emerald-500`,children:`성공!`}),(0,b.jsx)(`p`,{className:`text-foreground text-xs`,children:`재시도 결과 정상적으로 데이터를 불러왔습니다.`}),(0,b.jsxs)(`span`,{className:`text-[10px] text-muted-foreground`,children:[`(총 시도 횟수: `,t+1,`)`]})]})},[t]),a=(0,y.useCallback)((e,t)=>(0,b.jsxs)(`div`,{className:`flex h-full flex-col items-center justify-center gap-3 p-4 text-center`,children:[(0,b.jsx)(`span`,{className:`text-sm font-semibold text-destructive`,children:_(t)}),(0,b.jsx)(i,{size:`sm`,onClick:()=>{n(e=>e+1),e()},children:`다시 시도하여 복구하기`})]}),[]);return(0,b.jsx)(p,{loadingDelay:100,...e,fetchRenderer:r,errorFallback:a})}var y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{y=t(),r(),g(),b=n(),x={title:`Components/FetchingInitializer`,component:p,parameters:{layout:`centered`},tags:[`autodocs`],args:{loadingDelay:300,fetchRenderer:()=>Promise.resolve((0,b.jsx)(`div`,{children:`기본 콘텐츠`}))},decorators:[e=>(0,b.jsx)(`div`,{className:`border-border bg-background relative h-72 w-96 rounded-lg border p-4 shadow-sm`,children:(0,b.jsx)(e,{})})]},S={args:{loadingDelay:100,fetchRenderer:async()=>(await new Promise(e=>setTimeout(e,800)),(0,b.jsxs)(`div`,{className:`flex h-full flex-col items-center justify-center gap-2 text-center`,children:[(0,b.jsx)(`span`,{className:`text-2xl font-bold text-emerald-500`,children:`✓`}),(0,b.jsx)(`h3`,{className:`text-foreground font-semibold`,children:`데이터 로드 완료`}),(0,b.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`비동기 컴포넌트가 성공적으로 렌더링되었습니다.`})]}))}},C={args:{loadingDelay:300,fetchRenderer:async()=>(await new Promise(e=>setTimeout(e,50)),(0,b.jsx)(`div`,{className:`flex h-full items-center justify-center text-center`,children:(0,b.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`지연 시간(300ms) 이내에 로드되어 로딩 스피너 깜빡임이 생략되었습니다.`})}))}},w={args:{loadingDelay:100,fetchRenderer:async()=>{throw await new Promise(e=>setTimeout(e,500)),Error(`네트워크 연결이 원활하지 않습니다 (503 Service Unavailable)`)}}},T={args:{loadingDelay:100,fetchRenderer:async()=>{throw await new Promise(e=>setTimeout(e,400)),Error(`인증 토큰이 만료되었습니다.`)},errorFallback:(e,t)=>{let n=_(t);return(0,b.jsxs)(`div`,{className:`flex h-full flex-col items-center justify-center gap-3 p-4 text-center`,children:[(0,b.jsx)(`div`,{className:`rounded-full bg-destructive/10 p-2 text-destructive`,children:`⚠️`}),(0,b.jsx)(`div`,{className:`text-xs font-semibold text-destructive`,children:n}),(0,b.jsx)(`p`,{className:`text-[11px] text-muted-foreground`,children:`사용자 정의 errorFallback 렌더러가 호출되었습니다.`}),(0,b.jsx)(i,{size:`sm`,variant:`outline-primary`,onClick:e,children:`재시도 수행`})]})}}},E={render:e=>(0,b.jsx)(v,{...e})},D=[`Success`,`FastResolutionNoSpinner`,`ErrorWithDefaultFallback`,`CustomErrorFallback`,`InteractiveRetrySuccess`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    loadingDelay: 100,
    fetchRenderer: async () => {
      await new Promise(resolve => setTimeout(resolve, 800));
      return <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
          <span className="text-2xl font-bold text-emerald-500">✓</span>
          <h3 className="text-foreground font-semibold">데이터 로드 완료</h3>
          <p className="text-xs text-muted-foreground">
            비동기 컴포넌트가 성공적으로 렌더링되었습니다.
          </p>
        </div>;
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    loadingDelay: 300,
    fetchRenderer: async () => {
      await new Promise(resolve => setTimeout(resolve, 50));
      return <div className="flex h-full items-center justify-center text-center">
          <p className="text-xs text-muted-foreground">
            지연 시간(300ms) 이내에 로드되어 로딩 스피너 깜빡임이
            생략되었습니다.
          </p>
        </div>;
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    loadingDelay: 100,
    fetchRenderer: async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      throw new Error('네트워크 연결이 원활하지 않습니다 (503 Service Unavailable)');
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    loadingDelay: 100,
    fetchRenderer: async () => {
      await new Promise(resolve => setTimeout(resolve, 400));
      throw new Error('인증 토큰이 만료되었습니다.');
    },
    errorFallback: (retry, error) => {
      // [S6551 해결] getErrorMessage 사용
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
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <InteractiveRetryTestView {...args} />
}`,...E.parameters?.docs?.source}}}})))()}O();export{T as CustomErrorFallback,w as ErrorWithDefaultFallback,C as FastResolutionNoSpinner,E as InteractiveRetrySuccess,S as Success,D as __namedExportsOrder,x as default};