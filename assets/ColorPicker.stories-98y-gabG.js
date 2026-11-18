import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-sFfd_MYY.js";import{n as r,t as i}from"./Button-CB0K-Jiw.js";import{n as a,t as o}from"./TextField-DrAZj0qU.js";import{n as s,t as c}from"./ColorPicker-CbNYPkYN.js";function l(e){let[t,n]=(0,m.useState)(e.color??{r:59,g:130,b:246,a:1});return(0,h.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,h.jsx)(c,{...e,color:t,onChangeColor:t=>{n(t),e.onChangeColor?.(t)}}),(0,h.jsxs)(`span`,{className:`font-mono text-xs text-neutral-600`,children:[`rgba(`,t.r,`, `,t.g,`, `,t.b,`, `,t.a.toFixed(2),`)`]})]})}function u(){let[e,t]=(0,m.useState)({r:239,g:68,b:68,a:1});return(0,h.jsxs)(`div`,{className:`flex flex-col gap-6 p-6`,children:[(0,h.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,h.jsx)(`span`,{className:`text-2xs font-semibold text-neutral-500`,children:`Small (sm - 21px)`}),(0,h.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,h.jsx)(c,{size:`sm`,color:e,onChangeColor:t,side:`top`}),(0,h.jsx)(o,{size:`sm`,defaultValue:`Small 텍스트`,className:`w-48`})]})]}),(0,h.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,h.jsx)(`span`,{className:`text-2xs font-semibold text-neutral-500`,children:`Medium (md - 27px)`}),(0,h.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,h.jsx)(c,{size:`md`,color:e,onChangeColor:t,side:`top`}),(0,h.jsx)(o,{size:`md`,defaultValue:`Medium 텍스트`,className:`w-48`})]})]}),(0,h.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,h.jsx)(`span`,{className:`text-2xs font-semibold text-neutral-500`,children:`Large (lg - 32px)`}),(0,h.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,h.jsx)(c,{size:`lg`,color:e,onChangeColor:t,side:`top`}),(0,h.jsx)(o,{size:`lg`,defaultValue:`Large 텍스트`,className:`w-48`})]})]})]})}function d(){let[e,t]=(0,m.useState)({r:99,g:102,b:241,a:1}),[n,r]=(0,m.useState)({r:236,g:72,b:153,a:1});return(0,h.jsxs)(`div`,{className:`flex items-center gap-10 p-6`,children:[(0,h.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,h.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`텍스트 입력 활성화 (기본값)`}),(0,h.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,h.jsx)(c,{disableInput:!1,color:e,onChangeColor:t}),(0,h.jsx)(`span`,{className:`text-2xs text-neutral-500`,children:`하단에 HEX, RGB 입력창 표시`})]})]}),(0,h.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,h.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`텍스트 입력 비활성화 (disableInput)`}),(0,h.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,h.jsx)(c,{disableInput:!0,color:n,onChangeColor:r}),(0,h.jsx)(`span`,{className:`text-2xs text-neutral-500`,children:`팔레트 및 슬라이더만 표시`})]})]})]})}function f(){let[e,t]=(0,m.useState)({r:16,g:185,b:129,a:.5}),[n,r]=(0,m.useState)({r:16,g:185,b:129,a:1});return(0,h.jsxs)(`div`,{className:`flex items-center gap-10 p-6`,children:[(0,h.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,h.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`Alpha 포함 (투명도 조절)`}),(0,h.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,h.jsx)(c,{color:e,onChangeColor:t}),(0,h.jsxs)(`span`,{className:`font-mono text-xs text-neutral-600`,children:[`a: `,e.a.toFixed(2)]})]})]}),(0,h.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,h.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`Alpha 비활성화 (단색 전용)`}),(0,h.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,h.jsx)(c,{disableAlpha:!0,color:n,onChangeColor:r}),(0,h.jsx)(`span`,{className:`font-mono text-xs text-neutral-600`,children:`Solid RGB`})]})]})]})}function p(){let[e,t]=(0,m.useState)({r:30,g:41,b:59,a:1}),[n,r]=(0,m.useState)({r:59,g:130,b:246,a:.35});return(0,h.jsxs)(`div`,{className:`flex w-84 flex-col gap-4 border border-secondary-border bg-white p-4`,children:[(0,h.jsxs)(`div`,{className:`border-b border-secondary-border pb-2`,children:[(0,h.jsx)(`h4`,{className:`text-sm font-semibold text-secondary-foreground`,children:`벡터 심볼 스타일`}),(0,h.jsx)(`p`,{className:`text-footer-muted text-2xs`,children:`피처의 외곽선 및 채우기 색상을 지정합니다.`})]}),(0,h.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,h.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,h.jsx)(`span`,{className:`text-xs text-neutral-700`,children:`외곽선 (Stroke)`}),(0,h.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,h.jsx)(c,{size:`sm`,color:e,onChangeColor:t,side:`left`}),(0,h.jsx)(o,{size:`sm`,className:`w-24 font-mono text-2xs`,value:`#${e.r.toString(16).padStart(2,`0`)}${e.g.toString(16).padStart(2,`0`)}${e.b.toString(16).padStart(2,`0`)}`,readOnly:!0})]})]}),(0,h.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,h.jsx)(`span`,{className:`text-xs text-neutral-700`,children:`채우기 (Fill)`}),(0,h.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,h.jsx)(c,{size:`sm`,color:n,onChangeColor:r,side:`left`}),(0,h.jsxs)(`span`,{className:`w-24 text-right font-mono text-xs text-neutral-600`,children:[(n.a*100).toFixed(0),`%`]})]})]})]}),(0,h.jsxs)(`div`,{className:`flex justify-end gap-1.5 border-t border-secondary-border pt-2`,children:[(0,h.jsx)(i,{size:`sm`,variant:`outline-secondary`,children:`초기화`}),(0,h.jsx)(i,{size:`sm`,variant:`primary`,children:`적용`})]})]})}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{m=t(),r(),s(),a(),h=n(),{expect:g,fireEvent:_,fn:v,screen:y,userEvent:b,within:x}=__STORYBOOK_MODULE_TEST__,S={title:`Components/ColorPicker`,component:c,args:{onChangeColor:v(),onOpenChange:v()},parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`],description:`색상 선택기 스와치 버튼 크기 (sm: 21px, md: 27px, lg: 32px)`},color:{control:!1,description:`현재 선택된 RGBA 색상 객체 ({ r, g, b, a })`},defaultColor:{control:!1,description:`초기 RGBA 색상 객체 ({ r, g, b, a })`},disableAlpha:{control:`boolean`,description:`알파(투명도) 슬라이더 비활성화 여부`},disableInput:{control:`boolean`,description:`HEX / RGBA 텍스트 직접 입력 영역 비활성화 여부`},disabled:{control:`boolean`,description:`비활성화 여부`},side:{control:`select`,options:[`top`,`bottom`,`left`,`right`],description:`팝오버가 열리는 방향`},align:{control:`select`,options:[`start`,`center`,`end`],description:`팝오버 정렬 기준`},onChangeColor:{control:!1},onOpenChange:{control:!1}}},C={args:{size:`md`,color:{r:59,g:130,b:246,a:1},disableAlpha:!1,disableInput:!1,disabled:!1,side:`bottom`,align:`start`},render:e=>(0,h.jsx)(l,{...e}),play:async({canvasElement:e,args:t})=>{let n=x(e),r=globalThis,i=r.EyeDropper,a=`success`;r.EyeDropper=class{open(){return a===`abort`?Promise.reject(new DOMException(`Aborted`,`AbortError`)):a===`error`?Promise.reject(Error(`Hardware failure`)):Promise.resolve({sRGBHex:`#00ff00`})}};try{let e=n.getByRole(`button`,{name:/색상 선택기/});await b.click(e);let r=document.querySelector(`.w-color-swatch [title="#FF0000FF"]`);r&&(await b.click(r),await g(t.onChangeColor).toHaveBeenCalled());let i=document.querySelector(`.w-color-alpha`);if(i){let e=i.getBoundingClientRect();await _.mouseDown(i,{clientX:e.left+e.width*.5,clientY:e.top+4}),await _.mouseUp(i)}let o=await y.findByRole(`button`,{name:`더보기`});await b.click(o);let s=await y.findByRole(`button`,{name:`화면에서 색상 추출`});a=`success`,await b.click(s),a=`abort`,await b.click(s),a=`error`,await b.click(s);let c=document.querySelector(`.w-color-sketch input`);c&&(await b.clear(c),await b.type(c,`123456`));let l=await y.findByRole(`button`,{name:`뒤로`});await b.click(l),await b.keyboard(`{Escape}`)}finally{r.EyeDropper=i}}},w={render:()=>(0,h.jsx)(u,{})},T={render:()=>(0,h.jsx)(d,{})},E={render:()=>(0,h.jsx)(f,{})},D={render:()=>(0,h.jsxs)(`div`,{className:`flex items-center gap-6 p-6`,children:[(0,h.jsx)(c,{disabled:!0,color:{r:107,g:114,b:128,a:1}}),(0,h.jsx)(c,{readOnly:!0,color:{r:59,g:130,b:246,a:1}}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`span`,{id:`custom-cp-label`,className:`mr-2 text-xs`,children:`커스텀 라벨`}),(0,h.jsx)(c,{"aria-labelledby":`custom-cp-label`,defaultColor:{r:255,g:0,b:0,a:1}})]})]}),play:async({canvasElement:e})=>{let t=x(e),n=t.getByRole(`button`,{name:/읽기 전용/});await _.pointerDown(n),await b.click(n),await _.keyDown(n,{key:`Enter`});let r=t.getByRole(`button`,{name:`커스텀 라벨`});await b.click(r);let i=document.querySelector(`.w-color-swatch [title="#0070FFFF"]`);i&&await b.click(i),await b.keyboard(`{Escape}`)}},O={render:()=>(0,h.jsx)(p,{})},k=[`Default`,`Sizes`,`TextInputToggle`,`AlphaChannel`,`DisabledReadOnlyAndUncontrolled`,`LayerStyleForm`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    color: {
      r: 59,
      g: 130,
      b: 246,
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
        if (mode === 'abort') {
          return Promise.reject(new DOMException('Aborted', 'AbortError'));
        }
        if (mode === 'error') {
          return Promise.reject(new Error('Hardware failure'));
        }
        return Promise.resolve({
          sRGBHex: '#00ff00'
        });
      }
    };
    try {
      // 1) 트리거 버튼 클릭 -> 팝오버 오픈
      const trigger = canvas.getByRole('button', {
        name: /색상 선택기/
      });
      await userEvent.click(trigger);

      // 2) Swatch 팔레트 항목 클릭 & Alpha 바 클릭
      const swatchItem = document.querySelector<HTMLElement>('.w-color-swatch [title="#FF0000FF"]');
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
      mode = 'abort';
      await userEvent.click(eyeDropperBtn);
      mode = 'error';
      await userEvent.click(eyeDropperBtn);
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <SizesDemo />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <TextInputToggleDemo />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <AlphaChannelDemo />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 1) ReadOnly 버튼 클릭, 포인터다운, Enter 키 차단 분기 검증
    const readOnlyTrigger = canvas.getByRole('button', {
      name: /읽기 전용/
    });
    await fireEvent.pointerDown(readOnlyTrigger);
    await userEvent.click(readOnlyTrigger);
    await fireEvent.keyDown(readOnlyTrigger, {
      key: 'Enter'
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
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <LayerStyleFormDemo />
}`,...O.parameters?.docs?.source}}}})))()}A();export{E as AlphaChannel,C as Default,D as DisabledReadOnlyAndUncontrolled,O as LayerStyleForm,w as Sizes,T as TextInputToggle,k as __namedExportsOrder,S as default};