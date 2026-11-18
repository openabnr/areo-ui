import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-BZtAOQya.js";import{n as r,t as i}from"./Button-Cyg3IDYi.js";import{n as a,t as o}from"./Checkbox-DBMgQYdQ.js";import{i as s,n as c,r as l,t as u}from"./Collapsible-D_2VErvY.js";import{n as d,t as f}from"./TextField-CEdXki37.js";var p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{p=t(),r(),a(),s(),d(),m=n(),h={title:`Components/Collapsible`,component:u,subcomponents:{CollapsibleTrigger:l,CollapsibleContent:c},parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{open:{control:`boolean`,description:`패널의 펼침/접힘 상태 (제어)`},defaultOpen:{control:`boolean`,description:`초기 펼침 상태 (비제어)`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`인터랙션 비활성화 여부`,table:{defaultValue:{summary:`false`}}},onOpenChange:{action:`openChange`,description:`열림 상태 변경 시 호출되는 이벤트 콜백`}}},g={args:{defaultOpen:!0},render:function(e){return(0,m.jsxs)(u,{...e,className:`w-80 border border-secondary-border p-3`,children:[(0,m.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,m.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`도면 기본 정보`}),(0,m.jsx)(l,{render:(0,m.jsx)(i,{size:`sm`,variant:`outline-secondary`,children:`토글`})})]}),(0,m.jsx)(c,{children:(0,m.jsxs)(`div`,{className:`mt-3 flex flex-col gap-2 border-t border-secondary-border/60 pt-3 text-2xs text-neutral-600`,children:[(0,m.jsx)(`p`,{children:`• 좌표계: EPSG:5179 (Korea 2000)`}),(0,m.jsx)(`p`,{children:`• 단위: 미터 (m)`}),(0,m.jsx)(`p`,{children:`• 레이어 개수: 12개`})]})})]})}},_={render:function(){let[e,t]=(0,p.useState)(`트랜지션 완료 이벤트 대기 중...`);return(0,m.jsxs)(`div`,{className:`flex w-88 flex-col gap-3`,children:[(0,m.jsxs)(u,{defaultOpen:!1,className:`border border-secondary-border bg-white`,children:[(0,m.jsxs)(`div`,{className:`flex items-center justify-between border-b border-secondary-border/60 p-3`,children:[(0,m.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`GIS 뷰포트 레이아웃 패널`}),(0,m.jsx)(l,{render:(0,m.jsx)(i,{size:`sm`,variant:`outline-secondary`,children:`열기/닫기`})})]}),(0,m.jsx)(c,{onTransitionEnd:(e,n)=>{e.propertyName===`height`&&t(n?`패널 열림 완료 -> map.updateSize() 동기화 실행`:`패널 닫힘 완료 -> map.updateSize() 동기화 실행`)},children:(0,m.jsxs)(`div`,{className:`flex flex-col gap-2.5 p-3 text-2xs text-neutral-600`,children:[(0,m.jsx)(`p`,{children:`패널이 완전히 열리거나 닫힌 시점에 캔버스 비율 왜곡 방지를 위한 지도 리사이즈 함수가 트리거됩니다.`}),(0,m.jsx)(`div`,{className:`rounded-none bg-neutral-100 p-2 font-mono text-neutral-700`,children:`mapManager.getMap()?.updateSize();`})]})})]}),(0,m.jsx)(`div`,{className:`rounded-none border border-secondary-border bg-neutral-50 px-3 py-2`,children:(0,m.jsxs)(`span`,{className:`block font-mono text-2xs text-neutral-500`,children:[`로그: `,(0,m.jsx)(`strong`,{className:`text-neutral-800`,children:e})]})})]})}},v={render:function(){let[e,t]=(0,p.useState)(!1);return(0,m.jsxs)(u,{open:e,onOpenChange:t,className:`w-84 border border-secondary-border bg-white`,children:[(0,m.jsx)(l,{className:`flex w-full items-center justify-between p-3 text-left hover:bg-neutral-50`,render:(0,m.jsxs)(`button`,{type:`button`,children:[(0,m.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`고급 렌더링 옵션`}),(0,m.jsx)(`svg`,{"aria-hidden":`true`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 20 20`,fill:`currentColor`,className:`size-4 text-neutral-500 transition-transform duration-200 ${e?`rotate-180`:``}`,children:(0,m.jsx)(`path`,{fillRule:`evenodd`,d:`M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z`,clipRule:`evenodd`})})]})}),(0,m.jsx)(c,{children:(0,m.jsxs)(`div`,{className:`flex flex-col gap-3 border-t border-secondary-border p-3`,children:[(0,m.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,m.jsx)(`span`,{className:`text-2xs text-neutral-600`,children:`BBOX 패치 분할`}),(0,m.jsx)(o,{size:`sm`,defaultChecked:!0,id:`opt-bbox`})]}),(0,m.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,m.jsx)(`span`,{className:`text-2xs text-neutral-600`,children:`WebWorker 렌더링`}),(0,m.jsx)(o,{size:`sm`,defaultChecked:!0,id:`opt-worker`})]})]})})]})}},y={render:function(){return(0,m.jsxs)(`div`,{className:`flex w-88 flex-col gap-2`,children:[(0,m.jsxs)(u,{defaultOpen:!0,className:`border border-secondary-border bg-white shadow-xs`,children:[(0,m.jsxs)(`div`,{className:`flex items-center justify-between border-b border-secondary-border bg-neutral-50/75 px-3 py-2`,children:[(0,m.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`레이어 메타데이터`}),(0,m.jsx)(l,{render:(0,m.jsx)(i,{size:`sm`,variant:`outline-secondary`,children:`열기/닫기`})})]}),(0,m.jsx)(c,{children:(0,m.jsxs)(`div`,{className:`flex flex-col gap-2.5 p-3`,children:[(0,m.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,m.jsx)(`span`,{className:`w-20 text-2xs text-neutral-600`,children:`레이어명`}),(0,m.jsx)(f,{size:`sm`,defaultValue:`tl_scco_ctprvn`,className:`grow font-mono`})]}),(0,m.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,m.jsx)(`span`,{className:`w-20 text-2xs text-neutral-600`,children:`허용 오차`}),(0,m.jsx)(f,{size:`sm`,defaultValue:`0.5m`,className:`grow font-mono`})]})]})})]}),(0,m.jsxs)(u,{className:`border border-secondary-border bg-white shadow-xs`,children:[(0,m.jsxs)(`div`,{className:`flex items-center justify-between border-b border-secondary-border bg-neutral-50/75 px-3 py-2`,children:[(0,m.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`공간 필터 (BBOX)`}),(0,m.jsx)(l,{render:(0,m.jsx)(i,{size:`sm`,variant:`outline-secondary`,children:`열기/닫기`})})]}),(0,m.jsx)(c,{children:(0,m.jsxs)(`div`,{className:`flex flex-col gap-2 p-3 text-2xs text-neutral-600`,children:[(0,m.jsx)(`p`,{children:`현재 뷰포트 영역(Envelope) 내 피처만 렌더링되도록 쿼리가 제한됩니다.`}),(0,m.jsx)(`div`,{className:`flex justify-end pt-1`,children:(0,m.jsx)(i,{size:`sm`,variant:`primary`,children:`필터 적용`})})]})})]})]})}},b={render:()=>(0,m.jsxs)(u,{disabled:!0,className:`w-80 border border-secondary-border p-3 opacity-60`,children:[(0,m.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,m.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`잠긴 설정 패널`}),(0,m.jsx)(l,{render:(0,m.jsx)(i,{size:`sm`,variant:`outline-secondary`,disabled:!0,children:`접힘 고정`})})]}),(0,m.jsx)(c,{children:(0,m.jsx)(`p`,{className:`mt-2 text-2xs text-neutral-500`,children:`비활성화되어 열 수 없습니다.`})})]})},x=[`Default`,`TransitionEndEvent`,`AccordionStyle`,`LayerPropertyPanel`,`Disabled`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}}})))()}S();export{v as AccordionStyle,g as Default,b as Disabled,y as LayerPropertyPanel,_ as TransitionEndEvent,x as __namedExportsOrder,h as default};