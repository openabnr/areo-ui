import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-Di8_Mevq.js";import{n as r,t as i}from"./Button-DaMgOn2H.js";import{n as a,t as o}from"./Checkbox-DbLYMU06.js";import{i as s,n as c,r as l,t as u}from"./Collapsible-Bj7sTz6d.js";import{n as d,t as f}from"./TextField-BVv8ctPj.js";function p(){let[e,t]=(0,h.useState)(`트랜지션 완료 이벤트 대기 중...`);return(0,g.jsxs)(`div`,{className:`flex w-88 flex-col gap-3`,children:[(0,g.jsxs)(u,{defaultOpen:!1,className:`border border-secondary-border bg-white`,children:[(0,g.jsxs)(`div`,{className:`flex items-center justify-between border-b border-secondary-border/60 p-3`,children:[(0,g.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`GIS 뷰포트 레이아웃 패널`}),(0,g.jsx)(l,{render:(0,g.jsx)(i,{size:`sm`,variant:`outline-secondary`,children:`열기/닫기`})})]}),(0,g.jsx)(c,{"data-testid":`transition-panel`,onTransitionEnd:(e,n)=>{e.propertyName===`height`&&t(n?`패널 열림 완료 -> map.updateSize() 동기화 실행`:`패널 닫힘 완료 -> map.updateSize() 동기화 실행`)},children:(0,g.jsxs)(`div`,{className:`flex flex-col gap-2.5 p-3 text-2xs text-neutral-600`,children:[(0,g.jsx)(`p`,{children:`패널이 완전히 열리거나 닫힌 시점에 캔버스 비율 왜곡 방지를 위한 지도 리사이즈 함수가 트리거됩니다.`}),(0,g.jsx)(`div`,{className:`rounded-none bg-neutral-100 p-2 font-mono text-neutral-700`,children:`mapManager.getMap()?.updateSize();`})]})})]}),(0,g.jsx)(`div`,{className:`rounded-none border border-secondary-border bg-neutral-50 px-3 py-2`,children:(0,g.jsxs)(`span`,{className:`block font-mono text-2xs text-neutral-500`,children:[`로그: `,(0,g.jsx)(`strong`,{className:`text-neutral-800`,children:e})]})})]})}function m(){let[e,t]=(0,h.useState)(!1);return(0,g.jsxs)(u,{open:e,onOpenChange:t,className:`w-84 border border-secondary-border bg-white`,children:[(0,g.jsx)(l,{className:`flex w-full items-center justify-between p-3 text-left hover:bg-neutral-50`,render:(0,g.jsxs)(`button`,{type:`button`,children:[(0,g.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`고급 렌더링 옵션`}),(0,g.jsx)(`svg`,{"aria-hidden":`true`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 20 20`,fill:`currentColor`,className:`size-4 text-neutral-500 transition-transform duration-200 ${e?`rotate-180`:``}`,children:(0,g.jsx)(`path`,{fillRule:`evenodd`,d:`M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z`,clipRule:`evenodd`})})]})}),(0,g.jsx)(c,{children:(0,g.jsxs)(`div`,{className:`flex flex-col gap-3 border-t border-secondary-border p-3`,children:[(0,g.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,g.jsx)(`span`,{className:`text-2xs text-neutral-600`,children:`BBOX 패치 분할`}),(0,g.jsx)(o,{size:`sm`,defaultChecked:!0,id:`opt-bbox`})]}),(0,g.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,g.jsx)(`span`,{className:`text-2xs text-neutral-600`,children:`WebWorker 렌더링`}),(0,g.jsx)(o,{size:`sm`,defaultChecked:!0,id:`opt-worker`})]})]})})]})}var h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{h=t(),r(),a(),s(),d(),g=n(),{expect:_,fireEvent:v,fn:y,userEvent:b,within:x}=__STORYBOOK_MODULE_TEST__,S={title:`Components/Collapsible`,component:u,subcomponents:{CollapsibleTrigger:l,CollapsibleContent:c},parameters:{layout:`centered`},tags:[`autodocs`],args:{onOpenChange:y()},argTypes:{open:{control:`boolean`,description:`패널의 펼침/접힘 상태 (제어)`},defaultOpen:{control:`boolean`,description:`초기 펼침 상태 (비제어)`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`인터랙션 비활성화 여부`,table:{defaultValue:{summary:`false`}}}}},C={args:{defaultOpen:!0},render:e=>(0,g.jsxs)(u,{...e,className:`w-80 border border-secondary-border p-3`,children:[(0,g.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,g.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`도면 기본 정보`}),(0,g.jsx)(l,{render:(0,g.jsx)(i,{size:`sm`,variant:`outline-secondary`,children:`토글`})})]}),(0,g.jsx)(c,{children:(0,g.jsxs)(`div`,{className:`mt-3 flex flex-col gap-2 border-t border-secondary-border/60 pt-3 text-2xs text-neutral-600`,children:[(0,g.jsx)(`p`,{children:`• 좌표계: EPSG:5179 (Korea 2000)`}),(0,g.jsx)(`p`,{children:`• 단위: 미터 (m)`}),(0,g.jsx)(`p`,{children:`• 레이어 개수: 12개`})]})})]}),play:async({canvasElement:e,args:t})=>{let n=x(e).getByRole(`button`,{name:`토글`});await b.click(n),await _(t.onOpenChange).toHaveBeenCalledTimes(1),await b.click(n),await _(t.onOpenChange).toHaveBeenCalledTimes(2)}},w={render:()=>(0,g.jsx)(p,{}),play:async({canvasElement:e})=>{let t=x(e),n=t.getByRole(`button`,{name:`열기/닫기`}),r=t.getByTestId(`transition-panel`);await b.click(n),await v.transitionEnd(r,{propertyName:`opacity`}),await v.transitionEnd(r,{propertyName:`height`}),await _(await t.findByText(/패널 열림 완료 -> map\.updateSize\(\)/)).toBeInTheDocument(),await b.click(n),await v.transitionEnd(r,{propertyName:`height`}),await _(await t.findByText(/패널 닫힘 완료 -> map\.updateSize\(\)/)).toBeInTheDocument()}},T={render:()=>(0,g.jsx)(m,{})},E={render:()=>(0,g.jsxs)(`div`,{className:`flex w-88 flex-col gap-2`,children:[(0,g.jsxs)(u,{defaultOpen:!0,className:`border border-secondary-border bg-white shadow-xs`,children:[(0,g.jsxs)(`div`,{className:`flex items-center justify-between border-b border-secondary-border bg-neutral-50/75 px-3 py-2`,children:[(0,g.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`레이어 메타데이터`}),(0,g.jsx)(l,{render:(0,g.jsx)(i,{size:`sm`,variant:`outline-secondary`,children:`열기/닫기`})})]}),(0,g.jsx)(c,{children:(0,g.jsxs)(`div`,{className:`flex flex-col gap-2.5 p-3`,children:[(0,g.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,g.jsx)(`span`,{className:`w-20 text-2xs text-neutral-600`,children:`레이어명`}),(0,g.jsx)(f,{size:`sm`,defaultValue:`tl_scco_ctprvn`,className:`grow font-mono`})]}),(0,g.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,g.jsx)(`span`,{className:`w-20 text-2xs text-neutral-600`,children:`허용 오차`}),(0,g.jsx)(f,{size:`sm`,defaultValue:`0.5m`,className:`grow font-mono`})]})]})})]}),(0,g.jsxs)(u,{className:`border border-secondary-border bg-white shadow-xs`,children:[(0,g.jsxs)(`div`,{className:`flex items-center justify-between border-b border-secondary-border bg-neutral-50/75 px-3 py-2`,children:[(0,g.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`공간 필터 (BBOX)`}),(0,g.jsx)(l,{render:(0,g.jsx)(i,{size:`sm`,variant:`outline-secondary`,children:`열기/닫기`})})]}),(0,g.jsx)(c,{children:(0,g.jsxs)(`div`,{className:`flex flex-col gap-2 p-3 text-2xs text-neutral-600`,children:[(0,g.jsx)(`p`,{children:`현재 뷰포트 영역(Envelope) 내 피처만 렌더링되도록 쿼리가 제한됩니다.`}),(0,g.jsx)(`div`,{className:`flex justify-end pt-1`,children:(0,g.jsx)(i,{size:`sm`,variant:`primary`,children:`필터 적용`})})]})})]})]})},D={render:()=>(0,g.jsxs)(u,{disabled:!0,className:`w-80 border border-secondary-border p-3 opacity-60`,children:[(0,g.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,g.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`잠긴 설정 패널`}),(0,g.jsx)(l,{render:(0,g.jsx)(i,{size:`sm`,variant:`outline-secondary`,disabled:!0,children:`접힘 고정`})})]}),(0,g.jsx)(c,{children:(0,g.jsx)(`p`,{className:`mt-2 text-2xs text-neutral-500`,children:`비활성화되어 열 수 없습니다.`})})]})},O=[`Default`,`TransitionEndEvent`,`AccordionStyle`,`LayerPropertyPanel`,`Disabled`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  },
  render: args => <Collapsible {...args} className="w-80 border border-secondary-border p-3">
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
    </Collapsible>,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const toggleBtn = canvas.getByRole('button', {
      name: '토글'
    });
    await userEvent.click(toggleBtn);
    await expect(args.onOpenChange).toHaveBeenCalledTimes(1);
    await userEvent.click(toggleBtn);
    await expect(args.onOpenChange).toHaveBeenCalledTimes(2);
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <TransitionEndDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggleBtn = canvas.getByRole('button', {
      name: '열기/닫기'
    });
    const panel = canvas.getByTestId('transition-panel');

    // 1. 패널 열기 클릭 후 opacity(무시 분기) 및 height(열림 완료 분기) transitionEnd 발화
    await userEvent.click(toggleBtn);
    await fireEvent.transitionEnd(panel, {
      propertyName: 'opacity'
    });
    await fireEvent.transitionEnd(panel, {
      propertyName: 'height'
    });
    await expect(await canvas.findByText(/패널 열림 완료 -> map\\.updateSize\\(\\)/)).toBeInTheDocument();

    // 2. 패널 닫기 클릭 후 height(닫힘 완료 분기) transitionEnd 발화
    await userEvent.click(toggleBtn);
    await fireEvent.transitionEnd(panel, {
      propertyName: 'height'
    });
    await expect(await canvas.findByText(/패널 닫힘 완료 -> map\\.updateSize\\(\\)/)).toBeInTheDocument();
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <AccordionDemo />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-88 flex-col gap-2">
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
              <span className="w-20 text-2xs text-neutral-600">허용 오차</span>
              <TextField size="sm" defaultValue="0.5m" className="grow font-mono" />
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

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
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}}})))()}k();export{T as AccordionStyle,C as Default,D as Disabled,E as LayerPropertyPanel,w as TransitionEndEvent,O as __namedExportsOrder,S as default};