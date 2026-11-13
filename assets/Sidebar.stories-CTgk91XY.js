import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-BKXkO2qw.js";import{c as r,t as i}from"./utils-Cjde27Em.js";import{n as a,t as o}from"./Button-CPyB4zts.js";import{n as s,t as c}from"./createLucideIcon-zzZEfyI0.js";import{n as l,t as u}from"./layers-CiyU8cwS.js";import{n as d,t as f}from"./settings-C5syynAM.js";import{n as p,t as m}from"./Checkbox-DQM9nBvV.js";import{n as h,t as g}from"./TextField-B1qM7auj.js";import{n as _,t as v}from"./DockPanel-CAU8cxVI.js";var y,b;function x(){return(x=e((()=>{s(),y={name:`panel-left`,size:24,node:[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M9 3v18`,key:`fh3hqa`}]],aliases:[`sidebar`]},y.node,b=c(y)})))()}var S,C;function w(){return(w=e((()=>{s(),S={name:`panel-right`,size:24,node:[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M15 3v18`,key:`14nvp0`}]]},S.node,C=c(S)})))()}var T,E;function D(){return(D=e((()=>{s(),T={name:`sliders-vertical`,size:24,node:[[`path`,{d:`M10 8h4`,key:`1sr2af`}],[`path`,{d:`M12 21v-9`,key:`17s77i`}],[`path`,{d:`M12 8V3`,key:`13r4qs`}],[`path`,{d:`M17 16h4`,key:`h1uq16`}],[`path`,{d:`M19 12V3`,key:`o1uvq1`}],[`path`,{d:`M19 21v-5`,key:`qua636`}],[`path`,{d:`M3 14h4`,key:`bcjad9`}],[`path`,{d:`M5 10V3`,key:`cb8scm`}],[`path`,{d:`M5 21v-7`,key:`1w1uti`}]],aliases:[`sliders`]},T.node,E=c(T)})))()}function O(e){if(typeof document>`u`)return null;let t=RegExp(`(?:^|; )${e}=([^;]*)`).exec(document.cookie);return t?decodeURIComponent(t[1]):null}function k(e,t){if(!(typeof document>`u`)){if(t===null){document.cookie=`${e}=; path=/; expires=Thu, 01 Jan 1999 00:00:10 GMT;`;return}document.cookie=`${e}=${t}; path=/; max-age=${V}`}}function A(e,t){let n=O(e);if(!n)return t;let r=Number.parseInt(n,10);return Number.isNaN(r)?t:r}function j(e){if(!e)return null;try{let t=JSON.parse(e);if(typeof t.left==`number`&&typeof t.top==`number`&&typeof t.width==`number`&&typeof t.height==`number`)return t}catch{}return null}function M(e=`left`){let t=(0,R.use)(H);if(!t)throw Error(`useSidebar must be used within a SidebarProvider.`);return(0,R.useMemo)(()=>({...t,open:t.isOpen(e),state:t.getState(e),isPoppedOut:t.isPoppedOut(e),isAnimating:t.isAnimating(e),animating:t.isAnimating(e),popoutFeatures:t.getPopoutFeatures(e),toggle:()=>t.toggleSidebar(e),toggleSidebar:(n=e)=>t.toggleSidebar(n),setOpen:(n,r)=>{typeof n==`string`?t.setOpen(n,r):t.setOpen(e,n)},getActiveMenu:(n=e)=>t.getActiveMenu(n),setActiveMenu:(e,n)=>{t.setActiveMenu(e,n)},getToggleMenuState:(e,n)=>t.getToggleMenuState(e,n),setToggleMenuState:(e,n,r)=>{t.setToggleMenuState(e,n,r)},popout:(n=e)=>t.popout(n),popin:(n=e)=>t.popin(n),onAnimationEnd:n=>t.onAnimationEnd(e,n),onWindowClose:n=>t.onWindowClose(e,n)}),[t,e])}function N(){let e=(0,R.use)(U);if(!e)throw Error(`useSidebarInternal must be used within a SidebarProvider.`);return e}function P({defaultLeftOpen:e=!0,defaultRightOpen:t=!1,cookiePrefix:n=B,children:r}){let[i,a]=(0,R.useState)(()=>{let r=O(`${n}_left_state`),i=O(`${n}_right_state`),a=O(`${n}_left_popped`)===`true`,o=O(`${n}_right_popped`)===`true`,s=j(O(`${n}_left_popout_features`)),c=j(O(`${n}_right_popout_features`));return{left:{open:r===null?e:r===`true`,isPoppedOut:a,isAnimating:!1,popoutFeatures:s},right:{open:i===null?t:i===`true`,isPoppedOut:o,isAnimating:!1,popoutFeatures:c}}}),[o,s]=(0,R.useState)(()=>({left:O(`${n}_left_menu`),right:O(`${n}_right_menu`)})),[c,l]=(0,R.useState)(()=>{let e=O(`${n}_left_toggle_menu`),t=O(`${n}_right_toggle_menu`);return{left:e?JSON.parse(e):{},right:t?JSON.parse(t):{}}}),u=(0,R.useRef)({left:new Set,right:new Set}),d=(0,R.useRef)({left:new Set,right:new Set}),f=(0,R.useRef)({left:null,right:null}),p=(0,R.useCallback)((e,t)=>{a(r=>{let i=r[e].open,a=typeof t==`function`?t(i):t;return k(`${n}_${e}_state`,a),{...r,[e]:{...r[e],open:a}}})},[n]),m=(0,R.useCallback)(e=>{p(e,e=>!e)},[p]),h=(0,R.useCallback)((e,t)=>{t?k(`${n}_${e}_popout_features`,JSON.stringify(t)):k(`${n}_${e}_popout_features`,null),a(n=>({...n,[e]:{...n[e],popoutFeatures:t}}))},[n]),g=(0,R.useCallback)((e,t)=>{k(`${n}_${e}_popped`,t?!0:null),t||k(`${n}_${e}_popout_features`,null),a(n=>({...n,[e]:{...n[e],isPoppedOut:t,popoutFeatures:t?n[e].popoutFeatures:null}}))},[n]),_=(0,R.useCallback)(e=>{a(t=>({...t,[e]:{...t[e],isAnimating:!0}}))},[]),v=(0,R.useCallback)((e,t)=>{a(t=>({...t,[e]:{...t[e],isAnimating:!1}}));for(let n of u.current[e])n(t)},[]),y=(0,R.useCallback)((e,t)=>{for(let n of d.current[e])n(t)},[]),b=(0,R.useCallback)((e,t)=>(u.current[e].add(t),()=>{u.current[e].delete(t)}),[]),x=(0,R.useCallback)((e,t)=>(d.current[e].add(t),()=>{d.current[e].delete(t)}),[]),S=(0,R.useCallback)((e,t)=>{f.current[e]=t},[]),C=(0,R.useCallback)((e=`left`)=>{let t=f.current[e];t&&t()},[]),w=(0,R.useCallback)((e=`left`)=>{g(e,!1);let t=window.opener;t&&!t.closed&&window.close()},[g]),T=(0,R.useCallback)((e,t)=>{s(r=>(k(`${n}_${e}_menu`,t),{...r,[e]:t}))},[n]),E=(0,R.useCallback)((e,t,r)=>{l(i=>{let a={...i[e],[t]:r},o={...i,[e]:a};return k(`${n}_${e}_toggle_menu`,JSON.stringify(o)),o})},[n]),D=(0,R.useMemo)(()=>({isOpen:e=>i[e].open,getState:e=>i[e].open?`expanded`:`collapsed`,isPoppedOut:e=>i[e].isPoppedOut,isAnimating:e=>i[e].isAnimating,getPopoutFeatures:e=>i[e].popoutFeatures,setOpen:p,toggleSidebar:m,setIsPoppedOut:g,popout:C,popin:w,getActiveMenu:e=>o[e],setActiveMenu:T,getToggleMenuState:(e,t)=>c[e][t],setToggleMenuState:E,onAnimationEnd:b,onWindowClose:x,open:i.left.open,state:i.left.open?`expanded`:`collapsed`,animating:i.left.isAnimating}),[p,m,g,C,w,T,E,b,x,i,o,c]),A=(0,R.useMemo)(()=>({cookiePrefix:n,registerPopoutTrigger:S,triggerPopout:C,notifyAnimationStart:_,notifyAnimationEnd:v,notifyWindowClose:y,savePopoutFeatures:h}),[n,S,C,_,v,y,h]);return(0,z.jsx)(H.Provider,{value:D,children:(0,z.jsx)(U.Provider,{value:A,children:r})})}function F(e,t,n,r,i){let[a,o]=(0,R.useState)(e),[s,c]=(0,R.useState)(e),[l,u]=(0,R.useState)(!1),[d,f]=(0,R.useState)(e),p=(0,R.useRef)(n),m=(0,R.useRef)(null);(0,R.useEffect)(()=>{let t=p.current&&!n&&!e;p.current=n,t&&(m.current!==null&&(cancelAnimationFrame(m.current),m.current=null),o(!1),c(!1),u(!1),i?.(!1))},[n,e,i]);let h=(0,R.useCallback)(()=>{a||(o(!0),c(!t))},[a,t]),g=(0,R.useCallback)(()=>{if(c(!1),n||!t){o(!1),u(!1),i?.(!1);return}u(!0)},[n,t,i]);e!==d&&(f(e),e?h():s&&g()),(0,R.useEffect)(()=>{!e&&!s&&!n&&t&&l&&r?.()},[e,s,n,t,l,r]),(0,R.useEffect)(()=>()=>{m.current!==null&&cancelAnimationFrame(m.current)},[]);let _=(0,R.useCallback)(e=>{e.getBoundingClientRect(),u(!0),r?.(),m.current!==null&&cancelAnimationFrame(m.current),m.current=requestAnimationFrame(()=>{c(!0),m.current=null})},[r]);return{isMounted:a,isExpanded:s,isAnimating:l,wrapperRef:(0,R.useCallback)(n=>{t&&n&&e&&!s&&!l&&_(n)},[t,e,s,l,_]),handleTransitionEnd:t=>{t.target===t.currentTarget&&t.propertyName===`width`&&(u(!1),e||o(!1),i?.(e))}}}function I({side:e=`left`,children:t,className:n,style:r,defaultWidth:a=320,minWidth:o=200,maxWidth:s=600,resizable:c=!0,animated:l=!0,allowPopout:u=!0,windowTitle:d=`${e.toUpperCase()} Sidebar Window`,popoutPlaceholder:f,onPopoutWindowClose:p}){let{open:m,isPoppedOut:h,setIsPoppedOut:g,popoutFeatures:_}=M(e),{cookiePrefix:y,registerPopoutTrigger:b,notifyAnimationStart:x,notifyAnimationEnd:S,notifyWindowClose:C,savePopoutFeatures:w}=N(),T=`${y}_${e}_width`,[E,D]=(0,R.useState)(()=>A(T,a)),[O,j]=(0,R.useState)(!1),P=(0,R.useRef)(null),I=(0,R.useCallback)(()=>{x(e)},[x,e]),L=(0,R.useCallback)(t=>{S(e,t)},[S,e]),B=(0,R.useCallback)(t=>{C(e,t),p?.(t)},[C,e,p]),V=(0,R.useCallback)(t=>{w(e,t)},[w,e]),{isMounted:H,isExpanded:U,isAnimating:W,wrapperRef:G,handleTransitionEnd:K}=F(m,l,h,I,L),q=(0,R.useCallback)(e=>{P.current=e,G(e)},[G]),J=()=>{j(!0)},Y=e=>{P.current&&(P.current.style.width=`${e}px`)},X=e=>{j(!1),D(e),P.current&&(P.current.style.width=`${e}px`),k(T,e)},Z=(0,R.useCallback)(t=>{g(e,t)},[g,e]),ee=(0,R.useCallback)(t=>{b(e,t)},[b,e]);if(!H&&!h)return null;let te=typeof E==`number`?`${E}px`:E,Q=m&&U,$=e===`left`,ne=$?`border-r`:`border-l`,re=$?{right:!0}:{left:!0};return(0,z.jsx)(`div`,{ref:q,onTransitionEnd:K,className:i(`relative box-border h-full shrink-0 bg-widget-body-background`,ne,l&&W||!Q?`overflow-hidden`:`overflow-visible`,l&&W&&!O&&`transition-[width,border-color] duration-300 ease-in-out`,!h&&Q?`border-widget-body-border`:`pointer-events-none border-transparent`),style:{width:!h&&Q?te:0},children:(0,z.jsx)(`div`,{className:`box-border size-full overflow-hidden`,children:(0,z.jsx)(v,{className:n,style:r,defaultWidth:E,defaultHeight:`100%`,minWidth:o,maxWidth:s,resizable:c&&Q&&!h,resizeDirections:re,allowPopout:u,windowTitle:d,isPoppedOut:h,initialPopoutFeatures:_,onPopoutFeaturesChange:V,onPopoutChange:Z,onWindowClose:B,onResizeStart:J,onResize:Y,onResizeStop:X,registerPopoutTrigger:ee,popoutPlaceholder:f,showPlaceholderOnPopout:!1,children:t})})})}function L({side:e=`left`,variant:t=`ghost`,size:n=`sm`,className:r,children:a,...s}){let{toggle:c,open:l}=M(e),u=e===`left`?b:C;return(0,z.jsx)(o,{variant:t,size:n,iconOnly:!0,onClick:c,"aria-label":`${e} 사이드바 ${l?`접기`:`펼치기`}`,className:i(`size-6 p-0`,r),...s,children:a||(0,z.jsx)(u,{className:`size-3.5`})})}var R,z,B,V,H,U;function W(){return(W=e((()=>{R=t(),x(),w(),r(),a(),_(),z=n(),B=`sidebar`,V=604800,H=(0,R.createContext)(null),U=(0,R.createContext)(null),P.__docgenInfo={description:``,methods:[],displayName:`SidebarProvider`,props:{defaultLeftOpen:{defaultValue:{value:`true`,computed:!1},required:!1},defaultRightOpen:{defaultValue:{value:`false`,computed:!1},required:!1},cookiePrefix:{defaultValue:{value:`'sidebar'`,computed:!1},required:!1}}},I.__docgenInfo={description:``,methods:[],displayName:`SidebarContent`,props:{side:{defaultValue:{value:`'left'`,computed:!1},required:!1},defaultWidth:{defaultValue:{value:`320`,computed:!1},required:!1},minWidth:{defaultValue:{value:`200`,computed:!1},required:!1},maxWidth:{defaultValue:{value:`600`,computed:!1},required:!1},resizable:{defaultValue:{value:`true`,computed:!1},required:!1},animated:{defaultValue:{value:`true`,computed:!1},required:!1},allowPopout:{defaultValue:{value:`true`,computed:!1},required:!1}}},L.__docgenInfo={description:``,methods:[],displayName:`SidebarTrigger`,props:{side:{defaultValue:{value:`'left'`,computed:!1},required:!1},variant:{defaultValue:{value:`'ghost'`,computed:!1},required:!1},size:{defaultValue:{value:`'sm'`,computed:!1},required:!1}}}})))()}var G,K,q,J,Y,X;function Z(){return(Z=e((()=>{l(),d(),D(),a(),p(),W(),h(),G=n(),K={title:`Layout/Sidebar`,component:I,parameters:{layout:`fullscreen`}},q={render:()=>(0,G.jsx)(P,{defaultLeftOpen:!0,cookiePrefix:`areo_sidebar_demo`,children:(0,G.jsxs)(`div`,{className:`bg-background flex h-screen w-full flex-col overflow-hidden`,children:[(0,G.jsxs)(`header`,{className:`flex h-10 shrink-0 items-center justify-between border-b border-secondary-border bg-white px-3 select-none`,children:[(0,G.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,G.jsx)(L,{side:`left`}),(0,G.jsx)(`span`,{className:`font-sans text-xs font-semibold text-secondary-foreground`,children:`GIS Workspace (Single Sidebar)`})]}),(0,G.jsx)(`span`,{className:`font-mono text-2xs text-muted-foreground`,children:`deimos layout match`})]}),(0,G.jsxs)(`div`,{className:`relative flex flex-1 overflow-hidden`,children:[(0,G.jsx)(I,{side:`left`,defaultWidth:300,minWidth:200,maxWidth:500,windowTitle:`레이어 관리자 - 독립 창`,children:(0,G.jsxs)(`div`,{className:`bg-background box-border h-full w-full min-w-0 p-3 font-sans text-xs`,children:[(0,G.jsxs)(`div`,{className:`mb-3 flex items-center justify-between border-b border-secondary-border pb-2`,children:[(0,G.jsxs)(`div`,{className:`flex items-center gap-1.5 font-semibold text-secondary-foreground`,children:[(0,G.jsx)(u,{className:`size-3.5 text-primary`}),(0,G.jsx)(`span`,{children:`레이어 트리`})]}),(0,G.jsx)(o,{size:`sm`,variant:`ghost`,className:`h-5 px-1.5 text-2xs`,children:`새 레이어`})]}),(0,G.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,G.jsx)(g,{size:`sm`,placeholder:`레이어 필터링...`}),(0,G.jsxs)(`div`,{className:`mt-2 flex flex-col gap-1.5`,children:[(0,G.jsx)(m,{size:`sm`,defaultChecked:!0,children:`시도 행정경계 (EPSG:5179)`}),(0,G.jsx)(m,{size:`sm`,defaultChecked:!0,children:`연속지적도 폴리곤`}),(0,G.jsx)(m,{size:`sm`,defaultChecked:!1,children:`강우 관측소 포인트 (TCM_COU)`})]})]})]})}),(0,G.jsx)(`main`,{className:`relative flex flex-1 items-center justify-center bg-surface-muted/20 p-6 text-center`,children:(0,G.jsxs)(`div`,{className:`max-w-md border border-dashed border-secondary-border bg-white/70 p-6 shadow-xs`,children:[(0,G.jsx)(`h3`,{className:`font-sans text-sm font-bold text-secondary-foreground`,children:`Map Viewport Area`}),(0,G.jsxs)(`p`,{className:`mt-2 text-xs leading-relaxed text-muted-foreground`,children:[`상단 좌측의`,` `,(0,G.jsx)(`code`,{className:`bg-surface-muted px-1 py-0.5 font-mono text-2xs`,children:`SidebarTrigger`}),``,`를 클릭하면 사이드바가 부드럽게 닫히거나 열리며, 우측 경계를 드래그하여 패널 폭을 조절할 수 있습니다.`]})]})})]})]})})},J={render:()=>(0,G.jsx)(P,{defaultLeftOpen:!0,defaultRightOpen:!0,cookiePrefix:`areo_sidebar_dual_demo`,children:(0,G.jsxs)(`div`,{className:`bg-background flex h-screen w-full flex-col overflow-hidden`,children:[(0,G.jsxs)(`header`,{className:`flex h-10 shrink-0 items-center justify-between border-b border-secondary-border bg-surface-muted/40 px-3 select-none`,children:[(0,G.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,G.jsx)(L,{side:`left`}),(0,G.jsx)(`span`,{className:`font-sans text-xs font-semibold text-secondary-foreground`,children:`벡터 데이터 에디터`})]}),(0,G.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,G.jsx)(`span`,{className:`text-2xs text-muted-foreground`,children:`속성 패널`}),(0,G.jsx)(L,{side:`right`})]})]}),(0,G.jsxs)(`div`,{className:`relative flex flex-1 overflow-hidden`,children:[(0,G.jsx)(I,{side:`left`,defaultWidth:280,minWidth:200,maxWidth:450,windowTitle:`좌측 레이어 탐색기`,children:(0,G.jsxs)(`div`,{className:`bg-background box-border h-full w-full min-w-0 p-3 font-sans text-xs`,children:[(0,G.jsxs)(`div`,{className:`mb-2 flex items-center gap-1.5 font-semibold text-secondary-foreground`,children:[(0,G.jsx)(E,{className:`size-3.5 text-primary`}),(0,G.jsx)(`span`,{children:`탐색기 (Left)`})]}),(0,G.jsxs)(`div`,{className:`flex flex-col gap-2 pt-2`,children:[(0,G.jsx)(g,{size:`sm`,placeholder:`검색어 입력...`}),(0,G.jsxs)(`div`,{className:`flex flex-col gap-1 pt-1`,children:[(0,G.jsx)(m,{size:`sm`,defaultChecked:!0,children:`도로망 링크`}),(0,G.jsx)(m,{size:`sm`,defaultChecked:!0,children:`교차로 노드`})]})]})]})}),(0,G.jsx)(`main`,{className:`flex flex-1 flex-col items-center justify-center bg-surface-muted/20 p-6 text-center`,children:(0,G.jsxs)(`div`,{className:`max-w-md border border-dashed border-secondary-border bg-white/70 p-6 shadow-xs`,children:[(0,G.jsx)(`h3`,{className:`font-sans text-sm font-bold text-secondary-foreground`,children:`듀얼 워크스페이스`}),(0,G.jsx)(`p`,{className:`mt-2 text-xs leading-relaxed text-muted-foreground`,children:`양쪽 테두리 핸들을 당겨 패널 폭을 조절할 수 있으며, 팝아웃 버튼을 누르면 브라우저 독립 창으로 분리됩니다.`})]})}),(0,G.jsx)(I,{side:`right`,defaultWidth:320,minWidth:220,maxWidth:500,windowTitle:`우측 속성 편집 창`,children:(0,G.jsxs)(`div`,{className:`bg-background box-border h-full w-full min-w-0 p-3 font-sans text-xs`,children:[(0,G.jsxs)(`div`,{className:`mb-2 flex items-center gap-1.5 font-semibold text-secondary-foreground`,children:[(0,G.jsx)(f,{className:`size-3.5 text-primary`}),(0,G.jsx)(`span`,{children:`속성 및 스타일 (Right)`})]}),(0,G.jsxs)(`div`,{className:`flex flex-col gap-3 pt-2`,children:[(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`span`,{className:`mb-1 block text-2xs font-medium text-muted-foreground`,children:`선택 피처 ID`}),(0,G.jsx)(g,{size:`sm`,defaultValue:`FEAT_002941`,readOnly:!0})]}),(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`span`,{className:`mb-1 block text-2xs font-medium text-muted-foreground`,children:`스트로크 색상`}),(0,G.jsx)(g,{size:`sm`,defaultValue:`#1E40AF`})]})]})]})})]})]})})},Y={render:()=>{function e(){let{open:e,toggle:t,popout:n}=M(`left`);return(0,G.jsxs)(`div`,{className:`flex items-center gap-2 border-b border-secondary-border bg-white px-3 py-1.5`,children:[(0,G.jsxs)(o,{size:`sm`,variant:e?`primary`:`secondary`,onClick:t,children:[`사이드바 `,e?`접기`:`펼치기`]}),(0,G.jsx)(o,{size:`sm`,variant:`ghost`,onClick:()=>n(),children:`독립 창으로 분리 (Popout)`}),(0,G.jsxs)(`span`,{className:`font-mono text-2xs text-muted-foreground`,children:[`Current State: `,e?`expanded`:`collapsed`]})]})}return(0,G.jsx)(P,{defaultLeftOpen:!0,cookiePrefix:`areo_sidebar_hook_demo`,children:(0,G.jsxs)(`div`,{className:`bg-background flex h-screen w-full flex-col overflow-hidden`,children:[(0,G.jsx)(e,{}),(0,G.jsxs)(`div`,{className:`relative flex flex-1 overflow-hidden`,children:[(0,G.jsx)(I,{side:`left`,defaultWidth:280,children:(0,G.jsxs)(`div`,{className:`bg-background box-border h-full w-full min-w-0 p-3 font-sans text-xs`,children:[(0,G.jsx)(`p`,{className:`font-semibold text-secondary-foreground`,children:`사이드바 본문`}),(0,G.jsx)(`p`,{className:`mt-1 text-2xs leading-relaxed text-muted-foreground`,children:`상단 커스텀 툴바 버튼을 통해 프로그래밍 방식으로 제어됩니다.`})]})}),(0,G.jsx)(`main`,{className:`flex flex-1 items-center justify-center bg-surface-muted/20`,children:(0,G.jsx)(`span`,{className:`font-sans text-xs text-muted-foreground`,children:`메인 뷰포트`})})]})]})})}},X=[`Default`,`DualSidebar`,`HookController`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <SidebarProvider defaultLeftOpen={true} cookiePrefix="areo_sidebar_demo">
        <div className="bg-background flex h-screen w-full flex-col overflow-hidden">
          {/* 상단 툴바 */}
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

          {/* 메인 작업 영역 */}
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

            {/* 메인 지도 캔버스 영역 */}
            <main className="relative flex flex-1 items-center justify-center bg-surface-muted/20 p-6 text-center">
              <div className="max-w-md border border-dashed border-secondary-border bg-white/70 p-6 shadow-xs">
                <h3 className="font-sans text-sm font-bold text-secondary-foreground">
                  Map Viewport Area
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  상단 좌측의{' '}
                  <code className="bg-surface-muted px-1 py-0.5 font-mono text-2xs">
                    SidebarTrigger
                  </code>
                  {''}를 클릭하면 사이드바가 부드럽게 닫히거나 열리며, 우측
                  경계를 드래그하여 패널 폭을 조절할 수 있습니다.
                </p>
              </div>
            </main>
          </div>
        </div>
      </SidebarProvider>;
  }
}`,...q.parameters?.docs?.source},description:{story:`1. 기본 단일 사이드바 (실제 앱과 동일한 h-screen 전체 화면 레이아웃)`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <SidebarProvider defaultLeftOpen={true} defaultRightOpen={true} cookiePrefix="areo_sidebar_dual_demo">
        <div className="bg-background flex h-screen w-full flex-col overflow-hidden">
          {/* 상단 툴바 */}
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

          {/* 메인 레이아웃 */}
          <div className="relative flex flex-1 overflow-hidden">
            {/* 좌측 사이드바 */}
            <SidebarContent side="left" defaultWidth={280} minWidth={200} maxWidth={450} windowTitle="좌측 레이어 탐색기">
              <div className="bg-background box-border h-full w-full min-w-0 p-3 font-sans text-xs">
                <div className="mb-2 flex items-center gap-1.5 font-semibold text-secondary-foreground">
                  <SlidersIcon className="size-3.5 text-primary" />
                  <span>탐색기 (Left)</span>
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  <TextField size="sm" placeholder="검색어 입력..." />
                  <div className="flex flex-col gap-1 pt-1">
                    <Checkbox size="sm" defaultChecked>
                      도로망 링크
                    </Checkbox>
                    <Checkbox size="sm" defaultChecked>
                      교차로 노드
                    </Checkbox>
                  </div>
                </div>
              </div>
            </SidebarContent>

            {/* 중앙 뷰포트 */}
            <main className="flex flex-1 flex-col items-center justify-center bg-surface-muted/20 p-6 text-center">
              <div className="max-w-md border border-dashed border-secondary-border bg-white/70 p-6 shadow-xs">
                <h3 className="font-sans text-sm font-bold text-secondary-foreground">
                  듀얼 워크스페이스
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  양쪽 테두리 핸들을 당겨 패널 폭을 조절할 수 있으며, 팝아웃
                  버튼을 누르면 브라우저 독립 창으로 분리됩니다.
                </p>
              </div>
            </main>

            {/* 우측 사이드바 */}
            <SidebarContent side="right" defaultWidth={320} minWidth={220} maxWidth={500} windowTitle="우측 속성 편집 창">
              <div className="bg-background box-border h-full w-full min-w-0 p-3 font-sans text-xs">
                <div className="mb-2 flex items-center gap-1.5 font-semibold text-secondary-foreground">
                  <SettingsIcon className="size-3.5 text-primary" />
                  <span>속성 및 스타일 (Right)</span>
                </div>
                <div className="flex flex-col gap-3 pt-2">
                  <div>
                    <span className="mb-1 block text-2xs font-medium text-muted-foreground">
                      선택 피처 ID
                    </span>
                    <TextField size="sm" defaultValue="FEAT_002941" readOnly />
                  </div>
                  <div>
                    <span className="mb-1 block text-2xs font-medium text-muted-foreground">
                      스트로크 색상
                    </span>
                    <TextField size="sm" defaultValue="#1E40AF" />
                  </div>
                </div>
              </div>
            </SidebarContent>
          </div>
        </div>
      </SidebarProvider>;
  }
}`,...J.parameters?.docs?.source},description:{story:`2. 좌/우 듀얼 사이드바 (Dual Sidebar)`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => {
    function CustomToolbar() {
      const {
        open,
        toggle,
        popout
      } = useSidebar('left');
      return <div className="flex items-center gap-2 border-b border-secondary-border bg-white px-3 py-1.5">
          <Button size="sm" variant={open ? 'primary' : 'secondary'} onClick={toggle}>
            사이드바 {open ? '접기' : '펼치기'}
          </Button>
          <Button size="sm" variant="ghost" onClick={() => popout()}>
            독립 창으로 분리 (Popout)
          </Button>
          <span className="font-mono text-2xs text-muted-foreground">
            Current State: {open ? 'expanded' : 'collapsed'}
          </span>
        </div>;
    }
    return <SidebarProvider defaultLeftOpen={true} cookiePrefix="areo_sidebar_hook_demo">
        <div className="bg-background flex h-screen w-full flex-col overflow-hidden">
          <CustomToolbar />
          <div className="relative flex flex-1 overflow-hidden">
            <SidebarContent side="left" defaultWidth={280}>
              <div className="bg-background box-border h-full w-full min-w-0 p-3 font-sans text-xs">
                <p className="font-semibold text-secondary-foreground">
                  사이드바 본문
                </p>
                <p className="mt-1 text-2xs leading-relaxed text-muted-foreground">
                  상단 커스텀 툴바 버튼을 통해 프로그래밍 방식으로 제어됩니다.
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
  }
}`,...Y.parameters?.docs?.source},description:{story:`3. 외부 툴바 / 커스텀 제어형 스토리`,...Y.parameters?.docs?.description}}}})))()}Z();export{q as Default,J as DualSidebar,Y as HookController,X as __namedExportsOrder,K as default};