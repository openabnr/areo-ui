import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-Di8_Mevq.js";import{l as n,t as r}from"./utils-CXswP1E2.js";import{n as i,t as a}from"./dist-DxSsHBlF.js";import{n as o,t as s}from"./Button-DaMgOn2H.js";function c(e){return(0,d.jsx)(`svg`,{"data-slot":`alert-icon`,"aria-hidden":`true`,focusable:`false`,viewBox:`0 0 20 20`,className:`mt-0.5 size-5 shrink-0`,fill:`none`,children:e===`warning`?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`path`,{d:`M10 2L1 18h18L10 2z`,className:`fill-alert-warning-icon`}),(0,d.jsx)(`path`,{d:`M10 8v4M10 14.5v1`,stroke:`var(--color-alert-warning-bg, #fef5d1)`,strokeWidth:`2`,strokeLinecap:`round`})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`circle`,{cx:`10`,cy:`10`,r:`10`,className:p[e]}),e===`success`?(0,d.jsx)(`path`,{d:`M6 10.2l2.6 2.6L14 7.5`,stroke:`#ffffff`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`}):(0,d.jsx)(`path`,{d:`M10 5.5v5M10 13.5v1`,stroke:`#ffffff`,strokeWidth:`2`,strokeLinecap:`round`})]})})}function l({className:e,variant:t=`info`,icon:n,title:i,children:a,...o}){let s=t??`info`,l=n===void 0?c(s):n,u=i!=null&&i!==!1&&i!==``,p=a!=null&&a!==!1;return(0,d.jsx)(`div`,{role:`alert`,"data-slot":`alert`,className:r(f({variant:s}),e),...o,children:(0,d.jsxs)(`div`,{className:`flex items-start gap-3`,children:[l,(0,d.jsxs)(`div`,{className:`flex grow flex-col gap-1.5 pt-0.5`,children:[u&&(0,d.jsx)(`span`,{"data-slot":`alert-title`,className:`text-sm font-bold tracking-tight`,children:i}),p&&(0,d.jsx)(`div`,{"data-slot":`alert-description`,className:`text-xs leading-relaxed`,children:a})]})]})})}function u({className:e,...t}){return(0,d.jsx)(`div`,{"data-slot":`alert-action`,className:r(`mt-2 flex w-full justify-start`,e),...t})}var d,f,p;function m(){return(m=e((()=>{i(),n(),d=t(),f=a(`relative flex w-full flex-col gap-2 rounded-md p-4 text-xs`,{variants:{variant:{info:[`bg-alert-info-bg text-alert-info-fg`,`**:data-[slot=alert-icon]:text-alert-info-icon`],success:[`bg-alert-success-bg text-alert-success-fg`,`**:data-[slot=alert-icon]:text-alert-success-icon`],warning:[`bg-alert-warning-bg text-alert-warning-fg`,`**:data-[slot=alert-icon]:text-alert-warning-icon`],destructive:[`bg-alert-destructive-bg text-alert-destructive-fg`,`**:data-[slot=alert-icon]:text-alert-destructive-icon`]}},defaultVariants:{variant:`info`}}),p={info:`fill-alert-info-icon`,success:`fill-alert-success-icon`,destructive:`fill-alert-destructive-icon`},l.__docgenInfo={description:``,methods:[],displayName:`Alert`,props:{variant:{defaultValue:{value:`'info'`,computed:!1},required:!1}}},u.__docgenInfo={description:``,methods:[],displayName:`AlertAction`}})))()}var h,g,_,v,y,b,x;function S(){return(S=e((()=>{m(),o(),h=t(),g={title:`Components/Alert`,component:l,subcomponents:{AlertAction:u},parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`info`,`success`,`warning`,`destructive`],description:`알림 상태 및 시맨틱 컬러 토큰`},title:{control:`text`,description:`알림 타이틀`},children:{control:`text`,description:`상세 설명 텍스트`}}},_={args:{variant:`info`,title:`사용승인 요청`,children:`현재 사용 승인 요청 중입니다.`},render:e=>(0,h.jsx)(`div`,{className:`w-96`,children:(0,h.jsx)(l,{...e})})},v={render:function(){return(0,h.jsxs)(`div`,{className:`flex w-96 flex-col gap-6`,children:[(0,h.jsx)(l,{variant:`info`,title:`사용승인 요청`,children:(0,h.jsx)(`p`,{children:`현재 사용 승인 요청 중입니다.`})}),(0,h.jsx)(l,{variant:`success`,title:(0,h.jsxs)(`span`,{children:[`사용승인`,` `,(0,h.jsx)(`strong`,{className:`font-mono font-bold`,children:`2026.03.31`})]}),children:(0,h.jsx)(`p`,{children:`사용기간 (2026.04.01~2027.03.31)`})}),(0,h.jsxs)(l,{variant:`warning`,title:`사용승인 거절`,children:[(0,h.jsx)(`p`,{children:`00000한 이유로 승인이 거절되었습니다.`}),(0,h.jsx)(u,{className:`pl-0`,children:(0,h.jsx)(s,{size:`lg`,className:`w-full rounded-md border-alert-warning-btn bg-alert-warning-btn font-semibold text-white hover:border-alert-warning-btn-hover hover:bg-alert-warning-btn-hover active:border-alert-warning-btn-hover active:bg-alert-warning-btn-hover`,children:`사용 승인 재요청하기`})})]}),(0,h.jsxs)(l,{variant:`destructive`,title:`사용불가`,children:[(0,h.jsx)(`p`,{children:`현재 프로젝트는 사용 승인 후 사용 가능합니다.`}),(0,h.jsx)(u,{className:`pl-0`,children:(0,h.jsx)(s,{size:`lg`,className:`w-full rounded-md border-alert-destructive-btn bg-alert-destructive-btn font-semibold text-white hover:border-alert-destructive-btn-hover hover:bg-alert-destructive-btn-hover active:border-alert-destructive-btn-hover active:bg-alert-destructive-btn-hover`,children:`사용 승인 요청하기`})})]})]})}},y={render:function(){return(0,h.jsxs)(`div`,{className:`flex w-96 flex-col gap-4`,children:[(0,h.jsxs)(l,{variant:`warning`,title:`재요청 처리 중`,children:[(0,h.jsx)(`p`,{children:`승인 재요청 트랜잭션을 실행하고 있습니다.`}),(0,h.jsx)(u,{className:`pl-0`,children:(0,h.jsx)(s,{size:`lg`,loading:!0,className:`w-full rounded-md border-alert-warning-btn bg-alert-warning-btn text-white`,children:`처리 중...`})})]}),(0,h.jsxs)(l,{variant:`destructive`,title:`승인 불가 계정`,children:[(0,h.jsx)(`p`,{children:`요청 횟수 제한을 초과하여 버튼이 비활성화되었습니다.`}),(0,h.jsx)(u,{className:`pl-0`,children:(0,h.jsx)(s,{size:`lg`,disabled:!0,className:`w-full rounded-md border-alert-destructive-btn bg-alert-destructive-btn text-white`,children:`사용 승인 요청 불가`})})]})]})}},b={render:function(){return(0,h.jsxs)(`div`,{className:`flex w-96 flex-col gap-4`,children:[(0,h.jsx)(l,{}),(0,h.jsx)(l,{variant:null,icon:null,title:null,children:null}),(0,h.jsx)(l,{icon:(0,h.jsx)(`span`,{"aria-hidden":`true`,children:`!`}),title:!1,children:!1}),(0,h.jsx)(l,{title:``,children:`본문 설명만 표시되는 알림입니다.`})]})}},x=[`Default`,`ProjectApprovalStatuses`,`ActionButtonStates`,`EdgeCasesAndCustomIcons`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: '사용승인 요청',
    children: '현재 사용 승인 요청 중입니다.'
  },
  render: args => <div className="w-96">
      <Alert {...args} />
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <div className="flex w-96 flex-col gap-6">
        {/* 1. 사용승인 요청 (Info) */}
        <Alert variant="info" title="사용승인 요청">
          <p>현재 사용 승인 요청 중입니다.</p>
        </Alert>

        {/* 2. 사용승인 (Success) */}
        <Alert variant="success" title={<span>
              사용승인{' '}
              <strong className="font-mono font-bold">2026.03.31</strong>
            </span>}>
          <p>사용기간 (2026.04.01~2027.03.31)</p>
        </Alert>

        {/* 3. 사용승인 거절 (Warning + Button 연동) */}
        <Alert variant="warning" title="사용승인 거절">
          <p>00000한 이유로 승인이 거절되었습니다.</p>
          <AlertAction className="pl-0">
            <Button size="lg" className="w-full rounded-md border-alert-warning-btn bg-alert-warning-btn font-semibold text-white hover:border-alert-warning-btn-hover hover:bg-alert-warning-btn-hover active:border-alert-warning-btn-hover active:bg-alert-warning-btn-hover">
              사용 승인 재요청하기
            </Button>
          </AlertAction>
        </Alert>

        {/* 4. 사용불가 (Destructive + Button 연동) */}
        <Alert variant="destructive" title="사용불가">
          <p>현재 프로젝트는 사용 승인 후 사용 가능합니다.</p>
          <AlertAction className="pl-0">
            <Button size="lg" className="w-full rounded-md border-alert-destructive-btn bg-alert-destructive-btn font-semibold text-white hover:border-alert-destructive-btn-hover hover:bg-alert-destructive-btn-hover active:border-alert-destructive-btn-hover active:bg-alert-destructive-btn-hover">
              사용 승인 요청하기
            </Button>
          </AlertAction>
        </Alert>
      </div>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <div className="flex w-96 flex-col gap-4">
        <Alert variant="warning" title="재요청 처리 중">
          <p>승인 재요청 트랜잭션을 실행하고 있습니다.</p>
          <AlertAction className="pl-0">
            <Button size="lg" loading className="w-full rounded-md border-alert-warning-btn bg-alert-warning-btn text-white">
              처리 중...
            </Button>
          </AlertAction>
        </Alert>

        <Alert variant="destructive" title="승인 불가 계정">
          <p>요청 횟수 제한을 초과하여 버튼이 비활성화되었습니다.</p>
          <AlertAction className="pl-0">
            <Button size="lg" disabled className="w-full rounded-md border-alert-destructive-btn bg-alert-destructive-btn text-white">
              사용 승인 요청 불가
            </Button>
          </AlertAction>
        </Alert>
      </div>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <div className="flex w-96 flex-col gap-4">
        {/* variant, title, children 모두 생략(undefined) */}
        <Alert />

        {/* null 전달 분기 */}
        <Alert variant={null} icon={null} title={null}>
          {null}
        </Alert>

        {/* false 전달 및 커스텀 아이콘 노드 분기 */}
        <Alert icon={<span aria-hidden="true">!</span>} title={false}>
          {false}
        </Alert>

        {/* 빈 문자열('') title + 본문만 있는 경우 */}
        <Alert title="">본문 설명만 표시되는 알림입니다.</Alert>
      </div>;
  }
}`,...b.parameters?.docs?.source}}}})))()}S();export{y as ActionButtonStates,_ as Default,b as EdgeCasesAndCustomIcons,v as ProjectApprovalStatuses,x as __namedExportsOrder,g as default};