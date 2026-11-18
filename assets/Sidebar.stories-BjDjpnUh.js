import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-sFfd_MYY.js";import{c as r,t as i}from"./utils-CynS5U15.js";import{n as a,t as o}from"./Button-CB0K-Jiw.js";import{n as s,t as c}from"./createLucideIcon-Bv1AFRo0.js";import{n as l,t as u}from"./layers-Be1waVsd.js";import{n as d,t as f}from"./settings-vEIIP7xY.js";import{n as p,t as m}from"./Checkbox-ByZ5_ivK.js";import{n as h,t as g}from"./TextField-DrAZj0qU.js";import{n as _,t as v}from"./DockPanel-CTqRbaYA.js";var y,b;function x(){return(x=e((()=>{s(),y={name:`panel-left`,size:24,node:[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M9 3v18`,key:`fh3hqa`}]],aliases:[`sidebar`]},y.node,b=c(y)})))()}var S,C;function w(){return(w=e((()=>{s(),S={name:`panel-right`,size:24,node:[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M15 3v18`,key:`14nvp0`}]]},S.node,C=c(S)})))()}var T,E;function D(){return(D=e((()=>{s(),T={name:`sliders-vertical`,size:24,node:[[`path`,{d:`M10 8h4`,key:`1sr2af`}],[`path`,{d:`M12 21v-9`,key:`17s77i`}],[`path`,{d:`M12 8V3`,key:`13r4qs`}],[`path`,{d:`M17 16h4`,key:`h1uq16`}],[`path`,{d:`M19 12V3`,key:`o1uvq1`}],[`path`,{d:`M19 21v-5`,key:`qua636`}],[`path`,{d:`M3 14h4`,key:`bcjad9`}],[`path`,{d:`M5 10V3`,key:`cb8scm`}],[`path`,{d:`M5 21v-7`,key:`1w1uti`}]],aliases:[`sliders`]},T.node,E=c(T)})))()}function O(e){if(typeof document>`u`||!document.cookie)return null;let t=`${encodeURIComponent(e)}=`,n=document.cookie.split(`; `);for(let e of n)if(e.startsWith(t))try{return decodeURIComponent(e.slice(t.length))}catch{return null}return null}function k(e,t){if(typeof document>`u`)return;let n=encodeURIComponent(e);if(t===null){document.cookie=`${n}=; path=/; expires=Thu, 01 Jan 1999 00:00:10 GMT; SameSite=Lax`;return}document.cookie=`${n}=${encodeURIComponent(String(t))}; path=/; max-age=${V}; SameSite=Lax`}function ee(e,t){let n=O(e);if(!n)return t;let r=Number.parseInt(n,10);return Number.isFinite(r)&&r>0?r:t}function A(e){if(!e)return null;try{let t=JSON.parse(e);if(typeof t==`object`&&t&&`left`in t&&`top`in t&&`width`in t&&`height`in t&&typeof t.left==`number`&&typeof t.top==`number`&&typeof t.width==`number`&&typeof t.height==`number`)return{left:t.left,top:t.top,width:t.width,height:t.height}}catch{}return null}function j(e){if(!e)return{};try{let t=JSON.parse(e);if(typeof t!=`object`||!t||Array.isArray(t))return{};let n={};for(let[e,r]of Object.entries(t))(r===`on`||r===`off`)&&(n[e]=r);return n}catch{return{}}}function M(e=`left`){let t=(0,R.use)(H);if(!t)throw Error(`useSidebar must be used within a SidebarProvider.`);return(0,R.useMemo)(()=>{let n=(n,r)=>{typeof n==`string`?r!==void 0&&t.setOpen(n,r):t.setOpen(e,n)};return{...t,open:t.isOpen(e),state:t.getState(e),isPoppedOut:t.isPoppedOut(e),isAnimating:t.isAnimating(e),animating:t.isAnimating(e),popoutFeatures:t.getPopoutFeatures(e),toggle:()=>t.toggleSidebar(e),toggleSidebar:(n=e)=>t.toggleSidebar(n),setOpen:n,getActiveMenu:(n=e)=>t.getActiveMenu(n),setActiveMenu:(e,n)=>{t.setActiveMenu(e,n)},getToggleMenuState:(e,n)=>t.getToggleMenuState(e,n),setToggleMenuState:(e,n,r)=>{t.setToggleMenuState(e,n,r)},popout:(n=e)=>t.popout(n),popin:(n=e)=>t.popin(n),onAnimationEnd:n=>t.onAnimationEnd(e,n),onWindowClose:n=>t.onWindowClose(e,n)}},[t,e])}function te(){let e=(0,R.use)(U);if(!e)throw Error(`useSidebarInternal must be used within a SidebarProvider.`);return e}function N({defaultLeftOpen:e=!0,defaultRightOpen:t=!1,cookiePrefix:n=B,children:r}){let[i,a]=(0,R.useState)(()=>{let r=O(`${n}_left_state`),i=O(`${n}_right_state`),a=O(`${n}_left_popped`)===`true`,o=O(`${n}_right_popped`)===`true`,s=A(O(`${n}_left_popout_features`)),c=A(O(`${n}_right_popout_features`));return{left:{open:r===null?e:r===`true`,isPoppedOut:a,isAnimating:!1,popoutFeatures:s},right:{open:i===null?t:i===`true`,isPoppedOut:o,isAnimating:!1,popoutFeatures:c}}}),[o,s]=(0,R.useState)(()=>({left:O(`${n}_left_menu`),right:O(`${n}_right_menu`)})),[c,l]=(0,R.useState)(()=>({left:j(O(`${n}_left_toggle_menu`)),right:j(O(`${n}_right_toggle_menu`))})),u=(0,R.useRef)({left:new Set,right:new Set}),d=(0,R.useRef)({left:new Set,right:new Set}),f=(0,R.useRef)({left:null,right:null}),p=(0,R.useCallback)((e,t)=>{a(r=>{let i=typeof t==`function`?t(r[e].open):t;return k(`${n}_${e}_state`,i),{...r,[e]:{...r[e],open:i}}})},[n]),m=(0,R.useCallback)(e=>{p(e,e=>!e)},[p]),h=(0,R.useCallback)((e,t)=>{k(`${n}_${e}_popout_features`,t?JSON.stringify(t):null),a(n=>({...n,[e]:{...n[e],popoutFeatures:t}}))},[n]),g=(0,R.useCallback)((e,t)=>{k(`${n}_${e}_popped`,t?!0:null),t||k(`${n}_${e}_popout_features`,null),a(n=>({...n,[e]:{...n[e],isPoppedOut:t,popoutFeatures:t?n[e].popoutFeatures:null}}))},[n]),_=(0,R.useCallback)(e=>{a(t=>({...t,[e]:{...t[e],isAnimating:!0}}))},[]),v=(0,R.useCallback)((e,t)=>{a(t=>({...t,[e]:{...t[e],isAnimating:!1}}));for(let n of u.current[e])n(t)},[]),y=(0,R.useCallback)((e,t)=>{for(let n of d.current[e])n(t)},[]),b=(0,R.useCallback)((e,t)=>(u.current[e].add(t),()=>{u.current[e].delete(t)}),[]),x=(0,R.useCallback)((e,t)=>(d.current[e].add(t),()=>{d.current[e].delete(t)}),[]),S=(0,R.useCallback)((e,t)=>{f.current[e]=t},[]),C=(0,R.useCallback)((e=`left`)=>{f.current[e]?.()},[]),w=(0,R.useCallback)((e=`left`)=>{g(e,!1)},[g]),T=(0,R.useCallback)((e,t)=>{k(`${n}_${e}_menu`,t),s(n=>({...n,[e]:t}))},[n]),E=(0,R.useCallback)((e,t,r)=>{l(i=>{let a={...i[e],[t]:r};return k(`${n}_${e}_toggle_menu`,JSON.stringify(a)),{...i,[e]:a}})},[n]),D=(0,R.useMemo)(()=>({isOpen:e=>i[e].open,getState:e=>i[e].open?`expanded`:`collapsed`,isPoppedOut:e=>i[e].isPoppedOut,isAnimating:e=>i[e].isAnimating,getPopoutFeatures:e=>i[e].popoutFeatures,setOpen:p,toggleSidebar:m,setIsPoppedOut:g,popout:C,popin:w,getActiveMenu:e=>o[e],setActiveMenu:T,getToggleMenuState:(e,t)=>c[e][t]??`off`,setToggleMenuState:E,onAnimationEnd:b,onWindowClose:x,open:i.left.open,state:i.left.open?`expanded`:`collapsed`,animating:i.left.isAnimating}),[p,m,g,C,w,T,E,b,x,i,o,c]),ee=(0,R.useMemo)(()=>({cookiePrefix:n,registerPopoutTrigger:S,triggerPopout:C,notifyAnimationStart:_,notifyAnimationEnd:v,notifyWindowClose:y,savePopoutFeatures:h}),[n,S,C,_,v,y,h]);return(0,z.jsx)(H,{value:D,children:(0,z.jsx)(U,{value:ee,children:r})})}function ne(e,t,n,r,i,a){return e?!t||n?{mounted:!0,expanded:!0,animating:!1}:{mounted:!0,expanded:a,animating:a}:!i&&!a?null:n||!t?{mounted:!1,expanded:!1,animating:!1}:{mounted:r,expanded:!1,animating:!0}}function re(e){return e.target===e.currentTarget&&e.propertyName===`width`}function P(e){e.current!==null&&(cancelAnimationFrame(e.current),e.current=null)}function F({open:e,animated:t,isPoppedOut:n,isExpanded:r,isAnimating:i,rafIdRef:a,onStart:o,onFinish:s,onForceReset:c}){let l=(0,R.useRef)(n),u=(0,R.useRef)(e);return(0,R.useEffect)(()=>{(!t||n)&&!i&&u.current!==e&&(u.current=e,s(e))},[t,n,i,e,s]),(0,R.useEffect)(()=>{let t=l.current&&!n&&!e;l.current=n,t&&(P(a),u.current=!1,c())},[n,e,a,c]),(0,R.useEffect)(()=>{!e&&!r&&!n&&t&&i&&o?.()},[e,r,n,t,i,o]),(0,R.useEffect)(()=>{if(!i)return;let t=globalThis.setTimeout(()=>{u.current=e,s(e)},360);return()=>{globalThis.clearTimeout(t)}},[i,e,s]),(0,R.useEffect)(()=>()=>{P(a)},[a]),u}function ie(e,t,n,r,i){let[a,o]=(0,R.useState)(e),[s,c]=(0,R.useState)(e),[l,u]=(0,R.useState)(!1),[d,f]=(0,R.useState)(e),p=(0,R.useRef)(null);if(e!==d){f(e);let r=ne(e,t,n,a,s,l);r&&(o(r.mounted),c(r.expanded),u(r.animating))}let m=(0,R.useCallback)(e=>{u(!1),e||o(!1),i?.(e)},[i]),h=F({open:e,animated:t,isPoppedOut:n,isExpanded:s,isAnimating:l,rafIdRef:p,onStart:r,onFinish:m,onForceReset:(0,R.useCallback)(()=>{o(!1),c(!1),u(!1),i?.(!1)},[i])}),g=(0,R.useCallback)(e=>{e.getBoundingClientRect(),u(!0),r?.(),P(p),p.current=requestAnimationFrame(()=>{c(!0),p.current=null})},[r]);return{isMounted:a,isExpanded:s,isAnimating:l,wrapperRef:(0,R.useCallback)(r=>{t&&!n&&r&&e&&!s&&!l&&g(r)},[t,n,e,s,l,g]),handleTransitionEnd:t=>{re(t)&&(h.current=e,m(e))}}}function I({side:e=`left`,children:t,className:n,style:r,defaultWidth:a=320,minWidth:o=200,maxWidth:s=600,resizable:c=!0,animated:l=!0,allowPopout:u=!0,windowTitle:d=`${e.toUpperCase()} Sidebar Window`,popoutPlaceholder:f,onPopoutWindowClose:p}){let{open:m,isPoppedOut:h,setIsPoppedOut:g,popoutFeatures:_}=M(e),{cookiePrefix:y,registerPopoutTrigger:b,notifyAnimationStart:x,notifyAnimationEnd:S,notifyWindowClose:C,savePopoutFeatures:w}=te(),T=`${y}_${e}_width`,[E,D]=(0,R.useState)(()=>ee(T,a)),[O,A]=(0,R.useState)(!1),j=(0,R.useRef)(null),N=(0,R.useCallback)(()=>{x(e)},[x,e]),ne=(0,R.useCallback)(t=>{S(e,t)},[S,e]),re=(0,R.useCallback)(t=>{C(e,t),p?.(t)},[C,e,p]),P=(0,R.useCallback)(t=>{w(e,t)},[w,e]),{isMounted:F,isExpanded:I,isAnimating:L,wrapperRef:B,handleTransitionEnd:V}=ie(m,l,h,N,ne),H=(0,R.useCallback)(e=>{j.current=e,B(e)},[B]),U=()=>{A(!0)},W=e=>{j.current&&(j.current.style.width=`${e}px`)},ae=e=>{A(!1),D(e),j.current&&(j.current.style.width=`${e}px`),k(T,e)},G=(0,R.useCallback)(t=>{g(e,t)},[g,e]),K=(0,R.useCallback)(t=>{b(e,t)},[b,e]);if(!F&&!h)return null;let q=typeof E==`number`?`${E}px`:E,J=m&&I,Y=e===`left`,X=!h&&J,Z=Y?`border-r border-widget-body-border`:`border-l border-widget-body-border`,Q=Y?{right:!0}:{left:!0};return(0,z.jsx)(`div`,{ref:H,onTransitionEnd:V,className:i(`relative box-border h-full shrink-0 bg-widget-body-background`,X?Z:`pointer-events-none border-0`,l&&L||!J?`overflow-hidden`:`overflow-visible`,l&&L&&!O&&`transition-[width,border-color] duration-300 ease-in-out`),style:{width:X?q:0},children:(0,z.jsx)(`div`,{className:`box-border size-full`,children:(0,z.jsx)(v,{className:n,style:r,defaultWidth:E,defaultHeight:`100%`,minWidth:o,maxWidth:s,resizable:c&&X,resizeDirections:Q,allowPopout:u,windowTitle:d,isPoppedOut:h,initialPopoutFeatures:_,onPopoutFeaturesChange:P,onPopoutChange:G,onWindowClose:re,onResizeStart:U,onResize:W,onResizeStop:ae,registerPopoutTrigger:K,popoutPlaceholder:f,showPlaceholderOnPopout:!1,children:t})})})}function L({side:e=`left`,variant:t=`ghost`,size:n=`sm`,className:r,children:a,...s}){let{toggle:c,open:l}=M(e),u=e===`left`?b:C;return(0,z.jsx)(o,{variant:t,size:n,iconOnly:!0,onClick:c,"aria-expanded":l,"aria-label":`${e===`left`?`왼쪽`:`오른쪽`} 사이드바 ${l?`접기`:`펼치기`}`,className:i(`size-6 p-0`,r),...s,children:a??(0,z.jsx)(u,{className:`size-3.5`})})}var R,z,B,V,H,U;function W(){return(W=e((()=>{R=t(),x(),w(),r(),a(),_(),z=n(),B=`sidebar`,V=604800,H=(0,R.createContext)(null),U=(0,R.createContext)(null),N.__docgenInfo={description:``,methods:[],displayName:`SidebarProvider`,props:{defaultLeftOpen:{defaultValue:{value:`true`,computed:!1},required:!1},defaultRightOpen:{defaultValue:{value:`false`,computed:!1},required:!1},cookiePrefix:{defaultValue:{value:`'sidebar'`,computed:!1},required:!1}}},I.__docgenInfo={description:``,methods:[],displayName:`SidebarContent`,props:{side:{defaultValue:{value:`'left'`,computed:!1},required:!1},defaultWidth:{defaultValue:{value:`320`,computed:!1},required:!1},minWidth:{defaultValue:{value:`200`,computed:!1},required:!1},maxWidth:{defaultValue:{value:`600`,computed:!1},required:!1},resizable:{defaultValue:{value:`true`,computed:!1},required:!1},animated:{defaultValue:{value:`true`,computed:!1},required:!1},allowPopout:{defaultValue:{value:`true`,computed:!1},required:!1}}},L.__docgenInfo={description:``,methods:[],displayName:`SidebarTrigger`,props:{side:{defaultValue:{value:`'left'`,computed:!1},required:!1},variant:{defaultValue:{value:`'ghost'`,computed:!1},required:!1},size:{defaultValue:{value:`'sm'`,computed:!1},required:!1}}}})))()}function ae(){let e=M(`left`);return(0,G.useEffect)(()=>{let t=e.onAnimationEnd(()=>{}),n=e.onWindowClose(()=>{});return()=>{t(),n()}},[e]),(0,K.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 border-b border-secondary-border bg-white px-3 py-1.5`,children:[(0,K.jsxs)(o,{size:`sm`,variant:e.open?`primary`:`secondary`,onClick:e.toggle,children:[`사이드바 `,e.open?`접기`:`펼치기`]}),(0,K.jsx)(o,{size:`sm`,variant:`outline-secondary`,onClick:()=>{e.setOpen(`left`,!1),e.setActiveMenu(`left`,`layers`),e.setToggleMenuState(`left`,`snap`,`on`),e.getActiveMenu(),e.getToggleMenuState(`left`,`snap`)},children:`상태 제어 테스트`}),(0,K.jsx)(o,{size:`sm`,variant:`outline-secondary`,onClick:()=>{e.setIsPoppedOut(`left`,!0)},children:`강제 팝아웃 상태`}),(0,K.jsx)(o,{size:`sm`,variant:`outline-secondary`,onClick:()=>{e.popin(`left`)},children:`팝인 복귀`}),(0,K.jsxs)(`span`,{className:`font-mono text-2xs text-muted-foreground`,children:[`Current State: `,e.state]})]})}var G,K,q,J,Y,X,Z,Q,$,oe;function se(){return(se=e((()=>{G=t(),l(),d(),D(),a(),p(),W(),h(),K=n(),{fireEvent:q,userEvent:J,within:Y}=__STORYBOOK_MODULE_TEST__,X={title:`Layout/Sidebar`,component:I,parameters:{layout:`fullscreen`}},Z={render:()=>(0,K.jsx)(N,{defaultLeftOpen:!0,cookiePrefix:`areo_sidebar_demo`,children:(0,K.jsxs)(`div`,{className:`bg-background flex h-screen w-full flex-col overflow-hidden`,children:[(0,K.jsxs)(`header`,{className:`flex h-10 shrink-0 items-center justify-between border-b border-secondary-border bg-white px-3 select-none`,children:[(0,K.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,K.jsx)(L,{side:`left`}),(0,K.jsx)(`span`,{className:`font-sans text-xs font-semibold text-secondary-foreground`,children:`GIS Workspace (Single Sidebar)`})]}),(0,K.jsx)(`span`,{className:`font-mono text-2xs text-muted-foreground`,children:`deimos layout match`})]}),(0,K.jsxs)(`div`,{className:`relative flex flex-1 overflow-hidden`,children:[(0,K.jsx)(I,{side:`left`,defaultWidth:300,minWidth:200,maxWidth:500,windowTitle:`레이어 관리자 - 독립 창`,children:(0,K.jsxs)(`div`,{className:`bg-background box-border h-full w-full min-w-0 p-3 font-sans text-xs`,children:[(0,K.jsxs)(`div`,{className:`mb-3 flex items-center justify-between border-b border-secondary-border pb-2`,children:[(0,K.jsxs)(`div`,{className:`flex items-center gap-1.5 font-semibold text-secondary-foreground`,children:[(0,K.jsx)(u,{className:`size-3.5 text-primary`}),(0,K.jsx)(`span`,{children:`레이어 트리`})]}),(0,K.jsx)(o,{size:`sm`,variant:`ghost`,className:`h-5 px-1.5 text-2xs`,children:`새 레이어`})]}),(0,K.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,K.jsx)(g,{size:`sm`,placeholder:`레이어 필터링...`}),(0,K.jsxs)(`div`,{className:`mt-2 flex flex-col gap-1.5`,children:[(0,K.jsx)(m,{size:`sm`,defaultChecked:!0,children:`시도 행정경계 (EPSG:5179)`}),(0,K.jsx)(m,{size:`sm`,defaultChecked:!0,children:`연속지적도 폴리곤`}),(0,K.jsx)(m,{size:`sm`,defaultChecked:!1,children:`강우 관측소 포인트 (TCM_COU)`})]})]})]})}),(0,K.jsx)(`main`,{className:`relative flex flex-1 items-center justify-center bg-surface-muted/20 p-6 text-center`,children:(0,K.jsx)(`div`,{className:`max-w-md border border-dashed border-secondary-border bg-white/70 p-6 shadow-xs`,children:(0,K.jsx)(`h3`,{className:`font-sans text-sm font-bold text-secondary-foreground`,children:`Map Viewport Area`})})})]})]})}),play:async({canvasElement:e})=>{let t=Y(e),n=t.getByRole(`button`,{name:`right resize handle`}),r=n.getBoundingClientRect();await q.mouseDown(n,{clientX:r.left}),await q.mouseMove(document,{clientX:r.left+40}),await q.mouseUp(document);let i=t.getByRole(`button`,{name:`왼쪽 사이드바 접기`});await J.click(i);let a=n.closest(`.bg-widget-body-background`);if(a){let e=new TransitionEvent(`transitionend`,{propertyName:`width`,bubbles:!0});a.dispatchEvent(e)}await new Promise(e=>setTimeout(e,380));let o=await t.findByRole(`button`,{name:`왼쪽 사이드바 펼치기`});await J.click(o),await new Promise(e=>setTimeout(e,380))}},Q={render:()=>(0,K.jsx)(N,{defaultLeftOpen:!0,defaultRightOpen:!0,cookiePrefix:`areo_sidebar_dual_demo`,children:(0,K.jsxs)(`div`,{className:`bg-background flex h-screen w-full flex-col overflow-hidden`,children:[(0,K.jsxs)(`header`,{className:`flex h-10 shrink-0 items-center justify-between border-b border-secondary-border bg-surface-muted/40 px-3 select-none`,children:[(0,K.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,K.jsx)(L,{side:`left`}),(0,K.jsx)(`span`,{className:`font-sans text-xs font-semibold text-secondary-foreground`,children:`벡터 데이터 에디터`})]}),(0,K.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,K.jsx)(`span`,{className:`text-2xs text-muted-foreground`,children:`속성 패널`}),(0,K.jsx)(L,{side:`right`})]})]}),(0,K.jsxs)(`div`,{className:`relative flex flex-1 overflow-hidden`,children:[(0,K.jsx)(I,{side:`left`,defaultWidth:280,minWidth:200,maxWidth:450,windowTitle:`좌측 레이어 탐색기`,children:(0,K.jsx)(`div`,{className:`bg-background box-border h-full w-full min-w-0 p-3 font-sans text-xs`,children:(0,K.jsxs)(`div`,{className:`mb-2 flex items-center gap-1.5 font-semibold text-secondary-foreground`,children:[(0,K.jsx)(E,{className:`size-3.5 text-primary`}),(0,K.jsx)(`span`,{children:`탐색기 (Left)`})]})})}),(0,K.jsx)(`main`,{className:`flex flex-1 flex-col items-center justify-center bg-surface-muted/20 p-6 text-center`,children:(0,K.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`듀얼 워크스페이스`})}),(0,K.jsx)(I,{side:`right`,defaultWidth:320,minWidth:220,maxWidth:500,animated:!1,windowTitle:`우측 속성 편집 창`,children:(0,K.jsx)(`div`,{className:`bg-background box-border h-full w-full min-w-0 p-3 font-sans text-xs`,children:(0,K.jsxs)(`div`,{className:`mb-2 flex items-center gap-1.5 font-semibold text-secondary-foreground`,children:[(0,K.jsx)(f,{className:`size-3.5 text-primary`}),(0,K.jsx)(`span`,{children:`속성 및 스타일 (Right)`})]})})})]})]})}),play:async({canvasElement:e})=>{let t=Y(e),n=t.getByRole(`button`,{name:`오른쪽 사이드바 접기`});await J.click(n),await J.click(await t.findByRole(`button`,{name:`오른쪽 사이드바 펼치기`}))}},$={render:()=>(document.cookie=`areo_sidebar_hook_demo_left_width=290; path=/`,document.cookie=`areo_sidebar_hook_demo_left_popout_features=${encodeURIComponent(JSON.stringify({left:100,top:100,width:400,height:500}))}; path=/`,document.cookie=`areo_sidebar_hook_demo_right_popout_features=invalid_json; path=/`,document.cookie=`areo_sidebar_hook_demo_left_toggle_menu=${encodeURIComponent(JSON.stringify({grid:`on`,invalid:123}))}; path=/`,document.cookie=`areo_sidebar_hook_demo_right_toggle_menu=invalid_json; path=/`,(0,K.jsx)(N,{defaultLeftOpen:!0,cookiePrefix:`areo_sidebar_hook_demo`,children:(0,K.jsxs)(`div`,{className:`bg-background flex h-screen w-full flex-col overflow-hidden`,children:[(0,K.jsx)(ae,{}),(0,K.jsxs)(`div`,{className:`relative flex flex-1 overflow-hidden`,children:[(0,K.jsx)(I,{side:`left`,defaultWidth:280,children:(0,K.jsx)(`div`,{className:`bg-background box-border h-full w-full min-w-0 p-3 font-sans text-xs`,children:(0,K.jsx)(`p`,{className:`font-semibold text-secondary-foreground`,children:`사이드바 본문`})})}),(0,K.jsx)(`main`,{className:`flex flex-1 items-center justify-center bg-surface-muted/20`,children:(0,K.jsx)(`span`,{className:`font-sans text-xs text-muted-foreground`,children:`메인 뷰포트`})})]})]})})),play:async({canvasElement:e})=>{let t=Y(e);await J.click(t.getByRole(`button`,{name:`상태 제어 테스트`})),await J.click(t.getByRole(`button`,{name:`강제 팝아웃 상태`})),await J.click(t.getByRole(`button`,{name:`팝인 복귀`}))}},oe=[`Default`,`DualSidebar`,`HookController`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <SidebarProvider defaultLeftOpen={true} cookiePrefix="areo_sidebar_demo">
        <div className="bg-background flex h-screen w-full flex-col overflow-hidden">
          <header className="flex h-10 shrink-0 items-center justify-between border-b border-secondary-border bg-white px-3 select-none">
            <div className="flex items-center gap-2">
              <SidebarTrigger side="left" />
              <span className="font-sans text-xs font-semibold text-secondary-foreground">
                GIS Workspace (Single Sidebar)
              </span>
            </div>
            <span className="font-mono text-2xs text-muted-foreground">
              deimos layout match
            </span>
          </header>

          <div className="relative flex flex-1 overflow-hidden">
            <SidebarContent side="left" defaultWidth={300} minWidth={200} maxWidth={500} windowTitle="레이어 관리자 - 독립 창">
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

    // 1) 리사이징 핸들 드래그 (handleResizeStart, handleResize, handleResizeStop)
    const resizeHandle = canvas.getByRole('button', {
      name: 'right resize handle'
    });
    const rect = resizeHandle.getBoundingClientRect();
    await fireEvent.mouseDown(resizeHandle, {
      clientX: rect.left
    });
    await fireEvent.mouseMove(document, {
      clientX: rect.left + 40
    });
    await fireEvent.mouseUp(document);

    // 2) 트리거 클릭(접기) -> transitionend(width) 발생 -> 다시 클릭(펼치기) -> fallback 타이머 완료
    const collapseBtn = canvas.getByRole('button', {
      name: '왼쪽 사이드바 접기'
    });
    await userEvent.click(collapseBtn);
    const sidebarWrapper = resizeHandle.closest('.bg-widget-body-background');
    if (sidebarWrapper) {
      const transitionEvt = new TransitionEvent('transitionend', {
        propertyName: 'width',
        bubbles: true
      });
      sidebarWrapper.dispatchEvent(transitionEvt);
    }
    await new Promise(resolve => setTimeout(resolve, 380));
    const expandBtn = await canvas.findByRole('button', {
      name: '왼쪽 사이드바 펼치기'
    });
    await userEvent.click(expandBtn);
    await new Promise(resolve => setTimeout(resolve, 380));
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
    // animated={false} 비애니메이션 즉시 전환 분기 검증
    const rightToggle = canvas.getByRole('button', {
      name: '오른쪽 사이드바 접기'
    });
    await userEvent.click(rightToggle);
    await userEvent.click(await canvas.findByRole('button', {
      name: '오른쪽 사이드바 펼치기'
    }));
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => {
    // 다양한 쿠키 파싱 분기(유효 JSON, 무효 JSON, 너비 숫자) 사전 설정
    document.cookie = \`areo_sidebar_hook_demo_left_width=290; path=/\`;
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
    document.cookie = \`areo_sidebar_hook_demo_right_toggle_menu=invalid_json; path=/\`;
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
      name: '강제 팝아웃 상태'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: '팝인 복귀'
    }));
  }
}`,...$.parameters?.docs?.source}}}})))()}se();export{Z as Default,Q as DualSidebar,$ as HookController,oe as __namedExportsOrder,X as default};