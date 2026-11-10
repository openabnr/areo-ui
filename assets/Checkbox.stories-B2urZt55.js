import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-BMcTjw50.js";import{n as r,t as i}from"./Checkbox-CaFYuyQb.js";var a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{a=t(),r(),o=n(),s={title:`Components/Checkbox`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:[`md`,`lg`],description:`체크박스 크기`},checked:{control:`boolean`,description:`체크 상태 (제어 컴포넌트)`},defaultChecked:{control:`boolean`,description:`초기 체크 상태 (비제어 컴포넌트)`},indeterminate:{control:`boolean`,description:`일부 선택(미결정) 상태`},disabled:{control:`boolean`,description:`비활성화 여부`},children:{control:`text`,description:`라벨 텍스트`},onCheckedChange:{action:`checkedChanged`,description:`체크 상태 변경 시 콜백 함수`}},args:{size:`md`,indeterminate:!1,disabled:!1,children:`동의합니다`}},c={args:{defaultChecked:!1}},l={args:{defaultChecked:!0,children:`체크된 체크박스`}},u={args:{indeterminate:!0,children:`일부 선택된 체크박스`}},d={render:()=>(0,o.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,o.jsx)(i,{size:`md`,defaultChecked:!0,children:`Medium 크기 (md - 14px)`}),(0,o.jsx)(i,{size:`lg`,defaultChecked:!0,children:`Large 크기 (lg - 16px)`})]})},f={render:()=>(0,o.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,o.jsx)(i,{disabled:!0,children:`비활성화 (Unchecked)`}),(0,o.jsx)(i,{disabled:!0,defaultChecked:!0,children:`비활성화 (Checked)`}),(0,o.jsx)(i,{disabled:!0,indeterminate:!0,children:`비활성화 (Indeterminate)`})]})},p={render:function(){let[e,t]=(0,a.useState)([!0,!1,!1]),n=e.length,r=e.filter(Boolean).length,s=r===n,c=r>0&&r<n,l=e=>{t([e,e,e])},u=(n,r)=>{let i=[...e];i[n]=r,t(i)};return(0,o.jsxs)(`div`,{className:`flex flex-col gap-2 rounded border border-secondary-border p-4`,children:[(0,o.jsx)(i,{checked:s,indeterminate:c,onCheckedChange:l,className:`font-bold`,children:`전체 동의`}),(0,o.jsxs)(`div`,{className:`ml-5 flex flex-col gap-2 border-l border-secondary-border pt-1 pl-3`,children:[(0,o.jsx)(i,{checked:e[0],onCheckedChange:e=>u(0,e),children:`서비스 이용약관 동의 (필수)`}),(0,o.jsx)(i,{checked:e[1],onCheckedChange:e=>u(1,e),children:`개인정보 수집 및 이용 동의 (필수)`}),(0,o.jsx)(i,{checked:e[2],onCheckedChange:e=>u(2,e),children:`마케팅 정보 수신 동의 (선택)`})]})]})}},m=[`Default`,`Checked`,`Indeterminate`,`Sizes`,`DisabledStates`,`SelectAllExample`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: false
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true,
    children: '체크된 체크박스'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    children: '일부 선택된 체크박스'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <Checkbox size="md" defaultChecked>
        Medium 크기 (md - 14px)
      </Checkbox>
      <Checkbox size="lg" defaultChecked>
        Large 크기 (lg - 16px)
      </Checkbox>
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <Checkbox disabled>비활성화 (Unchecked)</Checkbox>
      <Checkbox disabled defaultChecked>
        비활성화 (Checked)
      </Checkbox>
      <Checkbox disabled indeterminate>
        비활성화 (Indeterminate)
      </Checkbox>
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{l as Checked,c as Default,f as DisabledStates,u as Indeterminate,p as SelectAllExample,d as Sizes,m as __namedExportsOrder,s as default};