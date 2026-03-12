(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Aa(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const it={},Ji=[],yn=()=>{},Eu=()=>!1,Xs=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),wa=n=>n.startsWith("onUpdate:"),wt=Object.assign,Ra=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},dh=Object.prototype.hasOwnProperty,Qe=(n,e)=>dh.call(n,e),He=Array.isArray,Qi=n=>Hr(n)==="[object Map]",yu=n=>Hr(n)==="[object Set]",ul=n=>Hr(n)==="[object Date]",We=n=>typeof n=="function",pt=n=>typeof n=="string",bn=n=>typeof n=="symbol",nt=n=>n!==null&&typeof n=="object",Tu=n=>(nt(n)||We(n))&&We(n.then)&&We(n.catch),bu=Object.prototype.toString,Hr=n=>bu.call(n),ph=n=>Hr(n).slice(8,-1),Au=n=>Hr(n)==="[object Object]",Ca=n=>pt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,br=Aa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qs=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},mh=/-\w/g,un=qs(n=>n.replace(mh,e=>e.slice(1).toUpperCase())),gh=/\B([A-Z])/g,Ci=qs(n=>n.replace(gh,"-$1").toLowerCase()),wu=qs(n=>n.charAt(0).toUpperCase()+n.slice(1)),lo=qs(n=>n?`on${wu(n)}`:""),Sn=(n,e)=>!Object.is(n,e),bs=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ru=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},La=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let fl;const Ys=()=>fl||(fl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Jt(n){if(He(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=pt(i)?Mh(i):Jt(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(pt(n)||nt(n))return n}const _h=/;(?![^(]*\))/g,vh=/:([^]+)/,xh=/\/\*[^]*?\*\//g;function Mh(n){const e={};return n.replace(xh,"").split(_h).forEach(t=>{if(t){const i=t.split(vh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Pt(n){let e="";if(pt(n))e=n;else if(He(n))for(let t=0;t<n.length;t++){const i=Pt(n[t]);i&&(e+=i+" ")}else if(nt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Sh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Eh=Aa(Sh);function Cu(n){return!!n||n===""}function yh(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Pa(n[i],e[i]);return t}function Pa(n,e){if(n===e)return!0;let t=ul(n),i=ul(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=bn(n),i=bn(e),t||i)return n===e;if(t=He(n),i=He(e),t||i)return t&&i?yh(n,e):!1;if(t=nt(n),i=nt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!Pa(n[a],e[a]))return!1}}return String(n)===String(e)}const Lu=n=>!!(n&&n.__v_isRef===!0),In=n=>pt(n)?n:n==null?"":He(n)||nt(n)&&(n.toString===bu||!We(n.toString))?Lu(n)?In(n.value):JSON.stringify(n,Pu,2):String(n),Pu=(n,e)=>Lu(e)?Pu(n,e.value):Qi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[co(i,s)+" =>"]=r,t),{})}:yu(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>co(t))}:bn(e)?co(e):nt(e)&&!He(e)&&!Au(e)?String(e):e,co=(n,e="")=>{var t;return bn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bt;class Th{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Bt,!e&&Bt&&(this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Bt;try{return Bt=this,e()}finally{Bt=t}}}on(){++this._on===1&&(this.prevScope=Bt,Bt=this)}off(){this._on>0&&--this._on===0&&(Bt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function bh(){return Bt}let st;const uo=new WeakSet;class Du{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Bt&&Bt.active&&Bt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,uo.has(this)&&(uo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Iu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,hl(this),Nu(this);const e=st,t=fn;st=this,fn=!0;try{return this.fn()}finally{Fu(this),st=e,fn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ia(e);this.deps=this.depsTail=void 0,hl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?uo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ra(this)&&this.run()}get dirty(){return ra(this)}}let Uu=0,Ar,wr;function Iu(n,e=!1){if(n.flags|=8,e){n.next=wr,wr=n;return}n.next=Ar,Ar=n}function Da(){Uu++}function Ua(){if(--Uu>0)return;if(wr){let e=wr;for(wr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ar;){let e=Ar;for(Ar=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Nu(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Fu(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Ia(i),Ah(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function ra(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ou(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Ou(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ur)||(n.globalVersion=Ur,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ra(n))))return;n.flags|=2;const e=n.dep,t=st,i=fn;st=n,fn=!0;try{Nu(n);const r=n.fn(n._value);(e.version===0||Sn(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{st=t,fn=i,Fu(n),n.flags&=-3}}function Ia(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Ia(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Ah(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let fn=!0;const Bu=[];function Vn(){Bu.push(fn),fn=!1}function kn(){const n=Bu.pop();fn=n===void 0?!0:n}function hl(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=st;st=void 0;try{e()}finally{st=t}}}let Ur=0;class wh{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Na{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!st||!fn||st===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==st)t=this.activeLink=new wh(st,this),st.deps?(t.prevDep=st.depsTail,st.depsTail.nextDep=t,st.depsTail=t):st.deps=st.depsTail=t,zu(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=st.depsTail,t.nextDep=void 0,st.depsTail.nextDep=t,st.depsTail=t,st.deps===t&&(st.deps=i)}return t}trigger(e){this.version++,Ur++,this.notify(e)}notify(e){Da();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ua()}}}function zu(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)zu(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const sa=new WeakMap,Ei=Symbol(""),oa=Symbol(""),Ir=Symbol("");function bt(n,e,t){if(fn&&st){let i=sa.get(n);i||sa.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Na),r.map=i,r.key=t),r.track()}}function Bn(n,e,t,i,r,s){const a=sa.get(n);if(!a){Ur++;return}const o=l=>{l&&l.trigger()};if(Da(),e==="clear")a.forEach(o);else{const l=He(n),c=l&&Ca(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,d)=>{(d==="length"||d===Ir||!bn(d)&&d>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(Ir)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Ei)),Qi(n)&&o(a.get(oa)));break;case"delete":l||(o(a.get(Ei)),Qi(n)&&o(a.get(oa)));break;case"set":Qi(n)&&o(a.get(Ei));break}}Ua()}function Li(n){const e=Je(n);return e===n?e:(bt(e,"iterate",Ir),rn(n)?e:e.map(hn))}function $s(n){return bt(n=Je(n),"iterate",Ir),n}function vn(n,e){return Wn(n)?rr(yi(n)?hn(e):e):hn(e)}const Rh={__proto__:null,[Symbol.iterator](){return fo(this,Symbol.iterator,n=>vn(this,n))},concat(...n){return Li(this).concat(...n.map(e=>He(e)?Li(e):e))},entries(){return fo(this,"entries",n=>(n[1]=vn(this,n[1]),n))},every(n,e){return Rn(this,"every",n,e,void 0,arguments)},filter(n,e){return Rn(this,"filter",n,e,t=>t.map(i=>vn(this,i)),arguments)},find(n,e){return Rn(this,"find",n,e,t=>vn(this,t),arguments)},findIndex(n,e){return Rn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Rn(this,"findLast",n,e,t=>vn(this,t),arguments)},findLastIndex(n,e){return Rn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Rn(this,"forEach",n,e,void 0,arguments)},includes(...n){return ho(this,"includes",n)},indexOf(...n){return ho(this,"indexOf",n)},join(n){return Li(this).join(n)},lastIndexOf(...n){return ho(this,"lastIndexOf",n)},map(n,e){return Rn(this,"map",n,e,void 0,arguments)},pop(){return gr(this,"pop")},push(...n){return gr(this,"push",n)},reduce(n,...e){return dl(this,"reduce",n,e)},reduceRight(n,...e){return dl(this,"reduceRight",n,e)},shift(){return gr(this,"shift")},some(n,e){return Rn(this,"some",n,e,void 0,arguments)},splice(...n){return gr(this,"splice",n)},toReversed(){return Li(this).toReversed()},toSorted(n){return Li(this).toSorted(n)},toSpliced(...n){return Li(this).toSpliced(...n)},unshift(...n){return gr(this,"unshift",n)},values(){return fo(this,"values",n=>vn(this,n))}};function fo(n,e,t){const i=$s(n),r=i[e]();return i!==n&&!rn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Ch=Array.prototype;function Rn(n,e,t,i,r,s){const a=$s(n),o=a!==n&&!rn(n),l=a[e];if(l!==Ch[e]){const f=l.apply(n,s);return o?hn(f):f}let c=t;a!==n&&(o?c=function(f,d){return t.call(this,vn(n,f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function dl(n,e,t,i){const r=$s(n),s=r!==n&&!rn(n);let a=t,o=!1;r!==n&&(s?(o=i.length===0,a=function(c,u,f){return o&&(o=!1,c=vn(n,c)),t.call(this,c,vn(n,u),f,n)}):t.length>3&&(a=function(c,u,f){return t.call(this,c,u,f,n)}));const l=r[e](a,...i);return o?vn(n,l):l}function ho(n,e,t){const i=Je(n);bt(i,"iterate",Ir);const r=i[e](...t);return(r===-1||r===!1)&&za(t[0])?(t[0]=Je(t[0]),i[e](...t)):r}function gr(n,e,t=[]){Vn(),Da();const i=Je(n)[e].apply(n,t);return Ua(),kn(),i}const Lh=Aa("__proto__,__v_isRef,__isVue"),Hu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(bn));function Ph(n){bn(n)||(n=String(n));const e=Je(this);return bt(e,"has",n),e.hasOwnProperty(n)}class Gu{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Gh:Xu:s?Wu:ku).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=He(e);if(!r){let l;if(a&&(l=Rh[t]))return l;if(t==="hasOwnProperty")return Ph}const o=Reflect.get(e,t,At(e)?e:i);if((bn(t)?Hu.has(t):Lh(t))||(r||bt(e,"get",t),s))return o;if(At(o)){const l=a&&Ca(t)?o:o.value;return r&&nt(l)?la(l):l}return nt(o)?r?la(o):Oa(o):o}}class Vu extends Gu{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=He(e)&&Ca(t);if(!this._isShallow){const c=Wn(s);if(!rn(i)&&!Wn(i)&&(s=Je(s),i=Je(i)),!a&&At(s)&&!At(i))return c||(s.value=i),!0}const o=a?Number(t)<e.length:Qe(e,t),l=Reflect.set(e,t,i,At(e)?e:r);return e===Je(r)&&(o?Sn(i,s)&&Bn(e,"set",t,i):Bn(e,"add",t,i)),l}deleteProperty(e,t){const i=Qe(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Bn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!bn(t)||!Hu.has(t))&&bt(e,"has",t),i}ownKeys(e){return bt(e,"iterate",He(e)?"length":Ei),Reflect.ownKeys(e)}}class Dh extends Gu{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Uh=new Vu,Ih=new Dh,Nh=new Vu(!0);const aa=n=>n,$r=n=>Reflect.getPrototypeOf(n);function Fh(n,e,t){return function(...i){const r=this.__v_raw,s=Je(r),a=Qi(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?aa:e?rr:hn;return!e&&bt(s,"iterate",l?oa:Ei),wt(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function jr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Oh(n,e){const t={get(r){const s=this.__v_raw,a=Je(s),o=Je(r);n||(Sn(r,o)&&bt(a,"get",r),bt(a,"get",o));const{has:l}=$r(a),c=e?aa:n?rr:hn;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&bt(Je(r),"iterate",Ei),r.size},has(r){const s=this.__v_raw,a=Je(s),o=Je(r);return n||(Sn(r,o)&&bt(a,"has",r),bt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=Je(o),c=e?aa:n?rr:hn;return!n&&bt(l,"iterate",Ei),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return wt(t,n?{add:jr("add"),set:jr("set"),delete:jr("delete"),clear:jr("clear")}:{add(r){const s=Je(this),a=$r(s),o=Je(r),l=!e&&!rn(r)&&!Wn(r)?o:r;return a.has.call(s,l)||Sn(r,l)&&a.has.call(s,r)||Sn(o,l)&&a.has.call(s,o)||(s.add(l),Bn(s,"add",l,l)),this},set(r,s){!e&&!rn(s)&&!Wn(s)&&(s=Je(s));const a=Je(this),{has:o,get:l}=$r(a);let c=o.call(a,r);c||(r=Je(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?Sn(s,u)&&Bn(a,"set",r,s):Bn(a,"add",r,s),this},delete(r){const s=Je(this),{has:a,get:o}=$r(s);let l=a.call(s,r);l||(r=Je(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&Bn(s,"delete",r,void 0),c},clear(){const r=Je(this),s=r.size!==0,a=r.clear();return s&&Bn(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Fh(r,n,e)}),t}function Fa(n,e){const t=Oh(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Qe(t,r)&&r in i?t:i,r,s)}const Bh={get:Fa(!1,!1)},zh={get:Fa(!1,!0)},Hh={get:Fa(!0,!1)};const ku=new WeakMap,Wu=new WeakMap,Xu=new WeakMap,Gh=new WeakMap;function Vh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function kh(n){return n.__v_skip||!Object.isExtensible(n)?0:Vh(ph(n))}function Oa(n){return Wn(n)?n:Ba(n,!1,Uh,Bh,ku)}function Wh(n){return Ba(n,!1,Nh,zh,Wu)}function la(n){return Ba(n,!0,Ih,Hh,Xu)}function Ba(n,e,t,i,r){if(!nt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=kh(n);if(s===0)return n;const a=r.get(n);if(a)return a;const o=new Proxy(n,s===2?i:t);return r.set(n,o),o}function yi(n){return Wn(n)?yi(n.__v_raw):!!(n&&n.__v_isReactive)}function Wn(n){return!!(n&&n.__v_isReadonly)}function rn(n){return!!(n&&n.__v_isShallow)}function za(n){return n?!!n.__v_raw:!1}function Je(n){const e=n&&n.__v_raw;return e?Je(e):n}function Xh(n){return!Qe(n,"__v_skip")&&Object.isExtensible(n)&&Ru(n,"__v_skip",!0),n}const hn=n=>nt(n)?Oa(n):n,rr=n=>nt(n)?la(n):n;function At(n){return n?n.__v_isRef===!0:!1}function at(n){return qu(n,!1)}function Yn(n){return qu(n,!0)}function qu(n,e){return At(n)?n:new qh(n,e)}class qh{constructor(e,t){this.dep=new Na,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Je(e),this._value=t?e:hn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||rn(e)||Wn(e);e=i?e:Je(e),Sn(e,t)&&(this._rawValue=e,this._value=i?e:hn(e),this.dep.trigger())}}function Yh(n){return At(n)?n.value:n}const $h={get:(n,e,t)=>e==="__v_raw"?n:Yh(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return At(r)&&!At(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Yu(n){return yi(n)?n:new Proxy(n,$h)}class jh{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Na(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ur-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&st!==this)return Iu(this,!0),!0}get value(){const e=this.dep.track();return Ou(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Kh(n,e,t=!1){let i,r;return We(n)?i=n:(i=n.get,r=n.set),new jh(i,r,t)}const Kr={},Ds=new WeakMap;let gi;function Zh(n,e=!1,t=gi){if(t){let i=Ds.get(t);i||Ds.set(t,i=[]),i.push(n)}}function Jh(n,e,t=it){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=T=>r?T:rn(T)||r===!1||r===0?zn(T,1):zn(T);let u,f,d,m,x=!1,_=!1;if(At(n)?(f=()=>n.value,x=rn(n)):yi(n)?(f=()=>c(n),x=!0):He(n)?(_=!0,x=n.some(T=>yi(T)||rn(T)),f=()=>n.map(T=>{if(At(T))return T.value;if(yi(T))return c(T);if(We(T))return l?l(T,2):T()})):We(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){Vn();try{d()}finally{kn()}}const T=gi;gi=u;try{return l?l(n,3,[m]):n(m)}finally{gi=T}}:f=yn,e&&r){const T=f,P=r===!0?1/0:r;f=()=>zn(T(),P)}const p=bh(),h=()=>{u.stop(),p&&p.active&&Ra(p.effects,u)};if(s&&e){const T=e;e=(...P)=>{T(...P),h()}}let b=_?new Array(n.length).fill(Kr):Kr;const S=T=>{if(!(!(u.flags&1)||!u.dirty&&!T))if(e){const P=u.run();if(r||x||(_?P.some((C,w)=>Sn(C,b[w])):Sn(P,b))){d&&d();const C=gi;gi=u;try{const w=[P,b===Kr?void 0:_&&b[0]===Kr?[]:b,m];b=P,l?l(e,3,w):e(...w)}finally{gi=C}}}else u.run()};return o&&o(S),u=new Du(f),u.scheduler=a?()=>a(S,!1):S,m=T=>Zh(T,!1,u),d=u.onStop=()=>{const T=Ds.get(u);if(T){if(l)l(T,4);else for(const P of T)P();Ds.delete(u)}},e?i?S(!0):b=u.run():a?a(S.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function zn(n,e=1/0,t){if(e<=0||!nt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,At(n))zn(n.value,e,t);else if(He(n))for(let i=0;i<n.length;i++)zn(n[i],e,t);else if(yu(n)||Qi(n))n.forEach(i=>{zn(i,e,t)});else if(Au(n)){for(const i in n)zn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&zn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Gr(n,e,t,i){try{return i?n(...i):n()}catch(r){js(r,e,t)}}function An(n,e,t,i){if(We(n)){const r=Gr(n,e,t,i);return r&&Tu(r)&&r.catch(s=>{js(s,e,t)}),r}if(He(n)){const r=[];for(let s=0;s<n.length;s++)r.push(An(n[s],e,t,i));return r}}function js(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||it;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){Vn(),Gr(s,null,10,[n,l,c]),kn();return}}Qh(n,t,r,i,a)}function Qh(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Ut=[];let _n=-1;const er=[];let Qn=null,$i=0;const $u=Promise.resolve();let Us=null;function ju(n){const e=Us||$u;return n?e.then(this?n.bind(this):n):e}function ed(n){let e=_n+1,t=Ut.length;for(;e<t;){const i=e+t>>>1,r=Ut[i],s=Nr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Ha(n){if(!(n.flags&1)){const e=Nr(n),t=Ut[Ut.length-1];!t||!(n.flags&2)&&e>=Nr(t)?Ut.push(n):Ut.splice(ed(e),0,n),n.flags|=1,Ku()}}function Ku(){Us||(Us=$u.then(Ju))}function td(n){He(n)?er.push(...n):Qn&&n.id===-1?Qn.splice($i+1,0,n):n.flags&1||(er.push(n),n.flags|=1),Ku()}function pl(n,e,t=_n+1){for(;t<Ut.length;t++){const i=Ut[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ut.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Zu(n){if(er.length){const e=[...new Set(er)].sort((t,i)=>Nr(t)-Nr(i));if(er.length=0,Qn){Qn.push(...e);return}for(Qn=e,$i=0;$i<Qn.length;$i++){const t=Qn[$i];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Qn=null,$i=0}}const Nr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Ju(n){try{for(_n=0;_n<Ut.length;_n++){const e=Ut[_n];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Gr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;_n<Ut.length;_n++){const e=Ut[_n];e&&(e.flags&=-2)}_n=-1,Ut.length=0,Zu(),Us=null,(Ut.length||er.length)&&Ju()}}let nn=null,Qu=null;function Is(n){const e=nn;return nn=n,Qu=n&&n.type.__scopeId||null,e}function nd(n,e=nn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&bl(-1);const s=Is(e);let a;try{a=n(...r)}finally{Is(s),i._d&&bl(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function po(n,e){if(nn===null)return n;const t=Qs(nn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=it]=e[r];s&&(We(s)&&(s={mounted:s,updated:s}),s.deep&&zn(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function ui(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Vn(),An(l,t,8,[n.el,o,n,e]),kn())}}function id(n,e){if(Nt){let t=Nt.provides;const i=Nt.parent&&Nt.parent.provides;i===t&&(t=Nt.provides=Object.create(i)),t[n]=e}}function As(n,e,t=!1){const i=ip();if(i||tr){let r=tr?tr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&We(e)?e.call(i&&i.proxy):e}}const rd=Symbol.for("v-scx"),sd=()=>As(rd);function mo(n,e,t){return ef(n,e,t)}function ef(n,e,t=it){const{immediate:i,deep:r,flush:s,once:a}=t,o=wt({},t),l=e&&i||!e&&s!=="post";let c;if(Or){if(s==="sync"){const m=sd();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=yn,m.resume=yn,m.pause=yn,m}}const u=Nt;o.call=(m,x,_)=>An(m,u,x,_);let f=!1;s==="post"?o.scheduler=m=>{Ot(m,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(m,x)=>{x?m():Ha(m)}),o.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const d=Jh(n,e,o);return Or&&(c?c.push(d):l&&d()),d}function od(n,e,t){const i=this.proxy,r=pt(n)?n.includes(".")?tf(i,n):()=>i[n]:n.bind(i,i);let s;We(e)?s=e:(s=e.handler,t=e);const a=Vr(this),o=ef(r,s.bind(i),t);return a(),o}function tf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const ad=Symbol("_vte"),ld=n=>n.__isTeleport,cd=Symbol("_leaveCb");function Ga(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Ga(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function nf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function ml(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Ns=new WeakMap;function Rr(n,e,t,i,r=!1){if(He(n)){n.forEach((_,p)=>Rr(_,e&&(He(e)?e[p]:e),t,i,r));return}if(Cr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Rr(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Qs(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===it?o.refs={}:o.refs,f=o.setupState,d=Je(f),m=f===it?Eu:_=>ml(u,_)?!1:Qe(d,_),x=(_,p)=>!(p&&ml(u,p));if(c!=null&&c!==l){if(gl(e),pt(c))u[c]=null,m(c)&&(f[c]=null);else if(At(c)){const _=e;x(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(We(l))Gr(l,o,12,[a,u]);else{const _=pt(l),p=At(l);if(_||p){const h=()=>{if(n.f){const b=_?m(l)?f[l]:u[l]:x()||!n.k?l.value:u[n.k];if(r)He(b)&&Ra(b,s);else if(He(b))b.includes(s)||b.push(s);else if(_)u[l]=[s],m(l)&&(f[l]=u[l]);else{const S=[s];x(l,n.k)&&(l.value=S),n.k&&(u[n.k]=S)}}else _?(u[l]=a,m(l)&&(f[l]=a)):p&&(x(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const b=()=>{h(),Ns.delete(n)};b.id=-1,Ns.set(n,b),Ot(b,t)}else gl(n),h()}}}function gl(n){const e=Ns.get(n);e&&(e.flags|=8,Ns.delete(n))}Ys().requestIdleCallback;Ys().cancelIdleCallback;const Cr=n=>!!n.type.__asyncLoader,rf=n=>n.type.__isKeepAlive;function ud(n,e){sf(n,"a",e)}function fd(n,e){sf(n,"da",e)}function sf(n,e,t=Nt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ks(e,i,t),t){let r=t.parent;for(;r&&r.parent;)rf(r.parent.vnode)&&hd(i,e,t,r),r=r.parent}}function hd(n,e,t,i){const r=Ks(e,n,i,!0);Va(()=>{Ra(i[e],r)},t)}function Ks(n,e,t=Nt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{Vn();const o=Vr(t),l=An(e,t,n,a);return o(),kn(),l});return i?r.unshift(s):r.push(s),s}}const qn=n=>(e,t=Nt)=>{(!Or||n==="sp")&&Ks(n,(...i)=>e(...i),t)},dd=qn("bm"),of=qn("m"),pd=qn("bu"),md=qn("u"),gd=qn("bum"),Va=qn("um"),_d=qn("sp"),vd=qn("rtg"),xd=qn("rtc");function Md(n,e=Nt){Ks("ec",n,e)}const Sd=Symbol.for("v-ndc");function Pi(n,e,t,i){let r;const s=t,a=He(n);if(a||pt(n)){const o=a&&yi(n);let l=!1,c=!1;o&&(l=!rn(n),c=Wn(n),n=$s(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?rr(hn(n[u])):hn(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(nt(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const ca=n=>n?Af(n)?Qs(n):ca(n.parent):null,Lr=wt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ca(n.parent),$root:n=>ca(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>lf(n),$forceUpdate:n=>n.f||(n.f=()=>{Ha(n.update)}),$nextTick:n=>n.n||(n.n=ju.bind(n.proxy)),$watch:n=>od.bind(n)}),go=(n,e)=>n!==it&&!n.__isScriptSetup&&Qe(n,e),Ed={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const d=a[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(go(i,e))return a[e]=1,i[e];if(r!==it&&Qe(r,e))return a[e]=2,r[e];if(Qe(s,e))return a[e]=3,s[e];if(t!==it&&Qe(t,e))return a[e]=4,t[e];ua&&(a[e]=0)}}const c=Lr[e];let u,f;if(c)return e==="$attrs"&&bt(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==it&&Qe(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,Qe(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return go(r,e)?(r[e]=t,!0):i!==it&&Qe(i,e)?(i[e]=t,!0):Qe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==it&&o[0]!=="$"&&Qe(n,o)||go(e,o)||Qe(s,o)||Qe(i,o)||Qe(Lr,o)||Qe(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Qe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function _l(n){return He(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ua=!0;function yd(n){const e=lf(n),t=n.proxy,i=n.ctx;ua=!1,e.beforeCreate&&vl(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:x,activated:_,deactivated:p,beforeDestroy:h,beforeUnmount:b,destroyed:S,unmounted:T,render:P,renderTracked:C,renderTriggered:w,errorCaptured:$,serverPrefetch:E,expose:A,inheritAttrs:Q,components:re,directives:ge,filters:N}=e;if(c&&Td(c,i,null),a)for(const se in a){const ee=a[se];We(ee)&&(i[se]=ee.bind(t))}if(r){const se=r.call(t,t);nt(se)&&(n.data=Oa(se))}if(ua=!0,s)for(const se in s){const ee=s[se],ce=We(ee)?ee.bind(t,t):We(ee.get)?ee.get.bind(t,t):yn,ue=!We(ee)&&We(ee.set)?ee.set.bind(t):yn,ve=gn({get:ce,set:ue});Object.defineProperty(i,se,{enumerable:!0,configurable:!0,get:()=>ve.value,set:me=>ve.value=me})}if(o)for(const se in o)af(o[se],i,t,se);if(l){const se=We(l)?l.call(t):l;Reflect.ownKeys(se).forEach(ee=>{id(ee,se[ee])})}u&&vl(u,n,"c");function q(se,ee){He(ee)?ee.forEach(ce=>se(ce.bind(t))):ee&&se(ee.bind(t))}if(q(dd,f),q(of,d),q(pd,m),q(md,x),q(ud,_),q(fd,p),q(Md,$),q(xd,C),q(vd,w),q(gd,b),q(Va,T),q(_d,E),He(A))if(A.length){const se=n.exposed||(n.exposed={});A.forEach(ee=>{Object.defineProperty(se,ee,{get:()=>t[ee],set:ce=>t[ee]=ce,enumerable:!0})})}else n.exposed||(n.exposed={});P&&n.render===yn&&(n.render=P),Q!=null&&(n.inheritAttrs=Q),re&&(n.components=re),ge&&(n.directives=ge),E&&nf(n)}function Td(n,e,t=yn){He(n)&&(n=fa(n));for(const i in n){const r=n[i];let s;nt(r)?"default"in r?s=As(r.from||i,r.default,!0):s=As(r.from||i):s=As(r),At(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function vl(n,e,t){An(He(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function af(n,e,t,i){let r=i.includes(".")?tf(t,i):()=>t[i];if(pt(n)){const s=e[n];We(s)&&mo(r,s)}else if(We(n))mo(r,n.bind(t));else if(nt(n))if(He(n))n.forEach(s=>af(s,e,t,i));else{const s=We(n.handler)?n.handler.bind(t):e[n.handler];We(s)&&mo(r,s,n)}}function lf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Fs(l,c,a,!0)),Fs(l,e,a)),nt(e)&&s.set(e,l),l}function Fs(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Fs(n,s,t,!0),r&&r.forEach(a=>Fs(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=bd[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const bd={data:xl,props:Ml,emits:Ml,methods:Tr,computed:Tr,beforeCreate:Ct,created:Ct,beforeMount:Ct,mounted:Ct,beforeUpdate:Ct,updated:Ct,beforeDestroy:Ct,beforeUnmount:Ct,destroyed:Ct,unmounted:Ct,activated:Ct,deactivated:Ct,errorCaptured:Ct,serverPrefetch:Ct,components:Tr,directives:Tr,watch:wd,provide:xl,inject:Ad};function xl(n,e){return e?n?function(){return wt(We(n)?n.call(this,this):n,We(e)?e.call(this,this):e)}:e:n}function Ad(n,e){return Tr(fa(n),fa(e))}function fa(n){if(He(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ct(n,e){return n?[...new Set([].concat(n,e))]:e}function Tr(n,e){return n?wt(Object.create(null),n,e):e}function Ml(n,e){return n?He(n)&&He(e)?[...new Set([...n,...e])]:wt(Object.create(null),_l(n),_l(e??{})):e}function wd(n,e){if(!n)return e;if(!e)return n;const t=wt(Object.create(null),n);for(const i in e)t[i]=Ct(n[i],e[i]);return t}function cf(){return{app:null,config:{isNativeTag:Eu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rd=0;function Cd(n,e){return function(i,r=null){We(i)||(i=wt({},i)),r!=null&&!nt(r)&&(r=null);const s=cf(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:Rd++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:cp,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&We(u.install)?(a.add(u),u.install(c,...f)):We(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const m=c._ceVNode||ni(i,r);return m.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(m,u,d),l=!0,c._container=u,u.__vue_app__=c,Qs(m.component)}},onUnmount(u){o.push(u)},unmount(){l&&(An(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=tr;tr=c;try{return u()}finally{tr=f}}};return c}}let tr=null;const Ld=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${un(e)}Modifiers`]||n[`${Ci(e)}Modifiers`];function Pd(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||it;let r=t;const s=e.startsWith("update:"),a=s&&Ld(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>pt(u)?u.trim():u)),a.number&&(r=t.map(La)));let o,l=i[o=lo(e)]||i[o=lo(un(e))];!l&&s&&(l=i[o=lo(Ci(e))]),l&&An(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,An(c,n,6,r)}}const Dd=new WeakMap;function uf(n,e,t=!1){const i=t?Dd:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!We(n)){const l=c=>{const u=uf(c,e,!0);u&&(o=!0,wt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(nt(n)&&i.set(n,null),null):(He(s)?s.forEach(l=>a[l]=null):wt(a,s),nt(n)&&i.set(n,a),a)}function Zs(n,e){return!n||!Xs(e)?!1:(e=e.slice(2).replace(/Once$/,""),Qe(n,e[0].toLowerCase()+e.slice(1))||Qe(n,Ci(e))||Qe(n,e))}function Sl(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:d,setupState:m,ctx:x,inheritAttrs:_}=n,p=Is(n);let h,b;try{if(t.shapeFlag&4){const T=r||i,P=T;h=xn(c.call(P,T,u,f,m,d,x)),b=o}else{const T=e;h=xn(T.length>1?T(f,{attrs:o,slots:a,emit:l}):T(f,null)),b=e.props?o:Ud(o)}}catch(T){Pr.length=0,js(T,n,1),h=ni(sr)}let S=h;if(b&&_!==!1){const T=Object.keys(b),{shapeFlag:P}=S;T.length&&P&7&&(s&&T.some(wa)&&(b=Id(b,s)),S=or(S,b,!1,!0))}return t.dirs&&(S=or(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&Ga(S,t.transition),h=S,Is(p),h}const Ud=n=>{let e;for(const t in n)(t==="class"||t==="style"||Xs(t))&&((e||(e={}))[t]=n[t]);return e},Id=(n,e)=>{const t={};for(const i in n)(!wa(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Nd(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?El(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(ff(a,i,d)&&!Zs(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?El(i,a,c):!0:!!a;return!1}function El(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(ff(e,n,s)&&!Zs(t,s))return!0}return!1}function ff(n,e,t){const i=n[t],r=e[t];return t==="style"&&nt(i)&&nt(r)?!Pa(i,r):i!==r}function Fd({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const hf={},df=()=>Object.create(hf),pf=n=>Object.getPrototypeOf(n)===hf;function Od(n,e,t,i=!1){const r={},s=df();n.propsDefaults=Object.create(null),mf(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Wh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Bd(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Je(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Zs(n.emitsOptions,d))continue;const m=e[d];if(l)if(Qe(s,d))m!==s[d]&&(s[d]=m,c=!0);else{const x=un(d);r[x]=ha(l,o,x,m,n,!1)}else m!==s[d]&&(s[d]=m,c=!0)}}}else{mf(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!Qe(e,f)&&((u=Ci(f))===f||!Qe(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=ha(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Qe(e,f))&&(delete s[f],c=!0)}c&&Bn(n.attrs,"set","")}function mf(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(br(l))continue;const c=e[l];let u;r&&Qe(r,u=un(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:Zs(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=Je(t),c=o||it;for(let u=0;u<s.length;u++){const f=s[u];t[f]=ha(r,l,f,c[f],n,!Qe(c,f))}}return a}function ha(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=Qe(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&We(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Vr(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Ci(t))&&(i=!0))}return i}const zd=new WeakMap;function gf(n,e,t=!1){const i=t?zd:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!We(n)){const u=f=>{l=!0;const[d,m]=gf(f,e,!0);wt(a,d),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return nt(n)&&i.set(n,Ji),Ji;if(He(s))for(let u=0;u<s.length;u++){const f=un(s[u]);yl(f)&&(a[f]=it)}else if(s)for(const u in s){const f=un(u);if(yl(f)){const d=s[u],m=a[f]=He(d)||We(d)?{type:d}:wt({},d),x=m.type;let _=!1,p=!0;if(He(x))for(let h=0;h<x.length;++h){const b=x[h],S=We(b)&&b.name;if(S==="Boolean"){_=!0;break}else S==="String"&&(p=!1)}else _=We(x)&&x.name==="Boolean";m[0]=_,m[1]=p,(_||Qe(m,"default"))&&o.push(f)}}const c=[a,o];return nt(n)&&i.set(n,c),c}function yl(n){return n[0]!=="$"&&!br(n)}const ka=n=>n==="_"||n==="_ctx"||n==="$stable",Wa=n=>He(n)?n.map(xn):[xn(n)],Hd=(n,e,t)=>{if(e._n)return e;const i=nd((...r)=>Wa(e(...r)),t);return i._c=!1,i},_f=(n,e,t)=>{const i=n._ctx;for(const r in n){if(ka(r))continue;const s=n[r];if(We(s))e[r]=Hd(r,s,i);else if(s!=null){const a=Wa(s);e[r]=()=>a}}},vf=(n,e)=>{const t=Wa(e);n.slots.default=()=>t},xf=(n,e,t)=>{for(const i in e)(t||!ka(i))&&(n[i]=e[i])},Gd=(n,e,t)=>{const i=n.slots=df();if(n.vnode.shapeFlag&32){const r=e._;r?(xf(i,e,t),t&&Ru(i,"_",r,!0)):_f(e,i)}else e&&vf(n,e)},Vd=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=it;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:xf(r,e,t):(s=!e.$stable,_f(e,r)),a=e}else e&&(vf(n,e),a={default:1});if(s)for(const o in r)!ka(o)&&a[o]==null&&delete r[o]},Ot=Yd;function kd(n){return Wd(n)}function Wd(n,e){const t=Ys();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=yn,insertStaticContent:x}=n,_=(v,U,F,z=null,G=null,oe=null,le=void 0,M=null,g=!!U.dynamicChildren)=>{if(v===U)return;v&&!_r(v,U)&&(z=Le(v),me(v,G,oe,!0),v=null),U.patchFlag===-2&&(g=!1,U.dynamicChildren=null);const{type:R,ref:X,shapeFlag:H}=U;switch(R){case Js:p(v,U,F,z);break;case sr:h(v,U,F,z);break;case ws:v==null&&b(U,F,z,le);break;case It:re(v,U,F,z,G,oe,le,M,g);break;default:H&1?P(v,U,F,z,G,oe,le,M,g):H&6?ge(v,U,F,z,G,oe,le,M,g):(H&64||H&128)&&R.process(v,U,F,z,G,oe,le,M,g,De)}X!=null&&G?Rr(X,v&&v.ref,oe,U||v,!U):X==null&&v&&v.ref!=null&&Rr(v.ref,null,oe,v,!0)},p=(v,U,F,z)=>{if(v==null)i(U.el=o(U.children),F,z);else{const G=U.el=v.el;U.children!==v.children&&c(G,U.children)}},h=(v,U,F,z)=>{v==null?i(U.el=l(U.children||""),F,z):U.el=v.el},b=(v,U,F,z)=>{[v.el,v.anchor]=x(v.children,U,F,z,v.el,v.anchor)},S=({el:v,anchor:U},F,z)=>{let G;for(;v&&v!==U;)G=d(v),i(v,F,z),v=G;i(U,F,z)},T=({el:v,anchor:U})=>{let F;for(;v&&v!==U;)F=d(v),r(v),v=F;r(U)},P=(v,U,F,z,G,oe,le,M,g)=>{if(U.type==="svg"?le="svg":U.type==="math"&&(le="mathml"),v==null)C(U,F,z,G,oe,le,M,g);else{const R=v.el&&v.el._isVueCE?v.el:null;try{R&&R._beginPatch(),E(v,U,G,oe,le,M,g)}finally{R&&R._endPatch()}}},C=(v,U,F,z,G,oe,le,M)=>{let g,R;const{props:X,shapeFlag:H,transition:Y,dirs:he}=v;if(g=v.el=a(v.type,oe,X&&X.is,X),H&8?u(g,v.children):H&16&&$(v.children,g,null,z,G,_o(v,oe),le,M),he&&ui(v,null,z,"created"),w(g,v,v.scopeId,le,z),X){for(const xe in X)xe!=="value"&&!br(xe)&&s(g,xe,null,X[xe],oe,z);"value"in X&&s(g,"value",null,X.value,oe),(R=X.onVnodeBeforeMount)&&mn(R,z,v)}he&&ui(v,null,z,"beforeMount");const fe=Xd(G,Y);fe&&Y.beforeEnter(g),i(g,U,F),((R=X&&X.onVnodeMounted)||fe||he)&&Ot(()=>{R&&mn(R,z,v),fe&&Y.enter(g),he&&ui(v,null,z,"mounted")},G)},w=(v,U,F,z,G)=>{if(F&&m(v,F),z)for(let oe=0;oe<z.length;oe++)m(v,z[oe]);if(G){let oe=G.subTree;if(U===oe||yf(oe.type)&&(oe.ssContent===U||oe.ssFallback===U)){const le=G.vnode;w(v,le,le.scopeId,le.slotScopeIds,G.parent)}}},$=(v,U,F,z,G,oe,le,M,g=0)=>{for(let R=g;R<v.length;R++){const X=v[R]=M?On(v[R]):xn(v[R]);_(null,X,U,F,z,G,oe,le,M)}},E=(v,U,F,z,G,oe,le)=>{const M=U.el=v.el;let{patchFlag:g,dynamicChildren:R,dirs:X}=U;g|=v.patchFlag&16;const H=v.props||it,Y=U.props||it;let he;if(F&&fi(F,!1),(he=Y.onVnodeBeforeUpdate)&&mn(he,F,U,v),X&&ui(U,v,F,"beforeUpdate"),F&&fi(F,!0),(H.innerHTML&&Y.innerHTML==null||H.textContent&&Y.textContent==null)&&u(M,""),R?A(v.dynamicChildren,R,M,F,z,_o(U,G),oe):le||ee(v,U,M,null,F,z,_o(U,G),oe,!1),g>0){if(g&16)Q(M,H,Y,F,G);else if(g&2&&H.class!==Y.class&&s(M,"class",null,Y.class,G),g&4&&s(M,"style",H.style,Y.style,G),g&8){const fe=U.dynamicProps;for(let xe=0;xe<fe.length;xe++){const Z=fe[xe],B=H[Z],I=Y[Z];(I!==B||Z==="value")&&s(M,Z,B,I,G,F)}}g&1&&v.children!==U.children&&u(M,U.children)}else!le&&R==null&&Q(M,H,Y,F,G);((he=Y.onVnodeUpdated)||X)&&Ot(()=>{he&&mn(he,F,U,v),X&&ui(U,v,F,"updated")},z)},A=(v,U,F,z,G,oe,le)=>{for(let M=0;M<U.length;M++){const g=v[M],R=U[M],X=g.el&&(g.type===It||!_r(g,R)||g.shapeFlag&198)?f(g.el):F;_(g,R,X,null,z,G,oe,le,!0)}},Q=(v,U,F,z,G)=>{if(U!==F){if(U!==it)for(const oe in U)!br(oe)&&!(oe in F)&&s(v,oe,U[oe],null,G,z);for(const oe in F){if(br(oe))continue;const le=F[oe],M=U[oe];le!==M&&oe!=="value"&&s(v,oe,M,le,G,z)}"value"in F&&s(v,"value",U.value,F.value,G)}},re=(v,U,F,z,G,oe,le,M,g)=>{const R=U.el=v?v.el:o(""),X=U.anchor=v?v.anchor:o("");let{patchFlag:H,dynamicChildren:Y,slotScopeIds:he}=U;he&&(M=M?M.concat(he):he),v==null?(i(R,F,z),i(X,F,z),$(U.children||[],F,X,G,oe,le,M,g)):H>0&&H&64&&Y&&v.dynamicChildren&&v.dynamicChildren.length===Y.length?(A(v.dynamicChildren,Y,F,G,oe,le,M),(U.key!=null||G&&U===G.subTree)&&Mf(v,U,!0)):ee(v,U,F,X,G,oe,le,M,g)},ge=(v,U,F,z,G,oe,le,M,g)=>{U.slotScopeIds=M,v==null?U.shapeFlag&512?G.ctx.activate(U,F,z,le,g):N(U,F,z,G,oe,le,g):W(v,U,g)},N=(v,U,F,z,G,oe,le)=>{const M=v.component=np(v,z,G);if(rf(v)&&(M.ctx.renderer=De),rp(M,!1,le),M.asyncDep){if(G&&G.registerDep(M,q,le),!v.el){const g=M.subTree=ni(sr);h(null,g,U,F),v.placeholder=g.el}}else q(M,v,U,F,G,oe,le)},W=(v,U,F)=>{const z=U.component=v.component;if(Nd(v,U,F))if(z.asyncDep&&!z.asyncResolved){se(z,U,F);return}else z.next=U,z.update();else U.el=v.el,z.vnode=U},q=(v,U,F,z,G,oe,le)=>{const M=()=>{if(v.isMounted){let{next:H,bu:Y,u:he,parent:fe,vnode:xe}=v;{const L=Sf(v);if(L){H&&(H.el=xe.el,se(v,H,le)),L.asyncDep.then(()=>{Ot(()=>{v.isUnmounted||R()},G)});return}}let Z=H,B;fi(v,!1),H?(H.el=xe.el,se(v,H,le)):H=xe,Y&&bs(Y),(B=H.props&&H.props.onVnodeBeforeUpdate)&&mn(B,fe,H,xe),fi(v,!0);const I=Sl(v),Se=v.subTree;v.subTree=I,_(Se,I,f(Se.el),Le(Se),v,G,oe),H.el=I.el,Z===null&&Fd(v,I.el),he&&Ot(he,G),(B=H.props&&H.props.onVnodeUpdated)&&Ot(()=>mn(B,fe,H,xe),G)}else{let H;const{el:Y,props:he}=U,{bm:fe,m:xe,parent:Z,root:B,type:I}=v,Se=Cr(U);fi(v,!1),fe&&bs(fe),!Se&&(H=he&&he.onVnodeBeforeMount)&&mn(H,Z,U),fi(v,!0);{B.ce&&B.ce._hasShadowRoot()&&B.ce._injectChildStyle(I,v.parent?v.parent.type:void 0);const L=v.subTree=Sl(v);_(null,L,F,z,v,G,oe),U.el=L.el}if(xe&&Ot(xe,G),!Se&&(H=he&&he.onVnodeMounted)){const L=U;Ot(()=>mn(H,Z,L),G)}(U.shapeFlag&256||Z&&Cr(Z.vnode)&&Z.vnode.shapeFlag&256)&&v.a&&Ot(v.a,G),v.isMounted=!0,U=F=z=null}};v.scope.on();const g=v.effect=new Du(M);v.scope.off();const R=v.update=g.run.bind(g),X=v.job=g.runIfDirty.bind(g);X.i=v,X.id=v.uid,g.scheduler=()=>Ha(X),fi(v,!0),R()},se=(v,U,F)=>{U.component=v;const z=v.vnode.props;v.vnode=U,v.next=null,Bd(v,U.props,z,F),Vd(v,U.children,F),Vn(),pl(v),kn()},ee=(v,U,F,z,G,oe,le,M,g=!1)=>{const R=v&&v.children,X=v?v.shapeFlag:0,H=U.children,{patchFlag:Y,shapeFlag:he}=U;if(Y>0){if(Y&128){ue(R,H,F,z,G,oe,le,M,g);return}else if(Y&256){ce(R,H,F,z,G,oe,le,M,g);return}}he&8?(X&16&&Pe(R,G,oe),H!==R&&u(F,H)):X&16?he&16?ue(R,H,F,z,G,oe,le,M,g):Pe(R,G,oe,!0):(X&8&&u(F,""),he&16&&$(H,F,z,G,oe,le,M,g))},ce=(v,U,F,z,G,oe,le,M,g)=>{v=v||Ji,U=U||Ji;const R=v.length,X=U.length,H=Math.min(R,X);let Y;for(Y=0;Y<H;Y++){const he=U[Y]=g?On(U[Y]):xn(U[Y]);_(v[Y],he,F,null,G,oe,le,M,g)}R>X?Pe(v,G,oe,!0,!1,H):$(U,F,z,G,oe,le,M,g,H)},ue=(v,U,F,z,G,oe,le,M,g)=>{let R=0;const X=U.length;let H=v.length-1,Y=X-1;for(;R<=H&&R<=Y;){const he=v[R],fe=U[R]=g?On(U[R]):xn(U[R]);if(_r(he,fe))_(he,fe,F,null,G,oe,le,M,g);else break;R++}for(;R<=H&&R<=Y;){const he=v[H],fe=U[Y]=g?On(U[Y]):xn(U[Y]);if(_r(he,fe))_(he,fe,F,null,G,oe,le,M,g);else break;H--,Y--}if(R>H){if(R<=Y){const he=Y+1,fe=he<X?U[he].el:z;for(;R<=Y;)_(null,U[R]=g?On(U[R]):xn(U[R]),F,fe,G,oe,le,M,g),R++}}else if(R>Y)for(;R<=H;)me(v[R],G,oe,!0),R++;else{const he=R,fe=R,xe=new Map;for(R=fe;R<=Y;R++){const te=U[R]=g?On(U[R]):xn(U[R]);te.key!=null&&xe.set(te.key,R)}let Z,B=0;const I=Y-fe+1;let Se=!1,L=0;const k=new Array(I);for(R=0;R<I;R++)k[R]=0;for(R=he;R<=H;R++){const te=v[R];if(B>=I){me(te,G,oe,!0);continue}let _e;if(te.key!=null)_e=xe.get(te.key);else for(Z=fe;Z<=Y;Z++)if(k[Z-fe]===0&&_r(te,U[Z])){_e=Z;break}_e===void 0?me(te,G,oe,!0):(k[_e-fe]=R+1,_e>=L?L=_e:Se=!0,_(te,U[_e],F,null,G,oe,le,M,g),B++)}const j=Se?qd(k):Ji;for(Z=j.length-1,R=I-1;R>=0;R--){const te=fe+R,_e=U[te],Ee=U[te+1],Ae=te+1<X?Ee.el||Ef(Ee):z;k[R]===0?_(null,_e,F,Ae,G,oe,le,M,g):Se&&(Z<0||R!==j[Z]?ve(_e,F,Ae,2):Z--)}}},ve=(v,U,F,z,G=null)=>{const{el:oe,type:le,transition:M,children:g,shapeFlag:R}=v;if(R&6){ve(v.component.subTree,U,F,z);return}if(R&128){v.suspense.move(U,F,z);return}if(R&64){le.move(v,U,F,De);return}if(le===It){i(oe,U,F);for(let H=0;H<g.length;H++)ve(g[H],U,F,z);i(v.anchor,U,F);return}if(le===ws){S(v,U,F);return}if(z!==2&&R&1&&M)if(z===0)M.beforeEnter(oe),i(oe,U,F),Ot(()=>M.enter(oe),G);else{const{leave:H,delayLeave:Y,afterLeave:he}=M,fe=()=>{v.ctx.isUnmounted?r(oe):i(oe,U,F)},xe=()=>{oe._isLeaving&&oe[cd](!0),H(oe,()=>{fe(),he&&he()})};Y?Y(oe,fe,xe):xe()}else i(oe,U,F)},me=(v,U,F,z=!1,G=!1)=>{const{type:oe,props:le,ref:M,children:g,dynamicChildren:R,shapeFlag:X,patchFlag:H,dirs:Y,cacheIndex:he}=v;if(H===-2&&(G=!1),M!=null&&(Vn(),Rr(M,null,F,v,!0),kn()),he!=null&&(U.renderCache[he]=void 0),X&256){U.ctx.deactivate(v);return}const fe=X&1&&Y,xe=!Cr(v);let Z;if(xe&&(Z=le&&le.onVnodeBeforeUnmount)&&mn(Z,U,v),X&6)be(v.component,F,z);else{if(X&128){v.suspense.unmount(F,z);return}fe&&ui(v,null,U,"beforeUnmount"),X&64?v.type.remove(v,U,F,De,z):R&&!R.hasOnce&&(oe!==It||H>0&&H&64)?Pe(R,U,F,!1,!0):(oe===It&&H&384||!G&&X&16)&&Pe(g,U,F),z&&ie(v)}(xe&&(Z=le&&le.onVnodeUnmounted)||fe)&&Ot(()=>{Z&&mn(Z,U,v),fe&&ui(v,null,U,"unmounted")},F)},ie=v=>{const{type:U,el:F,anchor:z,transition:G}=v;if(U===It){de(F,z);return}if(U===ws){T(v);return}const oe=()=>{r(F),G&&!G.persisted&&G.afterLeave&&G.afterLeave()};if(v.shapeFlag&1&&G&&!G.persisted){const{leave:le,delayLeave:M}=G,g=()=>le(F,oe);M?M(v.el,oe,g):g()}else oe()},de=(v,U)=>{let F;for(;v!==U;)F=d(v),r(v),v=F;r(U)},be=(v,U,F)=>{const{bum:z,scope:G,job:oe,subTree:le,um:M,m:g,a:R}=v;Tl(g),Tl(R),z&&bs(z),G.stop(),oe&&(oe.flags|=8,me(le,v,U,F)),M&&Ot(M,U),Ot(()=>{v.isUnmounted=!0},U)},Pe=(v,U,F,z=!1,G=!1,oe=0)=>{for(let le=oe;le<v.length;le++)me(v[le],U,F,z,G)},Le=v=>{if(v.shapeFlag&6)return Le(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const U=d(v.anchor||v.el),F=U&&U[ad];return F?d(F):U};let Ne=!1;const Fe=(v,U,F)=>{let z;v==null?U._vnode&&(me(U._vnode,null,null,!0),z=U._vnode.component):_(U._vnode||null,v,U,null,null,null,F),U._vnode=v,Ne||(Ne=!0,pl(z),Zu(),Ne=!1)},De={p:_,um:me,m:ve,r:ie,mt:N,mc:$,pc:ee,pbc:A,n:Le,o:n};return{render:Fe,hydrate:void 0,createApp:Cd(Fe)}}function _o({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function fi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Xd(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Mf(n,e,t=!1){const i=n.children,r=e.children;if(He(i)&&He(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=On(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&Mf(a,o)),o.type===Js&&(o.patchFlag===-1&&(o=r[s]=On(o)),o.el=a.el),o.type===sr&&!o.el&&(o.el=a.el)}}function qd(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function Sf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Sf(e)}function Tl(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Ef(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Ef(e.subTree):null}const yf=n=>n.__isSuspense;function Yd(n,e){e&&e.pendingBranch?He(n)?e.effects.push(...n):e.effects.push(n):td(n)}const It=Symbol.for("v-fgt"),Js=Symbol.for("v-txt"),sr=Symbol.for("v-cmt"),ws=Symbol.for("v-stc"),Pr=[];let qt=null;function jt(n=!1){Pr.push(qt=n?null:[])}function $d(){Pr.pop(),qt=Pr[Pr.length-1]||null}let Fr=1;function bl(n,e=!1){Fr+=n,n<0&&qt&&e&&(qt.hasOnce=!0)}function jd(n){return n.dynamicChildren=Fr>0?qt||Ji:null,$d(),Fr>0&&qt&&qt.push(n),n}function Kt(n,e,t,i,r,s){return jd(Ie(n,e,t,i,r,s,!0))}function Tf(n){return n?n.__v_isVNode===!0:!1}function _r(n,e){return n.type===e.type&&n.key===e.key}const bf=({key:n})=>n??null,Rs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?pt(n)||At(n)||We(n)?{i:nn,r:n,k:e,f:!!t}:n:null);function Ie(n,e=null,t=null,i=0,r=null,s=n===It?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&bf(e),ref:e&&Rs(e),scopeId:Qu,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:nn};return o?(Xa(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=pt(t)?8:16),Fr>0&&!a&&qt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&qt.push(l),l}const ni=Kd;function Kd(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Sd)&&(n=sr),Tf(n)){const o=or(n,e,!0);return t&&Xa(o,t),Fr>0&&!s&&qt&&(o.shapeFlag&6?qt[qt.indexOf(n)]=o:qt.push(o)),o.patchFlag=-2,o}if(lp(n)&&(n=n.__vccOpts),e){e=Zd(e);let{class:o,style:l}=e;o&&!pt(o)&&(e.class=Pt(o)),nt(l)&&(za(l)&&!He(l)&&(l=wt({},l)),e.style=Jt(l))}const a=pt(n)?1:yf(n)?128:ld(n)?64:nt(n)?4:We(n)?2:0;return Ie(n,e,t,i,r,a,s,!0)}function Zd(n){return n?za(n)||pf(n)?wt({},n):n:null}function or(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?Qd(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&bf(c),ref:e&&e.ref?t&&s?He(s)?s.concat(Rs(e)):[s,Rs(e)]:Rs(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==It?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&or(n.ssContent),ssFallback:n.ssFallback&&or(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Ga(u,l.clone(u)),u}function _i(n=" ",e=0){return ni(Js,null,n,e)}function Jd(n,e){const t=ni(ws,null,n);return t.staticCount=e,t}function xn(n){return n==null||typeof n=="boolean"?ni(sr):He(n)?ni(It,null,n.slice()):Tf(n)?On(n):ni(Js,null,String(n))}function On(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:or(n)}function Xa(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(He(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Xa(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!pf(e)?e._ctx=nn:r===3&&nn&&(nn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else We(e)?(e={default:e,_ctx:nn},t=32):(e=String(e),i&64?(t=16,e=[_i(e)]):t=8);n.children=e,n.shapeFlag|=t}function Qd(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Pt([e.class,i.class]));else if(r==="style")e.style=Jt([e.style,i.style]);else if(Xs(r)){const s=e[r],a=i[r];a&&s!==a&&!(He(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function mn(n,e,t,i=null){An(n,e,7,[t,i])}const ep=cf();let tp=0;function np(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||ep,s={uid:tp++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Th(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gf(i,r),emitsOptions:uf(i,r),emit:null,emitted:null,propsDefaults:it,inheritAttrs:i.inheritAttrs,ctx:it,data:it,props:it,attrs:it,slots:it,refs:it,setupState:it,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Pd.bind(null,s),n.ce&&n.ce(s),s}let Nt=null;const ip=()=>Nt||nn;let Os,da;{const n=Ys(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Os=e("__VUE_INSTANCE_SETTERS__",t=>Nt=t),da=e("__VUE_SSR_SETTERS__",t=>Or=t)}const Vr=n=>{const e=Nt;return Os(n),n.scope.on(),()=>{n.scope.off(),Os(e)}},Al=()=>{Nt&&Nt.scope.off(),Os(null)};function Af(n){return n.vnode.shapeFlag&4}let Or=!1;function rp(n,e=!1,t=!1){e&&da(e);const{props:i,children:r}=n.vnode,s=Af(n);Od(n,i,s,e),Gd(n,r,t||e);const a=s?sp(n,e):void 0;return e&&da(!1),a}function sp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Ed);const{setup:i}=t;if(i){Vn();const r=n.setupContext=i.length>1?ap(n):null,s=Vr(n),a=Gr(i,n,0,[n.props,r]),o=Tu(a);if(kn(),s(),(o||n.sp)&&!Cr(n)&&nf(n),o){if(a.then(Al,Al),e)return a.then(l=>{wl(n,l)}).catch(l=>{js(l,n,0)});n.asyncDep=a}else wl(n,a)}else wf(n)}function wl(n,e,t){We(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:nt(e)&&(n.setupState=Yu(e)),wf(n)}function wf(n,e,t){const i=n.type;n.render||(n.render=i.render||yn);{const r=Vr(n);Vn();try{yd(n)}finally{kn(),r()}}}const op={get(n,e){return bt(n,"get",""),n[e]}};function ap(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,op),slots:n.slots,emit:n.emit,expose:e}}function Qs(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Yu(Xh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Lr)return Lr[t](n)},has(e,t){return t in e||t in Lr}})):n.proxy}function lp(n){return We(n)&&"__vccOpts"in n}const gn=(n,e)=>Kh(n,e,Or),cp="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pa;const Rl=typeof window<"u"&&window.trustedTypes;if(Rl)try{pa=Rl.createPolicy("vue",{createHTML:n=>n})}catch{}const Rf=pa?n=>pa.createHTML(n):n=>n,up="http://www.w3.org/2000/svg",fp="http://www.w3.org/1998/Math/MathML",Fn=typeof document<"u"?document:null,Cl=Fn&&Fn.createElement("template"),hp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Fn.createElementNS(up,n):e==="mathml"?Fn.createElementNS(fp,n):t?Fn.createElement(n,{is:t}):Fn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Fn.createTextNode(n),createComment:n=>Fn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Fn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Cl.innerHTML=Rf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Cl.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},dp=Symbol("_vtc");function pp(n,e,t){const i=n[dp];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Ll=Symbol("_vod"),mp=Symbol("_vsh"),gp=Symbol(""),_p=/(?:^|;)\s*display\s*:/;function vp(n,e,t){const i=n.style,r=pt(t);let s=!1;if(t&&!r){if(e)if(pt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Cs(i,o,"")}else for(const a in e)t[a]==null&&Cs(i,a,"");for(const a in t)a==="display"&&(s=!0),Cs(i,a,t[a])}else if(r){if(e!==t){const a=i[gp];a&&(t+=";"+a),i.cssText=t,s=_p.test(t)}}else e&&n.removeAttribute("style");Ll in n&&(n[Ll]=s?i.display:"",n[mp]&&(i.display="none"))}const Pl=/\s*!important$/;function Cs(n,e,t){if(He(t))t.forEach(i=>Cs(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=xp(n,e);Pl.test(t)?n.setProperty(Ci(i),t.replace(Pl,""),"important"):n[i]=t}}const Dl=["Webkit","Moz","ms"],vo={};function xp(n,e){const t=vo[e];if(t)return t;let i=un(e);if(i!=="filter"&&i in n)return vo[e]=i;i=wu(i);for(let r=0;r<Dl.length;r++){const s=Dl[r]+i;if(s in n)return vo[e]=s}return e}const Ul="http://www.w3.org/1999/xlink";function Il(n,e,t,i,r,s=Eh(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Ul,e.slice(6,e.length)):n.setAttributeNS(Ul,e,t):t==null||s&&!Cu(t)?n.removeAttribute(e):n.setAttribute(e,s?"":bn(t)?String(t):t)}function Nl(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Rf(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Cu(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function ji(n,e,t,i){n.addEventListener(e,t,i)}function Mp(n,e,t,i){n.removeEventListener(e,t,i)}const Fl=Symbol("_vei");function Sp(n,e,t,i,r=null){const s=n[Fl]||(n[Fl]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Ep(e);if(i){const c=s[e]=bp(i,r);ji(n,o,c,l)}else a&&(Mp(n,o,a,l),s[e]=void 0)}}const Ol=/(?:Once|Passive|Capture)$/;function Ep(n){let e;if(Ol.test(n)){e={};let i;for(;i=n.match(Ol);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ci(n.slice(2)),e]}let xo=0;const yp=Promise.resolve(),Tp=()=>xo||(yp.then(()=>xo=0),xo=Date.now());function bp(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;An(Ap(i,t.value),e,5,[i])};return t.value=n,t.attached=Tp(),t}function Ap(n,e){if(He(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Bl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,wp=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?pp(n,i,a):e==="style"?vp(n,t,i):Xs(e)?wa(e)||Sp(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Rp(n,e,i,a))?(Nl(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Il(n,e,i,a,s,e!=="value")):n._isVueCE&&(Cp(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!pt(i)))?Nl(n,un(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Il(n,e,i,a))};function Rp(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Bl(e)&&We(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Bl(e)&&pt(t)?!1:e in n}function Cp(n,e){const t=n._def.props;if(!t)return!1;const i=un(e);return Array.isArray(t)?t.some(r=>un(r)===i):Object.keys(t).some(r=>un(r)===i)}const zl=n=>{const e=n.props["onUpdate:modelValue"]||!1;return He(e)?t=>bs(e,t):e};function Lp(n){n.target.composing=!0}function Hl(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Mo=Symbol("_assign");function Gl(n,e,t){return e&&(n=n.trim()),t&&(n=La(n)),n}const So={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[Mo]=zl(r);const s=i||r.props&&r.props.type==="number";ji(n,e?"change":"input",a=>{a.target.composing||n[Mo](Gl(n.value,t,s))}),(t||s)&&ji(n,"change",()=>{n.value=Gl(n.value,t,s)}),e||(ji(n,"compositionstart",Lp),ji(n,"compositionend",Hl),ji(n,"change",Hl))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},a){if(n[Mo]=zl(a),n.composing)return;const o=(s||n.type==="number")&&!/^0\d/.test(n.value)?La(n.value):n.value,l=e??"";o!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},Pp=wt({patchProp:wp},hp);let Vl;function Dp(){return Vl||(Vl=kd(Pp))}const Up=(...n)=>{const e=Dp().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Np(i);if(!r)return;const s=e._component;!We(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,Ip(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function Ip(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Np(n){return pt(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qa="160",Fp=0,kl=1,Op=2,Cf=1,Bp=2,Nn=3,ai=0,Ht=1,Hn=2,ii=0,nr=1,Wl=2,Xl=3,ql=4,zp=5,Mi=100,Hp=101,Gp=102,Yl=103,$l=104,Vp=200,kp=201,Wp=202,Xp=203,ma=204,ga=205,qp=206,Yp=207,$p=208,jp=209,Kp=210,Zp=211,Jp=212,Qp=213,em=214,tm=0,nm=1,im=2,Bs=3,rm=4,sm=5,om=6,am=7,Ya=0,lm=1,cm=2,ri=0,um=1,fm=2,hm=3,dm=4,pm=5,mm=6,Lf=300,ar=301,lr=302,_a=303,va=304,eo=306,xa=1e3,ln=1001,Ma=1002,Dt=1003,jl=1004,Eo=1005,Qt=1006,gm=1007,Br=1008,si=1009,_m=1010,vm=1011,$a=1012,Pf=1013,ei=1014,ti=1015,zr=1016,Df=1017,Uf=1018,Ti=1020,xm=1021,cn=1023,Mm=1024,Sm=1025,bi=1026,cr=1027,Em=1028,If=1029,ym=1030,Nf=1031,Ff=1033,yo=33776,To=33777,bo=33778,Ao=33779,Kl=35840,Zl=35841,Jl=35842,Ql=35843,Of=36196,ec=37492,tc=37496,nc=37808,ic=37809,rc=37810,sc=37811,oc=37812,ac=37813,lc=37814,cc=37815,uc=37816,fc=37817,hc=37818,dc=37819,pc=37820,mc=37821,wo=36492,gc=36494,_c=36495,Tm=36283,vc=36284,xc=36285,Mc=36286,Bf=3e3,Ai=3001,bm=3200,Am=3201,zf=0,wm=1,tn="",St="srgb",Xn="srgb-linear",ja="display-p3",to="display-p3-linear",zs="linear",ot="srgb",Hs="rec709",Gs="p3",Di=7680,Sc=519,Rm=512,Cm=513,Lm=514,Hf=515,Pm=516,Dm=517,Um=518,Im=519,Ec=35044,yc="300 es",Sa=1035,Gn=2e3,Vs=2001;class fr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ls=Math.PI/180,Ea=180/Math.PI;function kr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]).toLowerCase()}function zt(n,e,t){return Math.max(e,Math.min(t,n))}function Nm(n,e){return(n%e+e)%e}function Ro(n,e,t){return(1-t)*n+t*e}function Tc(n){return(n&n-1)===0&&n!==0}function ya(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function vr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,i,r,s,a,o,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],x=i[8],_=r[0],p=r[3],h=r[6],b=r[1],S=r[4],T=r[7],P=r[2],C=r[5],w=r[8];return s[0]=a*_+o*b+l*P,s[3]=a*p+o*S+l*C,s[6]=a*h+o*T+l*w,s[1]=c*_+u*b+f*P,s[4]=c*p+u*S+f*C,s[7]=c*h+u*T+f*w,s[2]=d*_+m*b+x*P,s[5]=d*p+m*S+x*C,s[8]=d*h+m*T+x*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,m=c*s-a*l,x=t*f+i*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Co.makeScale(e,t)),this}rotate(e){return this.premultiply(Co.makeRotation(-e)),this}translate(e,t){return this.premultiply(Co.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Co=new je;function Gf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ks(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Fm(){const n=ks("canvas");return n.style.display="block",n}const bc={};function Dr(n){n in bc||(bc[n]=!0,console.warn(n))}const Ac=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wc=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zr={[Xn]:{transfer:zs,primaries:Hs,toReference:n=>n,fromReference:n=>n},[St]:{transfer:ot,primaries:Hs,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[to]:{transfer:zs,primaries:Gs,toReference:n=>n.applyMatrix3(wc),fromReference:n=>n.applyMatrix3(Ac)},[ja]:{transfer:ot,primaries:Gs,toReference:n=>n.convertSRGBToLinear().applyMatrix3(wc),fromReference:n=>n.applyMatrix3(Ac).convertLinearToSRGB()}},Om=new Set([Xn,to]),tt={enabled:!0,_workingColorSpace:Xn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Om.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Zr[e].toReference,r=Zr[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Zr[n].primaries},getTransfer:function(n){return n===tn?zs:Zr[n].transfer}};function ir(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Lo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ui;class Vf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ui===void 0&&(Ui=ks("canvas")),Ui.width=e.width,Ui.height=e.height;const i=Ui.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ks("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ir(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ir(t[i]/255)*255):t[i]=ir(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bm=0;class kf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=kr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Po(r[a].image)):s.push(Po(r[a]))}else s=Po(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Po(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zm=0;class Yt extends fr{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,i=ln,r=ln,s=Qt,a=Br,o=cn,l=si,c=Yt.DEFAULT_ANISOTROPY,u=tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=kr(),this.name="",this.source=new kf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ai?St:tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xa:e.x=e.x-Math.floor(e.x);break;case ln:e.x=e.x<0?0:1;break;case Ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xa:e.y=e.y-Math.floor(e.y);break;case ln:e.y=e.y<0?0:1;break;case Ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===St?Ai:Bf}set encoding(e){Dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ai?St:tn}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Lf;Yt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,i=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],x=l[9],_=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,T=(m+1)/2,P=(h+1)/2,C=(u+d)/4,w=(f+_)/4,$=(x+p)/4;return S>T&&S>P?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=C/i,s=w/i):T>P?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=C/r,s=$/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=w/s,r=$/s),this.set(i,r,s,t),this}let b=Math.sqrt((p-x)*(p-x)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(p-x)/b,this.y=(f-_)/b,this.z=(d-u)/b,this.w=Math.acos((c+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hm extends fr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Dr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ai?St:tn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Yt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new kf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends Hm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Wf extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gm extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],m=s[a+1],x=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=x,e[t+3]=_;return}if(f!==_||l!==d||c!==m||u!==x){let p=1-o;const h=l*d+c*m+u*x+f*_,b=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){const P=Math.sqrt(S),C=Math.atan2(P,h*b);p=Math.sin(p*C)/P,o=Math.sin(o*C)/P}const T=o*b;if(l=l*p+d*T,c=c*p+m*T,u=u*p+x*T,f=f*p+_*T,p===1-o){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+u*f+l*m-c*d,e[t+1]=l*x+u*d+c*f-o*m,e[t+2]=c*x+u*m+o*d-l*f,e[t+3]=u*x-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f-d*m*x;break;case"YXZ":this._x=d*u*f+c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f+d*m*x;break;case"ZXY":this._x=d*u*f-c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f-d*m*x;break;case"ZYX":this._x=d*u*f-c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f+d*m*x;break;case"YZX":this._x=d*u*f+c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f-d*m*x;break;case"XZY":this._x=d*u*f-c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f+d*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Do.copy(this).projectOnVector(e),this.sub(Do)}reflect(e){return this.sub(Do.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Do=new O,Rc=new hr;class Wr{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,sn):sn.fromBufferAttribute(s,a),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jr.copy(i.boundingBox)),Jr.applyMatrix4(e.matrixWorld),this.union(Jr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),Qr.subVectors(this.max,xr),Ii.subVectors(e.a,xr),Ni.subVectors(e.b,xr),Fi.subVectors(e.c,xr),$n.subVectors(Ni,Ii),jn.subVectors(Fi,Ni),hi.subVectors(Ii,Fi);let t=[0,-$n.z,$n.y,0,-jn.z,jn.y,0,-hi.z,hi.y,$n.z,0,-$n.x,jn.z,0,-jn.x,hi.z,0,-hi.x,-$n.y,$n.x,0,-jn.y,jn.x,0,-hi.y,hi.x,0];return!Uo(t,Ii,Ni,Fi,Qr)||(t=[1,0,0,0,1,0,0,0,1],!Uo(t,Ii,Ni,Fi,Qr))?!1:(es.crossVectors($n,jn),t=[es.x,es.y,es.z],Uo(t,Ii,Ni,Fi,Qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Cn=[new O,new O,new O,new O,new O,new O,new O,new O],sn=new O,Jr=new Wr,Ii=new O,Ni=new O,Fi=new O,$n=new O,jn=new O,hi=new O,xr=new O,Qr=new O,es=new O,di=new O;function Uo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){di.fromArray(n,s);const o=r.x*Math.abs(di.x)+r.y*Math.abs(di.y)+r.z*Math.abs(di.z),l=e.dot(di),c=t.dot(di),u=i.dot(di);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Vm=new Wr,Mr=new O,Io=new O;class no{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Vm.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mr.subVectors(e,this.center);const t=Mr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Mr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Io.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mr.copy(e.center).add(Io)),this.expandByPoint(Mr.copy(e.center).sub(Io))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new O,No=new O,ts=new O,Kn=new O,Fo=new O,ns=new O,Oo=new O;class Ka{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){No.copy(e).add(t).multiplyScalar(.5),ts.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(No);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ts),o=Kn.dot(this.direction),l=-Kn.dot(ts),c=Kn.lengthSq(),u=Math.abs(1-a*a);let f,d,m,x;if(u>0)if(f=a*l-o,d=a*o-l,x=s*u,f>=0)if(d>=-x)if(d<=x){const _=1/u;f*=_,d*=_,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(No).addScaledVector(ts,d),m}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);const i=Ln.dot(this.direction),r=Ln.dot(Ln)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,i,r,s){Fo.subVectors(t,e),ns.subVectors(i,e),Oo.crossVectors(Fo,ns);let a=this.direction.dot(Oo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Kn.subVectors(this.origin,e);const l=o*this.direction.dot(ns.crossVectors(Kn,ns));if(l<0)return null;const c=o*this.direction.dot(Fo.cross(Kn));if(c<0||l+c>a)return null;const u=-o*Kn.dot(Oo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,i,r,s,a,o,l,c,u,f,d,m,x,_,p){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,d,m,x,_,p)}set(e,t,i,r,s,a,o,l,c,u,f,d,m,x,_,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=x,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Oi.setFromMatrixColumn(e,0).length(),s=1/Oi.setFromMatrixColumn(e,1).length(),a=1/Oi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*f,x=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+x*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=x+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,x=c*u,_=c*f;t[0]=d+_*o,t[4]=x*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-x,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,x=c*u,_=c*f;t[0]=d-_*o,t[4]=-a*f,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*f,x=o*u,_=o*f;t[0]=l*u,t[4]=x*c-m,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,x=o*l,_=o*c;t[0]=l*u,t[4]=_-d*f,t[8]=x*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+x,t[10]=d-_*f}else if(e.order==="XZY"){const d=a*l,m=a*c,x=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+_,t[5]=a*u,t[9]=m*f-x,t[2]=x*f-m,t[6]=o*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(km,e,Wm)}lookAt(e,t,i){const r=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Zn.crossVectors(i,kt),Zn.lengthSq()===0&&(Math.abs(i.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Zn.crossVectors(i,kt)),Zn.normalize(),is.crossVectors(kt,Zn),r[0]=Zn.x,r[4]=is.x,r[8]=kt.x,r[1]=Zn.y,r[5]=is.y,r[9]=kt.y,r[2]=Zn.z,r[6]=is.z,r[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],x=i[2],_=i[6],p=i[10],h=i[14],b=i[3],S=i[7],T=i[11],P=i[15],C=r[0],w=r[4],$=r[8],E=r[12],A=r[1],Q=r[5],re=r[9],ge=r[13],N=r[2],W=r[6],q=r[10],se=r[14],ee=r[3],ce=r[7],ue=r[11],ve=r[15];return s[0]=a*C+o*A+l*N+c*ee,s[4]=a*w+o*Q+l*W+c*ce,s[8]=a*$+o*re+l*q+c*ue,s[12]=a*E+o*ge+l*se+c*ve,s[1]=u*C+f*A+d*N+m*ee,s[5]=u*w+f*Q+d*W+m*ce,s[9]=u*$+f*re+d*q+m*ue,s[13]=u*E+f*ge+d*se+m*ve,s[2]=x*C+_*A+p*N+h*ee,s[6]=x*w+_*Q+p*W+h*ce,s[10]=x*$+_*re+p*q+h*ue,s[14]=x*E+_*ge+p*se+h*ve,s[3]=b*C+S*A+T*N+P*ee,s[7]=b*w+S*Q+T*W+P*ce,s[11]=b*$+S*re+T*q+P*ue,s[15]=b*E+S*ge+T*se+P*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],x=e[3],_=e[7],p=e[11],h=e[15];return x*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*m-i*l*m)+_*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+p*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+h*(-r*o*u-t*l*f+t*o*d+r*a*f-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],x=e[12],_=e[13],p=e[14],h=e[15],b=f*p*c-_*d*c+_*l*m-o*p*m-f*l*h+o*d*h,S=x*d*c-u*p*c-x*l*m+a*p*m+u*l*h-a*d*h,T=u*_*c-x*f*c+x*o*m-a*_*m-u*o*h+a*f*h,P=x*f*l-u*_*l-x*o*d+a*_*d+u*o*p-a*f*p,C=t*b+i*S+r*T+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=b*w,e[1]=(_*d*s-f*p*s-_*r*m+i*p*m+f*r*h-i*d*h)*w,e[2]=(o*p*s-_*l*s+_*r*c-i*p*c-o*r*h+i*l*h)*w,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*m-i*l*m)*w,e[4]=S*w,e[5]=(u*p*s-x*d*s+x*r*m-t*p*m-u*r*h+t*d*h)*w,e[6]=(x*l*s-a*p*s-x*r*c+t*p*c+a*r*h-t*l*h)*w,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*m+t*l*m)*w,e[8]=T*w,e[9]=(x*f*s-u*_*s-x*i*m+t*_*m+u*i*h-t*f*h)*w,e[10]=(a*_*s-x*o*s+x*i*c-t*_*c-a*i*h+t*o*h)*w,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*w,e[12]=P*w,e[13]=(u*_*r-x*f*r+x*i*d-t*_*d-u*i*p+t*f*p)*w,e[14]=(x*o*r-a*_*r-x*i*l+t*_*l+a*i*p-t*o*p)*w,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*d+t*o*d)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,m=s*u,x=s*f,_=a*u,p=a*f,h=o*f,b=l*c,S=l*u,T=l*f,P=i.x,C=i.y,w=i.z;return r[0]=(1-(_+h))*P,r[1]=(m+T)*P,r[2]=(x-S)*P,r[3]=0,r[4]=(m-T)*C,r[5]=(1-(d+h))*C,r[6]=(p+b)*C,r[7]=0,r[8]=(x+S)*w,r[9]=(p-b)*w,r[10]=(1-(d+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Oi.set(r[0],r[1],r[2]).length();const a=Oi.set(r[4],r[5],r[6]).length(),o=Oi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],on.copy(this);const c=1/s,u=1/a,f=1/o;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=f,on.elements[9]*=f,on.elements[10]*=f,t.setFromRotationMatrix(on),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Gn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let m,x;if(o===Gn)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Vs)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Gn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(a-s),d=(t+e)*c,m=(i+r)*u;let x,_;if(o===Gn)x=(a+s)*f,_=-2*f;else if(o===Vs)x=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Oi=new O,on=new ht,km=new O(0,0,0),Wm=new O(1,1,1),Zn=new O,is=new O,kt=new O,Cc=new ht,Lc=new hr;class Xr{constructor(e=0,t=0,i=0,r=Xr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Cc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lc.setFromEuler(this),this.setFromQuaternion(Lc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xr.DEFAULT_ORDER="XYZ";class Za{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xm=0;const Pc=new O,Bi=new hr,Pn=new ht,rs=new O,Sr=new O,qm=new O,Ym=new hr,Dc=new O(1,0,0),Uc=new O(0,1,0),Ic=new O(0,0,1),$m={type:"added"},jm={type:"removed"};class Mt extends fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new O,t=new Xr,i=new hr,r=new O(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new je}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.premultiply(Bi),this}rotateX(e){return this.rotateOnAxis(Dc,e)}rotateY(e){return this.rotateOnAxis(Uc,e)}rotateZ(e){return this.rotateOnAxis(Ic,e)}translateOnAxis(e,t){return Pc.copy(e).applyQuaternion(this.quaternion),this.position.add(Pc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dc,e)}translateY(e){return this.translateOnAxis(Uc,e)}translateZ(e){return this.translateOnAxis(Ic,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?rs.copy(e):rs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(Sr,rs,this.up):Pn.lookAt(rs,Sr,this.up),this.quaternion.setFromRotationMatrix(Pn),r&&(Pn.extractRotation(r.matrixWorld),Bi.setFromRotationMatrix(Pn),this.quaternion.premultiply(Bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent($m)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jm)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,e,qm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,Ym,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Mt.DEFAULT_UP=new O(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new O,Dn=new O,Bo=new O,Un=new O,zi=new O,Hi=new O,Nc=new O,zo=new O,Ho=new O,Go=new O;let ss=!1;class en{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),an.subVectors(e,t),r.cross(an);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){an.subVectors(r,t),Dn.subVectors(i,t),Bo.subVectors(e,t);const a=an.dot(an),o=an.dot(Dn),l=an.dot(Bo),c=Dn.dot(Dn),u=Dn.dot(Bo),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(c*l-o*u)*d,x=(a*u-o*l)*d;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getUV(e,t,i,r,s,a,o,l){return ss===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ss=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Un.x),l.addScaledVector(a,Un.y),l.addScaledVector(o,Un.z),l)}static isFrontFacing(e,t,i,r){return an.subVectors(i,t),Dn.subVectors(e,t),an.cross(Dn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),an.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return ss===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ss=!0),en.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return en.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;zi.subVectors(r,i),Hi.subVectors(s,i),zo.subVectors(e,i);const l=zi.dot(zo),c=Hi.dot(zo);if(l<=0&&c<=0)return t.copy(i);Ho.subVectors(e,r);const u=zi.dot(Ho),f=Hi.dot(Ho);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(zi,a);Go.subVectors(e,s);const m=zi.dot(Go),x=Hi.dot(Go);if(x>=0&&m<=x)return t.copy(s);const _=m*c-l*x;if(_<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(Hi,o);const p=u*x-m*f;if(p<=0&&f-u>=0&&m-x>=0)return Nc.subVectors(s,r),o=(f-u)/(f-u+(m-x)),t.copy(r).addScaledVector(Nc,o);const h=1/(p+_+d);return a=_*h,o=d*h,t.copy(i).addScaledVector(zi,a).addScaledVector(Hi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},os={h:0,s:0,l:0};function Vo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=tt.workingColorSpace){if(e=Nm(e,1),t=zt(t,0,1),i=zt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Vo(a,s,e+1/3),this.g=Vo(a,s,e),this.b=Vo(a,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,t=St){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){const i=Xf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=Lo(e.r),this.g=Lo(e.g),this.b=Lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return tt.fromWorkingColorSpace(Tt.copy(this),e),Math.round(zt(Tt.r*255,0,255))*65536+Math.round(zt(Tt.g*255,0,255))*256+Math.round(zt(Tt.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Tt.copy(this),t);const i=Tt.r,r=Tt.g,s=Tt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=St){tt.fromWorkingColorSpace(Tt.copy(this),e);const t=Tt.r,i=Tt.g,r=Tt.b;return e!==St?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(os);const i=Ro(Jn.h,os.h,t),r=Ro(Jn.s,os.s,t),s=Ro(Jn.l,os.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new Ke;Ke.NAMES=Xf;let Km=0;class dr extends fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=kr(),this.name="",this.type="Material",this.blending=nr,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ma,this.blendDst=ga,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(i.blending=this.blending),this.side!==ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ma&&(i.blendSrc=this.blendSrc),this.blendDst!==ga&&(i.blendDst=this.blendDst),this.blendEquation!==Mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ja extends dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new O,as=new Ze;class Tn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ec,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)as.fromBufferAttribute(this,t),as.applyMatrix3(e),this.setXY(t,as.x,as.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=vr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ec&&(e.usage=this.usage),e}}class qf extends Tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Yf extends Tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Gt extends Tn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Zm=0;const Zt=new ht,ko=new Mt,Gi=new O,Wt=new Wr,Er=new Wr,xt=new O;class dn extends fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=kr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gf(e)?Yf:qf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,i){return Zt.makeTranslation(e,t,i),this.applyMatrix4(Zt),this}scale(e,t,i){return Zt.makeScale(e,t,i),this.applyMatrix4(Zt),this}lookAt(e){return ko.lookAt(e),ko.updateMatrix(),this.applyMatrix4(ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Gt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Wt.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new no);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Er.setFromBufferAttribute(o),this.morphTargetsRelative?(xt.addVectors(Wt.min,Er.min),Wt.expandByPoint(xt),xt.addVectors(Wt.max,Er.max),Wt.expandByPoint(xt)):(Wt.expandByPoint(Er.min),Wt.expandByPoint(Er.max))}Wt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(xt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)xt.fromBufferAttribute(o,c),l&&(Gi.fromBufferAttribute(e,c),xt.add(Gi)),r=Math.max(r,i.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<o;A++)c[A]=new O,u[A]=new O;const f=new O,d=new O,m=new O,x=new Ze,_=new Ze,p=new Ze,h=new O,b=new O;function S(A,Q,re){f.fromArray(r,A*3),d.fromArray(r,Q*3),m.fromArray(r,re*3),x.fromArray(a,A*2),_.fromArray(a,Q*2),p.fromArray(a,re*2),d.sub(f),m.sub(f),_.sub(x),p.sub(x);const ge=1/(_.x*p.y-p.x*_.y);isFinite(ge)&&(h.copy(d).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(ge),b.copy(m).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(ge),c[A].add(h),c[Q].add(h),c[re].add(h),u[A].add(b),u[Q].add(b),u[re].add(b))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let A=0,Q=T.length;A<Q;++A){const re=T[A],ge=re.start,N=re.count;for(let W=ge,q=ge+N;W<q;W+=3)S(i[W+0],i[W+1],i[W+2])}const P=new O,C=new O,w=new O,$=new O;function E(A){w.fromArray(s,A*3),$.copy(w);const Q=c[A];P.copy(Q),P.sub(w.multiplyScalar(w.dot(Q))).normalize(),C.crossVectors($,Q);const ge=C.dot(u[A])<0?-1:1;l[A*4]=P.x,l[A*4+1]=P.y,l[A*4+2]=P.z,l[A*4+3]=ge}for(let A=0,Q=T.length;A<Q;++A){const re=T[A],ge=re.start,N=re.count;for(let W=ge,q=ge+N;W<q;W+=3)E(i[W+0]),E(i[W+1]),E(i[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new O,s=new O,a=new O,o=new O,l=new O,c=new O,u=new O,f=new O;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let m=0,x=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let h=0;h<u;h++)d[x++]=c[m++]}return new Tn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fc=new ht,pi=new Ka,ls=new no,Oc=new O,Vi=new O,ki=new O,Wi=new O,Wo=new O,cs=new O,us=new Ze,fs=new Ze,hs=new Ze,Bc=new O,zc=new O,Hc=new O,ds=new O,ps=new O;class En extends Mt{constructor(e=new dn,t=new Ja){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){cs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Wo.fromBufferAttribute(f,e),a?cs.addScaledVector(Wo,u):cs.addScaledVector(Wo.sub(t),u))}t.add(cs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ls.copy(i.boundingSphere),ls.applyMatrix4(s),pi.copy(e.ray).recast(e.near),!(ls.containsPoint(pi.origin)===!1&&(pi.intersectSphere(ls,Oc)===null||pi.origin.distanceToSquared(Oc)>(e.far-e.near)**2))&&(Fc.copy(s).invert(),pi.copy(e.ray).applyMatrix4(Fc),!(i.boundingBox!==null&&pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,pi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,_=d.length;x<_;x++){const p=d[x],h=a[p.materialIndex],b=Math.max(p.start,m.start),S=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let T=b,P=S;T<P;T+=3){const C=o.getX(T),w=o.getX(T+1),$=o.getX(T+2);r=ms(this,h,e,i,c,u,f,C,w,$),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=x,h=_;p<h;p+=3){const b=o.getX(p),S=o.getX(p+1),T=o.getX(p+2);r=ms(this,a,e,i,c,u,f,b,S,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,_=d.length;x<_;x++){const p=d[x],h=a[p.materialIndex],b=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let T=b,P=S;T<P;T+=3){const C=T,w=T+1,$=T+2;r=ms(this,h,e,i,c,u,f,C,w,$),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=x,h=_;p<h;p+=3){const b=p,S=p+1,T=p+2;r=ms(this,a,e,i,c,u,f,b,S,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Jm(n,e,t,i,r,s,a,o){let l;if(e.side===Ht?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ai,o),l===null)return null;ps.copy(o),ps.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ps);return c<t.near||c>t.far?null:{distance:c,point:ps.clone(),object:n}}function ms(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Vi),n.getVertexPosition(l,ki),n.getVertexPosition(c,Wi);const u=Jm(n,e,t,i,Vi,ki,Wi,ds);if(u){r&&(us.fromBufferAttribute(r,o),fs.fromBufferAttribute(r,l),hs.fromBufferAttribute(r,c),u.uv=en.getInterpolation(ds,Vi,ki,Wi,us,fs,hs,new Ze)),s&&(us.fromBufferAttribute(s,o),fs.fromBufferAttribute(s,l),hs.fromBufferAttribute(s,c),u.uv1=en.getInterpolation(ds,Vi,ki,Wi,us,fs,hs,new Ze),u.uv2=u.uv1),a&&(Bc.fromBufferAttribute(a,o),zc.fromBufferAttribute(a,l),Hc.fromBufferAttribute(a,c),u.normal=en.getInterpolation(ds,Vi,ki,Wi,Bc,zc,Hc,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new O,materialIndex:0};en.getNormal(Vi,ki,Wi,f.normal),u.face=f}return u}class oi extends dn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,m=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(f,2));function x(_,p,h,b,S,T,P,C,w,$,E){const A=T/w,Q=P/$,re=T/2,ge=P/2,N=C/2,W=w+1,q=$+1;let se=0,ee=0;const ce=new O;for(let ue=0;ue<q;ue++){const ve=ue*Q-ge;for(let me=0;me<W;me++){const ie=me*A-re;ce[_]=ie*b,ce[p]=ve*S,ce[h]=N,c.push(ce.x,ce.y,ce.z),ce[_]=0,ce[p]=0,ce[h]=C>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(me/w),f.push(1-ue/$),se+=1}}for(let ue=0;ue<$;ue++)for(let ve=0;ve<w;ve++){const me=d+ve+W*ue,ie=d+ve+W*(ue+1),de=d+(ve+1)+W*(ue+1),be=d+(ve+1)+W*ue;l.push(me,ie,be),l.push(ie,de,be),ee+=6}o.addGroup(m,ee,E),m+=ee,d+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ur(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Lt(n){const e={};for(let t=0;t<n.length;t++){const i=ur(n[t]);for(const r in i)e[r]=i[r]}return e}function Qm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function $f(n){return n.getRenderTarget()===null?n.outputColorSpace:tt.workingColorSpace}const eg={clone:ur,merge:Lt};var tg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ng=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tg,this.fragmentShader=ng,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ur(e.uniforms),this.uniformsGroups=Qm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class jf extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Xt extends jf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ea*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ea*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ls*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xi=-90,qi=1;class ig extends Mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Xt(Xi,qi,e,t);r.layers=this.layers,this.add(r);const s=new Xt(Xi,qi,e,t);s.layers=this.layers,this.add(s);const a=new Xt(Xi,qi,e,t);a.layers=this.layers,this.add(a);const o=new Xt(Xi,qi,e,t);o.layers=this.layers,this.add(o);const l=new Xt(Xi,qi,e,t);l.layers=this.layers,this.add(l);const c=new Xt(Xi,qi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Kf extends Yt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ar,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rg extends wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Dr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ai?St:tn),this.texture=new Kf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new oi(5,5,5),s=new Ri({name:"CubemapFromEquirect",uniforms:ur(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:ii});s.uniforms.tEquirect.value=t;const a=new En(r,s),o=t.minFilter;return t.minFilter===Br&&(t.minFilter=Qt),new ig(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Xo=new O,sg=new O,og=new je;class vi{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Xo.subVectors(i,t).cross(sg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Xo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||og.getNormalMatrix(e),r=this.coplanarPoint(Xo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new no,gs=new O;class Qa{constructor(e=new vi,t=new vi,i=new vi,r=new vi,s=new vi,a=new vi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],m=r[8],x=r[9],_=r[10],p=r[11],h=r[12],b=r[13],S=r[14],T=r[15];if(i[0].setComponents(l-s,d-c,p-m,T-h).normalize(),i[1].setComponents(l+s,d+c,p+m,T+h).normalize(),i[2].setComponents(l+a,d+u,p+x,T+b).normalize(),i[3].setComponents(l-a,d-u,p-x,T-b).normalize(),i[4].setComponents(l-o,d-f,p-_,T-S).normalize(),t===Gn)i[5].setComponents(l+o,d+f,p+_,T+S).normalize();else if(t===Vs)i[5].setComponents(o,f,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(e){return mi.center.set(0,0,0),mi.radius=.7071067811865476,mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(gs.x=r.normal.x>0?e.max.x:e.min.x,gs.y=r.normal.y>0?e.max.y:e.min.y,gs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function ag(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,m=f.byteLength,x=n.createBuffer();n.bindBuffer(u,x),n.bufferData(u,f,d),c.onUploadCallback();let _;if(f instanceof Float32Array)_=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=n.SHORT;else if(f instanceof Uint32Array)_=n.UNSIGNED_INT;else if(f instanceof Int32Array)_=n.INT;else if(f instanceof Int8Array)_=n.BYTE;else if(f instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:x,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,u,f){const d=u.array,m=u._updateRange,x=u.updateRanges;if(n.bindBuffer(f,c),m.count===-1&&x.length===0&&n.bufferSubData(f,0,d),x.length!==0){for(let _=0,p=x.length;_<p;_++){const h=x[_];t?n.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d,h.start,h.count):n.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:a,remove:o,update:l}}class el extends dn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=t/l,m=[],x=[],_=[],p=[];for(let h=0;h<u;h++){const b=h*d-a;for(let S=0;S<c;S++){const T=S*f-s;x.push(T,-b,0),_.push(0,0,1),p.push(S/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let b=0;b<o;b++){const S=b+c*h,T=b+c*(h+1),P=b+1+c*(h+1),C=b+1+c*h;m.push(S,T,C),m.push(T,P,C)}this.setIndex(m),this.setAttribute("position",new Gt(x,3)),this.setAttribute("normal",new Gt(_,3)),this.setAttribute("uv",new Gt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.width,e.height,e.widthSegments,e.heightSegments)}}var lg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cg=`#ifdef USE_ALPHAHASH
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
#endif`,ug=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pg=`#ifdef USE_AOMAP
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
#endif`,mg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gg=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,_g=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,vg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sg=`#ifdef USE_IRIDESCENCE
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
#endif`,Eg=`#ifdef USE_BUMPMAP
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
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Lg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Pg=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Dg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ug=`vec3 transformedNormal = objectNormal;
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
#endif`,Ig=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ng=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Og=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bg="gl_FragColor = linearToOutputTexel( gl_FragColor );",zg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Hg=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Gg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vg=`#ifdef USE_ENVMAP
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
#endif`,kg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wg=`#ifdef USE_ENVMAP
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
#endif`,Xg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$g=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jg=`#ifdef USE_GRADIENTMAP
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
}`,Kg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e_=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,t_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,n_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o_=`PhysicalMaterial material;
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
#endif`,a_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,l_=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,c_=`#if defined( RE_IndirectDiffuse )
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
#endif`,u_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,p_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,m_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,__=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,v_=`#if defined( USE_POINTS_UV )
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
#endif`,x_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,y_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,T_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,b_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,A_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,w_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,L_=`#ifdef USE_NORMALMAP
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
#endif`,P_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,U_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,O_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,W_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,X_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,q_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Y_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$_=`#ifdef USE_SKINNING
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
#endif`,j_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K_=`#ifdef USE_SKINNING
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
#endif`,Z_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ev=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tv=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nv=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ov=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const av=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lv=`uniform sampler2D t2D;
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
}`,cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`#include <common>
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
}`,pv=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,mv=`#define DISTANCE
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
}`,gv=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xv=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mv=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sv=`#include <common>
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
}`,Ev=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,yv=`#define LAMBERT
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
}`,Tv=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,bv=`#define MATCAP
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
}`,Av=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,wv=`#define NORMAL
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
}`,Rv=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cv=`#define PHONG
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
}`,Lv=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Pv=`#define STANDARD
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
}`,Dv=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Uv=`#define TOON
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
}`,Iv=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Nv=`uniform float size;
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
}`,Fv=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ov=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Bv=`uniform vec3 color;
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
}`,zv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Hv=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,qe={alphahash_fragment:lg,alphahash_pars_fragment:cg,alphamap_fragment:ug,alphamap_pars_fragment:fg,alphatest_fragment:hg,alphatest_pars_fragment:dg,aomap_fragment:pg,aomap_pars_fragment:mg,batching_pars_vertex:gg,batching_vertex:_g,begin_vertex:vg,beginnormal_vertex:xg,bsdfs:Mg,iridescence_fragment:Sg,bumpmap_pars_fragment:Eg,clipping_planes_fragment:yg,clipping_planes_pars_fragment:Tg,clipping_planes_pars_vertex:bg,clipping_planes_vertex:Ag,color_fragment:wg,color_pars_fragment:Rg,color_pars_vertex:Cg,color_vertex:Lg,common:Pg,cube_uv_reflection_fragment:Dg,defaultnormal_vertex:Ug,displacementmap_pars_vertex:Ig,displacementmap_vertex:Ng,emissivemap_fragment:Fg,emissivemap_pars_fragment:Og,colorspace_fragment:Bg,colorspace_pars_fragment:zg,envmap_fragment:Hg,envmap_common_pars_fragment:Gg,envmap_pars_fragment:Vg,envmap_pars_vertex:kg,envmap_physical_pars_fragment:t_,envmap_vertex:Wg,fog_vertex:Xg,fog_pars_vertex:qg,fog_fragment:Yg,fog_pars_fragment:$g,gradientmap_pars_fragment:jg,lightmap_fragment:Kg,lightmap_pars_fragment:Zg,lights_lambert_fragment:Jg,lights_lambert_pars_fragment:Qg,lights_pars_begin:e_,lights_toon_fragment:n_,lights_toon_pars_fragment:i_,lights_phong_fragment:r_,lights_phong_pars_fragment:s_,lights_physical_fragment:o_,lights_physical_pars_fragment:a_,lights_fragment_begin:l_,lights_fragment_maps:c_,lights_fragment_end:u_,logdepthbuf_fragment:f_,logdepthbuf_pars_fragment:h_,logdepthbuf_pars_vertex:d_,logdepthbuf_vertex:p_,map_fragment:m_,map_pars_fragment:g_,map_particle_fragment:__,map_particle_pars_fragment:v_,metalnessmap_fragment:x_,metalnessmap_pars_fragment:M_,morphcolor_vertex:S_,morphnormal_vertex:E_,morphtarget_pars_vertex:y_,morphtarget_vertex:T_,normal_fragment_begin:b_,normal_fragment_maps:A_,normal_pars_fragment:w_,normal_pars_vertex:R_,normal_vertex:C_,normalmap_pars_fragment:L_,clearcoat_normal_fragment_begin:P_,clearcoat_normal_fragment_maps:D_,clearcoat_pars_fragment:U_,iridescence_pars_fragment:I_,opaque_fragment:N_,packing:F_,premultiplied_alpha_fragment:O_,project_vertex:B_,dithering_fragment:z_,dithering_pars_fragment:H_,roughnessmap_fragment:G_,roughnessmap_pars_fragment:V_,shadowmap_pars_fragment:k_,shadowmap_pars_vertex:W_,shadowmap_vertex:X_,shadowmask_pars_fragment:q_,skinbase_vertex:Y_,skinning_pars_vertex:$_,skinning_vertex:j_,skinnormal_vertex:K_,specularmap_fragment:Z_,specularmap_pars_fragment:J_,tonemapping_fragment:Q_,tonemapping_pars_fragment:ev,transmission_fragment:tv,transmission_pars_fragment:nv,uv_pars_fragment:iv,uv_pars_vertex:rv,uv_vertex:sv,worldpos_vertex:ov,background_vert:av,background_frag:lv,backgroundCube_vert:cv,backgroundCube_frag:uv,cube_vert:fv,cube_frag:hv,depth_vert:dv,depth_frag:pv,distanceRGBA_vert:mv,distanceRGBA_frag:gv,equirect_vert:_v,equirect_frag:vv,linedashed_vert:xv,linedashed_frag:Mv,meshbasic_vert:Sv,meshbasic_frag:Ev,meshlambert_vert:yv,meshlambert_frag:Tv,meshmatcap_vert:bv,meshmatcap_frag:Av,meshnormal_vert:wv,meshnormal_frag:Rv,meshphong_vert:Cv,meshphong_frag:Lv,meshphysical_vert:Pv,meshphysical_frag:Dv,meshtoon_vert:Uv,meshtoon_frag:Iv,points_vert:Nv,points_frag:Fv,shadow_vert:Ov,shadow_frag:Bv,sprite_vert:zv,sprite_frag:Hv},ye={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Mn={basic:{uniforms:Lt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Lt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ke(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Lt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Lt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Lt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ke(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Lt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Lt([ye.points,ye.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Lt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Lt([ye.common,ye.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Lt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Lt([ye.sprite,ye.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Lt([ye.common,ye.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Lt([ye.lights,ye.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Mn.physical={uniforms:Lt([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const _s={r:0,b:0,g:0};function Gv(n,e,t,i,r,s,a){const o=new Ke(0);let l=s===!0?0:1,c,u,f=null,d=0,m=null;function x(p,h){let b=!1,S=h.isScene===!0?h.background:null;S&&S.isTexture&&(S=(h.backgroundBlurriness>0?t:e).get(S)),S===null?_(o,l):S&&S.isColor&&(_(S,1),b=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===eo)?(u===void 0&&(u=new En(new oi(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:ur(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=tt.getTransfer(S.colorSpace)!==ot,(f!==S||d!==S.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new En(new el(2,2),new Ri({name:"BackgroundMaterial",uniforms:ur(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=tt.getTransfer(S.colorSpace)!==ot,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,h){p.getRGB(_s,$f(n)),i.buffers.color.setClear(_s.r,_s.g,_s.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),l=h,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:x}}function Vv(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function f(N,W,q,se,ee){let ce=!1;if(a){const ue=_(se,q,W);c!==ue&&(c=ue,m(c.object)),ce=h(N,se,q,ee),ce&&b(N,se,q,ee)}else{const ue=W.wireframe===!0;(c.geometry!==se.id||c.program!==q.id||c.wireframe!==ue)&&(c.geometry=se.id,c.program=q.id,c.wireframe=ue,ce=!0)}ee!==null&&t.update(ee,n.ELEMENT_ARRAY_BUFFER),(ce||u)&&(u=!1,$(N,W,q,se),ee!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ee).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(N){return i.isWebGL2?n.bindVertexArray(N):s.bindVertexArrayOES(N)}function x(N){return i.isWebGL2?n.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function _(N,W,q){const se=q.wireframe===!0;let ee=o[N.id];ee===void 0&&(ee={},o[N.id]=ee);let ce=ee[W.id];ce===void 0&&(ce={},ee[W.id]=ce);let ue=ce[se];return ue===void 0&&(ue=p(d()),ce[se]=ue),ue}function p(N){const W=[],q=[],se=[];for(let ee=0;ee<r;ee++)W[ee]=0,q[ee]=0,se[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:q,attributeDivisors:se,object:N,attributes:{},index:null}}function h(N,W,q,se){const ee=c.attributes,ce=W.attributes;let ue=0;const ve=q.getAttributes();for(const me in ve)if(ve[me].location>=0){const de=ee[me];let be=ce[me];if(be===void 0&&(me==="instanceMatrix"&&N.instanceMatrix&&(be=N.instanceMatrix),me==="instanceColor"&&N.instanceColor&&(be=N.instanceColor)),de===void 0||de.attribute!==be||be&&de.data!==be.data)return!0;ue++}return c.attributesNum!==ue||c.index!==se}function b(N,W,q,se){const ee={},ce=W.attributes;let ue=0;const ve=q.getAttributes();for(const me in ve)if(ve[me].location>=0){let de=ce[me];de===void 0&&(me==="instanceMatrix"&&N.instanceMatrix&&(de=N.instanceMatrix),me==="instanceColor"&&N.instanceColor&&(de=N.instanceColor));const be={};be.attribute=de,de&&de.data&&(be.data=de.data),ee[me]=be,ue++}c.attributes=ee,c.attributesNum=ue,c.index=se}function S(){const N=c.newAttributes;for(let W=0,q=N.length;W<q;W++)N[W]=0}function T(N){P(N,0)}function P(N,W){const q=c.newAttributes,se=c.enabledAttributes,ee=c.attributeDivisors;q[N]=1,se[N]===0&&(n.enableVertexAttribArray(N),se[N]=1),ee[N]!==W&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,W),ee[N]=W)}function C(){const N=c.newAttributes,W=c.enabledAttributes;for(let q=0,se=W.length;q<se;q++)W[q]!==N[q]&&(n.disableVertexAttribArray(q),W[q]=0)}function w(N,W,q,se,ee,ce,ue){ue===!0?n.vertexAttribIPointer(N,W,q,ee,ce):n.vertexAttribPointer(N,W,q,se,ee,ce)}function $(N,W,q,se){if(i.isWebGL2===!1&&(N.isInstancedMesh||se.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const ee=se.attributes,ce=q.getAttributes(),ue=W.defaultAttributeValues;for(const ve in ce){const me=ce[ve];if(me.location>=0){let ie=ee[ve];if(ie===void 0&&(ve==="instanceMatrix"&&N.instanceMatrix&&(ie=N.instanceMatrix),ve==="instanceColor"&&N.instanceColor&&(ie=N.instanceColor)),ie!==void 0){const de=ie.normalized,be=ie.itemSize,Pe=t.get(ie);if(Pe===void 0)continue;const Le=Pe.buffer,Ne=Pe.type,Fe=Pe.bytesPerElement,De=i.isWebGL2===!0&&(Ne===n.INT||Ne===n.UNSIGNED_INT||ie.gpuType===Pf);if(ie.isInterleavedBufferAttribute){const Ve=ie.data,v=Ve.stride,U=ie.offset;if(Ve.isInstancedInterleavedBuffer){for(let F=0;F<me.locationSize;F++)P(me.location+F,Ve.meshPerAttribute);N.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let F=0;F<me.locationSize;F++)T(me.location+F);n.bindBuffer(n.ARRAY_BUFFER,Le);for(let F=0;F<me.locationSize;F++)w(me.location+F,be/me.locationSize,Ne,de,v*Fe,(U+be/me.locationSize*F)*Fe,De)}else{if(ie.isInstancedBufferAttribute){for(let Ve=0;Ve<me.locationSize;Ve++)P(me.location+Ve,ie.meshPerAttribute);N.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ve=0;Ve<me.locationSize;Ve++)T(me.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,Le);for(let Ve=0;Ve<me.locationSize;Ve++)w(me.location+Ve,be/me.locationSize,Ne,de,be*Fe,be/me.locationSize*Ve*Fe,De)}}else if(ue!==void 0){const de=ue[ve];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(me.location,de);break;case 3:n.vertexAttrib3fv(me.location,de);break;case 4:n.vertexAttrib4fv(me.location,de);break;default:n.vertexAttrib1fv(me.location,de)}}}}C()}function E(){re();for(const N in o){const W=o[N];for(const q in W){const se=W[q];for(const ee in se)x(se[ee].object),delete se[ee];delete W[q]}delete o[N]}}function A(N){if(o[N.id]===void 0)return;const W=o[N.id];for(const q in W){const se=W[q];for(const ee in se)x(se[ee].object),delete se[ee];delete W[q]}delete o[N.id]}function Q(N){for(const W in o){const q=o[W];if(q[N.id]===void 0)continue;const se=q[N.id];for(const ee in se)x(se[ee].object),delete se[ee];delete q[N.id]}}function re(){ge(),u=!0,c!==l&&(c=l,m(c.object))}function ge(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:re,resetDefaultState:ge,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:Q,initAttributes:S,enableAttribute:T,disableUnusedAttributes:C}}function kv(n,e,t,i){const r=i.isWebGL2;let s;function a(u){s=u}function o(u,f){n.drawArrays(s,u,f),t.update(f,s,1)}function l(u,f,d){if(d===0)return;let m,x;if(r)m=n,x="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](s,u,f,d),t.update(f,s,d)}function c(u,f,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<d;x++)this.render(u[x],f[x]);else{m.multiDrawArraysWEBGL(s,u,0,f,0,d);let x=0;for(let _=0;_<d;_++)x+=f[_];t.update(x,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Wv(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=d>0,T=a||e.has("OES_texture_float"),P=S&&T,C=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:b,vertexTextures:S,floatFragmentTextures:T,floatVertexTextures:P,maxSamples:C}}function Xv(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new vi,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const x=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!r||x===null||x.length===0||s&&!p)s?u(null):c();else{const b=s?0:i,S=b*4;let T=h.clippingState||null;l.value=T,T=u(x,d,S,m);for(let P=0;P!==S;++P)T[P]=t[P];h.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,x){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,x!==!0||p===null){const h=m+_*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<h)&&(p=new Float32Array(h));for(let S=0,T=m;S!==_;++S,T+=4)a.copy(f[S]).applyMatrix4(b,o),a.normal.toArray(p,T),p[T+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function qv(n){let e=new WeakMap;function t(a,o){return o===_a?a.mapping=ar:o===va&&(a.mapping=lr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===_a||o===va)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new rg(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Jf extends jf{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ki=4,Gc=[.125,.215,.35,.446,.526,.582],Si=20,qo=new Jf,Vc=new Ke;let Yo=null,$o=0,jo=0;const xi=(1+Math.sqrt(5))/2,Yi=1/xi,kc=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,xi,Yi),new O(0,xi,-Yi),new O(Yi,0,xi),new O(-Yi,0,xi),new O(xi,Yi,0),new O(-xi,Yi,0)];class Wc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Yo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yo,$o,jo),e.scissorTest=!1,vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ar||e.mapping===lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:zr,format:cn,colorSpace:Xn,depthBuffer:!1},r=Xc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yv(s)),this._blurMaterial=$v(s,e,t)}return r}_compileMaterial(e){const t=new En(this._lodPlanes[0],e);this._renderer.compile(t,qo)}_sceneToCubeUV(e,t,i,r){const o=new Xt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Vc),u.toneMapping=ri,u.autoClear=!1;const m=new Ja({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),x=new En(new oi,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Vc),_=!0);for(let h=0;h<6;h++){const b=h%3;b===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):b===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const S=this._cubeSize;vs(r,b*S,h>2?S:0,S,S),u.setRenderTarget(r),_&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ar||e.mapping===lr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new En(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;vs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,qo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=kc[(r-1)%kc.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new En(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Si-1),_=s/x,p=isFinite(s)?1+Math.floor(u*_):Si;p>Si&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Si}`);const h=[];let b=0;for(let w=0;w<Si;++w){const $=w/_,E=Math.exp(-$*$/2);h.push(E),w===0?b+=E:w<p&&(b+=2*E)}for(let w=0;w<h.length;w++)h[w]=h[w]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=x,d.mipInt.value=S-i;const T=this._sizeLods[r],P=3*T*(r>S-Ki?r-S+Ki:0),C=4*(this._cubeSize-T);vs(t,P,C,3*T,2*T),l.setRenderTarget(t),l.render(f,qo)}}function Yv(n){const e=[],t=[],i=[];let r=n;const s=n-Ki+1+Gc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Ki?l=Gc[a-n+Ki-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,x=6,_=3,p=2,h=1,b=new Float32Array(_*x*m),S=new Float32Array(p*x*m),T=new Float32Array(h*x*m);for(let C=0;C<m;C++){const w=C%3*2/3-1,$=C>2?0:-1,E=[w,$,0,w+2/3,$,0,w+2/3,$+1,0,w,$,0,w+2/3,$+1,0,w,$+1,0];b.set(E,_*x*C),S.set(d,p*x*C);const A=[C,C,C,C,C,C];T.set(A,h*x*C)}const P=new dn;P.setAttribute("position",new Tn(b,_)),P.setAttribute("uv",new Tn(S,p)),P.setAttribute("faceIndex",new Tn(T,h)),e.push(P),r>Ki&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Xc(n,e,t){const i=new wi(n,e,t);return i.texture.mapping=eo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function $v(n,e,t){const i=new Float32Array(Si),r=new O(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function qc(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Yc(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function tl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jv(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===_a||l===va,u=l===ar||l===lr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Wc(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Wc(n));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Kv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Zv(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const _=d.morphAttributes[x];for(let p=0,h=_.length;p<h;p++)e.remove(_[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const x in d)e.update(d[x],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const x in m){const _=m[x];for(let p=0,h=_.length;p<h;p++)e.update(_[p],n.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,x=f.attributes.position;let _=0;if(m!==null){const b=m.array;_=m.version;for(let S=0,T=b.length;S<T;S+=3){const P=b[S+0],C=b[S+1],w=b[S+2];d.push(P,C,C,w,w,P)}}else if(x!==void 0){const b=x.array;_=x.version;for(let S=0,T=b.length/3-1;S<T;S+=3){const P=S+0,C=S+1,w=S+2;d.push(P,C,C,w,w,P)}}else return;const p=new(Gf(d)?Yf:qf)(d,1);p.version=_;const h=s.get(f);h&&e.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Jv(n,e,t,i){const r=i.isWebGL2;let s;function a(m){s=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function u(m,x){n.drawElements(s,x,o,m*l),t.update(x,s,1)}function f(m,x,_){if(_===0)return;let p,h;if(r)p=n,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,x,o,m*l,_),t.update(x,s,_)}function d(m,x,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<_;h++)this.render(m[h]/l,x[h]);else{p.multiDrawElementsWEBGL(s,x,0,o,m,0,_);let h=0;for(let b=0;b<_;b++)h+=x[b];t.update(h,s,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function Qv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function e0(n,e){return n[0]-e[0]}function t0(n,e){return Math.abs(e[1])-Math.abs(n[1])}function n0(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new lt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=x!==void 0?x.length:0;let p=s.get(u);if(p===void 0||p.count!==_){let W=function(){ge.dispose(),s.delete(u),u.removeEventListener("dispose",W)};var m=W;p!==void 0&&p.texture.dispose();const S=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],$=u.morphAttributes.color||[];let E=0;S===!0&&(E=1),T===!0&&(E=2),P===!0&&(E=3);let A=u.attributes.position.count*E,Q=1;A>e.maxTextureSize&&(Q=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const re=new Float32Array(A*Q*4*_),ge=new Wf(re,A,Q,_);ge.type=ti,ge.needsUpdate=!0;const N=E*4;for(let q=0;q<_;q++){const se=C[q],ee=w[q],ce=$[q],ue=A*Q*4*q;for(let ve=0;ve<se.count;ve++){const me=ve*N;S===!0&&(a.fromBufferAttribute(se,ve),re[ue+me+0]=a.x,re[ue+me+1]=a.y,re[ue+me+2]=a.z,re[ue+me+3]=0),T===!0&&(a.fromBufferAttribute(ee,ve),re[ue+me+4]=a.x,re[ue+me+5]=a.y,re[ue+me+6]=a.z,re[ue+me+7]=0),P===!0&&(a.fromBufferAttribute(ce,ve),re[ue+me+8]=a.x,re[ue+me+9]=a.y,re[ue+me+10]=a.z,re[ue+me+11]=ce.itemSize===4?a.w:1)}}p={count:_,texture:ge,size:new Ze(A,Q)},s.set(u,p),u.addEventListener("dispose",W)}let h=0;for(let S=0;S<d.length;S++)h+=d[S];const b=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",b),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const x=d===void 0?0:d.length;let _=i[u.id];if(_===void 0||_.length!==x){_=[];for(let T=0;T<x;T++)_[T]=[T,0];i[u.id]=_}for(let T=0;T<x;T++){const P=_[T];P[0]=T,P[1]=d[T]}_.sort(t0);for(let T=0;T<8;T++)T<x&&_[T][1]?(o[T][0]=_[T][0],o[T][1]=_[T][1]):(o[T][0]=Number.MAX_SAFE_INTEGER,o[T][1]=0);o.sort(e0);const p=u.morphAttributes.position,h=u.morphAttributes.normal;let b=0;for(let T=0;T<8;T++){const P=o[T],C=P[0],w=P[1];C!==Number.MAX_SAFE_INTEGER&&w?(p&&u.getAttribute("morphTarget"+T)!==p[C]&&u.setAttribute("morphTarget"+T,p[C]),h&&u.getAttribute("morphNormal"+T)!==h[C]&&u.setAttribute("morphNormal"+T,h[C]),r[T]=w,b+=w):(p&&u.hasAttribute("morphTarget"+T)===!0&&u.deleteAttribute("morphTarget"+T),h&&u.hasAttribute("morphNormal"+T)===!0&&u.deleteAttribute("morphNormal"+T),r[T]=0)}const S=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(n,"morphTargetBaseInfluence",S),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function i0(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Qf extends Yt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:bi,u!==bi&&u!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===bi&&(i=ei),i===void 0&&u===cr&&(i=Ti),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const eh=new Yt,th=new Qf(1,1);th.compareFunction=Hf;const nh=new Wf,ih=new Gm,rh=new Kf,$c=[],jc=[],Kc=new Float32Array(16),Zc=new Float32Array(9),Jc=new Float32Array(4);function pr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=$c[r];if(s===void 0&&(s=new Float32Array(r),$c[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function io(n,e){let t=jc[e];t===void 0&&(t=new Int32Array(e),jc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function r0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function s0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2fv(this.addr,e),gt(t,e)}}function o0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;n.uniform3fv(this.addr,e),gt(t,e)}}function a0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4fv(this.addr,e),gt(t,e)}}function l0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;Jc.set(i),n.uniformMatrix2fv(this.addr,!1,Jc),gt(t,i)}}function c0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;Zc.set(i),n.uniformMatrix3fv(this.addr,!1,Zc),gt(t,i)}}function u0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,i))return;Kc.set(i),n.uniformMatrix4fv(this.addr,!1,Kc),gt(t,i)}}function f0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function h0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2iv(this.addr,e),gt(t,e)}}function d0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3iv(this.addr,e),gt(t,e)}}function p0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4iv(this.addr,e),gt(t,e)}}function m0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function g0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2uiv(this.addr,e),gt(t,e)}}function _0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3uiv(this.addr,e),gt(t,e)}}function v0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4uiv(this.addr,e),gt(t,e)}}function x0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?th:eh;t.setTexture2D(e||s,r)}function M0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ih,r)}function S0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||rh,r)}function E0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||nh,r)}function y0(n){switch(n){case 5126:return r0;case 35664:return s0;case 35665:return o0;case 35666:return a0;case 35674:return l0;case 35675:return c0;case 35676:return u0;case 5124:case 35670:return f0;case 35667:case 35671:return h0;case 35668:case 35672:return d0;case 35669:case 35673:return p0;case 5125:return m0;case 36294:return g0;case 36295:return _0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return x0;case 35679:case 36299:case 36307:return M0;case 35680:case 36300:case 36308:case 36293:return S0;case 36289:case 36303:case 36311:case 36292:return E0}}function T0(n,e){n.uniform1fv(this.addr,e)}function b0(n,e){const t=pr(e,this.size,2);n.uniform2fv(this.addr,t)}function A0(n,e){const t=pr(e,this.size,3);n.uniform3fv(this.addr,t)}function w0(n,e){const t=pr(e,this.size,4);n.uniform4fv(this.addr,t)}function R0(n,e){const t=pr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function C0(n,e){const t=pr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function L0(n,e){const t=pr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function P0(n,e){n.uniform1iv(this.addr,e)}function D0(n,e){n.uniform2iv(this.addr,e)}function U0(n,e){n.uniform3iv(this.addr,e)}function I0(n,e){n.uniform4iv(this.addr,e)}function N0(n,e){n.uniform1uiv(this.addr,e)}function F0(n,e){n.uniform2uiv(this.addr,e)}function O0(n,e){n.uniform3uiv(this.addr,e)}function B0(n,e){n.uniform4uiv(this.addr,e)}function z0(n,e,t){const i=this.cache,r=e.length,s=io(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||eh,s[a])}function H0(n,e,t){const i=this.cache,r=e.length,s=io(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ih,s[a])}function G0(n,e,t){const i=this.cache,r=e.length,s=io(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||rh,s[a])}function V0(n,e,t){const i=this.cache,r=e.length,s=io(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),gt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||nh,s[a])}function k0(n){switch(n){case 5126:return T0;case 35664:return b0;case 35665:return A0;case 35666:return w0;case 35674:return R0;case 35675:return C0;case 35676:return L0;case 5124:case 35670:return P0;case 35667:case 35671:return D0;case 35668:case 35672:return U0;case 35669:case 35673:return I0;case 5125:return N0;case 36294:return F0;case 36295:return O0;case 36296:return B0;case 35678:case 36198:case 36298:case 36306:case 35682:return z0;case 35679:case 36299:case 36307:return H0;case 35680:case 36300:case 36308:case 36293:return G0;case 36289:case 36303:case 36311:case 36292:return V0}}class W0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=y0(t.type)}}class X0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=k0(t.type)}}class q0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ko=/(\w+)(\])?(\[|\.)?/g;function Qc(n,e){n.seq.push(e),n.map[e.id]=e}function Y0(n,e,t){const i=n.name,r=i.length;for(Ko.lastIndex=0;;){const s=Ko.exec(i),a=Ko.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Qc(t,c===void 0?new W0(o,n,e):new X0(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new q0(o),Qc(t,f)),t=f}}}class Ps{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Y0(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function eu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const $0=37297;let j0=0;function K0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Z0(n){const e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(n);let i;switch(e===t?i="":e===Gs&&t===Hs?i="LinearDisplayP3ToLinearSRGB":e===Hs&&t===Gs&&(i="LinearSRGBToLinearDisplayP3"),n){case Xn:case to:return[i,"LinearTransferOETF"];case St:case ja:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function tu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+K0(n.getShaderSource(e),a)}else return r}function J0(n,e){const t=Z0(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Q0(n,e){let t;switch(e){case um:t="Linear";break;case fm:t="Reinhard";break;case hm:t="OptimizedCineon";break;case dm:t="ACESFilmic";break;case mm:t="AgX";break;case pm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ex(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zi).join(`
`)}function tx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Zi).join(`
`)}function nx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ix(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Zi(n){return n!==""}function nu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function iu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ta(n){return n.replace(rx,ox)}const sx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ox(n,e){let t=qe[e];if(t===void 0){const i=sx.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ta(t)}const ax=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ru(n){return n.replace(ax,lx)}function lx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function su(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Cf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Bp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Nn&&(e="SHADOWMAP_TYPE_VSM"),e}function ux(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ar:case lr:e="ENVMAP_TYPE_CUBE";break;case eo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case lr:e="ENVMAP_MODE_REFRACTION";break}return e}function hx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ya:e="ENVMAP_BLENDING_MULTIPLY";break;case lm:e="ENVMAP_BLENDING_MIX";break;case cm:e="ENVMAP_BLENDING_ADD";break}return e}function dx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function px(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=cx(t),c=ux(t),u=fx(t),f=hx(t),d=dx(t),m=t.isWebGL2?"":ex(t),x=tx(t),_=nx(s),p=r.createProgram();let h,b,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Zi).join(`
`),h.length>0&&(h+=`
`),b=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Zi).join(`
`),b.length>0&&(b+=`
`)):(h=[su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),b=[m,su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?qe.tonemapping_pars_fragment:"",t.toneMapping!==ri?Q0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,J0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zi).join(`
`)),a=Ta(a),a=nu(a,t),a=iu(a,t),o=Ta(o),o=nu(o,t),o=iu(o,t),a=ru(a),o=ru(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,h=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const T=S+h+a,P=S+b+o,C=eu(r,r.VERTEX_SHADER,T),w=eu(r,r.FRAGMENT_SHADER,P);r.attachShader(p,C),r.attachShader(p,w),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function $(re){if(n.debug.checkShaderErrors){const ge=r.getProgramInfoLog(p).trim(),N=r.getShaderInfoLog(C).trim(),W=r.getShaderInfoLog(w).trim();let q=!0,se=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,C,w);else{const ee=tu(r,C,"vertex"),ce=tu(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+ge+`
`+ee+`
`+ce)}else ge!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ge):(N===""||W==="")&&(se=!1);se&&(re.diagnostics={runnable:q,programLog:ge,vertexShader:{log:N,prefix:h},fragmentShader:{log:W,prefix:b}})}r.deleteShader(C),r.deleteShader(w),E=new Ps(r,p),A=ix(r,p)}let E;this.getUniforms=function(){return E===void 0&&$(this),E};let A;this.getAttributes=function(){return A===void 0&&$(this),A};let Q=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Q===!1&&(Q=r.getProgramParameter(p,$0)),Q},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=j0++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=w,this}let mx=0;class gx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new _x(e),t.set(e,i)),i}}class _x{constructor(e){this.id=mx++,this.code=e,this.usedTimes=0}}function vx(n,e,t,i,r,s,a){const o=new Za,l=new gx,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return E===0?"uv":`uv${E}`}function p(E,A,Q,re,ge){const N=re.fog,W=ge.geometry,q=E.isMeshStandardMaterial?re.environment:null,se=(E.isMeshStandardMaterial?t:e).get(E.envMap||q),ee=se&&se.mapping===eo?se.image.height:null,ce=x[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const ue=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ve=ue!==void 0?ue.length:0;let me=0;W.morphAttributes.position!==void 0&&(me=1),W.morphAttributes.normal!==void 0&&(me=2),W.morphAttributes.color!==void 0&&(me=3);let ie,de,be,Pe;if(ce){const _t=Mn[ce];ie=_t.vertexShader,de=_t.fragmentShader}else ie=E.vertexShader,de=E.fragmentShader,l.update(E),be=l.getVertexShaderID(E),Pe=l.getFragmentShaderID(E);const Le=n.getRenderTarget(),Ne=ge.isInstancedMesh===!0,Fe=ge.isBatchedMesh===!0,De=!!E.map,Ve=!!E.matcap,v=!!se,U=!!E.aoMap,F=!!E.lightMap,z=!!E.bumpMap,G=!!E.normalMap,oe=!!E.displacementMap,le=!!E.emissiveMap,M=!!E.metalnessMap,g=!!E.roughnessMap,R=E.anisotropy>0,X=E.clearcoat>0,H=E.iridescence>0,Y=E.sheen>0,he=E.transmission>0,fe=R&&!!E.anisotropyMap,xe=X&&!!E.clearcoatMap,Z=X&&!!E.clearcoatNormalMap,B=X&&!!E.clearcoatRoughnessMap,I=H&&!!E.iridescenceMap,Se=H&&!!E.iridescenceThicknessMap,L=Y&&!!E.sheenColorMap,k=Y&&!!E.sheenRoughnessMap,j=!!E.specularMap,te=!!E.specularColorMap,_e=!!E.specularIntensityMap,Ee=he&&!!E.transmissionMap,Ae=he&&!!E.thicknessMap,Te=!!E.gradientMap,ae=!!E.alphaMap,D=E.alphaTest>0,pe=!!E.alphaHash,Me=!!E.extensions,we=!!W.attributes.uv1,Re=!!W.attributes.uv2,Xe=!!W.attributes.uv3;let Be=ri;return E.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(Be=n.toneMapping),{isWebGL2:u,shaderID:ce,shaderType:E.type,shaderName:E.name,vertexShader:ie,fragmentShader:de,defines:E.defines,customVertexShaderID:be,customFragmentShaderID:Pe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Fe,instancing:Ne,instancingColor:Ne&&ge.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Le===null?n.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:Xn,map:De,matcap:Ve,envMap:v,envMapMode:v&&se.mapping,envMapCubeUVHeight:ee,aoMap:U,lightMap:F,bumpMap:z,normalMap:G,displacementMap:d&&oe,emissiveMap:le,normalMapObjectSpace:G&&E.normalMapType===wm,normalMapTangentSpace:G&&E.normalMapType===zf,metalnessMap:M,roughnessMap:g,anisotropy:R,anisotropyMap:fe,clearcoat:X,clearcoatMap:xe,clearcoatNormalMap:Z,clearcoatRoughnessMap:B,iridescence:H,iridescenceMap:I,iridescenceThicknessMap:Se,sheen:Y,sheenColorMap:L,sheenRoughnessMap:k,specularMap:j,specularColorMap:te,specularIntensityMap:_e,transmission:he,transmissionMap:Ee,thicknessMap:Ae,gradientMap:Te,opaque:E.transparent===!1&&E.blending===nr,alphaMap:ae,alphaTest:D,alphaHash:pe,combine:E.combine,mapUv:De&&_(E.map.channel),aoMapUv:U&&_(E.aoMap.channel),lightMapUv:F&&_(E.lightMap.channel),bumpMapUv:z&&_(E.bumpMap.channel),normalMapUv:G&&_(E.normalMap.channel),displacementMapUv:oe&&_(E.displacementMap.channel),emissiveMapUv:le&&_(E.emissiveMap.channel),metalnessMapUv:M&&_(E.metalnessMap.channel),roughnessMapUv:g&&_(E.roughnessMap.channel),anisotropyMapUv:fe&&_(E.anisotropyMap.channel),clearcoatMapUv:xe&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Z&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:I&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:L&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:k&&_(E.sheenRoughnessMap.channel),specularMapUv:j&&_(E.specularMap.channel),specularColorMapUv:te&&_(E.specularColorMap.channel),specularIntensityMapUv:_e&&_(E.specularIntensityMap.channel),transmissionMapUv:Ee&&_(E.transmissionMap.channel),thicknessMapUv:Ae&&_(E.thicknessMap.channel),alphaMapUv:ae&&_(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(G||R),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:we,vertexUv2s:Re,vertexUv3s:Xe,pointsUvs:ge.isPoints===!0&&!!W.attributes.uv&&(De||ae),fog:!!N,useFog:E.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:ge.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:me,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&Q.length>0,shadowMapType:n.shadowMap.type,toneMapping:Be,useLegacyLights:n._useLegacyLights,decodeVideoTexture:De&&E.map.isVideoTexture===!0&&tt.getTransfer(E.map.colorSpace)===ot,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Hn,flipSided:E.side===Ht,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Me&&E.extensions.derivatives===!0,extensionFragDepth:Me&&E.extensions.fragDepth===!0,extensionDrawBuffers:Me&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Me&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Me&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function h(E){const A=[];if(E.shaderID?A.push(E.shaderID):(A.push(E.customVertexShaderID),A.push(E.customFragmentShaderID)),E.defines!==void 0)for(const Q in E.defines)A.push(Q),A.push(E.defines[Q]);return E.isRawShaderMaterial===!1&&(b(A,E),S(A,E),A.push(n.outputColorSpace)),A.push(E.customProgramCacheKey),A.join()}function b(E,A){E.push(A.precision),E.push(A.outputColorSpace),E.push(A.envMapMode),E.push(A.envMapCubeUVHeight),E.push(A.mapUv),E.push(A.alphaMapUv),E.push(A.lightMapUv),E.push(A.aoMapUv),E.push(A.bumpMapUv),E.push(A.normalMapUv),E.push(A.displacementMapUv),E.push(A.emissiveMapUv),E.push(A.metalnessMapUv),E.push(A.roughnessMapUv),E.push(A.anisotropyMapUv),E.push(A.clearcoatMapUv),E.push(A.clearcoatNormalMapUv),E.push(A.clearcoatRoughnessMapUv),E.push(A.iridescenceMapUv),E.push(A.iridescenceThicknessMapUv),E.push(A.sheenColorMapUv),E.push(A.sheenRoughnessMapUv),E.push(A.specularMapUv),E.push(A.specularColorMapUv),E.push(A.specularIntensityMapUv),E.push(A.transmissionMapUv),E.push(A.thicknessMapUv),E.push(A.combine),E.push(A.fogExp2),E.push(A.sizeAttenuation),E.push(A.morphTargetsCount),E.push(A.morphAttributeCount),E.push(A.numDirLights),E.push(A.numPointLights),E.push(A.numSpotLights),E.push(A.numSpotLightMaps),E.push(A.numHemiLights),E.push(A.numRectAreaLights),E.push(A.numDirLightShadows),E.push(A.numPointLightShadows),E.push(A.numSpotLightShadows),E.push(A.numSpotLightShadowsWithMaps),E.push(A.numLightProbes),E.push(A.shadowMapType),E.push(A.toneMapping),E.push(A.numClippingPlanes),E.push(A.numClipIntersection),E.push(A.depthPacking)}function S(E,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),E.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function T(E){const A=x[E.type];let Q;if(A){const re=Mn[A];Q=eg.clone(re.uniforms)}else Q=E.uniforms;return Q}function P(E,A){let Q;for(let re=0,ge=c.length;re<ge;re++){const N=c[re];if(N.cacheKey===A){Q=N,++Q.usedTimes;break}}return Q===void 0&&(Q=new px(n,A,E,s),c.push(Q)),Q}function C(E){if(--E.usedTimes===0){const A=c.indexOf(E);c[A]=c[c.length-1],c.pop(),E.destroy()}}function w(E){l.remove(E)}function $(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:T,acquireProgram:P,releaseProgram:C,releaseShaderCache:w,programs:c,dispose:$}}function xx(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Mx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ou(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function au(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,m,x,_,p){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:x,renderOrder:f.renderOrder,z:_,group:p},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=x,h.renderOrder=f.renderOrder,h.z=_,h.group=p),e++,h}function o(f,d,m,x,_,p){const h=a(f,d,m,x,_,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(f,d,m,x,_,p){const h=a(f,d,m,x,_,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||Mx),i.length>1&&i.sort(d||ou),r.length>1&&r.sort(d||ou)}function u(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Sx(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new au,n.set(i,[a])):r>=s.length?(a=new au,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ex(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ke};break;case"SpotLight":t={position:new O,direction:new O,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function yx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Tx=0;function bx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ax(n,e){const t=new Ex,i=yx(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new O);const s=new O,a=new ht,o=new ht;function l(u,f){let d=0,m=0,x=0;for(let re=0;re<9;re++)r.probe[re].set(0,0,0);let _=0,p=0,h=0,b=0,S=0,T=0,P=0,C=0,w=0,$=0,E=0;u.sort(bx);const A=f===!0?Math.PI:1;for(let re=0,ge=u.length;re<ge;re++){const N=u[re],W=N.color,q=N.intensity,se=N.distance,ee=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=W.r*q*A,m+=W.g*q*A,x+=W.b*q*A;else if(N.isLightProbe){for(let ce=0;ce<9;ce++)r.probe[ce].addScaledVector(N.sh.coefficients[ce],q);E++}else if(N.isDirectionalLight){const ce=t.get(N);if(ce.color.copy(N.color).multiplyScalar(N.intensity*A),N.castShadow){const ue=N.shadow,ve=i.get(N);ve.shadowBias=ue.bias,ve.shadowNormalBias=ue.normalBias,ve.shadowRadius=ue.radius,ve.shadowMapSize=ue.mapSize,r.directionalShadow[_]=ve,r.directionalShadowMap[_]=ee,r.directionalShadowMatrix[_]=N.shadow.matrix,T++}r.directional[_]=ce,_++}else if(N.isSpotLight){const ce=t.get(N);ce.position.setFromMatrixPosition(N.matrixWorld),ce.color.copy(W).multiplyScalar(q*A),ce.distance=se,ce.coneCos=Math.cos(N.angle),ce.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),ce.decay=N.decay,r.spot[h]=ce;const ue=N.shadow;if(N.map&&(r.spotLightMap[w]=N.map,w++,ue.updateMatrices(N),N.castShadow&&$++),r.spotLightMatrix[h]=ue.matrix,N.castShadow){const ve=i.get(N);ve.shadowBias=ue.bias,ve.shadowNormalBias=ue.normalBias,ve.shadowRadius=ue.radius,ve.shadowMapSize=ue.mapSize,r.spotShadow[h]=ve,r.spotShadowMap[h]=ee,C++}h++}else if(N.isRectAreaLight){const ce=t.get(N);ce.color.copy(W).multiplyScalar(q),ce.halfWidth.set(N.width*.5,0,0),ce.halfHeight.set(0,N.height*.5,0),r.rectArea[b]=ce,b++}else if(N.isPointLight){const ce=t.get(N);if(ce.color.copy(N.color).multiplyScalar(N.intensity*A),ce.distance=N.distance,ce.decay=N.decay,N.castShadow){const ue=N.shadow,ve=i.get(N);ve.shadowBias=ue.bias,ve.shadowNormalBias=ue.normalBias,ve.shadowRadius=ue.radius,ve.shadowMapSize=ue.mapSize,ve.shadowCameraNear=ue.camera.near,ve.shadowCameraFar=ue.camera.far,r.pointShadow[p]=ve,r.pointShadowMap[p]=ee,r.pointShadowMatrix[p]=N.shadow.matrix,P++}r.point[p]=ce,p++}else if(N.isHemisphereLight){const ce=t.get(N);ce.skyColor.copy(N.color).multiplyScalar(q*A),ce.groundColor.copy(N.groundColor).multiplyScalar(q*A),r.hemi[S]=ce,S++}}b>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=x;const Q=r.hash;(Q.directionalLength!==_||Q.pointLength!==p||Q.spotLength!==h||Q.rectAreaLength!==b||Q.hemiLength!==S||Q.numDirectionalShadows!==T||Q.numPointShadows!==P||Q.numSpotShadows!==C||Q.numSpotMaps!==w||Q.numLightProbes!==E)&&(r.directional.length=_,r.spot.length=h,r.rectArea.length=b,r.point.length=p,r.hemi.length=S,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=C+w-$,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=$,r.numLightProbes=E,Q.directionalLength=_,Q.pointLength=p,Q.spotLength=h,Q.rectAreaLength=b,Q.hemiLength=S,Q.numDirectionalShadows=T,Q.numPointShadows=P,Q.numSpotShadows=C,Q.numSpotMaps=w,Q.numLightProbes=E,r.version=Tx++)}function c(u,f){let d=0,m=0,x=0,_=0,p=0;const h=f.matrixWorldInverse;for(let b=0,S=u.length;b<S;b++){const T=u[b];if(T.isDirectionalLight){const P=r.directional[d];P.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(h),d++}else if(T.isSpotLight){const P=r.spot[x];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(h),P.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(h),x++}else if(T.isRectAreaLight){const P=r.rectArea[_];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(h),o.identity(),a.copy(T.matrixWorld),a.premultiply(h),o.extractRotation(a),P.halfWidth.set(T.width*.5,0,0),P.halfHeight.set(0,T.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const P=r.point[m];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(h),m++}else if(T.isHemisphereLight){const P=r.hemi[p];P.direction.setFromMatrixPosition(T.matrixWorld),P.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:r}}function lu(n,e){const t=new Ax(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function wx(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new lu(n,e),t.set(s,[l])):a>=o.length?(l=new lu(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Rx extends dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cx extends dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Lx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Px=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Dx(n,e,t){let i=new Qa;const r=new Ze,s=new Ze,a=new lt,o=new Rx({depthPacking:Am}),l=new Cx,c={},u=t.maxTextureSize,f={[ai]:Ht,[Ht]:ai,[Hn]:Hn},d=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:Lx,fragmentShader:Px}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new dn;x.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new En(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cf;let h=this.type;this.render=function(C,w,$){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const E=n.getRenderTarget(),A=n.getActiveCubeFace(),Q=n.getActiveMipmapLevel(),re=n.state;re.setBlending(ii),re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const ge=h!==Nn&&this.type===Nn,N=h===Nn&&this.type!==Nn;for(let W=0,q=C.length;W<q;W++){const se=C[W],ee=se.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;r.copy(ee.mapSize);const ce=ee.getFrameExtents();if(r.multiply(ce),s.copy(ee.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ce.x),r.x=s.x*ce.x,ee.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ce.y),r.y=s.y*ce.y,ee.mapSize.y=s.y)),ee.map===null||ge===!0||N===!0){const ve=this.type!==Nn?{minFilter:Dt,magFilter:Dt}:{};ee.map!==null&&ee.map.dispose(),ee.map=new wi(r.x,r.y,ve),ee.map.texture.name=se.name+".shadowMap",ee.camera.updateProjectionMatrix()}n.setRenderTarget(ee.map),n.clear();const ue=ee.getViewportCount();for(let ve=0;ve<ue;ve++){const me=ee.getViewport(ve);a.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),re.viewport(a),ee.updateMatrices(se,ve),i=ee.getFrustum(),T(w,$,ee.camera,se,this.type)}ee.isPointLightShadow!==!0&&this.type===Nn&&b(ee,$),ee.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(E,A,Q)};function b(C,w){const $=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new wi(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(w,null,$,d,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(w,null,$,m,_,null)}function S(C,w,$,E){let A=null;const Q=$.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(Q!==void 0)A=Q;else if(A=$.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const re=A.uuid,ge=w.uuid;let N=c[re];N===void 0&&(N={},c[re]=N);let W=N[ge];W===void 0&&(W=A.clone(),N[ge]=W,w.addEventListener("dispose",P)),A=W}if(A.visible=w.visible,A.wireframe=w.wireframe,E===Nn?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:f[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,$.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const re=n.properties.get(A);re.light=$}return A}function T(C,w,$,E,A){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&A===Nn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,C.matrixWorld);const ge=e.update(C),N=C.material;if(Array.isArray(N)){const W=ge.groups;for(let q=0,se=W.length;q<se;q++){const ee=W[q],ce=N[ee.materialIndex];if(ce&&ce.visible){const ue=S(C,ce,E,A);C.onBeforeShadow(n,C,w,$,ge,ue,ee),n.renderBufferDirect($,null,ge,ue,C,ee),C.onAfterShadow(n,C,w,$,ge,ue,ee)}}}else if(N.visible){const W=S(C,N,E,A);C.onBeforeShadow(n,C,w,$,ge,W,null),n.renderBufferDirect($,null,ge,W,C,null),C.onAfterShadow(n,C,w,$,ge,W,null)}}const re=C.children;for(let ge=0,N=re.length;ge<N;ge++)T(re[ge],w,$,E,A)}function P(C){C.target.removeEventListener("dispose",P);for(const $ in c){const E=c[$],A=C.target.uuid;A in E&&(E[A].dispose(),delete E[A])}}}function Ux(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const pe=new lt;let Me=null;const we=new lt(0,0,0,0);return{setMask:function(Re){Me!==Re&&!D&&(n.colorMask(Re,Re,Re,Re),Me=Re)},setLocked:function(Re){D=Re},setClear:function(Re,Xe,Be,et,_t){_t===!0&&(Re*=et,Xe*=et,Be*=et),pe.set(Re,Xe,Be,et),we.equals(pe)===!1&&(n.clearColor(Re,Xe,Be,et),we.copy(pe))},reset:function(){D=!1,Me=null,we.set(-1,0,0,0)}}}function s(){let D=!1,pe=null,Me=null,we=null;return{setTest:function(Re){Re?Fe(n.DEPTH_TEST):De(n.DEPTH_TEST)},setMask:function(Re){pe!==Re&&!D&&(n.depthMask(Re),pe=Re)},setFunc:function(Re){if(Me!==Re){switch(Re){case tm:n.depthFunc(n.NEVER);break;case nm:n.depthFunc(n.ALWAYS);break;case im:n.depthFunc(n.LESS);break;case Bs:n.depthFunc(n.LEQUAL);break;case rm:n.depthFunc(n.EQUAL);break;case sm:n.depthFunc(n.GEQUAL);break;case om:n.depthFunc(n.GREATER);break;case am:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Me=Re}},setLocked:function(Re){D=Re},setClear:function(Re){we!==Re&&(n.clearDepth(Re),we=Re)},reset:function(){D=!1,pe=null,Me=null,we=null}}}function a(){let D=!1,pe=null,Me=null,we=null,Re=null,Xe=null,Be=null,et=null,_t=null;return{setTest:function(rt){D||(rt?Fe(n.STENCIL_TEST):De(n.STENCIL_TEST))},setMask:function(rt){pe!==rt&&!D&&(n.stencilMask(rt),pe=rt)},setFunc:function(rt,Rt,pn){(Me!==rt||we!==Rt||Re!==pn)&&(n.stencilFunc(rt,Rt,pn),Me=rt,we=Rt,Re=pn)},setOp:function(rt,Rt,pn){(Xe!==rt||Be!==Rt||et!==pn)&&(n.stencilOp(rt,Rt,pn),Xe=rt,Be=Rt,et=pn)},setLocked:function(rt){D=rt},setClear:function(rt){_t!==rt&&(n.clearStencil(rt),_t=rt)},reset:function(){D=!1,pe=null,Me=null,we=null,Re=null,Xe=null,Be=null,et=null,_t=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let d={},m={},x=new WeakMap,_=[],p=null,h=!1,b=null,S=null,T=null,P=null,C=null,w=null,$=null,E=new Ke(0,0,0),A=0,Q=!1,re=null,ge=null,N=null,W=null,q=null;const se=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,ce=0;const ue=n.getParameter(n.VERSION);ue.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(ue)[1]),ee=ce>=1):ue.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),ee=ce>=2);let ve=null,me={};const ie=n.getParameter(n.SCISSOR_BOX),de=n.getParameter(n.VIEWPORT),be=new lt().fromArray(ie),Pe=new lt().fromArray(de);function Le(D,pe,Me,we){const Re=new Uint8Array(4),Xe=n.createTexture();n.bindTexture(D,Xe),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<Me;Be++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(pe,0,n.RGBA,1,1,we,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(pe+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return Xe}const Ne={};Ne[n.TEXTURE_2D]=Le(n.TEXTURE_2D,n.TEXTURE_2D,1),Ne[n.TEXTURE_CUBE_MAP]=Le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ne[n.TEXTURE_2D_ARRAY]=Le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ne[n.TEXTURE_3D]=Le(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Fe(n.DEPTH_TEST),l.setFunc(Bs),le(!1),M(kl),Fe(n.CULL_FACE),G(ii);function Fe(D){d[D]!==!0&&(n.enable(D),d[D]=!0)}function De(D){d[D]!==!1&&(n.disable(D),d[D]=!1)}function Ve(D,pe){return m[D]!==pe?(n.bindFramebuffer(D,pe),m[D]=pe,i&&(D===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=pe),D===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=pe)),!0):!1}function v(D,pe){let Me=_,we=!1;if(D)if(Me=x.get(pe),Me===void 0&&(Me=[],x.set(pe,Me)),D.isWebGLMultipleRenderTargets){const Re=D.texture;if(Me.length!==Re.length||Me[0]!==n.COLOR_ATTACHMENT0){for(let Xe=0,Be=Re.length;Xe<Be;Xe++)Me[Xe]=n.COLOR_ATTACHMENT0+Xe;Me.length=Re.length,we=!0}}else Me[0]!==n.COLOR_ATTACHMENT0&&(Me[0]=n.COLOR_ATTACHMENT0,we=!0);else Me[0]!==n.BACK&&(Me[0]=n.BACK,we=!0);we&&(t.isWebGL2?n.drawBuffers(Me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Me))}function U(D){return p!==D?(n.useProgram(D),p=D,!0):!1}const F={[Mi]:n.FUNC_ADD,[Hp]:n.FUNC_SUBTRACT,[Gp]:n.FUNC_REVERSE_SUBTRACT};if(i)F[Yl]=n.MIN,F[$l]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(F[Yl]=D.MIN_EXT,F[$l]=D.MAX_EXT)}const z={[Vp]:n.ZERO,[kp]:n.ONE,[Wp]:n.SRC_COLOR,[ma]:n.SRC_ALPHA,[Kp]:n.SRC_ALPHA_SATURATE,[$p]:n.DST_COLOR,[qp]:n.DST_ALPHA,[Xp]:n.ONE_MINUS_SRC_COLOR,[ga]:n.ONE_MINUS_SRC_ALPHA,[jp]:n.ONE_MINUS_DST_COLOR,[Yp]:n.ONE_MINUS_DST_ALPHA,[Zp]:n.CONSTANT_COLOR,[Jp]:n.ONE_MINUS_CONSTANT_COLOR,[Qp]:n.CONSTANT_ALPHA,[em]:n.ONE_MINUS_CONSTANT_ALPHA};function G(D,pe,Me,we,Re,Xe,Be,et,_t,rt){if(D===ii){h===!0&&(De(n.BLEND),h=!1);return}if(h===!1&&(Fe(n.BLEND),h=!0),D!==zp){if(D!==b||rt!==Q){if((S!==Mi||C!==Mi)&&(n.blendEquation(n.FUNC_ADD),S=Mi,C=Mi),rt)switch(D){case nr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wl:n.blendFunc(n.ONE,n.ONE);break;case Xl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ql:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case nr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Xl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ql:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,P=null,w=null,$=null,E.set(0,0,0),A=0,b=D,Q=rt}return}Re=Re||pe,Xe=Xe||Me,Be=Be||we,(pe!==S||Re!==C)&&(n.blendEquationSeparate(F[pe],F[Re]),S=pe,C=Re),(Me!==T||we!==P||Xe!==w||Be!==$)&&(n.blendFuncSeparate(z[Me],z[we],z[Xe],z[Be]),T=Me,P=we,w=Xe,$=Be),(et.equals(E)===!1||_t!==A)&&(n.blendColor(et.r,et.g,et.b,_t),E.copy(et),A=_t),b=D,Q=!1}function oe(D,pe){D.side===Hn?De(n.CULL_FACE):Fe(n.CULL_FACE);let Me=D.side===Ht;pe&&(Me=!Me),le(Me),D.blending===nr&&D.transparent===!1?G(ii):G(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const we=D.stencilWrite;c.setTest(we),we&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),R(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Fe(n.SAMPLE_ALPHA_TO_COVERAGE):De(n.SAMPLE_ALPHA_TO_COVERAGE)}function le(D){re!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),re=D)}function M(D){D!==Fp?(Fe(n.CULL_FACE),D!==ge&&(D===kl?n.cullFace(n.BACK):D===Op?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):De(n.CULL_FACE),ge=D}function g(D){D!==N&&(ee&&n.lineWidth(D),N=D)}function R(D,pe,Me){D?(Fe(n.POLYGON_OFFSET_FILL),(W!==pe||q!==Me)&&(n.polygonOffset(pe,Me),W=pe,q=Me)):De(n.POLYGON_OFFSET_FILL)}function X(D){D?Fe(n.SCISSOR_TEST):De(n.SCISSOR_TEST)}function H(D){D===void 0&&(D=n.TEXTURE0+se-1),ve!==D&&(n.activeTexture(D),ve=D)}function Y(D,pe,Me){Me===void 0&&(ve===null?Me=n.TEXTURE0+se-1:Me=ve);let we=me[Me];we===void 0&&(we={type:void 0,texture:void 0},me[Me]=we),(we.type!==D||we.texture!==pe)&&(ve!==Me&&(n.activeTexture(Me),ve=Me),n.bindTexture(D,pe||Ne[D]),we.type=D,we.texture=pe)}function he(){const D=me[ve];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function fe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function B(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function I(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function L(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function k(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(D){be.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),be.copy(D))}function Ee(D){Pe.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Pe.copy(D))}function Ae(D,pe){let Me=f.get(pe);Me===void 0&&(Me=new WeakMap,f.set(pe,Me));let we=Me.get(D);we===void 0&&(we=n.getUniformBlockIndex(pe,D.name),Me.set(D,we))}function Te(D,pe){const we=f.get(pe).get(D);u.get(pe)!==we&&(n.uniformBlockBinding(pe,we,D.__bindingPointIndex),u.set(pe,we))}function ae(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ve=null,me={},m={},x=new WeakMap,_=[],p=null,h=!1,b=null,S=null,T=null,P=null,C=null,w=null,$=null,E=new Ke(0,0,0),A=0,Q=!1,re=null,ge=null,N=null,W=null,q=null,be.set(0,0,n.canvas.width,n.canvas.height),Pe.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Fe,disable:De,bindFramebuffer:Ve,drawBuffers:v,useProgram:U,setBlending:G,setMaterial:oe,setFlipSided:le,setCullFace:M,setLineWidth:g,setPolygonOffset:R,setScissorTest:X,activeTexture:H,bindTexture:Y,unbindTexture:he,compressedTexImage2D:fe,compressedTexImage3D:xe,texImage2D:j,texImage3D:te,updateUBOMapping:Ae,uniformBlockBinding:Te,texStorage2D:L,texStorage3D:k,texSubImage2D:Z,texSubImage3D:B,compressedTexSubImage2D:I,compressedTexSubImage3D:Se,scissor:_e,viewport:Ee,reset:ae}}function Ix(n,e,t,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(M,g){return m?new OffscreenCanvas(M,g):ks("canvas")}function _(M,g,R,X){let H=1;if((M.width>X||M.height>X)&&(H=X/Math.max(M.width,M.height)),H<1||g===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const Y=g?ya:Math.floor,he=Y(H*M.width),fe=Y(H*M.height);f===void 0&&(f=x(he,fe));const xe=R?x(he,fe):f;return xe.width=he,xe.height=fe,xe.getContext("2d").drawImage(M,0,0,he,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+he+"x"+fe+")."),xe}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function p(M){return Tc(M.width)&&Tc(M.height)}function h(M){return o?!1:M.wrapS!==ln||M.wrapT!==ln||M.minFilter!==Dt&&M.minFilter!==Qt}function b(M,g){return M.generateMipmaps&&g&&M.minFilter!==Dt&&M.minFilter!==Qt}function S(M){n.generateMipmap(M)}function T(M,g,R,X,H=!1){if(o===!1)return g;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let Y=g;if(g===n.RED&&(R===n.FLOAT&&(Y=n.R32F),R===n.HALF_FLOAT&&(Y=n.R16F),R===n.UNSIGNED_BYTE&&(Y=n.R8)),g===n.RED_INTEGER&&(R===n.UNSIGNED_BYTE&&(Y=n.R8UI),R===n.UNSIGNED_SHORT&&(Y=n.R16UI),R===n.UNSIGNED_INT&&(Y=n.R32UI),R===n.BYTE&&(Y=n.R8I),R===n.SHORT&&(Y=n.R16I),R===n.INT&&(Y=n.R32I)),g===n.RG&&(R===n.FLOAT&&(Y=n.RG32F),R===n.HALF_FLOAT&&(Y=n.RG16F),R===n.UNSIGNED_BYTE&&(Y=n.RG8)),g===n.RGBA){const he=H?zs:tt.getTransfer(X);R===n.FLOAT&&(Y=n.RGBA32F),R===n.HALF_FLOAT&&(Y=n.RGBA16F),R===n.UNSIGNED_BYTE&&(Y=he===ot?n.SRGB8_ALPHA8:n.RGBA8),R===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),R===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function P(M,g,R){return b(M,R)===!0||M.isFramebufferTexture&&M.minFilter!==Dt&&M.minFilter!==Qt?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function C(M){return M===Dt||M===jl||M===Eo?n.NEAREST:n.LINEAR}function w(M){const g=M.target;g.removeEventListener("dispose",w),E(g),g.isVideoTexture&&u.delete(g)}function $(M){const g=M.target;g.removeEventListener("dispose",$),Q(g)}function E(M){const g=i.get(M);if(g.__webglInit===void 0)return;const R=M.source,X=d.get(R);if(X){const H=X[g.__cacheKey];H.usedTimes--,H.usedTimes===0&&A(M),Object.keys(X).length===0&&d.delete(R)}i.remove(M)}function A(M){const g=i.get(M);n.deleteTexture(g.__webglTexture);const R=M.source,X=d.get(R);delete X[g.__cacheKey],a.memory.textures--}function Q(M){const g=M.texture,R=i.get(M),X=i.get(g);if(X.__webglTexture!==void 0&&(n.deleteTexture(X.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(R.__webglFramebuffer[H]))for(let Y=0;Y<R.__webglFramebuffer[H].length;Y++)n.deleteFramebuffer(R.__webglFramebuffer[H][Y]);else n.deleteFramebuffer(R.__webglFramebuffer[H]);R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[H])}else{if(Array.isArray(R.__webglFramebuffer))for(let H=0;H<R.__webglFramebuffer.length;H++)n.deleteFramebuffer(R.__webglFramebuffer[H]);else n.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let H=0;H<R.__webglColorRenderbuffer.length;H++)R.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[H]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let H=0,Y=g.length;H<Y;H++){const he=i.get(g[H]);he.__webglTexture&&(n.deleteTexture(he.__webglTexture),a.memory.textures--),i.remove(g[H])}i.remove(g),i.remove(M)}let re=0;function ge(){re=0}function N(){const M=re;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),re+=1,M}function W(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function q(M,g){const R=i.get(M);if(M.isVideoTexture&&oe(M),M.isRenderTargetTexture===!1&&M.version>0&&R.__version!==M.version){const X=M.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(R,M,g);return}}t.bindTexture(n.TEXTURE_2D,R.__webglTexture,n.TEXTURE0+g)}function se(M,g){const R=i.get(M);if(M.version>0&&R.__version!==M.version){be(R,M,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,R.__webglTexture,n.TEXTURE0+g)}function ee(M,g){const R=i.get(M);if(M.version>0&&R.__version!==M.version){be(R,M,g);return}t.bindTexture(n.TEXTURE_3D,R.__webglTexture,n.TEXTURE0+g)}function ce(M,g){const R=i.get(M);if(M.version>0&&R.__version!==M.version){Pe(R,M,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+g)}const ue={[xa]:n.REPEAT,[ln]:n.CLAMP_TO_EDGE,[Ma]:n.MIRRORED_REPEAT},ve={[Dt]:n.NEAREST,[jl]:n.NEAREST_MIPMAP_NEAREST,[Eo]:n.NEAREST_MIPMAP_LINEAR,[Qt]:n.LINEAR,[gm]:n.LINEAR_MIPMAP_NEAREST,[Br]:n.LINEAR_MIPMAP_LINEAR},me={[Rm]:n.NEVER,[Im]:n.ALWAYS,[Cm]:n.LESS,[Hf]:n.LEQUAL,[Lm]:n.EQUAL,[Um]:n.GEQUAL,[Pm]:n.GREATER,[Dm]:n.NOTEQUAL};function ie(M,g,R){if(R?(n.texParameteri(M,n.TEXTURE_WRAP_S,ue[g.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,ue[g.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,ue[g.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,ve[g.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,ve[g.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(g.wrapS!==ln||g.wrapT!==ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,C(g.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,C(g.minFilter)),g.minFilter!==Dt&&g.minFilter!==Qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,me[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const X=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===Dt||g.minFilter!==Eo&&g.minFilter!==Br||g.type===ti&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===zr&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(M,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function de(M,g){let R=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",w));const X=g.source;let H=d.get(X);H===void 0&&(H={},d.set(X,H));const Y=W(g);if(Y!==M.__cacheKey){H[Y]===void 0&&(H[Y]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,R=!0),H[Y].usedTimes++;const he=H[M.__cacheKey];he!==void 0&&(H[M.__cacheKey].usedTimes--,he.usedTimes===0&&A(g)),M.__cacheKey=Y,M.__webglTexture=H[Y].texture}return R}function be(M,g,R){let X=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(X=n.TEXTURE_3D);const H=de(M,g),Y=g.source;t.bindTexture(X,M.__webglTexture,n.TEXTURE0+R);const he=i.get(Y);if(Y.version!==he.__version||H===!0){t.activeTexture(n.TEXTURE0+R);const fe=tt.getPrimaries(tt.workingColorSpace),xe=g.colorSpace===tn?null:tt.getPrimaries(g.colorSpace),Z=g.colorSpace===tn||fe===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const B=h(g)&&p(g.image)===!1;let I=_(g.image,B,!1,r.maxTextureSize);I=le(g,I);const Se=p(I)||o,L=s.convert(g.format,g.colorSpace);let k=s.convert(g.type),j=T(g.internalFormat,L,k,g.colorSpace,g.isVideoTexture);ie(X,g,Se);let te;const _e=g.mipmaps,Ee=o&&g.isVideoTexture!==!0&&j!==Of,Ae=he.__version===void 0||H===!0,Te=P(g,I,Se);if(g.isDepthTexture)j=n.DEPTH_COMPONENT,o?g.type===ti?j=n.DEPTH_COMPONENT32F:g.type===ei?j=n.DEPTH_COMPONENT24:g.type===Ti?j=n.DEPTH24_STENCIL8:j=n.DEPTH_COMPONENT16:g.type===ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===bi&&j===n.DEPTH_COMPONENT&&g.type!==$a&&g.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=ei,k=s.convert(g.type)),g.format===cr&&j===n.DEPTH_COMPONENT&&(j=n.DEPTH_STENCIL,g.type!==Ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Ti,k=s.convert(g.type))),Ae&&(Ee?t.texStorage2D(n.TEXTURE_2D,1,j,I.width,I.height):t.texImage2D(n.TEXTURE_2D,0,j,I.width,I.height,0,L,k,null));else if(g.isDataTexture)if(_e.length>0&&Se){Ee&&Ae&&t.texStorage2D(n.TEXTURE_2D,Te,j,_e[0].width,_e[0].height);for(let ae=0,D=_e.length;ae<D;ae++)te=_e[ae],Ee?t.texSubImage2D(n.TEXTURE_2D,ae,0,0,te.width,te.height,L,k,te.data):t.texImage2D(n.TEXTURE_2D,ae,j,te.width,te.height,0,L,k,te.data);g.generateMipmaps=!1}else Ee?(Ae&&t.texStorage2D(n.TEXTURE_2D,Te,j,I.width,I.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,I.width,I.height,L,k,I.data)):t.texImage2D(n.TEXTURE_2D,0,j,I.width,I.height,0,L,k,I.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ee&&Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,j,_e[0].width,_e[0].height,I.depth);for(let ae=0,D=_e.length;ae<D;ae++)te=_e[ae],g.format!==cn?L!==null?Ee?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,te.width,te.height,I.depth,L,te.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,j,te.width,te.height,I.depth,0,te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,te.width,te.height,I.depth,L,k,te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,j,te.width,te.height,I.depth,0,L,k,te.data)}else{Ee&&Ae&&t.texStorage2D(n.TEXTURE_2D,Te,j,_e[0].width,_e[0].height);for(let ae=0,D=_e.length;ae<D;ae++)te=_e[ae],g.format!==cn?L!==null?Ee?t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,te.width,te.height,L,te.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,j,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?t.texSubImage2D(n.TEXTURE_2D,ae,0,0,te.width,te.height,L,k,te.data):t.texImage2D(n.TEXTURE_2D,ae,j,te.width,te.height,0,L,k,te.data)}else if(g.isDataArrayTexture)Ee?(Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,j,I.width,I.height,I.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,I.width,I.height,I.depth,L,k,I.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,j,I.width,I.height,I.depth,0,L,k,I.data);else if(g.isData3DTexture)Ee?(Ae&&t.texStorage3D(n.TEXTURE_3D,Te,j,I.width,I.height,I.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,I.width,I.height,I.depth,L,k,I.data)):t.texImage3D(n.TEXTURE_3D,0,j,I.width,I.height,I.depth,0,L,k,I.data);else if(g.isFramebufferTexture){if(Ae)if(Ee)t.texStorage2D(n.TEXTURE_2D,Te,j,I.width,I.height);else{let ae=I.width,D=I.height;for(let pe=0;pe<Te;pe++)t.texImage2D(n.TEXTURE_2D,pe,j,ae,D,0,L,k,null),ae>>=1,D>>=1}}else if(_e.length>0&&Se){Ee&&Ae&&t.texStorage2D(n.TEXTURE_2D,Te,j,_e[0].width,_e[0].height);for(let ae=0,D=_e.length;ae<D;ae++)te=_e[ae],Ee?t.texSubImage2D(n.TEXTURE_2D,ae,0,0,L,k,te):t.texImage2D(n.TEXTURE_2D,ae,j,L,k,te);g.generateMipmaps=!1}else Ee?(Ae&&t.texStorage2D(n.TEXTURE_2D,Te,j,I.width,I.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,L,k,I)):t.texImage2D(n.TEXTURE_2D,0,j,L,k,I);b(g,Se)&&S(X),he.__version=Y.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function Pe(M,g,R){if(g.image.length!==6)return;const X=de(M,g),H=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+R);const Y=i.get(H);if(H.version!==Y.__version||X===!0){t.activeTexture(n.TEXTURE0+R);const he=tt.getPrimaries(tt.workingColorSpace),fe=g.colorSpace===tn?null:tt.getPrimaries(g.colorSpace),xe=g.colorSpace===tn||he===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Z=g.isCompressedTexture||g.image[0].isCompressedTexture,B=g.image[0]&&g.image[0].isDataTexture,I=[];for(let ae=0;ae<6;ae++)!Z&&!B?I[ae]=_(g.image[ae],!1,!0,r.maxCubemapSize):I[ae]=B?g.image[ae].image:g.image[ae],I[ae]=le(g,I[ae]);const Se=I[0],L=p(Se)||o,k=s.convert(g.format,g.colorSpace),j=s.convert(g.type),te=T(g.internalFormat,k,j,g.colorSpace),_e=o&&g.isVideoTexture!==!0,Ee=Y.__version===void 0||X===!0;let Ae=P(g,Se,L);ie(n.TEXTURE_CUBE_MAP,g,L);let Te;if(Z){_e&&Ee&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,te,Se.width,Se.height);for(let ae=0;ae<6;ae++){Te=I[ae].mipmaps;for(let D=0;D<Te.length;D++){const pe=Te[D];g.format!==cn?k!==null?_e?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,D,0,0,pe.width,pe.height,k,pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,D,te,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,D,0,0,pe.width,pe.height,k,j,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,D,te,pe.width,pe.height,0,k,j,pe.data)}}}else{Te=g.mipmaps,_e&&Ee&&(Te.length>0&&Ae++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,te,I[0].width,I[0].height));for(let ae=0;ae<6;ae++)if(B){_e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,I[ae].width,I[ae].height,k,j,I[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,te,I[ae].width,I[ae].height,0,k,j,I[ae].data);for(let D=0;D<Te.length;D++){const Me=Te[D].image[ae].image;_e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,D+1,0,0,Me.width,Me.height,k,j,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,D+1,te,Me.width,Me.height,0,k,j,Me.data)}}else{_e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,k,j,I[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,te,k,j,I[ae]);for(let D=0;D<Te.length;D++){const pe=Te[D];_e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,D+1,0,0,k,j,pe.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,D+1,te,k,j,pe.image[ae])}}}b(g,L)&&S(n.TEXTURE_CUBE_MAP),Y.__version=H.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function Le(M,g,R,X,H,Y){const he=s.convert(R.format,R.colorSpace),fe=s.convert(R.type),xe=T(R.internalFormat,he,fe,R.colorSpace);if(!i.get(g).__hasExternalTextures){const B=Math.max(1,g.width>>Y),I=Math.max(1,g.height>>Y);H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?t.texImage3D(H,Y,xe,B,I,g.depth,0,he,fe,null):t.texImage2D(H,Y,xe,B,I,0,he,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),G(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,H,i.get(R).__webglTexture,0,z(g)):(H===n.TEXTURE_2D||H>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,H,i.get(R).__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(M,g,R){if(n.bindRenderbuffer(n.RENDERBUFFER,M),g.depthBuffer&&!g.stencilBuffer){let X=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(R||G(g)){const H=g.depthTexture;H&&H.isDepthTexture&&(H.type===ti?X=n.DEPTH_COMPONENT32F:H.type===ei&&(X=n.DEPTH_COMPONENT24));const Y=z(g);G(g)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Y,X,g.width,g.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,X,g.width,g.height)}else n.renderbufferStorage(n.RENDERBUFFER,X,g.width,g.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(g.depthBuffer&&g.stencilBuffer){const X=z(g);R&&G(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,X,n.DEPTH24_STENCIL8,g.width,g.height):G(g)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,X,n.DEPTH24_STENCIL8,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{const X=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let H=0;H<X.length;H++){const Y=X[H],he=s.convert(Y.format,Y.colorSpace),fe=s.convert(Y.type),xe=T(Y.internalFormat,he,fe,Y.colorSpace),Z=z(g);R&&G(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,xe,g.width,g.height):G(g)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Z,xe,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,xe,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Fe(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),q(g.depthTexture,0);const X=i.get(g.depthTexture).__webglTexture,H=z(g);if(g.depthTexture.format===bi)G(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0);else if(g.depthTexture.format===cr)G(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function De(M){const g=i.get(M),R=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");Fe(g.__webglFramebuffer,M)}else if(R){g.__webglDepthbuffer=[];for(let X=0;X<6;X++)t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[X]),g.__webglDepthbuffer[X]=n.createRenderbuffer(),Ne(g.__webglDepthbuffer[X],M,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),Ne(g.__webglDepthbuffer,M,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(M,g,R){const X=i.get(M);g!==void 0&&Le(X.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),R!==void 0&&De(M)}function v(M){const g=M.texture,R=i.get(M),X=i.get(g);M.addEventListener("dispose",$),M.isWebGLMultipleRenderTargets!==!0&&(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=g.version,a.memory.textures++);const H=M.isWebGLCubeRenderTarget===!0,Y=M.isWebGLMultipleRenderTargets===!0,he=p(M)||o;if(H){R.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(o&&g.mipmaps&&g.mipmaps.length>0){R.__webglFramebuffer[fe]=[];for(let xe=0;xe<g.mipmaps.length;xe++)R.__webglFramebuffer[fe][xe]=n.createFramebuffer()}else R.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(o&&g.mipmaps&&g.mipmaps.length>0){R.__webglFramebuffer=[];for(let fe=0;fe<g.mipmaps.length;fe++)R.__webglFramebuffer[fe]=n.createFramebuffer()}else R.__webglFramebuffer=n.createFramebuffer();if(Y)if(r.drawBuffers){const fe=M.texture;for(let xe=0,Z=fe.length;xe<Z;xe++){const B=i.get(fe[xe]);B.__webglTexture===void 0&&(B.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&G(M)===!1){const fe=Y?g:[g];R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let xe=0;xe<fe.length;xe++){const Z=fe[xe];R.__webglColorRenderbuffer[xe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,R.__webglColorRenderbuffer[xe]);const B=s.convert(Z.format,Z.colorSpace),I=s.convert(Z.type),Se=T(Z.internalFormat,B,I,Z.colorSpace,M.isXRRenderTarget===!0),L=z(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,L,Se,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,R.__webglColorRenderbuffer[xe])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),Ne(R.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),ie(n.TEXTURE_CUBE_MAP,g,he);for(let fe=0;fe<6;fe++)if(o&&g.mipmaps&&g.mipmaps.length>0)for(let xe=0;xe<g.mipmaps.length;xe++)Le(R.__webglFramebuffer[fe][xe],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe);else Le(R.__webglFramebuffer[fe],M,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);b(g,he)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Y){const fe=M.texture;for(let xe=0,Z=fe.length;xe<Z;xe++){const B=fe[xe],I=i.get(B);t.bindTexture(n.TEXTURE_2D,I.__webglTexture),ie(n.TEXTURE_2D,B,he),Le(R.__webglFramebuffer,M,B,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,0),b(B,he)&&S(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?fe=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,X.__webglTexture),ie(fe,g,he),o&&g.mipmaps&&g.mipmaps.length>0)for(let xe=0;xe<g.mipmaps.length;xe++)Le(R.__webglFramebuffer[xe],M,g,n.COLOR_ATTACHMENT0,fe,xe);else Le(R.__webglFramebuffer,M,g,n.COLOR_ATTACHMENT0,fe,0);b(g,he)&&S(fe),t.unbindTexture()}M.depthBuffer&&De(M)}function U(M){const g=p(M)||o,R=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let X=0,H=R.length;X<H;X++){const Y=R[X];if(b(Y,g)){const he=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,fe=i.get(Y).__webglTexture;t.bindTexture(he,fe),S(he),t.unbindTexture()}}}function F(M){if(o&&M.samples>0&&G(M)===!1){const g=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],R=M.width,X=M.height;let H=n.COLOR_BUFFER_BIT;const Y=[],he=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(M),xe=M.isWebGLMultipleRenderTargets===!0;if(xe)for(let Z=0;Z<g.length;Z++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Z=0;Z<g.length;Z++){Y.push(n.COLOR_ATTACHMENT0+Z),M.depthBuffer&&Y.push(he);const B=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(B===!1&&(M.depthBuffer&&(H|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(H|=n.STENCIL_BUFFER_BIT)),xe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[Z]),B===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[he]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[he])),xe){const I=i.get(g[Z]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,I,0)}n.blitFramebuffer(0,0,R,X,0,0,R,X,H,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Y)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xe)for(let Z=0;Z<g.length;Z++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,fe.__webglColorRenderbuffer[Z]);const B=i.get(g[Z]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.TEXTURE_2D,B,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function z(M){return Math.min(r.maxSamples,M.samples)}function G(M){const g=i.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function oe(M){const g=a.render.frame;u.get(M)!==g&&(u.set(M,g),M.update())}function le(M,g){const R=M.colorSpace,X=M.format,H=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Sa||R!==Xn&&R!==tn&&(tt.getTransfer(R)===ot?o===!1?e.has("EXT_sRGB")===!0&&X===cn?(M.format=Sa,M.minFilter=Qt,M.generateMipmaps=!1):g=Vf.sRGBToLinear(g):(X!==cn||H!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),g}this.allocateTextureUnit=N,this.resetTextureUnits=ge,this.setTexture2D=q,this.setTexture2DArray=se,this.setTexture3D=ee,this.setTextureCube=ce,this.rebindTextures=Ve,this.setupRenderTarget=v,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=G}function Nx(n,e,t){const i=t.isWebGL2;function r(s,a=tn){let o;const l=tt.getTransfer(a);if(s===si)return n.UNSIGNED_BYTE;if(s===Df)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Uf)return n.UNSIGNED_SHORT_5_5_5_1;if(s===_m)return n.BYTE;if(s===vm)return n.SHORT;if(s===$a)return n.UNSIGNED_SHORT;if(s===Pf)return n.INT;if(s===ei)return n.UNSIGNED_INT;if(s===ti)return n.FLOAT;if(s===zr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===xm)return n.ALPHA;if(s===cn)return n.RGBA;if(s===Mm)return n.LUMINANCE;if(s===Sm)return n.LUMINANCE_ALPHA;if(s===bi)return n.DEPTH_COMPONENT;if(s===cr)return n.DEPTH_STENCIL;if(s===Sa)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Em)return n.RED;if(s===If)return n.RED_INTEGER;if(s===ym)return n.RG;if(s===Nf)return n.RG_INTEGER;if(s===Ff)return n.RGBA_INTEGER;if(s===yo||s===To||s===bo||s===Ao)if(l===ot)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===yo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===To)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ao)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===yo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===To)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===bo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ao)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Kl||s===Zl||s===Jl||s===Ql)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Kl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Zl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Jl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ql)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Of)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ec||s===tc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===ec)return l===ot?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===tc)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===nc||s===ic||s===rc||s===sc||s===oc||s===ac||s===lc||s===cc||s===uc||s===fc||s===hc||s===dc||s===pc||s===mc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===nc)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ic)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===rc)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===sc)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===oc)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ac)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===lc)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===cc)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===uc)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===fc)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===hc)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dc)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===pc)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===mc)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===wo||s===gc||s===_c)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===wo)return l===ot?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===gc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===_c)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Tm||s===vc||s===xc||s===Mc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===wo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===vc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===xc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Mc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ti?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Fx extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xs extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ox={type:"move"};class Zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),h=this._getHandJoint(c,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&d>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ox)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new xs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Bx extends fr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,x=null;const _=t.getContextAttributes();let p=null,h=null;const b=[],S=[],T=new Ze;let P=null;const C=new Xt;C.layers.enable(1),C.viewport=new lt;const w=new Xt;w.layers.enable(2),w.viewport=new lt;const $=[C,w],E=new Fx;E.layers.enable(1),E.layers.enable(2);let A=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let de=b[ie];return de===void 0&&(de=new Zo,b[ie]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ie){let de=b[ie];return de===void 0&&(de=new Zo,b[ie]=de),de.getGripSpace()},this.getHand=function(ie){let de=b[ie];return de===void 0&&(de=new Zo,b[ie]=de),de.getHandSpace()};function re(ie){const de=S.indexOf(ie.inputSource);if(de===-1)return;const be=b[de];be!==void 0&&(be.update(ie.inputSource,ie.frame,c||a),be.dispatchEvent({type:ie.type,data:ie.inputSource}))}function ge(){r.removeEventListener("select",re),r.removeEventListener("selectstart",re),r.removeEventListener("selectend",re),r.removeEventListener("squeeze",re),r.removeEventListener("squeezestart",re),r.removeEventListener("squeezeend",re),r.removeEventListener("end",ge),r.removeEventListener("inputsourceschange",N);for(let ie=0;ie<b.length;ie++){const de=S[ie];de!==null&&(S[ie]=null,b[ie].disconnect(de))}A=null,Q=null,e.setRenderTarget(p),m=null,d=null,f=null,r=null,h=null,me.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){o=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",re),r.addEventListener("selectstart",re),r.addEventListener("selectend",re),r.addEventListener("squeeze",re),r.addEventListener("squeezestart",re),r.addEventListener("squeezeend",re),r.addEventListener("end",ge),r.addEventListener("inputsourceschange",N),_.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const de={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),h=new wi(m.framebufferWidth,m.framebufferHeight,{format:cn,type:si,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let de=null,be=null,Pe=null;_.depth&&(Pe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=_.stencil?cr:bi,be=_.stencil?Ti:ei);const Le={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Le),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),h=new wi(d.textureWidth,d.textureHeight,{format:cn,type:si,depthTexture:new Qf(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ne=e.properties.get(h);Ne.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),me.setContext(r),me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function N(ie){for(let de=0;de<ie.removed.length;de++){const be=ie.removed[de],Pe=S.indexOf(be);Pe>=0&&(S[Pe]=null,b[Pe].disconnect(be))}for(let de=0;de<ie.added.length;de++){const be=ie.added[de];let Pe=S.indexOf(be);if(Pe===-1){for(let Ne=0;Ne<b.length;Ne++)if(Ne>=S.length){S.push(be),Pe=Ne;break}else if(S[Ne]===null){S[Ne]=be,Pe=Ne;break}if(Pe===-1)break}const Le=b[Pe];Le&&Le.connect(be)}}const W=new O,q=new O;function se(ie,de,be){W.setFromMatrixPosition(de.matrixWorld),q.setFromMatrixPosition(be.matrixWorld);const Pe=W.distanceTo(q),Le=de.projectionMatrix.elements,Ne=be.projectionMatrix.elements,Fe=Le[14]/(Le[10]-1),De=Le[14]/(Le[10]+1),Ve=(Le[9]+1)/Le[5],v=(Le[9]-1)/Le[5],U=(Le[8]-1)/Le[0],F=(Ne[8]+1)/Ne[0],z=Fe*U,G=Fe*F,oe=Pe/(-U+F),le=oe*-U;de.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(le),ie.translateZ(oe),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert();const M=Fe+oe,g=De+oe,R=z-le,X=G+(Pe-le),H=Ve*De/g*M,Y=v*De/g*M;ie.projectionMatrix.makePerspective(R,X,H,Y,M,g),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}function ee(ie,de){de===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(de.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;E.near=w.near=C.near=ie.near,E.far=w.far=C.far=ie.far,(A!==E.near||Q!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),A=E.near,Q=E.far);const de=ie.parent,be=E.cameras;ee(E,de);for(let Pe=0;Pe<be.length;Pe++)ee(be[Pe],de);be.length===2?se(E,C,w):E.projectionMatrix.copy(C.projectionMatrix),ce(ie,E,de)};function ce(ie,de,be){be===null?ie.matrix.copy(de.matrixWorld):(ie.matrix.copy(be.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(de.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(de.projectionMatrix),ie.projectionMatrixInverse.copy(de.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Ea*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(ie){l=ie,d!==null&&(d.fixedFoveation=ie),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ie)};let ue=null;function ve(ie,de){if(u=de.getViewerPose(c||a),x=de,u!==null){const be=u.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let Pe=!1;be.length!==E.cameras.length&&(E.cameras.length=0,Pe=!0);for(let Le=0;Le<be.length;Le++){const Ne=be[Le];let Fe=null;if(m!==null)Fe=m.getViewport(Ne);else{const Ve=f.getViewSubImage(d,Ne);Fe=Ve.viewport,Le===0&&(e.setRenderTargetTextures(h,Ve.colorTexture,d.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(h))}let De=$[Le];De===void 0&&(De=new Xt,De.layers.enable(Le),De.viewport=new lt,$[Le]=De),De.matrix.fromArray(Ne.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Ne.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Le===0&&(E.matrix.copy(De.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Pe===!0&&E.cameras.push(De)}}for(let be=0;be<b.length;be++){const Pe=S[be],Le=b[be];Pe!==null&&Le!==void 0&&Le.update(Pe,de,c||a)}ue&&ue(ie,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),x=null}const me=new Zf;me.setAnimationLoop(ve),this.setAnimationLoop=function(ie){ue=ie},this.dispose=function(){}}}function zx(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,$f(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,b,S,T){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,T)):h.isMeshMatcapMaterial?(s(p,h),x(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),_(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,b,S):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Ht&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Ht&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const b=e.get(h).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const S=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*S,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,b,S){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*b,p.scale.value=S*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,b){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ht&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){const b=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Hx(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,S){const T=S.program;i.uniformBlockBinding(b,T)}function c(b,S){let T=r[b.id];T===void 0&&(x(b),T=u(b),r[b.id]=T,b.addEventListener("dispose",p));const P=S.program;i.updateUBOMapping(b,P);const C=e.render.frame;s[b.id]!==C&&(d(b),s[b.id]=C)}function u(b){const S=f();b.__bindingPointIndex=S;const T=n.createBuffer(),P=b.__size,C=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,P,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,T),T}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const S=r[b.id],T=b.uniforms,P=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let C=0,w=T.length;C<w;C++){const $=Array.isArray(T[C])?T[C]:[T[C]];for(let E=0,A=$.length;E<A;E++){const Q=$[E];if(m(Q,C,E,P)===!0){const re=Q.__offset,ge=Array.isArray(Q.value)?Q.value:[Q.value];let N=0;for(let W=0;W<ge.length;W++){const q=ge[W],se=_(q);typeof q=="number"||typeof q=="boolean"?(Q.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,re+N,Q.__data)):q.isMatrix3?(Q.__data[0]=q.elements[0],Q.__data[1]=q.elements[1],Q.__data[2]=q.elements[2],Q.__data[3]=0,Q.__data[4]=q.elements[3],Q.__data[5]=q.elements[4],Q.__data[6]=q.elements[5],Q.__data[7]=0,Q.__data[8]=q.elements[6],Q.__data[9]=q.elements[7],Q.__data[10]=q.elements[8],Q.__data[11]=0):(q.toArray(Q.__data,N),N+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,re,Q.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,S,T,P){const C=b.value,w=S+"_"+T;if(P[w]===void 0)return typeof C=="number"||typeof C=="boolean"?P[w]=C:P[w]=C.clone(),!0;{const $=P[w];if(typeof C=="number"||typeof C=="boolean"){if($!==C)return P[w]=C,!0}else if($.equals(C)===!1)return $.copy(C),!0}return!1}function x(b){const S=b.uniforms;let T=0;const P=16;for(let w=0,$=S.length;w<$;w++){const E=Array.isArray(S[w])?S[w]:[S[w]];for(let A=0,Q=E.length;A<Q;A++){const re=E[A],ge=Array.isArray(re.value)?re.value:[re.value];for(let N=0,W=ge.length;N<W;N++){const q=ge[N],se=_(q),ee=T%P;ee!==0&&P-ee<se.boundary&&(T+=P-ee),re.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=T,T+=se.storage}}}const C=T%P;return C>0&&(T+=P-C),b.__size=T,b.__cache={},this}function _(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function p(b){const S=b.target;S.removeEventListener("dispose",p);const T=a.indexOf(S.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function h(){for(const b in r)n.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class sh{constructor(e={}){const{canvas:t=Fm(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),x=new Int32Array(4);let _=null,p=null;const h=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=St,this._useLegacyLights=!1,this.toneMapping=ri,this.toneMappingExposure=1;const S=this;let T=!1,P=0,C=0,w=null,$=-1,E=null;const A=new lt,Q=new lt;let re=null;const ge=new Ke(0);let N=0,W=t.width,q=t.height,se=1,ee=null,ce=null;const ue=new lt(0,0,W,q),ve=new lt(0,0,W,q);let me=!1;const ie=new Qa;let de=!1,be=!1,Pe=null;const Le=new ht,Ne=new Ze,Fe=new O,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return w===null?se:1}let v=i;function U(y,V){for(let J=0;J<y.length;J++){const ne=y[J],K=t.getContext(ne,V);if(K!==null)return K}return null}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qa}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",pe,!1),v===null){const V=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&V.shift(),v=U(V,y),v===null)throw U(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&v instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),v.getShaderPrecisionFormat===void 0&&(v.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let F,z,G,oe,le,M,g,R,X,H,Y,he,fe,xe,Z,B,I,Se,L,k,j,te,_e,Ee;function Ae(){F=new Kv(v),z=new Wv(v,F,e),F.init(z),te=new Nx(v,F,z),G=new Ux(v,F,z),oe=new Qv(v),le=new xx,M=new Ix(v,F,G,le,z,te,oe),g=new qv(S),R=new jv(S),X=new ag(v,z),_e=new Vv(v,F,X,z),H=new Zv(v,X,oe,_e),Y=new i0(v,H,X,oe),L=new n0(v,z,M),B=new Xv(le),he=new vx(S,g,R,F,z,_e,B),fe=new zx(S,le),xe=new Sx,Z=new wx(F,z),Se=new Gv(S,g,R,G,Y,d,l),I=new Dx(S,Y,z),Ee=new Hx(v,oe,z,G),k=new kv(v,F,oe,z),j=new Jv(v,F,oe,z),oe.programs=he.programs,S.capabilities=z,S.extensions=F,S.properties=le,S.renderLists=xe,S.shadowMap=I,S.state=G,S.info=oe}Ae();const Te=new Bx(S,v);this.xr=Te,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const y=F.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=F.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(y){y!==void 0&&(se=y,this.setSize(W,q,!1))},this.getSize=function(y){return y.set(W,q)},this.setSize=function(y,V,J=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=y,q=V,t.width=Math.floor(y*se),t.height=Math.floor(V*se),J===!0&&(t.style.width=y+"px",t.style.height=V+"px"),this.setViewport(0,0,y,V)},this.getDrawingBufferSize=function(y){return y.set(W*se,q*se).floor()},this.setDrawingBufferSize=function(y,V,J){W=y,q=V,se=J,t.width=Math.floor(y*J),t.height=Math.floor(V*J),this.setViewport(0,0,y,V)},this.getCurrentViewport=function(y){return y.copy(A)},this.getViewport=function(y){return y.copy(ue)},this.setViewport=function(y,V,J,ne){y.isVector4?ue.set(y.x,y.y,y.z,y.w):ue.set(y,V,J,ne),G.viewport(A.copy(ue).multiplyScalar(se).floor())},this.getScissor=function(y){return y.copy(ve)},this.setScissor=function(y,V,J,ne){y.isVector4?ve.set(y.x,y.y,y.z,y.w):ve.set(y,V,J,ne),G.scissor(Q.copy(ve).multiplyScalar(se).floor())},this.getScissorTest=function(){return me},this.setScissorTest=function(y){G.setScissorTest(me=y)},this.setOpaqueSort=function(y){ee=y},this.setTransparentSort=function(y){ce=y},this.getClearColor=function(y){return y.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(y=!0,V=!0,J=!0){let ne=0;if(y){let K=!1;if(w!==null){const Ce=w.texture.format;K=Ce===Ff||Ce===Nf||Ce===If}if(K){const Ce=w.texture.type,Ue=Ce===si||Ce===ei||Ce===$a||Ce===Ti||Ce===Df||Ce===Uf,Oe=Se.getClearColor(),ze=Se.getClearAlpha(),Ye=Oe.r,Ge=Oe.g,ke=Oe.b;Ue?(m[0]=Ye,m[1]=Ge,m[2]=ke,m[3]=ze,v.clearBufferuiv(v.COLOR,0,m)):(x[0]=Ye,x[1]=Ge,x[2]=ke,x[3]=ze,v.clearBufferiv(v.COLOR,0,x))}else ne|=v.COLOR_BUFFER_BIT}V&&(ne|=v.DEPTH_BUFFER_BIT),J&&(ne|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),xe.dispose(),Z.dispose(),le.dispose(),g.dispose(),R.dispose(),Y.dispose(),_e.dispose(),Ee.dispose(),he.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",_t),Te.removeEventListener("sessionend",rt),Pe&&(Pe.dispose(),Pe=null),Rt.stop()};function ae(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const y=oe.autoReset,V=I.enabled,J=I.autoUpdate,ne=I.needsUpdate,K=I.type;Ae(),oe.autoReset=y,I.enabled=V,I.autoUpdate=J,I.needsUpdate=ne,I.type=K}function pe(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Me(y){const V=y.target;V.removeEventListener("dispose",Me),we(V)}function we(y){Re(y),le.remove(y)}function Re(y){const V=le.get(y).programs;V!==void 0&&(V.forEach(function(J){he.releaseProgram(J)}),y.isShaderMaterial&&he.releaseShaderCache(y))}this.renderBufferDirect=function(y,V,J,ne,K,Ce){V===null&&(V=De);const Ue=K.isMesh&&K.matrixWorld.determinant()<0,Oe=ch(y,V,J,ne,K);G.setMaterial(ne,Ue);let ze=J.index,Ye=1;if(ne.wireframe===!0){if(ze=H.getWireframeAttribute(J),ze===void 0)return;Ye=2}const Ge=J.drawRange,ke=J.attributes.position;let ft=Ge.start*Ye,Vt=(Ge.start+Ge.count)*Ye;Ce!==null&&(ft=Math.max(ft,Ce.start*Ye),Vt=Math.min(Vt,(Ce.start+Ce.count)*Ye)),ze!==null?(ft=Math.max(ft,0),Vt=Math.min(Vt,ze.count)):ke!=null&&(ft=Math.max(ft,0),Vt=Math.min(Vt,ke.count));const vt=Vt-ft;if(vt<0||vt===1/0)return;_e.setup(K,ne,Oe,J,ze);let wn,ct=k;if(ze!==null&&(wn=X.get(ze),ct=j,ct.setIndex(wn)),K.isMesh)ne.wireframe===!0?(G.setLineWidth(ne.wireframeLinewidth*Ve()),ct.setMode(v.LINES)):ct.setMode(v.TRIANGLES);else if(K.isLine){let $e=ne.linewidth;$e===void 0&&($e=1),G.setLineWidth($e*Ve()),K.isLineSegments?ct.setMode(v.LINES):K.isLineLoop?ct.setMode(v.LINE_LOOP):ct.setMode(v.LINE_STRIP)}else K.isPoints?ct.setMode(v.POINTS):K.isSprite&&ct.setMode(v.TRIANGLES);if(K.isBatchedMesh)ct.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)ct.renderInstances(ft,vt,K.count);else if(J.isInstancedBufferGeometry){const $e=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ro=Math.min(J.instanceCount,$e);ct.renderInstances(ft,vt,ro)}else ct.render(ft,vt)};function Xe(y,V,J){y.transparent===!0&&y.side===Hn&&y.forceSinglePass===!1?(y.side=Ht,y.needsUpdate=!0,Yr(y,V,J),y.side=ai,y.needsUpdate=!0,Yr(y,V,J),y.side=Hn):Yr(y,V,J)}this.compile=function(y,V,J=null){J===null&&(J=y),p=Z.get(J),p.init(),b.push(p),J.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),y!==J&&y.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),p.setupLights(S._useLegacyLights);const ne=new Set;return y.traverse(function(K){const Ce=K.material;if(Ce)if(Array.isArray(Ce))for(let Ue=0;Ue<Ce.length;Ue++){const Oe=Ce[Ue];Xe(Oe,J,K),ne.add(Oe)}else Xe(Ce,J,K),ne.add(Ce)}),b.pop(),p=null,ne},this.compileAsync=function(y,V,J=null){const ne=this.compile(y,V,J);return new Promise(K=>{function Ce(){if(ne.forEach(function(Ue){le.get(Ue).currentProgram.isReady()&&ne.delete(Ue)}),ne.size===0){K(y);return}setTimeout(Ce,10)}F.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Be=null;function et(y){Be&&Be(y)}function _t(){Rt.stop()}function rt(){Rt.start()}const Rt=new Zf;Rt.setAnimationLoop(et),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(y){Be=y,Te.setAnimationLoop(y),y===null?Rt.stop():Rt.start()},Te.addEventListener("sessionstart",_t),Te.addEventListener("sessionend",rt),this.render=function(y,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(V),V=Te.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,V,w),p=Z.get(y,b.length),p.init(),b.push(p),Le.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ie.setFromProjectionMatrix(Le),be=this.localClippingEnabled,de=B.init(this.clippingPlanes,be),_=xe.get(y,h.length),_.init(),h.push(_),pn(y,V,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(ee,ce),this.info.render.frame++,de===!0&&B.beginShadows();const J=p.state.shadowsArray;if(I.render(J,y,V),de===!0&&B.endShadows(),this.info.autoReset===!0&&this.info.reset(),Se.render(_,y),p.setupLights(S._useLegacyLights),V.isArrayCamera){const ne=V.cameras;for(let K=0,Ce=ne.length;K<Ce;K++){const Ue=ne[K];rl(_,y,Ue,Ue.viewport)}}else rl(_,y,V);w!==null&&(M.updateMultisampleRenderTarget(w),M.updateRenderTargetMipmap(w)),y.isScene===!0&&y.onAfterRender(S,y,V),_e.resetDefaultState(),$=-1,E=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function pn(y,V,J,ne){if(y.visible===!1)return;if(y.layers.test(V.layers)){if(y.isGroup)J=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(V);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ie.intersectsSprite(y)){ne&&Fe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Le);const Ue=Y.update(y),Oe=y.material;Oe.visible&&_.push(y,Ue,Oe,J,Fe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ie.intersectsObject(y))){const Ue=Y.update(y),Oe=y.material;if(ne&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Fe.copy(y.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Fe.copy(Ue.boundingSphere.center)),Fe.applyMatrix4(y.matrixWorld).applyMatrix4(Le)),Array.isArray(Oe)){const ze=Ue.groups;for(let Ye=0,Ge=ze.length;Ye<Ge;Ye++){const ke=ze[Ye],ft=Oe[ke.materialIndex];ft&&ft.visible&&_.push(y,Ue,ft,J,Fe.z,ke)}}else Oe.visible&&_.push(y,Ue,Oe,J,Fe.z,null)}}const Ce=y.children;for(let Ue=0,Oe=Ce.length;Ue<Oe;Ue++)pn(Ce[Ue],V,J,ne)}function rl(y,V,J,ne){const K=y.opaque,Ce=y.transmissive,Ue=y.transparent;p.setupLightsView(J),de===!0&&B.setGlobalState(S.clippingPlanes,J),Ce.length>0&&lh(K,Ce,V,J),ne&&G.viewport(A.copy(ne)),K.length>0&&qr(K,V,J),Ce.length>0&&qr(Ce,V,J),Ue.length>0&&qr(Ue,V,J),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function lh(y,V,J,ne){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;const Ce=z.isWebGL2;Pe===null&&(Pe=new wi(1,1,{generateMipmaps:!0,type:F.has("EXT_color_buffer_half_float")?zr:si,minFilter:Br,samples:Ce?4:0})),S.getDrawingBufferSize(Ne),Ce?Pe.setSize(Ne.x,Ne.y):Pe.setSize(ya(Ne.x),ya(Ne.y));const Ue=S.getRenderTarget();S.setRenderTarget(Pe),S.getClearColor(ge),N=S.getClearAlpha(),N<1&&S.setClearColor(16777215,.5),S.clear();const Oe=S.toneMapping;S.toneMapping=ri,qr(y,J,ne),M.updateMultisampleRenderTarget(Pe),M.updateRenderTargetMipmap(Pe);let ze=!1;for(let Ye=0,Ge=V.length;Ye<Ge;Ye++){const ke=V[Ye],ft=ke.object,Vt=ke.geometry,vt=ke.material,wn=ke.group;if(vt.side===Hn&&ft.layers.test(ne.layers)){const ct=vt.side;vt.side=Ht,vt.needsUpdate=!0,sl(ft,J,ne,Vt,vt,wn),vt.side=ct,vt.needsUpdate=!0,ze=!0}}ze===!0&&(M.updateMultisampleRenderTarget(Pe),M.updateRenderTargetMipmap(Pe)),S.setRenderTarget(Ue),S.setClearColor(ge,N),S.toneMapping=Oe}function qr(y,V,J){const ne=V.isScene===!0?V.overrideMaterial:null;for(let K=0,Ce=y.length;K<Ce;K++){const Ue=y[K],Oe=Ue.object,ze=Ue.geometry,Ye=ne===null?Ue.material:ne,Ge=Ue.group;Oe.layers.test(J.layers)&&sl(Oe,V,J,ze,Ye,Ge)}}function sl(y,V,J,ne,K,Ce){y.onBeforeRender(S,V,J,ne,K,Ce),y.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),K.onBeforeRender(S,V,J,ne,y,Ce),K.transparent===!0&&K.side===Hn&&K.forceSinglePass===!1?(K.side=Ht,K.needsUpdate=!0,S.renderBufferDirect(J,V,ne,K,y,Ce),K.side=ai,K.needsUpdate=!0,S.renderBufferDirect(J,V,ne,K,y,Ce),K.side=Hn):S.renderBufferDirect(J,V,ne,K,y,Ce),y.onAfterRender(S,V,J,ne,K,Ce)}function Yr(y,V,J){V.isScene!==!0&&(V=De);const ne=le.get(y),K=p.state.lights,Ce=p.state.shadowsArray,Ue=K.state.version,Oe=he.getParameters(y,K.state,Ce,V,J),ze=he.getProgramCacheKey(Oe);let Ye=ne.programs;ne.environment=y.isMeshStandardMaterial?V.environment:null,ne.fog=V.fog,ne.envMap=(y.isMeshStandardMaterial?R:g).get(y.envMap||ne.environment),Ye===void 0&&(y.addEventListener("dispose",Me),Ye=new Map,ne.programs=Ye);let Ge=Ye.get(ze);if(Ge!==void 0){if(ne.currentProgram===Ge&&ne.lightsStateVersion===Ue)return al(y,Oe),Ge}else Oe.uniforms=he.getUniforms(y),y.onBuild(J,Oe,S),y.onBeforeCompile(Oe,S),Ge=he.acquireProgram(Oe,ze),Ye.set(ze,Ge),ne.uniforms=Oe.uniforms;const ke=ne.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ke.clippingPlanes=B.uniform),al(y,Oe),ne.needsLights=fh(y),ne.lightsStateVersion=Ue,ne.needsLights&&(ke.ambientLightColor.value=K.state.ambient,ke.lightProbe.value=K.state.probe,ke.directionalLights.value=K.state.directional,ke.directionalLightShadows.value=K.state.directionalShadow,ke.spotLights.value=K.state.spot,ke.spotLightShadows.value=K.state.spotShadow,ke.rectAreaLights.value=K.state.rectArea,ke.ltc_1.value=K.state.rectAreaLTC1,ke.ltc_2.value=K.state.rectAreaLTC2,ke.pointLights.value=K.state.point,ke.pointLightShadows.value=K.state.pointShadow,ke.hemisphereLights.value=K.state.hemi,ke.directionalShadowMap.value=K.state.directionalShadowMap,ke.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ke.spotShadowMap.value=K.state.spotShadowMap,ke.spotLightMatrix.value=K.state.spotLightMatrix,ke.spotLightMap.value=K.state.spotLightMap,ke.pointShadowMap.value=K.state.pointShadowMap,ke.pointShadowMatrix.value=K.state.pointShadowMatrix),ne.currentProgram=Ge,ne.uniformsList=null,Ge}function ol(y){if(y.uniformsList===null){const V=y.currentProgram.getUniforms();y.uniformsList=Ps.seqWithValue(V.seq,y.uniforms)}return y.uniformsList}function al(y,V){const J=le.get(y);J.outputColorSpace=V.outputColorSpace,J.batching=V.batching,J.instancing=V.instancing,J.instancingColor=V.instancingColor,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function ch(y,V,J,ne,K){V.isScene!==!0&&(V=De),M.resetTextureUnits();const Ce=V.fog,Ue=ne.isMeshStandardMaterial?V.environment:null,Oe=w===null?S.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Xn,ze=(ne.isMeshStandardMaterial?R:g).get(ne.envMap||Ue),Ye=ne.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ge=!!J.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),ke=!!J.morphAttributes.position,ft=!!J.morphAttributes.normal,Vt=!!J.morphAttributes.color;let vt=ri;ne.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(vt=S.toneMapping);const wn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ct=wn!==void 0?wn.length:0,$e=le.get(ne),ro=p.state.lights;if(de===!0&&(be===!0||y!==E)){const $t=y===E&&ne.id===$;B.setState(ne,y,$t)}let ut=!1;ne.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==ro.state.version||$e.outputColorSpace!==Oe||K.isBatchedMesh&&$e.batching===!1||!K.isBatchedMesh&&$e.batching===!0||K.isInstancedMesh&&$e.instancing===!1||!K.isInstancedMesh&&$e.instancing===!0||K.isSkinnedMesh&&$e.skinning===!1||!K.isSkinnedMesh&&$e.skinning===!0||K.isInstancedMesh&&$e.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&$e.instancingColor===!1&&K.instanceColor!==null||$e.envMap!==ze||ne.fog===!0&&$e.fog!==Ce||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==B.numPlanes||$e.numIntersection!==B.numIntersection)||$e.vertexAlphas!==Ye||$e.vertexTangents!==Ge||$e.morphTargets!==ke||$e.morphNormals!==ft||$e.morphColors!==Vt||$e.toneMapping!==vt||z.isWebGL2===!0&&$e.morphTargetsCount!==ct)&&(ut=!0):(ut=!0,$e.__version=ne.version);let li=$e.currentProgram;ut===!0&&(li=Yr(ne,V,K));let ll=!1,mr=!1,so=!1;const Et=li.getUniforms(),ci=$e.uniforms;if(G.useProgram(li.program)&&(ll=!0,mr=!0,so=!0),ne.id!==$&&($=ne.id,mr=!0),ll||E!==y){Et.setValue(v,"projectionMatrix",y.projectionMatrix),Et.setValue(v,"viewMatrix",y.matrixWorldInverse);const $t=Et.map.cameraPosition;$t!==void 0&&$t.setValue(v,Fe.setFromMatrixPosition(y.matrixWorld)),z.logarithmicDepthBuffer&&Et.setValue(v,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Et.setValue(v,"isOrthographic",y.isOrthographicCamera===!0),E!==y&&(E=y,mr=!0,so=!0)}if(K.isSkinnedMesh){Et.setOptional(v,K,"bindMatrix"),Et.setOptional(v,K,"bindMatrixInverse");const $t=K.skeleton;$t&&(z.floatVertexTextures?($t.boneTexture===null&&$t.computeBoneTexture(),Et.setValue(v,"boneTexture",$t.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}K.isBatchedMesh&&(Et.setOptional(v,K,"batchingTexture"),Et.setValue(v,"batchingTexture",K._matricesTexture,M));const oo=J.morphAttributes;if((oo.position!==void 0||oo.normal!==void 0||oo.color!==void 0&&z.isWebGL2===!0)&&L.update(K,J,li),(mr||$e.receiveShadow!==K.receiveShadow)&&($e.receiveShadow=K.receiveShadow,Et.setValue(v,"receiveShadow",K.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(ci.envMap.value=ze,ci.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),mr&&(Et.setValue(v,"toneMappingExposure",S.toneMappingExposure),$e.needsLights&&uh(ci,so),Ce&&ne.fog===!0&&fe.refreshFogUniforms(ci,Ce),fe.refreshMaterialUniforms(ci,ne,se,q,Pe),Ps.upload(v,ol($e),ci,M)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Ps.upload(v,ol($e),ci,M),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Et.setValue(v,"center",K.center),Et.setValue(v,"modelViewMatrix",K.modelViewMatrix),Et.setValue(v,"normalMatrix",K.normalMatrix),Et.setValue(v,"modelMatrix",K.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const $t=ne.uniformsGroups;for(let ao=0,hh=$t.length;ao<hh;ao++)if(z.isWebGL2){const cl=$t[ao];Ee.update(cl,li),Ee.bind(cl,li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return li}function uh(y,V){y.ambientLightColor.needsUpdate=V,y.lightProbe.needsUpdate=V,y.directionalLights.needsUpdate=V,y.directionalLightShadows.needsUpdate=V,y.pointLights.needsUpdate=V,y.pointLightShadows.needsUpdate=V,y.spotLights.needsUpdate=V,y.spotLightShadows.needsUpdate=V,y.rectAreaLights.needsUpdate=V,y.hemisphereLights.needsUpdate=V}function fh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(y,V,J){le.get(y.texture).__webglTexture=V,le.get(y.depthTexture).__webglTexture=J;const ne=le.get(y);ne.__hasExternalTextures=!0,ne.__hasExternalTextures&&(ne.__autoAllocateDepthBuffer=J===void 0,ne.__autoAllocateDepthBuffer||F.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,V){const J=le.get(y);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(y,V=0,J=0){w=y,P=V,C=J;let ne=!0,K=null,Ce=!1,Ue=!1;if(y){const ze=le.get(y);ze.__useDefaultFramebuffer!==void 0?(G.bindFramebuffer(v.FRAMEBUFFER,null),ne=!1):ze.__webglFramebuffer===void 0?M.setupRenderTarget(y):ze.__hasExternalTextures&&M.rebindTextures(y,le.get(y.texture).__webglTexture,le.get(y.depthTexture).__webglTexture);const Ye=y.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ue=!0);const Ge=le.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ge[V])?K=Ge[V][J]:K=Ge[V],Ce=!0):z.isWebGL2&&y.samples>0&&M.useMultisampledRTT(y)===!1?K=le.get(y).__webglMultisampledFramebuffer:Array.isArray(Ge)?K=Ge[J]:K=Ge,A.copy(y.viewport),Q.copy(y.scissor),re=y.scissorTest}else A.copy(ue).multiplyScalar(se).floor(),Q.copy(ve).multiplyScalar(se).floor(),re=me;if(G.bindFramebuffer(v.FRAMEBUFFER,K)&&z.drawBuffers&&ne&&G.drawBuffers(y,K),G.viewport(A),G.scissor(Q),G.setScissorTest(re),Ce){const ze=le.get(y.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+V,ze.__webglTexture,J)}else if(Ue){const ze=le.get(y.texture),Ye=V||0;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,ze.__webglTexture,J||0,Ye)}$=-1},this.readRenderTargetPixels=function(y,V,J,ne,K,Ce,Ue){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=le.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ue!==void 0&&(Oe=Oe[Ue]),Oe){G.bindFramebuffer(v.FRAMEBUFFER,Oe);try{const ze=y.texture,Ye=ze.format,Ge=ze.type;if(Ye!==cn&&te.convert(Ye)!==v.getParameter(v.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Ge===zr&&(F.has("EXT_color_buffer_half_float")||z.isWebGL2&&F.has("EXT_color_buffer_float"));if(Ge!==si&&te.convert(Ge)!==v.getParameter(v.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===ti&&(z.isWebGL2||F.has("OES_texture_float")||F.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=y.width-ne&&J>=0&&J<=y.height-K&&v.readPixels(V,J,ne,K,te.convert(Ye),te.convert(Ge),Ce)}finally{const ze=w!==null?le.get(w).__webglFramebuffer:null;G.bindFramebuffer(v.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(y,V,J=0){const ne=Math.pow(2,-J),K=Math.floor(V.image.width*ne),Ce=Math.floor(V.image.height*ne);M.setTexture2D(V,0),v.copyTexSubImage2D(v.TEXTURE_2D,J,0,0,y.x,y.y,K,Ce),G.unbindTexture()},this.copyTextureToTexture=function(y,V,J,ne=0){const K=V.image.width,Ce=V.image.height,Ue=te.convert(J.format),Oe=te.convert(J.type);M.setTexture2D(J,0),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,J.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,J.unpackAlignment),V.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,ne,y.x,y.y,K,Ce,Ue,Oe,V.image.data):V.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,ne,y.x,y.y,V.mipmaps[0].width,V.mipmaps[0].height,Ue,V.mipmaps[0].data):v.texSubImage2D(v.TEXTURE_2D,ne,y.x,y.y,Ue,Oe,V.image),ne===0&&J.generateMipmaps&&v.generateMipmap(v.TEXTURE_2D),G.unbindTexture()},this.copyTextureToTexture3D=function(y,V,J,ne,K=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=y.max.x-y.min.x+1,Ue=y.max.y-y.min.y+1,Oe=y.max.z-y.min.z+1,ze=te.convert(ne.format),Ye=te.convert(ne.type);let Ge;if(ne.isData3DTexture)M.setTexture3D(ne,0),Ge=v.TEXTURE_3D;else if(ne.isDataArrayTexture||ne.isCompressedArrayTexture)M.setTexture2DArray(ne,0),Ge=v.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,ne.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,ne.unpackAlignment);const ke=v.getParameter(v.UNPACK_ROW_LENGTH),ft=v.getParameter(v.UNPACK_IMAGE_HEIGHT),Vt=v.getParameter(v.UNPACK_SKIP_PIXELS),vt=v.getParameter(v.UNPACK_SKIP_ROWS),wn=v.getParameter(v.UNPACK_SKIP_IMAGES),ct=J.isCompressedTexture?J.mipmaps[K]:J.image;v.pixelStorei(v.UNPACK_ROW_LENGTH,ct.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,ct.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,y.min.x),v.pixelStorei(v.UNPACK_SKIP_ROWS,y.min.y),v.pixelStorei(v.UNPACK_SKIP_IMAGES,y.min.z),J.isDataTexture||J.isData3DTexture?v.texSubImage3D(Ge,K,V.x,V.y,V.z,Ce,Ue,Oe,ze,Ye,ct.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),v.compressedTexSubImage3D(Ge,K,V.x,V.y,V.z,Ce,Ue,Oe,ze,ct.data)):v.texSubImage3D(Ge,K,V.x,V.y,V.z,Ce,Ue,Oe,ze,Ye,ct),v.pixelStorei(v.UNPACK_ROW_LENGTH,ke),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,ft),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Vt),v.pixelStorei(v.UNPACK_SKIP_ROWS,vt),v.pixelStorei(v.UNPACK_SKIP_IMAGES,wn),K===0&&ne.generateMipmaps&&v.generateMipmap(Ge),G.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?M.setTextureCube(y,0):y.isData3DTexture?M.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?M.setTexture2DArray(y,0):M.setTexture2D(y,0),G.unbindTexture()},this.resetState=function(){P=0,C=0,w=null,G.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ja?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===to?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===St?Ai:Bf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ai?St:Xn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Gx extends sh{}Gx.prototype.isWebGL1Renderer=!0;class Vx extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ws extends dr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const cu=new O,uu=new O,fu=new ht,Jo=new Ka,Ms=new no;class oh extends Mt{constructor(e=new dn,t=new Ws){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)cu.fromBufferAttribute(t,r-1),uu.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=cu.distanceTo(uu);e.setAttribute("lineDistance",new Gt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ms.copy(i.boundingSphere),Ms.applyMatrix4(r),Ms.radius+=s,e.ray.intersectsSphere(Ms)===!1)return;fu.copy(r).invert(),Jo.copy(e.ray).applyMatrix4(fu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new O,u=new O,f=new O,d=new O,m=this.isLineSegments?2:1,x=i.index,p=i.attributes.position;if(x!==null){const h=Math.max(0,a.start),b=Math.min(x.count,a.start+a.count);for(let S=h,T=b-1;S<T;S+=m){const P=x.getX(S),C=x.getX(S+1);if(c.fromBufferAttribute(p,P),u.fromBufferAttribute(p,C),Jo.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const $=e.ray.origin.distanceTo(d);$<e.near||$>e.far||t.push({distance:$,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,a.start),b=Math.min(p.count,a.start+a.count);for(let S=h,T=b-1;S<T;S+=m){if(c.fromBufferAttribute(p,S),u.fromBufferAttribute(p,S+1),Jo.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const hu=new O,du=new O;class pu extends oh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)hu.fromBufferAttribute(t,r),du.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+hu.distanceTo(du);e.setAttribute("lineDistance",new Gt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nl extends dn{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],m=[];let x=0;const _=[],p=i/2;let h=0;b(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Gt(f,3)),this.setAttribute("normal",new Gt(d,3)),this.setAttribute("uv",new Gt(m,2));function b(){const T=new O,P=new O;let C=0;const w=(t-e)/i;for(let $=0;$<=s;$++){const E=[],A=$/s,Q=A*(t-e)+e;for(let re=0;re<=r;re++){const ge=re/r,N=ge*l+o,W=Math.sin(N),q=Math.cos(N);P.x=Q*W,P.y=-A*i+p,P.z=Q*q,f.push(P.x,P.y,P.z),T.set(W,w,q).normalize(),d.push(T.x,T.y,T.z),m.push(ge,1-A),E.push(x++)}_.push(E)}for(let $=0;$<r;$++)for(let E=0;E<s;E++){const A=_[E][$],Q=_[E+1][$],re=_[E+1][$+1],ge=_[E][$+1];u.push(A,Q,ge),u.push(Q,re,ge),C+=6}c.addGroup(h,C,0),h+=C}function S(T){const P=x,C=new Ze,w=new O;let $=0;const E=T===!0?e:t,A=T===!0?1:-1;for(let re=1;re<=r;re++)f.push(0,p*A,0),d.push(0,A,0),m.push(.5,.5),x++;const Q=x;for(let re=0;re<=r;re++){const N=re/r*l+o,W=Math.cos(N),q=Math.sin(N);w.x=E*q,w.y=p*A,w.z=E*W,f.push(w.x,w.y,w.z),d.push(0,A,0),C.x=W*.5+.5,C.y=q*.5*A+.5,m.push(C.x,C.y),x++}for(let re=0;re<r;re++){const ge=P+re,N=Q+re;T===!0?u.push(N,N+1,ge):u.push(N+1,N,ge),$+=3}c.addGroup(h,$,T===!0?1:2),h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Ss=new O,Es=new O,Qo=new O,ys=new en;class mu extends dn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Ls*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),d={},m=[];for(let x=0;x<l;x+=3){a?(c[0]=a.getX(x),c[1]=a.getX(x+1),c[2]=a.getX(x+2)):(c[0]=x,c[1]=x+1,c[2]=x+2);const{a:_,b:p,c:h}=ys;if(_.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),h.fromBufferAttribute(o,c[2]),ys.getNormal(Qo),f[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,f[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,f[2]=`${Math.round(h.x*r)},${Math.round(h.y*r)},${Math.round(h.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let b=0;b<3;b++){const S=(b+1)%3,T=f[b],P=f[S],C=ys[u[b]],w=ys[u[S]],$=`${T}_${P}`,E=`${P}_${T}`;E in d&&d[E]?(Qo.dot(d[E].normal)<=s&&(m.push(C.x,C.y,C.z),m.push(w.x,w.y,w.z)),d[E]=null):$ in d||(d[$]={index0:c[b],index1:c[S],normal:Qo.clone()})}}for(const x in d)if(d[x]){const{index0:_,index1:p}=d[x];Ss.fromBufferAttribute(o,_),Es.fromBufferAttribute(o,p),m.push(Ss.x,Ss.y,Ss.z),m.push(Es.x,Es.y,Es.z)}this.setAttribute("position",new Gt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class kx extends dr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ke(16777215),this.specular=new Ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zf,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class il extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ea=new ht,gu=new O,_u=new O;class ah{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qa,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;gu.setFromMatrixPosition(e.matrixWorld),t.position.copy(gu),_u.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_u),t.updateMatrixWorld(),ea.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ea),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ea)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const vu=new ht,yr=new O,ta=new O;class Wx extends ah{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ze(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),yr.setFromMatrixPosition(e.matrixWorld),i.position.copy(yr),ta.copy(i.position),ta.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ta),i.updateMatrixWorld(),r.makeTranslation(-yr.x,-yr.y,-yr.z),vu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vu)}}class Xx extends il{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Wx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class qx extends ah{constructor(){super(new Jf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xu extends il{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new qx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Yx extends il{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class $x{constructor(e,t,i=0,r=1/0){this.ray=new Ka(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Za,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return ba(e,this,i,t),i.sort(Mu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ba(e[r],this,i,t);return i.sort(Mu),i}}function Mu(n,e){return n.distance-e.distance}function ba(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,a=r.length;s<a;s++)ba(r[s],e,t,!0)}}const Su=new O;let Ts,na;class ia extends Mt{constructor(e=new O(0,0,1),t=new O(0,0,0),i=1,r=16776960,s=i*.2,a=s*.2){super(),this.type="ArrowHelper",Ts===void 0&&(Ts=new dn,Ts.setAttribute("position",new Gt([0,0,0,0,1,0],3)),na=new nl(0,.5,1,5,1),na.translate(0,-.5,0)),this.position.copy(t),this.line=new oh(Ts,new Ws({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new En(na,new Ja({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Su.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Su,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qa);function jx(){const n=Yn(null),e=Yn(null),t=Yn(null),i=Yn([]),r=Yn([]),s=Yn([]),a=Yn(!1),o=Yn({x:0,y:0});let l=null,c=null,u=null,f=new $x,d=new Ze,m=null,x=5,_=null,p=null,h=null,b=null,S=!1;const T=new Set;let P=null,C=null,w=null;const $=5221630,E=16711680,A=1,Q=.05,re=6,ge=800;let N=0,W=0,q=0;function se(){_&&(_.removeEventListener("mousedown",Fe),_.removeEventListener("mousemove",De),_.removeEventListener("mouseup",Ve),_.removeEventListener("mouseleave",Ve),_.removeEventListener("wheel",v),p&&_.removeEventListener("click",p),p=null,_=null,b=null,S=!1)}function ee(){P&&(n.value&&n.value.remove(P),P.geometry&&P.geometry.dispose(),Array.isArray(P.material)?P.material.forEach(L=>L.dispose&&L.dispose()):P.material&&P.material.dispose&&P.material.dispose(),P=null)}function ce(){w&&(n.value&&n.value.remove(w),w.geometry&&w.geometry.dispose(),Array.isArray(w.material)?w.material.forEach(L=>L.dispose&&L.dispose()):w.material&&w.material.dispose&&w.material.dispose(),w=null)}function ue(){C=null,w&&(w.visible=!1)}function ve(){if(w||!n.value)return;const L=A-Q+.08,k=new mu(new oi(L,L,L)),j=new Ws({color:2282478,transparent:!0,opacity:.95});w=new pu(k,j),w.visible=!1,n.value.add(w)}function me(){if(C===null){w&&(w.visible=!1);return}const L=i.value[C];if(!L){ue();return}ve(),w&&(w.position.copy(L.position),w.visible=!0)}function ie(L,k){if(L<0||L>=i.value.length)return{success:!1,reason:"notFound"};if(C===L)return ue(),typeof k=="function"&&k("cube-change",{type:"selection-cleared"}),{success:!0,cleared:!0};C=L,me();const j=r.value[L];return typeof k=="function"&&j&&k("cube-change",{type:"select",target:{gridX:j.gridX,gridY:j.gridZ,gridZ:j.gridY}}),{success:!0,target:j?{gridX:j.gridX,gridY:j.gridZ,gridZ:j.gridY}:null}}function de(L,k,j){x=k,h=j,b=null,S=!1,G(),ue(),ce(),se(),m&&(cancelAnimationFrame(m),m=null),t.value&&(t.value.dispose(),t.value=null),L.innerHTML="",n.value=new Vx,n.value.background=new Ke(856343),e.value=new Xt(60,1,.1,1e3);const te=k===3?5:k===4?6:10;e.value.position.set(te,te*.5,te*.8),e.value.lookAt(0,0,0),t.value=new sh({antialias:!0}),t.value.setSize(400,400),t.value.setPixelRatio(window.devicePixelRatio),t.value.domElement.style.display="block",t.value.domElement.style.margin="0 auto",L.appendChild(t.value.domElement);const _e=new Yx(16777215,.9);n.value.add(_e);const Ee=new xu(16777215,1);Ee.position.set(10,10,10),n.value.add(Ee);const Ae=new xu(16777215,.5);Ae.position.set(-10,-5,-10),n.value.add(Ae);const Te=new Xx(16777215,.5);Te.position.set(5,5,5),n.value.add(Te),be(),Pe(),_=L,_.addEventListener("mousedown",Fe),_.addEventListener("mousemove",De),_.addEventListener("mouseup",Ve),_.addEventListener("mouseleave",Ve),_.addEventListener("wheel",v,{passive:!1}),p=ae=>U(ae,_,j),_.addEventListener("click",p),Se()}function be(){l=new ia(new O(1,0,0),new O(0,0,0),4,16739179,.4,.25),n.value.add(l),c=new ia(new O(0,1,0),new O(0,0,0),4,5164484,.4,.25),n.value.add(c),u=new ia(new O(0,0,1),new O(0,0,0),4,16770669,.4,.25),n.value.add(u)}function Pe(){if(ee(),!n.value)return;const L=x-1+(A-Q),k=new oi(L,L,L),j=new mu(k),te=new Ws({color:16765286,transparent:!0,opacity:.8});P=new pu(j,te),Ne(),n.value.add(P)}function Le(L,k,j){!l||!c||!u||(l.position.set(-L+2,-k,j),c.position.set(-L+2,-k,j),u.position.set(-L+2,-k,j))}function Ne(){if(!P)return;const L=(x-1)/2;P.position.set(L-N,L-q,L-W)}function Fe(L){if(L.preventDefault(),L.shiftKey&&i.value.length>0){const k=M(L);if(k){b={startX:L.clientX,startY:L.clientY,sourceCube:k.cube,faceIndex:k.faceIndex},a.value=!1;return}}a.value=!0,o.value={x:L.clientX,y:L.clientY}}function De(L){if(!a.value||!n.value)return;const k=L.clientX-o.value.x,te=(L.clientY-o.value.y)*.01,_e=k*.01,Ee=new Xr(te,_e,0,"XYZ"),Ae=new hr().setFromEuler(Ee);n.value.quaternion.premultiply(Ae),o.value={x:L.clientX,y:L.clientY}}function Ve(L){var k;if(b){const j=typeof(L==null?void 0:L.clientX)=="number"?L.clientX:b.startX,te=typeof(L==null?void 0:L.clientY)=="number"?L.clientY:b.startY,_e=j-b.startX,Ee=te-b.startY;if(Math.sqrt(_e*_e+Ee*Ee)>=re){const Te=g(b.sourceCube,b.faceIndex);if(!Te.success&&typeof h=="function"){const ae=(k=b.sourceCube)==null?void 0:k.userData;h("cube-change",{type:"copy-failed",reason:Te.reason||"unknown",source:ae?{gridX:ae.gridX,gridY:ae.gridY,gridZ:ae.gridZ}:null})}S=!0}b=null}a.value=!1}function v(L){if(L.preventDefault(),!e.value)return;const k=L.deltaY>0?1.1:.9;e.value.position.multiplyScalar(k);const j=e.value.position.length(),te=j>10?8:j>6?3.5:2.5;e.value.position.clampLength(te,20)}function U(L,k,j){if(S){S=!1;return}if(!n.value||i.value.length===0)return;const te=k.getBoundingClientRect();d.x=(L.clientX-te.left)/te.width*2-1,d.y=-((L.clientY-te.top)/te.height)*2+1,f.setFromCamera(d,e.value);const _e=f.intersectObjects(i.value);if(_e.length>0){const Ee=_e[0],Ae=Math.floor(Ee.faceIndex/2),Te=Ee.object,ae=Te.userData.cubeIndex;if(typeof ae=="number"&&ie(ae,j),L.metaKey||L.ctrlKey)return;const D=Te.material[Ae].color.getHex();let pe;D===$?pe=E:pe=$;const Me=i.value.map(Re=>Re.material.map(Xe=>Xe.color.getHex()));s.value.push(Me),Te.material[Ae].color.setHex(pe),r.value[ae]&&(r.value[ae].colors[Ae]=pe);const we={cubeColors:z(),gridSize:F()};j("color-change",we)}}function F(){return x}function z(){return JSON.parse(JSON.stringify(r.value))}function G(){T.forEach(L=>clearTimeout(L)),T.clear()}function oe(L){if(!L||!Array.isArray(L.material))return;const k=new Ke(16765286),j=L.material.map(_e=>({emissive:_e.emissive?_e.emissive.clone():new Ke(0),emissiveIntensity:typeof _e.emissiveIntensity=="number"?_e.emissiveIntensity:1}));L.material.forEach(_e=>{_e.emissive&&(_e.emissive.copy(k),_e.emissiveIntensity=.85)});const te=setTimeout(()=>{L.material.forEach((_e,Ee)=>{if(!_e.emissive)return;const Ae=j[Ee];Ae&&(_e.emissive.copy(Ae.emissive),_e.emissiveIntensity=Ae.emissiveIntensity)}),T.delete(te)},ge);T.add(te)}function le(){if(r.value.length===0)return;let L=x,k=-1,j=x,te=-1,_e=0;r.value.forEach(Ee=>{L=Math.min(L,Ee.gridX),k=Math.max(k,Ee.gridX),j=Math.min(j,Ee.gridZ),te=Math.max(te,Ee.gridZ),_e=Math.max(_e,Ee.gridY+1)}),N=(L+k)/2,W=(j+te)/2,q=(_e-1)/2,i.value.forEach((Ee,Ae)=>{const Te=r.value[Ae];Te&&(Ee.position.set(Te.gridX-N,Te.gridY-q,x-1-Te.gridZ-W),Ee.userData={cubeIndex:Ae,gridX:Te.gridX,gridY:Te.gridY,gridZ:Te.gridZ})}),Le(N,W,q),Ne(),me()}function M(L){if(!n.value||!e.value||!_)return null;const k=_.getBoundingClientRect();d.x=(L.clientX-k.left)/k.width*2-1,d.y=-((L.clientY-k.top)/k.height)*2+1,f.setFromCamera(d,e.value);const j=f.intersectObjects(i.value);if(j.length===0)return null;const te=j[0],_e=Math.floor(te.faceIndex/2);return{cube:te.object,faceIndex:_e,point:te.point}}function g(L,k){if(!L||!L.userData)return{success:!1};const j=L.userData.gridX,te=L.userData.gridY,_e=L.userData.gridZ,Ae={0:{dx:1,dy:0,dz:0},1:{dx:-1,dy:0,dz:0},2:{dx:0,dy:1,dz:0},3:{dx:0,dy:-1,dz:0},4:{dx:0,dy:0,dz:-1},5:{dx:0,dy:0,dz:1}}[k];if(!Ae)return{success:!1};const Te=j+Ae.dx,ae=te+Ae.dy,D=_e+Ae.dz;if(Te<0||Te>=x||ae<0||ae>=x||D<0||D>=x)return{success:!1,reason:"outOfRange"};if(r.value.some(Be=>Be.gridX===Te&&Be.gridZ===D&&Be.gridY===ae))return{success:!1,reason:"occupied"};const Re=R([$,$,$,$,$,$],Te,D,ae);le(),oe(Re);const Xe=i.value.map(Be=>Be.material.map(et=>et.color.getHex()));return s.value=[Xe],typeof h=="function"&&h("cube-change",{type:"copy",source:{gridX:j,gridY:te,gridZ:_e},target:{gridX:Te,gridY:ae,gridZ:D},cubeColors:z(),gridSize:x}),{success:!0,target:{gridX:Te,gridY:ae,gridZ:D}}}function R(L,k,j,te){const _e=L.map(ae=>new kx({color:ae})),Ee=new oi(A-Q,A-Q,A-Q),Ae=new En(Ee,_e),Te=r.value.length;return Ae.userData={cubeIndex:Te,gridX:k,gridY:te,gridZ:j},r.value.push({gridX:k,gridY:te,gridZ:j,colors:[...L]}),n.value.add(Ae),i.value.push(Ae),Ae}function X(L){L&&(L.geometry&&L.geometry.dispose(),Array.isArray(L.material)?L.material.forEach(k=>k&&k.dispose&&k.dispose()):L.material&&L.material.dispose&&L.material.dispose())}function H(L,k,j){if(G(),i.value.forEach(Ee=>{n.value.remove(Ee),X(Ee)}),i.value=[],r.value=[],s.value=[],ue(),Pe(),!L)return;let te=!1;for(let Ee=0;Ee<k;Ee++)for(let Ae=0;Ae<k;Ae++){const Te=L[Ee][Ae];Te>0&&(te=!0);for(let ae=0;ae<Te;ae++)R([$,$,$,$,$,$],Ae,Ee,ae)}if(!te)return;le();const _e=i.value.map(Ee=>Ee.material.map(Ae=>Ae.color.getHex()));s.value=[_e],j("color-change",{cubeColors:z(),gridSize:x})}function Y(L,k,j,te){if(!n.value||L<0||L>=x||k<0||k>=x||j<0||j>=x||r.value.some(ae=>ae.gridX===L&&ae.gridZ===k&&ae.gridY===j))return!1;R([$,$,$,$,$,$],L,k,j),le();const Te=i.value.map(ae=>ae.material.map(D=>D.color.getHex()));return s.value=[Te],typeof te=="function"&&te("color-change",{cubeColors:z(),gridSize:x}),!0}function he(L,k,j,te){if(!n.value)return{success:!1,reason:"noScene"};if(L<0||L>=x||k<0||k>=x||j<0||j>=x)return{success:!1,reason:"outOfRange"};const Ee=r.value.findIndex(ae=>ae.gridX===L&&ae.gridZ===k&&ae.gridY===j);if(Ee===-1)return{success:!1,reason:"notFound"};const Ae=i.value[Ee];if(Ae&&(n.value.remove(Ae),X(Ae)),i.value.splice(Ee,1),r.value.splice(Ee,1),C!==null&&(Ee===C?C=null:Ee<C&&(C-=1)),r.value.length>0)le();else{const ae=(x-1)/2;N=ae,W=ae,q=ae,Le(N,W,q),Ne(),me()}const Te=i.value.map(ae=>ae.material.map(D=>D.color.getHex()));return s.value=[Te],typeof te=="function"&&te("color-change",{cubeColors:z(),gridSize:x}),{success:!0}}function fe(L){if(C===null)return{success:!1,reason:"noSelection"};const k=r.value[C];if(!k)return ue(),{success:!1,reason:"noSelection"};const j={gridX:k.gridX,gridY:k.gridZ,gridZ:k.gridY},te=he(k.gridX,k.gridZ,k.gridY,L);return te.success?(typeof L=="function"&&L("cube-change",{type:"selection-cleared"}),{success:!0,target:j}):te}function xe(L,k){if(!n.value||!e.value)return;n.value.quaternion.set(0,0,0,1);const j=k===3?6:k===4?8:15;switch(L){case"front":e.value.position.set(0,0,j);break;case"top":e.value.position.set(0,j,0);break;case"left":e.value.position.set(-j,0,0);break;case"right":e.value.position.set(j,0,0);break;case"back":e.value.position.set(0,0,-j);break;case"reset":const te=k===3?5:k===4?6:10;e.value.position.set(te,te*.5,te*.8);break}e.value.lookAt(0,0,0)}function Z(L,k){if(s.value.length<=1)return;s.value.pop();const j=s.value[s.value.length-1];i.value.forEach((te,_e)=>{const Ee=j[_e];Ee&&(te.material.forEach((Ae,Te)=>{const ae=Ee[Te];typeof ae=="number"&&Ae.color.setHex(ae)}),r.value[_e]&&(r.value[_e].colors=[...Ee]))}),L("color-change",{cubeColors:z(),gridSize:x})}function B(L){if(n.value){n.value.quaternion.set(0,0,0,1);const k=L===3?5:L===4?6:10;e.value&&(e.value.position.set(k,k*.5,k*.8),e.value.lookAt(0,0,0))}}function I(){se(),ee(),ce(),ue(),G(),a.value=!1,m&&(cancelAnimationFrame(m),m=null),t.value&&(t.value.dispose(),t.value=null),n.value=null,e.value=null}function Se(){m=requestAnimationFrame(Se),t.value&&n.value&&e.value&&t.value.render(n.value,e.value)}return{scene:n,camera:e,renderer:t,cubes:i,cubeColors:r,colorHistory:s,isDragging:a,initThreeJS:de,create3DModel:H,addCubeAt:Y,removeCubeAt:he,removeSelectedCube:fe,setView:xe,undoColor:Z,resetScene:B,destroy:I,updateAxesPosition:Le}}const Kx=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Zx={class:"app"},Jx={class:"score-board"},Qx={id:"score"},eM={id:"streak"},tM={class:"grid-size-selector"},nM=["value","checked","onChange"],iM={class:"game-area"},rM={class:"game-left"},sM={class:"given-views"},oM={class:"view-container"},aM={class:"view-container"},lM={class:"options"},cM=["onClick"],uM={class:"btn-group"},fM={class:"current-view"},hM={class:"add-cube-panel"},dM={class:"add-cube-inputs"},pM=["max"],mM=["max"],gM=["max"],_M={class:"add-cube-range"},vM={class:"real-time-left-view"},xM={__name:"App",setup(n){const e=at(5),t=[3,4,5],i=at(0),r=at(0),s=at(!1),a=at(-1),o=at(""),l=at(""),c=at(!1),u=at(!1),f=at("front"),d=at(null),m=at([]),x=at([]),_=at([]),p=at([]),h=at(0),b=at([]),S=at([]),T=at([]),P=at({x:1,y:1,z:1}),C=at(""),w=at(""),$=at([]),E=at(null),{initThreeJS:A,create3DModel:Q,addCubeAt:re,removeCubeAt:ge,removeSelectedCube:N,setView:W,undoColor:q,resetScene:se,destroy:ee}=jx();function ce(Z,B){if(Z==="cube-change"&&B){if(B.type==="select"){B.target&&(z(`已选中 (X=${B.target.gridX+1}, Y=${B.target.gridY+1}, Z=${B.target.gridZ+1})，按 Delete 可删除`,""),P.value={x:B.target.gridX+1,y:B.target.gridY+1,z:B.target.gridZ+1});return}if(B.type==="selection-cleared"){z("已取消选中立方体","");return}if(B.type==="copy"){B.target&&z(`已从 (${B.source.gridX+1}, ${B.source.gridY+1}, ${B.source.gridZ+1}) 复制到 (${B.target.gridX+1}, ${B.target.gridY+1}, ${B.target.gridZ+1})`,"success"),fe(B);return}if(B.type==="copy-failed"){const I={occupied:"复制失败：目标位置已有立方体",outOfRange:"复制失败：目标位置超出网格范围",unknown:"复制失败：请换一个面或方向重试"};z(I[B.reason]||I.unknown,"error");return}}fe(B)}const ue=gn(()=>e.value===3?32:e.value===4?28:24),ve=gn(()=>({gridTemplateColumns:`repeat(${e.value}, ${ue.value}px)`})),me=gn(()=>({width:ue.value+"px",height:ue.value+"px"})),ie=gn(()=>({gridTemplateColumns:`repeat(${e.value}, 20px)`})),de=gn(()=>({width:"20px",height:"20px"})),be=gn(()=>Fe(S.value)),Pe=gn(()=>Fe(T.value)),Le=gn(()=>Fe(b.value)),Ne=gn(()=>p.value.map(Z=>Fe(Z)));function Fe(Z){if(!Z||Z.length===0)return[];const B=[];for(let I=0;I<e.value;I++)for(let Se=0;Se<e.value;Se++)B.push(Z[I][Se]);return B}function De(Z){const B=[];for(let I=e.value-1;I>=0;I--){const Se=[];for(let L=0;L<e.value;L++)Se.push({filled:Z[I][L]>0,color:"blue"});B.push(Se)}return B}function Ve(Z){const B=[];for(let I=e.value-1;I>=0;I--){const Se=[];for(let L=0;L<e.value;L++){let k=!1;for(let j=0;j<e.value;j++)if(Z[j][L]>I){k=!0;break}Se.push({filled:k,color:"blue"})}B.push(Se)}return B}function v(Z){const B=[];for(let I=e.value-1;I>=0;I--){const Se=[];for(let L=e.value-1;L>=0;L--){let k=!1;for(let j=0;j<e.value;j++)if(Z[L][j]>I){k=!0;break}Se.push({filled:k,color:"blue"})}B.push(Se)}return B}function U(){const Z=[];for(let I=0;I<e.value;I++){const Se=[];for(let L=0;L<e.value;L++)Se.push(Math.floor(Math.random()*(e.value+1)));Z.push(Se)}let B=!1;for(let I=0;I<e.value;I++){for(let Se=0;Se<e.value;Se++)if(Z[I][Se]>0){B=!0;break}if(B)break}if(!B){const I=Math.floor(e.value/2);Z[I][I]=1}return Z}function F(Z){const B=[JSON.parse(JSON.stringify(Z))];for(;B.length<3;){const I=JSON.parse(JSON.stringify(Z)),Se=Math.floor(Math.random()*4)+1;for(let k=0;k<Se;k++){const j=Math.floor(Math.random()*e.value),te=Math.floor(Math.random()*e.value);I[j][te]=I[j][te].filled?{filled:!1,color:"blue"}:{filled:!0,color:"blue"}}let L=!1;for(const k of B)if(JSON.stringify(k)===JSON.stringify(I)){L=!0;break}L||B.push(I)}return B.sort(()=>Math.random()-.5)}function z(Z,B=""){C.value=Z,w.value=B}function G(){P.value={x:1,y:1,z:1},z(""),$.value=[]}function oe(){s.value=!1,a.value=-1,o.value="",l.value="",c.value=!1,u.value=!1,G(),d.value=U(),m.value=Ve(d.value),x.value=De(d.value),_.value=v(d.value),S.value=JSON.parse(JSON.stringify(m.value)),T.value=JSON.parse(JSON.stringify(x.value)),b.value=JSON.parse(JSON.stringify(_.value));const Z=F(_.value);p.value=Z,h.value=Z.findIndex(B=>JSON.stringify(B)===JSON.stringify(_.value))}function le(Z){s.value||(s.value=!0,a.value=Z,Z===h.value?(o.value="✓ 回答正确！",l.value="success",i.value+=10,r.value++):(o.value="✗ 回答错误！",l.value="error",r.value=0),u.value=!0)}function M(){c.value=!1,u.value=!1,se(e.value),oe()}function g(Z){e.value=Z,i.value=0,r.value=0,oe()}function R(){c.value=!0,z(""),ju(()=>{E.value&&(A(E.value,e.value,ce),se(e.value),Q(d.value,e.value,ce),W("front",e.value),f.value="front")})}function X(Z){W(Z,e.value),f.value=Z}function H(){q(fe,e.value)}function Y(){if(!c.value){z("请先点击“查看3D模型”后再新增","error");return}const Z=Math.trunc(P.value.x)-1,B=Math.trunc(P.value.y)-1,I=Math.trunc(P.value.z)-1;if([Z,B,I].some(j=>Number.isNaN(j))){z("请输入有效的整数坐标","error");return}if(Z<0||Z>=e.value||B<0||B>=e.value||I<0||I>=e.value){z(`坐标超出范围，请输入 1 ~ ${e.value}`,"error");return}if($.value.some(j=>j.gridX===Z&&j.gridZ===B&&j.gridY===I)){z("该坐标已存在立方体，请换一个位置","error");return}if(!re(Z,B,I,ce)){z("新增失败，请重试","error");return}z(`已在 (X=${Z+1}, Y=${B+1}, Z=${I+1}) 新增立方体`,"success"),P.value={x:Z+1,y:B+1,z:Math.min(e.value,I+2)}}function he(){if(!c.value){z("请先点击“查看3D模型”后再删除","error");return}if(!d.value){z("当前没有可编辑的模型数据","error");return}const Z=Math.trunc(P.value.x)-1,B=Math.trunc(P.value.y)-1,I=Math.trunc(P.value.z)-1;if([Z,B,I].some(k=>Number.isNaN(k))){z("请输入有效的整数坐标","error");return}if(Z<0||Z>=e.value||B<0||B>=e.value||I<0||I>=e.value){z(`坐标超出范围，请输入 1 ~ ${e.value}`,"error");return}const L=ge(Z,B,I,ce);if(!L.success){const k={outOfRange:`坐标超出范围，请输入 1 ~ ${e.value}`,notFound:"该坐标没有立方体，请检查后重试",noScene:"3D 场景未初始化，请重新打开 3D 模型",unknown:"删除失败，请重试"};z(k[L.reason]||k.unknown,"error");return}z(`已删除 (X=${Z+1}, Y=${B+1}, Z=${I+1}) 的立方体`,"success"),P.value={x:Z+1,y:B+1,z:Math.max(1,I)}}function fe(Z,B){var Te,ae,D;const I=typeof Z=="string"?B:Z;if(!I)return;const Se=I.cubeColors,L=I.gridSize;if(!Array.isArray(Se)||typeof L!="number")return;const k=Array.from({length:L},()=>Array(L).fill(0)),j=new Set,te={};$.value=Se.map(pe=>({...pe,colors:Array.isArray(pe.colors)?[...pe.colors]:[]}));for(const pe of Se){const Me=pe.gridX,we=pe.gridZ,Re=pe.gridY;if(Me<0||Me>=L||we<0||we>=L||Re<0||Re>=L)continue;const Be=`${Me},${we},${Re}`;j.add(Be),te[Be]=pe.colors,k[we][Me]=Math.max(k[we][Me],Re+1)}const _e=[];for(let pe=L-1;pe>=0;pe--){const Me=[];for(let we=0;we<L;we++){let Re="blue",Xe=!1;for(let Be=0;Be<L;Be++){const et=`${we},${Be},${pe}`;if(j.has(et)){Xe=!0,((Te=te[et])==null?void 0:Te[4])===16711680&&(Re="red");break}}Me.push({filled:Xe,color:Re})}_e.push(Me)}S.value=_e;const Ee=[];for(let pe=L-1;pe>=0;pe--){const Me=[];for(let we=0;we<L;we++){let Re="blue",Xe=!1;for(let Be=L-1;Be>=0;Be--){const et=`${we},${pe},${Be}`;if(j.has(et)){Xe=!0,((ae=te[et])==null?void 0:ae[2])===16711680&&(Re="red");break}}Me.push({filled:Xe,color:Re})}Ee.push(Me)}T.value=Ee;const Ae=[];for(let pe=L-1;pe>=0;pe--){const Me=[];for(let we=L-1;we>=0;we--){let Re="blue",Xe=!1;for(let Be=0;Be<L;Be++){const et=`${Be},${we},${pe}`;if(j.has(et)){Xe=!0,((D=te[et])==null?void 0:D[1])===16711680&&(Re="red");break}}Me.push({filled:Xe,color:Re})}Ae.push(Me)}b.value=Ae,d.value=k}function xe(Z){const B=Z.key,I=Z.target,Se=I instanceof HTMLElement&&(I.tagName==="INPUT"||I.tagName==="TEXTAREA"||I.isContentEditable);if((Z.ctrlKey||Z.metaKey)&&B==="z"){Z.preventDefault(),H();return}if(!Se&&(B==="Delete"||B==="Backspace")&&c.value){Z.preventDefault();const L=N(ce);if(!L.success){L.reason==="noSelection"?z("请先点击一个立方体进行选中，再按 Delete 删除","error"):z("删除失败，请重试","error");return}L.target?(z(`已删除选中立方体 (X=${L.target.gridX+1}, Y=${L.target.gridY+1}, Z=${L.target.gridZ+1})`,"success"),P.value={x:L.target.gridX+1,y:L.target.gridY+1,z:Math.max(1,L.target.gridZ)}):z("已删除选中立方体","success")}}return of(()=>{oe(),document.addEventListener("keydown",xe)}),Va(()=>{document.removeEventListener("keydown",xe),ee()}),(Z,B)=>(jt(),Kt("div",Zx,[B[20]||(B[20]=Ie("h1",null,"三视图拼图",-1)),Ie("div",Jx,[B[7]||(B[7]=_i(" 得分: ",-1)),Ie("span",Qx,In(i.value),1),B[8]||(B[8]=_i(" | 连续正确: ",-1)),Ie("span",eM,In(r.value),1)]),Ie("div",tM,[B[9]||(B[9]=Ie("span",null,"网格大小：",-1)),(jt(),Kt(It,null,Pi(t,I=>Ie("label",{key:I},[Ie("input",{type:"radio",name:"gridSize",value:I,checked:e.value===I,onChange:Se=>g(I)},null,40,nM),_i(" "+In(I)+"×"+In(I)+"×"+In(I),1)])),64))]),Ie("div",iM,[Ie("div",rM,[Ie("div",sM,[Ie("div",oM,[B[10]||(B[10]=Ie("span",{class:"view-label"},"主视图",-1)),Ie("div",{class:"grid",style:Jt(ve.value)},[(jt(!0),Kt(It,null,Pi(be.value,(I,Se)=>(jt(),Kt("div",{key:"front-"+Se,class:Pt(["cell",[I.filled?"filled":"empty",I.color]]),style:Jt(me.value)},null,6))),128))],4)]),Ie("div",aM,[B[11]||(B[11]=Ie("span",{class:"view-label"},"俯视图",-1)),Ie("div",{class:"grid",style:Jt(ve.value)},[(jt(!0),Kt(It,null,Pi(Pe.value,(I,Se)=>(jt(),Kt("div",{key:"top-"+Se,class:Pt(["cell",[I.filled?"filled":"empty",I.color]]),style:Jt(me.value)},null,6))),128))],4)])]),Ie("div",lM,[(jt(!0),Kt(It,null,Pi(p.value,(I,Se)=>(jt(),Kt("div",{key:Se,class:Pt(["option",{correct:s.value&&Se===h.value,wrong:s.value&&a.value===Se&&Se!==h.value,disabled:s.value}]),onClick:L=>le(Se)},[B[12]||(B[12]=Ie("span",{class:"view-label"},"左视图",-1)),Ie("div",{class:"grid",style:Jt(ve.value)},[(jt(!0),Kt(It,null,Pi(Ne.value[Se],(L,k)=>(jt(),Kt("div",{key:"option-"+Se+"-"+k,class:Pt(["cell",[L.filled?"filled":"empty",L.color]]),style:Jt(me.value)},null,6))),128))],4)],10,cM))),128))]),Ie("div",{class:Pt(["message",l.value])},In(o.value),3),Ie("div",uM,[Ie("button",{class:"btn view-3d-btn",style:Jt({display:u.value?"inline-block":"none"}),onClick:R}," 查看3D模型 ",4),Ie("button",{class:Pt(["btn",{show:s.value}]),onClick:M}," 下一题 ",2)])]),Ie("div",{class:Pt(["game-right",{show:c.value}])},[B[18]||(B[18]=Ie("div",{class:"view-3d-title"},"3D 模型预览",-1)),Ie("div",{id:"canvas-container",ref_key:"canvasContainer",ref:E},null,512),Ie("div",fM,[Ie("button",{class:Pt(["view-btn",{active:f.value==="front"}]),onClick:B[0]||(B[0]=I=>X("front"))}," 正视图 ",2),Ie("button",{class:Pt(["view-btn",{active:f.value==="top"}]),onClick:B[1]||(B[1]=I=>X("top"))}," 俯视图 ",2),Ie("button",{class:Pt(["view-btn",{active:f.value==="left"}]),onClick:B[2]||(B[2]=I=>X("left"))}," 左视图 ",2),Ie("button",{class:"reset-view-btn",onClick:B[3]||(B[3]=I=>X("reset"))}," 重置视角 "),Ie("button",{class:"undo-btn",onClick:H}," 撤销染色 ")]),Ie("div",hM,[B[16]||(B[16]=Ie("div",{class:"add-cube-title"},"按坐标新增/删除小立方体",-1)),Ie("div",dM,[Ie("label",null,[B[13]||(B[13]=_i(" X ",-1)),po(Ie("input",{"onUpdate:modelValue":B[4]||(B[4]=I=>P.value.x=I),type:"number",min:1,max:e.value},null,8,pM),[[So,P.value.x,void 0,{number:!0}]])]),Ie("label",null,[B[14]||(B[14]=_i(" Y ",-1)),po(Ie("input",{"onUpdate:modelValue":B[5]||(B[5]=I=>P.value.y=I),type:"number",min:1,max:e.value},null,8,mM),[[So,P.value.y,void 0,{number:!0}]])]),Ie("label",null,[B[15]||(B[15]=_i(" Z ",-1)),po(Ie("input",{"onUpdate:modelValue":B[6]||(B[6]=I=>P.value.z=I),type:"number",min:1,max:e.value},null,8,gM),[[So,P.value.z,void 0,{number:!0}]])]),Ie("button",{class:"add-cube-btn",onClick:Y}," 新增 "),Ie("button",{class:"remove-cube-btn",onClick:he}," 删除 ")]),Ie("div",_M,"坐标范围：1 ~ "+In(e.value)+"（X:右，Y:前，Z:上）",1),Ie("div",{class:Pt(["add-cube-feedback",w.value])},In(C.value),3)]),B[19]||(B[19]=Jd('<div class="axis-label" data-v-3fb9c510><div class="axis-item" data-v-3fb9c510><div class="axis-dot axis-x" data-v-3fb9c510></div>X (右) </div><div class="axis-item" data-v-3fb9c510><div class="axis-dot axis-y" data-v-3fb9c510></div>Y (前) </div><div class="axis-item" data-v-3fb9c510><div class="axis-dot axis-z" data-v-3fb9c510></div>Z (上) </div></div><div class="hint-text" data-v-3fb9c510>🖱️ 拖拽旋转 | 滚轮缩放 | 点击面染色并选中 | Cmd/Ctrl+点击仅选中 | Shift+拖拽复制 | Delete删除选中</div>',2)),Ie("div",vM,[B[17]||(B[17]=Ie("div",{class:"view-3d-title"},"实时左视图",-1)),Ie("div",{id:"leftViewGrid",style:Jt(ie.value)},[(jt(!0),Kt(It,null,Pi(Le.value,(I,Se)=>(jt(),Kt("div",{key:"leftview-"+Se,class:Pt(["cell",[I.filled?"filled":"empty",I.color]]),style:Jt(de.value)},null,6))),128))],4)])],2)]),B[21]||(B[21]=Ie("div",{class:"legend"},[Ie("span",null,"根据已知的两个视图，推测第三个视图")],-1))]))}},MM=Kx(xM,[["__scopeId","data-v-3fb9c510"]]);Up(MM).mount("#app");
