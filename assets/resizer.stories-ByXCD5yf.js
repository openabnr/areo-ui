import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-sFfd_MYY.js";import{n,t as r}from"./resizer-DvfQqiMl.js";var i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),i=t(),{expect:a,fireEvent:o,fn:s,within:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/Resizable/Resizer`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{direction:`right`,onResizeStart:s()},decorators:[e=>(0,i.jsx)(`div`,{className:`relative h-32 w-48 border border-secondary-border bg-white`,children:(0,i.jsx)(e,{})})]},u={args:{direction:`right`},play:async({canvasElement:e,args:t})=>{let n=c(e).getByRole(`button`,{name:`right resize handle`});await o.mouseDown(n,{button:2}),await a(t.onResizeStart).not.toHaveBeenCalled(),await o.mouseDown(n,{button:0}),await a(t.onResizeStart).toHaveBeenCalledTimes(1),await o.touchStart(n),await a(t.onResizeStart).toHaveBeenCalledTimes(2);let r=new KeyboardEvent(`keydown`,{key:`Enter`,bubbles:!0,cancelable:!0});n.dispatchEvent(r),await a(r.defaultPrevented).toBe(!0);let i=new KeyboardEvent(`keydown`,{key:` `,bubbles:!0,cancelable:!0});n.dispatchEvent(i),await a(i.defaultPrevented).toBe(!0);let s=new KeyboardEvent(`keydown`,{key:`Escape`,bubbles:!0,cancelable:!0});n.dispatchEvent(s),await a(s.defaultPrevented).toBe(!1)}},d={args:{direction:`bottomRight`,replaceStyles:{backgroundColor:`rgba(59, 130, 246, 0.2)`}},render:e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{...e}),(0,i.jsx)(r,{direction:`top`,onResizeStart:e.onResizeStart}),(0,i.jsx)(r,{direction:`bottom`,onResizeStart:e.onResizeStart}),(0,i.jsx)(r,{direction:`left`,onResizeStart:e.onResizeStart}),(0,i.jsx)(r,{direction:`topRight`,onResizeStart:e.onResizeStart}),(0,i.jsx)(r,{direction:`bottomLeft`,onResizeStart:e.onResizeStart}),(0,i.jsx)(r,{direction:`topLeft`,onResizeStart:e.onResizeStart})]}),play:async({canvasElement:e})=>{let t=c(e).getByRole(`button`,{name:`bottomRight resize handle`});await a(t).toHaveStyle({backgroundColor:`rgba(59, 130, 246, 0.2)`})}},f=[`Default`,`CustomStylesAndDirections`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'right'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const handle = canvas.getByRole('button', {
      name: 'right resize handle'
    });

    // 1) 마우스 우클릭(button: 2) -> 조기 return 분기 (호출되지 않아야 함)
    await fireEvent.mouseDown(handle, {
      button: 2
    });
    await expect(args.onResizeStart).not.toHaveBeenCalled();

    // 2) 마우스 좌클릭(button: 0) -> preventDefault + onResizeStart 호출
    await fireEvent.mouseDown(handle, {
      button: 0
    });
    await expect(args.onResizeStart).toHaveBeenCalledTimes(1);

    // 3) 터치 시작(touchStart) -> 'button' in e === false 분기
    await fireEvent.touchStart(handle);
    await expect(args.onResizeStart).toHaveBeenCalledTimes(2);

    // 4) 키보드 Enter, Space(preventDefault 분기) 및 Escape(무시 분기)
    const enterEvent = new KeyboardEvent('keydown', {
      key: 'Enter',
      bubbles: true,
      cancelable: true
    });
    handle.dispatchEvent(enterEvent);
    await expect(enterEvent.defaultPrevented).toBe(true);
    const spaceEvent = new KeyboardEvent('keydown', {
      key: ' ',
      bubbles: true,
      cancelable: true
    });
    handle.dispatchEvent(spaceEvent);
    await expect(spaceEvent.defaultPrevented).toBe(true);
    const escEvent = new KeyboardEvent('keydown', {
      key: 'Escape',
      bubbles: true,
      cancelable: true
    });
    handle.dispatchEvent(escEvent);
    await expect(escEvent.defaultPrevented).toBe(false);
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'bottomRight',
    replaceStyles: {
      backgroundColor: 'rgba(59, 130, 246, 0.2)'
    }
  },
  render: args => <>
      <Resizer {...args} />
      <Resizer direction="top" onResizeStart={args.onResizeStart} />
      <Resizer direction="bottom" onResizeStart={args.onResizeStart} />
      <Resizer direction="left" onResizeStart={args.onResizeStart} />
      <Resizer direction="topRight" onResizeStart={args.onResizeStart} />
      <Resizer direction="bottomLeft" onResizeStart={args.onResizeStart} />
      <Resizer direction="topLeft" onResizeStart={args.onResizeStart} />
    </>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const brHandle = canvas.getByRole('button', {
      name: 'bottomRight resize handle'
    });
    await expect(brHandle).toHaveStyle({
      backgroundColor: 'rgba(59, 130, 246, 0.2)'
    });
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as CustomStylesAndDirections,u as Default,f as __namedExportsOrder,l as default};