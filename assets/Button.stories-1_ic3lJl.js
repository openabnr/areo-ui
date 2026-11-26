import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CfFMW0hA.js";import{n,t as r}from"./Button-Bc1aY3Nz.js";import{n as i,t as a}from"./plus-D0gXtchj.js";import{n as o,t as s}from"./settings-DZMkT9I4.js";import{n as c,t as l}from"./trash-CY1S0nVv.js";var u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{i(),o(),c(),n(),u=t(),{expect:d,within:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components/Button`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`outline-primary`,`outline-secondary`,`destructive`,`outline-destructive`,`ghost`],description:`버튼의 스타일 변형`},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`],description:`버튼의 크기`},iconOnly:{control:`boolean`,description:`아이콘 전용 버튼 여부 (패딩 축소)`},loading:{control:`boolean`,description:`로딩 상태 표시 여부 (스피너 노출 및 비활성화)`},fullWidth:{control:`boolean`,description:`전체 너비 사용 여부`},disabled:{control:`boolean`,description:`비활성화 여부`},children:{control:`text`,description:`버튼 내부 텍스트 또는 요소`},title:{control:`text`,description:`접근성 및 툴팁용 텍스트 (iconOnly일 때 스크린 리더용으로 필수 권장)`}},args:{variant:`primary`,size:`md`,iconOnly:!1,loading:!1,fullWidth:!1,disabled:!1,children:`버튼`}},m={args:{children:`Primary 버튼`}},h={render:()=>(0,u.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[(0,u.jsx)(r,{variant:`primary`,children:`Primary`}),(0,u.jsx)(r,{variant:`secondary`,children:`Secondary`}),(0,u.jsx)(r,{variant:`outline-primary`,children:`Outline Primary`}),(0,u.jsx)(r,{variant:`outline-secondary`,children:`Outline Secondary`}),(0,u.jsx)(r,{variant:`destructive`,children:`Destructive`}),(0,u.jsx)(r,{variant:`outline-destructive`,children:`Outline Destructive`}),(0,u.jsx)(r,{variant:`ghost`,children:`Ghost`})]})},g={render:()=>(0,u.jsxs)(`div`,{className:`flex w-64 flex-col gap-3`,children:[(0,u.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,u.jsx)(r,{size:`sm`,children:`Small (sm)`}),(0,u.jsx)(r,{size:`md`,children:`Medium (md)`}),(0,u.jsx)(r,{size:`lg`,children:`Large (lg)`})]}),(0,u.jsx)(r,{fullWidth:!0,children:`Full Width 버튼`})]})},_={render:()=>(0,u.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,u.jsxs)(r,{variant:`primary`,children:[(0,u.jsx)(a,{className:`mr-1.5 h-3.5 w-3.5`}),`항목 추가`]}),(0,u.jsxs)(r,{variant:`outline-secondary`,children:[(0,u.jsx)(s,{className:`mr-1.5 h-3.5 w-3.5`}),`설정`]}),(0,u.jsxs)(r,{variant:`destructive`,children:[(0,u.jsx)(l,{className:`mr-1.5 h-3.5 w-3.5`}),`삭제`]})]})},v={render:()=>(0,u.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,u.jsx)(r,{variant:`primary`,size:`sm`,iconOnly:!0,title:`추가`,children:(0,u.jsx)(a,{className:`h-3.5 w-3.5`})}),(0,u.jsx)(r,{variant:`outline-secondary`,size:`md`,iconOnly:!0,"aria-label":`설정 열기`,children:(0,u.jsx)(s,{className:`h-4 w-4`})}),(0,u.jsx)(r,{variant:`destructive`,size:`lg`,iconOnly:!0,title:`삭제`,children:(0,u.jsx)(l,{className:`h-4.5 w-4.5`})}),(0,u.jsx)(r,{variant:`ghost`,size:`md`,iconOnly:!0,loading:!0,title:`로딩 중`,children:(0,u.jsx)(s,{className:`h-4 w-4`})})]}),play:async({canvasElement:e})=>{let t=f(e);await d(t.getByRole(`button`,{name:`설정 열기`})).toBeInTheDocument(),await d(t.getByRole(`button`,{name:`로딩 중`})).toHaveAttribute(`aria-busy`,`true`)}},y={render:()=>(0,u.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,u.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,u.jsx)(r,{variant:`primary`,children:`기본 상태`}),(0,u.jsx)(r,{variant:`primary`,size:`sm`,loading:!0,children:`작은 로딩`}),(0,u.jsx)(r,{variant:`primary`,loading:!0,children:`로딩 중`}),(0,u.jsx)(r,{variant:`primary`,disabled:!0,children:`비활성화`})]}),(0,u.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,u.jsx)(r,{variant:`outline-secondary`,children:`기본 상태`}),(0,u.jsx)(r,{variant:`outline-secondary`,loading:!0,children:`로딩 중`}),(0,u.jsx)(r,{variant:`outline-secondary`,disabled:!0,children:`비활성화`})]})]})},b=[`Default`,`AllVariants`,`Sizes`,`WithIcon`,`IconOnly`,`States`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Primary 버튼'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline-primary">Outline Primary</Button>
      <Button variant="outline-secondary">Outline Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline-destructive">Outline Destructive</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-64 flex-col gap-3">
      <div className="flex items-center gap-3">
        <Button size="sm">Small (sm)</Button>
        <Button size="md">Medium (md)</Button>
        <Button size="lg">Large (lg)</Button>
      </div>
      <Button fullWidth>Full Width 버튼</Button>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <Button variant="primary">
        <PlusIcon className="mr-1.5 h-3.5 w-3.5" />
        항목 추가
      </Button>
      <Button variant="outline-secondary">
        <SettingsIcon className="mr-1.5 h-3.5 w-3.5" />
        설정
      </Button>
      <Button variant="destructive">
        <Trash2Icon className="mr-1.5 h-3.5 w-3.5" />
        삭제
      </Button>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <Button variant="primary" size="sm" iconOnly title="추가">
        <PlusIcon className="h-3.5 w-3.5" />
      </Button>
      <Button variant="outline-secondary" size="md" iconOnly aria-label="설정 열기">
        <SettingsIcon className="h-4 w-4" />
      </Button>
      <Button variant="destructive" size="lg" iconOnly title="삭제">
        <Trash2Icon className="h-4.5 w-4.5" />
      </Button>
      <Button variant="ghost" size="md" iconOnly loading title="로딩 중">
        <SettingsIcon className="h-4 w-4" />
      </Button>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', {
      name: '설정 열기'
    })).toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: '로딩 중'
    })).toHaveAttribute('aria-busy', 'true');
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <Button variant="primary">기본 상태</Button>
        <Button variant="primary" size="sm" loading>
          작은 로딩
        </Button>
        <Button variant="primary" loading>
          로딩 중
        </Button>
        <Button variant="primary" disabled>
          비활성화
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outline-secondary">기본 상태</Button>
        <Button variant="outline-secondary" loading>
          로딩 중
        </Button>
        <Button variant="outline-secondary" disabled>
          비활성화
        </Button>
      </div>
    </div>
}`,...y.parameters?.docs?.source}}}})))()}x();export{h as AllVariants,m as Default,v as IconOnly,g as Sizes,y as States,_ as WithIcon,b as __namedExportsOrder,p as default};