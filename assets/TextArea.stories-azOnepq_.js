import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-CfFMW0hA.js";import{l as r,r as i,t as a}from"./utils-CXswP1E2.js";import{n as o,t as s}from"./dist-DxSsHBlF.js";function c(e,t){if(t<=0)return``;let n=``,r=0;for(let a of e){let e=i(a);if(r+e>t)break;r+=e,n+=a}return n}function l(e,t){Object.getOwnPropertyDescriptor(globalThis.HTMLTextAreaElement.prototype,`value`)?.set?.call(e,t),e.dispatchEvent(new Event(`input`,{bubbles:!0}))}function u({size:e=`md`,variant:t=`default`,value:n,defaultValue:r,className:o,length:s,onChange:u,onCompositionStart:m,onCompositionEnd:h,...g}){let _=n!==void 0,[v,y]=(0,d.useState)(r??``),b=(0,d.useRef)(!1),x=_?n:v,S=s!==void 0&&s>0;return(0,f.jsx)(`textarea`,{className:a(p({variant:t,size:e}),o),value:x,onChange:e=>{let t=b.current||e.nativeEvent instanceof InputEvent&&e.nativeEvent.isComposing,n=e.target.value;if(!t&&S&&i(n)>s){if(n=c(n,s),n===String(x))return;e.target.value=n}_||y(n),u?.(e)},onCompositionStart:e=>{b.current=!0,m?.(e)},onCompositionEnd:e=>{if(b.current=!1,h?.(e),S&&i(e.currentTarget.value)>s){let t=c(e.currentTarget.value,s);l(e.currentTarget,t)}},spellCheck:!1,autoComplete:`off`,...g})}var d,f,p;function m(){return(m=e((()=>{d=t(),o(),r(),f=n(),p=s([`font-sans`,`box-border w-full resize-none overflow-y-auto rounded-none border text-xs font-normal shadow-none outline-none motion-safe:transition-colors`,`border-secondary-border bg-white px-1.75 py-1 text-secondary-foreground`,`placeholder:text-text-disabled`,`not-disabled:not-read-only:hover:border-secondary-border-hover not-disabled:not-read-only:focus:border-primary not-disabled:not-read-only:active:border-primary`,`read-only:not-disabled:cursor-default read-only:not-disabled:border-secondary-border read-only:not-disabled:text-muted-foreground read-only:not-disabled:focus:border-secondary-border-active`,`disabled:cursor-not-allowed disabled:border-border-disabled disabled:bg-surface-muted/50 disabled:text-text-disabled`],{variants:{variant:{default:``,ghost:[`border-transparent bg-transparent shadow-none`,`not-disabled:not-read-only:hover:border-transparent not-disabled:not-read-only:focus:border-transparent not-disabled:not-read-only:active:border-transparent`,`read-only:not-disabled:border-transparent read-only:not-disabled:focus:border-transparent`,`disabled:border-transparent disabled:bg-transparent`]},size:{sm:`min-h-5.25 py-0.5 leading-3.75`,md:`min-h-6.75 py-1 leading-4.25`,lg:`min-h-8 py-1.5 leading-4.5`}},defaultVariants:{variant:`default`,size:`md`}}),u.__docgenInfo={description:``,methods:[],displayName:`TextArea`,props:{size:{defaultValue:{value:`'md'`,computed:!1},required:!1},variant:{defaultValue:{value:`'default'`,computed:!1},required:!1}}}})))()}var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{h=t(),m(),g=n(),{expect:_,fireEvent:v,fn:y,userEvent:b,within:x}=__STORYBOOK_MODULE_TEST__,S={title:`Components/TextArea`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`inline-radio`,options:[`default`,`ghost`],description:`테두리 및 배경 테마 스타일`},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`],description:`높이 및 텍스트 행간 크기`},disabled:{control:`boolean`,description:`비활성화 여부`},readOnly:{control:`boolean`,description:`읽기 전용 여부`},length:{control:`number`,description:`최대 허용 바이트(Byte) 수`},placeholder:{control:`text`,description:`플레이스홀더 텍스트`},rows:{control:`number`,description:`기본 노출 행 수`}},args:{variant:`default`,size:`md`,disabled:!1,readOnly:!1,placeholder:`내용을 입력해주세요.`,rows:4,className:`w-80`,onChange:y()}},C={args:{defaultValue:`기본 텍스트 내용입니다.`},play:async({canvasElement:e,args:t})=>{let n=x(e).getByRole(`textbox`);await b.clear(n),await b.type(n,`EPSG:5179 좌표계 설명`),await _(n).toHaveValue(`EPSG:5179 좌표계 설명`),await _(t.onChange).toHaveBeenCalled(),await v.change(n,{target:{value:`변경된 텍스트`}}),(Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,`value`)?.set)?.call(n,`조합 중 텍스트`),n.dispatchEvent(new InputEvent(`input`,{bubbles:!0,isComposing:!0}))}},w={render:()=>(0,g.jsxs)(`div`,{className:`flex w-80 flex-col gap-4`,children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Small (sm)`}),(0,g.jsx)(u,{size:`sm`,rows:3,placeholder:`Small 크기 텍스트영역`})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Medium (md - 기본값)`}),(0,g.jsx)(u,{size:`md`,rows:3,placeholder:`Medium 크기 텍스트영역`})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Large (lg)`}),(0,g.jsx)(u,{size:`lg`,rows:3,placeholder:`Large 크기 텍스트영역`})]})]})},T={render:()=>(0,g.jsxs)(`div`,{className:`flex w-80 flex-col gap-4`,children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Default (테두리 및 흰색 배경)`}),(0,g.jsx)(u,{variant:`default`,rows:3,defaultValue:`테두리가 있는 기본 형태입니다.`})]}),(0,g.jsxs)(`div`,{className:`rounded bg-neutral-100 p-2`,children:[(0,g.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Ghost (배경/테두리 투명)`}),(0,g.jsx)(u,{variant:`ghost`,rows:3,defaultValue:`투명한 배경과 테두리를 가진 Ghost 형태입니다.`})]})]})},E={render:()=>(0,g.jsxs)(`div`,{className:`flex w-80 flex-col gap-4`,children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`ReadOnly (읽기 전용)`}),(0,g.jsx)(u,{readOnly:!0,rows:3,defaultValue:`이 텍스트는 수정할 수 없는 읽기 전용 상태입니다.`})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Disabled (비활성화)`}),(0,g.jsx)(u,{disabled:!0,rows:3,defaultValue:`비활성화되어 입력할 수 없습니다.`})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Length 0 (바이트 제한 비활성 분기)`}),(0,g.jsx)(u,{length:0,rows:2,placeholder:`length=0 테스트`})]})]})},D={render:function(){let[e,t]=(0,h.useState)(``);return(0,g.jsxs)(`div`,{className:`flex w-80 flex-col gap-1.5`,children:[(0,g.jsx)(u,{length:20,rows:3,value:e,onChange:e=>t(e.target.value),placeholder:`최대 20바이트까지만 입력 가능합니다.`}),(0,g.jsx)(`div`,{className:`flex justify-end text-2xs text-neutral-500`,children:(0,g.jsxs)(`span`,{children:[`최대 제한: `,20,` Bytes (한글 약 6~10자)`]})})]})},play:async({canvasElement:e})=>{let t=x(e).getByRole(`textbox`);t.focus(),await b.paste(`12345678901234567890123`),await _(t).toHaveValue(`12345678901234567890`),await b.type(t,`9`),await _(t).toHaveValue(`12345678901234567890`),await b.clear(t),await v.compositionStart(t),await v.change(t,{target:{value:`가나다라마바사아자차카타파하`}}),await v.compositionEnd(t),await _(t.value.length).toBeLessThanOrEqual(10),await b.clear(t),await v.compositionStart(t),await v.change(t,{target:{value:`가나`}}),await v.compositionEnd(t),await _(t).toHaveValue(`가나`)}},O={render:function(e){let[t,n]=(0,h.useState)(`공간 쿼리 메모 작성`);return(0,g.jsxs)(`div`,{className:`flex w-80 flex-col items-center gap-3`,children:[(0,g.jsxs)(`div`,{className:`w-full rounded border border-secondary-border bg-surface-muted px-3 py-1.5 text-xs`,children:[(0,g.jsx)(`strong`,{children:`현재 글자 수:`}),` `,t.length,`자`]}),(0,g.jsx)(u,{...e,value:t,onChange:t=>{n(t.target.value),e.onChange?.(t)}})]})},play:async({canvasElement:e,args:t})=>{let n=x(e),r=n.getByRole(`textbox`);await b.clear(r),await b.type(r,`PostGIS`),await _(n.getByText(/7자/)).toBeInTheDocument(),await _(t.onChange).toHaveBeenCalled()}},k=[`Default`,`Sizes`,`Variants`,`States`,`ByteLimit`,`Controlled`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '기본 텍스트 내용입니다.'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole<HTMLTextAreaElement>('textbox');
    await userEvent.clear(textarea);
    await userEvent.type(textarea, 'EPSG:5179 좌표계 설명');
    await expect(textarea).toHaveValue('EPSG:5179 좌표계 설명');
    await expect(args.onChange).toHaveBeenCalled();

    // 비-InputEvent change 및 네이티브 InputEvent(isComposing: true) 분기 커버
    await fireEvent.change(textarea, {
      target: {
        value: '변경된 텍스트'
      }
    });
    const nativeSetter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value')?.set;
    nativeSetter?.call(textarea, '조합 중 텍스트');
    textarea.dispatchEvent(new InputEvent('input', {
      bubbles: true,
      isComposing: true
    }));
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          Small (sm)
        </span>
        <TextArea size="sm" rows={3} placeholder="Small 크기 텍스트영역" />
      </div>
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          Medium (md - 기본값)
        </span>
        <TextArea size="md" rows={3} placeholder="Medium 크기 텍스트영역" />
      </div>
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          Large (lg)
        </span>
        <TextArea size="lg" rows={3} placeholder="Large 크기 텍스트영역" />
      </div>
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          Default (테두리 및 흰색 배경)
        </span>
        <TextArea variant="default" rows={3} defaultValue="테두리가 있는 기본 형태입니다." />
      </div>
      <div className="rounded bg-neutral-100 p-2">
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          Ghost (배경/테두리 투명)
        </span>
        <TextArea variant="ghost" rows={3} defaultValue="투명한 배경과 테두리를 가진 Ghost 형태입니다." />
      </div>
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          ReadOnly (읽기 전용)
        </span>
        <TextArea readOnly rows={3} defaultValue="이 텍스트는 수정할 수 없는 읽기 전용 상태입니다." />
      </div>
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          Disabled (비활성화)
        </span>
        <TextArea disabled rows={3} defaultValue="비활성화되어 입력할 수 없습니다." />
      </div>
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          Length 0 (바이트 제한 비활성 분기)
        </span>
        <TextArea length={0} rows={2} placeholder="length=0 테스트" />
      </div>
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const maxBytes = 20;
    const [text, setText] = useState('');
    return <div className="flex w-80 flex-col gap-1.5">
        <TextArea length={maxBytes} rows={3} value={text} onChange={e => setText(e.target.value)} placeholder={\`최대 \${maxBytes}바이트까지만 입력 가능합니다.\`} />
        <div className="flex justify-end text-2xs text-neutral-500">
          <span>최대 제한: {maxBytes} Bytes (한글 약 6~10자)</span>
        </div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole<HTMLTextAreaElement>('textbox');

    // 1. 빈 상태에 20바이트 초과 문자열 붙여넣기 -> e.target.value = nextValue (Line 109) 커버
    textarea.focus();
    await userEvent.paste('12345678901234567890123');
    await expect(textarea).toHaveValue('12345678901234567890');

    // 2. 이미 20바이트가 찬 상태에서 추가 입력 -> nextValue === String(currentValue) 조기 return 커버
    await userEvent.type(textarea, '9');
    await expect(textarea).toHaveValue('12345678901234567890');

    // 3. IME 조합 중(compositionStart) 20바이트 초과 후 compositionEnd -> emitNativeTextAreaValue 실행
    await userEvent.clear(textarea);
    await fireEvent.compositionStart(textarea);
    await fireEvent.change(textarea, {
      target: {
        value: '가나다라마바사아자차카타파하'
      }
    });
    await fireEvent.compositionEnd(textarea);
    await expect(textarea.value.length).toBeLessThanOrEqual(10);

    // 4. IME 조합 후 바이트 제한 이내(<= 20) compositionEnd 분기 커버
    await userEvent.clear(textarea);
    await fireEvent.compositionStart(textarea);
    await fireEvent.change(textarea, {
      target: {
        value: '가나'
      }
    });
    await fireEvent.compositionEnd(textarea);
    await expect(textarea).toHaveValue('가나');
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [content, setContent] = useState('공간 쿼리 메모 작성');
    return <div className="flex w-80 flex-col items-center gap-3">
        <div className="w-full rounded border border-secondary-border bg-surface-muted px-3 py-1.5 text-xs">
          <strong>현재 글자 수:</strong> {content.length}자
        </div>
        <TextArea {...args} value={content} onChange={e => {
        setContent(e.target.value);
        args.onChange?.(e);
      }} />
      </div>;
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox');
    await userEvent.clear(textarea);
    await userEvent.type(textarea, 'PostGIS');
    await expect(canvas.getByText(/7자/)).toBeInTheDocument();
    await expect(args.onChange).toHaveBeenCalled();
  }
}`,...O.parameters?.docs?.source}}}})))()}A();export{D as ByteLimit,O as Controlled,C as Default,w as Sizes,E as States,T as Variants,k as __namedExportsOrder,S as default};