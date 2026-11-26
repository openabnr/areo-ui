import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-CfFMW0hA.js";import{n as r,t as i}from"./ResizablePanel-B-frmRAl.js";async function a(e,t,n){let r=e.ownerDocument.defaultView;if(!r)return;let i=e.getBoundingClientRect(),a=i.left+(n===0?0:20),o=i.top+(t===0?0:20);await d.mouseDown(e,{button:0,clientX:a,clientY:o}),await d.mouseMove(r,{button:0,clientX:a+t,clientY:o+n}),await d.mouseUp(r,{button:0,clientX:a+t,clientY:o+n})}function o({title:e,description:t}){return(0,l.jsxs)(`div`,{className:`bg-background text-foreground flex size-full flex-col`,children:[(0,l.jsx)(`div`,{className:`bg-muted/40 flex h-10 shrink-0 items-center border-b px-3 select-none`,children:(0,l.jsx)(`span`,{className:`text-xs font-semibold`,children:e})}),(0,l.jsx)(`div`,{className:`flex flex-1 flex-col gap-2 overflow-auto p-3 text-xs text-muted-foreground`,children:(0,l.jsx)(`p`,{className:`leading-relaxed`,children:t})})]})}function s(e){let[t,n]=(0,c.useState)(300),[r,a]=(0,c.useState)(!0);return(0,l.jsxs)(`div`,{className:`flex h-screen w-full flex-col overflow-hidden`,children:[(0,l.jsxs)(`header`,{className:`bg-background flex h-12 shrink-0 items-center justify-between border-b px-4`,children:[(0,l.jsxs)(`div`,{className:`flex items-center gap-2 text-xs`,children:[(0,l.jsxs)(`span`,{className:`font-semibold`,children:[`현재 너비: `,t,`px`]}),[240,360,480].map(e=>(0,l.jsxs)(`button`,{type:`button`,onClick:()=>n(e),className:`border-input hover:bg-accent cursor-pointer rounded border px-2 py-1`,children:[e,`px`]},e))]}),(0,l.jsx)(`button`,{type:`button`,onClick:()=>a(e=>!e),className:`border-input hover:bg-accent cursor-pointer rounded border px-2.5 py-1 text-xs font-medium`,children:r?`리사이즈 잠금`:`리사이즈 허용`})]}),(0,l.jsxs)(`div`,{className:`bg-muted/20 flex flex-1 overflow-hidden`,children:[(0,l.jsx)(i,{...e,width:t,defaultHeight:`100%`,minWidth:200,maxWidth:600,resizable:r,className:`border-r`,onResizeStop:(t,r)=>{n(t),e.onResizeStop?.(t,r)},children:(0,l.jsxs)(`div`,{className:`bg-background box-border flex size-full flex-col gap-3 p-3 text-xs`,children:[(0,l.jsx)(`span`,{className:`font-semibold`,children:`제어형 패널 (잠금 토글 시 상태 유지)`}),(0,l.jsx)(`input`,{type:`text`,"aria-label":`상태 유지 확인 입력창`,placeholder:`텍스트 입력 후 리사이즈 잠금을 토글하세요`,className:`border-input rounded border px-2 py-1.5 text-xs`})]})}),(0,l.jsx)(`main`,{className:`flex flex-1 items-center justify-center p-6 text-sm text-muted-foreground`,children:`제어형 레이아웃 뷰포트`})]})]})}var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{c=t(),r(),l=n(),{expect:u,fireEvent:d,fn:f,userEvent:p,within:m}=__STORYBOOK_MODULE_TEST__,h=`bg-muted/20 flex h-screen w-full overflow-hidden`,g=`bg-muted/20 flex h-screen w-full flex-col overflow-hidden`,_={title:`Layout/ResizablePanel`,component:i,parameters:{layout:`fullscreen`},tags:[`autodocs`],args:{onResizeStart:f(),onResize:f(),onResizeStop:f()},argTypes:{defaultWidth:{control:`text`,description:`초기 너비 (비제어 모드)`},defaultHeight:{control:`text`,description:`초기 높이 (비제어 모드)`},width:{control:`text`,description:`외부 제어 너비`},height:{control:`text`,description:`외부 제어 높이`},minWidth:{control:`number`,description:`최소 너비 제한`},maxWidth:{control:`number`,description:`최대 너비 제한`},minHeight:{control:`number`,description:`최소 높이 제한`},maxHeight:{control:`number`,description:`최대 높이 제한`},resizable:{control:`boolean`,description:`리사이징 활성화 여부`},contentSlot:{control:`text`,description:`내부 콘텐츠 컨테이너의 data-slot 속성값`}}},v={render:e=>(0,l.jsxs)(`div`,{className:h,children:[(0,l.jsx)(i,{...e,className:`border-r`,children:(0,l.jsx)(o,{title:`탐색기 패널`,description:`우측 경계선을 드래그하여 너비를 조절할 수 있습니다.`})}),(0,l.jsx)(`main`,{className:`flex flex-1 items-center justify-center p-6 text-sm text-muted-foreground`,children:`메인 콘텐츠 영역`})]}),args:{defaultWidth:320,defaultHeight:`100%`,minWidth:200,maxWidth:600,resizable:!0},play:async({canvasElement:e,args:t})=>{await a(m(e).getByRole(`button`,{name:`right resize handle`}),50,0),await u(t.onResizeStart).toHaveBeenCalled(),await u(t.onResize).toHaveBeenCalled(),await u(t.onResizeStop).toHaveBeenCalled();let n=e.querySelector(`[data-slot="resizable-panel-content"]`);n&&(await d.scroll(n),Object.defineProperty(n,"scrollLeft",{writable:!0,value:30}),await d.scroll(n),await u(n.scrollLeft).toBe(0))}},y={render:e=>(0,l.jsxs)(`div`,{className:h,children:[(0,l.jsx)(`main`,{className:`flex flex-1 items-center justify-center p-6 text-sm text-muted-foreground`,children:`메인 작업 영역`}),(0,l.jsx)(i,{...e,className:`border-l`,resizeDirections:{left:!0},children:(0,l.jsx)(o,{title:`속성 인스펙터`,description:`좌측 경계선을 드래그하여 패널 너비를 조절합니다.`})})]}),args:{defaultWidth:340,defaultHeight:`100%`,minWidth:220,maxWidth:560,resizable:!0}},b={render:e=>(0,l.jsxs)(`div`,{className:g,children:[(0,l.jsx)(i,{...e,className:`border-b`,resizeDirections:{bottom:!0},children:(0,l.jsx)(o,{title:`상단 필터 바`,description:`하단 경계선을 드래그하여 높이를 조절합니다.`})}),(0,l.jsx)(`main`,{className:`flex flex-1 items-center justify-center p-6 text-sm text-muted-foreground`,children:`중앙 뷰포트`}),(0,l.jsx)(i,{defaultWidth:`100%`,defaultHeight:180,minHeight:100,maxHeight:360,className:`border-t`,resizeDirections:{top:!0},children:(0,l.jsx)(o,{title:`하단 로그 콘솔`,description:`상단 경계선을 드래그하여 높이를 조절합니다.`})})]}),args:{defaultWidth:`100%`,defaultHeight:180,minHeight:100,maxHeight:360,resizable:!0},play:async({canvasElement:e,args:t})=>{await a(m(e).getByRole(`button`,{name:`bottom resize handle`}),0,40),await u(t.onResizeStop).toHaveBeenCalled()}},x={render:e=>(0,l.jsx)(`div`,{className:`bg-muted/20 flex h-screen w-full items-start p-6`,children:(0,l.jsx)(i,{...e,className:`rounded-md border shadow-xs`,resizeDirections:{right:!0,bottom:!0,bottomRight:!0},children:(0,l.jsx)(o,{title:`2D 자유 크기 패널`,description:`우측, 하단 또는 우하단 모서리를 드래그해 가로·세로를 동시에 조절합니다.`})})}),args:{defaultWidth:360,defaultHeight:240,minWidth:200,maxWidth:720,minHeight:140,maxHeight:540,resizable:!0},play:async({canvasElement:e,args:t})=>{let n=m(e);await a(n.getByRole(`button`,{name:`right resize handle`}),40,0),await a(n.getByRole(`button`,{name:`bottom resize handle`}),0,30),await u(t.onResizeStop).toHaveBeenCalledTimes(2)}},S={render:()=>(0,l.jsxs)(`div`,{className:h,children:[(0,l.jsx)(i,{resizable:!1,defaultWidth:`40%`,defaultHeight:`100%`,className:`border-r`,children:(0,l.jsx)(o,{title:`고정 크기 패널`,description:`resizable={false} 상태에서는 핸들이 렌더링되지 않습니다.`})}),(0,l.jsx)(`main`,{className:`flex flex-1 items-center justify-center p-6 text-sm text-muted-foreground`,children:`메인 영역`})]}),play:async({canvasElement:e})=>{let t=m(e);await u(t.queryByRole(`button`,{name:/resize handle/i})).toBeNull()}},C={render:e=>(0,l.jsx)(s,{...e}),play:async({canvasElement:e})=>{let t=m(e),n=t.getByLabelText(`상태 유지 확인 입력창`);await p.type(n,`keep-state`),await p.click(t.getByRole(`button`,{name:`480px`})),await u(t.getByText(`현재 너비: 480px`)).toBeInTheDocument(),await p.click(t.getByRole(`button`,{name:`리사이즈 잠금`})),await u(t.queryByRole(`button`,{name:`right resize handle`})).toBeNull(),await u(n).toHaveValue(`keep-state`),await p.click(t.getByRole(`button`,{name:`리사이즈 허용`})),await u(t.getByRole(`button`,{name:`right resize handle`})).toBeInTheDocument()}},w={render:e=>(0,l.jsxs)(`div`,{className:h,children:[(0,l.jsx)(i,{...e,className:`border-r`,resizeHandleClasses:{right:`hover:bg-primary/40 active:bg-primary/60`},children:(0,l.jsx)(o,{title:`커스텀 핸들 스타일`,description:`우측 핸들에 사용자 정의 호버/활성 스타일이 기본 핸들 클래스와 병합됩니다.`})}),(0,l.jsx)(`main`,{className:`flex flex-1 items-center justify-center p-6 text-sm text-muted-foreground`,children:`메인 영역`})]}),args:{defaultWidth:300,defaultHeight:`100%`,minWidth:200,maxWidth:500,resizable:!0},play:async({canvasElement:e})=>{let t=m(e).getByRole(`button`,{name:`right resize handle`});await u(t.className).toContain(`hover:bg-primary/40`)}},T=[`Default`,`RightEdge`,`VerticalDock`,`MultiDirection`,`NonResizable`,`ControlledSize`,`CustomHandleStyle`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div className={HORIZONTAL_STAGE_CLASS}>
      <ResizablePanel {...args} className="border-r">
        <PanelBody title="탐색기 패널" description="우측 경계선을 드래그하여 너비를 조절할 수 있습니다." />
      </ResizablePanel>

      <main className="flex flex-1 items-center justify-center p-6 text-sm text-muted-foreground">
        메인 콘텐츠 영역
      </main>
    </div>,
  args: {
    defaultWidth: 320,
    defaultHeight: '100%',
    minWidth: 200,
    maxWidth: 600,
    resizable: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const rightHandle = canvas.getByRole('button', {
      name: 'right resize handle'
    });
    await dragResizeHandle(rightHandle, 50, 0);
    await expect(args.onResizeStart).toHaveBeenCalled();
    await expect(args.onResize).toHaveBeenCalled();
    await expect(args.onResizeStop).toHaveBeenCalled();
    const contentBox = canvasElement.querySelector<HTMLElement>('[data-slot="resizable-panel-content"]');
    if (contentBox) {
      await fireEvent.scroll(contentBox);
      Object.defineProperty(contentBox, 'scrollLeft', {
        writable: true,
        value: 30
      });
      await fireEvent.scroll(contentBox);
      await expect(contentBox.scrollLeft).toBe(0);
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <div className={HORIZONTAL_STAGE_CLASS}>
      <main className="flex flex-1 items-center justify-center p-6 text-sm text-muted-foreground">
        메인 작업 영역
      </main>

      <ResizablePanel {...args} className="border-l" resizeDirections={{
      left: true
    }}>
        <PanelBody title="속성 인스펙터" description="좌측 경계선을 드래그하여 패널 너비를 조절합니다." />
      </ResizablePanel>
    </div>,
  args: {
    defaultWidth: 340,
    defaultHeight: '100%',
    minWidth: 220,
    maxWidth: 560,
    resizable: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div className={VERTICAL_STAGE_CLASS}>
      <ResizablePanel {...args} className="border-b" resizeDirections={{
      bottom: true
    }}>
        <PanelBody title="상단 필터 바" description="하단 경계선을 드래그하여 높이를 조절합니다." />
      </ResizablePanel>

      <main className="flex flex-1 items-center justify-center p-6 text-sm text-muted-foreground">
        중앙 뷰포트
      </main>

      <ResizablePanel defaultWidth="100%" defaultHeight={180} minHeight={100} maxHeight={360} className="border-t" resizeDirections={{
      top: true
    }}>
        <PanelBody title="하단 로그 콘솔" description="상단 경계선을 드래그하여 높이를 조절합니다." />
      </ResizablePanel>
    </div>,
  args: {
    defaultWidth: '100%',
    defaultHeight: 180,
    minHeight: 100,
    maxHeight: 360,
    resizable: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const bottomHandle = canvas.getByRole('button', {
      name: 'bottom resize handle'
    });
    await dragResizeHandle(bottomHandle, 0, 40);
    await expect(args.onResizeStop).toHaveBeenCalled();
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div className="bg-muted/20 flex h-screen w-full items-start p-6">
      <ResizablePanel {...args} className="rounded-md border shadow-xs" resizeDirections={{
      right: true,
      bottom: true,
      bottomRight: true
    }}>
        <PanelBody title="2D 자유 크기 패널" description="우측, 하단 또는 우하단 모서리를 드래그해 가로·세로를 동시에 조절합니다." />
      </ResizablePanel>
    </div>,
  args: {
    defaultWidth: 360,
    defaultHeight: 240,
    minWidth: 200,
    maxWidth: 720,
    minHeight: 140,
    maxHeight: 540,
    resizable: true
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
    const bottomHandle = canvas.getByRole('button', {
      name: 'bottom resize handle'
    });
    await dragResizeHandle(bottomHandle, 0, 30);
    await expect(args.onResizeStop).toHaveBeenCalledTimes(2);
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className={HORIZONTAL_STAGE_CLASS}>
      <ResizablePanel resizable={false} defaultWidth="40%" defaultHeight="100%" className="border-r">
        <PanelBody title="고정 크기 패널" description="resizable={false} 상태에서는 핸들이 렌더링되지 않습니다." />
      </ResizablePanel>
      <main className="flex flex-1 items-center justify-center p-6 text-sm text-muted-foreground">
        메인 영역
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledResizeDemo {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('상태 유지 확인 입력창');
    await userEvent.type(input, 'keep-state');
    await userEvent.click(canvas.getByRole('button', {
      name: '480px'
    }));
    await expect(canvas.getByText('현재 너비: 480px')).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: '리사이즈 잠금'
    }));
    await expect(canvas.queryByRole('button', {
      name: 'right resize handle'
    })).toBeNull();
    await expect(input).toHaveValue('keep-state');
    await userEvent.click(canvas.getByRole('button', {
      name: '리사이즈 허용'
    }));
    await expect(canvas.getByRole('button', {
      name: 'right resize handle'
    })).toBeInTheDocument();
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <div className={HORIZONTAL_STAGE_CLASS}>
      <ResizablePanel {...args} className="border-r" resizeHandleClasses={{
      right: 'hover:bg-primary/40 active:bg-primary/60'
    }}>
        <PanelBody title="커스텀 핸들 스타일" description="우측 핸들에 사용자 정의 호버/활성 스타일이 기본 핸들 클래스와 병합됩니다." />
      </ResizablePanel>

      <main className="flex flex-1 items-center justify-center p-6 text-sm text-muted-foreground">
        메인 영역
      </main>
    </div>,
  args: {
    defaultWidth: 300,
    defaultHeight: '100%',
    minWidth: 200,
    maxWidth: 500,
    resizable: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const rightHandle = canvas.getByRole('button', {
      name: 'right resize handle'
    });
    await expect(rightHandle.className).toContain('hover:bg-primary/40');
  }
}`,...w.parameters?.docs?.source}}}})))()}E();export{C as ControlledSize,w as CustomHandleStyle,v as Default,x as MultiDirection,S as NonResizable,y as RightEdge,b as VerticalDock,T as __namedExportsOrder,_ as default};