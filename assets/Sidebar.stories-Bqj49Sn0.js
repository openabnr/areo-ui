import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-CfFMW0hA.js";import{d as r,i,l as a,t as o}from"./utils-CXswP1E2.js";import{n as s,t as c}from"./Button-Bc1aY3Nz.js";import{n as l,t as u}from"./createLucideIcon-CxaUvMz3.js";import{n as d,t as f}from"./layers-CJP5yjOu.js";import{n as p,t as m}from"./settings-DZMkT9I4.js";import{n as h,t as g}from"./Checkbox-z5FSu3QU.js";import{n as _,t as v}from"./TextField-CI5KrWeN.js";import{n as y,t as b}from"./DockPanel-lFqQ04co.js";var x,S;function C(){return(C=e((()=>{l(),x={name:`panel-left`,size:24,node:[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M9 3v18`,key:`fh3hqa`}]],aliases:[`sidebar`]},x.node,S=u(x)})))()}var w,T;function E(){return(E=e((()=>{l(),w={name:`panel-right`,size:24,node:[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M15 3v18`,key:`14nvp0`}]]},w.node,T=u(w)})))()}var D,O;function k(){return(k=e((()=>{l(),D={name:`sliders-vertical`,size:24,node:[[`path`,{d:`M10 8h4`,key:`1sr2af`}],[`path`,{d:`M12 21v-9`,key:`17s77i`}],[`path`,{d:`M12 8V3`,key:`13r4qs`}],[`path`,{d:`M17 16h4`,key:`h1uq16`}],[`path`,{d:`M19 12V3`,key:`o1uvq1`}],[`path`,{d:`M19 21v-5`,key:`qua636`}],[`path`,{d:`M3 14h4`,key:`bcjad9`}],[`path`,{d:`M5 10V3`,key:`cb8scm`}],[`path`,{d:`M5 21v-7`,key:`1w1uti`}]],aliases:[`sliders`]},D.node,O=u(D)})))()}function ee(e,t){let n=i(e);if(!n)return t;let r=Number.parseInt(n,10);return Number.isFinite(r)&&r>0?r:t}function A(e){if(!e)return null;try{let t=JSON.parse(e);if(typeof t==`object`&&t&&`left`in t&&`top`in t&&`width`in t&&`height`in t&&typeof t.left==`number`&&typeof t.top==`number`&&typeof t.width==`number`&&typeof t.height==`number`)return{left:t.left,top:t.top,width:t.width,height:t.height}}catch{}return null}function j(e){if(!e)return{};try{let t=JSON.parse(e);if(typeof t!=`object`||!t||Array.isArray(t))return{};let n={};for(let[e,r]of Object.entries(t))(r===`on`||r===`off`)&&(n[e]=r);return n}catch{return{}}}function M(e=`left`){let t=(0,L.use)(V);if(!t)throw Error(`useSidebar must be used within a SidebarProvider.`);return(0,L.useMemo)(()=>{let n=(n,r)=>{typeof n==`string`?r!==void 0&&t.setOpen(n,r):t.setOpen(e,n)};return{...t,open:t.isOpen(e),state:t.getState(e),isPoppedOut:t.isPoppedOut(e),isAnimating:t.isAnimating(e),animating:t.isAnimating(e),popoutFeatures:t.getPopoutFeatures(e),toggle:()=>t.toggleSidebar(e),toggleSidebar:(n=e)=>t.toggleSidebar(n),setOpen:n,getActiveMenu:(n=e)=>t.getActiveMenu(n),setActiveMenu:(e,n)=>{t.setActiveMenu(e,n)},getToggleMenuState:(e,n)=>t.getToggleMenuState(e,n),setToggleMenuState:(e,n,r)=>{t.setToggleMenuState(e,n,r)},popout:(n=e)=>t.popout(n),popin:(n=e)=>t.popin(n),onAnimationEnd:n=>t.onAnimationEnd(e,n),onWindowClose:n=>t.onWindowClose(e,n)}},[t,e])}function te(){let e=(0,L.use)(H);if(!e)throw Error(`useSidebarInternal must be used within a SidebarProvider.`);return e}function N({defaultLeftOpen:e=!1,defaultRightOpen:t=!1,cookiePrefix:n=z,children:a}){let[o,s]=(0,L.useState)(()=>{let r=i(`${n}_left_state`),a=i(`${n}_right_state`),o=i(`${n}_left_popped`)===`true`,s=i(`${n}_right_popped`)===`true`,c=A(i(`${n}_left_popout_features`)),l=A(i(`${n}_right_popout_features`));return{left:{open:r===null?e:r===`true`,isPoppedOut:o,isAnimating:!1,popoutFeatures:c},right:{open:a===null?t:a===`true`,isPoppedOut:s,isAnimating:!1,popoutFeatures:l}}}),[c,l]=(0,L.useState)(()=>({left:i(`${n}_left_menu`),right:i(`${n}_right_menu`)})),[u,d]=(0,L.useState)(()=>({left:j(i(`${n}_left_toggle_menu`)),right:j(i(`${n}_right_toggle_menu`))})),f=(0,L.useRef)(o),p=(0,L.useRef)(u);(0,L.useEffect)(()=>{f.current=o},[o]),(0,L.useEffect)(()=>{p.current=u},[u]);let m=(0,L.useRef)({left:new Set,right:new Set}),h=(0,L.useRef)({left:new Set,right:new Set}),g=(0,L.useRef)({left:null,right:null}),_=(0,L.useCallback)((e,t)=>{let i=f.current[e].open,a=typeof t==`function`?t(i):t;a!==i&&(f.current={...f.current,[e]:{...f.current[e],open:a}},r(`${n}_${e}_state`,a,B),s(t=>({...t,[e]:{...t[e],open:a}})))},[n]),v=(0,L.useCallback)(e=>{_(e,e=>!e)},[_]),y=(0,L.useCallback)((e,t)=>{r(`${n}_${e}_popout_features`,t?JSON.stringify(t):null,B),s(n=>({...n,[e]:{...n[e],popoutFeatures:t}}))},[n]),b=(0,L.useCallback)((e,t)=>{r(`${n}_${e}_popped`,t?!0:null,B),t||r(`${n}_${e}_popout_features`,null,B),s(n=>({...n,[e]:{...n[e],isPoppedOut:t,popoutFeatures:t?n[e].popoutFeatures:null}}))},[n]),x=(0,L.useCallback)(e=>{s(t=>({...t,[e]:{...t[e],isAnimating:!0}}))},[]),S=(0,L.useCallback)((e,t)=>{s(t=>({...t,[e]:{...t[e],isAnimating:!1}}));for(let n of m.current[e])n(t)},[]),C=(0,L.useCallback)((e,t)=>{for(let n of h.current[e])n(t)},[]),w=(0,L.useCallback)((e,t)=>(m.current[e].add(t),()=>{m.current[e].delete(t)}),[]),T=(0,L.useCallback)((e,t)=>(h.current[e].add(t),()=>{h.current[e].delete(t)}),[]),E=(0,L.useCallback)((e,t)=>{g.current[e]=t},[]),D=(0,L.useCallback)((e=`left`)=>{g.current[e]?.()},[]),O=(0,L.useCallback)((e=`left`)=>{b(e,!1)},[b]),k=(0,L.useCallback)((e,t)=>{r(`${n}_${e}_menu`,t,B),l(n=>({...n,[e]:t}))},[n]),ee=(0,L.useCallback)((e,t,i)=>{let a=p.current[e];if(a[t]===i)return;let o={...a,[t]:i};p.current={...p.current,[e]:o},r(`${n}_${e}_toggle_menu`,JSON.stringify(o),B),d(n=>({...n,[e]:{...n[e],[t]:i}}))},[n]),M=(0,L.useMemo)(()=>({isOpen:e=>o[e].open,getState:e=>o[e].open?`expanded`:`collapsed`,isPoppedOut:e=>o[e].isPoppedOut,isAnimating:e=>o[e].isAnimating,getPopoutFeatures:e=>o[e].popoutFeatures,setOpen:_,toggleSidebar:v,setIsPoppedOut:b,popout:D,popin:O,getActiveMenu:e=>c[e],setActiveMenu:k,getToggleMenuState:(e,t)=>u[e][t]??`off`,setToggleMenuState:ee,onAnimationEnd:w,onWindowClose:T,open:o.left.open,state:o.left.open?`expanded`:`collapsed`,animating:o.left.isAnimating}),[_,v,b,D,O,k,ee,w,T,o,c,u]),te=(0,L.useMemo)(()=>({cookiePrefix:n,registerPopoutTrigger:E,triggerPopout:D,notifyAnimationStart:x,notifyAnimationEnd:S,notifyWindowClose:C,savePopoutFeatures:y}),[n,E,D,x,S,C,y]);return(0,R.jsx)(V,{value:M,children:(0,R.jsx)(H,{value:te,children:a})})}function ne(e,t,n,r,i,a){return e?!t||n?{mounted:!0,expanded:!0,animating:!1}:{mounted:!0,expanded:a,animating:a}:!i&&!a?null:n||!t?{mounted:!1,expanded:!1,animating:!1}:{mounted:r,expanded:!1,animating:!0}}function re(e){return e.target===e.currentTarget&&e.propertyName===`width`}function P(e){e.current!==null&&(cancelAnimationFrame(e.current),e.current=null)}function ie({open:e,animated:t,isPoppedOut:n,isExpanded:r,isAnimating:i,rafIdRef:a,onStart:o,onFinish:s,onForceReset:c}){let l=(0,L.useRef)(n),u=(0,L.useRef)(e);return(0,L.useEffect)(()=>{(!t||n)&&!i&&u.current!==e&&(u.current=e,s(e))},[t,n,i,e,s]),(0,L.useEffect)(()=>{let t=l.current&&!n&&!e;l.current=n,t&&(P(a),u.current=!1,c())},[n,e,a,c]),(0,L.useEffect)(()=>{!e&&!r&&!n&&t&&i&&o?.()},[e,r,n,t,i,o]),(0,L.useEffect)(()=>{if(!i)return;let t=globalThis.setTimeout(()=>{u.current=e,s(e)},360);return()=>{globalThis.clearTimeout(t)}},[i,e,s]),(0,L.useEffect)(()=>()=>{P(a)},[a]),u}function ae(e,t,n,r,i){let[a,o]=(0,L.useState)(e),[s,c]=(0,L.useState)(e),[l,u]=(0,L.useState)(!1),[d,f]=(0,L.useState)(e),p=(0,L.useRef)(null);if(e!==d){f(e);let r=ne(e,t,n,a,s,l);r&&(o(r.mounted),c(r.expanded),u(r.animating))}let m=(0,L.useCallback)(e=>{u(!1),e||o(!1),i?.(e)},[i]),h=ie({open:e,animated:t,isPoppedOut:n,isExpanded:s,isAnimating:l,rafIdRef:p,onStart:r,onFinish:m,onForceReset:(0,L.useCallback)(()=>{o(!1),c(!1),u(!1),i?.(!1)},[i])}),g=(0,L.useCallback)(e=>{e.getBoundingClientRect(),u(!0),r?.(),P(p),p.current=requestAnimationFrame(()=>{c(!0),p.current=null})},[r]);return{isMounted:a,isExpanded:s,isAnimating:l,wrapperRef:(0,L.useCallback)(r=>{t&&!n&&r&&e&&!s&&!l&&g(r)},[t,n,e,s,l,g]),handleTransitionEnd:t=>{re(t)&&(h.current=e,m(e))}}}function F({side:e=`left`,children:t,className:n,style:i,defaultWidth:a=320,minWidth:s=200,maxWidth:c=600,resizable:l=!0,animated:u=!0,allowPopout:d=!0,windowTitle:f=`${e.toUpperCase()} Sidebar Window`,popoutPlaceholder:p,onPopoutWindowClose:m}){let{open:h,isPoppedOut:g,setIsPoppedOut:_,popoutFeatures:v}=M(e),{cookiePrefix:y,registerPopoutTrigger:x,notifyAnimationStart:S,notifyAnimationEnd:C,notifyWindowClose:w,savePopoutFeatures:T}=te(),E=`${y}_${e}_width`,[D,O]=(0,L.useState)(()=>ee(E,a)),[k,A]=(0,L.useState)(!1),j=(0,L.useRef)(null),N=(0,L.useCallback)(()=>{S(e)},[S,e]),ne=(0,L.useCallback)(t=>{C(e,t)},[C,e]),re=(0,L.useCallback)(t=>{w(e,t),m?.(t)},[w,e,m]),P=(0,L.useCallback)(t=>{T(e,t)},[T,e]),{isMounted:ie,isExpanded:F,isAnimating:I,wrapperRef:z,handleTransitionEnd:V}=ae(h,u,g,N,ne),H=(0,L.useCallback)(e=>{j.current=e,z(e)},[z]),U=()=>{A(!0)},oe=e=>{j.current&&(j.current.style.width=`${e}px`)},se=e=>{A(!1),O(e),j.current&&(j.current.style.width=`${e}px`),r(E,e,B)},ce=(0,L.useCallback)(t=>{_(e,t)},[_,e]),le=(0,L.useCallback)(t=>{x(e,t)},[x,e]);if(!ie&&!g)return null;let ue=typeof D==`number`?`${D}px`:D,de=h&&F,fe=e===`left`,W=!g&&de,G=fe?`border-r border-widget-body-border`:`border-l border-widget-body-border`,pe=fe?{right:!0}:{left:!0};return(0,R.jsx)(`div`,{ref:H,onTransitionEnd:V,className:o(`relative box-border h-full shrink-0 bg-widget-body-background`,W?G:`pointer-events-none border-0`,u&&I||!de?`overflow-hidden`:`overflow-visible`,u&&I&&!k&&`transition-[width,border-color] duration-300 ease-in-out`),style:{width:W?ue:0},children:(0,R.jsx)(`div`,{className:`box-border size-full`,children:(0,R.jsx)(b,{className:n,style:i,defaultWidth:D,defaultHeight:`100%`,minWidth:s,maxWidth:c,resizable:l&&W,resizeDirections:pe,allowPopout:d,windowTitle:f,isPoppedOut:g,initialPopoutFeatures:v,onPopoutFeaturesChange:P,onPopoutChange:ce,onWindowClose:re,onResizeStart:U,onResize:oe,onResizeStop:se,registerPopoutTrigger:le,popoutPlaceholder:p,showPlaceholderOnPopout:!1,children:t})})})}function I({side:e=`left`,variant:t=`ghost`,size:n=`sm`,className:r,children:i,...a}){let{toggle:s,open:l}=M(e),u=e===`left`?S:T;return(0,R.jsx)(c,{variant:t,size:n,iconOnly:!0,onClick:s,"aria-expanded":l,"aria-label":`${e===`left`?`왼쪽`:`오른쪽`} 사이드바 ${l?`접기`:`펼치기`}`,className:o(`size-6 p-0`,r),...a,children:i??(0,R.jsx)(u,{className:`size-3.5`})})}var L,R,z,B,V,H;function U(){return(U=e((()=>{L=t(),C(),E(),a(),s(),y(),R=n(),z=`sidebar`,B=604800,V=(0,L.createContext)(null),H=(0,L.createContext)(null),N.__docgenInfo={description:``,methods:[],displayName:`SidebarProvider`,props:{defaultLeftOpen:{defaultValue:{value:`false`,computed:!1},required:!1},defaultRightOpen:{defaultValue:{value:`false`,computed:!1},required:!1},cookiePrefix:{defaultValue:{value:`'sidebar'`,computed:!1},required:!1}}},F.__docgenInfo={description:``,methods:[],displayName:`SidebarContent`,props:{side:{defaultValue:{value:`'left'`,computed:!1},required:!1},defaultWidth:{defaultValue:{value:`320`,computed:!1},required:!1},minWidth:{defaultValue:{value:`200`,computed:!1},required:!1},maxWidth:{defaultValue:{value:`600`,computed:!1},required:!1},resizable:{defaultValue:{value:`true`,computed:!1},required:!1},animated:{defaultValue:{value:`true`,computed:!1},required:!1},allowPopout:{defaultValue:{value:`true`,computed:!1},required:!1}}},I.__docgenInfo={description:``,methods:[],displayName:`SidebarTrigger`,props:{side:{defaultValue:{value:`'left'`,computed:!1},required:!1},variant:{defaultValue:{value:`'ghost'`,computed:!1},required:!1},size:{defaultValue:{value:`'sm'`,computed:!1},required:!1}}}})))()}function oe(e=me){for(let t of[`left_state`,`right_state`,`left_width`,`right_width`,`left_popped`,`right_popped`,`left_popout_features`,`right_popout_features`])r(`${e}_${t}`,null,0)}function se(){let e=M(`left`);return(0,W.useEffect)(()=>{let t=e.onAnimationEnd(()=>{}),n=e.onWindowClose(()=>{});return()=>{t(),n()}},[e]),null}function ce(){let e=M(`left`),[t,n]=(0,W.useState)(!0);return(0,G.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 border-b border-secondary-border bg-white px-3 py-1.5`,children:[t&&(0,G.jsx)(se,{}),(0,G.jsxs)(c,{size:`sm`,variant:e.open?`primary`:`secondary`,onClick:e.toggle,children:[`사이드바 `,e.open?`접기`:`펼치기`]}),(0,G.jsx)(c,{size:`sm`,variant:`outline-secondary`,onClick:()=>{e.setOpen(!1),e.setOpen(`right`,!0),e.toggleSidebar(),e.setActiveMenu(`left`,`layers`),e.setToggleMenuState(`left`,`snap`,`on`),e.getActiveMenu(),e.getToggleMenuState(`left`,`snap`)},children:`상태 제어 테스트`}),(0,G.jsx)(c,{size:`sm`,variant:`outline-secondary`,onClick:()=>{e.popout()},children:`팝아웃 트리거`}),(0,G.jsx)(c,{size:`sm`,variant:`outline-secondary`,onClick:()=>{e.setIsPoppedOut(`left`,!0),e.setOpen(`left`,!1)},children:`팝아웃 중 닫기`}),(0,G.jsx)(c,{size:`sm`,variant:`outline-secondary`,onClick:()=>{e.popin(`left`),n(!1)},children:`팝인 복귀 및 구독해제`}),(0,G.jsxs)(`span`,{className:`font-mono text-2xs text-muted-foreground`,children:[`Current State: `,e.state]})]})}function le(){return M(),null}function ue(){return(0,G.jsx)(F,{side:`left`,children:(0,G.jsx)(`div`,{children:`outside`})})}function de(){let[e,t]=(0,W.useState)(!1),[n,r]=(0,W.useState)(!1);return(0,G.jsxs)(`div`,{className:`flex gap-2`,children:[(0,G.jsx)(c,{size:`sm`,onClick:()=>t(!0),children:`훅 에러 트리거`}),(0,G.jsx)(c,{size:`sm`,onClick:()=>r(!0),children:`컨텐츠 에러 트리거`}),e&&(0,G.jsx)(ge,{label:`hook-error`,children:(0,G.jsx)(le,{})}),n&&(0,G.jsx)(ge,{label:`content-error`,children:(0,G.jsx)(ue,{})})]})}function fe(){let[e,t]=(0,W.useState)(!0),{setOpen:n}=M(`left`);return(0,G.jsxs)(`div`,{children:[(0,G.jsx)(c,{size:`sm`,onClick:()=>n(!0),children:`열기`}),(0,G.jsx)(c,{size:`sm`,onClick:()=>t(!1),children:`언마운트`}),e&&(0,G.jsx)(F,{side:`left`,animated:!0,children:(0,G.jsx)(`div`,{children:`content`})})]})}var W,G,pe,K,q,J,me,he,Y,X,Z,Q,ge,$,_e;function ve(){return(ve=e((()=>{W=t(),d(),p(),k(),a(),s(),h(),U(),_(),G=n(),{expect:pe,fireEvent:K,userEvent:q,within:J}=__STORYBOOK_MODULE_TEST__,me=`areo_sidebar_demo`,he={title:`Layout/Sidebar`,component:F,parameters:{layout:`fullscreen`}},Y={render:()=>(0,G.jsx)(N,{defaultLeftOpen:!0,cookiePrefix:`areo_sidebar_demo`,children:(0,G.jsxs)(`div`,{className:`bg-background flex h-screen w-full flex-col overflow-hidden`,children:[(0,G.jsxs)(`header`,{className:`flex h-10 shrink-0 items-center justify-between border-b border-secondary-border bg-white px-3 select-none`,children:[(0,G.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,G.jsx)(I,{children:(0,G.jsx)(f,{className:`size-3.5`})}),(0,G.jsx)(`span`,{className:`font-sans text-xs font-semibold text-secondary-foreground`,children:`GIS Workspace (Single Sidebar)`})]}),(0,G.jsx)(`span`,{className:`font-mono text-2xs text-muted-foreground`,children:`deimos layout match`})]}),(0,G.jsxs)(`div`,{className:`relative flex flex-1 overflow-hidden`,children:[(0,G.jsx)(F,{side:`left`,defaultWidth:300,minWidth:200,maxWidth:500,windowTitle:`레이어 관리자 - 독립 창`,onPopoutWindowClose:()=>{},children:(0,G.jsxs)(`div`,{className:`bg-background box-border h-full w-full min-w-0 p-3 font-sans text-xs`,children:[(0,G.jsxs)(`div`,{className:`mb-3 flex items-center justify-between border-b border-secondary-border pb-2`,children:[(0,G.jsxs)(`div`,{className:`flex items-center gap-1.5 font-semibold text-secondary-foreground`,children:[(0,G.jsx)(f,{className:`size-3.5 text-primary`}),(0,G.jsx)(`span`,{children:`레이어 트리`})]}),(0,G.jsx)(c,{size:`sm`,variant:`ghost`,className:`h-5 px-1.5 text-2xs`,children:`새 레이어`})]}),(0,G.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,G.jsx)(v,{size:`sm`,placeholder:`레이어 필터링...`}),(0,G.jsxs)(`div`,{className:`mt-2 flex flex-col gap-1.5`,children:[(0,G.jsx)(g,{size:`sm`,defaultChecked:!0,children:`시도 행정경계 (EPSG:5179)`}),(0,G.jsx)(g,{size:`sm`,defaultChecked:!0,children:`연속지적도 폴리곤`}),(0,G.jsx)(g,{size:`sm`,defaultChecked:!1,children:`강우 관측소 포인트 (TCM_COU)`})]})]})]})}),(0,G.jsx)(`main`,{className:`relative flex flex-1 items-center justify-center bg-surface-muted/20 p-6 text-center`,children:(0,G.jsx)(`div`,{className:`max-w-md border border-dashed border-secondary-border bg-white/70 p-6 shadow-xs`,children:(0,G.jsx)(`h3`,{className:`font-sans text-sm font-bold text-secondary-foreground`,children:`Map Viewport Area`})})})]})]})})},X={render:()=>(oe(`areo_sidebar_test`),(0,G.jsx)(N,{defaultLeftOpen:!0,cookiePrefix:`areo_sidebar_test`,children:(0,G.jsxs)(`div`,{className:`bg-background flex h-screen w-full flex-col overflow-hidden`,children:[(0,G.jsxs)(`header`,{className:`flex h-10 shrink-0 items-center justify-between border-b border-secondary-border bg-white px-3 select-none`,children:[(0,G.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,G.jsx)(I,{children:(0,G.jsx)(f,{className:`size-3.5`})}),(0,G.jsx)(`span`,{className:`font-sans text-xs font-semibold text-secondary-foreground`,children:`GIS Workspace (Single Sidebar)`})]}),(0,G.jsx)(`span`,{className:`font-mono text-2xs text-muted-foreground`,children:`deimos layout match`})]}),(0,G.jsxs)(`div`,{className:`relative flex flex-1 overflow-hidden`,children:[(0,G.jsx)(F,{side:`left`,defaultWidth:300,minWidth:200,maxWidth:500,windowTitle:`레이어 관리자 - 독립 창`,onPopoutWindowClose:()=>{},children:(0,G.jsxs)(`div`,{className:`bg-background box-border h-full w-full min-w-0 p-3 font-sans text-xs`,children:[(0,G.jsxs)(`div`,{className:`mb-3 flex items-center justify-between border-b border-secondary-border pb-2`,children:[(0,G.jsxs)(`div`,{className:`flex items-center gap-1.5 font-semibold text-secondary-foreground`,children:[(0,G.jsx)(f,{className:`size-3.5 text-primary`}),(0,G.jsx)(`span`,{children:`레이어 트리`})]}),(0,G.jsx)(c,{size:`sm`,variant:`ghost`,className:`h-5 px-1.5 text-2xs`,children:`새 레이어`})]}),(0,G.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,G.jsx)(v,{size:`sm`,placeholder:`레이어 필터링...`}),(0,G.jsxs)(`div`,{className:`mt-2 flex flex-col gap-1.5`,children:[(0,G.jsx)(g,{size:`sm`,defaultChecked:!0,children:`시도 행정경계 (EPSG:5179)`}),(0,G.jsx)(g,{size:`sm`,defaultChecked:!0,children:`연속지적도 폴리곤`}),(0,G.jsx)(g,{size:`sm`,defaultChecked:!1,children:`강우 관측소 포인트 (TCM_COU)`})]})]})]})}),(0,G.jsx)(`main`,{className:`relative flex flex-1 items-center justify-center bg-surface-muted/20 p-6 text-center`,children:(0,G.jsx)(`div`,{className:`max-w-md border border-dashed border-secondary-border bg-white/70 p-6 shadow-xs`,children:(0,G.jsx)(`h3`,{className:`font-sans text-sm font-bold text-secondary-foreground`,children:`Map Viewport Area`})})})]})]})})),play:async({canvasElement:e})=>{let t=J(e),n=t.getByRole(`button`,{name:`right resize handle`}),r=n.closest(`.bg-widget-body-background`),i=n.getBoundingClientRect();await K.mouseDown(n,{clientX:i.left}),await K.mouseMove(document,{clientX:i.left+40}),await K.mouseUp(document);let a=t.getByRole(`button`,{name:`왼쪽 사이드바 접기`});await q.click(a),r&&(r.dispatchEvent(new TransitionEvent(`transitionend`,{propertyName:`opacity`,bubbles:!0})),r.dispatchEvent(new TransitionEvent(`transitionend`,{propertyName:`width`,bubbles:!0})));let o=await t.findByRole(`button`,{name:`왼쪽 사이드바 펼치기`});await q.click(o),await new Promise(e=>setTimeout(e,380));let s=await t.findByRole(`button`,{name:`왼쪽 사이드바 접기`});await q.click(s),await new Promise(e=>setTimeout(e,380)),await pe(t.getByRole(`button`,{name:`왼쪽 사이드바 펼치기`})).toBeInTheDocument()}},Z={render:()=>(0,G.jsx)(N,{defaultLeftOpen:!0,defaultRightOpen:!0,cookiePrefix:`areo_sidebar_dual_demo`,children:(0,G.jsxs)(`div`,{className:`bg-background flex h-screen w-full flex-col overflow-hidden`,children:[(0,G.jsxs)(`header`,{className:`flex h-10 shrink-0 items-center justify-between border-b border-secondary-border bg-surface-muted/40 px-3 select-none`,children:[(0,G.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,G.jsx)(I,{side:`left`}),(0,G.jsx)(`span`,{className:`font-sans text-xs font-semibold text-secondary-foreground`,children:`벡터 데이터 에디터`})]}),(0,G.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,G.jsx)(`span`,{className:`text-2xs text-muted-foreground`,children:`속성 패널`}),(0,G.jsx)(I,{side:`right`})]})]}),(0,G.jsxs)(`div`,{className:`relative flex flex-1 overflow-hidden`,children:[(0,G.jsx)(F,{side:`left`,defaultWidth:280,minWidth:200,maxWidth:450,windowTitle:`좌측 레이어 탐색기`,children:(0,G.jsx)(`div`,{className:`bg-background box-border h-full w-full min-w-0 p-3 font-sans text-xs`,children:(0,G.jsxs)(`div`,{className:`mb-2 flex items-center gap-1.5 font-semibold text-secondary-foreground`,children:[(0,G.jsx)(O,{className:`size-3.5 text-primary`}),(0,G.jsx)(`span`,{children:`탐색기 (Left)`})]})})}),(0,G.jsx)(`main`,{className:`flex flex-1 flex-col items-center justify-center bg-surface-muted/20 p-6 text-center`,children:(0,G.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`듀얼 워크스페이스`})}),(0,G.jsx)(F,{side:`right`,defaultWidth:320,minWidth:220,maxWidth:500,animated:!1,windowTitle:`우측 속성 편집 창`,children:(0,G.jsx)(`div`,{className:`bg-background box-border h-full w-full min-w-0 p-3 font-sans text-xs`,children:(0,G.jsxs)(`div`,{className:`mb-2 flex items-center gap-1.5 font-semibold text-secondary-foreground`,children:[(0,G.jsx)(m,{className:`size-3.5 text-primary`}),(0,G.jsx)(`span`,{children:`속성 및 스타일 (Right)`})]})})})]})]})}),play:async({canvasElement:e})=>{let t=J(e),n=t.getByRole(`button`,{name:`오른쪽 사이드바 접기`});await q.click(n),await q.click(await t.findByRole(`button`,{name:`오른쪽 사이드바 펼치기`}))}},Q={render:()=>(document.cookie=`areo_sidebar_hook_demo_left_menu=%E0%A4%A; path=/`,document.cookie=`areo_sidebar_hook_demo_left_width=290; path=/`,document.cookie=`areo_sidebar_hook_demo_right_width=invalid_num; path=/`,document.cookie=`areo_sidebar_hook_demo_left_popout_features=${encodeURIComponent(JSON.stringify({left:100,top:100,width:400,height:500}))}; path=/`,document.cookie=`areo_sidebar_hook_demo_right_popout_features=invalid_json; path=/`,document.cookie=`areo_sidebar_hook_demo_left_toggle_menu=${encodeURIComponent(JSON.stringify({grid:`on`,invalid:123}))}; path=/`,document.cookie=`areo_sidebar_hook_demo_right_toggle_menu=${encodeURIComponent(JSON.stringify([]))}; path=/`,(0,G.jsx)(N,{defaultLeftOpen:!0,cookiePrefix:`areo_sidebar_hook_demo`,children:(0,G.jsxs)(`div`,{className:`bg-background flex h-screen w-full flex-col overflow-hidden`,children:[(0,G.jsx)(ce,{}),(0,G.jsxs)(`div`,{className:`relative flex flex-1 overflow-hidden`,children:[(0,G.jsx)(F,{side:`left`,defaultWidth:280,children:(0,G.jsx)(`div`,{className:`bg-background box-border h-full w-full min-w-0 p-3 font-sans text-xs`,children:(0,G.jsx)(`p`,{className:`font-semibold text-secondary-foreground`,children:`사이드바 본문`})})}),(0,G.jsx)(F,{side:`right`,defaultWidth:280,children:(0,G.jsx)(`div`,{className:`bg-background box-border h-full w-full min-w-0 p-3 font-sans text-xs`,children:(0,G.jsx)(`p`,{className:`font-semibold text-secondary-foreground`,children:`우측 사이드바 본문`})})}),(0,G.jsx)(`main`,{className:`flex flex-1 items-center justify-center bg-surface-muted/20`,children:(0,G.jsx)(`span`,{className:`font-sans text-xs text-muted-foreground`,children:`메인 뷰포트`})})]})]})})),play:async({canvasElement:e})=>{let t=J(e);await q.click(t.getByRole(`button`,{name:`상태 제어 테스트`})),await q.click(t.getByRole(`button`,{name:`팝아웃 트리거`})),await q.click(t.getByRole(`button`,{name:`팝아웃 중 닫기`})),await q.click(t.getByRole(`button`,{name:`팝인 복귀 및 구독해제`}))}},ge=class extends W.Component{state={error:null};static getDerivedStateFromError(e){return{error:e.message}}render(){return this.state.error?(0,G.jsx)(`div`,{"data-testid":this.props.label,children:this.state.error}):this.props.children}},$={render:()=>(0,G.jsxs)(`div`,{className:`p-4`,children:[(0,G.jsx)(de,{}),(0,G.jsx)(N,{defaultLeftOpen:!1,cookiePrefix:`areo_edge_demo`,children:(0,G.jsx)(fe,{})})]}),play:async({canvasElement:e})=>{let t=J(e),n=console.error;console.error=()=>{};try{await q.click(t.getByRole(`button`,{name:`훅 에러 트리거`})),await t.findByTestId(`hook-error`),await q.click(t.getByRole(`button`,{name:`컨텐츠 에러 트리거`})),await t.findByTestId(`content-error`)}finally{console.error=n}await q.click(t.getByRole(`button`,{name:`열기`})),await q.click(t.getByRole(`button`,{name:`언마운트`}))}},_e=[`Default`,`InteractionTest`,`DualSidebar`,`HookController`,`EdgeCases`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <SidebarProvider defaultLeftOpen={true} cookiePrefix="areo_sidebar_demo">
        <div className="bg-background flex h-screen w-full flex-col overflow-hidden">
          <header className="flex h-10 shrink-0 items-center justify-between border-b border-secondary-border bg-white px-3 select-none">
            <div className="flex items-center gap-2">
              <SidebarTrigger>
                <LayersIcon className="size-3.5" />
              </SidebarTrigger>
              <span className="font-sans text-xs font-semibold text-secondary-foreground">
                GIS Workspace (Single Sidebar)
              </span>
            </div>
            <span className="font-mono text-2xs text-muted-foreground">
              deimos layout match
            </span>
          </header>

          <div className="relative flex flex-1 overflow-hidden">
            <SidebarContent side="left" defaultWidth={300} minWidth={200} maxWidth={500} windowTitle="레이어 관리자 - 독립 창" onPopoutWindowClose={() => {}}>
              <div className="bg-background box-border h-full w-full min-w-0 p-3 font-sans text-xs">
                <div className="mb-3 flex items-center justify-between border-b border-secondary-border pb-2">
                  <div className="flex items-center gap-1.5 font-semibold text-secondary-foreground">
                    <LayersIcon className="size-3.5 text-primary" />
                    <span>레이어 트리</span>
                  </div>
                  <Button size="sm" variant="ghost" className="h-5 px-1.5 text-2xs">
                    새 레이어
                  </Button>
                </div>

                <div className="flex flex-col gap-2">
                  <TextField size="sm" placeholder="레이어 필터링..." />
                  <div className="mt-2 flex flex-col gap-1.5">
                    <Checkbox size="sm" defaultChecked>
                      시도 행정경계 (EPSG:5179)
                    </Checkbox>
                    <Checkbox size="sm" defaultChecked>
                      연속지적도 폴리곤
                    </Checkbox>
                    <Checkbox size="sm" defaultChecked={false}>
                      강우 관측소 포인트 (TCM_COU)
                    </Checkbox>
                  </div>
                </div>
              </div>
            </SidebarContent>

            <main className="relative flex flex-1 items-center justify-center bg-surface-muted/20 p-6 text-center">
              <div className="max-w-md border border-dashed border-secondary-border bg-white/70 p-6 shadow-xs">
                <h3 className="font-sans text-sm font-bold text-secondary-foreground">
                  Map Viewport Area
                </h3>
              </div>
            </main>
          </div>
        </div>
      </SidebarProvider>;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    clearSidebarDemoCookies('areo_sidebar_test');
    return <SidebarProvider defaultLeftOpen={true} cookiePrefix="areo_sidebar_test">
        <div className="bg-background flex h-screen w-full flex-col overflow-hidden">
          <header className="flex h-10 shrink-0 items-center justify-between border-b border-secondary-border bg-white px-3 select-none">
            <div className="flex items-center gap-2">
              <SidebarTrigger>
                <LayersIcon className="size-3.5" />
              </SidebarTrigger>
              <span className="font-sans text-xs font-semibold text-secondary-foreground">
                GIS Workspace (Single Sidebar)
              </span>
            </div>
            <span className="font-mono text-2xs text-muted-foreground">
              deimos layout match
            </span>
          </header>

          <div className="relative flex flex-1 overflow-hidden">
            <SidebarContent side="left" defaultWidth={300} minWidth={200} maxWidth={500} windowTitle="레이어 관리자 - 독립 창" onPopoutWindowClose={() => {}}>
              <div className="bg-background box-border h-full w-full min-w-0 p-3 font-sans text-xs">
                <div className="mb-3 flex items-center justify-between border-b border-secondary-border pb-2">
                  <div className="flex items-center gap-1.5 font-semibold text-secondary-foreground">
                    <LayersIcon className="size-3.5 text-primary" />
                    <span>레이어 트리</span>
                  </div>
                  <Button size="sm" variant="ghost" className="h-5 px-1.5 text-2xs">
                    새 레이어
                  </Button>
                </div>

                <div className="flex flex-col gap-2">
                  <TextField size="sm" placeholder="레이어 필터링..." />
                  <div className="mt-2 flex flex-col gap-1.5">
                    <Checkbox size="sm" defaultChecked>
                      시도 행정경계 (EPSG:5179)
                    </Checkbox>
                    <Checkbox size="sm" defaultChecked>
                      연속지적도 폴리곤
                    </Checkbox>
                    <Checkbox size="sm" defaultChecked={false}>
                      강우 관측소 포인트 (TCM_COU)
                    </Checkbox>
                  </div>
                </div>
              </div>
            </SidebarContent>

            <main className="relative flex flex-1 items-center justify-center bg-surface-muted/20 p-6 text-center">
              <div className="max-w-md border border-dashed border-secondary-border bg-white/70 p-6 shadow-xs">
                <h3 className="font-sans text-sm font-bold text-secondary-foreground">
                  Map Viewport Area
                </h3>
              </div>
            </main>
          </div>
        </div>
      </SidebarProvider>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const resizeHandle = canvas.getByRole('button', {
      name: 'right resize handle'
    });
    const sidebarWrapper = resizeHandle.closest('.bg-widget-body-background');
    const rect = resizeHandle.getBoundingClientRect();
    await fireEvent.mouseDown(resizeHandle, {
      clientX: rect.left
    });
    await fireEvent.mouseMove(document, {
      clientX: rect.left + 40
    });
    await fireEvent.mouseUp(document);
    const collapseBtn = canvas.getByRole('button', {
      name: '왼쪽 사이드바 접기'
    });
    await userEvent.click(collapseBtn);
    if (sidebarWrapper) {
      sidebarWrapper.dispatchEvent(new TransitionEvent('transitionend', {
        propertyName: 'opacity',
        bubbles: true
      }));
      sidebarWrapper.dispatchEvent(new TransitionEvent('transitionend', {
        propertyName: 'width',
        bubbles: true
      }));
    }
    const expandBtn = await canvas.findByRole('button', {
      name: '왼쪽 사이드바 펼치기'
    });
    await userEvent.click(expandBtn);
    await new Promise(resolve => setTimeout(resolve, 380));
    const collapseAgainBtn = await canvas.findByRole('button', {
      name: '왼쪽 사이드바 접기'
    });
    await userEvent.click(collapseAgainBtn);
    await new Promise(resolve => setTimeout(resolve, 380));
    await expect(canvas.getByRole('button', {
      name: '왼쪽 사이드바 펼치기'
    })).toBeInTheDocument();
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <SidebarProvider defaultLeftOpen={true} defaultRightOpen={true} cookiePrefix="areo_sidebar_dual_demo">
        <div className="bg-background flex h-screen w-full flex-col overflow-hidden">
          <header className="flex h-10 shrink-0 items-center justify-between border-b border-secondary-border bg-surface-muted/40 px-3 select-none">
            <div className="flex items-center gap-2">
              <SidebarTrigger side="left" />
              <span className="font-sans text-xs font-semibold text-secondary-foreground">
                벡터 데이터 에디터
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-2xs text-muted-foreground">속성 패널</span>
              <SidebarTrigger side="right" />
            </div>
          </header>

          <div className="relative flex flex-1 overflow-hidden">
            <SidebarContent side="left" defaultWidth={280} minWidth={200} maxWidth={450} windowTitle="좌측 레이어 탐색기">
              <div className="bg-background box-border h-full w-full min-w-0 p-3 font-sans text-xs">
                <div className="mb-2 flex items-center gap-1.5 font-semibold text-secondary-foreground">
                  <SlidersIcon className="size-3.5 text-primary" />
                  <span>탐색기 (Left)</span>
                </div>
              </div>
            </SidebarContent>

            <main className="flex flex-1 flex-col items-center justify-center bg-surface-muted/20 p-6 text-center">
              <span className="text-xs text-muted-foreground">
                듀얼 워크스페이스
              </span>
            </main>

            <SidebarContent side="right" defaultWidth={320} minWidth={220} maxWidth={500} animated={false} windowTitle="우측 속성 편집 창">
              <div className="bg-background box-border h-full w-full min-w-0 p-3 font-sans text-xs">
                <div className="mb-2 flex items-center gap-1.5 font-semibold text-secondary-foreground">
                  <SettingsIcon className="size-3.5 text-primary" />
                  <span>속성 및 스타일 (Right)</span>
                </div>
              </div>
            </SidebarContent>
          </div>
        </div>
      </SidebarProvider>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const rightToggle = canvas.getByRole('button', {
      name: '오른쪽 사이드바 접기'
    });
    await userEvent.click(rightToggle);
    await userEvent.click(await canvas.findByRole('button', {
      name: '오른쪽 사이드바 펼치기'
    }));
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => {
    document.cookie = \`areo_sidebar_hook_demo_left_menu=%E0%A4%A; path=/\`;
    document.cookie = \`areo_sidebar_hook_demo_left_width=290; path=/\`;
    document.cookie = \`areo_sidebar_hook_demo_right_width=invalid_num; path=/\`;
    document.cookie = \`areo_sidebar_hook_demo_left_popout_features=\${encodeURIComponent(JSON.stringify({
      left: 100,
      top: 100,
      width: 400,
      height: 500
    }))}; path=/\`;
    document.cookie = \`areo_sidebar_hook_demo_right_popout_features=invalid_json; path=/\`;
    document.cookie = \`areo_sidebar_hook_demo_left_toggle_menu=\${encodeURIComponent(JSON.stringify({
      grid: 'on',
      invalid: 123
    }))}; path=/\`;
    document.cookie = \`areo_sidebar_hook_demo_right_toggle_menu=\${encodeURIComponent(JSON.stringify([]))}; path=/\`;
    return <SidebarProvider defaultLeftOpen={true} cookiePrefix="areo_sidebar_hook_demo">
        <div className="bg-background flex h-screen w-full flex-col overflow-hidden">
          <CustomSidebarToolbar />
          <div className="relative flex flex-1 overflow-hidden">
            <SidebarContent side="left" defaultWidth={280}>
              <div className="bg-background box-border h-full w-full min-w-0 p-3 font-sans text-xs">
                <p className="font-semibold text-secondary-foreground">
                  사이드바 본문
                </p>
              </div>
            </SidebarContent>
            <SidebarContent side="right" defaultWidth={280}>
              <div className="bg-background box-border h-full w-full min-w-0 p-3 font-sans text-xs">
                <p className="font-semibold text-secondary-foreground">
                  우측 사이드바 본문
                </p>
              </div>
            </SidebarContent>
            <main className="flex flex-1 items-center justify-center bg-surface-muted/20">
              <span className="font-sans text-xs text-muted-foreground">
                메인 뷰포트
              </span>
            </main>
          </div>
        </div>
      </SidebarProvider>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: '상태 제어 테스트'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: '팝아웃 트리거'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: '팝아웃 중 닫기'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: '팝인 복귀 및 구독해제'
    }));
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-4">
      <ErrorTriggerHarness />
      <SidebarProvider defaultLeftOpen={false} cookiePrefix="areo_edge_demo">
        <RafCancelHarness />
      </SidebarProvider>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const origConsoleError = console.error;
    console.error = () => {};
    try {
      await userEvent.click(canvas.getByRole('button', {
        name: '훅 에러 트리거'
      }));
      await canvas.findByTestId('hook-error');
      await userEvent.click(canvas.getByRole('button', {
        name: '컨텐츠 에러 트리거'
      }));
      await canvas.findByTestId('content-error');
    } finally {
      console.error = origConsoleError;
    }
    await userEvent.click(canvas.getByRole('button', {
      name: '열기'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: '언마운트'
    }));
  }
}`,...$.parameters?.docs?.source}}}})))()}ve();export{Y as Default,Z as DualSidebar,$ as EdgeCases,Q as HookController,X as InteractionTest,_e as __namedExportsOrder,he as default};