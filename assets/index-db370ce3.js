(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function bv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ff={exports:{}},Co={},pf={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Li=Symbol.for("react.element"),qv=Symbol.for("react.portal"),Xv=Symbol.for("react.fragment"),Qv=Symbol.for("react.strict_mode"),Yv=Symbol.for("react.profiler"),Jv=Symbol.for("react.provider"),Zv=Symbol.for("react.context"),ey=Symbol.for("react.forward_ref"),ty=Symbol.for("react.suspense"),ny=Symbol.for("react.memo"),ry=Symbol.for("react.lazy"),nh=Symbol.iterator;function iy(e){return e===null||typeof e!="object"?null:(e=nh&&e[nh]||e["@@iterator"],typeof e=="function"?e:null)}var gf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mf=Object.assign,vf={};function Er(e,t,n){this.props=e,this.context=t,this.refs=vf,this.updater=n||gf}Er.prototype.isReactComponent={};Er.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Er.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function yf(){}yf.prototype=Er.prototype;function vu(e,t,n){this.props=e,this.context=t,this.refs=vf,this.updater=n||gf}var yu=vu.prototype=new yf;yu.constructor=vu;mf(yu,Er.prototype);yu.isPureReactComponent=!0;var rh=Array.isArray,wf=Object.prototype.hasOwnProperty,wu={current:null},_f={key:!0,ref:!0,__self:!0,__source:!0};function Ef(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)wf.call(t,r)&&!_f.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Li,type:e,key:s,ref:o,props:i,_owner:wu.current}}function sy(e,t){return{$$typeof:Li,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function _u(e){return typeof e=="object"&&e!==null&&e.$$typeof===Li}function oy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ih=/\/+/g;function dl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?oy(""+e.key):t.toString(36)}function Ss(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Li:case qv:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+dl(o,0):r,rh(i)?(n="",e!=null&&(n=e.replace(ih,"$&/")+"/"),Ss(i,t,n,"",function(u){return u})):i!=null&&(_u(i)&&(i=sy(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ih,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",rh(e))for(var l=0;l<e.length;l++){s=e[l];var a=r+dl(s,l);o+=Ss(s,t,n,a,i)}else if(a=iy(e),typeof a=="function")for(e=a.call(e),l=0;!(s=e.next()).done;)s=s.value,a=r+dl(s,l++),o+=Ss(s,t,n,a,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ts(e,t,n){if(e==null)return e;var r=[],i=0;return Ss(e,r,"","",function(s){return t.call(n,s,i++)}),r}function ly(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},Ts={transition:null},ay={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:Ts,ReactCurrentOwner:wu};L.Children={map:ts,forEach:function(e,t,n){ts(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ts(e,function(){t++}),t},toArray:function(e){return ts(e,function(t){return t})||[]},only:function(e){if(!_u(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=Er;L.Fragment=Xv;L.Profiler=Yv;L.PureComponent=vu;L.StrictMode=Qv;L.Suspense=ty;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ay;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=mf({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=wu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)wf.call(t,a)&&!_f.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Li,type:e.type,key:i,ref:s,props:r,_owner:o}};L.createContext=function(e){return e={$$typeof:Zv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Jv,_context:e},e.Consumer=e};L.createElement=Ef;L.createFactory=function(e){var t=Ef.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:ey,render:e}};L.isValidElement=_u;L.lazy=function(e){return{$$typeof:ry,_payload:{_status:-1,_result:e},_init:ly}};L.memo=function(e,t){return{$$typeof:ny,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Ts.transition;Ts.transition={};try{e()}finally{Ts.transition=t}};L.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};L.useCallback=function(e,t){return Ce.current.useCallback(e,t)};L.useContext=function(e){return Ce.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};L.useEffect=function(e,t){return Ce.current.useEffect(e,t)};L.useId=function(){return Ce.current.useId()};L.useImperativeHandle=function(e,t,n){return Ce.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return Ce.current.useMemo(e,t)};L.useReducer=function(e,t,n){return Ce.current.useReducer(e,t,n)};L.useRef=function(e){return Ce.current.useRef(e)};L.useState=function(e){return Ce.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return Ce.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return Ce.current.useTransition()};L.version="18.2.0";pf.exports=L;var Ao=pf.exports;const uy=bv(Ao);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cy=Ao,hy=Symbol.for("react.element"),dy=Symbol.for("react.fragment"),fy=Object.prototype.hasOwnProperty,py=cy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gy={key:!0,ref:!0,__self:!0,__source:!0};function If(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)fy.call(t,r)&&!gy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:hy,type:e,key:s,ref:o,props:i,_owner:py.current}}Co.Fragment=dy;Co.jsx=If;Co.jsxs=If;ff.exports=Co;var Ie=ff.exports,ra={},Sf={exports:{}},je={},Tf={exports:{}},kf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,N){var O=T.length;T.push(N);e:for(;0<O;){var Q=O-1>>>1,ne=T[Q];if(0<i(ne,N))T[Q]=N,T[O]=ne,O=Q;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var N=T[0],O=T.pop();if(O!==N){T[0]=O;e:for(var Q=0,ne=T.length,Zi=ne>>>1;Q<Zi;){var dn=2*(Q+1)-1,hl=T[dn],fn=dn+1,es=T[fn];if(0>i(hl,O))fn<ne&&0>i(es,hl)?(T[Q]=es,T[fn]=O,Q=fn):(T[Q]=hl,T[dn]=O,Q=dn);else if(fn<ne&&0>i(es,O))T[Q]=es,T[fn]=O,Q=fn;else break e}}return N}function i(T,N){var O=T.sortIndex-N.sortIndex;return O!==0?O:T.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var a=[],u=[],h=1,p=null,g=3,m=!1,w=!1,_=!1,j=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(T){for(var N=n(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=T)r(u),N.sortIndex=N.expirationTime,t(a,N);else break;N=n(u)}}function v(T){if(_=!1,f(T),!w)if(n(a)!==null)w=!0,ul(I);else{var N=n(u);N!==null&&cl(v,N.startTime-T)}}function I(T,N){w=!1,_&&(_=!1,d(A),A=-1),m=!0;var O=g;try{for(f(N),p=n(a);p!==null&&(!(p.expirationTime>N)||T&&!Ye());){var Q=p.callback;if(typeof Q=="function"){p.callback=null,g=p.priorityLevel;var ne=Q(p.expirationTime<=N);N=e.unstable_now(),typeof ne=="function"?p.callback=ne:p===n(a)&&r(a),f(N)}else r(a);p=n(a)}if(p!==null)var Zi=!0;else{var dn=n(u);dn!==null&&cl(v,dn.startTime-N),Zi=!1}return Zi}finally{p=null,g=O,m=!1}}var k=!1,C=null,A=-1,B=5,D=-1;function Ye(){return!(e.unstable_now()-D<B)}function Pr(){if(C!==null){var T=e.unstable_now();D=T;var N=!0;try{N=C(!0,T)}finally{N?Rr():(k=!1,C=null)}}else k=!1}var Rr;if(typeof c=="function")Rr=function(){c(Pr)};else if(typeof MessageChannel<"u"){var th=new MessageChannel,Gv=th.port2;th.port1.onmessage=Pr,Rr=function(){Gv.postMessage(null)}}else Rr=function(){j(Pr,0)};function ul(T){C=T,k||(k=!0,Rr())}function cl(T,N){A=j(function(){T(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){w||m||(w=!0,ul(I))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(T){switch(g){case 1:case 2:case 3:var N=3;break;default:N=g}var O=g;g=N;try{return T()}finally{g=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,N){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var O=g;g=T;try{return N()}finally{g=O}},e.unstable_scheduleCallback=function(T,N,O){var Q=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?Q+O:Q):O=Q,T){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=O+ne,T={id:h++,callback:N,priorityLevel:T,startTime:O,expirationTime:ne,sortIndex:-1},O>Q?(T.sortIndex=O,t(u,T),n(a)===null&&T===n(u)&&(_?(d(A),A=-1):_=!0,cl(v,O-Q))):(T.sortIndex=ne,t(a,T),w||m||(w=!0,ul(I))),T},e.unstable_shouldYield=Ye,e.unstable_wrapCallback=function(T){var N=g;return function(){var O=g;g=N;try{return T.apply(this,arguments)}finally{g=O}}}})(kf);Tf.exports=kf;var my=Tf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cf=Ao,Fe=my;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Af=new Set,ii={};function $n(e,t){dr(e,t),dr(e+"Capture",t)}function dr(e,t){for(ii[e]=t,e=0;e<t.length;e++)Af.add(t[e])}var At=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ia=Object.prototype.hasOwnProperty,vy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sh={},oh={};function yy(e){return ia.call(oh,e)?!0:ia.call(sh,e)?!1:vy.test(e)?oh[e]=!0:(sh[e]=!0,!1)}function wy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _y(e,t,n,r){if(t===null||typeof t>"u"||wy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ae(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new Ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new Ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new Ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new Ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new Ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new Ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Eu=/[\-:]([a-z])/g;function Iu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Eu,Iu);he[t]=new Ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Eu,Iu);he[t]=new Ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Eu,Iu);he[t]=new Ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Su(e,t,n,r){var i=he.hasOwnProperty(t)?he[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_y(t,n,i,r)&&(n=null),r||i===null?yy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var xt=Cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ns=Symbol.for("react.element"),Vn=Symbol.for("react.portal"),Hn=Symbol.for("react.fragment"),Tu=Symbol.for("react.strict_mode"),sa=Symbol.for("react.profiler"),Pf=Symbol.for("react.provider"),Rf=Symbol.for("react.context"),ku=Symbol.for("react.forward_ref"),oa=Symbol.for("react.suspense"),la=Symbol.for("react.suspense_list"),Cu=Symbol.for("react.memo"),Ut=Symbol.for("react.lazy"),Nf=Symbol.for("react.offscreen"),lh=Symbol.iterator;function Nr(e){return e===null||typeof e!="object"?null:(e=lh&&e[lh]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,fl;function zr(e){if(fl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);fl=t&&t[1]||""}return`
`+fl+e}var pl=!1;function gl(e,t){if(!e||pl)return"";pl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=l);break}}}finally{pl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?zr(e):""}function Ey(e){switch(e.tag){case 5:return zr(e.type);case 16:return zr("Lazy");case 13:return zr("Suspense");case 19:return zr("SuspenseList");case 0:case 2:case 15:return e=gl(e.type,!1),e;case 11:return e=gl(e.type.render,!1),e;case 1:return e=gl(e.type,!0),e;default:return""}}function aa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hn:return"Fragment";case Vn:return"Portal";case sa:return"Profiler";case Tu:return"StrictMode";case oa:return"Suspense";case la:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rf:return(e.displayName||"Context")+".Consumer";case Pf:return(e._context.displayName||"Context")+".Provider";case ku:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cu:return t=e.displayName||null,t!==null?t:aa(e.type)||"Memo";case Ut:t=e._payload,e=e._init;try{return aa(e(t))}catch{}}return null}function Iy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return aa(t);case 8:return t===Tu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Of(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Sy(e){var t=Of(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rs(e){e._valueTracker||(e._valueTracker=Sy(e))}function Df(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Of(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function js(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ua(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ah(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=sn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Lf(e,t){t=t.checked,t!=null&&Su(e,"checked",t,!1)}function ca(e,t){Lf(e,t);var n=sn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ha(e,t.type,n):t.hasOwnProperty("defaultValue")&&ha(e,t.type,sn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function uh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ha(e,t,n){(t!=="number"||js(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Br=Array.isArray;function nr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+sn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function da(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ch(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(Br(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:sn(n)}}function xf(e,t){var n=sn(t.value),r=sn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function hh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Mf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Mf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var is,$f=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(is=is||document.createElement("div"),is.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=is.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function si(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ty=["Webkit","ms","Moz","O"];Object.keys(Gr).forEach(function(e){Ty.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Gr[t]=Gr[e]})});function Uf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Gr.hasOwnProperty(e)&&Gr[e]?(""+t).trim():t+"px"}function Ff(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Uf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var ky=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pa(e,t){if(t){if(ky[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function ga(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ma=null;function Au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var va=null,rr=null,ir=null;function dh(e){if(e=$i(e)){if(typeof va!="function")throw Error(y(280));var t=e.stateNode;t&&(t=Do(t),va(e.stateNode,e.type,t))}}function jf(e){rr?ir?ir.push(e):ir=[e]:rr=e}function zf(){if(rr){var e=rr,t=ir;if(ir=rr=null,dh(e),t)for(e=0;e<t.length;e++)dh(t[e])}}function Bf(e,t){return e(t)}function Vf(){}var ml=!1;function Hf(e,t,n){if(ml)return e(t,n);ml=!0;try{return Bf(e,t,n)}finally{ml=!1,(rr!==null||ir!==null)&&(Vf(),zf())}}function oi(e,t){var n=e.stateNode;if(n===null)return null;var r=Do(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var ya=!1;if(At)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){ya=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{ya=!1}function Cy(e,t,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var br=!1,zs=null,Bs=!1,wa=null,Ay={onError:function(e){br=!0,zs=e}};function Py(e,t,n,r,i,s,o,l,a){br=!1,zs=null,Cy.apply(Ay,arguments)}function Ry(e,t,n,r,i,s,o,l,a){if(Py.apply(this,arguments),br){if(br){var u=zs;br=!1,zs=null}else throw Error(y(198));Bs||(Bs=!0,wa=u)}}function Un(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Wf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fh(e){if(Un(e)!==e)throw Error(y(188))}function Ny(e){var t=e.alternate;if(!t){if(t=Un(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return fh(i),e;if(s===r)return fh(i),t;s=s.sibling}throw Error(y(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Kf(e){return e=Ny(e),e!==null?Gf(e):null}function Gf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Gf(e);if(t!==null)return t;e=e.sibling}return null}var bf=Fe.unstable_scheduleCallback,ph=Fe.unstable_cancelCallback,Oy=Fe.unstable_shouldYield,Dy=Fe.unstable_requestPaint,Y=Fe.unstable_now,Ly=Fe.unstable_getCurrentPriorityLevel,Pu=Fe.unstable_ImmediatePriority,qf=Fe.unstable_UserBlockingPriority,Vs=Fe.unstable_NormalPriority,xy=Fe.unstable_LowPriority,Xf=Fe.unstable_IdlePriority,Po=null,ft=null;function My(e){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(Po,e,void 0,(e.current.flags&128)===128)}catch{}}var nt=Math.clz32?Math.clz32:Fy,$y=Math.log,Uy=Math.LN2;function Fy(e){return e>>>=0,e===0?32:31-($y(e)/Uy|0)|0}var ss=64,os=4194304;function Vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Vr(l):(s&=o,s!==0&&(r=Vr(s)))}else o=n&~i,o!==0?r=Vr(o):s!==0&&(r=Vr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-nt(t),i=1<<n,r|=e[n],t&=~i;return r}function jy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-nt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=jy(l,t)):a<=t&&(e.expiredLanes|=l),s&=~l}}function _a(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qf(){var e=ss;return ss<<=1,!(ss&4194240)&&(ss=64),e}function vl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-nt(t),e[t]=n}function By(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-nt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Ru(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function Yf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Jf,Nu,Zf,ep,tp,Ea=!1,ls=[],bt=null,qt=null,Xt=null,li=new Map,ai=new Map,jt=[],Vy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gh(e,t){switch(e){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":qt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":li.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ai.delete(t.pointerId)}}function Dr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=$i(t),t!==null&&Nu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Hy(e,t,n,r,i){switch(t){case"focusin":return bt=Dr(bt,e,t,n,r,i),!0;case"dragenter":return qt=Dr(qt,e,t,n,r,i),!0;case"mouseover":return Xt=Dr(Xt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return li.set(s,Dr(li.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ai.set(s,Dr(ai.get(s)||null,e,t,n,r,i)),!0}return!1}function np(e){var t=vn(e.target);if(t!==null){var n=Un(t);if(n!==null){if(t=n.tag,t===13){if(t=Wf(n),t!==null){e.blockedOn=t,tp(e.priority,function(){Zf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ks(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ia(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ma=r,n.target.dispatchEvent(r),ma=null}else return t=$i(n),t!==null&&Nu(t),e.blockedOn=n,!1;t.shift()}return!0}function mh(e,t,n){ks(e)&&n.delete(t)}function Wy(){Ea=!1,bt!==null&&ks(bt)&&(bt=null),qt!==null&&ks(qt)&&(qt=null),Xt!==null&&ks(Xt)&&(Xt=null),li.forEach(mh),ai.forEach(mh)}function Lr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ea||(Ea=!0,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,Wy)))}function ui(e){function t(i){return Lr(i,e)}if(0<ls.length){Lr(ls[0],e);for(var n=1;n<ls.length;n++){var r=ls[n];r.blockedOn===e&&(r.blockedOn=null)}}for(bt!==null&&Lr(bt,e),qt!==null&&Lr(qt,e),Xt!==null&&Lr(Xt,e),li.forEach(t),ai.forEach(t),n=0;n<jt.length;n++)r=jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<jt.length&&(n=jt[0],n.blockedOn===null);)np(n),n.blockedOn===null&&jt.shift()}var sr=xt.ReactCurrentBatchConfig,Ws=!0;function Ky(e,t,n,r){var i=U,s=sr.transition;sr.transition=null;try{U=1,Ou(e,t,n,r)}finally{U=i,sr.transition=s}}function Gy(e,t,n,r){var i=U,s=sr.transition;sr.transition=null;try{U=4,Ou(e,t,n,r)}finally{U=i,sr.transition=s}}function Ou(e,t,n,r){if(Ws){var i=Ia(e,t,n,r);if(i===null)Al(e,t,r,Ks,n),gh(e,r);else if(Hy(i,e,t,n,r))r.stopPropagation();else if(gh(e,r),t&4&&-1<Vy.indexOf(e)){for(;i!==null;){var s=$i(i);if(s!==null&&Jf(s),s=Ia(e,t,n,r),s===null&&Al(e,t,r,Ks,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Al(e,t,r,null,n)}}var Ks=null;function Ia(e,t,n,r){if(Ks=null,e=Au(r),e=vn(e),e!==null)if(t=Un(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Wf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ks=e,null}function rp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ly()){case Pu:return 1;case qf:return 4;case Vs:case xy:return 16;case Xf:return 536870912;default:return 16}default:return 16}}var Kt=null,Du=null,Cs=null;function ip(){if(Cs)return Cs;var e,t=Du,n=t.length,r,i="value"in Kt?Kt.value:Kt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Cs=i.slice(e,1<r?1-r:void 0)}function As(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function as(){return!0}function vh(){return!1}function ze(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?as:vh,this.isPropagationStopped=vh,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=as)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=as)},persist:function(){},isPersistent:as}),t}var Ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lu=ze(Ir),Mi=q({},Ir,{view:0,detail:0}),by=ze(Mi),yl,wl,xr,Ro=q({},Mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xr&&(xr&&e.type==="mousemove"?(yl=e.screenX-xr.screenX,wl=e.screenY-xr.screenY):wl=yl=0,xr=e),yl)},movementY:function(e){return"movementY"in e?e.movementY:wl}}),yh=ze(Ro),qy=q({},Ro,{dataTransfer:0}),Xy=ze(qy),Qy=q({},Mi,{relatedTarget:0}),_l=ze(Qy),Yy=q({},Ir,{animationName:0,elapsedTime:0,pseudoElement:0}),Jy=ze(Yy),Zy=q({},Ir,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),e0=ze(Zy),t0=q({},Ir,{data:0}),wh=ze(t0),n0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function s0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=i0[e])?!!t[e]:!1}function xu(){return s0}var o0=q({},Mi,{key:function(e){if(e.key){var t=n0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=As(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?r0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xu,charCode:function(e){return e.type==="keypress"?As(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?As(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),l0=ze(o0),a0=q({},Ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_h=ze(a0),u0=q({},Mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xu}),c0=ze(u0),h0=q({},Ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),d0=ze(h0),f0=q({},Ro,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),p0=ze(f0),g0=[9,13,27,32],Mu=At&&"CompositionEvent"in window,qr=null;At&&"documentMode"in document&&(qr=document.documentMode);var m0=At&&"TextEvent"in window&&!qr,sp=At&&(!Mu||qr&&8<qr&&11>=qr),Eh=String.fromCharCode(32),Ih=!1;function op(e,t){switch(e){case"keyup":return g0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wn=!1;function v0(e,t){switch(e){case"compositionend":return lp(t);case"keypress":return t.which!==32?null:(Ih=!0,Eh);case"textInput":return e=t.data,e===Eh&&Ih?null:e;default:return null}}function y0(e,t){if(Wn)return e==="compositionend"||!Mu&&op(e,t)?(e=ip(),Cs=Du=Kt=null,Wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return sp&&t.locale!=="ko"?null:t.data;default:return null}}var w0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!w0[e.type]:t==="textarea"}function ap(e,t,n,r){jf(r),t=Gs(t,"onChange"),0<t.length&&(n=new Lu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xr=null,ci=null;function _0(e){wp(e,0)}function No(e){var t=bn(e);if(Df(t))return e}function E0(e,t){if(e==="change")return t}var up=!1;if(At){var El;if(At){var Il="oninput"in document;if(!Il){var Th=document.createElement("div");Th.setAttribute("oninput","return;"),Il=typeof Th.oninput=="function"}El=Il}else El=!1;up=El&&(!document.documentMode||9<document.documentMode)}function kh(){Xr&&(Xr.detachEvent("onpropertychange",cp),ci=Xr=null)}function cp(e){if(e.propertyName==="value"&&No(ci)){var t=[];ap(t,ci,e,Au(e)),Hf(_0,t)}}function I0(e,t,n){e==="focusin"?(kh(),Xr=t,ci=n,Xr.attachEvent("onpropertychange",cp)):e==="focusout"&&kh()}function S0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return No(ci)}function T0(e,t){if(e==="click")return No(t)}function k0(e,t){if(e==="input"||e==="change")return No(t)}function C0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:C0;function hi(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ia.call(t,i)||!it(e[i],t[i]))return!1}return!0}function Ch(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ah(e,t){var n=Ch(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ch(n)}}function hp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dp(){for(var e=window,t=js();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=js(e.document)}return t}function $u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function A0(e){var t=dp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&hp(n.ownerDocument.documentElement,n)){if(r!==null&&$u(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Ah(n,s);var o=Ah(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var P0=At&&"documentMode"in document&&11>=document.documentMode,Kn=null,Sa=null,Qr=null,Ta=!1;function Ph(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ta||Kn==null||Kn!==js(r)||(r=Kn,"selectionStart"in r&&$u(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qr&&hi(Qr,r)||(Qr=r,r=Gs(Sa,"onSelect"),0<r.length&&(t=new Lu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kn)))}function us(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gn={animationend:us("Animation","AnimationEnd"),animationiteration:us("Animation","AnimationIteration"),animationstart:us("Animation","AnimationStart"),transitionend:us("Transition","TransitionEnd")},Sl={},fp={};At&&(fp=document.createElement("div").style,"AnimationEvent"in window||(delete Gn.animationend.animation,delete Gn.animationiteration.animation,delete Gn.animationstart.animation),"TransitionEvent"in window||delete Gn.transitionend.transition);function Oo(e){if(Sl[e])return Sl[e];if(!Gn[e])return e;var t=Gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in fp)return Sl[e]=t[n];return e}var pp=Oo("animationend"),gp=Oo("animationiteration"),mp=Oo("animationstart"),vp=Oo("transitionend"),yp=new Map,Rh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ln(e,t){yp.set(e,t),$n(t,[e])}for(var Tl=0;Tl<Rh.length;Tl++){var kl=Rh[Tl],R0=kl.toLowerCase(),N0=kl[0].toUpperCase()+kl.slice(1);ln(R0,"on"+N0)}ln(pp,"onAnimationEnd");ln(gp,"onAnimationIteration");ln(mp,"onAnimationStart");ln("dblclick","onDoubleClick");ln("focusin","onFocus");ln("focusout","onBlur");ln(vp,"onTransitionEnd");dr("onMouseEnter",["mouseout","mouseover"]);dr("onMouseLeave",["mouseout","mouseover"]);dr("onPointerEnter",["pointerout","pointerover"]);dr("onPointerLeave",["pointerout","pointerover"]);$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$n("onBeforeInput",["compositionend","keypress","textInput","paste"]);$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),O0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hr));function Nh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ry(r,t,void 0,e),e.currentTarget=null}function wp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Nh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Nh(i,l,u),s=a}}}if(Bs)throw e=wa,Bs=!1,wa=null,e}function V(e,t){var n=t[Ra];n===void 0&&(n=t[Ra]=new Set);var r=e+"__bubble";n.has(r)||(_p(t,e,2,!1),n.add(r))}function Cl(e,t,n){var r=0;t&&(r|=4),_p(n,e,r,t)}var cs="_reactListening"+Math.random().toString(36).slice(2);function di(e){if(!e[cs]){e[cs]=!0,Af.forEach(function(n){n!=="selectionchange"&&(O0.has(n)||Cl(n,!1,e),Cl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cs]||(t[cs]=!0,Cl("selectionchange",!1,t))}}function _p(e,t,n,r){switch(rp(t)){case 1:var i=Ky;break;case 4:i=Gy;break;default:i=Ou}n=i.bind(null,t,n,e),i=void 0,!ya||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Al(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=vn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Hf(function(){var u=s,h=Au(n),p=[];e:{var g=yp.get(e);if(g!==void 0){var m=Lu,w=e;switch(e){case"keypress":if(As(n)===0)break e;case"keydown":case"keyup":m=l0;break;case"focusin":w="focus",m=_l;break;case"focusout":w="blur",m=_l;break;case"beforeblur":case"afterblur":m=_l;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Xy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=c0;break;case pp:case gp:case mp:m=Jy;break;case vp:m=d0;break;case"scroll":m=by;break;case"wheel":m=p0;break;case"copy":case"cut":case"paste":m=e0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=_h}var _=(t&4)!==0,j=!_&&e==="scroll",d=_?g!==null?g+"Capture":null:g;_=[];for(var c=u,f;c!==null;){f=c;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,d!==null&&(v=oi(c,d),v!=null&&_.push(fi(c,v,f)))),j)break;c=c.return}0<_.length&&(g=new m(g,w,null,n,h),p.push({event:g,listeners:_}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",g&&n!==ma&&(w=n.relatedTarget||n.fromElement)&&(vn(w)||w[Pt]))break e;if((m||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,m?(w=n.relatedTarget||n.toElement,m=u,w=w?vn(w):null,w!==null&&(j=Un(w),w!==j||w.tag!==5&&w.tag!==6)&&(w=null)):(m=null,w=u),m!==w)){if(_=yh,v="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(_=_h,v="onPointerLeave",d="onPointerEnter",c="pointer"),j=m==null?g:bn(m),f=w==null?g:bn(w),g=new _(v,c+"leave",m,n,h),g.target=j,g.relatedTarget=f,v=null,vn(h)===u&&(_=new _(d,c+"enter",w,n,h),_.target=f,_.relatedTarget=j,v=_),j=v,m&&w)t:{for(_=m,d=w,c=0,f=_;f;f=zn(f))c++;for(f=0,v=d;v;v=zn(v))f++;for(;0<c-f;)_=zn(_),c--;for(;0<f-c;)d=zn(d),f--;for(;c--;){if(_===d||d!==null&&_===d.alternate)break t;_=zn(_),d=zn(d)}_=null}else _=null;m!==null&&Oh(p,g,m,_,!1),w!==null&&j!==null&&Oh(p,j,w,_,!0)}}e:{if(g=u?bn(u):window,m=g.nodeName&&g.nodeName.toLowerCase(),m==="select"||m==="input"&&g.type==="file")var I=E0;else if(Sh(g))if(up)I=k0;else{I=S0;var k=I0}else(m=g.nodeName)&&m.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(I=T0);if(I&&(I=I(e,u))){ap(p,I,n,h);break e}k&&k(e,g,u),e==="focusout"&&(k=g._wrapperState)&&k.controlled&&g.type==="number"&&ha(g,"number",g.value)}switch(k=u?bn(u):window,e){case"focusin":(Sh(k)||k.contentEditable==="true")&&(Kn=k,Sa=u,Qr=null);break;case"focusout":Qr=Sa=Kn=null;break;case"mousedown":Ta=!0;break;case"contextmenu":case"mouseup":case"dragend":Ta=!1,Ph(p,n,h);break;case"selectionchange":if(P0)break;case"keydown":case"keyup":Ph(p,n,h)}var C;if(Mu)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Wn?op(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(sp&&n.locale!=="ko"&&(Wn||A!=="onCompositionStart"?A==="onCompositionEnd"&&Wn&&(C=ip()):(Kt=h,Du="value"in Kt?Kt.value:Kt.textContent,Wn=!0)),k=Gs(u,A),0<k.length&&(A=new wh(A,e,null,n,h),p.push({event:A,listeners:k}),C?A.data=C:(C=lp(n),C!==null&&(A.data=C)))),(C=m0?v0(e,n):y0(e,n))&&(u=Gs(u,"onBeforeInput"),0<u.length&&(h=new wh("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=C))}wp(p,t)})}function fi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=oi(e,n),s!=null&&r.unshift(fi(e,s,i)),s=oi(e,t),s!=null&&r.push(fi(e,s,i))),e=e.return}return r}function zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Oh(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=oi(n,s),a!=null&&o.unshift(fi(n,a,l))):i||(a=oi(n,s),a!=null&&o.push(fi(n,a,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var D0=/\r\n?/g,L0=/\u0000|\uFFFD/g;function Dh(e){return(typeof e=="string"?e:""+e).replace(D0,`
`).replace(L0,"")}function hs(e,t,n){if(t=Dh(t),Dh(e)!==t&&n)throw Error(y(425))}function bs(){}var ka=null,Ca=null;function Aa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pa=typeof setTimeout=="function"?setTimeout:void 0,x0=typeof clearTimeout=="function"?clearTimeout:void 0,Lh=typeof Promise=="function"?Promise:void 0,M0=typeof queueMicrotask=="function"?queueMicrotask:typeof Lh<"u"?function(e){return Lh.resolve(null).then(e).catch($0)}:Pa;function $0(e){setTimeout(function(){throw e})}function Pl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ui(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ui(t)}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Sr=Math.random().toString(36).slice(2),ut="__reactFiber$"+Sr,pi="__reactProps$"+Sr,Pt="__reactContainer$"+Sr,Ra="__reactEvents$"+Sr,U0="__reactListeners$"+Sr,F0="__reactHandles$"+Sr;function vn(e){var t=e[ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pt]||n[ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xh(e);e!==null;){if(n=e[ut])return n;e=xh(e)}return t}e=n,n=e.parentNode}return null}function $i(e){return e=e[ut]||e[Pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function bn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function Do(e){return e[pi]||null}var Na=[],qn=-1;function an(e){return{current:e}}function W(e){0>qn||(e.current=Na[qn],Na[qn]=null,qn--)}function z(e,t){qn++,Na[qn]=e.current,e.current=t}var on={},_e=an(on),Ne=an(!1),An=on;function fr(e,t){var n=e.type.contextTypes;if(!n)return on;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Oe(e){return e=e.childContextTypes,e!=null}function qs(){W(Ne),W(_e)}function Mh(e,t,n){if(_e.current!==on)throw Error(y(168));z(_e,t),z(Ne,n)}function Ep(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(y(108,Iy(e)||"Unknown",i));return q({},n,r)}function Xs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||on,An=_e.current,z(_e,e),z(Ne,Ne.current),!0}function $h(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=Ep(e,t,An),r.__reactInternalMemoizedMergedChildContext=e,W(Ne),W(_e),z(_e,e)):W(Ne),z(Ne,n)}var _t=null,Lo=!1,Rl=!1;function Ip(e){_t===null?_t=[e]:_t.push(e)}function j0(e){Lo=!0,Ip(e)}function un(){if(!Rl&&_t!==null){Rl=!0;var e=0,t=U;try{var n=_t;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_t=null,Lo=!1}catch(i){throw _t!==null&&(_t=_t.slice(e+1)),bf(Pu,un),i}finally{U=t,Rl=!1}}return null}var Xn=[],Qn=0,Qs=null,Ys=0,Be=[],Ve=0,Pn=null,Et=1,It="";function pn(e,t){Xn[Qn++]=Ys,Xn[Qn++]=Qs,Qs=e,Ys=t}function Sp(e,t,n){Be[Ve++]=Et,Be[Ve++]=It,Be[Ve++]=Pn,Pn=e;var r=Et;e=It;var i=32-nt(r)-1;r&=~(1<<i),n+=1;var s=32-nt(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Et=1<<32-nt(t)+i|n<<i|r,It=s+e}else Et=1<<s|n<<i|r,It=e}function Uu(e){e.return!==null&&(pn(e,1),Sp(e,1,0))}function Fu(e){for(;e===Qs;)Qs=Xn[--Qn],Xn[Qn]=null,Ys=Xn[--Qn],Xn[Qn]=null;for(;e===Pn;)Pn=Be[--Ve],Be[Ve]=null,It=Be[--Ve],Be[Ve]=null,Et=Be[--Ve],Be[Ve]=null}var Ue=null,Me=null,K=!1,tt=null;function Tp(e,t){var n=We(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Uh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ue=e,Me=Qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ue=e,Me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pn!==null?{id:Et,overflow:It}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=We(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ue=e,Me=null,!0):!1;default:return!1}}function Oa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Da(e){if(K){var t=Me;if(t){var n=t;if(!Uh(e,t)){if(Oa(e))throw Error(y(418));t=Qt(n.nextSibling);var r=Ue;t&&Uh(e,t)?Tp(r,n):(e.flags=e.flags&-4097|2,K=!1,Ue=e)}}else{if(Oa(e))throw Error(y(418));e.flags=e.flags&-4097|2,K=!1,Ue=e}}}function Fh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ue=e}function ds(e){if(e!==Ue)return!1;if(!K)return Fh(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Aa(e.type,e.memoizedProps)),t&&(t=Me)){if(Oa(e))throw kp(),Error(y(418));for(;t;)Tp(e,t),t=Qt(t.nextSibling)}if(Fh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Me=Qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Me=null}}else Me=Ue?Qt(e.stateNode.nextSibling):null;return!0}function kp(){for(var e=Me;e;)e=Qt(e.nextSibling)}function pr(){Me=Ue=null,K=!1}function ju(e){tt===null?tt=[e]:tt.push(e)}var z0=xt.ReactCurrentBatchConfig;function Ze(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Js=an(null),Zs=null,Yn=null,zu=null;function Bu(){zu=Yn=Zs=null}function Vu(e){var t=Js.current;W(Js),e._currentValue=t}function La(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function or(e,t){Zs=e,zu=Yn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Re=!0),e.firstContext=null)}function qe(e){var t=e._currentValue;if(zu!==e)if(e={context:e,memoizedValue:t,next:null},Yn===null){if(Zs===null)throw Error(y(308));Yn=e,Zs.dependencies={lanes:0,firstContext:e}}else Yn=Yn.next=e;return t}var yn=null;function Hu(e){yn===null?yn=[e]:yn.push(e)}function Cp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Hu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Rt(e,r)}function Rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ft=!1;function Wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ap(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Yt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Rt(e,n)}return i=r.interleaved,i===null?(t.next=t,Hu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Rt(e,n)}function Ps(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ru(e,n)}}function jh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function eo(e,t,n,r){var i=e.updateQueue;Ft=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=a))}if(s!==null){var p=i.baseState;o=0,h=u=a=null,l=s;do{var g=l.lane,m=l.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,_=l;switch(g=t,m=n,_.tag){case 1:if(w=_.payload,typeof w=="function"){p=w.call(m,p,g);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=_.payload,g=typeof w=="function"?w.call(m,p,g):w,g==null)break e;p=q({},p,g);break e;case 2:Ft=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else m={eventTime:m,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=m,a=p):h=h.next=m,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(h===null&&(a=p),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Nn|=o,e.lanes=o,e.memoizedState=p}}function zh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(y(191,i));i.call(r)}}}var Pp=new Cf.Component().refs;function xa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xo={isMounted:function(e){return(e=e._reactInternals)?Un(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),i=Zt(e),s=Ct(r,i);s.payload=t,n!=null&&(s.callback=n),t=Yt(e,s,i),t!==null&&(rt(t,e,i,r),Ps(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),i=Zt(e),s=Ct(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Yt(e,s,i),t!==null&&(rt(t,e,i,r),Ps(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=Zt(e),i=Ct(n,r);i.tag=2,t!=null&&(i.callback=t),t=Yt(e,i,r),t!==null&&(rt(t,e,r,n),Ps(t,e,r))}};function Bh(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!hi(n,r)||!hi(i,s):!0}function Rp(e,t,n){var r=!1,i=on,s=t.contextType;return typeof s=="object"&&s!==null?s=qe(s):(i=Oe(t)?An:_e.current,r=t.contextTypes,s=(r=r!=null)?fr(e,i):on),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Vh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xo.enqueueReplaceState(t,t.state,null)}function Ma(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Pp,Wu(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=qe(s):(s=Oe(t)?An:_e.current,i.context=fr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(xa(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&xo.enqueueReplaceState(i,i.state,null),eo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Mr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=i.refs;l===Pp&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function fs(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Hh(e){var t=e._init;return t(e._payload)}function Np(e){function t(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=en(d,c),d.index=0,d.sibling=null,d}function s(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,c,f,v){return c===null||c.tag!==6?(c=$l(f,d.mode,v),c.return=d,c):(c=i(c,f),c.return=d,c)}function a(d,c,f,v){var I=f.type;return I===Hn?h(d,c,f.props.children,v,f.key):c!==null&&(c.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Ut&&Hh(I)===c.type)?(v=i(c,f.props),v.ref=Mr(d,c,f),v.return=d,v):(v=xs(f.type,f.key,f.props,null,d.mode,v),v.ref=Mr(d,c,f),v.return=d,v)}function u(d,c,f,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Ul(f,d.mode,v),c.return=d,c):(c=i(c,f.children||[]),c.return=d,c)}function h(d,c,f,v,I){return c===null||c.tag!==7?(c=Tn(f,d.mode,v,I),c.return=d,c):(c=i(c,f),c.return=d,c)}function p(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=$l(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ns:return f=xs(c.type,c.key,c.props,null,d.mode,f),f.ref=Mr(d,null,c),f.return=d,f;case Vn:return c=Ul(c,d.mode,f),c.return=d,c;case Ut:var v=c._init;return p(d,v(c._payload),f)}if(Br(c)||Nr(c))return c=Tn(c,d.mode,f,null),c.return=d,c;fs(d,c)}return null}function g(d,c,f,v){var I=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return I!==null?null:l(d,c,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ns:return f.key===I?a(d,c,f,v):null;case Vn:return f.key===I?u(d,c,f,v):null;case Ut:return I=f._init,g(d,c,I(f._payload),v)}if(Br(f)||Nr(f))return I!==null?null:h(d,c,f,v,null);fs(d,f)}return null}function m(d,c,f,v,I){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(f)||null,l(c,d,""+v,I);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ns:return d=d.get(v.key===null?f:v.key)||null,a(c,d,v,I);case Vn:return d=d.get(v.key===null?f:v.key)||null,u(c,d,v,I);case Ut:var k=v._init;return m(d,c,f,k(v._payload),I)}if(Br(v)||Nr(v))return d=d.get(f)||null,h(c,d,v,I,null);fs(c,v)}return null}function w(d,c,f,v){for(var I=null,k=null,C=c,A=c=0,B=null;C!==null&&A<f.length;A++){C.index>A?(B=C,C=null):B=C.sibling;var D=g(d,C,f[A],v);if(D===null){C===null&&(C=B);break}e&&C&&D.alternate===null&&t(d,C),c=s(D,c,A),k===null?I=D:k.sibling=D,k=D,C=B}if(A===f.length)return n(d,C),K&&pn(d,A),I;if(C===null){for(;A<f.length;A++)C=p(d,f[A],v),C!==null&&(c=s(C,c,A),k===null?I=C:k.sibling=C,k=C);return K&&pn(d,A),I}for(C=r(d,C);A<f.length;A++)B=m(C,d,A,f[A],v),B!==null&&(e&&B.alternate!==null&&C.delete(B.key===null?A:B.key),c=s(B,c,A),k===null?I=B:k.sibling=B,k=B);return e&&C.forEach(function(Ye){return t(d,Ye)}),K&&pn(d,A),I}function _(d,c,f,v){var I=Nr(f);if(typeof I!="function")throw Error(y(150));if(f=I.call(f),f==null)throw Error(y(151));for(var k=I=null,C=c,A=c=0,B=null,D=f.next();C!==null&&!D.done;A++,D=f.next()){C.index>A?(B=C,C=null):B=C.sibling;var Ye=g(d,C,D.value,v);if(Ye===null){C===null&&(C=B);break}e&&C&&Ye.alternate===null&&t(d,C),c=s(Ye,c,A),k===null?I=Ye:k.sibling=Ye,k=Ye,C=B}if(D.done)return n(d,C),K&&pn(d,A),I;if(C===null){for(;!D.done;A++,D=f.next())D=p(d,D.value,v),D!==null&&(c=s(D,c,A),k===null?I=D:k.sibling=D,k=D);return K&&pn(d,A),I}for(C=r(d,C);!D.done;A++,D=f.next())D=m(C,d,A,D.value,v),D!==null&&(e&&D.alternate!==null&&C.delete(D.key===null?A:D.key),c=s(D,c,A),k===null?I=D:k.sibling=D,k=D);return e&&C.forEach(function(Pr){return t(d,Pr)}),K&&pn(d,A),I}function j(d,c,f,v){if(typeof f=="object"&&f!==null&&f.type===Hn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ns:e:{for(var I=f.key,k=c;k!==null;){if(k.key===I){if(I=f.type,I===Hn){if(k.tag===7){n(d,k.sibling),c=i(k,f.props.children),c.return=d,d=c;break e}}else if(k.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Ut&&Hh(I)===k.type){n(d,k.sibling),c=i(k,f.props),c.ref=Mr(d,k,f),c.return=d,d=c;break e}n(d,k);break}else t(d,k);k=k.sibling}f.type===Hn?(c=Tn(f.props.children,d.mode,v,f.key),c.return=d,d=c):(v=xs(f.type,f.key,f.props,null,d.mode,v),v.ref=Mr(d,c,f),v.return=d,d=v)}return o(d);case Vn:e:{for(k=f.key;c!==null;){if(c.key===k)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(d,c.sibling),c=i(c,f.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=Ul(f,d.mode,v),c.return=d,d=c}return o(d);case Ut:return k=f._init,j(d,c,k(f._payload),v)}if(Br(f))return w(d,c,f,v);if(Nr(f))return _(d,c,f,v);fs(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(d,c.sibling),c=i(c,f),c.return=d,d=c):(n(d,c),c=$l(f,d.mode,v),c.return=d,d=c),o(d)):n(d,c)}return j}var gr=Np(!0),Op=Np(!1),Ui={},pt=an(Ui),gi=an(Ui),mi=an(Ui);function wn(e){if(e===Ui)throw Error(y(174));return e}function Ku(e,t){switch(z(mi,t),z(gi,e),z(pt,Ui),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fa(t,e)}W(pt),z(pt,t)}function mr(){W(pt),W(gi),W(mi)}function Dp(e){wn(mi.current);var t=wn(pt.current),n=fa(t,e.type);t!==n&&(z(gi,e),z(pt,n))}function Gu(e){gi.current===e&&(W(pt),W(gi))}var G=an(0);function to(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Nl=[];function bu(){for(var e=0;e<Nl.length;e++)Nl[e]._workInProgressVersionPrimary=null;Nl.length=0}var Rs=xt.ReactCurrentDispatcher,Ol=xt.ReactCurrentBatchConfig,Rn=0,b=null,ee=null,re=null,no=!1,Yr=!1,vi=0,B0=0;function de(){throw Error(y(321))}function qu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!it(e[n],t[n]))return!1;return!0}function Xu(e,t,n,r,i,s){if(Rn=s,b=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Rs.current=e===null||e.memoizedState===null?K0:G0,e=n(r,i),Yr){s=0;do{if(Yr=!1,vi=0,25<=s)throw Error(y(301));s+=1,re=ee=null,t.updateQueue=null,Rs.current=b0,e=n(r,i)}while(Yr)}if(Rs.current=ro,t=ee!==null&&ee.next!==null,Rn=0,re=ee=b=null,no=!1,t)throw Error(y(300));return e}function Qu(){var e=vi!==0;return vi=0,e}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?b.memoizedState=re=e:re=re.next=e,re}function Xe(){if(ee===null){var e=b.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=re===null?b.memoizedState:re.next;if(t!==null)re=t,ee=e;else{if(e===null)throw Error(y(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},re===null?b.memoizedState=re=e:re=re.next=e}return re}function yi(e,t){return typeof t=="function"?t(e):t}function Dl(e){var t=Xe(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=ee,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var h=u.lane;if((Rn&h)===h)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=p,o=r):a=a.next=p,b.lanes|=h,Nn|=h}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,it(r,t.memoizedState)||(Re=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,b.lanes|=s,Nn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ll(e){var t=Xe(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);it(s,t.memoizedState)||(Re=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Lp(){}function xp(e,t){var n=b,r=Xe(),i=t(),s=!it(r.memoizedState,i);if(s&&(r.memoizedState=i,Re=!0),r=r.queue,Yu(Up.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,wi(9,$p.bind(null,n,r,i,t),void 0,null),ie===null)throw Error(y(349));Rn&30||Mp(n,t,i)}return i}function Mp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=b.updateQueue,t===null?(t={lastEffect:null,stores:null},b.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function $p(e,t,n,r){t.value=n,t.getSnapshot=r,Fp(t)&&jp(e)}function Up(e,t,n){return n(function(){Fp(t)&&jp(e)})}function Fp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!it(e,n)}catch{return!0}}function jp(e){var t=Rt(e,1);t!==null&&rt(t,e,1,-1)}function Wh(e){var t=at();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yi,lastRenderedState:e},t.queue=e,e=e.dispatch=W0.bind(null,b,e),[t.memoizedState,e]}function wi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=b.updateQueue,t===null?(t={lastEffect:null,stores:null},b.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function zp(){return Xe().memoizedState}function Ns(e,t,n,r){var i=at();b.flags|=e,i.memoizedState=wi(1|t,n,void 0,r===void 0?null:r)}function Mo(e,t,n,r){var i=Xe();r=r===void 0?null:r;var s=void 0;if(ee!==null){var o=ee.memoizedState;if(s=o.destroy,r!==null&&qu(r,o.deps)){i.memoizedState=wi(t,n,s,r);return}}b.flags|=e,i.memoizedState=wi(1|t,n,s,r)}function Kh(e,t){return Ns(8390656,8,e,t)}function Yu(e,t){return Mo(2048,8,e,t)}function Bp(e,t){return Mo(4,2,e,t)}function Vp(e,t){return Mo(4,4,e,t)}function Hp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wp(e,t,n){return n=n!=null?n.concat([e]):null,Mo(4,4,Hp.bind(null,t,e),n)}function Ju(){}function Kp(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Gp(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function bp(e,t,n){return Rn&21?(it(n,t)||(n=Qf(),b.lanes|=n,Nn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=n)}function V0(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=Ol.transition;Ol.transition={};try{e(!1),t()}finally{U=n,Ol.transition=r}}function qp(){return Xe().memoizedState}function H0(e,t,n){var r=Zt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xp(e))Qp(t,n);else if(n=Cp(e,t,n,r),n!==null){var i=ke();rt(n,e,r,i),Yp(n,t,r)}}function W0(e,t,n){var r=Zt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xp(e))Qp(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,it(l,o)){var a=t.interleaved;a===null?(i.next=i,Hu(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=Cp(e,t,i,r),n!==null&&(i=ke(),rt(n,e,r,i),Yp(n,t,r))}}function Xp(e){var t=e.alternate;return e===b||t!==null&&t===b}function Qp(e,t){Yr=no=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Yp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ru(e,n)}}var ro={readContext:qe,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},K0={readContext:qe,useCallback:function(e,t){return at().memoizedState=[e,t===void 0?null:t],e},useContext:qe,useEffect:Kh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ns(4194308,4,Hp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ns(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ns(4,2,e,t)},useMemo:function(e,t){var n=at();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=at();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=H0.bind(null,b,e),[r.memoizedState,e]},useRef:function(e){var t=at();return e={current:e},t.memoizedState=e},useState:Wh,useDebugValue:Ju,useDeferredValue:function(e){return at().memoizedState=e},useTransition:function(){var e=Wh(!1),t=e[0];return e=V0.bind(null,e[1]),at().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=b,i=at();if(K){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),ie===null)throw Error(y(349));Rn&30||Mp(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Kh(Up.bind(null,r,s,e),[e]),r.flags|=2048,wi(9,$p.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=at(),t=ie.identifierPrefix;if(K){var n=It,r=Et;n=(r&~(1<<32-nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=vi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=B0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},G0={readContext:qe,useCallback:Kp,useContext:qe,useEffect:Yu,useImperativeHandle:Wp,useInsertionEffect:Bp,useLayoutEffect:Vp,useMemo:Gp,useReducer:Dl,useRef:zp,useState:function(){return Dl(yi)},useDebugValue:Ju,useDeferredValue:function(e){var t=Xe();return bp(t,ee.memoizedState,e)},useTransition:function(){var e=Dl(yi)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:Lp,useSyncExternalStore:xp,useId:qp,unstable_isNewReconciler:!1},b0={readContext:qe,useCallback:Kp,useContext:qe,useEffect:Yu,useImperativeHandle:Wp,useInsertionEffect:Bp,useLayoutEffect:Vp,useMemo:Gp,useReducer:Ll,useRef:zp,useState:function(){return Ll(yi)},useDebugValue:Ju,useDeferredValue:function(e){var t=Xe();return ee===null?t.memoizedState=e:bp(t,ee.memoizedState,e)},useTransition:function(){var e=Ll(yi)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:Lp,useSyncExternalStore:xp,useId:qp,unstable_isNewReconciler:!1};function vr(e,t){try{var n="",r=t;do n+=Ey(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function xl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $a(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var q0=typeof WeakMap=="function"?WeakMap:Map;function Jp(e,t,n){n=Ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){so||(so=!0,Ga=r),$a(e,t)},n}function Zp(e,t,n){n=Ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){$a(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){$a(e,t),typeof r!="function"&&(Jt===null?Jt=new Set([this]):Jt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Gh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new q0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=a1.bind(null,e,t,n),t.then(e,e))}function bh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ct(-1,1),t.tag=2,Yt(n,t,1))),n.lanes|=1),e)}var X0=xt.ReactCurrentOwner,Re=!1;function Se(e,t,n,r){t.child=e===null?Op(t,null,n,r):gr(t,e.child,n,r)}function Xh(e,t,n,r,i){n=n.render;var s=t.ref;return or(t,i),r=Xu(e,t,n,r,s,i),n=Qu(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nt(e,t,i)):(K&&n&&Uu(t),t.flags|=1,Se(e,t,r,i),t.child)}function Qh(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!oc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,eg(e,t,s,r,i)):(e=xs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:hi,n(o,r)&&e.ref===t.ref)return Nt(e,t,i)}return t.flags|=1,e=en(s,r),e.ref=t.ref,e.return=t,t.child=e}function eg(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(hi(s,r)&&e.ref===t.ref)if(Re=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Re=!0);else return t.lanes=e.lanes,Nt(e,t,i)}return Ua(e,t,n,r,i)}function tg(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(Zn,xe),xe|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,z(Zn,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,z(Zn,xe),xe|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,z(Zn,xe),xe|=r;return Se(e,t,i,n),t.child}function ng(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ua(e,t,n,r,i){var s=Oe(n)?An:_e.current;return s=fr(t,s),or(t,i),n=Xu(e,t,n,r,s,i),r=Qu(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nt(e,t,i)):(K&&r&&Uu(t),t.flags|=1,Se(e,t,n,i),t.child)}function Yh(e,t,n,r,i){if(Oe(n)){var s=!0;Xs(t)}else s=!1;if(or(t,i),t.stateNode===null)Os(e,t),Rp(t,n,r),Ma(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=qe(u):(u=Oe(n)?An:_e.current,u=fr(t,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Vh(t,o,r,u),Ft=!1;var g=t.memoizedState;o.state=g,eo(t,r,o,i),a=t.memoizedState,l!==r||g!==a||Ne.current||Ft?(typeof h=="function"&&(xa(t,n,h,r),a=t.memoizedState),(l=Ft||Bh(t,n,l,r,g,a,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Ap(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Ze(t.type,l),o.props=u,p=t.pendingProps,g=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=qe(a):(a=Oe(n)?An:_e.current,a=fr(t,a));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==a)&&Vh(t,o,r,a),Ft=!1,g=t.memoizedState,o.state=g,eo(t,r,o,i);var w=t.memoizedState;l!==p||g!==w||Ne.current||Ft?(typeof m=="function"&&(xa(t,n,m,r),w=t.memoizedState),(u=Ft||Bh(t,n,u,r,g,w,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Fa(e,t,n,r,s,i)}function Fa(e,t,n,r,i,s){ng(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&$h(t,n,!1),Nt(e,t,s);r=t.stateNode,X0.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=gr(t,e.child,null,s),t.child=gr(t,null,l,s)):Se(e,t,l,s),t.memoizedState=r.state,i&&$h(t,n,!0),t.child}function rg(e){var t=e.stateNode;t.pendingContext?Mh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Mh(e,t.context,!1),Ku(e,t.containerInfo)}function Jh(e,t,n,r,i){return pr(),ju(i),t.flags|=256,Se(e,t,n,r),t.child}var ja={dehydrated:null,treeContext:null,retryLane:0};function za(e){return{baseLanes:e,cachePool:null,transitions:null}}function ig(e,t,n){var r=t.pendingProps,i=G.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),z(G,i&1),e===null)return Da(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Fo(o,r,0,null),e=Tn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=za(n),t.memoizedState=ja,e):Zu(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Q0(e,t,o,r,l,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=en(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=en(l,s):(s=Tn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?za(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=ja,r}return s=e.child,e=s.sibling,r=en(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Zu(e,t){return t=Fo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ps(e,t,n,r){return r!==null&&ju(r),gr(t,e.child,null,n),e=Zu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Q0(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=xl(Error(y(422))),ps(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Fo({mode:"visible",children:r.children},i,0,null),s=Tn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&gr(t,e.child,null,o),t.child.memoizedState=za(o),t.memoizedState=ja,s);if(!(t.mode&1))return ps(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(y(419)),r=xl(s,r,void 0),ps(e,t,o,r)}if(l=(o&e.childLanes)!==0,Re||l){if(r=ie,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Rt(e,i),rt(r,e,i,-1))}return sc(),r=xl(Error(y(421))),ps(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=u1.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Me=Qt(i.nextSibling),Ue=t,K=!0,tt=null,e!==null&&(Be[Ve++]=Et,Be[Ve++]=It,Be[Ve++]=Pn,Et=e.id,It=e.overflow,Pn=t),t=Zu(t,r.children),t.flags|=4096,t)}function Zh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),La(e.return,t,n)}function Ml(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function sg(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Se(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zh(e,n,t);else if(e.tag===19)Zh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(z(G,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&to(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ml(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&to(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ml(t,!0,n,null,s);break;case"together":Ml(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Os(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Nn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=en(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=en(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Y0(e,t,n){switch(t.tag){case 3:rg(t),pr();break;case 5:Dp(t);break;case 1:Oe(t.type)&&Xs(t);break;case 4:Ku(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;z(Js,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(z(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?ig(e,t,n):(z(G,G.current&1),e=Nt(e,t,n),e!==null?e.sibling:null);z(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return sg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),z(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,tg(e,t,n)}return Nt(e,t,n)}var og,Ba,lg,ag;og=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ba=function(){};lg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,wn(pt.current);var s=null;switch(n){case"input":i=ua(e,i),r=ua(e,r),s=[];break;case"select":i=q({},i,{value:void 0}),r=q({},r,{value:void 0}),s=[];break;case"textarea":i=da(e,i),r=da(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=bs)}pa(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ii.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ii.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&V("scroll",e),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};ag=function(e,t,n,r){n!==r&&(t.flags|=4)};function $r(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function J0(e,t,n){var r=t.pendingProps;switch(Fu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(t),null;case 1:return Oe(t.type)&&qs(),fe(t),null;case 3:return r=t.stateNode,mr(),W(Ne),W(_e),bu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ds(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,tt!==null&&(Xa(tt),tt=null))),Ba(e,t),fe(t),null;case 5:Gu(t);var i=wn(mi.current);if(n=t.type,e!==null&&t.stateNode!=null)lg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return fe(t),null}if(e=wn(pt.current),ds(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[ut]=t,r[pi]=s,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<Hr.length;i++)V(Hr[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":ah(r,s),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},V("invalid",r);break;case"textarea":ch(r,s),V("invalid",r)}pa(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&hs(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&hs(r.textContent,l,e),i=["children",""+l]):ii.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&V("scroll",r)}switch(n){case"input":rs(r),uh(r,s,!0);break;case"textarea":rs(r),hh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=bs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Mf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[ut]=t,e[pi]=r,og(e,t,!1,!1),t.stateNode=e;e:{switch(o=ga(n,r),n){case"dialog":V("cancel",e),V("close",e),i=r;break;case"iframe":case"object":case"embed":V("load",e),i=r;break;case"video":case"audio":for(i=0;i<Hr.length;i++)V(Hr[i],e);i=r;break;case"source":V("error",e),i=r;break;case"img":case"image":case"link":V("error",e),V("load",e),i=r;break;case"details":V("toggle",e),i=r;break;case"input":ah(e,r),i=ua(e,r),V("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=q({},r,{value:void 0}),V("invalid",e);break;case"textarea":ch(e,r),i=da(e,r),V("invalid",e);break;default:i=r}pa(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Ff(e,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&$f(e,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&si(e,a):typeof a=="number"&&si(e,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ii.hasOwnProperty(s)?a!=null&&s==="onScroll"&&V("scroll",e):a!=null&&Su(e,s,a,o))}switch(n){case"input":rs(e),uh(e,r,!1);break;case"textarea":rs(e),hh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+sn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?nr(e,!!r.multiple,s,!1):r.defaultValue!=null&&nr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=bs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return fe(t),null;case 6:if(e&&t.stateNode!=null)ag(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=wn(mi.current),wn(pt.current),ds(t)){if(r=t.stateNode,n=t.memoizedProps,r[ut]=t,(s=r.nodeValue!==n)&&(e=Ue,e!==null))switch(e.tag){case 3:hs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&hs(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ut]=t,t.stateNode=r}return fe(t),null;case 13:if(W(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Me!==null&&t.mode&1&&!(t.flags&128))kp(),pr(),t.flags|=98560,s=!1;else if(s=ds(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(y(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(y(317));s[ut]=t}else pr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;fe(t),s=!1}else tt!==null&&(Xa(tt),tt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?te===0&&(te=3):sc())),t.updateQueue!==null&&(t.flags|=4),fe(t),null);case 4:return mr(),Ba(e,t),e===null&&di(t.stateNode.containerInfo),fe(t),null;case 10:return Vu(t.type._context),fe(t),null;case 17:return Oe(t.type)&&qs(),fe(t),null;case 19:if(W(G),s=t.memoizedState,s===null)return fe(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)$r(s,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=to(e),o!==null){for(t.flags|=128,$r(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return z(G,G.current&1|2),t.child}e=e.sibling}s.tail!==null&&Y()>yr&&(t.flags|=128,r=!0,$r(s,!1),t.lanes=4194304)}else{if(!r)if(e=to(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),$r(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!K)return fe(t),null}else 2*Y()-s.renderingStartTime>yr&&n!==1073741824&&(t.flags|=128,r=!0,$r(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Y(),t.sibling=null,n=G.current,z(G,r?n&1|2:n&1),t):(fe(t),null);case 22:case 23:return ic(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(fe(t),t.subtreeFlags&6&&(t.flags|=8192)):fe(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function Z0(e,t){switch(Fu(t),t.tag){case 1:return Oe(t.type)&&qs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mr(),W(Ne),W(_e),bu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Gu(t),null;case 13:if(W(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(G),null;case 4:return mr(),null;case 10:return Vu(t.type._context),null;case 22:case 23:return ic(),null;case 24:return null;default:return null}}var gs=!1,ge=!1,e1=typeof WeakSet=="function"?WeakSet:Set,S=null;function Jn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function Va(e,t,n){try{n()}catch(r){X(e,t,r)}}var ed=!1;function t1(e,t){if(ka=Ws,e=dp(),$u(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,h=0,p=e,g=null;t:for(;;){for(var m;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(a=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(m=p.firstChild)!==null;)g=p,p=m;for(;;){if(p===e)break t;if(g===n&&++u===i&&(l=o),g===s&&++h===r&&(a=o),(m=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=m}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ca={focusedElem:e,selectionRange:n},Ws=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var _=w.memoizedProps,j=w.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?_:Ze(t.type,_),j);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){X(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return w=ed,ed=!1,w}function Jr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Va(t,n,s)}i=i.next}while(i!==r)}}function $o(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ha(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ug(e){var t=e.alternate;t!==null&&(e.alternate=null,ug(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ut],delete t[pi],delete t[Ra],delete t[U0],delete t[F0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cg(e){return e.tag===5||e.tag===3||e.tag===4}function td(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=bs));else if(r!==4&&(e=e.child,e!==null))for(Wa(e,t,n),e=e.sibling;e!==null;)Wa(e,t,n),e=e.sibling}function Ka(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ka(e,t,n),e=e.sibling;e!==null;)Ka(e,t,n),e=e.sibling}var le=null,et=!1;function Mt(e,t,n){for(n=n.child;n!==null;)hg(e,t,n),n=n.sibling}function hg(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(Po,n)}catch{}switch(n.tag){case 5:ge||Jn(n,t);case 6:var r=le,i=et;le=null,Mt(e,t,n),le=r,et=i,le!==null&&(et?(e=le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&(et?(e=le,n=n.stateNode,e.nodeType===8?Pl(e.parentNode,n):e.nodeType===1&&Pl(e,n),ui(e)):Pl(le,n.stateNode));break;case 4:r=le,i=et,le=n.stateNode.containerInfo,et=!0,Mt(e,t,n),le=r,et=i;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Va(n,t,o),i=i.next}while(i!==r)}Mt(e,t,n);break;case 1:if(!ge&&(Jn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){X(n,t,l)}Mt(e,t,n);break;case 21:Mt(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,Mt(e,t,n),ge=r):Mt(e,t,n);break;default:Mt(e,t,n)}}function nd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new e1),t.forEach(function(r){var i=c1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Je(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:le=l.stateNode,et=!1;break e;case 3:le=l.stateNode.containerInfo,et=!0;break e;case 4:le=l.stateNode.containerInfo,et=!0;break e}l=l.return}if(le===null)throw Error(y(160));hg(s,o,i),le=null,et=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){X(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)dg(t,e),t=t.sibling}function dg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Je(t,e),lt(e),r&4){try{Jr(3,e,e.return),$o(3,e)}catch(_){X(e,e.return,_)}try{Jr(5,e,e.return)}catch(_){X(e,e.return,_)}}break;case 1:Je(t,e),lt(e),r&512&&n!==null&&Jn(n,n.return);break;case 5:if(Je(t,e),lt(e),r&512&&n!==null&&Jn(n,n.return),e.flags&32){var i=e.stateNode;try{si(i,"")}catch(_){X(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Lf(i,s),ga(l,o);var u=ga(l,s);for(o=0;o<a.length;o+=2){var h=a[o],p=a[o+1];h==="style"?Ff(i,p):h==="dangerouslySetInnerHTML"?$f(i,p):h==="children"?si(i,p):Su(i,h,p,u)}switch(l){case"input":ca(i,s);break;case"textarea":xf(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?nr(i,!!s.multiple,m,!1):g!==!!s.multiple&&(s.defaultValue!=null?nr(i,!!s.multiple,s.defaultValue,!0):nr(i,!!s.multiple,s.multiple?[]:"",!1))}i[pi]=s}catch(_){X(e,e.return,_)}}break;case 6:if(Je(t,e),lt(e),r&4){if(e.stateNode===null)throw Error(y(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(_){X(e,e.return,_)}}break;case 3:if(Je(t,e),lt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ui(t.containerInfo)}catch(_){X(e,e.return,_)}break;case 4:Je(t,e),lt(e);break;case 13:Je(t,e),lt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(nc=Y())),r&4&&nd(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(u=ge)||h,Je(t,e),ge=u):Je(t,e),lt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(S=e,h=e.child;h!==null;){for(p=S=h;S!==null;){switch(g=S,m=g.child,g.tag){case 0:case 11:case 14:case 15:Jr(4,g,g.return);break;case 1:Jn(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(_){X(r,n,_)}}break;case 5:Jn(g,g.return);break;case 22:if(g.memoizedState!==null){id(p);continue}}m!==null?(m.return=g,S=m):id(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,a=p.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Uf("display",o))}catch(_){X(e,e.return,_)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(_){X(e,e.return,_)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Je(t,e),lt(e),r&4&&nd(e);break;case 21:break;default:Je(t,e),lt(e)}}function lt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(cg(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(si(i,""),r.flags&=-33);var s=td(e);Ka(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=td(e);Wa(e,l,o);break;default:throw Error(y(161))}}catch(a){X(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function n1(e,t,n){S=e,fg(e)}function fg(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var i=S,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||gs;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||ge;l=gs;var u=ge;if(gs=o,(ge=a)&&!u)for(S=i;S!==null;)o=S,a=o.child,o.tag===22&&o.memoizedState!==null?sd(i):a!==null?(a.return=o,S=a):sd(i);for(;s!==null;)S=s,fg(s),s=s.sibling;S=i,gs=l,ge=u}rd(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,S=s):rd(e)}}function rd(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||$o(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ze(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&zh(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}zh(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&ui(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}ge||t.flags&512&&Ha(t)}catch(g){X(t,t.return,g)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function id(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function sd(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{$o(4,t)}catch(a){X(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){X(t,i,a)}}var s=t.return;try{Ha(t)}catch(a){X(t,s,a)}break;case 5:var o=t.return;try{Ha(t)}catch(a){X(t,o,a)}}}catch(a){X(t,t.return,a)}if(t===e){S=null;break}var l=t.sibling;if(l!==null){l.return=t.return,S=l;break}S=t.return}}var r1=Math.ceil,io=xt.ReactCurrentDispatcher,ec=xt.ReactCurrentOwner,Ke=xt.ReactCurrentBatchConfig,M=0,ie=null,Z=null,ue=0,xe=0,Zn=an(0),te=0,_i=null,Nn=0,Uo=0,tc=0,Zr=null,Pe=null,nc=0,yr=1/0,wt=null,so=!1,Ga=null,Jt=null,ms=!1,Gt=null,oo=0,ei=0,ba=null,Ds=-1,Ls=0;function ke(){return M&6?Y():Ds!==-1?Ds:Ds=Y()}function Zt(e){return e.mode&1?M&2&&ue!==0?ue&-ue:z0.transition!==null?(Ls===0&&(Ls=Qf()),Ls):(e=U,e!==0||(e=window.event,e=e===void 0?16:rp(e.type)),e):1}function rt(e,t,n,r){if(50<ei)throw ei=0,ba=null,Error(y(185));xi(e,n,r),(!(M&2)||e!==ie)&&(e===ie&&(!(M&2)&&(Uo|=n),te===4&&zt(e,ue)),De(e,r),n===1&&M===0&&!(t.mode&1)&&(yr=Y()+500,Lo&&un()))}function De(e,t){var n=e.callbackNode;zy(e,t);var r=Hs(e,e===ie?ue:0);if(r===0)n!==null&&ph(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ph(n),t===1)e.tag===0?j0(od.bind(null,e)):Ip(od.bind(null,e)),M0(function(){!(M&6)&&un()}),n=null;else{switch(Yf(r)){case 1:n=Pu;break;case 4:n=qf;break;case 16:n=Vs;break;case 536870912:n=Xf;break;default:n=Vs}n=Eg(n,pg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function pg(e,t){if(Ds=-1,Ls=0,M&6)throw Error(y(327));var n=e.callbackNode;if(lr()&&e.callbackNode!==n)return null;var r=Hs(e,e===ie?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=lo(e,r);else{t=r;var i=M;M|=2;var s=mg();(ie!==e||ue!==t)&&(wt=null,yr=Y()+500,Sn(e,t));do try{o1();break}catch(l){gg(e,l)}while(1);Bu(),io.current=s,M=i,Z!==null?t=0:(ie=null,ue=0,t=te)}if(t!==0){if(t===2&&(i=_a(e),i!==0&&(r=i,t=qa(e,i))),t===1)throw n=_i,Sn(e,0),zt(e,r),De(e,Y()),n;if(t===6)zt(e,r);else{if(i=e.current.alternate,!(r&30)&&!i1(i)&&(t=lo(e,r),t===2&&(s=_a(e),s!==0&&(r=s,t=qa(e,s))),t===1))throw n=_i,Sn(e,0),zt(e,r),De(e,Y()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:gn(e,Pe,wt);break;case 3:if(zt(e,r),(r&130023424)===r&&(t=nc+500-Y(),10<t)){if(Hs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Pa(gn.bind(null,e,Pe,wt),t);break}gn(e,Pe,wt);break;case 4:if(zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-nt(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*r1(r/1960))-r,10<r){e.timeoutHandle=Pa(gn.bind(null,e,Pe,wt),r);break}gn(e,Pe,wt);break;case 5:gn(e,Pe,wt);break;default:throw Error(y(329))}}}return De(e,Y()),e.callbackNode===n?pg.bind(null,e):null}function qa(e,t){var n=Zr;return e.current.memoizedState.isDehydrated&&(Sn(e,t).flags|=256),e=lo(e,t),e!==2&&(t=Pe,Pe=n,t!==null&&Xa(t)),e}function Xa(e){Pe===null?Pe=e:Pe.push.apply(Pe,e)}function i1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!it(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zt(e,t){for(t&=~tc,t&=~Uo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-nt(t),r=1<<n;e[n]=-1,t&=~r}}function od(e){if(M&6)throw Error(y(327));lr();var t=Hs(e,0);if(!(t&1))return De(e,Y()),null;var n=lo(e,t);if(e.tag!==0&&n===2){var r=_a(e);r!==0&&(t=r,n=qa(e,r))}if(n===1)throw n=_i,Sn(e,0),zt(e,t),De(e,Y()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,gn(e,Pe,wt),De(e,Y()),null}function rc(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(yr=Y()+500,Lo&&un())}}function On(e){Gt!==null&&Gt.tag===0&&!(M&6)&&lr();var t=M;M|=1;var n=Ke.transition,r=U;try{if(Ke.transition=null,U=1,e)return e()}finally{U=r,Ke.transition=n,M=t,!(M&6)&&un()}}function ic(){xe=Zn.current,W(Zn)}function Sn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,x0(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(Fu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qs();break;case 3:mr(),W(Ne),W(_e),bu();break;case 5:Gu(r);break;case 4:mr();break;case 13:W(G);break;case 19:W(G);break;case 10:Vu(r.type._context);break;case 22:case 23:ic()}n=n.return}if(ie=e,Z=e=en(e.current,null),ue=xe=t,te=0,_i=null,tc=Uo=Nn=0,Pe=Zr=null,yn!==null){for(t=0;t<yn.length;t++)if(n=yn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}yn=null}return e}function gg(e,t){do{var n=Z;try{if(Bu(),Rs.current=ro,no){for(var r=b.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}no=!1}if(Rn=0,re=ee=b=null,Yr=!1,vi=0,ec.current=null,n===null||n.return===null){te=1,_i=t,Z=null;break}e:{var s=e,o=n.return,l=n,a=t;if(t=ue,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,h=l,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=bh(o);if(m!==null){m.flags&=-257,qh(m,o,l,s,t),m.mode&1&&Gh(s,u,t),t=m,a=u;var w=t.updateQueue;if(w===null){var _=new Set;_.add(a),t.updateQueue=_}else w.add(a);break e}else{if(!(t&1)){Gh(s,u,t),sc();break e}a=Error(y(426))}}else if(K&&l.mode&1){var j=bh(o);if(j!==null){!(j.flags&65536)&&(j.flags|=256),qh(j,o,l,s,t),ju(vr(a,l));break e}}s=a=vr(a,l),te!==4&&(te=2),Zr===null?Zr=[s]:Zr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var d=Jp(s,a,t);jh(s,d);break e;case 1:l=a;var c=s.type,f=s.stateNode;if(!(s.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Jt===null||!Jt.has(f)))){s.flags|=65536,t&=-t,s.lanes|=t;var v=Zp(s,l,t);jh(s,v);break e}}s=s.return}while(s!==null)}yg(n)}catch(I){t=I,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(1)}function mg(){var e=io.current;return io.current=ro,e===null?ro:e}function sc(){(te===0||te===3||te===2)&&(te=4),ie===null||!(Nn&268435455)&&!(Uo&268435455)||zt(ie,ue)}function lo(e,t){var n=M;M|=2;var r=mg();(ie!==e||ue!==t)&&(wt=null,Sn(e,t));do try{s1();break}catch(i){gg(e,i)}while(1);if(Bu(),M=n,io.current=r,Z!==null)throw Error(y(261));return ie=null,ue=0,te}function s1(){for(;Z!==null;)vg(Z)}function o1(){for(;Z!==null&&!Oy();)vg(Z)}function vg(e){var t=_g(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?yg(e):Z=t,ec.current=null}function yg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Z0(n,t),n!==null){n.flags&=32767,Z=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,Z=null;return}}else if(n=J0(n,t,xe),n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);te===0&&(te=5)}function gn(e,t,n){var r=U,i=Ke.transition;try{Ke.transition=null,U=1,l1(e,t,n,r)}finally{Ke.transition=i,U=r}return null}function l1(e,t,n,r){do lr();while(Gt!==null);if(M&6)throw Error(y(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(By(e,s),e===ie&&(Z=ie=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ms||(ms=!0,Eg(Vs,function(){return lr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ke.transition,Ke.transition=null;var o=U;U=1;var l=M;M|=4,ec.current=null,t1(e,n),dg(n,e),A0(Ca),Ws=!!ka,Ca=ka=null,e.current=n,n1(n),Dy(),M=l,U=o,Ke.transition=s}else e.current=n;if(ms&&(ms=!1,Gt=e,oo=i),s=e.pendingLanes,s===0&&(Jt=null),My(n.stateNode),De(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(so)throw so=!1,e=Ga,Ga=null,e;return oo&1&&e.tag!==0&&lr(),s=e.pendingLanes,s&1?e===ba?ei++:(ei=0,ba=e):ei=0,un(),null}function lr(){if(Gt!==null){var e=Yf(oo),t=Ke.transition,n=U;try{if(Ke.transition=null,U=16>e?16:e,Gt===null)var r=!1;else{if(e=Gt,Gt=null,oo=0,M&6)throw Error(y(331));var i=M;for(M|=4,S=e.current;S!==null;){var s=S,o=s.child;if(S.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(S=u;S!==null;){var h=S;switch(h.tag){case 0:case 11:case 15:Jr(8,h,s)}var p=h.child;if(p!==null)p.return=h,S=p;else for(;S!==null;){h=S;var g=h.sibling,m=h.return;if(ug(h),h===u){S=null;break}if(g!==null){g.return=m,S=g;break}S=m}}}var w=s.alternate;if(w!==null){var _=w.child;if(_!==null){w.child=null;do{var j=_.sibling;_.sibling=null,_=j}while(_!==null)}}S=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,S=o;else e:for(;S!==null;){if(s=S,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Jr(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,S=d;break e}S=s.return}}var c=e.current;for(S=c;S!==null;){o=S;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,S=f;else e:for(o=c;S!==null;){if(l=S,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:$o(9,l)}}catch(I){X(l,l.return,I)}if(l===o){S=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,S=v;break e}S=l.return}}if(M=i,un(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(Po,e)}catch{}r=!0}return r}finally{U=n,Ke.transition=t}}return!1}function ld(e,t,n){t=vr(n,t),t=Jp(e,t,1),e=Yt(e,t,1),t=ke(),e!==null&&(xi(e,1,t),De(e,t))}function X(e,t,n){if(e.tag===3)ld(e,e,n);else for(;t!==null;){if(t.tag===3){ld(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jt===null||!Jt.has(r))){e=vr(n,e),e=Zp(t,e,1),t=Yt(t,e,1),e=ke(),t!==null&&(xi(t,1,e),De(t,e));break}}t=t.return}}function a1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,ie===e&&(ue&n)===n&&(te===4||te===3&&(ue&130023424)===ue&&500>Y()-nc?Sn(e,0):tc|=n),De(e,t)}function wg(e,t){t===0&&(e.mode&1?(t=os,os<<=1,!(os&130023424)&&(os=4194304)):t=1);var n=ke();e=Rt(e,t),e!==null&&(xi(e,t,n),De(e,n))}function u1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wg(e,n)}function c1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),wg(e,n)}var _g;_g=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ne.current)Re=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Re=!1,Y0(e,t,n);Re=!!(e.flags&131072)}else Re=!1,K&&t.flags&1048576&&Sp(t,Ys,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Os(e,t),e=t.pendingProps;var i=fr(t,_e.current);or(t,n),i=Xu(null,t,r,e,i,n);var s=Qu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oe(r)?(s=!0,Xs(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Wu(t),i.updater=xo,t.stateNode=i,i._reactInternals=t,Ma(t,r,e,n),t=Fa(null,t,r,!0,s,n)):(t.tag=0,K&&s&&Uu(t),Se(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Os(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=d1(r),e=Ze(r,e),i){case 0:t=Ua(null,t,r,e,n);break e;case 1:t=Yh(null,t,r,e,n);break e;case 11:t=Xh(null,t,r,e,n);break e;case 14:t=Qh(null,t,r,Ze(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ze(r,i),Ua(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ze(r,i),Yh(e,t,r,i,n);case 3:e:{if(rg(t),e===null)throw Error(y(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Ap(e,t),eo(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=vr(Error(y(423)),t),t=Jh(e,t,r,n,i);break e}else if(r!==i){i=vr(Error(y(424)),t),t=Jh(e,t,r,n,i);break e}else for(Me=Qt(t.stateNode.containerInfo.firstChild),Ue=t,K=!0,tt=null,n=Op(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pr(),r===i){t=Nt(e,t,n);break e}Se(e,t,r,n)}t=t.child}return t;case 5:return Dp(t),e===null&&Da(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Aa(r,i)?o=null:s!==null&&Aa(r,s)&&(t.flags|=32),ng(e,t),Se(e,t,o,n),t.child;case 6:return e===null&&Da(t),null;case 13:return ig(e,t,n);case 4:return Ku(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=gr(t,null,r,n):Se(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ze(r,i),Xh(e,t,r,i,n);case 7:return Se(e,t,t.pendingProps,n),t.child;case 8:return Se(e,t,t.pendingProps.children,n),t.child;case 12:return Se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,z(Js,r._currentValue),r._currentValue=o,s!==null)if(it(s.value,o)){if(s.children===i.children&&!Ne.current){t=Nt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Ct(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?a.next=a:(a.next=h.next,h.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),La(s.return,n,t),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(y(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),La(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Se(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,or(t,n),i=qe(i),r=r(i),t.flags|=1,Se(e,t,r,n),t.child;case 14:return r=t.type,i=Ze(r,t.pendingProps),i=Ze(r.type,i),Qh(e,t,r,i,n);case 15:return eg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ze(r,i),Os(e,t),t.tag=1,Oe(r)?(e=!0,Xs(t)):e=!1,or(t,n),Rp(t,r,i),Ma(t,r,i,n),Fa(null,t,r,!0,e,n);case 19:return sg(e,t,n);case 22:return tg(e,t,n)}throw Error(y(156,t.tag))};function Eg(e,t){return bf(e,t)}function h1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,t,n,r){return new h1(e,t,n,r)}function oc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function d1(e){if(typeof e=="function")return oc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ku)return 11;if(e===Cu)return 14}return 2}function en(e,t){var n=e.alternate;return n===null?(n=We(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function xs(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")oc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Hn:return Tn(n.children,i,s,t);case Tu:o=8,i|=8;break;case sa:return e=We(12,n,t,i|2),e.elementType=sa,e.lanes=s,e;case oa:return e=We(13,n,t,i),e.elementType=oa,e.lanes=s,e;case la:return e=We(19,n,t,i),e.elementType=la,e.lanes=s,e;case Nf:return Fo(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pf:o=10;break e;case Rf:o=9;break e;case ku:o=11;break e;case Cu:o=14;break e;case Ut:o=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=We(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Tn(e,t,n,r){return e=We(7,e,r,t),e.lanes=n,e}function Fo(e,t,n,r){return e=We(22,e,r,t),e.elementType=Nf,e.lanes=n,e.stateNode={isHidden:!1},e}function $l(e,t,n){return e=We(6,e,null,t),e.lanes=n,e}function Ul(e,t,n){return t=We(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function f1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vl(0),this.expirationTimes=vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function lc(e,t,n,r,i,s,o,l,a){return e=new f1(e,t,n,l,a),t===1?(t=1,s===!0&&(t|=8)):t=0,s=We(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wu(s),e}function p1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ig(e){if(!e)return on;e=e._reactInternals;e:{if(Un(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(Oe(n))return Ep(e,n,t)}return t}function Sg(e,t,n,r,i,s,o,l,a){return e=lc(n,r,!0,e,i,s,o,l,a),e.context=Ig(null),n=e.current,r=ke(),i=Zt(n),s=Ct(r,i),s.callback=t??null,Yt(n,s,i),e.current.lanes=i,xi(e,i,r),De(e,r),e}function jo(e,t,n,r){var i=t.current,s=ke(),o=Zt(i);return n=Ig(n),t.context===null?t.context=n:t.pendingContext=n,t=Ct(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Yt(i,t,o),e!==null&&(rt(e,i,o,s),Ps(e,i,o)),o}function ao(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ad(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ac(e,t){ad(e,t),(e=e.alternate)&&ad(e,t)}function g1(){return null}var Tg=typeof reportError=="function"?reportError:function(e){console.error(e)};function uc(e){this._internalRoot=e}zo.prototype.render=uc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));jo(e,t,null,null)};zo.prototype.unmount=uc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;On(function(){jo(null,e,null,null)}),t[Pt]=null}};function zo(e){this._internalRoot=e}zo.prototype.unstable_scheduleHydration=function(e){if(e){var t=ep();e={blockedOn:null,target:e,priority:t};for(var n=0;n<jt.length&&t!==0&&t<jt[n].priority;n++);jt.splice(n,0,e),n===0&&np(e)}};function cc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Bo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ud(){}function m1(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ao(o);s.call(u)}}var o=Sg(t,r,e,0,null,!1,!1,"",ud);return e._reactRootContainer=o,e[Pt]=o.current,di(e.nodeType===8?e.parentNode:e),On(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=ao(a);l.call(u)}}var a=lc(e,0,!1,null,null,!1,!1,"",ud);return e._reactRootContainer=a,e[Pt]=a.current,di(e.nodeType===8?e.parentNode:e),On(function(){jo(t,a,n,r)}),a}function Vo(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=ao(o);l.call(a)}}jo(t,o,e,i)}else o=m1(n,t,e,i,r);return ao(o)}Jf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Vr(t.pendingLanes);n!==0&&(Ru(t,n|1),De(t,Y()),!(M&6)&&(yr=Y()+500,un()))}break;case 13:On(function(){var r=Rt(e,1);if(r!==null){var i=ke();rt(r,e,1,i)}}),ac(e,1)}};Nu=function(e){if(e.tag===13){var t=Rt(e,134217728);if(t!==null){var n=ke();rt(t,e,134217728,n)}ac(e,134217728)}};Zf=function(e){if(e.tag===13){var t=Zt(e),n=Rt(e,t);if(n!==null){var r=ke();rt(n,e,t,r)}ac(e,t)}};ep=function(){return U};tp=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};va=function(e,t,n){switch(t){case"input":if(ca(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Do(r);if(!i)throw Error(y(90));Df(r),ca(r,i)}}}break;case"textarea":xf(e,n);break;case"select":t=n.value,t!=null&&nr(e,!!n.multiple,t,!1)}};Bf=rc;Vf=On;var v1={usingClientEntryPoint:!1,Events:[$i,bn,Do,jf,zf,rc]},Ur={findFiberByHostInstance:vn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},y1={bundleType:Ur.bundleType,version:Ur.version,rendererPackageName:Ur.rendererPackageName,rendererConfig:Ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Kf(e),e===null?null:e.stateNode},findFiberByHostInstance:Ur.findFiberByHostInstance||g1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vs.isDisabled&&vs.supportsFiber)try{Po=vs.inject(y1),ft=vs}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=v1;je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cc(t))throw Error(y(200));return p1(e,t,null,n)};je.createRoot=function(e,t){if(!cc(e))throw Error(y(299));var n=!1,r="",i=Tg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=lc(e,1,!1,null,null,n,!1,r,i),e[Pt]=t.current,di(e.nodeType===8?e.parentNode:e),new uc(t)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Kf(t),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return On(e)};je.hydrate=function(e,t,n){if(!Bo(t))throw Error(y(200));return Vo(null,e,t,!0,n)};je.hydrateRoot=function(e,t,n){if(!cc(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Tg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Sg(t,null,e,1,n??null,i,!1,s,o),e[Pt]=t.current,di(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new zo(t)};je.render=function(e,t,n){if(!Bo(t))throw Error(y(200));return Vo(null,e,t,!1,n)};je.unmountComponentAtNode=function(e){if(!Bo(e))throw Error(y(40));return e._reactRootContainer?(On(function(){Vo(null,null,e,!1,function(){e._reactRootContainer=null,e[Pt]=null})}),!0):!1};je.unstable_batchedUpdates=rc;je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Bo(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return Vo(e,t,n,!1,r)};je.version="18.2.0-next-9e3b772b8-20220608";function kg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kg)}catch(e){console.error(e)}}kg(),Sf.exports=je;var w1=Sf.exports,cd=w1;ra.createRoot=cd.createRoot,ra.hydrateRoot=cd.hydrateRoot;const _1=""+new URL("react-35ef61ed.svg",import.meta.url).href,E1=""+new URL("../vite.svg",import.meta.url).href;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},I1=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],l=e[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(a&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Ag={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,l=o?e[i+1]:0,a=i+2<e.length,u=a?e[i+2]:0,h=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|u>>6,m=u&63;a||(m=64,o||(g=64)),r.push(n[h],n[p],n[g],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Cg(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):I1(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],l=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const p=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||l==null||u==null||p==null)throw new S1;const g=s<<2|l>>4;if(r.push(g),u!==64){const m=l<<4&240|u>>2;if(r.push(m),p!==64){const w=u<<6&192|p;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class S1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const T1=function(e){const t=Cg(e);return Ag.encodeByteArray(t,!0)},uo=function(e){return T1(e).replace(/\./g,"")},Pg=function(e){try{return Ag.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1=()=>k1().__FIREBASE_DEFAULTS__,A1=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},P1=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Pg(e[1]);return t&&JSON.parse(t)},hc=()=>{try{return C1()||A1()||P1()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Rg=e=>{var t,n;return(n=(t=hc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},R1=e=>{const t=Rg(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Ng=()=>{var e;return(e=hc())===null||e===void 0?void 0:e.config},Og=e=>{var t;return(t=hc())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),l="";return[uo(JSON.stringify(n)),uo(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function D1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function Dg(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function L1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function x1(){const e=Ee();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Lg(){try{return typeof indexedDB=="object"}catch{return!1}}function xg(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function M1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1="FirebaseError";class ot extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=$1,Object.setPrototypeOf(this,ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fn.prototype.create)}}class Fn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?U1(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ot(i,l,r)}}function U1(e,t){return e.replace(F1,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const F1=/\{\$([^}]+)}/g;function j1(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function co(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(hd(s)&&hd(o)){if(!co(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function hd(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function z1(e,t){const n=new B1(e,t);return n.subscribe.bind(n)}class B1{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");V1(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Fl),i.error===void 0&&(i.error=Fl),i.complete===void 0&&(i.complete=Fl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function V1(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Fl(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1=1e3,W1=2,K1=4*60*60*1e3,G1=.5;function dd(e,t=H1,n=W1){const r=t*Math.pow(n,e),i=Math.round(G1*r*(Math.random()-.5)*2);return Math.min(K1,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(e){return e&&e._delegate?e._delegate:e}class st{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new N1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(X1(t))try{this.getOrInitializeService({instanceIdentifier:mn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=mn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=mn){return this.instances.has(t)}getOptions(t=mn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:q1(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=mn){return this.component?this.component.multipleInstances?t:mn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function q1(e){return e===mn?void 0:e}function X1(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new b1(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})($||($={}));const Y1={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},J1=$.INFO,Z1={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},ew=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Z1[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ho{constructor(t){this.name=t,this._logLevel=J1,this._logHandler=ew,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Y1[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}const tw=(e,t)=>t.some(n=>e instanceof n);let fd,pd;function nw(){return fd||(fd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rw(){return pd||(pd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mg=new WeakMap,Qa=new WeakMap,$g=new WeakMap,jl=new WeakMap,dc=new WeakMap;function iw(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(tn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Mg.set(n,e)}).catch(()=>{}),dc.set(t,e),t}function sw(e){if(Qa.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Qa.set(e,t)}let Ya={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Qa.get(e);if(t==="objectStoreNames")return e.objectStoreNames||$g.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ow(e){Ya=e(Ya)}function lw(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(zl(this),t,...n);return $g.set(r,t.sort?t.sort():[t]),tn(r)}:rw().includes(e)?function(...t){return e.apply(zl(this),t),tn(Mg.get(this))}:function(...t){return tn(e.apply(zl(this),t))}}function aw(e){return typeof e=="function"?lw(e):(e instanceof IDBTransaction&&sw(e),tw(e,nw())?new Proxy(e,Ya):e)}function tn(e){if(e instanceof IDBRequest)return iw(e);if(jl.has(e))return jl.get(e);const t=aw(e);return t!==e&&(jl.set(e,t),dc.set(t,e)),t}const zl=e=>dc.get(e);function uw(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),l=tn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(tn(o.result),a.oldVersion,a.newVersion,tn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const cw=["get","getKey","getAll","getAllKeys","count"],hw=["put","add","delete","clear"],Bl=new Map;function gd(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Bl.get(t))return Bl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=hw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||cw.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Bl.set(t,s),s}ow(e=>({...e,get:(t,n,r)=>gd(t,n)||e.get(t,n,r),has:(t,n)=>!!gd(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function fw(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ja="@firebase/app",md="0.9.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new Ho("@firebase/app"),pw="@firebase/app-compat",gw="@firebase/analytics-compat",mw="@firebase/analytics",vw="@firebase/app-check-compat",yw="@firebase/app-check",ww="@firebase/auth",_w="@firebase/auth-compat",Ew="@firebase/database",Iw="@firebase/database-compat",Sw="@firebase/functions",Tw="@firebase/functions-compat",kw="@firebase/installations",Cw="@firebase/installations-compat",Aw="@firebase/messaging",Pw="@firebase/messaging-compat",Rw="@firebase/performance",Nw="@firebase/performance-compat",Ow="@firebase/remote-config",Dw="@firebase/remote-config-compat",Lw="@firebase/storage",xw="@firebase/storage-compat",Mw="@firebase/firestore",$w="@firebase/firestore-compat",Uw="firebase",Fw="10.3.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za="[DEFAULT]",jw={[Ja]:"fire-core",[pw]:"fire-core-compat",[mw]:"fire-analytics",[gw]:"fire-analytics-compat",[yw]:"fire-app-check",[vw]:"fire-app-check-compat",[ww]:"fire-auth",[_w]:"fire-auth-compat",[Ew]:"fire-rtdb",[Iw]:"fire-rtdb-compat",[Sw]:"fire-fn",[Tw]:"fire-fn-compat",[kw]:"fire-iid",[Cw]:"fire-iid-compat",[Aw]:"fire-fcm",[Pw]:"fire-fcm-compat",[Rw]:"fire-perf",[Nw]:"fire-perf-compat",[Ow]:"fire-rc",[Dw]:"fire-rc-compat",[Lw]:"fire-gcs",[xw]:"fire-gcs-compat",[Mw]:"fire-fst",[$w]:"fire-fst-compat","fire-js":"fire-js",[Uw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=new Map,eu=new Map;function zw(e,t){try{e.container.addComponent(t)}catch(n){Dn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function vt(e){const t=e.name;if(eu.has(t))return Dn.debug(`There were multiple attempts to register component ${t}.`),!1;eu.set(t,e);for(const n of ho.values())zw(n,e);return!0}function ji(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},nn=new Fn("app","Firebase",Bw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new st("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw nn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=Fw;function Ug(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Za,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw nn.create("bad-app-name",{appName:String(i)});if(n||(n=Ng()),!n)throw nn.create("no-options");const s=ho.get(i);if(s){if(co(n,s.options)&&co(r,s.config))return s;throw nn.create("duplicate-app",{appName:i})}const o=new Q1(i);for(const a of eu.values())o.addComponent(a);const l=new Vw(n,r,o);return ho.set(i,l),l}function Fg(e=Za){const t=ho.get(e);if(!t&&e===Za&&Ng())return Ug();if(!t)throw nn.create("no-app",{appName:e});return t}function Ge(e,t,n){var r;let i=(r=jw[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${t}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Dn.warn(l.join(" "));return}vt(new st(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw="firebase-heartbeat-database",Ww=1,Ei="firebase-heartbeat-store";let Vl=null;function jg(){return Vl||(Vl=uw(Hw,Ww,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ei)}}}).catch(e=>{throw nn.create("idb-open",{originalErrorMessage:e.message})})),Vl}async function Kw(e){try{return await(await jg()).transaction(Ei).objectStore(Ei).get(zg(e))}catch(t){if(t instanceof ot)Dn.warn(t.message);else{const n=nn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Dn.warn(n.message)}}}async function vd(e,t){try{const r=(await jg()).transaction(Ei,"readwrite");await r.objectStore(Ei).put(t,zg(e)),await r.done}catch(n){if(n instanceof ot)Dn.warn(n.message);else{const r=nn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dn.warn(r.message)}}}function zg(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=1024,bw=30*24*60*60*1e3;class qw{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Qw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=yd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=bw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=yd(),{heartbeatsToSend:n,unsentEntries:r}=Xw(this._heartbeatsCache.heartbeats),i=uo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function yd(){return new Date().toISOString().substring(0,10)}function Xw(e,t=Gw){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),wd(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),wd(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Qw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lg()?xg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Kw(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return vd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return vd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function wd(e){return uo(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(e){vt(new st("platform-logger",t=>new dw(t),"PRIVATE")),vt(new st("heartbeat",t=>new qw(t),"PRIVATE")),Ge(Ja,md,e),Ge(Ja,md,"esm2017"),Ge("fire-js","")}Yw("");var Jw="firebase",Zw="10.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ge(Jw,Zw,"app");const e_=(e,t)=>t.some(n=>e instanceof n);let _d,Ed;function t_(){return _d||(_d=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function n_(){return Ed||(Ed=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bg=new WeakMap,tu=new WeakMap,Vg=new WeakMap,Hl=new WeakMap,fc=new WeakMap;function r_(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(rn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Bg.set(n,e)}).catch(()=>{}),fc.set(t,e),t}function i_(e){if(tu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});tu.set(e,t)}let nu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return tu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Vg.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function s_(e){nu=e(nu)}function o_(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Wl(this),t,...n);return Vg.set(r,t.sort?t.sort():[t]),rn(r)}:n_().includes(e)?function(...t){return e.apply(Wl(this),t),rn(Bg.get(this))}:function(...t){return rn(e.apply(Wl(this),t))}}function l_(e){return typeof e=="function"?o_(e):(e instanceof IDBTransaction&&i_(e),e_(e,t_())?new Proxy(e,nu):e)}function rn(e){if(e instanceof IDBRequest)return r_(e);if(Hl.has(e))return Hl.get(e);const t=l_(e);return t!==e&&(Hl.set(e,t),fc.set(t,e)),t}const Wl=e=>fc.get(e);function a_(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),l=rn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(rn(o.result),a.oldVersion,a.newVersion,rn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const u_=["get","getKey","getAll","getAllKeys","count"],c_=["put","add","delete","clear"],Kl=new Map;function Id(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Kl.get(t))return Kl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=c_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||u_.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Kl.set(t,s),s}s_(e=>({...e,get:(t,n,r)=>Id(t,n)||e.get(t,n,r),has:(t,n)=>!!Id(t,n)||e.has(t,n)}));const Hg="@firebase/installations",pc="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=1e4,Kg=`w:${pc}`,Gg="FIS_v2",h_="https://firebaseinstallations.googleapis.com/v1",d_=60*60*1e3,f_="installations",p_="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ln=new Fn(f_,p_,g_);function bg(e){return e instanceof ot&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg({projectId:e}){return`${h_}/projects/${e}/installations`}function Xg(e){return{token:e.token,requestStatus:2,expiresIn:v_(e.expiresIn),creationTime:Date.now()}}async function Qg(e,t){const r=(await t.json()).error;return Ln.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Yg({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function m_(e,{refreshToken:t}){const n=Yg(e);return n.append("Authorization",y_(t)),n}async function Jg(e){const t=await e();return t.status>=500&&t.status<600?e():t}function v_(e){return Number(e.replace("s","000"))}function y_(e){return`${Gg} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w_({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=qg(e),i=Yg(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Gg,appId:e.appId,sdkVersion:Kg},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await Jg(()=>fetch(r,l));if(a.ok){const u=await a.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Xg(u.authToken)}}else throw await Qg("Create Installation",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=/^[cdef][\w-]{21}$/,ru="";function I_(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=S_(e);return E_.test(n)?n:ru}catch{return ru}}function S_(e){return __(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=new Map;function tm(e,t){const n=Wo(e);nm(n,t),T_(n,t)}function nm(e,t){const n=em.get(e);if(n)for(const r of n)r(t)}function T_(e,t){const n=k_();n&&n.postMessage({key:e,fid:t}),C_()}let _n=null;function k_(){return!_n&&"BroadcastChannel"in self&&(_n=new BroadcastChannel("[Firebase] FID Change"),_n.onmessage=e=>{nm(e.data.key,e.data.fid)}),_n}function C_(){em.size===0&&_n&&(_n.close(),_n=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_="firebase-installations-database",P_=1,xn="firebase-installations-store";let Gl=null;function gc(){return Gl||(Gl=a_(A_,P_,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(xn)}}})),Gl}async function fo(e,t){const n=Wo(e),i=(await gc()).transaction(xn,"readwrite"),s=i.objectStore(xn),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&tm(e,t.fid),t}async function rm(e){const t=Wo(e),r=(await gc()).transaction(xn,"readwrite");await r.objectStore(xn).delete(t),await r.done}async function Ko(e,t){const n=Wo(e),i=(await gc()).transaction(xn,"readwrite"),s=i.objectStore(xn),o=await s.get(n),l=t(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&tm(e,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mc(e){let t;const n=await Ko(e.appConfig,r=>{const i=R_(r),s=N_(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===ru?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function R_(e){const t=e||{fid:I_(),registrationStatus:0};return im(t)}function N_(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ln.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=O_(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:D_(e)}:{installationEntry:t}}async function O_(e,t){try{const n=await w_(e,t);return fo(e.appConfig,n)}catch(n){throw bg(n)&&n.customData.serverCode===409?await rm(e.appConfig):await fo(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function D_(e){let t=await Sd(e.appConfig);for(;t.registrationStatus===1;)await Zg(100),t=await Sd(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await mc(e);return r||n}return t}function Sd(e){return Ko(e,t=>{if(!t)throw Ln.create("installation-not-found");return im(t)})}function im(e){return L_(e)?{fid:e.fid,registrationStatus:0}:e}function L_(e){return e.registrationStatus===1&&e.registrationTime+Wg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x_({appConfig:e,heartbeatServiceProvider:t},n){const r=M_(e,n),i=m_(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Kg,appId:e.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await Jg(()=>fetch(r,l));if(a.ok){const u=await a.json();return Xg(u)}else throw await Qg("Generate Auth Token",a)}function M_(e,{fid:t}){return`${qg(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vc(e,t=!1){let n;const r=await Ko(e.appConfig,s=>{if(!sm(s))throw Ln.create("not-registered");const o=s.authToken;if(!t&&F_(o))return s;if(o.requestStatus===1)return n=$_(e,t),s;{if(!navigator.onLine)throw Ln.create("app-offline");const l=z_(s);return n=U_(e,l),l}});return n?await n:r.authToken}async function $_(e,t){let n=await Td(e.appConfig);for(;n.authToken.requestStatus===1;)await Zg(100),n=await Td(e.appConfig);const r=n.authToken;return r.requestStatus===0?vc(e,t):r}function Td(e){return Ko(e,t=>{if(!sm(t))throw Ln.create("not-registered");const n=t.authToken;return B_(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function U_(e,t){try{const n=await x_(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await fo(e.appConfig,r),n}catch(n){if(bg(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await rm(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await fo(e.appConfig,r)}throw n}}function sm(e){return e!==void 0&&e.registrationStatus===2}function F_(e){return e.requestStatus===2&&!j_(e)}function j_(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+d_}function z_(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function B_(e){return e.requestStatus===1&&e.requestTime+Wg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V_(e){const t=e,{installationEntry:n,registrationPromise:r}=await mc(t);return r?r.catch(console.error):vc(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H_(e,t=!1){const n=e;return await W_(n),(await vc(n,t)).token}async function W_(e){const{registrationPromise:t}=await mc(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(e){if(!e||!e.options)throw bl("App Configuration");if(!e.name)throw bl("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw bl(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function bl(e){return Ln.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om="installations",G_="installations-internal",b_=e=>{const t=e.getProvider("app").getImmediate(),n=K_(t),r=ji(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},q_=e=>{const t=e.getProvider("app").getImmediate(),n=ji(t,om).getImmediate();return{getId:()=>V_(n),getToken:i=>H_(n,i)}};function X_(){vt(new st(om,b_,"PUBLIC")),vt(new st(G_,q_,"PRIVATE"))}X_();Ge(Hg,pc);Ge(Hg,pc,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd="analytics",Q_="firebase_id",Y_="origin",J_=60*1e3,Z_="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",yc="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le=new Ho("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},be=new Fn("analytics","Analytics",eE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(e){if(!e.startsWith(yc)){const t=be.create("invalid-gtag-resource",{gtagURL:e});return Le.warn(t.message),""}return e}function lm(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function nE(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function rE(e,t){const n=nE("firebase-js-sdk-policy",{createScriptURL:tE}),r=document.createElement("script"),i=`${yc}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function iE(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function sE(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const a=(await lm(n)).find(u=>u.measurementId===i);a&&await t[a.appId]}}catch(l){Le.error(l)}e("config",i,s)}async function oE(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await lm(n);for(const a of o){const u=l.find(p=>p.measurementId===a),h=u&&t[u.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){Le.error(s)}}function lE(e,t,n,r){async function i(s,...o){try{if(s==="event"){const[l,a]=o;await oE(e,t,n,l,a)}else if(s==="config"){const[l,a]=o;await sE(e,t,n,r,l,a)}else if(s==="consent"){const[l]=o;e("consent","update",l)}else if(s==="get"){const[l,a,u]=o;e("get",l,a,u)}else if(s==="set"){const[l]=o;e("set",l)}else e(s,...o)}catch(l){Le.error(l)}}return i}function aE(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=lE(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function uE(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(yc)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE=30,hE=1e3;class dE{constructor(t={},n=hE){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const am=new dE;function fE(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function pE(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:fE(r)},s=Z_.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const a=await o.json();!((t=a.error)===null||t===void 0)&&t.message&&(l=a.error.message)}catch{}throw be.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function gE(e,t=am,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw be.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw be.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new yE;return setTimeout(async()=>{l.abort()},n!==void 0?n:J_),um({appId:r,apiKey:i,measurementId:s},o,l,t)}async function um(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=am){var s;const{appId:o,measurementId:l}=e;try{await mE(r,t)}catch(a){if(l)return Le.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:o,measurementId:l};throw a}try{const a=await pE(e);return i.deleteThrottleMetadata(o),a}catch(a){const u=a;if(!vE(u)){if(i.deleteThrottleMetadata(o),l)return Le.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw a}const h=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?dd(n,i.intervalMillis,cE):dd(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(o,p),Le.debug(`Calling attemptFetch again in ${h} millis`),um(e,p,r,i)}}function mE(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(be.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function vE(e){if(!(e instanceof ot)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class yE{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function wE(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _E(){if(Lg())try{await xg()}catch(e){return Le.warn(be.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Le.warn(be.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function EE(e,t,n,r,i,s,o){var l;const a=gE(e);a.then(m=>{n[m.measurementId]=m.appId,e.options.measurementId&&m.measurementId!==e.options.measurementId&&Le.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Le.error(m)),t.push(a);const u=_E().then(m=>{if(m)return r.getId()}),[h,p]=await Promise.all([a,u]);uE(s)||rE(s,h.measurementId),i("js",new Date);const g=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return g[Y_]="firebase",g.update=!0,p!=null&&(g[Q_]=p),i("config",h.measurementId,g),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(t){this.app=t}_delete(){return delete ti[this.app.options.appId],Promise.resolve()}}let ti={},Cd=[];const Ad={};let ql="dataLayer",SE="gtag",Pd,cm,Rd=!1;function TE(){const e=[];if(Dg()&&e.push("This is a browser extension environment."),M1()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=be.create("invalid-analytics-context",{errorInfo:t});Le.warn(n.message)}}function kE(e,t,n){TE();const r=e.options.appId;if(!r)throw be.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Le.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw be.create("no-api-key");if(ti[r]!=null)throw be.create("already-exists",{id:r});if(!Rd){iE(ql);const{wrappedGtag:s,gtagCore:o}=aE(ti,Cd,Ad,ql,SE);cm=s,Pd=o,Rd=!0}return ti[r]=EE(e,Cd,Ad,t,Pd,ql,n),new IE(e)}function CE(e,t,n,r){e=jn(e),wE(cm,ti[e.app.options.appId],t,n,r).catch(i=>Le.error(i))}const Nd="@firebase/analytics",Od="0.10.0";function AE(){vt(new st(kd,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return kE(r,i,n)},"PUBLIC")),vt(new st("analytics-internal",e,"PRIVATE")),Ge(Nd,Od),Ge(Nd,Od,"esm2017");function e(t){try{const n=t.getProvider(kd).getImmediate();return{logEvent:(r,i,s)=>CE(n,r,i,s)}}catch(n){throw be.create("interop-component-reg-failed",{reason:n})}}}AE();function wc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function hm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const PE=hm,dm=new Fn("auth","Firebase",hm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=new Ho("@firebase/auth");function RE(e,...t){po.logLevel<=$.WARN&&po.warn(`Auth (${Tr}): ${e}`,...t)}function Ms(e,...t){po.logLevel<=$.ERROR&&po.error(`Auth (${Tr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(e,...t){throw _c(e,...t)}function gt(e,...t){return _c(e,...t)}function NE(e,t,n){const r=Object.assign(Object.assign({},PE()),{[t]:n});return new Fn("auth","Firebase",r).create(t,{appName:e.name})}function _c(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return dm.create(e,...t)}function R(e,t,...n){if(!e)throw _c(t,...n)}function St(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ms(t),new Error(t)}function Dt(e,t){e||St(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function OE(){return Dd()==="http:"||Dd()==="https:"}function Dd(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(OE()||Dg()||"connection"in navigator)?navigator.onLine:!0}function LE(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(t,n){this.shortDelay=t,this.longDelay=n,Dt(n>t,"Short delay should be less than long delay!"),this.isMobile=D1()||L1()}get(){return DE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(e,t){Dt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;St("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;St("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;St("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=new zi(3e4,6e4);function pm(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Bi(e,t,n,r,i={}){return gm(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const l=Fi(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),fm.fetch()(mm(e,e.config.apiHost,n,l),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},s))})}async function gm(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},xE),t);try{const i=new UE(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ys(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw ys(e,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw ys(e,"email-already-in-use",o);if(a==="USER_DISABLED")throw ys(e,"user-disabled",o);const h=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw NE(e,h,u);Ot(e,h)}}catch(i){if(i instanceof ot)throw i;Ot(e,"network-request-failed",{message:String(i)})}}async function $E(e,t,n,r,i={}){const s=await Bi(e,t,n,r,i);return"mfaPendingCredential"in s&&Ot(e,"multi-factor-auth-required",{_serverResponse:s}),s}function mm(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Ec(e.config,i):`${e.config.apiScheme}://${i}`}class UE{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gt(this.auth,"network-request-failed")),ME.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ys(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=gt(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FE(e,t){return Bi(e,"POST","/v1/accounts:delete",t)}async function jE(e,t){return Bi(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function zE(e,t=!1){const n=jn(e),r=await n.getIdToken(t),i=Ic(r);R(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ni(Xl(i.auth_time)),issuedAtTime:ni(Xl(i.iat)),expirationTime:ni(Xl(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xl(e){return Number(e)*1e3}function Ic(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ms("JWT malformed, contained fewer than 3 sections"),null;try{const i=Pg(n);return i?JSON.parse(i):(Ms("Failed to decode base64 JWT payload"),null)}catch(i){return Ms("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function BE(e){const t=Ic(e);return R(t,"internal-error"),R(typeof t.exp<"u","internal-error"),R(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ii(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof ot&&VE(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function VE({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ni(this.lastLoginAt),this.creationTime=ni(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Ii(e,jE(n,{idToken:r}));R(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?GE(s.providerUserInfo):[],l=KE(e.providerData,o),a=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(l!=null&&l.length),h=a?u:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new vm(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(e,p)}async function WE(e){const t=jn(e);await go(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function KE(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function GE(e){return e.map(t=>{var{providerId:n}=t,r=wc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bE(e,t){const n=await gm(e,{},async()=>{const r=Fi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=mm(e,i,"/v1/token",`key=${s}`),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",fm.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){R(t.idToken,"internal-error"),R(typeof t.idToken<"u","internal-error"),R(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):BE(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return R(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await bE(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Si;return r&&(R(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(R(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(R(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Si,this.toJSON())}_performRefresh(){return St("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(e,t){R(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class kn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=wc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new HE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Ii(this,this.stsTokenManager.getToken(this.auth,t));return R(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return zE(this,t)}reload(){return WE(this)}_assign(t){this!==t&&(R(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new kn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await go(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Ii(this,FE(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,l,a,u,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(l=n.tenantId)!==null&&l!==void 0?l:void 0,j=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,d=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:f,emailVerified:v,isAnonymous:I,providerData:k,stsTokenManager:C}=n;R(f&&C,t,"internal-error");const A=Si.fromJSON(this.name,C);R(typeof f=="string",t,"internal-error"),$t(p,t.name),$t(g,t.name),R(typeof v=="boolean",t,"internal-error"),R(typeof I=="boolean",t,"internal-error"),$t(m,t.name),$t(w,t.name),$t(_,t.name),$t(j,t.name),$t(d,t.name),$t(c,t.name);const B=new kn({uid:f,auth:t,email:g,emailVerified:v,displayName:p,isAnonymous:I,photoURL:w,phoneNumber:m,tenantId:_,stsTokenManager:A,createdAt:d,lastLoginAt:c});return k&&Array.isArray(k)&&(B.providerData=k.map(D=>Object.assign({},D))),j&&(B._redirectEventId=j),B}static async _fromIdTokenResponse(t,n,r=!1){const i=new Si;i.updateFromServerResponse(n);const s=new kn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await go(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld=new Map;function Tt(e){Dt(e instanceof Function,"Expected a class definition");let t=Ld.get(e);return t?(Dt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ld.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}ym.type="NONE";const xd=ym;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(e,t,n){return`firebase:${e}:${t}:${n}`}class ar{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=$s(this.userKey,i.apiKey,s),this.fullPersistenceKey=$s("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?kn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new ar(Tt(xd),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Tt(xd);const o=$s(r,t.config.apiKey,t.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){const p=kn._fromJSON(t,h);u!==s&&(l=p),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new ar(s,t,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ar(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Em(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(wm(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Sm(t))return"Blackberry";if(Tm(t))return"Webos";if(Sc(t))return"Safari";if((t.includes("chrome/")||_m(t))&&!t.includes("edge/"))return"Chrome";if(Im(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wm(e=Ee()){return/firefox\//i.test(e)}function Sc(e=Ee()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function _m(e=Ee()){return/crios\//i.test(e)}function Em(e=Ee()){return/iemobile/i.test(e)}function Im(e=Ee()){return/android/i.test(e)}function Sm(e=Ee()){return/blackberry/i.test(e)}function Tm(e=Ee()){return/webos/i.test(e)}function Go(e=Ee()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function qE(e=Ee()){var t;return Go(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function XE(){return x1()&&document.documentMode===10}function km(e=Ee()){return Go(e)||Im(e)||Tm(e)||Sm(e)||/windows phone/i.test(e)||Em(e)}function QE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(e,t=[]){let n;switch(e){case"Browser":n=Md(Ee());break;case"Worker":n=`${Md(Ee())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Tr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,l)=>{try{const a=t(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JE(e,t={}){return Bi(e,"GET","/v2/passwordPolicy",pm(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=6;class eI{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ZE,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,a),this.validatePasswordCharacterOptions(t,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $d(this),this.idTokenSubscription=new $d(this),this.beforeStateQueue=new YE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Tt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ar.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(t);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await go(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=LE()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?jn(t):null;return n&&R(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&R(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Tt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await JE(this),n=new eI(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Fn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Tt(t)||this._popupRedirectResolver;R(n,this,"argument-error"),this.redirectPersistenceManager=await ar.create(this,[Tt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(R(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=t.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=t.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Cm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&RE(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Tc(e){return jn(e)}class $d{constructor(t){this.auth=t,this.observer=null,this.addObserver=z1(n=>this.observer=n)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function rI(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=gt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",nI().appendChild(r)})}function iI(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(e,t){const n=ji(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(co(s,t??{}))return i;Ot(i,"already-initialized")}return n.initialize({options:t})}function oI(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Tt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function lI(e,t,n){const r=Tc(e);R(r._canInitEmulator,r,"emulator-config-failed"),R(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Am(t),{host:o,port:l}=aI(t),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||uI()}function Am(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function aI(e){const t=Am(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ud(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ud(o)}}}function Ud(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function uI(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return St("not implemented")}_getIdTokenResponse(t){return St("not implemented")}_linkToIdToken(t,n){return St("not implemented")}_getReauthenticationResolver(t){return St("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ur(e,t){return $E(e,"POST","/v1/accounts:signInWithIdp",pm(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI="http://localhost";class Mn extends Pm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Mn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=wc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Mn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return ur(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,ur(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,ur(t,n)}buildRequest(){const t={requestUri:cI,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Fi(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi extends Rm{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends Vi{constructor(){super("facebook.com")}static credential(t){return Mn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Bt.credentialFromTaggedObject(t)}static credentialFromError(t){return Bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Bt.credential(t.oauthAccessToken)}catch{return null}}}Bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends Vi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Mn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Vt.credentialFromTaggedObject(t)}static credentialFromError(t){return Vt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Vt.credential(n,r)}catch{return null}}}Vt.GOOGLE_SIGN_IN_METHOD="google.com";Vt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends Vi{constructor(){super("github.com")}static credential(t){return Mn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ht.credentialFromTaggedObject(t)}static credentialFromError(t){return Ht.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ht.credential(t.oauthAccessToken)}catch{return null}}}Ht.GITHUB_SIGN_IN_METHOD="github.com";Ht.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends Vi{constructor(){super("twitter.com")}static credential(t,n){return Mn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Wt.credentialFromTaggedObject(t)}static credentialFromError(t){return Wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Wt.credential(n,r)}catch{return null}}}Wt.TWITTER_SIGN_IN_METHOD="twitter.com";Wt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await kn._fromIdTokenResponse(t,r,i),o=Fd(r);return new wr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Fd(r);return new wr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Fd(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo extends ot{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,mo.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new mo(t,n,r,i)}}function Nm(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?mo._fromErrorAndOperation(e,s,t,r):s})}async function hI(e,t,n=!1){const r=await Ii(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return wr._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dI(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Ii(e,Nm(r,i,t,e),n);R(s.idToken,r,"internal-error");const o=Ic(s.idToken);R(o,r,"internal-error");const{sub:l}=o;return R(e.uid===l,r,"user-mismatch"),wr._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ot(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fI(e,t,n=!1){const r="signIn",i=await Nm(e,r,t),s=await wr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function pI(e,t,n,r){return jn(e).onIdTokenChanged(t,n,r)}function gI(e,t,n){return jn(e).beforeAuthStateChanged(t,n)}const vo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vo,"1"),this.storage.removeItem(vo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(){const e=Ee();return Sc(e)||Go(e)}const vI=1e3,yI=10;class Dm extends Om{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=mI()&&QE(),this.fallbackToPolling=km(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);XE()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,yI):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},vI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Dm.type="LOCAL";const wI=Dm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm extends Om{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Lm.type="SESSION";const xm=Lm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new bo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await _I(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=kc("",20);i.port1.start();const h=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(h),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){return window}function II(e){mt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(){return typeof mt().WorkerGlobalScope<"u"&&typeof mt().importScripts=="function"}async function SI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TI(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function kI(){return Mm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m="firebaseLocalStorageDb",CI=1,yo="firebaseLocalStorage",Um="fbase_key";class Hi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qo(e,t){return e.transaction([yo],t?"readwrite":"readonly").objectStore(yo)}function AI(){const e=indexedDB.deleteDatabase($m);return new Hi(e).toPromise()}function su(){const e=indexedDB.open($m,CI);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(yo,{keyPath:Um})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(yo)?t(r):(r.close(),await AI(),t(await su()))})})}async function jd(e,t,n){const r=qo(e,!0).put({[Um]:t,value:n});return new Hi(r).toPromise()}async function PI(e,t){const n=qo(e,!1).get(t),r=await new Hi(n).toPromise();return r===void 0?null:r.value}function zd(e,t){const n=qo(e,!0).delete(t);return new Hi(n).toPromise()}const RI=800,NI=3;class Fm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await su(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>NI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bo._getInstance(kI()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await SI(),!this.activeServiceWorker)return;this.sender=new EI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||TI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await su();return await jd(t,vo,"1"),await zd(t,vo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jd(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>PI(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>zd(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=qo(i,!1).getAll();return new Hi(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fm.type="LOCAL";const OI=Fm;new zi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(e,t){return t?Tt(t):(R(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc extends Pm{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ur(t,this._buildIdpRequest())}_linkToIdToken(t,n){return ur(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return ur(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function LI(e){return fI(e.auth,new Cc(e),e.bypassAuthState)}function xI(e){const{auth:t,user:n}=e;return R(n,t,"internal-error"),dI(n,new Cc(e),e.bypassAuthState)}async function MI(e){const{auth:t,user:n}=e;return R(n,t,"internal-error"),hI(n,new Cc(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=t;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return LI;case"linkViaPopup":case"linkViaRedirect":return MI;case"reauthViaPopup":case"reauthViaRedirect":return xI;default:Ot(this.auth,"internal-error")}}resolve(t){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=new zi(2e3,1e4);class er extends jm{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,er.currentPopupAction&&er.currentPopupAction.cancel(),er.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return R(t,this.auth,"internal-error"),t}async onExecution(){Dt(this.filter.length===1,"Popup operations only handle one event");const t=kc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,er.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,$I.get())};t()}}er.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI="pendingRedirect",Us=new Map;class FI extends jm{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Us.get(this.auth._key());if(!t){try{const r=await jI(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Us.set(this.auth._key(),t)}return this.bypassAuthState||Us.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jI(e,t){const n=VI(t),r=BI(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function zI(e,t){Us.set(e._key(),t)}function BI(e){return Tt(e._redirectPersistence)}function VI(e){return $s(UI,e.config.apiKey,e.name)}async function HI(e,t,n=!1){const r=Tc(e),i=DI(r,t),o=await new FI(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI=10*60*1e3;class KI{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!GI(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!zm(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(gt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=WI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bd(t))}saveEventToCache(t){this.cachedEventUids.add(Bd(t)),this.lastProcessedEventTime=Date.now()}}function Bd(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function zm({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function GI(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zm(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bI(e,t={}){return Bi(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XI=/^https?/;async function QI(e){if(e.config.emulator)return;const{authorizedDomains:t}=await bI(e);for(const n of t)try{if(YI(n))return}catch{}Ot(e,"unauthorized-domain")}function YI(e){const t=iu(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!XI.test(n))return!1;if(qI.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=new zi(3e4,6e4);function Vd(){const e=mt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function ZI(e){return new Promise((t,n)=>{var r,i,s;function o(){Vd(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Vd(),n(gt(e,"network-request-failed"))},timeout:JI.get()})}if(!((i=(r=mt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=mt().gapi)===null||s===void 0)&&s.load)o();else{const l=iI("iframefcb");return mt()[l]=()=>{gapi.load?o():n(gt(e,"network-request-failed"))},rI(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(t=>{throw Fs=null,t})}let Fs=null;function eS(e){return Fs=Fs||ZI(e),Fs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS=new zi(5e3,15e3),nS="__/auth/iframe",rS="emulator/auth/iframe",iS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oS(e){const t=e.config;R(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ec(t,rS):`https://${e.config.authDomain}/${nS}`,r={apiKey:t.apiKey,appName:e.name,v:Tr},i=sS.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Fi(r).slice(1)}`}async function lS(e){const t=await eS(e),n=mt().gapi;return R(n,e,"internal-error"),t.open({where:document.body,url:oS(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iS,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=gt(e,"network-request-failed"),l=mt().setTimeout(()=>{s(o)},tS.get());function a(){mt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uS=500,cS=600,hS="_blank",dS="http://localhost";class Hd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fS(e,t,n,r=uS,i=cS){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},aS),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ee().toLowerCase();n&&(l=_m(u)?hS:n),wm(u)&&(t=t||dS,a.scrollbars="yes");const h=Object.entries(a).reduce((g,[m,w])=>`${g}${m}=${w},`,"");if(qE(u)&&l!=="_self")return pS(t||"",l),new Hd(null);const p=window.open(t||"",l,h);R(p,e,"popup-blocked");try{p.focus()}catch{}return new Hd(p)}function pS(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS="__/auth/handler",mS="emulator/auth/handler",vS=encodeURIComponent("fac");async function Wd(e,t,n,r,i,s){R(e.config.authDomain,e,"auth-domain-config-required"),R(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Tr,eventId:i};if(t instanceof Rm){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",j1(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[h,p]of Object.entries(s||{}))o[h]=p}if(t instanceof Vi){const h=t.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}e.tenantId&&(o.tid=e.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const a=await e._getAppCheckToken(),u=a?`#${vS}=${encodeURIComponent(a)}`:"";return`${yS(e)}?${Fi(l).slice(1)}${u}`}function yS({config:e}){return e.emulator?Ec(e,mS):`https://${e.authDomain}/${gS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql="webStorageSupport";class wS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xm,this._completeRedirectFn=HI,this._overrideRedirectResult=zI}async _openPopup(t,n,r,i){var s;Dt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Wd(t,n,r,iu(),i);return fS(t,o,kc())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await Wd(t,n,r,iu(),i);return II(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Dt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await lS(t),r=new KI(t);return n.register("authEvent",i=>(R(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ql,{type:Ql},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ql];o!==void 0&&n(!!o),Ot(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=QI(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return km()||Sc()||Go()}}const _S=wS;var Kd="@firebase/auth",Gd="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function SS(e){vt(new st("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;R(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cm(e)},u=new tI(r,i,s,a);return oI(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),vt(new st("auth-internal",t=>{const n=Tc(t.getProvider("auth").getImmediate());return(r=>new ES(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ge(Kd,Gd,IS(e)),Ge(Kd,Gd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS=5*60,kS=Og("authIdTokenMaxAge")||TS;let bd=null;const CS=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>kS)return;const i=n==null?void 0:n.token;bd!==i&&(bd=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function AS(e=Fg()){const t=ji(e,"auth");if(t.isInitialized())return t.getImmediate();const n=sI(e,{popupRedirectResolver:_S,persistence:[OI,wI,xm]}),r=Og("authTokenSyncURL");if(r){const s=CS(r);gI(n,s,()=>s(n.currentUser)),pI(n,o=>s(o))}const i=Rg("auth");return i&&lI(n,`http://${i}`),n}SS("Browser");var PS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},E,Ac=Ac||{},P=PS||self;function Xo(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Wi(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function RS(e){return Object.prototype.hasOwnProperty.call(e,Yl)&&e[Yl]||(e[Yl]=++NS)}var Yl="closure_uid_"+(1e9*Math.random()>>>0),NS=0;function OS(e,t,n){return e.call.apply(e.bind,arguments)}function DS(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function ye(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ye=OS:ye=DS,ye.apply(null,arguments)}function ws(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function oe(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),l=2;l<arguments.length;l++)o[l-2]=arguments[l];return t.prototype[i].apply(r,o)}}function cn(){this.s=this.s,this.o=this.o}var LS=0;cn.prototype.s=!1;cn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),LS!=0)&&RS(this)};cn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Bm=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Pc(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function qd(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Xo(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function we(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}we.prototype.h=function(){this.defaultPrevented=!0};var xS=function(){if(!P.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{P.addEventListener("test",()=>{},t),P.removeEventListener("test",()=>{},t)}catch{}return e}();function Ti(e){return/^[\s\xa0]*$/.test(e)}function Qo(){var e=P.navigator;return e&&(e=e.userAgent)?e:""}function ct(e){return Qo().indexOf(e)!=-1}function Rc(e){return Rc[" "](e),e}Rc[" "]=function(){};function MS(e,t){var n=PT;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var $S=ct("Opera"),ki=ct("Trident")||ct("MSIE"),Vm=ct("Edge"),ou=Vm||ki,Hm=ct("Gecko")&&!(Qo().toLowerCase().indexOf("webkit")!=-1&&!ct("Edge"))&&!(ct("Trident")||ct("MSIE"))&&!ct("Edge"),US=Qo().toLowerCase().indexOf("webkit")!=-1&&!ct("Edge");function Wm(){var e=P.document;return e?e.documentMode:void 0}e:{var Xd="",Jl=function(){var e=Qo();if(Hm)return/rv:([^\);]+)(\)|;)/.exec(e);if(Vm)return/Edge\/([\d\.]+)/.exec(e);if(ki)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(US)return/WebKit\/(\S+)/.exec(e);if($S)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Jl&&(Xd=Jl?Jl[1]:""),ki){var Qd=Wm();if(Qd!=null&&Qd>parseFloat(Xd))break e}}P.document&&ki&&Wm();function Ci(e,t){if(we.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Hm){e:{try{Rc(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:FS[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ci.$.h.call(this)}}oe(Ci,we);var FS={2:"touch",3:"pen",4:"mouse"};Ci.prototype.h=function(){Ci.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ki="closure_listenable_"+(1e6*Math.random()|0),jS=0;function zS(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++jS,this.fa=this.ia=!1}function Yo(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Nc(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function BS(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Km(e){const t={};for(const n in e)t[n]=e[n];return t}const Yd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Gm(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<Yd.length;s++)n=Yd[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Jo(e){this.src=e,this.g={},this.h=0}Jo.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=au(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new zS(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function lu(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=Bm(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Yo(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function au(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var Oc="closure_lm_"+(1e6*Math.random()|0),Zl={};function bm(e,t,n,r,i){if(r&&r.once)return Xm(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)bm(e,t[s],n,r,i);return null}return n=xc(n),e&&e[Ki]?e.O(t,n,Wi(r)?!!r.capture:!!r,i):qm(e,t,n,!1,r,i)}function qm(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Wi(i)?!!i.capture:!!i,l=Lc(e);if(l||(e[Oc]=l=new Jo(e)),n=l.add(t,n,r,o,s),n.proxy)return n;if(r=VS(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)xS||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Ym(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function VS(){function e(n){return t.call(e.src,e.listener,n)}const t=HS;return e}function Xm(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Xm(e,t[s],n,r,i);return null}return n=xc(n),e&&e[Ki]?e.P(t,n,Wi(r)?!!r.capture:!!r,i):qm(e,t,n,!0,r,i)}function Qm(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Qm(e,t[s],n,r,i);else r=Wi(r)?!!r.capture:!!r,n=xc(n),e&&e[Ki]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=au(s,n,r,i),-1<n&&(Yo(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=Lc(e))&&(t=e.g[t.toString()],e=-1,t&&(e=au(t,n,r,i)),(n=-1<e?t[e]:null)&&Dc(n))}function Dc(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Ki])lu(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Ym(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Lc(t))?(lu(n,e),n.h==0&&(n.src=null,t[Oc]=null)):Yo(e)}}}function Ym(e){return e in Zl?Zl[e]:Zl[e]="on"+e}function HS(e,t){if(e.fa)e=!0;else{t=new Ci(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Dc(e),e=n.call(r,t)}return e}function Lc(e){return e=e[Oc],e instanceof Jo?e:null}var ea="__closure_events_fn_"+(1e9*Math.random()>>>0);function xc(e){return typeof e=="function"?e:(e[ea]||(e[ea]=function(t){return e.handleEvent(t)}),e[ea])}function se(){cn.call(this),this.i=new Jo(this),this.S=this,this.J=null}oe(se,cn);se.prototype[Ki]=!0;se.prototype.removeEventListener=function(e,t,n,r){Qm(this,e,t,n,r)};function ce(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new we(t,e);else if(t instanceof we)t.target=t.target||e;else{var i=t;t=new we(r,e),Gm(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=_s(o,r,!0,t)&&i}if(o=t.g=e,i=_s(o,r,!0,t)&&i,i=_s(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=_s(o,r,!1,t)&&i}se.prototype.N=function(){if(se.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Yo(n[r]);delete e.g[t],e.h--}}this.J=null};se.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};se.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function _s(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var l=o.listener,a=o.la||o.src;o.ia&&lu(e.i,o),i=l.call(a,r)!==!1&&i}}return i&&!r.defaultPrevented}var Mc=P.JSON.stringify;class WS{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function KS(){var e=$c;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class GS{constructor(){this.h=this.g=null}add(t,n){const r=Jm.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Jm=new WS(()=>new bS,e=>e.reset());class bS{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function qS(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function XS(e){P.setTimeout(()=>{throw e},0)}let Ai,Pi=!1,$c=new GS,Zm=()=>{const e=P.Promise.resolve(void 0);Ai=()=>{e.then(QS)}};var QS=()=>{for(var e;e=KS();){try{e.h.call(e.g)}catch(n){XS(n)}var t=Jm;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Pi=!1};function Zo(e,t){se.call(this),this.h=e||1,this.g=t||P,this.j=ye(this.qb,this),this.l=Date.now()}oe(Zo,se);E=Zo.prototype;E.ga=!1;E.T=null;E.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ce(this,"tick"),this.ga&&(Uc(this),this.start()))}};E.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Uc(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}E.N=function(){Zo.$.N.call(this),Uc(this),delete this.g};function Fc(e,t,n){if(typeof e=="function")n&&(e=ye(e,n));else if(e&&typeof e.handleEvent=="function")e=ye(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:P.setTimeout(e,t||0)}function ev(e){e.g=Fc(()=>{e.g=null,e.i&&(e.i=!1,ev(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class YS extends cn{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:ev(this)}N(){super.N(),this.g&&(P.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ri(e){cn.call(this),this.h=e,this.g={}}oe(Ri,cn);var Jd=[];function tv(e,t,n,r){Array.isArray(n)||(n&&(Jd[0]=n.toString()),n=Jd);for(var i=0;i<n.length;i++){var s=bm(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function nv(e){Nc(e.g,function(t,n){this.g.hasOwnProperty(n)&&Dc(t)},e),e.g={}}Ri.prototype.N=function(){Ri.$.N.call(this),nv(this)};Ri.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function el(){this.g=!0}el.prototype.Ea=function(){this.g=!1};function JS(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",l=s.split("&"),a=0;a<l.length;a++){var u=l[a].split("=");if(1<u.length){var h=u[0];u=u[1];var p=h.split("_");o=2<=p.length&&p[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function ZS(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function tr(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+tT(e,n)+(r?" "+r:"")})}function eT(e,t){e.info(function(){return"TIMEOUT: "+t})}el.prototype.info=function(){};function tT(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Mc(n)}catch{return t}}var kr={},Zd=null;function jc(){return Zd=Zd||new se}kr.Ta="serverreachability";function rv(e){we.call(this,kr.Ta,e)}oe(rv,we);function Ni(e){const t=jc();ce(t,new rv(t))}kr.STAT_EVENT="statevent";function iv(e,t){we.call(this,kr.STAT_EVENT,e),this.stat=t}oe(iv,we);function Te(e){const t=jc();ce(t,new iv(t,e))}kr.Ua="timingevent";function sv(e,t){we.call(this,kr.Ua,e),this.size=t}oe(sv,we);function Gi(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return P.setTimeout(function(){e()},t)}var zc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},nT={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Bc(){}Bc.prototype.h=null;function ef(e){return e.h||(e.h=e.i())}function rT(){}var bi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Vc(){we.call(this,"d")}oe(Vc,we);function Hc(){we.call(this,"c")}oe(Hc,we);var uu;function tl(){}oe(tl,Bc);tl.prototype.g=function(){return new XMLHttpRequest};tl.prototype.i=function(){return{}};uu=new tl;function qi(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Ri(this),this.P=iT,e=ou?125:void 0,this.V=new Zo(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ov}function ov(){this.i=null,this.g="",this.h=!1}var iT=45e3,cu={},wo={};E=qi.prototype;E.setTimeout=function(e){this.P=e};function hu(e,t,n){e.L=1,e.v=rl(Lt(t)),e.s=n,e.S=!0,lv(e,null)}function lv(e,t){e.G=Date.now(),Xi(e),e.A=Lt(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),gv(n.i,"t",r),e.C=0,n=e.l.J,e.h=new ov,e.g=$v(e.l,n?t:null,!e.s),0<e.O&&(e.M=new YS(ye(e.Pa,e,e.g),e.O)),tv(e.U,e.g,"readystatechange",e.nb),t=e.I?Km(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Ni(),JS(e.j,e.u,e.A,e.m,e.W,e.s)}E.nb=function(e){e=e.target;const t=this.M;t&&ht(e)==3?t.l():this.Pa(e)};E.Pa=function(e){try{if(e==this.g)e:{const h=ht(this.g);var t=this.g.Ia();const p=this.g.da();if(!(3>h)&&(h!=3||ou||this.g&&(this.h.h||this.g.ja()||sf(this.g)))){this.J||h!=4||t==7||(t==8||0>=p?Ni(3):Ni(2)),nl(this);var n=this.g.da();this.ca=n;t:if(av(this)){var r=sf(this.g);e="";var i=r.length,s=ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){En(this),ri(this);var o="";break t}this.h.i=new P.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,ZS(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var l,a=this.g;if((l=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ti(l)){var u=l;break t}}u=null}if(n=u)tr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,du(this,n);else{this.i=!1,this.o=3,Te(12),En(this),ri(this);break e}}this.S?(uv(this,h,o),ou&&this.i&&h==3&&(tv(this.U,this.V,"tick",this.mb),this.V.start())):(tr(this.j,this.m,o,null),du(this,o)),h==4&&En(this),this.i&&!this.J&&(h==4?Dv(this.l,this):(this.i=!1,Xi(this)))}else kT(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Te(12)):(this.o=0,Te(13)),En(this),ri(this)}}}catch{}finally{}};function av(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function uv(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=sT(e,n),i==wo){t==4&&(e.o=4,Te(14),r=!1),tr(e.j,e.m,null,"[Incomplete Response]");break}else if(i==cu){e.o=4,Te(15),tr(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else tr(e.j,e.m,i,null),du(e,i);av(e)&&i!=wo&&i!=cu&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Te(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Xc(t),t.M=!0,Te(11))):(tr(e.j,e.m,n,"[Invalid Chunked Response]"),En(e),ri(e))}E.mb=function(){if(this.g){var e=ht(this.g),t=this.g.ja();this.C<t.length&&(nl(this),uv(this,e,t),this.i&&e!=4&&Xi(this))}};function sT(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?wo:(n=Number(t.substring(n,r)),isNaN(n)?cu:(r+=1,r+n>t.length?wo:(t=t.slice(r,r+n),e.C=r+n,t)))}E.cancel=function(){this.J=!0,En(this)};function Xi(e){e.Y=Date.now()+e.P,cv(e,e.P)}function cv(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Gi(ye(e.lb,e),t)}function nl(e){e.B&&(P.clearTimeout(e.B),e.B=null)}E.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(eT(this.j,this.A),this.L!=2&&(Ni(),Te(17)),En(this),this.o=2,ri(this)):cv(this,this.Y-e)};function ri(e){e.l.H==0||e.J||Dv(e.l,e)}function En(e){nl(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Uc(e.V),nv(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function du(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||fu(n.i,e))){if(!e.K&&fu(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Io(n),ll(n);else break e;qc(n),Te(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Gi(ye(n.ib,n),6e3));if(1>=yv(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else In(n,11)}else if((e.K||n.g==e)&&Io(n),!Ti(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const h=u[3];h!=null&&(n.ra=h,n.l.info("VER="+n.ra));const p=u[4];p!=null&&(n.Ga=p,n.l.info("SVER="+n.Ga));const g=u[5];g!=null&&typeof g=="number"&&0<g&&(r=1.5*g,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=e.g;if(m){const w=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var s=r.i;s.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Wc(s,s.h),s.h=null))}if(r.F){const _=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,H(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Mv(r,r.J?r.pa:null,r.Y),o.K){wv(r.i,o);var l=o,a=r.L;a&&l.setTimeout(a),l.B&&(nl(l),Xi(l)),r.g=o}else Nv(r);0<n.j.length&&al(n)}else u[0]!="stop"&&u[0]!="close"||In(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?In(n,7):bc(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Ni(4)}catch{}}function oT(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Xo(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function lT(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Xo(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function hv(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Xo(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=lT(e),r=oT(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var dv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function aT(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Cn(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Cn){this.h=e.h,_o(this,e.j),this.s=e.s,this.g=e.g,Eo(this,e.m),this.l=e.l;var t=e.i,n=new Oi;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),tf(this,n),this.o=e.o}else e&&(t=String(e).match(dv))?(this.h=!1,_o(this,t[1]||"",!0),this.s=Wr(t[2]||""),this.g=Wr(t[3]||"",!0),Eo(this,t[4]),this.l=Wr(t[5]||"",!0),tf(this,t[6]||"",!0),this.o=Wr(t[7]||"")):(this.h=!1,this.i=new Oi(null,this.h))}Cn.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Kr(t,nf,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Kr(t,nf,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Kr(n,n.charAt(0)=="/"?hT:cT,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Kr(n,fT)),e.join("")};function Lt(e){return new Cn(e)}function _o(e,t,n){e.j=n?Wr(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Eo(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function tf(e,t,n){t instanceof Oi?(e.i=t,pT(e.i,e.h)):(n||(t=Kr(t,dT)),e.i=new Oi(t,e.h))}function H(e,t,n){e.i.set(t,n)}function rl(e){return H(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Wr(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Kr(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,uT),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function uT(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var nf=/[#\/\?@]/g,cT=/[#\?:]/g,hT=/[#\?]/g,dT=/[#\?@]/g,fT=/#/g;function Oi(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function hn(e){e.g||(e.g=new Map,e.h=0,e.i&&aT(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}E=Oi.prototype;E.add=function(e,t){hn(this),this.i=null,e=Cr(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function fv(e,t){hn(e),t=Cr(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function pv(e,t){return hn(e),t=Cr(e,t),e.g.has(t)}E.forEach=function(e,t){hn(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};E.ta=function(){hn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};E.Z=function(e){hn(this);let t=[];if(typeof e=="string")pv(this,e)&&(t=t.concat(this.g.get(Cr(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};E.set=function(e,t){return hn(this),this.i=null,e=Cr(this,e),pv(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};E.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function gv(e,t,n){fv(e,t),0<n.length&&(e.i=null,e.g.set(Cr(e,t),Pc(n)),e.h+=n.length)}E.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Cr(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function pT(e,t){t&&!e.j&&(hn(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(fv(this,r),gv(this,i,n))},e)),e.j=t}var gT=class{constructor(e,t){this.g=e,this.map=t}};function mv(e){this.l=e||mT,P.PerformanceNavigationTiming?(e=P.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(P.g&&P.g.Ka&&P.g.Ka()&&P.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var mT=10;function vv(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function yv(e){return e.h?1:e.g?e.g.size:0}function fu(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Wc(e,t){e.g?e.g.add(t):e.h=t}function wv(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}mv.prototype.cancel=function(){if(this.i=_v(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function _v(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Pc(e.i)}var vT=class{stringify(e){return P.JSON.stringify(e,void 0)}parse(e){return P.JSON.parse(e,void 0)}};function yT(){this.g=new vT}function wT(e,t,n){const r=n||"";try{hv(e,function(i,s){let o=i;Wi(i)&&(o=Mc(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function _T(e,t){const n=new el;if(P.Image){const r=new Image;r.onload=ws(Es,n,r,"TestLoadImage: loaded",!0,t),r.onerror=ws(Es,n,r,"TestLoadImage: error",!1,t),r.onabort=ws(Es,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=ws(Es,n,r,"TestLoadImage: timeout",!1,t),P.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Es(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function il(e){this.l=e.fc||null,this.j=e.ob||!1}oe(il,Bc);il.prototype.g=function(){return new sl(this.l,this.j)};il.prototype.i=function(e){return function(){return e}}({});function sl(e,t){se.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Kc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}oe(sl,se);var Kc=0;E=sl.prototype;E.open=function(e,t){if(this.readyState!=Kc)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Di(this)};E.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||P).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};E.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qi(this)),this.readyState=Kc};E.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Di(this)),this.g&&(this.readyState=3,Di(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof P.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ev(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Ev(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}E.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Qi(this):Di(this),this.readyState==3&&Ev(this)}};E.Za=function(e){this.g&&(this.response=this.responseText=e,Qi(this))};E.Ya=function(e){this.g&&(this.response=e,Qi(this))};E.ka=function(){this.g&&Qi(this)};function Qi(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Di(e)}E.setRequestHeader=function(e,t){this.v.append(e,t)};E.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};E.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Di(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(sl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var ET=P.JSON.parse;function J(e){se.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Iv,this.L=this.M=!1}oe(J,se);var Iv="",IT=/^https?$/i,ST=["POST","PUT"];E=J.prototype;E.Oa=function(e){this.M=e};E.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():uu.g(),this.C=this.u?ef(this.u):ef(uu),this.g.onreadystatechange=ye(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){rf(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=P.FormData&&e instanceof P.FormData,!(0<=Bm(ST,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{kv(this),0<this.B&&((this.L=TT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ye(this.ua,this)):this.A=Fc(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){rf(this,s)}};function TT(e){return ki&&typeof e.timeout=="number"&&e.ontimeout!==void 0}E.ua=function(){typeof Ac<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ce(this,"timeout"),this.abort(8))};function rf(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Sv(e),ol(e)}function Sv(e){e.F||(e.F=!0,ce(e,"complete"),ce(e,"error"))}E.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ce(this,"complete"),ce(this,"abort"),ol(this))};E.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ol(this,!0)),J.$.N.call(this)};E.La=function(){this.s||(this.G||this.v||this.l?Tv(this):this.kb())};E.kb=function(){Tv(this)};function Tv(e){if(e.h&&typeof Ac<"u"&&(!e.C[1]||ht(e)!=4||e.da()!=2)){if(e.v&&ht(e)==4)Fc(e.La,0,e);else if(ce(e,"readystatechange"),ht(e)==4){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(dv)[1]||null;!i&&P.self&&P.self.location&&(i=P.self.location.protocol.slice(0,-1)),r=!IT.test(i?i.toLowerCase():"")}n=r}if(n)ce(e,"complete"),ce(e,"success");else{e.m=6;try{var s=2<ht(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",Sv(e)}}finally{ol(e)}}}}function ol(e,t){if(e.g){kv(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||ce(e,"ready");try{n.onreadystatechange=r}catch{}}}function kv(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(P.clearTimeout(e.A),e.A=null)}E.isActive=function(){return!!this.g};function ht(e){return e.g?e.g.readyState:0}E.da=function(){try{return 2<ht(this)?this.g.status:-1}catch{return-1}};E.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};E.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),ET(t)}};function sf(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Iv:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function kT(e){const t={};e=(e.g&&2<=ht(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Ti(e[r]))continue;var n=qS(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}BS(t,function(r){return r.join(", ")})}E.Ia=function(){return this.m};E.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Cv(e){let t="";return Nc(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Gc(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Cv(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):H(e,t,n))}function Fr(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Av(e){this.Ga=0,this.j=[],this.l=new el,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Fr("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Fr("baseRetryDelayMs",5e3,e),this.hb=Fr("retryDelaySeedMs",1e4,e),this.eb=Fr("forwardChannelMaxRetries",2,e),this.xa=Fr("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new mv(e&&e.concurrentRequestLimit),this.Ja=new yT,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}E=Av.prototype;E.ra=8;E.H=1;function bc(e){if(Pv(e),e.H==3){var t=e.W++,n=Lt(e.I);if(H(n,"SID",e.K),H(n,"RID",t),H(n,"TYPE","terminate"),Yi(e,n),t=new qi(e,e.l,t),t.L=2,t.v=rl(Lt(n)),n=!1,P.navigator&&P.navigator.sendBeacon)try{n=P.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&P.Image&&(new Image().src=t.v,n=!0),n||(t.g=$v(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Xi(t)}xv(e)}function ll(e){e.g&&(Xc(e),e.g.cancel(),e.g=null)}function Pv(e){ll(e),e.u&&(P.clearTimeout(e.u),e.u=null),Io(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&P.clearTimeout(e.m),e.m=null)}function al(e){if(!vv(e.i)&&!e.m){e.m=!0;var t=e.Na;Ai||Zm(),Pi||(Ai(),Pi=!0),$c.add(t,e),e.C=0}}function CT(e,t){return yv(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Gi(ye(e.Na,e,t),Lv(e,e.C)),e.C++,!0)}E.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new qi(this,this.l,e);let s=this.s;if(this.U&&(s?(s=Km(s),Gm(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Rv(this,i,t),n=Lt(this.I),H(n,"RID",e),H(n,"CVER",22),this.F&&H(n,"X-HTTP-Session-Id",this.F),Yi(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Cv(s)))+"&"+t:this.o&&Gc(n,this.o,s)),Wc(this.i,i),this.bb&&H(n,"TYPE","init"),this.P?(H(n,"$req",t),H(n,"SID","null"),i.aa=!0,hu(i,n,null)):hu(i,n,t),this.H=2}}else this.H==3&&(e?of(this,e):this.j.length==0||vv(this.i)||of(this))};function of(e,t){var n;t?n=t.m:n=e.W++;const r=Lt(e.I);H(r,"SID",e.K),H(r,"RID",n),H(r,"AID",e.V),Yi(e,r),e.o&&e.s&&Gc(r,e.o,e.s),n=new qi(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Rv(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Wc(e.i,n),hu(n,r,t)}function Yi(e,t){e.na&&Nc(e.na,function(n,r){H(t,r,n)}),e.h&&hv({},function(n,r){H(t,r,n)})}function Rv(e,t,n){n=Math.min(e.j.length,n);var r=e.h?ye(e.h.Va,e.h,e):null;e:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let l=!0;for(let a=0;a<n;a++){let u=i[a].g;const h=i[a].map;if(u-=s,0>u)s=Math.max(0,i[a].g-100),l=!1;else try{wT(h,o,"req"+u+"_")}catch{r&&r(h)}}if(l){r=o.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function Nv(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Ai||Zm(),Pi||(Ai(),Pi=!0),$c.add(t,e),e.A=0}}function qc(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Gi(ye(e.Ma,e),Lv(e,e.A)),e.A++,!0)}E.Ma=function(){if(this.u=null,Ov(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Gi(ye(this.jb,this),e)}};E.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Te(10),ll(this),Ov(this))};function Xc(e){e.B!=null&&(P.clearTimeout(e.B),e.B=null)}function Ov(e){e.g=new qi(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Lt(e.wa);H(t,"RID","rpc"),H(t,"SID",e.K),H(t,"AID",e.V),H(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&H(t,"TO",e.qa),H(t,"TYPE","xmlhttp"),Yi(e,t),e.o&&e.s&&Gc(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=rl(Lt(t)),n.s=null,n.S=!0,lv(n,e)}E.ib=function(){this.v!=null&&(this.v=null,ll(this),qc(this),Te(19))};function Io(e){e.v!=null&&(P.clearTimeout(e.v),e.v=null)}function Dv(e,t){var n=null;if(e.g==t){Io(e),Xc(e),e.g=null;var r=2}else if(fu(e.i,t))n=t.F,wv(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=jc(),ce(r,new sv(r,n)),al(e)}else Nv(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&CT(e,t)||r==2&&qc(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:In(e,5);break;case 4:In(e,10);break;case 3:In(e,6);break;default:In(e,2)}}}function Lv(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function In(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=ye(e.pb,e);n||(n=new Cn("//www.google.com/images/cleardot.gif"),P.location&&P.location.protocol=="http"||_o(n,"https"),rl(n)),_T(n.toString(),r)}else Te(2);e.H=0,e.h&&e.h.za(t),xv(e),Pv(e)}E.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Te(2)):(this.l.info("Failed to ping google.com"),Te(1))};function xv(e){if(e.H=0,e.ma=[],e.h){const t=_v(e.i);(t.length!=0||e.j.length!=0)&&(qd(e.ma,t),qd(e.ma,e.j),e.i.i.length=0,Pc(e.j),e.j.length=0),e.h.ya()}}function Mv(e,t,n){var r=n instanceof Cn?Lt(n):new Cn(n);if(r.g!="")t&&(r.g=t+"."+r.g),Eo(r,r.m);else{var i=P.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Cn(null);r&&_o(s,r),t&&(s.g=t),i&&Eo(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&H(r,n,t),H(r,"VER",e.ra),Yi(e,r),r}function $v(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new J(new il({ob:!0})):new J(e.va),t.Oa(e.J),t}E.isActive=function(){return!!this.h&&this.h.isActive(this)};function Uv(){}E=Uv.prototype;E.Ba=function(){};E.Aa=function(){};E.za=function(){};E.ya=function(){};E.isActive=function(){return!0};E.Va=function(){};function Qe(e,t){se.call(this),this.g=new Av(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Ti(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Ti(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ar(this)}oe(Qe,se);Qe.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Te(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Mv(e,null,e.Y),al(e)};Qe.prototype.close=function(){bc(this.g)};Qe.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Mc(e),e=n);t.j.push(new gT(t.fb++,e)),t.H==3&&al(t)};Qe.prototype.N=function(){this.g.h=null,delete this.j,bc(this.g),delete this.g,Qe.$.N.call(this)};function Fv(e){Vc.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}oe(Fv,Vc);function jv(){Hc.call(this),this.status=1}oe(jv,Hc);function Ar(e){this.g=e}oe(Ar,Uv);Ar.prototype.Ba=function(){ce(this.g,"a")};Ar.prototype.Aa=function(e){ce(this.g,new Fv(e))};Ar.prototype.za=function(e){ce(this.g,new jv)};Ar.prototype.ya=function(){ce(this.g,"b")};function AT(){this.blockSize=-1}function yt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}oe(yt,AT);yt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ta(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}yt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)ta(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){ta(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){ta(this,r),i=0;break}}this.h=i,this.i+=t};yt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function F(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var PT={};function Qc(e){return-128<=e&&128>e?MS(e,function(t){return new F([t|0],0>t?-1:0)}):new F([e|0],0>e?-1:0)}function dt(e){if(isNaN(e)||!isFinite(e))return cr;if(0>e)return ae(dt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=pu;return new F(t,0)}function zv(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return ae(zv(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=dt(Math.pow(t,8)),r=cr,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=dt(Math.pow(t,s)),r=r.R(s).add(dt(o))):(r=r.R(n),r=r.add(dt(o)))}return r}var pu=4294967296,cr=Qc(0),gu=Qc(1),lf=Qc(16777216);E=F.prototype;E.ea=function(){if(He(this))return-ae(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:pu+r)*t,t*=pu}return e};E.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(kt(this))return"0";if(He(this))return"-"+ae(this).toString(e);for(var t=dt(Math.pow(e,6)),n=this,r="";;){var i=To(n,t).g;n=So(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,kt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};E.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function kt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function He(e){return e.h==-1}E.X=function(e){return e=So(this,e),He(e)?-1:kt(e)?0:1};function ae(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new F(n,~e.h).add(gu)}E.abs=function(){return He(this)?ae(this):this};E.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new F(n,n[n.length-1]&-2147483648?-1:0)};function So(e,t){return e.add(ae(t))}E.R=function(e){if(kt(this)||kt(e))return cr;if(He(this))return He(e)?ae(this).R(ae(e)):ae(ae(this).R(e));if(He(e))return ae(this.R(ae(e)));if(0>this.X(lf)&&0>e.X(lf))return dt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,l=e.D(i)>>>16,a=e.D(i)&65535;n[2*r+2*i]+=o*a,Is(n,2*r+2*i),n[2*r+2*i+1]+=s*a,Is(n,2*r+2*i+1),n[2*r+2*i+1]+=o*l,Is(n,2*r+2*i+1),n[2*r+2*i+2]+=s*l,Is(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new F(n,0)};function Is(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function jr(e,t){this.g=e,this.h=t}function To(e,t){if(kt(t))throw Error("division by zero");if(kt(e))return new jr(cr,cr);if(He(e))return t=To(ae(e),t),new jr(ae(t.g),ae(t.h));if(He(t))return t=To(e,ae(t)),new jr(ae(t.g),t.h);if(30<e.g.length){if(He(e)||He(t))throw Error("slowDivide_ only works with positive integers.");for(var n=gu,r=t;0>=r.X(e);)n=af(n),r=af(r);var i=Bn(n,1),s=Bn(r,1);for(r=Bn(r,2),n=Bn(n,2);!kt(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Bn(r,1),n=Bn(n,1)}return t=So(e,i.R(t)),new jr(i,t)}for(i=cr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=dt(n),o=s.R(t);He(o)||0<o.X(e);)n-=r,s=dt(n),o=s.R(t);kt(s)&&(s=gu),i=i.add(s),e=So(e,o)}return new jr(i,e)}E.gb=function(e){return To(this,e).h};E.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new F(n,this.h&e.h)};E.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new F(n,this.h|e.h)};E.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new F(n,this.h^e.h)};function af(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new F(n,e.h)}function Bn(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new F(i,e.h)}Qe.prototype.send=Qe.prototype.u;Qe.prototype.open=Qe.prototype.m;Qe.prototype.close=Qe.prototype.close;zc.NO_ERROR=0;zc.TIMEOUT=8;zc.HTTP_ERROR=6;nT.COMPLETE="complete";rT.EventType=bi;bi.OPEN="a";bi.CLOSE="b";bi.ERROR="c";bi.MESSAGE="d";se.prototype.listen=se.prototype.O;J.prototype.listenOnce=J.prototype.P;J.prototype.getLastError=J.prototype.Sa;J.prototype.getLastErrorCode=J.prototype.Ia;J.prototype.getStatus=J.prototype.da;J.prototype.getResponseJson=J.prototype.Wa;J.prototype.getResponseText=J.prototype.ja;J.prototype.send=J.prototype.ha;J.prototype.setWithCredentials=J.prototype.Oa;yt.prototype.digest=yt.prototype.l;yt.prototype.reset=yt.prototype.reset;yt.prototype.update=yt.prototype.j;F.prototype.add=F.prototype.add;F.prototype.multiply=F.prototype.R;F.prototype.modulo=F.prototype.gb;F.prototype.compare=F.prototype.X;F.prototype.toNumber=F.prototype.ea;F.prototype.toString=F.prototype.toString;F.prototype.getBits=F.prototype.D;F.fromNumber=dt;F.fromString=zv;var RT=F;const uf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}pe.UNAUTHENTICATED=new pe(null),pe.GOOGLE_CREDENTIALS=new pe("google-credentials-uid"),pe.FIRST_PARTY=new pe("first-party-uid"),pe.MOCK_USER=new pe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ji="10.3.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=new Ho("@firebase/firestore");function $e(e,...t){if(_r.logLevel<=$.DEBUG){const n=t.map(Jc);_r.debug(`Firestore (${Ji}): ${e}`,...n)}}function Yc(e,...t){if(_r.logLevel<=$.ERROR){const n=t.map(Jc);_r.error(`Firestore (${Ji}): ${e}`,...n)}}function NT(e,...t){if(_r.logLevel<=$.WARN){const n=t.map(Jc);_r.warn(`Firestore (${Ji}): ${e}`,...n)}}function Jc(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(e="Unexpected state"){const t=`FIRESTORE (${Ji}) INTERNAL ASSERTION FAILED: `+e;throw Yc(t),new Error(t)}function mu(e,t){e||Zc()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ve extends ot{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class OT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(pe.UNAUTHENTICATED))}shutdown(){}}class DT{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class LT{constructor(t){this.t=t,this.currentUser=pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=a=>this.i!==r?(r=this.i,n(a)):Promise.resolve();let s=new hr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new hr,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const a=s;t.enqueueRetryable(async()=>{await a.promise,await i(this.currentUser)})},l=a=>{$e("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>l(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?l(a):($e("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new hr)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?($e("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(mu(typeof r.accessToken=="string"),new Bv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return mu(t===null||typeof t=="string"),new pe(t)}}class xT{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=pe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class MT{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new xT(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $T{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class UT{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&$e("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,$e("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{$e("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):$e("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(mu(typeof n.token=="string"),this.R=n.token,new $T(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=FT(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function Vv(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(t,n,r,i,s,o,l,a,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=a,this.useFetchStreams=u}}class ko{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ko("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ko&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cf,x;(x=cf||(cf={}))[x.OK=0]="OK",x[x.CANCELLED=1]="CANCELLED",x[x.UNKNOWN=2]="UNKNOWN",x[x.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",x[x.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",x[x.NOT_FOUND=5]="NOT_FOUND",x[x.ALREADY_EXISTS=6]="ALREADY_EXISTS",x[x.PERMISSION_DENIED=7]="PERMISSION_DENIED",x[x.UNAUTHENTICATED=16]="UNAUTHENTICATED",x[x.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",x[x.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",x[x.ABORTED=10]="ABORTED",x[x.OUT_OF_RANGE=11]="OUT_OF_RANGE",x[x.UNIMPLEMENTED=12]="UNIMPLEMENTED",x[x.INTERNAL=13]="INTERNAL",x[x.UNAVAILABLE=14]="UNAVAILABLE",x[x.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new RT([4294967295,4294967295],0);function na(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(t,n,r=1e3,i=1.5,s=6e4){this._i=t,this.timerId=n,this.xo=r,this.Oo=i,this.No=s,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(t){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),i=Math.max(0,n-r);i>0&&$e("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,i,()=>(this.ko=Date.now(),t())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new hr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,l=new eh(t,n,o,i,s);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ve(me.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function VT(e,t){if(Yc("AsyncQueue",`${t}: ${e}`),Vv(e))return new ve(me.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=pe.UNAUTHENTICATED,this.clientId=jT.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{$e("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>($e("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ve(me.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new hr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=VT(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hv(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=new Map;function WT(e,t,n,r){if(t===!0&&r===!0)throw new ve(me.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function KT(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Zc()}function GT(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ve(me.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=KT(e);throw new ve(me.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new ve(me.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new ve(me.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}WT("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Hv((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ve(me.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ve(me.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ve(me.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Wv{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new df({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ve(me.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new ve(me.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new df(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new OT;switch(r.type){case"firstParty":return new MT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ve(me.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=hf.get(n);r&&($e("ComponentProvider","Removing Datastore"),hf.delete(n),r.terminate())}(this),Promise.resolve()}}function bT(e,t,n,r={}){var i;const s=(e=GT(e,Wv))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&NT("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,a;if(typeof r.mockUserToken=="string")l=r.mockUserToken,a=pe.MOCK_USER;else{l=O1(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ve(me.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new pe(u)}e._authCredentials=new DT(new Bv(l,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new BT(this,"async_queue_retry"),this.ou=()=>{const n=na();n&&$e("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const t=na();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this._u(),this.au(t)}enterRestrictedMode(t){if(!this.eu){this.eu=!0,this.iu=t||!1;const n=na();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(t){if(this._u(),this.eu)return new Promise(()=>{});const n=new hr;return this.au(()=>this.eu&&this.iu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xa.push(t),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(t){if(!Vv(t))throw t;$e("AsyncQueue","Operation failed with retryable error: "+t)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(t){const n=this.Za.then(()=>(this.ru=!0,t().catch(r=>{this.nu=r,this.ru=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Yc("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(t,n,r){this._u(),this.su.indexOf(t)>-1&&(n=0);const i=eh.createAndSchedule(this,t,n,r,s=>this.cu(s));return this.tu.push(i),i}_u(){this.nu&&Zc()}verifyOperationInProgress(){}async lu(){let t;do t=this.Za,await t;while(t!==this.Za)}hu(t){for(const n of this.tu)if(n.timerId===t)return!0;return!1}Pu(t){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.lu()})}Iu(t){this.su.push(t)}cu(t){const n=this.tu.indexOf(t);this.tu.splice(n,1)}}class XT extends Wv{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new qT}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||YT(this),this._firestoreClient.terminate()}}function QT(e,t){const n=typeof e=="object"?e:Fg(),r=typeof e=="string"?e:t||"(default)",i=ji(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=R1("firestore");s&&bT(i,...s)}return i}function YT(e){var t,n,r;const i=e._freezeSettings(),s=function(l,a,u,h){return new zT(l,a,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Hv(h.experimentalLongPollingOptions),h.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new HT(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}(function(t,n=!0){(function(i){Ji=i})(Tr),vt(new st("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new XT(new LT(r.getProvider("auth-internal")),new UT(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ve(me.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ko(u.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Ge(uf,"4.1.3",t),Ge(uf,"4.1.3","esm2017")})();const JT={apiKey:"AIzaSyAVcFBetICuetwA9F4drSRfWxB9d5RYklc",authDomain:"note-fc0fc.firebaseapp.com",projectId:"note-fc0fc",storageBucket:"note-fc0fc.appspot.com",messagingSenderId:"278138305584",appId:"1:278138305584:web:f5a8b50a6421d2edb181f5",measurementId:"G-D5DTC7CZD3"},Kv=Ug(JT);AS(Kv);const ZT=QT(Kv);ZT.doc;function ek(){const[e,t]=Ao.useState(0);return Ie.jsxs(Ie.Fragment,{children:[Ie.jsxs("div",{children:[Ie.jsx("a",{href:"https://vitejs.dev",target:"_blank",children:Ie.jsx("img",{src:E1,className:"logo",alt:"Vite logo"})}),Ie.jsx("a",{href:"https://react.dev",target:"_blank",children:Ie.jsx("img",{src:_1,className:"logo react",alt:"React logo"})})]}),Ie.jsx("h1",{children:"Vite + React"}),Ie.jsxs("div",{className:"card",children:[Ie.jsxs("button",{onClick:()=>t(n=>n+1),children:["count is ",e]}),Ie.jsxs("p",{children:["Edit ",Ie.jsx("code",{children:"src/App.jsx"})," and save to test HMR"]})]}),Ie.jsx("p",{className:"read-the-docs",children:"Click on the Vite and React logos to learn more"})]})}ra.createRoot(document.getElementById("root")).render(Ie.jsx(uy.StrictMode,{children:Ie.jsx(ek,{})}));
