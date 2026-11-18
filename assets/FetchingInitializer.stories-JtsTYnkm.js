import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-DKr3KdmY.js";import{n as r,t as i}from"./Button-_ArORYID.js";import{n as a,t as o}from"./CircularProgress-BDowmIA7.js";import{n as s,t as c}from"./DeferredComponent-D_VqthKs.js";var l,u;function d(){return(d=e((()=>{l=t(),u=class extends l.Component{state={hasError:!1,error:null};static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){if(this.props.onError){this.props.onError(e,t);return}console.error(`[QueryErrorBoundary] Caught an error:`,e,t)}reset=()=>{this.props.onReset?.(),this.setState({hasError:!1,error:null})};render(){return this.state.hasError?this.props.fallback(this.reset,this.state.error):this.props.children}},u.__docgenInfo={description:``,methods:[{name:`reset`,docblock:null,modifiers:[],params:[],returns:null}],displayName:`QueryErrorBoundary`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},fallback:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(retry: () => void, error: unknown) => ReactNode`,signature:{arguments:[{type:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},name:`retry`},{type:{name:`unknown`},name:`error`}],return:{name:`ReactNode`}}},description:``},onReset:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onError:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(error: unknown, errorInfo: ErrorInfo) => void`,signature:{arguments:[{type:{name:`unknown`},name:`error`},{type:{name:`ErrorInfo`},name:`errorInfo`}],return:{name:`void`}}},description:``}}}})))()}function f(e){return Promise.resolve().then(()=>e())}function p({promise:e}){return(0,g.use)(e)??null}function m({onRetry:e}){return(0,_.jsxs)(`div`,{role:`alert`,className:`absolute inset-0 flex flex-col items-center justify-center p-4 text-center`,children:[(0,_.jsxs)(`p`,{className:`text-foreground mt-5 mb-8 text-sm`,children:[`데이터를 가져오지 못했습니다. `,(0,_.jsx)(`br`,{}),`다시 시도 하시겠습니까?`]}),(0,_.jsx)(i,{size:`lg`,onClick:e,children:`다시 로드하기`})]})}function h({fetchRenderer:e,loadingDelay:t=300,errorFallback:n}){let[r,i]=(0,g.useState)(()=>f(e)),a=(0,g.useCallback)(()=>{i(f(e))},[e]),s=(0,g.useCallback)((e,t)=>n?n(e,t):(0,_.jsx)(m,{onRetry:e}),[n]);return(0,_.jsx)(u,{onReset:a,fallback:s,children:(0,_.jsx)(g.Suspense,{fallback:(0,_.jsx)(c,{timeout:t,children:(0,_.jsx)(`div`,{className:`absolute inset-0 flex flex-col items-center justify-center`,children:(0,_.jsx)(o,{size:`lg`})})}),children:(0,_.jsx)(p,{promise:r})})})}var g,_;function v(){return(v=e((()=>{g=t(),r(),a(),s(),d(),_=n(),h.__docgenInfo={description:``,methods:[],displayName:`FetchingInitializer`,props:{loadingDelay:{defaultValue:{value:`300`,computed:!1},required:!1}}}})))()}function y(e){if(e instanceof Error)return e.message;if(typeof e==`string`)return e;try{return JSON.stringify(e)}catch{return`알 수 없는 오류가 발생했습니다.`}}function b(e){let[t,n]=(0,x.useState)(0),r=(0,x.useCallback)(async()=>{if(await new Promise(e=>setTimeout(e,500)),t===0)throw Error(`첫 번째 시도에서 일시적 통신 오류가 발생했습니다.`);return(0,S.jsxs)(`div`,{className:`flex h-full flex-col items-center justify-center gap-2 text-center`,children:[(0,S.jsx)(`span`,{className:`text-xl font-bold text-emerald-500`,children:`성공!`}),(0,S.jsx)(`p`,{className:`text-foreground text-xs`,children:`재시도 결과 정상적으로 데이터를 불러왔습니다.`}),(0,S.jsxs)(`span`,{className:`text-[10px] text-muted-foreground`,children:[`(총 시도 횟수: `,t+1,`)`]})]})},[t]),a=(0,x.useCallback)((e,t)=>(0,S.jsxs)(`div`,{className:`flex h-full flex-col items-center justify-center gap-3 p-4 text-center`,children:[(0,S.jsx)(`span`,{className:`text-sm font-semibold text-destructive`,children:y(t)}),(0,S.jsx)(i,{size:`sm`,onClick:()=>{n(e=>e+1),e()},children:`다시 시도하여 복구하기`})]}),[]);return(0,S.jsx)(h,{loadingDelay:100,...e,fetchRenderer:r,errorFallback:a})}var x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{x=t(),r(),v(),S=n(),C={title:`Components/FetchingInitializer`,component:h,parameters:{layout:`centered`},tags:[`autodocs`],args:{loadingDelay:300,fetchRenderer:()=>Promise.resolve((0,S.jsx)(`div`,{children:`기본 콘텐츠`}))},decorators:[e=>(0,S.jsx)(`div`,{className:`border-border bg-background relative h-72 w-96 rounded-lg border p-4 shadow-sm`,children:(0,S.jsx)(e,{})})]},w={args:{loadingDelay:100,fetchRenderer:async()=>(await new Promise(e=>setTimeout(e,800)),(0,S.jsxs)(`div`,{className:`flex h-full flex-col items-center justify-center gap-2 text-center`,children:[(0,S.jsx)(`span`,{className:`text-2xl font-bold text-emerald-500`,children:`✓`}),(0,S.jsx)(`h3`,{className:`text-foreground font-semibold`,children:`데이터 로드 완료`}),(0,S.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`비동기 컴포넌트가 성공적으로 렌더링되었습니다.`})]}))}},T={args:{loadingDelay:300,fetchRenderer:async()=>(await new Promise(e=>setTimeout(e,50)),(0,S.jsx)(`div`,{className:`flex h-full items-center justify-center text-center`,children:(0,S.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`지연 시간(300ms) 이내에 로드되어 로딩 스피너 깜빡임이 생략되었습니다.`})}))}},E={args:{loadingDelay:100,fetchRenderer:async()=>{throw await new Promise(e=>setTimeout(e,500)),Error(`네트워크 연결이 원활하지 않습니다 (503 Service Unavailable)`)}}},D={args:{loadingDelay:100,fetchRenderer:async()=>{throw await new Promise(e=>setTimeout(e,400)),Error(`인증 토큰이 만료되었습니다.`)},errorFallback:(e,t)=>{let n=y(t);return(0,S.jsxs)(`div`,{className:`flex h-full flex-col items-center justify-center gap-3 p-4 text-center`,children:[(0,S.jsx)(`div`,{className:`rounded-full bg-destructive/10 p-2 text-destructive`,children:`⚠️`}),(0,S.jsx)(`div`,{className:`text-xs font-semibold text-destructive`,children:n}),(0,S.jsx)(`p`,{className:`text-[11px] text-muted-foreground`,children:`사용자 정의 errorFallback 렌더러가 호출되었습니다.`}),(0,S.jsx)(i,{size:`sm`,variant:`outline-primary`,onClick:e,children:`재시도 수행`})]})}}},O={render:e=>(0,S.jsx)(b,{...e})},k=[`Success`,`FastResolutionNoSpinner`,`ErrorWithDefaultFallback`,`CustomErrorFallback`,`InteractiveRetrySuccess`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    loadingDelay: 100,
    fetchRenderer: async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      throw new Error('네트워크 연결이 원활하지 않습니다 (503 Service Unavailable)');
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <InteractiveRetryTestView {...args} />
}`,...O.parameters?.docs?.source}}}})))()}A();export{D as CustomErrorFallback,E as ErrorWithDefaultFallback,T as FastResolutionNoSpinner,O as InteractiveRetrySuccess,w as Success,k as __namedExportsOrder,C as default};