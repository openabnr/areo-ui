import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-sFfd_MYY.js";import{n as r,t as i}from"./Button-CB0K-Jiw.js";import{n as a,t as o}from"./TextField-DrAZj0qU.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./Popover-CllXst5m.js";function p(){let e=(0,h.useRef)(null),[t,n]=(0,h.useState)(!0);return(0,g.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,g.jsxs)(f,{children:[(0,g.jsx)(s,{ref:e,render:(0,g.jsx)(i,{variant:`outline-secondary`,children:`객체 Ref 트리거`})}),(0,g.jsx)(l,{showArrow:!1,children:(0,g.jsx)(c,{children:`객체 Ref 팝오버`})})]}),t&&(0,g.jsxs)(f,{children:[(0,g.jsx)(s,{ref:()=>()=>{},render:(0,g.jsx)(i,{variant:`outline-secondary`,children:`콜백 Ref 트리거`})}),(0,g.jsx)(l,{children:(0,g.jsx)(c,{children:`콜백 Ref 팝오버`})})]}),(0,g.jsx)(i,{size:`sm`,variant:`ghost`,onClick:()=>n(!1),children:`콜백 언마운트`})]})}function m(){let[e,t]=(0,h.useState)(!1),n=(0,h.useRef)(null),r=()=>{n.current&&clearTimeout(n.current),t(!0)},a=()=>{n.current=setTimeout(()=>{t(!1)},150)};return(0,g.jsx)(`div`,{className:`p-12`,children:(0,g.jsx)(`div`,{className:`inline-block`,onMouseEnter:r,onMouseLeave:a,children:(0,g.jsxs)(f,{open:e,onOpenChange:t,children:[(0,g.jsx)(s,{onClick:e=>e.preventDefault(),render:(0,g.jsx)(i,{variant:`outline-secondary`,children:`마우스 올려보기 (Hover)`})}),(0,g.jsxs)(l,{showArrow:!0,side:`top`,align:`center`,onMouseEnter:r,onMouseLeave:a,children:[(0,g.jsx)(c,{children:`호버 팝오버`}),(0,g.jsx)(d,{children:`버튼과 팝오버 본문 위로 마우스가 머무르는 동안 유지됩니다.`})]})]})})})}var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{h=t(),r(),u(),a(),g=n(),{expect:_,fn:v,screen:y,userEvent:b,within:x}=__STORYBOOK_MODULE_TEST__,S={title:`Components/Popover`,component:f,subcomponents:{PopoverTrigger:s,PopoverContent:l,PopoverTitle:c,PopoverDescription:d},args:{onOpenChange:v()},argTypes:{open:{control:`boolean`,description:`팝오버의 열림 상태 (제어 컴포넌트)`},defaultOpen:{control:`boolean`,description:`초기 열림 상태 (비제어 컴포넌트)`,table:{defaultValue:{summary:`false`}}}},parameters:{layout:`centered`},tags:[`autodocs`]},C={args:{defaultOpen:!1},render:e=>(0,g.jsxs)(f,{...e,children:[(0,g.jsx)(s,{render:(0,g.jsx)(i,{variant:`outline-secondary`,children:`팝오버 열기`})}),(0,g.jsxs)(l,{showArrow:!0,side:`bottom`,align:`center`,children:[(0,g.jsx)(c,{children:`알림 설정`}),(0,g.jsx)(d,{children:`프로젝트 관련 알림을 이메일로 수신할지 설정합니다.`})]})]}),play:async({canvasElement:e,args:t})=>{let n=x(e).getByRole(`button`,{name:`팝오버 열기`});await b.click(n),await _(await y.findByText(`알림 설정`)).toBeInTheDocument(),await _(y.getByText(`프로젝트 관련 알림을 이메일로 수신할지 설정합니다.`)).toBeInTheDocument(),await _(t.onOpenChange).toHaveBeenCalled(),await b.keyboard(`{Escape}`)}},w={render:()=>(0,g.jsx)(p,{}),play:async({canvasElement:e})=>{let t=x(e),n=t.getByRole(`button`,{name:`객체 Ref 트리거`});await b.click(n),await _(await y.findByText(`객체 Ref 팝오버`)).toBeInTheDocument(),await b.keyboard(`{Escape}`),await b.click(t.getByRole(`button`,{name:`콜백 언마운트`}))}},T={render:()=>(0,g.jsx)(m,{}),play:async({canvasElement:e})=>{let t=x(e).getByRole(`button`,{name:`마우스 올려보기 (Hover)`});await b.hover(t),await _(await y.findByText(`호버 팝오버`)).toBeInTheDocument(),await b.unhover(t)}},E={render:()=>(0,g.jsx)(`div`,{className:`flex min-h-115 min-w-180 items-center justify-center p-8`,children:(0,g.jsxs)(`div`,{className:`grid grid-cols-3 grid-rows-3 items-center justify-items-center gap-8`,children:[(0,g.jsx)(`div`,{className:`col-start-2 row-start-1`,children:(0,g.jsxs)(f,{children:[(0,g.jsx)(s,{render:(0,g.jsx)(i,{variant:`outline-secondary`,children:`위쪽 (Top)`})}),(0,g.jsxs)(l,{side:`top`,showArrow:!0,children:[(0,g.jsx)(c,{children:`Top 팝오버`}),(0,g.jsx)(d,{children:`위쪽 방향에 표시됩니다.`})]})]})}),(0,g.jsx)(`div`,{className:`col-start-1 row-start-2`,children:(0,g.jsxs)(f,{children:[(0,g.jsx)(s,{render:(0,g.jsx)(i,{variant:`outline-secondary`,children:`왼쪽 (Left)`})}),(0,g.jsxs)(l,{side:`left`,showArrow:!0,children:[(0,g.jsx)(c,{children:`Left 팝오버`}),(0,g.jsx)(d,{children:`왼쪽 방향에 표시됩니다.`})]})]})}),(0,g.jsx)(`div`,{className:`col-start-3 row-start-2`,children:(0,g.jsxs)(f,{children:[(0,g.jsx)(s,{render:(0,g.jsx)(i,{variant:`outline-secondary`,children:`오른쪽 (Right)`})}),(0,g.jsxs)(l,{side:`right`,showArrow:!0,children:[(0,g.jsx)(c,{children:`Right 팝오버`}),(0,g.jsx)(d,{children:`오른쪽 방향에 표시됩니다.`})]})]})}),(0,g.jsx)(`div`,{className:`col-start-2 row-start-3`,children:(0,g.jsxs)(f,{children:[(0,g.jsx)(s,{render:(0,g.jsx)(i,{variant:`outline-secondary`,children:`아래쪽 (Bottom)`})}),(0,g.jsxs)(l,{side:`bottom`,showArrow:!0,children:[(0,g.jsx)(c,{children:`Bottom 팝오버`}),(0,g.jsx)(d,{children:`아래쪽 방향에 표시됩니다.`})]})]})})]})})},D={render:()=>(0,g.jsxs)(`div`,{className:`flex items-center gap-4 p-8`,children:[(0,g.jsxs)(f,{children:[(0,g.jsx)(s,{render:(0,g.jsx)(i,{variant:`outline-secondary`,children:`Start 정렬`})}),(0,g.jsxs)(l,{side:`bottom`,align:`start`,children:[(0,g.jsx)(c,{children:`Start 정렬`}),(0,g.jsx)(d,{children:`트리거의 시작 모서리에 맞춥니다.`})]})]}),(0,g.jsxs)(f,{children:[(0,g.jsx)(s,{render:(0,g.jsx)(i,{variant:`outline-secondary`,children:`Center 정렬`})}),(0,g.jsxs)(l,{side:`bottom`,align:`center`,children:[(0,g.jsx)(c,{children:`Center 정렬`}),(0,g.jsx)(d,{children:`트리거의 중앙에 맞춥니다.`})]})]}),(0,g.jsxs)(f,{children:[(0,g.jsx)(s,{render:(0,g.jsx)(i,{variant:`outline-secondary`,children:`End 정렬`})}),(0,g.jsxs)(l,{side:`bottom`,align:`end`,children:[(0,g.jsx)(c,{children:`End 정렬`}),(0,g.jsx)(d,{children:`트리거의 끝 모서리에 맞춥니다.`})]})]})]})},O={render:()=>(0,g.jsxs)(f,{children:[(0,g.jsx)(s,{render:(0,g.jsx)(i,{variant:`primary`,children:`도면 설정`})}),(0,g.jsxs)(l,{side:`bottom`,align:`start`,className:`w-80 gap-3`,children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(c,{children:`도면 규격`}),(0,g.jsx)(d,{children:`레이어 뷰포트 너비와 높이를 조정합니다.`})]}),(0,g.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,g.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,g.jsx)(`span`,{className:`w-14 text-2xs text-neutral-600`,children:`너비`}),(0,g.jsx)(o,{defaultValue:`100%`,size:`sm`,className:`grow`})]}),(0,g.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,g.jsx)(`span`,{className:`w-14 text-2xs text-neutral-600`,children:`최대 높이`}),(0,g.jsx)(o,{defaultValue:`300px`,size:`sm`,className:`grow`})]})]}),(0,g.jsxs)(`div`,{className:`flex justify-end gap-1.5 pt-1`,children:[(0,g.jsx)(i,{size:`sm`,variant:`outline-secondary`,children:`취소`}),(0,g.jsx)(i,{size:`sm`,variant:`primary`,children:`저장`})]})]})]})},k=[`Default`,`WithTriggerRef`,`Hover`,`Sides`,`Alignments`,`WithFormContent`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}}})))()}A();export{D as Alignments,C as Default,T as Hover,E as Sides,O as WithFormContent,w as WithTriggerRef,k as __namedExportsOrder,S as default};