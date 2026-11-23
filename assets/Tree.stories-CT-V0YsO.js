import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-Di8_Mevq.js";import{l as r,t as i}from"./utils-CXswP1E2.js";import{n as a,t as o}from"./dist-DxSsHBlF.js";import{n as s,t as c}from"./Button-DaMgOn2H.js";import{n as l,t as u}from"./createLucideIcon-BSjRREhY.js";import{n as d,t as f}from"./chevron-right-DmSY_xlP.js";import{n as p,t as m}from"./layers-Cze-O-xi.js";import{i as h,n as ee,r as te,t as ne}from"./Collapsible-Bj7sTz6d.js";import{t as g}from"./server.browser-DbIjnpKj.js";var _,v;function y(){return(y=e((()=>{l(),_={name:`folder`,size:24,node:[[`path`,{d:`M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z`,key:`1kt360`}]]},_.node,v=u(_)})))()}function b(e){return e?Array.from(e.querySelectorAll(ge)).find(e=>!e.closest(`[hidden]`))?.dataset.itemId??null:null}function re(){let e=null,t=null,n=null,r=new Set,i=new Set,a=()=>{if(e!==null&&r.has(e))return e;let t=n?.()??null;return t!==null&&r.has(t)?t:r.values().next().value??null},o=()=>{let e=a();if(e!==t){t=e;for(let e of i)e()}};return{subscribe:e=>(i.add(e),()=>{i.delete(e)}),getSnapshot:()=>t,setFirstItemResolver:e=>{n=e,o()},register:t=>(r.add(t),o(),()=>{r.delete(t),e===t&&(e=null),o()}),setActive:t=>{r.has(t)&&e!==t&&(e=t,o())}}}function ie(){let e=(0,L.useContext)(ve);if(!e)throw Error(`TreeItem must be used within a Tree component.`);return e}function ae(){return(0,L.useContext)(ye)}function oe(e,t=180){let n=e.trim().length===0,r=n?0:Math.max(0,t),[i,a]=(0,L.useState)(e);return(0,L.useEffect)(()=>{let t=globalThis.setTimeout(()=>{a(n?``:e)},r);return()=>{globalThis.clearTimeout(t)}},[e,n,r]),n?``:r<=0?e:i}function x(e,t,n){return n?n(e,t):{...e,children:t}}function se(e,t,n,r,i){let a=n.getId(e),o=n.getLabel(e).toLowerCase().includes(t),s=n.getChildren(e),c=s?S(s,t,n,r,i):[];return!o&&c.length===0?null:(o&&r.add(a),c.length>0&&i.push(a),x(e,c,n.withChildren))}function S(e,t,n,r,i){let a=[];for(let o of e){let e=se(o,t,n,r,i);e!==null&&a.push(e)}return a}function C(e,t,n){let r=t.trim().toLowerCase();if(!r)return{nodes:e,expandedIds:[],matchedIds:new Set};let i=new Set,a=[];return{nodes:S(e,r,n,i,a),expandedIds:a,matchedIds:i}}function w(e,t,n){let r=[],i=[...e];for(;i.length>0;){let e=i.pop();if(!e)continue;let a=n(e);if(a&&a.length>0){r.push(t(e));for(let e=a.length-1;e>=0;--e)i.push(a[e])}}return r}function T(e){return typeof e==`string`||typeof e==`number`?String(e):``}function E(e,t,n){let{itemId:r,label:i,children:a}=e.props,o=T(i).toLowerCase().includes(t),s=ce(a,t,n);return!o&&s.nodes.length===0?null:(s.nodes.length>0&&n.push(r),(0,L.cloneElement)(e,{children:s.nodes.length>0?s.nodes:void 0}))}function ce(e,t,n=[]){let r=[];return L.Children.forEach(e,e=>{if((0,L.isValidElement)(e)&&e.type===I){let i=E(e,t,n);i!==null&&r.push(i);return}r.push(e)}),{nodes:r,expandedIds:n}}function D(e){return e?Array.from(e.querySelectorAll(ge)).filter(e=>e.offsetParent!==null):[]}function O(e,t){let n=D(e.closest(`[role="tree"]`));n[n.indexOf(e)+t]?.focus()}function k(e,t){let n=D(e.closest(`[role="tree"]`));(t===`first`?n[0]:n.at(-1))?.focus()}function le(e){(e.parentElement?.closest(`[role="treeitem"]`))?.focus()}function A(e){e.closest(`[role="treeitem"]`)?.focus({preventScroll:!0})}function j(e,t){let n=e.currentTarget,{isExpanded:r,hasChildren:i,onToggleExpand:a,onActivate:o}=t,s={ArrowDown:()=>O(n,1),ArrowUp:()=>O(n,-1),Home:()=>k(n,`first`),End:()=>k(n,`last`),ArrowRight:()=>{if(i&&!r){a();return}i&&r&&O(n,1)},ArrowLeft:()=>{if(i&&r){a();return}le(n)},Enter:o," ":o}[e.key];s&&(e.preventDefault(),e.stopPropagation(),s())}function ue(e){return e instanceof Element&&!!e.closest(be)}function de(e){return ue(e.target)?!0:e.target instanceof Element&&e.target.closest(`[role="treeitem"]`)!==e.currentTarget}function M({text:e,query:t=``}){let n=t.trim();if(!n)return e;let r=e.toLowerCase(),i=n.toLowerCase(),a=[],o=0;for(;o<e.length;){let t=r.indexOf(i,o);if(t===-1){a.push(e.slice(o));break}t>o&&a.push(e.slice(o,t));let s=e.slice(t,t+n.length);a.push((0,R.jsx)(`mark`,{"data-slot":`tree-highlight`,className:`rounded-none bg-alert-warning-bg px-0.5 font-medium text-alert-warning-fg`,children:s},`${t}-${s}`)),o=t+n.length}return a}function fe(e,t){return t.trim()&&(typeof e==`string`||typeof e==`number`)?(0,R.jsx)(M,{text:String(e),query:t}):e}function N({level:e,indentSize:t,selected:n}){return e<=0?null:(0,R.jsx)(R.Fragment,{children:Array.from({length:e},(e,r)=>(0,R.jsx)(`span`,{"aria-hidden":`true`,"data-slot":`tree-indent-guide`,style:{left:`${r*t+Se}px`},className:i(`pointer-events-none absolute inset-y-0 border-l`,n?`border-white/30`:`border-secondary-border`)},r))})}function P({hasChildren:e,isExpanded:t,selected:n,disabled:r}){return e?(0,R.jsx)(te,{tabIndex:-1,disabled:r,"aria-label":t?`Collapse`:`Expand`,onClick:e=>{e.stopPropagation(),A(e.currentTarget)},render:(0,R.jsx)(c,{type:`button`,variant:`ghost`,size:`sm`,iconOnly:!0,className:i(`size-4 min-h-4 p-0 text-inherit focus-visible:outline-none`,n?`hover:bg-white/15 active:bg-white/20`:`hover:bg-primary/15 active:bg-primary/20`)}),children:(0,R.jsx)(f,{"aria-hidden":`true`,strokeWidth:2,className:i(`size-3 shrink-0 transition-transform duration-150 motion-reduce:transition-none`,n?`text-white`:`text-secondary-border-active`,t&&`rotate-90`)})}):(0,R.jsx)(`span`,{className:`size-4 shrink-0`,"aria-hidden":`true`})}function F({ref:e,size:t=`md`,selectable:n=!1,selectedId:r,defaultSelectedId:a=null,onSelectedIdChange:o,expandedIds:s,defaultExpandedIds:c=[],onExpandedIdsChange:l,onItemClick:u,expandableIds:d,searchQuery:f=``,searchDebounceMs:p=180,filterOnSearch:m=!0,emptyMessage:h=`항목이 없습니다.`,indentSize:ee=16,showIndentGuides:te=!0,className:ne,children:g,..._}){let[v,y]=(0,L.useState)(a),[ie,ae]=(0,L.useState)(c),[x,se]=(0,L.useState)(null),S=(0,L.useRef)(null),C=(0,L.useRef)(new Set),[w]=(0,L.useState)(re),T=oe(f,p),E=T.trim().toLowerCase(),D=E.length>0,O=(0,L.useMemo)(()=>!D||!m?null:ce(g,E),[g,D,m,E]),k=O?O.nodes:g,le=L.Children.count(k)>0;(0,L.useEffect)(()=>{w.setFirstItemResolver(()=>b(S.current))},[w,le]);let A=r!==void 0,j=A?r:v,ue=x?.query===T?x.ids:O?.expandedIds??ie,de=D&&m?s??ue:s??ie,M=(0,L.useMemo)(()=>new Set(de),[de]),fe=(0,L.useCallback)(e=>{n&&j!==e&&(A||y(e),o?.(e))},[n,j,A,o]),N=(0,L.useCallback)(e=>{s===void 0&&(D&&m?se({query:T,ids:e}):ae(e)),l?.(e)},[s,D,m,T,l]),P=(0,L.useCallback)(e=>(C.current.add(e),()=>{C.current.delete(e)}),[]),F=(0,L.useCallback)((e,t)=>{let n=new Set(M);t?n.add(e):n.delete(e),N(Array.from(n))},[M,N]),pe=(0,L.useCallback)(e=>{F(e,!M.has(e))},[M,F]);(0,L.useImperativeHandle)(e,()=>({expandAll:()=>{let e=d?Array.from(new Set(d)):Array.from(C.current);N(e)},collapseAll:()=>{N([])},expandIds:e=>{let t=new Set(M);for(let n of e)t.add(n);N(Array.from(t))},collapseIds:e=>{let t=new Set(M);for(let n of e)t.delete(n);N(Array.from(t))}}),[d,M,N]);let I=(0,L.useMemo)(()=>({size:t,selectable:n,selectedId:j,expandedSet:M,searchQuery:T,indentSize:ee,showIndentGuides:te,focusStore:w,onItemClick:u,selectItem:fe,toggleExpand:pe,setExpanded:F,registerExpandableId:P}),[t,n,j,M,T,ee,te,w,u,fe,pe,F,P]);return!le&&h?(0,R.jsx)(`div`,{"data-slot":`tree-empty`,className:`py-4 text-center font-sans text-xs text-text-disabled select-none`,children:h}):(0,R.jsx)(ve,{value:I,children:(0,R.jsx)(`ul`,{ref:S,role:`tree`,"data-slot":`tree`,"data-size":t,className:i(`m-0 list-none p-0 font-sans text-secondary-foreground select-none`,ne),..._,children:k})})}function pe({labelId:e,level:t,indentSize:n,size:r,selected:a,disabled:o,showIndentGuides:s,hasChildren:c,isExpanded:l,icon:u,renderedLabel:d,actions:f,onLabelClick:p}){return(0,R.jsxs)(`div`,{"data-slot":`tree-item-row`,"data-disabled":o||void 0,style:{paddingLeft:`${t*n+xe}px`},className:Te({size:r,selected:a,disabled:o}),children:[s?(0,R.jsx)(N,{level:t,indentSize:n,selected:a}):null,(0,R.jsx)(P,{hasChildren:c,isExpanded:l,selected:a,disabled:o}),(0,R.jsxs)(`button`,{type:`button`,tabIndex:-1,"data-slot":`tree-item-label`,disabled:o,onClick:p,className:i(Ce,`flex min-w-0 flex-1 cursor-pointer items-center gap-1.5 py-0.5 text-left disabled:cursor-not-allowed`),children:[u?(0,R.jsx)(`span`,{className:`flex size-4 shrink-0 items-center justify-center`,children:u}):null,(0,R.jsx)(`span`,{id:e,className:`min-w-0 flex-1 truncate`,children:d})]}),f?(0,R.jsx)(`div`,{"data-slot":`tree-item-actions`,className:`ml-auto flex shrink-0 items-center gap-1`,children:f}):null]})}function I({itemId:e,label:t,icon:n,selected:r,disabled:a=!1,actions:o,className:s,children:c,onClick:l,onFocus:u,onKeyDown:d,...f}){let p=(0,L.useId)(),{size:m,selectable:h,selectedId:te,expandedSet:g,searchQuery:_,indentSize:v,showIndentGuides:y,focusStore:b,onItemClick:re,selectItem:oe,toggleExpand:x,setExpanded:se,registerExpandableId:S}=ie(),{level:C}=ae(),w=L.Children.count(c)>0,T=w&&g.has(e),E=h&&!a&&(r??te===e),ce=(0,L.useSyncExternalStore)(b.subscribe,()=>b.getSnapshot()===e,_e);(0,L.useEffect)(()=>{if(!a)return b.register(e)},[a,b,e]),(0,L.useEffect)(()=>{if(w)return S(e)},[w,e,S]);let D=(0,L.useMemo)(()=>({level:C+1}),[C]),O=(0,L.useMemo)(()=>fe(t,_),[t,_]),k=()=>{a||(h?oe(e):w&&x(e),re?.(e))},le=e=>{A(e.currentTarget)},M=e=>{de(e)||(k(),l?.(e))},N=t=>{u?.(t),!a&&t.target===t.currentTarget&&b.setActive(e)},P=t=>{d?.(t),!(a||t.defaultPrevented||ue(t.target))&&j(t,{isExpanded:T,hasChildren:w,onToggleExpand:()=>x(e),onActivate:k})},F=(0,R.jsx)(pe,{labelId:p,level:C,indentSize:v,size:m,selected:E,disabled:a,showIndentGuides:y,hasChildren:w,isExpanded:T,icon:n,renderedLabel:O,actions:o,onLabelClick:le});return(0,R.jsx)(`li`,{role:`treeitem`,"aria-labelledby":p,"data-slot":`tree-item`,"data-item-id":e,tabIndex:!a&&ce?0:-1,"aria-selected":h?E:!1,"aria-expanded":w?T:void 0,"aria-disabled":a||void 0,"data-selected":E||void 0,"data-expanded":T||void 0,"data-disabled":a||void 0,onClick:M,onFocus:N,onKeyDown:P,className:i(we,s),...f,children:w?(0,R.jsxs)(ne,{open:T,disabled:a,onOpenChange:t=>se(e,t),children:[F,(0,R.jsx)(ee,{keepMounted:!1,children:(0,R.jsx)(ye,{value:D,children:(0,R.jsx)(`ul`,{"data-slot":`tree-item-children`,className:`m-0 list-none p-0`,children:c})})})]}):F})}function me(e){return e.map(e=>(0,R.jsx)(I,{itemId:e.id,label:e.label,icon:e.icon,disabled:e.disabled,selected:e.selected,actions:e.actions,children:e.children?me(e.children):void 0},e.id))}function he({items:e,expandableIds:t,emptyMessage:n=`항목이 없습니다.`,...r}){let i=(0,L.useMemo)(()=>t??w(e,e=>e.id,e=>e.children),[t,e]),a=(0,L.useMemo)(()=>me(e),[e]);return(0,R.jsx)(F,{expandableIds:i,emptyMessage:n,...r,children:a})}var L,R,ge,_e,ve,ye,be,xe,Se,Ce,we,Te;function Ee(){return(Ee=e((()=>{L=t(),a(),d(),r(),s(),h(),R=n(),ge=`[role="treeitem"]:not([aria-disabled="true"])`,_e=()=>!1,ve=(0,L.createContext)(null),ye=(0,L.createContext)({level:0}),be=`[data-slot="tree-item-actions"]`,xe=6,Se=14,Ce=`m-0 appearance-none border-0 bg-transparent p-0 font-sans text-inherit shadow-none outline-none`,we=[`outline-none`,`[&:focus-visible>[data-slot=tree-item-row]]:outline-1 [&:focus-visible>[data-slot=tree-item-row]]:-outline-offset-1 [&:focus-visible>[data-slot=tree-item-row]]:outline-primary`,`[&:focus-visible>*>[data-slot=tree-item-row]]:outline-1 [&:focus-visible>*>[data-slot=tree-item-row]]:-outline-offset-1 [&:focus-visible>*>[data-slot=tree-item-row]]:outline-primary`,`[&:focus-visible[data-selected=true]>[data-slot=tree-item-row]]:-outline-offset-2 [&:focus-visible[data-selected=true]>[data-slot=tree-item-row]]:outline-white`,`[&:focus-visible[data-selected=true]>*>[data-slot=tree-item-row]]:-outline-offset-2 [&:focus-visible[data-selected=true]>*>[data-slot=tree-item-row]]:outline-white`],Te=o(`relative flex items-center gap-1 rounded-none pr-2 transition-colors`,{variants:{size:{sm:`min-h-5.25 text-xs leading-3.75`,md:`min-h-6.5 text-compact leading-4.25`,lg:`min-h-8 text-compact leading-4.5`},selected:{true:``,false:``},disabled:{true:`pointer-events-none text-text-disabled`,false:``}},compoundVariants:[{disabled:!1,selected:!1,className:`text-secondary-foreground hover:bg-primary/10`},{disabled:!1,selected:!0,className:`bg-primary font-medium text-white`}],defaultVariants:{size:`md`,selected:!1,disabled:!1}}),F.__docgenInfo={description:``,methods:[{name:`expandAll`,docblock:null,modifiers:[],params:[],returns:null},{name:`collapseAll`,docblock:null,modifiers:[],params:[],returns:null},{name:`expandIds`,docblock:null,modifiers:[],params:[{name:`ids`,optional:!1,type:{name:`unknown`}}],returns:null},{name:`collapseIds`,docblock:null,modifiers:[],params:[{name:`ids`,optional:!1,type:{name:`unknown`}}],returns:null}],displayName:`Tree`,props:{size:{defaultValue:{value:`'md'`,computed:!1},required:!1},selectable:{defaultValue:{value:`false`,computed:!1},required:!1},defaultSelectedId:{defaultValue:{value:`null`,computed:!1},required:!1},defaultExpandedIds:{defaultValue:{value:`[]`,computed:!1},required:!1},searchQuery:{defaultValue:{value:`''`,computed:!1},required:!1},searchDebounceMs:{defaultValue:{value:`180`,computed:!1},required:!1},filterOnSearch:{defaultValue:{value:`true`,computed:!1},required:!1},emptyMessage:{defaultValue:{value:`'항목이 없습니다.'`,computed:!1},required:!1},indentSize:{defaultValue:{value:`16`,computed:!1},required:!1},showIndentGuides:{defaultValue:{value:`true`,computed:!1},required:!1}}},I.__docgenInfo={description:``,methods:[],displayName:`TreeItem`,props:{disabled:{defaultValue:{value:`false`,computed:!1},required:!1}}},he.__docgenInfo={description:``,methods:[],displayName:`SimpleTree`,props:{emptyMessage:{defaultValue:{value:`'항목이 없습니다.'`,computed:!1},required:!1}}}})))()}function De(e,t,n){if(!e)return;let r=n?`text-white`:void 0;return t?(0,V.jsx)(v,{className:`size-3.5 ${r??`text-primary`}`}):(0,V.jsx)(m,{className:`size-3.5 ${r??`text-muted-foreground`}`})}function Oe(e,t,n){if(e&&t)return(0,V.jsx)(`span`,{className:`py-0.2 rounded-none px-1.5 text-2xs ${n?`bg-white/20 text-white`:`bg-secondary text-muted-foreground`}`,children:t})}function z(e,t={}){let{selectedId:n=null,showIcons:r=!1,showBadges:i=!1}=t,a=!!(e.children&&e.children.length>0),o=n===e.id&&!e.disabled;return(0,V.jsx)(I,{itemId:e.id,label:e.label,disabled:e.disabled,icon:De(r,a,o),actions:Oe(i,e.badge,o),children:e.children?.map(e=>z(e,t))},e.id)}function ke(){let[e,t]=(0,B.useState)(`vector-layers`);return(0,V.jsxs)(`div`,{className:`flex w-80 flex-col gap-2`,children:[(0,V.jsx)(`div`,{className:`rounded-none border border-secondary-border bg-white p-1.5`,children:(0,V.jsx)(F,{selectable:!0,selectedId:e,onSelectedIdChange:e=>t(e),defaultExpandedIds:[`gis-workspace`,`vector-layers`,`raster-layers`],showIndentGuides:!0,children:K.map(t=>z(t,{selectedId:e,showIcons:!0,showBadges:!0}))})}),(0,V.jsxs)(`div`,{className:`flex items-center justify-between rounded-none border border-secondary-border bg-surface-muted px-2 py-1.5 text-2xs text-muted-foreground`,children:[(0,V.jsxs)(`span`,{children:[`선택된 노드: `,e??`없음`]}),e?(0,V.jsx)(`button`,{type:`button`,onClick:()=>t(null),className:`cursor-pointer border-0 bg-transparent p-0 text-2xs font-medium text-primary hover:underline`,children:`선택 해제`}):null]})]})}function Ae(){let[e,t]=(0,B.useState)(null),[n,r]=(0,B.useState)(`vector-layers`);return(0,V.jsxs)(`div`,{className:`flex flex-wrap items-start gap-6`,children:[(0,V.jsxs)(`div`,{className:`flex w-80 flex-col gap-1.5`,children:[(0,V.jsx)(`div`,{className:`font-sans text-xs font-medium text-secondary-foreground`,children:`selectable=false (기본값)`}),(0,V.jsx)(`div`,{className:`rounded-none border border-secondary-border bg-white p-1.5`,children:(0,V.jsx)(F,{selectable:!1,showIndentGuides:!1,defaultExpandedIds:[`gis-workspace`,`vector-layers`],onItemClick:e=>t(e),children:K.map(e=>z(e,{showIcons:!0,showBadges:!0}))})}),(0,V.jsxs)(`div`,{className:`rounded-none border border-secondary-border bg-surface-muted px-2 py-1 text-2xs text-muted-foreground`,children:[`마지막 클릭 ID: `,e??`없음`]})]}),(0,V.jsxs)(`div`,{className:`flex w-80 flex-col gap-1.5`,children:[(0,V.jsx)(`div`,{className:`font-sans text-xs font-medium text-secondary-foreground`,children:`selectable=true`}),(0,V.jsx)(`div`,{className:`rounded-none border border-secondary-border bg-white p-1.5`,children:(0,V.jsx)(F,{selectable:!0,selectedId:n,onSelectedIdChange:e=>r(e),defaultExpandedIds:[`gis-workspace`,`vector-layers`],children:K.map(e=>z(e,{selectedId:n,showIcons:!0,showBadges:!0}))})}),(0,V.jsxs)(`div`,{className:`rounded-none border border-secondary-border bg-surface-muted px-2 py-1 text-2xs text-muted-foreground`,children:[`선택된 ID: `,n??`없음`]})]})]})}function je(){let e=(0,B.useRef)(null),t=(0,B.useRef)(null),n=(0,B.useMemo)(()=>w(K,e=>e.id,e=>e.children),[]);return(0,V.jsxs)(`div`,{className:`flex flex-wrap items-start gap-4`,children:[(0,V.jsxs)(`div`,{className:`flex w-80 flex-col gap-2`,children:[(0,V.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1.5`,children:[(0,V.jsx)(c,{type:`button`,variant:`outline-secondary`,size:`sm`,onClick:()=>e.current?.expandAll(),children:`모두 펼치기`}),(0,V.jsx)(c,{type:`button`,variant:`outline-secondary`,size:`sm`,onClick:()=>e.current?.collapseAll(),children:`모두 접기`}),(0,V.jsx)(c,{type:`button`,variant:`outline-secondary`,size:`sm`,onClick:()=>e.current?.expandIds([`styles-group`]),children:`스타일 펼치기`}),(0,V.jsx)(c,{type:`button`,variant:`outline-secondary`,size:`sm`,onClick:()=>e.current?.collapseIds([`styles-group`]),children:`스타일 접기`})]}),(0,V.jsx)(`div`,{className:`rounded-none border border-secondary-border bg-white p-1.5`,children:(0,V.jsx)(F,{ref:e,expandableIds:n,showIndentGuides:!0,children:K.map(e=>z(e,{showIcons:!0}))})})]}),(0,V.jsxs)(`div`,{className:`flex w-72 flex-col gap-2`,children:[(0,V.jsx)(c,{type:`button`,variant:`outline-secondary`,size:`sm`,onClick:()=>t.current?.expandAll(),children:`자동 등록 전체 펼치기`}),(0,V.jsx)(`div`,{className:`rounded-none border border-secondary-border bg-white p-1.5`,children:(0,V.jsx)(F,{ref:t,children:(0,V.jsx)(I,{itemId:`auto-parent`,label:`자동 등록 부모`,children:(0,V.jsx)(I,{itemId:`auto-child`,label:`자동 등록 자식`})})})})]})]})}function Me(){let[e,t]=(0,B.useState)(`도로`),[n,r]=(0,B.useState)(!0),[i,a]=(0,B.useState)(`road-network`);return(0,V.jsxs)(`div`,{className:`flex w-80 flex-col gap-2`,children:[(0,V.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,V.jsx)(`input`,{type:`search`,value:e,onChange:e=>t(e.target.value),placeholder:`노드 검색...`,"aria-label":`노드 검색`,className:`h-6.75 flex-1 rounded-none border border-secondary-border bg-white px-2 text-compact text-secondary-foreground outline-none focus:border-primary`}),(0,V.jsx)(c,{type:`button`,size:`sm`,variant:`outline-secondary`,onClick:()=>r(e=>!e),children:`필터 토글`})]}),(0,V.jsx)(`div`,{className:`rounded-none border border-secondary-border bg-white p-1.5`,children:(0,V.jsxs)(F,{selectable:!0,selectedId:i,onSelectedIdChange:e=>a(e),searchQuery:e,searchDebounceMs:0,filterOnSearch:n,defaultExpandedIds:[`gis-workspace`],emptyMessage:`일치하는 항목이 없습니다.`,showIndentGuides:!0,children:[K.map(e=>z(e,{selectedId:i,showIcons:!0,showBadges:!0})),(0,V.jsx)(I,{itemId:`jsx-node`,label:(0,V.jsx)(`span`,{children:`JSX 커스텀 노드`}),children:null})]})})]})}function Ne(){let[e,t]=(0,B.useState)(``);return(0,V.jsxs)(`div`,{className:`flex w-80 flex-col gap-2`,children:[(0,V.jsx)(`input`,{type:`search`,value:e,onChange:e=>t(e.target.value),placeholder:`SimpleTree 검색...`,"aria-label":`SimpleTree 검색`,className:`h-6.75 rounded-none border border-secondary-border bg-white px-2 text-compact text-secondary-foreground outline-none focus:border-primary`}),(0,V.jsx)(`div`,{className:`rounded-none border border-secondary-border bg-white p-1.5`,children:(0,V.jsx)(he,{selectable:!0,items:Le,expandableIds:[`layers`],searchQuery:e,defaultSelectedId:`road`,defaultExpandedIds:[`layers`]})})]})}var B,Pe,V,H,U,W,G,K,Fe,Ie,q,J,Y,X,Z,Q,Le,Re,$,ze;function Be(){return(Be=e((()=>{B=t(),Pe=g(),y(),p(),s(),Ee(),V=n(),{expect:H,fn:U,userEvent:W,within:G}=__STORYBOOK_MODULE_TEST__,K=[{id:`gis-workspace`,label:`GIS 프로젝트 작업공간`,children:[{id:`vector-layers`,label:`벡터 레이어 (EPSG:5179)`,children:[{id:`road-network`,label:`도로 중심선 네트워크`,badge:`Line`},{id:`building-footprint`,label:`건물 폴리곤 레이어`,badge:`Polygon`},{id:`poi-stations`,label:`관측소 위치 포인트`,badge:`Point`}]},{id:`raster-layers`,label:`래스터 및 배경지도`,children:[{id:`aerial-2026`,label:`항공정사영상_2026`},{id:`dem-elevation`,label:`수치표고모델 (DEM)`,disabled:!0}]}]},{id:`styles-group`,label:`심볼 및 스타일 프리셋`,children:[{id:`graduated-rainfall`,label:`강수량 단계구분 스타일`},{id:`categorized-road`,label:`도로 등급별 분류 스타일`}]}],Fe=[{size:`sm`,title:`Small (sm)`},{size:`md`,title:`Medium (md - default)`},{size:`lg`,title:`Large (lg)`}],Ie={title:`Components/Tree`,component:F,tags:[`autodocs`],parameters:{layout:`padded`},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},selectable:{control:`boolean`},searchDebounceMs:{control:{type:`number`,min:0,max:1e3,step:50}},filterOnSearch:{control:`boolean`},indentSize:{control:{type:`number`,min:8,max:32,step:2}},showIndentGuides:{control:`boolean`}},args:{size:`md`,selectable:!1,searchDebounceMs:180,filterOnSearch:!0,indentSize:16,showIndentGuides:!0,onSelectedIdChange:U(),onExpandedIdsChange:U(),onItemClick:U()}},q={args:{selectable:!1,defaultExpandedIds:[`gis-workspace`,`vector-layers`]},render:e=>(0,V.jsx)(`div`,{className:`w-80 rounded-none border border-secondary-border bg-white p-1.5`,children:(0,V.jsx)(F,{...e,children:K.map(e=>z(e,{showIcons:!0}))})}),play:async({canvasElement:e,args:t})=>{let n=G(e);n.getByRole(`treeitem`,{name:/GIS 프로젝트 작업공간/}).focus(),await W.keyboard(`{Escape}`),await W.keyboard(`{ArrowLeft}`),await W.keyboard(`{ArrowDown}`),await W.keyboard(`{ArrowUp}`),await W.keyboard(`{End}`),await W.keyboard(`{ArrowRight}`),await W.keyboard(`{ArrowRight}`),await W.keyboard(`{ArrowRight}`),await W.keyboard(`{ArrowLeft}`),await W.keyboard(`{ArrowLeft}`),await W.keyboard(`{Home}`),await W.keyboard(`{Enter}`),await W.keyboard(` `),await H(t.onItemClick).toHaveBeenCalled();let r=n.getAllByRole(`button`,{name:/Expand|Collapse/});await W.click(r[0])}},J={render:()=>(0,V.jsx)(ke,{}),play:async({canvasElement:e})=>{let t=G(e),n=t.getByRole(`treeitem`,{name:/벡터 레이어/});await H(n).toHaveAttribute(`aria-selected`,`true`);let r=G(n).getByRole(`button`,{name:`Collapse`});await W.click(r),await W.click(G(n).getByRole(`button`,{name:`Expand`}));let i=await t.findByRole(`treeitem`,{name:/건물 폴리곤 레이어/});await W.click(G(i).getByRole(`button`,{name:/건물 폴리곤 레이어/})),await H(i).toHaveAttribute(`aria-selected`,`true`)}},Y={render:()=>(0,V.jsx)(Ae,{})},X={render:()=>(0,V.jsx)(`div`,{className:`flex flex-wrap items-start gap-4`,children:Fe.map(({size:e,title:t})=>(0,V.jsxs)(`div`,{className:`flex w-72 flex-col gap-1.5`,children:[(0,V.jsx)(`span`,{className:`font-sans text-xs font-medium text-muted-foreground`,children:t}),(0,V.jsx)(`div`,{className:`rounded-none border border-secondary-border bg-white p-1.5`,children:(0,V.jsx)(F,{size:e,selectable:!0,defaultSelectedId:`road-network`,defaultExpandedIds:[`gis-workspace`,`vector-layers`],children:K.map(e=>z(e,{selectedId:`road-network`,showIcons:!0,showBadges:!0}))})})]},e))})},Z={render:()=>(0,V.jsx)(je,{}),play:async({canvasElement:e})=>{let t=G(e);await W.click(t.getByRole(`button`,{name:`모두 펼치기`})),await H(t.getByRole(`treeitem`,{name:/도로 중심선 네트워크/})).toBeInTheDocument(),await W.click(t.getByRole(`button`,{name:`모두 접기`})),await W.click(t.getByRole(`button`,{name:`스타일 펼치기`})),await H(t.getByRole(`treeitem`,{name:/강수량 단계구분 스타일/})).toBeInTheDocument(),await W.click(t.getByRole(`button`,{name:`스타일 접기`})),await W.click(t.getByRole(`button`,{name:`자동 등록 전체 펼치기`})),await H(t.getByRole(`treeitem`,{name:`자동 등록 자식`})).toBeInTheDocument()}},Q={render:()=>(0,V.jsx)(Me,{}),play:async({canvasElement:e})=>{let t=G(e),n=t.getByRole(`searchbox`,{name:`노드 검색`}),r=t.getAllByRole(`button`,{name:`Collapse`});await W.click(r[0]),await W.clear(n),await W.type(n,`프리셋`),await H(await t.findByRole(`treeitem`,{name:/심볼 및 스타일 프리셋/})).toBeInTheDocument(),await W.clear(n),await W.type(n,`없는항목XYZ`),await H(await t.findByText(`일치하는 항목이 없습니다.`)).toBeInTheDocument(),await W.click(t.getByRole(`button`,{name:`필터 토글`})),await W.clear(n),await W.type(n,`도로`);let i=t.getAllByRole(`button`,{name:`Expand`});await W.click(i[0]),await W.clear(n)}},Le=[{id:`layers`,label:`레이어 목록`,icon:(0,V.jsx)(v,{className:`size-3.5 text-current`}),children:[{id:`road`,label:`도로망 레이어`,icon:(0,V.jsx)(m,{className:`size-3.5 text-current`})},{id:`water`,label:`수계 레이어`,icon:(0,V.jsx)(m,{className:`size-3.5 text-current`})}]}],Re=class extends B.Component{state={error:null};static getDerivedStateFromError(e){return{error:e.message}}render(){return this.state.error?(0,V.jsx)(`div`,{"data-testid":this.props.label,children:this.state.error}):this.props.children}},$={render:function(){let[e,t]=(0,B.useState)(!1);return(0,V.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,V.jsx)(Ne,{}),(0,V.jsx)(`div`,{className:`w-80 border border-secondary-border bg-white p-1.5`,children:(0,V.jsx)(F,{selectable:!0,children:(0,V.jsx)(I,{itemId:`action-item`,label:(0,V.jsx)(M,{text:`액션 포함 아이템`}),actions:(0,V.jsx)(`button`,{type:`button`,onClick:()=>{},children:`행 액션`})})})}),(0,V.jsx)(c,{type:`button`,size:`sm`,variant:`outline-secondary`,onClick:()=>t(!0),children:`Tree 외부 에러 트리거`}),e&&(0,V.jsx)(Re,{label:`tree-context-error`,children:(0,V.jsx)(I,{itemId:`orphan`,label:`Orphan`})})]})},play:async({canvasElement:e})=>{let t=G(e),n=t.getByRole(`treeitem`,{name:/수계 레이어/});await W.click(G(n).getByRole(`button`,{name:/수계 레이어/})),await H(n).toHaveAttribute(`aria-selected`,`true`);let r=t.getByRole(`button`,{name:`행 액션`});await W.click(r),await W.keyboard(`{Enter}`);let i=t.getByRole(`treeitem`,{name:/액션 포함 아이템/});await H(i).toHaveAttribute(`aria-selected`,`false`);let a=console.error;console.error=()=>{};try{await W.click(t.getByRole(`button`,{name:`Tree 외부 에러 트리거`})),await t.findByTestId(`tree-context-error`)}finally{console.error=a}let o={getId:e=>e.id,getLabel:e=>e.label,getChildren:e=>e.children},s=C(K,`  `,o);await H(s.nodes).toHaveLength(2);let c=C(K,`도로`,o);await H(c.matchedIds.has(`road-network`)).toBe(!0);let l=C(K,`강수량`,{...o,withChildren:(e,t)=>({...e,children:t})});await H(l.matchedIds.has(`graduated-rainfall`)).toBe(!0);let u=(0,Pe.renderToString)((0,V.jsx)(he,{items:Le}));await H(u).toContain(`레이어 목록`)}},ze=[`Default`,`Selectable`,`SelectableComparison`,`Sizes`,`BulkExpandCollapse`,`SearchFilterAndHighlight`,`SimpleTreeExample`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    selectable: false,
    defaultExpandedIds: ['gis-workspace', 'vector-layers']
  },
  render: args => <div className="w-80 rounded-none border border-secondary-border bg-white p-1.5">
      <Tree {...args}>
        {SAMPLE_TREE_DATA.map(node => renderSampleTreeItem(node, {
        showIcons: true
      }))}
      </Tree>
    </div>,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const rootItem = canvas.getByRole('treeitem', {
      name: /GIS 프로젝트 작업공간/
    });

    // 1) 키보드 내비게이션 및 경계 분기 (루트 ArrowLeft, 리프 ArrowRight, 미처리 Escape)
    rootItem.focus();
    await userEvent.keyboard('{Escape}');
    await userEvent.keyboard('{ArrowLeft}'); // 이미 접힌 최상위 노드에서 부모 탐색
    await userEvent.keyboard('{ArrowDown}');
    await userEvent.keyboard('{ArrowUp}');
    await userEvent.keyboard('{End}');
    await userEvent.keyboard('{ArrowRight}'); // 닫힌 '심볼 및 스타일 프리셋' 펼침
    await userEvent.keyboard('{ArrowRight}'); // 펼쳐진 상태에서 첫 자식으로 이동
    await userEvent.keyboard('{ArrowRight}'); // 리프 노드에서 ArrowRight 무시 분기
    await userEvent.keyboard('{ArrowLeft}'); // 부모 노드로 복귀
    await userEvent.keyboard('{ArrowLeft}'); // 펼쳐진 부모 노드 접기
    await userEvent.keyboard('{Home}');
    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard(' ');
    await expect(args.onItemClick).toHaveBeenCalled();

    // 2) 확장 화살표(Collapse / Expand) 버튼 직접 클릭
    const expandBtns = canvas.getAllByRole('button', {
      name: /Expand|Collapse/
    });
    await userEvent.click(expandBtns[0]);
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <SelectableTreeDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const vectorItem = canvas.getByRole('treeitem', {
      name: /벡터 레이어/
    });
    await expect(vectorItem).toHaveAttribute('aria-selected', 'true');
    // 선택된 행 내부의 Collapse/Expand 버튼 클릭 -> selected 분기 클래스 커버
    const vectorCollapseBtn = within(vectorItem).getByRole('button', {
      name: 'Collapse'
    });
    await userEvent.click(vectorCollapseBtn);
    await userEvent.click(within(vectorItem).getByRole('button', {
      name: 'Expand'
    }));

    // CollapsibleContent(keepMounted={false}) 재마운트 이후 새 DOM 요소 조회
    const buildingItem = await canvas.findByRole('treeitem', {
      name: /건물 폴리곤 레이어/
    });
    await userEvent.click(within(buildingItem).getByRole('button', {
      name: /건물 폴리곤 레이어/
    }));
    await expect(buildingItem).toHaveAttribute('aria-selected', 'true');
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <SelectableModeComparisonDemo />
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-start gap-4">
      {SIZE_LIST.map(({
      size,
      title
    }) => <div key={size} className="flex w-72 flex-col gap-1.5">
          <span className="font-sans text-xs font-medium text-muted-foreground">
            {title}
          </span>
          <div className="rounded-none border border-secondary-border bg-white p-1.5">
            <Tree size={size} selectable defaultSelectedId="road-network" defaultExpandedIds={['gis-workspace', 'vector-layers']}>
              {SAMPLE_TREE_DATA.map(node => renderSampleTreeItem(node, {
            selectedId: 'road-network',
            showIcons: true,
            showBadges: true
          }))}
            </Tree>
          </div>
        </div>)}
    </div>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <BulkExpandCollapseDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: '모두 펼치기'
    }));
    await expect(canvas.getByRole('treeitem', {
      name: /도로 중심선 네트워크/
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: '모두 접기'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: '스타일 펼치기'
    }));
    await expect(canvas.getByRole('treeitem', {
      name: /강수량 단계구분 스타일/
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: '스타일 접기'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: '자동 등록 전체 펼치기'
    }));
    await expect(canvas.getByRole('treeitem', {
      name: '자동 등록 자식'
    })).toBeInTheDocument();
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <SearchFilterDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const searchInput = canvas.getByRole('searchbox', {
      name: '노드 검색'
    });

    // 1) 검색 중 펼침/접힘 토글 -> setSearchExpandedOverride 분기
    const collapseBtns = canvas.getAllByRole('button', {
      name: 'Collapse'
    });
    await userEvent.click(collapseBtns[0]);

    // 2) 부모 노드 레이블('프리셋') 자체 매칭 시 자식 없는 클론(Line 394) 커버
    await userEvent.clear(searchInput);
    await userEvent.type(searchInput, '프리셋');
    await expect(await canvas.findByRole('treeitem', {
      name: /심볼 및 스타일 프리셋/
    })).toBeInTheDocument();

    // 3) 일치 항목 없는 검색어 입력 -> emptyMessage 렌더링 분기
    await userEvent.clear(searchInput);
    await userEvent.type(searchInput, '없는항목XYZ');
    await expect(await canvas.findByText('일치하는 항목이 없습니다.')).toBeInTheDocument();

    // 4) filterOnSearch=false 전환 후 검색어 입력 & 펼침 토글 -> 비필터 검색 하이라이트(JSX label 630) 커버
    await userEvent.click(canvas.getByRole('button', {
      name: '필터 토글'
    }));
    await userEvent.clear(searchInput);
    await userEvent.type(searchInput, '도로');
    const expandBtns = canvas.getAllByRole('button', {
      name: 'Expand'
    });
    await userEvent.click(expandBtns[0]);

    // 5) 검색어 초기화
    await userEvent.clear(searchInput);
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [triggerOrphan, setTriggerOrphan] = useState(false);
    return <div className="flex flex-col gap-3">
        <SimpleTreeSearchDemo />

        {/* actions 슬롯 내부 버튼 클릭/키다운 차단(isInsideTreeActions, Lines 538, 1144) & 빈 query TreeHighlightText(556) */}
        <div className="w-80 border border-secondary-border bg-white p-1.5">
          <Tree selectable>
            <TreeItem itemId="action-item" label={<TreeHighlightText text="액션 포함 아이템" />} actions={<button type="button" onClick={() => {}}>
                  행 액션
                </button>} />
          </Tree>
        </div>

        <Button type="button" size="sm" variant="outline-secondary" onClick={() => setTriggerOrphan(true)}>
          Tree 외부 에러 트리거
        </Button>

        {triggerOrphan && <TreeCatchBoundary label="tree-context-error">
            <TreeItem itemId="orphan" label="Orphan" />
          </TreeCatchBoundary>}
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 1) 비제어 선택 클릭 -> selectItem(!isSelectedControlled) 분기
    const waterItem = canvas.getByRole('treeitem', {
      name: /수계 레이어/
    });
    await userEvent.click(within(waterItem).getByRole('button', {
      name: /수계 레이어/
    }));
    await expect(waterItem).toHaveAttribute('aria-selected', 'true');

    // 2) actions 슬롯 내부 버튼 클릭 및 키다운 -> shouldIgnoreTreeItemClick / isInsideTreeActions 차단 커버
    const actionBtn = canvas.getByRole('button', {
      name: '행 액션'
    });
    await userEvent.click(actionBtn);
    await userEvent.keyboard('{Enter}');
    const actionRow = canvas.getByRole('treeitem', {
      name: /액션 포함 아이템/
    });
    await expect(actionRow).toHaveAttribute('aria-selected', 'false');

    // 3) Tree 외부에서 TreeItem 렌더링 시 에러 가드(Line 230) 커버
    const origConsoleError = console.error;
    console.error = () => {};
    try {
      await userEvent.click(canvas.getByRole('button', {
        name: 'Tree 외부 에러 트리거'
      }));
      await canvas.findByTestId('tree-context-error');
    } finally {
      console.error = origConsoleError;
    }

    // 4) filterTreeNodes 유틸 직접 검증 (빈 쿼리, withChildren 미지정(Line 271), 커스텀 withChildren)
    const config = {
      getId: (n: SampleNode) => n.id,
      getLabel: (n: SampleNode) => n.label,
      getChildren: (n: SampleNode) => n.children
    };
    const emptyRes = filterTreeNodes(SAMPLE_TREE_DATA, '  ', config);
    await expect(emptyRes.nodes).toHaveLength(2);
    const defaultMatchedRes = filterTreeNodes(SAMPLE_TREE_DATA, '도로', config);
    await expect(defaultMatchedRes.matchedIds.has('road-network')).toBe(true);
    const customMatchedRes = filterTreeNodes(SAMPLE_TREE_DATA, '강수량', {
      ...config,
      withChildren: (node, children) => ({
        ...node,
        children
      })
    });
    await expect(customMatchedRes.matchedIds.has('graduated-rainfall')).toBe(true);

    // 5) SSR 스냅샷(getServerFocusSnapshot) 커버
    const ssrHtml = renderToString(<SimpleTree items={SIMPLE_TREE_ITEMS} />);
    await expect(ssrHtml).toContain('레이어 목록');
  }
}`,...$.parameters?.docs?.source}}}})))()}Be();export{Z as BulkExpandCollapse,q as Default,Q as SearchFilterAndHighlight,J as Selectable,Y as SelectableComparison,$ as SimpleTreeExample,X as Sizes,ze as __namedExportsOrder,Ie as default};