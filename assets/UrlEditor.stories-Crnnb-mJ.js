import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-Bofpnzsy.js";import{n as r,t as i}from"./UrlEditor-JOlM6ZVD.js";function a(){let[e,t]=(0,s.useState)(`https://github.com`);return(0,c.jsxs)(`div`,{className:`flex w-96 flex-col gap-1.5`,children:[(0,c.jsx)(i,{length:25,value:e,onChange:t,className:`min-h-20 w-full p-2`},`byte-limit`),(0,c.jsx)(`div`,{className:`flex justify-end text-2xs text-neutral-500`,children:(0,c.jsxs)(`span`,{children:[`최대 제한: `,25,` Bytes (초과 입력 방지)`]})})]})}function o(e){let[t,n]=(0,s.useState)(`참고 사이트: https://postgis.net/documentation/`);return(0,c.jsxs)(`div`,{className:`flex w-96 flex-col items-center gap-3`,children:[(0,c.jsxs)(`div`,{className:`w-full rounded border border-secondary-border bg-surface-muted px-3 py-1.5 text-xs break-all`,children:[(0,c.jsx)(`strong`,{children:`현재 저장된 값 (onBlur 갱신):`}),` `,t]}),(0,l.createElement)(i,{...e,key:`controlled-editor`,value:t,onChange:t=>{n(t),e.onChange?.(t)},className:`min-h-24 w-full p-2`}),(0,c.jsx)(`button`,{type:`button`,className:`text-xs underline`,onClick:()=>n(`외부 갱신 URL: https://geoserver.org`),children:`외부 값 변경`})]})}var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{s=t(),r(),c=n(),l=t(),{expect:u,fireEvent:d,fn:f,userEvent:p,within:m}=__STORYBOOK_MODULE_TEST__,h=`도면 서비스 안내 및 문서 링크:
- 메인 사이트: https://mars2.abonaro.kr
- 도움말 문서: www.google.com
- 백엔드 WMS 엔드포인트: http://192.168.1.74:38478`,g={title:`Components/UrlEditor`,component:i,args:{variant:`default`,size:`md`,disabled:!1,readOnly:!1,className:`w-96 min-h-24 p-2`,onChange:f()},parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`inline-radio`,options:[`default`,`ghost`],description:`에디터 테두리 및 배경 테마 스타일`},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`],description:`에디터 높이 및 폰트 행간 크기`},disabled:{control:`boolean`,description:`비활성화 여부`},readOnly:{control:`boolean`,description:`읽기 전용 여부 (링크 클릭은 유지)`},length:{control:`number`,description:`최대 허용 바이트(Byte) 수`},value:{control:`text`,description:`에디터 내용 텍스트 (줄바꿈 지원)`}}},_={args:{value:h},play:async({canvasElement:e})=>{let t=m(e),n=globalThis.open;globalThis.open=f(()=>null);try{let e=t.getByRole(`link`,{name:`https://mars2.abonaro.kr`}),n=t.getByRole(`link`,{name:`www.google.com`});await p.click(e),await p.click(n),await u(globalThis.open).toHaveBeenCalledTimes(2)}finally{globalThis.open=n}}},v={args:{placeholder:`URL 또는 메모를 입력하세요...`},render:e=>(0,c.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,c.jsx)(i,{...e}),(0,c.jsx)(`button`,{type:`button`,children:`포커스 이동`})]}),play:async({canvasElement:e,args:t})=>{let n=m(e),r=e.querySelector(`[contenteditable="true"]`);r&&(await p.click(r),await d.compositionStart(r),r.dispatchEvent(new InputEvent(`beforeinput`,{inputType:`insertText`,data:`https://example.com`,bubbles:!0,cancelable:!0})),await d.compositionEnd(r),await p.click(n.getByRole(`button`,{name:`포커스 이동`})),await u(t.onChange).toHaveBeenCalledWith(`https://example.com`))}},y={render:()=>(0,c.jsxs)(`div`,{className:`flex w-96 flex-col gap-4`,children:[(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Small (sm)`}),(0,c.jsx)(i,{size:`sm`,value:`공식 문서: https://openlayers.org`,className:`w-full`},`size-sm`)]}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Medium (md - 기본값)`}),(0,c.jsx)(i,{size:`md`,value:`공식 문서: https://openlayers.org`,className:`w-full`},`size-md`)]}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Large (lg)`}),(0,c.jsx)(i,{size:`lg`,value:`공식 문서: https://openlayers.org`,className:`w-full`},`size-lg`)]})]})},b={render:()=>(0,c.jsxs)(`div`,{className:`flex w-96 flex-col gap-4`,children:[(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Default (테두리 및 흰색 배경)`}),(0,c.jsx)(i,{variant:`default`,value:`포털 주소: https://naver.com`,className:`w-full p-2`},`variant-default`)]}),(0,c.jsxs)(`div`,{className:`rounded bg-neutral-100 p-2`,children:[(0,c.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Ghost (투명 배경 및 테두리 없음)`}),(0,c.jsx)(i,{variant:`ghost`,value:`포털 주소: https://naver.com`,className:`w-full`},`variant-ghost`)]})]})},x={render:()=>(0,c.jsxs)(`div`,{className:`flex w-96 flex-col gap-4`,children:[(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`ReadOnly (읽기 전용 - 텍스트 수정 불가, 링크 클릭 가능)`}),(0,c.jsx)(i,{readOnly:!0,value:`검색 포털: https://google.com
읽기 전용 상태입니다.`,className:`w-full p-2`},`state-readonly`)]}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Disabled (비활성화 - 수정 및 링크 클릭 불가)`}),(0,c.jsx)(i,{disabled:!0,value:`비활성 URL: https://google.com
클릭 및 선택이 비활성화됩니다.`,className:`w-full p-2`},`state-disabled`)]})]})},S={render:()=>(0,c.jsx)(a,{}),play:async({canvasElement:e})=>{let t=e.querySelector(`[contenteditable="true"]`);t&&(await p.click(t),t.dispatchEvent(new InputEvent(`beforeinput`,{inputType:`insertText`,data:`/very/long/path/that/exceeds/limit`,bubbles:!0,cancelable:!0})),await d.compositionStart(t),t.dispatchEvent(new InputEvent(`beforeinput`,{inputType:`insertText`,data:`한글초과텍스트입력`,bubbles:!0,cancelable:!0})),await d.compositionEnd(t),await d.blur(t))}},C={render:e=>(0,c.jsx)(o,{...e}),play:async({canvasElement:e})=>{let t=m(e);await p.click(t.getByRole(`button`,{name:`외부 값 변경`})),await u(t.getByRole(`link`,{name:`https://geoserver.org`})).toBeInTheDocument()}},w=[`Default`,`UncontrolledEditing`,`Sizes`,`Variants`,`States`,`ByteLimit`,`Controlled`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
    await userEvent.click(textbox);
    await fireEvent.compositionStart(textbox);
    textbox.dispatchEvent(new InputEvent('beforeinput', {
      inputType: 'insertText',
      data: 'https://example.com',
      bubbles: true,
      cancelable: true
    }));
    await fireEvent.compositionEnd(textbox);

    // 외부 버튼 클릭으로 실제 blur 발생 -> handleBlur -> onChange 호출
    await userEvent.click(canvas.getByRole('button', {
      name: '포커스 이동'
    }));
    await expect(args.onChange).toHaveBeenCalledWith('https://example.com');
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
        <UrlEditor key="state-disabled" disabled value={\`비활성 URL: https://google.com\\n클릭 및 선택이 비활성화됩니다.\`} className="w-full p-2" />
      </div>
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <ByteLimitDemo />,
  play: async ({
    canvasElement
  }) => {
    const textbox = canvasElement.querySelector<HTMLElement>('[contenteditable="true"]');
    if (!textbox) {
      return;
    }

    // 1) 일반 입력으로 25바이트 초과 -> truncateByBytes & replaceEditorText 실행
    await userEvent.click(textbox);
    textbox.dispatchEvent(new InputEvent('beforeinput', {
      inputType: 'insertText',
      data: '/very/long/path/that/exceeds/limit',
      bubbles: true,
      cancelable: true
    }));

    // 2) IME 조합 중 초과 입력 후 compositionEnd -> handleCompositionEnd 절단 실행
    await fireEvent.compositionStart(textbox);
    textbox.dispatchEvent(new InputEvent('beforeinput', {
      inputType: 'insertText',
      data: '한글초과텍스트입력',
      bubbles: true,
      cancelable: true
    }));
    await fireEvent.compositionEnd(textbox);
    await fireEvent.blur(textbox);
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}}})))()}T();export{S as ByteLimit,C as Controlled,_ as Default,y as Sizes,x as States,v as UncontrolledEditing,b as Variants,w as __namedExportsOrder,g as default};