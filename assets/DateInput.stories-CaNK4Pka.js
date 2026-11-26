import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-CfFMW0hA.js";import{n as r,t as i}from"./DateInput-Drrh96u9.js";function a(e){let[t,n]=(0,s.useState)(`2026-11-01`);return(0,c.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,c.jsxs)(`div`,{className:`rounded border border-secondary-border bg-surface-muted px-3 py-1.5 text-xs`,children:[(0,c.jsx)(`strong`,{children:`현재 입력값:`}),` `,t.length>0?t:`선택된 날짜 없음`]}),(0,c.jsx)(i,{...e,value:t,onChange:t=>{n(t),e.onChange?.(t)}})]})}function o(){let[e,t]=(0,s.useState)(!1);return(0,c.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,c.jsx)(i,{"aria-label":`동적 읽기전용 날짜`,readOnly:e,defaultValue:`2026-11-01`}),(0,c.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),children:`읽기전용 토글`})]})}var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{s=t(),r(),c=n(),{expect:l,fireEvent:u,fn:d,screen:f,userEvent:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/DateInput`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{mode:{control:`inline-radio`,options:[`single`,`multiple`],description:`선택 모드 (단일 날짜 또는 콤마로 구분된 다중 날짜)`},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`],description:`입력창 크기`},value:{control:`text`,description:`입력 날짜 문자열 (YYYY-MM-DD 형식)`},defaultValue:{control:`text`,description:`초기 날짜 문자열`},readOnly:{control:`boolean`,description:`읽기 전용 모드`},disabled:{control:`boolean`,description:`비활성화 여부`},required:{control:`boolean`,description:`필수 입력 여부 (캘린더의 비우기 방지)`},closeOnSelect:{control:`boolean`,description:`날짜 선택 시 자동으로 팝업 닫기 (단일 모드 전용)`},today:{control:`boolean`,description:`캘린더 하단 오늘 버튼 노출 여부`},clear:{control:`boolean`,description:`캘린더 하단 지우기 버튼 노출 여부`},ok:{control:`boolean`,description:`캘린더 하단 확인 버튼 노출 여부`}},args:{mode:`single`,size:`md`,readOnly:!1,disabled:!1,required:!1,closeOnSelect:!1,today:!0,clear:!0,ok:!1,onChange:d()}},g={args:{defaultValue:`2026-11-01`},render:e=>(0,c.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,c.jsx)(i,{...e}),(0,c.jsx)(`button`,{type:`button`,children:`외부 영역`})]}),play:async({canvasElement:e,args:t})=>{let n=m(e),r=n.getByRole(`textbox`);await p.click(r),await l(await f.findByTitle(`이전 달`)).toBeInTheDocument(),await p.keyboard(`{Tab}`),await p.keyboard(`{Escape}`),await p.click(r),await p.keyboard(`{Enter}`),await p.keyboard(`{ArrowDown}`);let i=await f.findByRole(`button`,{name:`지우기`});await p.click(i),await l(t.onChange).toHaveBeenLastCalledWith(``),globalThis.dispatchEvent(new FocusEvent(`focusin`)),await p.click(r),await p.clear(r),await p.type(r,`invalid-date, , 2026-99-99`),await p.click(n.getByRole(`button`,{name:`외부 영역`})),await l(t.onChange).toHaveBeenLastCalledWith(``),await p.type(r,`2026-11-15`),await u.blur(r)}},_={args:{mode:`multiple`,defaultValue:`2026-11-01,2026-11-05,2026-11-12`,placeholder:`YYYY-MM-DD,YYYY-MM-DD`,className:`w-72`},play:async({canvasElement:e,args:t})=>{let n=m(e).getByRole(`textbox`);await p.click(n);let r=await f.findByRole(`button`,{name:/20일/});await p.click(r),await l(t.onChange).toHaveBeenCalled()}},v={args:{closeOnSelect:!0,defaultValue:`2026-11-01`},render:e=>(0,c.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,c.jsx)(i,{...e}),(0,c.jsx)(`button`,{type:`button`,children:`외부 닫기`})]}),play:async({canvasElement:e,args:t})=>{let n=m(e),r=n.getByRole(`textbox`);await p.click(r);let i=await f.findByRole(`button`,{name:/10일/});await p.click(i),await l(t.onChange).toHaveBeenCalledWith(`2026-11-10`),await new Promise(e=>setTimeout(e,30)),await p.click(r);let a=await f.findByRole(`button`,{name:/12일/});await p.click(a),await u.pointerDown(n.getByRole(`button`,{name:`외부 닫기`}))}},y={render:()=>(0,c.jsxs)(`div`,{className:`flex w-60 flex-col gap-4`,children:[(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Small (sm)`}),(0,c.jsx)(i,{size:`sm`,defaultValue:`2026-11-01`})]}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Medium (md)`}),(0,c.jsx)(i,{size:`md`,defaultValue:`2026-11-01`})]}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Large (lg)`}),(0,c.jsx)(i,{size:`lg`,defaultValue:`2026-11-01`})]})]})},b={render:e=>(0,c.jsx)(a,{...e})},x={render:()=>(0,c.jsxs)(`div`,{className:`flex w-60 flex-col gap-4`,children:[(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`읽기 전용`}),(0,c.jsx)(i,{"aria-label":`읽기 전용 날짜`,readOnly:!0,defaultValue:`2026-11-01`})]}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`비활성화 (disabled)`}),(0,c.jsx)(i,{"aria-label":`비활성화 날짜`,disabled:!0,defaultValue:`2026-11-01`})]}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`하단 확인(ok) 버튼 포함`}),(0,c.jsx)(i,{"aria-label":`확인 버튼 날짜`,ok:{text:`선택완료`},defaultValue:`2026-11-01`})]}),(0,c.jsx)(o,{})]}),play:async({canvasElement:e})=>{let t=m(e),n=t.getByRole(`textbox`,{name:`읽기 전용 날짜`});await p.click(n),await u.keyDown(n,{key:`ArrowDown`});let r=t.getByRole(`textbox`,{name:`확인 버튼 날짜`});await p.click(r);let i=await f.findByRole(`button`,{name:`선택완료`});await p.click(i);let a=t.getByRole(`textbox`,{name:`동적 읽기전용 날짜`});await p.click(a);let o=document.querySelector(`[data-slot="popover-content"]`)?.querySelectorAll(`button, [tabindex]`)??[];o.forEach(e=>{e.setAttribute(`disabled`,`true`),e.setAttribute(`tabindex`,`-1`)}),await u.keyDown(a,{key:`Tab`}),o.forEach(e=>{e.removeAttribute(`disabled`),e.removeAttribute(`tabindex`)}),await p.click(t.getByRole(`button`,{name:`읽기전용 토글`})),await p.keyboard(`{Escape}`)}},S=[`Default`,`Multiple`,`CloseOnSelect`,`Sizes`,`Controlled`,`States`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '2026-11-01'
  },
  render: args => <div className="flex flex-col gap-2">
      <DateInput {...args} />
      <button type="button">외부 영역</button>
    </div>,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');

    // 1) 인풋 클릭 -> 팝오버 오픈 -> Tab 키로 팝오버 첫 버튼 포커스 진입 -> Escape 닫기
    await userEvent.click(input);
    await expect(await screen.findByTitle('이전 달')).toBeInTheDocument();
    await userEvent.keyboard('{Tab}');
    await userEvent.keyboard('{Escape}');

    // 2) ArrowDown 오픈 -> 캘린더 '지우기' 버튼 클릭(formatCalendarSelection(undefined) 커버) -> Enter 닫기
    await userEvent.click(input);
    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard('{ArrowDown}');
    const clearBtn = await screen.findByRole('button', {
      name: '지우기'
    });
    await userEvent.click(clearBtn);
    await expect(args.onChange).toHaveBeenLastCalledWith('');

    // 3) Window(비-Node) 대상 focusin 이벤트 발생 -> isInsideInputOrPopover의 !(target instanceof Node) 커버
    globalThis.dispatchEvent(new FocusEvent('focusin'));

    // 4) 잘못된 텍스트 입력 후 외부 영역 클릭 -> useOutsideDismiss & normalizeDateInputValue 분기
    await userEvent.click(input);
    await userEvent.clear(input);
    await userEvent.type(input, 'invalid-date, , 2026-99-99');
    await userEvent.click(canvas.getByRole('button', {
      name: '외부 영역'
    }));
    await expect(args.onChange).toHaveBeenLastCalledWith('');

    // 5) 닫힌 상태에서 유효 날짜 입력 후 blur 정규화
    await userEvent.type(input, '2026-11-15');
    await fireEvent.blur(input);
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'multiple',
    defaultValue: '2026-11-01,2026-11-05,2026-11-12',
    placeholder: 'YYYY-MM-DD,YYYY-MM-DD',
    className: 'w-72'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await userEvent.click(input);
    const dayBtn = await screen.findByRole('button', {
      name: /20일/
    });
    await userEvent.click(dayBtn);
    await expect(args.onChange).toHaveBeenCalled();
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    closeOnSelect: true,
    defaultValue: '2026-11-01'
  },
  render: args => <div className="flex flex-col gap-2">
      <DateInput {...args} />
      <button type="button">외부 닫기</button>
    </div>,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');

    // 1) 날짜 클릭 후 지연 닫기 완료 대기
    await userEvent.click(input);
    const day10 = await screen.findByRole('button', {
      name: /10일/
    });
    await userEvent.click(day10);
    await expect(args.onChange).toHaveBeenCalledWith('2026-11-10');
    await new Promise(resolve => setTimeout(resolve, 30));

    // 2) 날짜 클릭 직후(0ms 타이머 만료 전) 외부 클릭 -> useDeferredClose cancel() 분기 커버
    await userEvent.click(input);
    const day12 = await screen.findByRole('button', {
      name: /12일/
    });
    await userEvent.click(day12);
    await fireEvent.pointerDown(canvas.getByRole('button', {
      name: '외부 닫기'
    }));
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-60 flex-col gap-4">
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          Small (sm)
        </span>
        <DateInput size="sm" defaultValue="2026-11-01" />
      </div>
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          Medium (md)
        </span>
        <DateInput size="md" defaultValue="2026-11-01" />
      </div>
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          Large (lg)
        </span>
        <DateInput size="lg" defaultValue="2026-11-01" />
      </div>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledDateInputDemo {...args} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-60 flex-col gap-4">
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          읽기 전용
        </span>
        <DateInput aria-label="읽기 전용 날짜" readOnly defaultValue="2026-11-01" />
      </div>
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          비활성화 (disabled)
        </span>
        <DateInput aria-label="비활성화 날짜" disabled defaultValue="2026-11-01" />
      </div>
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          하단 확인(ok) 버튼 포함
        </span>
        <DateInput aria-label="확인 버튼 날짜" ok={{
        text: '선택완료'
      }} defaultValue="2026-11-01" />
      </div>
      <DynamicReadOnlyDemo />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 1) readOnly 차단 분기
    const readOnlyInput = canvas.getByRole('textbox', {
      name: '읽기 전용 날짜'
    });
    await userEvent.click(readOnlyInput);
    await fireEvent.keyDown(readOnlyInput, {
      key: 'ArrowDown'
    });

    // 2) ok 버튼 클릭 닫기 (closeFromButton) 분기
    const okInput = canvas.getByRole('textbox', {
      name: '확인 버튼 날짜'
    });
    await userEvent.click(okInput);
    const okBtn = await screen.findByRole('button', {
      name: '선택완료'
    });
    await userEvent.click(okBtn);

    // 3) 팝오버 내부 포커스 불가 상태에서 Tab 키 -> focusFirstPopoverElement의 !focusable 분기
    const dynamicInput = canvas.getByRole('textbox', {
      name: '동적 읽기전용 날짜'
    });
    await userEvent.click(dynamicInput);
    const popoverEl = document.querySelector<HTMLElement>('[data-slot="popover-content"]');
    const focusables = popoverEl?.querySelectorAll<HTMLElement>('button, [tabindex]') ?? [];
    focusables.forEach(el => {
      el.setAttribute('disabled', 'true');
      el.setAttribute('tabindex', '-1');
    });
    await fireEvent.keyDown(dynamicInput, {
      key: 'Tab'
    });
    focusables.forEach(el => {
      el.removeAttribute('disabled');
      el.removeAttribute('tabindex');
    });

    // 4) 팝오버가 열린 상태에서 동적으로 readOnly 전환 후 Escape -> handleOpenChange의 !isInteractive 분기
    await userEvent.click(canvas.getByRole('button', {
      name: '읽기전용 토글'
    }));
    await userEvent.keyboard('{Escape}');
  }
}`,...x.parameters?.docs?.source}}}})))()}C();export{v as CloseOnSelect,b as Controlled,g as Default,_ as Multiple,y as Sizes,x as States,S as __namedExportsOrder,h as default};