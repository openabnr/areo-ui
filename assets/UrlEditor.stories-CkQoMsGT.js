import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-BgbBaVxq.js";import{n as r,t as i}from"./UrlEditor-HI3P4wMM.js";var a,o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{a=t(),r(),o=n(),s=t(),c=`도면 서비스 안내 및 문서 링크:
- 메인 사이트: https://mars2.abonaro.kr
- 도움말 문서: www.google.com
- 백엔드 WMS 엔드포인트: http://192.168.1.74:38478`,l={title:`Components/UrlEditor`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`inline-radio`,options:[`default`,`ghost`],description:`에디터 테두리 및 배경 테마 스타일`},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`],description:`에디터 높이 및 폰트 행간 크기`},disabled:{control:`boolean`,description:`비활성화 여부`},readOnly:{control:`boolean`,description:`읽기 전용 여부 (링크 클릭은 유지)`},length:{control:`number`,description:`최대 허용 바이트(Byte) 수`},value:{control:`text`,description:`에디터 내용 텍스트 (줄바꿈 지원)`},onChange:{action:`changed`,description:`블러 시점에 내용이 변경되었을 때 호출되는 콜백 함수`}},args:{variant:`default`,size:`md`,disabled:!1,readOnly:!1,className:`w-96 min-h-24 p-2`}},u={args:{value:c}},d={render:()=>(0,o.jsxs)(`div`,{className:`flex w-96 flex-col gap-4`,children:[(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Small (sm)`}),(0,o.jsx)(i,{size:`sm`,value:`공식 문서: https://openlayers.org`,className:`w-full`},`size-sm`)]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Medium (md - 기본값)`}),(0,o.jsx)(i,{size:`md`,value:`공식 문서: https://openlayers.org`,className:`w-full`},`size-md`)]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Large (lg)`}),(0,o.jsx)(i,{size:`lg`,value:`공식 문서: https://openlayers.org`,className:`w-full`},`size-lg`)]})]})},f={render:()=>(0,o.jsxs)(`div`,{className:`flex w-96 flex-col gap-4`,children:[(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Default (테두리 및 흰색 배경)`}),(0,o.jsx)(i,{variant:`default`,value:`포털 주소: https://naver.com`,className:`w-full p-2`},`variant-default`)]}),(0,o.jsxs)(`div`,{className:`rounded bg-neutral-100 p-2`,children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Ghost (투명 배경 및 테두리 없음)`}),(0,o.jsx)(i,{variant:`ghost`,value:`포털 주소: https://naver.com`,className:`w-full`},`variant-ghost`)]})]})},p={render:()=>(0,o.jsxs)(`div`,{className:`flex w-96 flex-col gap-4`,children:[(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`ReadOnly (읽기 전용 - 텍스트 수정 불가, 링크 클릭 가능)`}),(0,o.jsx)(i,{readOnly:!0,value:`검색 포털: https://google.com
읽기 전용 상태입니다.`,className:`w-full p-2`},`state-readonly`)]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Disabled (비활성화 - 수정 및 링크 클릭 불가)`}),(0,o.jsx)(i,{disabled:!0,value:`비활성 URL: https://google.com
클릭 및 선택이 비활성화됩니다.`,className:`w-full p-2`},`state-disabled`)]})]})},m={render:function(){let[e,t]=(0,a.useState)(`https://github.com`);return(0,o.jsxs)(`div`,{className:`flex w-96 flex-col gap-1.5`,children:[(0,o.jsx)(i,{length:50,value:e,onChange:t,className:`min-h-20 w-full p-2`},`byte-limit`),(0,o.jsx)(`div`,{className:`flex justify-end text-2xs text-neutral-500`,children:(0,o.jsxs)(`span`,{children:[`최대 제한: `,50,` Bytes (초과 입력 방지)`]})})]})}},h={render:function(e){let[t,n]=(0,a.useState)(`참고 사이트: https://postgis.net/documentation/`);return(0,o.jsxs)(`div`,{className:`flex w-96 flex-col items-center gap-3`,children:[(0,o.jsxs)(`div`,{className:`w-full rounded border border-secondary-border bg-surface-muted px-3 py-1.5 text-xs break-all`,children:[(0,o.jsx)(`strong`,{children:`현재 저장된 값 (onBlur 갱신):`}),` `,t]}),(0,s.createElement)(i,{...e,key:`controlled-editor`,value:t,onChange:t=>{n(t),e.onChange?.(t)},className:`min-h-24 w-full p-2`})]})}},g=[`Default`,`Sizes`,`Variants`,`States`,`ByteLimit`,`Controlled`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    value: sampleUrlText
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-96 flex-col gap-4">\r
      <div>\r
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">\r
          Small (sm)\r
        </span>\r
        <UrlEditor key="size-sm" size="sm" value="공식 문서: https://openlayers.org" className="w-full" />\r
      </div>\r
      <div>\r
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">\r
          Medium (md - 기본값)\r
        </span>\r
        <UrlEditor key="size-md" size="md" value="공식 문서: https://openlayers.org" className="w-full" />\r
      </div>\r
      <div>\r
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">\r
          Large (lg)\r
        </span>\r
        <UrlEditor key="size-lg" size="lg" value="공식 문서: https://openlayers.org" className="w-full" />\r
      </div>\r
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-96 flex-col gap-4">\r
      <div>\r
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">\r
          Default (테두리 및 흰색 배경)\r
        </span>\r
        <UrlEditor key="variant-default" variant="default" value="포털 주소: https://naver.com" className="w-full p-2" />\r
      </div>\r
      <div className="rounded bg-neutral-100 p-2">\r
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">\r
          Ghost (투명 배경 및 테두리 없음)\r
        </span>\r
        <UrlEditor key="variant-ghost" variant="ghost" value="포털 주소: https://naver.com" className="w-full" />\r
      </div>\r
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-96 flex-col gap-4">\r
      <div>\r
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">\r
          ReadOnly (읽기 전용 - 텍스트 수정 불가, 링크 클릭 가능)\r
        </span>\r
        <UrlEditor key="state-readonly" readOnly value={\`검색 포털: https://google.com\\n읽기 전용 상태입니다.\`} className="w-full p-2" />\r
      </div>\r
      <div>\r
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">\r
          Disabled (비활성화 - 수정 및 링크 클릭 불가)\r
        </span>\r
        <UrlEditor key="state-disabled" disabled value={\`비활성 URL: https://google.com\\n클릭 및 선택이 비활성화됩니다.\`} className="w-full p-2" />\r
      </div>\r
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const maxBytes = 50;
    const [text, setText] = useState('https://github.com');
    return <div className="flex w-96 flex-col gap-1.5">\r
        <UrlEditor key="byte-limit" length={maxBytes} value={text} onChange={setText} className="min-h-20 w-full p-2" />\r
        <div className="flex justify-end text-2xs text-neutral-500">\r
          <span>최대 제한: {maxBytes} Bytes (초과 입력 방지)</span>\r
        </div>\r
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [content, setContent] = useState('참고 사이트: https://postgis.net/documentation/');
    return <div className="flex w-96 flex-col items-center gap-3">\r
        <div className="w-full rounded border border-secondary-border bg-surface-muted px-3 py-1.5 text-xs break-all">\r
          <strong>현재 저장된 값 (onBlur 갱신):</strong> {content}\r
        </div>\r
        <UrlEditor {...args} key="controlled-editor" value={content} onChange={val => {
        setContent(val);
        args.onChange?.(val);
      }} className="min-h-24 w-full p-2" />\r
      </div>;
  }
}`,...h.parameters?.docs?.source}}}})))()}_();export{m as ByteLimit,h as Controlled,u as Default,d as Sizes,p as States,f as Variants,g as __namedExportsOrder,l as default};