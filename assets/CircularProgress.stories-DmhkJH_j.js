import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-BKXkO2qw.js";import{n,t as r}from"./CircularProgress-Cm5LFEoU.js";var i,a,o,s,c,l,u;function d(){return(d=e((()=>{n(),i=t(),a={title:`Components/CircularProgress`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`destructive`],description:`스피너의 색상 테마`},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`],description:`스피너 크기 (sm: 30px, md: 50px, lg: 100px)`},label:{control:`text`,description:`접근성(스크린 리더)용 로딩 텍스트`},className:{control:`text`,description:`추가 Tailwind CSS 클래스`}},args:{variant:`primary`,size:`md`,label:`로딩 중...`}},o={args:{variant:`primary`,size:`md`}},s={render:()=>(0,i.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,i.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,i.jsx)(r,{variant:`primary`,size:`md`}),(0,i.jsx)(`span`,{className:`text-xs text-neutral-600`,children:`Primary`})]}),(0,i.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,i.jsx)(r,{variant:`secondary`,size:`md`}),(0,i.jsx)(`span`,{className:`text-xs text-neutral-600`,children:`Secondary`})]}),(0,i.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,i.jsx)(r,{variant:`destructive`,size:`md`}),(0,i.jsx)(`span`,{className:`text-xs text-neutral-600`,children:`Destructive`})]})]})},c={render:()=>(0,i.jsxs)(`div`,{className:`flex items-end gap-6`,children:[(0,i.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,i.jsx)(r,{size:`sm`}),(0,i.jsx)(`span`,{className:`text-xs text-neutral-600`,children:`Small (30px)`})]}),(0,i.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,i.jsx)(r,{size:`md`}),(0,i.jsx)(`span`,{className:`text-xs text-neutral-600`,children:`Medium (50px)`})]}),(0,i.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,i.jsx)(r,{size:`lg`}),(0,i.jsx)(`span`,{className:`text-xs text-neutral-600`,children:`Large (100px)`})]})]})},l={render:()=>(0,i.jsxs)(`div`,{className:`relative flex h-48 w-80 flex-col items-center justify-center rounded border border-neutral-300 bg-neutral-50 p-4 shadow-sm`,children:[(0,i.jsx)(r,{size:`md`,variant:`primary`,label:`데이터를 불러오는 중입니다...`}),(0,i.jsx)(`p`,{className:`mt-3 text-xs text-neutral-600`,children:`데이터를 불러오는 중입니다...`})]})},u=[`Default`,`Variants`,`Sizes`,`InContainer`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <CircularProgress variant="primary" size="md" />
        <span className="text-xs text-neutral-600">Primary</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <CircularProgress variant="secondary" size="md" />
        <span className="text-xs text-neutral-600">Secondary</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <CircularProgress variant="destructive" size="md" />
        <span className="text-xs text-neutral-600">Destructive</span>
      </div>
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-6">
      <div className="flex flex-col items-center gap-2">
        <CircularProgress size="sm" />
        <span className="text-xs text-neutral-600">Small (30px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <CircularProgress size="md" />
        <span className="text-xs text-neutral-600">Medium (50px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <CircularProgress size="lg" />
        <span className="text-xs text-neutral-600">Large (100px)</span>
      </div>
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="relative flex h-48 w-80 flex-col items-center justify-center rounded border border-neutral-300 bg-neutral-50 p-4 shadow-sm">
      <CircularProgress size="md" variant="primary" label="데이터를 불러오는 중입니다..." />
      <p className="mt-3 text-xs text-neutral-600">
        데이터를 불러오는 중입니다...
      </p>
    </div>
}`,...l.parameters?.docs?.source}}}})))()}d();export{o as Default,l as InContainer,c as Sizes,s as Variants,u as __namedExportsOrder,a as default};