import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{b as n,n as r}from"./iframe-Df_aBerc.js";import{c as i,t as a}from"./utils-CZPXqhZZ.js";import{r as o,t as s}from"./useRenderElement-B2TwKK4H.js";import{n as c}from"./owner-DqoogoS-.js";import{n as l,t as u}from"./createLucideIcon-BewI6NGa.js";import{n as d,t as ee}from"./check-Ctcd0rV5.js";import{n as f,t as te}from"./chevron-right-DXhnzIoH.js";import{A as p,B as ne,C as m,D as re,E as h,F as g,G as _,H as v,I as y,J as b,K as x,L as ie,M as S,N as ae,O as C,P as oe,Q as se,R as ce,S as le,T as ue,U as de,V as fe,W as pe,X as me,Y as he,Z as ge,_ as _e,a as ve,b as ye,c as be,g as xe,h as Se,i as Ce,j as we,k as Te,l as Ee,m as De,n as Oe,o as ke,p as Ae,q as je,r as Me,s as Ne,t as Pe,u as Fe,v as Ie,w as Le,x as Re,y as ze,z as Be}from"./MenuSubmenuTrigger-GJuCLhES.js";import{n as Ve,t as He}from"./layers-hR54TrDt.js";import{n as Ue,t as w}from"./trash-aZh5J7Gs.js";import{t as We}from"./addEventListener-DD62RQ1V.js";import{pt as Ge,ut as Ke}from"./usePositioner-DNae2uN_.js";import{A as qe,M as Je,O as Ye,a as Xe,f as Ze,i as Qe,r as $e}from"./useBaseUiId-D69y5Ydb.js";import{n as et,r as tt}from"./useTimeout-B7cPuiVc.js";import{f as T,m as nt,p as rt}from"./DirectionContext-C6rWPsiR.js";import{A as it,I as at}from"./composite-Bhv3Gc8F.js";import{n as ot,t as st}from"./useMergedRef-gb_fjS_c.js";import{n as ct,t as lt}from"./usePortalContainer-a5HjEudH.js";var E,ut;function dt(){return(dt=t((()=>{l(),E={name:`copy`,size:24,node:[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]},E.node,ut=u(E)})))()}function ft(e){let[t,n]=D.useState({getBoundingClientRect(){return DOMRect.fromRect({width:0,height:0,x:0,y:0})}}),r=D.useRef(null),i=D.useRef(null),a=D.useRef(null),o=D.useRef(null),s=D.useRef(!0),c=D.useRef(null),l=Qe(),u=D.useMemo(()=>({anchor:t,setAnchor:n,actionsRef:a,backdropRef:r,internalBackdropRef:i,positionerRef:o,allowMouseUpTriggerRef:s,initialCursorPointRef:c,rootId:l}),[t,l]);return(0,O.jsx)(ce.Provider,{value:u,children:(0,O.jsx)(g.Provider,{value:void 0,children:(0,O.jsx)(Ee,{...e})})})}var D,O;function pt(){return(pt=t((()=>{D=e(n(),1),$e(),Be(),Fe(),y(),O=r()})))()}var k,A,mt;function ht(){return(ht=t((()=>{k=e(n(),1),et(),nt(),it(),Be(),y(),s(),Je(),Ke(),Ze(),ke(),A=500,mt=k.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,{setAnchor:s,actionsRef:l,internalBackdropRef:u,backdropRef:d,positionerRef:ee,allowMouseUpTriggerRef:f,initialCursorPointRef:te,rootId:p}=ne(!1),{store:m}=ie(!1),re=m.useState(`open`),h=m.useState(`disabled`),g=k.useRef(null),_=k.useRef(null),v=tt(),y=tt(),b=k.useRef(!1),x=k.useRef(null);function S(e,t,n){let r=n.type.startsWith(`touch`);te.current={x:e,y:t},s({getBoundingClientRect(){return DOMRect.fromRect({width:r?10:0,height:r?10:0,x:e,y:t})}}),b.current=!1,l.current?.setOpen(!0,qe(Ye,n)),y.start(A,()=>{b.current=!0})}function ae(e){if(h)return;f.current=!0,at(e),S(e.clientX,e.clientY,e.nativeEvent);let t=c(g.current);x.current?.abort();let n=new AbortController;x.current=n,t.addEventListener(`mouseup`,e=>{if(f.current=!1,!b.current)return;y.clear(),b.current=!1;let t=rt(e);T(ee.current,t)||p&&t&&ve(t)===p||l.current?.setOpen(!1,qe(Xe,e))},{once:!0,signal:n.signal})}function C(){v.clear(),_.current=null}function oe(e){if(h){C();return}if(f.current=!1,e.touches.length!==1){C();return}e.stopPropagation();let t=e.touches[0],n={x:t.clientX,y:t.clientY};_.current=n,v.start(A,()=>{S(n.x,n.y,e.nativeEvent)})}function se(e){if(e.touches.length!==1){C();return}if(v.isStarted()&&_.current){let t=e.touches[0],n=Math.abs(t.clientX-_.current.x),r=Math.abs(t.clientY-_.current.y);(n>10||r>10)&&C()}}return k.useEffect(()=>()=>{x.current?.abort()},[]),k.useEffect(()=>{function e(e){if(h)return;let t=rt(e);(T(g.current,t)||T(u.current,t)||T(d.current,t))&&e.preventDefault()}let t=c(g.current);return We(t,`contextmenu`,e)},[d,h,u]),o(`div`,e,{state:{open:re},ref:[g,t],props:[{onContextMenu:ae,onTouchStart:oe,onTouchMove:se,onTouchEnd:C,onTouchCancel:C,style:{WebkitTouchCallout:`none`}},a],stateAttributesMapping:Ge})})})))()}var j;function gt(){return(gt=t((()=>{ye(),j=ze})))()}function M({...e}){let{container:t,containerRef:n}=ct(),r=(0,W.useMemo)(()=>({container:t,registerTriggerNode:n}),[t,n]);return(0,G.jsx)(q.Provider,{value:r,children:(0,G.jsx)(ft,{"data-slot":`context-menu`,...e})})}function N({container:e,...t}){let n=(0,W.useContext)(q);return(0,G.jsx)(Re,{"data-slot":`context-menu-portal`,container:e??n?.container,...t})}function P({className:e,ref:t,...n}){let r=(0,W.useContext)(q),i=ot(r?.registerTriggerNode,t);return(0,G.jsx)(mt,{ref:i,"data-slot":`context-menu-trigger`,className:a(`select-none`,e),...n})}function F({className:e,side:t,sideOffset:n=0,align:r=`start`,alignOffset:i=0,container:o,...s}){return(0,G.jsx)(N,{container:o,children:(0,G.jsx)(j,{"data-slot":`context-menu-positioner`,side:t,sideOffset:n,align:r,alignOffset:i,className:`z-50 outline-none`,children:(0,G.jsx)(m,{"data-slot":`context-menu-content`,className:a(bt,e),...s})})})}function _t({...e}){return(0,G.jsx)(J.Provider,{value:!0,children:(0,G.jsx)(Te,{"data-slot":`context-menu-group`,...e})})}function I({className:e,inset:t,...n}){let r=(0,W.useContext)(J),i=a(`px-2 py-1.5 text-xs font-medium text-muted-foreground select-none data-inset:pl-7`,e);return r?(0,G.jsx)(re,{"data-slot":`context-menu-label`,"data-inset":t?!0:void 0,className:i,...n}):(0,G.jsx)(`div`,{"data-slot":`context-menu-label`,"data-inset":t?!0:void 0,className:i,...n})}function L({className:e,inset:t,variant:n=`default`,...r}){return(0,G.jsx)(ue,{"data-slot":`context-menu-item`,"data-inset":t?!0:void 0,"data-variant":n,className:a(K,`data-inset:pl-7`,`data-[variant=destructive]:text-destructive data-[variant=destructive]:data-highlighted:bg-destructive/10 data-[variant=destructive]:data-highlighted:text-destructive`,e),...r})}function R({className:e,children:t,...n}){return(0,G.jsxs)(ae,{"data-slot":`context-menu-checkbox-item`,className:a(K,`pr-2 pl-7`,e),...n,children:[(0,G.jsx)(`span`,{className:`pointer-events-none absolute left-2 flex size-3.5 items-center justify-center`,children:(0,G.jsx)(we,{children:(0,G.jsx)(ee,{className:`size-3.5`})})}),t]})}function z({...e}){return(0,G.jsx)(J.Provider,{value:!0,children:(0,G.jsx)(_e,{"data-slot":`context-menu-radio-group`,...e})})}function B({className:e,children:t,...n}){return(0,G.jsxs)(Se,{"data-slot":`context-menu-radio-item`,className:a(K,`pr-2 pl-7`,e),...n,children:[(0,G.jsx)(`span`,{className:`pointer-events-none absolute left-2 flex size-3.5 items-center justify-center`,children:(0,G.jsx)(Ae,{children:(0,G.jsx)(`span`,{className:`size-1.5 rounded-full bg-current`})})}),t]})}function V({className:e,...t}){return(0,G.jsx)(Me,{"data-slot":`context-menu-separator`,className:a(`-mx-1 my-1 h-px bg-secondary-border`,e),...t})}function H({className:e,...t}){return(0,G.jsx)(`span`,{"data-slot":`context-menu-shortcut`,className:a(`ml-auto text-[11px] tracking-widest text-muted-foreground`,e),...t})}function U({...e}){return(0,G.jsx)(Ne,{"data-slot":`context-menu-sub`,...e})}function vt({className:e,inset:t,children:n,...r}){return(0,G.jsxs)(Pe,{"data-slot":`context-menu-sub-trigger`,"data-inset":t?!0:void 0,className:a(K,`data-inset:pl-7`,`data-popup-open:text-foreground data-popup-open:bg-surface-muted`,e),...r,children:[n,(0,G.jsx)(te,{className:`ml-auto size-3.5`})]})}function yt({className:e,side:t=`right`,sideOffset:n=2,align:r=`start`,alignOffset:i=-4,container:o,...s}){return(0,G.jsx)(N,{container:o,children:(0,G.jsx)(j,{"data-slot":`context-menu-sub-positioner`,side:t,sideOffset:n,align:r,alignOffset:i,className:`z-50 outline-none`,children:(0,G.jsx)(m,{"data-slot":`context-menu-sub-content`,className:a(bt,e),...s})})})}var W,G,K,bt,q,J;function xt(){return(xt=t((()=>{W=n(),pt(),le(),ht(),gt(),Le(),p(),C(),h(),oe(),S(),Ie(),xe(),De(),Ce(),be(),Oe(),d(),f(),st(),lt(),i(),G=r(),K=a(`relative flex cursor-default items-center gap-2 rounded-none px-2 py-1.5 text-xs outline-none select-none`,`data-highlighted:text-foreground data-highlighted:bg-surface-muted`,`data-disabled:pointer-events-none data-disabled:opacity-50`,`[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-3.5`),bt=a(`text-foreground max-h-(--available-height) min-w-36 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-none border border-secondary-border bg-white p-1 font-sans shadow-md outline-none`,`data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95`,`data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95`),q=(0,W.createContext)(null),J=(0,W.createContext)(!1),M.__docgenInfo={description:``,methods:[],displayName:`ContextMenu`},N.__docgenInfo={description:``,methods:[],displayName:`ContextMenuPortal`},P.__docgenInfo={description:``,methods:[],displayName:`ContextMenuTrigger`},F.__docgenInfo={description:``,methods:[],displayName:`ContextMenuContent`,props:{sideOffset:{defaultValue:{value:`0`,computed:!1},required:!1},align:{defaultValue:{value:`'start'`,computed:!1},required:!1},alignOffset:{defaultValue:{value:`0`,computed:!1},required:!1}}},_t.__docgenInfo={description:``,methods:[],displayName:`ContextMenuGroup`},I.__docgenInfo={description:``,methods:[],displayName:`ContextMenuLabel`},L.__docgenInfo={description:``,methods:[],displayName:`ContextMenuItem`,props:{variant:{defaultValue:{value:`'default'`,computed:!1},required:!1}}},R.__docgenInfo={description:``,methods:[],displayName:`ContextMenuCheckboxItem`},z.__docgenInfo={description:``,methods:[],displayName:`ContextMenuRadioGroup`},B.__docgenInfo={description:``,methods:[],displayName:`ContextMenuRadioItem`},V.__docgenInfo={description:``,methods:[],displayName:`ContextMenuSeparator`},H.__docgenInfo={description:``,methods:[],displayName:`ContextMenuShortcut`},U.__docgenInfo={description:``,methods:[],displayName:`ContextMenuSub`},vt.__docgenInfo={description:``,methods:[],displayName:`ContextMenuSubTrigger`},yt.__docgenInfo={description:``,methods:[],displayName:`ContextMenuSubContent`,props:{side:{defaultValue:{value:`'right'`,computed:!1},required:!1},sideOffset:{defaultValue:{value:`2`,computed:!1},required:!1},align:{defaultValue:{value:`'start'`,computed:!1},required:!1},alignOffset:{defaultValue:{value:`-4`,computed:!1},required:!1}}}})))()}var Y,X,St,Z,Q,$,Ct;function wt(){return(wt=t((()=>{Y=n(),dt(),se(),me(),Ve(),b(),x(),pe(),Ue(),v(),xt(),X=r(),St={title:`Components/ContextMenu`,component:M,subcomponents:{ContextMenuTrigger:P,ContextMenuContent:F,ContextMenuItem:L,ContextMenuCheckboxItem:R,ContextMenuRadioGroup:z,ContextMenuRadioItem:B,ContextMenuLabel:I,ContextMenuSeparator:V,ContextMenuShortcut:H,ContextMenuGroup:_t,ContextMenuSub:U,ContextMenuSubTrigger:vt,ContextMenuSubContent:yt},parameters:{layout:`centered`},tags:[`autodocs`]},Z={render:function(){let[e,t]=(0,Y.useState)(!0),[n,r]=(0,Y.useState)(`webworker`);return(0,X.jsxs)(M,{children:[(0,X.jsxs)(P,{className:`flex h-52 w-96 cursor-context-menu flex-col items-center justify-center rounded-none border border-dashed border-secondary-border bg-neutral-50 text-xs text-neutral-500 hover:bg-neutral-100/60`,children:[(0,X.jsx)(He,{className:`mb-2 size-6 text-neutral-400`}),(0,X.jsx)(`span`,{children:`이 영역을 우클릭하여 메뉴를 엽니다`})]}),(0,X.jsxs)(F,{className:`w-56`,children:[(0,X.jsxs)(L,{children:[(0,X.jsx)(he,{}),(0,X.jsx)(`span`,{children:`레이어 보기`}),(0,X.jsx)(H,{children:`⌘+V`})]}),(0,X.jsxs)(L,{children:[(0,X.jsx)(fe,{}),(0,X.jsx)(`span`,{children:`영역으로 줌`}),(0,X.jsx)(H,{children:`⌘+Z`})]}),(0,X.jsx)(V,{}),(0,X.jsxs)(U,{children:[(0,X.jsxs)(vt,{children:[(0,X.jsx)(ge,{}),(0,X.jsx)(`span`,{children:`내보내기`})]}),(0,X.jsxs)(yt,{className:`w-40`,children:[(0,X.jsx)(L,{children:`GeoJSON (.geojson)`}),(0,X.jsx)(L,{children:`Shapefile (.zip)`}),(0,X.jsx)(L,{children:`GeoTIFF (.tif)`})]})]}),(0,X.jsx)(V,{}),(0,X.jsx)(R,{checked:e,onCheckedChange:t,children:`바운딩박스 경계 표시`}),(0,X.jsx)(V,{}),(0,X.jsx)(I,{children:`렌더링 엔진`}),(0,X.jsxs)(z,{value:n,onValueChange:r,children:[(0,X.jsx)(B,{value:`canvas`,children:`Canvas 2D`}),(0,X.jsx)(B,{value:`webworker`,children:`WebWorker Offscreen`}),(0,X.jsx)(B,{value:`webgl`,children:`WebGL`})]}),(0,X.jsx)(V,{}),(0,X.jsxs)(L,{variant:`destructive`,children:[(0,X.jsx)(w,{}),(0,X.jsx)(`span`,{children:`레이어 삭제`}),(0,X.jsx)(H,{children:`Delete`})]})]})]})}},Q={render:function(){return(0,X.jsxs)(`div`,{className:`flex w-84 flex-col border border-secondary-border bg-white shadow-xs`,children:[(0,X.jsx)(`div`,{className:`border-b border-secondary-border bg-neutral-50 px-3 py-2`,children:(0,X.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`레이어 트리 (우클릭 테스트)`})}),(0,X.jsxs)(`div`,{className:`flex flex-col p-1`,children:[(0,X.jsxs)(M,{children:[(0,X.jsxs)(P,{className:`flex cursor-context-menu items-center justify-between px-2.5 py-1.5 text-xs hover:bg-neutral-100 data-open:bg-neutral-100`,children:[(0,X.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,X.jsx)(je,{className:`size-3.5 text-blue-600`}),(0,X.jsx)(`span`,{className:`font-mono text-2xs text-secondary-foreground`,children:`tl_scco_ctprvn (행정구역)`})]}),(0,X.jsx)(`span`,{className:`text-footer-muted text-2xs`,children:`Polygon`})]}),(0,X.jsxs)(F,{className:`w-48`,children:[(0,X.jsx)(I,{children:`속성 및 편집`}),(0,X.jsxs)(L,{children:[(0,X.jsx)(_,{}),(0,X.jsx)(`span`,{children:`심볼 편집기 열기`}),(0,X.jsx)(H,{children:`⌘+E`})]}),(0,X.jsxs)(L,{children:[(0,X.jsx)(ut,{}),(0,X.jsx)(`span`,{children:`레이어 복제`}),(0,X.jsx)(H,{children:`⌘+D`})]}),(0,X.jsxs)(L,{children:[(0,X.jsx)(de,{}),(0,X.jsx)(`span`,{children:`데이터 새로고침`}),(0,X.jsx)(H,{children:`⌘+R`})]}),(0,X.jsx)(V,{}),(0,X.jsxs)(L,{variant:`destructive`,children:[(0,X.jsx)(w,{}),(0,X.jsx)(`span`,{children:`레이어 제거`}),(0,X.jsx)(H,{children:`Delete`})]})]})]}),(0,X.jsxs)(M,{children:[(0,X.jsxs)(P,{className:`flex cursor-context-menu items-center justify-between px-2.5 py-1.5 text-xs hover:bg-neutral-100 data-open:bg-neutral-100`,children:[(0,X.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,X.jsx)(He,{className:`size-3.5 text-emerald-600`}),(0,X.jsx)(`span`,{className:`font-mono text-2xs text-secondary-foreground`,children:`rain_obs_station (관측소)`})]}),(0,X.jsx)(`span`,{className:`text-footer-muted text-2xs`,children:`Point`})]}),(0,X.jsxs)(F,{className:`w-48`,children:[(0,X.jsx)(I,{children:`속성 및 편집`}),(0,X.jsxs)(L,{children:[(0,X.jsx)(fe,{}),(0,X.jsx)(`span`,{children:`관측소 전체로 줌`}),(0,X.jsx)(H,{children:`⌘+1`})]}),(0,X.jsxs)(L,{children:[(0,X.jsx)(_,{}),(0,X.jsx)(`span`,{children:`스타일 속성 변경`})]}),(0,X.jsx)(V,{}),(0,X.jsxs)(L,{variant:`destructive`,children:[(0,X.jsx)(w,{}),(0,X.jsx)(`span`,{children:`레이어 제거`}),(0,X.jsx)(H,{children:`Delete`})]})]})]})]})]})}},$={render:function(){return(0,X.jsxs)(M,{children:[(0,X.jsx)(P,{className:`flex h-36 w-80 cursor-context-menu items-center justify-center border border-dashed border-secondary-border bg-white text-xs text-neutral-500`,children:`우클릭하여 인셋 정렬 확인`}),(0,X.jsxs)(F,{className:`w-52`,children:[(0,X.jsxs)(L,{children:[(0,X.jsx)(he,{}),(0,X.jsx)(`span`,{children:`아이콘 있는 항목`})]}),(0,X.jsxs)(L,{inset:!0,children:[(0,X.jsx)(`span`,{children:`인셋(Inset) 항목`}),(0,X.jsx)(H,{children:`⌘+I`})]}),(0,X.jsx)(V,{}),(0,X.jsx)(I,{inset:!0,children:`인셋 라벨`}),(0,X.jsx)(R,{defaultChecked:!0,children:`인셋 체크박스`})]})]})}},Ct=[`Default`,`LayerTreeContext`,`InsetItems`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [showBbox, setShowBbox] = useState(true);
    const [renderEngine, setRenderEngine] = useState('webworker');
    return <ContextMenu>
        <ContextMenuTrigger className="flex h-52 w-96 cursor-context-menu flex-col items-center justify-center rounded-none border border-dashed border-secondary-border bg-neutral-50 text-xs text-neutral-500 hover:bg-neutral-100/60">
          <Layers className="mb-2 size-6 text-neutral-400" />
          <span>이 영역을 우클릭하여 메뉴를 엽니다</span>
        </ContextMenuTrigger>

        <ContextMenuContent className="w-56">
          <ContextMenuItem>
            <Eye />
            <span>레이어 보기</span>
            <ContextMenuShortcut>⌘+V</ContextMenuShortcut>
          </ContextMenuItem>

          <ContextMenuItem>
            <ZoomIn />
            <span>영역으로 줌</span>
            <ContextMenuShortcut>⌘+Z</ContextMenuShortcut>
          </ContextMenuItem>

          <ContextMenuSeparator />

          {/* 서브메뉴 */}
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <Download />
              <span>내보내기</span>
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-40">
              <ContextMenuItem>GeoJSON (.geojson)</ContextMenuItem>
              <ContextMenuItem>Shapefile (.zip)</ContextMenuItem>
              <ContextMenuItem>GeoTIFF (.tif)</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>

          <ContextMenuSeparator />

          {/* 체크박스 아이템 */}
          <ContextMenuCheckboxItem checked={showBbox} onCheckedChange={setShowBbox}>
            바운딩박스 경계 표시
          </ContextMenuCheckboxItem>

          <ContextMenuSeparator />

          {/* 라디오 그룹 */}
          <ContextMenuLabel>렌더링 엔진</ContextMenuLabel>
          <ContextMenuRadioGroup value={renderEngine} onValueChange={setRenderEngine}>
            <ContextMenuRadioItem value="canvas">
              Canvas 2D
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="webworker">
              WebWorker Offscreen
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="webgl">WebGL</ContextMenuRadioItem>
          </ContextMenuRadioGroup>

          <ContextMenuSeparator />

          <ContextMenuItem variant="destructive">
            <Trash2 />
            <span>레이어 삭제</span>
            <ContextMenuShortcut>Delete</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>;
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <div className="flex w-84 flex-col border border-secondary-border bg-white shadow-xs">
        <div className="border-b border-secondary-border bg-neutral-50 px-3 py-2">
          <span className="text-xs font-semibold text-secondary-foreground">
            레이어 트리 (우클릭 테스트)
          </span>
        </div>

        <div className="flex flex-col p-1">
          {/* 레이어 1 */}
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

              <ContextMenuSeparator />

              <ContextMenuItem variant="destructive">
                <Trash2 />
                <span>레이어 제거</span>
                <ContextMenuShortcut>Delete</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>

          {/* 레이어 2 */}
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
      </div>;
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <ContextMenu>
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
      </ContextMenu>;
  }
}`,...$.parameters?.docs?.source}}}})))()}wt();export{Z as Default,$ as InsetItems,Q as LayerTreeContext,Ct as __namedExportsOrder,St as default};