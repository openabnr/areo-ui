import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-BgbBaVxq.js";import{a as r,i,n as a,o,r as s,s as c,t as l}from"./Select-CQdrh2bH.js";var u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{u=t(),c(),d=n(),f={title:`Components/Select`,component:o,parameters:{layout:`centered`,docs:{description:{component:"`@base-ui/react/select` 기반의 셀렉트 컴포넌트입니다. `TextField`, `Combobox`와 동일한 고밀도 각진(`rounded-none`) 디자인 토큰을 공유합니다.\n\n**주요 특징:**\n- **간편한 배열 기반 & 합성 컴포넌트 지원**: `SimpleSelect`로 빠르게 구성하거나 `Select`, `SelectTrigger`, `SelectContent`, `SelectItem` 프리미티브로 커스텀 가능\n- **ReadOnly 마우스 텍스트 드래그 지원**: `readOnly` 상태에서는 팝업 열림이 차단되고 텍스트를 마우스로 직접 드래그하여 복사 가능\n- **자연스러운 넌모달(Non-modal) 동작**: `modal={false}` 적용으로 팝업 오픈 시에도 바디 스크롤바가 유지되며 외부 클릭 시 포커스가 자연스럽게 해제됨\n- **아이템 선택 시에만 포커스 복귀**: 옵션 클릭 시에만 트리거에 포커스를 유지하고, 외부 클릭 닫힘 시에는 포커스가 트리거로 강제 회수되지 않음"}}},tags:[`autodocs`],args:{items:[{value:`EPSG:5179`,title:`Korea 2000 / Central Belt 2010`},{value:`EPSG:4326`,title:`WGS 84 (GPS 위경도)`},{value:`EPSG:3857`,title:`WGS 84 / Pseudo-Mercator (웹 지도)`},{value:`EPSG:5181`,title:`Korea 2000 / Central Belt (Kakao)`},{value:`EPSG:5186`,title:`Korea 2000 / East Belt (동부원점)`},{value:`EPSG:5174`,title:`Bessel 1841 / Korea Central Belt`}],placeholder:`좌표계를 선택하세요`,size:`md`,variant:`default`,withValue:!0,disabled:!1,readOnly:!1,emptyItem:`선택`},argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`],description:`트리거 버튼 높이 및 폰트 규격`},variant:{control:`radio`,options:[`default`,`ghost`],description:`트리거 테두리 및 배경 스타일 변형`},withValue:{control:`boolean`,description:`드롭다운 옵션 우측에 value 코드를 함께 표기할지 여부`},disabled:{control:`boolean`,description:`비활성화 여부`},readOnly:{control:`boolean`,description:`읽기 전용 여부 (팝업 차단 및 텍스트 드래그 선택 허용)`},placeholder:{control:`text`,description:`선택값이 없을 때 표시할 플레이스홀더`},emptyItem:{control:`text`,description:`아이템 목록이 비어있을 때 트리거에 표시할 문구`},onValueChange:{action:`valueChanged`,description:`선택된 항목의 value 또는 item 객체가 변경될 때 호출되는 콜백`}}},p={render:e=>{let[t,n]=(0,u.useState)(`EPSG:5179`);return(0,d.jsxs)(`div`,{className:`flex w-80 flex-col gap-2`,children:[(0,d.jsx)(o,{...e,value:t,onValueChange:(t,r)=>{e.onValueChange?.(t,r),n(t)}}),(0,d.jsxs)(`div`,{className:`text-xs text-muted-foreground`,children:[`현재 선택된 Value:`,` `,(0,d.jsx)(`span`,{className:`text-foreground font-mono font-semibold`,children:t||`없음`})]})]})}},m={render:e=>{let[t,n]=(0,u.useState)(`EPSG:4326`);return(0,d.jsxs)(`div`,{className:`flex w-80 flex-col gap-2`,children:[(0,d.jsx)(o,{...e,value:t,withValue:!1,onValueChange:(t,r)=>{e.onValueChange?.(t,r),n(t)}}),(0,d.jsxs)(`div`,{className:`text-xs text-muted-foreground`,children:[`현재 선택된 Value:`,` `,(0,d.jsx)(`span`,{className:`text-foreground font-mono font-semibold`,children:t||`없음`})]})]})},args:{withValue:!1}},h={render:e=>{let[t,n]=(0,u.useState)(`EPSG:5179`),[r,i]=(0,u.useState)(`EPSG:4326`),[a,s]=(0,u.useState)(`EPSG:3857`);return(0,d.jsxs)(`div`,{className:`flex w-80 flex-col gap-4`,children:[(0,d.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,d.jsx)(`span`,{className:`text-xs font-semibold text-muted-foreground`,children:`Size: sm (21px)`}),(0,d.jsx)(o,{...e,size:`sm`,value:t,onValueChange:n})]}),(0,d.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,d.jsx)(`span`,{className:`text-xs font-semibold text-muted-foreground`,children:`Size: md (27px)`}),(0,d.jsx)(o,{...e,size:`md`,value:r,onValueChange:i})]}),(0,d.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,d.jsx)(`span`,{className:`text-xs font-semibold text-muted-foreground`,children:`Size: lg (32px)`}),(0,d.jsx)(o,{...e,size:`lg`,value:a,onValueChange:s})]})]})}},g={render:e=>{let[t,n]=(0,u.useState)(`EPSG:3857`);return(0,d.jsx)(`div`,{className:`flex w-72 flex-col gap-2 bg-surface-muted p-4`,children:(0,d.jsx)(o,{...e,variant:`ghost`,value:t,onValueChange:(t,r)=>{e.onValueChange?.(t,r),n(t)}})})},args:{variant:`ghost`}},_={render:e=>(0,d.jsx)(`div`,{className:`flex w-72 flex-col gap-2`,children:(0,d.jsx)(o,{...e,items:[],emptyItem:`선택 가능한 레이어가 없습니다`})}),args:{items:[],emptyItem:`선택 가능한 레이어가 없습니다`}},v={render:e=>(0,d.jsxs)(`div`,{className:`flex w-80 flex-col gap-4`,children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`span`,{className:`mb-1 block text-xs font-semibold text-muted-foreground`,children:`Disabled`}),(0,d.jsx)(o,{...e,disabled:!0,defaultValue:`EPSG:5179`})]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`span`,{className:`mb-1 block text-xs font-semibold text-muted-foreground`,children:`ReadOnly (텍스트 마우스 드래그 선택 가능)`}),(0,d.jsx)(o,{...e,readOnly:!0,defaultValue:`EPSG:5179`})]})]})},y={render:()=>{let[e,t]=(0,u.useState)(`point`);return(0,d.jsxs)(`div`,{className:`flex w-72 flex-col gap-2`,children:[(0,d.jsxs)(l,{value:e,onValueChange:e=>t(e),children:[(0,d.jsx)(i,{size:`md`,children:(0,d.jsx)(r,{placeholder:`심볼 형상 선택`})}),(0,d.jsxs)(a,{children:[(0,d.jsx)(s,{value:`point`,label:`포인트 심볼 (Point)`,withValue:!0}),(0,d.jsx)(s,{value:`line`,label:`라인 심볼 (LineString)`,withValue:!0}),(0,d.jsx)(s,{value:`polygon`,label:`폴리곤 심볼 (Polygon)`,withValue:!0}),(0,d.jsx)(s,{value:`raster`,label:`래스터 레이어 (Raster)`,disabled:!0,withValue:!0})]})]}),(0,d.jsxs)(`div`,{className:`text-xs text-muted-foreground`,children:[`선택된 심볼 타입:`,` `,(0,d.jsx)(`span`,{className:`text-foreground font-mono font-semibold`,children:e})]})]})}},b=[`Default`,`WithoutValue`,`Sizes`,`GhostVariant`,`EmptyItems`,`DisabledAndReadOnly`,`CompoundPattern`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args: SimpleSelectProps) => {
    const [val, setVal] = useState<string>('EPSG:5179');
    return <div className="flex w-80 flex-col gap-2">\r
        <SimpleSelect {...args} value={val} onValueChange={(nextVal, item) => {
        args.onValueChange?.(nextVal, item);
        setVal(nextVal);
      }} />\r
        <div className="text-xs text-muted-foreground">\r
          현재 선택된 Value:{' '}\r
          <span className="text-foreground font-mono font-semibold">\r
            {val || '없음'}\r
          </span>\r
        </div>\r
      </div>;
  }
}`,...p.parameters?.docs?.source},description:{story:`기본 SimpleSelect (withValue={true})\r
옵션 목록 우측에 각 항목의 value 코드가 은은한 텍스트로 함께 표기됩니다.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: SimpleSelectProps) => {
    const [val, setVal] = useState<string>('EPSG:4326');
    return <div className="flex w-80 flex-col gap-2">\r
        <SimpleSelect {...args} value={val} withValue={false} onValueChange={(nextVal, item) => {
        args.onValueChange?.(nextVal, item);
        setVal(nextVal);
      }} />\r
        <div className="text-xs text-muted-foreground">\r
          현재 선택된 Value:{' '}\r
          <span className="text-foreground font-mono font-semibold">\r
            {val || '없음'}\r
          </span>\r
        </div>\r
      </div>;
  },
  args: {
    withValue: false
  }
}`,...m.parameters?.docs?.source},description:{story:`라벨만 표기 모드 (withValue={false})\r
옵션 목록에서 코드를 숨기고 라벨(title)만 깔끔하게 정렬하여 표시합니다.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: (args: SimpleSelectProps) => {
    const [smVal, setSmVal] = useState<string>('EPSG:5179');
    const [mdVal, setMdVal] = useState<string>('EPSG:4326');
    const [lgVal, setLgVal] = useState<string>('EPSG:3857');
    return <div className="flex w-80 flex-col gap-4">\r
        <div className="flex flex-col gap-1">\r
          <span className="text-xs font-semibold text-muted-foreground">\r
            Size: sm (21px)\r
          </span>\r
          <SimpleSelect {...args} size="sm" value={smVal} onValueChange={setSmVal} />\r
        </div>\r
\r
        <div className="flex flex-col gap-1">\r
          <span className="text-xs font-semibold text-muted-foreground">\r
            Size: md (27px)\r
          </span>\r
          <SimpleSelect {...args} size="md" value={mdVal} onValueChange={setMdVal} />\r
        </div>\r
\r
        <div className="flex flex-col gap-1">\r
          <span className="text-xs font-semibold text-muted-foreground">\r
            Size: lg (32px)\r
          </span>\r
          <SimpleSelect {...args} size="lg" value={lgVal} onValueChange={setLgVal} />\r
        </div>\r
      </div>;
  }
}`,...h.parameters?.docs?.source},description:{story:`사이즈 변형 (sm, md, lg)\r
- sm: 21px 높이 (고밀도 데스크톱/GIS 패널용)\r
- md: 기본 높이 (일반 폼/다이얼로그용)\r
- lg: 32px 높이 (강조 영역/넓은 화면용)`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: (args: SimpleSelectProps) => {
    const [val, setVal] = useState<string>('EPSG:3857');
    return <div className="flex w-72 flex-col gap-2 bg-surface-muted p-4">\r
        <SimpleSelect {...args} variant="ghost" value={val} onValueChange={(nextVal, item) => {
        args.onValueChange?.(nextVal, item);
        setVal(nextVal);
      }} />\r
      </div>;
  },
  args: {
    variant: 'ghost'
  }
}`,...g.parameters?.docs?.source},description:{story:`고스트 변형 (variant="ghost")\r
테두리가 없으며 호버 시에만 옅은 배경색이 적용되어 툴바나 테이블 셀 인라인에 적합합니다.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: (args: SimpleSelectProps) => {
    return <div className="flex w-72 flex-col gap-2">\r
        <SimpleSelect {...args} items={[]} emptyItem="선택 가능한 레이어가 없습니다" />\r
      </div>;
  },
  args: {
    items: [],
    emptyItem: '선택 가능한 레이어가 없습니다'
  }
}`,..._.parameters?.docs?.source},description:{story:`빈 목록 상태 (Empty Items)`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: (args: SimpleSelectProps) => {
    return <div className="flex w-80 flex-col gap-4">\r
        <div>\r
          <span className="mb-1 block text-xs font-semibold text-muted-foreground">\r
            Disabled\r
          </span>\r
          <SimpleSelect {...args} disabled defaultValue="EPSG:5179" />\r
        </div>\r
        <div>\r
          <span className="mb-1 block text-xs font-semibold text-muted-foreground">\r
            ReadOnly (텍스트 마우스 드래그 선택 가능)\r
          </span>\r
          <SimpleSelect {...args} readOnly defaultValue="EPSG:5179" />\r
        </div>\r
      </div>;
  }
}`,...v.parameters?.docs?.source},description:{story:`비활성화 및 읽기 전용 상태 (Disabled & ReadOnly)\r
- Disabled: 테두리와 배경이 흐려지며 포커스/클릭 차단\r
- ReadOnly: 팝업 열림은 차단되나 텍스트를 마우스로 직접 드래그하여 복사 가능`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string>('point');
    return <div className="flex w-72 flex-col gap-2">\r
        <Select value={selected} onValueChange={val => setSelected(val as string)}>\r
          <SelectTrigger size="md">\r
            <SelectValue placeholder="심볼 형상 선택" />\r
          </SelectTrigger>\r
          <SelectContent>\r
            <SelectItem value="point" label="포인트 심볼 (Point)" withValue />\r
            <SelectItem value="line" label="라인 심볼 (LineString)" withValue />\r
            <SelectItem value="polygon" label="폴리곤 심볼 (Polygon)" withValue />\r
            <SelectItem value="raster" label="래스터 레이어 (Raster)" disabled withValue />\r
          </SelectContent>\r
        </Select>\r
        <div className="text-xs text-muted-foreground">\r
          선택된 심볼 타입:{' '}\r
          <span className="text-foreground font-mono font-semibold">\r
            {selected}\r
          </span>\r
        </div>\r
      </div>;
  }
}`,...y.parameters?.docs?.source},description:{story:"합성 컴포넌트 패턴 (Compound Components)\r\n`Select`, `SelectTrigger`, `SelectValue`, `SelectContent`, `SelectItem`을 직접 조합하여 제어하는 방식입니다.",...y.parameters?.docs?.description}}}})))()}x();export{y as CompoundPattern,p as Default,v as DisabledAndReadOnly,_ as EmptyItems,g as GhostVariant,h as Sizes,m as WithoutValue,b as __namedExportsOrder,f as default};