import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-BgbBaVxq.js";import{i as r,n as i,r as a,t as o}from"./Calendar-CrvY4uoA.js";function s(e,t,n){return a(e,-t,n)}function c(){return(c=e((()=>{r()})))()}var l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{l=t(),r(),c(),i(),u=n(),d={title:`Components/Calendar`,component:o,parameters:{layout:`centered`,docs:{description:{component:"`react-day-picker`와 `date-fns` 기반의 캘린더 컴포넌트입니다. 단일/다중 날짜 선택, 빠른 연도/월 전환 셀렉터, 커스텀 하단 푸터(오늘/지우기/확인) 액션을 제공합니다."}}},tags:[`autodocs`],args:{mode:`single`,showOutsideDays:!0,yearRangeOffset:10,required:!1,today:!0,clear:!0,ok:!1},argTypes:{mode:{control:`radio`,options:[`single`,`multiple`],description:`날짜 선택 모드 (단일 선택 또는 다중 선택)`},value:{control:!1,description:`선택된 날짜 (제어 컴포넌트 모드: Date 또는 Date[])`},defaultValue:{control:!1,description:`초기 선택 날짜 (비제어 컴포넌트 모드)`},showOutsideDays:{control:`boolean`,description:`현재 월 바깥의 이전/다음 달 날짜 표시 여부`},today:{control:`boolean`,description:`하단 "오늘" 바로가기 버튼 표시 여부 또는 커스텀 텍스트 객체`},clear:{control:`boolean`,description:`하단 "지우기" 버튼 표시 여부 또는 커스텀 텍스트 객체`},ok:{control:`boolean`,description:`하단 "확인" 버튼 표시 여부 또는 커스텀 텍스트 객체`},required:{control:`boolean`,description:`선택 필수 여부 (true 시 지우기 동작 불가)`},yearRangeOffset:{control:`number`,description:`연도 셀렉트 박스에서 현재 연도 기준 앞뒤 표시 범위 (기본값: 10)`},onChange:{action:`changed`,description:`선택 날짜 변경 시 호출되는 이벤트 핸들러`},onClose:{action:`closed`,description:`확인 버튼 클릭 등 닫기 트리거 시 호출`}}},f={parameters:{docs:{description:{story:`하나의 날짜를 선택하는 기본 형태입니다. 상단 헤더의 연도/월 셀렉트를 통해 ±10년 범위를 빠르게 이동할 수 있으며, 하단 "오늘"과 "지우기" 버튼을 지원합니다.`}}},render:e=>{let[t,n]=(0,l.useState)(new Date);return(0,u.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,u.jsx)(o,{...e,value:t,onChange:t=>{e.onChange?.(t),n(t)}}),(0,u.jsxs)(`span`,{className:`text-xs text-muted-foreground`,children:[`선택된 날짜:`,` `,t instanceof Date?t.toLocaleDateString(`ko-KR`):`없음`]})]})},args:{mode:`single`,today:!0,clear:!0,ok:!1}},p={parameters:{docs:{description:{story:'`mode="multiple"` 설정 시 여러 날짜를 동시에 선택할 수 있습니다. 이미 선택된 날짜를 다시 클릭하면 선택이 해제됩니다.'}}},render:e=>{let t=new Date,[n,r]=(0,l.useState)([t,a(t,2),a(t,5)]);return(0,u.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,u.jsx)(o,{...e,mode:`multiple`,value:n,onChange:t=>{e.onChange?.(t),r(t)}}),(0,u.jsxs)(`span`,{className:`text-xs text-muted-foreground`,children:[`선택된 날짜 수:`,` `,Array.isArray(n)?`${n.length}개`:`0개`]})]})},args:{mode:`multiple`,today:!0,clear:!0}},m={parameters:{docs:{description:{story:'날짜 선택 팝업이나 다이얼로그 내부에서 사용할 때 적합한 형태로, `ok={true}`를 설정하여 "확인" 버튼과 `onClose` 콜백을 연동합니다.'}}},render:e=>{let[t,n]=(0,l.useState)(new Date);return(0,u.jsx)(`div`,{className:`flex flex-col items-center gap-3`,children:(0,u.jsx)(o,{...e,value:t,onChange:t=>{e.onChange?.(t),n(t)},onClose:()=>{e.onClose?.(),alert(`선택 완료: ${t instanceof Date?t.toLocaleDateString(`ko-KR`):`없음`}`)}})})},args:{mode:`single`,today:!0,clear:!0,ok:!0}},h={parameters:{docs:{description:{story:'`today`, `clear`, `ok` prop에 `{ text: "문구" }` 객체를 전달하여 버튼 라벨을 원하는 텍스트로 자유롭게 커스텀할 수 있습니다.'}}},render:e=>{let[t,n]=(0,l.useState)(new Date);return(0,u.jsx)(o,{...e,value:t,onChange:t=>{e.onChange?.(t),n(t)},today:{text:`현재일`},clear:{text:`초기화`},ok:{text:`적용하기`}})},args:{mode:`single`,today:{text:`현재일`},clear:{text:`초기화`},ok:{text:`적용하기`}}},g={parameters:{docs:{description:{story:"어제 이전의 과거 날짜 또는 특정 날짜 범위를 비활성화(`disabled`)하여 선택하지 못하도록 제한할 수 있습니다."}}},render:e=>{let[t,n]=(0,l.useState)(new Date),r=s(new Date,1);return(0,u.jsx)(o,{...e,value:t,onChange:t=>{e.onChange?.(t),n(t)},disabled:{before:r}})},args:{mode:`single`,today:!0,clear:!0}},_=[`Default`,`Multiple`,`WithOkAction`,`CustomButtonLabels`,`DisabledDates`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '하나의 날짜를 선택하는 기본 형태입니다. 상단 헤더의 연도/월 셀렉트를 통해 ±10년 범위를 빠르게 이동할 수 있으며, 하단 "오늘"과 "지우기" 버튼을 지원합니다.'
      }
    }
  },
  render: (args: CalendarProps) => {
    const [selected, setSelected] = useState<CalendarProps['value']>(new Date());
    return <div className="flex flex-col items-center gap-3">\r
        <Calendar {...args} value={selected} onChange={val => {
        args.onChange?.(val);
        setSelected(val);
      }} />\r
        <span className="text-xs text-muted-foreground">\r
          선택된 날짜:{' '}\r
          {selected instanceof Date ? selected.toLocaleDateString('ko-KR') : '없음'}\r
        </span>\r
      </div>;
  },
  args: {
    mode: 'single',
    today: true,
    clear: true,
    ok: false
  }
}`,...f.parameters?.docs?.source},description:{story:`기본 단일 선택(Single) 캘린더`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`mode="multiple"\` 설정 시 여러 날짜를 동시에 선택할 수 있습니다. 이미 선택된 날짜를 다시 클릭하면 선택이 해제됩니다.'
      }
    }
  },
  render: (args: CalendarProps) => {
    const today = new Date();
    const [selected, setSelected] = useState<CalendarProps['value']>([today, addDays(today, 2), addDays(today, 5)]);
    return <div className="flex flex-col items-center gap-3">\r
        <Calendar {...args} mode="multiple" value={selected} onChange={val => {
        args.onChange?.(val);
        setSelected(val);
      }} />\r
        <span className="text-xs text-muted-foreground">\r
          선택된 날짜 수:{' '}\r
          {Array.isArray(selected) ? \`\${selected.length}개\` : '0개'}\r
        </span>\r
      </div>;
  },
  args: {
    mode: 'multiple',
    today: true,
    clear: true
  }
}`,...p.parameters?.docs?.source},description:{story:`다중 선택(Multiple) 캘린더`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '날짜 선택 팝업이나 다이얼로그 내부에서 사용할 때 적합한 형태로, \`ok={true}\`를 설정하여 "확인" 버튼과 \`onClose\` 콜백을 연동합니다.'
      }
    }
  },
  render: (args: CalendarProps) => {
    const [selected, setSelected] = useState<CalendarProps['value']>(new Date());
    return <div className="flex flex-col items-center gap-3">\r
        <Calendar {...args} value={selected} onChange={val => {
        args.onChange?.(val);
        setSelected(val);
      }} onClose={() => {
        args.onClose?.();
        alert(\`선택 완료: \${selected instanceof Date ? selected.toLocaleDateString('ko-KR') : '없음'}\`);
      }} />\r
      </div>;
  },
  args: {
    mode: 'single',
    today: true,
    clear: true,
    ok: true
  }
}`,...m.parameters?.docs?.source},description:{story:`팝오버/다이얼로그 확인(OK) 액션 포함 캘린더`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`today\`, \`clear\`, \`ok\` prop에 \`{ text: "문구" }\` 객체를 전달하여 버튼 라벨을 원하는 텍스트로 자유롭게 커스텀할 수 있습니다.'
      }
    }
  },
  render: (args: CalendarProps) => {
    const [selected, setSelected] = useState<Date | Date[] | undefined>(new Date());
    return <Calendar {...args} value={selected} onChange={val => {
      args.onChange?.(val);
      setSelected(val);
    }} today={{
      text: '현재일'
    }} clear={{
      text: '초기화'
    }} ok={{
      text: '적용하기'
    }} />;
  },
  args: {
    mode: 'single',
    today: {
      text: '현재일'
    },
    clear: {
      text: '초기화'
    },
    ok: {
      text: '적용하기'
    }
  }
}`,...h.parameters?.docs?.source},description:{story:`커스텀 버튼 라벨 (ButtonText 객체)`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '어제 이전의 과거 날짜 또는 특정 날짜 범위를 비활성화(\`disabled\`)하여 선택하지 못하도록 제한할 수 있습니다.'
      }
    }
  },
  render: (args: CalendarProps) => {
    const [selected, setSelected] = useState<Date | Date[] | undefined>(new Date());
    const yesterday = subDays(new Date(), 1);
    return <Calendar {...args} value={selected} onChange={val => {
      args.onChange?.(val);
      setSelected(val);
    }} disabled={{
      before: yesterday
    }} />;
  },
  args: {
    mode: 'single',
    today: true,
    clear: true
  }
}`,...g.parameters?.docs?.source},description:{story:`특정 날짜 비활성화 (disabled)`,...g.parameters?.docs?.description}}}})))()}v();export{h as CustomButtonLabels,f as Default,g as DisabledDates,p as Multiple,m as WithOkAction,_ as __namedExportsOrder,d as default};