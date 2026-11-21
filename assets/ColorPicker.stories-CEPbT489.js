import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-CA5FfF6H.js";import{n as r,t as i}from"./Button-BVM2y2dE.js";import{n as a,t as o}from"./TextField-ColI3WUc.js";import{n as s,t as c}from"./ColorPicker-0zR6M145.js";function l(e){let[t,n]=(0,h.useState)(e.color??{r:255,g:0,b:0,a:1});return(0,g.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,g.jsx)(c,{...e,color:t,onChangeColor:t=>{n(t),e.onChangeColor?.(t)}}),(0,g.jsxs)(`span`,{className:`font-mono text-xs text-neutral-600`,children:[`rgba(`,t.r,`, `,t.g,`, `,t.b,`, `,t.a.toFixed(2),`)`]})]})}function u(){let[e,t]=(0,h.useState)({r:239,g:68,b:68,a:1});return(0,g.jsxs)(`div`,{className:`flex flex-col gap-6 p-6`,children:[(0,g.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,g.jsx)(`span`,{className:`text-2xs font-semibold text-neutral-500`,children:`Small (sm - 21px)`}),(0,g.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,g.jsx)(c,{size:`sm`,color:e,onChangeColor:t,side:`top`}),(0,g.jsx)(o,{size:`sm`,defaultValue:`Small 텍스트`,className:`w-48`})]})]}),(0,g.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,g.jsx)(`span`,{className:`text-2xs font-semibold text-neutral-500`,children:`Medium (md - 27px)`}),(0,g.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,g.jsx)(c,{size:`md`,color:e,onChangeColor:t,side:`top`}),(0,g.jsx)(o,{size:`md`,defaultValue:`Medium 텍스트`,className:`w-48`})]})]}),(0,g.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,g.jsx)(`span`,{className:`text-2xs font-semibold text-neutral-500`,children:`Large (lg - 32px)`}),(0,g.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,g.jsx)(c,{size:`lg`,color:e,onChangeColor:t,side:`top`}),(0,g.jsx)(o,{size:`lg`,defaultValue:`Large 텍스트`,className:`w-48`})]})]})]})}function d(){let[e,t]=(0,h.useState)({r:99,g:102,b:241,a:1}),[n,r]=(0,h.useState)({r:236,g:72,b:153,a:1});return(0,g.jsxs)(`div`,{className:`flex items-center gap-10 p-6`,children:[(0,g.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,g.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`텍스트 입력 활성화 (기본값)`}),(0,g.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,g.jsx)(c,{disableInput:!1,color:e,onChangeColor:t}),(0,g.jsx)(`span`,{className:`text-2xs text-neutral-500`,children:`하단에 HEX, RGB 입력창 표시`})]})]}),(0,g.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,g.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`텍스트 입력 비활성화 (disableInput)`}),(0,g.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,g.jsx)(c,{disableInput:!0,color:n,onChangeColor:r}),(0,g.jsx)(`span`,{className:`text-2xs text-neutral-500`,children:`팔레트 및 슬라이더만 표시`})]})]})]})}function f(){let[e,t]=(0,h.useState)({r:16,g:185,b:129,a:.5}),[n,r]=(0,h.useState)({r:16,g:185,b:129,a:.4});return(0,g.jsxs)(`div`,{className:`flex items-center gap-10 p-6`,children:[(0,g.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,g.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`Alpha 포함 (투명도 조절)`}),(0,g.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,g.jsx)(c,{color:e,onChangeColor:t}),(0,g.jsxs)(`span`,{className:`font-mono text-xs text-neutral-600`,children:[`a: `,e.a.toFixed(2)]})]})]}),(0,g.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,g.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`Alpha 비활성화 (단색 전용)`}),(0,g.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,g.jsx)(c,{"aria-label":`단색 선택기`,disableAlpha:!0,color:n,onChangeColor:r}),(0,g.jsx)(`span`,{className:`font-mono text-xs text-neutral-600`,children:`Solid RGB`})]})]})]})}function p(){let[e,t]=(0,h.useState)(!1);return(0,g.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,g.jsx)(c,{"aria-label":`동적 잠금 색상`,readOnly:e,defaultColor:{r:255,g:0,b:0,a:1}}),(0,g.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),children:`잠금 전환`})]})}function m(){let[e,t]=(0,h.useState)({r:30,g:41,b:59,a:1}),[n,r]=(0,h.useState)({r:59,g:130,b:246,a:.35});return(0,g.jsxs)(`div`,{className:`flex w-84 flex-col gap-4 border border-secondary-border bg-white p-4`,children:[(0,g.jsxs)(`div`,{className:`border-b border-secondary-border pb-2`,children:[(0,g.jsx)(`h4`,{className:`text-sm font-semibold text-secondary-foreground`,children:`벡터 심볼 스타일`}),(0,g.jsx)(`p`,{className:`text-footer-muted text-2xs`,children:`피처의 외곽선 및 채우기 색상을 지정합니다.`})]}),(0,g.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,g.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,g.jsx)(`span`,{className:`text-xs text-neutral-700`,children:`외곽선 (Stroke)`}),(0,g.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,g.jsx)(c,{size:`sm`,color:e,onChangeColor:t,side:`left`}),(0,g.jsx)(o,{size:`sm`,className:`w-24 font-mono text-2xs`,value:`#${e.r.toString(16).padStart(2,`0`)}${e.g.toString(16).padStart(2,`0`)}${e.b.toString(16).padStart(2,`0`)}`,readOnly:!0})]})]}),(0,g.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,g.jsx)(`span`,{className:`text-xs text-neutral-700`,children:`채우기 (Fill)`}),(0,g.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,g.jsx)(c,{size:`sm`,color:n,onChangeColor:r,side:`left`}),(0,g.jsxs)(`span`,{className:`w-24 text-right font-mono text-xs text-neutral-600`,children:[(n.a*100).toFixed(0),`%`]})]})]})]}),(0,g.jsxs)(`div`,{className:`flex justify-end gap-1.5 border-t border-secondary-border pt-2`,children:[(0,g.jsx)(i,{size:`sm`,variant:`outline-secondary`,children:`초기화`}),(0,g.jsx)(i,{size:`sm`,variant:`primary`,children:`적용`})]})]})}var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{h=t(),r(),s(),a(),g=n(),{expect:_,fireEvent:v,fn:y,screen:b,userEvent:x,within:S}=__STORYBOOK_MODULE_TEST__,C={title:`Components/ColorPicker`,component:c,args:{onChangeColor:y(),onOpenChange:y()},parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`],description:`색상 선택기 스와치 버튼 크기 (sm: 21px, md: 27px, lg: 32px)`},color:{control:!1,description:`현재 선택된 RGBA 색상 객체 ({ r, g, b, a })`},defaultColor:{control:!1,description:`초기 RGBA 색상 객체 ({ r, g, b, a })`},disableAlpha:{control:`boolean`,description:`알파(투명도) 슬라이더 비활성화 여부`},disableInput:{control:`boolean`,description:`HEX / RGBA 텍스트 직접 입력 영역 비활성화 여부`},disabled:{control:`boolean`,description:`비활성화 여부`},side:{control:`select`,options:[`top`,`bottom`,`left`,`right`],description:`팝오버가 열리는 방향`},align:{control:`select`,options:[`start`,`center`,`end`],description:`팝오버 정렬 기준`},onChangeColor:{control:!1},onOpenChange:{control:!1}}},w={args:{size:`md`,color:{r:255,g:0,b:0,a:1},disableAlpha:!1,disableInput:!1,disabled:!1,side:`bottom`,align:`start`},render:e=>(0,g.jsx)(l,{...e}),play:async({canvasElement:e,args:t})=>{let n=S(e),r=globalThis,i=r.EyeDropper,a=`success`;r.EyeDropper=class{open(){return new Promise((e,t)=>{globalThis.setTimeout(()=>{if(a===`abort`){t(new DOMException(`Aborted`,`AbortError`));return}if(a===`error`){t(Error(`Hardware failure`));return}e({sRGBHex:`#00ff00`})},0)})}};try{let e=n.getByRole(`button`,{name:/색상 선택기/});await x.click(e);let r=document.querySelector(`.w-color-swatch [title="#0070FFFF"]`);r&&(await x.click(r),await _(t.onChangeColor).toHaveBeenCalled());let i=document.querySelector(`.w-color-alpha`);if(i){let e=i.getBoundingClientRect();await v.mouseDown(i,{clientX:e.left+e.width*.5,clientY:e.top+4}),await v.mouseUp(i)}let o=await b.findByRole(`button`,{name:`더보기`});await x.click(o);let s=await b.findByRole(`button`,{name:`화면에서 색상 추출`});a=`success`,await x.click(s),await new Promise(e=>setTimeout(e,20)),a=`abort`,await x.click(s),await new Promise(e=>setTimeout(e,20)),a=`error`,await x.click(s),await new Promise(e=>setTimeout(e,20));let c=document.querySelector(`.w-color-sketch input`);c&&(await x.clear(c),await x.type(c,`123456`));let l=await b.findByRole(`button`,{name:`뒤로`});await x.click(l),await x.keyboard(`{Escape}`)}finally{r.EyeDropper=i}}},T={render:()=>(0,g.jsx)(u,{})},E={render:()=>(0,g.jsx)(d,{})},D={render:()=>(0,g.jsx)(f,{}),play:async({canvasElement:e})=>{let t=S(e),n=globalThis,r=n.EyeDropper;n.EyeDropper=class{open(){return Promise.resolve({sRGBHex:`#10b981`})}};try{let e=t.getByRole(`button`,{name:`단색 선택기`});await x.click(e);let n=await b.findByRole(`button`,{name:`더보기`});await x.click(n),await x.keyboard(`{Escape}`)}finally{n.EyeDropper=r}}},O={render:()=>(0,g.jsxs)(`div`,{className:`flex items-center gap-6 p-6`,children:[(0,g.jsx)(c,{disabled:!0,color:{r:107,g:114,b:128,a:1}}),(0,g.jsx)(c,{readOnly:!0,color:{r:59,g:130,b:246,a:1}}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`span`,{id:`custom-cp-label`,className:`mr-2 text-xs`,children:`커스텀 라벨`}),(0,g.jsx)(c,{"aria-labelledby":`custom-cp-label`,defaultColor:{r:255,g:0,b:0,a:1}})]}),(0,g.jsx)(p,{})]}),play:async({canvasElement:e})=>{let t=S(e),n=t.getByRole(`button`,{name:/읽기 전용/});await v.pointerDown(n),await x.click(n),await v.keyDown(n,{key:`Enter`}),await v.keyDown(n,{key:` `}),await v.keyDown(n,{key:`Tab`});let r=t.getByRole(`button`,{name:`커스텀 라벨`});await x.click(r);let i=document.querySelector(`.w-color-swatch [title="#0070FFFF"]`);i&&await x.click(i),await x.keyboard(`{Escape}`);let a=globalThis,o=a.EyeDropper;a.EyeDropper=class{open(){return Promise.resolve({sRGBHex:`#ffffff`})}};try{let e=t.getByRole(`button`,{name:`동적 잠금 색상`});await x.click(e);let n=await b.findByRole(`button`,{name:`더보기`});await x.click(n);let r=await b.findByRole(`button`,{name:`화면에서 색상 추출`}),i=t.getByRole(`button`,{name:`잠금 전환`});await x.click(i),await v.click(r)}finally{a.EyeDropper=o}}},k={render:()=>(0,g.jsx)(m,{})},A=[`Default`,`Sizes`,`TextInputToggle`,`AlphaChannel`,`DisabledReadOnlyAndUncontrolled`,`LayerStyleForm`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    color: {
      r: 255,
      g: 0,
      b: 0,
      a: 1
    },
    disableAlpha: false,
    disableInput: false,
    disabled: false,
    side: 'bottom',
    align: 'start'
  },
  render: args => <DefaultColorPickerDemo {...args} />,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const targetGlobal = globalThis as unknown as {
      EyeDropper?: new () => {
        open: () => Promise<{
          sRGBHex: string;
        }>;
      };
    };
    const originalEyeDropper = targetGlobal.EyeDropper;
    let mode: 'success' | 'abort' | 'error' = 'success';
    targetGlobal.EyeDropper = class MockEyeDropper {
      open(): Promise<{
        sRGBHex: string;
      }> {
        return new Promise((resolve, reject) => {
          globalThis.setTimeout(() => {
            if (mode === 'abort') {
              reject(new DOMException('Aborted', 'AbortError'));
              return;
            }
            if (mode === 'error') {
              reject(new Error('Hardware failure'));
              return;
            }
            resolve({
              sRGBHex: '#00ff00'
            });
          }, 0);
        });
      }
    };
    try {
      // 1) 트리거 버튼 클릭 -> 팝오버 오픈 (#FF0000FF 체크 마크 Point 렌더링)
      const trigger = canvas.getByRole('button', {
        name: /색상 선택기/
      });
      await userEvent.click(trigger);

      // 2) Swatch 팔레트 항목 클릭 & Alpha 바 클릭
      const swatchItem = document.querySelector<HTMLElement>('.w-color-swatch [title="#0070FFFF"]');
      if (swatchItem) {
        await userEvent.click(swatchItem);
        await expect(args.onChangeColor).toHaveBeenCalled();
      }
      const alphaBar = document.querySelector<HTMLElement>('.w-color-alpha');
      if (alphaBar) {
        const rect = alphaBar.getBoundingClientRect();
        await fireEvent.mouseDown(alphaBar, {
          clientX: rect.left + rect.width * 0.5,
          clientY: rect.top + 4
        });
        await fireEvent.mouseUp(alphaBar);
      }

      // 3) '더보기' 버튼 클릭 -> Sketch 뷰 전환 + EyeDropper(성공/취소/에러) + Sketch 입력 변경
      const moreBtn = await screen.findByRole('button', {
        name: '더보기'
      });
      await userEvent.click(moreBtn);
      const eyeDropperBtn = await screen.findByRole('button', {
        name: '화면에서 색상 추출'
      });
      mode = 'success';
      await userEvent.click(eyeDropperBtn);
      await new Promise(resolve => setTimeout(resolve, 20));
      mode = 'abort';
      await userEvent.click(eyeDropperBtn);
      await new Promise(resolve => setTimeout(resolve, 20));
      mode = 'error';
      await userEvent.click(eyeDropperBtn);
      await new Promise(resolve => setTimeout(resolve, 20));
      const hexInput = document.querySelector<HTMLInputElement>('.w-color-sketch input');
      if (hexInput) {
        await userEvent.clear(hexInput);
        await userEvent.type(hexInput, '123456');
      }

      // 4) '뒤로' 클릭 후 Escape 닫기 (onOpenChangeComplete -> setDetail(false) 커버)
      const backBtn = await screen.findByRole('button', {
        name: '뒤로'
      });
      await userEvent.click(backBtn);
      await userEvent.keyboard('{Escape}');
    } finally {
      targetGlobal.EyeDropper = originalEyeDropper;
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <SizesDemo />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <TextInputToggleDemo />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <AlphaChannelDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const targetGlobal = globalThis as unknown as {
      EyeDropper?: new () => {
        open: () => Promise<{
          sRGBHex: string;
        }>;
      };
    };
    const originalEyeDropper = targetGlobal.EyeDropper;
    targetGlobal.EyeDropper = class MockEyeDropper {
      open(): Promise<{
        sRGBHex: string;
      }> {
        return Promise.resolve({
          sRGBHex: '#10b981'
        });
      }
    };
    try {
      const solidTrigger = canvas.getByRole('button', {
        name: '단색 선택기'
      });
      await userEvent.click(solidTrigger);
      const moreBtn = await screen.findByRole('button', {
        name: '더보기'
      });
      await userEvent.click(moreBtn);
      await userEvent.keyboard('{Escape}');
    } finally {
      targetGlobal.EyeDropper = originalEyeDropper;
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6 p-6">
      <ColorPicker disabled color={{
      r: 107,
      g: 114,
      b: 128,
      a: 1
    }} />
      <ColorPicker readOnly color={{
      r: 59,
      g: 130,
      b: 246,
      a: 1
    }} />
      <div>
        <span id="custom-cp-label" className="mr-2 text-xs">
          커스텀 라벨
        </span>
        <ColorPicker aria-labelledby="custom-cp-label" defaultColor={{
        r: 255,
        g: 0,
        b: 0,
        a: 1
      }} />
      </div>
      <DynamicLockDemo />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 1) ReadOnly 버튼 클릭, 포인터다운, Enter/Space/Tab 키 분기 검증
    const readOnlyTrigger = canvas.getByRole('button', {
      name: /읽기 전용/
    });
    await fireEvent.pointerDown(readOnlyTrigger);
    await userEvent.click(readOnlyTrigger);
    await fireEvent.keyDown(readOnlyTrigger, {
      key: 'Enter'
    });
    await fireEvent.keyDown(readOnlyTrigger, {
      key: ' '
    });
    await fireEvent.keyDown(readOnlyTrigger, {
      key: 'Tab'
    });

    // 2) 비제어(Uncontrolled) + aria-labelledby 트리거 클릭 -> 내부 색상 변경
    const uncontrolledTrigger = canvas.getByRole('button', {
      name: '커스텀 라벨'
    });
    await userEvent.click(uncontrolledTrigger);
    const swatchItem = document.querySelector<HTMLElement>('.w-color-swatch [title="#0070FFFF"]');
    if (swatchItem) {
      await userEvent.click(swatchItem);
    }
    await userEvent.keyboard('{Escape}');

    // 3) 팝오버를 연 상태에서 동적 readOnly 전환 -> !isInteractive 방어 분기(Lines 373, 385, 401) 커버
    const targetGlobal = globalThis as unknown as {
      EyeDropper?: new () => {
        open: () => Promise<{
          sRGBHex: string;
        }>;
      };
    };
    const originalEyeDropper = targetGlobal.EyeDropper;
    targetGlobal.EyeDropper = class MockEyeDropper {
      open(): Promise<{
        sRGBHex: string;
      }> {
        return Promise.resolve({
          sRGBHex: '#ffffff'
        });
      }
    };
    try {
      const dynamicTrigger = canvas.getByRole('button', {
        name: '동적 잠금 색상'
      });
      await userEvent.click(dynamicTrigger);
      const moreBtn = await screen.findByRole('button', {
        name: '더보기'
      });
      await userEvent.click(moreBtn);
      const eyeDropperBtn = await screen.findByRole('button', {
        name: '화면에서 색상 추출'
      });
      const toggleLockBtn = canvas.getByRole('button', {
        name: '잠금 전환'
      });

      // React 내부 핸들러를 동적 잠금 직전/직후 호출
      await userEvent.click(toggleLockBtn);
      await fireEvent.click(eyeDropperBtn);
    } finally {
      targetGlobal.EyeDropper = originalEyeDropper;
    }
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <LayerStyleFormDemo />
}`,...k.parameters?.docs?.source}}}})))()}j();export{D as AlphaChannel,w as Default,O as DisabledReadOnlyAndUncontrolled,k as LayerStyleForm,T as Sizes,E as TextInputToggle,A as __namedExportsOrder,C as default};