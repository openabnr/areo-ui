import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{b as n,n as r}from"./iframe-CfFMW0hA.js";import{l as i,t as a}from"./utils-CXswP1E2.js";import{S as o,b as s,g as c,h as ee,l as te,m as ne,r as re,s as ie,t as ae,v as oe,x as se,y as ce}from"./useRenderElement-Bg0jCFmC.js";import{n as le,o as ue,s as de,t as fe}from"./useButton-CYbk9NNR.js";import{n as pe}from"./owner-LfmLthDG.js";import{n as l,t as u}from"./Button-Bc1aY3Nz.js";import{n as d,t as f}from"./createLucideIcon-CxaUvMz3.js";import{n as p,t as me}from"./check-D4nBoGYy.js";import{i as m,n as he,r as h,t as ge}from"./getPseudoElementBounds-vj4nD5if.js";import{n as _e,t as g}from"./chevron-right-D4CqrUE0.js";import{A as ve,C as ye,D as be,E as _,G as v,H as xe,I as y,J as Se,K as Ce,L as we,M as b,N as x,O as S,P as C,Q as Te,S as Ee,T as w,U as T,V as De,W as Oe,X as ke,Y as Ae,Z as je,_ as Me,a as Ne,b as E,c as Pe,d as Fe,f as Ie,g as Le,h as Re,i as ze,j as Be,k as Ve,l as He,m as Ue,n as We,o as Ge,p as Ke,q as qe,r as Je,s as Ye,t as Xe,u as Ze,v as Qe,w as $e,x as et,y as tt}from"./MenuSubmenuTrigger-B5aeq9JA.js";import{n as nt,t as rt}from"./layers-CJP5yjOu.js";import{n as it,t as at}from"./plus-D0gXtchj.js";import{n as ot,t as st}from"./settings-DZMkT9I4.js";import{n as ct,t as lt}from"./trash-CY1S0nVv.js";import{B as ut,Et as dt,F as ft,I as pt,J as mt,L as ht,R as gt,T as _t,Tt as vt,ct as yt,lt as bt,pt as xt,ut as St,y as Ct,z as wt}from"./usePositioner-K-vPtY5D.js";import{a as Tt,f as Et,n as Dt,t as Ot}from"./useBaseUiId-DjGELmQM.js";import{n as kt,r as At}from"./useTimeout-CEuaDgxu.js";import{f as jt,m as Mt}from"./DirectionContext-D5diMaKz.js";import{i as Nt,n as Pt,r as Ft,t as It}from"./safePolygon-BLBrRnzK.js";import{c as Lt,l as Rt}from"./useAnchoredPopupScrollLock-BW_rlNsx.js";import{n as zt,t as Bt}from"./usePopupHandleStore--LVhsTvK.js";import{n as Vt,t as Ht}from"./useFocus-BTBQ6HIH.js";import{n as Ut,t as Wt}from"./useTriggerFocusGuards-CQLnwYvo.js";import{n as Gt,t as Kt}from"./CompositeItem-Bn52Zvug.js";var qt,Jt;function Yt(){return(Yt=t((()=>{d(),qt={name:`file-spreadsheet`,size:24,node:[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M8 13h2`,key:`yr2amv`}],[`path`,{d:`M14 13h2`,key:`un5t4a`}],[`path`,{d:`M8 17h2`,key:`2yhykz`}],[`path`,{d:`M14 17h2`,key:`10kma7`}]]},qt.node,Jt=f(qt)})))()}var Xt,Zt;function Qt(){return(Qt=t((()=>{d(),Xt={name:`globe`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`,key:`13o1zl`}],[`path`,{d:`M2 12h20`,key:`9i4pu4`}]]},Xt.node,Zt=f(Xt)})))()}var $t,en;function tn(){return(tn=t((()=>{d(),$t={name:`hard-drive`,size:24,node:[[`path`,{d:`M10 16h.01`,key:`1bzywj`}],[`path`,{d:`M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`,key:`18tbho`}],[`path`,{d:`M21.946 12.013H2.054`,key:`zqlbp7`}],[`path`,{d:`M6 16h.01`,key:`1pmjb7`}]]},$t.node,en=f($t)})))()}function nn(e){let{enabled:t=!0,mouseDownAction:n,open:r}=e,i=rn.useRef(!1);return rn.useMemo(()=>t?{onMouseDown:e=>{(n===`open`&&!r||n===`close`&&r)&&(i.current=!0,pe(e.currentTarget).addEventListener(`click`,()=>{i.current=!1},{once:!0}))},onClick:e=>{i.current&&(i.current=!1,e.preventBaseUIHandler())}}:ie,[t,n,r])}var rn;function an(){return(an=t((()=>{rn=e(n(),1),te()})))()}function on(e,t){let n=At(),[r,i]=D.useState(!1);return s(()=>{e&&t===`trigger-hover`?(i(!0),n.start(500,()=>{i(!1)})):e||(n.clear(),i(!1))},[e,t,n]),r}function sn(){let e=Ie(!0);return D.useMemo(()=>e?{type:`menubar`,context:e}:{type:void 0},[e])}var D,O,cn;function ln(){return(ln=t((()=>{ee(),D=e(n(),1),kt(),dt(),se(),ce(),te(),It(),Lt(),ft(),Ht(),Ft(),ut(),Mt(),y(),St(),ae(),fe(),ge(),Gt(),ue(),Ge(),Bt(),Ct(),Wt(),Ot(),Et(),an(),Fe(),mt(),bt(),c(),O=r(),cn=vt(function(e,t){let{render:n,className:r,style:i,disabled:a=!1,nativeButton:s=!0,id:c,openOnHover:ee,delay:te=100,closeDelay:ae=0,handle:se,payload:ce,...ue}=e,fe=we(!0),l=zt(se)??fe?.store;if(!l)throw Error(ne(85));let u=Dt(c),d=l.useState(`isTriggerActive`,u),f=l.useState(`floatingRootContext`),p=l.useState(`isOpenedByTrigger`,u),me=l.useState(`triggerControlsId`,u),m=D.useRef(null),h=sn(),ge=de(!0),_e=gt(),g=D.useMemo(()=>_e??new wt,[_e]),ve=pt(g),ye=ht(),{registerTrigger:be,isMountedByThisTrigger:_}=_t(u,m,l,{payload:ce,closeDelay:ae,parent:h,floatingTreeRoot:g,floatingNodeId:ve,floatingParentNodeId:ye,keyboardEventRelay:ge?.relayKeyboardEvent}),v=h.type===`menubar`,xe=l.useState(`disabled`),y=a||xe||v&&h.context.disabled,{getButtonProps:Se,buttonRef:Ce}=le({disabled:y,native:s});D.useEffect(()=>{!p&&h.type===void 0&&(l.context.allowMouseUpTriggerRef.current=!1)},[l,p,h.type]);let b=D.useRef(null),x=At(),S=o(e=>{if(!b.current)return;x.clear(),l.context.allowMouseUpTriggerRef.current=!1;let t=e.target;jt(b.current,t)||jt(l.select(`positionerElement`),t)||t===b.current||(t==null||Ne(t)!==l.select(`rootId`))&&(he(e,b.current)||g.events.emit(`close`,{domEvent:e,reason:Tt}))});D.useEffect(()=>{let e=pe(b.current);if(p&&l.select(`lastOpenChangeReason`)===`trigger-hover`)return e.addEventListener(`mouseup`,S,{once:!0}),()=>{e.removeEventListener(`mouseup`,S)}},[p,S,l]);let C=v&&h.context.hasSubmenuOpen,Te=Nt(f,{enabled:(ee??C)&&!y&&(!v||C&&!_),handleClose:Pt({blockPointerEvents:!v}),mouseOnly:!0,move:!1,restMs:h.type===void 0?te:void 0,delay:{close:ae},triggerElementRef:m,externalTree:g,isActiveTrigger:d,isClosing:()=>l.select(`transitionStatus`)===`ending`}),Ee=on(p,l.select(`lastOpenChangeReason`)),w=Rt(f,{enabled:!y,event:p&&v?`click`:`mousedown`,toggle:!0,ignoreMouse:!1,stickIfOpen:h.type===void 0&&Ee}),T=Vt(f,{enabled:!y&&C}),De=nn({open:p,enabled:v,mouseDownAction:`open`}),Oe=D.useMemo(()=>oe(T.reference,w.reference),[T.reference,w.reference]),ke=l.useState(`triggerProps`,_),Ae=l.useState(`filterTriggerProps`),{handlePreFocusGuardFocus:je,handleFocusTargetFocus:Me}=Ut(l,m),E={disabled:y,open:p},Pe=[b,t,Ce,be,m],Fe=[Oe,Te??ie,ke,{"aria-haspopup":`menu`,"aria-controls":me,id:u,onMouseDown:e=>{l.select(`open`)||(x.start(200,()=>{l.context.allowMouseUpTriggerRef.current=!0}),pe(e.currentTarget).addEventListener(`mouseup`,S,{once:!0}))}},Ae,v?{role:`menuitem`}:{},De,ue,Se],Ie=re(`button`,e,{enabled:!v,stateAttributesMapping:xt,state:E,ref:Pe,props:Fe});return v?(0,O.jsx)(Kt,{tag:`button`,render:n,className:r,style:i,state:E,refs:Pe,props:Fe,stateAttributesMapping:xt}):p?(0,O.jsxs)(D.Fragment,{children:[(0,O.jsx)(yt,{ref:l.context.beforeTriggerFocusGuardRef,onFocus:je},`${u}-pre-focus-guard`),(0,O.jsx)(D.Fragment,{children:Ie},u),(0,O.jsx)(yt,{ref:l.context.triggerFocusTargetRef,onFocus:Me},`${u}-post-focus-guard`)]}):(0,O.jsx)(D.Fragment,{children:Ie},u)})})))()}function k({...e}){return(0,U.jsx)(He,{...e})}function un({...e}){return(0,U.jsx)(et,{...e})}function A({...e}){return(0,U.jsx)(cn,{"data-slot":`dropdown-menu-trigger`,...e})}function j({className:e,align:t=`start`,alignOffset:n=0,side:r=`bottom`,sideOffset:i=4,container:o,children:s,...c}){return(0,U.jsx)(et,{container:o,children:(0,U.jsx)(tt,{className:`areo-root isolate z-50 outline-none`,align:t,alignOffset:n,side:r,sideOffset:i,children:(0,U.jsx)(ye,{"data-slot":`dropdown-menu-content`,className:a(fn,`shadow-md`,e),...c,children:s})})})}function M({children:e,...t}){return(0,U.jsx)(W,{value:!0,children:(0,U.jsx)(Ve,{"data-slot":`dropdown-menu-group`,...t,children:e})})}function N({className:e,inset:t,children:n,...r}){let i=(0,dn.use)(W),o=a(`text-footer-muted px-2.5 py-1.5 text-xs font-semibold select-none`,t&&`pl-9`,e);return i?(0,U.jsx)(be,{"data-slot":`dropdown-menu-label`,"data-inset":t||void 0,className:o,...r,children:n}):(0,U.jsx)(`div`,{"data-slot":`dropdown-menu-label`,"data-inset":t||void 0,className:o,...r,children:n})}function P({className:e,inset:t,variant:n=`default`,...r}){return(0,U.jsx)(w,{"data-slot":`dropdown-menu-item`,"data-inset":t||void 0,"data-variant":n,className:a(G,t&&`pl-9`,n===`destructive`&&`text-red-600 data-highlighted:bg-red-50 data-highlighted:text-red-700`,e),...r})}function F({...e}){return(0,U.jsx)(Ye,{...e})}function I({className:e,inset:t,children:n,...r}){return(0,U.jsxs)(Xe,{"data-slot":`dropdown-menu-sub-trigger`,"data-inset":t||void 0,className:a(G,`data-open:bg-neutral-100 data-open:text-black`,t&&`pl-9`,e),...r,children:[n,(0,U.jsx)(g,{"aria-hidden":`true`,className:`ml-auto size-4 text-neutral-400`})]})}function L({className:e,align:t=`start`,alignOffset:n=-3,side:r=`right`,sideOffset:i=2,container:o,children:s,...c}){return(0,U.jsx)(et,{container:o,children:(0,U.jsx)(tt,{className:`areo-root isolate z-50 outline-none`,align:t,alignOffset:n,side:r,sideOffset:i,children:(0,U.jsx)(ye,{"data-slot":`dropdown-menu-sub-content`,className:a(fn,`shadow-lg`,e),...c,children:s})})})}function R({className:e,children:t,inset:n,...r}){return(0,U.jsxs)(x,{"data-slot":`dropdown-menu-checkbox-item`,"data-inset":n||void 0,className:a(G,`pr-7`,n&&`pl-9`,e),...r,children:[(0,U.jsx)(`span`,{className:`pointer-events-none absolute right-2 flex size-4 items-center justify-center`,children:(0,U.jsx)(Be,{children:(0,U.jsx)(me,{"aria-hidden":`true`,className:`size-3.5 text-secondary-foreground`})})}),t]})}function z({children:e,...t}){return(0,U.jsx)(W,{value:!0,children:(0,U.jsx)(Me,{"data-slot":`dropdown-menu-radio-group`,...t,children:e})})}function B({className:e,children:t,inset:n,...r}){return(0,U.jsxs)(Re,{"data-slot":`dropdown-menu-radio-item`,"data-inset":n||void 0,className:a(G,`pr-7`,n&&`pl-9`,e),...r,children:[(0,U.jsx)(`span`,{className:`pointer-events-none absolute right-2 flex size-4 items-center justify-center`,children:(0,U.jsx)(Ke,{children:(0,U.jsx)(me,{"aria-hidden":`true`,className:`size-3.5 text-secondary-foreground`})})}),t]})}function V({className:e,...t}){return(0,U.jsx)(Je,{"data-slot":`dropdown-menu-separator`,className:a(`-mx-1 my-1 h-px bg-secondary-border`,e),...t})}function H({className:e,...t}){return(0,U.jsx)(`span`,{"data-slot":`dropdown-menu-shortcut`,className:a(`ml-auto font-mono text-xs tracking-tight text-neutral-500 select-none`,`group-data-highlighted/dropdown-menu-item:text-neutral-900`,e),...t})}var dn,U,W,fn,G;function pn(){return(pn=t((()=>{dn=n(),Ze(),Ee(),ln(),E(),$e(),ve(),S(),_(),Pe(),We(),C(),b(),Qe(),Le(),Ue(),ze(),p(),_e(),i(),U=r(),W=(0,dn.createContext)(!1),fn=a(`max-h-(--available-height) min-w-44 origin-(--transform-origin) overflow-x-hidden overflow-y-auto`,`rounded-none border border-secondary-border bg-white p-1 font-sans text-secondary-foreground outline-none`,`motion-safe:transition-[opacity,transform] motion-safe:duration-100`,`data-starting-style:scale-95 data-starting-style:opacity-0`,`data-ending-style:scale-95 data-ending-style:opacity-0`),G=a(`group/dropdown-menu-item relative flex cursor-pointer items-center gap-2.5 rounded-none px-2.5 py-1.5 text-xs outline-none select-none`,`data-highlighted:bg-neutral-100 data-highlighted:text-black`,`data-disabled:pointer-events-none data-disabled:opacity-40`,`[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4`),k.__docgenInfo={description:``,methods:[],displayName:`DropdownMenu`},un.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuPortal`},A.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuTrigger`},j.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuContent`,props:{align:{defaultValue:{value:`'start'`,computed:!1},required:!1},alignOffset:{defaultValue:{value:`0`,computed:!1},required:!1},side:{defaultValue:{value:`'bottom'`,computed:!1},required:!1},sideOffset:{defaultValue:{value:`4`,computed:!1},required:!1}}},M.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuGroup`},N.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuLabel`},P.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuItem`,props:{variant:{defaultValue:{value:`'default'`,computed:!1},required:!1}}},F.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuSub`},I.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuSubTrigger`},L.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuSubContent`,props:{align:{defaultValue:{value:`'start'`,computed:!1},required:!1},alignOffset:{defaultValue:{value:`-3`,computed:!1},required:!1},side:{defaultValue:{value:`'right'`,computed:!1},required:!1},sideOffset:{defaultValue:{value:`2`,computed:!1},required:!1}}},R.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuCheckboxItem`},z.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuRadioGroup`},B.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuRadioItem`},V.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuSeparator`},H.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuShortcut`}})))()}var mn,K,q,J,Y,X,hn,Z,Q,$,gn;function _n(){return(_n=t((()=>{mn=n(),m(),Te(),ke(),Yt(),Qt(),tn(),nt(),Se(),Ce(),it(),Oe(),ot(),ct(),xe(),l(),pn(),K=r(),{expect:q,screen:J,userEvent:Y,within:X}=__STORYBOOK_MODULE_TEST__,hn={title:`Components/DropdownMenu`,component:k,subcomponents:{DropdownMenuTrigger:A,DropdownMenuContent:j,DropdownMenuItem:P,DropdownMenuCheckboxItem:R,DropdownMenuRadioGroup:z,DropdownMenuRadioItem:B,DropdownMenuLabel:N,DropdownMenuSeparator:V,DropdownMenuShortcut:H,DropdownMenuGroup:M,DropdownMenuSub:F,DropdownMenuSubTrigger:I,DropdownMenuSubContent:L},parameters:{layout:`centered`},tags:[`autodocs`]},Z={render:function(){let[e,t]=(0,mn.useState)(!0),[n,r]=(0,mn.useState)(`webworker`);return(0,K.jsxs)(k,{children:[(0,K.jsx)(A,{render:(0,K.jsxs)(u,{size:`sm`,variant:`outline-secondary`,children:[(0,K.jsx)(`span`,{children:`도면 편집 옵션`}),(0,K.jsx)(h,{className:`size-4 text-neutral-500`})]})}),(0,K.jsxs)(j,{className:`w-56`,align:`start`,children:[(0,K.jsxs)(P,{children:[(0,K.jsx)(Ae,{}),(0,K.jsx)(`span`,{children:`레이어 전체 보기`}),(0,K.jsx)(H,{children:`⌘+V`})]}),(0,K.jsxs)(P,{children:[(0,K.jsx)(De,{}),(0,K.jsx)(`span`,{children:`영역으로 줌`}),(0,K.jsx)(H,{children:`⌘+Z`})]}),(0,K.jsx)(V,{}),(0,K.jsxs)(F,{children:[(0,K.jsxs)(I,{children:[(0,K.jsx)(je,{}),(0,K.jsx)(`span`,{children:`내보내기`})]}),(0,K.jsxs)(L,{className:`w-44`,children:[(0,K.jsx)(P,{children:`GeoJSON (.geojson)`}),(0,K.jsx)(P,{children:`Shapefile (.zip)`}),(0,K.jsx)(P,{children:`GeoTIFF (.tif)`})]})]}),(0,K.jsx)(V,{}),(0,K.jsx)(R,{inset:!0,checked:e,onCheckedChange:t,children:`BBOX 경계 표시`}),(0,K.jsx)(V,{}),(0,K.jsx)(N,{children:`렌더링 엔진`}),(0,K.jsxs)(z,{value:n,onValueChange:r,children:[(0,K.jsx)(B,{inset:!0,value:`canvas`,children:`Canvas 2D`}),(0,K.jsx)(B,{inset:!0,value:`webworker`,children:`WebWorker Offscreen`}),(0,K.jsx)(B,{inset:!0,value:`webgl`,children:`WebGL`})]}),(0,K.jsx)(V,{}),(0,K.jsxs)(P,{variant:`destructive`,children:[(0,K.jsx)(lt,{}),(0,K.jsx)(`span`,{children:`임시 작업 초기화`}),(0,K.jsx)(H,{children:`Delete`})]})]})]})},play:async({canvasElement:e})=>{let t=X(e).getByRole(`button`,{name:/도면 편집 옵션/});await Y.click(t),await q(await J.findByRole(`menu`)).toBeInTheDocument();let n=J.getByRole(`menuitemcheckbox`,{name:/BBOX 경계 표시/});await q(n).toHaveAttribute(`aria-checked`,`true`),await Y.click(n);let r=J.getByRole(`menuitemradio`,{name:/Canvas 2D/});await Y.click(r);let i=J.getByRole(`menuitem`,{name:/내보내기/});await Y.hover(i),await Y.click(i);let a=await J.findByRole(`menuitem`,{name:`GeoJSON (.geojson)`});await Y.click(a)}},Q={render:function(){return(0,K.jsxs)(`div`,{className:`flex items-center gap-2 border border-secondary-border bg-white p-2 shadow-xs`,children:[(0,K.jsxs)(k,{children:[(0,K.jsx)(A,{render:(0,K.jsxs)(u,{size:`sm`,variant:`primary`,children:[(0,K.jsx)(at,{className:`size-4`}),(0,K.jsx)(`span`,{children:`새 레이어 추가`}),(0,K.jsx)(h,{className:`size-4 opacity-75`})]})}),(0,K.jsxs)(j,{className:`w-52`,align:`start`,children:[(0,K.jsxs)(M,{children:[(0,K.jsx)(N,{children:`벡터 레이어`}),(0,K.jsxs)(P,{children:[(0,K.jsx)(qe,{}),(0,K.jsx)(`span`,{children:`포인트 레이어 생성`})]}),(0,K.jsxs)(P,{children:[(0,K.jsx)(rt,{}),(0,K.jsx)(`span`,{children:`폴리곤 레이어 생성`})]})]}),(0,K.jsx)(V,{}),(0,K.jsxs)(M,{children:[(0,K.jsx)(N,{children:`외부 데이터 연계`}),(0,K.jsxs)(P,{children:[(0,K.jsx)(Zt,{}),(0,K.jsx)(`span`,{children:`WMS / WMTS 서비스`})]}),(0,K.jsxs)(P,{children:[(0,K.jsx)(Jt,{}),(0,K.jsx)(`span`,{children:`CSV/Excel 지오코딩 로드`})]}),(0,K.jsxs)(P,{children:[(0,K.jsx)(en,{}),(0,K.jsx)(`span`,{children:`PostGIS 직접 연결`})]})]})]})]}),(0,K.jsxs)(u,{size:`sm`,variant:`outline-secondary`,children:[(0,K.jsx)(T,{className:`size-3.5`}),(0,K.jsx)(`span`,{children:`새로고침`})]})]})},play:async({canvasElement:e})=>{let t=X(e).getByRole(`button`,{name:/새 레이어 추가/});await Y.click(t);let n=await J.findByRole(`menuitem`,{name:/포인트 레이어 생성/});await Y.click(n)}},$={render:function(){return(0,K.jsxs)(k,{children:[(0,K.jsx)(A,{render:(0,K.jsxs)(u,{size:`sm`,variant:`outline-secondary`,children:[(0,K.jsx)(st,{className:`size-4`}),(0,K.jsx)(`span`,{children:`환경 설정`})]})}),(0,K.jsx)(un,{container:document.body,children:(0,K.jsx)(`span`,{className:`sr-only`,children:`포털 컨테이너 보조 노드`})}),(0,K.jsxs)(j,{className:`w-56`,align:`end`,alignOffset:2,side:`bottom`,sideOffset:6,children:[(0,K.jsxs)(P,{children:[(0,K.jsx)(v,{}),(0,K.jsx)(`span`,{children:`편집 활성화`}),(0,K.jsx)(H,{children:`⌘+E`})]}),(0,K.jsxs)(P,{inset:!0,children:[(0,K.jsx)(`span`,{children:`스냅 설정 (Inset)`}),(0,K.jsx)(H,{children:`⌘+S`})]}),(0,K.jsxs)(F,{children:[(0,K.jsx)(I,{inset:!0,children:(0,K.jsx)(`span`,{children:`고급 도구 (Inset Sub)`})}),(0,K.jsx)(L,{align:`start`,alignOffset:0,side:`right`,sideOffset:4,children:(0,K.jsx)(P,{children:`좌표계 변환`})})]}),(0,K.jsx)(V,{}),(0,K.jsx)(N,{inset:!0,children:`보기 옵션`}),(0,K.jsx)(R,{inset:!0,defaultChecked:!0,children:`눈금자 보이기`}),(0,K.jsx)(R,{defaultChecked:!0,children:`미니맵 표시 (Non-inset)`}),(0,K.jsx)(V,{}),(0,K.jsx)(z,{defaultValue:`grid`,children:(0,K.jsx)(B,{value:`grid`,children:`격자 스냅 (Non-inset)`})})]})]})},play:async({canvasElement:e})=>{let t=X(e).getByRole(`button`,{name:/환경 설정/});await Y.click(t),await q(await J.findByText(`보기 옵션`)).toBeInTheDocument();let n=J.getByRole(`menuitem`,{name:/고급 도구 \(Inset Sub\)/});await Y.hover(n),await Y.click(n),await q(await J.findByRole(`menuitem`,{name:`좌표계 변환`})).toBeInTheDocument(),await Y.keyboard(`{Escape}`)}},gn=[`Default`,`MapToolbarAddLayer`,`InsetAndShortcuts`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [showBbox, setShowBbox] = useState(true);
    const [renderEngine, setRenderEngine] = useState('webworker');
    return <DropdownMenu>
        <DropdownMenuTrigger render={<Button size="sm" variant="outline-secondary">
              <span>도면 편집 옵션</span>
              <ChevronDown className="size-4 text-neutral-500" />
            </Button>} />

        <DropdownMenuContent className="w-56" align="start">
          <DropdownMenuItem>
            <Eye />
            <span>레이어 전체 보기</span>
            <DropdownMenuShortcut>⌘+V</DropdownMenuShortcut>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <ZoomIn />
            <span>영역으로 줌</span>
            <DropdownMenuShortcut>⌘+Z</DropdownMenuShortcut>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          {/* 서브메뉴 */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Download />
              <span>내보내기</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="w-44">
              <DropdownMenuItem>GeoJSON (.geojson)</DropdownMenuItem>
              <DropdownMenuItem>Shapefile (.zip)</DropdownMenuItem>
              <DropdownMenuItem>GeoTIFF (.tif)</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          <DropdownMenuSeparator />

          {/* 체크박스 아이템 (pl-9 inset 일치) */}
          <DropdownMenuCheckboxItem inset checked={showBbox} onCheckedChange={setShowBbox}>
            BBOX 경계 표시
          </DropdownMenuCheckboxItem>

          <DropdownMenuSeparator />

          {/* 라디오 그룹 (pl-9 inset 일치) */}
          <DropdownMenuLabel>렌더링 엔진</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={renderEngine} onValueChange={setRenderEngine}>
            <DropdownMenuRadioItem inset value="canvas">
              Canvas 2D
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem inset value="webworker">
              WebWorker Offscreen
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem inset value="webgl">
              WebGL
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>

          <DropdownMenuSeparator />

          <DropdownMenuItem variant="destructive">
            <Trash2 />
            <span>임시 작업 초기화</span>
            <DropdownMenuShortcut>Delete</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: /도면 편집 옵션/
    });

    // 1. 메뉴 열기
    await userEvent.click(trigger);
    await expect(await screen.findByRole('menu')).toBeInTheDocument();

    // 2. 체크박스 아이템 토글
    const checkboxItem = screen.getByRole('menuitemcheckbox', {
      name: /BBOX 경계 표시/
    });
    await expect(checkboxItem).toHaveAttribute('aria-checked', 'true');
    await userEvent.click(checkboxItem);

    // 3. 라디오 아이템 선택
    const canvasRadio = screen.getByRole('menuitemradio', {
      name: /Canvas 2D/
    });
    await userEvent.click(canvasRadio);

    // 4. 서브메뉴 트리거 호버/클릭 후 하위 메뉴 아이템 클릭
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
  render: function Render() {
    return <div className="flex items-center gap-2 border border-secondary-border bg-white p-2 shadow-xs">
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button size="sm" variant="primary">
                <Plus className="size-4" />
                <span>새 레이어 추가</span>
                <ChevronDown className="size-4 opacity-75" />
              </Button>} />

          <DropdownMenuContent className="w-52" align="start">
            <DropdownMenuGroup>
              <DropdownMenuLabel>벡터 레이어</DropdownMenuLabel>
              <DropdownMenuItem>
                <MapPin />
                <span>포인트 레이어 생성</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Layers />
                <span>폴리곤 레이어 생성</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuLabel>외부 데이터 연계</DropdownMenuLabel>
              <DropdownMenuItem>
                <Globe />
                <span>WMS / WMTS 서비스</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileSpreadsheet />
                <span>CSV/Excel 지오코딩 로드</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HardDrive />
                <span>PostGIS 직접 연결</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button size="sm" variant="outline-secondary">
          <RotateCw className="size-3.5" />
          <span>새로고침</span>
        </Button>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: /새 레이어 추가/
    });
    await userEvent.click(trigger);
    const pointItem = await screen.findByRole('menuitem', {
      name: /포인트 레이어 생성/
    });
    await userEvent.click(pointItem);
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <DropdownMenu>
        <DropdownMenuTrigger render={<Button size="sm" variant="outline-secondary">
              <Settings className="size-4" />
              <span>환경 설정</span>
            </Button>} />

        <DropdownMenuPortal container={document.body}>
          <span className="sr-only">포털 컨테이너 보조 노드</span>
        </DropdownMenuPortal>

        <DropdownMenuContent className="w-56" align="end" alignOffset={2} side="bottom" sideOffset={6}>
          <DropdownMenuItem>
            <Pencil />
            <span>편집 활성화</span>
            <DropdownMenuShortcut>⌘+E</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem inset>
            <span>스냅 설정 (Inset)</span>
            <DropdownMenuShortcut>⌘+S</DropdownMenuShortcut>
          </DropdownMenuItem>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger inset>
              <span>고급 도구 (Inset Sub)</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent align="start" alignOffset={0} side="right" sideOffset={4}>
              <DropdownMenuItem>좌표계 변환</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          <DropdownMenuSeparator />

          <DropdownMenuLabel inset>보기 옵션</DropdownMenuLabel>
          <DropdownMenuCheckboxItem inset defaultChecked>
            눈금자 보이기
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem defaultChecked>
            미니맵 표시 (Non-inset)
          </DropdownMenuCheckboxItem>

          <DropdownMenuSeparator />

          <DropdownMenuRadioGroup defaultValue="grid">
            <DropdownMenuRadioItem value="grid">
              격자 스냅 (Non-inset)
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: /환경 설정/
    });
    await userEvent.click(trigger);
    await expect(await screen.findByText('보기 옵션')).toBeInTheDocument();
    const insetSubTrigger = screen.getByRole('menuitem', {
      name: /고급 도구 \\(Inset Sub\\)/
    });
    await userEvent.hover(insetSubTrigger);
    await userEvent.click(insetSubTrigger);
    await expect(await screen.findByRole('menuitem', {
      name: '좌표계 변환'
    })).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
  }
}`,...$.parameters?.docs?.source}}}})))()}_n();export{Z as Default,$ as InsetAndShortcuts,Q as MapToolbarAddLayer,gn as __namedExportsOrder,hn as default};