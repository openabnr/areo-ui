import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{b as n,n as r}from"./iframe-mWnvI0Rq.js";import{c as i,t as a}from"./utils-CynS5U15.js";import{n as o,t as s}from"./dist-kEwxpQyq.js";import{S as c,b as l,h as u,l as d,m as f,o as ee,r as te,t as p,x as m,y as h}from"./useRenderElement-Dyeg6Dfm.js";import{n as g,o as _,s as v,t as y}from"./useButton-BHO-33r5.js";import{n as b}from"./owner-BShe46-H.js";import{n as ne,t as x}from"./useControlled-C0i28MuD.js";import{A as re,M as S,b as C,f as w,n as T,p as ie,s as ae,t as E,x as D}from"./useBaseUiId-7W2I-IFv.js";import{f as oe,m as O,u as se}from"./DirectionContext-KdikfG85.js";import{a as k,l as A,n as ce,o as le,t as ue,u as de}from"./useOpenChangeComplete-DvNIFhnj.js";import{n as j,t as M}from"./inertValue-BELQ0igR.js";import{i as N,n as fe,r as pe,t as me}from"./useCompositeListItem-CRRip0NQ.js";import{n as he,t as ge}from"./useCompositeItem-CTuYv_0R.js";import{i as _e,n as ve,r as ye,t as be}from"./CompositeRoot-vGyU9s77.js";function xe(){let e=Se.useContext(Ce);if(e===void 0)throw Error(f(64));return e}var Se,Ce;function P(){return(P=t((()=>{u(),Se=e(n(),1),Ce=Se.createContext(void 0)})))()}var we;function Te(){return(Te=t((()=>{we=`data-activation-direction`})))()}var F;function I(){return(I=t((()=>{Te(),F={tabActivationDirection:e=>({[we]:e})}})))()}function Ee(e,t){for(let[n,r]of e.entries())if(t===r.value)return n;return null}function De(e,t,n,r){if(e==null||t==null)return`none`;let[i,a,o]=n===`horizontal`?[`left`,`left`,`right`]:[`top`,`up`,`down`],s=Ee(r,e),c=Ee(r,t);if(s==null||c==null)return s!==c&&(typeof e==`number`||typeof e==`string`)&&typeof e==typeof t?t>e?o:a:`none`;let l=s.getBoundingClientRect()[i],u=c.getBoundingClientRect()[i];return u<l?a:u>l?o:`none`}var L,Oe,ke;function Ae(){return(Ae=t((()=>{L=e(n(),1),x(),h(),m(),p(),N(),P(),I(),S(),w(),Oe=r(),ke=L.forwardRef(function(e,t){let{className:n,defaultValue:r=0,onValueChange:i,orientation:a=`horizontal`,render:o,value:s,style:u,...d}=e,f=e.defaultValue!==void 0,ee=L.useRef([]),[p,m]=L.useState(()=>new Map),[h,g]=ne({controlled:s,default:r,name:`Tabs`,state:`value`}),_=s!==void 0,[v,y]=L.useState(()=>new Map),b=L.useRef(void 0),x=L.useCallback(e=>Ee(v,e),[v]),[S,w]=L.useState(()=>({previousValue:h,tabActivationDirection:`none`})),{previousValue:T,tabActivationDirection:E}=S,D=E,oe=!1;T!==h&&(D=De(T,h,a,v),oe=T!=null&&h!=null&&x(h)==null);let O=oe?T:h,se=T!==O||E!==D;l(()=>{se&&w({previousValue:O,tabActivationDirection:D})},[O,se,D]);let k=c((e,t)=>{t.activationDirection=De(h,e,a,v),i?.(e,t),!t.isCanceled&&g(()=>e)}),A=c((e,t)=>{i?.(e,re(t,void 0,void 0,{activationDirection:`none`}))}),ce=c((e,t)=>(m(n=>{let r=new Map(n);return r.set(e,t),r}),()=>{m(n=>{if(n.get(e)!==t)return n;let r=new Map(n);return r.delete(e),r})})),le=L.useCallback(e=>p.get(e),[p]),ue=L.useCallback(e=>{for(let t of v.values())if(e===t.value)return t.id},[v]),de=L.useMemo(()=>({getTabElementBySelectedValue:x,getTabIdByPanelValue:ue,getTabPanelIdByValue:le,onValueChange:k,orientation:a,registerMountedTabPanel:ce,setTabMap:y,tabActivationDirection:D,value:h}),[x,ue,le,k,a,ce,y,D,h]),j=L.useMemo(()=>{for(let e of v.values())if(e.value===h)return e},[v,h]),M=L.useMemo(()=>{for(let e of v.values())if(!e.disabled)return e.value},[v]),N=L.useRef(!f),fe=L.useRef(r),me=L.useRef(f),he=L.useRef(!1);l(()=>{if(_)return;function e(e,t){g(()=>e),w({previousValue:e,tabActivationDirection:`none`}),A(e,t),N.current=!1}if(v.size===0){he.current&&h!==null&&!b.current?.isConnected&&e(null,C);return}he.current=!0,b.current=v.keys().next().value;let t=j?.disabled,n=j==null&&h!==null;if(!t&&h===fe.current&&(me.current=!1),me.current&&t&&h===fe.current)return;let r=N.current;if(t||n){let n=M??null;if(h===n){N.current=!1;return}let i=C;r?i=ie:t&&(i=ae),e(n,i);return}r&&j!=null&&(A(h,ie),N.current=!1)},[M,_,A,j,g,v,h]);let ge=te(`div`,e,{state:{orientation:a,tabActivationDirection:D},ref:t,props:d,stateAttributesMapping:F});return(0,Oe.jsx)(Ce.Provider,{value:de,children:(0,Oe.jsx)(pe,{elementsRef:ee,children:ge})})})})))()}function je(){let e=Me.useContext(Ne);if(e===void 0)throw Error(f(65));return e}var Me,Ne;function Pe(){return(Pe=t((()=>{u(),Me=e(n(),1),Ne=Me.createContext(void 0)})))()}var R,Fe;function Ie(){return(Ie=t((()=>{R=e(n(),1),h(),m(),E(),p(),y(),_e(),ge(),_(),P(),I(),Pe(),S(),w(),O(),Fe=R.forwardRef(function(e,t){let{className:n,disabled:r=!1,render:i,value:a,id:o,nativeButton:s=!0,style:u,...d}=e,{value:f,getTabPanelIdByValue:ee,onValueChange:p,orientation:m,tabActivationDirection:h}=xe(),{activateOnFocus:_,registerTabResizeObserverElement:y,tabsListElement:ne}=je(),{highlightedIndex:x,onHighlightedIndexChange:S}=v(),C=T(o),w=R.useMemo(()=>({disabled:r,id:C,value:a}),[r,C,a]),{compositeProps:ie,compositeRef:ae,index:E}=he({metadata:w}),O=a===f,k=R.useRef(!1),A=R.useRef(null),ce=c(e=>{A.current?.(),A.current=e?y(e):null});l(()=>{if(k.current){k.current=!1;return}if(!(O&&E>-1&&x!==E))return;let e=ne;if(e!=null){let t=se(b(e));if(t&&oe(e,t))return}r||S(E)},[O,E,x,S,r,ne]);let{getButtonProps:le,buttonRef:ue}=g({disabled:r,native:s,focusableWhenDisabled:!0}),de=ee(a),j=R.useRef(!1),M=R.useRef(!1);function N(e){p(a,re(D,e.nativeEvent,void 0,{activationDirection:`none`}))}function fe(e){O||r||N(e)}function pe(e){O||r||_&&(!j.current||M.current)&&N(e)}function me(e){if(O||r)return;j.current=!0,M.current=e.button===0;let t=b(e.currentTarget);function n(){j.current=!1,M.current=!1,t.removeEventListener(`pointerup`,n),t.removeEventListener(`pointercancel`,n)}t.addEventListener(`pointerup`,n),t.addEventListener(`pointercancel`,n)}return te(`button`,e,{state:{disabled:r,active:O,orientation:m,tabActivationDirection:h},ref:[t,ue,ae,ce],props:[ie,{role:`tab`,"aria-controls":de,"aria-selected":O,id:C,onClick:fe,onFocus:pe,onPointerDown:me,[ye]:O?``:void 0,onKeyDownCapture(){k.current=!0}},d,le],stateAttributesMapping:F})})})))()}var Le;function Re(){return(Re=t((()=>{A(),Le=`data-index`})))()}var ze,Be,Ve;function He(){return(He=t((()=>{ze=e(n(),1),j(),h(),E(),A(),ue(),k(),p(),me(),I(),P(),Re(),Be={...F,...de},Ve=ze.forwardRef(function(e,t){let{className:n,value:r,render:i,keepMounted:a=!1,style:o,...s}=e,{value:c,getTabIdByPanelValue:u,orientation:d,tabActivationDirection:f,registerMountedTabPanel:ee}=xe(),p=T(),{ref:m,index:h}=fe(),g=r===c,{mounted:_,transitionStatus:v,setMounted:y}=le(g),b=!_,ne=u(r),x={hidden:b,orientation:d,tabActivationDirection:f,transitionStatus:v},re=ze.useRef(null),S=te(`div`,e,{state:x,ref:[t,m,re],props:[{"aria-labelledby":ne,hidden:b,id:p,role:`tabpanel`,tabIndex:g?0:-1,inert:M(!g),[Le]:h},s],stateAttributesMapping:Be});return ce({open:g,ref:re,onComplete(){g||y(!1)}}),l(()=>{if(!(p==null||b&&!a))return ee(r,p)},[b,a,r,p,ee]),a||_?S:null})})))()}var z,Ue,We;function Ge(){return(Ge=t((()=>{z=e(n(),1),m(),h(),d(),ve(),I(),P(),Pe(),Ue=r(),We=z.forwardRef(function(e,t){let{activateOnFocus:n=!1,className:r,loopFocus:i=!0,render:a,style:o,...s}=e,{orientation:u,setTabMap:d,tabActivationDirection:f}=xe(),[te,p]=z.useState(0),[m,h]=z.useState(null),g=z.useRef(new Set),_=z.useRef(new Set),v=z.useRef(null);l(()=>{if(typeof ResizeObserver>`u`)return;let e=new ResizeObserver(()=>{g.current.forEach(e=>{e()})});return v.current=e,m&&e.observe(m),_.current.forEach(t=>{e.observe(t)}),()=>{e.disconnect(),v.current=null}},[m]);let y=c(e=>(g.current.add(e),()=>{g.current.delete(e)})),b=c(e=>(_.current.add(e),v.current?.observe(e),()=>{_.current.delete(e),v.current?.unobserve(e)})),ne={orientation:u,tabActivationDirection:f},x={"aria-orientation":u===`vertical`?`vertical`:void 0,role:`tablist`},re=z.useMemo(()=>({activateOnFocus:n,registerIndicatorUpdateListener:y,registerTabResizeObserverElement:b,tabsListElement:m}),[n,y,b,m]);return(0,Ue.jsx)(Ne.Provider,{value:re,children:(0,Ue.jsx)(be,{render:a,className:r,style:o,state:ne,refs:[t,h],props:[x,s],stateAttributesMapping:F,highlightedIndex:te,enableHomeAndEndKeys:!0,loopFocus:i,orientation:u,onHighlightedIndexChange:p,onMapChange:d,disabledIndices:ee})})})})))()}function B({variant:e=G,size:t=Je,position:n=K,className:r,children:i,...o}){let s=(0,Ke.useMemo)(()=>({variant:e,size:t,position:n}),[e,t,n]);return(0,W.jsx)(Xe,{value:s,children:(0,W.jsx)(ke,{"data-slot":`tabs`,className:a(`box-border flex w-full flex-col`,r),...o,children:i})})}function V({variant:e,position:t,className:n,...r}){let i=(0,Ke.useContext)(Xe),o=e??i.variant,s=t??i.position;return(0,W.jsx)(We,{"data-slot":`tabs-list`,className:a(Ze({variant:o,position:s}),n),...r})}function H({variant:e,size:t,position:n,className:r,...i}){let o=(0,Ke.useContext)(Xe),s=e??o.variant,c=t??o.size,l=n??o.position;return(0,W.jsx)(Fe,{"data-slot":`tab`,className:a(Qe({variant:s,size:c,position:l}),r),...i})}function U({className:e,...t}){return(0,W.jsx)(Ve,{"data-slot":`tabs-panel`,className:a(`mt-0 box-border p-2 font-sans text-sm leading-4.5 text-secondary-foreground focus-visible:outline-1 focus-visible:-outline-offset-1 focus-visible:outline-primary`,e),...t})}var Ke,W,G,qe,Je,K,Ye,Xe,Ze,Qe;function $e(){return($e=t((()=>{Ke=n(),Ae(),Ge(),Ie(),He(),o(),i(),W=r(),G=`default`,qe=`line`,Je=`md`,K=`top`,Ye=`bottom`,Xe=(0,Ke.createContext)({variant:G,size:Je,position:K}),Ze=s(`m-0 box-border flex list-none items-center p-0`,{variants:{variant:{default:`gap-1 border-secondary-border`,line:`gap-5`},position:{top:``,bottom:`order-last`}},compoundVariants:[{variant:G,position:K,className:`border-b`},{variant:G,position:Ye,className:`border-t`}],defaultVariants:{variant:G,position:K}}),Qe=s([`border-0 p-0 font-sans`,`relative box-border flex items-center justify-center select-none motion-safe:transition-colors`,`not-data-active:not-data-disabled:cursor-pointer`,`focus-visible:z-1 focus-visible:focus-double-ring focus-visible:-outline-offset-2`,`data-active:cursor-default data-active:font-semibold`,`data-disabled:cursor-not-allowed data-disabled:text-text-disabled data-disabled:opacity-50`],{variants:{variant:{default:[`border-x border-secondary-border bg-transparent text-secondary-foreground`,`not-data-active:not-data-disabled:hover:bg-surface-muted data-active:bg-white`,`data-active:after:absolute data-active:after:right-0 data-active:after:left-0 data-active:after:h-0.5 data-active:after:bg-white`],line:`bg-transparent font-normal text-secondary-foreground data-active:text-primary`},position:{top:``,bottom:``},size:{sm:`h-7 min-w-12 px-2.5 text-xs leading-3.75`,md:`h-8.5 min-w-14 px-3.5 text-xs leading-4.25`}},compoundVariants:[{variant:G,position:K,className:`border-t data-active:after:-bottom-px`},{variant:G,position:Ye,className:`border-b data-active:after:-top-px`},{variant:qe,position:K,className:`border-b-2 border-b-transparent not-data-active:not-data-disabled:hover:border-b-secondary-border-hover data-active:border-b-primary`},{variant:qe,position:Ye,className:`border-t-2 border-t-transparent not-data-active:not-data-disabled:hover:border-t-secondary-border-hover data-active:border-t-primary`}],defaultVariants:{variant:G,position:K,size:Je}}),B.__docgenInfo={description:``,methods:[],displayName:`Tabs`,props:{variant:{defaultValue:{value:`'default'`,computed:!1},required:!1},size:{defaultValue:{value:`'md'`,computed:!1},required:!1},position:{defaultValue:{value:`'top'`,computed:!1},required:!1}}},V.__docgenInfo={description:``,methods:[],displayName:`TabList`},H.__docgenInfo={description:``,methods:[],displayName:`Tab`},U.__docgenInfo={description:``,methods:[],displayName:`TabPanel`}})))()}var et,q,tt,nt,J,Y,X,Z,Q,$,rt;function it(){return(it=t((()=>{et=n(),$e(),q=r(),tt=`bottom`,nt={title:`Components/Tabs`,component:B,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`inline-radio`,options:[`default`,`line`],description:`탭 스타일 변형 (default: 폴더 탭 형태, line: 인디케이터 선 형태)`},size:{control:`inline-radio`,options:[`sm`,`md`],description:`탭 크기 (sm: h-28px, md: h-34px)`},position:{control:`inline-radio`,options:[`top`,tt],description:`탭 목록 위치 (top: 상단 배치, bottom: 하단 배치)`},value:{control:`text`,description:`선택된 탭 값 (제어 컴포넌트)`},defaultValue:{control:`text`,description:`기본 선택된 탭 값 (비제어 컴포넌트)`},onValueChange:{action:`valueChanged`,description:`탭 선택 변경 시 호출되는 콜백 함수`}},args:{variant:`default`,size:`md`,position:`top`,defaultValue:`tab1`,className:`w-96`}},J={render:e=>(0,q.jsxs)(B,{...e,children:[(0,q.jsxs)(V,{children:[(0,q.jsx)(H,{value:`tab1`,children:`도면 속성`}),(0,q.jsx)(H,{value:`tab2`,children:`스타일 편집`}),(0,q.jsx)(H,{value:`tab3`,children:`라벨 설정`})]}),(0,q.jsx)(U,{value:`tab1`,children:`도면의 레이어 좌표계 및 기본 정보를 설정합니다.`}),(0,q.jsx)(U,{value:`tab2`,children:`채우기 색상, 선 두께, 불투명도를 조정합니다.`}),(0,q.jsx)(U,{value:`tab3`,children:`피처 위에 표시될 텍스트 라벨과 폰트를 구성합니다.`})]})},Y={args:{variant:`line`,defaultValue:`tab1`},render:e=>(0,q.jsxs)(B,{...e,children:[(0,q.jsxs)(V,{children:[(0,q.jsx)(H,{value:`tab1`,children:`전체 목록`}),(0,q.jsx)(H,{value:`tab2`,children:`공간 쿼리`}),(0,q.jsx)(H,{value:`tab3`,children:`필터링`})]}),(0,q.jsx)(U,{value:`tab1`,children:`전체 레이어 피처 목록을 표시합니다.`}),(0,q.jsx)(U,{value:`tab2`,children:`반경 및 폴리곤 기반 공간 쿼리를 실행합니다.`}),(0,q.jsx)(U,{value:`tab3`,children:`속성 조건식을 기반으로 데이터를 필터링합니다.`})]})},X={render:e=>(0,q.jsxs)(`div`,{className:`flex w-96 flex-col gap-8`,children:[(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`span`,{className:`mb-2 block text-2xs font-semibold text-neutral-500`,children:`Default + Bottom`}),(0,q.jsxs)(B,{...e,variant:`default`,position:tt,defaultValue:`b1`,children:[(0,q.jsxs)(V,{children:[(0,q.jsx)(H,{value:`b1`,children:`도면 속성`}),(0,q.jsx)(H,{value:`b2`,children:`스타일 편집`}),(0,q.jsx)(H,{value:`b3`,children:`라벨 설정`})]}),(0,q.jsx)(U,{value:`b1`,children:`도면의 레이어 좌표계 및 기본 정보를 설정합니다.`}),(0,q.jsx)(U,{value:`b2`,children:`채우기 색상, 선 두께, 불투명도를 조정합니다.`}),(0,q.jsx)(U,{value:`b3`,children:`피처 위에 표시될 텍스트 라벨과 폰트를 구성합니다.`})]})]}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`span`,{className:`mb-2 block text-2xs font-semibold text-neutral-500`,children:`Line + Bottom`}),(0,q.jsxs)(B,{...e,variant:`line`,position:tt,defaultValue:`l1`,children:[(0,q.jsxs)(V,{children:[(0,q.jsx)(H,{value:`l1`,children:`전체 목록`}),(0,q.jsx)(H,{value:`l2`,children:`공간 쿼리`}),(0,q.jsx)(H,{value:`l3`,children:`필터링`})]}),(0,q.jsx)(U,{value:`l1`,children:`전체 레이어 피처 목록을 표시합니다.`}),(0,q.jsx)(U,{value:`l2`,children:`반경 및 폴리곤 기반 공간 쿼리를 실행합니다.`}),(0,q.jsx)(U,{value:`l3`,children:`속성 조건식을 기반으로 데이터를 필터링합니다.`})]})]})]})},Z={render:e=>(0,q.jsxs)(`div`,{className:`flex w-96 flex-col gap-6`,children:[(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`span`,{className:`mb-2 block text-2xs font-semibold text-neutral-500`,children:`Small 크기 (sm - h-7)`}),(0,q.jsxs)(B,{...e,size:`sm`,defaultValue:`s1`,children:[(0,q.jsxs)(V,{children:[(0,q.jsx)(H,{value:`s1`,children:`레이어`}),(0,q.jsx)(H,{value:`s2`,children:`심볼`}),(0,q.jsx)(H,{value:`s3`,children:`히스토리`})]}),(0,q.jsx)(U,{value:`s1`,children:`Small 탭의 본문 내용입니다.`}),(0,q.jsx)(U,{value:`s2`,children:`심볼 설정 화면입니다.`}),(0,q.jsx)(U,{value:`s3`,children:`변경 기록 목록입니다.`})]})]}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`span`,{className:`mb-2 block text-2xs font-semibold text-neutral-500`,children:`Medium 크기 (md - h-8.5, 기본값)`}),(0,q.jsxs)(B,{...e,size:`md`,defaultValue:`m1`,children:[(0,q.jsxs)(V,{children:[(0,q.jsx)(H,{value:`m1`,children:`레이어`}),(0,q.jsx)(H,{value:`m2`,children:`심볼`}),(0,q.jsx)(H,{value:`m3`,children:`히스토리`})]}),(0,q.jsx)(U,{value:`m1`,children:`Medium 탭의 본문 내용입니다.`}),(0,q.jsx)(U,{value:`m2`,children:`심볼 설정 화면입니다.`}),(0,q.jsx)(U,{value:`m3`,children:`변경 기록 목록입니다.`})]})]})]})},Q={render:()=>(0,q.jsx)(`div`,{className:`flex w-96 flex-col gap-6`,children:(0,q.jsxs)(B,{defaultValue:`tab1`,children:[(0,q.jsxs)(V,{children:[(0,q.jsx)(H,{value:`tab1`,children:`기본 정보`}),(0,q.jsx)(H,{value:`tab2`,disabled:!0,children:`고급 설정 (잠김)`}),(0,q.jsx)(H,{value:`tab3`,children:`내보내기`})]}),(0,q.jsx)(U,{value:`tab1`,children:`기본 정보 탭 내용입니다.`}),(0,q.jsx)(U,{value:`tab2`,children:`비활성화되어 접근할 수 없습니다.`}),(0,q.jsx)(U,{value:`tab3`,children:`도면 데이터를 Shapefile/GeoJSON으로 내보냅니다.`})]})})},$={render:function(e){let[t,n]=(0,et.useState)(`layer`);return(0,q.jsxs)(`div`,{className:`flex w-96 flex-col items-center gap-4`,children:[(0,q.jsxs)(`div`,{className:`w-full rounded border border-secondary-border bg-surface-muted px-3 py-1.5 text-center text-xs`,children:[(0,q.jsx)(`strong`,{children:`현재 활성 탭:`}),` `,(e=>e===`layer`?`레이어 설정`:e===`source`?`데이터 소스`:e===`export`?`데이터 내보내기`:`선택 없음`)(t),` (`,t,`)`]}),(0,q.jsxs)(B,{...e,value:t,onValueChange:(t,r)=>{typeof t==`string`&&(n(t),e.onValueChange?.(t,r))},children:[(0,q.jsxs)(V,{children:[(0,q.jsx)(H,{value:`layer`,children:`레이어 설정`}),(0,q.jsx)(H,{value:`source`,children:`데이터 소스`}),(0,q.jsx)(H,{value:`export`,children:`내보내기`})]}),(0,q.jsx)(U,{value:`layer`,children:`레이어 가시성 및 렌더링 순서를 지정합니다.`}),(0,q.jsx)(U,{value:`source`,children:`PostGIS 연결 및 벡터 타일 URL을 구성합니다.`}),(0,q.jsx)(U,{value:`export`,children:`도면을 이미지 파일로 저장합니다.`})]})]})}},rt=[`Default`,`LineVariant`,`BottomPosition`,`Sizes`,`DisabledTab`,`Controlled`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => <Tabs {...args}>
      <TabList>
        <Tab value="tab1">도면 속성</Tab>
        <Tab value="tab2">스타일 편집</Tab>
        <Tab value="tab3">라벨 설정</Tab>
      </TabList>
      <TabPanel value="tab1">
        도면의 레이어 좌표계 및 기본 정보를 설정합니다.
      </TabPanel>
      <TabPanel value="tab2">
        채우기 색상, 선 두께, 불투명도를 조정합니다.
      </TabPanel>
      <TabPanel value="tab3">
        피처 위에 표시될 텍스트 라벨과 폰트를 구성합니다.
      </TabPanel>
    </Tabs>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    defaultValue: 'tab1'
  },
  render: args => <Tabs {...args}>
      <TabList>
        <Tab value="tab1">전체 목록</Tab>
        <Tab value="tab2">공간 쿼리</Tab>
        <Tab value="tab3">필터링</Tab>
      </TabList>
      <TabPanel value="tab1">전체 레이어 피처 목록을 표시합니다.</TabPanel>
      <TabPanel value="tab2">
        반경 및 폴리곤 기반 공간 쿼리를 실행합니다.
      </TabPanel>
      <TabPanel value="tab3">
        속성 조건식을 기반으로 데이터를 필터링합니다.
      </TabPanel>
    </Tabs>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex w-96 flex-col gap-8">
      <div>
        <span className="mb-2 block text-2xs font-semibold text-neutral-500">
          Default + Bottom
        </span>
        <Tabs {...args} variant="default" position={BOTTOM_POSITION} defaultValue="b1">
          <TabList>
            <Tab value="b1">도면 속성</Tab>
            <Tab value="b2">스타일 편집</Tab>
            <Tab value="b3">라벨 설정</Tab>
          </TabList>
          <TabPanel value="b1">
            도면의 레이어 좌표계 및 기본 정보를 설정합니다.
          </TabPanel>
          <TabPanel value="b2">
            채우기 색상, 선 두께, 불투명도를 조정합니다.
          </TabPanel>
          <TabPanel value="b3">
            피처 위에 표시될 텍스트 라벨과 폰트를 구성합니다.
          </TabPanel>
        </Tabs>
      </div>

      <div>
        <span className="mb-2 block text-2xs font-semibold text-neutral-500">
          Line + Bottom
        </span>
        <Tabs {...args} variant="line" position={BOTTOM_POSITION} defaultValue="l1">
          <TabList>
            <Tab value="l1">전체 목록</Tab>
            <Tab value="l2">공간 쿼리</Tab>
            <Tab value="l3">필터링</Tab>
          </TabList>
          <TabPanel value="l1">전체 레이어 피처 목록을 표시합니다.</TabPanel>
          <TabPanel value="l2">
            반경 및 폴리곤 기반 공간 쿼리를 실행합니다.
          </TabPanel>
          <TabPanel value="l3">
            속성 조건식을 기반으로 데이터를 필터링합니다.
          </TabPanel>
        </Tabs>
      </div>
    </div>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex w-96 flex-col gap-6">
      <div>
        <span className="mb-2 block text-2xs font-semibold text-neutral-500">
          Small 크기 (sm - h-7)
        </span>
        <Tabs {...args} size="sm" defaultValue="s1">
          <TabList>
            <Tab value="s1">레이어</Tab>
            <Tab value="s2">심볼</Tab>
            <Tab value="s3">히스토리</Tab>
          </TabList>
          <TabPanel value="s1">Small 탭의 본문 내용입니다.</TabPanel>
          <TabPanel value="s2">심볼 설정 화면입니다.</TabPanel>
          <TabPanel value="s3">변경 기록 목록입니다.</TabPanel>
        </Tabs>
      </div>

      <div>
        <span className="mb-2 block text-2xs font-semibold text-neutral-500">
          Medium 크기 (md - h-8.5, 기본값)
        </span>
        <Tabs {...args} size="md" defaultValue="m1">
          <TabList>
            <Tab value="m1">레이어</Tab>
            <Tab value="m2">심볼</Tab>
            <Tab value="m3">히스토리</Tab>
          </TabList>
          <TabPanel value="m1">Medium 탭의 본문 내용입니다.</TabPanel>
          <TabPanel value="m2">심볼 설정 화면입니다.</TabPanel>
          <TabPanel value="m3">변경 기록 목록입니다.</TabPanel>
        </Tabs>
      </div>
    </div>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-96 flex-col gap-6">
      <Tabs defaultValue="tab1">
        <TabList>
          <Tab value="tab1">기본 정보</Tab>
          <Tab value="tab2" disabled>
            고급 설정 (잠김)
          </Tab>
          <Tab value="tab3">내보내기</Tab>
        </TabList>
        <TabPanel value="tab1">기본 정보 탭 내용입니다.</TabPanel>
        <TabPanel value="tab2">비활성화되어 접근할 수 없습니다.</TabPanel>
        <TabPanel value="tab3">
          도면 데이터를 Shapefile/GeoJSON으로 내보냅니다.
        </TabPanel>
      </Tabs>
    </div>
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [currentTab, setCurrentTab] = useState('layer');
    const getTabName = (val: string) => {
      if (val === 'layer') {
        return '레이어 설정';
      }
      if (val === 'source') {
        return '데이터 소스';
      }
      if (val === 'export') {
        return '데이터 내보내기';
      }
      return '선택 없음';
    };
    return <div className="flex w-96 flex-col items-center gap-4">
        <div className="w-full rounded border border-secondary-border bg-surface-muted px-3 py-1.5 text-center text-xs">
          <strong>현재 활성 탭:</strong> {getTabName(currentTab)} ({currentTab})
        </div>

        <Tabs {...args} value={currentTab} onValueChange={(val, eventDetails) => {
        if (typeof val === 'string') {
          setCurrentTab(val);
          args.onValueChange?.(val, eventDetails);
        }
      }}>
          <TabList>
            <Tab value="layer">레이어 설정</Tab>
            <Tab value="source">데이터 소스</Tab>
            <Tab value="export">내보내기</Tab>
          </TabList>
          <TabPanel value="layer">
            레이어 가시성 및 렌더링 순서를 지정합니다.
          </TabPanel>
          <TabPanel value="source">
            PostGIS 연결 및 벡터 타일 URL을 구성합니다.
          </TabPanel>
          <TabPanel value="export">도면을 이미지 파일로 저장합니다.</TabPanel>
        </Tabs>
      </div>;
  }
}`,...$.parameters?.docs?.source}}}})))()}it();export{X as BottomPosition,$ as Controlled,J as Default,Q as DisabledTab,Y as LineVariant,Z as Sizes,rt as __namedExportsOrder,nt as default};