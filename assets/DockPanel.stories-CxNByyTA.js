import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-sFfd_MYY.js";import{n as r,r as i,t as a}from"./DockPanel-CTqRbaYA.js";function o(e,t=400,n=600){let r=document.implementation.createHTMLDocument(e),i=!1;return{popup:{document:r,location:{href:`about:blank`},outerWidth:t+20,outerHeight:n+40,innerWidth:t,innerHeight:n,screenLeft:120,screenTop:120,get closed(){return i},resizeTo:p(),close:()=>{i=!0},addEventListener:p(),removeEventListener:p()},markClosed:()=>{i=!0}}}function s({title:e=`레이어 관리자`,description:t,items:n=[`행정경계_시군구 (EPSG:5179)`,`수자원_하천망 (EPSG:5179)`,`수치표고모델 (DEM 5M)`]}){let{isPoppedOut:r,popout:a,popin:o}=i();return(0,u.jsxs)(`div`,{className:`bg-background text-foreground flex h-full w-full flex-col`,children:[(0,u.jsxs)(`div`,{className:`bg-muted/40 flex h-10 shrink-0 items-center justify-between border-b px-3 select-none`,children:[(0,u.jsx)(`span`,{className:`text-xs font-semibold`,children:e}),(0,u.jsx)(`button`,{type:`button`,onClick:r?o:a,className:`border-input bg-background hover:bg-accent cursor-pointer rounded border px-2 py-1 text-[11px] font-medium shadow-xs`,title:r?`본 화면으로 복귀`:`새 창으로 분리`,children:r?`본 화면으로 복귀`:`새 창으로 분리`})]}),(0,u.jsxs)(`div`,{className:`flex flex-1 flex-col gap-3 overflow-auto p-3 text-xs`,children:[(0,u.jsxs)(`div`,{className:`bg-muted/10 rounded-md border p-2`,children:[(0,u.jsx)(`p`,{className:`text-foreground font-medium`,children:r?`새 창 모드 활성화됨`:`도킹 모드`}),(0,u.jsx)(`p`,{className:`mt-1 leading-relaxed text-muted-foreground`,children:t??(r?`현재 별도의 브라우저 창에서 실행 중입니다. 상단 버튼을 누르면 본 화면으로 복귀합니다.`:`패널 경계선을 드래그하여 크기를 조절할 수 있습니다.`)})]}),(0,u.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,u.jsx)(`span`,{className:`font-semibold text-muted-foreground`,children:`항목 목록`}),n.map((e,t)=>(0,u.jsxs)(`label`,{className:`hover:bg-muted/30 flex cursor-pointer items-center gap-2 rounded px-2 py-1.5`,children:[(0,u.jsx)(`input`,{type:`checkbox`,defaultChecked:t===0,className:`accent-primary`}),(0,u.jsx)(`span`,{className:`truncate`,children:e})]},e))]})]})]})}function c(e){let[t,n]=(0,l.useState)(!1),r=(0,l.useRef)(()=>{}),i=(0,l.useCallback)(()=>{t?n(!1):r.current()},[t]);return(0,u.jsxs)(`div`,{className:`flex h-screen w-full flex-col overflow-hidden`,children:[(0,u.jsxs)(`header`,{className:`bg-background flex h-12 shrink-0 items-center justify-between border-b px-4`,children:[(0,u.jsx)(`span`,{className:`text-sm font-bold`,children:`전역 앱 툴바`}),(0,u.jsx)(`button`,{type:`button`,onClick:i,className:`border-input hover:bg-accent cursor-pointer rounded border px-3 py-1 text-xs font-semibold`,children:t?`본 화면으로 패널 복귀`:`외부 툴바에서 새 창 분리`})]}),(0,u.jsxs)(`div`,{className:`bg-muted/20 flex flex-1 overflow-hidden`,children:[(0,u.jsx)(a,{...e,className:`border-r`,isPoppedOut:t,onPopoutChange:t=>{n(t),e.onPopoutChange?.(t)},registerPopoutTrigger:e=>{r.current=e},children:(0,u.jsx)(s,{title:`외부 제어 독 패널`})}),(0,u.jsx)(`main`,{className:`flex flex-1 items-center justify-center p-6 text-muted-foreground`,children:(0,u.jsx)(`span`,{className:`text-sm`,children:`외부 제어 동기화 뷰포트`})})]})]})}var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{l=t(),r(),u=n(),{expect:d,fireEvent:f,fn:p,userEvent:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Layout/DockPanel`,component:a,parameters:{layout:`fullscreen`},tags:[`autodocs`],args:{onResizeStart:p(),onResize:p(),onResizeStop:p(),onPopoutChange:p(),onWindowClose:p(),onPopoutFeaturesChange:p()},argTypes:{defaultWidth:{control:`text`,description:`패널의 초기 너비 (px 또는 CSS 단위)`},defaultHeight:{control:`text`,description:`패널의 초기 높이 (px 또는 CSS 단위)`},minWidth:{control:`number`,description:`최소 너비 제한`},maxWidth:{control:`number`,description:`최대 너비 제한`},minHeight:{control:`number`,description:`최소 높이 제한`},maxHeight:{control:`number`,description:`최대 높이 제한`},resizable:{control:`boolean`,description:`리사이징 기능 활성화 여부`},allowPopout:{control:`boolean`,description:`새 창 분리(Pop-out) 기능 허용 여부`},showPlaceholderOnPopout:{control:`boolean`,description:`새 창으로 분리되었을 때 본래 위치에 플레이스홀더 영역 표시 여부`},windowTitle:{control:`text`,description:`새 창으로 띄웠을 때 브라우저 윈도우 타이틀`}}},_={render:e=>(0,u.jsxs)(`div`,{className:`bg-muted/20 flex h-screen w-full overflow-hidden`,children:[(0,u.jsx)(a,{className:`border-r`,...e,children:(0,u.jsx)(s,{title:`레이어 속성`})}),(0,u.jsx)(`main`,{className:`flex flex-1 items-center justify-center p-6 text-center text-muted-foreground`,children:(0,u.jsx)(`div`,{className:`max-w-md`,children:(0,u.jsx)(`h2`,{className:`text-foreground text-lg font-bold`,children:`메인 뷰포트 (Map Canvas)`})})})]}),args:{defaultWidth:320,defaultHeight:`100%`,minWidth:200,maxWidth:600,resizable:!0,allowPopout:!0,showPlaceholderOnPopout:!1,windowTitle:`레이어 속성 - 새 창`},play:async({canvasElement:e,args:t})=>{let n=h(e).getByRole(`button`,{name:`right resize handle`}),r=n.getBoundingClientRect();await f.mouseDown(n,{button:0,clientX:r.left,clientY:r.top+20}),await f.mouseMove(window,{button:0,clientX:r.left+40,clientY:r.top+20}),await f.mouseUp(window,{button:0,clientX:r.left+40,clientY:r.top+20}),await d(t.onResizeStop).toHaveBeenCalled();let i=e.querySelector(`[data-slot="dock-panel-content"]`);i&&(Object.defineProperty(i,"scrollLeft",{writable:!0,value:25}),await f.scroll(i),await d(i.scrollLeft).toBe(0))}},v={render:()=>(0,u.jsxs)(`div`,{className:`bg-muted/20 flex h-screen w-full overflow-hidden`,children:[(0,u.jsx)(a,{resizable:!1,defaultWidth:280,className:`border-r`,children:(0,u.jsx)(s,{title:`고정 너비 패널`})}),(0,u.jsx)(`main`,{className:`flex flex-1 items-center justify-center p-6 text-muted-foreground`,children:`고정 너비 레이아웃`})]})},y={render:e=>(0,u.jsxs)(`div`,{className:`bg-muted/20 flex h-screen w-full overflow-hidden`,children:[(0,u.jsx)(`main`,{className:`flex flex-1 items-center justify-center p-6 text-center text-muted-foreground`,children:(0,u.jsx)(`div`,{className:`max-w-md`,children:(0,u.jsx)(`h2`,{className:`text-foreground text-lg font-bold`,children:`메인 작업 영역`})})}),(0,u.jsx)(a,{...e,className:`border-l`,resizeDirections:{left:!0},children:(0,u.jsx)(s,{title:`스타일러 설정`,items:[`단일 심볼 렌더러`,`분류값 사용 심볼 (Categorized)`,`단계 구분 심볼 (Graduated)`]})})]}),args:{defaultWidth:360,defaultHeight:`100%`,minWidth:240,maxWidth:640,resizable:!0,allowPopout:!0,windowTitle:`스타일러 - 독립 창`}},b={render:()=>(0,u.jsxs)(`div`,{className:`bg-background flex h-screen w-full flex-col overflow-hidden`,children:[(0,u.jsx)(`header`,{className:`bg-muted/30 flex h-11 shrink-0 items-center justify-between border-b px-4 select-none`,children:(0,u.jsx)(`span`,{className:`text-foreground text-xs font-semibold tracking-tight`,children:`GIS Map Workspace (Dual Dock Layout)`})}),(0,u.jsxs)(`div`,{className:`relative flex w-full flex-1 overflow-hidden`,children:[(0,u.jsx)(a,{className:`border-r`,defaultWidth:300,defaultHeight:`100%`,minWidth:200,maxWidth:500,resizable:!0,resizeDirections:{right:!0},allowPopout:!0,windowTitle:`좌측 레이어 트리 - 독립 창`,children:(0,u.jsx)(s,{title:`레이어 트리`})}),(0,u.jsx)(`main`,{className:`bg-muted/20 relative flex flex-1 flex-col items-center justify-center overflow-hidden p-6 text-center`,children:(0,u.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`Map Viewport Area`})}),(0,u.jsx)(a,{defaultWidth:340,defaultHeight:`100%`,minWidth:220,maxWidth:550,resizable:!0,className:`border-l`,resizeDirections:{left:!0},allowPopout:!0,windowTitle:`우측 속성 관리자 - 독립 창`,children:(0,u.jsx)(s,{title:`속성 & 심볼러`})})]})]})},x={render:e=>(0,u.jsxs)(`div`,{className:`bg-muted/20 flex h-screen w-full flex-col overflow-hidden`,children:[(0,u.jsx)(a,{...e,className:`border-b`,resizeDirections:{bottom:!0},children:(0,u.jsx)(s,{title:`공간 필터 & 통계 분석 툴바`})}),(0,u.jsx)(`main`,{className:`flex flex-1 items-center justify-center p-6 text-center text-muted-foreground`,children:(0,u.jsx)(`div`,{className:`max-w-md`,children:(0,u.jsx)(`h2`,{className:`text-foreground text-lg font-bold`,children:`메인 지도 영역 (Viewport)`})})})]}),args:{defaultWidth:`100%`,defaultHeight:220,minHeight:140,maxHeight:500,resizable:!0,allowPopout:!0,showPlaceholderOnPopout:!1,windowTitle:`공간 분석 툴바 - 새 창`},play:async({canvasElement:e,args:t})=>{let n=h(e).getByRole(`button`,{name:`bottom resize handle`}),r=n.getBoundingClientRect();await f.mouseDown(n,{button:0,clientX:r.left+20,clientY:r.top}),await f.mouseMove(window,{button:0,clientX:r.left+20,clientY:r.top+30}),await f.mouseUp(window,{button:0,clientX:r.left+20,clientY:r.top+30}),await d(t.onResizeStop).toHaveBeenCalled()}},S={render:e=>(0,u.jsxs)(`div`,{className:`bg-muted/20 flex h-screen w-full flex-col overflow-hidden`,children:[(0,u.jsx)(`main`,{className:`flex flex-1 items-center justify-center p-6 text-center text-muted-foreground`,children:(0,u.jsx)(`h2`,{className:`text-foreground text-lg font-bold`,children:`지도 메인 캔버스`})}),(0,u.jsx)(a,{...e,className:`border-t`,resizeDirections:{top:!0},children:(0,u.jsx)(s,{title:`속성 테이블 (Feature Attribute Table)`})})]}),args:{defaultWidth:`100%`,defaultHeight:260,minHeight:`15vh`,maxHeight:`60vh`,resizable:!0,allowPopout:!0,showPlaceholderOnPopout:!1,windowTitle:`속성 테이블 - 새 창`},play:async({canvasElement:e,args:t})=>{let n=h(e),r=globalThis.open,i=o(`Bottom Dock Popup`,800,320);globalThis.open=p(()=>i.popup);try{await m.click(n.getByRole(`button`,{name:`새 창으로 분리`})),i.markClosed(),await new Promise(e=>setTimeout(e,260)),await d(t.onPopoutChange).toHaveBeenCalledWith(!1)}finally{globalThis.open=r}}},C={render:e=>(0,u.jsxs)(`div`,{className:`bg-muted/20 flex h-screen w-full overflow-hidden`,children:[(0,u.jsx)(a,{...e,className:`border-r`,children:(0,u.jsx)(s,{title:`독립 분리 가능 패널`})}),(0,u.jsx)(`main`,{className:`flex flex-1 items-center justify-center p-6 text-center text-muted-foreground`,children:(0,u.jsx)(`p`,{className:`text-sm`,children:`플레이스홀더 복귀 검증`})})]}),args:{defaultWidth:340,defaultHeight:`100%`,minWidth:`15vw`,maxWidth:`50vw`,resizable:!0,allowPopout:!0,showPlaceholderOnPopout:!0,windowTitle:`플레이스홀더 검증 창`},play:async({canvasElement:e,args:t})=>{let n=h(e),r=globalThis.open,i=o(`Dock Placeholder Popup`,400,600);globalThis.open=p(()=>i.popup);try{await m.click(n.getByRole(`button`,{name:`새 창으로 분리`})),await d(t.onPopoutChange).toHaveBeenCalledWith(!0);let e=await n.findByRole(`button`,{name:`본 창으로 복귀`});await m.click(e),await d(t.onPopoutChange).toHaveBeenCalledWith(!1)}finally{globalThis.open=r}}},w={render:e=>(0,u.jsx)(c,{...e}),args:{defaultWidth:320,defaultHeight:`100%`,resizable:!0,allowPopout:!0,showPlaceholderOnPopout:!1,windowTitle:`외부 제어 팝아웃 패널`},play:async({canvasElement:e,args:t})=>{let n=h(e),r=globalThis.open,i=o(`Controlled Dock Popup`,400,600);globalThis.open=p(()=>i.popup);try{await m.click(n.getByRole(`button`,{name:`외부 툴바에서 새 창 분리`})),await d(t.onPopoutChange).toHaveBeenCalledWith(!0),i.markClosed(),await new Promise(e=>setTimeout(e,260)),await d(t.onPopoutChange).toHaveBeenCalledWith(!1)}finally{globalThis.open=r}}},T=[`Default`,`NonResizable`,`RightSideDock`,`DualDockPanels`,`TopSideDock`,`BottomSideDock`,`WithPopoutPlaceholder`,`ControlledPopout`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className="bg-muted/20 flex h-screen w-full overflow-hidden">
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
      </div>;
  },
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
    const rect = rightHandle.getBoundingClientRect();
    await fireEvent.mouseDown(rightHandle, {
      button: 0,
      clientX: rect.left,
      clientY: rect.top + 20
    });
    await fireEvent.mouseMove(window, {
      button: 0,
      clientX: rect.left + 40,
      clientY: rect.top + 20
    });
    await fireEvent.mouseUp(window, {
      button: 0,
      clientX: rect.left + 40,
      clientY: rect.top + 20
    });
    await expect(args.onResizeStop).toHaveBeenCalled();
    const contentBox = canvasElement.querySelector<HTMLElement>('[data-slot="dock-panel-content"]');
    if (contentBox) {
      Object.defineProperty(contentBox, 'scrollLeft', {
        writable: true,
        value: 25
      });
      await fireEvent.scroll(contentBox);
      await expect(contentBox.scrollLeft).toBe(0);
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-muted/20 flex h-screen w-full overflow-hidden">
      <DockPanel resizable={false} defaultWidth={280} className="border-r">
        <SamplePanelContent title="고정 너비 패널" />
      </DockPanel>
      <main className="flex flex-1 items-center justify-center p-6 text-muted-foreground">
        고정 너비 레이아웃
      </main>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className="bg-muted/20 flex h-screen w-full overflow-hidden">
        <main className="flex flex-1 items-center justify-center p-6 text-center text-muted-foreground">
          <div className="max-w-md">
            <h2 className="text-foreground text-lg font-bold">
              메인 작업 영역
            </h2>
          </div>
        </main>

        <DockPanel {...args} className="border-l" resizeDirections={{
        left: true
      }}>
          <SamplePanelContent title="스타일러 설정" items={['단일 심볼 렌더러', '분류값 사용 심볼 (Categorized)', '단계 구분 심볼 (Graduated)']} />
        </DockPanel>
      </div>;
  },
  args: {
    defaultWidth: 360,
    defaultHeight: '100%',
    minWidth: 240,
    maxWidth: 640,
    resizable: true,
    allowPopout: true,
    windowTitle: '스타일러 - 독립 창'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="bg-background flex h-screen w-full flex-col overflow-hidden">
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
      </div>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className="bg-muted/20 flex h-screen w-full flex-col overflow-hidden">
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
      </div>;
  },
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
    const rect = bottomHandle.getBoundingClientRect();
    await fireEvent.mouseDown(bottomHandle, {
      button: 0,
      clientX: rect.left + 20,
      clientY: rect.top
    });
    await fireEvent.mouseMove(window, {
      button: 0,
      clientX: rect.left + 20,
      clientY: rect.top + 30
    });
    await fireEvent.mouseUp(window, {
      button: 0,
      clientX: rect.left + 20,
      clientY: rect.top + 30
    });
    await expect(args.onResizeStop).toHaveBeenCalled();
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className="bg-muted/20 flex h-screen w-full flex-col overflow-hidden">
        <main className="flex flex-1 items-center justify-center p-6 text-center text-muted-foreground">
          <h2 className="text-foreground text-lg font-bold">
            지도 메인 캔버스
          </h2>
        </main>

        <DockPanel {...args} className="border-t" resizeDirections={{
        top: true
      }}>
          <SamplePanelContent title="속성 테이블 (Feature Attribute Table)" />
        </DockPanel>
      </div>;
  },
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
        name: '새 창으로 분리'
      }));
      mock.markClosed();
      await new Promise(resolve => setTimeout(resolve, 260));
      await expect(args.onPopoutChange).toHaveBeenCalledWith(false);
    } finally {
      globalThis.open = originalOpen;
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className="bg-muted/20 flex h-screen w-full overflow-hidden">
        <DockPanel {...args} className="border-r">
          <SamplePanelContent title="독립 분리 가능 패널" />
        </DockPanel>

        <main className="flex flex-1 items-center justify-center p-6 text-center text-muted-foreground">
          <p className="text-sm">플레이스홀더 복귀 검증</p>
        </main>
      </div>;
  },
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
      // 1) 새 창으로 분리 클릭 -> PopoutPlaceholder 표시
      await userEvent.click(canvas.getByRole('button', {
        name: '새 창으로 분리'
      }));
      await expect(args.onPopoutChange).toHaveBeenCalledWith(true);

      // 2) 플레이스홀더 내부 '본 창으로 복귀' 버튼 클릭 -> handlePopin 호출
      const restoreBtn = await canvas.findByRole('button', {
        name: '본 창으로 복귀'
      });
      await userEvent.click(restoreBtn);
      await expect(args.onPopoutChange).toHaveBeenCalledWith(false);
    } finally {
      globalThis.open = originalOpen;
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
      // 1) 외부 툴바 버튼 클릭 -> registerPopoutTrigger로 등록된 handlePopout 실행
      await userEvent.click(canvas.getByRole('button', {
        name: '외부 툴바에서 새 창 분리'
      }));
      await expect(args.onPopoutChange).toHaveBeenCalledWith(true);

      // 2) 팝업 창 닫힘 시뮬레이션 -> handleWindowUnload -> onPopoutChange(false) 실행
      mock.markClosed();
      await new Promise(resolve => setTimeout(resolve, 260));
      await expect(args.onPopoutChange).toHaveBeenCalledWith(false);
    } finally {
      globalThis.open = originalOpen;
    }
  }
}`,...w.parameters?.docs?.source}}}})))()}E();export{S as BottomSideDock,w as ControlledPopout,_ as Default,b as DualDockPanels,v as NonResizable,y as RightSideDock,x as TopSideDock,C as WithPopoutPlaceholder,T as __namedExportsOrder,g as default};