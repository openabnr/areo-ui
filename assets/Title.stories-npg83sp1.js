import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-BgbBaVxq.js";import{n,t as r}from"./Title-CLICyi3z.js";var i,a,o,s,c,l,u;function d(){return(d=e((()=>{n(),i=t(),a={title:`Components/Title`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{indicator:{control:`inline-radio`,options:[`none`,`bullet-orange`,`bullet-red`,`doc`],description:`제목 앞부분에 노출할 인디케이터 아이콘 유형`},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`],description:`제목 텍스트 및 라인 높이 크기`},as:{control:`select`,options:[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`span`,`div`],description:`렌더링할 시맨틱 HTML 태그`},children:{control:`text`,description:`제목 내용 텍스트`}},args:{as:`span`,size:`md`,indicator:`bullet-orange`,children:`레이어 속성 설정`}},o={args:{indicator:`bullet-orange`,size:`md`,children:`레이어 속성 설정`}},s={render:()=>(0,i.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`None (인디케이터 없음)`}),(0,i.jsx)(r,{indicator:`none`,children:`인디케이터 없는 기본 제목`})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Bullet Orange (오렌지 불릿)`}),(0,i.jsx)(r,{indicator:`bullet-orange`,children:`주요 설정 항목`})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Bullet Red (레드 불릿)`}),(0,i.jsx)(r,{indicator:`bullet-red`,children:`필수 입력 및 주의사항`})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Doc (문서 아이콘)`}),(0,i.jsx)(r,{indicator:`doc`,children:`프로젝트 사양서 문서`})]})]})},c={render:()=>(0,i.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Small (sm - 12px)`}),(0,i.jsx)(r,{size:`sm`,indicator:`bullet-orange`,children:`Small 크기 서브 타이틀`})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Medium (md - 14px, 기본값)`}),(0,i.jsx)(r,{size:`md`,indicator:`bullet-orange`,children:`Medium 크기 섹션 타이틀`})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Large (lg - 16px)`}),(0,i.jsx)(r,{size:`lg`,indicator:`bullet-orange`,children:`Large 크기 메인 헤더 타이틀`})]})]})},l={render:()=>(0,i.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,i.jsx)(r,{as:`h1`,size:`lg`,indicator:`doc`,children:`H1 페이지 메인 제목`}),(0,i.jsx)(r,{as:`h2`,size:`md`,indicator:`bullet-orange`,children:`H2 섹션 그룹 제목`}),(0,i.jsx)(r,{as:`h3`,size:`sm`,indicator:`bullet-red`,children:`H3 상세 항목 제목`}),(0,i.jsx)(r,{as:`div`,size:`sm`,indicator:`none`,children:`DIV 컨테이너 인라인 제목`})]})},u=[`Default`,`Indicators`,`Sizes`,`SemanticHeadingTags`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    indicator: 'bullet-orange',
    size: 'md',
    children: '레이어 속성 설정'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">\r
      <div>\r
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">\r
          None (인디케이터 없음)\r
        </span>\r
        <Title indicator="none">인디케이터 없는 기본 제목</Title>\r
      </div>\r
\r
      <div>\r
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">\r
          Bullet Orange (오렌지 불릿)\r
        </span>\r
        <Title indicator="bullet-orange">주요 설정 항목</Title>\r
      </div>\r
\r
      <div>\r
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">\r
          Bullet Red (레드 불릿)\r
        </span>\r
        <Title indicator="bullet-red">필수 입력 및 주의사항</Title>\r
      </div>\r
\r
      <div>\r
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">\r
          Doc (문서 아이콘)\r
        </span>\r
        <Title indicator="doc">프로젝트 사양서 문서</Title>\r
      </div>\r
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">\r
      <div>\r
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">\r
          Small (sm - 12px)\r
        </span>\r
        <Title size="sm" indicator="bullet-orange">\r
          Small 크기 서브 타이틀\r
        </Title>\r
      </div>\r
\r
      <div>\r
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">\r
          Medium (md - 14px, 기본값)\r
        </span>\r
        <Title size="md" indicator="bullet-orange">\r
          Medium 크기 섹션 타이틀\r
        </Title>\r
      </div>\r
\r
      <div>\r
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">\r
          Large (lg - 16px)\r
        </span>\r
        <Title size="lg" indicator="bullet-orange">\r
          Large 크기 메인 헤더 타이틀\r
        </Title>\r
      </div>\r
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">\r
      <Title as="h1" size="lg" indicator="doc">\r
        H1 페이지 메인 제목\r
      </Title>\r
      <Title as="h2" size="md" indicator="bullet-orange">\r
        H2 섹션 그룹 제목\r
      </Title>\r
      <Title as="h3" size="sm" indicator="bullet-red">\r
        H3 상세 항목 제목\r
      </Title>\r
      <Title as="div" size="sm" indicator="none">\r
        DIV 컨테이너 인라인 제목\r
      </Title>\r
    </div>
}`,...l.parameters?.docs?.source}}}})))()}d();export{o as Default,s as Indicators,l as SemanticHeadingTags,c as Sizes,u as __namedExportsOrder,a as default};