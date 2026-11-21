import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-D8PjfN8a.js";import{a as r,i,n as a,o,r as s,s as c,t as l}from"./Select-BfzaM8J-.js";function u(e){let[t,n]=(0,h.useState)(`EPSG:5179`);return(0,g.jsxs)(`div`,{className:`flex w-80 flex-col gap-2`,children:[(0,g.jsx)(o,{...e,value:t,onValueChange:(t,r)=>{e.onValueChange?.(t,r),n(t)}}),(0,g.jsxs)(`div`,{className:`text-xs text-muted-foreground`,children:[`현재 선택된 Value:`,` `,(0,g.jsx)(`span`,{className:`text-foreground font-mono font-semibold`,children:t||`없음`})]})]})}function d(e){let[t,n]=(0,h.useState)(`EPSG:4326`);return(0,g.jsxs)(`div`,{className:`flex w-80 flex-col gap-2`,children:[(0,g.jsx)(o,{...e,value:t,withValue:!1,onValueChange:(t,r)=>{e.onValueChange?.(t,r),n(t)}}),(0,g.jsxs)(`div`,{className:`text-xs text-muted-foreground`,children:[`현재 선택된 Value:`,` `,(0,g.jsx)(`span`,{className:`text-foreground font-mono font-semibold`,children:t||`없음`})]})]})}function f(e){let[t,n]=(0,h.useState)(`EPSG:5179`),[r,i]=(0,h.useState)(`EPSG:4326`),[a,s]=(0,h.useState)(`EPSG:3857`);return(0,g.jsxs)(`div`,{className:`flex w-80 flex-col gap-4`,children:[(0,g.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,g.jsx)(`span`,{className:`text-xs font-semibold text-muted-foreground`,children:`Size: sm (21px)`}),(0,g.jsx)(o,{...e,size:`sm`,value:t,onValueChange:n})]}),(0,g.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,g.jsx)(`span`,{className:`text-xs font-semibold text-muted-foreground`,children:`Size: md (27px)`}),(0,g.jsx)(o,{...e,size:`md`,value:r,onValueChange:i})]}),(0,g.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,g.jsx)(`span`,{className:`text-xs font-semibold text-muted-foreground`,children:`Size: lg (32px)`}),(0,g.jsx)(o,{...e,size:`lg`,value:a,onValueChange:s})]})]})}function p(e){let[t,n]=(0,h.useState)(`EPSG:3857`);return(0,g.jsx)(`div`,{className:`flex w-72 flex-col gap-2 bg-surface-muted p-4`,children:(0,g.jsx)(o,{...e,variant:`ghost`,value:t,onValueChange:(t,r)=>{e.onValueChange?.(t,r),n(t)}})})}function m(){let[e,t]=(0,h.useState)(`point`);return(0,g.jsxs)(`div`,{className:`flex w-72 flex-col gap-2`,children:[(0,g.jsxs)(l,{value:e,onValueChange:e=>t(e),children:[(0,g.jsx)(i,{size:`md`,children:(0,g.jsx)(r,{placeholder:`심볼 형상 선택`})}),(0,g.jsxs)(a,{children:[(0,g.jsx)(s,{value:`point`,label:`포인트 심볼 (Point)`,withValue:!0}),(0,g.jsx)(s,{value:`line`,label:`라인 심볼 (LineString)`,withValue:!0}),(0,g.jsx)(s,{value:`polygon`,label:`폴리곤 심볼 (Polygon)`,withValue:!0}),(0,g.jsx)(s,{value:`raster`,label:`래스터 레이어 (Raster)`,disabled:!0,withValue:!0})]})]}),(0,g.jsxs)(`div`,{className:`text-xs text-muted-foreground`,children:[`선택된 심볼 타입:`,` `,(0,g.jsx)(`span`,{className:`text-foreground font-mono font-semibold`,children:e})]})]})}var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{h=t(),c(),g=n(),{expect:_,fireEvent:v,fn:y,screen:b,userEvent:x,within:S}=__STORYBOOK_MODULE_TEST__,C=[{value:`EPSG:5179`,title:`Korea 2000 / Central Belt 2010`},{value:`EPSG:4326`,title:`WGS 84 (GPS 위경도)`},{value:`EPSG:3857`,title:`WGS 84 / Pseudo-Mercator (웹 지도)`},{value:`EPSG:5181`,title:`Korea 2000 / Central Belt (Kakao)`},{value:`EPSG:5186`,title:`Korea 2000 / East Belt (동부원점)`},{value:`EPSG:5174`,title:`Bessel 1841 / Korea Central Belt`}],w={title:`Components/Select`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],args:{items:C,placeholder:`좌표계를 선택하세요`,size:`md`,variant:`default`,withValue:!0,disabled:!1,readOnly:!1,emptyItem:`선택`,onValueChange:y()},argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`],description:`트리거 버튼 높이 및 폰트 규격`},variant:{control:`radio`,options:[`default`,`ghost`],description:`트리거 테두리 및 배경 스타일 변형`},withValue:{control:`boolean`,description:`드롭다운 옵션 우측에 value 코드를 함께 표기할지 여부`},disabled:{control:`boolean`,description:`비활성화 여부`},readOnly:{control:`boolean`,description:`읽기 전용 여부 (팝업 차단 및 텍스트 드래그 선택 허용)`},placeholder:{control:`text`,description:`선택값이 없을 때 표시할 플레이스홀더`},emptyItem:{control:`text`,description:`아이템 목록이 비어있을 때 트리거에 표시할 문구`}}},T={render:e=>(0,g.jsx)(u,{...e}),play:async({canvasElement:e,args:t})=>{let n=S(e),r=n.getByRole(`combobox`);await x.click(r);let i=await b.findByRole(`option`,{name:/WGS 84 \(GPS 위경도\)/});await x.click(i),await _(t.onValueChange).toHaveBeenCalledWith(`EPSG:4326`,C[1]),await _(n.getByText(`EPSG:4326`)).toBeInTheDocument()}},E={render:e=>(0,g.jsx)(d,{...e}),args:{withValue:!1}},D={render:e=>(0,g.jsx)(f,{...e})},O={render:e=>(0,g.jsx)(p,{...e}),args:{variant:`ghost`}},k={render:e=>(0,g.jsx)(`div`,{className:`flex w-72 flex-col gap-2`,children:(0,g.jsx)(o,{...e,items:[],emptyItem:`선택 가능한 레이어가 없습니다`})}),args:{items:[],emptyItem:`선택 가능한 레이어가 없습니다`}},A={render:e=>(0,g.jsxs)(`div`,{className:`flex w-80 flex-col gap-4`,children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`span`,{className:`mb-1 block text-xs font-semibold text-muted-foreground`,children:`Disabled`}),(0,g.jsx)(o,{...e,disabled:!0,defaultValue:`EPSG:5179`})]}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`span`,{className:`mb-1 block text-xs font-semibold text-muted-foreground`,children:`ReadOnly (텍스트 마우스 드래그 선택 가능)`}),(0,g.jsx)(o,{...e,readOnly:!0,defaultValue:`EPSG:5179`})]})]}),play:async({canvasElement:e})=>{let t=S(e).getAllByRole(`combobox`)[1];await v.pointerDown(t),await x.click(t),t.focus(),await x.keyboard(`{Enter}{ArrowDown}{Escape}`),await _(b.queryByRole(`listbox`)).not.toBeInTheDocument()}},j={args:{defaultValue:`EPSG:5179`},render:e=>(0,g.jsx)(`div`,{className:`w-80`,children:(0,g.jsx)(o,{...e})}),play:async({canvasElement:e})=>{let t=S(e).getByRole(`combobox`);await x.click(t);let n=await b.findByRole(`option`,{name:/East Belt/});await x.click(n),await _(t).toHaveTextContent(`Korea 2000 / East Belt (동부원점)`)}},M={render:()=>(0,g.jsx)(m,{}),play:async({canvasElement:e})=>{let t=S(e).getByRole(`combobox`);await x.click(t);let n=await b.findByRole(`option`,{name:/폴리곤 심볼 \(Polygon\)/});await x.click(n),await _(t).toHaveTextContent(`polygon`)}},N=[`Default`,`WithoutValue`,`Sizes`,`GhostVariant`,`EmptyItems`,`DisabledAndReadOnly`,`Uncontrolled`,`CompoundPattern`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <DefaultStory {...args} />,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox');

    // 1. 트리거 클릭하여 Base UI Select 포털 팝업 열기
    await userEvent.click(trigger);

    // 2. 포털에 렌더링된 옵션 선택 -> SelectContent, SelectItem, handleValueChange 실행
    const targetOption = await screen.findByRole('option', {
      name: /WGS 84 \\(GPS 위경도\\)/
    });
    await userEvent.click(targetOption);

    // 3. 콜백 및 선택 값 갱신 검증
    await expect(args.onValueChange).toHaveBeenCalledWith('EPSG:4326', sampleCRSItems[1]);
    await expect(canvas.getByText('EPSG:4326')).toBeInTheDocument();
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <WithoutValueStory {...args} />,
  args: {
    withValue: false
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <SizesStory {...args} />
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <GhostVariantStory {...args} />,
  args: {
    variant: 'ghost'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex w-72 flex-col gap-2">
      <SimpleSelect {...args} items={[]} emptyItem="선택 가능한 레이어가 없습니다" />
    </div>,
  args: {
    items: [],
    emptyItem: '선택 가능한 레이어가 없습니다'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex w-80 flex-col gap-4">
      <div>
        <span className="mb-1 block text-xs font-semibold text-muted-foreground">
          Disabled
        </span>
        <SimpleSelect {...args} disabled defaultValue="EPSG:5179" />
      </div>
      <div>
        <span className="mb-1 block text-xs font-semibold text-muted-foreground">
          ReadOnly (텍스트 마우스 드래그 선택 가능)
        </span>
        <SimpleSelect {...args} readOnly defaultValue="EPSG:5179" />
      </div>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const triggers = canvas.getAllByRole('combobox');
    const readOnlyTrigger = triggers[1];

    // ReadOnly 트리거에 대한 pointerDown, click, 차단 키(Enter, ArrowDown) 및 허용 키(Tab) 분기 실행
    await fireEvent.pointerDown(readOnlyTrigger);
    await userEvent.click(readOnlyTrigger);
    readOnlyTrigger.focus();
    await userEvent.keyboard('{Enter}{ArrowDown}{Escape}');
    await expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'EPSG:5179'
  },
  render: args => <div className="w-80">
      <SimpleSelect {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox');
    await userEvent.click(trigger);
    const option = await screen.findByRole('option', {
      name: /East Belt/
    });
    await userEvent.click(option);
    await expect(trigger).toHaveTextContent('Korea 2000 / East Belt (동부원점)');
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <CompoundPatternStory />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox');
    await userEvent.click(trigger);
    const polygonOption = await screen.findByRole('option', {
      name: /폴리곤 심볼 \\(Polygon\\)/
    });
    await userEvent.click(polygonOption);
    await expect(trigger).toHaveTextContent('polygon');
  }
}`,...M.parameters?.docs?.source}}}})))()}P();export{M as CompoundPattern,T as Default,A as DisabledAndReadOnly,k as EmptyItems,O as GhostVariant,D as Sizes,j as Uncontrolled,E as WithoutValue,N as __namedExportsOrder,w as default};