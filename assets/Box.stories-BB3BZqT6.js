import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-BgbBaVxq.js";import{c as n,t as r}from"./utils-Cjde27Em.js";import{n as i,t as a}from"./dist-81uMrw1m.js";function o({variant:e,children:t,className:n,ref:i,...a}){return(0,s.jsx)(`div`,{ref:i,className:r(c({variant:e}),n),...a,children:t})}var s,c;function l(){return(l=e((()=>{i(),n(),s=t(),c=a(`box-border flex border p-2.5`,{variants:{variant:{default:`border-secondary-border-hover bg-white text-secondary-foreground`,muted:`border-secondary-border bg-surface-muted text-secondary-foreground`,info:`border-primary bg-surface-info text-secondary-foreground`}},defaultVariants:{variant:`default`}}),o.__docgenInfo={description:``,methods:[],displayName:`Box`}})))()}var u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{l(),u=t(),d={title:`Components/Box`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`muted`,`info`],description:`Box의 시각적 스타일 변형`},children:{control:`text`,description:`Box 내부 콘텐츠`},className:{control:`text`,description:`추가 Tailwind CSS 클래스`}},args:{variant:`default`,children:`기본 Box 컴포넌트 내용입니다.`}},f={args:{variant:`default`,children:`Default 박스 영역입니다.`}},p={args:{variant:`muted`,children:`Muted 스타일이 적용된 박스 영역입니다.`}},m={args:{variant:`info`,children:`Info 강조 스타일이 적용된 박스 영역입니다.`}},h={render:()=>(0,u.jsxs)(`div`,{className:`flex w-96 flex-col gap-4`,children:[(0,u.jsx)(o,{variant:`default`,children:(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`strong`,{className:`block text-sm font-semibold`,children:`Default`}),(0,u.jsx)(`span`,{className:`text-xs`,children:`기본 보더 및 배경색`})]})}),(0,u.jsx)(o,{variant:`muted`,children:(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`strong`,{className:`block text-sm font-semibold`,children:`Muted`}),(0,u.jsx)(`span`,{className:`text-xs`,children:`비활성/보조 배경색`})]})}),(0,u.jsx)(o,{variant:`info`,children:(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`strong`,{className:`block text-sm font-semibold`,children:`Info`}),(0,u.jsx)(`span`,{className:`text-xs`,children:`정보성/강조 배경색`})]})})]})},g={args:{variant:`default`,className:`w-80 flex-col gap-2 rounded-md shadow-sm`,children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`div`,{className:`text-sm font-bold`,children:`카드 형태 레이아웃`}),(0,u.jsx)(`p`,{className:`text-xs text-neutral-600`,children:`className을 통해 너비, 둥글기(rounded), 그림자 등을 자유롭게 조합할 수 있습니다.`})]})}},_=[`Default`,`Muted`,`Info`,`AllVariants`,`CustomLayout`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    children: 'Default 박스 영역입니다.'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'muted',
    children: 'Muted 스타일이 적용된 박스 영역입니다.'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'Info 강조 스타일이 적용된 박스 영역입니다.'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-96 flex-col gap-4">\r
      <Box variant="default">\r
        <div>\r
          <strong className="block text-sm font-semibold">Default</strong>\r
          <span className="text-xs">기본 보더 및 배경색</span>\r
        </div>\r
      </Box>\r
      <Box variant="muted">\r
        <div>\r
          <strong className="block text-sm font-semibold">Muted</strong>\r
          <span className="text-xs">비활성/보조 배경색</span>\r
        </div>\r
      </Box>\r
      <Box variant="info">\r
        <div>\r
          <strong className="block text-sm font-semibold">Info</strong>\r
          <span className="text-xs">정보성/강조 배경색</span>\r
        </div>\r
      </Box>\r
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    className: 'w-80 flex-col gap-2 rounded-md shadow-sm',
    children: <>\r
        <div className="text-sm font-bold">카드 형태 레이아웃</div>\r
        <p className="text-xs text-neutral-600">\r
          className을 통해 너비, 둥글기(rounded), 그림자 등을 자유롭게 조합할 수\r
          있습니다.\r
        </p>\r
      </>
  }
}`,...g.parameters?.docs?.source}}}})))()}v();export{h as AllVariants,g as CustomLayout,f as Default,m as Info,p as Muted,_ as __namedExportsOrder,d as default};