import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-CfFMW0hA.js";import{l as r,n as i,t as a}from"./utils-CXswP1E2.js";import{n as o,t as s}from"./dist-DxSsHBlF.js";import{n as c,t as l}from"./Button-Bc1aY3Nz.js";import{n as u,t as d}from"./createLucideIcon-CxaUvMz3.js";import{b as f,f as p,h as m,p as h,u as g}from"./icons-Bexzjm0v.js";import{n as _,t as v}from"./TextField-CI5KrWeN.js";var y,b;function x(){return(x=e((()=>{u(),y={name:`ellipsis`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`1`,key:`41hilf`}],[`circle`,{cx:`19`,cy:`12`,r:`1`,key:`1wjl8i`}],[`circle`,{cx:`5`,cy:`12`,r:`1`,key:`1pcz8c`}]],aliases:[`more-horizontal`]},y.node,b=d(y)})))()}function S(e,t,n){let r=Math.max(1,Math.trunc(Number.isFinite(n)?n:5)),i=Math.trunc((e-1)/r)*r+1,a=Math.min(i+r-1,t),o=Math.max(1,a-i+1);return{start:i,end:a,pages:Array.from({length:o},(e,t)=>i+t)}}function C({length:e=5,pageCount:t=10,current:n,defaultCurrent:r=1,onChange:o,align:s=`center`,size:c=`md`,useGotoPage:u=!1,withEllipsis:d=!1,className:f,ref:_,...y}){let x=n!==void 0,[C,O]=(0,w.useState)(r),k=x?n:C,[A,j]=(0,w.useState)(``),M=(0,w.useRef)(null),N=Math.max(1,Math.trunc(Number.isFinite(t)?t:1)),P=Math.min(Math.max(1,Math.trunc(Number.isFinite(k)?k:1)),N),{start:F,end:I,pages:L}=S(P,N,e),R=e=>{let t=Math.min(Math.max(1,e),N);j(``),t!==P&&(x||O(t),o?.(t))},z=e=>{e.preventDefault(),M.current?.blur();let t=A.trim(),n=/^\d+$/.test(t)?Number(t):NaN;if(Number.isNaN(n)||n<1||n>N){j(``);return}R(n)},B=e=>{j(e.currentTarget.value.trim())},V=D({size:c}),H=P<=1,U=P>=N;return(0,T.jsxs)(`nav`,{ref:_,"aria-label":`Pagination`,className:a(E({align:s}),f),...y,children:[(0,T.jsxs)(`div`,{className:`flex items-center gap-x-1`,children:[(0,T.jsx)(`button`,{type:`button`,title:`첫 페이지로`,"aria-label":`첫 페이지로`,className:V,onClick:()=>R(1),disabled:H,children:(0,T.jsx)(g,{"aria-hidden":`true`,className:`size-3.5`})}),(0,T.jsx)(`button`,{type:`button`,title:`이전 페이지`,"aria-label":`이전 페이지`,className:V,onClick:()=>R(P-1),disabled:H,children:(0,T.jsx)(m,{"aria-hidden":`true`,className:`size-3.5`})}),d&&F>1&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(`button`,{type:`button`,title:`1 페이지`,"aria-label":`1 페이지`,className:V,onClick:()=>R(1),"aria-current":P===1?`page`:void 0,children:`1`}),F>2&&(0,T.jsx)(`span`,{"aria-hidden":`true`,className:`flex items-center justify-center px-1 text-secondary-border-active`,children:(0,T.jsx)(b,{className:`size-3.5`})})]}),L.map(e=>{let t=P===e,n=`${i(e)} 페이지`;return(0,T.jsx)(`button`,{type:`button`,title:n,"aria-label":n,className:V,onClick:()=>R(e),"aria-current":t?`page`:void 0,children:i(e)},e)}),d&&I<N&&(0,T.jsxs)(T.Fragment,{children:[I<N-1&&(0,T.jsx)(`span`,{"aria-hidden":`true`,className:`flex items-center justify-center px-1 text-secondary-border-active`,children:(0,T.jsx)(b,{className:`size-3.5`})}),(0,T.jsx)(`button`,{type:`button`,title:`${i(N)} 페이지`,"aria-label":`${i(N)} 페이지`,className:V,onClick:()=>R(N),"aria-current":P===N?`page`:void 0,children:i(N)})]}),(0,T.jsx)(`button`,{type:`button`,title:`다음 페이지로`,"aria-label":`다음 페이지로`,className:V,onClick:()=>R(P+1),disabled:U,children:(0,T.jsx)(h,{"aria-hidden":`true`,className:`size-3.5`})}),(0,T.jsx)(`button`,{type:`button`,title:`마지막 페이지로`,"aria-label":`마지막 페이지로`,className:V,onClick:()=>R(N),disabled:U,children:(0,T.jsx)(p,{"aria-hidden":`true`,className:`size-3.5`})})]}),u&&(0,T.jsxs)(`form`,{onSubmit:z,className:`ml-4 flex items-center`,children:[(0,T.jsx)(v,{ref:M,size:`sm`,value:A,className:`mr-1 w-14 text-center`,placeholder:`페이지`,"aria-label":`이동할 페이지 번호`,inputType:`integer`,onChange:B,disabled:N===1}),(0,T.jsxs)(`span`,{className:`mr-2 shrink-0 text-2xs text-secondary-border-active`,children:[`/ `,i(N)]}),(0,T.jsx)(l,{type:`submit`,size:`sm`,variant:`outline-secondary`,disabled:!A||N===1,className:`shrink-0`,children:`이동`})]})]})}var w,T,E,D;function O(){return(O=e((()=>{w=t(),o(),x(),r(),c(),f(),_(),T=n(),E=s(`box-border flex items-center select-none`,{variants:{align:{left:`justify-start`,center:`justify-center`,right:`justify-end`}},defaultVariants:{align:`center`}}),D=s([`box-border flex shrink-0 items-center justify-center rounded-none p-0.5 text-xs leading-4 select-none motion-safe:transition-colors`,`border-0 bg-transparent text-secondary-border-active`,`not-disabled:not-aria-[current=page]:hover:cursor-pointer not-disabled:not-aria-[current=page]:hover:bg-surface-muted not-disabled:not-aria-[current=page]:active:bg-secondary-border`,`focus-visible:z-1 focus-visible:focus-double-ring focus-visible:outline-offset-1`,`disabled:cursor-not-allowed disabled:text-text-disabled disabled:[&_svg]:fill-text-disabled`,`aria-[current=page]:cursor-default aria-[current=page]:bg-secondary-foreground aria-[current=page]:font-bold aria-[current=page]:text-white`],{variants:{size:{sm:`h-6 min-w-5 text-2xs`,md:`h-7 min-w-6 text-xs`}},defaultVariants:{size:`md`}}),C.__docgenInfo={description:``,methods:[],displayName:`Pagination`,props:{length:{defaultValue:{value:`5`,computed:!1},required:!1},pageCount:{defaultValue:{value:`10`,computed:!1},required:!1},defaultCurrent:{defaultValue:{value:`1`,computed:!1},required:!1},align:{defaultValue:{value:`'center'`,computed:!1},required:!1},size:{defaultValue:{value:`'md'`,computed:!1},required:!1},useGotoPage:{defaultValue:{value:`false`,computed:!1},required:!1},withEllipsis:{defaultValue:{value:`false`,computed:!1},required:!1}}}})))()}function k(e){let[t,n]=(0,A.useState)(3);return(0,j.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,j.jsxs)(`div`,{className:`rounded border border-secondary-border bg-surface-muted px-3 py-1.5 text-xs`,children:[(0,j.jsx)(`strong`,{children:`현재 선택된 페이지:`}),` `,t,` /`,` `,e.pageCount??20]}),(0,j.jsx)(C,{...e,current:t,onChange:t=>{n(t),e.onChange?.(t)}})]})}var A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;function G(){return(G=e((()=>{A=t(),O(),j=n(),{expect:M,fireEvent:N,fn:P,userEvent:F,within:I}=__STORYBOOK_MODULE_TEST__,L={title:`Components/Pagination`,component:C,parameters:{layout:`centered`},tags:[`autodocs`],args:{pageCount:20,length:5,defaultCurrent:1,size:`md`,align:`center`,withEllipsis:!1,useGotoPage:!1,onChange:P()},argTypes:{pageCount:{control:`number`,description:`전체 페이지 수`},length:{control:`number`,description:`한 화면에 표시할 페이지 버튼 개수`},current:{control:`number`,description:`현재 활성 페이지 (제어 컴포넌트)`},defaultCurrent:{control:`number`,description:`초기 활성 페이지 (비제어 컴포넌트)`},size:{control:`inline-radio`,options:[`sm`,`md`],description:`페이지네이션 버튼 크기`},align:{control:`inline-radio`,options:[`left`,`center`,`right`],description:`페이지네이션 수평 정렬`},withEllipsis:{control:`boolean`,description:`시작 및 끝 페이지 고정 및 말줄임표(...) 표시 여부`},useGotoPage:{control:`boolean`,description:`페이지 직접 입력 이동 인풋 표시 여부`}}},R={args:{pageCount:10,length:5,defaultCurrent:1},play:async({canvasElement:e,args:t})=>{let n=I(e);await F.click(n.getByRole(`button`,{name:`3 페이지`})),await M(t.onChange).toHaveBeenCalledWith(3),await F.click(n.getByRole(`button`,{name:`다음 페이지로`})),await M(t.onChange).toHaveBeenCalledWith(4),await F.click(n.getByRole(`button`,{name:`이전 페이지`})),await M(t.onChange).toHaveBeenCalledWith(3),await F.click(n.getByRole(`button`,{name:`마지막 페이지로`})),await M(t.onChange).toHaveBeenCalledWith(10),await F.click(n.getByRole(`button`,{name:`첫 페이지로`})),await M(t.onChange).toHaveBeenCalledWith(1)}},z={render:e=>(0,j.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,j.jsx)(C,{...e,pageCount:30,length:5,defaultCurrent:7,withEllipsis:!0}),(0,j.jsx)(C,{pageCount:3,length:1,defaultCurrent:2,withEllipsis:!0,onChange:e.onChange})]}),play:async({canvasElement:e,args:t})=>{let n=I(e);await F.click(n.getByRole(`button`,{name:`30 페이지`})),await M(t.onChange).toHaveBeenCalledWith(30);let r=n.getAllByRole(`button`,{name:`1 페이지`});await F.click(r[0]),await M(t.onChange).toHaveBeenCalledWith(1)}},B={args:{pageCount:50,length:5,defaultCurrent:1,useGotoPage:!0,withEllipsis:!0},play:async({canvasElement:e,args:t})=>{let n=I(e),r=n.getByRole(`textbox`,{name:`이동할 페이지 번호`}),i=n.getByRole(`button`,{name:`이동`}),a=r.closest(`form`);a&&await N.submit(a),await F.type(r,`0`),await F.click(i),await M(r).toHaveValue(``),await F.type(r,`999`),await F.click(i),await M(r).toHaveValue(``),await F.type(r,`25`),await F.click(i),await M(t.onChange).toHaveBeenCalledWith(25),await F.type(r,`25`),a&&await N.submit(a)}},V={render:()=>(0,j.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,j.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,j.jsx)(`span`,{className:`text-2xs font-semibold text-neutral-500`,children:`Small (sm)`}),(0,j.jsx)(C,{size:`sm`,pageCount:10,length:5,defaultCurrent:3,useGotoPage:!0})]}),(0,j.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,j.jsx)(`span`,{className:`text-2xs font-semibold text-neutral-500`,children:`Medium (md)`}),(0,j.jsx)(C,{size:`md`,pageCount:10,length:5,defaultCurrent:3,useGotoPage:!0})]}),(0,j.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,j.jsx)(`span`,{className:`text-2xs font-semibold text-neutral-500`,children:`NaN 경계값 폴백 (pageCount=1, length=5)`}),(0,j.jsx)(C,{pageCount:NaN,length:NaN,defaultCurrent:NaN,useGotoPage:!0})]})]})},H={render:()=>(0,j.jsxs)(`div`,{className:`flex w-140 flex-col gap-6 rounded border border-neutral-200 p-4`,children:[(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`span`,{className:`mb-2 block text-2xs font-semibold text-neutral-500`,children:`왼쪽 정렬 (align: left)`}),(0,j.jsx)(C,{align:`left`,pageCount:10,defaultCurrent:1})]}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`span`,{className:`mb-2 block text-2xs font-semibold text-neutral-500`,children:`가운데 정렬 (align: center)`}),(0,j.jsx)(C,{align:`center`,pageCount:10,defaultCurrent:1})]}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`span`,{className:`mb-2 block text-2xs font-semibold text-neutral-500`,children:`오른쪽 정렬 (align: right)`}),(0,j.jsx)(C,{align:`right`,pageCount:10,defaultCurrent:1})]})]})},U={render:e=>(0,j.jsx)(k,{...e}),play:async({canvasElement:e})=>{let t=I(e);await F.click(t.getByRole(`button`,{name:`4 페이지`})),await M(t.getByText(/4 \/ 20/)).toBeInTheDocument()}},W=[`Default`,`WithEllipsis`,`WithGotoPage`,`SizesAndEdgeBounds`,`Alignment`,`Controlled`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    pageCount: 10,
    length: 5,
    defaultCurrent: 1
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);

    // 1) 개별 페이지 버튼(3 페이지) 클릭
    await userEvent.click(canvas.getByRole('button', {
      name: '3 페이지'
    }));
    await expect(args.onChange).toHaveBeenCalledWith(3);

    // 2) 다음 페이지로 클릭 -> 4 페이지
    await userEvent.click(canvas.getByRole('button', {
      name: '다음 페이지로'
    }));
    await expect(args.onChange).toHaveBeenCalledWith(4);

    // 3) 이전 페이지 클릭 -> 3 페이지
    await userEvent.click(canvas.getByRole('button', {
      name: '이전 페이지'
    }));
    await expect(args.onChange).toHaveBeenCalledWith(3);

    // 4) 마지막 페이지로 클릭 -> 10 페이지
    await userEvent.click(canvas.getByRole('button', {
      name: '마지막 페이지로'
    }));
    await expect(args.onChange).toHaveBeenCalledWith(10);

    // 5) 첫 페이지로 클릭 -> 1 페이지
    await userEvent.click(canvas.getByRole('button', {
      name: '첫 페이지로'
    }));
    await expect(args.onChange).toHaveBeenCalledWith(1);
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col items-center gap-4">
      <Pagination {...args} pageCount={30} length={5} defaultCurrent={7} withEllipsis />
      {/* start === 2, end === pageCount - 1 인 경우 양쪽 고정 버튼만 표시되고 말줄임표는 생략 */}
      <Pagination pageCount={3} length={1} defaultCurrent={2} withEllipsis onChange={args.onChange} />
    </div>,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);

    // 끝 페이지 고정 버튼(30 페이지) 클릭
    await userEvent.click(canvas.getByRole('button', {
      name: '30 페이지'
    }));
    await expect(args.onChange).toHaveBeenCalledWith(30);

    // 첫 페이지 고정 버튼(1 페이지) 클릭
    const firstPageBtns = canvas.getAllByRole('button', {
      name: '1 페이지'
    });
    await userEvent.click(firstPageBtns[0]);
    await expect(args.onChange).toHaveBeenCalledWith(1);
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    pageCount: 50,
    length: 5,
    defaultCurrent: 1,
    useGotoPage: true,
    withEllipsis: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: '이동할 페이지 번호'
    });
    const submitBtn = canvas.getByRole('button', {
      name: '이동'
    });
    const form = input.closest('form');

    // 1) 빈 값 제출 -> Number.isNaN(newPage) true 분기 (Line 141)
    if (form) {
      await fireEvent.submit(form);
    }

    // 2) 0 입력 후 제출 -> newPage < 1 true 분기 (Line 141)
    await userEvent.type(input, '0');
    await userEvent.click(submitBtn);
    await expect(input).toHaveValue('');

    // 3) 범위 초과 값(999) 입력 후 제출 -> newPage > pageCount 분기
    await userEvent.type(input, '999');
    await userEvent.click(submitBtn);
    await expect(input).toHaveValue('');

    // 4) 유효한 페이지 번호(25) 입력 후 제출 -> 25 페이지로 이동
    await userEvent.type(input, '25');
    await userEvent.click(submitBtn);
    await expect(args.onChange).toHaveBeenCalledWith(25);

    // 5) 이미 선택된 현재 페이지(25) 재제출 -> clampedPage === selectedPage 조기 return
    await userEvent.type(input, '25');
    if (form) {
      await fireEvent.submit(form);
    }
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
      <div className="flex flex-col items-center gap-1">
        <span className="text-2xs font-semibold text-neutral-500">
          NaN 경계값 폴백 (pageCount=1, length=5)
        </span>
        <Pagination pageCount={Number.NaN} length={Number.NaN} defaultCurrent={Number.NaN} useGotoPage />
      </div>
    </div>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledPaginationDemo {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: '4 페이지'
    }));
    await expect(canvas.getByText(/4 \\/ 20/)).toBeInTheDocument();
  }
}`,...U.parameters?.docs?.source}}}})))()}G();export{H as Alignment,U as Controlled,R as Default,V as SizesAndEdgeBounds,z as WithEllipsis,B as WithGotoPage,W as __namedExportsOrder,L as default};