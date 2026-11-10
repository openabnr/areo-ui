import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-BgbBaVxq.js";import{n,t as r}from"./Button-D528mm4l.js";import{n as i,t as a}from"./plus-ZiV0-lxG.js";import{n as o,t as s}from"./settings-Cet7P-lu.js";import{n as c,t as l}from"./trash-DcXmTfpt.js";var u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{i(),o(),c(),n(),u=t(),d={title:`Components/Button`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`outline-primary`,`outline-secondary`,`destructive`,`outline-destructive`,`ghost`],description:`버튼의 스타일 변형`},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`],description:`버튼의 크기`},iconOnly:{control:`boolean`,description:`아이콘 전용 버튼 여부 (패딩 축소)`},loading:{control:`boolean`,description:`로딩 상태 표시 여부 (스피너 노출 및 비활성화)`},disabled:{control:`boolean`,description:`비활성화 여부`},children:{control:`text`,description:`버튼 내부 텍스트 또는 요소`},title:{control:`text`,description:`접근성 및 툴팁용 텍스트 (iconOnly일 때 스크린 리더용으로 필수 권장)`}},args:{variant:`primary`,size:`md`,iconOnly:!1,loading:!1,disabled:!1,children:`버튼`}},f={args:{children:`Primary 버튼`}},p={render:()=>(0,u.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[(0,u.jsx)(r,{variant:`primary`,children:`Primary`}),(0,u.jsx)(r,{variant:`secondary`,children:`Secondary`}),(0,u.jsx)(r,{variant:`outline-primary`,children:`Outline Primary`}),(0,u.jsx)(r,{variant:`outline-secondary`,children:`Outline Secondary`}),(0,u.jsx)(r,{variant:`destructive`,children:`Destructive`}),(0,u.jsx)(r,{variant:`outline-destructive`,children:`Outline Destructive`}),(0,u.jsx)(r,{variant:`ghost`,children:`Ghost`})]})},m={render:()=>(0,u.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,u.jsx)(r,{size:`sm`,children:`Small (sm)`}),(0,u.jsx)(r,{size:`md`,children:`Medium (md)`}),(0,u.jsx)(r,{size:`lg`,children:`Large (lg)`})]})},h={render:()=>(0,u.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,u.jsxs)(r,{variant:`primary`,children:[(0,u.jsx)(a,{className:`mr-1.5 h-3.5 w-3.5`}),`항목 추가`]}),(0,u.jsxs)(r,{variant:`outline-secondary`,children:[(0,u.jsx)(s,{className:`mr-1.5 h-3.5 w-3.5`}),`설정`]}),(0,u.jsxs)(r,{variant:`destructive`,children:[(0,u.jsx)(l,{className:`mr-1.5 h-3.5 w-3.5`}),`삭제`]})]})},g={render:()=>(0,u.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,u.jsx)(r,{variant:`primary`,size:`sm`,iconOnly:!0,title:`추가`,children:(0,u.jsx)(a,{className:`h-3.5 w-3.5`})}),(0,u.jsx)(r,{variant:`outline-secondary`,size:`md`,iconOnly:!0,title:`설정`,children:(0,u.jsx)(s,{className:`h-4 w-4`})}),(0,u.jsx)(r,{variant:`destructive`,size:`lg`,iconOnly:!0,title:`삭제`,children:(0,u.jsx)(l,{className:`h-4.5 w-4.5`})}),(0,u.jsx)(r,{variant:`ghost`,size:`md`,iconOnly:!0,title:`더보기`,children:(0,u.jsx)(s,{className:`h-4 w-4`})})]})},_={render:()=>(0,u.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,u.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,u.jsx)(r,{variant:`primary`,children:`기본 상태`}),(0,u.jsx)(r,{variant:`primary`,loading:!0,children:`로딩 중`}),(0,u.jsx)(r,{variant:`primary`,disabled:!0,children:`비활성화`})]}),(0,u.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,u.jsx)(r,{variant:`outline-secondary`,children:`기본 상태`}),(0,u.jsx)(r,{variant:`outline-secondary`,loading:!0,children:`로딩 중`}),(0,u.jsx)(r,{variant:`outline-secondary`,disabled:!0,children:`비활성화`})]})]})},v=[`Default`,`AllVariants`,`Sizes`,`WithIcon`,`IconOnly`,`States`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Primary 버튼'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-3">\r
      <Button variant="primary">Primary</Button>\r
      <Button variant="secondary">Secondary</Button>\r
      <Button variant="outline-primary">Outline Primary</Button>\r
      <Button variant="outline-secondary">Outline Secondary</Button>\r
      <Button variant="destructive">Destructive</Button>\r
      <Button variant="outline-destructive">Outline Destructive</Button>\r
      <Button variant="ghost">Ghost</Button>\r
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">\r
      <Button size="sm">Small (sm)</Button>\r
      <Button size="md">Medium (md)</Button>\r
      <Button size="lg">Large (lg)</Button>\r
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">\r
      <Button variant="primary">\r
        <PlusIcon className="mr-1.5 h-3.5 w-3.5" />\r
        항목 추가\r
      </Button>\r
      <Button variant="outline-secondary">\r
        <SettingsIcon className="mr-1.5 h-3.5 w-3.5" />\r
        설정\r
      </Button>\r
      <Button variant="destructive">\r
        <Trash2Icon className="mr-1.5 h-3.5 w-3.5" />\r
        삭제\r
      </Button>\r
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">\r
      <Button variant="primary" size="sm" iconOnly title="추가">\r
        <PlusIcon className="h-3.5 w-3.5" />\r
      </Button>\r
      <Button variant="outline-secondary" size="md" iconOnly title="설정">\r
        <SettingsIcon className="h-4 w-4" />\r
      </Button>\r
      <Button variant="destructive" size="lg" iconOnly title="삭제">\r
        <Trash2Icon className="h-4.5 w-4.5" />\r
      </Button>\r
      <Button variant="ghost" size="md" iconOnly title="더보기">\r
        <SettingsIcon className="h-4 w-4" />\r
      </Button>\r
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">\r
      <div className="flex items-center gap-3">\r
        <Button variant="primary">기본 상태</Button>\r
        <Button variant="primary" loading>\r
          로딩 중\r
        </Button>\r
        <Button variant="primary" disabled>\r
          비활성화\r
        </Button>\r
      </div>\r
      <div className="flex items-center gap-3">\r
        <Button variant="outline-secondary">기본 상태</Button>\r
        <Button variant="outline-secondary" loading>\r
          로딩 중\r
        </Button>\r
        <Button variant="outline-secondary" disabled>\r
          비활성화\r
        </Button>\r
      </div>\r
    </div>
}`,..._.parameters?.docs?.source}}}})))()}y();export{p as AllVariants,f as Default,g as IconOnly,m as Sizes,_ as States,h as WithIcon,v as __namedExportsOrder,d as default};