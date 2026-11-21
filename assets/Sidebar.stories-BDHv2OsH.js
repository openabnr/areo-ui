import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-CA5FfF6H.js";import{c as r,t as i}from"./utils-BBxgO4ua.js";import{n as a,t as o}from"./Button-BVM2y2dE.js";import{n as s,t as c}from"./createLucideIcon-BI6DLLOJ.js";import{n as l,t as u}from"./layers-DfjL18Zw.js";import{n as d,t as f}from"./settings-BX_udKoD.js";import{n as p,t as m}from"./Checkbox-CTyK8oFq.js";import{n as h,t as g}from"./TextField-ColI3WUc.js";import{n as _,t as ee}from"./DockPanel-DZt289i9.js";var v,y;function b(){return(b=e((()=>{s(),v={name:`panel-left`,size:24,node:[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M9 3v18`,key:`fh3hqa`}]],aliases:[`sidebar`]},v.node,y=c(v)})))()}var x,S;function C(){return(C=e((()=>{s(),x={name:`panel-right`,size:24,node:[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M15 3v18`,key:`14nvp0`}]]},x.node,S=c(x)})))()}var w,T;function E(){return(E=e((()=>{s(),w={name:`sliders-vertical`,size:24,node:[[`path`,{d:`M10 8h4`,key:`1sr2af`}],[`path`,{d:`M12 21v-9`,key:`17s77i`}],[`path`,{d:`M12 8V3`,key:`13r4qs`}],[`path`,{d:`M17 16h4`,key:`h1uq16`}],[`path`,{d:`M19 12V3`,key:`o1uvq1`}],[`path`,{d:`M19 21v-5`,key:`qua636`}],[`path`,{d:`M3 14h4`,key:`bcjad9`}],[`path`,{d:`M5 10V3`,key:`cb8scm`}],[`path`,{d:`M5 21v-7`,key:`1w1uti`}]],aliases:[`sliders`]},w.node,T=c(w)})))()}function D(e){if(typeof document>`u`||!document.cookie)return null;let t=`${encodeURIComponent(e)}=`,n=document.cookie.split(`; `);for(let e of n)if(e.startsWith(t))try{return decodeURIComponent(e.slice(t.length))}catch{return null}return null}function O(e,t){if(typeof document>`u`)return;let n=encodeURIComponent(e);if(t===null){document.cookie=`${n}=; path=/; expires=Thu, 01 Jan 1999 00:00:10 GMT; SameSite=Lax`;return}document.cookie=`${n}=${encodeURIComponent(String(t))}; path=/; max-age=${z}; SameSite=Lax`}function te(e,t){let n=D(e);if(!n)return t;let r=Number.parseInt(n,10);return Number.isFinite(r)&&r>0?r:t}function k(e){if(!e)return null;try{let t=JSON.parse(e);if(typeof t==`object`&&t&&`left`in t&&`top`in t&&`width`in t&&`height`in t&&typeof t.left==`number`&&typeof t.top==`number`&&typeof t.width==`number`&&typeof t.height==`number`)return{left:t.left,top:t.top,width:t.width,height:t.height}}catch{}return null}function A(e){if(!e)return{};try{let t=JSON.parse(e);if(typeof t!=`object`||!t||Array.isArray(t))return{};let n={};for(let[e,r]of Object.entries(t))(r===`on`||r===`off`)&&(n[e]=r);return n}catch{return{}}}function j(e=`left`){let t=(0,I.use)(B);if(!t)throw Error(`useSidebar must be used within a SidebarProvider.`);return(0,I.useMemo)(()=>{let n=(n,r)=>{typeof n==`string`?r!==void 0&&t.setOpen(n,r):t.setOpen(e,n)};return{...t,open:t.isOpen(e),state:t.getState(e),isPoppedOut:t.isPoppedOut(e),isAnimating:t.isAnimating(e),animating:t.isAnimating(e),popoutFeatures:t.getPopoutFeatures(e),toggle:()=>t.toggleSidebar(e),toggleSidebar:(n=e)=>t.toggleSidebar(n),setOpen:n,getActiveMenu:(n=e)=>t.getActiveMenu(n),setActiveMenu:(e,n)=>{t.setActiveMenu(e,n)},getToggleMenuState:(e,n)=>t.getToggleMenuState(e,n),setToggleMenuState:(e,n,r)=>{t.setToggleMenuState(e,n,r)},popout:(n=e)=>t.popout(n),popin:(n=e)=>t.popin(n),onAnimationEnd:n=>t.onAnimationEnd(e,n),onWindowClose:n=>t.onWindowClose(e,n)}},[t,e])}function ne(){let e=(0,I.use)(V);if(!e)throw Error(`useSidebarInternal must be used within a SidebarProvider.`);return e}function M({defaultLeftOpen:e=!0,defaultRightOpen:t=!1,cookiePrefix:n=R,children:r}){let[i,a]=(0,I.useState)(()=>{let r=D(`${n}_left_state`),i=D(`${n}_right_state`),a=D(`${n}_left_popped`)===`true`,o=D(`${n}_right_popped`)===`true`,s=k(D(`${n}_left_popout_features`)),c=k(D(`${n}_right_popout_features`));return{left:{open:r===null?e:r===`true`,isPoppedOut:a,isAnimating:!1,popoutFeatures:s},right:{open:i===null?t:i===`true`,isPoppedOut:o,isAnimating:!1,popoutFeatures:c}}}),[o,s]=(0,I.useState)(()=>({left:D(`${n}_left_menu`),right:D(`${n}_right_menu`)})),[c,l]=(0,I.useState)(()=>({left:A(D(`${n}_left_toggle_menu`)),right:A(D(`${n}_right_toggle_menu`))})),u=(0,I.useRef)({left:new Set,right:new Set}),d=(0,I.useRef)({left:new Set,right:new Set}),f=(0,I.useRef)({left:null,right:null}),p=(0,I.useCallback)((e,t)=>{a(r=>{let i=typeof t==`function`?t(r[e].open):t;return O(`${n}_${e}_state`,i),{...r,[e]:{...r[e],open:i}}})},[n]),m=(0,I.useCallback)(e=>{p(e,e=>!e)},[p]),h=(0,I.useCallback)((e,t)=>{O(`${n}_${e}_popout_features`,t?JSON.stringify(t):null),a(n=>({...n,[e]:{...n[e],popoutFeatures:t}}))},[n]),g=(0,I.useCallback)((e,t)=>{O(`${n}_${e}_popped`,t?!0:null),t||O(`${n}_${e}_popout_features`,null),a(n=>({...n,[e]:{...n[e],isPoppedOut:t,popoutFeatures:t?n[e].popoutFeatures:null}}))},[n]),_=(0,I.useCallback)(e=>{a(t=>({...t,[e]:{...t[e],isAnimating:!0}}))},[]),ee=(0,I.useCallback)((e,t)=>{a(t=>({...t,[e]:{...t[e],isAnimating:!1}}));for(let n of u.current[e])n(t)},[]),v=(0,I.useCallback)((e,t)=>{for(let n of d.current[e])n(t)},[]),y=(0,I.useCallback)((e,t)=>(u.current[e].add(t),()=>{u.current[e].delete(t)}),[]),b=(0,I.useCallback)((e,t)=>(d.current[e].add(t),()=>{d.current[e].delete(t)}),[]),x=(0,I.useCallback)((e,t)=>{f.current[e]=t},[]),S=(0,I.useCallback)((e=`left`)=>{f.current[e]?.()},[]),C=(0,I.useCallback)((e=`left`)=>{g(e,!1)},[g]),w=(0,I.useCallback)((e,t)=>{O(`${n}_${e}_menu`,t),s(n=>({...n,[e]:t}))},[n]),T=(0,I.useCallback)((e,t,r)=>{l(i=>{let a={...i[e],[t]:r};return O(`${n}_${e}_toggle_menu`,JSON.stringify(a)),{...i,[e]:a}})},[n]),E=(0,I.useMemo)(()=>({isOpen:e=>i[e].open,getState:e=>i[e].open?`expanded`:`collapsed`,isPoppedOut:e=>i[e].isPoppedOut,isAnimating:e=>i[e].isAnimating,getPopoutFeatures:e=>i[e].popoutFeatures,setOpen:p,toggleSidebar:m,setIsPoppedOut:g,popout:S,popin:C,getActiveMenu:e=>o[e],setActiveMenu:w,getToggleMenuState:(e,t)=>c[e][t]??`off`,setToggleMenuState:T,onAnimationEnd:y,onWindowClose:b,open:i.left.open,state:i.left.open?`expanded`:`collapsed`,animating:i.left.isAnimating}),[p,m,g,S,C,w,T,y,b,i,o,c]),te=(0,I.useMemo)(()=>({cookiePrefix:n,registerPopoutTrigger:x,triggerPopout:S,notifyAnimationStart:_,notifyAnimationEnd:ee,notifyWindowClose:v,savePopoutFeatures:h}),[n,x,S,_,ee,v,h]);return(0,L.jsx)(B,{value:E,children:(0,L.jsx)(V,{value:te,children:r})})}function re(e,t,n,r,i,a){return e?!t||n?{mounted:!0,expanded:!0,animating:!1}:{mounted:!0,expanded:a,animating:a}:!i&&!a?null:n||!t?{mounted:!1,expanded:!1,animating:!1}:{mounted:r,expanded:!1,animating:!0}}function ie(e){return e.target===e.currentTarget&&e.propertyName===`width`}function N(e){e.current!==null&&(cancelAnimationFrame(e.current),e.current=null)}function ae({open:e,animated:t,isPoppedOut:n,isExpanded:r,isAnimating:i,rafIdRef:a,onStart:o,onFinish:s,onForceReset:c}){let l=(0,I.useRef)(n),u=(0,I.useRef)(e);return(0,I.useEffect)(()=>{(!t||n)&&!i&&u.current!==e&&(u.current=e,s(e))},[t,n,i,e,s]),(0,I.useEffect)(()=>{let t=l.current&&!n&&!e;l.current=n,t&&(N(a),u.current=!1,c())},[n,e,a,c]),(0,I.useEffect)(()=>{!e&&!r&&!n&&t&&i&&o?.()},[e,r,n,t,i,o]),(0,I.useEffect)(()=>{if(!i)return;let t=globalThis.setTimeout(()=>{u.current=e,s(e)},360);return()=>{globalThis.clearTimeout(t)}},[i,e,s]),(0,I.useEffect)(()=>()=>{N(a)},[a]),u}function oe(e,t,n,r,i){let[a,o]=(0,I.useState)(e),[s,c]=(0,I.useState)(e),[l,u]=(0,I.useState)(!1),[d,f]=(0,I.useState)(e),p=(0,I.useRef)(null);if(e!==d){f(e);let r=re(e,t,n,a,s,l);r&&(o(r.mounted),c(r.expanded),u(r.animating))}let m=(0,I.useCallback)(e=>{u(!1),e||o(!1),i?.(e)},[i]),h=ae({open:e,animated:t,isPoppedOut:n,isExpanded:s,isAnimating:l,rafIdRef:p,onStart:r,onFinish:m,onForceReset:(0,I.useCallback)(()=>{o(!1),c(!1),u(!1),i?.(!1)},[i])}),g=(0,I.useCallback)(e=>{e.getBoundingClientRect(),u(!0),r?.(),N(p),p.current=requestAnimationFrame(()=>{c(!0),p.current=null})},[r]);return{isMounted:a,isExpanded:s,isAnimating:l,wrapperRef:(0,I.useCallback)(r=>{t&&!n&&r&&e&&!s&&!l&&g(r)},[t,n,e,s,l,g]),handleTransitionEnd:t=>{ie(t)&&(h.current=e,m(e))}}}function P({side:e=`left`,children:t,className:n,style:r,defaultWidth:a=320,minWidth:o=200,maxWidth:s=600,resizable:c=!0,animated:l=!0,allowPopout:u=!0,windowTitle:d=`${e.toUpperCase()} Sidebar Window`,popoutPlaceholder:f,onPopoutWindowClose:p}){let{open:m,isPoppedOut:h,setIsPoppedOut:g,popoutFeatures:_}=j(e),{cookiePrefix:v,registerPopoutTrigger:y,notifyAnimationStart:b,notifyAnimationEnd:x,notifyWindowClose:S,savePopoutFeatures:C}=ne(),w=`${v}_${e}_width`,[T,E]=(0,I.useState)(()=>te(w,a)),[D,k]=(0,I.useState)(!1),A=(0,I.useRef)(null),M=(0,I.useCallback)(()=>{b(e)},[b,e]),re=(0,I.useCallback)(t=>{x(e,t)},[x,e]),ie=(0,I.useCallback)(t=>{S(e,t),p?.(t)},[S,e,p]),N=(0,I.useCallback)(t=>{C(e,t)},[C,e]),{isMounted:ae,isExpanded:P,isAnimating:F,wrapperRef:R,handleTransitionEnd:z}=oe(m,l,h,M,re),B=(0,I.useCallback)(e=>{A.current=e,R(e)},[R]),V=()=>{k(!0)},H=e=>{A.current&&(A.current.style.width=`${e}px`)},se=e=>{k(!1),E(e),A.current&&(A.current.style.width=`${e}px`),O(w,e)},ce=(0,I.useCallback)(t=>{g(e,t)},[g,e]),le=(0,I.useCallback)(t=>{y(e,t)},[y,e]);if(!ae&&!h)return null;let ue=typeof T==`number`?`${T}px`:T,U=m&&P,W=e===`left`,G=!h&&U,K=W?`border-r border-widget-body-border`:`border-l border-widget-body-border`,q=W?{right:!0}:{left:!0};return(0,L.jsx)(`div`,{ref:B,onTransitionEnd:z,className:i(`relative box-border h-full shrink-0 bg-widget-body-background`,G?K:`pointer-events-none border-0`,l&&F||!U?`overflow-hidden`:`overflow-visible`,l&&F&&!D&&`transition-[width,border-color] duration-300 ease-in-out`),style:{width:G?ue:0},children:(0,L.jsx)(`div`,{className:`box-border size-full`,children:(0,L.jsx)(ee,{className:n,style:r,defaultWidth:T,defaultHeight:`100%`,minWidth:o,maxWidth:s,resizable:c&&G,resizeDirections:q,allowPopout:u,windowTitle:d,isPoppedOut:h,initialPopoutFeatures:_,onPopoutFeaturesChange:N,onPopoutChange:ce,onWindowClose:ie,onResizeStart:V,onResize:H,onResizeStop:se,registerPopoutTrigger:le,popoutPlaceholder:f,showPlaceholderOnPopout:!1,children:t})})})}function F({side:e=`left`,variant:t=`ghost`,size:n=`sm`,className:r,children:a,...s}){let{toggle:c,open:l}=j(e),u=e===`left`?y:S;return(0,L.jsx)(o,{variant:t,size:n,iconOnly:!0,onClick:c,"aria-expanded":l,"aria-label":`${e===`left`?`왼쪽`:`오른쪽`} 사이드바 ${l?`접기`:`펼치기`}`,className:i(`size-6 p-0`,r),...s,children:a??(0,L.jsx)(u,{className:`size-3.5`})})}var I,L,R,z,B,V;function H(){return(H=e((()=>{I=t(),b(),C(),r(),a(),_(),L=n(),R=`sidebar`,z=604800,B=(0,I.createContext)(null),V=(0,I.createContext)(null),M.__docgenInfo={description:``,methods:[],displayName:`SidebarProvider`,props:{defaultLeftOpen:{defaultValue:{value:`true`,computed:!1},required:!1},defaultRightOpen:{defaultValue:{value:`false`,computed:!1},required:!1},cookiePrefix:{defaultValue:{value:`'sidebar'`,computed:!1},required:!1}}},P.__docgenInfo={description:``,methods:[],displayName:`SidebarContent`,props:{side:{defaultValue:{value:`'left'`,computed:!1},required:!1},defaultWidth:{defaultValue:{value:`320`,computed:!1},required:!1},minWidth:{defaultValue:{value:`200`,computed:!1},required:!1},maxWidth:{defaultValue:{value:`600`,computed:!1},required:!1},resizable:{defaultValue:{value:`true`,computed:!1},required:!1},animated:{defaultValue:{value:`true`,computed:!1},required:!1},allowPopout:{defaultValue:{value:`true`,computed:!1},required:!1}}},F.__docgenInfo={description:``,methods:[],displayName:`SidebarTrigger`,props:{side:{defaultValue:{value:`'left'`,computed:!1},required:!1},variant:{defaultValue:{value:`'ghost'`,computed:!1},required:!1},size:{defaultValue:{value:`'sm'`,computed:!1},required:!1}}}})))()}function se(){let e=j(`left`);return(0,G.useEffect)(()=>{let t=e.onAnimationEnd(()=>{}),n=e.onWindowClose(()=>{});return()=>{t(),n()}},[e]),null}function ce(){let e=j(`left`),[t,n]=(0,G.useState)(!0);return(0,K.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 border-b border-secondary-border bg-white px-3 py-1.5`,children:[t&&(0,K.jsx)(se,{}),(0,K.jsxs)(o,{size:`sm`,variant:e.open?`primary`:`secondary`,onClick:e.toggle,children:[`사이드바 `,e.open?`접기`:`펼치기`]}),(0,K.jsx)(o,{size:`sm`,variant:`outline-secondary`,onClick:()=>{e.setOpen(!1),e.setOpen(`right`,!0),e.toggleSidebar(),e.setActiveMenu(`left`,`layers`),e.setToggleMenuState(`left`,`snap`,`on`),e.getActiveMenu(),e.getToggleMenuState(`left`,`snap`)},children:`상태 제어 테스트`}),(0,K.jsx)(o,{size:`sm`,variant:`outline-secondary`,onClick:()=>{e.popout()},children:`팝아웃 트리거`}),(0,K.jsx)(o,{size:`sm`,variant:`outline-secondary`,onClick:()=>{e.setIsPoppedOut(`left`,!0),e.setOpen(`left`,!1)},children:`팝아웃 중 닫기`}),(0,K.jsx)(o,{size:`sm`,variant:`outline-secondary`,onClick:()=>{e.popin(`left`),n(!1)},children:`팝인 복귀 및 구독해제`}),(0,K.jsxs)(`span`,{className:`font-mono text-2xs text-muted-foreground`,children:[`Current State: `,e.state]})]})}function le(){return j(),null}function ue(){return(0,K.jsx)(P,{side:`left`,children:(0,K.jsx)(`div`,{children:`outside`})})}function U(){let[e,t]=(0,G.useState)(!1),[n,r]=(0,G.useState)(!1);return(0,K.jsxs)(`div`,{className:`flex gap-2`,children:[(0,K.jsx)(o,{size:`sm`,onClick:()=>t(!0),children:`훅 에러 트리거`}),(0,K.jsx)(o,{size:`sm`,onClick:()=>r(!0),children:`컨텐츠 에러 트리거`}),e&&(0,K.jsx)(fe,{label:`hook-error`,children:(0,K.jsx)(le,{})}),n&&(0,K.jsx)(fe,{label:`content-error`,children:(0,K.jsx)(ue,{})})]})}function W(){let[e,t]=(0,G.useState)(!0),{setOpen:n}=j(`left`);return(0,K.jsxs)(`div`,{children:[(0,K.jsx)(o,{size:`sm`,onClick:()=>n(!0),children:`열기`}),(0,K.jsx)(o,{size:`sm`,onClick:()=>t(!1),children:`언마운트`}),e&&(0,K.jsx)(P,{side:`left`,animated:!0,children:(0,K.jsx)(`div`,{children:`content`})})]})}var G,K,q,J,Y,de,X,Z,Q,fe,$,pe;function me(){return(me=e((()=>{G=t(),l(),d(),E(),a(),p(),H(),h(),K=n(),{fireEvent:q,userEvent:J,within:Y}=__STORYBOOK_MODULE_TEST__,de={title:`Layout/Sidebar`,component:P,parameters:{layout:`fullscreen`}},X={render:()=>(0,K.jsx)(M,{defaultLeftOpen:!0,cookiePrefix:`areo_sidebar_demo`,children:(0,K.jsxs)(`div`,{className:`bg-background flex h-screen w-full flex-col overflow-hidden`,children:[(0,K.jsxs)(`header`,{className:`flex h-10 shrink-0 items-center justify-between border-b border-secondary-border bg-white px-3 select-none`,children:[(0,K.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,K.jsx)(F,{children:(0,K.jsx)(u,{className:`size-3.5`})}),(0,K.jsx)(`span`,{className:`font-sans text-xs font-semibold text-secondary-foreground`,children:`GIS Workspace (Single Sidebar)`})]}),(0,K.jsx)(`span`,{className:`font-mono text-2xs text-muted-foreground`,children:`deimos layout match`})]}),(0,K.jsxs)(`div`,{className:`relative flex flex-1 overflow-hidden`,children:[(0,K.jsx)(P,{side:`left`,defaultWidth:300,minWidth:200,maxWidth:500,windowTitle:`레이어 관리자 - 독립 창`,onPopoutWindowClose:()=>{},children:(0,K.jsxs)(`div`,{className:`bg-background box-border h-full w-full min-w-0 p-3 font-sans text-xs`,children:[(0,K.jsxs)(`div`,{className:`mb-3 flex items-center justify-between border-b border-secondary-border pb-2`,children:[(0,K.jsxs)(`div`,{className:`flex items-center gap-1.5 font-semibold text-secondary-foreground`,children:[(0,K.jsx)(u,{className:`size-3.5 text-primary`}),(0,K.jsx)(`span`,{children:`레이어 트리`})]}),(0,K.jsx)(o,{size:`sm`,variant:`ghost`,className:`h-5 px-1.5 text-2xs`,children:`새 레이어`})]}),(0,K.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,K.jsx)(g,{size:`sm`,placeholder:`레이어 필터링...`}),(0,K.jsxs)(`div`,{className:`mt-2 flex flex-col gap-1.5`,children:[(0,K.jsx)(m,{size:`sm`,defaultChecked:!0,children:`시도 행정경계 (EPSG:5179)`}),(0,K.jsx)(m,{size:`sm`,defaultChecked:!0,children:`연속지적도 폴리곤`}),(0,K.jsx)(m,{size:`sm`,defaultChecked:!1,children:`강우 관측소 포인트 (TCM_COU)`})]})]})]})}),(0,K.jsx)(`main`,{className:`relative flex flex-1 items-center justify-center bg-surface-muted/20 p-6 text-center`,children:(0,K.jsx)(`div`,{className:`max-w-md border border-dashed border-secondary-border bg-white/70 p-6 shadow-xs`,children:(0,K.jsx)(`h3`,{className:`font-sans text-sm font-bold text-secondary-foreground`,children:`Map Viewport Area`})})})]})]})}),play:async({canvasElement:e})=>{let t=Y(e),n=t.getByRole(`button`,{name:`right resize handle`}),r=n.closest(`.bg-widget-body-background`),i=n.getBoundingClientRect();await q.mouseDown(n,{clientX:i.left}),await q.mouseMove(document,{clientX:i.left+40}),await q.mouseUp(document);let a=t.getByRole(`button`,{name:`왼쪽 사이드바 접기`});await J.click(a),r&&(r.dispatchEvent(new TransitionEvent(`transitionend`,{propertyName:`opacity`,bubbles:!0})),r.dispatchEvent(new TransitionEvent(`transitionend`,{propertyName:`width`,bubbles:!0})));let o=await t.findByRole(`button`,{name:`왼쪽 사이드바 펼치기`});await J.click(o),await new Promise(e=>setTimeout(e,380));let s=await t.findByRole(`button`,{name:`왼쪽 사이드바 접기`});await J.click(s),await new Promise(e=>setTimeout(e,380))}},Z={render:()=>(0,K.jsx)(M,{defaultLeftOpen:!0,defaultRightOpen:!0,cookiePrefix:`areo_sidebar_dual_demo`,children:(0,K.jsxs)(`div`,{className:`bg-background flex h-screen w-full flex-col overflow-hidden`,children:[(0,K.jsxs)(`header`,{className:`flex h-10 shrink-0 items-center justify-between border-b border-secondary-border bg-surface-muted/40 px-3 select-none`,children:[(0,K.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,K.jsx)(F,{side:`left`}),(0,K.jsx)(`span`,{className:`font-sans text-xs font-semibold text-secondary-foreground`,children:`벡터 데이터 에디터`})]}),(0,K.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,K.jsx)(`span`,{className:`text-2xs text-muted-foreground`,children:`속성 패널`}),(0,K.jsx)(F,{side:`right`})]})]}),(0,K.jsxs)(`div`,{className:`relative flex flex-1 overflow-hidden`,children:[(0,K.jsx)(P,{side:`left`,defaultWidth:280,minWidth:200,maxWidth:450,windowTitle:`좌측 레이어 탐색기`,children:(0,K.jsx)(`div`,{className:`bg-background box-border h-full w-full min-w-0 p-3 font-sans text-xs`,children:(0,K.jsxs)(`div`,{className:`mb-2 flex items-center gap-1.5 font-semibold text-secondary-foreground`,children:[(0,K.jsx)(T,{className:`size-3.5 text-primary`}),(0,K.jsx)(`span`,{children:`탐색기 (Left)`})]})})}),(0,K.jsx)(`main`,{className:`flex flex-1 flex-col items-center justify-center bg-surface-muted/20 p-6 text-center`,children:(0,K.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`듀얼 워크스페이스`})}),(0,K.jsx)(P,{side:`right`,defaultWidth:320,minWidth:220,maxWidth:500,animated:!1,windowTitle:`우측 속성 편집 창`,children:(0,K.jsx)(`div`,{className:`bg-background box-border h-full w-full min-w-0 p-3 font-sans text-xs`,children:(0,K.jsxs)(`div`,{className:`mb-2 flex items-center gap-1.5 font-semibold text-secondary-foreground`,children:[(0,K.jsx)(f,{className:`size-3.5 text-primary`}),(0,K.jsx)(`span`,{children:`속성 및 스타일 (Right)`})]})})})]})]})}),play:async({canvasElement:e})=>{let t=Y(e),n=t.getByRole(`button`,{name:`오른쪽 사이드바 접기`});await J.click(n),await J.click(await t.findByRole(`button`,{name:`오른쪽 사이드바 펼치기`}))}},Q={render:()=>(document.cookie=`areo_sidebar_hook_demo_left_menu=%E0%A4%A; path=/`,document.cookie=`areo_sidebar_hook_demo_left_width=290; path=/`,document.cookie=`areo_sidebar_hook_demo_right_width=invalid_num; path=/`,document.cookie=`areo_sidebar_hook_demo_left_popout_features=${encodeURIComponent(JSON.stringify({left:100,top:100,width:400,height:500}))}; path=/`,document.cookie=`areo_sidebar_hook_demo_right_popout_features=invalid_json; path=/`,document.cookie=`areo_sidebar_hook_demo_left_toggle_menu=${encodeURIComponent(JSON.stringify({grid:`on`,invalid:123}))}; path=/`,document.cookie=`areo_sidebar_hook_demo_right_toggle_menu=${encodeURIComponent(JSON.stringify([]))}; path=/`,(0,K.jsx)(M,{defaultLeftOpen:!0,cookiePrefix:`areo_sidebar_hook_demo`,children:(0,K.jsxs)(`div`,{className:`bg-background flex h-screen w-full flex-col overflow-hidden`,children:[(0,K.jsx)(ce,{}),(0,K.jsxs)(`div`,{className:`relative flex flex-1 overflow-hidden`,children:[(0,K.jsx)(P,{side:`left`,defaultWidth:280,children:(0,K.jsx)(`div`,{className:`bg-background box-border h-full w-full min-w-0 p-3 font-sans text-xs`,children:(0,K.jsx)(`p`,{className:`font-semibold text-secondary-foreground`,children:`사이드바 본문`})})}),(0,K.jsx)(P,{side:`right`,defaultWidth:280,children:(0,K.jsx)(`div`,{className:`bg-background box-border h-full w-full min-w-0 p-3 font-sans text-xs`,children:(0,K.jsx)(`p`,{className:`font-semibold text-secondary-foreground`,children:`우측 사이드바 본문`})})}),(0,K.jsx)(`main`,{className:`flex flex-1 items-center justify-center bg-surface-muted/20`,children:(0,K.jsx)(`span`,{className:`font-sans text-xs text-muted-foreground`,children:`메인 뷰포트`})})]})]})})),play:async({canvasElement:e})=>{let t=Y(e);await J.click(t.getByRole(`button`,{name:`상태 제어 테스트`})),await J.click(t.getByRole(`button`,{name:`팝아웃 트리거`})),await J.click(t.getByRole(`button`,{name:`팝아웃 중 닫기`})),await J.click(t.getByRole(`button`,{name:`팝인 복귀 및 구독해제`}))}},fe=class extends G.Component{state={error:null};static getDerivedStateFromError(e){return{error:e.message}}render(){return this.state.error?(0,K.jsx)(`div`,{"data-testid":this.props.label,children:this.state.error}):this.props.children}},$={render:()=>(0,K.jsxs)(`div`,{className:`p-4`,children:[(0,K.jsx)(U,{}),(0,K.jsx)(M,{defaultLeftOpen:!1,cookiePrefix:`areo_edge_demo`,children:(0,K.jsx)(W,{})})]}),play:async({canvasElement:e})=>{let t=Y(e),n=console.error;console.error=()=>{};try{await J.click(t.getByRole(`button`,{name:`훅 에러 트리거`})),await t.findByTestId(`hook-error`),await J.click(t.getByRole(`button`,{name:`컨텐츠 에러 트리거`})),await t.findByTestId(`content-error`)}finally{console.error=n}await J.click(t.getByRole(`button`,{name:`열기`})),await J.click(t.getByRole(`button`,{name:`언마운트`}))}},pe=[`Default`,`DualSidebar`,`HookController`,`EdgeCases`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 1) 리사이징 핸들 드래그
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

    // 2) 트리거 클릭(접기) -> 비-width transitionend -> width transitionend
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

    // 3) 다시 펼친 후 transitionend 없이 접어서 fallback 타이머 커버
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
}`,...$.parameters?.docs?.source}}}})))()}me();export{X as Default,Z as DualSidebar,$ as EdgeCases,Q as HookController,pe as __namedExportsOrder,de as default};