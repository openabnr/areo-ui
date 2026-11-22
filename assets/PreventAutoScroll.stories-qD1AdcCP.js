import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-jXlimBCT.js";import{n as r,t as i}from"./Button-CIRmyibl.js";function a(){return(0,o.useEffect)(()=>{let e=0,t=0,n=!1,r=0,i=null,a=()=>{n=!1},o=()=>{e=globalThis.scrollX,t=globalThis.scrollY,n=!0,r=performance.now()},c=()=>{if(n){if(performance.now()-r>s){n=!1;return}i!==null&&globalThis.cancelAnimationFrame(i),i=globalThis.requestAnimationFrame(()=>{i=null,n=!1,globalThis.scrollTo({left:e,top:t,behavior:`instant`})})}};return globalThis.addEventListener(`pointerdown`,o,!0),globalThis.addEventListener(`focus`,c,!0),globalThis.addEventListener(`keydown`,a,!0),globalThis.addEventListener(`wheel`,a,{capture:!0,passive:!0}),()=>{i!==null&&globalThis.cancelAnimationFrame(i),globalThis.removeEventListener(`pointerdown`,o,!0),globalThis.removeEventListener(`focus`,c,!0),globalThis.removeEventListener(`keydown`,a,!0),globalThis.removeEventListener(`wheel`,a,!0)}},[]),null}var o,s;function c(){return(c=e((()=>{o=t(),s=500})))()}function l(){let[e,t]=(0,u.useState)(!0);return(0,d.jsxs)(`div`,{className:`flex flex-col gap-3 border border-secondary-border bg-white p-4 text-xs`,children:[e?(0,d.jsx)(a,{}):null,(0,d.jsx)(`p`,{className:`m-0 text-muted-foreground`,children:`포인터 클릭 직후 발생하는 포커스 이동 시 윈도우 자동 스크롤을 방지합니다.`}),(0,d.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,d.jsx)(i,{type:`button`,size:`sm`,children:`첫 번째 포커스 버튼`}),(0,d.jsx)(i,{type:`button`,size:`sm`,variant:`outline-secondary`,children:`두 번째 포커스 버튼`}),(0,d.jsx)(i,{type:`button`,size:`sm`,variant:`ghost`,onClick:()=>t(e=>!e),children:e?`리스너 해제`:`리스너 등록`})]})]})}var u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{u=t(),r(),c(),d=n(),{expect:f,fireEvent:p,userEvent:m,waitFor:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Components/PreventAutoScroll`,component:a,tags:[`autodocs`],parameters:{layout:`centered`}},v={render:()=>(0,d.jsx)(l,{}),play:async({canvasElement:e})=>{let t=g(e),n=t.getByRole(`button`,{name:`첫 번째 포커스 버튼`}),r=t.getByRole(`button`,{name:`두 번째 포커스 버튼`}),i=t.getByRole(`button`,{name:`리스너 해제`});n.focus(),await f(n).toHaveFocus(),await p.pointerDown(r),r.focus(),n.focus(),await h(()=>f(n).toHaveFocus()),await new Promise(e=>{globalThis.setTimeout(e,20)}),await p.pointerDown(r),await m.keyboard(`{Escape}`),await p.wheel(document),await p.pointerDown(r),await new Promise(e=>{globalThis.setTimeout(e,550)}),r.focus(),await f(r).toHaveFocus(),await p.pointerDown(n),n.focus(),await p.click(i),await f(t.getByRole(`button`,{name:`리스너 등록`})).toBeInTheDocument()}},y=[`Default`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <PreventAutoScrollDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const firstBtn = canvas.getByRole('button', {
      name: '첫 번째 포커스 버튼'
    });
    const secondBtn = canvas.getByRole('button', {
      name: '두 번째 포커스 버튼'
    });
    const toggleBtn = canvas.getByRole('button', {
      name: '리스너 해제'
    });

    // 1. pointerdown 없이 focus 발생 (isPointerPending === false 분기)
    firstBtn.focus();
    await expect(firstBtn).toHaveFocus();

    // 2. pointerdown 후 500ms 이내 다른 두 요소로 연속 focus 이동 -> rAF 예약 및 기존 rafId 취소(Line 34) 커버
    await fireEvent.pointerDown(secondBtn);
    secondBtn.focus();
    firstBtn.focus();
    await waitFor(() => expect(firstBtn).toHaveFocus());
    await new Promise<void>(resolve => {
      globalThis.setTimeout(resolve, 20);
    });

    // 3. keydown 및 wheel 이벤트로 resetPending 분기 실행
    await fireEvent.pointerDown(secondBtn);
    await userEvent.keyboard('{Escape}');
    await fireEvent.wheel(document);

    // 4. pointerdown 후 500ms(POINTER_FOCUS_WINDOW_MS) 초과 후 focus (타임아웃 만료 분기)
    await fireEvent.pointerDown(secondBtn);
    await new Promise<void>(resolve => {
      globalThis.setTimeout(resolve, 550);
    });
    secondBtn.focus();
    await expect(secondBtn).toHaveFocus();

    // 5. rAF 대기 상태에서 언마운트 시 cleanup cancelAnimationFrame(Line 57) 커버
    await fireEvent.pointerDown(firstBtn);
    firstBtn.focus();
    await fireEvent.click(toggleBtn);
    await expect(canvas.getByRole('button', {
      name: '리스너 등록'
    })).toBeInTheDocument();
  }
}`,...v.parameters?.docs?.source}}}})))()}b();export{v as Default,y as __namedExportsOrder,_ as default};