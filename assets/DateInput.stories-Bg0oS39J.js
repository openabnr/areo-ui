import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-BgbBaVxq.js";import{n as r,t as i}from"./DateInput-Bfwi6NeK.js";var a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{a=t(),r(),o=n(),s={title:`Components/DateInput`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{mode:{control:`inline-radio`,options:[`single`,`multiple`],description:`선택 모드 (단일 날짜 또는 콤마로 구분된 다중 날짜)`},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`],description:`입력창 크기`},value:{control:`text`,description:`입력 날짜 문자열 (YYYY-MM-DD 형식)`},defaultValue:{control:`text`,description:`초기 날짜 문자열`},readOnly:{control:`boolean`,description:`읽기 전용 모드 (직접 타이핑 차단 및 캘린더 팝업 선택만 허용)`},disabled:{control:`boolean`,description:`비활성화 여부`},required:{control:`boolean`,description:`필수 입력 여부 (캘린더의 비우기 방지)`},closeOnSelect:{control:`boolean`,description:`날짜 선택 시 자동으로 팝업 닫기 (단일 모드 전용)`},today:{control:`boolean`,description:`캘린더 하단 오늘 버튼 노출 여부`},clear:{control:`boolean`,description:`캘린더 하단 지우기 버튼 노출 여부`},ok:{control:`boolean`,description:`캘린더 하단 확인 버튼 노출 여부`},onChange:{action:`changed`,description:`날짜 변경 시 호출되는 콜백`}},args:{mode:`single`,size:`md`,readOnly:!1,disabled:!1,required:!1,closeOnSelect:!1,today:!0,clear:!0,ok:!1}},c={args:{defaultValue:`2026-11-01`}},l={args:{mode:`multiple`,defaultValue:`2026-11-01,2026-11-05,2026-11-12`,placeholder:`YYYY-MM-DD,YYYY-MM-DD`,className:`w-72`}},u={args:{closeOnSelect:!0,defaultValue:`2026-11-01`}},d={render:()=>(0,o.jsxs)(`div`,{className:`flex w-60 flex-col gap-4`,children:[(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Small (sm)`}),(0,o.jsx)(i,{size:`sm`,defaultValue:`2026-11-01`})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Medium (md)`}),(0,o.jsx)(i,{size:`md`,defaultValue:`2026-11-01`})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Large (lg)`}),(0,o.jsx)(i,{size:`lg`,defaultValue:`2026-11-01`})]})]})},f={render:function(e){let[t,n]=(0,a.useState)(`2026-11-01`);return(0,o.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,o.jsxs)(`div`,{className:`rounded border border-secondary-border bg-surface-muted px-3 py-1.5 text-xs`,children:[(0,o.jsx)(`strong`,{children:`현재 입력값:`}),` `,(e=>e.length>0?e:`선택된 날짜 없음`)(t)]}),(0,o.jsx)(i,{...e,value:t,onChange:t=>{n(t),e.onChange?.(t)}})]})}},p={render:()=>(0,o.jsxs)(`div`,{className:`flex w-60 flex-col gap-4`,children:[(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`읽기 전용 (팝업에서만 선택)`}),(0,o.jsx)(i,{readOnly:!0,defaultValue:`2026-11-01`})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`비활성화 (disabled)`}),(0,o.jsx)(i,{disabled:!0,defaultValue:`2026-11-01`})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`하단 확인(ok) 버튼 포함`}),(0,o.jsx)(i,{ok:{text:`선택완료`},defaultValue:`2026-11-01`})]})]})},m=[`Default`,`Multiple`,`CloseOnSelect`,`Sizes`,`Controlled`,`States`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '2026-11-01'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'multiple',
    defaultValue: '2026-11-01,2026-11-05,2026-11-12',
    placeholder: 'YYYY-MM-DD,YYYY-MM-DD',
    className: 'w-72'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    closeOnSelect: true,
    defaultValue: '2026-11-01'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-60 flex-col gap-4">\r
      <div>\r
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">\r
          Small (sm)\r
        </span>\r
        <DateInput size="sm" defaultValue="2026-11-01" />\r
      </div>\r
      <div>\r
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">\r
          Medium (md)\r
        </span>\r
        <DateInput size="md" defaultValue="2026-11-01" />\r
      </div>\r
      <div>\r
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">\r
          Large (lg)\r
        </span>\r
        <DateInput size="lg" defaultValue="2026-11-01" />\r
      </div>\r
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [dateValue, setDateValue] = useState<string>('2026-11-01');
    const getDisplayValue = (val: string) => {
      if (val.length > 0) {
        return val;
      }
      return '선택된 날짜 없음';
    };
    return <div className="flex flex-col items-center gap-4">\r
        <div className="rounded border border-secondary-border bg-surface-muted px-3 py-1.5 text-xs">\r
          <strong>현재 입력값:</strong> {getDisplayValue(dateValue)}\r
        </div>\r
        <DateInput {...args} value={dateValue} onChange={next => {
        setDateValue(next);
        args.onChange?.(next);
      }} />\r
      </div>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-60 flex-col gap-4">\r
      <div>\r
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">\r
          읽기 전용 (팝업에서만 선택)\r
        </span>\r
        <DateInput readOnly defaultValue="2026-11-01" />\r
      </div>\r
      <div>\r
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">\r
          비활성화 (disabled)\r
        </span>\r
        <DateInput disabled defaultValue="2026-11-01" />\r
      </div>\r
      <div>\r
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">\r
          하단 확인(ok) 버튼 포함\r
        </span>\r
        <DateInput ok={{
        text: '선택완료'
      }} defaultValue="2026-11-01" />\r
      </div>\r
    </div>
}`,...p.parameters?.docs?.source}}}})))()}h();export{u as CloseOnSelect,f as Controlled,c as Default,l as Multiple,d as Sizes,p as States,m as __namedExportsOrder,s as default};