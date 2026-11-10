import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{b as n,n as r}from"./iframe-BMcTjw50.js";import{c as i,t as a}from"./utils-Cjde27Em.js";import{F as o,I as s,S as c,a as l,b as u,f as d,h as f,m as p,p as m,r as h,t as g,x as _,y as v}from"./useRenderElement-DqwN5ndK.js";import{n as y,t as b}from"./useButton-BkCVLDt8.js";import{n as x,t as S}from"./Button-BIxzI073.js";import{n as C,t as w}from"./useControlled-BABqkxLw.js";import{i as ee,r as te,t as ne}from"./addEventListener-CWVYIwnw.js";import{A as re,M as T,O as E,f as D,n as O,t as k,x as ie}from"./useBaseUiId-ByjxQtIs.js";import{n as ae,t as A}from"./useAnimationFrame-C_J4VP8_.js";import{n as oe,t as se}from"./useTimeout-dXjnpnPs.js";import{a as j,i as ce,l as M,n as le,o as N,p as P,r as ue,t as de,u as fe}from"./useOpenChangeComplete-BcHFeotL.js";import{n as pe,t as me}from"./Checkbox-CaFYuyQb.js";import{n as he,t as ge}from"./TextField-BYTMjNxQ.js";function _e(e){let{open:t,defaultOpen:n=!1,onOpenChange:r,disabled:i}=e,[a,o]=C({controlled:t,default:n,name:`Collapsible`,state:`open`}),{mounted:s,setMounted:l,transitionStatus:u}=N(a,!0,!0),d=O(),[f,p]=F.useState(),m=f===null?void 0:f??d,h=c(e=>{let t=!a,n=re(E,e.nativeEvent);r(t,n),!n.isCanceled&&o(t)});return F.useMemo(()=>({defaultPanelId:d,disabled:i,handleTrigger:h,mounted:s,open:a,panelId:m,setMounted:l,setOpen:o,setPanelIdState:p,transitionStatus:u}),[d,i,h,s,a,m,l,o,p,u])}var F;function ve(){return(ve=t((()=>{F=e(n(),1),w(),_(),k(),T(),D(),j()})))()}function ye(){let e=I.useContext(be);if(e===void 0)throw Error(p(15));return e}var I,be;function L(){return(L=t((()=>{f(),I=e(n(),1),be=I.createContext(void 0)})))()}var xe,Se,R;function Ce(){return(Ce=t((()=>{M(),xe=`data-open`,Se=`data-closed`,R=P})))()}var we;function Te(){return(Te=t((()=>{we=`data-panel-open`})))()}var Ee,De,Oe,ke;function Ae(){return(Ae=t((()=>{Ce(),Te(),Ee={[xe]:``},De={[Se]:``},Oe={open(e){return e?{[we]:``}:null}},ke={open(e){return e?Ee:De}}})))()}var je;function Me(){return(Me=t((()=>{Ae(),M(),je={...ke,...fe}})))()}var z,Ne,Pe;function Fe(){return(Fe=t((()=>{z=e(n(),1),_(),g(),ve(),L(),Me(),Ne=r(),Pe=z.forwardRef(function(e,t){let{render:n,className:r,defaultOpen:i=!1,disabled:a=!1,onOpenChange:o,open:s,style:l,...u}=e,d=c(o),f=_e({open:s,defaultOpen:i,onOpenChange:d,disabled:a}),p=z.useMemo(()=>({open:f.open,disabled:f.disabled,transitionStatus:f.transitionStatus}),[f.open,f.disabled,f.transitionStatus]),m=z.useMemo(()=>({...f,onOpenChange:d,state:p}),[f,d,p]),g=h(`div`,e,{state:p,ref:t,props:u,stateAttributesMapping:je});return(0,Ne.jsx)(be.Provider,{value:m,children:g})})})))()}var Ie,Le,Re;function ze(){return(ze=t((()=>{Ie=e(n(),1),Ae(),M(),g(),b(),L(),Le={...Oe,...fe},Re=Ie.forwardRef(function(e,t){let{panelId:n,open:r,handleTrigger:i,state:a,disabled:o}=ye(),{className:s,disabled:c=o,render:l,nativeButton:u=!0,style:d,...f}=e,{getButtonProps:p,buttonRef:m}=y({disabled:c,native:u});return h(`button`,e,{state:a,ref:[t,m],props:[{"aria-controls":r?n:void 0,"aria-expanded":r,onClick:i},f,p],stateAttributesMapping:Le})})})))()}function Be(e){let{externalRef:t,hiddenUntilFound:n,id:r,keepMounted:i,mounted:a,onOpenChange:o,open:s,setMounted:l,setOpen:d,transitionStatus:f}=e,p=H.useRef(null),h=H.useRef(null),[g,_]=H.useState(U),v=H.useRef(U),y=H.useRef(!1),b=H.useRef(s),x=H.useRef(!1),[S,C]=H.useState(!1),w=H.useRef(null),te=m(t,p),T=ee(s),E=ce(p),D=!s&&!a,O=S?`idle`:f,k=s&&(b.current||x.current),ae=!s&&a&&h.current===`css-animation`&&g.height===void 0&&g.width===void 0?v.current:g,oe=n&&D&&h.current!==`css-animation`,j=c((e,t=!0)=>{t&&(v.current=e),_(e)}),M=c(()=>{w.current?.(),w.current=null}),N=c(e=>{M(),w.current=()=>{w.current=null,e()}}),P=c(()=>{s&&a&&h.current===`css-animation`&&(x.current=!0)});u(()=>{S&&f!==`starting`&&C(!1)},[S,f]),H.useEffect(()=>()=>{P(),M()},[P,M]),u(()=>{s||(b.current=!1,x.current=!1);let e=p.current;if(!e)return;!s&&w.current&&M();let t=Ve(e,k);if(h.current=t,s&&f===`idle`&&b.current&&t===`css-animation`){v.current=B(e);return}if(s&&f===`starting`){let n=y.current;if(y.current=!1,t===`none`){j(B(e)),C(!0);return}if(t===`css-transition`){let t=Ue(e);if(j(B(e)),!n)return t;let r=V(e,`transition-duration`,`0s`);return N(r),C(!0),t}j(B(e));let r=V(e,`animation-name`,`none`);if(!n){r();return}let i=V(e,`animation-duration`,`0s`);r(),N(i),C(!0);return}if(!s&&a&&(f===`idle`||f===`starting`)){if(t===`none`){j(U,!1),l(!1);return}j(B(e));return}if(f!==`ending`)return;if(t===`none`){l(!1);return}let n=B(e);if(!(n.height>0||n.width>0)){l(!1);return}j(n),t===`css-animation`&&V(e,`animation-name`,`none`)()},[a,s,M,j,l,N,k,f]),le({enabled:s&&a&&O===`idle`,open:!0,ref:p,onComplete(){s&&j(U,!1)}}),H.useEffect(()=>{if(s||!a||O!==`ending`)return;if(!p.current){l(!1),j(U,!1);return}let e=new AbortController,t=-1;function n(){T.current||(l(!1),j(U,!1))}return t=A.request(()=>{E(n,e.signal)}),()=>{A.cancel(t),e.abort()}},[T,a,s,O,E,j,l]),u(()=>{let e=p.current;e&&n&&D&&e.setAttribute(`hidden`,`until-found`)},[D,n]),H.useEffect(function(){let e=p.current;if(!e)return;let t=se.create(),n=-1,r=(r,i)=>{t.start(0,()=>{T.current||(n=A.request(()=>{T.current||(r&&(y.current=!1),i&&e.setAttribute(R,``),e.setAttribute(`hidden`,`until-found`))}))})},i=ne(e,`beforematch`,t=>{let n=re(ie,t);if(o(!0,n),n.isCanceled){r(!1,!1);return}y.current=!0;let i=e.hasAttribute(R);e.removeAttribute(R),d(!0),r(!0,i)});return()=>{t.clear(),A.cancel(n),i()}},[T,o,d]);let ue=i||n||a||s;return{height:ae.height,props:{...oe?{[R]:``}:void 0,hidden:D,id:r},ref:te,shouldPreventOpenAnimation:k,shouldRender:ue,transitionStatus:O,width:ae.width}}function B(e){return{height:e.scrollHeight,width:e.scrollWidth}}function Ve(e,t){let n=o(e).getComputedStyle(e),r=(n.animationName.split(`,`).map(e=>e.trim()).some(e=>e!==``&&e!==`none`)||t)&&He(n.animationDuration),i=He(n.transitionDuration);return r&&i||i?`css-transition`:r?`css-animation`:`none`}function He(e){return e.split(`,`).map(e=>e.trim()).some(e=>e!==``&&Number.parseFloat(e)>0)}function V(e,t,n){let r=e.style.getPropertyValue(t),i=e.style.getPropertyPriority(t);return e.style.setProperty(t,n),()=>{if(r===``){e.style.removeProperty(t);return}e.style.setProperty(t,r,i)}}function Ue(e){let t={"justify-content":e.style.justifyContent,"align-items":e.style.alignItems,"align-content":e.style.alignContent,"justify-items":e.style.justifyItems};Object.keys(t).forEach(t=>{e.style.setProperty(t,`initial`,`important`)});function n(){Object.entries(t).forEach(([t,n])=>{if(n===``){e.style.removeProperty(t);return}e.style.setProperty(t,n)})}let r=A.request(n);return()=>{A.cancel(r),n()}}var H,U;function We(){return(We=t((()=>{H=e(n(),1),v(),d(),ae(),oe(),_(),te(),s(),T(),D(),de(),ue(),Ce(),U={height:void 0,width:void 0}})))()}var Ge,Ke;function qe(){return(qe=t((()=>{Ge=`--collapsible-panel-height`,Ke=`--collapsible-panel-width`})))()}var Je,Ye;function Xe(){return(Xe=t((()=>{Je=e(n(),1),v(),g(),L(),Me(),We(),qe(),Ye=Je.forwardRef(function(e,t){let{className:n,hiddenUntilFound:r,keepMounted:i,render:a,id:o,style:s,...c}=e,{defaultPanelId:d,mounted:f,onOpenChange:p,open:m,setMounted:g,setPanelIdState:_,setOpen:v,state:y,transitionStatus:b}=ye(),x=r??!1,S=i??!1,C=o||void 0,w=C??d;u(()=>(_(e=>C??(e===null?void 0:e)),()=>{_(e=>e===C?null:e)}),[C,_]);let{height:ee,props:te,ref:ne,shouldPreventOpenAnimation:re,shouldRender:T,transitionStatus:E,width:D}=Be({externalRef:t,hiddenUntilFound:x,id:w,keepMounted:S,mounted:f,onOpenChange:p,open:m,setMounted:g,setOpen:v,transitionStatus:b}),O={...y,transitionStatus:E},k=l(s,O),ie=h(`div`,{...e,style:void 0},{state:O,ref:ne,props:[te,{style:{[Ge]:ee===void 0?`auto`:`${ee}px`,[Ke]:D===void 0?`auto`:`${D}px`}},c,k?{style:k}:void 0,re?{style:{animationName:`none`}}:void 0],stateAttributesMapping:je});return T?ie:null})})))()}function W({className:e,onOpenChange:t,...n}){return(0,q.jsx)(Pe,{"data-slot":`collapsible`,className:a(`w-full`,e),onOpenChange:(e,n)=>{t?.(e,n)},...n})}function G({className:e,...t}){return(0,q.jsx)(Re,{"data-slot":`collapsible-trigger`,className:a(`focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-black`,e),...t})}function K({className:e,ref:t,children:n,onTransitionEnd:r,keepMounted:i=!0,...o}){return(0,q.jsx)(Ye,{ref:t,keepMounted:i,"data-slot":`collapsible-content`,className:a(`overflow-hidden`,`transition-[height,opacity] duration-200 ease-out`,`h-(--collapsible-panel-height)`,`data-starting-style:h-0 data-starting-style:opacity-0`,`data-ending-style:h-0 data-ending-style:opacity-0`,e),onTransitionEnd:e=>{if(!r)return;let t=e.currentTarget,n=t.dataset.open!==void 0,i=t.dataset.endingStyle!==void 0,a=t.hidden||t.getAttribute(`hidden`)!==null;r(e,n&&!i&&!a)},...o,children:n})}var q;function Ze(){return(Ze=t((()=>{Fe(),ze(),Xe(),i(),q=r(),W.__docgenInfo={description:``,methods:[],displayName:`Collapsible`},G.__docgenInfo={description:``,methods:[],displayName:`CollapsibleTrigger`},K.__docgenInfo={description:``,methods:[],displayName:`CollapsibleContent`,props:{keepMounted:{defaultValue:{value:`true`,computed:!1},required:!1}}}})))()}var Qe,J,$e,Y,X,Z,Q,$,et;function tt(){return(tt=t((()=>{Qe=n(),x(),pe(),Ze(),he(),J=r(),$e={title:`Components/Collapsible`,component:W,subcomponents:{CollapsibleTrigger:G,CollapsibleContent:K},parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{open:{control:`boolean`,description:`패널의 펼침/접힘 상태 (제어)`},defaultOpen:{control:`boolean`,description:`초기 펼침 상태 (비제어)`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`인터랙션 비활성화 여부`,table:{defaultValue:{summary:`false`}}},onOpenChange:{action:`openChange`,description:`열림 상태 변경 시 호출되는 이벤트 콜백`}}},Y={args:{defaultOpen:!0},render:function(e){return(0,J.jsxs)(W,{...e,className:`w-80 border border-secondary-border p-3`,children:[(0,J.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,J.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`도면 기본 정보`}),(0,J.jsx)(G,{render:(0,J.jsx)(S,{size:`sm`,variant:`outline-secondary`,children:`토글`})})]}),(0,J.jsx)(K,{children:(0,J.jsxs)(`div`,{className:`mt-3 flex flex-col gap-2 border-t border-secondary-border/60 pt-3 text-2xs text-neutral-600`,children:[(0,J.jsx)(`p`,{children:`• 좌표계: EPSG:5179 (Korea 2000)`}),(0,J.jsx)(`p`,{children:`• 단위: 미터 (m)`}),(0,J.jsx)(`p`,{children:`• 레이어 개수: 12개`})]})})]})}},X={render:function(){let[e,t]=(0,Qe.useState)(`트랜지션 완료 이벤트 대기 중...`);return(0,J.jsxs)(`div`,{className:`flex w-88 flex-col gap-3`,children:[(0,J.jsxs)(W,{defaultOpen:!1,className:`border border-secondary-border bg-white`,children:[(0,J.jsxs)(`div`,{className:`flex items-center justify-between border-b border-secondary-border/60 p-3`,children:[(0,J.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`GIS 뷰포트 레이아웃 패널`}),(0,J.jsx)(G,{render:(0,J.jsx)(S,{size:`sm`,variant:`outline-secondary`,children:`열기/닫기`})})]}),(0,J.jsx)(K,{onTransitionEnd:(e,n)=>{e.propertyName===`height`&&t(n?`패널 열림 완료 -> map.updateSize() 동기화 실행`:`패널 닫힘 완료 -> map.updateSize() 동기화 실행`)},children:(0,J.jsxs)(`div`,{className:`flex flex-col gap-2.5 p-3 text-2xs text-neutral-600`,children:[(0,J.jsx)(`p`,{children:`패널이 완전히 열리거나 닫힌 시점에 캔버스 비율 왜곡 방지를 위한 지도 리사이즈 함수가 트리거됩니다.`}),(0,J.jsx)(`div`,{className:`rounded-none bg-neutral-100 p-2 font-mono text-neutral-700`,children:`mapManager.getMap()?.updateSize();`})]})})]}),(0,J.jsx)(`div`,{className:`rounded-none border border-secondary-border bg-neutral-50 px-3 py-2`,children:(0,J.jsxs)(`span`,{className:`block font-mono text-2xs text-neutral-500`,children:[`로그: `,(0,J.jsx)(`strong`,{className:`text-neutral-800`,children:e})]})})]})}},Z={render:function(){let[e,t]=(0,Qe.useState)(!1);return(0,J.jsxs)(W,{open:e,onOpenChange:t,className:`w-84 border border-secondary-border bg-white`,children:[(0,J.jsx)(G,{className:`flex w-full items-center justify-between p-3 text-left hover:bg-neutral-50`,render:(0,J.jsxs)(`button`,{type:`button`,children:[(0,J.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`고급 렌더링 옵션`}),(0,J.jsx)(`svg`,{"aria-hidden":`true`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 20 20`,fill:`currentColor`,className:`size-4 text-neutral-500 transition-transform duration-200 ${e?`rotate-180`:``}`,children:(0,J.jsx)(`path`,{fillRule:`evenodd`,d:`M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z`,clipRule:`evenodd`})})]})}),(0,J.jsx)(K,{children:(0,J.jsxs)(`div`,{className:`flex flex-col gap-3 border-t border-secondary-border p-3`,children:[(0,J.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,J.jsx)(`span`,{className:`text-2xs text-neutral-600`,children:`BBOX 패치 분할`}),(0,J.jsx)(me,{size:`sm`,defaultChecked:!0,id:`opt-bbox`})]}),(0,J.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,J.jsx)(`span`,{className:`text-2xs text-neutral-600`,children:`WebWorker 렌더링`}),(0,J.jsx)(me,{size:`sm`,defaultChecked:!0,id:`opt-worker`})]})]})})]})}},Q={render:function(){return(0,J.jsxs)(`div`,{className:`flex w-88 flex-col gap-2`,children:[(0,J.jsxs)(W,{defaultOpen:!0,className:`border border-secondary-border bg-white shadow-xs`,children:[(0,J.jsxs)(`div`,{className:`flex items-center justify-between border-b border-secondary-border bg-neutral-50/75 px-3 py-2`,children:[(0,J.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`레이어 메타데이터`}),(0,J.jsx)(G,{render:(0,J.jsx)(S,{size:`sm`,variant:`outline-secondary`,children:`열기/닫기`})})]}),(0,J.jsx)(K,{children:(0,J.jsxs)(`div`,{className:`flex flex-col gap-2.5 p-3`,children:[(0,J.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,J.jsx)(`span`,{className:`w-20 text-2xs text-neutral-600`,children:`레이어명`}),(0,J.jsx)(ge,{size:`sm`,defaultValue:`tl_scco_ctprvn`,className:`grow font-mono`})]}),(0,J.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,J.jsx)(`span`,{className:`w-20 text-2xs text-neutral-600`,children:`허용 오차`}),(0,J.jsx)(ge,{size:`sm`,defaultValue:`0.5m`,className:`grow font-mono`})]})]})})]}),(0,J.jsxs)(W,{className:`border border-secondary-border bg-white shadow-xs`,children:[(0,J.jsxs)(`div`,{className:`flex items-center justify-between border-b border-secondary-border bg-neutral-50/75 px-3 py-2`,children:[(0,J.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`공간 필터 (BBOX)`}),(0,J.jsx)(G,{render:(0,J.jsx)(S,{size:`sm`,variant:`outline-secondary`,children:`열기/닫기`})})]}),(0,J.jsx)(K,{children:(0,J.jsxs)(`div`,{className:`flex flex-col gap-2 p-3 text-2xs text-neutral-600`,children:[(0,J.jsx)(`p`,{children:`현재 뷰포트 영역(Envelope) 내 피처만 렌더링되도록 쿼리가 제한됩니다.`}),(0,J.jsx)(`div`,{className:`flex justify-end pt-1`,children:(0,J.jsx)(S,{size:`sm`,variant:`primary`,children:`필터 적용`})})]})})]})]})}},$={render:()=>(0,J.jsxs)(W,{disabled:!0,className:`w-80 border border-secondary-border p-3 opacity-60`,children:[(0,J.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,J.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`잠긴 설정 패널`}),(0,J.jsx)(G,{render:(0,J.jsx)(S,{size:`sm`,variant:`outline-secondary`,disabled:!0,children:`접힘 고정`})})]}),(0,J.jsx)(K,{children:(0,J.jsx)(`p`,{className:`mt-2 text-2xs text-neutral-500`,children:`비활성화되어 열 수 없습니다.`})})]})},et=[`Default`,`TransitionEndEvent`,`AccordionStyle`,`LayerPropertyPanel`,`Disabled`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  },
  render: function Render(args) {
    return <Collapsible {...args} className="w-80 border border-secondary-border p-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-secondary-foreground">
            도면 기본 정보
          </span>
          <CollapsibleTrigger render={<Button size="sm" variant="outline-secondary">
                토글
              </Button>} />
        </div>
        <CollapsibleContent>
          <div className="mt-3 flex flex-col gap-2 border-t border-secondary-border/60 pt-3 text-2xs text-neutral-600">
            <p>• 좌표계: EPSG:5179 (Korea 2000)</p>
            <p>• 단위: 미터 (m)</p>
            <p>• 레이어 개수: 12개</p>
          </div>
        </CollapsibleContent>
      </Collapsible>;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [statusLog, setStatusLog] = useState<string>('트랜지션 완료 이벤트 대기 중...');
    return <div className="flex w-88 flex-col gap-3">
        <Collapsible defaultOpen={false} className="border border-secondary-border bg-white">
          <div className="flex items-center justify-between border-b border-secondary-border/60 p-3">
            <span className="text-xs font-semibold text-secondary-foreground">
              GIS 뷰포트 레이아웃 패널
            </span>
            <CollapsibleTrigger render={<Button size="sm" variant="outline-secondary">
                  열기/닫기
                </Button>} />
          </div>
          <CollapsibleContent onTransitionEnd={(e, isOpen) => {
          // height 애니메이션 종료 감지
          if (e.propertyName === 'height') {
            const message = isOpen ? '패널 열림 완료 -> map.updateSize() 동기화 실행' : '패널 닫힘 완료 -> map.updateSize() 동기화 실행';
            setStatusLog(message);
          }
        }}>
            <div className="flex flex-col gap-2.5 p-3 text-2xs text-neutral-600">
              <p>
                패널이 완전히 열리거나 닫힌 시점에 캔버스 비율 왜곡 방지를 위한
                지도 리사이즈 함수가 트리거됩니다.
              </p>
              <div className="rounded-none bg-neutral-100 p-2 font-mono text-neutral-700">
                mapManager.getMap()?.updateSize();
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* 이벤트 결과 상태 표시 바 */}
        <div className="rounded-none border border-secondary-border bg-neutral-50 px-3 py-2">
          <span className="block font-mono text-2xs text-neutral-500">
            로그: <strong className="text-neutral-800">{statusLog}</strong>
          </span>
        </div>
      </div>;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    return <Collapsible open={open} onOpenChange={setOpen} className="w-84 border border-secondary-border bg-white">
        <CollapsibleTrigger className="flex w-full items-center justify-between p-3 text-left hover:bg-neutral-50" render={<button type="button">
              <span className="text-xs font-semibold text-secondary-foreground">
                고급 렌더링 옵션
              </span>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={\`size-4 text-neutral-500 transition-transform duration-200 \${open ? 'rotate-180' : ''}\`}>
                <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </button>} />
        <CollapsibleContent>
          <div className="flex flex-col gap-3 border-t border-secondary-border p-3">
            <div className="flex items-center justify-between">
              <span className="text-2xs text-neutral-600">BBOX 패치 분할</span>
              <Checkbox size="sm" defaultChecked id="opt-bbox" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xs text-neutral-600">
                WebWorker 렌더링
              </span>
              <Checkbox size="sm" defaultChecked id="opt-worker" />
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>;
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <div className="flex w-88 flex-col gap-2">
        {/* 그룹 1: 기본 식별 정보 */}
        <Collapsible defaultOpen className="border border-secondary-border bg-white shadow-xs">
          <div className="flex items-center justify-between border-b border-secondary-border bg-neutral-50/75 px-3 py-2">
            <span className="text-xs font-semibold text-secondary-foreground">
              레이어 메타데이터
            </span>
            <CollapsibleTrigger render={<Button size="sm" variant="outline-secondary">
                  열기/닫기
                </Button>} />
          </div>
          <CollapsibleContent>
            <div className="flex flex-col gap-2.5 p-3">
              <div className="flex items-center justify-between gap-2">
                <span className="w-20 text-2xs text-neutral-600">레이어명</span>
                <TextField size="sm" defaultValue="tl_scco_ctprvn" className="grow font-mono" />
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="w-20 text-2xs text-neutral-600">
                  허용 오차
                </span>
                <TextField size="sm" defaultValue="0.5m" className="grow font-mono" />
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* 그룹 2: 쿼리 필터 설정 */}
        <Collapsible className="border border-secondary-border bg-white shadow-xs">
          <div className="flex items-center justify-between border-b border-secondary-border bg-neutral-50/75 px-3 py-2">
            <span className="text-xs font-semibold text-secondary-foreground">
              공간 필터 (BBOX)
            </span>
            <CollapsibleTrigger render={<Button size="sm" variant="outline-secondary">
                  열기/닫기
                </Button>} />
          </div>
          <CollapsibleContent>
            <div className="flex flex-col gap-2 p-3 text-2xs text-neutral-600">
              <p>
                현재 뷰포트 영역(Envelope) 내 피처만 렌더링되도록 쿼리가
                제한됩니다.
              </p>
              <div className="flex justify-end pt-1">
                <Button size="sm" variant="primary">
                  필터 적용
                </Button>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>;
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <Collapsible disabled className="w-80 border border-secondary-border p-3 opacity-60">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-secondary-foreground">
          잠긴 설정 패널
        </span>
        <CollapsibleTrigger render={<Button size="sm" variant="outline-secondary" disabled>
              접힘 고정
            </Button>} />
      </div>
      <CollapsibleContent>
        <p className="mt-2 text-2xs text-neutral-500">
          비활성화되어 열 수 없습니다.
        </p>
      </CollapsibleContent>
    </Collapsible>
}`,...$.parameters?.docs?.source}}}})))()}tt();export{Z as AccordionStyle,Y as Default,$ as Disabled,Q as LayerPropertyPanel,X as TransitionEndEvent,et as __namedExportsOrder,$e as default};