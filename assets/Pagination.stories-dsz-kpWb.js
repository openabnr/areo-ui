import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-BKXkO2qw.js";import{c as r,n as i,t as a}from"./utils-Cjde27Em.js";import{n as o,t as s}from"./dist-81uMrw1m.js";import{n as c,t as l}from"./Button-CPyB4zts.js";import{n as u,t as d}from"./createLucideIcon-zzZEfyI0.js";import{d as f,f as p,l as m,m as h,y as g}from"./icons-C_cPlx2o.js";import{n as _,t as v}from"./TextField-B1qM7auj.js";var y,b;function x(){return(x=e((()=>{u(),y={name:`ellipsis`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`1`,key:`41hilf`}],[`circle`,{cx:`19`,cy:`12`,r:`1`,key:`1wjl8i`}],[`circle`,{cx:`5`,cy:`12`,r:`1`,key:`1pcz8c`}]],aliases:[`more-horizontal`]},y.node,b=d(y)})))()}function S({length:e=5,pageCount:t=10,current:n,defaultCurrent:r=1,onChange:o,align:s=`center`,size:c=`md`,useGotoPage:u=!1,withEllipsis:d=!1,className:g,ref:_,...y}){let x=n!==void 0,[S,D]=(0,C.useState)(r),O=x?n:S,[k,A]=(0,C.useState)(``),j=(0,C.useRef)(null),M=Math.max(t,1),N=Math.trunc((O-1)/e)*e+1,P=N-1+e;P>M&&(P=M);let F=P-N+1;F<1&&(F=1);let I=e=>{A(``),e!==O&&(x||D(e),o?.(e))},L=e=>{e.preventDefault(),j.current?.blur();let t=Number.parseInt(k,10);if(Number.isNaN(t)||t<1||t>M){A(``);return}I(t)},R=e=>{A(e.currentTarget.value.trim())};return(0,w.jsxs)(`nav`,{ref:_,"aria-label":`Pagination`,className:a(T({align:s}),g),...y,children:[(0,w.jsxs)(`div`,{className:`flex items-center gap-x-1`,children:[(0,w.jsx)(`button`,{type:`button`,title:`첫 페이지로`,className:E({size:c}),onClick:()=>I(1),disabled:O===1,children:(0,w.jsx)(m,{className:`size-3.5`})}),(0,w.jsx)(`button`,{type:`button`,title:`이전 페이지`,className:E({size:c}),onClick:()=>I(O-1),disabled:O===1,children:(0,w.jsx)(h,{className:`size-3.5`})}),d&&N!==1&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`button`,{type:`button`,className:E({size:c}),onClick:()=>I(1),"aria-current":O===1?`page`:void 0,children:`1`}),(0,w.jsx)(`div`,{className:`flex items-center justify-center px-1 text-secondary-border-active`,children:(0,w.jsx)(b,{className:`size-3.5`})})]}),Array.from({length:F}).map((e,t)=>{let n=t+N,r=O===n;return(0,w.jsx)(`button`,{type:`button`,title:`${n} 페이지`,className:E({size:c}),onClick:()=>I(n),"aria-current":r?`page`:void 0,children:i(n)},n)}),d&&P!==M&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`div`,{className:`flex items-center justify-center px-1 text-secondary-border-active`,children:(0,w.jsx)(b,{className:`size-3.5`})}),(0,w.jsx)(`button`,{type:`button`,className:E({size:c}),onClick:()=>I(M),"aria-current":O===M?`page`:void 0,children:i(M)})]}),(0,w.jsx)(`button`,{type:`button`,title:`다음 페이지로`,className:E({size:c}),onClick:()=>I(O+1),disabled:O===M,children:(0,w.jsx)(p,{className:`size-3.5`})}),(0,w.jsx)(`button`,{type:`button`,title:`마지막 페이지로`,className:E({size:c}),onClick:()=>I(M),disabled:O===M,children:(0,w.jsx)(f,{className:`size-3.5`})})]}),u&&(0,w.jsxs)(`form`,{onSubmit:L,className:`ml-4 flex items-center`,children:[(0,w.jsx)(v,{ref:j,value:k,className:`mr-1 min-h-auto w-14 px-1.5 py-0.5 text-center`,placeholder:`페이지`,inputType:`integer`,onChange:R,disabled:M===1}),(0,w.jsxs)(`span`,{className:`mr-2 shrink-0 text-2xs text-secondary-border-active`,children:[`/ `,i(M)]}),(0,w.jsx)(l,{type:`submit`,size:`sm`,variant:`outline-secondary`,disabled:!k,className:`shrink-0`,children:`이동`})]})]})}var C,w,T,E;function D(){return(D=e((()=>{C=t(),o(),x(),r(),c(),g(),_(),w=n(),T=s(`box-border flex items-center select-none`,{variants:{align:{left:`justify-start`,center:`justify-center`,right:`justify-end`}},defaultVariants:{align:`center`}}),E=s([`box-border flex shrink-0 items-center justify-center rounded-none p-0.5 text-xs leading-4 outline-hidden transition-colors`,`border-0 bg-transparent text-secondary-border-active`,`hover:cursor-pointer hover:bg-surface-muted active:bg-secondary-border`,`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`,`disabled:pointer-events-none disabled:cursor-default disabled:text-text-disabled disabled:[&_svg]:fill-text-disabled`,`aria-[current=page]:cursor-default aria-[current=page]:bg-secondary-foreground aria-[current=page]:font-bold aria-[current=page]:text-white`],{variants:{size:{sm:`h-6 min-w-5 text-2xs`,md:`h-7 min-w-6 text-xs`}},defaultVariants:{size:`md`}}),S.__docgenInfo={description:``,methods:[],displayName:`Pagination`,props:{length:{defaultValue:{value:`5`,computed:!1},required:!1},pageCount:{defaultValue:{value:`10`,computed:!1},required:!1},defaultCurrent:{defaultValue:{value:`1`,computed:!1},required:!1},align:{defaultValue:{value:`'center'`,computed:!1},required:!1},size:{defaultValue:{value:`'md'`,computed:!1},required:!1},useGotoPage:{defaultValue:{value:`false`,computed:!1},required:!1},withEllipsis:{defaultValue:{value:`false`,computed:!1},required:!1}}}})))()}var O,k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{O=t(),D(),k=n(),A={title:`Components/Pagination`,component:S,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{pageCount:{control:`number`,description:`전체 페이지 수`},length:{control:`number`,description:`한 화면에 표시할 페이지 버튼 개수`},current:{control:`number`,description:`현재 활성 페이지 (제어 컴포넌트)`},defaultCurrent:{control:`number`,description:`초기 활성 페이지 (비제어 컴포넌트)`},size:{control:`inline-radio`,options:[`sm`,`md`],description:`페이지네이션 버튼 크기`},align:{control:`inline-radio`,options:[`left`,`center`,`right`],description:`페이지네이션 수평 정렬`},withEllipsis:{control:`boolean`,description:`시작 및 끝 페이지 고정 및 말줄임표(...) 표시 여부`},useGotoPage:{control:`boolean`,description:`페이지 직접 입력 이동 인풋 표시 여부`},onChange:{action:`pageChanged`,description:`페이지 변경 시 호출되는 콜백 함수`}},args:{pageCount:20,length:5,defaultCurrent:1,size:`md`,align:`center`,withEllipsis:!1,useGotoPage:!1}},j={args:{pageCount:10,length:5,defaultCurrent:1}},M={args:{pageCount:30,length:5,defaultCurrent:7,withEllipsis:!0}},N={args:{pageCount:50,length:5,defaultCurrent:1,useGotoPage:!0,withEllipsis:!0}},P={render:()=>(0,k.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,k.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,k.jsx)(`span`,{className:`text-2xs font-semibold text-neutral-500`,children:`Small (sm)`}),(0,k.jsx)(S,{size:`sm`,pageCount:10,length:5,defaultCurrent:3,useGotoPage:!0})]}),(0,k.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,k.jsx)(`span`,{className:`text-2xs font-semibold text-neutral-500`,children:`Medium (md)`}),(0,k.jsx)(S,{size:`md`,pageCount:10,length:5,defaultCurrent:3,useGotoPage:!0})]})]})},F={render:()=>(0,k.jsxs)(`div`,{className:`flex w-140 flex-col gap-6 rounded border border-neutral-200 p-4`,children:[(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`span`,{className:`mb-2 block text-2xs font-semibold text-neutral-500`,children:`왼쪽 정렬 (align: left)`}),(0,k.jsx)(S,{align:`left`,pageCount:10,defaultCurrent:1})]}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`span`,{className:`mb-2 block text-2xs font-semibold text-neutral-500`,children:`가운데 정렬 (align: center)`}),(0,k.jsx)(S,{align:`center`,pageCount:10,defaultCurrent:1})]}),(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`span`,{className:`mb-2 block text-2xs font-semibold text-neutral-500`,children:`오른쪽 정렬 (align: right)`}),(0,k.jsx)(S,{align:`right`,pageCount:10,defaultCurrent:1})]})]})},I={render:function(e){let[t,n]=(0,O.useState)(3);return(0,k.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,k.jsxs)(`div`,{className:`rounded border border-secondary-border bg-surface-muted px-3 py-1.5 text-xs`,children:[(0,k.jsx)(`strong`,{children:`현재 선택된 페이지:`}),` `,t,` /`,` `,e.pageCount??20]}),(0,k.jsx)(S,{...e,current:t,onChange:t=>{n(t),e.onChange?.(t)}})]})}},L=[`Default`,`WithEllipsis`,`WithGotoPage`,`Sizes`,`Alignment`,`Controlled`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    pageCount: 10,
    length: 5,
    defaultCurrent: 1
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    pageCount: 30,
    length: 5,
    defaultCurrent: 7,
    withEllipsis: true
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    pageCount: 50,
    length: 5,
    defaultCurrent: 1,
    useGotoPage: true,
    withEllipsis: true
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}}})))()}R();export{F as Alignment,I as Controlled,j as Default,P as Sizes,M as WithEllipsis,N as WithGotoPage,L as __namedExportsOrder,A as default};