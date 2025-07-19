import{r as C,g as Ca,u as cn,a as fo,b as po,c as mo,R as Ie,S as wa,d as go,s as vo,_ as xo,C as Ea,e as He,f as Aa,h as dr,E as _o}from"./react-three-B4LP9Cld.js";import{T as Wi,t as yo,u as So,o as Mo,v as bo,w as ri,x as Co,d as Wt,l as wo,D as Eo,Q as $i,R as Ao,c as To,y as Io,z as hr,G as Uo,J as ur}from"./three-zOzVDOJK.js";import{W as Po,S as Do,B as Lo,V as qi}from"./physics-CAiE3dg6.js";import{u as Ta,T as fr,E as pr}from"./animation-KcKVy_Pr.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=e(n);fetch(n.href,i)}})();var Ia={exports:{}},ci={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ro=C,Fo=Symbol.for("react.element"),ko=Symbol.for("react.fragment"),No=Object.prototype.hasOwnProperty,Oo=Ro.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zo={key:!0,ref:!0,__self:!0,__source:!0};function Ua(d,t,e){var r,n={},i=null,o=null;e!==void 0&&(i=""+e),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)No.call(t,r)&&!zo.hasOwnProperty(r)&&(n[r]=t[r]);if(d&&d.defaultProps)for(r in t=d.defaultProps,t)n[r]===void 0&&(n[r]=t[r]);return{$$typeof:Fo,type:d,key:i,ref:o,props:n,_owner:Oo.current}}ci.Fragment=ko;ci.jsx=Ua;ci.jsxs=Ua;Ia.exports=ci;var S=Ia.exports;const mr=d=>{let t;const e=new Set,r=(a,l)=>{const c=typeof a=="function"?a(t):a;if(!Object.is(c,t)){const h=t;t=l??typeof c!="object"?c:Object.assign({},t,c),e.forEach(u=>u(t,h))}},n=()=>t,s={setState:r,getState:n,subscribe:a=>(e.add(a),()=>e.delete(a)),destroy:()=>e.clear()};return t=d(r,n,s),s},Bo=d=>d?mr(d):mr;var Pa={exports:{}},Da={},La={exports:{}},Ra={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ln=C;function Vo(d,t){return d===t&&(d!==0||1/d===1/t)||d!==d&&t!==t}var Ho=typeof Object.is=="function"?Object.is:Vo,Go=ln.useState,jo=ln.useEffect,Wo=ln.useLayoutEffect,$o=ln.useDebugValue;function qo(d,t){var e=t(),r=Go({inst:{value:e,getSnapshot:t}}),n=r[0].inst,i=r[1];return Wo(function(){n.value=e,n.getSnapshot=t,_i(n)&&i({inst:n})},[d,e,t]),jo(function(){return _i(n)&&i({inst:n}),d(function(){_i(n)&&i({inst:n})})},[d]),$o(e),e}function _i(d){var t=d.getSnapshot;d=d.value;try{var e=t();return!Ho(d,e)}catch{return!0}}function Xo(d,t){return t()}var Zo=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Xo:qo;Ra.useSyncExternalStore=ln.useSyncExternalStore!==void 0?ln.useSyncExternalStore:Zo;La.exports=Ra;var Yo=La.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var di=C,Jo=Yo;function Qo(d,t){return d===t&&(d!==0||1/d===1/t)||d!==d&&t!==t}var Ko=typeof Object.is=="function"?Object.is:Qo,ts=Jo.useSyncExternalStore,es=di.useRef,ns=di.useEffect,is=di.useMemo,rs=di.useDebugValue;Da.useSyncExternalStoreWithSelector=function(d,t,e,r,n){var i=es(null);if(i.current===null){var o={hasValue:!1,value:null};i.current=o}else o=i.current;i=is(function(){function a(f){if(!l){if(l=!0,c=f,f=r(f),n!==void 0&&o.hasValue){var p=o.value;if(n(p,f))return h=p}return h=f}if(p=h,Ko(c,f))return p;var g=r(f);return n!==void 0&&n(p,g)?p:(c=f,h=g)}var l=!1,c,h,u=e===void 0?null:e;return[function(){return a(t())},u===null?void 0:function(){return a(u())}]},[t,e,r,n]);var s=ts(d,i[0],i[1]);return ns(function(){o.hasValue=!0,o.value=s},[s]),rs(s),s};Pa.exports=Da;var as=Pa.exports;const os=Ca(as),{useSyncExternalStoreWithSelector:ss}=os;function ls(d,t=d.getState,e){const r=ss(d.subscribe,d.getState,d.getServerState||d.getState,t,e);return C.useDebugValue(r),r}const gr=d=>{const t=typeof d=="function"?Bo(d):d,e=(r,n)=>ls(t,r,n);return Object.assign(e,t),e},cs=d=>d?gr(d):gr;function ds(d,t){if(Object.is(d,t))return!0;if(typeof d!="object"||d===null||typeof t!="object"||t===null)return!1;if(d instanceof Map&&t instanceof Map){if(d.size!==t.size)return!1;for(const[r,n]of d)if(!Object.is(n,t.get(r)))return!1;return!0}if(d instanceof Set&&t instanceof Set){if(d.size!==t.size)return!1;for(const r of d)if(!t.has(r))return!1;return!0}const e=Object.keys(d);if(e.length!==Object.keys(t).length)return!1;for(let r=0;r<e.length;r++)if(!Object.prototype.hasOwnProperty.call(t,e[r])||!Object.is(d[e[r]],t[e[r]]))return!1;return!0}const rr=cs((d,t)=>{function e(){var r;const{accumulated:n,startTime:i,infos:o}=t(),s=(r=t().log)==null?void 0:r.maxMemory,{totalFrames:a,log:l,gl:c,max:h}=n,u={calls:c.calls/a,triangles:c.triangles/a,points:c.points/a,lines:c.lines/a},f={gpu:l.gpu/a,cpu:l.cpu/a,mem:l.mem/a,fps:l.fps/a};return{sessionTime:(window.performance.now()-i)/1e3,infos:o,log:f,gl:u,max:h,maxMemory:s,totalFrames:a}}return{log:null,paused:!1,triggerProgramsUpdate:0,startTime:0,customData:0,fpsLimit:60,overclockingFps:!1,accumulated:{totalFrames:0,gl:{calls:0,triangles:0,points:0,lines:0,counts:0},log:{gpu:0,cpu:0,mem:0,fps:0},max:{gl:{calls:0,triangles:0,points:0,lines:0,counts:0},log:{gpu:0,cpu:0,mem:0,fps:0}}},chart:{data:{fps:[],cpu:[],gpu:[],mem:[]},circularId:0},gl:void 0,objectWithMaterials:null,scene:void 0,programs:new Map,sceneLength:void 0,tab:"infos",getReport:e}}),ie=d=>rr(d,ds);Object.assign(ie,rr);const{getState:ne,setState:$t}=rr;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fa="170",Xi=0,hs=1,us=2,li=1,vr=100,xr=204,_r=205,yr=3,fs=0,ka=300,Sr=1e3,kn=1001,Mr=1002,Zi=1006,ps=1008,ms=1009,gs=1015,vs=1023,xs=3200,_s=3201,Na="",se="srgb",Oa="srgb-linear",za="linear",Yi="srgb",je=7680,br=519,Cr=35044,yi=35048,Nn=2e3,wr=2001;class hi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(e)===-1&&r[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const r=this._listeners;return r[t]!==void 0&&r[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const i=n.indexOf(e);i!==-1&&n.splice(i,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const r=this._listeners[t.type];if(r!==void 0){t.target=this;const n=r.slice(0);for(let i=0,o=n.length;i<o;i++)n[i].call(this,t);t.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Er=1234567;const Ba=Math.PI/180,Va=180/Math.PI;function dn(){const d=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(At[d&255]+At[d>>8&255]+At[d>>16&255]+At[d>>24&255]+"-"+At[t&255]+At[t>>8&255]+"-"+At[t>>16&15|64]+At[t>>24&255]+"-"+At[e&63|128]+At[e>>8&255]+"-"+At[e>>16&255]+At[e>>24&255]+At[r&255]+At[r>>8&255]+At[r>>16&255]+At[r>>24&255]).toLowerCase()}function Ft(d,t,e){return Math.max(t,Math.min(e,d))}function ar(d,t){return(d%t+t)%t}function ys(d,t,e,r,n){return r+(d-t)*(n-r)/(e-t)}function Ss(d,t,e){return d!==t?(e-d)/(t-d):0}function Cn(d,t,e){return(1-e)*d+e*t}function Ms(d,t,e,r){return Cn(d,t,1-Math.exp(-e*r))}function bs(d,t=1){return t-Math.abs(ar(d,t*2)-t)}function Cs(d,t,e){return d<=t?0:d>=e?1:(d=(d-t)/(e-t),d*d*(3-2*d))}function ws(d,t,e){return d<=t?0:d>=e?1:(d=(d-t)/(e-t),d*d*d*(d*(d*6-15)+10))}function Es(d,t){return d+Math.floor(Math.random()*(t-d+1))}function As(d,t){return d+Math.random()*(t-d)}function Ts(d){return d*(.5-Math.random())}function Is(d){d!==void 0&&(Er=d);let t=Er+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Us(d){return d*Ba}function Ps(d){return d*Va}function Ds(d){return(d&d-1)===0&&d!==0}function Ls(d){return Math.pow(2,Math.ceil(Math.log(d)/Math.LN2))}function Rs(d){return Math.pow(2,Math.floor(Math.log(d)/Math.LN2))}function Fs(d,t,e,r,n){const i=Math.cos,o=Math.sin,s=i(e/2),a=o(e/2),l=i((t+r)/2),c=o((t+r)/2),h=i((t-r)/2),u=o((t-r)/2),f=i((r-t)/2),p=o((r-t)/2);switch(n){case"XYX":d.set(s*c,a*h,a*u,s*l);break;case"YZY":d.set(a*u,s*c,a*h,s*l);break;case"ZXZ":d.set(a*h,a*u,s*c,s*l);break;case"XZX":d.set(s*c,a*p,a*f,s*l);break;case"YXY":d.set(a*f,s*c,a*p,s*l);break;case"ZYZ":d.set(a*p,a*f,s*c,s*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function rn(d,t){switch(t.constructor){case Float32Array:return d;case Uint32Array:return d/4294967295;case Uint16Array:return d/65535;case Uint8Array:return d/255;case Int32Array:return Math.max(d/2147483647,-1);case Int16Array:return Math.max(d/32767,-1);case Int8Array:return Math.max(d/127,-1);default:throw new Error("Invalid component type.")}}function Rt(d,t){switch(t.constructor){case Float32Array:return d;case Uint32Array:return Math.round(d*4294967295);case Uint16Array:return Math.round(d*65535);case Uint8Array:return Math.round(d*255);case Int32Array:return Math.round(d*2147483647);case Int16Array:return Math.round(d*32767);case Int8Array:return Math.round(d*127);default:throw new Error("Invalid component type.")}}const ks={DEG2RAD:Ba,RAD2DEG:Va,generateUUID:dn,clamp:Ft,euclideanModulo:ar,mapLinear:ys,inverseLerp:Ss,lerp:Cn,damp:Ms,pingpong:bs,smoothstep:Cs,smootherstep:ws,randInt:Es,randFloat:As,randFloatSpread:Ts,seededRandom:Is,degToRad:Us,radToDeg:Ps,isPowerOfTwo:Ds,ceilPowerOfTwo:Ls,floorPowerOfTwo:Rs,setQuaternionFromProperEuler:Fs,normalize:Rt,denormalize:rn};class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,r=this.y,n=t.elements;return this.x=n[0]*e+n[3]*r+n[6],this.y=n[1]*e+n[4]*r+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(e,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const r=this.dot(t)/e;return Math.acos(Ft(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,r=this.y-t.y;return e*e+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const r=Math.cos(e),n=Math.sin(e),i=this.x-t.x,o=this.y-t.y;return this.x=i*r-o*n+t.x,this.y=i*n+o*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _e{constructor(t,e,r,n,i,o,s,a,l){_e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,r,n,i,o,s,a,l)}set(t,e,r,n,i,o,s,a,l){const c=this.elements;return c[0]=t,c[1]=n,c[2]=s,c[3]=e,c[4]=i,c[5]=a,c[6]=r,c[7]=o,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,r=t.elements;return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],this}extractBasis(t,e,r){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const r=t.elements,n=e.elements,i=this.elements,o=r[0],s=r[3],a=r[6],l=r[1],c=r[4],h=r[7],u=r[2],f=r[5],p=r[8],g=n[0],m=n[3],v=n[6],x=n[1],_=n[4],y=n[7],M=n[2],E=n[5],b=n[8];return i[0]=o*g+s*x+a*M,i[3]=o*m+s*_+a*E,i[6]=o*v+s*y+a*b,i[1]=l*g+c*x+h*M,i[4]=l*m+c*_+h*E,i[7]=l*v+c*y+h*b,i[2]=u*g+f*x+p*M,i[5]=u*m+f*_+p*E,i[8]=u*v+f*y+p*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],r=t[1],n=t[2],i=t[3],o=t[4],s=t[5],a=t[6],l=t[7],c=t[8];return e*o*c-e*s*l-r*i*c+r*s*a+n*i*l-n*o*a}invert(){const t=this.elements,e=t[0],r=t[1],n=t[2],i=t[3],o=t[4],s=t[5],a=t[6],l=t[7],c=t[8],h=c*o-s*l,u=s*a-c*i,f=l*i-o*a,p=e*h+r*u+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/p;return t[0]=h*g,t[1]=(n*l-c*r)*g,t[2]=(s*r-n*o)*g,t[3]=u*g,t[4]=(c*e-n*a)*g,t[5]=(n*i-s*e)*g,t[6]=f*g,t[7]=(r*a-l*e)*g,t[8]=(o*e-r*i)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,r,n,i,o,s){const a=Math.cos(i),l=Math.sin(i);return this.set(r*a,r*l,-r*(a*o+l*s)+o+t,-n*l,n*a,-n*(-l*o+a*s)+s+e,0,0,1),this}scale(t,e){return this.premultiply(Si.makeScale(t,e)),this}rotate(t){return this.premultiply(Si.makeRotation(-t)),this}translate(t,e){return this.premultiply(Si.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),r=Math.sin(t);return this.set(e,-r,0,r,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,r=t.elements;for(let n=0;n<9;n++)if(e[n]!==r[n])return!1;return!0}fromArray(t,e=0){for(let r=0;r<9;r++)this.elements[r]=t[r+e];return this}toArray(t=[],e=0){const r=this.elements;return t[e]=r[0],t[e+1]=r[1],t[e+2]=r[2],t[e+3]=r[3],t[e+4]=r[4],t[e+5]=r[5],t[e+6]=r[6],t[e+7]=r[7],t[e+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Si=new _e;function Ns(d){for(let t=d.length-1;t>=0;--t)if(d[t]>=65535)return!0;return!1}function Ar(d){return document.createElementNS("http://www.w3.org/1999/xhtml",d)}const te={enabled:!0,workingColorSpace:Oa,spaces:{},convert:function(d,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Yi&&(d.r=ve(d.r),d.g=ve(d.g),d.b=ve(d.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(d.applyMatrix3(this.spaces[t].toXYZ),d.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Yi&&(d.r=sn(d.r),d.g=sn(d.g),d.b=sn(d.b))),d},fromWorkingColorSpace:function(d,t){return this.convert(d,this.workingColorSpace,t)},toWorkingColorSpace:function(d,t){return this.convert(d,t,this.workingColorSpace)},getPrimaries:function(d){return this.spaces[d].primaries},getTransfer:function(d){return d===Na?za:this.spaces[d].transfer},getLuminanceCoefficients:function(d,t=this.workingColorSpace){return d.fromArray(this.spaces[t].luminanceCoefficients)},define:function(d){Object.assign(this.spaces,d)},_getMatrix:function(d,t,e){return d.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(d){return this.spaces[d].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(d=this.workingColorSpace){return this.spaces[d].workingColorSpaceConfig.unpackColorSpace}};function ve(d){return d<.04045?d*.0773993808:Math.pow(d*.9478672986+.0521327014,2.4)}function sn(d){return d<.0031308?d*12.92:1.055*Math.pow(d,.41666)-.055}const Tr=[.64,.33,.3,.6,.15,.06],Ir=[.2126,.7152,.0722],Ur=[.3127,.329],Pr=new _e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dr=new _e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[Oa]:{primaries:Tr,whitePoint:Ur,transfer:za,toXYZ:Pr,fromXYZ:Dr,luminanceCoefficients:Ir,workingColorSpaceConfig:{unpackColorSpace:se},outputColorSpaceConfig:{drawingBufferColorSpace:se}},[se]:{primaries:Tr,whitePoint:Ur,transfer:Yi,toXYZ:Pr,fromXYZ:Dr,luminanceCoefficients:Ir,outputColorSpaceConfig:{drawingBufferColorSpace:se}}});let We;class Os{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{We===void 0&&(We=Ar("canvas")),We.width=t.width,We.height=t.height;const r=We.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),e=We}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ar("canvas");e.width=t.width,e.height=t.height;const r=e.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const n=r.getImageData(0,0,t.width,t.height),i=n.data;for(let o=0;o<i.length;o++)i[o]=ve(i[o]/255)*255;return r.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let r=0;r<e.length;r++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[r]=Math.floor(ve(e[r]/255)*255):e[r]=ve(e[r]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zs=0;class Bs{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zs++}),this.uuid=dn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let i;if(Array.isArray(n)){i=[];for(let o=0,s=n.length;o<s;o++)n[o].isDataTexture?i.push(Mi(n[o].image)):i.push(Mi(n[o]))}else i=Mi(n);r.url=i}return e||(t.images[this.uuid]=r),r}}function Mi(d){return typeof HTMLImageElement<"u"&&d instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&d instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&d instanceof ImageBitmap?Os.getDataURL(d):d.data?{data:Array.from(d.data),width:d.width,height:d.height,type:d.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vs=0;class Ue extends hi{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,r=kn,n=kn,i=Zi,o=ps,s=vs,a=ms,l=Ue.DEFAULT_ANISOTROPY,c=Na){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vs++}),this.uuid=dn(),this.name="",this.source=new Bs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=i,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=a,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),e||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ka)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sr:t.x=t.x-Math.floor(t.x);break;case kn:t.x=t.x<0?0:1;break;case Mr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sr:t.y=t.y-Math.floor(t.y);break;case kn:t.y=t.y<0?0:1;break;case Mr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=ka;Ue.DEFAULT_ANISOTROPY=1;class Ve{constructor(t=0,e=0,r=0,n=1){Ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=r,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,r,n){return this.x=t,this.y=e,this.z=r,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,r=this.y,n=this.z,i=this.w,o=t.elements;return this.x=o[0]*e+o[4]*r+o[8]*n+o[12]*i,this.y=o[1]*e+o[5]*r+o[9]*n+o[13]*i,this.z=o[2]*e+o[6]*r+o[10]*n+o[14]*i,this.w=o[3]*e+o[7]*r+o[11]*n+o[15]*i,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,r,n,i;const a=t.elements,l=a[0],c=a[4],h=a[8],u=a[1],f=a[5],p=a[9],g=a[2],m=a[6],v=a[10];if(Math.abs(c-u)<.01&&Math.abs(h-g)<.01&&Math.abs(p-m)<.01){if(Math.abs(c+u)<.1&&Math.abs(h+g)<.1&&Math.abs(p+m)<.1&&Math.abs(l+f+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,y=(f+1)/2,M=(v+1)/2,E=(c+u)/4,b=(h+g)/4,A=(p+m)/4;return _>y&&_>M?_<.01?(r=0,n=.707106781,i=.707106781):(r=Math.sqrt(_),n=E/r,i=b/r):y>M?y<.01?(r=.707106781,n=0,i=.707106781):(n=Math.sqrt(y),r=E/n,i=A/n):M<.01?(r=.707106781,n=.707106781,i=0):(i=Math.sqrt(M),r=b/i,n=A/i),this.set(r,n,i,e),this}let x=Math.sqrt((m-p)*(m-p)+(h-g)*(h-g)+(u-c)*(u-c));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(h-g)/x,this.z=(u-c)/x,this.w=Math.acos((l+f+v-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(e,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this.z=t.z+(e.z-t.z)*r,this.w=t.w+(e.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tn{constructor(t=0,e=0,r=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=r,this._w=n}static slerpFlat(t,e,r,n,i,o,s){let a=r[n+0],l=r[n+1],c=r[n+2],h=r[n+3];const u=i[o+0],f=i[o+1],p=i[o+2],g=i[o+3];if(s===0){t[e+0]=a,t[e+1]=l,t[e+2]=c,t[e+3]=h;return}if(s===1){t[e+0]=u,t[e+1]=f,t[e+2]=p,t[e+3]=g;return}if(h!==g||a!==u||l!==f||c!==p){let m=1-s;const v=a*u+l*f+c*p+h*g,x=v>=0?1:-1,_=1-v*v;if(_>Number.EPSILON){const M=Math.sqrt(_),E=Math.atan2(M,v*x);m=Math.sin(m*E)/M,s=Math.sin(s*E)/M}const y=s*x;if(a=a*m+u*y,l=l*m+f*y,c=c*m+p*y,h=h*m+g*y,m===1-s){const M=1/Math.sqrt(a*a+l*l+c*c+h*h);a*=M,l*=M,c*=M,h*=M}}t[e]=a,t[e+1]=l,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,r,n,i,o){const s=r[n],a=r[n+1],l=r[n+2],c=r[n+3],h=i[o],u=i[o+1],f=i[o+2],p=i[o+3];return t[e]=s*p+c*h+a*f-l*u,t[e+1]=a*p+c*u+l*h-s*f,t[e+2]=l*p+c*f+s*u-a*h,t[e+3]=c*p-s*h-a*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,r,n){return this._x=t,this._y=e,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const r=t._x,n=t._y,i=t._z,o=t._order,s=Math.cos,a=Math.sin,l=s(r/2),c=s(n/2),h=s(i/2),u=a(r/2),f=a(n/2),p=a(i/2);switch(o){case"XYZ":this._x=u*c*h+l*f*p,this._y=l*f*h-u*c*p,this._z=l*c*p+u*f*h,this._w=l*c*h-u*f*p;break;case"YXZ":this._x=u*c*h+l*f*p,this._y=l*f*h-u*c*p,this._z=l*c*p-u*f*h,this._w=l*c*h+u*f*p;break;case"ZXY":this._x=u*c*h-l*f*p,this._y=l*f*h+u*c*p,this._z=l*c*p+u*f*h,this._w=l*c*h-u*f*p;break;case"ZYX":this._x=u*c*h-l*f*p,this._y=l*f*h+u*c*p,this._z=l*c*p-u*f*h,this._w=l*c*h+u*f*p;break;case"YZX":this._x=u*c*h+l*f*p,this._y=l*f*h+u*c*p,this._z=l*c*p-u*f*h,this._w=l*c*h-u*f*p;break;case"XZY":this._x=u*c*h-l*f*p,this._y=l*f*h-u*c*p,this._z=l*c*p+u*f*h,this._w=l*c*h+u*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const r=e/2,n=Math.sin(r);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,r=e[0],n=e[4],i=e[8],o=e[1],s=e[5],a=e[9],l=e[2],c=e[6],h=e[10],u=r+s+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(c-a)*f,this._y=(i-l)*f,this._z=(o-n)*f}else if(r>s&&r>h){const f=2*Math.sqrt(1+r-s-h);this._w=(c-a)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(i+l)/f}else if(s>h){const f=2*Math.sqrt(1+s-r-h);this._w=(i-l)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(a+c)/f}else{const f=2*Math.sqrt(1+h-r-s);this._w=(o-n)/f,this._x=(i+l)/f,this._y=(a+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let r=t.dot(e)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ft(this.dot(t),-1,1)))}rotateTowards(t,e){const r=this.angleTo(t);if(r===0)return this;const n=Math.min(1,e/r);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const r=t._x,n=t._y,i=t._z,o=t._w,s=e._x,a=e._y,l=e._z,c=e._w;return this._x=r*c+o*s+n*l-i*a,this._y=n*c+o*a+i*s-r*l,this._z=i*c+o*l+r*a-n*s,this._w=o*c-r*s-n*a-i*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const r=this._x,n=this._y,i=this._z,o=this._w;let s=o*t._w+r*t._x+n*t._y+i*t._z;if(s<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,s=-s):this.copy(t),s>=1)return this._w=o,this._x=r,this._y=n,this._z=i,this;const a=1-s*s;if(a<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*r+e*this._x,this._y=f*n+e*this._y,this._z=f*i+e*this._z,this.normalize(),this}const l=Math.sqrt(a),c=Math.atan2(l,s),h=Math.sin((1-e)*c)/l,u=Math.sin(e*c)/l;return this._w=o*h+this._w*u,this._x=r*h+this._x*u,this._y=n*h+this._y*u,this._z=i*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,r){return this.copy(t).slerp(e,r)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),r=Math.random(),n=Math.sqrt(1-r),i=Math.sqrt(r);return this.set(n*Math.sin(t),n*Math.cos(t),i*Math.sin(e),i*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,r=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=r}set(t,e,r){return r===void 0&&(r=this.z),this.x=t,this.y=e,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lr.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lr.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,r=this.y,n=this.z,i=t.elements;return this.x=i[0]*e+i[3]*r+i[6]*n,this.y=i[1]*e+i[4]*r+i[7]*n,this.z=i[2]*e+i[5]*r+i[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,r=this.y,n=this.z,i=t.elements,o=1/(i[3]*e+i[7]*r+i[11]*n+i[15]);return this.x=(i[0]*e+i[4]*r+i[8]*n+i[12])*o,this.y=(i[1]*e+i[5]*r+i[9]*n+i[13])*o,this.z=(i[2]*e+i[6]*r+i[10]*n+i[14])*o,this}applyQuaternion(t){const e=this.x,r=this.y,n=this.z,i=t.x,o=t.y,s=t.z,a=t.w,l=2*(o*n-s*r),c=2*(s*e-i*n),h=2*(i*r-o*e);return this.x=e+a*l+o*h-s*c,this.y=r+a*c+s*l-i*h,this.z=n+a*h+i*c-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,r=this.y,n=this.z,i=t.elements;return this.x=i[0]*e+i[4]*r+i[8]*n,this.y=i[1]*e+i[5]*r+i[9]*n,this.z=i[2]*e+i[6]*r+i[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(e,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this.z=t.z+(e.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const r=t.x,n=t.y,i=t.z,o=e.x,s=e.y,a=e.z;return this.x=n*a-i*s,this.y=i*o-r*a,this.z=r*s-n*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const r=t.dot(this)/e;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return bi.copy(this).projectOnVector(t),this.sub(bi)}reflect(t){return this.sub(bi.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const r=this.dot(t)/e;return Math.acos(Ft(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,r=this.y-t.y,n=this.z-t.z;return e*e+r*r+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,r){const n=Math.sin(e)*t;return this.x=n*Math.sin(r),this.y=Math.cos(e)*t,this.z=n*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,r){return this.x=t*Math.sin(e),this.y=r,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=r,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,r=Math.sqrt(1-e*e);return this.x=r*Math.cos(t),this.y=e,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bi=new D,Lr=new Tn;class Ge{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,r=t.length;e<r;e+=3)this.expandByPoint(re.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,r=t.count;e<r;e++)this.expandByPoint(re.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,r=t.length;e<r;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const r=re.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const i=r.getAttribute("position");if(e===!0&&i!==void 0&&t.isInstancedMesh!==!0)for(let o=0,s=i.count;o<s;o++)t.isMesh===!0?t.getVertexPosition(o,re):re.fromBufferAttribute(i,o),re.applyMatrix4(t.matrixWorld),this.expandByPoint(re);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),On.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),On.copy(r.boundingBox)),On.applyMatrix4(t.matrixWorld),this.union(On)}const n=t.children;for(let i=0,o=n.length;i<o;i++)this.expandByObject(n[i],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,re),re.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,r;return t.normal.x>0?(e=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),e<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mn),zn.subVectors(this.max,mn),$e.subVectors(t.a,mn),qe.subVectors(t.b,mn),Xe.subVectors(t.c,mn),Ce.subVectors(qe,$e),we.subVectors(Xe,qe),Le.subVectors($e,Xe);let e=[0,-Ce.z,Ce.y,0,-we.z,we.y,0,-Le.z,Le.y,Ce.z,0,-Ce.x,we.z,0,-we.x,Le.z,0,-Le.x,-Ce.y,Ce.x,0,-we.y,we.x,0,-Le.y,Le.x,0];return!Ci(e,$e,qe,Xe,zn)||(e=[1,0,0,0,1,0,0,0,1],!Ci(e,$e,qe,Xe,zn))?!1:(Bn.crossVectors(Ce,we),e=[Bn.x,Bn.y,Bn.z],Ci(e,$e,qe,Xe,zn))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,re).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(re).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ue[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ue[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ue[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ue[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ue[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ue[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ue[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ue[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ue),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ue=[new D,new D,new D,new D,new D,new D,new D,new D],re=new D,On=new Ge,$e=new D,qe=new D,Xe=new D,Ce=new D,we=new D,Le=new D,mn=new D,zn=new D,Bn=new D,Re=new D;function Ci(d,t,e,r,n){for(let i=0,o=d.length-3;i<=o;i+=3){Re.fromArray(d,i);const s=n.x*Math.abs(Re.x)+n.y*Math.abs(Re.y)+n.z*Math.abs(Re.z),a=t.dot(Re),l=e.dot(Re),c=r.dot(Re);if(Math.max(-Math.max(a,l,c),Math.min(a,l,c))>s)return!1}return!0}const Hs=new Ge,gn=new D,wi=new D;class ui{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const r=this.center;e!==void 0?r.copy(e):Hs.setFromPoints(t).getCenter(r);let n=0;for(let i=0,o=t.length;i<o;i++)n=Math.max(n,r.distanceToSquared(t[i]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const r=this.center.distanceToSquared(t);return e.copy(t),r>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gn.subVectors(t,this.center);const e=gn.lengthSq();if(e>this.radius*this.radius){const r=Math.sqrt(e),n=(r-this.radius)*.5;this.center.addScaledVector(gn,n/r),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wi.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gn.copy(t.center).add(wi)),this.expandByPoint(gn.copy(t.center).sub(wi))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fe=new D,Ei=new D,Vn=new D,Ee=new D,Ai=new D,Hn=new D,Ti=new D;class Ha{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fe)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const r=e.dot(this.direction);return r<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=fe.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fe.copy(this.origin).addScaledVector(this.direction,e),fe.distanceToSquared(t))}distanceSqToSegment(t,e,r,n){Ei.copy(t).add(e).multiplyScalar(.5),Vn.copy(e).sub(t).normalize(),Ee.copy(this.origin).sub(Ei);const i=t.distanceTo(e)*.5,o=-this.direction.dot(Vn),s=Ee.dot(this.direction),a=-Ee.dot(Vn),l=Ee.lengthSq(),c=Math.abs(1-o*o);let h,u,f,p;if(c>0)if(h=o*a-s,u=o*s-a,p=i*c,h>=0)if(u>=-p)if(u<=p){const g=1/c;h*=g,u*=g,f=h*(h+o*u+2*s)+u*(o*h+u+2*a)+l}else u=i,h=Math.max(0,-(o*u+s)),f=-h*h+u*(u+2*a)+l;else u=-i,h=Math.max(0,-(o*u+s)),f=-h*h+u*(u+2*a)+l;else u<=-p?(h=Math.max(0,-(-o*i+s)),u=h>0?-i:Math.min(Math.max(-i,-a),i),f=-h*h+u*(u+2*a)+l):u<=p?(h=0,u=Math.min(Math.max(-i,-a),i),f=u*(u+2*a)+l):(h=Math.max(0,-(o*i+s)),u=h>0?i:Math.min(Math.max(-i,-a),i),f=-h*h+u*(u+2*a)+l);else u=o>0?-i:i,h=Math.max(0,-(o*u+s)),f=-h*h+u*(u+2*a)+l;return r&&r.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(Ei).addScaledVector(Vn,u),f}intersectSphere(t,e){fe.subVectors(t.center,this.origin);const r=fe.dot(this.direction),n=fe.dot(fe)-r*r,i=t.radius*t.radius;if(n>i)return null;const o=Math.sqrt(i-n),s=r-o,a=r+o;return a<0?null:s<0?this.at(a,e):this.at(s,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/e;return r>=0?r:null}intersectPlane(t,e){const r=this.distanceToPlane(t);return r===null?null:this.at(r,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let r,n,i,o,s,a;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(r=(t.min.x-u.x)*l,n=(t.max.x-u.x)*l):(r=(t.max.x-u.x)*l,n=(t.min.x-u.x)*l),c>=0?(i=(t.min.y-u.y)*c,o=(t.max.y-u.y)*c):(i=(t.max.y-u.y)*c,o=(t.min.y-u.y)*c),r>o||i>n||((i>r||isNaN(r))&&(r=i),(o<n||isNaN(n))&&(n=o),h>=0?(s=(t.min.z-u.z)*h,a=(t.max.z-u.z)*h):(s=(t.max.z-u.z)*h,a=(t.min.z-u.z)*h),r>a||s>n)||((s>r||r!==r)&&(r=s),(a<n||n!==n)&&(n=a),n<0)?null:this.at(r>=0?r:n,e)}intersectsBox(t){return this.intersectBox(t,fe)!==null}intersectTriangle(t,e,r,n,i){Ai.subVectors(e,t),Hn.subVectors(r,t),Ti.crossVectors(Ai,Hn);let o=this.direction.dot(Ti),s;if(o>0){if(n)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Ee.subVectors(this.origin,t);const a=s*this.direction.dot(Hn.crossVectors(Ee,Hn));if(a<0)return null;const l=s*this.direction.dot(Ai.cross(Ee));if(l<0||a+l>o)return null;const c=-s*Ee.dot(Ti);return c<0?null:this.at(c/o,i)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(t,e,r,n,i,o,s,a,l,c,h,u,f,p,g,m){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,r,n,i,o,s,a,l,c,h,u,f,p,g,m)}set(t,e,r,n,i,o,s,a,l,c,h,u,f,p,g,m){const v=this.elements;return v[0]=t,v[4]=e,v[8]=r,v[12]=n,v[1]=i,v[5]=o,v[9]=s,v[13]=a,v[2]=l,v[6]=c,v[10]=h,v[14]=u,v[3]=f,v[7]=p,v[11]=g,v[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(t){const e=this.elements,r=t.elements;return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],e[9]=r[9],e[10]=r[10],e[11]=r[11],e[12]=r[12],e[13]=r[13],e[14]=r[14],e[15]=r[15],this}copyPosition(t){const e=this.elements,r=t.elements;return e[12]=r[12],e[13]=r[13],e[14]=r[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,r){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,e,r){return this.set(t.x,e.x,r.x,0,t.y,e.y,r.y,0,t.z,e.z,r.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,r=t.elements,n=1/Ze.setFromMatrixColumn(t,0).length(),i=1/Ze.setFromMatrixColumn(t,1).length(),o=1/Ze.setFromMatrixColumn(t,2).length();return e[0]=r[0]*n,e[1]=r[1]*n,e[2]=r[2]*n,e[3]=0,e[4]=r[4]*i,e[5]=r[5]*i,e[6]=r[6]*i,e[7]=0,e[8]=r[8]*o,e[9]=r[9]*o,e[10]=r[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,r=t.x,n=t.y,i=t.z,o=Math.cos(r),s=Math.sin(r),a=Math.cos(n),l=Math.sin(n),c=Math.cos(i),h=Math.sin(i);if(t.order==="XYZ"){const u=o*c,f=o*h,p=s*c,g=s*h;e[0]=a*c,e[4]=-a*h,e[8]=l,e[1]=f+p*l,e[5]=u-g*l,e[9]=-s*a,e[2]=g-u*l,e[6]=p+f*l,e[10]=o*a}else if(t.order==="YXZ"){const u=a*c,f=a*h,p=l*c,g=l*h;e[0]=u+g*s,e[4]=p*s-f,e[8]=o*l,e[1]=o*h,e[5]=o*c,e[9]=-s,e[2]=f*s-p,e[6]=g+u*s,e[10]=o*a}else if(t.order==="ZXY"){const u=a*c,f=a*h,p=l*c,g=l*h;e[0]=u-g*s,e[4]=-o*h,e[8]=p+f*s,e[1]=f+p*s,e[5]=o*c,e[9]=g-u*s,e[2]=-o*l,e[6]=s,e[10]=o*a}else if(t.order==="ZYX"){const u=o*c,f=o*h,p=s*c,g=s*h;e[0]=a*c,e[4]=p*l-f,e[8]=u*l+g,e[1]=a*h,e[5]=g*l+u,e[9]=f*l-p,e[2]=-l,e[6]=s*a,e[10]=o*a}else if(t.order==="YZX"){const u=o*a,f=o*l,p=s*a,g=s*l;e[0]=a*c,e[4]=g-u*h,e[8]=p*h+f,e[1]=h,e[5]=o*c,e[9]=-s*c,e[2]=-l*c,e[6]=f*h+p,e[10]=u-g*h}else if(t.order==="XZY"){const u=o*a,f=o*l,p=s*a,g=s*l;e[0]=a*c,e[4]=-h,e[8]=l*c,e[1]=u*h+g,e[5]=o*c,e[9]=f*h-p,e[2]=p*h-f,e[6]=s*c,e[10]=g*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gs,t,js)}lookAt(t,e,r){const n=this.elements;return Gt.subVectors(t,e),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Ae.crossVectors(r,Gt),Ae.lengthSq()===0&&(Math.abs(r.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Ae.crossVectors(r,Gt)),Ae.normalize(),Gn.crossVectors(Gt,Ae),n[0]=Ae.x,n[4]=Gn.x,n[8]=Gt.x,n[1]=Ae.y,n[5]=Gn.y,n[9]=Gt.y,n[2]=Ae.z,n[6]=Gn.z,n[10]=Gt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const r=t.elements,n=e.elements,i=this.elements,o=r[0],s=r[4],a=r[8],l=r[12],c=r[1],h=r[5],u=r[9],f=r[13],p=r[2],g=r[6],m=r[10],v=r[14],x=r[3],_=r[7],y=r[11],M=r[15],E=n[0],b=n[4],A=n[8],P=n[12],T=n[1],N=n[5],w=n[9],I=n[13],U=n[2],z=n[6],k=n[10],R=n[14],O=n[3],H=n[7],V=n[11],L=n[15];return i[0]=o*E+s*T+a*U+l*O,i[4]=o*b+s*N+a*z+l*H,i[8]=o*A+s*w+a*k+l*V,i[12]=o*P+s*I+a*R+l*L,i[1]=c*E+h*T+u*U+f*O,i[5]=c*b+h*N+u*z+f*H,i[9]=c*A+h*w+u*k+f*V,i[13]=c*P+h*I+u*R+f*L,i[2]=p*E+g*T+m*U+v*O,i[6]=p*b+g*N+m*z+v*H,i[10]=p*A+g*w+m*k+v*V,i[14]=p*P+g*I+m*R+v*L,i[3]=x*E+_*T+y*U+M*O,i[7]=x*b+_*N+y*z+M*H,i[11]=x*A+_*w+y*k+M*V,i[15]=x*P+_*I+y*R+M*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],r=t[4],n=t[8],i=t[12],o=t[1],s=t[5],a=t[9],l=t[13],c=t[2],h=t[6],u=t[10],f=t[14],p=t[3],g=t[7],m=t[11],v=t[15];return p*(+i*a*h-n*l*h-i*s*u+r*l*u+n*s*f-r*a*f)+g*(+e*a*f-e*l*u+i*o*u-n*o*f+n*l*c-i*a*c)+m*(+e*l*h-e*s*f-i*o*h+r*o*f+i*s*c-r*l*c)+v*(-n*s*c-e*a*h+e*s*u+n*o*h-r*o*u+r*a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,r){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=r),this}invert(){const t=this.elements,e=t[0],r=t[1],n=t[2],i=t[3],o=t[4],s=t[5],a=t[6],l=t[7],c=t[8],h=t[9],u=t[10],f=t[11],p=t[12],g=t[13],m=t[14],v=t[15],x=h*m*l-g*u*l+g*a*f-s*m*f-h*a*v+s*u*v,_=p*u*l-c*m*l-p*a*f+o*m*f+c*a*v-o*u*v,y=c*g*l-p*h*l+p*s*f-o*g*f-c*s*v+o*h*v,M=p*h*a-c*g*a-p*s*u+o*g*u+c*s*m-o*h*m,E=e*x+r*_+n*y+i*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=x*b,t[1]=(g*u*i-h*m*i-g*n*f+r*m*f+h*n*v-r*u*v)*b,t[2]=(s*m*i-g*a*i+g*n*l-r*m*l-s*n*v+r*a*v)*b,t[3]=(h*a*i-s*u*i-h*n*l+r*u*l+s*n*f-r*a*f)*b,t[4]=_*b,t[5]=(c*m*i-p*u*i+p*n*f-e*m*f-c*n*v+e*u*v)*b,t[6]=(p*a*i-o*m*i-p*n*l+e*m*l+o*n*v-e*a*v)*b,t[7]=(o*u*i-c*a*i+c*n*l-e*u*l-o*n*f+e*a*f)*b,t[8]=y*b,t[9]=(p*h*i-c*g*i-p*r*f+e*g*f+c*r*v-e*h*v)*b,t[10]=(o*g*i-p*s*i+p*r*l-e*g*l-o*r*v+e*s*v)*b,t[11]=(c*s*i-o*h*i-c*r*l+e*h*l+o*r*f-e*s*f)*b,t[12]=M*b,t[13]=(c*g*n-p*h*n+p*r*u-e*g*u-c*r*m+e*h*m)*b,t[14]=(p*s*n-o*g*n-p*r*a+e*g*a+o*r*m-e*s*m)*b,t[15]=(o*h*n-c*s*n+c*r*a-e*h*a-o*r*u+e*s*u)*b,this}scale(t){const e=this.elements,r=t.x,n=t.y,i=t.z;return e[0]*=r,e[4]*=n,e[8]*=i,e[1]*=r,e[5]*=n,e[9]*=i,e[2]*=r,e[6]*=n,e[10]*=i,e[3]*=r,e[7]*=n,e[11]*=i,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,r,n))}makeTranslation(t,e,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,r,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,e,-r,0,0,r,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),r=Math.sin(t);return this.set(e,0,r,0,0,1,0,0,-r,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),r=Math.sin(t);return this.set(e,-r,0,0,r,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const r=Math.cos(e),n=Math.sin(e),i=1-r,o=t.x,s=t.y,a=t.z,l=i*o,c=i*s;return this.set(l*o+r,l*s-n*a,l*a+n*s,0,l*s+n*a,c*s+r,c*a-n*o,0,l*a-n*s,c*a+n*o,i*a*a+r,0,0,0,0,1),this}makeScale(t,e,r){return this.set(t,0,0,0,0,e,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,e,r,n,i,o){return this.set(1,r,i,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,r){const n=this.elements,i=e._x,o=e._y,s=e._z,a=e._w,l=i+i,c=o+o,h=s+s,u=i*l,f=i*c,p=i*h,g=o*c,m=o*h,v=s*h,x=a*l,_=a*c,y=a*h,M=r.x,E=r.y,b=r.z;return n[0]=(1-(g+v))*M,n[1]=(f+y)*M,n[2]=(p-_)*M,n[3]=0,n[4]=(f-y)*E,n[5]=(1-(u+v))*E,n[6]=(m+x)*E,n[7]=0,n[8]=(p+_)*b,n[9]=(m-x)*b,n[10]=(1-(u+g))*b,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,r){const n=this.elements;let i=Ze.set(n[0],n[1],n[2]).length();const o=Ze.set(n[4],n[5],n[6]).length(),s=Ze.set(n[8],n[9],n[10]).length();this.determinant()<0&&(i=-i),t.x=n[12],t.y=n[13],t.z=n[14],ae.copy(this);const l=1/i,c=1/o,h=1/s;return ae.elements[0]*=l,ae.elements[1]*=l,ae.elements[2]*=l,ae.elements[4]*=c,ae.elements[5]*=c,ae.elements[6]*=c,ae.elements[8]*=h,ae.elements[9]*=h,ae.elements[10]*=h,e.setFromRotationMatrix(ae),r.x=i,r.y=o,r.z=s,this}makePerspective(t,e,r,n,i,o,s=Nn){const a=this.elements,l=2*i/(e-t),c=2*i/(r-n),h=(e+t)/(e-t),u=(r+n)/(r-n);let f,p;if(s===Nn)f=-(o+i)/(o-i),p=-2*o*i/(o-i);else if(s===wr)f=-o/(o-i),p=-o*i/(o-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,r,n,i,o,s=Nn){const a=this.elements,l=1/(e-t),c=1/(r-n),h=1/(o-i),u=(e+t)*l,f=(r+n)*c;let p,g;if(s===Nn)p=(o+i)*h,g=-2*h;else if(s===wr)p=i*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=g,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,r=t.elements;for(let n=0;n<16;n++)if(e[n]!==r[n])return!1;return!0}fromArray(t,e=0){for(let r=0;r<16;r++)this.elements[r]=t[r+e];return this}toArray(t=[],e=0){const r=this.elements;return t[e]=r[0],t[e+1]=r[1],t[e+2]=r[2],t[e+3]=r[3],t[e+4]=r[4],t[e+5]=r[5],t[e+6]=r[6],t[e+7]=r[7],t[e+8]=r[8],t[e+9]=r[9],t[e+10]=r[10],t[e+11]=r[11],t[e+12]=r[12],t[e+13]=r[13],t[e+14]=r[14],t[e+15]=r[15],t}}const Ze=new D,ae=new Xt,Gs=new D(0,0,0),js=new D(1,1,1),Ae=new D,Gn=new D,Gt=new D,Rr=new Xt,Fr=new Tn;class In{constructor(t=0,e=0,r=0,n=In.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=r,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,r,n=this._order){return this._x=t,this._y=e,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,r=!0){const n=t.elements,i=n[0],o=n[4],s=n[8],a=n[1],l=n[5],c=n[9],h=n[2],u=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Ft(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,i)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(s,f),this._z=Math.atan2(a,l)):(this._y=Math.atan2(-h,i),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(a,i));break;case"ZYX":this._y=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(a,i)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,i)):(this._x=0,this._y=Math.atan2(s,f));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(s,i)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,r){return Rr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rr,e,r)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fr.setFromEuler(this),this.setFromQuaternion(Fr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class Ws{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let $s=0;const kr=new D,Ye=new Tn,pe=new Xt,jn=new D,vn=new D,qs=new D,Xs=new Tn,Nr=new D(1,0,0),Or=new D(0,1,0),zr=new D(0,0,1),Br={type:"added"},Zs={type:"removed"},Je={type:"childadded",child:null},Ii={type:"childremoved",child:null};class Ct extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$s++}),this.uuid=dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const t=new D,e=new In,r=new Tn,n=new D(1,1,1);function i(){r.setFromEuler(e,!1)}function o(){e.setFromQuaternion(r,void 0,!1)}e._onChange(i),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Xt},normalMatrix:{value:new _e}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ye.setFromAxisAngle(t,e),this.quaternion.multiply(Ye),this}rotateOnWorldAxis(t,e){return Ye.setFromAxisAngle(t,e),this.quaternion.premultiply(Ye),this}rotateX(t){return this.rotateOnAxis(Nr,t)}rotateY(t){return this.rotateOnAxis(Or,t)}rotateZ(t){return this.rotateOnAxis(zr,t)}translateOnAxis(t,e){return kr.copy(t).applyQuaternion(this.quaternion),this.position.add(kr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nr,t)}translateY(t){return this.translateOnAxis(Or,t)}translateZ(t){return this.translateOnAxis(zr,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pe.copy(this.matrixWorld).invert())}lookAt(t,e,r){t.isVector3?jn.copy(t):jn.set(t,e,r);const n=this.parent;this.updateWorldMatrix(!0,!1),vn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pe.lookAt(vn,jn,this.up):pe.lookAt(jn,vn,this.up),this.quaternion.setFromRotationMatrix(pe),n&&(pe.extractRotation(n.matrixWorld),Ye.setFromRotationMatrix(pe),this.quaternion.premultiply(Ye.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Br),Je.child=t,this.dispatchEvent(Je),Je.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zs),Ii.child=t,this.dispatchEvent(Ii),Ii.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pe.multiply(t.parent.matrixWorld)),t.applyMatrix4(pe),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Br),Je.child=t,this.dispatchEvent(Je),Je.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let r=0,n=this.children.length;r<n;r++){const o=this.children[r].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,r=[]){this[t]===e&&r.push(this);const n=this.children;for(let i=0,o=n.length;i<o;i++)n[i].getObjectsByProperty(t,e,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vn,t,qs),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vn,Xs,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let r=0,n=e.length;r<n;r++)e[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let r=0,n=e.length;r<n;r++)e[r].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let r=0,n=e.length;r<n;r++)e[r].updateMatrixWorld(t)}updateWorldMatrix(t,e){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let i=0,o=n.length;i<o;i++)n[i].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",r={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function i(s,a){return s[a.uuid]===void 0&&(s[a.uuid]=a.toJSON(t)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=i(t.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const a=s.shapes;if(Array.isArray(a))for(let l=0,c=a.length;l<c;l++){const h=a[l];i(t.shapes,h)}else i(t.shapes,a)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let a=0,l=this.material.length;a<l;a++)s.push(i(t.materials,this.material[a]));n.material=s}else n.material=i(t.materials,this.material);if(this.children.length>0){n.children=[];for(let s=0;s<this.children.length;s++)n.children.push(this.children[s].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let s=0;s<this.animations.length;s++){const a=this.animations[s];n.animations.push(i(t.animations,a))}}if(e){const s=o(t.geometries),a=o(t.materials),l=o(t.textures),c=o(t.images),h=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);s.length>0&&(r.geometries=s),a.length>0&&(r.materials=a),l.length>0&&(r.textures=l),c.length>0&&(r.images=c),h.length>0&&(r.shapes=h),u.length>0&&(r.skeletons=u),f.length>0&&(r.animations=f),p.length>0&&(r.nodes=p)}return r.object=n,r;function o(s){const a=[];for(const l in s){const c=s[l];delete c.metadata,a.push(c)}return a}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let r=0;r<t.children.length;r++){const n=t.children[r];this.add(n.clone())}return this}}Ct.DEFAULT_UP=new D(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oe=new D,me=new D,Ui=new D,ge=new D,Qe=new D,Ke=new D,Vr=new D,Pi=new D,Di=new D,Li=new D,Ri=new Ve,Fi=new Ve,ki=new Ve;class le{constructor(t=new D,e=new D,r=new D){this.a=t,this.b=e,this.c=r}static getNormal(t,e,r,n){n.subVectors(r,e),oe.subVectors(t,e),n.cross(oe);const i=n.lengthSq();return i>0?n.multiplyScalar(1/Math.sqrt(i)):n.set(0,0,0)}static getBarycoord(t,e,r,n,i){oe.subVectors(n,e),me.subVectors(r,e),Ui.subVectors(t,e);const o=oe.dot(oe),s=oe.dot(me),a=oe.dot(Ui),l=me.dot(me),c=me.dot(Ui),h=o*l-s*s;if(h===0)return i.set(0,0,0),null;const u=1/h,f=(l*a-s*c)*u,p=(o*c-s*a)*u;return i.set(1-f-p,p,f)}static containsPoint(t,e,r,n){return this.getBarycoord(t,e,r,n,ge)===null?!1:ge.x>=0&&ge.y>=0&&ge.x+ge.y<=1}static getInterpolation(t,e,r,n,i,o,s,a){return this.getBarycoord(t,e,r,n,ge)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(i,ge.x),a.addScaledVector(o,ge.y),a.addScaledVector(s,ge.z),a)}static getInterpolatedAttribute(t,e,r,n,i,o){return Ri.setScalar(0),Fi.setScalar(0),ki.setScalar(0),Ri.fromBufferAttribute(t,e),Fi.fromBufferAttribute(t,r),ki.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(Ri,i.x),o.addScaledVector(Fi,i.y),o.addScaledVector(ki,i.z),o}static isFrontFacing(t,e,r,n){return oe.subVectors(r,e),me.subVectors(t,e),oe.cross(me).dot(n)<0}set(t,e,r){return this.a.copy(t),this.b.copy(e),this.c.copy(r),this}setFromPointsAndIndices(t,e,r,n){return this.a.copy(t[e]),this.b.copy(t[r]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,r,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return oe.subVectors(this.c,this.b),me.subVectors(this.a,this.b),oe.cross(me).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return le.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return le.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,r,n,i){return le.getInterpolation(t,this.a,this.b,this.c,e,r,n,i)}containsPoint(t){return le.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return le.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const r=this.a,n=this.b,i=this.c;let o,s;Qe.subVectors(n,r),Ke.subVectors(i,r),Pi.subVectors(t,r);const a=Qe.dot(Pi),l=Ke.dot(Pi);if(a<=0&&l<=0)return e.copy(r);Di.subVectors(t,n);const c=Qe.dot(Di),h=Ke.dot(Di);if(c>=0&&h<=c)return e.copy(n);const u=a*h-c*l;if(u<=0&&a>=0&&c<=0)return o=a/(a-c),e.copy(r).addScaledVector(Qe,o);Li.subVectors(t,i);const f=Qe.dot(Li),p=Ke.dot(Li);if(p>=0&&f<=p)return e.copy(i);const g=f*l-a*p;if(g<=0&&l>=0&&p<=0)return s=l/(l-p),e.copy(r).addScaledVector(Ke,s);const m=c*p-f*h;if(m<=0&&h-c>=0&&f-p>=0)return Vr.subVectors(i,n),s=(h-c)/(h-c+(f-p)),e.copy(n).addScaledVector(Vr,s);const v=1/(m+g+u);return o=g*v,s=u*v,e.copy(r).addScaledVector(Qe,o).addScaledVector(Ke,s)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ga={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Te={h:0,s:0,l:0},Wn={h:0,s:0,l:0};function Ni(d,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?d+(t-d)*6*e:e<1/2?t:e<2/3?d+(t-d)*6*(2/3-e):d}class ye{constructor(t,e,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,r)}set(t,e,r){if(e===void 0&&r===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,r,n=te.workingColorSpace){return this.r=t,this.g=e,this.b=r,te.toWorkingColorSpace(this,n),this}setHSL(t,e,r,n=te.workingColorSpace){if(t=ar(t,1),e=Ft(e,0,1),r=Ft(r,0,1),e===0)this.r=this.g=this.b=r;else{const i=r<=.5?r*(1+e):r+e-r*e,o=2*r-i;this.r=Ni(o,i,t+1/3),this.g=Ni(o,i,t),this.b=Ni(o,i,t-1/3)}return te.toWorkingColorSpace(this,n),this}setStyle(t,e=se){function r(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let i;const o=n[1],s=n[2];switch(o){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,e);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,e);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const i=n[1],o=i.length;if(o===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(i,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=se){const r=Ga[t.toLowerCase()];return r!==void 0?this.setHex(r,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ve(t.r),this.g=ve(t.g),this.b=ve(t.b),this}copyLinearToSRGB(t){return this.r=sn(t.r),this.g=sn(t.g),this.b=sn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=se){return te.fromWorkingColorSpace(Tt.copy(this),t),Math.round(Ft(Tt.r*255,0,255))*65536+Math.round(Ft(Tt.g*255,0,255))*256+Math.round(Ft(Tt.b*255,0,255))}getHexString(t=se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Tt.copy(this),e);const r=Tt.r,n=Tt.g,i=Tt.b,o=Math.max(r,n,i),s=Math.min(r,n,i);let a,l;const c=(s+o)/2;if(s===o)a=0,l=0;else{const h=o-s;switch(l=c<=.5?h/(o+s):h/(2-o-s),o){case r:a=(n-i)/h+(n<i?6:0);break;case n:a=(i-r)/h+2;break;case i:a=(r-n)/h+4;break}a/=6}return t.h=a,t.s=l,t.l=c,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Tt.copy(this),e),t.r=Tt.r,t.g=Tt.g,t.b=Tt.b,t}getStyle(t=se){te.fromWorkingColorSpace(Tt.copy(this),t);const e=Tt.r,r=Tt.g,n=Tt.b;return t!==se?`color(${t} ${e.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(t,e,r){return this.getHSL(Te),this.setHSL(Te.h+t,Te.s+e,Te.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,r){return this.r=t.r+(e.r-t.r)*r,this.g=t.g+(e.g-t.g)*r,this.b=t.b+(e.b-t.b)*r,this}lerpHSL(t,e){this.getHSL(Te),t.getHSL(Wn);const r=Cn(Te.h,Wn.h,e),n=Cn(Te.s,Wn.s,e),i=Cn(Te.l,Wn.l,e);return this.setHSL(r,n,i),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,r=this.g,n=this.b,i=t.elements;return this.r=i[0]*e+i[3]*r+i[6]*n,this.g=i[1]*e+i[4]*r+i[7]*n,this.b=i[2]*e+i[5]*r+i[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new ye;ye.NAMES=Ga;let Ys=0;class fi extends hi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ys++}),this.uuid=dn(),this.name="",this.blending=li,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xr,this.blendDst=_r,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=br,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=je,this.stencilZFail=je,this.stencilZPass=je,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const r=t[e];if(r===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[e]=r}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==li&&(r.blending=this.blending),this.side!==Xi&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==xr&&(r.blendSrc=this.blendSrc),this.blendDst!==_r&&(r.blendDst=this.blendDst),this.blendEquation!==vr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==yr&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==br&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==je&&(r.stencilFail=this.stencilFail),this.stencilZFail!==je&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==je&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(i){const o=[];for(const s in i){const a=i[s];delete a.metadata,o.push(a)}return o}if(e){const i=n(t.textures),o=n(t.images);i.length>0&&(r.textures=i),o.length>0&&(r.images=o)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let r=null;if(e!==null){const n=e.length;r=new Array(n);for(let i=0;i!==n;++i)r[i]=e[i].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ja extends fi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=fs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ft=new D,$n=new kt;class Ne{constructor(t,e,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=r,this.usage=Cr,this.updateRanges=[],this.gpuType=gs,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,r){t*=this.itemSize,r*=e.itemSize;for(let n=0,i=this.itemSize;n<i;n++)this.array[t+n]=e.array[r+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,r=this.count;e<r;e++)$n.fromBufferAttribute(this,e),$n.applyMatrix3(t),this.setXY(e,$n.x,$n.y);else if(this.itemSize===3)for(let e=0,r=this.count;e<r;e++)ft.fromBufferAttribute(this,e),ft.applyMatrix3(t),this.setXYZ(e,ft.x,ft.y,ft.z);return this}applyMatrix4(t){for(let e=0,r=this.count;e<r;e++)ft.fromBufferAttribute(this,e),ft.applyMatrix4(t),this.setXYZ(e,ft.x,ft.y,ft.z);return this}applyNormalMatrix(t){for(let e=0,r=this.count;e<r;e++)ft.fromBufferAttribute(this,e),ft.applyNormalMatrix(t),this.setXYZ(e,ft.x,ft.y,ft.z);return this}transformDirection(t){for(let e=0,r=this.count;e<r;e++)ft.fromBufferAttribute(this,e),ft.transformDirection(t),this.setXYZ(e,ft.x,ft.y,ft.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let r=this.array[t*this.itemSize+e];return this.normalized&&(r=rn(r,this.array)),r}setComponent(t,e,r){return this.normalized&&(r=Rt(r,this.array)),this.array[t*this.itemSize+e]=r,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Rt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Rt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Rt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Rt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,r){return t*=this.itemSize,this.normalized&&(e=Rt(e,this.array),r=Rt(r,this.array)),this.array[t+0]=e,this.array[t+1]=r,this}setXYZ(t,e,r,n){return t*=this.itemSize,this.normalized&&(e=Rt(e,this.array),r=Rt(r,this.array),n=Rt(n,this.array)),this.array[t+0]=e,this.array[t+1]=r,this.array[t+2]=n,this}setXYZW(t,e,r,n,i){return t*=this.itemSize,this.normalized&&(e=Rt(e,this.array),r=Rt(r,this.array),n=Rt(n,this.array),i=Rt(i,this.array)),this.array[t+0]=e,this.array[t+1]=r,this.array[t+2]=n,this.array[t+3]=i,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Cr&&(t.usage=this.usage),t}}class Js extends Ne{constructor(t,e,r){super(new Uint16Array(t),e,r)}}class Qs extends Ne{constructor(t,e,r){super(new Uint32Array(t),e,r)}}class ai extends Ne{constructor(t,e,r){super(new Float32Array(t),e,r)}}let Ks=0;const Qt=new Xt,Oi=new Ct,tn=new D,jt=new Ge,xn=new Ge,vt=new D;class hn extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ks++}),this.uuid=dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ns(t)?Qs:Js)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,r=0){this.groups.push({start:t,count:e,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const i=new _e().getNormalMatrix(t);r.applyNormalMatrix(i),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qt.makeRotationFromQuaternion(t),this.applyMatrix4(Qt),this}rotateX(t){return Qt.makeRotationX(t),this.applyMatrix4(Qt),this}rotateY(t){return Qt.makeRotationY(t),this.applyMatrix4(Qt),this}rotateZ(t){return Qt.makeRotationZ(t),this.applyMatrix4(Qt),this}translate(t,e,r){return Qt.makeTranslation(t,e,r),this.applyMatrix4(Qt),this}scale(t,e,r){return Qt.makeScale(t,e,r),this.applyMatrix4(Qt),this}lookAt(t){return Oi.lookAt(t),Oi.updateMatrix(),this.applyMatrix4(Oi.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tn).negate(),this.translate(tn.x,tn.y,tn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const r=[];for(let n=0,i=t.length;n<i;n++){const o=t[n];r.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ai(r,3))}else{for(let r=0,n=e.count;r<n;r++){const i=t[r];e.setXYZ(r,i.x,i.y,i.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ge);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let r=0,n=e.length;r<n;r++){const i=e[r];jt.setFromBufferAttribute(i),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const r=this.boundingSphere.center;if(jt.setFromBufferAttribute(t),e)for(let i=0,o=e.length;i<o;i++){const s=e[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(jt.min,xn.min),jt.expandByPoint(vt),vt.addVectors(jt.max,xn.max),jt.expandByPoint(vt)):(jt.expandByPoint(xn.min),jt.expandByPoint(xn.max))}jt.getCenter(r);let n=0;for(let i=0,o=t.count;i<o;i++)vt.fromBufferAttribute(t,i),n=Math.max(n,r.distanceToSquared(vt));if(e)for(let i=0,o=e.length;i<o;i++){const s=e[i],a=this.morphTargetsRelative;for(let l=0,c=s.count;l<c;l++)vt.fromBufferAttribute(s,l),a&&(tn.fromBufferAttribute(t,l),vt.add(tn)),n=Math.max(n,r.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.position,n=e.normal,i=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*r.count),4));const o=this.getAttribute("tangent"),s=[],a=[];for(let A=0;A<r.count;A++)s[A]=new D,a[A]=new D;const l=new D,c=new D,h=new D,u=new kt,f=new kt,p=new kt,g=new D,m=new D;function v(A,P,T){l.fromBufferAttribute(r,A),c.fromBufferAttribute(r,P),h.fromBufferAttribute(r,T),u.fromBufferAttribute(i,A),f.fromBufferAttribute(i,P),p.fromBufferAttribute(i,T),c.sub(l),h.sub(l),f.sub(u),p.sub(u);const N=1/(f.x*p.y-p.x*f.y);isFinite(N)&&(g.copy(c).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(N),m.copy(h).multiplyScalar(f.x).addScaledVector(c,-p.x).multiplyScalar(N),s[A].add(g),s[P].add(g),s[T].add(g),a[A].add(m),a[P].add(m),a[T].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let A=0,P=x.length;A<P;++A){const T=x[A],N=T.start,w=T.count;for(let I=N,U=N+w;I<U;I+=3)v(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const _=new D,y=new D,M=new D,E=new D;function b(A){M.fromBufferAttribute(n,A),E.copy(M);const P=s[A];_.copy(P),_.sub(M.multiplyScalar(M.dot(P))).normalize(),y.crossVectors(E,P);const N=y.dot(a[A])<0?-1:1;o.setXYZW(A,_.x,_.y,_.z,N)}for(let A=0,P=x.length;A<P;++A){const T=x[A],N=T.start,w=T.count;for(let I=N,U=N+w;I<U;I+=3)b(t.getX(I+0)),b(t.getX(I+1)),b(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",r);else for(let u=0,f=r.count;u<f;u++)r.setXYZ(u,0,0,0);const n=new D,i=new D,o=new D,s=new D,a=new D,l=new D,c=new D,h=new D;if(t)for(let u=0,f=t.count;u<f;u+=3){const p=t.getX(u+0),g=t.getX(u+1),m=t.getX(u+2);n.fromBufferAttribute(e,p),i.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),c.subVectors(o,i),h.subVectors(n,i),c.cross(h),s.fromBufferAttribute(r,p),a.fromBufferAttribute(r,g),l.fromBufferAttribute(r,m),s.add(c),a.add(c),l.add(c),r.setXYZ(p,s.x,s.y,s.z),r.setXYZ(g,a.x,a.y,a.z),r.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)n.fromBufferAttribute(e,u+0),i.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),c.subVectors(o,i),h.subVectors(n,i),c.cross(h),r.setXYZ(u+0,c.x,c.y,c.z),r.setXYZ(u+1,c.x,c.y,c.z),r.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,r=t.count;e<r;e++)vt.fromBufferAttribute(t,e),vt.normalize(),t.setXYZ(e,vt.x,vt.y,vt.z)}toNonIndexed(){function t(s,a){const l=s.array,c=s.itemSize,h=s.normalized,u=new l.constructor(a.length*c);let f=0,p=0;for(let g=0,m=a.length;g<m;g++){s.isInterleavedBufferAttribute?f=a[g]*s.data.stride+s.offset:f=a[g]*c;for(let v=0;v<c;v++)u[p++]=l[f++]}return new Ne(u,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new hn,r=this.index.array,n=this.attributes;for(const s in n){const a=n[s],l=t(a,r);e.setAttribute(s,l)}const i=this.morphAttributes;for(const s in i){const a=[],l=i[s];for(let c=0,h=l.length;c<h;c++){const u=l[c],f=t(u,r);a.push(f)}e.morphAttributes[s]=a}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,a=o.length;s<a;s++){const l=o[s];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const l in a)a[l]!==void 0&&(t[l]=a[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const r=this.attributes;for(const a in r){const l=r[a];t.data.attributes[a]=l.toJSON(t.data)}const n={};let i=!1;for(const a in this.morphAttributes){const l=this.morphAttributes[a],c=[];for(let h=0,u=l.length;h<u;h++){const f=l[h];c.push(f.toJSON(t.data))}c.length>0&&(n[a]=c,i=!0)}i&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(t.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(e));const n=t.attributes;for(const l in n){const c=n[l];this.setAttribute(l,c.clone(e))}const i=t.morphAttributes;for(const l in i){const c=[],h=i[l];for(let u=0,f=h.length;u<f;u++)c.push(h[u].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,c=o.length;l<c;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const s=t.boundingBox;s!==null&&(this.boundingBox=s.clone());const a=t.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hr=new Xt,Fe=new Ha,qn=new ui,Gr=new D,Xn=new D,Zn=new D,Yn=new D,zi=new D,Jn=new D,jr=new D,Qn=new D;class pi extends Ct{constructor(t=new hn,e=new ja){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const n=e[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=n.length;i<o;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}getVertexPosition(t,e){const r=this.geometry,n=r.attributes.position,i=r.morphAttributes.position,o=r.morphTargetsRelative;e.fromBufferAttribute(n,t);const s=this.morphTargetInfluences;if(i&&s){Jn.set(0,0,0);for(let a=0,l=i.length;a<l;a++){const c=s[a],h=i[a];c!==0&&(zi.fromBufferAttribute(h,t),o?Jn.addScaledVector(zi,c):Jn.addScaledVector(zi.sub(e),c))}e.add(Jn)}return e}raycast(t,e){const r=this.geometry,n=this.material,i=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),qn.copy(r.boundingSphere),qn.applyMatrix4(i),Fe.copy(t.ray).recast(t.near),!(qn.containsPoint(Fe.origin)===!1&&(Fe.intersectSphere(qn,Gr)===null||Fe.origin.distanceToSquared(Gr)>(t.far-t.near)**2))&&(Hr.copy(i).invert(),Fe.copy(t.ray).applyMatrix4(Hr),!(r.boundingBox!==null&&Fe.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,e,Fe)))}_computeIntersections(t,e,r){let n;const i=this.geometry,o=this.material,s=i.index,a=i.attributes.position,l=i.attributes.uv,c=i.attributes.uv1,h=i.attributes.normal,u=i.groups,f=i.drawRange;if(s!==null)if(Array.isArray(o))for(let p=0,g=u.length;p<g;p++){const m=u[p],v=o[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(s.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,M=_;y<M;y+=3){const E=s.getX(y),b=s.getX(y+1),A=s.getX(y+2);n=Kn(this,v,t,r,l,c,h,E,b,A),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const p=Math.max(0,f.start),g=Math.min(s.count,f.start+f.count);for(let m=p,v=g;m<v;m+=3){const x=s.getX(m),_=s.getX(m+1),y=s.getX(m+2);n=Kn(this,o,t,r,l,c,h,x,_,y),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(a!==void 0)if(Array.isArray(o))for(let p=0,g=u.length;p<g;p++){const m=u[p],v=o[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,M=_;y<M;y+=3){const E=y,b=y+1,A=y+2;n=Kn(this,v,t,r,l,c,h,E,b,A),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const p=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=p,v=g;m<v;m+=3){const x=m,_=m+1,y=m+2;n=Kn(this,o,t,r,l,c,h,x,_,y),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function tl(d,t,e,r,n,i,o,s){let a;if(t.side===hs?a=r.intersectTriangle(o,i,n,!0,s):a=r.intersectTriangle(n,i,o,t.side===Xi,s),a===null)return null;Qn.copy(s),Qn.applyMatrix4(d.matrixWorld);const l=e.ray.origin.distanceTo(Qn);return l<e.near||l>e.far?null:{distance:l,point:Qn.clone(),object:d}}function Kn(d,t,e,r,n,i,o,s,a,l){d.getVertexPosition(s,Xn),d.getVertexPosition(a,Zn),d.getVertexPosition(l,Yn);const c=tl(d,t,e,r,Xn,Zn,Yn,jr);if(c){const h=new D;le.getBarycoord(jr,Xn,Zn,Yn,h),n&&(c.uv=le.getInterpolatedAttribute(n,s,a,l,h,new kt)),i&&(c.uv1=le.getInterpolatedAttribute(i,s,a,l,h,new kt)),o&&(c.normal=le.getInterpolatedAttribute(o,s,a,l,h,new D),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));const u={a:s,b:a,c:l,normal:new D,materialIndex:0};le.getNormal(Xn,Zn,Yn,u.normal),c.face=u,c.barycoord=h}return c}function Wa(d){const t={};for(const e in d){t[e]={};for(const r in d[e]){const n=d[e][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][r]=null):t[e][r]=n.clone():Array.isArray(n)?t[e][r]=n.slice():t[e][r]=n}}return t}function el(d){const t={};for(let e=0;e<d.length;e++){const r=Wa(d[e]);for(const n in r)t[n]=r[n]}return t}const nl={clone:Wa,merge:el};class Un extends hn{constructor(t=1,e=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:r,heightSegments:n};const i=t/2,o=e/2,s=Math.floor(r),a=Math.floor(n),l=s+1,c=a+1,h=t/s,u=e/a,f=[],p=[],g=[],m=[];for(let v=0;v<c;v++){const x=v*u-o;for(let _=0;_<l;_++){const y=_*h-i;p.push(y,-x,0),g.push(0,0,1),m.push(_/s),m.push(1-v/a)}}for(let v=0;v<a;v++)for(let x=0;x<s;x++){const _=x+l*v,y=x+l*(v+1),M=x+1+l*(v+1),E=x+1+l*v;f.push(_,y,E),f.push(y,M,E)}this.setIndex(f),this.setAttribute("position",new ai(p,3)),this.setAttribute("normal",new ai(g,3)),this.setAttribute("uv",new ai(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Un(t.width,t.height,t.widthSegments,t.heightSegments)}}var il=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rl=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,al=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ol=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sl=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ll=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hl=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ul=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ml=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gl=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vl=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_l=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ml=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,El=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Al=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tl=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Il=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ul=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ll="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rl=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nl=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ol=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jl=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$l=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ql=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xl=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zl=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Yl=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jl=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ql=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kl=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ec=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nc=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ic=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ac=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oc=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sc=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lc=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uc=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gc=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xc=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_c=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sc=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ec=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ac=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ic=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Uc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pc=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Oc=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zc=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vc=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gc=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wc=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$c=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zc=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yc=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jc=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,td=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ed=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,id=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ad=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ld=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,md=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_d=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Md=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ed=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ad=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Td=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Id=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ud=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ld=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Rd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kd={alphahash_fragment:il,alphahash_pars_fragment:rl,alphamap_fragment:al,alphamap_pars_fragment:ol,alphatest_fragment:sl,alphatest_pars_fragment:ll,aomap_fragment:cl,aomap_pars_fragment:dl,batching_pars_vertex:hl,batching_vertex:ul,begin_vertex:fl,beginnormal_vertex:pl,bsdfs:ml,iridescence_fragment:gl,bumpmap_pars_fragment:vl,clipping_planes_fragment:xl,clipping_planes_pars_fragment:_l,clipping_planes_pars_vertex:yl,clipping_planes_vertex:Sl,color_fragment:Ml,color_pars_fragment:bl,color_pars_vertex:Cl,color_vertex:wl,common:El,cube_uv_reflection_fragment:Al,defaultnormal_vertex:Tl,displacementmap_pars_vertex:Il,displacementmap_vertex:Ul,emissivemap_fragment:Pl,emissivemap_pars_fragment:Dl,colorspace_fragment:Ll,colorspace_pars_fragment:Rl,envmap_fragment:Fl,envmap_common_pars_fragment:kl,envmap_pars_fragment:Nl,envmap_pars_vertex:Ol,envmap_physical_pars_fragment:Zl,envmap_vertex:zl,fog_vertex:Bl,fog_pars_vertex:Vl,fog_fragment:Hl,fog_pars_fragment:Gl,gradientmap_pars_fragment:jl,lightmap_pars_fragment:Wl,lights_lambert_fragment:$l,lights_lambert_pars_fragment:ql,lights_pars_begin:Xl,lights_toon_fragment:Yl,lights_toon_pars_fragment:Jl,lights_phong_fragment:Ql,lights_phong_pars_fragment:Kl,lights_physical_fragment:tc,lights_physical_pars_fragment:ec,lights_fragment_begin:nc,lights_fragment_maps:ic,lights_fragment_end:rc,logdepthbuf_fragment:ac,logdepthbuf_pars_fragment:oc,logdepthbuf_pars_vertex:sc,logdepthbuf_vertex:lc,map_fragment:cc,map_pars_fragment:dc,map_particle_fragment:hc,map_particle_pars_fragment:uc,metalnessmap_fragment:fc,metalnessmap_pars_fragment:pc,morphinstance_vertex:mc,morphcolor_vertex:gc,morphnormal_vertex:vc,morphtarget_pars_vertex:xc,morphtarget_vertex:_c,normal_fragment_begin:yc,normal_fragment_maps:Sc,normal_pars_fragment:Mc,normal_pars_vertex:bc,normal_vertex:Cc,normalmap_pars_fragment:wc,clearcoat_normal_fragment_begin:Ec,clearcoat_normal_fragment_maps:Ac,clearcoat_pars_fragment:Tc,iridescence_pars_fragment:Ic,opaque_fragment:Uc,packing:Pc,premultiplied_alpha_fragment:Dc,project_vertex:Lc,dithering_fragment:Rc,dithering_pars_fragment:Fc,roughnessmap_fragment:kc,roughnessmap_pars_fragment:Nc,shadowmap_pars_fragment:Oc,shadowmap_pars_vertex:zc,shadowmap_vertex:Bc,shadowmask_pars_fragment:Vc,skinbase_vertex:Hc,skinning_pars_vertex:Gc,skinning_vertex:jc,skinnormal_vertex:Wc,specularmap_fragment:$c,specularmap_pars_fragment:qc,tonemapping_fragment:Xc,tonemapping_pars_fragment:Zc,transmission_fragment:Yc,transmission_pars_fragment:Jc,uv_pars_fragment:Qc,uv_pars_vertex:Kc,uv_vertex:td,worldpos_vertex:ed,background_vert:nd,background_frag:id,backgroundCube_vert:rd,backgroundCube_frag:ad,cube_vert:od,cube_frag:sd,depth_vert:ld,depth_frag:cd,distanceRGBA_vert:dd,distanceRGBA_frag:hd,equirect_vert:ud,equirect_frag:fd,linedashed_vert:pd,linedashed_frag:md,meshbasic_vert:gd,meshbasic_frag:vd,meshlambert_vert:xd,meshlambert_frag:_d,meshmatcap_vert:yd,meshmatcap_frag:Sd,meshnormal_vert:Md,meshnormal_frag:bd,meshphong_vert:Cd,meshphong_frag:wd,meshphysical_vert:Ed,meshphysical_frag:Ad,meshtoon_vert:Td,meshtoon_frag:Id,points_vert:Ud,points_frag:Pd,shadow_vert:Dd,shadow_frag:Ld,sprite_vert:Rd,sprite_frag:Fd};class Nd extends fi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=xs,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Od extends fi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class zd extends Ne{constructor(t,e,r,n=1){super(t,e,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}class Bd extends fi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Wr=new Xt,Ji=new Ha,ti=new ui,ei=new D;class Vd extends Ct{constructor(t=new hn,e=new Bd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const r=this.geometry,n=this.matrixWorld,i=t.params.Points.threshold,o=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),ti.copy(r.boundingSphere),ti.applyMatrix4(n),ti.radius+=i,t.ray.intersectsSphere(ti)===!1)return;Wr.copy(n).invert(),Ji.copy(t.ray).applyMatrix4(Wr);const s=i/((this.scale.x+this.scale.y+this.scale.z)/3),a=s*s,l=r.index,h=r.attributes.position;if(l!==null){const u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let p=u,g=f;p<g;p++){const m=l.getX(p);ei.fromBufferAttribute(h,m),$r(ei,m,a,n,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let p=u,g=f;p<g;p++)ei.fromBufferAttribute(h,p),$r(ei,p,a,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const n=e[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,o=n.length;i<o;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}}function $r(d,t,e,r,n,i,o){const s=Ji.distanceSqToPoint(d);if(s<e){const a=new D;Ji.closestPointToPoint(d,a),a.applyMatrix4(r);const l=n.ray.origin.distanceTo(a);if(l<n.near||l>n.far)return;i.push({distance:l,distanceToRay:Math.sqrt(s),point:a,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Hd extends hn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fa);const ee={value:0,fpsLimit:60,isOverLimit:0},_n=d=>(d==null?void 0:d.reduce((t,e)=>t+e,0))/d.length;class Gd{constructor(t={}){this.names=[""],this.finished=[],this.paused=!1,this.overClock=!1,this.queryHasResult=!1,this.queryCreated=!1,this.isWebGL2=!0,this.memAccums=[],this.gpuAccums=[],this.activeAccums=[],this.logsAccums={mem:[],gpu:[],cpu:[],fps:[],fpsFixed:[]},this.fpsChart=[],this.gpuChart=[],this.cpuChart=[],this.memChart=[],this.paramLogger=()=>{},this.glFinish=()=>{},this.chartLogger=()=>{},this.chartLen=60,this.logsPerSecond=10,this.maxMemory=1500,this.chartHz=10,this.startCpuProfiling=!1,this.lastCalculateFixed=0,this.chartFrame=0,this.gpuTimeProcess=0,this.chartTime=0,this.activeQueries=0,this.circularId=0,this.detected=0,this.frameId=0,this.rafId=0,this.idleCbId=0,this.checkQueryId=0,this.uuid=void 0,this.currentCpu=0,this.currentMem=0,this.paramFrame=0,this.paramTime=0,this.now=()=>{},this.t0=0,window.GLPerf=window.GLPerf||{},Object.assign(this,t),this.fpsChart=new Array(this.chartLen).fill(0),this.gpuChart=new Array(this.chartLen).fill(0),this.cpuChart=new Array(this.chartLen).fill(0),this.memChart=new Array(this.chartLen).fill(0),this.now=()=>window.performance&&window.performance.now?window.performance.now():Date.now(),this.initGpu(),this.is120hz()}initGpu(){this.uuid=ks.generateUUID(),this.gl&&(this.isWebGL2=!0,this.extension||(this.extension=this.gl.getExtension("EXT_disjoint_timer_query_webgl2")),this.extension===null&&(this.isWebGL2=!1))}is120hz(){let t=0;const e=r=>{++t<20?this.rafId=window.requestAnimationFrame(e):(this.detected=Math.ceil(1e3*t/(r-this.t0)/70),window.cancelAnimationFrame(this.rafId)),this.t0||(this.t0=r)};this.rafId=window.requestAnimationFrame(e)}addUI(t){this.names.indexOf(t)===-1&&(this.names.push(t),this.gpuAccums.push(0),this.activeAccums.push(!1))}nextFps(t){const e=16.666666666666668,r=e-t.timeRemaining(),n=e*ee.fpsLimit/10/r;n<0||(ee.value=n,ee.isOverLimit<25?ee.isOverLimit++:$t({overclockingFps:!0}))}nextFrame(t){this.frameId++;const e=t||this.now();let r=e-this.paramTime,n=0;if(this.frameId<=1)this.paramFrame=this.frameId,this.paramTime=e;else if(e>=this.paramTime){this.maxMemory=window.performance.memory?window.performance.memory.jsHeapSizeLimit/1048576:0;const i=this.frameId-this.paramFrame,o=i*1e3/r,s=ne().overclockingFps?ee.value:o;if(n=this.isWebGL2?this.gpuAccums[0]:this.gpuAccums[0]/r,this.isWebGL2?this.gpuAccums[0]=0:Promise.all(this.finished).then(()=>{this.gpuAccums[0]=0,this.finished=[]}),this.currentMem=Math.round(window.performance&&window.performance.memory?window.performance.memory.usedJSHeapSize/1048576:0),window.performance&&this.startCpuProfiling){window.performance.mark("cpu-finished");const a=performance.measure("cpu-duration","cpu-started","cpu-finished");this.currentCpu=(a==null?void 0:a.duration)||0,this.logsAccums.cpu.push(this.currentCpu),this.startCpuProfiling=!1}this.logsAccums.mem.push(this.currentMem),this.logsAccums.fpsFixed.push(o),this.logsAccums.fps.push(s),this.logsAccums.gpu.push(n),this.overClock&&typeof window.requestIdleCallback<"u"&&(ee.isOverLimit>0&&s>o?ee.isOverLimit--:ne().overclockingFps&&$t({overclockingFps:!1})),e>=this.paramTime+1e3/this.logsPerSecond&&(this.paramLogger({cpu:_n(this.logsAccums.cpu),gpu:_n(this.logsAccums.gpu),mem:_n(this.logsAccums.mem),fps:_n(this.logsAccums.fps),duration:Math.round(r),maxMemory:this.maxMemory,frameCount:i}),this.logsAccums.mem=[],this.logsAccums.fps=[],this.logsAccums.gpu=[],this.logsAccums.cpu=[],this.paramFrame=this.frameId,this.paramTime=e),this.overClock&&e-this.lastCalculateFixed>=2*1e3&&(this.lastCalculateFixed=t,ee.fpsLimit=Math.round(_n(this.logsAccums.fpsFixed)/10)*100,$t({fpsLimit:ee.fpsLimit/10}),this.logsAccums.fpsFixed=[],this.paramFrame=this.frameId,this.paramTime=e)}if(!this.detected||!this.chartFrame)this.chartFrame=this.frameId,this.chartTime=e,this.circularId=0;else{const i=e-this.chartTime;let o=this.chartHz*i/1e3;for(;--o>0&&this.detected;){const a=(this.frameId-this.chartFrame)/i*1e3,l=ne().overclockingFps?ee.value:a;this.fpsChart[this.circularId%this.chartLen]=l;const c=1e3/this.currentMem,h=this.currentCpu,u=(this.isWebGL2?this.gpuAccums[1]*2:Math.round(this.gpuAccums[1]/r*100))+4;u>0&&(this.gpuChart[this.circularId%this.chartLen]=u),h>0&&(this.cpuChart[this.circularId%this.chartLen]=h),c>0&&(this.memChart[this.circularId%this.chartLen]=c);for(let f=0;f<this.names.length;f++)this.chartLogger({i:f,data:{fps:this.fpsChart,gpu:this.gpuChart,cpu:this.cpuChart,mem:this.memChart},circularId:this.circularId});this.circularId++,this.chartFrame=this.frameId,this.chartTime=e}}}startGpu(){const t=this.gl,e=this.extension;if(!(!t||!e)&&this.isWebGL2){let r=!1,n,i;if(this.query){this.queryHasResult=!1;let o=this.query;if(r=t.getQueryParameter(o,t.QUERY_RESULT_AVAILABLE),n=t.getParameter(e.GPU_DISJOINT_EXT),r&&!n){i=t.getQueryParameter(this.query,t.QUERY_RESULT);const s=i*1e-6;(r||n)&&(t.deleteQuery(this.query),o=null),r&&s>0&&(n||this.activeAccums.forEach((a,l)=>{this.gpuAccums[l]=s}))}}(r||!this.query)&&(this.queryCreated=!0,this.query=t.createQuery(),t.beginQuery(e.TIME_ELAPSED_EXT,this.query))}}endGpu(){const t=this.extension,e=this.gl;this.isWebGL2&&this.queryCreated&&e.getQuery(t.TIME_ELAPSED_EXT,e.CURRENT_QUERY)&&e.endQuery(t.TIME_ELAPSED_EXT)}begin(t){this.startGpu(),this.updateAccums(t)}end(t){this.endGpu(),this.updateAccums(t)}updateAccums(t){let e=this.names.indexOf(t);e===-1&&(e=this.names.length,this.addUI(t));const r=this.now();this.activeAccums[e]=!this.activeAccums[e],this.t0=r}}const jd=d=>{d.forEach((t,e)=>{const{meshes:r}=t;if(!r)return;let n={total:0,type:"Triangle",data:[]};Object.keys(r).forEach(i=>{const o=r[i],{geometry:s,material:a}=o;let l=s.index;const c=s.attributes.position;if(!c)return;let h=1;a.wireframe===!0&&(h=0);const u=l!==null?l.count:c.count,f=s.drawRange.start*h,p=s.drawRange.count*h,g=f,m=Math.min(u,f+p)-1;let v=1;const x=o.count||1;let _="Triangle",y=0;o.isMesh?a.wireframe===!0?(_="Line",v=v/2):(_="Triangle",v=v/3):o.isLine?(_="Line",o.isLineSegments?v=v/2:o.isLineLoop?v=v:v=v-1):o.isPoints?(_="Point",v=v):o.isSprite&&(_="Triangle",v=v/3);const M=Math.round(Math.max(0,m-g+1)*(v*x));M>y&&(y=M,n.type=_),n.total+=M,n.data.push({drawCount:M,type:_}),o.userData.drawCount={type:_,count:M}}),t.drawCounts=n})};var $a={exports:{}};(function(d){var t=Object.prototype.hasOwnProperty,e="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(e=!1));function n(a,l,c){this.fn=a,this.context=l,this.once=c||!1}function i(a,l,c,h,u){if(typeof c!="function")throw new TypeError("The listener must be a function");var f=new n(c,h||a,u),p=e?e+l:l;return a._events[p]?a._events[p].fn?a._events[p]=[a._events[p],f]:a._events[p].push(f):(a._events[p]=f,a._eventsCount++),a}function o(a,l){--a._eventsCount===0?a._events=new r:delete a._events[l]}function s(){this._events=new r,this._eventsCount=0}s.prototype.eventNames=function(){var l=[],c,h;if(this._eventsCount===0)return l;for(h in c=this._events)t.call(c,h)&&l.push(e?h.slice(1):h);return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(c)):l},s.prototype.listeners=function(l){var c=e?e+l:l,h=this._events[c];if(!h)return[];if(h.fn)return[h.fn];for(var u=0,f=h.length,p=new Array(f);u<f;u++)p[u]=h[u].fn;return p},s.prototype.listenerCount=function(l){var c=e?e+l:l,h=this._events[c];return h?h.fn?1:h.length:0},s.prototype.emit=function(l,c,h,u,f,p){var g=e?e+l:l;if(!this._events[g])return!1;var m=this._events[g],v=arguments.length,x,_;if(m.fn){switch(m.once&&this.removeListener(l,m.fn,void 0,!0),v){case 1:return m.fn.call(m.context),!0;case 2:return m.fn.call(m.context,c),!0;case 3:return m.fn.call(m.context,c,h),!0;case 4:return m.fn.call(m.context,c,h,u),!0;case 5:return m.fn.call(m.context,c,h,u,f),!0;case 6:return m.fn.call(m.context,c,h,u,f,p),!0}for(_=1,x=new Array(v-1);_<v;_++)x[_-1]=arguments[_];m.fn.apply(m.context,x)}else{var y=m.length,M;for(_=0;_<y;_++)switch(m[_].once&&this.removeListener(l,m[_].fn,void 0,!0),v){case 1:m[_].fn.call(m[_].context);break;case 2:m[_].fn.call(m[_].context,c);break;case 3:m[_].fn.call(m[_].context,c,h);break;case 4:m[_].fn.call(m[_].context,c,h,u);break;default:if(!x)for(M=1,x=new Array(v-1);M<v;M++)x[M-1]=arguments[M];m[_].fn.apply(m[_].context,x)}}return!0},s.prototype.on=function(l,c,h){return i(this,l,c,h,!1)},s.prototype.once=function(l,c,h){return i(this,l,c,h,!0)},s.prototype.removeListener=function(l,c,h,u){var f=e?e+l:l;if(!this._events[f])return this;if(!c)return o(this,f),this;var p=this._events[f];if(p.fn)p.fn===c&&(!u||p.once)&&(!h||p.context===h)&&o(this,f);else{for(var g=0,m=[],v=p.length;g<v;g++)(p[g].fn!==c||u&&!p[g].once||h&&p[g].context!==h)&&m.push(p[g]);m.length?this._events[f]=m.length===1?m[0]:m:o(this,f)}return this},s.prototype.removeAllListeners=function(l){var c;return l?(c=e?e+l:l,this._events[c]&&o(this,c)):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=e,s.EventEmitter=s,d.exports=s})($a);var Wd=$a.exports;const $d=Ca(Wd),or=new $d;function qd(d,t,e){return or.on(d,t)}function Xd(d,t,e){var r;or.removeListener(d,t,(r=e==null?void 0:e.context)!=null?r:null,e==null?void 0:e.once)}function Zd(d,t){or.emit(d,t)}function Yd(d,t,e=[],r){const n=C.useRef(t);C.useEffect(()=>void(n.current=t),[t]),C.useEffect(()=>{const i=s=>{var a;return(a=n.current)==null?void 0:a.call(n,s)},o=qd(d,i);return()=>Xd(d,i,{...r,context:o})},[d,void 0,...e])}const Jd=Ct.prototype.updateMatrixWorld,Qd=Ct.prototype.updateWorldMatrix,qr=Ct.prototype.updateMatrix,Xr=["calls","triangles","points","lines"],Zr=["gpu","cpu","mem","fps"];let an={value:0},qt={value:0};const Kd=d=>{let t=""+d;return t=t.match("^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"),t!==null},Yr=(d,t)=>{d.defines||(d.defines={}),d.defines&&!d.defines.muiPerf&&(d.defines=Object.assign(d.defines||{},{muiPerf:d.uuid}));const e=d.uuid;return t[e]||(t[e]={meshes:{},material:d},d.needsUpdate=!0),d.needsUpdate=!1,e},th=d=>d==="muiPerf",eh=({overClock:d,logsPerSecond:t,chart:e,deepAnalyze:r,matrixUpdate:n})=>{const{gl:i,scene:o}=cn();$t({gl:i,scene:o});const s=C.useMemo(()=>{const a=new Gd({trackGPU:!0,overClock:d,chartLen:e?e.length:120,chartHz:e?e.hz:60,logsPerSecond:t||10,gl:i.getContext(),chartLogger:p=>{$t({chart:p})},paramLogger:p=>{const g={maxMemory:p.maxMemory,gpu:p.gpu,cpu:p.cpu,mem:p.mem,fps:p.fps,totalTime:p.duration,frameCount:p.frameCount};$t({log:g});const{accumulated:m}=ne(),v=i.info.render;m.totalFrames++,m.gl.calls+=v.calls,m.gl.triangles+=v.triangles,m.gl.points+=v.points,m.gl.lines+=v.lines,m.log.gpu+=p.gpu,m.log.cpu+=p.cpu,m.log.mem+=p.mem,m.log.fps+=p.fps;for(let x=0;x<Xr.length;x++){const _=Xr[x],y=v[_];y>m.max.gl[_]&&(m.max.gl[_]=y)}for(let x=0;x<Zr.length;x++){const _=Zr[x],y=p[_];y>m.max.log[_]&&(m.max.log[_]=y)}$t({accumulated:m}),Zd("log",[g,i])}}),l=i.getContext();let c=null,h=null;const u=l.getExtension("WEBGL_debug_renderer_info"),f=l.getParameter(l.VERSION);return u!=null&&(c=l.getParameter(u.UNMASKED_RENDERER_WEBGL),h=l.getParameter(u.UNMASKED_VENDOR_WEBGL)),h||(h="Unknown vendor"),c||(c=l.getParameter(l.RENDERER)),$t({startTime:window.performance.now(),infos:{version:f,renderer:c,vendor:h}}),a},[]);return C.useEffect(()=>{s&&(s.overClock=d||!1,d===!1&&($t({overclockingFps:!1}),ee.value=0,ee.isOverLimit=0),s.chartHz=(e==null?void 0:e.hz)||60,s.chartLen=(e==null?void 0:e.length)||120)},[d,s,e==null?void 0:e.length,e==null?void 0:e.hz]),C.useEffect(()=>{n&&(Ct.prototype.updateMatrixWorld=function(){(this.matrixWorldNeedsUpdate||arguments[0])&&an.value++,Jd.apply(this,arguments)},Ct.prototype.updateWorldMatrix=function(){an.value++,Qd.apply(this,arguments)},Ct.prototype.updateMatrix=function(){qt.value++,qr.apply(this,arguments)}),i.info.autoReset=!1;let a=null,l=null;if(i.info)return a=fo(function(){ne().paused&&$t({paused:!1}),window.performance&&(window.performance.mark("cpu-started"),s.startCpuProfiling=!0),qt.value-=1,an.value=0,qt.value=0,i.info&&i.info.reset()}),l=po(function(){var h,u;if(s&&!s.paused&&(s.nextFrame(window.performance.now()),d&&typeof window.requestIdleCallback<"u"&&(s.idleCbId=requestIdleCallback(s.nextFps))),r){const f={},p=new Map;o.traverse(function(m){if((m instanceof pi||m instanceof Vd)&&m.material){let v=m.material.uuid;Array.isArray(m.material)&&m.material.length>1?v=Yr(m.material[1],f):v=Yr(m.material,f),f[v].meshes[m.uuid]=m}}),(u=(h=i==null?void 0:i.info)==null?void 0:h.programs)==null||u.forEach(g=>{const m=g.cacheKey.split(","),v=m[m.findIndex(th)+1];if(Kd(v)&&f[v]){const{material:x,meshes:_}=f[v];p.set(v,{program:g,material:x,meshes:_,drawCounts:{total:0,type:"triangle",data:[]},expand:!1,visible:!0})}}),p.size!==ne().programs.size&&(jd(p),$t({programs:p,triggerProgramsUpdate:ne().triggerProgramsUpdate++}))}}),()=>{s&&(typeof window.cancelIdleCallback<"u"&&window.cancelIdleCallback(s.idleCbId),window.cancelAnimationFrame(s.rafId),window.cancelAnimationFrame(s.checkQueryId)),n&&(Ct.prototype.updateMatrixWorld=qr),a(),l()}},[s,i,e,n]),C.useEffect(()=>{const a=mo(function(){return s&&(s.paused=!0,qt.value=0,an.value=0,$t({paused:!0,log:{maxMemory:0,gpu:0,mem:0,cpu:0,fps:0,totalTime:0,frameCount:0}})),!1});return()=>{a()}},[]),null};var rt="colors",Lt="sizes",G="space",nh={gap:G,gridGap:G,columnGap:G,gridColumnGap:G,rowGap:G,gridRowGap:G,inset:G,insetBlock:G,insetBlockEnd:G,insetBlockStart:G,insetInline:G,insetInlineEnd:G,insetInlineStart:G,margin:G,marginTop:G,marginRight:G,marginBottom:G,marginLeft:G,marginBlock:G,marginBlockEnd:G,marginBlockStart:G,marginInline:G,marginInlineEnd:G,marginInlineStart:G,padding:G,paddingTop:G,paddingRight:G,paddingBottom:G,paddingLeft:G,paddingBlock:G,paddingBlockEnd:G,paddingBlockStart:G,paddingInline:G,paddingInlineEnd:G,paddingInlineStart:G,top:G,right:G,bottom:G,left:G,scrollMargin:G,scrollMarginTop:G,scrollMarginRight:G,scrollMarginBottom:G,scrollMarginLeft:G,scrollMarginX:G,scrollMarginY:G,scrollMarginBlock:G,scrollMarginBlockEnd:G,scrollMarginBlockStart:G,scrollMarginInline:G,scrollMarginInlineEnd:G,scrollMarginInlineStart:G,scrollPadding:G,scrollPaddingTop:G,scrollPaddingRight:G,scrollPaddingBottom:G,scrollPaddingLeft:G,scrollPaddingX:G,scrollPaddingY:G,scrollPaddingBlock:G,scrollPaddingBlockEnd:G,scrollPaddingBlockStart:G,scrollPaddingInline:G,scrollPaddingInlineEnd:G,scrollPaddingInlineStart:G,fontSize:"fontSizes",background:rt,backgroundColor:rt,backgroundImage:rt,borderImage:rt,border:rt,borderBlock:rt,borderBlockEnd:rt,borderBlockStart:rt,borderBottom:rt,borderBottomColor:rt,borderColor:rt,borderInline:rt,borderInlineEnd:rt,borderInlineStart:rt,borderLeft:rt,borderLeftColor:rt,borderRight:rt,borderRightColor:rt,borderTop:rt,borderTopColor:rt,caretColor:rt,color:rt,columnRuleColor:rt,fill:rt,outline:rt,outlineColor:rt,stroke:rt,textDecorationColor:rt,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:Lt,minBlockSize:Lt,maxBlockSize:Lt,inlineSize:Lt,minInlineSize:Lt,maxInlineSize:Lt,width:Lt,minWidth:Lt,maxWidth:Lt,height:Lt,minHeight:Lt,maxHeight:Lt,flexBasis:Lt,gridTemplateColumns:Lt,gridTemplateRows:Lt,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},ih=(d,t)=>typeof t=="function"?{"()":Function.prototype.toString.call(t)}:t,un=()=>{const d=Object.create(null);return(t,e,...r)=>{const n=(i=>JSON.stringify(i,ih))(t);return n in d?d[n]:d[n]=e(t,...r)}},Oe=Symbol.for("sxs.internal"),sr=(d,t)=>Object.defineProperties(d,Object.getOwnPropertyDescriptors(t)),Jr=d=>{for(const t in d)return!0;return!1},{hasOwnProperty:rh}=Object.prototype,Qi=d=>d.includes("-")?d:d.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),ah=/\s+(?![^()]*\))/,en=d=>t=>d(...typeof t=="string"?String(t).split(ah):[t]),Qr={appearance:d=>({WebkitAppearance:d,appearance:d}),backfaceVisibility:d=>({WebkitBackfaceVisibility:d,backfaceVisibility:d}),backdropFilter:d=>({WebkitBackdropFilter:d,backdropFilter:d}),backgroundClip:d=>({WebkitBackgroundClip:d,backgroundClip:d}),boxDecorationBreak:d=>({WebkitBoxDecorationBreak:d,boxDecorationBreak:d}),clipPath:d=>({WebkitClipPath:d,clipPath:d}),content:d=>({content:d.includes('"')||d.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(d)?d:`"${d}"`}),hyphens:d=>({WebkitHyphens:d,hyphens:d}),maskImage:d=>({WebkitMaskImage:d,maskImage:d}),maskSize:d=>({WebkitMaskSize:d,maskSize:d}),tabSize:d=>({MozTabSize:d,tabSize:d}),textSizeAdjust:d=>({WebkitTextSizeAdjust:d,textSizeAdjust:d}),userSelect:d=>({WebkitUserSelect:d,userSelect:d}),marginBlock:en((d,t)=>({marginBlockStart:d,marginBlockEnd:t||d})),marginInline:en((d,t)=>({marginInlineStart:d,marginInlineEnd:t||d})),maxSize:en((d,t)=>({maxBlockSize:d,maxInlineSize:t||d})),minSize:en((d,t)=>({minBlockSize:d,minInlineSize:t||d})),paddingBlock:en((d,t)=>({paddingBlockStart:d,paddingBlockEnd:t||d})),paddingInline:en((d,t)=>({paddingInlineStart:d,paddingInlineEnd:t||d}))},Bi=/([\d.]+)([^]*)/,oh=(d,t)=>d.length?d.reduce((e,r)=>(e.push(...t.map(n=>n.includes("&")?n.replace(/&/g,/[ +>|~]/.test(r)&&/&.*&/.test(n)?`:is(${r})`:r):r+" "+n)),e),[]):t,sh=(d,t)=>d in lh&&typeof t=="string"?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(e,r,n,i)=>r+(n==="stretch"?`-moz-available${i};${Qi(d)}:${r}-webkit-fill-available`:`-moz-fit-content${i};${Qi(d)}:${r}fit-content`)+i):String(t),lh={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},xe=d=>d?d+"-":"",qa=(d,t,e)=>d.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(r,n,i,o,s)=>o=="$"==!!i?r:(n||o=="--"?"calc(":"")+"var(--"+(o==="$"?xe(t)+(s.includes("$")?"":xe(e))+s.replace(/\$/g,"-"):s)+")"+(n||o=="--"?"*"+(n||"")+(i||"1")+")":"")),ch=/\s*,\s*(?![^()]*\))/,dh=Object.prototype.toString,on=(d,t,e,r,n)=>{let i,o,s;const a=(l,c,h)=>{let u,f;const p=g=>{for(u in g){const x=u.charCodeAt(0)===64,_=x&&Array.isArray(g[u])?g[u]:[g[u]];for(f of _){const y=/[A-Z]/.test(v=u)?v:v.replace(/-[^]/g,E=>E[1].toUpperCase()),M=typeof f=="object"&&f&&f.toString===dh&&(!r.utils[y]||!c.length);if(y in r.utils&&!M){const E=r.utils[y];if(E!==o){o=E,p(E(f)),o=null;continue}}else if(y in Qr){const E=Qr[y];if(E!==s){s=E,p(E(f)),s=null;continue}}if(x&&(m=u.slice(1)in r.media?"@media "+r.media[u.slice(1)]:u,u=m.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(E,b,A,P,T,N)=>{const w=Bi.test(b),I=.0625*(w?-1:1),[U,z]=w?[P,b]:[b,P];return"("+(A[0]==="="?"":A[0]===">"===w?"max-":"min-")+U+":"+(A[0]!=="="&&A.length===1?z.replace(Bi,(k,R,O)=>Number(R)+I*(A===">"?1:-1)+O):z)+(T?") and ("+(T[0]===">"?"min-":"max-")+U+":"+(T.length===1?N.replace(Bi,(k,R,O)=>Number(R)+I*(T===">"?-1:1)+O):N):"")+")"})),M){const E=x?h.concat(u):[...h],b=x?[...c]:oh(c,u.split(ch));i!==void 0&&n(Kr(...i)),i=void 0,a(f,b,E)}else i===void 0&&(i=[[],c,h]),u=x||u.charCodeAt(0)!==36?u:`--${xe(r.prefix)}${u.slice(1).replace(/\$/g,"-")}`,f=M?f:typeof f=="number"?f&&y in hh?String(f)+"px":String(f):qa(sh(y,f??""),r.prefix,r.themeMap[y]),i[0].push(`${x?`${u} `:`${Qi(u)}:`}${f}`)}}var m,v};p(l),i!==void 0&&n(Kr(...i)),i=void 0};a(d,t,e)},Kr=(d,t,e)=>`${e.map(r=>`${r}{`).join("")}${t.length?`${t.join(",")}{`:""}${d.join(";")}${t.length?"}":""}${Array(e.length?e.length+1:0).join("}")}`,hh={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},ta=d=>String.fromCharCode(d+(d>25?39:97)),ze=d=>(t=>{let e,r="";for(e=Math.abs(t);e>52;e=e/52|0)r=ta(e%52)+r;return ta(e%52)+r})(((t,e)=>{let r=e.length;for(;r;)t=33*t^e.charCodeAt(--r);return t})(5381,JSON.stringify(d))>>>0),Mn=["themed","global","styled","onevar","resonevar","allvar","inline"],uh=d=>{if(d.href&&!d.href.startsWith(location.origin))return!1;try{return!!d.cssRules}catch{return!1}},fh=d=>{let t;const e=()=>{const{cssRules:n}=t.sheet;return[].map.call(n,(i,o)=>{const{cssText:s}=i;let a="";if(s.startsWith("--sxs"))return"";if(n[o-1]&&(a=n[o-1].cssText).startsWith("--sxs")){if(!i.cssRules.length)return"";for(const l in t.rules)if(t.rules[l].group===i)return`--sxs{--sxs:${[...t.rules[l].cache].join(" ")}}${s}`;return i.cssRules.length?`${a}${s}`:""}return s}).join("")},r=()=>{if(t){const{rules:s,sheet:a}=t;if(!a.deleteRule){for(;Object(Object(a.cssRules)[0]).type===3;)a.cssRules.splice(0,1);a.cssRules=[]}for(const l in s)delete s[l]}const n=Object(d).styleSheets||[];for(const s of n)if(uh(s)){for(let a=0,l=s.cssRules;l[a];++a){const c=Object(l[a]);if(c.type!==1)continue;const h=Object(l[a+1]);if(h.type!==4)continue;++a;const{cssText:u}=c;if(!u.startsWith("--sxs"))continue;const f=u.slice(14,-3).trim().split(/\s+/),p=Mn[f[0]];p&&(t||(t={sheet:s,reset:r,rules:{},toString:e}),t.rules[p]={group:h,index:a,cache:new Set(f)})}if(t)break}if(!t){const s=(a,l)=>({type:l,cssRules:[],insertRule(c,h){this.cssRules.splice(h,0,s(c,{import:3,undefined:1}[(c.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return a==="@media{}"?`@media{${[].map.call(this.cssRules,c=>c.cssText).join("")}}`:a}});t={sheet:d?(d.head||d).appendChild(document.createElement("style")).sheet:s("","text/css"),rules:{},reset:r,toString:e}}const{sheet:i,rules:o}=t;for(let s=Mn.length-1;s>=0;--s){const a=Mn[s];if(!o[a]){const l=Mn[s+1],c=o[l]?o[l].index:i.cssRules.length;i.insertRule("@media{}",c),i.insertRule(`--sxs{--sxs:${s}}`,c),o[a]={group:i.cssRules[c+1],index:c,cache:new Set([s])}}ph(o[a])}};return r(),t},ph=d=>{const t=d.group;let e=t.cssRules.length;d.apply=r=>{try{t.insertRule(r,e),++e}catch{}}},yn=Symbol(),mh=un(),ea=(d,t)=>mh(d,()=>(...e)=>{let r={type:null,composers:new Set};for(const n of e)if(n!=null)if(n[Oe]){r.type==null&&(r.type=n[Oe].type);for(const i of n[Oe].composers)r.composers.add(i)}else n.constructor!==Object||n.$$typeof?r.type==null&&(r.type=n):r.composers.add(gh(n,d));return r.type==null&&(r.type="span"),r.composers.size||r.composers.add(["PJLV",{},[],[],{},[]]),vh(d,r,t)}),gh=({variants:d,compoundVariants:t,defaultVariants:e,...r},n)=>{const i=`${xe(n.prefix)}c-${ze(r)}`,o=[],s=[],a=Object.create(null),l=[];for(const u in e)a[u]=String(e[u]);if(typeof d=="object"&&d)for(const u in d){c=a,h=u,rh.call(c,h)||(a[u]="undefined");const f=d[u];for(const p in f){const g={[u]:String(p)};String(p)==="undefined"&&l.push(u);const m=f[p],v=[g,m,!Jr(m)];o.push(v)}}var c,h;if(typeof t=="object"&&t)for(const u of t){let{css:f,...p}=u;f=typeof f=="object"&&f||{};for(const m in p)p[m]=String(p[m]);const g=[p,f,!Jr(f)];s.push(g)}return[i,r,o,s,a,l]},vh=(d,t,e)=>{const[r,n,i,o]=xh(t.composers),s=typeof t.type=="function"||t.type.$$typeof?(h=>{function u(){for(let f=0;f<u[yn].length;f++){const[p,g]=u[yn][f];h.rules[p].apply(g)}return u[yn]=[],null}return u[yn]=[],u.rules={},Mn.forEach(f=>u.rules[f]={apply:p=>u[yn].push([f,p])}),u})(e):null,a=(s||e).rules,l=`.${r}${n.length>1?`:where(.${n.slice(1).join(".")})`:""}`,c=h=>{h=typeof h=="object"&&h||_h;const{css:u,...f}=h,p={};for(const v in i)if(delete f[v],v in h){let x=h[v];typeof x=="object"&&x?p[v]={"@initial":i[v],...x}:(x=String(x),p[v]=x!=="undefined"||o.has(v)?x:i[v])}else p[v]=i[v];const g=new Set([...n]);for(const[v,x,_,y]of t.composers){e.rules.styled.cache.has(v)||(e.rules.styled.cache.add(v),on(x,[`.${v}`],[],d,b=>{a.styled.apply(b)}));const M=na(_,p,d.media),E=na(y,p,d.media,!0);for(const b of M)if(b!==void 0)for(const[A,P,T]of b){const N=`${v}-${ze(P)}-${A}`;g.add(N);const w=(T?e.rules.resonevar:e.rules.onevar).cache,I=T?a.resonevar:a.onevar;w.has(N)||(w.add(N),on(P,[`.${N}`],[],d,U=>{I.apply(U)}))}for(const b of E)if(b!==void 0)for(const[A,P]of b){const T=`${v}-${ze(P)}-${A}`;g.add(T),e.rules.allvar.cache.has(T)||(e.rules.allvar.cache.add(T),on(P,[`.${T}`],[],d,N=>{a.allvar.apply(N)}))}}if(typeof u=="object"&&u){const v=`${r}-i${ze(u)}-css`;g.add(v),e.rules.inline.cache.has(v)||(e.rules.inline.cache.add(v),on(u,[`.${v}`],[],d,x=>{a.inline.apply(x)}))}for(const v of String(h.className||"").trim().split(/\s+/))v&&g.add(v);const m=f.className=[...g].join(" ");return{type:t.type,className:m,selector:l,props:f,toString:()=>m,deferredInjector:s}};return sr(c,{className:r,selector:l,[Oe]:t,toString:()=>(e.rules.styled.cache.has(r)||c(),r)})},xh=d=>{let t="";const e=[],r={},n=[];for(const[i,,,,o,s]of d){t===""&&(t=i),e.push(i),n.push(...s);for(const a in o){const l=o[a];(r[a]===void 0||l!=="undefined"||s.includes(l))&&(r[a]=l)}}return[t,e,r,new Set(n)]},na=(d,t,e,r)=>{const n=[];t:for(let[i,o,s]of d){if(s)continue;let a,l=0,c=!1;for(a in i){const h=i[a];let u=t[a];if(u!==h){if(typeof u!="object"||!u)continue t;{let f,p,g=0;for(const m in u){if(h===String(u[m])){if(m!=="@initial"){const v=m.slice(1);(p=p||[]).push(v in e?e[v]:m.replace(/^@media ?/,"")),c=!0}l+=g,f=!0}++g}if(p&&p.length&&(o={["@media "+p.join(", ")]:o}),!f)continue t}}}(n[l]=n[l]||[]).push([r?"cv":`${a}-${i[a]}`,o,c])}return n},_h={},yh=un(),Sh=(d,t)=>yh(d,()=>(...e)=>{const r=()=>{for(let n of e){n=typeof n=="object"&&n||{};let i=ze(n);if(!t.rules.global.cache.has(i)){if(t.rules.global.cache.add(i),"@import"in n){let o=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let s of[].concat(n["@import"]))s=s.includes('"')||s.includes("'")?s:`"${s}"`,t.sheet.insertRule(`@import ${s};`,o++);delete n["@import"]}on(n,[],[],d,o=>{t.rules.global.apply(o)})}}return""};return sr(r,{toString:r})}),Mh=un(),bh=(d,t)=>Mh(d,()=>e=>{const r=`${xe(d.prefix)}k-${ze(e)}`,n=()=>{if(!t.rules.global.cache.has(r)){t.rules.global.cache.add(r);const i=[];on(e,[],[],d,s=>i.push(s));const o=`@keyframes ${r}{${i.join("")}}`;t.rules.global.apply(o)}return r};return sr(n,{get name(){return n()},toString:n})}),Ch=class{constructor(d,t,e,r){this.token=d==null?"":String(d),this.value=t==null?"":String(t),this.scale=e==null?"":String(e),this.prefix=r==null?"":String(r)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+xe(this.prefix)+xe(this.scale)+this.token}toString(){return this.computedValue}},wh=un(),Eh=(d,t)=>wh(d,()=>(e,r)=>{r=typeof e=="object"&&e||Object(r);const n=`.${e=(e=typeof e=="string"?e:"")||`${xe(d.prefix)}t-${ze(r)}`}`,i={},o=[];for(const a in r){i[a]={};for(const l in r[a]){const c=`--${xe(d.prefix)}${a}-${l}`,h=qa(String(r[a][l]),d.prefix,a);i[a][l]=new Ch(l,h,a,d.prefix),o.push(`${c}:${h}`)}}const s=()=>{if(o.length&&!t.rules.themed.cache.has(e)){t.rules.themed.cache.add(e);const a=`${r===d.theme?":root,":""}.${e}{${o.join(";")}}`;t.rules.themed.apply(a)}return e};return{...i,get className(){return s()},selector:n,toString:s}}),Ah=un(),ia,Th=un(),Ih=d=>{const t=(e=>{let r=!1;const n=Ah(e,i=>{r=!0;const o="prefix"in(i=typeof i=="object"&&i||{})?String(i.prefix):"",s=typeof i.media=="object"&&i.media||{},a=typeof i.root=="object"?i.root||null:globalThis.document||null,l=typeof i.theme=="object"&&i.theme||{},c={prefix:o,media:s,theme:l,themeMap:typeof i.themeMap=="object"&&i.themeMap||{...nh},utils:typeof i.utils=="object"&&i.utils||{}},h=fh(a),u={css:ea(c,h),globalCss:Sh(c,h),keyframes:bh(c,h),createTheme:Eh(c,h),reset(){h.reset(),u.theme.toString()},theme:{},sheet:h,config:c,prefix:o,getCssText:h.toString,toString:h.toString};return String(u.theme=u.createTheme(l)),u});return r||n.reset(),n})(d);return t.styled=(({config:e,sheet:r})=>Th(e,()=>{const n=ea(e,r);return(...i)=>{const o=n(...i),s=o[Oe].type,a=Ie.forwardRef((l,c)=>{const h=l&&l.as||s,{props:u,deferredInjector:f}=o(l);return delete u.as,u.ref=c,f?Ie.createElement(Ie.Fragment,null,Ie.createElement(h,u),Ie.createElement(f,null)):Ie.createElement(h,u)});return a.className=o.className,a.displayName=`Styled.${s.displayName||s.name||s}`,a.selector=o.selector,a.toString=()=>o.selector,a[Oe]=o[Oe],a}}))(t),t},Uh=()=>ia||(ia=Ih()),mt=(...d)=>Uh().styled(...d);const Ph=mt("div",{position:"fixed",top:0,right:0,zIndex:9999,fontFamily:`-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif`,backgroundColor:"rgba(36, 36, 36, .9)",color:"#fff",margin:0,minHeight:"100px",padding:"4px 0","-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale",userSelect:"none","&.top-left":{right:"initial",left:0},"&.bottom-left":{right:"initial",top:"initial",bottom:0,left:0,".__perf_toggle":{top:"-20px",bottom:"initial"}},"&.bottom-right":{top:"initial",bottom:0,".__perf_toggle":{top:"-20px",bottom:"initial"}},"&.minimal":{backgroundColor:"rgba(36, 36, 36, .75)"},"*":{margin:"0",padding:"0",border:"0",fontSize:"100%",lineHeight:"1",verticalAlign:"baseline"}}),Vi=mt("small",{position:"absolute",right:0,fontSize:"10px"}),It=mt("div",{display:"inline-flex",fontStyle:"normal",padding:0,lineHeight:"13px",fontSize:"14px",width:"62px",position:"relative",pointerEvents:"auto",cursor:"default",fontWeight:500,letterSpacing:"0px",textAlign:"left",height:"29px",whiteSpace:"nowrap",justifyContent:"space-evenly",fontVariantNumeric:"tabular-nums",small:{paddingLeft:"12px"},svg:{padding:0,color:"rgba(145, 145, 145, 0.3)",fontSize:"40px",position:"absolute",zIndex:1,maxHeight:"20px",left:" 50%",marginLeft:"-23px",top:"4px"}}),Ot=mt("span",{verticalAlign:"bottom",position:"absolute",bottom:"5px",color:"rgba(101, 197, 188, 1)",textAlign:"right",letterSpacing:"1px",fontSize:"8px",fontWeight:"500",width:"60px"}),Dh=mt("div",{display:"flex"}),Lh=mt("div",{backgroundColor:"#404040",padding:"6px",display:"block",fontSize:"12px",marginBottom:"6px",cursor:"pointer","*":{cursor:"pointer !important"},"> span":{},small:{fontSize:"9px"},"> b":{marginRight:"4px",cursor:"pointer"}}),Rh=mt("div",{height:"66px",overflow:"hidden",position:"absolute",pointerEvents:"none",display:"flex",top:"0px",justifyContent:"center",width:"100%",minWidth:"310px",margin:"0 auto",canvas:{background:"transparent !important",position:"absolute !important"}}),Fh=mt("div",{textAlign:"center",fontWeight:700,fontSize:"12px",lineHeight:"12px",display:"flex",justifyContent:"center",alignItems:"center",verticalAlign:"middle",color:"#f1f1f1",padding:"7px",width:"100%",backgroundColor:"rgba(36, 36, 37, 0.8)",zIndex:1,position:"absolute",height:"100%"}),lr=mt("div",{pointerEvents:"auto",justifyContent:"center",cursor:"pointer",fontSize:"12px",backgroundColor:"rgb(41, 43, 45)",marginTop:"6px",width:"auto",margin:"0",color:"rgba(145, 145, 145, 1)",textAlign:"center",display:"inline-block",verticalAlign:"middle",padding:"4px 6px","&.__perf_toggle_tab_active":{backgroundColor:"rgb(31 31 31)"},svg:{width:"12px",height:"12px",float:"left"}}),kh=mt("div",{pointerEvents:"auto",justifyContent:"center",cursor:"pointer",fontSize:"12px",float:"right",backgroundColor:"rgb(41, 43, 45)",width:"auto",margin:"0",color:"rgba(145, 145, 145, 1)",textAlign:"center",display:"inline-block",verticalAlign:"middle",padding:"4px 6px","&.__perf_toggle_tab_active":{backgroundColor:"rgb(31 31 31)"},svg:{width:"12px",height:"12px",float:"left"}}),Nh=mt("div",{padding:"4px 6px",fontSize:"12px",pointerEvents:"auto"}),Oh=mt("span",{fontWeight:"bold",letterSpacing:"0.08em",maxWidth:"145px",overflow:"hidden",textOverflow:"ellipsis",display:"inline-block",verticalAlign:"middle",fontSize:"11px",marginRight:"10px"}),zh=mt("div",{maxHeight:"50vh",overflowY:"auto",marginTop:"38px"}),Bh=mt("div",{marginTop:"0"}),ra=mt("div",{display:"flex",position:"relative",fontWeight:"bold",color:"#fff",lineHeight:"14px",svg:{marginRight:"4px",display:"inline-block"}}),Xa=mt("ul",{display:"block",position:"relative",paddingLeft:"10px",margin:"6px 6px",img:{maxHeight:"60px",maxWidth:"100%",margin:"6px auto",display:"block"},"&:after":{content:"",position:"absolute",left:"0px",top:"0px",width:"1px",height:"100%",backgroundColor:"grey",transform:"translateX(-50%)",maxHeight:"50vh",overflowY:"auto"},li:{borderBottom:"1px solid #313131",display:"block",padding:"4px",margin:0,lineHeight:1,verticalAlign:"middle",height:"24px"},b:{fontWeight:"bold"},small:{textAlign:"revert",letterSpacing:"1px",fontSize:"10px",fontWeight:"500",marginLeft:"2px",color:"rgb(101, 197, 188)"}}),Za=mt("button",{fontWeight:"bold",letterSpacing:"0.02em",backgroundColor:"rgb(41, 43, 45)",color:"rgb(211, 211, 211)",overflow:"hidden",textOverflow:"ellipsis",cursor:"pointer",display:"block",verticalAlign:"middle",fontSize:"11px",padding:"5px",margin:"4px auto"}),Vh=mt("div",{display:"flex",justifyContent:"center",cursor:"pointer",fontSize:"12px",backgroundColor:"rgb(41, 43, 45)",marginTop:"6px",width:"auto",margin:"0 auto",color:"rgba(145, 145, 145, 1)",textAlign:"center",position:"absolute",right:0,bottom:" -20px",svg:{width:"12px",height:"12px",float:"left"}}),Hh=mt("li",{display:"flex !important",height:"auto !important",span:{height:"40px",display:"block",position:"relative"},b:{paddingLeft:"12px"}});function ct(d,t){if(d==null)return{};var e={},r=Object.keys(d),n,i;for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&(e[n]=d[n]);return e}var Gh=["color"],Ya=C.forwardRef(function(d,t){var e=d.color,r=e===void 0?"currentColor":e,n=ct(d,Gh);return C.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{ref:t}),C.createElement("path",{d:"M0 1.5C0 1.22386 0.223858 1 0.5 1H2.5C2.77614 1 3 1.22386 3 1.5C3 1.77614 2.77614 2 2.5 2H0.5C0.223858 2 0 1.77614 0 1.5ZM4 1.5C4 1.22386 4.22386 1 4.5 1H14.5C14.7761 1 15 1.22386 15 1.5C15 1.77614 14.7761 2 14.5 2H4.5C4.22386 2 4 1.77614 4 1.5ZM4 4.5C4 4.22386 4.22386 4 4.5 4H11.5C11.7761 4 12 4.22386 12 4.5C12 4.77614 11.7761 5 11.5 5H4.5C4.22386 5 4 4.77614 4 4.5ZM0 7.5C0 7.22386 0.223858 7 0.5 7H2.5C2.77614 7 3 7.22386 3 7.5C3 7.77614 2.77614 8 2.5 8H0.5C0.223858 8 0 7.77614 0 7.5ZM4 7.5C4 7.22386 4.22386 7 4.5 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H4.5C4.22386 8 4 7.77614 4 7.5ZM4 10.5C4 10.2239 4.22386 10 4.5 10H11.5C11.7761 10 12 10.2239 12 10.5C12 10.7761 11.7761 11 11.5 11H4.5C4.22386 11 4 10.7761 4 10.5ZM0 13.5C0 13.2239 0.223858 13 0.5 13H2.5C2.77614 13 3 13.2239 3 13.5C3 13.7761 2.77614 14 2.5 14H0.5C0.223858 14 0 13.7761 0 13.5ZM4 13.5C4 13.2239 4.22386 13 4.5 13H14.5C14.7761 13 15 13.2239 15 13.5C15 13.7761 14.7761 14 14.5 14H4.5C4.22386 14 4 13.7761 4 13.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),jh=["color"],Wh=C.forwardRef(function(d,t){var e=d.color,r=e===void 0?"currentColor":e,n=ct(d,jh);return C.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{ref:t}),C.createElement("path",{d:"M11.5 1C11.7761 1 12 1.22386 12 1.5V13.5C12 13.7761 11.7761 14 11.5 14C11.2239 14 11 13.7761 11 13.5V1.5C11 1.22386 11.2239 1 11.5 1ZM9.5 3C9.77614 3 10 3.22386 10 3.5V13.5C10 13.7761 9.77614 14 9.5 14C9.22386 14 9 13.7761 9 13.5V3.5C9 3.22386 9.22386 3 9.5 3ZM13.5 3C13.7761 3 14 3.22386 14 3.5V13.5C14 13.7761 13.7761 14 13.5 14C13.2239 14 13 13.7761 13 13.5V3.5C13 3.22386 13.2239 3 13.5 3ZM5.5 4C5.77614 4 6 4.22386 6 4.5V13.5C6 13.7761 5.77614 14 5.5 14C5.22386 14 5 13.7761 5 13.5V4.5C5 4.22386 5.22386 4 5.5 4ZM1.5 5C1.77614 5 2 5.22386 2 5.5V13.5C2 13.7761 1.77614 14 1.5 14C1.22386 14 1 13.7761 1 13.5V5.5C1 5.22386 1.22386 5 1.5 5ZM7.5 5C7.77614 5 8 5.22386 8 5.5V13.5C8 13.7761 7.77614 14 7.5 14C7.22386 14 7 13.7761 7 13.5V5.5C7 5.22386 7.22386 5 7.5 5ZM3.5 7C3.77614 7 4 7.22386 4 7.5V13.5C4 13.7761 3.77614 14 3.5 14C3.22386 14 3 13.7761 3 13.5V7.5C3 7.22386 3.22386 7 3.5 7Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),$h=["color"],qh=C.forwardRef(function(d,t){var e=d.color,r=e===void 0?"currentColor":e,n=ct(d,$h);return C.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{ref:t}),C.createElement("path",{d:"M2 5H13C13.5523 5 14 5.44772 14 6V9C14 9.55228 13.5523 10 13 10H2C1.44772 10 1 9.55228 1 9V6C1 5.44772 1.44772 5 2 5ZM0 6C0 4.89543 0.895431 4 2 4H13C14.1046 4 15 4.89543 15 6V9C15 10.1046 14.1046 11 13 11H2C0.89543 11 0 10.1046 0 9V6ZM4.5 6.75C4.08579 6.75 3.75 7.08579 3.75 7.5C3.75 7.91421 4.08579 8.25 4.5 8.25C4.91421 8.25 5.25 7.91421 5.25 7.5C5.25 7.08579 4.91421 6.75 4.5 6.75ZM6.75 7.5C6.75 7.08579 7.08579 6.75 7.5 6.75C7.91421 6.75 8.25 7.08579 8.25 7.5C8.25 7.91421 7.91421 8.25 7.5 8.25C7.08579 8.25 6.75 7.91421 6.75 7.5ZM10.5 6.75C10.0858 6.75 9.75 7.08579 9.75 7.5C9.75 7.91421 10.0858 8.25 10.5 8.25C10.9142 8.25 11.25 7.91421 11.25 7.5C11.25 7.08579 10.9142 6.75 10.5 6.75Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),Xh=["color"],Zh=C.forwardRef(function(d,t){var e=d.color,r=e===void 0?"currentColor":e,n=ct(d,Xh);return C.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{ref:t}),C.createElement("path",{d:"M7.28856 0.796908C7.42258 0.734364 7.57742 0.734364 7.71144 0.796908L13.7114 3.59691C13.8875 3.67906 14 3.85574 14 4.05V10.95C14 11.1443 13.8875 11.3209 13.7114 11.4031L7.71144 14.2031C7.57742 14.2656 7.42258 14.2656 7.28856 14.2031L1.28856 11.4031C1.11252 11.3209 1 11.1443 1 10.95V4.05C1 3.85574 1.11252 3.67906 1.28856 3.59691L7.28856 0.796908ZM2 4.80578L7 6.93078V12.9649L2 10.6316V4.80578ZM8 12.9649L13 10.6316V4.80578L8 6.93078V12.9649ZM7.5 6.05672L12.2719 4.02866L7.5 1.80176L2.72809 4.02866L7.5 6.05672Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),Yh=["color"],Jh=C.forwardRef(function(d,t){var e=d.color,r=e===void 0?"currentColor":e,n=ct(d,Yh);return C.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{ref:t}),C.createElement("path",{d:"M7.5 9.125C8.39746 9.125 9.125 8.39746 9.125 7.5C9.125 6.60254 8.39746 5.875 7.5 5.875C6.60254 5.875 5.875 6.60254 5.875 7.5C5.875 8.39746 6.60254 9.125 7.5 9.125ZM7.5 10.125C8.94975 10.125 10.125 8.94975 10.125 7.5C10.125 6.05025 8.94975 4.875 7.5 4.875C6.05025 4.875 4.875 6.05025 4.875 7.5C4.875 8.94975 6.05025 10.125 7.5 10.125Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),Qh=["color"],Kh=C.forwardRef(function(d,t){var e=d.color,r=e===void 0?"currentColor":e,n=ct(d,Qh);return C.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{ref:t}),C.createElement("path",{d:"M7.49999 3.09998C7.27907 3.09998 7.09999 3.27906 7.09999 3.49998C7.09999 3.72089 7.27907 3.89998 7.49999 3.89998H14.5C14.7209 3.89998 14.9 3.72089 14.9 3.49998C14.9 3.27906 14.7209 3.09998 14.5 3.09998H7.49999ZM7.49998 5.1C7.27907 5.1 7.09998 5.27908 7.09998 5.5C7.09998 5.72091 7.27907 5.9 7.49998 5.9H14.5C14.7209 5.9 14.9 5.72091 14.9 5.5C14.9 5.27908 14.7209 5.1 14.5 5.1H7.49998ZM7.1 7.5C7.1 7.27908 7.27909 7.1 7.5 7.1H14.5C14.7209 7.1 14.9 7.27908 14.9 7.5C14.9 7.72091 14.7209 7.9 14.5 7.9H7.5C7.27909 7.9 7.1 7.72091 7.1 7.5ZM7.49998 9.1C7.27907 9.1 7.09998 9.27908 7.09998 9.5C7.09998 9.72091 7.27907 9.9 7.49998 9.9H14.5C14.7209 9.9 14.9 9.72091 14.9 9.5C14.9 9.27908 14.7209 9.1 14.5 9.1H7.49998ZM7.09998 11.5C7.09998 11.2791 7.27907 11.1 7.49998 11.1H14.5C14.7209 11.1 14.9 11.2791 14.9 11.5C14.9 11.7209 14.7209 11.9 14.5 11.9H7.49998C7.27907 11.9 7.09998 11.7209 7.09998 11.5ZM2.5 9.25003L5 6.00003H0L2.5 9.25003Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),tu=["color"],eu=C.forwardRef(function(d,t){var e=d.color,r=e===void 0?"currentColor":e,n=ct(d,tu);return C.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{ref:t}),C.createElement("path",{d:"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),nu=["color"],iu=C.forwardRef(function(d,t){var e=d.color,r=e===void 0?"currentColor":e,n=ct(d,nu);return C.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{ref:t}),C.createElement("path",{d:"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),ru=["color"],Ki=C.forwardRef(function(d,t){var e=d.color,r=e===void 0?"currentColor":e,n=ct(d,ru);return C.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{ref:t}),C.createElement("path",{d:"M2.5 1H12.5C13.3284 1 14 1.67157 14 2.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V2.5C1 1.67157 1.67157 1 2.5 1ZM2.5 2C2.22386 2 2 2.22386 2 2.5V8.3636L3.6818 6.6818C3.76809 6.59551 3.88572 6.54797 4.00774 6.55007C4.12975 6.55216 4.24568 6.60372 4.32895 6.69293L7.87355 10.4901L10.6818 7.6818C10.8575 7.50607 11.1425 7.50607 11.3182 7.6818L13 9.3636V2.5C13 2.22386 12.7761 2 12.5 2H2.5ZM2 12.5V9.6364L3.98887 7.64753L7.5311 11.4421L8.94113 13H2.5C2.22386 13 2 12.7761 2 12.5ZM12.5 13H10.155L8.48336 11.153L11 8.6364L13 10.6364V12.5C13 12.7761 12.7761 13 12.5 13ZM6.64922 5.5C6.64922 5.03013 7.03013 4.64922 7.5 4.64922C7.96987 4.64922 8.35078 5.03013 8.35078 5.5C8.35078 5.96987 7.96987 6.35078 7.5 6.35078C7.03013 6.35078 6.64922 5.96987 6.64922 5.5ZM7.5 3.74922C6.53307 3.74922 5.74922 4.53307 5.74922 5.5C5.74922 6.46693 6.53307 7.25078 7.5 7.25078C8.46693 7.25078 9.25078 6.46693 9.25078 5.5C9.25078 4.53307 8.46693 3.74922 7.5 3.74922Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),au=["color"],ou=C.forwardRef(function(d,t){var e=d.color,r=e===void 0?"currentColor":e,n=ct(d,au);return C.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{ref:t}),C.createElement("path",{d:"M5.49998 0.5C5.49998 0.223858 5.72383 0 5.99998 0H7.49998H8.99998C9.27612 0 9.49998 0.223858 9.49998 0.5C9.49998 0.776142 9.27612 1 8.99998 1H7.99998V2.11922C9.09832 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.058 3.05806L12.058 2.05806C12.3021 1.81398 12.6978 1.81398 12.9419 2.05806C13.186 2.30214 13.186 2.69786 12.9419 2.94194L11.967 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.49998 14.9C3.96535 14.9 1.09998 12.0346 1.09998 8.49998C1.09998 5.13361 3.69904 2.3743 6.99998 2.11922V1H5.99998C5.72383 1 5.49998 0.776142 5.49998 0.5ZM2.09998 8.49998C2.09998 5.51764 4.51764 3.09998 7.49998 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.49998 13.9C4.51764 13.9 2.09998 11.4823 2.09998 8.49998ZM7.49998 8.49998V4.09998C5.06992 4.09998 3.09998 6.06992 3.09998 8.49998C3.09998 10.93 5.06992 12.9 7.49998 12.9C8.715 12.9 9.815 12.4075 10.6112 11.6112L7.49998 8.49998Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),su=["color"],lu=C.forwardRef(function(d,t){var e=d.color,r=e===void 0?"currentColor":e,n=ct(d,su);return C.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{ref:t}),C.createElement("path",{d:"M7.75432 0.819537C7.59742 0.726821 7.4025 0.726821 7.24559 0.819537L1.74559 4.06954C1.59336 4.15949 1.49996 4.32317 1.49996 4.5C1.49996 4.67683 1.59336 4.84051 1.74559 4.93046L7.24559 8.18046C7.4025 8.27318 7.59742 8.27318 7.75432 8.18046L13.2543 4.93046C13.4066 4.84051 13.5 4.67683 13.5 4.5C13.5 4.32317 13.4066 4.15949 13.2543 4.06954L7.75432 0.819537ZM7.49996 7.16923L2.9828 4.5L7.49996 1.83077L12.0171 4.5L7.49996 7.16923ZM1.5695 7.49564C1.70998 7.2579 2.01659 7.17906 2.25432 7.31954L7.49996 10.4192L12.7456 7.31954C12.9833 7.17906 13.2899 7.2579 13.4304 7.49564C13.5709 7.73337 13.4921 8.03998 13.2543 8.18046L7.75432 11.4305C7.59742 11.5232 7.4025 11.5232 7.24559 11.4305L1.74559 8.18046C1.50786 8.03998 1.42901 7.73337 1.5695 7.49564ZM1.56949 10.4956C1.70998 10.2579 2.01658 10.1791 2.25432 10.3195L7.49996 13.4192L12.7456 10.3195C12.9833 10.1791 13.2899 10.2579 13.4304 10.4956C13.5709 10.7334 13.4921 11.04 13.2543 11.1805L7.75432 14.4305C7.59742 14.5232 7.4025 14.5232 7.24559 14.4305L1.74559 11.1805C1.50785 11.04 1.42901 10.7334 1.56949 10.4956Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),cu=["color"],du=C.forwardRef(function(d,t){var e=d.color,r=e===void 0?"currentColor":e,n=ct(d,cu);return C.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{ref:t}),C.createElement("path",{d:"M8.69667 0.0403541C8.90859 0.131038 9.03106 0.354857 8.99316 0.582235L8.0902 6.00001H12.5C12.6893 6.00001 12.8625 6.10701 12.9472 6.27641C13.0319 6.4458 13.0136 6.6485 12.8999 6.80001L6.89997 14.8C6.76167 14.9844 6.51521 15.0503 6.30328 14.9597C6.09135 14.869 5.96888 14.6452 6.00678 14.4178L6.90974 9H2.49999C2.31061 9 2.13748 8.893 2.05278 8.72361C1.96809 8.55422 1.98636 8.35151 2.09999 8.2L8.09997 0.200038C8.23828 0.0156255 8.48474 -0.0503301 8.69667 0.0403541ZM3.49999 8.00001H7.49997C7.64695 8.00001 7.78648 8.06467 7.88148 8.17682C7.97648 8.28896 8.01733 8.43723 7.99317 8.5822L7.33027 12.5596L11.5 7.00001H7.49997C7.353 7.00001 7.21347 6.93534 7.11846 6.8232C7.02346 6.71105 6.98261 6.56279 7.00678 6.41781L7.66968 2.44042L3.49999 8.00001Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),hu=["color"],uu=C.forwardRef(function(d,t){var e=d.color,r=e===void 0?"currentColor":e,n=ct(d,hu);return C.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{ref:t}),C.createElement("path",{d:"M1.49988 2.00012C1.77602 2.00012 1.99988 1.77626 1.99988 1.50012C1.99988 1.22398 1.77602 1.00012 1.49988 1.00012C1.22374 1.00012 0.999878 1.22398 0.999878 1.50012C0.999878 1.77626 1.22374 2.00012 1.49988 2.00012ZM4.49988 2.00012C4.77602 2.00012 4.99988 1.77626 4.99988 1.50012C4.99988 1.22398 4.77602 1.00012 4.49988 1.00012C4.22374 1.00012 3.99988 1.22398 3.99988 1.50012C3.99988 1.77626 4.22374 2.00012 4.49988 2.00012ZM7.99988 1.50012C7.99988 1.77626 7.77602 2.00012 7.49988 2.00012C7.22374 2.00012 6.99988 1.77626 6.99988 1.50012C6.99988 1.22398 7.22374 1.00012 7.49988 1.00012C7.77602 1.00012 7.99988 1.22398 7.99988 1.50012ZM10.4999 2.00012C10.776 2.00012 10.9999 1.77626 10.9999 1.50012C10.9999 1.22398 10.776 1.00012 10.4999 1.00012C10.2237 1.00012 9.99988 1.22398 9.99988 1.50012C9.99988 1.77626 10.2237 2.00012 10.4999 2.00012ZM13.9999 1.50012C13.9999 1.77626 13.776 2.00012 13.4999 2.00012C13.2237 2.00012 12.9999 1.77626 12.9999 1.50012C12.9999 1.22398 13.2237 1.00012 13.4999 1.00012C13.776 1.00012 13.9999 1.22398 13.9999 1.50012ZM1.49988 14.0001C1.77602 14.0001 1.99988 13.7763 1.99988 13.5001C1.99988 13.224 1.77602 13.0001 1.49988 13.0001C1.22374 13.0001 0.999878 13.224 0.999878 13.5001C0.999878 13.7763 1.22374 14.0001 1.49988 14.0001ZM1.99988 10.5001C1.99988 10.7763 1.77602 11.0001 1.49988 11.0001C1.22374 11.0001 0.999878 10.7763 0.999878 10.5001C0.999878 10.224 1.22374 10.0001 1.49988 10.0001C1.77602 10.0001 1.99988 10.224 1.99988 10.5001ZM1.49988 8.00012C1.77602 8.00012 1.99988 7.77626 1.99988 7.50012C1.99988 7.22398 1.77602 7.00012 1.49988 7.00012C1.22374 7.00012 0.999878 7.22398 0.999878 7.50012C0.999878 7.77626 1.22374 8.00012 1.49988 8.00012ZM1.99988 4.50012C1.99988 4.77626 1.77602 5.00012 1.49988 5.00012C1.22374 5.00012 0.999878 4.77626 0.999878 4.50012C0.999878 4.22398 1.22374 4.00012 1.49988 4.00012C1.77602 4.00012 1.99988 4.22398 1.99988 4.50012ZM13.4999 11.0001C13.776 11.0001 13.9999 10.7763 13.9999 10.5001C13.9999 10.224 13.776 10.0001 13.4999 10.0001C13.2237 10.0001 12.9999 10.224 12.9999 10.5001C12.9999 10.7763 13.2237 11.0001 13.4999 11.0001ZM13.9999 7.50012C13.9999 7.77626 13.776 8.00012 13.4999 8.00012C13.2237 8.00012 12.9999 7.77626 12.9999 7.50012C12.9999 7.22398 13.2237 7.00012 13.4999 7.00012C13.776 7.00012 13.9999 7.22398 13.9999 7.50012ZM13.4999 5.00012C13.776 5.00012 13.9999 4.77626 13.9999 4.50012C13.9999 4.22398 13.776 4.00012 13.4999 4.00012C13.2237 4.00012 12.9999 4.22398 12.9999 4.50012C12.9999 4.77626 13.2237 5.00012 13.4999 5.00012ZM4.99988 13.5001C4.99988 13.7763 4.77602 14.0001 4.49988 14.0001C4.22374 14.0001 3.99988 13.7763 3.99988 13.5001C3.99988 13.224 4.22374 13.0001 4.49988 13.0001C4.77602 13.0001 4.99988 13.224 4.99988 13.5001ZM7.49988 14.0001C7.77602 14.0001 7.99988 13.7763 7.99988 13.5001C7.99988 13.224 7.77602 13.0001 7.49988 13.0001C7.22374 13.0001 6.99988 13.224 6.99988 13.5001C6.99988 13.7763 7.22374 14.0001 7.49988 14.0001ZM10.9999 13.5001C10.9999 13.7763 10.776 14.0001 10.4999 14.0001C10.2237 14.0001 9.99988 13.7763 9.99988 13.5001C9.99988 13.224 10.2237 13.0001 10.4999 13.0001C10.776 13.0001 10.9999 13.224 10.9999 13.5001ZM13.4999 14.0001C13.776 14.0001 13.9999 13.7763 13.9999 13.5001C13.9999 13.224 13.776 13.0001 13.4999 13.0001C13.2237 13.0001 12.9999 13.224 12.9999 13.5001C12.9999 13.7763 13.2237 14.0001 13.4999 14.0001ZM3.99988 5.00012C3.99988 4.44784 4.44759 4.00012 4.99988 4.00012H9.99988C10.5522 4.00012 10.9999 4.44784 10.9999 5.00012V10.0001C10.9999 10.5524 10.5522 11.0001 9.99988 11.0001H4.99988C4.44759 11.0001 3.99988 10.5524 3.99988 10.0001V5.00012ZM4.99988 5.00012H9.99988V10.0001H4.99988V5.00012Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),fu=["color"],pu=C.forwardRef(function(d,t){var e=d.color,r=e===void 0?"currentColor":e,n=ct(d,fu);return C.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{ref:t}),C.createElement("path",{d:"M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),mu=["color"],gu=C.forwardRef(function(d,t){var e=d.color,r=e===void 0?"currentColor":e,n=ct(d,mu);return C.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{ref:t}),C.createElement("path",{d:"M6.04995 2.74998C6.04995 2.44623 5.80371 2.19998 5.49995 2.19998C5.19619 2.19998 4.94995 2.44623 4.94995 2.74998V12.25C4.94995 12.5537 5.19619 12.8 5.49995 12.8C5.80371 12.8 6.04995 12.5537 6.04995 12.25V2.74998ZM10.05 2.74998C10.05 2.44623 9.80371 2.19998 9.49995 2.19998C9.19619 2.19998 8.94995 2.44623 8.94995 2.74998V12.25C8.94995 12.5537 9.19619 12.8 9.49995 12.8C9.80371 12.8 10.05 12.5537 10.05 12.25V2.74998Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),vu=["color"],xu=C.forwardRef(function(d,t){var e=d.color,r=e===void 0?"currentColor":e,n=ct(d,vu);return C.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{ref:t}),C.createElement("path",{d:"M6.85357 3.85355L7.65355 3.05353C8.2981 2.40901 9.42858 1.96172 10.552 1.80125C11.1056 1.72217 11.6291 1.71725 12.0564 1.78124C12.4987 1.84748 12.7698 1.97696 12.8965 2.10357C13.0231 2.23018 13.1526 2.50125 13.2188 2.94357C13.2828 3.37086 13.2779 3.89439 13.1988 4.44801C13.0383 5.57139 12.591 6.70188 11.9464 7.34645L7.49999 11.7929L6.35354 10.6465C6.15827 10.4512 5.84169 10.4512 5.64643 10.6465C5.45117 10.8417 5.45117 11.1583 5.64643 11.3536L7.14644 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L8.40073 12.3064L9.57124 14.2572C9.65046 14.3893 9.78608 14.4774 9.9389 14.4963C10.0917 14.5151 10.2447 14.4624 10.3535 14.3536L12.3535 12.3536C12.4648 12.2423 12.5172 12.0851 12.495 11.9293L12.0303 8.67679L12.6536 8.05355C13.509 7.19808 14.0117 5.82855 14.1887 4.58943C14.2784 3.9618 14.2891 3.33847 14.2078 2.79546C14.1287 2.26748 13.9519 1.74482 13.6035 1.39645C13.2552 1.04809 12.7325 0.871332 12.2045 0.792264C11.6615 0.710945 11.0382 0.721644 10.4105 0.8113C9.17143 0.988306 7.80189 1.491 6.94644 2.34642L6.32322 2.96968L3.07071 2.50504C2.91492 2.48278 2.75773 2.53517 2.64645 2.64646L0.646451 4.64645C0.537579 4.75533 0.484938 4.90829 0.50375 5.0611C0.522563 5.21391 0.61073 5.34954 0.742757 5.42876L2.69364 6.59928L2.14646 7.14645C2.0527 7.24022 2.00002 7.3674 2.00002 7.50001C2.00002 7.63261 2.0527 7.75979 2.14646 7.85356L3.64647 9.35356C3.84173 9.54883 4.15831 9.54883 4.35357 9.35356C4.54884 9.1583 4.54884 8.84172 4.35357 8.64646L3.20712 7.50001L3.85357 6.85356L6.85357 3.85355ZM10.0993 13.1936L9.12959 11.5775L11.1464 9.56067L11.4697 11.8232L10.0993 13.1936ZM3.42251 5.87041L5.43935 3.85356L3.17678 3.53034L1.80638 4.90074L3.42251 5.87041ZM2.35356 10.3535C2.54882 10.1583 2.54882 9.8417 2.35356 9.64644C2.1583 9.45118 1.84171 9.45118 1.64645 9.64644L0.646451 10.6464C0.451188 10.8417 0.451188 11.1583 0.646451 11.3535C0.841713 11.5488 1.1583 11.5488 1.35356 11.3535L2.35356 10.3535ZM3.85358 11.8536C4.04884 11.6583 4.04885 11.3417 3.85359 11.1465C3.65833 10.9512 3.34175 10.9512 3.14648 11.1465L1.14645 13.1464C0.95119 13.3417 0.951187 13.6583 1.14645 13.8535C1.34171 14.0488 1.65829 14.0488 1.85355 13.8536L3.85358 11.8536ZM5.35356 13.3535C5.54882 13.1583 5.54882 12.8417 5.35356 12.6464C5.1583 12.4512 4.84171 12.4512 4.64645 12.6464L3.64645 13.6464C3.45119 13.8417 3.45119 14.1583 3.64645 14.3535C3.84171 14.5488 4.1583 14.5488 4.35356 14.3535L5.35356 13.3535ZM9.49997 6.74881C10.1897 6.74881 10.7488 6.1897 10.7488 5.5C10.7488 4.8103 10.1897 4.25118 9.49997 4.25118C8.81026 4.25118 8.25115 4.8103 8.25115 5.5C8.25115 6.1897 8.81026 6.74881 9.49997 6.74881Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),_u=["color"],yu=C.forwardRef(function(d,t){var e=d.color,r=e===void 0?"currentColor":e,n=ct(d,_u);return C.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{ref:t}),C.createElement("path",{d:"M0.5 4C0.223858 4 0 4.22386 0 4.5V10.5C0 10.7761 0.223858 11 0.5 11H14.5C14.7761 11 15 10.7761 15 10.5V4.5C15 4.22386 14.7761 4 14.5 4H0.5ZM1 10V5H2.075V7.5C2.075 7.73472 2.26528 7.925 2.5 7.925C2.73472 7.925 2.925 7.73472 2.925 7.5V5H4.075V6.5C4.075 6.73472 4.26528 6.925 4.5 6.925C4.73472 6.925 4.925 6.73472 4.925 6.5V5H6.075V6.5C6.075 6.73472 6.26528 6.925 6.5 6.925C6.73472 6.925 6.925 6.73472 6.925 6.5V5H8.075V7.5C8.075 7.73472 8.26528 7.925 8.5 7.925C8.73472 7.925 8.925 7.73472 8.925 7.5V5H10.075V6.5C10.075 6.73472 10.2653 6.925 10.5 6.925C10.7347 6.925 10.925 6.73472 10.925 6.5V5H12.075V6.5C12.075 6.73472 12.2653 6.925 12.5 6.925C12.7347 6.925 12.925 6.73472 12.925 6.5V5H14V10H1Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),Su=["color"],Mu=C.forwardRef(function(d,t){var e=d.color,r=e===void 0?"currentColor":e,n=ct(d,Su);return C.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{ref:t}),C.createElement("path",{d:"M2.5 4C2.22386 4 2 4.22386 2 4.5C2 4.77614 2.22386 5 2.5 5H12.5C12.7761 5 13 4.77614 13 4.5C13 4.22386 12.7761 4 12.5 4H2.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),bu=["color"],Ja=C.forwardRef(function(d,t){var e=d.color,r=e===void 0?"currentColor":e,n=ct(d,bu);return C.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{ref:t}),C.createElement("path",{d:"M4 6H11L7.5 10.5L4 6Z",fill:r}))}),Cu=["color"],Qa=C.forwardRef(function(d,t){var e=d.color,r=e===void 0?"currentColor":e,n=ct(d,Cu);return C.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{ref:t}),C.createElement("path",{d:"M4 9H11L7.5 4.5L4 9Z",fill:r}))}),wu=["color"],Ka=C.forwardRef(function(d,t){var e=d.color,r=e===void 0?"currentColor":e,n=ct(d,wu);return C.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{ref:t}),C.createElement("path",{d:"M7.49998 1L6.92321 2.00307L1.17498 12L0.599976 13H1.7535H13.2464H14.4L13.825 12L8.07674 2.00307L7.49998 1ZM7.49998 3.00613L2.3285 12H12.6714L7.49998 3.00613Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))});function Eu(){var d=Object.create(null);function t(n,i){var o=n.id,s=n.name,a=n.dependencies;a===void 0&&(a=[]);var l=n.init;l===void 0&&(l=function(){});var c=n.getTransferables;if(c===void 0&&(c=null),!d[o])try{a=a.map(function(u){return u&&u.isWorkerModule&&(t(u,function(f){if(f instanceof Error)throw f}),u=d[u.id].value),u}),l=r("<"+s+">.init",l),c&&(c=r("<"+s+">.getTransferables",c));var h=null;typeof l=="function"?h=l.apply(void 0,a):console.error("worker module init function failed to rehydrate"),d[o]={id:o,value:h,getTransferables:c},i(h)}catch(u){u&&u.noLog||console.error(u),i(u)}}function e(n,i){var o,s=n.id,a=n.args;(!d[s]||typeof d[s].value!="function")&&i(new Error("Worker module "+s+": not found or its 'init' did not return a function"));try{var l=(o=d[s]).value.apply(o,a);l&&typeof l.then=="function"?l.then(c,function(h){return i(h instanceof Error?h:new Error(""+h))}):c(l)}catch(h){i(h)}function c(h){try{var u=d[s].getTransferables&&d[s].getTransferables(h);(!u||!Array.isArray(u)||!u.length)&&(u=void 0),i(h,u)}catch(f){console.error(f),i(f)}}}function r(n,i){var o=void 0;self.troikaDefine=function(a){return o=a};var s=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+i+`
)`],{type:"application/javascript"}));try{importScripts(s)}catch(a){console.error(a)}return URL.revokeObjectURL(s),delete self.troikaDefine,o}self.addEventListener("message",function(n){var i=n.data,o=i.messageId,s=i.action,a=i.data;try{s==="registerModule"&&t(a,function(l){l instanceof Error?postMessage({messageId:o,success:!1,error:l.message}):postMessage({messageId:o,success:!0,result:{isCallable:typeof l=="function"}})}),s==="callModule"&&e(a,function(l,c){l instanceof Error?postMessage({messageId:o,success:!1,error:l.message}):postMessage({messageId:o,success:!0,result:l},c||void 0)})}catch(l){postMessage({messageId:o,success:!1,error:l.stack})}})}function Au(d){var t=function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];return t._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,e);throw new Error("Worker module function was called but `init` did not return a callable function")})};return t._getInitResult=function(){var e=d.dependencies,r=d.init;e=Array.isArray(e)?e.map(function(i){return i&&(i=i.onMainThread||i,i._getInitResult&&(i=i._getInitResult())),i}):[];var n=Promise.all(e).then(function(i){return r.apply(null,i)});return t._getInitResult=function(){return n},n},t}var to=function(){var d=!1;if(typeof window<"u"&&typeof window.document<"u")try{var t=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));t.terminate(),d=!0}catch(e){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+e.message+"]")}return to=function(){return d},d},Tu=0,Iu=0,Hi=!1,wn=Object.create(null),En=Object.create(null),tr=Object.create(null);function fn(d){if((!d||typeof d.init!="function")&&!Hi)throw new Error("requires `options.init` function");var t=d.dependencies,e=d.init,r=d.getTransferables,n=d.workerId,i=Au(d);n==null&&(n="#default");var o="workerModule"+ ++Tu,s=d.name||o,a=null;t=t&&t.map(function(c){return typeof c=="function"&&!c.workerModuleData&&(Hi=!0,c=fn({workerId:n,name:"<"+s+"> function dependency: "+c.name,init:`function(){return (
`+oi(c)+`
)}`}),Hi=!1),c&&c.workerModuleData&&(c=c.workerModuleData),c});function l(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(!to())return i.apply(void 0,c);if(!a){a=aa(n,"registerModule",l.workerModuleData);var u=function(){a=null,En[n].delete(u)};(En[n]||(En[n]=new Set)).add(u)}return a.then(function(f){var p=f.isCallable;if(p)return aa(n,"callModule",{id:o,args:c});throw new Error("Worker module function was called but `init` did not return a callable function")})}return l.workerModuleData={isWorkerModule:!0,id:o,name:s,dependencies:t,init:oi(e),getTransferables:r&&oi(r)},l.onMainThread=i,l}function Uu(d){En[d]&&En[d].forEach(function(t){t()}),wn[d]&&(wn[d].terminate(),delete wn[d])}function oi(d){var t=d.toString();return!/^function/.test(t)&&/^\w+\s*\(/.test(t)&&(t="function "+t),t}function Pu(d){var t=wn[d];if(!t){var e=oi(Eu);t=wn[d]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+d.replace(/\*/g,"")+` **/

;(`+e+")()"],{type:"application/javascript"}))),t.onmessage=function(r){var n=r.data,i=n.messageId,o=tr[i];if(!o)throw new Error("WorkerModule response with empty or unknown messageId");delete tr[i],o(n)}}return t}function aa(d,t,e){return new Promise(function(r,n){var i=++Iu;tr[i]=function(o){o.success?r(o.result):n(new Error("Error in worker "+t+" call: "+o.error))},Pu(d).postMessage({messageId:i,action:t,data:e})})}const eo=/\bvoid\s+main\s*\(\s*\)\s*{/g;function er(d){const t=/^[ \t]*#include +<([\w\d./]+)>/gm;function e(r,n){let i=kd[n];return i?er(i):r}return d.replace(t,e)}const bt=[];for(let d=0;d<256;d++)bt[d]=(d<16?"0":"")+d.toString(16);function Du(){const d=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bt[d&255]+bt[d>>8&255]+bt[d>>16&255]+bt[d>>24&255]+"-"+bt[t&255]+bt[t>>8&255]+"-"+bt[t>>16&15|64]+bt[t>>24&255]+"-"+bt[e&63|128]+bt[e>>8&255]+"-"+bt[e>>16&255]+bt[e>>24&255]+bt[r&255]+bt[r>>8&255]+bt[r>>16&255]+bt[r>>24&255]).toUpperCase()}const ke=Object.assign||function(){let d=arguments[0];for(let t=1,e=arguments.length;t<e;t++){let r=arguments[t];if(r)for(let n in r)Object.prototype.hasOwnProperty.call(r,n)&&(d[n]=r[n])}return d},Lu=Date.now(),oa=new WeakMap,sa=new Map;let Ru=1e10;function nr(d,t){const e=Ou(t);let r=oa.get(d);if(r||oa.set(d,r=Object.create(null)),r[e])return new r[e];const n=`_onBeforeCompile${e}`,i=function(l,c){d.onBeforeCompile.call(this,l,c);const h=this.customProgramCacheKey()+"|"+l.vertexShader+"|"+l.fragmentShader;let u=sa[h];if(!u){const f=Fu(this,l,t,e);u=sa[h]=f}l.vertexShader=u.vertexShader,l.fragmentShader=u.fragmentShader,ke(l.uniforms,this.uniforms),t.timeUniform&&(l.uniforms[t.timeUniform]={get value(){return Date.now()-Lu}}),this[n]&&this[n](l)},o=function(){return s(t.chained?d:d.clone())},s=function(l){const c=Object.create(l,a);return Object.defineProperty(c,"baseMaterial",{value:d}),Object.defineProperty(c,"id",{value:Ru++}),c.uuid=Du(),c.uniforms=ke({},l.uniforms,t.uniforms),c.defines=ke({},l.defines,t.defines),c.defines[`TROIKA_DERIVED_MATERIAL_${e}`]="",c.extensions=ke({},l.extensions,t.extensions),c._listeners=void 0,c},a={constructor:{value:o},isDerivedMaterial:{value:!0},type:{get:()=>d.type,set:l=>{d.type=l}},isDerivedFrom:{writable:!0,configurable:!0,value:function(l){const c=this.baseMaterial;return l===c||c.isDerivedMaterial&&c.isDerivedFrom(l)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return d.customProgramCacheKey()+"|"+e}},onBeforeCompile:{get(){return i},set(l){this[n]=l}},copy:{writable:!0,configurable:!0,value:function(l){return d.copy.call(this,l),!d.isShaderMaterial&&!d.isDerivedMaterial&&(ke(this.extensions,l.extensions),ke(this.defines,l.defines),ke(this.uniforms,nl.clone(l.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const l=new d.constructor;return s(l).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let l=this._depthMaterial;return l||(l=this._depthMaterial=nr(d.isDerivedMaterial?d.getDepthMaterial():new Nd({depthPacking:_s}),t),l.defines.IS_DEPTH_MATERIAL="",l.uniforms=this.uniforms),l}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let l=this._distanceMaterial;return l||(l=this._distanceMaterial=nr(d.isDerivedMaterial?d.getDistanceMaterial():new Od,t),l.defines.IS_DISTANCE_MATERIAL="",l.uniforms=this.uniforms),l}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:l,_distanceMaterial:c}=this;l&&l.dispose(),c&&c.dispose(),d.dispose.call(this)}}};return r[e]=o,new o}function Fu(d,{vertexShader:t,fragmentShader:e},r,n){let{vertexDefs:i,vertexMainIntro:o,vertexMainOutro:s,vertexTransform:a,fragmentDefs:l,fragmentMainIntro:c,fragmentMainOutro:h,fragmentColorTransform:u,customRewriter:f,timeUniform:p}=r;if(i=i||"",o=o||"",s=s||"",l=l||"",c=c||"",h=h||"",(a||f)&&(t=er(t)),(u||f)&&(e=e.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),e=er(e)),f){let g=f({vertexShader:t,fragmentShader:e});t=g.vertexShader,e=g.fragmentShader}if(u){let g=[];e=e.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,m=>(g.push(m),"")),h=`${u}
${g.join(`
`)}
${h}`}if(p){const g=`
uniform float ${p};
`;i=g+i,l=g+l}return a&&(t=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${t}
`,i=`${i}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${a}
}
`,o=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${o}
`,t=t.replace(/\b(position|normal|uv)\b/g,(g,m,v,x)=>/\battribute\s+vec[23]\s+$/.test(x.substr(0,v))?m:`troika_${m}_${n}`),d.map&&d.map.channel>0||(t=t.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),t=la(t,n,i,o,s),e=la(e,n,l,c,h),{vertexShader:t,fragmentShader:e}}function la(d,t,e,r,n){return(r||n||e)&&(d=d.replace(eo,`
${e}
void troikaOrigMain${t}() {`),d+=`
void main() {
  ${r}
  troikaOrigMain${t}();
  ${n}
}`),d}function ku(d,t){return d==="uniforms"?void 0:typeof t=="function"?t.toString():t}let Nu=0;const ca=new Map;function Ou(d){const t=JSON.stringify(d,ku);let e=ca.get(t);return e==null&&ca.set(t,e=++Nu),e}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function zu(){return typeof window>"u"&&(self.window=self),function(d){var t={parse:function(n){var i=t._bin,o=new Uint8Array(n);if(i.readASCII(o,0,4)=="ttcf"){var s=4;i.readUshort(o,s),s+=2,i.readUshort(o,s),s+=2;var a=i.readUint(o,s);s+=4;for(var l=[],c=0;c<a;c++){var h=i.readUint(o,s);s+=4,l.push(t._readFont(o,h))}return l}return[t._readFont(o,0)]},_readFont:function(n,i){var o=t._bin,s=i;o.readFixed(n,i),i+=4;var a=o.readUshort(n,i);i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2;for(var l=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],c={_data:n,_offset:s},h={},u=0;u<a;u++){var f=o.readASCII(n,i,4);i+=4,o.readUint(n,i),i+=4;var p=o.readUint(n,i);i+=4;var g=o.readUint(n,i);i+=4,h[f]={offset:p,length:g}}for(u=0;u<l.length;u++){var m=l[u];h[m]&&(c[m.trim()]=t[m.trim()].parse(n,h[m].offset,h[m].length,c))}return c},_tabOffset:function(n,i,o){for(var s=t._bin,a=s.readUshort(n,o+4),l=o+12,c=0;c<a;c++){var h=s.readASCII(n,l,4);l+=4,s.readUint(n,l),l+=4;var u=s.readUint(n,l);if(l+=4,s.readUint(n,l),l+=4,h==i)return u}return 0}};t._bin={readFixed:function(n,i){return(n[i]<<8|n[i+1])+(n[i+2]<<8|n[i+3])/65540},readF2dot14:function(n,i){return t._bin.readShort(n,i)/16384},readInt:function(n,i){return t._bin._view(n).getInt32(i)},readInt8:function(n,i){return t._bin._view(n).getInt8(i)},readShort:function(n,i){return t._bin._view(n).getInt16(i)},readUshort:function(n,i){return t._bin._view(n).getUint16(i)},readUshorts:function(n,i,o){for(var s=[],a=0;a<o;a++)s.push(t._bin.readUshort(n,i+2*a));return s},readUint:function(n,i){return t._bin._view(n).getUint32(i)},readUint64:function(n,i){return 4294967296*t._bin.readUint(n,i)+t._bin.readUint(n,i+4)},readASCII:function(n,i,o){for(var s="",a=0;a<o;a++)s+=String.fromCharCode(n[i+a]);return s},readUnicode:function(n,i,o){for(var s="",a=0;a<o;a++){var l=n[i++]<<8|n[i++];s+=String.fromCharCode(l)}return s},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,i,o){var s=t._bin._tdec;return s&&i==0&&o==n.length?s.decode(n):t._bin.readASCII(n,i,o)},readBytes:function(n,i,o){for(var s=[],a=0;a<o;a++)s.push(n[i+a]);return s},readASCIIArray:function(n,i,o){for(var s=[],a=0;a<o;a++)s.push(String.fromCharCode(n[i+a]));return s},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},t._lctf={},t._lctf.parse=function(n,i,o,s,a){var l=t._bin,c={},h=i;l.readFixed(n,i),i+=4;var u=l.readUshort(n,i);i+=2;var f=l.readUshort(n,i);i+=2;var p=l.readUshort(n,i);return i+=2,c.scriptList=t._lctf.readScriptList(n,h+u),c.featureList=t._lctf.readFeatureList(n,h+f),c.lookupList=t._lctf.readLookupList(n,h+p,a),c},t._lctf.readLookupList=function(n,i,o){var s=t._bin,a=i,l=[],c=s.readUshort(n,i);i+=2;for(var h=0;h<c;h++){var u=s.readUshort(n,i);i+=2;var f=t._lctf.readLookupTable(n,a+u,o);l.push(f)}return l},t._lctf.readLookupTable=function(n,i,o){var s=t._bin,a=i,l={tabs:[]};l.ltype=s.readUshort(n,i),i+=2,l.flag=s.readUshort(n,i),i+=2;var c=s.readUshort(n,i);i+=2;for(var h=l.ltype,u=0;u<c;u++){var f=s.readUshort(n,i);i+=2;var p=o(n,h,a+f,l);l.tabs.push(p)}return l},t._lctf.numOfOnes=function(n){for(var i=0,o=0;o<32;o++)n>>>o&1&&i++;return i},t._lctf.readClassDef=function(n,i){var o=t._bin,s=[],a=o.readUshort(n,i);if(i+=2,a==1){var l=o.readUshort(n,i);i+=2;var c=o.readUshort(n,i);i+=2;for(var h=0;h<c;h++)s.push(l+h),s.push(l+h),s.push(o.readUshort(n,i)),i+=2}if(a==2){var u=o.readUshort(n,i);for(i+=2,h=0;h<u;h++)s.push(o.readUshort(n,i)),i+=2,s.push(o.readUshort(n,i)),i+=2,s.push(o.readUshort(n,i)),i+=2}return s},t._lctf.getInterval=function(n,i){for(var o=0;o<n.length;o+=3){var s=n[o],a=n[o+1];if(n[o+2],s<=i&&i<=a)return o}return-1},t._lctf.readCoverage=function(n,i){var o=t._bin,s={};s.fmt=o.readUshort(n,i),i+=2;var a=o.readUshort(n,i);return i+=2,s.fmt==1&&(s.tab=o.readUshorts(n,i,a)),s.fmt==2&&(s.tab=o.readUshorts(n,i,3*a)),s},t._lctf.coverageIndex=function(n,i){var o=n.tab;if(n.fmt==1)return o.indexOf(i);if(n.fmt==2){var s=t._lctf.getInterval(o,i);if(s!=-1)return o[s+2]+(i-o[s])}return-1},t._lctf.readFeatureList=function(n,i){var o=t._bin,s=i,a=[],l=o.readUshort(n,i);i+=2;for(var c=0;c<l;c++){var h=o.readASCII(n,i,4);i+=4;var u=o.readUshort(n,i);i+=2;var f=t._lctf.readFeatureTable(n,s+u);f.tag=h.trim(),a.push(f)}return a},t._lctf.readFeatureTable=function(n,i){var o=t._bin,s=i,a={},l=o.readUshort(n,i);i+=2,l>0&&(a.featureParams=s+l);var c=o.readUshort(n,i);i+=2,a.tab=[];for(var h=0;h<c;h++)a.tab.push(o.readUshort(n,i+2*h));return a},t._lctf.readScriptList=function(n,i){var o=t._bin,s=i,a={},l=o.readUshort(n,i);i+=2;for(var c=0;c<l;c++){var h=o.readASCII(n,i,4);i+=4;var u=o.readUshort(n,i);i+=2,a[h.trim()]=t._lctf.readScriptTable(n,s+u)}return a},t._lctf.readScriptTable=function(n,i){var o=t._bin,s=i,a={},l=o.readUshort(n,i);i+=2,l>0&&(a.default=t._lctf.readLangSysTable(n,s+l));var c=o.readUshort(n,i);i+=2;for(var h=0;h<c;h++){var u=o.readASCII(n,i,4);i+=4;var f=o.readUshort(n,i);i+=2,a[u.trim()]=t._lctf.readLangSysTable(n,s+f)}return a},t._lctf.readLangSysTable=function(n,i){var o=t._bin,s={};o.readUshort(n,i),i+=2,s.reqFeature=o.readUshort(n,i),i+=2;var a=o.readUshort(n,i);return i+=2,s.features=o.readUshorts(n,i,a),s},t.CFF={},t.CFF.parse=function(n,i,o){var s=t._bin;(n=new Uint8Array(n.buffer,i,o))[i=0],n[++i],n[++i],n[++i],i++;var a=[];i=t.CFF.readIndex(n,i,a);for(var l=[],c=0;c<a.length-1;c++)l.push(s.readASCII(n,i+a[c],a[c+1]-a[c]));i+=a[a.length-1];var h=[];i=t.CFF.readIndex(n,i,h);var u=[];for(c=0;c<h.length-1;c++)u.push(t.CFF.readDict(n,i+h[c],i+h[c+1]));i+=h[h.length-1];var f=u[0],p=[];i=t.CFF.readIndex(n,i,p);var g=[];for(c=0;c<p.length-1;c++)g.push(s.readASCII(n,i+p[c],p[c+1]-p[c]));if(i+=p[p.length-1],t.CFF.readSubrs(n,i,f),f.CharStrings){i=f.CharStrings,p=[],i=t.CFF.readIndex(n,i,p);var m=[];for(c=0;c<p.length-1;c++)m.push(s.readBytes(n,i+p[c],p[c+1]-p[c]));f.CharStrings=m}if(f.ROS){i=f.FDArray;var v=[];for(i=t.CFF.readIndex(n,i,v),f.FDArray=[],c=0;c<v.length-1;c++){var x=t.CFF.readDict(n,i+v[c],i+v[c+1]);t.CFF._readFDict(n,x,g),f.FDArray.push(x)}i+=v[v.length-1],i=f.FDSelect,f.FDSelect=[];var _=n[i];if(i++,_!=3)throw _;var y=s.readUshort(n,i);for(i+=2,c=0;c<y+1;c++)f.FDSelect.push(s.readUshort(n,i),n[i+2]),i+=3}return f.Encoding&&(f.Encoding=t.CFF.readEncoding(n,f.Encoding,f.CharStrings.length)),f.charset&&(f.charset=t.CFF.readCharset(n,f.charset,f.CharStrings.length)),t.CFF._readFDict(n,f,g),f},t.CFF._readFDict=function(n,i,o){var s;for(var a in i.Private&&(s=i.Private[1],i.Private=t.CFF.readDict(n,s,s+i.Private[0]),i.Private.Subrs&&t.CFF.readSubrs(n,s+i.Private.Subrs,i.Private)),i)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(a)!=-1&&(i[a]=o[i[a]-426+35])},t.CFF.readSubrs=function(n,i,o){var s=t._bin,a=[];i=t.CFF.readIndex(n,i,a);var l,c=a.length;l=c<1240?107:c<33900?1131:32768,o.Bias=l,o.Subrs=[];for(var h=0;h<a.length-1;h++)o.Subrs.push(s.readBytes(n,i+a[h],a[h+1]-a[h]))},t.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],t.CFF.glyphByUnicode=function(n,i){for(var o=0;o<n.charset.length;o++)if(n.charset[o]==i)return o;return-1},t.CFF.glyphBySE=function(n,i){return i<0||i>255?-1:t.CFF.glyphByUnicode(n,t.CFF.tableSE[i])},t.CFF.readEncoding=function(n,i,o){t._bin;var s=[".notdef"],a=n[i];if(i++,a!=0)throw"error: unknown encoding format: "+a;var l=n[i];i++;for(var c=0;c<l;c++)s.push(n[i+c]);return s},t.CFF.readCharset=function(n,i,o){var s=t._bin,a=[".notdef"],l=n[i];if(i++,l==0)for(var c=0;c<o;c++){var h=s.readUshort(n,i);i+=2,a.push(h)}else{if(l!=1&&l!=2)throw"error: format: "+l;for(;a.length<o;){h=s.readUshort(n,i),i+=2;var u=0;for(l==1?(u=n[i],i++):(u=s.readUshort(n,i),i+=2),c=0;c<=u;c++)a.push(h),h++}}return a},t.CFF.readIndex=function(n,i,o){var s=t._bin,a=s.readUshort(n,i)+1,l=n[i+=2];if(i++,l==1)for(var c=0;c<a;c++)o.push(n[i+c]);else if(l==2)for(c=0;c<a;c++)o.push(s.readUshort(n,i+2*c));else if(l==3)for(c=0;c<a;c++)o.push(16777215&s.readUint(n,i+3*c-1));else if(a!=1)throw"unsupported offset size: "+l+", count: "+a;return(i+=a*l)-1},t.CFF.getCharString=function(n,i,o){var s=t._bin,a=n[i],l=n[i+1];n[i+2],n[i+3],n[i+4];var c=1,h=null,u=null;a<=20&&(h=a,c=1),a==12&&(h=100*a+l,c=2),21<=a&&a<=27&&(h=a,c=1),a==28&&(u=s.readShort(n,i+1),c=3),29<=a&&a<=31&&(h=a,c=1),32<=a&&a<=246&&(u=a-139,c=1),247<=a&&a<=250&&(u=256*(a-247)+l+108,c=2),251<=a&&a<=254&&(u=256*-(a-251)-l-108,c=2),a==255&&(u=s.readInt(n,i+1)/65535,c=5),o.val=u??"o"+h,o.size=c},t.CFF.readCharString=function(n,i,o){for(var s=i+o,a=t._bin,l=[];i<s;){var c=n[i],h=n[i+1];n[i+2],n[i+3],n[i+4];var u=1,f=null,p=null;c<=20&&(f=c,u=1),c==12&&(f=100*c+h,u=2),c!=19&&c!=20||(f=c,u=2),21<=c&&c<=27&&(f=c,u=1),c==28&&(p=a.readShort(n,i+1),u=3),29<=c&&c<=31&&(f=c,u=1),32<=c&&c<=246&&(p=c-139,u=1),247<=c&&c<=250&&(p=256*(c-247)+h+108,u=2),251<=c&&c<=254&&(p=256*-(c-251)-h-108,u=2),c==255&&(p=a.readInt(n,i+1)/65535,u=5),l.push(p??"o"+f),i+=u}return l},t.CFF.readDict=function(n,i,o){for(var s=t._bin,a={},l=[];i<o;){var c=n[i],h=n[i+1];n[i+2],n[i+3],n[i+4];var u=1,f=null,p=null;if(c==28&&(p=s.readShort(n,i+1),u=3),c==29&&(p=s.readInt(n,i+1),u=5),32<=c&&c<=246&&(p=c-139,u=1),247<=c&&c<=250&&(p=256*(c-247)+h+108,u=2),251<=c&&c<=254&&(p=256*-(c-251)-h-108,u=2),c==255)throw p=s.readInt(n,i+1)/65535,u=5,"unknown number";if(c==30){var g=[];for(u=1;;){var m=n[i+u];u++;var v=m>>4,x=15&m;if(v!=15&&g.push(v),x!=15&&g.push(x),x==15)break}for(var _="",y=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],M=0;M<g.length;M++)_+=y[g[M]];p=parseFloat(_)}c<=21&&(f=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][c],u=1,c==12&&(f=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][h],u=2)),f!=null?(a[f]=l.length==1?l[0]:l,l=[]):l.push(p),i+=u}return a},t.cmap={},t.cmap.parse=function(n,i,o){n=new Uint8Array(n.buffer,i,o),i=0;var s=t._bin,a={};s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);i+=2;var c=[];a.tables=[];for(var h=0;h<l;h++){var u=s.readUshort(n,i);i+=2;var f=s.readUshort(n,i);i+=2;var p=s.readUint(n,i);i+=4;var g="p"+u+"e"+f,m=c.indexOf(p);if(m==-1){var v;m=a.tables.length,c.push(p);var x=s.readUshort(n,p);x==0?v=t.cmap.parse0(n,p):x==4?v=t.cmap.parse4(n,p):x==6?v=t.cmap.parse6(n,p):x==12?v=t.cmap.parse12(n,p):console.debug("unknown format: "+x,u,f,p),a.tables.push(v)}if(a[g]!=null)throw"multiple tables for one platform+encoding";a[g]=m}return a},t.cmap.parse0=function(n,i){var o=t._bin,s={};s.format=o.readUshort(n,i),i+=2;var a=o.readUshort(n,i);i+=2,o.readUshort(n,i),i+=2,s.map=[];for(var l=0;l<a-6;l++)s.map.push(n[i+l]);return s},t.cmap.parse4=function(n,i){var o=t._bin,s=i,a={};a.format=o.readUshort(n,i),i+=2;var l=o.readUshort(n,i);i+=2,o.readUshort(n,i),i+=2;var c=o.readUshort(n,i);i+=2;var h=c/2;a.searchRange=o.readUshort(n,i),i+=2,a.entrySelector=o.readUshort(n,i),i+=2,a.rangeShift=o.readUshort(n,i),i+=2,a.endCount=o.readUshorts(n,i,h),i+=2*h,i+=2,a.startCount=o.readUshorts(n,i,h),i+=2*h,a.idDelta=[];for(var u=0;u<h;u++)a.idDelta.push(o.readShort(n,i)),i+=2;for(a.idRangeOffset=o.readUshorts(n,i,h),i+=2*h,a.glyphIdArray=[];i<s+l;)a.glyphIdArray.push(o.readUshort(n,i)),i+=2;return a},t.cmap.parse6=function(n,i){var o=t._bin,s={};s.format=o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2,s.firstCode=o.readUshort(n,i),i+=2;var a=o.readUshort(n,i);i+=2,s.glyphIdArray=[];for(var l=0;l<a;l++)s.glyphIdArray.push(o.readUshort(n,i)),i+=2;return s},t.cmap.parse12=function(n,i){var o=t._bin,s={};s.format=o.readUshort(n,i),i+=2,i+=2,o.readUint(n,i),i+=4,o.readUint(n,i),i+=4;var a=o.readUint(n,i);i+=4,s.groups=[];for(var l=0;l<a;l++){var c=i+12*l,h=o.readUint(n,c+0),u=o.readUint(n,c+4),f=o.readUint(n,c+8);s.groups.push([h,u,f])}return s},t.glyf={},t.glyf.parse=function(n,i,o,s){for(var a=[],l=0;l<s.maxp.numGlyphs;l++)a.push(null);return a},t.glyf._parseGlyf=function(n,i){var o=t._bin,s=n._data,a=t._tabOffset(s,"glyf",n._offset)+n.loca[i];if(n.loca[i]==n.loca[i+1])return null;var l={};if(l.noc=o.readShort(s,a),a+=2,l.xMin=o.readShort(s,a),a+=2,l.yMin=o.readShort(s,a),a+=2,l.xMax=o.readShort(s,a),a+=2,l.yMax=o.readShort(s,a),a+=2,l.xMin>=l.xMax||l.yMin>=l.yMax)return null;if(l.noc>0){l.endPts=[];for(var c=0;c<l.noc;c++)l.endPts.push(o.readUshort(s,a)),a+=2;var h=o.readUshort(s,a);if(a+=2,s.length-a<h)return null;l.instructions=o.readBytes(s,a,h),a+=h;var u=l.endPts[l.noc-1]+1;for(l.flags=[],c=0;c<u;c++){var f=s[a];if(a++,l.flags.push(f),(8&f)!=0){var p=s[a];a++;for(var g=0;g<p;g++)l.flags.push(f),c++}}for(l.xs=[],c=0;c<u;c++){var m=(2&l.flags[c])!=0,v=(16&l.flags[c])!=0;m?(l.xs.push(v?s[a]:-s[a]),a++):v?l.xs.push(0):(l.xs.push(o.readShort(s,a)),a+=2)}for(l.ys=[],c=0;c<u;c++)m=(4&l.flags[c])!=0,v=(32&l.flags[c])!=0,m?(l.ys.push(v?s[a]:-s[a]),a++):v?l.ys.push(0):(l.ys.push(o.readShort(s,a)),a+=2);var x=0,_=0;for(c=0;c<u;c++)x+=l.xs[c],_+=l.ys[c],l.xs[c]=x,l.ys[c]=_}else{var y;l.parts=[];do{y=o.readUshort(s,a),a+=2;var M={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(l.parts.push(M),M.glyphIndex=o.readUshort(s,a),a+=2,1&y){var E=o.readShort(s,a);a+=2;var b=o.readShort(s,a);a+=2}else E=o.readInt8(s,a),a++,b=o.readInt8(s,a),a++;2&y?(M.m.tx=E,M.m.ty=b):(M.p1=E,M.p2=b),8&y?(M.m.a=M.m.d=o.readF2dot14(s,a),a+=2):64&y?(M.m.a=o.readF2dot14(s,a),a+=2,M.m.d=o.readF2dot14(s,a),a+=2):128&y&&(M.m.a=o.readF2dot14(s,a),a+=2,M.m.b=o.readF2dot14(s,a),a+=2,M.m.c=o.readF2dot14(s,a),a+=2,M.m.d=o.readF2dot14(s,a),a+=2)}while(32&y);if(256&y){var A=o.readUshort(s,a);for(a+=2,l.instr=[],c=0;c<A;c++)l.instr.push(s[a]),a++}}return l},t.GDEF={},t.GDEF.parse=function(n,i,o,s){var a=i;i+=4;var l=t._bin.readUshort(n,i);return{glyphClassDef:l===0?null:t._lctf.readClassDef(n,a+l)}},t.GPOS={},t.GPOS.parse=function(n,i,o,s){return t._lctf.parse(n,i,o,s,t.GPOS.subt)},t.GPOS.subt=function(n,i,o,s){var a=t._bin,l=o,c={};if(c.fmt=a.readUshort(n,o),o+=2,i==1||i==2||i==3||i==7||i==8&&c.fmt<=2){var h=a.readUshort(n,o);o+=2,c.coverage=t._lctf.readCoverage(n,h+l)}if(i==1&&c.fmt==1){var u=a.readUshort(n,o);o+=2,u!=0&&(c.pos=t.GPOS.readValueRecord(n,o,u))}else if(i==2&&c.fmt>=1&&c.fmt<=2){u=a.readUshort(n,o),o+=2;var f=a.readUshort(n,o);o+=2;var p=t._lctf.numOfOnes(u),g=t._lctf.numOfOnes(f);if(c.fmt==1){c.pairsets=[];var m=a.readUshort(n,o);o+=2;for(var v=0;v<m;v++){var x=l+a.readUshort(n,o);o+=2;var _=a.readUshort(n,x);x+=2;for(var y=[],M=0;M<_;M++){var E=a.readUshort(n,x);x+=2,u!=0&&(w=t.GPOS.readValueRecord(n,x,u),x+=2*p),f!=0&&(I=t.GPOS.readValueRecord(n,x,f),x+=2*g),y.push({gid2:E,val1:w,val2:I})}c.pairsets.push(y)}}if(c.fmt==2){var b=a.readUshort(n,o);o+=2;var A=a.readUshort(n,o);o+=2;var P=a.readUshort(n,o);o+=2;var T=a.readUshort(n,o);for(o+=2,c.classDef1=t._lctf.readClassDef(n,l+b),c.classDef2=t._lctf.readClassDef(n,l+A),c.matrix=[],v=0;v<P;v++){var N=[];for(M=0;M<T;M++){var w=null,I=null;u!=0&&(w=t.GPOS.readValueRecord(n,o,u),o+=2*p),f!=0&&(I=t.GPOS.readValueRecord(n,o,f),o+=2*g),N.push({val1:w,val2:I})}c.matrix.push(N)}}}else if(i==4&&c.fmt==1)c.markCoverage=t._lctf.readCoverage(n,a.readUshort(n,o)+l),c.baseCoverage=t._lctf.readCoverage(n,a.readUshort(n,o+2)+l),c.markClassCount=a.readUshort(n,o+4),c.markArray=t.GPOS.readMarkArray(n,a.readUshort(n,o+6)+l),c.baseArray=t.GPOS.readBaseArray(n,a.readUshort(n,o+8)+l,c.markClassCount);else if(i==6&&c.fmt==1)c.mark1Coverage=t._lctf.readCoverage(n,a.readUshort(n,o)+l),c.mark2Coverage=t._lctf.readCoverage(n,a.readUshort(n,o+2)+l),c.markClassCount=a.readUshort(n,o+4),c.mark1Array=t.GPOS.readMarkArray(n,a.readUshort(n,o+6)+l),c.mark2Array=t.GPOS.readBaseArray(n,a.readUshort(n,o+8)+l,c.markClassCount);else{if(i==9&&c.fmt==1){var U=a.readUshort(n,o);o+=2;var z=a.readUint(n,o);if(o+=4,s.ltype==9)s.ltype=U;else if(s.ltype!=U)throw"invalid extension substitution";return t.GPOS.subt(n,s.ltype,l+z)}console.debug("unsupported GPOS table LookupType",i,"format",c.fmt)}return c},t.GPOS.readValueRecord=function(n,i,o){var s=t._bin,a=[];return a.push(1&o?s.readShort(n,i):0),i+=1&o?2:0,a.push(2&o?s.readShort(n,i):0),i+=2&o?2:0,a.push(4&o?s.readShort(n,i):0),i+=4&o?2:0,a.push(8&o?s.readShort(n,i):0),i+=8&o?2:0,a},t.GPOS.readBaseArray=function(n,i,o){var s=t._bin,a=[],l=i,c=s.readUshort(n,i);i+=2;for(var h=0;h<c;h++){for(var u=[],f=0;f<o;f++)u.push(t.GPOS.readAnchorRecord(n,l+s.readUshort(n,i))),i+=2;a.push(u)}return a},t.GPOS.readMarkArray=function(n,i){var o=t._bin,s=[],a=i,l=o.readUshort(n,i);i+=2;for(var c=0;c<l;c++){var h=t.GPOS.readAnchorRecord(n,o.readUshort(n,i+2)+a);h.markClass=o.readUshort(n,i),s.push(h),i+=4}return s},t.GPOS.readAnchorRecord=function(n,i){var o=t._bin,s={};return s.fmt=o.readUshort(n,i),s.x=o.readShort(n,i+2),s.y=o.readShort(n,i+4),s},t.GSUB={},t.GSUB.parse=function(n,i,o,s){return t._lctf.parse(n,i,o,s,t.GSUB.subt)},t.GSUB.subt=function(n,i,o,s){var a=t._bin,l=o,c={};if(c.fmt=a.readUshort(n,o),o+=2,i!=1&&i!=2&&i!=4&&i!=5&&i!=6)return null;if(i==1||i==2||i==4||i==5&&c.fmt<=2||i==6&&c.fmt<=2){var h=a.readUshort(n,o);o+=2,c.coverage=t._lctf.readCoverage(n,l+h)}if(i==1&&c.fmt>=1&&c.fmt<=2){if(c.fmt==1)c.delta=a.readShort(n,o),o+=2;else if(c.fmt==2){var u=a.readUshort(n,o);o+=2,c.newg=a.readUshorts(n,o,u),o+=2*c.newg.length}}else if(i==2&&c.fmt==1){u=a.readUshort(n,o),o+=2,c.seqs=[];for(var f=0;f<u;f++){var p=a.readUshort(n,o)+l;o+=2;var g=a.readUshort(n,p);c.seqs.push(a.readUshorts(n,p+2,g))}}else if(i==4)for(c.vals=[],u=a.readUshort(n,o),o+=2,f=0;f<u;f++){var m=a.readUshort(n,o);o+=2,c.vals.push(t.GSUB.readLigatureSet(n,l+m))}else if(i==5&&c.fmt==2){if(c.fmt==2){var v=a.readUshort(n,o);o+=2,c.cDef=t._lctf.readClassDef(n,l+v),c.scset=[];var x=a.readUshort(n,o);for(o+=2,f=0;f<x;f++){var _=a.readUshort(n,o);o+=2,c.scset.push(_==0?null:t.GSUB.readSubClassSet(n,l+_))}}}else if(i==6&&c.fmt==3){if(c.fmt==3){for(f=0;f<3;f++){u=a.readUshort(n,o),o+=2;for(var y=[],M=0;M<u;M++)y.push(t._lctf.readCoverage(n,l+a.readUshort(n,o+2*M)));o+=2*u,f==0&&(c.backCvg=y),f==1&&(c.inptCvg=y),f==2&&(c.ahedCvg=y)}u=a.readUshort(n,o),o+=2,c.lookupRec=t.GSUB.readSubstLookupRecords(n,o,u)}}else{if(i==7&&c.fmt==1){var E=a.readUshort(n,o);o+=2;var b=a.readUint(n,o);if(o+=4,s.ltype==9)s.ltype=E;else if(s.ltype!=E)throw"invalid extension substitution";return t.GSUB.subt(n,s.ltype,l+b)}console.debug("unsupported GSUB table LookupType",i,"format",c.fmt)}return c},t.GSUB.readSubClassSet=function(n,i){var o=t._bin.readUshort,s=i,a=[],l=o(n,i);i+=2;for(var c=0;c<l;c++){var h=o(n,i);i+=2,a.push(t.GSUB.readSubClassRule(n,s+h))}return a},t.GSUB.readSubClassRule=function(n,i){var o=t._bin.readUshort,s={},a=o(n,i),l=o(n,i+=2);i+=2,s.input=[];for(var c=0;c<a-1;c++)s.input.push(o(n,i)),i+=2;return s.substLookupRecords=t.GSUB.readSubstLookupRecords(n,i,l),s},t.GSUB.readSubstLookupRecords=function(n,i,o){for(var s=t._bin.readUshort,a=[],l=0;l<o;l++)a.push(s(n,i),s(n,i+2)),i+=4;return a},t.GSUB.readChainSubClassSet=function(n,i){var o=t._bin,s=i,a=[],l=o.readUshort(n,i);i+=2;for(var c=0;c<l;c++){var h=o.readUshort(n,i);i+=2,a.push(t.GSUB.readChainSubClassRule(n,s+h))}return a},t.GSUB.readChainSubClassRule=function(n,i){for(var o=t._bin,s={},a=["backtrack","input","lookahead"],l=0;l<a.length;l++){var c=o.readUshort(n,i);i+=2,l==1&&c--,s[a[l]]=o.readUshorts(n,i,c),i+=2*s[a[l]].length}return c=o.readUshort(n,i),i+=2,s.subst=o.readUshorts(n,i,2*c),i+=2*s.subst.length,s},t.GSUB.readLigatureSet=function(n,i){var o=t._bin,s=i,a=[],l=o.readUshort(n,i);i+=2;for(var c=0;c<l;c++){var h=o.readUshort(n,i);i+=2,a.push(t.GSUB.readLigature(n,s+h))}return a},t.GSUB.readLigature=function(n,i){var o=t._bin,s={chain:[]};s.nglyph=o.readUshort(n,i),i+=2;var a=o.readUshort(n,i);i+=2;for(var l=0;l<a-1;l++)s.chain.push(o.readUshort(n,i)),i+=2;return s},t.head={},t.head.parse=function(n,i,o){var s=t._bin,a={};return s.readFixed(n,i),i+=4,a.fontRevision=s.readFixed(n,i),i+=4,s.readUint(n,i),i+=4,s.readUint(n,i),i+=4,a.flags=s.readUshort(n,i),i+=2,a.unitsPerEm=s.readUshort(n,i),i+=2,a.created=s.readUint64(n,i),i+=8,a.modified=s.readUint64(n,i),i+=8,a.xMin=s.readShort(n,i),i+=2,a.yMin=s.readShort(n,i),i+=2,a.xMax=s.readShort(n,i),i+=2,a.yMax=s.readShort(n,i),i+=2,a.macStyle=s.readUshort(n,i),i+=2,a.lowestRecPPEM=s.readUshort(n,i),i+=2,a.fontDirectionHint=s.readShort(n,i),i+=2,a.indexToLocFormat=s.readShort(n,i),i+=2,a.glyphDataFormat=s.readShort(n,i),i+=2,a},t.hhea={},t.hhea.parse=function(n,i,o){var s=t._bin,a={};return s.readFixed(n,i),i+=4,a.ascender=s.readShort(n,i),i+=2,a.descender=s.readShort(n,i),i+=2,a.lineGap=s.readShort(n,i),i+=2,a.advanceWidthMax=s.readUshort(n,i),i+=2,a.minLeftSideBearing=s.readShort(n,i),i+=2,a.minRightSideBearing=s.readShort(n,i),i+=2,a.xMaxExtent=s.readShort(n,i),i+=2,a.caretSlopeRise=s.readShort(n,i),i+=2,a.caretSlopeRun=s.readShort(n,i),i+=2,a.caretOffset=s.readShort(n,i),i+=2,i+=8,a.metricDataFormat=s.readShort(n,i),i+=2,a.numberOfHMetrics=s.readUshort(n,i),i+=2,a},t.hmtx={},t.hmtx.parse=function(n,i,o,s){for(var a=t._bin,l={aWidth:[],lsBearing:[]},c=0,h=0,u=0;u<s.maxp.numGlyphs;u++)u<s.hhea.numberOfHMetrics&&(c=a.readUshort(n,i),i+=2,h=a.readShort(n,i),i+=2),l.aWidth.push(c),l.lsBearing.push(h);return l},t.kern={},t.kern.parse=function(n,i,o,s){var a=t._bin,l=a.readUshort(n,i);if(i+=2,l==1)return t.kern.parseV1(n,i-2,o,s);var c=a.readUshort(n,i);i+=2;for(var h={glyph1:[],rval:[]},u=0;u<c;u++){i+=2,o=a.readUshort(n,i),i+=2;var f=a.readUshort(n,i);i+=2;var p=f>>>8;if((p&=15)!=0)throw"unknown kern table format: "+p;i=t.kern.readFormat0(n,i,h)}return h},t.kern.parseV1=function(n,i,o,s){var a=t._bin;a.readFixed(n,i),i+=4;var l=a.readUint(n,i);i+=4;for(var c={glyph1:[],rval:[]},h=0;h<l;h++){a.readUint(n,i),i+=4;var u=a.readUshort(n,i);i+=2,a.readUshort(n,i),i+=2;var f=u>>>8;if((f&=15)!=0)throw"unknown kern table format: "+f;i=t.kern.readFormat0(n,i,c)}return c},t.kern.readFormat0=function(n,i,o){var s=t._bin,a=-1,l=s.readUshort(n,i);i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2;for(var c=0;c<l;c++){var h=s.readUshort(n,i);i+=2;var u=s.readUshort(n,i);i+=2;var f=s.readShort(n,i);i+=2,h!=a&&(o.glyph1.push(h),o.rval.push({glyph2:[],vals:[]}));var p=o.rval[o.rval.length-1];p.glyph2.push(u),p.vals.push(f),a=h}return i},t.loca={},t.loca.parse=function(n,i,o,s){var a=t._bin,l=[],c=s.head.indexToLocFormat,h=s.maxp.numGlyphs+1;if(c==0)for(var u=0;u<h;u++)l.push(a.readUshort(n,i+(u<<1))<<1);if(c==1)for(u=0;u<h;u++)l.push(a.readUint(n,i+(u<<2)));return l},t.maxp={},t.maxp.parse=function(n,i,o){var s=t._bin,a={},l=s.readUint(n,i);return i+=4,a.numGlyphs=s.readUshort(n,i),i+=2,l==65536&&(a.maxPoints=s.readUshort(n,i),i+=2,a.maxContours=s.readUshort(n,i),i+=2,a.maxCompositePoints=s.readUshort(n,i),i+=2,a.maxCompositeContours=s.readUshort(n,i),i+=2,a.maxZones=s.readUshort(n,i),i+=2,a.maxTwilightPoints=s.readUshort(n,i),i+=2,a.maxStorage=s.readUshort(n,i),i+=2,a.maxFunctionDefs=s.readUshort(n,i),i+=2,a.maxInstructionDefs=s.readUshort(n,i),i+=2,a.maxStackElements=s.readUshort(n,i),i+=2,a.maxSizeOfInstructions=s.readUshort(n,i),i+=2,a.maxComponentElements=s.readUshort(n,i),i+=2,a.maxComponentDepth=s.readUshort(n,i),i+=2),a},t.name={},t.name.parse=function(n,i,o){var s=t._bin,a={};s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);i+=2,s.readUshort(n,i);for(var c,h=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],u=i+=2,f=0;f<l;f++){var p=s.readUshort(n,i);i+=2;var g=s.readUshort(n,i);i+=2;var m=s.readUshort(n,i);i+=2;var v=s.readUshort(n,i);i+=2;var x=s.readUshort(n,i);i+=2;var _=s.readUshort(n,i);i+=2;var y,M=h[v],E=u+12*l+_;if(p==0)y=s.readUnicode(n,E,x/2);else if(p==3&&g==0)y=s.readUnicode(n,E,x/2);else if(g==0)y=s.readASCII(n,E,x);else if(g==1)y=s.readUnicode(n,E,x/2);else if(g==3)y=s.readUnicode(n,E,x/2);else{if(p!=1)throw"unknown encoding "+g+", platformID: "+p;y=s.readASCII(n,E,x),console.debug("reading unknown MAC encoding "+g+" as ASCII")}var b="p"+p+","+m.toString(16);a[b]==null&&(a[b]={}),a[b][M!==void 0?M:v]=y,a[b]._lang=m}for(var A in a)if(a[A].postScriptName!=null&&a[A]._lang==1033)return a[A];for(var A in a)if(a[A].postScriptName!=null&&a[A]._lang==0)return a[A];for(var A in a)if(a[A].postScriptName!=null&&a[A]._lang==3084)return a[A];for(var A in a)if(a[A].postScriptName!=null)return a[A];for(var A in a){c=A;break}return console.debug("returning name table with languageID "+a[c]._lang),a[c]},t["OS/2"]={},t["OS/2"].parse=function(n,i,o){var s=t._bin.readUshort(n,i);i+=2;var a={};if(s==0)t["OS/2"].version0(n,i,a);else if(s==1)t["OS/2"].version1(n,i,a);else if(s==2||s==3||s==4)t["OS/2"].version2(n,i,a);else{if(s!=5)throw"unknown OS/2 table version: "+s;t["OS/2"].version5(n,i,a)}return a},t["OS/2"].version0=function(n,i,o){var s=t._bin;return o.xAvgCharWidth=s.readShort(n,i),i+=2,o.usWeightClass=s.readUshort(n,i),i+=2,o.usWidthClass=s.readUshort(n,i),i+=2,o.fsType=s.readUshort(n,i),i+=2,o.ySubscriptXSize=s.readShort(n,i),i+=2,o.ySubscriptYSize=s.readShort(n,i),i+=2,o.ySubscriptXOffset=s.readShort(n,i),i+=2,o.ySubscriptYOffset=s.readShort(n,i),i+=2,o.ySuperscriptXSize=s.readShort(n,i),i+=2,o.ySuperscriptYSize=s.readShort(n,i),i+=2,o.ySuperscriptXOffset=s.readShort(n,i),i+=2,o.ySuperscriptYOffset=s.readShort(n,i),i+=2,o.yStrikeoutSize=s.readShort(n,i),i+=2,o.yStrikeoutPosition=s.readShort(n,i),i+=2,o.sFamilyClass=s.readShort(n,i),i+=2,o.panose=s.readBytes(n,i,10),i+=10,o.ulUnicodeRange1=s.readUint(n,i),i+=4,o.ulUnicodeRange2=s.readUint(n,i),i+=4,o.ulUnicodeRange3=s.readUint(n,i),i+=4,o.ulUnicodeRange4=s.readUint(n,i),i+=4,o.achVendID=[s.readInt8(n,i),s.readInt8(n,i+1),s.readInt8(n,i+2),s.readInt8(n,i+3)],i+=4,o.fsSelection=s.readUshort(n,i),i+=2,o.usFirstCharIndex=s.readUshort(n,i),i+=2,o.usLastCharIndex=s.readUshort(n,i),i+=2,o.sTypoAscender=s.readShort(n,i),i+=2,o.sTypoDescender=s.readShort(n,i),i+=2,o.sTypoLineGap=s.readShort(n,i),i+=2,o.usWinAscent=s.readUshort(n,i),i+=2,o.usWinDescent=s.readUshort(n,i),i+=2},t["OS/2"].version1=function(n,i,o){var s=t._bin;return i=t["OS/2"].version0(n,i,o),o.ulCodePageRange1=s.readUint(n,i),i+=4,o.ulCodePageRange2=s.readUint(n,i),i+=4},t["OS/2"].version2=function(n,i,o){var s=t._bin;return i=t["OS/2"].version1(n,i,o),o.sxHeight=s.readShort(n,i),i+=2,o.sCapHeight=s.readShort(n,i),i+=2,o.usDefault=s.readUshort(n,i),i+=2,o.usBreak=s.readUshort(n,i),i+=2,o.usMaxContext=s.readUshort(n,i),i+=2},t["OS/2"].version5=function(n,i,o){var s=t._bin;return i=t["OS/2"].version2(n,i,o),o.usLowerOpticalPointSize=s.readUshort(n,i),i+=2,o.usUpperOpticalPointSize=s.readUshort(n,i),i+=2},t.post={},t.post.parse=function(n,i,o){var s=t._bin,a={};return a.version=s.readFixed(n,i),i+=4,a.italicAngle=s.readFixed(n,i),i+=4,a.underlinePosition=s.readShort(n,i),i+=2,a.underlineThickness=s.readShort(n,i),i+=2,a},t==null&&(t={}),t.U==null&&(t.U={}),t.U.codeToGlyph=function(n,i){var o=n.cmap,s=-1;if(o.p0e4!=null?s=o.p0e4:o.p3e1!=null?s=o.p3e1:o.p1e0!=null?s=o.p1e0:o.p0e3!=null&&(s=o.p0e3),s==-1)throw"no familiar platform and encoding!";var a=o.tables[s];if(a.format==0)return i>=a.map.length?0:a.map[i];if(a.format==4){for(var l=-1,c=0;c<a.endCount.length;c++)if(i<=a.endCount[c]){l=c;break}return l==-1||a.startCount[l]>i?0:65535&(a.idRangeOffset[l]!=0?a.glyphIdArray[i-a.startCount[l]+(a.idRangeOffset[l]>>1)-(a.idRangeOffset.length-l)]:i+a.idDelta[l])}if(a.format==12){if(i>a.groups[a.groups.length-1][1])return 0;for(c=0;c<a.groups.length;c++){var h=a.groups[c];if(h[0]<=i&&i<=h[1])return h[2]+(i-h[0])}return 0}throw"unknown cmap table format "+a.format},t.U.glyphToPath=function(n,i){var o={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[i]){var s=n.SVG.entries[i];return s==null?o:(typeof s=="string"&&(s=t.SVG.toPath(s),n.SVG.entries[i]=s),s)}if(n.CFF){var a={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},l=n.CFF,c=n.CFF.Private;if(l.ROS){for(var h=0;l.FDSelect[h+2]<=i;)h+=2;c=l.FDArray[l.FDSelect[h+1]].Private}t.U._drawCFF(n.CFF.CharStrings[i],a,l,c,o)}else n.glyf&&t.U._drawGlyf(i,n,o);return o},t.U._drawGlyf=function(n,i,o){var s=i.glyf[n];s==null&&(s=i.glyf[n]=t.glyf._parseGlyf(i,n)),s!=null&&(s.noc>-1?t.U._simpleGlyph(s,o):t.U._compoGlyph(s,i,o))},t.U._simpleGlyph=function(n,i){for(var o=0;o<n.noc;o++){for(var s=o==0?0:n.endPts[o-1]+1,a=n.endPts[o],l=s;l<=a;l++){var c=l==s?a:l-1,h=l==a?s:l+1,u=1&n.flags[l],f=1&n.flags[c],p=1&n.flags[h],g=n.xs[l],m=n.ys[l];if(l==s)if(u){if(!f){t.U.P.moveTo(i,g,m);continue}t.U.P.moveTo(i,n.xs[c],n.ys[c])}else f?t.U.P.moveTo(i,n.xs[c],n.ys[c]):t.U.P.moveTo(i,(n.xs[c]+g)/2,(n.ys[c]+m)/2);u?f&&t.U.P.lineTo(i,g,m):p?t.U.P.qcurveTo(i,g,m,n.xs[h],n.ys[h]):t.U.P.qcurveTo(i,g,m,(g+n.xs[h])/2,(m+n.ys[h])/2)}t.U.P.closePath(i)}},t.U._compoGlyph=function(n,i,o){for(var s=0;s<n.parts.length;s++){var a={cmds:[],crds:[]},l=n.parts[s];t.U._drawGlyf(l.glyphIndex,i,a);for(var c=l.m,h=0;h<a.crds.length;h+=2){var u=a.crds[h],f=a.crds[h+1];o.crds.push(u*c.a+f*c.b+c.tx),o.crds.push(u*c.c+f*c.d+c.ty)}for(h=0;h<a.cmds.length;h++)o.cmds.push(a.cmds[h])}},t.U._getGlyphClass=function(n,i){var o=t._lctf.getInterval(i,n);return o==-1?0:i[o+2]},t.U._applySubs=function(n,i,o,s){for(var a=n.length-i-1,l=0;l<o.tabs.length;l++)if(o.tabs[l]!=null){var c,h=o.tabs[l];if(!h.coverage||(c=t._lctf.coverageIndex(h.coverage,n[i]))!=-1){if(o.ltype==1)n[i],h.fmt==1?n[i]=n[i]+h.delta:n[i]=h.newg[c];else if(o.ltype==4)for(var u=h.vals[c],f=0;f<u.length;f++){var p=u[f],g=p.chain.length;if(!(g>a)){for(var m=!0,v=0,x=0;x<g;x++){for(;n[i+v+(1+x)]==-1;)v++;p.chain[x]!=n[i+v+(1+x)]&&(m=!1)}if(m){for(n[i]=p.nglyph,x=0;x<g+v;x++)n[i+x+1]=-1;break}}}else if(o.ltype==5&&h.fmt==2)for(var _=t._lctf.getInterval(h.cDef,n[i]),y=h.cDef[_+2],M=h.scset[y],E=0;E<M.length;E++){var b=M[E],A=b.input;if(!(A.length>a)){for(m=!0,x=0;x<A.length;x++){var P=t._lctf.getInterval(h.cDef,n[i+1+x]);if(_==-1&&h.cDef[P+2]!=A[x]){m=!1;break}}if(m){var T=b.substLookupRecords;for(f=0;f<T.length;f+=2)T[f],T[f+1]}}}else if(o.ltype==6&&h.fmt==3){if(!t.U._glsCovered(n,h.backCvg,i-h.backCvg.length)||!t.U._glsCovered(n,h.inptCvg,i)||!t.U._glsCovered(n,h.ahedCvg,i+h.inptCvg.length))continue;var N=h.lookupRec;for(E=0;E<N.length;E+=2){_=N[E];var w=s[N[E+1]];t.U._applySubs(n,i+_,w,s)}}}}},t.U._glsCovered=function(n,i,o){for(var s=0;s<i.length;s++)if(t._lctf.coverageIndex(i[s],n[o+s])==-1)return!1;return!0},t.U.glyphsToPath=function(n,i,o){for(var s={cmds:[],crds:[]},a=0,l=0;l<i.length;l++){var c=i[l];if(c!=-1){for(var h=l<i.length-1&&i[l+1]!=-1?i[l+1]:0,u=t.U.glyphToPath(n,c),f=0;f<u.crds.length;f+=2)s.crds.push(u.crds[f]+a),s.crds.push(u.crds[f+1]);for(o&&s.cmds.push(o),f=0;f<u.cmds.length;f++)s.cmds.push(u.cmds[f]);o&&s.cmds.push("X"),a+=n.hmtx.aWidth[c],l<i.length-1&&(a+=t.U.getPairAdjustment(n,c,h))}}return s},t.U.P={},t.U.P.moveTo=function(n,i,o){n.cmds.push("M"),n.crds.push(i,o)},t.U.P.lineTo=function(n,i,o){n.cmds.push("L"),n.crds.push(i,o)},t.U.P.curveTo=function(n,i,o,s,a,l,c){n.cmds.push("C"),n.crds.push(i,o,s,a,l,c)},t.U.P.qcurveTo=function(n,i,o,s,a){n.cmds.push("Q"),n.crds.push(i,o,s,a)},t.U.P.closePath=function(n){n.cmds.push("Z")},t.U._drawCFF=function(n,i,o,s,a){for(var l=i.stack,c=i.nStems,h=i.haveWidth,u=i.width,f=i.open,p=0,g=i.x,m=i.y,v=0,x=0,_=0,y=0,M=0,E=0,b=0,A=0,P=0,T=0,N={val:0,size:0};p<n.length;){t.CFF.getCharString(n,p,N);var w=N.val;if(p+=N.size,w=="o1"||w=="o18")l.length%2!=0&&!h&&(u=l.shift()+s.nominalWidthX),c+=l.length>>1,l.length=0,h=!0;else if(w=="o3"||w=="o23")l.length%2!=0&&!h&&(u=l.shift()+s.nominalWidthX),c+=l.length>>1,l.length=0,h=!0;else if(w=="o4")l.length>1&&!h&&(u=l.shift()+s.nominalWidthX,h=!0),f&&t.U.P.closePath(a),m+=l.pop(),t.U.P.moveTo(a,g,m),f=!0;else if(w=="o5")for(;l.length>0;)g+=l.shift(),m+=l.shift(),t.U.P.lineTo(a,g,m);else if(w=="o6"||w=="o7")for(var I=l.length,U=w=="o6",z=0;z<I;z++){var k=l.shift();U?g+=k:m+=k,U=!U,t.U.P.lineTo(a,g,m)}else if(w=="o8"||w=="o24"){I=l.length;for(var R=0;R+6<=I;)v=g+l.shift(),x=m+l.shift(),_=v+l.shift(),y=x+l.shift(),g=_+l.shift(),m=y+l.shift(),t.U.P.curveTo(a,v,x,_,y,g,m),R+=6;w=="o24"&&(g+=l.shift(),m+=l.shift(),t.U.P.lineTo(a,g,m))}else{if(w=="o11")break;if(w=="o1234"||w=="o1235"||w=="o1236"||w=="o1237")w=="o1234"&&(x=m,_=(v=g+l.shift())+l.shift(),T=y=x+l.shift(),E=y,A=m,g=(b=(M=(P=_+l.shift())+l.shift())+l.shift())+l.shift(),t.U.P.curveTo(a,v,x,_,y,P,T),t.U.P.curveTo(a,M,E,b,A,g,m)),w=="o1235"&&(v=g+l.shift(),x=m+l.shift(),_=v+l.shift(),y=x+l.shift(),P=_+l.shift(),T=y+l.shift(),M=P+l.shift(),E=T+l.shift(),b=M+l.shift(),A=E+l.shift(),g=b+l.shift(),m=A+l.shift(),l.shift(),t.U.P.curveTo(a,v,x,_,y,P,T),t.U.P.curveTo(a,M,E,b,A,g,m)),w=="o1236"&&(v=g+l.shift(),x=m+l.shift(),_=v+l.shift(),T=y=x+l.shift(),E=y,b=(M=(P=_+l.shift())+l.shift())+l.shift(),A=E+l.shift(),g=b+l.shift(),t.U.P.curveTo(a,v,x,_,y,P,T),t.U.P.curveTo(a,M,E,b,A,g,m)),w=="o1237"&&(v=g+l.shift(),x=m+l.shift(),_=v+l.shift(),y=x+l.shift(),P=_+l.shift(),T=y+l.shift(),M=P+l.shift(),E=T+l.shift(),b=M+l.shift(),A=E+l.shift(),Math.abs(b-g)>Math.abs(A-m)?g=b+l.shift():m=A+l.shift(),t.U.P.curveTo(a,v,x,_,y,P,T),t.U.P.curveTo(a,M,E,b,A,g,m));else if(w=="o14"){if(l.length>0&&!h&&(u=l.shift()+o.nominalWidthX,h=!0),l.length==4){var O=l.shift(),H=l.shift(),V=l.shift(),L=l.shift(),F=t.CFF.glyphBySE(o,V),B=t.CFF.glyphBySE(o,L);t.U._drawCFF(o.CharStrings[F],i,o,s,a),i.x=O,i.y=H,t.U._drawCFF(o.CharStrings[B],i,o,s,a)}f&&(t.U.P.closePath(a),f=!1)}else if(w=="o19"||w=="o20")l.length%2!=0&&!h&&(u=l.shift()+s.nominalWidthX),c+=l.length>>1,l.length=0,h=!0,p+=c+7>>3;else if(w=="o21")l.length>2&&!h&&(u=l.shift()+s.nominalWidthX,h=!0),m+=l.pop(),g+=l.pop(),f&&t.U.P.closePath(a),t.U.P.moveTo(a,g,m),f=!0;else if(w=="o22")l.length>1&&!h&&(u=l.shift()+s.nominalWidthX,h=!0),g+=l.pop(),f&&t.U.P.closePath(a),t.U.P.moveTo(a,g,m),f=!0;else if(w=="o25"){for(;l.length>6;)g+=l.shift(),m+=l.shift(),t.U.P.lineTo(a,g,m);v=g+l.shift(),x=m+l.shift(),_=v+l.shift(),y=x+l.shift(),g=_+l.shift(),m=y+l.shift(),t.U.P.curveTo(a,v,x,_,y,g,m)}else if(w=="o26")for(l.length%2&&(g+=l.shift());l.length>0;)v=g,x=m+l.shift(),g=_=v+l.shift(),m=(y=x+l.shift())+l.shift(),t.U.P.curveTo(a,v,x,_,y,g,m);else if(w=="o27")for(l.length%2&&(m+=l.shift());l.length>0;)x=m,_=(v=g+l.shift())+l.shift(),y=x+l.shift(),g=_+l.shift(),m=y,t.U.P.curveTo(a,v,x,_,y,g,m);else if(w=="o10"||w=="o29"){var j=w=="o10"?s:o;if(l.length==0)console.debug("error: empty stack");else{var W=l.pop(),q=j.Subrs[W+j.Bias];i.x=g,i.y=m,i.nStems=c,i.haveWidth=h,i.width=u,i.open=f,t.U._drawCFF(q,i,o,s,a),g=i.x,m=i.y,c=i.nStems,h=i.haveWidth,u=i.width,f=i.open}}else if(w=="o30"||w=="o31"){var J=l.length,Q=(R=0,w=="o31");for(R+=J-(I=-3&J);R<I;)Q?(x=m,_=(v=g+l.shift())+l.shift(),m=(y=x+l.shift())+l.shift(),I-R==5?(g=_+l.shift(),R++):g=_,Q=!1):(v=g,x=m+l.shift(),_=v+l.shift(),y=x+l.shift(),g=_+l.shift(),I-R==5?(m=y+l.shift(),R++):m=y,Q=!0),t.U.P.curveTo(a,v,x,_,y,g,m),R+=4}else{if((w+"").charAt(0)=="o")throw console.debug("Unknown operation: "+w,n),w;l.push(w)}}}i.x=g,i.y=m,i.nStems=c,i.haveWidth=h,i.width=u,i.open=f};var e=t,r={Typr:e};return d.Typr=e,d.default=r,Object.defineProperty(d,"__esModule",{value:!0}),d}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function Bu(){return function(d){var t=Uint8Array,e=Uint16Array,r=Uint32Array,n=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),o=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(w,I){for(var U=new e(31),z=0;z<31;++z)U[z]=I+=1<<w[z-1];var k=new r(U[30]);for(z=1;z<30;++z)for(var R=U[z];R<U[z+1];++R)k[R]=R-U[z]<<5|z;return[U,k]},a=s(n,2),l=a[0],c=a[1];l[28]=258,c[258]=28;for(var h=s(i,0)[0],u=new e(32768),f=0;f<32768;++f){var p=(43690&f)>>>1|(21845&f)<<1;p=(61680&(p=(52428&p)>>>2|(13107&p)<<2))>>>4|(3855&p)<<4,u[f]=((65280&p)>>>8|(255&p)<<8)>>>1}var g=function(w,I,U){for(var z=w.length,k=0,R=new e(I);k<z;++k)++R[w[k]-1];var O,H=new e(I);for(k=0;k<I;++k)H[k]=H[k-1]+R[k-1]<<1;{O=new e(1<<I);var V=15-I;for(k=0;k<z;++k)if(w[k])for(var L=k<<4|w[k],F=I-w[k],B=H[w[k]-1]++<<F,j=B|(1<<F)-1;B<=j;++B)O[u[B]>>>V]=L}return O},m=new t(288);for(f=0;f<144;++f)m[f]=8;for(f=144;f<256;++f)m[f]=9;for(f=256;f<280;++f)m[f]=7;for(f=280;f<288;++f)m[f]=8;var v=new t(32);for(f=0;f<32;++f)v[f]=5;var x=g(m,9),_=g(v,5),y=function(w){for(var I=w[0],U=1;U<w.length;++U)w[U]>I&&(I=w[U]);return I},M=function(w,I,U){var z=I/8|0;return(w[z]|w[z+1]<<8)>>(7&I)&U},E=function(w,I){var U=I/8|0;return(w[U]|w[U+1]<<8|w[U+2]<<16)>>(7&I)},b=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],A=function(w,I,U){var z=new Error(I||b[w]);if(z.code=w,Error.captureStackTrace&&Error.captureStackTrace(z,A),!U)throw z;return z},P=function(w,I,U){var z=w.length;if(!z||U&&!U.l&&z<5)return I||new t(0);var k=!I||U,R=!U||U.i;U||(U={}),I||(I=new t(3*z));var O,H=function(K){var Yt=I.length;if(K>Yt){var Dt=new t(Math.max(2*Yt,K));Dt.set(I),I=Dt}},V=U.f||0,L=U.p||0,F=U.b||0,B=U.l,j=U.d,W=U.m,q=U.n,J=8*z;do{if(!B){U.f=V=M(w,L,1);var Q=M(w,L+1,3);if(L+=3,!Q){var pt=w[(Zt=((O=L)/8|0)+(7&O&&1)+4)-4]|w[Zt-3]<<8,tt=Zt+pt;if(tt>z){R&&A(0);break}k&&H(F+pt),I.set(w.subarray(Zt,tt),F),U.b=F+=pt,U.p=L=8*tt;continue}if(Q==1)B=x,j=_,W=9,q=5;else if(Q==2){var $=M(w,L,31)+257,at=M(w,L+10,15)+4,xt=$+M(w,L+5,31)+1;L+=14;for(var et=new t(xt),_t=new t(19),dt=0;dt<at;++dt)_t[o[dt]]=M(w,L+3*dt,7);L+=3*at;var wt=y(_t),gi=(1<<wt)-1,Se=g(_t,wt);for(dt=0;dt<xt;){var Zt,Pt=Se[M(w,L,gi)];if(L+=15&Pt,(Zt=Pt>>>4)<16)et[dt++]=Zt;else{var Et=0,zt=0;for(Zt==16?(zt=3+M(w,L,3),L+=2,Et=et[dt-1]):Zt==17?(zt=3+M(w,L,7),L+=3):Zt==18&&(zt=11+M(w,L,127),L+=7);zt--;)et[dt++]=Et}}var ce=et.subarray(0,$),yt=et.subarray($);W=y(ce),q=y(yt),B=g(ce,W),j=g(yt,q)}else A(1);if(L>J){R&&A(0);break}}k&&H(F+131072);for(var Pn=(1<<W)-1,X=(1<<q)-1,St=L;;St=L){var lt=(Et=B[E(w,L)&Pn])>>>4;if((L+=15&Et)>J){R&&A(0);break}if(Et||A(2),lt<256)I[F++]=lt;else{if(lt==256){St=L,B=null;break}var ht=lt-254;if(lt>264){var gt=n[dt=lt-257];ht=M(w,L,(1<<gt)-1)+l[dt],L+=gt}var Nt=j[E(w,L)&X],nt=Nt>>>4;if(Nt||A(3),L+=15&Nt,yt=h[nt],nt>3&&(gt=i[nt],yt+=E(w,L)&(1<<gt)-1,L+=gt),L>J){R&&A(0);break}k&&H(F+131072);for(var he=F+ht;F<he;F+=4)I[F]=I[F-yt],I[F+1]=I[F+1-yt],I[F+2]=I[F+2-yt],I[F+3]=I[F+3-yt];F=he}}U.l=B,U.p=St,U.b=F,B&&(V=1,U.m=W,U.d=j,U.n=q)}while(!V);return F==I.length?I:function(K,Yt,Dt){(Dt==null||Dt>K.length)&&(Dt=K.length);var de=new(K instanceof e?e:K instanceof r?r:t)(Dt-Yt);return de.set(K.subarray(Yt,Dt)),de}(I,0,F)},T=new t(0),N=typeof TextDecoder<"u"&&new TextDecoder;try{N.decode(T,{stream:!0})}catch{}return d.convert_streams=function(w){var I=new DataView(w),U=0;function z(){var $=I.getUint16(U);return U+=2,$}function k(){var $=I.getUint32(U);return U+=4,$}function R($){pt.setUint16(tt,$),tt+=2}function O($){pt.setUint32(tt,$),tt+=4}for(var H={signature:k(),flavor:k(),length:k(),numTables:z(),reserved:z(),totalSfntSize:k(),majorVersion:z(),minorVersion:z(),metaOffset:k(),metaLength:k(),metaOrigLength:k(),privOffset:k(),privLength:k()},V=0;Math.pow(2,V)<=H.numTables;)V++;V--;for(var L=16*Math.pow(2,V),F=16*H.numTables-L,B=12,j=[],W=0;W<H.numTables;W++)j.push({tag:k(),offset:k(),compLength:k(),origLength:k(),origChecksum:k()}),B+=16;var q,J=new Uint8Array(12+16*j.length+j.reduce(function($,at){return $+at.origLength+4},0)),Q=J.buffer,pt=new DataView(Q),tt=0;return O(H.flavor),R(H.numTables),R(L),R(V),R(F),j.forEach(function($){O($.tag),O($.origChecksum),O(B),O($.origLength),$.outOffset=B,(B+=$.origLength)%4!=0&&(B+=4-B%4)}),j.forEach(function($){var at,xt=w.slice($.offset,$.offset+$.compLength);if($.compLength!=$.origLength){var et=new Uint8Array($.origLength);at=new Uint8Array(xt,2),P(at,et)}else et=new Uint8Array(xt);J.set(et,$.outOffset);var _t=0;(B=$.outOffset+$.origLength)%4!=0&&(_t=4-B%4),J.set(new Uint8Array(_t).buffer,$.outOffset+$.origLength),q=B+_t}),Q.slice(0,q)},Object.defineProperty(d,"__esModule",{value:!0}),d}({}).convert_streams}function Vu(d,t){const e={M:2,L:2,Q:4,C:6,Z:0},r={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,i=2,o=4,s=8,a=16,l=32;let c;function h(b){if(!c){const A={R:i,L:n,D:o,C:a,U:l,T:s};c=new Map;for(let P in r){let T=0;r[P].split(",").forEach(N=>{let[w,I]=N.split("+");w=parseInt(w,36),I=I?parseInt(I,36):0,c.set(T+=w,A[P]);for(let U=I;U--;)c.set(++T,A[P])})}}return c.get(b)||l}const u=1,f=2,p=3,g=4,m=[null,"isol","init","fina","medi"];function v(b){const A=new Uint8Array(b.length);let P=l,T=u,N=-1;for(let w=0;w<b.length;w++){const I=b.codePointAt(w);let U=h(I)|0,z=u;U&s||(P&(n|o|a)?U&(i|o|a)?(z=p,(T===u||T===p)&&A[N]++):U&(n|l)&&(T===f||T===g)&&A[N]--:P&(i|l)&&(T===f||T===g)&&A[N]--,T=A[w]=z,P=U,N=w,I>65535&&w++)}return A}function x(b,A){const P=[];for(let N=0;N<A.length;N++){const w=A.codePointAt(N);w>65535&&N++,P.push(d.U.codeToGlyph(b,w))}const T=b.GSUB;if(T){const{lookupList:N,featureList:w}=T;let I;const U=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,z=[];w.forEach(k=>{if(U.test(k.tag))for(let R=0;R<k.tab.length;R++){if(z[k.tab[R]])continue;z[k.tab[R]]=!0;const O=N[k.tab[R]],H=/^(isol|init|fina|medi)$/.test(k.tag);H&&!I&&(I=v(A));for(let V=0;V<P.length;V++)(!I||!H||m[I[V]]===k.tag)&&d.U._applySubs(P,V,O,N)}})}return P}function _(b,A){const P=new Int16Array(A.length*3);let T=0;for(;T<A.length;T++){const U=A[T];if(U===-1)continue;P[T*3+2]=b.hmtx.aWidth[U];const z=b.GPOS;if(z){const k=z.lookupList;for(let R=0;R<k.length;R++){const O=k[R];for(let H=0;H<O.tabs.length;H++){const V=O.tabs[H];if(O.ltype===1){if(d._lctf.coverageIndex(V.coverage,U)!==-1&&V.pos){I(V.pos,T);break}}else if(O.ltype===2){let L=null,F=N();if(F!==-1){const B=d._lctf.coverageIndex(V.coverage,A[F]);if(B!==-1){if(V.fmt===1){const j=V.pairsets[B];for(let W=0;W<j.length;W++)j[W].gid2===U&&(L=j[W])}else if(V.fmt===2){const j=d.U._getGlyphClass(A[F],V.classDef1),W=d.U._getGlyphClass(U,V.classDef2);L=V.matrix[j][W]}if(L){L.val1&&I(L.val1,F),L.val2&&I(L.val2,T);break}}}}else if(O.ltype===4){const L=d._lctf.coverageIndex(V.markCoverage,U);if(L!==-1){const F=N(w),B=F===-1?-1:d._lctf.coverageIndex(V.baseCoverage,A[F]);if(B!==-1){const j=V.markArray[L],W=V.baseArray[B][j.markClass];P[T*3]=W.x-j.x+P[F*3]-P[F*3+2],P[T*3+1]=W.y-j.y+P[F*3+1];break}}}else if(O.ltype===6){const L=d._lctf.coverageIndex(V.mark1Coverage,U);if(L!==-1){const F=N();if(F!==-1){const B=A[F];if(y(b,B)===3){const j=d._lctf.coverageIndex(V.mark2Coverage,B);if(j!==-1){const W=V.mark1Array[L],q=V.mark2Array[j][W.markClass];P[T*3]=q.x-W.x+P[F*3]-P[F*3+2],P[T*3+1]=q.y-W.y+P[F*3+1];break}}}}}}}}else if(b.kern&&!b.cff){const k=N();if(k!==-1){const R=b.kern.glyph1.indexOf(A[k]);if(R!==-1){const O=b.kern.rval[R].glyph2.indexOf(U);O!==-1&&(P[k*3+2]+=b.kern.rval[R].vals[O])}}}}return P;function N(U){for(let z=T-1;z>=0;z--)if(A[z]!==-1&&(!U||U(A[z])))return z;return-1}function w(U){return y(b,U)===1}function I(U,z){for(let k=0;k<3;k++)P[z*3+k]+=U[k]||0}}function y(b,A){const P=b.GDEF&&b.GDEF.glyphClassDef;return P?d.U._getGlyphClass(A,P):0}function M(...b){for(let A=0;A<b.length;A++)if(typeof b[A]=="number")return b[A]}function E(b){const A=Object.create(null),P=b["OS/2"],T=b.hhea,N=b.head.unitsPerEm,w=M(P&&P.sTypoAscender,T&&T.ascender,N),I={unitsPerEm:N,ascender:w,descender:M(P&&P.sTypoDescender,T&&T.descender,0),capHeight:M(P&&P.sCapHeight,w),xHeight:M(P&&P.sxHeight,w),lineGap:M(P&&P.sTypoLineGap,T&&T.lineGap),supportsCodePoint(U){return d.U.codeToGlyph(b,U)>0},forEachGlyph(U,z,k,R){let O=0;const H=1/I.unitsPerEm*z,V=x(b,U);let L=0;const F=_(b,V);return V.forEach((B,j)=>{if(B!==-1){let W=A[B];if(!W){const{cmds:q,crds:J}=d.U.glyphToPath(b,B);let Q="",pt=0;for(let et=0,_t=q.length;et<_t;et++){const dt=e[q[et]];Q+=q[et];for(let wt=1;wt<=dt;wt++)Q+=(wt>1?",":"")+J[pt++]}let tt,$,at,xt;if(J.length){tt=$=1/0,at=xt=-1/0;for(let et=0,_t=J.length;et<_t;et+=2){let dt=J[et],wt=J[et+1];dt<tt&&(tt=dt),wt<$&&($=wt),dt>at&&(at=dt),wt>xt&&(xt=wt)}}else tt=at=$=xt=0;W=A[B]={index:B,advanceWidth:b.hmtx.aWidth[B],xMin:tt,yMin:$,xMax:at,yMax:xt,path:Q}}R.call(null,W,O+F[j*3]*H,F[j*3+1]*H,L),O+=F[j*3+2]*H,k&&(O+=k*z)}L+=U.codePointAt(L)>65535?2:1}),O}};return I}return function(A){const P=new Uint8Array(A,0,4),T=d._bin.readASCII(P,0,4);if(T==="wOFF")A=t(A);else if(T==="wOF2")throw new Error("woff2 fonts not supported");return E(d.parse(A)[0])}}const Hu=fn({name:"Typr Font Parser",dependencies:[zu,Bu,Vu],init(d,t,e){const r=d(),n=t();return e(r,n)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function Gu(){return function(d){var t=function(){this.buckets=new Map};t.prototype.add=function(_){var y=_>>5;this.buckets.set(y,(this.buckets.get(y)||0)|1<<(31&_))},t.prototype.has=function(_){var y=this.buckets.get(_>>5);return y!==void 0&&(y&1<<(31&_))!=0},t.prototype.serialize=function(){var _=[];return this.buckets.forEach(function(y,M){_.push((+M).toString(36)+":"+y.toString(36))}),_.join(",")},t.prototype.deserialize=function(_){var y=this;this.buckets.clear(),_.split(",").forEach(function(M){var E=M.split(":");y.buckets.set(parseInt(E[0],36),parseInt(E[1],36))})};var e=Math.pow(2,8),r=e-1,n=~r;function i(_){var y=function(E){return E&n}(_).toString(16),M=function(E){return(E&n)+e-1}(_).toString(16);return"codepoint-index/plane"+(_>>16)+"/"+y+"-"+M+".json"}function o(_,y){var M=_&r,E=y.codePointAt(M/6|0);return((E=(E||48)-48)&1<<M%6)!=0}function s(_,y){var M;(M=_,M.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(E){return E.split("-").map(function(b){return parseInt(b.trim(),16)})})).forEach(function(E){var b=E[0],A=E[1];A===void 0&&(A=b),y(b,A)})}function a(_,y){s(_,function(M,E){for(var b=M;b<=E;b++)y(b)})}var l={},c={},h=new WeakMap,u="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function f(_){var y=h.get(_);return y||(y=new t,a(_.ranges,function(M){return y.add(M)}),h.set(_,y)),y}var p,g=new Map;function m(_,y,M){return _[y]?y:_[M]?M:function(E){for(var b in E)return b}(_)}function v(_,y){var M=y;if(!_.includes(M)){M=1/0;for(var E=0;E<_.length;E++)Math.abs(_[E]-y)<Math.abs(M-y)&&(M=_[E])}return M}function x(_){return p||(p=new Set,a("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(y){p.add(y)})),p.has(_)}return d.CodePointSet=t,d.clearCache=function(){l={},c={}},d.getFontsForString=function(_,y){y===void 0&&(y={});var M,E=y.lang;E===void 0&&(E=new RegExp("\\p{Script=Hangul}","u").test(M=_)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(M)?"ja":"en");var b=y.category;b===void 0&&(b="sans-serif");var A=y.style;A===void 0&&(A="normal");var P=y.weight;P===void 0&&(P=400);var T=(y.dataUrl||u).replace(/\/$/g,""),N=new Map,w=new Uint8Array(_.length),I={},U={},z=new Array(_.length),k=new Map,R=!1;function O(L){var F=g.get(L);return F||(F=fetch(T+"/"+L).then(function(B){if(!B.ok)throw new Error(B.statusText);return B.json().then(function(j){if(!Array.isArray(j)||j[0]!==1)throw new Error("Incorrect schema version; need 1, got "+j[0]);return j[1]})}).catch(function(B){if(T!==u)return R||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+T+'", trying default CDN. '+B.message),R=!0),T=u,g.delete(L),O(L);throw B}),g.set(L,F)),F}for(var H=function(L){var F=_.codePointAt(L),B=i(F);z[L]=B,l[B]||k.has(B)||k.set(B,O(B).then(function(j){l[B]=j})),F>65535&&(L++,V=L)},V=0;V<_.length;V++)H(V);return Promise.all(k.values()).then(function(){k.clear();for(var L=function(B){var j=_.codePointAt(B),W=null,q=l[z[B]],J=void 0;for(var Q in q){var pt=U[Q];if(pt===void 0&&(pt=U[Q]=new RegExp(Q).test(E||"en")),pt){for(var tt in J=Q,q[Q])if(o(j,q[Q][tt])){W=tt;break}break}}if(!W){t:for(var $ in q)if($!==J){for(var at in q[$])if(o(j,q[$][at])){W=at;break t}}}W||(console.debug("No font coverage for U+"+j.toString(16)),W="latin"),z[B]=W,c[W]||k.has(W)||k.set(W,O("font-meta/"+W+".json").then(function(xt){c[W]=xt})),j>65535&&(B++,F=B)},F=0;F<_.length;F++)L(F);return Promise.all(k.values())}).then(function(){for(var L,F=null,B=0;B<_.length;B++){var j=_.codePointAt(B);if(F&&(x(j)||f(F).has(j)))w[B]=w[B-1];else{F=c[z[B]];var W=I[F.id];if(!W){var q=F.typeforms,J=m(q,b,"sans-serif"),Q=m(q[J],A,"normal"),pt=v((L=q[J])===null||L===void 0?void 0:L[Q],P);W=I[F.id]=T+"/font-files/"+F.id+"/"+J+"."+Q+"."+pt+".woff"}var tt=N.get(W);tt==null&&(tt=N.size,N.set(W,tt)),w[B]=tt}j>65535&&(B++,w[B]=w[B-1])}return{fontUrls:Array.from(N.keys()),chars:w}})},Object.defineProperty(d,"__esModule",{value:!0}),d}({})}function ju(d,t){const e=Object.create(null),r=Object.create(null);function n(o,s){const a=l=>{console.error(`Failure loading font ${o}`,l)};try{const l=new XMLHttpRequest;l.open("get",o,!0),l.responseType="arraybuffer",l.onload=function(){if(l.status>=400)a(new Error(l.statusText));else if(l.status>0)try{const c=d(l.response);c.src=o,s(c)}catch(c){a(c)}},l.onerror=a,l.send()}catch(l){a(l)}}function i(o,s){let a=e[o];a?s(a):r[o]?r[o].push(s):(r[o]=[s],n(o,l=>{l.src=o,e[o]=l,r[o].forEach(c=>c(l)),delete r[o]}))}return function(o,s,{lang:a,fonts:l=[],style:c="normal",weight:h="normal",unicodeFontsURL:u}={}){const f=new Uint8Array(o.length),p=[];o.length||x();const g=new Map,m=[];if(c!=="italic"&&(c="normal"),typeof h!="number"&&(h=h==="bold"?700:400),l&&!Array.isArray(l)&&(l=[l]),l=l.slice().filter(y=>!y.lang||y.lang.test(a)).reverse(),l.length){let b=0;(function A(P=0){for(let T=P,N=o.length;T<N;T++){const w=o.codePointAt(T);if(b===1&&p[f[T-1]].supportsCodePoint(w)||T>0&&/\s/.test(o[T]))f[T]=f[T-1],b===2&&(m[m.length-1][1]=T);else for(let I=f[T],U=l.length;I<=U;I++)if(I===U){const z=b===2?m[m.length-1]:m[m.length]=[T,T];z[1]=T,b=2}else{f[T]=I;const{src:z,unicodeRange:k}=l[I];if(!k||_(w,k)){const R=e[z];if(!R){i(z,()=>{A(T)});return}if(R.supportsCodePoint(w)){let O=g.get(R);typeof O!="number"&&(O=p.length,p.push(R),g.set(R,O)),f[T]=O,b=1;break}}}w>65535&&T+1<N&&(f[T+1]=f[T],T++,b===2&&(m[m.length-1][1]=T))}v()})()}else m.push([0,o.length-1]),v();function v(){if(m.length){const y=m.map(M=>o.substring(M[0],M[1]+1)).join(`
`);t.getFontsForString(y,{lang:a||void 0,style:c,weight:h,dataUrl:u}).then(({fontUrls:M,chars:E})=>{const b=p.length;let A=0;m.forEach(T=>{for(let N=0,w=T[1]-T[0];N<=w;N++)f[T[0]+N]=E[A++]+b;A++});let P=0;M.forEach((T,N)=>{i(T,w=>{p[N+b]=w,++P===M.length&&x()})})})}else x()}function x(){s({chars:f,fonts:p})}function _(y,M){for(let E=0;E<M.length;E++){const[b,A=b]=M[E];if(b<=y&&y<=A)return!0}return!1}}}const Wu=fn({name:"FontResolver",dependencies:[ju,Hu,Gu],init(d,t,e){return d(t,e())}});function $u(d,t){const r=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",i=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function o({text:p,lang:g,fonts:m,style:v,weight:x,preResolvedFonts:_,unicodeFontsURL:y},M){const E=({chars:b,fonts:A})=>{let P,T;const N=[];for(let w=0;w<b.length;w++)b[w]!==T?(T=b[w],N.push(P={start:w,end:w,fontObj:A[b[w]]})):P.end=w;M(N)};_?E(_):d(p,E,{lang:g,fonts:m,style:v,weight:x,unicodeFontsURL:y})}function s({text:p="",font:g,lang:m,sdfGlyphSize:v=64,fontSize:x=400,fontWeight:_=1,fontStyle:y="normal",letterSpacing:M=0,lineHeight:E="normal",maxWidth:b=1/0,direction:A,textAlign:P="left",textIndent:T=0,whiteSpace:N="normal",overflowWrap:w="normal",anchorX:I=0,anchorY:U=0,metricsOnly:z=!1,unicodeFontsURL:k,preResolvedFonts:R=null,includeCaretPositions:O=!1,chunkedBoundsSize:H=8192,colorRanges:V=null},L){const F=h(),B={fontLoad:0,typesetting:0};p.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),p=p.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),x=+x,M=+M,b=+b,E=E||"normal",T=+T,o({text:p,lang:m,style:y,weight:_,fonts:typeof g=="string"?[{src:g}]:g,unicodeFontsURL:k,preResolvedFonts:R},j=>{B.fontLoad=h()-F;const W=isFinite(b);let q=null,J=null,Q=null,pt=null,tt=null,$=null,at=null,xt=null,et=0,_t=0,dt=N!=="nowrap";const wt=new Map,gi=h();let Se=T,Zt=0,Pt=new u;const Et=[Pt];j.forEach(X=>{const{fontObj:St}=X,{ascender:lt,descender:ht,unitsPerEm:gt,lineGap:Nt,capHeight:nt,xHeight:he}=St;let K=wt.get(St);if(!K){const it=x/gt,ot=E==="normal"?(lt-ht+Nt)*it:E*x,pn=(ot-(lt-ht)*it)/2,st=Math.min(ot,(lt-ht)*it),Y=(lt+ht)/2*it+st/2;K={index:wt.size,src:St.src,fontObj:St,fontSizeMult:it,unitsPerEm:gt,ascender:lt*it,descender:ht*it,capHeight:nt*it,xHeight:he*it,lineHeight:ot,baseline:-pn-lt*it,caretTop:Y,caretBottom:Y-st},wt.set(St,K)}const{fontSizeMult:Yt}=K,Dt=p.slice(X.start,X.end+1);let de,Me;St.forEachGlyph(Dt,x,M,(it,ot,pn,st)=>{ot+=Zt,st+=X.start,de=ot,Me=it;const Y=p.charAt(st),Bt=it.advanceWidth*Yt,Vt=Pt.count;let Z;if("isEmpty"in it||(it.isWhitespace=!!Y&&new RegExp(n).test(Y),it.canBreakAfter=!!Y&&i.test(Y),it.isEmpty=it.xMin===it.xMax||it.yMin===it.yMax||r.test(Y)),!it.isWhitespace&&!it.isEmpty&&_t++,dt&&W&&!it.isWhitespace&&ot+Bt+Se>b&&Vt){if(Pt.glyphAt(Vt-1).glyphObj.canBreakAfter)Z=new u,Se=-ot;else for(let Jt=Vt;Jt--;)if(Jt===0&&w==="break-word"){Z=new u,Se=-ot;break}else if(Pt.glyphAt(Jt).glyphObj.canBreakAfter){Z=Pt.splitAt(Jt+1);const Ht=Z.glyphAt(0).x;Se-=Ht;for(let Mt=Z.count;Mt--;)Z.glyphAt(Mt).x-=Ht;break}Z&&(Pt.isSoftWrapped=!0,Pt=Z,Et.push(Pt),et=b)}let ut=Pt.glyphAt(Pt.count);ut.glyphObj=it,ut.x=ot+Se,ut.y=pn,ut.width=Bt,ut.charIndex=st,ut.fontData=K,Y===`
`&&(Pt=new u,Et.push(Pt),Se=-(ot+Bt+M*x)+T)}),Zt=de+Me.advanceWidth*Yt+M*x});let zt=0;Et.forEach(X=>{let St=!0;for(let lt=X.count;lt--;){const ht=X.glyphAt(lt);St&&!ht.glyphObj.isWhitespace&&(X.width=ht.x+ht.width,X.width>et&&(et=X.width),St=!1);let{lineHeight:gt,capHeight:Nt,xHeight:nt,baseline:he}=ht.fontData;gt>X.lineHeight&&(X.lineHeight=gt);const K=he-X.baseline;K<0&&(X.baseline+=K,X.cap+=K,X.ex+=K),X.cap=Math.max(X.cap,X.baseline+Nt),X.ex=Math.max(X.ex,X.baseline+nt)}X.baseline-=zt,X.cap-=zt,X.ex-=zt,zt+=X.lineHeight});let ce=0,yt=0;if(I&&(typeof I=="number"?ce=-I:typeof I=="string"&&(ce=-et*(I==="left"?0:I==="center"?.5:I==="right"?1:l(I)))),U&&(typeof U=="number"?yt=-U:typeof U=="string"&&(yt=U==="top"?0:U==="top-baseline"?-Et[0].baseline:U==="top-cap"?-Et[0].cap:U==="top-ex"?-Et[0].ex:U==="middle"?zt/2:U==="bottom"?zt:U==="bottom-baseline"?-Et[Et.length-1].baseline:l(U)*zt)),!z){const X=t.getEmbeddingLevels(p,A);q=new Uint16Array(_t),J=new Uint8Array(_t),Q=new Float32Array(_t*2),pt={},at=[1/0,1/0,-1/0,-1/0],xt=[],O&&($=new Float32Array(p.length*4)),V&&(tt=new Uint8Array(_t*3));let St=0,lt=-1,ht=-1,gt,Nt;if(Et.forEach((nt,he)=>{let{count:K,width:Yt}=nt;if(K>0){let Dt=0;for(let st=K;st--&&nt.glyphAt(st).glyphObj.isWhitespace;)Dt++;let de=0,Me=0;if(P==="center")de=(et-Yt)/2;else if(P==="right")de=et-Yt;else if(P==="justify"&&nt.isSoftWrapped){let st=0;for(let Y=K-Dt;Y--;)nt.glyphAt(Y).glyphObj.isWhitespace&&st++;Me=(et-Yt)/st}if(Me||de){let st=0;for(let Y=0;Y<K;Y++){let Bt=nt.glyphAt(Y);const Vt=Bt.glyphObj;Bt.x+=de+st,Me!==0&&Vt.isWhitespace&&Y<K-Dt&&(st+=Me,Bt.width+=Me)}}const it=t.getReorderSegments(p,X,nt.glyphAt(0).charIndex,nt.glyphAt(nt.count-1).charIndex);for(let st=0;st<it.length;st++){const[Y,Bt]=it[st];let Vt=1/0,Z=-1/0;for(let ut=0;ut<K;ut++)if(nt.glyphAt(ut).charIndex>=Y){let Jt=ut,Ht=ut;for(;Ht<K;Ht++){let Mt=nt.glyphAt(Ht);if(Mt.charIndex>Bt)break;Ht<K-Dt&&(Vt=Math.min(Vt,Mt.x),Z=Math.max(Z,Mt.x+Mt.width))}for(let Mt=Jt;Mt<Ht;Mt++){const De=nt.glyphAt(Mt);De.x=Z-(De.x+De.width-Vt)}break}}let ot;const pn=st=>ot=st;for(let st=0;st<K;st++){const Y=nt.glyphAt(st);ot=Y.glyphObj;const Bt=ot.index,Vt=X.levels[Y.charIndex]&1;if(Vt){const Z=t.getMirroredCharacter(p[Y.charIndex]);Z&&Y.fontData.fontObj.forEachGlyph(Z,0,0,pn)}if(O){const{charIndex:Z,fontData:ut}=Y,Jt=Y.x+ce,Ht=Y.x+Y.width+ce;$[Z*4]=Vt?Ht:Jt,$[Z*4+1]=Vt?Jt:Ht,$[Z*4+2]=nt.baseline+ut.caretBottom+yt,$[Z*4+3]=nt.baseline+ut.caretTop+yt;const Mt=Z-lt;Mt>1&&c($,lt,Mt),lt=Z}if(V){const{charIndex:Z}=Y;for(;Z>ht;)ht++,V.hasOwnProperty(ht)&&(Nt=V[ht])}if(!ot.isWhitespace&&!ot.isEmpty){const Z=St++,{fontSizeMult:ut,src:Jt,index:Ht}=Y.fontData,Mt=pt[Jt]||(pt[Jt]={});Mt[Bt]||(Mt[Bt]={path:ot.path,pathBounds:[ot.xMin,ot.yMin,ot.xMax,ot.yMax]});const De=Y.x+ce,vi=Y.y+nt.baseline+yt;Q[Z*2]=De,Q[Z*2+1]=vi;const Dn=De+ot.xMin*ut,Ln=vi+ot.yMin*ut,Rn=De+ot.xMax*ut,Fn=vi+ot.yMax*ut;Dn<at[0]&&(at[0]=Dn),Ln<at[1]&&(at[1]=Ln),Rn>at[2]&&(at[2]=Rn),Fn>at[3]&&(at[3]=Fn),Z%H===0&&(gt={start:Z,end:Z,rect:[1/0,1/0,-1/0,-1/0]},xt.push(gt)),gt.end++;const be=gt.rect;if(Dn<be[0]&&(be[0]=Dn),Ln<be[1]&&(be[1]=Ln),Rn>be[2]&&(be[2]=Rn),Fn>be[3]&&(be[3]=Fn),q[Z]=Bt,J[Z]=Ht,V){const xi=Z*3;tt[xi]=Nt>>16&255,tt[xi+1]=Nt>>8&255,tt[xi+2]=Nt&255}}}}}),$){const nt=p.length-lt;nt>1&&c($,lt,nt)}}const Pn=[];wt.forEach(({index:X,src:St,unitsPerEm:lt,ascender:ht,descender:gt,lineHeight:Nt,capHeight:nt,xHeight:he})=>{Pn[X]={src:St,unitsPerEm:lt,ascender:ht,descender:gt,lineHeight:Nt,capHeight:nt,xHeight:he}}),B.typesetting=h()-gi,L({glyphIds:q,glyphFontIndices:J,glyphPositions:Q,glyphData:pt,fontData:Pn,caretPositions:$,glyphColors:tt,chunkedBounds:xt,fontSize:x,topBaseline:yt+Et[0].baseline,blockBounds:[ce,yt-zt,ce+et,yt],visibleBounds:at,timings:B})})}function a(p,g){s({...p,metricsOnly:!0},m=>{const[v,x,_,y]=m.blockBounds;g({width:_-v,height:y-x})})}function l(p){let g=p.match(/^([\d.]+)%$/),m=g?parseFloat(g[1]):NaN;return isNaN(m)?0:m/100}function c(p,g,m){const v=p[g*4],x=p[g*4+1],_=p[g*4+2],y=p[g*4+3],M=(x-v)/m;for(let E=0;E<m;E++){const b=(g+E)*4;p[b]=v+M*E,p[b+1]=v+M*(E+1),p[b+2]=_,p[b+3]=y}}function h(){return(self.performance||Date).now()}function u(){this.data=[]}const f=["glyphObj","x","y","width","charIndex","fontData"];return u.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/f.length)},glyphAt(p){let g=u.flyweight;return g.data=this.data,g.index=p,g},splitAt(p){let g=new u;return g.data=this.data.splice(p*f.length),g}},u.flyweight=f.reduce((p,g,m,v)=>(Object.defineProperty(p,g,{get(){return this.data[this.index*f.length+m]},set(x){this.data[this.index*f.length+m]=x}}),p),{data:null,index:0}),{typeset:s,measure:a}}const Be=()=>(self.performance||Date).now(),mi=wa();let da;function qu(d,t,e,r,n,i,o,s,a,l,c=!0){return c?Zu(d,t,e,r,n,i,o,s,a,l).then(null,h=>(da||(console.warn("WebGL SDF generation failed, falling back to JS",h),da=!0),ua(d,t,e,r,n,i,o,s,a,l))):ua(d,t,e,r,n,i,o,s,a,l)}const si=[],Xu=5;let ir=0;function no(){const d=Be();for(;si.length&&Be()-d<Xu;)si.shift()();ir=si.length?setTimeout(no,0):0}const Zu=(...d)=>new Promise((t,e)=>{si.push(()=>{const r=Be();try{mi.webgl.generateIntoCanvas(...d),t({timing:Be()-r})}catch(n){e(n)}}),ir||(ir=setTimeout(no,0))}),Yu=4,Ju=2e3,ha={};let Qu=0;function ua(d,t,e,r,n,i,o,s,a,l){const c="TroikaTextSDFGenerator_JS_"+Qu++%Yu;let h=ha[c];return h||(h=ha[c]={workerModule:fn({name:c,workerId:c,dependencies:[wa,Be],init(u,f){const p=u().javascript.generate;return function(...g){const m=f();return{textureData:p(...g),timing:f()-m}}},getTransferables(u){return[u.textureData.buffer]}}),requests:0,idleTimer:null}),h.requests++,clearTimeout(h.idleTimer),h.workerModule(d,t,e,r,n,i).then(({textureData:u,timing:f})=>{const p=Be(),g=new Uint8Array(u.length*4);for(let m=0;m<u.length;m++)g[m*4+l]=u[m];return mi.webglUtils.renderImageData(o,g,s,a,d,t,1<<3-l),f+=Be()-p,--h.requests===0&&(h.idleTimer=setTimeout(()=>{Uu(c)},Ju)),{timing:f}})}function Ku(d){d._warm||(mi.webgl.isSupported(d),d._warm=!0)}const tf=mi.webglUtils.resizeWebGLCanvasWithoutClearing,bn={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},ef=new ye;function nn(){return(self.performance||Date).now()}const fa=Object.create(null);function io(d,t){d=af({},d);const e=nn(),r=[];if(d.font&&r.push({label:"user",src:of(d.font)}),d.font=r,d.text=""+d.text,d.sdfGlyphSize=d.sdfGlyphSize||bn.sdfGlyphSize,d.unicodeFontsURL=d.unicodeFontsURL||bn.unicodeFontsURL,d.colorRanges!=null){let u={};for(let f in d.colorRanges)if(d.colorRanges.hasOwnProperty(f)){let p=d.colorRanges[f];typeof p!="number"&&(p=ef.set(p).getHex()),u[f]=p}d.colorRanges=u}Object.freeze(d);const{textureWidth:n,sdfExponent:i}=bn,{sdfGlyphSize:o}=d,s=n/o*4;let a=fa[o];if(!a){const u=document.createElement("canvas");u.width=n,u.height=o*256/s,a=fa[o]={glyphCount:0,sdfGlyphSize:o,sdfCanvas:u,sdfTexture:new Ue(u,void 0,void 0,void 0,Zi,Zi),contextLost:!1,glyphsByFont:new Map},a.sdfTexture.generateMipmaps=!1,nf(a)}const{sdfTexture:l,sdfCanvas:c}=a;oo(d).then(u=>{const{glyphIds:f,glyphFontIndices:p,fontData:g,glyphPositions:m,fontSize:v,timings:x}=u,_=[],y=new Float32Array(f.length*4);let M=0,E=0;const b=nn(),A=g.map(I=>{let U=a.glyphsByFont.get(I.src);return U||a.glyphsByFont.set(I.src,U=new Map),U});f.forEach((I,U)=>{const z=p[U],{src:k,unitsPerEm:R}=g[z];let O=A[z].get(I);if(!O){const{path:B,pathBounds:j}=u.glyphData[k][I],W=Math.max(j[2]-j[0],j[3]-j[1])/o*(bn.sdfMargin*o+.5),q=a.glyphCount++,J=[j[0]-W,j[1]-W,j[2]+W,j[3]+W];A[z].set(I,O={path:B,atlasIndex:q,sdfViewBox:J}),_.push(O)}const{sdfViewBox:H}=O,V=m[E++],L=m[E++],F=v/R;y[M++]=V+H[0]*F,y[M++]=L+H[1]*F,y[M++]=V+H[2]*F,y[M++]=L+H[3]*F,f[U]=O.atlasIndex}),x.quads=(x.quads||0)+(nn()-b);const P=nn();x.sdf={};const T=c.height,N=Math.ceil(a.glyphCount/s),w=Math.pow(2,Math.ceil(Math.log2(N*o)));w>T&&(console.info(`Increasing SDF texture size ${T}->${w}`),tf(c,n,w),l.dispose()),Promise.all(_.map(I=>ro(I,a,d.gpuAccelerateSDF).then(({timing:U})=>{x.sdf[I.atlasIndex]=U}))).then(()=>{_.length&&!a.contextLost&&(ao(a),l.needsUpdate=!0),x.sdfTotal=nn()-P,x.total=nn()-e,t(Object.freeze({parameters:d,sdfTexture:l,sdfGlyphSize:o,sdfExponent:i,glyphBounds:y,glyphAtlasIndices:f,glyphColors:u.glyphColors,caretPositions:u.caretPositions,chunkedBounds:u.chunkedBounds,ascender:u.ascender,descender:u.descender,lineHeight:u.lineHeight,capHeight:u.capHeight,xHeight:u.xHeight,topBaseline:u.topBaseline,blockBounds:u.blockBounds,visibleBounds:u.visibleBounds,timings:u.timings}))})}),Promise.resolve().then(()=>{a.contextLost||Ku(c)})}function ro({path:d,atlasIndex:t,sdfViewBox:e},{sdfGlyphSize:r,sdfCanvas:n,contextLost:i},o){if(i)return Promise.resolve({timing:-1});const{textureWidth:s,sdfExponent:a}=bn,l=Math.max(e[2]-e[0],e[3]-e[1]),c=Math.floor(t/4),h=c%(s/r)*r,u=Math.floor(c/(s/r))*r,f=t%4;return qu(r,r,d,e,l,a,n,h,u,f,o)}function nf(d){const t=d.sdfCanvas;t.addEventListener("webglcontextlost",e=>{console.log("Context Lost",e),e.preventDefault(),d.contextLost=!0}),t.addEventListener("webglcontextrestored",e=>{console.log("Context Restored",e),d.contextLost=!1;const r=[];d.glyphsByFont.forEach(n=>{n.forEach(i=>{r.push(ro(i,d,!0))})}),Promise.all(r).then(()=>{ao(d),d.sdfTexture.needsUpdate=!0})})}function rf({font:d,characters:t,sdfGlyphSize:e},r){let n=Array.isArray(t)?t.join(`
`):""+t;io({font:d,sdfGlyphSize:e,text:n},r)}function af(d,t){for(let e in t)t.hasOwnProperty(e)&&(d[e]=t[e]);return d}let ni;function of(d){return ni||(ni=typeof document>"u"?{}:document.createElement("a")),ni.href=d,ni.href}function ao(d){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:t,sdfTexture:e}=d,{width:r,height:n}=t,i=d.sdfCanvas.getContext("webgl");let o=e.image.data;(!o||o.length!==r*n*4)&&(o=new Uint8Array(r*n*4),e.image={width:r,height:n,data:o},e.flipY=!1,e.isDataTexture=!0),i.readPixels(0,0,r,n,i.RGBA,i.UNSIGNED_BYTE,o)}}const sf=fn({name:"Typesetter",dependencies:[$u,Wu,go],init(d,t,e){return d(t,e())}}),oo=fn({name:"Typesetter",dependencies:[sf],init(d){return function(t){return new Promise(e=>{d.typeset(t,e)})}},getTransferables(d){const t=[];for(let e in d)d[e]&&d[e].buffer&&t.push(d[e].buffer);return t}});oo.onMainThread;const pa={};function lf(d){let t=pa[d];return t||(t=pa[d]=new Un(1,1,d,d).translate(.5,.5,0)),t}const cf="aTroikaGlyphBounds",ma="aTroikaGlyphIndex",df="aTroikaGlyphColor";class hf extends Hd{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new ui,this.boundingBox=new Ge}computeBoundingSphere(){}computeBoundingBox(){}set detail(t){if(t!==this._detail){this._detail=t,(typeof t!="number"||t<1)&&(t=1);let e=lf(t);["position","normal","uv"].forEach(r=>{this.attributes[r]=e.attributes[r].clone()}),this.setIndex(e.getIndex().clone())}}get detail(){return this._detail}set curveRadius(t){t!==this._curveRadius&&(this._curveRadius=t,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(t,e,r,n,i){this.updateAttributeData(cf,t,4),this.updateAttributeData(ma,e,1),this.updateAttributeData(df,i,3),this._blockBounds=r,this._chunkedBounds=n,this.instanceCount=e.length,this._updateBounds()}_updateBounds(){const t=this._blockBounds;if(t){const{curveRadius:e,boundingBox:r}=this;if(e){const{PI:n,floor:i,min:o,max:s,sin:a,cos:l}=Math,c=n/2,h=n*2,u=Math.abs(e),f=t[0]/u,p=t[2]/u,g=i((f+c)/h)!==i((p+c)/h)?-u:o(a(f)*u,a(p)*u),m=i((f-c)/h)!==i((p-c)/h)?u:s(a(f)*u,a(p)*u),v=i((f+n)/h)!==i((p+n)/h)?u*2:s(u-l(f)*u,u-l(p)*u);r.min.set(g,t[1],e<0?-v:0),r.max.set(m,t[3],e<0?0:v)}else r.min.set(t[0],t[1],0),r.max.set(t[2],t[3],0);r.getBoundingSphere(this.boundingSphere)}}applyClipRect(t){let e=this.getAttribute(ma).count,r=this._chunkedBounds;if(r)for(let n=r.length;n--;){e=r[n].end;let i=r[n].rect;if(i[1]<t.w&&i[3]>t.y&&i[0]<t.z&&i[2]>t.x)break}this.instanceCount=e}updateAttributeData(t,e,r){const n=this.getAttribute(t);e?n&&n.array.length===e.length?(n.array.set(e),n.needsUpdate=!0):(this.setAttribute(t,new zd(e,r)),delete this._maxInstanceCount,this.dispose()):n&&this.deleteAttribute(t)}}const uf=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,ff=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,pf=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,mf=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function gf(d){const t=nr(d,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new kt},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new Ve(0,0,0,0)},uTroikaClipRect:{value:new Ve(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new kt},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new ye},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new _e},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:uf,vertexTransform:ff,fragmentDefs:pf,fragmentColorTransform:mf,customRewriter({vertexShader:e,fragmentShader:r}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(r)&&(r=r.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(e)||(e=e.replace(eo,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:e,fragmentShader:r}}});return t.transparent=!0,t.forceSinglePass=!0,Object.defineProperties(t,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),t}const cr=new ja({color:16777215,side:us,transparent:!0}),ga=8421504,va=new Xt,ii=new D,Gi=new D,Sn=[],vf=new D,ji="+x+y";function xa(d){return Array.isArray(d)?d[0]:d}let so=()=>{const d=new pi(new Un(1,1),cr);return so=()=>d,d},lo=()=>{const d=new pi(new Un(1,1,32,1),cr);return lo=()=>d,d};const xf={type:"syncstart"},_f={type:"synccomplete"},co=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],yf=co.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");let ho=class extends pi{constructor(){const t=new hf;super(t,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=ga,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=ji,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(t){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(t):(this._isSyncing=!0,this.dispatchEvent(xf),io({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},e=>{this._isSyncing=!1,this._textRenderInfo=e,this.geometry.updateGlyphs(e.glyphBounds,e.glyphAtlasIndices,e.blockBounds,e.chunkedBounds,e.glyphColors);const r=this._queuedSyncs;r&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{r.forEach(n=>n&&n())})),this.dispatchEvent(_f),t&&t()})))}onBeforeRender(t,e,r,n,i,o){this.sync(),i.isTroikaTextMaterial&&this._prepareForRender(i)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(t){return gf(t)}get material(){let t=this._derivedMaterial;const e=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=cr.clone());if((!t||!t.isDerivedFrom(e))&&(t=this._derivedMaterial=this.createDerivedMaterial(e),e.addEventListener("dispose",function r(){e.removeEventListener("dispose",r),t.dispose()})),this.hasOutline()){let r=t._outlineMtl;return r||(r=t._outlineMtl=Object.create(t,{id:{value:t.id+.1}}),r.isTextOutlineMaterial=!0,r.depthWrite=!1,r.map=null,t.addEventListener("dispose",function n(){t.removeEventListener("dispose",n),r.dispose()})),[r,t]}else return t}set material(t){t&&t.isTroikaTextMaterial?(this._derivedMaterial=t,this._baseMaterial=t.baseMaterial):this._baseMaterial=t}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(t){this.geometry.detail=t}get curveRadius(){return this.geometry.curveRadius}set curveRadius(t){this.geometry.curveRadius=t}get customDepthMaterial(){return xa(this.material).getDepthMaterial()}set customDepthMaterial(t){}get customDistanceMaterial(){return xa(this.material).getDistanceMaterial()}set customDistanceMaterial(t){}_prepareForRender(t){const e=t.isTextOutlineMaterial,r=t.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:s,blockBounds:a}=n;r.uTroikaSDFTexture.value=s,r.uTroikaSDFTextureSize.value.set(s.image.width,s.image.height),r.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,r.uTroikaSDFExponent.value=n.sdfExponent,r.uTroikaTotalBounds.value.fromArray(a),r.uTroikaUseGlyphColors.value=!e&&!!n.glyphColors;let l=0,c=0,h=0,u,f,p,g=0,m=0;if(e){let{outlineWidth:x,outlineOffsetX:_,outlineOffsetY:y,outlineBlur:M,outlineOpacity:E}=this;l=this._parsePercent(x)||0,c=Math.max(0,this._parsePercent(M)||0),u=E,g=this._parsePercent(_)||0,m=this._parsePercent(y)||0}else h=Math.max(0,this._parsePercent(this.strokeWidth)||0),h&&(p=this.strokeColor,r.uTroikaStrokeColor.value.set(p??ga),f=this.strokeOpacity,f==null&&(f=1)),u=this.fillOpacity;r.uTroikaEdgeOffset.value=l,r.uTroikaPositionOffset.value.set(g,m),r.uTroikaBlurRadius.value=c,r.uTroikaStrokeWidth.value=h,r.uTroikaStrokeOpacity.value=f,r.uTroikaFillOpacity.value=u??1,r.uTroikaCurveRadius.value=this.curveRadius||0;let v=this.clipRect;if(v&&Array.isArray(v)&&v.length===4)r.uTroikaClipRect.value.fromArray(v);else{const x=(this.fontSize||.1)*100;r.uTroikaClipRect.value.set(a[0]-x,a[1]-x,a[2]+x,a[3]+x)}this.geometry.applyClipRect(r.uTroikaClipRect.value)}r.uTroikaSDFDebug.value=!!this.debugSDF,t.polygonOffset=!!this.depthOffset,t.polygonOffsetFactor=t.polygonOffsetUnits=this.depthOffset||0;const i=e?this.outlineColor||0:this.color;if(i==null)delete t.color;else{const s=t.hasOwnProperty("color")?t.color:t.color=new ye;(i!==s._input||typeof i=="object")&&s.set(s._input=i)}let o=this.orientation||ji;if(o!==t._orientation){let s=r.uTroikaOrient.value;o=o.replace(/[^-+xyz]/g,"");let a=o!==ji&&o.match(/^([-+])([xyz])([-+])([xyz])$/);if(a){let[,l,c,h,u]=a;ii.set(0,0,0)[c]=l==="-"?1:-1,Gi.set(0,0,0)[u]=h==="-"?-1:1,va.lookAt(vf,ii.cross(Gi),Gi),s.setFromMatrix4(va)}else s.identity();t._orientation=o}}_parsePercent(t){if(typeof t=="string"){let e=t.match(/^(-?[\d.]+)%$/),r=e?parseFloat(e[1]):NaN;t=(isNaN(r)?0:r/100)*this.fontSize}return t}localPositionToTextCoords(t,e=new kt){e.copy(t);const r=this.curveRadius;return r&&(e.x=Math.atan2(t.x,Math.abs(r)-Math.abs(t.z))*Math.abs(r)),e}worldPositionToTextCoords(t,e=new kt){return ii.copy(t),this.localPositionToTextCoords(this.worldToLocal(ii),e)}raycast(t,e){const{textRenderInfo:r,curveRadius:n}=this;if(r){const i=r.blockBounds,o=n?lo():so(),s=o.geometry,{position:a,uv:l}=s.attributes;for(let c=0;c<l.count;c++){let h=i[0]+l.getX(c)*(i[2]-i[0]);const u=i[1]+l.getY(c)*(i[3]-i[1]);let f=0;n&&(f=n-Math.cos(h/n)*n,h=Math.sin(h/n)*n),a.setXYZ(c,h,u,f)}s.boundingSphere=this.geometry.boundingSphere,s.boundingBox=this.geometry.boundingBox,o.matrixWorld=this.matrixWorld,o.material.side=this.material.side,Sn.length=0,o.raycast(t,Sn);for(let c=0;c<Sn.length;c++)Sn[c].object=this,e.push(Sn[c])}}copy(t){const e=this.geometry;return super.copy(t),this.geometry=e,yf.forEach(r=>{this[r]=t[r]}),this}clone(){return new this.constructor().copy(this)}};co.forEach(d=>{const t="_private_"+d;Object.defineProperty(ho.prototype,d,{get(){return this[t]},set(e){e!==this[t]&&(this[t]=e,this._needsSync=!0)}})});new Ge;new ye;const _a=C.forwardRef(({sdfGlyphSize:d=64,anchorX:t="center",anchorY:e="middle",font:r,fontSize:n=1,children:i,characters:o,onSync:s,...a},l)=>{const c=cn(({invalidate:p})=>p),[h]=C.useState(()=>new ho),[u,f]=C.useMemo(()=>{const p=[];let g="";return C.Children.forEach(i,m=>{typeof m=="string"||typeof m=="number"?g+=m:p.push(m)}),[p,g]},[i]);return vo(()=>new Promise(p=>rf({font:r,characters:o},p)),["troika-text",r,o]),C.useLayoutEffect(()=>void h.sync(()=>{c(),s&&s(h)})),C.useEffect(()=>()=>h.dispose(),[h]),C.createElement("primitive",xo({object:h,ref:l,font:r,text:f,anchorX:t,anchorY:e,fontSize:n,sdfGlyphSize:d},a),u)}),Kt=C.memo(({isPerf:d,color:t,colorBlind:e,customData:r,isMemory:n,isShadersInfo:i,metric:o,fontSize:s,offsetY:a=0,offsetX:l,round:c,hasInstance:h})=>{const{width:u,height:f}=cn(m=>m.viewport),p=C.useRef(null),g=C.useRef(null);return Yd("log",function([v,x]){var _;if(!v||!p.current||(r&&(p.current.text=(Math.round(ne().customData*Math.pow(10,c))/Math.pow(10,c)).toFixed(c)),!o))return;let y=v[o];if(i?y=(_=x.info.programs)==null?void 0:_.length:o==="matriceCount"?y=qt.value:!d&&x.info.render&&(y=(n?x.info.memory:x.info.render)[o]),o==="fps"&&(p.current.color=ne().overclockingFps?Ut(e).overClock.toString():`rgb(${Ut(e).fps.toString()})`),p.current.text=(Math.round(y*Math.pow(10,c))/Math.pow(10,c)).toFixed(c),h){const M=x.info.instance;if(typeof M>"u"&&o!=="matriceCount")return;let E;o==="matriceCount"?E=an.value:E=M[o],E>0?(p.current.fontSize=s/1.15,g.current.fontSize=y>0?s/1.4:s,p.current.position.y=f/2-a-s/1.9,g.current.text=" ±	"+(Math.round(E*Math.pow(10,c))/Math.pow(10,c)).toFixed(c)):(g.current.text&&(g.current.text=""),p.current.position.y=f/2-a-s,p.current.fontSize=s)}qt.value-=1,p.current.updateMatrix(),p.current.matrixWorld.copy(p.current.matrix)}),S.jsxs(C.Suspense,{fallback:null,children:[S.jsxs(_a,{textAlign:"justify",matrixAutoUpdate:!1,ref:p,fontSize:s,position:[-u/2+l+s,f/2-a-s,0],color:t,characters:"0123456789",onUpdate:m=>{m.updateMatrix(),qt.value-=1,m.matrixWorld.copy(m.matrix)},children:[S.jsx("meshBasicMaterial",{blending:li}),"0"]}),h&&S.jsx(_a,{textAlign:"justify",matrixAutoUpdate:!1,ref:g,fontSize:8,position:[-u/2+l+s,f/2-a-s*1.15,0],color:"lightgrey",characters:"0123456789",onUpdate:m=>{m.updateMatrix(),qt.value-=1,m.matrixWorld.copy(m.matrix)},children:S.jsx("meshBasicMaterial",{blending:li})})]})}),Sf=({colorBlind:d,customData:t,minimal:e,matrixUpdate:r})=>S.jsxs(S.Fragment,{children:[S.jsx(Kt,{colorBlind:d,color:`rgb(${Ut(d).fps.toString()})`,isPerf:!0,metric:"fps",fontSize:14,offsetX:140,round:0}),S.jsx(Kt,{color:`rgb(${Ut(d).cpu.toString()})`,isPerf:!0,metric:"cpu",fontSize:14,offsetX:72,round:3}),S.jsx(Kt,{color:`rgb(${Ut(d).gpu.toString()})`,isPerf:!0,metric:"gpu",fontSize:14,offsetX:10,round:3}),e?null:S.jsxs(S.Fragment,{children:[S.jsx(Kt,{metric:"calls",fontSize:14,offsetX:200,round:0,hasInstance:!0}),S.jsx(Kt,{metric:"triangles",fontSize:14,offsetX:260,round:0,hasInstance:!0}),S.jsx(Kt,{isMemory:!0,metric:"geometries",fontSize:14,offsetY:30,offsetX:0,round:0}),S.jsx(Kt,{isMemory:!0,metric:"textures",fontSize:14,offsetY:30,offsetX:80,round:0}),S.jsx(Kt,{isShadersInfo:!0,metric:"programs",fontSize:14,offsetY:30,offsetX:140,round:0}),S.jsx(Kt,{metric:"lines",fontSize:14,offsetY:30,offsetX:200,round:0,hasInstance:!0}),S.jsx(Kt,{metric:"points",fontSize:14,offsetY:30,offsetX:260,round:0,hasInstance:!0}),r&&S.jsx(Kt,{isPerf:!0,metric:"matriceCount",fontSize:14,offsetY:30,offsetX:320,round:0,hasInstance:!0})]}),t&&S.jsx(Kt,{color:`rgb(${Ut(d).custom.toString()})`,customData:t,fontSize:14,offsetY:0,offsetX:e?200:320,round:t.round||2})]}),Mf=({colorBlind:d,minimal:t,chart:e={length:120,hz:60}})=>{const r=C.useMemo(()=>({fps:new Float32Array(e.length*3),cpu:new Float32Array(e.length*3),gpu:new Float32Array(e.length*3)}),[e]),n=C.useRef(null),i=C.useRef(null),o=C.useRef(null),s=C.useRef(null),a=C.useMemo(()=>new D(0,0,0),[]),l=(c,h=1,u,f)=>{let p=0;const{width:g,height:m}=f,v=ne().chart.data[c];if(!v||v.length===0)return;const x=t?2:6,_=t?12:50;let y=v.length;for(let M=0;M<y;M++){let E=(ne().chart.circularId+M+1)%y;v[E]!==void 0&&(v[E]>p&&(p=v[E]*h),a.set(x+M/(y-1)*(g-x*2)-g/2,Math.min(100,v[E])*h/100*(m-x*2-_)-m/2,0),a.toArray(u.attributes.position.array,M*3))}u.attributes.position.needsUpdate=!0};return He(function({viewport:h}){l("fps",1,n.current,h),i.current&&i.current.color.set(ne().overclockingFps?Ut(d).overClock.toString():`rgb(${Ut(d).fps.toString()})`),l("gpu",5,o.current,h),l("cpu",5,s.current,h)}),S.jsxs(S.Fragment,{children:[S.jsxs("line",{onUpdate:c=>{c.updateMatrix(),qt.value-=1,c.matrixWorld.copy(c.matrix)},children:[S.jsx("bufferGeometry",{ref:n,children:S.jsx("bufferAttribute",{attach:"attributes-position",count:e.length,array:r.fps,itemSize:3,usage:yi,needsUpdate:!0})}),S.jsx("lineBasicMaterial",{ref:i,color:`rgb(${Ut(d).fps.toString()})`,transparent:!0,opacity:.5})]}),S.jsxs("line",{onUpdate:c=>{c.updateMatrix(),qt.value-=1,c.matrixWorld.copy(c.matrix)},children:[S.jsx("bufferGeometry",{ref:o,children:S.jsx("bufferAttribute",{attach:"attributes-position",count:e.length,array:r.gpu,itemSize:3,usage:yi,needsUpdate:!0})}),S.jsx("lineBasicMaterial",{color:`rgb(${Ut(d).gpu.toString()})`,transparent:!0,opacity:.5})]}),S.jsxs("line",{onUpdate:c=>{c.updateMatrix(),qt.value-=1,c.matrixWorld.copy(c.matrix)},children:[S.jsx("bufferGeometry",{ref:s,children:S.jsx("bufferAttribute",{attach:"attributes-position",count:e.length,array:r.cpu,itemSize:3,usage:yi,needsUpdate:!0})}),S.jsx("lineBasicMaterial",{color:`rgb(${Ut(d).cpu.toString()})`,transparent:!0,opacity:.5})]})]})},bf=({colorBlind:d,chart:t,customData:e,matrixUpdate:r,showGraph:n=!0,antialias:i=!0,minimal:o})=>{const s=C.useRef(void 0),a=ie(l=>l.paused);return S.jsxs(Rh,{style:{display:"flex",position:"absolute",height:`${o?37:n?100:60}px`,minWidth:`${o?"100px":e?"370px":"310px"}`},children:[S.jsx(Ea,{ref:s,orthographic:!0,camera:{rotation:[0,0,0]},dpr:i?[1,2]:1,gl:{antialias:!0,alpha:!0,stencil:!1,depth:!1},onCreated:({scene:l})=>{l.traverse(c=>{c.matrixWorldAutoUpdate=!1,c.matrixAutoUpdate=!1})},flat:!0,style:{marginBottom:"-42px",position:"relative",pointerEvents:"none",background:"transparent !important",height:`${o?37:n?100:60}px`},children:a?null:S.jsxs(S.Fragment,{children:[S.jsx(Cf,{}),S.jsx(Sf,{customData:e,minimal:o,matrixUpdate:r}),n&&S.jsx(Mf,{colorBlind:d,minimal:o,chart:t})]})}),a&&S.jsxs(Fh,{children:[S.jsx(gu,{})," PAUSED"]})]})},Cf=()=>(He(function({gl:t,scene:e,camera:r}){r.updateMatrix(),qt.value-=1,r.matrixWorld.copy(r.matrix),r.matrixWorldInverse.copy(r.matrixWorld).invert(),t.render(e,r),an.value=0,qt.value=0},1/0),null),wf=C.forwardRef(({portal:d,className:t,children:e,name:r,...n},i)=>{const o=cn(c=>c.gl),s=C.useRef(null),a=C.useRef(null),l=(d==null?void 0:d.current)!=null?d.current:o.domElement.parentNode;return C.useLayoutEffect(()=>{if(!s.current||!l)return;const c=document.createElement("div"),h=a.current=Aa(c);return l.appendChild(c),()=>{h.unmount(),a.current=null,l.removeChild(c)}},[l]),C.useLayoutEffect(()=>{const c=a.current;c&&c.render(S.jsx("div",{ref:i,className:t,children:e}))}),S.jsx("group",{name:r,...n,ref:s})});function Ef(d){let t=0;for(let r in d.attributes){const n=d.getAttribute(r);t+=n.count*n.itemSize*n.array.BYTES_PER_ELEMENT}const e=d.getIndex();return t+=e?e.count*e.itemSize*e.array.BYTES_PER_ELEMENT:0,t}const ya=(d,t)=>{const e=n=>{switch(n){case 1e3:return"RepeatWrapping";case 1001:return"ClampToEdgeWrapping";case 1002:return"MirroredRepeatWrapping";default:return"ClampToEdgeWrapping"}},r=n=>{switch(n){case 3e3:return"LinearEncoding";case 3001:return"sRGBEncoding";case 3002:return"RGBEEncoding";case 3003:return"LogLuvEncoding";case 3004:return"RGBM7Encoding";case 3005:return"RGBM16Encoding";case 3006:return"RGBDEncoding";case 3007:return"GammaEncoding";default:return"ClampToEdgeWrapping"}};return{name:d,url:t.image.currentSrc,encoding:r(t.encoding),wrapT:e(t.wrapT),flipY:t.flipY.toString()}},Af=({program:d,material:t,setTexNumber:e})=>{const r=ie(o=>o.gl),[n,i]=C.useState(null);return C.useEffect(()=>{if(r){const o=d==null?void 0:d.getUniforms();let s=0;const a=new Map;o.seq.forEach(l=>{if(!l.id.includes("uTroika")&&l.id!=="isOrthographic"&&l.id!=="uvTransform"&&l.id!=="lightProbe"&&l.id!=="projectionMatrix"&&l.id!=="viewMatrix"&&l.id!=="normalMatrix"&&l.id!=="modelMatrix"&&l.id!=="modelViewMatrix"){let c=[],h={name:l.id};l.cache&&(l.cache.forEach(u=>{typeof u<"u"&&c.push(u.toString().substring(0,4))}),h.value=c.join(),t[l.id]&&t[l.id].image&&t[l.id].image&&(s++,h.value=ya(l.id,t[l.id])),h.value||(h.value="empty"),a.set(l.id,h))}}),t.uniforms&&Object.keys(t.uniforms).forEach(l=>{const c=t.uniforms[l];if(c.value){const{value:h}=c;let u={name:l};if(l.includes("uTroika"))return;if(h.isTexture)s++,u.value=ya(l,h);else{let f=JSON.stringify(h);try{f=JSON.stringify(h)}catch{f=h.toString()}u.value=f}a.set(l,u)}}),s>0&&e(s),i(a)}},[]),S.jsx(Xa,{children:n&&Array.from(n.values()).map(o=>S.jsx("span",{children:typeof o.value=="string"?S.jsx("li",{children:S.jsxs("span",{children:[o.name," :"," ",S.jsxs("b",{children:[o.value.substring(0,30),o.value.length>30?"...":""]})]})}):S.jsxs(S.Fragment,{children:[S.jsx("li",{children:S.jsxs("b",{children:[o.value.name,":"]})}),S.jsxs("div",{children:[Object.keys(o.value).map(s=>s!=="name"?S.jsx("div",{children:s==="url"?S.jsx("a",{href:o.value[s],target:"_blank",children:S.jsx("img",{src:o.value[s]})}):S.jsxs("li",{children:[s,": ",S.jsx("b",{children:o.value[s]})]})},s):null),S.jsxs(Za,{onClick:()=>{var s;console.info(t[o.value.name]||((s=t==null?void 0:t.uniforms[o.value.name])==null?void 0:s.value))},children:["console.info(",o.value.name,");"]})]})]})},o.name))})},Tf=({el:d})=>{ie(r=>r.log);const t=ie(r=>r.gl),e=r=>{if(!t)return 0;const n=Math.round(r.drawCounts.total/(t.info.render.triangles+t.info.render.lines+t.info.render.points)*100*10)/10;return isFinite(n)&&n||0};return S.jsx(S.Fragment,{children:d.drawCounts.total>0&&S.jsxs(It,{style:{height:"auto",width:"auto",margin:"0 4px"},children:[d.drawCounts.type==="Triangle"?S.jsx(Ka,{style:{top:"-1px"}}):S.jsx(Ya,{style:{top:"-1px"}}),d.drawCounts.total,S.jsxs("small",{children:[d.drawCounts.type,"s"]}),t&&S.jsxs(Ot,{style:{bottom:"-10px",width:"40px",fontWeight:"bold"},children:[d.visible&&!d.material.wireframe?e(d):0,"%"]})]})})},If=({el:d})=>{const[t,e]=C.useState(d.visible),[r,n]=C.useState(d.expand),[i,o]=C.useState(0),{meshes:s,program:a,material:l}=d;return S.jsxs(Nh,{children:[S.jsxs(Lh,{onClick:()=>{d.expand=!r,Object.keys(s).forEach(c=>{const h=s[c];h.material.wireframe=!1}),n(!r)},children:[S.jsx(lr,{style:{marginRight:"6px"},children:r?S.jsx("span",{children:S.jsx(Ja,{})}):S.jsx("span",{children:S.jsx(Qa,{})})}),a&&S.jsxs("span",{children:[S.jsx(Oh,{children:a.name}),S.jsxs(It,{style:{height:"auto",width:"auto",margin:"0 4px"},children:[S.jsx(lu,{style:{top:"-1px"}}),Object.keys(s).length,S.jsx("small",{children:Object.keys(s).length>1?"users":"user"})]}),i>0&&S.jsxs(It,{style:{height:"auto",width:"auto",margin:"0 4px"},children:[i>1?S.jsx(Ki,{style:{top:"-1px"}}):S.jsx(Ki,{style:{top:"-1px"}}),i,S.jsx("small",{children:"tex"})]}),S.jsx(Tf,{el:d}),l.glslVersion==="300 es"&&S.jsxs(It,{style:{height:"auto",width:"auto",margin:"0 4px"},children:[S.jsx(xu,{style:{top:"-1px"}}),"300",S.jsx("small",{children:"es"}),S.jsx(Ot,{style:{bottom:"-10px",width:"40px"},children:"glsl"})]})]}),S.jsx(kh,{onPointerEnter:()=>{Object.keys(s).forEach(c=>{const h=s[c];h.material.wireframe=!0})},onPointerLeave:()=>{Object.keys(s).forEach(c=>{const h=s[c];h.material.wireframe=!1})},onClick:c=>{c.stopPropagation(),Object.keys(s).forEach(h=>{const u=s[h],f=!t;u.visible=f,d.visible=f,e(f)})},children:t?S.jsx(iu,{}):S.jsx(eu,{})})]}),S.jsxs("div",{style:{maxHeight:r?"9999px":0,overflow:"hidden"},children:[S.jsxs(ra,{children:[S.jsx(qh,{})," Uniforms:"]}),S.jsx(Af,{program:a,material:l,setTexNumber:o}),S.jsxs(ra,{children:[S.jsx(Zh,{})," Geometries:"]}),S.jsx(Xa,{children:s&&Object.keys(s).map(c=>s[c]&&s[c].geometry&&S.jsxs(Hh,{children:[S.jsxs("span",{children:[s[c].geometry.type,": "]}),s[c].userData&&s[c].userData.drawCount&&S.jsxs("b",{children:[S.jsxs("div",{children:[s[c].userData.drawCount.count,S.jsxs("small",{children:[" ",s[c].userData.drawCount.type,"s"]})]}),S.jsx("br",{}),S.jsxs("div",{children:[Math.round(Ef(s[c].geometry)/1024*1e3)/1e3,"Kb",S.jsx("small",{children:" memory used"})]})]})]},c))}),S.jsxs(Za,{onClick:()=>{console.info(l)},children:["console.info(",l.type,")"]})]})]})},Uf=()=>{ie(t=>t.triggerProgramsUpdate);const d=ie(t=>t.programs);return S.jsx(Bh,{children:d&&Array.from(d.values()).map(t=>t&&t?S.jsx(If,{el:t},t.material.uuid):null)})},Ut=d=>({overClock:"#ff6eff",fps:d?"100, 143, 255":"238,38,110",cpu:d?"254, 254, 98":"66,226,46",gpu:d?"254,254,254":"253,151,31",custom:d?"86,180,233":"40,255,255"}),Pf=({showGraph:d,colorBlind:t})=>{const e=ie(n=>n.overclockingFps),r=ie(n=>n.fpsLimit);return S.jsxs(Ot,{style:d?{color:e?Ut(t).overClock.toString():`rgb(${Ut(t).fps})`}:{},children:["FPS ",e?`${r}🚀`:""]})},Df=({showGraph:d,colorBlind:t,customData:e,minimal:r})=>{const n=ie(i=>i.gl);return n?S.jsxs(Dh,{children:[S.jsxs(It,{children:[S.jsx(du,{}),S.jsx(Ot,{style:d?{color:`rgb(${Ut(t).gpu.toString()})`}:{},children:"GPU"}),S.jsx(Vi,{children:"ms"})]}),S.jsxs(It,{children:[S.jsx(yu,{}),S.jsx(Ot,{style:d?{color:`rgb(${Ut(t).cpu.toString()})`}:{},children:"CPU"}),S.jsx(Vi,{children:"ms"})]}),S.jsxs(It,{children:[S.jsx(ou,{}),S.jsx(Pf,{showGraph:d,colorBlind:t})]}),!r&&n&&S.jsxs(It,{children:[S.jsx(Mu,{}),S.jsx(Ot,{children:n.info.render.calls===1?"call":"calls"})]}),!r&&n&&S.jsxs(It,{children:[S.jsx(Ka,{}),S.jsx(Ot,{children:"Triangles"})]}),e&&S.jsxs(It,{children:[S.jsx(Wh,{}),S.jsx(Ot,{style:d?{color:`rgb(${Ut(t).custom})`}:{},children:e.name}),e.info&&S.jsx(Vi,{children:e.info})]})]}):null},Lf=({showGraph:d,colorBlind:t,deepAnalyze:e,customData:r,matrixUpdate:n,openByDefault:i,minimal:o})=>S.jsxs(S.Fragment,{children:[S.jsx(Df,{showGraph:d,colorBlind:t,customData:r,minimal:o}),!o&&S.jsx(Ff,{matrixUpdate:n,openByDefault:i,deepAnalyze:e,showGraph:d})]}),Rf=({matrixUpdate:d})=>S.jsxs("div",{children:[S.jsxs(It,{children:[S.jsx(uu,{}),S.jsx(Ot,{children:"Geometries"})]}),S.jsxs(It,{children:[S.jsx(Ki,{}),S.jsx(Ot,{children:"Textures"})]}),S.jsxs(It,{children:[S.jsx(Ya,{}),S.jsx(Ot,{children:"shaders"})]}),S.jsxs(It,{children:[S.jsx(pu,{}),S.jsx(Ot,{children:"Lines"})]}),S.jsxs(It,{children:[S.jsx(Jh,{}),S.jsx(Ot,{children:"Points"})]}),d&&S.jsxs(It,{children:[S.jsx(Kh,{}),S.jsx(Ot,{children:"Matrices"})]})]}),Sa=({tab:d,title:t,set:e})=>{const r=ie(n=>n.tab);return S.jsx(lr,{className:`${r===d?" __perf_toggle_tab_active":""}`,onClick:()=>{e(!0),$t({tab:d})},children:S.jsx("span",{children:t})})},Ff=({openByDefault:d,showGraph:t,deepAnalyze:e,matrixUpdate:r})=>{const[n,i]=Ie.useState(d);return S.jsxs("span",{children:[S.jsx(kf,{show:n,showGraph:t,matrixUpdate:r}),d&&!e?null:S.jsxs(Vh,{className:"__perf_toggle",children:[e&&S.jsx(Sa,{tab:"programs",title:"Programs",set:i}),e&&S.jsx(Sa,{tab:"infos",title:"Infos",set:i}),S.jsx(lr,{onClick:()=>{i(!n)},children:n?S.jsxs("span",{children:[S.jsx(Ja,{})," Minimize"]}):S.jsxs("span",{children:[S.jsx(Qa,{})," More"]})})]})]})},kf=({show:d,showGraph:t,matrixUpdate:e})=>{const r=ie(n=>n.tab);return S.jsxs(S.Fragment,{children:[S.jsx(Rf,{matrixUpdate:e}),d&&S.jsx("div",{children:S.jsx(zh,{style:{marginTop:t?"38px":0},children:r==="programs"&&S.jsx(Uf,{})})})]})},Nf=({showGraph:d=!0,colorBlind:t=!1,openByDefault:e=!0,className:r,overClock:n=!1,style:i,position:o="top-right",chart:s,logsPerSecond:a,deepAnalyze:l=!1,antialias:c=!0,customData:h,matrixUpdate:u,minimal:f})=>{const p=C.useRef(null);return S.jsxs(S.Fragment,{children:[S.jsx(eh,{logsPerSecond:a,chart:s,overClock:n,deepAnalyze:l,matrixUpdate:u}),S.jsx(wf,{name:"r3f-perf",children:S.jsxs(Ph,{className:(r?" ".concat(r):" ")+` ${o||""} ${f?"minimal":""}`,style:{minHeight:f?"37px":d?"100px":"60px",...i},ref:p,children:[S.jsx(bf,{perfContainerRef:p,colorBlind:t,chart:s,showGraph:d,antialias:c,customData:h,minimal:f,matrixUpdate:u}),S.jsx(Lf,{colorBlind:t,showGraph:d,deepAnalyze:l,openByDefault:e,customData:h,matrixUpdate:u,minimal:f})]})})]})},An=new Po;An.gravity.set(0,0,0);const Of=1/60;let Ma=performance.now()/1e3;function zf(d,t,e=1,r){const n=C.useRef(null);return C.useEffect(()=>{if(!d.current)return;const i=new Do(t),o=new Lo({mass:e,shape:i});return o.position.copy(d.current.position),o.linearDamping=.9,o.angularDamping=.5,o.fixedRotation=!1,An.addBody(o),n.current=o,console.log("Sphere physics body initialized:",o.id),()=>{An.has(o)&&An.removeBody(o)}},[d,t,e]),He(()=>{if(d.current&&n.current){const i=Math.sin(Date.now()*.001)*r,o=Math.cos(Date.now()*.0015)*r,s=Math.sin(Date.now()*.002)*r;n.current.applyLocalForce(new qi(i,o,s),new qi(0,0,0)),d.current.position.copy(n.current.position),d.current.quaternion.copy(n.current.quaternion)}}),n.current}function Bf(){const{isPhysicsPaused:d}=C.useContext(Pe);return He(()=>{if(d)return;const t=performance.now()/1e3;let e=t-Ma;Ma=t,e=Math.min(e,.1),An.step(Of,e,10)}),null}async function Vf(d,t=4096){if(console.log("Creating texture atlas for",d.length,"images"),d.length===0)return console.log("No images provided, returning empty atlas"),{texture:new Wi,imageUVs:[],atlasWidth:0,atlasHeight:0};const e=await Promise.all(d.map(f=>new Promise((p,g)=>{const m=new Image;m.onload=()=>{console.log("Loaded image:",f,"size:",m.width,"x",m.height),p(m)},m.onerror=v=>{console.error("Failed to load image:",f,v),g(v)},m.src=f,m.crossOrigin="Anonymous"})));let r=0,n=0,i=0;const o=[];for(const f of e){if(r+f.width>t&&(r=0,n+=i,i=0),n+f.height>t){console.warn("Texture atlas max size exceeded. Some images might not fit.");break}o.push({img:f,x:r,y:n,width:f.width,height:f.height}),r+=f.width,i=Math.max(i,f.height)}const s=Math.min(t,Math.max(...o.map(f=>f.x+f.width))),a=Math.min(t,n+i),l=document.createElement("canvas");l.width=s>0?s:1,l.height=a>0?a:1;const c=l.getContext("2d");o.forEach(({img:f,x:p,y:g})=>{c.drawImage(f,p,g)});const h=new yo(l);h.needsUpdate=!0,h.minFilter=So,h.magFilter=Mo;const u=o.map(({x:f,y:p,width:g,height:m})=>new bo(f/s,p/a,(f+g)/s,(p+m)/a));return console.log("Created texture atlas:",s,"x",a,"with",u.length,"images"),{texture:h,imageUVs:u,atlasWidth:s,atlasHeight:a}}const Hf=`
  attribute vec4 instanceUV; // x, y, z, w correspond to Umin, Vmin, Umax, Vmax
  varying vec2 vUv;
  varying vec4 vInstanceUV;

  void main() {
    vUv = uv; // Standard UVs for the plane (0-1)
    vInstanceUV = instanceUV; // Pass instance UV rect to fragment shader
    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
  }
`,Gf=`
  uniform sampler2D atlasTexture; // Our texture atlas
  varying vec2 vUv;
  varying vec4 vInstanceUV; // Contains Umin, Vmin, Umax, Vmax for this instance

  void main() {
    // Calculate the actual UV coordinates for this instance by scaling and offsetting vUv
    vec2 uv = mix(vInstanceUV.xy, vInstanceUV.zw, vUv);
    vec4 textureColor = texture2D(atlasTexture, uv);

    // Apply alpha if image has transparency, otherwise just display color
    if (textureColor.a < 0.1) discard; // Discard fully transparent pixels
    gl_FragColor = textureColor;
  }
`,uo=C.forwardRef(({imageUrls:d,sphereRadius:t,sphereRef:e,onPointerDown:r,onPointerMove:n,onPointerUp:i},o)=>{var x;const{config:s}=C.useContext(Pe),a=C.useRef();C.useImperativeHandle(o,()=>a.current);const l=d.length;C.useEffect(()=>{console.log("ImagePlane: Rendering",l,"images on sphere with radius",t)},[l,t]);const[c,h]=C.useState({texture:new Wi,imageUVs:[],atlasWidth:0,atlasHeight:0}),u=C.useRef(new Set),f=C.useCallback((_,y)=>{y?u.current.add(_):u.current.delete(_)},[]);C.useImperativeHandle(o,()=>({...a.current,markImageInteracting:f}),[f]),C.useEffect(()=>{let _=!0;return(async()=>{try{const{texture:M,imageUVs:E,atlasWidth:b,atlasHeight:A}=await Vf(d);_?h({texture:M,imageUVs:E,atlasWidth:b,atlasHeight:A}):M.dispose()}catch(M){console.error("Failed to create texture atlas:",M),_&&h({texture:new Wi,imageUVs:[],atlasWidth:0,atlasHeight:0})}})(),()=>{_=!1,c.texture&&(c.texture.dispose(),c.texture.image&&typeof c.texture.image.src=="string"&&c.texture.image.src.startsWith("blob:")&&URL.revokeObjectURL(c.texture.image.src))}},[d]);const p=C.useMemo(()=>new ri,[]),g=C.useMemo(()=>{const _=new Float32Array(l*4);return new Co(_,4)},[l]),m=C.useMemo(()=>{if(!c.imageUVs.length)return null;const _={uvs:new Float32Array(l*4),positions:[],matrices:[]};for(let y=0;y<l;y++){const M=c.imageUVs[y];M&&(_.uvs[y*4]=M.x,_.uvs[y*4+1]=M.y,_.uvs[y*4+2]=M.z,_.uvs[y*4+3]=M.w);const E=Math.acos(-1+2*y/l),b=Math.sqrt(l*Math.PI)*E,A=t*Math.sin(E)*Math.cos(b),P=t*Math.sin(E)*Math.sin(b),T=t*Math.cos(E);_.positions.push(new Wt(A,P,T)),y===0&&(console.log("ImagePlane: First image position:",{x:A,y:P,z:T,sphereRadius:t,phi:E,theta:b}),console.log("ImagePlane: First image matrix:",p.matrix.elements)),p.position.set(A,P,T),p.lookAt(0,0,0),p.rotateY(Math.PI),p.scale.setScalar(s.appSettings.imagePlaneSize),p.updateMatrix(),_.matrices.push(p.matrix.clone())}return _},[c.imageUVs,l,t,s.appSettings.imagePlaneSize,p]);C.useEffect(()=>{if(!(!m||!a.current)){console.log("Setting up",l,"image instances on sphere"),a.current.userData={};for(let _=0;_<l;_++)g.setX(_,m.uvs[_*4]),g.setY(_,m.uvs[_*4+1]),g.setZ(_,m.uvs[_*4+2]),g.setW(_,m.uvs[_*4+3]),a.current.setMatrixAt(_,m.matrices[_]),a.current.userData[_]=m.matrices[_].clone();a.current.instanceMatrix.needsUpdate=!0,a.current.geometry.setAttribute("instanceUV",g)}},[m,l,g]);const v=C.useMemo(()=>{var y;return console.log("ImagePlane: Creating material with texture:",(y=c.texture)==null?void 0:y.uuid),new wo({uniforms:{atlasTexture:{value:c.texture}},vertexShader:Hf,fragmentShader:Gf,transparent:!0,side:Eo})},[(x=c.texture)==null?void 0:x.uuid]);return C.useEffect(()=>()=>{v&&v.dispose()},[v]),C.useEffect(()=>{a.current&&a.current.material&&(a.current.material.uniforms.atlasTexture.value=c.texture,a.current.material.needsUpdate=!0)},[c.texture]),He(()=>{if(!(e!=null&&e.current)||!a.current||!m)return;const _=e.current.matrixWorld,y=new Wt,M=new $i,E=new Wt;_.decompose(y,M,E);for(let b=0;b<l;b++){if(u.current.has(b))continue;const A=m.positions[b];if(!A||!A.clone)continue;const P=A.clone().applyQuaternion(M).add(y);p.position.copy(P),p.lookAt(y),p.rotateY(Math.PI),p.scale.setScalar(s.appSettings.imagePlaneSize),p.updateMatrix(),a.current.setMatrixAt(b,p.matrix)}a.current.instanceMatrix.needsUpdate=!0}),l===0||!c.texture||c.imageUVs.length===0?(console.log("ImagePlane: Not rendering - imageCount:",l,"atlasData.texture:",!!c.texture,"imageUVs.length:",c.imageUVs.length),null):(console.log("ImagePlane: Rendering",l,"images with atlas texture:",c.texture.uuid),console.log("ImagePlane: Atlas data:",{textureWidth:c.atlasWidth,textureHeight:c.atlasHeight,imageUVs:c.imageUVs.map((_,y)=>`Image ${y}: (${_.x.toFixed(3)}, ${_.y.toFixed(3)}) to (${_.z.toFixed(3)}, ${_.w.toFixed(3)})`)}),S.jsxs("instancedMesh",{ref:a,args:[null,null,l],castShadow:!0,receiveShadow:!0,onPointerDown:r,onPointerMove:n,onPointerUp:i,children:[S.jsx("planeGeometry",{args:[1,1]}),S.jsx("primitive",{object:v,attach:"material"})]}))});uo.displayName="ImagePlane";function jf(d){const{gl:t}=cn(),{config:e}=C.useContext(Pe),r=C.useRef(!1),n=C.useRef(0),i=C.useRef(0),o=10,s=C.useCallback(c=>{var h,u;console.log("Sphere interaction: onPointerDown received",{button:c.button,clientX:c.clientX,clientY:c.clientY,spherePhysicsBody:!!d,target:(u=(h=c.target)==null?void 0:h.constructor)==null?void 0:u.name}),c.button===0&&(c.stopPropagation(),r.current=!0,n.current=c.clientX,i.current=c.clientY,d&&(d.angularVelocity.set(0,0,0),console.log("Sphere interaction: Angular velocity reset")))},[d]),a=C.useCallback(c=>{if(!r.current||!d)return;if(c.buttons!==void 0&&!(c.buttons&1)){r.current=!1;return}const h=c.clientX-n.current,u=c.clientY-i.current;if(Math.abs(h)<1&&Math.abs(u)<1)return;console.log("Sphere interaction: onPointerMove",{deltaX:h,deltaY:u,isDragging:r.current,spherePhysicsBody:!!d});const f=u*e.appSettings.dragSensitivity,p=h*e.appSettings.dragSensitivity,g=new qi(f,p,0);d.applyTorque(g),console.log("Sphere interaction: Applied torque",{torqueX:f,torqueY:p,deltaX:h,deltaY:u}),d.angularVelocity.length()>o&&(d.angularVelocity.normalize(),d.angularVelocity.scale(o,d.angularVelocity)),n.current=c.clientX,i.current=c.clientY},[d,e.appSettings.dragSensitivity]),l=C.useCallback(c=>{console.log("Sphere interaction: onPointerUp received",{button:c==null?void 0:c.button,isDragging:r.current}),(!c||c.button===0||c.button===void 0)&&(r.current=!1,console.log("Sphere interaction: Drag state reset"))},[]);return C.useEffect(()=>(t.domElement.addEventListener("pointermove",a),t.domElement.addEventListener("pointerup",l),()=>{t.domElement.removeEventListener("pointermove",a),t.domElement.removeEventListener("pointerup",l)}),[t,a,l]),He(()=>{Ta()}),{onPointerDown:s}}const ba={DRAG_THRESHOLD_SQ:.01,TAP_DURATION_MS:200};function Wf(d,t,e){const{gl:r,camera:n}=cn(),{config:i,setIsPhysicsPaused:o,setSelectedImageId:s,selectedImageId:a,isPhysicsPaused:l}=C.useContext(Pe),c=C.useMemo(()=>new Ao,[]),h=C.useMemo(()=>new To,[]),u=C.useMemo(()=>new Wt(0,0,0),[]),f=C.useMemo(()=>new Io(u,t),[t,u]),p=C.useRef(!1),g=C.useRef(null),m=C.useRef(new Wt),v=C.useRef(0),x=C.useMemo(()=>new ri,[]),_=C.useRef(new Map),[y,M]=C.useState(null),E=C.useRef(new Map),b=.05,A=3,P=0,T=C.useCallback(R=>{if(!_.current.has(R)){const O=new hr;d.current&&(d.current.getMatrixAt(R,O),_.current.set(R,O.clone()))}return _.current.get(R)},[d]),N=C.useCallback((R,O)=>{if(!d.current||R===null)return;const H=new hr;d.current.getMatrixAt(R,H),x.matrix.copy(H),x.matrix.decompose(x.position,x.quaternion,x.scale);const V=T(R),L=new ri;V?(L.matrix.copy(V),L.matrix.decompose(L.position,L.quaternion,L.scale)):L.scale.setScalar(i.appSettings.imagePlaneSize),O?x.scale.copy(L.scale):x.scale.setScalar(.001),x.updateMatrix(),d.current.setMatrixAt(R,x.matrix),d.current.instanceMatrix.needsUpdate=!0},[d,x,T,i.appSettings.imagePlaneSize]),w=C.useCallback(R=>{o(R),R&&e&&(e.angularVelocity.set(0,0,0),e.velocity.set(0,0,0))},[o,e]);C.useEffect(()=>{if(d.current&&d.current.userData){const R=i.catalogs.find(O=>O.id===i.appSettings.initialCatalogId);if(R){const O=R.images.length;for(let H=0;H<O;H++)a===null&&N(H,!0),E.current.set(H,0)}}},[a,d,N,i.appSettings.initialCatalogId,i.catalogs]);const I=C.useCallback(R=>{if(R.preventDefault(),y===null)return;w(!0);const O=T(y);if(!O)return;x.matrix.copy(O),x.matrix.decompose(x.position,x.quaternion,x.scale);const H=x.position.clone().normalize();let V=E.current.get(y)||0;R.deltaY<0?V=Math.min(V+b,A):V=Math.max(V-b,P),E.current.set(y,V);const L=H.multiplyScalar(t+V);new fr(x.position).to(L,100).easing(pr.Quadratic.Out).onUpdate(()=>{x.updateMatrix(),d.current.setMatrixAt(y,x.matrix),d.current.instanceMatrix.needsUpdate=!0}).onComplete(()=>{}).start();const F=V>P?new Wt(i.appSettings.imagePlaneSize*1.2,i.appSettings.imagePlaneSize*1.2,1):new Wt(i.appSettings.imagePlaneSize,i.appSettings.imagePlaneSize,1);new fr(x.scale).to(F,100).easing(pr.Quadratic.Out).start()},[y,d,t,x,T,i.appSettings.imagePlaneSize,w]);C.useEffect(()=>(r.domElement.addEventListener("wheel",I,{passive:!1}),()=>{r.domElement.removeEventListener("wheel",I)}),[I,r.domElement]);const U=C.useCallback(R=>{if(R.button!==0)return;if(!n||!r.domElement){console.warn("Camera or DOM element not ready for onPointerDown.");return}h.x=R.clientX/r.domElement.clientWidth*2-1,h.y=-(R.clientY/r.domElement.clientHeight)*2+1,c.setFromCamera(h,n);const O=c.intersectObject(d.current);if(O.length>0){const H=O[0].instanceId;g.current=H,m.current.copy(O[0].point),p.current=!1,v.current=Date.now(),M(H)}else M(null),l&&w(!1)},[r,n,d,c,h,M,l,w]),z=C.useCallback(R=>{if(g.current!==null){if(!n||!r.domElement){console.warn("Camera or DOM element not ready for onPointerMove.");return}if(h.x=R.clientX/r.domElement.clientWidth*2-1,h.y=-(R.clientY/r.domElement.clientHeight)*2+1,c.setFromCamera(h,n),!p.current){const O=new Uo().setFromNormalAndCoplanarPoint(n.getWorldDirection(new Wt).negate(),m.current),H=new Wt;c.ray.intersectPlane(O,H),H.distanceToSquared(m.current)>ba.DRAG_THRESHOLD_SQ&&(p.current=!0,M(null),l&&w(!1))}if(p.current){l&&w(!1);const O=c.ray.intersectSphere(f);if(O){const H=O.clone(),V=E.current.get(g.current)||0,L=T(g.current),F=new ri;L&&(F.matrix.copy(L),F.matrix.decompose(F.position,F.quaternion,F.scale));const j=H.clone().normalize().multiplyScalar(t+V),W=new $i().setFromUnitVectors(new Wt(0,0,1),j.clone().normalize()).multiply(new $i().setFromAxisAngle(new Wt(0,1,0),Math.PI));x.position.copy(j),x.quaternion.copy(W),x.scale.copy(F.scale),x.updateMatrix(),d.current.setMatrixAt(g.current,x.matrix),d.current.instanceMatrix.needsUpdate=!0}}}},[r,n,d,c,h,f,x,m,l,w,t,E,T,M]),k=C.useCallback(R=>{var V;if(g.current===null)return;const O=Date.now()-v.current,H=g.current;if(console.log(`Image interaction: PointerUp on index ${H}, duration: ${O}ms, isDragging: ${p.current}`),!p.current&&O<ba.TAP_DURATION_MS){console.log(`Image interaction: CLICK DETECTED on index ${H}`);const L=i.catalogs.find(j=>j.id===i.appSettings.initialCatalogId),F=(V=L==null?void 0:L.images[H])==null?void 0:V.name,B=d.current.userData[H];F&&B?(s(F),w(!0),N(H,!1),console.log(`Image interaction: Image ${H} (${F}) sent to 2D viewport. 3D instance hidden.`)):console.warn(`Image interaction: Could not find image data or original matrix for index ${H}.`)}g.current=null,p.current=!1,console.log(`Image interaction: Drag/click state reset for index ${H}`)},[i,s,w,d,N,g,p]);return He(()=>{if(Ta(),y!==null&&!p.current){const R=E.current.get(y)||0;if(R>P||E.current.has(y)){const O=T(y);if(O){x.matrix.copy(O),x.matrix.decompose(x.position,x.quaternion,x.scale);const V=x.position.clone().normalize().multiplyScalar(t+R);x.position.copy(V),x.lookAt(u),x.rotateY(Math.PI);const L=R>P?new Wt(i.appSettings.imagePlaneSize*1.2,i.appSettings.imagePlaneSize*1.2,1):new Wt(i.appSettings.imagePlaneSize,i.appSettings.imagePlaneSize,1);x.scale.copy(L),x.updateMatrix(),d.current.setMatrixAt(y,x.matrix),d.current.instanceMatrix.needsUpdate=!0}}}}),{onPointerDown:U,onPointerMove:z,onPointerUp:k}}function $f(){const{config:d}=C.useContext(Pe),t=C.useRef(),e=C.useRef(),r=d.spheres.find(g=>g.id===d.appSettings.initialSphereTextureId),n=d.catalogs.find(g=>g.id===d.appSettings.initialCatalogId),i=C.useMemo(()=>n?n.images.map(m=>`/images/${n.folderName}/${m.file}`):[],[n]);C.useEffect(()=>{n&&(console.log("Generated image URLs for catalog",n.id,":",i),console.log("Image URLs count:",i.length),console.log("Sphere radius:",d.appSettings.sphereRadius),console.log("Image plane size:",d.appSettings.imagePlaneSize))},[n,i,d.appSettings.sphereRadius,d.appSettings.imagePlaneSize]);const o=dr(ur,`/textures/${r.texture}`),s=r.materialProps.bumpMap?dr(ur,`/textures/${r.materialProps.bumpMap}`):null,a=zf(t,d.appSettings.sphereRadius,10,d.appSettings.wobbleIntensity);C.useEffect(()=>{a&&console.log("Sphere physics body initialized:",a.id)},[a]);const{onPointerDown:l}=jf(a),{onPointerDown:c,onPointerMove:h,onPointerUp:u}=Wf(e,d.appSettings.sphereRadius,a),f=a?{onPointerDown:l}:{},p=a?{onPointerDown:c,onPointerMove:h,onPointerUp:u}:{};return C.useEffect(()=>{a&&console.log("SphereGallery: Physics body ready, interactions enabled")},[a]),S.jsxs(S.Fragment,{children:[S.jsxs("mesh",{ref:t,receiveShadow:!0,castShadow:!0,userData:{manualControl:!0},onPointerDown:g=>{console.log("Sphere mesh pointerdown received:",{clientX:g.clientX,clientY:g.clientY,button:g.button,hasSphereHandler:!!f.onPointerDown,spherePhysicsBody:!!a}),f.onPointerDown?f.onPointerDown(g):console.warn("Sphere interaction handler not available")},children:[S.jsx("sphereGeometry",{args:[d.appSettings.sphereRadius,64,64]}),S.jsx("meshStandardMaterial",{map:o,...r.materialProps,bumpMap:s})]}),i.length>0&&S.jsxs(S.Fragment,{children:[console.log("SphereGallery: Rendering ImagePlane with",i.length,"images"),S.jsx(uo,{ref:e,imageUrls:i,sphereRadius:d.appSettings.sphereRadius,sphereRef:t,...p})]})]})}function qf(){const{config:d}=C.useContext(Pe);return Ie.useEffect(()=>{const t=document.querySelector("canvas");if(t){const e=r=>{console.log("Global canvas pointerdown:",{clientX:r.clientX,clientY:r.clientY,button:r.button,target:r.target})};return t.addEventListener("pointerdown",e),()=>{t.removeEventListener("pointerdown",e)}}},[]),null}function Xf({isOpen:d,imageUrl:t,imageName:e}){const{setSelectedImageId:r,setIsPhysicsPaused:n}=C.useContext(Pe),i=C.useRef(),o=C.useCallback(()=>{r(null),n(!1),console.log("DetailViewport: Closed. Physics resumed.")},[r,n]);return C.useEffect(()=>{const s=l=>{d&&i.current&&!i.current.contains(l.target)&&o()},a=l=>{d&&l.key==="Escape"&&o()};return d&&(document.addEventListener("mousedown",s),document.addEventListener("keydown",a)),()=>{document.removeEventListener("mousedown",s),document.removeEventListener("keydown",a)}},[d,o]),S.jsx("div",{ref:i,style:{position:"absolute",top:0,bottom:0,right:d?0:-500,width:"500px",backgroundColor:"rgba(20, 20, 20, 0.9)",boxShadow:"-5px 0px 15px rgba(0,0,0,0.5)",padding:"20px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",color:"white",zIndex:20,transition:"right 0.3s ease-out",opacity:d?1:0,transitionProperty:"right, opacity"},children:d&&S.jsxs("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[S.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:[S.jsx("h2",{style:{margin:0},children:e||"Image Details"}),S.jsx("button",{onClick:o,style:{background:"none",border:"1px solid white",color:"white",fontSize:"18px",cursor:"pointer",padding:"5px 10px",borderRadius:"5px",transition:"background-color 0.2s ease"},onMouseEnter:s=>s.target.style.backgroundColor="rgba(255,255,255,0.1)",onMouseLeave:s=>s.target.style.backgroundColor="transparent",children:"X"})]}),t?S.jsx("img",{src:t,alt:e,style:{maxWidth:"100%",maxHeight:"80%",objectFit:"contain",border:"1px solid #444",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0,0,0,0.3)"}}):S.jsx("p",{children:"Loading image..."}),S.jsxs("p",{style:{marginTop:"20px",textAlign:"center"},children:["This is the detailed 2D view for ",S.jsx("strong",{children:e}),"."]}),S.jsxs("div",{style:{marginTop:"10px",fontSize:"14px",color:"#ccc",textAlign:"center"},children:["Click outside or press ",S.jsx("kbd",{style:{background:"#333",padding:"2px 6px",borderRadius:"3px",border:"1px solid #555"},children:"ESC"})," to return to the 3D gallery."]})]})})}function Zf(){const[d,t]=C.useState(null),[e,r]=C.useState(!0),[n,i]=C.useState(null);return C.useEffect(()=>{(async()=>{try{const s=await fetch("/config.json");if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);const a=await s.json();t(a)}catch(s){console.error("Failed to load config.json:",s),i(s)}finally{r(!1)}})()},[]),{config:d,loading:e,error:n}}const Pe=C.createContext(null);function Yf(){const{config:d,loading:t,error:e}=Zf(),[r,n]=C.useState(null),[i,o]=C.useState(!1),[s,a]=C.useState(null);if(C.useEffect(()=>{d&&n(d)},[d]),t)return S.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",color:"white",backgroundColor:"#333"},children:"Loading configuration..."});if(e)return S.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",color:"red",backgroundColor:"#333"},children:["Error loading configuration: ",e.message]});if(!r)return null;const l={config:r,setCurrentConfig:n,isPhysicsPaused:i,setIsPhysicsPaused:o,selectedImageId:s,setSelectedImageId:a},c=r.catalogs.find(f=>f.id===r.appSettings.initialCatalogId),h=s?c==null?void 0:c.images.find(f=>f.name===s):null,u=h?`/images/${c.folderName}/${h.file}`:null;return S.jsx("div",{className:"App",style:{width:"100vw",height:"100vh",overflow:"hidden"},children:S.jsxs(Pe.Provider,{value:l,children:[S.jsxs(Ea,{camera:{position:[0,0,r.appSettings.sphereRadius*2],fov:60},dpr:[1,2],shadows:!0,children:[S.jsx(Nf,{position:"top-left"}),S.jsx("ambientLight",{intensity:.5}),S.jsx("directionalLight",{position:[5,10,5],intensity:1,castShadow:!0}),S.jsx(_o,{preset:"city",background:!0}),S.jsx(Bf,{}),S.jsx($f,{})]}),S.jsx(qf,{}),S.jsxs("div",{style:{position:"absolute",bottom:"20px",left:"20px",background:"rgba(0, 0, 0, 0.8)",color:"white",padding:"15px",borderRadius:"8px",fontSize:"14px",fontFamily:"Arial, sans-serif",maxWidth:"300px",zIndex:1e3},children:[S.jsx("div",{style:{fontWeight:"bold",marginBottom:"10px"},children:"Controls:"}),S.jsxs("div",{style:{marginBottom:"5px"},children:["• ",S.jsx("strong",{children:"Drag sphere"})," to rotate"]}),S.jsxs("div",{style:{marginBottom:"5px"},children:["• ",S.jsx("strong",{children:"Click image"})," to view details"]}),S.jsxs("div",{style:{marginBottom:"5px"},children:["• ",S.jsx("strong",{children:"Mouse Wheel"})," - Move focused image closer/further"]}),S.jsx("div",{style:{fontSize:"12px",opacity:"0.8",marginTop:"8px"},children:"Spin the globe to position images in front of the camera, then use mouse wheel to adjust image distance from sphere surface."})]}),S.jsx(Xf,{isOpen:s!==null,imageUrl:u,imageName:h==null?void 0:h.name})]})})}Aa(document.getElementById("root")).render(S.jsx(C.StrictMode,{children:S.jsx(Yf,{})}));
