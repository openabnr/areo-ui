import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-DKr3KdmY.js";import{n,t as r}from"./Button-_ArORYID.js";import{a as i,c as a,i as o,n as s,o as c,r as l,t as u}from"./Toast-BlCO7rTg.js";var d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),s(),d=t(),f={title:`Components/Toast`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{dismissOnClick:{control:`boolean`,description:`토스트 클릭 시 즉시 닫힘 여부`,table:{defaultValue:{summary:`true`}}},position:{control:`select`,options:[`top-left`,`top-center`,`top-right`,`bottom-left`,`bottom-center`,`bottom-right`],description:`토스트 노출 위치`,table:{defaultValue:{summary:`top-center`}}}}},p={args:{dismissOnClick:!0},render:function(e){return(0,d.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,d.jsx)(u,{...e}),(0,d.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,d.jsx)(r,{size:`sm`,variant:`outline-secondary`,onClick:()=>i(`레이어 저장이 완료되었습니다.`,{description:`PostGIS 데이터베이스에 피처 변경사항이 반영되었습니다.`}),children:`성공 (Success)`}),(0,d.jsx)(r,{size:`sm`,variant:`outline-secondary`,onClick:()=>o(`새로운 세션이 시작되었습니다.`,{description:`작업 영역 동기화 채널이 활성화되었습니다.`}),children:`안내 (Info)`}),(0,d.jsx)(r,{size:`sm`,variant:`outline-secondary`,onClick:()=>c(`네트워크 대역폭 경고`,{description:`P2P 데이터 채널 레이턴시가 200ms를 초과하고 있습니다.`}),children:`경고 (Warning)`}),(0,d.jsx)(r,{size:`sm`,variant:`destructive`,onClick:()=>l(`피처 렌더링 실패`,{description:`유효하지 않은 지오메트리 형식(Polygon)이 감지되었습니다.`}),children:`에러 (Error)`})]})]})}},m={render:function(){return(0,d.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,d.jsx)(u,{dismissOnClick:!0}),(0,d.jsxs)(`div`,{className:`flex gap-2`,children:[(0,d.jsx)(r,{size:`sm`,variant:`primary`,onClick:()=>o(`클릭하면 즉시 사라지는 토스트`,{description:`토스트 영역 아무 곳이나 클릭해 보세요.`}),children:`클릭하여 닫기 (기본값)`}),(0,d.jsx)(r,{size:`sm`,variant:`outline-secondary`,onClick:()=>a(`모든 토스트 닫기`,{description:`화면에 열려 있는 모든 알림을 지웁니다.`,action:{label:`모두 닫기`,onClick:()=>a.dismiss()}}),children:`전체 닫기 액션`})]})]})}},h={render:function(){return(0,d.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,d.jsx)(u,{dismissOnClick:!0}),(0,d.jsx)(`div`,{className:`flex gap-2`,children:(0,d.jsx)(r,{size:`sm`,variant:`outline-secondary`,onClick:()=>a(`벡터 스타일 편집 취소 확인`,{description:`저장하지 않은 스타일 정보가 모두 초기화됩니다.`,action:{label:`복구`,onClick:()=>{i(`스타일이 복구되었습니다.`)}},cancel:{label:`무시`,onClick:()=>{}}}),children:`Action & Cancel 토스트`})})]})}},g={render:function(){return(0,d.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,d.jsx)(u,{dismissOnClick:!0}),(0,d.jsx)(`div`,{className:`flex gap-2`,children:(0,d.jsx)(r,{size:`sm`,variant:`primary`,onClick:()=>{let e=new Promise((e,t)=>{setTimeout(()=>{Math.random()>.3?e({layerName:`parcels_2026`}):t(Error(`서버 커넥션 타임아웃`))},1500)});a.promise(e,{loading:`지오메트리 단순화 및 압축 진행 중...`,success:e=>`[${e.layerName}] 레이어가 성공적으로 배포되었습니다.`,error:e=>`처리 실패: ${e.message}`})},children:`공간 데이터 업로드 시뮬레이션`})})]})}},_=[`StatusVariants`,`ClickToDismissComparison`,`WithInteractiveActions`,`AsyncPromiseWorkflow`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    dismissOnClick: true
  },
  render: function Render(args) {
    return <div className="flex flex-col gap-4">
        <Toaster {...args} />
        <div className="flex flex-wrap gap-2">
          <Button size="sm" variant="outline-secondary" onClick={() => showToastSuccess('레이어 저장이 완료되었습니다.', {
          description: 'PostGIS 데이터베이스에 피처 변경사항이 반영되었습니다.'
        })}>
            성공 (Success)
          </Button>

          <Button size="sm" variant="outline-secondary" onClick={() => showToastMessage('새로운 세션이 시작되었습니다.', {
          description: '작업 영역 동기화 채널이 활성화되었습니다.'
        })}>
            안내 (Info)
          </Button>

          <Button size="sm" variant="outline-secondary" onClick={() => showToastWarning('네트워크 대역폭 경고', {
          description: 'P2P 데이터 채널 레이턴시가 200ms를 초과하고 있습니다.'
        })}>
            경고 (Warning)
          </Button>

          <Button size="sm" variant="destructive" onClick={() => showToastError('피처 렌더링 실패', {
          description: '유효하지 않은 지오메트리 형식(Polygon)이 감지되었습니다.'
        })}>
            에러 (Error)
          </Button>
        </div>
      </div>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <div className="flex flex-col gap-4">
        <Toaster dismissOnClick />
        <div className="flex gap-2">
          <Button size="sm" variant="primary" onClick={() => showToastMessage('클릭하면 즉시 사라지는 토스트', {
          description: '토스트 영역 아무 곳이나 클릭해 보세요.'
        })}>
            클릭하여 닫기 (기본값)
          </Button>

          <Button size="sm" variant="outline-secondary" onClick={() => toast('모든 토스트 닫기', {
          description: '화면에 열려 있는 모든 알림을 지웁니다.',
          action: {
            label: '모두 닫기',
            onClick: () => toast.dismiss()
          }
        })}>
            전체 닫기 액션
          </Button>
        </div>
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <div className="flex flex-col gap-4">
        <Toaster dismissOnClick />
        <div className="flex gap-2">
          <Button size="sm" variant="outline-secondary" onClick={() => toast('벡터 스타일 편집 취소 확인', {
          description: '저장하지 않은 스타일 정보가 모두 초기화됩니다.',
          action: {
            label: '복구',
            onClick: () => {
              showToastSuccess('스타일이 복구되었습니다.');
            }
          },
          cancel: {
            label: '무시',
            onClick: () => {
              // 취소 버튼 자체의 기본 동작 수행
            }
          }
        })}>
            Action & Cancel 토스트
          </Button>
        </div>
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <div className="flex flex-col gap-4">
        <Toaster dismissOnClick />
        <div className="flex gap-2">
          <Button size="sm" variant="primary" onClick={() => {
          const mockAsyncOperation = new Promise<{
            layerName: string;
          }>((resolve, reject) => {
            setTimeout(() => {
              if (Math.random() > 0.3) {
                resolve({
                  layerName: 'parcels_2026'
                });
              } else {
                reject(new Error('서버 커넥션 타임아웃'));
              }
            }, 1500);
          });
          toast.promise(mockAsyncOperation, {
            loading: '지오메트리 단순화 및 압축 진행 중...',
            success: data => \`[\${data.layerName}] 레이어가 성공적으로 배포되었습니다.\`,
            error: (err: Error) => \`처리 실패: \${err.message}\`
          });
        }}>
            공간 데이터 업로드 시뮬레이션
          </Button>
        </div>
      </div>;
  }
}`,...g.parameters?.docs?.source}}}})))()}v();export{g as AsyncPromiseWorkflow,m as ClickToDismissComparison,p as StatusVariants,h as WithInteractiveActions,_ as __namedExportsOrder,f as default};