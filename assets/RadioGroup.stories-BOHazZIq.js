import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-BgbBaVxq.js";import{n as r,r as i,t as a}from"./RadioGroup-CLPgiTwv.js";var o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{o=t(),i(),s=n(),c={title:`Components/Radio`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{orientation:{control:`inline-radio`,options:[`horizontal`,`vertical`],description:`라디오 그룹의 정렬 방향`},disabled:{control:`boolean`,description:`라디오 그룹 전체 비활성화 여부`},value:{control:`text`,description:`선택된 라디오 값 (제어 컴포넌트)`},defaultValue:{control:`text`,description:`기본 선택된 라디오 값 (비제어 컴포넌트)`},onValueChange:{action:`valueChanged`,description:`라디오 선택 변경 시 호출되는 콜백`}},args:{orientation:`horizontal`,defaultValue:`opt1`}},l={render:e=>(0,s.jsxs)(r,{...e,children:[(0,s.jsx)(a,{value:`opt1`,children:`옵션 1`}),(0,s.jsx)(a,{value:`opt2`,children:`옵션 2`}),(0,s.jsx)(a,{value:`opt3`,children:`옵션 3`})]})},u={args:{orientation:`vertical`,defaultValue:`opt1`},render:e=>(0,s.jsxs)(r,{...e,children:[(0,s.jsx)(a,{value:`opt1`,children:`옵션 1 (기본 선택)`}),(0,s.jsx)(a,{value:`opt2`,children:`옵션 2`}),(0,s.jsx)(a,{value:`opt3`,children:`옵션 3`})]})},d={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`span`,{className:`mb-2 block text-2xs font-semibold text-neutral-500`,children:`Small (sm)`}),(0,s.jsxs)(r,{defaultValue:`sm-1`,children:[(0,s.jsx)(a,{size:`sm`,value:`sm-1`,children:`Small 1`}),(0,s.jsx)(a,{size:`sm`,value:`sm-2`,children:`Small 2`})]})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`span`,{className:`mb-2 block text-2xs font-semibold text-neutral-500`,children:`Medium (md - 기본값)`}),(0,s.jsxs)(r,{defaultValue:`md-1`,children:[(0,s.jsx)(a,{size:`md`,value:`md-1`,children:`Medium 1`}),(0,s.jsx)(a,{size:`md`,value:`md-2`,children:`Medium 2`})]})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`span`,{className:`mb-2 block text-2xs font-semibold text-neutral-500`,children:`Large (lg)`}),(0,s.jsxs)(r,{defaultValue:`lg-1`,children:[(0,s.jsx)(a,{size:`lg`,value:`lg-1`,children:`Large 1`}),(0,s.jsx)(a,{size:`lg`,value:`lg-2`,children:`Large 2`})]})]})]})},f={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`span`,{className:`mb-2 block text-2xs font-semibold text-neutral-500`,children:`개별 비활성화`}),(0,s.jsxs)(r,{defaultValue:`disabled-checked`,children:[(0,s.jsx)(a,{value:`enabled`,children:`활성 옵션`}),(0,s.jsx)(a,{value:`disabled-checked`,disabled:!0,children:`선택된 비활성 옵션`}),(0,s.jsx)(a,{value:`disabled-unchecked`,disabled:!0,children:`미선택 비활성 옵션`})]})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`span`,{className:`mb-2 block text-2xs font-semibold text-neutral-500`,children:`그룹 전체 비활성화`}),(0,s.jsxs)(r,{disabled:!0,defaultValue:`opt1`,children:[(0,s.jsx)(a,{value:`opt1`,children:`옵션 1 (선택됨)`}),(0,s.jsx)(a,{value:`opt2`,children:`옵션 2`}),(0,s.jsx)(a,{value:`opt3`,children:`옵션 3`})]})]})]})},p={render:function(e){let[t,n]=(0,o.useState)(`apple`);return(0,s.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,s.jsxs)(`div`,{className:`rounded border border-secondary-border bg-surface-muted px-3 py-1.5 text-xs`,children:[(0,s.jsx)(`strong`,{children:`현재 선택:`}),` `,(e=>e===`apple`?`사과`:e===`banana`?`바나나`:e===`cherry`?`체리`:`선택 없음`)(t),` (`,t,`)`]}),(0,s.jsxs)(r,{...e,value:t,onValueChange:(t,r)=>{typeof t==`string`&&(n(t),e.onValueChange?.(t,r))},children:[(0,s.jsx)(a,{value:`apple`,children:`사과`}),(0,s.jsx)(a,{value:`banana`,children:`바나나`}),(0,s.jsx)(a,{value:`cherry`,children:`체리`})]})]})}},m=[`Default`,`Vertical`,`Sizes`,`DisabledStates`,`Controlled`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <RadioGroup {...args}>\r
      <Radio value="opt1">옵션 1</Radio>\r
      <Radio value="opt2">옵션 2</Radio>\r
      <Radio value="opt3">옵션 3</Radio>\r
    </RadioGroup>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    defaultValue: 'opt1'
  },
  render: args => <RadioGroup {...args}>\r
      <Radio value="opt1">옵션 1 (기본 선택)</Radio>\r
      <Radio value="opt2">옵션 2</Radio>\r
      <Radio value="opt3">옵션 3</Radio>\r
    </RadioGroup>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">\r
      <div>\r
        <span className="mb-2 block text-2xs font-semibold text-neutral-500">\r
          Small (sm)\r
        </span>\r
        <RadioGroup defaultValue="sm-1">\r
          <Radio size="sm" value="sm-1">\r
            Small 1\r
          </Radio>\r
          <Radio size="sm" value="sm-2">\r
            Small 2\r
          </Radio>\r
        </RadioGroup>\r
      </div>\r
\r
      <div>\r
        <span className="mb-2 block text-2xs font-semibold text-neutral-500">\r
          Medium (md - 기본값)\r
        </span>\r
        <RadioGroup defaultValue="md-1">\r
          <Radio size="md" value="md-1">\r
            Medium 1\r
          </Radio>\r
          <Radio size="md" value="md-2">\r
            Medium 2\r
          </Radio>\r
        </RadioGroup>\r
      </div>\r
\r
      <div>\r
        <span className="mb-2 block text-2xs font-semibold text-neutral-500">\r
          Large (lg)\r
        </span>\r
        <RadioGroup defaultValue="lg-1">\r
          <Radio size="lg" value="lg-1">\r
            Large 1\r
          </Radio>\r
          <Radio size="lg" value="lg-2">\r
            Large 2\r
          </Radio>\r
        </RadioGroup>\r
      </div>\r
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">\r
      <div>\r
        <span className="mb-2 block text-2xs font-semibold text-neutral-500">\r
          개별 비활성화\r
        </span>\r
        <RadioGroup defaultValue="disabled-checked">\r
          <Radio value="enabled">활성 옵션</Radio>\r
          <Radio value="disabled-checked" disabled>\r
            선택된 비활성 옵션\r
          </Radio>\r
          <Radio value="disabled-unchecked" disabled>\r
            미선택 비활성 옵션\r
          </Radio>\r
        </RadioGroup>\r
      </div>\r
\r
      <div>\r
        <span className="mb-2 block text-2xs font-semibold text-neutral-500">\r
          그룹 전체 비활성화\r
        </span>\r
        <RadioGroup disabled defaultValue="opt1">\r
          <Radio value="opt1">옵션 1 (선택됨)</Radio>\r
          <Radio value="opt2">옵션 2</Radio>\r
          <Radio value="opt3">옵션 3</Radio>\r
        </RadioGroup>\r
      </div>\r
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [selected, setSelected] = useState('apple');
    const getSelectedLabel = (val: string) => {
      if (val === 'apple') {
        return '사과';
      }
      if (val === 'banana') {
        return '바나나';
      }
      if (val === 'cherry') {
        return '체리';
      }
      return '선택 없음';
    };
    return <div className="flex flex-col items-center gap-4">\r
        <div className="rounded border border-secondary-border bg-surface-muted px-3 py-1.5 text-xs">\r
          <strong>현재 선택:</strong> {getSelectedLabel(selected)} ({selected})\r
        </div>\r
        <RadioGroup {...args} value={selected} onValueChange={(val, eventDetails) => {
        if (typeof val === 'string') {
          setSelected(val);
          args.onValueChange?.(val, eventDetails);
        }
      }}>\r
          <Radio value="apple">사과</Radio>\r
          <Radio value="banana">바나나</Radio>\r
          <Radio value="cherry">체리</Radio>\r
        </RadioGroup>\r
      </div>;
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{p as Controlled,l as Default,f as DisabledStates,d as Sizes,u as Vertical,m as __namedExportsOrder,c as default};