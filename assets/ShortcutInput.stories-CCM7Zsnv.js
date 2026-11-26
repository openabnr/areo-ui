import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-CfFMW0hA.js";import{l as r,t as i}from"./utils-CXswP1E2.js";import{n as a,t as o}from"./dist-DxSsHBlF.js";import{b as s,i as c}from"./icons-Bexzjm0v.js";import{n as l,t as u}from"./useMergedRef-CYSh0iwj.js";import{t as d}from"./server.browser-DEWBDSek.js";function f(){}function p(){return f}function m(){let e=globalThis.navigator,t=e?.userAgentData?.platform??e?.userAgent??``;return w.test(t)}function h(){return!1}function ee(e){return e.ctrlKey||e.altKey||e.shiftKey||e.metaKey}function g(e){if(e.code.startsWith(`Key`))return e.code.slice(3).toUpperCase();if(e.code.startsWith(`Digit`))return e.code.slice(5);if(e.code.startsWith(`Numpad`))return`Num${e.code.slice(6)}`;let t=E.get(e.code);if(t!==void 0)return t;let n=E.get(e.key);return n===void 0?C.test(e.key)||e.key.length===1?e.key.toUpperCase():e.key:n}function te(e){return T.has(e.key)?null:{ctrlOrMeta:e.ctrlKey||e.metaKey,alt:e.altKey,shift:e.shiftKey,key:g(e)}}function _(e,t){let n=[];return e.ctrlOrMeta&&n.push({id:`ctrl`,label:t?`⌘`:`Ctrl`}),e.alt&&n.push({id:`alt`,label:`Alt`}),e.shift&&n.push({id:`shift`,label:`Shift`}),e.key&&n.push({id:`key`,label:e.key}),n}function v({value:e,size:t,disabled:n,isRecording:r,isMac:a,placeholder:o,recordingPlaceholder:s}){let c=r?(0,x.jsx)(`span`,{className:i(`inline-block w-px shrink-0 bg-secondary-foreground motion-safe:animate-caret-blink`,t===`sm`?`h-3`:`h-3.5`)},`shortcut-caret`):null,l=e?_(e,a):[];return l.length===0?(0,x.jsxs)(`div`,{className:`flex items-center gap-1 overflow-hidden`,children:[c,(0,x.jsx)(`span`,{className:i(`truncate`,r?`text-primary`:`text-text-disabled`),children:r?s:o})]}):(0,x.jsxs)(`div`,{className:`flex items-center gap-1.5 overflow-hidden`,children:[l.map((e,r)=>(0,x.jsxs)(`span`,{className:`inline-flex shrink-0 items-center gap-1.5`,children:[r>0&&(0,x.jsx)(`span`,{className:`text-2xs font-medium text-muted-foreground`,children:`+`}),(0,x.jsx)(`kbd`,{className:i(`inline-flex items-center justify-center rounded-[3px] border border-b-2 border-secondary-border bg-surface-muted px-1.5 font-sans text-2xs font-medium text-secondary-foreground shadow-[0_1px_1px_rgba(0,0,0,0.06)]`,t===`sm`?`h-3.5 min-w-4 px-1 leading-none`:`h-4.75 min-w-4.75 leading-none`,n&&`border-b border-border-disabled bg-transparent text-muted-foreground shadow-none`),children:e.label})]},e.id)),c]})}function y({size:e=`md`,variant:t=`default`,value:n,defaultValue:r=null,placeholder:a=`단축키 입력`,recordingPlaceholder:o=`키 조합을 누르세요...`,disabled:s=!1,readOnly:u=!1,clearable:d=!0,allowSingleKey:g=!0,className:y,wrapperClassName:w,onChange:T,onClear:E,onKeyDown:D,onFocus:O,onBlur:k,ref:A,style:j,"aria-label":M,"aria-describedby":N,...P}){let F=n!==void 0,[I,L]=(0,b.useState)(r),[R,z]=(0,b.useState)(!1),[B,V]=(0,b.useState)(!1),H=(0,b.useRef)(null),U=(0,b.useId)(),W=(0,b.useSyncExternalStore)(p,m,h),G=F?n:I,K=!!G?.key,q=!s&&!u,J=R&&q,Y=d&&q&&K&&B,X=e=>{F||L(e),T?.(e)},ne=e=>{e.stopPropagation(),e.preventDefault(),X(null),E?.(),H.current?.focus()},re=e=>{if(D?.(e),e.defaultPrevented||!q||e.nativeEvent.isComposing||e.key===`Process`||e.key===`Tab`)return;e.preventDefault(),e.stopPropagation();let t=te(e);if(!t)return;let n=C.test(e.key);(g||ee(e)||n)&&X(t)},ie=e=>{e.currentTarget.contains(e.relatedTarget)||V(!1)},Z=K&&G?_(G,W).map(e=>e.label).join(`+`):``,ae=Z?`${a}: ${Z}`:a,oe=[N,U].filter(Boolean).join(` `),Q,$=`right-1.75`;Y&&(Q=e===`sm`?`pr-6`:`pr-7`,$=e===`sm`?`right-6`:`right-7`);let se=l(H,A);return(0,x.jsxs)(`div`,{onFocusCapture:()=>{q&&V(!0)},onBlurCapture:ie,className:i(`relative box-border flex w-full items-center`,w),children:[(0,x.jsx)(`input`,{ref:se,type:`text`,readOnly:u,disabled:s,"aria-label":M??ae,"aria-describedby":oe,value:``,onChange:f,onBeforeInput:e=>e.preventDefault(),onPaste:e=>e.preventDefault(),onCut:e=>e.preventDefault(),style:{...j,caretColor:`transparent`},onFocus:e=>{q&&z(!0),O?.(e)},onBlur:e=>{z(!1),k?.(e)},onKeyDown:re,spellCheck:!1,autoComplete:`off`,className:i(S({variant:t,size:e}),`caret-transparent selection:bg-transparent`,q&&`cursor-pointer`,Q,y),...P}),(0,x.jsx)(`span`,{id:U,"aria-live":`polite`,className:`sr-only`,children:J?o:``}),(0,x.jsx)(`div`,{"aria-hidden":`true`,className:i(`pointer-events-none absolute inset-y-0 left-2 flex items-center overflow-hidden font-sans text-xs`,$),children:(0,x.jsx)(v,{value:G,size:e,disabled:s,isRecording:J,isMac:W,placeholder:a,recordingPlaceholder:o})}),Y&&(0,x.jsx)(`div`,{className:`absolute top-1/2 right-1.5 flex -translate-y-1/2 items-center text-secondary-border-active`,children:(0,x.jsx)(`button`,{type:`button`,"aria-label":`단축키 지우기`,onMouseDown:e=>e.preventDefault(),onClick:ne,className:`flex size-4 cursor-pointer items-center justify-center rounded-none border-0 bg-transparent p-0 text-text-disabled hover:text-secondary-foreground focus-visible:focus-double-ring focus-visible:outline-offset-1`,children:(0,x.jsx)(c,{})})})]})}var b,x,S,C,w,T,E;function D(){return(D=e((()=>{b=t(),a(),u(),r(),s(),x=n(),S=o([`w-full font-sans`,`box-border block rounded-none border text-xs font-normal shadow-none transition-colors outline-none select-none`,`border-secondary-border bg-white px-1.75 py-1 text-secondary-foreground`,`not-disabled:not-read-only:hover:border-secondary-border-hover`,`not-disabled:not-read-only:focus:border-primary focus-visible:outline-none not-disabled:not-read-only:active:border-primary`,`read-only:not-disabled:cursor-default read-only:not-disabled:border-secondary-border read-only:not-disabled:text-muted-foreground read-only:not-disabled:focus:border-secondary-border-active`,`disabled:cursor-not-allowed disabled:border-border-disabled disabled:bg-surface-muted/50 disabled:text-muted-foreground`],{variants:{variant:{default:``,ghost:[`border-transparent bg-transparent`,`not-disabled:not-read-only:hover:border-transparent not-disabled:not-read-only:focus:border-transparent not-disabled:not-read-only:active:border-transparent`,`disabled:border-transparent disabled:bg-transparent`,`read-only:not-disabled:border-transparent read-only:not-disabled:focus:border-transparent`]},size:{sm:`min-h-5.25 py-0.5 leading-3.75`,md:`min-h-6.75 py-1 leading-4.25`,lg:`min-h-8 py-1.5 leading-4.5`}},defaultVariants:{variant:`default`,size:`md`}}),C=/^F([1-9]|1\d|2[0-4])$/,w=/Mac|iPhone|iPad|iPod/i,T=new Set([`Control`,`Shift`,`Alt`,`Meta`,`CapsLock`,`NumLock`,`ScrollLock`,`Dead`,`Unidentified`]),E=new Map([[` `,`Space`],[`Space`,`Space`],[`Spacebar`,`Space`],[`ArrowUp`,`Up`],[`ArrowDown`,`Down`],[`ArrowLeft`,`Left`],[`ArrowRight`,`Right`],[`Escape`,`Esc`],[`Delete`,`Del`],[`Backspace`,`Backspace`],[`Insert`,`Ins`],[`PageUp`,`PgUp`],[`PageDown`,`PgDn`],[`Backquote`,"`"],[`Minus`,`-`],[`Equal`,`=`],[`BracketLeft`,`[`],[`BracketRight`,`]`],[`Backslash`,`\\`],[`Semicolon`,`;`],[`Quote`,`'`],[`Comma`,`,`],[`Period`,`.`],[`Slash`,`/`]]),y.__docgenInfo={description:``,methods:[],displayName:`ShortcutInput`,props:{size:{defaultValue:{value:`'md'`,computed:!1},required:!1},variant:{defaultValue:{value:`'default'`,computed:!1},required:!1},defaultValue:{defaultValue:{value:`null`,computed:!1},required:!1},placeholder:{defaultValue:{value:`'단축키 입력'`,computed:!1},required:!1},recordingPlaceholder:{defaultValue:{value:`'키 조합을 누르세요...'`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},readOnly:{defaultValue:{value:`false`,computed:!1},required:!1},clearable:{defaultValue:{value:`true`,computed:!1},required:!1},allowSingleKey:{defaultValue:{value:`true`,computed:!1},required:!1}}}})))()}function O(e){let[t,n]=(0,k.useState)({ctrlOrMeta:!0,shift:!0,alt:!1,key:`Z`});return(0,j.jsxs)(`div`,{className:`flex flex-col gap-3 font-sans`,children:[(0,j.jsx)(y,{...e,value:t,onChange:t=>{n(t),e.onChange?.(t)}}),(0,j.jsxs)(`div`,{className:`flex flex-col gap-1 border border-secondary-border bg-surface-muted p-2.5 text-compact text-secondary-foreground`,children:[(0,j.jsx)(`span`,{className:`text-2xs text-muted-foreground`,children:`저장된 객체:`}),(0,j.jsx)(`pre`,{className:`m-0 font-mono text-2xs text-primary`,children:t?JSON.stringify(t,null,2):`null`})]})]})}var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{k=t(),A=d(),D(),j=n(),{expect:M,fireEvent:N,fn:P,userEvent:F,within:I}=__STORYBOOK_MODULE_TEST__,L={title:`Components/ShortcutInput`,component:y,tags:[`autodocs`],args:{onChange:P(),onClear:P()},parameters:{layout:`centered`},argTypes:{variant:{control:`radio`,options:[`default`,`ghost`],description:`입력 필드의 스타일 변형입니다.`},size:{control:`radio`,options:[`sm`,`md`,`lg`],description:`입력 필드의 높이 및 내부 키캡 크기입니다.`},placeholder:{control:`text`,description:`값이 비어 있을 때 표시되는 기본 안내 문구입니다.`},recordingPlaceholder:{control:`text`,description:`포커스되어 키 입력을 대기 중일 때 표시되는 안내 문구입니다.`},clearable:{control:`boolean`,description:`포커스 상태에서 우측 초기화(Clear) 버튼 표시 여부입니다.`},allowSingleKey:{control:`boolean`,description:`수정자 키(Ctrl/Alt/Shift/Meta) 없이 단독 키 입력을 허용할지 여부입니다.`},disabled:{control:`boolean`,description:`비활성화 상태 여부입니다.`},readOnly:{control:`boolean`,description:`읽기 전용 상태 여부입니다.`}},decorators:[e=>(0,j.jsx)(`div`,{className:`w-60`,children:(0,j.jsx)(e,{})})]},R={args:{defaultValue:{ctrlOrMeta:!0,shift:!0,alt:!1,key:`S`},variant:`default`,size:`md`,clearable:!0,allowSingleKey:!0,disabled:!1,readOnly:!1},render:e=>(0,j.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,j.jsx)(y,{...e}),(0,j.jsx)(`button`,{type:`button`,className:`self-end text-xs`,children:`외부 포커스 이동`})]}),play:async({canvasElement:e,args:t})=>{let n=I(e),r=n.getByRole(`textbox`);await F.click(r);let i=n.getByRole(`button`,{name:`단축키 지우기`});await F.click(i),await M(t.onClear).toHaveBeenCalledTimes(1),await M(t.onChange).toHaveBeenLastCalledWith(null),await N.keyDown(r,{key:`Control`,code:`ControlLeft`}),await M(t.onChange).toHaveBeenCalledTimes(1),await N.keyDown(r,{key:`a`,code:`KeyA`,ctrlKey:!0,altKey:!0,shiftKey:!0}),await M(t.onChange).toHaveBeenLastCalledWith({ctrlOrMeta:!0,alt:!0,shift:!0,key:`A`}),await N.keyDown(r,{key:`1`,code:`Digit1`}),await M(t.onChange).toHaveBeenLastCalledWith({ctrlOrMeta:!1,alt:!1,shift:!1,key:`1`}),await N.keyDown(r,{key:`5`,code:`Numpad5`}),await M(t.onChange).toHaveBeenLastCalledWith({ctrlOrMeta:!1,alt:!1,shift:!1,key:`Num5`}),await N.keyDown(r,{key:` `,code:`Space`}),await M(t.onChange).toHaveBeenLastCalledWith({ctrlOrMeta:!1,alt:!1,shift:!1,key:`Space`}),await N.keyDown(r,{key:`ArrowUp`,code:``}),await M(t.onChange).toHaveBeenLastCalledWith({ctrlOrMeta:!1,alt:!1,shift:!1,key:`Up`}),await N.keyDown(r,{key:`F5`,code:`F5`}),await M(t.onChange).toHaveBeenLastCalledWith({ctrlOrMeta:!1,alt:!1,shift:!1,key:`F5`}),await N.keyDown(r,{key:`?`,code:``}),await M(t.onChange).toHaveBeenLastCalledWith({ctrlOrMeta:!1,alt:!1,shift:!1,key:`?`}),await N.keyDown(r,{key:`Home`,code:`Home`}),await M(t.onChange).toHaveBeenLastCalledWith({ctrlOrMeta:!1,alt:!1,shift:!1,key:`Home`}),await N.change(r,{target:{value:`x`}}),await N(r,new InputEvent(`beforeinput`,{data:`x`,bubbles:!0,cancelable:!0})),await N.paste(r),await N.cut(r),await N.keyDown(r,{key:`Tab`,code:`Tab`}),n.getByRole(`button`,{name:`단축키 지우기`}).focus(),await F.click(n.getByRole(`button`,{name:`외부 포커스 이동`}));let a=(0,A.renderToString)((0,j.jsx)(y,{}));await M(a).toContain(`단축키 입력`)}},z={render:()=>(0,j.jsxs)(`div`,{className:`flex flex-col gap-4 font-sans text-xs`,children:[(0,j.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,j.jsx)(`span`,{className:`text-muted-foreground`,children:`Small (sm)`}),(0,j.jsx)(y,{size:`sm`,defaultValue:{ctrlOrMeta:!0,shift:!1,alt:!1,key:`S`}})]}),(0,j.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,j.jsx)(`span`,{className:`text-muted-foreground`,children:`Medium (md)`}),(0,j.jsx)(y,{size:`md`,defaultValue:{ctrlOrMeta:!0,shift:!0,alt:!1,key:`P`}})]}),(0,j.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,j.jsx)(`span`,{className:`text-muted-foreground`,children:`Large (lg)`}),(0,j.jsx)(y,{size:`lg`,defaultValue:{ctrlOrMeta:!0,shift:!1,alt:!0,key:`Del`}})]})]}),play:async({canvasElement:e})=>{let t=I(e).getAllByRole(`textbox`);await F.click(t[0])}},B={render:()=>(0,j.jsxs)(`div`,{className:`flex flex-col gap-4 font-sans text-xs`,children:[(0,j.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,j.jsx)(`span`,{className:`text-muted-foreground`,children:`Default`}),(0,j.jsx)(y,{variant:`default`,defaultValue:{ctrlOrMeta:!0,shift:!1,alt:!1,key:`C`}})]}),(0,j.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,j.jsx)(`span`,{className:`text-muted-foreground`,children:`Ghost (테이블/인라인 편집용)`}),(0,j.jsx)(`div`,{className:`border border-secondary-border bg-surface-muted/40 p-1`,children:(0,j.jsx)(y,{variant:`ghost`,defaultValue:{ctrlOrMeta:!0,shift:!1,alt:!1,key:`V`}})})]})]})},V={render:function(){let[e,t]=(0,k.useState)(!1);return(0,j.jsxs)(`div`,{className:`flex flex-col gap-4 font-sans text-xs`,children:[(0,j.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,j.jsx)(`span`,{className:`text-muted-foreground`,children:`Empty (Placeholder)`}),(0,j.jsx)(y,{placeholder:`클릭 후 단축키 입력`,value:{ctrlOrMeta:!1,shift:!1,alt:!1,key:``}})]}),(0,j.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,j.jsx)(`span`,{className:`text-muted-foreground`,children:`Modifier Required (allowSingleKey=false)`}),(0,j.jsx)(y,{allowSingleKey:!1,placeholder:`Ctrl/Alt/Shift 조합만 허용`})]}),(0,j.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,j.jsx)(`span`,{className:`text-muted-foreground`,children:`ReadOnly`}),(0,j.jsx)(y,{readOnly:!0,value:{ctrlOrMeta:!0,shift:!1,alt:!1,key:`Z`}})]}),(0,j.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,j.jsx)(`span`,{className:`text-muted-foreground`,children:`Disabled`}),(0,j.jsx)(y,{disabled:!0,value:{ctrlOrMeta:!0,shift:!1,alt:!1,key:`Y`}})]}),(0,j.jsx)(`button`,{type:`button`,className:`self-start text-xs underline`,onClick:()=>t(!0),children:`macOS 단축키 마운트`}),e&&(0,j.jsx)(y,{placeholder:`맥 단축키`,defaultValue:{ctrlOrMeta:!0,shift:!1,alt:!1,key:`K`}})]})},play:async({canvasElement:e})=>{let t=I(e),n=t.getByRole(`textbox`,{name:`단축키 입력: Ctrl+Z`});await F.click(n),await N.keyDown(n,{key:`a`,code:`KeyA`});let r=t.getByRole(`textbox`,{name:`Ctrl/Alt/Shift 조합만 허용`});await F.click(r),await N.keyDown(r,{key:`a`,code:`KeyA`}),await M(r).toHaveAttribute(`aria-label`,`Ctrl/Alt/Shift 조합만 허용`),await N.keyDown(r,{key:`k`,code:`KeyK`,ctrlKey:!0}),await M(r).toHaveAttribute(`aria-label`,`Ctrl/Alt/Shift 조합만 허용: Ctrl+K`);let i=Object.getOwnPropertyDescriptor(Navigator.prototype,`userAgent`),a=Object.getOwnPropertyDescriptor(Navigator.prototype,`userAgentData`);try{Object.defineProperty(Navigator.prototype,"userAgentData",{configurable:!0,get:()=>void 0}),Object.defineProperty(Navigator.prototype,"userAgent",{configurable:!0,get:()=>`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)`}),await F.click(t.getByRole(`button`,{name:`macOS 단축키 마운트`})),await M(t.getByRole(`textbox`,{name:`맥 단축키: ⌘+K`})).toBeInTheDocument()}finally{i&&Object.defineProperty(Navigator.prototype,"userAgent",i),a&&Object.defineProperty(Navigator.prototype,"userAgentData",a)}}},H={args:{variant:`default`,size:`md`,clearable:!0,allowSingleKey:!0,disabled:!1,readOnly:!1},render:e=>(0,j.jsx)(O,{...e}),play:async({canvasElement:e})=>{let t=I(e),n=t.getByRole(`textbox`);await F.click(n),await N.keyDown(n,{key:`s`,code:`KeyS`,ctrlKey:!0}),await M(t.getByText(/"key": "S"/)).toBeInTheDocument()}},U=[`Default`,`Sizes`,`Variants`,`States`,`Controlled`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: {
      ctrlOrMeta: true,
      shift: true,
      alt: false,
      key: 'S'
    },
    variant: 'default',
    size: 'md',
    clearable: true,
    allowSingleKey: true,
    disabled: false,
    readOnly: false
  },
  render: args => <div className="flex flex-col gap-2">
      <ShortcutInput {...args} />
      <button type="button" className="self-end text-xs">
        외부 포커스 이동
      </button>
    </div>,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');

    // 1) 포커스 진입 -> 녹화 모드 & 단축키 지우기 버튼 노출
    await userEvent.click(input);
    const clearBtn = canvas.getByRole('button', {
      name: '단축키 지우기'
    });
    await userEvent.click(clearBtn);
    await expect(args.onClear).toHaveBeenCalledTimes(1);
    await expect(args.onChange).toHaveBeenLastCalledWith(null);

    // 2) IGNORED_KEYS (Control 단독 입력) 무시 분기
    await fireEvent.keyDown(input, {
      key: 'Control',
      code: 'ControlLeft'
    });
    await expect(args.onChange).toHaveBeenCalledTimes(1);

    // 3) KeyA, Digit1, Numpad5, SPECIAL_KEY_MAP, FunctionKey, 단일 문자, 일반 키 순차 입력
    await fireEvent.keyDown(input, {
      key: 'a',
      code: 'KeyA',
      ctrlKey: true,
      altKey: true,
      shiftKey: true
    });
    await expect(args.onChange).toHaveBeenLastCalledWith({
      ctrlOrMeta: true,
      alt: true,
      shift: true,
      key: 'A'
    });
    await fireEvent.keyDown(input, {
      key: '1',
      code: 'Digit1'
    });
    await expect(args.onChange).toHaveBeenLastCalledWith({
      ctrlOrMeta: false,
      alt: false,
      shift: false,
      key: '1'
    });
    await fireEvent.keyDown(input, {
      key: '5',
      code: 'Numpad5'
    });
    await expect(args.onChange).toHaveBeenLastCalledWith({
      ctrlOrMeta: false,
      alt: false,
      shift: false,
      key: 'Num5'
    });
    await fireEvent.keyDown(input, {
      key: ' ',
      code: 'Space'
    });
    await expect(args.onChange).toHaveBeenLastCalledWith({
      ctrlOrMeta: false,
      alt: false,
      shift: false,
      key: 'Space'
    });
    await fireEvent.keyDown(input, {
      key: 'ArrowUp',
      code: ''
    });
    await expect(args.onChange).toHaveBeenLastCalledWith({
      ctrlOrMeta: false,
      alt: false,
      shift: false,
      key: 'Up'
    });
    await fireEvent.keyDown(input, {
      key: 'F5',
      code: 'F5'
    });
    await expect(args.onChange).toHaveBeenLastCalledWith({
      ctrlOrMeta: false,
      alt: false,
      shift: false,
      key: 'F5'
    });
    await fireEvent.keyDown(input, {
      key: '?',
      code: ''
    });
    await expect(args.onChange).toHaveBeenLastCalledWith({
      ctrlOrMeta: false,
      alt: false,
      shift: false,
      key: '?'
    });
    await fireEvent.keyDown(input, {
      key: 'Home',
      code: 'Home'
    });
    await expect(args.onChange).toHaveBeenLastCalledWith({
      ctrlOrMeta: false,
      alt: false,
      shift: false,
      key: 'Home'
    });

    // 4) onChange(noop), beforeInput(bubbles: true), paste, cut, Tab 차단 (Lines 442-443 커버)
    await fireEvent.change(input, {
      target: {
        value: 'x'
      }
    });
    await fireEvent(input, new InputEvent('beforeinput', {
      data: 'x',
      bubbles: true,
      cancelable: true
    }));
    await fireEvent.paste(input);
    await fireEvent.cut(input);
    await fireEvent.keyDown(input, {
      key: 'Tab',
      code: 'Tab'
    });

    // 5) 내부 clear 버튼 포커스(contains === true) -> 외부 버튼 클릭(handleWrapperBlur 383-384 커버)
    const nextClearBtn = canvas.getByRole('button', {
      name: '단축키 지우기'
    });
    nextClearBtn.focus();
    await userEvent.click(canvas.getByRole('button', {
      name: '외부 포커스 이동'
    }));

    // 6) SSR 서버 스냅샷(getIsMacServerSnapshot, Line 118) 커버
    const ssrHtml = renderToString(<ShortcutInput />);
    await expect(ssrHtml).toContain('단축키 입력');
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 font-sans text-xs">
      <div className="flex flex-col gap-1">
        <span className="text-muted-foreground">Small (sm)</span>
        <ShortcutInput size="sm" defaultValue={{
        ctrlOrMeta: true,
        shift: false,
        alt: false,
        key: 'S'
      }} />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-muted-foreground">Medium (md)</span>
        <ShortcutInput size="md" defaultValue={{
        ctrlOrMeta: true,
        shift: true,
        alt: false,
        key: 'P'
      }} />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-muted-foreground">Large (lg)</span>
        <ShortcutInput size="lg" defaultValue={{
        ctrlOrMeta: true,
        shift: false,
        alt: true,
        key: 'Del'
      }} />
      </div>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const inputs = canvas.getAllByRole('textbox');
    await userEvent.click(inputs[0]);
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 font-sans text-xs">
      <div className="flex flex-col gap-1">
        <span className="text-muted-foreground">Default</span>
        <ShortcutInput variant="default" defaultValue={{
        ctrlOrMeta: true,
        shift: false,
        alt: false,
        key: 'C'
      }} />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-muted-foreground">
          Ghost (테이블/인라인 편집용)
        </span>
        <div className="border border-secondary-border bg-surface-muted/40 p-1">
          <ShortcutInput variant="ghost" defaultValue={{
          ctrlOrMeta: true,
          shift: false,
          alt: false,
          key: 'V'
        }} />
        </div>
      </div>
    </div>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [mountMac, setMountMac] = useState(false);
    return <div className="flex flex-col gap-4 font-sans text-xs">
        <div className="flex flex-col gap-1">
          <span className="text-muted-foreground">Empty (Placeholder)</span>
          <ShortcutInput placeholder="클릭 후 단축키 입력" value={{
          ctrlOrMeta: false,
          shift: false,
          alt: false,
          key: ''
        }} />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-muted-foreground">
            Modifier Required (allowSingleKey=false)
          </span>
          <ShortcutInput allowSingleKey={false} placeholder="Ctrl/Alt/Shift 조합만 허용" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-muted-foreground">ReadOnly</span>
          <ShortcutInput readOnly value={{
          ctrlOrMeta: true,
          shift: false,
          alt: false,
          key: 'Z'
        }} />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-muted-foreground">Disabled</span>
          <ShortcutInput disabled value={{
          ctrlOrMeta: true,
          shift: false,
          alt: false,
          key: 'Y'
        }} />
        </div>
        <button type="button" className="self-start text-xs underline" onClick={() => setMountMac(true)}>
          macOS 단축키 마운트
        </button>
        {mountMac && <ShortcutInput placeholder="맥 단축키" defaultValue={{
        ctrlOrMeta: true,
        shift: false,
        alt: false,
        key: 'K'
      }} />}
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 1) ReadOnly 인풋 클릭 -> onFocusCapture의 !isInteractive(Line 431) & onKeyDown 가드 커버
    const readOnlyInput = canvas.getByRole('textbox', {
      name: '단축키 입력: Ctrl+Z'
    });
    await userEvent.click(readOnlyInput);
    await fireEvent.keyDown(readOnlyInput, {
      key: 'a',
      code: 'KeyA'
    });

    // 2) allowSingleKey=false 단독 키 차단 및 수정자 조합 허용 검증
    const modRequiredInput = canvas.getByRole('textbox', {
      name: 'Ctrl/Alt/Shift 조합만 허용'
    });
    await userEvent.click(modRequiredInput);
    await fireEvent.keyDown(modRequiredInput, {
      key: 'a',
      code: 'KeyA'
    });
    await expect(modRequiredInput).toHaveAttribute('aria-label', 'Ctrl/Alt/Shift 조합만 허용');
    await fireEvent.keyDown(modRequiredInput, {
      key: 'k',
      code: 'KeyK',
      ctrlKey: true
    });
    await expect(modRequiredInput).toHaveAttribute('aria-label', 'Ctrl/Alt/Shift 조합만 허용: Ctrl+K');

    // 3) macOS 플랫폼 분기(⌘ 토큰) 커버
    const originalUa = Object.getOwnPropertyDescriptor(Navigator.prototype, 'userAgent');
    const originalUaData = Object.getOwnPropertyDescriptor(Navigator.prototype, 'userAgentData');
    try {
      Object.defineProperty(Navigator.prototype, 'userAgentData', {
        configurable: true,
        get: () => undefined
      });
      Object.defineProperty(Navigator.prototype, 'userAgent', {
        configurable: true,
        get: () => 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'
      });
      await userEvent.click(canvas.getByRole('button', {
        name: 'macOS 단축키 마운트'
      }));
      await expect(canvas.getByRole('textbox', {
        name: '맥 단축키: ⌘+K'
      })).toBeInTheDocument();
    } finally {
      if (originalUa) {
        Object.defineProperty(Navigator.prototype, 'userAgent', originalUa);
      }
      if (originalUaData) {
        Object.defineProperty(Navigator.prototype, 'userAgentData', originalUaData);
      }
    }
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'md',
    clearable: true,
    allowSingleKey: true,
    disabled: false,
    readOnly: false
  },
  render: args => <ControlledShortcutDemo {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await userEvent.click(input);
    await fireEvent.keyDown(input, {
      key: 's',
      code: 'KeyS',
      ctrlKey: true
    });
    await expect(canvas.getByText(/"key": "S"/)).toBeInTheDocument();
  }
}`,...H.parameters?.docs?.source}}}})))()}W();export{H as Controlled,R as Default,z as Sizes,V as States,B as Variants,U as __namedExportsOrder,L as default};