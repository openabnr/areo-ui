import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-BZtAOQya.js";import{c as r,t as i}from"./utils-CynS5U15.js";import{n as a,t as o}from"./dist-kEwxpQyq.js";import{n as s,t as c}from"./Checkbox-DBMgQYdQ.js";import{n as l,t as u}from"./TextField-CEdXki37.js";function d(e){return e.map((e,t)=>({key:e.key??`col-${t}`,text:e.title,checkbox:e.checkbox,width:e.width,align:e.align,resize:e.resize??!0}))}function f(e,t,n){return e.map((r,i)=>{let a=t[r.key];if(n&&i===e.length-1&&a===void 0)return`1fr`;let o=a??r.width;return o!==void 0&&o>0?`${o}px`:`1fr`}).join(` `)}function p(e,t,n,r){if(e<=0)return{startIndex:0,visibleCount:0,offsetY:0};let i=Number.isFinite(t)&&t>0?t:1,a=Number.isFinite(n)&&n>0?n:0,o=Number.isFinite(r)&&r>0?r:0,s=Math.max(Math.floor(a/i)-5,0),c=Math.floor(o/i+10);return{startIndex:s,visibleCount:Math.min(c,Math.max(e-s,0)),offsetY:s*i}}function m(e,t,n,r,i,a){let o={...e};return t.forEach((e,s)=>{if(i&&s===t.length-1){delete o[e.key];return}if(s===n){o[e.key]=r;return}if(o[e.key]===void 0){let t=a[s]?.offsetWidth;t!==void 0&&(o[e.key]=t)}}),o}function h(e,t,n,r,i,a){let o=n[t];if(!o)return null;let s=Number.isFinite(i)&&i>0?i:1,c=e-o.getBoundingClientRect().left;if(c<s)return null;let l=a&&r>=2&&t===r-2?n[t+1]:null;if(l){let t=l.getBoundingClientRect();if(t.left-e+t.width<s)return null}return c}function g(e,t,n){let r=e.dataset.rowIndex;if(r!==void 0){let e=Number(r);if(Number.isInteger(e)&&e>=0)return e}return n+t}function _(e){return Array.from(e.querySelectorAll(`tbody tr:not([data-empty-row="true"])`))}function v(e,t,n){_(e).forEach((e,r)=>{let i=g(e,r,n);e.classList.toggle(`select`,i===t)})}function y(e,t,n){let[r,i]=(0,T.useState)({}),[a,o]=(0,T.useState)(null),s=(0,T.useRef)([]),c=(0,T.useRef)(null),l=(0,T.useRef)(null);return(0,T.useEffect)(()=>()=>{l.current?.()},[]),{customWidths:r,activeResizeIndex:a,colTrackRefs:s,handleResizeStart:(0,T.useCallback)((r,a)=>{a.preventDefault(),a.stopPropagation(),l.current?.(),c.current=r,o(r);let u=a.currentTarget.ownerDocument,d=r=>{let a=c.current;if(a===null)return;let o=h(r.clientX,a,s.current,e.length,t,n);o!==null&&i(t=>m(t,e,a,o,n,s.current))},f=()=>{c.current=null,o(null),u.removeEventListener(`mousemove`,d),u.removeEventListener(`mouseup`,f),l.current=null};l.current=f,u.addEventListener(`mousemove`,d),u.addEventListener(`mouseup`,f)},[e,t,n])}}function b({tableBodyRef:e,variant:t,selectedRow:n,isControlledSelection:r,rowOffset:i,content:a,virtualRowCount:o,virtualVisibleCount:s,onItemClick:c,onSelectInternal:l}){(0,T.useEffect)(()=>{let a=e.current;if(!a||t!==`selectable`)return;v(a,n,i);let o=e=>{if(!(e.target instanceof Element)||e.target.closest(j))return;let t=e.target.closest(`tr`);if(!t||!a.contains(t)||t.dataset.emptyRow===`true`)return;let n=_(a).indexOf(t);if(n===-1)return;let o=g(t,n,i);r||(v(a,o,i),l(o)),c?.(o)};return a.addEventListener(`click`,o),()=>{a.removeEventListener(`click`,o)}},[e,t,n,r,a,c,l,i,o,s])}function x({virtualize:e,range:t}){let{rowCount:n,rowHeight:r,renderRow:i,noData:a}=e;if(n===0)return a?(0,E.jsx)(`tbody`,{children:(0,E.jsx)(`tr`,{"data-empty-row":`true`,children:(0,E.jsx)(`td`,{style:{gridColumn:`1 / -1`,width:`100%`,minHeight:40,position:`relative`,justifyContent:`center`},children:a})})}):null;let o=[];for(let e=0;e<t.visibleCount;e+=1){let n=t.startIndex+e;o.push(i(n,{height:r,overflow:`visible`,transform:`translateY(${t.offsetY}px)`}))}return(0,E.jsx)(`tbody`,{children:o})}function S({scrollHeadRef:e,visibleHeaders:t,tableWidthFixed:n,headerGridTemplate:r,columns:a,headerStyle:o,checkProps:s}){return(0,E.jsx)(`div`,{ref:e,inert:!t||void 0,className:i(`head-scroll w-full shrink-0 overflow-hidden`,!t&&`invisible h-0 border-b-0`),children:(0,E.jsx)(`table`,{className:i(`scroll-header`,!n&&`w-max min-w-full`),style:{gridTemplateColumns:r},children:(0,E.jsx)(`thead`,{children:(0,E.jsxs)(`tr`,{children:[a.map(e=>{let t=typeof e.text==`string`&&e.text.trim()?e.text:`전체 선택`;return(0,E.jsx)(`th`,{style:{...o,justifyContent:e.align?k[e.align]:void 0,textAlign:e.align?A[e.align]:void 0},children:e.checkbox?(0,E.jsx)(c,{"aria-label":t,checked:s?.checked??!1,indeterminate:s?.indeterminate??!1,disabled:s?.disabled??!1,onCheckedChange:e=>s?.onChange?.(!!e)}):(0,E.jsx)(`span`,{children:e.text})},e.key)}),(0,E.jsx)(`th`,{className:`p-0`})]})})})})}function C({scrollResizeRef:e,tableWidthFixed:t,headerGridTemplate:n,columns:r,activeResizeIndex:a,colTrackRefs:o,onResizeStart:s}){return(0,E.jsx)(`div`,{ref:e,className:`pointer-events-none absolute inset-0 z-20 overflow-hidden`,children:(0,E.jsxs)(`div`,{className:i(`grid h-full`,t?`w-full`:`w-max min-w-full`),style:{gridTemplateColumns:n},children:[r.map((e,t)=>{let n=e.resize&&t!==r.length-1;return(0,E.jsx)(`div`,{ref:e=>(o.current[t]=e,()=>{o.current[t]===e&&(o.current[t]=null)}),className:`relative h-full`,children:n&&(0,E.jsx)(`button`,{type:`button`,tabIndex:-1,"aria-label":`컬럼 너비 조절`,onMouseDown:e=>s(t,e),className:i(`resize-handle pointer-events-auto absolute top-0 -right-1 bottom-0 z-10 block w-1.75 cursor-ew-resize border-0 p-0 transition-colors focus-visible:outline-none`,a===t?`bg-resizable-background/30`:`bg-transparent hover:bg-resizable-background/20 active:bg-resizable-background/30`)})},`resize-track-${e.key}`)}),(0,E.jsx)(`div`,{className:`h-full`})]})})}function w({headers:e,visibleHeaders:t=!0,minCellWidth:n=60,content:r,virtualize:a,tableWidthFixed:o=!0,noScroll:s=!1,headerStyle:c,variant:l=`default`,resizableColumn:u=!0,onItemClick:m,selectIndex:h,style:g,className:_,checkProps:v,ref:w,...D}){let k=(0,T.useMemo)(()=>d(e),[e]),[A,j]=(0,T.useState)(h??-1),[M,N]=(0,T.useState)(0),[P,F]=(0,T.useState)(200),[I,L]=(0,T.useState)(s?0:17),R=h!==void 0,z=h??A,B=(0,T.useRef)(null),V=(0,T.useRef)(null),H=(0,T.useRef)(null),U=(0,T.useRef)(null),W=!r&&!!a,G=a?.rowCount??0,K=a?.rowHeight??0,q=(0,T.useMemo)(()=>W?p(G,K,M,P):{startIndex:0,visibleCount:0,offsetY:0},[W,G,K,M,P]);(0,T.useEffect)(()=>{let e=H.current;if(!e)return;let t=()=>{F(e.clientHeight);let t=s?0:Math.max(0,e.offsetWidth-e.clientWidth);L(t)},n=requestAnimationFrame(t),r=new ResizeObserver(t);return r.observe(e),()=>{cancelAnimationFrame(n),r.disconnect()}},[s,r,G]);let{customWidths:J,activeResizeIndex:Y,colTrackRefs:X,handleResizeStart:Z}=y(k,n,o);b({tableBodyRef:U,variant:l,selectedRow:z,isControlledSelection:R,rowOffset:W?q.startIndex:0,content:r,virtualRowCount:G,virtualVisibleCount:q.visibleCount,onItemClick:m,onSelectInternal:j});let ee=e=>{let t=e.currentTarget;B.current&&(B.current.scrollLeft=t.scrollLeft),V.current&&(V.current.scrollLeft=t.scrollLeft),W&&N(t.scrollTop)},Q=f(k,J,o),$=`${Q} ${I}px`,te=W&&G>0&&a?`repeat(${G}, ${a.rowHeight}px)`:void 0,ne=!W&&typeof r==`function`?r():r;return(0,E.jsxs)(`div`,{ref:w,style:g,className:i(O({variant:l}),s&&`border-b-0`,_),...D,children:[(0,E.jsx)(S,{scrollHeadRef:B,visibleHeaders:t,tableWidthFixed:o,headerGridTemplate:$,columns:k,headerStyle:c,checkProps:v}),(0,E.jsx)(`div`,{ref:H,onScroll:ee,className:i(`scroll-body min-h-0 w-full flex-1 bg-white`,o?`overflow-x-hidden`:`overflow-x-auto`,s?`h-auto overflow-y-hidden`:`overflow-y-scroll`),children:(0,E.jsxs)(`table`,{ref:U,className:i(`body-table`,!o&&`w-max min-w-full`),style:{gridTemplateColumns:Q,gridTemplateRows:te,position:W?`relative`:void 0,height:W&&G===0?`auto`:void 0},children:[!W&&ne,W&&a&&(0,E.jsx)(x,{virtualize:a,range:q})]})}),u&&(0,E.jsx)(C,{scrollResizeRef:V,tableWidthFixed:o,headerGridTemplate:$,columns:k,activeResizeIndex:Y,colTrackRefs:X,onResizeStart:Z})]})}var T,E,D,O,k,A,j;function M(){return(M=e((()=>{T=t(),a(),r(),s(),E=n(),D={width:`100%`,margin:0,height:40,lineHeight:`40px`,textAlign:`center`,color:`var(--areo-muted-foreground, #666666)`,fontSize:12},O=o(`areo-property-table relative box-border flex w-full flex-col overflow-hidden border border-secondary-border border-t-secondary-foreground bg-white font-sans text-xs text-secondary-foreground select-none`,{variants:{variant:{default:``,selectable:`is-selectable`}},defaultVariants:{variant:`default`}}),k={left:`flex-start`,center:`center`,right:`flex-end`},A={left:`left`,center:`center`,right:`right`},j=`.areo-checkbox, [role="checkbox"], input[type="checkbox"], button, label`,w.__docgenInfo={description:``,methods:[],displayName:`PropertyTable`,props:{visibleHeaders:{defaultValue:{value:`true`,computed:!1},required:!1},minCellWidth:{defaultValue:{value:`60`,computed:!1},required:!1},tableWidthFixed:{defaultValue:{value:`true`,computed:!1},required:!1},noScroll:{defaultValue:{value:`false`,computed:!1},required:!1},variant:{defaultValue:{value:`'default'`,computed:!1},required:!1},resizableColumn:{defaultValue:{value:`true`,computed:!1},required:!1}}}})))()}var N,P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=e((()=>{N=t(),s(),M(),l(),P=n(),F={title:`Components/PropertyTable`,component:w,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:"`PropertyTable`은 CSS Grid(`display: contents`) 기반의 고정 헤더, 컬럼 리사이징, 행 선택(`selectable`), 대용량 가상 스크롤(`virtualize`)을 지원하는 속성 테이블 컴포넌트입니다."}}},argTypes:{variant:{control:`radio`,options:[`default`,`selectable`],description:`테이블 행 선택 가능 여부 및 호버 스타일 변형입니다.`,table:{type:{summary:`'default' | 'selectable'`},defaultValue:{summary:`'default'`}}},visibleHeaders:{control:`boolean`,description:`상단 컬럼 헤더 표시 여부입니다.`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},resizableColumn:{control:`boolean`,description:`마우스 드래그를 통한 컬럼 너비 조절 허용 여부입니다.`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},tableWidthFixed:{control:`boolean`,description:"마지막 컬럼을 `1fr`로 고정하여 가로 스크롤을 숨길지 여부입니다.",table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},noScroll:{control:`boolean`,description:`세로 스크롤바를 비활성화하고 내용 높이에 맞출지 여부입니다.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},minCellWidth:{control:`number`,description:`컬럼 리사이징 시 허용되는 최소 셀 너비(px)입니다.`,table:{type:{summary:`number`},defaultValue:{summary:`60`}}},onItemClick:{action:`rowClicked`,description:'`variant="selectable"`일 때 행 클릭 시 호출되는 콜백입니다.'}},decorators:[e=>(0,P.jsx)(`div`,{className:`w-150`,children:(0,P.jsx)(e,{})})]},I=[{key:`prop`,title:`속성명`,width:160},{key:`type`,title:`타입`,width:120,align:`center`},{key:`value`,title:`값`}],L=[{id:`layer_id`,name:`레이어 ID`,type:`String`,value:`L_ROAD_LINK_2026`},{id:`srid`,name:`좌표계 (SRID)`,type:`Integer`,value:`5186`},{id:`geom_type`,name:`지오메트리`,type:`Geometry`,value:`MultiLineString`},{id:`feature_cnt`,name:`객체 수`,type:`Integer`,value:`14,820`},{id:`min_zoom`,name:`최소 줌 레벨`,type:`Double`,value:`10.0`},{id:`max_zoom`,name:`최대 줌 레벨`,type:`Double`,value:`19.5`},{id:`visible`,name:`화면 표시`,type:`Boolean`,value:`true`},{id:`editable`,name:`편집 가능`,type:`Boolean`,value:`false`}],R={args:{headers:I,variant:`default`,visibleHeaders:!0,resizableColumn:!0,tableWidthFixed:!0,noScroll:!1,style:{height:180},content:(0,P.jsx)(`tbody`,{children:L.map(e=>(0,P.jsxs)(`tr`,{children:[(0,P.jsx)(`td`,{children:(0,P.jsx)(`span`,{children:e.name})}),(0,P.jsx)(`td`,{className:`justify-center text-muted-foreground`,children:(0,P.jsx)(`span`,{children:e.type})}),(0,P.jsx)(`td`,{children:(0,P.jsx)(`span`,{children:e.value})})]},e.id))})}},z={args:{headers:[{key:`header`,title:``,width:160},{key:`col2`,title:``,width:200},{key:`col3`,title:``}],visibleHeaders:!1,resizableColumn:!0,tableWidthFixed:!0,noScroll:!1,style:{height:180},content:(0,P.jsx)(`tbody`,{children:L.map(e=>(0,P.jsxs)(`tr`,{children:[(0,P.jsx)(`th`,{scope:`row`,children:(0,P.jsx)(`span`,{children:e.name})}),(0,P.jsx)(`td`,{children:(0,P.jsx)(`span`,{children:e.type})}),(0,P.jsx)(`td`,{children:(0,P.jsx)(`span`,{children:e.value})})]},e.id))})}},B={render:()=>{let[e,t]=(0,N.useState)(1);return(0,P.jsxs)(`div`,{className:`flex flex-col gap-2 font-sans text-xs`,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between text-muted-foreground`,children:[(0,P.jsx)(`span`,{children:`행을 클릭하여 선택 상태를 확인하세요.`}),(0,P.jsxs)(`span`,{className:`font-medium text-primary`,children:[`선택된 행 인덱스: `,e]})]}),(0,P.jsx)(w,{headers:I,variant:`selectable`,selectIndex:e,onItemClick:t,style:{height:180},content:(0,P.jsx)(`tbody`,{children:L.map(e=>(0,P.jsxs)(`tr`,{children:[(0,P.jsx)(`td`,{children:(0,P.jsx)(`span`,{children:e.name})}),(0,P.jsx)(`td`,{className:`justify-center`,children:(0,P.jsx)(`span`,{children:e.type})}),(0,P.jsx)(`td`,{children:(0,P.jsx)(`span`,{children:e.value})})]},e.id))})})]})}},V={render:()=>{let[e,t]=(0,N.useState)(()=>new Set([`layer_id`,`srid`])),n=e.size===L.length,r=e.size>0&&e.size<L.length,i=()=>{t(e=>e.size===L.length?new Set:new Set(L.map(e=>e.id)))},a=e=>{t(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})};return(0,P.jsx)(w,{headers:[{key:`check`,title:``,checkbox:!0,width:32,align:`center`,resize:!1},{key:`prop`,title:`필드명`,width:160},{key:`value`,title:`기본값`}],variant:`selectable`,style:{height:180},checkProps:{checked:n,indeterminate:r,onChange:i},content:(0,P.jsx)(`tbody`,{children:L.map(t=>{let n=e.has(t.id);return(0,P.jsxs)(`tr`,{children:[(0,P.jsx)(`td`,{className:`justify-center`,children:(0,P.jsx)(c,{"aria-label":`${t.name} 선택`,checked:n,onCheckedChange:()=>a(t.id)})}),(0,P.jsx)(`td`,{children:(0,P.jsx)(`span`,{children:t.name})}),(0,P.jsx)(`td`,{children:(0,P.jsx)(`span`,{children:t.value})})]},t.id)})})})}},H={render:()=>(0,P.jsxs)(`div`,{className:`flex flex-col gap-2 font-sans text-xs`,children:[(0,P.jsx)(`span`,{className:`text-muted-foreground`,children:`총 10,000건 가상 스크롤 렌더링 (28px 고정 행 높이)`}),(0,P.jsx)(w,{headers:[{key:`seq`,title:`FID`,width:80,align:`right`},{key:`code`,title:`행정구역코드`,width:140,align:`center`},{key:`name`,title:`명칭`}],variant:`selectable`,style:{height:220},virtualize:{rowCount:1e4,rowHeight:28,renderRow:(e,t)=>(0,P.jsxs)(`tr`,{style:t,children:[(0,P.jsx)(`td`,{className:`justify-end font-mono text-muted-foreground`,style:t,children:(0,P.jsx)(`span`,{children:e+1})}),(0,P.jsx)(`td`,{className:`justify-center font-mono`,style:t,children:(0,P.jsx)(`span`,{children:`41135${String(e%999).padStart(3,`0`)}`})}),(0,P.jsx)(`td`,{style:t,children:(0,P.jsx)(`span`,{children:`성남시 분당구 공간객체 #${e+1}`})})]},e)}})]})},U={args:{headers:I,noScroll:!0,virtualize:{rowCount:0,rowHeight:28,renderRow:()=>null,noData:(0,P.jsx)(`p`,{style:D,children:`표시할 속성 데이터가 없습니다.`})}}},W={render:()=>{let[e,t]=(0,N.useState)([{key:`strokeColor`,label:`선 색상`,value:`#2190FF`},{key:`strokeWidth`,label:`선 두께 (px)`,value:`2.5`},{key:`labelField`,label:`라벨 필드`,value:`ROAD_NAME`},{key:`opacity`,label:`불투명도 (%)`,value:`85`}]),n=(e,n)=>{t(t=>t.map((t,r)=>r===e?{...t,value:n}:t))};return(0,P.jsx)(w,{headers:[{key:`label`,title:`심볼 속성`,width:160},{key:`value`,title:`설정값`}],visibleHeaders:!1,noScroll:!0,content:(0,P.jsx)(`tbody`,{children:e.map((e,t)=>(0,P.jsxs)(`tr`,{children:[(0,P.jsx)(`th`,{scope:`row`,children:(0,P.jsx)(`span`,{children:e.label})}),(0,P.jsx)(`td`,{className:`p-0`,children:(0,P.jsx)(u,{variant:`ghost`,size:`sm`,clearable:!0,value:e.value,onChange:e=>n(t,e.target.value)})})]},e.key))})})}},G=[`Default`,`BodyRowHeader`,`Selectable`,`WithCheckboxHeader`,`VirtualizedRows`,`EmptyNoData`,`InlineEditableCells`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    headers: BASIC_HEADERS,
    variant: 'default',
    visibleHeaders: true,
    resizableColumn: true,
    tableWidthFixed: true,
    noScroll: false,
    style: {
      height: 180
    },
    content: <tbody>
        {SAMPLE_PROPERTIES.map(item => <tr key={item.id}>
            <td>
              <span>{item.name}</span>
            </td>
            <td className="justify-center text-muted-foreground">
              <span>{item.type}</span>
            </td>
            <td>
              <span>{item.value}</span>
            </td>
          </tr>)}
      </tbody>
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    headers: [{
      key: 'header',
      title: '',
      width: 160
    }, {
      key: 'col2',
      title: '',
      width: 200
    }, {
      key: 'col3',
      title: ''
    }],
    visibleHeaders: false,
    resizableColumn: true,
    tableWidthFixed: true,
    noScroll: false,
    style: {
      height: 180
    },
    content: <tbody>
        {SAMPLE_PROPERTIES.map(item => <tr key={item.id}>
            <th scope="row">
              <span>{item.name}</span>
            </th>
            <td>
              <span>{item.type}</span>
            </td>
            <td>
              <span>{item.value}</span>
            </td>
          </tr>)}
      </tbody>
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedIdx, setSelectedIdx] = useState<number>(1);
    return <div className="flex flex-col gap-2 font-sans text-xs">
        <div className="flex items-center justify-between text-muted-foreground">
          <span>행을 클릭하여 선택 상태를 확인하세요.</span>
          <span className="font-medium text-primary">
            선택된 행 인덱스: {selectedIdx}
          </span>
        </div>
        <PropertyTable headers={BASIC_HEADERS} variant="selectable" selectIndex={selectedIdx} onItemClick={setSelectedIdx} style={{
        height: 180
      }} content={<tbody>
              {SAMPLE_PROPERTIES.map(item => <tr key={item.id}>
                  <td>
                    <span>{item.name}</span>
                  </td>
                  <td className="justify-center">
                    <span>{item.type}</span>
                  </td>
                  <td>
                    <span>{item.value}</span>
                  </td>
                </tr>)}
            </tbody>} />
      </div>;
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checkedIds, setCheckedIds] = useState<Set<string>>(() => new Set(['layer_id', 'srid']));
    const allChecked = checkedIds.size === SAMPLE_PROPERTIES.length;
    const isIndeterminate = checkedIds.size > 0 && checkedIds.size < SAMPLE_PROPERTIES.length;
    const handleToggleAll = () => {
      setCheckedIds(prev => prev.size === SAMPLE_PROPERTIES.length ? new Set() : new Set(SAMPLE_PROPERTIES.map(item => item.id)));
    };
    const toggleRow = (id: string) => {
      setCheckedIds(prev => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        return next;
      });
    };
    const headers: PropTableHeader[] = [{
      key: 'check',
      title: '',
      checkbox: true,
      width: 32,
      align: 'center',
      resize: false
    }, {
      key: 'prop',
      title: '필드명',
      width: 160
    }, {
      key: 'value',
      title: '기본값'
    }];
    return <PropertyTable headers={headers} variant="selectable" style={{
      height: 180
    }} checkProps={{
      checked: allChecked,
      indeterminate: isIndeterminate,
      onChange: handleToggleAll
    }} content={<tbody>
            {SAMPLE_PROPERTIES.map(item => {
        const isChecked = checkedIds.has(item.id);
        return <tr key={item.id}>
                  <td className="justify-center">
                    <Checkbox aria-label={\`\${item.name} 선택\`} checked={isChecked} onCheckedChange={() => toggleRow(item.id)} />
                  </td>
                  <td>
                    <span>{item.name}</span>
                  </td>
                  <td>
                    <span>{item.value}</span>
                  </td>
                </tr>;
      })}
          </tbody>} />;
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    const rowCount = 10000;
    const headers: PropTableHeader[] = [{
      key: 'seq',
      title: 'FID',
      width: 80,
      align: 'right'
    }, {
      key: 'code',
      title: '행정구역코드',
      width: 140,
      align: 'center'
    }, {
      key: 'name',
      title: '명칭'
    }];
    return <div className="flex flex-col gap-2 font-sans text-xs">
        <span className="text-muted-foreground">
          총 10,000건 가상 스크롤 렌더링 (28px 고정 행 높이)
        </span>
        <PropertyTable headers={headers} variant="selectable" style={{
        height: 220
      }} virtualize={{
        rowCount,
        rowHeight: 28,
        renderRow: (rowIdx, rowStyle) => <tr key={rowIdx} style={rowStyle}>
                <td className="justify-end font-mono text-muted-foreground" style={rowStyle}>
                  <span>{rowIdx + 1}</span>
                </td>
                <td className="justify-center font-mono" style={rowStyle}>
                  <span>{\`41135\${String(rowIdx % 999).padStart(3, '0')}\`}</span>
                </td>
                <td style={rowStyle}>
                  <span>{\`성남시 분당구 공간객체 #\${rowIdx + 1}\`}</span>
                </td>
              </tr>
      }} />
      </div>;
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    headers: BASIC_HEADERS,
    noScroll: true,
    virtualize: {
      rowCount: 0,
      rowHeight: 28,
      renderRow: () => null,
      noData: <p style={NoDataStyle}>표시할 속성 데이터가 없습니다.</p>
    }
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [rows, setRows] = useState([{
      key: 'strokeColor',
      label: '선 색상',
      value: '#2190FF'
    }, {
      key: 'strokeWidth',
      label: '선 두께 (px)',
      value: '2.5'
    }, {
      key: 'labelField',
      label: '라벨 필드',
      value: 'ROAD_NAME'
    }, {
      key: 'opacity',
      label: '불투명도 (%)',
      value: '85'
    }]);
    const updateRowValue = (idx: number, nextVal: string) => {
      setRows(prev => prev.map((row, i) => i === idx ? {
        ...row,
        value: nextVal
      } : row));
    };
    const headers: PropTableHeader[] = [{
      key: 'label',
      title: '심볼 속성',
      width: 160
    }, {
      key: 'value',
      title: '설정값'
    }];
    return <PropertyTable headers={headers} visibleHeaders={false} noScroll content={<tbody>
            {rows.map((row, idx) => <tr key={row.key}>
                <th scope="row">
                  <span>{row.label}</span>
                </th>
                <td className="p-0">
                  <TextField variant="ghost" size="sm" clearable value={row.value} onChange={e => updateRowValue(idx, e.target.value)} />
                </td>
              </tr>)}
          </tbody>} />;
  }
}`,...W.parameters?.docs?.source}}}})))()}K();export{z as BodyRowHeader,R as Default,U as EmptyNoData,W as InlineEditableCells,B as Selectable,H as VirtualizedRows,V as WithCheckboxHeader,G as __namedExportsOrder,F as default};