import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-DKr3KdmY.js";import{c as r,n as i,t as a}from"./utils-CynS5U15.js";import{n as o,t as s}from"./dist-kEwxpQyq.js";import{n as c,t as l}from"./Button-_ArORYID.js";import{n as u,t as d}from"./createLucideIcon-COV-lilF.js";import{b as f,f as p,h as m,p as h,u as g}from"./icons-B81xqWwX.js";import{n as _,t as v}from"./TextField-Dd0bR61l.js";var y,b;function x(){return(x=e((()=>{u(),y={name:`ellipsis`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`1`,key:`41hilf`}],[`circle`,{cx:`19`,cy:`12`,r:`1`,key:`1wjl8i`}],[`circle`,{cx:`5`,cy:`12`,r:`1`,key:`1pcz8c`}]],aliases:[`more-horizontal`]},y.node,b=d(y)})))()}function S(e,t,n){let r=Math.max(1,Math.trunc(Number.isFinite(n)?n:5)),i=Math.trunc((e-1)/r)*r+1,a=Math.min(i+r-1,t),o=Math.max(1,a-i+1);return{start:i,end:a,pages:Array.from({length:o},(e,t)=>i+t)}}function C({length:e=5,pageCount:t=10,current:n,defaultCurrent:r=1,onChange:o,align:s=`center`,size:c=`md`,useGotoPage:u=!1,withEllipsis:d=!1,className:f,ref:_,...y}){let x=n!==void 0,[C,O]=(0,w.useState)(r),k=x?n:C,[A,j]=(0,w.useState)(``),M=(0,w.useRef)(null),N=Math.max(1,Math.trunc(Number.isFinite(t)?t:1)),P=Math.min(Math.max(1,Math.trunc(Number.isFinite(k)?k:1)),N),{start:F,end:I,pages:L}=S(P,N,e),R=e=>{let t=Math.min(Math.max(1,e),N);j(``),t!==P&&(x||O(t),o?.(t))},z=e=>{e.preventDefault(),M.current?.blur();let t=A.trim(),n=/^\d+$/.test(t)?Number(t):NaN;if(Number.isNaN(n)||n<1||n>N){j(``);return}R(n)},B=e=>{j(e.currentTarget.value.trim())},V=D({size:c}),H=P<=1,U=P>=N;return(0,T.jsxs)(`nav`,{ref:_,"aria-label":`Pagination`,className:a(E({align:s}),f),...y,children:[(0,T.jsxs)(`div`,{className:`flex items-center gap-x-1`,children:[(0,T.jsx)(`button`,{type:`button`,title:`첫 페이지로`,"aria-label":`첫 페이지로`,className:V,onClick:()=>R(1),disabled:H,children:(0,T.jsx)(g,{"aria-hidden":`true`,className:`size-3.5`})}),(0,T.jsx)(`button`,{type:`button`,title:`이전 페이지`,"aria-label":`이전 페이지`,className:V,onClick:()=>R(P-1),disabled:H,children:(0,T.jsx)(m,{"aria-hidden":`true`,className:`size-3.5`})}),d&&F>1&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(`button`,{type:`button`,title:`1 페이지`,"aria-label":`1 페이지`,className:V,onClick:()=>R(1),"aria-current":P===1?`page`:void 0,children:`1`}),F>2&&(0,T.jsx)(`span`,{"aria-hidden":`true`,className:`flex items-center justify-center px-1 text-secondary-border-active`,children:(0,T.jsx)(b,{className:`size-3.5`})})]}),L.map(e=>{let t=P===e,n=`${i(e)} 페이지`;return(0,T.jsx)(`button`,{type:`button`,title:n,"aria-label":n,className:V,onClick:()=>R(e),"aria-current":t?`page`:void 0,children:i(e)},e)}),d&&I<N&&(0,T.jsxs)(T.Fragment,{children:[I<N-1&&(0,T.jsx)(`span`,{"aria-hidden":`true`,className:`flex items-center justify-center px-1 text-secondary-border-active`,children:(0,T.jsx)(b,{className:`size-3.5`})}),(0,T.jsx)(`button`,{type:`button`,title:`${i(N)} 페이지`,"aria-label":`${i(N)} 페이지`,className:V,onClick:()=>R(N),"aria-current":P===N?`page`:void 0,children:i(N)})]}),(0,T.jsx)(`button`,{type:`button`,title:`다음 페이지로`,"aria-label":`다음 페이지로`,className:V,onClick:()=>R(P+1),disabled:U,children:(0,T.jsx)(h,{"aria-hidden":`true`,className:`size-3.5`})}),(0,T.jsx)(`button`,{type:`button`,title:`마지막 페이지로`,"aria-label":`마지막 페이지로`,className:V,onClick:()=>R(N),disabled:U,children:(0,T.jsx)(p,{"aria-hidden":`true`,className:`size-3.5`})})]}),u&&(0,T.jsxs)(`form`,{onSubmit:z,className:`ml-4 flex items-center`,children:[(0,T.jsx)(v,{ref:M,size:`sm`,value:A,className:`mr-1 w-14 text-center`,placeholder:`페이지`,"aria-label":`이동할 페이지 번호`,inputType:`integer`,onChange:B,disabled:N===1}),(0,T.jsxs)(`span`,{className:`mr-2 shrink-0 text-2xs text-secondary-border-active`,children:[`/ `,i(N)]}),(0,T.jsx)(l,{type:`submit`,size:`sm`,variant:`outline-secondary`,disabled:!A||N===1,className:`shrink-0`,children:`이동`})]})]})}var w,T,E,D;function O(){return(O=e((()=>{w=t(),o(),x(),r(),c(),f(),_(),T=n(),E=s(`box-border flex items-center select-none`,{variants:{align:{left:`justify-start`,center:`justify-center`,right:`justify-end`}},defaultVariants:{align:`center`}}),D=s([`box-border flex shrink-0 items-center justify-center rounded-none p-0.5 text-xs leading-4 select-none motion-safe:transition-colors`,`border-0 bg-transparent text-secondary-border-active`,`not-disabled:not-aria-[current=page]:hover:cursor-pointer not-disabled:not-aria-[current=page]:hover:bg-surface-muted not-disabled:not-aria-[current=page]:active:bg-secondary-border`,`focus-visible:z-1 focus-visible:focus-double-ring focus-visible:outline-offset-1`,`disabled:cursor-not-allowed disabled:text-text-disabled disabled:[&_svg]:fill-text-disabled`,`aria-[current=page]:cursor-default aria-[current=page]:bg-secondary-foreground aria-[current=page]:font-bold aria-[current=page]:text-white`],{variants:{size:{sm:`h-6 min-w-5 text-2xs`,md:`h-7 min-w-6 text-xs`}},defaultVariants:{size:`md`}}),C.__docgenInfo={description:``,methods:[],displayName:`Pagination`,props:{length:{defaultValue:{value:`5`,computed:!1},required:!1},pageCount:{defaultValue:{value:`10`,computed:!1},required:!1},defaultCurrent:{defaultValue:{value:`1`,computed:!1},required:!1},align:{defaultValue:{value:`'center'`,computed:!1},required:!1},size:{defaultValue:{value:`'md'`,computed:!1},required:!1},useGotoPage:{defaultValue:{value:`false`,computed:!1},required:!1},withEllipsis:{defaultValue:{value:`false`,computed:!1},required:!1}}}})))()}var k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{k=t(),O(),A=n(),j={title:`Components/Pagination`,component:C,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{pageCount:{control:`number`,description:`전체 페이지 수`},length:{control:`number`,description:`한 화면에 표시할 페이지 버튼 개수`},current:{control:`number`,description:`현재 활성 페이지 (제어 컴포넌트)`},defaultCurrent:{control:`number`,description:`초기 활성 페이지 (비제어 컴포넌트)`},size:{control:`inline-radio`,options:[`sm`,`md`],description:`페이지네이션 버튼 크기`},align:{control:`inline-radio`,options:[`left`,`center`,`right`],description:`페이지네이션 수평 정렬`},withEllipsis:{control:`boolean`,description:`시작 및 끝 페이지 고정 및 말줄임표(...) 표시 여부`},useGotoPage:{control:`boolean`,description:`페이지 직접 입력 이동 인풋 표시 여부`},onChange:{action:`pageChanged`,description:`페이지 변경 시 호출되는 콜백 함수`}},args:{pageCount:20,length:5,defaultCurrent:1,size:`md`,align:`center`,withEllipsis:!1,useGotoPage:!1}},M={args:{pageCount:10,length:5,defaultCurrent:1}},N={args:{pageCount:30,length:5,defaultCurrent:7,withEllipsis:!0}},P={args:{pageCount:50,length:5,defaultCurrent:1,useGotoPage:!0,withEllipsis:!0}},F={render:()=>(0,A.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,A.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,A.jsx)(`span`,{className:`text-2xs font-semibold text-neutral-500`,children:`Small (sm)`}),(0,A.jsx)(C,{size:`sm`,pageCount:10,length:5,defaultCurrent:3,useGotoPage:!0})]}),(0,A.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,A.jsx)(`span`,{className:`text-2xs font-semibold text-neutral-500`,children:`Medium (md)`}),(0,A.jsx)(C,{size:`md`,pageCount:10,length:5,defaultCurrent:3,useGotoPage:!0})]})]})},I={render:()=>(0,A.jsxs)(`div`,{className:`flex w-140 flex-col gap-6 rounded border border-neutral-200 p-4`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`span`,{className:`mb-2 block text-2xs font-semibold text-neutral-500`,children:`왼쪽 정렬 (align: left)`}),(0,A.jsx)(C,{align:`left`,pageCount:10,defaultCurrent:1})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`span`,{className:`mb-2 block text-2xs font-semibold text-neutral-500`,children:`가운데 정렬 (align: center)`}),(0,A.jsx)(C,{align:`center`,pageCount:10,defaultCurrent:1})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`span`,{className:`mb-2 block text-2xs font-semibold text-neutral-500`,children:`오른쪽 정렬 (align: right)`}),(0,A.jsx)(C,{align:`right`,pageCount:10,defaultCurrent:1})]})]})},L={render:function(e){let[t,n]=(0,k.useState)(3);return(0,A.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,A.jsxs)(`div`,{className:`rounded border border-secondary-border bg-surface-muted px-3 py-1.5 text-xs`,children:[(0,A.jsx)(`strong`,{children:`현재 선택된 페이지:`}),` `,t,` /`,` `,e.pageCount??20]}),(0,A.jsx)(C,{...e,current:t,onChange:t=>{n(t),e.onChange?.(t)}})]})}},R=[`Default`,`WithEllipsis`,`WithGotoPage`,`Sizes`,`Alignment`,`Controlled`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    pageCount: 10,
    length: 5,
    defaultCurrent: 1
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    pageCount: 30,
    length: 5,
    defaultCurrent: 7,
    withEllipsis: true
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    pageCount: 50,
    length: 5,
    defaultCurrent: 1,
    useGotoPage: true,
    withEllipsis: true
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-1">
        <span className="text-2xs font-semibold text-neutral-500">
          Small (sm)
        </span>
        <Pagination size="sm" pageCount={10} length={5} defaultCurrent={3} useGotoPage />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-2xs font-semibold text-neutral-500">
          Medium (md)
        </span>
        <Pagination size="md" pageCount={10} length={5} defaultCurrent={3} useGotoPage />
      </div>
    </div>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-140 flex-col gap-6 rounded border border-neutral-200 p-4">
      <div>
        <span className="mb-2 block text-2xs font-semibold text-neutral-500">
          왼쪽 정렬 (align: left)
        </span>
        <Pagination align="left" pageCount={10} defaultCurrent={1} />
      </div>
      <div>
        <span className="mb-2 block text-2xs font-semibold text-neutral-500">
          가운데 정렬 (align: center)
        </span>
        <Pagination align="center" pageCount={10} defaultCurrent={1} />
      </div>
      <div>
        <span className="mb-2 block text-2xs font-semibold text-neutral-500">
          오른쪽 정렬 (align: right)
        </span>
        <Pagination align="right" pageCount={10} defaultCurrent={1} />
      </div>
    </div>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [currentPage, setCurrentPage] = useState<number>(3);
    return <div className="flex flex-col items-center gap-4">
        <div className="rounded border border-secondary-border bg-surface-muted px-3 py-1.5 text-xs">
          <strong>현재 선택된 페이지:</strong> {currentPage} /{' '}
          {args.pageCount ?? 20}
        </div>
        <Pagination {...args} current={currentPage} onChange={page => {
        setCurrentPage(page);
        args.onChange?.(page);
      }} />
      </div>;
  }
}`,...L.parameters?.docs?.source}}}})))()}z();export{I as Alignment,L as Controlled,M as Default,F as Sizes,N as WithEllipsis,P as WithGotoPage,R as __namedExportsOrder,j as default};