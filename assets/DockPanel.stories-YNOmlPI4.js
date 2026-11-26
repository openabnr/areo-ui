import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-CfFMW0hA.js";import{n as r,r as i,t as a}from"./DockPanel-lFqQ04co.js";async function o(e,t,n){let r=e.ownerDocument.defaultView;if(!r)return;let i=e.getBoundingClientRect(),a=i.left+(n===0?0:20),o=i.top+(t===0?0:20);await m.mouseDown(e,{button:0,clientX:a,clientY:o}),await m.mouseMove(r,{button:0,clientX:a+t,clientY:o+n}),await m.mouseUp(r,{button:0,clientX:a+t,clientY:o+n})}function s(e,t=400,n=600,r=!1){let i=document.implementation.createHTMLDocument(e),a=!1,o={document:i,location:{href:`about:blank`},outerWidth:t+20,outerHeight:n+40,innerWidth:t,innerHeight:n,screenLeft:120,screenTop:120,get closed(){return a},resizeTo:h(),close:()=>{a=!0},addEventListener:h(),removeEventListener:h()};return{popup:r?new Proxy(o,{set(){throw Error(`Blocked a frame with origin from accessing a cross-origin frame.`)}}):o,markClosed:()=>{a=!0}}}function c({title:e=`레이어 관리자`,description:t,items:n=[`행정경계_시군구 (EPSG:5179)`,`수자원_하천망 (EPSG:5179)`,`수치표고모델 (DEM 5M)`]}){let{isPoppedOut:r,popout:a,popin:o}=i(),s=r?b:y;return(0,f.jsxs)(`div`,{className:`bg-background text-foreground flex size-full flex-col`,children:[(0,f.jsxs)(`div`,{className:`bg-muted/40 flex h-10 shrink-0 items-center justify-between border-b px-3 select-none`,children:[(0,f.jsx)(`span`,{className:`text-xs font-semibold`,children:e}),(0,f.jsx)(`button`,{type:`button`,onClick:r?o:a,className:`border-input bg-background hover:bg-accent cursor-pointer rounded border px-2 py-1 text-[11px] font-medium shadow-xs`,title:s,children:s})]}),(0,f.jsxs)(`div`,{className:`flex flex-1 flex-col gap-3 overflow-auto p-3 text-xs`,children:[(0,f.jsxs)(`div`,{className:`bg-muted/10 rounded-md border p-2`,children:[(0,f.jsx)(`p`,{className:`text-foreground font-medium`,children:r?`새 창 모드 활성화됨`:`도킹 모드`}),(0,f.jsx)(`p`,{className:`mt-1 leading-relaxed text-muted-foreground`,children:t??(r?`현재 별도의 브라우저 창에서 실행 중입니다. 상단 버튼을 누르면 본 화면으로 복귀합니다.`:`패널 경계선을 드래그하여 크기를 조절할 수 있습니다.`)})]}),(0,f.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,f.jsx)(`span`,{className:`font-semibold text-muted-foreground`,children:`항목 목록`}),n.map((e,t)=>(0,f.jsxs)(`label`,{className:`hover:bg-muted/30 flex cursor-pointer items-center gap-2 rounded px-2 py-1.5`,children:[(0,f.jsx)(`input`,{type:`checkbox`,defaultChecked:t===0,className:`accent-primary`}),(0,f.jsx)(`span`,{className:`truncate`,children:e})]},e))]})]})]})}function l(e){let[t,n]=(0,d.useState)(!1),r=(0,d.useRef)(null),i=(0,d.useCallback)(()=>{t?n(!1):r.current?.()},[t]);return(0,f.jsxs)(`div`,{className:`flex h-screen w-full flex-col overflow-hidden`,children:[(0,f.jsxs)(`header`,{className:`bg-background flex h-12 shrink-0 items-center justify-between border-b px-4`,children:[(0,f.jsx)(`span`,{className:`text-sm font-bold`,children:`전역 앱 툴바`}),(0,f.jsx)(`button`,{type:`button`,onClick:i,className:`border-input hover:bg-accent cursor-pointer rounded border px-3 py-1 text-xs font-semibold`,children:t?`본 화면으로 패널 복귀`:`외부 툴바에서 새 창 분리`})]}),(0,f.jsxs)(`div`,{className:`bg-muted/20 flex flex-1 overflow-hidden`,children:[(0,f.jsx)(a,{...e,className:`border-r`,isPoppedOut:t,onPopoutChange:t=>{n(t),e.onPopoutChange?.(t)},registerPopoutTrigger:e=>{r.current=e},children:(0,f.jsx)(c,{title:`외부 제어 독 패널`})}),(0,f.jsx)(`main`,{className:`flex flex-1 items-center justify-center p-6 text-muted-foreground`,children:(0,f.jsx)(`span`,{className:`text-sm`,children:`외부 제어 동기화 뷰포트`})})]})]})}function u(){return i(),null}var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{d=t(),r(),f=n(),{expect:p,fireEvent:m,fn:h,userEvent:g,waitFor:_,within:v}=__STORYBOOK_MODULE_TEST__,y=`새 창으로 분리`,b=`본 화면으로 복귀`,x=`본 창으로 복귀`,S=`bg-muted/20 flex h-screen w-full overflow-hidden`,C=`bg-muted/20 flex h-screen w-full flex-col overflow-hidden`,w={title:`Layout/DockPanel`,component:a,parameters:{layout:`fullscreen`},tags:[`autodocs`],args:{onResizeStart:h(),onResize:h(),onResizeStop:h(),onPopoutChange:h(),onWindowClose:h(),onPopoutFeaturesChange:h()},argTypes:{defaultWidth:{control:`text`,description:`패널의 초기 너비 (px 또는 CSS 단위)`},defaultHeight:{control:`text`,description:`패널의 초기 높이 (px 또는 CSS 단위)`},minWidth:{control:`number`,description:`최소 너비 제한`},maxWidth:{control:`number`,description:`최대 너비 제한`},minHeight:{control:`number`,description:`최소 높이 제한`},maxHeight:{control:`number`,description:`최대 높이 제한`},resizable:{control:`boolean`,description:`리사이징 기능 활성화 여부`},allowPopout:{control:`boolean`,description:`새 창 분리(Pop-out) 기능 허용 여부`},showPlaceholderOnPopout:{control:`boolean`,description:`새 창으로 분리되었을 때 본래 위치에 플레이스홀더 영역 표시 여부`},windowTitle:{control:`text`,description:`새 창으로 띄웠을 때 브라우저 윈도우 타이틀`}}},T={render:e=>(0,f.jsxs)(`div`,{className:S,children:[(0,f.jsx)(a,{className:`border-r`,...e,children:(0,f.jsx)(c,{title:`레이어 속성`})}),(0,f.jsx)(`main`,{className:`flex flex-1 items-center justify-center p-6 text-center text-muted-foreground`,children:(0,f.jsx)(`div`,{className:`max-w-md`,children:(0,f.jsx)(`h2`,{className:`text-foreground text-lg font-bold`,children:`메인 뷰포트 (Map Canvas)`})})})]}),args:{defaultWidth:320,defaultHeight:`100%`,minWidth:200,maxWidth:600,resizable:!0,allowPopout:!0,showPlaceholderOnPopout:!1,windowTitle:`레이어 속성 - 새 창`},play:async({canvasElement:e,args:t})=>{await o(v(e).getByRole(`button`,{name:`right resize handle`}),40,0),await p(t.onResizeStop).toHaveBeenCalled();let n=e.querySelector(`[data-slot="dock-panel-content"]`);n&&(await m.scroll(n),Object.defineProperty(n,"scrollLeft",{writable:!0,value:25}),await m.scroll(n),await p(n.scrollLeft).toBe(0))}},E={render:()=>(0,f.jsxs)(`div`,{className:S,children:[(0,f.jsx)(a,{resizable:!1,defaultWidth:`50%`,className:`border-r`,children:(0,f.jsx)(c,{title:`고정 너비 패널`})}),(0,f.jsx)(`main`,{className:`flex flex-1 items-center justify-center p-6 text-muted-foreground`,children:`고정 너비 레이아웃`})]}),play:async({canvasElement:e})=>{let t=v(e);await p(t.queryByRole(`button`,{name:/resize handle/i})).toBeNull()}},D={render:e=>(0,f.jsxs)(`div`,{className:S,children:[(0,f.jsx)(`main`,{className:`flex flex-1 items-center justify-center p-6 text-center text-muted-foreground`,children:(0,f.jsx)(`div`,{className:`max-w-md`,children:(0,f.jsx)(`h2`,{className:`text-foreground text-lg font-bold`,children:`메인 작업 영역`})})}),(0,f.jsx)(a,{...e,className:`border-l`,resizeDirections:{left:!0},children:(0,f.jsx)(c,{title:`스타일러 설정`,items:[`단일 심볼 렌더러`,`분류값 사용 심볼 (Categorized)`,`단계 구분 심볼 (Graduated)`]})})]}),args:{defaultWidth:360,defaultHeight:`100%`,minWidth:240,maxWidth:640,resizable:!0,allowPopout:!0,windowTitle:`스타일러 - 독립 창`}},O={render:()=>(0,f.jsxs)(`div`,{className:`bg-background flex h-screen w-full flex-col overflow-hidden`,children:[(0,f.jsx)(`header`,{className:`bg-muted/30 flex h-11 shrink-0 items-center justify-between border-b px-4 select-none`,children:(0,f.jsx)(`span`,{className:`text-foreground text-xs font-semibold tracking-tight`,children:`GIS Map Workspace (Dual Dock Layout)`})}),(0,f.jsxs)(`div`,{className:`relative flex w-full flex-1 overflow-hidden`,children:[(0,f.jsx)(a,{className:`border-r`,defaultWidth:300,defaultHeight:`100%`,minWidth:200,maxWidth:500,resizable:!0,resizeDirections:{right:!0},allowPopout:!0,windowTitle:`좌측 레이어 트리 - 독립 창`,children:(0,f.jsx)(c,{title:`레이어 트리`})}),(0,f.jsx)(`main`,{className:`bg-muted/20 relative flex flex-1 flex-col items-center justify-center overflow-hidden p-6 text-center`,children:(0,f.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`Map Viewport Area`})}),(0,f.jsx)(a,{defaultWidth:340,defaultHeight:`100%`,minWidth:220,maxWidth:550,resizable:!0,className:`border-l`,resizeDirections:{left:!0},allowPopout:!0,windowTitle:`우측 속성 관리자 - 독립 창`,children:(0,f.jsx)(c,{title:`속성 & 심볼러`})})]})]})},k={render:e=>(0,f.jsxs)(`div`,{className:C,children:[(0,f.jsx)(a,{...e,className:`border-b`,resizeDirections:{bottom:!0},children:(0,f.jsx)(c,{title:`공간 필터 & 통계 분석 툴바`})}),(0,f.jsx)(`main`,{className:`flex flex-1 items-center justify-center p-6 text-center text-muted-foreground`,children:(0,f.jsx)(`div`,{className:`max-w-md`,children:(0,f.jsx)(`h2`,{className:`text-foreground text-lg font-bold`,children:`메인 지도 영역 (Viewport)`})})})]}),args:{defaultWidth:`100%`,defaultHeight:220,minHeight:140,maxHeight:500,resizable:!0,allowPopout:!0,showPlaceholderOnPopout:!1,windowTitle:`공간 분석 툴바 - 새 창`},play:async({canvasElement:e,args:t})=>{await o(v(e).getByRole(`button`,{name:`bottom resize handle`}),0,30),await p(t.onResizeStop).toHaveBeenCalled()}},A={render:e=>(0,f.jsxs)(`div`,{className:C,children:[(0,f.jsx)(`main`,{className:`flex flex-1 items-center justify-center p-6 text-center text-muted-foreground`,children:(0,f.jsx)(`h2`,{className:`text-foreground text-lg font-bold`,children:`지도 메인 캔버스`})}),(0,f.jsx)(a,{...e,className:`border-t`,resizeDirections:{top:!0},children:(0,f.jsx)(c,{title:`속성 테이블 (Feature Attribute Table)`})})]}),args:{defaultWidth:`100%`,defaultHeight:260,minHeight:`15vh`,maxHeight:`60vh`,resizable:!0,allowPopout:!0,showPlaceholderOnPopout:!1,windowTitle:`속성 테이블 - 새 창`},play:async({canvasElement:e,args:t})=>{let n=v(e),r=globalThis.open,i=s(`Bottom Dock Popup`,800,320);globalThis.open=h(()=>i.popup);try{await g.click(n.getByRole(`button`,{name:y})),i.markClosed(),await _(async()=>{await p(t.onPopoutChange).toHaveBeenCalledWith(!1)})}finally{globalThis.open=r}}},j={render:e=>(0,f.jsxs)(`div`,{className:S,children:[(0,f.jsx)(a,{...e,className:`border-r`,children:(0,f.jsx)(c,{title:`독립 분리 가능 패널`})}),(0,f.jsx)(`main`,{className:`flex flex-1 items-center justify-center p-6 text-center text-muted-foreground`,children:(0,f.jsx)(`p`,{className:`text-sm`,children:`플레이스홀더 복귀 검증`})})]}),args:{defaultWidth:340,defaultHeight:`100%`,minWidth:`15vw`,maxWidth:`50vw`,resizable:!0,allowPopout:!0,showPlaceholderOnPopout:!0,windowTitle:`플레이스홀더 검증 창`},play:async({canvasElement:e,args:t})=>{let n=v(e),r=globalThis.open,i=s(`Dock Placeholder Popup`,400,600);globalThis.open=h(()=>i.popup);try{await g.click(n.getByRole(`button`,{name:y})),await p(t.onPopoutChange).toHaveBeenCalledWith(!0);let e=await n.findByRole(`button`,{name:x});await g.click(e),await p(t.onPopoutChange).toHaveBeenCalledWith(!1)}finally{globalThis.open=r}}},M={render:e=>(0,f.jsx)(l,{...e}),args:{defaultWidth:320,defaultHeight:`100%`,resizable:!0,allowPopout:!0,showPlaceholderOnPopout:!1,windowTitle:`외부 제어 팝아웃 패널`},play:async({canvasElement:e,args:t})=>{let n=v(e),r=globalThis.open,i=s(`Controlled Dock Popup`,400,600);globalThis.open=h(()=>i.popup);try{await g.click(n.getByRole(`button`,{name:`외부 툴바에서 새 창 분리`})),await p(t.onPopoutChange).toHaveBeenCalledWith(!0),i.markClosed(),await _(async()=>{await p(t.onPopoutChange).toHaveBeenCalledWith(!1)})}finally{globalThis.open=r}}},N=class extends d.Component{state={error:null};static getDerivedStateFromError(e){return{error:e.message}}render(){return this.state.error?(0,f.jsx)(`div`,{"data-testid":this.props.label,children:this.state.error}):this.props.children}},P={render:function(){let[e,t]=(0,d.useState)(!1),[n,r]=(0,d.useState)(!1),[i,o]=(0,d.useState)(!1),[s,l]=(0,d.useState)(!1);return(0,f.jsxs)(`div`,{className:`flex flex-col gap-3 p-4`,children:[(0,f.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,f.jsx)(`button`,{type:`button`,onClick:()=>t(!0),className:`border px-2 py-1 text-xs`,children:`훅 에러 트리거`}),(0,f.jsx)(`button`,{type:`button`,onClick:()=>r(!0),className:`border px-2 py-1 text-xs`,children:`초기 팝아웃(fallback) 마운트`}),(0,f.jsx)(`button`,{type:`button`,onClick:()=>o(!0),className:`border px-2 py-1 text-xs`,children:`초기 팝아웃(features) 마운트`}),(0,f.jsx)(`button`,{type:`button`,onClick:()=>l(!0),className:`border px-2 py-1 text-xs`,children:`parseBound 경계값 마운트`})]}),e&&(0,f.jsx)(N,{label:`dock-hook-error`,children:(0,f.jsx)(u,{})}),(0,f.jsx)(`div`,{className:`h-40 w-80 border`,children:(0,f.jsx)(a,{allowPopout:!1,defaultWidth:260,children:(0,f.jsx)(c,{title:`팝아웃 금지 패널`})})}),n&&(0,f.jsx)(a,{isPoppedOut:!0,defaultWidth:`50%`,defaultHeight:`100%`,showPlaceholderOnPopout:!0,children:(0,f.jsx)(`div`,{children:`Fallback Popout`})}),i&&(0,f.jsx)(a,{isPoppedOut:!0,initialPopoutFeatures:{left:40,top:40,width:320,height:420},showPlaceholderOnPopout:!0,children:(0,f.jsx)(`div`,{children:`Initial Features Popout`})}),s&&(0,f.jsx)(`div`,{className:`h-40 w-80 border`,children:(0,f.jsx)(a,{defaultWidth:`auto`,minWidth:NaN,maxWidth:`300px`,minHeight:`NaNvh`,maxHeight:`NaNvw`,isPoppedOut:!0,children:(0,f.jsx)(`div`,{children:`Bound Edge Panel`})})})]})},play:async({canvasElement:e})=>{let t=v(e),n=globalThis.open,r=s(`Edge Case Popup`,400,500,!0);globalThis.open=h(()=>r.popup);let i=console.error;console.error=h();try{await g.click(t.getByRole(`button`,{name:`훅 에러 트리거`})),await t.findByTestId(`dock-hook-error`),await g.click(t.getByRole(`button`,{name:y})),await g.click(t.getByRole(`button`,{name:`초기 팝아웃(fallback) 마운트`})),await g.click(t.getByRole(`button`,{name:`초기 팝아웃(features) 마운트`}));let e=(await t.findAllByRole(`button`,{name:x})).at(-1);e&&await g.click(e),await g.click(t.getByRole(`button`,{name:`parseBound 경계값 마운트`}))}finally{console.error=i,globalThis.open=n}}},F=[`Default`,`NonResizable`,`RightSideDock`,`DualDockPanels`,`TopSideDock`,`BottomSideDock`,`WithPopoutPlaceholder`,`ControlledPopout`,`EdgeCases`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <div className={HORIZONTAL_LAYOUT_CLASS}>
      <DockPanel className="border-r" {...args}>
        <SamplePanelContent title="레이어 속성" />
      </DockPanel>

      <main className="flex flex-1 items-center justify-center p-6 text-center text-muted-foreground">
        <div className="max-w-md">
          <h2 className="text-foreground text-lg font-bold">
            메인 뷰포트 (Map Canvas)
          </h2>
        </div>
      </main>
    </div>,
  args: {
    defaultWidth: 320,
    defaultHeight: '100%',
    minWidth: 200,
    maxWidth: 600,
    resizable: true,
    allowPopout: true,
    showPlaceholderOnPopout: false,
    windowTitle: '레이어 속성 - 새 창'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const rightHandle = canvas.getByRole('button', {
      name: 'right resize handle'
    });
    await dragResizeHandle(rightHandle, 40, 0);
    await expect(args.onResizeStop).toHaveBeenCalled();
    const contentBox = canvasElement.querySelector<HTMLElement>('[data-slot="dock-panel-content"]');
    if (contentBox) {
      await fireEvent.scroll(contentBox);
      Object.defineProperty(contentBox, 'scrollLeft', {
        writable: true,
        value: 25
      });
      await fireEvent.scroll(contentBox);
      await expect(contentBox.scrollLeft).toBe(0);
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div className={HORIZONTAL_LAYOUT_CLASS}>
      <DockPanel resizable={false} defaultWidth="50%" className="border-r">
        <SamplePanelContent title="고정 너비 패널" />
      </DockPanel>
      <main className="flex flex-1 items-center justify-center p-6 text-muted-foreground">
        고정 너비 레이아웃
      </main>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByRole('button', {
      name: /resize handle/i
    })).toBeNull();
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <div className={HORIZONTAL_LAYOUT_CLASS}>
      <main className="flex flex-1 items-center justify-center p-6 text-center text-muted-foreground">
        <div className="max-w-md">
          <h2 className="text-foreground text-lg font-bold">메인 작업 영역</h2>
        </div>
      </main>

      <DockPanel {...args} className="border-l" resizeDirections={{
      left: true
    }}>
        <SamplePanelContent title="스타일러 설정" items={['단일 심볼 렌더러', '분류값 사용 심볼 (Categorized)', '단계 구분 심볼 (Graduated)']} />
      </DockPanel>
    </div>,
  args: {
    defaultWidth: 360,
    defaultHeight: '100%',
    minWidth: 240,
    maxWidth: 640,
    resizable: true,
    allowPopout: true,
    windowTitle: '스타일러 - 독립 창'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-background flex h-screen w-full flex-col overflow-hidden">
      <header className="bg-muted/30 flex h-11 shrink-0 items-center justify-between border-b px-4 select-none">
        <span className="text-foreground text-xs font-semibold tracking-tight">
          GIS Map Workspace (Dual Dock Layout)
        </span>
      </header>

      <div className="relative flex w-full flex-1 overflow-hidden">
        <DockPanel className="border-r" defaultWidth={300} defaultHeight="100%" minWidth={200} maxWidth={500} resizable={true} resizeDirections={{
        right: true
      }} allowPopout={true} windowTitle="좌측 레이어 트리 - 독립 창">
          <SamplePanelContent title="레이어 트리" />
        </DockPanel>

        <main className="bg-muted/20 relative flex flex-1 flex-col items-center justify-center overflow-hidden p-6 text-center">
          <span className="text-xs text-muted-foreground">
            Map Viewport Area
          </span>
        </main>

        <DockPanel defaultWidth={340} defaultHeight="100%" minWidth={220} maxWidth={550} resizable={true} className="border-l" resizeDirections={{
        left: true
      }} allowPopout={true} windowTitle="우측 속성 관리자 - 독립 창">
          <SamplePanelContent title="속성 & 심볼러" />
        </DockPanel>
      </div>
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <div className={VERTICAL_LAYOUT_CLASS}>
      <DockPanel {...args} className="border-b" resizeDirections={{
      bottom: true
    }}>
        <SamplePanelContent title="공간 필터 & 통계 분석 툴바" />
      </DockPanel>

      <main className="flex flex-1 items-center justify-center p-6 text-center text-muted-foreground">
        <div className="max-w-md">
          <h2 className="text-foreground text-lg font-bold">
            메인 지도 영역 (Viewport)
          </h2>
        </div>
      </main>
    </div>,
  args: {
    defaultWidth: '100%',
    defaultHeight: 220,
    minHeight: 140,
    maxHeight: 500,
    resizable: true,
    allowPopout: true,
    showPlaceholderOnPopout: false,
    windowTitle: '공간 분석 툴바 - 새 창'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const bottomHandle = canvas.getByRole('button', {
      name: 'bottom resize handle'
    });
    await dragResizeHandle(bottomHandle, 0, 30);
    await expect(args.onResizeStop).toHaveBeenCalled();
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => <div className={VERTICAL_LAYOUT_CLASS}>
      <main className="flex flex-1 items-center justify-center p-6 text-center text-muted-foreground">
        <h2 className="text-foreground text-lg font-bold">지도 메인 캔버스</h2>
      </main>

      <DockPanel {...args} className="border-t" resizeDirections={{
      top: true
    }}>
        <SamplePanelContent title="속성 테이블 (Feature Attribute Table)" />
      </DockPanel>
    </div>,
  args: {
    defaultWidth: '100%',
    defaultHeight: 260,
    minHeight: '15vh',
    maxHeight: '60vh',
    resizable: true,
    allowPopout: true,
    showPlaceholderOnPopout: false,
    windowTitle: '속성 테이블 - 새 창'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const originalOpen = globalThis.open;
    const mock = createMockPopup('Bottom Dock Popup', 800, 320);
    globalThis.open = fn(() => mock.popup);
    try {
      await userEvent.click(canvas.getByRole('button', {
        name: POPOUT_BUTTON_LABEL
      }));
      mock.markClosed();
      await waitFor(async () => {
        await expect(args.onPopoutChange).toHaveBeenCalledWith(false);
      });
    } finally {
      globalThis.open = originalOpen;
    }
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <div className={HORIZONTAL_LAYOUT_CLASS}>
      <DockPanel {...args} className="border-r">
        <SamplePanelContent title="독립 분리 가능 패널" />
      </DockPanel>

      <main className="flex flex-1 items-center justify-center p-6 text-center text-muted-foreground">
        <p className="text-sm">플레이스홀더 복귀 검증</p>
      </main>
    </div>,
  args: {
    defaultWidth: 340,
    defaultHeight: '100%',
    minWidth: '15vw',
    maxWidth: '50vw',
    resizable: true,
    allowPopout: true,
    showPlaceholderOnPopout: true,
    windowTitle: '플레이스홀더 검증 창'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const originalOpen = globalThis.open;
    const mock = createMockPopup('Dock Placeholder Popup', 400, 600);
    globalThis.open = fn(() => mock.popup);
    try {
      await userEvent.click(canvas.getByRole('button', {
        name: POPOUT_BUTTON_LABEL
      }));
      await expect(args.onPopoutChange).toHaveBeenCalledWith(true);
      const restoreBtn = await canvas.findByRole('button', {
        name: PLACEHOLDER_RESTORE_LABEL
      });
      await userEvent.click(restoreBtn);
      await expect(args.onPopoutChange).toHaveBeenCalledWith(false);
    } finally {
      globalThis.open = originalOpen;
    }
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledPopoutDockDemo {...args} />,
  args: {
    defaultWidth: 320,
    defaultHeight: '100%',
    resizable: true,
    allowPopout: true,
    showPlaceholderOnPopout: false,
    windowTitle: '외부 제어 팝아웃 패널'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const originalOpen = globalThis.open;
    const mock = createMockPopup('Controlled Dock Popup', 400, 600);
    globalThis.open = fn(() => mock.popup);
    try {
      await userEvent.click(canvas.getByRole('button', {
        name: '외부 툴바에서 새 창 분리'
      }));
      await expect(args.onPopoutChange).toHaveBeenCalledWith(true);
      mock.markClosed();
      await waitFor(async () => {
        await expect(args.onPopoutChange).toHaveBeenCalledWith(false);
      });
    } finally {
      globalThis.open = originalOpen;
    }
  }
}`,...M.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [triggerError, setTriggerError] = useState(false);
    const [mountFallbackPopout, setMountFallbackPopout] = useState(false);
    const [mountInitialFeaturesPopout, setMountInitialFeaturesPopout] = useState(false);
    const [mountBoundEdgePanel, setMountBoundEdgePanel] = useState(false);
    return <div className="flex flex-col gap-3 p-4">
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={() => setTriggerError(true)} className="border px-2 py-1 text-xs">
            훅 에러 트리거
          </button>
          <button type="button" onClick={() => setMountFallbackPopout(true)} className="border px-2 py-1 text-xs">
            초기 팝아웃(fallback) 마운트
          </button>
          <button type="button" onClick={() => setMountInitialFeaturesPopout(true)} className="border px-2 py-1 text-xs">
            초기 팝아웃(features) 마운트
          </button>
          <button type="button" onClick={() => setMountBoundEdgePanel(true)} className="border px-2 py-1 text-xs">
            parseBound 경계값 마운트
          </button>
        </div>

        {triggerError && <DockCatchBoundary label="dock-hook-error">
            <OutsideDockHookTrigger />
          </DockCatchBoundary>}

        <div className="h-40 w-80 border">
          <DockPanel allowPopout={false} defaultWidth={260}>
            <SamplePanelContent title="팝아웃 금지 패널" />
          </DockPanel>
        </div>

        {mountFallbackPopout && <DockPanel isPoppedOut={true} defaultWidth="50%" defaultHeight="100%" showPlaceholderOnPopout={true}>
            <div>Fallback Popout</div>
          </DockPanel>}

        {mountInitialFeaturesPopout && <DockPanel isPoppedOut={true} initialPopoutFeatures={{
        left: 40,
        top: 40,
        width: 320,
        height: 420
      }} showPlaceholderOnPopout={true}>
            <div>Initial Features Popout</div>
          </DockPanel>}

        {mountBoundEdgePanel && <div className="h-40 w-80 border">
            <DockPanel defaultWidth="auto" minWidth={Number.NaN} maxWidth="300px" minHeight="NaNvh" maxHeight="NaNvw" isPoppedOut={true}>
              <div>Bound Edge Panel</div>
            </DockPanel>
          </div>}
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const originalOpen = globalThis.open;
    const mock = createMockPopup('Edge Case Popup', 400, 500, true);
    globalThis.open = fn(() => mock.popup);
    const origConsoleError = console.error;
    console.error = fn();
    try {
      await userEvent.click(canvas.getByRole('button', {
        name: '훅 에러 트리거'
      }));
      await canvas.findByTestId('dock-hook-error');
      await userEvent.click(canvas.getByRole('button', {
        name: POPOUT_BUTTON_LABEL
      }));
      await userEvent.click(canvas.getByRole('button', {
        name: '초기 팝아웃(fallback) 마운트'
      }));
      await userEvent.click(canvas.getByRole('button', {
        name: '초기 팝아웃(features) 마운트'
      }));
      const restoreBtns = await canvas.findAllByRole('button', {
        name: PLACEHOLDER_RESTORE_LABEL
      });
      const lastRestoreBtn = restoreBtns.at(-1);
      if (lastRestoreBtn) {
        await userEvent.click(lastRestoreBtn);
      }
      await userEvent.click(canvas.getByRole('button', {
        name: 'parseBound 경계값 마운트'
      }));
    } finally {
      console.error = origConsoleError;
      globalThis.open = originalOpen;
    }
  }
}`,...P.parameters?.docs?.source}}}})))()}I();export{A as BottomSideDock,M as ControlledPopout,T as Default,O as DualDockPanels,P as EdgeCases,E as NonResizable,D as RightSideDock,k as TopSideDock,j as WithPopoutPlaceholder,F as __namedExportsOrder,w as default};