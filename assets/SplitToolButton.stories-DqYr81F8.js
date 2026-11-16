import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-Df_aBerc.js";import{c as r,t as i}from"./utils-CZPXqhZZ.js";import{i as a,r as o}from"./getPseudoElementBounds-BB9aOAMM.js";import{c as s,d as c,l,n as u,r as d,s as f,u as p}from"./Select-m4-uaIOM.js";import{n as m,t as h}from"./usePortalContainer-a5HjEudH.js";function g(e){return typeof e==`object`&&!!e&&`main`in e&&`menu`in e}function _(e,t){return g(e)?e[t]:e}function v({items:e,selectedId:t,defaultSelectedId:n,onSelect:r,onAction:a,longPressDelay:c=450,className:l,dropdownClassName:f,disabled:h=!1,variant:g=`outline`,selected:v=!1,icon:T,label:E,title:D,container:O}){let k=!!(e&&e.length>1),[A,j]=(0,y.useState)(()=>n??e?.[0]?.id),[M,N]=(0,y.useState)(!1),P=(0,y.useRef)(null),F=(0,y.useRef)(!1),I=(0,y.useRef)(null),{container:L,containerRef:R}=m(O),z=t??A,B=e?.find(e=>e.id===z)??e?.[0],V=_(B?.icon,`main`)??T,H=E??B?.label,U=(0,y.useCallback)(()=>{P.current&&=(clearTimeout(P.current),null)},[]);(0,y.useEffect)(()=>U,[U]);let W=()=>{!h&&k&&(F.current=!1,U(),P.current=setTimeout(()=>{F.current=!0,N(!0)},c))},G=()=>{U()},K=()=>{U(),F.current=!1},q=e=>{if(e.preventDefault(),!h){if(e.detail!==0&&F.current){F.current=!1;return}F.current=!1,a?.(B)}},J=n=>{if(typeof n!=`string`)return;let i=e?.find(e=>String(e.id)===n);i&&!i.disabled&&(t===void 0&&j(i.id),N(!1),r?.(i),v||a?.(i))},Y=v?`selected`:`normal`,X=k&&!h&&M,Z=(0,b.jsxs)(`div`,{ref:I,"data-disabled":h?``:void 0,className:i(`group inline-flex items-stretch rounded-none font-sans shadow-none select-none motion-safe:transition-colors`,x[g][Y],h&&`cursor-not-allowed opacity-50`,l),children:[(0,b.jsxs)(`button`,{type:`button`,disabled:h,onClick:q,onPointerDown:W,onPointerUp:G,onPointerLeave:K,onPointerCancel:K,title:D??H,"data-item":`main`,className:i(`flex cursor-pointer flex-col items-center justify-center gap-0.5 border-none bg-transparent px-2.5 py-1.5 motion-safe:transition-colors`,`focus-visible:z-1 focus-visible:outline-default`,`disabled:cursor-not-allowed`,S[g][Y]),children:[V&&(0,b.jsx)(`span`,{className:`flex items-center justify-center text-current`,"data-item":`icon`,children:V}),H&&(0,b.jsx)(`span`,{className:`font-sans text-compact text-current`,"data-item":`label`,children:H})]}),k&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`div`,{className:i(`w-px shrink-0 self-stretch motion-safe:transition-colors`,w[g][Y]),"data-item":`dropdown`}),(0,b.jsx)(s,{ref:R,render:(0,b.jsx)(`button`,{type:`button`,disabled:h,"aria-label":`도구 선택 메뉴`,className:i(`group flex w-5 shrink-0 cursor-pointer items-center justify-center border-none bg-transparent motion-safe:transition-colors`,`focus-visible:z-1 focus-visible:outline-default`,`disabled:cursor-not-allowed`,C[g][Y])}),children:(0,b.jsx)(o,{"aria-hidden":`true`,className:`size-3 shrink-0 group-aria-expanded:rotate-180 motion-safe:transition-transform motion-safe:duration-150`,strokeWidth:2.5})})]})]});return k?(0,b.jsxs)(p,{value:z===void 0?void 0:String(z),onValueChange:J,open:X,onOpenChange:e=>{h||N(e)},disabled:h,modal:!1,children:[Z,(0,b.jsx)(u,{anchor:I,container:L,side:`bottom`,align:`start`,sideOffset:2,className:i(`w-auto min-w-(--anchor-width)`,f),children:e?.map(e=>(0,b.jsx)(d,{value:String(e.id),label:e.label,disabled:e.disabled,children:(0,b.jsxs)(`span`,{className:`flex w-full items-center gap-2`,children:[(0,b.jsx)(`span`,{className:`flex shrink-0 items-center justify-center`,"data-item":`menu-icon`,children:_(e.icon,`menu`)}),(0,b.jsx)(`span`,{className:`truncate`,"data-item":`menu-label`,children:e.label})]})},String(e.id)))})]}):Z}var y,b,x,S,C,w;function T(){return(T=e((()=>{y=t(),l(),c(),a(),h(),r(),f(),b=n(),x={outline:{normal:`border border-secondary-border bg-white text-secondary-foreground not-data-disabled:has-[button:hover]:border-neutral-400 not-data-disabled:has-[button[aria-expanded=true]]:border-neutral-400`,selected:`border border-primary bg-surface-info text-primary`},fill:{normal:`border border-transparent bg-secondary text-secondary-foreground`,selected:`border border-transparent bg-primary text-white`},ghost:{normal:`border border-transparent bg-transparent text-secondary-foreground not-data-disabled:hover:bg-secondary/40 not-data-disabled:has-[button:hover]:border-neutral-400 not-data-disabled:has-[button[aria-expanded=true]]:border-neutral-400`,selected:`border border-primary bg-surface-info text-primary`}},S={outline:{normal:`text-muted-foreground not-disabled:hover:bg-outline-primary-hover not-disabled:active:bg-outline-primary-active`,selected:`text-secondary-foreground not-disabled:hover:bg-primary/10 not-disabled:active:bg-primary/20`},fill:{normal:`text-muted-foreground not-disabled:hover:bg-secondary-hover not-disabled:active:bg-secondary-active`,selected:`text-white not-disabled:hover:bg-primary-hover not-disabled:active:bg-primary-active`},ghost:{normal:`text-muted-foreground not-disabled:hover:bg-outline-primary-hover not-disabled:active:bg-outline-primary-active`,selected:`text-secondary-foreground not-disabled:hover:bg-primary/10 not-disabled:active:bg-primary/20`}},C={outline:{normal:`text-muted-foreground not-disabled:hover:bg-outline-primary-hover not-disabled:hover:text-secondary-foreground not-disabled:active:bg-outline-primary-active aria-expanded:bg-secondary aria-expanded:text-secondary-foreground`,selected:`text-muted-foreground not-disabled:hover:bg-primary/10 not-disabled:active:bg-primary/20 aria-expanded:bg-primary/10 aria-expanded:text-primary`},fill:{normal:`text-muted-foreground not-disabled:hover:bg-secondary-hover not-disabled:hover:text-secondary-foreground not-disabled:active:bg-secondary-active aria-expanded:bg-secondary-hover aria-expanded:text-secondary-foreground`,selected:`text-white not-disabled:hover:bg-primary-hover not-disabled:active:bg-primary-active aria-expanded:bg-primary-hover`},ghost:{normal:`text-muted-foreground not-disabled:hover:bg-outline-primary-hover not-disabled:hover:text-secondary-foreground not-disabled:active:bg-outline-primary-active aria-expanded:bg-secondary aria-expanded:text-secondary-foreground`,selected:`text-muted-foreground not-disabled:hover:bg-primary/10 not-disabled:active:bg-primary/20 aria-expanded:bg-primary/10 aria-expanded:text-primary`}},w={outline:{normal:`bg-secondary-border`,selected:`bg-primary/40`},fill:{normal:`bg-secondary-border`,selected:`bg-white/40`},ghost:{normal:`bg-transparent not-in-data-disabled:group-hover:bg-secondary-border not-in-data-disabled:group-has-[button:hover]:bg-secondary-border not-in-data-disabled:group-has-[button[aria-expanded=true]]:bg-secondary-border`,selected:`bg-primary/40`}},v.__docgenInfo={description:``,methods:[],displayName:`SplitToolButton`,props:{longPressDelay:{defaultValue:{value:`450`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},variant:{defaultValue:{value:`'outline'`,computed:!1},required:!1},selected:{defaultValue:{value:`false`,computed:!1},required:!1}}}})))()}function E({className:e=`size-4`}){return(0,M.jsx)(`svg`,{"aria-hidden":`true`,className:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,M.jsx)(`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`})})}function D({className:e=`size-4`}){return(0,M.jsx)(`svg`,{"aria-hidden":`true`,className:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,M.jsx)(`path`,{d:`M12 3l8 6-3 12H7L4 9l8-6z`})})}function O({className:e=`size-4`}){return(0,M.jsx)(`svg`,{"aria-hidden":`true`,className:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,M.jsx)(`path`,{d:`M7 22a5 5 0 0 1-2-4c0-4 4-8 9-8s6 2 6 5c0 4-4 7-9 7a8 8 0 0 1-4-1`})})}function k({className:e=`size-4`}){return(0,M.jsx)(`svg`,{"aria-hidden":`true`,className:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,M.jsx)(`circle`,{cx:`12`,cy:`12`,r:`9`})})}function A({className:e=`size-5`}){return(0,M.jsxs)(`svg`,{"aria-hidden":`true`,className:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,M.jsx)(`path`,{d:`m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z`}),(0,M.jsx)(`path`,{d:`m13 13 6 6`})]})}var j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{j=t(),T(),M=n(),N=[{id:`rectangle`,label:`Rectangle`,icon:{main:(0,M.jsx)(E,{className:`size-5`}),menu:(0,M.jsx)(E,{className:`size-4`})}},{id:`polygon`,label:`Polygon`,icon:{main:(0,M.jsx)(D,{className:`size-5`}),menu:(0,M.jsx)(D,{className:`size-4`})}},{id:`lasso`,label:`Lasso`,icon:{main:(0,M.jsx)(O,{className:`size-5`}),menu:(0,M.jsx)(O,{className:`size-4`})}},{id:`circle`,label:`Circle`,icon:{main:(0,M.jsx)(k,{className:`size-5`}),menu:(0,M.jsx)(k,{className:`size-4`})}}],P={title:`Components/SplitToolButton`,component:v,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:"`SplitToolButton`은 메인 도구 실행과 서브 도구 선택 드롭다운(`BaseSelect`)이 결합된 분할형 툴바 버튼입니다. `items`가 없거나 1개 이하인 경우 `icon`과 `label`을 직접 받아 단일 액션 버튼으로 동작합니다."}}},argTypes:{variant:{control:`radio`,options:[`outline`,`fill`,`ghost`],description:`버튼의 스타일 변형입니다.`,table:{type:{summary:`'outline' | 'fill' | 'ghost'`},defaultValue:{summary:`'outline'`}}},selected:{control:`boolean`,description:`도구가 현재 지도나 캔버스에서 활성화(선택)되어 있는지 여부입니다.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},longPressDelay:{control:{type:`number`,min:200,max:1500,step:50},description:`메인 버튼 롱프레스 시 드롭다운 메뉴가 열리는 지연 시간(ms)입니다.`,table:{type:{summary:`number`},defaultValue:{summary:`450`}}},disabled:{control:`boolean`,description:`전체 버튼의 비활성화 여부입니다.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},items:{description:"드롭다운에 표시될 도구 목록입니다. `icon`은 단일 `ReactNode` 또는 `{ main, menu }` 형태로 전달할 수 있습니다."},icon:{description:`items 없이 단독으로 사용할 때 버튼 중앙에 노출할 아이콘입니다.`},label:{description:"단독 사용 시 버튼 하단에 노출할 텍스트이며, `items`와 함께 전달할 경우 선택된 아이템 라벨 대신 고정 라벨로 우선 표시됩니다."},container:{control:!1,description:"드롭다운 포털이 렌더링될 대상 DOM 컨테이너입니다. 미지정 시 가까운 다이얼로그 또는 `document.body`를 자동 감지합니다."},onSelect:{action:`selected`,description:`드롭다운에서 새로운 도구가 선택되었을 때 호출됩니다.`},onAction:{action:`action`,description:`메인 버튼을 클릭하거나 도구를 새로 활성화할 때 호출됩니다.`}}},F={args:{items:N,defaultSelectedId:`rectangle`,variant:`outline`,selected:!1,longPressDelay:450}},I={args:{icon:(0,M.jsx)(A,{className:`size-5`}),label:`Select`,variant:`outline`,selected:!1}},L={render:()=>(0,M.jsxs)(`div`,{className:`flex items-center gap-6 p-4 font-sans text-xs`,children:[(0,M.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,M.jsx)(v,{items:N,label:`그리기`,variant:`outline`}),(0,M.jsx)(`span`,{className:`text-muted-foreground`,children:`고정 라벨 (label="그리기")`})]}),(0,M.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,M.jsx)(v,{items:N,variant:`outline`,className:`**:data-[item=dropdown]:bg-primary/30 **:data-[item=label]:font-semibold **:data-[item=main]:px-4`}),(0,M.jsx)(`span`,{className:`text-muted-foreground`,children:`data-item 슬롯 오버라이드`})]})]})},R={render:()=>(0,M.jsxs)(`div`,{className:`flex flex-col gap-6 p-4 font-sans text-xs`,children:[(0,M.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,M.jsx)(`span`,{className:`font-semibold text-secondary-foreground`,children:`Split (With Items)`}),(0,M.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,M.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,M.jsx)(v,{items:N,variant:`outline`}),(0,M.jsx)(`span`,{className:`text-muted-foreground`,children:`outline`})]}),(0,M.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,M.jsx)(v,{items:N,variant:`fill`}),(0,M.jsx)(`span`,{className:`text-muted-foreground`,children:`fill`})]}),(0,M.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,M.jsx)(v,{items:N,variant:`ghost`}),(0,M.jsx)(`span`,{className:`text-muted-foreground`,children:`ghost`})]})]})]}),(0,M.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,M.jsx)(`span`,{className:`font-semibold text-secondary-foreground`,children:`Single (No Items)`}),(0,M.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,M.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,M.jsx)(v,{icon:(0,M.jsx)(E,{className:`size-5`}),label:`Rectangle`,variant:`outline`}),(0,M.jsx)(`span`,{className:`text-muted-foreground`,children:`outline`})]}),(0,M.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,M.jsx)(v,{icon:(0,M.jsx)(E,{className:`size-5`}),label:`Rectangle`,variant:`fill`}),(0,M.jsx)(`span`,{className:`text-muted-foreground`,children:`fill`})]}),(0,M.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,M.jsx)(v,{icon:(0,M.jsx)(E,{className:`size-5`}),label:`Rectangle`,variant:`ghost`}),(0,M.jsx)(`span`,{className:`text-muted-foreground`,children:`ghost`})]})]})]})]})},z={render:()=>(0,M.jsxs)(`div`,{className:`flex flex-col gap-6 p-4 font-sans text-xs`,children:[(0,M.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,M.jsx)(`span`,{className:`font-semibold text-secondary-foreground`,children:`Normal`}),(0,M.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,M.jsx)(v,{items:N,variant:`outline`,selected:!1}),(0,M.jsx)(v,{items:N,variant:`fill`,selected:!1}),(0,M.jsx)(v,{items:N,variant:`ghost`,selected:!1})]})]}),(0,M.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,M.jsx)(`span`,{className:`font-semibold text-primary`,children:`Selected (Active)`}),(0,M.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,M.jsx)(v,{items:N,variant:`outline`,selected:!0}),(0,M.jsx)(v,{items:N,variant:`fill`,selected:!0}),(0,M.jsx)(v,{items:N,variant:`ghost`,selected:!0})]})]}),(0,M.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,M.jsx)(`span`,{className:`font-semibold text-text-disabled`,children:`Disabled`}),(0,M.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,M.jsx)(v,{items:N,variant:`outline`,disabled:!0}),(0,M.jsx)(v,{items:N,variant:`fill`,disabled:!0}),(0,M.jsx)(v,{items:N,variant:`ghost`,disabled:!0})]})]})]})},B={args:{variant:`outline`,disabled:!1,longPressDelay:450},render:e=>{let[t,n]=(0,j.useState)(`rectangle`),[r,i]=(0,j.useState)(!1),[a,o]=(0,j.useState)(`대기 중`);return(0,M.jsxs)(`div`,{className:`flex flex-col items-center gap-4 p-4 font-sans`,children:[(0,M.jsx)(v,{...e,items:N,selectedId:t,selected:r,onAction:e=>{i(e=>!e),o(`${e?.label??`도구`} 액션 실행 (${new Date().toLocaleTimeString()})`)},onSelect:e=>{n(e.id),o(`${e.label} 도구로 교체됨`)}}),(0,M.jsxs)(`div`,{className:`flex flex-col gap-1 border border-secondary-border bg-surface-muted p-3 text-compact text-secondary-foreground`,children:[(0,M.jsxs)(`div`,{children:[`활성화 상태 (selected):`,` `,(0,M.jsx)(`code`,{className:`font-bold text-primary`,children:String(r)})]}),(0,M.jsxs)(`div`,{children:[`현재 도구 (selectedId):`,` `,(0,M.jsx)(`code`,{className:`font-semibold text-secondary-foreground`,children:t})]}),(0,M.jsxs)(`div`,{children:[`최근 로그:`,` `,(0,M.jsx)(`code`,{className:`text-muted-foreground`,children:a})]})]})]})}},V=[`Default`,`SingleButton`,`FixedLabelAndCustomSlots`,`AllVariants`,`States`,`Controlled`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    items: selectTools,
    defaultSelectedId: 'rectangle',
    variant: 'outline',
    selected: false,
    longPressDelay: 450
  }
}`,...F.parameters?.docs?.source},description:{story:`기본 분할 버튼 사용 형태 (Uncontrolled)
메인 버튼(size-5)과 메뉴(size-4)에 서로 다른 크기의 아이콘이 적용됩니다.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <PointerIcon className="size-5" />,
    label: 'Select',
    variant: 'outline',
    selected: false
  }
}`,...I.parameters?.docs?.source},description:{story:`items를 넣지 않고 icon, label만 전달한 단일 도구 버튼`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6 p-4 font-sans text-xs">
      <div className="flex flex-col items-center gap-2">
        <SplitToolButton items={selectTools} label="그리기" variant="outline" />
        <span className="text-muted-foreground">
          고정 라벨 (label="그리기")
        </span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <SplitToolButton items={selectTools} variant="outline" className="**:data-[item=dropdown]:bg-primary/30 **:data-[item=label]:font-semibold **:data-[item=main]:px-4" />
        <span className="text-muted-foreground">data-item 슬롯 오버라이드</span>
      </div>
    </div>
}`,...L.parameters?.docs?.source},description:{story:'고정 라벨 및 슬롯 오버라이드\n- `label` prop을 전달해 하위 도구 변경 시에도 고정 라벨("그리기")을 유지하는 사례\n- `data-item` 선택자(`[&_[data-item=main]]:px-3.5` 등)로 내부 스타일을 커스텀하는 사례',...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
            <SplitToolButton icon={<RectangleIcon className="size-5" />} label="Rectangle" variant="outline" />
            <span className="text-muted-foreground">outline</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SplitToolButton icon={<RectangleIcon className="size-5" />} label="Rectangle" variant="fill" />
            <span className="text-muted-foreground">fill</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SplitToolButton icon={<RectangleIcon className="size-5" />} label="Rectangle" variant="ghost" />
            <span className="text-muted-foreground">ghost</span>
          </div>
        </div>
      </div>
    </div>
}`,...R.parameters?.docs?.source},description:{story:`All Variants
하위 드롭다운이 있는 분할형과 icon/label만 전달한 단일형을 나란히 비교합니다.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source},description:{story:`States
분할형과 단일형의 상태(Normal, Selected, Disabled)를 비교합니다.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    disabled: false,
    longPressDelay: 450
  },
  render: args => {
    const [selectedTool, setSelectedTool] = useState<string>('rectangle');
    const [isActive, setIsActive] = useState<boolean>(false);
    const [actionLog, setActionLog] = useState<string>('대기 중');
    return <div className="flex flex-col items-center gap-4 p-4 font-sans">
        <SplitToolButton {...args} items={selectTools} selectedId={selectedTool} selected={isActive} onAction={item => {
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
}`,...B.parameters?.docs?.source},description:{story:`Controlled Interactive`,...B.parameters?.docs?.description}}}})))()}H();export{R as AllVariants,B as Controlled,F as Default,L as FixedLabelAndCustomSlots,I as SingleButton,z as States,V as __namedExportsOrder,P as default};