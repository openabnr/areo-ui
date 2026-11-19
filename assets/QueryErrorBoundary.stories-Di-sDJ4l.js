import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-mWnvI0Rq.js";import{n as r,t as i}from"./Button-CNQda5oc.js";import{n as a,t as o}from"./QueryErrorBoundary-ChTd-a5w.js";function s({shouldThrow:e}){if(e)throw Error(`테스트용 렌더링 에러가 발생했습니다.`);return(0,d.jsx)(`div`,{children:`정상 콘텐츠가 렌더링되었습니다.`})}function c({error:e,onRecover:t}){return(0,d.jsxs)(`div`,{role:`alert`,className:`flex flex-col items-center gap-3 p-4`,children:[(0,d.jsx)(`p`,{className:`text-xs font-semibold text-destructive`,children:e instanceof Error?e.message:`알 수 없는 오류`}),(0,d.jsx)(i,{size:`sm`,onClick:t,children:`다시 시도`})]})}function l(e){let[t,n]=(0,u.useState)(!0),r=(0,u.useCallback)((e,t)=>(0,d.jsx)(c,{error:t,onRecover:()=>{n(!1),e()}}),[]);return(0,d.jsx)(o,{onError:e.onError,onReset:e.onReset,fallback:r,children:(0,d.jsx)(s,{shouldThrow:t})})}var u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{u=t(),r(),a(),d=n(),{expect:f,fn:p,spyOn:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Components/QueryErrorBoundary`,component:o,parameters:{layout:`centered`},tags:[`autodocs`]},v={beforeEach:()=>{let e=m(console,`error`).mockImplementation(()=>{});return()=>e.mockRestore()},args:{onError:p(),onReset:p()},render:e=>(0,d.jsx)(l,{...e}),play:async({canvasElement:e,args:t})=>{let n=g(e);await f(await n.findByRole(`alert`)).toBeInTheDocument(),await f(n.getByText(`테스트용 렌더링 에러가 발생했습니다.`)).toBeInTheDocument(),await f(t.onError).toHaveBeenCalledTimes(1),await h.click(n.getByRole(`button`,{name:`다시 시도`})),await f(t.onReset).toHaveBeenCalledTimes(1),await f(await n.findByText(`정상 콘텐츠가 렌더링되었습니다.`)).toBeInTheDocument()}},y={beforeEach:()=>{let e=m(console,`error`).mockImplementation(()=>{});return()=>e.mockRestore()},render:()=>(0,d.jsx)(o,{fallback:e=>(0,d.jsxs)(`div`,{role:`alert`,className:`flex flex-col items-center gap-2 p-4`,children:[(0,d.jsx)(`span`,{children:`기본 로깅 에러 폴백`}),(0,d.jsx)(i,{size:`sm`,onClick:e,children:`초기화`})]}),children:(0,d.jsx)(s,{shouldThrow:!0})}),play:async({canvasElement:e})=>{let t=g(e);await f(await t.findByRole(`alert`)).toBeInTheDocument(),await f(t.getByText(`기본 로깅 에러 폴백`)).toBeInTheDocument()}},b=[`WithCustomOnErrorAndRecovery`,`DefaultConsoleErrorFallback`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  beforeEach: () => {
    const spy = spyOn(console, 'error').mockImplementation(() => {});
    return () => spy.mockRestore();
  },
  args: {
    onError: fn(),
    onReset: fn()
  },
  render: args => <CustomOnErrorRecoveryDemo {...args} />,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);

    // 1) 에러 폴백 렌더링 및 onError 콜백 호출 검증
    await expect(await canvas.findByRole('alert')).toBeInTheDocument();
    await expect(canvas.getByText('테스트용 렌더링 에러가 발생했습니다.')).toBeInTheDocument();
    await expect(args.onError).toHaveBeenCalledTimes(1);

    // 2) 다시 시도 클릭 -> reset() 호출 -> 정상 콘텐츠 복구 검증
    await userEvent.click(canvas.getByRole('button', {
      name: '다시 시도'
    }));
    await expect(args.onReset).toHaveBeenCalledTimes(1);
    await expect(await canvas.findByText('정상 콘텐츠가 렌더링되었습니다.')).toBeInTheDocument();
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  beforeEach: () => {
    const spy = spyOn(console, 'error').mockImplementation(() => {});
    return () => spy.mockRestore();
  },
  render: () => <QueryErrorBoundary fallback={retry => <div role="alert" className="flex flex-col items-center gap-2 p-4">
          <span>기본 로깅 에러 폴백</span>
          <Button size="sm" onClick={retry}>
            초기화
          </Button>
        </div>}>
      <BuggyChild shouldThrow />
    </QueryErrorBoundary>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(await canvas.findByRole('alert')).toBeInTheDocument();
    await expect(canvas.getByText('기본 로깅 에러 폴백')).toBeInTheDocument();
  }
}`,...y.parameters?.docs?.source}}}})))()}x();export{y as DefaultConsoleErrorFallback,v as WithCustomOnErrorAndRecovery,b as __namedExportsOrder,_ as default};