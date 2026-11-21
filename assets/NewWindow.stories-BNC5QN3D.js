import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-D8PjfN8a.js";import{n as r,t as i}from"./Button-Ch-LtICR.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./NewWindow-ZxGjU14M.js";import{t as d}from"./server.browser-BwzeSzci.js";function f(e){return new Promise(t=>{globalThis.setTimeout(t,e)})}function p(){let e=document.implementation.createHTMLDocument(`Initial Popup`),t=new Map,n=!1,r=100,i=100;return{popup:{document:e,location:{href:`about:blank`},outerWidth:616,outerHeight:700,innerWidth:600,innerHeight:640,get screenLeft(){return r},get screenTop(){return i},get closed(){return n},resizeTo:T(),close:()=>{n=!0,t.get(`beforeunload`)?.forEach(e=>e(new Event(`beforeunload`)))},addEventListener:(e,n)=>{let r=t.get(e)??new Set;r.add(n),t.set(e,r)},removeEventListener:(e,n)=>{t.get(e)?.delete(n)}},popupDoc:e,setCoords:(e,t)=>{r=e,i=t},markClosed:()=>{n=!0}}}function m(){let e=document.implementation.createHTMLDocument(`Bodyless`);e.body.remove();let t=e.createElement(`div`);t.setAttribute(`id`,`areo-window-container`),e.documentElement.appendChild(t);let n=new Map,r=!1;return{popup:{document:e,location:{href:`about:blank`},outerWidth:600,outerHeight:640,innerWidth:600,innerHeight:640,screenLeft:10,screenTop:10,get closed(){return r},resizeTo:T(),close:()=>{r=!0,n.get(`beforeunload`)?.forEach(e=>e(new Event(`beforeunload`)))},addEventListener:(e,t)=>{let r=n.get(e)??new Set;r.add(t),n.set(e,r)},removeEventListener:(e,t)=>{n.get(e)?.delete(t)}},popupDoc:e}}function h(){let e=new Map,t=!1,n=``;return new Proxy({get document(){throw new DOMException(`Cross-origin blocked`)},location:{get href(){throw new DOMException(`Cross-origin location read blocked`)},set href(e){n=e}},get assignedHref(){return n},get screenLeft(){throw new DOMException(`Cross-origin screenLeft blocked`)},get screenTop(){return 0},outerWidth:620,outerHeight:700,innerWidth:600,innerHeight:640,get closed(){return t},resizeTo:()=>{throw new DOMException(`resizeTo blocked`)},close:()=>{t=!0,e.get(`beforeunload`)?.forEach(e=>e(new Event(`beforeunload`)))},addEventListener:(t,n)=>{let r=e.get(t)??new Set;r.add(n),e.set(t,r)},removeEventListener:(t,n)=>{e.get(t)?.delete(n)}},{get(e,t,n){if(t===`__isPopinClose`)throw Error(`Proxy trap error`);return Reflect.get(e,t,n)}})}function g(e){let[t,n]=(0,x.useState)(!1),[r,a]=(0,x.useState)(`초기 팝업 제목`),[o,s]=(0,x.useState)(``);return(0,C.jsxs)(`div`,{className:`flex flex-col items-center gap-2 p-4`,children:[(0,C.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,C.jsx)(i,{size:`sm`,onClick:()=>n(!0),children:`새 창 열기`}),(0,C.jsx)(i,{size:`sm`,onClick:()=>a(`변경된 팝업 제목`),children:`제목 변경`}),(0,C.jsx)(i,{size:`sm`,onClick:()=>s(`https://example.com/popup`),children:`URL 이동`}),(0,C.jsx)(i,{size:`sm`,onClick:()=>n(!1),children:`새 창 닫기`})]}),t&&(0,C.jsx)(u,{title:r,url:o,center:`parent`,copyStyles:!0,copyScripts:!0,closeOnUnmount:e.closeOnUnmount??!0,onOpen:e.onOpen,onMount:e.onMount,onBlock:e.onBlock,onFeaturesChange:e.onFeaturesChange,onUnload:e.onUnload,children:(0,C.jsx)(`div`,{className:`p-3 text-xs`,children:`팝업 내부 포털 콘텐츠`})})]})}function _(e){let[t,n]=(0,x.useState)(!1);return(0,C.jsxs)(`div`,{id:`new-window-util-target`,className:`h-24 w-48 border p-2 text-xs`,children:[(0,C.jsx)(i,{size:`sm`,onClick:()=>n(!0),children:`차단 팝업 열기`}),t&&(0,C.jsx)(u,{center:`screen`,onBlock:e.onBlock,children:(0,C.jsx)(`div`,{children:`차단될 팝업`})})]})}function v(e){let[t,n]=(0,x.useState)(!1);return(0,C.jsxs)(`div`,{className:`flex gap-2 p-4`,children:[(0,C.jsx)(i,{size:`sm`,onClick:()=>n(!0),children:`열기`}),(0,C.jsx)(i,{size:`sm`,onClick:()=>n(!1),children:`언마운트`}),t&&(0,C.jsx)(u,{center:!1,copyStyles:!1,closeOnUnmount:e.closeOnUnmount,features:{left:40,top:50,width:420,height:320},onUnload:e.onUnload,children:(0,C.jsx)(`div`,{children:`스냅샷 테스트`})})]})}function y(){let[e,t]=(0,x.useState)(`none`),[n,r]=(0,x.useState)(`https://example.com/init`),[a,o]=(0,x.useState)(``),[s,c]=(0,x.useState)(`초기`);return(0,C.jsxs)(`div`,{className:`flex flex-wrap gap-2 p-4`,children:[(0,C.jsx)(i,{size:`sm`,onClick:()=>t(`url`),children:`초기 URL 팝업`}),(0,C.jsx)(i,{size:`sm`,onClick:()=>r(`https://example.com/init`),children:`동일 URL 유지`}),(0,C.jsx)(i,{size:`sm`,onClick:()=>t(`throwing`),children:`교차 출처 예외 팝업`}),(0,C.jsx)(i,{size:`sm`,onClick:()=>c(`업데이트 제목`),children:`예외 제목 변경`}),(0,C.jsx)(i,{size:`sm`,onClick:()=>o(`https://example.com/cross`),children:`예외 URL 변경`}),(0,C.jsx)(i,{size:`sm`,onClick:()=>t(`none`),children:`종료`}),e===`url`&&(0,C.jsx)(u,{url:n,children:(0,C.jsx)(`div`,{children:`URL 모드에서는 렌더링되지 않음`})}),e===`throwing`&&(0,C.jsx)(u,{title:s,url:a,center:`parent`,children:(0,C.jsx)(`div`,{children:`교차 출처 방어`})})]})}function b(e){let[t,n]=(0,x.useState)(!1);return(0,C.jsxs)(`div`,{className:`flex gap-2 p-4`,children:[(0,C.jsx)(i,{size:`sm`,onClick:()=>n(!0),children:`이벤트 팝업 열기`}),(0,C.jsx)(i,{size:`sm`,onClick:()=>n(!1),children:`이벤트 팝업 닫기`}),t&&(0,C.jsx)(u,{copyStyles:!0,copyScripts:!0,onUnload:e.onUnload,children:(0,C.jsx)(`div`,{children:`이벤트 테스트`})})]})}var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{x=t(),S=d(),r(),a(),C=n(),{expect:w,fn:T,userEvent:E,within:D}=__STORYBOOK_MODULE_TEST__,O={title:`Components/NewWindow`,component:u,parameters:{layout:`centered`},tags:[`autodocs`]},k={args:{onOpen:T(),onMount:T(),onFeaturesChange:T(),onUnload:T()},render:e=>(0,C.jsx)(g,{...e}),play:async({canvasElement:e,args:t})=>{let n=D(e),r=globalThis.open,i=p(),a=document.createElement(`style`);a.textContent=`.test-popup-style { color: red; }`,document.head.appendChild(a);let o=document.createElement(`script`);o.text=`globalThis.__testPopupScript = true;`,document.head.appendChild(o),globalThis.open=T(()=>i.popup);try{await E.click(n.getByRole(`button`,{name:`새 창 열기`})),await w(t.onOpen).toHaveBeenCalledTimes(1),await w(t.onMount).toHaveBeenCalledTimes(1),await E.click(n.getByRole(`button`,{name:`제목 변경`})),await w(i.popupDoc.title).toBe(`변경된 팝업 제목`),await E.click(n.getByRole(`button`,{name:`URL 이동`})),i.setCoords(220,180),await f(250),await w(t.onFeaturesChange).toHaveBeenCalled(),i.markClosed(),await f(250),await w(t.onUnload).toHaveBeenCalled(),await E.click(n.getByRole(`button`,{name:`새 창 닫기`}))}finally{globalThis.open=r,a.remove(),o.remove()}}},A={args:{onBlock:T()},render:e=>(0,C.jsx)(_,{...e}),play:async({canvasElement:e,args:t})=>{let n=D(e),r=globalThis.open,i=Object.getOwnPropertyDescriptor(globalThis,`screen`);globalThis.open=T(()=>null),Object.defineProperty(globalThis,"screen",{configurable:!0,get:()=>({availWidth:0,availHeight:0})});try{await E.click(n.getByRole(`button`,{name:`차단 팝업 열기`})),await w(t.onBlock).toHaveBeenCalledTimes(1);let r=s(globalThis);await w(r).toBeGreaterThan(0);let i=l(globalThis);await w(i).toHaveLength(3);let a=e.querySelector(`#new-window-util-target`);if(a){let e=c(a),t=c(a,{left:10,top:10,width:50,height:30});await w(e.width).toBeGreaterThan(0),await w(t.width).toBeGreaterThan(0)}}finally{globalThis.open=r,i&&Object.defineProperty(globalThis,"screen",i)}}},j={args:{onUnload:T()},render:e=>(0,C.jsx)(v,{closeOnUnmount:!1,onUnload:e.onUnload}),play:async({canvasElement:e})=>{let t=D(e),n=globalThis.open,r=p(),i=r.popupDoc.createElement(`div`);i.setAttribute(`id`,`areo-window-container-static`),r.popupDoc.body.appendChild(i),globalThis.open=T(()=>r.popup);try{await E.click(t.getByRole(`button`,{name:`열기`})),await E.click(t.getByRole(`button`,{name:`언마운트`}));let e=r.popupDoc.getElementById(`areo-window-container-static`);await w(e).not.toBeNull(),await w(r.popup.closed).toBe(!1)}finally{globalThis.open=n}}},M={render:()=>{let[e,t]=(0,x.useState)(!1);return(0,C.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,C.jsx)(v,{closeOnUnmount:!0}),(0,C.jsxs)(`div`,{className:`flex gap-2 px-4`,children:[(0,C.jsx)(i,{size:`sm`,onClick:()=>t(!0),children:`바디리스 스냅샷 열기`}),(0,C.jsx)(i,{size:`sm`,onClick:()=>t(!1),children:`바디리스 스냅샷 언마운트`}),e&&(0,C.jsx)(u,{closeOnUnmount:!1,children:(0,C.jsx)(`div`,{children:`바디리스 스냅샷`})})]})]})},play:async({canvasElement:e})=>{let t=D(e),n=globalThis.open,r=m(),i=m(),a=0;globalThis.open=T(()=>(a+=1,a===1?r.popup:i.popup));try{await E.click(t.getByRole(`button`,{name:`열기`})),await E.click(t.getByRole(`button`,{name:`언마운트`})),await w(r.popup.closed).toBe(!0),await E.click(t.getByRole(`button`,{name:`바디리스 스냅샷 열기`})),await E.click(t.getByRole(`button`,{name:`바디리스 스냅샷 언마운트`})),await w(i.popupDoc.getElementById(`areo-window-container-static`)).not.toBeNull()}finally{globalThis.open=n}}},N={render:()=>(0,C.jsx)(y,{}),play:async({canvasElement:e})=>{let t=D(e),n=globalThis.open,r=p();r.popup.location.href=`https://example.com/init`,globalThis.open=T(()=>r.popup);try{await E.click(t.getByRole(`button`,{name:`초기 URL 팝업`})),await E.click(t.getByRole(`button`,{name:`동일 URL 유지`})),await E.click(t.getByRole(`button`,{name:`종료`}));let e=h();globalThis.open=T(()=>e),await E.click(t.getByRole(`button`,{name:`교차 출처 예외 팝업`})),await E.click(t.getByRole(`button`,{name:`예외 제목 변경`})),await E.click(t.getByRole(`button`,{name:`예외 URL 변경`})),await f(250),e.close(),await E.click(t.getByRole(`button`,{name:`종료`}))}finally{globalThis.open=n}}},P={args:{onUnload:T()},render:e=>(0,C.jsx)(b,{onUnload:e.onUnload}),play:async({canvasElement:e,args:t})=>{let n=D(e),r=globalThis.open,i=document.createElement(`script`);i.id=`areo-test-script`,i.type=`text/plain`,i.src=`data:text/plain,void(0)`,i.text=`// noop`,document.head.appendChild(i);let a=document.createElement(`script`);document.head.appendChild(a);let o=document.createElement(`link`);o.rel=`stylesheet`,document.head.appendChild(o);let s=p(),c=p(),l=0;globalThis.open=T(()=>(l+=1,l===1?s.popup:c.popup));let u=document.createElement(`link`);u.rel=`stylesheet`,u.href=`data:text/css,.dynamic-link{opacity:1;}`;let d=document.createElement(`style`);d.textContent=`.dynamic-style{display:block;}`;try{await E.click(n.getByRole(`button`,{name:`이벤트 팝업 열기`})),document.head.appendChild(u),await f(50),document.head.appendChild(d),await f(50),s.popupDoc.dispatchEvent(new KeyboardEvent(`keydown`,{key:`Enter`})),Reflect.set(s.popup,`__isPopinClose`,!0),s.popupDoc.dispatchEvent(new KeyboardEvent(`keydown`,{key:`Escape`})),s.popup.close(),s.popup.close(),await w(t.onUnload).toHaveBeenCalledWith(!1,w.any(Object),`popin`),await E.click(n.getByRole(`button`,{name:`이벤트 팝업 닫기`})),await E.click(n.getByRole(`button`,{name:`이벤트 팝업 열기`})),globalThis.dispatchEvent(new Event(`beforeunload`)),await w(c.popup.closed).toBe(!0),await w(t.onUnload).toHaveBeenLastCalledWith(!0,w.any(Object),`user-close`),await E.click(n.getByRole(`button`,{name:`이벤트 팝업 닫기`}))}finally{globalThis.open=r,i.remove(),a.remove(),o.remove(),u.remove(),d.remove()}}},F={render:()=>(0,C.jsx)(`div`,{className:`p-2 text-xs`,children:`Geometry Utils Coverage`}),play:async({canvasElement:e})=>{let t=e=>({innerWidth:1e3,innerHeight:800,outerWidth:1016,outerHeight:860,screenX:100,screenY:50,screen:{availWidth:e.availWidth??1920},frameElement:e.frameElement??null,...e});await w(s(t({innerWidth:0}))).toBe(1),await w(s(t({outerWidth:1920,availWidth:1920,innerWidth:1920}))).toBeGreaterThan(0),await w(s(t({outerWidth:0,outerHeight:0}))).toBe(1),await w(s(t({outerWidth:2200,innerWidth:1e3,outerHeight:2200,innerHeight:1e3,availWidth:2560}))).toBe(2),await w(s(t({outerWidth:500,innerWidth:1e3,outerHeight:500,innerHeight:1e3}))).toBeLessThan(.73);let[n]=l(t({outerWidth:1200,innerWidth:1e3}));await w(n).toBe(8);let r=document.implementation.createHTMLDocument(`detached-doc`).createElement(`div`),i=c(r);await w(i.width).toBe(0);let a={offsetWidth:0,offsetHeight:0,getBoundingClientRect:()=>({left:10,top:20,right:10,bottom:20,width:0,height:0,x:10,y:20,toJSON:()=>({})}),ownerDocument:{defaultView:t({outerWidth:2e3,innerWidth:1e3,outerHeight:2e3,innerHeight:1e3,availWidth:2560})}},d=c(a,{left:5,top:5,width:20,height:10});await w(d.left).toBeGreaterThan(0);let f={offsetWidth:100,offsetHeight:50,getBoundingClientRect:()=>({left:12,top:16,right:112,bottom:66,width:100,height:50,x:12,y:16,toJSON:()=>({})}),ownerDocument:{defaultView:t({frameElement:e})}},p=c(f);await w(p.width).toBeGreaterThan(0);let m=(0,S.renderToString)((0,C.jsx)(u,{}));await w(m).toBe(``);let h=Object.getOwnPropertyDescriptor(globalThis,`devicePixelRatio`);try{Object.defineProperty(globalThis,"devicePixelRatio",{configurable:!0,get:()=>1});let e=[[`Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:120.0) Gecko/20100101 Firefox/120.0`,[68,8,8]],[`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0`,[62,8,8]],[`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15`,[22,0,0]],[`Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:120.0) Gecko/20100101 Firefox/120.0`,[59,0,0]],[`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36`,[51,0,0]],[`Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36`,[60,8,8]]],t=e.map(([e])=>o(e)),n=e.map(([,e])=>e);await w(t).toEqual(n),Object.defineProperty(globalThis,"devicePixelRatio",{configurable:!0,get:()=>2}),await w(o(`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36`)).toEqual([58,7,7])}finally{h&&Object.defineProperty(globalThis,"devicePixelRatio",h)}}},I=[`FullLifecycle`,`BlockedAndStaticSnapshot`,`StaticSnapshotOnUnmount`,`CloseWhileOpenOnUnmount`,`InitialUrlAndCrossOriginGuards`,`PopupEventsAndDynamicAssets`,`WindowGeometryUtils`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    onOpen: fn(),
    onMount: fn(),
    onFeaturesChange: fn(),
    onUnload: fn()
  },
  render: args => <NewWindowLifecycleDemo {...args} />,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const originalOpen = globalThis.open;
    const mock = createMockPopupWindow();
    const testStyle = document.createElement('style');
    testStyle.textContent = '.test-popup-style { color: red; }';
    document.head.appendChild(testStyle);
    const testScript = document.createElement('script');
    testScript.text = 'globalThis.__testPopupScript = true;';
    document.head.appendChild(testScript);
    globalThis.open = fn(() => mock.popup);
    try {
      await userEvent.click(canvas.getByRole('button', {
        name: '새 창 열기'
      }));
      await expect(args.onOpen).toHaveBeenCalledTimes(1);
      await expect(args.onMount).toHaveBeenCalledTimes(1);
      await userEvent.click(canvas.getByRole('button', {
        name: '제목 변경'
      }));
      await expect(mock.popupDoc.title).toBe('변경된 팝업 제목');
      await userEvent.click(canvas.getByRole('button', {
        name: 'URL 이동'
      }));
      mock.setCoords(220, 180);
      await waitMs(250);
      await expect(args.onFeaturesChange).toHaveBeenCalled();
      mock.markClosed();
      await waitMs(250);
      await expect(args.onUnload).toHaveBeenCalled();
      await userEvent.click(canvas.getByRole('button', {
        name: '새 창 닫기'
      }));
    } finally {
      globalThis.open = originalOpen;
      testStyle.remove();
      testScript.remove();
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    onBlock: fn()
  },
  render: args => <BlockedPopupDemo {...args} />,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const originalOpen = globalThis.open;
    const originalScreen = Object.getOwnPropertyDescriptor(globalThis, 'screen');
    globalThis.open = fn(() => null);
    Object.defineProperty(globalThis, 'screen', {
      configurable: true,
      get: () => ({
        availWidth: 0,
        availHeight: 0
      })
    });
    try {
      await userEvent.click(canvas.getByRole('button', {
        name: '차단 팝업 열기'
      }));
      await expect(args.onBlock).toHaveBeenCalledTimes(1);
      const zoom = estimateBrowserZoom(globalThis as unknown as Window);
      await expect(zoom).toBeGreaterThan(0);
      const border = estimateWindowBorder(globalThis as unknown as Window);
      await expect(border).toHaveLength(3);
      const targetEl = canvasElement.querySelector<HTMLElement>('#new-window-util-target');
      if (targetEl) {
        const rect1 = mapElementToScreenRect(targetEl);
        const rect2 = mapElementToScreenRect(targetEl, {
          left: 10,
          top: 10,
          width: 50,
          height: 30
        });
        await expect(rect1.width).toBeGreaterThan(0);
        await expect(rect2.width).toBeGreaterThan(0);
      }
    } finally {
      globalThis.open = originalOpen;
      if (originalScreen) {
        Object.defineProperty(globalThis, 'screen', originalScreen);
      }
    }
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    onUnload: fn()
  },
  render: args => <CloseOnUnmountDemo closeOnUnmount={false} onUnload={args.onUnload} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const originalOpen = globalThis.open;
    const mock = createMockPopupWindow();
    const staleStatic = mock.popupDoc.createElement('div');
    staleStatic.setAttribute('id', 'areo-window-container-static');
    mock.popupDoc.body.appendChild(staleStatic);
    globalThis.open = fn(() => mock.popup);
    try {
      await userEvent.click(canvas.getByRole('button', {
        name: '열기'
      }));
      await userEvent.click(canvas.getByRole('button', {
        name: '언마운트'
      }));
      const staticNode = mock.popupDoc.getElementById('areo-window-container-static');
      await expect(staticNode).not.toBeNull();
      await expect(mock.popup.closed).toBe(false);
    } finally {
      globalThis.open = originalOpen;
    }
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [openSnapshot, setOpenSnapshot] = useState(false);
    return <div className="flex flex-col gap-2">
        <CloseOnUnmountDemo closeOnUnmount />
        <div className="flex gap-2 px-4">
          <Button size="sm" onClick={() => setOpenSnapshot(true)}>
            바디리스 스냅샷 열기
          </Button>
          <Button size="sm" onClick={() => setOpenSnapshot(false)}>
            바디리스 스냅샷 언마운트
          </Button>
          {openSnapshot && <NewWindow closeOnUnmount={false}>
              <div>바디리스 스냅샷</div>
            </NewWindow>}
        </div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const originalOpen = globalThis.open;
    const first = createBodylessMockPopup();
    const second = createBodylessMockPopup();
    let count = 0;
    globalThis.open = fn(() => {
      count += 1;
      return count === 1 ? first.popup : second.popup;
    });
    try {
      await userEvent.click(canvas.getByRole('button', {
        name: '열기'
      }));
      await userEvent.click(canvas.getByRole('button', {
        name: '언마운트'
      }));
      await expect(first.popup.closed).toBe(true);
      await userEvent.click(canvas.getByRole('button', {
        name: '바디리스 스냅샷 열기'
      }));
      await userEvent.click(canvas.getByRole('button', {
        name: '바디리스 스냅샷 언마운트'
      }));
      await expect(second.popupDoc.getElementById('areo-window-container-static')).not.toBeNull();
    } finally {
      globalThis.open = originalOpen;
    }
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <InitialUrlAndGuardsDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const originalOpen = globalThis.open;
    const urlPopup = createMockPopupWindow();
    urlPopup.popup.location.href = 'https://example.com/init';
    globalThis.open = fn(() => urlPopup.popup);
    try {
      await userEvent.click(canvas.getByRole('button', {
        name: '초기 URL 팝업'
      }));
      await userEvent.click(canvas.getByRole('button', {
        name: '동일 URL 유지'
      }));
      await userEvent.click(canvas.getByRole('button', {
        name: '종료'
      }));
      const throwingPopup = createThrowingPopup();
      globalThis.open = fn(() => throwingPopup);
      await userEvent.click(canvas.getByRole('button', {
        name: '교차 출처 예외 팝업'
      }));
      await userEvent.click(canvas.getByRole('button', {
        name: '예외 제목 변경'
      }));
      await userEvent.click(canvas.getByRole('button', {
        name: '예외 URL 변경'
      }));
      await waitMs(250);
      throwingPopup.close();
      await userEvent.click(canvas.getByRole('button', {
        name: '종료'
      }));
    } finally {
      globalThis.open = originalOpen;
    }
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    onUnload: fn()
  },
  render: args => <PopupEventsDemo onUnload={args.onUnload} />,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const originalOpen = globalThis.open;
    const fullScript = document.createElement('script');
    fullScript.id = 'areo-test-script';
    fullScript.type = 'text/plain';
    fullScript.src = 'data:text/plain,void(0)';
    fullScript.text = '// noop';
    document.head.appendChild(fullScript);
    const bareScript = document.createElement('script');
    document.head.appendChild(bareScript);
    const emptyHrefLink = document.createElement('link');
    emptyHrefLink.rel = 'stylesheet';
    document.head.appendChild(emptyHrefLink);
    const mock1 = createMockPopupWindow();
    const mock2 = createMockPopupWindow();
    let callCount = 0;
    globalThis.open = fn(() => {
      callCount += 1;
      return callCount === 1 ? mock1.popup : mock2.popup;
    });
    const dynamicLink = document.createElement('link');
    dynamicLink.rel = 'stylesheet';
    dynamicLink.href = 'data:text/css,.dynamic-link{opacity:1;}';
    const dynamicStyle = document.createElement('style');
    dynamicStyle.textContent = '.dynamic-style{display:block;}';
    try {
      await userEvent.click(canvas.getByRole('button', {
        name: '이벤트 팝업 열기'
      }));
      document.head.appendChild(dynamicLink);
      await waitMs(50);
      document.head.appendChild(dynamicStyle);
      await waitMs(50);
      mock1.popupDoc.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'Enter'
      }));
      Reflect.set(mock1.popup, '__isPopinClose', true);
      mock1.popupDoc.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'Escape'
      }));
      mock1.popup.close();
      // 이미 해제된 상태에서 중복 close() 호출 -> handleRelease의 if (isReleased) 조기 반환 커버
      mock1.popup.close();
      await expect(args.onUnload).toHaveBeenCalledWith(false, expect.any(Object), 'popin');
      await userEvent.click(canvas.getByRole('button', {
        name: '이벤트 팝업 닫기'
      }));
      await userEvent.click(canvas.getByRole('button', {
        name: '이벤트 팝업 열기'
      }));
      globalThis.dispatchEvent(new Event('beforeunload'));
      await expect(mock2.popup.closed).toBe(true);
      await expect(args.onUnload).toHaveBeenLastCalledWith(true, expect.any(Object), 'user-close');
      await userEvent.click(canvas.getByRole('button', {
        name: '이벤트 팝업 닫기'
      }));
    } finally {
      globalThis.open = originalOpen;
      fullScript.remove();
      bareScript.remove();
      emptyHrefLink.remove();
      dynamicLink.remove();
      dynamicStyle.remove();
    }
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-2 text-xs">Geometry Utils Coverage</div>,
  play: async ({
    canvasElement
  }) => {
    const createMockWin = (overrides: Partial<{
      innerWidth: number;
      innerHeight: number;
      outerWidth: number;
      outerHeight: number;
      availWidth: number;
      screenX: number;
      screenY: number;
      frameElement: Element | null;
    }>): Window => ({
      innerWidth: 1000,
      innerHeight: 800,
      outerWidth: 1016,
      outerHeight: 860,
      screenX: 100,
      screenY: 50,
      screen: {
        availWidth: overrides.availWidth ?? 1920
      },
      frameElement: overrides.frameElement ?? null,
      ...overrides
    }) as unknown as Window;
    await expect(estimateBrowserZoom(createMockWin({
      innerWidth: 0
    }))).toBe(1);
    await expect(estimateBrowserZoom(createMockWin({
      outerWidth: 1920,
      availWidth: 1920,
      innerWidth: 1920
    }))).toBeGreaterThan(0);
    await expect(estimateBrowserZoom(createMockWin({
      outerWidth: 0,
      outerHeight: 0
    }))).toBe(1);
    await expect(estimateBrowserZoom(createMockWin({
      outerWidth: 2200,
      innerWidth: 1000,
      outerHeight: 2200,
      innerHeight: 1000,
      availWidth: 2560
    }))).toBe(2);
    await expect(estimateBrowserZoom(createMockWin({
      outerWidth: 500,
      innerWidth: 1000,
      outerHeight: 500,
      innerHeight: 1000
    }))).toBeLessThan(0.73);
    const [wideBorder] = estimateWindowBorder(createMockWin({
      outerWidth: 1200,
      innerWidth: 1000
    }));
    await expect(wideBorder).toBe(8);
    const detachedDoc = document.implementation.createHTMLDocument('detached-doc');
    const detachedEl = detachedDoc.createElement('div');
    const detachedRect = mapElementToScreenRect(detachedEl);
    await expect(detachedRect.width).toBe(0);
    const fakeWin = createMockWin({
      outerWidth: 2000,
      innerWidth: 1000,
      outerHeight: 2000,
      innerHeight: 1000,
      availWidth: 2560
    });
    const fakeEl = {
      offsetWidth: 0,
      offsetHeight: 0,
      getBoundingClientRect: () => ({
        left: 10,
        top: 20,
        right: 10,
        bottom: 20,
        width: 0,
        height: 0,
        x: 10,
        y: 20,
        toJSON: () => ({})
      }),
      ownerDocument: {
        defaultView: fakeWin
      }
    } as unknown as HTMLElement;
    const mapped = mapElementToScreenRect(fakeEl, {
      left: 5,
      top: 5,
      width: 20,
      height: 10
    });
    await expect(mapped.left).toBeGreaterThan(0);

    // defaultView.frameElement 재귀 호출 분기 (Line 662) 커버
    const framedWin = createMockWin({
      frameElement: canvasElement
    });
    const framedChildEl = {
      offsetWidth: 100,
      offsetHeight: 50,
      getBoundingClientRect: () => ({
        left: 12,
        top: 16,
        right: 112,
        bottom: 66,
        width: 100,
        height: 50,
        x: 12,
        y: 16,
        toJSON: () => ({})
      }),
      ownerDocument: {
        defaultView: framedWin
      }
    } as unknown as HTMLElement;
    const framedRect = mapElementToScreenRect(framedChildEl);
    await expect(framedRect.width).toBeGreaterThan(0);
    const ssrHtml = renderToString(<NewWindow />);
    await expect(ssrHtml).toBe('');
    const originalDpr = Object.getOwnPropertyDescriptor(globalThis, 'devicePixelRatio');
    try {
      Object.defineProperty(globalThis, 'devicePixelRatio', {
        configurable: true,
        get: () => 1
      });
      const uaCases: ReadonlyArray<readonly [string, [number, number, number]]> = [['Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:120.0) Gecko/20100101 Firefox/120.0', [68, 8, 8]], ['Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0', [62, 8, 8]], ['Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15', [22, 0, 0]], ['Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:120.0) Gecko/20100101 Firefox/120.0', [59, 0, 0]], ['Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', [51, 0, 0]], ['Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', [60, 8, 8]]];
      const actualBorders = uaCases.map(([ua]) => getWindowBorder(ua));
      const expectedBorders = uaCases.map(([, expectedBorder]) => expectedBorder);
      await expect(actualBorders).toEqual(expectedBorders);
      Object.defineProperty(globalThis, 'devicePixelRatio', {
        configurable: true,
        get: () => 2
      });
      await expect(getWindowBorder('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36')).toEqual([58, 7, 7]);
    } finally {
      if (originalDpr) {
        Object.defineProperty(globalThis, 'devicePixelRatio', originalDpr);
      }
    }
  }
}`,...F.parameters?.docs?.source}}}})))()}L();export{A as BlockedAndStaticSnapshot,M as CloseWhileOpenOnUnmount,k as FullLifecycle,N as InitialUrlAndCrossOriginGuards,P as PopupEventsAndDynamicAssets,j as StaticSnapshotOnUnmount,F as WindowGeometryUtils,I as __namedExportsOrder,O as default};