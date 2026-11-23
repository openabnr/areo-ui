import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-Di8_Mevq.js";import{n as r,t as i}from"./Button-DaMgOn2H.js";import{n as a,t as o}from"./TextField-BVv8ctPj.js";import{a as s,c,i as l,n as u,o as d,r as f,s as p,t as m}from"./Popover-CGC0DURP.js";function h(){let e=(0,_.useRef)(null),t=(0,_.useRef)(null),[n,r]=(0,_.useState)(!0);return(0,v.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4`,children:[(0,v.jsxs)(m,{children:[(0,v.jsx)(s,{ref:e,render:(0,v.jsx)(i,{variant:`outline-secondary`,children:`객체 Ref 트리거`})}),(0,v.jsx)(u,{showArrow:!1,container:document.body,children:(0,v.jsx)(l,{children:`객체 Ref 팝오버`})})]}),n&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(m,{children:[(0,v.jsx)(s,{ref:()=>()=>{},render:(0,v.jsx)(i,{variant:`outline-secondary`,children:`콜백 Ref 트리거`})}),(0,v.jsx)(u,{children:(0,v.jsx)(l,{children:`콜백 Ref 팝오버`})})]}),(0,v.jsxs)(m,{children:[(0,v.jsx)(s,{ref:()=>void 0,render:(0,v.jsx)(i,{variant:`outline-secondary`,children:`클린업 없는 콜백 Ref`})}),(0,v.jsx)(u,{children:(0,v.jsx)(l,{children:`단순 콜백 팝오버`})})]}),(0,v.jsxs)(m,{children:[(0,v.jsx)(s,{nativeButton:!1,ref:t,render:(0,v.jsx)(`span`,{className:`cursor-pointer underline`,children:`비버튼`})}),(0,v.jsx)(u,{children:(0,v.jsx)(l,{children:`비버튼 팝오버`})})]})]}),(0,v.jsxs)(p,{children:[(0,v.jsx)(s,{render:(0,v.jsx)(i,{variant:`outline-secondary`,children:`컨텍스트 외부`})}),(0,v.jsx)(u,{children:(0,v.jsx)(l,{children:`외부 컨텍스트 팝오버`})})]}),(0,v.jsx)(i,{size:`sm`,variant:`ghost`,onClick:()=>r(!1),children:`콜백 언마운트`})]})}function g(){let[e,t]=(0,_.useState)(!1),n=(0,_.useRef)(null),r=()=>{n.current&&clearTimeout(n.current),t(!0)},a=()=>{n.current=setTimeout(()=>{t(!1)},150)};return(0,v.jsx)(`div`,{className:`p-12`,children:(0,v.jsx)(`div`,{className:`inline-block`,onMouseEnter:r,onMouseLeave:a,children:(0,v.jsxs)(m,{open:e,onOpenChange:t,children:[(0,v.jsx)(s,{onClick:e=>e.preventDefault(),render:(0,v.jsx)(i,{variant:`outline-secondary`,children:`마우스 올려보기 (Hover)`})}),(0,v.jsxs)(u,{showArrow:!0,side:`top`,align:`center`,onMouseEnter:r,onMouseLeave:a,children:[(0,v.jsx)(l,{children:`호버 팝오버`}),(0,v.jsx)(f,{children:`버튼과 팝오버 본문 위로 마우스가 머무르는 동안 유지됩니다.`})]})]})})})}var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{_=t(),c(),r(),d(),a(),v=n(),{expect:y,fn:b,screen:x,userEvent:S,within:C}=__STORYBOOK_MODULE_TEST__,w={title:`Components/Popover`,component:m,subcomponents:{PopoverTrigger:s,PopoverContent:u,PopoverTitle:l,PopoverDescription:f},args:{onOpenChange:b()},argTypes:{open:{control:`boolean`,description:`팝오버의 열림 상태 (제어 컴포넌트)`},defaultOpen:{control:`boolean`,description:`초기 열림 상태 (비제어 컴포넌트)`,table:{defaultValue:{summary:`false`}}}},parameters:{layout:`centered`},tags:[`autodocs`]},T={args:{defaultOpen:!1},render:e=>(0,v.jsxs)(m,{...e,children:[(0,v.jsx)(s,{render:(0,v.jsx)(i,{variant:`outline-secondary`,children:`팝오버 열기`})}),(0,v.jsxs)(u,{showArrow:!0,side:`bottom`,align:`center`,children:[(0,v.jsx)(l,{children:`알림 설정`}),(0,v.jsx)(f,{children:`프로젝트 관련 알림을 이메일로 수신할지 설정합니다.`})]})]}),play:async({canvasElement:e,args:t})=>{let n=C(e).getByRole(`button`,{name:`팝오버 열기`});await S.click(n),await y(await x.findByText(`알림 설정`)).toBeInTheDocument(),await y(x.getByText(`프로젝트 관련 알림을 이메일로 수신할지 설정합니다.`)).toBeInTheDocument(),await y(t.onOpenChange).toHaveBeenCalled(),await S.keyboard(`{Escape}`)}},E={render:()=>(0,v.jsx)(h,{}),play:async({canvasElement:e})=>{let t=C(e),n=t.getByRole(`button`,{name:`객체 Ref 트리거`});await S.click(n),await y(await x.findByText(`객체 Ref 팝오버`)).toBeInTheDocument(),await S.keyboard(`{Escape}`),await S.click(t.getByRole(`button`,{name:`콜백 언마운트`}))}},D={render:()=>(0,v.jsx)(g,{}),play:async({canvasElement:e})=>{let t=C(e).getByRole(`button`,{name:`마우스 올려보기 (Hover)`});await S.hover(t),await y(await x.findByText(`호버 팝오버`)).toBeInTheDocument(),await S.unhover(t)}},O={render:()=>(0,v.jsx)(`div`,{className:`flex min-h-115 min-w-180 items-center justify-center p-8`,children:(0,v.jsxs)(`div`,{className:`grid grid-cols-3 grid-rows-3 items-center justify-items-center gap-8`,children:[(0,v.jsx)(`div`,{className:`col-start-2 row-start-1`,children:(0,v.jsxs)(m,{children:[(0,v.jsx)(s,{render:(0,v.jsx)(i,{variant:`outline-secondary`,children:`위쪽 (Top)`})}),(0,v.jsxs)(u,{side:`top`,showArrow:!0,children:[(0,v.jsx)(l,{children:`Top 팝오버`}),(0,v.jsx)(f,{children:`위쪽 방향에 표시됩니다.`})]})]})}),(0,v.jsx)(`div`,{className:`col-start-1 row-start-2`,children:(0,v.jsxs)(m,{children:[(0,v.jsx)(s,{render:(0,v.jsx)(i,{variant:`outline-secondary`,children:`왼쪽 (Left)`})}),(0,v.jsxs)(u,{side:`left`,showArrow:!0,children:[(0,v.jsx)(l,{children:`Left 팝오버`}),(0,v.jsx)(f,{children:`왼쪽 방향에 표시됩니다.`})]})]})}),(0,v.jsx)(`div`,{className:`col-start-3 row-start-2`,children:(0,v.jsxs)(m,{children:[(0,v.jsx)(s,{render:(0,v.jsx)(i,{variant:`outline-secondary`,children:`오른쪽 (Right)`})}),(0,v.jsxs)(u,{side:`right`,showArrow:!0,children:[(0,v.jsx)(l,{children:`Right 팝오버`}),(0,v.jsx)(f,{children:`오른쪽 방향에 표시됩니다.`})]})]})}),(0,v.jsx)(`div`,{className:`col-start-2 row-start-3`,children:(0,v.jsxs)(m,{children:[(0,v.jsx)(s,{render:(0,v.jsx)(i,{variant:`outline-secondary`,children:`아래쪽 (Bottom)`})}),(0,v.jsxs)(u,{side:`bottom`,showArrow:!0,children:[(0,v.jsx)(l,{children:`Bottom 팝오버`}),(0,v.jsx)(f,{children:`아래쪽 방향에 표시됩니다.`})]})]})})]})})},k={render:()=>(0,v.jsxs)(`div`,{className:`flex items-center gap-4 p-8`,children:[(0,v.jsxs)(m,{children:[(0,v.jsx)(s,{render:(0,v.jsx)(i,{variant:`outline-secondary`,children:`Start 정렬`})}),(0,v.jsxs)(u,{side:`bottom`,align:`start`,children:[(0,v.jsx)(l,{children:`Start 정렬`}),(0,v.jsx)(f,{children:`트리거의 시작 모서리에 맞춥니다.`})]})]}),(0,v.jsxs)(m,{children:[(0,v.jsx)(s,{render:(0,v.jsx)(i,{variant:`outline-secondary`,children:`Center 정렬`})}),(0,v.jsxs)(u,{side:`bottom`,align:`center`,children:[(0,v.jsx)(l,{children:`Center 정렬`}),(0,v.jsx)(f,{children:`트리거의 중앙에 맞춥니다.`})]})]}),(0,v.jsxs)(m,{children:[(0,v.jsx)(s,{render:(0,v.jsx)(i,{variant:`outline-secondary`,children:`End 정렬`})}),(0,v.jsxs)(u,{side:`bottom`,align:`end`,children:[(0,v.jsx)(l,{children:`End 정렬`}),(0,v.jsx)(f,{children:`트리거의 끝 모서리에 맞춥니다.`})]})]})]})},A={render:()=>(0,v.jsxs)(m,{children:[(0,v.jsx)(s,{render:(0,v.jsx)(i,{variant:`primary`,children:`도면 설정`})}),(0,v.jsxs)(u,{side:`bottom`,align:`start`,className:`w-80 gap-3`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(l,{children:`도면 규격`}),(0,v.jsx)(f,{children:`레이어 뷰포트 너비와 높이를 조정합니다.`})]}),(0,v.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,v.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,v.jsx)(`span`,{className:`w-14 text-2xs text-neutral-600`,children:`너비`}),(0,v.jsx)(o,{defaultValue:`100%`,size:`sm`,className:`grow`})]}),(0,v.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,v.jsx)(`span`,{className:`w-14 text-2xs text-neutral-600`,children:`최대 높이`}),(0,v.jsx)(o,{defaultValue:`300px`,size:`sm`,className:`grow`})]})]}),(0,v.jsxs)(`div`,{className:`flex justify-end gap-1.5 pt-1`,children:[(0,v.jsx)(i,{size:`sm`,variant:`outline-secondary`,children:`취소`}),(0,v.jsx)(i,{size:`sm`,variant:`primary`,children:`저장`})]})]})]})},j=[`Default`,`WithTriggerRef`,`Hover`,`Sides`,`Alignments`,`WithFormContent`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: false
  },
  render: args => <Popover {...args}>
      <PopoverTrigger render={<Button variant="outline-secondary">팝오버 열기</Button>} />
      <PopoverContent showArrow side="bottom" align="center">
        <PopoverTitle>알림 설정</PopoverTitle>
        <PopoverDescription>
          프로젝트 관련 알림을 이메일로 수신할지 설정합니다.
        </PopoverDescription>
      </PopoverContent>
    </Popover>,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const triggerBtn = canvas.getByRole('button', {
      name: '팝오버 열기'
    });
    await userEvent.click(triggerBtn);
    await expect(await screen.findByText('알림 설정')).toBeInTheDocument();
    await expect(screen.getByText('프로젝트 관련 알림을 이메일로 수신할지 설정합니다.')).toBeInTheDocument();
    await expect(args.onOpenChange).toHaveBeenCalled();
    await userEvent.keyboard('{Escape}');
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <TriggerRefDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const objTrigger = canvas.getByRole('button', {
      name: '객체 Ref 트리거'
    });
    await userEvent.click(objTrigger);
    await expect(await screen.findByText('객체 Ref 팝오버')).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    await userEvent.click(canvas.getByRole('button', {
      name: '콜백 언마운트'
    }));
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <HoverPopoverDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const hoverBtn = canvas.getByRole('button', {
      name: '마우스 올려보기 (Hover)'
    });
    await userEvent.hover(hoverBtn);
    await expect(await screen.findByText('호버 팝오버')).toBeInTheDocument();
    await userEvent.unhover(hoverBtn);
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex min-h-115 min-w-180 items-center justify-center p-8">
      <div className="grid grid-cols-3 grid-rows-3 items-center justify-items-center gap-8">
        <div className="col-start-2 row-start-1">
          <Popover>
            <PopoverTrigger render={<Button variant="outline-secondary">위쪽 (Top)</Button>} />
            <PopoverContent side="top" showArrow>
              <PopoverTitle>Top 팝오버</PopoverTitle>
              <PopoverDescription>위쪽 방향에 표시됩니다.</PopoverDescription>
            </PopoverContent>
          </Popover>
        </div>

        <div className="col-start-1 row-start-2">
          <Popover>
            <PopoverTrigger render={<Button variant="outline-secondary">왼쪽 (Left)</Button>} />
            <PopoverContent side="left" showArrow>
              <PopoverTitle>Left 팝오버</PopoverTitle>
              <PopoverDescription>왼쪽 방향에 표시됩니다.</PopoverDescription>
            </PopoverContent>
          </Popover>
        </div>

        <div className="col-start-3 row-start-2">
          <Popover>
            <PopoverTrigger render={<Button variant="outline-secondary">오른쪽 (Right)</Button>} />
            <PopoverContent side="right" showArrow>
              <PopoverTitle>Right 팝오버</PopoverTitle>
              <PopoverDescription>오른쪽 방향에 표시됩니다.</PopoverDescription>
            </PopoverContent>
          </Popover>
        </div>

        <div className="col-start-2 row-start-3">
          <Popover>
            <PopoverTrigger render={<Button variant="outline-secondary">아래쪽 (Bottom)</Button>} />
            <PopoverContent side="bottom" showArrow>
              <PopoverTitle>Bottom 팝오버</PopoverTitle>
              <PopoverDescription>아래쪽 방향에 표시됩니다.</PopoverDescription>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4 p-8">
      <Popover>
        <PopoverTrigger render={<Button variant="outline-secondary">Start 정렬</Button>} />
        <PopoverContent side="bottom" align="start">
          <PopoverTitle>Start 정렬</PopoverTitle>
          <PopoverDescription>
            트리거의 시작 모서리에 맞춥니다.
          </PopoverDescription>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger render={<Button variant="outline-secondary">Center 정렬</Button>} />
        <PopoverContent side="bottom" align="center">
          <PopoverTitle>Center 정렬</PopoverTitle>
          <PopoverDescription>트리거의 중앙에 맞춥니다.</PopoverDescription>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger render={<Button variant="outline-secondary">End 정렬</Button>} />
        <PopoverContent side="bottom" align="end">
          <PopoverTitle>End 정렬</PopoverTitle>
          <PopoverDescription>
            트리거의 끝 모서리에 맞춥니다.
          </PopoverDescription>
        </PopoverContent>
      </Popover>
    </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger render={<Button variant="primary">도면 설정</Button>} />
      <PopoverContent side="bottom" align="start" className="w-80 gap-3">
        <div>
          <PopoverTitle>도면 규격</PopoverTitle>
          <PopoverDescription>
            레이어 뷰포트 너비와 높이를 조정합니다.
          </PopoverDescription>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <span className="w-14 text-2xs text-neutral-600">너비</span>
            <TextField defaultValue="100%" size="sm" className="grow" />
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="w-14 text-2xs text-neutral-600">최대 높이</span>
            <TextField defaultValue="300px" size="sm" className="grow" />
          </div>
        </div>

        <div className="flex justify-end gap-1.5 pt-1">
          <Button size="sm" variant="outline-secondary">
            취소
          </Button>
          <Button size="sm" variant="primary">
            저장
          </Button>
        </div>
      </PopoverContent>
    </Popover>
}`,...A.parameters?.docs?.source}}}})))()}M();export{k as Alignments,T as Default,D as Hover,O as Sides,A as WithFormContent,E as WithTriggerRef,j as __namedExportsOrder,w as default};