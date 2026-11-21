import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-CA5FfF6H.js";import{a as r,i,n as a,o,r as s,t as c}from"./Calendar-CjhrLJf_.js";function l(e,t,n){return r(e,-t,n)}function u(){return(u=e((()=>{o()})))()}function d(e){let[t,n]=(0,g.useState)(new Date(2026,10,15));return(0,_.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,_.jsx)(c,{...e,value:t,onChange:t=>{e.onChange?.(t),n(t)}}),(0,_.jsx)(`button`,{type:`button`,className:`text-xs underline`,onClick:()=>n(s(new Date(2026,10,15),2)),children:`외부 날짜 점프`}),(0,_.jsxs)(`span`,{className:`text-xs text-muted-foreground`,children:[`선택된 날짜:`,` `,t instanceof Date?t.toLocaleDateString(`ko-KR`):`없음`]})]})}function f(e){let t=new Date(2026,10,10),[n,i]=(0,g.useState)([t,r(t,2)]);return(0,_.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,_.jsx)(c,{...e,mode:`multiple`,value:n,onChange:t=>{e.onChange?.(t),i(t)}}),(0,_.jsxs)(`span`,{className:`text-xs text-muted-foreground`,children:[`선택된 날짜 수:`,` `,Array.isArray(n)?`${n.length}개`:`0개`]})]})}function p(e){let[t,n]=(0,g.useState)(new Date);return(0,_.jsx)(c,{...e,value:t,onChange:t=>{e.onChange?.(t),n(t)}})}function m(e){let[t,n]=(0,g.useState)(new Date);return(0,_.jsx)(c,{...e,value:t,onChange:t=>{e.onChange?.(t),n(t)},today:{text:`현재일`},clear:{text:`초기화`},ok:{text:`적용하기`}})}function h(e){let[t,n]=(0,g.useState)(new Date(2026,10,15)),[r,i]=(0,g.useState)(new Date(2026,10,1)),a=l(new Date(2026,10,15),1);return(0,_.jsx)(c,{...e,month:r,onMonthChange:i,startMonth:new Date(2026,10,1),endMonth:new Date(2026,10,30),required:!0,value:t,onChange:t=>{e.onChange?.(t),n(t)},disabled:{before:a}})}var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{g=t(),o(),i(),u(),a(),_=n(),{expect:v,fn:y,screen:b,userEvent:x,within:S}=__STORYBOOK_MODULE_TEST__,C={title:`Components/Calendar`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],args:{mode:`single`,showOutsideDays:!0,yearRangeOffset:10,required:!1,today:!0,clear:!0,ok:!1,onChange:y(),onClose:y()},argTypes:{mode:{control:`radio`,options:[`single`,`multiple`],description:`날짜 선택 모드 (단일 선택 또는 다중 선택)`},value:{control:!1,description:`선택된 날짜 (제어 컴포넌트 모드: Date 또는 Date[])`},defaultValue:{control:!1,description:`초기 선택 날짜 (비제어 컴포넌트 모드)`},showOutsideDays:{control:`boolean`,description:`현재 월 바깥의 이전/다음 달 날짜 표시 여부`},today:{control:`boolean`,description:`하단 "오늘" 바로가기 버튼 표시 여부 또는 커스텀 텍스트 객체`},clear:{control:`boolean`,description:`하단 "지우기" 버튼 표시 여부 또는 커스텀 텍스트 객체`},ok:{control:`boolean`,description:`하단 "확인" 버튼 표시 여부 또는 커스텀 텍스트 객체`},required:{control:`boolean`,description:`선택 필수 여부 (true 시 지우기 동작 불가)`},yearRangeOffset:{control:`number`,description:`연도 셀렉트 박스에서 현재 연도 기준 앞뒤 표시 범위 (기본값: 10)`}}},w={render:e=>(0,_.jsx)(d,{...e}),args:{mode:`single`,today:!0,clear:!0,ok:!1},play:async({canvasElement:e,args:t})=>{let n=S(e);await x.click(n.getByTitle(`이전 달`)),await x.click(n.getByTitle(`다음 달`));let[r,i]=n.getAllByRole(`combobox`);await x.click(r);let a=await b.findByRole(`option`,{name:`2025년`});await x.click(a),await x.click(i);let o=await b.findByRole(`option`,{name:`3월`});await x.click(o);let s=n.getByRole(`button`,{name:/10일/});await x.click(s),await v(t.onChange).toHaveBeenCalled(),await x.click(n.getByRole(`button`,{name:`외부 날짜 점프`})),await x.click(n.getByRole(`button`,{name:`지우기`})),await v(n.getByText(/선택된 날짜:\s*없음/)).toBeInTheDocument(),await x.click(n.getByRole(`button`,{name:`오늘`}))}},T={render:e=>(0,_.jsx)(f,{...e}),args:{mode:`multiple`,today:!0,clear:!0},play:async({canvasElement:e,args:t})=>{let n=S(e),r=n.getByRole(`button`,{name:/15일/});await x.click(r),await v(t.onChange).toHaveBeenCalled();let i=n.getByRole(`button`,{name:`오늘`});await x.click(i),await x.click(i)}},E={render:e=>(0,_.jsx)(p,{...e}),args:{mode:`single`,today:!0,clear:!0,ok:!0},play:async({canvasElement:e,args:t})=>{let n=S(e);await x.click(n.getByRole(`button`,{name:`확인`})),await v(t.onClose).toHaveBeenCalledTimes(1)}},D={render:e=>(0,_.jsxs)(`div`,{className:`flex flex-wrap items-start gap-4`,children:[(0,_.jsx)(c,{mode:`single`,defaultValue:new Date(2026,10,12),today:!1,clear:!1,ok:!1,onChange:e.onChange}),(0,_.jsx)(c,{mode:`single`,defaultValue:new Date(2026,10,12),today:!0,clear:!0,onChange:e.onChange}),(0,_.jsx)(c,{mode:`multiple`,today:!0,clear:!0,onChange:e.onChange})]}),play:async({canvasElement:e,args:t})=>{let n=S(e),r=n.getAllByRole(`button`,{name:/20일/});await x.click(r[1]),await x.click(r[1]);let i=n.getAllByRole(`button`,{name:`오늘`});await x.click(i[0]),await x.click(i[1]);let a=n.getAllByRole(`button`,{name:`지우기`});await x.click(a[0]),await x.click(a[1]),await v(t.onChange).toHaveBeenCalled()}},O={render:e=>(0,_.jsx)(m,{...e}),args:{mode:`single`,today:{text:`현재일`},clear:{text:`초기화`},ok:{text:`적용하기`}}},k={render:e=>(0,_.jsx)(h,{...e}),args:{mode:`single`,today:!0,clear:!0},play:async({canvasElement:e})=>{let t=S(e);await v(t.getByTitle(`이전 달`)).toBeDisabled(),await v(t.getByTitle(`다음 달`)).toBeDisabled(),await v(t.getByRole(`button`,{name:`지우기`})).toBeDisabled()}},A=[`Default`,`Multiple`,`WithOkAction`,`UncontrolledAndNoFooter`,`CustomButtonLabels`,`DisabledDates`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <DefaultCalendarDemo {...args} />,
  args: {
    mode: 'single',
    today: true,
    clear: true,
    ok: false
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);

    // 1) 이전 달 / 다음 달 버튼 클릭
    await userEvent.click(canvas.getByTitle('이전 달'));
    await userEvent.click(canvas.getByTitle('다음 달'));

    // 2) 연도 선택 셀렉트 변경 (첫 번째 combobox: 2026년 -> 2025년)
    const [yearSelect, monthSelect] = canvas.getAllByRole('combobox');
    await userEvent.click(yearSelect);
    const yearOption = await screen.findByRole('option', {
      name: '2025년'
    });
    await userEvent.click(yearOption);

    // 3) 월 선택 셀렉트 변경 (두 번째 combobox: 11월 -> 3월)
    await userEvent.click(monthSelect);
    const monthOption = await screen.findByRole('option', {
      name: '3월'
    });
    await userEvent.click(monthOption);

    // 4) 날짜 셀(10일) 직접 클릭 -> handleSingleSelect 실행
    const dayCell = canvas.getByRole('button', {
      name: /10일/
    });
    await userEvent.click(dayCell);
    await expect(args.onChange).toHaveBeenCalled();

    // 5) 외부 value 변경 -> isControlled && valueKey !== prevValueKey 분기 실행
    await userEvent.click(canvas.getByRole('button', {
      name: '외부 날짜 점프'
    }));

    // 6) 지우기 -> 오늘 버튼 클릭
    await userEvent.click(canvas.getByRole('button', {
      name: '지우기'
    }));
    await expect(canvas.getByText(/선택된 날짜:\\s*없음/)).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: '오늘'
    }));
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <MultipleCalendarDemo {...args} />,
  args: {
    mode: 'multiple',
    today: true,
    clear: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);

    // 1) 날짜 셀(15일) 클릭 -> handleMultipleSelect 실행
    const dayCell = canvas.getByRole('button', {
      name: /15일/
    });
    await userEvent.click(dayCell);
    await expect(args.onChange).toHaveBeenCalled();

    // 2) 다중 모드 오늘 버튼 2회 클릭 (미포함 추가 분기 + 기포함 유지 분기)
    const todayBtn = canvas.getByRole('button', {
      name: '오늘'
    });
    await userEvent.click(todayBtn);
    await userEvent.click(todayBtn);
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <WithOkActionDemo {...args} />,
  args: {
    mode: 'single',
    today: true,
    clear: true,
    ok: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: '확인'
    }));
    await expect(args.onClose).toHaveBeenCalledTimes(1);
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap items-start gap-4">
      {/* 푸터 없음 */}
      <Calendar mode="single" defaultValue={new Date(2026, 10, 12)} today={false} clear={false} ok={false} onChange={args.onChange} />

      {/* 비제어 단일 모드: 선택 해제(day === undefined, Line 337) 및 오늘 버튼(Line 361) */}
      <Calendar mode="single" defaultValue={new Date(2026, 10, 12)} today clear onChange={args.onChange} />

      {/* 비제어 다중 모드: 초기값 없이 오늘 버튼 클릭(Lines 369, 372) */}
      <Calendar mode="multiple" today clear onChange={args.onChange} />
    </div>,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);

    // 1) 두 번째 캘린더(비제어 단일): 20일 선택 후 동일 날짜 재클릭 -> 선택 해제(undefined) 커버
    const day20Buttons = canvas.getAllByRole('button', {
      name: /20일/
    });
    await userEvent.click(day20Buttons[1]);
    await userEvent.click(day20Buttons[1]);

    // 2) 비제어 단일 및 비제어 다중 모드에서 각각 '오늘' 및 '지우기' 클릭
    const todayButtons = canvas.getAllByRole('button', {
      name: '오늘'
    });
    await userEvent.click(todayButtons[0]);
    await userEvent.click(todayButtons[1]);
    const clearButtons = canvas.getAllByRole('button', {
      name: '지우기'
    });
    await userEvent.click(clearButtons[0]);
    await userEvent.click(clearButtons[1]);
    await expect(args.onChange).toHaveBeenCalled();
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <CustomButtonLabelsDemo {...args} />,
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <DisabledDatesDemo {...args} />,
  args: {
    mode: 'single',
    today: true,
    clear: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // startMonth/endMonth로 인해 이전 달 / 다음 달 버튼이 비활성화된 상태 검증
    await expect(canvas.getByTitle('이전 달')).toBeDisabled();
    await expect(canvas.getByTitle('다음 달')).toBeDisabled();
    // required={true}로 인해 지우기 버튼 비활성화 검증
    await expect(canvas.getByRole('button', {
      name: '지우기'
    })).toBeDisabled();
  }
}`,...k.parameters?.docs?.source}}}})))()}j();export{O as CustomButtonLabels,w as Default,k as DisabledDates,T as Multiple,D as UncontrolledAndNoFooter,E as WithOkAction,A as __namedExportsOrder,C as default};