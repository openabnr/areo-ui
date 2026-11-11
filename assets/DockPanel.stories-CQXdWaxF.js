import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-D3lwOebq.js";import{n as r,r as i,t as a}from"./DockPanel-DRar4Iqs.js";function o({title:e=`레이어 관리자`,description:t,items:n=[`행정경계_시군구 (EPSG:5179)`,`수자원_하천망 (EPSG:5179)`,`수치표고모델 (DEM 5M)`]}){let{isPoppedOut:r,popout:a,popin:o}=i();return(0,c.jsxs)(`div`,{className:`bg-background text-foreground flex h-full w-full flex-col`,children:[(0,c.jsxs)(`div`,{className:`bg-muted/40 flex h-10 shrink-0 items-center justify-between border-b px-3 select-none`,children:[(0,c.jsx)(`span`,{className:`text-xs font-semibold`,children:e}),(0,c.jsx)(`button`,{type:`button`,onClick:r?o:a,className:`border-input bg-background hover:bg-accent cursor-pointer rounded border px-2 py-1 text-[11px] font-medium shadow-xs`,title:r?`본 화면으로 복귀`:`새 창으로 분리`,children:r?`본 화면으로 복귀`:`새 창으로 분리`})]}),(0,c.jsxs)(`div`,{className:`flex flex-1 flex-col gap-3 overflow-auto p-3 text-xs`,children:[(0,c.jsxs)(`div`,{className:`bg-muted/10 rounded-md border p-2`,children:[(0,c.jsx)(`p`,{className:`text-foreground font-medium`,children:r?`새 창 모드 활성화됨`:`도킹 모드`}),(0,c.jsx)(`p`,{className:`mt-1 leading-relaxed text-muted-foreground`,children:t??(r?`현재 별도의 브라우저 창에서 실행 중입니다. 상단 버튼을 누르면 본 화면으로 복귀합니다.`:`패널 경계선을 드래그하여 크기를 조절할 수 있습니다. 상단 버튼을 클릭하면 독립된 브라우저 창으로 분리됩니다.`)})]}),(0,c.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,c.jsx)(`span`,{className:`font-semibold text-muted-foreground`,children:`항목 목록`}),n.map((e,t)=>(0,c.jsxs)(`label`,{className:`hover:bg-muted/30 flex cursor-pointer items-center gap-2 rounded px-2 py-1.5`,children:[(0,c.jsx)(`input`,{type:`checkbox`,defaultChecked:t===0,className:`accent-primary`}),(0,c.jsx)(`span`,{className:`truncate`,children:e})]},e))]})]})]})}var s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{s=t(),r(),c=n(),l={title:`Layout/DockPanel`,component:a,parameters:{layout:`fullscreen`},tags:[`autodocs`],argTypes:{defaultWidth:{control:`text`,description:`패널의 초기 너비 (px 또는 CSS 단위)`},defaultHeight:{control:`text`,description:`패널의 초기 높이 (px 또는 CSS 단위)`},minWidth:{control:`number`,description:`최소 너비 제한`},maxWidth:{control:`number`,description:`최대 너비 제한`},minHeight:{control:`number`,description:`최소 높이 제한`},maxHeight:{control:`number`,description:`최대 높이 제한`},resizable:{control:`boolean`,description:`리사이징 기능 활성화 여부`},allowPopout:{control:`boolean`,description:`새 창 분리(Pop-out) 기능 허용 여부`},showPlaceholderOnPopout:{control:`boolean`,description:`새 창으로 분리되었을 때 본래 위치에 플레이스홀더 영역 표시 여부`},windowTitle:{control:`text`,description:`새 창으로 띄웠을 때 브라우저 윈도우 타이틀`},onResizeStart:{action:`resizeStart`},onResize:{action:`resizing`},onResizeStop:{action:`resizeStop`},onPopoutChange:{action:`popoutChange`},onWindowClose:{action:`windowClose`},onPopoutFeaturesChange:{action:`popoutFeaturesChange`}}},u={render:e=>(0,c.jsxs)(`div`,{className:`bg-muted/20 flex h-screen w-full overflow-hidden`,children:[(0,c.jsx)(a,{className:`border-r`,...e,children:(0,c.jsx)(o,{title:`레이어 속성`})}),(0,c.jsx)(`main`,{className:`flex flex-1 items-center justify-center p-6 text-center text-muted-foreground`,children:(0,c.jsxs)(`div`,{className:`max-w-md`,children:[(0,c.jsx)(`h2`,{className:`text-foreground text-lg font-bold`,children:`메인 뷰포트 (Map Canvas)`}),(0,c.jsx)(`p`,{className:`mt-2 text-sm leading-relaxed`,children:`패널 상단의 "새 창으로 분리" 버튼을 누르면 팝업이 뜨고, 팝업 안의 버튼은 "본 화면으로 복귀"로 바뀝니다.`})]})})]}),args:{defaultWidth:320,defaultHeight:`100%`,minWidth:200,maxWidth:600,resizable:!0,allowPopout:!0,showPlaceholderOnPopout:!1,windowTitle:`레이어 속성 - 새 창`}},d={render:e=>(0,c.jsxs)(`div`,{className:`bg-muted/20 flex h-screen w-full overflow-hidden`,children:[(0,c.jsx)(`main`,{className:`flex flex-1 items-center justify-center p-6 text-center text-muted-foreground`,children:(0,c.jsxs)(`div`,{className:`max-w-md`,children:[(0,c.jsx)(`h2`,{className:`text-foreground text-lg font-bold`,children:`메인 작업 영역`}),(0,c.jsx)(`p`,{className:`mt-2 text-sm leading-relaxed`,children:`우측 패널의 좌측 엣지(Edge)를 드래그하여 패널 폭을 조절합니다.`})]})}),(0,c.jsx)(a,{...e,className:`border-l`,resizeDirections:{left:!0},children:(0,c.jsx)(o,{title:`스타일러 설정`,items:[`단일 심볼 렌더러`,`분류값 사용 심볼 (Categorized)`,`단계 구분 심볼 (Graduated)`]})})]}),args:{defaultWidth:360,defaultHeight:`100%`,minWidth:240,maxWidth:640,resizable:!0,allowPopout:!0,windowTitle:`스타일러 - 독립 창`}},f={render:()=>(0,c.jsxs)(`div`,{className:`bg-background flex h-screen w-full flex-col overflow-hidden`,children:[(0,c.jsxs)(`header`,{className:`bg-muted/30 flex h-11 shrink-0 items-center justify-between border-b px-4 select-none`,children:[(0,c.jsx)(`span`,{className:`text-foreground text-xs font-semibold tracking-tight`,children:`GIS Map Workspace (Dual Dock Layout)`}),(0,c.jsx)(`span`,{className:`text-[11px] text-muted-foreground`,children:`좌우 패널 모두 각각 독립적으로 크기 조절 및 새 창 분리가 가능합니다.`})]}),(0,c.jsxs)(`div`,{className:`relative flex w-full flex-1 overflow-hidden`,children:[(0,c.jsx)(a,{className:`border-r`,defaultWidth:300,defaultHeight:`100%`,minWidth:200,maxWidth:500,resizable:!0,resizeDirections:{right:!0},allowPopout:!0,windowTitle:`좌측 레이어 트리 - 독립 창`,children:(0,c.jsx)(o,{title:`레이어 트리`,description:`우측 경계를 드래그하여 크기를 조절하거나, 새 창으로 분리할 수 있습니다.`,items:[`행정경계_시군구 (EPSG:5179)`,`지적도 레이어`,`수치표고모델 DEM`]})}),(0,c.jsx)(`main`,{className:`bg-muted/20 relative flex flex-1 flex-col items-center justify-center overflow-hidden p-6 text-center`,children:(0,c.jsxs)(`div`,{className:`border-border bg-background/50 max-w-md rounded-lg border border-dashed p-6 shadow-xs`,children:[(0,c.jsx)(`h3`,{className:`text-foreground text-base font-bold`,children:`Map Viewport Area`}),(0,c.jsx)(`p`,{className:`mt-2 text-xs leading-relaxed text-muted-foreground`,children:`양쪽 패널이 리사이징되거나 새 창으로 분리/복귀될 때 중앙 뷰포트 영역의 너비가 동적으로 반응합니다.`}),(0,c.jsxs)(`div`,{className:`mt-4 flex items-center justify-center gap-2`,children:[(0,c.jsx)(`span`,{className:`inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-[11px] font-medium text-primary`,children:`Left Panel: 300px (Default)`}),(0,c.jsx)(`span`,{className:`inline-flex items-center rounded-md bg-secondary px-2 py-1 text-[11px] font-medium text-secondary-foreground`,children:`Right Panel: 340px (Default)`})]})]})}),(0,c.jsx)(a,{defaultWidth:340,defaultHeight:`100%`,minWidth:220,maxWidth:550,resizable:!0,className:`border-l`,resizeDirections:{left:!0},allowPopout:!0,windowTitle:`우측 속성 관리자 - 독립 창`,children:(0,c.jsx)(o,{title:`속성 & 심볼러`,description:`좌측 경계를 드래그하여 크기를 조절하거나, 새 창으로 분리할 수 있습니다.`,items:[`선택된 피처: 14건`,`좌표계: Korea 2000 (EPSG:5179)`,`스타일 템플릿: 지적선 기본형`]})})]})]})},p={render:e=>(0,c.jsxs)(`div`,{className:`bg-muted/20 flex h-screen w-full flex-col overflow-hidden`,children:[(0,c.jsx)(a,{...e,className:`border-b`,resizeDirections:{bottom:!0},children:(0,c.jsx)(o,{title:`공간 필터 & 통계 분석 툴바`,description:`하단 경계선을 아래위로 드래그하여 패널 높이를 조절합니다.`,items:[`버퍼 반경: 500m`,`공간 연산자: Intersects (EPSG:5179)`,`클러스터링 알고리즘: DBSCAN`]})}),(0,c.jsx)(`main`,{className:`flex flex-1 items-center justify-center p-6 text-center text-muted-foreground`,children:(0,c.jsxs)(`div`,{className:`max-w-md`,children:[(0,c.jsx)(`h2`,{className:`text-foreground text-lg font-bold`,children:`메인 지도 영역 (Viewport)`}),(0,c.jsx)(`p`,{className:`mt-2 text-sm leading-relaxed`,children:`상단 패널의 아래쪽 엣지(Edge)를 드래그하여 높이를 조절하거나, 새 창으로 분리하여 다중 모니터 환경에서 상단 툴을 띄울 수 있습니다.`})]})})]}),args:{defaultWidth:`100%`,defaultHeight:220,minHeight:140,maxHeight:500,resizable:!0,allowPopout:!0,showPlaceholderOnPopout:!1,windowTitle:`공간 분석 툴바 - 새 창`}},m={render:e=>(0,c.jsxs)(`div`,{className:`bg-muted/20 flex h-screen w-full flex-col overflow-hidden`,children:[(0,c.jsx)(`main`,{className:`flex flex-1 items-center justify-center p-6 text-center text-muted-foreground`,children:(0,c.jsxs)(`div`,{className:`max-w-md`,children:[(0,c.jsx)(`h2`,{className:`text-foreground text-lg font-bold`,children:`지도 메인 캔버스`}),(0,c.jsx)(`p`,{className:`mt-2 text-sm leading-relaxed`,children:`하단 속성 테이블 패널의 위쪽 엣지(Edge)를 드래그하여 테이블 영역의 높이를 조절합니다.`})]})}),(0,c.jsx)(a,{...e,className:`border-t`,resizeDirections:{top:!0},children:(0,c.jsx)(o,{title:`속성 테이블 (Feature Attribute Table)`,description:`상단 경계선을 위아래로 드래그하여 테이블 높이를 조절할 수 있습니다.`,items:[`ID: 10294 | 시군구코드: 41135 | 지목: 대`,`ID: 10295 | 시군구코드: 41135 | 지목: 임`,`ID: 10296 | 시군구코드: 41135 | 지목: 도로`,`ID: 10297 | 시군구코드: 41135 | 지목: 하천`]})})]}),args:{defaultWidth:`100%`,defaultHeight:260,minHeight:150,maxHeight:600,resizable:!0,allowPopout:!0,showPlaceholderOnPopout:!1,windowTitle:`속성 테이블 - 새 창`}},h={render:()=>(0,c.jsxs)(`div`,{className:`bg-background flex h-screen w-full flex-col overflow-hidden`,children:[(0,c.jsx)(a,{defaultWidth:`100%`,defaultHeight:180,minHeight:120,maxHeight:360,resizable:!0,className:`border-b`,resizeDirections:{bottom:!0},allowPopout:!0,windowTitle:`상단 필터 콘솔 - 새 창`,children:(0,c.jsx)(o,{title:`상단 필터 콘솔`,description:`하단 경계를 드래그하여 높이를 조절합니다.`,items:[`필터 조건: STATUS = ACTIVE`,`공간 조인: KOREA_RIVER_2026`]})}),(0,c.jsx)(`main`,{className:`bg-muted/20 flex flex-1 items-center justify-center p-6 text-center text-muted-foreground`,children:(0,c.jsxs)(`div`,{className:`border-border bg-background/50 max-w-md rounded-lg border border-dashed p-6 shadow-xs`,children:[(0,c.jsx)(`h3`,{className:`text-foreground text-base font-bold`,children:`중앙 지도 뷰포트`}),(0,c.jsx)(`p`,{className:`mt-2 text-xs leading-relaxed text-muted-foreground`,children:`상단 및 하단 패널이 각각 독립적으로 높이 조절 및 팝업 분리가 가능합니다.`})]})}),(0,c.jsx)(a,{defaultWidth:`100%`,defaultHeight:220,minHeight:140,maxHeight:450,resizable:!0,className:`border-t`,resizeDirections:{top:!0},allowPopout:!0,windowTitle:`하단 이벤트 로그 - 새 창`,children:(0,c.jsx)(o,{title:`시스템 실행 로그`,description:`상단 경계를 드래그하여 높이를 조절합니다.`,items:[`[INFO] PostGIS 3.4 Spatial Index Loaded`,`[DEBUG] WFS Vector Tiles Rendered: 2,410 geometries`,`[SUCCESS] Viewport synchronized`]})})]})},g={render:e=>(0,c.jsxs)(`div`,{className:`bg-muted/20 flex h-screen w-full overflow-hidden`,children:[(0,c.jsx)(a,{...e,className:`border-r`,children:(0,c.jsx)(o,{title:`독립 분리 가능 패널`})}),(0,c.jsx)(`main`,{className:`flex flex-1 items-center justify-center p-6 text-center text-muted-foreground`,children:(0,c.jsx)(`p`,{className:`text-sm`,children:`상단 버튼을 눌러 새 창을 열면, 패널이 있던 원래 자리에 복귀 안내 플레이스홀더가 노출됩니다.`})})]}),args:{defaultWidth:340,defaultHeight:`100%`,minWidth:220,maxWidth:550,resizable:!0,allowPopout:!0,showPlaceholderOnPopout:!0,windowTitle:`플레이스홀더 검증 창`}},_={render:e=>{let[t,n]=(0,s.useState)(!1),r=(0,s.useRef)(()=>{}),i=(0,s.useCallback)(()=>{t?n(!1):r.current()},[t]);return(0,c.jsxs)(`div`,{className:`flex h-screen w-full flex-col overflow-hidden`,children:[(0,c.jsxs)(`header`,{className:`bg-background flex h-12 shrink-0 items-center justify-between border-b px-4`,children:[(0,c.jsx)(`span`,{className:`text-sm font-bold`,children:`전역 앱 툴바`}),(0,c.jsx)(`button`,{type:`button`,onClick:i,className:`border-input hover:bg-accent cursor-pointer rounded border px-3 py-1 text-xs font-semibold`,children:t?`본 화면으로 패널 복귀`:`외부 툴바에서 새 창 분리`})]}),(0,c.jsxs)(`div`,{className:`bg-muted/20 flex flex-1 overflow-hidden`,children:[(0,c.jsx)(a,{...e,className:`border-r`,isPoppedOut:t,onPopoutChange:n,registerPopoutTrigger:e=>{r.current=e},children:(0,c.jsx)(o,{title:`외부 제어 독 패널`})}),(0,c.jsx)(`main`,{className:`flex flex-1 items-center justify-center p-6 text-muted-foreground`,children:(0,c.jsx)(`span`,{className:`text-sm`,children:`상단 툴바 및 내부 패널 버튼 양쪽 모두 동기화되어 동작합니다.`})})]})]})},args:{defaultWidth:320,defaultHeight:`100%`,resizable:!0,allowPopout:!0,showPlaceholderOnPopout:!1,windowTitle:`외부 제어 팝아웃 패널`}},v=[`Default`,`RightSideDock`,`DualDockPanels`,`TopSideDock`,`BottomSideDock`,`VerticalDualDockPanels`,`WithPopoutPlaceholder`,`ControlledPopout`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
            <p className="mt-2 text-sm leading-relaxed">
              패널 상단의 &quot;새 창으로 분리&quot; 버튼을 누르면 팝업이 뜨고,
              팝업 안의 버튼은 &quot;본 화면으로 복귀&quot;로 바뀝니다.
            </p>
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
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className="bg-muted/20 flex h-screen w-full overflow-hidden">
        <main className="flex flex-1 items-center justify-center p-6 text-center text-muted-foreground">
          <div className="max-w-md">
            <h2 className="text-foreground text-lg font-bold">
              메인 작업 영역
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              우측 패널의 좌측 엣지(Edge)를 드래그하여 패널 폭을 조절합니다.
            </p>
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="bg-background flex h-screen w-full flex-col overflow-hidden">
        {/* 상단 전역 툴바 */}
        <header className="bg-muted/30 flex h-11 shrink-0 items-center justify-between border-b px-4 select-none">
          <span className="text-foreground text-xs font-semibold tracking-tight">
            GIS Map Workspace (Dual Dock Layout)
          </span>
          <span className="text-[11px] text-muted-foreground">
            좌우 패널 모두 각각 독립적으로 크기 조절 및 새 창 분리가 가능합니다.
          </span>
        </header>

        {/* 메인 워크스페이스 레이아웃 */}
        <div className="relative flex w-full flex-1 overflow-hidden">
          {/* 좌측 패널 (우측 경계선 리사이즈) */}
          <DockPanel className="border-r" defaultWidth={300} defaultHeight="100%" minWidth={200} maxWidth={500} resizable={true} resizeDirections={{
          right: true
        }} allowPopout={true} windowTitle="좌측 레이어 트리 - 독립 창">
            <SamplePanelContent title="레이어 트리" description="우측 경계를 드래그하여 크기를 조절하거나, 새 창으로 분리할 수 있습니다." items={['행정경계_시군구 (EPSG:5179)', '지적도 레이어', '수치표고모델 DEM']} />
          </DockPanel>

          {/* 중앙 메인 뷰포트 (Map Canvas 영역) */}
          <main className="bg-muted/20 relative flex flex-1 flex-col items-center justify-center overflow-hidden p-6 text-center">
            <div className="border-border bg-background/50 max-w-md rounded-lg border border-dashed p-6 shadow-xs">
              <h3 className="text-foreground text-base font-bold">
                Map Viewport Area
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                양쪽 패널이 리사이징되거나 새 창으로 분리/복귀될 때 중앙 뷰포트
                영역의 너비가 동적으로 반응합니다.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-[11px] font-medium text-primary">
                  Left Panel: 300px (Default)
                </span>
                <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-[11px] font-medium text-secondary-foreground">
                  Right Panel: 340px (Default)
                </span>
              </div>
            </div>
          </main>

          {/* 우측 패널 (좌측 경계선 리사이즈) */}
          <DockPanel defaultWidth={340} defaultHeight="100%" minWidth={220} maxWidth={550} resizable={true} className="border-l" resizeDirections={{
          left: true
        }} allowPopout={true} windowTitle="우측 속성 관리자 - 독립 창">
            <SamplePanelContent title="속성 & 심볼러" description="좌측 경계를 드래그하여 크기를 조절하거나, 새 창으로 분리할 수 있습니다." items={['선택된 피처: 14건', '좌표계: Korea 2000 (EPSG:5179)', '스타일 템플릿: 지적선 기본형']} />
          </DockPanel>
        </div>
      </div>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className="bg-muted/20 flex h-screen w-full flex-col overflow-hidden">
        {/* 상단 도킹 패널 */}
        <DockPanel {...args} className="border-b" resizeDirections={{
        bottom: true
      }}>
          <SamplePanelContent title="공간 필터 & 통계 분석 툴바" description="하단 경계선을 아래위로 드래그하여 패널 높이를 조절합니다." items={['버퍼 반경: 500m', '공간 연산자: Intersects (EPSG:5179)', '클러스터링 알고리즘: DBSCAN']} />
        </DockPanel>

        {/* 메인 작업 영역 */}
        <main className="flex flex-1 items-center justify-center p-6 text-center text-muted-foreground">
          <div className="max-w-md">
            <h2 className="text-foreground text-lg font-bold">
              메인 지도 영역 (Viewport)
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              상단 패널의 아래쪽 엣지(Edge)를 드래그하여 높이를 조절하거나, 새
              창으로 분리하여 다중 모니터 환경에서 상단 툴을 띄울 수 있습니다.
            </p>
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
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className="bg-muted/20 flex h-screen w-full flex-col overflow-hidden">
        {/* 메인 뷰포트 */}
        <main className="flex flex-1 items-center justify-center p-6 text-center text-muted-foreground">
          <div className="max-w-md">
            <h2 className="text-foreground text-lg font-bold">
              지도 메인 캔버스
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              하단 속성 테이블 패널의 위쪽 엣지(Edge)를 드래그하여 테이블 영역의
              높이를 조절합니다.
            </p>
          </div>
        </main>

        {/* 하단 도킹 패널 (속성 테이블/로그 뷰어 등에 적합) */}
        <DockPanel {...args} className="border-t" resizeDirections={{
        top: true
      }}>
          <SamplePanelContent title="속성 테이블 (Feature Attribute Table)" description="상단 경계선을 위아래로 드래그하여 테이블 높이를 조절할 수 있습니다." items={['ID: 10294 | 시군구코드: 41135 | 지목: 대', 'ID: 10295 | 시군구코드: 41135 | 지목: 임', 'ID: 10296 | 시군구코드: 41135 | 지목: 도로', 'ID: 10297 | 시군구코드: 41135 | 지목: 하천']} />
        </DockPanel>
      </div>;
  },
  args: {
    defaultWidth: '100%',
    defaultHeight: 260,
    minHeight: 150,
    maxHeight: 600,
    resizable: true,
    allowPopout: true,
    showPlaceholderOnPopout: false,
    windowTitle: '속성 테이블 - 새 창'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="bg-background flex h-screen w-full flex-col overflow-hidden">
        {/* 상단 쿼리 패널 (아래쪽 엣지 리사이즈) */}
        <DockPanel defaultWidth="100%" defaultHeight={180} minHeight={120} maxHeight={360} resizable={true} className="border-b" resizeDirections={{
        bottom: true
      }} allowPopout={true} windowTitle="상단 필터 콘솔 - 새 창">
          <SamplePanelContent title="상단 필터 콘솔" description="하단 경계를 드래그하여 높이를 조절합니다." items={['필터 조건: STATUS = ACTIVE', '공간 조인: KOREA_RIVER_2026']} />
        </DockPanel>

        {/* 중앙 메인 뷰포트 */}
        <main className="bg-muted/20 flex flex-1 items-center justify-center p-6 text-center text-muted-foreground">
          <div className="border-border bg-background/50 max-w-md rounded-lg border border-dashed p-6 shadow-xs">
            <h3 className="text-foreground text-base font-bold">
              중앙 지도 뷰포트
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              상단 및 하단 패널이 각각 독립적으로 높이 조절 및 팝업 분리가
              가능합니다.
            </p>
          </div>
        </main>

        {/* 하단 로그/테이블 패널 (위쪽 엣지 리사이즈) */}
        <DockPanel defaultWidth="100%" defaultHeight={220} minHeight={140} maxHeight={450} resizable={true} className="border-t" resizeDirections={{
        top: true
      }} allowPopout={true} windowTitle="하단 이벤트 로그 - 새 창">
          <SamplePanelContent title="시스템 실행 로그" description="상단 경계를 드래그하여 높이를 조절합니다." items={['[INFO] PostGIS 3.4 Spatial Index Loaded', '[DEBUG] WFS Vector Tiles Rendered: 2,410 geometries', '[SUCCESS] Viewport synchronized']} />
        </DockPanel>
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className="bg-muted/20 flex h-screen w-full overflow-hidden">
        <DockPanel {...args} className="border-r">
          <SamplePanelContent title="독립 분리 가능 패널" />
        </DockPanel>

        <main className="flex flex-1 items-center justify-center p-6 text-center text-muted-foreground">
          <p className="text-sm">
            상단 버튼을 눌러 새 창을 열면, 패널이 있던 원래 자리에 복귀 안내
            플레이스홀더가 노출됩니다.
          </p>
        </main>
      </div>;
  },
  args: {
    defaultWidth: 340,
    defaultHeight: '100%',
    minWidth: 220,
    maxWidth: 550,
    resizable: true,
    allowPopout: true,
    showPlaceholderOnPopout: true,
    windowTitle: '플레이스홀더 검증 창'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [isPoppedOut, setIsPoppedOut] = useState(false);
    const popoutTriggerRef = useRef<() => void>(() => {});
    const handleToggle = useCallback(() => {
      if (isPoppedOut) {
        setIsPoppedOut(false);
      } else {
        popoutTriggerRef.current();
      }
    }, [isPoppedOut]);
    return <div className="flex h-screen w-full flex-col overflow-hidden">
        <header className="bg-background flex h-12 shrink-0 items-center justify-between border-b px-4">
          <span className="text-sm font-bold">전역 앱 툴바</span>
          <button type="button" onClick={handleToggle} className="border-input hover:bg-accent cursor-pointer rounded border px-3 py-1 text-xs font-semibold">
            {isPoppedOut ? '본 화면으로 패널 복귀' : '외부 툴바에서 새 창 분리'}
          </button>
        </header>

        <div className="bg-muted/20 flex flex-1 overflow-hidden">
          <DockPanel {...args} className="border-r" isPoppedOut={isPoppedOut} onPopoutChange={setIsPoppedOut} registerPopoutTrigger={fn => {
          popoutTriggerRef.current = fn;
        }}>
            <SamplePanelContent title="외부 제어 독 패널" />
          </DockPanel>

          <main className="flex flex-1 items-center justify-center p-6 text-muted-foreground">
            <span className="text-sm">
              상단 툴바 및 내부 패널 버튼 양쪽 모두 동기화되어 동작합니다.
            </span>
          </main>
        </div>
      </div>;
  },
  args: {
    defaultWidth: 320,
    defaultHeight: '100%',
    resizable: true,
    allowPopout: true,
    showPlaceholderOnPopout: false,
    windowTitle: '외부 제어 팝아웃 패널'
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{m as BottomSideDock,_ as ControlledPopout,u as Default,f as DualDockPanels,d as RightSideDock,p as TopSideDock,h as VerticalDualDockPanels,g as WithPopoutPlaceholder,v as __namedExportsOrder,l as default};