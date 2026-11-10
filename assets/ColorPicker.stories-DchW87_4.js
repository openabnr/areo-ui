import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-BgbBaVxq.js";import{n as r,t as i}from"./Button-D528mm4l.js";import{n as a,t as o}from"./TextField-CuRYhal1.js";import{n as s,t as c}from"./ColorPicker-BSJDa0W4.js";var l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{l=t(),r(),s(),a(),u=n(),d={title:`Components/ColorPicker`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`],description:`색상 선택기 스와치 버튼 크기 (sm: 21px, md: 27px, lg: 32px)`,table:{defaultValue:{summary:`md`}}},color:{control:`object`,description:`현재 선택된 RGBA 색상 객체 ({ r, g, b, a })`},disableAlpha:{control:`boolean`,description:`알파(투명도) 슬라이더 비활성화 여부`,table:{defaultValue:{summary:`false`}}},disableInput:{control:`boolean`,description:`HEX / RGBA 텍스트 직접 입력 영역 비활성화 여부`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`비활성화 여부`,table:{defaultValue:{summary:`false`}}},side:{control:`select`,options:[`top`,`bottom`,`left`,`right`],description:`팝오버가 열리는 방향`,table:{defaultValue:{summary:`bottom`}}},align:{control:`select`,options:[`start`,`center`,`end`],description:`팝오버 정렬 기준`,table:{defaultValue:{summary:`start`}}},onChangeColor:{action:`changeColor`,description:`색상 변경 이벤트 콜백`}}},f={args:{size:`md`,color:{r:59,g:130,b:246,a:1},disableAlpha:!1,disableInput:!1,disabled:!1,side:`bottom`,align:`start`},render:function(e){let[t,n]=(0,l.useState)(e.color??{r:59,g:130,b:246,a:1});return(0,u.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,u.jsx)(c,{...e,color:t,onChangeColor:t=>{n(t),e.onChangeColor?.(t)}}),(0,u.jsxs)(`span`,{className:`font-mono text-xs text-neutral-600`,children:[`rgba(`,t.r,`, `,t.g,`, `,t.b,`, `,t.a.toFixed(2),`)`]})]})}},p={render:function(){let[e,t]=(0,l.useState)({r:239,g:68,b:68,a:1});return(0,u.jsxs)(`div`,{className:`flex flex-col gap-6 p-6`,children:[(0,u.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,u.jsx)(`span`,{className:`text-2xs font-semibold text-neutral-500`,children:`Small (sm - 21px)`}),(0,u.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,u.jsx)(c,{size:`sm`,color:e,onChangeColor:t,side:`top`}),(0,u.jsx)(o,{size:`sm`,defaultValue:`Small 텍스트`,className:`w-48`})]})]}),(0,u.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,u.jsx)(`span`,{className:`text-2xs font-semibold text-neutral-500`,children:`Medium (md - 27px)`}),(0,u.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,u.jsx)(c,{size:`md`,color:e,onChangeColor:t,side:`top`}),(0,u.jsx)(o,{size:`md`,defaultValue:`Medium 텍스트`,className:`w-48`})]})]}),(0,u.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,u.jsx)(`span`,{className:`text-2xs font-semibold text-neutral-500`,children:`Large (lg - 32px)`}),(0,u.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,u.jsx)(c,{size:`lg`,color:e,onChangeColor:t,side:`top`}),(0,u.jsx)(o,{size:`lg`,defaultValue:`Large 텍스트`,className:`w-48`})]})]})]})}},m={render:function(){let[e,t]=(0,l.useState)({r:99,g:102,b:241,a:1}),[n,r]=(0,l.useState)({r:236,g:72,b:153,a:1});return(0,u.jsxs)(`div`,{className:`flex items-center gap-10 p-6`,children:[(0,u.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,u.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`텍스트 입력 활성화 (기본값)`}),(0,u.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,u.jsx)(c,{disableInput:!1,color:e,onChangeColor:t}),(0,u.jsx)(`span`,{className:`text-2xs text-neutral-500`,children:`하단에 HEX, RGB 입력창 표시`})]})]}),(0,u.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,u.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`텍스트 입력 비활성화 (disableInput)`}),(0,u.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,u.jsx)(c,{disableInput:!0,color:n,onChangeColor:r}),(0,u.jsx)(`span`,{className:`text-2xs text-neutral-500`,children:`팔레트 및 슬라이더만 표시`})]})]})]})}},h={render:function(){let[e,t]=(0,l.useState)({r:16,g:185,b:129,a:.5}),[n,r]=(0,l.useState)({r:16,g:185,b:129,a:1});return(0,u.jsxs)(`div`,{className:`flex items-center gap-10 p-6`,children:[(0,u.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,u.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`Alpha 포함 (투명도 조절)`}),(0,u.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,u.jsx)(c,{color:e,onChangeColor:t}),(0,u.jsxs)(`span`,{className:`font-mono text-xs text-neutral-600`,children:[`a: `,e.a.toFixed(2)]})]})]}),(0,u.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,u.jsx)(`span`,{className:`text-xs font-semibold text-secondary-foreground`,children:`Alpha 비활성화 (단색 전용)`}),(0,u.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,u.jsx)(c,{disableAlpha:!0,color:n,onChangeColor:r}),(0,u.jsx)(`span`,{className:`font-mono text-xs text-neutral-600`,children:`Solid RGB`})]})]})]})}},g={render:()=>(0,u.jsxs)(`div`,{className:`flex items-center gap-4 p-6`,children:[(0,u.jsx)(c,{disabled:!0,color:{r:107,g:114,b:128,a:1}}),(0,u.jsx)(`span`,{className:`text-xs text-neutral-500`,children:`비활성화됨 (클릭 불가)`})]})},_={render:function(){let[e,t]=(0,l.useState)({r:30,g:41,b:59,a:1}),[n,r]=(0,l.useState)({r:59,g:130,b:246,a:.35});return(0,u.jsxs)(`div`,{className:`flex w-84 flex-col gap-4 border border-secondary-border bg-white p-4`,children:[(0,u.jsxs)(`div`,{className:`border-b border-secondary-border pb-2`,children:[(0,u.jsx)(`h4`,{className:`text-sm font-semibold text-secondary-foreground`,children:`벡터 심볼 스타일`}),(0,u.jsx)(`p`,{className:`text-footer-muted text-2xs`,children:`피처의 외곽선 및 채우기 색상을 지정합니다.`})]}),(0,u.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,u.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,u.jsx)(`span`,{className:`text-xs text-neutral-700`,children:`외곽선 (Stroke)`}),(0,u.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,u.jsx)(c,{size:`sm`,color:e,onChangeColor:t,side:`left`}),(0,u.jsx)(o,{size:`sm`,className:`w-24 font-mono text-2xs`,value:`#${e.r.toString(16).padStart(2,`0`)}${e.g.toString(16).padStart(2,`0`)}${e.b.toString(16).padStart(2,`0`)}`,readOnly:!0})]})]}),(0,u.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,u.jsx)(`span`,{className:`text-xs text-neutral-700`,children:`채우기 (Fill)`}),(0,u.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,u.jsx)(c,{size:`sm`,color:n,onChangeColor:r,side:`left`}),(0,u.jsxs)(`span`,{className:`w-24 text-right font-mono text-xs text-neutral-600`,children:[(n.a*100).toFixed(0),`%`]})]})]})]}),(0,u.jsxs)(`div`,{className:`flex justify-end gap-1.5 border-t border-secondary-border pt-2`,children:[(0,u.jsx)(i,{size:`sm`,variant:`outline-secondary`,children:`초기화`}),(0,u.jsx)(i,{size:`sm`,variant:`primary`,children:`적용`})]})]})}},v=[`Default`,`Sizes`,`TextInputToggle`,`AlphaChannel`,`Disabled`,`LayerStyleForm`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    color: {
      r: 59,
      g: 130,
      b: 246,
      a: 1
    },
    disableAlpha: false,
    disableInput: false,
    disabled: false,
    side: 'bottom',
    align: 'start'
  },
  render: function Render(args) {
    const [color, setColor] = useState<RgbaColor>(args.color ?? {
      r: 59,
      g: 130,
      b: 246,
      a: 1
    });
    return <div className="flex flex-col items-center gap-3">\r
        <ColorPicker {...args} color={color} onChangeColor={newColor => {
        setColor(newColor);
        args.onChangeColor?.(newColor);
      }} />\r
        <span className="font-mono text-xs text-neutral-600">\r
          rgba({color.r}, {color.g}, {color.b}, {color.a.toFixed(2)})\r
        </span>\r
      </div>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [color, setColor] = useState<RgbaColor>({
      r: 239,
      g: 68,
      b: 68,
      a: 1
    });
    return <div className="flex flex-col gap-6 p-6">\r
        {/* Small (21px - size-5.25) */}\r
        <div className="flex flex-col gap-1.5">\r
          <span className="text-2xs font-semibold text-neutral-500">\r
            Small (sm - 21px)\r
          </span>\r
          <div className="flex items-center gap-2">\r
            <ColorPicker size="sm" color={color} onChangeColor={setColor} side="top" />\r
            <TextField size="sm" defaultValue="Small 텍스트" className="w-48" />\r
          </div>\r
        </div>\r
\r
        {/* Medium (27px - size-6.75) */}\r
        <div className="flex flex-col gap-1.5">\r
          <span className="text-2xs font-semibold text-neutral-500">\r
            Medium (md - 27px)\r
          </span>\r
          <div className="flex items-center gap-2">\r
            <ColorPicker size="md" color={color} onChangeColor={setColor} side="top" />\r
            <TextField size="md" defaultValue="Medium 텍스트" className="w-48" />\r
          </div>\r
        </div>\r
\r
        {/* Large (32px - size-8) */}\r
        <div className="flex flex-col gap-1.5">\r
          <span className="text-2xs font-semibold text-neutral-500">\r
            Large (lg - 32px)\r
          </span>\r
          <div className="flex items-center gap-2">\r
            <ColorPicker size="lg" color={color} onChangeColor={setColor} side="top" />\r
            <TextField size="lg" defaultValue="Large 텍스트" className="w-48" />\r
          </div>\r
        </div>\r
      </div>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [colorWithInput, setColorWithInput] = useState<RgbaColor>({
      r: 99,
      g: 102,
      b: 241,
      a: 1
    });
    const [colorWithoutInput, setColorWithoutInput] = useState<RgbaColor>({
      r: 236,
      g: 72,
      b: 153,
      a: 1
    });
    return <div className="flex items-center gap-10 p-6">\r
        <div className="flex flex-col gap-2">\r
          <span className="text-xs font-semibold text-secondary-foreground">\r
            텍스트 입력 활성화 (기본값)\r
          </span>\r
          <div className="flex items-center gap-3">\r
            <ColorPicker disableInput={false} color={colorWithInput} onChangeColor={setColorWithInput} />\r
            <span className="text-2xs text-neutral-500">\r
              하단에 HEX, RGB 입력창 표시\r
            </span>\r
          </div>\r
        </div>\r
\r
        <div className="flex flex-col gap-2">\r
          <span className="text-xs font-semibold text-secondary-foreground">\r
            텍스트 입력 비활성화 (disableInput)\r
          </span>\r
          <div className="flex items-center gap-3">\r
            <ColorPicker disableInput={true} color={colorWithoutInput} onChangeColor={setColorWithoutInput} />\r
            <span className="text-2xs text-neutral-500">\r
              팔레트 및 슬라이더만 표시\r
            </span>\r
          </div>\r
        </div>\r
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [alphaColor, setAlphaColor] = useState<RgbaColor>({
      r: 16,
      g: 185,
      b: 129,
      a: 0.5
    });
    const [solidColor, setSolidColor] = useState<RgbaColor>({
      r: 16,
      g: 185,
      b: 129,
      a: 1
    });
    return <div className="flex items-center gap-10 p-6">\r
        <div className="flex flex-col gap-2">\r
          <span className="text-xs font-semibold text-secondary-foreground">\r
            Alpha 포함 (투명도 조절)\r
          </span>\r
          <div className="flex items-center gap-3">\r
            <ColorPicker color={alphaColor} onChangeColor={setAlphaColor} />\r
            <span className="font-mono text-xs text-neutral-600">\r
              a: {alphaColor.a.toFixed(2)}\r
            </span>\r
          </div>\r
        </div>\r
\r
        <div className="flex flex-col gap-2">\r
          <span className="text-xs font-semibold text-secondary-foreground">\r
            Alpha 비활성화 (단색 전용)\r
          </span>\r
          <div className="flex items-center gap-3">\r
            <ColorPicker disableAlpha color={solidColor} onChangeColor={setSolidColor} />\r
            <span className="font-mono text-xs text-neutral-600">\r
              Solid RGB\r
            </span>\r
          </div>\r
        </div>\r
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4 p-6">\r
      <ColorPicker disabled color={{
      r: 107,
      g: 114,
      b: 128,
      a: 1
    }} />\r
      <span className="text-xs text-neutral-500">비활성화됨 (클릭 불가)</span>\r
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [strokeColor, setStrokeColor] = useState<RgbaColor>({
      r: 30,
      g: 41,
      b: 59,
      a: 1
    });
    const [fillColor, setFillColor] = useState<RgbaColor>({
      r: 59,
      g: 130,
      b: 246,
      a: 0.35
    });
    return <div className="flex w-84 flex-col gap-4 border border-secondary-border bg-white p-4">\r
        <div className="border-b border-secondary-border pb-2">\r
          <h4 className="text-sm font-semibold text-secondary-foreground">\r
            벡터 심볼 스타일\r
          </h4>\r
          <p className="text-footer-muted text-2xs">\r
            피처의 외곽선 및 채우기 색상을 지정합니다.\r
          </p>\r
        </div>\r
\r
        <div className="flex flex-col gap-3">\r
          <div className="flex items-center justify-between gap-3">\r
            <span className="text-xs text-neutral-700">외곽선 (Stroke)</span>\r
            <div className="flex items-center gap-2">\r
              <ColorPicker size="sm" color={strokeColor} onChangeColor={setStrokeColor} side="left" />\r
              <TextField size="sm" className="w-24 font-mono text-2xs" value={\`#\${strokeColor.r.toString(16).padStart(2, '0')}\${strokeColor.g.toString(16).padStart(2, '0')}\${strokeColor.b.toString(16).padStart(2, '0')}\`} readOnly />\r
            </div>\r
          </div>\r
\r
          <div className="flex items-center justify-between gap-3">\r
            <span className="text-xs text-neutral-700">채우기 (Fill)</span>\r
            <div className="flex items-center gap-2">\r
              <ColorPicker size="sm" color={fillColor} onChangeColor={setFillColor} side="left" />\r
              <span className="w-24 text-right font-mono text-xs text-neutral-600">\r
                {(fillColor.a * 100).toFixed(0)}%\r
              </span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div className="flex justify-end gap-1.5 border-t border-secondary-border pt-2">\r
          <Button size="sm" variant="outline-secondary">\r
            초기화\r
          </Button>\r
          <Button size="sm" variant="primary">\r
            적용\r
          </Button>\r
        </div>\r
      </div>;
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{h as AlphaChannel,f as Default,g as Disabled,_ as LayerStyleForm,p as Sizes,m as TextInputToggle,v as __namedExportsOrder,d as default};