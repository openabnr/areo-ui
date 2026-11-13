import{a as e,n as t,t as n}from"./rolldown-runtime-DkW27tQK.js";import{b as r,n as i}from"./iframe-BKXkO2qw.js";import{t as a}from"./react-dom-Bkjybw6b.js";import{c as o,ct as s,lt as c,t as l}from"./utils-Cjde27Em.js";import{n as u,t as d}from"./Button-CPyB4zts.js";import{o as f,s as p}from"./Select-Ca_j3lOm.js";import{n as m,t as h}from"./loader-circle-Cs2wm9zf.js";import{a as g,p as _,y as v}from"./icons-C_cPlx2o.js";import{n as ee,t as te}from"./CircularProgress-Cm5LFEoU.js";import{a as ne,c as re,i as y,n as ie,o as ae,r as oe,s as se,t as ce}from"./resizable-uuAUI9SI.js";var le=n(((e,t)=>{t.exports=`SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`})),ue=n(((e,t)=>{var n=le();function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function e(e,t,r,i,a,o){if(o!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name=`Invariant Violation`,s}}e.isRequired=e;function t(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}})),de=n(((e,t)=>{t.exports=ue()()}));function fe(e,t){for(let n=0,r=e.length;n<r;n++)if(t.apply(t,[e[n],n,e]))return e[n]}function pe(e){return typeof e==`function`||Object.prototype.toString.call(e)===`[object Function]`}function b(e){return typeof e==`number`&&!isNaN(e)}function x(e){return parseInt(e,10)}function S(e,t,n){if(e[t])return Error(`Invalid prop ${t} passed to ${n} - do not set this, set it on the child.`)}function C(e=`transform`){if(typeof window>`u`)return``;let t=window.document?.documentElement?.style;if(!t||e in t)return``;for(let n=0;n<Re.length;n++)if(w(e,Re[n])in t)return Re[n];return``}function w(e,t){return t?`${t}${T(e)}`:e}function T(e){let t=``,n=!0;for(let r=0;r<e.length;r++)n?(t+=e[r].toUpperCase(),n=!1):e[r]===`-`?n=!0:t+=e[r];return t}function me(e,t){Be||=fe([`matches`,`webkitMatchesSelector`,`mozMatchesSelector`,`msMatchesSelector`,`oMatchesSelector`],function(t){return pe(e[t])})??``;let n=e[Be];return pe(n)?!!n.call(e,t):!1}function he(e,t,n){let r=e;do{if(me(r,t))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1}function E(e,t,n,r){if(!e)return;let i={capture:!0,...r},a=n;e.addEventListener?e.addEventListener(t,a,i):e.attachEvent?e.attachEvent(`on`+t,a):e[`on`+t]=a}function D(e,t,n,r){if(!e)return;let i={capture:!0,...r},a=n;e.removeEventListener?e.removeEventListener(t,a,i):e.detachEvent?e.detachEvent(`on`+t,a):e[`on`+t]=null}function ge(e){let t=e.clientHeight,n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=x(n.borderTopWidth),t+=x(n.borderBottomWidth),t}function O(e){let t=e.clientWidth,n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=x(n.borderLeftWidth),t+=x(n.borderRightWidth),t}function _e(e){let t=e.clientHeight,n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=x(n.paddingTop),t-=x(n.paddingBottom),t}function k(e){let t=e.clientWidth,n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=x(n.paddingLeft),t-=x(n.paddingRight),t}function ve(e,t,n){let r=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect();return{x:(e.clientX+t.scrollLeft-r.left)/n,y:(e.clientY+t.scrollTop-r.top)/n}}function ye(e,t){let n=j(e,t,`px`);return{[w(`transform`,ze)]:n}}function A(e,t){return j(e,t,``)}function j({x:e,y:t},n,r){let i=`translate(${e}${r},${t}${r})`;return n&&(i=`translate(${`${typeof n.x==`string`?n.x:n.x+r}`}, ${`${typeof n.y==`string`?n.y:n.y+r}`})`+i),i}function be(e,t){return e.targetTouches&&fe(e.targetTouches,e=>t===e.identifier)||e.changedTouches&&fe(e.changedTouches,e=>t===e.identifier)}function xe(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier}function Se(){return typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}function Ce(e,t){if(!e)return;let n=e.getElementById(`react-draggable-style-el`);if(!n){n=e.createElement(`style`),n.type=`text/css`,n.id=`react-draggable-style-el`;let r=t??Se();r&&n.setAttribute(`nonce`,r),n.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,n.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,e.getElementsByTagName(`head`)[0].appendChild(n)}e.body&&Ee(e.body,`react-draggable-transparent-selection`)}function we(e){window.requestAnimationFrame?window.requestAnimationFrame(()=>{Te(e)}):Te(e)}function Te(e){if(e)try{e.body&&De(e.body,`react-draggable-transparent-selection`);let t=e.selection;if(t)t.empty();else{let t=(e.defaultView||window).getSelection();t&&t.type!==`Caret`&&t.removeAllRanges()}}catch{}}function Ee(e,t){e.classList?e.classList.add(t):e.className.match(RegExp(`(?:^|\\s)${t}(?!\\S)`))||(e.className+=` ${t}`)}function De(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(RegExp(`(?:^|\\s)${t}(?!\\S)`,`g`),``)}function Oe(e,t,n){if(!e.props.bounds)return[t,n];let{bounds:r}=e.props;r=typeof r==`string`?r:N(r);let i=Pe(e);if(typeof r==`string`){let{ownerDocument:e}=i,t=e.defaultView;if(!t)throw Error(`Cannot resolve the owner window of the draggable node.`);let n;if(n=r===`parent`?i.parentNode:i.getRootNode().querySelector(r),!(n instanceof t.HTMLElement))throw Error(`Bounds selector "`+r+`" could not find an element.`);let a=n,o=t.getComputedStyle(i),s=t.getComputedStyle(a);r={left:-i.offsetLeft+x(s.paddingLeft)+x(o.marginLeft),top:-i.offsetTop+x(s.paddingTop)+x(o.marginTop),right:k(a)-O(i)-i.offsetLeft+x(s.paddingRight)-x(o.marginRight),bottom:_e(a)-ge(i)-i.offsetTop+x(s.paddingBottom)-x(o.marginBottom)}}return b(r.right)&&(t=Math.min(t,r.right)),b(r.bottom)&&(n=Math.min(n,r.bottom)),b(r.left)&&(t=Math.max(t,r.left)),b(r.top)&&(n=Math.max(n,r.top)),[t,n]}function M(e,t,n){return[Math.round(t/e[0])*e[0],Math.round(n/e[1])*e[1]]}function ke(e){return e.props.axis===`both`||e.props.axis===`x`}function Ae(e){return e.props.axis===`both`||e.props.axis===`y`}function je(e,t,n){let r=typeof t==`number`?be(e,t):null;if(typeof t==`number`&&!r)return null;let i=Pe(n),a=n.props.offsetParent||i.offsetParent||i.ownerDocument.body;return ve(r||e,a,n.props.scale)}function Me(e,t,n){let r=!b(e.lastX),i=Pe(e);return r?{node:i,deltaX:0,deltaY:0,lastX:t,lastY:n,x:t,y:n}:{node:i,deltaX:t-e.lastX,deltaY:n-e.lastY,lastX:e.lastX,lastY:e.lastY,x:t,y:n}}function Ne(e,t){let n=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/n,y:e.state.y+t.deltaY/n,deltaX:t.deltaX/n,deltaY:t.deltaY/n,lastX:e.state.x,lastY:e.state.y}}function N(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}function Pe(e){let t=e.findDOMNode();if(!t)throw Error(`<DraggableCore>: Unmounted during event!`);return t}var P,F,Fe,Ie,I,Le,Re,ze,Be,L,R,z,B,V;function Ve(){return(Ve=t((()=>{P=e(r(),1),F=e(de(),1),Fe=e(a(),1),c(),Ie=e(r(),1),I=e(de(),1),Le=e(a(),1),Re=[`Moz`,`Webkit`,`O`,`ms`],ze=C(),Be=``,L=typeof process<`u`&&{}.DRAGGABLE_DEBUG?console.log.bind(console):function(){},R={touch:{start:`touchstart`,move:`touchmove`,stop:`touchend`},mouse:{start:`mousedown`,move:`mousemove`,stop:`mouseup`}},z=R.mouse,B=class extends Ie.Component{constructor(){super(...arguments),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,this.touchIdentifier=null,this.mounted=!1,this.handleDragStart=e=>{if(this.props.onMouseDown(e),!this.props.allowAnyClick&&(typeof e.button==`number`&&e.button!==0||e.ctrlKey))return!1;let t=this.findDOMNode();if(!t||!t.ownerDocument||!t.ownerDocument.body)throw Error(`<DraggableCore> not mounted on DragStart!`);let{ownerDocument:n}=t;if(this.props.disabled||!(e.target instanceof n.defaultView.Node)||this.props.handle&&!he(e.target,this.props.handle,t)||this.props.cancel&&he(e.target,this.props.cancel,t))return;e.type===`touchstart`&&!this.props.allowMobileScroll&&e.preventDefault();let r=xe(e);this.touchIdentifier=r;let i=je(e,r,this);if(i==null)return;let{x:a,y:o}=i,s=Me(this,a,o);L(`DraggableCore: handleDragStart: %j`,s),L(`calling`,this.props.onStart),this.props.onStart(e,s)!==!1&&this.mounted!==!1&&(this.props.enableUserSelectHack&&Ce(n,this.props.nonce),this.dragging=!0,this.lastX=a,this.lastY=o,E(n,z.move,this.handleDrag),E(n,z.stop,this.handleDragStop))},this.handleDrag=e=>{let t=je(e,this.touchIdentifier,this);if(t==null)return;let{x:n,y:r}=t;if(Array.isArray(this.props.grid)){let e=n-this.lastX,t=r-this.lastY;if([e,t]=M(this.props.grid,e,t),!e&&!t)return;n=this.lastX+e,r=this.lastY+t}let i=Me(this,n,r);if(L(`DraggableCore: handleDrag: %j`,i),this.props.onDrag(e,i)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent(`mouseup`))}catch{let e=document.createEvent(`MouseEvents`);e.initMouseEvent(`mouseup`,!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(e)}return}this.lastX=n,this.lastY=r},this.handleDragStop=e=>{if(!this.dragging)return;let t=je(e,this.touchIdentifier,this);if(t==null)return;let{x:n,y:r}=t;if(Array.isArray(this.props.grid)){let e=n-this.lastX||0,t=r-this.lastY||0;[e,t]=M(this.props.grid,e,t),n=this.lastX+e,r=this.lastY+t}let i=Me(this,n,r);if(this.props.onStop(e,i)===!1||this.mounted===!1)return!1;let a=this.findDOMNode();a&&this.props.enableUserSelectHack&&we(a.ownerDocument),L(`DraggableCore: handleDragStop: %j`,i),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,a&&(L(`DraggableCore: Removing handlers`),D(a.ownerDocument,z.move,this.handleDrag),D(a.ownerDocument,z.stop,this.handleDragStop))},this.onMouseDown=e=>(z=R.mouse,this.handleDragStart(e)),this.onMouseUp=e=>(z=R.mouse,this.handleDragStop(e)),this.onTouchStart=e=>(z=R.touch,this.handleDragStart(e)),this.onTouchEnd=e=>(z=R.touch,this.handleDragStop(e))}componentDidMount(){this.mounted=!0;let e=this.findDOMNode();e&&E(e,R.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;let e=this.findDOMNode();if(e){let{ownerDocument:t}=e;D(t,R.mouse.move,this.handleDrag),D(t,R.touch.move,this.handleDrag),D(t,R.mouse.stop,this.handleDragStop),D(t,R.touch.stop,this.handleDragStop),D(e,R.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&we(t)}}findDOMNode(){if(this.props?.nodeRef)return this.props.nodeRef.current;let e=Le.default;return typeof e.findDOMNode==`function`?e.findDOMNode(this):(L(`react-draggable: ReactDOM.findDOMNode is not available in React 19+. You must provide a nodeRef prop. See: https://github.com/react-grid-layout/react-draggable#noderef`),null)}render(){return Ie.cloneElement(Ie.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}},B.displayName=`DraggableCore`,B.propTypes={allowAnyClick:I.default.bool,allowMobileScroll:I.default.bool,children:I.default.node.isRequired,disabled:I.default.bool,enableUserSelectHack:I.default.bool,offsetParent:function(e,t){if(e[t]&&e[t].nodeType!==1)throw Error(`Draggable's offsetParent must be a DOM Node.`)},grid:I.default.arrayOf(I.default.number),handle:I.default.string,cancel:I.default.string,nodeRef:I.default.object,nonce:I.default.string,onStart:I.default.func,onDrag:I.default.func,onStop:I.default.func,onMouseDown:I.default.func,scale:I.default.number,className:S,style:S,transform:S},B.defaultProps={allowAnyClick:!1,allowMobileScroll:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1},V=class extends P.Component{constructor(e){super(e),this.onDragStart=(e,t)=>{if(L(`Draggable: onDragStart: %j`,t),this.props.onStart(e,Ne(this,t))===!1)return!1;this.setState({dragging:!0,dragged:!0})},this.onDrag=(e,t)=>{if(!this.state.dragging)return!1;L(`Draggable: onDrag: %j`,t);let n=Ne(this,t),r={x:n.x,y:n.y,slackX:0,slackY:0};if(this.props.bounds){let{x:e,y:t}=r;r.x+=this.state.slackX,r.y+=this.state.slackY;let[i,a]=Oe(this,r.x,r.y);r.x=i,r.y=a,r.slackX=this.state.slackX+(e-r.x),r.slackY=this.state.slackY+(t-r.y),n.x=r.x,n.y=r.y,n.deltaX=r.x-this.state.x,n.deltaY=r.y-this.state.y}if(this.props.onDrag(e,n)===!1)return!1;this.setState(r)},this.onDragStop=(e,t)=>{if(!this.state.dragging||this.props.onStop(e,Ne(this,t))===!1)return!1;L(`Draggable: onDragStop: %j`,t);let n={dragging:!1,slackX:0,slackY:0};if(this.props.position){let{x:e,y:t}=this.props.position;n.x=e,n.y=t}this.setState(n)},this.state={dragging:!1,dragged:!1,x:e.position?e.position.x:e.defaultPosition.x,y:e.position?e.position.y:e.defaultPosition.y,prevPropsPosition:{...e.position},slackX:0,slackY:0,isElementSVG:!1},e.position&&!(e.onDrag||e.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}static getDerivedStateFromProps({position:e},{prevPropsPosition:t}){return e&&(!t||e.x!==t.x||e.y!==t.y)?(L(`Draggable: getDerivedStateFromProps %j`,{position:e,prevPropsPosition:t}),{x:e.x,y:e.y,prevPropsPosition:{...e}}):null}componentDidMount(){window.SVGElement!==void 0&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.state.dragging&&this.setState({dragging:!1})}findDOMNode(){if(this.props?.nodeRef)return this.props.nodeRef.current;let e=Fe.default;return typeof e.findDOMNode==`function`?e.findDOMNode(this):null}render(){let{axis:e,bounds:t,children:n,defaultPosition:r,defaultClassName:i,defaultClassNameDragging:a,defaultClassNameDragged:o,position:c,positionOffset:l,scale:u,...d}=this.props,f={},p=null,m=!c||this.state.dragging,h=c||r,g={x:ke(this)&&m?this.state.x:h.x,y:Ae(this)&&m?this.state.y:h.y};this.state.isElementSVG?p=A(g,l):f=ye(g,l);let _=P.Children.only(n),v=s(_.props.className||``,i,{[a]:this.state.dragging,[o]:this.state.dragged});return P.createElement(B,{...d,onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop},P.cloneElement(_,{className:v,style:{..._.props.style,...f},transform:p}))}},V.displayName=`Draggable`,V.propTypes={...B.propTypes,axis:F.default.oneOf([`both`,`x`,`y`,`none`]),bounds:F.default.oneOfType([F.default.shape({left:F.default.number,right:F.default.number,top:F.default.number,bottom:F.default.number}),F.default.string,F.default.oneOf([!1])]),defaultClassName:F.default.string,defaultClassNameDragging:F.default.string,defaultClassNameDragged:F.default.string,defaultPosition:F.default.shape({x:F.default.number,y:F.default.number}),positionOffset:F.default.shape({x:F.default.oneOfType([F.default.number,F.default.string]),y:F.default.oneOfType([F.default.number,F.default.string])}),position:F.default.shape({x:F.default.number,y:F.default.number}),className:S,style:S,transform:S},V.defaultProps={...B.defaultProps,axis:`both`,bounds:!1,defaultClassName:`react-draggable`,defaultClassNameDragging:`react-draggable-dragging`,defaultClassNameDragged:`react-draggable-dragged`,defaultPosition:{x:0,y:0},scale:1}})))()}var He;function Ue(){return(Ue=t((()=>{Ve(),He=V})))()}function We(){return Xe+=1,Xe}function Ge(e){let t=(0,U.useRef)(e);return(0,U.useEffect)(()=>{t.current=e},[e]),t}function Ke(e,t,n,r,i,a){let o=window,s=window.top??window,c=y(s),[l,u]=ne(s),d=(s.screenX??s.screenLeft??0)+l,f=(s.screenY??s.screenTop??0)+u;try{let e=o;for(;e!==s&&e.parent&&e!==e.parent;){let t=e.frameElement;if(t&&typeof t.getBoundingClientRect==`function`){let e=t.getBoundingClientRect();d+=e.left*c,f+=e.top*c}e=e.parent}}catch{}let p=(e-d)/c,m=(t-f)/c,h=Math.max(n-i,0),g=Math.max(r-a,0);return p=Math.min(Math.max(0,p),h),m=Math.min(Math.max(0,m),g),{x:Math.round(p),y:Math.round(m)}}function H({title:e=`대화상자`,onClose:t=()=>{},onBeforeClose:n=()=>!0,children:r,loading:i=!1,hasBackdrop:a=!1,backdropColor:o,minWidth:s=240,minHeight:c=160,resizable:u=!1,resizeHandleClasses:f,allowPopout:p=!0,noTitle:m=!1,usePortal:v=!1,className:ee,bodyClassName:ne,isPoppedOut:y,onPopoutChange:ie,onResizeStart:se,onResize:le,onResizeStop:ue,left:de,top:fe,width:pe=640,height:b=480}){let x=(0,U.useId)(),S=(0,U.useRef)(null),C=(0,U.useRef)(null),w=(0,U.useRef)(null),T=(0,U.useRef)(null),[me,he]=(0,U.useState)(!1),E=y??me,[D,ge]=(0,U.useState)(null),[O,_e]=(0,U.useState)(pe),[k,ve]=(0,U.useState)(b),ye=(0,U.useMemo)(()=>({...Ye,...f}),[f]),[A,j]=(0,U.useState)(()=>({x:de??Math.max(Math.floor((window.innerWidth-pe)/2),0),y:fe??Math.max(Math.floor((window.innerHeight-b)/2),0)})),be=Ge(A),xe=(0,U.useRef)({startX:0,startY:0,startWidth:0,startHeight:0}),[Se,Ce]=(0,U.useState)({top:0,right:0,bottom:0,left:0}),[we,Te]=(0,U.useState)(),[Ee,De]=(0,U.useState)(),Oe={top:u,bottom:u,left:u,right:u,bottomRight:u,topLeft:!1,topRight:!1,bottomLeft:!1},M=(0,U.useCallback)(()=>{let e=C.current?.clientWidth??window.innerWidth,t=C.current?.clientHeight??window.innerHeight;Ce({left:0,top:0,right:Math.max(e-O,0),bottom:Math.max(t-k,0)}),Te(e-20),De(t-20)},[O,k]);(0,U.useEffect)(()=>(M(),window.addEventListener(`resize`,M),()=>window.removeEventListener(`resize`,M)),[M]);let ke=(0,U.useCallback)(()=>{if(!S.current)return;let e=We();S.current.style.zIndex=String(e)},[]);(0,U.useEffect)(()=>{if(E)return;let e=requestAnimationFrame(()=>{ke()});return()=>cancelAnimationFrame(e)},[E,ke]);let Ae=(e,t)=>{j({x:Math.floor(t.x),y:Math.floor(t.y)})},je=()=>{xe.current={startX:A.x,startY:A.y,startWidth:O,startHeight:k},se?.()},Me=(e,t,n,r)=>{let{startX:i,startY:a,startWidth:o,startHeight:l}=xe.current,u=typeof s==`number`?s:240,d=typeof c==`number`?c:160,f=C.current?.clientWidth??window.innerWidth,p=C.current?.clientHeight??window.innerHeight,m=i,h=a;if(t===`left`||t===`topLeft`||t===`bottomLeft`){let e=i+o,t=i-r.width;m=Math.min(Math.max(0,t),e-u)}if(t===`top`||t===`topLeft`||t===`topRight`){let e=a+l,t=a-r.height;h=Math.min(Math.max(0,t),e-d)}let g=o,_=l;if(t===`right`||t===`topRight`||t===`bottomRight`){let e=Math.max(f-i,u),t=o+r.width;g=Math.min(Math.max(t,u),e),n.style.width=`${Math.round(g)}px`}if(t===`bottom`||t===`bottomLeft`||t===`bottomRight`){let e=Math.max(p-a,d),t=l+r.height;_=Math.min(Math.max(t,d),e),n.style.height=`${Math.round(_)}px`}T.current&&(T.current.style.transform=`translate(${Math.round(m)}px, ${Math.round(h)}px)`),le?.(Math.round(g),Math.round(_))},Ne=(e,t,n,r)=>{let{startX:i,startY:a,startWidth:o,startHeight:l}=xe.current,u=typeof s==`number`?s:240,d=typeof c==`number`?c:160,f=C.current?.clientWidth??window.innerWidth,p=C.current?.clientHeight??window.innerHeight,m=i,h=a,g=o+r.width,_=l+r.height;if(t===`left`||t===`topLeft`||t===`bottomLeft`){let e=i+o,t=i-r.width;m=Math.min(Math.max(0,t),e-u),g=e-m}else{let e=Math.max(f-m,u);g=Math.min(Math.max(g,u),e)}if(t===`top`||t===`topLeft`||t===`topRight`){let e=a+l,t=a-r.height;h=Math.min(Math.max(0,t),e-d),_=e-h}else{let e=Math.max(p-h,d);_=Math.min(Math.max(_,d),e)}let v=Math.round(g),ee=Math.round(_);j({x:Math.round(m),y:Math.round(h)}),_e(v),ve(ee),ue?.(v,ee)},N=(0,U.useCallback)(()=>{n()&&t({left:be.current?.x??0,top:be.current?.y??0,width:O,height:k,zIndex:S.current?.style.zIndex??`100`})},[k,n,t,be,O]);(0,U.useEffect)(()=>{if(!a)return;let e=e=>{e.key===`Escape`&&N()};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[a,N]);let Pe=()=>{let e,t,n,r;if(w.current){let i=re(w.current),[a,o]=ae?ae():[60,8,8];e=Math.round(i.left-o),t=Math.round(i.top-a),n=Math.round(i.width),r=Math.round(i.height)}let i={left:e??window.screenLeft,top:t??window.screenTop,width:Math.max(n??O,240),height:Math.max(r??k,160)};ge(i),y===void 0&&he(!0),ie?.(!0)},P=(e,t)=>{let n=C.current?.clientWidth??window.innerWidth,r=C.current?.clientHeight??window.innerHeight,i=typeof s==`number`?s:240,a=typeof c==`number`?c:160,o=Math.min(Math.max(t.width,i),n),l=Math.min(Math.max(t.height,a),r),[u,d]=ae?ae():[60,8,8],f=Ke(t.left+d,t.top+u,n,r,o,l);_e(o),ve(l),j(f),y===void 0&&he(!1),ie?.(!1)},F=()=>(0,W.jsx)(`div`,{ref:T,className:l(`pointer-events-auto absolute`,m&&`top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`),children:(0,W.jsx)(ce,{ref:e=>{w.current=e?.resizable??null},bounds:`window`,style:m?Je:void 0,size:{width:O,height:k},enable:Oe,minWidth:s,maxWidth:we,minHeight:c,maxHeight:Ee,handleClasses:ye,boundsByDirection:!0,role:`dialog`,"aria-modal":a,"aria-labelledby":m?void 0:x,className:l(`areo-dialog-root box-border flex flex-col`,`bg-white shadow-md outline-none`,ee),onResizeStart:je,onResize:Me,onResizeStop:Ne,children:(0,W.jsxs)(`div`,{className:`flex size-full flex-col`,onContextMenu:e=>e.preventDefault(),children:[!m&&(0,W.jsxs)(`div`,{className:`areo-dialog-handle box-border flex h-7.5 w-full flex-none cursor-move items-center justify-between border border-widget-head-border bg-widget-head-background pr-1.5 pl-3 text-widget-head-foreground select-none`,children:[(0,W.jsx)(`div`,{className:`pointer-events-none min-w-0 grow overflow-hidden`,children:(0,W.jsx)(`span`,{id:x,className:`block truncate text-xs font-bold tracking-tight text-white`,children:e})}),(0,W.jsxs)(`div`,{className:`flex shrink-0 items-center gap-0.5`,children:[p&&(0,W.jsx)(d,{variant:`ghost`,iconOnly:!0,size:`sm`,title:`새 창에서 보기`,"aria-label":`새 창에서 보기`,onClick:Pe,className:`size-6 min-w-6 p-0 text-white/80 hover:bg-white/10 hover:text-white`,children:(0,W.jsx)(_,{width:16,height:16,fill:`currentColor`})}),(0,W.jsx)(d,{variant:`ghost`,iconOnly:!0,size:`sm`,title:`닫기`,"aria-label":`닫기`,onClick:N,className:`size-6 min-w-6 p-0 text-white/80 hover:bg-white/10 hover:text-white`,children:(0,W.jsx)(g,{width:16,height:16,fill:`currentColor`})})]})]}),(0,W.jsxs)(`div`,{className:l(`relative flex flex-auto flex-col overflow-auto bg-widget-body-background p-3 text-xs text-widget-body-foreground`,`border border-widget-body-border`,ne),children:[r,i&&(0,W.jsx)(`div`,{className:`absolute inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-[1px]`,children:(0,W.jsx)(te,{size:`md`})})]})]})})});if(p&&E&&D)return(0,W.jsx)(oe,{title:e,onUnload:P,features:D,children:(0,W.jsxs)(`div`,{style:{width:`100vw`,height:`100vh`,boxSizing:`border-box`},className:l(`flex flex-col justify-between overflow-hidden bg-white p-3 text-xs text-neutral-800`,ne),children:[r,i&&(0,W.jsx)(`div`,{className:`absolute inset-0 z-50 flex items-center justify-center bg-black/10`,children:(0,W.jsx)(h,{className:`size-6 animate-spin text-[#354265]`})})]})});let Fe=(0,W.jsxs)(`div`,{ref:S,onMouseDownCapture:ke,className:`areo-dialog-wrapper pointer-events-none fixed inset-0 overflow-hidden`,children:[a&&(0,W.jsx)(`button`,{type:`button`,tabIndex:-1,"aria-label":`대화상자 닫기`,style:{background:o},className:`pointer-events-auto fixed inset-0 m-0 border-none bg-black/40 p-0 backdrop-blur-xs transition-opacity outline-none`,onClick:N}),(0,W.jsx)(`div`,{ref:C,className:`areo-dialog-container pointer-events-none absolute inset-0 overflow-hidden`,children:m?F():(0,W.jsx)(He,{nodeRef:T,scale:1,handle:`.areo-dialog-handle`,bounds:Se,position:A,onDrag:Ae,children:F()})})]});if(v){if(typeof document>`u`)return null;let e=document.querySelector(`#areoDialogRoot`)??document.body;return(0,qe.createPortal)(Fe,e)}return Fe}var U,qe,W,Je,G,Ye,Xe;function Ze(){return(Ze=t((()=>{U=e(r(),1),qe=a(),Ue(),c(),m(),o(),u(),ee(),v(),se(),ie(),W=i(),Je={left:`50%`,top:`50%`,transform:`translate(-50%, -50%)`},G=s(`absolute z-30 transition-all hover:bg-resizable-background/20 active:bg-resizable-background/30`),Ye={top:l(G,`top-0 right-0 left-0 h-1.5 cursor-row-resize hover:h-2`),bottom:l(G,`right-0 bottom-0 left-0 h-1.5 cursor-row-resize hover:h-2`),left:l(G,`top-0 bottom-0 left-0 w-1.5 cursor-col-resize hover:w-2`),right:l(G,`top-0 right-0 bottom-0 w-1.5 cursor-col-resize hover:w-2`),topRight:l(G,`top-0 right-0 h-3 w-3 cursor-nesw-resize`),bottomRight:l(G,`right-0 bottom-0 h-3 w-3 cursor-nwse-resize`),bottomLeft:l(G,`bottom-0 left-0 h-3 w-3 cursor-nesw-resize`),topLeft:l(G,`top-0 left-0 h-3 w-3 cursor-nwse-resize`)},Xe=100,H.__docgenInfo={description:``,methods:[],displayName:`Dialog`,props:{title:{defaultValue:{value:`'대화상자'`,computed:!1},required:!1},onClose:{defaultValue:{value:`() => {}`,computed:!1},required:!1},onBeforeClose:{defaultValue:{value:`() => true`,computed:!1},required:!1},loading:{defaultValue:{value:`false`,computed:!1},required:!1},hasBackdrop:{defaultValue:{value:`false`,computed:!1},required:!1},minWidth:{defaultValue:{value:`240`,computed:!1},required:!1},minHeight:{defaultValue:{value:`160`,computed:!1},required:!1},resizable:{defaultValue:{value:`false`,computed:!1},required:!1},allowPopout:{defaultValue:{value:`true`,computed:!1},required:!1},noTitle:{defaultValue:{value:`false`,computed:!1},required:!1},usePortal:{defaultValue:{value:`false`,computed:!1},required:!1},width:{defaultValue:{value:`640`,computed:!1},required:!1},height:{defaultValue:{value:`480`,computed:!1},required:!1}}}})))()}var K,q,Qe,$e,J,Y,X,Z,Q,$,et;function tt(){return(tt=t((()=>{K=r(),u(),Ze(),p(),q=i(),Qe={title:`Components/Dialog`,component:H,parameters:{layout:`fullscreen`},tags:[`autodocs`],args:{title:`대화상자`,width:500,height:360,minWidth:240,minHeight:160,resizable:!1,hasBackdrop:!1,loading:!1,allowPopout:!0,noTitle:!1,usePortal:!1,onClose:e=>{console.log(`Dialog closed with state:`,e)},onBeforeClose:()=>!0,onResizeStart:()=>{},onResize:(e,t)=>{console.log(`Resizing:`,e,t)},onResizeStop:(e,t)=>{console.log(`Resize stopped:`,e,t)},onPopoutChange:e=>{console.log(`Popout changed:`,e)}},argTypes:{title:{control:`text`,description:`대화상자 상단 헤더에 표시될 제목 문자열`},width:{control:{type:`range`,min:300,max:1200,step:20},description:`대화상자의 초기 너비 (px 단위)`},height:{control:{type:`range`,min:200,max:900,step:20},description:`대화상자의 초기 높이 (px 단위)`},minWidth:{control:{type:`number`},description:`리사이징 가능한 최소 너비 (기본값: 240px)`},minHeight:{control:{type:`number`},description:`리사이징 가능한 최소 높이 (기본값: 160px)`},left:{control:`number`,description:`초기 X 좌표 (미지정 시 화면 가로 중앙 배치)`},top:{control:`number`,description:`초기 Y 좌표 (미지정 시 화면 세로 중앙 배치)`},resizable:{control:`boolean`,description:`테두리 및 모서리 드래그 리사이징 활성화 여부`},allowPopout:{control:`boolean`,description:`우측 상단 독립 브라우저 창 분리(Pop-out) 버튼 제공 여부`},isPoppedOut:{control:`boolean`,description:`외부 제어용 팝아웃 상태`},hasBackdrop:{control:`boolean`,description:`배경 딤(Backdrop) 오버레이 활성화 및 모달 모드 여부`},backdropColor:{control:`color`,description:`배경 딤 커스텀 색상`},loading:{control:`boolean`,description:`비동기 작업 시 로딩 스피너 오버레이 표시 여부`},noTitle:{control:`boolean`,description:`헤더 바 숨김 여부 (헤더 숨김 시 중앙 고정)`},usePortal:{control:`boolean`,description:`"#areoDialogRoot" 또는 document.body로 포털 렌더링 여부`},onClose:{action:`closed`,description:`닫기 버튼 클릭 또는 ESC 입력 시 최종 위치/크기/z-index 정보와 함께 호출`},onBeforeClose:{description:`닫히기 직전 검증 콜백 (false 반환 시 닫기 취소)`},onResizeStart:{action:`resizeStart`,description:`리사이징 드래그 시작 시 호출`},onResize:{action:`resizing`,description:`리사이징 드래그 도중 너비/높이와 함께 호출`},onResizeStop:{action:`resizeStop`,description:`리사이징 드래그 완료 시 최종 크기와 함께 호출`},onPopoutChange:{action:`popoutChange`,description:`새 창 분리 또는 복귀 시 상태 변경 콜백`}}},$e=[{value:`epsg4326`,title:`WGS 84 (EPSG:4326)`},{value:`epsg5179`,title:`Korea 2000 (EPSG:5179)`},{value:`epsg54032`,title:`Azimuthal Equidistant (EPSG:54032)`},{value:`epsg3857`,title:`Web Mercator (EPSG:3857)`}],J={parameters:{docs:{description:{story:`헤더 영역을 드래그하여 자유롭게 이동할 수 있으며, 우측 상단 새 창 버튼을 눌러 독립 브라우저 팝업 창으로 분리 및 본 창으로 복귀할 수 있는 기본 형태입니다.`}}},render:e=>{let[t,n]=(0,K.useState)(!0);return(0,q.jsxs)(`div`,{className:`relative flex h-screen w-screen items-center justify-center bg-neutral-100 p-6`,children:[!t&&(0,q.jsx)(d,{variant:`primary`,onClick:()=>n(!0),children:`다이얼로그 열기`}),t&&(0,q.jsx)(H,{...e,onClose:t=>{e.onClose?.(t),n(!1)},children:(0,q.jsxs)(`div`,{className:`flex h-full flex-col justify-between`,children:[(0,q.jsxs)(`div`,{className:`space-y-2`,children:[(0,q.jsx)(`p`,{className:`font-semibold text-neutral-800`,children:`기본 대화상자 본문`}),(0,q.jsx)(`p`,{className:`text-neutral-600`,children:`상단 헤더 영역을 마우스로 잡고 자유롭게 이동할 수 있으며, 우측 상단 새 창 버튼을 눌러 독립 창으로 분리할 수 있습니다.`}),(0,q.jsxs)(`div`,{className:`relative flex flex-col gap-2 p-2`,children:[`셀렉트`,(0,q.jsx)(f,{size:`md`,items:$e})]})]}),(0,q.jsxs)(`div`,{className:`flex justify-end gap-2 pt-4`,children:[(0,q.jsx)(d,{variant:`secondary`,onClick:()=>n(!1),children:`취소`}),(0,q.jsx)(d,{variant:`primary`,onClick:()=>n(!1),children:`확인`})]})]})})]})},args:{title:`기본 정보`,width:480,height:300}},Y={parameters:{docs:{description:{story:"`resizable={true}` 설정 시 상/하/좌/우 및 우하단 코너 테두리를 드래그하여 실시간 60fps로 대화상자의 크기를 조절할 수 있습니다."}}},render:e=>{let[t,n]=(0,K.useState)(!0);return(0,q.jsxs)(`div`,{className:`relative flex h-screen w-screen items-center justify-center bg-neutral-100 p-6`,children:[!t&&(0,q.jsx)(d,{variant:`primary`,onClick:()=>n(!0),children:`리사이즈 다이얼로그 열기`}),t&&(0,q.jsx)(H,{...e,onClose:t=>{e.onClose?.(t),n(!1)},children:(0,q.jsxs)(`div`,{className:`flex h-full flex-col justify-between`,children:[(0,q.jsxs)(`div`,{className:`space-y-3`,children:[(0,q.jsx)(`p`,{className:`font-medium text-neutral-800`,children:`좌/우/하단 및 모서리 테두리를 드래그하여 크기를 조절해 보세요.`}),(0,q.jsxs)(`div`,{className:`rounded border border-neutral-200 bg-neutral-50 p-2.5 text-[11px] text-neutral-500`,children:[`minWidth: `,String(e.minWidth??300),`px / minHeight:`,` `,String(e.minHeight??200),`px`]})]}),(0,q.jsx)(`div`,{className:`flex justify-end pt-4`,children:(0,q.jsx)(d,{variant:`primary`,onClick:()=>n(!1),children:`완료`})})]})})]})},args:{title:`레이어 속성 설정 (Resizable)`,width:560,height:380,resizable:!0,minWidth:320,minHeight:220}},X={parameters:{docs:{description:{story:"`hasBackdrop={true}` 설정 시 반투명 배경 딤이 추가되어 모달(Modal) 형태로 동작하며, 배경 클릭 및 ESC 키 입력 시 대화상자가 닫힙니다."}}},render:e=>{let[t,n]=(0,K.useState)(!0);return(0,q.jsxs)(`div`,{className:`relative flex h-screen w-screen items-center justify-center bg-neutral-200 p-6`,children:[!t&&(0,q.jsx)(d,{variant:`primary`,onClick:()=>n(!0),children:`모달 다이얼로그 열기`}),t&&(0,q.jsx)(H,{...e,onClose:t=>{e.onClose?.(t),n(!1)},children:(0,q.jsxs)(`div`,{className:`flex h-full flex-col justify-between`,children:[(0,q.jsxs)(`p`,{className:`text-neutral-700`,children:[`어두운 배경 영역을 클릭하거나`,` `,(0,q.jsx)(`kbd`,{className:`rounded border bg-neutral-100 px-1 py-0.5 font-mono text-[11px]`,children:`ESC`}),` `,`키를 누르면 닫힙니다.`]}),(0,q.jsx)(`div`,{className:`flex justify-end gap-2 pt-4`,children:(0,q.jsx)(d,{variant:`secondary`,onClick:()=>n(!1),children:`닫기`})})]})})]})},args:{title:`작업 확인`,width:440,height:220,hasBackdrop:!0}},Z={parameters:{docs:{description:{story:"`loading={true}` 설정 시 대화상자 본문 위에 반투명 블러 오버레이와 회전 스피너(`CircularProgress`)가 표시되어 데이터 처리 상태를 나타냅니다."}}},render:e=>{let[t,n]=(0,K.useState)(!0);return(0,q.jsx)(`div`,{className:`relative flex h-screen w-screen items-center justify-center bg-neutral-100 p-6`,children:(0,q.jsx)(H,{...e,loading:t,children:(0,q.jsxs)(`div`,{className:`flex h-full flex-col justify-between`,children:[(0,q.jsx)(`p`,{className:`text-neutral-700`,children:`데이터 처리 중입니다. 로딩 스피너 오버레이가 표시됩니다.`}),(0,q.jsx)(`div`,{className:`flex justify-center pt-4`,children:(0,q.jsx)(d,{variant:`secondary`,size:`sm`,onClick:()=>n(e=>!e),children:t?`로딩 끄기`:`로딩 켜기`})})]})})})},args:{title:`데이터 로딩 중`,width:420,height:240,loading:!0}},Q={parameters:{docs:{description:{story:`여러 개의 비모달(Non-modal) 대화상자가 열려 있을 때, 클릭한 대화상자가 자동으로 최상단 z-index로 승격(bringToFront)되는 멀티 윈도우 스택 관리 기능입니다.`}}},render:()=>{let[e,t]=(0,K.useState)([{id:1,title:`대화상자 #1`,left:80,top:80},{id:2,title:`대화상자 #2`,left:160,top:140}]),[n,r]=(0,K.useState)(3),i=()=>{let i=e.length%8*30,a={id:n,title:`대화상자 #${n}`,left:100+i,top:100+i};t(e=>[...e,a]),r(e=>e+1)},a=e=>{t(t=>t.filter(t=>t.id!==e))};return(0,q.jsxs)(`div`,{className:`relative h-screen w-screen overflow-hidden bg-neutral-100 p-6`,children:[(0,q.jsx)(`div`,{className:`fixed top-4 left-4 z-9999`,children:(0,q.jsx)(d,{variant:`primary`,onClick:i,children:`+ 새 다이얼로그 추가`})}),e.map(e=>(0,q.jsx)(H,{title:e.title,left:e.left,top:e.top,width:400,height:260,resizable:!0,onClose:()=>a(e.id),children:(0,q.jsxs)(`div`,{className:`flex h-full flex-col justify-between`,children:[(0,q.jsxs)(`div`,{className:`space-y-1.5`,children:[(0,q.jsxs)(`p`,{className:`font-semibold text-neutral-800`,children:[e.title,` (ID: `,e.id,`)`]}),(0,q.jsxs)(`p`,{className:`text-neutral-600`,children:[`- 새로 열린 창은 즉시 최상단 Z-Index로 배치됩니다.`,(0,q.jsx)(`br`,{}),`- 대화상자를 클릭하면 해당 창이 즉시 맨 앞으로 전환됩니다.`]})]}),(0,q.jsx)(`div`,{className:`flex justify-end pt-2`,children:(0,q.jsx)(d,{variant:`secondary`,size:`sm`,onClick:()=>a(e.id),children:`닫기`})})]})},e.id))]})}},$={parameters:{docs:{description:{story:"`isPoppedOut`과 `onPopoutChange` props를 상위 상태와 바인딩하여 툴바 등 대화상자 외부의 UI에서도 독립 창 분리 및 복귀를 제어하는 패턴입니다."}}},render:e=>{let[t,n]=(0,K.useState)(!1);return(0,q.jsxs)(`div`,{className:`relative flex h-screen w-screen flex-col items-center justify-center bg-neutral-100 p-6`,children:[(0,q.jsx)(`div`,{className:`mb-4 flex items-center gap-2`,children:(0,q.jsx)(d,{variant:`secondary`,onClick:()=>n(e=>!e),children:t?`본 화면으로 다이얼로그 복귀`:`외부 버튼으로 새 창 분리`})}),(0,q.jsx)(H,{...e,isPoppedOut:t,onPopoutChange:n,children:(0,q.jsxs)(`div`,{className:`flex h-full flex-col justify-between`,children:[(0,q.jsxs)(`div`,{className:`space-y-2`,children:[(0,q.jsx)(`p`,{className:`font-semibold text-neutral-800`,children:`외부 제어형 팝아웃 다이얼로그`}),(0,q.jsxs)(`p`,{className:`text-neutral-600`,children:[`상단 외부 버튼과 다이얼로그 자체 헤더의 새 창 분리 버튼이 동일한 상태(`,(0,q.jsxs)(`code`,{children:[`isPoppedOut: `,String(t)]}),`)로 동기화됩니다.`]})]}),(0,q.jsx)(`div`,{className:`flex justify-end pt-4`,children:(0,q.jsx)(d,{variant:`primary`,onClick:()=>n(!1),children:`닫기 / 복귀`})})]})})]})},args:{title:`제어형 다이얼로그`,width:460,height:280,allowPopout:!0}},et=[`Default`,`Resizable`,`WithBackdrop`,`Loading`,`StackedDialogs`,`ControlledPopout`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '헤더 영역을 드래그하여 자유롭게 이동할 수 있으며, 우측 상단 새 창 버튼을 눌러 독립 브라우저 팝업 창으로 분리 및 본 창으로 복귀할 수 있는 기본 형태입니다.'
      }
    }
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return <div className="relative flex h-screen w-screen items-center justify-center bg-neutral-100 p-6">
        {!isOpen && <Button variant="primary" onClick={() => setIsOpen(true)}>
            다이얼로그 열기
          </Button>}

        {isOpen && <Dialog {...args} onClose={(state: DialogCloseState) => {
        args.onClose?.(state);
        setIsOpen(false);
      }}>
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-2">
                <p className="font-semibold text-neutral-800">
                  기본 대화상자 본문
                </p>
                <p className="text-neutral-600">
                  상단 헤더 영역을 마우스로 잡고 자유롭게 이동할 수 있으며, 우측
                  상단 새 창 버튼을 눌러 독립 창으로 분리할 수 있습니다.
                </p>
                <div className="relative flex flex-col gap-2 p-2">
                  셀렉트
                  <SimpleSelect size="md" items={sampleItems} />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <Button variant="secondary" onClick={() => setIsOpen(false)}>
                  취소
                </Button>
                <Button variant="primary" onClick={() => setIsOpen(false)}>
                  확인
                </Button>
              </div>
            </div>
          </Dialog>}
      </div>;
  },
  args: {
    title: '기본 정보',
    width: 480,
    height: 300
  }
}`,...J.parameters?.docs?.source},description:{story:`기본 대화상자 (드래그, 새 창 분리 및 닫기 인터랙션)`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`resizable={true}\` 설정 시 상/하/좌/우 및 우하단 코너 테두리를 드래그하여 실시간 60fps로 대화상자의 크기를 조절할 수 있습니다.'
      }
    }
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return <div className="relative flex h-screen w-screen items-center justify-center bg-neutral-100 p-6">
        {!isOpen && <Button variant="primary" onClick={() => setIsOpen(true)}>
            리사이즈 다이얼로그 열기
          </Button>}

        {isOpen && <Dialog {...args} onClose={(state: DialogCloseState) => {
        args.onClose?.(state);
        setIsOpen(false);
      }}>
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-3">
                <p className="font-medium text-neutral-800">
                  좌/우/하단 및 모서리 테두리를 드래그하여 크기를 조절해 보세요.
                </p>
                <div className="rounded border border-neutral-200 bg-neutral-50 p-2.5 text-[11px] text-neutral-500">
                  minWidth: {String(args.minWidth ?? 300)}px / minHeight:{' '}
                  {String(args.minHeight ?? 200)}px
                </div>
              </div>
              <div className="flex justify-end pt-4">
                <Button variant="primary" onClick={() => setIsOpen(false)}>
                  완료
                </Button>
              </div>
            </div>
          </Dialog>}
      </div>;
  },
  args: {
    title: '레이어 속성 설정 (Resizable)',
    width: 560,
    height: 380,
    resizable: true,
    minWidth: 320,
    minHeight: 220
  }
}`,...Y.parameters?.docs?.source},description:{story:`테두리 리사이즈(Resizable) 지원 대화상자`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`hasBackdrop={true}\` 설정 시 반투명 배경 딤이 추가되어 모달(Modal) 형태로 동작하며, 배경 클릭 및 ESC 키 입력 시 대화상자가 닫힙니다.'
      }
    }
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return <div className="relative flex h-screen w-screen items-center justify-center bg-neutral-200 p-6">
        {!isOpen && <Button variant="primary" onClick={() => setIsOpen(true)}>
            모달 다이얼로그 열기
          </Button>}

        {isOpen && <Dialog {...args} onClose={(state: DialogCloseState) => {
        args.onClose?.(state);
        setIsOpen(false);
      }}>
            <div className="flex h-full flex-col justify-between">
              <p className="text-neutral-700">
                어두운 배경 영역을 클릭하거나{' '}
                <kbd className="rounded border bg-neutral-100 px-1 py-0.5 font-mono text-[11px]">
                  ESC
                </kbd>{' '}
                키를 누르면 닫힙니다.
              </p>
              <div className="flex justify-end gap-2 pt-4">
                <Button variant="secondary" onClick={() => setIsOpen(false)}>
                  닫기
                </Button>
              </div>
            </div>
          </Dialog>}
      </div>;
  },
  args: {
    title: '작업 확인',
    width: 440,
    height: 220,
    hasBackdrop: true
  }
}`,...X.parameters?.docs?.source},description:{story:`배경 딤(Backdrop) 및 ESC 키 닫기`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`loading={true}\` 설정 시 대화상자 본문 위에 반투명 블러 오버레이와 회전 스피너(\`CircularProgress\`)가 표시되어 데이터 처리 상태를 나타냅니다.'
      }
    }
  },
  render: args => {
    const [loading, setLoading] = useState(true);
    return <div className="relative flex h-screen w-screen items-center justify-center bg-neutral-100 p-6">
        <Dialog {...args} loading={loading}>
          <div className="flex h-full flex-col justify-between">
            <p className="text-neutral-700">
              데이터 처리 중입니다. 로딩 스피너 오버레이가 표시됩니다.
            </p>
            <div className="flex justify-center pt-4">
              <Button variant="secondary" size="sm" onClick={() => setLoading(prev => !prev)}>
                {loading ? '로딩 끄기' : '로딩 켜기'}
              </Button>
            </div>
          </div>
        </Dialog>
      </div>;
  },
  args: {
    title: '데이터 로딩 중',
    width: 420,
    height: 240,
    loading: true
  }
}`,...Z.parameters?.docs?.source},description:{story:`비동기 작업 로딩 오버레이`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '여러 개의 비모달(Non-modal) 대화상자가 열려 있을 때, 클릭한 대화상자가 자동으로 최상단 z-index로 승격(bringToFront)되는 멀티 윈도우 스택 관리 기능입니다.'
      }
    }
  },
  render: () => {
    const [dialogs, setDialogs] = useState<DialogItem[]>([{
      id: 1,
      title: '대화상자 #1',
      left: 80,
      top: 80
    }, {
      id: 2,
      title: '대화상자 #2',
      left: 160,
      top: 140
    }]);
    const [nextId, setNextId] = useState(3);
    const handleAddDialog = () => {
      const offset = dialogs.length % 8 * 30;
      const newDialog: DialogItem = {
        id: nextId,
        title: \`대화상자 #\${nextId}\`,
        left: 100 + offset,
        top: 100 + offset
      };
      setDialogs(prev => [...prev, newDialog]);
      setNextId(prev => prev + 1);
    };
    const handleClose = (id: number) => {
      setDialogs(prev => prev.filter(d => d.id !== id));
    };
    return <div className="relative h-screen w-screen overflow-hidden bg-neutral-100 p-6">
        <div className="fixed top-4 left-4 z-9999">
          <Button variant="primary" onClick={handleAddDialog}>
            + 새 다이얼로그 추가
          </Button>
        </div>

        {dialogs.map(d => <Dialog key={d.id} title={d.title} left={d.left} top={d.top} width={400} height={260} resizable onClose={() => handleClose(d.id)}>
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-1.5">
                <p className="font-semibold text-neutral-800">
                  {d.title} (ID: {d.id})
                </p>
                <p className="text-neutral-600">
                  - 새로 열린 창은 즉시 최상단 Z-Index로 배치됩니다.
                  <br />- 대화상자를 클릭하면 해당 창이 즉시 맨 앞으로
                  전환됩니다.
                </p>
              </div>
              <div className="flex justify-end pt-2">
                <Button variant="secondary" size="sm" onClick={() => handleClose(d.id)}>
                  닫기
                </Button>
              </div>
            </div>
          </Dialog>)}
      </div>;
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`isPoppedOut\`과 \`onPopoutChange\` props를 상위 상태와 바인딩하여 툴바 등 대화상자 외부의 UI에서도 독립 창 분리 및 복귀를 제어하는 패턴입니다.'
      }
    }
  },
  render: args => {
    const [isPoppedOut, setIsPoppedOut] = useState(false);
    return <div className="relative flex h-screen w-screen flex-col items-center justify-center bg-neutral-100 p-6">
        <div className="mb-4 flex items-center gap-2">
          <Button variant="secondary" onClick={() => setIsPoppedOut(prev => !prev)}>
            {isPoppedOut ? '본 화면으로 다이얼로그 복귀' : '외부 버튼으로 새 창 분리'}
          </Button>
        </div>

        <Dialog {...args} isPoppedOut={isPoppedOut} onPopoutChange={setIsPoppedOut}>
          <div className="flex h-full flex-col justify-between">
            <div className="space-y-2">
              <p className="font-semibold text-neutral-800">
                외부 제어형 팝아웃 다이얼로그
              </p>
              <p className="text-neutral-600">
                상단 외부 버튼과 다이얼로그 자체 헤더의 새 창 분리 버튼이 동일한
                상태(<code>isPoppedOut: {String(isPoppedOut)}</code>)로
                동기화됩니다.
              </p>
            </div>
            <div className="flex justify-end pt-4">
              <Button variant="primary" onClick={() => setIsPoppedOut(false)}>
                닫기 / 복귀
              </Button>
            </div>
          </div>
        </Dialog>
      </div>;
  },
  args: {
    title: '제어형 다이얼로그',
    width: 460,
    height: 280,
    allowPopout: true
  }
}`,...$.parameters?.docs?.source},description:{story:`외부 제어형 팝아웃 (Controlled isPoppedOut)`,...$.parameters?.docs?.description}}}})))()}tt();export{$ as ControlledPopout,J as Default,Z as Loading,Y as Resizable,Q as StackedDialogs,X as WithBackdrop,et as __namedExportsOrder,Qe as default};