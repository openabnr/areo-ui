import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-Bofpnzsy.js";import{c as r,t as i}from"./utils-CynS5U15.js";import{i as a,r as o}from"./getPseudoElementBounds-zcKQpk5m.js";import{c as s,d as c,l,n as u,r as d,s as f,u as p}from"./Select-BnoXcuNE.js";import{n as m,t as h}from"./usePortalContainer-Bz2c0cAb.js";function g(e){return typeof e==`object`&&!!e&&`main`in e&&`menu`in e}function _(e,t){return g(e)?e[t]:e}function v({items:e,selectedId:t,defaultSelectedId:n,onSelect:r,onAction:a,longPressDelay:c=450,className:l,dropdownClassName:f,disabled:h=!1,variant:g=`outline`,selected:v=!1,icon:T,label:E,title:D,container:O}){let k=!!(e&&e.length>1),[A,j]=(0,y.useState)(()=>n??e?.[0]?.id),[M,N]=(0,y.useState)(!1),P=(0,y.useRef)(null),F=(0,y.useRef)(!1),I=(0,y.useRef)(null),{container:L,containerRef:R}=m(O),z=t??A,B=e?.find(e=>e.id===z)??e?.[0],V=_(B?.icon,`main`)??T,H=E??B?.label,U=(0,y.useCallback)(()=>{P.current&&=(clearTimeout(P.current),null)},[]);(0,y.useEffect)(()=>U,[U]);let W=()=>{!h&&k&&(F.current=!1,U(),P.current=setTimeout(()=>{F.current=!0,N(!0)},c))},G=()=>{U()},K=()=>{U(),F.current=!1},q=e=>{if(e.preventDefault(),!h){if(e.detail!==0&&F.current){F.current=!1;return}F.current=!1,a?.(B)}},J=n=>{if(typeof n!=`string`)return;let i=e?.find(e=>String(e.id)===n);i&&!i.disabled&&(t===void 0&&j(i.id),N(!1),r?.(i),v||a?.(i))},Y=v?`selected`:`normal`,X=k&&!h&&M,Z=(0,b.jsxs)(`div`,{ref:I,"data-disabled":h?``:void 0,className:i(`group inline-flex items-stretch rounded-none font-sans shadow-none select-none motion-safe:transition-colors`,x[g][Y],h&&`cursor-not-allowed opacity-50`,l),children:[(0,b.jsxs)(`button`,{type:`button`,disabled:h,onClick:q,onPointerDown:W,onPointerUp:G,onPointerLeave:K,onPointerCancel:K,title:D??H,"data-item":`main`,className:i(`flex cursor-pointer flex-col items-center justify-center gap-0.5 border-none bg-transparent px-2.5 py-1.5 motion-safe:transition-colors`,`focus-visible:z-1 focus-visible:focus-double-ring focus-visible:outline-offset-1`,`disabled:cursor-not-allowed`,S[g][Y]),children:[V&&(0,b.jsx)(`span`,{className:`flex items-center justify-center text-current`,"data-item":`icon`,children:V}),H&&(0,b.jsx)(`span`,{className:`font-sans text-compact text-current`,"data-item":`label`,children:H})]}),k&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`div`,{className:i(`w-px shrink-0 self-stretch motion-safe:transition-colors`,w[g][Y]),"data-item":`dropdown`}),(0,b.jsx)(s,{ref:R,render:(0,b.jsx)(`button`,{type:`button`,disabled:h,"aria-label":`도구 선택 메뉴`,className:i(`group flex w-5 shrink-0 cursor-pointer items-center justify-center border-none bg-transparent motion-safe:transition-colors`,`focus-visible:z-1 focus-visible:focus-double-ring focus-visible:outline-offset-1`,`disabled:cursor-not-allowed`,C[g][Y])}),children:(0,b.jsx)(o,{"aria-hidden":`true`,className:`size-3 shrink-0 group-aria-expanded:rotate-180 motion-safe:transition-transform motion-safe:duration-150`,strokeWidth:2.5})})]})]});return k?(0,b.jsxs)(p,{value:z===void 0?void 0:String(z),onValueChange:J,open:X,onOpenChange:e=>{h||N(e)},disabled:h,modal:!1,children:[Z,(0,b.jsx)(u,{anchor:I,container:L,side:`bottom`,align:`start`,sideOffset:2,className:i(`w-auto min-w-(--anchor-width)`,f),children:e?.map(e=>(0,b.jsx)(d,{value:String(e.id),label:e.label,disabled:e.disabled,children:(0,b.jsxs)(`span`,{className:`flex w-full items-center gap-2`,children:[(0,b.jsx)(`span`,{className:`flex shrink-0 items-center justify-center`,"data-item":`menu-icon`,children:_(e.icon,`menu`)}),(0,b.jsx)(`span`,{className:`truncate`,"data-item":`menu-label`,children:e.label})]})},String(e.id)))})]}):Z}var y,b,x,S,C,w;function T(){return(T=e((()=>{y=t(),l(),c(),a(),h(),r(),f(),b=n(),x={outline:{normal:`border border-secondary-border bg-white text-secondary-foreground not-data-disabled:has-[button:hover]:border-neutral-400 not-data-disabled:has-[button[aria-expanded=true]]:border-neutral-400`,selected:`border border-primary bg-surface-info text-primary`},fill:{normal:`border border-transparent bg-secondary text-secondary-foreground`,selected:`border border-transparent bg-primary text-white`},ghost:{normal:`border border-transparent bg-transparent text-secondary-foreground not-data-disabled:hover:bg-secondary/40 not-data-disabled:has-[button:hover]:border-neutral-400 not-data-disabled:has-[button[aria-expanded=true]]:border-neutral-400`,selected:`border border-primary bg-surface-info text-primary`}},S={outline:{normal:`text-muted-foreground not-disabled:hover:bg-outline-primary-hover not-disabled:active:bg-outline-primary-active`,selected:`text-secondary-foreground not-disabled:hover:bg-primary/10 not-disabled:active:bg-primary/20`},fill:{normal:`text-muted-foreground not-disabled:hover:bg-secondary-hover not-disabled:active:bg-secondary-active`,selected:`text-white not-disabled:hover:bg-primary-hover not-disabled:active:bg-primary-active`},ghost:{normal:`text-muted-foreground not-disabled:hover:bg-outline-primary-hover not-disabled:active:bg-outline-primary-active`,selected:`text-secondary-foreground not-disabled:hover:bg-primary/10 not-disabled:active:bg-primary/20`}},C={outline:{normal:`text-muted-foreground not-disabled:hover:bg-outline-primary-hover not-disabled:hover:text-secondary-foreground not-disabled:active:bg-outline-primary-active aria-expanded:bg-secondary aria-expanded:text-secondary-foreground`,selected:`text-muted-foreground not-disabled:hover:bg-primary/10 not-disabled:active:bg-primary/20 aria-expanded:bg-primary/10 aria-expanded:text-primary`},fill:{normal:`text-muted-foreground not-disabled:hover:bg-secondary-hover not-disabled:hover:text-secondary-foreground not-disabled:active:bg-secondary-active aria-expanded:bg-secondary-hover aria-expanded:text-secondary-foreground`,selected:`text-white not-disabled:hover:bg-primary-hover not-disabled:active:bg-primary-active aria-expanded:bg-primary-hover`},ghost:{normal:`text-muted-foreground not-disabled:hover:bg-outline-primary-hover not-disabled:hover:text-secondary-foreground not-disabled:active:bg-outline-primary-active aria-expanded:bg-secondary aria-expanded:text-secondary-foreground`,selected:`text-muted-foreground not-disabled:hover:bg-primary/10 not-disabled:active:bg-primary/20 aria-expanded:bg-primary/10 aria-expanded:text-primary`}},w={outline:{normal:`bg-secondary-border`,selected:`bg-primary/40`},fill:{normal:`bg-secondary-border`,selected:`bg-white/40`},ghost:{normal:`bg-transparent not-in-data-disabled:group-hover:bg-secondary-border not-in-data-disabled:group-has-[button:hover]:bg-secondary-border not-in-data-disabled:group-has-[button[aria-expanded=true]]:bg-secondary-border`,selected:`bg-primary/40`}},v.__docgenInfo={description:``,methods:[],displayName:`SplitToolButton`,props:{longPressDelay:{defaultValue:{value:`450`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},variant:{defaultValue:{value:`'outline'`,computed:!1},required:!1},selected:{defaultValue:{value:`false`,computed:!1},required:!1}}}})))()}function E({className:e=`size-4`}){return(0,N.jsx)(`svg`,{"aria-hidden":`true`,className:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,N.jsx)(`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`})})}function D({className:e=`size-4`}){return(0,N.jsx)(`svg`,{"aria-hidden":`true`,className:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,N.jsx)(`path`,{d:`M12 3l8 6-3 12H7L4 9l8-6z`})})}function O({className:e=`size-4`}){return(0,N.jsx)(`svg`,{"aria-hidden":`true`,className:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,N.jsx)(`path`,{d:`M7 22a5 5 0 0 1-2-4c0-4 4-8 9-8s6 2 6 5c0 4-4 7-9 7a8 8 0 0 1-4-1`})})}function k({className:e=`size-4`}){return(0,N.jsx)(`svg`,{"aria-hidden":`true`,className:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,N.jsx)(`circle`,{cx:`12`,cy:`12`,r:`9`})})}function A({className:e=`size-5`}){return(0,N.jsxs)(`svg`,{"aria-hidden":`true`,className:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,N.jsx)(`path`,{d:`m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z`}),(0,N.jsx)(`path`,{d:`m13 13 6 6`})]})}function j(e){let[t,n]=(0,M.useState)(`rectangle`),[r,i]=(0,M.useState)(!1),[a,o]=(0,M.useState)(`대기 중`);return(0,N.jsxs)(`div`,{className:`flex flex-col items-center gap-4 p-4 font-sans`,children:[(0,N.jsx)(v,{...e,items:B,selectedId:t,selected:r,onAction:e=>{i(e=>!e),o(`${e?.label??`도구`} 액션 실행 (${new Date().toLocaleTimeString()})`)},onSelect:e=>{n(e.id),o(`${e.label} 도구로 교체됨`)}}),(0,N.jsxs)(`div`,{className:`flex flex-col gap-1 border border-secondary-border bg-surface-muted p-3 text-compact text-secondary-foreground`,children:[(0,N.jsxs)(`div`,{children:[`활성화 상태 (selected):`,` `,(0,N.jsx)(`code`,{className:`font-bold text-primary`,children:String(r)})]}),(0,N.jsxs)(`div`,{children:[`현재 도구 (selectedId):`,` `,(0,N.jsx)(`code`,{className:`font-semibold text-secondary-foreground`,children:t})]}),(0,N.jsxs)(`div`,{children:[`최근 로그: `,(0,N.jsx)(`code`,{className:`text-muted-foreground`,children:a})]})]})]})}var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y;function X(){return(X=e((()=>{M=t(),T(),N=n(),{expect:P,fireEvent:F,fn:I,screen:L,userEvent:R,within:z}=__STORYBOOK_MODULE_TEST__,B=[{id:`rectangle`,label:`Rectangle`,icon:{main:(0,N.jsx)(E,{className:`size-5`}),menu:(0,N.jsx)(E,{className:`size-4`})}},{id:`polygon`,label:`Polygon`,icon:{main:(0,N.jsx)(D,{className:`size-5`}),menu:(0,N.jsx)(D,{className:`size-4`})}},{id:`lasso`,label:`Lasso`,icon:{main:(0,N.jsx)(O,{className:`size-5`}),menu:(0,N.jsx)(O,{className:`size-4`})}},{id:`circle`,label:`Circle`,icon:{main:(0,N.jsx)(k,{className:`size-5`}),menu:(0,N.jsx)(k,{className:`size-4`})}}],V={title:`Components/SplitToolButton`,component:v,tags:[`autodocs`],args:{onSelect:I(),onAction:I()},parameters:{layout:`centered`},argTypes:{variant:{control:`radio`,options:[`outline`,`fill`,`ghost`],description:`버튼의 스타일 변형입니다.`},selected:{control:`boolean`,description:`도구 활성화 여부입니다.`},longPressDelay:{control:{type:`number`,min:200,max:1500,step:50},description:`롱프레스 지연 시간(ms)입니다.`},disabled:{control:`boolean`,description:`비활성화 여부입니다.`}}},H={args:{items:B,defaultSelectedId:`rectangle`,variant:`outline`,selected:!1,longPressDelay:450},play:async({canvasElement:e,args:t})=>{let n=z(e),r=n.getByRole(`button`,{name:`Rectangle`});await R.click(r),await P(t.onAction).toHaveBeenCalledTimes(1);let i=n.getByRole(`combobox`,{name:`도구 선택 메뉴`});await R.click(i);let a=await L.findByRole(`option`,{name:/Polygon/});await R.click(a),await P(t.onSelect).toHaveBeenCalledTimes(1),await P(n.getByRole(`button`,{name:`Polygon`})).toBeInTheDocument()}},U={args:{items:[{id:`rect`,label:`Rect`,icon:(0,N.jsx)(E,{})},{id:`poly`,label:`Poly`,icon:(0,N.jsx)(D,{})}],longPressDelay:50,selected:!0},play:async({canvasElement:e,args:t})=>{let n=z(e).getByRole(`button`,{name:`Rect`});await F.pointerDown(n),await F.pointerLeave(n),await F.pointerDown(n),await new Promise(e=>setTimeout(e,80)),await F.pointerUp(n),await F.click(n,{detail:1}),await P(t.onAction).not.toHaveBeenCalled();let r=await L.findByRole(`option`,{name:/Poly/});await R.click(r),await P(t.onSelect).toHaveBeenCalledTimes(1),await P(t.onAction).not.toHaveBeenCalled()}},W={args:{icon:(0,N.jsx)(A,{className:`size-5`}),label:`Select`,variant:`outline`,selected:!1},play:async({canvasElement:e,args:t})=>{let n=z(e);await R.click(n.getByRole(`button`,{name:`Select`})),await P(t.onAction).toHaveBeenCalledTimes(1)}},G={render:()=>(0,N.jsxs)(`div`,{className:`flex items-center gap-6 p-4 font-sans text-xs`,children:[(0,N.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,N.jsx)(v,{items:B,label:`그리기`,variant:`outline`}),(0,N.jsx)(`span`,{className:`text-muted-foreground`,children:`고정 라벨 (label="그리기")`})]}),(0,N.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,N.jsx)(v,{items:B,variant:`outline`,className:`**:data-[item=dropdown]:bg-primary/30 **:data-[item=label]:font-semibold **:data-[item=main]:px-4`}),(0,N.jsx)(`span`,{className:`text-muted-foreground`,children:`data-item 슬롯 오버라이드`})]})]})},K={render:()=>(0,N.jsxs)(`div`,{className:`flex flex-col gap-6 p-4 font-sans text-xs`,children:[(0,N.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,N.jsx)(`span`,{className:`font-semibold text-secondary-foreground`,children:`Split (With Items)`}),(0,N.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,N.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,N.jsx)(v,{items:B,variant:`outline`}),(0,N.jsx)(`span`,{className:`text-muted-foreground`,children:`outline`})]}),(0,N.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,N.jsx)(v,{items:B,variant:`fill`}),(0,N.jsx)(`span`,{className:`text-muted-foreground`,children:`fill`})]}),(0,N.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,N.jsx)(v,{items:B,variant:`ghost`}),(0,N.jsx)(`span`,{className:`text-muted-foreground`,children:`ghost`})]})]})]}),(0,N.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,N.jsx)(`span`,{className:`font-semibold text-secondary-foreground`,children:`Single (No Items)`}),(0,N.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,N.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,N.jsx)(v,{icon:(0,N.jsx)(E,{className:`size-5`}),label:`Rectangle`,variant:`outline`}),(0,N.jsx)(`span`,{className:`text-muted-foreground`,children:`outline`})]}),(0,N.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,N.jsx)(v,{icon:(0,N.jsx)(E,{className:`size-5`}),label:`Rectangle`,variant:`fill`}),(0,N.jsx)(`span`,{className:`text-muted-foreground`,children:`fill`})]}),(0,N.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,N.jsx)(v,{icon:(0,N.jsx)(E,{className:`size-5`}),label:`Rectangle`,variant:`ghost`}),(0,N.jsx)(`span`,{className:`text-muted-foreground`,children:`ghost`})]})]})]})]})},q={render:()=>(0,N.jsxs)(`div`,{className:`flex flex-col gap-6 p-4 font-sans text-xs`,children:[(0,N.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,N.jsx)(`span`,{className:`font-semibold text-secondary-foreground`,children:`Normal`}),(0,N.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,N.jsx)(v,{items:B,variant:`outline`,selected:!1}),(0,N.jsx)(v,{items:B,variant:`fill`,selected:!1}),(0,N.jsx)(v,{items:B,variant:`ghost`,selected:!1})]})]}),(0,N.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,N.jsx)(`span`,{className:`font-semibold text-primary`,children:`Selected (Active)`}),(0,N.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,N.jsx)(v,{items:B,variant:`outline`,selected:!0}),(0,N.jsx)(v,{items:B,variant:`fill`,selected:!0}),(0,N.jsx)(v,{items:B,variant:`ghost`,selected:!0})]})]}),(0,N.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,N.jsx)(`span`,{className:`font-semibold text-text-disabled`,children:`Disabled`}),(0,N.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,N.jsx)(v,{items:B,variant:`outline`,disabled:!0}),(0,N.jsx)(v,{items:B,variant:`fill`,disabled:!0}),(0,N.jsx)(v,{items:B,variant:`ghost`,disabled:!0})]})]})]})},J={args:{variant:`outline`,disabled:!1,longPressDelay:450},render:e=>(0,N.jsx)(j,{...e})},Y=[`Default`,`LongPressAndPlainIcon`,`SingleButton`,`FixedLabelAndCustomSlots`,`AllVariants`,`States`,`Controlled`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    items: selectTools,
    defaultSelectedId: 'rectangle',
    variant: 'outline',
    selected: false,
    longPressDelay: 450
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);

    // 1) 메인 버튼 클릭 -> handleMainClick -> onAction 호출
    const mainBtn = canvas.getByRole('button', {
      name: 'Rectangle'
    });
    await userEvent.click(mainBtn);
    await expect(args.onAction).toHaveBeenCalledTimes(1);

    // 2) 드롭다운 화살표 클릭 (role="combobox", name="도구 선택 메뉴") -> 메뉴 오픈 -> Polygon 선택
    const menuBtn = canvas.getByRole('combobox', {
      name: '도구 선택 메뉴'
    });
    await userEvent.click(menuBtn);
    const polygonOption = await screen.findByRole('option', {
      name: /Polygon/
    });
    await userEvent.click(polygonOption);
    await expect(args.onSelect).toHaveBeenCalledTimes(1);
    await expect(canvas.getByRole('button', {
      name: 'Polygon'
    })).toBeInTheDocument();
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'rect',
      label: 'Rect',
      icon: <RectangleIcon />
    }, {
      id: 'poly',
      label: 'Poly',
      icon: <PolygonIcon />
    }],
    longPressDelay: 50,
    selected: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const mainBtn = canvas.getByRole('button', {
      name: 'Rect'
    });

    // 1) pointerDown 직후 pointerLeave -> 타이머 취소 분기
    await fireEvent.pointerDown(mainBtn);
    await fireEvent.pointerLeave(mainBtn);

    // 2) 롱프레스 지연 시간(50ms) 경과 -> 자동 드롭다운 오픈 & 직후 클릭 무시 분기
    await fireEvent.pointerDown(mainBtn);
    await new Promise(resolve => setTimeout(resolve, 80));
    await fireEvent.pointerUp(mainBtn);

    // 직후 발생하는 마우스 click(detail: 1) 조기 return 분기
    await fireEvent.click(mainBtn, {
      detail: 1
    });
    await expect(args.onAction).not.toHaveBeenCalled();

    // 3) selected={true} 상태에서 메뉴 아이템(Poly) 선택 -> !selected false 분기
    const polyOption = await screen.findByRole('option', {
      name: /Poly/
    });
    await userEvent.click(polyOption);
    await expect(args.onSelect).toHaveBeenCalledTimes(1);
    await expect(args.onAction).not.toHaveBeenCalled();
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <PointerIcon className="size-5" />,
    label: 'Select',
    variant: 'outline',
    selected: false
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Select'
    }));
    await expect(args.onAction).toHaveBeenCalledTimes(1);
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    disabled: false,
    longPressDelay: 450
  },
  render: args => <ControlledSplitToolButtonDemo {...args} />
}`,...J.parameters?.docs?.source}}}})))()}X();export{K as AllVariants,J as Controlled,H as Default,G as FixedLabelAndCustomSlots,U as LongPressAndPlainIcon,W as SingleButton,q as States,Y as __namedExportsOrder,V as default};