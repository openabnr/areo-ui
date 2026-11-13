import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-BKXkO2qw.js";import{c as r,l as i,t as a}from"./utils-Cjde27Em.js";import{n as o,t as s}from"./dist-81uMrw1m.js";import{i as c,y as l}from"./icons-C_cPlx2o.js";function u(e){return e.ctrlKey||e.altKey||e.shiftKey||e.metaKey}function d(e){return e.code.startsWith(`Key`)?e.code.slice(3).toUpperCase():e.code.startsWith(`Digit`)?e.code.slice(5):e.code.startsWith(`Numpad`)?`Num${e.code.slice(6)}`:x[e.code]?x[e.code]:x[e.key]?x[e.key]:/^F([1-9]|1[0-2])$/.test(e.key)||e.key.length===1?e.key.toUpperCase():e.key}function f(e){return b.has(e.key)?null:{ctrlOrMeta:e.ctrlKey||e.metaKey,alt:e.altKey,shift:e.shiftKey,key:d(e)}}function p(){let e=globalThis.navigator,t=e?.userAgentData?.platform??e?.platform??``;return/Mac|iPhone|iPad|iPod/i.test(t)}function m(e){let t=[];return e.ctrlOrMeta&&t.push(p()?`⌘`:`Ctrl`),e.alt&&t.push(`Alt`),e.shift&&t.push(`Shift`),e.key&&t.push(e.key),t}function h({value:e,size:t,disabled:n,isRecording:r,placeholder:i,recordingPlaceholder:o,caretRef:s}){let c=r?(0,v.jsx)(`span`,{ref:s,className:a(`inline-block w-px shrink-0 bg-secondary-foreground`,t===`sm`?`h-3`:`h-3.5`)},`shortcut-caret`):null,l=e?m(e):[];return l.length===0?(0,v.jsxs)(`div`,{className:`flex items-center gap-1 overflow-hidden`,children:[c,(0,v.jsx)(`span`,{className:a(`truncate`,r?`text-primary`:`text-text-disabled`),children:r?o:i},`shortcut-placeholder`)]}):(0,v.jsxs)(`div`,{className:`flex items-center gap-1.5 overflow-hidden`,children:[l.map((e,r)=>(0,v.jsxs)(`span`,{className:`inline-flex shrink-0 items-center gap-1.5`,children:[r>0&&(0,v.jsx)(`span`,{className:`text-2xs font-medium text-muted-foreground`,children:`+`}),(0,v.jsx)(`kbd`,{className:a(`inline-flex items-center justify-center rounded-[3px] border border-b-2 border-secondary-border bg-surface-muted px-1.5 font-sans text-2xs font-medium text-secondary-foreground shadow-[0_1px_1px_rgba(0,0,0,0.06)]`,t===`sm`?`h-3.5 min-w-4 px-1 leading-none`:`h-4.75 min-w-4.75 leading-none`,n&&`border-b border-border-disabled bg-transparent text-muted-foreground shadow-none`),children:e})]},`${e}-${r}`)),c]})}function g({size:e=`md`,variant:t=`default`,value:n,defaultValue:r=null,placeholder:o=`단축키 입력`,recordingPlaceholder:s=`키 조합을 누르세요...`,disabled:l=!1,readOnly:d=!1,clearable:p=!0,allowSingleKey:g=!0,className:b,wrapperClassName:x,onChange:S,onClear:C,onKeyDown:w,onFocus:T,onBlur:E,ref:D,style:O,"aria-label":k,...A}){let j=n!==void 0,[M,N]=(0,_.useState)(r),[P,F]=(0,_.useState)(!1),I=(0,_.useRef)(null),L=(0,_.useCallback)(e=>{e?.animate([{opacity:1,offset:0},{opacity:1,offset:.49},{opacity:0,offset:.5},{opacity:0,offset:1}],{duration:1e3,iterations:1/0})},[]),R=j?n:M,z=!!R?.key,B=!l&&!d,V=p&&B&&z&&P,H=e=>{j||N(e),S?.(e)},U=e=>{e.stopPropagation(),e.preventDefault(),H(null),C?.(),I.current?.focus()},W=e=>{if(w?.(e),e.defaultPrevented||!B||e.key===`Tab`)return;e.preventDefault(),e.stopPropagation();let t=f(e);if(!t)return;let n=/^F([1-9]|1[0-2])$/.test(e.key);(g||u(e)||n)&&H(t)},G=R?m(R).join(`+`):``,K=G?`${o}: ${G}`:o,q=e===`sm`?`pr-5.5`:`pr-7`,J=V?q.replace(`pr-`,`right-`):`right-1.75`;return(0,v.jsxs)(`div`,{className:a(`relative box-border inline-flex w-full items-center`,x),children:[(0,v.jsx)(`input`,{ref:i(I,D),type:`text`,readOnly:!0,disabled:l,"aria-label":k??K,"aria-readonly":d||void 0,value:``,style:{caretColor:`transparent`,...O},onFocus:e=>{B&&F(!0),T?.(e)},onBlur:e=>{F(!1),E?.(e)},onKeyDown:W,spellCheck:!1,autoComplete:`off`,className:a(y({variant:t,size:e}),`caret-transparent selection:bg-transparent`,B&&`cursor-pointer read-only:cursor-pointer read-only:focus:border-primary`,V&&q,b),...A}),(0,v.jsx)(`div`,{"aria-hidden":`true`,className:a(`pointer-events-none absolute inset-y-0 left-2 flex items-center overflow-hidden font-sans text-xs`,J),children:(0,v.jsx)(h,{value:R,size:e,disabled:l,isRecording:P,placeholder:o,recordingPlaceholder:s,caretRef:L})}),V&&(0,v.jsx)(`div`,{className:`absolute top-1/2 right-1.5 flex -translate-y-1/2 items-center text-secondary-border-active`,children:(0,v.jsx)(`button`,{type:`button`,tabIndex:-1,"aria-label":`단축키 지우기`,onMouseDown:e=>e.preventDefault(),onClick:U,className:`flex size-4 cursor-pointer items-center justify-center rounded-none border-0 bg-transparent p-0 text-text-disabled hover:text-secondary-foreground focus-visible:outline-none`,children:(0,v.jsx)(c,{})})})]})}var _,v,y,b,x;function S(){return(S=e((()=>{_=t(),o(),r(),l(),v=n(),y=s([`w-full font-sans`,`box-border inline-block rounded-none border text-xs font-normal shadow-none transition-colors outline-none select-none`,`border-secondary-border bg-white px-1.75 py-1 text-secondary-foreground`,`hover:border-secondary-border-hover`,`focus:border-primary focus-visible:outline-none active:border-primary`,`read-only:cursor-default read-only:border-secondary-border read-only:text-muted-foreground read-only:focus:border-secondary-border-active`,`disabled:cursor-not-allowed disabled:border-border-disabled disabled:bg-surface-muted/50 disabled:text-muted-foreground`],{variants:{variant:{default:``,ghost:[`border-transparent bg-transparent`,`hover:border-transparent focus:border-transparent active:border-transparent`,`disabled:border-transparent disabled:bg-transparent`,`read-only:border-transparent`]},size:{sm:`min-h-5.25 py-0.5 leading-3.75`,md:`min-h-6.75 py-1 leading-4.25`,lg:`min-h-8 py-1.5 leading-4.5`}},defaultVariants:{variant:`default`,size:`md`}}),b=new Set([`Control`,`Shift`,`Alt`,`Meta`,`CapsLock`,`NumLock`,`ScrollLock`]),x={" ":`Space`,Spacebar:`Space`,ArrowUp:`Up`,ArrowDown:`Down`,ArrowLeft:`Left`,ArrowRight:`Right`,Escape:`Esc`,Delete:`Del`,Backspace:`Backspace`,Insert:`Ins`,PageUp:`PgUp`,PageDown:`PgDn`,Backquote:"`",Minus:`-`,Equal:`=`,BracketLeft:`[`,BracketRight:`]`,Backslash:`\\`,Semicolon:`;`,Quote:`'`,Comma:`,`,Period:`.`,Slash:`/`},g.__docgenInfo={description:``,methods:[],displayName:`ShortcutInput`,props:{size:{defaultValue:{value:`'md'`,computed:!1},required:!1},variant:{defaultValue:{value:`'default'`,computed:!1},required:!1},defaultValue:{defaultValue:{value:`null`,computed:!1},required:!1},placeholder:{defaultValue:{value:`'단축키 입력'`,computed:!1},required:!1},recordingPlaceholder:{defaultValue:{value:`'키 조합을 누르세요...'`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},readOnly:{defaultValue:{value:`false`,computed:!1},required:!1},clearable:{defaultValue:{value:`true`,computed:!1},required:!1},allowSingleKey:{defaultValue:{value:`true`,computed:!1},required:!1}}}})))()}var C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{C=t(),S(),w=n(),T={title:`Components/ShortcutInput`,component:g,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:"`ShortcutInput`은 키보드 단축키 조합을 캡처하고 구조화된 `ShortcutKey` 객체(`{ ctrlOrMeta, shift, alt, key }`)로 관리하는 입력 컴포넌트입니다."}}},argTypes:{variant:{control:`radio`,options:[`default`,`ghost`],description:`입력 필드의 스타일 변형입니다.`,table:{type:{summary:`'default' | 'ghost'`},defaultValue:{summary:`'default'`}}},size:{control:`radio`,options:[`sm`,`md`,`lg`],description:`입력 필드의 높이 및 내부 키캡 크기입니다.`,table:{type:{summary:`'sm' | 'md' | 'lg'`},defaultValue:{summary:`'md'`}}},placeholder:{control:`text`,description:`값이 비어 있을 때 표시되는 기본 안내 문구입니다.`,table:{type:{summary:`string`},defaultValue:{summary:`'단축키 입력'`}}},recordingPlaceholder:{control:`text`,description:`포커스되어 키 입력을 대기 중일 때 표시되는 안내 문구입니다.`,table:{type:{summary:`string`},defaultValue:{summary:`'키 조합을 누르세요...'`}}},clearable:{control:`boolean`,description:`포커스 상태에서 우측 초기화(Clear) 버튼 표시 여부입니다.`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},allowSingleKey:{control:`boolean`,description:"수정자 키(Ctrl/Alt/Shift/Meta) 없이 단독 키 입력을 허용할지 여부입니다. (`F1`~`F12`는 항상 허용)",table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},disabled:{control:`boolean`,description:`비활성화 상태 여부입니다.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},readOnly:{control:`boolean`,description:`읽기 전용 상태 여부입니다.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onChange:{action:`changed`,description:`단축키 객체가 변경되거나 초기화(null)될 때 호출됩니다.`},onClear:{action:`cleared`,description:`초기화(Clear) 버튼을 클릭했을 때 호출됩니다.`}},decorators:[e=>(0,w.jsx)(`div`,{className:`w-60`,children:(0,w.jsx)(e,{})})]},E={args:{defaultValue:{ctrlOrMeta:!0,shift:!0,alt:!1,key:`S`},variant:`default`,size:`md`,clearable:!0,allowSingleKey:!0,disabled:!1,readOnly:!1}},D={render:()=>(0,w.jsxs)(`div`,{className:`flex flex-col gap-4 font-sans text-xs`,children:[(0,w.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,w.jsx)(`span`,{className:`text-muted-foreground`,children:`Small (sm)`}),(0,w.jsx)(g,{size:`sm`,defaultValue:{ctrlOrMeta:!0,shift:!1,alt:!1,key:`S`}})]}),(0,w.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,w.jsx)(`span`,{className:`text-muted-foreground`,children:`Medium (md)`}),(0,w.jsx)(g,{size:`md`,defaultValue:{ctrlOrMeta:!0,shift:!0,alt:!1,key:`P`}})]}),(0,w.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,w.jsx)(`span`,{className:`text-muted-foreground`,children:`Large (lg)`}),(0,w.jsx)(g,{size:`lg`,defaultValue:{ctrlOrMeta:!0,shift:!1,alt:!0,key:`Del`}})]})]})},O={render:()=>(0,w.jsxs)(`div`,{className:`flex flex-col gap-4 font-sans text-xs`,children:[(0,w.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,w.jsx)(`span`,{className:`text-muted-foreground`,children:`Default`}),(0,w.jsx)(g,{variant:`default`,defaultValue:{ctrlOrMeta:!0,shift:!1,alt:!1,key:`C`}})]}),(0,w.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,w.jsx)(`span`,{className:`text-muted-foreground`,children:`Ghost (테이블/인라인 편집용)`}),(0,w.jsx)(`div`,{className:`border border-secondary-border bg-surface-muted/40 p-1`,children:(0,w.jsx)(g,{variant:`ghost`,defaultValue:{ctrlOrMeta:!0,shift:!1,alt:!1,key:`V`}})})]})]})},k={render:()=>(0,w.jsxs)(`div`,{className:`flex flex-col gap-4 font-sans text-xs`,children:[(0,w.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,w.jsx)(`span`,{className:`text-muted-foreground`,children:`Empty (Placeholder)`}),(0,w.jsx)(g,{placeholder:`클릭 후 단축키 입력`})]}),(0,w.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,w.jsx)(`span`,{className:`text-muted-foreground`,children:`Modifier Required (allowSingleKey=false)`}),(0,w.jsx)(g,{allowSingleKey:!1,placeholder:`Ctrl/Alt/Shift 조합만 허용`})]}),(0,w.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,w.jsx)(`span`,{className:`text-muted-foreground`,children:`ReadOnly`}),(0,w.jsx)(g,{readOnly:!0,value:{ctrlOrMeta:!0,shift:!1,alt:!1,key:`Z`}})]}),(0,w.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,w.jsx)(`span`,{className:`text-muted-foreground`,children:`Disabled`}),(0,w.jsx)(g,{disabled:!0,value:{ctrlOrMeta:!0,shift:!1,alt:!1,key:`Y`}})]})]})},A={args:{variant:`default`,size:`md`,clearable:!0,allowSingleKey:!0,disabled:!1,readOnly:!1},render:e=>{let[t,n]=(0,C.useState)({ctrlOrMeta:!0,shift:!0,alt:!1,key:`Z`});return(0,w.jsxs)(`div`,{className:`flex flex-col gap-3 font-sans`,children:[(0,w.jsx)(g,{...e,value:t,onChange:n}),(0,w.jsxs)(`div`,{className:`flex flex-col gap-1 border border-secondary-border bg-surface-muted p-2.5 text-compact text-secondary-foreground`,children:[(0,w.jsx)(`span`,{className:`text-2xs text-muted-foreground`,children:`저장된 객체:`}),(0,w.jsx)(`pre`,{className:`m-0 font-mono text-2xs text-primary`,children:t?JSON.stringify(t,null,2):`null`})]})]})}},j=[`Default`,`Sizes`,`Variants`,`States`,`Controlled`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}}})))()}M();export{A as Controlled,E as Default,D as Sizes,k as States,O as Variants,j as __namedExportsOrder,T as default};