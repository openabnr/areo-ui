import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{b as n,n as r}from"./iframe-D3lwOebq.js";import{c as i,t as a}from"./utils-Cjde27Em.js";import{r as o,t as s}from"./useRenderElement-CyYXRpeZ.js";import{n as c}from"./owner-BZE0TFLX.js";import{n as l,t as u}from"./createLucideIcon-CsS42kAQ.js";import{$ as d,A as ee,B as te,C as f,D as ne,E as p,F as m,G as h,H as g,I as _,J as v,K as y,L as re,M as b,N as x,O as S,P as C,Q as ie,R as w,S as ae,T as oe,U as se,V as ce,W as le,X as ue,Y as de,Z as fe,_ as pe,a as me,b as he,c as ge,et as _e,g as ve,h as ye,i as be,j as xe,k as T,l as Se,m as Ce,n as we,nt as Te,o as Ee,p as De,q as Oe,r as ke,s as Ae,t as je,tt as Me,u as Ne,v as Pe,w as Fe,x as Ie,y as Le,z as Re}from"./MenuSubmenuTrigger-DNAuk_3F.js";import{n as ze,t as Be}from"./layers-CRlLdZh1.js";import{n as Ve,t as E}from"./trash-CoObmdY6.js";import{t as He}from"./addEventListener-BZCxIWn0.js";import{pt as Ue,ut as We}from"./usePositioner-D-qJprBf.js";import{A as Ge,M as Ke,O as qe,a as Je,f as Ye,i as Xe,r as Ze}from"./useBaseUiId-Bk8crkpG.js";import{n as Qe,r as $e}from"./useTimeout-CFRTB-yf.js";import{f as D,m as et,p as tt}from"./DirectionContext-2-IRPQ2N.js";import{A as nt,I as rt}from"./composite-DDsZSKD0.js";var O,it;function at(){return(at=t((()=>{l(),O={name:`copy`,size:24,node:[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]},O.node,it=u(O)})))()}function ot(e){let[t,n]=k.useState({getBoundingClientRect(){return DOMRect.fromRect({width:0,height:0,x:0,y:0})}}),r=k.useRef(null),i=k.useRef(null),a=k.useRef(null),o=k.useRef(null),s=k.useRef(!0),c=k.useRef(null),l=Xe(),u=k.useMemo(()=>({anchor:t,setAnchor:n,actionsRef:a,backdropRef:r,internalBackdropRef:i,positionerRef:o,allowMouseUpTriggerRef:s,initialCursorPointRef:c,rootId:l}),[t,l]);return(0,A.jsx)(w.Provider,{value:u,children:(0,A.jsx)(m.Provider,{value:void 0,children:(0,A.jsx)(Se,{...e})})})}var k,A;function st(){return(st=t((()=>{k=e(n(),1),Ze(),Re(),Ne(),_(),A=r()})))()}var j,M,ct;function lt(){return(lt=t((()=>{j=e(n(),1),Qe(),et(),nt(),Re(),_(),s(),Ke(),We(),Ye(),Ee(),M=500,ct=j.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,{setAnchor:s,actionsRef:l,internalBackdropRef:u,backdropRef:d,positionerRef:ee,allowMouseUpTriggerRef:f,initialCursorPointRef:ne,rootId:p}=te(!1),{store:m}=re(!1),h=m.useState(`open`),g=m.useState(`disabled`),_=j.useRef(null),v=j.useRef(null),y=$e(),b=$e(),x=j.useRef(!1),S=j.useRef(null);function C(e,t,n){let r=n.type.startsWith(`touch`);ne.current={x:e,y:t},s({getBoundingClientRect(){return DOMRect.fromRect({width:r?10:0,height:r?10:0,x:e,y:t})}}),x.current=!1,l.current?.setOpen(!0,Ge(qe,n)),b.start(M,()=>{x.current=!0})}function ie(e){if(g)return;f.current=!0,rt(e),C(e.clientX,e.clientY,e.nativeEvent);let t=c(_.current);S.current?.abort();let n=new AbortController;S.current=n,t.addEventListener(`mouseup`,e=>{if(f.current=!1,!x.current)return;b.clear(),x.current=!1;let t=tt(e);D(ee.current,t)||p&&t&&me(t)===p||l.current?.setOpen(!1,Ge(Je,e))},{once:!0,signal:n.signal})}function w(){y.clear(),v.current=null}function ae(e){if(g){w();return}if(f.current=!1,e.touches.length!==1){w();return}e.stopPropagation();let t=e.touches[0],n={x:t.clientX,y:t.clientY};v.current=n,y.start(M,()=>{C(n.x,n.y,e.nativeEvent)})}function oe(e){if(e.touches.length!==1){w();return}if(y.isStarted()&&v.current){let t=e.touches[0],n=Math.abs(t.clientX-v.current.x),r=Math.abs(t.clientY-v.current.y);(n>10||r>10)&&w()}}return j.useEffect(()=>()=>{S.current?.abort()},[]),j.useEffect(()=>{function e(e){if(g)return;let t=tt(e);(D(_.current,t)||D(u.current,t)||D(d.current,t))&&e.preventDefault()}let t=c(_.current);return He(t,`contextmenu`,e)},[d,g,u]),o(`div`,e,{state:{open:h},ref:[_,t],props:[{onContextMenu:ie,onTouchStart:ae,onTouchMove:oe,onTouchEnd:w,onTouchCancel:w,style:{WebkitTouchCallout:`none`}},a],stateAttributesMapping:Ue})})})))()}var N;function ut(){return(ut=t((()=>{he(),N=Le})))()}function P({...e}){return(0,q.jsx)(ot,{"data-slot":`context-menu`,...e})}function F({className:e,...t}){return(0,q.jsx)(ct,{"data-slot":`context-menu-trigger`,className:a(`select-none`,e),...t})}function I({className:e,align:t=`start`,alignOffset:n=2,side:r=`right`,sideOffset:i=2,children:o,...s}){return(0,q.jsx)(Ie,{children:(0,q.jsx)(N,{className:`isolate z-50 outline-none`,align:t,alignOffset:n,side:r,sideOffset:i,children:(0,q.jsx)(f,{"data-slot":`context-menu-content`,className:a(`z-50 max-h-(--available-height) min-w-44 origin-(--transform-origin) overflow-x-hidden overflow-y-auto`,`rounded-none border border-secondary-border bg-white p-1 text-secondary-foreground shadow-md outline-none`,`transition-[opacity,transform] duration-100`,`data-starting-style:scale-95 data-starting-style:opacity-0`,`data-ending-style:scale-95 data-ending-style:opacity-0`,e),...s,children:o})})})}function dt({...e}){return(0,q.jsx)(T,{"data-slot":`context-menu-group`,...e})}function L({className:e,inset:t,children:n,...r}){return(0,q.jsx)(T,{"data-slot":`context-menu-group`,children:(0,q.jsx)(ne,{"data-slot":`context-menu-label`,"data-inset":t,className:a(`text-footer-muted px-2.5 py-1.5 text-xs font-semibold select-none`,t&&`pl-9`,e),...r,children:n})})}function R({className:e,inset:t,variant:n=`default`,...r}){return(0,q.jsx)(oe,{"data-slot":`context-menu-item`,"data-inset":t,"data-variant":n,className:a(`group/context-menu-item relative flex cursor-pointer items-center gap-2.5 rounded-none px-2.5 py-1.5 text-sm outline-none select-none`,`hover:bg-neutral-100 hover:text-black focus:bg-neutral-100 focus:text-black`,`data-disabled:pointer-events-none data-disabled:opacity-40`,t&&`pl-9`,n===`destructive`&&`text-red-600 hover:bg-red-50 hover:text-red-700 focus:bg-red-50 focus:text-red-700`,`[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4`,e),...r})}function z({...e}){return(0,q.jsx)(Ae,{"data-slot":`context-menu-sub`,...e})}function B({className:e,inset:t,children:n,...r}){return(0,q.jsxs)(je,{"data-slot":`context-menu-sub-trigger`,"data-inset":t,className:a(`flex cursor-pointer items-center gap-2.5 rounded-none px-2.5 py-1.5 text-sm outline-none select-none`,`hover:bg-neutral-100 hover:text-black focus:bg-neutral-100 focus:text-black`,`data-open:bg-neutral-100 data-open:text-black`,`data-disabled:pointer-events-none data-disabled:opacity-40`,t&&`pl-9`,`[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4`,e),...r,children:[n,(0,q.jsx)(d,{className:`ml-auto size-4 text-neutral-400`})]})}function V({className:e,align:t=`start`,alignOffset:n=-3,side:r=`right`,sideOffset:i=2,children:o,...s}){return(0,q.jsx)(Ie,{children:(0,q.jsx)(N,{className:`isolate z-50 outline-none`,align:t,alignOffset:n,side:r,sideOffset:i,children:(0,q.jsx)(f,{"data-slot":`context-menu-sub-content`,className:a(`z-50 max-h-(--available-height) min-w-44 origin-(--transform-origin) overflow-x-hidden overflow-y-auto`,`rounded-none border border-secondary-border bg-white p-1 text-secondary-foreground shadow-lg outline-none`,`transition-[opacity,transform] duration-100`,`data-starting-style:scale-95 data-starting-style:opacity-0`,`data-ending-style:scale-95 data-ending-style:opacity-0`,e),...s,children:o})})})}function H({className:e,children:t,checked:n,inset:r,...i}){return(0,q.jsxs)(x,{"data-slot":`context-menu-checkbox-item`,"data-inset":r,checked:n,className:a(`relative flex cursor-pointer items-center gap-2.5 rounded-none py-1.5 pr-7 pl-2.5 text-sm outline-none select-none`,`hover:bg-neutral-100 hover:text-black focus:bg-neutral-100 focus:text-black`,`data-disabled:pointer-events-none data-disabled:opacity-40`,r&&`pl-9`,`[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4`,e),...i,children:[(0,q.jsx)(`span`,{className:`pointer-events-none absolute right-2 flex size-4 items-center justify-center`,children:(0,q.jsx)(xe,{children:(0,q.jsx)(Me,{className:`size-3.5 text-secondary-foreground`})})}),t]})}function U({...e}){return(0,q.jsx)(pe,{"data-slot":`context-menu-radio-group`,...e})}function W({className:e,children:t,inset:n,...r}){return(0,q.jsxs)(ye,{"data-slot":`context-menu-radio-item`,"data-inset":n,className:a(`relative flex cursor-pointer items-center gap-2.5 rounded-none py-1.5 pr-7 pl-2.5 text-sm outline-none select-none`,`hover:bg-neutral-100 hover:text-black focus:bg-neutral-100 focus:text-black`,`data-disabled:pointer-events-none data-disabled:opacity-40`,n&&`pl-9`,`[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4`,e),...r,children:[(0,q.jsx)(`span`,{className:`pointer-events-none absolute right-2 flex size-4 items-center justify-center`,children:(0,q.jsx)(De,{children:(0,q.jsx)(Me,{className:`size-3.5 text-secondary-foreground`})})}),t]})}function G({className:e,...t}){return(0,q.jsx)(ke,{"data-slot":`context-menu-separator`,className:a(`-mx-1 my-1 h-px bg-secondary-border`,e),...t})}function K({className:e,...t}){return(0,q.jsx)(`span`,{"data-slot":`context-menu-shortcut`,className:a(`ml-auto font-mono text-xs tracking-tight text-neutral-500 select-none`,`group-hover/context-menu-item:text-neutral-900`,e),...t})}var q;function J(){return(J=t((()=>{st(),ae(),lt(),ut(),Fe(),ee(),S(),p(),ge(),we(),C(),b(),Pe(),ve(),Ce(),be(),Te(),_e(),i(),q=r(),P.__docgenInfo={description:``,methods:[],displayName:`ContextMenu`},F.__docgenInfo={description:``,methods:[],displayName:`ContextMenuTrigger`},I.__docgenInfo={description:``,methods:[],displayName:`ContextMenuContent`,props:{align:{defaultValue:{value:`'start'`,computed:!1},required:!1},alignOffset:{defaultValue:{value:`2`,computed:!1},required:!1},side:{defaultValue:{value:`'right'`,computed:!1},required:!1},sideOffset:{defaultValue:{value:`2`,computed:!1},required:!1}}},dt.__docgenInfo={description:``,methods:[],displayName:`ContextMenuGroup`},L.__docgenInfo={description:``,methods:[],displayName:`ContextMenuLabel`},R.__docgenInfo={description:``,methods:[],displayName:`ContextMenuItem`,props:{variant:{defaultValue:{value:`'default'`,computed:!1},required:!1}}},z.__docgenInfo={description:``,methods:[],displayName:`ContextMenuSub`},B.__docgenInfo={description:``,methods:[],displayName:`ContextMenuSubTrigger`},V.__docgenInfo={description:``,methods:[],displayName:`ContextMenuSubContent`,props:{align:{defaultValue:{value:`'start'`,computed:!1},required:!1},alignOffset:{defaultValue:{value:`-3`,computed:!1},required:!1},side:{defaultValue:{value:`'right'`,computed:!1},required:!1},sideOffset:{defaultValue:{value:`2`,computed:!1},required:!1}}},H.__docgenInfo={description:``,methods:[],displayName:`ContextMenuCheckboxItem`},U.__docgenInfo={description:``,methods:[],displayName:`ContextMenuRadioGroup`},W.__docgenInfo={description:``,methods:[],displayName:`ContextMenuRadioItem`},G.__docgenInfo={description:``,methods:[],displayName:`ContextMenuSeparator`},K.__docgenInfo={description:``,methods:[],displayName:`ContextMenuShortcut`}})))()}var Y,X,ft,Z,Q,$,pt;function mt(){return(mt=t((()=>{Y=n(),at(),ie(),ue(),ze(),v(),y(),le(),Ve(),g(),J(),X=r(),ft={title:`Components/ContextMenu`,component:P,subcomponents:{ContextMenuTrigger:F,ContextMenuContent:I,ContextMenuItem:R,ContextMenuCheckboxItem:H,ContextMenuRadioGroup:U,ContextMenuRadioItem:W,ContextMenuLabel:L,ContextMenuSeparator:G,ContextMenuShortcut:K,ContextMenuGroup:dt,ContextMenuSub:z,ContextMenuSubTrigger:B,ContextMenuSubContent:V},parameters:{layout:`centered`},tags:[`autodocs`]},Z={render:function(){let[e,t]=(0,Y.useState)(!0),[n,r]=(0,Y.useState)(`webworker`);return(0,X.jsxs)(P,{children:[(0,X.jsxs)(F,{className:`flex h-52 w-96 cursor-context-menu flex-col items-center justify-center rounded-none border border-dashed border-secondary-border bg-neutral-50 text-xs text-neutral-500 hover:bg-neutral-100/60`,children:[(0,X.jsx)(Be,{className:`mb-2 size-6 text-neutral-400`}),(0,X.jsx)(`span`,{children:`이 영역을 우클릭하여 메뉴를 엽니다`})]}),(0,X.jsxs)(I,{className:`w-56`,children:[(0,X.jsxs)(R,{children:[(0,X.jsx)(de,{}),(0,X.jsx)(`span`,{children:`레이어 보기`}),(0,X.jsx)(K,{children:`⌘+V`})]}),(0,X.jsxs)(R,{children:[(0,X.jsx)(ce,{}),(0,X.jsx)(`span`,{children:`영역으로 줌`}),(0,X.jsx)(K,{children:`⌘+Z`})]}),(0,X.jsx)(G,{}),(0,X.jsxs)(z,{children:[(0,X.jsxs)(B,{children:[(0,X.jsx)(fe,{}),(0,X.jsx)(`span`,{children:`내보내기`})]}),(0,X.jsxs)(V,{className:`w-40`,children:[(0,X.jsx)(R,{children:`GeoJSON (.geojson)`}),(0,X.jsx)(R,{children:`Shapefile (.zip)`}),(0,X.jsx)(R,{children:`GeoTIFF (.tif)`})]})]}),(0,X.jsx)(G,{}),(0,X.jsx)(H,{inset:!0,checked:e,onCheckedChange:t,children:`바운딩박스 경계 표시`}),(0,X.jsx)(G,{}),(0,X.jsx)(L,{children:`렌더링 엔진`}),(0,X.jsxs)(U,{value:n,onValueChange:r,children:[(0,X.jsx)(W,{inset:!0,value:`canvas`,children:`Canvas 2D`}),(0,X.jsx)(W,{inset:!0,value:`webworker`,children:`WebWorker Offscreen`}),(0,X.jsx)(W,{inset:!0,value:`webgl`,children:`WebGL`})]}),(0,X.jsx)(G,{}),(0,X.jsxs)(R,{variant:`destructive`,children:[(0,X.jsx)(E,{}),(0,X.jsx)(`span`,{children:`레이어 삭제`}),(0,X.jsx)(K,{children:`Delete`})]})]})]})}},Q={render:function(){return(0,X.jsxs)(`div`,{className:`flex w-84 flex-col border border-secondary-border bg-white shadow-xs`,children:[(0,X.jsx)(`div`,{className:`border-b border-secondary-border bg-neutral-50 px-3 py-2`,children:(0,X.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`레이어 트리 (우클릭 테스트)`})}),(0,X.jsxs)(`div`,{className:`flex flex-col p-1`,children:[(0,X.jsxs)(P,{children:[(0,X.jsxs)(F,{className:`flex cursor-context-menu items-center justify-between px-2.5 py-1.5 text-xs hover:bg-neutral-100 data-open:bg-neutral-100`,children:[(0,X.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,X.jsx)(Oe,{className:`size-3.5 text-blue-600`}),(0,X.jsx)(`span`,{className:`font-mono text-2xs text-secondary-foreground`,children:`tl_scco_ctprvn (행정구역)`})]}),(0,X.jsx)(`span`,{className:`text-footer-muted text-2xs`,children:`Polygon`})]}),(0,X.jsxs)(I,{className:`w-48`,children:[(0,X.jsx)(L,{children:`속성 및 편집`}),(0,X.jsxs)(R,{children:[(0,X.jsx)(h,{}),(0,X.jsx)(`span`,{children:`심볼 편집기 열기`}),(0,X.jsx)(K,{children:`⌘+E`})]}),(0,X.jsxs)(R,{children:[(0,X.jsx)(it,{}),(0,X.jsx)(`span`,{children:`레이어 복제`}),(0,X.jsx)(K,{children:`⌘+D`})]}),(0,X.jsxs)(R,{children:[(0,X.jsx)(se,{}),(0,X.jsx)(`span`,{children:`데이터 새로고침`}),(0,X.jsx)(K,{children:`⌘+R`})]}),(0,X.jsx)(G,{}),(0,X.jsxs)(R,{variant:`destructive`,children:[(0,X.jsx)(E,{}),(0,X.jsx)(`span`,{children:`레이어 제거`}),(0,X.jsx)(K,{children:`Delete`})]})]})]}),(0,X.jsxs)(P,{children:[(0,X.jsxs)(F,{className:`flex cursor-context-menu items-center justify-between px-2.5 py-1.5 text-xs hover:bg-neutral-100 data-open:bg-neutral-100`,children:[(0,X.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,X.jsx)(Be,{className:`size-3.5 text-emerald-600`}),(0,X.jsx)(`span`,{className:`font-mono text-2xs text-secondary-foreground`,children:`rain_obs_station (관측소)`})]}),(0,X.jsx)(`span`,{className:`text-footer-muted text-2xs`,children:`Point`})]}),(0,X.jsxs)(I,{className:`w-48`,children:[(0,X.jsx)(L,{children:`속성 및 편집`}),(0,X.jsxs)(R,{children:[(0,X.jsx)(ce,{}),(0,X.jsx)(`span`,{children:`관측소 전체로 줌`}),(0,X.jsx)(K,{children:`⌘+1`})]}),(0,X.jsxs)(R,{children:[(0,X.jsx)(h,{}),(0,X.jsx)(`span`,{children:`스타일 속성 변경`})]}),(0,X.jsx)(G,{}),(0,X.jsxs)(R,{variant:`destructive`,children:[(0,X.jsx)(E,{}),(0,X.jsx)(`span`,{children:`레이어 제거`}),(0,X.jsx)(K,{children:`Delete`})]})]})]})]})]})}},$={render:function(){return(0,X.jsxs)(P,{children:[(0,X.jsx)(F,{className:`flex h-36 w-80 cursor-context-menu items-center justify-center border border-dashed border-secondary-border bg-white text-xs text-neutral-500`,children:`우클릭하여 인셋 정렬 확인`}),(0,X.jsxs)(I,{className:`w-52`,children:[(0,X.jsxs)(R,{children:[(0,X.jsx)(de,{}),(0,X.jsx)(`span`,{children:`아이콘 있는 항목`})]}),(0,X.jsxs)(R,{inset:!0,children:[(0,X.jsx)(`span`,{children:`인셋(Inset) 항목`}),(0,X.jsx)(K,{children:`⌘+I`})]}),(0,X.jsx)(G,{}),(0,X.jsx)(L,{inset:!0,children:`인셋 라벨`}),(0,X.jsx)(H,{inset:!0,defaultChecked:!0,children:`인셋 체크박스`})]})]})}},pt=[`Default`,`LayerTreeContext`,`InsetItems`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
          <ContextMenuCheckboxItem inset checked={showBbox} onCheckedChange={setShowBbox}>
            바운딩박스 경계 표시
          </ContextMenuCheckboxItem>

          <ContextMenuSeparator />

          {/* 라디오 그룹 */}
          <ContextMenuLabel>렌더링 엔진</ContextMenuLabel>
          <ContextMenuRadioGroup value={renderEngine} onValueChange={setRenderEngine}>
            <ContextMenuRadioItem inset value="canvas">
              Canvas 2D
            </ContextMenuRadioItem>
            <ContextMenuRadioItem inset value="webworker">
              WebWorker Offscreen
            </ContextMenuRadioItem>
            <ContextMenuRadioItem inset value="webgl">
              WebGL
            </ContextMenuRadioItem>
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
          <ContextMenuCheckboxItem inset defaultChecked>
            인셋 체크박스
          </ContextMenuCheckboxItem>
        </ContextMenuContent>
      </ContextMenu>;
  }
}`,...$.parameters?.docs?.source}}}})))()}mt();export{Z as Default,$ as InsetItems,Q as LayerTreeContext,pt as __namedExportsOrder,ft as default};