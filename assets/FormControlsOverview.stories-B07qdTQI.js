import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-D3lwOebq.js";import{n as r,t as i}from"./DateInput-DPEbtZc_.js";import{n as a,t as o}from"./Button-CGkmDVQh.js";import{o as s,s as c}from"./Select-CesYHBwk.js";import{n as l,t as u}from"./Checkbox-6jKlSpye.js";import{n as d,t as f}from"./TextField-5qHWalNn.js";import{n as p,t as m}from"./ColorPicker-B10mIa0J.js";import{n as h,t as g}from"./Combobox-BoxE8iw0.js";import{n as _,r as v,t as y}from"./RadioGroup-BixQzmj4.js";import{n as b,t as x}from"./Switch--8HuIsYq.js";import{n as S,t as C}from"./FileInput-CsloJDBC.js";import{n as w,t as T}from"./Title-D-6Blb-4.js";import{n as E,t as D}from"./UrlEditor-DWbwSzur.js";var O,k,A,j,M,N,P;function F(){return(F=e((()=>{O=t(),a(),l(),p(),h(),r(),S(),v(),c(),b(),d(),w(),E(),k=n(),A=[{value:`EPSG:5179`,title:`Korea 2000`},{value:`EPSG:4326`,title:`WGS 84`},{value:`EPSG:3857`,title:`Pseudo-Mercator`}],j=[{value:`EPSG:5179`,label:`Korea 2000`},{value:`EPSG:4326`,label:`WGS 84`},{value:`EPSG:3857`,label:`Pseudo-Mercator`}],M={title:`Overview/FormControls Sizes`,parameters:{layout:`padded`,docs:{description:{component:"`areo-ui` 폼 컨트롤 컴포넌트들의 `sm`, `md`, `lg` 규격별 라인업 비교 스토리입니다. 각 사이즈 행에서 컴포넌트 간의 baseline, 세로 높이 정렬, 패딩 토큰의 일관성을 검증할 수 있습니다."}}}},N={render:()=>{let[e,t]=(0,O.useState)(`EPSG:5179`),[n,r]=(0,O.useState)(`EPSG:5179`),[a,c]=(0,O.useState)(!0),[l,d]=(0,O.useState)(`opt1`),[p,h]=(0,O.useState)(!0),[v,b]=(0,O.useState)(`https://areo.io/api/v1/layers`),[S,w]=(0,O.useState)(`2026-11-04`),[E,M]=(0,O.useState)({r:59,g:130,b:246,a:1});return(0,k.jsx)(`div`,{className:`flex flex-col gap-10`,children:[{size:`sm`,label:`Small (sm - 21px)`,desc:`고밀도 GIS 툴바 / 패널용`},{size:`md`,label:`Medium (md - 27px)`,desc:`기본 규격 / 일반 폼`},{size:`lg`,label:`Large (lg - 32px)`,desc:`강조 폼 / 헤더 입력용`}].map(({size:O,label:N,desc:P})=>(0,k.jsxs)(`section`,{className:`flex flex-col gap-3 rounded border border-secondary-border/50 bg-white p-4 shadow-sm`,children:[(0,k.jsxs)(`div`,{className:`flex items-baseline justify-between border-b border-secondary-border/40 pb-2`,children:[(0,k.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,k.jsx)(T,{size:O,children:N}),(0,k.jsxs)(`span`,{className:`text-2xs text-muted-foreground`,children:[`(`,P,`)`]})]}),(0,k.jsxs)(`span`,{className:`font-mono text-2xs text-text-disabled`,children:[`size="`,O,`"`]})]}),(0,k.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2.5 overflow-x-auto py-1`,children:[(0,k.jsx)(o,{size:O,children:`Button`}),(0,k.jsx)(`div`,{className:`w-44`,children:(0,k.jsx)(f,{size:O,placeholder:`텍스트 입력...`,defaultValue:`텍스트 값`})}),(0,k.jsx)(`div`,{className:`flex items-center`,children:(0,k.jsx)(m,{size:O,color:E,onChangeColor:M,side:`top`})}),(0,k.jsx)(`div`,{className:`w-40`,children:(0,k.jsx)(s,{size:O,items:A,value:e,onValueChange:t,withValue:!1})}),(0,k.jsx)(`div`,{className:`w-44`,children:(0,k.jsx)(g,{size:O,items:j,value:n,onValueChange:r,labelOnly:!0})}),(0,k.jsx)(`div`,{className:`w-36`,children:(0,k.jsx)(i,{size:O,value:S,onChange:w})}),(0,k.jsx)(`div`,{className:`w-44`,children:(0,k.jsx)(C,{size:O,children:`파일선택`})}),(0,k.jsx)(`div`,{className:`w-56`,children:(0,k.jsx)(D,{size:O,value:v,onChange:b})}),(0,k.jsxs)(`div`,{className:`flex items-center gap-1.5 px-1`,children:[(0,k.jsx)(u,{size:O,checked:a,onCheckedChange:c,id:`check-${O}`}),(0,k.jsx)(`label`,{htmlFor:`check-${O}`,className:`cursor-pointer font-sans text-xs select-none`,children:`체크`})]}),(0,k.jsxs)(_,{value:l,onValueChange:d,className:`flex items-center gap-2 px-1`,children:[(0,k.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,k.jsx)(y,{size:O,value:`opt1`,id:`r1-${O}`}),(0,k.jsx)(`label`,{htmlFor:`r1-${O}`,className:`cursor-pointer font-sans text-xs select-none`,children:`A`})]}),(0,k.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,k.jsx)(y,{size:O,value:`opt2`,id:`r2-${O}`}),(0,k.jsx)(`label`,{htmlFor:`r2-${O}`,className:`cursor-pointer font-sans text-xs select-none`,children:`B`})]})]}),(0,k.jsxs)(`div`,{className:`flex items-center gap-1.5 px-1`,children:[(0,k.jsx)(x,{size:O,checked:p,onCheckedChange:h,id:`switch-${O}`}),(0,k.jsx)(`label`,{htmlFor:`switch-${O}`,className:`cursor-pointer font-sans text-xs select-none`,children:`토글`})]})]})]},O))})}},P=[`AllSizesComparison`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    // 폼 컨트롤 상태 관리
    const [selectVal, setSelectVal] = useState<string>('EPSG:5179');
    const [comboVal, setComboVal] = useState<string | null>('EPSG:5179');
    const [checked, setChecked] = useState<boolean>(true);
    const [radioVal, setRadioVal] = useState<string>('opt1');
    const [switched, setSwitched] = useState<boolean>(true);
    const [urlVal, setUrlVal] = useState<string>('https://areo.io/api/v1/layers');
    const [dateVal, setDateVal] = useState<string>('2026-11-04');
    const [colorVal, setColorVal] = useState<RgbaColor>({
      r: 59,
      g: 130,
      b: 246,
      a: 1
    });
    const sizes = [{
      size: 'sm',
      label: 'Small (sm - 21px)',
      desc: '고밀도 GIS 툴바 / 패널용'
    }, {
      size: 'md',
      label: 'Medium (md - 27px)',
      desc: '기본 규격 / 일반 폼'
    }, {
      size: 'lg',
      label: 'Large (lg - 32px)',
      desc: '강조 폼 / 헤더 입력용'
    }] as const;
    return <div className="flex flex-col gap-10">
        {sizes.map(({
        size,
        label,
        desc
      }) => <section key={size} className="flex flex-col gap-3 rounded border border-secondary-border/50 bg-white p-4 shadow-sm">
            {/* 사이즈 타이틀 헤더 */}
            <div className="flex items-baseline justify-between border-b border-secondary-border/40 pb-2">
              <div className="flex items-center gap-2">
                <Title size={size}>{label}</Title>
                <span className="text-2xs text-muted-foreground">({desc})</span>
              </div>
              <span className="font-mono text-2xs text-text-disabled">
                size="{size}"
              </span>
            </div>

            {/* 컴포넌트 한 줄(수평) 배치 라인 */}
            <div className="flex flex-wrap items-center gap-2.5 overflow-x-auto py-1">
              {/* Button */}
              <Button size={size}>Button</Button>

              {/* TextField */}
              <div className="w-44">
                <TextField size={size} placeholder="텍스트 입력..." defaultValue="텍스트 값" />
              </div>

              {/* ColorPicker (TextField 높이와 1:1 매칭: sm: 21px, md: 27px, lg: 32px) */}
              <div className="flex items-center">
                <ColorPicker size={size} color={colorVal} onChangeColor={setColorVal} side="top" />
              </div>

              {/* SimpleSelect */}
              <div className="w-40">
                <SimpleSelect size={size} items={sampleOptions} value={selectVal} onValueChange={setSelectVal} withValue={false} />
              </div>

              {/* Combobox */}
              <div className="w-44">
                <Combobox size={size} items={sampleComboboxItems} value={comboVal} onValueChange={setComboVal} labelOnly />
              </div>

              {/* DateInput */}
              <div className="w-36">
                <DateInput size={size} value={dateVal} onChange={setDateVal} />
              </div>

              {/* FileInput */}
              <div className="w-44">
                <FileInput size={size}>파일선택</FileInput>
              </div>

              {/* UrlEditor */}
              <div className="w-56">
                <UrlEditor size={size} value={urlVal} onChange={setUrlVal} />
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-1.5 px-1">
                <Checkbox size={size} checked={checked} onCheckedChange={setChecked} id={\`check-\${size}\`} />
                <label htmlFor={\`check-\${size}\`} className="cursor-pointer font-sans text-xs select-none">
                  체크
                </label>
              </div>

              {/* RadioGroup */}
              <RadioGroup value={radioVal} onValueChange={setRadioVal} className="flex items-center gap-2 px-1">
                <div className="flex items-center gap-1">
                  <Radio size={size} value="opt1" id={\`r1-\${size}\`} />
                  <label htmlFor={\`r1-\${size}\`} className="cursor-pointer font-sans text-xs select-none">
                    A
                  </label>
                </div>
                <div className="flex items-center gap-1">
                  <Radio size={size} value="opt2" id={\`r2-\${size}\`} />
                  <label htmlFor={\`r2-\${size}\`} className="cursor-pointer font-sans text-xs select-none">
                    B
                  </label>
                </div>
              </RadioGroup>

              {/* Switch */}
              <div className="flex items-center gap-1.5 px-1">
                <Switch size={size} checked={switched} onCheckedChange={setSwitched} id={\`switch-\${size}\`} />
                <label htmlFor={\`switch-\${size}\`} className="cursor-pointer font-sans text-xs select-none">
                  토글
                </label>
              </div>
            </div>
          </section>)}
      </div>;
  }
}`,...N.parameters?.docs?.source}}}})))()}F();export{N as AllSizesComparison,P as __namedExportsOrder,M as default};