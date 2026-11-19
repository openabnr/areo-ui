import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-mWnvI0Rq.js";import{n as r,t as i}from"./UrlEditor-DJPmXTqg.js";function a(e){e.focus();let t=document.createRange();t.selectNodeContents(e),t.collapse(!1);let n=globalThis.getSelection();n?.removeAllRanges(),n?.addRange(t)}function o(){let[e,t]=(0,c.useState)(`https://git.io`);return(0,l.jsxs)(`div`,{className:`flex w-96 flex-col gap-3`,children:[(0,l.jsxs)(`div`,{children:[(0,l.jsxs)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:[`비제어 바이트 제한 (`,15,` Bytes)`]}),(0,l.jsx)(i,{"data-testid":`byte-limit-uncontrolled`,length:15,placeholder:`비제어 초과 입력 테스트`,className:`min-h-14 w-full p-2`},`byte-limit-uncontrolled`)]}),(0,l.jsxs)(`div`,{children:[(0,l.jsxs)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:[`제어 바이트 제한 (`,15,` Bytes)`]}),(0,l.jsx)(i,{"data-testid":`byte-limit-controlled`,length:15,value:e,onChange:t,className:`min-h-14 w-full p-2`},`byte-limit-controlled`)]}),(0,l.jsx)(`button`,{type:`button`,className:`self-end text-xs underline`,children:`완료`})]})}function s(e){let[t,n]=(0,c.useState)(`참고 사이트: https://postgis.net/documentation/`);return(0,l.jsxs)(`div`,{className:`flex w-96 flex-col items-center gap-3`,children:[(0,l.jsxs)(`div`,{className:`w-full rounded border border-secondary-border bg-surface-muted px-3 py-1.5 text-xs break-all`,children:[(0,l.jsx)(`strong`,{children:`현재 저장된 값 (onBlur 갱신):`}),` `,t]}),(0,u.createElement)(i,{...e,key:`controlled-editor`,value:t,onChange:t=>{n(t),e.onChange?.(t)},className:`min-h-24 w-full p-2`}),(0,l.jsx)(`button`,{type:`button`,className:`text-xs underline`,onClick:()=>n(`외부 갱신 URL: https://geoserver.org`),children:`외부 값 변경`})]})}var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{c=t(),r(),l=n(),u=t(),{expect:d,fireEvent:f,fn:p,userEvent:m,within:h}=__STORYBOOK_MODULE_TEST__,g=`도면 서비스 안내 및 문서 링크:
- 메인 사이트: https://mars2.abonaro.kr
- 도움말 문서: www.google.com
- 백엔드 WMS 엔드포인트: http://192.168.1.74:38478`,_={title:`Components/UrlEditor`,component:i,args:{variant:`default`,size:`md`,disabled:!1,readOnly:!1,className:`w-96 min-h-24 p-2`,onChange:p()},parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`inline-radio`,options:[`default`,`ghost`],description:`에디터 테두리 및 배경 테마 스타일`},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`],description:`에디터 높이 및 폰트 행간 크기`},disabled:{control:`boolean`,description:`비활성화 여부`},readOnly:{control:`boolean`,description:`읽기 전용 여부 (링크 클릭은 유지)`},length:{control:`number`,description:`최대 허용 바이트(Byte) 수`},value:{control:`text`,description:`에디터 내용 텍스트 (줄바꿈 지원)`}}},v={args:{value:g},play:async({canvasElement:e})=>{let t=h(e),n=globalThis.open;globalThis.open=p(()=>null);try{let e=t.getByRole(`link`,{name:`https://mars2.abonaro.kr`}),n=t.getByRole(`link`,{name:`www.google.com`});await m.click(e),await m.click(n),await d(globalThis.open).toHaveBeenCalledTimes(2)}finally{globalThis.open=n}}},y={args:{placeholder:`URL 또는 메모를 입력하세요...`},render:e=>(0,l.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,l.jsx)(i,{...e}),(0,l.jsx)(`button`,{type:`button`,children:`포커스 이동`})]}),play:async({canvasElement:e,args:t})=>{let n=h(e),r=e.querySelector(`[contenteditable="true"]`);if(!r)return;await m.click(r),await m.type(r,`https://example.com`),await f.compositionStart(r),await f.compositionEnd(r);let i=n.getByRole(`button`,{name:`포커스 이동`});await m.click(i),await d(t.onChange).toHaveBeenCalledWith(`https://example.com`),await m.click(r),await m.click(i),await d(t.onChange).toHaveBeenCalledTimes(1)}},b={render:()=>(0,l.jsxs)(`div`,{className:`flex w-96 flex-col gap-4`,children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Small (sm)`}),(0,l.jsx)(i,{size:`sm`,value:`공식 문서: https://openlayers.org`,className:`w-full`},`size-sm`)]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Medium (md - 기본값)`}),(0,l.jsx)(i,{size:`md`,value:`공식 문서: https://openlayers.org`,className:`w-full`},`size-md`)]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Large (lg)`}),(0,l.jsx)(i,{size:`lg`,value:`공식 문서: https://openlayers.org`,className:`w-full`},`size-lg`)]})]})},x={render:()=>(0,l.jsxs)(`div`,{className:`flex w-96 flex-col gap-4`,children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Default (테두리 및 흰색 배경)`}),(0,l.jsx)(i,{variant:`default`,value:`포털 주소: https://naver.com`,className:`w-full p-2`},`variant-default`)]}),(0,l.jsxs)(`div`,{className:`rounded bg-neutral-100 p-2`,children:[(0,l.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Ghost (투명 배경 및 테두리 없음)`}),(0,l.jsx)(i,{variant:`ghost`,value:`포털 주소: https://naver.com`,className:`w-full`},`variant-ghost`)]})]})},S={render:()=>(0,l.jsxs)(`div`,{className:`flex w-96 flex-col gap-4`,children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`ReadOnly (읽기 전용 - 텍스트 수정 불가, 링크 클릭 가능)`}),(0,l.jsx)(i,{readOnly:!0,value:`검색 포털: https://google.com
읽기 전용 상태입니다.`,className:`w-full p-2`},`state-readonly`)]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Disabled (비활성화 - 수정 및 링크 클릭 불가)`}),(0,l.jsx)(i,{disabled:!0,readOnly:!0,length:0,value:`비활성 URL: https://google.com
클릭 및 선택이 비활성화됩니다.`,className:`w-full p-2`},`state-disabled`)]})]})},C={render:()=>(0,l.jsx)(o,{}),play:async({canvasElement:e})=>{let t=h(e),n=t.getByTestId(`byte-limit-uncontrolled`),r=t.getByTestId(`byte-limit-controlled`);a(n),await f.compositionStart(n),await m.type(n,`가나다`),await f.compositionEnd(n),await f.compositionStart(n),await m.type(n,`라마바사아`),await f.compositionEnd(n),await d(n.textContent).toBe(`가나다라마바사`),a(n),await m.type(n,`extra`),await d(n.textContent).toBe(`가나다라마바사e`),a(r),await m.type(r,`/extra/path`),await d(r.textContent).toBe(`https://git.io/`),a(r),await f.compositionStart(r),await m.type(r,`추가한글`),await f.compositionEnd(r),await m.click(t.getByRole(`button`,{name:`완료`}))}},w={render:e=>(0,l.jsx)(s,{...e}),play:async({canvasElement:e})=>{let t=h(e);await m.click(t.getByRole(`button`,{name:`외부 값 변경`})),await d(t.getByRole(`link`,{name:`https://geoserver.org`})).toBeInTheDocument()}},T=[`Default`,`UncontrolledEditing`,`Sizes`,`Variants`,`States`,`ByteLimit`,`Controlled`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    value: sampleUrlText
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const originalOpen = globalThis.open;
    globalThis.open = fn(() => null);
    try {
      const httpsLink = canvas.getByRole('link', {
        name: 'https://mars2.abonaro.kr'
      });
      const wwwLink = canvas.getByRole('link', {
        name: 'www.google.com'
      });
      await userEvent.click(httpsLink);
      await userEvent.click(wwwLink);
      await expect(globalThis.open).toHaveBeenCalledTimes(2);
    } finally {
      globalThis.open = originalOpen;
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'URL 또는 메모를 입력하세요...'
  },
  render: args => <div className="flex flex-col gap-2">
      <UrlEditor {...args} />
      <button type="button">포커스 이동</button>
    </div>,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const textbox = canvasElement.querySelector<HTMLElement>('[contenteditable="true"]');
    if (!textbox) {
      return;
    }

    // 1) 실제 텍스트 입력 및 IME 조합 이벤트(hasByteLimit=false 조기 return) 커버
    await userEvent.click(textbox);
    await userEvent.type(textbox, 'https://example.com');
    await fireEvent.compositionStart(textbox);
    await fireEvent.compositionEnd(textbox);

    // 2) 외부 버튼 클릭으로 실제 blur 발생 -> handleBlur -> onChange 호출
    const blurBtn = canvas.getByRole('button', {
      name: '포커스 이동'
    });
    await userEvent.click(blurBtn);
    await expect(args.onChange).toHaveBeenCalledWith('https://example.com');

    // 3) 내용 변경 없이 재포커스 후 blur -> content === lastCommittedValueRef.current 분기 커버
    await userEvent.click(textbox);
    await userEvent.click(blurBtn);
    await expect(args.onChange).toHaveBeenCalledTimes(1);
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-96 flex-col gap-4">
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          Small (sm)
        </span>
        <UrlEditor key="size-sm" size="sm" value="공식 문서: https://openlayers.org" className="w-full" />
      </div>
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          Medium (md - 기본값)
        </span>
        <UrlEditor key="size-md" size="md" value="공식 문서: https://openlayers.org" className="w-full" />
      </div>
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          Large (lg)
        </span>
        <UrlEditor key="size-lg" size="lg" value="공식 문서: https://openlayers.org" className="w-full" />
      </div>
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-96 flex-col gap-4">
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          Default (테두리 및 흰색 배경)
        </span>
        <UrlEditor key="variant-default" variant="default" value="포털 주소: https://naver.com" className="w-full p-2" />
      </div>
      <div className="rounded bg-neutral-100 p-2">
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          Ghost (투명 배경 및 테두리 없음)
        </span>
        <UrlEditor key="variant-ghost" variant="ghost" value="포털 주소: https://naver.com" className="w-full" />
      </div>
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-96 flex-col gap-4">
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          ReadOnly (읽기 전용 - 텍스트 수정 불가, 링크 클릭 가능)
        </span>
        <UrlEditor key="state-readonly" readOnly value={\`검색 포털: https://google.com\\n읽기 전용 상태입니다.\`} className="w-full p-2" />
      </div>
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          Disabled (비활성화 - 수정 및 링크 클릭 불가)
        </span>
        <UrlEditor key="state-disabled" disabled readOnly length={0} value={\`비활성 URL: https://google.com\\n클릭 및 선택이 비활성화됩니다.\`} className="w-full p-2" />
      </div>
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <ByteLimitDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const uncontrolledBox = canvas.getByTestId('byte-limit-uncontrolled');
    const controlledBox = canvas.getByTestId('byte-limit-controlled');

    // 1) 비제어 에디터: IME 조합 이내(6B <= 15B) 및 초과(16B > 15B -> 14B 절삭) compositionEnd 분기 커버
    moveCaretToEnd(uncontrolledBox);
    await fireEvent.compositionStart(uncontrolledBox);
    await userEvent.type(uncontrolledBox, '가나다');
    await fireEvent.compositionEnd(uncontrolledBox);
    await fireEvent.compositionStart(uncontrolledBox);
    await userEvent.type(uncontrolledBox, '라마바사아');
    await fireEvent.compositionEnd(uncontrolledBox);
    await expect(uncontrolledBox.textContent).toBe('가나다라마바사');

    // 2) 비제어 에디터: 일반 입력으로 15바이트 초과 -> handleChange 내 truncateByBytes & setInternalValue(truncated)
    moveCaretToEnd(uncontrolledBox);
    await userEvent.type(uncontrolledBox, 'extra');
    await expect(uncontrolledBox.textContent).toBe('가나다라마바사e');

    // 3) 제어 에디터: 일반 입력 초과 절단 및 IME 조합 초과 절단(isControlled === true) 분기 커버
    moveCaretToEnd(controlledBox);
    await userEvent.type(controlledBox, '/extra/path');
    await expect(controlledBox.textContent).toBe('https://git.io/');
    moveCaretToEnd(controlledBox);
    await fireEvent.compositionStart(controlledBox);
    await userEvent.type(controlledBox, '추가한글');
    await fireEvent.compositionEnd(controlledBox);
    await userEvent.click(canvas.getByRole('button', {
      name: '완료'
    }));
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledUrlEditorDemo {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: '외부 값 변경'
    }));
    await expect(canvas.getByRole('link', {
      name: 'https://geoserver.org'
    })).toBeInTheDocument();
  }
}`,...w.parameters?.docs?.source}}}})))()}E();export{C as ByteLimit,w as Controlled,v as Default,b as Sizes,S as States,y as UncontrolledEditing,x as Variants,T as __namedExportsOrder,_ as default};