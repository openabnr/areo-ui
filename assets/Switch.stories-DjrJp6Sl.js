import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-BgbBaVxq.js";import{n as r,t as i}from"./Switch-BlEEXNhd.js";var a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{a=t(),r(),o=n(),s={title:`Components/Switch`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`],description:`스위치 크기 (sm: 24x14px, md: 28x16px)`},align:{control:`inline-radio`,options:[`left`,`right`],description:`스위치와 텍스트 라벨의 정렬 방향`},checked:{control:`boolean`,description:`토글 활성화 상태 (제어 컴포넌트)`},defaultChecked:{control:`boolean`,description:`초기 토글 상태 (비제어 컴포넌트)`},disabled:{control:`boolean`,description:`비활성화 여부`},children:{control:`text`,description:`라벨 텍스트`},onCheckedChange:{action:`checkedChanged`,description:`토글 상태 변경 시 콜백 함수`}},args:{size:`md`,align:`left`,disabled:!1,children:`알림 수신`}},c={args:{defaultChecked:!1}},l={args:{defaultChecked:!0,children:`활성화된 스위치`}},u={render:()=>(0,o.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,o.jsx)(i,{size:`sm`,defaultChecked:!0,children:`Small 크기 (sm - 24x14px)`}),(0,o.jsx)(i,{size:`md`,defaultChecked:!0,children:`Medium 크기 (md - 28x16px)`})]})},d={render:()=>(0,o.jsxs)(`div`,{className:`flex w-60 flex-col gap-4 rounded border border-secondary-border p-3`,children:[(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Left 정렬 (스위치 + 라벨)`}),(0,o.jsx)(i,{align:`left`,defaultChecked:!0,children:`자동 저장`})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Right 정렬 (라벨 + 스위치)`}),(0,o.jsx)(i,{align:`right`,defaultChecked:!0,children:`다크 모드`})]})]})},f={render:()=>(0,o.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,o.jsx)(i,{disabled:!0,children:`비활성화 (Unchecked)`}),(0,o.jsx)(i,{disabled:!0,defaultChecked:!0,children:`비활성화 (Checked)`})]})},p={render:function(e){let[t,n]=(0,a.useState)(!0),r=`꺼짐`;return t&&(r=`켜짐`),(0,o.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,o.jsxs)(`div`,{className:`rounded border border-secondary-border bg-surface-muted px-3 py-1.5 text-xs`,children:[(0,o.jsx)(`strong`,{children:`현재 상태:`}),` `,r]}),(0,o.jsx)(i,{...e,checked:t,onCheckedChange:(t,r)=>{n(t),e.onCheckedChange?.(t,r)},children:`실시간 동기화`})]})}},m=[`Default`,`Checked`,`Sizes`,`Alignments`,`DisabledStates`,`Controlled`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: false
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true,
    children: '활성화된 스위치'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">\r
      <Switch size="sm" defaultChecked>\r
        Small 크기 (sm - 24x14px)\r
      </Switch>\r
      <Switch size="md" defaultChecked>\r
        Medium 크기 (md - 28x16px)\r
      </Switch>\r
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-60 flex-col gap-4 rounded border border-secondary-border p-3">\r
      <div>\r
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">\r
          Left 정렬 (스위치 + 라벨)\r
        </span>\r
        <Switch align="left" defaultChecked>\r
          자동 저장\r
        </Switch>\r
      </div>\r
      <div>\r
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">\r
          Right 정렬 (라벨 + 스위치)\r
        </span>\r
        <Switch align="right" defaultChecked>\r
          다크 모드\r
        </Switch>\r
      </div>\r
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">\r
      <Switch disabled>비활성화 (Unchecked)</Switch>\r
      <Switch disabled defaultChecked>\r
        비활성화 (Checked)\r
      </Switch>\r
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [isChecked, setIsChecked] = useState(true);
    let statusText = '꺼짐';
    if (isChecked) {
      statusText = '켜짐';
    }
    return <div className="flex flex-col items-center gap-4">\r
        <div className="rounded border border-secondary-border bg-surface-muted px-3 py-1.5 text-xs">\r
          <strong>현재 상태:</strong> {statusText}\r
        </div>\r
        <Switch {...args} checked={isChecked} onCheckedChange={(checked, eventDetails) => {
        setIsChecked(checked);
        args.onCheckedChange?.(checked, eventDetails);
      }}>\r
          실시간 동기화\r
        </Switch>\r
      </div>;
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{d as Alignments,l as Checked,p as Controlled,c as Default,f as DisabledStates,u as Sizes,m as __namedExportsOrder,s as default};