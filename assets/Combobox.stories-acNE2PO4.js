import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-CA5FfF6H.js";import{n as r,t as i}from"./Combobox-C1H7YcAo.js";function a(e){let[t,n]=(0,u.useState)(`EPSG:5179`);return(0,d.jsxs)(`div`,{className:`flex w-96 flex-col gap-2`,children:[(0,d.jsx)(i,{...e,value:t,onValueChange:t=>{e.onValueChange?.(t),n(t)}}),(0,d.jsxs)(`div`,{className:`text-xs text-muted-foreground`,children:[`선택된 Value:`,` `,(0,d.jsx)(`span`,{className:`text-foreground font-mono font-semibold`,children:t??`null`})]})]})}function o(e){let[t,n]=(0,u.useState)(`EPSG:5179`);return(0,d.jsxs)(`div`,{className:`flex w-96 flex-col gap-2`,children:[(0,d.jsx)(i,{...e,labelOnly:!0,value:t,onValueChange:t=>{e.onValueChange?.(t),n(t)}}),(0,d.jsxs)(`div`,{className:`text-xs text-muted-foreground`,children:[`선택된 Value:`,` `,(0,d.jsx)(`span`,{className:`text-foreground font-mono font-semibold`,children:t??`null`})]})]})}function s(e){let[t,n]=(0,u.useState)(`EPSG:4326`);return(0,d.jsxs)(`div`,{className:`flex w-96 flex-col gap-2`,children:[(0,d.jsx)(i,{...e,valueOnly:!0,value:t,onValueChange:t=>{e.onValueChange?.(t),n(t)}}),(0,d.jsxs)(`div`,{className:`text-xs text-muted-foreground`,children:[`선택된 Value:`,` `,(0,d.jsx)(`span`,{className:`text-foreground font-mono font-semibold`,children:t??`null`})]})]})}function c(e){let[t,n]=(0,u.useState)(`EPSG:5179`),[r,a]=(0,u.useState)(`EPSG:4326`),[o,s]=(0,u.useState)(`EPSG:3857`);return(0,d.jsxs)(`div`,{className:`flex w-80 flex-col gap-4`,children:[(0,d.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,d.jsx)(`span`,{className:`text-xs font-semibold text-muted-foreground`,children:`Size: sm (21px)`}),(0,d.jsx)(i,{...e,size:`sm`,value:t,onValueChange:n})]}),(0,d.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,d.jsx)(`span`,{className:`text-xs font-semibold text-muted-foreground`,children:`Size: md (27px)`}),(0,d.jsx)(i,{...e,size:`md`,value:r,onValueChange:a})]}),(0,d.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,d.jsx)(`span`,{className:`text-xs font-semibold text-muted-foreground`,children:`Size: lg (32px)`}),(0,d.jsx)(i,{...e,size:`lg`,value:o,onValueChange:s})]})]})}function l(e){let[t,n]=(0,u.useState)(`EPSG:5179`);return(0,d.jsx)(`div`,{className:`flex w-96 flex-col gap-2`,children:(0,d.jsx)(i,{...e,value:t,onValueChange:t=>{e.onValueChange?.(t),n(t)},renderItem:e=>(0,d.jsxs)(`div`,{className:`flex w-full items-center justify-between py-0.5`,children:[(0,d.jsx)(`span`,{className:`truncate font-medium`,children:e.label}),(0,d.jsx)(`span`,{className:`rounded bg-primary/10 px-1 py-0.5 font-mono text-[10px] text-primary`,children:e.value})]})})})}var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{u=t(),r(),d=n(),{expect:f,fn:p,screen:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Components/Combobox`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{items:[{value:`EPSG:5179`,label:`Korea 2000 / Central Belt 2010`},{value:`EPSG:4326`,label:`WGS 84 (GPS 위경도)`},{value:`EPSG:3857`,label:`WGS 84 / Pseudo-Mercator (웹 지도)`},{value:`EPSG:5181`,label:`Korea 2000 / Central Belt (Kakao)`},{value:`EPSG:5186`,label:`Korea 2000 / East Belt (동부원점)`},{value:`EPSG:5174`,label:`Bessel 1841 / Korea Central Belt (구 지적도)`},{value:`EPSG:900913`,label:`Google Mercator (레거시)`,readonly:!0},{value:`EPSG:0000`,label:`숨겨진 좌표계`,visible:!1}],placeholder:`선택 또는 입력...`,size:`md`,variant:`default`,labelOnly:!1,valueOnly:!1,autoHighlight:!0,disabled:!1,readOnly:!1,emptyText:`항목이 없습니다`,onValueChange:p(),onEnterKeyDown:p()},argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`],description:`인풋 높이 및 폰트 규격`},variant:{control:`radio`,options:[`default`,`ghost`],description:`배경 및 테두리 스타일 변형`},labelOnly:{control:`boolean`,description:`드롭다운 리스트에 라벨만 단독 표기할지 여부`},valueOnly:{control:`boolean`,description:`플레이스홀더 및 리스트에 코드(value)만 단독 표기할지 여부`},autoHighlight:{control:`boolean`,description:`검색 시 일치하는 첫 번째 항목 자동 포커스 여부`},disabled:{control:`boolean`,description:`비활성화 여부`},readOnly:{control:`boolean`,description:`읽기 전용 여부 (팝업 차단 및 텍스트 드래그 복사 허용)`},placeholder:{control:`text`,description:`선택된 값이 없을 때 노출되는 기본 플레이스홀더`},emptyText:{control:`text`,description:`일치하는 검색 결과가 없을 때 표시할 문구`}}},v={render:e=>(0,d.jsx)(a,{...e}),play:async({canvasElement:e,args:t})=>{let n=g(e),r=n.getByRole(`combobox`);r.focus(),await h.keyboard(`{Enter}`),await f(t.onEnterKeyDown).toHaveBeenCalledTimes(1),await h.type(r,`4326`);let i=await m.findByRole(`option`,{name:/WGS 84 \(GPS 위경도\)/});await h.click(i),await f(t.onValueChange).toHaveBeenCalledWith(`EPSG:4326`),await f(n.getByText(`EPSG:4326`)).toBeInTheDocument();let a=n.getByRole(`button`,{name:`옵션 목록 열기`});await h.click(a),await h.type(r,`East`),await h.keyboard(`{Escape}`)}},y={render:e=>(0,d.jsx)(o,{...e}),args:{labelOnly:!0},play:async({canvasElement:e})=>{let t=g(e).getByRole(`button`,{name:`옵션 목록 열기`});await h.click(t);let n=await m.findByRole(`option`,{name:`Korea 2000 / East Belt (동부원점)`});await h.click(n)}},b={render:e=>(0,d.jsx)(s,{...e}),args:{valueOnly:!0},play:async({canvasElement:e})=>{let t=g(e).getByRole(`button`,{name:`옵션 목록 열기`});await h.click(t);let n=await m.findByRole(`option`,{name:`EPSG:3857`});await h.click(n)}},x={render:e=>(0,d.jsx)(c,{...e})},S={render:e=>(0,d.jsx)(l,{...e}),play:async({canvasElement:e})=>{let t=g(e).getByRole(`button`,{name:`옵션 목록 열기`});await h.click(t);let n=await m.findByRole(`option`,{name:/Bessel 1841/});await h.click(n)}},C={render:e=>(0,d.jsx)(`div`,{className:`w-80`,children:(0,d.jsx)(i,{...e})}),play:async({canvasElement:e})=>{let t=g(e),n=t.getByRole(`button`,{name:`옵션 목록 열기`});await h.click(n);let r=await m.findByRole(`option`,{name:/Kakao/});await h.click(r),await f(t.getByPlaceholderText(`Korea 2000 / Central Belt (Kakao)`)).toBeInTheDocument()}},w={render:e=>(0,d.jsxs)(`div`,{className:`flex w-80 flex-col gap-4`,children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`span`,{className:`mb-1 block text-xs font-semibold text-muted-foreground`,children:`Disabled`}),(0,d.jsx)(i,{...e,disabled:!0,defaultValue:`EPSG:5179`})]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`span`,{className:`mb-1 block text-xs font-semibold text-muted-foreground`,children:`ReadOnly (텍스트 마우스 드래그 선택 가능)`}),(0,d.jsx)(i,{...e,readOnly:!0,defaultValue:`EPSG:5179`})]})]})},T=[`Default`,`LabelOnly`,`ValueOnly`,`Sizes`,`CustomItemRendering`,`Uncontrolled`,`DisabledAndReadOnly`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <DefaultComboboxDemo {...args} />,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');

    // 1) 팝업이 닫힌 상태에서 Enter 입력 -> handleKeyDown -> onEnterKeyDown 호출
    input.focus();
    await userEvent.keyboard('{Enter}');
    await expect(args.onEnterKeyDown).toHaveBeenCalledTimes(1);

    // 2) 검색어 입력 -> handleInputValueChange & filterComboboxItem 실행
    await userEvent.type(input, '4326');
    const option = await screen.findByRole('option', {
      name: /WGS 84 \\(GPS 위경도\\)/
    });

    // 3) 옵션 클릭 -> handleValueChange 실행
    await userEvent.click(option);
    await expect(args.onValueChange).toHaveBeenCalledWith('EPSG:4326');
    await expect(canvas.getByText('EPSG:4326')).toBeInTheDocument();

    // 4) 트리거 클릭 후 Escape로 닫기 -> handleOpenChange(!open) 분기 실행
    const triggerBtn = canvas.getByRole('button', {
      name: '옵션 목록 열기'
    });
    await userEvent.click(triggerBtn);
    await userEvent.type(input, 'East');
    await userEvent.keyboard('{Escape}');
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <LabelOnlyDemo {...args} />,
  args: {
    labelOnly: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const triggerBtn = canvas.getByRole('button', {
      name: '옵션 목록 열기'
    });
    await userEvent.click(triggerBtn);
    const option = await screen.findByRole('option', {
      name: 'Korea 2000 / East Belt (동부원점)'
    });
    await userEvent.click(option);
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <ValueOnlyDemo {...args} />,
  args: {
    valueOnly: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const triggerBtn = canvas.getByRole('button', {
      name: '옵션 목록 열기'
    });
    await userEvent.click(triggerBtn);
    const option = await screen.findByRole('option', {
      name: 'EPSG:3857'
    });
    await userEvent.click(option);
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <SizesDemo {...args} />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <CustomItemRenderingDemo {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const triggerBtn = canvas.getByRole('button', {
      name: '옵션 목록 열기'
    });
    await userEvent.click(triggerBtn);
    const option = await screen.findByRole('option', {
      name: /Bessel 1841/
    });
    await userEvent.click(option);
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <div className="w-80">
      <Combobox {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const triggerBtn = canvas.getByRole('button', {
      name: '옵션 목록 열기'
    });
    await userEvent.click(triggerBtn);
    const option = await screen.findByRole('option', {
      name: /Kakao/
    });
    await userEvent.click(option);
    await expect(canvas.getByPlaceholderText('Korea 2000 / Central Belt (Kakao)')).toBeInTheDocument();
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex w-80 flex-col gap-4">
      <div>
        <span className="mb-1 block text-xs font-semibold text-muted-foreground">
          Disabled
        </span>
        <Combobox {...args} disabled defaultValue="EPSG:5179" />
      </div>
      <div>
        <span className="mb-1 block text-xs font-semibold text-muted-foreground">
          ReadOnly (텍스트 마우스 드래그 선택 가능)
        </span>
        <Combobox {...args} readOnly defaultValue="EPSG:5179" />
      </div>
    </div>
}`,...w.parameters?.docs?.source}}}})))()}E();export{S as CustomItemRendering,v as Default,w as DisabledAndReadOnly,y as LabelOnly,x as Sizes,C as Uncontrolled,b as ValueOnly,T as __namedExportsOrder,_ as default};