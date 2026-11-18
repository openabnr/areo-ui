import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-Bofpnzsy.js";import{t as r}from"./react-dom-BQaTHsND.js";import{c as i,t as a}from"./utils-CynS5U15.js";function o({container:e,className:t,children:n,...r}){let i=(0,s.useSyncExternalStore)(d,f,p)?globalThis.document?.body??null:null,o=e===void 0?i:e;return o?(0,c.createPortal)((0,l.jsx)(`div`,{"data-slot":`portal`,className:a(`areo-root font-sans`,t),...r,children:n}),o):null}var s,c,l,u,d,f,p;function m(){return(m=e((()=>{s=t(),c=r(),i(),l=n(),u=()=>{},d=()=>u,f=()=>!0,p=()=>!1})))()}function h(){let[e,t]=(0,g.useState)(null);return(0,_.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,_.jsxs)(`div`,{className:`border border-dashed border-primary p-3 text-xs`,children:[(0,_.jsx)(`span`,{children:`커스텀 타겟 컨테이너:`}),(0,_.jsx)(`div`,{ref:t,"data-testid":`custom-portal-target`})]}),e?(0,_.jsx)(o,{container:e,"data-testid":`custom-portal-content`,children:(0,_.jsx)(`span`,{className:`font-medium text-primary`,children:`지정된 엘리먼트 내부로 포털 렌더링`})}):null]})}var g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{g=t(),m(),_=n(),{expect:v,screen:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Components/Portal`,component:o,tags:[`autodocs`],parameters:{layout:`centered`}},S={render:()=>(0,_.jsxs)(`div`,{className:`border border-secondary-border bg-white p-3 text-xs`,children:[(0,_.jsx)(`span`,{children:`기본 컨테이너 영역`}),(0,_.jsx)(o,{"data-testid":`body-portal`,children:(0,_.jsx)(`div`,{className:`fixed right-4 bottom-4 border border-primary bg-white px-3 py-1.5 text-xs shadow-sm`,children:`document.body로 렌더링된 포털`})})]}),play:async()=>{let e=await y.findByTestId(`body-portal`);await v(e).toBeInTheDocument(),await v(e.parentElement).toBe(document.body)}},C={render:()=>(0,_.jsx)(h,{}),play:async({canvasElement:e})=>{let t=b(e),n=t.getByTestId(`custom-portal-target`),r=await t.findByTestId(`custom-portal-content`);await v(n).toContainElement(r)}},w={render:()=>(0,_.jsxs)(`div`,{"data-testid":`null-portal-wrapper`,className:`text-xs`,children:[`컨테이너가 null일 때는 포털 콘텐츠가 렌더링되지 않습니다.`,(0,_.jsx)(o,{container:null,"data-testid":`null-portal-content`,children:(0,_.jsx)(`span`,{children:`보이지 않아야 하는 콘텐츠`})})]}),play:async({canvasElement:e})=>{let t=b(e);await v(t.queryByTestId(`null-portal-content`)).not.toBeInTheDocument()}},T=[`DefaultBodyPortal`,`CustomContainer`,`NullContainer`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <CustomContainerDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const target = canvas.getByTestId('custom-portal-target');
    const content = await canvas.findByTestId('custom-portal-content');
    await expect(target).toContainElement(content);
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div data-testid="null-portal-wrapper" className="text-xs">
      컨테이너가 null일 때는 포털 콘텐츠가 렌더링되지 않습니다.
      <Portal container={null} data-testid="null-portal-content">
        <span>보이지 않아야 하는 콘텐츠</span>
      </Portal>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByTestId('null-portal-content')).not.toBeInTheDocument();
  }
}`,...w.parameters?.docs?.source}}}})))()}E();export{C as CustomContainer,S as DefaultBodyPortal,w as NullContainer,T as __namedExportsOrder,x as default};