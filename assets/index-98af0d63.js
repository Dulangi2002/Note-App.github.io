(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function yy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pf={exports:{}},Ao={},Af={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mi=Symbol.for("react.element"),wy=Symbol.for("react.portal"),_y=Symbol.for("react.fragment"),Ey=Symbol.for("react.strict_mode"),Iy=Symbol.for("react.profiler"),Sy=Symbol.for("react.provider"),Ty=Symbol.for("react.context"),ky=Symbol.for("react.forward_ref"),Cy=Symbol.for("react.suspense"),Py=Symbol.for("react.memo"),Ay=Symbol.for("react.lazy"),hh=Symbol.iterator;function Ry(e){return e===null||typeof e!="object"?null:(e=hh&&e[hh]||e["@@iterator"],typeof e=="function"?e:null)}var Rf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nf=Object.assign,Of={};function Sr(e,t,n){this.props=e,this.context=t,this.refs=Of,this.updater=n||Rf}Sr.prototype.isReactComponent={};Sr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Sr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Lf(){}Lf.prototype=Sr.prototype;function Tu(e,t,n){this.props=e,this.context=t,this.refs=Of,this.updater=n||Rf}var ku=Tu.prototype=new Lf;ku.constructor=Tu;Nf(ku,Sr.prototype);ku.isPureReactComponent=!0;var dh=Array.isArray,Df=Object.prototype.hasOwnProperty,Cu={current:null},xf={key:!0,ref:!0,__self:!0,__source:!0};function Mf(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Df.call(t,r)&&!xf.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Mi,type:e,key:s,ref:o,props:i,_owner:Cu.current}}function Ny(e,t){return{$$typeof:Mi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Pu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Mi}function Oy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var fh=/\/+/g;function gl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Oy(""+e.key):t.toString(36)}function ks(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Mi:case wy:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+gl(o,0):r,dh(i)?(n="",e!=null&&(n=e.replace(fh,"$&/")+"/"),ks(i,t,n,"",function(u){return u})):i!=null&&(Pu(i)&&(i=Ny(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(fh,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",dh(e))for(var l=0;l<e.length;l++){s=e[l];var a=r+gl(s,l);o+=ks(s,t,n,a,i)}else if(a=Ry(e),typeof a=="function")for(e=a.call(e),l=0;!(s=e.next()).done;)s=s.value,a=r+gl(s,l++),o+=ks(s,t,n,a,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function rs(e,t,n){if(e==null)return e;var r=[],i=0;return ks(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Ly(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},Cs={transition:null},Dy={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:Cs,ReactCurrentOwner:Cu};D.Children={map:rs,forEach:function(e,t,n){rs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return rs(e,function(){t++}),t},toArray:function(e){return rs(e,function(t){return t})||[]},only:function(e){if(!Pu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Sr;D.Fragment=_y;D.Profiler=Iy;D.PureComponent=Tu;D.StrictMode=Ey;D.Suspense=Cy;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dy;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Nf({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Cu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)Df.call(t,a)&&!xf.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Mi,type:e.type,key:i,ref:s,props:r,_owner:o}};D.createContext=function(e){return e={$$typeof:Ty,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Sy,_context:e},e.Consumer=e};D.createElement=Mf;D.createFactory=function(e){var t=Mf.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:ky,render:e}};D.isValidElement=Pu;D.lazy=function(e){return{$$typeof:Ay,_payload:{_status:-1,_result:e},_init:Ly}};D.memo=function(e,t){return{$$typeof:Py,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Cs.transition;Cs.transition={};try{e()}finally{Cs.transition=t}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(e,t){return Pe.current.useCallback(e,t)};D.useContext=function(e){return Pe.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};D.useEffect=function(e,t){return Pe.current.useEffect(e,t)};D.useId=function(){return Pe.current.useId()};D.useImperativeHandle=function(e,t,n){return Pe.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return Pe.current.useMemo(e,t)};D.useReducer=function(e,t,n){return Pe.current.useReducer(e,t,n)};D.useRef=function(e){return Pe.current.useRef(e)};D.useState=function(e){return Pe.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return Pe.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return Pe.current.useTransition()};D.version="18.2.0";Af.exports=D;var F=Af.exports;const xy=yy(F);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var My=F,$y=Symbol.for("react.element"),Uy=Symbol.for("react.fragment"),Fy=Object.prototype.hasOwnProperty,jy=My.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zy={key:!0,ref:!0,__self:!0,__source:!0};function $f(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Fy.call(t,r)&&!zy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:$y,type:e,key:s,ref:o,props:i,_owner:jy.current}}Ao.Fragment=Uy;Ao.jsx=$f;Ao.jsxs=$f;Pf.exports=Ao;var ae=Pf.exports,la={},Uf={exports:{}},ze={},Ff={exports:{}},jf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,N){var O=T.length;T.push(N);e:for(;0<O;){var Y=O-1>>>1,re=T[Y];if(0<i(re,N))T[Y]=N,T[O]=re,O=Y;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var N=T[0],O=T.pop();if(O!==N){T[0]=O;e:for(var Y=0,re=T.length,ts=re>>>1;Y<ts;){var pn=2*(Y+1)-1,pl=T[pn],gn=pn+1,ns=T[gn];if(0>i(pl,O))gn<re&&0>i(ns,pl)?(T[Y]=ns,T[gn]=O,Y=gn):(T[Y]=pl,T[pn]=O,Y=pn);else if(gn<re&&0>i(ns,O))T[Y]=ns,T[gn]=O,Y=gn;else break e}}return N}function i(T,N){var O=T.sortIndex-N.sortIndex;return O!==0?O:T.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var a=[],u=[],h=1,p=null,g=3,m=!1,w=!1,_=!1,$=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(T){for(var N=n(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=T)r(u),N.sortIndex=N.expirationTime,t(a,N);else break;N=n(u)}}function v(T){if(_=!1,f(T),!w)if(n(a)!==null)w=!0,dl(I);else{var N=n(u);N!==null&&fl(v,N.startTime-T)}}function I(T,N){w=!1,_&&(_=!1,d(P),P=-1),m=!0;var O=g;try{for(f(N),p=n(a);p!==null&&(!(p.expirationTime>N)||T&&!Je());){var Y=p.callback;if(typeof Y=="function"){p.callback=null,g=p.priorityLevel;var re=Y(p.expirationTime<=N);N=e.unstable_now(),typeof re=="function"?p.callback=re:p===n(a)&&r(a),f(N)}else r(a);p=n(a)}if(p!==null)var ts=!0;else{var pn=n(u);pn!==null&&fl(v,pn.startTime-N),ts=!1}return ts}finally{p=null,g=O,m=!1}}var k=!1,C=null,P=-1,V=5,L=-1;function Je(){return!(e.unstable_now()-L<V)}function Nr(){if(C!==null){var T=e.unstable_now();L=T;var N=!0;try{N=C(!0,T)}finally{N?Or():(k=!1,C=null)}}else k=!1}var Or;if(typeof c=="function")Or=function(){c(Nr)};else if(typeof MessageChannel<"u"){var ch=new MessageChannel,vy=ch.port2;ch.port1.onmessage=Nr,Or=function(){vy.postMessage(null)}}else Or=function(){$(Nr,0)};function dl(T){C=T,k||(k=!0,Or())}function fl(T,N){P=$(function(){T(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){w||m||(w=!0,dl(I))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(T){switch(g){case 1:case 2:case 3:var N=3;break;default:N=g}var O=g;g=N;try{return T()}finally{g=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,N){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var O=g;g=T;try{return N()}finally{g=O}},e.unstable_scheduleCallback=function(T,N,O){var Y=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?Y+O:Y):O=Y,T){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=O+re,T={id:h++,callback:N,priorityLevel:T,startTime:O,expirationTime:re,sortIndex:-1},O>Y?(T.sortIndex=O,t(u,T),n(a)===null&&T===n(u)&&(_?(d(P),P=-1):_=!0,fl(v,O-Y))):(T.sortIndex=re,t(a,T),w||m||(w=!0,dl(I))),T},e.unstable_shouldYield=Je,e.unstable_wrapCallback=function(T){var N=g;return function(){var O=g;g=N;try{return T.apply(this,arguments)}finally{g=O}}}})(jf);Ff.exports=jf;var By=Ff.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zf=F,je=By;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bf=new Set,oi={};function Fn(e,t){pr(e,t),pr(e+"Capture",t)}function pr(e,t){for(oi[e]=t,e=0;e<t.length;e++)Bf.add(t[e])}var Rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),aa=Object.prototype.hasOwnProperty,Vy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ph={},gh={};function Hy(e){return aa.call(gh,e)?!0:aa.call(ph,e)?!1:Vy.test(e)?gh[e]=!0:(ph[e]=!0,!1)}function Wy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function by(e,t,n,r){if(t===null||typeof t>"u"||Wy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ae(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new Ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new Ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new Ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new Ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new Ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new Ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Au=/[\-:]([a-z])/g;function Ru(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Au,Ru);fe[t]=new Ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Au,Ru);fe[t]=new Ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Au,Ru);fe[t]=new Ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Nu(e,t,n,r){var i=fe.hasOwnProperty(t)?fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(by(t,n,i,r)&&(n=null),r||i===null?Hy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var $t=zf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,is=Symbol.for("react.element"),Wn=Symbol.for("react.portal"),bn=Symbol.for("react.fragment"),Ou=Symbol.for("react.strict_mode"),ua=Symbol.for("react.profiler"),Vf=Symbol.for("react.provider"),Hf=Symbol.for("react.context"),Lu=Symbol.for("react.forward_ref"),ca=Symbol.for("react.suspense"),ha=Symbol.for("react.suspense_list"),Du=Symbol.for("react.memo"),jt=Symbol.for("react.lazy"),Wf=Symbol.for("react.offscreen"),mh=Symbol.iterator;function Lr(e){return e===null||typeof e!="object"?null:(e=mh&&e[mh]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,ml;function Vr(e){if(ml===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ml=t&&t[1]||""}return`
`+ml+e}var vl=!1;function yl(e,t){if(!e||vl)return"";vl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=l);break}}}finally{vl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Vr(e):""}function Ky(e){switch(e.tag){case 5:return Vr(e.type);case 16:return Vr("Lazy");case 13:return Vr("Suspense");case 19:return Vr("SuspenseList");case 0:case 2:case 15:return e=yl(e.type,!1),e;case 11:return e=yl(e.type.render,!1),e;case 1:return e=yl(e.type,!0),e;default:return""}}function da(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case bn:return"Fragment";case Wn:return"Portal";case ua:return"Profiler";case Ou:return"StrictMode";case ca:return"Suspense";case ha:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Hf:return(e.displayName||"Context")+".Consumer";case Vf:return(e._context.displayName||"Context")+".Provider";case Lu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Du:return t=e.displayName||null,t!==null?t:da(e.type)||"Memo";case jt:t=e._payload,e=e._init;try{return da(e(t))}catch{}}return null}function Gy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return da(t);case 8:return t===Ou?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ln(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qy(e){var t=bf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ss(e){e._valueTracker||(e._valueTracker=qy(e))}function Kf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=bf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Bs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fa(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function vh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ln(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gf(e,t){t=t.checked,t!=null&&Nu(e,"checked",t,!1)}function pa(e,t){Gf(e,t);var n=ln(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ga(e,t.type,n):t.hasOwnProperty("defaultValue")&&ga(e,t.type,ln(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function yh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ga(e,t,n){(t!=="number"||Bs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Hr=Array.isArray;function ir(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ln(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ma(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(Hr(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ln(n)}}function qf(e,t){var n=ln(t.value),r=ln(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function _h(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Xf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function va(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Xf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var os,Qf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(os=os||document.createElement("div"),os.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=os.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function li(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xy=["Webkit","ms","Moz","O"];Object.keys(qr).forEach(function(e){Xy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),qr[t]=qr[e]})});function Yf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||qr.hasOwnProperty(e)&&qr[e]?(""+t).trim():t+"px"}function Jf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Yf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Qy=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ya(e,t){if(t){if(Qy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function wa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _a=null;function xu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ea=null,sr=null,or=null;function Eh(e){if(e=Fi(e)){if(typeof Ea!="function")throw Error(y(280));var t=e.stateNode;t&&(t=Do(t),Ea(e.stateNode,e.type,t))}}function Zf(e){sr?or?or.push(e):or=[e]:sr=e}function ep(){if(sr){var e=sr,t=or;if(or=sr=null,Eh(e),t)for(e=0;e<t.length;e++)Eh(t[e])}}function tp(e,t){return e(t)}function np(){}var wl=!1;function rp(e,t,n){if(wl)return e(t,n);wl=!0;try{return tp(e,t,n)}finally{wl=!1,(sr!==null||or!==null)&&(np(),ep())}}function ai(e,t){var n=e.stateNode;if(n===null)return null;var r=Do(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var Ia=!1;if(Rt)try{var Dr={};Object.defineProperty(Dr,"passive",{get:function(){Ia=!0}}),window.addEventListener("test",Dr,Dr),window.removeEventListener("test",Dr,Dr)}catch{Ia=!1}function Yy(e,t,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var Xr=!1,Vs=null,Hs=!1,Sa=null,Jy={onError:function(e){Xr=!0,Vs=e}};function Zy(e,t,n,r,i,s,o,l,a){Xr=!1,Vs=null,Yy.apply(Jy,arguments)}function e0(e,t,n,r,i,s,o,l,a){if(Zy.apply(this,arguments),Xr){if(Xr){var u=Vs;Xr=!1,Vs=null}else throw Error(y(198));Hs||(Hs=!0,Sa=u)}}function jn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ip(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ih(e){if(jn(e)!==e)throw Error(y(188))}function t0(e){var t=e.alternate;if(!t){if(t=jn(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ih(i),e;if(s===r)return Ih(i),t;s=s.sibling}throw Error(y(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function sp(e){return e=t0(e),e!==null?op(e):null}function op(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=op(e);if(t!==null)return t;e=e.sibling}return null}var lp=je.unstable_scheduleCallback,Sh=je.unstable_cancelCallback,n0=je.unstable_shouldYield,r0=je.unstable_requestPaint,J=je.unstable_now,i0=je.unstable_getCurrentPriorityLevel,Mu=je.unstable_ImmediatePriority,ap=je.unstable_UserBlockingPriority,Ws=je.unstable_NormalPriority,s0=je.unstable_LowPriority,up=je.unstable_IdlePriority,Ro=null,pt=null;function o0(e){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(Ro,e,void 0,(e.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:u0,l0=Math.log,a0=Math.LN2;function u0(e){return e>>>=0,e===0?32:31-(l0(e)/a0|0)|0}var ls=64,as=4194304;function Wr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Wr(l):(s&=o,s!==0&&(r=Wr(s)))}else o=n&~i,o!==0?r=Wr(o):s!==0&&(r=Wr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-rt(t),i=1<<n,r|=e[n],t&=~i;return r}function c0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function h0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-rt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=c0(l,t)):a<=t&&(e.expiredLanes|=l),s&=~l}}function Ta(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cp(){var e=ls;return ls<<=1,!(ls&4194240)&&(ls=64),e}function _l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $i(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rt(t),e[t]=n}function d0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-rt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function $u(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-rt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var j=0;function hp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var dp,Uu,fp,pp,gp,ka=!1,us=[],Xt=null,Qt=null,Yt=null,ui=new Map,ci=new Map,Bt=[],f0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Th(e,t){switch(e){case"focusin":case"focusout":Xt=null;break;case"dragenter":case"dragleave":Qt=null;break;case"mouseover":case"mouseout":Yt=null;break;case"pointerover":case"pointerout":ui.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ci.delete(t.pointerId)}}function xr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Fi(t),t!==null&&Uu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function p0(e,t,n,r,i){switch(t){case"focusin":return Xt=xr(Xt,e,t,n,r,i),!0;case"dragenter":return Qt=xr(Qt,e,t,n,r,i),!0;case"mouseover":return Yt=xr(Yt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return ui.set(s,xr(ui.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ci.set(s,xr(ci.get(s)||null,e,t,n,r,i)),!0}return!1}function mp(e){var t=wn(e.target);if(t!==null){var n=jn(t);if(n!==null){if(t=n.tag,t===13){if(t=ip(n),t!==null){e.blockedOn=t,gp(e.priority,function(){fp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ps(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ca(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);_a=r,n.target.dispatchEvent(r),_a=null}else return t=Fi(n),t!==null&&Uu(t),e.blockedOn=n,!1;t.shift()}return!0}function kh(e,t,n){Ps(e)&&n.delete(t)}function g0(){ka=!1,Xt!==null&&Ps(Xt)&&(Xt=null),Qt!==null&&Ps(Qt)&&(Qt=null),Yt!==null&&Ps(Yt)&&(Yt=null),ui.forEach(kh),ci.forEach(kh)}function Mr(e,t){e.blockedOn===t&&(e.blockedOn=null,ka||(ka=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,g0)))}function hi(e){function t(i){return Mr(i,e)}if(0<us.length){Mr(us[0],e);for(var n=1;n<us.length;n++){var r=us[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Xt!==null&&Mr(Xt,e),Qt!==null&&Mr(Qt,e),Yt!==null&&Mr(Yt,e),ui.forEach(t),ci.forEach(t),n=0;n<Bt.length;n++)r=Bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Bt.length&&(n=Bt[0],n.blockedOn===null);)mp(n),n.blockedOn===null&&Bt.shift()}var lr=$t.ReactCurrentBatchConfig,Ks=!0;function m0(e,t,n,r){var i=j,s=lr.transition;lr.transition=null;try{j=1,Fu(e,t,n,r)}finally{j=i,lr.transition=s}}function v0(e,t,n,r){var i=j,s=lr.transition;lr.transition=null;try{j=4,Fu(e,t,n,r)}finally{j=i,lr.transition=s}}function Fu(e,t,n,r){if(Ks){var i=Ca(e,t,n,r);if(i===null)Nl(e,t,r,Gs,n),Th(e,r);else if(p0(i,e,t,n,r))r.stopPropagation();else if(Th(e,r),t&4&&-1<f0.indexOf(e)){for(;i!==null;){var s=Fi(i);if(s!==null&&dp(s),s=Ca(e,t,n,r),s===null&&Nl(e,t,r,Gs,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Nl(e,t,r,null,n)}}var Gs=null;function Ca(e,t,n,r){if(Gs=null,e=xu(r),e=wn(e),e!==null)if(t=jn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ip(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gs=e,null}function vp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(i0()){case Mu:return 1;case ap:return 4;case Ws:case s0:return 16;case up:return 536870912;default:return 16}default:return 16}}var Gt=null,ju=null,As=null;function yp(){if(As)return As;var e,t=ju,n=t.length,r,i="value"in Gt?Gt.value:Gt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return As=i.slice(e,1<r?1-r:void 0)}function Rs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function cs(){return!0}function Ch(){return!1}function Be(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?cs:Ch,this.isPropagationStopped=Ch,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cs)},persist:function(){},isPersistent:cs}),t}var Tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zu=Be(Tr),Ui=X({},Tr,{view:0,detail:0}),y0=Be(Ui),El,Il,$r,No=X({},Ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$r&&($r&&e.type==="mousemove"?(El=e.screenX-$r.screenX,Il=e.screenY-$r.screenY):Il=El=0,$r=e),El)},movementY:function(e){return"movementY"in e?e.movementY:Il}}),Ph=Be(No),w0=X({},No,{dataTransfer:0}),_0=Be(w0),E0=X({},Ui,{relatedTarget:0}),Sl=Be(E0),I0=X({},Tr,{animationName:0,elapsedTime:0,pseudoElement:0}),S0=Be(I0),T0=X({},Tr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),k0=Be(T0),C0=X({},Tr,{data:0}),Ah=Be(C0),P0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},A0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function N0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=R0[e])?!!t[e]:!1}function Bu(){return N0}var O0=X({},Ui,{key:function(e){if(e.key){var t=P0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?A0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bu,charCode:function(e){return e.type==="keypress"?Rs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),L0=Be(O0),D0=X({},No,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rh=Be(D0),x0=X({},Ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bu}),M0=Be(x0),$0=X({},Tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),U0=Be($0),F0=X({},No,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),j0=Be(F0),z0=[9,13,27,32],Vu=Rt&&"CompositionEvent"in window,Qr=null;Rt&&"documentMode"in document&&(Qr=document.documentMode);var B0=Rt&&"TextEvent"in window&&!Qr,wp=Rt&&(!Vu||Qr&&8<Qr&&11>=Qr),Nh=String.fromCharCode(32),Oh=!1;function _p(e,t){switch(e){case"keyup":return z0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ep(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kn=!1;function V0(e,t){switch(e){case"compositionend":return Ep(t);case"keypress":return t.which!==32?null:(Oh=!0,Nh);case"textInput":return e=t.data,e===Nh&&Oh?null:e;default:return null}}function H0(e,t){if(Kn)return e==="compositionend"||!Vu&&_p(e,t)?(e=yp(),As=ju=Gt=null,Kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wp&&t.locale!=="ko"?null:t.data;default:return null}}var W0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!W0[e.type]:t==="textarea"}function Ip(e,t,n,r){Zf(r),t=qs(t,"onChange"),0<t.length&&(n=new zu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yr=null,di=null;function b0(e){Dp(e,0)}function Oo(e){var t=Xn(e);if(Kf(t))return e}function K0(e,t){if(e==="change")return t}var Sp=!1;if(Rt){var Tl;if(Rt){var kl="oninput"in document;if(!kl){var Dh=document.createElement("div");Dh.setAttribute("oninput","return;"),kl=typeof Dh.oninput=="function"}Tl=kl}else Tl=!1;Sp=Tl&&(!document.documentMode||9<document.documentMode)}function xh(){Yr&&(Yr.detachEvent("onpropertychange",Tp),di=Yr=null)}function Tp(e){if(e.propertyName==="value"&&Oo(di)){var t=[];Ip(t,di,e,xu(e)),rp(b0,t)}}function G0(e,t,n){e==="focusin"?(xh(),Yr=t,di=n,Yr.attachEvent("onpropertychange",Tp)):e==="focusout"&&xh()}function q0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oo(di)}function X0(e,t){if(e==="click")return Oo(t)}function Q0(e,t){if(e==="input"||e==="change")return Oo(t)}function Y0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var st=typeof Object.is=="function"?Object.is:Y0;function fi(e,t){if(st(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!aa.call(t,i)||!st(e[i],t[i]))return!1}return!0}function Mh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $h(e,t){var n=Mh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mh(n)}}function kp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cp(){for(var e=window,t=Bs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bs(e.document)}return t}function Hu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function J0(e){var t=Cp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&kp(n.ownerDocument.documentElement,n)){if(r!==null&&Hu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=$h(n,s);var o=$h(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Z0=Rt&&"documentMode"in document&&11>=document.documentMode,Gn=null,Pa=null,Jr=null,Aa=!1;function Uh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Aa||Gn==null||Gn!==Bs(r)||(r=Gn,"selectionStart"in r&&Hu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jr&&fi(Jr,r)||(Jr=r,r=qs(Pa,"onSelect"),0<r.length&&(t=new zu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gn)))}function hs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qn={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionend:hs("Transition","TransitionEnd")},Cl={},Pp={};Rt&&(Pp=document.createElement("div").style,"AnimationEvent"in window||(delete qn.animationend.animation,delete qn.animationiteration.animation,delete qn.animationstart.animation),"TransitionEvent"in window||delete qn.transitionend.transition);function Lo(e){if(Cl[e])return Cl[e];if(!qn[e])return e;var t=qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pp)return Cl[e]=t[n];return e}var Ap=Lo("animationend"),Rp=Lo("animationiteration"),Np=Lo("animationstart"),Op=Lo("transitionend"),Lp=new Map,Fh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(e,t){Lp.set(e,t),Fn(t,[e])}for(var Pl=0;Pl<Fh.length;Pl++){var Al=Fh[Pl],e1=Al.toLowerCase(),t1=Al[0].toUpperCase()+Al.slice(1);un(e1,"on"+t1)}un(Ap,"onAnimationEnd");un(Rp,"onAnimationIteration");un(Np,"onAnimationStart");un("dblclick","onDoubleClick");un("focusin","onFocus");un("focusout","onBlur");un(Op,"onTransitionEnd");pr("onMouseEnter",["mouseout","mouseover"]);pr("onMouseLeave",["mouseout","mouseover"]);pr("onPointerEnter",["pointerout","pointerover"]);pr("onPointerLeave",["pointerout","pointerover"]);Fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),n1=new Set("cancel close invalid load scroll toggle".split(" ").concat(br));function jh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,e0(r,t,void 0,e),e.currentTarget=null}function Dp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;jh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;jh(i,l,u),s=a}}}if(Hs)throw e=Sa,Hs=!1,Sa=null,e}function H(e,t){var n=t[Da];n===void 0&&(n=t[Da]=new Set);var r=e+"__bubble";n.has(r)||(xp(t,e,2,!1),n.add(r))}function Rl(e,t,n){var r=0;t&&(r|=4),xp(n,e,r,t)}var ds="_reactListening"+Math.random().toString(36).slice(2);function pi(e){if(!e[ds]){e[ds]=!0,Bf.forEach(function(n){n!=="selectionchange"&&(n1.has(n)||Rl(n,!1,e),Rl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ds]||(t[ds]=!0,Rl("selectionchange",!1,t))}}function xp(e,t,n,r){switch(vp(t)){case 1:var i=m0;break;case 4:i=v0;break;default:i=Fu}n=i.bind(null,t,n,e),i=void 0,!Ia||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Nl(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=wn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}rp(function(){var u=s,h=xu(n),p=[];e:{var g=Lp.get(e);if(g!==void 0){var m=zu,w=e;switch(e){case"keypress":if(Rs(n)===0)break e;case"keydown":case"keyup":m=L0;break;case"focusin":w="focus",m=Sl;break;case"focusout":w="blur",m=Sl;break;case"beforeblur":case"afterblur":m=Sl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=_0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=M0;break;case Ap:case Rp:case Np:m=S0;break;case Op:m=U0;break;case"scroll":m=y0;break;case"wheel":m=j0;break;case"copy":case"cut":case"paste":m=k0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Rh}var _=(t&4)!==0,$=!_&&e==="scroll",d=_?g!==null?g+"Capture":null:g;_=[];for(var c=u,f;c!==null;){f=c;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,d!==null&&(v=ai(c,d),v!=null&&_.push(gi(c,v,f)))),$)break;c=c.return}0<_.length&&(g=new m(g,w,null,n,h),p.push({event:g,listeners:_}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",g&&n!==_a&&(w=n.relatedTarget||n.fromElement)&&(wn(w)||w[Nt]))break e;if((m||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,m?(w=n.relatedTarget||n.toElement,m=u,w=w?wn(w):null,w!==null&&($=jn(w),w!==$||w.tag!==5&&w.tag!==6)&&(w=null)):(m=null,w=u),m!==w)){if(_=Ph,v="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(_=Rh,v="onPointerLeave",d="onPointerEnter",c="pointer"),$=m==null?g:Xn(m),f=w==null?g:Xn(w),g=new _(v,c+"leave",m,n,h),g.target=$,g.relatedTarget=f,v=null,wn(h)===u&&(_=new _(d,c+"enter",w,n,h),_.target=f,_.relatedTarget=$,v=_),$=v,m&&w)t:{for(_=m,d=w,c=0,f=_;f;f=Vn(f))c++;for(f=0,v=d;v;v=Vn(v))f++;for(;0<c-f;)_=Vn(_),c--;for(;0<f-c;)d=Vn(d),f--;for(;c--;){if(_===d||d!==null&&_===d.alternate)break t;_=Vn(_),d=Vn(d)}_=null}else _=null;m!==null&&zh(p,g,m,_,!1),w!==null&&$!==null&&zh(p,$,w,_,!0)}}e:{if(g=u?Xn(u):window,m=g.nodeName&&g.nodeName.toLowerCase(),m==="select"||m==="input"&&g.type==="file")var I=K0;else if(Lh(g))if(Sp)I=Q0;else{I=q0;var k=G0}else(m=g.nodeName)&&m.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(I=X0);if(I&&(I=I(e,u))){Ip(p,I,n,h);break e}k&&k(e,g,u),e==="focusout"&&(k=g._wrapperState)&&k.controlled&&g.type==="number"&&ga(g,"number",g.value)}switch(k=u?Xn(u):window,e){case"focusin":(Lh(k)||k.contentEditable==="true")&&(Gn=k,Pa=u,Jr=null);break;case"focusout":Jr=Pa=Gn=null;break;case"mousedown":Aa=!0;break;case"contextmenu":case"mouseup":case"dragend":Aa=!1,Uh(p,n,h);break;case"selectionchange":if(Z0)break;case"keydown":case"keyup":Uh(p,n,h)}var C;if(Vu)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Kn?_p(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(wp&&n.locale!=="ko"&&(Kn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Kn&&(C=yp()):(Gt=h,ju="value"in Gt?Gt.value:Gt.textContent,Kn=!0)),k=qs(u,P),0<k.length&&(P=new Ah(P,e,null,n,h),p.push({event:P,listeners:k}),C?P.data=C:(C=Ep(n),C!==null&&(P.data=C)))),(C=B0?V0(e,n):H0(e,n))&&(u=qs(u,"onBeforeInput"),0<u.length&&(h=new Ah("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=C))}Dp(p,t)})}function gi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ai(e,n),s!=null&&r.unshift(gi(e,s,i)),s=ai(e,t),s!=null&&r.push(gi(e,s,i))),e=e.return}return r}function Vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zh(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=ai(n,s),a!=null&&o.unshift(gi(n,a,l))):i||(a=ai(n,s),a!=null&&o.push(gi(n,a,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var r1=/\r\n?/g,i1=/\u0000|\uFFFD/g;function Bh(e){return(typeof e=="string"?e:""+e).replace(r1,`
`).replace(i1,"")}function fs(e,t,n){if(t=Bh(t),Bh(e)!==t&&n)throw Error(y(425))}function Xs(){}var Ra=null,Na=null;function Oa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var La=typeof setTimeout=="function"?setTimeout:void 0,s1=typeof clearTimeout=="function"?clearTimeout:void 0,Vh=typeof Promise=="function"?Promise:void 0,o1=typeof queueMicrotask=="function"?queueMicrotask:typeof Vh<"u"?function(e){return Vh.resolve(null).then(e).catch(l1)}:La;function l1(e){setTimeout(function(){throw e})}function Ol(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),hi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);hi(t)}function Jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var kr=Math.random().toString(36).slice(2),ct="__reactFiber$"+kr,mi="__reactProps$"+kr,Nt="__reactContainer$"+kr,Da="__reactEvents$"+kr,a1="__reactListeners$"+kr,u1="__reactHandles$"+kr;function wn(e){var t=e[ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Nt]||n[ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hh(e);e!==null;){if(n=e[ct])return n;e=Hh(e)}return t}e=n,n=e.parentNode}return null}function Fi(e){return e=e[ct]||e[Nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function Do(e){return e[mi]||null}var xa=[],Qn=-1;function cn(e){return{current:e}}function b(e){0>Qn||(e.current=xa[Qn],xa[Qn]=null,Qn--)}function B(e,t){Qn++,xa[Qn]=e.current,e.current=t}var an={},Ie=cn(an),Oe=cn(!1),Rn=an;function gr(e,t){var n=e.type.contextTypes;if(!n)return an;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Le(e){return e=e.childContextTypes,e!=null}function Qs(){b(Oe),b(Ie)}function Wh(e,t,n){if(Ie.current!==an)throw Error(y(168));B(Ie,t),B(Oe,n)}function Mp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(y(108,Gy(e)||"Unknown",i));return X({},n,r)}function Ys(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||an,Rn=Ie.current,B(Ie,e),B(Oe,Oe.current),!0}function bh(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=Mp(e,t,Rn),r.__reactInternalMemoizedMergedChildContext=e,b(Oe),b(Ie),B(Ie,e)):b(Oe),B(Oe,n)}var Et=null,xo=!1,Ll=!1;function $p(e){Et===null?Et=[e]:Et.push(e)}function c1(e){xo=!0,$p(e)}function hn(){if(!Ll&&Et!==null){Ll=!0;var e=0,t=j;try{var n=Et;for(j=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Et=null,xo=!1}catch(i){throw Et!==null&&(Et=Et.slice(e+1)),lp(Mu,hn),i}finally{j=t,Ll=!1}}return null}var Yn=[],Jn=0,Js=null,Zs=0,Ve=[],He=0,Nn=null,It=1,St="";function mn(e,t){Yn[Jn++]=Zs,Yn[Jn++]=Js,Js=e,Zs=t}function Up(e,t,n){Ve[He++]=It,Ve[He++]=St,Ve[He++]=Nn,Nn=e;var r=It;e=St;var i=32-rt(r)-1;r&=~(1<<i),n+=1;var s=32-rt(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,It=1<<32-rt(t)+i|n<<i|r,St=s+e}else It=1<<s|n<<i|r,St=e}function Wu(e){e.return!==null&&(mn(e,1),Up(e,1,0))}function bu(e){for(;e===Js;)Js=Yn[--Jn],Yn[Jn]=null,Zs=Yn[--Jn],Yn[Jn]=null;for(;e===Nn;)Nn=Ve[--He],Ve[He]=null,St=Ve[--He],Ve[He]=null,It=Ve[--He],Ve[He]=null}var Fe=null,$e=null,K=!1,nt=null;function Fp(e,t){var n=be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Kh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Fe=e,$e=Jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Fe=e,$e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Nn!==null?{id:It,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Fe=e,$e=null,!0):!1;default:return!1}}function Ma(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $a(e){if(K){var t=$e;if(t){var n=t;if(!Kh(e,t)){if(Ma(e))throw Error(y(418));t=Jt(n.nextSibling);var r=Fe;t&&Kh(e,t)?Fp(r,n):(e.flags=e.flags&-4097|2,K=!1,Fe=e)}}else{if(Ma(e))throw Error(y(418));e.flags=e.flags&-4097|2,K=!1,Fe=e}}}function Gh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Fe=e}function ps(e){if(e!==Fe)return!1;if(!K)return Gh(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Oa(e.type,e.memoizedProps)),t&&(t=$e)){if(Ma(e))throw jp(),Error(y(418));for(;t;)Fp(e,t),t=Jt(t.nextSibling)}if(Gh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$e=Jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$e=null}}else $e=Fe?Jt(e.stateNode.nextSibling):null;return!0}function jp(){for(var e=$e;e;)e=Jt(e.nextSibling)}function mr(){$e=Fe=null,K=!1}function Ku(e){nt===null?nt=[e]:nt.push(e)}var h1=$t.ReactCurrentBatchConfig;function et(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var eo=cn(null),to=null,Zn=null,Gu=null;function qu(){Gu=Zn=to=null}function Xu(e){var t=eo.current;b(eo),e._currentValue=t}function Ua(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ar(e,t){to=e,Gu=Zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ne=!0),e.firstContext=null)}function Xe(e){var t=e._currentValue;if(Gu!==e)if(e={context:e,memoizedValue:t,next:null},Zn===null){if(to===null)throw Error(y(308));Zn=e,to.dependencies={lanes:0,firstContext:e}}else Zn=Zn.next=e;return t}var _n=null;function Qu(e){_n===null?_n=[e]:_n.push(e)}function zp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Qu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ot(e,r)}function Ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var zt=!1;function Yu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Zt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ot(e,n)}return i=r.interleaved,i===null?(t.next=t,Qu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ot(e,n)}function Ns(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$u(e,n)}}function qh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function no(e,t,n,r){var i=e.updateQueue;zt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=a))}if(s!==null){var p=i.baseState;o=0,h=u=a=null,l=s;do{var g=l.lane,m=l.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,_=l;switch(g=t,m=n,_.tag){case 1:if(w=_.payload,typeof w=="function"){p=w.call(m,p,g);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=_.payload,g=typeof w=="function"?w.call(m,p,g):w,g==null)break e;p=X({},p,g);break e;case 2:zt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else m={eventTime:m,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=m,a=p):h=h.next=m,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(h===null&&(a=p),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Ln|=o,e.lanes=o,e.memoizedState=p}}function Xh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(y(191,i));i.call(r)}}}var Vp=new zf.Component().refs;function Fa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mo={isMounted:function(e){return(e=e._reactInternals)?jn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ce(),i=tn(e),s=Pt(r,i);s.payload=t,n!=null&&(s.callback=n),t=Zt(e,s,i),t!==null&&(it(t,e,i,r),Ns(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ce(),i=tn(e),s=Pt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Zt(e,s,i),t!==null&&(it(t,e,i,r),Ns(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ce(),r=tn(e),i=Pt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Zt(e,i,r),t!==null&&(it(t,e,r,n),Ns(t,e,r))}};function Qh(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!fi(n,r)||!fi(i,s):!0}function Hp(e,t,n){var r=!1,i=an,s=t.contextType;return typeof s=="object"&&s!==null?s=Xe(s):(i=Le(t)?Rn:Ie.current,r=t.contextTypes,s=(r=r!=null)?gr(e,i):an),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Mo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Yh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Mo.enqueueReplaceState(t,t.state,null)}function ja(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Vp,Yu(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Xe(s):(s=Le(t)?Rn:Ie.current,i.context=gr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Fa(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Mo.enqueueReplaceState(i,i.state,null),no(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ur(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=i.refs;l===Vp&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function gs(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Jh(e){var t=e._init;return t(e._payload)}function Wp(e){function t(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=nn(d,c),d.index=0,d.sibling=null,d}function s(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,c,f,v){return c===null||c.tag!==6?(c=jl(f,d.mode,v),c.return=d,c):(c=i(c,f),c.return=d,c)}function a(d,c,f,v){var I=f.type;return I===bn?h(d,c,f.props.children,v,f.key):c!==null&&(c.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===jt&&Jh(I)===c.type)?(v=i(c,f.props),v.ref=Ur(d,c,f),v.return=d,v):(v=$s(f.type,f.key,f.props,null,d.mode,v),v.ref=Ur(d,c,f),v.return=d,v)}function u(d,c,f,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=zl(f,d.mode,v),c.return=d,c):(c=i(c,f.children||[]),c.return=d,c)}function h(d,c,f,v,I){return c===null||c.tag!==7?(c=Cn(f,d.mode,v,I),c.return=d,c):(c=i(c,f),c.return=d,c)}function p(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=jl(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case is:return f=$s(c.type,c.key,c.props,null,d.mode,f),f.ref=Ur(d,null,c),f.return=d,f;case Wn:return c=zl(c,d.mode,f),c.return=d,c;case jt:var v=c._init;return p(d,v(c._payload),f)}if(Hr(c)||Lr(c))return c=Cn(c,d.mode,f,null),c.return=d,c;gs(d,c)}return null}function g(d,c,f,v){var I=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return I!==null?null:l(d,c,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case is:return f.key===I?a(d,c,f,v):null;case Wn:return f.key===I?u(d,c,f,v):null;case jt:return I=f._init,g(d,c,I(f._payload),v)}if(Hr(f)||Lr(f))return I!==null?null:h(d,c,f,v,null);gs(d,f)}return null}function m(d,c,f,v,I){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(f)||null,l(c,d,""+v,I);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case is:return d=d.get(v.key===null?f:v.key)||null,a(c,d,v,I);case Wn:return d=d.get(v.key===null?f:v.key)||null,u(c,d,v,I);case jt:var k=v._init;return m(d,c,f,k(v._payload),I)}if(Hr(v)||Lr(v))return d=d.get(f)||null,h(c,d,v,I,null);gs(c,v)}return null}function w(d,c,f,v){for(var I=null,k=null,C=c,P=c=0,V=null;C!==null&&P<f.length;P++){C.index>P?(V=C,C=null):V=C.sibling;var L=g(d,C,f[P],v);if(L===null){C===null&&(C=V);break}e&&C&&L.alternate===null&&t(d,C),c=s(L,c,P),k===null?I=L:k.sibling=L,k=L,C=V}if(P===f.length)return n(d,C),K&&mn(d,P),I;if(C===null){for(;P<f.length;P++)C=p(d,f[P],v),C!==null&&(c=s(C,c,P),k===null?I=C:k.sibling=C,k=C);return K&&mn(d,P),I}for(C=r(d,C);P<f.length;P++)V=m(C,d,P,f[P],v),V!==null&&(e&&V.alternate!==null&&C.delete(V.key===null?P:V.key),c=s(V,c,P),k===null?I=V:k.sibling=V,k=V);return e&&C.forEach(function(Je){return t(d,Je)}),K&&mn(d,P),I}function _(d,c,f,v){var I=Lr(f);if(typeof I!="function")throw Error(y(150));if(f=I.call(f),f==null)throw Error(y(151));for(var k=I=null,C=c,P=c=0,V=null,L=f.next();C!==null&&!L.done;P++,L=f.next()){C.index>P?(V=C,C=null):V=C.sibling;var Je=g(d,C,L.value,v);if(Je===null){C===null&&(C=V);break}e&&C&&Je.alternate===null&&t(d,C),c=s(Je,c,P),k===null?I=Je:k.sibling=Je,k=Je,C=V}if(L.done)return n(d,C),K&&mn(d,P),I;if(C===null){for(;!L.done;P++,L=f.next())L=p(d,L.value,v),L!==null&&(c=s(L,c,P),k===null?I=L:k.sibling=L,k=L);return K&&mn(d,P),I}for(C=r(d,C);!L.done;P++,L=f.next())L=m(C,d,P,L.value,v),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?P:L.key),c=s(L,c,P),k===null?I=L:k.sibling=L,k=L);return e&&C.forEach(function(Nr){return t(d,Nr)}),K&&mn(d,P),I}function $(d,c,f,v){if(typeof f=="object"&&f!==null&&f.type===bn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case is:e:{for(var I=f.key,k=c;k!==null;){if(k.key===I){if(I=f.type,I===bn){if(k.tag===7){n(d,k.sibling),c=i(k,f.props.children),c.return=d,d=c;break e}}else if(k.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===jt&&Jh(I)===k.type){n(d,k.sibling),c=i(k,f.props),c.ref=Ur(d,k,f),c.return=d,d=c;break e}n(d,k);break}else t(d,k);k=k.sibling}f.type===bn?(c=Cn(f.props.children,d.mode,v,f.key),c.return=d,d=c):(v=$s(f.type,f.key,f.props,null,d.mode,v),v.ref=Ur(d,c,f),v.return=d,d=v)}return o(d);case Wn:e:{for(k=f.key;c!==null;){if(c.key===k)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(d,c.sibling),c=i(c,f.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=zl(f,d.mode,v),c.return=d,d=c}return o(d);case jt:return k=f._init,$(d,c,k(f._payload),v)}if(Hr(f))return w(d,c,f,v);if(Lr(f))return _(d,c,f,v);gs(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(d,c.sibling),c=i(c,f),c.return=d,d=c):(n(d,c),c=jl(f,d.mode,v),c.return=d,d=c),o(d)):n(d,c)}return $}var vr=Wp(!0),bp=Wp(!1),ji={},gt=cn(ji),vi=cn(ji),yi=cn(ji);function En(e){if(e===ji)throw Error(y(174));return e}function Ju(e,t){switch(B(yi,t),B(vi,e),B(gt,ji),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:va(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=va(t,e)}b(gt),B(gt,t)}function yr(){b(gt),b(vi),b(yi)}function Kp(e){En(yi.current);var t=En(gt.current),n=va(t,e.type);t!==n&&(B(vi,e),B(gt,n))}function Zu(e){vi.current===e&&(b(gt),b(vi))}var G=cn(0);function ro(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Dl=[];function ec(){for(var e=0;e<Dl.length;e++)Dl[e]._workInProgressVersionPrimary=null;Dl.length=0}var Os=$t.ReactCurrentDispatcher,xl=$t.ReactCurrentBatchConfig,On=0,q=null,te=null,ie=null,io=!1,Zr=!1,wi=0,d1=0;function pe(){throw Error(y(321))}function tc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!st(e[n],t[n]))return!1;return!0}function nc(e,t,n,r,i,s){if(On=s,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Os.current=e===null||e.memoizedState===null?m1:v1,e=n(r,i),Zr){s=0;do{if(Zr=!1,wi=0,25<=s)throw Error(y(301));s+=1,ie=te=null,t.updateQueue=null,Os.current=y1,e=n(r,i)}while(Zr)}if(Os.current=so,t=te!==null&&te.next!==null,On=0,ie=te=q=null,io=!1,t)throw Error(y(300));return e}function rc(){var e=wi!==0;return wi=0,e}function ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?q.memoizedState=ie=e:ie=ie.next=e,ie}function Qe(){if(te===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=ie===null?q.memoizedState:ie.next;if(t!==null)ie=t,te=e;else{if(e===null)throw Error(y(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},ie===null?q.memoizedState=ie=e:ie=ie.next=e}return ie}function _i(e,t){return typeof t=="function"?t(e):t}function Ml(e){var t=Qe(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=te,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var h=u.lane;if((On&h)===h)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=p,o=r):a=a.next=p,q.lanes|=h,Ln|=h}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,st(r,t.memoizedState)||(Ne=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,q.lanes|=s,Ln|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function $l(e){var t=Qe(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);st(s,t.memoizedState)||(Ne=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Gp(){}function qp(e,t){var n=q,r=Qe(),i=t(),s=!st(r.memoizedState,i);if(s&&(r.memoizedState=i,Ne=!0),r=r.queue,ic(Yp.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,Ei(9,Qp.bind(null,n,r,i,t),void 0,null),se===null)throw Error(y(349));On&30||Xp(n,t,i)}return i}function Xp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Qp(e,t,n,r){t.value=n,t.getSnapshot=r,Jp(t)&&Zp(e)}function Yp(e,t,n){return n(function(){Jp(t)&&Zp(e)})}function Jp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!st(e,n)}catch{return!0}}function Zp(e){var t=Ot(e,1);t!==null&&it(t,e,1,-1)}function Zh(e){var t=ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_i,lastRenderedState:e},t.queue=e,e=e.dispatch=g1.bind(null,q,e),[t.memoizedState,e]}function Ei(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function eg(){return Qe().memoizedState}function Ls(e,t,n,r){var i=ut();q.flags|=e,i.memoizedState=Ei(1|t,n,void 0,r===void 0?null:r)}function $o(e,t,n,r){var i=Qe();r=r===void 0?null:r;var s=void 0;if(te!==null){var o=te.memoizedState;if(s=o.destroy,r!==null&&tc(r,o.deps)){i.memoizedState=Ei(t,n,s,r);return}}q.flags|=e,i.memoizedState=Ei(1|t,n,s,r)}function ed(e,t){return Ls(8390656,8,e,t)}function ic(e,t){return $o(2048,8,e,t)}function tg(e,t){return $o(4,2,e,t)}function ng(e,t){return $o(4,4,e,t)}function rg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ig(e,t,n){return n=n!=null?n.concat([e]):null,$o(4,4,rg.bind(null,t,e),n)}function sc(){}function sg(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&tc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function og(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&tc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function lg(e,t,n){return On&21?(st(n,t)||(n=cp(),q.lanes|=n,Ln|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ne=!0),e.memoizedState=n)}function f1(e,t){var n=j;j=n!==0&&4>n?n:4,e(!0);var r=xl.transition;xl.transition={};try{e(!1),t()}finally{j=n,xl.transition=r}}function ag(){return Qe().memoizedState}function p1(e,t,n){var r=tn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ug(e))cg(t,n);else if(n=zp(e,t,n,r),n!==null){var i=Ce();it(n,e,r,i),hg(n,t,r)}}function g1(e,t,n){var r=tn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ug(e))cg(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,st(l,o)){var a=t.interleaved;a===null?(i.next=i,Qu(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=zp(e,t,i,r),n!==null&&(i=Ce(),it(n,e,r,i),hg(n,t,r))}}function ug(e){var t=e.alternate;return e===q||t!==null&&t===q}function cg(e,t){Zr=io=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$u(e,n)}}var so={readContext:Xe,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},m1={readContext:Xe,useCallback:function(e,t){return ut().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:ed,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ls(4194308,4,rg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ls(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ls(4,2,e,t)},useMemo:function(e,t){var n=ut();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ut();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=p1.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=ut();return e={current:e},t.memoizedState=e},useState:Zh,useDebugValue:sc,useDeferredValue:function(e){return ut().memoizedState=e},useTransition:function(){var e=Zh(!1),t=e[0];return e=f1.bind(null,e[1]),ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,i=ut();if(K){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),se===null)throw Error(y(349));On&30||Xp(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,ed(Yp.bind(null,r,s,e),[e]),r.flags|=2048,Ei(9,Qp.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=ut(),t=se.identifierPrefix;if(K){var n=St,r=It;n=(r&~(1<<32-rt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=wi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=d1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},v1={readContext:Xe,useCallback:sg,useContext:Xe,useEffect:ic,useImperativeHandle:ig,useInsertionEffect:tg,useLayoutEffect:ng,useMemo:og,useReducer:Ml,useRef:eg,useState:function(){return Ml(_i)},useDebugValue:sc,useDeferredValue:function(e){var t=Qe();return lg(t,te.memoizedState,e)},useTransition:function(){var e=Ml(_i)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Gp,useSyncExternalStore:qp,useId:ag,unstable_isNewReconciler:!1},y1={readContext:Xe,useCallback:sg,useContext:Xe,useEffect:ic,useImperativeHandle:ig,useInsertionEffect:tg,useLayoutEffect:ng,useMemo:og,useReducer:$l,useRef:eg,useState:function(){return $l(_i)},useDebugValue:sc,useDeferredValue:function(e){var t=Qe();return te===null?t.memoizedState=e:lg(t,te.memoizedState,e)},useTransition:function(){var e=$l(_i)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Gp,useSyncExternalStore:qp,useId:ag,unstable_isNewReconciler:!1};function wr(e,t){try{var n="",r=t;do n+=Ky(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Ul(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function za(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var w1=typeof WeakMap=="function"?WeakMap:Map;function dg(e,t,n){n=Pt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){lo||(lo=!0,Qa=r),za(e,t)},n}function fg(e,t,n){n=Pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){za(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){za(e,t),typeof r!="function"&&(en===null?en=new Set([this]):en.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function td(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new w1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=D1.bind(null,e,t,n),t.then(e,e))}function nd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function rd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Pt(-1,1),t.tag=2,Zt(n,t,1))),n.lanes|=1),e)}var _1=$t.ReactCurrentOwner,Ne=!1;function Te(e,t,n,r){t.child=e===null?bp(t,null,n,r):vr(t,e.child,n,r)}function id(e,t,n,r,i){n=n.render;var s=t.ref;return ar(t,i),r=nc(e,t,n,r,s,i),n=rc(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Lt(e,t,i)):(K&&n&&Wu(t),t.flags|=1,Te(e,t,r,i),t.child)}function sd(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!fc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,pg(e,t,s,r,i)):(e=$s(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:fi,n(o,r)&&e.ref===t.ref)return Lt(e,t,i)}return t.flags|=1,e=nn(s,r),e.ref=t.ref,e.return=t,t.child=e}function pg(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(fi(s,r)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Ne=!0);else return t.lanes=e.lanes,Lt(e,t,i)}return Ba(e,t,n,r,i)}function gg(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(tr,Me),Me|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(tr,Me),Me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,B(tr,Me),Me|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,B(tr,Me),Me|=r;return Te(e,t,i,n),t.child}function mg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ba(e,t,n,r,i){var s=Le(n)?Rn:Ie.current;return s=gr(t,s),ar(t,i),n=nc(e,t,n,r,s,i),r=rc(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Lt(e,t,i)):(K&&r&&Wu(t),t.flags|=1,Te(e,t,n,i),t.child)}function od(e,t,n,r,i){if(Le(n)){var s=!0;Ys(t)}else s=!1;if(ar(t,i),t.stateNode===null)Ds(e,t),Hp(t,n,r),ja(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Xe(u):(u=Le(n)?Rn:Ie.current,u=gr(t,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Yh(t,o,r,u),zt=!1;var g=t.memoizedState;o.state=g,no(t,r,o,i),a=t.memoizedState,l!==r||g!==a||Oe.current||zt?(typeof h=="function"&&(Fa(t,n,h,r),a=t.memoizedState),(l=zt||Qh(t,n,l,r,g,a,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Bp(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:et(t.type,l),o.props=u,p=t.pendingProps,g=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Xe(a):(a=Le(n)?Rn:Ie.current,a=gr(t,a));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==a)&&Yh(t,o,r,a),zt=!1,g=t.memoizedState,o.state=g,no(t,r,o,i);var w=t.memoizedState;l!==p||g!==w||Oe.current||zt?(typeof m=="function"&&(Fa(t,n,m,r),w=t.memoizedState),(u=zt||Qh(t,n,u,r,g,w,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Va(e,t,n,r,s,i)}function Va(e,t,n,r,i,s){mg(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&bh(t,n,!1),Lt(e,t,s);r=t.stateNode,_1.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=vr(t,e.child,null,s),t.child=vr(t,null,l,s)):Te(e,t,l,s),t.memoizedState=r.state,i&&bh(t,n,!0),t.child}function vg(e){var t=e.stateNode;t.pendingContext?Wh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wh(e,t.context,!1),Ju(e,t.containerInfo)}function ld(e,t,n,r,i){return mr(),Ku(i),t.flags|=256,Te(e,t,n,r),t.child}var Ha={dehydrated:null,treeContext:null,retryLane:0};function Wa(e){return{baseLanes:e,cachePool:null,transitions:null}}function yg(e,t,n){var r=t.pendingProps,i=G.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(G,i&1),e===null)return $a(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=jo(o,r,0,null),e=Cn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Wa(n),t.memoizedState=Ha,e):oc(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return E1(e,t,o,r,l,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=nn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=nn(l,s):(s=Cn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Wa(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Ha,r}return s=e.child,e=s.sibling,r=nn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function oc(e,t){return t=jo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ms(e,t,n,r){return r!==null&&Ku(r),vr(t,e.child,null,n),e=oc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function E1(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Ul(Error(y(422))),ms(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=jo({mode:"visible",children:r.children},i,0,null),s=Cn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&vr(t,e.child,null,o),t.child.memoizedState=Wa(o),t.memoizedState=Ha,s);if(!(t.mode&1))return ms(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(y(419)),r=Ul(s,r,void 0),ms(e,t,o,r)}if(l=(o&e.childLanes)!==0,Ne||l){if(r=se,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ot(e,i),it(r,e,i,-1))}return dc(),r=Ul(Error(y(421))),ms(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=x1.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,$e=Jt(i.nextSibling),Fe=t,K=!0,nt=null,e!==null&&(Ve[He++]=It,Ve[He++]=St,Ve[He++]=Nn,It=e.id,St=e.overflow,Nn=t),t=oc(t,r.children),t.flags|=4096,t)}function ad(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ua(e.return,t,n)}function Fl(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function wg(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Te(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ad(e,n,t);else if(e.tag===19)ad(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(G,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ro(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Fl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ro(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Fl(t,!0,n,null,s);break;case"together":Fl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ds(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ln|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function I1(e,t,n){switch(t.tag){case 3:vg(t),mr();break;case 5:Kp(t);break;case 1:Le(t.type)&&Ys(t);break;case 4:Ju(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B(eo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?yg(e,t,n):(B(G,G.current&1),e=Lt(e,t,n),e!==null?e.sibling:null);B(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return wg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,gg(e,t,n)}return Lt(e,t,n)}var _g,ba,Eg,Ig;_g=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ba=function(){};Eg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,En(gt.current);var s=null;switch(n){case"input":i=fa(e,i),r=fa(e,r),s=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),s=[];break;case"textarea":i=ma(e,i),r=ma(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xs)}ya(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(oi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(oi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&H("scroll",e),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Ig=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function S1(e,t,n){var r=t.pendingProps;switch(bu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return Le(t.type)&&Qs(),ge(t),null;case 3:return r=t.stateNode,yr(),b(Oe),b(Ie),ec(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ps(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,nt!==null&&(Za(nt),nt=null))),ba(e,t),ge(t),null;case 5:Zu(t);var i=En(yi.current);if(n=t.type,e!==null&&t.stateNode!=null)Eg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return ge(t),null}if(e=En(gt.current),ps(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[ct]=t,r[mi]=s,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<br.length;i++)H(br[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":vh(r,s),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},H("invalid",r);break;case"textarea":wh(r,s),H("invalid",r)}ya(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&fs(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&fs(r.textContent,l,e),i=["children",""+l]):oi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"input":ss(r),yh(r,s,!0);break;case"textarea":ss(r),_h(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Xs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[ct]=t,e[mi]=r,_g(e,t,!1,!1),t.stateNode=e;e:{switch(o=wa(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<br.length;i++)H(br[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":vh(e,r),i=fa(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),H("invalid",e);break;case"textarea":wh(e,r),i=ma(e,r),H("invalid",e);break;default:i=r}ya(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Jf(e,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Qf(e,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&li(e,a):typeof a=="number"&&li(e,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&H("scroll",e):a!=null&&Nu(e,s,a,o))}switch(n){case"input":ss(e),yh(e,r,!1);break;case"textarea":ss(e),_h(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ln(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?ir(e,!!r.multiple,s,!1):r.defaultValue!=null&&ir(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Xs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ge(t),null;case 6:if(e&&t.stateNode!=null)Ig(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=En(yi.current),En(gt.current),ps(t)){if(r=t.stateNode,n=t.memoizedProps,r[ct]=t,(s=r.nodeValue!==n)&&(e=Fe,e!==null))switch(e.tag){case 3:fs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fs(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ct]=t,t.stateNode=r}return ge(t),null;case 13:if(b(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&$e!==null&&t.mode&1&&!(t.flags&128))jp(),mr(),t.flags|=98560,s=!1;else if(s=ps(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(y(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(y(317));s[ct]=t}else mr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ge(t),s=!1}else nt!==null&&(Za(nt),nt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?ne===0&&(ne=3):dc())),t.updateQueue!==null&&(t.flags|=4),ge(t),null);case 4:return yr(),ba(e,t),e===null&&pi(t.stateNode.containerInfo),ge(t),null;case 10:return Xu(t.type._context),ge(t),null;case 17:return Le(t.type)&&Qs(),ge(t),null;case 19:if(b(G),s=t.memoizedState,s===null)return ge(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Fr(s,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ro(e),o!==null){for(t.flags|=128,Fr(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(G,G.current&1|2),t.child}e=e.sibling}s.tail!==null&&J()>_r&&(t.flags|=128,r=!0,Fr(s,!1),t.lanes=4194304)}else{if(!r)if(e=ro(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!K)return ge(t),null}else 2*J()-s.renderingStartTime>_r&&n!==1073741824&&(t.flags|=128,r=!0,Fr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=J(),t.sibling=null,n=G.current,B(G,r?n&1|2:n&1),t):(ge(t),null);case 22:case 23:return hc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Me&1073741824&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function T1(e,t){switch(bu(t),t.tag){case 1:return Le(t.type)&&Qs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yr(),b(Oe),b(Ie),ec(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Zu(t),null;case 13:if(b(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));mr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return b(G),null;case 4:return yr(),null;case 10:return Xu(t.type._context),null;case 22:case 23:return hc(),null;case 24:return null;default:return null}}var vs=!1,ve=!1,k1=typeof WeakSet=="function"?WeakSet:Set,S=null;function er(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function Ka(e,t,n){try{n()}catch(r){Q(e,t,r)}}var ud=!1;function C1(e,t){if(Ra=Ks,e=Cp(),Hu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,h=0,p=e,g=null;t:for(;;){for(var m;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(a=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(m=p.firstChild)!==null;)g=p,p=m;for(;;){if(p===e)break t;if(g===n&&++u===i&&(l=o),g===s&&++h===r&&(a=o),(m=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=m}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Na={focusedElem:e,selectionRange:n},Ks=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var _=w.memoizedProps,$=w.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?_:et(t.type,_),$);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){Q(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return w=ud,ud=!1,w}function ei(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ka(t,n,s)}i=i.next}while(i!==r)}}function Uo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ga(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Sg(e){var t=e.alternate;t!==null&&(e.alternate=null,Sg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ct],delete t[mi],delete t[Da],delete t[a1],delete t[u1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Tg(e){return e.tag===5||e.tag===3||e.tag===4}function cd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xs));else if(r!==4&&(e=e.child,e!==null))for(qa(e,t,n),e=e.sibling;e!==null;)qa(e,t,n),e=e.sibling}function Xa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xa(e,t,n),e=e.sibling;e!==null;)Xa(e,t,n),e=e.sibling}var ue=null,tt=!1;function Ut(e,t,n){for(n=n.child;n!==null;)kg(e,t,n),n=n.sibling}function kg(e,t,n){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(Ro,n)}catch{}switch(n.tag){case 5:ve||er(n,t);case 6:var r=ue,i=tt;ue=null,Ut(e,t,n),ue=r,tt=i,ue!==null&&(tt?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(tt?(e=ue,n=n.stateNode,e.nodeType===8?Ol(e.parentNode,n):e.nodeType===1&&Ol(e,n),hi(e)):Ol(ue,n.stateNode));break;case 4:r=ue,i=tt,ue=n.stateNode.containerInfo,tt=!0,Ut(e,t,n),ue=r,tt=i;break;case 0:case 11:case 14:case 15:if(!ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ka(n,t,o),i=i.next}while(i!==r)}Ut(e,t,n);break;case 1:if(!ve&&(er(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Q(n,t,l)}Ut(e,t,n);break;case 21:Ut(e,t,n);break;case 22:n.mode&1?(ve=(r=ve)||n.memoizedState!==null,Ut(e,t,n),ve=r):Ut(e,t,n);break;default:Ut(e,t,n)}}function hd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new k1),t.forEach(function(r){var i=M1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ue=l.stateNode,tt=!1;break e;case 3:ue=l.stateNode.containerInfo,tt=!0;break e;case 4:ue=l.stateNode.containerInfo,tt=!0;break e}l=l.return}if(ue===null)throw Error(y(160));kg(s,o,i),ue=null,tt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){Q(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cg(t,e),t=t.sibling}function Cg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ze(t,e),at(e),r&4){try{ei(3,e,e.return),Uo(3,e)}catch(_){Q(e,e.return,_)}try{ei(5,e,e.return)}catch(_){Q(e,e.return,_)}}break;case 1:Ze(t,e),at(e),r&512&&n!==null&&er(n,n.return);break;case 5:if(Ze(t,e),at(e),r&512&&n!==null&&er(n,n.return),e.flags&32){var i=e.stateNode;try{li(i,"")}catch(_){Q(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Gf(i,s),wa(l,o);var u=wa(l,s);for(o=0;o<a.length;o+=2){var h=a[o],p=a[o+1];h==="style"?Jf(i,p):h==="dangerouslySetInnerHTML"?Qf(i,p):h==="children"?li(i,p):Nu(i,h,p,u)}switch(l){case"input":pa(i,s);break;case"textarea":qf(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ir(i,!!s.multiple,m,!1):g!==!!s.multiple&&(s.defaultValue!=null?ir(i,!!s.multiple,s.defaultValue,!0):ir(i,!!s.multiple,s.multiple?[]:"",!1))}i[mi]=s}catch(_){Q(e,e.return,_)}}break;case 6:if(Ze(t,e),at(e),r&4){if(e.stateNode===null)throw Error(y(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(_){Q(e,e.return,_)}}break;case 3:if(Ze(t,e),at(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{hi(t.containerInfo)}catch(_){Q(e,e.return,_)}break;case 4:Ze(t,e),at(e);break;case 13:Ze(t,e),at(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(uc=J())),r&4&&hd(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ve=(u=ve)||h,Ze(t,e),ve=u):Ze(t,e),at(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(S=e,h=e.child;h!==null;){for(p=S=h;S!==null;){switch(g=S,m=g.child,g.tag){case 0:case 11:case 14:case 15:ei(4,g,g.return);break;case 1:er(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(_){Q(r,n,_)}}break;case 5:er(g,g.return);break;case 22:if(g.memoizedState!==null){fd(p);continue}}m!==null?(m.return=g,S=m):fd(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,a=p.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Yf("display",o))}catch(_){Q(e,e.return,_)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(_){Q(e,e.return,_)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ze(t,e),at(e),r&4&&hd(e);break;case 21:break;default:Ze(t,e),at(e)}}function at(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Tg(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(li(i,""),r.flags&=-33);var s=cd(e);Xa(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=cd(e);qa(e,l,o);break;default:throw Error(y(161))}}catch(a){Q(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function P1(e,t,n){S=e,Pg(e)}function Pg(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var i=S,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||vs;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||ve;l=vs;var u=ve;if(vs=o,(ve=a)&&!u)for(S=i;S!==null;)o=S,a=o.child,o.tag===22&&o.memoizedState!==null?pd(i):a!==null?(a.return=o,S=a):pd(i);for(;s!==null;)S=s,Pg(s),s=s.sibling;S=i,vs=l,ve=u}dd(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,S=s):dd(e)}}function dd(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ve||Uo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ve)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:et(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Xh(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xh(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&hi(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}ve||t.flags&512&&Ga(t)}catch(g){Q(t,t.return,g)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function fd(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function pd(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Uo(4,t)}catch(a){Q(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){Q(t,i,a)}}var s=t.return;try{Ga(t)}catch(a){Q(t,s,a)}break;case 5:var o=t.return;try{Ga(t)}catch(a){Q(t,o,a)}}}catch(a){Q(t,t.return,a)}if(t===e){S=null;break}var l=t.sibling;if(l!==null){l.return=t.return,S=l;break}S=t.return}}var A1=Math.ceil,oo=$t.ReactCurrentDispatcher,lc=$t.ReactCurrentOwner,Ke=$t.ReactCurrentBatchConfig,M=0,se=null,ee=null,he=0,Me=0,tr=cn(0),ne=0,Ii=null,Ln=0,Fo=0,ac=0,ti=null,Re=null,uc=0,_r=1/0,_t=null,lo=!1,Qa=null,en=null,ys=!1,qt=null,ao=0,ni=0,Ya=null,xs=-1,Ms=0;function Ce(){return M&6?J():xs!==-1?xs:xs=J()}function tn(e){return e.mode&1?M&2&&he!==0?he&-he:h1.transition!==null?(Ms===0&&(Ms=cp()),Ms):(e=j,e!==0||(e=window.event,e=e===void 0?16:vp(e.type)),e):1}function it(e,t,n,r){if(50<ni)throw ni=0,Ya=null,Error(y(185));$i(e,n,r),(!(M&2)||e!==se)&&(e===se&&(!(M&2)&&(Fo|=n),ne===4&&Vt(e,he)),De(e,r),n===1&&M===0&&!(t.mode&1)&&(_r=J()+500,xo&&hn()))}function De(e,t){var n=e.callbackNode;h0(e,t);var r=bs(e,e===se?he:0);if(r===0)n!==null&&Sh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Sh(n),t===1)e.tag===0?c1(gd.bind(null,e)):$p(gd.bind(null,e)),o1(function(){!(M&6)&&hn()}),n=null;else{switch(hp(r)){case 1:n=Mu;break;case 4:n=ap;break;case 16:n=Ws;break;case 536870912:n=up;break;default:n=Ws}n=Mg(n,Ag.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ag(e,t){if(xs=-1,Ms=0,M&6)throw Error(y(327));var n=e.callbackNode;if(ur()&&e.callbackNode!==n)return null;var r=bs(e,e===se?he:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=uo(e,r);else{t=r;var i=M;M|=2;var s=Ng();(se!==e||he!==t)&&(_t=null,_r=J()+500,kn(e,t));do try{O1();break}catch(l){Rg(e,l)}while(1);qu(),oo.current=s,M=i,ee!==null?t=0:(se=null,he=0,t=ne)}if(t!==0){if(t===2&&(i=Ta(e),i!==0&&(r=i,t=Ja(e,i))),t===1)throw n=Ii,kn(e,0),Vt(e,r),De(e,J()),n;if(t===6)Vt(e,r);else{if(i=e.current.alternate,!(r&30)&&!R1(i)&&(t=uo(e,r),t===2&&(s=Ta(e),s!==0&&(r=s,t=Ja(e,s))),t===1))throw n=Ii,kn(e,0),Vt(e,r),De(e,J()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:vn(e,Re,_t);break;case 3:if(Vt(e,r),(r&130023424)===r&&(t=uc+500-J(),10<t)){if(bs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=La(vn.bind(null,e,Re,_t),t);break}vn(e,Re,_t);break;case 4:if(Vt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-rt(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*A1(r/1960))-r,10<r){e.timeoutHandle=La(vn.bind(null,e,Re,_t),r);break}vn(e,Re,_t);break;case 5:vn(e,Re,_t);break;default:throw Error(y(329))}}}return De(e,J()),e.callbackNode===n?Ag.bind(null,e):null}function Ja(e,t){var n=ti;return e.current.memoizedState.isDehydrated&&(kn(e,t).flags|=256),e=uo(e,t),e!==2&&(t=Re,Re=n,t!==null&&Za(t)),e}function Za(e){Re===null?Re=e:Re.push.apply(Re,e)}function R1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!st(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vt(e,t){for(t&=~ac,t&=~Fo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rt(t),r=1<<n;e[n]=-1,t&=~r}}function gd(e){if(M&6)throw Error(y(327));ur();var t=bs(e,0);if(!(t&1))return De(e,J()),null;var n=uo(e,t);if(e.tag!==0&&n===2){var r=Ta(e);r!==0&&(t=r,n=Ja(e,r))}if(n===1)throw n=Ii,kn(e,0),Vt(e,t),De(e,J()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vn(e,Re,_t),De(e,J()),null}function cc(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(_r=J()+500,xo&&hn())}}function Dn(e){qt!==null&&qt.tag===0&&!(M&6)&&ur();var t=M;M|=1;var n=Ke.transition,r=j;try{if(Ke.transition=null,j=1,e)return e()}finally{j=r,Ke.transition=n,M=t,!(M&6)&&hn()}}function hc(){Me=tr.current,b(tr)}function kn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,s1(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(bu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qs();break;case 3:yr(),b(Oe),b(Ie),ec();break;case 5:Zu(r);break;case 4:yr();break;case 13:b(G);break;case 19:b(G);break;case 10:Xu(r.type._context);break;case 22:case 23:hc()}n=n.return}if(se=e,ee=e=nn(e.current,null),he=Me=t,ne=0,Ii=null,ac=Fo=Ln=0,Re=ti=null,_n!==null){for(t=0;t<_n.length;t++)if(n=_n[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}_n=null}return e}function Rg(e,t){do{var n=ee;try{if(qu(),Os.current=so,io){for(var r=q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}io=!1}if(On=0,ie=te=q=null,Zr=!1,wi=0,lc.current=null,n===null||n.return===null){ne=1,Ii=t,ee=null;break}e:{var s=e,o=n.return,l=n,a=t;if(t=he,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,h=l,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=nd(o);if(m!==null){m.flags&=-257,rd(m,o,l,s,t),m.mode&1&&td(s,u,t),t=m,a=u;var w=t.updateQueue;if(w===null){var _=new Set;_.add(a),t.updateQueue=_}else w.add(a);break e}else{if(!(t&1)){td(s,u,t),dc();break e}a=Error(y(426))}}else if(K&&l.mode&1){var $=nd(o);if($!==null){!($.flags&65536)&&($.flags|=256),rd($,o,l,s,t),Ku(wr(a,l));break e}}s=a=wr(a,l),ne!==4&&(ne=2),ti===null?ti=[s]:ti.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var d=dg(s,a,t);qh(s,d);break e;case 1:l=a;var c=s.type,f=s.stateNode;if(!(s.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(en===null||!en.has(f)))){s.flags|=65536,t&=-t,s.lanes|=t;var v=fg(s,l,t);qh(s,v);break e}}s=s.return}while(s!==null)}Lg(n)}catch(I){t=I,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(1)}function Ng(){var e=oo.current;return oo.current=so,e===null?so:e}function dc(){(ne===0||ne===3||ne===2)&&(ne=4),se===null||!(Ln&268435455)&&!(Fo&268435455)||Vt(se,he)}function uo(e,t){var n=M;M|=2;var r=Ng();(se!==e||he!==t)&&(_t=null,kn(e,t));do try{N1();break}catch(i){Rg(e,i)}while(1);if(qu(),M=n,oo.current=r,ee!==null)throw Error(y(261));return se=null,he=0,ne}function N1(){for(;ee!==null;)Og(ee)}function O1(){for(;ee!==null&&!n0();)Og(ee)}function Og(e){var t=xg(e.alternate,e,Me);e.memoizedProps=e.pendingProps,t===null?Lg(e):ee=t,lc.current=null}function Lg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=T1(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,ee=null;return}}else if(n=S1(n,t,Me),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);ne===0&&(ne=5)}function vn(e,t,n){var r=j,i=Ke.transition;try{Ke.transition=null,j=1,L1(e,t,n,r)}finally{Ke.transition=i,j=r}return null}function L1(e,t,n,r){do ur();while(qt!==null);if(M&6)throw Error(y(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(d0(e,s),e===se&&(ee=se=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ys||(ys=!0,Mg(Ws,function(){return ur(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ke.transition,Ke.transition=null;var o=j;j=1;var l=M;M|=4,lc.current=null,C1(e,n),Cg(n,e),J0(Na),Ks=!!Ra,Na=Ra=null,e.current=n,P1(n),r0(),M=l,j=o,Ke.transition=s}else e.current=n;if(ys&&(ys=!1,qt=e,ao=i),s=e.pendingLanes,s===0&&(en=null),o0(n.stateNode),De(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(lo)throw lo=!1,e=Qa,Qa=null,e;return ao&1&&e.tag!==0&&ur(),s=e.pendingLanes,s&1?e===Ya?ni++:(ni=0,Ya=e):ni=0,hn(),null}function ur(){if(qt!==null){var e=hp(ao),t=Ke.transition,n=j;try{if(Ke.transition=null,j=16>e?16:e,qt===null)var r=!1;else{if(e=qt,qt=null,ao=0,M&6)throw Error(y(331));var i=M;for(M|=4,S=e.current;S!==null;){var s=S,o=s.child;if(S.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(S=u;S!==null;){var h=S;switch(h.tag){case 0:case 11:case 15:ei(8,h,s)}var p=h.child;if(p!==null)p.return=h,S=p;else for(;S!==null;){h=S;var g=h.sibling,m=h.return;if(Sg(h),h===u){S=null;break}if(g!==null){g.return=m,S=g;break}S=m}}}var w=s.alternate;if(w!==null){var _=w.child;if(_!==null){w.child=null;do{var $=_.sibling;_.sibling=null,_=$}while(_!==null)}}S=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,S=o;else e:for(;S!==null;){if(s=S,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ei(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,S=d;break e}S=s.return}}var c=e.current;for(S=c;S!==null;){o=S;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,S=f;else e:for(o=c;S!==null;){if(l=S,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Uo(9,l)}}catch(I){Q(l,l.return,I)}if(l===o){S=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,S=v;break e}S=l.return}}if(M=i,hn(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(Ro,e)}catch{}r=!0}return r}finally{j=n,Ke.transition=t}}return!1}function md(e,t,n){t=wr(n,t),t=dg(e,t,1),e=Zt(e,t,1),t=Ce(),e!==null&&($i(e,1,t),De(e,t))}function Q(e,t,n){if(e.tag===3)md(e,e,n);else for(;t!==null;){if(t.tag===3){md(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(en===null||!en.has(r))){e=wr(n,e),e=fg(t,e,1),t=Zt(t,e,1),e=Ce(),t!==null&&($i(t,1,e),De(t,e));break}}t=t.return}}function D1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ce(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(he&n)===n&&(ne===4||ne===3&&(he&130023424)===he&&500>J()-uc?kn(e,0):ac|=n),De(e,t)}function Dg(e,t){t===0&&(e.mode&1?(t=as,as<<=1,!(as&130023424)&&(as=4194304)):t=1);var n=Ce();e=Ot(e,t),e!==null&&($i(e,t,n),De(e,n))}function x1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Dg(e,n)}function M1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),Dg(e,n)}var xg;xg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Oe.current)Ne=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ne=!1,I1(e,t,n);Ne=!!(e.flags&131072)}else Ne=!1,K&&t.flags&1048576&&Up(t,Zs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ds(e,t),e=t.pendingProps;var i=gr(t,Ie.current);ar(t,n),i=nc(null,t,r,e,i,n);var s=rc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Le(r)?(s=!0,Ys(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Yu(t),i.updater=Mo,t.stateNode=i,i._reactInternals=t,ja(t,r,e,n),t=Va(null,t,r,!0,s,n)):(t.tag=0,K&&s&&Wu(t),Te(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ds(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=U1(r),e=et(r,e),i){case 0:t=Ba(null,t,r,e,n);break e;case 1:t=od(null,t,r,e,n);break e;case 11:t=id(null,t,r,e,n);break e;case 14:t=sd(null,t,r,et(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:et(r,i),Ba(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:et(r,i),od(e,t,r,i,n);case 3:e:{if(vg(t),e===null)throw Error(y(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Bp(e,t),no(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=wr(Error(y(423)),t),t=ld(e,t,r,n,i);break e}else if(r!==i){i=wr(Error(y(424)),t),t=ld(e,t,r,n,i);break e}else for($e=Jt(t.stateNode.containerInfo.firstChild),Fe=t,K=!0,nt=null,n=bp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mr(),r===i){t=Lt(e,t,n);break e}Te(e,t,r,n)}t=t.child}return t;case 5:return Kp(t),e===null&&$a(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Oa(r,i)?o=null:s!==null&&Oa(r,s)&&(t.flags|=32),mg(e,t),Te(e,t,o,n),t.child;case 6:return e===null&&$a(t),null;case 13:return yg(e,t,n);case 4:return Ju(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vr(t,null,r,n):Te(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:et(r,i),id(e,t,r,i,n);case 7:return Te(e,t,t.pendingProps,n),t.child;case 8:return Te(e,t,t.pendingProps.children,n),t.child;case 12:return Te(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,B(eo,r._currentValue),r._currentValue=o,s!==null)if(st(s.value,o)){if(s.children===i.children&&!Oe.current){t=Lt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Pt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?a.next=a:(a.next=h.next,h.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ua(s.return,n,t),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(y(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ua(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Te(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ar(t,n),i=Xe(i),r=r(i),t.flags|=1,Te(e,t,r,n),t.child;case 14:return r=t.type,i=et(r,t.pendingProps),i=et(r.type,i),sd(e,t,r,i,n);case 15:return pg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:et(r,i),Ds(e,t),t.tag=1,Le(r)?(e=!0,Ys(t)):e=!1,ar(t,n),Hp(t,r,i),ja(t,r,i,n),Va(null,t,r,!0,e,n);case 19:return wg(e,t,n);case 22:return gg(e,t,n)}throw Error(y(156,t.tag))};function Mg(e,t){return lp(e,t)}function $1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(e,t,n,r){return new $1(e,t,n,r)}function fc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function U1(e){if(typeof e=="function")return fc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Lu)return 11;if(e===Du)return 14}return 2}function nn(e,t){var n=e.alternate;return n===null?(n=be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $s(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")fc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case bn:return Cn(n.children,i,s,t);case Ou:o=8,i|=8;break;case ua:return e=be(12,n,t,i|2),e.elementType=ua,e.lanes=s,e;case ca:return e=be(13,n,t,i),e.elementType=ca,e.lanes=s,e;case ha:return e=be(19,n,t,i),e.elementType=ha,e.lanes=s,e;case Wf:return jo(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vf:o=10;break e;case Hf:o=9;break e;case Lu:o=11;break e;case Du:o=14;break e;case jt:o=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=be(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Cn(e,t,n,r){return e=be(7,e,r,t),e.lanes=n,e}function jo(e,t,n,r){return e=be(22,e,r,t),e.elementType=Wf,e.lanes=n,e.stateNode={isHidden:!1},e}function jl(e,t,n){return e=be(6,e,null,t),e.lanes=n,e}function zl(e,t,n){return t=be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function F1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pc(e,t,n,r,i,s,o,l,a){return e=new F1(e,t,n,l,a),t===1?(t=1,s===!0&&(t|=8)):t=0,s=be(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yu(s),e}function j1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $g(e){if(!e)return an;e=e._reactInternals;e:{if(jn(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Le(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(Le(n))return Mp(e,n,t)}return t}function Ug(e,t,n,r,i,s,o,l,a){return e=pc(n,r,!0,e,i,s,o,l,a),e.context=$g(null),n=e.current,r=Ce(),i=tn(n),s=Pt(r,i),s.callback=t??null,Zt(n,s,i),e.current.lanes=i,$i(e,i,r),De(e,r),e}function zo(e,t,n,r){var i=t.current,s=Ce(),o=tn(i);return n=$g(n),t.context===null?t.context=n:t.pendingContext=n,t=Pt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Zt(i,t,o),e!==null&&(it(e,i,o,s),Ns(e,i,o)),o}function co(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function gc(e,t){vd(e,t),(e=e.alternate)&&vd(e,t)}function z1(){return null}var Fg=typeof reportError=="function"?reportError:function(e){console.error(e)};function mc(e){this._internalRoot=e}Bo.prototype.render=mc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));zo(e,t,null,null)};Bo.prototype.unmount=mc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dn(function(){zo(null,e,null,null)}),t[Nt]=null}};function Bo(e){this._internalRoot=e}Bo.prototype.unstable_scheduleHydration=function(e){if(e){var t=pp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Bt.length&&t!==0&&t<Bt[n].priority;n++);Bt.splice(n,0,e),n===0&&mp(e)}};function vc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function yd(){}function B1(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=co(o);s.call(u)}}var o=Ug(t,r,e,0,null,!1,!1,"",yd);return e._reactRootContainer=o,e[Nt]=o.current,pi(e.nodeType===8?e.parentNode:e),Dn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=co(a);l.call(u)}}var a=pc(e,0,!1,null,null,!1,!1,"",yd);return e._reactRootContainer=a,e[Nt]=a.current,pi(e.nodeType===8?e.parentNode:e),Dn(function(){zo(t,a,n,r)}),a}function Ho(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=co(o);l.call(a)}}zo(t,o,e,i)}else o=B1(n,t,e,i,r);return co(o)}dp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Wr(t.pendingLanes);n!==0&&($u(t,n|1),De(t,J()),!(M&6)&&(_r=J()+500,hn()))}break;case 13:Dn(function(){var r=Ot(e,1);if(r!==null){var i=Ce();it(r,e,1,i)}}),gc(e,1)}};Uu=function(e){if(e.tag===13){var t=Ot(e,134217728);if(t!==null){var n=Ce();it(t,e,134217728,n)}gc(e,134217728)}};fp=function(e){if(e.tag===13){var t=tn(e),n=Ot(e,t);if(n!==null){var r=Ce();it(n,e,t,r)}gc(e,t)}};pp=function(){return j};gp=function(e,t){var n=j;try{return j=e,t()}finally{j=n}};Ea=function(e,t,n){switch(t){case"input":if(pa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Do(r);if(!i)throw Error(y(90));Kf(r),pa(r,i)}}}break;case"textarea":qf(e,n);break;case"select":t=n.value,t!=null&&ir(e,!!n.multiple,t,!1)}};tp=cc;np=Dn;var V1={usingClientEntryPoint:!1,Events:[Fi,Xn,Do,Zf,ep,cc]},jr={findFiberByHostInstance:wn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},H1={bundleType:jr.bundleType,version:jr.version,rendererPackageName:jr.rendererPackageName,rendererConfig:jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$t.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=sp(e),e===null?null:e.stateNode},findFiberByHostInstance:jr.findFiberByHostInstance||z1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ws=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ws.isDisabled&&ws.supportsFiber)try{Ro=ws.inject(H1),pt=ws}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V1;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vc(t))throw Error(y(200));return j1(e,t,null,n)};ze.createRoot=function(e,t){if(!vc(e))throw Error(y(299));var n=!1,r="",i=Fg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=pc(e,1,!1,null,null,n,!1,r,i),e[Nt]=t.current,pi(e.nodeType===8?e.parentNode:e),new mc(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=sp(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return Dn(e)};ze.hydrate=function(e,t,n){if(!Vo(t))throw Error(y(200));return Ho(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!vc(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Fg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Ug(t,null,e,1,n??null,i,!1,s,o),e[Nt]=t.current,pi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Bo(t)};ze.render=function(e,t,n){if(!Vo(t))throw Error(y(200));return Ho(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!Vo(e))throw Error(y(40));return e._reactRootContainer?(Dn(function(){Ho(null,null,e,!1,function(){e._reactRootContainer=null,e[Nt]=null})}),!0):!1};ze.unstable_batchedUpdates=cc;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Vo(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return Ho(e,t,n,!1,r)};ze.version="18.2.0-next-9e3b772b8-20220608";function jg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jg)}catch(e){console.error(e)}}jg(),Uf.exports=ze;var W1=Uf.exports,wd=W1;la.createRoot=wd.createRoot,la.hydrateRoot=wd.hydrateRoot;const b1=""+new URL("react-35ef61ed.svg",import.meta.url).href,K1=""+new URL("../vite.svg",import.meta.url).href;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function eu(){return eu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},eu.apply(this,arguments)}var _d;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_d||(_d={}));function At(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ed(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function zg(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var Id;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Id||(Id={}));function G1(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function q1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?zg(e):e;return{pathname:n?n.startsWith("/")?n:X1(n,t):t,search:Q1(r),hash:Y1(i)}}function X1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Bl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Bg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Vg(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=zg(e):(i=eu({},e),At(!i.pathname||!i.pathname.includes("?"),Bl("?","pathname","search",i)),At(!i.pathname||!i.pathname.includes("#"),Bl("#","pathname","hash",i)),At(!i.search||!i.search.includes("#"),Bl("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let p=t.length-1;if(o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}l=p>=0?t[p]:"/"}let a=q1(i,l),u=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||h)&&(a.pathname+="/"),a}const Hg=e=>e.join("/").replace(/\/\/+/g,"/"),Q1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Y1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Wg=["post","put","patch","delete"];new Set(Wg);const J1=["get",...Wg];new Set(J1);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tu(){return tu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},tu.apply(this,arguments)}const bg=F.createContext(null),Wo=F.createContext(null),Kg=F.createContext(null),bo=F.createContext({outlet:null,matches:[],isDataRoute:!1});function Z1(e,t){let{relative:n}=t===void 0?{}:t;yc()||At(!1);let{basename:r,navigator:i}=F.useContext(Wo),{hash:s,pathname:o,search:l}=qg(e,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:Hg([r,o])),i.createHref({pathname:a,search:l,hash:s})}function yc(){return F.useContext(Kg)!=null}function wc(){return yc()||At(!1),F.useContext(Kg).location}function Gg(e){F.useContext(Wo).static||F.useLayoutEffect(e)}function ew(){let{isDataRoute:e}=F.useContext(bo);return e?sw():tw()}function tw(){yc()||At(!1);let e=F.useContext(bg),{basename:t,navigator:n}=F.useContext(Wo),{matches:r}=F.useContext(bo),{pathname:i}=wc(),s=JSON.stringify(Bg(r).map(a=>a.pathnameBase)),o=F.useRef(!1);return Gg(()=>{o.current=!0}),F.useCallback(function(a,u){if(u===void 0&&(u={}),!o.current)return;if(typeof a=="number"){n.go(a);return}let h=Vg(a,JSON.parse(s),i,u.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Hg([t,h.pathname])),(u.replace?n.replace:n.push)(h,u.state,u)},[t,n,s,i,e])}function qg(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=F.useContext(bo),{pathname:i}=wc(),s=JSON.stringify(Bg(r).map(o=>o.pathnameBase));return F.useMemo(()=>Vg(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}var Xg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Xg||{}),Qg=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Qg||{});function nw(e){let t=F.useContext(bg);return t||At(!1),t}function rw(e){let t=F.useContext(bo);return t||At(!1),t}function iw(e){let t=rw(),n=t.matches[t.matches.length-1];return n.route.id||At(!1),n.route.id}function sw(){let{router:e}=nw(Xg.UseNavigateStable),t=iw(Qg.UseNavigateStable),n=F.useRef(!1);return Gg(()=>{n.current=!0}),F.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,tu({fromRouteId:t},s)))},[e,t])}new Promise(()=>{});/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nu(){return nu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nu.apply(this,arguments)}function ow(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function lw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function aw(e,t){return e.button===0&&(!t||t==="_self")&&!lw(e)}const uw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],cw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dw=F.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:h}=t,p=ow(t,uw),{basename:g}=F.useContext(Wo),m,w=!1;if(typeof u=="string"&&hw.test(u)&&(m=u,cw))try{let c=new URL(window.location.href),f=u.startsWith("//")?new URL(c.protocol+u):new URL(u),v=G1(f.pathname,g);f.origin===c.origin&&v!=null?u=v+f.search+f.hash:w=!0}catch{}let _=Z1(u,{relative:i}),$=fw(u,{replace:o,state:l,target:a,preventScrollReset:h,relative:i});function d(c){r&&r(c),c.defaultPrevented||$(c)}return F.createElement("a",nu({},p,{href:m||_,onClick:w||s?r:d,ref:n,target:a}))});var Sd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Sd||(Sd={}));var Td;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Td||(Td={}));function fw(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=t===void 0?{}:t,l=ew(),a=wc(),u=qg(e,{relative:o});return F.useCallback(h=>{if(aw(h,n)){h.preventDefault();let p=r!==void 0?r:Ed(a)===Ed(u);l(e,{replace:p,state:i,preventScrollReset:s,relative:o})}},[a,l,u,r,i,n,e,s,o])}/**
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
 */const Yg=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},pw=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],l=e[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(a&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Jg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,l=o?e[i+1]:0,a=i+2<e.length,u=a?e[i+2]:0,h=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|u>>6,m=u&63;a||(m=64,o||(g=64)),r.push(n[h],n[p],n[g],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Yg(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):pw(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],l=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const p=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||l==null||u==null||p==null)throw new gw;const g=s<<2|l>>4;if(r.push(g),u!==64){const m=l<<4&240|u>>2;if(r.push(m),p!==64){const w=u<<6&192|p;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class gw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mw=function(e){const t=Yg(e);return Jg.encodeByteArray(t,!0)},ho=function(e){return mw(e).replace(/\./g,"")},Zg=function(e){try{return Jg.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function vw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yw=()=>vw().__FIREBASE_DEFAULTS__,ww=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},_w=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Zg(e[1]);return t&&JSON.parse(t)},_c=()=>{try{return yw()||ww()||_w()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},em=e=>{var t,n;return(n=(t=_c())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Ew=e=>{const t=em(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},tm=()=>{var e;return(e=_c())===null||e===void 0?void 0:e.config},nm=e=>{var t;return(t=_c())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Iw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Sw(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),l="";return[ho(JSON.stringify(n)),ho(JSON.stringify(o)),l].join(".")}/**
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
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function rm(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function kw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cw(){const e=Se();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function im(){try{return typeof indexedDB=="object"}catch{return!1}}function sm(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function Pw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Aw="FirebaseError";class lt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Aw,Object.setPrototypeOf(this,lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zn.prototype.create)}}class zn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Rw(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new lt(i,l,r)}}function Rw(e,t){return e.replace(Nw,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Nw=/\{\$([^}]+)}/g;function Ow(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function fo(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(kd(s)&&kd(o)){if(!fo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function kd(e){return e!==null&&typeof e=="object"}/**
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
 */function zi(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Lw(e,t){const n=new Dw(e,t);return n.subscribe.bind(n)}class Dw{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xw(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Vl),i.error===void 0&&(i.error=Vl),i.complete===void 0&&(i.complete=Vl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xw(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Vl(){}/**
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
 */const Mw=1e3,$w=2,Uw=4*60*60*1e3,Fw=.5;function Cd(e,t=Mw,n=$w){const r=t*Math.pow(n,e),i=Math.round(Fw*r*(Math.random()-.5)*2);return Math.min(Uw,r+i)}/**
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
 */function Bn(e){return e&&e._delegate?e._delegate:e}class ot{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const yn="[DEFAULT]";/**
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
 */class jw{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Iw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Bw(t))try{this.getOrInitializeService({instanceIdentifier:yn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=yn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=yn){return this.instances.has(t)}getOptions(t=yn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zw(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=yn){return this.component?this.component.multipleInstances?t:yn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zw(e){return e===yn?void 0:e}function Bw(e){return e.instantiationMode==="EAGER"}/**
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
 */class Vw{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new jw(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var U;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(U||(U={}));const Hw={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},Ww=U.INFO,bw={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},Kw=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=bw[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ko{constructor(t){this.name=t,this._logLevel=Ww,this._logHandler=Kw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Hw[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const Gw=(e,t)=>t.some(n=>e instanceof n);let Pd,Ad;function qw(){return Pd||(Pd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xw(){return Ad||(Ad=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const om=new WeakMap,ru=new WeakMap,lm=new WeakMap,Hl=new WeakMap,Ec=new WeakMap;function Qw(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(rn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&om.set(n,e)}).catch(()=>{}),Ec.set(t,e),t}function Yw(e){if(ru.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});ru.set(e,t)}let iu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ru.get(e);if(t==="objectStoreNames")return e.objectStoreNames||lm.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Jw(e){iu=e(iu)}function Zw(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Wl(this),t,...n);return lm.set(r,t.sort?t.sort():[t]),rn(r)}:Xw().includes(e)?function(...t){return e.apply(Wl(this),t),rn(om.get(this))}:function(...t){return rn(e.apply(Wl(this),t))}}function e_(e){return typeof e=="function"?Zw(e):(e instanceof IDBTransaction&&Yw(e),Gw(e,qw())?new Proxy(e,iu):e)}function rn(e){if(e instanceof IDBRequest)return Qw(e);if(Hl.has(e))return Hl.get(e);const t=e_(e);return t!==e&&(Hl.set(e,t),Ec.set(t,e)),t}const Wl=e=>Ec.get(e);function t_(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),l=rn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(rn(o.result),a.oldVersion,a.newVersion,rn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const n_=["get","getKey","getAll","getAllKeys","count"],r_=["put","add","delete","clear"],bl=new Map;function Rd(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(bl.get(t))return bl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=r_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||n_.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return bl.set(t,s),s}Jw(e=>({...e,get:(t,n,r)=>Rd(t,n)||e.get(t,n,r),has:(t,n)=>!!Rd(t,n)||e.has(t,n)}));/**
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
 */class i_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(s_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function s_(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const su="@firebase/app",Nd="0.9.18";/**
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
 */const xn=new Ko("@firebase/app"),o_="@firebase/app-compat",l_="@firebase/analytics-compat",a_="@firebase/analytics",u_="@firebase/app-check-compat",c_="@firebase/app-check",h_="@firebase/auth",d_="@firebase/auth-compat",f_="@firebase/database",p_="@firebase/database-compat",g_="@firebase/functions",m_="@firebase/functions-compat",v_="@firebase/installations",y_="@firebase/installations-compat",w_="@firebase/messaging",__="@firebase/messaging-compat",E_="@firebase/performance",I_="@firebase/performance-compat",S_="@firebase/remote-config",T_="@firebase/remote-config-compat",k_="@firebase/storage",C_="@firebase/storage-compat",P_="@firebase/firestore",A_="@firebase/firestore-compat",R_="firebase",N_="10.3.1";/**
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
 */const ou="[DEFAULT]",O_={[su]:"fire-core",[o_]:"fire-core-compat",[a_]:"fire-analytics",[l_]:"fire-analytics-compat",[c_]:"fire-app-check",[u_]:"fire-app-check-compat",[h_]:"fire-auth",[d_]:"fire-auth-compat",[f_]:"fire-rtdb",[p_]:"fire-rtdb-compat",[g_]:"fire-fn",[m_]:"fire-fn-compat",[v_]:"fire-iid",[y_]:"fire-iid-compat",[w_]:"fire-fcm",[__]:"fire-fcm-compat",[E_]:"fire-perf",[I_]:"fire-perf-compat",[S_]:"fire-rc",[T_]:"fire-rc-compat",[k_]:"fire-gcs",[C_]:"fire-gcs-compat",[P_]:"fire-fst",[A_]:"fire-fst-compat","fire-js":"fire-js",[R_]:"fire-js-all"};/**
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
 */const po=new Map,lu=new Map;function L_(e,t){try{e.container.addComponent(t)}catch(n){xn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function yt(e){const t=e.name;if(lu.has(t))return xn.debug(`There were multiple attempts to register component ${t}.`),!1;lu.set(t,e);for(const n of po.values())L_(n,e);return!0}function Bi(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const D_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},sn=new zn("app","Firebase",D_);/**
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
 */class x_{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw sn.create("app-deleted",{appName:this._name})}}/**
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
 */const Cr=N_;function am(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ou,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw sn.create("bad-app-name",{appName:String(i)});if(n||(n=tm()),!n)throw sn.create("no-options");const s=po.get(i);if(s){if(fo(n,s.options)&&fo(r,s.config))return s;throw sn.create("duplicate-app",{appName:i})}const o=new Vw(i);for(const a of lu.values())o.addComponent(a);const l=new x_(n,r,o);return po.set(i,l),l}function um(e=ou){const t=po.get(e);if(!t&&e===ou&&tm())return am();if(!t)throw sn.create("no-app",{appName:e});return t}function Ge(e,t,n){var r;let i=(r=O_[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${t}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),xn.warn(l.join(" "));return}yt(new ot(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const M_="firebase-heartbeat-database",$_=1,Si="firebase-heartbeat-store";let Kl=null;function cm(){return Kl||(Kl=t_(M_,$_,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Si)}}}).catch(e=>{throw sn.create("idb-open",{originalErrorMessage:e.message})})),Kl}async function U_(e){try{return await(await cm()).transaction(Si).objectStore(Si).get(hm(e))}catch(t){if(t instanceof lt)xn.warn(t.message);else{const n=sn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});xn.warn(n.message)}}}async function Od(e,t){try{const r=(await cm()).transaction(Si,"readwrite");await r.objectStore(Si).put(t,hm(e)),await r.done}catch(n){if(n instanceof lt)xn.warn(n.message);else{const r=sn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xn.warn(r.message)}}}function hm(e){return`${e.name}!${e.options.appId}`}/**
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
 */const F_=1024,j_=30*24*60*60*1e3;class z_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new V_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ld();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=j_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ld(),{heartbeatsToSend:n,unsentEntries:r}=B_(this._heartbeatsCache.heartbeats),i=ho(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ld(){return new Date().toISOString().substring(0,10)}function B_(e,t=F_){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Dd(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Dd(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class V_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return im()?sm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await U_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Od(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Od(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Dd(e){return ho(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function H_(e){yt(new ot("platform-logger",t=>new i_(t),"PRIVATE")),yt(new ot("heartbeat",t=>new z_(t),"PRIVATE")),Ge(su,Nd,e),Ge(su,Nd,"esm2017"),Ge("fire-js","")}H_("");var W_="firebase",b_="10.3.1";/**
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
 */Ge(W_,b_,"app");const K_=(e,t)=>t.some(n=>e instanceof n);let xd,Md;function G_(){return xd||(xd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function q_(){return Md||(Md=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dm=new WeakMap,au=new WeakMap,fm=new WeakMap,Gl=new WeakMap,Ic=new WeakMap;function X_(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(on(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&dm.set(n,e)}).catch(()=>{}),Ic.set(t,e),t}function Q_(e){if(au.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});au.set(e,t)}let uu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return au.get(e);if(t==="objectStoreNames")return e.objectStoreNames||fm.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return on(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Y_(e){uu=e(uu)}function J_(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ql(this),t,...n);return fm.set(r,t.sort?t.sort():[t]),on(r)}:q_().includes(e)?function(...t){return e.apply(ql(this),t),on(dm.get(this))}:function(...t){return on(e.apply(ql(this),t))}}function Z_(e){return typeof e=="function"?J_(e):(e instanceof IDBTransaction&&Q_(e),K_(e,G_())?new Proxy(e,uu):e)}function on(e){if(e instanceof IDBRequest)return X_(e);if(Gl.has(e))return Gl.get(e);const t=Z_(e);return t!==e&&(Gl.set(e,t),Ic.set(t,e)),t}const ql=e=>Ic.get(e);function eE(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),l=on(o);return r&&o.addEventListener("upgradeneeded",a=>{r(on(o.result),a.oldVersion,a.newVersion,on(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const tE=["get","getKey","getAll","getAllKeys","count"],nE=["put","add","delete","clear"],Xl=new Map;function $d(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Xl.get(t))return Xl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=nE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||tE.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Xl.set(t,s),s}Y_(e=>({...e,get:(t,n,r)=>$d(t,n)||e.get(t,n,r),has:(t,n)=>!!$d(t,n)||e.has(t,n)}));const pm="@firebase/installations",Sc="0.6.4";/**
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
 */const gm=1e4,mm=`w:${Sc}`,vm="FIS_v2",rE="https://firebaseinstallations.googleapis.com/v1",iE=60*60*1e3,sE="installations",oE="Installations";/**
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
 */const lE={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Mn=new zn(sE,oE,lE);function ym(e){return e instanceof lt&&e.code.includes("request-failed")}/**
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
 */function wm({projectId:e}){return`${rE}/projects/${e}/installations`}function _m(e){return{token:e.token,requestStatus:2,expiresIn:uE(e.expiresIn),creationTime:Date.now()}}async function Em(e,t){const r=(await t.json()).error;return Mn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Im({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function aE(e,{refreshToken:t}){const n=Im(e);return n.append("Authorization",cE(t)),n}async function Sm(e){const t=await e();return t.status>=500&&t.status<600?e():t}function uE(e){return Number(e.replace("s","000"))}function cE(e){return`${vm} ${e}`}/**
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
 */async function hE({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=wm(e),i=Im(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:vm,appId:e.appId,sdkVersion:mm},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await Sm(()=>fetch(r,l));if(a.ok){const u=await a.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:_m(u.authToken)}}else throw await Em("Create Installation",a)}/**
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
 */function Tm(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function dE(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const fE=/^[cdef][\w-]{21}$/,cu="";function pE(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=gE(e);return fE.test(n)?n:cu}catch{return cu}}function gE(e){return dE(e).substr(0,22)}/**
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
 */function Go(e){return`${e.appName}!${e.appId}`}/**
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
 */const km=new Map;function Cm(e,t){const n=Go(e);Pm(n,t),mE(n,t)}function Pm(e,t){const n=km.get(e);if(n)for(const r of n)r(t)}function mE(e,t){const n=vE();n&&n.postMessage({key:e,fid:t}),yE()}let In=null;function vE(){return!In&&"BroadcastChannel"in self&&(In=new BroadcastChannel("[Firebase] FID Change"),In.onmessage=e=>{Pm(e.data.key,e.data.fid)}),In}function yE(){km.size===0&&In&&(In.close(),In=null)}/**
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
 */const wE="firebase-installations-database",_E=1,$n="firebase-installations-store";let Ql=null;function Tc(){return Ql||(Ql=eE(wE,_E,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore($n)}}})),Ql}async function go(e,t){const n=Go(e),i=(await Tc()).transaction($n,"readwrite"),s=i.objectStore($n),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&Cm(e,t.fid),t}async function Am(e){const t=Go(e),r=(await Tc()).transaction($n,"readwrite");await r.objectStore($n).delete(t),await r.done}async function qo(e,t){const n=Go(e),i=(await Tc()).transaction($n,"readwrite"),s=i.objectStore($n),o=await s.get(n),l=t(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&Cm(e,l.fid),l}/**
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
 */async function kc(e){let t;const n=await qo(e.appConfig,r=>{const i=EE(r),s=IE(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===cu?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function EE(e){const t=e||{fid:pE(),registrationStatus:0};return Rm(t)}function IE(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Mn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=SE(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:TE(e)}:{installationEntry:t}}async function SE(e,t){try{const n=await hE(e,t);return go(e.appConfig,n)}catch(n){throw ym(n)&&n.customData.serverCode===409?await Am(e.appConfig):await go(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function TE(e){let t=await Ud(e.appConfig);for(;t.registrationStatus===1;)await Tm(100),t=await Ud(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await kc(e);return r||n}return t}function Ud(e){return qo(e,t=>{if(!t)throw Mn.create("installation-not-found");return Rm(t)})}function Rm(e){return kE(e)?{fid:e.fid,registrationStatus:0}:e}function kE(e){return e.registrationStatus===1&&e.registrationTime+gm<Date.now()}/**
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
 */async function CE({appConfig:e,heartbeatServiceProvider:t},n){const r=PE(e,n),i=aE(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:mm,appId:e.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await Sm(()=>fetch(r,l));if(a.ok){const u=await a.json();return _m(u)}else throw await Em("Generate Auth Token",a)}function PE(e,{fid:t}){return`${wm(e)}/${t}/authTokens:generate`}/**
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
 */async function Cc(e,t=!1){let n;const r=await qo(e.appConfig,s=>{if(!Nm(s))throw Mn.create("not-registered");const o=s.authToken;if(!t&&NE(o))return s;if(o.requestStatus===1)return n=AE(e,t),s;{if(!navigator.onLine)throw Mn.create("app-offline");const l=LE(s);return n=RE(e,l),l}});return n?await n:r.authToken}async function AE(e,t){let n=await Fd(e.appConfig);for(;n.authToken.requestStatus===1;)await Tm(100),n=await Fd(e.appConfig);const r=n.authToken;return r.requestStatus===0?Cc(e,t):r}function Fd(e){return qo(e,t=>{if(!Nm(t))throw Mn.create("not-registered");const n=t.authToken;return DE(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function RE(e,t){try{const n=await CE(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await go(e.appConfig,r),n}catch(n){if(ym(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Am(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await go(e.appConfig,r)}throw n}}function Nm(e){return e!==void 0&&e.registrationStatus===2}function NE(e){return e.requestStatus===2&&!OE(e)}function OE(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+iE}function LE(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function DE(e){return e.requestStatus===1&&e.requestTime+gm<Date.now()}/**
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
 */async function xE(e){const t=e,{installationEntry:n,registrationPromise:r}=await kc(t);return r?r.catch(console.error):Cc(t).catch(console.error),n.fid}/**
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
 */async function ME(e,t=!1){const n=e;return await $E(n),(await Cc(n,t)).token}async function $E(e){const{registrationPromise:t}=await kc(e);t&&await t}/**
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
 */function UE(e){if(!e||!e.options)throw Yl("App Configuration");if(!e.name)throw Yl("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Yl(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Yl(e){return Mn.create("missing-app-config-values",{valueName:e})}/**
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
 */const Om="installations",FE="installations-internal",jE=e=>{const t=e.getProvider("app").getImmediate(),n=UE(t),r=Bi(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},zE=e=>{const t=e.getProvider("app").getImmediate(),n=Bi(t,Om).getImmediate();return{getId:()=>xE(n),getToken:i=>ME(n,i)}};function BE(){yt(new ot(Om,jE,"PUBLIC")),yt(new ot(FE,zE,"PRIVATE"))}BE();Ge(pm,Sc);Ge(pm,Sc,"esm2017");/**
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
 */const jd="analytics",VE="firebase_id",HE="origin",WE=60*1e3,bE="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Pc="https://www.googletagmanager.com/gtag/js";/**
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
 */const xe=new Ko("@firebase/analytics");/**
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
 */const KE={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},qe=new zn("analytics","Analytics",KE);/**
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
 */function GE(e){if(!e.startsWith(Pc)){const t=qe.create("invalid-gtag-resource",{gtagURL:e});return xe.warn(t.message),""}return e}function Lm(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function qE(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function XE(e,t){const n=qE("firebase-js-sdk-policy",{createScriptURL:GE}),r=document.createElement("script"),i=`${Pc}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function QE(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function YE(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const a=(await Lm(n)).find(u=>u.measurementId===i);a&&await t[a.appId]}}catch(l){xe.error(l)}e("config",i,s)}async function JE(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await Lm(n);for(const a of o){const u=l.find(p=>p.measurementId===a),h=u&&t[u.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){xe.error(s)}}function ZE(e,t,n,r){async function i(s,...o){try{if(s==="event"){const[l,a]=o;await JE(e,t,n,l,a)}else if(s==="config"){const[l,a]=o;await YE(e,t,n,r,l,a)}else if(s==="consent"){const[l]=o;e("consent","update",l)}else if(s==="get"){const[l,a,u]=o;e("get",l,a,u)}else if(s==="set"){const[l]=o;e("set",l)}else e(s,...o)}catch(l){xe.error(l)}}return i}function eI(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=ZE(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function tI(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Pc)&&n.src.includes(e))return n;return null}/**
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
 */const nI=30,rI=1e3;class iI{constructor(t={},n=rI){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Dm=new iI;function sI(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function oI(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:sI(r)},s=bE.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const a=await o.json();!((t=a.error)===null||t===void 0)&&t.message&&(l=a.error.message)}catch{}throw qe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function lI(e,t=Dm,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw qe.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw qe.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new cI;return setTimeout(async()=>{l.abort()},n!==void 0?n:WE),xm({appId:r,apiKey:i,measurementId:s},o,l,t)}async function xm(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Dm){var s;const{appId:o,measurementId:l}=e;try{await aI(r,t)}catch(a){if(l)return xe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:o,measurementId:l};throw a}try{const a=await oI(e);return i.deleteThrottleMetadata(o),a}catch(a){const u=a;if(!uI(u)){if(i.deleteThrottleMetadata(o),l)return xe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw a}const h=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Cd(n,i.intervalMillis,nI):Cd(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(o,p),xe.debug(`Calling attemptFetch again in ${h} millis`),xm(e,p,r,i)}}function aI(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(qe.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function uI(e){if(!(e instanceof lt)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class cI{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function hI(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
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
 */async function dI(){if(im())try{await sm()}catch(e){return xe.warn(qe.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return xe.warn(qe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function fI(e,t,n,r,i,s,o){var l;const a=lI(e);a.then(m=>{n[m.measurementId]=m.appId,e.options.measurementId&&m.measurementId!==e.options.measurementId&&xe.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>xe.error(m)),t.push(a);const u=dI().then(m=>{if(m)return r.getId()}),[h,p]=await Promise.all([a,u]);tI(s)||XE(s,h.measurementId),i("js",new Date);const g=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return g[HE]="firebase",g.update=!0,p!=null&&(g[VE]=p),i("config",h.measurementId,g),h.measurementId}/**
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
 */class pI{constructor(t){this.app=t}_delete(){return delete ri[this.app.options.appId],Promise.resolve()}}let ri={},zd=[];const Bd={};let Jl="dataLayer",gI="gtag",Vd,Mm,Hd=!1;function mI(){const e=[];if(rm()&&e.push("This is a browser extension environment."),Pw()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=qe.create("invalid-analytics-context",{errorInfo:t});xe.warn(n.message)}}function vI(e,t,n){mI();const r=e.options.appId;if(!r)throw qe.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)xe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw qe.create("no-api-key");if(ri[r]!=null)throw qe.create("already-exists",{id:r});if(!Hd){QE(Jl);const{wrappedGtag:s,gtagCore:o}=eI(ri,zd,Bd,Jl,gI);Mm=s,Vd=o,Hd=!0}return ri[r]=fI(e,zd,Bd,t,Vd,Jl,n),new pI(e)}function yI(e,t,n,r){e=Bn(e),hI(Mm,ri[e.app.options.appId],t,n,r).catch(i=>xe.error(i))}const Wd="@firebase/analytics",bd="0.10.0";function wI(){yt(new ot(jd,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return vI(r,i,n)},"PUBLIC")),yt(new ot("analytics-internal",e,"PRIVATE")),Ge(Wd,bd),Ge(Wd,bd,"esm2017");function e(t){try{const n=t.getProvider(jd).getImmediate();return{logEvent:(r,i,s)=>yI(n,r,i,s)}}catch(n){throw qe.create("interop-component-reg-failed",{reason:n})}}}wI();function Ac(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function $m(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _I=$m,Um=new zn("auth","Firebase",$m());/**
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
 */const mo=new Ko("@firebase/auth");function EI(e,...t){mo.logLevel<=U.WARN&&mo.warn(`Auth (${Cr}): ${e}`,...t)}function Us(e,...t){mo.logLevel<=U.ERROR&&mo.error(`Auth (${Cr}): ${e}`,...t)}/**
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
 */function Dt(e,...t){throw Rc(e,...t)}function mt(e,...t){return Rc(e,...t)}function II(e,t,n){const r=Object.assign(Object.assign({},_I()),{[t]:n});return new zn("auth","Firebase",r).create(t,{appName:e.name})}function Rc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Um.create(e,...t)}function R(e,t,...n){if(!e)throw Rc(t,...n)}function Tt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Us(t),new Error(t)}function xt(e,t){e||Tt(t)}/**
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
 */function hu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function SI(){return Kd()==="http:"||Kd()==="https:"}function Kd(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function TI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(SI()||rm()||"connection"in navigator)?navigator.onLine:!0}function kI(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Vi{constructor(t,n){this.shortDelay=t,this.longDelay=n,xt(n>t,"Short delay should be less than long delay!"),this.isMobile=Tw()||kw()}get(){return TI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Nc(e,t){xt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Fm{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const CI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const PI=new Vi(3e4,6e4);function jm(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Hi(e,t,n,r,i={}){return zm(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const l=zi(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Fm.fetch()(Bm(e,e.config.apiHost,n,l),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},s))})}async function zm(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},CI),t);try{const i=new RI(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw _s(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw _s(e,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw _s(e,"email-already-in-use",o);if(a==="USER_DISABLED")throw _s(e,"user-disabled",o);const h=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw II(e,h,u);Dt(e,h)}}catch(i){if(i instanceof lt)throw i;Dt(e,"network-request-failed",{message:String(i)})}}async function AI(e,t,n,r,i={}){const s=await Hi(e,t,n,r,i);return"mfaPendingCredential"in s&&Dt(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Bm(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Nc(e.config,i):`${e.config.apiScheme}://${i}`}class RI{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mt(this.auth,"network-request-failed")),PI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _s(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=mt(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function NI(e,t){return Hi(e,"POST","/v1/accounts:delete",t)}async function OI(e,t){return Hi(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function ii(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function LI(e,t=!1){const n=Bn(e),r=await n.getIdToken(t),i=Oc(r);R(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ii(Zl(i.auth_time)),issuedAtTime:ii(Zl(i.iat)),expirationTime:ii(Zl(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Zl(e){return Number(e)*1e3}function Oc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Us("JWT malformed, contained fewer than 3 sections"),null;try{const i=Zg(n);return i?JSON.parse(i):(Us("Failed to decode base64 JWT payload"),null)}catch(i){return Us("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function DI(e){const t=Oc(e);return R(t,"internal-error"),R(typeof t.exp<"u","internal-error"),R(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ti(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof lt&&xI(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function xI({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class MI{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Vm{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ii(this.lastLoginAt),this.creationTime=ii(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function vo(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Ti(e,OI(n,{idToken:r}));R(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?FI(s.providerUserInfo):[],l=UI(e.providerData,o),a=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(l!=null&&l.length),h=a?u:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Vm(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(e,p)}async function $I(e){const t=Bn(e);await vo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function UI(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function FI(e){return e.map(t=>{var{providerId:n}=t,r=Ac(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function jI(e,t){const n=await zm(e,{},async()=>{const r=zi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=Bm(e,i,"/v1/token",`key=${s}`),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Fm.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ki{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){R(t.idToken,"internal-error"),R(typeof t.idToken<"u","internal-error"),R(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):DI(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return R(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await jI(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ki;return r&&(R(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(R(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(R(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ki,this.toJSON())}_performRefresh(){return Tt("not implemented")}}/**
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
 */function Ft(e,t){R(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Pn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Ac(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new MI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Vm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Ti(this,this.stsTokenManager.getToken(this.auth,t));return R(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return LI(this,t)}reload(){return $I(this)}_assign(t){this!==t&&(R(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Pn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await vo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Ti(this,NI(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,l,a,u,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(l=n.tenantId)!==null&&l!==void 0?l:void 0,$=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,d=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:f,emailVerified:v,isAnonymous:I,providerData:k,stsTokenManager:C}=n;R(f&&C,t,"internal-error");const P=ki.fromJSON(this.name,C);R(typeof f=="string",t,"internal-error"),Ft(p,t.name),Ft(g,t.name),R(typeof v=="boolean",t,"internal-error"),R(typeof I=="boolean",t,"internal-error"),Ft(m,t.name),Ft(w,t.name),Ft(_,t.name),Ft($,t.name),Ft(d,t.name),Ft(c,t.name);const V=new Pn({uid:f,auth:t,email:g,emailVerified:v,displayName:p,isAnonymous:I,photoURL:w,phoneNumber:m,tenantId:_,stsTokenManager:P,createdAt:d,lastLoginAt:c});return k&&Array.isArray(k)&&(V.providerData=k.map(L=>Object.assign({},L))),$&&(V._redirectEventId=$),V}static async _fromIdTokenResponse(t,n,r=!1){const i=new ki;i.updateFromServerResponse(n);const s=new Pn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await vo(s),s}}/**
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
 */const Gd=new Map;function kt(e){xt(e instanceof Function,"Expected a class definition");let t=Gd.get(e);return t?(xt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Gd.set(e,t),t)}/**
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
 */class Hm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Hm.type="NONE";const qd=Hm;/**
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
 */function Fs(e,t,n){return`firebase:${e}:${t}:${n}`}class cr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Fs(this.userKey,i.apiKey,s),this.fullPersistenceKey=Fs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Pn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new cr(kt(qd),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||kt(qd);const o=Fs(r,t.config.apiKey,t.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){const p=Pn._fromJSON(t,h);u!==s&&(l=p),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new cr(s,t,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new cr(s,t,r))}}/**
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
 */function Xd(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Km(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Wm(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(qm(t))return"Blackberry";if(Xm(t))return"Webos";if(Lc(t))return"Safari";if((t.includes("chrome/")||bm(t))&&!t.includes("edge/"))return"Chrome";if(Gm(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Wm(e=Se()){return/firefox\//i.test(e)}function Lc(e=Se()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function bm(e=Se()){return/crios\//i.test(e)}function Km(e=Se()){return/iemobile/i.test(e)}function Gm(e=Se()){return/android/i.test(e)}function qm(e=Se()){return/blackberry/i.test(e)}function Xm(e=Se()){return/webos/i.test(e)}function Xo(e=Se()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function zI(e=Se()){var t;return Xo(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function BI(){return Cw()&&document.documentMode===10}function Qm(e=Se()){return Xo(e)||Gm(e)||Xm(e)||qm(e)||/windows phone/i.test(e)||Km(e)}function VI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ym(e,t=[]){let n;switch(e){case"Browser":n=Xd(Se());break;case"Worker":n=`${Xd(Se())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Cr}/${r}`}/**
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
 */class HI{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,l)=>{try{const a=t(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function WI(e,t={}){return Hi(e,"GET","/v2/passwordPolicy",jm(e,t))}/**
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
 */const bI=6;class KI{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:bI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,a),this.validatePasswordCharacterOptions(t,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class GI{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qd(this),this.idTokenSubscription=new Qd(this),this.beforeStateQueue=new HI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Um,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=kt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await cr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(t);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await vo(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=kI()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Bn(t):null;return n&&R(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&R(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(kt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await WI(this),n=new KI(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new zn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&kt(t)||this._popupRedirectResolver;R(n,this,"argument-error"),this.redirectPersistenceManager=await cr.create(this,[kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(R(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=t.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=t.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ym(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&EI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Dc(e){return Bn(e)}class Qd{constructor(t){this.auth=t,this.observer=null,this.addObserver=Lw(n=>this.observer=n)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function qI(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function XI(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=mt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",qI().appendChild(r)})}function QI(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
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
 */function YI(e,t){const n=Bi(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(fo(s,t??{}))return i;Dt(i,"already-initialized")}return n.initialize({options:t})}function JI(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function ZI(e,t,n){const r=Dc(e);R(r._canInitEmulator,r,"emulator-config-failed"),R(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Jm(t),{host:o,port:l}=eS(t),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||tS()}function Jm(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function eS(e){const t=Jm(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Yd(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Yd(o)}}}function Yd(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function tS(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Zm{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Tt("not implemented")}_getIdTokenResponse(t){return Tt("not implemented")}_linkToIdToken(t,n){return Tt("not implemented")}_getReauthenticationResolver(t){return Tt("not implemented")}}/**
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
 */async function hr(e,t){return AI(e,"POST","/v1/accounts:signInWithIdp",jm(e,t))}/**
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
 */const nS="http://localhost";class Un extends Zm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Un(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Dt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Ac(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Un(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return hr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,hr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,hr(t,n)}buildRequest(){const t={requestUri:nS,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=zi(n)}return t}}/**
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
 */class ev{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wi extends ev{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ht extends Wi{constructor(){super("facebook.com")}static credential(t){return Un._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ht.credentialFromTaggedObject(t)}static credentialFromError(t){return Ht.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ht.credential(t.oauthAccessToken)}catch{return null}}}Ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ht.PROVIDER_ID="facebook.com";/**
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
 */class Wt extends Wi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Un._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Wt.credentialFromTaggedObject(t)}static credentialFromError(t){return Wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Wt.credential(n,r)}catch{return null}}}Wt.GOOGLE_SIGN_IN_METHOD="google.com";Wt.PROVIDER_ID="google.com";/**
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
 */class bt extends Wi{constructor(){super("github.com")}static credential(t){return Un._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return bt.credentialFromTaggedObject(t)}static credentialFromError(t){return bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return bt.credential(t.oauthAccessToken)}catch{return null}}}bt.GITHUB_SIGN_IN_METHOD="github.com";bt.PROVIDER_ID="github.com";/**
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
 */class Kt extends Wi{constructor(){super("twitter.com")}static credential(t,n){return Un._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Kt.credentialFromTaggedObject(t)}static credentialFromError(t){return Kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Kt.credential(n,r)}catch{return null}}}Kt.TWITTER_SIGN_IN_METHOD="twitter.com";Kt.PROVIDER_ID="twitter.com";/**
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
 */class Er{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await Pn._fromIdTokenResponse(t,r,i),o=Jd(r);return new Er({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Jd(r);return new Er({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Jd(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class yo extends lt{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,yo.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new yo(t,n,r,i)}}function tv(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?yo._fromErrorAndOperation(e,s,t,r):s})}async function rS(e,t,n=!1){const r=await Ti(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Er._forOperation(e,"link",r)}/**
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
 */async function iS(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Ti(e,tv(r,i,t,e),n);R(s.idToken,r,"internal-error");const o=Oc(s.idToken);R(o,r,"internal-error");const{sub:l}=o;return R(e.uid===l,r,"user-mismatch"),Er._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Dt(r,"user-mismatch"),s}}/**
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
 */async function sS(e,t,n=!1){const r="signIn",i=await tv(e,r,t),s=await Er._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function oS(e,t,n,r){return Bn(e).onIdTokenChanged(t,n,r)}function lS(e,t,n){return Bn(e).beforeAuthStateChanged(t,n)}const wo="__sak";/**
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
 */class nv{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wo,"1"),this.storage.removeItem(wo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function aS(){const e=Se();return Lc(e)||Xo(e)}const uS=1e3,cS=10;class rv extends nv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=aS()&&VI(),this.fallbackToPolling=Qm(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);BI()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,cS):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},uS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}rv.type="LOCAL";const hS=rv;/**
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
 */class iv extends nv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}iv.type="SESSION";const sv=iv;/**
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
 */function dS(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Qo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Qo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await dS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qo.receivers=[];/**
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
 */function xc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class fS{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=xc("",20);i.port1.start();const h=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(h),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function vt(){return window}function pS(e){vt().location.href=e}/**
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
 */function ov(){return typeof vt().WorkerGlobalScope<"u"&&typeof vt().importScripts=="function"}async function gS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mS(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function vS(){return ov()?self:null}/**
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
 */const lv="firebaseLocalStorageDb",yS=1,_o="firebaseLocalStorage",av="fbase_key";class bi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yo(e,t){return e.transaction([_o],t?"readwrite":"readonly").objectStore(_o)}function wS(){const e=indexedDB.deleteDatabase(lv);return new bi(e).toPromise()}function du(){const e=indexedDB.open(lv,yS);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(_o,{keyPath:av})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(_o)?t(r):(r.close(),await wS(),t(await du()))})})}async function Zd(e,t,n){const r=Yo(e,!0).put({[av]:t,value:n});return new bi(r).toPromise()}async function _S(e,t){const n=Yo(e,!1).get(t),r=await new bi(n).toPromise();return r===void 0?null:r.value}function ef(e,t){const n=Yo(e,!0).delete(t);return new bi(n).toPromise()}const ES=800,IS=3;class uv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await du(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>IS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ov()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qo._getInstance(vS()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await gS(),!this.activeServiceWorker)return;this.sender=new fS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||mS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await du();return await Zd(t,wo,"1"),await ef(t,wo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zd(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>_S(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ef(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Yo(i,!1).getAll();return new bi(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ES)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uv.type="LOCAL";const SS=uv;new Vi(3e4,6e4);/**
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
 */function TS(e,t){return t?kt(t):(R(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Mc extends Zm{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return hr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return hr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return hr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function kS(e){return sS(e.auth,new Mc(e),e.bypassAuthState)}function CS(e){const{auth:t,user:n}=e;return R(n,t,"internal-error"),iS(n,new Mc(e),e.bypassAuthState)}async function PS(e){const{auth:t,user:n}=e;return R(n,t,"internal-error"),rS(n,new Mc(e),e.bypassAuthState)}/**
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
 */class cv{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=t;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return kS;case"linkViaPopup":case"linkViaRedirect":return PS;case"reauthViaPopup":case"reauthViaRedirect":return CS;default:Dt(this.auth,"internal-error")}}resolve(t){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const AS=new Vi(2e3,1e4);class nr extends cv{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,nr.currentPopupAction&&nr.currentPopupAction.cancel(),nr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return R(t,this.auth,"internal-error"),t}async onExecution(){xt(this.filter.length===1,"Popup operations only handle one event");const t=xc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,AS.get())};t()}}nr.currentPopupAction=null;/**
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
 */const RS="pendingRedirect",js=new Map;class NS extends cv{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=js.get(this.auth._key());if(!t){try{const r=await OS(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}js.set(this.auth._key(),t)}return this.bypassAuthState||js.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OS(e,t){const n=xS(t),r=DS(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function LS(e,t){js.set(e._key(),t)}function DS(e){return kt(e._redirectPersistence)}function xS(e){return Fs(RS,e.config.apiKey,e.name)}async function MS(e,t,n=!1){const r=Dc(e),i=TS(r,t),o=await new NS(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const $S=10*60*1e3;class US{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!FS(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!hv(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(mt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=$S&&this.cachedEventUids.clear(),this.cachedEventUids.has(tf(t))}saveEventToCache(t){this.cachedEventUids.add(tf(t)),this.lastProcessedEventTime=Date.now()}}function tf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function hv({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function FS(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hv(e);default:return!1}}/**
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
 */async function jS(e,t={}){return Hi(e,"GET","/v1/projects",t)}/**
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
 */const zS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BS=/^https?/;async function VS(e){if(e.config.emulator)return;const{authorizedDomains:t}=await jS(e);for(const n of t)try{if(HS(n))return}catch{}Dt(e,"unauthorized-domain")}function HS(e){const t=hu(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!BS.test(n))return!1;if(zS.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const WS=new Vi(3e4,6e4);function nf(){const e=vt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function bS(e){return new Promise((t,n)=>{var r,i,s;function o(){nf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{nf(),n(mt(e,"network-request-failed"))},timeout:WS.get()})}if(!((i=(r=vt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=vt().gapi)===null||s===void 0)&&s.load)o();else{const l=QI("iframefcb");return vt()[l]=()=>{gapi.load?o():n(mt(e,"network-request-failed"))},XI(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(t=>{throw zs=null,t})}let zs=null;function KS(e){return zs=zs||bS(e),zs}/**
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
 */const GS=new Vi(5e3,15e3),qS="__/auth/iframe",XS="emulator/auth/iframe",QS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JS(e){const t=e.config;R(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Nc(t,XS):`https://${e.config.authDomain}/${qS}`,r={apiKey:t.apiKey,appName:e.name,v:Cr},i=YS.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${zi(r).slice(1)}`}async function ZS(e){const t=await KS(e),n=vt().gapi;return R(n,e,"internal-error"),t.open({where:document.body,url:JS(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QS,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=mt(e,"network-request-failed"),l=vt().setTimeout(()=>{s(o)},GS.get());function a(){vt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const eT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tT=500,nT=600,rT="_blank",iT="http://localhost";class rf{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sT(e,t,n,r=tT,i=nT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},eT),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Se().toLowerCase();n&&(l=bm(u)?rT:n),Wm(u)&&(t=t||iT,a.scrollbars="yes");const h=Object.entries(a).reduce((g,[m,w])=>`${g}${m}=${w},`,"");if(zI(u)&&l!=="_self")return oT(t||"",l),new rf(null);const p=window.open(t||"",l,h);R(p,e,"popup-blocked");try{p.focus()}catch{}return new rf(p)}function oT(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const lT="__/auth/handler",aT="emulator/auth/handler",uT=encodeURIComponent("fac");async function sf(e,t,n,r,i,s){R(e.config.authDomain,e,"auth-domain-config-required"),R(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Cr,eventId:i};if(t instanceof ev){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Ow(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[h,p]of Object.entries(s||{}))o[h]=p}if(t instanceof Wi){const h=t.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}e.tenantId&&(o.tid=e.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const a=await e._getAppCheckToken(),u=a?`#${uT}=${encodeURIComponent(a)}`:"";return`${cT(e)}?${zi(l).slice(1)}${u}`}function cT({config:e}){return e.emulator?Nc(e,aT):`https://${e.authDomain}/${lT}`}/**
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
 */const ea="webStorageSupport";class hT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sv,this._completeRedirectFn=MS,this._overrideRedirectResult=LS}async _openPopup(t,n,r,i){var s;xt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await sf(t,n,r,hu(),i);return sT(t,o,xc())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await sf(t,n,r,hu(),i);return pS(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(xt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await ZS(t),r=new US(t);return n.register("authEvent",i=>(R(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(ea,{type:ea},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ea];o!==void 0&&n(!!o),Dt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VS(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qm()||Lc()||Xo()}}const dT=hT;var of="@firebase/auth",lf="1.3.0";/**
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
 */class fT{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function pT(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gT(e){yt(new ot("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;R(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ym(e)},u=new GI(r,i,s,a);return JI(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),yt(new ot("auth-internal",t=>{const n=Dc(t.getProvider("auth").getImmediate());return(r=>new fT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ge(of,lf,pT(e)),Ge(of,lf,"esm2017")}/**
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
 */const mT=5*60,vT=nm("authIdTokenMaxAge")||mT;let af=null;const yT=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vT)return;const i=n==null?void 0:n.token;af!==i&&(af=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function wT(e=um()){const t=Bi(e,"auth");if(t.isInitialized())return t.getImmediate();const n=YI(e,{popupRedirectResolver:dT,persistence:[SS,hS,sv]}),r=nm("authTokenSyncURL");if(r){const s=yT(r);lS(n,s,()=>s(n.currentUser)),oS(n,o=>s(o))}const i=em("auth");return i&&ZI(n,`http://${i}`),n}gT("Browser");var _T=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},E,$c=$c||{},A=_T||self;function Jo(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Ki(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function ET(e){return Object.prototype.hasOwnProperty.call(e,ta)&&e[ta]||(e[ta]=++IT)}var ta="closure_uid_"+(1e9*Math.random()>>>0),IT=0;function ST(e,t,n){return e.call.apply(e.bind,arguments)}function TT(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function _e(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_e=ST:_e=TT,_e.apply(null,arguments)}function Es(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function le(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),l=2;l<arguments.length;l++)o[l-2]=arguments[l];return t.prototype[i].apply(r,o)}}function dn(){this.s=this.s,this.o=this.o}var kT=0;dn.prototype.s=!1;dn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),kT!=0)&&ET(this)};dn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const dv=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Uc(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function uf(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Jo(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function Ee(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var CT=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{A.addEventListener("test",()=>{},t),A.removeEventListener("test",()=>{},t)}catch{}return e}();function Ci(e){return/^[\s\xa0]*$/.test(e)}function Zo(){var e=A.navigator;return e&&(e=e.userAgent)?e:""}function ht(e){return Zo().indexOf(e)!=-1}function Fc(e){return Fc[" "](e),e}Fc[" "]=function(){};function PT(e,t){var n=_k;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var AT=ht("Opera"),Pi=ht("Trident")||ht("MSIE"),fv=ht("Edge"),fu=fv||Pi,pv=ht("Gecko")&&!(Zo().toLowerCase().indexOf("webkit")!=-1&&!ht("Edge"))&&!(ht("Trident")||ht("MSIE"))&&!ht("Edge"),RT=Zo().toLowerCase().indexOf("webkit")!=-1&&!ht("Edge");function gv(){var e=A.document;return e?e.documentMode:void 0}e:{var cf="",na=function(){var e=Zo();if(pv)return/rv:([^\);]+)(\)|;)/.exec(e);if(fv)return/Edge\/([\d\.]+)/.exec(e);if(Pi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(RT)return/WebKit\/(\S+)/.exec(e);if(AT)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(na&&(cf=na?na[1]:""),Pi){var hf=gv();if(hf!=null&&hf>parseFloat(cf))break e}}A.document&&Pi&&gv();function Ai(e,t){if(Ee.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(pv){e:{try{Fc(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:NT[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ai.$.h.call(this)}}le(Ai,Ee);var NT={2:"touch",3:"pen",4:"mouse"};Ai.prototype.h=function(){Ai.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Gi="closure_listenable_"+(1e6*Math.random()|0),OT=0;function LT(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++OT,this.fa=this.ia=!1}function el(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function jc(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function DT(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function mv(e){const t={};for(const n in e)t[n]=e[n];return t}const df="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vv(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<df.length;s++)n=df[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function tl(e){this.src=e,this.g={},this.h=0}tl.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=gu(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new LT(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function pu(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=dv(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(el(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function gu(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var zc="closure_lm_"+(1e6*Math.random()|0),ra={};function yv(e,t,n,r,i){if(r&&r.once)return _v(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)yv(e,t[s],n,r,i);return null}return n=Hc(n),e&&e[Gi]?e.O(t,n,Ki(r)?!!r.capture:!!r,i):wv(e,t,n,!1,r,i)}function wv(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Ki(i)?!!i.capture:!!i,l=Vc(e);if(l||(e[zc]=l=new tl(e)),n=l.add(t,n,r,o,s),n.proxy)return n;if(r=xT(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)CT||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Iv(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function xT(){function e(n){return t.call(e.src,e.listener,n)}const t=MT;return e}function _v(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)_v(e,t[s],n,r,i);return null}return n=Hc(n),e&&e[Gi]?e.P(t,n,Ki(r)?!!r.capture:!!r,i):wv(e,t,n,!0,r,i)}function Ev(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Ev(e,t[s],n,r,i);else r=Ki(r)?!!r.capture:!!r,n=Hc(n),e&&e[Gi]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=gu(s,n,r,i),-1<n&&(el(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=Vc(e))&&(t=e.g[t.toString()],e=-1,t&&(e=gu(t,n,r,i)),(n=-1<e?t[e]:null)&&Bc(n))}function Bc(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Gi])pu(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Iv(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Vc(t))?(pu(n,e),n.h==0&&(n.src=null,t[zc]=null)):el(e)}}}function Iv(e){return e in ra?ra[e]:ra[e]="on"+e}function MT(e,t){if(e.fa)e=!0;else{t=new Ai(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Bc(e),e=n.call(r,t)}return e}function Vc(e){return e=e[zc],e instanceof tl?e:null}var ia="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hc(e){return typeof e=="function"?e:(e[ia]||(e[ia]=function(t){return e.handleEvent(t)}),e[ia])}function oe(){dn.call(this),this.i=new tl(this),this.S=this,this.J=null}le(oe,dn);oe.prototype[Gi]=!0;oe.prototype.removeEventListener=function(e,t,n,r){Ev(this,e,t,n,r)};function de(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Ee(t,e);else if(t instanceof Ee)t.target=t.target||e;else{var i=t;t=new Ee(r,e),vv(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Is(o,r,!0,t)&&i}if(o=t.g=e,i=Is(o,r,!0,t)&&i,i=Is(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Is(o,r,!1,t)&&i}oe.prototype.N=function(){if(oe.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)el(n[r]);delete e.g[t],e.h--}}this.J=null};oe.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};oe.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Is(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var l=o.listener,a=o.la||o.src;o.ia&&pu(e.i,o),i=l.call(a,r)!==!1&&i}}return i&&!r.defaultPrevented}var Wc=A.JSON.stringify;class $T{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function UT(){var e=bc;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class FT{constructor(){this.h=this.g=null}add(t,n){const r=Sv.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Sv=new $T(()=>new jT,e=>e.reset());class jT{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function zT(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function BT(e){A.setTimeout(()=>{throw e},0)}let Ri,Ni=!1,bc=new FT,Tv=()=>{const e=A.Promise.resolve(void 0);Ri=()=>{e.then(VT)}};var VT=()=>{for(var e;e=UT();){try{e.h.call(e.g)}catch(n){BT(n)}var t=Sv;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ni=!1};function nl(e,t){oe.call(this),this.h=e||1,this.g=t||A,this.j=_e(this.qb,this),this.l=Date.now()}le(nl,oe);E=nl.prototype;E.ga=!1;E.T=null;E.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),de(this,"tick"),this.ga&&(Kc(this),this.start()))}};E.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Kc(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}E.N=function(){nl.$.N.call(this),Kc(this),delete this.g};function Gc(e,t,n){if(typeof e=="function")n&&(e=_e(e,n));else if(e&&typeof e.handleEvent=="function")e=_e(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:A.setTimeout(e,t||0)}function kv(e){e.g=Gc(()=>{e.g=null,e.i&&(e.i=!1,kv(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class HT extends dn{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:kv(this)}N(){super.N(),this.g&&(A.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Oi(e){dn.call(this),this.h=e,this.g={}}le(Oi,dn);var ff=[];function Cv(e,t,n,r){Array.isArray(n)||(n&&(ff[0]=n.toString()),n=ff);for(var i=0;i<n.length;i++){var s=yv(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Pv(e){jc(e.g,function(t,n){this.g.hasOwnProperty(n)&&Bc(t)},e),e.g={}}Oi.prototype.N=function(){Oi.$.N.call(this),Pv(this)};Oi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function rl(){this.g=!0}rl.prototype.Ea=function(){this.g=!1};function WT(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",l=s.split("&"),a=0;a<l.length;a++){var u=l[a].split("=");if(1<u.length){var h=u[0];u=u[1];var p=h.split("_");o=2<=p.length&&p[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function bT(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function rr(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+GT(e,n)+(r?" "+r:"")})}function KT(e,t){e.info(function(){return"TIMEOUT: "+t})}rl.prototype.info=function(){};function GT(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Wc(n)}catch{return t}}var Pr={},pf=null;function qc(){return pf=pf||new oe}Pr.Ta="serverreachability";function Av(e){Ee.call(this,Pr.Ta,e)}le(Av,Ee);function Li(e){const t=qc();de(t,new Av(t))}Pr.STAT_EVENT="statevent";function Rv(e,t){Ee.call(this,Pr.STAT_EVENT,e),this.stat=t}le(Rv,Ee);function ke(e){const t=qc();de(t,new Rv(t,e))}Pr.Ua="timingevent";function Nv(e,t){Ee.call(this,Pr.Ua,e),this.size=t}le(Nv,Ee);function qi(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return A.setTimeout(function(){e()},t)}var Xc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},qT={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Qc(){}Qc.prototype.h=null;function gf(e){return e.h||(e.h=e.i())}function XT(){}var Xi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Yc(){Ee.call(this,"d")}le(Yc,Ee);function Jc(){Ee.call(this,"c")}le(Jc,Ee);var mu;function il(){}le(il,Qc);il.prototype.g=function(){return new XMLHttpRequest};il.prototype.i=function(){return{}};mu=new il;function Qi(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Oi(this),this.P=QT,e=fu?125:void 0,this.V=new nl(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ov}function Ov(){this.i=null,this.g="",this.h=!1}var QT=45e3,vu={},Eo={};E=Qi.prototype;E.setTimeout=function(e){this.P=e};function yu(e,t,n){e.L=1,e.v=ol(Mt(t)),e.s=n,e.S=!0,Lv(e,null)}function Lv(e,t){e.G=Date.now(),Yi(e),e.A=Mt(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),zv(n.i,"t",r),e.C=0,n=e.l.J,e.h=new Ov,e.g=ly(e.l,n?t:null,!e.s),0<e.O&&(e.M=new HT(_e(e.Pa,e,e.g),e.O)),Cv(e.U,e.g,"readystatechange",e.nb),t=e.I?mv(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Li(),WT(e.j,e.u,e.A,e.m,e.W,e.s)}E.nb=function(e){e=e.target;const t=this.M;t&&dt(e)==3?t.l():this.Pa(e)};E.Pa=function(e){try{if(e==this.g)e:{const h=dt(this.g);var t=this.g.Ia();const p=this.g.da();if(!(3>h)&&(h!=3||fu||this.g&&(this.h.h||this.g.ja()||wf(this.g)))){this.J||h!=4||t==7||(t==8||0>=p?Li(3):Li(2)),sl(this);var n=this.g.da();this.ca=n;t:if(Dv(this)){var r=wf(this.g);e="";var i=r.length,s=dt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Sn(this),si(this);var o="";break t}this.h.i=new A.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,bT(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var l,a=this.g;if((l=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ci(l)){var u=l;break t}}u=null}if(n=u)rr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wu(this,n);else{this.i=!1,this.o=3,ke(12),Sn(this),si(this);break e}}this.S?(xv(this,h,o),fu&&this.i&&h==3&&(Cv(this.U,this.V,"tick",this.mb),this.V.start())):(rr(this.j,this.m,o,null),wu(this,o)),h==4&&Sn(this),this.i&&!this.J&&(h==4?ry(this.l,this):(this.i=!1,Yi(this)))}else vk(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ke(12)):(this.o=0,ke(13)),Sn(this),si(this)}}}catch{}finally{}};function Dv(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function xv(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=YT(e,n),i==Eo){t==4&&(e.o=4,ke(14),r=!1),rr(e.j,e.m,null,"[Incomplete Response]");break}else if(i==vu){e.o=4,ke(15),rr(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else rr(e.j,e.m,i,null),wu(e,i);Dv(e)&&i!=Eo&&i!=vu&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,ke(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ih(t),t.M=!0,ke(11))):(rr(e.j,e.m,n,"[Invalid Chunked Response]"),Sn(e),si(e))}E.mb=function(){if(this.g){var e=dt(this.g),t=this.g.ja();this.C<t.length&&(sl(this),xv(this,e,t),this.i&&e!=4&&Yi(this))}};function YT(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Eo:(n=Number(t.substring(n,r)),isNaN(n)?vu:(r+=1,r+n>t.length?Eo:(t=t.slice(r,r+n),e.C=r+n,t)))}E.cancel=function(){this.J=!0,Sn(this)};function Yi(e){e.Y=Date.now()+e.P,Mv(e,e.P)}function Mv(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=qi(_e(e.lb,e),t)}function sl(e){e.B&&(A.clearTimeout(e.B),e.B=null)}E.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(KT(this.j,this.A),this.L!=2&&(Li(),ke(17)),Sn(this),this.o=2,si(this)):Mv(this,this.Y-e)};function si(e){e.l.H==0||e.J||ry(e.l,e)}function Sn(e){sl(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Kc(e.V),Pv(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function wu(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||_u(n.i,e))){if(!e.K&&_u(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)To(n),cl(n);else break e;rh(n),ke(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=qi(_e(n.ib,n),6e3));if(1>=Hv(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Tn(n,11)}else if((e.K||n.g==e)&&To(n),!Ci(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const h=u[3];h!=null&&(n.ra=h,n.l.info("VER="+n.ra));const p=u[4];p!=null&&(n.Ga=p,n.l.info("SVER="+n.Ga));const g=u[5];g!=null&&typeof g=="number"&&0<g&&(r=1.5*g,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=e.g;if(m){const w=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var s=r.i;s.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Zc(s,s.h),s.h=null))}if(r.F){const _=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,W(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=oy(r,r.J?r.pa:null,r.Y),o.K){Wv(r.i,o);var l=o,a=r.L;a&&l.setTimeout(a),l.B&&(sl(l),Yi(l)),r.g=o}else ty(r);0<n.j.length&&hl(n)}else u[0]!="stop"&&u[0]!="close"||Tn(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Tn(n,7):nh(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Li(4)}catch{}}function JT(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Jo(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function ZT(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Jo(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function $v(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Jo(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=ZT(e),r=JT(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var Uv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ek(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function An(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof An){this.h=e.h,Io(this,e.j),this.s=e.s,this.g=e.g,So(this,e.m),this.l=e.l;var t=e.i,n=new Di;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),mf(this,n),this.o=e.o}else e&&(t=String(e).match(Uv))?(this.h=!1,Io(this,t[1]||"",!0),this.s=Kr(t[2]||""),this.g=Kr(t[3]||"",!0),So(this,t[4]),this.l=Kr(t[5]||"",!0),mf(this,t[6]||"",!0),this.o=Kr(t[7]||"")):(this.h=!1,this.i=new Di(null,this.h))}An.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Gr(t,vf,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Gr(t,vf,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Gr(n,n.charAt(0)=="/"?rk:nk,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Gr(n,sk)),e.join("")};function Mt(e){return new An(e)}function Io(e,t,n){e.j=n?Kr(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function So(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function mf(e,t,n){t instanceof Di?(e.i=t,ok(e.i,e.h)):(n||(t=Gr(t,ik)),e.i=new Di(t,e.h))}function W(e,t,n){e.i.set(t,n)}function ol(e){return W(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Kr(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Gr(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,tk),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function tk(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var vf=/[#\/\?@]/g,nk=/[#\?:]/g,rk=/[#\?]/g,ik=/[#\?@]/g,sk=/#/g;function Di(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function fn(e){e.g||(e.g=new Map,e.h=0,e.i&&ek(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}E=Di.prototype;E.add=function(e,t){fn(this),this.i=null,e=Ar(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Fv(e,t){fn(e),t=Ar(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function jv(e,t){return fn(e),t=Ar(e,t),e.g.has(t)}E.forEach=function(e,t){fn(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};E.ta=function(){fn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};E.Z=function(e){fn(this);let t=[];if(typeof e=="string")jv(this,e)&&(t=t.concat(this.g.get(Ar(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};E.set=function(e,t){return fn(this),this.i=null,e=Ar(this,e),jv(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};E.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function zv(e,t,n){Fv(e,t),0<n.length&&(e.i=null,e.g.set(Ar(e,t),Uc(n)),e.h+=n.length)}E.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Ar(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function ok(e,t){t&&!e.j&&(fn(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Fv(this,r),zv(this,i,n))},e)),e.j=t}var lk=class{constructor(e,t){this.g=e,this.map=t}};function Bv(e){this.l=e||ak,A.PerformanceNavigationTiming?(e=A.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(A.g&&A.g.Ka&&A.g.Ka()&&A.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ak=10;function Vv(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Hv(e){return e.h?1:e.g?e.g.size:0}function _u(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Zc(e,t){e.g?e.g.add(t):e.h=t}function Wv(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Bv.prototype.cancel=function(){if(this.i=bv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function bv(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Uc(e.i)}var uk=class{stringify(e){return A.JSON.stringify(e,void 0)}parse(e){return A.JSON.parse(e,void 0)}};function ck(){this.g=new uk}function hk(e,t,n){const r=n||"";try{$v(e,function(i,s){let o=i;Ki(i)&&(o=Wc(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function dk(e,t){const n=new rl;if(A.Image){const r=new Image;r.onload=Es(Ss,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Es(Ss,n,r,"TestLoadImage: error",!1,t),r.onabort=Es(Ss,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Es(Ss,n,r,"TestLoadImage: timeout",!1,t),A.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Ss(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function ll(e){this.l=e.fc||null,this.j=e.ob||!1}le(ll,Qc);ll.prototype.g=function(){return new al(this.l,this.j)};ll.prototype.i=function(e){return function(){return e}}({});function al(e,t){oe.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=eh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}le(al,oe);var eh=0;E=al.prototype;E.open=function(e,t){if(this.readyState!=eh)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,xi(this)};E.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||A).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};E.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ji(this)),this.readyState=eh};E.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,xi(this)),this.g&&(this.readyState=3,xi(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof A.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Kv(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Kv(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}E.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ji(this):xi(this),this.readyState==3&&Kv(this)}};E.Za=function(e){this.g&&(this.response=this.responseText=e,Ji(this))};E.Ya=function(e){this.g&&(this.response=e,Ji(this))};E.ka=function(){this.g&&Ji(this)};function Ji(e){e.readyState=4,e.l=null,e.j=null,e.A=null,xi(e)}E.setRequestHeader=function(e,t){this.v.append(e,t)};E.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};E.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function xi(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(al.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var fk=A.JSON.parse;function Z(e){oe.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Gv,this.L=this.M=!1}le(Z,oe);var Gv="",pk=/^https?$/i,gk=["POST","PUT"];E=Z.prototype;E.Oa=function(e){this.M=e};E.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():mu.g(),this.C=this.u?gf(this.u):gf(mu),this.g.onreadystatechange=_e(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){yf(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=A.FormData&&e instanceof A.FormData,!(0<=dv(gk,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Qv(this),0<this.B&&((this.L=mk(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_e(this.ua,this)):this.A=Gc(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){yf(this,s)}};function mk(e){return Pi&&typeof e.timeout=="number"&&e.ontimeout!==void 0}E.ua=function(){typeof $c<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,de(this,"timeout"),this.abort(8))};function yf(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,qv(e),ul(e)}function qv(e){e.F||(e.F=!0,de(e,"complete"),de(e,"error"))}E.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,de(this,"complete"),de(this,"abort"),ul(this))};E.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ul(this,!0)),Z.$.N.call(this)};E.La=function(){this.s||(this.G||this.v||this.l?Xv(this):this.kb())};E.kb=function(){Xv(this)};function Xv(e){if(e.h&&typeof $c<"u"&&(!e.C[1]||dt(e)!=4||e.da()!=2)){if(e.v&&dt(e)==4)Gc(e.La,0,e);else if(de(e,"readystatechange"),dt(e)==4){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(Uv)[1]||null;!i&&A.self&&A.self.location&&(i=A.self.location.protocol.slice(0,-1)),r=!pk.test(i?i.toLowerCase():"")}n=r}if(n)de(e,"complete"),de(e,"success");else{e.m=6;try{var s=2<dt(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",qv(e)}}finally{ul(e)}}}}function ul(e,t){if(e.g){Qv(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||de(e,"ready");try{n.onreadystatechange=r}catch{}}}function Qv(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(A.clearTimeout(e.A),e.A=null)}E.isActive=function(){return!!this.g};function dt(e){return e.g?e.g.readyState:0}E.da=function(){try{return 2<dt(this)?this.g.status:-1}catch{return-1}};E.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};E.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),fk(t)}};function wf(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Gv:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function vk(e){const t={};e=(e.g&&2<=dt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Ci(e[r]))continue;var n=zT(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}DT(t,function(r){return r.join(", ")})}E.Ia=function(){return this.m};E.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Yv(e){let t="";return jc(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function th(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Yv(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):W(e,t,n))}function zr(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Jv(e){this.Ga=0,this.j=[],this.l=new rl,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=zr("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=zr("baseRetryDelayMs",5e3,e),this.hb=zr("retryDelaySeedMs",1e4,e),this.eb=zr("forwardChannelMaxRetries",2,e),this.xa=zr("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Bv(e&&e.concurrentRequestLimit),this.Ja=new ck,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}E=Jv.prototype;E.ra=8;E.H=1;function nh(e){if(Zv(e),e.H==3){var t=e.W++,n=Mt(e.I);if(W(n,"SID",e.K),W(n,"RID",t),W(n,"TYPE","terminate"),Zi(e,n),t=new Qi(e,e.l,t),t.L=2,t.v=ol(Mt(n)),n=!1,A.navigator&&A.navigator.sendBeacon)try{n=A.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&A.Image&&(new Image().src=t.v,n=!0),n||(t.g=ly(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Yi(t)}sy(e)}function cl(e){e.g&&(ih(e),e.g.cancel(),e.g=null)}function Zv(e){cl(e),e.u&&(A.clearTimeout(e.u),e.u=null),To(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&A.clearTimeout(e.m),e.m=null)}function hl(e){if(!Vv(e.i)&&!e.m){e.m=!0;var t=e.Na;Ri||Tv(),Ni||(Ri(),Ni=!0),bc.add(t,e),e.C=0}}function yk(e,t){return Hv(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=qi(_e(e.Na,e,t),iy(e,e.C)),e.C++,!0)}E.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Qi(this,this.l,e);let s=this.s;if(this.U&&(s?(s=mv(s),vv(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=ey(this,i,t),n=Mt(this.I),W(n,"RID",e),W(n,"CVER",22),this.F&&W(n,"X-HTTP-Session-Id",this.F),Zi(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Yv(s)))+"&"+t:this.o&&th(n,this.o,s)),Zc(this.i,i),this.bb&&W(n,"TYPE","init"),this.P?(W(n,"$req",t),W(n,"SID","null"),i.aa=!0,yu(i,n,null)):yu(i,n,t),this.H=2}}else this.H==3&&(e?_f(this,e):this.j.length==0||Vv(this.i)||_f(this))};function _f(e,t){var n;t?n=t.m:n=e.W++;const r=Mt(e.I);W(r,"SID",e.K),W(r,"RID",n),W(r,"AID",e.V),Zi(e,r),e.o&&e.s&&th(r,e.o,e.s),n=new Qi(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=ey(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Zc(e.i,n),yu(n,r,t)}function Zi(e,t){e.na&&jc(e.na,function(n,r){W(t,r,n)}),e.h&&$v({},function(n,r){W(t,r,n)})}function ey(e,t,n){n=Math.min(e.j.length,n);var r=e.h?_e(e.h.Va,e.h,e):null;e:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let l=!0;for(let a=0;a<n;a++){let u=i[a].g;const h=i[a].map;if(u-=s,0>u)s=Math.max(0,i[a].g-100),l=!1;else try{hk(h,o,"req"+u+"_")}catch{r&&r(h)}}if(l){r=o.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function ty(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Ri||Tv(),Ni||(Ri(),Ni=!0),bc.add(t,e),e.A=0}}function rh(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=qi(_e(e.Ma,e),iy(e,e.A)),e.A++,!0)}E.Ma=function(){if(this.u=null,ny(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=qi(_e(this.jb,this),e)}};E.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ke(10),cl(this),ny(this))};function ih(e){e.B!=null&&(A.clearTimeout(e.B),e.B=null)}function ny(e){e.g=new Qi(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Mt(e.wa);W(t,"RID","rpc"),W(t,"SID",e.K),W(t,"AID",e.V),W(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&W(t,"TO",e.qa),W(t,"TYPE","xmlhttp"),Zi(e,t),e.o&&e.s&&th(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=ol(Mt(t)),n.s=null,n.S=!0,Lv(n,e)}E.ib=function(){this.v!=null&&(this.v=null,cl(this),rh(this),ke(19))};function To(e){e.v!=null&&(A.clearTimeout(e.v),e.v=null)}function ry(e,t){var n=null;if(e.g==t){To(e),ih(e),e.g=null;var r=2}else if(_u(e.i,t))n=t.F,Wv(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=qc(),de(r,new Nv(r,n)),hl(e)}else ty(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&yk(e,t)||r==2&&rh(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Tn(e,5);break;case 4:Tn(e,10);break;case 3:Tn(e,6);break;default:Tn(e,2)}}}function iy(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Tn(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=_e(e.pb,e);n||(n=new An("//www.google.com/images/cleardot.gif"),A.location&&A.location.protocol=="http"||Io(n,"https"),ol(n)),dk(n.toString(),r)}else ke(2);e.H=0,e.h&&e.h.za(t),sy(e),Zv(e)}E.pb=function(e){e?(this.l.info("Successfully pinged google.com"),ke(2)):(this.l.info("Failed to ping google.com"),ke(1))};function sy(e){if(e.H=0,e.ma=[],e.h){const t=bv(e.i);(t.length!=0||e.j.length!=0)&&(uf(e.ma,t),uf(e.ma,e.j),e.i.i.length=0,Uc(e.j),e.j.length=0),e.h.ya()}}function oy(e,t,n){var r=n instanceof An?Mt(n):new An(n);if(r.g!="")t&&(r.g=t+"."+r.g),So(r,r.m);else{var i=A.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new An(null);r&&Io(s,r),t&&(s.g=t),i&&So(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&W(r,n,t),W(r,"VER",e.ra),Zi(e,r),r}function ly(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new Z(new ll({ob:!0})):new Z(e.va),t.Oa(e.J),t}E.isActive=function(){return!!this.h&&this.h.isActive(this)};function ay(){}E=ay.prototype;E.Ba=function(){};E.Aa=function(){};E.za=function(){};E.ya=function(){};E.isActive=function(){return!0};E.Va=function(){};function Ye(e,t){oe.call(this),this.g=new Jv(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Ci(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Ci(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Rr(this)}le(Ye,oe);Ye.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;ke(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=oy(e,null,e.Y),hl(e)};Ye.prototype.close=function(){nh(this.g)};Ye.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Wc(e),e=n);t.j.push(new lk(t.fb++,e)),t.H==3&&hl(t)};Ye.prototype.N=function(){this.g.h=null,delete this.j,nh(this.g),delete this.g,Ye.$.N.call(this)};function uy(e){Yc.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}le(uy,Yc);function cy(){Jc.call(this),this.status=1}le(cy,Jc);function Rr(e){this.g=e}le(Rr,ay);Rr.prototype.Ba=function(){de(this.g,"a")};Rr.prototype.Aa=function(e){de(this.g,new uy(e))};Rr.prototype.za=function(e){de(this.g,new cy)};Rr.prototype.ya=function(){de(this.g,"b")};function wk(){this.blockSize=-1}function wt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}le(wt,wk);wt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function sa(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}wt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)sa(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){sa(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){sa(this,r),i=0;break}}this.h=i,this.i+=t};wt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function z(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var _k={};function sh(e){return-128<=e&&128>e?PT(e,function(t){return new z([t|0],0>t?-1:0)}):new z([e|0],0>e?-1:0)}function ft(e){if(isNaN(e)||!isFinite(e))return dr;if(0>e)return ce(ft(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Eu;return new z(t,0)}function hy(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return ce(hy(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ft(Math.pow(t,8)),r=dr,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=ft(Math.pow(t,s)),r=r.R(s).add(ft(o))):(r=r.R(n),r=r.add(ft(o)))}return r}var Eu=4294967296,dr=sh(0),Iu=sh(1),Ef=sh(16777216);E=z.prototype;E.ea=function(){if(We(this))return-ce(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Eu+r)*t,t*=Eu}return e};E.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Ct(this))return"0";if(We(this))return"-"+ce(this).toString(e);for(var t=ft(Math.pow(e,6)),n=this,r="";;){var i=Co(n,t).g;n=ko(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Ct(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};E.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Ct(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function We(e){return e.h==-1}E.X=function(e){return e=ko(this,e),We(e)?-1:Ct(e)?0:1};function ce(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new z(n,~e.h).add(Iu)}E.abs=function(){return We(this)?ce(this):this};E.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new z(n,n[n.length-1]&-2147483648?-1:0)};function ko(e,t){return e.add(ce(t))}E.R=function(e){if(Ct(this)||Ct(e))return dr;if(We(this))return We(e)?ce(this).R(ce(e)):ce(ce(this).R(e));if(We(e))return ce(this.R(ce(e)));if(0>this.X(Ef)&&0>e.X(Ef))return ft(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,l=e.D(i)>>>16,a=e.D(i)&65535;n[2*r+2*i]+=o*a,Ts(n,2*r+2*i),n[2*r+2*i+1]+=s*a,Ts(n,2*r+2*i+1),n[2*r+2*i+1]+=o*l,Ts(n,2*r+2*i+1),n[2*r+2*i+2]+=s*l,Ts(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new z(n,0)};function Ts(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Br(e,t){this.g=e,this.h=t}function Co(e,t){if(Ct(t))throw Error("division by zero");if(Ct(e))return new Br(dr,dr);if(We(e))return t=Co(ce(e),t),new Br(ce(t.g),ce(t.h));if(We(t))return t=Co(e,ce(t)),new Br(ce(t.g),t.h);if(30<e.g.length){if(We(e)||We(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Iu,r=t;0>=r.X(e);)n=If(n),r=If(r);var i=Hn(n,1),s=Hn(r,1);for(r=Hn(r,2),n=Hn(n,2);!Ct(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Hn(r,1),n=Hn(n,1)}return t=ko(e,i.R(t)),new Br(i,t)}for(i=dr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=ft(n),o=s.R(t);We(o)||0<o.X(e);)n-=r,s=ft(n),o=s.R(t);Ct(s)&&(s=Iu),i=i.add(s),e=ko(e,o)}return new Br(i,e)}E.gb=function(e){return Co(this,e).h};E.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new z(n,this.h&e.h)};E.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new z(n,this.h|e.h)};E.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new z(n,this.h^e.h)};function If(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new z(n,e.h)}function Hn(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new z(i,e.h)}Ye.prototype.send=Ye.prototype.u;Ye.prototype.open=Ye.prototype.m;Ye.prototype.close=Ye.prototype.close;Xc.NO_ERROR=0;Xc.TIMEOUT=8;Xc.HTTP_ERROR=6;qT.COMPLETE="complete";XT.EventType=Xi;Xi.OPEN="a";Xi.CLOSE="b";Xi.ERROR="c";Xi.MESSAGE="d";oe.prototype.listen=oe.prototype.O;Z.prototype.listenOnce=Z.prototype.P;Z.prototype.getLastError=Z.prototype.Sa;Z.prototype.getLastErrorCode=Z.prototype.Ia;Z.prototype.getStatus=Z.prototype.da;Z.prototype.getResponseJson=Z.prototype.Wa;Z.prototype.getResponseText=Z.prototype.ja;Z.prototype.send=Z.prototype.ha;Z.prototype.setWithCredentials=Z.prototype.Oa;wt.prototype.digest=wt.prototype.l;wt.prototype.reset=wt.prototype.reset;wt.prototype.update=wt.prototype.j;z.prototype.add=z.prototype.add;z.prototype.multiply=z.prototype.R;z.prototype.modulo=z.prototype.gb;z.prototype.compare=z.prototype.X;z.prototype.toNumber=z.prototype.ea;z.prototype.toString=z.prototype.toString;z.prototype.getBits=z.prototype.D;z.fromNumber=ft;z.fromString=hy;var Ek=z;const Sf="@firebase/firestore";/**
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
 */class me{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}me.UNAUTHENTICATED=new me(null),me.GOOGLE_CREDENTIALS=new me("google-credentials-uid"),me.FIRST_PARTY=new me("first-party-uid"),me.MOCK_USER=new me("mock-user");/**
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
 */let es="10.3.1";/**
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
 */const Ir=new Ko("@firebase/firestore");function Ue(e,...t){if(Ir.logLevel<=U.DEBUG){const n=t.map(lh);Ir.debug(`Firestore (${es}): ${e}`,...n)}}function oh(e,...t){if(Ir.logLevel<=U.ERROR){const n=t.map(lh);Ir.error(`Firestore (${es}): ${e}`,...n)}}function Ik(e,...t){if(Ir.logLevel<=U.WARN){const n=t.map(lh);Ir.warn(`Firestore (${es}): ${e}`,...n)}}function lh(e){if(typeof e=="string")return e;try{/**
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
 */function ah(e="Unexpected state"){const t=`FIRESTORE (${es}) INTERNAL ASSERTION FAILED: `+e;throw oh(t),new Error(t)}function Su(e,t){e||ah()}/**
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
 */const ye={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class we extends lt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class fr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class dy{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Sk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(me.UNAUTHENTICATED))}shutdown(){}}class Tk{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class kk{constructor(t){this.t=t,this.currentUser=me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=a=>this.i!==r?(r=this.i,n(a)):Promise.resolve();let s=new fr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new fr,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const a=s;t.enqueueRetryable(async()=>{await a.promise,await i(this.currentUser)})},l=a=>{Ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>l(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?l(a):(Ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new fr)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(Ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Su(typeof r.accessToken=="string"),new dy(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Su(t===null||typeof t=="string"),new me(t)}}class Ck{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=me.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Pk{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Ck(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ak{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Rk{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&Ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Ue("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{Ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Su(typeof n.token=="string"),this.R=n.token,new Ak(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Nk(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Ok{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Nk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function fy(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Lk{constructor(t,n,r,i,s,o,l,a,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=a,this.useFetchStreams=u}}class Po{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Po("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Po&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var Tf,x;(x=Tf||(Tf={}))[x.OK=0]="OK",x[x.CANCELLED=1]="CANCELLED",x[x.UNKNOWN=2]="UNKNOWN",x[x.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",x[x.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",x[x.NOT_FOUND=5]="NOT_FOUND",x[x.ALREADY_EXISTS=6]="ALREADY_EXISTS",x[x.PERMISSION_DENIED=7]="PERMISSION_DENIED",x[x.UNAUTHENTICATED=16]="UNAUTHENTICATED",x[x.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",x[x.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",x[x.ABORTED=10]="ABORTED",x[x.OUT_OF_RANGE=11]="OUT_OF_RANGE",x[x.UNIMPLEMENTED=12]="UNIMPLEMENTED",x[x.INTERNAL=13]="INTERNAL",x[x.UNAVAILABLE=14]="UNAVAILABLE",x[x.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Ek([4294967295,4294967295],0);function oa(){return typeof document<"u"?document:null}/**
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
 */class Dk{constructor(t,n,r=1e3,i=1.5,s=6e4){this._i=t,this.timerId=n,this.xo=r,this.Oo=i,this.No=s,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(t){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),i=Math.max(0,n-r);i>0&&Ue("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,i,()=>(this.ko=Date.now(),t())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
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
 */class uh{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,l=new uh(t,n,o,i,s);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new we(ye.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xk(e,t){if(oh("AsyncQueue",`${t}: ${e}`),fy(e))return new we(ye.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Mk{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=me.UNAUTHENTICATED,this.clientId=Ok.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Ue("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Ue("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new we(ye.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new fr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=xk(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}/**
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
 */function py(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const kf=new Map;function $k(e,t,n,r){if(t===!0&&r===!0)throw new we(ye.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Uk(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":ah()}function Fk(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new we(ye.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Uk(e);throw new we(ye.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class Cf{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new we(ye.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new we(ye.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}$k("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=py((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new we(ye.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new we(ye.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new we(ye.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class gy{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new we(ye.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new we(ye.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cf(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Sk;switch(r.type){case"firstParty":return new Pk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new we(ye.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=kf.get(n);r&&(Ue("ComponentProvider","Removing Datastore"),kf.delete(n),r.terminate())}(this),Promise.resolve()}}function jk(e,t,n,r={}){var i;const s=(e=Fk(e,gy))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ik("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,a;if(typeof r.mockUserToken=="string")l=r.mockUserToken,a=me.MOCK_USER;else{l=Sw(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new we(ye.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new me(u)}e._authCredentials=new Tk(new dy(l,a))}}/**
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
 */class zk{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new Dk(this,"async_queue_retry"),this.ou=()=>{const n=oa();n&&Ue("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const t=oa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this._u(),this.au(t)}enterRestrictedMode(t){if(!this.eu){this.eu=!0,this.iu=t||!1;const n=oa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(t){if(this._u(),this.eu)return new Promise(()=>{});const n=new fr;return this.au(()=>this.eu&&this.iu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xa.push(t),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(t){if(!fy(t))throw t;Ue("AsyncQueue","Operation failed with retryable error: "+t)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(t){const n=this.Za.then(()=>(this.ru=!0,t().catch(r=>{this.nu=r,this.ru=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw oh("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(t,n,r){this._u(),this.su.indexOf(t)>-1&&(n=0);const i=uh.createAndSchedule(this,t,n,r,s=>this.cu(s));return this.tu.push(i),i}_u(){this.nu&&ah()}verifyOperationInProgress(){}async lu(){let t;do t=this.Za,await t;while(t!==this.Za)}hu(t){for(const n of this.tu)if(n.timerId===t)return!0;return!1}Pu(t){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.lu()})}Iu(t){this.su.push(t)}cu(t){const n=this.tu.indexOf(t);this.tu.splice(n,1)}}class Bk extends gy{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new zk}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Hk(this),this._firestoreClient.terminate()}}function Vk(e,t){const n=typeof e=="object"?e:um(),r=typeof e=="string"?e:t||"(default)",i=Bi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Ew("firestore");s&&jk(i,...s)}return i}function Hk(e){var t,n,r;const i=e._freezeSettings(),s=function(l,a,u,h){return new Lk(l,a,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,py(h.experimentalLongPollingOptions),h.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Mk(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}(function(t,n=!0){(function(i){es=i})(Cr),yt(new ot("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Bk(new kk(r.getProvider("auth-internal")),new Rk(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new we(ye.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Po(u.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Ge(Sf,"4.1.3",t),Ge(Sf,"4.1.3","esm2017")})();const Wk={apiKey:"AIzaSyAVcFBetICuetwA9F4drSRfWxB9d5RYklc",authDomain:"note-fc0fc.firebaseapp.com",projectId:"note-fc0fc",storageBucket:"note-fc0fc.appspot.com",messagingSenderId:"278138305584",appId:"1:278138305584:web:f5a8b50a6421d2edb181f5",measurementId:"G-D5DTC7CZD3"},my=am(Wk);wT(my);const bk=Vk(my);bk.doc;function Kk(){const[e,t]=F.useState(0);return ae.jsxs(ae.Fragment,{children:[ae.jsx("button",{children:ae.jsx(dw,{to:"/signup",children:"Signup"})}),ae.jsxs("div",{children:[ae.jsx("a",{href:"https://vitejs.dev",target:"_blank",children:ae.jsx("img",{src:K1,className:"logo",alt:"Vite logo"})}),ae.jsx("a",{href:"https://react.dev",target:"_blank",children:ae.jsx("img",{src:b1,className:"logo react",alt:"React logo"})})]}),ae.jsx("h1",{children:"Vite + React"}),ae.jsxs("div",{className:"card",children:[ae.jsxs("button",{onClick:()=>t(n=>n+1),children:["count is ",e]}),ae.jsxs("p",{children:["Edit ",ae.jsx("code",{children:"src/App.jsx"})," and save to test HMR"]})]}),ae.jsx("p",{className:"read-the-docs",children:"Click on the Vite and React logos to learn more"})]})}la.createRoot(document.getElementById("root")).render(ae.jsx(xy.StrictMode,{children:ae.jsx(Kk,{})}));
