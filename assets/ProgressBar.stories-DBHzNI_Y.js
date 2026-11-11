import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-D3lwOebq.js";import{c as r,t as i}from"./utils-Cjde27Em.js";import{n as a,t as o}from"./dist-81uMrw1m.js";function s({progress:e=0,size:t=`md`,variant:n=`primary`,label:r=`진행률`,className:a,ref:o,...s}){let d=Math.min(Math.max(e,0),100),f;return f=d>=100?-1:d<=0?`100%`:`${100-d}%`,(0,c.jsx)(`div`,{ref:o,role:`progressbar`,"aria-valuenow":d,"aria-valuemin":0,"aria-valuemax":100,"aria-label":r,className:i(l({size:t}),a),...s,children:(0,c.jsx)(`div`,{className:u({variant:n}),style:{right:f}})})}var c,l,u;function d(){return(d=e((()=>{a(),r(),c=n(),l=o(`relative box-border inline-block min-w-5 overflow-hidden rounded-none border border-secondary-border bg-white`,{variants:{size:{sm:`h-2`,md:`h-3`,lg:`h-4`}},defaultVariants:{size:`md`}}),u=o(`absolute -top-px -bottom-px -left-px transition-all duration-150`,{variants:{variant:{primary:`bg-primary`,secondary:`bg-secondary-foreground`,destructive:`bg-destructive`}},defaultVariants:{variant:`primary`}}),s.__docgenInfo={description:``,methods:[],displayName:`ProgressBar`,props:{progress:{defaultValue:{value:`0`,computed:!1},required:!1},size:{defaultValue:{value:`'md'`,computed:!1},required:!1},variant:{defaultValue:{value:`'primary'`,computed:!1},required:!1},label:{defaultValue:{value:`'진행률'`,computed:!1},required:!1}}}})))()}var f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{f=t(),d(),p=n(),m={title:`Components/ProgressBar`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{progress:{control:{type:`range`,min:0,max:100,step:1},description:`진행률 퍼센트 (0 ~ 100)`},variant:{control:`select`,options:[`primary`,`secondary`,`destructive`],description:`진행 바의 색상 테마`},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`],description:`진행 바의 높이 (sm: 8px, md: 12px, lg: 16px)`},label:{control:`text`,description:`스크린 리더 접근성용 라벨`},className:{control:`text`,description:`추가 Tailwind CSS 클래스 (너비 등 조정)`}},args:{progress:50,size:`md`,variant:`primary`,label:`진행률`,className:`w-64`}},h={args:{progress:60}},g={render:()=>(0,p.jsxs)(`div`,{className:`flex w-64 flex-col gap-4`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Primary`}),(0,p.jsx)(s,{variant:`primary`,progress:70,className:`w-full`})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Secondary`}),(0,p.jsx)(s,{variant:`secondary`,progress:50,className:`w-full`})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Destructive`}),(0,p.jsx)(s,{variant:`destructive`,progress:30,className:`w-full`})]})]})},_={render:()=>(0,p.jsxs)(`div`,{className:`flex w-64 flex-col gap-4`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Small (sm - 8px)`}),(0,p.jsx)(s,{size:`sm`,progress:60,className:`w-full`})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Medium (md - 12px)`}),(0,p.jsx)(s,{size:`md`,progress:60,className:`w-full`})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`span`,{className:`mb-1 block text-2xs font-semibold text-neutral-500`,children:`Large (lg - 16px)`}),(0,p.jsx)(s,{size:`lg`,progress:60,className:`w-full`})]})]})},v={render:()=>(0,p.jsxs)(`div`,{className:`flex w-64 flex-col gap-4`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(`div`,{className:`mb-1 flex justify-between text-2xs font-semibold text-neutral-500`,children:[(0,p.jsx)(`span`,{children:`0%`}),(0,p.jsx)(`span`,{children:`미진행`})]}),(0,p.jsx)(s,{progress:0,className:`w-full`})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(`div`,{className:`mb-1 flex justify-between text-2xs font-semibold text-neutral-500`,children:[(0,p.jsx)(`span`,{children:`50%`}),(0,p.jsx)(`span`,{children:`진행 중`})]}),(0,p.jsx)(s,{progress:50,className:`w-full`})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(`div`,{className:`mb-1 flex justify-between text-2xs font-semibold text-neutral-500`,children:[(0,p.jsx)(`span`,{children:`100%`}),(0,p.jsx)(`span`,{children:`완료`})]}),(0,p.jsx)(s,{progress:100,className:`w-full`})]})]})},y={render:function(e){let[t,n]=(0,f.useState)(0);return(0,f.useEffect)(()=>{let e=setInterval(()=>{n(e=>e>=100?0:e+10)},500);return()=>clearInterval(e)},[]),(0,p.jsxs)(`div`,{className:`flex w-64 flex-col gap-2`,children:[(0,p.jsxs)(`div`,{className:`flex justify-between text-xs text-neutral-600`,children:[(0,p.jsx)(`span`,{children:`다운로드 중...`}),(0,p.jsxs)(`span`,{className:`font-semibold`,children:[t,`%`]})]}),(0,p.jsx)(s,{...e,progress:t,className:`w-full`})]})}},b=[`Default`,`Variants`,`Sizes`,`Boundaries`,`Animated`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    progress: 60
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-64 flex-col gap-4">
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          Primary
        </span>
        <ProgressBar variant="primary" progress={70} className="w-full" />
      </div>
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          Secondary
        </span>
        <ProgressBar variant="secondary" progress={50} className="w-full" />
      </div>
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          Destructive
        </span>
        <ProgressBar variant="destructive" progress={30} className="w-full" />
      </div>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-64 flex-col gap-4">
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          Small (sm - 8px)
        </span>
        <ProgressBar size="sm" progress={60} className="w-full" />
      </div>
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          Medium (md - 12px)
        </span>
        <ProgressBar size="md" progress={60} className="w-full" />
      </div>
      <div>
        <span className="mb-1 block text-2xs font-semibold text-neutral-500">
          Large (lg - 16px)
        </span>
        <ProgressBar size="lg" progress={60} className="w-full" />
      </div>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-64 flex-col gap-4">
      <div>
        <div className="mb-1 flex justify-between text-2xs font-semibold text-neutral-500">
          <span>0%</span>
          <span>미진행</span>
        </div>
        <ProgressBar progress={0} className="w-full" />
      </div>
      <div>
        <div className="mb-1 flex justify-between text-2xs font-semibold text-neutral-500">
          <span>50%</span>
          <span>진행 중</span>
        </div>
        <ProgressBar progress={50} className="w-full" />
      </div>
      <div>
        <div className="mb-1 flex justify-between text-2xs font-semibold text-neutral-500">
          <span>100%</span>
          <span>완료</span>
        </div>
        <ProgressBar progress={100} className="w-full" />
      </div>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            return 0;
          }
          return prev + 10;
        });
      }, 500);
      return () => clearInterval(timer);
    }, []);
    return <div className="flex w-64 flex-col gap-2">
        <div className="flex justify-between text-xs text-neutral-600">
          <span>다운로드 중...</span>
          <span className="font-semibold">{progress}%</span>
        </div>
        <ProgressBar {...args} progress={progress} className="w-full" />
      </div>;
  }
}`,...y.parameters?.docs?.source}}}})))()}x();export{y as Animated,v as Boundaries,h as Default,_ as Sizes,g as Variants,b as __namedExportsOrder,m as default};