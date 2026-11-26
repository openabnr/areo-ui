import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CfFMW0hA.js";import{n,t as r}from"./Button-Bc1aY3Nz.js";import{a as i,c as a,i as o,n as s,o as c,r as l,t as u}from"./Toast-EAiooQ_S.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{n(),s(),d=t(),{expect:f,fireEvent:p,screen:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Components/Toast`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{dismissOnClick:{control:`boolean`,description:`토스트 클릭 시 즉시 닫힘 여부`,table:{defaultValue:{summary:`true`}}},position:{control:`select`,options:[`top-left`,`top-center`,`top-right`,`bottom-left`,`bottom-center`,`bottom-right`],description:`토스트 노출 위치`,table:{defaultValue:{summary:`top-center`}}}}},v={args:{dismissOnClick:!0},render:e=>(0,d.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,d.jsx)(u,{...e}),(0,d.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,d.jsx)(r,{size:`sm`,variant:`outline-secondary`,onClick:()=>i(`레이어 저장이 완료되었습니다.`,{description:`PostGIS 데이터베이스에 피처 변경사항이 반영되었습니다.`}),children:`성공 (Success)`}),(0,d.jsx)(r,{size:`sm`,variant:`outline-secondary`,onClick:()=>o(`새로운 세션이 시작되었습니다.`,{description:`작업 영역 동기화 채널이 활성화되었습니다.`}),children:`안내 (Info)`}),(0,d.jsx)(r,{size:`sm`,variant:`outline-secondary`,onClick:()=>c(`네트워크 대역폭 경고`,{description:`P2P 데이터 채널 레이턴시가 200ms를 초과하고 있습니다.`}),children:`경고 (Warning)`}),(0,d.jsx)(r,{size:`sm`,variant:`destructive`,onClick:()=>l(`피처 렌더링 실패`,{description:`유효하지 않은 지오메트리 형식(Polygon)이 감지되었습니다.`}),children:`에러 (Error)`})]})]}),play:async({canvasElement:e})=>{a.dismiss();let t=g(e);await h.click(t.getByRole(`button`,{name:`성공 (Success)`})),await f(await m.findByText(`레이어 저장이 완료되었습니다.`)).toBeInTheDocument(),await h.click(t.getByRole(`button`,{name:`안내 (Info)`})),await f(await m.findByText(`새로운 세션이 시작되었습니다.`)).toBeInTheDocument(),await h.click(t.getByRole(`button`,{name:`경고 (Warning)`})),await f(await m.findByText(`네트워크 대역폭 경고`)).toBeInTheDocument(),await h.click(t.getByRole(`button`,{name:`에러 (Error)`})),await f(await m.findByText(`피처 렌더링 실패`)).toBeInTheDocument(),a.dismiss()}},y={render:()=>(0,d.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,d.jsx)(u,{dismissOnClick:!0,toastOptions:{classNames:{toast:`border-secondary-border`}}}),(0,d.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,d.jsx)(r,{size:`sm`,variant:`primary`,onClick:()=>o(`클릭하면 즉시 사라지는 토스트`,{id:`click-dismiss-toast`,description:`토스트 영역 아무 곳이나 클릭해 보세요.`}),children:`클릭하여 닫기 (기본값)`}),(0,d.jsx)(r,{size:`sm`,variant:`outline-secondary`,onClick:()=>a(`키보드로 닫는 토스트`,{description:`Space 또는 Enter 키로 닫을 수 있습니다.`}),children:`키보드 닫기 테스트`}),(0,d.jsx)(r,{size:`sm`,variant:`outline-secondary`,onClick:()=>o(`Enter 키로 닫는 토스트`,{id:`enter-dismiss-toast`}),children:`Enter 키 닫기`})]})]}),play:async({canvasElement:e})=>{a.dismiss();let t=g(e);await h.click(t.getByRole(`button`,{name:`클릭하여 닫기 (기본값)`}));let n=await m.findByText(`클릭하면 즉시 사라지는 토스트`),r=n.closest(`[data-sonner-toaster]`),i=r?.parentElement;if(i){let e=document.createTextNode(``);i.appendChild(e),e.dispatchEvent(new MouseEvent(`click`,{bubbles:!0})),e.dispatchEvent(new KeyboardEvent(`keydown`,{key:`Enter`,bubbles:!0})),e.remove()}r&&(await p.click(r),await p.keyDown(r,{key:`Enter`}));let o=n.closest(`[data-sonner-toast]`);o&&(o.dataset.toastId=`click-dismiss-toast`),await h.click(n),await h.click(t.getByRole(`button`,{name:`키보드 닫기 테스트`}));let s=await m.findByText(`키보드로 닫는 토스트`),c=s.closest(`[data-sonner-toast]`);c&&(c.id=`space-dismiss-toast`),await p.keyDown(s,{key:`Escape`}),await p.keyDown(s,{key:` `}),await h.click(t.getByRole(`button`,{name:`Enter 키 닫기`}));let l=await m.findByText(`Enter 키로 닫는 토스트`);await p.keyDown(l,{key:`Enter`}),a.dismiss()}},b={render:()=>(0,d.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,d.jsx)(u,{dismissOnClick:!0}),(0,d.jsx)(`div`,{className:`flex gap-2`,children:(0,d.jsx)(r,{size:`sm`,variant:`outline-secondary`,onClick:()=>a(`벡터 스타일 편집 취소 확인`,{description:`저장하지 않은 스타일 정보가 모두 초기화됩니다.`,action:{label:`복구`,onClick:()=>{i(`스타일이 복구되었습니다.`)}},cancel:{label:`무시`,onClick:()=>{}}}),children:`Action & Cancel 토스트`})})]}),play:async({canvasElement:e})=>{a.dismiss();let t=g(e);await h.click(t.getByRole(`button`,{name:`Action & Cancel 토스트`}));let n=await m.findByRole(`button`,{name:`복구`});await h.click(n),await f(await m.findByText(`스타일이 복구되었습니다.`)).toBeInTheDocument(),a.dismiss()}},x={render:()=>(0,d.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,d.jsx)(u,{dismissOnClick:!1}),(0,d.jsx)(r,{size:`sm`,variant:`outline-secondary`,onClick:()=>o(`클릭 닫힘 비활성화 토스트`),children:`클릭 닫힘 끔`})]}),play:async({canvasElement:e})=>{a.dismiss();let t=g(e);await h.click(t.getByRole(`button`,{name:`클릭 닫힘 끔`})),await f(await m.findByText(`클릭 닫힘 비활성화 토스트`)).toBeInTheDocument(),a.dismiss()}},S={render:()=>(0,d.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,d.jsx)(u,{dismissOnClick:!0}),(0,d.jsx)(`div`,{className:`flex gap-2`,children:(0,d.jsx)(r,{size:`sm`,variant:`primary`,onClick:()=>{let e=new Promise((e,t)=>{setTimeout(()=>{Math.random()>.3?e({layerName:`parcels_2026`}):t(Error(`서버 커넥션 타임아웃`))},1500)});a.promise(e,{loading:`지오메트리 단순화 및 압축 진행 중...`,success:e=>`[${e.layerName}] 레이어가 성공적으로 배포되었습니다.`,error:e=>`처리 실패: ${e.message}`})},children:`공간 데이터 업로드 시뮬레이션`})})]})},C={render:()=>(0,d.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,d.jsx)(u,{dismissOnClick:!0,closeButton:!0}),(0,d.jsx)(r,{size:`sm`,variant:`outline-secondary`,onClick:()=>o(`닫기 버튼 폴백 토스트`,{description:`id 없이 closeButton으로 닫힙니다.`}),children:`닫기 버튼 토스트 열기`})]}),play:async({canvasElement:e})=>{a.dismiss();let t=g(e);await h.click(t.getByRole(`button`,{name:`닫기 버튼 토스트 열기`}));let n=await m.findByText(`닫기 버튼 폴백 토스트`);await h.click(n),a.dismiss()}},w=[`StatusVariants`,`ClickToDismissComparison`,`WithInteractiveActions`,`DisableClickToDismiss`,`AsyncPromiseWorkflow`,`CloseButtonFallbackDismiss`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    dismissOnClick: true
  },
  render: args => <div className="flex flex-col gap-4">
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
    </div>,
  play: async ({
    canvasElement
  }) => {
    toast.dismiss();
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: '성공 (Success)'
    }));
    await expect(await screen.findByText('레이어 저장이 완료되었습니다.')).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: '안내 (Info)'
    }));
    await expect(await screen.findByText('새로운 세션이 시작되었습니다.')).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: '경고 (Warning)'
    }));
    await expect(await screen.findByText('네트워크 대역폭 경고')).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: '에러 (Error)'
    }));
    await expect(await screen.findByText('피처 렌더링 실패')).toBeInTheDocument();
    toast.dismiss();
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Toaster dismissOnClick toastOptions={{
      classNames: {
        toast: 'border-secondary-border'
      }
    }} />
      <div className="flex flex-wrap gap-2">
        <Button size="sm" variant="primary" onClick={() => showToastMessage('클릭하면 즉시 사라지는 토스트', {
        id: 'click-dismiss-toast',
        description: '토스트 영역 아무 곳이나 클릭해 보세요.'
      })}>
          클릭하여 닫기 (기본값)
        </Button>

        <Button size="sm" variant="outline-secondary" onClick={() => toast('키보드로 닫는 토스트', {
        description: 'Space 또는 Enter 키로 닫을 수 있습니다.'
      })}>
          키보드 닫기 테스트
        </Button>

        <Button size="sm" variant="outline-secondary" onClick={() => showToastMessage('Enter 키로 닫는 토스트', {
        id: 'enter-dismiss-toast'
      })}>
          Enter 키 닫기
        </Button>
      </div>
    </div>,
  play: async ({
    canvasElement
  }) => {
    toast.dismiss();
    const canvas = within(canvasElement);

    // 1. data-toast-id 속성 기반 닫기 + 컨테이너 외부 클릭/Enter + 비-Element(Text) 타겟 버블링 분기 커버
    await userEvent.click(canvas.getByRole('button', {
      name: '클릭하여 닫기 (기본값)'
    }));
    const clickToastTitle = await screen.findByText('클릭하면 즉시 사라지는 토스트');
    const toastList = clickToastTitle.closest('[data-sonner-toaster]');
    const wrapperDiv = toastList?.parentElement;
    if (wrapperDiv) {
      const textNode = document.createTextNode('');
      wrapperDiv.appendChild(textNode);
      textNode.dispatchEvent(new MouseEvent('click', {
        bubbles: true
      }));
      textNode.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'Enter',
        bubbles: true
      }));
      textNode.remove();
    }
    if (toastList) {
      await fireEvent.click(toastList);
      await fireEvent.keyDown(toastList, {
        key: 'Enter'
      });
    }
    const toastEl1 = clickToastTitle.closest<HTMLElement>('[data-sonner-toast]');
    if (toastEl1) {
      toastEl1.dataset.toastId = 'click-dismiss-toast';
    }
    await userEvent.click(clickToastTitle);

    // 2. Space 키 + element.id 폴백 분기 + 비대상 키(Escape) 분기
    await userEvent.click(canvas.getByRole('button', {
      name: '키보드 닫기 테스트'
    }));
    const keyToastTitle = await screen.findByText('키보드로 닫는 토스트');
    const toastEl2 = keyToastTitle.closest<HTMLElement>('[data-sonner-toast]');
    if (toastEl2) {
      toastEl2.id = 'space-dismiss-toast';
    }
    await fireEvent.keyDown(keyToastTitle, {
      key: 'Escape'
    });
    await fireEvent.keyDown(keyToastTitle, {
      key: ' '
    });

    // 3. Enter 키 분기 (preventDefault 미호출 경로)
    await userEvent.click(canvas.getByRole('button', {
      name: 'Enter 키 닫기'
    }));
    const enterToastTitle = await screen.findByText('Enter 키로 닫는 토스트');
    await fireEvent.keyDown(enterToastTitle, {
      key: 'Enter'
    });
    toast.dismiss();
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
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
            // 취소 버튼 기본 동작
          }
        }
      })}>
          Action & Cancel 토스트
        </Button>
      </div>
    </div>,
  play: async ({
    canvasElement
  }) => {
    toast.dismiss();
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Action & Cancel 토스트'
    }));
    const restoreBtn = await screen.findByRole('button', {
      name: '복구'
    });
    await userEvent.click(restoreBtn);
    await expect(await screen.findByText('스타일이 복구되었습니다.')).toBeInTheDocument();
    toast.dismiss();
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Toaster dismissOnClick={false} />
      <Button size="sm" variant="outline-secondary" onClick={() => showToastMessage('클릭 닫힘 비활성화 토스트')}>
        클릭 닫힘 끔
      </Button>
    </div>,
  play: async ({
    canvasElement
  }) => {
    toast.dismiss();
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: '클릭 닫힘 끔'
    }));
    await expect(await screen.findByText('클릭 닫힘 비활성화 토스트')).toBeInTheDocument();
    toast.dismiss();
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
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
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Toaster dismissOnClick closeButton />
      <Button size="sm" variant="outline-secondary" onClick={() => showToastMessage('닫기 버튼 폴백 토스트', {
      description: 'id 없이 closeButton으로 닫힙니다.'
    })}>
        닫기 버튼 토스트 열기
      </Button>
    </div>,
  play: async ({
    canvasElement
  }) => {
    toast.dismiss();
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: '닫기 버튼 토스트 열기'
    }));
    const titleEl = await screen.findByText('닫기 버튼 폴백 토스트');
    await userEvent.click(titleEl);
    toast.dismiss();
  }
}`,...C.parameters?.docs?.source}}}})))()}T();export{S as AsyncPromiseWorkflow,y as ClickToDismissComparison,C as CloseButtonFallbackDismiss,x as DisableClickToDismiss,v as StatusVariants,b as WithInteractiveActions,w as __namedExportsOrder,_ as default};