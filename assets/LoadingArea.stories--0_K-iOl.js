import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-mWnvI0Rq.js";import{c as n,t as r}from"./utils-CynS5U15.js";import{n as i,t as a}from"./CircularProgress-NPgvlgdQ.js";function o({className:e,...t}){return(0,s.jsx)(`div`,{className:r(`absolute top-0 left-0 z-1 flex size-full flex-col items-center justify-center bg-black/10 text-center backdrop-blur-[0.5px]`,e),...t})}var s;function c(){return(c=e((()=>{n(),s=t(),o.__docgenInfo={description:``,methods:[],displayName:`LoadingArea`}})))()}var l,u,d,f,p,m;function h(){return(h=e((()=>{i(),c(),l=t(),{expect:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/LoadingArea`,component:o,tags:[`autodocs`],parameters:{layout:`centered`}},p={render:e=>(0,l.jsxs)(`div`,{className:`relative h-40 w-64 border border-secondary-border bg-white p-4`,children:[(0,l.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`배경 콘텐츠 영역`}),(0,l.jsxs)(o,{...e,"data-testid":`loading-area`,children:[(0,l.jsx)(a,{}),(0,l.jsx)(`span`,{className:`mt-2 text-xs font-medium text-secondary-foreground`,children:`데이터 불러오는 중...`})]})]}),play:async({canvasElement:e})=>{let t=d(e),n=t.getByTestId(`loading-area`);await u(n).toBeInTheDocument(),await u(t.getByText(`데이터 불러오는 중...`)).toBeInTheDocument()}},m=[`Default`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div className="relative h-40 w-64 border border-secondary-border bg-white p-4">
      <p className="text-xs text-muted-foreground">배경 콘텐츠 영역</p>
      <LoadingArea {...args} data-testid="loading-area">
        <CircularProgress />
        <span className="mt-2 text-xs font-medium text-secondary-foreground">
          데이터 불러오는 중...
        </span>
      </LoadingArea>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const overlay = canvas.getByTestId('loading-area');
    await expect(overlay).toBeInTheDocument();
    await expect(canvas.getByText('데이터 불러오는 중...')).toBeInTheDocument();
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{p as Default,m as __namedExportsOrder,f as default};