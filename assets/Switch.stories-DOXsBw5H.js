import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-D8PjfN8a.js";import{n as r,t as i}from"./Switch-CbTb_5lr.js";function a(e){let[t,n]=(0,o.useState)(!0);return(0,s.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,s.jsxs)(`div`,{className:`rounded border border-secondary-border bg-surface-muted px-3 py-1.5 text-xs`,children:[(0,s.jsx)(`strong`,{children:`현재 상태:`}),` `,t?`켜짐`:`꺼짐`]}),(0,s.jsx)(i,{...e,checked:t,onCheckedChange:(t,r)=>{n(t),e.onCheckedChange?.(t,r)},children:`실시간 동기화`})]})}var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{o=t(),r(),s=n(),{expect:c,fn:l,userEvent:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/Switch`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`],description:`스위치 크기 (sm, md, lg)`},align:{control:`inline-radio`,options:[`left`,`right`],description:`스위치와 텍스트 라벨의 정렬 방향`},checked:{control:`boolean`,description:`토글 활성화 상태 (제어 컴포넌트)`},defaultChecked:{control:`boolean`,description:`초기 토글 상태 (비제어 컴포넌트)`},disabled:{control:`boolean`,description:`비활성화 여부`},children:{control:`text`,description:`라벨 텍스트`}},args:{size:`md`,align:`left`,disabled:!1,children:`알림 수신`,onCheckedChange:l()}},p={args:{defaultChecked:!1},play:async({canvasElement:e,args:t})=>{let n=d(e).getByRole(`switch`,{name:`알림 수신`});await c(n).not.toBeChecked(),await u.click(n),await c(n).toBeChecked(),await c(t.onCheckedChange).toHaveBeenCalledTimes(1)}},m={args:{children:void 0,"aria-label":`단독 스위치`},play:async({canvasElement:e})=>{let t=d(e).getByRole(`switch`,{name:`단독 스위치`});await u.click(t),await c(t).toBeChecked()}},h={args:{defaultChecked:!0,children:`활성화된 스위치`}},g={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,s.jsx)(i,{size:`sm`,defaultChecked:!0,children:`Small 크기 (sm - 24x14px)`}),(0,s.jsx)(i,{size:`md`,defaultChecked:!0,children:`Medium 크기 (md - 28x16px)`}),(0,s.jsx)(i,{size:`lg`,defaultChecked:!0,children:`Large 크기 (lg - 36x20px)`})]})},_={render:()=>(0,s.jsxs)(`div`,{className:`flex w-60 flex-col gap-4 rounded border border-secondary-border p-3`,children:[(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Left 정렬 (스위치 + 라벨)`}),(0,s.jsx)(i,{align:`left`,defaultChecked:!0,children:`자동 저장`})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Right 정렬 (라벨 + 스위치)`}),(0,s.jsx)(i,{align:`right`,defaultChecked:!0,children:`다크 모드`})]})]})},v={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,s.jsx)(i,{disabled:!0,children:`비활성화 (Unchecked)`}),(0,s.jsx)(i,{disabled:!0,defaultChecked:!0,children:`비활성화 (Checked)`})]})},y={render:e=>(0,s.jsx)(a,{...e}),play:async({canvasElement:e})=>{let t=d(e),n=t.getByRole(`switch`,{name:`실시간 동기화`});await u.click(n),await c(t.getByText(`꺼짐`)).toBeInTheDocument()}},b=[`Default`,`WithoutLabel`,`Checked`,`Sizes`,`Alignments`,`DisabledStates`,`Controlled`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: false
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const switchEl = canvas.getByRole('switch', {
      name: '알림 수신'
    });
    await expect(switchEl).not.toBeChecked();
    await userEvent.click(switchEl);
    await expect(switchEl).toBeChecked();
    await expect(args.onCheckedChange).toHaveBeenCalledTimes(1);
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: undefined,
    'aria-label': '단독 스위치'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const switchEl = canvas.getByRole('switch', {
      name: '단독 스위치'
    });
    await userEvent.click(switchEl);
    await expect(switchEl).toBeChecked();
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true,
    children: '활성화된 스위치'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <Switch size="sm" defaultChecked>
        Small 크기 (sm - 24x14px)
      </Switch>
      <Switch size="md" defaultChecked>
        Medium 크기 (md - 28x16px)
      </Switch>
      <Switch size="lg" defaultChecked>
        Large 크기 (lg - 36x20px)
      </Switch>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-60 flex-col gap-4 rounded border border-secondary-border p-3">
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          Left 정렬 (스위치 + 라벨)
        </span>
        <Switch align="left" defaultChecked>
          자동 저장
        </Switch>
      </div>
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          Right 정렬 (라벨 + 스위치)
        </span>
        <Switch align="right" defaultChecked>
          다크 모드
        </Switch>
      </div>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <Switch disabled>비활성화 (Unchecked)</Switch>
      <Switch disabled defaultChecked>
        비활성화 (Checked)
      </Switch>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledSwitchDemo {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const switchEl = canvas.getByRole('switch', {
      name: '실시간 동기화'
    });
    await userEvent.click(switchEl);
    await expect(canvas.getByText('꺼짐')).toBeInTheDocument();
  }
}`,...y.parameters?.docs?.source}}}})))()}x();export{_ as Alignments,h as Checked,y as Controlled,p as Default,v as DisabledStates,g as Sizes,m as WithoutLabel,b as __namedExportsOrder,f as default};