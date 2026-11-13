import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-BKXkO2qw.js";import{n as r,t as i}from"./Combobox-D8blF3k9.js";var a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{a=t(),r(),o=n(),s={title:`Components/Combobox`,component:i,parameters:{layout:`centered`,docs:{description:{component:"`@base-ui/react` 기반의 콤보박스 컴포넌트입니다. `TextField` 및 `Select`와 동일한 고밀도 각진(`rounded-none`) 토큰을 공유합니다.\n\n**주요 특징:**\n- **동적 플레이스홀더 전환**: 항목 선택 시 인풋 값을 비우고 `placeholder`에 명칭을 표기하며, 키보드 입력 시에만 검색어가 노출됩니다.\n- **자동 하이라이트 & 빠른 선택**: `autoHighlight={true}`를 통해 검색어 입력 시 첫 번째 일치 항목에 자동 포커스되어 `Enter` 키로 즉시 선택할 수 있습니다.\n- **ReadOnly 마우스 텍스트 드래그 지원**: `readOnly` 상태일 때는 팝업 열림이 차단되며 인풋 내부 텍스트를 마우스로 드래그하여 복사할 수 있습니다.\n- **포털 자동 감지**: `.areo-dialog-root` 컨테이너를 자동 감지하여 모달/다이얼로그 내부에서도 팝업이 안정적으로 배치됩니다."}}},tags:[`autodocs`],args:{items:[{value:`EPSG:5179`,label:`Korea 2000 / Central Belt 2010`},{value:`EPSG:4326`,label:`WGS 84 (GPS 위경도)`},{value:`EPSG:3857`,label:`WGS 84 / Pseudo-Mercator (웹 지도)`},{value:`EPSG:5181`,label:`Korea 2000 / Central Belt (Kakao)`},{value:`EPSG:5186`,label:`Korea 2000 / East Belt (동부원점)`},{value:`EPSG:5174`,label:`Bessel 1841 / Korea Central Belt (구 지적도)`},{value:`EPSG:900913`,label:`Google Mercator (레거시)`,readonly:!0},{value:`EPSG:0000`,label:`숨겨진 좌표계`,visible:!1}],placeholder:`선택 또는 입력...`,size:`md`,variant:`default`,labelOnly:!1,valueOnly:!1,autoHighlight:!0,disabled:!1,readOnly:!1,emptyText:`항목이 없습니다`},argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`],description:`인풋 높이 및 폰트 규격`},variant:{control:`radio`,options:[`default`,`ghost`],description:`배경 및 테두리 스타일 변형`},labelOnly:{control:`boolean`,description:`드롭다운 리스트에 라벨만 단독 표기할지 여부`},valueOnly:{control:`boolean`,description:`플레이스홀더 및 리스트에 코드(value)만 단독 표기할지 여부`},autoHighlight:{control:`boolean`,description:`검색 시 일치하는 첫 번째 항목 자동 포커스 여부`},disabled:{control:`boolean`,description:`비활성화 여부`},readOnly:{control:`boolean`,description:`읽기 전용 여부 (팝업 차단 및 텍스트 드래그 복사 허용)`},placeholder:{control:`text`,description:`선택된 값이 없을 때 노출되는 기본 플레이스홀더`},emptyText:{control:`text`,description:`일치하는 검색 결과가 없을 때 표시할 문구`},onValueChange:{action:`valueChanged`,description:`선택된 value가 변경될 때 호출되는 콜백`},onEnterKeyDown:{action:`enterKeyDown`,description:`인풋에서 Enter 키가 입력되었을 때 호출되는 콜백`}}},c={render:e=>{let[t,n]=(0,a.useState)(`EPSG:5179`);return(0,o.jsxs)(`div`,{className:`flex w-96 flex-col gap-2`,children:[(0,o.jsx)(i,{...e,value:t,onValueChange:t=>{e.onValueChange?.(t),n(t)}}),(0,o.jsxs)(`div`,{className:`text-xs text-muted-foreground`,children:[`선택된 Value:`,` `,(0,o.jsx)(`span`,{className:`text-foreground font-mono font-semibold`,children:t??`null`})]})]})}},l={render:e=>{let[t,n]=(0,a.useState)(`EPSG:5179`);return(0,o.jsxs)(`div`,{className:`flex w-96 flex-col gap-2`,children:[(0,o.jsx)(i,{...e,labelOnly:!0,value:t,onValueChange:t=>{e.onValueChange?.(t),n(t)}}),(0,o.jsxs)(`div`,{className:`text-xs text-muted-foreground`,children:[`선택된 Value:`,` `,(0,o.jsx)(`span`,{className:`text-foreground font-mono font-semibold`,children:t??`null`})]})]})},args:{labelOnly:!0}},u={render:e=>{let[t,n]=(0,a.useState)(`EPSG:4326`);return(0,o.jsxs)(`div`,{className:`flex w-96 flex-col gap-2`,children:[(0,o.jsx)(i,{...e,valueOnly:!0,value:t,onValueChange:t=>{e.onValueChange?.(t),n(t)}}),(0,o.jsxs)(`div`,{className:`text-xs text-muted-foreground`,children:[`선택된 Value:`,` `,(0,o.jsx)(`span`,{className:`text-foreground font-mono font-semibold`,children:t??`null`})]})]})},args:{valueOnly:!0}},d={render:e=>{let[t,n]=(0,a.useState)(`EPSG:5179`),[r,s]=(0,a.useState)(`EPSG:4326`),[c,l]=(0,a.useState)(`EPSG:3857`);return(0,o.jsxs)(`div`,{className:`flex w-80 flex-col gap-4`,children:[(0,o.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,o.jsx)(`span`,{className:`text-xs font-semibold text-muted-foreground`,children:`Size: sm (21px)`}),(0,o.jsx)(i,{...e,size:`sm`,value:t,onValueChange:n})]}),(0,o.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,o.jsx)(`span`,{className:`text-xs font-semibold text-muted-foreground`,children:`Size: md (27px)`}),(0,o.jsx)(i,{...e,size:`md`,value:r,onValueChange:s})]}),(0,o.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,o.jsx)(`span`,{className:`text-xs font-semibold text-muted-foreground`,children:`Size: lg (32px)`}),(0,o.jsx)(i,{...e,size:`lg`,value:c,onValueChange:l})]})]})}},f={render:e=>{let[t,n]=(0,a.useState)(`EPSG:5179`);return(0,o.jsx)(`div`,{className:`flex w-96 flex-col gap-2`,children:(0,o.jsx)(i,{...e,value:t,onValueChange:t=>{e.onValueChange?.(t),n(t)},renderItem:e=>(0,o.jsxs)(`div`,{className:`flex w-full items-center justify-between py-0.5`,children:[(0,o.jsx)(`span`,{className:`truncate font-medium`,children:e.label}),(0,o.jsx)(`span`,{className:`rounded bg-primary/10 px-1 py-0.5 font-mono text-[10px] text-primary`,children:e.value})]})})})}},p={render:e=>(0,o.jsxs)(`div`,{className:`flex w-80 flex-col gap-4`,children:[(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-xs font-semibold text-muted-foreground`,children:`Disabled`}),(0,o.jsx)(i,{...e,disabled:!0,defaultValue:`EPSG:5179`})]}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{className:`mb-1 block text-xs font-semibold text-muted-foreground`,children:`ReadOnly (텍스트 마우스 드래그 선택 가능)`}),(0,o.jsx)(i,{...e,readOnly:!0,defaultValue:`EPSG:5179`})]})]})},m=[`Default`,`LabelOnly`,`ValueOnly`,`Sizes`,`CustomItemRendering`,`DisabledAndReadOnly`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: ComboboxProps) => {
    const [val, setVal] = useState<string | null>('EPSG:5179');
    return <div className="flex w-96 flex-col gap-2">
        <Combobox {...args} value={val} onValueChange={nextVal => {
        args.onValueChange?.(nextVal);
        setVal(nextVal);
      }} />
        <div className="text-xs text-muted-foreground">
          선택된 Value:{' '}
          <span className="text-foreground font-mono font-semibold">
            {val ?? 'null'}
          </span>
        </div>
      </div>;
  }
}`,...c.parameters?.docs?.source},description:{story:`기본 모드 (labelOnly={false}, valueOnly={false})
팝업 목록에는 "라벨 (코드)"가 함께 노출되고, 선택 시 플레이스홀더에는 라벨이 표기됩니다.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: (args: ComboboxProps) => {
    const [val, setVal] = useState<string | null>('EPSG:5179');
    return <div className="flex w-96 flex-col gap-2">
        <Combobox {...args} labelOnly={true} value={val} onValueChange={nextVal => {
        args.onValueChange?.(nextVal);
        setVal(nextVal);
      }} />
        <div className="text-xs text-muted-foreground">
          선택된 Value:{' '}
          <span className="text-foreground font-mono font-semibold">
            {val ?? 'null'}
          </span>
        </div>
      </div>;
  },
  args: {
    labelOnly: true
  }
}`,...l.parameters?.docs?.source},description:{story:`라벨 단독 모드 (labelOnly={true})
드롭다운 목록에서 value 코드를 숨기고 라벨만 깔끔하게 정렬하여 표시합니다.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: (args: ComboboxProps) => {
    const [val, setVal] = useState<string | null>('EPSG:4326');
    return <div className="flex w-96 flex-col gap-2">
        <Combobox {...args} valueOnly={true} value={val} onValueChange={nextVal => {
        args.onValueChange?.(nextVal);
        setVal(nextVal);
      }} />
        <div className="text-xs text-muted-foreground">
          선택된 Value:{' '}
          <span className="text-foreground font-mono font-semibold">
            {val ?? 'null'}
          </span>
        </div>
      </div>;
  },
  args: {
    valueOnly: true
  }
}`,...u.parameters?.docs?.source},description:{story:`코드 단독 모드 (valueOnly={true})
리스트 및 플레이스홀더 모두 value 코드만 간결하게 표시합니다.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: (args: ComboboxProps) => {
    const [smVal, setSmVal] = useState<string | null>('EPSG:5179');
    const [mdVal, setMdVal] = useState<string | null>('EPSG:4326');
    const [lgVal, setLgVal] = useState<string | null>('EPSG:3857');
    return <div className="flex w-80 flex-col gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold text-muted-foreground">
            Size: sm (21px)
          </span>
          <Combobox {...args} size="sm" value={smVal} onValueChange={setSmVal} />
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold text-muted-foreground">
            Size: md (27px)
          </span>
          <Combobox {...args} size="md" value={mdVal} onValueChange={setMdVal} />
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold text-muted-foreground">
            Size: lg (32px)
          </span>
          <Combobox {...args} size="lg" value={lgVal} onValueChange={setLgVal} />
        </div>
      </div>;
  }
}`,...d.parameters?.docs?.source},description:{story:`사이즈 변형 (sm, md, lg)
- sm: 21px 높이 (고밀도 데스크톱/GIS 패널용)
- md: 기본 높이 (일반 폼/다이얼로그용)
- lg: 32px 높이 (강조 영역/넓은 화면용)`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: (args: ComboboxProps) => {
    const [val, setVal] = useState<string | null>('EPSG:5179');
    return <div className="flex w-96 flex-col gap-2">
        <Combobox {...args} value={val} onValueChange={nextVal => {
        args.onValueChange?.(nextVal);
        setVal(nextVal);
      }} renderItem={item => <div className="flex w-full items-center justify-between py-0.5">
              <span className="truncate font-medium">{item.label}</span>
              <span className="rounded bg-primary/10 px-1 py-0.5 font-mono text-[10px] text-primary">
                {item.value}
              </span>
            </div>} />
      </div>;
  }
}`,...f.parameters?.docs?.source},description:{story:`커스텀 아이템 렌더링 (renderItem)
옵션 리스트 내부 레이아웃을 직접 커스텀합니다.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args: ComboboxProps) => {
    return <div className="flex w-80 flex-col gap-4">
        <div>
          <span className="mb-1 block text-xs font-semibold text-muted-foreground">
            Disabled
          </span>
          <Combobox {...args} disabled defaultValue="EPSG:5179" />
        </div>
        <div>
          <span className="mb-1 block text-xs font-semibold text-muted-foreground">
            ReadOnly (텍스트 마우스 드래그 선택 가능)
          </span>
          <Combobox {...args} readOnly defaultValue="EPSG:5179" />
        </div>
      </div>;
  }
}`,...p.parameters?.docs?.source},description:{story:`비활성화 및 읽기 전용 상태 (Disabled & ReadOnly)
- Disabled: 테두리와 배경이 흐려지며 포커스 및 입력 차단
- ReadOnly: 팝업 열림은 차단되나 인풋 안의 텍스트를 마우스로 직접 드래그하여 복사 가능`,...p.parameters?.docs?.description}}}})))()}h();export{f as CustomItemRendering,c as Default,p as DisabledAndReadOnly,l as LabelOnly,d as Sizes,u as ValueOnly,m as __namedExportsOrder,s as default};