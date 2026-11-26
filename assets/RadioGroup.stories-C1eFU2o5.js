import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-CfFMW0hA.js";import{n as r,r as i,t as a}from"./RadioGroup-BT5kIpXl.js";function o(e){return e===`apple`?`사과`:e===`banana`?`바나나`:e===`cherry`?`체리`:`선택 없음`}function s(e){let[t,n]=(0,c.useState)(`apple`);return(0,l.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,l.jsxs)(`div`,{className:`rounded border border-secondary-border bg-surface-muted px-3 py-1.5 text-xs`,children:[(0,l.jsx)(`strong`,{children:`현재 선택:`}),` `,o(t),` (`,t,`)`]}),(0,l.jsxs)(r,{...e,value:t,onValueChange:(t,r)=>{typeof t==`string`&&(n(t),e.onValueChange?.(t,r))},children:[(0,l.jsx)(a,{value:`apple`,children:`사과`}),(0,l.jsx)(a,{value:`banana`,children:`바나나`}),(0,l.jsx)(a,{value:`cherry`,children:`체리`})]})]})}var c,l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{c=t(),i(),l=n(),{expect:u,fn:d,userEvent:f,within:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/Radio`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{orientation:{control:`inline-radio`,options:[`horizontal`,`vertical`],description:`라디오 그룹의 정렬 방향`},disabled:{control:`boolean`,description:`라디오 그룹 전체 비활성화 여부`},value:{control:`text`,description:`선택된 라디오 값 (제어 컴포넌트)`},defaultValue:{control:`text`,description:`기본 선택된 라디오 값 (비제어 컴포넌트)`}},args:{orientation:`horizontal`,defaultValue:`opt1`,onValueChange:d()}},h={render:e=>(0,l.jsxs)(r,{...e,children:[(0,l.jsx)(a,{value:`opt1`,children:`옵션 1`}),(0,l.jsx)(a,{value:`opt2`,children:`옵션 2`}),(0,l.jsx)(a,{value:`opt3`,children:`옵션 3`})]}),play:async({canvasElement:e,args:t})=>{let n=p(e).getByRole(`radio`,{name:`옵션 2`});await f.click(n),await u(n).toBeChecked(),await u(t.onValueChange).toHaveBeenCalled()}},g={render:e=>(0,l.jsxs)(r,{...e,"aria-label":`단독 라디오 그룹`,children:[(0,l.jsx)(a,{value:`opt1`,"aria-label":`단독 옵션 1`}),(0,l.jsx)(a,{value:`opt2`,"aria-label":`단독 옵션 2`})]}),play:async({canvasElement:e})=>{let t=p(e).getByRole(`radio`,{name:`단독 옵션 2`});await f.click(t),await u(t).toBeChecked()}},_={args:{orientation:`vertical`,defaultValue:`opt1`},render:e=>(0,l.jsxs)(r,{...e,children:[(0,l.jsx)(a,{value:`opt1`,children:`옵션 1 (기본 선택)`}),(0,l.jsx)(a,{value:`opt2`,children:`옵션 2`}),(0,l.jsx)(a,{value:`opt3`,children:`옵션 3`})]})},v={render:()=>(0,l.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{className:`mb-2 block text-2xs font-semibold text-neutral-500`,children:`Small (sm)`}),(0,l.jsxs)(r,{defaultValue:`sm-1`,children:[(0,l.jsx)(a,{size:`sm`,value:`sm-1`,children:`Small 1`}),(0,l.jsx)(a,{size:`sm`,value:`sm-2`,children:`Small 2`})]})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{className:`mb-2 block text-2xs font-semibold text-neutral-500`,children:`Medium (md - 기본값)`}),(0,l.jsxs)(r,{defaultValue:`md-1`,children:[(0,l.jsx)(a,{size:`md`,value:`md-1`,children:`Medium 1`}),(0,l.jsx)(a,{size:`md`,value:`md-2`,children:`Medium 2`})]})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{className:`mb-2 block text-2xs font-semibold text-neutral-500`,children:`Large (lg)`}),(0,l.jsxs)(r,{defaultValue:`lg-1`,children:[(0,l.jsx)(a,{size:`lg`,value:`lg-1`,children:`Large 1`}),(0,l.jsx)(a,{size:`lg`,value:`lg-2`,children:`Large 2`})]})]})]})},y={render:()=>(0,l.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{className:`mb-2 block text-2xs font-semibold text-neutral-500`,children:`개별 비활성화`}),(0,l.jsxs)(r,{defaultValue:`disabled-checked`,children:[(0,l.jsx)(a,{value:`enabled`,children:`활성 옵션`}),(0,l.jsx)(a,{value:`disabled-checked`,disabled:!0,children:`선택된 비활성 옵션`}),(0,l.jsx)(a,{value:`disabled-unchecked`,disabled:!0,children:`미선택 비활성 옵션`})]})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`span`,{className:`mb-2 block text-2xs font-semibold text-neutral-500`,children:`그룹 전체 비활성화`}),(0,l.jsxs)(r,{disabled:!0,defaultValue:`opt1`,children:[(0,l.jsx)(a,{value:`opt1`,children:`옵션 1 (선택됨)`}),(0,l.jsx)(a,{value:`opt2`,children:`옵션 2`}),(0,l.jsx)(a,{value:`opt3`,children:`옵션 3`})]})]})]})},b={render:e=>(0,l.jsx)(s,{...e}),play:async({canvasElement:e})=>{let t=p(e),n=t.getByRole(`radio`,{name:`바나나`});await f.click(n),await u(t.getByText(/바나나 \(banana\)/)).toBeInTheDocument()}},x=[`Default`,`WithoutLabel`,`Vertical`,`Sizes`,`DisabledStates`,`Controlled`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <RadioGroup {...args}>
      <Radio value="opt1">옵션 1</Radio>
      <Radio value="opt2">옵션 2</Radio>
      <Radio value="opt3">옵션 3</Radio>
    </RadioGroup>,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const opt2 = canvas.getByRole('radio', {
      name: '옵션 2'
    });
    await userEvent.click(opt2);
    await expect(opt2).toBeChecked();
    await expect(args.onValueChange).toHaveBeenCalled();
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <RadioGroup {...args} aria-label="단독 라디오 그룹">
      <Radio value="opt1" aria-label="단독 옵션 1" />
      <Radio value="opt2" aria-label="단독 옵션 2" />
    </RadioGroup>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const opt2 = canvas.getByRole('radio', {
      name: '단독 옵션 2'
    });
    await userEvent.click(opt2);
    await expect(opt2).toBeChecked();
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    defaultValue: 'opt1'
  },
  render: args => <RadioGroup {...args}>
      <Radio value="opt1">옵션 1 (기본 선택)</Radio>
      <Radio value="opt2">옵션 2</Radio>
      <Radio value="opt3">옵션 3</Radio>
    </RadioGroup>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div>
        <span className="mb-2 block text-2xs font-semibold text-neutral-500">
          Small (sm)
        </span>
        <RadioGroup defaultValue="sm-1">
          <Radio size="sm" value="sm-1">
            Small 1
          </Radio>
          <Radio size="sm" value="sm-2">
            Small 2
          </Radio>
        </RadioGroup>
      </div>

      <div>
        <span className="mb-2 block text-2xs font-semibold text-neutral-500">
          Medium (md - 기본값)
        </span>
        <RadioGroup defaultValue="md-1">
          <Radio size="md" value="md-1">
            Medium 1
          </Radio>
          <Radio size="md" value="md-2">
            Medium 2
          </Radio>
        </RadioGroup>
      </div>

      <div>
        <span className="mb-2 block text-2xs font-semibold text-neutral-500">
          Large (lg)
        </span>
        <RadioGroup defaultValue="lg-1">
          <Radio size="lg" value="lg-1">
            Large 1
          </Radio>
          <Radio size="lg" value="lg-2">
            Large 2
          </Radio>
        </RadioGroup>
      </div>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div>
        <span className="mb-2 block text-2xs font-semibold text-neutral-500">
          개별 비활성화
        </span>
        <RadioGroup defaultValue="disabled-checked">
          <Radio value="enabled">활성 옵션</Radio>
          <Radio value="disabled-checked" disabled>
            선택된 비활성 옵션
          </Radio>
          <Radio value="disabled-unchecked" disabled>
            미선택 비활성 옵션
          </Radio>
        </RadioGroup>
      </div>

      <div>
        <span className="mb-2 block text-2xs font-semibold text-neutral-500">
          그룹 전체 비활성화
        </span>
        <RadioGroup disabled defaultValue="opt1">
          <Radio value="opt1">옵션 1 (선택됨)</Radio>
          <Radio value="opt2">옵션 2</Radio>
          <Radio value="opt3">옵션 3</Radio>
        </RadioGroup>
      </div>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledRadioDemo {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const banana = canvas.getByRole('radio', {
      name: '바나나'
    });
    await userEvent.click(banana);
    await expect(canvas.getByText(/바나나 \\(banana\\)/)).toBeInTheDocument();
  }
}`,...b.parameters?.docs?.source}}}})))()}S();export{b as Controlled,h as Default,y as DisabledStates,v as Sizes,_ as Vertical,g as WithoutLabel,x as __namedExportsOrder,m as default};