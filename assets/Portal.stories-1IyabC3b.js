import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-Di8_Mevq.js";import{t as r}from"./react-dom-BZDI4DiT.js";import{l as i,t as a}from"./utils-CXswP1E2.js";import{t as o}from"./server.browser-DbIjnpKj.js";function s({container:e,className:t,children:n,...r}){let i=(0,c.useSyncExternalStore)(f,p,m)?globalThis.document?.body??null:null,o=e===void 0?i:e;return o?(0,l.createPortal)((0,u.jsx)(`div`,{"data-slot":`portal`,className:a(`areo-root font-sans`,t),...r,children:n}),o):null}var c,l,u,d,f,p,m;function h(){return(h=e((()=>{c=t(),l=r(),i(),u=n(),d=()=>{},f=()=>d,p=()=>!0,m=()=>!1})))()}function g(){let[e,t]=(0,v.useState)(null);return(0,b.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,b.jsxs)(`div`,{className:`border border-dashed border-primary p-3 text-xs`,children:[(0,b.jsx)(`span`,{children:`커스텀 타겟 컨테이너:`}),(0,b.jsx)(`div`,{ref:t,"data-testid":`custom-portal-target`})]}),e?(0,b.jsx)(s,{container:e,"data-testid":`custom-portal-content`,children:(0,b.jsx)(`span`,{className:`font-medium text-primary`,children:`지정된 엘리먼트 내부로 포털 렌더링`})}):null]})}function _(){let[e,t]=(0,v.useState)(!0);return(0,b.jsxs)(`div`,{"data-testid":`null-portal-wrapper`,className:`flex flex-col gap-2 text-xs`,children:[(0,b.jsx)(`span`,{children:`컨테이너가 null일 때는 포털 콘텐츠가 렌더링되지 않습니다.`}),e?(0,b.jsx)(s,{container:null,"data-testid":`null-portal-content`,children:(0,b.jsx)(`span`,{children:`보이지 않아야 하는 콘텐츠`})}):null,(0,b.jsx)(`button`,{type:`button`,className:`self-start underline`,onClick:()=>t(!1),children:`포털 언마운트`})]})}var v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{v=t(),y=o(),h(),b=n(),{expect:x,screen:S,userEvent:C,within:w}=__STORYBOOK_MODULE_TEST__,T={title:`Components/Portal`,component:s,tags:[`autodocs`],parameters:{layout:`centered`}},E={render:()=>(0,b.jsxs)(`div`,{className:`border border-secondary-border bg-white p-3 text-xs`,children:[(0,b.jsx)(`span`,{children:`기본 컨테이너 영역`}),(0,b.jsx)(s,{"data-testid":`body-portal`,children:(0,b.jsx)(`div`,{className:`fixed right-4 bottom-4 border border-primary bg-white px-3 py-1.5 text-xs shadow-sm`,children:`document.body로 렌더링된 포털`})})]}),play:async()=>{let e=await S.findByTestId(`body-portal`);await x(e).toBeInTheDocument(),await x(e.parentElement).toBe(document.body)}},D={render:()=>(0,b.jsx)(g,{}),play:async({canvasElement:e})=>{let t=w(e),n=t.getByTestId(`custom-portal-target`),r=await t.findByTestId(`custom-portal-content`);await x(n).toContainElement(r)}},O={render:()=>(0,b.jsx)(_,{}),play:async({canvasElement:e})=>{let t=w(e);await x(t.queryByTestId(`null-portal-content`)).not.toBeInTheDocument(),await C.click(t.getByRole(`button`,{name:`포털 언마운트`}));let n=(0,y.renderToString)((0,b.jsx)(s,{children:(0,b.jsx)(`span`,{children:`SSR 포털`})}));await x(n).toBe(``)}},k=[`DefaultBodyPortal`,`CustomContainer`,`NullContainer`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div className="border border-secondary-border bg-white p-3 text-xs">
      <span>기본 컨테이너 영역</span>
      <Portal data-testid="body-portal">
        <div className="fixed right-4 bottom-4 border border-primary bg-white px-3 py-1.5 text-xs shadow-sm">
          document.body로 렌더링된 포털
        </div>
      </Portal>
    </div>,
  play: async () => {
    const portalElement = await screen.findByTestId('body-portal');
    await expect(portalElement).toBeInTheDocument();
    await expect(portalElement.parentElement).toBe(document.body);
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <CustomContainerDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const target = canvas.getByTestId('custom-portal-target');
    const content = await canvas.findByTestId('custom-portal-content');
    await expect(target).toContainElement(content);
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <NullAndSsrPortalDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByTestId('null-portal-content')).not.toBeInTheDocument();

    // 언마운트 시 useSyncExternalStore 구독 해제(noop) 커버
    await userEvent.click(canvas.getByRole('button', {
      name: '포털 언마운트'
    }));

    // SSR 스냅샷(getServerSnapshot, Line 11) 및 비마운트 분기(Line 31) 커버
    const ssrHtml = renderToString(<Portal>
        <span>SSR 포털</span>
      </Portal>);
    await expect(ssrHtml).toBe('');
  }
}`,...O.parameters?.docs?.source}}}})))()}A();export{D as CustomContainer,E as DefaultBodyPortal,O as NullContainer,k as __namedExportsOrder,T as default};