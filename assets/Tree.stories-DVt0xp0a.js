import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{b as t,n}from"./iframe-Bofpnzsy.js";import{c as r,t as i}from"./utils-CynS5U15.js";import{n as a,t as o}from"./dist-kEwxpQyq.js";import{n as s,t as c}from"./Button-CbXXuGXI.js";import{n as l,t as u}from"./createLucideIcon-DMjG9Kbb.js";import{n as d,t as f}from"./chevron-right-BjvHiSSR.js";import{n as p,t as m}from"./layers-Doz_X0FQ.js";import{i as h,n as ee,r as te,t as ne}from"./Collapsible-CHLjFcJ0.js";var g,_;function re(){return(re=e((()=>{l(),g={name:`folder`,size:24,node:[[`path`,{d:`M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z`,key:`1kt360`}]]},g.node,_=u(g)})))()}function ie(e){return e?Array.from(e.querySelectorAll(me)).find(e=>!e.closest(`[hidden]`))?.dataset.itemId??null:null}function v(){let e=null,t=null,n=null,r=new Set,i=new Set,a=()=>{if(e!==null&&r.has(e))return e;let t=n?.()??null;return t!==null&&r.has(t)?t:r.values().next().value??null},o=()=>{let e=a();if(e!==t){t=e;for(let e of i)e()}};return{subscribe:e=>(i.add(e),()=>{i.delete(e)}),getSnapshot:()=>t,setFirstItemResolver:e=>{n=e,o()},register:t=>(r.add(t),o(),()=>{r.delete(t),e===t&&(e=null),o()}),setActive:t=>{r.has(t)&&e!==t&&(e=t,o())}}}function ae(){let e=(0,R.useContext)(ge);if(!e)throw Error(`TreeItem must be used within a Tree component.`);return e}function oe(){return(0,R.useContext)(_e)}function se(e,t=180){let n=e.trim().length===0,r=n?0:Math.max(0,t),[i,a]=(0,R.useState)(e);return(0,R.useEffect)(()=>{let t=globalThis.setTimeout(()=>{a(n?``:e)},r);return()=>{globalThis.clearTimeout(t)}},[e,n,r]),n?``:r<=0?e:i}function ce(e,t,n){return n?n(e,t):{...e,children:t}}function y(e,t,n,r,i){let a=n.getId(e),o=n.getLabel(e).toLowerCase().includes(t),s=n.getChildren(e),c=s?le(s,t,n,r,i):[];return!o&&c.length===0?null:(o&&r.add(a),c.length>0&&i.push(a),ce(e,c,n.withChildren))}function le(e,t,n,r,i){let a=[];for(let o of e){let e=y(o,t,n,r,i);e!==null&&a.push(e)}return a}function b(e,t,n){let r=t.trim().toLowerCase();if(!r)return{nodes:e,expandedIds:[],matchedIds:new Set};let i=new Set,a=[];return{nodes:le(e,r,n,i,a),expandedIds:a,matchedIds:i}}function x(e,t,n){let r=[],i=[...e];for(;i.length>0;){let e=i.pop();if(!e)continue;let a=n(e);if(a&&a.length>0){r.push(t(e));for(let e=a.length-1;e>=0;--e)i.push(a[e])}}return r}function S(e){return typeof e==`string`||typeof e==`number`?String(e):``}function C(e,t,n){let{itemId:r,label:i,children:a}=e.props,o=S(i).toLowerCase().includes(t),s=w(a,t,n);return!o&&s.nodes.length===0?null:(s.nodes.length>0&&n.push(r),(0,R.cloneElement)(e,{children:s.nodes.length>0?s.nodes:void 0}))}function w(e,t,n=[]){let r=[];return R.Children.forEach(e,e=>{if((0,R.isValidElement)(e)&&e.type===L){let i=C(e,t,n);i!==null&&r.push(i);return}r.push(e)}),{nodes:r,expandedIds:n}}function T(e){return e?Array.from(e.querySelectorAll(me)).filter(e=>e.offsetParent!==null):[]}function E(e,t){let n=T(e.closest(`[role="tree"]`));n[n.indexOf(e)+t]?.focus()}function D(e,t){let n=T(e.closest(`[role="tree"]`));(t===`first`?n[0]:n.at(-1))?.focus()}function O(e){(e.parentElement?.closest(`[role="treeitem"]`))?.focus()}function k(e){e.closest(`[role="treeitem"]`)?.focus({preventScroll:!0})}function A(e,t){let n=e.currentTarget,{isExpanded:r,hasChildren:i,onToggleExpand:a,onActivate:o}=t,s={ArrowDown:()=>E(n,1),ArrowUp:()=>E(n,-1),Home:()=>D(n,`first`),End:()=>D(n,`last`),ArrowRight:()=>{if(i&&!r){a();return}i&&r&&E(n,1)},ArrowLeft:()=>{if(i&&r){a();return}O(n)},Enter:o," ":o}[e.key];s&&(e.preventDefault(),e.stopPropagation(),s())}function j(e){return e instanceof Element&&!!e.closest(ve)}function ue(e){return j(e.target)?!0:e.target instanceof Element&&e.target.closest(`[role="treeitem"]`)!==e.currentTarget}function M({text:e,query:t=``}){let n=t.trim();if(!n)return e;let r=e.toLowerCase(),i=n.toLowerCase(),a=[],o=0;for(;o<e.length;){let t=r.indexOf(i,o);if(t===-1){a.push(e.slice(o));break}t>o&&a.push(e.slice(o,t));let s=e.slice(t,t+n.length);a.push((0,z.jsx)(`mark`,{"data-slot":`tree-highlight`,className:`rounded-none bg-alert-warning-bg px-0.5 font-medium text-alert-warning-fg`,children:s},`${t}-${s}`)),o=t+n.length}return a}function N(e,t){return t.trim()&&(typeof e==`string`||typeof e==`number`)?(0,z.jsx)(M,{text:String(e),query:t}):e}function de({level:e,indentSize:t,selected:n}){return e<=0?null:(0,z.jsx)(z.Fragment,{children:Array.from({length:e},(e,r)=>(0,z.jsx)(`span`,{"aria-hidden":`true`,"data-slot":`tree-indent-guide`,style:{left:`${r*t+be}px`},className:i(`pointer-events-none absolute inset-y-0 border-l`,n?`border-white/30`:`border-secondary-border`)},r))})}function P({hasChildren:e,isExpanded:t,selected:n,disabled:r}){return e?(0,z.jsx)(te,{tabIndex:-1,disabled:r,"aria-label":t?`Collapse`:`Expand`,onClick:e=>{e.stopPropagation(),k(e.currentTarget)},render:(0,z.jsx)(c,{type:`button`,variant:`ghost`,size:`sm`,iconOnly:!0,className:i(`size-4 min-h-4 p-0 text-inherit focus-visible:outline-none`,n?`hover:bg-white/15 active:bg-white/20`:`hover:bg-primary/15 active:bg-primary/20`)}),children:(0,z.jsx)(f,{"aria-hidden":`true`,strokeWidth:2,className:i(`size-3 shrink-0 transition-transform duration-150 motion-reduce:transition-none`,n?`text-white`:`text-secondary-border-active`,t&&`rotate-90`)})}):(0,z.jsx)(`span`,{className:`size-4 shrink-0`,"aria-hidden":`true`})}function F({ref:e,size:t=`md`,selectable:n=!1,selectedId:r,defaultSelectedId:a=null,onSelectedIdChange:o,expandedIds:s,defaultExpandedIds:c=[],onExpandedIdsChange:l,onItemClick:u,expandableIds:d,searchQuery:f=``,searchDebounceMs:p=180,filterOnSearch:m=!0,emptyMessage:h=`항목이 없습니다.`,indentSize:ee=16,showIndentGuides:te=!0,className:ne,children:g,..._}){let[re,ae]=(0,R.useState)(a),[oe,ce]=(0,R.useState)(c),[y,le]=(0,R.useState)(null),b=(0,R.useRef)(null),x=(0,R.useRef)(new Set),[S]=(0,R.useState)(v),C=se(f,p),T=C.trim().toLowerCase(),E=T.length>0,D=(0,R.useMemo)(()=>!E||!m?null:w(g,T),[g,E,m,T]),O=D?D.nodes:g,k=R.Children.count(O)>0;(0,R.useEffect)(()=>{S.setFirstItemResolver(()=>ie(b.current))},[S,k]);let A=r!==void 0,j=A?r:re,ue=y?.query===C?y.ids:D?.expandedIds??oe,M=E&&m?s??ue:s??oe,N=(0,R.useMemo)(()=>new Set(M),[M]),de=(0,R.useCallback)(e=>{n&&j!==e&&(A||ae(e),o?.(e))},[n,j,A,o]),P=(0,R.useCallback)(e=>{s===void 0&&(E&&m?le({query:C,ids:e}):ce(e)),l?.(e)},[s,E,m,C,l]),F=(0,R.useCallback)(e=>(x.current.add(e),()=>{x.current.delete(e)}),[]),I=(0,R.useCallback)((e,t)=>{let n=new Set(N);t?n.add(e):n.delete(e),P(Array.from(n))},[N,P]),L=(0,R.useCallback)(e=>{I(e,!N.has(e))},[N,I]);(0,R.useImperativeHandle)(e,()=>({expandAll:()=>{let e=d?Array.from(new Set(d)):Array.from(x.current);P(e)},collapseAll:()=>{P([])},expandIds:e=>{let t=new Set(N);for(let n of e)t.add(n);P(Array.from(t))},collapseIds:e=>{let t=new Set(N);for(let n of e)t.delete(n);P(Array.from(t))}}),[d,N,P]);let fe=(0,R.useMemo)(()=>({size:t,selectable:n,selectedId:j,expandedSet:N,searchQuery:C,indentSize:ee,showIndentGuides:te,focusStore:S,onItemClick:u,selectItem:de,toggleExpand:L,setExpanded:I,registerExpandableId:F}),[t,n,j,N,C,ee,te,S,u,de,L,I,F]);return!k&&h?(0,z.jsx)(`div`,{"data-slot":`tree-empty`,className:`py-4 text-center font-sans text-xs text-text-disabled select-none`,children:h}):(0,z.jsx)(ge,{value:fe,children:(0,z.jsx)(`ul`,{ref:b,role:`tree`,"data-slot":`tree`,"data-size":t,className:i(`m-0 list-none p-0 font-sans text-secondary-foreground select-none`,ne),..._,children:O})})}function I({labelId:e,level:t,indentSize:n,size:r,selected:a,disabled:o,showIndentGuides:s,hasChildren:c,isExpanded:l,icon:u,renderedLabel:d,actions:f,onLabelClick:p}){return(0,z.jsxs)(`div`,{"data-slot":`tree-item-row`,"data-disabled":o||void 0,style:{paddingLeft:`${t*n+ye}px`},className:Ce({size:r,selected:a,disabled:o}),children:[s?(0,z.jsx)(de,{level:t,indentSize:n,selected:a}):null,(0,z.jsx)(P,{hasChildren:c,isExpanded:l,selected:a,disabled:o}),(0,z.jsxs)(`button`,{type:`button`,tabIndex:-1,"data-slot":`tree-item-label`,disabled:o,onClick:p,className:i(xe,`flex min-w-0 flex-1 cursor-pointer items-center gap-1.5 py-0.5 text-left disabled:cursor-not-allowed`),children:[u?(0,z.jsx)(`span`,{className:`flex size-4 shrink-0 items-center justify-center`,children:u}):null,(0,z.jsx)(`span`,{id:e,className:`min-w-0 flex-1 truncate`,children:d})]}),f?(0,z.jsx)(`div`,{"data-slot":`tree-item-actions`,className:`ml-auto flex shrink-0 items-center gap-1`,children:f}):null]})}function L({itemId:e,label:t,icon:n,selected:r,disabled:a=!1,actions:o,className:s,children:c,onClick:l,onFocus:u,onKeyDown:d,...f}){let p=(0,R.useId)(),{size:m,selectable:h,selectedId:te,expandedSet:g,searchQuery:_,indentSize:re,showIndentGuides:ie,focusStore:v,onItemClick:se,selectItem:ce,toggleExpand:y,setExpanded:le,registerExpandableId:b}=ae(),{level:x}=oe(),S=R.Children.count(c)>0,C=S&&g.has(e),w=h&&!a&&(r??te===e),T=(0,R.useSyncExternalStore)(v.subscribe,()=>v.getSnapshot()===e,he);(0,R.useEffect)(()=>{if(!a)return v.register(e)},[a,v,e]),(0,R.useEffect)(()=>{if(S)return b(e)},[S,e,b]);let E=(0,R.useMemo)(()=>({level:x+1}),[x]),D=(0,R.useMemo)(()=>N(t,_),[t,_]),O=()=>{a||(h?ce(e):S&&y(e),se?.(e))},M=e=>{k(e.currentTarget)},de=e=>{ue(e)||(O(),l?.(e))},P=t=>{u?.(t),!a&&t.target===t.currentTarget&&v.setActive(e)},F=t=>{d?.(t),!(a||t.defaultPrevented||j(t.target))&&A(t,{isExpanded:C,hasChildren:S,onToggleExpand:()=>y(e),onActivate:O})},L=(0,z.jsx)(I,{labelId:p,level:x,indentSize:re,size:m,selected:w,disabled:a,showIndentGuides:ie,hasChildren:S,isExpanded:C,icon:n,renderedLabel:D,actions:o,onLabelClick:M});return(0,z.jsx)(`li`,{role:`treeitem`,"aria-labelledby":p,"data-slot":`tree-item`,"data-item-id":e,tabIndex:!a&&T?0:-1,"aria-selected":h?w:!1,"aria-expanded":S?C:void 0,"aria-disabled":a||void 0,"data-selected":w||void 0,"data-expanded":C||void 0,"data-disabled":a||void 0,onClick:de,onFocus:P,onKeyDown:F,className:i(Se,s),...f,children:S?(0,z.jsxs)(ne,{open:C,disabled:a,onOpenChange:t=>le(e,t),children:[L,(0,z.jsx)(ee,{keepMounted:!1,children:(0,z.jsx)(_e,{value:E,children:(0,z.jsx)(`ul`,{"data-slot":`tree-item-children`,className:`m-0 list-none p-0`,children:c})})})]}):L})}function fe(e){return e.map(e=>(0,z.jsx)(L,{itemId:e.id,label:e.label,icon:e.icon,disabled:e.disabled,selected:e.selected,actions:e.actions,children:e.children?fe(e.children):void 0},e.id))}function pe({items:e,expandableIds:t,emptyMessage:n=`항목이 없습니다.`,...r}){let i=(0,R.useMemo)(()=>t??x(e,e=>e.id,e=>e.children),[t,e]),a=(0,R.useMemo)(()=>fe(e),[e]);return(0,z.jsx)(F,{expandableIds:i,emptyMessage:n,...r,children:a})}var R,z,me,he,ge,_e,ve,ye,be,xe,Se,Ce;function we(){return(we=e((()=>{R=t(),a(),d(),r(),s(),h(),z=n(),me=`[role="treeitem"]:not([aria-disabled="true"])`,he=()=>!1,ge=(0,R.createContext)(null),_e=(0,R.createContext)({level:0}),ve=`[data-slot="tree-item-actions"]`,ye=6,be=14,xe=`m-0 appearance-none border-0 bg-transparent p-0 font-sans text-inherit shadow-none outline-none`,Se=[`outline-none`,`[&:focus-visible>[data-slot=tree-item-row]]:outline-1 [&:focus-visible>[data-slot=tree-item-row]]:-outline-offset-1 [&:focus-visible>[data-slot=tree-item-row]]:outline-primary`,`[&:focus-visible>*>[data-slot=tree-item-row]]:outline-1 [&:focus-visible>*>[data-slot=tree-item-row]]:-outline-offset-1 [&:focus-visible>*>[data-slot=tree-item-row]]:outline-primary`,`[&:focus-visible[data-selected=true]>[data-slot=tree-item-row]]:-outline-offset-2 [&:focus-visible[data-selected=true]>[data-slot=tree-item-row]]:outline-white`,`[&:focus-visible[data-selected=true]>*>[data-slot=tree-item-row]]:-outline-offset-2 [&:focus-visible[data-selected=true]>*>[data-slot=tree-item-row]]:outline-white`],Ce=o(`relative flex items-center gap-1 rounded-none pr-2 transition-colors`,{variants:{size:{sm:`min-h-5.25 text-xs leading-3.75`,md:`min-h-6.5 text-compact leading-4.25`,lg:`min-h-8 text-compact leading-4.5`},selected:{true:``,false:``},disabled:{true:`pointer-events-none text-text-disabled`,false:``}},compoundVariants:[{disabled:!1,selected:!1,className:`text-secondary-foreground hover:bg-primary/10`},{disabled:!1,selected:!0,className:`bg-primary font-medium text-white`}],defaultVariants:{size:`md`,selected:!1,disabled:!1}}),F.__docgenInfo={description:``,methods:[{name:`expandAll`,docblock:null,modifiers:[],params:[],returns:null},{name:`collapseAll`,docblock:null,modifiers:[],params:[],returns:null},{name:`expandIds`,docblock:null,modifiers:[],params:[{name:`ids`,optional:!1,type:{name:`unknown`}}],returns:null},{name:`collapseIds`,docblock:null,modifiers:[],params:[{name:`ids`,optional:!1,type:{name:`unknown`}}],returns:null}],displayName:`Tree`,props:{size:{defaultValue:{value:`'md'`,computed:!1},required:!1},selectable:{defaultValue:{value:`false`,computed:!1},required:!1},defaultSelectedId:{defaultValue:{value:`null`,computed:!1},required:!1},defaultExpandedIds:{defaultValue:{value:`[]`,computed:!1},required:!1},searchQuery:{defaultValue:{value:`''`,computed:!1},required:!1},searchDebounceMs:{defaultValue:{value:`180`,computed:!1},required:!1},filterOnSearch:{defaultValue:{value:`true`,computed:!1},required:!1},emptyMessage:{defaultValue:{value:`'항목이 없습니다.'`,computed:!1},required:!1},indentSize:{defaultValue:{value:`16`,computed:!1},required:!1},showIndentGuides:{defaultValue:{value:`true`,computed:!1},required:!1}}},L.__docgenInfo={description:``,methods:[],displayName:`TreeItem`,props:{disabled:{defaultValue:{value:`false`,computed:!1},required:!1}}},pe.__docgenInfo={description:``,methods:[],displayName:`SimpleTree`,props:{emptyMessage:{defaultValue:{value:`'항목이 없습니다.'`,computed:!1},required:!1}}}})))()}function Te(e,t,n){if(!e)return;let r=n?`text-white`:void 0;return t?(0,H.jsx)(_,{className:`size-3.5 ${r??`text-primary`}`}):(0,H.jsx)(m,{className:`size-3.5 ${r??`text-muted-foreground`}`})}function Ee(e,t,n){if(e&&t)return(0,H.jsx)(`span`,{className:`py-0.2 rounded-none px-1.5 text-2xs ${n?`bg-white/20 text-white`:`bg-secondary text-muted-foreground`}`,children:t})}function B(e,t={}){let{selectedId:n=null,showIcons:r=!1,showBadges:i=!1}=t,a=!!(e.children&&e.children.length>0),o=n===e.id&&!e.disabled;return(0,H.jsx)(L,{itemId:e.id,label:e.label,disabled:e.disabled,icon:Te(r,a,o),actions:Ee(i,e.badge,o),children:e.children?.map(e=>B(e,t))},e.id)}function De(){let[e,t]=(0,V.useState)(`road-network`);return(0,H.jsxs)(`div`,{className:`flex w-80 flex-col gap-2`,children:[(0,H.jsx)(`div`,{className:`rounded-none border border-secondary-border bg-white p-1.5`,children:(0,H.jsx)(F,{selectable:!0,selectedId:e,onSelectedIdChange:e=>t(e),defaultExpandedIds:[`gis-workspace`,`vector-layers`,`raster-layers`],showIndentGuides:!0,children:K.map(t=>B(t,{selectedId:e,showIcons:!0,showBadges:!0}))})}),(0,H.jsxs)(`div`,{className:`flex items-center justify-between rounded-none border border-secondary-border bg-surface-muted px-2 py-1.5 text-2xs text-muted-foreground`,children:[(0,H.jsxs)(`span`,{children:[`선택된 노드: `,e??`없음`]}),e?(0,H.jsx)(`button`,{type:`button`,onClick:()=>t(null),className:`cursor-pointer border-0 bg-transparent p-0 text-2xs font-medium text-primary hover:underline`,children:`선택 해제`}):null]})]})}function Oe(){let[e,t]=(0,V.useState)(null),[n,r]=(0,V.useState)(`vector-layers`);return(0,H.jsxs)(`div`,{className:`flex flex-wrap items-start gap-6`,children:[(0,H.jsxs)(`div`,{className:`flex w-80 flex-col gap-1.5`,children:[(0,H.jsx)(`div`,{className:`font-sans text-xs font-medium text-secondary-foreground`,children:`selectable=false (기본값)`}),(0,H.jsx)(`div`,{className:`rounded-none border border-secondary-border bg-white p-1.5`,children:(0,H.jsx)(F,{selectable:!1,defaultExpandedIds:[`gis-workspace`,`vector-layers`],onItemClick:e=>t(e),children:K.map(e=>B(e,{showIcons:!0,showBadges:!0}))})}),(0,H.jsxs)(`div`,{className:`rounded-none border border-secondary-border bg-surface-muted px-2 py-1 text-2xs text-muted-foreground`,children:[`마지막 클릭 ID: `,e??`없음`]})]}),(0,H.jsxs)(`div`,{className:`flex w-80 flex-col gap-1.5`,children:[(0,H.jsx)(`div`,{className:`font-sans text-xs font-medium text-secondary-foreground`,children:`selectable=true`}),(0,H.jsx)(`div`,{className:`rounded-none border border-secondary-border bg-white p-1.5`,children:(0,H.jsx)(F,{selectable:!0,selectedId:n,onSelectedIdChange:e=>r(e),defaultExpandedIds:[`gis-workspace`,`vector-layers`],children:K.map(e=>B(e,{selectedId:n,showIcons:!0,showBadges:!0}))})}),(0,H.jsxs)(`div`,{className:`rounded-none border border-secondary-border bg-surface-muted px-2 py-1 text-2xs text-muted-foreground`,children:[`선택된 ID: `,n??`없음`]})]})]})}function ke(){let e=(0,V.useRef)(null),t=(0,V.useMemo)(()=>x(K,e=>e.id,e=>e.children),[]);return(0,H.jsxs)(`div`,{className:`flex w-80 flex-col gap-2`,children:[(0,H.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1.5`,children:[(0,H.jsx)(c,{type:`button`,variant:`outline-secondary`,size:`sm`,onClick:()=>e.current?.expandAll(),children:`모두 펼치기`}),(0,H.jsx)(c,{type:`button`,variant:`outline-secondary`,size:`sm`,onClick:()=>e.current?.collapseAll(),children:`모두 접기`}),(0,H.jsx)(c,{type:`button`,variant:`outline-secondary`,size:`sm`,onClick:()=>e.current?.expandIds([`styles-group`]),children:`스타일 펼치기`}),(0,H.jsx)(c,{type:`button`,variant:`outline-secondary`,size:`sm`,onClick:()=>e.current?.collapseIds([`styles-group`]),children:`스타일 접기`})]}),(0,H.jsx)(`div`,{className:`rounded-none border border-secondary-border bg-white p-1.5`,children:(0,H.jsx)(F,{ref:e,expandableIds:t,showIndentGuides:!0,children:K.map(e=>B(e,{showIcons:!0}))})})]})}function Ae(){let[e,t]=(0,V.useState)(`도로`),[n,r]=(0,V.useState)(`road-network`);return(0,H.jsxs)(`div`,{className:`flex w-80 flex-col gap-2`,children:[(0,H.jsx)(`input`,{type:`search`,value:e,onChange:e=>t(e.target.value),placeholder:`노드 검색...`,"aria-label":`노드 검색`,className:`h-6.75 rounded-none border border-secondary-border bg-white px-2 text-compact text-secondary-foreground outline-none focus:border-primary`}),(0,H.jsx)(`div`,{className:`rounded-none border border-secondary-border bg-white p-1.5`,children:(0,H.jsx)(F,{selectable:!0,selectedId:n,onSelectedIdChange:e=>r(e),searchQuery:e,searchDebounceMs:0,defaultExpandedIds:[`gis-workspace`],emptyMessage:`일치하는 항목이 없습니다.`,showIndentGuides:!0,children:K.map(e=>B(e,{selectedId:n,showIcons:!0,showBadges:!0}))})})]})}function je(){let[e,t]=(0,V.useState)(``);return(0,H.jsxs)(`div`,{className:`flex w-80 flex-col gap-2`,children:[(0,H.jsx)(`input`,{type:`search`,value:e,onChange:e=>t(e.target.value),placeholder:`SimpleTree 검색...`,"aria-label":`SimpleTree 검색`,className:`h-6.75 rounded-none border border-secondary-border bg-white px-2 text-compact text-secondary-foreground outline-none focus:border-primary`}),(0,H.jsx)(`div`,{className:`rounded-none border border-secondary-border bg-white p-1.5`,children:(0,H.jsx)(pe,{selectable:!0,items:Fe,searchQuery:e,defaultSelectedId:`road`,defaultExpandedIds:[`layers`]})})]})}var V,H,U,Me,W,G,K,Ne,Pe,q,J,Y,X,Z,Q,Fe,$,Ie;function Le(){return(Le=e((()=>{V=t(),re(),p(),s(),we(),H=n(),{expect:U,fn:Me,userEvent:W,within:G}=__STORYBOOK_MODULE_TEST__,K=[{id:`gis-workspace`,label:`GIS 프로젝트 작업공간`,children:[{id:`vector-layers`,label:`벡터 레이어 (EPSG:5179)`,children:[{id:`road-network`,label:`도로 중심선 네트워크`,badge:`Line`},{id:`building-footprint`,label:`건물 폴리곤 레이어`,badge:`Polygon`},{id:`poi-stations`,label:`관측소 위치 포인트`,badge:`Point`}]},{id:`raster-layers`,label:`래스터 및 배경지도`,children:[{id:`aerial-2026`,label:`항공정사영상_2026`},{id:`dem-elevation`,label:`수치표고모델 (DEM)`,disabled:!0}]}]},{id:`styles-group`,label:`심볼 및 스타일 프리셋`,children:[{id:`graduated-rainfall`,label:`강수량 단계구분 스타일`},{id:`categorized-road`,label:`도로 등급별 분류 스타일`}]}],Ne=[{size:`sm`,title:`Small (sm)`},{size:`md`,title:`Medium (md - default)`},{size:`lg`,title:`Large (lg)`}],Pe={title:`Components/Tree`,component:F,tags:[`autodocs`],parameters:{layout:`padded`},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},selectable:{control:`boolean`},searchDebounceMs:{control:{type:`number`,min:0,max:1e3,step:50}},filterOnSearch:{control:`boolean`},indentSize:{control:{type:`number`,min:8,max:32,step:2}},showIndentGuides:{control:`boolean`}},args:{size:`md`,selectable:!1,searchDebounceMs:180,filterOnSearch:!0,indentSize:16,showIndentGuides:!0,onSelectedIdChange:Me(),onExpandedIdsChange:Me(),onItemClick:Me()}},q={args:{selectable:!1,defaultExpandedIds:[`gis-workspace`,`vector-layers`]},render:e=>(0,H.jsx)(`div`,{className:`w-80 rounded-none border border-secondary-border bg-white p-1.5`,children:(0,H.jsx)(F,{...e,children:K.map(e=>B(e,{showIcons:!0}))})}),play:async({canvasElement:e,args:t})=>{let n=G(e);n.getByRole(`treeitem`,{name:/GIS 프로젝트 작업공간/}).focus(),await W.keyboard(`{ArrowDown}`),await W.keyboard(`{ArrowUp}`),await W.keyboard(`{End}`),await W.keyboard(`{ArrowRight}`),await W.keyboard(`{ArrowRight}`),await W.keyboard(`{ArrowLeft}`),await W.keyboard(`{ArrowLeft}`),await W.keyboard(`{Home}`),await W.keyboard(`{Enter}`),await W.keyboard(` `),await U(t.onItemClick).toHaveBeenCalled();let r=n.getAllByRole(`button`,{name:/Expand|Collapse/});await W.click(r[0])}},J={render:()=>(0,H.jsx)(De,{}),play:async({canvasElement:e})=>{let t=G(e),n=t.getByRole(`treeitem`,{name:/도로 중심선 네트워크/}),r=t.getByRole(`treeitem`,{name:/건물 폴리곤 레이어/});await U(n).toHaveAttribute(`aria-selected`,`true`),await U(r).toHaveAttribute(`aria-selected`,`false`),await W.click(G(r).getByRole(`button`,{name:/건물 폴리곤 레이어/})),await U(r).toHaveAttribute(`aria-selected`,`true`),await U(n).toHaveAttribute(`aria-selected`,`false`)}},Y={render:()=>(0,H.jsx)(Oe,{})},X={render:()=>(0,H.jsx)(`div`,{className:`flex flex-wrap items-start gap-4`,children:Ne.map(({size:e,title:t})=>(0,H.jsxs)(`div`,{className:`flex w-72 flex-col gap-1.5`,children:[(0,H.jsx)(`span`,{className:`font-sans text-xs font-medium text-muted-foreground`,children:t}),(0,H.jsx)(`div`,{className:`rounded-none border border-secondary-border bg-white p-1.5`,children:(0,H.jsx)(F,{size:e,selectable:!0,defaultSelectedId:`road-network`,defaultExpandedIds:[`gis-workspace`,`vector-layers`],children:K.map(e=>B(e,{selectedId:`road-network`,showIcons:!0,showBadges:!0}))})})]},e))})},Z={render:()=>(0,H.jsx)(ke,{}),play:async({canvasElement:e})=>{let t=G(e);await W.click(t.getByRole(`button`,{name:`모두 펼치기`})),await U(t.getByRole(`treeitem`,{name:/도로 중심선 네트워크/})).toBeInTheDocument(),await W.click(t.getByRole(`button`,{name:`모두 접기`})),await W.click(t.getByRole(`button`,{name:`스타일 펼치기`})),await U(t.getByRole(`treeitem`,{name:/강수량 단계구분 스타일/})).toBeInTheDocument(),await W.click(t.getByRole(`button`,{name:`스타일 접기`}))}},Q={render:()=>(0,H.jsx)(Ae,{}),play:async({canvasElement:e})=>{let t=G(e),n=t.getByRole(`searchbox`,{name:`노드 검색`}),r=t.getAllByRole(`button`,{name:`Collapse`});await W.click(r[0]),await W.clear(n),await W.type(n,`없는항목XYZ`),await U(await t.findByText(`일치하는 항목이 없습니다.`)).toBeInTheDocument(),await W.clear(n)}},Fe=[{id:`layers`,label:`레이어 목록`,icon:(0,H.jsx)(_,{className:`size-3.5 text-current`}),children:[{id:`road`,label:`도로망 레이어`,icon:(0,H.jsx)(m,{className:`size-3.5 text-current`})},{id:`water`,label:`수계 레이어`,icon:(0,H.jsx)(m,{className:`size-3.5 text-current`})}]}],$={render:()=>(0,H.jsx)(je,{}),play:async({canvasElement:e})=>{let t=G(e).getByRole(`treeitem`,{name:/수계 레이어/});await W.click(G(t).getByRole(`button`,{name:/수계 레이어/})),await U(t).toHaveAttribute(`aria-selected`,`true`);let n={getId:e=>e.id,getLabel:e=>e.label,getChildren:e=>e.children},r=b(K,`  `,n);await U(r.nodes).toHaveLength(2);let i=b(K,`강수량`,{...n,withChildren:(e,t)=>({...e,children:t})});await U(i.matchedIds.has(`graduated-rainfall`)).toBe(!0)}},Ie=[`Default`,`Selectable`,`SelectableComparison`,`Sizes`,`BulkExpandCollapse`,`SearchFilterAndHighlight`,`SimpleTreeExample`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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

    // 1) 키보드 내비게이션 (ArrowDown, ArrowUp, End, Home, ArrowLeft, ArrowRight, Enter, Space)
    rootItem.focus();
    await userEvent.keyboard('{ArrowDown}');
    await userEvent.keyboard('{ArrowUp}');
    await userEvent.keyboard('{End}');
    await userEvent.keyboard('{ArrowRight}'); // 닫힌 '심볼 및 스타일 프리셋' 펼침
    await userEvent.keyboard('{ArrowRight}'); // 펼쳐진 상태에서 첫 자식으로 이동
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
    const roadItem = canvas.getByRole('treeitem', {
      name: /도로 중심선 네트워크/
    });
    const buildingItem = canvas.getByRole('treeitem', {
      name: /건물 폴리곤 레이어/
    });
    await expect(roadItem).toHaveAttribute('aria-selected', 'true');
    await expect(buildingItem).toHaveAttribute('aria-selected', 'false');
    await userEvent.click(within(buildingItem).getByRole('button', {
      name: /건물 폴리곤 레이어/
    }));
    await expect(buildingItem).toHaveAttribute('aria-selected', 'true');
    await expect(roadItem).toHaveAttribute('aria-selected', 'false');
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

    // 2) 일치 항목 없는 검색어 입력 -> emptyMessage 렌더링 분기
    await userEvent.clear(searchInput);
    await userEvent.type(searchInput, '없는항목XYZ');
    await expect(await canvas.findByText('일치하는 항목이 없습니다.')).toBeInTheDocument();

    // 3) 검색어 초기화 -> 전체 트리 복구
    await userEvent.clear(searchInput);
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <SimpleTreeSearchDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 비제어 선택 클릭 -> selectItem(!isSelectedControlled) 분기
    const waterItem = canvas.getByRole('treeitem', {
      name: /수계 레이어/
    });
    await userEvent.click(within(waterItem).getByRole('button', {
      name: /수계 레이어/
    }));
    await expect(waterItem).toHaveAttribute('aria-selected', 'true');

    // filterTreeNodes 유틸 직접 검증 (빈 쿼리, 매칭 쿼리, 커스텀 withChildren)
    const config = {
      getId: (n: SampleNode) => n.id,
      getLabel: (n: SampleNode) => n.label,
      getChildren: (n: SampleNode) => n.children
    };
    const emptyRes = filterTreeNodes(SAMPLE_TREE_DATA, '  ', config);
    await expect(emptyRes.nodes).toHaveLength(2);
    const matchedRes = filterTreeNodes(SAMPLE_TREE_DATA, '강수량', {
      ...config,
      withChildren: (node, children) => ({
        ...node,
        children
      })
    });
    await expect(matchedRes.matchedIds.has('graduated-rainfall')).toBe(true);
  }
}`,...$.parameters?.docs?.source}}}})))()}Le();export{Z as BulkExpandCollapse,q as Default,Q as SearchFilterAndHighlight,J as Selectable,Y as SelectableComparison,$ as SimpleTreeExample,X as Sizes,Ie as __namedExportsOrder,Pe as default};