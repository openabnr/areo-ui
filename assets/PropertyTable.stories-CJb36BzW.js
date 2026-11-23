import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-Di8_Mevq.js";import{l as r,t as i}from"./utils-CXswP1E2.js";import{n as a,t as o}from"./dist-DxSsHBlF.js";import{n as s,t as c}from"./Checkbox-DbLYMU06.js";import{n as l,t as u}from"./TextField-BVv8ctPj.js";function d(e){return e.map((e,t)=>({key:e.key??`col-${t}`,text:e.title,checkbox:e.checkbox,width:e.width,align:e.align,resize:e.resize??!0}))}function f(e,t,n){return e.map((r,i)=>{let a=t[r.key];if(n&&i===e.length-1&&a===void 0)return`1fr`;let o=a??r.width;return o!==void 0&&o>0?`${o}px`:`1fr`}).join(` `)}function p(e,t,n,r){if(e<=0)return{startIndex:0,visibleCount:0,offsetY:0};let i=Number.isFinite(t)&&t>0?t:1,a=Number.isFinite(n)&&n>0?n:0,o=Number.isFinite(r)&&r>0?r:0,s=Math.max(Math.floor(a/i)-5,0),c=Math.floor(o/i+10);return{startIndex:s,visibleCount:Math.min(c,Math.max(e-s,0)),offsetY:s*i}}function m(e,t,n,r,i,a){let o={...e};return t.forEach((e,s)=>{if(i&&s===t.length-1){delete o[e.key];return}if(s===n){o[e.key]=r;return}if(o[e.key]===void 0){let t=a[s]?.offsetWidth;t!==void 0&&(o[e.key]=t)}}),o}function h(e,t,n,r,i,a){let o=n[t];if(!o)return null;let s=Number.isFinite(i)&&i>0?i:1,c=e-o.getBoundingClientRect().left;if(c<s)return null;let l=a&&r>=2&&t===r-2?n[t+1]:null;if(l){let t=l.getBoundingClientRect();if(t.left-e+t.width<s)return null}return c}function g(e,t,n){let r=e.dataset.rowIndex;if(r!==void 0){let e=Number(r);if(Number.isInteger(e)&&e>=0)return e}return n+t}function _(e){return Array.from(e.querySelectorAll(`tbody tr:not([data-empty-row="true"])`))}function v(e,t,n){_(e).forEach((e,r)=>{let i=g(e,r,n);e.classList.toggle(`select`,i===t)})}function ee(e,t,n){let[r,i]=(0,b.useState)({}),[a,o]=(0,b.useState)(null),s=(0,b.useRef)([]),c=(0,b.useRef)(null),l=(0,b.useRef)(null);return(0,b.useEffect)(()=>()=>{l.current?.()},[]),{customWidths:r,activeResizeIndex:a,colTrackRefs:s,handleResizeStart:(0,b.useCallback)((r,a)=>{a.preventDefault(),a.stopPropagation(),l.current?.(),c.current=r,o(r);let u=a.currentTarget.ownerDocument,d=r=>{let a=c.current;if(a===null)return;let o=h(r.clientX,a,s.current,e.length,t,n);o!==null&&i(t=>m(t,e,a,o,n,s.current))},f=()=>{c.current=null,o(null),u.removeEventListener(`mousemove`,d),u.removeEventListener(`mouseup`,f),l.current=null};l.current=f,u.addEventListener(`mousemove`,d),u.addEventListener(`mouseup`,f)},[e,t,n])}}function te({tableBodyRef:e,variant:t,selectedRow:n,isControlledSelection:r,rowOffset:i,content:a,virtualRowCount:o,virtualVisibleCount:s,onItemClick:c,onSelectInternal:l}){(0,b.useEffect)(()=>{let a=e.current;if(!a||t!==`selectable`)return;v(a,n,i);let o=e=>{if(!(e.target instanceof Element)||e.target.closest(E))return;let t=e.target.closest(`tr`);if(!t||!a.contains(t)||t.dataset.emptyRow===`true`)return;let n=_(a).indexOf(t);if(n===-1)return;let o=g(t,n,i);r||(v(a,o,i),l(o)),c?.(o)};return a.addEventListener(`click`,o),()=>{a.removeEventListener(`click`,o)}},[e,t,n,r,a,c,l,i,o,s])}function ne({virtualize:e,range:t}){let{rowCount:n,rowHeight:r,renderRow:i,noData:a}=e;if(n===0)return a?(0,x.jsx)(`tbody`,{children:(0,x.jsx)(`tr`,{"data-empty-row":`true`,children:(0,x.jsx)(`td`,{style:{gridColumn:`1 / -1`,width:`100%`,minHeight:40,position:`relative`,justifyContent:`center`},children:a})})}):null;let o=[];for(let e=0;e<t.visibleCount;e+=1){let n=t.startIndex+e;o.push(i(n,{height:r,overflow:`visible`,transform:`translateY(${t.offsetY}px)`}))}return(0,x.jsx)(`tbody`,{children:o})}function re({scrollHeadRef:e,visibleHeaders:t,tableWidthFixed:n,headerGridTemplate:r,columns:a,headerStyle:o,checkProps:s}){return(0,x.jsx)(`div`,{ref:e,inert:!t||void 0,className:i(`head-scroll w-full shrink-0 overflow-hidden`,!t&&`invisible h-0 border-b-0`),children:(0,x.jsx)(`table`,{className:i(`scroll-header`,!n&&`w-max min-w-full`),style:{gridTemplateColumns:r},children:(0,x.jsx)(`thead`,{children:(0,x.jsxs)(`tr`,{children:[a.map(e=>{let t=typeof e.text==`string`&&e.text.trim()?e.text:`전체 선택`;return(0,x.jsx)(`th`,{style:{...o,justifyContent:e.align?w[e.align]:void 0,textAlign:e.align?T[e.align]:void 0},children:e.checkbox?(0,x.jsx)(c,{"aria-label":t,checked:s?.checked??!1,indeterminate:s?.indeterminate??!1,disabled:s?.disabled??!1,onCheckedChange:e=>s?.onChange?.(!!e)}):(0,x.jsx)(`span`,{children:e.text})},e.key)}),(0,x.jsx)(`th`,{className:`p-0`})]})})})})}function ie({scrollResizeRef:e,tableWidthFixed:t,headerGridTemplate:n,columns:r,activeResizeIndex:a,colTrackRefs:o,onResizeStart:s}){return(0,x.jsx)(`div`,{ref:e,className:`pointer-events-none absolute inset-0 z-20 overflow-hidden`,children:(0,x.jsxs)(`div`,{className:i(`grid h-full`,t?`w-full`:`w-max min-w-full`),style:{gridTemplateColumns:n},children:[r.map((e,t)=>{let n=e.resize&&t!==r.length-1;return(0,x.jsx)(`div`,{ref:e=>(o.current[t]=e,()=>{o.current[t]===e&&(o.current[t]=null)}),className:`relative h-full`,children:n&&(0,x.jsx)(`button`,{type:`button`,tabIndex:-1,"aria-label":`컬럼 너비 조절`,onMouseDown:e=>s(t,e),className:i(`resize-handle pointer-events-auto absolute top-0 -right-1 bottom-0 z-10 block w-1.75 cursor-ew-resize border-0 p-0 transition-colors focus-visible:outline-none`,a===t?`bg-resizable-background/30`:`bg-transparent hover:bg-resizable-background/20 active:bg-resizable-background/30`)})},`resize-track-${e.key}`)}),(0,x.jsx)(`div`,{className:`h-full`})]})})}function y({headers:e,visibleHeaders:t=!0,minCellWidth:n=60,content:r,virtualize:a,tableWidthFixed:o=!0,noScroll:s=!1,headerStyle:c,variant:l=`default`,resizableColumn:u=!0,onItemClick:m,selectIndex:h,style:g,className:_,checkProps:v,ref:y,...S}){let w=(0,b.useMemo)(()=>d(e),[e]),[T,E]=(0,b.useState)(h??-1),[D,O]=(0,b.useState)(0),[k,A]=(0,b.useState)(200),[j,M]=(0,b.useState)(s?0:17),N=h!==void 0,P=h??T,F=(0,b.useRef)(null),I=(0,b.useRef)(null),L=(0,b.useRef)(null),R=(0,b.useRef)(null),z=!r&&!!a,B=a?.rowCount??0,V=a?.rowHeight??0,H=(0,b.useMemo)(()=>z?p(B,V,D,k):{startIndex:0,visibleCount:0,offsetY:0},[z,B,V,D,k]);(0,b.useEffect)(()=>{let e=L.current;if(!e)return;let t=()=>{A(e.clientHeight);let t=s?0:Math.max(0,e.offsetWidth-e.clientWidth);M(t)},n=requestAnimationFrame(t),r=new ResizeObserver(t);return r.observe(e),()=>{cancelAnimationFrame(n),r.disconnect()}},[s,r,B]);let{customWidths:U,activeResizeIndex:W,colTrackRefs:G,handleResizeStart:K}=ee(w,n,o);te({tableBodyRef:R,variant:l,selectedRow:P,isControlledSelection:N,rowOffset:z?H.startIndex:0,content:r,virtualRowCount:B,virtualVisibleCount:H.visibleCount,onItemClick:m,onSelectInternal:E});let q=e=>{let t=e.currentTarget;F.current&&(F.current.scrollLeft=t.scrollLeft),I.current&&(I.current.scrollLeft=t.scrollLeft),z&&O(t.scrollTop)},J=f(w,U,o),Y=`${J} ${j}px`,X=z&&B>0&&a?`repeat(${B}, ${a.rowHeight}px)`:void 0,Z=!z&&typeof r==`function`?r():r;return(0,x.jsxs)(`div`,{ref:y,style:g,className:i(C({variant:l}),s&&`border-b-0`,_),...S,children:[(0,x.jsx)(re,{scrollHeadRef:F,visibleHeaders:t,tableWidthFixed:o,headerGridTemplate:Y,columns:w,headerStyle:c,checkProps:v}),(0,x.jsx)(`div`,{ref:L,onScroll:q,className:i(`scroll-body min-h-0 w-full flex-1 bg-white`,o?`overflow-x-hidden`:`overflow-x-auto`,s?`h-auto overflow-y-hidden`:`overflow-y-scroll`),children:(0,x.jsxs)(`table`,{ref:R,className:i(`body-table`,!o&&`w-max min-w-full`),style:{gridTemplateColumns:J,gridTemplateRows:X,position:z?`relative`:void 0,height:z&&B===0?`auto`:void 0},children:[!z&&Z,z&&a&&(0,x.jsx)(ne,{virtualize:a,range:H})]})}),u&&(0,x.jsx)(ie,{scrollResizeRef:I,tableWidthFixed:o,headerGridTemplate:Y,columns:w,activeResizeIndex:W,colTrackRefs:G,onResizeStart:K})]})}var b,x,S,C,w,T,E;function D(){return(D=e((()=>{b=t(),a(),r(),s(),x=n(),S={width:`100%`,margin:0,height:40,lineHeight:`40px`,textAlign:`center`,color:`var(--areo-muted-foreground, #666666)`,fontSize:12},C=o(`areo-property-table relative box-border flex w-full flex-col overflow-hidden border border-secondary-border border-t-secondary-foreground bg-white font-sans text-xs text-secondary-foreground select-none`,{variants:{variant:{default:``,selectable:`is-selectable`}},defaultVariants:{variant:`default`}}),w={left:`flex-start`,center:`center`,right:`flex-end`},T={left:`left`,center:`center`,right:`right`},E=`.areo-checkbox, [role="checkbox"], input[type="checkbox"], button, label`,y.__docgenInfo={description:``,methods:[],displayName:`PropertyTable`,props:{visibleHeaders:{defaultValue:{value:`true`,computed:!1},required:!1},minCellWidth:{defaultValue:{value:`60`,computed:!1},required:!1},tableWidthFixed:{defaultValue:{value:`true`,computed:!1},required:!1},noScroll:{defaultValue:{value:`false`,computed:!1},required:!1},variant:{defaultValue:{value:`'default'`,computed:!1},required:!1},resizableColumn:{defaultValue:{value:`true`,computed:!1},required:!1}}}})))()}function O(){return new Promise(e=>{globalThis.requestAnimationFrame(()=>{e()})})}function k(e){let[t,n]=(0,M.useState)(1);return(0,N.jsxs)(`div`,{className:`flex flex-col gap-2 font-sans text-xs`,children:[(0,N.jsxs)(`div`,{className:`flex items-center justify-between text-muted-foreground`,children:[(0,N.jsx)(`span`,{children:`행을 클릭하여 선택 상태를 확인하세요.`}),(0,N.jsxs)(`span`,{className:`font-medium text-primary`,children:[`선택된 행 인덱스: `,t]})]}),(0,N.jsx)(y,{headers:B,variant:`selectable`,selectIndex:t,onItemClick:t=>{n(t),e.onItemClick?.(t)},style:{height:180},content:(0,N.jsx)(`tbody`,{children:V.map((e,t)=>(0,N.jsxs)(`tr`,{"data-row-index":t,children:[(0,N.jsx)(`td`,{children:(0,N.jsx)(`span`,{children:e.name})}),(0,N.jsx)(`td`,{className:`justify-center`,children:(0,N.jsx)(`span`,{children:e.type})}),(0,N.jsx)(`td`,{children:(0,N.jsx)(`span`,{children:e.value})})]},e.id))})})]})}function A(){let[e,t]=(0,M.useState)(()=>new Set([`layer_id`,`srid`])),n=e.size===V.length,r=e.size>0&&e.size<V.length,i=()=>{t(e=>e.size===V.length?new Set:new Set(V.map(e=>e.id)))},a=e=>{t(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})};return(0,N.jsx)(y,{headers:[{key:`check`,title:``,checkbox:!0,width:32,align:`center`,resize:!1},{key:`prop`,title:`필드명`,width:160},{key:`value`,title:`기본값`}],variant:`selectable`,style:{height:180},checkProps:{checked:n,indeterminate:r,onChange:i},content:(0,N.jsx)(`tbody`,{children:V.map(t=>{let n=e.has(t.id);return(0,N.jsxs)(`tr`,{children:[(0,N.jsx)(`td`,{className:`justify-center`,children:(0,N.jsx)(c,{"aria-label":`${t.name} 선택`,checked:n,onCheckedChange:()=>a(t.id)})}),(0,N.jsx)(`td`,{children:(0,N.jsx)(`span`,{children:t.name})}),(0,N.jsx)(`td`,{children:(0,N.jsx)(`span`,{children:t.value})})]},t.id)})})})}function j(){let[e,t]=(0,M.useState)([{key:`strokeColor`,label:`선 색상`,value:`#2190FF`},{key:`strokeWidth`,label:`선 두께 (px)`,value:`2.5`},{key:`labelField`,label:`라벨 필드`,value:`ROAD_NAME`},{key:`opacity`,label:`불투명도 (%)`,value:`85`}]),n=(e,n)=>{t(t=>t.map((t,r)=>r===e?{...t,value:n}:t))};return(0,N.jsx)(y,{headers:[{key:`label`,title:`심볼 속성`,width:160},{key:`value`,title:`설정값`}],visibleHeaders:!1,noScroll:!0,content:(0,N.jsx)(`tbody`,{children:e.map((e,t)=>(0,N.jsxs)(`tr`,{children:[(0,N.jsx)(`th`,{scope:`row`,children:(0,N.jsx)(`span`,{children:e.label})}),(0,N.jsx)(`td`,{className:`p-0`,children:(0,N.jsx)(u,{variant:`ghost`,size:`sm`,clearable:!0,value:e.value,onChange:e=>n(t,e.target.value)})})]},e.key))})})}var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{M=t(),s(),D(),l(),N=n(),{expect:P,fireEvent:F,fn:I,userEvent:L,within:R}=__STORYBOOK_MODULE_TEST__,z={title:`Components/PropertyTable`,component:y,tags:[`autodocs`],args:{onItemClick:I()},parameters:{layout:`centered`},argTypes:{variant:{control:`radio`,options:[`default`,`selectable`],description:`테이블 행 선택 가능 여부 및 호버 스타일 변형입니다.`},visibleHeaders:{control:`boolean`,description:`상단 컬럼 헤더 표시 여부입니다.`},resizableColumn:{control:`boolean`,description:`마우스 드래그를 통한 컬럼 너비 조절 허용 여부입니다.`},tableWidthFixed:{control:`boolean`,description:"마지막 컬럼을 `1fr`로 고정하여 가로 스크롤을 숨길지 여부입니다."},noScroll:{control:`boolean`,description:`세로 스크롤바를 비활성화하고 내용 높이에 맞출지 여부입니다.`},minCellWidth:{control:`number`,description:`컬럼 리사이징 시 허용되는 최소 셀 너비(px)입니다.`}},decorators:[e=>(0,N.jsx)(`div`,{className:`w-150`,children:(0,N.jsx)(e,{})})]},B=[{key:`prop`,title:`속성명`,width:160},{key:`type`,title:`타입`,width:120,align:`center`},{key:`value`,title:`값`}],V=[{id:`layer_id`,name:`레이어 ID`,type:`String`,value:`L_ROAD_LINK_2026`},{id:`srid`,name:`좌표계 (SRID)`,type:`Integer`,value:`5186`},{id:`geom_type`,name:`지오메트리`,type:`Geometry`,value:`MultiLineString`},{id:`feature_cnt`,name:`객체 수`,type:`Integer`,value:`14,820`},{id:`min_zoom`,name:`최소 줌 레벨`,type:`Double`,value:`10.0`},{id:`max_zoom`,name:`최대 줌 레벨`,type:`Double`,value:`19.5`},{id:`visible`,name:`화면 표시`,type:`Boolean`,value:`true`},{id:`editable`,name:`편집 가능`,type:`Boolean`,value:`false`}],H={args:{headers:B,variant:`default`,visibleHeaders:!0,resizableColumn:!0,tableWidthFixed:!0,noScroll:!1,style:{height:180},content:(0,N.jsx)(`tbody`,{children:V.map(e=>(0,N.jsxs)(`tr`,{children:[(0,N.jsx)(`td`,{children:(0,N.jsx)(`span`,{children:e.name})}),(0,N.jsx)(`td`,{className:`justify-center text-muted-foreground`,children:(0,N.jsx)(`span`,{children:e.type})}),(0,N.jsx)(`td`,{children:(0,N.jsx)(`span`,{children:e.value})})]},e.id))})},play:async({canvasElement:e})=>{await O();let t=R(e).getAllByRole(`button`,{name:`컬럼 너비 조절`}),n=t[0],r=t[1],i=n.parentElement?.getBoundingClientRect().left??n.getBoundingClientRect().left;await F.mouseDown(n,{clientX:i+160}),await F.mouseMove(document.body,{clientX:i+20}),await F.mouseMove(document.body,{clientX:i+220}),await F.mouseUp(document.body);let a=(r.parentElement?.nextElementSibling)?.getBoundingClientRect().right??i+580;await F.mouseDown(r,{clientX:r.getBoundingClientRect().left}),await F.mouseMove(document.body,{clientX:a-10}),await F.mouseMove(document.body,{clientX:a-140}),await F.mouseUp(document.body);let o=e.querySelector(`.scroll-body`);o&&await F.scroll(o,{target:{scrollTop:40,scrollLeft:10}})}},U={args:{headers:[{key:`prop`,title:`속성명`,width:220},{key:`type`,title:`타입`,width:220,align:`right`},{key:`value`,title:`값`,width:260}],tableWidthFixed:!1,style:{height:150},content:()=>(0,N.jsx)(`tbody`,{children:V.slice(0,4).map(e=>(0,N.jsxs)(`tr`,{children:[(0,N.jsx)(`td`,{children:(0,N.jsx)(`span`,{children:e.name})}),(0,N.jsx)(`td`,{children:(0,N.jsx)(`span`,{children:e.type})}),(0,N.jsx)(`td`,{children:(0,N.jsx)(`span`,{children:e.value})})]},e.id))})},play:async({canvasElement:e})=>{let t=R(e).getAllByRole(`button`,{name:`컬럼 너비 조절`}),n=t[0].getBoundingClientRect();await F.mouseDown(t[0],{clientX:n.left}),await F.mouseMove(document,{clientX:n.left+25}),await F.mouseUp(document)}},W={args:{headers:[{key:`header`,title:``,width:160},{key:`col2`,title:``,width:200},{key:`col3`,title:``}],visibleHeaders:!1,resizableColumn:!0,tableWidthFixed:!0,noScroll:!1,style:{height:180},content:(0,N.jsx)(`tbody`,{children:V.map(e=>(0,N.jsxs)(`tr`,{children:[(0,N.jsx)(`th`,{scope:`row`,children:(0,N.jsx)(`span`,{children:e.name})}),(0,N.jsx)(`td`,{children:(0,N.jsx)(`span`,{children:e.type})}),(0,N.jsx)(`td`,{children:(0,N.jsx)(`span`,{children:e.value})})]},e.id))})}},G={render:e=>(0,N.jsx)(k,{...e}),play:async({canvasElement:e,args:t})=>{let n=R(e);await L.click(n.getByText(`지오메트리`)),await P(t.onItemClick).toHaveBeenCalledWith(2),await P(n.getByText(`선택된 행 인덱스: 2`)).toBeInTheDocument()}},K={render:()=>(0,N.jsx)(A,{}),play:async({canvasElement:e})=>{let t=R(e),n=t.getByRole(`checkbox`,{name:`전체 선택`});await L.click(n);let r=t.getByRole(`checkbox`,{name:`레이어 ID 선택`});await L.click(r),await L.click(t.getByText(`좌표계 (SRID)`))}},q={render:()=>(0,N.jsxs)(`div`,{className:`flex flex-col gap-2 font-sans text-xs`,children:[(0,N.jsx)(`span`,{className:`text-muted-foreground`,children:`가상 스크롤 렌더링 (28px 고정 행 높이)`}),(0,N.jsx)(y,{headers:[{key:`seq`,title:`FID`,width:80,align:`right`},{key:`code`,title:`행정구역코드`,width:140,align:`center`},{key:`name`,title:`명칭`}],variant:`selectable`,style:{height:220},virtualize:{rowCount:200,rowHeight:28,renderRow:(e,t)=>(0,N.jsxs)(`tr`,{style:t,children:[(0,N.jsx)(`td`,{className:`justify-end font-mono text-muted-foreground`,style:t,children:(0,N.jsx)(`span`,{children:e+1})}),(0,N.jsx)(`td`,{className:`justify-center font-mono`,style:t,children:(0,N.jsx)(`span`,{children:`41135${String(e%999).padStart(3,`0`)}`})}),(0,N.jsx)(`td`,{style:t,children:(0,N.jsx)(`span`,{children:`성남시 분당구 공간객체 #${e+1}`})})]},e)}})]}),play:async({canvasElement:e})=>{let t=e.querySelector(`.scroll-body`);t&&await F.scroll(t,{target:{scrollTop:560}})}},J={render:()=>(0,N.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,N.jsx)(y,{headers:B,noScroll:!0,virtualize:{rowCount:0,rowHeight:28,renderRow:()=>null,noData:(0,N.jsx)(`p`,{style:S,children:`표시할 속성 데이터가 없습니다.`})}}),(0,N.jsx)(y,{headers:B,noScroll:!0,virtualize:{rowCount:0,rowHeight:28,renderRow:()=>null}})]})},Y={render:()=>(0,N.jsx)(j,{})},X={args:{headers:[{title:`선택`,checkbox:!0,width:48,align:`center`},{title:`키 없음(0)`,width:0},{title:`값`}],resizableColumn:!1,headerStyle:{backgroundColor:`#f8fafc`},checkProps:{checked:!1,disabled:!0},style:{height:150},content:(0,N.jsx)(`tbody`,{children:V.slice(0,4).map(e=>(0,N.jsxs)(`tr`,{children:[(0,N.jsx)(`td`,{}),(0,N.jsx)(`td`,{children:(0,N.jsx)(`span`,{children:e.name})}),(0,N.jsx)(`td`,{children:(0,N.jsx)(`span`,{children:e.value})})]},e.id))})},play:async({canvasElement:e})=>{let t=e.querySelector(`.scroll-body`);t&&await F.scroll(t,{target:{scrollTop:24,scrollLeft:8}})}},Z={render:()=>(0,N.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,N.jsx)(y,{headers:B,variant:`selectable`,style:{height:140},virtualize:{rowCount:0,rowHeight:28,renderRow:()=>null,noData:(0,N.jsx)(`p`,{style:S,children:`빈 행 클릭 테스트`})}}),(0,N.jsx)(y,{headers:B,variant:`selectable`,style:{height:140},content:(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`tbody`,{children:(0,N.jsxs)(`tr`,{"data-row-index":`invalid`,children:[(0,N.jsx)(`td`,{children:(0,N.jsx)(`span`,{children:`잘못된 인덱스 행`})}),(0,N.jsx)(`td`,{children:(0,N.jsx)(`span`,{children:`String`})}),(0,N.jsx)(`td`,{children:(0,N.jsx)(`span`,{children:`val`})})]})}),(0,N.jsx)(`tfoot`,{children:(0,N.jsxs)(`tr`,{children:[(0,N.jsx)(`td`,{children:(0,N.jsx)(`span`,{children:`푸터 행`})}),(0,N.jsx)(`td`,{children:(0,N.jsx)(`span`,{children:`-`})}),(0,N.jsx)(`td`,{children:(0,N.jsx)(`span`,{children:`-`})})]})})]})})]}),play:async({canvasElement:e})=>{let t=R(e);await L.click(t.getByText(`빈 행 클릭 테스트`));let n=t.getByText(`잘못된 인덱스 행`),r=n.firstChild;r&&r.dispatchEvent(new MouseEvent(`click`,{bubbles:!0})),await L.click(n),await L.click(t.getByText(`푸터 행`))}},Q=[`Default`,`UnfixedWidthAndFunctionContent`,`BodyRowHeader`,`Selectable`,`WithCheckboxHeader`,`VirtualizedRows`,`EmptyNoData`,`InlineEditableCells`,`NonResizableAndHeaderOptions`,`SelectableEdgeBranches`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    headers: BASIC_HEADERS,
    variant: 'default',
    visibleHeaders: true,
    resizableColumn: true,
    tableWidthFixed: true,
    noScroll: false,
    style: {
      height: 180
    },
    content: <tbody>
        {SAMPLE_PROPERTIES.map(item => <tr key={item.id}>
            <td>
              <span>{item.name}</span>
            </td>
            <td className="justify-center text-muted-foreground">
              <span>{item.type}</span>
            </td>
            <td>
              <span>{item.value}</span>
            </td>
          </tr>)}
      </tbody>
  },
  play: async ({
    canvasElement
  }) => {
    await waitNextFrame();
    const canvas = within(canvasElement);
    const handles = canvas.getAllByRole('button', {
      name: '컬럼 너비 조절'
    });
    const firstHandle = handles[0];
    const secondHandle = handles[1];
    const firstTrack = firstHandle.parentElement;
    const firstTrackLeft = firstTrack?.getBoundingClientRect().left ?? firstHandle.getBoundingClientRect().left;

    // 1) 첫 번째 컬럼 드래그: 최소 너비 미만(null) -> 정상 확장(computeNextColumnWidths 실행)
    await fireEvent.mouseDown(firstHandle, {
      clientX: firstTrackLeft + 160
    });
    await fireEvent.mouseMove(document.body, {
      clientX: firstTrackLeft + 20
    });
    await fireEvent.mouseMove(document.body, {
      clientX: firstTrackLeft + 220
    });
    await fireEvent.mouseUp(document.body);

    // 2) 마지막 직전 컬럼(activeIdx === columnCount - 2) 드래그:
    //    마지막 컬럼 최소 너비 침범(remaining < safeMinWidth) -> 정상 위치 이동
    const secondTrack = secondHandle.parentElement;
    const nextTrack = secondTrack?.nextElementSibling;
    const nextRight = nextTrack?.getBoundingClientRect().right ?? firstTrackLeft + 580;
    await fireEvent.mouseDown(secondHandle, {
      clientX: secondHandle.getBoundingClientRect().left
    });
    await fireEvent.mouseMove(document.body, {
      clientX: nextRight - 10
    });
    await fireEvent.mouseMove(document.body, {
      clientX: nextRight - 140
    });
    await fireEvent.mouseUp(document.body);

    // 3) 스크롤 동기화 이벤트 발생
    const scrollBody = canvasElement.querySelector('.scroll-body');
    if (scrollBody) {
      await fireEvent.scroll(scrollBody, {
        target: {
          scrollTop: 40,
          scrollLeft: 10
        }
      });
    }
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    headers: [{
      key: 'prop',
      title: '속성명',
      width: 220
    }, {
      key: 'type',
      title: '타입',
      width: 220,
      align: 'right'
    }, {
      key: 'value',
      title: '값',
      width: 260
    }],
    tableWidthFixed: false,
    style: {
      height: 150
    },
    content: () => <tbody>
        {SAMPLE_PROPERTIES.slice(0, 4).map(item => <tr key={item.id}>
            <td>
              <span>{item.name}</span>
            </td>
            <td>
              <span>{item.type}</span>
            </td>
            <td>
              <span>{item.value}</span>
            </td>
          </tr>)}
      </tbody>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const handles = canvas.getAllByRole('button', {
      name: '컬럼 너비 조절'
    });
    const rect = handles[0].getBoundingClientRect();
    await fireEvent.mouseDown(handles[0], {
      clientX: rect.left
    });
    await fireEvent.mouseMove(document, {
      clientX: rect.left + 25
    });
    await fireEvent.mouseUp(document);
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    headers: [{
      key: 'header',
      title: '',
      width: 160
    }, {
      key: 'col2',
      title: '',
      width: 200
    }, {
      key: 'col3',
      title: ''
    }],
    visibleHeaders: false,
    resizableColumn: true,
    tableWidthFixed: true,
    noScroll: false,
    style: {
      height: 180
    },
    content: <tbody>
        {SAMPLE_PROPERTIES.map(item => <tr key={item.id}>
            <th scope="row">
              <span>{item.name}</span>
            </th>
            <td>
              <span>{item.type}</span>
            </td>
            <td>
              <span>{item.value}</span>
            </td>
          </tr>)}
      </tbody>
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => <SelectableTableDemo {...args} />,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText('지오메트리'));
    await expect(args.onItemClick).toHaveBeenCalledWith(2);
    await expect(canvas.getByText('선택된 행 인덱스: 2')).toBeInTheDocument();
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxHeaderTableDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 1) 상단 전체 선택 체크박스 클릭
    const selectAllCheckbox = canvas.getByRole('checkbox', {
      name: '전체 선택'
    });
    await userEvent.click(selectAllCheckbox);

    // 2) 행 내부 체크박스 클릭 -> 행 선택(onItemClick) 차단 분기
    const rowCheckbox = canvas.getByRole('checkbox', {
      name: '레이어 ID 선택'
    });
    await userEvent.click(rowCheckbox);

    // 3) 행 텍스트 클릭 -> 비제어 행 선택(!isControlledSelection) 분기
    await userEvent.click(canvas.getByText('좌표계 (SRID)'));
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const rowCount = 200;
    const headers: PropTableHeader[] = [{
      key: 'seq',
      title: 'FID',
      width: 80,
      align: 'right'
    }, {
      key: 'code',
      title: '행정구역코드',
      width: 140,
      align: 'center'
    }, {
      key: 'name',
      title: '명칭'
    }];
    return <div className="flex flex-col gap-2 font-sans text-xs">
        <span className="text-muted-foreground">
          가상 스크롤 렌더링 (28px 고정 행 높이)
        </span>
        <PropertyTable headers={headers} variant="selectable" style={{
        height: 220
      }} virtualize={{
        rowCount,
        rowHeight: 28,
        renderRow: (rowIdx, rowStyle) => <tr key={rowIdx} style={rowStyle}>
                <td className="justify-end font-mono text-muted-foreground" style={rowStyle}>
                  <span>{rowIdx + 1}</span>
                </td>
                <td className="justify-center font-mono" style={rowStyle}>
                  <span>{\`41135\${String(rowIdx % 999).padStart(3, '0')}\`}</span>
                </td>
                <td style={rowStyle}>
                  <span>{\`성남시 분당구 공간객체 #\${rowIdx + 1}\`}</span>
                </td>
              </tr>
      }} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const scrollBody = canvasElement.querySelector('.scroll-body');
    if (scrollBody) {
      await fireEvent.scroll(scrollBody, {
        target: {
          scrollTop: 560
        }
      });
    }
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <PropertyTable headers={BASIC_HEADERS} noScroll virtualize={{
      rowCount: 0,
      rowHeight: 28,
      renderRow: () => null,
      noData: <p style={NoDataStyle}>표시할 속성 데이터가 없습니다.</p>
    }} />
      <PropertyTable headers={BASIC_HEADERS} noScroll virtualize={{
      rowCount: 0,
      rowHeight: 28,
      renderRow: () => null
    }} />
    </div>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <InlineEditableCellsDemo />
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    headers: [{
      title: '선택',
      checkbox: true,
      width: 48,
      align: 'center'
    }, {
      title: '키 없음(0)',
      width: 0
    }, {
      title: '값'
    }],
    resizableColumn: false,
    headerStyle: {
      backgroundColor: '#f8fafc'
    },
    checkProps: {
      checked: false,
      disabled: true
    },
    style: {
      height: 150
    },
    content: <tbody>
        {SAMPLE_PROPERTIES.slice(0, 4).map(item => <tr key={item.id}>
            <td />
            <td>
              <span>{item.name}</span>
            </td>
            <td>
              <span>{item.value}</span>
            </td>
          </tr>)}
      </tbody>
  },
  play: async ({
    canvasElement
  }) => {
    const scrollBody = canvasElement.querySelector('.scroll-body');
    if (scrollBody) {
      await fireEvent.scroll(scrollBody, {
        target: {
          scrollTop: 24,
          scrollLeft: 8
        }
      });
    }
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <PropertyTable headers={BASIC_HEADERS} variant="selectable" style={{
      height: 140
    }} virtualize={{
      rowCount: 0,
      rowHeight: 28,
      renderRow: () => null,
      noData: <p style={NoDataStyle}>빈 행 클릭 테스트</p>
    }} />
      <PropertyTable headers={BASIC_HEADERS} variant="selectable" style={{
      height: 140
    }} content={<>
            <tbody>
              <tr data-row-index="invalid">
                <td>
                  <span>잘못된 인덱스 행</span>
                </td>
                <td>
                  <span>String</span>
                </td>
                <td>
                  <span>val</span>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <span>푸터 행</span>
                </td>
                <td>
                  <span>-</span>
                </td>
                <td>
                  <span>-</span>
                </td>
              </tr>
            </tfoot>
          </>} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 1) emptyRow 클릭 (tr.dataset.emptyRow === 'true')
    await userEvent.click(canvas.getByText('빈 행 클릭 테스트'));

    // 2) Text 노드 직접 클릭 (!(e.target instanceof Element))
    const rowTextEl = canvas.getByText('잘못된 인덱스 행');
    const textNode = rowTextEl.firstChild;
    if (textNode) {
      textNode.dispatchEvent(new MouseEvent('click', {
        bubbles: true
      }));
    }

    // 3) 잘못된 data-row-index 행 클릭 -> domIndex 폴백
    await userEvent.click(rowTextEl);

    // 4) tfoot 내부 tr 클릭 -> getSelectableRows 미포함(domIndex === -1)
    await userEvent.click(canvas.getByText('푸터 행'));
  }
}`,...Z.parameters?.docs?.source}}}})))()}$();export{W as BodyRowHeader,H as Default,J as EmptyNoData,Y as InlineEditableCells,X as NonResizableAndHeaderOptions,G as Selectable,Z as SelectableEdgeBranches,U as UnfixedWidthAndFunctionContent,q as VirtualizedRows,K as WithCheckboxHeader,Q as __namedExportsOrder,z as default};