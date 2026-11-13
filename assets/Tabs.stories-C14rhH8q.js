import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{b as n,n as r}from"./iframe-BKXkO2qw.js";import{c as i,t as a}from"./utils-Cjde27Em.js";import{n as o,t as s}from"./dist-81uMrw1m.js";import{S as c,b as l,h as u,l as d,m as f,o as p,r as ee,t as m,x as h,y as g}from"./useRenderElement-Oz2FwACm.js";import{n as _,o as v,s as y,t as b}from"./useButton-ajnpmctT.js";import{n as x}from"./owner-C9GZxmOx.js";import{n as S,t as C}from"./useControlled-DNSI-LFJ.js";import{A as w,M as T,b as E,f as D,n as O,p as te,s as ne,t as k,x as A}from"./useBaseUiId-DuUq_6iS.js";import{f as re,m as j,u as ie}from"./DirectionContext-wzaJQlEM.js";import{a as M,l as N,n as ae,o as oe,t as se,u as ce}from"./useOpenChangeComplete-CcDl_Ahx.js";import{n as P,t as F}from"./inertValue-HRFPAOr5.js";import{i as I,n as le,r as ue,t as de}from"./useCompositeListItem-Bilep0Iw.js";import{n as fe,t as pe}from"./useCompositeItem-CrXdciGA.js";import{i as me,n as he,r as ge,t as _e}from"./CompositeRoot-CXaTsr94.js";function ve(){let e=ye.useContext(be);if(e===void 0)throw Error(f(64));return e}var ye,be;function L(){return(L=t((()=>{u(),ye=e(n(),1),be=ye.createContext(void 0)})))()}var xe;function Se(){return(Se=t((()=>{xe=`data-activation-direction`})))()}var R;function Ce(){return(Ce=t((()=>{Se(),R={tabActivationDirection:e=>({[xe]:e})}})))()}function we(e,t){for(let[n,r]of e.entries())if(t===r.value)return n;return null}function Te(e,t,n,r){if(e==null||t==null)return`none`;let[i,a,o]=n===`horizontal`?[`left`,`left`,`right`]:[`top`,`up`,`down`],s=we(r,e),c=we(r,t);if(s==null||c==null)return s!==c&&(typeof e==`number`||typeof e==`string`)&&typeof e==typeof t?t>e?o:a:`none`;let l=s.getBoundingClientRect()[i],u=c.getBoundingClientRect()[i];return u<l?a:u>l?o:`none`}var z,Ee,De;function Oe(){return(Oe=t((()=>{z=e(n(),1),C(),g(),h(),m(),I(),L(),Ce(),T(),D(),Ee=r(),De=z.forwardRef(function(e,t){let{className:n,defaultValue:r=0,onValueChange:i,orientation:a=`horizontal`,render:o,value:s,style:u,...d}=e,f=e.defaultValue!==void 0,p=z.useRef([]),[m,h]=z.useState(()=>new Map),[g,_]=S({controlled:s,default:r,name:`Tabs`,state:`value`}),v=s!==void 0,[y,b]=z.useState(()=>new Map),x=z.useRef(void 0),C=z.useCallback(e=>we(y,e),[y]),[T,D]=z.useState(()=>({previousValue:g,tabActivationDirection:`none`})),{previousValue:O,tabActivationDirection:k}=T,A=k,re=!1;O!==g&&(A=Te(O,g,a,y),re=O!=null&&g!=null&&C(g)==null);let j=re?O:g,ie=O!==j||k!==A;l(()=>{ie&&D({previousValue:j,tabActivationDirection:A})},[j,ie,A]);let M=c((e,t)=>{t.activationDirection=Te(g,e,a,y),i?.(e,t),!t.isCanceled&&_(()=>e)}),N=c((e,t)=>{i?.(e,w(t,void 0,void 0,{activationDirection:`none`}))}),ae=c((e,t)=>(h(n=>{let r=new Map(n);return r.set(e,t),r}),()=>{h(n=>{if(n.get(e)!==t)return n;let r=new Map(n);return r.delete(e),r})})),oe=z.useCallback(e=>m.get(e),[m]),se=z.useCallback(e=>{for(let t of y.values())if(e===t.value)return t.id},[y]),ce=z.useMemo(()=>({getTabElementBySelectedValue:C,getTabIdByPanelValue:se,getTabPanelIdByValue:oe,onValueChange:M,orientation:a,registerMountedTabPanel:ae,setTabMap:b,tabActivationDirection:A,value:g}),[C,se,oe,M,a,ae,b,A,g]),P=z.useMemo(()=>{for(let e of y.values())if(e.value===g)return e},[y,g]),F=z.useMemo(()=>{for(let e of y.values())if(!e.disabled)return e.value},[y]),I=z.useRef(!f),le=z.useRef(r),de=z.useRef(f),fe=z.useRef(!1);l(()=>{if(v)return;function e(e,t){_(()=>e),D({previousValue:e,tabActivationDirection:`none`}),N(e,t),I.current=!1}if(y.size===0){fe.current&&g!==null&&!x.current?.isConnected&&e(null,E);return}fe.current=!0,x.current=y.keys().next().value;let t=P?.disabled,n=P==null&&g!==null;if(!t&&g===le.current&&(de.current=!1),de.current&&t&&g===le.current)return;let r=I.current;if(t||n){let n=F??null;if(g===n){I.current=!1;return}let i=E;r?i=te:t&&(i=ne),e(n,i);return}r&&P!=null&&(N(g,te),I.current=!1)},[F,v,N,P,_,y,g]);let pe=ee(`div`,e,{state:{orientation:a,tabActivationDirection:A},ref:t,props:d,stateAttributesMapping:R});return(0,Ee.jsx)(be.Provider,{value:ce,children:(0,Ee.jsx)(ue,{elementsRef:p,children:pe})})})})))()}function ke(){let e=Ae.useContext(je);if(e===void 0)throw Error(f(65));return e}var Ae,je;function Me(){return(Me=t((()=>{u(),Ae=e(n(),1),je=Ae.createContext(void 0)})))()}var B,Ne;function Pe(){return(Pe=t((()=>{B=e(n(),1),g(),h(),k(),m(),b(),me(),pe(),v(),L(),Ce(),Me(),T(),D(),j(),Ne=B.forwardRef(function(e,t){let{className:n,disabled:r=!1,render:i,value:a,id:o,nativeButton:s=!0,style:u,...d}=e,{value:f,getTabPanelIdByValue:p,onValueChange:m,orientation:h,tabActivationDirection:g}=ve(),{activateOnFocus:v,registerTabResizeObserverElement:b,tabsListElement:S}=ke(),{highlightedIndex:C,onHighlightedIndexChange:T}=y(),E=O(o),D=B.useMemo(()=>({disabled:r,id:E,value:a}),[r,E,a]),{compositeProps:te,compositeRef:ne,index:k}=fe({metadata:D}),j=a===f,M=B.useRef(!1),N=B.useRef(null),ae=c(e=>{N.current?.(),N.current=e?b(e):null});l(()=>{if(M.current){M.current=!1;return}if(!(j&&k>-1&&C!==k))return;let e=S;if(e!=null){let t=ie(x(e));if(t&&re(e,t))return}r||T(k)},[j,k,C,T,r,S]);let{getButtonProps:oe,buttonRef:se}=_({disabled:r,native:s,focusableWhenDisabled:!0}),ce=p(a),P=B.useRef(!1),F=B.useRef(!1);function I(e){m(a,w(A,e.nativeEvent,void 0,{activationDirection:`none`}))}function le(e){j||r||I(e)}function ue(e){j||r||v&&(!P.current||F.current)&&I(e)}function de(e){if(j||r)return;P.current=!0,F.current=e.button===0;let t=x(e.currentTarget);function n(){P.current=!1,F.current=!1,t.removeEventListener(`pointerup`,n),t.removeEventListener(`pointercancel`,n)}t.addEventListener(`pointerup`,n),t.addEventListener(`pointercancel`,n)}return ee(`button`,e,{state:{disabled:r,active:j,orientation:h,tabActivationDirection:g},ref:[t,se,ne,ae],props:[te,{role:`tab`,"aria-controls":ce,"aria-selected":j,id:E,onClick:le,onFocus:ue,onPointerDown:de,[ge]:j?``:void 0,onKeyDownCapture(){M.current=!0}},d,oe],stateAttributesMapping:R})})})))()}var Fe;function Ie(){return(Ie=t((()=>{N(),Fe=`data-index`})))()}var Le,Re,ze;function Be(){return(Be=t((()=>{Le=e(n(),1),P(),g(),k(),N(),se(),M(),m(),de(),Ce(),L(),Ie(),Re={...R,...ce},ze=Le.forwardRef(function(e,t){let{className:n,value:r,render:i,keepMounted:a=!1,style:o,...s}=e,{value:c,getTabIdByPanelValue:u,orientation:d,tabActivationDirection:f,registerMountedTabPanel:p}=ve(),m=O(),{ref:h,index:g}=le(),_=r===c,{mounted:v,transitionStatus:y,setMounted:b}=oe(_),x=!v,S=u(r),C={hidden:x,orientation:d,tabActivationDirection:f,transitionStatus:y},w=Le.useRef(null),T=ee(`div`,e,{state:C,ref:[t,h,w],props:[{"aria-labelledby":S,hidden:x,id:m,role:`tabpanel`,tabIndex:_?0:-1,inert:F(!_),[Fe]:g},s],stateAttributesMapping:Re});return ae({open:_,ref:w,onComplete(){_||b(!1)}}),l(()=>{if(!(m==null||x&&!a))return p(r,m)},[x,a,r,m,p]),a||v?T:null})})))()}var V,Ve,He;function Ue(){return(Ue=t((()=>{V=e(n(),1),h(),g(),d(),he(),Ce(),L(),Me(),Ve=r(),He=V.forwardRef(function(e,t){let{activateOnFocus:n=!1,className:r,loopFocus:i=!0,render:a,style:o,...s}=e,{orientation:u,setTabMap:d,tabActivationDirection:f}=ve(),[ee,m]=V.useState(0),[h,g]=V.useState(null),_=V.useRef(new Set),v=V.useRef(new Set),y=V.useRef(null);l(()=>{if(typeof ResizeObserver>`u`)return;let e=new ResizeObserver(()=>{_.current.forEach(e=>{e()})});return y.current=e,h&&e.observe(h),v.current.forEach(t=>{e.observe(t)}),()=>{e.disconnect(),y.current=null}},[h]);let b=c(e=>(_.current.add(e),()=>{_.current.delete(e)})),x=c(e=>(v.current.add(e),y.current?.observe(e),()=>{v.current.delete(e),y.current?.unobserve(e)})),S={orientation:u,tabActivationDirection:f},C={"aria-orientation":u===`vertical`?`vertical`:void 0,role:`tablist`},w=V.useMemo(()=>({activateOnFocus:n,registerIndicatorUpdateListener:b,registerTabResizeObserverElement:x,tabsListElement:h}),[n,b,x,h]);return(0,Ve.jsx)(je.Provider,{value:w,children:(0,Ve.jsx)(_e,{render:a,className:r,style:o,state:S,refs:[t,g],props:[C,s],stateAttributesMapping:R,highlightedIndex:ee,enableHomeAndEndKeys:!0,loopFocus:i,orientation:u,onHighlightedIndexChange:m,onMapChange:d,disabledIndices:p})})})})))()}function H({variant:e=`default`,size:t=`md`,className:n,children:r,ref:i,...o}){let s=K.useMemo(()=>({variant:e,size:t}),[e,t]);return(0,q.jsx)(We.Provider,{value:s,children:(0,q.jsx)(De,{ref:i,"data-slot":`tabs`,className:a(`box-border w-full`,n),...o,children:r})})}function U({className:e,ref:t,...n}){let{variant:r}=K.useContext(We);return(0,q.jsx)(He,{ref:t,"data-slot":`tabs-list`,className:a(Ge({variant:r}),e),...n})}function W({className:e,ref:t,...n}){let{variant:r,size:i}=K.useContext(We);return(0,q.jsx)(Ne,{ref:t,"data-slot":`tab`,className:a(Ke({variant:r,size:i}),e),...n})}function G({className:e,ref:t,...n}){return(0,q.jsx)(ze,{ref:t,"data-slot":`tabs-panel`,className:a(`mt-0 box-border p-2 text-sm leading-4.5 text-secondary-foreground outline-hidden`,e),...n})}var K,q,We,Ge,Ke;function qe(){return(qe=t((()=>{K=e(n(),1),Oe(),Ue(),Pe(),Be(),o(),i(),q=r(),We=K.createContext({variant:`default`,size:`md`}),Ge=s(`m-0 box-border flex list-none items-center p-0`,{variants:{variant:{default:`gap-1 border-b border-secondary-border`,line:`gap-5`}},defaultVariants:{variant:`default`}}),Ke=s([`border-0 p-0 font-sans`,`relative box-border flex cursor-pointer items-center justify-center outline-hidden transition-colors select-none`,`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`,`data-active:cursor-default data-active:font-semibold`,`data-disabled:cursor-not-allowed data-disabled:text-text-disabled data-disabled:opacity-50`],{variants:{variant:{default:[`border-x border-t border-secondary-border bg-transparent text-secondary-foreground`,`not-data-active:hover:bg-surface-muted data-active:bg-white`,`data-active:after:absolute data-active:after:right-0 data-active:after:-bottom-px data-active:after:left-0 data-active:after:h-0.5 data-active:after:bg-white`],line:[`border-b-2 border-b-transparent bg-transparent font-normal text-secondary-foreground`,`not-data-active:hover:border-b-secondary-border-hover not-data-active:hover:text-secondary-foreground`,`data-active:border-b-primary data-active:text-primary`]},size:{sm:`h-7 min-w-12 px-2.5 text-xs leading-3.75`,md:`h-8.5 min-w-14 px-3.5 text-xs leading-4.25`}},defaultVariants:{variant:`default`,size:`md`}}),H.__docgenInfo={description:``,methods:[],displayName:`Tabs`,props:{variant:{defaultValue:{value:`'default'`,computed:!1},required:!1},size:{defaultValue:{value:`'md'`,computed:!1},required:!1}}},U.__docgenInfo={description:``,methods:[],displayName:`TabList`},W.__docgenInfo={description:``,methods:[],displayName:`Tab`},G.__docgenInfo={description:``,methods:[],displayName:`TabPanel`}})))()}var Je,J,Ye,Y,X,Z,Q,$,Xe;function Ze(){return(Ze=t((()=>{Je=n(),qe(),J=r(),Ye={title:`Components/Tabs`,component:H,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`inline-radio`,options:[`default`,`line`],description:`탭 스타일 변형 (default: 폴더 탭 형태, line: 하단 밑줄 형태)`},size:{control:`inline-radio`,options:[`sm`,`md`],description:`탭 크기 (sm: h-28px, md: h-34px)`},value:{control:`text`,description:`선택된 탭 값 (제어 컴포넌트)`},defaultValue:{control:`text`,description:`기본 선택된 탭 값 (비제어 컴포넌트)`},onValueChange:{action:`valueChanged`,description:`탭 선택 변경 시 호출되는 콜백 함수`}},args:{variant:`default`,size:`md`,defaultValue:`tab1`,className:`w-96`}},Y={render:e=>(0,J.jsxs)(H,{...e,children:[(0,J.jsxs)(U,{children:[(0,J.jsx)(W,{value:`tab1`,children:`도면 속성`}),(0,J.jsx)(W,{value:`tab2`,children:`스타일 편집`}),(0,J.jsx)(W,{value:`tab3`,children:`라벨 설정`})]}),(0,J.jsx)(G,{value:`tab1`,children:`도면의 레이어 좌표계 및 기본 정보를 설정합니다.`}),(0,J.jsx)(G,{value:`tab2`,children:`채우기 색상, 선 두께, 불투명도를 조정합니다.`}),(0,J.jsx)(G,{value:`tab3`,children:`피처 위에 표시될 텍스트 라벨과 폰트를 구성합니다.`})]})},X={args:{variant:`line`,defaultValue:`tab1`},render:e=>(0,J.jsxs)(H,{...e,children:[(0,J.jsxs)(U,{children:[(0,J.jsx)(W,{value:`tab1`,children:`전체 목록`}),(0,J.jsx)(W,{value:`tab2`,children:`공간 쿼리`}),(0,J.jsx)(W,{value:`tab3`,children:`필터링`})]}),(0,J.jsx)(G,{value:`tab1`,children:`전체 레이어 피처 목록을 표시합니다.`}),(0,J.jsx)(G,{value:`tab2`,children:`반경 및 폴리곤 기반 공간 쿼리를 실행합니다.`}),(0,J.jsx)(G,{value:`tab3`,children:`속성 조건식을 기반으로 데이터를 필터링합니다.`})]})},Z={render:()=>(0,J.jsxs)(`div`,{className:`flex w-96 flex-col gap-6`,children:[(0,J.jsxs)(`div`,{children:[(0,J.jsx)(`span`,{className:`mb-2 block text-2xs font-semibold text-neutral-500`,children:`Small 크기 (sm - h-7)`}),(0,J.jsxs)(H,{size:`sm`,defaultValue:`s1`,children:[(0,J.jsxs)(U,{children:[(0,J.jsx)(W,{value:`s1`,children:`레이어`}),(0,J.jsx)(W,{value:`s2`,children:`심볼`}),(0,J.jsx)(W,{value:`s3`,children:`히스토리`})]}),(0,J.jsx)(G,{value:`s1`,children:`Small 탭의 본문 내용입니다.`}),(0,J.jsx)(G,{value:`s2`,children:`심볼 설정 화면입니다.`}),(0,J.jsx)(G,{value:`s3`,children:`변경 기록 목록입니다.`})]})]}),(0,J.jsxs)(`div`,{children:[(0,J.jsx)(`span`,{className:`mb-2 block text-2xs font-semibold text-neutral-500`,children:`Medium 크기 (md - h-8.5, 기본값)`}),(0,J.jsxs)(H,{size:`md`,defaultValue:`m1`,children:[(0,J.jsxs)(U,{children:[(0,J.jsx)(W,{value:`m1`,children:`레이어`}),(0,J.jsx)(W,{value:`m2`,children:`심볼`}),(0,J.jsx)(W,{value:`m3`,children:`히스토리`})]}),(0,J.jsx)(G,{value:`m1`,children:`Medium 탭의 본문 내용입니다.`}),(0,J.jsx)(G,{value:`m2`,children:`심볼 설정 화면입니다.`}),(0,J.jsx)(G,{value:`m3`,children:`변경 기록 목록입니다.`})]})]})]})},Q={render:()=>(0,J.jsx)(`div`,{className:`flex w-96 flex-col gap-6`,children:(0,J.jsxs)(H,{defaultValue:`tab1`,children:[(0,J.jsxs)(U,{children:[(0,J.jsx)(W,{value:`tab1`,children:`기본 정보`}),(0,J.jsx)(W,{value:`tab2`,disabled:!0,children:`고급 설정 (잠김)`}),(0,J.jsx)(W,{value:`tab3`,children:`내보내기`})]}),(0,J.jsx)(G,{value:`tab1`,children:`기본 정보 탭 내용입니다.`}),(0,J.jsx)(G,{value:`tab2`,children:`비활성화되어 접근할 수 없습니다.`}),(0,J.jsx)(G,{value:`tab3`,children:`도면 데이터를 Shapefile/GeoJSON으로 내보냅니다.`})]})})},$={render:function(e){let[t,n]=(0,Je.useState)(`layer`);return(0,J.jsxs)(`div`,{className:`flex w-96 flex-col items-center gap-4`,children:[(0,J.jsxs)(`div`,{className:`w-full rounded border border-secondary-border bg-surface-muted px-3 py-1.5 text-center text-xs`,children:[(0,J.jsx)(`strong`,{children:`현재 활성 탭:`}),` `,(e=>e===`layer`?`레이어 설정`:e===`source`?`데이터 소스`:e===`export`?`데이터 내보내기`:`선택 없음`)(t),` (`,t,`)`]}),(0,J.jsxs)(H,{...e,value:t,onValueChange:(t,r)=>{typeof t==`string`&&(n(t),e.onValueChange?.(t,r))},children:[(0,J.jsxs)(U,{children:[(0,J.jsx)(W,{value:`layer`,children:`레이어 설정`}),(0,J.jsx)(W,{value:`source`,children:`데이터 소스`}),(0,J.jsx)(W,{value:`export`,children:`내보내기`})]}),(0,J.jsx)(G,{value:`layer`,children:`레이어 가시성 및 렌더링 순서를 지정합니다.`}),(0,J.jsx)(G,{value:`source`,children:`PostGIS 연결 및 벡터 타일 URL을 구성합니다.`}),(0,J.jsx)(G,{value:`export`,children:`도면을 이미지 파일로 저장합니다.`})]})]})}},Xe=[`Default`,`LineVariant`,`Sizes`,`DisabledTab`,`Controlled`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-96 flex-col gap-6">
      <div>
        <span className="mb-2 block text-2xs font-semibold text-neutral-500">
          Small 크기 (sm - h-7)
        </span>
        <Tabs size="sm" defaultValue="s1">
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
        <Tabs size="md" defaultValue="m1">
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
}`,...$.parameters?.docs?.source}}}})))()}Ze();export{$ as Controlled,Y as Default,Q as DisabledTab,X as LineVariant,Z as Sizes,Xe as __namedExportsOrder,Ye as default};