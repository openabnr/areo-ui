import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-BgbBaVxq.js";import{c as r,r as i,t as a}from"./utils-Cjde27Em.js";import{n as o,t as s}from"./dist-81uMrw1m.js";function c({size:e=`md`,variant:t=`default`,value:n,defaultValue:r,className:o,length:s,onChange:c,ref:f,...p}){let m=n!==void 0,[h,g]=(0,l.useState)(r??``),_=m?n:h;return(0,u.jsx)(`textarea`,{ref:f,className:a(d({variant:t,size:e}),o),value:_,onChange:e=>{let t=e.target.value;s&&i(t)>s||(m||g(t),c?.(e))},spellCheck:`false`,autoComplete:`off`,...p})}var l,u,d;function f(){return(f=e((()=>{l=t(),o(),r(),u=n(),d=s([`font-sans`,`box-border w-full resize-none overflow-y-auto rounded-none border text-xs font-normal shadow-none transition-colors outline-none`,`border-secondary-border bg-white px-1.75 py-1 text-secondary-foreground`,`placeholder:text-text-disabled hover:border-secondary-border-hover focus:border-primary active:border-primary`,`read-only:cursor-default read-only:border-secondary-border read-only:text-muted-foreground read-only:focus:border-secondary-border-active`,`disabled:cursor-not-allowed disabled:border-border-disabled disabled:bg-surface-muted/50 disabled:text-text-disabled`],{variants:{variant:{default:``,ghost:[`border-transparent bg-transparent shadow-none`,`hover:border-transparent focus:border-transparent active:border-transparent`,`read-only:border-transparent`,`disabled:border-transparent disabled:bg-transparent`]},size:{sm:`min-h-5.25 py-0.5 leading-3.75`,md:`min-h-6.75 py-1 leading-4.25`,lg:`min-h-9 py-1.5 leading-4.5`}},defaultVariants:{variant:`default`,size:`md`}}),c.__docgenInfo={description:``,methods:[],displayName:`TextArea`,props:{size:{defaultValue:{value:`'md'`,computed:!1},required:!1},variant:{defaultValue:{value:`'default'`,computed:!1},required:!1}}}})))()}var p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{p=t(),f(),m=n(),h={title:`Components/TextArea`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`inline-radio`,options:[`default`,`ghost`],description:`테두리 및 배경 테마 스타일`},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`],description:`높이 및 텍스트 행간 크기`},disabled:{control:`boolean`,description:`비활성화 여부`},readOnly:{control:`boolean`,description:`읽기 전용 여부`},length:{control:`number`,description:`최대 허용 바이트(Byte) 수`},placeholder:{control:`text`,description:`플레이스홀더 텍스트`},rows:{control:`number`,description:`기본 노출 행 수`},onChange:{action:`changed`,description:`텍스트 변경 시 호출되는 이벤트 핸들러`}},args:{variant:`default`,size:`md`,disabled:!1,readOnly:!1,placeholder:`내용을 입력해주세요.`,rows:4,className:`w-80`}},g={args:{defaultValue:`기본 텍스트 내용입니다.`}},_={render:()=>(0,m.jsxs)(`div`,{className:`flex w-80 flex-col gap-4`,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Small (sm)`}),(0,m.jsx)(c,{size:`sm`,rows:3,placeholder:`Small 크기 텍스트영역`})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Medium (md - 기본값)`}),(0,m.jsx)(c,{size:`md`,rows:3,placeholder:`Medium 크기 텍스트영역`})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Large (lg)`}),(0,m.jsx)(c,{size:`lg`,rows:3,placeholder:`Large 크기 텍스트영역`})]})]})},v={render:()=>(0,m.jsxs)(`div`,{className:`flex w-80 flex-col gap-4`,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Default (테두리 및 흰색 배경)`}),(0,m.jsx)(c,{variant:`default`,rows:3,defaultValue:`테두리가 있는 기본 형태입니다.`})]}),(0,m.jsxs)(`div`,{className:`rounded bg-neutral-100 p-2`,children:[(0,m.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Ghost (배경/테두리 투명)`}),(0,m.jsx)(c,{variant:`ghost`,rows:3,defaultValue:`투명한 배경과 테두리를 가진 Ghost 형태입니다.`})]})]})},y={render:()=>(0,m.jsxs)(`div`,{className:`flex w-80 flex-col gap-4`,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`ReadOnly (읽기 전용)`}),(0,m.jsx)(c,{readOnly:!0,rows:3,defaultValue:`이 텍스트는 수정할 수 없는 읽기 전용 상태입니다.`})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Disabled (비활성화)`}),(0,m.jsx)(c,{disabled:!0,rows:3,defaultValue:`비활성화되어 입력할 수 없습니다.`})]})]})},b={render:function(){let[e,t]=(0,p.useState)(``);return(0,m.jsxs)(`div`,{className:`flex w-80 flex-col gap-1.5`,children:[(0,m.jsx)(c,{length:20,rows:3,value:e,onChange:e=>t(e.target.value),placeholder:`최대 20바이트까지만 입력 가능합니다.`}),(0,m.jsx)(`div`,{className:`flex justify-end text-2xs text-neutral-500`,children:(0,m.jsxs)(`span`,{children:[`최대 제한: `,20,` Bytes (한글 약 6~10자)`]})})]})}},x={render:function(e){let[t,n]=(0,p.useState)(`공간 쿼리 메모 작성`);return(0,m.jsxs)(`div`,{className:`flex w-80 flex-col items-center gap-3`,children:[(0,m.jsxs)(`div`,{className:`w-full rounded border border-secondary-border bg-surface-muted px-3 py-1.5 text-xs`,children:[(0,m.jsx)(`strong`,{children:`현재 글자 수:`}),` `,t.length,`자`]}),(0,m.jsx)(c,{...e,value:t,onChange:t=>{n(t.target.value),e.onChange?.(t)}})]})}},S=[`Default`,`Sizes`,`Variants`,`States`,`ByteLimit`,`Controlled`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '기본 텍스트 내용입니다.'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">\r
      <div>\r
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">\r
          Small (sm)\r
        </span>\r
        <TextArea size="sm" rows={3} placeholder="Small 크기 텍스트영역" />\r
      </div>\r
      <div>\r
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">\r
          Medium (md - 기본값)\r
        </span>\r
        <TextArea size="md" rows={3} placeholder="Medium 크기 텍스트영역" />\r
      </div>\r
      <div>\r
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">\r
          Large (lg)\r
        </span>\r
        <TextArea size="lg" rows={3} placeholder="Large 크기 텍스트영역" />\r
      </div>\r
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">\r
      <div>\r
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">\r
          Default (테두리 및 흰색 배경)\r
        </span>\r
        <TextArea variant="default" rows={3} defaultValue="테두리가 있는 기본 형태입니다." />\r
      </div>\r
      <div className="rounded bg-neutral-100 p-2">\r
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">\r
          Ghost (배경/테두리 투명)\r
        </span>\r
        <TextArea variant="ghost" rows={3} defaultValue="투명한 배경과 테두리를 가진 Ghost 형태입니다." />\r
      </div>\r
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">\r
      <div>\r
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">\r
          ReadOnly (읽기 전용)\r
        </span>\r
        <TextArea readOnly rows={3} defaultValue="이 텍스트는 수정할 수 없는 읽기 전용 상태입니다." />\r
      </div>\r
      <div>\r
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">\r
          Disabled (비활성화)\r
        </span>\r
        <TextArea disabled rows={3} defaultValue="비활성화되어 입력할 수 없습니다." />\r
      </div>\r
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const maxBytes = 20;
    const [text, setText] = useState('');
    return <div className="flex w-80 flex-col gap-1.5">\r
        <TextArea length={maxBytes} rows={3} value={text} onChange={e => setText(e.target.value)} placeholder={\`최대 \${maxBytes}바이트까지만 입력 가능합니다.\`} />\r
        <div className="flex justify-end text-2xs text-neutral-500">\r
          <span>최대 제한: {maxBytes} Bytes (한글 약 6~10자)</span>\r
        </div>\r
      </div>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [content, setContent] = useState('공간 쿼리 메모 작성');
    return <div className="flex w-80 flex-col items-center gap-3">\r
        <div className="w-full rounded border border-secondary-border bg-surface-muted px-3 py-1.5 text-xs">\r
          <strong>현재 글자 수:</strong> {content.length}자\r
        </div>\r
        <TextArea {...args} value={content} onChange={e => {
        setContent(e.target.value);
        args.onChange?.(e);
      }} />\r
      </div>;
  }
}`,...x.parameters?.docs?.source}}}})))()}C();export{b as ByteLimit,x as Controlled,g as Default,_ as Sizes,y as States,v as Variants,S as __namedExportsOrder,h as default};