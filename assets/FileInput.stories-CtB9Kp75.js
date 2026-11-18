import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-sFfd_MYY.js";import{n as r,t as i}from"./FileInput-Bu1q6ou0.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{a=t(),r(),o=n(),{expect:s,fireEvent:c,fn:l,userEvent:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/FileInput`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{type:{control:`inline-radio`,options:[`file`,`folder`],description:`선택 모드 (단일/다중 파일 또는 폴더 선택)`},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`],description:`버튼 크기`},disabled:{control:`boolean`,description:`비활성화 여부`},multiple:{control:`boolean`,description:`다중 파일 선택 허용 여부`},accept:{control:`text`,description:`허용할 파일 확장자 또는 MIME 타입 (예: .png, .jpg, image/*)`},resetOnChange:{control:`boolean`,description:`선택 완료 후 input value를 초기화하여 동일 파일 재선택 허용 여부`},children:{control:`text`,description:`버튼 라벨 텍스트`}},args:{type:`file`,size:`md`,disabled:!1,multiple:!1,resetOnChange:!0,children:`파일선택`,onChange:l()}},p={render:function(e){let{children:t,onChange:n,...r}=e,[s,c]=(0,a.useState)(``),l=e=>{n?.(e);let t=e[0];t&&c(t.name)},u=`선택한 파일 없음`;return s.length>0&&(u=s),(0,o.jsxs)(`div`,{className:`flex items-center gap-x-2`,children:[(0,o.jsx)(i,{...r,onChange:l,children:t??`파일선택`}),(0,o.jsx)(`span`,{className:`text-xs text-neutral-600 select-none`,children:u})]})},play:async({canvasElement:e,args:t})=>{let n=d(e),r=n.getByLabelText(`파일선택`);r.focus(),await u.keyboard(`{Escape}`),await u.keyboard(`{Enter}`);let i=new File([`{"type":"FeatureCollection"}`],`roads.geojson`,{type:`application/geo+json`});await u.upload(r,i),await s(t.onChange).toHaveBeenCalledTimes(1),await s(n.getByText(`roads.geojson`)).toBeInTheDocument()}},m={...p,args:{disabled:!0},play:async({canvasElement:e})=>{let t=d(e).getByLabelText(`파일선택`);await s(t).toBeDisabled(),await c.keyDown(t,{key:`Enter`})}},h={args:{multiple:!0,resetOnChange:!1,children:`다중 파일선택`},render:function(e){let{children:t,onChange:n,...r}=e,[s,c]=(0,a.useState)(0),[l,u]=(0,a.useState)(``),d=e=>{n?.(e),c(e.length);let t=e[0];t&&u(t.name)},f=`선택한 파일 없음`;return s===1?f=l:s>1&&(f=`${l} 외 ${s-1}개 파일`),(0,o.jsxs)(`div`,{className:`flex items-center gap-x-2`,children:[(0,o.jsx)(i,{...r,onChange:d,children:t??`다중 파일선택`}),(0,o.jsx)(`span`,{className:`text-xs text-neutral-600 select-none`,children:f})]})},play:async({canvasElement:e,args:t})=>{let n=d(e),r=n.getByLabelText(`다중 파일선택`),i=[new File([`a`],`layer1.shp`,{type:`application/octet-stream`}),new File([`b`],`layer1.dbf`,{type:`application/octet-stream`})];await u.upload(r,i),await s(t.onChange).toHaveBeenCalledTimes(1),await s(n.getByText(`layer1.shp 외 1개 파일`)).toBeInTheDocument()}},g={render:function(e){let{children:t,onChange:n,...r}=e,[s,c]=(0,a.useState)(``),l=e=>{n?.(e),e.length>0&&c(`총 ${e.length}개의 파일이 포함된 폴더가 선택되었습니다.`)},u=`선택한 폴더 없음`;return s.length>0&&(u=s),(0,o.jsxs)(`div`,{className:`flex items-center gap-x-2`,children:[(0,o.jsx)(i,{...r,type:`folder`,onChange:l,children:t??`폴더선택`}),(0,o.jsx)(`span`,{className:`text-xs text-neutral-600 select-none`,children:u})]})}},_={render:()=>(0,o.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,o.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,o.jsx)(i,{size:`sm`,children:`파일선택 (sm)`}),(0,o.jsx)(`span`,{className:`text-2xs text-neutral-500`,children:`Small`})]}),(0,o.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,o.jsx)(i,{size:`md`,children:`파일선택 (md)`}),(0,o.jsx)(`span`,{className:`text-2xs text-neutral-500`,children:`Medium`})]}),(0,o.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,o.jsx)(i,{size:`lg`,children:`파일선택 (lg)`}),(0,o.jsx)(`span`,{className:`text-2xs text-neutral-500`,children:`Large`})]})]})},v=[`Default`,`Disabled`,`Multiple`,`FolderSelect`,`Sizes`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      children,
      onChange,
      ...rest
    } = args;
    const [selectedName, setSelectedName] = useState<string>('');
    const handleChange = (files: FileList) => {
      onChange?.(files);
      const first = files[0];
      if (first) {
        setSelectedName(first.name);
      }
    };
    let displayLabel = '선택한 파일 없음';
    if (selectedName.length > 0) {
      displayLabel = selectedName;
    }
    return <div className="flex items-center gap-x-2">
        <FileInput {...rest} onChange={handleChange}>
          {children ?? '파일선택'}
        </FileInput>
        <span className="text-xs text-neutral-600 select-none">
          {displayLabel}
        </span>
      </div>;
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('파일선택');

    // 1. 키보드 Enter 입력 -> handleKeyDown 및 triggerFilePicker 실행
    input.focus();
    await userEvent.keyboard('{Escape}');
    await userEvent.keyboard('{Enter}');

    // 2. 파일 업로드 -> handleChange 및 resetOnChange=true 분기 실행
    const sampleFile = new File(['{"type":"FeatureCollection"}'], 'roads.geojson', {
      type: 'application/geo+json'
    });
    await userEvent.upload(input, sampleFile);
    await expect(args.onChange).toHaveBeenCalledTimes(1);
    await expect(canvas.getByText('roads.geojson')).toBeInTheDocument();
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('파일선택');
    await expect(input).toBeDisabled();
    await fireEvent.keyDown(input, {
      key: 'Enter'
    });
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: true,
    resetOnChange: false,
    children: '다중 파일선택'
  },
  render: function Render(args) {
    const {
      children,
      onChange,
      ...rest
    } = args;
    const [fileCount, setFileCount] = useState<number>(0);
    const [firstName, setFirstName] = useState<string>('');
    const handleChange = (files: FileList) => {
      onChange?.(files);
      setFileCount(files.length);
      const first = files[0];
      if (first) {
        setFirstName(first.name);
      }
    };
    let displayText = '선택한 파일 없음';
    if (fileCount === 1) {
      displayText = firstName;
    } else if (fileCount > 1) {
      displayText = \`\${firstName} 외 \${fileCount - 1}개 파일\`;
    }
    return <div className="flex items-center gap-x-2">
        <FileInput {...rest} onChange={handleChange}>
          {children ?? '다중 파일선택'}
        </FileInput>
        <span className="text-xs text-neutral-600 select-none">
          {displayText}
        </span>
      </div>;
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('다중 파일선택');
    const files = [new File(['a'], 'layer1.shp', {
      type: 'application/octet-stream'
    }), new File(['b'], 'layer1.dbf', {
      type: 'application/octet-stream'
    })];
    await userEvent.upload(input, files);
    await expect(args.onChange).toHaveBeenCalledTimes(1);
    await expect(canvas.getByText('layer1.shp 외 1개 파일')).toBeInTheDocument();
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      children,
      onChange,
      ...rest
    } = args;
    const [folderInfo, setFolderInfo] = useState<string>('');
    const handleChange = (files: FileList) => {
      onChange?.(files);
      if (files.length > 0) {
        setFolderInfo(\`총 \${files.length}개의 파일이 포함된 폴더가 선택되었습니다.\`);
      }
    };
    let displayText = '선택한 폴더 없음';
    if (folderInfo.length > 0) {
      displayText = folderInfo;
    }
    return <div className="flex items-center gap-x-2">
        <FileInput {...rest} type="folder" onChange={handleChange}>
          {children ?? '폴더선택'}
        </FileInput>
        <span className="text-xs text-neutral-600 select-none">
          {displayText}
        </span>
      </div>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <FileInput size="sm">파일선택 (sm)</FileInput>
        <span className="text-2xs text-neutral-500">Small</span>
      </div>
      <div className="flex items-center gap-2">
        <FileInput size="md">파일선택 (md)</FileInput>
        <span className="text-2xs text-neutral-500">Medium</span>
      </div>
      <div className="flex items-center gap-2">
        <FileInput size="lg">파일선택 (lg)</FileInput>
        <span className="text-2xs text-neutral-500">Large</span>
      </div>
    </div>
}`,..._.parameters?.docs?.source}}}})))()}y();export{p as Default,m as Disabled,g as FolderSelect,h as Multiple,_ as Sizes,v as __namedExportsOrder,f as default};