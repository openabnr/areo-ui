import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-sFfd_MYY.js";import{c as r,t as i}from"./utils-CynS5U15.js";import{n as a,t as o}from"./dist-kEwxpQyq.js";import{b as s,i as c}from"./icons-D0ots2Hf.js";import{n as l,t as u}from"./useMergedRef-ay18fnn7.js";function d(){}function ee(){return d}function f(){let e=globalThis.navigator,t=e?.userAgentData?.platform??e?.userAgent??``;return S.test(t)}function p(){return!1}function te(e){return e.ctrlKey||e.altKey||e.shiftKey||e.metaKey}function m(e){if(e.code.startsWith(`Key`))return e.code.slice(3).toUpperCase();if(e.code.startsWith(`Digit`))return e.code.slice(5);if(e.code.startsWith(`Numpad`))return`Num${e.code.slice(6)}`;let t=w.get(e.code);if(t!==void 0)return t;let n=w.get(e.key);return n===void 0?x.test(e.key)||e.key.length===1?e.key.toUpperCase():e.key:n}function ne(e){return C.has(e.key)?null:{ctrlOrMeta:e.ctrlKey||e.metaKey,alt:e.altKey,shift:e.shiftKey,key:m(e)}}function h(e,t){let n=[];return e.ctrlOrMeta&&n.push({id:`ctrl`,label:t?`⌘`:`Ctrl`}),e.alt&&n.push({id:`alt`,label:`Alt`}),e.shift&&n.push({id:`shift`,label:`Shift`}),e.key&&n.push({id:`key`,label:e.key}),n}function g({value:e,size:t,disabled:n,isRecording:r,isMac:a,placeholder:o,recordingPlaceholder:s}){let c=r?(0,y.jsx)(`span`,{className:i(`inline-block w-px shrink-0 bg-secondary-foreground motion-safe:animate-caret-blink`,t===`sm`?`h-3`:`h-3.5`)},`shortcut-caret`):null,l=e?h(e,a):[];return l.length===0?(0,y.jsxs)(`div`,{className:`flex items-center gap-1 overflow-hidden`,children:[c,(0,y.jsx)(`span`,{className:i(`truncate`,r?`text-primary`:`text-text-disabled`),children:r?s:o})]}):(0,y.jsxs)(`div`,{className:`flex items-center gap-1.5 overflow-hidden`,children:[l.map((e,r)=>(0,y.jsxs)(`span`,{className:`inline-flex shrink-0 items-center gap-1.5`,children:[r>0&&(0,y.jsx)(`span`,{className:`text-2xs font-medium text-muted-foreground`,children:`+`}),(0,y.jsx)(`kbd`,{className:i(`inline-flex items-center justify-center rounded-[3px] border border-b-2 border-secondary-border bg-surface-muted px-1.5 font-sans text-2xs font-medium text-secondary-foreground shadow-[0_1px_1px_rgba(0,0,0,0.06)]`,t===`sm`?`h-3.5 min-w-4 px-1 leading-none`:`h-4.75 min-w-4.75 leading-none`,n&&`border-b border-border-disabled bg-transparent text-muted-foreground shadow-none`),children:e.label})]},e.id)),c]})}function _({size:e=`md`,variant:t=`default`,value:n,defaultValue:r=null,placeholder:a=`단축키 입력`,recordingPlaceholder:o=`키 조합을 누르세요...`,disabled:s=!1,readOnly:u=!1,clearable:m=!0,allowSingleKey:_=!0,className:S,wrapperClassName:C,onChange:w,onClear:T,onKeyDown:E,onFocus:D,onBlur:O,ref:k,style:A,"aria-label":j,"aria-describedby":M,...N}){let P=n!==void 0,[F,I]=(0,v.useState)(r),[L,R]=(0,v.useState)(!1),[z,B]=(0,v.useState)(!1),V=(0,v.useRef)(null),H=(0,v.useId)(),U=(0,v.useSyncExternalStore)(ee,f,p),W=P?n:F,G=!!W?.key,K=!s&&!u,q=L&&K,J=m&&K&&G&&z,Y=e=>{P||I(e),w?.(e)},X=e=>{e.stopPropagation(),e.preventDefault(),Y(null),T?.(),V.current?.focus()},re=e=>{if(E?.(e),e.defaultPrevented||!K||e.nativeEvent.isComposing||e.key===`Process`||e.key===`Tab`)return;e.preventDefault(),e.stopPropagation();let t=ne(e);if(!t)return;let n=x.test(e.key);(_||te(e)||n)&&Y(t)},ie=e=>{e.currentTarget.contains(e.relatedTarget)||B(!1)},Z=G&&W?h(W,U).map(e=>e.label).join(`+`):``,ae=Z?`${a}: ${Z}`:a,oe=[M,H].filter(Boolean).join(` `),Q,$=`right-1.75`;J&&(Q=e===`sm`?`pr-6`:`pr-7`,$=e===`sm`?`right-6`:`right-7`);let se=l(V,k);return(0,y.jsxs)(`div`,{onFocusCapture:()=>{K&&B(!0)},onBlurCapture:ie,className:i(`relative box-border flex w-full items-center`,C),children:[(0,y.jsx)(`input`,{ref:se,type:`text`,readOnly:u,disabled:s,"aria-label":j??ae,"aria-describedby":oe,value:``,onChange:d,onBeforeInput:e=>e.preventDefault(),onPaste:e=>e.preventDefault(),onCut:e=>e.preventDefault(),style:{...A,caretColor:`transparent`},onFocus:e=>{K&&R(!0),D?.(e)},onBlur:e=>{R(!1),O?.(e)},onKeyDown:re,spellCheck:!1,autoComplete:`off`,className:i(b({variant:t,size:e}),`caret-transparent selection:bg-transparent`,K&&`cursor-pointer`,Q,S),...N}),(0,y.jsx)(`span`,{id:H,"aria-live":`polite`,className:`sr-only`,children:q?o:``}),(0,y.jsx)(`div`,{"aria-hidden":`true`,className:i(`pointer-events-none absolute inset-y-0 left-2 flex items-center overflow-hidden font-sans text-xs`,$),children:(0,y.jsx)(g,{value:W,size:e,disabled:s,isRecording:q,isMac:U,placeholder:a,recordingPlaceholder:o})}),J&&(0,y.jsx)(`div`,{className:`absolute top-1/2 right-1.5 flex -translate-y-1/2 items-center text-secondary-border-active`,children:(0,y.jsx)(`button`,{type:`button`,"aria-label":`단축키 지우기`,onMouseDown:e=>e.preventDefault(),onClick:X,className:`flex size-4 cursor-pointer items-center justify-center rounded-none border-0 bg-transparent p-0 text-text-disabled hover:text-secondary-foreground focus-visible:focus-double-ring focus-visible:outline-offset-1`,children:(0,y.jsx)(c,{})})})]})}var v,y,b,x,S,C,w;function T(){return(T=e((()=>{v=t(),a(),u(),r(),s(),y=n(),b=o([`w-full font-sans`,`box-border block rounded-none border text-xs font-normal shadow-none transition-colors outline-none select-none`,`border-secondary-border bg-white px-1.75 py-1 text-secondary-foreground`,`not-disabled:not-read-only:hover:border-secondary-border-hover`,`not-disabled:not-read-only:focus:border-primary focus-visible:outline-none not-disabled:not-read-only:active:border-primary`,`read-only:not-disabled:cursor-default read-only:not-disabled:border-secondary-border read-only:not-disabled:text-muted-foreground read-only:not-disabled:focus:border-secondary-border-active`,`disabled:cursor-not-allowed disabled:border-border-disabled disabled:bg-surface-muted/50 disabled:text-muted-foreground`],{variants:{variant:{default:``,ghost:[`border-transparent bg-transparent`,`not-disabled:not-read-only:hover:border-transparent not-disabled:not-read-only:focus:border-transparent not-disabled:not-read-only:active:border-transparent`,`disabled:border-transparent disabled:bg-transparent`,`read-only:not-disabled:border-transparent read-only:not-disabled:focus:border-transparent`]},size:{sm:`min-h-5.25 py-0.5 leading-3.75`,md:`min-h-6.75 py-1 leading-4.25`,lg:`min-h-8 py-1.5 leading-4.5`}},defaultVariants:{variant:`default`,size:`md`}}),x=/^F([1-9]|1\d|2[0-4])$/,S=/Mac|iPhone|iPad|iPod/i,C=new Set([`Control`,`Shift`,`Alt`,`Meta`,`CapsLock`,`NumLock`,`ScrollLock`,`Dead`,`Unidentified`]),w=new Map([[` `,`Space`],[`Space`,`Space`],[`Spacebar`,`Space`],[`ArrowUp`,`Up`],[`ArrowDown`,`Down`],[`ArrowLeft`,`Left`],[`ArrowRight`,`Right`],[`Escape`,`Esc`],[`Delete`,`Del`],[`Backspace`,`Backspace`],[`Insert`,`Ins`],[`PageUp`,`PgUp`],[`PageDown`,`PgDn`],[`Backquote`,"`"],[`Minus`,`-`],[`Equal`,`=`],[`BracketLeft`,`[`],[`BracketRight`,`]`],[`Backslash`,`\\`],[`Semicolon`,`;`],[`Quote`,`'`],[`Comma`,`,`],[`Period`,`.`],[`Slash`,`/`]]),_.__docgenInfo={description:``,methods:[],displayName:`ShortcutInput`,props:{size:{defaultValue:{value:`'md'`,computed:!1},required:!1},variant:{defaultValue:{value:`'default'`,computed:!1},required:!1},defaultValue:{defaultValue:{value:`null`,computed:!1},required:!1},placeholder:{defaultValue:{value:`'단축키 입력'`,computed:!1},required:!1},recordingPlaceholder:{defaultValue:{value:`'키 조합을 누르세요...'`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},readOnly:{defaultValue:{value:`false`,computed:!1},required:!1},clearable:{defaultValue:{value:`true`,computed:!1},required:!1},allowSingleKey:{defaultValue:{value:`true`,computed:!1},required:!1}}}})))()}function E(e){let[t,n]=(0,D.useState)({ctrlOrMeta:!0,shift:!0,alt:!1,key:`Z`});return(0,O.jsxs)(`div`,{className:`flex flex-col gap-3 font-sans`,children:[(0,O.jsx)(_,{...e,value:t,onChange:t=>{n(t),e.onChange?.(t)}}),(0,O.jsxs)(`div`,{className:`flex flex-col gap-1 border border-secondary-border bg-surface-muted p-2.5 text-compact text-secondary-foreground`,children:[(0,O.jsx)(`span`,{className:`text-2xs text-muted-foreground`,children:`저장된 객체:`}),(0,O.jsx)(`pre`,{className:`m-0 font-mono text-2xs text-primary`,children:t?JSON.stringify(t,null,2):`null`})]})]})}var D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{D=t(),T(),O=n(),{expect:k,fireEvent:A,fn:j,userEvent:M,within:N}=__STORYBOOK_MODULE_TEST__,P={title:`Components/ShortcutInput`,component:_,tags:[`autodocs`],args:{onChange:j(),onClear:j()},parameters:{layout:`centered`},argTypes:{variant:{control:`radio`,options:[`default`,`ghost`],description:`입력 필드의 스타일 변형입니다.`},size:{control:`radio`,options:[`sm`,`md`,`lg`],description:`입력 필드의 높이 및 내부 키캡 크기입니다.`},placeholder:{control:`text`,description:`값이 비어 있을 때 표시되는 기본 안내 문구입니다.`},recordingPlaceholder:{control:`text`,description:`포커스되어 키 입력을 대기 중일 때 표시되는 안내 문구입니다.`},clearable:{control:`boolean`,description:`포커스 상태에서 우측 초기화(Clear) 버튼 표시 여부입니다.`},allowSingleKey:{control:`boolean`,description:`수정자 키(Ctrl/Alt/Shift/Meta) 없이 단독 키 입력을 허용할지 여부입니다.`},disabled:{control:`boolean`,description:`비활성화 상태 여부입니다.`},readOnly:{control:`boolean`,description:`읽기 전용 상태 여부입니다.`}},decorators:[e=>(0,O.jsx)(`div`,{className:`w-60`,children:(0,O.jsx)(e,{})})]},F={args:{defaultValue:{ctrlOrMeta:!0,shift:!0,alt:!1,key:`S`},variant:`default`,size:`md`,clearable:!0,allowSingleKey:!0,disabled:!1,readOnly:!1},play:async({canvasElement:e,args:t})=>{let n=N(e),r=n.getByRole(`textbox`);await M.click(r);let i=n.getByRole(`button`,{name:`단축키 지우기`});await M.click(i),await k(t.onClear).toHaveBeenCalledTimes(1),await k(t.onChange).toHaveBeenLastCalledWith(null),await A.keyDown(r,{key:`Control`,code:`ControlLeft`}),await k(t.onChange).toHaveBeenCalledTimes(1),await A.keyDown(r,{key:`a`,code:`KeyA`,ctrlKey:!0,altKey:!0,shiftKey:!0}),await k(t.onChange).toHaveBeenLastCalledWith({ctrlOrMeta:!0,alt:!0,shift:!0,key:`A`}),await A.keyDown(r,{key:`1`,code:`Digit1`}),await k(t.onChange).toHaveBeenLastCalledWith({ctrlOrMeta:!1,alt:!1,shift:!1,key:`1`}),await A.keyDown(r,{key:`5`,code:`Numpad5`}),await k(t.onChange).toHaveBeenLastCalledWith({ctrlOrMeta:!1,alt:!1,shift:!1,key:`Num5`}),await A.keyDown(r,{key:` `,code:`Space`}),await k(t.onChange).toHaveBeenLastCalledWith({ctrlOrMeta:!1,alt:!1,shift:!1,key:`Space`}),await A.keyDown(r,{key:`ArrowUp`,code:``}),await k(t.onChange).toHaveBeenLastCalledWith({ctrlOrMeta:!1,alt:!1,shift:!1,key:`Up`}),await A.keyDown(r,{key:`F5`,code:`F5`}),await k(t.onChange).toHaveBeenLastCalledWith({ctrlOrMeta:!1,alt:!1,shift:!1,key:`F5`}),await A.keyDown(r,{key:`?`,code:``}),await k(t.onChange).toHaveBeenLastCalledWith({ctrlOrMeta:!1,alt:!1,shift:!1,key:`?`}),await A.keyDown(r,{key:`Home`,code:`Home`}),await k(t.onChange).toHaveBeenLastCalledWith({ctrlOrMeta:!1,alt:!1,shift:!1,key:`Home`}),await A(r,new InputEvent(`beforeinput`,{data:`x`,cancelable:!0})),await A.paste(r),await A.cut(r),await A.keyDown(r,{key:`Tab`,code:`Tab`}),await A.blur(r)}},I={render:()=>(0,O.jsxs)(`div`,{className:`flex flex-col gap-4 font-sans text-xs`,children:[(0,O.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,O.jsx)(`span`,{className:`text-muted-foreground`,children:`Small (sm)`}),(0,O.jsx)(_,{size:`sm`,defaultValue:{ctrlOrMeta:!0,shift:!1,alt:!1,key:`S`}})]}),(0,O.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,O.jsx)(`span`,{className:`text-muted-foreground`,children:`Medium (md)`}),(0,O.jsx)(_,{size:`md`,defaultValue:{ctrlOrMeta:!0,shift:!0,alt:!1,key:`P`}})]}),(0,O.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,O.jsx)(`span`,{className:`text-muted-foreground`,children:`Large (lg)`}),(0,O.jsx)(_,{size:`lg`,defaultValue:{ctrlOrMeta:!0,shift:!1,alt:!0,key:`Del`}})]})]}),play:async({canvasElement:e})=>{let t=N(e).getAllByRole(`textbox`);await M.click(t[0])}},L={render:()=>(0,O.jsxs)(`div`,{className:`flex flex-col gap-4 font-sans text-xs`,children:[(0,O.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,O.jsx)(`span`,{className:`text-muted-foreground`,children:`Default`}),(0,O.jsx)(_,{variant:`default`,defaultValue:{ctrlOrMeta:!0,shift:!1,alt:!1,key:`C`}})]}),(0,O.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,O.jsx)(`span`,{className:`text-muted-foreground`,children:`Ghost (테이블/인라인 편집용)`}),(0,O.jsx)(`div`,{className:`border border-secondary-border bg-surface-muted/40 p-1`,children:(0,O.jsx)(_,{variant:`ghost`,defaultValue:{ctrlOrMeta:!0,shift:!1,alt:!1,key:`V`}})})]})]})},R={render:()=>(0,O.jsxs)(`div`,{className:`flex flex-col gap-4 font-sans text-xs`,children:[(0,O.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,O.jsx)(`span`,{className:`text-muted-foreground`,children:`Empty (Placeholder)`}),(0,O.jsx)(_,{placeholder:`클릭 후 단축키 입력`})]}),(0,O.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,O.jsx)(`span`,{className:`text-muted-foreground`,children:`Modifier Required (allowSingleKey=false)`}),(0,O.jsx)(_,{allowSingleKey:!1,placeholder:`Ctrl/Alt/Shift 조합만 허용`})]}),(0,O.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,O.jsx)(`span`,{className:`text-muted-foreground`,children:`ReadOnly`}),(0,O.jsx)(_,{readOnly:!0,value:{ctrlOrMeta:!0,shift:!1,alt:!1,key:`Z`}})]}),(0,O.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,O.jsx)(`span`,{className:`text-muted-foreground`,children:`Disabled`}),(0,O.jsx)(_,{disabled:!0,value:{ctrlOrMeta:!0,shift:!1,alt:!1,key:`Y`}})]})]}),play:async({canvasElement:e})=>{let t=N(e).getByRole(`textbox`,{name:`Ctrl/Alt/Shift 조합만 허용`});await M.click(t),await A.keyDown(t,{key:`a`,code:`KeyA`}),await k(t).toHaveAttribute(`aria-label`,`Ctrl/Alt/Shift 조합만 허용`),await A.keyDown(t,{key:`k`,code:`KeyK`,ctrlKey:!0}),await k(t).toHaveAttribute(`aria-label`,`Ctrl/Alt/Shift 조합만 허용: Ctrl+K`)}},z={args:{variant:`default`,size:`md`,clearable:!0,allowSingleKey:!0,disabled:!1,readOnly:!1},render:e=>(0,O.jsx)(E,{...e}),play:async({canvasElement:e})=>{let t=N(e),n=t.getByRole(`textbox`);await M.click(n),await A.keyDown(n,{key:`s`,code:`KeyS`,ctrlKey:!0}),await k(t.getByText(/"key": "S"/)).toBeInTheDocument()}},B=[`Default`,`Sizes`,`Variants`,`States`,`Controlled`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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

    // 4) beforeInput, paste, cut, Tab 차단 및 blur 처리
    await fireEvent(input, new InputEvent('beforeinput', {
      data: 'x',
      cancelable: true
    }));
    await fireEvent.paste(input);
    await fireEvent.cut(input);
    await fireEvent.keyDown(input, {
      key: 'Tab',
      code: 'Tab'
    });
    await fireEvent.blur(input);
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 font-sans text-xs">
      <div className="flex flex-col gap-1">
        <span className="text-muted-foreground">Empty (Placeholder)</span>
        <ShortcutInput placeholder="클릭 후 단축키 입력" />
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
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const modRequiredInput = canvas.getByRole('textbox', {
      name: 'Ctrl/Alt/Shift 조합만 허용'
    });
    await userEvent.click(modRequiredInput);
    // 수정자 없는 단독 키('A') -> 무시되어야 함
    await fireEvent.keyDown(modRequiredInput, {
      key: 'a',
      code: 'KeyA'
    });
    await expect(modRequiredInput).toHaveAttribute('aria-label', 'Ctrl/Alt/Shift 조합만 허용');

    // 수정자 포함 키('Ctrl+K') -> 허용되어야 함
    await fireEvent.keyDown(modRequiredInput, {
      key: 'k',
      code: 'KeyK',
      ctrlKey: true
    });
    await expect(modRequiredInput).toHaveAttribute('aria-label', 'Ctrl/Alt/Shift 조합만 허용: Ctrl+K');
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}}})))()}V();export{z as Controlled,F as Default,I as Sizes,R as States,L as Variants,B as __namedExportsOrder,P as default};