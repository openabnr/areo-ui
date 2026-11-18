import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-sFfd_MYY.js";import{n as r,t as i}from"./TextField-DrAZj0qU.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{a=t(),r(),o=n(),{expect:s,fireEvent:c,fn:l,userEvent:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/TextField`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`inline-radio`,options:[`default`,`search`,`date`,`ghost`],description:`인풋 스타일 변형`},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`],description:`인풋 높이 및 폰트 크기`},inputType:{control:`inline-radio`,options:[`string`,`integer`,`double`],description:`입력 데이터 타입 제한`},clearable:{control:`boolean`,description:`내용 지우기(X) 버튼 표시 여부`},showPasswordToggle:{control:`boolean`,description:`비밀번호 보이기/숨기기 토글 버튼 표시 여부 (type="password" 전용)`},disabled:{control:`boolean`,description:`비활성화 여부`},readOnly:{control:`boolean`,description:`읽기 전용 여부`},length:{control:`number`,description:`최대 허용 바이트(Byte) 수`},minValue:{control:`number`,description:`정수 입력 시 최소값 (블러 시 클램핑)`},maxValue:{control:`number`,description:`정수 입력 시 최대값 (블러 시 클램핑)`},placeholder:{control:`text`,description:`플레이스홀더 텍스트`}},args:{variant:`default`,size:`md`,inputType:`string`,clearable:!1,showPasswordToggle:!1,disabled:!1,readOnly:!1,placeholder:`텍스트를 입력하세요`,className:`w-64`,onChange:l(),onClear:l(),onEnterKeyDown:l()}},p={args:{defaultValue:`기본 텍스트`},play:async({canvasElement:e,args:t})=>{let n=d(e).getByRole(`textbox`);await u.clear(n),await u.type(n,`공간정보 레이어`),await s(n).toHaveValue(`공간정보 레이어`),await s(t.onChange).toHaveBeenCalled()}},m={args:{variant:`search`,placeholder:`피처 및 레이어 검색...`,clearable:!0},play:async({canvasElement:e,args:t})=>{let n=d(e),r=n.getByRole(`textbox`);await u.click(r),await u.type(r,`도로망{Enter}`),await s(t.onEnterKeyDown).toHaveBeenCalledTimes(1);let i=n.getByRole(`button`,{name:`입력 내용 지우기`});await u.click(i),await s(r).toHaveValue(``),await s(t.onClear).toHaveBeenCalledTimes(1),await u.tab()}},h={args:{type:`password`,size:`sm`,showPasswordToggle:!0,clearable:!0,defaultValue:`secretP@ssw0rd`},play:async({canvasElement:e})=>{let t=d(e),n=t.getByDisplayValue(`secretP@ssw0rd`);await u.click(n),await s(n).toHaveAttribute(`type`,`password`);let r=t.getByRole(`button`,{name:`비밀번호 보기`});await u.click(r),await s(n).toHaveAttribute(`type`,`text`);let i=t.getByRole(`button`,{name:`비밀번호 숨기기`});await u.click(i),await s(n).toHaveAttribute(`type`,`password`)}},g={args:{variant:`date`,placeholder:`YYYY-MM-DD`,defaultValue:`2026-11-01`}},_={render:()=>(0,o.jsxs)(`div`,{className:`flex w-64 flex-col gap-4`,children:[(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Default`}),(0,o.jsx)(i,{variant:`default`,defaultValue:`일반 텍스트필드`})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Search`}),(0,o.jsx)(i,{variant:`search`,placeholder:`검색어 입력...`})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Date`}),(0,o.jsx)(i,{variant:`date`,defaultValue:`2026-11-01`})]}),(0,o.jsxs)(`div`,{className:`rounded bg-neutral-100 p-2`,children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Ghost`}),(0,o.jsx)(i,{variant:`ghost`,defaultValue:`Ghost 텍스트필드`})]})]})},v={render:()=>(0,o.jsxs)(`div`,{className:`flex w-64 flex-col gap-4`,children:[(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Small (sm - 21px)`}),(0,o.jsx)(i,{size:`sm`,defaultValue:`Small 텍스트`,clearable:!0})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Medium (md - 27px)`}),(0,o.jsx)(i,{size:`md`,defaultValue:`Medium 텍스트`,clearable:!0})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Large (lg - 32px)`}),(0,o.jsx)(i,{size:`lg`,defaultValue:`Large 텍스트`,clearable:!0})]})]})},y={render:()=>(0,o.jsxs)(`div`,{className:`flex w-64 flex-col gap-4`,children:[(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`정수 (10 ~ 100 클램핑)`}),(0,o.jsx)(i,{inputType:`integer`,minValue:10,maxValue:100,defaultValue:`50`,placeholder:`10에서 100 사이`})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`실수/좌표 (Double)`}),(0,o.jsx)(i,{inputType:`double`,defaultValue:`127.0276`,placeholder:`실수 또는 음수 좌표`})]})]}),play:async({canvasElement:e})=>{let[t,n]=d(e).getAllByRole(`textbox`);await u.clear(t),await u.type(t,`abc500`),await s(t).toHaveValue(`500`),await u.tab(),await s(t).toHaveValue(`100`),await u.clear(t),await u.type(t,`-`),await u.tab(),await s(t).toHaveValue(``),await u.clear(n),await u.type(n,`-37.50`),await u.tab(),await s(n).toHaveValue(`-37.5`)}},b={args:{length:10,placeholder:`최대 10바이트 입력`},play:async({canvasElement:e})=>{let t=d(e).getByRole(`textbox`);await u.type(t,`123456789012`),await s(t).toHaveValue(`1234567890`),await u.clear(t),await c.compositionStart(t),await c.change(t,{target:{value:`가나다라마바사`}}),await c.compositionEnd(t),await s(t.value.length).toBeLessThanOrEqual(5)}},x={render:()=>(0,o.jsxs)(`div`,{className:`flex w-64 flex-col gap-4`,children:[(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`ReadOnly`}),(0,o.jsx)(i,{readOnly:!0,defaultValue:`읽기 전용 데이터`})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Disabled`}),(0,o.jsx)(i,{disabled:!0,defaultValue:`비활성화된 인풋`})]})]})},S={render:function(e){let[t,n]=(0,a.useState)(`레이어 명칭`);return(0,o.jsxs)(`div`,{className:`flex w-64 flex-col items-center gap-3`,children:[(0,o.jsxs)(`div`,{className:`w-full rounded border border-secondary-border bg-surface-muted px-3 py-1.5 text-xs`,children:[(0,o.jsx)(`strong`,{children:`입력값:`}),` `,t||`(빈 값)`]}),(0,o.jsx)(i,{...e,value:t,clearable:!0,onChange:t=>{n(t.target.value),e.onChange?.(t)},onClear:()=>{n(``),e.onClear?.()}})]})},play:async({canvasElement:e,args:t})=>{let n=d(e),r=n.getByRole(`textbox`);await u.click(r);let i=n.getByRole(`button`,{name:`입력 내용 지우기`});await u.click(i),await s(n.getByText(`(빈 값)`)).toBeInTheDocument(),await s(t.onClear).toHaveBeenCalledTimes(1)}},C=[`Default`,`Search`,`Password`,`DateVariant`,`Variants`,`Sizes`,`NumberTypes`,`ByteLimit`,`States`,`Controlled`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '기본 텍스트'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole<HTMLInputElement>('textbox');
    await userEvent.clear(input);
    await userEvent.type(input, '공간정보 레이어');
    await expect(input).toHaveValue('공간정보 레이어');
    await expect(args.onChange).toHaveBeenCalled();
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'search',
    placeholder: '피처 및 레이어 검색...',
    clearable: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole<HTMLInputElement>('textbox');
    await userEvent.click(input);
    await userEvent.type(input, '도로망{Enter}');
    await expect(args.onEnterKeyDown).toHaveBeenCalledTimes(1);
    const clearBtn = canvas.getByRole('button', {
      name: '입력 내용 지우기'
    });
    await userEvent.click(clearBtn);
    await expect(input).toHaveValue('');
    await expect(args.onClear).toHaveBeenCalledTimes(1);
    await userEvent.tab();
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'password',
    size: 'sm',
    showPasswordToggle: true,
    clearable: true,
    defaultValue: 'secretP@ssw0rd'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByDisplayValue<HTMLInputElement>('secretP@ssw0rd');
    await userEvent.click(input);
    await expect(input).toHaveAttribute('type', 'password');
    const showBtn = canvas.getByRole('button', {
      name: '비밀번호 보기'
    });
    await userEvent.click(showBtn);
    await expect(input).toHaveAttribute('type', 'text');
    const hideBtn = canvas.getByRole('button', {
      name: '비밀번호 숨기기'
    });
    await userEvent.click(hideBtn);
    await expect(input).toHaveAttribute('type', 'password');
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'date',
    placeholder: 'YYYY-MM-DD',
    defaultValue: '2026-11-01'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const [intInput, doubleInput] = canvas.getAllByRole<HTMLInputElement>('textbox');

    // 1. integer: 비숫자 무시 + 최대값 클램핑(500 -> 100)
    await userEvent.clear(intInput);
    await userEvent.type(intInput, 'abc500');
    await expect(intInput).toHaveValue('500');
    await userEvent.tab();
    await expect(intInput).toHaveValue('100');

    // 2. integer: 미완성 '-' 입력 후 blur -> '' 초기화
    await userEvent.clear(intInput);
    await userEvent.type(intInput, '-');
    await userEvent.tab();
    await expect(intInput).toHaveValue('');

    // 3. double: 음수 소수점 입력 및 blur 정규화
    await userEvent.clear(doubleInput);
    await userEvent.type(doubleInput, '-37.50');
    await userEvent.tab();
    await expect(doubleInput).toHaveValue('-37.5');
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    length: 10,
    placeholder: '최대 10바이트 입력'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole<HTMLInputElement>('textbox');

    // 1. 일반 입력으로 10바이트 초과 -> truncateByBytes 및 동일 값 조기 반환
    await userEvent.type(input, '123456789012');
    await expect(input).toHaveValue('1234567890');

    // 2. IME 조합 완료 시 바이트 초과 절삭
    await userEvent.clear(input);
    await fireEvent.compositionStart(input);
    await fireEvent.change(input, {
      target: {
        value: '가나다라마바사'
      }
    });
    await fireEvent.compositionEnd(input);
    await expect(input.value.length).toBeLessThanOrEqual(5);
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole<HTMLInputElement>('textbox');
    await userEvent.click(input);
    const clearBtn = canvas.getByRole('button', {
      name: '입력 내용 지우기'
    });
    await userEvent.click(clearBtn);
    await expect(canvas.getByText('(빈 값)')).toBeInTheDocument();
    await expect(args.onClear).toHaveBeenCalledTimes(1);
  }
}`,...S.parameters?.docs?.source}}}})))()}w();export{b as ByteLimit,S as Controlled,g as DateVariant,p as Default,y as NumberTypes,h as Password,m as Search,v as Sizes,x as States,_ as Variants,C as __namedExportsOrder,f as default};