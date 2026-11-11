import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-D3lwOebq.js";import{n as r,t as i}from"./TextField-5qHWalNn.js";var a,o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{a=t(),r(),o=n(),s={title:`Components/TextField`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`inline-radio`,options:[`default`,`search`,`date`,`ghost`],description:`인풋 스타일 변형`},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`],description:`인풋 높이 및 폰트 크기`},inputType:{control:`inline-radio`,options:[`string`,`integer`,`double`],description:`입력 데이터 타입 제한`},clearable:{control:`boolean`,description:`내용 지우기(X) 버튼 표시 여부`},showPasswordToggle:{control:`boolean`,description:`비밀번호 보이기/숨기기 토글 버튼 표시 여부 (type="password" 전용)`},disabled:{control:`boolean`,description:`비활성화 여부`},readOnly:{control:`boolean`,description:`읽기 전용 여부`},length:{control:`number`,description:`최대 허용 바이트(Byte) 수`},minValue:{control:`number`,description:`정수 입력 시 최소값 (블러 시 클램핑)`},maxValue:{control:`number`,description:`정수 입력 시 최대값 (블러 시 클램핑)`},placeholder:{control:`text`,description:`플레이스홀더 텍스트`},onChange:{action:`changed`,description:`입력값 변경 시 콜백`},onClear:{action:`cleared`,description:`지우기 버튼 클릭 시 콜백`},onEnterKeyDown:{action:`enterKeyDown`,description:`Enter 키 입력 시 콜백`}},args:{variant:`default`,size:`md`,inputType:`string`,clearable:!1,showPasswordToggle:!1,disabled:!1,readOnly:!1,placeholder:`텍스트를 입력하세요`,className:`w-64`}},c={args:{defaultValue:`기본 텍스트`}},l={args:{variant:`search`,placeholder:`피처 및 레이어 검색...`,clearable:!0}},u={args:{type:`password`,showPasswordToggle:!0,clearable:!0,defaultValue:`secretP@ssw0rd`}},d={args:{variant:`date`,placeholder:`YYYY-MM-DD`,defaultValue:`2026-11-01`}},f={render:()=>(0,o.jsxs)(`div`,{className:`flex w-64 flex-col gap-4`,children:[(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Default`}),(0,o.jsx)(i,{variant:`default`,defaultValue:`일반 텍스트필드`})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Search`}),(0,o.jsx)(i,{variant:`search`,placeholder:`검색어 입력...`})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Date`}),(0,o.jsx)(i,{variant:`date`,defaultValue:`2026-11-01`})]}),(0,o.jsxs)(`div`,{className:`rounded bg-neutral-100 p-2`,children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Ghost`}),(0,o.jsx)(i,{variant:`ghost`,defaultValue:`Ghost 텍스트필드`})]})]})},p={render:()=>(0,o.jsxs)(`div`,{className:`flex w-64 flex-col gap-4`,children:[(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Small (sm - 21px)`}),(0,o.jsx)(i,{size:`sm`,defaultValue:`Small 텍스트`,clearable:!0})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Medium (md - 27px)`}),(0,o.jsx)(i,{size:`md`,defaultValue:`Medium 텍스트`,clearable:!0})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Large (lg - 32px)`}),(0,o.jsx)(i,{size:`lg`,defaultValue:`Large 텍스트`,clearable:!0})]})]})},m={render:()=>(0,o.jsxs)(`div`,{className:`flex w-64 flex-col gap-4`,children:[(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`정수 (10 ~ 100 클램핑)`}),(0,o.jsx)(i,{inputType:`integer`,minValue:10,maxValue:100,defaultValue:`50`,placeholder:`10에서 100 사이`})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`실수/좌표 (Double)`}),(0,o.jsx)(i,{inputType:`double`,defaultValue:`127.0276`,placeholder:`실수 또는 음수 좌표`})]})]})},h={render:()=>(0,o.jsxs)(`div`,{className:`flex w-64 flex-col gap-4`,children:[(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`ReadOnly`}),(0,o.jsx)(i,{readOnly:!0,defaultValue:`읽기 전용 데이터`})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Disabled`}),(0,o.jsx)(i,{disabled:!0,defaultValue:`비활성화된 인풋`})]})]})},g={render:function(e){let[t,n]=(0,a.useState)(`레이어 명칭`);return(0,o.jsxs)(`div`,{className:`flex w-64 flex-col items-center gap-3`,children:[(0,o.jsxs)(`div`,{className:`w-full rounded border border-secondary-border bg-surface-muted px-3 py-1.5 text-xs`,children:[(0,o.jsx)(`strong`,{children:`입력값:`}),` `,t||`(빈 값)`]}),(0,o.jsx)(i,{...e,value:t,clearable:!0,onChange:t=>{n(t.target.value),e.onChange?.(t)},onClear:()=>{n(``),e.onClear?.()}})]})}},_=[`Default`,`Search`,`Password`,`DateVariant`,`Variants`,`Sizes`,`NumberTypes`,`States`,`Controlled`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '기본 텍스트'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'search',
    placeholder: '피처 및 레이어 검색...',
    clearable: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'password',
    showPasswordToggle: true,
    clearable: true,
    defaultValue: 'secretP@ssw0rd'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'date',
    placeholder: 'YYYY-MM-DD',
    defaultValue: '2026-11-01'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-64 flex-col gap-4">
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          Default
        </span>
        <TextField variant="default" defaultValue="일반 텍스트필드" />
      </div>
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          Search
        </span>
        <TextField variant="search" placeholder="검색어 입력..." />
      </div>
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          Date
        </span>
        <TextField variant="date" defaultValue="2026-11-01" />
      </div>
      <div className="rounded bg-neutral-100 p-2">
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          Ghost
        </span>
        <TextField variant="ghost" defaultValue="Ghost 텍스트필드" />
      </div>
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-64 flex-col gap-4">
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          Small (sm - 21px)
        </span>
        <TextField size="sm" defaultValue="Small 텍스트" clearable />
      </div>
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          Medium (md - 27px)
        </span>
        <TextField size="md" defaultValue="Medium 텍스트" clearable />
      </div>
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          Large (lg - 32px)
        </span>
        <TextField size="lg" defaultValue="Large 텍스트" clearable />
      </div>
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-64 flex-col gap-4">
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          정수 (10 ~ 100 클램핑)
        </span>
        <TextField inputType="integer" minValue={10} maxValue={100} defaultValue="50" placeholder="10에서 100 사이" />
      </div>
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          실수/좌표 (Double)
        </span>
        <TextField inputType="double" defaultValue="127.0276" placeholder="실수 또는 음수 좌표" />
      </div>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-64 flex-col gap-4">
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          ReadOnly
        </span>
        <TextField readOnly defaultValue="읽기 전용 데이터" />
      </div>
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          Disabled
        </span>
        <TextField disabled defaultValue="비활성화된 인풋" />
      </div>
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [text, setText] = useState('레이어 명칭');
    return <div className="flex w-64 flex-col items-center gap-3">
        <div className="w-full rounded border border-secondary-border bg-surface-muted px-3 py-1.5 text-xs">
          <strong>입력값:</strong> {text || '(빈 값)'}
        </div>
        <TextField {...args} value={text} clearable onChange={e => {
        setText(e.target.value);
        args.onChange?.(e);
      }} onClear={() => {
        setText('');
        args.onClear?.();
      }} />
      </div>;
  }
}`,...g.parameters?.docs?.source}}}})))()}v();export{g as Controlled,d as DateVariant,c as Default,m as NumberTypes,u as Password,l as Search,p as Sizes,h as States,f as Variants,_ as __namedExportsOrder,s as default};