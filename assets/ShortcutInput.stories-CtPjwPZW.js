import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-Df_aBerc.js";import{c as r,t as i}from"./utils-CZPXqhZZ.js";import{n as a,t as o}from"./dist-DESTAmSO.js";import{i as s,y as c}from"./icons-LA6d5ptK.js";import{n as l,t as u}from"./useMergedRef-gb_fjS_c.js";function d(){}function f(){return d}function ee(){let e=globalThis.navigator,t=e?.userAgentData?.platform??e?.userAgent??``;return C.test(t)}function p(){return!1}function te(e){return e.ctrlKey||e.altKey||e.shiftKey||e.metaKey}function m(e){if(e.code.startsWith(`Key`))return e.code.slice(3).toUpperCase();if(e.code.startsWith(`Digit`))return e.code.slice(5);if(e.code.startsWith(`Numpad`))return`Num${e.code.slice(6)}`;let t=T.get(e.code);if(t!==void 0)return t;let n=T.get(e.key);return n===void 0?S.test(e.key)||e.key.length===1?e.key.toUpperCase():e.key:n}function h(e){return w.has(e.key)?null:{ctrlOrMeta:e.ctrlKey||e.metaKey,alt:e.altKey,shift:e.shiftKey,key:m(e)}}function g(e,t){let n=[];return e.ctrlOrMeta&&n.push({id:`ctrl`,label:t?`⌘`:`Ctrl`}),e.alt&&n.push({id:`alt`,label:`Alt`}),e.shift&&n.push({id:`shift`,label:`Shift`}),e.key&&n.push({id:`key`,label:e.key}),n}function _({value:e,size:t,disabled:n,isRecording:r,isMac:a,placeholder:o,recordingPlaceholder:s}){let c=r?(0,b.jsx)(`span`,{className:i(`inline-block w-px shrink-0 bg-secondary-foreground motion-safe:animate-caret-blink`,t===`sm`?`h-3`:`h-3.5`)},`shortcut-caret`):null,l=e?g(e,a):[];return l.length===0?(0,b.jsxs)(`div`,{className:`flex items-center gap-1 overflow-hidden`,children:[c,(0,b.jsx)(`span`,{className:i(`truncate`,r?`text-primary`:`text-text-disabled`),children:r?s:o})]}):(0,b.jsxs)(`div`,{className:`flex items-center gap-1.5 overflow-hidden`,children:[l.map((e,r)=>(0,b.jsxs)(`span`,{className:`inline-flex shrink-0 items-center gap-1.5`,children:[r>0&&(0,b.jsx)(`span`,{className:`text-2xs font-medium text-muted-foreground`,children:`+`}),(0,b.jsx)(`kbd`,{className:i(`inline-flex items-center justify-center rounded-[3px] border border-b-2 border-secondary-border bg-surface-muted px-1.5 font-sans text-2xs font-medium text-secondary-foreground shadow-[0_1px_1px_rgba(0,0,0,0.06)]`,t===`sm`?`h-3.5 min-w-4 px-1 leading-none`:`h-4.75 min-w-4.75 leading-none`,n&&`border-b border-border-disabled bg-transparent text-muted-foreground shadow-none`),children:e.label})]},e.id)),c]})}function v({size:e=`md`,variant:t=`default`,value:n,defaultValue:r=null,placeholder:a=`단축키 입력`,recordingPlaceholder:o=`키 조합을 누르세요...`,disabled:c=!1,readOnly:u=!1,clearable:m=!0,allowSingleKey:v=!0,className:C,wrapperClassName:w,onChange:T,onClear:E,onKeyDown:D,onFocus:O,onBlur:k,ref:A,style:j,"aria-label":M,"aria-describedby":N,...P}){let F=n!==void 0,[I,L]=(0,y.useState)(r),[ne,R]=(0,y.useState)(!1),[re,z]=(0,y.useState)(!1),B=(0,y.useRef)(null),V=(0,y.useId)(),H=(0,y.useSyncExternalStore)(f,ee,p),U=F?n:I,W=!!U?.key,G=!c&&!u,K=ne&&G,q=m&&G&&W&&re,J=e=>{F||L(e),T?.(e)},Y=e=>{e.stopPropagation(),e.preventDefault(),J(null),E?.(),B.current?.focus()},ie=e=>{if(D?.(e),e.defaultPrevented||!G||e.nativeEvent.isComposing||e.key===`Process`||e.key===`Tab`)return;e.preventDefault(),e.stopPropagation();let t=h(e);if(!t)return;let n=S.test(e.key);(v||te(e)||n)&&J(t)},X=e=>{e.currentTarget.contains(e.relatedTarget)||z(!1)},Z=W&&U?g(U,H).map(e=>e.label).join(`+`):``,ae=Z?`${a}: ${Z}`:a,oe=[N,V].filter(Boolean).join(` `),Q,$=`right-1.75`;q&&(Q=e===`sm`?`pr-6`:`pr-7`,$=e===`sm`?`right-6`:`right-7`);let se=l(B,A);return(0,b.jsxs)(`div`,{onFocusCapture:()=>{G&&z(!0)},onBlurCapture:X,className:i(`relative box-border flex w-full items-center`,w),children:[(0,b.jsx)(`input`,{ref:se,type:`text`,readOnly:u,disabled:c,"aria-label":M??ae,"aria-describedby":oe,value:``,onChange:d,onBeforeInput:e=>e.preventDefault(),onPaste:e=>e.preventDefault(),onCut:e=>e.preventDefault(),style:{...j,caretColor:`transparent`},onFocus:e=>{G&&R(!0),O?.(e)},onBlur:e=>{R(!1),k?.(e)},onKeyDown:ie,spellCheck:!1,autoComplete:`off`,className:i(x({variant:t,size:e}),`caret-transparent selection:bg-transparent`,G&&`cursor-pointer`,Q,C),...P}),(0,b.jsx)(`span`,{id:V,"aria-live":`polite`,className:`sr-only`,children:K?o:``}),(0,b.jsx)(`div`,{"aria-hidden":`true`,className:i(`pointer-events-none absolute inset-y-0 left-2 flex items-center overflow-hidden font-sans text-xs`,$),children:(0,b.jsx)(_,{value:U,size:e,disabled:c,isRecording:K,isMac:H,placeholder:a,recordingPlaceholder:o})}),q&&(0,b.jsx)(`div`,{className:`absolute top-1/2 right-1.5 flex -translate-y-1/2 items-center text-secondary-border-active`,children:(0,b.jsx)(`button`,{type:`button`,"aria-label":`단축키 지우기`,onMouseDown:e=>e.preventDefault(),onClick:Y,className:`flex size-4 cursor-pointer items-center justify-center rounded-none border-0 bg-transparent p-0 text-text-disabled hover:text-secondary-foreground focus-visible:outline-default`,children:(0,b.jsx)(s,{})})})]})}var y,b,x,S,C,w,T;function E(){return(E=e((()=>{y=t(),a(),u(),r(),c(),b=n(),x=o([`w-full font-sans`,`box-border block rounded-none border text-xs font-normal shadow-none transition-colors outline-none select-none`,`border-secondary-border bg-white px-1.75 py-1 text-secondary-foreground`,`not-disabled:not-read-only:hover:border-secondary-border-hover`,`not-disabled:not-read-only:focus:border-primary focus-visible:outline-none not-disabled:not-read-only:active:border-primary`,`read-only:not-disabled:cursor-default read-only:not-disabled:border-secondary-border read-only:not-disabled:text-muted-foreground read-only:not-disabled:focus:border-secondary-border-active`,`disabled:cursor-not-allowed disabled:border-border-disabled disabled:bg-surface-muted/50 disabled:text-muted-foreground`],{variants:{variant:{default:``,ghost:[`border-transparent bg-transparent`,`not-disabled:not-read-only:hover:border-transparent not-disabled:not-read-only:focus:border-transparent not-disabled:not-read-only:active:border-transparent`,`disabled:border-transparent disabled:bg-transparent`,`read-only:not-disabled:border-transparent read-only:not-disabled:focus:border-transparent`]},size:{sm:`min-h-5.25 py-0.5 leading-3.75`,md:`min-h-6.75 py-1 leading-4.25`,lg:`min-h-8 py-1.5 leading-4.5`}},defaultVariants:{variant:`default`,size:`md`}}),S=/^F([1-9]|1\d|2[0-4])$/,C=/Mac|iPhone|iPad|iPod/i,w=new Set([`Control`,`Shift`,`Alt`,`Meta`,`CapsLock`,`NumLock`,`ScrollLock`,`Dead`,`Unidentified`]),T=new Map([[` `,`Space`],[`Space`,`Space`],[`Spacebar`,`Space`],[`ArrowUp`,`Up`],[`ArrowDown`,`Down`],[`ArrowLeft`,`Left`],[`ArrowRight`,`Right`],[`Escape`,`Esc`],[`Delete`,`Del`],[`Backspace`,`Backspace`],[`Insert`,`Ins`],[`PageUp`,`PgUp`],[`PageDown`,`PgDn`],[`Backquote`,"`"],[`Minus`,`-`],[`Equal`,`=`],[`BracketLeft`,`[`],[`BracketRight`,`]`],[`Backslash`,`\\`],[`Semicolon`,`;`],[`Quote`,`'`],[`Comma`,`,`],[`Period`,`.`],[`Slash`,`/`]]),v.__docgenInfo={description:``,methods:[],displayName:`ShortcutInput`,props:{size:{defaultValue:{value:`'md'`,computed:!1},required:!1},variant:{defaultValue:{value:`'default'`,computed:!1},required:!1},defaultValue:{defaultValue:{value:`null`,computed:!1},required:!1},placeholder:{defaultValue:{value:`'단축키 입력'`,computed:!1},required:!1},recordingPlaceholder:{defaultValue:{value:`'키 조합을 누르세요...'`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},readOnly:{defaultValue:{value:`false`,computed:!1},required:!1},clearable:{defaultValue:{value:`true`,computed:!1},required:!1},allowSingleKey:{defaultValue:{value:`true`,computed:!1},required:!1}}}})))()}var D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{D=t(),E(),O=n(),k={title:`Components/ShortcutInput`,component:v,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:"`ShortcutInput`은 키보드 단축키 조합을 캡처하고 구조화된 `ShortcutKey` 객체(`{ ctrlOrMeta, shift, alt, key }`)로 관리하는 입력 컴포넌트입니다."}}},argTypes:{variant:{control:`radio`,options:[`default`,`ghost`],description:`입력 필드의 스타일 변형입니다.`,table:{type:{summary:`'default' | 'ghost'`},defaultValue:{summary:`'default'`}}},size:{control:`radio`,options:[`sm`,`md`,`lg`],description:`입력 필드의 높이 및 내부 키캡 크기입니다.`,table:{type:{summary:`'sm' | 'md' | 'lg'`},defaultValue:{summary:`'md'`}}},placeholder:{control:`text`,description:`값이 비어 있을 때 표시되는 기본 안내 문구입니다.`,table:{type:{summary:`string`},defaultValue:{summary:`'단축키 입력'`}}},recordingPlaceholder:{control:`text`,description:`포커스되어 키 입력을 대기 중일 때 표시되는 안내 문구입니다.`,table:{type:{summary:`string`},defaultValue:{summary:`'키 조합을 누르세요...'`}}},clearable:{control:`boolean`,description:`포커스 상태에서 우측 초기화(Clear) 버튼 표시 여부입니다.`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},allowSingleKey:{control:`boolean`,description:"수정자 키(Ctrl/Alt/Shift/Meta) 없이 단독 키 입력을 허용할지 여부입니다. (`F1`~`F12`는 항상 허용)",table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},disabled:{control:`boolean`,description:`비활성화 상태 여부입니다.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},readOnly:{control:`boolean`,description:`읽기 전용 상태 여부입니다.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onChange:{action:`changed`,description:`단축키 객체가 변경되거나 초기화(null)될 때 호출됩니다.`},onClear:{action:`cleared`,description:`초기화(Clear) 버튼을 클릭했을 때 호출됩니다.`}},decorators:[e=>(0,O.jsx)(`div`,{className:`w-60`,children:(0,O.jsx)(e,{})})]},A={args:{defaultValue:{ctrlOrMeta:!0,shift:!0,alt:!1,key:`S`},variant:`default`,size:`md`,clearable:!0,allowSingleKey:!0,disabled:!1,readOnly:!1}},j={render:()=>(0,O.jsxs)(`div`,{className:`flex flex-col gap-4 font-sans text-xs`,children:[(0,O.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,O.jsx)(`span`,{className:`text-muted-foreground`,children:`Small (sm)`}),(0,O.jsx)(v,{size:`sm`,defaultValue:{ctrlOrMeta:!0,shift:!1,alt:!1,key:`S`}})]}),(0,O.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,O.jsx)(`span`,{className:`text-muted-foreground`,children:`Medium (md)`}),(0,O.jsx)(v,{size:`md`,defaultValue:{ctrlOrMeta:!0,shift:!0,alt:!1,key:`P`}})]}),(0,O.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,O.jsx)(`span`,{className:`text-muted-foreground`,children:`Large (lg)`}),(0,O.jsx)(v,{size:`lg`,defaultValue:{ctrlOrMeta:!0,shift:!1,alt:!0,key:`Del`}})]})]})},M={render:()=>(0,O.jsxs)(`div`,{className:`flex flex-col gap-4 font-sans text-xs`,children:[(0,O.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,O.jsx)(`span`,{className:`text-muted-foreground`,children:`Default`}),(0,O.jsx)(v,{variant:`default`,defaultValue:{ctrlOrMeta:!0,shift:!1,alt:!1,key:`C`}})]}),(0,O.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,O.jsx)(`span`,{className:`text-muted-foreground`,children:`Ghost (테이블/인라인 편집용)`}),(0,O.jsx)(`div`,{className:`border border-secondary-border bg-surface-muted/40 p-1`,children:(0,O.jsx)(v,{variant:`ghost`,defaultValue:{ctrlOrMeta:!0,shift:!1,alt:!1,key:`V`}})})]})]})},N={render:()=>(0,O.jsxs)(`div`,{className:`flex flex-col gap-4 font-sans text-xs`,children:[(0,O.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,O.jsx)(`span`,{className:`text-muted-foreground`,children:`Empty (Placeholder)`}),(0,O.jsx)(v,{placeholder:`클릭 후 단축키 입력`})]}),(0,O.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,O.jsx)(`span`,{className:`text-muted-foreground`,children:`Modifier Required (allowSingleKey=false)`}),(0,O.jsx)(v,{allowSingleKey:!1,placeholder:`Ctrl/Alt/Shift 조합만 허용`})]}),(0,O.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,O.jsx)(`span`,{className:`text-muted-foreground`,children:`ReadOnly`}),(0,O.jsx)(v,{readOnly:!0,value:{ctrlOrMeta:!0,shift:!1,alt:!1,key:`Z`}})]}),(0,O.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,O.jsx)(`span`,{className:`text-muted-foreground`,children:`Disabled`}),(0,O.jsx)(v,{disabled:!0,value:{ctrlOrMeta:!0,shift:!1,alt:!1,key:`Y`}})]})]})},P={args:{variant:`default`,size:`md`,clearable:!0,allowSingleKey:!0,disabled:!1,readOnly:!1},render:e=>{let[t,n]=(0,D.useState)({ctrlOrMeta:!0,shift:!0,alt:!1,key:`Z`});return(0,O.jsxs)(`div`,{className:`flex flex-col gap-3 font-sans`,children:[(0,O.jsx)(v,{...e,value:t,onChange:n}),(0,O.jsxs)(`div`,{className:`flex flex-col gap-1 border border-secondary-border bg-surface-muted p-2.5 text-compact text-secondary-foreground`,children:[(0,O.jsx)(`span`,{className:`text-2xs text-muted-foreground`,children:`저장된 객체:`}),(0,O.jsx)(`pre`,{className:`m-0 font-mono text-2xs text-primary`,children:t?JSON.stringify(t,null,2):`null`})]})]})}},F=[`Default`,`Sizes`,`Variants`,`States`,`Controlled`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
    </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'md',
    clearable: true,
    allowSingleKey: true,
    disabled: false,
    readOnly: false
  },
  render: args => {
    const [shortcut, setShortcut] = useState<ShortcutKey | null>({
      ctrlOrMeta: true,
      shift: true,
      alt: false,
      key: 'Z'
    });
    return <div className="flex flex-col gap-3 font-sans">
        <ShortcutInput {...args} value={shortcut} onChange={setShortcut} />

        <div className="flex flex-col gap-1 border border-secondary-border bg-surface-muted p-2.5 text-compact text-secondary-foreground">
          <span className="text-2xs text-muted-foreground">저장된 객체:</span>
          <pre className="m-0 font-mono text-2xs text-primary">
            {shortcut ? JSON.stringify(shortcut, null, 2) : 'null'}
          </pre>
        </div>
      </div>;
  }
}`,...P.parameters?.docs?.source}}}})))()}I();export{P as Controlled,A as Default,j as Sizes,N as States,M as Variants,F as __namedExportsOrder,k as default};