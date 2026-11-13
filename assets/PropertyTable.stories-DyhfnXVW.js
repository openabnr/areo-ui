import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-BKXkO2qw.js";import{c as r,t as i}from"./utils-Cjde27Em.js";import{n as a,t as o}from"./dist-81uMrw1m.js";import{n as s,t as c}from"./Checkbox-DQM9nBvV.js";import{n as l,t as u}from"./TextField-B1qM7auj.js";function d(e){return e.map((e,t)=>({key:e.key??`col-${t}`,text:e.title,checkbox:e.checkbox,width:e.width,align:e.align,resize:e.resize??!0}))}function f(e,t,n){return e.map((r,i)=>{let a=t[r.key];if(n&&i===e.length-1&&a===void 0)return`1fr`;let o=a??r.width;return o?`${o}px`:`1fr`}).join(` `)}function p({virtualize:e,scrollTop:t,containerHeight:n}){let{rowCount:r,rowHeight:i,renderRow:a,noData:o}=e;if(r===0)return o?(0,g.jsx)(`tbody`,{children:(0,g.jsx)(`tr`,{style:{height:40},children:(0,g.jsx)(`td`,{style:{gridColumn:`1 / -1`,width:`100%`,position:`relative`,justifyContent:`center`},children:o})})}):null;let s=Math.max(Math.floor(t/i)-5,0),c=Math.floor(n/i+10),l=Math.min(c,Math.max(r-s,0)),u=s*i,d=[];for(let e=0;e<l;e+=1){let t=s+e;d.push(a(t,{height:i,overflow:`visible`,transform:`translateY(${u}px)`}))}return(0,g.jsx)(`tbody`,{children:d})}function m({headers:e,visibleHeaders:t=!0,minCellWidth:n=60,content:r,virtualize:a,tableWidthFixed:o=!0,noScroll:s=!1,headerStyle:l,variant:u=`default`,resizableColumn:m=!0,onItemClick:_,selectIndex:x,style:S,className:C,checkProps:w,ref:T,...E}){let D=(0,h.useMemo)(()=>d(e),[e]),[O,k]=(0,h.useState)({}),[A,j]=(0,h.useState)(x??-1),[M,N]=(0,h.useState)(null),[P,F]=(0,h.useState)(0),[I,L]=(0,h.useState)(200),[R,z]=(0,h.useState)(s?0:17),B=x??A,V=(0,h.useRef)(null),H=(0,h.useRef)(null),U=(0,h.useRef)(null),W=(0,h.useRef)(null),G=(0,h.useRef)([]),K=(0,h.useRef)(null);(0,h.useEffect)(()=>{let e=U.current;if(!e)return;let t=()=>{L(e.clientHeight);let t=s?0:Math.max(0,e.offsetWidth-e.clientWidth);z(t)},n=window.requestAnimationFrame(t),r=new ResizeObserver(t);return r.observe(e),()=>{window.cancelAnimationFrame(n),r.disconnect()}},[s,r,a?.rowCount]);let q=(0,h.useCallback)((e,t)=>{t.preventDefault(),t.stopPropagation(),K.current=e,N(e);let r=t.currentTarget.ownerDocument,i=e=>{let t=K.current,r=t===null?null:G.current[t];if(t===null||!r)return;let{left:i}=r.getBoundingClientRect(),a=e.clientX-i;if(a<n)return;let s=o&&D.length>=2&&t===D.length-2?G.current[t+1]:null;if(s){let t=s.getBoundingClientRect();if(t.left-e.clientX+t.width<n)return}k(e=>{let n={...e};return D.forEach((e,r)=>{if(o&&r===D.length-1){delete n[e.key];return}if(r===t){n[e.key]=a;return}if(n[e.key]===void 0){let t=G.current[r]?.offsetWidth;t!==void 0&&(n[e.key]=t)}}),n})},a=()=>{K.current=null,N(null),r.removeEventListener(`mousemove`,i),r.removeEventListener(`mouseup`,a)};r.addEventListener(`mousemove`,i),r.addEventListener(`mouseup`,a)},[D,n,o]),J=e=>{let t=e.currentTarget;V.current&&(V.current.scrollLeft=t.scrollLeft),H.current&&(H.current.scrollLeft=t.scrollLeft),!r&&a&&F(t.scrollTop)};(0,h.useEffect)(()=>{let e=W.current;if(!e||u!==`selectable`)return;let t=t=>{e.querySelectorAll(`tbody tr`).forEach((e,n)=>{e.classList.toggle(`select`,n===t)})};t(B);let n=n=>{let r=n.target;if(!r||r.classList.contains(`areo-checkbox`)||r.closest(`.areo-checkbox, [role="checkbox"], input[type="checkbox"], button, label`))return;let i=r.closest(`tr`);if(!i||!e.contains(i))return;let a=Array.from(e.querySelectorAll(`tbody tr`)).indexOf(i);a!==-1&&(t(a),j(a),_?.(a))};return e.addEventListener(`click`,n),()=>{e.removeEventListener(`click`,n)}},[u,B,r,_,P,I]);let Y=!r&&!!a,X=f(D,O,o),Z=`${X} ${R}px`,Q=Y&&(a?.rowCount??0)>0&&a?`repeat(${a.rowCount}, ${a.rowHeight}px)`:void 0,$=!Y&&typeof r==`function`?r():r;return(0,g.jsxs)(`div`,{ref:T,style:{...S,borderBottom:s?`0`:void 0},className:i(v({variant:u}),C),...E,children:[(0,g.jsx)(`div`,{ref:V,className:i(`head-scroll w-full shrink-0 overflow-hidden`,!t&&`invisible h-0 border-b-0`),children:(0,g.jsx)(`table`,{className:`scroll-header`,style:{gridTemplateColumns:Z},children:(0,g.jsx)(`thead`,{children:(0,g.jsxs)(`tr`,{children:[D.map(e=>(0,g.jsx)(`th`,{style:{...l,justifyContent:e.align?y[e.align]:void 0,textAlign:e.align?b[e.align]:void 0},children:e.checkbox?(0,g.jsx)(c,{"aria-label":`전체 선택`,checked:w?.checked??!1,indeterminate:w?.indeterminate??!1,disabled:w?.disabled??!1,onCheckedChange:e=>w?.onChange?.(!!e)}):(0,g.jsx)(`span`,{children:e.text})},e.key)),(0,g.jsx)(`th`,{className:`p-0`})]})})})}),(0,g.jsx)(`div`,{ref:U,onScroll:J,className:i(`scroll-body min-h-0 w-full flex-1 bg-white`,o?`overflow-x-hidden`:`overflow-x-auto`,s?`h-auto overflow-y-hidden`:`overflow-y-scroll`),children:(0,g.jsxs)(`table`,{ref:W,className:`body-table`,style:{gridTemplateColumns:X,gridTemplateRows:Q,position:Y?`relative`:void 0,height:Y&&a?.rowCount===0?`auto`:void 0},children:[!Y&&$,Y&&a&&(0,g.jsx)(p,{virtualize:a,scrollTop:P,containerHeight:I})]})}),m&&(0,g.jsx)(`div`,{ref:H,"aria-hidden":`true`,className:`pointer-events-none absolute inset-0 z-20 overflow-hidden`,children:(0,g.jsxs)(`div`,{className:`grid h-full w-full`,style:{gridTemplateColumns:Z},children:[D.map((e,t)=>{let n=e.resize&&t!==D.length-1;return(0,g.jsx)(`div`,{ref:e=>{G.current[t]=e},className:`relative h-full`,children:n&&(0,g.jsx)(`button`,{type:`button`,tabIndex:-1,"aria-label":`컬럼 너비 조절`,onMouseDown:e=>q(t,e),className:i(`resize-handle pointer-events-auto absolute top-0 -right-1 bottom-0 z-10 block w-1.75 cursor-ew-resize border-0 p-0 transition-colors focus-visible:outline-none`,M===t?`bg-resizable-background/30`:`bg-transparent hover:bg-resizable-background/20 active:bg-resizable-background/30`)})},`resize-track-${e.key}`)}),(0,g.jsx)(`div`,{className:`h-full`})]})})]})}var h,g,_,v,y,b;function x(){return(x=e((()=>{h=t(),a(),r(),s(),g=n(),_={width:`100%`,margin:0,height:40,lineHeight:`40px`,textAlign:`center`,color:`var(--areo-muted-foreground, #666666)`,fontSize:12},v=o(`areo-property-table relative box-border flex w-full flex-col overflow-hidden border border-secondary-border border-t-secondary-foreground bg-white font-sans text-xs text-secondary-foreground select-none`,{variants:{variant:{default:``,selectable:`is-selectable`}},defaultVariants:{variant:`default`}}),y={left:`flex-start`,center:`center`,right:`flex-end`},b={left:`left`,center:`center`,right:`right`},m.__docgenInfo={description:``,methods:[],displayName:`PropertyTable`,props:{visibleHeaders:{defaultValue:{value:`true`,computed:!1},required:!1},minCellWidth:{defaultValue:{value:`60`,computed:!1},required:!1},tableWidthFixed:{defaultValue:{value:`true`,computed:!1},required:!1},noScroll:{defaultValue:{value:`false`,computed:!1},required:!1},variant:{defaultValue:{value:`'default'`,computed:!1},required:!1},resizableColumn:{defaultValue:{value:`true`,computed:!1},required:!1}}}})))()}var S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{S=t(),s(),x(),l(),C=n(),w={title:`Components/PropertyTable`,component:m,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:"`PropertyTable`은 CSS Grid(`display: contents`) 기반의 고정 헤더, 컬럼 리사이징, 행 선택(`selectable`), 대용량 가상 스크롤(`virtualize`)을 지원하는 속성 테이블 컴포넌트입니다."}}},argTypes:{variant:{control:`radio`,options:[`default`,`selectable`],description:`테이블 행 선택 가능 여부 및 호버 스타일 변형입니다.`,table:{type:{summary:`'default' | 'selectable'`},defaultValue:{summary:`'default'`}}},visibleHeaders:{control:`boolean`,description:`상단 컬럼 헤더 표시 여부입니다.`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},resizableColumn:{control:`boolean`,description:`마우스 드래그를 통한 컬럼 너비 조절 허용 여부입니다.`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},tableWidthFixed:{control:`boolean`,description:"마지막 컬럼을 `1fr`로 고정하여 가로 스크롤을 숨길지 여부입니다.",table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},noScroll:{control:`boolean`,description:`세로 스크롤바를 비활성화하고 내용 높이에 맞출지 여부입니다.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},minCellWidth:{control:`number`,description:`컬럼 리사이징 시 허용되는 최소 셀 너비(px)입니다.`,table:{type:{summary:`number`},defaultValue:{summary:`60`}}},onItemClick:{action:`rowClicked`,description:'`variant="selectable"`일 때 행 클릭 시 호출되는 콜백입니다.'}},decorators:[e=>(0,C.jsx)(`div`,{className:`w-150`,children:(0,C.jsx)(e,{})})]},T=[{key:`prop`,title:`속성명`,width:160},{key:`type`,title:`타입`,width:120,align:`center`},{key:`value`,title:`값`}],E=[{id:`layer_id`,name:`레이어 ID`,type:`String`,value:`L_ROAD_LINK_2026`},{id:`srid`,name:`좌표계 (SRID)`,type:`Integer`,value:`5186`},{id:`geom_type`,name:`지오메트리`,type:`Geometry`,value:`MultiLineString`},{id:`feature_cnt`,name:`객체 수`,type:`Integer`,value:`14,820`},{id:`min_zoom`,name:`최소 줌 레벨`,type:`Double`,value:`10.0`},{id:`max_zoom`,name:`최대 줌 레벨`,type:`Double`,value:`19.5`},{id:`visible`,name:`화면 표시`,type:`Boolean`,value:`true`},{id:`editable`,name:`편집 가능`,type:`Boolean`,value:`false`}],D={args:{headers:T,variant:`default`,visibleHeaders:!0,resizableColumn:!0,tableWidthFixed:!0,noScroll:!1,style:{height:180},content:(0,C.jsx)(`tbody`,{children:E.map(e=>(0,C.jsxs)(`tr`,{children:[(0,C.jsx)(`td`,{children:(0,C.jsx)(`span`,{children:e.name})}),(0,C.jsx)(`td`,{className:`justify-center text-muted-foreground`,children:(0,C.jsx)(`span`,{children:e.type})}),(0,C.jsx)(`td`,{children:(0,C.jsx)(`span`,{children:e.value})})]},e.id))})}},O={args:{headers:[{key:`header`,title:``,width:160},{key:`col2`,title:``,width:200},{key:`col3`,title:``}],visibleHeaders:!1,resizableColumn:!0,tableWidthFixed:!0,noScroll:!1,style:{height:180},content:(0,C.jsx)(`tbody`,{children:E.map(e=>(0,C.jsxs)(`tr`,{children:[(0,C.jsx)(`th`,{scope:`row`,children:(0,C.jsx)(`span`,{children:e.name})}),(0,C.jsx)(`td`,{children:(0,C.jsx)(`span`,{children:e.type})}),(0,C.jsx)(`td`,{children:(0,C.jsx)(`span`,{children:e.value})})]},e.id))})}},k={render:()=>{let[e,t]=(0,S.useState)(1);return(0,C.jsxs)(`div`,{className:`flex flex-col gap-2 font-sans text-xs`,children:[(0,C.jsxs)(`div`,{className:`flex items-center justify-between text-muted-foreground`,children:[(0,C.jsx)(`span`,{children:`행을 클릭하여 선택 상태를 확인하세요.`}),(0,C.jsxs)(`span`,{className:`font-medium text-primary`,children:[`선택된 행 인덱스: `,e]})]}),(0,C.jsx)(m,{headers:T,variant:`selectable`,selectIndex:e,onItemClick:t,style:{height:180},content:(0,C.jsx)(`tbody`,{children:E.map(e=>(0,C.jsxs)(`tr`,{children:[(0,C.jsx)(`td`,{children:(0,C.jsx)(`span`,{children:e.name})}),(0,C.jsx)(`td`,{className:`justify-center`,children:(0,C.jsx)(`span`,{children:e.type})}),(0,C.jsx)(`td`,{children:(0,C.jsx)(`span`,{children:e.value})})]},e.id))})})]})}},A={render:()=>{let[e,t]=(0,S.useState)(()=>new Set([`layer_id`,`srid`])),n=e.size===E.length,r=e.size>0&&e.size<E.length,i=()=>{t(e=>e.size===E.length?new Set:new Set(E.map(e=>e.id)))},a=e=>{t(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})};return(0,C.jsx)(m,{headers:[{key:`check`,title:``,checkbox:!0,width:32,align:`center`,resize:!1},{key:`prop`,title:`필드명`,width:160},{key:`value`,title:`기본값`}],variant:`selectable`,style:{height:180},checkProps:{checked:n,indeterminate:r,onChange:i},content:(0,C.jsx)(`tbody`,{children:E.map(t=>{let n=e.has(t.id);return(0,C.jsxs)(`tr`,{children:[(0,C.jsx)(`td`,{className:`justify-center`,children:(0,C.jsx)(c,{"aria-label":`${t.name} 선택`,checked:n,onCheckedChange:()=>a(t.id)})}),(0,C.jsx)(`td`,{children:(0,C.jsx)(`span`,{children:t.name})}),(0,C.jsx)(`td`,{children:(0,C.jsx)(`span`,{children:t.value})})]},t.id)})})})}},j={render:()=>(0,C.jsxs)(`div`,{className:`flex flex-col gap-2 font-sans text-xs`,children:[(0,C.jsx)(`span`,{className:`text-muted-foreground`,children:`총 10,000건 가상 스크롤 렌더링 (28px 고정 행 높이)`}),(0,C.jsx)(m,{headers:[{key:`seq`,title:`FID`,width:80,align:`right`},{key:`code`,title:`행정구역코드`,width:140,align:`center`},{key:`name`,title:`명칭`}],variant:`selectable`,style:{height:220},virtualize:{rowCount:1e4,rowHeight:28,renderRow:(e,t)=>(0,C.jsxs)(`tr`,{style:t,children:[(0,C.jsx)(`td`,{className:`justify-end font-mono text-muted-foreground`,style:t,children:(0,C.jsx)(`span`,{children:e+1})}),(0,C.jsx)(`td`,{className:`justify-center font-mono`,style:t,children:(0,C.jsx)(`span`,{children:`41135${String(e%999).padStart(3,`0`)}`})}),(0,C.jsx)(`td`,{style:t,children:(0,C.jsx)(`span`,{children:`성남시 분당구 공간객체 #${e+1}`})})]},e)}})]})},M={args:{headers:T,noScroll:!0,virtualize:{rowCount:0,rowHeight:28,renderRow:()=>null,noData:(0,C.jsx)(`p`,{style:_,children:`표시할 속성 데이터가 없습니다.`})}}},N={render:()=>{let[e,t]=(0,S.useState)([{key:`strokeColor`,label:`선 색상`,value:`#2190FF`},{key:`strokeWidth`,label:`선 두께 (px)`,value:`2.5`},{key:`labelField`,label:`라벨 필드`,value:`ROAD_NAME`},{key:`opacity`,label:`불투명도 (%)`,value:`85`}]),n=(e,n)=>{t(t=>t.map((t,r)=>r===e?{...t,value:n}:t))};return(0,C.jsx)(m,{headers:[{key:`label`,title:`심볼 속성`,width:160},{key:`value`,title:`설정값`}],visibleHeaders:!1,noScroll:!0,content:(0,C.jsx)(`tbody`,{children:e.map((e,t)=>(0,C.jsxs)(`tr`,{children:[(0,C.jsx)(`th`,{scope:`row`,children:(0,C.jsx)(`span`,{children:e.label})}),(0,C.jsx)(`td`,{className:`p-0`,children:(0,C.jsx)(u,{variant:`ghost`,size:`sm`,clearable:!0,value:e.value,onChange:e=>n(t,e.target.value)})})]},e.key))})})}},P=[`Default`,`BodyRowHeader`,`Selectable`,`WithCheckboxHeader`,`VirtualizedRows`,`EmptyNoData`,`InlineEditableCells`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}}})))()}F();export{O as BodyRowHeader,D as Default,M as EmptyNoData,N as InlineEditableCells,k as Selectable,j as VirtualizedRows,A as WithCheckboxHeader,P as __namedExportsOrder,w as default};