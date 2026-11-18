import{a as e,n as t,t as n}from"./rolldown-runtime-DkW27tQK.js";import{b as r,n as i}from"./iframe-DKr3KdmY.js";import{t as a}from"./react-dom-C__kg7Xq.js";import{c as o,ct as s,lt as c,t as l}from"./utils-CynS5U15.js";import{n as u,t as d}from"./Button-_ArORYID.js";import{o as f,s as p}from"./Select-BbEM2iAy.js";import{a as ee,b as m,m as te}from"./icons-B81xqWwX.js";import{n as ne,t as re}from"./useMergedRef-CPEmxdeZ.js";import{n as ie,t as ae}from"./CircularProgress-BDowmIA7.js";import{a as oe,c as se,i as h,n as ce,o as le,r as ue,s as de,t as fe}from"./resizable-CL1rVik9.js";var pe=n(((e,t)=>{t.exports=`SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`})),me=n(((e,t)=>{var n=pe();function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function e(e,t,r,i,a,o){if(o!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name=`Invariant Violation`,s}}e.isRequired=e;function t(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}})),he=n(((e,t)=>{t.exports=me()()}));function g(e,t){for(let n=0,r=e.length;n<r;n++)if(t.apply(t,[e[n],n,e]))return e[n]}function ge(e){return typeof e==`function`||Object.prototype.toString.call(e)===`[object Function]`}function _(e){return typeof e==`number`&&!isNaN(e)}function v(e){return parseInt(e,10)}function y(e,t,n){if(e[t])return Error(`Invalid prop ${t} passed to ${n} - do not set this, set it on the child.`)}function _e(e=`transform`){if(typeof window>`u`)return``;let t=window.document?.documentElement?.style;if(!t||e in t)return``;for(let n=0;n<F.length;n++)if(b(e,F[n])in t)return F[n];return``}function b(e,t){return t?`${t}${ve(e)}`:e}function ve(e){let t=``,n=!0;for(let r=0;r<e.length;r++)n?(t+=e[r].toUpperCase(),n=!1):e[r]===`-`?n=!0:t+=e[r];return t}function x(e,t){I||=g([`matches`,`webkitMatchesSelector`,`mozMatchesSelector`,`msMatchesSelector`,`oMatchesSelector`],function(t){return ge(e[t])})??``;let n=e[I];return ge(n)?!!n.call(e,t):!1}function S(e,t,n){let r=e;do{if(x(r,t))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1}function C(e,t,n,r){if(!e)return;let i={capture:!0,...r},a=n;e.addEventListener?e.addEventListener(t,a,i):e.attachEvent?e.attachEvent(`on`+t,a):e[`on`+t]=a}function w(e,t,n,r){if(!e)return;let i={capture:!0,...r},a=n;e.removeEventListener?e.removeEventListener(t,a,i):e.detachEvent?e.detachEvent(`on`+t,a):e[`on`+t]=null}function ye(e){let t=e.clientHeight,n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=v(n.borderTopWidth),t+=v(n.borderBottomWidth),t}function be(e){let t=e.clientWidth,n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=v(n.borderLeftWidth),t+=v(n.borderRightWidth),t}function xe(e){let t=e.clientHeight,n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=v(n.paddingTop),t-=v(n.paddingBottom),t}function Se(e){let t=e.clientWidth,n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=v(n.paddingLeft),t-=v(n.paddingRight),t}function T(e,t,n){let r=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect();return{x:(e.clientX+t.scrollLeft-r.left)/n,y:(e.clientY+t.scrollTop-r.top)/n}}function Ce(e,t){let n=we(e,t,`px`);return{[b(`transform`,Be)]:n}}function E(e,t){return we(e,t,``)}function we({x:e,y:t},n,r){let i=`translate(${e}${r},${t}${r})`;return n&&(i=`translate(${`${typeof n.x==`string`?n.x:n.x+r}`}, ${`${typeof n.y==`string`?n.y:n.y+r}`})`+i),i}function Te(e,t){return e.targetTouches&&g(e.targetTouches,e=>t===e.identifier)||e.changedTouches&&g(e.changedTouches,e=>t===e.identifier)}function Ee(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier}function De(){return typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}function D(e,t){if(!e)return;let n=e.getElementById(`react-draggable-style-el`);if(!n){n=e.createElement(`style`),n.type=`text/css`,n.id=`react-draggable-style-el`;let r=t??De();r&&n.setAttribute(`nonce`,r),n.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,n.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,e.getElementsByTagName(`head`)[0].appendChild(n)}e.body&&Oe(e.body,`react-draggable-transparent-selection`)}function O(e){window.requestAnimationFrame?window.requestAnimationFrame(()=>{k(e)}):k(e)}function k(e){if(e)try{e.body&&ke(e.body,`react-draggable-transparent-selection`);let t=e.selection;if(t)t.empty();else{let t=(e.defaultView||window).getSelection();t&&t.type!==`Caret`&&t.removeAllRanges()}}catch{}}function Oe(e,t){e.classList?e.classList.add(t):e.className.match(RegExp(`(?:^|\\s)${t}(?!\\S)`))||(e.className+=` ${t}`)}function ke(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(RegExp(`(?:^|\\s)${t}(?!\\S)`,`g`),``)}function Ae(e,t,n){if(!e.props.bounds)return[t,n];let{bounds:r}=e.props;r=typeof r==`string`?r:Ie(r);let i=Le(e);if(typeof r==`string`){let{ownerDocument:e}=i,t=e.defaultView;if(!t)throw Error(`Cannot resolve the owner window of the draggable node.`);let n;if(n=r===`parent`?i.parentNode:i.getRootNode().querySelector(r),!(n instanceof t.HTMLElement))throw Error(`Bounds selector "`+r+`" could not find an element.`);let a=n,o=t.getComputedStyle(i),s=t.getComputedStyle(a);r={left:-i.offsetLeft+v(s.paddingLeft)+v(o.marginLeft),top:-i.offsetTop+v(s.paddingTop)+v(o.marginTop),right:Se(a)-be(i)-i.offsetLeft+v(s.paddingRight)-v(o.marginRight),bottom:xe(a)-ye(i)-i.offsetTop+v(s.paddingBottom)-v(o.marginBottom)}}return _(r.right)&&(t=Math.min(t,r.right)),_(r.bottom)&&(n=Math.min(n,r.bottom)),_(r.left)&&(t=Math.max(t,r.left)),_(r.top)&&(n=Math.max(n,r.top)),[t,n]}function je(e,t,n){return[Math.round(t/e[0])*e[0],Math.round(n/e[1])*e[1]]}function Me(e){return e.props.axis===`both`||e.props.axis===`x`}function Ne(e){return e.props.axis===`both`||e.props.axis===`y`}function Pe(e,t,n){let r=typeof t==`number`?Te(e,t):null;if(typeof t==`number`&&!r)return null;let i=Le(n),a=n.props.offsetParent||i.offsetParent||i.ownerDocument.body;return T(r||e,a,n.props.scale)}function Fe(e,t,n){let r=!_(e.lastX),i=Le(e);return r?{node:i,deltaX:0,deltaY:0,lastX:t,lastY:n,x:t,y:n}:{node:i,deltaX:t-e.lastX,deltaY:n-e.lastY,lastX:e.lastX,lastY:e.lastY,x:t,y:n}}function A(e,t){let n=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/n,y:e.state.y+t.deltaY/n,deltaX:t.deltaX/n,deltaY:t.deltaY/n,lastX:e.state.x,lastY:e.state.y}}function Ie(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}function Le(e){let t=e.findDOMNode();if(!t)throw Error(`<DraggableCore>: Unmounted during event!`);return t}var j,M,Re,N,P,ze,F,Be,I,L,R,z,B,V;function Ve(){return(Ve=t((()=>{j=e(r(),1),M=e(he(),1),Re=e(a(),1),c(),N=e(r(),1),P=e(he(),1),ze=e(a(),1),F=[`Moz`,`Webkit`,`O`,`ms`],Be=_e(),I=``,L=typeof process<`u`&&{}.DRAGGABLE_DEBUG?console.log.bind(console):function(){},R={touch:{start:`touchstart`,move:`touchmove`,stop:`touchend`},mouse:{start:`mousedown`,move:`mousemove`,stop:`mouseup`}},z=R.mouse,B=class extends N.Component{constructor(){super(...arguments),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,this.touchIdentifier=null,this.mounted=!1,this.handleDragStart=e=>{if(this.props.onMouseDown(e),!this.props.allowAnyClick&&(typeof e.button==`number`&&e.button!==0||e.ctrlKey))return!1;let t=this.findDOMNode();if(!t||!t.ownerDocument||!t.ownerDocument.body)throw Error(`<DraggableCore> not mounted on DragStart!`);let{ownerDocument:n}=t;if(this.props.disabled||!(e.target instanceof n.defaultView.Node)||this.props.handle&&!S(e.target,this.props.handle,t)||this.props.cancel&&S(e.target,this.props.cancel,t))return;e.type===`touchstart`&&!this.props.allowMobileScroll&&e.preventDefault();let r=Ee(e);this.touchIdentifier=r;let i=Pe(e,r,this);if(i==null)return;let{x:a,y:o}=i,s=Fe(this,a,o);L(`DraggableCore: handleDragStart: %j`,s),L(`calling`,this.props.onStart),this.props.onStart(e,s)!==!1&&this.mounted!==!1&&(this.props.enableUserSelectHack&&D(n,this.props.nonce),this.dragging=!0,this.lastX=a,this.lastY=o,C(n,z.move,this.handleDrag),C(n,z.stop,this.handleDragStop))},this.handleDrag=e=>{let t=Pe(e,this.touchIdentifier,this);if(t==null)return;let{x:n,y:r}=t;if(Array.isArray(this.props.grid)){let e=n-this.lastX,t=r-this.lastY;if([e,t]=je(this.props.grid,e,t),!e&&!t)return;n=this.lastX+e,r=this.lastY+t}let i=Fe(this,n,r);if(L(`DraggableCore: handleDrag: %j`,i),this.props.onDrag(e,i)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent(`mouseup`))}catch{let e=document.createEvent(`MouseEvents`);e.initMouseEvent(`mouseup`,!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(e)}return}this.lastX=n,this.lastY=r},this.handleDragStop=e=>{if(!this.dragging)return;let t=Pe(e,this.touchIdentifier,this);if(t==null)return;let{x:n,y:r}=t;if(Array.isArray(this.props.grid)){let e=n-this.lastX||0,t=r-this.lastY||0;[e,t]=je(this.props.grid,e,t),n=this.lastX+e,r=this.lastY+t}let i=Fe(this,n,r);if(this.props.onStop(e,i)===!1||this.mounted===!1)return!1;let a=this.findDOMNode();a&&this.props.enableUserSelectHack&&O(a.ownerDocument),L(`DraggableCore: handleDragStop: %j`,i),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,a&&(L(`DraggableCore: Removing handlers`),w(a.ownerDocument,z.move,this.handleDrag),w(a.ownerDocument,z.stop,this.handleDragStop))},this.onMouseDown=e=>(z=R.mouse,this.handleDragStart(e)),this.onMouseUp=e=>(z=R.mouse,this.handleDragStop(e)),this.onTouchStart=e=>(z=R.touch,this.handleDragStart(e)),this.onTouchEnd=e=>(z=R.touch,this.handleDragStop(e))}componentDidMount(){this.mounted=!0;let e=this.findDOMNode();e&&C(e,R.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;let e=this.findDOMNode();if(e){let{ownerDocument:t}=e;w(t,R.mouse.move,this.handleDrag),w(t,R.touch.move,this.handleDrag),w(t,R.mouse.stop,this.handleDragStop),w(t,R.touch.stop,this.handleDragStop),w(e,R.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&O(t)}}findDOMNode(){if(this.props?.nodeRef)return this.props.nodeRef.current;let e=ze.default;return typeof e.findDOMNode==`function`?e.findDOMNode(this):(L(`react-draggable: ReactDOM.findDOMNode is not available in React 19+. You must provide a nodeRef prop. See: https://github.com/react-grid-layout/react-draggable#noderef`),null)}render(){return N.cloneElement(N.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}},B.displayName=`DraggableCore`,B.propTypes={allowAnyClick:P.default.bool,allowMobileScroll:P.default.bool,children:P.default.node.isRequired,disabled:P.default.bool,enableUserSelectHack:P.default.bool,offsetParent:function(e,t){if(e[t]&&e[t].nodeType!==1)throw Error(`Draggable's offsetParent must be a DOM Node.`)},grid:P.default.arrayOf(P.default.number),handle:P.default.string,cancel:P.default.string,nodeRef:P.default.object,nonce:P.default.string,onStart:P.default.func,onDrag:P.default.func,onStop:P.default.func,onMouseDown:P.default.func,scale:P.default.number,className:y,style:y,transform:y},B.defaultProps={allowAnyClick:!1,allowMobileScroll:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1},V=class extends j.Component{constructor(e){super(e),this.onDragStart=(e,t)=>{if(L(`Draggable: onDragStart: %j`,t),this.props.onStart(e,A(this,t))===!1)return!1;this.setState({dragging:!0,dragged:!0})},this.onDrag=(e,t)=>{if(!this.state.dragging)return!1;L(`Draggable: onDrag: %j`,t);let n=A(this,t),r={x:n.x,y:n.y,slackX:0,slackY:0};if(this.props.bounds){let{x:e,y:t}=r;r.x+=this.state.slackX,r.y+=this.state.slackY;let[i,a]=Ae(this,r.x,r.y);r.x=i,r.y=a,r.slackX=this.state.slackX+(e-r.x),r.slackY=this.state.slackY+(t-r.y),n.x=r.x,n.y=r.y,n.deltaX=r.x-this.state.x,n.deltaY=r.y-this.state.y}if(this.props.onDrag(e,n)===!1)return!1;this.setState(r)},this.onDragStop=(e,t)=>{if(!this.state.dragging||this.props.onStop(e,A(this,t))===!1)return!1;L(`Draggable: onDragStop: %j`,t);let n={dragging:!1,slackX:0,slackY:0};if(this.props.position){let{x:e,y:t}=this.props.position;n.x=e,n.y=t}this.setState(n)},this.state={dragging:!1,dragged:!1,x:e.position?e.position.x:e.defaultPosition.x,y:e.position?e.position.y:e.defaultPosition.y,prevPropsPosition:{...e.position},slackX:0,slackY:0,isElementSVG:!1},e.position&&!(e.onDrag||e.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}static getDerivedStateFromProps({position:e},{prevPropsPosition:t}){return e&&(!t||e.x!==t.x||e.y!==t.y)?(L(`Draggable: getDerivedStateFromProps %j`,{position:e,prevPropsPosition:t}),{x:e.x,y:e.y,prevPropsPosition:{...e}}):null}componentDidMount(){window.SVGElement!==void 0&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.state.dragging&&this.setState({dragging:!1})}findDOMNode(){if(this.props?.nodeRef)return this.props.nodeRef.current;let e=Re.default;return typeof e.findDOMNode==`function`?e.findDOMNode(this):null}render(){let{axis:e,bounds:t,children:n,defaultPosition:r,defaultClassName:i,defaultClassNameDragging:a,defaultClassNameDragged:o,position:c,positionOffset:l,scale:u,...d}=this.props,f={},p=null,ee=!c||this.state.dragging,m=c||r,te={x:Me(this)&&ee?this.state.x:m.x,y:Ne(this)&&ee?this.state.y:m.y};this.state.isElementSVG?p=E(te,l):f=Ce(te,l);let ne=j.Children.only(n),re=s(ne.props.className||``,i,{[a]:this.state.dragging,[o]:this.state.dragged});return j.createElement(B,{...d,onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop},j.cloneElement(ne,{className:re,style:{...ne.props.style,...f},transform:p}))}},V.displayName=`Draggable`,V.propTypes={...B.propTypes,axis:M.default.oneOf([`both`,`x`,`y`,`none`]),bounds:M.default.oneOfType([M.default.shape({left:M.default.number,right:M.default.number,top:M.default.number,bottom:M.default.number}),M.default.string,M.default.oneOf([!1])]),defaultClassName:M.default.string,defaultClassNameDragging:M.default.string,defaultClassNameDragged:M.default.string,defaultPosition:M.default.shape({x:M.default.number,y:M.default.number}),positionOffset:M.default.shape({x:M.default.oneOfType([M.default.number,M.default.string]),y:M.default.oneOfType([M.default.number,M.default.string])}),position:M.default.shape({x:M.default.number,y:M.default.number}),className:y,style:y,transform:y},V.defaultProps={...B.defaultProps,axis:`both`,bounds:!1,defaultClassName:`react-draggable`,defaultClassNameDragging:`react-draggable-dragging`,defaultClassNameDragged:`react-draggable-dragged`,defaultPosition:{x:0,y:0},scale:1}})))()}var He;function Ue(){return(Ue=t((()=>{Ve(),He=V})))()}function We(){return $e+=1,$e}function Ge(e){let t=(0,U.useRef)(e);return(0,U.useEffect)(()=>{t.current=e},[e]),t}function Ke(e,t){if(typeof e==`number`)return Number.isFinite(e)?e:t;if(typeof e==`string`){let n=Number.parseFloat(e);return Number.isFinite(n)?n:t}return t}function qe(e){return{width:e?.clientWidth??globalThis.innerWidth,height:e?.clientHeight??globalThis.innerHeight}}function Je(e,t,n,r,i,a){let o=globalThis.self,s=h(o),[c,l]=oe(o),u=(o.screenX??o.screenLeft??0)+c,d=(o.screenY??o.screenTop??0)+l;try{let e=o.top??o;s=h(e),[c,l]=oe(e),u=(e.screenX??e.screenLeft??0)+c,d=(e.screenY??e.screenTop??0)+l;let t=o;for(;t!==e&&t.parent&&t!==t.parent;){let e=t.frameElement;if(e&&typeof e.getBoundingClientRect==`function`){let t=e.getBoundingClientRect();u+=t.left*s,d+=t.top*s}t=t.parent}}catch{}let f=s>0?s:1,p=Math.max(n-i,0),ee=Math.max(r-a,0),m=Math.min(Math.max(0,(e-u)/f),p),te=Math.min(Math.max(0,(t-d)/f),ee);return{x:Math.round(m),y:Math.round(te)}}function Ye(e,t,n,r,i){let a=e===`left`||e===`topLeft`||e===`bottomLeft`,o=e===`right`||e===`topRight`||e===`bottomRight`,s=e===`top`||e===`topLeft`||e===`topRight`,c=e===`bottom`||e===`bottomLeft`||e===`bottomRight`,l=a?Math.min(Math.max(0,t.startX-n.width),t.startX+t.startWidth-i.width):t.startX,u=s?Math.min(Math.max(0,t.startY-n.height),t.startY+t.startHeight-i.height):t.startY,d=t.startWidth;if(o){let e=Math.max(r.width-t.startX,i.width);d=Math.min(Math.max(t.startWidth+n.width,i.width),e)}let f=t.startHeight;if(c){let e=Math.max(r.height-t.startY,i.height);f=Math.min(Math.max(t.startHeight+n.height,i.height),e)}return{nextX:Math.round(l),nextY:Math.round(u),currentW:Math.round(d),currentH:Math.round(f),isRight:o,isBottom:c}}function Xe(e,t,n,r,i){let a=e===`left`||e===`topLeft`||e===`bottomLeft`,o=e===`top`||e===`topLeft`||e===`topRight`,s=t.startX,c=t.startWidth+n.width;if(a){let e=t.startX+t.startWidth;s=Math.min(Math.max(0,t.startX-n.width),e-i.width),c=e-s}else{let e=Math.max(r.width-s,i.width);c=Math.min(Math.max(c,i.width),e)}let l=t.startY,u=t.startHeight+n.height;if(o){let e=t.startY+t.startHeight;l=Math.min(Math.max(0,t.startY-n.height),e-i.height),u=e-l}else{let e=Math.max(r.height-l,i.height);u=Math.min(Math.max(u,i.height),e)}return{x:Math.round(s),y:Math.round(l),width:Math.round(c),height:Math.round(u)}}function H({title:e=`대화상자`,onClose:t,onBeforeClose:n,children:r,loading:i=!1,hasBackdrop:a=!1,backdropColor:o,minWidth:s=240,minHeight:c=160,resizable:u=!1,resizeHandleClasses:f,allowPopout:p=!0,noTitle:m=!1,usePortal:re=!1,className:ie,bodyClassName:oe,isPoppedOut:h,onPopoutChange:ce,onResizeStart:de,onResize:pe,onResizeStop:me,left:he,top:g,width:ge=640,height:_=480,ref:v,...y}){let _e=(0,U.useId)(),b=(0,U.useRef)(null),ve=ne(b,v),x=(0,U.useRef)(null),S=(0,U.useRef)(null),C=(0,U.useRef)(null),[w,ye]=(0,U.useState)(!1),be=h??w,[xe,Se]=(0,U.useState)(null),[T,Ce]=(0,U.useState)(ge),[E,we]=(0,U.useState)(_),Te=Ke(s,240),Ee=Ke(c,160),De=(0,U.useMemo)(()=>({...Qe,...f}),[f]),[D,O]=(0,U.useState)(()=>{let e=typeof globalThis.innerWidth==`number`?globalThis.innerWidth:1024,t=typeof globalThis.innerHeight==`number`?globalThis.innerHeight:768;return{x:he??Math.max(Math.floor((e-ge)/2),0),y:g??Math.max(Math.floor((t-_)/2),0)}}),k=Ge(D),Oe=(0,U.useRef)({startX:0,startY:0,startWidth:0,startHeight:0}),[ke,Ae]=(0,U.useState)({top:0,right:0,bottom:0,left:0}),[je,Me]=(0,U.useState)(),[Ne,Pe]=(0,U.useState)(),Fe=(0,U.useMemo)(()=>({top:u,bottom:u,left:u,right:u,bottomRight:u,topLeft:!1,topRight:!1,bottomLeft:!1}),[u]),A=(0,U.useCallback)(()=>{let{width:e,height:t}=qe(x.current);Ae({left:0,top:0,right:Math.max(e-T,0),bottom:Math.max(t-E,0)}),Me(e-20),Pe(t-20)},[T,E]);(0,U.useEffect)(()=>(A(),globalThis.addEventListener(`resize`,A),()=>globalThis.removeEventListener(`resize`,A)),[A]);let Ie=(0,U.useCallback)(()=>{b.current&&(b.current.style.zIndex=String(We()))},[]);(0,U.useEffect)(()=>{be||Ie()},[be,Ie]);let Le=(0,U.useCallback)(e=>{S.current=e?.resizable??null},[]),j=(e,t)=>{O({x:Math.floor(t.x),y:Math.floor(t.y)})},M=()=>{Oe.current={startX:D.x,startY:D.y,startWidth:T,startHeight:E},de?.()},Re=(e,t,n,r)=>{let i=Ye(t,Oe.current,r,qe(x.current),{width:Te,height:Ee});i.isRight&&(n.style.width=`${i.currentW}px`),i.isBottom&&(n.style.height=`${i.currentH}px`),C.current&&(C.current.style.transform=`translate(${i.nextX}px, ${i.nextY}px)`),pe?.(i.currentW,i.currentH)},N=(e,t,n,r)=>{let i=Xe(t,Oe.current,r,qe(x.current),{width:Te,height:Ee});O({x:i.x,y:i.y}),Ce(i.width),we(i.height),me?.(i.width,i.height)},P=(0,U.useCallback)(()=>{(!n||n())&&t?.({left:k.current.x,top:k.current.y,width:T,height:E,zIndex:b.current?.style.zIndex||`100`})},[E,n,t,k,T]);(0,U.useEffect)(()=>{if(!a)return;let e=e=>{e.key===`Escape`&&P()};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[a,P]);let ze=()=>{let e,t,n,r;if(S.current){let i=se(S.current),[a,o]=le();e=Math.round(i.left-o),t=Math.round(i.top-a),n=Math.round(i.width),r=Math.round(i.height)}let i={left:e??globalThis.screenLeft,top:t??globalThis.screenTop,width:Math.max(n??T,240),height:Math.max(r??E,160)};Se(i),h===void 0&&ye(!0),ce?.(!0)},F=(e,t)=>{if(e)return;let{width:n,height:r}=qe(x.current),i=Math.min(Math.max(t.width,Te),n),a=Math.min(Math.max(t.height,Ee),r),[o,s]=le(),c=Je(t.left+s,t.top+o,n,r,i,a);Ce(i),we(a),O(c),h===void 0&&ye(!1),ce?.(!1)},Be=()=>(0,W.jsx)(`div`,{ref:C,className:l(`pointer-events-auto absolute`,m&&`top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`),children:(0,W.jsx)(fe,{ref:Le,bounds:`window`,size:{width:T,height:E},enable:Fe,minWidth:s,maxWidth:je,minHeight:c,maxHeight:Ne,handleClasses:De,boundsByDirection:!0,role:`dialog`,"aria-modal":a,"aria-labelledby":m?void 0:_e,...y,className:l(`areo-dialog-root box-border flex flex-col bg-white shadow-md outline-none`,ie),onResizeStart:M,onResize:Re,onResizeStop:N,children:(0,W.jsxs)(`div`,{className:`flex size-full flex-col`,onContextMenu:e=>e.preventDefault(),children:[!m&&(0,W.jsxs)(`div`,{className:`areo-dialog-handle box-border flex h-7.5 w-full flex-none cursor-move items-center justify-between border border-widget-head-border bg-widget-head-background pr-1.5 pl-3 text-widget-head-foreground select-none`,children:[(0,W.jsx)(`div`,{className:`pointer-events-none min-w-0 grow overflow-hidden`,children:(0,W.jsx)(`span`,{id:_e,className:`block truncate text-xs font-bold tracking-tight text-white`,children:e})}),(0,W.jsxs)(`div`,{className:`flex shrink-0 items-center gap-0.5`,children:[p&&(0,W.jsx)(d,{variant:`ghost`,iconOnly:!0,size:`sm`,title:`새 창에서 보기`,"aria-label":`새 창에서 보기`,onClick:ze,className:`size-6 min-w-6 p-0 text-white/80 hover:bg-white/10 hover:text-white`,children:(0,W.jsx)(te,{width:16,height:16,fill:`currentColor`})}),(0,W.jsx)(d,{variant:`ghost`,iconOnly:!0,size:`sm`,title:`닫기`,"aria-label":`닫기`,onClick:P,className:`size-6 min-w-6 p-0 text-white/80 hover:bg-white/10 hover:text-white`,children:(0,W.jsx)(ee,{width:16,height:16,fill:`currentColor`})})]})]}),(0,W.jsxs)(`div`,{className:l(`relative flex flex-auto flex-col overflow-auto border border-widget-body-border bg-widget-body-background p-3 text-xs text-widget-body-foreground`,oe),children:[r,i&&(0,W.jsx)(`div`,{className:`absolute inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-[1px]`,children:(0,W.jsx)(ae,{size:`md`})})]})]})})});if(p&&be){let t=xe??{left:globalThis.screenLeft,top:globalThis.screenTop,width:Math.max(T,240),height:Math.max(E,160)};return(0,W.jsx)(ue,{title:e,onUnload:F,features:t,children:(0,W.jsxs)(`div`,{className:l(`relative box-border flex size-full flex-col overflow-auto bg-widget-body-background p-3 font-sans text-xs text-widget-body-foreground`,oe),children:[r,i&&(0,W.jsx)(`div`,{className:`absolute inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-[1px]`,children:(0,W.jsx)(ae,{size:`md`})})]})})}let I=(0,W.jsxs)(`div`,{ref:ve,onMouseDownCapture:Ie,className:`areo-dialog-wrapper pointer-events-none fixed inset-0 overflow-hidden`,children:[a&&(0,W.jsx)(`button`,{type:`button`,tabIndex:-1,"aria-label":`대화상자 닫기`,style:o?{background:o}:void 0,className:`pointer-events-auto fixed inset-0 m-0 border-none bg-black/40 p-0 backdrop-blur-xs transition-opacity outline-none`,onClick:P}),(0,W.jsx)(`div`,{ref:x,className:`areo-dialog-container pointer-events-none absolute inset-0 overflow-hidden`,children:m?Be():(0,W.jsx)(He,{nodeRef:C,scale:1,handle:`.areo-dialog-handle`,bounds:ke,position:D,onDrag:j,children:Be()})})]});if(re){if(typeof document>`u`)return null;let e=document.querySelector(`#areoDialogRoot`)??document.body;return(0,Ze.createPortal)(I,e)}return I}var U,Ze,W,G,Qe,$e;function et(){return(et=t((()=>{U=r(),Ze=a(),Ue(),re(),o(),u(),ie(),m(),de(),ce(),W=i(),G=`z-30 transition-colors hover:bg-resizable-background/20 active:bg-resizable-background/30`,Qe={top:G,bottom:G,left:G,right:G,topRight:G,bottomRight:G,bottomLeft:G,topLeft:G},$e=100,H.__docgenInfo={description:``,methods:[],displayName:`Dialog`,props:{title:{defaultValue:{value:`'대화상자'`,computed:!1},required:!1},loading:{defaultValue:{value:`false`,computed:!1},required:!1},hasBackdrop:{defaultValue:{value:`false`,computed:!1},required:!1},minWidth:{defaultValue:{value:`240`,computed:!1},required:!1},minHeight:{defaultValue:{value:`160`,computed:!1},required:!1},resizable:{defaultValue:{value:`false`,computed:!1},required:!1},allowPopout:{defaultValue:{value:`true`,computed:!1},required:!1},noTitle:{defaultValue:{value:`false`,computed:!1},required:!1},usePortal:{defaultValue:{value:`false`,computed:!1},required:!1},width:{defaultValue:{value:`640`,computed:!1},required:!1},height:{defaultValue:{value:`480`,computed:!1},required:!1}}}})))()}var K,q,tt,nt,J,Y,X,Z,Q,$,rt;function it(){return(it=t((()=>{K=r(),u(),et(),p(),q=i(),tt={title:`Components/Dialog`,component:H,parameters:{layout:`fullscreen`},tags:[`autodocs`],args:{title:`대화상자`,width:500,height:360,minWidth:240,minHeight:160,resizable:!1,hasBackdrop:!1,loading:!1,allowPopout:!0,noTitle:!1,usePortal:!1,onClose:e=>{console.log(`Dialog closed with state:`,e)},onBeforeClose:()=>!0,onResizeStart:()=>{},onResize:(e,t)=>{console.log(`Resizing:`,e,t)},onResizeStop:(e,t)=>{console.log(`Resize stopped:`,e,t)},onPopoutChange:e=>{console.log(`Popout changed:`,e)}},argTypes:{title:{control:`text`,description:`대화상자 상단 헤더에 표시될 제목 문자열`},width:{control:{type:`range`,min:300,max:1200,step:20},description:`대화상자의 초기 너비 (px 단위)`},height:{control:{type:`range`,min:200,max:900,step:20},description:`대화상자의 초기 높이 (px 단위)`},minWidth:{control:{type:`number`},description:`리사이징 가능한 최소 너비 (기본값: 240px)`},minHeight:{control:{type:`number`},description:`리사이징 가능한 최소 높이 (기본값: 160px)`},left:{control:`number`,description:`초기 X 좌표 (미지정 시 화면 가로 중앙 배치)`},top:{control:`number`,description:`초기 Y 좌표 (미지정 시 화면 세로 중앙 배치)`},resizable:{control:`boolean`,description:`테두리 및 모서리 드래그 리사이징 활성화 여부`},allowPopout:{control:`boolean`,description:`우측 상단 독립 브라우저 창 분리(Pop-out) 버튼 제공 여부`},isPoppedOut:{control:`boolean`,description:`외부 제어용 팝아웃 상태`},hasBackdrop:{control:`boolean`,description:`배경 딤(Backdrop) 오버레이 활성화 및 모달 모드 여부`},backdropColor:{control:`color`,description:`배경 딤 커스텀 색상`},loading:{control:`boolean`,description:`비동기 작업 시 로딩 스피너 오버레이 표시 여부`},noTitle:{control:`boolean`,description:`헤더 바 숨김 여부 (헤더 숨김 시 중앙 고정)`},usePortal:{control:`boolean`,description:`"#areoDialogRoot" 또는 document.body로 포털 렌더링 여부`},onClose:{action:`closed`,description:`닫기 버튼 클릭 또는 ESC 입력 시 최종 위치/크기/z-index 정보와 함께 호출`},onBeforeClose:{description:`닫히기 직전 검증 콜백 (false 반환 시 닫기 취소)`},onResizeStart:{action:`resizeStart`,description:`리사이징 드래그 시작 시 호출`},onResize:{action:`resizing`,description:`리사이징 드래그 도중 너비/높이와 함께 호출`},onResizeStop:{action:`resizeStop`,description:`리사이징 드래그 완료 시 최종 크기와 함께 호출`},onPopoutChange:{action:`popoutChange`,description:`새 창 분리 또는 복귀 시 상태 변경 콜백`}}},nt=[{value:`epsg4326`,title:`WGS 84 (EPSG:4326)`},{value:`epsg5179`,title:`Korea 2000 (EPSG:5179)`},{value:`epsg54032`,title:`Azimuthal Equidistant (EPSG:54032)`},{value:`epsg3857`,title:`Web Mercator (EPSG:3857)`}],J={parameters:{docs:{description:{story:`헤더 영역을 드래그하여 자유롭게 이동할 수 있으며, 우측 상단 새 창 버튼을 눌러 독립 브라우저 팝업 창으로 분리 및 본 창으로 복귀할 수 있는 기본 형태입니다.`}}},render:e=>{let[t,n]=(0,K.useState)(!0);return(0,q.jsxs)(`div`,{className:`relative flex h-screen w-screen items-center justify-center bg-neutral-100 p-6`,children:[!t&&(0,q.jsx)(d,{variant:`primary`,onClick:()=>n(!0),children:`다이얼로그 열기`}),t&&(0,q.jsx)(H,{...e,onClose:t=>{e.onClose?.(t),n(!1)},children:(0,q.jsxs)(`div`,{className:`flex h-full flex-col justify-between`,children:[(0,q.jsxs)(`div`,{className:`space-y-2`,children:[(0,q.jsx)(`p`,{className:`font-semibold text-neutral-800`,children:`기본 대화상자 본문`}),(0,q.jsx)(`p`,{className:`text-neutral-600`,children:`상단 헤더 영역을 마우스로 잡고 자유롭게 이동할 수 있으며, 우측 상단 새 창 버튼을 눌러 독립 창으로 분리할 수 있습니다.`}),(0,q.jsxs)(`div`,{className:`relative flex flex-col gap-2 p-2`,children:[`셀렉트`,(0,q.jsx)(f,{size:`md`,items:nt})]})]}),(0,q.jsxs)(`div`,{className:`flex justify-end gap-2 pt-4`,children:[(0,q.jsx)(d,{variant:`secondary`,onClick:()=>n(!1),children:`취소`}),(0,q.jsx)(d,{variant:`primary`,onClick:()=>n(!1),children:`확인`})]})]})})]})},args:{title:`기본 정보`,width:480,height:300}},Y={parameters:{docs:{description:{story:"`resizable={true}` 설정 시 상/하/좌/우 및 우하단 코너 테두리를 드래그하여 실시간 60fps로 대화상자의 크기를 조절할 수 있습니다."}}},render:e=>{let[t,n]=(0,K.useState)(!0);return(0,q.jsxs)(`div`,{className:`relative flex h-screen w-screen items-center justify-center bg-neutral-100 p-6`,children:[!t&&(0,q.jsx)(d,{variant:`primary`,onClick:()=>n(!0),children:`리사이즈 다이얼로그 열기`}),t&&(0,q.jsx)(H,{...e,onClose:t=>{e.onClose?.(t),n(!1)},children:(0,q.jsxs)(`div`,{className:`flex h-full flex-col justify-between`,children:[(0,q.jsxs)(`div`,{className:`space-y-3`,children:[(0,q.jsx)(`p`,{className:`font-medium text-neutral-800`,children:`좌/우/하단 및 모서리 테두리를 드래그하여 크기를 조절해 보세요.`}),(0,q.jsxs)(`div`,{className:`rounded border border-neutral-200 bg-neutral-50 p-2.5 text-[11px] text-neutral-500`,children:[`minWidth: `,String(e.minWidth??300),`px / minHeight:`,` `,String(e.minHeight??200),`px`]})]}),(0,q.jsx)(`div`,{className:`flex justify-end pt-4`,children:(0,q.jsx)(d,{variant:`primary`,onClick:()=>n(!1),children:`완료`})})]})})]})},args:{title:`레이어 속성 설정 (Resizable)`,width:560,height:380,resizable:!0,minWidth:320,minHeight:220}},X={parameters:{docs:{description:{story:"`hasBackdrop={true}` 설정 시 반투명 배경 딤이 추가되어 모달(Modal) 형태로 동작하며, 배경 클릭 및 ESC 키 입력 시 대화상자가 닫힙니다."}}},render:e=>{let[t,n]=(0,K.useState)(!0);return(0,q.jsxs)(`div`,{className:`relative flex h-screen w-screen items-center justify-center bg-neutral-200 p-6`,children:[!t&&(0,q.jsx)(d,{variant:`primary`,onClick:()=>n(!0),children:`모달 다이얼로그 열기`}),t&&(0,q.jsx)(H,{...e,onClose:t=>{e.onClose?.(t),n(!1)},children:(0,q.jsxs)(`div`,{className:`flex h-full flex-col justify-between`,children:[(0,q.jsxs)(`p`,{className:`text-neutral-700`,children:[`어두운 배경 영역을 클릭하거나`,` `,(0,q.jsx)(`kbd`,{className:`rounded border bg-neutral-100 px-1 py-0.5 font-mono text-[11px]`,children:`ESC`}),` `,`키를 누르면 닫힙니다.`]}),(0,q.jsx)(`div`,{className:`flex justify-end gap-2 pt-4`,children:(0,q.jsx)(d,{variant:`secondary`,onClick:()=>n(!1),children:`닫기`})})]})})]})},args:{title:`작업 확인`,width:440,height:220,hasBackdrop:!0}},Z={parameters:{docs:{description:{story:"`loading={true}` 설정 시 대화상자 본문 위에 반투명 블러 오버레이와 회전 스피너(`CircularProgress`)가 표시되어 데이터 처리 상태를 나타냅니다."}}},render:e=>{let[t,n]=(0,K.useState)(!0);return(0,q.jsx)(`div`,{className:`relative flex h-screen w-screen items-center justify-center bg-neutral-100 p-6`,children:(0,q.jsx)(H,{...e,loading:t,children:(0,q.jsxs)(`div`,{className:`flex h-full flex-col justify-between`,children:[(0,q.jsx)(`p`,{className:`text-neutral-700`,children:`데이터 처리 중입니다. 로딩 스피너 오버레이가 표시됩니다.`}),(0,q.jsx)(`div`,{className:`flex justify-center pt-4`,children:(0,q.jsx)(d,{variant:`secondary`,size:`sm`,onClick:()=>n(e=>!e),children:t?`로딩 끄기`:`로딩 켜기`})})]})})})},args:{title:`데이터 로딩 중`,width:420,height:240,loading:!0}},Q={parameters:{docs:{description:{story:`여러 개의 비모달(Non-modal) 대화상자가 열려 있을 때, 클릭한 대화상자가 자동으로 최상단 z-index로 승격(bringToFront)되는 멀티 윈도우 스택 관리 기능입니다.`}}},render:()=>{let[e,t]=(0,K.useState)([{id:1,title:`대화상자 #1`,left:80,top:80},{id:2,title:`대화상자 #2`,left:160,top:140}]),[n,r]=(0,K.useState)(3),i=()=>{let i=e.length%8*30,a={id:n,title:`대화상자 #${n}`,left:100+i,top:100+i};t(e=>[...e,a]),r(e=>e+1)},a=e=>{t(t=>t.filter(t=>t.id!==e))};return(0,q.jsxs)(`div`,{className:`relative h-screen w-screen overflow-hidden bg-neutral-100 p-6`,children:[(0,q.jsx)(`div`,{className:`fixed top-4 left-4 z-9999`,children:(0,q.jsx)(d,{variant:`primary`,onClick:i,children:`+ 새 다이얼로그 추가`})}),e.map(e=>(0,q.jsx)(H,{title:e.title,left:e.left,top:e.top,width:400,height:260,resizable:!0,onClose:()=>a(e.id),children:(0,q.jsxs)(`div`,{className:`flex h-full flex-col justify-between`,children:[(0,q.jsxs)(`div`,{className:`space-y-1.5`,children:[(0,q.jsxs)(`p`,{className:`font-semibold text-neutral-800`,children:[e.title,` (ID: `,e.id,`)`]}),(0,q.jsxs)(`p`,{className:`text-neutral-600`,children:[`- 새로 열린 창은 즉시 최상단 Z-Index로 배치됩니다.`,(0,q.jsx)(`br`,{}),`- 대화상자를 클릭하면 해당 창이 즉시 맨 앞으로 전환됩니다.`]})]}),(0,q.jsx)(`div`,{className:`flex justify-end pt-2`,children:(0,q.jsx)(d,{variant:`secondary`,size:`sm`,onClick:()=>a(e.id),children:`닫기`})})]})},e.id))]})}},$={parameters:{docs:{description:{story:"`isPoppedOut`과 `onPopoutChange` props를 상위 상태와 바인딩하여 툴바 등 대화상자 외부의 UI에서도 독립 창 분리 및 복귀를 제어하는 패턴입니다."}}},render:e=>{let[t,n]=(0,K.useState)(!1);return(0,q.jsxs)(`div`,{className:`relative flex h-screen w-screen flex-col items-center justify-center bg-neutral-100 p-6`,children:[(0,q.jsx)(`div`,{className:`mb-4 flex items-center gap-2`,children:(0,q.jsx)(d,{variant:`secondary`,onClick:()=>n(e=>!e),children:t?`본 화면으로 다이얼로그 복귀`:`외부 버튼으로 새 창 분리`})}),(0,q.jsx)(H,{...e,isPoppedOut:t,onPopoutChange:n,children:(0,q.jsxs)(`div`,{className:`flex h-full flex-col justify-between`,children:[(0,q.jsxs)(`div`,{className:`space-y-2`,children:[(0,q.jsx)(`p`,{className:`font-semibold text-neutral-800`,children:`외부 제어형 팝아웃 다이얼로그`}),(0,q.jsxs)(`p`,{className:`text-neutral-600`,children:[`상단 외부 버튼과 다이얼로그 자체 헤더의 새 창 분리 버튼이 동일한 상태(`,(0,q.jsxs)(`code`,{children:[`isPoppedOut: `,String(t)]}),`)로 동기화됩니다.`]})]}),(0,q.jsx)(`div`,{className:`flex justify-end pt-4`,children:(0,q.jsx)(d,{variant:`primary`,onClick:()=>n(!1),children:`닫기 / 복귀`})})]})})]})},args:{title:`제어형 다이얼로그`,width:460,height:280,allowPopout:!0}},rt=[`Default`,`Resizable`,`WithBackdrop`,`Loading`,`StackedDialogs`,`ControlledPopout`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`외부 제어형 팝아웃 (Controlled isPoppedOut)`,...$.parameters?.docs?.description}}}})))()}it();export{$ as ControlledPopout,J as Default,Z as Loading,Y as Resizable,Q as StackedDialogs,X as WithBackdrop,rt as __namedExportsOrder,tt as default};