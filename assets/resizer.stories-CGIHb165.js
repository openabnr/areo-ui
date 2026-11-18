import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-Bofpnzsy.js";import{n,t as r}from"./resizer-B2_cOead.js";var i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i=t(),{expect:a,fireEvent:o,fn:s,within:c}=__STORYBOOK_MODULE_TEST__,l={title:`Internal/Resizer`,component:r,parameters:{layout:`centered`},tags:[`!autodocs`],args:{direction:`right`,onResizeStart:s()}},u={render:e=>(0,i.jsxs)(`div`,{className:`relative h-24 w-40 border border-secondary-border bg-white`,children:[(0,i.jsx)(r,{...e,direction:`right`}),(0,i.jsx)(r,{...e,direction:`bottomRight`,replaceStyles:{backgroundColor:`rgba(0, 0, 0, 0.05)`}})]}),play:async({args:e,canvasElement:t})=>{let n=c(t),r=n.getByRole(`button`,{name:`right resize handle`}),i=n.getByRole(`button`,{name:`bottomRight resize handle`});o.mouseDown(r,{button:2}),await a(e.onResizeStart).not.toHaveBeenCalled(),o.mouseDown(r,{button:0}),await a(e.onResizeStart).toHaveBeenCalledTimes(1),o.touchStart(i),await a(e.onResizeStart).toHaveBeenCalledTimes(2);let s=new KeyboardEvent(`keydown`,{key:`Enter`,bubbles:!0,cancelable:!0});r.dispatchEvent(s),await a(s.defaultPrevented).toBe(!0);let l=new KeyboardEvent(`keydown`,{key:` `,bubbles:!0,cancelable:!0});r.dispatchEvent(l),await a(l.defaultPrevented).toBe(!0);let u=new KeyboardEvent(`keydown`,{key:`Escape`,bubbles:!0,cancelable:!0});r.dispatchEvent(u),await a(u.defaultPrevented).toBe(!1)}},d=[`InteractionsAndCustomStyles`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div className="relative h-24 w-40 border border-secondary-border bg-white">
      <Resizer {...args} direction="right" />
      <Resizer {...args} direction="bottomRight" replaceStyles={{
      backgroundColor: 'rgba(0, 0, 0, 0.05)'
    }} />
    </div>,
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const rightHandle = canvas.getByRole('button', {
      name: 'right resize handle'
    });
    const cornerHandle = canvas.getByRole('button', {
      name: 'bottomRight resize handle'
    });

    // 1. 우클릭(button !== 0) 시 onResizeStart 호출 안 됨 (Line 115 커버)
    void fireEvent.mouseDown(rightHandle, {
      button: 2
    });
    await expect(args.onResizeStart).not.toHaveBeenCalled();

    // 2. 좌클릭(button === 0) 시 onResizeStart 호출
    void fireEvent.mouseDown(rightHandle, {
      button: 0
    });
    await expect(args.onResizeStart).toHaveBeenCalledTimes(1);

    // 3. 터치 시작('button' in e === false) 시 onResizeStart 호출
    void fireEvent.touchStart(cornerHandle);
    await expect(args.onResizeStart).toHaveBeenCalledTimes(2);

    // 4. 키보드 Enter / Space 기본 동작 방지 및 일반 키 통과 (Lines 126-127 커버)
    const enterEvent = new KeyboardEvent('keydown', {
      key: 'Enter',
      bubbles: true,
      cancelable: true
    });
    rightHandle.dispatchEvent(enterEvent);
    await expect(enterEvent.defaultPrevented).toBe(true);
    const spaceEvent = new KeyboardEvent('keydown', {
      key: ' ',
      bubbles: true,
      cancelable: true
    });
    rightHandle.dispatchEvent(spaceEvent);
    await expect(spaceEvent.defaultPrevented).toBe(true);
    const escapeEvent = new KeyboardEvent('keydown', {
      key: 'Escape',
      bubbles: true,
      cancelable: true
    });
    rightHandle.dispatchEvent(escapeEvent);
    await expect(escapeEvent.defaultPrevented).toBe(false);
  }
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as InteractionsAndCustomStyles,d as __namedExportsOrder,l as default};