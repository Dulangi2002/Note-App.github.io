function Gy(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function qy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ep={exports:{}},Ko={},tp={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qi=Symbol.for("react.element"),Xy=Symbol.for("react.portal"),Yy=Symbol.for("react.fragment"),Qy=Symbol.for("react.strict_mode"),Jy=Symbol.for("react.profiler"),Zy=Symbol.for("react.provider"),e0=Symbol.for("react.context"),t0=Symbol.for("react.forward_ref"),n0=Symbol.for("react.suspense"),r0=Symbol.for("react.memo"),i0=Symbol.for("react.lazy"),Dd=Symbol.iterator;function s0(e){return e===null||typeof e!="object"?null:(e=Dd&&e[Dd]||e["@@iterator"],typeof e=="function"?e:null)}var np={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rp=Object.assign,ip={};function Ar(e,t,n){this.props=e,this.context=t,this.refs=ip,this.updater=n||np}Ar.prototype.isReactComponent={};Ar.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ar.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function sp(){}sp.prototype=Ar.prototype;function bu(e,t,n){this.props=e,this.context=t,this.refs=ip,this.updater=n||np}var Ku=bu.prototype=new sp;Ku.constructor=bu;rp(Ku,Ar.prototype);Ku.isPureReactComponent=!0;var Md=Array.isArray,op=Object.prototype.hasOwnProperty,Gu={current:null},ap={key:!0,ref:!0,__self:!0,__source:!0};function lp(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)op.call(t,r)&&!ap.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:qi,type:e,key:s,ref:o,props:i,_owner:Gu.current}}function o0(e,t){return{$$typeof:qi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function qu(e){return typeof e=="object"&&e!==null&&e.$$typeof===qi}function a0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var $d=/\/+/g;function xa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?a0(""+e.key):t.toString(36)}function Fs(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case qi:case Xy:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+xa(o,0):r,Md(i)?(n="",e!=null&&(n=e.replace($d,"$&/")+"/"),Fs(i,t,n,"",function(u){return u})):i!=null&&(qu(i)&&(i=o0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace($d,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Md(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+xa(s,a);o+=Fs(s,t,n,l,i)}else if(l=s0(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+xa(s,a++),o+=Fs(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function vs(e,t,n){if(e==null)return e;var r=[],i=0;return Fs(e,r,"","",function(s){return t.call(n,s,i++)}),r}function l0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Re={current:null},Bs={transition:null},u0={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:Bs,ReactCurrentOwner:Gu};$.Children={map:vs,forEach:function(e,t,n){vs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vs(e,function(){t++}),t},toArray:function(e){return vs(e,function(t){return t})||[]},only:function(e){if(!qu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=Ar;$.Fragment=Yy;$.Profiler=Jy;$.PureComponent=bu;$.StrictMode=Qy;$.Suspense=n0;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u0;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=rp({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Gu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)op.call(t,l)&&!ap.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:qi,type:e.type,key:i,ref:s,props:r,_owner:o}};$.createContext=function(e){return e={$$typeof:e0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Zy,_context:e},e.Consumer=e};$.createElement=lp;$.createFactory=function(e){var t=lp.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:t0,render:e}};$.isValidElement=qu;$.lazy=function(e){return{$$typeof:i0,_payload:{_status:-1,_result:e},_init:l0}};$.memo=function(e,t){return{$$typeof:r0,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=Bs.transition;Bs.transition={};try{e()}finally{Bs.transition=t}};$.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};$.useCallback=function(e,t){return Re.current.useCallback(e,t)};$.useContext=function(e){return Re.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return Re.current.useDeferredValue(e)};$.useEffect=function(e,t){return Re.current.useEffect(e,t)};$.useId=function(){return Re.current.useId()};$.useImperativeHandle=function(e,t,n){return Re.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return Re.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return Re.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return Re.current.useMemo(e,t)};$.useReducer=function(e,t,n){return Re.current.useReducer(e,t,n)};$.useRef=function(e){return Re.current.useRef(e)};$.useState=function(e){return Re.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return Re.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return Re.current.useTransition()};$.version="18.2.0";tp.exports=$;var T=tp.exports;const up=qy(T),c0=Gy({__proto__:null,default:up},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0=T,h0=Symbol.for("react.element"),f0=Symbol.for("react.fragment"),p0=Object.prototype.hasOwnProperty,g0=d0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m0={key:!0,ref:!0,__self:!0,__source:!0};function cp(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)p0.call(t,r)&&!m0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:h0,type:e,key:s,ref:o,props:i,_owner:g0.current}}Ko.Fragment=f0;Ko.jsx=cp;Ko.jsxs=cp;ep.exports=Ko;var C=ep.exports,Pl={},dp={exports:{}},ze={},hp={exports:{}},fp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(k,x){var D=k.length;k.push(x);e:for(;0<D;){var J=D-1>>>1,se=k[J];if(0<i(se,x))k[J]=x,k[D]=se,D=J;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var x=k[0],D=k.pop();if(D!==x){k[0]=D;e:for(var J=0,se=k.length,gs=se>>>1;J<gs;){var vn=2*(J+1)-1,La=k[vn],yn=vn+1,ms=k[yn];if(0>i(La,D))yn<se&&0>i(ms,La)?(k[J]=ms,k[yn]=D,J=yn):(k[J]=La,k[vn]=D,J=vn);else if(yn<se&&0>i(ms,D))k[J]=ms,k[yn]=D,J=yn;else break e}}return x}function i(k,x){var D=k.sortIndex-x.sortIndex;return D!==0?D:k.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,g=3,m=!1,y=!1,w=!1,N=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(k){for(var x=n(u);x!==null;){if(x.callback===null)r(u);else if(x.startTime<=k)r(u),x.sortIndex=x.expirationTime,t(l,x);else break;x=n(u)}}function v(k){if(w=!1,p(k),!y)if(n(l)!==null)y=!0,Na(I);else{var x=n(u);x!==null&&Oa(v,x.startTime-k)}}function I(k,x){y=!1,w&&(w=!1,h(A),A=-1),m=!0;var D=g;try{for(p(x),f=n(l);f!==null&&(!(f.expirationTime>x)||k&&!Ze());){var J=f.callback;if(typeof J=="function"){f.callback=null,g=f.priorityLevel;var se=J(f.expirationTime<=x);x=e.unstable_now(),typeof se=="function"?f.callback=se:f===n(l)&&r(l),p(x)}else r(l);f=n(l)}if(f!==null)var gs=!0;else{var vn=n(u);vn!==null&&Oa(v,vn.startTime-x),gs=!1}return gs}finally{f=null,g=D,m=!1}}var P=!1,R=null,A=-1,H=5,M=-1;function Ze(){return!(e.unstable_now()-M<H)}function Fr(){if(R!==null){var k=e.unstable_now();M=k;var x=!0;try{x=R(!0,k)}finally{x?Br():(P=!1,R=null)}}else P=!1}var Br;if(typeof d=="function")Br=function(){d(Fr)};else if(typeof MessageChannel<"u"){var xd=new MessageChannel,Ky=xd.port2;xd.port1.onmessage=Fr,Br=function(){Ky.postMessage(null)}}else Br=function(){N(Fr,0)};function Na(k){R=k,P||(P=!0,Br())}function Oa(k,x){A=N(function(){k(e.unstable_now())},x)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){y||m||(y=!0,Na(I))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(k){switch(g){case 1:case 2:case 3:var x=3;break;default:x=g}var D=g;g=x;try{return k()}finally{g=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,x){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var D=g;g=k;try{return x()}finally{g=D}},e.unstable_scheduleCallback=function(k,x,D){var J=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?J+D:J):D=J,k){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=D+se,k={id:c++,callback:x,priorityLevel:k,startTime:D,expirationTime:se,sortIndex:-1},D>J?(k.sortIndex=D,t(u,k),n(l)===null&&k===n(u)&&(w?(h(A),A=-1):w=!0,Oa(v,D-J))):(k.sortIndex=se,t(l,k),y||m||(y=!0,Na(I))),k},e.unstable_shouldYield=Ze,e.unstable_wrapCallback=function(k){var x=g;return function(){var D=g;g=x;try{return k.apply(this,arguments)}finally{g=D}}}})(fp);hp.exports=fp;var v0=hp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp=T,Be=v0;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gp=new Set,vi={};function Vn(e,t){Er(e,t),Er(e+"Capture",t)}function Er(e,t){for(vi[e]=t,e=0;e<t.length;e++)gp.add(t[e])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rl=Object.prototype.hasOwnProperty,y0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ud={},jd={};function w0(e){return Rl.call(jd,e)?!0:Rl.call(Ud,e)?!1:y0.test(e)?jd[e]=!0:(Ud[e]=!0,!1)}function _0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function E0(e,t,n,r){if(t===null||typeof t>"u"||_0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ae(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new Ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new Ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new Ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new Ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new Ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new Ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xu=/[\-:]([a-z])/g;function Yu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xu,Yu);pe[t]=new Ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xu,Yu);pe[t]=new Ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xu,Yu);pe[t]=new Ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qu(e,t,n,r){var i=pe.hasOwnProperty(t)?pe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(E0(t,n,i,r)&&(n=null),r||i===null?w0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var $t=pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ys=Symbol.for("react.element"),Qn=Symbol.for("react.portal"),Jn=Symbol.for("react.fragment"),Ju=Symbol.for("react.strict_mode"),Al=Symbol.for("react.profiler"),mp=Symbol.for("react.provider"),vp=Symbol.for("react.context"),Zu=Symbol.for("react.forward_ref"),Nl=Symbol.for("react.suspense"),Ol=Symbol.for("react.suspense_list"),ec=Symbol.for("react.memo"),Ft=Symbol.for("react.lazy"),yp=Symbol.for("react.offscreen"),Fd=Symbol.iterator;function zr(e){return e===null||typeof e!="object"?null:(e=Fd&&e[Fd]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,Da;function Qr(e){if(Da===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Da=t&&t[1]||""}return`
`+Da+e}var Ma=!1;function $a(e,t){if(!e||Ma)return"";Ma=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ma=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Qr(e):""}function I0(e){switch(e.tag){case 5:return Qr(e.type);case 16:return Qr("Lazy");case 13:return Qr("Suspense");case 19:return Qr("SuspenseList");case 0:case 2:case 15:return e=$a(e.type,!1),e;case 11:return e=$a(e.type.render,!1),e;case 1:return e=$a(e.type,!0),e;default:return""}}function Ll(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jn:return"Fragment";case Qn:return"Portal";case Al:return"Profiler";case Ju:return"StrictMode";case Nl:return"Suspense";case Ol:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vp:return(e.displayName||"Context")+".Consumer";case mp:return(e._context.displayName||"Context")+".Provider";case Zu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ec:return t=e.displayName||null,t!==null?t:Ll(e.type)||"Memo";case Ft:t=e._payload,e=e._init;try{return Ll(e(t))}catch{}}return null}function S0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ll(t);case 8:return t===Ju?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function T0(e){var t=wp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ws(e){e._valueTracker||(e._valueTracker=T0(e))}function _p(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=wp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function to(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xl(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Bd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=un(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ep(e,t){t=t.checked,t!=null&&Qu(e,"checked",t,!1)}function Dl(e,t){Ep(e,t);var n=un(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ml(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ml(e,t.type,un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ml(e,t,n){(t!=="number"||to(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Jr=Array.isArray;function dr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+un(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $l(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Jr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:un(n)}}function Ip(e,t){var n=un(t.value),r=un(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Hd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Sp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ul(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Sp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _s,Tp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_s=_s||document.createElement("div"),_s.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_s.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function yi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var si={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},k0=["Webkit","ms","Moz","O"];Object.keys(si).forEach(function(e){k0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),si[t]=si[e]})});function kp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||si.hasOwnProperty(e)&&si[e]?(""+t).trim():t+"px"}function Cp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=kp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var C0=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jl(e,t){if(t){if(C0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Fl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bl=null;function tc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zl=null,hr=null,fr=null;function Wd(e){if(e=Qi(e)){if(typeof zl!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Qo(t),zl(e.stateNode,e.type,t))}}function Pp(e){hr?fr?fr.push(e):fr=[e]:hr=e}function Rp(){if(hr){var e=hr,t=fr;if(fr=hr=null,Wd(e),t)for(e=0;e<t.length;e++)Wd(t[e])}}function Ap(e,t){return e(t)}function Np(){}var Ua=!1;function Op(e,t,n){if(Ua)return e(t,n);Ua=!0;try{return Ap(e,t,n)}finally{Ua=!1,(hr!==null||fr!==null)&&(Np(),Rp())}}function wi(e,t){var n=e.stateNode;if(n===null)return null;var r=Qo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Vl=!1;if(Nt)try{var Vr={};Object.defineProperty(Vr,"passive",{get:function(){Vl=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{Vl=!1}function P0(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var oi=!1,no=null,ro=!1,Hl=null,R0={onError:function(e){oi=!0,no=e}};function A0(e,t,n,r,i,s,o,a,l){oi=!1,no=null,P0.apply(R0,arguments)}function N0(e,t,n,r,i,s,o,a,l){if(A0.apply(this,arguments),oi){if(oi){var u=no;oi=!1,no=null}else throw Error(_(198));ro||(ro=!0,Hl=u)}}function Hn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Lp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bd(e){if(Hn(e)!==e)throw Error(_(188))}function O0(e){var t=e.alternate;if(!t){if(t=Hn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return bd(i),e;if(s===r)return bd(i),t;s=s.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function xp(e){return e=O0(e),e!==null?Dp(e):null}function Dp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Dp(e);if(t!==null)return t;e=e.sibling}return null}var Mp=Be.unstable_scheduleCallback,Kd=Be.unstable_cancelCallback,L0=Be.unstable_shouldYield,x0=Be.unstable_requestPaint,Z=Be.unstable_now,D0=Be.unstable_getCurrentPriorityLevel,nc=Be.unstable_ImmediatePriority,$p=Be.unstable_UserBlockingPriority,io=Be.unstable_NormalPriority,M0=Be.unstable_LowPriority,Up=Be.unstable_IdlePriority,Go=null,mt=null;function $0(e){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Go,e,void 0,(e.current.flags&128)===128)}catch{}}var it=Math.clz32?Math.clz32:F0,U0=Math.log,j0=Math.LN2;function F0(e){return e>>>=0,e===0?32:31-(U0(e)/j0|0)|0}var Es=64,Is=4194304;function Zr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function so(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Zr(a):(s&=o,s!==0&&(r=Zr(s)))}else o=n&~i,o!==0?r=Zr(o):s!==0&&(r=Zr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-it(t),i=1<<n,r|=e[n],t&=~i;return r}function B0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function z0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-it(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=B0(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Wl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jp(){var e=Es;return Es<<=1,!(Es&4194240)&&(Es=64),e}function ja(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-it(t),e[t]=n}function V0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-it(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function rc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var B=0;function Fp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bp,ic,zp,Vp,Hp,bl=!1,Ss=[],Yt=null,Qt=null,Jt=null,_i=new Map,Ei=new Map,zt=[],H0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gd(e,t){switch(e){case"focusin":case"focusout":Yt=null;break;case"dragenter":case"dragleave":Qt=null;break;case"mouseover":case"mouseout":Jt=null;break;case"pointerover":case"pointerout":_i.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ei.delete(t.pointerId)}}function Hr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Qi(t),t!==null&&ic(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function W0(e,t,n,r,i){switch(t){case"focusin":return Yt=Hr(Yt,e,t,n,r,i),!0;case"dragenter":return Qt=Hr(Qt,e,t,n,r,i),!0;case"mouseover":return Jt=Hr(Jt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return _i.set(s,Hr(_i.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ei.set(s,Hr(Ei.get(s)||null,e,t,n,r,i)),!0}return!1}function Wp(e){var t=In(e.target);if(t!==null){var n=Hn(t);if(n!==null){if(t=n.tag,t===13){if(t=Lp(n),t!==null){e.blockedOn=t,Hp(e.priority,function(){zp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Kl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bl=r,n.target.dispatchEvent(r),Bl=null}else return t=Qi(n),t!==null&&ic(t),e.blockedOn=n,!1;t.shift()}return!0}function qd(e,t,n){zs(e)&&n.delete(t)}function b0(){bl=!1,Yt!==null&&zs(Yt)&&(Yt=null),Qt!==null&&zs(Qt)&&(Qt=null),Jt!==null&&zs(Jt)&&(Jt=null),_i.forEach(qd),Ei.forEach(qd)}function Wr(e,t){e.blockedOn===t&&(e.blockedOn=null,bl||(bl=!0,Be.unstable_scheduleCallback(Be.unstable_NormalPriority,b0)))}function Ii(e){function t(i){return Wr(i,e)}if(0<Ss.length){Wr(Ss[0],e);for(var n=1;n<Ss.length;n++){var r=Ss[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Yt!==null&&Wr(Yt,e),Qt!==null&&Wr(Qt,e),Jt!==null&&Wr(Jt,e),_i.forEach(t),Ei.forEach(t),n=0;n<zt.length;n++)r=zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<zt.length&&(n=zt[0],n.blockedOn===null);)Wp(n),n.blockedOn===null&&zt.shift()}var pr=$t.ReactCurrentBatchConfig,oo=!0;function K0(e,t,n,r){var i=B,s=pr.transition;pr.transition=null;try{B=1,sc(e,t,n,r)}finally{B=i,pr.transition=s}}function G0(e,t,n,r){var i=B,s=pr.transition;pr.transition=null;try{B=4,sc(e,t,n,r)}finally{B=i,pr.transition=s}}function sc(e,t,n,r){if(oo){var i=Kl(e,t,n,r);if(i===null)qa(e,t,r,ao,n),Gd(e,r);else if(W0(i,e,t,n,r))r.stopPropagation();else if(Gd(e,r),t&4&&-1<H0.indexOf(e)){for(;i!==null;){var s=Qi(i);if(s!==null&&Bp(s),s=Kl(e,t,n,r),s===null&&qa(e,t,r,ao,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else qa(e,t,r,null,n)}}var ao=null;function Kl(e,t,n,r){if(ao=null,e=tc(r),e=In(e),e!==null)if(t=Hn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Lp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ao=e,null}function bp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(D0()){case nc:return 1;case $p:return 4;case io:case M0:return 16;case Up:return 536870912;default:return 16}default:return 16}}var Gt=null,oc=null,Vs=null;function Kp(){if(Vs)return Vs;var e,t=oc,n=t.length,r,i="value"in Gt?Gt.value:Gt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Vs=i.slice(e,1<r?1-r:void 0)}function Hs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ts(){return!0}function Xd(){return!1}function Ve(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ts:Xd,this.isPropagationStopped=Xd,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ts)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ts)},persist:function(){},isPersistent:Ts}),t}var Nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ac=Ve(Nr),Yi=Y({},Nr,{view:0,detail:0}),q0=Ve(Yi),Fa,Ba,br,qo=Y({},Yi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==br&&(br&&e.type==="mousemove"?(Fa=e.screenX-br.screenX,Ba=e.screenY-br.screenY):Ba=Fa=0,br=e),Fa)},movementY:function(e){return"movementY"in e?e.movementY:Ba}}),Yd=Ve(qo),X0=Y({},qo,{dataTransfer:0}),Y0=Ve(X0),Q0=Y({},Yi,{relatedTarget:0}),za=Ve(Q0),J0=Y({},Nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Z0=Ve(J0),e1=Y({},Nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),t1=Ve(e1),n1=Y({},Nr,{data:0}),Qd=Ve(n1),r1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},s1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=s1[e])?!!t[e]:!1}function lc(){return o1}var a1=Y({},Yi,{key:function(e){if(e.key){var t=r1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?i1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lc,charCode:function(e){return e.type==="keypress"?Hs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),l1=Ve(a1),u1=Y({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jd=Ve(u1),c1=Y({},Yi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lc}),d1=Ve(c1),h1=Y({},Nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),f1=Ve(h1),p1=Y({},qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),g1=Ve(p1),m1=[9,13,27,32],uc=Nt&&"CompositionEvent"in window,ai=null;Nt&&"documentMode"in document&&(ai=document.documentMode);var v1=Nt&&"TextEvent"in window&&!ai,Gp=Nt&&(!uc||ai&&8<ai&&11>=ai),Zd=String.fromCharCode(32),eh=!1;function qp(e,t){switch(e){case"keyup":return m1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zn=!1;function y1(e,t){switch(e){case"compositionend":return Xp(t);case"keypress":return t.which!==32?null:(eh=!0,Zd);case"textInput":return e=t.data,e===Zd&&eh?null:e;default:return null}}function w1(e,t){if(Zn)return e==="compositionend"||!uc&&qp(e,t)?(e=Kp(),Vs=oc=Gt=null,Zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gp&&t.locale!=="ko"?null:t.data;default:return null}}var _1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function th(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_1[e.type]:t==="textarea"}function Yp(e,t,n,r){Pp(r),t=lo(t,"onChange"),0<t.length&&(n=new ac("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var li=null,Si=null;function E1(e){ag(e,0)}function Xo(e){var t=nr(e);if(_p(t))return e}function I1(e,t){if(e==="change")return t}var Qp=!1;if(Nt){var Va;if(Nt){var Ha="oninput"in document;if(!Ha){var nh=document.createElement("div");nh.setAttribute("oninput","return;"),Ha=typeof nh.oninput=="function"}Va=Ha}else Va=!1;Qp=Va&&(!document.documentMode||9<document.documentMode)}function rh(){li&&(li.detachEvent("onpropertychange",Jp),Si=li=null)}function Jp(e){if(e.propertyName==="value"&&Xo(Si)){var t=[];Yp(t,Si,e,tc(e)),Op(E1,t)}}function S1(e,t,n){e==="focusin"?(rh(),li=t,Si=n,li.attachEvent("onpropertychange",Jp)):e==="focusout"&&rh()}function T1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xo(Si)}function k1(e,t){if(e==="click")return Xo(t)}function C1(e,t){if(e==="input"||e==="change")return Xo(t)}function P1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ot=typeof Object.is=="function"?Object.is:P1;function Ti(e,t){if(ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Rl.call(t,i)||!ot(e[i],t[i]))return!1}return!0}function ih(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sh(e,t){var n=ih(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ih(n)}}function Zp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function eg(){for(var e=window,t=to();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=to(e.document)}return t}function cc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function R1(e){var t=eg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Zp(n.ownerDocument.documentElement,n)){if(r!==null&&cc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=sh(n,s);var o=sh(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var A1=Nt&&"documentMode"in document&&11>=document.documentMode,er=null,Gl=null,ui=null,ql=!1;function oh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ql||er==null||er!==to(r)||(r=er,"selectionStart"in r&&cc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ui&&Ti(ui,r)||(ui=r,r=lo(Gl,"onSelect"),0<r.length&&(t=new ac("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=er)))}function ks(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tr={animationend:ks("Animation","AnimationEnd"),animationiteration:ks("Animation","AnimationIteration"),animationstart:ks("Animation","AnimationStart"),transitionend:ks("Transition","TransitionEnd")},Wa={},tg={};Nt&&(tg=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function Yo(e){if(Wa[e])return Wa[e];if(!tr[e])return e;var t=tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in tg)return Wa[e]=t[n];return e}var ng=Yo("animationend"),rg=Yo("animationiteration"),ig=Yo("animationstart"),sg=Yo("transitionend"),og=new Map,ah="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dn(e,t){og.set(e,t),Vn(t,[e])}for(var ba=0;ba<ah.length;ba++){var Ka=ah[ba],N1=Ka.toLowerCase(),O1=Ka[0].toUpperCase()+Ka.slice(1);dn(N1,"on"+O1)}dn(ng,"onAnimationEnd");dn(rg,"onAnimationIteration");dn(ig,"onAnimationStart");dn("dblclick","onDoubleClick");dn("focusin","onFocus");dn("focusout","onBlur");dn(sg,"onTransitionEnd");Er("onMouseEnter",["mouseout","mouseover"]);Er("onMouseLeave",["mouseout","mouseover"]);Er("onPointerEnter",["pointerout","pointerover"]);Er("onPointerLeave",["pointerout","pointerover"]);Vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),L1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ei));function lh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,N0(r,t,void 0,e),e.currentTarget=null}function ag(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;lh(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;lh(i,a,u),s=l}}}if(ro)throw e=Hl,ro=!1,Hl=null,e}function W(e,t){var n=t[Zl];n===void 0&&(n=t[Zl]=new Set);var r=e+"__bubble";n.has(r)||(lg(t,e,2,!1),n.add(r))}function Ga(e,t,n){var r=0;t&&(r|=4),lg(n,e,r,t)}var Cs="_reactListening"+Math.random().toString(36).slice(2);function ki(e){if(!e[Cs]){e[Cs]=!0,gp.forEach(function(n){n!=="selectionchange"&&(L1.has(n)||Ga(n,!1,e),Ga(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cs]||(t[Cs]=!0,Ga("selectionchange",!1,t))}}function lg(e,t,n,r){switch(bp(t)){case 1:var i=K0;break;case 4:i=G0;break;default:i=sc}n=i.bind(null,t,n,e),i=void 0,!Vl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function qa(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=In(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Op(function(){var u=s,c=tc(n),f=[];e:{var g=og.get(e);if(g!==void 0){var m=ac,y=e;switch(e){case"keypress":if(Hs(n)===0)break e;case"keydown":case"keyup":m=l1;break;case"focusin":y="focus",m=za;break;case"focusout":y="blur",m=za;break;case"beforeblur":case"afterblur":m=za;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Y0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=d1;break;case ng:case rg:case ig:m=Z0;break;case sg:m=f1;break;case"scroll":m=q0;break;case"wheel":m=g1;break;case"copy":case"cut":case"paste":m=t1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Jd}var w=(t&4)!==0,N=!w&&e==="scroll",h=w?g!==null?g+"Capture":null:g;w=[];for(var d=u,p;d!==null;){p=d;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,h!==null&&(v=wi(d,h),v!=null&&w.push(Ci(d,v,p)))),N)break;d=d.return}0<w.length&&(g=new m(g,y,null,n,c),f.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",g&&n!==Bl&&(y=n.relatedTarget||n.fromElement)&&(In(y)||y[Ot]))break e;if((m||g)&&(g=c.window===c?c:(g=c.ownerDocument)?g.defaultView||g.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?In(y):null,y!==null&&(N=Hn(y),y!==N||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(w=Yd,v="onMouseLeave",h="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=Jd,v="onPointerLeave",h="onPointerEnter",d="pointer"),N=m==null?g:nr(m),p=y==null?g:nr(y),g=new w(v,d+"leave",m,n,c),g.target=N,g.relatedTarget=p,v=null,In(c)===u&&(w=new w(h,d+"enter",y,n,c),w.target=p,w.relatedTarget=N,v=w),N=v,m&&y)t:{for(w=m,h=y,d=0,p=w;p;p=Xn(p))d++;for(p=0,v=h;v;v=Xn(v))p++;for(;0<d-p;)w=Xn(w),d--;for(;0<p-d;)h=Xn(h),p--;for(;d--;){if(w===h||h!==null&&w===h.alternate)break t;w=Xn(w),h=Xn(h)}w=null}else w=null;m!==null&&uh(f,g,m,w,!1),y!==null&&N!==null&&uh(f,N,y,w,!0)}}e:{if(g=u?nr(u):window,m=g.nodeName&&g.nodeName.toLowerCase(),m==="select"||m==="input"&&g.type==="file")var I=I1;else if(th(g))if(Qp)I=C1;else{I=T1;var P=S1}else(m=g.nodeName)&&m.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(I=k1);if(I&&(I=I(e,u))){Yp(f,I,n,c);break e}P&&P(e,g,u),e==="focusout"&&(P=g._wrapperState)&&P.controlled&&g.type==="number"&&Ml(g,"number",g.value)}switch(P=u?nr(u):window,e){case"focusin":(th(P)||P.contentEditable==="true")&&(er=P,Gl=u,ui=null);break;case"focusout":ui=Gl=er=null;break;case"mousedown":ql=!0;break;case"contextmenu":case"mouseup":case"dragend":ql=!1,oh(f,n,c);break;case"selectionchange":if(A1)break;case"keydown":case"keyup":oh(f,n,c)}var R;if(uc)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Zn?qp(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Gp&&n.locale!=="ko"&&(Zn||A!=="onCompositionStart"?A==="onCompositionEnd"&&Zn&&(R=Kp()):(Gt=c,oc="value"in Gt?Gt.value:Gt.textContent,Zn=!0)),P=lo(u,A),0<P.length&&(A=new Qd(A,e,null,n,c),f.push({event:A,listeners:P}),R?A.data=R:(R=Xp(n),R!==null&&(A.data=R)))),(R=v1?y1(e,n):w1(e,n))&&(u=lo(u,"onBeforeInput"),0<u.length&&(c=new Qd("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=R))}ag(f,t)})}function Ci(e,t,n){return{instance:e,listener:t,currentTarget:n}}function lo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=wi(e,n),s!=null&&r.unshift(Ci(e,s,i)),s=wi(e,t),s!=null&&r.push(Ci(e,s,i))),e=e.return}return r}function Xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function uh(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=wi(n,s),l!=null&&o.unshift(Ci(n,l,a))):i||(l=wi(n,s),l!=null&&o.push(Ci(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var x1=/\r\n?/g,D1=/\u0000|\uFFFD/g;function ch(e){return(typeof e=="string"?e:""+e).replace(x1,`
`).replace(D1,"")}function Ps(e,t,n){if(t=ch(t),ch(e)!==t&&n)throw Error(_(425))}function uo(){}var Xl=null,Yl=null;function Ql(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Jl=typeof setTimeout=="function"?setTimeout:void 0,M1=typeof clearTimeout=="function"?clearTimeout:void 0,dh=typeof Promise=="function"?Promise:void 0,$1=typeof queueMicrotask=="function"?queueMicrotask:typeof dh<"u"?function(e){return dh.resolve(null).then(e).catch(U1)}:Jl;function U1(e){setTimeout(function(){throw e})}function Xa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ii(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ii(t)}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Or=Math.random().toString(36).slice(2),ht="__reactFiber$"+Or,Pi="__reactProps$"+Or,Ot="__reactContainer$"+Or,Zl="__reactEvents$"+Or,j1="__reactListeners$"+Or,F1="__reactHandles$"+Or;function In(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ot]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hh(e);e!==null;){if(n=e[ht])return n;e=hh(e)}return t}e=n,n=e.parentNode}return null}function Qi(e){return e=e[ht]||e[Ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Qo(e){return e[Pi]||null}var eu=[],rr=-1;function hn(e){return{current:e}}function K(e){0>rr||(e.current=eu[rr],eu[rr]=null,rr--)}function V(e,t){rr++,eu[rr]=e.current,e.current=t}var cn={},Se=hn(cn),Le=hn(!1),Ln=cn;function Ir(e,t){var n=e.type.contextTypes;if(!n)return cn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function xe(e){return e=e.childContextTypes,e!=null}function co(){K(Le),K(Se)}function fh(e,t,n){if(Se.current!==cn)throw Error(_(168));V(Se,t),V(Le,n)}function ug(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,S0(e)||"Unknown",i));return Y({},n,r)}function ho(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cn,Ln=Se.current,V(Se,e),V(Le,Le.current),!0}function ph(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=ug(e,t,Ln),r.__reactInternalMemoizedMergedChildContext=e,K(Le),K(Se),V(Se,e)):K(Le),V(Le,n)}var St=null,Jo=!1,Ya=!1;function cg(e){St===null?St=[e]:St.push(e)}function B1(e){Jo=!0,cg(e)}function fn(){if(!Ya&&St!==null){Ya=!0;var e=0,t=B;try{var n=St;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}St=null,Jo=!1}catch(i){throw St!==null&&(St=St.slice(e+1)),Mp(nc,fn),i}finally{B=t,Ya=!1}}return null}var ir=[],sr=0,fo=null,po=0,He=[],We=0,xn=null,Tt=1,kt="";function wn(e,t){ir[sr++]=po,ir[sr++]=fo,fo=e,po=t}function dg(e,t,n){He[We++]=Tt,He[We++]=kt,He[We++]=xn,xn=e;var r=Tt;e=kt;var i=32-it(r)-1;r&=~(1<<i),n+=1;var s=32-it(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Tt=1<<32-it(t)+i|n<<i|r,kt=s+e}else Tt=1<<s|n<<i|r,kt=e}function dc(e){e.return!==null&&(wn(e,1),dg(e,1,0))}function hc(e){for(;e===fo;)fo=ir[--sr],ir[sr]=null,po=ir[--sr],ir[sr]=null;for(;e===xn;)xn=He[--We],He[We]=null,kt=He[--We],He[We]=null,Tt=He[--We],He[We]=null}var Fe=null,Ue=null,G=!1,rt=null;function hg(e,t){var n=Ke(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function gh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Fe=e,Ue=Zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Fe=e,Ue=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xn!==null?{id:Tt,overflow:kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ke(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Fe=e,Ue=null,!0):!1;default:return!1}}function tu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function nu(e){if(G){var t=Ue;if(t){var n=t;if(!gh(e,t)){if(tu(e))throw Error(_(418));t=Zt(n.nextSibling);var r=Fe;t&&gh(e,t)?hg(r,n):(e.flags=e.flags&-4097|2,G=!1,Fe=e)}}else{if(tu(e))throw Error(_(418));e.flags=e.flags&-4097|2,G=!1,Fe=e}}}function mh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Fe=e}function Rs(e){if(e!==Fe)return!1;if(!G)return mh(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ql(e.type,e.memoizedProps)),t&&(t=Ue)){if(tu(e))throw fg(),Error(_(418));for(;t;)hg(e,t),t=Zt(t.nextSibling)}if(mh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ue=Zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ue=null}}else Ue=Fe?Zt(e.stateNode.nextSibling):null;return!0}function fg(){for(var e=Ue;e;)e=Zt(e.nextSibling)}function Sr(){Ue=Fe=null,G=!1}function fc(e){rt===null?rt=[e]:rt.push(e)}var z1=$t.ReactCurrentBatchConfig;function tt(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var go=hn(null),mo=null,or=null,pc=null;function gc(){pc=or=mo=null}function mc(e){var t=go.current;K(go),e._currentValue=t}function ru(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function gr(e,t){mo=e,pc=or=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Oe=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(pc!==e)if(e={context:e,memoizedValue:t,next:null},or===null){if(mo===null)throw Error(_(308));or=e,mo.dependencies={lanes:0,firstContext:e}}else or=or.next=e;return t}var Sn=null;function vc(e){Sn===null?Sn=[e]:Sn.push(e)}function pg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,vc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Lt(e,r)}function Lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Bt=!1;function yc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function At(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function en(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Lt(e,n)}return i=r.interleaved,i===null?(t.next=t,vc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Lt(e,n)}function Ws(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rc(e,n)}}function vh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vo(e,t,n,r){var i=e.updateQueue;Bt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,c=u=l=null,a=s;do{var g=a.lane,m=a.eventTime;if((r&g)===g){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,w=a;switch(g=t,m=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){f=y.call(m,f,g);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,g=typeof y=="function"?y.call(m,f,g):y,g==null)break e;f=Y({},f,g);break e;case 2:Bt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else m={eventTime:m,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=f):c=c.next=m,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Mn|=o,e.lanes=o,e.memoizedState=f}}function yh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var mg=new pp.Component().refs;function iu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Zo={isMounted:function(e){return(e=e._reactInternals)?Hn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Pe(),i=nn(e),s=At(r,i);s.payload=t,n!=null&&(s.callback=n),t=en(e,s,i),t!==null&&(st(t,e,i,r),Ws(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Pe(),i=nn(e),s=At(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=en(e,s,i),t!==null&&(st(t,e,i,r),Ws(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pe(),r=nn(e),i=At(n,r);i.tag=2,t!=null&&(i.callback=t),t=en(e,i,r),t!==null&&(st(t,e,r,n),Ws(t,e,r))}};function wh(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Ti(n,r)||!Ti(i,s):!0}function vg(e,t,n){var r=!1,i=cn,s=t.contextType;return typeof s=="object"&&s!==null?s=Ye(s):(i=xe(t)?Ln:Se.current,r=t.contextTypes,s=(r=r!=null)?Ir(e,i):cn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Zo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function _h(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Zo.enqueueReplaceState(t,t.state,null)}function su(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=mg,yc(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Ye(s):(s=xe(t)?Ln:Se.current,i.context=Ir(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(iu(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Zo.enqueueReplaceState(i,i.state,null),vo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Kr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===mg&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function As(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Eh(e){var t=e._init;return t(e._payload)}function yg(e){function t(h,d){if(e){var p=h.deletions;p===null?(h.deletions=[d],h.flags|=16):p.push(d)}}function n(h,d){if(!e)return null;for(;d!==null;)t(h,d),d=d.sibling;return null}function r(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function i(h,d){return h=rn(h,d),h.index=0,h.sibling=null,h}function s(h,d,p){return h.index=p,e?(p=h.alternate,p!==null?(p=p.index,p<d?(h.flags|=2,d):p):(h.flags|=2,d)):(h.flags|=1048576,d)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,d,p,v){return d===null||d.tag!==6?(d=rl(p,h.mode,v),d.return=h,d):(d=i(d,p),d.return=h,d)}function l(h,d,p,v){var I=p.type;return I===Jn?c(h,d,p.props.children,v,p.key):d!==null&&(d.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Ft&&Eh(I)===d.type)?(v=i(d,p.props),v.ref=Kr(h,d,p),v.return=h,v):(v=Ys(p.type,p.key,p.props,null,h.mode,v),v.ref=Kr(h,d,p),v.return=h,v)}function u(h,d,p,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=il(p,h.mode,v),d.return=h,d):(d=i(d,p.children||[]),d.return=h,d)}function c(h,d,p,v,I){return d===null||d.tag!==7?(d=An(p,h.mode,v,I),d.return=h,d):(d=i(d,p),d.return=h,d)}function f(h,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=rl(""+d,h.mode,p),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ys:return p=Ys(d.type,d.key,d.props,null,h.mode,p),p.ref=Kr(h,null,d),p.return=h,p;case Qn:return d=il(d,h.mode,p),d.return=h,d;case Ft:var v=d._init;return f(h,v(d._payload),p)}if(Jr(d)||zr(d))return d=An(d,h.mode,p,null),d.return=h,d;As(h,d)}return null}function g(h,d,p,v){var I=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return I!==null?null:a(h,d,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ys:return p.key===I?l(h,d,p,v):null;case Qn:return p.key===I?u(h,d,p,v):null;case Ft:return I=p._init,g(h,d,I(p._payload),v)}if(Jr(p)||zr(p))return I!==null?null:c(h,d,p,v,null);As(h,p)}return null}function m(h,d,p,v,I){if(typeof v=="string"&&v!==""||typeof v=="number")return h=h.get(p)||null,a(d,h,""+v,I);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ys:return h=h.get(v.key===null?p:v.key)||null,l(d,h,v,I);case Qn:return h=h.get(v.key===null?p:v.key)||null,u(d,h,v,I);case Ft:var P=v._init;return m(h,d,p,P(v._payload),I)}if(Jr(v)||zr(v))return h=h.get(p)||null,c(d,h,v,I,null);As(d,v)}return null}function y(h,d,p,v){for(var I=null,P=null,R=d,A=d=0,H=null;R!==null&&A<p.length;A++){R.index>A?(H=R,R=null):H=R.sibling;var M=g(h,R,p[A],v);if(M===null){R===null&&(R=H);break}e&&R&&M.alternate===null&&t(h,R),d=s(M,d,A),P===null?I=M:P.sibling=M,P=M,R=H}if(A===p.length)return n(h,R),G&&wn(h,A),I;if(R===null){for(;A<p.length;A++)R=f(h,p[A],v),R!==null&&(d=s(R,d,A),P===null?I=R:P.sibling=R,P=R);return G&&wn(h,A),I}for(R=r(h,R);A<p.length;A++)H=m(R,h,A,p[A],v),H!==null&&(e&&H.alternate!==null&&R.delete(H.key===null?A:H.key),d=s(H,d,A),P===null?I=H:P.sibling=H,P=H);return e&&R.forEach(function(Ze){return t(h,Ze)}),G&&wn(h,A),I}function w(h,d,p,v){var I=zr(p);if(typeof I!="function")throw Error(_(150));if(p=I.call(p),p==null)throw Error(_(151));for(var P=I=null,R=d,A=d=0,H=null,M=p.next();R!==null&&!M.done;A++,M=p.next()){R.index>A?(H=R,R=null):H=R.sibling;var Ze=g(h,R,M.value,v);if(Ze===null){R===null&&(R=H);break}e&&R&&Ze.alternate===null&&t(h,R),d=s(Ze,d,A),P===null?I=Ze:P.sibling=Ze,P=Ze,R=H}if(M.done)return n(h,R),G&&wn(h,A),I;if(R===null){for(;!M.done;A++,M=p.next())M=f(h,M.value,v),M!==null&&(d=s(M,d,A),P===null?I=M:P.sibling=M,P=M);return G&&wn(h,A),I}for(R=r(h,R);!M.done;A++,M=p.next())M=m(R,h,A,M.value,v),M!==null&&(e&&M.alternate!==null&&R.delete(M.key===null?A:M.key),d=s(M,d,A),P===null?I=M:P.sibling=M,P=M);return e&&R.forEach(function(Fr){return t(h,Fr)}),G&&wn(h,A),I}function N(h,d,p,v){if(typeof p=="object"&&p!==null&&p.type===Jn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ys:e:{for(var I=p.key,P=d;P!==null;){if(P.key===I){if(I=p.type,I===Jn){if(P.tag===7){n(h,P.sibling),d=i(P,p.props.children),d.return=h,h=d;break e}}else if(P.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Ft&&Eh(I)===P.type){n(h,P.sibling),d=i(P,p.props),d.ref=Kr(h,P,p),d.return=h,h=d;break e}n(h,P);break}else t(h,P);P=P.sibling}p.type===Jn?(d=An(p.props.children,h.mode,v,p.key),d.return=h,h=d):(v=Ys(p.type,p.key,p.props,null,h.mode,v),v.ref=Kr(h,d,p),v.return=h,h=v)}return o(h);case Qn:e:{for(P=p.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(h,d.sibling),d=i(d,p.children||[]),d.return=h,h=d;break e}else{n(h,d);break}else t(h,d);d=d.sibling}d=il(p,h.mode,v),d.return=h,h=d}return o(h);case Ft:return P=p._init,N(h,d,P(p._payload),v)}if(Jr(p))return y(h,d,p,v);if(zr(p))return w(h,d,p,v);As(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(h,d.sibling),d=i(d,p),d.return=h,h=d):(n(h,d),d=rl(p,h.mode,v),d.return=h,h=d),o(h)):n(h,d)}return N}var Tr=yg(!0),wg=yg(!1),Ji={},vt=hn(Ji),Ri=hn(Ji),Ai=hn(Ji);function Tn(e){if(e===Ji)throw Error(_(174));return e}function wc(e,t){switch(V(Ai,t),V(Ri,e),V(vt,Ji),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ul(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ul(t,e)}K(vt),V(vt,t)}function kr(){K(vt),K(Ri),K(Ai)}function _g(e){Tn(Ai.current);var t=Tn(vt.current),n=Ul(t,e.type);t!==n&&(V(Ri,e),V(vt,n))}function _c(e){Ri.current===e&&(K(vt),K(Ri))}var q=hn(0);function yo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qa=[];function Ec(){for(var e=0;e<Qa.length;e++)Qa[e]._workInProgressVersionPrimary=null;Qa.length=0}var bs=$t.ReactCurrentDispatcher,Ja=$t.ReactCurrentBatchConfig,Dn=0,X=null,re=null,oe=null,wo=!1,ci=!1,Ni=0,V1=0;function ge(){throw Error(_(321))}function Ic(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ot(e[n],t[n]))return!1;return!0}function Sc(e,t,n,r,i,s){if(Dn=s,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,bs.current=e===null||e.memoizedState===null?K1:G1,e=n(r,i),ci){s=0;do{if(ci=!1,Ni=0,25<=s)throw Error(_(301));s+=1,oe=re=null,t.updateQueue=null,bs.current=q1,e=n(r,i)}while(ci)}if(bs.current=_o,t=re!==null&&re.next!==null,Dn=0,oe=re=X=null,wo=!1,t)throw Error(_(300));return e}function Tc(){var e=Ni!==0;return Ni=0,e}function dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?X.memoizedState=oe=e:oe=oe.next=e,oe}function Qe(){if(re===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=oe===null?X.memoizedState:oe.next;if(t!==null)oe=t,re=e;else{if(e===null)throw Error(_(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},oe===null?X.memoizedState=oe=e:oe=oe.next=e}return oe}function Oi(e,t){return typeof t=="function"?t(e):t}function Za(e){var t=Qe(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=re,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Dn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,X.lanes|=c,Mn|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,ot(r,t.memoizedState)||(Oe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,X.lanes|=s,Mn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function el(e){var t=Qe(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);ot(s,t.memoizedState)||(Oe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Eg(){}function Ig(e,t){var n=X,r=Qe(),i=t(),s=!ot(r.memoizedState,i);if(s&&(r.memoizedState=i,Oe=!0),r=r.queue,kc(kg.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,Li(9,Tg.bind(null,n,r,i,t),void 0,null),ae===null)throw Error(_(349));Dn&30||Sg(n,t,i)}return i}function Sg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Tg(e,t,n,r){t.value=n,t.getSnapshot=r,Cg(t)&&Pg(e)}function kg(e,t,n){return n(function(){Cg(t)&&Pg(e)})}function Cg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ot(e,n)}catch{return!0}}function Pg(e){var t=Lt(e,1);t!==null&&st(t,e,1,-1)}function Ih(e){var t=dt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:e},t.queue=e,e=e.dispatch=b1.bind(null,X,e),[t.memoizedState,e]}function Li(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Rg(){return Qe().memoizedState}function Ks(e,t,n,r){var i=dt();X.flags|=e,i.memoizedState=Li(1|t,n,void 0,r===void 0?null:r)}function ea(e,t,n,r){var i=Qe();r=r===void 0?null:r;var s=void 0;if(re!==null){var o=re.memoizedState;if(s=o.destroy,r!==null&&Ic(r,o.deps)){i.memoizedState=Li(t,n,s,r);return}}X.flags|=e,i.memoizedState=Li(1|t,n,s,r)}function Sh(e,t){return Ks(8390656,8,e,t)}function kc(e,t){return ea(2048,8,e,t)}function Ag(e,t){return ea(4,2,e,t)}function Ng(e,t){return ea(4,4,e,t)}function Og(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lg(e,t,n){return n=n!=null?n.concat([e]):null,ea(4,4,Og.bind(null,t,e),n)}function Cc(){}function xg(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ic(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Dg(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ic(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Mg(e,t,n){return Dn&21?(ot(n,t)||(n=jp(),X.lanes|=n,Mn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n)}function H1(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=Ja.transition;Ja.transition={};try{e(!1),t()}finally{B=n,Ja.transition=r}}function $g(){return Qe().memoizedState}function W1(e,t,n){var r=nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ug(e))jg(t,n);else if(n=pg(e,t,n,r),n!==null){var i=Pe();st(n,e,r,i),Fg(n,t,r)}}function b1(e,t,n){var r=nn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ug(e))jg(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,ot(a,o)){var l=t.interleaved;l===null?(i.next=i,vc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=pg(e,t,i,r),n!==null&&(i=Pe(),st(n,e,r,i),Fg(n,t,r))}}function Ug(e){var t=e.alternate;return e===X||t!==null&&t===X}function jg(e,t){ci=wo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rc(e,n)}}var _o={readContext:Ye,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},K1={readContext:Ye,useCallback:function(e,t){return dt().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:Sh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ks(4194308,4,Og.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ks(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ks(4,2,e,t)},useMemo:function(e,t){var n=dt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=dt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=W1.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=dt();return e={current:e},t.memoizedState=e},useState:Ih,useDebugValue:Cc,useDeferredValue:function(e){return dt().memoizedState=e},useTransition:function(){var e=Ih(!1),t=e[0];return e=H1.bind(null,e[1]),dt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,i=dt();if(G){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),ae===null)throw Error(_(349));Dn&30||Sg(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Sh(kg.bind(null,r,s,e),[e]),r.flags|=2048,Li(9,Tg.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=dt(),t=ae.identifierPrefix;if(G){var n=kt,r=Tt;n=(r&~(1<<32-it(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ni++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=V1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},G1={readContext:Ye,useCallback:xg,useContext:Ye,useEffect:kc,useImperativeHandle:Lg,useInsertionEffect:Ag,useLayoutEffect:Ng,useMemo:Dg,useReducer:Za,useRef:Rg,useState:function(){return Za(Oi)},useDebugValue:Cc,useDeferredValue:function(e){var t=Qe();return Mg(t,re.memoizedState,e)},useTransition:function(){var e=Za(Oi)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Eg,useSyncExternalStore:Ig,useId:$g,unstable_isNewReconciler:!1},q1={readContext:Ye,useCallback:xg,useContext:Ye,useEffect:kc,useImperativeHandle:Lg,useInsertionEffect:Ag,useLayoutEffect:Ng,useMemo:Dg,useReducer:el,useRef:Rg,useState:function(){return el(Oi)},useDebugValue:Cc,useDeferredValue:function(e){var t=Qe();return re===null?t.memoizedState=e:Mg(t,re.memoizedState,e)},useTransition:function(){var e=el(Oi)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Eg,useSyncExternalStore:Ig,useId:$g,unstable_isNewReconciler:!1};function Cr(e,t){try{var n="",r=t;do n+=I0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function tl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ou(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var X1=typeof WeakMap=="function"?WeakMap:Map;function Bg(e,t,n){n=At(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Io||(Io=!0,mu=r),ou(e,t)},n}function zg(e,t,n){n=At(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ou(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ou(e,t),typeof r!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Th(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new X1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=uw.bind(null,e,t,n),t.then(e,e))}function kh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ch(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=At(-1,1),t.tag=2,en(n,t,1))),n.lanes|=1),e)}var Y1=$t.ReactCurrentOwner,Oe=!1;function ke(e,t,n,r){t.child=e===null?wg(t,null,n,r):Tr(t,e.child,n,r)}function Ph(e,t,n,r,i){n=n.render;var s=t.ref;return gr(t,i),r=Sc(e,t,n,r,s,i),n=Tc(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xt(e,t,i)):(G&&n&&dc(t),t.flags|=1,ke(e,t,r,i),t.child)}function Rh(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Dc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Vg(e,t,s,r,i)):(e=Ys(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ti,n(o,r)&&e.ref===t.ref)return xt(e,t,i)}return t.flags|=1,e=rn(s,r),e.ref=t.ref,e.return=t,t.child=e}function Vg(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Ti(s,r)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Oe=!0);else return t.lanes=e.lanes,xt(e,t,i)}return au(e,t,n,r,i)}function Hg(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(lr,$e),$e|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(lr,$e),$e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,V(lr,$e),$e|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,V(lr,$e),$e|=r;return ke(e,t,i,n),t.child}function Wg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function au(e,t,n,r,i){var s=xe(n)?Ln:Se.current;return s=Ir(t,s),gr(t,i),n=Sc(e,t,n,r,s,i),r=Tc(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xt(e,t,i)):(G&&r&&dc(t),t.flags|=1,ke(e,t,n,i),t.child)}function Ah(e,t,n,r,i){if(xe(n)){var s=!0;ho(t)}else s=!1;if(gr(t,i),t.stateNode===null)Gs(e,t),vg(t,n,r),su(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ye(u):(u=xe(n)?Ln:Se.current,u=Ir(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&_h(t,o,r,u),Bt=!1;var g=t.memoizedState;o.state=g,vo(t,r,o,i),l=t.memoizedState,a!==r||g!==l||Le.current||Bt?(typeof c=="function"&&(iu(t,n,c,r),l=t.memoizedState),(a=Bt||wh(t,n,a,r,g,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,gg(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:tt(t.type,a),o.props=u,f=t.pendingProps,g=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ye(l):(l=xe(n)?Ln:Se.current,l=Ir(t,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||g!==l)&&_h(t,o,r,l),Bt=!1,g=t.memoizedState,o.state=g,vo(t,r,o,i);var y=t.memoizedState;a!==f||g!==y||Le.current||Bt?(typeof m=="function"&&(iu(t,n,m,r),y=t.memoizedState),(u=Bt||wh(t,n,u,r,g,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return lu(e,t,n,r,s,i)}function lu(e,t,n,r,i,s){Wg(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&ph(t,n,!1),xt(e,t,s);r=t.stateNode,Y1.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Tr(t,e.child,null,s),t.child=Tr(t,null,a,s)):ke(e,t,a,s),t.memoizedState=r.state,i&&ph(t,n,!0),t.child}function bg(e){var t=e.stateNode;t.pendingContext?fh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&fh(e,t.context,!1),wc(e,t.containerInfo)}function Nh(e,t,n,r,i){return Sr(),fc(i),t.flags|=256,ke(e,t,n,r),t.child}var uu={dehydrated:null,treeContext:null,retryLane:0};function cu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Kg(e,t,n){var r=t.pendingProps,i=q.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),V(q,i&1),e===null)return nu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ra(o,r,0,null),e=An(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=cu(n),t.memoizedState=uu,e):Pc(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Q1(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=rn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=rn(a,s):(s=An(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?cu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=uu,r}return s=e.child,e=s.sibling,r=rn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Pc(e,t){return t=ra({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ns(e,t,n,r){return r!==null&&fc(r),Tr(t,e.child,null,n),e=Pc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Q1(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=tl(Error(_(422))),Ns(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=ra({mode:"visible",children:r.children},i,0,null),s=An(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Tr(t,e.child,null,o),t.child.memoizedState=cu(o),t.memoizedState=uu,s);if(!(t.mode&1))return Ns(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(_(419)),r=tl(s,r,void 0),Ns(e,t,o,r)}if(a=(o&e.childLanes)!==0,Oe||a){if(r=ae,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Lt(e,i),st(r,e,i,-1))}return xc(),r=tl(Error(_(421))),Ns(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=cw.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ue=Zt(i.nextSibling),Fe=t,G=!0,rt=null,e!==null&&(He[We++]=Tt,He[We++]=kt,He[We++]=xn,Tt=e.id,kt=e.overflow,xn=t),t=Pc(t,r.children),t.flags|=4096,t)}function Oh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ru(e.return,t,n)}function nl(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Gg(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(ke(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oh(e,n,t);else if(e.tag===19)Oh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&yo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),nl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&yo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}nl(t,!0,n,null,s);break;case"together":nl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Gs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function J1(e,t,n){switch(t.tag){case 3:bg(t),Sr();break;case 5:_g(t);break;case 1:xe(t.type)&&ho(t);break;case 4:wc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;V(go,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?Kg(e,t,n):(V(q,q.current&1),e=xt(e,t,n),e!==null?e.sibling:null);V(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Gg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,Hg(e,t,n)}return xt(e,t,n)}var qg,du,Xg,Yg;qg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};du=function(){};Xg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Tn(vt.current);var s=null;switch(n){case"input":i=xl(e,i),r=xl(e,r),s=[];break;case"select":i=Y({},i,{value:void 0}),r=Y({},r,{value:void 0}),s=[];break;case"textarea":i=$l(e,i),r=$l(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=uo)}jl(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(vi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(vi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&W("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Yg=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gr(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Z1(e,t,n){var r=t.pendingProps;switch(hc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return xe(t.type)&&co(),me(t),null;case 3:return r=t.stateNode,kr(),K(Le),K(Se),Ec(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Rs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rt!==null&&(wu(rt),rt=null))),du(e,t),me(t),null;case 5:_c(t);var i=Tn(Ai.current);if(n=t.type,e!==null&&t.stateNode!=null)Xg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return me(t),null}if(e=Tn(vt.current),Rs(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[ht]=t,r[Pi]=s,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<ei.length;i++)W(ei[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":Bd(r,s),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},W("invalid",r);break;case"textarea":Vd(r,s),W("invalid",r)}jl(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ps(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ps(r.textContent,a,e),i=["children",""+a]):vi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&W("scroll",r)}switch(n){case"input":ws(r),zd(r,s,!0);break;case"textarea":ws(r),Hd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=uo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Sp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[ht]=t,e[Pi]=r,qg(e,t,!1,!1),t.stateNode=e;e:{switch(o=Fl(n,r),n){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<ei.length;i++)W(ei[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":Bd(e,r),i=xl(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Y({},r,{value:void 0}),W("invalid",e);break;case"textarea":Vd(e,r),i=$l(e,r),W("invalid",e);break;default:i=r}jl(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Cp(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Tp(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&yi(e,l):typeof l=="number"&&yi(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(vi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&W("scroll",e):l!=null&&Qu(e,s,l,o))}switch(n){case"input":ws(e),zd(e,r,!1);break;case"textarea":ws(e),Hd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+un(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?dr(e,!!r.multiple,s,!1):r.defaultValue!=null&&dr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=uo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)Yg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=Tn(Ai.current),Tn(vt.current),Rs(t)){if(r=t.stateNode,n=t.memoizedProps,r[ht]=t,(s=r.nodeValue!==n)&&(e=Fe,e!==null))switch(e.tag){case 3:Ps(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ps(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ht]=t,t.stateNode=r}return me(t),null;case 13:if(K(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Ue!==null&&t.mode&1&&!(t.flags&128))fg(),Sr(),t.flags|=98560,s=!1;else if(s=Rs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(_(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(_(317));s[ht]=t}else Sr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),s=!1}else rt!==null&&(wu(rt),rt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?ie===0&&(ie=3):xc())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return kr(),du(e,t),e===null&&ki(t.stateNode.containerInfo),me(t),null;case 10:return mc(t.type._context),me(t),null;case 17:return xe(t.type)&&co(),me(t),null;case 19:if(K(q),s=t.memoizedState,s===null)return me(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Gr(s,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=yo(e),o!==null){for(t.flags|=128,Gr(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(q,q.current&1|2),t.child}e=e.sibling}s.tail!==null&&Z()>Pr&&(t.flags|=128,r=!0,Gr(s,!1),t.lanes=4194304)}else{if(!r)if(e=yo(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!G)return me(t),null}else 2*Z()-s.renderingStartTime>Pr&&n!==1073741824&&(t.flags|=128,r=!0,Gr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Z(),t.sibling=null,n=q.current,V(q,r?n&1|2:n&1),t):(me(t),null);case 22:case 23:return Lc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?$e&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function ew(e,t){switch(hc(t),t.tag){case 1:return xe(t.type)&&co(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kr(),K(Le),K(Se),Ec(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return _c(t),null;case 13:if(K(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(q),null;case 4:return kr(),null;case 10:return mc(t.type._context),null;case 22:case 23:return Lc(),null;case 24:return null;default:return null}}var Os=!1,ye=!1,tw=typeof WeakSet=="function"?WeakSet:Set,S=null;function ar(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function hu(e,t,n){try{n()}catch(r){Q(e,t,r)}}var Lh=!1;function nw(e,t){if(Xl=oo,e=eg(),cc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=e,g=null;t:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)g=f,f=m;for(;;){if(f===e)break t;if(g===n&&++u===i&&(a=o),g===s&&++c===r&&(l=o),(m=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yl={focusedElem:e,selectionRange:n},oo=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,N=y.memoizedState,h=t.stateNode,d=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:tt(t.type,w),N);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(v){Q(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return y=Lh,Lh=!1,y}function di(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&hu(t,n,s)}i=i.next}while(i!==r)}}function ta(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function fu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Qg(e){var t=e.alternate;t!==null&&(e.alternate=null,Qg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ht],delete t[Pi],delete t[Zl],delete t[j1],delete t[F1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Jg(e){return e.tag===5||e.tag===3||e.tag===4}function xh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=uo));else if(r!==4&&(e=e.child,e!==null))for(pu(e,t,n),e=e.sibling;e!==null;)pu(e,t,n),e=e.sibling}function gu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(gu(e,t,n),e=e.sibling;e!==null;)gu(e,t,n),e=e.sibling}var ce=null,nt=!1;function Ut(e,t,n){for(n=n.child;n!==null;)Zg(e,t,n),n=n.sibling}function Zg(e,t,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Go,n)}catch{}switch(n.tag){case 5:ye||ar(n,t);case 6:var r=ce,i=nt;ce=null,Ut(e,t,n),ce=r,nt=i,ce!==null&&(nt?(e=ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ce.removeChild(n.stateNode));break;case 18:ce!==null&&(nt?(e=ce,n=n.stateNode,e.nodeType===8?Xa(e.parentNode,n):e.nodeType===1&&Xa(e,n),Ii(e)):Xa(ce,n.stateNode));break;case 4:r=ce,i=nt,ce=n.stateNode.containerInfo,nt=!0,Ut(e,t,n),ce=r,nt=i;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&hu(n,t,o),i=i.next}while(i!==r)}Ut(e,t,n);break;case 1:if(!ye&&(ar(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Q(n,t,a)}Ut(e,t,n);break;case 21:Ut(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,Ut(e,t,n),ye=r):Ut(e,t,n);break;default:Ut(e,t,n)}}function Dh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new tw),t.forEach(function(r){var i=dw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function et(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ce=a.stateNode,nt=!1;break e;case 3:ce=a.stateNode.containerInfo,nt=!0;break e;case 4:ce=a.stateNode.containerInfo,nt=!0;break e}a=a.return}if(ce===null)throw Error(_(160));Zg(s,o,i),ce=null,nt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Q(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)em(t,e),t=t.sibling}function em(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(et(t,e),ct(e),r&4){try{di(3,e,e.return),ta(3,e)}catch(w){Q(e,e.return,w)}try{di(5,e,e.return)}catch(w){Q(e,e.return,w)}}break;case 1:et(t,e),ct(e),r&512&&n!==null&&ar(n,n.return);break;case 5:if(et(t,e),ct(e),r&512&&n!==null&&ar(n,n.return),e.flags&32){var i=e.stateNode;try{yi(i,"")}catch(w){Q(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ep(i,s),Fl(a,o);var u=Fl(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?Cp(i,f):c==="dangerouslySetInnerHTML"?Tp(i,f):c==="children"?yi(i,f):Qu(i,c,f,u)}switch(a){case"input":Dl(i,s);break;case"textarea":Ip(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?dr(i,!!s.multiple,m,!1):g!==!!s.multiple&&(s.defaultValue!=null?dr(i,!!s.multiple,s.defaultValue,!0):dr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Pi]=s}catch(w){Q(e,e.return,w)}}break;case 6:if(et(t,e),ct(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(w){Q(e,e.return,w)}}break;case 3:if(et(t,e),ct(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ii(t.containerInfo)}catch(w){Q(e,e.return,w)}break;case 4:et(t,e),ct(e);break;case 13:et(t,e),ct(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Nc=Z())),r&4&&Dh(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(u=ye)||c,et(t,e),ye=u):et(t,e),ct(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(S=e,c=e.child;c!==null;){for(f=S=c;S!==null;){switch(g=S,m=g.child,g.tag){case 0:case 11:case 14:case 15:di(4,g,g.return);break;case 1:ar(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){Q(r,n,w)}}break;case 5:ar(g,g.return);break;case 22:if(g.memoizedState!==null){$h(f);continue}}m!==null?(m.return=g,S=m):$h(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=kp("display",o))}catch(w){Q(e,e.return,w)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){Q(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:et(t,e),ct(e),r&4&&Dh(e);break;case 21:break;default:et(t,e),ct(e)}}function ct(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Jg(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(yi(i,""),r.flags&=-33);var s=xh(e);gu(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=xh(e);pu(e,a,o);break;default:throw Error(_(161))}}catch(l){Q(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rw(e,t,n){S=e,tm(e)}function tm(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var i=S,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Os;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ye;a=Os;var u=ye;if(Os=o,(ye=l)&&!u)for(S=i;S!==null;)o=S,l=o.child,o.tag===22&&o.memoizedState!==null?Uh(i):l!==null?(l.return=o,S=l):Uh(i);for(;s!==null;)S=s,tm(s),s=s.sibling;S=i,Os=a,ye=u}Mh(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,S=s):Mh(e)}}function Mh(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||ta(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:tt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&yh(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}yh(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ii(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}ye||t.flags&512&&fu(t)}catch(g){Q(t,t.return,g)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function $h(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Uh(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ta(4,t)}catch(l){Q(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Q(t,i,l)}}var s=t.return;try{fu(t)}catch(l){Q(t,s,l)}break;case 5:var o=t.return;try{fu(t)}catch(l){Q(t,o,l)}}}catch(l){Q(t,t.return,l)}if(t===e){S=null;break}var a=t.sibling;if(a!==null){a.return=t.return,S=a;break}S=t.return}}var iw=Math.ceil,Eo=$t.ReactCurrentDispatcher,Rc=$t.ReactCurrentOwner,Ge=$t.ReactCurrentBatchConfig,j=0,ae=null,te=null,he=0,$e=0,lr=hn(0),ie=0,xi=null,Mn=0,na=0,Ac=0,hi=null,Ne=null,Nc=0,Pr=1/0,It=null,Io=!1,mu=null,tn=null,Ls=!1,qt=null,So=0,fi=0,vu=null,qs=-1,Xs=0;function Pe(){return j&6?Z():qs!==-1?qs:qs=Z()}function nn(e){return e.mode&1?j&2&&he!==0?he&-he:z1.transition!==null?(Xs===0&&(Xs=jp()),Xs):(e=B,e!==0||(e=window.event,e=e===void 0?16:bp(e.type)),e):1}function st(e,t,n,r){if(50<fi)throw fi=0,vu=null,Error(_(185));Xi(e,n,r),(!(j&2)||e!==ae)&&(e===ae&&(!(j&2)&&(na|=n),ie===4&&Vt(e,he)),De(e,r),n===1&&j===0&&!(t.mode&1)&&(Pr=Z()+500,Jo&&fn()))}function De(e,t){var n=e.callbackNode;z0(e,t);var r=so(e,e===ae?he:0);if(r===0)n!==null&&Kd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Kd(n),t===1)e.tag===0?B1(jh.bind(null,e)):cg(jh.bind(null,e)),$1(function(){!(j&6)&&fn()}),n=null;else{switch(Fp(r)){case 1:n=nc;break;case 4:n=$p;break;case 16:n=io;break;case 536870912:n=Up;break;default:n=io}n=um(n,nm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function nm(e,t){if(qs=-1,Xs=0,j&6)throw Error(_(327));var n=e.callbackNode;if(mr()&&e.callbackNode!==n)return null;var r=so(e,e===ae?he:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=To(e,r);else{t=r;var i=j;j|=2;var s=im();(ae!==e||he!==t)&&(It=null,Pr=Z()+500,Rn(e,t));do try{aw();break}catch(a){rm(e,a)}while(1);gc(),Eo.current=s,j=i,te!==null?t=0:(ae=null,he=0,t=ie)}if(t!==0){if(t===2&&(i=Wl(e),i!==0&&(r=i,t=yu(e,i))),t===1)throw n=xi,Rn(e,0),Vt(e,r),De(e,Z()),n;if(t===6)Vt(e,r);else{if(i=e.current.alternate,!(r&30)&&!sw(i)&&(t=To(e,r),t===2&&(s=Wl(e),s!==0&&(r=s,t=yu(e,s))),t===1))throw n=xi,Rn(e,0),Vt(e,r),De(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:_n(e,Ne,It);break;case 3:if(Vt(e,r),(r&130023424)===r&&(t=Nc+500-Z(),10<t)){if(so(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Pe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Jl(_n.bind(null,e,Ne,It),t);break}_n(e,Ne,It);break;case 4:if(Vt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-it(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*iw(r/1960))-r,10<r){e.timeoutHandle=Jl(_n.bind(null,e,Ne,It),r);break}_n(e,Ne,It);break;case 5:_n(e,Ne,It);break;default:throw Error(_(329))}}}return De(e,Z()),e.callbackNode===n?nm.bind(null,e):null}function yu(e,t){var n=hi;return e.current.memoizedState.isDehydrated&&(Rn(e,t).flags|=256),e=To(e,t),e!==2&&(t=Ne,Ne=n,t!==null&&wu(t)),e}function wu(e){Ne===null?Ne=e:Ne.push.apply(Ne,e)}function sw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ot(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vt(e,t){for(t&=~Ac,t&=~na,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function jh(e){if(j&6)throw Error(_(327));mr();var t=so(e,0);if(!(t&1))return De(e,Z()),null;var n=To(e,t);if(e.tag!==0&&n===2){var r=Wl(e);r!==0&&(t=r,n=yu(e,r))}if(n===1)throw n=xi,Rn(e,0),Vt(e,t),De(e,Z()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_n(e,Ne,It),De(e,Z()),null}function Oc(e,t){var n=j;j|=1;try{return e(t)}finally{j=n,j===0&&(Pr=Z()+500,Jo&&fn())}}function $n(e){qt!==null&&qt.tag===0&&!(j&6)&&mr();var t=j;j|=1;var n=Ge.transition,r=B;try{if(Ge.transition=null,B=1,e)return e()}finally{B=r,Ge.transition=n,j=t,!(j&6)&&fn()}}function Lc(){$e=lr.current,K(lr)}function Rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,M1(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(hc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&co();break;case 3:kr(),K(Le),K(Se),Ec();break;case 5:_c(r);break;case 4:kr();break;case 13:K(q);break;case 19:K(q);break;case 10:mc(r.type._context);break;case 22:case 23:Lc()}n=n.return}if(ae=e,te=e=rn(e.current,null),he=$e=t,ie=0,xi=null,Ac=na=Mn=0,Ne=hi=null,Sn!==null){for(t=0;t<Sn.length;t++)if(n=Sn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Sn=null}return e}function rm(e,t){do{var n=te;try{if(gc(),bs.current=_o,wo){for(var r=X.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}wo=!1}if(Dn=0,oe=re=X=null,ci=!1,Ni=0,Rc.current=null,n===null||n.return===null){ie=1,xi=t,te=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=he,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var g=c.alternate;g?(c.updateQueue=g.updateQueue,c.memoizedState=g.memoizedState,c.lanes=g.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=kh(o);if(m!==null){m.flags&=-257,Ch(m,o,a,s,t),m.mode&1&&Th(s,u,t),t=m,l=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(l),t.updateQueue=w}else y.add(l);break e}else{if(!(t&1)){Th(s,u,t),xc();break e}l=Error(_(426))}}else if(G&&a.mode&1){var N=kh(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Ch(N,o,a,s,t),fc(Cr(l,a));break e}}s=l=Cr(l,a),ie!==4&&(ie=2),hi===null?hi=[s]:hi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var h=Bg(s,l,t);vh(s,h);break e;case 1:a=l;var d=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(tn===null||!tn.has(p)))){s.flags|=65536,t&=-t,s.lanes|=t;var v=zg(s,a,t);vh(s,v);break e}}s=s.return}while(s!==null)}om(n)}catch(I){t=I,te===n&&n!==null&&(te=n=n.return);continue}break}while(1)}function im(){var e=Eo.current;return Eo.current=_o,e===null?_o:e}function xc(){(ie===0||ie===3||ie===2)&&(ie=4),ae===null||!(Mn&268435455)&&!(na&268435455)||Vt(ae,he)}function To(e,t){var n=j;j|=2;var r=im();(ae!==e||he!==t)&&(It=null,Rn(e,t));do try{ow();break}catch(i){rm(e,i)}while(1);if(gc(),j=n,Eo.current=r,te!==null)throw Error(_(261));return ae=null,he=0,ie}function ow(){for(;te!==null;)sm(te)}function aw(){for(;te!==null&&!L0();)sm(te)}function sm(e){var t=lm(e.alternate,e,$e);e.memoizedProps=e.pendingProps,t===null?om(e):te=t,Rc.current=null}function om(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ew(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,te=null;return}}else if(n=Z1(n,t,$e),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);ie===0&&(ie=5)}function _n(e,t,n){var r=B,i=Ge.transition;try{Ge.transition=null,B=1,lw(e,t,n,r)}finally{Ge.transition=i,B=r}return null}function lw(e,t,n,r){do mr();while(qt!==null);if(j&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(V0(e,s),e===ae&&(te=ae=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ls||(Ls=!0,um(io,function(){return mr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ge.transition,Ge.transition=null;var o=B;B=1;var a=j;j|=4,Rc.current=null,nw(e,n),em(n,e),R1(Yl),oo=!!Xl,Yl=Xl=null,e.current=n,rw(n),x0(),j=a,B=o,Ge.transition=s}else e.current=n;if(Ls&&(Ls=!1,qt=e,So=i),s=e.pendingLanes,s===0&&(tn=null),$0(n.stateNode),De(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Io)throw Io=!1,e=mu,mu=null,e;return So&1&&e.tag!==0&&mr(),s=e.pendingLanes,s&1?e===vu?fi++:(fi=0,vu=e):fi=0,fn(),null}function mr(){if(qt!==null){var e=Fp(So),t=Ge.transition,n=B;try{if(Ge.transition=null,B=16>e?16:e,qt===null)var r=!1;else{if(e=qt,qt=null,So=0,j&6)throw Error(_(331));var i=j;for(j|=4,S=e.current;S!==null;){var s=S,o=s.child;if(S.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(S=u;S!==null;){var c=S;switch(c.tag){case 0:case 11:case 15:di(8,c,s)}var f=c.child;if(f!==null)f.return=c,S=f;else for(;S!==null;){c=S;var g=c.sibling,m=c.return;if(Qg(c),c===u){S=null;break}if(g!==null){g.return=m,S=g;break}S=m}}}var y=s.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var N=w.sibling;w.sibling=null,w=N}while(w!==null)}}S=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,S=o;else e:for(;S!==null;){if(s=S,s.flags&2048)switch(s.tag){case 0:case 11:case 15:di(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,S=h;break e}S=s.return}}var d=e.current;for(S=d;S!==null;){o=S;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,S=p;else e:for(o=d;S!==null;){if(a=S,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ta(9,a)}}catch(I){Q(a,a.return,I)}if(a===o){S=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,S=v;break e}S=a.return}}if(j=i,fn(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Go,e)}catch{}r=!0}return r}finally{B=n,Ge.transition=t}}return!1}function Fh(e,t,n){t=Cr(n,t),t=Bg(e,t,1),e=en(e,t,1),t=Pe(),e!==null&&(Xi(e,1,t),De(e,t))}function Q(e,t,n){if(e.tag===3)Fh(e,e,n);else for(;t!==null;){if(t.tag===3){Fh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tn===null||!tn.has(r))){e=Cr(n,e),e=zg(t,e,1),t=en(t,e,1),e=Pe(),t!==null&&(Xi(t,1,e),De(t,e));break}}t=t.return}}function uw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Pe(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(he&n)===n&&(ie===4||ie===3&&(he&130023424)===he&&500>Z()-Nc?Rn(e,0):Ac|=n),De(e,t)}function am(e,t){t===0&&(e.mode&1?(t=Is,Is<<=1,!(Is&130023424)&&(Is=4194304)):t=1);var n=Pe();e=Lt(e,t),e!==null&&(Xi(e,t,n),De(e,n))}function cw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),am(e,n)}function dw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),am(e,n)}var lm;lm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)Oe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Oe=!1,J1(e,t,n);Oe=!!(e.flags&131072)}else Oe=!1,G&&t.flags&1048576&&dg(t,po,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Gs(e,t),e=t.pendingProps;var i=Ir(t,Se.current);gr(t,n),i=Sc(null,t,r,e,i,n);var s=Tc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xe(r)?(s=!0,ho(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,yc(t),i.updater=Zo,t.stateNode=i,i._reactInternals=t,su(t,r,e,n),t=lu(null,t,r,!0,s,n)):(t.tag=0,G&&s&&dc(t),ke(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Gs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=fw(r),e=tt(r,e),i){case 0:t=au(null,t,r,e,n);break e;case 1:t=Ah(null,t,r,e,n);break e;case 11:t=Ph(null,t,r,e,n);break e;case 14:t=Rh(null,t,r,tt(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tt(r,i),au(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tt(r,i),Ah(e,t,r,i,n);case 3:e:{if(bg(t),e===null)throw Error(_(387));r=t.pendingProps,s=t.memoizedState,i=s.element,gg(e,t),vo(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Cr(Error(_(423)),t),t=Nh(e,t,r,n,i);break e}else if(r!==i){i=Cr(Error(_(424)),t),t=Nh(e,t,r,n,i);break e}else for(Ue=Zt(t.stateNode.containerInfo.firstChild),Fe=t,G=!0,rt=null,n=wg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sr(),r===i){t=xt(e,t,n);break e}ke(e,t,r,n)}t=t.child}return t;case 5:return _g(t),e===null&&nu(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Ql(r,i)?o=null:s!==null&&Ql(r,s)&&(t.flags|=32),Wg(e,t),ke(e,t,o,n),t.child;case 6:return e===null&&nu(t),null;case 13:return Kg(e,t,n);case 4:return wc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Tr(t,null,r,n):ke(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tt(r,i),Ph(e,t,r,i,n);case 7:return ke(e,t,t.pendingProps,n),t.child;case 8:return ke(e,t,t.pendingProps.children,n),t.child;case 12:return ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,V(go,r._currentValue),r._currentValue=o,s!==null)if(ot(s.value,o)){if(s.children===i.children&&!Le.current){t=xt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=At(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ru(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(_(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ru(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ke(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,gr(t,n),i=Ye(i),r=r(i),t.flags|=1,ke(e,t,r,n),t.child;case 14:return r=t.type,i=tt(r,t.pendingProps),i=tt(r.type,i),Rh(e,t,r,i,n);case 15:return Vg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tt(r,i),Gs(e,t),t.tag=1,xe(r)?(e=!0,ho(t)):e=!1,gr(t,n),vg(t,r,i),su(t,r,i,n),lu(null,t,r,!0,e,n);case 19:return Gg(e,t,n);case 22:return Hg(e,t,n)}throw Error(_(156,t.tag))};function um(e,t){return Mp(e,t)}function hw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(e,t,n,r){return new hw(e,t,n,r)}function Dc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fw(e){if(typeof e=="function")return Dc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Zu)return 11;if(e===ec)return 14}return 2}function rn(e,t){var n=e.alternate;return n===null?(n=Ke(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ys(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Dc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Jn:return An(n.children,i,s,t);case Ju:o=8,i|=8;break;case Al:return e=Ke(12,n,t,i|2),e.elementType=Al,e.lanes=s,e;case Nl:return e=Ke(13,n,t,i),e.elementType=Nl,e.lanes=s,e;case Ol:return e=Ke(19,n,t,i),e.elementType=Ol,e.lanes=s,e;case yp:return ra(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mp:o=10;break e;case vp:o=9;break e;case Zu:o=11;break e;case ec:o=14;break e;case Ft:o=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Ke(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function An(e,t,n,r){return e=Ke(7,e,r,t),e.lanes=n,e}function ra(e,t,n,r){return e=Ke(22,e,r,t),e.elementType=yp,e.lanes=n,e.stateNode={isHidden:!1},e}function rl(e,t,n){return e=Ke(6,e,null,t),e.lanes=n,e}function il(e,t,n){return t=Ke(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function pw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ja(0),this.expirationTimes=ja(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ja(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mc(e,t,n,r,i,s,o,a,l){return e=new pw(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ke(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yc(s),e}function gw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function cm(e){if(!e)return cn;e=e._reactInternals;e:{if(Hn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(xe(n))return ug(e,n,t)}return t}function dm(e,t,n,r,i,s,o,a,l){return e=Mc(n,r,!0,e,i,s,o,a,l),e.context=cm(null),n=e.current,r=Pe(),i=nn(n),s=At(r,i),s.callback=t??null,en(n,s,i),e.current.lanes=i,Xi(e,i,r),De(e,r),e}function ia(e,t,n,r){var i=t.current,s=Pe(),o=nn(i);return n=cm(n),t.context===null?t.context=n:t.pendingContext=n,t=At(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=en(i,t,o),e!==null&&(st(e,i,o,s),Ws(e,i,o)),o}function ko(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $c(e,t){Bh(e,t),(e=e.alternate)&&Bh(e,t)}function mw(){return null}var hm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Uc(e){this._internalRoot=e}sa.prototype.render=Uc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));ia(e,t,null,null)};sa.prototype.unmount=Uc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$n(function(){ia(null,e,null,null)}),t[Ot]=null}};function sa(e){this._internalRoot=e}sa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zt.length&&t!==0&&t<zt[n].priority;n++);zt.splice(n,0,e),n===0&&Wp(e)}};function jc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function oa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zh(){}function vw(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ko(o);s.call(u)}}var o=dm(t,r,e,0,null,!1,!1,"",zh);return e._reactRootContainer=o,e[Ot]=o.current,ki(e.nodeType===8?e.parentNode:e),$n(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ko(l);a.call(u)}}var l=Mc(e,0,!1,null,null,!1,!1,"",zh);return e._reactRootContainer=l,e[Ot]=l.current,ki(e.nodeType===8?e.parentNode:e),$n(function(){ia(t,l,n,r)}),l}function aa(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ko(o);a.call(l)}}ia(t,o,e,i)}else o=vw(n,t,e,i,r);return ko(o)}Bp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Zr(t.pendingLanes);n!==0&&(rc(t,n|1),De(t,Z()),!(j&6)&&(Pr=Z()+500,fn()))}break;case 13:$n(function(){var r=Lt(e,1);if(r!==null){var i=Pe();st(r,e,1,i)}}),$c(e,1)}};ic=function(e){if(e.tag===13){var t=Lt(e,134217728);if(t!==null){var n=Pe();st(t,e,134217728,n)}$c(e,134217728)}};zp=function(e){if(e.tag===13){var t=nn(e),n=Lt(e,t);if(n!==null){var r=Pe();st(n,e,t,r)}$c(e,t)}};Vp=function(){return B};Hp=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};zl=function(e,t,n){switch(t){case"input":if(Dl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Qo(r);if(!i)throw Error(_(90));_p(r),Dl(r,i)}}}break;case"textarea":Ip(e,n);break;case"select":t=n.value,t!=null&&dr(e,!!n.multiple,t,!1)}};Ap=Oc;Np=$n;var yw={usingClientEntryPoint:!1,Events:[Qi,nr,Qo,Pp,Rp,Oc]},qr={findFiberByHostInstance:In,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ww={bundleType:qr.bundleType,version:qr.version,rendererPackageName:qr.rendererPackageName,rendererConfig:qr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$t.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xp(e),e===null?null:e.stateNode},findFiberByHostInstance:qr.findFiberByHostInstance||mw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xs.isDisabled&&xs.supportsFiber)try{Go=xs.inject(ww),mt=xs}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yw;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jc(t))throw Error(_(200));return gw(e,t,null,n)};ze.createRoot=function(e,t){if(!jc(e))throw Error(_(299));var n=!1,r="",i=hm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Mc(e,1,!1,null,null,n,!1,r,i),e[Ot]=t.current,ki(e.nodeType===8?e.parentNode:e),new Uc(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=xp(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return $n(e)};ze.hydrate=function(e,t,n){if(!oa(t))throw Error(_(200));return aa(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!jc(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=hm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=dm(t,null,e,1,n??null,i,!1,s,o),e[Ot]=t.current,ki(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new sa(t)};ze.render=function(e,t,n){if(!oa(t))throw Error(_(200));return aa(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!oa(e))throw Error(_(40));return e._reactRootContainer?($n(function(){aa(null,null,e,!1,function(){e._reactRootContainer=null,e[Ot]=null})}),!0):!1};ze.unstable_batchedUpdates=Oc;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!oa(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return aa(e,t,n,!1,r)};ze.version="18.2.0-next-9e3b772b8-20220608";function fm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fm)}catch(e){console.error(e)}}fm(),dp.exports=ze;var _w=dp.exports,Vh=_w;Pl.createRoot=Vh.createRoot,Pl.hydrateRoot=Vh.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Di(){return Di=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Di.apply(this,arguments)}var Xt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Xt||(Xt={}));const Hh="popstate";function Ew(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return _u("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Co(i)}return Sw(t,n,null,e)}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Fc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Iw(){return Math.random().toString(36).substr(2,8)}function Wh(e,t){return{usr:e.state,key:e.key,idx:t}}function _u(e,t,n,r){return n===void 0&&(n=null),Di({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Lr(t):t,{state:n,key:t&&t.key||r||Iw()})}function Co(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Lr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Sw(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Xt.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Di({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){a=Xt.Pop;let N=c(),h=N==null?null:N-u;u=N,l&&l({action:a,location:w.location,delta:h})}function g(N,h){a=Xt.Push;let d=_u(w.location,N,h);n&&n(d,N),u=c()+1;let p=Wh(d,u),v=w.createHref(d);try{o.pushState(p,"",v)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(v)}s&&l&&l({action:a,location:w.location,delta:1})}function m(N,h){a=Xt.Replace;let d=_u(w.location,N,h);n&&n(d,N),u=c();let p=Wh(d,u),v=w.createHref(d);o.replaceState(p,"",v),s&&l&&l({action:a,location:w.location,delta:0})}function y(N){let h=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof N=="string"?N:Co(N);return ne(h,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,h)}let w={get action(){return a},get location(){return e(i,o)},listen(N){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Hh,f),l=N,()=>{i.removeEventListener(Hh,f),l=null}},createHref(N){return t(i,N)},createURL:y,encodeLocation(N){let h=y(N);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:g,replace:m,go(N){return o.go(N)}};return w}var bh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(bh||(bh={}));function Tw(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Lr(t):t,i=Bc(r.pathname||"/",n);if(i==null)return null;let s=pm(e);kw(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Dw(s[a],Uw(i));return o}function pm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ne(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=sn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ne(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),pm(s.children,t,c,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:Lw(u,s.index),routesMeta:c})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of gm(s.path))i(s,o,l)}),t}function gm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=gm(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function kw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:xw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Cw=/^:\w+$/,Pw=3,Rw=2,Aw=1,Nw=10,Ow=-2,Kh=e=>e==="*";function Lw(e,t){let n=e.split("/"),r=n.length;return n.some(Kh)&&(r+=Ow),t&&(r+=Rw),n.filter(i=>!Kh(i)).reduce((i,s)=>i+(Cw.test(s)?Pw:s===""?Aw:Nw),r)}function xw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Dw(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=Mw({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;s.push({params:r,pathname:sn([i,c.pathname]),pathnameBase:zw(sn([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=sn([i,c.pathnameBase]))}return s}function Mw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=$w(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let g=a[f]||"";o=s.slice(0,s.length-g.length).replace(/(.)\/+$/,"$1")}return u[c]=jw(a[f]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:e}}function $w(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Fc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Uw(e){try{return decodeURI(e)}catch(t){return Fc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function jw(e,t){try{return decodeURIComponent(e)}catch(n){return Fc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Bc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Fw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Lr(e):e;return{pathname:n?n.startsWith("/")?n:Bw(n,t):t,search:Vw(r),hash:Hw(i)}}function Bw(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function sl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function mm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function vm(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Lr(e):(i=Di({},e),ne(!i.pathname||!i.pathname.includes("?"),sl("?","pathname","search",i)),ne(!i.pathname||!i.pathname.includes("#"),sl("#","pathname","hash",i)),ne(!i.search||!i.search.includes("#"),sl("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let f=t.length-1;if(o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),f-=1;i.pathname=g.join("/")}a=f>=0?t[f]:"/"}let l=Fw(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const sn=e=>e.join("/").replace(/\/\/+/g,"/"),zw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Vw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Hw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ww(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ym=["post","put","patch","delete"];new Set(ym);const bw=["get",...ym];new Set(bw);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Po(){return Po=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Po.apply(this,arguments)}const zc=T.createContext(null),Kw=T.createContext(null),xr=T.createContext(null),la=T.createContext(null),Wn=T.createContext({outlet:null,matches:[],isDataRoute:!1}),wm=T.createContext(null);function Gw(e,t){let{relative:n}=t===void 0?{}:t;Zi()||ne(!1);let{basename:r,navigator:i}=T.useContext(xr),{hash:s,pathname:o,search:a}=Em(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:sn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Zi(){return T.useContext(la)!=null}function ua(){return Zi()||ne(!1),T.useContext(la).location}function _m(e){T.useContext(xr).static||T.useLayoutEffect(e)}function qw(){let{isDataRoute:e}=T.useContext(Wn);return e?a_():Xw()}function Xw(){Zi()||ne(!1);let e=T.useContext(zc),{basename:t,navigator:n}=T.useContext(xr),{matches:r}=T.useContext(Wn),{pathname:i}=ua(),s=JSON.stringify(mm(r).map(l=>l.pathnameBase)),o=T.useRef(!1);return _m(()=>{o.current=!0}),T.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=vm(l,JSON.parse(s),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:sn([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,s,i,e])}function Em(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=T.useContext(Wn),{pathname:i}=ua(),s=JSON.stringify(mm(r).map(o=>o.pathnameBase));return T.useMemo(()=>vm(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function Yw(e,t){return Qw(e,t)}function Qw(e,t,n){Zi()||ne(!1);let{navigator:r}=T.useContext(xr),{matches:i}=T.useContext(Wn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=ua(),u;if(t){var c;let w=typeof t=="string"?Lr(t):t;a==="/"||(c=w.pathname)!=null&&c.startsWith(a)||ne(!1),u=w}else u=l;let f=u.pathname||"/",g=a==="/"?f:f.slice(a.length)||"/",m=Tw(e,{pathname:g}),y=n_(m&&m.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:sn([a,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:sn([a,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return t&&y?T.createElement(la.Provider,{value:{location:Po({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Xt.Pop}},y):y}function Jw(){let e=o_(),t=Ww(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,s)}const Zw=T.createElement(Jw,null);class e_ extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?T.createElement(Wn.Provider,{value:this.props.routeContext},T.createElement(wm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function t_(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(zc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Wn.Provider,{value:t},r)}function n_(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let s=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||ne(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,f=null;n&&(f=l.route.errorElement||Zw);let g=t.concat(s.slice(0,u+1)),m=()=>{let y;return c?y=f:l.route.Component?y=T.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,T.createElement(t_,{match:l,routeContext:{outlet:a,matches:g,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?T.createElement(e_,{location:n.location,revalidation:n.revalidation,component:f,error:c,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var Im=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Im||{}),Ro=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ro||{});function r_(e){let t=T.useContext(zc);return t||ne(!1),t}function i_(e){let t=T.useContext(Kw);return t||ne(!1),t}function s_(e){let t=T.useContext(Wn);return t||ne(!1),t}function Sm(e){let t=s_(),n=t.matches[t.matches.length-1];return n.route.id||ne(!1),n.route.id}function o_(){var e;let t=T.useContext(wm),n=i_(Ro.UseRouteError),r=Sm(Ro.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function a_(){let{router:e}=r_(Im.UseNavigateStable),t=Sm(Ro.UseNavigateStable),n=T.useRef(!1);return _m(()=>{n.current=!0}),T.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Po({fromRouteId:t},s)))},[e,t])}function Eu(e){ne(!1)}function l_(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Xt.Pop,navigator:s,static:o=!1}=e;Zi()&&ne(!1);let a=t.replace(/^\/*/,"/"),l=T.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Lr(r));let{pathname:u="/",search:c="",hash:f="",state:g=null,key:m="default"}=r,y=T.useMemo(()=>{let w=Bc(u,a);return w==null?null:{location:{pathname:w,search:c,hash:f,state:g,key:m},navigationType:i}},[a,u,c,f,g,m,i]);return y==null?null:T.createElement(xr.Provider,{value:l},T.createElement(la.Provider,{children:n,value:y}))}function u_(e){let{children:t,location:n}=e;return Yw(Iu(t),n)}new Promise(()=>{});function Iu(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,i)=>{if(!T.isValidElement(r))return;let s=[...t,i];if(r.type===T.Fragment){n.push.apply(n,Iu(r.props.children,s));return}r.type!==Eu&&ne(!1),!r.props.index||!r.props.children||ne(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Iu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Su(){return Su=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Su.apply(this,arguments)}function c_(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function d_(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function h_(e,t){return e.button===0&&(!t||t==="_self")&&!d_(e)}const f_=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],p_="startTransition",Gh=c0[p_];function g_(e){let{basename:t,children:n,future:r,window:i}=e,s=T.useRef();s.current==null&&(s.current=Ew({window:i,v5Compat:!0}));let o=s.current,[a,l]=T.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=T.useCallback(f=>{u&&Gh?Gh(()=>l(f)):l(f)},[l,u]);return T.useLayoutEffect(()=>o.listen(c),[o,c]),T.createElement(l_,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}const m_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",v_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qh=T.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=t,f=c_(t,f_),{basename:g}=T.useContext(xr),m,y=!1;if(typeof u=="string"&&v_.test(u)&&(m=u,m_))try{let d=new URL(window.location.href),p=u.startsWith("//")?new URL(d.protocol+u):new URL(u),v=Bc(p.pathname,g);p.origin===d.origin&&v!=null?u=v+p.search+p.hash:y=!0}catch{}let w=Gw(u,{relative:i}),N=y_(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function h(d){r&&r(d),d.defaultPrevented||N(d)}return T.createElement("a",Su({},f,{href:m||w,onClick:y||s?r:h,ref:n,target:l}))});var Xh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Xh||(Xh={}));var Yh;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Yh||(Yh={}));function y_(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=t===void 0?{}:t,a=qw(),l=ua(),u=Em(e,{relative:o});return T.useCallback(c=>{if(h_(c,n)){c.preventDefault();let f=r!==void 0?r:Co(l)===Co(u);a(e,{replace:f,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,e,s,o])}/**
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
 */const Tm=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},w_=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},km={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=s>>2,f=(s&3)<<4|a>>4;let g=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(g=64)),r.push(n[c],n[f],n[g],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Tm(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):w_(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new __;const g=s<<2|a>>4;if(r.push(g),u!==64){const m=a<<4&240|u>>2;if(r.push(m),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class __ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const E_=function(e){const t=Tm(e);return km.encodeByteArray(t,!0)},Ao=function(e){return E_(e).replace(/\./g,"")},Cm=function(e){try{return km.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function I_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const S_=()=>I_().__FIREBASE_DEFAULTS__,T_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},k_=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Cm(e[1]);return t&&JSON.parse(t)},Vc=()=>{try{return S_()||T_()||k_()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Pm=e=>{var t,n;return(n=(t=Vc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},C_=e=>{const t=Pm(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Rm=()=>{var e;return(e=Vc())===null||e===void 0?void 0:e.config},Am=e=>{var t;return(t=Vc())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class P_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function R_(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Ao(JSON.stringify(n)),Ao(JSON.stringify(o)),a].join(".")}/**
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
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function A_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function Nm(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function N_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function O_(){const e=Te();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Om(){try{return typeof indexedDB=="object"}catch{return!1}}function Lm(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function L_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const x_="FirebaseError";class ut extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=x_,Object.setPrototypeOf(this,ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bn.prototype.create)}}class bn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?D_(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ut(i,a,r)}}function D_(e,t){return e.replace(M_,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const M_=/\{\$([^}]+)}/g;function $_(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function No(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Qh(s)&&Qh(o)){if(!No(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Qh(e){return e!==null&&typeof e=="object"}/**
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
 */function es(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ti(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function ni(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function U_(e,t){const n=new j_(e,t);return n.subscribe.bind(n)}class j_{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");F_(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=ol),i.error===void 0&&(i.error=ol),i.complete===void 0&&(i.complete=ol);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function F_(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function ol(){}/**
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
 */const B_=1e3,z_=2,V_=4*60*60*1e3,H_=.5;function Jh(e,t=B_,n=z_){const r=t*Math.pow(n,e),i=Math.round(H_*r*(Math.random()-.5)*2);return Math.min(V_,r+i)}/**
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
 */function pn(e){return e&&e._delegate?e._delegate:e}class at{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const En="[DEFAULT]";/**
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
 */class W_{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new P_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(K_(t))try{this.getOrInitializeService({instanceIdentifier:En})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=En){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=En){return this.instances.has(t)}getOptions(t=En){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:b_(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=En){return this.component?this.component.multipleInstances?t:En:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function b_(e){return e===En?void 0:e}function K_(e){return e.instantiationMode==="EAGER"}/**
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
 */class G_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new W_(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var F;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(F||(F={}));const q_={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},X_=F.INFO,Y_={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},Q_=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Y_[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ca{constructor(t){this.name=t,this._logLevel=X_,this._logHandler=Q_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in F))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?q_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...t),this._logHandler(this,F.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...t),this._logHandler(this,F.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,F.INFO,...t),this._logHandler(this,F.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,F.WARN,...t),this._logHandler(this,F.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...t),this._logHandler(this,F.ERROR,...t)}}const J_=(e,t)=>t.some(n=>e instanceof n);let Zh,ef;function Z_(){return Zh||(Zh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eE(){return ef||(ef=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xm=new WeakMap,Tu=new WeakMap,Dm=new WeakMap,al=new WeakMap,Hc=new WeakMap;function tE(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(on(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&xm.set(n,e)}).catch(()=>{}),Hc.set(t,e),t}function nE(e){if(Tu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Tu.set(e,t)}let ku={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Tu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Dm.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return on(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function rE(e){ku=e(ku)}function iE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ll(this),t,...n);return Dm.set(r,t.sort?t.sort():[t]),on(r)}:eE().includes(e)?function(...t){return e.apply(ll(this),t),on(xm.get(this))}:function(...t){return on(e.apply(ll(this),t))}}function sE(e){return typeof e=="function"?iE(e):(e instanceof IDBTransaction&&nE(e),J_(e,Z_())?new Proxy(e,ku):e)}function on(e){if(e instanceof IDBRequest)return tE(e);if(al.has(e))return al.get(e);const t=sE(e);return t!==e&&(al.set(e,t),Hc.set(t,e)),t}const ll=e=>Hc.get(e);function oE(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=on(o);return r&&o.addEventListener("upgradeneeded",l=>{r(on(o.result),l.oldVersion,l.newVersion,on(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const aE=["get","getKey","getAll","getAllKeys","count"],lE=["put","add","delete","clear"],ul=new Map;function tf(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ul.get(t))return ul.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=lE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||aE.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ul.set(t,s),s}rE(e=>({...e,get:(t,n,r)=>tf(t,n)||e.get(t,n,r),has:(t,n)=>!!tf(t,n)||e.has(t,n)}));/**
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
 */class uE{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function cE(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Cu="@firebase/app",nf="0.9.18";/**
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
 */const Un=new ca("@firebase/app"),dE="@firebase/app-compat",hE="@firebase/analytics-compat",fE="@firebase/analytics",pE="@firebase/app-check-compat",gE="@firebase/app-check",mE="@firebase/auth",vE="@firebase/auth-compat",yE="@firebase/database",wE="@firebase/database-compat",_E="@firebase/functions",EE="@firebase/functions-compat",IE="@firebase/installations",SE="@firebase/installations-compat",TE="@firebase/messaging",kE="@firebase/messaging-compat",CE="@firebase/performance",PE="@firebase/performance-compat",RE="@firebase/remote-config",AE="@firebase/remote-config-compat",NE="@firebase/storage",OE="@firebase/storage-compat",LE="@firebase/firestore",xE="@firebase/firestore-compat",DE="firebase",ME="10.3.1";/**
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
 */const Pu="[DEFAULT]",$E={[Cu]:"fire-core",[dE]:"fire-core-compat",[fE]:"fire-analytics",[hE]:"fire-analytics-compat",[gE]:"fire-app-check",[pE]:"fire-app-check-compat",[mE]:"fire-auth",[vE]:"fire-auth-compat",[yE]:"fire-rtdb",[wE]:"fire-rtdb-compat",[_E]:"fire-fn",[EE]:"fire-fn-compat",[IE]:"fire-iid",[SE]:"fire-iid-compat",[TE]:"fire-fcm",[kE]:"fire-fcm-compat",[CE]:"fire-perf",[PE]:"fire-perf-compat",[RE]:"fire-rc",[AE]:"fire-rc-compat",[NE]:"fire-gcs",[OE]:"fire-gcs-compat",[LE]:"fire-fst",[xE]:"fire-fst-compat","fire-js":"fire-js",[DE]:"fire-js-all"};/**
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
 */const Oo=new Map,Ru=new Map;function UE(e,t){try{e.container.addComponent(t)}catch(n){Un.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function _t(e){const t=e.name;if(Ru.has(t))return Un.debug(`There were multiple attempts to register component ${t}.`),!1;Ru.set(t,e);for(const n of Oo.values())UE(n,e);return!0}function ts(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const jE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},an=new bn("app","Firebase",jE);/**
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
 */class FE{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new at("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}}/**
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
 */const Dr=ME;function Mm(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Pu,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw an.create("bad-app-name",{appName:String(i)});if(n||(n=Rm()),!n)throw an.create("no-options");const s=Oo.get(i);if(s){if(No(n,s.options)&&No(r,s.config))return s;throw an.create("duplicate-app",{appName:i})}const o=new G_(i);for(const l of Ru.values())o.addComponent(l);const a=new FE(n,r,o);return Oo.set(i,a),a}function $m(e=Pu){const t=Oo.get(e);if(!t&&e===Pu&&Rm())return Mm();if(!t)throw an.create("no-app",{appName:e});return t}function qe(e,t,n){var r;let i=(r=$E[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Un.warn(a.join(" "));return}_t(new at(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const BE="firebase-heartbeat-database",zE=1,Mi="firebase-heartbeat-store";let cl=null;function Um(){return cl||(cl=oE(BE,zE,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Mi)}}}).catch(e=>{throw an.create("idb-open",{originalErrorMessage:e.message})})),cl}async function VE(e){try{return await(await Um()).transaction(Mi).objectStore(Mi).get(jm(e))}catch(t){if(t instanceof ut)Un.warn(t.message);else{const n=an.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Un.warn(n.message)}}}async function rf(e,t){try{const r=(await Um()).transaction(Mi,"readwrite");await r.objectStore(Mi).put(t,jm(e)),await r.done}catch(n){if(n instanceof ut)Un.warn(n.message);else{const r=an.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Un.warn(r.message)}}}function jm(e){return`${e.name}!${e.options.appId}`}/**
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
 */const HE=1024,WE=30*24*60*60*1e3;class bE{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new GE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=sf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=WE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=sf(),{heartbeatsToSend:n,unsentEntries:r}=KE(this._heartbeatsCache.heartbeats),i=Ao(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function sf(){return new Date().toISOString().substring(0,10)}function KE(e,t=HE){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),of(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),of(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class GE{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Om()?Lm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await VE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function of(e){return Ao(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function qE(e){_t(new at("platform-logger",t=>new uE(t),"PRIVATE")),_t(new at("heartbeat",t=>new bE(t),"PRIVATE")),qe(Cu,nf,e),qe(Cu,nf,"esm2017"),qe("fire-js","")}qE("");var XE="firebase",YE="10.3.1";/**
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
 */qe(XE,YE,"app");const QE=(e,t)=>t.some(n=>e instanceof n);let af,lf;function JE(){return af||(af=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ZE(){return lf||(lf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fm=new WeakMap,Au=new WeakMap,Bm=new WeakMap,dl=new WeakMap,Wc=new WeakMap;function eI(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(ln(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Fm.set(n,e)}).catch(()=>{}),Wc.set(t,e),t}function tI(e){if(Au.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Au.set(e,t)}let Nu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Au.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Bm.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ln(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function nI(e){Nu=e(Nu)}function rI(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(hl(this),t,...n);return Bm.set(r,t.sort?t.sort():[t]),ln(r)}:ZE().includes(e)?function(...t){return e.apply(hl(this),t),ln(Fm.get(this))}:function(...t){return ln(e.apply(hl(this),t))}}function iI(e){return typeof e=="function"?rI(e):(e instanceof IDBTransaction&&tI(e),QE(e,JE())?new Proxy(e,Nu):e)}function ln(e){if(e instanceof IDBRequest)return eI(e);if(dl.has(e))return dl.get(e);const t=iI(e);return t!==e&&(dl.set(e,t),Wc.set(t,e)),t}const hl=e=>Wc.get(e);function sI(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=ln(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ln(o.result),l.oldVersion,l.newVersion,ln(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const oI=["get","getKey","getAll","getAllKeys","count"],aI=["put","add","delete","clear"],fl=new Map;function uf(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(fl.get(t))return fl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=aI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||oI.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return fl.set(t,s),s}nI(e=>({...e,get:(t,n,r)=>uf(t,n)||e.get(t,n,r),has:(t,n)=>!!uf(t,n)||e.has(t,n)}));const zm="@firebase/installations",bc="0.6.4";/**
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
 */const Vm=1e4,Hm=`w:${bc}`,Wm="FIS_v2",lI="https://firebaseinstallations.googleapis.com/v1",uI=60*60*1e3,cI="installations",dI="Installations";/**
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
 */const hI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},jn=new bn(cI,dI,hI);function bm(e){return e instanceof ut&&e.code.includes("request-failed")}/**
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
 */function Km({projectId:e}){return`${lI}/projects/${e}/installations`}function Gm(e){return{token:e.token,requestStatus:2,expiresIn:pI(e.expiresIn),creationTime:Date.now()}}async function qm(e,t){const r=(await t.json()).error;return jn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Xm({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function fI(e,{refreshToken:t}){const n=Xm(e);return n.append("Authorization",gI(t)),n}async function Ym(e){const t=await e();return t.status>=500&&t.status<600?e():t}function pI(e){return Number(e.replace("s","000"))}function gI(e){return`${Wm} ${e}`}/**
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
 */async function mI({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Km(e),i=Xm(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Wm,appId:e.appId,sdkVersion:Hm},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Ym(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Gm(u.authToken)}}else throw await qm("Create Installation",l)}/**
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
 */function Qm(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function vI(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const yI=/^[cdef][\w-]{21}$/,Ou="";function wI(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=_I(e);return yI.test(n)?n:Ou}catch{return Ou}}function _I(e){return vI(e).substr(0,22)}/**
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
 */function da(e){return`${e.appName}!${e.appId}`}/**
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
 */const Jm=new Map;function Zm(e,t){const n=da(e);ev(n,t),EI(n,t)}function ev(e,t){const n=Jm.get(e);if(n)for(const r of n)r(t)}function EI(e,t){const n=II();n&&n.postMessage({key:e,fid:t}),SI()}let kn=null;function II(){return!kn&&"BroadcastChannel"in self&&(kn=new BroadcastChannel("[Firebase] FID Change"),kn.onmessage=e=>{ev(e.data.key,e.data.fid)}),kn}function SI(){Jm.size===0&&kn&&(kn.close(),kn=null)}/**
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
 */const TI="firebase-installations-database",kI=1,Fn="firebase-installations-store";let pl=null;function Kc(){return pl||(pl=sI(TI,kI,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Fn)}}})),pl}async function Lo(e,t){const n=da(e),i=(await Kc()).transaction(Fn,"readwrite"),s=i.objectStore(Fn),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&Zm(e,t.fid),t}async function tv(e){const t=da(e),r=(await Kc()).transaction(Fn,"readwrite");await r.objectStore(Fn).delete(t),await r.done}async function ha(e,t){const n=da(e),i=(await Kc()).transaction(Fn,"readwrite"),s=i.objectStore(Fn),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Zm(e,a.fid),a}/**
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
 */async function Gc(e){let t;const n=await ha(e.appConfig,r=>{const i=CI(r),s=PI(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===Ou?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function CI(e){const t=e||{fid:wI(),registrationStatus:0};return nv(t)}function PI(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(jn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=RI(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:AI(e)}:{installationEntry:t}}async function RI(e,t){try{const n=await mI(e,t);return Lo(e.appConfig,n)}catch(n){throw bm(n)&&n.customData.serverCode===409?await tv(e.appConfig):await Lo(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function AI(e){let t=await cf(e.appConfig);for(;t.registrationStatus===1;)await Qm(100),t=await cf(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Gc(e);return r||n}return t}function cf(e){return ha(e,t=>{if(!t)throw jn.create("installation-not-found");return nv(t)})}function nv(e){return NI(e)?{fid:e.fid,registrationStatus:0}:e}function NI(e){return e.registrationStatus===1&&e.registrationTime+Vm<Date.now()}/**
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
 */async function OI({appConfig:e,heartbeatServiceProvider:t},n){const r=LI(e,n),i=fI(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Hm,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Ym(()=>fetch(r,a));if(l.ok){const u=await l.json();return Gm(u)}else throw await qm("Generate Auth Token",l)}function LI(e,{fid:t}){return`${Km(e)}/${t}/authTokens:generate`}/**
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
 */async function qc(e,t=!1){let n;const r=await ha(e.appConfig,s=>{if(!rv(s))throw jn.create("not-registered");const o=s.authToken;if(!t&&MI(o))return s;if(o.requestStatus===1)return n=xI(e,t),s;{if(!navigator.onLine)throw jn.create("app-offline");const a=UI(s);return n=DI(e,a),a}});return n?await n:r.authToken}async function xI(e,t){let n=await df(e.appConfig);for(;n.authToken.requestStatus===1;)await Qm(100),n=await df(e.appConfig);const r=n.authToken;return r.requestStatus===0?qc(e,t):r}function df(e){return ha(e,t=>{if(!rv(t))throw jn.create("not-registered");const n=t.authToken;return jI(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function DI(e,t){try{const n=await OI(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Lo(e.appConfig,r),n}catch(n){if(bm(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await tv(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Lo(e.appConfig,r)}throw n}}function rv(e){return e!==void 0&&e.registrationStatus===2}function MI(e){return e.requestStatus===2&&!$I(e)}function $I(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+uI}function UI(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function jI(e){return e.requestStatus===1&&e.requestTime+Vm<Date.now()}/**
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
 */async function FI(e){const t=e,{installationEntry:n,registrationPromise:r}=await Gc(t);return r?r.catch(console.error):qc(t).catch(console.error),n.fid}/**
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
 */async function BI(e,t=!1){const n=e;return await zI(n),(await qc(n,t)).token}async function zI(e){const{registrationPromise:t}=await Gc(e);t&&await t}/**
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
 */function VI(e){if(!e||!e.options)throw gl("App Configuration");if(!e.name)throw gl("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw gl(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function gl(e){return jn.create("missing-app-config-values",{valueName:e})}/**
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
 */const iv="installations",HI="installations-internal",WI=e=>{const t=e.getProvider("app").getImmediate(),n=VI(t),r=ts(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},bI=e=>{const t=e.getProvider("app").getImmediate(),n=ts(t,iv).getImmediate();return{getId:()=>FI(n),getToken:i=>BI(n,i)}};function KI(){_t(new at(iv,WI,"PUBLIC")),_t(new at(HI,bI,"PRIVATE"))}KI();qe(zm,bc);qe(zm,bc,"esm2017");/**
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
 */const hf="analytics",GI="firebase_id",qI="origin",XI=60*1e3,YI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Xc="https://www.googletagmanager.com/gtag/js";/**
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
 */const Me=new ca("@firebase/analytics");/**
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
 */const QI={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Xe=new bn("analytics","Analytics",QI);/**
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
 */function JI(e){if(!e.startsWith(Xc)){const t=Xe.create("invalid-gtag-resource",{gtagURL:e});return Me.warn(t.message),""}return e}function sv(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function ZI(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function eS(e,t){const n=ZI("firebase-js-sdk-policy",{createScriptURL:JI}),r=document.createElement("script"),i=`${Xc}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function tS(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function nS(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const l=(await sv(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){Me.error(a)}e("config",i,s)}async function rS(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await sv(n);for(const l of o){const u=a.find(f=>f.measurementId===l),c=u&&t[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){Me.error(s)}}function iS(e,t,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await rS(e,t,n,a,l)}else if(s==="config"){const[a,l]=o;await nS(e,t,n,r,a,l)}else if(s==="consent"){const[a]=o;e("consent","update",a)}else if(s==="get"){const[a,l,u]=o;e("get",a,l,u)}else if(s==="set"){const[a]=o;e("set",a)}else e(s,...o)}catch(a){Me.error(a)}}return i}function sS(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=iS(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function oS(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Xc)&&n.src.includes(e))return n;return null}/**
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
 */const aS=30,lS=1e3;class uS{constructor(t={},n=lS){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const ov=new uS;function cS(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function dS(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:cS(r)},s=YI.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw Xe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function hS(e,t=ov,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Xe.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Xe.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new gS;return setTimeout(async()=>{a.abort()},n!==void 0?n:XI),av({appId:r,apiKey:i,measurementId:s},o,a,t)}async function av(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=ov){var s;const{appId:o,measurementId:a}=e;try{await fS(r,t)}catch(l){if(a)return Me.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await dS(e);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!pS(u)){if(i.deleteThrottleMetadata(o),a)return Me.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Jh(n,i.intervalMillis,aS):Jh(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,f),Me.debug(`Calling attemptFetch again in ${c} millis`),av(e,f,r,i)}}function fS(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(Xe.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function pS(e){if(!(e instanceof ut)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class gS{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function mS(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
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
 */async function vS(){if(Om())try{await Lm()}catch(e){return Me.warn(Xe.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Me.warn(Xe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function yS(e,t,n,r,i,s,o){var a;const l=hS(e);l.then(m=>{n[m.measurementId]=m.appId,e.options.measurementId&&m.measurementId!==e.options.measurementId&&Me.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Me.error(m)),t.push(l);const u=vS().then(m=>{if(m)return r.getId()}),[c,f]=await Promise.all([l,u]);oS(s)||eS(s,c.measurementId),i("js",new Date);const g=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return g[qI]="firebase",g.update=!0,f!=null&&(g[GI]=f),i("config",c.measurementId,g),c.measurementId}/**
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
 */class wS{constructor(t){this.app=t}_delete(){return delete pi[this.app.options.appId],Promise.resolve()}}let pi={},ff=[];const pf={};let ml="dataLayer",_S="gtag",gf,lv,mf=!1;function ES(){const e=[];if(Nm()&&e.push("This is a browser extension environment."),L_()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Xe.create("invalid-analytics-context",{errorInfo:t});Me.warn(n.message)}}function IS(e,t,n){ES();const r=e.options.appId;if(!r)throw Xe.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Me.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Xe.create("no-api-key");if(pi[r]!=null)throw Xe.create("already-exists",{id:r});if(!mf){tS(ml);const{wrappedGtag:s,gtagCore:o}=sS(pi,ff,pf,ml,_S);lv=s,gf=o,mf=!0}return pi[r]=yS(e,ff,pf,t,gf,ml,n),new wS(e)}function SS(e,t,n,r){e=pn(e),mS(lv,pi[e.app.options.appId],t,n,r).catch(i=>Me.error(i))}const vf="@firebase/analytics",yf="0.10.0";function TS(){_t(new at(hf,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return IS(r,i,n)},"PUBLIC")),_t(new at("analytics-internal",e,"PRIVATE")),qe(vf,yf),qe(vf,yf,"esm2017");function e(t){try{const n=t.getProvider(hf).getImmediate();return{logEvent:(r,i,s)=>SS(n,r,i,s)}}catch(n){throw Xe.create("interop-component-reg-failed",{reason:n})}}}TS();function Yc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function wf(e){return e!==void 0&&e.enterprise!==void 0}class kS{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function uv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CS=uv,cv=new bn("auth","Firebase",uv());/**
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
 */const xo=new ca("@firebase/auth");function PS(e,...t){xo.logLevel<=F.WARN&&xo.warn(`Auth (${Dr}): ${e}`,...t)}function Qs(e,...t){xo.logLevel<=F.ERROR&&xo.error(`Auth (${Dr}): ${e}`,...t)}/**
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
 */function lt(e,...t){throw Qc(e,...t)}function yt(e,...t){return Qc(e,...t)}function RS(e,t,n){const r=Object.assign(Object.assign({},CS()),{[t]:n});return new bn("auth","Firebase",r).create(t,{appName:e.name})}function Qc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return cv.create(e,...t)}function O(e,t,...n){if(!e)throw Qc(t,...n)}function Ct(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Qs(t),new Error(t)}function Dt(e,t){e||Ct(t)}/**
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
 */function Lu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function AS(){return _f()==="http:"||_f()==="https:"}function _f(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function NS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(AS()||Nm()||"connection"in navigator)?navigator.onLine:!0}function OS(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class ns{constructor(t,n){this.shortDelay=t,this.longDelay=n,Dt(n>t,"Short delay should be less than long delay!"),this.isMobile=A_()||N_()}get(){return NS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Jc(e,t){Dt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class dv{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const LS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const xS=new ns(3e4,6e4);function Kn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Gn(e,t,n,r,i={}){return hv(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=es(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),dv.fetch()(fv(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function hv(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},LS),t);try{const i=new DS(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ds(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ds(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ds(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ds(e,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw RS(e,c,u);lt(e,c)}}catch(i){if(i instanceof ut)throw i;lt(e,"network-request-failed",{message:String(i)})}}async function rs(e,t,n,r,i={}){const s=await Gn(e,t,n,r,i);return"mfaPendingCredential"in s&&lt(e,"multi-factor-auth-required",{_serverResponse:s}),s}function fv(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Jc(e.config,i):`${e.config.apiScheme}://${i}`}class DS{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yt(this.auth,"network-request-failed")),xS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ds(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=yt(e,t,r);return i.customData._tokenResponse=n,i}async function MS(e,t){return Gn(e,"GET","/v2/recaptchaConfig",Kn(e,t))}/**
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
 */async function $S(e,t){return Gn(e,"POST","/v1/accounts:delete",t)}async function US(e,t){return Gn(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function gi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function jS(e,t=!1){const n=pn(e),r=await n.getIdToken(t),i=Zc(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:gi(vl(i.auth_time)),issuedAtTime:gi(vl(i.iat)),expirationTime:gi(vl(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function vl(e){return Number(e)*1e3}function Zc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Qs("JWT malformed, contained fewer than 3 sections"),null;try{const i=Cm(n);return i?JSON.parse(i):(Qs("Failed to decode base64 JWT payload"),null)}catch(i){return Qs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function FS(e){const t=Zc(e);return O(t,"internal-error"),O(typeof t.exp<"u","internal-error"),O(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function $i(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof ut&&BS(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function BS({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class zS{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class pv{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gi(this.lastLoginAt),this.creationTime=gi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Do(e){var t;const n=e.auth,r=await e.getIdToken(),i=await $i(e,US(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?WS(s.providerUserInfo):[],a=HS(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new pv(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function VS(e){const t=pn(e);await Do(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function HS(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function WS(e){return e.map(t=>{var{providerId:n}=t,r=Yc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function bS(e,t){const n=await hv(e,{},async()=>{const r=es({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=fv(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",dv.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){O(t.idToken,"internal-error"),O(typeof t.idToken<"u","internal-error"),O(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):FS(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return O(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await bS(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ui;return r&&(O(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ui,this.toJSON())}_performRefresh(){return Ct("not implemented")}}/**
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
 */function jt(e,t){O(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Nn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Yc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new pv(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await $i(this,this.stsTokenManager.getToken(this.auth,t));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return jS(this,t)}reload(){return VS(this)}_assign(t){this!==t&&(O(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Nn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Do(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await $i(this,$S(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:p,emailVerified:v,isAnonymous:I,providerData:P,stsTokenManager:R}=n;O(p&&R,t,"internal-error");const A=Ui.fromJSON(this.name,R);O(typeof p=="string",t,"internal-error"),jt(f,t.name),jt(g,t.name),O(typeof v=="boolean",t,"internal-error"),O(typeof I=="boolean",t,"internal-error"),jt(m,t.name),jt(y,t.name),jt(w,t.name),jt(N,t.name),jt(h,t.name),jt(d,t.name);const H=new Nn({uid:p,auth:t,email:g,emailVerified:v,displayName:f,isAnonymous:I,photoURL:y,phoneNumber:m,tenantId:w,stsTokenManager:A,createdAt:h,lastLoginAt:d});return P&&Array.isArray(P)&&(H.providerData=P.map(M=>Object.assign({},M))),N&&(H._redirectEventId=N),H}static async _fromIdTokenResponse(t,n,r=!1){const i=new Ui;i.updateFromServerResponse(n);const s=new Nn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Do(s),s}}/**
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
 */const Ef=new Map;function Pt(e){Dt(e instanceof Function,"Expected a class definition");let t=Ef.get(e);return t?(Dt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ef.set(e,t),t)}/**
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
 */class gv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}gv.type="NONE";const If=gv;/**
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
 */function Js(e,t,n){return`firebase:${e}:${t}:${n}`}class vr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Js(this.userKey,i.apiKey,s),this.fullPersistenceKey=Js("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Nn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new vr(Pt(If),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Pt(If);const o=Js(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const f=Nn._fromJSON(t,c);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new vr(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new vr(s,t,r))}}/**
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
 */function Sf(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(yv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(mv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(_v(t))return"Blackberry";if(Ev(t))return"Webos";if(ed(t))return"Safari";if((t.includes("chrome/")||vv(t))&&!t.includes("edge/"))return"Chrome";if(wv(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function mv(e=Te()){return/firefox\//i.test(e)}function ed(e=Te()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function vv(e=Te()){return/crios\//i.test(e)}function yv(e=Te()){return/iemobile/i.test(e)}function wv(e=Te()){return/android/i.test(e)}function _v(e=Te()){return/blackberry/i.test(e)}function Ev(e=Te()){return/webos/i.test(e)}function fa(e=Te()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function KS(e=Te()){var t;return fa(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function GS(){return O_()&&document.documentMode===10}function Iv(e=Te()){return fa(e)||wv(e)||Ev(e)||_v(e)||/windows phone/i.test(e)||yv(e)}function qS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Sv(e,t=[]){let n;switch(e){case"Browser":n=Sf(Te());break;case"Worker":n=`${Sf(Te())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Dr}/${r}`}/**
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
 */class XS{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function YS(e,t={}){return Gn(e,"GET","/v2/passwordPolicy",Kn(e,t))}/**
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
 */const QS=6;class JS{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:QS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class ZS{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tf(this),this.idTokenSubscription=new Tf(this),this.beforeStateQueue=new XS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Pt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await vr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Do(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=OS()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?pn(t):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&O(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Pt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await YS(this),n=new JS(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new bn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Pt(t)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await vr.create(this,[Pt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Sv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&PS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function qn(e){return pn(e)}class Tf{constructor(t){this.auth=t,this.observer=null,this.addObserver=U_(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function eT(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Tv(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=yt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",eT().appendChild(r)})}function tT(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const nT="https://www.google.com/recaptcha/enterprise.js?render=",rT="recaptcha-enterprise",iT="NO_RECAPTCHA";class sT{constructor(t){this.type=rT,this.auth=qn(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{MS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new kS(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;wf(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(iT)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&wf(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Tv(nT+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Mo(e,t,n,r=!1){const i=new sT(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function oT(e,t){const n=ts(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(No(s,t??{}))return i;lt(i,"already-initialized")}return n.initialize({options:t})}function aT(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function lT(e,t,n){const r=qn(e);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=kv(t),{host:o,port:a}=uT(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||cT()}function kv(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function uT(e){const t=kv(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:kf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:kf(o)}}}function kf(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function cT(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class td{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Ct("not implemented")}_getIdTokenResponse(t){return Ct("not implemented")}_linkToIdToken(t,n){return Ct("not implemented")}_getReauthenticationResolver(t){return Ct("not implemented")}}async function dT(e,t){return Gn(e,"POST","/v1/accounts:update",t)}/**
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
 */async function yl(e,t){return rs(e,"POST","/v1/accounts:signInWithPassword",Kn(e,t))}/**
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
 */async function hT(e,t){return rs(e,"POST","/v1/accounts:signInWithEmailLink",Kn(e,t))}async function fT(e,t){return rs(e,"POST","/v1/accounts:signInWithEmailLink",Kn(e,t))}/**
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
 */class ji extends td{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new ji(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new ji(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Mo(t,r,"signInWithPassword");return yl(t,i)}else return yl(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Mo(t,r,"signInWithPassword");return yl(t,s)}else return Promise.reject(i)});case"emailLink":return hT(t,{email:this._email,oobCode:this._password});default:lt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return dT(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return fT(t,{idToken:n,email:this._email,oobCode:this._password});default:lt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function yr(e,t){return rs(e,"POST","/v1/accounts:signInWithIdp",Kn(e,t))}/**
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
 */const pT="http://localhost";class Bn extends td{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Bn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Yc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Bn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return yr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,yr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,yr(t,n)}buildRequest(){const t={requestUri:pT,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=es(n)}return t}}/**
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
 */function gT(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mT(e){const t=ti(ni(e)).link,n=t?ti(ni(t)).deep_link_id:null,r=ti(ni(e)).deep_link_id;return(r?ti(ni(r)).link:null)||r||n||t||e}class nd{constructor(t){var n,r,i,s,o,a;const l=ti(ni(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=gT((i=l.mode)!==null&&i!==void 0?i:null);O(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=mT(t);try{return new nd(n)}catch{return null}}}/**
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
 */class Mr{constructor(){this.providerId=Mr.PROVIDER_ID}static credential(t,n){return ji._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=nd.parseLink(n);return O(r,"argument-error"),ji._fromEmailAndCode(t,r.code,r.tenantId)}}Mr.PROVIDER_ID="password";Mr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Cv{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class is extends Cv{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ht extends is{constructor(){super("facebook.com")}static credential(t){return Bn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ht.credentialFromTaggedObject(t)}static credentialFromError(t){return Ht.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ht.credential(t.oauthAccessToken)}catch{return null}}}Ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ht.PROVIDER_ID="facebook.com";/**
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
 */class Wt extends is{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Bn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Wt.credentialFromTaggedObject(t)}static credentialFromError(t){return Wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Wt.credential(n,r)}catch{return null}}}Wt.GOOGLE_SIGN_IN_METHOD="google.com";Wt.PROVIDER_ID="google.com";/**
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
 */class bt extends is{constructor(){super("github.com")}static credential(t){return Bn._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return bt.credentialFromTaggedObject(t)}static credentialFromError(t){return bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return bt.credential(t.oauthAccessToken)}catch{return null}}}bt.GITHUB_SIGN_IN_METHOD="github.com";bt.PROVIDER_ID="github.com";/**
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
 */class Kt extends is{constructor(){super("twitter.com")}static credential(t,n){return Bn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Kt.credentialFromTaggedObject(t)}static credentialFromError(t){return Kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Kt.credential(n,r)}catch{return null}}}Kt.TWITTER_SIGN_IN_METHOD="twitter.com";Kt.PROVIDER_ID="twitter.com";/**
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
 */async function wl(e,t){return rs(e,"POST","/v1/accounts:signUp",Kn(e,t))}/**
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
 */class zn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await Nn._fromIdTokenResponse(t,r,i),o=Cf(r);return new zn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Cf(r);return new zn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Cf(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class $o extends ut{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,$o.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new $o(t,n,r,i)}}function Pv(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?$o._fromErrorAndOperation(e,s,t,r):s})}async function vT(e,t,n=!1){const r=await $i(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return zn._forOperation(e,"link",r)}/**
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
 */async function yT(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await $i(e,Pv(r,i,t,e),n);O(s.idToken,r,"internal-error");const o=Zc(s.idToken);O(o,r,"internal-error");const{sub:a}=o;return O(e.uid===a,r,"user-mismatch"),zn._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&lt(r,"user-mismatch"),s}}/**
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
 */async function Rv(e,t,n=!1){const r="signIn",i=await Pv(e,r,t),s=await zn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function wT(e,t){return Rv(qn(e),t)}/**
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
 */async function Av(e){const t=qn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function _T(e,t,n){var r;const i=qn(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Mo(i,s,"signUpPassword");o=wl(i,u)}else o=wl(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Mo(i,s,"signUpPassword");return wl(i,c)}throw u});const a=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Av(e),u}),l=await zn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function ET(e,t,n){return wT(pn(e),Mr.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Av(e),r})}function IT(e,t,n,r){return pn(e).onIdTokenChanged(t,n,r)}function ST(e,t,n){return pn(e).beforeAuthStateChanged(t,n)}const Uo="__sak";/**
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
 */class Nv{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Uo,"1"),this.storage.removeItem(Uo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function TT(){const e=Te();return ed(e)||fa(e)}const kT=1e3,CT=10;class Ov extends Nv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=TT()&&qS(),this.fallbackToPolling=Iv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);GS()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,CT):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},kT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Ov.type="LOCAL";const PT=Ov;/**
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
 */class Lv extends Nv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Lv.type="SESSION";const xv=Lv;/**
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
 */function RT(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class pa{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new pa(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await RT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pa.receivers=[];/**
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
 */function rd(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class AT{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=rd("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const g=f;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function wt(){return window}function NT(e){wt().location.href=e}/**
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
 */function Dv(){return typeof wt().WorkerGlobalScope<"u"&&typeof wt().importScripts=="function"}async function OT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LT(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function xT(){return Dv()?self:null}/**
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
 */const Mv="firebaseLocalStorageDb",DT=1,jo="firebaseLocalStorage",$v="fbase_key";class ss{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ga(e,t){return e.transaction([jo],t?"readwrite":"readonly").objectStore(jo)}function MT(){const e=indexedDB.deleteDatabase(Mv);return new ss(e).toPromise()}function xu(){const e=indexedDB.open(Mv,DT);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(jo,{keyPath:$v})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(jo)?t(r):(r.close(),await MT(),t(await xu()))})})}async function Pf(e,t,n){const r=ga(e,!0).put({[$v]:t,value:n});return new ss(r).toPromise()}async function $T(e,t){const n=ga(e,!1).get(t),r=await new ss(n).toPromise();return r===void 0?null:r.value}function Rf(e,t){const n=ga(e,!0).delete(t);return new ss(n).toPromise()}const UT=800,jT=3;class Uv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xu(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>jT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pa._getInstance(xT()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await OT(),!this.activeServiceWorker)return;this.sender=new AT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||LT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await xu();return await Pf(t,Uo,"1"),await Rf(t,Uo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pf(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>$T(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Rf(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=ga(i,!1).getAll();return new ss(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),UT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Uv.type="LOCAL";const FT=Uv;new ns(3e4,6e4);/**
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
 */function BT(e,t){return t?Pt(t):(O(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class id extends td{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return yr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return yr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return yr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function zT(e){return Rv(e.auth,new id(e),e.bypassAuthState)}function VT(e){const{auth:t,user:n}=e;return O(n,t,"internal-error"),yT(n,new id(e),e.bypassAuthState)}async function HT(e){const{auth:t,user:n}=e;return O(n,t,"internal-error"),vT(n,new id(e),e.bypassAuthState)}/**
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
 */class jv{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return zT;case"linkViaPopup":case"linkViaRedirect":return HT;case"reauthViaPopup":case"reauthViaRedirect":return VT;default:lt(this.auth,"internal-error")}}resolve(t){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const WT=new ns(2e3,1e4);class ur extends jv{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ur.currentPopupAction&&ur.currentPopupAction.cancel(),ur.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return O(t,this.auth,"internal-error"),t}async onExecution(){Dt(this.filter.length===1,"Popup operations only handle one event");const t=rd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ur.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,WT.get())};t()}}ur.currentPopupAction=null;/**
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
 */const bT="pendingRedirect",Zs=new Map;class KT extends jv{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Zs.get(this.auth._key());if(!t){try{const r=await GT(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Zs.set(this.auth._key(),t)}return this.bypassAuthState||Zs.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function GT(e,t){const n=YT(t),r=XT(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function qT(e,t){Zs.set(e._key(),t)}function XT(e){return Pt(e._redirectPersistence)}function YT(e){return Js(bT,e.config.apiKey,e.name)}async function QT(e,t,n=!1){const r=qn(e),i=BT(r,t),o=await new KT(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const JT=10*60*1e3;class ZT{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!ek(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Fv(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(yt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=JT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Af(t))}saveEventToCache(t){this.cachedEventUids.add(Af(t)),this.lastProcessedEventTime=Date.now()}}function Af(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Fv({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function ek(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fv(e);default:return!1}}/**
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
 */async function tk(e,t={}){return Gn(e,"GET","/v1/projects",t)}/**
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
 */const nk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rk=/^https?/;async function ik(e){if(e.config.emulator)return;const{authorizedDomains:t}=await tk(e);for(const n of t)try{if(sk(n))return}catch{}lt(e,"unauthorized-domain")}function sk(e){const t=Lu(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!rk.test(n))return!1;if(nk.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const ok=new ns(3e4,6e4);function Nf(){const e=wt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function ak(e){return new Promise((t,n)=>{var r,i,s;function o(){Nf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Nf(),n(yt(e,"network-request-failed"))},timeout:ok.get()})}if(!((i=(r=wt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=wt().gapi)===null||s===void 0)&&s.load)o();else{const a=tT("iframefcb");return wt()[a]=()=>{gapi.load?o():n(yt(e,"network-request-failed"))},Tv(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw eo=null,t})}let eo=null;function lk(e){return eo=eo||ak(e),eo}/**
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
 */const uk=new ns(5e3,15e3),ck="__/auth/iframe",dk="emulator/auth/iframe",hk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pk(e){const t=e.config;O(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Jc(t,dk):`https://${e.config.authDomain}/${ck}`,r={apiKey:t.apiKey,appName:e.name,v:Dr},i=fk.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${es(r).slice(1)}`}async function gk(e){const t=await lk(e),n=wt().gapi;return O(n,e,"internal-error"),t.open({where:document.body,url:pk(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=yt(e,"network-request-failed"),a=wt().setTimeout(()=>{s(o)},uk.get());function l(){wt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const mk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vk=500,yk=600,wk="_blank",_k="http://localhost";class Of{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ek(e,t,n,r=vk,i=yk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},mk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Te().toLowerCase();n&&(a=vv(u)?wk:n),mv(u)&&(t=t||_k,l.scrollbars="yes");const c=Object.entries(l).reduce((g,[m,y])=>`${g}${m}=${y},`,"");if(KS(u)&&a!=="_self")return Ik(t||"",a),new Of(null);const f=window.open(t||"",a,c);O(f,e,"popup-blocked");try{f.focus()}catch{}return new Of(f)}function Ik(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Sk="__/auth/handler",Tk="emulator/auth/handler",kk=encodeURIComponent("fac");async function Lf(e,t,n,r,i,s){O(e.config.authDomain,e,"auth-domain-config-required"),O(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Dr,eventId:i};if(t instanceof Cv){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",$_(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,f]of Object.entries(s||{}))o[c]=f}if(t instanceof is){const c=t.getScopes().filter(f=>f!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await e._getAppCheckToken(),u=l?`#${kk}=${encodeURIComponent(l)}`:"";return`${Ck(e)}?${es(a).slice(1)}${u}`}function Ck({config:e}){return e.emulator?Jc(e,Tk):`https://${e.authDomain}/${Sk}`}/**
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
 */const _l="webStorageSupport";class Pk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xv,this._completeRedirectFn=QT,this._overrideRedirectResult=qT}async _openPopup(t,n,r,i){var s;Dt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Lf(t,n,r,Lu(),i);return Ek(t,o,rd())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await Lf(t,n,r,Lu(),i);return NT(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Dt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await gk(t),r=new ZT(t);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(_l,{type:_l},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[_l];o!==void 0&&n(!!o),lt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ik(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Iv()||ed()||fa()}}const Rk=Pk;var xf="@firebase/auth",Df="1.3.0";/**
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
 */class Ak{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Nk(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ok(e){_t(new at("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sv(e)},u=new ZS(r,i,s,l);return aT(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),_t(new at("auth-internal",t=>{const n=qn(t.getProvider("auth").getImmediate());return(r=>new Ak(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qe(xf,Df,Nk(e)),qe(xf,Df,"esm2017")}/**
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
 */const Lk=5*60,xk=Am("authIdTokenMaxAge")||Lk;let Mf=null;const Dk=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>xk)return;const i=n==null?void 0:n.token;Mf!==i&&(Mf=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Mk(e=$m()){const t=ts(e,"auth");if(t.isInitialized())return t.getImmediate();const n=oT(e,{popupRedirectResolver:Rk,persistence:[FT,PT,xv]}),r=Am("authTokenSyncURL");if(r){const s=Dk(r);ST(n,s,()=>s(n.currentUser)),IT(n,o=>s(o))}const i=Pm("auth");return i&&lT(n,`http://${i}`),n}Ok("Browser");var $k=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},E,sd=sd||{},L=$k||self;function ma(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function os(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Uk(e){return Object.prototype.hasOwnProperty.call(e,El)&&e[El]||(e[El]=++jk)}var El="closure_uid_"+(1e9*Math.random()>>>0),jk=0;function Fk(e,t,n){return e.call.apply(e.bind,arguments)}function Bk(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Ee(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ee=Fk:Ee=Bk,Ee.apply(null,arguments)}function Ms(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function ue(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function gn(){this.s=this.s,this.o=this.o}var zk=0;gn.prototype.s=!1;gn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),zk!=0)&&Uk(this)};gn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Bv=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function od(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function $f(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ma(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function Ie(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var Vk=function(){if(!L.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{L.addEventListener("test",()=>{},t),L.removeEventListener("test",()=>{},t)}catch{}return e}();function Fi(e){return/^[\s\xa0]*$/.test(e)}function va(){var e=L.navigator;return e&&(e=e.userAgent)?e:""}function ft(e){return va().indexOf(e)!=-1}function ad(e){return ad[" "](e),e}ad[" "]=function(){};function Hk(e,t){var n=$C;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Wk=ft("Opera"),Bi=ft("Trident")||ft("MSIE"),zv=ft("Edge"),Du=zv||Bi,Vv=ft("Gecko")&&!(va().toLowerCase().indexOf("webkit")!=-1&&!ft("Edge"))&&!(ft("Trident")||ft("MSIE"))&&!ft("Edge"),bk=va().toLowerCase().indexOf("webkit")!=-1&&!ft("Edge");function Hv(){var e=L.document;return e?e.documentMode:void 0}e:{var Uf="",Il=function(){var e=va();if(Vv)return/rv:([^\);]+)(\)|;)/.exec(e);if(zv)return/Edge\/([\d\.]+)/.exec(e);if(Bi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(bk)return/WebKit\/(\S+)/.exec(e);if(Wk)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Il&&(Uf=Il?Il[1]:""),Bi){var jf=Hv();if(jf!=null&&jf>parseFloat(Uf))break e}}L.document&&Bi&&Hv();function zi(e,t){if(Ie.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Vv){e:{try{ad(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Kk[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&zi.$.h.call(this)}}ue(zi,Ie);var Kk={2:"touch",3:"pen",4:"mouse"};zi.prototype.h=function(){zi.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var as="closure_listenable_"+(1e6*Math.random()|0),Gk=0;function qk(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++Gk,this.fa=this.ia=!1}function ya(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ld(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Xk(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Wv(e){const t={};for(const n in e)t[n]=e[n];return t}const Ff="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bv(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<Ff.length;s++)n=Ff[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function wa(e){this.src=e,this.g={},this.h=0}wa.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=$u(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new qk(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function Mu(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=Bv(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ya(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function $u(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var ud="closure_lm_"+(1e6*Math.random()|0),Sl={};function Kv(e,t,n,r,i){if(r&&r.once)return qv(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Kv(e,t[s],n,r,i);return null}return n=hd(n),e&&e[as]?e.O(t,n,os(r)?!!r.capture:!!r,i):Gv(e,t,n,!1,r,i)}function Gv(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=os(i)?!!i.capture:!!i,a=dd(e);if(a||(e[ud]=a=new wa(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=Yk(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Vk||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Yv(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Yk(){function e(n){return t.call(e.src,e.listener,n)}const t=Qk;return e}function qv(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)qv(e,t[s],n,r,i);return null}return n=hd(n),e&&e[as]?e.P(t,n,os(r)?!!r.capture:!!r,i):Gv(e,t,n,!0,r,i)}function Xv(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Xv(e,t[s],n,r,i);else r=os(r)?!!r.capture:!!r,n=hd(n),e&&e[as]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=$u(s,n,r,i),-1<n&&(ya(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=dd(e))&&(t=e.g[t.toString()],e=-1,t&&(e=$u(t,n,r,i)),(n=-1<e?t[e]:null)&&cd(n))}function cd(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[as])Mu(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Yv(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=dd(t))?(Mu(n,e),n.h==0&&(n.src=null,t[ud]=null)):ya(e)}}}function Yv(e){return e in Sl?Sl[e]:Sl[e]="on"+e}function Qk(e,t){if(e.fa)e=!0;else{t=new zi(t,this);var n=e.listener,r=e.la||e.src;e.ia&&cd(e),e=n.call(r,t)}return e}function dd(e){return e=e[ud],e instanceof wa?e:null}var Tl="__closure_events_fn_"+(1e9*Math.random()>>>0);function hd(e){return typeof e=="function"?e:(e[Tl]||(e[Tl]=function(t){return e.handleEvent(t)}),e[Tl])}function le(){gn.call(this),this.i=new wa(this),this.S=this,this.J=null}ue(le,gn);le.prototype[as]=!0;le.prototype.removeEventListener=function(e,t,n,r){Xv(this,e,t,n,r)};function fe(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Ie(t,e);else if(t instanceof Ie)t.target=t.target||e;else{var i=t;t=new Ie(r,e),bv(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=$s(o,r,!0,t)&&i}if(o=t.g=e,i=$s(o,r,!0,t)&&i,i=$s(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=$s(o,r,!1,t)&&i}le.prototype.N=function(){if(le.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ya(n[r]);delete e.g[t],e.h--}}this.J=null};le.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};le.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function $s(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Mu(e.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var fd=L.JSON.stringify;class Jk{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Zk(){var e=pd;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class eC{constructor(){this.h=this.g=null}add(t,n){const r=Qv.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Qv=new Jk(()=>new tC,e=>e.reset());class tC{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function nC(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function rC(e){L.setTimeout(()=>{throw e},0)}let Vi,Hi=!1,pd=new eC,Jv=()=>{const e=L.Promise.resolve(void 0);Vi=()=>{e.then(iC)}};var iC=()=>{for(var e;e=Zk();){try{e.h.call(e.g)}catch(n){rC(n)}var t=Qv;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Hi=!1};function _a(e,t){le.call(this),this.h=e||1,this.g=t||L,this.j=Ee(this.qb,this),this.l=Date.now()}ue(_a,le);E=_a.prototype;E.ga=!1;E.T=null;E.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),fe(this,"tick"),this.ga&&(gd(this),this.start()))}};E.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function gd(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}E.N=function(){_a.$.N.call(this),gd(this),delete this.g};function md(e,t,n){if(typeof e=="function")n&&(e=Ee(e,n));else if(e&&typeof e.handleEvent=="function")e=Ee(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:L.setTimeout(e,t||0)}function Zv(e){e.g=md(()=>{e.g=null,e.i&&(e.i=!1,Zv(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class sC extends gn{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Zv(this)}N(){super.N(),this.g&&(L.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wi(e){gn.call(this),this.h=e,this.g={}}ue(Wi,gn);var Bf=[];function ey(e,t,n,r){Array.isArray(n)||(n&&(Bf[0]=n.toString()),n=Bf);for(var i=0;i<n.length;i++){var s=Kv(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function ty(e){ld(e.g,function(t,n){this.g.hasOwnProperty(n)&&cd(t)},e),e.g={}}Wi.prototype.N=function(){Wi.$.N.call(this),ty(this)};Wi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ea(){this.g=!0}Ea.prototype.Ea=function(){this.g=!1};function oC(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");o=2<=f.length&&f[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function aC(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function cr(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+uC(e,n)+(r?" "+r:"")})}function lC(e,t){e.info(function(){return"TIMEOUT: "+t})}Ea.prototype.info=function(){};function uC(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return fd(n)}catch{return t}}var $r={},zf=null;function vd(){return zf=zf||new le}$r.Ta="serverreachability";function ny(e){Ie.call(this,$r.Ta,e)}ue(ny,Ie);function bi(e){const t=vd();fe(t,new ny(t))}$r.STAT_EVENT="statevent";function ry(e,t){Ie.call(this,$r.STAT_EVENT,e),this.stat=t}ue(ry,Ie);function Ce(e){const t=vd();fe(t,new ry(t,e))}$r.Ua="timingevent";function iy(e,t){Ie.call(this,$r.Ua,e),this.size=t}ue(iy,Ie);function ls(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return L.setTimeout(function(){e()},t)}var yd={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},cC={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function wd(){}wd.prototype.h=null;function Vf(e){return e.h||(e.h=e.i())}function dC(){}var us={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function _d(){Ie.call(this,"d")}ue(_d,Ie);function Ed(){Ie.call(this,"c")}ue(Ed,Ie);var Uu;function Ia(){}ue(Ia,wd);Ia.prototype.g=function(){return new XMLHttpRequest};Ia.prototype.i=function(){return{}};Uu=new Ia;function cs(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Wi(this),this.P=hC,e=Du?125:void 0,this.V=new _a(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new sy}function sy(){this.i=null,this.g="",this.h=!1}var hC=45e3,ju={},Fo={};E=cs.prototype;E.setTimeout=function(e){this.P=e};function Fu(e,t,n){e.L=1,e.v=Ta(Mt(t)),e.s=n,e.S=!0,oy(e,null)}function oy(e,t){e.G=Date.now(),ds(e),e.A=Mt(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),py(n.i,"t",r),e.C=0,n=e.l.J,e.h=new sy,e.g=My(e.l,n?t:null,!e.s),0<e.O&&(e.M=new sC(Ee(e.Pa,e,e.g),e.O)),ey(e.U,e.g,"readystatechange",e.nb),t=e.I?Wv(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),bi(),oC(e.j,e.u,e.A,e.m,e.W,e.s)}E.nb=function(e){e=e.target;const t=this.M;t&&pt(e)==3?t.l():this.Pa(e)};E.Pa=function(e){try{if(e==this.g)e:{const c=pt(this.g);var t=this.g.Ia();const f=this.g.da();if(!(3>c)&&(c!=3||Du||this.g&&(this.h.h||this.g.ja()||Kf(this.g)))){this.J||c!=4||t==7||(t==8||0>=f?bi(3):bi(2)),Sa(this);var n=this.g.da();this.ca=n;t:if(ay(this)){var r=Kf(this.g);e="";var i=r.length,s=pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cn(this),mi(this);var o="";break t}this.h.i=new L.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,aC(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Fi(a)){var u=a;break t}}u=null}if(n=u)cr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Bu(this,n);else{this.i=!1,this.o=3,Ce(12),Cn(this),mi(this);break e}}this.S?(ly(this,c,o),Du&&this.i&&c==3&&(ey(this.U,this.V,"tick",this.mb),this.V.start())):(cr(this.j,this.m,o,null),Bu(this,o)),c==4&&Cn(this),this.i&&!this.J&&(c==4?Oy(this.l,this):(this.i=!1,ds(this)))}else xC(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ce(12)):(this.o=0,Ce(13)),Cn(this),mi(this)}}}catch{}finally{}};function ay(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function ly(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=fC(e,n),i==Fo){t==4&&(e.o=4,Ce(14),r=!1),cr(e.j,e.m,null,"[Incomplete Response]");break}else if(i==ju){e.o=4,Ce(15),cr(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else cr(e.j,e.m,i,null),Bu(e,i);ay(e)&&i!=Fo&&i!=ju&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Ce(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Pd(t),t.M=!0,Ce(11))):(cr(e.j,e.m,n,"[Invalid Chunked Response]"),Cn(e),mi(e))}E.mb=function(){if(this.g){var e=pt(this.g),t=this.g.ja();this.C<t.length&&(Sa(this),ly(this,e,t),this.i&&e!=4&&ds(this))}};function fC(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Fo:(n=Number(t.substring(n,r)),isNaN(n)?ju:(r+=1,r+n>t.length?Fo:(t=t.slice(r,r+n),e.C=r+n,t)))}E.cancel=function(){this.J=!0,Cn(this)};function ds(e){e.Y=Date.now()+e.P,uy(e,e.P)}function uy(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=ls(Ee(e.lb,e),t)}function Sa(e){e.B&&(L.clearTimeout(e.B),e.B=null)}E.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(lC(this.j,this.A),this.L!=2&&(bi(),Ce(17)),Cn(this),this.o=2,mi(this)):uy(this,this.Y-e)};function mi(e){e.l.H==0||e.J||Oy(e.l,e)}function Cn(e){Sa(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,gd(e.V),ty(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Bu(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||zu(n.i,e))){if(!e.K&&zu(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Vo(n),Ra(n);else break e;Cd(n),Ce(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=ls(Ee(n.ib,n),6e3));if(1>=vy(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Pn(n,11)}else if((e.K||n.g==e)&&Vo(n),!Fi(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const f=u[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const g=u[5];g!=null&&typeof g=="number"&&0<g&&(r=1.5*g,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=e.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Id(s,s.h),s.h=null))}if(r.F){const w=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,b(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Dy(r,r.J?r.pa:null,r.Y),o.K){yy(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Sa(a),ds(a)),r.g=o}else Ay(r);0<n.j.length&&Aa(n)}else u[0]!="stop"&&u[0]!="close"||Pn(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Pn(n,7):kd(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}bi(4)}catch{}}function pC(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(ma(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function gC(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(ma(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function cy(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(ma(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=gC(e),r=pC(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var dy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mC(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function On(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof On){this.h=e.h,Bo(this,e.j),this.s=e.s,this.g=e.g,zo(this,e.m),this.l=e.l;var t=e.i,n=new Ki;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Hf(this,n),this.o=e.o}else e&&(t=String(e).match(dy))?(this.h=!1,Bo(this,t[1]||"",!0),this.s=ri(t[2]||""),this.g=ri(t[3]||"",!0),zo(this,t[4]),this.l=ri(t[5]||"",!0),Hf(this,t[6]||"",!0),this.o=ri(t[7]||"")):(this.h=!1,this.i=new Ki(null,this.h))}On.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ii(t,Wf,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ii(t,Wf,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(ii(n,n.charAt(0)=="/"?wC:yC,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ii(n,EC)),e.join("")};function Mt(e){return new On(e)}function Bo(e,t,n){e.j=n?ri(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function zo(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Hf(e,t,n){t instanceof Ki?(e.i=t,IC(e.i,e.h)):(n||(t=ii(t,_C)),e.i=new Ki(t,e.h))}function b(e,t,n){e.i.set(t,n)}function Ta(e){return b(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ri(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ii(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,vC),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function vC(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Wf=/[#\/\?@]/g,yC=/[#\?:]/g,wC=/[#\?]/g,_C=/[#\?@]/g,EC=/#/g;function Ki(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function mn(e){e.g||(e.g=new Map,e.h=0,e.i&&mC(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}E=Ki.prototype;E.add=function(e,t){mn(this),this.i=null,e=Ur(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function hy(e,t){mn(e),t=Ur(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function fy(e,t){return mn(e),t=Ur(e,t),e.g.has(t)}E.forEach=function(e,t){mn(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};E.ta=function(){mn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};E.Z=function(e){mn(this);let t=[];if(typeof e=="string")fy(this,e)&&(t=t.concat(this.g.get(Ur(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};E.set=function(e,t){return mn(this),this.i=null,e=Ur(this,e),fy(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};E.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function py(e,t,n){hy(e,t),0<n.length&&(e.i=null,e.g.set(Ur(e,t),od(n)),e.h+=n.length)}E.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Ur(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function IC(e,t){t&&!e.j&&(mn(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(hy(this,r),py(this,i,n))},e)),e.j=t}var SC=class{constructor(e,t){this.g=e,this.map=t}};function gy(e){this.l=e||TC,L.PerformanceNavigationTiming?(e=L.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(L.g&&L.g.Ka&&L.g.Ka()&&L.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var TC=10;function my(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function vy(e){return e.h?1:e.g?e.g.size:0}function zu(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Id(e,t){e.g?e.g.add(t):e.h=t}function yy(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}gy.prototype.cancel=function(){if(this.i=wy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function wy(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return od(e.i)}var kC=class{stringify(e){return L.JSON.stringify(e,void 0)}parse(e){return L.JSON.parse(e,void 0)}};function CC(){this.g=new kC}function PC(e,t,n){const r=n||"";try{cy(e,function(i,s){let o=i;os(i)&&(o=fd(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function RC(e,t){const n=new Ea;if(L.Image){const r=new Image;r.onload=Ms(Us,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Ms(Us,n,r,"TestLoadImage: error",!1,t),r.onabort=Ms(Us,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Ms(Us,n,r,"TestLoadImage: timeout",!1,t),L.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Us(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function ka(e){this.l=e.fc||null,this.j=e.ob||!1}ue(ka,wd);ka.prototype.g=function(){return new Ca(this.l,this.j)};ka.prototype.i=function(e){return function(){return e}}({});function Ca(e,t){le.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Sd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ue(Ca,le);var Sd=0;E=Ca.prototype;E.open=function(e,t){if(this.readyState!=Sd)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Gi(this)};E.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||L).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};E.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,hs(this)),this.readyState=Sd};E.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Gi(this)),this.g&&(this.readyState=3,Gi(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof L.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_y(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function _y(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}E.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?hs(this):Gi(this),this.readyState==3&&_y(this)}};E.Za=function(e){this.g&&(this.response=this.responseText=e,hs(this))};E.Ya=function(e){this.g&&(this.response=e,hs(this))};E.ka=function(){this.g&&hs(this)};function hs(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Gi(e)}E.setRequestHeader=function(e,t){this.v.append(e,t)};E.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};E.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Gi(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Ca.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var AC=L.JSON.parse;function ee(e){le.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ey,this.L=this.M=!1}ue(ee,le);var Ey="",NC=/^https?$/i,OC=["POST","PUT"];E=ee.prototype;E.Oa=function(e){this.M=e};E.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Uu.g(),this.C=this.u?Vf(this.u):Vf(Uu),this.g.onreadystatechange=Ee(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){bf(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=L.FormData&&e instanceof L.FormData,!(0<=Bv(OC,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ty(this),0<this.B&&((this.L=LC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ee(this.ua,this)):this.A=md(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){bf(this,s)}};function LC(e){return Bi&&typeof e.timeout=="number"&&e.ontimeout!==void 0}E.ua=function(){typeof sd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,fe(this,"timeout"),this.abort(8))};function bf(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Iy(e),Pa(e)}function Iy(e){e.F||(e.F=!0,fe(e,"complete"),fe(e,"error"))}E.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,fe(this,"complete"),fe(this,"abort"),Pa(this))};E.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Pa(this,!0)),ee.$.N.call(this)};E.La=function(){this.s||(this.G||this.v||this.l?Sy(this):this.kb())};E.kb=function(){Sy(this)};function Sy(e){if(e.h&&typeof sd<"u"&&(!e.C[1]||pt(e)!=4||e.da()!=2)){if(e.v&&pt(e)==4)md(e.La,0,e);else if(fe(e,"readystatechange"),pt(e)==4){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(dy)[1]||null;!i&&L.self&&L.self.location&&(i=L.self.location.protocol.slice(0,-1)),r=!NC.test(i?i.toLowerCase():"")}n=r}if(n)fe(e,"complete"),fe(e,"success");else{e.m=6;try{var s=2<pt(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",Iy(e)}}finally{Pa(e)}}}}function Pa(e,t){if(e.g){Ty(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||fe(e,"ready");try{n.onreadystatechange=r}catch{}}}function Ty(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(L.clearTimeout(e.A),e.A=null)}E.isActive=function(){return!!this.g};function pt(e){return e.g?e.g.readyState:0}E.da=function(){try{return 2<pt(this)?this.g.status:-1}catch{return-1}};E.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};E.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),AC(t)}};function Kf(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Ey:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function xC(e){const t={};e=(e.g&&2<=pt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Fi(e[r]))continue;var n=nC(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}Xk(t,function(r){return r.join(", ")})}E.Ia=function(){return this.m};E.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ky(e){let t="";return ld(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Td(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=ky(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):b(e,t,n))}function Xr(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Cy(e){this.Ga=0,this.j=[],this.l=new Ea,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Xr("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Xr("baseRetryDelayMs",5e3,e),this.hb=Xr("retryDelaySeedMs",1e4,e),this.eb=Xr("forwardChannelMaxRetries",2,e),this.xa=Xr("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new gy(e&&e.concurrentRequestLimit),this.Ja=new CC,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}E=Cy.prototype;E.ra=8;E.H=1;function kd(e){if(Py(e),e.H==3){var t=e.W++,n=Mt(e.I);if(b(n,"SID",e.K),b(n,"RID",t),b(n,"TYPE","terminate"),fs(e,n),t=new cs(e,e.l,t),t.L=2,t.v=Ta(Mt(n)),n=!1,L.navigator&&L.navigator.sendBeacon)try{n=L.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&L.Image&&(new Image().src=t.v,n=!0),n||(t.g=My(t.l,null),t.g.ha(t.v)),t.G=Date.now(),ds(t)}xy(e)}function Ra(e){e.g&&(Pd(e),e.g.cancel(),e.g=null)}function Py(e){Ra(e),e.u&&(L.clearTimeout(e.u),e.u=null),Vo(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&L.clearTimeout(e.m),e.m=null)}function Aa(e){if(!my(e.i)&&!e.m){e.m=!0;var t=e.Na;Vi||Jv(),Hi||(Vi(),Hi=!0),pd.add(t,e),e.C=0}}function DC(e,t){return vy(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=ls(Ee(e.Na,e,t),Ly(e,e.C)),e.C++,!0)}E.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new cs(this,this.l,e);let s=this.s;if(this.U&&(s?(s=Wv(s),bv(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Ry(this,i,t),n=Mt(this.I),b(n,"RID",e),b(n,"CVER",22),this.F&&b(n,"X-HTTP-Session-Id",this.F),fs(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(ky(s)))+"&"+t:this.o&&Td(n,this.o,s)),Id(this.i,i),this.bb&&b(n,"TYPE","init"),this.P?(b(n,"$req",t),b(n,"SID","null"),i.aa=!0,Fu(i,n,null)):Fu(i,n,t),this.H=2}}else this.H==3&&(e?Gf(this,e):this.j.length==0||my(this.i)||Gf(this))};function Gf(e,t){var n;t?n=t.m:n=e.W++;const r=Mt(e.I);b(r,"SID",e.K),b(r,"RID",n),b(r,"AID",e.V),fs(e,r),e.o&&e.s&&Td(r,e.o,e.s),n=new cs(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Ry(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Id(e.i,n),Fu(n,r,t)}function fs(e,t){e.na&&ld(e.na,function(n,r){b(t,r,n)}),e.h&&cy({},function(n,r){b(t,r,n)})}function Ry(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Ee(e.h.Va,e.h,e):null;e:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{PC(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function Ay(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Vi||Jv(),Hi||(Vi(),Hi=!0),pd.add(t,e),e.A=0}}function Cd(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=ls(Ee(e.Ma,e),Ly(e,e.A)),e.A++,!0)}E.Ma=function(){if(this.u=null,Ny(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=ls(Ee(this.jb,this),e)}};E.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ce(10),Ra(this),Ny(this))};function Pd(e){e.B!=null&&(L.clearTimeout(e.B),e.B=null)}function Ny(e){e.g=new cs(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Mt(e.wa);b(t,"RID","rpc"),b(t,"SID",e.K),b(t,"AID",e.V),b(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&b(t,"TO",e.qa),b(t,"TYPE","xmlhttp"),fs(e,t),e.o&&e.s&&Td(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Ta(Mt(t)),n.s=null,n.S=!0,oy(n,e)}E.ib=function(){this.v!=null&&(this.v=null,Ra(this),Cd(this),Ce(19))};function Vo(e){e.v!=null&&(L.clearTimeout(e.v),e.v=null)}function Oy(e,t){var n=null;if(e.g==t){Vo(e),Pd(e),e.g=null;var r=2}else if(zu(e.i,t))n=t.F,yy(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=vd(),fe(r,new iy(r,n)),Aa(e)}else Ay(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&DC(e,t)||r==2&&Cd(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Pn(e,5);break;case 4:Pn(e,10);break;case 3:Pn(e,6);break;default:Pn(e,2)}}}function Ly(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Pn(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=Ee(e.pb,e);n||(n=new On("//www.google.com/images/cleardot.gif"),L.location&&L.location.protocol=="http"||Bo(n,"https"),Ta(n)),RC(n.toString(),r)}else Ce(2);e.H=0,e.h&&e.h.za(t),xy(e),Py(e)}E.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Ce(2)):(this.l.info("Failed to ping google.com"),Ce(1))};function xy(e){if(e.H=0,e.ma=[],e.h){const t=wy(e.i);(t.length!=0||e.j.length!=0)&&($f(e.ma,t),$f(e.ma,e.j),e.i.i.length=0,od(e.j),e.j.length=0),e.h.ya()}}function Dy(e,t,n){var r=n instanceof On?Mt(n):new On(n);if(r.g!="")t&&(r.g=t+"."+r.g),zo(r,r.m);else{var i=L.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new On(null);r&&Bo(s,r),t&&(s.g=t),i&&zo(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&b(r,n,t),b(r,"VER",e.ra),fs(e,r),r}function My(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new ee(new ka({ob:!0})):new ee(e.va),t.Oa(e.J),t}E.isActive=function(){return!!this.h&&this.h.isActive(this)};function $y(){}E=$y.prototype;E.Ba=function(){};E.Aa=function(){};E.za=function(){};E.ya=function(){};E.isActive=function(){return!0};E.Va=function(){};function Je(e,t){le.call(this),this.g=new Cy(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Fi(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Fi(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new jr(this)}ue(Je,le);Je.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Ce(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Dy(e,null,e.Y),Aa(e)};Je.prototype.close=function(){kd(this.g)};Je.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=fd(e),e=n);t.j.push(new SC(t.fb++,e)),t.H==3&&Aa(t)};Je.prototype.N=function(){this.g.h=null,delete this.j,kd(this.g),delete this.g,Je.$.N.call(this)};function Uy(e){_d.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}ue(Uy,_d);function jy(){Ed.call(this),this.status=1}ue(jy,Ed);function jr(e){this.g=e}ue(jr,$y);jr.prototype.Ba=function(){fe(this.g,"a")};jr.prototype.Aa=function(e){fe(this.g,new Uy(e))};jr.prototype.za=function(e){fe(this.g,new jy)};jr.prototype.ya=function(){fe(this.g,"b")};function MC(){this.blockSize=-1}function Et(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ue(Et,MC);Et.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function kl(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}Et.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)kl(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){kl(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){kl(this,r),i=0;break}}this.h=i,this.i+=t};Et.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function z(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var $C={};function Rd(e){return-128<=e&&128>e?Hk(e,function(t){return new z([t|0],0>t?-1:0)}):new z([e|0],0>e?-1:0)}function gt(e){if(isNaN(e)||!isFinite(e))return wr;if(0>e)return de(gt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Vu;return new z(t,0)}function Fy(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return de(Fy(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=gt(Math.pow(t,8)),r=wr,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=gt(Math.pow(t,s)),r=r.R(s).add(gt(o))):(r=r.R(n),r=r.add(gt(o)))}return r}var Vu=4294967296,wr=Rd(0),Hu=Rd(1),qf=Rd(16777216);E=z.prototype;E.ea=function(){if(be(this))return-de(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Vu+r)*t,t*=Vu}return e};E.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Rt(this))return"0";if(be(this))return"-"+de(this).toString(e);for(var t=gt(Math.pow(e,6)),n=this,r="";;){var i=Wo(n,t).g;n=Ho(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Rt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};E.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Rt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function be(e){return e.h==-1}E.X=function(e){return e=Ho(this,e),be(e)?-1:Rt(e)?0:1};function de(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new z(n,~e.h).add(Hu)}E.abs=function(){return be(this)?de(this):this};E.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new z(n,n[n.length-1]&-2147483648?-1:0)};function Ho(e,t){return e.add(de(t))}E.R=function(e){if(Rt(this)||Rt(e))return wr;if(be(this))return be(e)?de(this).R(de(e)):de(de(this).R(e));if(be(e))return de(this.R(de(e)));if(0>this.X(qf)&&0>e.X(qf))return gt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=o*l,js(n,2*r+2*i),n[2*r+2*i+1]+=s*l,js(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,js(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,js(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new z(n,0)};function js(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Yr(e,t){this.g=e,this.h=t}function Wo(e,t){if(Rt(t))throw Error("division by zero");if(Rt(e))return new Yr(wr,wr);if(be(e))return t=Wo(de(e),t),new Yr(de(t.g),de(t.h));if(be(t))return t=Wo(e,de(t)),new Yr(de(t.g),t.h);if(30<e.g.length){if(be(e)||be(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Hu,r=t;0>=r.X(e);)n=Xf(n),r=Xf(r);var i=Yn(n,1),s=Yn(r,1);for(r=Yn(r,2),n=Yn(n,2);!Rt(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Yn(r,1),n=Yn(n,1)}return t=Ho(e,i.R(t)),new Yr(i,t)}for(i=wr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=gt(n),o=s.R(t);be(o)||0<o.X(e);)n-=r,s=gt(n),o=s.R(t);Rt(s)&&(s=Hu),i=i.add(s),e=Ho(e,o)}return new Yr(i,e)}E.gb=function(e){return Wo(this,e).h};E.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new z(n,this.h&e.h)};E.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new z(n,this.h|e.h)};E.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new z(n,this.h^e.h)};function Xf(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new z(n,e.h)}function Yn(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new z(i,e.h)}Je.prototype.send=Je.prototype.u;Je.prototype.open=Je.prototype.m;Je.prototype.close=Je.prototype.close;yd.NO_ERROR=0;yd.TIMEOUT=8;yd.HTTP_ERROR=6;cC.COMPLETE="complete";dC.EventType=us;us.OPEN="a";us.CLOSE="b";us.ERROR="c";us.MESSAGE="d";le.prototype.listen=le.prototype.O;ee.prototype.listenOnce=ee.prototype.P;ee.prototype.getLastError=ee.prototype.Sa;ee.prototype.getLastErrorCode=ee.prototype.Ia;ee.prototype.getStatus=ee.prototype.da;ee.prototype.getResponseJson=ee.prototype.Wa;ee.prototype.getResponseText=ee.prototype.ja;ee.prototype.send=ee.prototype.ha;ee.prototype.setWithCredentials=ee.prototype.Oa;Et.prototype.digest=Et.prototype.l;Et.prototype.reset=Et.prototype.reset;Et.prototype.update=Et.prototype.j;z.prototype.add=z.prototype.add;z.prototype.multiply=z.prototype.R;z.prototype.modulo=z.prototype.gb;z.prototype.compare=z.prototype.X;z.prototype.toNumber=z.prototype.ea;z.prototype.toString=z.prototype.toString;z.prototype.getBits=z.prototype.D;z.fromNumber=gt;z.fromString=Fy;var UC=z;const Yf="@firebase/firestore";/**
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
 */class ve{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ve.UNAUTHENTICATED=new ve(null),ve.GOOGLE_CREDENTIALS=new ve("google-credentials-uid"),ve.FIRST_PARTY=new ve("first-party-uid"),ve.MOCK_USER=new ve("mock-user");/**
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
 */let ps="10.3.1";/**
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
 */const Rr=new ca("@firebase/firestore");function je(e,...t){if(Rr.logLevel<=F.DEBUG){const n=t.map(Nd);Rr.debug(`Firestore (${ps}): ${e}`,...n)}}function Ad(e,...t){if(Rr.logLevel<=F.ERROR){const n=t.map(Nd);Rr.error(`Firestore (${ps}): ${e}`,...n)}}function jC(e,...t){if(Rr.logLevel<=F.WARN){const n=t.map(Nd);Rr.warn(`Firestore (${ps}): ${e}`,...n)}}function Nd(e){if(typeof e=="string")return e;try{/**
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
 */function Od(e="Unexpected state"){const t=`FIRESTORE (${ps}) INTERNAL ASSERTION FAILED: `+e;throw Ad(t),new Error(t)}function Wu(e,t){e||Od()}/**
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
 */const we={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _e extends ut{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class _r{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class By{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class FC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ve.UNAUTHENTICATED))}shutdown(){}}class BC{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class zC{constructor(t){this.t=t,this.currentUser=ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new _r;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new _r,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{je("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(je("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new _r)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(je("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Wu(typeof r.accessToken=="string"),new By(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Wu(t===null||typeof t=="string"),new ve(t)}}class VC{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=ve.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class HC{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new VC(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(ve.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class WC{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bC{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&je("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,je("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{je("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):je("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Wu(typeof n.token=="string"),this.R=n.token,new WC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function KC(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class GC{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=KC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function zy(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class qC{constructor(t,n,r,i,s,o,a,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class bo{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new bo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof bo&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var Qf,U;(U=Qf||(Qf={}))[U.OK=0]="OK",U[U.CANCELLED=1]="CANCELLED",U[U.UNKNOWN=2]="UNKNOWN",U[U.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",U[U.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",U[U.NOT_FOUND=5]="NOT_FOUND",U[U.ALREADY_EXISTS=6]="ALREADY_EXISTS",U[U.PERMISSION_DENIED=7]="PERMISSION_DENIED",U[U.UNAUTHENTICATED=16]="UNAUTHENTICATED",U[U.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",U[U.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",U[U.ABORTED=10]="ABORTED",U[U.OUT_OF_RANGE=11]="OUT_OF_RANGE",U[U.UNIMPLEMENTED=12]="UNIMPLEMENTED",U[U.INTERNAL=13]="INTERNAL",U[U.UNAVAILABLE=14]="UNAVAILABLE",U[U.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new UC([4294967295,4294967295],0);function Cl(){return typeof document<"u"?document:null}/**
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
 */class XC{constructor(t,n,r=1e3,i=1.5,s=6e4){this._i=t,this.timerId=n,this.xo=r,this.Oo=i,this.No=s,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(t){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),i=Math.max(0,n-r);i>0&&je("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,i,()=>(this.ko=Date.now(),t())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
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
 */class Ld{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new _r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new Ld(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _e(we.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function YC(e,t){if(Ad("AsyncQueue",`${t}: ${e}`),zy(e))return new _e(we.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class QC{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ve.UNAUTHENTICATED,this.clientId=GC.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{je("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(je("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _e(we.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new _r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=YC(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}/**
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
 */function Vy(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const Jf=new Map;function JC(e,t,n,r){if(t===!0&&r===!0)throw new _e(we.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function ZC(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Od()}function e2(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new _e(we.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ZC(e);throw new _e(we.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class Zf{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new _e(we.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new _e(we.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}JC("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Vy((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new _e(we.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new _e(we.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new _e(we.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Hy{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _e(we.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new _e(we.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zf(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new FC;switch(r.type){case"firstParty":return new HC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new _e(we.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Jf.get(n);r&&(je("ComponentProvider","Removing Datastore"),Jf.delete(n),r.terminate())}(this),Promise.resolve()}}function t2(e,t,n,r={}){var i;const s=(e=e2(e,Hy))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&jC("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=ve.MOCK_USER;else{a=R_(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new _e(we.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ve(u)}e._authCredentials=new BC(new By(a,l))}}/**
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
 */class n2{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new XC(this,"async_queue_retry"),this.ou=()=>{const n=Cl();n&&je("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const t=Cl();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this._u(),this.au(t)}enterRestrictedMode(t){if(!this.eu){this.eu=!0,this.iu=t||!1;const n=Cl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(t){if(this._u(),this.eu)return new Promise(()=>{});const n=new _r;return this.au(()=>this.eu&&this.iu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xa.push(t),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(t){if(!zy(t))throw t;je("AsyncQueue","Operation failed with retryable error: "+t)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(t){const n=this.Za.then(()=>(this.ru=!0,t().catch(r=>{this.nu=r,this.ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ad("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(t,n,r){this._u(),this.su.indexOf(t)>-1&&(n=0);const i=Ld.createAndSchedule(this,t,n,r,s=>this.cu(s));return this.tu.push(i),i}_u(){this.nu&&Od()}verifyOperationInProgress(){}async lu(){let t;do t=this.Za,await t;while(t!==this.Za)}hu(t){for(const n of this.tu)if(n.timerId===t)return!0;return!1}Pu(t){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.lu()})}Iu(t){this.su.push(t)}cu(t){const n=this.tu.indexOf(t);this.tu.splice(n,1)}}class r2 extends Hy{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new n2}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||s2(this),this._firestoreClient.terminate()}}function i2(e,t){const n=typeof e=="object"?e:$m(),r=typeof e=="string"?e:t||"(default)",i=ts(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=C_("firestore");s&&t2(i,...s)}return i}function s2(e){var t,n,r;const i=e._freezeSettings(),s=function(a,l,u,c){return new qC(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Vy(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new QC(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}(function(t,n=!0){(function(i){ps=i})(Dr),_t(new at("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new r2(new zC(r.getProvider("auth-internal")),new bC(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new _e(we.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bo(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),qe(Yf,"4.1.3",t),qe(Yf,"4.1.3","esm2017")})();const o2={apiKey:"AIzaSyAVcFBetICuetwA9F4drSRfWxB9d5RYklc",authDomain:"note-fc0fc.firebaseapp.com",projectId:"note-fc0fc",storageBucket:"note-fc0fc.appspot.com",messagingSenderId:"278138305584",appId:"1:278138305584:web:f5a8b50a6421d2edb181f5",measurementId:"G-D5DTC7CZD3"},Wy=Mm(o2),by=Mk(Wy),a2=i2(Wy);a2.doc;function l2(){const[e,t]=T.useState(""),[n,r]=T.useState(""),i=async s=>{s.preventDefault(),await _T(by,e,n).then(o=>{const a=o.user;console.log(a)}).catch(o=>{o.code,o.message,console.log(o)})};return C.jsxs("html",{lang:"en",children:[C.jsxs("head",{children:[C.jsx("meta",{charset:"UTF-8"}),C.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),C.jsx("title",{children:"Document"})]}),C.jsx("body",{children:C.jsxs("div",{children:[C.jsx("h1",{children:"Signup"}),C.jsxs("form",{action:"",children:[C.jsx("label",{htmlFor:"email",children:"Email"}),C.jsx("input",{type:"text",name:"email",id:"",onChange:s=>t(s.target.value)}),C.jsx("label",{htmlFor:"password",children:"Password"}),C.jsx("input",{type:"text",name:"password",id:"",onChange:s=>r(s.target.value)}),C.jsx("button",{onClick:i,children:"Signup"})]})]})})]})}function u2(){const[e,t]=T.useState(""),[n,r]=T.useState(""),i=async s=>{s.preventDefault(),await ET(by,e,n).then(o=>{const a=o.user;console.log(a)}).catch(o=>{o.code,o.message,console.log(o)})};return C.jsxs("div",{children:[C.jsx("h1",{children:"Signin"}),C.jsxs("form",{action:"",children:[C.jsx("label",{htmlFor:"email",children:"Email"}),C.jsx("input",{type:"text",name:"email",id:"",onChange:s=>t(s.target.value)}),C.jsx("label",{htmlFor:"password",children:"Password"}),C.jsx("input",{type:"text",name:"password",id:"",onChange:s=>r(s.target.value)}),C.jsx("button",{onClick:i,children:"Signin"})]})]})}function c2(){return C.jsxs("div",{className:"buttons",children:[C.jsx(qh,{to:"/Note-App/signup",className:"btn btn-primary",children:"Sign Up"}),C.jsx(qh,{to:"/Note-App/signin",className:"btn btn-primary",children:"Sign In"})]})}function d2(){return C.jsxs(C.Fragment,{children:[C.jsxs(g_,{basename:"/Note-App",children:[C.jsx(c2,{}),C.jsxs(u_,{children:[C.jsx(Eu,{path:"/Note-App/signup",element:C.jsx(l2,{})}),C.jsx(Eu,{path:"/Note-App/signin",element:C.jsx(u2,{})})]})]}),C.jsx(C.Fragment,{children:C.jsxs("div",{className:"navbar w-full flex ",children:[C.jsx("div",{className:"navbar-start",children:C.jsxs("div",{className:"dropdown",children:[C.jsx("label",{tabIndex:0,className:"btn btn-ghost btn-circle",children:C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h7"})})}),C.jsxs("ul",{tabIndex:0,className:"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52",children:[C.jsx("li",{children:C.jsx("a",{children:"Homepage"})}),C.jsx("li",{children:C.jsx("a",{children:"Portfolio"})}),C.jsx("li",{children:C.jsx("a",{children:"About"})})]})]})}),C.jsx("div",{className:"navbar-center",children:C.jsx("a",{className:"btn btn-ghost normal-case text-xl",children:"daisyUI"})}),C.jsxs("div",{className:"navbar-end",children:[C.jsx("button",{className:"btn btn-ghost btn-circle",children:C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),C.jsx("button",{className:"btn btn-ghost btn-circle",children:C.jsxs("div",{className:"indicator",children:[C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})}),C.jsx("span",{className:"badge badge-xs badge-primary indicator-item"})]})})]})]})})]})}Pl.createRoot(document.getElementById("root")).render(C.jsx(up.StrictMode,{children:C.jsx(d2,{})}));
