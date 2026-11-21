import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{b as n,n as r}from"./iframe-D8PjfN8a.js";import{l as i,t as a}from"./utils-CXswP1E2.js";import{r as o,t as s}from"./useRenderElement-BHa6XuqF.js";import{n as c}from"./owner-B_wT2qIV.js";import{n as l,t as u}from"./createLucideIcon-COpPE7dS.js";import{n as ee,t as te}from"./check-DxNfUxwU.js";import{n as d,t as ne}from"./chevron-right-BVnrwZ8G.js";import{A as f,B as re,C as p,D as ie,E as m,F as h,G as g,H as _,I as v,J as y,K as b,L as ae,M as oe,N as se,O as x,P as ce,Q as le,R as ue,S as de,T as fe,U as pe,V as me,W as he,X as ge,Y as _e,Z as ve,_ as ye,a as be,b as xe,c as Se,g as Ce,h as we,i as Te,j as Ee,k as De,l as Oe,m as ke,n as Ae,o as je,p as Me,q as Ne,r as Pe,s as Fe,t as Ie,u as Le,v as Re,w as ze,x as Be,y as Ve,z as He}from"./MenuSubmenuTrigger-CtLR1U8r.js";import{n as Ue,t as We}from"./layers-DZ8NB9z9.js";import{n as Ge,t as S}from"./trash-CznQl1lu.js";import{t as Ke}from"./addEventListener-Bf7lxbra.js";import{pt as qe,ut as Je}from"./usePositioner-Q9wMORg9.js";import{A as Ye,M as Xe,O as Ze,a as Qe,f as $e,i as et,r as tt}from"./useBaseUiId-BZr6wrg4.js";import{n as nt,r as rt}from"./useTimeout-CjXp0qmq.js";import{f as C,m as it,p as at}from"./DirectionContext-BJ1TknKZ.js";import{A as ot,I as st}from"./composite-EuZO9d6v.js";import{n as ct,t as lt}from"./useMergedRef-Ci8kvaS6.js";import{n as ut,t as dt}from"./usePortalContainer-Cbne_Xai.js";var ft,pt;function mt(){return(mt=t((()=>{l(),ft={name:`copy`,size:24,node:[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]},ft.node,pt=u(ft)})))()}function ht(e){let[t,n]=w.useState({getBoundingClientRect(){return DOMRect.fromRect({width:0,height:0,x:0,y:0})}}),r=w.useRef(null),i=w.useRef(null),a=w.useRef(null),o=w.useRef(null),s=w.useRef(!0),c=w.useRef(null),l=et(),u=w.useMemo(()=>({anchor:t,setAnchor:n,actionsRef:a,backdropRef:r,internalBackdropRef:i,positionerRef:o,allowMouseUpTriggerRef:s,initialCursorPointRef:c,rootId:l}),[t,l]);return(0,T.jsx)(ue.Provider,{value:u,children:(0,T.jsx)(h.Provider,{value:void 0,children:(0,T.jsx)(Oe,{...e})})})}var w,T;function gt(){return(gt=t((()=>{w=e(n(),1),tt(),He(),Le(),v(),T=r()})))()}var E,_t,vt;function yt(){return(yt=t((()=>{E=e(n(),1),nt(),it(),ot(),He(),v(),s(),Xe(),Je(),$e(),je(),_t=500,vt=E.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,{setAnchor:s,actionsRef:l,internalBackdropRef:u,backdropRef:ee,positionerRef:te,allowMouseUpTriggerRef:d,initialCursorPointRef:ne,rootId:f}=re(!1),{store:p}=ae(!1),ie=p.useState(`open`),m=p.useState(`disabled`),h=E.useRef(null),g=E.useRef(null),_=rt(),v=rt(),y=E.useRef(!1),b=E.useRef(null);function oe(e,t,n){let r=n.type.startsWith(`touch`);ne.current={x:e,y:t},s({getBoundingClientRect(){return DOMRect.fromRect({width:r?10:0,height:r?10:0,x:e,y:t})}}),y.current=!1,l.current?.setOpen(!0,Ye(Ze,n)),v.start(_t,()=>{y.current=!0})}function se(e){if(m)return;d.current=!0,st(e),oe(e.clientX,e.clientY,e.nativeEvent);let t=c(h.current);b.current?.abort();let n=new AbortController;b.current=n,t.addEventListener(`mouseup`,e=>{if(d.current=!1,!y.current)return;v.clear(),y.current=!1;let t=at(e);C(te.current,t)||f&&t&&be(t)===f||l.current?.setOpen(!1,Ye(Qe,e))},{once:!0,signal:n.signal})}function x(){_.clear(),g.current=null}function ce(e){if(m){x();return}if(d.current=!1,e.touches.length!==1){x();return}e.stopPropagation();let t=e.touches[0],n={x:t.clientX,y:t.clientY};g.current=n,_.start(_t,()=>{oe(n.x,n.y,e.nativeEvent)})}function le(e){if(e.touches.length!==1){x();return}if(_.isStarted()&&g.current){let t=e.touches[0],n=Math.abs(t.clientX-g.current.x),r=Math.abs(t.clientY-g.current.y);(n>10||r>10)&&x()}}return E.useEffect(()=>()=>{b.current?.abort()},[]),E.useEffect(()=>{function e(e){if(m)return;let t=at(e);(C(h.current,t)||C(u.current,t)||C(ee.current,t))&&e.preventDefault()}let t=c(h.current);return Ke(t,`contextmenu`,e)},[ee,m,u]),o(`div`,e,{state:{open:ie},ref:[h,t],props:[{onContextMenu:se,onTouchStart:ce,onTouchMove:le,onTouchEnd:x,onTouchCancel:x,style:{WebkitTouchCallout:`none`}},a],stateAttributesMapping:qe})})})))()}var bt;function xt(){return(xt=t((()=>{xe(),bt=Ve})))()}function D({...e}){let{container:t,containerRef:n}=ut(),r=(0,B.useMemo)(()=>({container:t,registerTriggerNode:n}),[t,n]);return(0,V.jsx)(U.Provider,{value:r,children:(0,V.jsx)(ht,{"data-slot":`context-menu`,...e})})}function St({container:e,...t}){let n=(0,B.useContext)(U);return(0,V.jsx)(Be,{"data-slot":`context-menu-portal`,container:e??n?.container,...t})}function O({className:e,ref:t,...n}){let r=(0,B.useContext)(U),i=ct(r?.registerTriggerNode,t);return(0,V.jsx)(vt,{ref:i,"data-slot":`context-menu-trigger`,className:a(`select-none`,e),...n})}function k({className:e,side:t,sideOffset:n=0,align:r=`start`,alignOffset:i=0,container:o,...s}){return(0,V.jsx)(St,{container:o,children:(0,V.jsx)(bt,{"data-slot":`context-menu-positioner`,side:t,sideOffset:n,align:r,alignOffset:i,className:`z-50 outline-none`,children:(0,V.jsx)(p,{"data-slot":`context-menu-content`,className:a(wt,e),...s})})})}function A({...e}){return(0,V.jsx)(W.Provider,{value:!0,children:(0,V.jsx)(De,{"data-slot":`context-menu-group`,...e})})}function j({className:e,inset:t,...n}){let r=(0,B.useContext)(W),i=a(`px-2 py-1.5 text-xs font-medium text-muted-foreground select-none data-inset:pl-7`,e);return r?(0,V.jsx)(ie,{"data-slot":`context-menu-label`,"data-inset":t?!0:void 0,className:i,...n}):(0,V.jsx)(`div`,{"data-slot":`context-menu-label`,"data-inset":t?!0:void 0,className:i,...n})}function M({className:e,inset:t,variant:n=`default`,...r}){return(0,V.jsx)(fe,{"data-slot":`context-menu-item`,"data-inset":t?!0:void 0,"data-variant":n,className:a(H,`data-inset:pl-7`,`data-[variant=destructive]:text-destructive data-[variant=destructive]:data-highlighted:bg-destructive/10 data-[variant=destructive]:data-highlighted:text-destructive`,e),...r})}function N({className:e,children:t,...n}){return(0,V.jsxs)(se,{"data-slot":`context-menu-checkbox-item`,className:a(H,`pr-2 pl-7`,e),...n,children:[(0,V.jsx)(`span`,{className:`pointer-events-none absolute left-2 flex size-3.5 items-center justify-center`,children:(0,V.jsx)(Ee,{children:(0,V.jsx)(te,{className:`size-3.5`})})}),t]})}function Ct({...e}){return(0,V.jsx)(W.Provider,{value:!0,children:(0,V.jsx)(ye,{"data-slot":`context-menu-radio-group`,...e})})}function P({className:e,children:t,...n}){return(0,V.jsxs)(we,{"data-slot":`context-menu-radio-item`,className:a(H,`pr-2 pl-7`,e),...n,children:[(0,V.jsx)(`span`,{className:`pointer-events-none absolute left-2 flex size-3.5 items-center justify-center`,children:(0,V.jsx)(Me,{children:(0,V.jsx)(`span`,{className:`size-1.5 rounded-full bg-current`})})}),t]})}function F({className:e,...t}){return(0,V.jsx)(Pe,{"data-slot":`context-menu-separator`,className:a(`-mx-1 my-1 h-px bg-secondary-border`,e),...t})}function I({className:e,...t}){return(0,V.jsx)(`span`,{"data-slot":`context-menu-shortcut`,className:a(`ml-auto text-[11px] tracking-widest text-muted-foreground`,e),...t})}function L({...e}){return(0,V.jsx)(Fe,{"data-slot":`context-menu-sub`,...e})}function R({className:e,inset:t,children:n,...r}){return(0,V.jsxs)(Ie,{"data-slot":`context-menu-sub-trigger`,"data-inset":t?!0:void 0,className:a(H,`data-inset:pl-7`,`data-popup-open:text-foreground data-popup-open:bg-surface-muted`,e),...r,children:[n,(0,V.jsx)(ne,{className:`ml-auto size-3.5`})]})}function z({className:e,side:t=`right`,sideOffset:n=2,align:r=`start`,alignOffset:i=-4,container:o,...s}){return(0,V.jsx)(St,{container:o,children:(0,V.jsx)(bt,{"data-slot":`context-menu-sub-positioner`,side:t,sideOffset:n,align:r,alignOffset:i,className:`z-50 outline-none`,children:(0,V.jsx)(p,{"data-slot":`context-menu-sub-content`,className:a(wt,e),...s})})})}var B,V,H,wt,U,W;function Tt(){return(Tt=t((()=>{B=n(),gt(),de(),yt(),xt(),ze(),f(),x(),m(),ce(),oe(),Re(),Ce(),ke(),Te(),Se(),Ae(),ee(),d(),lt(),dt(),i(),V=r(),H=a(`relative flex cursor-default items-center gap-2 rounded-none px-2 py-1.5 text-xs outline-none select-none`,`data-highlighted:text-foreground data-highlighted:bg-surface-muted`,`data-disabled:pointer-events-none data-disabled:opacity-50`,`[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-3.5`),wt=a(`text-foreground max-h-(--available-height) min-w-36 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-none border border-secondary-border bg-white p-1 font-sans shadow-md outline-none`,`data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95`,`data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95`),U=(0,B.createContext)(null),W=(0,B.createContext)(!1),D.__docgenInfo={description:``,methods:[],displayName:`ContextMenu`},St.__docgenInfo={description:``,methods:[],displayName:`ContextMenuPortal`},O.__docgenInfo={description:``,methods:[],displayName:`ContextMenuTrigger`},k.__docgenInfo={description:``,methods:[],displayName:`ContextMenuContent`,props:{sideOffset:{defaultValue:{value:`0`,computed:!1},required:!1},align:{defaultValue:{value:`'start'`,computed:!1},required:!1},alignOffset:{defaultValue:{value:`0`,computed:!1},required:!1}}},A.__docgenInfo={description:``,methods:[],displayName:`ContextMenuGroup`},j.__docgenInfo={description:``,methods:[],displayName:`ContextMenuLabel`},M.__docgenInfo={description:``,methods:[],displayName:`ContextMenuItem`,props:{variant:{defaultValue:{value:`'default'`,computed:!1},required:!1}}},N.__docgenInfo={description:``,methods:[],displayName:`ContextMenuCheckboxItem`},Ct.__docgenInfo={description:``,methods:[],displayName:`ContextMenuRadioGroup`},P.__docgenInfo={description:``,methods:[],displayName:`ContextMenuRadioItem`},F.__docgenInfo={description:``,methods:[],displayName:`ContextMenuSeparator`},I.__docgenInfo={description:``,methods:[],displayName:`ContextMenuShortcut`},L.__docgenInfo={description:``,methods:[],displayName:`ContextMenuSub`},R.__docgenInfo={description:``,methods:[],displayName:`ContextMenuSubTrigger`},z.__docgenInfo={description:``,methods:[],displayName:`ContextMenuSubContent`,props:{side:{defaultValue:{value:`'right'`,computed:!1},required:!1},sideOffset:{defaultValue:{value:`2`,computed:!1},required:!1},align:{defaultValue:{value:`'start'`,computed:!1},required:!1},alignOffset:{defaultValue:{value:`-4`,computed:!1},required:!1}}}})))()}function Et(){let[e,t]=(0,Dt.useState)(!0),[n,r]=(0,Dt.useState)(`webworker`);return(0,G.jsxs)(D,{children:[(0,G.jsxs)(O,{className:`flex h-52 w-96 cursor-context-menu flex-col items-center justify-center rounded-none border border-dashed border-secondary-border bg-neutral-50 text-xs text-neutral-500 hover:bg-neutral-100/60`,children:[(0,G.jsx)(We,{className:`mb-2 size-6 text-neutral-400`}),(0,G.jsx)(`span`,{children:`이 영역을 우클릭하여 메뉴를 엽니다`})]}),(0,G.jsxs)(k,{className:`w-56`,children:[(0,G.jsxs)(M,{children:[(0,G.jsx)(_e,{}),(0,G.jsx)(`span`,{children:`레이어 보기`}),(0,G.jsx)(I,{children:`⌘+V`})]}),(0,G.jsxs)(M,{children:[(0,G.jsx)(me,{}),(0,G.jsx)(`span`,{children:`영역으로 줌`}),(0,G.jsx)(I,{children:`⌘+Z`})]}),(0,G.jsx)(F,{}),(0,G.jsxs)(L,{children:[(0,G.jsxs)(R,{inset:!0,children:[(0,G.jsx)(ve,{}),(0,G.jsx)(`span`,{children:`내보내기`})]}),(0,G.jsxs)(z,{className:`w-40`,children:[(0,G.jsx)(M,{children:`GeoJSON (.geojson)`}),(0,G.jsx)(M,{children:`Shapefile (.zip)`}),(0,G.jsx)(M,{children:`GeoTIFF (.tif)`})]})]}),(0,G.jsx)(F,{}),(0,G.jsx)(N,{checked:e,onCheckedChange:t,children:`바운딩박스 경계 표시`}),(0,G.jsx)(F,{}),(0,G.jsx)(j,{children:`렌더링 엔진`}),(0,G.jsxs)(Ct,{value:n,onValueChange:r,children:[(0,G.jsx)(P,{value:`canvas`,children:`Canvas 2D`}),(0,G.jsx)(P,{value:`webworker`,children:`WebWorker Offscreen`}),(0,G.jsx)(P,{value:`webgl`,children:`WebGL`})]}),(0,G.jsx)(F,{}),(0,G.jsxs)(M,{variant:`destructive`,children:[(0,G.jsx)(S,{}),(0,G.jsx)(`span`,{children:`레이어 삭제`}),(0,G.jsx)(I,{children:`Delete`})]})]})]})}var Dt,G,K,q,J,Y,X,Ot,Z,Q,$,kt;function At(){return(At=t((()=>{Dt=n(),mt(),le(),ge(),Ue(),y(),b(),he(),Ge(),_(),Tt(),G=r(),{expect:K,fireEvent:q,screen:J,userEvent:Y,within:X}=__STORYBOOK_MODULE_TEST__,Ot={title:`Components/ContextMenu`,component:D,subcomponents:{ContextMenuTrigger:O,ContextMenuContent:k,ContextMenuItem:M,ContextMenuCheckboxItem:N,ContextMenuRadioGroup:Ct,ContextMenuRadioItem:P,ContextMenuLabel:j,ContextMenuSeparator:F,ContextMenuShortcut:I,ContextMenuGroup:A,ContextMenuSub:L,ContextMenuSubTrigger:R,ContextMenuSubContent:z},parameters:{layout:`centered`},tags:[`autodocs`]},Z={render:()=>(0,G.jsx)(Et,{}),play:async({canvasElement:e})=>{let t=X(e).getByText(`이 영역을 우클릭하여 메뉴를 엽니다`);await q.contextMenu(t),await K(await J.findByRole(`menu`)).toBeInTheDocument();let n=J.getByRole(`menuitemcheckbox`,{name:/바운딩박스 경계 표시/});await Y.click(n);let r=J.getByRole(`menuitemradio`,{name:/Canvas 2D/});await Y.click(r);let i=J.getByRole(`menuitem`,{name:/내보내기/});await Y.hover(i),await Y.click(i);let a=await J.findByRole(`menuitem`,{name:`GeoJSON (.geojson)`});await Y.click(a)}},Q={render:()=>(0,G.jsxs)(`div`,{className:`flex w-84 flex-col border border-secondary-border bg-white shadow-xs`,children:[(0,G.jsx)(`div`,{className:`border-b border-secondary-border bg-neutral-50 px-3 py-2`,children:(0,G.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`레이어 트리 (우클릭 테스트)`})}),(0,G.jsxs)(`div`,{className:`flex flex-col p-1`,children:[(0,G.jsxs)(D,{children:[(0,G.jsxs)(O,{className:`flex cursor-context-menu items-center justify-between px-2.5 py-1.5 text-xs hover:bg-neutral-100 data-open:bg-neutral-100`,children:[(0,G.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,G.jsx)(Ne,{className:`size-3.5 text-blue-600`}),(0,G.jsx)(`span`,{className:`font-mono text-2xs text-secondary-foreground`,children:`tl_scco_ctprvn (행정구역)`})]}),(0,G.jsx)(`span`,{className:`text-footer-muted text-2xs`,children:`Polygon`})]}),(0,G.jsxs)(k,{className:`w-48`,children:[(0,G.jsxs)(A,{children:[(0,G.jsx)(j,{children:`속성 및 편집`}),(0,G.jsxs)(M,{children:[(0,G.jsx)(g,{}),(0,G.jsx)(`span`,{children:`심볼 편집기 열기`}),(0,G.jsx)(I,{children:`⌘+E`})]}),(0,G.jsxs)(M,{children:[(0,G.jsx)(pt,{}),(0,G.jsx)(`span`,{children:`레이어 복제`}),(0,G.jsx)(I,{children:`⌘+D`})]}),(0,G.jsxs)(M,{children:[(0,G.jsx)(pe,{}),(0,G.jsx)(`span`,{children:`데이터 새로고침`}),(0,G.jsx)(I,{children:`⌘+R`})]})]}),(0,G.jsx)(F,{}),(0,G.jsxs)(M,{variant:`destructive`,children:[(0,G.jsx)(S,{}),(0,G.jsx)(`span`,{children:`레이어 제거`}),(0,G.jsx)(I,{children:`Delete`})]})]})]}),(0,G.jsxs)(D,{children:[(0,G.jsxs)(O,{className:`flex cursor-context-menu items-center justify-between px-2.5 py-1.5 text-xs hover:bg-neutral-100 data-open:bg-neutral-100`,children:[(0,G.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,G.jsx)(We,{className:`size-3.5 text-emerald-600`}),(0,G.jsx)(`span`,{className:`font-mono text-2xs text-secondary-foreground`,children:`rain_obs_station (관측소)`})]}),(0,G.jsx)(`span`,{className:`text-footer-muted text-2xs`,children:`Point`})]}),(0,G.jsxs)(k,{className:`w-48`,children:[(0,G.jsx)(j,{children:`속성 및 편집`}),(0,G.jsxs)(M,{children:[(0,G.jsx)(me,{}),(0,G.jsx)(`span`,{children:`관측소 전체로 줌`}),(0,G.jsx)(I,{children:`⌘+1`})]}),(0,G.jsxs)(M,{children:[(0,G.jsx)(g,{}),(0,G.jsx)(`span`,{children:`스타일 속성 변경`})]}),(0,G.jsx)(F,{}),(0,G.jsxs)(M,{variant:`destructive`,children:[(0,G.jsx)(S,{}),(0,G.jsx)(`span`,{children:`레이어 제거`}),(0,G.jsx)(I,{children:`Delete`})]})]})]})]})]}),play:async({canvasElement:e})=>{let t=X(e).getByText(`tl_scco_ctprvn (행정구역)`);await q.contextMenu(t);let n=await J.findByRole(`menuitem`,{name:/레이어 복제/});await Y.click(n)}},$={render:()=>(0,G.jsxs)(D,{children:[(0,G.jsx)(O,{className:`flex h-36 w-80 cursor-context-menu items-center justify-center border border-dashed border-secondary-border bg-white text-xs text-neutral-500`,children:`우클릭하여 인셋 정렬 확인`}),(0,G.jsxs)(k,{container:document.body,className:`w-52`,children:[(0,G.jsxs)(M,{children:[(0,G.jsx)(_e,{}),(0,G.jsx)(`span`,{children:`아이콘 있는 항목`})]}),(0,G.jsxs)(M,{inset:!0,children:[(0,G.jsx)(`span`,{children:`인셋(Inset) 항목`}),(0,G.jsx)(I,{children:`⌘+I`})]}),(0,G.jsxs)(L,{children:[(0,G.jsx)(R,{children:(0,G.jsx)(`span`,{children:`일반 서브 메뉴`})}),(0,G.jsx)(z,{children:(0,G.jsx)(M,{children:`하위 옵션`})})]}),(0,G.jsx)(F,{}),(0,G.jsx)(j,{inset:!0,children:`인셋 라벨`}),(0,G.jsxs)(A,{children:[(0,G.jsx)(j,{inset:!0,children:`그룹 인셋 라벨`}),(0,G.jsx)(N,{defaultChecked:!0,children:`인셋 체크박스`})]})]})]}),play:async({canvasElement:e})=>{let t=X(e).getByText(`우클릭하여 인셋 정렬 확인`);await q.contextMenu(t),await K(await J.findByText(`그룹 인셋 라벨`)).toBeInTheDocument(),await Y.keyboard(`{Escape}`)}},kt=[`Default`,`LayerTreeContext`,`InsetItems`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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

      <ContextMenuContent container={document.body} className="w-52">
        <ContextMenuItem>
          <Eye />
          <span>아이콘 있는 항목</span>
        </ContextMenuItem>
        <ContextMenuItem inset>
          <span>인셋(Inset) 항목</span>
          <ContextMenuShortcut>⌘+I</ContextMenuShortcut>
        </ContextMenuItem>

        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <span>일반 서브 메뉴</span>
          </ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>하위 옵션</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>

        <ContextMenuSeparator />
        <ContextMenuLabel inset>인셋 라벨</ContextMenuLabel>
        <ContextMenuGroup>
          <ContextMenuLabel inset>그룹 인셋 라벨</ContextMenuLabel>
          <ContextMenuCheckboxItem defaultChecked>
            인셋 체크박스
          </ContextMenuCheckboxItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByText('우클릭하여 인셋 정렬 확인');
    await fireEvent.contextMenu(trigger);
    await expect(await screen.findByText('그룹 인셋 라벨')).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
  }
}`,...$.parameters?.docs?.source}}}})))()}At();export{Z as Default,$ as InsetItems,Q as LayerTreeContext,kt as __namedExportsOrder,Ot as default};