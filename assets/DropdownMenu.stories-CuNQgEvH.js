import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{b as n,n as r}from"./iframe-sFfd_MYY.js";import{c as i,t as a}from"./utils-CynS5U15.js";import{S as o,b as s,g as c,h as ee,l as te,m as ne,r as re,s as ie,t as ae,v as oe,x as se,y as ce}from"./useRenderElement-DpsBghGd.js";import{n as le,o as ue,s as de,t as fe}from"./useButton-DA21-WN-.js";import{n as pe}from"./owner-BYyKvnRE.js";import{n as l,t as u}from"./Button-CB0K-Jiw.js";import{n as d,t as f}from"./createLucideIcon-Bv1AFRo0.js";import{n as p,t as me}from"./check-wsHSQRGk.js";import{i as m,n as he,r as h,t as ge}from"./getPseudoElementBounds-qf7jVb46.js";import{n as _e,t as g}from"./chevron-right-C0eRZFwG.js";import{A as ve,C as _,D as ye,E as be,G as v,H as xe,I as y,J as Se,K as Ce,L as we,M as b,N as x,O as S,P as C,Q as Te,S as Ee,T as w,U as T,V as De,W as Oe,X as ke,Y as Ae,Z as je,_ as Me,a as Ne,b as E,c as D,d as O,f as k,g as Pe,h as Fe,i as Ie,j as Le,k as Re,l as ze,m as Be,n as Ve,o as He,p as Ue,q as We,r as Ge,s as Ke,t as qe,u as Je,v as Ye,w as Xe,x as Ze,y as Qe}from"./MenuSubmenuTrigger-PdpR4HrO.js";import{n as $e,t as et}from"./layers-Be1waVsd.js";import{n as tt,t as nt}from"./plus-FQeD_EJj.js";import{n as rt,t as it}from"./settings-vEIIP7xY.js";import{n as at,t as ot}from"./trash-B_mYUGT1.js";import{B as st,Et as ct,F as lt,I as ut,J as dt,L as ft,R as pt,T as mt,Tt as ht,ct as gt,lt as _t,pt as vt,ut as yt,y as bt,z as xt}from"./usePositioner-TqQsSGsN.js";import{a as St,f as Ct,n as wt,t as Tt}from"./useBaseUiId-DQwlZXWD.js";import{n as Et,r as Dt}from"./useTimeout-c6KEQbDR.js";import{f as Ot,m as kt}from"./DirectionContext-BTcpy9cT.js";import{i as At,n as jt,r as Mt,t as Nt}from"./safePolygon-DtwqZtbe.js";import{c as Pt,l as Ft}from"./useAnchoredPopupScrollLock-Djf_58k3.js";import{n as It,t as Lt}from"./usePopupHandleStore-DeQECj7E.js";import{n as Rt,t as zt}from"./useFocus-CRPMapgm.js";import{n as Bt,t as Vt}from"./useTriggerFocusGuards-tAP9oK7E.js";import{n as Ht,t as Ut}from"./CompositeItem-BJxBX2ad.js";var A,Wt;function Gt(){return(Gt=t((()=>{d(),A={name:`file-spreadsheet`,size:24,node:[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M8 13h2`,key:`yr2amv`}],[`path`,{d:`M14 13h2`,key:`un5t4a`}],[`path`,{d:`M8 17h2`,key:`2yhykz`}],[`path`,{d:`M14 17h2`,key:`10kma7`}]]},A.node,Wt=f(A)})))()}var Kt,qt;function Jt(){return(Jt=t((()=>{d(),Kt={name:`globe`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`,key:`13o1zl`}],[`path`,{d:`M2 12h20`,key:`9i4pu4`}]]},Kt.node,qt=f(Kt)})))()}var Yt,Xt;function Zt(){return(Zt=t((()=>{d(),Yt={name:`hard-drive`,size:24,node:[[`path`,{d:`M10 16h.01`,key:`1bzywj`}],[`path`,{d:`M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`,key:`18tbho`}],[`path`,{d:`M21.946 12.013H2.054`,key:`zqlbp7`}],[`path`,{d:`M6 16h.01`,key:`1pmjb7`}]]},Yt.node,Xt=f(Yt)})))()}function Qt(e){let{enabled:t=!0,mouseDownAction:n,open:r}=e,i=$t.useRef(!1);return $t.useMemo(()=>t?{onMouseDown:e=>{(n===`open`&&!r||n===`close`&&r)&&(i.current=!0,pe(e.currentTarget).addEventListener(`click`,()=>{i.current=!1},{once:!0}))},onClick:e=>{i.current&&(i.current=!1,e.preventBaseUIHandler())}}:ie,[t,n,r])}var $t;function en(){return(en=t((()=>{$t=e(n(),1),te()})))()}function tn(e,t){let n=Dt(),[r,i]=j.useState(!1);return s(()=>{e&&t===`trigger-hover`?(i(!0),n.start(500,()=>{i(!1)})):e||(n.clear(),i(!1))},[e,t,n]),r}function nn(){let e=k(!0);return j.useMemo(()=>e?{type:`menubar`,context:e}:{type:void 0},[e])}var j,M,rn;function an(){return(an=t((()=>{ee(),j=e(n(),1),Et(),ct(),se(),ce(),te(),Nt(),Pt(),lt(),zt(),Mt(),st(),kt(),y(),yt(),ae(),fe(),ge(),Ht(),ue(),He(),Lt(),bt(),Vt(),Tt(),Ct(),en(),O(),dt(),_t(),c(),M=r(),rn=ht(function(e,t){let{render:n,className:r,style:i,disabled:a=!1,nativeButton:s=!0,id:c,openOnHover:ee,delay:te=100,closeDelay:ae=0,handle:se,payload:ce,...ue}=e,fe=we(!0),l=It(se)??fe?.store;if(!l)throw Error(ne(85));let u=wt(c),d=l.useState(`isTriggerActive`,u),f=l.useState(`floatingRootContext`),p=l.useState(`isOpenedByTrigger`,u),me=l.useState(`triggerControlsId`,u),m=j.useRef(null),h=nn(),ge=de(!0),_e=pt(),g=j.useMemo(()=>_e??new xt,[_e]),ve=ut(g),_=ft(),{registerTrigger:ye,isMountedByThisTrigger:be}=mt(u,m,l,{payload:ce,closeDelay:ae,parent:h,floatingTreeRoot:g,floatingNodeId:ve,floatingParentNodeId:_,keyboardEventRelay:ge?.relayKeyboardEvent}),v=h.type===`menubar`,xe=l.useState(`disabled`),y=a||xe||v&&h.context.disabled,{getButtonProps:Se,buttonRef:Ce}=le({disabled:y,native:s});j.useEffect(()=>{!p&&h.type===void 0&&(l.context.allowMouseUpTriggerRef.current=!1)},[l,p,h.type]);let b=j.useRef(null),x=Dt(),S=o(e=>{if(!b.current)return;x.clear(),l.context.allowMouseUpTriggerRef.current=!1;let t=e.target;Ot(b.current,t)||Ot(l.select(`positionerElement`),t)||t===b.current||(t==null||Ne(t)!==l.select(`rootId`))&&(he(e,b.current)||g.events.emit(`close`,{domEvent:e,reason:St}))});j.useEffect(()=>{let e=pe(b.current);if(p&&l.select(`lastOpenChangeReason`)===`trigger-hover`)return e.addEventListener(`mouseup`,S,{once:!0}),()=>{e.removeEventListener(`mouseup`,S)}},[p,S,l]);let C=v&&h.context.hasSubmenuOpen,Te=At(f,{enabled:(ee??C)&&!y&&(!v||C&&!be),handleClose:jt({blockPointerEvents:!v}),mouseOnly:!0,move:!1,restMs:h.type===void 0?te:void 0,delay:{close:ae},triggerElementRef:m,externalTree:g,isActiveTrigger:d,isClosing:()=>l.select(`transitionStatus`)===`ending`}),Ee=tn(p,l.select(`lastOpenChangeReason`)),w=Ft(f,{enabled:!y,event:p&&v?`click`:`mousedown`,toggle:!0,ignoreMouse:!1,stickIfOpen:h.type===void 0&&Ee}),T=Rt(f,{enabled:!y&&C}),De=Qt({open:p,enabled:v,mouseDownAction:`open`}),Oe=j.useMemo(()=>oe(T.reference,w.reference),[T.reference,w.reference]),ke=l.useState(`triggerProps`,be),Ae=l.useState(`filterTriggerProps`),{handlePreFocusGuardFocus:je,handleFocusTargetFocus:Me}=Bt(l,m),E={disabled:y,open:p},D=[b,t,Ce,ye,m],O=[Oe,Te??ie,ke,{"aria-haspopup":`menu`,"aria-controls":me,id:u,onMouseDown:e=>{l.select(`open`)||(x.start(200,()=>{l.context.allowMouseUpTriggerRef.current=!0}),pe(e.currentTarget).addEventListener(`mouseup`,S,{once:!0}))}},Ae,v?{role:`menuitem`}:{},De,ue,Se],k=re(`button`,e,{enabled:!v,stateAttributesMapping:vt,state:E,ref:D,props:O});return v?(0,M.jsx)(Ut,{tag:`button`,render:n,className:r,style:i,state:E,refs:D,props:O,stateAttributesMapping:vt}):p?(0,M.jsxs)(j.Fragment,{children:[(0,M.jsx)(gt,{ref:l.context.beforeTriggerFocusGuardRef,onFocus:je},`${u}-pre-focus-guard`),(0,M.jsx)(j.Fragment,{children:k},u),(0,M.jsx)(gt,{ref:l.context.triggerFocusTargetRef,onFocus:Me},`${u}-post-focus-guard`)]}):(0,M.jsx)(j.Fragment,{children:k},u)})})))()}function N({...e}){return(0,U.jsx)(ze,{...e})}function P({...e}){return(0,U.jsx)(rn,{"data-slot":`dropdown-menu-trigger`,...e})}function F({className:e,align:t=`start`,alignOffset:n=0,side:r=`bottom`,sideOffset:i=4,container:o,children:s,...c}){return(0,U.jsx)(Ze,{container:o,children:(0,U.jsx)(Qe,{className:`areo-root isolate z-50 outline-none`,align:t,alignOffset:n,side:r,sideOffset:i,children:(0,U.jsx)(_,{"data-slot":`dropdown-menu-content`,className:a(dn,`shadow-md`,e),...c,children:s})})})}function I({children:e,...t}){return(0,U.jsx)(W,{value:!0,children:(0,U.jsx)(Re,{"data-slot":`dropdown-menu-group`,...t,children:e})})}function L({className:e,inset:t,children:n,...r}){let i=(0,un.use)(W),o=a(`text-footer-muted px-2.5 py-1.5 text-xs font-semibold select-none`,t&&`pl-9`,e);return i?(0,U.jsx)(ye,{"data-slot":`dropdown-menu-label`,"data-inset":t||void 0,className:o,...r,children:n}):(0,U.jsx)(`div`,{"data-slot":`dropdown-menu-label`,"data-inset":t||void 0,className:o,...r,children:n})}function R({className:e,inset:t,variant:n=`default`,...r}){return(0,U.jsx)(w,{"data-slot":`dropdown-menu-item`,"data-inset":t||void 0,"data-variant":n,className:a(G,t&&`pl-9`,n===`destructive`&&`text-red-600 data-highlighted:bg-red-50 data-highlighted:text-red-700`,e),...r})}function on({...e}){return(0,U.jsx)(Ke,{...e})}function sn({className:e,inset:t,children:n,...r}){return(0,U.jsxs)(qe,{"data-slot":`dropdown-menu-sub-trigger`,"data-inset":t||void 0,className:a(G,`data-open:bg-neutral-100 data-open:text-black`,t&&`pl-9`,e),...r,children:[n,(0,U.jsx)(g,{"aria-hidden":`true`,className:`ml-auto size-4 text-neutral-400`})]})}function cn({className:e,align:t=`start`,alignOffset:n=-3,side:r=`right`,sideOffset:i=2,container:o,children:s,...c}){return(0,U.jsx)(Ze,{container:o,children:(0,U.jsx)(Qe,{className:`areo-root isolate z-50 outline-none`,align:t,alignOffset:n,side:r,sideOffset:i,children:(0,U.jsx)(_,{"data-slot":`dropdown-menu-sub-content`,className:a(dn,`shadow-lg`,e),...c,children:s})})})}function z({className:e,children:t,inset:n,...r}){return(0,U.jsxs)(x,{"data-slot":`dropdown-menu-checkbox-item`,"data-inset":n||void 0,className:a(G,`pr-7`,n&&`pl-9`,e),...r,children:[(0,U.jsx)(`span`,{className:`pointer-events-none absolute right-2 flex size-4 items-center justify-center`,children:(0,U.jsx)(Le,{children:(0,U.jsx)(me,{"aria-hidden":`true`,className:`size-3.5 text-secondary-foreground`})})}),t]})}function ln({children:e,...t}){return(0,U.jsx)(W,{value:!0,children:(0,U.jsx)(Me,{"data-slot":`dropdown-menu-radio-group`,...t,children:e})})}function B({className:e,children:t,inset:n,...r}){return(0,U.jsxs)(Fe,{"data-slot":`dropdown-menu-radio-item`,"data-inset":n||void 0,className:a(G,`pr-7`,n&&`pl-9`,e),...r,children:[(0,U.jsx)(`span`,{className:`pointer-events-none absolute right-2 flex size-4 items-center justify-center`,children:(0,U.jsx)(Ue,{children:(0,U.jsx)(me,{"aria-hidden":`true`,className:`size-3.5 text-secondary-foreground`})})}),t]})}function V({className:e,...t}){return(0,U.jsx)(Ge,{"data-slot":`dropdown-menu-separator`,className:a(`-mx-1 my-1 h-px bg-secondary-border`,e),...t})}function H({className:e,...t}){return(0,U.jsx)(`span`,{"data-slot":`dropdown-menu-shortcut`,className:a(`ml-auto font-mono text-xs tracking-tight text-neutral-500 select-none`,`group-data-highlighted/dropdown-menu-item:text-neutral-900`,e),...t})}var un,U,W,dn,G;function fn(){return(fn=t((()=>{un=n(),Je(),Ee(),an(),E(),Xe(),ve(),S(),be(),D(),Ve(),C(),b(),Ye(),Pe(),Be(),Ie(),p(),_e(),i(),U=r(),W=(0,un.createContext)(!1),dn=a(`max-h-(--available-height) min-w-44 origin-(--transform-origin) overflow-x-hidden overflow-y-auto`,`rounded-none border border-secondary-border bg-white p-1 font-sans text-secondary-foreground outline-none`,`motion-safe:transition-[opacity,transform] motion-safe:duration-100`,`data-starting-style:scale-95 data-starting-style:opacity-0`,`data-ending-style:scale-95 data-ending-style:opacity-0`),G=a(`group/dropdown-menu-item relative flex cursor-pointer items-center gap-2.5 rounded-none px-2.5 py-1.5 text-xs outline-none select-none`,`data-highlighted:bg-neutral-100 data-highlighted:text-black`,`data-disabled:pointer-events-none data-disabled:opacity-40`,`[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4`),N.__docgenInfo={description:``,methods:[],displayName:`DropdownMenu`},P.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuTrigger`},F.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuContent`,props:{align:{defaultValue:{value:`'start'`,computed:!1},required:!1},alignOffset:{defaultValue:{value:`0`,computed:!1},required:!1},side:{defaultValue:{value:`'bottom'`,computed:!1},required:!1},sideOffset:{defaultValue:{value:`4`,computed:!1},required:!1}}},I.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuGroup`},L.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuLabel`},R.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuItem`,props:{variant:{defaultValue:{value:`'default'`,computed:!1},required:!1}}},on.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuSub`},sn.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuSubTrigger`},cn.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuSubContent`,props:{align:{defaultValue:{value:`'start'`,computed:!1},required:!1},alignOffset:{defaultValue:{value:`-3`,computed:!1},required:!1},side:{defaultValue:{value:`'right'`,computed:!1},required:!1},sideOffset:{defaultValue:{value:`2`,computed:!1},required:!1}}},z.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuCheckboxItem`},ln.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuRadioGroup`},B.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuRadioItem`},V.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuSeparator`},H.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuShortcut`}})))()}var pn,K,q,J,Y,X,mn,Z,Q,$,hn;function gn(){return(gn=t((()=>{pn=n(),m(),Te(),ke(),Gt(),Jt(),Zt(),$e(),Se(),Ce(),tt(),Oe(),rt(),at(),xe(),l(),fn(),K=r(),{expect:q,screen:J,userEvent:Y,within:X}=__STORYBOOK_MODULE_TEST__,mn={title:`Components/DropdownMenu`,component:N,subcomponents:{DropdownMenuTrigger:P,DropdownMenuContent:F,DropdownMenuItem:R,DropdownMenuCheckboxItem:z,DropdownMenuRadioGroup:ln,DropdownMenuRadioItem:B,DropdownMenuLabel:L,DropdownMenuSeparator:V,DropdownMenuShortcut:H,DropdownMenuGroup:I,DropdownMenuSub:on,DropdownMenuSubTrigger:sn,DropdownMenuSubContent:cn},parameters:{layout:`centered`},tags:[`autodocs`]},Z={render:function(){let[e,t]=(0,pn.useState)(!0),[n,r]=(0,pn.useState)(`webworker`);return(0,K.jsxs)(N,{children:[(0,K.jsx)(P,{render:(0,K.jsxs)(u,{size:`sm`,variant:`outline-secondary`,children:[(0,K.jsx)(`span`,{children:`도면 편집 옵션`}),(0,K.jsx)(h,{className:`size-4 text-neutral-500`})]})}),(0,K.jsxs)(F,{className:`w-56`,align:`start`,children:[(0,K.jsxs)(R,{children:[(0,K.jsx)(Ae,{}),(0,K.jsx)(`span`,{children:`레이어 전체 보기`}),(0,K.jsx)(H,{children:`⌘+V`})]}),(0,K.jsxs)(R,{children:[(0,K.jsx)(De,{}),(0,K.jsx)(`span`,{children:`영역으로 줌`}),(0,K.jsx)(H,{children:`⌘+Z`})]}),(0,K.jsx)(V,{}),(0,K.jsxs)(on,{children:[(0,K.jsxs)(sn,{children:[(0,K.jsx)(je,{}),(0,K.jsx)(`span`,{children:`내보내기`})]}),(0,K.jsxs)(cn,{className:`w-44`,children:[(0,K.jsx)(R,{children:`GeoJSON (.geojson)`}),(0,K.jsx)(R,{children:`Shapefile (.zip)`}),(0,K.jsx)(R,{children:`GeoTIFF (.tif)`})]})]}),(0,K.jsx)(V,{}),(0,K.jsx)(z,{inset:!0,checked:e,onCheckedChange:t,children:`BBOX 경계 표시`}),(0,K.jsx)(V,{}),(0,K.jsx)(L,{children:`렌더링 엔진`}),(0,K.jsxs)(ln,{value:n,onValueChange:r,children:[(0,K.jsx)(B,{inset:!0,value:`canvas`,children:`Canvas 2D`}),(0,K.jsx)(B,{inset:!0,value:`webworker`,children:`WebWorker Offscreen`}),(0,K.jsx)(B,{inset:!0,value:`webgl`,children:`WebGL`})]}),(0,K.jsx)(V,{}),(0,K.jsxs)(R,{variant:`destructive`,children:[(0,K.jsx)(ot,{}),(0,K.jsx)(`span`,{children:`임시 작업 초기화`}),(0,K.jsx)(H,{children:`Delete`})]})]})]})},play:async({canvasElement:e})=>{let t=X(e).getByRole(`button`,{name:/도면 편집 옵션/});await Y.click(t),await q(await J.findByRole(`menu`)).toBeInTheDocument();let n=J.getByRole(`menuitemcheckbox`,{name:/BBOX 경계 표시/});await q(n).toHaveAttribute(`aria-checked`,`true`),await Y.click(n);let r=J.getByRole(`menuitemradio`,{name:/Canvas 2D/});await Y.click(r);let i=J.getByRole(`menuitem`,{name:/내보내기/});await Y.hover(i),await Y.click(i);let a=await J.findByRole(`menuitem`,{name:`GeoJSON (.geojson)`});await Y.click(a)}},Q={render:function(){return(0,K.jsxs)(`div`,{className:`flex items-center gap-2 border border-secondary-border bg-white p-2 shadow-xs`,children:[(0,K.jsxs)(N,{children:[(0,K.jsx)(P,{render:(0,K.jsxs)(u,{size:`sm`,variant:`primary`,children:[(0,K.jsx)(nt,{className:`size-4`}),(0,K.jsx)(`span`,{children:`새 레이어 추가`}),(0,K.jsx)(h,{className:`size-4 opacity-75`})]})}),(0,K.jsxs)(F,{className:`w-52`,align:`start`,children:[(0,K.jsxs)(I,{children:[(0,K.jsx)(L,{children:`벡터 레이어`}),(0,K.jsxs)(R,{children:[(0,K.jsx)(We,{}),(0,K.jsx)(`span`,{children:`포인트 레이어 생성`})]}),(0,K.jsxs)(R,{children:[(0,K.jsx)(et,{}),(0,K.jsx)(`span`,{children:`폴리곤 레이어 생성`})]})]}),(0,K.jsx)(V,{}),(0,K.jsxs)(I,{children:[(0,K.jsx)(L,{children:`외부 데이터 연계`}),(0,K.jsxs)(R,{children:[(0,K.jsx)(qt,{}),(0,K.jsx)(`span`,{children:`WMS / WMTS 서비스`})]}),(0,K.jsxs)(R,{children:[(0,K.jsx)(Wt,{}),(0,K.jsx)(`span`,{children:`CSV/Excel 지오코딩 로드`})]}),(0,K.jsxs)(R,{children:[(0,K.jsx)(Xt,{}),(0,K.jsx)(`span`,{children:`PostGIS 직접 연결`})]})]})]})]}),(0,K.jsxs)(u,{size:`sm`,variant:`outline-secondary`,children:[(0,K.jsx)(T,{className:`size-3.5`}),(0,K.jsx)(`span`,{children:`새로고침`})]})]})},play:async({canvasElement:e})=>{let t=X(e).getByRole(`button`,{name:/새 레이어 추가/});await Y.click(t);let n=await J.findByRole(`menuitem`,{name:/포인트 레이어 생성/});await Y.click(n)}},$={render:function(){return(0,K.jsxs)(N,{children:[(0,K.jsx)(P,{render:(0,K.jsxs)(u,{size:`sm`,variant:`outline-secondary`,children:[(0,K.jsx)(it,{className:`size-4`}),(0,K.jsx)(`span`,{children:`환경 설정`})]})}),(0,K.jsxs)(F,{className:`w-56`,align:`start`,children:[(0,K.jsxs)(R,{children:[(0,K.jsx)(v,{}),(0,K.jsx)(`span`,{children:`편집 활성화`}),(0,K.jsx)(H,{children:`⌘+E`})]}),(0,K.jsxs)(R,{inset:!0,children:[(0,K.jsx)(`span`,{children:`스냅 설정 (Inset)`}),(0,K.jsx)(H,{children:`⌘+S`})]}),(0,K.jsxs)(R,{inset:!0,children:[(0,K.jsx)(`span`,{children:`허용 오차 조정 (Inset)`}),(0,K.jsx)(H,{children:`⌘+T`})]}),(0,K.jsx)(V,{}),(0,K.jsx)(L,{inset:!0,children:`보기 옵션`}),(0,K.jsx)(z,{inset:!0,defaultChecked:!0,children:`눈금자 보이기`}),(0,K.jsx)(z,{inset:!0,defaultChecked:!0,children:`미니맵 표시`})]})]})},play:async({canvasElement:e})=>{let t=X(e).getByRole(`button`,{name:/환경 설정/});await Y.click(t),await q(await J.findByText(`보기 옵션`)).toBeInTheDocument(),await Y.keyboard(`{Escape}`)}},hn=[`Default`,`MapToolbarAddLayer`,`InsetAndShortcuts`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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

        <DropdownMenuContent className="w-56" align="start">
          <DropdownMenuItem>
            <Pencil />
            <span>편집 활성화</span>
            <DropdownMenuShortcut>⌘+E</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem inset>
            <span>스냅 설정 (Inset)</span>
            <DropdownMenuShortcut>⌘+S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem inset>
            <span>허용 오차 조정 (Inset)</span>
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuLabel inset>보기 옵션</DropdownMenuLabel>
          <DropdownMenuCheckboxItem inset defaultChecked>
            눈금자 보이기
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem inset defaultChecked>
            미니맵 표시
          </DropdownMenuCheckboxItem>
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
    await userEvent.keyboard('{Escape}');
  }
}`,...$.parameters?.docs?.source}}}})))()}gn();export{Z as Default,$ as InsetAndShortcuts,Q as MapToolbarAddLayer,hn as __namedExportsOrder,mn as default};