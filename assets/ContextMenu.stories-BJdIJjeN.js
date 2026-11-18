import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{b as n,n as r}from"./iframe-sFfd_MYY.js";import{c as i,t as a}from"./utils-CynS5U15.js";import{r as o,t as s}from"./useRenderElement-DpsBghGd.js";import{n as c}from"./owner-BYyKvnRE.js";import{n as l,t as u}from"./createLucideIcon-Bv1AFRo0.js";import{n as d,t as ee}from"./check-wsHSQRGk.js";import{n as f,t as te}from"./chevron-right-C0eRZFwG.js";import{A as p,B as ne,C as m,D as re,E as h,F as g,G as _,H as v,I as y,J as b,K as x,L as ie,M as ae,N as oe,O as S,P as se,Q as ce,R as le,S as ue,T as de,U as fe,V as pe,W as me,X as he,Y as ge,Z as _e,_ as ve,a as ye,b as be,c as xe,g as Se,h as Ce,i as we,j as Te,k as Ee,l as De,m as Oe,n as ke,o as Ae,p as je,q as Me,r as Ne,s as Pe,t as Fe,u as Ie,v as Le,w as Re,x as ze,y as Be,z as Ve}from"./MenuSubmenuTrigger-PdpR4HrO.js";import{n as He,t as Ue}from"./layers-Be1waVsd.js";import{n as We,t as C}from"./trash-B_mYUGT1.js";import{t as Ge}from"./addEventListener-DZRSue9x.js";import{pt as Ke,ut as qe}from"./usePositioner-TqQsSGsN.js";import{A as Je,M as Ye,O as Xe,a as Ze,f as Qe,i as $e,r as et}from"./useBaseUiId-DQwlZXWD.js";import{n as tt,r as nt}from"./useTimeout-c6KEQbDR.js";import{f as w,m as rt,p as it}from"./DirectionContext-BTcpy9cT.js";import{A as at,I as ot}from"./composite-CE19_03I.js";import{n as st,t as ct}from"./useMergedRef-ay18fnn7.js";import{n as lt,t as ut}from"./usePortalContainer-qKW-IByM.js";var T,dt;function ft(){return(ft=t((()=>{l(),T={name:`copy`,size:24,node:[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]},T.node,dt=u(T)})))()}function pt(e){let[t,n]=E.useState({getBoundingClientRect(){return DOMRect.fromRect({width:0,height:0,x:0,y:0})}}),r=E.useRef(null),i=E.useRef(null),a=E.useRef(null),o=E.useRef(null),s=E.useRef(!0),c=E.useRef(null),l=$e(),u=E.useMemo(()=>({anchor:t,setAnchor:n,actionsRef:a,backdropRef:r,internalBackdropRef:i,positionerRef:o,allowMouseUpTriggerRef:s,initialCursorPointRef:c,rootId:l}),[t,l]);return(0,D.jsx)(le.Provider,{value:u,children:(0,D.jsx)(g.Provider,{value:void 0,children:(0,D.jsx)(De,{...e})})})}var E,D;function mt(){return(mt=t((()=>{E=e(n(),1),et(),Ve(),Ie(),y(),D=r()})))()}var O,k,ht;function gt(){return(gt=t((()=>{O=e(n(),1),tt(),rt(),at(),Ve(),y(),s(),Ye(),qe(),Qe(),Ae(),k=500,ht=O.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,{setAnchor:s,actionsRef:l,internalBackdropRef:u,backdropRef:d,positionerRef:ee,allowMouseUpTriggerRef:f,initialCursorPointRef:te,rootId:p}=ne(!1),{store:m}=ie(!1),re=m.useState(`open`),h=m.useState(`disabled`),g=O.useRef(null),_=O.useRef(null),v=nt(),y=nt(),b=O.useRef(!1),x=O.useRef(null);function ae(e,t,n){let r=n.type.startsWith(`touch`);te.current={x:e,y:t},s({getBoundingClientRect(){return DOMRect.fromRect({width:r?10:0,height:r?10:0,x:e,y:t})}}),b.current=!1,l.current?.setOpen(!0,Je(Xe,n)),y.start(k,()=>{b.current=!0})}function oe(e){if(h)return;f.current=!0,ot(e),ae(e.clientX,e.clientY,e.nativeEvent);let t=c(g.current);x.current?.abort();let n=new AbortController;x.current=n,t.addEventListener(`mouseup`,e=>{if(f.current=!1,!b.current)return;y.clear(),b.current=!1;let t=it(e);w(ee.current,t)||p&&t&&ye(t)===p||l.current?.setOpen(!1,Je(Ze,e))},{once:!0,signal:n.signal})}function S(){v.clear(),_.current=null}function se(e){if(h){S();return}if(f.current=!1,e.touches.length!==1){S();return}e.stopPropagation();let t=e.touches[0],n={x:t.clientX,y:t.clientY};_.current=n,v.start(k,()=>{ae(n.x,n.y,e.nativeEvent)})}function ce(e){if(e.touches.length!==1){S();return}if(v.isStarted()&&_.current){let t=e.touches[0],n=Math.abs(t.clientX-_.current.x),r=Math.abs(t.clientY-_.current.y);(n>10||r>10)&&S()}}return O.useEffect(()=>()=>{x.current?.abort()},[]),O.useEffect(()=>{function e(e){if(h)return;let t=it(e);(w(g.current,t)||w(u.current,t)||w(d.current,t))&&e.preventDefault()}let t=c(g.current);return Ge(t,`contextmenu`,e)},[d,h,u]),o(`div`,e,{state:{open:re},ref:[g,t],props:[{onContextMenu:oe,onTouchStart:se,onTouchMove:ce,onTouchEnd:S,onTouchCancel:S,style:{WebkitTouchCallout:`none`}},a],stateAttributesMapping:Ke})})})))()}var A;function _t(){return(_t=t((()=>{be(),A=Be})))()}function j({...e}){let{container:t,containerRef:n}=lt(),r=(0,B.useMemo)(()=>({container:t,registerTriggerNode:n}),[t,n]);return(0,V.jsx)(U.Provider,{value:r,children:(0,V.jsx)(pt,{"data-slot":`context-menu`,...e})})}function vt({container:e,...t}){let n=(0,B.useContext)(U);return(0,V.jsx)(ze,{"data-slot":`context-menu-portal`,container:e??n?.container,...t})}function M({className:e,ref:t,...n}){let r=(0,B.useContext)(U),i=st(r?.registerTriggerNode,t);return(0,V.jsx)(ht,{ref:i,"data-slot":`context-menu-trigger`,className:a(`select-none`,e),...n})}function N({className:e,side:t,sideOffset:n=0,align:r=`start`,alignOffset:i=0,container:o,...s}){return(0,V.jsx)(vt,{container:o,children:(0,V.jsx)(A,{"data-slot":`context-menu-positioner`,side:t,sideOffset:n,align:r,alignOffset:i,className:`z-50 outline-none`,children:(0,V.jsx)(m,{"data-slot":`context-menu-content`,className:a(wt,e),...s})})})}function yt({...e}){return(0,V.jsx)(W.Provider,{value:!0,children:(0,V.jsx)(Ee,{"data-slot":`context-menu-group`,...e})})}function P({className:e,inset:t,...n}){let r=(0,B.useContext)(W),i=a(`px-2 py-1.5 text-xs font-medium text-muted-foreground select-none data-inset:pl-7`,e);return r?(0,V.jsx)(re,{"data-slot":`context-menu-label`,"data-inset":t?!0:void 0,className:i,...n}):(0,V.jsx)(`div`,{"data-slot":`context-menu-label`,"data-inset":t?!0:void 0,className:i,...n})}function F({className:e,inset:t,variant:n=`default`,...r}){return(0,V.jsx)(de,{"data-slot":`context-menu-item`,"data-inset":t?!0:void 0,"data-variant":n,className:a(H,`data-inset:pl-7`,`data-[variant=destructive]:text-destructive data-[variant=destructive]:data-highlighted:bg-destructive/10 data-[variant=destructive]:data-highlighted:text-destructive`,e),...r})}function I({className:e,children:t,...n}){return(0,V.jsxs)(oe,{"data-slot":`context-menu-checkbox-item`,className:a(H,`pr-2 pl-7`,e),...n,children:[(0,V.jsx)(`span`,{className:`pointer-events-none absolute left-2 flex size-3.5 items-center justify-center`,children:(0,V.jsx)(Te,{children:(0,V.jsx)(ee,{className:`size-3.5`})})}),t]})}function bt({...e}){return(0,V.jsx)(W.Provider,{value:!0,children:(0,V.jsx)(ve,{"data-slot":`context-menu-radio-group`,...e})})}function L({className:e,children:t,...n}){return(0,V.jsxs)(Ce,{"data-slot":`context-menu-radio-item`,className:a(H,`pr-2 pl-7`,e),...n,children:[(0,V.jsx)(`span`,{className:`pointer-events-none absolute left-2 flex size-3.5 items-center justify-center`,children:(0,V.jsx)(je,{children:(0,V.jsx)(`span`,{className:`size-1.5 rounded-full bg-current`})})}),t]})}function R({className:e,...t}){return(0,V.jsx)(Ne,{"data-slot":`context-menu-separator`,className:a(`-mx-1 my-1 h-px bg-secondary-border`,e),...t})}function z({className:e,...t}){return(0,V.jsx)(`span`,{"data-slot":`context-menu-shortcut`,className:a(`ml-auto text-[11px] tracking-widest text-muted-foreground`,e),...t})}function xt({...e}){return(0,V.jsx)(Pe,{"data-slot":`context-menu-sub`,...e})}function St({className:e,inset:t,children:n,...r}){return(0,V.jsxs)(Fe,{"data-slot":`context-menu-sub-trigger`,"data-inset":t?!0:void 0,className:a(H,`data-inset:pl-7`,`data-popup-open:text-foreground data-popup-open:bg-surface-muted`,e),...r,children:[n,(0,V.jsx)(te,{className:`ml-auto size-3.5`})]})}function Ct({className:e,side:t=`right`,sideOffset:n=2,align:r=`start`,alignOffset:i=-4,container:o,...s}){return(0,V.jsx)(vt,{container:o,children:(0,V.jsx)(A,{"data-slot":`context-menu-sub-positioner`,side:t,sideOffset:n,align:r,alignOffset:i,className:`z-50 outline-none`,children:(0,V.jsx)(m,{"data-slot":`context-menu-sub-content`,className:a(wt,e),...s})})})}var B,V,H,wt,U,W;function Tt(){return(Tt=t((()=>{B=n(),mt(),ue(),gt(),_t(),Re(),p(),S(),h(),se(),ae(),Le(),Se(),Oe(),we(),xe(),ke(),d(),f(),ct(),ut(),i(),V=r(),H=a(`relative flex cursor-default items-center gap-2 rounded-none px-2 py-1.5 text-xs outline-none select-none`,`data-highlighted:text-foreground data-highlighted:bg-surface-muted`,`data-disabled:pointer-events-none data-disabled:opacity-50`,`[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-3.5`),wt=a(`text-foreground max-h-(--available-height) min-w-36 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-none border border-secondary-border bg-white p-1 font-sans shadow-md outline-none`,`data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95`,`data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95`),U=(0,B.createContext)(null),W=(0,B.createContext)(!1),j.__docgenInfo={description:``,methods:[],displayName:`ContextMenu`},vt.__docgenInfo={description:``,methods:[],displayName:`ContextMenuPortal`},M.__docgenInfo={description:``,methods:[],displayName:`ContextMenuTrigger`},N.__docgenInfo={description:``,methods:[],displayName:`ContextMenuContent`,props:{sideOffset:{defaultValue:{value:`0`,computed:!1},required:!1},align:{defaultValue:{value:`'start'`,computed:!1},required:!1},alignOffset:{defaultValue:{value:`0`,computed:!1},required:!1}}},yt.__docgenInfo={description:``,methods:[],displayName:`ContextMenuGroup`},P.__docgenInfo={description:``,methods:[],displayName:`ContextMenuLabel`},F.__docgenInfo={description:``,methods:[],displayName:`ContextMenuItem`,props:{variant:{defaultValue:{value:`'default'`,computed:!1},required:!1}}},I.__docgenInfo={description:``,methods:[],displayName:`ContextMenuCheckboxItem`},bt.__docgenInfo={description:``,methods:[],displayName:`ContextMenuRadioGroup`},L.__docgenInfo={description:``,methods:[],displayName:`ContextMenuRadioItem`},R.__docgenInfo={description:``,methods:[],displayName:`ContextMenuSeparator`},z.__docgenInfo={description:``,methods:[],displayName:`ContextMenuShortcut`},xt.__docgenInfo={description:``,methods:[],displayName:`ContextMenuSub`},St.__docgenInfo={description:``,methods:[],displayName:`ContextMenuSubTrigger`},Ct.__docgenInfo={description:``,methods:[],displayName:`ContextMenuSubContent`,props:{side:{defaultValue:{value:`'right'`,computed:!1},required:!1},sideOffset:{defaultValue:{value:`2`,computed:!1},required:!1},align:{defaultValue:{value:`'start'`,computed:!1},required:!1},alignOffset:{defaultValue:{value:`-4`,computed:!1},required:!1}}}})))()}function Et(){let[e,t]=(0,Dt.useState)(!0),[n,r]=(0,Dt.useState)(`webworker`);return(0,G.jsxs)(j,{children:[(0,G.jsxs)(M,{className:`flex h-52 w-96 cursor-context-menu flex-col items-center justify-center rounded-none border border-dashed border-secondary-border bg-neutral-50 text-xs text-neutral-500 hover:bg-neutral-100/60`,children:[(0,G.jsx)(Ue,{className:`mb-2 size-6 text-neutral-400`}),(0,G.jsx)(`span`,{children:`이 영역을 우클릭하여 메뉴를 엽니다`})]}),(0,G.jsxs)(N,{className:`w-56`,children:[(0,G.jsxs)(F,{children:[(0,G.jsx)(ge,{}),(0,G.jsx)(`span`,{children:`레이어 보기`}),(0,G.jsx)(z,{children:`⌘+V`})]}),(0,G.jsxs)(F,{children:[(0,G.jsx)(pe,{}),(0,G.jsx)(`span`,{children:`영역으로 줌`}),(0,G.jsx)(z,{children:`⌘+Z`})]}),(0,G.jsx)(R,{}),(0,G.jsxs)(xt,{children:[(0,G.jsxs)(St,{inset:!0,children:[(0,G.jsx)(_e,{}),(0,G.jsx)(`span`,{children:`내보내기`})]}),(0,G.jsxs)(Ct,{className:`w-40`,children:[(0,G.jsx)(F,{children:`GeoJSON (.geojson)`}),(0,G.jsx)(F,{children:`Shapefile (.zip)`}),(0,G.jsx)(F,{children:`GeoTIFF (.tif)`})]})]}),(0,G.jsx)(R,{}),(0,G.jsx)(I,{checked:e,onCheckedChange:t,children:`바운딩박스 경계 표시`}),(0,G.jsx)(R,{}),(0,G.jsx)(P,{children:`렌더링 엔진`}),(0,G.jsxs)(bt,{value:n,onValueChange:r,children:[(0,G.jsx)(L,{value:`canvas`,children:`Canvas 2D`}),(0,G.jsx)(L,{value:`webworker`,children:`WebWorker Offscreen`}),(0,G.jsx)(L,{value:`webgl`,children:`WebGL`})]}),(0,G.jsx)(R,{}),(0,G.jsxs)(F,{variant:`destructive`,children:[(0,G.jsx)(C,{}),(0,G.jsx)(`span`,{children:`레이어 삭제`}),(0,G.jsx)(z,{children:`Delete`})]})]})]})}var Dt,G,K,q,J,Y,X,Ot,Z,Q,$,kt;function At(){return(At=t((()=>{Dt=n(),ft(),ce(),he(),He(),b(),x(),me(),We(),v(),Tt(),G=r(),{expect:K,fireEvent:q,screen:J,userEvent:Y,within:X}=__STORYBOOK_MODULE_TEST__,Ot={title:`Components/ContextMenu`,component:j,subcomponents:{ContextMenuTrigger:M,ContextMenuContent:N,ContextMenuItem:F,ContextMenuCheckboxItem:I,ContextMenuRadioGroup:bt,ContextMenuRadioItem:L,ContextMenuLabel:P,ContextMenuSeparator:R,ContextMenuShortcut:z,ContextMenuGroup:yt,ContextMenuSub:xt,ContextMenuSubTrigger:St,ContextMenuSubContent:Ct},parameters:{layout:`centered`},tags:[`autodocs`]},Z={render:()=>(0,G.jsx)(Et,{}),play:async({canvasElement:e})=>{let t=X(e).getByText(`이 영역을 우클릭하여 메뉴를 엽니다`);await q.contextMenu(t),await K(await J.findByRole(`menu`)).toBeInTheDocument();let n=J.getByRole(`menuitemcheckbox`,{name:/바운딩박스 경계 표시/});await Y.click(n);let r=J.getByRole(`menuitemradio`,{name:/Canvas 2D/});await Y.click(r);let i=J.getByRole(`menuitem`,{name:/내보내기/});await Y.hover(i),await Y.click(i);let a=await J.findByRole(`menuitem`,{name:`GeoJSON (.geojson)`});await Y.click(a)}},Q={render:()=>(0,G.jsxs)(`div`,{className:`flex w-84 flex-col border border-secondary-border bg-white shadow-xs`,children:[(0,G.jsx)(`div`,{className:`border-b border-secondary-border bg-neutral-50 px-3 py-2`,children:(0,G.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`레이어 트리 (우클릭 테스트)`})}),(0,G.jsxs)(`div`,{className:`flex flex-col p-1`,children:[(0,G.jsxs)(j,{children:[(0,G.jsxs)(M,{className:`flex cursor-context-menu items-center justify-between px-2.5 py-1.5 text-xs hover:bg-neutral-100 data-open:bg-neutral-100`,children:[(0,G.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,G.jsx)(Me,{className:`size-3.5 text-blue-600`}),(0,G.jsx)(`span`,{className:`font-mono text-2xs text-secondary-foreground`,children:`tl_scco_ctprvn (행정구역)`})]}),(0,G.jsx)(`span`,{className:`text-footer-muted text-2xs`,children:`Polygon`})]}),(0,G.jsxs)(N,{className:`w-48`,children:[(0,G.jsxs)(yt,{children:[(0,G.jsx)(P,{children:`속성 및 편집`}),(0,G.jsxs)(F,{children:[(0,G.jsx)(_,{}),(0,G.jsx)(`span`,{children:`심볼 편집기 열기`}),(0,G.jsx)(z,{children:`⌘+E`})]}),(0,G.jsxs)(F,{children:[(0,G.jsx)(dt,{}),(0,G.jsx)(`span`,{children:`레이어 복제`}),(0,G.jsx)(z,{children:`⌘+D`})]}),(0,G.jsxs)(F,{children:[(0,G.jsx)(fe,{}),(0,G.jsx)(`span`,{children:`데이터 새로고침`}),(0,G.jsx)(z,{children:`⌘+R`})]})]}),(0,G.jsx)(R,{}),(0,G.jsxs)(F,{variant:`destructive`,children:[(0,G.jsx)(C,{}),(0,G.jsx)(`span`,{children:`레이어 제거`}),(0,G.jsx)(z,{children:`Delete`})]})]})]}),(0,G.jsxs)(j,{children:[(0,G.jsxs)(M,{className:`flex cursor-context-menu items-center justify-between px-2.5 py-1.5 text-xs hover:bg-neutral-100 data-open:bg-neutral-100`,children:[(0,G.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,G.jsx)(Ue,{className:`size-3.5 text-emerald-600`}),(0,G.jsx)(`span`,{className:`font-mono text-2xs text-secondary-foreground`,children:`rain_obs_station (관측소)`})]}),(0,G.jsx)(`span`,{className:`text-footer-muted text-2xs`,children:`Point`})]}),(0,G.jsxs)(N,{className:`w-48`,children:[(0,G.jsx)(P,{children:`속성 및 편집`}),(0,G.jsxs)(F,{children:[(0,G.jsx)(pe,{}),(0,G.jsx)(`span`,{children:`관측소 전체로 줌`}),(0,G.jsx)(z,{children:`⌘+1`})]}),(0,G.jsxs)(F,{children:[(0,G.jsx)(_,{}),(0,G.jsx)(`span`,{children:`스타일 속성 변경`})]}),(0,G.jsx)(R,{}),(0,G.jsxs)(F,{variant:`destructive`,children:[(0,G.jsx)(C,{}),(0,G.jsx)(`span`,{children:`레이어 제거`}),(0,G.jsx)(z,{children:`Delete`})]})]})]})]})]}),play:async({canvasElement:e})=>{let t=X(e).getByText(`tl_scco_ctprvn (행정구역)`);await q.contextMenu(t);let n=await J.findByRole(`menuitem`,{name:/레이어 복제/});await Y.click(n)}},$={render:()=>(0,G.jsxs)(j,{children:[(0,G.jsx)(M,{className:`flex h-36 w-80 cursor-context-menu items-center justify-center border border-dashed border-secondary-border bg-white text-xs text-neutral-500`,children:`우클릭하여 인셋 정렬 확인`}),(0,G.jsxs)(N,{className:`w-52`,children:[(0,G.jsxs)(F,{children:[(0,G.jsx)(ge,{}),(0,G.jsx)(`span`,{children:`아이콘 있는 항목`})]}),(0,G.jsxs)(F,{inset:!0,children:[(0,G.jsx)(`span`,{children:`인셋(Inset) 항목`}),(0,G.jsx)(z,{children:`⌘+I`})]}),(0,G.jsx)(R,{}),(0,G.jsx)(P,{inset:!0,children:`인셋 라벨`}),(0,G.jsx)(I,{defaultChecked:!0,children:`인셋 체크박스`})]})]}),play:async({canvasElement:e})=>{let t=X(e).getByText(`우클릭하여 인셋 정렬 확인`);await q.contextMenu(t),await K(await J.findByText(`인셋 라벨`)).toBeInTheDocument(),await Y.keyboard(`{Escape}`)}},kt=[`Default`,`LayerTreeContext`,`InsetItems`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <DefaultContextMenuDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByText('이 영역을 우클릭하여 메뉴를 엽니다');

    // 1. 우클릭으로 컨텍스트 메뉴 열기
    await fireEvent.contextMenu(trigger);
    await expect(await screen.findByRole('menu')).toBeInTheDocument();

    // 2. 체크박스 토글
    const checkbox = screen.getByRole('menuitemcheckbox', {
      name: /바운딩박스 경계 표시/
    });
    await userEvent.click(checkbox);

    // 3. 라디오 선택
    const canvasRadio = screen.getByRole('menuitemradio', {
      name: /Canvas 2D/
    });
    await userEvent.click(canvasRadio);

    // 4. 서브메뉴 열기 및 하위 메뉴 아이템 클릭
    const subTrigger = screen.getByRole('menuitem', {
      name: /내보내기/
    });
    await userEvent.hover(subTrigger);
    await userEvent.click(subTrigger);
    const geojsonItem = await screen.findByRole('menuitem', {
      name: 'GeoJSON (.geojson)'
    });
    await userEvent.click(geojsonItem);
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-84 flex-col border border-secondary-border bg-white shadow-xs">
      <div className="border-b border-secondary-border bg-neutral-50 px-3 py-2">
        <span className="text-xs font-semibold text-secondary-foreground">
          레이어 트리 (우클릭 테스트)
        </span>
      </div>

      <div className="flex flex-col p-1">
        <ContextMenu>
          <ContextMenuTrigger className="flex cursor-context-menu items-center justify-between px-2.5 py-1.5 text-xs hover:bg-neutral-100 data-open:bg-neutral-100">
            <div className="flex items-center gap-2">
              <MapPin className="size-3.5 text-blue-600" />
              <span className="font-mono text-2xs text-secondary-foreground">
                tl_scco_ctprvn (행정구역)
              </span>
            </div>
            <span className="text-footer-muted text-2xs">Polygon</span>
          </ContextMenuTrigger>

          <ContextMenuContent className="w-48">
            <ContextMenuGroup>
              <ContextMenuLabel>속성 및 편집</ContextMenuLabel>
              <ContextMenuItem>
                <Pencil />
                <span>심볼 편집기 열기</span>
                <ContextMenuShortcut>⌘+E</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                <Copy />
                <span>레이어 복제</span>
                <ContextMenuShortcut>⌘+D</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                <RotateCw />
                <span>데이터 새로고침</span>
                <ContextMenuShortcut>⌘+R</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuGroup>

            <ContextMenuSeparator />

            <ContextMenuItem variant="destructive">
              <Trash2 />
              <span>레이어 제거</span>
              <ContextMenuShortcut>Delete</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>

        <ContextMenu>
          <ContextMenuTrigger className="flex cursor-context-menu items-center justify-between px-2.5 py-1.5 text-xs hover:bg-neutral-100 data-open:bg-neutral-100">
            <div className="flex items-center gap-2">
              <Layers className="size-3.5 text-emerald-600" />
              <span className="font-mono text-2xs text-secondary-foreground">
                rain_obs_station (관측소)
              </span>
            </div>
            <span className="text-footer-muted text-2xs">Point</span>
          </ContextMenuTrigger>

          <ContextMenuContent className="w-48">
            <ContextMenuLabel>속성 및 편집</ContextMenuLabel>
            <ContextMenuItem>
              <ZoomIn />
              <span>관측소 전체로 줌</span>
              <ContextMenuShortcut>⌘+1</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              <Pencil />
              <span>스타일 속성 변경</span>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem variant="destructive">
              <Trash2 />
              <span>레이어 제거</span>
              <ContextMenuShortcut>Delete</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </div>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const layerRow = canvas.getByText('tl_scco_ctprvn (행정구역)');
    await fireEvent.contextMenu(layerRow);
    const duplicateItem = await screen.findByRole('menuitem', {
      name: /레이어 복제/
    });
    await userEvent.click(duplicateItem);
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu>
      <ContextMenuTrigger className="flex h-36 w-80 cursor-context-menu items-center justify-center border border-dashed border-secondary-border bg-white text-xs text-neutral-500">
        우클릭하여 인셋 정렬 확인
      </ContextMenuTrigger>

      <ContextMenuContent className="w-52">
        <ContextMenuItem>
          <Eye />
          <span>아이콘 있는 항목</span>
        </ContextMenuItem>
        <ContextMenuItem inset>
          <span>인셋(Inset) 항목</span>
          <ContextMenuShortcut>⌘+I</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuLabel inset>인셋 라벨</ContextMenuLabel>
        <ContextMenuCheckboxItem defaultChecked>
          인셋 체크박스
        </ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByText('우클릭하여 인셋 정렬 확인');
    await fireEvent.contextMenu(trigger);
    await expect(await screen.findByText('인셋 라벨')).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
  }
}`,...$.parameters?.docs?.source}}}})))()}At();export{Z as Default,$ as InsetItems,Q as LayerTreeContext,kt as __namedExportsOrder,Ot as default};