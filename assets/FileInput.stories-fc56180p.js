import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-BKXkO2qw.js";import{n as r,t as i}from"./FileInput-oyQUeCOh.js";var a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{a=t(),r(),o=n(),s={title:`Components/FileInput`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{type:{control:`inline-radio`,options:[`file`,`folder`],description:`선택 모드 (단일/다중 파일 또는 폴더 선택)`},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`],description:`버튼 크기`},disabled:{control:`boolean`,description:`비활성화 여부`},multiple:{control:`boolean`,description:`다중 파일 선택 허용 여부`},accept:{control:`text`,description:`허용할 파일 확장자 또는 MIME 타입 (예: .png, .jpg, image/*)`},resetOnChange:{control:`boolean`,description:`선택 완료 후 input value를 초기화하여 동일 파일 재선택 허용 여부`},children:{control:`text`,description:`버튼 라벨 텍스트`},onChange:{action:`changed`,description:`파일 선택 시 호출되는 콜백 함수`}},args:{type:`file`,size:`md`,disabled:!1,multiple:!1,resetOnChange:!0,children:`파일선택`}},c={render:function(e){let{children:t,onChange:n,...r}=e,[s,c]=(0,a.useState)(``),l=e=>{n?.(e);let t=e[0];t&&c(t.name)},u=`선택한 파일 없음`;return s.length>0&&(u=s),(0,o.jsxs)(`div`,{className:`flex items-center gap-x-2`,children:[(0,o.jsx)(i,{...r,onChange:l,children:t??`파일선택`}),(0,o.jsx)(`span`,{className:`text-xs text-neutral-600 select-none`,children:u})]})}},l={...c,args:{disabled:!0}},u={render:function(e){let{children:t,onChange:n,...r}=e,[s,c]=(0,a.useState)(0),[l,u]=(0,a.useState)(``),d=e=>{n?.(e),c(e.length);let t=e[0];t&&u(t.name)},f=`선택한 파일 없음`;return s===1?f=l:s>1&&(f=`${l} 외 ${s-1}개 파일`),(0,o.jsxs)(`div`,{className:`flex items-center gap-x-2`,children:[(0,o.jsx)(i,{...r,multiple:!0,onChange:d,children:t??`다중 파일선택`}),(0,o.jsx)(`span`,{className:`text-xs text-neutral-600 select-none`,children:f})]})}},d={render:function(e){let{children:t,onChange:n,...r}=e,[s,c]=(0,a.useState)(``),l=e=>{n?.(e),e.length>0&&c(`총 ${e.length}개의 파일이 포함된 폴더가 선택되었습니다.`)},u=`선택한 폴더 없음`;return s.length>0&&(u=s),(0,o.jsxs)(`div`,{className:`flex items-center gap-x-2`,children:[(0,o.jsx)(i,{...r,type:`folder`,onChange:l,children:t??`폴더선택`}),(0,o.jsx)(`span`,{className:`text-xs text-neutral-600 select-none`,children:u})]})}},f={render:()=>(0,o.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,o.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,o.jsx)(i,{size:`sm`,children:`파일선택 (sm)`}),(0,o.jsx)(`span`,{className:`text-2xs text-neutral-500`,children:`Small`})]}),(0,o.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,o.jsx)(i,{size:`md`,children:`파일선택 (md)`}),(0,o.jsx)(`span`,{className:`text-2xs text-neutral-500`,children:`Medium`})]}),(0,o.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,o.jsx)(i,{size:`lg`,children:`파일선택 (lg)`}),(0,o.jsx)(`span`,{className:`text-2xs text-neutral-500`,children:`Large`})]})]})},p=[`Default`,`Disabled`,`Multiple`,`FolderSelect`,`Sizes`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    disabled: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
        <FileInput {...rest} multiple onChange={handleChange}>
          {children ?? '다중 파일선택'}
        </FileInput>
        <span className="text-xs text-neutral-600 select-none">
          {displayText}
        </span>
      </div>;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}}})))()}m();export{c as Default,l as Disabled,d as FolderSelect,u as Multiple,f as Sizes,p as __namedExportsOrder,s as default};