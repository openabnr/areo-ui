import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-D8PjfN8a.js";import{n as r,t as i}from"./Checkbox-DSFpFSeY.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{a=t(),r(),o=n(),{expect:s,userEvent:c,within:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/Checkbox`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`],description:`체크박스 크기`},checked:{control:`boolean`,description:`체크 상태 (제어 컴포넌트)`},defaultChecked:{control:`boolean`,description:`초기 체크 상태 (비제어 컴포넌트)`},indeterminate:{control:`boolean`,description:`일부 선택(미결정) 상태`},disabled:{control:`boolean`,description:`비활성화 여부`},readOnly:{control:`boolean`,description:`읽기 전용 여부`},children:{control:`text`,description:`라벨 텍스트`},onCheckedChange:{action:`checkedChanged`,description:`체크 상태 변경 시 콜백 함수`}},args:{size:`md`,indeterminate:!1,disabled:!1,children:`동의합니다`}},d={args:{defaultChecked:!1},play:async({canvasElement:e})=>{let t=l(e).getByRole(`checkbox`,{name:`동의합니다`});await s(t).not.toBeChecked(),await c.click(t),await s(t).toBeChecked(),await c.keyboard(` `),await s(t).not.toBeChecked()}},f={args:{defaultChecked:!0,children:`체크된 체크박스`}},p={args:{indeterminate:!0,children:`일부 선택된 체크박스`}},m={render:()=>(0,o.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,o.jsx)(i,{size:`sm`,defaultChecked:!0,children:`Small 크기 (sm - 12px)`}),(0,o.jsx)(i,{size:`md`,defaultChecked:!0,children:`Medium 크기 (md - 14px)`}),(0,o.jsx)(i,{size:`lg`,defaultChecked:!0,children:`Large 크기 (lg - 16px)`})]})},h={render:()=>(0,o.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,o.jsx)(i,{disabled:!0,children:`비활성화 (Unchecked)`}),(0,o.jsx)(i,{disabled:!0,defaultChecked:!0,children:`비활성화 (Checked)`}),(0,o.jsx)(i,{disabled:!0,indeterminate:!0,children:`비활성화 (Indeterminate)`}),(0,o.jsx)(i,{readOnly:!0,defaultChecked:!0,children:`읽기 전용 (ReadOnly)`})]})},g={render:()=>(0,o.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,o.jsx)(i,{"aria-label":`라벨 없음(undefined)`}),(0,o.jsx)(i,{"aria-label":`라벨 없음(null)`,children:null}),(0,o.jsx)(i,{"aria-label":`라벨 없음(빈 문자열)`,children:``}),(0,o.jsx)(i,{"aria-label":`라벨 없음(boolean)`,children:!1})]}),play:async({canvasElement:e})=>{let t=l(e).getByRole(`checkbox`,{name:`라벨 없음(undefined)`});await c.click(t),await s(t).toBeChecked()}},_={render:function(){let[e,t]=(0,a.useState)([!0,!1,!1]),n=e.length,r=e.filter(Boolean).length,s=r===n,c=r>0&&r<n,l=e=>{t([e,e,e])},u=(n,r)=>{let i=[...e];i[n]=r,t(i)};return(0,o.jsxs)(`div`,{className:`flex flex-col gap-2 rounded border border-secondary-border p-4`,children:[(0,o.jsx)(i,{checked:s,indeterminate:c,onCheckedChange:l,className:`font-bold`,children:`전체 동의`}),(0,o.jsxs)(`div`,{className:`ml-5 flex flex-col gap-2 border-l border-secondary-border pt-1 pl-3`,children:[(0,o.jsx)(i,{checked:e[0],onCheckedChange:e=>u(0,e),children:`서비스 이용약관 동의 (필수)`}),(0,o.jsx)(i,{checked:e[1],onCheckedChange:e=>u(1,e),children:`개인정보 수집 및 이용 동의 (필수)`}),(0,o.jsx)(i,{checked:e[2],onCheckedChange:e=>u(2,e),children:`마케팅 정보 수신 동의 (선택)`})]})]})},play:async({canvasElement:e})=>{let t=l(e).getByRole(`checkbox`,{name:`전체 동의`});await s(t).toHaveAttribute(`aria-checked`,`mixed`),await c.click(t),await s(t).toBeChecked()}},v=[`Default`,`Checked`,`Indeterminate`,`Sizes`,`DisabledAndReadOnlyStates`,`WithoutLabel`,`SelectAllExample`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox', {
      name: '동의합니다'
    });
    await expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    await expect(checkbox).toBeChecked();
    await userEvent.keyboard(' ');
    await expect(checkbox).not.toBeChecked();
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true,
    children: '체크된 체크박스'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    children: '일부 선택된 체크박스'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <Checkbox size="sm" defaultChecked>
        Small 크기 (sm - 12px)
      </Checkbox>
      <Checkbox size="md" defaultChecked>
        Medium 크기 (md - 14px)
      </Checkbox>
      <Checkbox size="lg" defaultChecked>
        Large 크기 (lg - 16px)
      </Checkbox>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <Checkbox disabled>비활성화 (Unchecked)</Checkbox>
      <Checkbox disabled defaultChecked>
        비활성화 (Checked)
      </Checkbox>
      <Checkbox disabled indeterminate>
        비활성화 (Indeterminate)
      </Checkbox>
      <Checkbox readOnly defaultChecked>
        읽기 전용 (ReadOnly)
      </Checkbox>
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <Checkbox aria-label="라벨 없음(undefined)" />
      <Checkbox aria-label="라벨 없음(null)">{null}</Checkbox>
      <Checkbox aria-label="라벨 없음(빈 문자열)">{''}</Checkbox>
      <Checkbox aria-label="라벨 없음(boolean)">{false}</Checkbox>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const first = canvas.getByRole('checkbox', {
      name: '라벨 없음(undefined)'
    });
    await userEvent.click(first);
    await expect(first).toBeChecked();
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [checkedItems, setCheckedItems] = useState<boolean[]>([true, false, false]);
    const totalCount = checkedItems.length;
    const checkedCount = checkedItems.filter(Boolean).length;
    const isAllChecked = checkedCount === totalCount;
    const isIndeterminate = checkedCount > 0 && checkedCount < totalCount;
    const handleParentChange = (checked: boolean) => {
      setCheckedItems([checked, checked, checked]);
    };
    const handleChildChange = (index: number, checked: boolean) => {
      const nextItems = [...checkedItems];
      nextItems[index] = checked;
      setCheckedItems(nextItems);
    };
    return <div className="flex flex-col gap-2 rounded border border-secondary-border p-4">
        <Checkbox checked={isAllChecked} indeterminate={isIndeterminate} onCheckedChange={handleParentChange} className="font-bold">
          전체 동의
        </Checkbox>
        <div className="ml-5 flex flex-col gap-2 border-l border-secondary-border pt-1 pl-3">
          <Checkbox checked={checkedItems[0]} onCheckedChange={checked => handleChildChange(0, checked)}>
            서비스 이용약관 동의 (필수)
          </Checkbox>
          <Checkbox checked={checkedItems[1]} onCheckedChange={checked => handleChildChange(1, checked)}>
            개인정보 수집 및 이용 동의 (필수)
          </Checkbox>
          <Checkbox checked={checkedItems[2]} onCheckedChange={checked => handleChildChange(2, checked)}>
            마케팅 정보 수신 동의 (선택)
          </Checkbox>
        </div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const selectAll = canvas.getByRole('checkbox', {
      name: '전체 동의'
    });
    await expect(selectAll).toHaveAttribute('aria-checked', 'mixed');
    await userEvent.click(selectAll);
    await expect(selectAll).toBeChecked();
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{f as Checked,d as Default,h as DisabledAndReadOnlyStates,p as Indeterminate,_ as SelectAllExample,m as Sizes,g as WithoutLabel,v as __namedExportsOrder,u as default};