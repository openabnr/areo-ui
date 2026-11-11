import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-D3lwOebq.js";import{c as r,t as i}from"./utils-Cjde27Em.js";import{a,n as o,o as s,t as c}from"./Popover-NT1GamXN.js";function l(e,t){return e?`cursor-not-allowed text-text-disabled opacity-50`:t?`bg-item-selected-bg font-medium text-item-selected-fg`:`text-secondary-foreground hover:bg-secondary-hover active:bg-secondary-active`}function u({items:e,selectedId:t,defaultSelectedId:n,onSelect:r,onAction:s,longPressDelay:u=450,className:_,disabled:v=!1,variant:y=`outline`,selected:b=!1,icon:x,label:S}){let C=!!(e&&e.length>1),[w,T]=(0,d.useState)(()=>n??e?.[0]?.id),[E,D]=(0,d.useState)(!1),O=(0,d.useRef)(null),k=(0,d.useRef)(null),A=(0,d.useRef)(!1),j=t??w,M=e?.find(e=>e.id===j)??e?.[0],N=M?.icon??x,P=M?.label??S,F=(0,d.useCallback)(()=>{k.current&&=(clearTimeout(k.current),null)},[]),I=()=>{!v&&C&&(A.current=!1,F(),k.current=setTimeout(()=>{A.current=!0,D(!0)},u))},L=()=>{F()},R=e=>{if(e.preventDefault(),v||A.current){A.current=!1;return}s?.(M)},z=e=>{e.disabled||(t===void 0&&T(e.id),D(!1),r?.(e),b||s?.(e))},B=b?`selected`:`normal`,V=(0,f.jsxs)(`div`,{ref:O,className:i(`group inline-flex items-stretch rounded-none shadow-none transition-colors select-none`,p[y][B],v&&`pointer-events-none opacity-50`,_),children:[(0,f.jsxs)(`button`,{type:`button`,disabled:v,onClick:R,onPointerDown:I,onPointerUp:L,onPointerLeave:L,title:P,className:i(`flex cursor-pointer flex-col items-center justify-center gap-0.5 border-none bg-transparent px-2.5 py-1.5 transition-colors outline-none`,m[y][B]),children:[N&&(0,f.jsx)(`div`,{className:`flex size-5 items-center justify-center text-current`,children:N}),P&&(0,f.jsx)(`span`,{className:`font-sans text-compact text-current`,children:P})]}),C&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`div`,{className:i(`w-px shrink-0 self-stretch transition-colors`,g[y][B])}),(0,f.jsx)(a,{render:(0,f.jsx)(`button`,{type:`button`,disabled:v,"aria-label":`도구 선택 메뉴`,className:i(`flex w-5 shrink-0 cursor-pointer items-center justify-center border-none bg-transparent transition-colors outline-none`,h[y][B])}),children:(0,f.jsx)(`svg`,{"aria-hidden":`true`,className:i(`size-3.5 shrink-0 translate-y-px transition-transform duration-150`,E&&`rotate-180`),viewBox:`0 0 16 16`,fill:`currentColor`,children:(0,f.jsx)(`path`,{fillRule:`evenodd`,d:`M3.646 5.646a.5.5 0 0 1 .708 0L8 9.293l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708z`,clipRule:`evenodd`})})})]})]});return C?(0,f.jsxs)(c,{open:E,onOpenChange:D,children:[V,(0,f.jsx)(o,{anchor:O,align:`start`,side:`bottom`,sideOffset:2,className:`w-auto min-w-37.5 gap-0 rounded-none border border-secondary-border bg-white p-1 shadow-md`,children:(0,f.jsx)(`div`,{role:`menu`,className:`flex flex-col gap-0.5`,children:e?.map(e=>{let t=e.id===M?.id;return(0,f.jsxs)(`button`,{type:`button`,role:`menuitem`,disabled:e.disabled,onClick:()=>z(e),className:i(`flex w-full cursor-pointer items-center gap-2.5 rounded-none border-0 bg-transparent px-2.5 py-1.5 text-left text-compact transition-colors outline-none`,l(e.disabled,t)),children:[(0,f.jsx)(`div`,{className:`flex size-4 shrink-0 items-center justify-center`,children:e.icon}),(0,f.jsx)(`span`,{className:`truncate`,children:e.label})]},String(e.id))})})})]}):V}var d,f,p,m,h,g;function _(){return(_=e((()=>{d=t(),r(),s(),f=n(),p={outline:{normal:`border border-secondary-border bg-white text-secondary-foreground has-[button:hover]:border-neutral-400 has-[button[aria-expanded=true]]:border-neutral-400`,selected:`border border-primary bg-surface-info text-primary`},fill:{normal:`border border-transparent bg-secondary text-secondary-foreground`,selected:`border border-transparent bg-primary text-white`},ghost:{normal:`border border-transparent bg-transparent text-secondary-foreground hover:bg-secondary/40 has-[button:hover]:border-neutral-400 has-[button[aria-expanded=true]]:border-neutral-400`,selected:`border border-primary bg-surface-info text-primary`}},m={outline:{normal:`text-secondary-foreground active:bg-secondary-active`,selected:`text-secondary-foreground hover:bg-primary/10 active:bg-primary/20`},fill:{normal:`text-secondary-foreground hover:bg-secondary-hover active:bg-secondary-active`,selected:`text-white hover:bg-primary-hover active:bg-primary-active`},ghost:{normal:`text-secondary-foreground active:bg-secondary-active`,selected:`text-secondary-foreground hover:bg-primary/10 active:bg-primary/20`}},h={outline:{normal:`text-muted-foreground hover:bg-secondary hover:text-secondary-foreground active:bg-secondary-active aria-expanded:bg-secondary aria-expanded:text-secondary-foreground`,selected:`text-muted-foreground hover:bg-primary/10 active:bg-primary/20 aria-expanded:bg-primary/10 aria-expanded:text-primary`},fill:{normal:`text-muted-foreground hover:bg-secondary-hover hover:text-secondary-foreground active:bg-secondary-active aria-expanded:bg-secondary-hover aria-expanded:text-secondary-foreground`,selected:`text-white hover:bg-primary-hover active:bg-primary-active aria-expanded:bg-primary-hover`},ghost:{normal:`text-muted-foreground hover:bg-secondary hover:text-secondary-foreground active:bg-secondary-active aria-expanded:bg-secondary aria-expanded:text-secondary-foreground`,selected:`text-muted-foreground hover:bg-primary/10 active:bg-primary/20 aria-expanded:bg-primary/10 aria-expanded:text-primary`}},g={outline:{normal:`bg-secondary-border`,selected:`bg-primary/40`},fill:{normal:`bg-secondary-border`,selected:`bg-white/40`},ghost:{normal:`bg-transparent group-hover:bg-secondary-border group-has-[button:hover]:bg-secondary-border group-has-[button[aria-expanded=true]]:bg-secondary-border`,selected:`bg-primary/40`}},u.__docgenInfo={description:``,methods:[],displayName:`SplitToolButton`,props:{longPressDelay:{defaultValue:{value:`450`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},variant:{defaultValue:{value:`'outline'`,computed:!1},required:!1},selected:{defaultValue:{value:`false`,computed:!1},required:!1}}}})))()}function v(){return(0,w.jsx)(`svg`,{"aria-hidden":`true`,className:`size-4`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,w.jsx)(`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`})})}function y(){return(0,w.jsx)(`svg`,{"aria-hidden":`true`,className:`size-4`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,w.jsx)(`path`,{d:`M12 3l8 6-3 12H7L4 9l8-6z`})})}function b(){return(0,w.jsx)(`svg`,{"aria-hidden":`true`,className:`size-4`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,w.jsx)(`path`,{d:`M7 22a5 5 0 0 1-2-4c0-4 4-8 9-8s6 2 6 5c0 4-4 7-9 7a8 8 0 0 1-4-1`})})}function x(){return(0,w.jsx)(`svg`,{"aria-hidden":`true`,className:`size-4`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,w.jsx)(`circle`,{cx:`12`,cy:`12`,r:`9`})})}function S(){return(0,w.jsxs)(`svg`,{"aria-hidden":`true`,className:`size-4`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,w.jsx)(`path`,{d:`m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z`}),(0,w.jsx)(`path`,{d:`m13 13 6 6`})]})}var C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{C=t(),_(),w=n(),T=[{id:`rectangle`,label:`Rectangle`,icon:(0,w.jsx)(v,{})},{id:`polygon`,label:`Polygon`,icon:(0,w.jsx)(y,{})},{id:`lasso`,label:`Lasso`,icon:(0,w.jsx)(b,{})},{id:`circle`,label:`Circle`,icon:(0,w.jsx)(x,{})}],E={title:`Components/SplitToolButton`,component:u,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:"`SplitToolButton`은 메인 도구 실행과 서브 도구 선택 드롭다운이 결합된 분할형 툴바 버튼입니다. `items`가 제공되지 않거나 항목이 1개 이하인 경우 `icon`과 `label`을 직접 전달받아 단일 액션 버튼으로 동작합니다."}}},argTypes:{variant:{control:`radio`,options:[`outline`,`fill`,`ghost`],description:`버튼의 스타일 변형입니다.`,table:{type:{summary:`'outline' | 'fill' | 'ghost'`},defaultValue:{summary:`'outline'`}}},selected:{control:`boolean`,description:`도구가 현재 지도나 캔버스에서 활성화(선택)되어 있는지 여부입니다.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},longPressDelay:{control:{type:`number`,min:200,max:1500,step:50},description:`메인 버튼 롱프레스 시 드롭다운 메뉴가 열리는 지연 시간(ms)입니다.`,table:{type:{summary:`number`},defaultValue:{summary:`450`}}},disabled:{control:`boolean`,description:`전체 버튼의 비활성화 여부입니다.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},items:{description:`드롭다운에 표시될 도구 목록입니다. 2개 이상일 때 드롭다운(Chevron)이 활성화됩니다.`},icon:{description:`items 없이 단독으로 사용할 때 버튼 중앙에 노출할 아이콘입니다.`},label:{description:`items 없이 단독으로 사용할 때 버튼 하단에 노출할 텍스트 라벨입니다.`},onSelect:{action:`selected`,description:`드롭다운에서 새로운 도구가 선택되었을 때 호출됩니다.`},onAction:{action:`action`,description:`메인 버튼을 클릭하거나 도구를 새로 활성화할 때 호출됩니다.`}}},D={args:{items:T,defaultSelectedId:`rectangle`,variant:`outline`,selected:!1,longPressDelay:450}},O={args:{icon:(0,w.jsx)(S,{}),label:`Select`,variant:`outline`,selected:!1}},k={render:()=>(0,w.jsxs)(`div`,{className:`flex flex-col gap-6 p-4 font-sans text-xs`,children:[(0,w.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,w.jsx)(`span`,{className:`font-semibold text-secondary-foreground`,children:`Split (With Items)`}),(0,w.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,w.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,w.jsx)(u,{items:T,variant:`outline`}),(0,w.jsx)(`span`,{className:`text-muted-foreground`,children:`outline`})]}),(0,w.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,w.jsx)(u,{items:T,variant:`fill`}),(0,w.jsx)(`span`,{className:`text-muted-foreground`,children:`fill`})]}),(0,w.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,w.jsx)(u,{items:T,variant:`ghost`}),(0,w.jsx)(`span`,{className:`text-muted-foreground`,children:`ghost`})]})]})]}),(0,w.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,w.jsx)(`span`,{className:`font-semibold text-secondary-foreground`,children:`Single (No Items)`}),(0,w.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,w.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,w.jsx)(u,{icon:(0,w.jsx)(v,{}),label:`Rectangle`,variant:`outline`}),(0,w.jsx)(`span`,{className:`text-muted-foreground`,children:`outline`})]}),(0,w.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,w.jsx)(u,{icon:(0,w.jsx)(v,{}),label:`Rectangle`,variant:`fill`}),(0,w.jsx)(`span`,{className:`text-muted-foreground`,children:`fill`})]}),(0,w.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,w.jsx)(u,{icon:(0,w.jsx)(v,{}),label:`Rectangle`,variant:`ghost`}),(0,w.jsx)(`span`,{className:`text-muted-foreground`,children:`ghost`})]})]})]})]})},A={render:()=>(0,w.jsxs)(`div`,{className:`flex flex-col gap-6 p-4 font-sans text-xs`,children:[(0,w.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,w.jsx)(`span`,{className:`font-semibold text-secondary-foreground`,children:`Normal`}),(0,w.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,w.jsx)(u,{items:T,variant:`outline`,selected:!1}),(0,w.jsx)(u,{items:T,variant:`fill`,selected:!1}),(0,w.jsx)(u,{items:T,variant:`ghost`,selected:!1})]})]}),(0,w.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,w.jsx)(`span`,{className:`font-semibold text-primary`,children:`Selected (Active)`}),(0,w.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,w.jsx)(u,{items:T,variant:`outline`,selected:!0}),(0,w.jsx)(u,{items:T,variant:`fill`,selected:!0}),(0,w.jsx)(u,{items:T,variant:`ghost`,selected:!0})]})]}),(0,w.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,w.jsx)(`span`,{className:`font-semibold text-text-disabled`,children:`Disabled`}),(0,w.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,w.jsx)(u,{items:T,variant:`outline`,disabled:!0}),(0,w.jsx)(u,{items:T,variant:`fill`,disabled:!0}),(0,w.jsx)(u,{items:T,variant:`ghost`,disabled:!0})]})]})]})},j={args:{variant:`outline`,disabled:!1,longPressDelay:450},render:e=>{let[t,n]=(0,C.useState)(`rectangle`),[r,i]=(0,C.useState)(!1),[a,o]=(0,C.useState)(`대기 중`);return(0,w.jsxs)(`div`,{className:`flex flex-col items-center gap-4 p-4 font-sans`,children:[(0,w.jsx)(u,{...e,items:T,selectedId:t,selected:r,onAction:e=>{i(e=>!e),o(`${e?.label??`도구`} 액션 실행 (${new Date().toLocaleTimeString()})`)},onSelect:e=>{n(e.id),o(`${e.label} 도구로 교체됨`)}}),(0,w.jsxs)(`div`,{className:`flex flex-col gap-1 border border-secondary-border bg-surface-muted p-3 text-compact text-secondary-foreground`,children:[(0,w.jsxs)(`div`,{children:[`활성화 상태 (selected):`,` `,(0,w.jsx)(`code`,{className:`font-bold text-primary`,children:String(r)})]}),(0,w.jsxs)(`div`,{children:[`현재 도구 (selectedId):`,` `,(0,w.jsx)(`code`,{className:`font-semibold text-secondary-foreground`,children:t})]}),(0,w.jsxs)(`div`,{children:[`최근 로그:`,` `,(0,w.jsx)(`code`,{className:`text-muted-foreground`,children:a})]})]})]})}},M=[`Default`,`SingleButton`,`AllVariants`,`States`,`Controlled`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    items: selectTools,
    defaultSelectedId: 'rectangle',
    variant: 'outline',
    selected: false,
    longPressDelay: 450
  }
}`,...D.parameters?.docs?.source},description:{story:`기본 분할 버튼 사용 형태 (Uncontrolled)`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <PointerIcon />,
    label: 'Select',
    variant: 'outline',
    selected: false
  }
}`,...O.parameters?.docs?.source},description:{story:`items를 넣지 않고 icon, label만 전달한 단일 도구 버튼`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 p-4 font-sans text-xs">
      <div className="flex flex-col gap-2">
        <span className="font-semibold text-secondary-foreground">
          Split (With Items)
        </span>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <SplitToolButton items={selectTools} variant="outline" />
            <span className="text-muted-foreground">outline</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SplitToolButton items={selectTools} variant="fill" />
            <span className="text-muted-foreground">fill</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SplitToolButton items={selectTools} variant="ghost" />
            <span className="text-muted-foreground">ghost</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-semibold text-secondary-foreground">
          Single (No Items)
        </span>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <SplitToolButton icon={<RectangleIcon />} label="Rectangle" variant="outline" />
            <span className="text-muted-foreground">outline</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SplitToolButton icon={<RectangleIcon />} label="Rectangle" variant="fill" />
            <span className="text-muted-foreground">fill</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SplitToolButton icon={<RectangleIcon />} label="Rectangle" variant="ghost" />
            <span className="text-muted-foreground">ghost</span>
          </div>
        </div>
      </div>
    </div>
}`,...k.parameters?.docs?.source},description:{story:`All Variants
하위 드롭다운이 있는 분할형과 icon/label만 전달한 단일형을 나란히 비교합니다.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 p-4 font-sans text-xs">
      <div className="flex flex-col gap-2">
        <span className="font-semibold text-secondary-foreground">Normal</span>
        <div className="flex items-center gap-6">
          <SplitToolButton items={selectTools} variant="outline" selected={false} />
          <SplitToolButton items={selectTools} variant="fill" selected={false} />
          <SplitToolButton items={selectTools} variant="ghost" selected={false} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-semibold text-primary">Selected (Active)</span>
        <div className="flex items-center gap-6">
          <SplitToolButton items={selectTools} variant="outline" selected={true} />
          <SplitToolButton items={selectTools} variant="fill" selected={true} />
          <SplitToolButton items={selectTools} variant="ghost" selected={true} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-semibold text-text-disabled">Disabled</span>
        <div className="flex items-center gap-6">
          <SplitToolButton items={selectTools} variant="outline" disabled />
          <SplitToolButton items={selectTools} variant="fill" disabled />
          <SplitToolButton items={selectTools} variant="ghost" disabled />
        </div>
      </div>
    </div>
}`,...A.parameters?.docs?.source},description:{story:`States
분할형과 단일형의 상태(Normal, Selected, Disabled)를 비교합니다.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  // 1. Controls 패널에서 조작할 기본 args 지정
  args: {
    variant: 'outline',
    disabled: false,
    longPressDelay: 450
  },
  // 2. render 함수에서 args를 인자로 받아 컴포넌트에 전달
  render: args => {
    const [selectedTool, setSelectedTool] = useState<string>('rectangle');
    const [isActive, setIsActive] = useState<boolean>(false);
    const [actionLog, setActionLog] = useState<string>('대기 중');
    return <div className="flex flex-col items-center gap-4 p-4 font-sans">
        <SplitToolButton {...args} // 👈 Controls 패널의 variant, disabled 등이 실시간으로 반영됩니다.
      items={selectTools} selectedId={selectedTool} selected={isActive} onAction={item => {
        setIsActive(prev => !prev);
        setActionLog(\`\${item?.label ?? '도구'} 액션 실행 (\${new Date().toLocaleTimeString()})\`);
      }} onSelect={item => {
        setSelectedTool(item.id);
        setActionLog(\`\${item.label} 도구로 교체됨\`);
      }} />

        <div className="flex flex-col gap-1 border border-secondary-border bg-surface-muted p-3 text-compact text-secondary-foreground">
          <div>
            활성화 상태 (selected):{' '}
            <code className="font-bold text-primary">{String(isActive)}</code>
          </div>
          <div>
            현재 도구 (selectedId):{' '}
            <code className="font-semibold text-secondary-foreground">
              {selectedTool}
            </code>
          </div>
          <div>
            최근 로그:{' '}
            <code className="text-muted-foreground">{actionLog}</code>
          </div>
        </div>
      </div>;
  }
}`,...j.parameters?.docs?.source},description:{story:`Controlled Interactive`,...j.parameters?.docs?.description}}}})))()}N();export{k as AllVariants,j as Controlled,D as Default,O as SingleButton,A as States,M as __namedExportsOrder,E as default};