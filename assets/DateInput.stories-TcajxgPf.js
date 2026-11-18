import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-sFfd_MYY.js";import{n as r,t as i}from"./DateInput-D7FsRTKB.js";function a(e){let[t,n]=(0,o.useState)(`2026-11-01`);return(0,s.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,s.jsxs)(`div`,{className:`rounded border border-secondary-border bg-surface-muted px-3 py-1.5 text-xs`,children:[(0,s.jsx)(`strong`,{children:`현재 입력값:`}),` `,t.length>0?t:`선택된 날짜 없음`]}),(0,s.jsx)(i,{...e,value:t,onChange:t=>{n(t),e.onChange?.(t)}})]})}var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{o=t(),r(),s=n(),{expect:c,fireEvent:l,fn:u,screen:d,userEvent:f,within:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DateInput`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{mode:{control:`inline-radio`,options:[`single`,`multiple`],description:`선택 모드 (단일 날짜 또는 콤마로 구분된 다중 날짜)`},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`],description:`입력창 크기`},value:{control:`text`,description:`입력 날짜 문자열 (YYYY-MM-DD 형식)`},defaultValue:{control:`text`,description:`초기 날짜 문자열`},readOnly:{control:`boolean`,description:`읽기 전용 모드`},disabled:{control:`boolean`,description:`비활성화 여부`},required:{control:`boolean`,description:`필수 입력 여부 (캘린더의 비우기 방지)`},closeOnSelect:{control:`boolean`,description:`날짜 선택 시 자동으로 팝업 닫기 (단일 모드 전용)`},today:{control:`boolean`,description:`캘린더 하단 오늘 버튼 노출 여부`},clear:{control:`boolean`,description:`캘린더 하단 지우기 버튼 노출 여부`},ok:{control:`boolean`,description:`캘린더 하단 확인 버튼 노출 여부`}},args:{mode:`single`,size:`md`,readOnly:!1,disabled:!1,required:!1,closeOnSelect:!1,today:!0,clear:!0,ok:!1,onChange:u()}},h={args:{defaultValue:`2026-11-01`},render:e=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,s.jsx)(i,{...e}),(0,s.jsx)(`button`,{type:`button`,children:`외부 영역`})]}),play:async({canvasElement:e,args:t})=>{let n=p(e),r=n.getByRole(`textbox`);await f.click(r),await c(await d.findByTitle(`이전 달`)).toBeInTheDocument(),await f.keyboard(`{Tab}`),await f.keyboard(`{Escape}`),await f.click(r),await f.keyboard(`{Enter}`),await f.keyboard(`{ArrowDown}`),await f.clear(r),await f.type(r,`invalid-date, , 2026-99-99`),await f.click(n.getByRole(`button`,{name:`외부 영역`})),await c(t.onChange).toHaveBeenLastCalledWith(``),await f.type(r,`2026-11-15`),await l.blur(r)}},g={args:{mode:`multiple`,defaultValue:`2026-11-01,2026-11-05,2026-11-12`,placeholder:`YYYY-MM-DD,YYYY-MM-DD`,className:`w-72`},play:async({canvasElement:e,args:t})=>{let n=p(e).getByRole(`textbox`);await f.click(n);let r=await d.findByRole(`button`,{name:/20일/});await f.click(r),await c(t.onChange).toHaveBeenCalled()}},_={args:{closeOnSelect:!0,defaultValue:`2026-11-01`},play:async({canvasElement:e,args:t})=>{let n=p(e).getByRole(`textbox`);await f.click(n);let r=await d.findByRole(`button`,{name:/10일/});await f.click(r),await c(t.onChange).toHaveBeenCalledWith(`2026-11-10`),await new Promise(e=>setTimeout(e,30))}},v={render:()=>(0,s.jsxs)(`div`,{className:`flex w-60 flex-col gap-4`,children:[(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Small (sm)`}),(0,s.jsx)(i,{size:`sm`,defaultValue:`2026-11-01`})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Medium (md)`}),(0,s.jsx)(i,{size:`md`,defaultValue:`2026-11-01`})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Large (lg)`}),(0,s.jsx)(i,{size:`lg`,defaultValue:`2026-11-01`})]})]})},y={render:e=>(0,s.jsx)(a,{...e})},b={render:()=>(0,s.jsxs)(`div`,{className:`flex w-60 flex-col gap-4`,children:[(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`읽기 전용`}),(0,s.jsx)(i,{"aria-label":`읽기 전용 날짜`,readOnly:!0,defaultValue:`2026-11-01`})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`비활성화 (disabled)`}),(0,s.jsx)(i,{"aria-label":`비활성화 날짜`,disabled:!0,defaultValue:`2026-11-01`})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`하단 확인(ok) 버튼 포함`}),(0,s.jsx)(i,{"aria-label":`확인 버튼 날짜`,ok:{text:`선택완료`},defaultValue:`2026-11-01`})]})]}),play:async({canvasElement:e})=>{let t=p(e),n=t.getByRole(`textbox`,{name:`읽기 전용 날짜`});await f.click(n),await l.keyDown(n,{key:`ArrowDown`});let r=t.getByRole(`textbox`,{name:`확인 버튼 날짜`});await f.click(r);let i=await d.findByRole(`button`,{name:`선택완료`});await f.click(i)}},x=[`Default`,`Multiple`,`CloseOnSelect`,`Sizes`,`Controlled`,`States`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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

    // 2) ArrowDown 오픈 -> Enter 닫기
    await userEvent.click(input);
    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard('{ArrowDown}');

    // 3) 잘못된 텍스트 입력 후 외부 영역 클릭 -> useOutsideDismiss & normalizeDateInputValue 분기
    await userEvent.clear(input);
    await userEvent.type(input, 'invalid-date, , 2026-99-99');
    await userEvent.click(canvas.getByRole('button', {
      name: '외부 영역'
    }));
    await expect(args.onChange).toHaveBeenLastCalledWith('');

    // 4) 닫힌 상태에서 유효 날짜 입력 후 blur 정규화
    await userEvent.type(input, '2026-11-15');
    await fireEvent.blur(input);
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    closeOnSelect: true,
    defaultValue: '2026-11-01'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await userEvent.click(input);
    const dayBtn = await screen.findByRole('button', {
      name: /10일/
    });
    await userEvent.click(dayBtn);
    await expect(args.onChange).toHaveBeenCalledWith('2026-11-10');

    // scheduleClose의 setTimeout(..., 0) 실행 대기
    await new Promise(resolve => setTimeout(resolve, 30));
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledDateInputDemo {...args} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
  }
}`,...b.parameters?.docs?.source}}}})))()}S();export{_ as CloseOnSelect,y as Controlled,h as Default,g as Multiple,v as Sizes,b as States,x as __namedExportsOrder,m as default};