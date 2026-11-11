import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-D3lwOebq.js";import{n as r,t as i}from"./Button-CGkmDVQh.js";import{n as a,t as o}from"./TextField-5qHWalNn.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./Popover-NT1GamXN.js";var p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{p=t(),r(),u(),a(),m=n(),h={title:`Components/Popover`,component:f,subcomponents:{PopoverTrigger:s,PopoverContent:l,PopoverTitle:c,PopoverDescription:d},argTypes:{open:{control:`boolean`,description:`팝오버의 열림 상태 (제어 컴포넌트)`},defaultOpen:{control:`boolean`,description:`초기 열림 상태 (비제어 컴포넌트)`,table:{defaultValue:{summary:`false`}}},onOpenChange:{action:`openChange`,description:`열림/닫힘 상태가 변경될 때 호출되는 이벤트 핸들러`}},parameters:{layout:`centered`},tags:[`autodocs`]},g={args:{defaultOpen:!1},render:e=>(0,m.jsxs)(f,{...e,children:[(0,m.jsx)(s,{render:(0,m.jsx)(i,{variant:`outline-secondary`,children:`팝오버 열기`})}),(0,m.jsxs)(l,{showArrow:!0,side:`bottom`,align:`center`,children:[(0,m.jsx)(c,{children:`알림 설정`}),(0,m.jsx)(d,{children:`프로젝트 관련 알림을 이메일로 수신할지 설정합니다.`})]})]})},_={render:function(){let[e,t]=(0,p.useState)(!1),n=(0,p.useRef)(null),r=()=>{n.current&&clearTimeout(n.current),t(!0)},a=()=>{n.current=setTimeout(()=>{t(!1)},150)};return(0,m.jsx)(`div`,{className:`p-12`,children:(0,m.jsx)(`div`,{className:`inline-block`,onMouseEnter:r,onMouseLeave:a,children:(0,m.jsxs)(f,{open:e,onOpenChange:t,children:[(0,m.jsx)(s,{onClick:e=>e.preventDefault(),render:(0,m.jsx)(i,{variant:`outline-secondary`,children:`마우스 올려보기 (Hover)`})}),(0,m.jsxs)(l,{showArrow:!0,side:`top`,align:`center`,onMouseEnter:r,onMouseLeave:a,children:[(0,m.jsx)(c,{children:`호버 팝오버`}),(0,m.jsx)(d,{children:`버튼과 팝오버 본문 위로 마우스가 머무르는 동안 유지됩니다.`})]})]})})})}},v={render:()=>(0,m.jsx)(`div`,{className:`flex min-h-115 min-w-180 items-center justify-center p-8`,children:(0,m.jsxs)(`div`,{className:`grid grid-cols-3 grid-rows-3 items-center justify-items-center gap-8`,children:[(0,m.jsx)(`div`,{className:`col-start-2 row-start-1`,children:(0,m.jsxs)(f,{children:[(0,m.jsx)(s,{render:(0,m.jsx)(i,{variant:`outline-secondary`,children:`위쪽 (Top)`})}),(0,m.jsxs)(l,{side:`top`,showArrow:!0,children:[(0,m.jsx)(c,{children:`Top 팝오버`}),(0,m.jsx)(d,{children:`위쪽 방향에 표시됩니다.`})]})]})}),(0,m.jsx)(`div`,{className:`col-start-1 row-start-2`,children:(0,m.jsxs)(f,{children:[(0,m.jsx)(s,{render:(0,m.jsx)(i,{variant:`outline-secondary`,children:`왼쪽 (Left)`})}),(0,m.jsxs)(l,{side:`left`,showArrow:!0,children:[(0,m.jsx)(c,{children:`Left 팝오버`}),(0,m.jsx)(d,{children:`왼쪽 방향에 표시됩니다.`})]})]})}),(0,m.jsx)(`div`,{className:`col-start-3 row-start-2`,children:(0,m.jsxs)(f,{children:[(0,m.jsx)(s,{render:(0,m.jsx)(i,{variant:`outline-secondary`,children:`오른쪽 (Right)`})}),(0,m.jsxs)(l,{side:`right`,showArrow:!0,children:[(0,m.jsx)(c,{children:`Right 팝오버`}),(0,m.jsx)(d,{children:`오른쪽 방향에 표시됩니다.`})]})]})}),(0,m.jsx)(`div`,{className:`col-start-2 row-start-3`,children:(0,m.jsxs)(f,{children:[(0,m.jsx)(s,{render:(0,m.jsx)(i,{variant:`outline-secondary`,children:`아래쪽 (Bottom)`})}),(0,m.jsxs)(l,{side:`bottom`,showArrow:!0,children:[(0,m.jsx)(c,{children:`Bottom 팝오버`}),(0,m.jsx)(d,{children:`아래쪽 방향에 표시됩니다.`})]})]})})]})})},y={render:()=>(0,m.jsxs)(`div`,{className:`flex items-center gap-4 p-8`,children:[(0,m.jsxs)(f,{children:[(0,m.jsx)(s,{render:(0,m.jsx)(i,{variant:`outline-secondary`,children:`Start 정렬`})}),(0,m.jsxs)(l,{side:`bottom`,align:`start`,children:[(0,m.jsx)(c,{children:`Start 정렬`}),(0,m.jsx)(d,{children:`트리거의 시작 모서리에 맞춥니다.`})]})]}),(0,m.jsxs)(f,{children:[(0,m.jsx)(s,{render:(0,m.jsx)(i,{variant:`outline-secondary`,children:`Center 정렬`})}),(0,m.jsxs)(l,{side:`bottom`,align:`center`,children:[(0,m.jsx)(c,{children:`Center 정렬`}),(0,m.jsx)(d,{children:`트리거의 중앙에 맞춥니다.`})]})]}),(0,m.jsxs)(f,{children:[(0,m.jsx)(s,{render:(0,m.jsx)(i,{variant:`outline-secondary`,children:`End 정렬`})}),(0,m.jsxs)(l,{side:`bottom`,align:`end`,children:[(0,m.jsx)(c,{children:`End 정렬`}),(0,m.jsx)(d,{children:`트리거의 끝 모서리에 맞춥니다.`})]})]})]})},b={render:()=>(0,m.jsxs)(f,{children:[(0,m.jsx)(s,{render:(0,m.jsx)(i,{variant:`primary`,children:`도면 설정`})}),(0,m.jsxs)(l,{side:`bottom`,align:`start`,className:`w-80 gap-3`,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(c,{children:`도면 규격`}),(0,m.jsx)(d,{children:`레이어 뷰포트 너비와 높이를 조정합니다.`})]}),(0,m.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,m.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,m.jsx)(`span`,{className:`w-14 text-2xs text-neutral-600`,children:`너비`}),(0,m.jsx)(o,{defaultValue:`100%`,size:`sm`,className:`grow`})]}),(0,m.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,m.jsx)(`span`,{className:`w-14 text-2xs text-neutral-600`,children:`최대 높이`}),(0,m.jsx)(o,{defaultValue:`300px`,size:`sm`,className:`grow`})]})]}),(0,m.jsxs)(`div`,{className:`flex justify-end gap-1.5 pt-1`,children:[(0,m.jsx)(i,{size:`sm`,variant:`outline-secondary`,children:`취소`}),(0,m.jsx)(i,{size:`sm`,variant:`primary`,children:`저장`})]})]})]})},x=[`Default`,`Hover`,`Sides`,`Alignments`,`WithFormContent`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
    </Popover>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const handleMouseEnter = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setOpen(true);
    };
    const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => {
        setOpen(false);
      }, 150);
    };
    return <div className="p-12">
        <div className="inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger onClick={e => e.preventDefault()} render={<Button variant="outline-secondary">
                  마우스 올려보기 (Hover)
                </Button>} />
            <PopoverContent showArrow side="top" align="center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <PopoverTitle>호버 팝오버</PopoverTitle>
              <PopoverDescription>
                버튼과 팝오버 본문 위로 마우스가 머무르는 동안 유지됩니다.
              </PopoverDescription>
            </PopoverContent>
          </Popover>
        </div>
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}}})))()}S();export{y as Alignments,g as Default,_ as Hover,v as Sides,b as WithFormContent,x as __namedExportsOrder,h as default};