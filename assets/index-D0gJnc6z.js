const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GLTFLoader-CEwsVrLk.js","assets/three-jHJIlcML.js"])))=>i.map(i=>d[i]);
var Qg=Object.defineProperty;var jg=(i,e,t)=>e in i?Qg(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ye=(i,e,t)=>jg(i,typeof e!="symbol"?e+"":e,t);import{W as ev,S as of,N as tv,C as nv,M as iv,D as lf,a as ca,P as hf,A as rv,b as cf,c as ua,d as sv,e as av,G as uf,V as bs,B as Ho,F as fa,f as ov,L as lv,g as ff}from"./three-jHJIlcML.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Wo,df;function hv(){if(df)return Wo;df=1,Wo=i;function i(t){this.roots=new Array(t),this.ranks=new Array(t);for(var n=0;n<t;++n)this.roots[n]=n,this.ranks[n]=0}var e=i.prototype;return Object.defineProperty(e,"length",{get:function(){return this.roots.length}}),e.makeSet=function(){var t=this.roots.length;return this.roots.push(t),this.ranks.push(0),t},e.find=function(t){for(var n=t,r=this.roots;r[t]!==t;)t=r[t];for(;r[n]!==t;){var s=r[n];r[n]=t,n=s}return t},e.link=function(t,n){var r=this.find(t),s=this.find(n);if(r!==s){var a=this.ranks,o=this.roots,h=a[r],c=a[s];h<c?o[r]=s:c<h?o[s]=r:(o[s]=r,++a[r])}},Wo}var mt={},Xt={},pf;function To(){if(pf)return Xt;pf=1;var i=32;Xt.INT_BITS=i,Xt.INT_MAX=2147483647,Xt.INT_MIN=-1<<i-1,Xt.sign=function(n){return(n>0)-(n<0)},Xt.abs=function(n){var r=n>>i-1;return(n^r)-r},Xt.min=function(n,r){return r^(n^r)&-(n<r)},Xt.max=function(n,r){return n^(n^r)&-(n<r)},Xt.isPow2=function(n){return!(n&n-1)&&!!n},Xt.log2=function(n){var r,s;return r=(n>65535)<<4,n>>>=r,s=(n>255)<<3,n>>>=s,r|=s,s=(n>15)<<2,n>>>=s,r|=s,s=(n>3)<<1,n>>>=s,r|=s,r|n>>1},Xt.log10=function(n){return n>=1e9?9:n>=1e8?8:n>=1e7?7:n>=1e6?6:n>=1e5?5:n>=1e4?4:n>=1e3?3:n>=100?2:n>=10?1:0},Xt.popCount=function(n){return n=n-(n>>>1&1431655765),n=(n&858993459)+(n>>>2&858993459),(n+(n>>>4)&252645135)*16843009>>>24};function e(n){var r=32;return n&=-n,n&&r--,n&65535&&(r-=16),n&16711935&&(r-=8),n&252645135&&(r-=4),n&858993459&&(r-=2),n&1431655765&&(r-=1),r}Xt.countTrailingZeros=e,Xt.nextPow2=function(n){return n+=n===0,--n,n|=n>>>1,n|=n>>>2,n|=n>>>4,n|=n>>>8,n|=n>>>16,n+1},Xt.prevPow2=function(n){return n|=n>>>1,n|=n>>>2,n|=n>>>4,n|=n>>>8,n|=n>>>16,n-(n>>>1)},Xt.parity=function(n){return n^=n>>>16,n^=n>>>8,n^=n>>>4,n&=15,27030>>>n&1};var t=new Array(256);return(function(n){for(var r=0;r<256;++r){var s=r,a=r,o=7;for(s>>>=1;s;s>>>=1)a<<=1,a|=s&1,--o;n[r]=a<<o&255}})(t),Xt.reverse=function(n){return t[n&255]<<24|t[n>>>8&255]<<16|t[n>>>16&255]<<8|t[n>>>24&255]},Xt.interleave2=function(n,r){return n&=65535,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,r&=65535,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,n|r<<1},Xt.deinterleave2=function(n,r){return n=n>>>r&1431655765,n=(n|n>>>1)&858993459,n=(n|n>>>2)&252645135,n=(n|n>>>4)&16711935,n=(n|n>>>16)&65535,n<<16>>16},Xt.interleave3=function(n,r,s){return n&=1023,n=(n|n<<16)&4278190335,n=(n|n<<8)&251719695,n=(n|n<<4)&3272356035,n=(n|n<<2)&1227133513,r&=1023,r=(r|r<<16)&4278190335,r=(r|r<<8)&251719695,r=(r|r<<4)&3272356035,r=(r|r<<2)&1227133513,n|=r<<1,s&=1023,s=(s|s<<16)&4278190335,s=(s|s<<8)&251719695,s=(s|s<<4)&3272356035,s=(s|s<<2)&1227133513,n|s<<2},Xt.deinterleave3=function(n,r){return n=n>>>r&1227133513,n=(n|n>>>2)&3272356035,n=(n|n>>>4)&251719695,n=(n|n>>>8)&4278190335,n=(n|n>>>16)&1023,n<<22>>22},Xt.nextCombination=function(n){var r=n|n-1;return r+1|(~r&-~r)-1>>>e(n)+1},Xt}var Xo,mf;function cv(){if(mf)return Xo;mf=1;function i(n,r,s){var a=n[s]|0;if(a<=0)return[];var o=new Array(a),h;if(s===n.length-1)for(h=0;h<a;++h)o[h]=r;else for(h=0;h<a;++h)o[h]=i(n,r,s+1);return o}function e(n,r){var s,a;for(s=new Array(n),a=0;a<n;++a)s[a]=r;return s}function t(n,r){switch(typeof r>"u"&&(r=0),typeof n){case"number":if(n>0)return e(n|0,r);break;case"object":if(typeof n.length=="number")return i(n,r,0);break}return[]}return Xo=t,Xo}var qo={},Es={},gf;function uv(){if(gf)return Es;gf=1,Es.byteLength=o,Es.toByteArray=c,Es.fromByteArray=g;for(var i=[],e=[],t=typeof Uint8Array<"u"?Uint8Array:Array,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=0,s=n.length;r<s;++r)i[r]=n[r],e[n.charCodeAt(r)]=r;e[45]=62,e[95]=63;function a(w){var T=w.length;if(T%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var N=w.indexOf("=");N===-1&&(N=T);var C=N===T?0:4-N%4;return[N,C]}function o(w){var T=a(w),N=T[0],C=T[1];return(N+C)*3/4-C}function h(w,T,N){return(T+N)*3/4-N}function c(w){var T,N=a(w),C=N[0],R=N[1],m=new t(h(w,C,R)),f=0,S=R>0?C-4:C,l;for(l=0;l<S;l+=4)T=e[w.charCodeAt(l)]<<18|e[w.charCodeAt(l+1)]<<12|e[w.charCodeAt(l+2)]<<6|e[w.charCodeAt(l+3)],m[f++]=T>>16&255,m[f++]=T>>8&255,m[f++]=T&255;return R===2&&(T=e[w.charCodeAt(l)]<<2|e[w.charCodeAt(l+1)]>>4,m[f++]=T&255),R===1&&(T=e[w.charCodeAt(l)]<<10|e[w.charCodeAt(l+1)]<<4|e[w.charCodeAt(l+2)]>>2,m[f++]=T>>8&255,m[f++]=T&255),m}function d(w){return i[w>>18&63]+i[w>>12&63]+i[w>>6&63]+i[w&63]}function p(w,T,N){for(var C,R=[],m=T;m<N;m+=3)C=(w[m]<<16&16711680)+(w[m+1]<<8&65280)+(w[m+2]&255),R.push(d(C));return R.join("")}function g(w){for(var T,N=w.length,C=N%3,R=[],m=16383,f=0,S=N-C;f<S;f+=m)R.push(p(w,f,f+m>S?S:f+m));return C===1?(T=w[N-1],R.push(i[T>>2]+i[T<<4&63]+"==")):C===2&&(T=(w[N-2]<<8)+w[N-1],R.push(i[T>>10]+i[T>>4&63]+i[T<<2&63]+"=")),R.join("")}return Es}var da={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var vf;function fv(){return vf||(vf=1,da.read=function(i,e,t,n,r){var s,a,o=r*8-n-1,h=(1<<o)-1,c=h>>1,d=-7,p=t?r-1:0,g=t?-1:1,w=i[e+p];for(p+=g,s=w&(1<<-d)-1,w>>=-d,d+=o;d>0;s=s*256+i[e+p],p+=g,d-=8);for(a=s&(1<<-d)-1,s>>=-d,d+=n;d>0;a=a*256+i[e+p],p+=g,d-=8);if(s===0)s=1-c;else{if(s===h)return a?NaN:(w?-1:1)*(1/0);a=a+Math.pow(2,n),s=s-c}return(w?-1:1)*a*Math.pow(2,s-n)},da.write=function(i,e,t,n,r,s){var a,o,h,c=s*8-r-1,d=(1<<c)-1,p=d>>1,g=r===23?Math.pow(2,-24)-Math.pow(2,-77):0,w=n?0:s-1,T=n?1:-1,N=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,a=d):(a=Math.floor(Math.log(e)/Math.LN2),e*(h=Math.pow(2,-a))<1&&(a--,h*=2),a+p>=1?e+=g/h:e+=g*Math.pow(2,1-p),e*h>=2&&(a++,h/=2),a+p>=d?(o=0,a=d):a+p>=1?(o=(e*h-1)*Math.pow(2,r),a=a+p):(o=e*Math.pow(2,p-1)*Math.pow(2,r),a=0));r>=8;i[t+w]=o&255,w+=T,o/=256,r-=8);for(a=a<<r|o,c+=r;c>0;i[t+w]=a&255,w+=T,a/=256,c-=8);i[t+w-T]|=N*128}),da}/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var _f;function n0(){return _f||(_f=1,(function(i){const e=uv(),t=fv(),n=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;i.Buffer=o,i.SlowBuffer=m,i.INSPECT_MAX_BYTES=50;const r=2147483647;i.kMaxLength=r,o.TYPED_ARRAY_SUPPORT=s(),!o.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function s(){try{const v=new Uint8Array(1),y={foo:function(){return 42}};return Object.setPrototypeOf(y,Uint8Array.prototype),Object.setPrototypeOf(v,y),v.foo()===42}catch{return!1}}Object.defineProperty(o.prototype,"parent",{enumerable:!0,get:function(){if(o.isBuffer(this))return this.buffer}}),Object.defineProperty(o.prototype,"offset",{enumerable:!0,get:function(){if(o.isBuffer(this))return this.byteOffset}});function a(v){if(v>r)throw new RangeError('The value "'+v+'" is invalid for option "size"');const y=new Uint8Array(v);return Object.setPrototypeOf(y,o.prototype),y}function o(v,y,A){if(typeof v=="number"){if(typeof y=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return p(v)}return h(v,y,A)}o.poolSize=8192;function h(v,y,A){if(typeof v=="string")return g(v,y);if(ArrayBuffer.isView(v))return T(v);if(v==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof v);if(Ae(v,ArrayBuffer)||v&&Ae(v.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Ae(v,SharedArrayBuffer)||v&&Ae(v.buffer,SharedArrayBuffer)))return N(v,y,A);if(typeof v=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const V=v.valueOf&&v.valueOf();if(V!=null&&V!==v)return o.from(V,y,A);const q=C(v);if(q)return q;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof v[Symbol.toPrimitive]=="function")return o.from(v[Symbol.toPrimitive]("string"),y,A);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof v)}o.from=function(v,y,A){return h(v,y,A)},Object.setPrototypeOf(o.prototype,Uint8Array.prototype),Object.setPrototypeOf(o,Uint8Array);function c(v){if(typeof v!="number")throw new TypeError('"size" argument must be of type number');if(v<0)throw new RangeError('The value "'+v+'" is invalid for option "size"')}function d(v,y,A){return c(v),v<=0?a(v):y!==void 0?typeof A=="string"?a(v).fill(y,A):a(v).fill(y):a(v)}o.alloc=function(v,y,A){return d(v,y,A)};function p(v){return c(v),a(v<0?0:R(v)|0)}o.allocUnsafe=function(v){return p(v)},o.allocUnsafeSlow=function(v){return p(v)};function g(v,y){if((typeof y!="string"||y==="")&&(y="utf8"),!o.isEncoding(y))throw new TypeError("Unknown encoding: "+y);const A=f(v,y)|0;let V=a(A);const q=V.write(v,y);return q!==A&&(V=V.slice(0,q)),V}function w(v){const y=v.length<0?0:R(v.length)|0,A=a(y);for(let V=0;V<y;V+=1)A[V]=v[V]&255;return A}function T(v){if(Ae(v,Uint8Array)){const y=new Uint8Array(v);return N(y.buffer,y.byteOffset,y.byteLength)}return w(v)}function N(v,y,A){if(y<0||v.byteLength<y)throw new RangeError('"offset" is outside of buffer bounds');if(v.byteLength<y+(A||0))throw new RangeError('"length" is outside of buffer bounds');let V;return y===void 0&&A===void 0?V=new Uint8Array(v):A===void 0?V=new Uint8Array(v,y):V=new Uint8Array(v,y,A),Object.setPrototypeOf(V,o.prototype),V}function C(v){if(o.isBuffer(v)){const y=R(v.length)|0,A=a(y);return A.length===0||v.copy(A,0,0,y),A}if(v.length!==void 0)return typeof v.length!="number"||te(v.length)?a(0):w(v);if(v.type==="Buffer"&&Array.isArray(v.data))return w(v.data)}function R(v){if(v>=r)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+r.toString(16)+" bytes");return v|0}function m(v){return+v!=v&&(v=0),o.alloc(+v)}o.isBuffer=function(y){return y!=null&&y._isBuffer===!0&&y!==o.prototype},o.compare=function(y,A){if(Ae(y,Uint8Array)&&(y=o.from(y,y.offset,y.byteLength)),Ae(A,Uint8Array)&&(A=o.from(A,A.offset,A.byteLength)),!o.isBuffer(y)||!o.isBuffer(A))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(y===A)return 0;let V=y.length,q=A.length;for(let Q=0,$=Math.min(V,q);Q<$;++Q)if(y[Q]!==A[Q]){V=y[Q],q=A[Q];break}return V<q?-1:q<V?1:0},o.isEncoding=function(y){switch(String(y).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.concat=function(y,A){if(!Array.isArray(y))throw new TypeError('"list" argument must be an Array of Buffers');if(y.length===0)return o.alloc(0);let V;if(A===void 0)for(A=0,V=0;V<y.length;++V)A+=y[V].length;const q=o.allocUnsafe(A);let Q=0;for(V=0;V<y.length;++V){let $=y[V];if(Ae($,Uint8Array))Q+$.length>q.length?(o.isBuffer($)||($=o.from($)),$.copy(q,Q)):Uint8Array.prototype.set.call(q,$,Q);else if(o.isBuffer($))$.copy(q,Q);else throw new TypeError('"list" argument must be an Array of Buffers');Q+=$.length}return q};function f(v,y){if(o.isBuffer(v))return v.length;if(ArrayBuffer.isView(v)||Ae(v,ArrayBuffer))return v.byteLength;if(typeof v!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof v);const A=v.length,V=arguments.length>2&&arguments[2]===!0;if(!V&&A===0)return 0;let q=!1;for(;;)switch(y){case"ascii":case"latin1":case"binary":return A;case"utf8":case"utf-8":return Ge(v).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return A*2;case"hex":return A>>>1;case"base64":return nt(v).length;default:if(q)return V?-1:Ge(v).length;y=(""+y).toLowerCase(),q=!0}}o.byteLength=f;function S(v,y,A){let V=!1;if((y===void 0||y<0)&&(y=0),y>this.length||((A===void 0||A>this.length)&&(A=this.length),A<=0)||(A>>>=0,y>>>=0,A<=y))return"";for(v||(v="utf8");;)switch(v){case"hex":return O(this,y,A);case"utf8":case"utf-8":return I(this,y,A);case"ascii":return z(this,y,A);case"latin1":case"binary":return G(this,y,A);case"base64":return E(this,y,A);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,y,A);default:if(V)throw new TypeError("Unknown encoding: "+v);v=(v+"").toLowerCase(),V=!0}}o.prototype._isBuffer=!0;function l(v,y,A){const V=v[y];v[y]=v[A],v[A]=V}o.prototype.swap16=function(){const y=this.length;if(y%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let A=0;A<y;A+=2)l(this,A,A+1);return this},o.prototype.swap32=function(){const y=this.length;if(y%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let A=0;A<y;A+=4)l(this,A,A+3),l(this,A+1,A+2);return this},o.prototype.swap64=function(){const y=this.length;if(y%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let A=0;A<y;A+=8)l(this,A,A+7),l(this,A+1,A+6),l(this,A+2,A+5),l(this,A+3,A+4);return this},o.prototype.toString=function(){const y=this.length;return y===0?"":arguments.length===0?I(this,0,y):S.apply(this,arguments)},o.prototype.toLocaleString=o.prototype.toString,o.prototype.equals=function(y){if(!o.isBuffer(y))throw new TypeError("Argument must be a Buffer");return this===y?!0:o.compare(this,y)===0},o.prototype.inspect=function(){let y="";const A=i.INSPECT_MAX_BYTES;return y=this.toString("hex",0,A).replace(/(.{2})/g,"$1 ").trim(),this.length>A&&(y+=" ... "),"<Buffer "+y+">"},n&&(o.prototype[n]=o.prototype.inspect),o.prototype.compare=function(y,A,V,q,Q){if(Ae(y,Uint8Array)&&(y=o.from(y,y.offset,y.byteLength)),!o.isBuffer(y))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof y);if(A===void 0&&(A=0),V===void 0&&(V=y?y.length:0),q===void 0&&(q=0),Q===void 0&&(Q=this.length),A<0||V>y.length||q<0||Q>this.length)throw new RangeError("out of range index");if(q>=Q&&A>=V)return 0;if(q>=Q)return-1;if(A>=V)return 1;if(A>>>=0,V>>>=0,q>>>=0,Q>>>=0,this===y)return 0;let $=Q-q,oe=V-A;const Re=Math.min($,oe),Ce=this.slice(q,Q),Me=y.slice(A,V);for(let Ee=0;Ee<Re;++Ee)if(Ce[Ee]!==Me[Ee]){$=Ce[Ee],oe=Me[Ee];break}return $<oe?-1:oe<$?1:0};function L(v,y,A,V,q){if(v.length===0)return-1;if(typeof A=="string"?(V=A,A=0):A>2147483647?A=2147483647:A<-2147483648&&(A=-2147483648),A=+A,te(A)&&(A=q?0:v.length-1),A<0&&(A=v.length+A),A>=v.length){if(q)return-1;A=v.length-1}else if(A<0)if(q)A=0;else return-1;if(typeof y=="string"&&(y=o.from(y,V)),o.isBuffer(y))return y.length===0?-1:U(v,y,A,V,q);if(typeof y=="number")return y=y&255,typeof Uint8Array.prototype.indexOf=="function"?q?Uint8Array.prototype.indexOf.call(v,y,A):Uint8Array.prototype.lastIndexOf.call(v,y,A):U(v,[y],A,V,q);throw new TypeError("val must be string, number or Buffer")}function U(v,y,A,V,q){let Q=1,$=v.length,oe=y.length;if(V!==void 0&&(V=String(V).toLowerCase(),V==="ucs2"||V==="ucs-2"||V==="utf16le"||V==="utf-16le")){if(v.length<2||y.length<2)return-1;Q=2,$/=2,oe/=2,A/=2}function Re(Me,Ee){return Q===1?Me[Ee]:Me.readUInt16BE(Ee*Q)}let Ce;if(q){let Me=-1;for(Ce=A;Ce<$;Ce++)if(Re(v,Ce)===Re(y,Me===-1?0:Ce-Me)){if(Me===-1&&(Me=Ce),Ce-Me+1===oe)return Me*Q}else Me!==-1&&(Ce-=Ce-Me),Me=-1}else for(A+oe>$&&(A=$-oe),Ce=A;Ce>=0;Ce--){let Me=!0;for(let Ee=0;Ee<oe;Ee++)if(Re(v,Ce+Ee)!==Re(y,Ee)){Me=!1;break}if(Me)return Ce}return-1}o.prototype.includes=function(y,A,V){return this.indexOf(y,A,V)!==-1},o.prototype.indexOf=function(y,A,V){return L(this,y,A,V,!0)},o.prototype.lastIndexOf=function(y,A,V){return L(this,y,A,V,!1)};function M(v,y,A,V){A=Number(A)||0;const q=v.length-A;V?(V=Number(V),V>q&&(V=q)):V=q;const Q=y.length;V>Q/2&&(V=Q/2);let $;for($=0;$<V;++$){const oe=parseInt(y.substr($*2,2),16);if(te(oe))return $;v[A+$]=oe}return $}function b(v,y,A,V){return Ie(Ge(y,v.length-A),v,A,V)}function P(v,y,A,V){return Ie(De(y),v,A,V)}function _(v,y,A,V){return Ie(nt(y),v,A,V)}function u(v,y,A,V){return Ie(He(y,v.length-A),v,A,V)}o.prototype.write=function(y,A,V,q){if(A===void 0)q="utf8",V=this.length,A=0;else if(V===void 0&&typeof A=="string")q=A,V=this.length,A=0;else if(isFinite(A))A=A>>>0,isFinite(V)?(V=V>>>0,q===void 0&&(q="utf8")):(q=V,V=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const Q=this.length-A;if((V===void 0||V>Q)&&(V=Q),y.length>0&&(V<0||A<0)||A>this.length)throw new RangeError("Attempt to write outside buffer bounds");q||(q="utf8");let $=!1;for(;;)switch(q){case"hex":return M(this,y,A,V);case"utf8":case"utf-8":return b(this,y,A,V);case"ascii":case"latin1":case"binary":return P(this,y,A,V);case"base64":return _(this,y,A,V);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u(this,y,A,V);default:if($)throw new TypeError("Unknown encoding: "+q);q=(""+q).toLowerCase(),$=!0}},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function E(v,y,A){return y===0&&A===v.length?e.fromByteArray(v):e.fromByteArray(v.slice(y,A))}function I(v,y,A){A=Math.min(v.length,A);const V=[];let q=y;for(;q<A;){const Q=v[q];let $=null,oe=Q>239?4:Q>223?3:Q>191?2:1;if(q+oe<=A){let Re,Ce,Me,Ee;switch(oe){case 1:Q<128&&($=Q);break;case 2:Re=v[q+1],(Re&192)===128&&(Ee=(Q&31)<<6|Re&63,Ee>127&&($=Ee));break;case 3:Re=v[q+1],Ce=v[q+2],(Re&192)===128&&(Ce&192)===128&&(Ee=(Q&15)<<12|(Re&63)<<6|Ce&63,Ee>2047&&(Ee<55296||Ee>57343)&&($=Ee));break;case 4:Re=v[q+1],Ce=v[q+2],Me=v[q+3],(Re&192)===128&&(Ce&192)===128&&(Me&192)===128&&(Ee=(Q&15)<<18|(Re&63)<<12|(Ce&63)<<6|Me&63,Ee>65535&&Ee<1114112&&($=Ee))}}$===null?($=65533,oe=1):$>65535&&($-=65536,V.push($>>>10&1023|55296),$=56320|$&1023),V.push($),q+=oe}return k(V)}const D=4096;function k(v){const y=v.length;if(y<=D)return String.fromCharCode.apply(String,v);let A="",V=0;for(;V<y;)A+=String.fromCharCode.apply(String,v.slice(V,V+=D));return A}function z(v,y,A){let V="";A=Math.min(v.length,A);for(let q=y;q<A;++q)V+=String.fromCharCode(v[q]&127);return V}function G(v,y,A){let V="";A=Math.min(v.length,A);for(let q=y;q<A;++q)V+=String.fromCharCode(v[q]);return V}function O(v,y,A){const V=v.length;(!y||y<0)&&(y=0),(!A||A<0||A>V)&&(A=V);let q="";for(let Q=y;Q<A;++Q)q+=we[v[Q]];return q}function x(v,y,A){const V=v.slice(y,A);let q="";for(let Q=0;Q<V.length-1;Q+=2)q+=String.fromCharCode(V[Q]+V[Q+1]*256);return q}o.prototype.slice=function(y,A){const V=this.length;y=~~y,A=A===void 0?V:~~A,y<0?(y+=V,y<0&&(y=0)):y>V&&(y=V),A<0?(A+=V,A<0&&(A=0)):A>V&&(A=V),A<y&&(A=y);const q=this.subarray(y,A);return Object.setPrototypeOf(q,o.prototype),q};function B(v,y,A){if(v%1!==0||v<0)throw new RangeError("offset is not uint");if(v+y>A)throw new RangeError("Trying to access beyond buffer length")}o.prototype.readUintLE=o.prototype.readUIntLE=function(y,A,V){y=y>>>0,A=A>>>0,V||B(y,A,this.length);let q=this[y],Q=1,$=0;for(;++$<A&&(Q*=256);)q+=this[y+$]*Q;return q},o.prototype.readUintBE=o.prototype.readUIntBE=function(y,A,V){y=y>>>0,A=A>>>0,V||B(y,A,this.length);let q=this[y+--A],Q=1;for(;A>0&&(Q*=256);)q+=this[y+--A]*Q;return q},o.prototype.readUint8=o.prototype.readUInt8=function(y,A){return y=y>>>0,A||B(y,1,this.length),this[y]},o.prototype.readUint16LE=o.prototype.readUInt16LE=function(y,A){return y=y>>>0,A||B(y,2,this.length),this[y]|this[y+1]<<8},o.prototype.readUint16BE=o.prototype.readUInt16BE=function(y,A){return y=y>>>0,A||B(y,2,this.length),this[y]<<8|this[y+1]},o.prototype.readUint32LE=o.prototype.readUInt32LE=function(y,A){return y=y>>>0,A||B(y,4,this.length),(this[y]|this[y+1]<<8|this[y+2]<<16)+this[y+3]*16777216},o.prototype.readUint32BE=o.prototype.readUInt32BE=function(y,A){return y=y>>>0,A||B(y,4,this.length),this[y]*16777216+(this[y+1]<<16|this[y+2]<<8|this[y+3])},o.prototype.readBigUInt64LE=Pe(function(y){y=y>>>0,ge(y,"offset");const A=this[y],V=this[y+7];(A===void 0||V===void 0)&&Te(y,this.length-8);const q=A+this[++y]*2**8+this[++y]*2**16+this[++y]*2**24,Q=this[++y]+this[++y]*2**8+this[++y]*2**16+V*2**24;return BigInt(q)+(BigInt(Q)<<BigInt(32))}),o.prototype.readBigUInt64BE=Pe(function(y){y=y>>>0,ge(y,"offset");const A=this[y],V=this[y+7];(A===void 0||V===void 0)&&Te(y,this.length-8);const q=A*2**24+this[++y]*2**16+this[++y]*2**8+this[++y],Q=this[++y]*2**24+this[++y]*2**16+this[++y]*2**8+V;return(BigInt(q)<<BigInt(32))+BigInt(Q)}),o.prototype.readIntLE=function(y,A,V){y=y>>>0,A=A>>>0,V||B(y,A,this.length);let q=this[y],Q=1,$=0;for(;++$<A&&(Q*=256);)q+=this[y+$]*Q;return Q*=128,q>=Q&&(q-=Math.pow(2,8*A)),q},o.prototype.readIntBE=function(y,A,V){y=y>>>0,A=A>>>0,V||B(y,A,this.length);let q=A,Q=1,$=this[y+--q];for(;q>0&&(Q*=256);)$+=this[y+--q]*Q;return Q*=128,$>=Q&&($-=Math.pow(2,8*A)),$},o.prototype.readInt8=function(y,A){return y=y>>>0,A||B(y,1,this.length),this[y]&128?(255-this[y]+1)*-1:this[y]},o.prototype.readInt16LE=function(y,A){y=y>>>0,A||B(y,2,this.length);const V=this[y]|this[y+1]<<8;return V&32768?V|4294901760:V},o.prototype.readInt16BE=function(y,A){y=y>>>0,A||B(y,2,this.length);const V=this[y+1]|this[y]<<8;return V&32768?V|4294901760:V},o.prototype.readInt32LE=function(y,A){return y=y>>>0,A||B(y,4,this.length),this[y]|this[y+1]<<8|this[y+2]<<16|this[y+3]<<24},o.prototype.readInt32BE=function(y,A){return y=y>>>0,A||B(y,4,this.length),this[y]<<24|this[y+1]<<16|this[y+2]<<8|this[y+3]},o.prototype.readBigInt64LE=Pe(function(y){y=y>>>0,ge(y,"offset");const A=this[y],V=this[y+7];(A===void 0||V===void 0)&&Te(y,this.length-8);const q=this[y+4]+this[y+5]*2**8+this[y+6]*2**16+(V<<24);return(BigInt(q)<<BigInt(32))+BigInt(A+this[++y]*2**8+this[++y]*2**16+this[++y]*2**24)}),o.prototype.readBigInt64BE=Pe(function(y){y=y>>>0,ge(y,"offset");const A=this[y],V=this[y+7];(A===void 0||V===void 0)&&Te(y,this.length-8);const q=(A<<24)+this[++y]*2**16+this[++y]*2**8+this[++y];return(BigInt(q)<<BigInt(32))+BigInt(this[++y]*2**24+this[++y]*2**16+this[++y]*2**8+V)}),o.prototype.readFloatLE=function(y,A){return y=y>>>0,A||B(y,4,this.length),t.read(this,y,!0,23,4)},o.prototype.readFloatBE=function(y,A){return y=y>>>0,A||B(y,4,this.length),t.read(this,y,!1,23,4)},o.prototype.readDoubleLE=function(y,A){return y=y>>>0,A||B(y,8,this.length),t.read(this,y,!0,52,8)},o.prototype.readDoubleBE=function(y,A){return y=y>>>0,A||B(y,8,this.length),t.read(this,y,!1,52,8)};function J(v,y,A,V,q,Q){if(!o.isBuffer(v))throw new TypeError('"buffer" argument must be a Buffer instance');if(y>q||y<Q)throw new RangeError('"value" argument is out of bounds');if(A+V>v.length)throw new RangeError("Index out of range")}o.prototype.writeUintLE=o.prototype.writeUIntLE=function(y,A,V,q){if(y=+y,A=A>>>0,V=V>>>0,!q){const oe=Math.pow(2,8*V)-1;J(this,y,A,V,oe,0)}let Q=1,$=0;for(this[A]=y&255;++$<V&&(Q*=256);)this[A+$]=y/Q&255;return A+V},o.prototype.writeUintBE=o.prototype.writeUIntBE=function(y,A,V,q){if(y=+y,A=A>>>0,V=V>>>0,!q){const oe=Math.pow(2,8*V)-1;J(this,y,A,V,oe,0)}let Q=V-1,$=1;for(this[A+Q]=y&255;--Q>=0&&($*=256);)this[A+Q]=y/$&255;return A+V},o.prototype.writeUint8=o.prototype.writeUInt8=function(y,A,V){return y=+y,A=A>>>0,V||J(this,y,A,1,255,0),this[A]=y&255,A+1},o.prototype.writeUint16LE=o.prototype.writeUInt16LE=function(y,A,V){return y=+y,A=A>>>0,V||J(this,y,A,2,65535,0),this[A]=y&255,this[A+1]=y>>>8,A+2},o.prototype.writeUint16BE=o.prototype.writeUInt16BE=function(y,A,V){return y=+y,A=A>>>0,V||J(this,y,A,2,65535,0),this[A]=y>>>8,this[A+1]=y&255,A+2},o.prototype.writeUint32LE=o.prototype.writeUInt32LE=function(y,A,V){return y=+y,A=A>>>0,V||J(this,y,A,4,4294967295,0),this[A+3]=y>>>24,this[A+2]=y>>>16,this[A+1]=y>>>8,this[A]=y&255,A+4},o.prototype.writeUint32BE=o.prototype.writeUInt32BE=function(y,A,V){return y=+y,A=A>>>0,V||J(this,y,A,4,4294967295,0),this[A]=y>>>24,this[A+1]=y>>>16,this[A+2]=y>>>8,this[A+3]=y&255,A+4};function j(v,y,A,V,q){ve(y,V,q,v,A,7);let Q=Number(y&BigInt(4294967295));v[A++]=Q,Q=Q>>8,v[A++]=Q,Q=Q>>8,v[A++]=Q,Q=Q>>8,v[A++]=Q;let $=Number(y>>BigInt(32)&BigInt(4294967295));return v[A++]=$,$=$>>8,v[A++]=$,$=$>>8,v[A++]=$,$=$>>8,v[A++]=$,A}function ie(v,y,A,V,q){ve(y,V,q,v,A,7);let Q=Number(y&BigInt(4294967295));v[A+7]=Q,Q=Q>>8,v[A+6]=Q,Q=Q>>8,v[A+5]=Q,Q=Q>>8,v[A+4]=Q;let $=Number(y>>BigInt(32)&BigInt(4294967295));return v[A+3]=$,$=$>>8,v[A+2]=$,$=$>>8,v[A+1]=$,$=$>>8,v[A]=$,A+8}o.prototype.writeBigUInt64LE=Pe(function(y,A=0){return j(this,y,A,BigInt(0),BigInt("0xffffffffffffffff"))}),o.prototype.writeBigUInt64BE=Pe(function(y,A=0){return ie(this,y,A,BigInt(0),BigInt("0xffffffffffffffff"))}),o.prototype.writeIntLE=function(y,A,V,q){if(y=+y,A=A>>>0,!q){const Re=Math.pow(2,8*V-1);J(this,y,A,V,Re-1,-Re)}let Q=0,$=1,oe=0;for(this[A]=y&255;++Q<V&&($*=256);)y<0&&oe===0&&this[A+Q-1]!==0&&(oe=1),this[A+Q]=(y/$>>0)-oe&255;return A+V},o.prototype.writeIntBE=function(y,A,V,q){if(y=+y,A=A>>>0,!q){const Re=Math.pow(2,8*V-1);J(this,y,A,V,Re-1,-Re)}let Q=V-1,$=1,oe=0;for(this[A+Q]=y&255;--Q>=0&&($*=256);)y<0&&oe===0&&this[A+Q+1]!==0&&(oe=1),this[A+Q]=(y/$>>0)-oe&255;return A+V},o.prototype.writeInt8=function(y,A,V){return y=+y,A=A>>>0,V||J(this,y,A,1,127,-128),y<0&&(y=255+y+1),this[A]=y&255,A+1},o.prototype.writeInt16LE=function(y,A,V){return y=+y,A=A>>>0,V||J(this,y,A,2,32767,-32768),this[A]=y&255,this[A+1]=y>>>8,A+2},o.prototype.writeInt16BE=function(y,A,V){return y=+y,A=A>>>0,V||J(this,y,A,2,32767,-32768),this[A]=y>>>8,this[A+1]=y&255,A+2},o.prototype.writeInt32LE=function(y,A,V){return y=+y,A=A>>>0,V||J(this,y,A,4,2147483647,-2147483648),this[A]=y&255,this[A+1]=y>>>8,this[A+2]=y>>>16,this[A+3]=y>>>24,A+4},o.prototype.writeInt32BE=function(y,A,V){return y=+y,A=A>>>0,V||J(this,y,A,4,2147483647,-2147483648),y<0&&(y=4294967295+y+1),this[A]=y>>>24,this[A+1]=y>>>16,this[A+2]=y>>>8,this[A+3]=y&255,A+4},o.prototype.writeBigInt64LE=Pe(function(y,A=0){return j(this,y,A,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),o.prototype.writeBigInt64BE=Pe(function(y,A=0){return ie(this,y,A,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function ue(v,y,A,V,q,Q){if(A+V>v.length)throw new RangeError("Index out of range");if(A<0)throw new RangeError("Index out of range")}function fe(v,y,A,V,q){return y=+y,A=A>>>0,q||ue(v,y,A,4),t.write(v,y,A,V,23,4),A+4}o.prototype.writeFloatLE=function(y,A,V){return fe(this,y,A,!0,V)},o.prototype.writeFloatBE=function(y,A,V){return fe(this,y,A,!1,V)};function K(v,y,A,V,q){return y=+y,A=A>>>0,q||ue(v,y,A,8),t.write(v,y,A,V,52,8),A+8}o.prototype.writeDoubleLE=function(y,A,V){return K(this,y,A,!0,V)},o.prototype.writeDoubleBE=function(y,A,V){return K(this,y,A,!1,V)},o.prototype.copy=function(y,A,V,q){if(!o.isBuffer(y))throw new TypeError("argument should be a Buffer");if(V||(V=0),!q&&q!==0&&(q=this.length),A>=y.length&&(A=y.length),A||(A=0),q>0&&q<V&&(q=V),q===V||y.length===0||this.length===0)return 0;if(A<0)throw new RangeError("targetStart out of bounds");if(V<0||V>=this.length)throw new RangeError("Index out of range");if(q<0)throw new RangeError("sourceEnd out of bounds");q>this.length&&(q=this.length),y.length-A<q-V&&(q=y.length-A+V);const Q=q-V;return this===y&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(A,V,q):Uint8Array.prototype.set.call(y,this.subarray(V,q),A),Q},o.prototype.fill=function(y,A,V,q){if(typeof y=="string"){if(typeof A=="string"?(q=A,A=0,V=this.length):typeof V=="string"&&(q=V,V=this.length),q!==void 0&&typeof q!="string")throw new TypeError("encoding must be a string");if(typeof q=="string"&&!o.isEncoding(q))throw new TypeError("Unknown encoding: "+q);if(y.length===1){const $=y.charCodeAt(0);(q==="utf8"&&$<128||q==="latin1")&&(y=$)}}else typeof y=="number"?y=y&255:typeof y=="boolean"&&(y=Number(y));if(A<0||this.length<A||this.length<V)throw new RangeError("Out of range index");if(V<=A)return this;A=A>>>0,V=V===void 0?this.length:V>>>0,y||(y=0);let Q;if(typeof y=="number")for(Q=A;Q<V;++Q)this[Q]=y;else{const $=o.isBuffer(y)?y:o.from(y,q),oe=$.length;if(oe===0)throw new TypeError('The value "'+y+'" is invalid for argument "value"');for(Q=0;Q<V-A;++Q)this[Q+A]=$[Q%oe]}return this};const ne={};function ae(v,y,A){ne[v]=class extends A{constructor(){super(),Object.defineProperty(this,"message",{value:y.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${v}]`,this.stack,delete this.name}get code(){return v}set code(q){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:q,writable:!0})}toString(){return`${this.name} [${v}]: ${this.message}`}}}ae("ERR_BUFFER_OUT_OF_BOUNDS",function(v){return v?`${v} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),ae("ERR_INVALID_ARG_TYPE",function(v,y){return`The "${v}" argument must be of type number. Received type ${typeof y}`},TypeError),ae("ERR_OUT_OF_RANGE",function(v,y,A){let V=`The value of "${v}" is out of range.`,q=A;return Number.isInteger(A)&&Math.abs(A)>2**32?q=le(String(A)):typeof A=="bigint"&&(q=String(A),(A>BigInt(2)**BigInt(32)||A<-(BigInt(2)**BigInt(32)))&&(q=le(q)),q+="n"),V+=` It must be ${y}. Received ${q}`,V},RangeError);function le(v){let y="",A=v.length;const V=v[0]==="-"?1:0;for(;A>=V+4;A-=3)y=`_${v.slice(A-3,A)}${y}`;return`${v.slice(0,A)}${y}`}function xe(v,y,A){ge(y,"offset"),(v[y]===void 0||v[y+A]===void 0)&&Te(y,v.length-(A+1))}function ve(v,y,A,V,q,Q){if(v>A||v<y){const $=typeof y=="bigint"?"n":"";let oe;throw y===0||y===BigInt(0)?oe=`>= 0${$} and < 2${$} ** ${(Q+1)*8}${$}`:oe=`>= -(2${$} ** ${(Q+1)*8-1}${$}) and < 2 ** ${(Q+1)*8-1}${$}`,new ne.ERR_OUT_OF_RANGE("value",oe,v)}xe(V,q,Q)}function ge(v,y){if(typeof v!="number")throw new ne.ERR_INVALID_ARG_TYPE(y,"number",v)}function Te(v,y,A){throw Math.floor(v)!==v?(ge(v,A),new ne.ERR_OUT_OF_RANGE("offset","an integer",v)):y<0?new ne.ERR_BUFFER_OUT_OF_BOUNDS:new ne.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${y}`,v)}const ye=/[^+/0-9A-Za-z-_]/g;function Se(v){if(v=v.split("=")[0],v=v.trim().replace(ye,""),v.length<2)return"";for(;v.length%4!==0;)v=v+"=";return v}function Ge(v,y){y=y||1/0;let A;const V=v.length;let q=null;const Q=[];for(let $=0;$<V;++$){if(A=v.charCodeAt($),A>55295&&A<57344){if(!q){if(A>56319){(y-=3)>-1&&Q.push(239,191,189);continue}else if($+1===V){(y-=3)>-1&&Q.push(239,191,189);continue}q=A;continue}if(A<56320){(y-=3)>-1&&Q.push(239,191,189),q=A;continue}A=(q-55296<<10|A-56320)+65536}else q&&(y-=3)>-1&&Q.push(239,191,189);if(q=null,A<128){if((y-=1)<0)break;Q.push(A)}else if(A<2048){if((y-=2)<0)break;Q.push(A>>6|192,A&63|128)}else if(A<65536){if((y-=3)<0)break;Q.push(A>>12|224,A>>6&63|128,A&63|128)}else if(A<1114112){if((y-=4)<0)break;Q.push(A>>18|240,A>>12&63|128,A>>6&63|128,A&63|128)}else throw new Error("Invalid code point")}return Q}function De(v){const y=[];for(let A=0;A<v.length;++A)y.push(v.charCodeAt(A)&255);return y}function He(v,y){let A,V,q;const Q=[];for(let $=0;$<v.length&&!((y-=2)<0);++$)A=v.charCodeAt($),V=A>>8,q=A%256,Q.push(q),Q.push(V);return Q}function nt(v){return e.toByteArray(Se(v))}function Ie(v,y,A,V){let q;for(q=0;q<V&&!(q+A>=y.length||q>=v.length);++q)y[q+A]=v[q];return q}function Ae(v,y){return v instanceof y||v!=null&&v.constructor!=null&&v.constructor.name!=null&&v.constructor.name===y.name}function te(v){return v!==v}const we=(function(){const v="0123456789abcdef",y=new Array(256);for(let A=0;A<16;++A){const V=A*16;for(let q=0;q<16;++q)y[V+q]=v[A]+v[q]}return y})();function Pe(v){return typeof BigInt>"u"?X:v}function X(){throw new Error("BigInt not supported")}})(qo)),qo}var yf;function Bc(){if(yf)return mt;yf=1;var i=To(),e=cv(),t=n0().Buffer;globalThis.__TYPEDARRAY_POOL||(globalThis.__TYPEDARRAY_POOL={UINT8:e([32,0]),UINT16:e([32,0]),UINT32:e([32,0]),BIGUINT64:e([32,0]),INT8:e([32,0]),INT16:e([32,0]),INT32:e([32,0]),BIGINT64:e([32,0]),FLOAT:e([32,0]),DOUBLE:e([32,0]),DATA:e([32,0]),UINT8C:e([32,0]),BUFFER:e([32,0])});var n=typeof Uint8ClampedArray<"u",r=typeof BigUint64Array<"u",s=typeof BigInt64Array<"u",a=globalThis.__TYPEDARRAY_POOL;a.UINT8C||(a.UINT8C=e([32,0])),a.BIGUINT64||(a.BIGUINT64=e([32,0])),a.BIGINT64||(a.BIGINT64=e([32,0])),a.BUFFER||(a.BUFFER=e([32,0]));var o=a.DATA,h=a.BUFFER;mt.free=function(P){if(t.isBuffer(P))h[i.log2(P.length)].push(P);else{if(Object.prototype.toString.call(P)!=="[object ArrayBuffer]"&&(P=P.buffer),!P)return;var _=P.length||P.byteLength,u=i.log2(_)|0;o[u].push(P)}};function c(b){if(b){var P=b.length||b.byteLength,_=i.log2(P);o[_].push(b)}}function d(b){c(b.buffer)}mt.freeUint8=mt.freeUint16=mt.freeUint32=mt.freeBigUint64=mt.freeInt8=mt.freeInt16=mt.freeInt32=mt.freeBigInt64=mt.freeFloat32=mt.freeFloat=mt.freeFloat64=mt.freeDouble=mt.freeUint8Clamped=mt.freeDataView=d,mt.freeArrayBuffer=c,mt.freeBuffer=function(P){h[i.log2(P.length)].push(P)},mt.malloc=function(P,_){if(_===void 0||_==="arraybuffer")return p(P);switch(_){case"uint8":return g(P);case"uint16":return w(P);case"uint32":return T(P);case"int8":return N(P);case"int16":return C(P);case"int32":return R(P);case"float":case"float32":return m(P);case"double":case"float64":return f(P);case"uint8_clamped":return S(P);case"bigint64":return L(P);case"biguint64":return l(P);case"buffer":return M(P);case"data":case"dataview":return U(P);default:return null}return null};function p(P){var P=i.nextPow2(P),_=i.log2(P),u=o[_];return u.length>0?u.pop():new ArrayBuffer(P)}mt.mallocArrayBuffer=p;function g(b){return new Uint8Array(p(b),0,b)}mt.mallocUint8=g;function w(b){return new Uint16Array(p(2*b),0,b)}mt.mallocUint16=w;function T(b){return new Uint32Array(p(4*b),0,b)}mt.mallocUint32=T;function N(b){return new Int8Array(p(b),0,b)}mt.mallocInt8=N;function C(b){return new Int16Array(p(2*b),0,b)}mt.mallocInt16=C;function R(b){return new Int32Array(p(4*b),0,b)}mt.mallocInt32=R;function m(b){return new Float32Array(p(4*b),0,b)}mt.mallocFloat32=mt.mallocFloat=m;function f(b){return new Float64Array(p(8*b),0,b)}mt.mallocFloat64=mt.mallocDouble=f;function S(b){return n?new Uint8ClampedArray(p(b),0,b):g(b)}mt.mallocUint8Clamped=S;function l(b){return r?new BigUint64Array(p(8*b),0,b):null}mt.mallocBigUint64=l;function L(b){return s?new BigInt64Array(p(8*b),0,b):null}mt.mallocBigInt64=L;function U(b){return new DataView(p(b),0,b)}mt.mallocDataView=U;function M(b){b=i.nextPow2(b);var P=i.log2(b),_=h[P];return _.length>0?_.pop():new t(b)}return mt.mallocBuffer=M,mt.clearCache=function(){for(var P=0;P<32;++P)a.UINT8[P].length=0,a.UINT16[P].length=0,a.UINT32[P].length=0,a.INT8[P].length=0,a.INT16[P].length=0,a.INT32[P].length=0,a.FLOAT[P].length=0,a.DOUBLE[P].length=0,a.BIGUINT64[P].length=0,a.BIGINT64[P].length=0,a.UINT8C[P].length=0,o[P].length=0,h[P].length=0},mt}var $o,Mf;function dv(){if(Mf)return $o;Mf=1,$o=e;var i=32;function e(d,p){p<=4*i?t(0,p-1,d):c(0,p-1,d)}function t(d,p,g){for(var w=2*(d+1),T=d+1;T<=p;++T){for(var N=g[w++],C=g[w++],R=T,m=w-2;R-- >d;){var f=g[m-2],S=g[m-1];if(f<N)break;if(f===N&&S<C)break;g[m]=f,g[m+1]=S,m-=2}g[m]=N,g[m+1]=C}}function n(d,p,g){d*=2,p*=2;var w=g[d],T=g[d+1];g[d]=g[p],g[d+1]=g[p+1],g[p]=w,g[p+1]=T}function r(d,p,g){d*=2,p*=2,g[d]=g[p],g[d+1]=g[p+1]}function s(d,p,g,w){d*=2,p*=2,g*=2;var T=w[d],N=w[d+1];w[d]=w[p],w[d+1]=w[p+1],w[p]=w[g],w[p+1]=w[g+1],w[g]=T,w[g+1]=N}function a(d,p,g,w,T){d*=2,p*=2,T[d]=T[p],T[p]=g,T[d+1]=T[p+1],T[p+1]=w}function o(d,p,g){d*=2,p*=2;var w=g[d],T=g[p];return w<T?!1:w===T?g[d+1]>g[p+1]:!0}function h(d,p,g,w){d*=2;var T=w[d];return T<p?!0:T===p?w[d+1]<g:!1}function c(d,p,g){var w=(p-d+1)/6|0,T=d+w,N=p-w,C=d+p>>1,R=C-w,m=C+w,f=T,S=R,l=C,L=m,U=N,M=d+1,b=p-1,P=0;o(f,S,g)&&(P=f,f=S,S=P),o(L,U,g)&&(P=L,L=U,U=P),o(f,l,g)&&(P=f,f=l,l=P),o(S,l,g)&&(P=S,S=l,l=P),o(f,L,g)&&(P=f,f=L,L=P),o(l,L,g)&&(P=l,l=L,L=P),o(S,U,g)&&(P=S,S=U,U=P),o(S,l,g)&&(P=S,S=l,l=P),o(L,U,g)&&(P=L,L=U,U=P);for(var _=g[2*S],u=g[2*S+1],E=g[2*L],I=g[2*L+1],D=2*f,k=2*l,z=2*U,G=2*T,O=2*C,x=2*N,B=0;B<2;++B){var J=g[D+B],j=g[k+B],ie=g[z+B];g[G+B]=J,g[O+B]=j,g[x+B]=ie}r(R,d,g),r(m,p,g);for(var ue=M;ue<=b;++ue)if(h(ue,_,u,g))ue!==M&&n(ue,M,g),++M;else if(!h(ue,E,I,g))for(;;)if(h(b,E,I,g)){h(b,_,u,g)?(s(ue,M,b,g),++M,--b):(n(ue,b,g),--b);break}else{if(--b<ue)break;continue}a(d,M-1,_,u,g),a(p,b+1,E,I,g),M-2-d<=i?t(d,M-2,g):c(d,M-2,g),p-(b+2)<=i?t(b+2,p,g):c(b+2,p,g),b-M<=i?t(M,b,g):c(M,b,g)}return $o}var Yo,wf;function i0(){if(wf)return Yo;wf=1,Yo={init:g,sweepBipartite:N,sweepComplete:C,scanBipartite:R,scanComplete:m};var i=Bc(),e=To(),t=dv(),n=1<<28,r=1024,s=i.mallocInt32(r),a=i.mallocInt32(r),o=i.mallocInt32(r),h=i.mallocInt32(r),c=i.mallocInt32(r),d=i.mallocInt32(r),p=i.mallocDouble(r*8);function g(f){var S=e.nextPow2(f);s.length<S&&(i.free(s),s=i.mallocInt32(S)),a.length<S&&(i.free(a),a=i.mallocInt32(S)),o.length<S&&(i.free(o),o=i.mallocInt32(S)),h.length<S&&(i.free(h),h=i.mallocInt32(S)),c.length<S&&(i.free(c),c=i.mallocInt32(S)),d.length<S&&(i.free(d),d=i.mallocInt32(S));var l=8*S;p.length<l&&(i.free(p),p=i.mallocDouble(l))}function w(f,S,l,L){var U=S[L],M=f[l-1];f[U]=M,S[M]=U}function T(f,S,l,L){f[l]=L,S[L]=l}function N(f,S,l,L,U,M,b,P,_,u){for(var E=0,I=2*f,D=f-1,k=I-1,z=l;z<L;++z){var G=M[z],O=I*z;p[E++]=U[O+D],p[E++]=-(G+1),p[E++]=U[O+k],p[E++]=G}for(var z=b;z<P;++z){var G=u[z]+n,x=I*z;p[E++]=_[x+D],p[E++]=-G,p[E++]=_[x+k],p[E++]=G}var B=E>>>1;t(p,B);for(var J=0,j=0,z=0;z<B;++z){var ie=p[2*z+1]|0;if(ie>=n)ie=ie-n|0,w(o,h,j--,ie);else if(ie>=0)w(s,a,J--,ie);else if(ie<=-n){ie=-ie-n|0;for(var ue=0;ue<J;++ue){var fe=S(s[ue],ie);if(fe!==void 0)return fe}T(o,h,j++,ie)}else{ie=-ie-1|0;for(var ue=0;ue<j;++ue){var fe=S(ie,o[ue]);if(fe!==void 0)return fe}T(s,a,J++,ie)}}}function C(f,S,l,L,U,M,b,P,_,u){for(var E=0,I=2*f,D=f-1,k=I-1,z=l;z<L;++z){var G=M[z]+1<<1,O=I*z;p[E++]=U[O+D],p[E++]=-G,p[E++]=U[O+k],p[E++]=G}for(var z=b;z<P;++z){var G=u[z]+1<<1,x=I*z;p[E++]=_[x+D],p[E++]=-G|1,p[E++]=_[x+k],p[E++]=G|1}var B=E>>>1;t(p,B);for(var J=0,j=0,ie=0,z=0;z<B;++z){var ue=p[2*z+1]|0,fe=ue&1;if(z<B-1&&ue>>1===p[2*z+3]>>1&&(fe=2,z+=1),ue<0){for(var K=-(ue>>1)-1,ne=0;ne<ie;++ne){var ae=S(c[ne],K);if(ae!==void 0)return ae}if(fe!==0)for(var ne=0;ne<J;++ne){var ae=S(s[ne],K);if(ae!==void 0)return ae}if(fe!==1)for(var ne=0;ne<j;++ne){var ae=S(o[ne],K);if(ae!==void 0)return ae}fe===0?T(s,a,J++,K):fe===1?T(o,h,j++,K):fe===2&&T(c,d,ie++,K)}else{var K=(ue>>1)-1;fe===0?w(s,a,J--,K):fe===1?w(o,h,j--,K):fe===2&&w(c,d,ie--,K)}}}function R(f,S,l,L,U,M,b,P,_,u,E,I){var D=0,k=2*f,z=S,G=S+f,O=1,x=1;L?x=n:O=n;for(var B=U;B<M;++B){var J=B+O,j=k*B;p[D++]=b[j+z],p[D++]=-J,p[D++]=b[j+G],p[D++]=J}for(var B=_;B<u;++B){var J=B+x,ie=k*B;p[D++]=E[ie+z],p[D++]=-J}var ue=D>>>1;t(p,ue);for(var fe=0,B=0;B<ue;++B){var K=p[2*B+1]|0;if(K<0){var J=-K,ne=!1;if(J>=n?(ne=!L,J-=n):(ne=!!L,J-=1),ne)T(s,a,fe++,J);else{var ae=I[J],le=k*J,xe=E[le+S+1],ve=E[le+S+1+f];e:for(var ge=0;ge<fe;++ge){var Te=s[ge],ye=k*Te;if(!(ve<b[ye+S+1]||b[ye+S+1+f]<xe)){for(var Se=S+2;Se<f;++Se)if(E[le+Se+f]<b[ye+Se]||b[ye+Se+f]<E[le+Se])continue e;var Ge=P[Te],De;if(L?De=l(ae,Ge):De=l(Ge,ae),De!==void 0)return De}}}}else w(s,a,fe--,K-O)}}function m(f,S,l,L,U,M,b,P,_,u,E){for(var I=0,D=2*f,k=S,z=S+f,G=L;G<U;++G){var O=G+n,x=D*G;p[I++]=M[x+k],p[I++]=-O,p[I++]=M[x+z],p[I++]=O}for(var G=P;G<_;++G){var O=G+1,B=D*G;p[I++]=u[B+k],p[I++]=-O}var J=I>>>1;t(p,J);for(var j=0,G=0;G<J;++G){var ie=p[2*G+1]|0;if(ie<0){var O=-ie;if(O>=n)s[j++]=O-n;else{O-=1;var ue=E[O],fe=D*O,K=u[fe+S+1],ne=u[fe+S+1+f];e:for(var ae=0;ae<j;++ae){var le=s[ae],xe=b[le];if(xe===ue)break;var ve=D*le;if(!(ne<M[ve+S+1]||M[ve+S+1+f]<K)){for(var ge=S+2;ge<f;++ge)if(u[fe+ge+f]<M[ve+ge]||M[ve+ge+f]<u[fe+ge])continue e;var Te=l(xe,ue);if(Te!==void 0)return Te}}}}else{for(var O=ie-n,ae=j-1;ae>=0;--ae)if(s[ae]===O){for(var ge=ae+1;ge<j;++ge)s[ge-1]=s[ge];break}--j}}}return Yo}var pa={},Sf;function pv(){if(Sf)return pa;Sf=1;var i="d",e="ax",t="vv",n="fp",r="es",s="rs",a="re",o="rb",h="ri",c="rp",d="bs",p="be",g="bb",w="bi",T="bp",N="rv",C="Q",R=[i,e,t,s,a,o,h,d,p,g,w];function m(S,l,L){var U="bruteForce"+(S?"Red":"Blue")+(l?"Flip":"")+(L?"Full":""),M=["function ",U,"(",R.join(),"){","var ",r,"=2*",i,";"],b="for(var i="+s+","+c+"="+r+"*"+s+";i<"+a+";++i,"+c+"+="+r+"){var x0="+o+"["+e+"+"+c+"],x1="+o+"["+e+"+"+c+"+"+i+"],xi="+h+"[i];",P="for(var j="+d+","+T+"="+r+"*"+d+";j<"+p+";++j,"+T+"+="+r+"){var y0="+g+"["+e+"+"+T+"],"+(L?"y1="+g+"["+e+"+"+T+"+"+i+"],":"")+"yi="+w+"[j];";return S?M.push(b,C,":",P):M.push(P,C,":",b),L?M.push("if(y1<x0||x1<y0)continue;"):l?M.push("if(y0<=x0||x1<y0)continue;"):M.push("if(y0<x0||x1<y0)continue;"),M.push("for(var k="+e+"+1;k<"+i+";++k){var r0="+o+"[k+"+c+"],r1="+o+"[k+"+i+"+"+c+"],b0="+g+"[k+"+T+"],b1="+g+"[k+"+i+"+"+T+"];if(r1<b0||b1<r0)continue "+C+";}var "+N+"="+t+"("),l?M.push("yi,xi"):M.push("xi,yi"),M.push(");if("+N+"!==void 0)return "+N+";}}}"),{name:U,code:M.join("")}}function f(S){var l="bruteForce"+(S?"Full":"Partial"),L=[],U=R.slice();S||U.splice(3,0,n);var M=["function "+l+"("+U.join()+"){"];function b(u,E){var I=m(u,E,S);L.push(I.code),M.push("return "+I.name+"("+R.join()+");")}M.push("if("+a+"-"+s+">"+p+"-"+d+"){"),S?(b(!0,!1),M.push("}else{"),b(!1,!1)):(M.push("if("+n+"){"),b(!0,!0),M.push("}else{"),b(!0,!1),M.push("}}else{if("+n+"){"),b(!1,!0),M.push("}else{"),b(!1,!1),M.push("}")),M.push("}}return "+l);var P=L.join("")+M.join(""),_=new Function(P);return _()}return pa.partial=f(!1),pa.full=f(!0),pa}var Zo,xf;function r0(){if(xf)return Zo;xf=1,Zo=e;var i="for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m";function e(t,n){var r="abcdef".split("").concat(n),s=[];return t.indexOf("lo")>=0&&s.push("lo=e[k+n]"),t.indexOf("hi")>=0&&s.push("hi=e[k+o]"),r.push(i.replace("_",s.join()).replace("$",t)),Function.apply(void 0,r)}return Zo}var Ko,bf;function mv(){if(bf)return Ko;bf=1,Ko=r;var i=r0(),e=i("lo<p0",["p0"]),t=8;function n(s,a,o,h,c,d){for(var p=2*s,g=p*(o+1)+a,w=o+1;w<h;++w,g+=p)for(var T=c[g],N=w,C=p*(w-1);N>o&&c[C+a]>T;--N,C-=p){for(var R=C,m=C+p,f=0;f<p;++f,++R,++m){var S=c[R];c[R]=c[m],c[m]=S}var l=d[N];d[N]=d[N-1],d[N-1]=l}}function r(s,a,o,h,c,d){if(h<=o+1)return o;for(var p=o,g=h,w=h+o>>>1,T=2*s,N=w,C=c[T*w+a];p<g;){if(g-p<t){n(s,a,p,g,c,d),C=c[T*w+a];break}var R=g-p,m=Math.random()*R+p|0,f=c[T*m+a],S=Math.random()*R+p|0,l=c[T*S+a],L=Math.random()*R+p|0,U=c[T*L+a];f<=l?U>=l?(N=S,C=l):f>=U?(N=m,C=f):(N=L,C=U):l>=U?(N=S,C=l):U>=f?(N=m,C=f):(N=L,C=U);for(var P=T*(g-1),_=T*N,M=0;M<T;++M,++P,++_){var b=c[P];c[P]=c[_],c[_]=b}var u=d[g-1];d[g-1]=d[N],d[N]=u,N=e(s,a,p,g-1,c,d,C);for(var P=T*(g-1),_=T*N,M=0;M<T;++M,++P,++_){var b=c[P];c[P]=c[_],c[_]=b}var u=d[g-1];if(d[g-1]=d[N],d[N]=u,w<N){for(g=N-1;p<g&&c[T*(g-1)+a]===C;)g-=1;g+=1}else if(N<w)for(p=N+1;p<g&&c[T*p+a]===C;)p+=1;else break}return e(s,a,o,w,c,d,c[T*w+a])}return Ko}var Jo,Ef;function gv(){if(Ef)return Jo;Ef=1,Jo=P;var i=Bc(),e=To(),t=pv(),n=t.partial,r=t.full,s=i0(),a=mv(),o=r0(),h=128,c=1<<22,d=1<<22,p=o("!(lo>=p0)&&!(p1>=hi)",["p0","p1"]),g=o("lo===p0",["p0"]),w=o("lo<p0",["p0"]),T=o("hi<=p0",["p0"]),N=o("lo<=p0&&p0<=hi",["p0"]),C=o("lo<p0&&p0<=hi",["p0"]),R=6,m=2,f=1024,S=i.mallocInt32(f),l=i.mallocDouble(f);function L(_,u){var E=8*e.log2(u+1)*(_+1)|0,I=e.nextPow2(R*E);S.length<I&&(i.free(S),S=i.mallocInt32(I));var D=e.nextPow2(m*E);l.length<D&&(i.free(l),l=i.mallocDouble(D))}function U(_,u,E,I,D,k,z,G,O){var x=R*_;S[x]=u,S[x+1]=E,S[x+2]=I,S[x+3]=D,S[x+4]=k,S[x+5]=z;var B=m*_;l[B]=G,l[B+1]=O}function M(_,u,E,I,D,k,z,G,O,x,B){var J=2*_,j=O*J,ie=x[j+u];e:for(var ue=D,fe=D*J;ue<k;++ue,fe+=J){var K=z[fe+u],ne=z[fe+u+_];if(!(ie<K||ne<ie)&&!(I&&ie===K)){for(var ae=G[ue],le=u+1;le<_;++le){var K=z[fe+le],ne=z[fe+le+_],xe=x[j+le],ve=x[j+le+_];if(ne<xe||ve<K)continue e}var ge;if(I?ge=E(B,ae):ge=E(ae,B),ge!==void 0)return ge}}}function b(_,u,E,I,D,k,z,G,O,x){var B=2*_,J=G*B,j=O[J+u];e:for(var ie=I,ue=I*B;ie<D;++ie,ue+=B){var fe=z[ie];if(fe!==x){var K=k[ue+u],ne=k[ue+u+_];if(!(j<K||ne<j)){for(var ae=u+1;ae<_;++ae){var K=k[ue+ae],ne=k[ue+ae+_],le=O[J+ae],xe=O[J+ae+_];if(ne<le||xe<K)continue e}var ve=E(fe,x);if(ve!==void 0)return ve}}}}function P(_,u,E,I,D,k,z,G,O){L(_,I+z);var x=0,B=2*_,J;for(U(x++,0,0,I,0,z,E?16:0,-1/0,1/0),E||U(x++,0,0,z,0,I,1,-1/0,1/0);x>0;){x-=1;var j=x*R,ie=S[j],ue=S[j+1],fe=S[j+2],K=S[j+3],ne=S[j+4],ae=S[j+5],le=x*m,xe=l[le],ve=l[le+1],ge=ae&1,Te=!!(ae&16),ye=D,Se=k,Ge=G,De=O;if(ge&&(ye=G,Se=O,Ge=D,De=k),!(ae&2&&(fe=w(_,ie,ue,fe,ye,Se,ve),ue>=fe))&&!(ae&4&&(ue=T(_,ie,ue,fe,ye,Se,xe),ue>=fe))){var He=fe-ue,nt=ne-K;if(Te){if(_*He*(He+nt)<d){if(J=s.scanComplete(_,ie,u,ue,fe,ye,Se,K,ne,Ge,De),J!==void 0)return J;continue}}else if(_*Math.min(He,nt)<h){if(J=n(_,ie,u,ge,ue,fe,ye,Se,K,ne,Ge,De),J!==void 0)return J;continue}else if(_*He*nt<c){if(J=s.scanBipartite(_,ie,u,ge,ue,fe,ye,Se,K,ne,Ge,De),J!==void 0)return J;continue}var Ie=p(_,ie,ue,fe,ye,Se,xe,ve);if(ue<Ie)if(_*(Ie-ue)<h){if(J=r(_,ie+1,u,ue,Ie,ye,Se,K,ne,Ge,De),J!==void 0)return J}else if(ie===_-2){if(ge?J=s.sweepBipartite(_,u,K,ne,Ge,De,ue,Ie,ye,Se):J=s.sweepBipartite(_,u,ue,Ie,ye,Se,K,ne,Ge,De),J!==void 0)return J}else U(x++,ie+1,ue,Ie,K,ne,ge,-1/0,1/0),U(x++,ie+1,K,ne,ue,Ie,ge^1,-1/0,1/0);if(Ie<fe){var Ae=a(_,ie,K,ne,Ge,De),te=Ge[B*Ae+ie],we=g(_,ie,Ae,ne,Ge,De,te);if(we<ne&&U(x++,ie,Ie,fe,we,ne,(ge|4)+(Te?16:0),te,ve),K<Ae&&U(x++,ie,Ie,fe,K,Ae,(ge|2)+(Te?16:0),xe,te),Ae+1===we){if(Te?J=b(_,ie,u,Ie,fe,ye,Se,Ae,Ge,De[Ae]):J=M(_,ie,u,ge,Ie,fe,ye,Se,Ae,Ge,De[Ae]),J!==void 0)return J}else if(Ae<we){var Pe;if(Te){if(Pe=N(_,ie,Ie,fe,ye,Se,te),Ie<Pe){var X=g(_,ie,Ie,Pe,ye,Se,te);if(ie===_-2){if(Ie<X&&(J=s.sweepComplete(_,u,Ie,X,ye,Se,Ae,we,Ge,De),J!==void 0)||X<Pe&&(J=s.sweepBipartite(_,u,X,Pe,ye,Se,Ae,we,Ge,De),J!==void 0))return J}else Ie<X&&U(x++,ie+1,Ie,X,Ae,we,16,-1/0,1/0),X<Pe&&(U(x++,ie+1,X,Pe,Ae,we,0,-1/0,1/0),U(x++,ie+1,Ae,we,X,Pe,1,-1/0,1/0))}}else ge?Pe=C(_,ie,Ie,fe,ye,Se,te):Pe=N(_,ie,Ie,fe,ye,Se,te),Ie<Pe&&(ie===_-2?ge?J=s.sweepBipartite(_,u,Ae,we,Ge,De,Ie,Pe,ye,Se):J=s.sweepBipartite(_,u,Ie,Pe,ye,Se,Ae,we,Ge,De):(U(x++,ie+1,Ie,Pe,Ae,we,ge,-1/0,1/0),U(x++,ie+1,Ae,we,Ie,Pe,ge^1,-1/0,1/0)))}}}}}return Jo}var Qo,Tf;function vv(){if(Tf)return Qo;Tf=1,Qo=d;var i=Bc(),e=i0(),t=gv();function n(p,g){for(var w=0;w<p;++w)if(!(g[w]<=g[w+p]))return!0;return!1}function r(p,g,w,T){for(var N=0,C=0,R=0,m=p.length;R<m;++R){var f=p[R];if(!n(g,f)){for(var S=0;S<2*g;++S)w[N++]=f[S];T[C++]=R}}return C}function s(p,g,w,T){var N=p.length,C=g.length;if(!(N<=0||C<=0)){var R=p[0].length>>>1;if(!(R<=0)){var m,f=i.mallocDouble(2*R*N),S=i.mallocInt32(N);if(N=r(p,R,f,S),N>0){if(R===1&&T)e.init(N),m=e.sweepComplete(R,w,0,N,f,S,0,N,f,S);else{var l=i.mallocDouble(2*R*C),L=i.mallocInt32(C);C=r(g,R,l,L),C>0&&(e.init(N+C),R===1?m=e.sweepBipartite(R,w,0,N,f,S,0,C,l,L):m=t(R,w,T,N,f,S,C,l,L),i.free(l),i.free(L))}i.free(f),i.free(S)}return m}}}var a;function o(p,g){a.push([p,g])}function h(p){return a=[],s(p,p,o,!0),a}function c(p,g){return a=[],s(p,g,o,!1),a}function d(p,g,w){switch(arguments.length){case 1:return h(p);case 2:return typeof g=="function"?s(p,p,g,!0):c(p,g);case 3:return s(p,g,w,!1);default:throw new Error("box-intersect: Invalid arguments")}}return Qo}var jo={exports:{}},el,Af;function Oc(){if(Af)return el;Af=1,el=e;var i=+(Math.pow(2,27)+1);function e(t,n,r){var s=t*n,a=i*t,o=a-t,h=a-o,c=t-h,d=i*n,p=d-n,g=d-p,w=n-g,T=s-h*g,N=T-c*g,C=N-h*w,R=c*w-C;return r?(r[0]=R,r[1]=s,r):[R,s]}return el}var tl,Rf;function s0(){if(Rf)return tl;Rf=1,tl=e;function i(t,n){var r=t+n,s=r-t,a=r-s,o=n-s,h=t-a,c=h+o;return c?[c,r]:[r]}function e(t,n){var r=t.length|0,s=n.length|0;if(r===1&&s===1)return i(t[0],n[0]);var a=r+s,o=new Array(a),h=0,c=0,d=0,p=Math.abs,g=t[c],w=p(g),T=n[d],N=p(T),C,R;w<N?(R=g,c+=1,c<r&&(g=t[c],w=p(g))):(R=T,d+=1,d<s&&(T=n[d],N=p(T))),c<r&&w<N||d>=s?(C=g,c+=1,c<r&&(g=t[c],w=p(g))):(C=T,d+=1,d<s&&(T=n[d],N=p(T)));for(var m=C+R,f=m-C,S=R-f,l=S,L=m,U,M,b,P,_;c<r&&d<s;)w<N?(C=g,c+=1,c<r&&(g=t[c],w=p(g))):(C=T,d+=1,d<s&&(T=n[d],N=p(T))),R=l,m=C+R,f=m-C,S=R-f,S&&(o[h++]=S),U=L+m,M=U-L,b=U-M,P=m-M,_=L-b,l=_+P,L=U;for(;c<r;)C=g,R=l,m=C+R,f=m-C,S=R-f,S&&(o[h++]=S),U=L+m,M=U-L,b=U-M,P=m-M,_=L-b,l=_+P,L=U,c+=1,c<r&&(g=t[c]);for(;d<s;)C=T,R=l,m=C+R,f=m-C,S=R-f,S&&(o[h++]=S),U=L+m,M=U-L,b=U-M,P=m-M,_=L-b,l=_+P,L=U,d+=1,d<s&&(T=n[d]);return l&&(o[h++]=l),L&&(o[h++]=L),h||(o[h++]=0),o.length=h,o}return tl}var nl,Cf;function _v(){if(Cf)return nl;Cf=1,nl=i;function i(e,t,n){var r=e+t,s=r-e,a=r-s,o=t-s,h=e-a;return n?(n[0]=h+o,n[1]=r,n):[h+o,r]}return nl}var il,If;function a0(){if(If)return il;If=1;var i=Oc(),e=_v();il=t;function t(n,r){var s=n.length;if(s===1){var a=i(n[0],r);return a[0]?a:[a[1]]}var o=new Array(2*s),h=[.1,.1],c=[.1,.1],d=0;i(n[0],r,h),h[0]&&(o[d++]=h[0]);for(var p=1;p<s;++p){i(n[p],r,c);var g=h[1];e(g,c[0],h),h[0]&&(o[d++]=h[0]);var w=c[1],T=h[1],N=w+T,C=N-w,R=T-C;h[1]=N,R&&(o[d++]=R)}return h[1]&&(o[d++]=h[1]),d===0&&(o[d++]=0),o.length=d,o}return il}var rl,Pf;function o0(){if(Pf)return rl;Pf=1,rl=e;function i(t,n){var r=t+n,s=r-t,a=r-s,o=n-s,h=t-a,c=h+o;return c?[c,r]:[r]}function e(t,n){var r=t.length|0,s=n.length|0;if(r===1&&s===1)return i(t[0],-n[0]);var a=r+s,o=new Array(a),h=0,c=0,d=0,p=Math.abs,g=t[c],w=p(g),T=-n[d],N=p(T),C,R;w<N?(R=g,c+=1,c<r&&(g=t[c],w=p(g))):(R=T,d+=1,d<s&&(T=-n[d],N=p(T))),c<r&&w<N||d>=s?(C=g,c+=1,c<r&&(g=t[c],w=p(g))):(C=T,d+=1,d<s&&(T=-n[d],N=p(T)));for(var m=C+R,f=m-C,S=R-f,l=S,L=m,U,M,b,P,_;c<r&&d<s;)w<N?(C=g,c+=1,c<r&&(g=t[c],w=p(g))):(C=T,d+=1,d<s&&(T=-n[d],N=p(T))),R=l,m=C+R,f=m-C,S=R-f,S&&(o[h++]=S),U=L+m,M=U-L,b=U-M,P=m-M,_=L-b,l=_+P,L=U;for(;c<r;)C=g,R=l,m=C+R,f=m-C,S=R-f,S&&(o[h++]=S),U=L+m,M=U-L,b=U-M,P=m-M,_=L-b,l=_+P,L=U,c+=1,c<r&&(g=t[c]);for(;d<s;)C=T,R=l,m=C+R,f=m-C,S=R-f,S&&(o[h++]=S),U=L+m,M=U-L,b=U-M,P=m-M,_=L-b,l=_+P,L=U,d+=1,d<s&&(T=-n[d]);return l&&(o[h++]=l),L&&(o[h++]=L),h||(o[h++]=0),o.length=h,o}return rl}var Lf;function l0(){return Lf||(Lf=1,(function(i){var e=Oc(),t=s0(),n=a0(),r=o0(),s=5,a=11102230246251565e-32,o=(3+16*a)*a,h=(7+56*a)*a;function c(f,S,l,L){return function(M,b,P){var _=f(f(S(b[1],P[0]),S(-P[1],b[0])),f(S(M[1],b[0]),S(-b[1],M[0]))),u=f(S(M[1],P[0]),S(-P[1],M[0])),E=L(_,u);return E[E.length-1]}}function d(f,S,l,L){return function(M,b,P,_){var u=f(f(l(f(S(P[1],_[0]),S(-_[1],P[0])),b[2]),f(l(f(S(b[1],_[0]),S(-_[1],b[0])),-P[2]),l(f(S(b[1],P[0]),S(-P[1],b[0])),_[2]))),f(l(f(S(b[1],_[0]),S(-_[1],b[0])),M[2]),f(l(f(S(M[1],_[0]),S(-_[1],M[0])),-b[2]),l(f(S(M[1],b[0]),S(-b[1],M[0])),_[2])))),E=f(f(l(f(S(P[1],_[0]),S(-_[1],P[0])),M[2]),f(l(f(S(M[1],_[0]),S(-_[1],M[0])),-P[2]),l(f(S(M[1],P[0]),S(-P[1],M[0])),_[2]))),f(l(f(S(b[1],P[0]),S(-P[1],b[0])),M[2]),f(l(f(S(M[1],P[0]),S(-P[1],M[0])),-b[2]),l(f(S(M[1],b[0]),S(-b[1],M[0])),P[2])))),I=L(u,E);return I[I.length-1]}}function p(f,S,l,L){return function(M,b,P,_,u){var E=f(f(f(l(f(l(f(S(_[1],u[0]),S(-u[1],_[0])),P[2]),f(l(f(S(P[1],u[0]),S(-u[1],P[0])),-_[2]),l(f(S(P[1],_[0]),S(-_[1],P[0])),u[2]))),b[3]),f(l(f(l(f(S(_[1],u[0]),S(-u[1],_[0])),b[2]),f(l(f(S(b[1],u[0]),S(-u[1],b[0])),-_[2]),l(f(S(b[1],_[0]),S(-_[1],b[0])),u[2]))),-P[3]),l(f(l(f(S(P[1],u[0]),S(-u[1],P[0])),b[2]),f(l(f(S(b[1],u[0]),S(-u[1],b[0])),-P[2]),l(f(S(b[1],P[0]),S(-P[1],b[0])),u[2]))),_[3]))),f(l(f(l(f(S(P[1],_[0]),S(-_[1],P[0])),b[2]),f(l(f(S(b[1],_[0]),S(-_[1],b[0])),-P[2]),l(f(S(b[1],P[0]),S(-P[1],b[0])),_[2]))),-u[3]),f(l(f(l(f(S(_[1],u[0]),S(-u[1],_[0])),b[2]),f(l(f(S(b[1],u[0]),S(-u[1],b[0])),-_[2]),l(f(S(b[1],_[0]),S(-_[1],b[0])),u[2]))),M[3]),l(f(l(f(S(_[1],u[0]),S(-u[1],_[0])),M[2]),f(l(f(S(M[1],u[0]),S(-u[1],M[0])),-_[2]),l(f(S(M[1],_[0]),S(-_[1],M[0])),u[2]))),-b[3])))),f(f(l(f(l(f(S(b[1],u[0]),S(-u[1],b[0])),M[2]),f(l(f(S(M[1],u[0]),S(-u[1],M[0])),-b[2]),l(f(S(M[1],b[0]),S(-b[1],M[0])),u[2]))),_[3]),f(l(f(l(f(S(b[1],_[0]),S(-_[1],b[0])),M[2]),f(l(f(S(M[1],_[0]),S(-_[1],M[0])),-b[2]),l(f(S(M[1],b[0]),S(-b[1],M[0])),_[2]))),-u[3]),l(f(l(f(S(P[1],_[0]),S(-_[1],P[0])),b[2]),f(l(f(S(b[1],_[0]),S(-_[1],b[0])),-P[2]),l(f(S(b[1],P[0]),S(-P[1],b[0])),_[2]))),M[3]))),f(l(f(l(f(S(P[1],_[0]),S(-_[1],P[0])),M[2]),f(l(f(S(M[1],_[0]),S(-_[1],M[0])),-P[2]),l(f(S(M[1],P[0]),S(-P[1],M[0])),_[2]))),-b[3]),f(l(f(l(f(S(b[1],_[0]),S(-_[1],b[0])),M[2]),f(l(f(S(M[1],_[0]),S(-_[1],M[0])),-b[2]),l(f(S(M[1],b[0]),S(-b[1],M[0])),_[2]))),P[3]),l(f(l(f(S(b[1],P[0]),S(-P[1],b[0])),M[2]),f(l(f(S(M[1],P[0]),S(-P[1],M[0])),-b[2]),l(f(S(M[1],b[0]),S(-b[1],M[0])),P[2]))),-_[3]))))),I=f(f(f(l(f(l(f(S(_[1],u[0]),S(-u[1],_[0])),P[2]),f(l(f(S(P[1],u[0]),S(-u[1],P[0])),-_[2]),l(f(S(P[1],_[0]),S(-_[1],P[0])),u[2]))),M[3]),l(f(l(f(S(_[1],u[0]),S(-u[1],_[0])),M[2]),f(l(f(S(M[1],u[0]),S(-u[1],M[0])),-_[2]),l(f(S(M[1],_[0]),S(-_[1],M[0])),u[2]))),-P[3])),f(l(f(l(f(S(P[1],u[0]),S(-u[1],P[0])),M[2]),f(l(f(S(M[1],u[0]),S(-u[1],M[0])),-P[2]),l(f(S(M[1],P[0]),S(-P[1],M[0])),u[2]))),_[3]),l(f(l(f(S(P[1],_[0]),S(-_[1],P[0])),M[2]),f(l(f(S(M[1],_[0]),S(-_[1],M[0])),-P[2]),l(f(S(M[1],P[0]),S(-P[1],M[0])),_[2]))),-u[3]))),f(f(l(f(l(f(S(P[1],u[0]),S(-u[1],P[0])),b[2]),f(l(f(S(b[1],u[0]),S(-u[1],b[0])),-P[2]),l(f(S(b[1],P[0]),S(-P[1],b[0])),u[2]))),M[3]),l(f(l(f(S(P[1],u[0]),S(-u[1],P[0])),M[2]),f(l(f(S(M[1],u[0]),S(-u[1],M[0])),-P[2]),l(f(S(M[1],P[0]),S(-P[1],M[0])),u[2]))),-b[3])),f(l(f(l(f(S(b[1],u[0]),S(-u[1],b[0])),M[2]),f(l(f(S(M[1],u[0]),S(-u[1],M[0])),-b[2]),l(f(S(M[1],b[0]),S(-b[1],M[0])),u[2]))),P[3]),l(f(l(f(S(b[1],P[0]),S(-P[1],b[0])),M[2]),f(l(f(S(M[1],P[0]),S(-P[1],M[0])),-b[2]),l(f(S(M[1],b[0]),S(-b[1],M[0])),P[2]))),-u[3])))),D=L(E,I);return D[D.length-1]}}function g(f){var S=f===3?c:f===4?d:p;return S(t,e,n,r)}var w=g(3),T=g(4),N=[function(){return 0},function(){return 0},function(S,l){return l[0]-S[0]},function(S,l,L){var U=(S[1]-L[1])*(l[0]-L[0]),M=(S[0]-L[0])*(l[1]-L[1]),b=U-M,P;if(U>0){if(M<=0)return b;P=U+M}else if(U<0){if(M>=0)return b;P=-(U+M)}else return b;var _=o*P;return b>=_||b<=-_?b:w(S,l,L)},function(S,l,L,U){var M=S[0]-U[0],b=l[0]-U[0],P=L[0]-U[0],_=S[1]-U[1],u=l[1]-U[1],E=L[1]-U[1],I=S[2]-U[2],D=l[2]-U[2],k=L[2]-U[2],z=b*E,G=P*u,O=P*_,x=M*E,B=M*u,J=b*_,j=I*(z-G)+D*(O-x)+k*(B-J),ie=(Math.abs(z)+Math.abs(G))*Math.abs(I)+(Math.abs(O)+Math.abs(x))*Math.abs(D)+(Math.abs(B)+Math.abs(J))*Math.abs(k),ue=h*ie;return j>ue||-j>ue?j:T(S,l,L,U)}];function C(f){var S=N[f.length];return S||(S=N[f.length]=g(f.length)),S.apply(void 0,f)}function R(f,S,l,L,U,M,b){return function(_,u,E,I,D){switch(arguments.length){case 0:case 1:return 0;case 2:return L(_,u);case 3:return U(_,u,E);case 4:return M(_,u,E,I);case 5:return b(_,u,E,I,D)}for(var k=new Array(arguments.length),z=0;z<arguments.length;++z)k[z]=arguments[z];return f(k)}}function m(){for(;N.length<=s;)N.push(g(N.length));i.exports=R.apply(void 0,[C].concat(N));for(var f=0;f<=s;++f)i.exports[f]=N[f]}m()})(jo)),jo.exports}var sl,Uf;function yv(){if(Uf)return sl;Uf=1,sl=t;var i=l0()[3];function e(n,r,s,a){for(var o=0;o<2;++o){var h=n[o],c=r[o],d=Math.min(h,c),p=Math.max(h,c),g=s[o],w=a[o],T=Math.min(g,w),N=Math.max(g,w);if(N<d||p<T)return!1}return!0}function t(n,r,s,a){var o=i(n,s,a),h=i(r,s,a);if(o>0&&h>0||o<0&&h<0)return!1;var c=i(s,n,r),d=i(a,n,r);return c>0&&d>0||c<0&&d<0?!1:o===0&&h===0&&c===0&&d===0?e(n,r,s,a):!0}return sl}var Ka={exports:{}},Mv=Ka.exports,Df;function Ao(){return Df||(Df=1,(function(i){(function(e,t){function n(_,u){if(!_)throw new Error(u||"Assertion failed")}function r(_,u){_.super_=u;var E=function(){};E.prototype=u.prototype,_.prototype=new E,_.prototype.constructor=_}function s(_,u,E){if(s.isBN(_))return _;this.negative=0,this.words=null,this.length=0,this.red=null,_!==null&&((u==="le"||u==="be")&&(E=u,u=10),this._init(_||0,u||10,E||"be"))}typeof e=="object"?e.exports=s:t.BN=s,s.BN=s,s.wordSize=26;var a;try{typeof window<"u"&&typeof window.Buffer<"u"?a=window.Buffer:a=n0().Buffer}catch{}s.isBN=function(u){return u instanceof s?!0:u!==null&&typeof u=="object"&&u.constructor.wordSize===s.wordSize&&Array.isArray(u.words)},s.max=function(u,E){return u.cmp(E)>0?u:E},s.min=function(u,E){return u.cmp(E)<0?u:E},s.prototype._init=function(u,E,I){if(typeof u=="number")return this._initNumber(u,E,I);if(typeof u=="object")return this._initArray(u,E,I);E==="hex"&&(E=16),n(E===(E|0)&&E>=2&&E<=36),u=u.toString().replace(/\s+/g,"");var D=0;u[0]==="-"&&(D++,this.negative=1),D<u.length&&(E===16?this._parseHex(u,D,I):(this._parseBase(u,E,D),I==="le"&&this._initArray(this.toArray(),E,I)))},s.prototype._initNumber=function(u,E,I){u<0&&(this.negative=1,u=-u),u<67108864?(this.words=[u&67108863],this.length=1):u<4503599627370496?(this.words=[u&67108863,u/67108864&67108863],this.length=2):(n(u<9007199254740992),this.words=[u&67108863,u/67108864&67108863,1],this.length=3),I==="le"&&this._initArray(this.toArray(),E,I)},s.prototype._initArray=function(u,E,I){if(n(typeof u.length=="number"),u.length<=0)return this.words=[0],this.length=1,this;this.length=Math.ceil(u.length/3),this.words=new Array(this.length);for(var D=0;D<this.length;D++)this.words[D]=0;var k,z,G=0;if(I==="be")for(D=u.length-1,k=0;D>=0;D-=3)z=u[D]|u[D-1]<<8|u[D-2]<<16,this.words[k]|=z<<G&67108863,this.words[k+1]=z>>>26-G&67108863,G+=24,G>=26&&(G-=26,k++);else if(I==="le")for(D=0,k=0;D<u.length;D+=3)z=u[D]|u[D+1]<<8|u[D+2]<<16,this.words[k]|=z<<G&67108863,this.words[k+1]=z>>>26-G&67108863,G+=24,G>=26&&(G-=26,k++);return this.strip()};function o(_,u){var E=_.charCodeAt(u);return E>=65&&E<=70?E-55:E>=97&&E<=102?E-87:E-48&15}function h(_,u,E){var I=o(_,E);return E-1>=u&&(I|=o(_,E-1)<<4),I}s.prototype._parseHex=function(u,E,I){this.length=Math.ceil((u.length-E)/6),this.words=new Array(this.length);for(var D=0;D<this.length;D++)this.words[D]=0;var k=0,z=0,G;if(I==="be")for(D=u.length-1;D>=E;D-=2)G=h(u,E,D)<<k,this.words[z]|=G&67108863,k>=18?(k-=18,z+=1,this.words[z]|=G>>>26):k+=8;else{var O=u.length-E;for(D=O%2===0?E+1:E;D<u.length;D+=2)G=h(u,E,D)<<k,this.words[z]|=G&67108863,k>=18?(k-=18,z+=1,this.words[z]|=G>>>26):k+=8}this.strip()};function c(_,u,E,I){for(var D=0,k=Math.min(_.length,E),z=u;z<k;z++){var G=_.charCodeAt(z)-48;D*=I,G>=49?D+=G-49+10:G>=17?D+=G-17+10:D+=G}return D}s.prototype._parseBase=function(u,E,I){this.words=[0],this.length=1;for(var D=0,k=1;k<=67108863;k*=E)D++;D--,k=k/E|0;for(var z=u.length-I,G=z%D,O=Math.min(z,z-G)+I,x=0,B=I;B<O;B+=D)x=c(u,B,B+D,E),this.imuln(k),this.words[0]+x<67108864?this.words[0]+=x:this._iaddn(x);if(G!==0){var J=1;for(x=c(u,B,u.length,E),B=0;B<G;B++)J*=E;this.imuln(J),this.words[0]+x<67108864?this.words[0]+=x:this._iaddn(x)}this.strip()},s.prototype.copy=function(u){u.words=new Array(this.length);for(var E=0;E<this.length;E++)u.words[E]=this.words[E];u.length=this.length,u.negative=this.negative,u.red=this.red},s.prototype.clone=function(){var u=new s(null);return this.copy(u),u},s.prototype._expand=function(u){for(;this.length<u;)this.words[this.length++]=0;return this},s.prototype.strip=function(){for(;this.length>1&&this.words[this.length-1]===0;)this.length--;return this._normSign()},s.prototype._normSign=function(){return this.length===1&&this.words[0]===0&&(this.negative=0),this},s.prototype.inspect=function(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"};var d=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],p=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],g=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176];s.prototype.toString=function(u,E){u=u||10,E=E|0||1;var I;if(u===16||u==="hex"){I="";for(var D=0,k=0,z=0;z<this.length;z++){var G=this.words[z],O=((G<<D|k)&16777215).toString(16);k=G>>>24-D&16777215,D+=2,D>=26&&(D-=26,z--),k!==0||z!==this.length-1?I=d[6-O.length]+O+I:I=O+I}for(k!==0&&(I=k.toString(16)+I);I.length%E!==0;)I="0"+I;return this.negative!==0&&(I="-"+I),I}if(u===(u|0)&&u>=2&&u<=36){var x=p[u],B=g[u];I="";var J=this.clone();for(J.negative=0;!J.isZero();){var j=J.modn(B).toString(u);J=J.idivn(B),J.isZero()?I=j+I:I=d[x-j.length]+j+I}for(this.isZero()&&(I="0"+I);I.length%E!==0;)I="0"+I;return this.negative!==0&&(I="-"+I),I}n(!1,"Base should be between 2 and 36")},s.prototype.toNumber=function(){var u=this.words[0];return this.length===2?u+=this.words[1]*67108864:this.length===3&&this.words[2]===1?u+=4503599627370496+this.words[1]*67108864:this.length>2&&n(!1,"Number can only safely store up to 53 bits"),this.negative!==0?-u:u},s.prototype.toJSON=function(){return this.toString(16)},s.prototype.toBuffer=function(u,E){return n(typeof a<"u"),this.toArrayLike(a,u,E)},s.prototype.toArray=function(u,E){return this.toArrayLike(Array,u,E)},s.prototype.toArrayLike=function(u,E,I){var D=this.byteLength(),k=I||Math.max(1,D);n(D<=k,"byte array longer than desired length"),n(k>0,"Requested array length <= 0"),this.strip();var z=E==="le",G=new u(k),O,x,B=this.clone();if(z){for(x=0;!B.isZero();x++)O=B.andln(255),B.iushrn(8),G[x]=O;for(;x<k;x++)G[x]=0}else{for(x=0;x<k-D;x++)G[x]=0;for(x=0;!B.isZero();x++)O=B.andln(255),B.iushrn(8),G[k-x-1]=O}return G},Math.clz32?s.prototype._countBits=function(u){return 32-Math.clz32(u)}:s.prototype._countBits=function(u){var E=u,I=0;return E>=4096&&(I+=13,E>>>=13),E>=64&&(I+=7,E>>>=7),E>=8&&(I+=4,E>>>=4),E>=2&&(I+=2,E>>>=2),I+E},s.prototype._zeroBits=function(u){if(u===0)return 26;var E=u,I=0;return(E&8191)===0&&(I+=13,E>>>=13),(E&127)===0&&(I+=7,E>>>=7),(E&15)===0&&(I+=4,E>>>=4),(E&3)===0&&(I+=2,E>>>=2),(E&1)===0&&I++,I},s.prototype.bitLength=function(){var u=this.words[this.length-1],E=this._countBits(u);return(this.length-1)*26+E};function w(_){for(var u=new Array(_.bitLength()),E=0;E<u.length;E++){var I=E/26|0,D=E%26;u[E]=(_.words[I]&1<<D)>>>D}return u}s.prototype.zeroBits=function(){if(this.isZero())return 0;for(var u=0,E=0;E<this.length;E++){var I=this._zeroBits(this.words[E]);if(u+=I,I!==26)break}return u},s.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},s.prototype.toTwos=function(u){return this.negative!==0?this.abs().inotn(u).iaddn(1):this.clone()},s.prototype.fromTwos=function(u){return this.testn(u-1)?this.notn(u).iaddn(1).ineg():this.clone()},s.prototype.isNeg=function(){return this.negative!==0},s.prototype.neg=function(){return this.clone().ineg()},s.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},s.prototype.iuor=function(u){for(;this.length<u.length;)this.words[this.length++]=0;for(var E=0;E<u.length;E++)this.words[E]=this.words[E]|u.words[E];return this.strip()},s.prototype.ior=function(u){return n((this.negative|u.negative)===0),this.iuor(u)},s.prototype.or=function(u){return this.length>u.length?this.clone().ior(u):u.clone().ior(this)},s.prototype.uor=function(u){return this.length>u.length?this.clone().iuor(u):u.clone().iuor(this)},s.prototype.iuand=function(u){var E;this.length>u.length?E=u:E=this;for(var I=0;I<E.length;I++)this.words[I]=this.words[I]&u.words[I];return this.length=E.length,this.strip()},s.prototype.iand=function(u){return n((this.negative|u.negative)===0),this.iuand(u)},s.prototype.and=function(u){return this.length>u.length?this.clone().iand(u):u.clone().iand(this)},s.prototype.uand=function(u){return this.length>u.length?this.clone().iuand(u):u.clone().iuand(this)},s.prototype.iuxor=function(u){var E,I;this.length>u.length?(E=this,I=u):(E=u,I=this);for(var D=0;D<I.length;D++)this.words[D]=E.words[D]^I.words[D];if(this!==E)for(;D<E.length;D++)this.words[D]=E.words[D];return this.length=E.length,this.strip()},s.prototype.ixor=function(u){return n((this.negative|u.negative)===0),this.iuxor(u)},s.prototype.xor=function(u){return this.length>u.length?this.clone().ixor(u):u.clone().ixor(this)},s.prototype.uxor=function(u){return this.length>u.length?this.clone().iuxor(u):u.clone().iuxor(this)},s.prototype.inotn=function(u){n(typeof u=="number"&&u>=0);var E=Math.ceil(u/26)|0,I=u%26;this._expand(E),I>0&&E--;for(var D=0;D<E;D++)this.words[D]=~this.words[D]&67108863;for(I>0&&(this.words[D]=~this.words[D]&67108863>>26-I,D++);D<this.length;D++)this.words[D]=0;return this.strip()},s.prototype.notn=function(u){return this.clone().inotn(u)},s.prototype.setn=function(u,E){n(typeof u=="number"&&u>=0);var I=u/26|0,D=u%26;return this._expand(I+1),E?this.words[I]=this.words[I]|1<<D:this.words[I]=this.words[I]&~(1<<D),this.strip()},s.prototype.iadd=function(u){var E;if(this.negative!==0&&u.negative===0)return this.negative=0,E=this.isub(u),this.negative^=1,this._normSign();if(this.negative===0&&u.negative!==0)return u.negative=0,E=this.isub(u),u.negative=1,E._normSign();var I,D;this.length>u.length?(I=this,D=u):(I=u,D=this);for(var k=0,z=0;z<D.length;z++)E=(I.words[z]|0)+(D.words[z]|0)+k,this.words[z]=E&67108863,k=E>>>26;for(;k!==0&&z<I.length;z++)E=(I.words[z]|0)+k,this.words[z]=E&67108863,k=E>>>26;if(this.length=I.length,k!==0)this.words[this.length]=k,this.length++;else if(I!==this)for(;z<I.length;z++)this.words[z]=I.words[z];return this},s.prototype.add=function(u){var E;return u.negative!==0&&this.negative===0?(u.negative=0,E=this.sub(u),u.negative^=1,E):u.negative===0&&this.negative!==0?(this.negative=0,E=u.sub(this),this.negative=1,E):this.length>u.length?this.clone().iadd(u):u.clone().iadd(this)},s.prototype.isub=function(u){if(u.negative!==0){u.negative=0;var E=this.iadd(u);return u.negative=1,E._normSign()}else if(this.negative!==0)return this.negative=0,this.iadd(u),this.negative=1,this._normSign();var I=this.cmp(u);if(I===0)return this.negative=0,this.length=1,this.words[0]=0,this;var D,k;I>0?(D=this,k=u):(D=u,k=this);for(var z=0,G=0;G<k.length;G++)E=(D.words[G]|0)-(k.words[G]|0)+z,z=E>>26,this.words[G]=E&67108863;for(;z!==0&&G<D.length;G++)E=(D.words[G]|0)+z,z=E>>26,this.words[G]=E&67108863;if(z===0&&G<D.length&&D!==this)for(;G<D.length;G++)this.words[G]=D.words[G];return this.length=Math.max(this.length,G),D!==this&&(this.negative=1),this.strip()},s.prototype.sub=function(u){return this.clone().isub(u)};function T(_,u,E){E.negative=u.negative^_.negative;var I=_.length+u.length|0;E.length=I,I=I-1|0;var D=_.words[0]|0,k=u.words[0]|0,z=D*k,G=z&67108863,O=z/67108864|0;E.words[0]=G;for(var x=1;x<I;x++){for(var B=O>>>26,J=O&67108863,j=Math.min(x,u.length-1),ie=Math.max(0,x-_.length+1);ie<=j;ie++){var ue=x-ie|0;D=_.words[ue]|0,k=u.words[ie]|0,z=D*k+J,B+=z/67108864|0,J=z&67108863}E.words[x]=J|0,O=B|0}return O!==0?E.words[x]=O|0:E.length--,E.strip()}var N=function(u,E,I){var D=u.words,k=E.words,z=I.words,G=0,O,x,B,J=D[0]|0,j=J&8191,ie=J>>>13,ue=D[1]|0,fe=ue&8191,K=ue>>>13,ne=D[2]|0,ae=ne&8191,le=ne>>>13,xe=D[3]|0,ve=xe&8191,ge=xe>>>13,Te=D[4]|0,ye=Te&8191,Se=Te>>>13,Ge=D[5]|0,De=Ge&8191,He=Ge>>>13,nt=D[6]|0,Ie=nt&8191,Ae=nt>>>13,te=D[7]|0,we=te&8191,Pe=te>>>13,X=D[8]|0,v=X&8191,y=X>>>13,A=D[9]|0,V=A&8191,q=A>>>13,Q=k[0]|0,$=Q&8191,oe=Q>>>13,Re=k[1]|0,Ce=Re&8191,Me=Re>>>13,Ee=k[2]|0,ze=Ee&8191,qe=Ee>>>13,it=k[3]|0,ee=it&8191,Ue=it>>>13,_e=k[4]|0,Le=_e&8191,Ne=_e>>>13,be=k[5]|0,Ve=be&8191,Be=be>>>13,xt=k[6]|0,et=xt&8191,yt=xt>>>13,cn=k[7]|0,Bt=cn&8191,Ot=cn>>>13,Hi=k[8]|0,Nt=Hi&8191,kt=Hi>>>13,Wi=k[9]|0,zt=Wi&8191,Tt=Wi>>>13;I.negative=u.negative^E.negative,I.length=19,O=Math.imul(j,$),x=Math.imul(j,oe),x=x+Math.imul(ie,$)|0,B=Math.imul(ie,oe);var Wn=(G+O|0)+((x&8191)<<13)|0;G=(B+(x>>>13)|0)+(Wn>>>26)|0,Wn&=67108863,O=Math.imul(fe,$),x=Math.imul(fe,oe),x=x+Math.imul(K,$)|0,B=Math.imul(K,oe),O=O+Math.imul(j,Ce)|0,x=x+Math.imul(j,Me)|0,x=x+Math.imul(ie,Ce)|0,B=B+Math.imul(ie,Me)|0;var Xi=(G+O|0)+((x&8191)<<13)|0;G=(B+(x>>>13)|0)+(Xi>>>26)|0,Xi&=67108863,O=Math.imul(ae,$),x=Math.imul(ae,oe),x=x+Math.imul(le,$)|0,B=Math.imul(le,oe),O=O+Math.imul(fe,Ce)|0,x=x+Math.imul(fe,Me)|0,x=x+Math.imul(K,Ce)|0,B=B+Math.imul(K,Me)|0,O=O+Math.imul(j,ze)|0,x=x+Math.imul(j,qe)|0,x=x+Math.imul(ie,ze)|0,B=B+Math.imul(ie,qe)|0;var ci=(G+O|0)+((x&8191)<<13)|0;G=(B+(x>>>13)|0)+(ci>>>26)|0,ci&=67108863,O=Math.imul(ve,$),x=Math.imul(ve,oe),x=x+Math.imul(ge,$)|0,B=Math.imul(ge,oe),O=O+Math.imul(ae,Ce)|0,x=x+Math.imul(ae,Me)|0,x=x+Math.imul(le,Ce)|0,B=B+Math.imul(le,Me)|0,O=O+Math.imul(fe,ze)|0,x=x+Math.imul(fe,qe)|0,x=x+Math.imul(K,ze)|0,B=B+Math.imul(K,qe)|0,O=O+Math.imul(j,ee)|0,x=x+Math.imul(j,Ue)|0,x=x+Math.imul(ie,ee)|0,B=B+Math.imul(ie,Ue)|0;var Tn=(G+O|0)+((x&8191)<<13)|0;G=(B+(x>>>13)|0)+(Tn>>>26)|0,Tn&=67108863,O=Math.imul(ye,$),x=Math.imul(ye,oe),x=x+Math.imul(Se,$)|0,B=Math.imul(Se,oe),O=O+Math.imul(ve,Ce)|0,x=x+Math.imul(ve,Me)|0,x=x+Math.imul(ge,Ce)|0,B=B+Math.imul(ge,Me)|0,O=O+Math.imul(ae,ze)|0,x=x+Math.imul(ae,qe)|0,x=x+Math.imul(le,ze)|0,B=B+Math.imul(le,qe)|0,O=O+Math.imul(fe,ee)|0,x=x+Math.imul(fe,Ue)|0,x=x+Math.imul(K,ee)|0,B=B+Math.imul(K,Ue)|0,O=O+Math.imul(j,Le)|0,x=x+Math.imul(j,Ne)|0,x=x+Math.imul(ie,Le)|0,B=B+Math.imul(ie,Ne)|0;var qi=(G+O|0)+((x&8191)<<13)|0;G=(B+(x>>>13)|0)+(qi>>>26)|0,qi&=67108863,O=Math.imul(De,$),x=Math.imul(De,oe),x=x+Math.imul(He,$)|0,B=Math.imul(He,oe),O=O+Math.imul(ye,Ce)|0,x=x+Math.imul(ye,Me)|0,x=x+Math.imul(Se,Ce)|0,B=B+Math.imul(Se,Me)|0,O=O+Math.imul(ve,ze)|0,x=x+Math.imul(ve,qe)|0,x=x+Math.imul(ge,ze)|0,B=B+Math.imul(ge,qe)|0,O=O+Math.imul(ae,ee)|0,x=x+Math.imul(ae,Ue)|0,x=x+Math.imul(le,ee)|0,B=B+Math.imul(le,Ue)|0,O=O+Math.imul(fe,Le)|0,x=x+Math.imul(fe,Ne)|0,x=x+Math.imul(K,Le)|0,B=B+Math.imul(K,Ne)|0,O=O+Math.imul(j,Ve)|0,x=x+Math.imul(j,Be)|0,x=x+Math.imul(ie,Ve)|0,B=B+Math.imul(ie,Be)|0;var Fn=(G+O|0)+((x&8191)<<13)|0;G=(B+(x>>>13)|0)+(Fn>>>26)|0,Fn&=67108863,O=Math.imul(Ie,$),x=Math.imul(Ie,oe),x=x+Math.imul(Ae,$)|0,B=Math.imul(Ae,oe),O=O+Math.imul(De,Ce)|0,x=x+Math.imul(De,Me)|0,x=x+Math.imul(He,Ce)|0,B=B+Math.imul(He,Me)|0,O=O+Math.imul(ye,ze)|0,x=x+Math.imul(ye,qe)|0,x=x+Math.imul(Se,ze)|0,B=B+Math.imul(Se,qe)|0,O=O+Math.imul(ve,ee)|0,x=x+Math.imul(ve,Ue)|0,x=x+Math.imul(ge,ee)|0,B=B+Math.imul(ge,Ue)|0,O=O+Math.imul(ae,Le)|0,x=x+Math.imul(ae,Ne)|0,x=x+Math.imul(le,Le)|0,B=B+Math.imul(le,Ne)|0,O=O+Math.imul(fe,Ve)|0,x=x+Math.imul(fe,Be)|0,x=x+Math.imul(K,Ve)|0,B=B+Math.imul(K,Be)|0,O=O+Math.imul(j,et)|0,x=x+Math.imul(j,yt)|0,x=x+Math.imul(ie,et)|0,B=B+Math.imul(ie,yt)|0;var $i=(G+O|0)+((x&8191)<<13)|0;G=(B+(x>>>13)|0)+($i>>>26)|0,$i&=67108863,O=Math.imul(we,$),x=Math.imul(we,oe),x=x+Math.imul(Pe,$)|0,B=Math.imul(Pe,oe),O=O+Math.imul(Ie,Ce)|0,x=x+Math.imul(Ie,Me)|0,x=x+Math.imul(Ae,Ce)|0,B=B+Math.imul(Ae,Me)|0,O=O+Math.imul(De,ze)|0,x=x+Math.imul(De,qe)|0,x=x+Math.imul(He,ze)|0,B=B+Math.imul(He,qe)|0,O=O+Math.imul(ye,ee)|0,x=x+Math.imul(ye,Ue)|0,x=x+Math.imul(Se,ee)|0,B=B+Math.imul(Se,Ue)|0,O=O+Math.imul(ve,Le)|0,x=x+Math.imul(ve,Ne)|0,x=x+Math.imul(ge,Le)|0,B=B+Math.imul(ge,Ne)|0,O=O+Math.imul(ae,Ve)|0,x=x+Math.imul(ae,Be)|0,x=x+Math.imul(le,Ve)|0,B=B+Math.imul(le,Be)|0,O=O+Math.imul(fe,et)|0,x=x+Math.imul(fe,yt)|0,x=x+Math.imul(K,et)|0,B=B+Math.imul(K,yt)|0,O=O+Math.imul(j,Bt)|0,x=x+Math.imul(j,Ot)|0,x=x+Math.imul(ie,Bt)|0,B=B+Math.imul(ie,Ot)|0;var Yi=(G+O|0)+((x&8191)<<13)|0;G=(B+(x>>>13)|0)+(Yi>>>26)|0,Yi&=67108863,O=Math.imul(v,$),x=Math.imul(v,oe),x=x+Math.imul(y,$)|0,B=Math.imul(y,oe),O=O+Math.imul(we,Ce)|0,x=x+Math.imul(we,Me)|0,x=x+Math.imul(Pe,Ce)|0,B=B+Math.imul(Pe,Me)|0,O=O+Math.imul(Ie,ze)|0,x=x+Math.imul(Ie,qe)|0,x=x+Math.imul(Ae,ze)|0,B=B+Math.imul(Ae,qe)|0,O=O+Math.imul(De,ee)|0,x=x+Math.imul(De,Ue)|0,x=x+Math.imul(He,ee)|0,B=B+Math.imul(He,Ue)|0,O=O+Math.imul(ye,Le)|0,x=x+Math.imul(ye,Ne)|0,x=x+Math.imul(Se,Le)|0,B=B+Math.imul(Se,Ne)|0,O=O+Math.imul(ve,Ve)|0,x=x+Math.imul(ve,Be)|0,x=x+Math.imul(ge,Ve)|0,B=B+Math.imul(ge,Be)|0,O=O+Math.imul(ae,et)|0,x=x+Math.imul(ae,yt)|0,x=x+Math.imul(le,et)|0,B=B+Math.imul(le,yt)|0,O=O+Math.imul(fe,Bt)|0,x=x+Math.imul(fe,Ot)|0,x=x+Math.imul(K,Bt)|0,B=B+Math.imul(K,Ot)|0,O=O+Math.imul(j,Nt)|0,x=x+Math.imul(j,kt)|0,x=x+Math.imul(ie,Nt)|0,B=B+Math.imul(ie,kt)|0;var fr=(G+O|0)+((x&8191)<<13)|0;G=(B+(x>>>13)|0)+(fr>>>26)|0,fr&=67108863,O=Math.imul(V,$),x=Math.imul(V,oe),x=x+Math.imul(q,$)|0,B=Math.imul(q,oe),O=O+Math.imul(v,Ce)|0,x=x+Math.imul(v,Me)|0,x=x+Math.imul(y,Ce)|0,B=B+Math.imul(y,Me)|0,O=O+Math.imul(we,ze)|0,x=x+Math.imul(we,qe)|0,x=x+Math.imul(Pe,ze)|0,B=B+Math.imul(Pe,qe)|0,O=O+Math.imul(Ie,ee)|0,x=x+Math.imul(Ie,Ue)|0,x=x+Math.imul(Ae,ee)|0,B=B+Math.imul(Ae,Ue)|0,O=O+Math.imul(De,Le)|0,x=x+Math.imul(De,Ne)|0,x=x+Math.imul(He,Le)|0,B=B+Math.imul(He,Ne)|0,O=O+Math.imul(ye,Ve)|0,x=x+Math.imul(ye,Be)|0,x=x+Math.imul(Se,Ve)|0,B=B+Math.imul(Se,Be)|0,O=O+Math.imul(ve,et)|0,x=x+Math.imul(ve,yt)|0,x=x+Math.imul(ge,et)|0,B=B+Math.imul(ge,yt)|0,O=O+Math.imul(ae,Bt)|0,x=x+Math.imul(ae,Ot)|0,x=x+Math.imul(le,Bt)|0,B=B+Math.imul(le,Ot)|0,O=O+Math.imul(fe,Nt)|0,x=x+Math.imul(fe,kt)|0,x=x+Math.imul(K,Nt)|0,B=B+Math.imul(K,kt)|0,O=O+Math.imul(j,zt)|0,x=x+Math.imul(j,Tt)|0,x=x+Math.imul(ie,zt)|0,B=B+Math.imul(ie,Tt)|0;var dr=(G+O|0)+((x&8191)<<13)|0;G=(B+(x>>>13)|0)+(dr>>>26)|0,dr&=67108863,O=Math.imul(V,Ce),x=Math.imul(V,Me),x=x+Math.imul(q,Ce)|0,B=Math.imul(q,Me),O=O+Math.imul(v,ze)|0,x=x+Math.imul(v,qe)|0,x=x+Math.imul(y,ze)|0,B=B+Math.imul(y,qe)|0,O=O+Math.imul(we,ee)|0,x=x+Math.imul(we,Ue)|0,x=x+Math.imul(Pe,ee)|0,B=B+Math.imul(Pe,Ue)|0,O=O+Math.imul(Ie,Le)|0,x=x+Math.imul(Ie,Ne)|0,x=x+Math.imul(Ae,Le)|0,B=B+Math.imul(Ae,Ne)|0,O=O+Math.imul(De,Ve)|0,x=x+Math.imul(De,Be)|0,x=x+Math.imul(He,Ve)|0,B=B+Math.imul(He,Be)|0,O=O+Math.imul(ye,et)|0,x=x+Math.imul(ye,yt)|0,x=x+Math.imul(Se,et)|0,B=B+Math.imul(Se,yt)|0,O=O+Math.imul(ve,Bt)|0,x=x+Math.imul(ve,Ot)|0,x=x+Math.imul(ge,Bt)|0,B=B+Math.imul(ge,Ot)|0,O=O+Math.imul(ae,Nt)|0,x=x+Math.imul(ae,kt)|0,x=x+Math.imul(le,Nt)|0,B=B+Math.imul(le,kt)|0,O=O+Math.imul(fe,zt)|0,x=x+Math.imul(fe,Tt)|0,x=x+Math.imul(K,zt)|0,B=B+Math.imul(K,Tt)|0;var pr=(G+O|0)+((x&8191)<<13)|0;G=(B+(x>>>13)|0)+(pr>>>26)|0,pr&=67108863,O=Math.imul(V,ze),x=Math.imul(V,qe),x=x+Math.imul(q,ze)|0,B=Math.imul(q,qe),O=O+Math.imul(v,ee)|0,x=x+Math.imul(v,Ue)|0,x=x+Math.imul(y,ee)|0,B=B+Math.imul(y,Ue)|0,O=O+Math.imul(we,Le)|0,x=x+Math.imul(we,Ne)|0,x=x+Math.imul(Pe,Le)|0,B=B+Math.imul(Pe,Ne)|0,O=O+Math.imul(Ie,Ve)|0,x=x+Math.imul(Ie,Be)|0,x=x+Math.imul(Ae,Ve)|0,B=B+Math.imul(Ae,Be)|0,O=O+Math.imul(De,et)|0,x=x+Math.imul(De,yt)|0,x=x+Math.imul(He,et)|0,B=B+Math.imul(He,yt)|0,O=O+Math.imul(ye,Bt)|0,x=x+Math.imul(ye,Ot)|0,x=x+Math.imul(Se,Bt)|0,B=B+Math.imul(Se,Ot)|0,O=O+Math.imul(ve,Nt)|0,x=x+Math.imul(ve,kt)|0,x=x+Math.imul(ge,Nt)|0,B=B+Math.imul(ge,kt)|0,O=O+Math.imul(ae,zt)|0,x=x+Math.imul(ae,Tt)|0,x=x+Math.imul(le,zt)|0,B=B+Math.imul(le,Tt)|0;var Zi=(G+O|0)+((x&8191)<<13)|0;G=(B+(x>>>13)|0)+(Zi>>>26)|0,Zi&=67108863,O=Math.imul(V,ee),x=Math.imul(V,Ue),x=x+Math.imul(q,ee)|0,B=Math.imul(q,Ue),O=O+Math.imul(v,Le)|0,x=x+Math.imul(v,Ne)|0,x=x+Math.imul(y,Le)|0,B=B+Math.imul(y,Ne)|0,O=O+Math.imul(we,Ve)|0,x=x+Math.imul(we,Be)|0,x=x+Math.imul(Pe,Ve)|0,B=B+Math.imul(Pe,Be)|0,O=O+Math.imul(Ie,et)|0,x=x+Math.imul(Ie,yt)|0,x=x+Math.imul(Ae,et)|0,B=B+Math.imul(Ae,yt)|0,O=O+Math.imul(De,Bt)|0,x=x+Math.imul(De,Ot)|0,x=x+Math.imul(He,Bt)|0,B=B+Math.imul(He,Ot)|0,O=O+Math.imul(ye,Nt)|0,x=x+Math.imul(ye,kt)|0,x=x+Math.imul(Se,Nt)|0,B=B+Math.imul(Se,kt)|0,O=O+Math.imul(ve,zt)|0,x=x+Math.imul(ve,Tt)|0,x=x+Math.imul(ge,zt)|0,B=B+Math.imul(ge,Tt)|0;var bi=(G+O|0)+((x&8191)<<13)|0;G=(B+(x>>>13)|0)+(bi>>>26)|0,bi&=67108863,O=Math.imul(V,Le),x=Math.imul(V,Ne),x=x+Math.imul(q,Le)|0,B=Math.imul(q,Ne),O=O+Math.imul(v,Ve)|0,x=x+Math.imul(v,Be)|0,x=x+Math.imul(y,Ve)|0,B=B+Math.imul(y,Be)|0,O=O+Math.imul(we,et)|0,x=x+Math.imul(we,yt)|0,x=x+Math.imul(Pe,et)|0,B=B+Math.imul(Pe,yt)|0,O=O+Math.imul(Ie,Bt)|0,x=x+Math.imul(Ie,Ot)|0,x=x+Math.imul(Ae,Bt)|0,B=B+Math.imul(Ae,Ot)|0,O=O+Math.imul(De,Nt)|0,x=x+Math.imul(De,kt)|0,x=x+Math.imul(He,Nt)|0,B=B+Math.imul(He,kt)|0,O=O+Math.imul(ye,zt)|0,x=x+Math.imul(ye,Tt)|0,x=x+Math.imul(Se,zt)|0,B=B+Math.imul(Se,Tt)|0;var W=(G+O|0)+((x&8191)<<13)|0;G=(B+(x>>>13)|0)+(W>>>26)|0,W&=67108863,O=Math.imul(V,Ve),x=Math.imul(V,Be),x=x+Math.imul(q,Ve)|0,B=Math.imul(q,Be),O=O+Math.imul(v,et)|0,x=x+Math.imul(v,yt)|0,x=x+Math.imul(y,et)|0,B=B+Math.imul(y,yt)|0,O=O+Math.imul(we,Bt)|0,x=x+Math.imul(we,Ot)|0,x=x+Math.imul(Pe,Bt)|0,B=B+Math.imul(Pe,Ot)|0,O=O+Math.imul(Ie,Nt)|0,x=x+Math.imul(Ie,kt)|0,x=x+Math.imul(Ae,Nt)|0,B=B+Math.imul(Ae,kt)|0,O=O+Math.imul(De,zt)|0,x=x+Math.imul(De,Tt)|0,x=x+Math.imul(He,zt)|0,B=B+Math.imul(He,Tt)|0;var re=(G+O|0)+((x&8191)<<13)|0;G=(B+(x>>>13)|0)+(re>>>26)|0,re&=67108863,O=Math.imul(V,et),x=Math.imul(V,yt),x=x+Math.imul(q,et)|0,B=Math.imul(q,yt),O=O+Math.imul(v,Bt)|0,x=x+Math.imul(v,Ot)|0,x=x+Math.imul(y,Bt)|0,B=B+Math.imul(y,Ot)|0,O=O+Math.imul(we,Nt)|0,x=x+Math.imul(we,kt)|0,x=x+Math.imul(Pe,Nt)|0,B=B+Math.imul(Pe,kt)|0,O=O+Math.imul(Ie,zt)|0,x=x+Math.imul(Ie,Tt)|0,x=x+Math.imul(Ae,zt)|0,B=B+Math.imul(Ae,Tt)|0;var pe=(G+O|0)+((x&8191)<<13)|0;G=(B+(x>>>13)|0)+(pe>>>26)|0,pe&=67108863,O=Math.imul(V,Bt),x=Math.imul(V,Ot),x=x+Math.imul(q,Bt)|0,B=Math.imul(q,Ot),O=O+Math.imul(v,Nt)|0,x=x+Math.imul(v,kt)|0,x=x+Math.imul(y,Nt)|0,B=B+Math.imul(y,kt)|0,O=O+Math.imul(we,zt)|0,x=x+Math.imul(we,Tt)|0,x=x+Math.imul(Pe,zt)|0,B=B+Math.imul(Pe,Tt)|0;var he=(G+O|0)+((x&8191)<<13)|0;G=(B+(x>>>13)|0)+(he>>>26)|0,he&=67108863,O=Math.imul(V,Nt),x=Math.imul(V,kt),x=x+Math.imul(q,Nt)|0,B=Math.imul(q,kt),O=O+Math.imul(v,zt)|0,x=x+Math.imul(v,Tt)|0,x=x+Math.imul(y,zt)|0,B=B+Math.imul(y,Tt)|0;var ce=(G+O|0)+((x&8191)<<13)|0;G=(B+(x>>>13)|0)+(ce>>>26)|0,ce&=67108863,O=Math.imul(V,zt),x=Math.imul(V,Tt),x=x+Math.imul(q,zt)|0,B=Math.imul(q,Tt);var Oe=(G+O|0)+((x&8191)<<13)|0;return G=(B+(x>>>13)|0)+(Oe>>>26)|0,Oe&=67108863,z[0]=Wn,z[1]=Xi,z[2]=ci,z[3]=Tn,z[4]=qi,z[5]=Fn,z[6]=$i,z[7]=Yi,z[8]=fr,z[9]=dr,z[10]=pr,z[11]=Zi,z[12]=bi,z[13]=W,z[14]=re,z[15]=pe,z[16]=he,z[17]=ce,z[18]=Oe,G!==0&&(z[19]=G,I.length++),I};Math.imul||(N=T);function C(_,u,E){E.negative=u.negative^_.negative,E.length=_.length+u.length;for(var I=0,D=0,k=0;k<E.length-1;k++){var z=D;D=0;for(var G=I&67108863,O=Math.min(k,u.length-1),x=Math.max(0,k-_.length+1);x<=O;x++){var B=k-x,J=_.words[B]|0,j=u.words[x]|0,ie=J*j,ue=ie&67108863;z=z+(ie/67108864|0)|0,ue=ue+G|0,G=ue&67108863,z=z+(ue>>>26)|0,D+=z>>>26,z&=67108863}E.words[k]=G,I=z,z=D}return I!==0?E.words[k]=I:E.length--,E.strip()}function R(_,u,E){var I=new m;return I.mulp(_,u,E)}s.prototype.mulTo=function(u,E){var I,D=this.length+u.length;return this.length===10&&u.length===10?I=N(this,u,E):D<63?I=T(this,u,E):D<1024?I=C(this,u,E):I=R(this,u,E),I};function m(_,u){this.x=_,this.y=u}m.prototype.makeRBT=function(u){for(var E=new Array(u),I=s.prototype._countBits(u)-1,D=0;D<u;D++)E[D]=this.revBin(D,I,u);return E},m.prototype.revBin=function(u,E,I){if(u===0||u===I-1)return u;for(var D=0,k=0;k<E;k++)D|=(u&1)<<E-k-1,u>>=1;return D},m.prototype.permute=function(u,E,I,D,k,z){for(var G=0;G<z;G++)D[G]=E[u[G]],k[G]=I[u[G]]},m.prototype.transform=function(u,E,I,D,k,z){this.permute(z,u,E,I,D,k);for(var G=1;G<k;G<<=1)for(var O=G<<1,x=Math.cos(2*Math.PI/O),B=Math.sin(2*Math.PI/O),J=0;J<k;J+=O)for(var j=x,ie=B,ue=0;ue<G;ue++){var fe=I[J+ue],K=D[J+ue],ne=I[J+ue+G],ae=D[J+ue+G],le=j*ne-ie*ae;ae=j*ae+ie*ne,ne=le,I[J+ue]=fe+ne,D[J+ue]=K+ae,I[J+ue+G]=fe-ne,D[J+ue+G]=K-ae,ue!==O&&(le=x*j-B*ie,ie=x*ie+B*j,j=le)}},m.prototype.guessLen13b=function(u,E){var I=Math.max(E,u)|1,D=I&1,k=0;for(I=I/2|0;I;I=I>>>1)k++;return 1<<k+1+D},m.prototype.conjugate=function(u,E,I){if(!(I<=1))for(var D=0;D<I/2;D++){var k=u[D];u[D]=u[I-D-1],u[I-D-1]=k,k=E[D],E[D]=-E[I-D-1],E[I-D-1]=-k}},m.prototype.normalize13b=function(u,E){for(var I=0,D=0;D<E/2;D++){var k=Math.round(u[2*D+1]/E)*8192+Math.round(u[2*D]/E)+I;u[D]=k&67108863,k<67108864?I=0:I=k/67108864|0}return u},m.prototype.convert13b=function(u,E,I,D){for(var k=0,z=0;z<E;z++)k=k+(u[z]|0),I[2*z]=k&8191,k=k>>>13,I[2*z+1]=k&8191,k=k>>>13;for(z=2*E;z<D;++z)I[z]=0;n(k===0),n((k&-8192)===0)},m.prototype.stub=function(u){for(var E=new Array(u),I=0;I<u;I++)E[I]=0;return E},m.prototype.mulp=function(u,E,I){var D=2*this.guessLen13b(u.length,E.length),k=this.makeRBT(D),z=this.stub(D),G=new Array(D),O=new Array(D),x=new Array(D),B=new Array(D),J=new Array(D),j=new Array(D),ie=I.words;ie.length=D,this.convert13b(u.words,u.length,G,D),this.convert13b(E.words,E.length,B,D),this.transform(G,z,O,x,D,k),this.transform(B,z,J,j,D,k);for(var ue=0;ue<D;ue++){var fe=O[ue]*J[ue]-x[ue]*j[ue];x[ue]=O[ue]*j[ue]+x[ue]*J[ue],O[ue]=fe}return this.conjugate(O,x,D),this.transform(O,x,ie,z,D,k),this.conjugate(ie,z,D),this.normalize13b(ie,D),I.negative=u.negative^E.negative,I.length=u.length+E.length,I.strip()},s.prototype.mul=function(u){var E=new s(null);return E.words=new Array(this.length+u.length),this.mulTo(u,E)},s.prototype.mulf=function(u){var E=new s(null);return E.words=new Array(this.length+u.length),R(this,u,E)},s.prototype.imul=function(u){return this.clone().mulTo(u,this)},s.prototype.imuln=function(u){n(typeof u=="number"),n(u<67108864);for(var E=0,I=0;I<this.length;I++){var D=(this.words[I]|0)*u,k=(D&67108863)+(E&67108863);E>>=26,E+=D/67108864|0,E+=k>>>26,this.words[I]=k&67108863}return E!==0&&(this.words[I]=E,this.length++),u===0&&(this.length=1,this._normSign()),this},s.prototype.muln=function(u){return this.clone().imuln(u)},s.prototype.sqr=function(){return this.mul(this)},s.prototype.isqr=function(){return this.imul(this.clone())},s.prototype.pow=function(u){var E=w(u);if(E.length===0)return new s(1);for(var I=this,D=0;D<E.length&&E[D]===0;D++,I=I.sqr());if(++D<E.length)for(var k=I.sqr();D<E.length;D++,k=k.sqr())E[D]!==0&&(I=I.mul(k));return I},s.prototype.iushln=function(u){n(typeof u=="number"&&u>=0);var E=u%26,I=(u-E)/26,D=67108863>>>26-E<<26-E,k;if(E!==0){var z=0;for(k=0;k<this.length;k++){var G=this.words[k]&D,O=(this.words[k]|0)-G<<E;this.words[k]=O|z,z=G>>>26-E}z&&(this.words[k]=z,this.length++)}if(I!==0){for(k=this.length-1;k>=0;k--)this.words[k+I]=this.words[k];for(k=0;k<I;k++)this.words[k]=0;this.length+=I}return this.strip()},s.prototype.ishln=function(u){return n(this.negative===0),this.iushln(u)},s.prototype.iushrn=function(u,E,I){n(typeof u=="number"&&u>=0);var D;E?D=(E-E%26)/26:D=0;var k=u%26,z=Math.min((u-k)/26,this.length),G=67108863^67108863>>>k<<k,O=I;if(D-=z,D=Math.max(0,D),O){for(var x=0;x<z;x++)O.words[x]=this.words[x];O.length=z}if(z!==0)if(this.length>z)for(this.length-=z,x=0;x<this.length;x++)this.words[x]=this.words[x+z];else this.words[0]=0,this.length=1;var B=0;for(x=this.length-1;x>=0&&(B!==0||x>=D);x--){var J=this.words[x]|0;this.words[x]=B<<26-k|J>>>k,B=J&G}return O&&B!==0&&(O.words[O.length++]=B),this.length===0&&(this.words[0]=0,this.length=1),this.strip()},s.prototype.ishrn=function(u,E,I){return n(this.negative===0),this.iushrn(u,E,I)},s.prototype.shln=function(u){return this.clone().ishln(u)},s.prototype.ushln=function(u){return this.clone().iushln(u)},s.prototype.shrn=function(u){return this.clone().ishrn(u)},s.prototype.ushrn=function(u){return this.clone().iushrn(u)},s.prototype.testn=function(u){n(typeof u=="number"&&u>=0);var E=u%26,I=(u-E)/26,D=1<<E;if(this.length<=I)return!1;var k=this.words[I];return!!(k&D)},s.prototype.imaskn=function(u){n(typeof u=="number"&&u>=0);var E=u%26,I=(u-E)/26;if(n(this.negative===0,"imaskn works only with positive numbers"),this.length<=I)return this;if(E!==0&&I++,this.length=Math.min(I,this.length),E!==0){var D=67108863^67108863>>>E<<E;this.words[this.length-1]&=D}return this.length===0&&(this.words[0]=0,this.length=1),this.strip()},s.prototype.maskn=function(u){return this.clone().imaskn(u)},s.prototype.iaddn=function(u){return n(typeof u=="number"),n(u<67108864),u<0?this.isubn(-u):this.negative!==0?this.length===1&&(this.words[0]|0)<u?(this.words[0]=u-(this.words[0]|0),this.negative=0,this):(this.negative=0,this.isubn(u),this.negative=1,this):this._iaddn(u)},s.prototype._iaddn=function(u){this.words[0]+=u;for(var E=0;E<this.length&&this.words[E]>=67108864;E++)this.words[E]-=67108864,E===this.length-1?this.words[E+1]=1:this.words[E+1]++;return this.length=Math.max(this.length,E+1),this},s.prototype.isubn=function(u){if(n(typeof u=="number"),n(u<67108864),u<0)return this.iaddn(-u);if(this.negative!==0)return this.negative=0,this.iaddn(u),this.negative=1,this;if(this.words[0]-=u,this.length===1&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1;else for(var E=0;E<this.length&&this.words[E]<0;E++)this.words[E]+=67108864,this.words[E+1]-=1;return this.strip()},s.prototype.addn=function(u){return this.clone().iaddn(u)},s.prototype.subn=function(u){return this.clone().isubn(u)},s.prototype.iabs=function(){return this.negative=0,this},s.prototype.abs=function(){return this.clone().iabs()},s.prototype._ishlnsubmul=function(u,E,I){var D=u.length+I,k;this._expand(D);var z,G=0;for(k=0;k<u.length;k++){z=(this.words[k+I]|0)+G;var O=(u.words[k]|0)*E;z-=O&67108863,G=(z>>26)-(O/67108864|0),this.words[k+I]=z&67108863}for(;k<this.length-I;k++)z=(this.words[k+I]|0)+G,G=z>>26,this.words[k+I]=z&67108863;if(G===0)return this.strip();for(n(G===-1),G=0,k=0;k<this.length;k++)z=-(this.words[k]|0)+G,G=z>>26,this.words[k]=z&67108863;return this.negative=1,this.strip()},s.prototype._wordDiv=function(u,E){var I=this.length-u.length,D=this.clone(),k=u,z=k.words[k.length-1]|0,G=this._countBits(z);I=26-G,I!==0&&(k=k.ushln(I),D.iushln(I),z=k.words[k.length-1]|0);var O=D.length-k.length,x;if(E!=="mod"){x=new s(null),x.length=O+1,x.words=new Array(x.length);for(var B=0;B<x.length;B++)x.words[B]=0}var J=D.clone()._ishlnsubmul(k,1,O);J.negative===0&&(D=J,x&&(x.words[O]=1));for(var j=O-1;j>=0;j--){var ie=(D.words[k.length+j]|0)*67108864+(D.words[k.length+j-1]|0);for(ie=Math.min(ie/z|0,67108863),D._ishlnsubmul(k,ie,j);D.negative!==0;)ie--,D.negative=0,D._ishlnsubmul(k,1,j),D.isZero()||(D.negative^=1);x&&(x.words[j]=ie)}return x&&x.strip(),D.strip(),E!=="div"&&I!==0&&D.iushrn(I),{div:x||null,mod:D}},s.prototype.divmod=function(u,E,I){if(n(!u.isZero()),this.isZero())return{div:new s(0),mod:new s(0)};var D,k,z;return this.negative!==0&&u.negative===0?(z=this.neg().divmod(u,E),E!=="mod"&&(D=z.div.neg()),E!=="div"&&(k=z.mod.neg(),I&&k.negative!==0&&k.iadd(u)),{div:D,mod:k}):this.negative===0&&u.negative!==0?(z=this.divmod(u.neg(),E),E!=="mod"&&(D=z.div.neg()),{div:D,mod:z.mod}):(this.negative&u.negative)!==0?(z=this.neg().divmod(u.neg(),E),E!=="div"&&(k=z.mod.neg(),I&&k.negative!==0&&k.isub(u)),{div:z.div,mod:k}):u.length>this.length||this.cmp(u)<0?{div:new s(0),mod:this}:u.length===1?E==="div"?{div:this.divn(u.words[0]),mod:null}:E==="mod"?{div:null,mod:new s(this.modn(u.words[0]))}:{div:this.divn(u.words[0]),mod:new s(this.modn(u.words[0]))}:this._wordDiv(u,E)},s.prototype.div=function(u){return this.divmod(u,"div",!1).div},s.prototype.mod=function(u){return this.divmod(u,"mod",!1).mod},s.prototype.umod=function(u){return this.divmod(u,"mod",!0).mod},s.prototype.divRound=function(u){var E=this.divmod(u);if(E.mod.isZero())return E.div;var I=E.mod.abs(),D=u.abs().iushrn(1),k=u.words[0]&1,z=I.cmp(D);if(z<0||k===1&&z===0)return E.div;var G=new s(1);return G.negative=this.negative^u.negative,E.div.iadd(G)},s.prototype.modn=function(u){n(u<=67108863);for(var E=(1<<26)%u,I=0,D=this.length-1;D>=0;D--)I=(E*I+(this.words[D]|0))%u;return I},s.prototype.idivn=function(u){n(u<=67108863);for(var E=0,I=this.length-1;I>=0;I--){var D=(this.words[I]|0)+E*67108864;this.words[I]=D/u|0,E=D%u}return this.strip()},s.prototype.divn=function(u){return this.clone().idivn(u)},s.prototype.egcd=function(u){n(u.negative===0),n(!u.isZero());var E=this,I=u.clone();E.negative!==0?E=E.umod(u):E=E.clone();for(var D=new s(1),k=new s(0),z=new s(0),G=new s(1),O=0;E.isEven()&&I.isEven();)E.iushrn(1),I.iushrn(1),++O;for(var x=I.clone(),B=E.clone();!E.isZero();){for(var J=0,j=1;(E.words[0]&j)===0&&J<26;++J,j<<=1);if(J>0)for(E.iushrn(J);J-- >0;)(D.isOdd()||k.isOdd())&&(D.iadd(x),k.isub(B)),D.iushrn(1),k.iushrn(1);for(var ie=0,ue=1;(I.words[0]&ue)===0&&ie<26;++ie,ue<<=1);if(ie>0)for(I.iushrn(ie);ie-- >0;)(z.isOdd()||G.isOdd())&&(z.iadd(x),G.isub(B)),z.iushrn(1),G.iushrn(1);E.cmp(I)>=0?(E.isub(I),D.isub(z),k.isub(G)):(I.isub(E),z.isub(D),G.isub(k))}return{a:z,b:G,gcd:I.iushln(O)}},s.prototype._invmp=function(u){n(u.negative===0),n(!u.isZero());var E=this,I=u.clone();E.negative!==0?E=E.umod(u):E=E.clone();for(var D=new s(1),k=new s(0),z=I.clone();E.cmpn(1)>0&&I.cmpn(1)>0;){for(var G=0,O=1;(E.words[0]&O)===0&&G<26;++G,O<<=1);if(G>0)for(E.iushrn(G);G-- >0;)D.isOdd()&&D.iadd(z),D.iushrn(1);for(var x=0,B=1;(I.words[0]&B)===0&&x<26;++x,B<<=1);if(x>0)for(I.iushrn(x);x-- >0;)k.isOdd()&&k.iadd(z),k.iushrn(1);E.cmp(I)>=0?(E.isub(I),D.isub(k)):(I.isub(E),k.isub(D))}var J;return E.cmpn(1)===0?J=D:J=k,J.cmpn(0)<0&&J.iadd(u),J},s.prototype.gcd=function(u){if(this.isZero())return u.abs();if(u.isZero())return this.abs();var E=this.clone(),I=u.clone();E.negative=0,I.negative=0;for(var D=0;E.isEven()&&I.isEven();D++)E.iushrn(1),I.iushrn(1);do{for(;E.isEven();)E.iushrn(1);for(;I.isEven();)I.iushrn(1);var k=E.cmp(I);if(k<0){var z=E;E=I,I=z}else if(k===0||I.cmpn(1)===0)break;E.isub(I)}while(!0);return I.iushln(D)},s.prototype.invm=function(u){return this.egcd(u).a.umod(u)},s.prototype.isEven=function(){return(this.words[0]&1)===0},s.prototype.isOdd=function(){return(this.words[0]&1)===1},s.prototype.andln=function(u){return this.words[0]&u},s.prototype.bincn=function(u){n(typeof u=="number");var E=u%26,I=(u-E)/26,D=1<<E;if(this.length<=I)return this._expand(I+1),this.words[I]|=D,this;for(var k=D,z=I;k!==0&&z<this.length;z++){var G=this.words[z]|0;G+=k,k=G>>>26,G&=67108863,this.words[z]=G}return k!==0&&(this.words[z]=k,this.length++),this},s.prototype.isZero=function(){return this.length===1&&this.words[0]===0},s.prototype.cmpn=function(u){var E=u<0;if(this.negative!==0&&!E)return-1;if(this.negative===0&&E)return 1;this.strip();var I;if(this.length>1)I=1;else{E&&(u=-u),n(u<=67108863,"Number is too big");var D=this.words[0]|0;I=D===u?0:D<u?-1:1}return this.negative!==0?-I|0:I},s.prototype.cmp=function(u){if(this.negative!==0&&u.negative===0)return-1;if(this.negative===0&&u.negative!==0)return 1;var E=this.ucmp(u);return this.negative!==0?-E|0:E},s.prototype.ucmp=function(u){if(this.length>u.length)return 1;if(this.length<u.length)return-1;for(var E=0,I=this.length-1;I>=0;I--){var D=this.words[I]|0,k=u.words[I]|0;if(D!==k){D<k?E=-1:D>k&&(E=1);break}}return E},s.prototype.gtn=function(u){return this.cmpn(u)===1},s.prototype.gt=function(u){return this.cmp(u)===1},s.prototype.gten=function(u){return this.cmpn(u)>=0},s.prototype.gte=function(u){return this.cmp(u)>=0},s.prototype.ltn=function(u){return this.cmpn(u)===-1},s.prototype.lt=function(u){return this.cmp(u)===-1},s.prototype.lten=function(u){return this.cmpn(u)<=0},s.prototype.lte=function(u){return this.cmp(u)<=0},s.prototype.eqn=function(u){return this.cmpn(u)===0},s.prototype.eq=function(u){return this.cmp(u)===0},s.red=function(u){return new b(u)},s.prototype.toRed=function(u){return n(!this.red,"Already a number in reduction context"),n(this.negative===0,"red works only with positives"),u.convertTo(this)._forceRed(u)},s.prototype.fromRed=function(){return n(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},s.prototype._forceRed=function(u){return this.red=u,this},s.prototype.forceRed=function(u){return n(!this.red,"Already a number in reduction context"),this._forceRed(u)},s.prototype.redAdd=function(u){return n(this.red,"redAdd works only with red numbers"),this.red.add(this,u)},s.prototype.redIAdd=function(u){return n(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,u)},s.prototype.redSub=function(u){return n(this.red,"redSub works only with red numbers"),this.red.sub(this,u)},s.prototype.redISub=function(u){return n(this.red,"redISub works only with red numbers"),this.red.isub(this,u)},s.prototype.redShl=function(u){return n(this.red,"redShl works only with red numbers"),this.red.shl(this,u)},s.prototype.redMul=function(u){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,u),this.red.mul(this,u)},s.prototype.redIMul=function(u){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,u),this.red.imul(this,u)},s.prototype.redSqr=function(){return n(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},s.prototype.redISqr=function(){return n(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},s.prototype.redSqrt=function(){return n(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},s.prototype.redInvm=function(){return n(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},s.prototype.redNeg=function(){return n(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},s.prototype.redPow=function(u){return n(this.red&&!u.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,u)};var f={k256:null,p224:null,p192:null,p25519:null};function S(_,u){this.name=_,this.p=new s(u,16),this.n=this.p.bitLength(),this.k=new s(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}S.prototype._tmp=function(){var u=new s(null);return u.words=new Array(Math.ceil(this.n/13)),u},S.prototype.ireduce=function(u){var E=u,I;do this.split(E,this.tmp),E=this.imulK(E),E=E.iadd(this.tmp),I=E.bitLength();while(I>this.n);var D=I<this.n?-1:E.ucmp(this.p);return D===0?(E.words[0]=0,E.length=1):D>0?E.isub(this.p):E.strip!==void 0?E.strip():E._strip(),E},S.prototype.split=function(u,E){u.iushrn(this.n,0,E)},S.prototype.imulK=function(u){return u.imul(this.k)};function l(){S.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}r(l,S),l.prototype.split=function(u,E){for(var I=4194303,D=Math.min(u.length,9),k=0;k<D;k++)E.words[k]=u.words[k];if(E.length=D,u.length<=9){u.words[0]=0,u.length=1;return}var z=u.words[9];for(E.words[E.length++]=z&I,k=10;k<u.length;k++){var G=u.words[k]|0;u.words[k-10]=(G&I)<<4|z>>>22,z=G}z>>>=22,u.words[k-10]=z,z===0&&u.length>10?u.length-=10:u.length-=9},l.prototype.imulK=function(u){u.words[u.length]=0,u.words[u.length+1]=0,u.length+=2;for(var E=0,I=0;I<u.length;I++){var D=u.words[I]|0;E+=D*977,u.words[I]=E&67108863,E=D*64+(E/67108864|0)}return u.words[u.length-1]===0&&(u.length--,u.words[u.length-1]===0&&u.length--),u};function L(){S.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}r(L,S);function U(){S.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}r(U,S);function M(){S.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}r(M,S),M.prototype.imulK=function(u){for(var E=0,I=0;I<u.length;I++){var D=(u.words[I]|0)*19+E,k=D&67108863;D>>>=26,u.words[I]=k,E=D}return E!==0&&(u.words[u.length++]=E),u},s._prime=function(u){if(f[u])return f[u];var E;if(u==="k256")E=new l;else if(u==="p224")E=new L;else if(u==="p192")E=new U;else if(u==="p25519")E=new M;else throw new Error("Unknown prime "+u);return f[u]=E,E};function b(_){if(typeof _=="string"){var u=s._prime(_);this.m=u.p,this.prime=u}else n(_.gtn(1),"modulus must be greater than 1"),this.m=_,this.prime=null}b.prototype._verify1=function(u){n(u.negative===0,"red works only with positives"),n(u.red,"red works only with red numbers")},b.prototype._verify2=function(u,E){n((u.negative|E.negative)===0,"red works only with positives"),n(u.red&&u.red===E.red,"red works only with red numbers")},b.prototype.imod=function(u){return this.prime?this.prime.ireduce(u)._forceRed(this):u.umod(this.m)._forceRed(this)},b.prototype.neg=function(u){return u.isZero()?u.clone():this.m.sub(u)._forceRed(this)},b.prototype.add=function(u,E){this._verify2(u,E);var I=u.add(E);return I.cmp(this.m)>=0&&I.isub(this.m),I._forceRed(this)},b.prototype.iadd=function(u,E){this._verify2(u,E);var I=u.iadd(E);return I.cmp(this.m)>=0&&I.isub(this.m),I},b.prototype.sub=function(u,E){this._verify2(u,E);var I=u.sub(E);return I.cmpn(0)<0&&I.iadd(this.m),I._forceRed(this)},b.prototype.isub=function(u,E){this._verify2(u,E);var I=u.isub(E);return I.cmpn(0)<0&&I.iadd(this.m),I},b.prototype.shl=function(u,E){return this._verify1(u),this.imod(u.ushln(E))},b.prototype.imul=function(u,E){return this._verify2(u,E),this.imod(u.imul(E))},b.prototype.mul=function(u,E){return this._verify2(u,E),this.imod(u.mul(E))},b.prototype.isqr=function(u){return this.imul(u,u.clone())},b.prototype.sqr=function(u){return this.mul(u,u)},b.prototype.sqrt=function(u){if(u.isZero())return u.clone();var E=this.m.andln(3);if(n(E%2===1),E===3){var I=this.m.add(new s(1)).iushrn(2);return this.pow(u,I)}for(var D=this.m.subn(1),k=0;!D.isZero()&&D.andln(1)===0;)k++,D.iushrn(1);n(!D.isZero());var z=new s(1).toRed(this),G=z.redNeg(),O=this.m.subn(1).iushrn(1),x=this.m.bitLength();for(x=new s(2*x*x).toRed(this);this.pow(x,O).cmp(G)!==0;)x.redIAdd(G);for(var B=this.pow(x,D),J=this.pow(u,D.addn(1).iushrn(1)),j=this.pow(u,D),ie=k;j.cmp(z)!==0;){for(var ue=j,fe=0;ue.cmp(z)!==0;fe++)ue=ue.redSqr();n(fe<ie);var K=this.pow(B,new s(1).iushln(ie-fe-1));J=J.redMul(K),B=K.redSqr(),j=j.redMul(B),ie=fe}return J},b.prototype.invm=function(u){var E=u._invmp(this.m);return E.negative!==0?(E.negative=0,this.imod(E).redNeg()):this.imod(E)},b.prototype.pow=function(u,E){if(E.isZero())return new s(1).toRed(this);if(E.cmpn(1)===0)return u.clone();var I=4,D=new Array(1<<I);D[0]=new s(1).toRed(this),D[1]=u;for(var k=2;k<D.length;k++)D[k]=this.mul(D[k-1],u);var z=D[0],G=0,O=0,x=E.bitLength()%26;for(x===0&&(x=26),k=E.length-1;k>=0;k--){for(var B=E.words[k],J=x-1;J>=0;J--){var j=B>>J&1;if(z!==D[0]&&(z=this.sqr(z)),j===0&&G===0){O=0;continue}G<<=1,G|=j,O++,!(O!==I&&(k!==0||J!==0))&&(z=this.mul(z,D[G]),O=0,G=0)}x=26}return z},b.prototype.convertTo=function(u){var E=u.umod(this.m);return E===u?E.clone():E},b.prototype.convertFrom=function(u){var E=u.clone();return E.red=null,E},s.mont=function(u){return new P(u)};function P(_){b.call(this,_),this.shift=this.m.bitLength(),this.shift%26!==0&&(this.shift+=26-this.shift%26),this.r=new s(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}r(P,b),P.prototype.convertTo=function(u){return this.imod(u.ushln(this.shift))},P.prototype.convertFrom=function(u){var E=this.imod(u.mul(this.rinv));return E.red=null,E},P.prototype.imul=function(u,E){if(u.isZero()||E.isZero())return u.words[0]=0,u.length=1,u;var I=u.imul(E),D=I.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),k=I.isub(D).iushrn(this.shift),z=k;return k.cmp(this.m)>=0?z=k.isub(this.m):k.cmpn(0)<0&&(z=k.iadd(this.m)),z._forceRed(this)},P.prototype.mul=function(u,E){if(u.isZero()||E.isZero())return new s(0)._forceRed(this);var I=u.mul(E),D=I.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),k=I.isub(D).iushrn(this.shift),z=k;return k.cmp(this.m)>=0?z=k.isub(this.m):k.cmpn(0)<0&&(z=k.iadd(this.m)),z._forceRed(this)},P.prototype.invm=function(u){var E=this.imod(u._invmp(this.m).mul(this.r2));return E._forceRed(this)}})(i,Mv)})(Ka)),Ka.exports}var al,Nf;function h0(){if(Nf)return al;Nf=1,Ao(),al=i;function i(e){return e&&typeof e=="object"&&!!e.words}return al}var ol,Ff;function wv(){if(Ff)return ol;Ff=1;var i=h0();ol=e;function e(t){return Array.isArray(t)&&t.length===2&&i(t[0])&&i(t[1])}return ol}var Ja={exports:{}};Ja.exports;var Bf;function kc(){return Bf||(Bf=1,(function(i){var e=!1;if(typeof Float64Array<"u"){var t=new Float64Array(1),n=new Uint32Array(t.buffer);if(t[0]=1,e=!0,n[1]===1072693248){let s=function(h,c){return n[0]=h,n[1]=c,t[0]},a=function(h){return t[0]=h,n[0]},o=function(h){return t[0]=h,n[1]};i.exports=function(c){return t[0]=c,[n[0],n[1]]},i.exports.pack=s,i.exports.lo=a,i.exports.hi=o}else if(n[0]===1072693248){let s=function(h,c){return n[1]=h,n[0]=c,t[0]},a=function(h){return t[0]=h,n[1]},o=function(h){return t[0]=h,n[0]};i.exports=function(c){return t[0]=c,[n[1],n[0]]},i.exports.pack=s,i.exports.lo=a,i.exports.hi=o}else e=!1}if(!e){let s=function(h,c){return r.writeUInt32LE(h,0,!0),r.writeUInt32LE(c,4,!0),r.readDoubleLE(0,!0)},a=function(h){return r.writeDoubleLE(h,0,!0),r.readUInt32LE(0,!0)},o=function(h){return r.writeDoubleLE(h,0,!0),r.readUInt32LE(4,!0)};var r=new Buffer(8);i.exports=function(c){return r.writeDoubleLE(c,0,!0),[r.readUInt32LE(0,!0),r.readUInt32LE(4,!0)]},i.exports.pack=s,i.exports.lo=a,i.exports.hi=o}i.exports.sign=function(s){return i.exports.hi(s)>>>31},i.exports.exponent=function(s){var a=i.exports.hi(s);return(a<<1>>>21)-1023},i.exports.fraction=function(s){var a=i.exports.lo(s),o=i.exports.hi(s),h=o&(1<<20)-1;return o&2146435072&&(h+=1<<20),[a,h]},i.exports.denormalized=function(s){var a=i.exports.hi(s);return!(a&2146435072)}})(Ja)),Ja.exports}var ll,Of;function c0(){if(Of)return ll;Of=1;var i=Ao(),e=kc();ll=t;function t(n){var r=e.exponent(n);return r<52?new i(n):new i(n*Math.pow(2,52-r)).ushln(r-52)}return ll}var hl,kf;function Sv(){if(kf)return hl;kf=1;var i=Ao();hl=e;function e(t){return new i(t)}return hl}var cl,zf;function zc(){if(zf)return cl;zf=1;var i=Ao();cl=e;function e(t){return t.cmp(new i(0))}return cl}var ul,Vf;function na(){if(Vf)return ul;Vf=1;var i=c0(),e=zc();ul=t;function t(n,r){var s=e(n),a=e(r);if(s===0)return[i(0),i(1)];if(a===0)return[i(0),i(0)];a<0&&(n=n.neg(),r=r.neg());var o=n.gcd(r);return o.cmpn(1)?[n.div(o),r.div(o)]:[n,r]}return ul}var fl,Gf;function u0(){if(Gf)return fl;Gf=1;var i=na();fl=e;function e(t,n){return i(t[0].mul(n[1]),t[1].mul(n[0]))}return fl}var dl,Hf;function Vc(){if(Hf)return dl;Hf=1;var i=wv(),e=h0(),t=c0(),n=Sv(),r=na(),s=u0();dl=a;function a(o,h){if(i(o))return h?s(o,a(h)):[o[0].clone(),o[1].clone()];var c=0,d,p;if(e(o))d=o.clone();else if(typeof o=="string")d=n(o);else{if(o===0)return[t(0),t(1)];if(o===Math.floor(o))d=t(o);else{for(;o!==Math.floor(o);)o=o*Math.pow(2,256),c-=256;d=t(o)}}if(i(h))d.mul(h[1]),p=h[0].clone();else if(e(h))p=h.clone();else if(typeof h=="string")p=n(h);else if(!h)p=t(1);else if(h===Math.floor(h))p=t(h);else{for(;h!==Math.floor(h);)h=h*Math.pow(2,256),c+=256;p=t(h)}return c>0?d=d.ushln(c):c<0&&(p=p.ushln(-c)),r(d,p)}return dl}var pl,Wf;function xv(){if(Wf)return pl;Wf=1,pl=i;function i(e,t){return e[0].mul(t[1]).cmp(t[0].mul(e[1]))}return pl}var ml,Xf;function bv(){if(Xf)return ml;Xf=1;var i=zc();ml=e;function e(t){var n=t.length,r=t.words,s=0;if(n===1)s=r[0];else if(n===2)s=r[0]+r[1]*67108864;else for(var a=0;a<n;a++){var o=r[a];s+=o*Math.pow(67108864,a)}return i(t)*s}return ml}var gl,qf;function Ev(){if(qf)return gl;qf=1;var i=kc(),e=To().countTrailingZeros;gl=t;function t(n){var r=e(i.lo(n));if(r<32)return r;var s=e(i.hi(n));return s>20?52:s+32}return gl}var vl,$f;function Tv(){if($f)return vl;$f=1;var i=bv(),e=Ev();vl=t;function t(n){var r=n[0],s=n[1];if(r.cmpn(0)===0)return 0;var a=r.abs().divmod(s.abs()),o=a.div,h=i(o),c=a.mod,d=r.negative!==s.negative?-1:1;if(c.cmpn(0)===0)return d*h;if(h){var p=e(h)+4,g=i(c.ushln(p).divRound(s));return d*(h+g*Math.pow(2,-p))}else{var w=s.bitLength()-c.bitLength()+53,g=i(c.ushln(w).divRound(s));return w<1023?d*g*Math.pow(2,-w):(g*=Math.pow(2,-1023),d*g*Math.pow(2,1023-w))}}return vl}var _l,Yf;function Av(){if(Yf)return _l;Yf=1,_l=e;var i=Vc();function e(t){for(var n=new Array(t.length),r=0;r<t.length;++r)n[r]=i(t[r]);return n}return _l}var yl,Zf;function Rv(){if(Zf)return yl;Zf=1;var i=kc(),e=Math.pow(2,-1074),t=-1>>>0;yl=n;function n(r,s){if(isNaN(r)||isNaN(s))return NaN;if(r===s)return r;if(r===0)return s<0?-e:e;var a=i.hi(r),o=i.lo(r);return s>r==r>0?o===t?(a+=1,o=0):o+=1:o===0?(o=t,a-=1):o-=1,i.pack(o,a)}return yl}var Ml,Kf;function f0(){if(Kf)return Ml;Kf=1;var i=na();Ml=e;function e(t,n){return i(t[0].mul(n[0]),t[1].mul(n[1]))}return Ml}var wl,Jf;function d0(){if(Jf)return wl;Jf=1;var i=na();wl=e;function e(t,n){return i(t[0].mul(n[1]).sub(t[1].mul(n[0])),t[1].mul(n[1]))}return wl}var Sl,Qf;function Cv(){if(Qf)return Sl;Qf=1;var i=zc();Sl=e;function e(t){return i(t[0])*i(t[1])}return Sl}var xl,jf;function Iv(){if(jf)return xl;jf=1;var i=d0();xl=e;function e(t,n){for(var r=t.length,s=new Array(r),a=0;a<r;++a)s[a]=i(t[a],n[a]);return s}return xl}var bl,ed;function Pv(){if(ed)return bl;ed=1;var i=na();bl=e;function e(t,n){return i(t[0].mul(n[1]).add(n[0].mul(t[1])),t[1].mul(n[1]))}return bl}var El,td;function Lv(){if(td)return El;td=1;var i=Pv();El=e;function e(t,n){for(var r=t.length,s=new Array(r),a=0;a<r;++a)s[a]=i(t[a],n[a]);return s}return El}var Tl,nd;function Uv(){if(nd)return Tl;nd=1;var i=Vc(),e=f0();Tl=t;function t(n,r){for(var s=i(r),a=n.length,o=new Array(a),h=0;h<a;++h)o[h]=e(n[h],s);return o}return Tl}var Al,id;function Dv(){if(id)return Al;id=1,Al=h;var i=f0(),e=u0(),t=d0(),n=Cv(),r=Iv(),s=Lv(),a=Uv();function o(c,d){return t(i(c[0],d[1]),i(c[1],d[0]))}function h(c,d,p,g){var w=r(d,c),T=r(g,p),N=o(w,T);if(n(N)===0)return null;var C=r(c,p),R=o(T,C),m=e(R,N),f=a(w,m),S=s(c,f);return S}return Al}var Rl,rd;function Nv(){if(rd)return Rl;rd=1,Rl=l;var i=hv(),e=vv(),t=yv(),n=Vc(),r=xv(),s=Tv(),a=Av(),o=Rv(),h=Dv();function c(L){var U=s(L);return[o(U,-1/0),o(U,1/0)]}function d(L,U){for(var M=new Array(U.length),b=0;b<U.length;++b){var P=U[b],_=L[P[0]],u=L[P[1]];M[b]=[o(Math.min(_[0],u[0]),-1/0),o(Math.min(_[1],u[1]),-1/0),o(Math.max(_[0],u[0]),1/0),o(Math.max(_[1],u[1]),1/0)]}return M}function p(L){for(var U=new Array(L.length),M=0;M<L.length;++M){var b=L[M];U[M]=[o(b[0],-1/0),o(b[1],-1/0),o(b[0],1/0),o(b[1],1/0)]}return U}function g(L,U,M){var b=[];return e(M,function(P,_){var u=U[P],E=U[_];if(!(u[0]===E[0]||u[0]===E[1]||u[1]===E[0]||u[1]===E[1])){var I=L[u[0]],D=L[u[1]],k=L[E[0]],z=L[E[1]];t(I,D,k,z)&&b.push([P,_])}}),b}function w(L,U,M,b){var P=[];return e(M,b,function(_,u){var E=U[_];if(!(E[0]===u||E[1]===u)){var I=L[u],D=L[E[0]],k=L[E[1]];t(D,k,I,I)&&P.push([_,u])}}),P}function T(L,U,M,b,P){var _,u,E=L.map(function(le){return[n(le[0]),n(le[1])]});for(_=0;_<M.length;++_){var I=M[_];u=I[0];var D=I[1],k=U[u],z=U[D],G=h(a(L[k[0]]),a(L[k[1]]),a(L[z[0]]),a(L[z[1]]));if(G){var O=L.length;L.push([s(G[0]),s(G[1])]),E.push(G),b.push([u,O],[D,O])}}for(b.sort(function(le,xe){if(le[0]!==xe[0])return le[0]-xe[0];var ve=E[le[1]],ge=E[xe[1]];return r(ve[0],ge[0])||r(ve[1],ge[1])}),_=b.length-1;_>=0;--_){var x=b[_];u=x[0];var B=U[u],J=B[0],j=B[1],ie=L[J],ue=L[j];if((ie[0]-ue[0]||ie[1]-ue[1])<0){var fe=J;J=j,j=fe}B[0]=J;var K=B[1]=x[1],ne;for(P&&(ne=B[2]);_>0&&b[_-1][0]===u;){var x=b[--_],ae=x[1];P?U.push([K,ae,ne]):U.push([K,ae]),K=ae}P?U.push([K,j,ne]):U.push([K,j])}return E}function N(L,U,M){for(var b=U.length,P=new i(b),_=[],u=0;u<U.length;++u){var E=U[u],I=c(E[0]),D=c(E[1]);_.push([o(I[0],-1/0),o(D[0],-1/0),o(I[1],1/0),o(D[1],1/0)])}e(_,function(x,B){P.link(x,B)});for(var k=!0,z=new Array(b),u=0;u<b;++u){var G=P.find(u);G!==u&&(k=!1,L[G]=[Math.min(L[u][0],L[G][0]),Math.min(L[u][1],L[G][1])])}if(k)return null;for(var O=0,u=0;u<b;++u){var G=P.find(u);G===u?(z[u]=O,L[O++]=L[u]):z[u]=-1}L.length=O;for(var u=0;u<b;++u)z[u]<0&&(z[u]=z[P.find(u)]);return z}function C(L,U){return L[0]-U[0]||L[1]-U[1]}function R(L,U){var M=L[0]-U[0]||L[1]-U[1];return M||(L[2]<U[2]?-1:L[2]>U[2]?1:0)}function m(L,U,M){if(L.length!==0){if(U)for(var b=0;b<L.length;++b){var P=L[b],_=U[P[0]],u=U[P[1]];P[0]=Math.min(_,u),P[1]=Math.max(_,u)}else for(var b=0;b<L.length;++b){var P=L[b],_=P[0],u=P[1];P[0]=Math.min(_,u),P[1]=Math.max(_,u)}M?L.sort(R):L.sort(C);for(var E=1,b=1;b<L.length;++b){var I=L[b-1],D=L[b];D[0]===I[0]&&D[1]===I[1]&&(!M||D[2]===I[2])||(L[E++]=D)}L.length=E}}function f(L,U,M){var b=N(L,[],p(L));return m(U,b,M),!!b}function S(L,U,M){var b=d(L,U),P=g(L,U,b),_=p(L),u=w(L,U,b,_),E=T(L,U,P,u,M),I=N(L,E);return m(U,I,M),I?!0:P.length>0||u.length>0}function l(L,U,M){var b;if(M){b=U;for(var P=new Array(U.length),_=0;_<U.length;++_){var u=U[_];P[_]=[u[0],u[1],M[_]]}U=P}for(var E=f(L,U,!!M);S(L,U,!!M);)E=!0;if(M&&E){b.length=0,M.length=0;for(var _=0;_<U.length;++_){var u=U[_];b.push([u[0],u[1]]),M.push(u[2])}}return E}return Rl}Nv();var Cl,sd;function Ro(){if(sd)return Cl;sd=1;function i(a,o,h,c,d){for(var p=d+1;c<=d;){var g=c+d>>>1,w=a[g],T=h!==void 0?h(w,o):w-o;T>=0?(p=g,d=g-1):c=g+1}return p}function e(a,o,h,c,d){for(var p=d+1;c<=d;){var g=c+d>>>1,w=a[g],T=h!==void 0?h(w,o):w-o;T>0?(p=g,d=g-1):c=g+1}return p}function t(a,o,h,c,d){for(var p=c-1;c<=d;){var g=c+d>>>1,w=a[g],T=h!==void 0?h(w,o):w-o;T<0?(p=g,c=g+1):d=g-1}return p}function n(a,o,h,c,d){for(var p=c-1;c<=d;){var g=c+d>>>1,w=a[g],T=h!==void 0?h(w,o):w-o;T<=0?(p=g,c=g+1):d=g-1}return p}function r(a,o,h,c,d){for(;c<=d;){var p=c+d>>>1,g=a[p],w=h!==void 0?h(g,o):g-o;if(w===0)return p;w<=0?c=p+1:d=p-1}return-1}function s(a,o,h,c,d,p){return typeof h=="function"?p(a,o,h,c===void 0?0:c|0,d===void 0?a.length-1:d|0):p(a,o,void 0,h===void 0?0:h|0,c===void 0?a.length-1:c|0)}return Cl={ge:function(a,o,h,c,d){return s(a,o,h,c,d,i)},gt:function(a,o,h,c,d){return s(a,o,h,c,d,e)},lt:function(a,o,h,c,d){return s(a,o,h,c,d,t)},le:function(a,o,h,c,d){return s(a,o,h,c,d,n)},eq:function(a,o,h,c,d){return s(a,o,h,c,d,r)}},Cl}var Il,ad;function Fv(){if(ad)return Il;ad=1;var i=Ro(),e=l0()[3],t=0,n=1,r=2;Il=w;function s(T,N,C,R,m){this.a=T,this.b=N,this.idx=C,this.lowerIds=R,this.upperIds=m}function a(T,N,C,R){this.a=T,this.b=N,this.type=C,this.idx=R}function o(T,N){var C=T.a[0]-N.a[0]||T.a[1]-N.a[1]||T.type-N.type;return C||T.type!==t&&(C=e(T.a,T.b,N.b),C)?C:T.idx-N.idx}function h(T,N){return e(T.a,T.b,N)}function c(T,N,C,R,m){for(var f=i.lt(N,R,h),S=i.gt(N,R,h),l=f;l<S;++l){for(var L=N[l],U=L.lowerIds,b=U.length;b>1&&e(C[U[b-2]],C[U[b-1]],R)>0;)T.push([U[b-1],U[b-2],m]),b-=1;U.length=b,U.push(m);for(var M=L.upperIds,b=M.length;b>1&&e(C[M[b-2]],C[M[b-1]],R)<0;)T.push([M[b-2],M[b-1],m]),b-=1;M.length=b,M.push(m)}}function d(T,N){var C;return T.a[0]<N.a[0]?C=e(T.a,T.b,N.a):C=e(N.b,N.a,T.a),C||(N.b[0]<T.b[0]?C=e(T.a,T.b,N.b):C=e(N.b,N.a,T.b),C||T.idx-N.idx)}function p(T,N,C){var R=i.le(T,C,d),m=T[R],f=m.upperIds,S=f[f.length-1];m.upperIds=[S],T.splice(R+1,0,new s(C.a,C.b,C.idx,[S],f))}function g(T,N,C){var R=C.a;C.a=C.b,C.b=R;var m=i.eq(T,C,d),f=T[m],S=T[m-1];S.upperIds=f.upperIds,T.splice(m,1)}function w(T,N){for(var C=T.length,R=N.length,m=[],f=0;f<C;++f)m.push(new a(T[f],null,t,f));for(var f=0;f<R;++f){var S=N[f],l=T[S[0]],L=T[S[1]];l[0]<L[0]?m.push(new a(l,L,r,f),new a(L,l,n,f)):l[0]>L[0]&&m.push(new a(L,l,r,f),new a(l,L,n,f))}m.sort(o);for(var U=m[0].a[0]-(1+Math.abs(m[0].a[0]))*Math.pow(2,-52),M=[new s([U,1],[U,0],-1,[],[])],b=[],f=0,P=m.length;f<P;++f){var _=m[f],u=_.type;u===t?c(b,M,T,_.a,_.idx):u===r?p(M,T,_):g(M,T,_)}return b}return Il}var Pl,od;function Bv(){if(od)return Pl;od=1;var i=Ro();Pl=r;function e(s,a){this.stars=s,this.edges=a}var t=e.prototype;function n(s,a,o){for(var h=1,c=s.length;h<c;h+=2)if(s[h-1]===a&&s[h]===o){s[h-1]=s[c-2],s[h]=s[c-1],s.length=c-2;return}}t.isConstraint=(function(){var s=[0,0];function a(o,h){return o[0]-h[0]||o[1]-h[1]}return function(o,h){return s[0]=Math.min(o,h),s[1]=Math.max(o,h),i.eq(this.edges,s,a)>=0}})(),t.removeTriangle=function(s,a,o){var h=this.stars;n(h[s],a,o),n(h[a],o,s),n(h[o],s,a)},t.addTriangle=function(s,a,o){var h=this.stars;h[s].push(a,o),h[a].push(o,s),h[o].push(s,a)},t.opposite=function(s,a){for(var o=this.stars[a],h=1,c=o.length;h<c;h+=2)if(o[h]===s)return o[h-1];return-1},t.flip=function(s,a){var o=this.opposite(s,a),h=this.opposite(a,s);this.removeTriangle(s,a,o),this.removeTriangle(a,s,h),this.addTriangle(s,h,o),this.addTriangle(a,o,h)},t.edges=function(){for(var s=this.stars,a=[],o=0,h=s.length;o<h;++o)for(var c=s[o],d=0,p=c.length;d<p;d+=2)a.push([c[d],c[d+1]]);return a},t.cells=function(){for(var s=this.stars,a=[],o=0,h=s.length;o<h;++o)for(var c=s[o],d=0,p=c.length;d<p;d+=2){var g=c[d],w=c[d+1];o<Math.min(g,w)&&a.push([o,g,w])}return a};function r(s,a){for(var o=new Array(s),h=0;h<s;++h)o[h]=[];return new e(o,a)}return Pl}var Ll={exports:{}},ld;function Ov(){return ld||(ld=1,(function(i){var e=Oc(),t=s0(),n=o0(),r=a0(),s=6;function a(m){var f=m===3?d:m===4?p:m===5?g:w;return f(t,n,e,r)}function o(){return 0}function h(){return 0}function c(){return 0}function d(m,f,S,l){function L(U,M,b){var P=S(U[0],U[0]),_=l(P,M[0]),u=l(P,b[0]),E=S(M[0],M[0]),I=l(E,U[0]),D=l(E,b[0]),k=S(b[0],b[0]),z=l(k,U[0]),G=l(k,M[0]),O=m(f(G,D),f(I,_)),x=f(z,u),B=f(O,x);return B[B.length-1]}return L}function p(m,f,S,l){function L(U,M,b,P){var _=m(S(U[0],U[0]),S(U[1],U[1])),u=l(_,M[0]),E=l(_,b[0]),I=l(_,P[0]),D=m(S(M[0],M[0]),S(M[1],M[1])),k=l(D,U[0]),z=l(D,b[0]),G=l(D,P[0]),O=m(S(b[0],b[0]),S(b[1],b[1])),x=l(O,U[0]),B=l(O,M[0]),J=l(O,P[0]),j=m(S(P[0],P[0]),S(P[1],P[1])),ie=l(j,U[0]),ue=l(j,M[0]),fe=l(j,b[0]),K=m(m(l(f(fe,J),M[1]),m(l(f(ue,G),-b[1]),l(f(B,z),P[1]))),m(l(f(ue,G),U[1]),m(l(f(ie,I),-M[1]),l(f(k,u),P[1])))),ne=m(m(l(f(fe,J),U[1]),m(l(f(ie,I),-b[1]),l(f(x,E),P[1]))),m(l(f(B,z),U[1]),m(l(f(x,E),-M[1]),l(f(k,u),b[1])))),ae=f(K,ne);return ae[ae.length-1]}return L}function g(m,f,S,l){function L(U,M,b,P,_){var u=m(S(U[0],U[0]),m(S(U[1],U[1]),S(U[2],U[2]))),E=l(u,M[0]),I=l(u,b[0]),D=l(u,P[0]),k=l(u,_[0]),z=m(S(M[0],M[0]),m(S(M[1],M[1]),S(M[2],M[2]))),G=l(z,U[0]),O=l(z,b[0]),x=l(z,P[0]),B=l(z,_[0]),J=m(S(b[0],b[0]),m(S(b[1],b[1]),S(b[2],b[2]))),j=l(J,U[0]),ie=l(J,M[0]),ue=l(J,P[0]),fe=l(J,_[0]),K=m(S(P[0],P[0]),m(S(P[1],P[1]),S(P[2],P[2]))),ne=l(K,U[0]),ae=l(K,M[0]),le=l(K,b[0]),xe=l(K,_[0]),ve=m(S(_[0],_[0]),m(S(_[1],_[1]),S(_[2],_[2]))),ge=l(ve,U[0]),Te=l(ve,M[0]),ye=l(ve,b[0]),Se=l(ve,P[0]),Ge=m(m(m(l(m(l(f(Se,xe),b[1]),m(l(f(ye,fe),-P[1]),l(f(le,ue),_[1]))),M[2]),m(l(m(l(f(Se,xe),M[1]),m(l(f(Te,B),-P[1]),l(f(ae,x),_[1]))),-b[2]),l(m(l(f(ye,fe),M[1]),m(l(f(Te,B),-b[1]),l(f(ie,O),_[1]))),P[2]))),m(l(m(l(f(le,ue),M[1]),m(l(f(ae,x),-b[1]),l(f(ie,O),P[1]))),-_[2]),m(l(m(l(f(Se,xe),M[1]),m(l(f(Te,B),-P[1]),l(f(ae,x),_[1]))),U[2]),l(m(l(f(Se,xe),U[1]),m(l(f(ge,k),-P[1]),l(f(ne,D),_[1]))),-M[2])))),m(m(l(m(l(f(Te,B),U[1]),m(l(f(ge,k),-M[1]),l(f(G,E),_[1]))),P[2]),m(l(m(l(f(ae,x),U[1]),m(l(f(ne,D),-M[1]),l(f(G,E),P[1]))),-_[2]),l(m(l(f(le,ue),M[1]),m(l(f(ae,x),-b[1]),l(f(ie,O),P[1]))),U[2]))),m(l(m(l(f(le,ue),U[1]),m(l(f(ne,D),-b[1]),l(f(j,I),P[1]))),-M[2]),m(l(m(l(f(ae,x),U[1]),m(l(f(ne,D),-M[1]),l(f(G,E),P[1]))),b[2]),l(m(l(f(ie,O),U[1]),m(l(f(j,I),-M[1]),l(f(G,E),b[1]))),-P[2]))))),De=m(m(m(l(m(l(f(Se,xe),b[1]),m(l(f(ye,fe),-P[1]),l(f(le,ue),_[1]))),U[2]),l(m(l(f(Se,xe),U[1]),m(l(f(ge,k),-P[1]),l(f(ne,D),_[1]))),-b[2])),m(l(m(l(f(ye,fe),U[1]),m(l(f(ge,k),-b[1]),l(f(j,I),_[1]))),P[2]),l(m(l(f(le,ue),U[1]),m(l(f(ne,D),-b[1]),l(f(j,I),P[1]))),-_[2]))),m(m(l(m(l(f(ye,fe),M[1]),m(l(f(Te,B),-b[1]),l(f(ie,O),_[1]))),U[2]),l(m(l(f(ye,fe),U[1]),m(l(f(ge,k),-b[1]),l(f(j,I),_[1]))),-M[2])),m(l(m(l(f(Te,B),U[1]),m(l(f(ge,k),-M[1]),l(f(G,E),_[1]))),b[2]),l(m(l(f(ie,O),U[1]),m(l(f(j,I),-M[1]),l(f(G,E),b[1]))),-_[2])))),He=f(Ge,De);return He[He.length-1]}return L}function w(m,f,S,l){function L(U,M,b,P,_,u){var E=m(m(S(U[0],U[0]),S(U[1],U[1])),m(S(U[2],U[2]),S(U[3],U[3]))),I=l(E,M[0]),D=l(E,b[0]),k=l(E,P[0]),z=l(E,_[0]),G=l(E,u[0]),O=m(m(S(M[0],M[0]),S(M[1],M[1])),m(S(M[2],M[2]),S(M[3],M[3]))),x=l(O,U[0]),B=l(O,b[0]),J=l(O,P[0]),j=l(O,_[0]),ie=l(O,u[0]),ue=m(m(S(b[0],b[0]),S(b[1],b[1])),m(S(b[2],b[2]),S(b[3],b[3]))),fe=l(ue,U[0]),K=l(ue,M[0]),ne=l(ue,P[0]),ae=l(ue,_[0]),le=l(ue,u[0]),xe=m(m(S(P[0],P[0]),S(P[1],P[1])),m(S(P[2],P[2]),S(P[3],P[3]))),ve=l(xe,U[0]),ge=l(xe,M[0]),Te=l(xe,b[0]),ye=l(xe,_[0]),Se=l(xe,u[0]),Ge=m(m(S(_[0],_[0]),S(_[1],_[1])),m(S(_[2],_[2]),S(_[3],_[3]))),De=l(Ge,U[0]),He=l(Ge,M[0]),nt=l(Ge,b[0]),Ie=l(Ge,P[0]),Ae=l(Ge,u[0]),te=m(m(S(u[0],u[0]),S(u[1],u[1])),m(S(u[2],u[2]),S(u[3],u[3]))),we=l(te,U[0]),Pe=l(te,M[0]),X=l(te,b[0]),v=l(te,P[0]),y=l(te,_[0]),A=m(m(m(l(m(m(l(m(l(f(y,Ae),P[1]),m(l(f(v,Se),-_[1]),l(f(Ie,ye),u[1]))),b[2]),l(m(l(f(y,Ae),b[1]),m(l(f(X,le),-_[1]),l(f(nt,ae),u[1]))),-P[2])),m(l(m(l(f(v,Se),b[1]),m(l(f(X,le),-P[1]),l(f(Te,ne),u[1]))),_[2]),l(m(l(f(Ie,ye),b[1]),m(l(f(nt,ae),-P[1]),l(f(Te,ne),_[1]))),-u[2]))),M[3]),m(l(m(m(l(m(l(f(y,Ae),P[1]),m(l(f(v,Se),-_[1]),l(f(Ie,ye),u[1]))),M[2]),l(m(l(f(y,Ae),M[1]),m(l(f(Pe,ie),-_[1]),l(f(He,j),u[1]))),-P[2])),m(l(m(l(f(v,Se),M[1]),m(l(f(Pe,ie),-P[1]),l(f(ge,J),u[1]))),_[2]),l(m(l(f(Ie,ye),M[1]),m(l(f(He,j),-P[1]),l(f(ge,J),_[1]))),-u[2]))),-b[3]),l(m(m(l(m(l(f(y,Ae),b[1]),m(l(f(X,le),-_[1]),l(f(nt,ae),u[1]))),M[2]),l(m(l(f(y,Ae),M[1]),m(l(f(Pe,ie),-_[1]),l(f(He,j),u[1]))),-b[2])),m(l(m(l(f(X,le),M[1]),m(l(f(Pe,ie),-b[1]),l(f(K,B),u[1]))),_[2]),l(m(l(f(nt,ae),M[1]),m(l(f(He,j),-b[1]),l(f(K,B),_[1]))),-u[2]))),P[3]))),m(m(l(m(m(l(m(l(f(v,Se),b[1]),m(l(f(X,le),-P[1]),l(f(Te,ne),u[1]))),M[2]),l(m(l(f(v,Se),M[1]),m(l(f(Pe,ie),-P[1]),l(f(ge,J),u[1]))),-b[2])),m(l(m(l(f(X,le),M[1]),m(l(f(Pe,ie),-b[1]),l(f(K,B),u[1]))),P[2]),l(m(l(f(Te,ne),M[1]),m(l(f(ge,J),-b[1]),l(f(K,B),P[1]))),-u[2]))),-_[3]),l(m(m(l(m(l(f(Ie,ye),b[1]),m(l(f(nt,ae),-P[1]),l(f(Te,ne),_[1]))),M[2]),l(m(l(f(Ie,ye),M[1]),m(l(f(He,j),-P[1]),l(f(ge,J),_[1]))),-b[2])),m(l(m(l(f(nt,ae),M[1]),m(l(f(He,j),-b[1]),l(f(K,B),_[1]))),P[2]),l(m(l(f(Te,ne),M[1]),m(l(f(ge,J),-b[1]),l(f(K,B),P[1]))),-_[2]))),u[3])),m(l(m(m(l(m(l(f(y,Ae),P[1]),m(l(f(v,Se),-_[1]),l(f(Ie,ye),u[1]))),M[2]),l(m(l(f(y,Ae),M[1]),m(l(f(Pe,ie),-_[1]),l(f(He,j),u[1]))),-P[2])),m(l(m(l(f(v,Se),M[1]),m(l(f(Pe,ie),-P[1]),l(f(ge,J),u[1]))),_[2]),l(m(l(f(Ie,ye),M[1]),m(l(f(He,j),-P[1]),l(f(ge,J),_[1]))),-u[2]))),U[3]),l(m(m(l(m(l(f(y,Ae),P[1]),m(l(f(v,Se),-_[1]),l(f(Ie,ye),u[1]))),U[2]),l(m(l(f(y,Ae),U[1]),m(l(f(we,G),-_[1]),l(f(De,z),u[1]))),-P[2])),m(l(m(l(f(v,Se),U[1]),m(l(f(we,G),-P[1]),l(f(ve,k),u[1]))),_[2]),l(m(l(f(Ie,ye),U[1]),m(l(f(De,z),-P[1]),l(f(ve,k),_[1]))),-u[2]))),-M[3])))),m(m(m(l(m(m(l(m(l(f(y,Ae),M[1]),m(l(f(Pe,ie),-_[1]),l(f(He,j),u[1]))),U[2]),l(m(l(f(y,Ae),U[1]),m(l(f(we,G),-_[1]),l(f(De,z),u[1]))),-M[2])),m(l(m(l(f(Pe,ie),U[1]),m(l(f(we,G),-M[1]),l(f(x,I),u[1]))),_[2]),l(m(l(f(He,j),U[1]),m(l(f(De,z),-M[1]),l(f(x,I),_[1]))),-u[2]))),P[3]),l(m(m(l(m(l(f(v,Se),M[1]),m(l(f(Pe,ie),-P[1]),l(f(ge,J),u[1]))),U[2]),l(m(l(f(v,Se),U[1]),m(l(f(we,G),-P[1]),l(f(ve,k),u[1]))),-M[2])),m(l(m(l(f(Pe,ie),U[1]),m(l(f(we,G),-M[1]),l(f(x,I),u[1]))),P[2]),l(m(l(f(ge,J),U[1]),m(l(f(ve,k),-M[1]),l(f(x,I),P[1]))),-u[2]))),-_[3])),m(l(m(m(l(m(l(f(Ie,ye),M[1]),m(l(f(He,j),-P[1]),l(f(ge,J),_[1]))),U[2]),l(m(l(f(Ie,ye),U[1]),m(l(f(De,z),-P[1]),l(f(ve,k),_[1]))),-M[2])),m(l(m(l(f(He,j),U[1]),m(l(f(De,z),-M[1]),l(f(x,I),_[1]))),P[2]),l(m(l(f(ge,J),U[1]),m(l(f(ve,k),-M[1]),l(f(x,I),P[1]))),-_[2]))),u[3]),l(m(m(l(m(l(f(v,Se),b[1]),m(l(f(X,le),-P[1]),l(f(Te,ne),u[1]))),M[2]),l(m(l(f(v,Se),M[1]),m(l(f(Pe,ie),-P[1]),l(f(ge,J),u[1]))),-b[2])),m(l(m(l(f(X,le),M[1]),m(l(f(Pe,ie),-b[1]),l(f(K,B),u[1]))),P[2]),l(m(l(f(Te,ne),M[1]),m(l(f(ge,J),-b[1]),l(f(K,B),P[1]))),-u[2]))),U[3]))),m(m(l(m(m(l(m(l(f(v,Se),b[1]),m(l(f(X,le),-P[1]),l(f(Te,ne),u[1]))),U[2]),l(m(l(f(v,Se),U[1]),m(l(f(we,G),-P[1]),l(f(ve,k),u[1]))),-b[2])),m(l(m(l(f(X,le),U[1]),m(l(f(we,G),-b[1]),l(f(fe,D),u[1]))),P[2]),l(m(l(f(Te,ne),U[1]),m(l(f(ve,k),-b[1]),l(f(fe,D),P[1]))),-u[2]))),-M[3]),l(m(m(l(m(l(f(v,Se),M[1]),m(l(f(Pe,ie),-P[1]),l(f(ge,J),u[1]))),U[2]),l(m(l(f(v,Se),U[1]),m(l(f(we,G),-P[1]),l(f(ve,k),u[1]))),-M[2])),m(l(m(l(f(Pe,ie),U[1]),m(l(f(we,G),-M[1]),l(f(x,I),u[1]))),P[2]),l(m(l(f(ge,J),U[1]),m(l(f(ve,k),-M[1]),l(f(x,I),P[1]))),-u[2]))),b[3])),m(l(m(m(l(m(l(f(X,le),M[1]),m(l(f(Pe,ie),-b[1]),l(f(K,B),u[1]))),U[2]),l(m(l(f(X,le),U[1]),m(l(f(we,G),-b[1]),l(f(fe,D),u[1]))),-M[2])),m(l(m(l(f(Pe,ie),U[1]),m(l(f(we,G),-M[1]),l(f(x,I),u[1]))),b[2]),l(m(l(f(K,B),U[1]),m(l(f(fe,D),-M[1]),l(f(x,I),b[1]))),-u[2]))),-P[3]),l(m(m(l(m(l(f(Te,ne),M[1]),m(l(f(ge,J),-b[1]),l(f(K,B),P[1]))),U[2]),l(m(l(f(Te,ne),U[1]),m(l(f(ve,k),-b[1]),l(f(fe,D),P[1]))),-M[2])),m(l(m(l(f(ge,J),U[1]),m(l(f(ve,k),-M[1]),l(f(x,I),P[1]))),b[2]),l(m(l(f(K,B),U[1]),m(l(f(fe,D),-M[1]),l(f(x,I),b[1]))),-P[2]))),u[3]))))),V=m(m(m(l(m(m(l(m(l(f(y,Ae),P[1]),m(l(f(v,Se),-_[1]),l(f(Ie,ye),u[1]))),b[2]),l(m(l(f(y,Ae),b[1]),m(l(f(X,le),-_[1]),l(f(nt,ae),u[1]))),-P[2])),m(l(m(l(f(v,Se),b[1]),m(l(f(X,le),-P[1]),l(f(Te,ne),u[1]))),_[2]),l(m(l(f(Ie,ye),b[1]),m(l(f(nt,ae),-P[1]),l(f(Te,ne),_[1]))),-u[2]))),U[3]),m(l(m(m(l(m(l(f(y,Ae),P[1]),m(l(f(v,Se),-_[1]),l(f(Ie,ye),u[1]))),U[2]),l(m(l(f(y,Ae),U[1]),m(l(f(we,G),-_[1]),l(f(De,z),u[1]))),-P[2])),m(l(m(l(f(v,Se),U[1]),m(l(f(we,G),-P[1]),l(f(ve,k),u[1]))),_[2]),l(m(l(f(Ie,ye),U[1]),m(l(f(De,z),-P[1]),l(f(ve,k),_[1]))),-u[2]))),-b[3]),l(m(m(l(m(l(f(y,Ae),b[1]),m(l(f(X,le),-_[1]),l(f(nt,ae),u[1]))),U[2]),l(m(l(f(y,Ae),U[1]),m(l(f(we,G),-_[1]),l(f(De,z),u[1]))),-b[2])),m(l(m(l(f(X,le),U[1]),m(l(f(we,G),-b[1]),l(f(fe,D),u[1]))),_[2]),l(m(l(f(nt,ae),U[1]),m(l(f(De,z),-b[1]),l(f(fe,D),_[1]))),-u[2]))),P[3]))),m(m(l(m(m(l(m(l(f(v,Se),b[1]),m(l(f(X,le),-P[1]),l(f(Te,ne),u[1]))),U[2]),l(m(l(f(v,Se),U[1]),m(l(f(we,G),-P[1]),l(f(ve,k),u[1]))),-b[2])),m(l(m(l(f(X,le),U[1]),m(l(f(we,G),-b[1]),l(f(fe,D),u[1]))),P[2]),l(m(l(f(Te,ne),U[1]),m(l(f(ve,k),-b[1]),l(f(fe,D),P[1]))),-u[2]))),-_[3]),l(m(m(l(m(l(f(Ie,ye),b[1]),m(l(f(nt,ae),-P[1]),l(f(Te,ne),_[1]))),U[2]),l(m(l(f(Ie,ye),U[1]),m(l(f(De,z),-P[1]),l(f(ve,k),_[1]))),-b[2])),m(l(m(l(f(nt,ae),U[1]),m(l(f(De,z),-b[1]),l(f(fe,D),_[1]))),P[2]),l(m(l(f(Te,ne),U[1]),m(l(f(ve,k),-b[1]),l(f(fe,D),P[1]))),-_[2]))),u[3])),m(l(m(m(l(m(l(f(y,Ae),b[1]),m(l(f(X,le),-_[1]),l(f(nt,ae),u[1]))),M[2]),l(m(l(f(y,Ae),M[1]),m(l(f(Pe,ie),-_[1]),l(f(He,j),u[1]))),-b[2])),m(l(m(l(f(X,le),M[1]),m(l(f(Pe,ie),-b[1]),l(f(K,B),u[1]))),_[2]),l(m(l(f(nt,ae),M[1]),m(l(f(He,j),-b[1]),l(f(K,B),_[1]))),-u[2]))),U[3]),l(m(m(l(m(l(f(y,Ae),b[1]),m(l(f(X,le),-_[1]),l(f(nt,ae),u[1]))),U[2]),l(m(l(f(y,Ae),U[1]),m(l(f(we,G),-_[1]),l(f(De,z),u[1]))),-b[2])),m(l(m(l(f(X,le),U[1]),m(l(f(we,G),-b[1]),l(f(fe,D),u[1]))),_[2]),l(m(l(f(nt,ae),U[1]),m(l(f(De,z),-b[1]),l(f(fe,D),_[1]))),-u[2]))),-M[3])))),m(m(m(l(m(m(l(m(l(f(y,Ae),M[1]),m(l(f(Pe,ie),-_[1]),l(f(He,j),u[1]))),U[2]),l(m(l(f(y,Ae),U[1]),m(l(f(we,G),-_[1]),l(f(De,z),u[1]))),-M[2])),m(l(m(l(f(Pe,ie),U[1]),m(l(f(we,G),-M[1]),l(f(x,I),u[1]))),_[2]),l(m(l(f(He,j),U[1]),m(l(f(De,z),-M[1]),l(f(x,I),_[1]))),-u[2]))),b[3]),l(m(m(l(m(l(f(X,le),M[1]),m(l(f(Pe,ie),-b[1]),l(f(K,B),u[1]))),U[2]),l(m(l(f(X,le),U[1]),m(l(f(we,G),-b[1]),l(f(fe,D),u[1]))),-M[2])),m(l(m(l(f(Pe,ie),U[1]),m(l(f(we,G),-M[1]),l(f(x,I),u[1]))),b[2]),l(m(l(f(K,B),U[1]),m(l(f(fe,D),-M[1]),l(f(x,I),b[1]))),-u[2]))),-_[3])),m(l(m(m(l(m(l(f(nt,ae),M[1]),m(l(f(He,j),-b[1]),l(f(K,B),_[1]))),U[2]),l(m(l(f(nt,ae),U[1]),m(l(f(De,z),-b[1]),l(f(fe,D),_[1]))),-M[2])),m(l(m(l(f(He,j),U[1]),m(l(f(De,z),-M[1]),l(f(x,I),_[1]))),b[2]),l(m(l(f(K,B),U[1]),m(l(f(fe,D),-M[1]),l(f(x,I),b[1]))),-_[2]))),u[3]),l(m(m(l(m(l(f(Ie,ye),b[1]),m(l(f(nt,ae),-P[1]),l(f(Te,ne),_[1]))),M[2]),l(m(l(f(Ie,ye),M[1]),m(l(f(He,j),-P[1]),l(f(ge,J),_[1]))),-b[2])),m(l(m(l(f(nt,ae),M[1]),m(l(f(He,j),-b[1]),l(f(K,B),_[1]))),P[2]),l(m(l(f(Te,ne),M[1]),m(l(f(ge,J),-b[1]),l(f(K,B),P[1]))),-_[2]))),U[3]))),m(m(l(m(m(l(m(l(f(Ie,ye),b[1]),m(l(f(nt,ae),-P[1]),l(f(Te,ne),_[1]))),U[2]),l(m(l(f(Ie,ye),U[1]),m(l(f(De,z),-P[1]),l(f(ve,k),_[1]))),-b[2])),m(l(m(l(f(nt,ae),U[1]),m(l(f(De,z),-b[1]),l(f(fe,D),_[1]))),P[2]),l(m(l(f(Te,ne),U[1]),m(l(f(ve,k),-b[1]),l(f(fe,D),P[1]))),-_[2]))),-M[3]),l(m(m(l(m(l(f(Ie,ye),M[1]),m(l(f(He,j),-P[1]),l(f(ge,J),_[1]))),U[2]),l(m(l(f(Ie,ye),U[1]),m(l(f(De,z),-P[1]),l(f(ve,k),_[1]))),-M[2])),m(l(m(l(f(He,j),U[1]),m(l(f(De,z),-M[1]),l(f(x,I),_[1]))),P[2]),l(m(l(f(ge,J),U[1]),m(l(f(ve,k),-M[1]),l(f(x,I),P[1]))),-_[2]))),b[3])),m(l(m(m(l(m(l(f(nt,ae),M[1]),m(l(f(He,j),-b[1]),l(f(K,B),_[1]))),U[2]),l(m(l(f(nt,ae),U[1]),m(l(f(De,z),-b[1]),l(f(fe,D),_[1]))),-M[2])),m(l(m(l(f(He,j),U[1]),m(l(f(De,z),-M[1]),l(f(x,I),_[1]))),b[2]),l(m(l(f(K,B),U[1]),m(l(f(fe,D),-M[1]),l(f(x,I),b[1]))),-_[2]))),-P[3]),l(m(m(l(m(l(f(Te,ne),M[1]),m(l(f(ge,J),-b[1]),l(f(K,B),P[1]))),U[2]),l(m(l(f(Te,ne),U[1]),m(l(f(ve,k),-b[1]),l(f(fe,D),P[1]))),-M[2])),m(l(m(l(f(ge,J),U[1]),m(l(f(ve,k),-M[1]),l(f(x,I),P[1]))),b[2]),l(m(l(f(K,B),U[1]),m(l(f(fe,D),-M[1]),l(f(x,I),b[1]))),-P[2]))),_[3]))))),q=f(A,V);return q[q.length-1]}return L}var T=[o,h,c];function N(m){var f=T[m.length];return f||(f=T[m.length]=a(m.length)),f.apply(void 0,m)}function C(m,f,S,l,L,U,M,b){function P(_,u,E,I,D,k){switch(arguments.length){case 0:case 1:return 0;case 2:return l(_,u);case 3:return L(_,u,E);case 4:return U(_,u,E,I);case 5:return M(_,u,E,I,D);case 6:return b(_,u,E,I,D,k)}for(var z=new Array(arguments.length),G=0;G<arguments.length;++G)z[G]=arguments[G];return m(z)}return P}function R(){for(;T.length<=s;)T.push(a(T.length));i.exports=C.apply(void 0,[N].concat(T));for(var m=0;m<=s;++m)i.exports[m]=T[m]}R()})(Ll)),Ll.exports}var Ul,hd;function kv(){if(hd)return Ul;hd=1;var i=Ov()[4];Ro(),Ul=t;function e(n,r,s,a,o,h){var c=r.opposite(a,o);if(!(c<0)){if(o<a){var d=a;a=o,o=d,d=h,h=c,c=d}r.isConstraint(a,o)||i(n[a],n[o],n[h],n[c])<0&&s.push(a,o)}}function t(n,r){for(var s=[],a=n.length,o=r.stars,h=0;h<a;++h)for(var c=o[h],d=1;d<c.length;d+=2){var p=c[d];if(!(p<h)&&!r.isConstraint(h,p)){for(var g=c[d-1],w=-1,T=1;T<c.length;T+=2)if(c[T-1]===p){w=c[T];break}w<0||i(n[h],n[p],n[g],n[w])<0&&s.push(h,p)}}for(;s.length>0;){for(var p=s.pop(),h=s.pop(),g=-1,w=-1,c=o[h],N=1;N<c.length;N+=2){var C=c[N-1],R=c[N];C===p?w=R:R===p&&(g=C)}g<0||w<0||i(n[h],n[p],n[g],n[w])>=0||(r.flip(h,p),e(n,r,s,g,h,w),e(n,r,s,h,w,g),e(n,r,s,w,p,g),e(n,r,s,p,g,w))}}return Ul}var Dl,cd;function zv(){if(cd)return Dl;cd=1;var i=Ro();Dl=a;function e(o,h,c,d,p,g,w){this.cells=o,this.neighbor=h,this.flags=d,this.constraint=c,this.active=p,this.next=g,this.boundary=w}var t=e.prototype;function n(o,h){return o[0]-h[0]||o[1]-h[1]||o[2]-h[2]}t.locate=(function(){var o=[0,0,0];return function(h,c,d){var p=h,g=c,w=d;return c<d?c<h&&(p=c,g=d,w=h):d<h&&(p=d,g=h,w=c),p<0?-1:(o[0]=p,o[1]=g,o[2]=w,i.eq(this.cells,o,n))}})();function r(o,h){for(var c=o.cells(),d=c.length,p=0;p<d;++p){var g=c[p],w=g[0],T=g[1],N=g[2];T<N?T<w&&(g[0]=T,g[1]=N,g[2]=w):N<w&&(g[0]=N,g[1]=w,g[2]=T)}c.sort(n);for(var C=new Array(d),p=0;p<C.length;++p)C[p]=0;var R=[],m=[],f=new Array(3*d),S=new Array(3*d),l=null;h&&(l=[]);for(var L=new e(c,f,S,C,R,m,l),p=0;p<d;++p)for(var g=c[p],U=0;U<3;++U){var w=g[U],T=g[(U+1)%3],M=f[3*p+U]=L.locate(T,w,o.opposite(T,w)),b=S[3*p+U]=o.isConstraint(w,T);M<0&&(b?m.push(p):(R.push(p),C[p]=1),h&&l.push([T,w,-1]))}return L}function s(o,h,c){for(var d=0,p=0;p<o.length;++p)h[p]===c&&(o[d++]=o[p]);return o.length=d,o}function a(o,h,c){var d=r(o,c);if(h===0)return c?d.cells.concat(d.boundary):d.cells;for(var p=1,g=d.active,w=d.next,T=d.flags,N=d.cells,C=d.constraint,R=d.neighbor;g.length>0||w.length>0;){for(;g.length>0;){var m=g.pop();if(T[m]!==-p){T[m]=p,N[m];for(var f=0;f<3;++f){var S=R[3*m+f];S>=0&&T[S]===0&&(C[3*m+f]?w.push(S):(g.push(S),T[S]=p))}}}var l=w;w=g,g=l,w.length=0,p=-p}var L=s(N,T,h);return c?L.concat(d.boundary):L}return Dl}var Nl,ud;function Vv(){if(ud)return Nl;ud=1;var i=Fv(),e=Bv(),t=kv(),n=zv();Nl=h;function r(c){return[Math.min(c[0],c[1]),Math.max(c[0],c[1])]}function s(c,d){return c[0]-d[0]||c[1]-d[1]}function a(c){return c.map(r).sort(s)}function o(c,d,p){return d in c?c[d]:p}function h(c,d,p){Array.isArray(d)?(p=p||{},d=d||[]):(p=d||{},d=[]);var g=!!o(p,"delaunay",!0),w=!!o(p,"interior",!0),T=!!o(p,"exterior",!0),N=!!o(p,"infinity",!1);if(!w&&!T||c.length===0)return[];var C=i(c,d);if(g||w!==T||N){for(var R=e(c.length,a(d)),m=0;m<C.length;++m){var f=C[m];R.addTriangle(f[0],f[1],f[2])}return g&&t(c,R),T?w?N?n(R,0,N):R.cells():n(R,1,N):n(R,-1)}else return C}return Nl}Vv();function Gv(){const i=[];for(let t=0;t<=20;t++){const n=t/20;i.push([.285+.215*(n*n),.87-.72*n])}for(let t=1;t<=20;t++){const n=t/20;i.push([.5+.215*(2*n-n*n),.15+.72*n])}const e=Array.from({length:36},(t,n)=>{const r=n/35;return[.04+r*.92,.7-.045*Math.sin(r*Math.PI*2-.8)-.06*r]});return[i,e,[[.646,.47],[.699,.436],[.745,.397],[.79,.354]]]}const Fl=i=>{const e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)};class Hv{constructor(e,t,n){Ye(this,"renderer");Ye(this,"scene",new sv);Ye(this,"camera",new av(40,1,.1,80));Ye(this,"texture");Ye(this,"face");Ye(this,"intact");Ye(this,"root",new uf);Ye(this,"pieces",[]);Ye(this,"width",6);Ye(this,"height",6);Ye(this,"observer");Ye(this,"fracture",null);Ye(this,"disposed",!1);Ye(this,"lost",!1);Ye(this,"onLost");this.canvas=e,this.renderer=new ev({canvas:e,alpha:!0,antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,innerWidth<720?1.5:2)),this.renderer.outputColorSpace=of,this.renderer.toneMapping=tv,this.texture=new nv(t),this.texture.colorSpace=of,this.texture.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),this.face=new iv({map:this.texture,side:lf}),this.intact=new ca(new hf(6,6),this.face),this.scene.add(this.intact,this.root),this.scene.add(new rv(14020863,2));const r=new cf(14087679,5);r.position.set(-2,4,5),this.scene.add(r);const s=new cf(14140064,3);s.position.set(3,-1,2),this.scene.add(s),this.camera.position.z=this.height/(2*Math.tan(ua.degToRad(20))),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(e),this.onLost=a=>{a.preventDefault(),this.lost=!0,n()},e.addEventListener("webglcontextlost",this.onLost),this.resize()}resize(){const{width:e,height:t}=this.canvas.getBoundingClientRect();!e||!t||this.disposed||this.lost||(this.width=6*e/t,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.intact.geometry.dispose(),this.intact.geometry=new hf(this.width,this.height),this.fracture&&this.prepare(this.fracture),this.render())}world([e,t]){return new bs((e-.5)*this.width,(.5-t)*this.height,0)}prepare(e){this.clearPieces(),this.fracture=e,e.pieces.forEach((t,n)=>{let r=0;const s=new bs;for(const f of t){const[S,l,L]=f.map(M=>this.world(e.points[M])),U=Math.abs((l.x-S.x)*(L.y-S.y)-(l.y-S.y)*(L.x-S.x));s.add(S.add(l).add(L).multiplyScalar(U/3)),r+=U}s.divideScalar(r||1);const a=[],o=[],h=new Map;for(const f of t)for(let S=0;S<3;S++){const l=e.points[f[S]],L=this.world(l).sub(s);a.push(L.x,L.y,0),o.push(l[0],1-l[1]);const U=f[S],M=f[(S+1)%3],b=U<M?`${U}:${M}`:`${M}:${U}`,P=h.get(b)??{count:0,pair:[U,M]};P.count++,h.set(b,P)}const c=new Ho;c.setAttribute("position",new fa(a,3)),c.setAttribute("uv",new fa(o,2)),c.computeVertexNormals();const d=new uf;d.add(new ca(c,this.face));const p=[],g=[];for(const f of h.values()){if(f.count!==1)continue;const[S,l]=f.pair.map(U=>this.world(e.points[U]).sub(s));p.push(S.x,S.y,.004,l.x,l.y,.004);const L=-.035;g.push(S.x,S.y,0,l.x,l.y,0,l.x,l.y,L,S.x,S.y,0,l.x,l.y,L,S.x,S.y,L)}const w=new Ho;w.setAttribute("position",new fa(g,3)),w.computeVertexNormals();const T=new ov({color:10206917,metalness:.75,roughness:.22,side:lf});d.add(new ca(w,T));const N=new Ho;N.setAttribute("position",new fa(p,3));const C=new lv({color:13105151,transparent:!0,opacity:0});d.add(new ff(N,C)),d.position.copy(s);const R=new bs(s.x,s.y,0);R.length()<.3&&R.set(.5,.12,0),R.normalize();const m=Fl(n+s.x);this.pieces.push({group:d,origin:s,vector:new bs(R.x*(5+m*3),R.y*(4+m*2)-1,2.5+m*3),spin:new bs((Fl(n+9)-.5)*2,(m-.5)*2.8,(Fl(n+4)-.5)*.9),edge:C,delay:m*.15}),this.root.add(d)}),this.root.visible=!1,this.intact.visible=!0,this.render()}setProgress(e){this.camera.position.z=this.height/(2*Math.tan(ua.degToRad(20)))*(1-.24*e**3),this.intact.visible=e<=0,this.root.visible=e>0;for(const t of this.pieces){const n=ua.clamp((e-t.delay)/(1-t.delay),0,1),r=n*n*(2-n);t.group.position.copy(t.origin).addScaledVector(t.vector,r),t.group.rotation.set(t.spin.x*n,t.spin.y*n,t.spin.z*n),t.edge.opacity=Math.min(1,e*16)*.8}this.render()}replaceSource(e){this.reset(),this.texture.image=e,this.texture.needsUpdate=!0,this.render()}showAssembled(){this.intact.visible=!1,this.root.visible=!0,this.render()}reset(){this.fracture=null,this.clearPieces(),this.intact.visible=!0,this.camera.position.z=this.height/(2*Math.tan(ua.degToRad(20))),this.render()}render(){!this.disposed&&!this.lost&&this.renderer.render(this.scene,this.camera)}clearPieces(){for(const e of this.pieces)e.group.traverse(t=>{(t instanceof ca||t instanceof ff)&&(t.geometry.dispose(),t.material!==this.face&&t.material.dispose())});this.root.clear(),this.pieces=[]}dispose(){this.disposed=!0,this.observer.disconnect(),this.canvas.removeEventListener("webglcontextlost",this.onLost),this.clearPieces(),this.texture.dispose(),this.face.dispose(),this.intact.geometry.dispose(),this.renderer.dispose()}}const Wv="modulepreload",Xv=function(i){return"/"+i},fd={},qv=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let a=function(c){return Promise.all(c.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),h=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=a(t.map(c=>{if(c=Xv(c),c in fd)return;fd[c]=!0;const d=c.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${p}`))return;const g=document.createElement("link");if(g.rel=d?"stylesheet":Wv,d||(g.as="script"),g.crossOrigin="",g.href=c,h&&g.setAttribute("nonce",h),document.head.appendChild(g),d)return new Promise((w,T)=>{g.addEventListener("load",w),g.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gc="186",$v=0,dd=1,Yv=2,Qa=1,p0=2,Vs=3,Cr=0,En=1,Di=2,Oi=0,Xs=1,pd=2,md=3,gd=4,Zv=5,Qr=100,Kv=101,Jv=102,Qv=103,jv=104,e_=200,t_=201,n_=202,i_=203,m0=204,g0=205,r_=206,s_=207,a_=208,o_=209,l_=210,h_=211,c_=212,u_=213,f_=214,Oh=0,kh=1,zh=2,Ks=3,Vh=4,Gh=5,Hh=6,Wh=7,v0=0,d_=1,p_=2,_i=0,_0=1,y0=2,M0=3,w0=4,S0=5,x0=6,b0=7,vd="attached",m_="detached",E0=300,Ir=301,ls=302,Bl=303,Ol=304,Co=306,Xh=1e3,Ni=1001,qh=1002,hn=1003,g_=1004,ma=1005,dn=1006,kl=1007,Tr=1008,Ln=1009,T0=1010,A0=1011,Js=1012,Hc=1013,Mi=1014,zn=1015,wi=1016,Wc=1017,Xc=1018,Qs=1020,R0=35902,C0=35899,I0=1021,P0=1022,Vn=1023,Vi=1026,Ar=1027,qc=1028,$c=1029,Pr=1030,Yc=1031,Zc=1033,ja=33776,eo=33777,to=33778,no=33779,$h=35840,Yh=35841,Zh=35842,Kh=35843,Jh=36196,Qh=37492,jh=37496,ec=37488,tc=37489,lo=37490,nc=37491,ic=37808,rc=37809,sc=37810,ac=37811,oc=37812,lc=37813,hc=37814,cc=37815,uc=37816,fc=37817,dc=37818,pc=37819,mc=37820,gc=37821,vc=36492,_c=36494,yc=36495,Mc=36283,wc=36284,ho=36285,Sc=36286,xc=2200,io=2201,v_=2202,co=2300,bc=2301,zl=2302,_d=2303,ts=2400,ns=2401,uo=2402,Kc=2500,__=2501,YE=0,ZE=1,KE=2,y_=3200,Ec=0,M_=1,or="",kn="srgb",fo="srgb-linear",po="linear",It="srgb",Vl=7680,w_=519,S_=512,x_=513,b_=514,Jc=515,E_=516,T_=517,Qc=518,A_=519,L0=35044,yd="300 es",vi=2e3,js=2001;function R_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function C_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ea(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function I_(){const i=ea("canvas");return i.style.display="block",i}const Md={};function mo(...i){const e="THREE."+i.shift();console.log(e,...i)}function U0(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function je(...i){i=U0(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function rt(...i){i=U0(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function rs(...i){const e=i.join(" ");e in Md||(Md[e]=!0,je(...i))}function P_(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const L_={[Oh]:kh,[zh]:Hh,[Vh]:Wh,[Ks]:Gh,[kh]:Oh,[Hh]:zh,[Wh]:Vh,[Gh]:Ks};class hr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wd=1234567;const qs=Math.PI/180,hs=180/Math.PI;function ii(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function gt(i,e,t){return Math.max(e,Math.min(t,i))}function jc(i,e){return(i%e+e)%e}function U_(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function D_(i,e,t){return i!==e?(t-i)/(e-i):0}function $s(i,e,t){return(1-t)*i+t*e}function N_(i,e,t,n){return $s(i,e,1-Math.exp(-t*n))}function F_(i,e=1){return e-Math.abs(jc(i,e*2)-e)}function B_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function O_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function k_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function z_(i,e){return i+Math.random()*(e-i)}function V_(i){return i*(.5-Math.random())}function G_(i){i!==void 0&&(wd=i);let e=wd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function H_(i){return i*qs}function W_(i){return i*hs}function X_(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function q_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Y_(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),h=a(t/2),c=s((e+n)/2),d=a((e+n)/2),p=s((e-n)/2),g=a((e-n)/2),w=s((n-e)/2),T=a((n-e)/2);switch(r){case"XYX":i.set(o*d,h*p,h*g,o*c);break;case"YZY":i.set(h*g,o*d,h*p,o*c);break;case"ZXZ":i.set(h*p,h*g,o*d,o*c);break;case"XZX":i.set(o*d,h*T,h*w,o*c);break;case"YXY":i.set(h*w,o*d,h*T,o*c);break;case"ZYZ":i.set(h*T,h*w,o*d,o*c);break;default:je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function jn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const JE={DEG2RAD:qs,RAD2DEG:hs,generateUUID:ii,clamp:gt,euclideanModulo:jc,mapLinear:U_,inverseLerp:D_,lerp:$s,damp:N_,pingpong:F_,smoothstep:B_,smootherstep:O_,randInt:k_,randFloat:z_,randFloatSpread:V_,seededRandom:G_,degToRad:H_,radToDeg:W_,isPowerOfTwo:X_,ceilPowerOfTwo:q_,floorPowerOfTwo:$_,setQuaternionFromProperEuler:Y_,normalize:Pt,denormalize:jn},Nu=class Nu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Nu.prototype.isVector2=!0;let wt=Nu;class yi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let h=n[r+0],c=n[r+1],d=n[r+2],p=n[r+3],g=s[a+0],w=s[a+1],T=s[a+2],N=s[a+3];if(p!==N||h!==g||c!==w||d!==T){let C=h*g+c*w+d*T+p*N;C<0&&(g=-g,w=-w,T=-T,N=-N,C=-C);let R=1-o;if(C<.9995){const m=Math.acos(C),f=Math.sin(m);R=Math.sin(R*m)/f,o=Math.sin(o*m)/f,h=h*R+g*o,c=c*R+w*o,d=d*R+T*o,p=p*R+N*o}else{h=h*R+g*o,c=c*R+w*o,d=d*R+T*o,p=p*R+N*o;const m=1/Math.sqrt(h*h+c*c+d*d+p*p);h*=m,c*=m,d*=m,p*=m}}e[t]=h,e[t+1]=c,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],h=n[r+1],c=n[r+2],d=n[r+3],p=s[a],g=s[a+1],w=s[a+2],T=s[a+3];return e[t]=o*T+d*p+h*w-c*g,e[t+1]=h*T+d*g+c*p-o*w,e[t+2]=c*T+d*w+o*g-h*p,e[t+3]=d*T-o*p-h*g-c*w,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,h=Math.sin,c=o(n/2),d=o(r/2),p=o(s/2),g=h(n/2),w=h(r/2),T=h(s/2);switch(a){case"XYZ":this._x=g*d*p+c*w*T,this._y=c*w*p-g*d*T,this._z=c*d*T+g*w*p,this._w=c*d*p-g*w*T;break;case"YXZ":this._x=g*d*p+c*w*T,this._y=c*w*p-g*d*T,this._z=c*d*T-g*w*p,this._w=c*d*p+g*w*T;break;case"ZXY":this._x=g*d*p-c*w*T,this._y=c*w*p+g*d*T,this._z=c*d*T+g*w*p,this._w=c*d*p-g*w*T;break;case"ZYX":this._x=g*d*p-c*w*T,this._y=c*w*p+g*d*T,this._z=c*d*T-g*w*p,this._w=c*d*p+g*w*T;break;case"YZX":this._x=g*d*p+c*w*T,this._y=c*w*p+g*d*T,this._z=c*d*T-g*w*p,this._w=c*d*p-g*w*T;break;case"XZY":this._x=g*d*p-c*w*T,this._y=c*w*p-g*d*T,this._z=c*d*T+g*w*p,this._w=c*d*p+g*w*T;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],h=t[9],c=t[2],d=t[6],p=t[10],g=n+o+p;if(g>0){const w=.5/Math.sqrt(g+1);this._w=.25/w,this._x=(d-h)*w,this._y=(s-c)*w,this._z=(a-r)*w}else if(n>o&&n>p){const w=2*Math.sqrt(1+n-o-p);this._w=(d-h)/w,this._x=.25*w,this._y=(r+a)/w,this._z=(s+c)/w}else if(o>p){const w=2*Math.sqrt(1+o-n-p);this._w=(s-c)/w,this._x=(r+a)/w,this._y=.25*w,this._z=(h+d)/w}else{const w=2*Math.sqrt(1+p-n-o);this._w=(a-r)/w,this._x=(s+c)/w,this._y=(h+d)/w,this._z=.25*w}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,h=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+r*c-s*h,this._y=r*d+a*h+s*o-n*c,this._z=s*d+a*c+n*h-r*o,this._w=a*d-n*o-r*h-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let h=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);h=Math.sin(h*c)/d,t=Math.sin(t*c)/d,this._x=this._x*h+n*t,this._y=this._y*h+r*t,this._z=this._z*h+s*t,this._w=this._w*h+a*t,this._onChangeCallback()}else this._x=this._x*h+n*t,this._y=this._y*h+r*t,this._z=this._z*h+s*t,this._w=this._w*h+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Fu=class Fu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,h=e.w,c=2*(a*r-o*n),d=2*(o*t-s*r),p=2*(s*n-a*t);return this.x=t+h*c+a*p-o*d,this.y=n+h*d+o*c-s*p,this.z=r+h*p+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,h=t.z;return this.x=r*h-s*o,this.y=s*a-n*h,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gl.copy(this).projectOnVector(e),this.sub(Gl)}reflect(e){return this.sub(Gl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Fu.prototype.isVector3=!0;let de=Fu;const Gl=new de,Sd=new yi,Bu=class Bu{constructor(e,t,n,r,s,a,o,h,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,h,c)}set(e,t,n,r,s,a,o,h,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=s,d[5]=h,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],h=n[6],c=n[1],d=n[4],p=n[7],g=n[2],w=n[5],T=n[8],N=r[0],C=r[3],R=r[6],m=r[1],f=r[4],S=r[7],l=r[2],L=r[5],U=r[8];return s[0]=a*N+o*m+h*l,s[3]=a*C+o*f+h*L,s[6]=a*R+o*S+h*U,s[1]=c*N+d*m+p*l,s[4]=c*C+d*f+p*L,s[7]=c*R+d*S+p*U,s[2]=g*N+w*m+T*l,s[5]=g*C+w*f+T*L,s[8]=g*R+w*S+T*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],h=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*s*d+n*o*h+r*s*c-r*a*h}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],h=e[6],c=e[7],d=e[8],p=d*a-o*c,g=o*h-d*s,w=c*s-a*h,T=t*p+n*g+r*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/T;return e[0]=p*N,e[1]=(r*c-d*n)*N,e[2]=(o*n-r*a)*N,e[3]=g*N,e[4]=(d*t-r*h)*N,e[5]=(r*s-o*t)*N,e[6]=w*N,e[7]=(n*h-c*t)*N,e[8]=(a*t-n*s)*N,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const h=Math.cos(s),c=Math.sin(s);return this.set(n*h,n*c,-n*(h*a+c*o)+a+e,-r*c,r*h,-r*(-c*a+h*o)+o+t,0,0,1),this}scale(e,t){return rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hl.makeScale(e,t)),this}rotate(e){return rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hl.makeRotation(-e)),this}translate(e,t){return rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Bu.prototype.isMatrix3=!0;let st=Bu;const Hl=new st,xd=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bd=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Z_(){const i={enabled:!0,workingColorSpace:fo,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===It&&(r.r=ki(r.r),r.g=ki(r.g),r.b=ki(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===It&&(r.r=ss(r.r),r.g=ss(r.g),r.b=ss(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===or?po:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fo]:{primaries:e,whitePoint:n,transfer:po,toXYZ:xd,fromXYZ:bd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:e,whitePoint:n,transfer:It,toXYZ:xd,fromXYZ:bd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),i}const Mt=Z_();function ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Dr;class K_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Dr===void 0&&(Dr=ea("canvas")),Dr.width=e.width,Dr.height=e.height;const r=Dr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Dr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ea("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ki(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ki(t[n]/255)*255):t[n]=ki(t[n]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let J_=0;class eu{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Wl(r[a].image)):s.push(Wl(r[a]))}else s=Wl(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Wl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?K_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}let Q_=0;const Xl=new de;class pn extends hr{constructor(e=pn.DEFAULT_IMAGE,t=pn.DEFAULT_MAPPING,n=Ni,r=Ni,s=dn,a=Tr,o=Vn,h=Ln,c=pn.DEFAULT_ANISOTROPY,d=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=ii(),this.name="",this.source=new eu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=h,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xl).x}get height(){return this.source.getSize(Xl).y}get depth(){return this.source.getSize(Xl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==E0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xh:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case qh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xh:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case qh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=E0;pn.DEFAULT_ANISOTROPY=1;const Ou=class Ou{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const h=e.elements,c=h[0],d=h[4],p=h[8],g=h[1],w=h[5],T=h[9],N=h[2],C=h[6],R=h[10];if(Math.abs(d-g)<.01&&Math.abs(p-N)<.01&&Math.abs(T-C)<.01){if(Math.abs(d+g)<.1&&Math.abs(p+N)<.1&&Math.abs(T+C)<.1&&Math.abs(c+w+R-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const f=(c+1)/2,S=(w+1)/2,l=(R+1)/2,L=(d+g)/4,U=(p+N)/4,M=(T+C)/4;return f>S&&f>l?f<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(f),r=L/n,s=U/n):S>l?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=L/r,s=M/r):l<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(l),n=U/s,r=M/s),this.set(n,r,s,t),this}let m=Math.sqrt((C-T)*(C-T)+(p-N)*(p-N)+(g-d)*(g-d));return Math.abs(m)<.001&&(m=1),this.x=(C-T)/m,this.y=(p-N)/m,this.z=(g-d)/m,this.w=Math.acos((c+w+R-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ou.prototype.isVector4=!0;let Dt=Ou;class j_ extends hr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new pn(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new eu(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ri extends j_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class D0 extends pn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ey extends pn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Eo=class Eo{constructor(e,t,n,r,s,a,o,h,c,d,p,g,w,T,N,C){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,h,c,d,p,g,w,T,N,C)}set(e,t,n,r,s,a,o,h,c,d,p,g,w,T,N,C){const R=this.elements;return R[0]=e,R[4]=t,R[8]=n,R[12]=r,R[1]=s,R[5]=a,R[9]=o,R[13]=h,R[2]=c,R[6]=d,R[10]=p,R[14]=g,R[3]=w,R[7]=T,R[11]=N,R[15]=C,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Eo().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Nr.setFromMatrixColumn(e,0).length(),s=1/Nr.setFromMatrixColumn(e,1).length(),a=1/Nr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),h=Math.cos(r),c=Math.sin(r),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const g=a*d,w=a*p,T=o*d,N=o*p;t[0]=h*d,t[4]=-h*p,t[8]=c,t[1]=w+T*c,t[5]=g-N*c,t[9]=-o*h,t[2]=N-g*c,t[6]=T+w*c,t[10]=a*h}else if(e.order==="YXZ"){const g=h*d,w=h*p,T=c*d,N=c*p;t[0]=g+N*o,t[4]=T*o-w,t[8]=a*c,t[1]=a*p,t[5]=a*d,t[9]=-o,t[2]=w*o-T,t[6]=N+g*o,t[10]=a*h}else if(e.order==="ZXY"){const g=h*d,w=h*p,T=c*d,N=c*p;t[0]=g-N*o,t[4]=-a*p,t[8]=T+w*o,t[1]=w+T*o,t[5]=a*d,t[9]=N-g*o,t[2]=-a*c,t[6]=o,t[10]=a*h}else if(e.order==="ZYX"){const g=a*d,w=a*p,T=o*d,N=o*p;t[0]=h*d,t[4]=T*c-w,t[8]=g*c+N,t[1]=h*p,t[5]=N*c+g,t[9]=w*c-T,t[2]=-c,t[6]=o*h,t[10]=a*h}else if(e.order==="YZX"){const g=a*h,w=a*c,T=o*h,N=o*c;t[0]=h*d,t[4]=N-g*p,t[8]=T*p+w,t[1]=p,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=w*p+T,t[10]=g-N*p}else if(e.order==="XZY"){const g=a*h,w=a*c,T=o*h,N=o*c;t[0]=h*d,t[4]=-p,t[8]=c*d,t[1]=g*p+N,t[5]=a*d,t[9]=w*p-T,t[2]=T*p-w,t[6]=o*d,t[10]=N*p+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ty,e,ny)}lookAt(e,t,n){const r=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Ji.crossVectors(n,Rn),Ji.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Ji.crossVectors(n,Rn)),Ji.normalize(),ga.crossVectors(Rn,Ji),r[0]=Ji.x,r[4]=ga.x,r[8]=Rn.x,r[1]=Ji.y,r[5]=ga.y,r[9]=Rn.y,r[2]=Ji.z,r[6]=ga.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],h=n[8],c=n[12],d=n[1],p=n[5],g=n[9],w=n[13],T=n[2],N=n[6],C=n[10],R=n[14],m=n[3],f=n[7],S=n[11],l=n[15],L=r[0],U=r[4],M=r[8],b=r[12],P=r[1],_=r[5],u=r[9],E=r[13],I=r[2],D=r[6],k=r[10],z=r[14],G=r[3],O=r[7],x=r[11],B=r[15];return s[0]=a*L+o*P+h*I+c*G,s[4]=a*U+o*_+h*D+c*O,s[8]=a*M+o*u+h*k+c*x,s[12]=a*b+o*E+h*z+c*B,s[1]=d*L+p*P+g*I+w*G,s[5]=d*U+p*_+g*D+w*O,s[9]=d*M+p*u+g*k+w*x,s[13]=d*b+p*E+g*z+w*B,s[2]=T*L+N*P+C*I+R*G,s[6]=T*U+N*_+C*D+R*O,s[10]=T*M+N*u+C*k+R*x,s[14]=T*b+N*E+C*z+R*B,s[3]=m*L+f*P+S*I+l*G,s[7]=m*U+f*_+S*D+l*O,s[11]=m*M+f*u+S*k+l*x,s[15]=m*b+f*E+S*z+l*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],h=e[9],c=e[13],d=e[2],p=e[6],g=e[10],w=e[14],T=e[3],N=e[7],C=e[11],R=e[15],m=h*w-c*g,f=o*w-c*p,S=o*g-h*p,l=a*w-c*d,L=a*g-h*d,U=a*p-o*d;return t*(N*m-C*f+R*S)-n*(T*m-C*l+R*L)+r*(T*f-N*l+R*U)-s*(T*S-N*L+C*U)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],h=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-n*(s*d-o*h)+r*(s*c-a*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],h=e[6],c=e[7],d=e[8],p=e[9],g=e[10],w=e[11],T=e[12],N=e[13],C=e[14],R=e[15],m=t*o-n*a,f=t*h-r*a,S=t*c-s*a,l=n*h-r*o,L=n*c-s*o,U=r*c-s*h,M=d*N-p*T,b=d*C-g*T,P=d*R-w*T,_=p*C-g*N,u=p*R-w*N,E=g*R-w*C,I=m*E-f*u+S*_+l*P-L*b+U*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/I;return e[0]=(o*E-h*u+c*_)*D,e[1]=(r*u-n*E-s*_)*D,e[2]=(N*U-C*L+R*l)*D,e[3]=(g*L-p*U-w*l)*D,e[4]=(h*P-a*E-c*b)*D,e[5]=(t*E-r*P+s*b)*D,e[6]=(C*S-T*U-R*f)*D,e[7]=(d*U-g*S+w*f)*D,e[8]=(a*u-o*P+c*M)*D,e[9]=(n*P-t*u-s*M)*D,e[10]=(T*L-N*S+R*m)*D,e[11]=(p*S-d*L-w*m)*D,e[12]=(o*b-a*_-h*M)*D,e[13]=(t*_-n*b+r*M)*D,e[14]=(N*f-T*l-C*m)*D,e[15]=(d*l-p*f+g*m)*D,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,h=e.z,c=s*a,d=s*o;return this.set(c*a+n,c*o-r*h,c*h+r*o,0,c*o+r*h,d*o+n,d*h-r*a,0,c*h-r*o,d*h+r*a,s*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,h=t._w,c=s+s,d=a+a,p=o+o,g=s*c,w=s*d,T=s*p,N=a*d,C=a*p,R=o*p,m=h*c,f=h*d,S=h*p,l=n.x,L=n.y,U=n.z;return r[0]=(1-(N+R))*l,r[1]=(w+S)*l,r[2]=(T-f)*l,r[3]=0,r[4]=(w-S)*L,r[5]=(1-(g+R))*L,r[6]=(C+m)*L,r[7]=0,r[8]=(T+f)*U,r[9]=(C-m)*U,r[10]=(1-(g+N))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Nr.set(r[0],r[1],r[2]).length();const o=Nr.set(r[4],r[5],r[6]).length(),h=Nr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Yn.copy(this);const c=1/a,d=1/o,p=1/h;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=d,Yn.elements[5]*=d,Yn.elements[6]*=d,Yn.elements[8]*=p,Yn.elements[9]*=p,Yn.elements[10]*=p,t.setFromRotationMatrix(Yn),n.x=a,n.y=o,n.z=h,this}makePerspective(e,t,n,r,s,a,o=vi,h=!1){const c=this.elements,d=2*s/(t-e),p=2*s/(n-r),g=(t+e)/(t-e),w=(n+r)/(n-r);let T,N;if(h)T=s/(a-s),N=a*s/(a-s);else if(o===vi)T=-(a+s)/(a-s),N=-2*a*s/(a-s);else if(o===js)T=-a/(a-s),N=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=g,c[12]=0,c[1]=0,c[5]=p,c[9]=w,c[13]=0,c[2]=0,c[6]=0,c[10]=T,c[14]=N,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=vi,h=!1){const c=this.elements,d=2/(t-e),p=2/(n-r),g=-(t+e)/(t-e),w=-(n+r)/(n-r);let T,N;if(h)T=1/(a-s),N=a/(a-s);else if(o===vi)T=-2/(a-s),N=-(a+s)/(a-s);else if(o===js)T=-1/(a-s),N=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=g,c[1]=0,c[5]=p,c[9]=0,c[13]=w,c[2]=0,c[6]=0,c[10]=T,c[14]=N,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Eo.prototype.isMatrix4=!0;let _t=Eo;const Nr=new de,Yn=new _t,ty=new de(0,0,0),ny=new de(1,1,1),Ji=new de,ga=new de,Rn=new de,Ed=new _t,Td=new yi;class lr{constructor(e=0,t=0,n=0,r=lr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],h=r[1],c=r[5],d=r[9],p=r[2],g=r[6],w=r[10];switch(t){case"XYZ":this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,w),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(g,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,w),this._z=Math.atan2(h,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(gt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-p,w),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-gt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(g,w),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,w));break;case"XZY":this._z=Math.asin(-gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(g,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,w),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ed.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ed,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Td.setFromEuler(this),this.setFromQuaternion(Td,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}lr.DEFAULT_ORDER="XYZ";class N0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iy=0;const Ad=new de,Fr=new yi,Ri=new _t,va=new de,Ts=new de,ry=new de,sy=new yi,Rd=new de(1,0,0),Cd=new de(0,1,0),Id=new de(0,0,1),Pd={type:"added"},ay={type:"removed"},Br={type:"childadded",child:null},ql={type:"childremoved",child:null};class Zt extends hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new de,t=new lr,n=new yi,r=new de(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new st}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new N0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fr.setFromAxisAngle(e,t),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(e,t){return Fr.setFromAxisAngle(e,t),this.quaternion.premultiply(Fr),this}rotateX(e){return this.rotateOnAxis(Rd,e)}rotateY(e){return this.rotateOnAxis(Cd,e)}rotateZ(e){return this.rotateOnAxis(Id,e)}translateOnAxis(e,t){return Ad.copy(e).applyQuaternion(this.quaternion),this.position.add(Ad.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rd,e)}translateY(e){return this.translateOnAxis(Cd,e)}translateZ(e){return this.translateOnAxis(Id,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?va.copy(e):va.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Ts,va,this.up):Ri.lookAt(va,Ts,this.up),this.quaternion.setFromRotationMatrix(Ri),r&&(Ri.extractRotation(r.matrixWorld),Fr.setFromRotationMatrix(Ri),this.quaternion.premultiply(Fr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pd),Br.child=e,this.dispatchEvent(Br),Br.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ay),ql.child=e,this.dispatchEvent(ql),ql.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pd),Br.child=e,this.dispatchEvent(Br),Br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,e,ry),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,sy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const h=o.shapes;if(Array.isArray(h))for(let c=0,d=h.length;c<d;c++){const p=h[c];s(e.shapes,p)}else s(e.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let h=0,c=this.material.length;h<c;h++)o.push(s(e.materials,this.material[h]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const h=this.animations[o];r.animations.push(s(e.animations,h))}}if(t){const o=a(e.geometries),h=a(e.materials),c=a(e.textures),d=a(e.images),p=a(e.shapes),g=a(e.skeletons),w=a(e.animations),T=a(e.nodes);o.length>0&&(n.geometries=o),h.length>0&&(n.materials=h),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),g.length>0&&(n.skeletons=g),w.length>0&&(n.animations=w),T.length>0&&(n.nodes=T)}return n.object=r,n;function a(o){const h=[];for(const c in o){const d=o[c];delete d.metadata,h.push(d)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Zt.DEFAULT_UP=new de(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _a extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oy={type:"move"};class $l{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _a,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _a,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new de,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new de),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _a,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new de,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new de,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,h=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const N of e.hand.values()){const C=t.getJointPose(N,n),R=this._getHandJoint(c,N);C!==null&&(R.matrix.fromArray(C.transform.matrix),R.matrix.decompose(R.position,R.rotation,R.scale),R.matrixWorldNeedsUpdate=!0,R.jointRadius=C.radius),R.visible=C!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],g=d.position.distanceTo(p.position),w=.02,T=.005;c.inputState.pinching&&g>w+T?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&g<=w-T&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(oy)))}return o!==null&&(o.visible=r!==null),h!==null&&(h.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new _a;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const F0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},ya={h:0,s:0,l:0};function Yl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class dt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Mt.workingColorSpace){if(e=jc(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Yl(a,s,e+1/3),this.g=Yl(a,s,e),this.b=Yl(a,s,e-1/3)}return Mt.colorSpaceToWorking(this,r),this}setStyle(e,t=kn){function n(s){s!==void 0&&parseFloat(s)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kn){const n=F0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return Mt.workingToColorSpace(fn.copy(this),e),Math.round(gt(fn.r*255,0,255))*65536+Math.round(gt(fn.g*255,0,255))*256+Math.round(gt(fn.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(fn.copy(this),t);const n=fn.r,r=fn.g,s=fn.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let h,c;const d=(o+a)/2;if(o===a)h=0,c=0;else{const p=a-o;switch(c=d<=.5?p/(a+o):p/(2-a-o),a){case n:h=(r-s)/p+(r<s?6:0);break;case r:h=(s-n)/p+2;break;case s:h=(n-r)/p+4;break}h/=6}return e.h=h,e.s=c,e.l=d,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=kn){Mt.workingToColorSpace(fn.copy(this),e);const t=fn.r,n=fn.g,r=fn.b;return e!==kn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(ya);const n=$s(Qi.h,ya.h,t),r=$s(Qi.s,ya.s,t),s=$s(Qi.l,ya.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new dt;dt.NAMES=F0;class ly extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new lr,this.environmentIntensity=1,this.environmentRotation=new lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Zn=new de,Ci=new de,Zl=new de,Ii=new de,Or=new de,kr=new de,Ld=new de,Kl=new de,Jl=new de,Ql=new de,jl=new Dt,eh=new Dt,th=new Dt;class ei{constructor(e=new de,t=new de,n=new de){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Zn.subVectors(e,t),r.cross(Zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Zn.subVectors(r,t),Ci.subVectors(n,t),Zl.subVectors(e,t);const a=Zn.dot(Zn),o=Zn.dot(Ci),h=Zn.dot(Zl),c=Ci.dot(Ci),d=Ci.dot(Zl),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const g=1/p,w=(c*h-o*d)*g,T=(a*d-o*h)*g;return s.set(1-w-T,T,w)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,n,r,s,a,o,h){return this.getBarycoord(e,t,n,r,Ii)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(s,Ii.x),h.addScaledVector(a,Ii.y),h.addScaledVector(o,Ii.z),h)}static getInterpolatedAttribute(e,t,n,r,s,a){return jl.setScalar(0),eh.setScalar(0),th.setScalar(0),jl.fromBufferAttribute(e,t),eh.fromBufferAttribute(e,n),th.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(jl,s.x),a.addScaledVector(eh,s.y),a.addScaledVector(th,s.z),a}static isFrontFacing(e,t,n,r){return Zn.subVectors(n,t),Ci.subVectors(e,t),Zn.cross(Ci).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),Zn.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return ei.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Or.subVectors(r,n),kr.subVectors(s,n),Kl.subVectors(e,n);const h=Or.dot(Kl),c=kr.dot(Kl);if(h<=0&&c<=0)return t.copy(n);Jl.subVectors(e,r);const d=Or.dot(Jl),p=kr.dot(Jl);if(d>=0&&p<=d)return t.copy(r);const g=h*p-d*c;if(g<=0&&h>=0&&d<=0)return a=h/(h-d),t.copy(n).addScaledVector(Or,a);Ql.subVectors(e,s);const w=Or.dot(Ql),T=kr.dot(Ql);if(T>=0&&w<=T)return t.copy(s);const N=w*c-h*T;if(N<=0&&c>=0&&T<=0)return o=c/(c-T),t.copy(n).addScaledVector(kr,o);const C=d*T-w*p;if(C<=0&&p-d>=0&&w-T>=0)return Ld.subVectors(s,r),o=(p-d)/(p-d+(w-T)),t.copy(r).addScaledVector(Ld,o);const R=1/(C+N+g);return a=N*R,o=g*R,t.copy(n).addScaledVector(Or,a).addScaledVector(kr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class cr{constructor(e=new de(1/0,1/0,1/0),t=new de(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kn):Kn.fromBufferAttribute(s,a),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ma.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ma.copy(n.boundingBox)),Ma.applyMatrix4(e.matrixWorld),this.union(Ma)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(As),wa.subVectors(this.max,As),zr.subVectors(e.a,As),Vr.subVectors(e.b,As),Gr.subVectors(e.c,As),ji.subVectors(Vr,zr),er.subVectors(Gr,Vr),mr.subVectors(zr,Gr);let t=[0,-ji.z,ji.y,0,-er.z,er.y,0,-mr.z,mr.y,ji.z,0,-ji.x,er.z,0,-er.x,mr.z,0,-mr.x,-ji.y,ji.x,0,-er.y,er.x,0,-mr.y,mr.x,0];return!nh(t,zr,Vr,Gr,wa)||(t=[1,0,0,0,1,0,0,0,1],!nh(t,zr,Vr,Gr,wa))?!1:(Sa.crossVectors(ji,er),t=[Sa.x,Sa.y,Sa.z],nh(t,zr,Vr,Gr,wa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pi=[new de,new de,new de,new de,new de,new de,new de,new de],Kn=new de,Ma=new cr,zr=new de,Vr=new de,Gr=new de,ji=new de,er=new de,mr=new de,As=new de,wa=new de,Sa=new de,gr=new de;function nh(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){gr.fromArray(i,s);const o=r.x*Math.abs(gr.x)+r.y*Math.abs(gr.y)+r.z*Math.abs(gr.z),h=e.dot(gr),c=t.dot(gr),d=n.dot(gr);if(Math.max(-Math.max(h,c,d),Math.min(h,c,d))>o)return!1}return!0}const Kt=new de,xa=new wt;let hy=0;class si extends hr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=L0,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix3(e),this.setXY(t,xa.x,xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class B0 extends si{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class O0 extends si{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ai extends si{constructor(e,t,n){super(new Float32Array(e),t,n)}}const cy=new cr,Rs=new de,ih=new de;class Gi{constructor(e=new de,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):cy.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rs.subVectors(e,this.center);const t=Rs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Rs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ih.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rs.copy(e.center).add(ih)),this.expandByPoint(Rs.copy(e.center).sub(ih))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let uy=0;const On=new _t,rh=new Zt,Hr=new de,Cn=new cr,Cs=new cr,nn=new de;class li extends hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(R_(e)?O0:B0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new st().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,n){return On.makeTranslation(e,t,n),this.applyMatrix4(On),this}scale(e,t,n){return On.makeScale(e,t,n),this.applyMatrix4(On),this}lookAt(e){return rh.lookAt(e),rh.updateMatrix(),this.applyMatrix4(rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ai(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new de(-1/0,-1/0,-1/0),new de(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new de,1/0);return}if(e){const n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Cs.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(Cn.min,Cs.min),Cn.expandByPoint(nn),nn.addVectors(Cn.max,Cs.max),Cn.expandByPoint(nn)):(Cn.expandByPoint(Cs.min),Cn.expandByPoint(Cs.max))}Cn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)nn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(nn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],h=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)nn.fromBufferAttribute(o,c),h&&(Hr.fromBufferAttribute(e,c),nn.add(Hr)),r=Math.max(r,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new si(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],h=[];for(let M=0;M<n.count;M++)o[M]=new de,h[M]=new de;const c=new de,d=new de,p=new de,g=new wt,w=new wt,T=new wt,N=new de,C=new de;function R(M,b,P){c.fromBufferAttribute(n,M),d.fromBufferAttribute(n,b),p.fromBufferAttribute(n,P),g.fromBufferAttribute(s,M),w.fromBufferAttribute(s,b),T.fromBufferAttribute(s,P),d.sub(c),p.sub(c),w.sub(g),T.sub(g);const _=1/(w.x*T.y-T.x*w.y);isFinite(_)&&(N.copy(d).multiplyScalar(T.y).addScaledVector(p,-w.y).multiplyScalar(_),C.copy(p).multiplyScalar(w.x).addScaledVector(d,-T.x).multiplyScalar(_),o[M].add(N),o[b].add(N),o[P].add(N),h[M].add(C),h[b].add(C),h[P].add(C))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let M=0,b=m.length;M<b;++M){const P=m[M],_=P.start,u=P.count;for(let E=_,I=_+u;E<I;E+=3)R(e.getX(E+0),e.getX(E+1),e.getX(E+2))}const f=new de,S=new de,l=new de,L=new de;function U(M){l.fromBufferAttribute(r,M),L.copy(l);const b=o[M];f.copy(b),f.sub(l.multiplyScalar(l.dot(b))).normalize(),S.crossVectors(L,b);const _=S.dot(h[M])<0?-1:1;a.setXYZW(M,f.x,f.y,f.z,_)}for(let M=0,b=m.length;M<b;++M){const P=m[M],_=P.start,u=P.count;for(let E=_,I=_+u;E<I;E+=3)U(e.getX(E+0)),U(e.getX(E+1)),U(e.getX(E+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new si(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,w=n.count;g<w;g++)n.setXYZ(g,0,0,0);const r=new de,s=new de,a=new de,o=new de,h=new de,c=new de,d=new de,p=new de;if(e)for(let g=0,w=e.count;g<w;g+=3){const T=e.getX(g+0),N=e.getX(g+1),C=e.getX(g+2);r.fromBufferAttribute(t,T),s.fromBufferAttribute(t,N),a.fromBufferAttribute(t,C),d.subVectors(a,s),p.subVectors(r,s),d.cross(p),o.fromBufferAttribute(n,T),h.fromBufferAttribute(n,N),c.fromBufferAttribute(n,C),o.add(d),h.add(d),c.add(d),n.setXYZ(T,o.x,o.y,o.z),n.setXYZ(N,h.x,h.y,h.z),n.setXYZ(C,c.x,c.y,c.z)}else for(let g=0,w=t.count;g<w;g+=3)r.fromBufferAttribute(t,g+0),s.fromBufferAttribute(t,g+1),a.fromBufferAttribute(t,g+2),d.subVectors(a,s),p.subVectors(r,s),d.cross(p),n.setXYZ(g+0,d.x,d.y,d.z),n.setXYZ(g+1,d.x,d.y,d.z),n.setXYZ(g+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(o,h){const c=o.array,d=o.itemSize,p=o.normalized,g=new c.constructor(h.length*d);let w=0,T=0;for(let N=0,C=h.length;N<C;N++){o.isInterleavedBufferAttribute?w=h[N]*o.data.stride+o.offset:w=h[N]*d;for(let R=0;R<d;R++)g[T++]=c[w++]}return new si(g,d,p)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new li,n=this.index.array,r=this.attributes;for(const o in r){const h=r[o],c=e(h,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const h=[],c=s[o];for(let d=0,p=c.length;d<p;d++){const g=c[d],w=e(g,n);h.push(w)}t.morphAttributes[o]=h}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,h=a.length;o<h;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const c in h)h[c]!==void 0&&(e[c]=h[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const c=n[h];e.data.attributes[h]=c.toJSON(e.data)}const r={};let s=!1;for(const h in this.morphAttributes){const c=this.morphAttributes[h],d=[];for(let p=0,g=c.length;p<g;p++){const w=c[p];d.push(w.toJSON(e.data))}d.length>0&&(r[h]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],p=s[c];for(let g=0,w=p.length;g<w;g++)d.push(p[g].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class QE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=L0,this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const gn=new de;class k0{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=jn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array),s=Pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){mo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new si(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new k0(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){mo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const sh=new de,fy=new de,dy=new st;class sr{constructor(e=new de(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=sh.subVectors(n,t).cross(fy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(sh),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||dy.getNormalMatrix(e),r=this.coplanarPoint(sh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let py=0;class ur extends hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=Xs,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=m0,this.blendDst=g0,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=w_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vl,this.stencilZFail=Vl,this.stencilZPass=Vl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const h=s[o];delete h.metadata,a.push(h)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new dt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new sr().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new wt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new wt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Li=new de,ah=new de,ba=new de,Ea=new de;class Io{constructor(e=new de,t=new de(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ah.copy(e).add(t).multiplyScalar(.5),ba.copy(t).sub(e).normalize(),Ea.copy(this.origin).sub(ah);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ba),o=Ea.dot(this.direction),h=-Ea.dot(ba),c=Ea.lengthSq(),d=Math.abs(1-a*a);let p,g,w,T;if(d>0)if(p=a*h-o,g=a*o-h,T=s*d,p>=0)if(g>=-T)if(g<=T){const N=1/d;p*=N,g*=N,w=p*(p+a*g+2*o)+g*(a*p+g+2*h)+c}else g=s,p=Math.max(0,-(a*g+o)),w=-p*p+g*(g+2*h)+c;else g=-s,p=Math.max(0,-(a*g+o)),w=-p*p+g*(g+2*h)+c;else g<=-T?(p=Math.max(0,-(-a*s+o)),g=p>0?-s:Math.min(Math.max(-s,-h),s),w=-p*p+g*(g+2*h)+c):g<=T?(p=0,g=Math.min(Math.max(-s,-h),s),w=g*(g+2*h)+c):(p=Math.max(0,-(a*s+o)),g=p>0?s:Math.min(Math.max(-s,-h),s),w=-p*p+g*(g+2*h)+c);else g=a>0?-s:s,p=Math.max(0,-(a*g+o)),w=-p*p+g*(g+2*h)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(ah).addScaledVector(ba,g),w}intersectSphere(e,t){if(e.radius<0)return null;Li.subVectors(e.center,this.origin);const n=Li.dot(this.direction),r=Li.dot(Li)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,h=n+a;return h<0?null:o<0?this.at(h,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,h;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,g=this.origin;return c>=0?(n=(e.min.x-g.x)*c,r=(e.max.x-g.x)*c):(n=(e.max.x-g.x)*c,r=(e.min.x-g.x)*c),d>=0?(s=(e.min.y-g.y)*d,a=(e.max.y-g.y)*d):(s=(e.max.y-g.y)*d,a=(e.min.y-g.y)*d),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-g.z)*p,h=(e.max.z-g.z)*p):(o=(e.max.z-g.z)*p,h=(e.min.z-g.z)*p),n>h||o>r)||((o>n||n!==n)&&(n=o),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,n,r,s){const a=this.origin,o=this.direction,h=o.x,c=o.y,d=o.z,p=e.x-a.x,g=e.y-a.y,w=e.z-a.z,T=t.x-a.x,N=t.y-a.y,C=t.z-a.z,R=n.x-a.x,m=n.y-a.y,f=n.z-a.z,S=Math.abs(h),l=Math.abs(c),L=Math.abs(d);let U,M,b,P,_,u,E,I,D,k,z,G;if(S>=l&&S>=L?(b=h,u=p,D=T,G=R,h>=0?(U=c,M=d,P=g,_=w,E=N,I=C,k=m,z=f):(U=d,M=c,P=w,_=g,E=C,I=N,k=f,z=m)):l>=L?(b=c,u=g,D=N,G=m,c>=0?(U=d,M=h,P=w,_=p,E=C,I=T,k=f,z=R):(U=h,M=d,P=p,_=w,E=T,I=C,k=R,z=f)):(b=d,u=w,D=C,G=f,d>=0?(U=h,M=c,P=p,_=g,E=T,I=N,k=R,z=m):(U=c,M=h,P=g,_=p,E=N,I=T,k=m,z=R)),b===0)return null;const O=U/b,x=M/b,B=1/b,J=P-O*u,j=_-x*u,ie=E-O*D,ue=I-x*D,fe=k-O*G,K=z-x*G,ne=fe*ue-K*ie,ae=J*K-j*fe,le=ie*j-ue*J;if(r){if(ne<0||ae<0||le<0)return null}else if((ne<0||ae<0||le<0)&&(ne>0||ae>0||le>0))return null;const xe=ne+ae+le;if(xe===0)return null;const ve=B*(ne*u+ae*D+le*G);return(xe>0?ve<0:ve>0)?null:this.at(ve/xe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class z0 extends ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new lr,this.combine=v0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ud=new _t,vr=new Io,Ta=new Gi,Dd=new de,Aa=new de,Ra=new de,Ca=new de,oh=new de,Ia=new de,Nd=new de,Pa=new de;class Nn extends Zt{constructor(e=new li,t=new z0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ia.set(0,0,0);for(let h=0,c=s.length;h<c;h++){const d=o[h],p=s[h];d!==0&&(oh.fromBufferAttribute(p,e),a?Ia.addScaledVector(oh,d):Ia.addScaledVector(oh.sub(t),d))}t.add(Ia)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(s),vr.copy(e.ray).recast(e.near),!(Ta.containsPoint(vr.origin)===!1&&(vr.intersectSphere(Ta,Dd)===null||vr.origin.distanceToSquared(Dd)>(e.far-e.near)**2))&&(Ud.copy(s).invert(),vr.copy(e.ray).applyMatrix4(Ud),!(n.boundingBox!==null&&vr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,h=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,g=s.groups,w=s.drawRange;if(o!==null)if(Array.isArray(a))for(let T=0,N=g.length;T<N;T++){const C=g[T],R=a[C.materialIndex],m=Math.max(C.start,w.start),f=Math.min(o.count,Math.min(C.start+C.count,w.start+w.count));for(let S=m,l=f;S<l;S+=3){const L=o.getX(S),U=o.getX(S+1),M=o.getX(S+2);r=La(this,R,e,n,c,d,p,L,U,M),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=C.materialIndex,t.push(r))}}else{const T=Math.max(0,w.start),N=Math.min(o.count,w.start+w.count);for(let C=T,R=N;C<R;C+=3){const m=o.getX(C),f=o.getX(C+1),S=o.getX(C+2);r=La(this,a,e,n,c,d,p,m,f,S),r&&(r.faceIndex=Math.floor(C/3),t.push(r))}}else if(h!==void 0)if(Array.isArray(a))for(let T=0,N=g.length;T<N;T++){const C=g[T],R=a[C.materialIndex],m=Math.max(C.start,w.start),f=Math.min(h.count,Math.min(C.start+C.count,w.start+w.count));for(let S=m,l=f;S<l;S+=3){const L=S,U=S+1,M=S+2;r=La(this,R,e,n,c,d,p,L,U,M),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=C.materialIndex,t.push(r))}}else{const T=Math.max(0,w.start),N=Math.min(h.count,w.start+w.count);for(let C=T,R=N;C<R;C+=3){const m=C,f=C+1,S=C+2;r=La(this,a,e,n,c,d,p,m,f,S),r&&(r.faceIndex=Math.floor(C/3),t.push(r))}}}}function my(i,e,t,n,r,s,a,o){let h;if(e.side===En?h=n.intersectTriangle(a,s,r,!0,o):h=n.intersectTriangle(r,s,a,e.side===Cr,o),h===null)return null;Pa.copy(o),Pa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Pa);return c<t.near||c>t.far?null:{distance:c,point:Pa.clone(),object:i}}function La(i,e,t,n,r,s,a,o,h,c){i.getVertexPosition(o,Aa),i.getVertexPosition(h,Ra),i.getVertexPosition(c,Ca);const d=my(i,e,t,n,Aa,Ra,Ca,Nd);if(d){const p=new de;ei.getBarycoord(Nd,Aa,Ra,Ca,p),r&&(d.uv=ei.getInterpolatedAttribute(r,o,h,c,p,new wt)),s&&(d.uv1=ei.getInterpolatedAttribute(s,o,h,c,p,new wt)),a&&(d.normal=ei.getInterpolatedAttribute(a,o,h,c,p,new de),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const g={a:o,b:h,c,normal:new de,materialIndex:0};ei.getNormal(Aa,Ra,Ca,g.normal),d.face=g,d.barycoord=p}return d}const Is=new Dt,Fd=new Dt,Bd=new Dt,gy=new Dt,Od=new _t,Ua=new de,lh=new Gi,kd=new _t,hh=new Io;class jE extends Nn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=vd,this.bindMatrix=new _t,this.bindMatrixInverse=new _t,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new cr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ua),this.boundingBox.expandByPoint(Ua)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ua),this.boundingSphere.expandByPoint(Ua)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lh.copy(this.boundingSphere),lh.applyMatrix4(r),e.ray.intersectsSphere(lh)!==!1&&(kd.copy(r).invert(),hh.copy(e.ray).applyMatrix4(kd),!(this.boundingBox!==null&&hh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,hh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Dt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===vd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===m_?this.bindMatrixInverse.copy(this.bindMatrix).invert():je("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Fd.fromBufferAttribute(r.attributes.skinIndex,e),Bd.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Is.copy(t),t.set(0,0,0,0)):(Is.set(...t,1),t.set(0,0,0)),Is.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const a=Bd.getComponent(s);if(a!==0){const o=Fd.getComponent(s);Od.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(gy.copy(Is).applyMatrix4(Od),a)}}return t.isVector4&&(t.w=Is.w),t.applyMatrix4(this.bindMatrixInverse)}}class vy extends Zt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class tu extends pn{constructor(e=null,t=1,n=1,r,s,a,o,h,c=hn,d=hn,p,g){super(null,a,o,h,c,d,r,s,p,g),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zd=new _t,_y=new _t;class V0{constructor(e=[],t=[]){this.uuid=ii(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){je("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new _t)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new _t;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:_y;zd.multiplyMatrices(o,t[s]),zd.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new V0(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new tu(t,e,e,Vn,zn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let a=t[s];a===void 0&&(je("Skeleton: No bone found with UUID:",s),a=new vy),this.bones.push(a),this.boneInverses.push(new _t().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=n[r];e.boneInverses.push(o.toArray())}return e}}class Vd extends si{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Wr=new _t,Gd=new _t,Da=[],Hd=new cr,yy=new _t,Ps=new Nn,Ls=new Gi;class eT extends Nn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vd(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,yy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wr),Hd.copy(e.boundingBox).applyMatrix4(Wr),this.boundingBox.union(Hd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wr),Ls.copy(e.boundingSphere).applyMatrix4(Wr),this.boundingSphere.union(Ls)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Ps.geometry=this.geometry,Ps.material=this.material,Ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ls.copy(this.boundingSphere),Ls.applyMatrix4(n),e.ray.intersectsSphere(Ls)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Wr),Gd.multiplyMatrices(n,Wr),Ps.matrixWorld=Gd,Ps.raycast(e,Da);for(let a=0,o=Da.length;a<o;a++){const h=Da[a];h.instanceId=s,h.object=this,t.push(h)}Da.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Vd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new tu(new Float32Array(r*this.count),r,this.count,qc,zn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,h=r*e;return s[h]=o,s.set(n,h+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const _r=new Gi,My=new wt(.5,.5),Na=new de;class nu{constructor(e=new sr,t=new sr,n=new sr,r=new sr,s=new sr,a=new sr){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vi,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],h=s[2],c=s[3],d=s[4],p=s[5],g=s[6],w=s[7],T=s[8],N=s[9],C=s[10],R=s[11],m=s[12],f=s[13],S=s[14],l=s[15];if(r[0].setComponents(c-a,w-d,R-T,l-m).normalize(),r[1].setComponents(c+a,w+d,R+T,l+m).normalize(),r[2].setComponents(c+o,w+p,R+N,l+f).normalize(),r[3].setComponents(c-o,w-p,R-N,l-f).normalize(),n)r[4].setComponents(h,g,C,S).normalize(),r[5].setComponents(c-h,w-g,R-C,l-S).normalize();else if(r[4].setComponents(c-h,w-g,R-C,l-S).normalize(),t===vi)r[5].setComponents(c+h,w+g,R+C,l+S).normalize();else if(t===js)r[5].setComponents(h,g,C,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(e){_r.center.set(0,0,0);const t=My.distanceTo(e.center);return _r.radius=.7071067811865476+t,_r.applyMatrix4(e.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Na.x=r.normal.x>0?e.max.x:e.min.x,Na.y=r.normal.y>0?e.max.y:e.min.y,Na.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Na)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wy extends ur{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const go=new de,vo=new de,Wd=new _t,Us=new Io,Fa=new Gi,ch=new de,Xd=new de;class G0 extends Zt{constructor(e=new li,t=new wy){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)go.fromBufferAttribute(t,r-1),vo.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=go.distanceTo(vo);e.setAttribute("lineDistance",new ai(n,1))}else je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(r),Fa.radius+=s,e.ray.intersectsSphere(Fa)===!1)return;Wd.copy(r).invert(),Us.copy(e.ray).applyMatrix4(Wd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,c=this.isLineSegments?2:1,d=n.index,g=n.attributes.position;if(d!==null){const w=Math.max(0,a.start),T=Math.min(d.count,a.start+a.count);for(let N=w,C=T-1;N<C;N+=c){const R=d.getX(N),m=d.getX(N+1),f=Ba(this,e,Us,h,R,m,N);f&&t.push(f)}if(this.isLineLoop){const N=d.getX(T-1),C=d.getX(w),R=Ba(this,e,Us,h,N,C,T-1);R&&t.push(R)}}else{const w=Math.max(0,a.start),T=Math.min(g.count,a.start+a.count);for(let N=w,C=T-1;N<C;N+=c){const R=Ba(this,e,Us,h,N,N+1,N);R&&t.push(R)}if(this.isLineLoop){const N=Ba(this,e,Us,h,T-1,w,T-1);N&&t.push(N)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ba(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(go.fromBufferAttribute(o,r),vo.fromBufferAttribute(o,s),t.distanceSqToSegment(go,vo,ch,Xd)>n)return;ch.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ch);if(!(c<e.near||c>e.far))return{distance:c,point:Xd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const qd=new de,$d=new de;class tT extends G0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)qd.fromBufferAttribute(t,r),$d.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+qd.distanceTo($d);e.setAttribute("lineDistance",new ai(n,1))}else je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nT extends G0{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Sy extends ur{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yd=new _t,Tc=new Io,Oa=new Gi,ka=new de;class iT extends Zt{constructor(e=new li,t=new Sy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(r),Oa.radius+=s,e.ray.intersectsSphere(Oa)===!1)return;Yd.copy(r).invert(),Tc.copy(e.ray).applyMatrix4(Yd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,c=n.index,p=n.attributes.position;if(c!==null){const g=Math.max(0,a.start),w=Math.min(c.count,a.start+a.count);for(let T=g,N=w;T<N;T++){const C=c.getX(T);ka.fromBufferAttribute(p,C),Zd(ka,C,h,r,e,t,this)}}else{const g=Math.max(0,a.start),w=Math.min(p.count,a.start+a.count);for(let T=g,N=w;T<N;T++)ka.fromBufferAttribute(p,T),Zd(ka,T,h,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Zd(i,e,t,n,r,s,a){const o=Tc.distanceSqToPoint(i);if(o<t){const h=new de;Tc.closestPointToPoint(i,h),h.applyMatrix4(n);const c=r.ray.origin.distanceTo(h);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class H0 extends pn{constructor(e=[],t=Ir,n,r,s,a,o,h,c,d){super(e,t,n,r,s,a,o,h,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ta extends pn{constructor(e,t,n=Mi,r,s,a,o=hn,h=hn,c,d=Vi,p=1){if(d!==Vi&&d!==Ar)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:p};super(g,r,s,a,o,h,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new eu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class xy extends ta{constructor(e,t=Mi,n=Ir,r,s,a=hn,o=hn,h,c=Vi){const d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,t,n,r,s,a,o,h,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class W0 extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ia extends li{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const h=[],c=[],d=[],p=[];let g=0,w=0;T("z","y","x",-1,-1,n,t,e,a,s,0),T("z","y","x",1,-1,n,t,-e,a,s,1),T("x","z","y",1,1,e,n,t,r,a,2),T("x","z","y",1,-1,e,n,-t,r,a,3),T("x","y","z",1,-1,e,t,n,r,s,4),T("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(h),this.setAttribute("position",new ai(c,3)),this.setAttribute("normal",new ai(d,3)),this.setAttribute("uv",new ai(p,2));function T(N,C,R,m,f,S,l,L,U,M,b){const P=S/U,_=l/M,u=S/2,E=l/2,I=L/2,D=U+1,k=M+1;let z=0,G=0;const O=new de;for(let x=0;x<k;x++){const B=x*_-E;for(let J=0;J<D;J++){const j=J*P-u;O[N]=j*m,O[C]=B*f,O[R]=I,c.push(O.x,O.y,O.z),O[N]=0,O[C]=0,O[R]=L>0?1:-1,d.push(O.x,O.y,O.z),p.push(J/U),p.push(1-x/M),z+=1}}for(let x=0;x<M;x++)for(let B=0;B<U;B++){const J=g+B+D*x,j=g+B+D*(x+1),ie=g+(B+1)+D*(x+1),ue=g+(B+1)+D*x;h.push(J,j,ue),h.push(j,ie,ue),G+=6}o.addGroup(w,G,b),w+=G,g+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ra extends li{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),h=Math.floor(r),c=o+1,d=h+1,p=e/o,g=t/h,w=[],T=[],N=[],C=[];for(let R=0;R<d;R++){const m=R*g-a;for(let f=0;f<c;f++){const S=f*p-s;T.push(S,-m,0),N.push(0,0,1),C.push(f/o),C.push(1-R/h)}}for(let R=0;R<h;R++)for(let m=0;m<o;m++){const f=m+c*R,S=m+c*(R+1),l=m+1+c*(R+1),L=m+1+c*R;w.push(f,S,L),w.push(S,l,L)}this.setIndex(w),this.setAttribute("position",new ai(T,3)),this.setAttribute("normal",new ai(N,3)),this.setAttribute("uv",new ai(C,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.width,e.height,e.widthSegments,e.heightSegments)}}class by extends ur{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new dt(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function cs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Kd(r))r.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Kd(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function vn(i){const e={};for(let t=0;t<i.length;t++){const n=cs(i[t]);for(const r in n)e[r]=n[r]}return e}function Kd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ey(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function X0(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const Ty={clone:cs,merge:vn};var Ay=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ry=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends ur{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ay,this.fragmentShader=Ry,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=Ey(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new dt().setHex(r.value);break;case"v2":this.uniforms[n].value=new wt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new de().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Dt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new st().fromArray(r.value);break;case"m4":this.uniforms[n].value=new _t().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Cy extends Si{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Iy extends ur{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ec,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new lr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rT extends Iy{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new wt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Py extends ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=y_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ly extends ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ar(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ro(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Uy(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Jd(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let h=0;h!==e;++h)r[a++]=i[o+h]}return r}function Dy(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}class sa{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let h=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(r=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Ny extends sa{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ts,endingEnd:ts}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],h=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case ns:s=e,o=2*t-n;break;case uo:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(h===void 0)switch(this.getSettings_().endingEnd){case ns:a=e,h=2*n-t;break;case uo:a=1,h=n+r[1]-r[0];break;default:a=e-1,h=t}const c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(h-n),this._offsetPrev=s*d,this._offsetNext=a*d}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=e*o,c=h-o,d=this._offsetPrev,p=this._offsetNext,g=this._weightPrev,w=this._weightNext,T=(n-t)/(r-t),N=T*T,C=N*T,R=-g*C+2*g*N-g*T,m=(1+g)*C+(-1.5-2*g)*N+(-.5+g)*T+1,f=(-1-w)*C+(1.5+w)*N+.5*T,S=w*C-w*N;for(let l=0;l!==o;++l)s[l]=R*a[d+l]+m*a[c+l]+f*a[h+l]+S*a[p+l];return s}}class q0 extends sa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=e*o,c=h-o,d=(n-t)/(r-t),p=1-d;for(let g=0;g!==o;++g)s[g]=a[c+g]*p+a[h+g]*d;return s}}class Fy extends sa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class By extends sa{interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=e*o,c=h-o,d=this.inTangents,p=this.outTangents;if(!d||!p){const T=(n-t)/(r-t),N=1-T;for(let C=0;C!==o;++C)s[C]=a[c+C]*N+a[h+C]*T;return s}const g=o*2,w=e-1;for(let T=0;T!==o;++T){const N=a[c+T],C=a[h+T],R=w*g+T*2,m=p[R],f=p[R+1],S=e*g+T*2,l=d[S],L=d[S+1],U=ky(n,t,m,l,r);s[T]=$0(U,N,f,L,C)}return s}}function $0(i,e,t,n,r){const s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function Oy(i,e,t,n,r){const s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function ky(i,e,t,n,r){let s=(i-e)/(r-e);for(let a=0;a<8;a++){const o=$0(s,e,t,n,r)-i;if(Math.abs(o)<1e-10)break;const h=Oy(s,e,t,n,r);if(Math.abs(h)<1e-10)break;s=Math.max(0,Math.min(1,s-o/h))}return s}class hi{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ar(t,this.TimeBufferType),this.values=ar(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ar(e.times,Array),values:ar(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),ro(e.settings)&&(n.settings={inTangents:ar(e.settings.inTangents,Array),outTangents:ar(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new q0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ny(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new By(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case co:t=this.InterpolantFactoryMethodDiscrete;break;case bc:t=this.InterpolantFactoryMethodLinear;break;case zl:t=this.InterpolantFactoryMethodSmooth;break;case _d:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return je("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return co;case this.InterpolantFactoryMethodLinear:return bc;case this.InterpolantFactoryMethodSmooth:return zl;case this.InterpolantFactoryMethodBezier:return _d}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;ro(this.settings)&&(Qd(this.settings.inTangents,e),Qd(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,r=n.length;let s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(rt("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(rt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const h=n[o];if(typeof h=="number"&&isNaN(h)){rt("KeyframeTrack: Time is not a valid number.",this,o,h),e=!1;break}if(a!==null&&a>h){rt("KeyframeTrack: Out of order keys.",this,o,h,a),e=!1;break}a=h}if(r!==void 0&&C_(r))for(let o=0,h=r.length;o!==h;++o){const c=r[o];if(isNaN(c)){rt("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===zl,s=e.length-1;let a=1;for(let o=1;o<s;++o){let h=!1;const c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(r)h=!0;else{const p=o*n,g=p-n,w=p+n;for(let T=0;T!==n;++T){const N=t[p+T];if(N!==t[g+T]||N!==t[w+T]){h=!0;break}}}if(h){if(o!==a){e[a]=e[o];const p=o*n,g=a*n;for(let w=0;w!==n;++w)t[g+w]=t[p+w]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,h=a*n,c=0;c!==n;++c)t[h+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,ro(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}}function Qd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}hi.prototype.ValueTypeName="";hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=bc;class vs extends hi{constructor(e,t,n){super(e,t,n)}}vs.prototype.ValueTypeName="bool";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=co;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;class Y0 extends hi{constructor(e,t,n,r){super(e,t,n,r)}}Y0.prototype.ValueTypeName="color";class iu extends hi{constructor(e,t,n,r){super(e,t,n,r)}}iu.prototype.ValueTypeName="number";class zy extends sa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=(n-t)/(r-t);let c=e*o;for(let d=c+o;c!==d;c+=4)yi.slerpFlat(s,0,a,c-o,a,c,h);return s}}class Po extends hi{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new zy(this.times,this.values,this.getValueSize(),e)}}Po.prototype.ValueTypeName="quaternion";Po.prototype.InterpolantFactoryMethodSmooth=void 0;class _s extends hi{constructor(e,t,n){super(e,t,n)}}_s.prototype.ValueTypeName="string";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=co;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;class Z0 extends hi{constructor(e,t,n,r){super(e,t,n,r)}}Z0.prototype.ValueTypeName="vector";class Ac{constructor(e="",t=-1,n=[],r=Kc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=ii(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Gy(n[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(hi.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,a=[];for(let o=0;o<s;o++){let h=[],c=[];h.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const d=Uy(h);h=Jd(h,1,d),c=Jd(c,1,d),!r&&h[0]===0&&(h.push(s),c.push(c[0])),a.push(new iu(".morphTargetInfluences["+t[o].name+"]",h,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,h=e.length;o<h;o++){const c=e[o],d=c.name.match(s);if(d&&d.length>1){const p=d[1];let g=r[p];g||(r[p]=g=[]),g.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Vy(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return iu;case"vector":case"vector2":case"vector3":case"vector4":return Z0;case"color":return Y0;case"quaternion":return Po;case"bool":case"boolean":return vs;case"string":return _s}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Gy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Vy(i.type);if(i.times===void 0){const n=[],r=[];Dy(i.keys,n,r,"value"),i.times=n,i.values=r}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),ro(i.settings)&&(t.settings={inTangents:ar(i.settings.inTangents,Float32Array),outTangents:ar(i.settings.outTangents,Float32Array)}),t}const Fi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(jd(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!jd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function jd(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Hy{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,h;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,s===!1&&r.onStart!==void 0&&r.onStart(d,a,o),s=!0},this.itemEnd=function(d){a++,r.onProgress!==void 0&&r.onProgress(d,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),h?h(d):d},this.setURLModifier=function(d){return h=d,this},this.addHandler=function(d,p){return c.push(d,p),this},this.removeHandler=function(d){const p=c.indexOf(d);return p!==-1&&c.splice(p,2),this},this.getHandler=function(d){for(let p=0,g=c.length;p<g;p+=2){const w=c[p],T=c[p+1];if(w.global&&(w.lastIndex=0),w.test(d))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Wy=new Hy;class aa{constructor(e){this.manager=e!==void 0?e:Wy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}aa.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ui={};class Xy extends Error{constructor(e,t){super(e),this.response=t}}class sT extends aa{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Fi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Ui[e]!==void 0){Ui[e].push({onLoad:t,onProgress:n,onError:r});return}Ui[e]=[],Ui[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,h=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&je("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=Ui[e],p=c.body.getReader(),g=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),w=g?parseInt(g):0,T=w!==0;let N=0;const C=new ReadableStream({start(R){m();function m(){p.read().then(({done:f,value:S})=>{if(f)R.close();else{N+=S.byteLength;const l=new ProgressEvent("progress",{lengthComputable:T,loaded:N,total:w});for(let L=0,U=d.length;L<U;L++){const M=d[L];M.onProgress&&M.onProgress(l)}R.enqueue(S),m()}},f=>{R.error(f)})}}});return new Response(C)}else throw new Xy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(h){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return c.json();default:if(o==="")return c.text();{const p=/charset="?([^;"\s]*)"?/i.exec(o),g=p&&p[1]?p[1].toLowerCase():void 0,w=new TextDecoder(g);return c.arrayBuffer().then(T=>w.decode(T))}}}).then(c=>{Fi.add(`file:${e}`,c);const d=Ui[e];delete Ui[e];for(let p=0,g=d.length;p<g;p++){const w=d[p];w.onLoad&&w.onLoad(c)}}).catch(c=>{const d=Ui[e];if(d===void 0)throw this.manager.itemError(e),c;delete Ui[e];for(let p=0,g=d.length;p<g;p++){const w=d[p];w.onError&&w.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Xr=new WeakMap;class qy extends aa{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Fi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let p=Xr.get(a);p===void 0&&(p=[],Xr.set(a,p)),p.push({onLoad:t,onError:r})}return a}const o=ea("img");function h(){d(),t&&t(this);const p=Xr.get(this)||[];for(let g=0;g<p.length;g++){const w=p[g];w.onLoad&&w.onLoad(this)}Xr.delete(this),s.manager.itemEnd(e)}function c(p){d(),r&&r(p),Fi.remove(`image:${e}`);const g=Xr.get(this)||[];for(let w=0;w<g.length;w++){const T=g[w];T.onError&&T.onError(p)}Xr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){o.removeEventListener("load",h,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",h,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Fi.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class aT extends aa{constructor(e){super(e)}load(e,t,n,r){const s=new pn,a=new qy(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Lo extends Zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const uh=new _t,ep=new de,tp=new de;class ru{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nu,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;ep.setFromMatrixPosition(e.matrixWorld),t.position.copy(ep),tp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){uh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(uh,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,h=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===js||e.reversedDepth?t.set(.5*a,0,0,.5*a+h,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+h,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(uh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const za=new de,Va=new yi,fi=new de;class K0 extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(za,Va,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(za,Va,fi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(za,Va,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(za,Va,fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const tr=new de,np=new wt,ip=new wt;class xn extends K0{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(tr.x,tr.y).multiplyScalar(-e/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(tr.x,tr.y).multiplyScalar(-e/tr.z)}getViewSize(e,t){return this.getViewBounds(e,np,ip),t.subVectors(ip,np)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const h=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/h,t-=a.offsetY*n/c,r*=a.width/h,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class $y extends ru{constructor(){super(new xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=hs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class oT extends Lo{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new $y}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Yy extends ru{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0}}class lT extends Lo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Yy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class su extends K0{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,h=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,h=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Zy extends ru{constructor(){super(new su(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ga extends Lo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new Zy}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Ky extends Lo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class hT{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const fh=new WeakMap;class cT extends aa{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&je("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&je("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Fi.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{fh.has(a)===!0?(r&&r(fh.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const h=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Fi.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),fh.set(h,c),Fi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Fi.add(`image-bitmap:${e}`,h),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const qr=-90,$r=1;class Jy extends Zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new xn(qr,$r,e,t);r.layers=this.layers,this.add(r);const s=new xn(qr,$r,e,t);s.layers=this.layers,this.add(s);const a=new xn(qr,$r,e,t);a.layers=this.layers,this.add(a);const o=new xn(qr,$r,e,t);o.layers=this.layers,this.add(o);const h=new xn(qr,$r,e,t);h.layers=this.layers,this.add(h);const c=new xn(qr,$r,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,h]=t;for(const c of t)this.remove(c);if(e===vi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,h,c,d]=this.children,p=e.getRenderTarget(),g=e.getActiveCubeFace(),w=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const N=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let C=!1;e.isWebGLRenderer===!0?C=e.state.buffers.depth.getReversed():C=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),C&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),C&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),C&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),C&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(n,4,r),C&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=N,e.setRenderTarget(n,5,r),C&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(p,g,w),e.xr.enabled=T,n.texture.needsPMREMUpdate=!0}}class Qy extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class jy{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,a;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,r=this.valueSize,s=e*r+r;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==r;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,r)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const h=t*this._origIndex;this._mixBufferRegion(n,r,h,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let h=t,c=t+t;h!==c;++h)if(n[h]!==n[h+t]){o.setValue(n,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,a=r;s!==a;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,r){yi.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){const a=this._workIndex*s;yi.multiplyQuaternionsFlat(e,a,e,t,e,n),yi.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,n,r,s){const a=1-r;for(let o=0;o!==s;++o){const h=t+o;e[h]=e[h]*a+e[n+o]*r}}_lerpAdditive(e,t,n,r,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*r}}}const au="\\[\\]\\.:\\/",e1=new RegExp("["+au+"]","g"),ou="[^"+au+"]",t1="[^"+au.replace("\\.","")+"]",n1=/((?:WC+[\/:])*)/.source.replace("WC",ou),i1=/(WCOD+)?/.source.replace("WCOD",t1),r1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ou),s1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ou),a1=new RegExp("^"+n1+i1+r1+s1+"$"),o1=["material","materials","bones","map"];class l1{constructor(e,t,n){const r=n||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Lt{constructor(e,t,n){this.path=t,this.parsedPath=n||Lt.parseTrackName(t),this.node=Lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Lt.Composite(e,t,n):new Lt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(e1,"")}static parseTrackName(e){const t=a1.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);o1.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const h=n(o.children);if(h)return h}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){je("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){rt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=t.nodeName;rt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}h=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(h=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Lt.Composite=l1;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class h1{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;const s=t.tracks,a=s.length,o=new Array(a),h={endingStart:ts,endingEnd:ts};for(let c=0;c!==a;++c){const d=s[c].createInterpolant(null);o[c]=d,d.settings=h}this._interpolantSettings=h,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=io,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const r=this._clip.duration,s=e._clip.duration,a=s/r,o=r/s;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const r=this._mixer,s=r.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);const h=o.parameterPositions,c=o.sampleValues;return h[0]=s,h[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const h=(e-s)*n;h<0||n===0?t=0:(this._startTime=null,t=n*h)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const h=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case __:for(let d=0,p=h.length;d!==p;++d)h[d].evaluate(a),c[d].accumulateAdditive(o);break;case Kc:default:for(let d=0,p=h.length;d!==p;++d)h[d].evaluate(a),c[d].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let r=this.time+e,s=this._loopCount;const a=n===v_;if(e===0)return s===-1?r:a&&(s&1)===1?t-r:r;if(n===xc){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){const o=Math.floor(r/t);r-=t*o,s+=Math.abs(o);const h=this.repetitions-s;if(h<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(h===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=s,this.time=r;if(a&&(s&1)===1)return t-r}return r}_setEndings(e,t,n){const r=this._interpolantSettings;n?(r.endingStart=ns,r.endingEnd=ns):(e?r.endingStart=this.zeroSlopeAtStart?ns:ts:r.endingStart=uo,t?r.endingEnd=this.zeroSlopeAtEnd?ns:ts:r.endingEnd=uo)}_scheduleFading(e,t,n){const r=this._mixer,s=r.time;let a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,h=a.sampleValues;return o[0]=s,h[0]=t,o[1]=s+e,h[1]=n,this}}const c1=new Float32Array(1);class u1 extends hr{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,a=e._propertyBindings,o=e._interpolants,h=n.uuid,c=this._bindingsByRootAndName;let d=c[h];d===void 0&&(d={},c[h]=d);for(let p=0;p!==s;++p){const g=r[p],w=g.name;let T=d[w];if(T!==void 0)++T.referenceCount,a[p]=T;else{if(T=a[p],T!==void 0){T._cacheIndex===null&&(++T.referenceCount,this._addInactiveBinding(T,h,w));continue}const N=t&&t._propertyBindings[p].binding.parsedPath;T=new jy(Lt.create(n,w,N),g.ValueTypeName,g.getValueSize()),++T.referenceCount,this._addInactiveBinding(T,h,w),a[p]=T}o[p].resultBuffer=T.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const r=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],h=o.knownActions,c=h[h.length-1],d=e._byClipCacheIndex;c._byClipCacheIndex=d,h[d]=c,h.pop(),e._byClipCacheIndex=null;const p=o.actionByRoot,g=(e._localRoot||this._root).uuid;delete p[g],h.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const r=this._bindingsByRootAndName,s=this._bindings;let a=r[t];a===void 0&&(a={},r[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[r],h=t[t.length-1],c=e._cacheIndex;h._cacheIndex=c,t[c]=h,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[r]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new q0(new Float32Array(2),new Float32Array(2),1,c1),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const r=t||this._root,s=r.uuid;let a=typeof e=="string"?Ac.findByName(r,e):e;const o=a!==null?a.uuid:e,h=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Kc),h!==void 0){const p=h.actionByRoot[s];if(p!==void 0&&p.blendMode===n)return p;c=h.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const d=new h1(this,a,t,n);return this._bindAction(d,c),this._addInactiveAction(d,o,s),d}existingAction(e,t){const n=t||this._root,r=n.uuid,s=typeof e=="string"?Ac.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(r,e,s,a);const o=this._bindings,h=this._nActiveBindings;for(let c=0;c!==h;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){const a=s.knownActions;for(let o=0,h=a.length;o!==h;++o){const c=a[o];this._deactivateAction(c);const d=c._cacheIndex,p=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,p._cacheIndex=d,t[d]=p,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,h=o[t];h!==void 0&&(this._deactivateAction(h),this._removeInactiveAction(h))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class f1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,je("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const ku=class ku{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};ku.prototype.isMatrix2=!0;let rp=ku;function sp(i,e,t,n){const r=d1(n);switch(t){case I0:return i*e;case qc:return i*e/r.components*r.byteLength;case $c:return i*e/r.components*r.byteLength;case Pr:return i*e*2/r.components*r.byteLength;case Yc:return i*e*2/r.components*r.byteLength;case P0:return i*e*3/r.components*r.byteLength;case Vn:return i*e*4/r.components*r.byteLength;case Zc:return i*e*4/r.components*r.byteLength;case ja:case eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case to:case no:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yh:case Kh:return Math.max(i,16)*Math.max(e,8)/4;case $h:case Zh:return Math.max(i,8)*Math.max(e,8)/2;case Jh:case Qh:case ec:case tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case jh:case lo:case nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case sc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ac:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case oc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case lc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case hc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case cc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case uc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case fc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case dc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case pc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case mc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case gc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case vc:case _c:case yc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Mc:case wc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ho:case Sc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function d1(i){switch(i){case Ln:case T0:return{byteLength:1,components:1};case Js:case A0:case wi:return{byteLength:2,components:1};case Wc:case Xc:return{byteLength:2,components:4};case Mi:case Hc:case zn:return{byteLength:4,components:1};case R0:case C0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gc}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function J0(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function p1(i){const e=new WeakMap;function t(o,h){const c=o.array,d=o.usage,p=c.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,c,d),o.onUploadCallback();let w;if(c instanceof Float32Array)w=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)w=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?w=i.HALF_FLOAT:w=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)w=i.SHORT;else if(c instanceof Uint32Array)w=i.UNSIGNED_INT;else if(c instanceof Int32Array)w=i.INT;else if(c instanceof Int8Array)w=i.BYTE;else if(c instanceof Uint8Array)w=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)w=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:g,type:w,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,h,c){const d=h.array,p=h.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,d);else{p.sort((w,T)=>w.start-T.start);let g=0;for(let w=1;w<p.length;w++){const T=p[g],N=p[w];N.start<=T.start+T.count+1?T.count=Math.max(T.count,N.start+N.count-T.start):(++g,p[g]=N)}p.length=g+1;for(let w=0,T=p.length;w<T;w++){const N=p[w];i.bufferSubData(c,N.start*d.BYTES_PER_ELEMENT,d,N.start,N.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const h=e.get(o);h&&(i.deleteBuffer(h.buffer),e.delete(o))}function a(o,h){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,h));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,h),c.version=o.version}}return{get:r,remove:s,update:a}}var m1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,g1=`#ifdef USE_ALPHAHASH
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
#endif`,v1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,y1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,M1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w1=`#ifdef USE_AOMAP
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
#endif`,S1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x1=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,b1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,E1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,T1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,R1=`#ifdef USE_IRIDESCENCE
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
#endif`,C1=`#ifdef USE_BUMPMAP
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
#endif`,I1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,P1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,L1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,N1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,F1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,B1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,O1=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,k1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,z1=`vec3 transformedNormal = objectNormal;
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
#endif`,V1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,G1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,H1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,W1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,X1="gl_FragColor = linearToOutputTexel( gl_FragColor );",q1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Y1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Z1=`#ifdef USE_ENVMAP
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
#endif`,K1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Q1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nM=`#ifdef USE_GRADIENTMAP
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
}`,iM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aM=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,oM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,lM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,dM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pM=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,_M=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,SM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,EM=`#if defined( USE_POINTS_UV )
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
#endif`,TM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PM=`#ifdef USE_MORPHTARGETS
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
#endif`,LM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,DM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,NM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,OM=`#ifdef USE_NORMALMAP
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
#endif`,kM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,XM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$M=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,KM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,QM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,jM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,ew=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,tw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nw=`#ifdef USE_SKINNING
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
#endif`,iw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rw=`#ifdef USE_SKINNING
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
#endif`,sw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ow=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hw=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cw=`#ifdef USE_TRANSMISSION
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
#endif`,uw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gw=`uniform sampler2D t2D;
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
}`,vw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_w=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ww=`#include <common>
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
}`,Sw=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xw=`#define DISTANCE
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
}`,bw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ew=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Aw=`uniform float scale;
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
}`,Rw=`uniform vec3 diffuse;
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
}`,Cw=`#include <common>
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
}`,Iw=`uniform vec3 diffuse;
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
}`,Pw=`#define LAMBERT
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
}`,Lw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Uw=`#define MATCAP
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
}`,Dw=`#define MATCAP
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
}`,Nw=`#define NORMAL
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
}`,Fw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bw=`#define PHONG
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
}`,Ow=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,kw=`#define STANDARD
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
}`,zw=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Vw=`#define TOON
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
}`,Gw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Hw=`uniform float size;
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
}`,Ww=`uniform vec3 diffuse;
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
}`,Xw=`#include <common>
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
}`,qw=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,$w=`uniform float rotation;
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
}`,Yw=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:m1,alphahash_pars_fragment:g1,alphamap_fragment:v1,alphamap_pars_fragment:_1,alphatest_fragment:y1,alphatest_pars_fragment:M1,aomap_fragment:w1,aomap_pars_fragment:S1,batching_pars_vertex:x1,batching_vertex:b1,begin_vertex:E1,beginnormal_vertex:T1,bsdfs:A1,iridescence_fragment:R1,bumpmap_pars_fragment:C1,clipping_planes_fragment:I1,clipping_planes_pars_fragment:P1,clipping_planes_pars_vertex:L1,clipping_planes_vertex:U1,color_fragment:D1,color_pars_fragment:N1,color_pars_vertex:F1,color_vertex:B1,common:O1,cube_uv_reflection_fragment:k1,defaultnormal_vertex:z1,displacementmap_pars_vertex:V1,displacementmap_vertex:G1,emissivemap_fragment:H1,emissivemap_pars_fragment:W1,colorspace_fragment:X1,colorspace_pars_fragment:q1,envmap_fragment:$1,envmap_common_pars_fragment:Y1,envmap_pars_fragment:Z1,envmap_pars_vertex:K1,envmap_physical_pars_fragment:oM,envmap_vertex:J1,fog_vertex:Q1,fog_pars_vertex:j1,fog_fragment:eM,fog_pars_fragment:tM,gradientmap_pars_fragment:nM,lightmap_pars_fragment:iM,lights_lambert_fragment:rM,lights_lambert_pars_fragment:sM,lights_pars_begin:aM,lights_toon_fragment:lM,lights_toon_pars_fragment:hM,lights_phong_fragment:cM,lights_phong_pars_fragment:uM,lights_physical_fragment:fM,lights_physical_pars_fragment:dM,lights_fragment_begin:pM,lights_fragment_maps:mM,lights_fragment_end:gM,lightprobes_pars_fragment:vM,logdepthbuf_fragment:_M,logdepthbuf_pars_fragment:yM,logdepthbuf_pars_vertex:MM,logdepthbuf_vertex:wM,map_fragment:SM,map_pars_fragment:xM,map_particle_fragment:bM,map_particle_pars_fragment:EM,metalnessmap_fragment:TM,metalnessmap_pars_fragment:AM,morphinstance_vertex:RM,morphcolor_vertex:CM,morphnormal_vertex:IM,morphtarget_pars_vertex:PM,morphtarget_vertex:LM,normal_fragment_begin:UM,normal_fragment_maps:DM,normal_pars_fragment:NM,normal_pars_vertex:FM,normal_vertex:BM,normalmap_pars_fragment:OM,clearcoat_normal_fragment_begin:kM,clearcoat_normal_fragment_maps:zM,clearcoat_pars_fragment:VM,iridescence_pars_fragment:GM,opaque_fragment:HM,packing:WM,premultiplied_alpha_fragment:XM,project_vertex:qM,dithering_fragment:$M,dithering_pars_fragment:YM,roughnessmap_fragment:ZM,roughnessmap_pars_fragment:KM,shadowmap_pars_fragment:JM,shadowmap_pars_vertex:QM,shadowmap_vertex:jM,shadowmask_pars_fragment:ew,skinbase_vertex:tw,skinning_pars_vertex:nw,skinning_vertex:iw,skinnormal_vertex:rw,specularmap_fragment:sw,specularmap_pars_fragment:aw,tonemapping_fragment:ow,tonemapping_pars_fragment:lw,transmission_fragment:hw,transmission_pars_fragment:cw,uv_pars_fragment:uw,uv_pars_vertex:fw,uv_vertex:dw,worldpos_vertex:pw,background_vert:mw,background_frag:gw,backgroundCube_vert:vw,backgroundCube_frag:_w,cube_vert:yw,cube_frag:Mw,depth_vert:ww,depth_frag:Sw,distance_vert:xw,distance_frag:bw,equirect_vert:Ew,equirect_frag:Tw,linedashed_vert:Aw,linedashed_frag:Rw,meshbasic_vert:Cw,meshbasic_frag:Iw,meshlambert_vert:Pw,meshlambert_frag:Lw,meshmatcap_vert:Uw,meshmatcap_frag:Dw,meshnormal_vert:Nw,meshnormal_frag:Fw,meshphong_vert:Bw,meshphong_frag:Ow,meshphysical_vert:kw,meshphysical_frag:zw,meshtoon_vert:Vw,meshtoon_frag:Gw,points_vert:Hw,points_frag:Ww,shadow_vert:Xw,shadow_frag:qw,sprite_vert:$w,sprite_frag:Yw},Xe={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new de},probesMax:{value:new de},probesResolution:{value:new de}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},gi={basic:{uniforms:vn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:vn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new dt(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:vn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:vn([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:vn([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new dt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:vn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:vn([Xe.points,Xe.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:vn([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:vn([Xe.common,Xe.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:vn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:vn([Xe.sprite,Xe.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:vn([Xe.common,Xe.displacementmap,{referencePosition:{value:new de},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:vn([Xe.lights,Xe.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};gi.physical={uniforms:vn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Ha={r:0,b:0,g:0},Zw=new _t,Q0=new st;Q0.set(-1,0,0,0,1,0,0,0,1);function Kw(i,e,t,n,r,s){const a=new dt(0);let o=r===!0?0:1,h,c,d=null,p=0,g=null;function w(m){let f=m.isScene===!0?m.background:null;if(f&&f.isTexture){const S=m.backgroundBlurriness>0;f=e.get(f,S)}return f}function T(m){let f=!1;const S=w(m);S===null?C(a,o):S&&S.isColor&&(C(S,1),f=!0);const l=i.xr.getEnvironmentBlendMode();l==="additive"?t.buffers.color.setClear(0,0,0,1,s):l==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||f)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function N(m,f){const S=w(f);S&&(S.isCubeTexture||S.mapping===Co)?(c===void 0&&(c=new Nn(new ia(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:cs(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(l,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Zw.makeRotationFromEuler(f.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Q0),c.material.toneMapped=Mt.getTransfer(S.colorSpace)!==It,(d!==S||p!==S.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,d=S,p=S.version,g=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(h===void 0&&(h=new Nn(new ra(2,2),new Si({name:"BackgroundMaterial",uniforms:cs(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=S,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Mt.getTransfer(S.colorSpace)!==It,S.matrixAutoUpdate===!0&&S.updateMatrix(),h.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||p!==S.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,d=S,p=S.version,g=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function C(m,f){m.getRGB(Ha,X0(i)),t.buffers.color.setClear(Ha.r,Ha.g,Ha.b,f,s)}function R(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),o=f,C(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,C(a,o)},render:T,addToRenderList:N,dispose:R}}function Jw(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=g(null);let s=r,a=!1;function o(_,u,E,I,D){let k=!1;const z=p(_,I,E,u);s!==z&&(s=z,c(s.object)),k=w(_,I,E,D),k&&T(_,I,E,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,S(_,u,E,I),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function h(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function d(_){return i.deleteVertexArray(_)}function p(_,u,E,I){const D=I.wireframe===!0;let k=n[u.id];k===void 0&&(k={},n[u.id]=k);const z=_.isInstancedMesh===!0?_.id:0;let G=k[z];G===void 0&&(G={},k[z]=G);let O=G[E.id];O===void 0&&(O={},G[E.id]=O);let x=O[D];return x===void 0&&(x=g(h()),O[D]=x),x}function g(_){const u=[],E=[],I=[];for(let D=0;D<t;D++)u[D]=0,E[D]=0,I[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:u,enabledAttributes:E,attributeDivisors:I,object:_,attributes:{},index:null}}function w(_,u,E,I){const D=s.attributes,k=u.attributes;let z=0;const G=E.getAttributes();for(const O in G)if(G[O].location>=0){const B=D[O];let J=k[O];if(J===void 0&&(O==="instanceMatrix"&&_.instanceMatrix&&(J=_.instanceMatrix),O==="instanceColor"&&_.instanceColor&&(J=_.instanceColor)),B===void 0||B.attribute!==J||J&&B.data!==J.data)return!0;z++}return s.attributesNum!==z||s.index!==I}function T(_,u,E,I){const D={},k=u.attributes;let z=0;const G=E.getAttributes();for(const O in G)if(G[O].location>=0){let B=k[O];B===void 0&&(O==="instanceMatrix"&&_.instanceMatrix&&(B=_.instanceMatrix),O==="instanceColor"&&_.instanceColor&&(B=_.instanceColor));const J={};J.attribute=B,B&&B.data&&(J.data=B.data),D[O]=J,z++}s.attributes=D,s.attributesNum=z,s.index=I}function N(){const _=s.newAttributes;for(let u=0,E=_.length;u<E;u++)_[u]=0}function C(_){R(_,0)}function R(_,u){const E=s.newAttributes,I=s.enabledAttributes,D=s.attributeDivisors;E[_]=1,I[_]===0&&(i.enableVertexAttribArray(_),I[_]=1),D[_]!==u&&(i.vertexAttribDivisor(_,u),D[_]=u)}function m(){const _=s.newAttributes,u=s.enabledAttributes;for(let E=0,I=u.length;E<I;E++)u[E]!==_[E]&&(i.disableVertexAttribArray(E),u[E]=0)}function f(_,u,E,I,D,k,z){z===!0?i.vertexAttribIPointer(_,u,E,D,k):i.vertexAttribPointer(_,u,E,I,D,k)}function S(_,u,E,I){N();const D=I.attributes,k=E.getAttributes(),z=u.defaultAttributeValues;for(const G in k){const O=k[G];if(O.location>=0){let x=D[G];if(x===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(x=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(x=_.instanceColor)),x!==void 0){const B=x.normalized,J=x.itemSize,j=e.get(x);if(j===void 0)continue;const ie=j.buffer,ue=j.type,fe=j.bytesPerElement,K=ue===i.INT||ue===i.UNSIGNED_INT||x.gpuType===Hc;if(x.isInterleavedBufferAttribute){const ne=x.data,ae=ne.stride,le=x.offset;if(ne.isInstancedInterleavedBuffer){for(let xe=0;xe<O.locationSize;xe++)R(O.location+xe,ne.meshPerAttribute);_.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let xe=0;xe<O.locationSize;xe++)C(O.location+xe);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let xe=0;xe<O.locationSize;xe++)f(O.location+xe,J/O.locationSize,ue,B,ae*fe,(le+J/O.locationSize*xe)*fe,K)}else{if(x.isInstancedBufferAttribute){for(let ne=0;ne<O.locationSize;ne++)R(O.location+ne,x.meshPerAttribute);_.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=x.meshPerAttribute*x.count)}else for(let ne=0;ne<O.locationSize;ne++)C(O.location+ne);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let ne=0;ne<O.locationSize;ne++)f(O.location+ne,J/O.locationSize,ue,B,J*fe,J/O.locationSize*ne*fe,K)}}else if(z!==void 0){const B=z[G];if(B!==void 0)switch(B.length){case 2:i.vertexAttrib2fv(O.location,B);break;case 3:i.vertexAttrib3fv(O.location,B);break;case 4:i.vertexAttrib4fv(O.location,B);break;default:i.vertexAttrib1fv(O.location,B)}}}}m()}function l(){b();for(const _ in n){const u=n[_];for(const E in u){const I=u[E];for(const D in I){const k=I[D];for(const z in k)d(k[z].object),delete k[z];delete I[D]}}delete n[_]}}function L(_){if(n[_.id]===void 0)return;const u=n[_.id];for(const E in u){const I=u[E];for(const D in I){const k=I[D];for(const z in k)d(k[z].object),delete k[z];delete I[D]}}delete n[_.id]}function U(_){for(const u in n){const E=n[u];for(const I in E){const D=E[I];if(D[_.id]===void 0)continue;const k=D[_.id];for(const z in k)d(k[z].object),delete k[z];delete D[_.id]}}}function M(_){for(const u in n){const E=n[u],I=_.isInstancedMesh===!0?_.id:0,D=E[I];if(D!==void 0){for(const k in D){const z=D[k];for(const G in z)d(z[G].object),delete z[G];delete D[k]}delete E[I],Object.keys(E).length===0&&delete n[u]}}}function b(){P(),a=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:P,dispose:l,releaseStatesOfGeometry:L,releaseStatesOfObject:M,releaseStatesOfProgram:U,initAttributes:N,enableAttribute:C,disableUnusedAttributes:m}}function Qw(i,e,t){let n;function r(h){n=h}function s(h,c){i.drawArrays(n,h,c),t.update(c,n,1)}function a(h,c,d){d!==0&&(i.drawArraysInstanced(n,h,c,d),t.update(c,n,d))}function o(h,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,c,0,d);let g=0;for(let w=0;w<d;w++)g+=c[w];t.update(g,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function jw(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(U){return!(U!==Vn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){const M=U===wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Ln&&U!==zn&&!M&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function h(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=h(c);d!==c&&(je("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const w=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=i.getParameter(i.MAX_TEXTURE_SIZE),C=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),R=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),l=i.getParameter(i.MAX_SAMPLES),L=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:h,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:g,maxTextures:w,maxVertexTextures:T,maxTextureSize:N,maxCubemapSize:C,maxAttributes:R,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:S,maxSamples:l,samples:L}}function eS(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new sr,o=new st,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(p,g){const w=p.length!==0||g||n!==0||r;return r=g,n=p.length,w},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,g){t=d(p,g,0)},this.setState=function(p,g,w){const T=p.clippingPlanes,N=p.clipIntersection,C=p.clipShadows,R=i.get(p);if(!r||T===null||T.length===0||s&&!C)s?d(null):c();else{const m=s?0:n,f=m*4;let S=R.clippingState||null;h.value=S,S=d(T,g,f,w);for(let l=0;l!==f;++l)S[l]=t[l];R.clippingState=S,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=m}};function c(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,g,w,T){const N=p!==null?p.length:0;let C=null;if(N!==0){if(C=h.value,T!==!0||C===null){const R=w+N*4,m=g.matrixWorldInverse;o.getNormalMatrix(m),(C===null||C.length<R)&&(C=new Float32Array(R));for(let f=0,S=w;f!==N;++f,S+=4)a.copy(p[f]).applyMatrix4(m,o),a.normal.toArray(C,S),C[S+3]=a.constant}h.value=C,h.needsUpdate=!0}return e.numPlanes=N,e.numIntersection=0,C}}const is=4,tS=6,nS=20,iS=256,Ds=new su,ap=new dt;let dh=null,ph=0,mh=0,gh=!1;const rS=new de,yr=new de;class op{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=rS}=s;dh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,n,r,h,o),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(dh,ph,mh),this._renderer.xr.enabled=gh,e.scissorTest=!1,Yr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ir||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:wi,format:Vn,colorSpace:fo,depthBuffer:!1},r=lp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lp(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=sS(s)),this._blurMaterial=oS(s,e,t),this._ggxMaterial=aS(s,e,t)}return r}_compileMaterial(e){const t=new Nn(new li,e);this._renderer.compile(t,Ds)}_sceneToCubeUV(e,t,n,r,s){const h=new xn(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,w=p.toneMapping;p.getClearColor(ap),p.toneMapping=_i,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Nn(new ia,new z0({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));const N=this._backgroundBox,C=N.material;let R=!1;const m=e.background;m?m.isColor&&(C.color.copy(m),e.background=null,R=!0):(C.color.copy(ap),R=!0);for(let f=0;f<6;f++){const S=f%3;S===0?(h.up.set(0,c[f],0),h.position.set(s.x,s.y,s.z),h.lookAt(s.x+d[f],s.y,s.z)):S===1?(h.up.set(0,0,c[f]),h.position.set(s.x,s.y,s.z),h.lookAt(s.x,s.y+d[f],s.z)):(h.up.set(0,c[f],0),h.position.set(s.x,s.y,s.z),h.lookAt(s.x,s.y,s.z+d[f]));const l=this._cubeSize;Yr(r,S*l,f>2?l:0,l,l),p.setRenderTarget(r),R&&p.render(N,h),p.render(e,h)}p.toneMapping=w,p.autoClear=g,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ir||e.mapping===ls;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const h=this._cubeSize;Yr(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(a,Ds)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const h=a.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),p=Math.sqrt(c*c-d*d),g=c*1.25,w=p*g,{_lodMax:T}=this,N=this._sizeLods[n],C=3*N*(n>T-is?n-T+is:0),R=4*(this._cubeSize-N);h.envMap.value=e.texture,h.roughness.value=w,h.mipInt.value=T-t,Yr(s,C,R,3*N,2*N),r.setRenderTarget(s),r.render(o,Ds),h.envMap.value=s.texture,h.roughness.value=0,h.mipInt.value=T-n,Yr(e,C,R,3*N,2*N),r.setRenderTarget(e),r.render(o,Ds)}_blur(e,t,n,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){const a=this._renderer,o=this._blurMaterial,h=this._lodMeshes[r];h.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;const d=this._sizeLods[r],p=3*d*(r>this._lodMax-is?r-this._lodMax+is:0),g=4*(this._cubeSize-d);Yr(t,p,g,3*d,2*d),a.setRenderTarget(t),a.render(h,Ds)}}function sS(i){const e=[],t=[];let n=i;const r=i-is+1+tS;for(let s=0;s<r;s++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),h=-o,c=1+o,d=[h,h,c,h,c,c,h,h,c,c,h,c],p=6,g=6,w=3,T=new Float32Array(w*g*p),N=new Float32Array(w*g*p);for(let R=0;R<p;R++){const m=R%3*2/3-1,f=R>2?0:-1,S=[m,f,0,m+2/3,f,0,m+2/3,f+1,0,m,f,0,m+2/3,f+1,0,m,f+1,0];T.set(S,w*g*R);for(let l=0;l<g;l++){const L=d[l*2]*2-1,U=d[l*2+1]*2-1;R===0?yr.set(1,U,L):R===1?yr.set(-L,1,-U):R===2?yr.set(-L,U,1):R===3?yr.set(-1,U,-L):R===4?yr.set(-L,-1,U):yr.set(L,U,-1),yr.toArray(N,(R*g+l)*w)}}const C=new li;C.setAttribute("position",new si(T,w)),C.setAttribute("outputDirection",new si(N,w)),t.push(new Nn(C,null)),n>is&&n--}return{lodMeshes:t,sizeLods:e}}function lp(i,e,t){const n=new ri(i,e,t);return n.texture.mapping=Co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function aS(i,e,t){return new Si({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function oS(i,e,t){return new Si({name:"SphericalGaussianBlur",defines:{SAMPLES:nS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Uo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function hp(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uo(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function cp(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Uo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class j0 extends ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new H0(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ia(5,5,5),s=new Si({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:Oi});s.uniforms.tEquirect.value=t;const a=new Nn(r,s),o=t.minFilter;return t.minFilter===Tr&&(t.minFilter=dn),new Jy(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function lS(i){let e=new WeakMap,t=new WeakMap,n=null;function r(g,w=!1){return g==null?null:w?a(g):s(g)}function s(g){if(g&&g.isTexture){const w=g.mapping;if(w===Bl||w===Ol)if(e.has(g)){const T=e.get(g).texture;return o(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const N=new j0(T.height);return N.fromEquirectangularTexture(i,g),e.set(g,N),g.addEventListener("dispose",c),o(N.texture,g.mapping)}else return null}}return g}function a(g){if(g&&g.isTexture){const w=g.mapping,T=w===Bl||w===Ol,N=w===Ir||w===ls;if(T||N){let C=t.get(g);const R=C!==void 0?C.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==R)return n===null&&(n=new op(i)),C=T?n.fromEquirectangular(g,C):n.fromCubemap(g,C),C.texture.pmremVersion=g.pmremVersion,t.set(g,C),C.texture;if(C!==void 0)return C.texture;{const m=g.image;return T&&m&&m.height>0||N&&m&&h(m)?(n===null&&(n=new op(i)),C=T?n.fromEquirectangular(g):n.fromCubemap(g),C.texture.pmremVersion=g.pmremVersion,t.set(g,C),g.addEventListener("dispose",d),C.texture):null}}}return g}function o(g,w){return w===Bl?g.mapping=Ir:w===Ol&&(g.mapping=ls),g}function h(g){let w=0;const T=6;for(let N=0;N<T;N++)g[N]!==void 0&&w++;return w===T}function c(g){const w=g.target;w.removeEventListener("dispose",c);const T=e.get(w);T!==void 0&&(e.delete(w),T.dispose())}function d(g){const w=g.target;w.removeEventListener("dispose",d);const T=t.get(w);T!==void 0&&(t.delete(w),T.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:p}}function hS(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&rs("WebGLRenderer: "+n+" extension not supported."),r}}}function cS(i,e,t,n){const r={},s=new WeakMap;function a(p){const g=p.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",a),delete r[g.id];const w=s.get(g);w&&(e.remove(w),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function o(p,g){return r[g.id]===!0||(g.addEventListener("dispose",a),r[g.id]=!0,t.memory.geometries++),g}function h(p){const g=p.attributes;for(const w in g)e.update(g[w],i.ARRAY_BUFFER)}function c(p){const g=[],w=p.index,T=p.attributes.position;let N=0;if(T===void 0)return;if(w!==null){const m=w.array;N=w.version;for(let f=0,S=m.length;f<S;f+=3){const l=m[f+0],L=m[f+1],U=m[f+2];g.push(l,L,L,U,U,l)}}else{const m=T.array;N=T.version;for(let f=0,S=m.length/3-1;f<S;f+=3){const l=f+0,L=f+1,U=f+2;g.push(l,L,L,U,U,l)}}const C=new(T.count>=65535?O0:B0)(g,1);C.version=N;const R=s.get(p);R&&e.remove(R),s.set(p,C)}function d(p){const g=s.get(p);if(g){const w=p.index;w!==null&&g.version<w.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:h,getWireframeAttribute:d}}function uS(i,e,t){let n;function r(p){n=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function h(p,g){i.drawElements(n,g,s,p*a),t.update(g,n,1)}function c(p,g,w){w!==0&&(i.drawElementsInstanced(n,g,s,p*a,w),t.update(g,n,w))}function d(p,g,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,s,p,0,w);let N=0;for(let C=0;C<w;C++)N+=g[C];t.update(N,n,1)}this.setMode=r,this.setIndex=o,this.render=h,this.renderInstances=c,this.renderMultiDraw=d}function fS(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:rt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function dS(i,e,t){const n=new WeakMap,r=new Dt;function s(a,o,h){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let g=n.get(o);if(g===void 0||g.count!==p){let w=function(){M.dispose(),n.delete(o),o.removeEventListener("dispose",w)};g!==void 0&&g.texture.dispose();const T=o.morphAttributes.position!==void 0,N=o.morphAttributes.normal!==void 0,C=o.morphAttributes.color!==void 0,R=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],f=o.morphAttributes.color||[];let S=0;T===!0&&(S=1),N===!0&&(S=2),C===!0&&(S=3);let l=o.attributes.position.count*S,L=1;l>e.maxTextureSize&&(L=Math.ceil(l/e.maxTextureSize),l=e.maxTextureSize);const U=new Float32Array(l*L*4*p),M=new D0(U,l,L,p);M.type=zn,M.needsUpdate=!0;const b=S*4;for(let P=0;P<p;P++){const _=R[P],u=m[P],E=f[P],I=l*L*4*P;for(let D=0;D<_.count;D++){const k=D*b;T===!0&&(r.fromBufferAttribute(_,D),U[I+k+0]=r.x,U[I+k+1]=r.y,U[I+k+2]=r.z,U[I+k+3]=0),N===!0&&(r.fromBufferAttribute(u,D),U[I+k+4]=r.x,U[I+k+5]=r.y,U[I+k+6]=r.z,U[I+k+7]=0),C===!0&&(r.fromBufferAttribute(E,D),U[I+k+8]=r.x,U[I+k+9]=r.y,U[I+k+10]=r.z,U[I+k+11]=E.itemSize===4?r.w:1)}}g={count:p,texture:M,size:new wt(l,L)},n.set(o,g),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let w=0;for(let N=0;N<c.length;N++)w+=c[N];const T=o.morphTargetsRelative?1:1-w;h.getUniforms().setValue(i,"morphTargetBaseInfluence",T),h.getUniforms().setValue(i,"morphTargetInfluences",c)}h.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:s}}function pS(i,e,t,n,r){let s=new WeakMap;function a(c){const d=r.render.frame,p=c.geometry,g=e.get(c,p);if(s.get(g)!==d&&(e.update(g),s.set(g,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",h)===!1&&c.addEventListener("dispose",h),s.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const w=c.skeleton;s.get(w)!==d&&(w.update(),s.set(w,d))}return g}function o(){s=new WeakMap}function h(c){const d=c.target;d.removeEventListener("dispose",h),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const mS={[_0]:"LINEAR_TONE_MAPPING",[y0]:"REINHARD_TONE_MAPPING",[M0]:"CINEON_TONE_MAPPING",[w0]:"ACES_FILMIC_TONE_MAPPING",[x0]:"AGX_TONE_MAPPING",[b0]:"NEUTRAL_TONE_MAPPING",[S0]:"CUSTOM_TONE_MAPPING"};function gS(i,e,t,n,r,s){const a=new ri(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,h=null;const c=new li;c.setAttribute("position",new ai([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ai([0,2,0,0,2,0],2));const d=new Cy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Nn(c,d),g=new su(-1,1,1,-1,0,1);let w=null,T=null,N=!1,C,R=null,m=[],f=!1;this.setSize=function(S,l){a.setSize(S,l),o!==null&&o.setSize(S,l),h!==null&&h.setSize(S,l);for(let L=0;L<m.length;L++){const U=m[L];U.setSize&&U.setSize(S,l)}},this.setEffects=function(S){m=S,f=m.length>0&&m[0].isRenderPass===!0;const l=a.width,L=a.height;m.length>0&&o===null&&(o=new ri(l,L,{type:wi,depthBuffer:!1,stencilBuffer:!1}),h=new ri(l,L,{type:wi,depthBuffer:!1,stencilBuffer:!1}));for(let U=0;U<m.length;U++){const M=m[U];M.setSize&&M.setSize(l,L)}},this.begin=function(S,l){if(N||S.toneMapping===_i&&m.length===0)return!1;if(R=l,l!==null){const L=l.width,U=l.height;(a.width!==L||a.height!==U)&&this.setSize(L,U)}return f===!1&&S.setRenderTarget(a),C=S.toneMapping,S.toneMapping=_i,!0},this.hasRenderPass=function(){return f},this.end=function(S,l){S.toneMapping=C,N=!0;let L=a,U=o;for(let M=0;M<m.length;M++){const b=m[M];b.enabled!==!1&&(b.render(S,U,L,l),b.needsSwap!==!1&&(L=U,U=U===o?h:o))}if(w!==S.outputColorSpace||T!==S.toneMapping){w=S.outputColorSpace,T=S.toneMapping,d.defines={},Mt.getTransfer(w)===It&&(d.defines.SRGB_TRANSFER="");const M=mS[T];M&&(d.defines[M]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=L.texture,S.setRenderTarget(R),S.render(p,g),R=null,N=!1},this.isCompositing=function(){return N},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),h!==null&&h.dispose(),c.dispose(),d.dispose()}}const em=new pn,Rc=new ta(1,1),tm=new D0,nm=new ey,im=new H0,up=[],fp=[],dp=new Float32Array(16),pp=new Float32Array(9),mp=new Float32Array(4);function ys(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=up[r];if(s===void 0&&(s=new Float32Array(r),up[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function en(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Do(i,e){let t=fp[e];t===void 0&&(t=new Int32Array(e),fp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function vS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function _S(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2fv(this.addr,e),en(t,e)}}function yS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;i.uniform3fv(this.addr,e),en(t,e)}}function MS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4fv(this.addr,e),en(t,e)}}function wS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(jt(t,n))return;mp.set(n),i.uniformMatrix2fv(this.addr,!1,mp),en(t,n)}}function SS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(jt(t,n))return;pp.set(n),i.uniformMatrix3fv(this.addr,!1,pp),en(t,n)}}function xS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(jt(t,n))return;dp.set(n),i.uniformMatrix4fv(this.addr,!1,dp),en(t,n)}}function bS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ES(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2iv(this.addr,e),en(t,e)}}function TS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3iv(this.addr,e),en(t,e)}}function AS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4iv(this.addr,e),en(t,e)}}function RS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function CS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2uiv(this.addr,e),en(t,e)}}function IS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3uiv(this.addr,e),en(t,e)}}function PS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4uiv(this.addr,e),en(t,e)}}function LS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Rc.compareFunction=t.isReversedDepthBuffer()?Qc:Jc,s=Rc):s=em,t.setTexture2D(e||s,r)}function US(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||nm,r)}function DS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||im,r)}function NS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||tm,r)}function FS(i){switch(i){case 5126:return vS;case 35664:return _S;case 35665:return yS;case 35666:return MS;case 35674:return wS;case 35675:return SS;case 35676:return xS;case 5124:case 35670:return bS;case 35667:case 35671:return ES;case 35668:case 35672:return TS;case 35669:case 35673:return AS;case 5125:return RS;case 36294:return CS;case 36295:return IS;case 36296:return PS;case 35678:case 36198:case 36298:case 36306:case 35682:return LS;case 35679:case 36299:case 36307:return US;case 35680:case 36300:case 36308:case 36293:return DS;case 36289:case 36303:case 36311:case 36292:return NS}}function BS(i,e){i.uniform1fv(this.addr,e)}function OS(i,e){const t=ys(e,this.size,2);i.uniform2fv(this.addr,t)}function kS(i,e){const t=ys(e,this.size,3);i.uniform3fv(this.addr,t)}function zS(i,e){const t=ys(e,this.size,4);i.uniform4fv(this.addr,t)}function VS(i,e){const t=ys(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function GS(i,e){const t=ys(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function HS(i,e){const t=ys(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function WS(i,e){i.uniform1iv(this.addr,e)}function XS(i,e){i.uniform2iv(this.addr,e)}function qS(i,e){i.uniform3iv(this.addr,e)}function $S(i,e){i.uniform4iv(this.addr,e)}function YS(i,e){i.uniform1uiv(this.addr,e)}function ZS(i,e){i.uniform2uiv(this.addr,e)}function KS(i,e){i.uniform3uiv(this.addr,e)}function JS(i,e){i.uniform4uiv(this.addr,e)}function QS(i,e,t){const n=this.cache,r=e.length,s=Do(t,r);jt(n,s)||(i.uniform1iv(this.addr,s),en(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Rc:a=em;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function jS(i,e,t){const n=this.cache,r=e.length,s=Do(t,r);jt(n,s)||(i.uniform1iv(this.addr,s),en(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||nm,s[a])}function ex(i,e,t){const n=this.cache,r=e.length,s=Do(t,r);jt(n,s)||(i.uniform1iv(this.addr,s),en(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||im,s[a])}function tx(i,e,t){const n=this.cache,r=e.length,s=Do(t,r);jt(n,s)||(i.uniform1iv(this.addr,s),en(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||tm,s[a])}function nx(i){switch(i){case 5126:return BS;case 35664:return OS;case 35665:return kS;case 35666:return zS;case 35674:return VS;case 35675:return GS;case 35676:return HS;case 5124:case 35670:return WS;case 35667:case 35671:return XS;case 35668:case 35672:return qS;case 35669:case 35673:return $S;case 5125:return YS;case 36294:return ZS;case 36295:return KS;case 36296:return JS;case 35678:case 36198:case 36298:case 36306:case 35682:return QS;case 35679:case 36299:case 36307:return jS;case 35680:case 36300:case 36308:case 36293:return ex;case 36289:case 36303:case 36311:case 36292:return tx}}class ix{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=FS(t.type)}}class rx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nx(t.type)}}class sx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const vh=/(\w+)(\])?(\[|\.)?/g;function gp(i,e){i.seq.push(e),i.map[e.id]=e}function ax(i,e,t){const n=i.name,r=n.length;for(vh.lastIndex=0;;){const s=vh.exec(n),a=vh.lastIndex;let o=s[1];const h=s[2]==="]",c=s[3];if(h&&(o=o|0),c===void 0||c==="["&&a+2===r){gp(t,c===void 0?new ix(o,i,e):new rx(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new sx(o),gp(t,p)),t=p}}}class so{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),h=e.getUniformLocation(t,o.name);ax(o,h,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],h=n[o.id];h.needsUpdate!==!1&&o.setValue(e,h.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function vp(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ox=37297;let lx=0;function hx(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const _p=new st;function cx(i){Mt._getMatrix(_p,Mt.workingColorSpace,i);const e=`mat3( ${_p.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(i)){case po:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function yp(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+hx(i.getShaderSource(e),o)}else return s}function ux(i,e){const t=cx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const fx={[_0]:"Linear",[y0]:"Reinhard",[M0]:"Cineon",[w0]:"ACESFilmic",[x0]:"AgX",[b0]:"Neutral",[S0]:"Custom"};function dx(i,e){const t=fx[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wa=new de;function px(){Mt.getLuminanceCoefficients(Wa);const i=Wa.x.toFixed(4),e=Wa.y.toFixed(4),t=Wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function gx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Gs(i){return i!==""}function Mp(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _x=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cc(i){return i.replace(_x,Mx)}const yx=new Map;function Mx(i,e){let t=ut[e];if(t===void 0){const n=yx.get(e);if(n!==void 0)t=ut[n],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Cc(t)}const wx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sp(i){return i.replace(wx,Sx)}function Sx(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const xx={[Qa]:"SHADOWMAP_TYPE_PCF",[Vs]:"SHADOWMAP_TYPE_VSM"};function bx(i){return xx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ex={[Ir]:"ENVMAP_TYPE_CUBE",[ls]:"ENVMAP_TYPE_CUBE",[Co]:"ENVMAP_TYPE_CUBE_UV"};function Tx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Ex[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Ax={[ls]:"ENVMAP_MODE_REFRACTION"};function Rx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ax[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Cx={[v0]:"ENVMAP_BLENDING_MULTIPLY",[d_]:"ENVMAP_BLENDING_MIX",[p_]:"ENVMAP_BLENDING_ADD"};function Ix(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Cx[i.combine]||"ENVMAP_BLENDING_NONE"}function Px(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Lx(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const h=bx(t),c=Tx(t),d=Rx(t),p=Ix(t),g=Px(t),w=mx(t),T=gx(s),N=r.createProgram();let C,R,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(C=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Gs).join(`
`),C.length>0&&(C+=`
`),R=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Gs).join(`
`),R.length>0&&(R+=`
`)):(C=[xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),R=[xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?ut.tonemapping_pars_fragment:"",t.toneMapping!==_i?dx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,ux("linearToOutputTexel",t.outputColorSpace),px(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gs).join(`
`)),a=Cc(a),a=Mp(a,t),a=wp(a,t),o=Cc(o),o=Mp(o,t),o=wp(o,t),a=Sp(a),o=Sp(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,C=[w,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+C,R=["#define varying in",t.glslVersion===yd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+R);const f=m+C+a,S=m+R+o,l=vp(r,r.VERTEX_SHADER,f),L=vp(r,r.FRAGMENT_SHADER,S);r.attachShader(N,l),r.attachShader(N,L),t.index0AttributeName!==void 0?r.bindAttribLocation(N,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(N,0,"position"),r.linkProgram(N);function U(_){if(i.debug.checkShaderErrors){const u=r.getProgramInfoLog(N)||"",E=r.getShaderInfoLog(l)||"",I=r.getShaderInfoLog(L)||"",D=u.trim(),k=E.trim(),z=I.trim();let G=!0,O=!0;if(r.getProgramParameter(N,r.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,N,l,L);else{const x=yp(r,l,"vertex"),B=yp(r,L,"fragment");rt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(N,r.VALIDATE_STATUS)+`

Material Name: `+_.name+`
Material Type: `+_.type+`

Program Info Log: `+D+`
`+x+`
`+B)}else D!==""?je("WebGLProgram: Program Info Log:",D):(k===""||z==="")&&(O=!1);O&&(_.diagnostics={runnable:G,programLog:D,vertexShader:{log:k,prefix:C},fragmentShader:{log:z,prefix:R}})}r.deleteShader(l),r.deleteShader(L),M=new so(r,N),b=vx(r,N)}let M;this.getUniforms=function(){return M===void 0&&U(this),M};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(N,ox)),P},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(N),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lx++,this.cacheKey=e,this.usedTimes=1,this.program=N,this.vertexShader=l,this.fragmentShader=L,this}let Ux=0;class Dx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Nx(e),t.set(e,n)),n}}class Nx{constructor(e){this.id=Ux++,this.code=e,this.usedTimes=0}}function Fx(i){return i===Pr||i===lo||i===ho}function Bx(i,e,t,n,r,s){const a=new N0,o=new Dx,h=new Set,c=[],d=new Map,p=n.logarithmicDepthBuffer;let g=n.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(M){return h.add(M),M===0?"uv":`uv${M}`}function N(M,b,P,_,u,E){const I=_.fog,D=u.geometry,k=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?_.environment:null,z=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,G=e.get(M.envMap||k,z),O=G&&G.mapping===Co?G.image.height:null,x=w[M.type];M.precision!==null&&(g=n.getMaxPrecision(M.precision),g!==M.precision&&je("WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const B=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,J=B!==void 0?B.length:0;let j=0;D.morphAttributes.position!==void 0&&(j=1),D.morphAttributes.normal!==void 0&&(j=2),D.morphAttributes.color!==void 0&&(j=3);let ie,ue,fe,K;if(x){const xt=gi[x];ie=xt.vertexShader,ue=xt.fragmentShader}else{ie=M.vertexShader,ue=M.fragmentShader;const xt=o.getVertexShaderStage(M),et=o.getFragmentShaderStage(M);o.update(M,xt,et),fe=xt.id,K=et.id}const ne=i.getRenderTarget(),ae=i.state.buffers.depth.getReversed(),le=u.isInstancedMesh===!0,xe=u.isBatchedMesh===!0,ve=!!M.map,ge=!!M.matcap,Te=!!G,ye=!!M.aoMap,Se=!!M.lightMap,Ge=!!M.bumpMap&&M.wireframe===!1,De=!!M.normalMap,He=!!M.displacementMap,nt=!!M.emissiveMap,Ie=!!M.metalnessMap,Ae=!!M.roughnessMap,te=M.anisotropy>0,we=M.clearcoat>0,Pe=M.dispersion>0,X=M.retroreflectivity>0,v=M.iridescence>0,y=M.sheen>0,A=M.transmission>0,V=te&&!!M.anisotropyMap,q=we&&!!M.clearcoatMap,Q=we&&!!M.clearcoatNormalMap,$=we&&!!M.clearcoatRoughnessMap,oe=v&&!!M.iridescenceMap,Re=v&&!!M.iridescenceThicknessMap,Ce=y&&!!M.sheenColorMap,Me=y&&!!M.sheenRoughnessMap,Ee=!!M.specularMap,ze=!!M.specularColorMap,qe=!!M.specularIntensityMap,it=A&&!!M.transmissionMap,ee=A&&!!M.thicknessMap,Ue=!!M.gradientMap,_e=!!M.alphaMap,Le=M.alphaTest>0,Ne=!!M.alphaHash,be=!!M.extensions;let Ve=_i;M.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ve=i.toneMapping);const Be={shaderID:x,shaderType:M.type,shaderName:M.name,vertexShader:ie,fragmentShader:ue,defines:M.defines,customVertexShaderID:fe,customFragmentShaderID:K,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:xe,batchingColor:xe&&u._colorsTexture!==null,instancing:le,instancingColor:le&&u.instanceColor!==null,instancingMorph:le&&u.morphTexture!==null,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Mt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:ve,matcap:ge,envMap:Te,envMapMode:Te&&G.mapping,envMapCubeUVHeight:O,aoMap:ye,lightMap:Se,bumpMap:Ge,normalMap:De,displacementMap:He,emissiveMap:nt,normalMapObjectSpace:De&&M.normalMapType===M_,normalMapTangentSpace:De&&M.normalMapType===Ec,packedNormalMap:De&&M.normalMapType===Ec&&Fx(M.normalMap.format),metalnessMap:Ie,roughnessMap:Ae,anisotropy:te,anisotropyMap:V,clearcoat:we,clearcoatMap:q,clearcoatNormalMap:Q,clearcoatRoughnessMap:$,dispersion:Pe,retroreflection:X,iridescence:v,iridescenceMap:oe,iridescenceThicknessMap:Re,sheen:y,sheenColorMap:Ce,sheenRoughnessMap:Me,specularMap:Ee,specularColorMap:ze,specularIntensityMap:qe,transmission:A,transmissionMap:it,thicknessMap:ee,gradientMap:Ue,opaque:M.transparent===!1&&M.blending===Xs&&M.alphaToCoverage===!1,alphaMap:_e,alphaTest:Le,alphaHash:Ne,combine:M.combine,mapUv:ve&&T(M.map.channel),aoMapUv:ye&&T(M.aoMap.channel),lightMapUv:Se&&T(M.lightMap.channel),bumpMapUv:Ge&&T(M.bumpMap.channel),normalMapUv:De&&T(M.normalMap.channel),displacementMapUv:He&&T(M.displacementMap.channel),emissiveMapUv:nt&&T(M.emissiveMap.channel),metalnessMapUv:Ie&&T(M.metalnessMap.channel),roughnessMapUv:Ae&&T(M.roughnessMap.channel),anisotropyMapUv:V&&T(M.anisotropyMap.channel),clearcoatMapUv:q&&T(M.clearcoatMap.channel),clearcoatNormalMapUv:Q&&T(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&T(M.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&T(M.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&T(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&T(M.sheenColorMap.channel),sheenRoughnessMapUv:Me&&T(M.sheenRoughnessMap.channel),specularMapUv:Ee&&T(M.specularMap.channel),specularColorMapUv:ze&&T(M.specularColorMap.channel),specularIntensityMapUv:qe&&T(M.specularIntensityMap.channel),transmissionMapUv:it&&T(M.transmissionMap.channel),thicknessMapUv:ee&&T(M.thicknessMap.channel),alphaMapUv:_e&&T(M.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(De||te),vertexNormals:!!D.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:u.isPoints===!0&&!!D.attributes.uv&&(ve||_e),fog:!!I,useFog:M.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||D.attributes.normal===void 0&&De===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ae,skinning:u.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:j,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:E.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ve,decodeVideoTexture:ve&&M.map.isVideoTexture===!0&&Mt.getTransfer(M.map.colorSpace)===It,decodeVideoTextureEmissive:nt&&M.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(M.emissiveMap.colorSpace)===It,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Di,flipSided:M.side===En,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:be&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&M.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Be.vertexUv1s=h.has(1),Be.vertexUv2s=h.has(2),Be.vertexUv3s=h.has(3),h.clear(),Be}function C(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)b.push(P),b.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(R(b,M),m(b,M),b.push(i.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function R(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numSunLights),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numSunLightShadows),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function m(M,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function f(M){const b=w[M.type];let P;if(b){const _=gi[b];P=Ty.clone(_.uniforms)}else P=M.uniforms;return P}function S(M,b){let P=d.get(b);return P!==void 0?++P.usedTimes:(P=new Lx(i,b,M,r),c.push(P),d.set(b,P)),P}function l(M){if(--M.usedTimes===0){const b=c.indexOf(M);c[b]=c[c.length-1],c.pop(),d.delete(M.cacheKey),M.destroy()}}function L(M){o.remove(M)}function U(){o.dispose()}return{getParameters:N,getProgramCacheKey:C,getUniforms:f,acquireProgram:S,releaseProgram:l,releaseShaderCache:L,programs:c,dispose:U}}function Ox(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,h){i.get(a)[o]=h}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function kx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function bp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ep(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(g){let w=0;return g.isInstancedMesh&&(w+=2),g.isSkinnedMesh&&(w+=1),w}function o(g,w,T,N,C,R){let m=i[e];return m===void 0?(m={id:g.id,object:g,geometry:w,material:T,materialVariant:a(g),groupOrder:N,renderOrder:g.renderOrder,z:C,group:R},i[e]=m):(m.id=g.id,m.object=g,m.geometry=w,m.material=T,m.materialVariant=a(g),m.groupOrder=N,m.renderOrder=g.renderOrder,m.z=C,m.group=R),e++,m}function h(g,w,T,N,C,R,m){m.reversedDepth===!0&&(C=-C);const f=o(g,w,T,N,C,R);T.transmission>0?n.push(f):T.transparent===!0?r.push(f):t.push(f)}function c(g,w,T,N,C,R){const m=o(g,w,T,N,C,R);T.transmission>0?n.unshift(m):T.transparent===!0?r.unshift(m):t.unshift(m)}function d(g,w){t.length>1&&t.sort(g||kx),n.length>1&&n.sort(w||bp),r.length>1&&r.sort(w||bp)}function p(){for(let g=e,w=i.length;g<w;g++){const T=i[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:h,unshift:c,finish:p,sort:d}}function zx(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Ep,i.set(n,[a])):r>=s.length?(a=new Ep,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Vx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new de,color:new dt};break;case"SpotLight":t={position:new de,direction:new de,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new de,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new de,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new de,halfWidth:new de,halfHeight:new de};break}return i[e.id]=t,t}}}function Gx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Hx=0;function Wx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Xx(i){const e=new Vx,t=Gx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new de);const r=new de,s=new _t,a=new _t;function o(c){let d=0,p=0,g=0;for(let u=0;u<9;u++)n.probe[u].set(0,0,0);let w=0,T=0,N=0,C=0,R=0,m=0,f=0,S=0,l=0,L=0,U=0,M=0,b=0,P=0;c.sort(Wx);for(let u=0,E=c.length;u<E;u++){const I=c[u],D=I.color,k=I.intensity,z=I.distance;let G=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Pr?G=I.shadow.map.texture:G=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)d+=D.r*k,p+=D.g*k,g+=D.b*k;else if(I.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(I.sh.coefficients[O],k);P++}else if(I.isSunLight){const O=e.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const x=I.shadow,B=t.get(I);B.shadowIntensity=x.intensity,B.shadowBias=x.bias,B.shadowNormalBias=x.normalBias,B.shadowRadius=x.radius,B.shadowMapSize.copy(x.mapSize).multiply(x.getFrameExtents()),n.sunShadow[T]=B,n.sunShadowMap[T]=G;const J=x.getViewportCount();for(let j=0;j<J;j++)n.sunShadowMatrix[N+j]=x.getMatrix(j),n.sunShadowCascade[N+j]=x._cascadeData[j];N+=J,T++}n.sun[w]=O,w++}else if(I.isDirectionalLight){const O=e.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const x=I.shadow,B=t.get(I);B.shadowIntensity=x.intensity,B.shadowBias=x.bias,B.shadowNormalBias=x.normalBias,B.shadowRadius=x.radius,B.shadowMapSize=x.mapSize,n.directionalShadow[C]=B,n.directionalShadowMap[C]=G,n.directionalShadowMatrix[C]=I.shadow.matrix,l++}n.directional[C]=O,C++}else if(I.isSpotLight){const O=e.get(I);O.position.setFromMatrixPosition(I.matrixWorld),O.color.copy(D).multiplyScalar(k),O.distance=z,O.coneCos=Math.cos(I.angle),O.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),O.decay=I.decay,n.spot[m]=O;const x=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,x.updateMatrices(I),I.castShadow&&b++),n.spotLightMatrix[m]=x.matrix,I.castShadow){const B=t.get(I);B.shadowIntensity=x.intensity,B.shadowBias=x.bias,B.shadowNormalBias=x.normalBias,B.shadowRadius=x.radius,B.shadowMapSize=x.mapSize,n.spotShadow[m]=B,n.spotShadowMap[m]=G,U++}m++}else if(I.isRectAreaLight){const O=e.get(I);O.color.copy(D).multiplyScalar(k),O.halfWidth.set(I.width*.5,0,0),O.halfHeight.set(0,I.height*.5,0),n.rectArea[f]=O,f++}else if(I.isPointLight){const O=e.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),O.distance=I.distance,O.decay=I.decay,I.castShadow){const x=I.shadow,B=t.get(I);B.shadowIntensity=x.intensity,B.shadowBias=x.bias,B.shadowNormalBias=x.normalBias,B.shadowRadius=x.radius,B.shadowMapSize=x.mapSize,B.shadowCameraNear=x.camera.near,B.shadowCameraFar=x.camera.far,n.pointShadow[R]=B,n.pointShadowMap[R]=G,n.pointShadowMatrix[R]=I.shadow.matrix,L++}n.point[R]=O,R++}else if(I.isHemisphereLight){const O=e.get(I);O.skyColor.copy(I.color).multiplyScalar(k),O.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[S]=O,S++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Xe.LTC_FLOAT_1,n.rectAreaLTC2=Xe.LTC_FLOAT_2):(n.rectAreaLTC1=Xe.LTC_HALF_1,n.rectAreaLTC2=Xe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=g;const _=n.hash;(_.sunLength!==w||_.directionalLength!==C||_.pointLength!==R||_.spotLength!==m||_.rectAreaLength!==f||_.hemiLength!==S||_.numSunShadows!==T||_.numDirectionalShadows!==l||_.numPointShadows!==L||_.numSpotShadows!==U||_.numSpotMaps!==M||_.numLightProbes!==P)&&(n.sun.length=w,n.directional.length=C,n.spot.length=m,n.rectArea.length=f,n.point.length=R,n.hemi.length=S,n.sunShadow.length=T,n.sunShadowMap.length=T,n.sunShadowMatrix.length=N,n.sunShadowCascade.length=N,n.directionalShadow.length=l,n.directionalShadowMap.length=l,n.directionalShadowMatrix.length=l,n.pointShadow.length=L,n.pointShadowMap.length=L,n.pointShadowMatrix.length=L,n.spotShadow.length=U,n.spotShadowMap.length=U,n.spotLightMatrix.length=U+M-b,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=P,_.sunLength=w,_.directionalLength=C,_.pointLength=R,_.spotLength=m,_.rectAreaLength=f,_.hemiLength=S,_.numSunShadows=T,_.numDirectionalShadows=l,_.numPointShadows=L,_.numSpotShadows=U,_.numSpotMaps=M,_.numLightProbes=P,n.version=Hx++)}function h(c,d){let p=0,g=0,w=0,T=0,N=0,C=0;const R=d.matrixWorldInverse;for(let m=0,f=c.length;m<f;m++){const S=c[m];if(S.isSunLight){const l=n.sun[p];l.direction.setFromMatrixPosition(S.matrixWorld),l.direction.transformDirection(R),p++}else if(S.isDirectionalLight){const l=n.directional[g];l.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),l.direction.sub(r),l.direction.transformDirection(R),g++}else if(S.isSpotLight){const l=n.spot[T];l.position.setFromMatrixPosition(S.matrixWorld),l.position.applyMatrix4(R),l.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),l.direction.sub(r),l.direction.transformDirection(R),T++}else if(S.isRectAreaLight){const l=n.rectArea[N];l.position.setFromMatrixPosition(S.matrixWorld),l.position.applyMatrix4(R),a.identity(),s.copy(S.matrixWorld),s.premultiply(R),a.extractRotation(s),l.halfWidth.set(S.width*.5,0,0),l.halfHeight.set(0,S.height*.5,0),l.halfWidth.applyMatrix4(a),l.halfHeight.applyMatrix4(a),N++}else if(S.isPointLight){const l=n.point[w];l.position.setFromMatrixPosition(S.matrixWorld),l.position.applyMatrix4(R),w++}else if(S.isHemisphereLight){const l=n.hemi[C];l.direction.setFromMatrixPosition(S.matrixWorld),l.direction.transformDirection(R),C++}}}return{setup:o,setupView:h,state:n}}function Tp(i){const e=new Xx(i),t=[],n=[],r=[];function s(g){p.camera=g,t.length=0,n.length=0,r.length=0}function a(g){t.push(g)}function o(g){n.push(g)}function h(g){r.push(g)}function c(){e.setup(t)}function d(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:h}}function qx(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Tp(i),e.set(r,[o])):s>=a.length?(o=new Tp(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const $x=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Zx=[new de(1,0,0),new de(-1,0,0),new de(0,1,0),new de(0,-1,0),new de(0,0,1),new de(0,0,-1)],Kx=[new de(0,-1,0),new de(0,-1,0),new de(0,0,1),new de(0,0,-1),new de(0,-1,0),new de(0,-1,0)],Ap=new _t,Ns=new de,_h=new de;function Jx(i,e,t){let n=new nu;const r=new wt,s=new wt,a=new Dt,o=new Py,h=new Ly,c={},d=t.maxTextureSize,p={[Cr]:En,[En]:Cr,[Di]:Di},g=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:$x,fragmentShader:Yx}),w=g.clone();w.defines.HORIZONTAL_PASS=1;const T=new li;T.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new Nn(T,g),C=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qa;let R=this.type;this.render=function(L,U,M){if(C.enabled===!1||C.autoUpdate===!1&&C.needsUpdate===!1||L.length===0)return;this.type===p0&&(je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Qa);const b=i.getRenderTarget(),P=i.getActiveCubeFace(),_=i.getActiveMipmapLevel(),u=i.state;u.setBlending(Oi),u.buffers.depth.getReversed()===!0?u.buffers.color.setClear(0,0,0,0):u.buffers.color.setClear(1,1,1,1),u.buffers.depth.setTest(!0),u.setScissorTest(!1);const E=R!==this.type;E&&U.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(D=>D.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,D=L.length;I<D;I++){const k=L[I],z=k.shadow;if(z===void 0){je("WebGLShadowMap:",k,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const G=z.getFrameExtents();r.multiply(G),s.copy(z.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/G.x),r.x=s.x*G.x,z.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/G.y),r.y=s.y*G.y,z.mapSize.y=s.y));const O=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=O,z.map===null||E===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Vs){if(k.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new ri(r.x,r.y,{format:Pr,type:wi,minFilter:dn,magFilter:dn,generateMipmaps:!1}),z.map.texture.name=k.name+".shadowMap",z.map.depthTexture=new ta(r.x,r.y,zn),z.map.depthTexture.name=k.name+".shadowMapDepth",z.map.depthTexture.format=Vi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=hn,z.map.depthTexture.magFilter=hn}else k.isPointLight?(z.map=new j0(r.x),z.map.depthTexture=new xy(r.x,Mi)):(z.map=new ri(r.x,r.y),z.map.depthTexture=new ta(r.x,r.y,Mi)),z.map.depthTexture.name=k.name+".shadowMap",z.map.depthTexture.format=Vi,this.type===Qa?(z.map.depthTexture.compareFunction=O?Qc:Jc,z.map.depthTexture.minFilter=dn,z.map.depthTexture.magFilter=dn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=hn,z.map.depthTexture.magFilter=hn);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==r.x||z.map.height!==r.y)&&z.map.setSize(r.x,r.y);const x=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();k.isPointLight!==!0&&z.updateMatrices(k,M);for(let B=0;B<x;B++){const J=z.getCamera(B);if(k.isPointLight){const j=z.camera,ie=z.matrix,ue=k.distance||j.far;ue!==j.far&&(j.far=ue,j.updateProjectionMatrix()),Ns.setFromMatrixPosition(k.matrixWorld),j.position.copy(Ns),_h.copy(j.position),_h.add(Zx[B]),j.up.copy(Kx[B]),j.lookAt(_h),j.updateMatrixWorld(),ie.makeTranslation(-Ns.x,-Ns.y,-Ns.z),Ap.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Ap,j.coordinateSystem,j.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,B),i.clear();else{B===0&&(i.setRenderTarget(z.map),i.clear());const j=z.getViewport(B);a.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),u.viewport(a)}n=z.getFrustum(B),S(U,M,J,k,this.type)}z.isPointLightShadow!==!0&&this.type===Vs&&m(z,M),z.needsUpdate=!1}R=this.type,C.needsUpdate=!1,i.setRenderTarget(b,P,_)};function m(L,U){const M=e.update(N);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,w.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,w.needsUpdate=!0),L.mapPass===null?L.mapPass=new ri(r.x,r.y,{format:Pr,type:wi}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value.set(L.map.width,L.map.height),g.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(U,null,M,g,N,null),w.uniforms.shadow_pass.value=L.mapPass.texture,w.uniforms.resolution.value.set(L.map.width,L.map.height),w.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(U,null,M,w,N,null)}function f(L,U,M,b){let P=null;const _=M.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(_!==void 0)P=_;else if(P=M.isPointLight===!0?h:o,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const u=P.uuid,E=U.uuid;let I=c[u];I===void 0&&(I={},c[u]=I);let D=I[E];D===void 0&&(D=P.clone(),I[E]=D,U.addEventListener("dispose",l)),P=D}if(P.visible=U.visible,P.wireframe=U.wireframe,b===Vs?P.side=U.shadowSide!==null?U.shadowSide:U.side:P.side=U.shadowSide!==null?U.shadowSide:p[U.side],P.alphaMap=U.alphaMap,P.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,P.map=U.map,P.clipShadows=U.clipShadows,P.clippingPlanes=U.clippingPlanes,P.clipIntersection=U.clipIntersection,P.displacementMap=U.displacementMap,P.displacementScale=U.displacementScale,P.displacementBias=U.displacementBias,P.wireframeLinewidth=U.wireframeLinewidth,P.linewidth=U.linewidth,M.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const u=i.properties.get(P);u.light=M}return P}function S(L,U,M,b,P){if(L.visible===!1)return;if(L.layers.test(U.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&P===Vs)&&(!L.frustumCulled||L.intersectsFrustum(n))){L.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,L.matrixWorld);const E=e.update(L),I=L.material;if(Array.isArray(I)){const D=E.groups;for(let k=0,z=D.length;k<z;k++){const G=D[k],O=I[G.materialIndex];if(O&&O.visible){const x=f(L,O,b,P);L.onBeforeShadow(i,L,U,M,E,x,G),i.renderBufferDirect(M,null,E,x,L,G),L.onAfterShadow(i,L,U,M,E,x,G)}}}else if(I.visible){const D=f(L,I,b,P);L.onBeforeShadow(i,L,U,M,E,D,null),i.renderBufferDirect(M,null,E,D,L,null),L.onAfterShadow(i,L,U,M,E,D,null)}}const u=L.children;for(let E=0,I=u.length;E<I;E++)S(u[E],U,M,b,P)}function l(L){L.target.removeEventListener("dispose",l);for(const M in c){const b=c[M],P=L.target.uuid;P in b&&(b[P].dispose(),delete b[P])}}}function Qx(i,e){function t(){let ee=!1;const Ue=new Dt;let _e=null;const Le=new Dt(0,0,0,0);return{setMask:function(Ne){_e!==Ne&&!ee&&(i.colorMask(Ne,Ne,Ne,Ne),_e=Ne)},setLocked:function(Ne){ee=Ne},setClear:function(Ne,be,Ve,Be,xt){xt===!0&&(Ne*=Be,be*=Be,Ve*=Be),Ue.set(Ne,be,Ve,Be),Le.equals(Ue)===!1&&(i.clearColor(Ne,be,Ve,Be),Le.copy(Ue))},reset:function(){ee=!1,_e=null,Le.set(-1,0,0,0)}}}function n(){let ee=!1,Ue=!1,_e=null,Le=null,Ne=null;return{setReversed:function(be){if(Ue!==be){const Ve=e.get("EXT_clip_control");be?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),Ue=be;const Be=Ne;Ne=null,this.setClear(Be)}},getReversed:function(){return Ue},setTest:function(be){be?ne(i.DEPTH_TEST):ae(i.DEPTH_TEST)},setMask:function(be){_e!==be&&!ee&&(i.depthMask(be),_e=be)},setFunc:function(be){if(Ue&&(be=L_[be]),Le!==be){switch(be){case Oh:i.depthFunc(i.NEVER);break;case kh:i.depthFunc(i.ALWAYS);break;case zh:i.depthFunc(i.LESS);break;case Ks:i.depthFunc(i.LEQUAL);break;case Vh:i.depthFunc(i.EQUAL);break;case Gh:i.depthFunc(i.GEQUAL);break;case Hh:i.depthFunc(i.GREATER);break;case Wh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Le=be}},setLocked:function(be){ee=be},setClear:function(be){Ne!==be&&(Ne=be,Ue&&(be=1-be),i.clearDepth(be))},reset:function(){ee=!1,_e=null,Le=null,Ne=null,Ue=!1}}}function r(){let ee=!1,Ue=null,_e=null,Le=null,Ne=null,be=null,Ve=null,Be=null,xt=null;return{setTest:function(et){ee||(et?ne(i.STENCIL_TEST):ae(i.STENCIL_TEST))},setMask:function(et){Ue!==et&&!ee&&(i.stencilMask(et),Ue=et)},setFunc:function(et,yt,cn){(_e!==et||Le!==yt||Ne!==cn)&&(i.stencilFunc(et,yt,cn),_e=et,Le=yt,Ne=cn)},setOp:function(et,yt,cn){(be!==et||Ve!==yt||Be!==cn)&&(i.stencilOp(et,yt,cn),be=et,Ve=yt,Be=cn)},setLocked:function(et){ee=et},setClear:function(et){xt!==et&&(i.clearStencil(et),xt=et)},reset:function(){ee=!1,Ue=null,_e=null,Le=null,Ne=null,be=null,Ve=null,Be=null,xt=null}}}const s=new t,a=new n,o=new r,h=new WeakMap,c=new WeakMap;let d={},p={},g={},w=new WeakMap,T=[],N=null,C=!1,R=null,m=null,f=null,S=null,l=null,L=null,U=null,M=new dt(0,0,0),b=0,P=!1,_=null,u=null,E=null,I=null,D=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,G=0;const O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(O)[1]),z=G>=1):O.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),z=G>=2);let x=null,B={};const J=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),ie=new Dt().fromArray(J),ue=new Dt().fromArray(j);function fe(ee,Ue,_e,Le){const Ne=new Uint8Array(4),be=i.createTexture();i.bindTexture(ee,be),i.texParameteri(ee,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(ee,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<_e;Ve++)ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?i.texImage3D(Ue,0,i.RGBA,1,1,Le,0,i.RGBA,i.UNSIGNED_BYTE,Ne):i.texImage2D(Ue+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ne);return be}const K={};K[i.TEXTURE_2D]=fe(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),a.setFunc(Ks),Ge(!1),De(dd),ne(i.CULL_FACE),ye(Oi);function ne(ee){d[ee]!==!0&&(i.enable(ee),d[ee]=!0)}function ae(ee){d[ee]!==!1&&(i.disable(ee),d[ee]=!1)}function le(ee,Ue){return g[ee]!==Ue?(i.bindFramebuffer(ee,Ue),g[ee]=Ue,ee===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=Ue),ee===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=Ue),!0):!1}function xe(ee,Ue){let _e=T,Le=!1;if(ee){_e=w.get(Ue),_e===void 0&&(_e=[],w.set(Ue,_e));const Ne=ee.textures;if(_e.length!==Ne.length||_e[0]!==i.COLOR_ATTACHMENT0){for(let be=0,Ve=Ne.length;be<Ve;be++)_e[be]=i.COLOR_ATTACHMENT0+be;_e.length=Ne.length,Le=!0}}else _e[0]!==i.BACK&&(_e[0]=i.BACK,Le=!0);Le&&i.drawBuffers(_e)}function ve(ee){return N!==ee?(i.useProgram(ee),N=ee,!0):!1}const ge={[Qr]:i.FUNC_ADD,[Kv]:i.FUNC_SUBTRACT,[Jv]:i.FUNC_REVERSE_SUBTRACT};ge[Qv]=i.MIN,ge[jv]=i.MAX;const Te={[e_]:i.ZERO,[t_]:i.ONE,[n_]:i.SRC_COLOR,[m0]:i.SRC_ALPHA,[l_]:i.SRC_ALPHA_SATURATE,[a_]:i.DST_COLOR,[r_]:i.DST_ALPHA,[i_]:i.ONE_MINUS_SRC_COLOR,[g0]:i.ONE_MINUS_SRC_ALPHA,[o_]:i.ONE_MINUS_DST_COLOR,[s_]:i.ONE_MINUS_DST_ALPHA,[h_]:i.CONSTANT_COLOR,[c_]:i.ONE_MINUS_CONSTANT_COLOR,[u_]:i.CONSTANT_ALPHA,[f_]:i.ONE_MINUS_CONSTANT_ALPHA};function ye(ee,Ue,_e,Le,Ne,be,Ve,Be,xt,et){if(ee===Oi){C===!0&&(ae(i.BLEND),C=!1);return}if(C===!1&&(ne(i.BLEND),C=!0),ee!==Zv){if(ee!==R||et!==P){if((m!==Qr||l!==Qr)&&(i.blendEquation(i.FUNC_ADD),m=Qr,l=Qr),et)switch(ee){case Xs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pd:i.blendFunc(i.ONE,i.ONE);break;case md:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:rt("WebGLState: Invalid blending: ",ee);break}else switch(ee){case Xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pd:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case md:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gd:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",ee);break}f=null,S=null,L=null,U=null,M.set(0,0,0),b=0,R=ee,P=et}return}Ne=Ne||Ue,be=be||_e,Ve=Ve||Le,(Ue!==m||Ne!==l)&&(i.blendEquationSeparate(ge[Ue],ge[Ne]),m=Ue,l=Ne),(_e!==f||Le!==S||be!==L||Ve!==U)&&(i.blendFuncSeparate(Te[_e],Te[Le],Te[be],Te[Ve]),f=_e,S=Le,L=be,U=Ve),(Be.equals(M)===!1||xt!==b)&&(i.blendColor(Be.r,Be.g,Be.b,xt),M.copy(Be),b=xt),R=ee,P=!1}function Se(ee,Ue){ee.side===Di?ae(i.CULL_FACE):ne(i.CULL_FACE);let _e=ee.side===En;Ue&&(_e=!_e),Ge(_e),ee.blending===Xs&&ee.transparent===!1?ye(Oi):ye(ee.blending,ee.blendEquation,ee.blendSrc,ee.blendDst,ee.blendEquationAlpha,ee.blendSrcAlpha,ee.blendDstAlpha,ee.blendColor,ee.blendAlpha,ee.premultipliedAlpha),a.setFunc(ee.depthFunc),a.setTest(ee.depthTest),a.setMask(ee.depthWrite),s.setMask(ee.colorWrite);const Le=ee.stencilWrite;o.setTest(Le),Le&&(o.setMask(ee.stencilWriteMask),o.setFunc(ee.stencilFunc,ee.stencilRef,ee.stencilFuncMask),o.setOp(ee.stencilFail,ee.stencilZFail,ee.stencilZPass)),nt(ee.polygonOffset,ee.polygonOffsetFactor,ee.polygonOffsetUnits),ee.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(ee){_!==ee&&(ee?i.frontFace(i.CW):i.frontFace(i.CCW),_=ee)}function De(ee){ee!==$v?(ne(i.CULL_FACE),ee!==u&&(ee===dd?i.cullFace(i.BACK):ee===Yv?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ae(i.CULL_FACE),u=ee}function He(ee){ee!==E&&(z&&i.lineWidth(ee),E=ee)}function nt(ee,Ue,_e){ee?(ne(i.POLYGON_OFFSET_FILL),(I!==Ue||D!==_e)&&(I=Ue,D=_e,a.getReversed()&&(Ue=-Ue),i.polygonOffset(Ue,_e))):ae(i.POLYGON_OFFSET_FILL)}function Ie(ee){ee?ne(i.SCISSOR_TEST):ae(i.SCISSOR_TEST)}function Ae(ee){ee===void 0&&(ee=i.TEXTURE0+k-1),x!==ee&&(i.activeTexture(ee),x=ee)}function te(ee,Ue,_e){_e===void 0&&(x===null?_e=i.TEXTURE0+k-1:_e=x);let Le=B[_e];Le===void 0&&(Le={type:void 0,texture:void 0},B[_e]=Le),(Le.type!==ee||Le.texture!==Ue)&&(x!==_e&&(i.activeTexture(_e),x=_e),i.bindTexture(ee,Ue||K[ee]),Le.type=ee,Le.texture=Ue)}function we(){const ee=B[x];ee!==void 0&&ee.type!==void 0&&(i.bindTexture(ee.type,null),ee.type=void 0,ee.texture=void 0)}function Pe(){try{i.compressedTexImage2D(...arguments)}catch(ee){rt("WebGLState:",ee)}}function X(){try{i.compressedTexImage3D(...arguments)}catch(ee){rt("WebGLState:",ee)}}function v(){try{i.texSubImage2D(...arguments)}catch(ee){rt("WebGLState:",ee)}}function y(){try{i.texSubImage3D(...arguments)}catch(ee){rt("WebGLState:",ee)}}function A(){try{i.compressedTexSubImage2D(...arguments)}catch(ee){rt("WebGLState:",ee)}}function V(){try{i.compressedTexSubImage3D(...arguments)}catch(ee){rt("WebGLState:",ee)}}function q(){try{i.texStorage2D(...arguments)}catch(ee){rt("WebGLState:",ee)}}function Q(){try{i.texStorage3D(...arguments)}catch(ee){rt("WebGLState:",ee)}}function $(){try{i.texImage2D(...arguments)}catch(ee){rt("WebGLState:",ee)}}function oe(){try{i.texImage3D(...arguments)}catch(ee){rt("WebGLState:",ee)}}function Re(ee){return p[ee]!==void 0?p[ee]:i.getParameter(ee)}function Ce(ee,Ue){p[ee]!==Ue&&(i.pixelStorei(ee,Ue),p[ee]=Ue)}function Me(ee){ie.equals(ee)===!1&&(i.scissor(ee.x,ee.y,ee.z,ee.w),ie.copy(ee))}function Ee(ee){ue.equals(ee)===!1&&(i.viewport(ee.x,ee.y,ee.z,ee.w),ue.copy(ee))}function ze(ee,Ue){let _e=c.get(Ue);_e===void 0&&(_e=new WeakMap,c.set(Ue,_e));let Le=_e.get(ee);Le===void 0&&(Le=i.getUniformBlockIndex(Ue,ee.name),_e.set(ee,Le))}function qe(ee,Ue){const Le=c.get(Ue).get(ee);h.get(Ue)!==Le&&(i.uniformBlockBinding(Ue,Le,ee.__bindingPointIndex),h.set(Ue,Le))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},p={},x=null,B={},g={},w=new WeakMap,T=[],N=null,C=!1,R=null,m=null,f=null,S=null,l=null,L=null,U=null,M=new dt(0,0,0),b=0,P=!1,_=null,u=null,E=null,I=null,D=null,ie.set(0,0,i.canvas.width,i.canvas.height),ue.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ne,disable:ae,bindFramebuffer:le,drawBuffers:xe,useProgram:ve,setBlending:ye,setMaterial:Se,setFlipSided:Ge,setCullFace:De,setLineWidth:He,setPolygonOffset:nt,setScissorTest:Ie,activeTexture:Ae,bindTexture:te,unbindTexture:we,compressedTexImage2D:Pe,compressedTexImage3D:X,texImage2D:$,texImage3D:oe,pixelStorei:Ce,getParameter:Re,updateUBOMapping:ze,uniformBlockBinding:qe,texStorage2D:q,texStorage3D:Q,texSubImage2D:v,texSubImage3D:y,compressedTexSubImage2D:A,compressedTexSubImage3D:V,scissor:Me,viewport:Ee,reset:it}}function jx(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new wt,d=new WeakMap,p=new Set;let g;const w=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(X,v){return T?new OffscreenCanvas(X,v):ea("canvas")}function C(X,v,y){let A=1;const V=Pe(X);if((V.width>y||V.height>y)&&(A=y/Math.max(V.width,V.height)),A<1)if(typeof HTMLImageElement<"u"&&X instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&X instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&X instanceof ImageBitmap||typeof VideoFrame<"u"&&X instanceof VideoFrame){const q=Math.floor(A*V.width),Q=Math.floor(A*V.height);g===void 0&&(g=N(q,Q));const $=v?N(q,Q):g;return $.width=q,$.height=Q,$.getContext("2d").drawImage(X,0,0,q,Q),je("WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+q+"x"+Q+")."),$}else return"data"in X&&je("WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),X;return X}function R(X){return X.generateMipmaps}function m(X){i.generateMipmap(X)}function f(X){return X.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:X.isWebGL3DRenderTarget?i.TEXTURE_3D:X.isWebGLArrayRenderTarget||X.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(X,v,y,A,V,q=!1){if(X!==null){if(i[X]!==void 0)return i[X];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+X+"'")}let Q;A&&(Q=e.get("EXT_texture_norm16"),Q||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=v;if(v===i.RED&&(y===i.FLOAT&&($=i.R32F),y===i.HALF_FLOAT&&($=i.R16F),y===i.UNSIGNED_BYTE&&($=i.R8),y===i.UNSIGNED_SHORT&&Q&&($=Q.R16_EXT),y===i.SHORT&&Q&&($=Q.R16_SNORM_EXT)),v===i.RED_INTEGER&&(y===i.UNSIGNED_BYTE&&($=i.R8UI),y===i.UNSIGNED_SHORT&&($=i.R16UI),y===i.UNSIGNED_INT&&($=i.R32UI),y===i.BYTE&&($=i.R8I),y===i.SHORT&&($=i.R16I),y===i.INT&&($=i.R32I)),v===i.RG&&(y===i.FLOAT&&($=i.RG32F),y===i.HALF_FLOAT&&($=i.RG16F),y===i.UNSIGNED_BYTE&&($=i.RG8),y===i.UNSIGNED_SHORT&&Q&&($=Q.RG16_EXT),y===i.SHORT&&Q&&($=Q.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(y===i.UNSIGNED_BYTE&&($=i.RG8UI),y===i.UNSIGNED_SHORT&&($=i.RG16UI),y===i.UNSIGNED_INT&&($=i.RG32UI),y===i.BYTE&&($=i.RG8I),y===i.SHORT&&($=i.RG16I),y===i.INT&&($=i.RG32I)),v===i.RGB_INTEGER&&(y===i.UNSIGNED_BYTE&&($=i.RGB8UI),y===i.UNSIGNED_SHORT&&($=i.RGB16UI),y===i.UNSIGNED_INT&&($=i.RGB32UI),y===i.BYTE&&($=i.RGB8I),y===i.SHORT&&($=i.RGB16I),y===i.INT&&($=i.RGB32I)),v===i.RGBA_INTEGER&&(y===i.UNSIGNED_BYTE&&($=i.RGBA8UI),y===i.UNSIGNED_SHORT&&($=i.RGBA16UI),y===i.UNSIGNED_INT&&($=i.RGBA32UI),y===i.BYTE&&($=i.RGBA8I),y===i.SHORT&&($=i.RGBA16I),y===i.INT&&($=i.RGBA32I)),v===i.RGB&&(y===i.UNSIGNED_SHORT&&Q&&($=Q.RGB16_EXT),y===i.SHORT&&Q&&($=Q.RGB16_SNORM_EXT),y===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),y===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),v===i.RGBA){const oe=q?po:Mt.getTransfer(V);y===i.FLOAT&&($=i.RGBA32F),y===i.HALF_FLOAT&&($=i.RGBA16F),y===i.UNSIGNED_BYTE&&($=oe===It?i.SRGB8_ALPHA8:i.RGBA8),y===i.UNSIGNED_SHORT&&Q&&($=Q.RGBA16_EXT),y===i.SHORT&&Q&&($=Q.RGBA16_SNORM_EXT),y===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),y===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function l(X,v){let y;return X?v===null||v===Mi||v===Qs?y=i.DEPTH24_STENCIL8:v===zn?y=i.DEPTH32F_STENCIL8:v===Js&&(y=i.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Mi||v===Qs?y=i.DEPTH_COMPONENT24:v===zn?y=i.DEPTH_COMPONENT32F:v===Js&&(y=i.DEPTH_COMPONENT16),y}function L(X,v){return R(X)===!0||X.isFramebufferTexture&&X.minFilter!==hn&&X.minFilter!==dn?Math.log2(Math.max(v.width,v.height))+1:X.mipmaps!==void 0&&X.mipmaps.length>0?X.mipmaps.length:X.isCompressedTexture&&Array.isArray(X.image)?v.mipmaps.length:1}function U(X){const v=X.target;v.removeEventListener("dispose",U),b(v),v.isVideoTexture&&d.delete(v),v.isHTMLTexture&&p.delete(v)}function M(X){const v=X.target;v.removeEventListener("dispose",M),_(v)}function b(X){const v=n.get(X);if(v.__webglInit===void 0)return;const y=X.source,A=w.get(y);if(A){const V=A[v.__cacheKey];V.usedTimes--,V.usedTimes===0&&P(X),Object.keys(A).length===0&&w.delete(y)}n.remove(X)}function P(X){const v=n.get(X);i.deleteTexture(v.__webglTexture);const y=X.source,A=w.get(y);delete A[v.__cacheKey],a.memory.textures--}function _(X){const v=n.get(X);if(X.depthTexture&&(X.depthTexture.dispose(),n.remove(X.depthTexture)),X.isWebGLCubeRenderTarget)for(let A=0;A<6;A++){if(Array.isArray(v.__webglFramebuffer[A]))for(let V=0;V<v.__webglFramebuffer[A].length;V++)i.deleteFramebuffer(v.__webglFramebuffer[A][V]);else i.deleteFramebuffer(v.__webglFramebuffer[A]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[A])}else{if(Array.isArray(v.__webglFramebuffer))for(let A=0;A<v.__webglFramebuffer.length;A++)i.deleteFramebuffer(v.__webglFramebuffer[A]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let A=0;A<v.__webglColorRenderbuffer.length;A++)v.__webglColorRenderbuffer[A]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[A]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const y=X.textures;for(let A=0,V=y.length;A<V;A++){const q=n.get(y[A]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(y[A])}n.remove(X)}let u=0;function E(){u=0}function I(){return u}function D(X){u=X}function k(){const X=u;return X>=r.maxTextures&&je("WebGLTextures: Trying to use "+(X+1)+" texture units while this GPU supports only "+r.maxTextures),u+=1,X}function z(X){const v=[];return v.push(X.wrapS),v.push(X.wrapT),v.push(X.wrapR||0),v.push(X.magFilter),v.push(X.minFilter),v.push(X.anisotropy),v.push(X.internalFormat),v.push(X.format),v.push(X.type),v.push(X.generateMipmaps),v.push(X.premultiplyAlpha),v.push(X.flipY),v.push(X.unpackAlignment),v.push(X.colorSpace),v.join()}function G(X,v){const y=n.get(X);if(X.isVideoTexture&&te(X),X.isRenderTargetTexture===!1&&X.isExternalTexture!==!0&&X.version>0&&y.__version!==X.version){const A=X.image;if(A===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(A.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(y,X,v);return}}else X.isExternalTexture&&(y.__webglTexture=X.sourceTexture?X.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,y.__webglTexture,i.TEXTURE0+v)}function O(X,v){const y=n.get(X);if(X.isRenderTargetTexture===!1&&X.version>0&&y.__version!==X.version){ae(y,X,v);return}else X.isExternalTexture&&(y.__webglTexture=X.sourceTexture?X.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,y.__webglTexture,i.TEXTURE0+v)}function x(X,v){const y=n.get(X);if(X.isRenderTargetTexture===!1&&X.version>0&&y.__version!==X.version){ae(y,X,v);return}t.bindTexture(i.TEXTURE_3D,y.__webglTexture,i.TEXTURE0+v)}function B(X,v){const y=n.get(X);if(X.isCubeDepthTexture!==!0&&X.version>0&&y.__version!==X.version){le(y,X,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+v)}const J={[Xh]:i.REPEAT,[Ni]:i.CLAMP_TO_EDGE,[qh]:i.MIRRORED_REPEAT},j={[hn]:i.NEAREST,[g_]:i.NEAREST_MIPMAP_NEAREST,[ma]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[kl]:i.LINEAR_MIPMAP_NEAREST,[Tr]:i.LINEAR_MIPMAP_LINEAR},ie={[S_]:i.NEVER,[A_]:i.ALWAYS,[x_]:i.LESS,[Jc]:i.LEQUAL,[b_]:i.EQUAL,[Qc]:i.GEQUAL,[E_]:i.GREATER,[T_]:i.NOTEQUAL};function ue(X,v){if(v.type===zn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===dn||v.magFilter===kl||v.magFilter===ma||v.magFilter===Tr||v.minFilter===dn||v.minFilter===kl||v.minFilter===ma||v.minFilter===Tr)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(X,i.TEXTURE_WRAP_S,J[v.wrapS]),i.texParameteri(X,i.TEXTURE_WRAP_T,J[v.wrapT]),(X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY)&&i.texParameteri(X,i.TEXTURE_WRAP_R,J[v.wrapR]),i.texParameteri(X,i.TEXTURE_MAG_FILTER,j[v.magFilter]),i.texParameteri(X,i.TEXTURE_MIN_FILTER,j[v.minFilter]),v.compareFunction&&(i.texParameteri(X,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(X,i.TEXTURE_COMPARE_FUNC,ie[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===hn||v.minFilter!==ma&&v.minFilter!==Tr||v.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(X,y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function fe(X,v){let y=!1;X.__webglInit===void 0&&(X.__webglInit=!0,v.addEventListener("dispose",U));const A=v.source;let V=w.get(A);V===void 0&&(V={},w.set(A,V));const q=z(v);if(q!==X.__cacheKey){V[q]===void 0&&(V[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,y=!0),V[q].usedTimes++;const Q=V[X.__cacheKey];Q!==void 0&&(V[X.__cacheKey].usedTimes--,Q.usedTimes===0&&P(v)),X.__cacheKey=q,X.__webglTexture=V[q].texture}return y}function K(X,v,y){return Math.floor(Math.floor(X/y)/v)}function ne(X,v,y,A){const q=X.updateRanges;if(q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,y,A,v.data);else{q.sort((Ce,Me)=>Ce.start-Me.start);let Q=0;for(let Ce=1;Ce<q.length;Ce++){const Me=q[Q],Ee=q[Ce],ze=Me.start+Me.count,qe=K(Ee.start,v.width,4),it=K(Me.start,v.width,4);Ee.start<=ze+1&&qe===it&&K(Ee.start+Ee.count-1,v.width,4)===qe?Me.count=Math.max(Me.count,Ee.start+Ee.count-Me.start):(++Q,q[Q]=Ee)}q.length=Q+1;const $=t.getParameter(i.UNPACK_ROW_LENGTH),oe=t.getParameter(i.UNPACK_SKIP_PIXELS),Re=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Ce=0,Me=q.length;Ce<Me;Ce++){const Ee=q[Ce],ze=Math.floor(Ee.start/4),qe=Math.ceil(Ee.count/4),it=ze%v.width,ee=Math.floor(ze/v.width),Ue=qe,_e=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,it),t.pixelStorei(i.UNPACK_SKIP_ROWS,ee),t.texSubImage2D(i.TEXTURE_2D,0,it,ee,Ue,_e,y,A,v.data)}X.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Re)}}function ae(X,v,y){let A=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(A=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(A=i.TEXTURE_3D);const V=fe(X,v),q=v.source;t.bindTexture(A,X.__webglTexture,i.TEXTURE0+y);const Q=n.get(q);if(q.version!==Q.__version||V===!0){if(t.activeTexture(i.TEXTURE0+y),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const _e=Mt.getPrimaries(Mt.workingColorSpace),Le=v.colorSpace===or?null:Mt.getPrimaries(v.colorSpace),Ne=v.colorSpace===or||_e===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let oe=C(v.image,!1,r.maxTextureSize);oe=we(v,oe);const Re=s.convert(v.format,v.colorSpace),Ce=s.convert(v.type);let Me=S(v.internalFormat,Re,Ce,v.normalized,v.colorSpace,v.isVideoTexture);ue(A,v);let Ee;const ze=v.mipmaps,qe=v.isVideoTexture!==!0,it=Q.__version===void 0||V===!0,ee=q.dataReady,Ue=L(v,oe);if(v.isDepthTexture)Me=l(v.format===Ar,v.type),it&&(qe?t.texStorage2D(i.TEXTURE_2D,1,Me,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,Me,oe.width,oe.height,0,Re,Ce,null));else if(v.isDataTexture)if(ze.length>0){qe&&it&&t.texStorage2D(i.TEXTURE_2D,Ue,Me,ze[0].width,ze[0].height);for(let _e=0,Le=ze.length;_e<Le;_e++)Ee=ze[_e],qe?ee&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,Ee.width,Ee.height,Re,Ce,Ee.data):t.texImage2D(i.TEXTURE_2D,_e,Me,Ee.width,Ee.height,0,Re,Ce,Ee.data);v.generateMipmaps=!1}else qe?(it&&t.texStorage2D(i.TEXTURE_2D,Ue,Me,oe.width,oe.height),ee&&ne(v,oe,Re,Ce)):t.texImage2D(i.TEXTURE_2D,0,Me,oe.width,oe.height,0,Re,Ce,oe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){qe&&it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Me,ze[0].width,ze[0].height,oe.depth);for(let _e=0,Le=ze.length;_e<Le;_e++)if(Ee=ze[_e],v.format!==Vn)if(Re!==null)if(qe){if(ee)if(v.layerUpdates.size>0){const Ne=sp(Ee.width,Ee.height,v.format,v.type);for(const be of v.layerUpdates){const Ve=Ee.data.subarray(be*Ne/Ee.data.BYTES_PER_ELEMENT,(be+1)*Ne/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,be,Ee.width,Ee.height,1,Re,Ve)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,Ee.width,Ee.height,oe.depth,Re,Ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_e,Me,Ee.width,Ee.height,oe.depth,0,Ee.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?ee&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,Ee.width,Ee.height,oe.depth,Re,Ce,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,_e,Me,Ee.width,Ee.height,oe.depth,0,Re,Ce,Ee.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{qe&&it&&t.texStorage2D(i.TEXTURE_2D,Ue,Me,ze[0].width,ze[0].height);for(let _e=0,Le=ze.length;_e<Le;_e++)Ee=ze[_e],v.format!==Vn?Re!==null?qe?ee&&t.compressedTexSubImage2D(i.TEXTURE_2D,_e,0,0,Ee.width,Ee.height,Re,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,_e,Me,Ee.width,Ee.height,0,Ee.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?ee&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,Ee.width,Ee.height,Re,Ce,Ee.data):t.texImage2D(i.TEXTURE_2D,_e,Me,Ee.width,Ee.height,0,Re,Ce,Ee.data)}else if(v.isDataArrayTexture)if(qe){if(it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Me,oe.width,oe.height,oe.depth),ee)if(v.layerUpdates.size>0){const _e=sp(oe.width,oe.height,v.format,v.type);for(const Le of v.layerUpdates){const Ne=oe.data.subarray(Le*_e/oe.data.BYTES_PER_ELEMENT,(Le+1)*_e/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Le,oe.width,oe.height,1,Re,Ce,Ne)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Re,Ce,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,oe.width,oe.height,oe.depth,0,Re,Ce,oe.data);else if(v.isData3DTexture)qe?(it&&t.texStorage3D(i.TEXTURE_3D,Ue,Me,oe.width,oe.height,oe.depth),ee&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Re,Ce,oe.data)):t.texImage3D(i.TEXTURE_3D,0,Me,oe.width,oe.height,oe.depth,0,Re,Ce,oe.data);else if(v.isFramebufferTexture){if(it)if(qe)t.texStorage2D(i.TEXTURE_2D,Ue,Me,oe.width,oe.height);else{let _e=oe.width,Le=oe.height;for(let Ne=0;Ne<Ue;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,Me,_e,Le,0,Re,Ce,null),_e>>=1,Le>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){const _e=i.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),oe.parentNode!==_e){_e.appendChild(oe),p.add(v),_e.onpaint=Le=>{const Ne=Le.changedElements;for(const be of p)Ne.includes(be.image)&&(be.needsUpdate=!0)},_e.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,oe);else{const Ne=i.RGBA,be=i.RGBA,Ve=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ne,be,Ve,oe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ze.length>0){if(qe&&it){const _e=Pe(ze[0]);t.texStorage2D(i.TEXTURE_2D,Ue,Me,_e.width,_e.height)}for(let _e=0,Le=ze.length;_e<Le;_e++)Ee=ze[_e],qe?ee&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,Re,Ce,Ee):t.texImage2D(i.TEXTURE_2D,_e,Me,Re,Ce,Ee);v.generateMipmaps=!1}else if(qe){if(it){const _e=Pe(oe);t.texStorage2D(i.TEXTURE_2D,Ue,Me,_e.width,_e.height)}ee&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re,Ce,oe)}else t.texImage2D(i.TEXTURE_2D,0,Me,Re,Ce,oe);R(v)&&m(A),Q.__version=q.version,v.onUpdate&&v.onUpdate(v)}X.__version=v.version}function le(X,v,y){if(v.image.length!==6)return;const A=fe(X,v),V=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+y);const q=n.get(V);if(V.version!==q.__version||A===!0){t.activeTexture(i.TEXTURE0+y);const Q=Mt.getPrimaries(Mt.workingColorSpace),$=v.colorSpace===or?null:Mt.getPrimaries(v.colorSpace),oe=v.colorSpace===or||Q===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const Re=v.isCompressedTexture||v.image[0].isCompressedTexture,Ce=v.image[0]&&v.image[0].isDataTexture,Me=[];for(let be=0;be<6;be++)!Re&&!Ce?Me[be]=C(v.image[be],!0,r.maxCubemapSize):Me[be]=Ce?v.image[be].image:v.image[be],Me[be]=we(v,Me[be]);const Ee=Me[0],ze=s.convert(v.format,v.colorSpace),qe=s.convert(v.type),it=S(v.internalFormat,ze,qe,v.normalized,v.colorSpace),ee=v.isVideoTexture!==!0,Ue=q.__version===void 0||A===!0,_e=V.dataReady;let Le=L(v,Ee);ue(i.TEXTURE_CUBE_MAP,v);let Ne;if(Re){ee&&Ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,it,Ee.width,Ee.height);for(let be=0;be<6;be++){Ne=Me[be].mipmaps;for(let Ve=0;Ve<Ne.length;Ve++){const Be=Ne[Ve];v.format!==Vn?ze!==null?ee?_e&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ve,0,0,Be.width,Be.height,ze,Be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ve,it,Be.width,Be.height,0,Be.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ve,0,0,Be.width,Be.height,ze,qe,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ve,it,Be.width,Be.height,0,ze,qe,Be.data)}}}else{if(Ne=v.mipmaps,ee&&Ue){Ne.length>0&&Le++;const be=Pe(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,it,be.width,be.height)}for(let be=0;be<6;be++)if(Ce){ee?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Me[be].width,Me[be].height,ze,qe,Me[be].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,it,Me[be].width,Me[be].height,0,ze,qe,Me[be].data);for(let Ve=0;Ve<Ne.length;Ve++){const xt=Ne[Ve].image[be].image;ee?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ve+1,0,0,xt.width,xt.height,ze,qe,xt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ve+1,it,xt.width,xt.height,0,ze,qe,xt.data)}}else{ee?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ze,qe,Me[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,it,ze,qe,Me[be]);for(let Ve=0;Ve<Ne.length;Ve++){const Be=Ne[Ve];ee?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ve+1,0,0,ze,qe,Be.image[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ve+1,it,ze,qe,Be.image[be])}}}R(v)&&m(i.TEXTURE_CUBE_MAP),q.__version=V.version,v.onUpdate&&v.onUpdate(v)}X.__version=v.version}function xe(X,v,y,A,V,q){const Q=s.convert(y.format,y.colorSpace),$=s.convert(y.type),oe=S(y.internalFormat,Q,$,y.normalized,y.colorSpace),Re=n.get(v),Ce=n.get(y);if(Ce.__renderTarget=v,!Re.__hasExternalTextures){const Me=Math.max(1,v.width>>q),Ee=Math.max(1,v.height>>q);V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?t.texImage3D(V,q,oe,Me,Ee,v.depth,0,Q,$,null):t.texImage2D(V,q,oe,Me,Ee,0,Q,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,X),Ae(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,A,V,Ce.__webglTexture,0,Ie(v)):(V===i.TEXTURE_2D||V>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,A,V,Ce.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(X,v,y){if(i.bindRenderbuffer(i.RENDERBUFFER,X),v.depthBuffer){const A=v.depthTexture,V=A&&A.isDepthTexture?A.type:null,q=l(v.stencilBuffer,V),Q=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ae(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie(v),q,v.width,v.height):y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie(v),q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,q,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,X)}else{const A=v.textures;for(let V=0;V<A.length;V++){const q=A[V],Q=s.convert(q.format,q.colorSpace),$=s.convert(q.type),oe=S(q.internalFormat,Q,$,q.normalized,q.colorSpace);Ae(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie(v),oe,v.width,v.height):y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie(v),oe,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,oe,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ge(X,v,y){const A=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,X),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const V=n.get(v.depthTexture);if(V.__renderTarget=v,(!V.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),A){if(V.__webglInit===void 0&&(V.__webglInit=!0,v.depthTexture.addEventListener("dispose",U)),V.__webglTexture===void 0){V.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),ue(i.TEXTURE_CUBE_MAP,v.depthTexture);const Re=s.convert(v.depthTexture.format),Ce=s.convert(v.depthTexture.type);let Me;v.depthTexture.format===Vi?Me=i.DEPTH_COMPONENT24:v.depthTexture.format===Ar&&(Me=i.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Me,v.width,v.height,0,Re,Ce,null)}}else G(v.depthTexture,0);const q=V.__webglTexture,Q=Ie(v),$=A?i.TEXTURE_CUBE_MAP_POSITIVE_X+y:i.TEXTURE_2D,oe=v.depthTexture.format===Ar?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Vi)Ae(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,$,q,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,oe,$,q,0);else if(v.depthTexture.format===Ar)Ae(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,$,q,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,oe,$,q,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Te(X){const v=n.get(X),y=X.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==X.depthTexture){const A=X.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),A){const V=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,A.removeEventListener("dispose",V)};A.addEventListener("dispose",V),v.__depthDisposeCallback=V}v.__boundDepthTexture=A}if(X.depthTexture&&!v.__autoAllocateDepthBuffer)if(y)for(let A=0;A<6;A++)ge(v.__webglFramebuffer[A],X,A);else{const A=X.texture.mipmaps;A&&A.length>0?ge(v.__webglFramebuffer[0],X,0):ge(v.__webglFramebuffer,X,0)}else if(y){v.__webglDepthbuffer=[];for(let A=0;A<6;A++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[A]),v.__webglDepthbuffer[A]===void 0)v.__webglDepthbuffer[A]=i.createRenderbuffer(),ve(v.__webglDepthbuffer[A],X,!1);else{const V=X.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[A];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,q)}}else{const A=X.texture.mipmaps;if(A&&A.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ve(v.__webglDepthbuffer,X,!1);else{const V=X.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(X,v,y){const A=n.get(X);v!==void 0&&xe(A.__webglFramebuffer,X,X.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),y!==void 0&&Te(X)}function Se(X){const v=X.texture,y=n.get(X),A=n.get(v);X.addEventListener("dispose",M);const V=X.textures,q=X.isWebGLCubeRenderTarget===!0,Q=V.length>1;if(Q||(A.__webglTexture===void 0&&(A.__webglTexture=i.createTexture()),A.__version=v.version,a.memory.textures++),q){y.__webglFramebuffer=[];for(let $=0;$<6;$++)if(v.mipmaps&&v.mipmaps.length>0){y.__webglFramebuffer[$]=[];for(let oe=0;oe<v.mipmaps.length;oe++)y.__webglFramebuffer[$][oe]=i.createFramebuffer()}else y.__webglFramebuffer[$]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){y.__webglFramebuffer=[];for(let $=0;$<v.mipmaps.length;$++)y.__webglFramebuffer[$]=i.createFramebuffer()}else y.__webglFramebuffer=i.createFramebuffer();if(Q)for(let $=0,oe=V.length;$<oe;$++){const Re=n.get(V[$]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),a.memory.textures++)}if(X.samples>0&&Ae(X)===!1){y.__webglMultisampledFramebuffer=i.createFramebuffer(),y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,y.__webglMultisampledFramebuffer);for(let $=0;$<V.length;$++){const oe=V[$];y.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,y.__webglColorRenderbuffer[$]);const Re=s.convert(oe.format,oe.colorSpace),Ce=s.convert(oe.type),Me=S(oe.internalFormat,Re,Ce,oe.normalized,oe.colorSpace,X.isXRRenderTarget===!0),Ee=Ie(X);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,Me,X.width,X.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,y.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),X.depthBuffer&&(y.__webglDepthRenderbuffer=i.createRenderbuffer(),ve(y.__webglDepthRenderbuffer,X,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture),ue(i.TEXTURE_CUBE_MAP,v);for(let $=0;$<6;$++)if(v.mipmaps&&v.mipmaps.length>0)for(let oe=0;oe<v.mipmaps.length;oe++)xe(y.__webglFramebuffer[$][oe],X,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe);else xe(y.__webglFramebuffer[$],X,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);R(v)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){for(let $=0,oe=V.length;$<oe;$++){const Re=V[$],Ce=n.get(Re);let Me=i.TEXTURE_2D;(X.isWebGL3DRenderTarget||X.isWebGLArrayRenderTarget)&&(Me=X.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,Ce.__webglTexture),ue(Me,Re),xe(y.__webglFramebuffer,X,Re,i.COLOR_ATTACHMENT0+$,Me,0),R(Re)&&m(Me)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((X.isWebGL3DRenderTarget||X.isWebGLArrayRenderTarget)&&($=X.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,A.__webglTexture),ue($,v),v.mipmaps&&v.mipmaps.length>0)for(let oe=0;oe<v.mipmaps.length;oe++)xe(y.__webglFramebuffer[oe],X,v,i.COLOR_ATTACHMENT0,$,oe);else xe(y.__webglFramebuffer,X,v,i.COLOR_ATTACHMENT0,$,0);R(v)&&m($),t.unbindTexture()}X.depthBuffer&&Te(X)}function Ge(X){const v=X.textures;for(let y=0,A=v.length;y<A;y++){const V=v[y];if(R(V)){const q=f(X),Q=n.get(V).__webglTexture;t.bindTexture(q,Q),m(q),t.unbindTexture()}}}const De=[],He=[];function nt(X){if(X.samples>0){if(Ae(X)===!1){const v=X.textures,y=X.width,A=X.height;let V=i.COLOR_BUFFER_BIT;const q=X.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=n.get(X),$=v.length>1;if($)for(let Re=0;Re<v.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Q.__webglMultisampledFramebuffer);const oe=X.texture.mipmaps;oe&&oe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Q.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let Re=0;Re<v.length;Re++){if(X.resolveDepthBuffer&&(X.depthBuffer&&(V|=i.DEPTH_BUFFER_BIT),X.stencilBuffer&&X.resolveStencilBuffer&&(V|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Q.__webglColorRenderbuffer[Re]);const Ce=n.get(v[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ce,0)}i.blitFramebuffer(0,0,y,A,0,0,y,A,V,i.NEAREST),h===!0&&(De.length=0,He.length=0,De.push(i.COLOR_ATTACHMENT0+Re),X.depthBuffer&&X.storeMultisampledDepthBuffer===!1&&(De.push(q),He.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,He)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,De))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let Re=0;Re<v.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,Q.__webglColorRenderbuffer[Re]);const Ce=n.get(v[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,Ce,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Q.__webglMultisampledFramebuffer)}else if(X.depthBuffer&&X.storeMultisampledDepthBuffer===!1&&h){const v=X.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Ie(X){return Math.min(r.maxSamples,X.samples)}function Ae(X){const v=n.get(X);return X.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function te(X){const v=a.render.frame;d.get(X)!==v&&(d.set(X,v),X.update())}function we(X,v){const y=X.colorSpace,A=X.format,V=X.type;return X.isCompressedTexture===!0||X.isVideoTexture===!0||y!==fo&&y!==or&&(Mt.getTransfer(y)===It?(A!==Vn||V!==Ln)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",y)),v}function Pe(X){return typeof HTMLImageElement<"u"&&X instanceof HTMLImageElement?(c.width=X.naturalWidth||X.width,c.height=X.naturalHeight||X.height):typeof VideoFrame<"u"&&X instanceof VideoFrame?(c.width=X.displayWidth,c.height=X.displayHeight):(c.width=X.width,c.height=X.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=E,this.getTextureUnits=I,this.setTextureUnits=D,this.setTexture2D=G,this.setTexture2DArray=O,this.setTexture3D=x,this.setTextureCube=B,this.rebindTextures=ye,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function eb(i,e){function t(n,r=or){let s;const a=Mt.getTransfer(r);if(n===Ln)return i.UNSIGNED_BYTE;if(n===Wc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===R0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===C0)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===T0)return i.BYTE;if(n===A0)return i.SHORT;if(n===Js)return i.UNSIGNED_SHORT;if(n===Hc)return i.INT;if(n===Mi)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===wi)return i.HALF_FLOAT;if(n===I0)return i.ALPHA;if(n===P0)return i.RGB;if(n===Vn)return i.RGBA;if(n===Vi)return i.DEPTH_COMPONENT;if(n===Ar)return i.DEPTH_STENCIL;if(n===qc)return i.RED;if(n===$c)return i.RED_INTEGER;if(n===Pr)return i.RG;if(n===Yc)return i.RG_INTEGER;if(n===Zc)return i.RGBA_INTEGER;if(n===ja||n===eo||n===to||n===no)if(a===It)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ja)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===to)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===no)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ja)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===eo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===to)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===no)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$h||n===Yh||n===Zh||n===Kh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===$h)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jh||n===Qh||n===jh||n===ec||n===tc||n===lo||n===nc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Jh||n===Qh)return a===It?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===jh)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ec)return s.COMPRESSED_R11_EAC;if(n===tc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===lo)return s.COMPRESSED_RG11_EAC;if(n===nc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ic||n===rc||n===sc||n===ac||n===oc||n===lc||n===hc||n===cc||n===uc||n===fc||n===dc||n===pc||n===mc||n===gc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ic)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ac)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gc)return a===It?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vc||n===_c||n===yc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===vc)return a===It?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_c)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mc||n===wc||n===ho||n===Sc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Mc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===wc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ho)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const tb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ib{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new W0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Si({vertexShader:tb,fragmentShader:nb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nn(new ra(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rb extends hr{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",h=1,c=null,d=null,p=null,g=null,w=null,T=null;const N=typeof XRWebGLBinding<"u",C=new ib,R={},m=t.getContextAttributes();let f=null,S=null;const l=[],L=[],U=new wt;let M=null,b=null;const P=new xn;P.viewport=new Dt;const _=new xn;_.viewport=new Dt;const u=[P,_],E=new Qy;let I=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=l[K];return ne===void 0&&(ne=new $l,l[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=l[K];return ne===void 0&&(ne=new $l,l[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=l[K];return ne===void 0&&(ne=new $l,l[K]=ne),ne.getHandSpace()};function k(K){const ne=L.indexOf(K.inputSource);if(ne===-1)return;const ae=l[ne];ae!==void 0&&(ae.update(K.inputSource,K.frame,c||a),ae.dispatchEvent({type:K.type,data:K.inputSource}))}function z(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",G);for(let K=0;K<l.length;K++){const ne=L[K];ne!==null&&(L[K]=null,l[K].disconnect(ne))}I=null,D=null,C.reset();for(const K in R)delete R[K];if(e.setRenderTarget(f),w=null,g=null,p=null,r=null,S=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(U.width,U.height,!1),b!==null){const K=b.camera;K.fov=b.fov,K.zoom=b.zoom,K.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return g!==null?g:w},this.getBinding=function(){return p===null&&N&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return T},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",z),r.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(U),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,le=null,xe=null;m.depth&&(xe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?Ar:Vi,le=m.stencil?Qs:Mi);const ve={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};p=this.getBinding(),g=p.createProjectionLayer(ve),r.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),S=new ri(g.textureWidth,g.textureHeight,{format:Vn,type:Ln,depthTexture:new ta(g.textureWidth,g.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};w=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:w}),e.setPixelRatio(1),e.setSize(w.framebufferWidth,w.framebufferHeight,!1),S=new ri(w.framebufferWidth,w.framebufferHeight,{format:Vn,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:w.ignoreDepthValues===!1,resolveStencilBuffer:w.ignoreDepthValues===!1,storeMultisampledDepthBuffer:w.ignoreDepthValues===!1,storeMultisampledStencilBuffer:w.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(h),c=null,a=await r.requestReferenceSpace(o),fe.setContext(r),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function G(K){for(let ne=0;ne<K.removed.length;ne++){const ae=K.removed[ne],le=L.indexOf(ae);le>=0&&(L[le]=null,l[le].disconnect(ae))}for(let ne=0;ne<K.added.length;ne++){const ae=K.added[ne];let le=L.indexOf(ae);if(le===-1){for(let ve=0;ve<l.length;ve++)if(ve>=L.length){L.push(ae),le=ve;break}else if(L[ve]===null){L[ve]=ae,le=ve;break}if(le===-1)break}const xe=l[le];xe&&xe.connect(ae)}}const O=new de,x=new de;function B(K,ne,ae){O.setFromMatrixPosition(ne.matrixWorld),x.setFromMatrixPosition(ae.matrixWorld);const le=O.distanceTo(x),xe=ne.projectionMatrix.elements,ve=ae.projectionMatrix.elements,ge=xe[14]/(xe[10]-1),Te=xe[14]/(xe[10]+1),ye=(xe[9]+1)/xe[5],Se=(xe[9]-1)/xe[5],Ge=(xe[8]-1)/xe[0],De=(ve[8]+1)/ve[0],He=ge*Ge,nt=ge*De,Ie=le/(-Ge+De),Ae=Ie*-Ge;if(ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ae),K.translateZ(Ie),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),xe[10]===-1)K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const te=ge+Ie,we=Te+Ie,Pe=He-Ae,X=nt+(le-Ae),v=ye*Te/we*te,y=Se*Te/we*te;K.projectionMatrix.makePerspective(Pe,X,v,y,te,we),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function J(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ne=K.near,ae=K.far;C.texture!==null&&(C.depthNear>0&&(ne=C.depthNear),C.depthFar>0&&(ae=C.depthFar)),E.near=_.near=P.near=ne,E.far=_.far=P.far=ae,(I!==E.near||D!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),I=E.near,D=E.far),E.layers.mask=K.layers.mask|6,P.layers.mask=E.layers.mask&-5,_.layers.mask=E.layers.mask&-3;const le=K.parent,xe=E.cameras;J(E,le);for(let ve=0;ve<xe.length;ve++)J(xe[ve],le);xe.length===2?B(E,P,_):E.projectionMatrix.copy(P.projectionMatrix),b===null&&K.isPerspectiveCamera&&(b={camera:K,fov:K.fov,zoom:K.zoom}),j(K,E,le)};function j(K,ne,ae){ae===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(ae.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=hs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(g===null&&w===null))return h},this.setFoveation=function(K){h=K,g!==null&&(g.fixedFoveation=K),w!==null&&w.fixedFoveation!==void 0&&(w.fixedFoveation=K)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(E)},this.getCameraTexture=function(K){return R[K]};let ie=null;function ue(K,ne){if(d=ne.getViewerPose(c||a),T=ne,d!==null){const ae=d.views;w!==null&&(e.setRenderTargetFramebuffer(S,w.framebuffer),e.setRenderTarget(S));let le=!1;ae.length!==E.cameras.length&&(E.cameras.length=0,le=!0);for(let Te=0;Te<ae.length;Te++){const ye=ae[Te];let Se=null;if(w!==null)Se=w.getViewport(ye);else{const De=p.getViewSubImage(g,ye);Se=De.viewport,Te===0&&(e.setRenderTargetTextures(S,De.colorTexture,De.depthStencilTexture),e.setRenderTarget(S))}let Ge=u[Te];Ge===void 0&&(Ge=new xn,Ge.layers.enable(Te),Ge.viewport=new Dt,u[Te]=Ge),Ge.matrix.fromArray(ye.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(ye.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(Se.x,Se.y,Se.width,Se.height),Te===0&&(E.matrix.copy(Ge.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),le===!0&&E.cameras.push(Ge)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&N){p=n.getBinding();const Te=p.getDepthInformation(ae[0]);Te&&Te.isValid&&Te.texture&&C.init(Te,r.renderState)}if(xe&&xe.includes("camera-access")&&N){e.state.unbindTexture(),p=n.getBinding();for(let Te=0;Te<ae.length;Te++){const ye=ae[Te].camera;if(ye){let Se=R[ye];Se||(Se=new W0,R[ye]=Se);const Ge=p.getCameraImage(ye);Se.sourceTexture=Ge}}}}for(let ae=0;ae<l.length;ae++){const le=L[ae],xe=l[ae];le!==null&&xe!==void 0&&xe.update(le,ne,c||a)}ie&&ie(K,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),T=null}const fe=new J0;fe.setAnimationLoop(ue),this.setAnimationLoop=function(K){ie=K},this.dispose=function(){}}}const sb=new _t,rm=new st;rm.set(-1,0,0,0,1,0,0,0,1);function ab(i,e){function t(C,R){C.matrixAutoUpdate===!0&&C.updateMatrix(),R.value.copy(C.matrix)}function n(C,R){R.color.getRGB(C.fogColor.value,X0(i)),R.isFog?(C.fogNear.value=R.near,C.fogFar.value=R.far):R.isFogExp2&&(C.fogDensity.value=R.density)}function r(C,R,m,f,S){R.isNodeMaterial?R.uniformsNeedUpdate=!1:R.isMeshBasicMaterial?s(C,R):R.isMeshLambertMaterial?(s(C,R),R.envMap&&(C.envMapIntensity.value=R.envMapIntensity)):R.isMeshToonMaterial?(s(C,R),p(C,R)):R.isMeshPhongMaterial?(s(C,R),d(C,R),R.envMap&&(C.envMapIntensity.value=R.envMapIntensity)):R.isMeshStandardMaterial?(s(C,R),g(C,R),R.isMeshPhysicalMaterial&&w(C,R,S)):R.isMeshMatcapMaterial?(s(C,R),T(C,R)):R.isMeshDepthMaterial?s(C,R):R.isMeshDistanceMaterial?(s(C,R),N(C,R)):R.isMeshNormalMaterial?s(C,R):R.isLineBasicMaterial?(a(C,R),R.isLineDashedMaterial&&o(C,R)):R.isPointsMaterial?h(C,R,m,f):R.isSpriteMaterial?c(C,R):R.isShadowMaterial?(C.color.value.copy(R.color),C.opacity.value=R.opacity):R.isShaderMaterial&&(R.uniformsNeedUpdate=!1)}function s(C,R){C.opacity.value=R.opacity,R.color&&C.diffuse.value.copy(R.color),R.emissive&&C.emissive.value.copy(R.emissive).multiplyScalar(R.emissiveIntensity),R.map&&(C.map.value=R.map,t(R.map,C.mapTransform)),R.alphaMap&&(C.alphaMap.value=R.alphaMap,t(R.alphaMap,C.alphaMapTransform)),R.bumpMap&&(C.bumpMap.value=R.bumpMap,t(R.bumpMap,C.bumpMapTransform),C.bumpScale.value=R.bumpScale,R.side===En&&(C.bumpScale.value*=-1)),R.normalMap&&(C.normalMap.value=R.normalMap,t(R.normalMap,C.normalMapTransform),C.normalScale.value.copy(R.normalScale),R.side===En&&C.normalScale.value.negate()),R.displacementMap&&(C.displacementMap.value=R.displacementMap,t(R.displacementMap,C.displacementMapTransform),C.displacementScale.value=R.displacementScale,C.displacementBias.value=R.displacementBias),R.emissiveMap&&(C.emissiveMap.value=R.emissiveMap,t(R.emissiveMap,C.emissiveMapTransform)),R.specularMap&&(C.specularMap.value=R.specularMap,t(R.specularMap,C.specularMapTransform)),R.alphaTest>0&&(C.alphaTest.value=R.alphaTest);const m=e.get(R),f=m.envMap,S=m.envMapRotation;f&&(C.envMap.value=f,C.envMapRotation.value.setFromMatrix4(sb.makeRotationFromEuler(S)).transpose(),f.isCubeTexture&&f.isRenderTargetTexture===!1&&C.envMapRotation.value.premultiply(rm),C.reflectivity.value=R.reflectivity,C.ior.value=R.ior,C.refractionRatio.value=R.refractionRatio),R.lightMap&&(C.lightMap.value=R.lightMap,C.lightMapIntensity.value=R.lightMapIntensity,t(R.lightMap,C.lightMapTransform)),R.aoMap&&(C.aoMap.value=R.aoMap,C.aoMapIntensity.value=R.aoMapIntensity,t(R.aoMap,C.aoMapTransform))}function a(C,R){C.diffuse.value.copy(R.color),C.opacity.value=R.opacity,R.map&&(C.map.value=R.map,t(R.map,C.mapTransform))}function o(C,R){C.dashSize.value=R.dashSize,C.totalSize.value=R.dashSize+R.gapSize,C.scale.value=R.scale}function h(C,R,m,f){C.diffuse.value.copy(R.color),C.opacity.value=R.opacity,C.size.value=R.size*m,C.scale.value=f*.5,R.map&&(C.map.value=R.map,t(R.map,C.uvTransform)),R.alphaMap&&(C.alphaMap.value=R.alphaMap,t(R.alphaMap,C.alphaMapTransform)),R.alphaTest>0&&(C.alphaTest.value=R.alphaTest)}function c(C,R){C.diffuse.value.copy(R.color),C.opacity.value=R.opacity,C.rotation.value=R.rotation,R.map&&(C.map.value=R.map,t(R.map,C.mapTransform)),R.alphaMap&&(C.alphaMap.value=R.alphaMap,t(R.alphaMap,C.alphaMapTransform)),R.alphaTest>0&&(C.alphaTest.value=R.alphaTest)}function d(C,R){C.specular.value.copy(R.specular),C.shininess.value=Math.max(R.shininess,1e-4)}function p(C,R){R.gradientMap&&(C.gradientMap.value=R.gradientMap)}function g(C,R){C.metalness.value=R.metalness,R.metalnessMap&&(C.metalnessMap.value=R.metalnessMap,t(R.metalnessMap,C.metalnessMapTransform)),C.roughness.value=R.roughness,R.roughnessMap&&(C.roughnessMap.value=R.roughnessMap,t(R.roughnessMap,C.roughnessMapTransform)),R.envMap&&(C.envMapIntensity.value=R.envMapIntensity)}function w(C,R,m){C.ior.value=R.ior,R.sheen>0&&(C.sheenColor.value.copy(R.sheenColor).multiplyScalar(R.sheen),C.sheenRoughness.value=R.sheenRoughness,R.sheenColorMap&&(C.sheenColorMap.value=R.sheenColorMap,t(R.sheenColorMap,C.sheenColorMapTransform)),R.sheenRoughnessMap&&(C.sheenRoughnessMap.value=R.sheenRoughnessMap,t(R.sheenRoughnessMap,C.sheenRoughnessMapTransform))),R.clearcoat>0&&(C.clearcoat.value=R.clearcoat,C.clearcoatRoughness.value=R.clearcoatRoughness,R.clearcoatMap&&(C.clearcoatMap.value=R.clearcoatMap,t(R.clearcoatMap,C.clearcoatMapTransform)),R.clearcoatRoughnessMap&&(C.clearcoatRoughnessMap.value=R.clearcoatRoughnessMap,t(R.clearcoatRoughnessMap,C.clearcoatRoughnessMapTransform)),R.clearcoatNormalMap&&(C.clearcoatNormalMap.value=R.clearcoatNormalMap,t(R.clearcoatNormalMap,C.clearcoatNormalMapTransform),C.clearcoatNormalScale.value.copy(R.clearcoatNormalScale),R.side===En&&C.clearcoatNormalScale.value.negate())),R.dispersion>0&&(C.dispersion.value=R.dispersion),R.retroreflectivity>0&&(C.retroreflectivity.value=R.retroreflectivity),R.iridescence>0&&(C.iridescence.value=R.iridescence,C.iridescenceIOR.value=R.iridescenceIOR,C.iridescenceThicknessMinimum.value=R.iridescenceThicknessRange[0],C.iridescenceThicknessMaximum.value=R.iridescenceThicknessRange[1],R.iridescenceMap&&(C.iridescenceMap.value=R.iridescenceMap,t(R.iridescenceMap,C.iridescenceMapTransform)),R.iridescenceThicknessMap&&(C.iridescenceThicknessMap.value=R.iridescenceThicknessMap,t(R.iridescenceThicknessMap,C.iridescenceThicknessMapTransform))),R.transmission>0&&(C.transmission.value=R.transmission,C.transmissionSamplerMap.value=m.texture,C.transmissionSamplerSize.value.set(m.width,m.height),R.transmissionMap&&(C.transmissionMap.value=R.transmissionMap,t(R.transmissionMap,C.transmissionMapTransform)),C.thickness.value=R.thickness,R.thicknessMap&&(C.thicknessMap.value=R.thicknessMap,t(R.thicknessMap,C.thicknessMapTransform)),C.attenuationDistance.value=R.attenuationDistance,C.attenuationColor.value.copy(R.attenuationColor)),R.anisotropy>0&&(C.anisotropyVector.value.set(R.anisotropy*Math.cos(R.anisotropyRotation),R.anisotropy*Math.sin(R.anisotropyRotation)),R.anisotropyMap&&(C.anisotropyMap.value=R.anisotropyMap,t(R.anisotropyMap,C.anisotropyMapTransform))),C.specularIntensity.value=R.specularIntensity,C.specularColor.value.copy(R.specularColor),R.specularColorMap&&(C.specularColorMap.value=R.specularColorMap,t(R.specularColorMap,C.specularColorMapTransform)),R.specularIntensityMap&&(C.specularIntensityMap.value=R.specularIntensityMap,t(R.specularIntensityMap,C.specularIntensityMapTransform))}function T(C,R){R.matcap&&(C.matcap.value=R.matcap)}function N(C,R){const m=e.get(R).light;C.referencePosition.value.setFromMatrixPosition(m.matrixWorld),C.nearDistance.value=m.shadow.camera.near,C.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function ob(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(S,l){const L=l.program;n.uniformBlockBinding(S,L)}function c(S,l){let L=r[S.id];L===void 0&&(C(S),L=d(S),r[S.id]=L,S.addEventListener("dispose",m));const U=l.program;n.updateUBOMapping(S,U);const M=e.render.frame;s[S.id]!==M&&(g(S),s[S.id]=M)}function d(S){const l=p();S.__bindingPointIndex=l;const L=i.createBuffer(),U=S.__size,M=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,U,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,l,L),L}function p(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(S){const l=r[S.id],L=S.uniforms,U=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,l);for(let M=0,b=L.length;M<b;M++){const P=L[M];if(Array.isArray(P))for(let _=0,u=P.length;_<u;_++)w(P[_],M,_,U);else w(P,M,0,U)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function w(S,l,L,U){if(N(S,l,L,U)===!0){const M=S.__offset,b=S.value;if(Array.isArray(b)){let P=0;for(let _=0;_<b.length;_++){const u=b[_],E=R(u);T(u,S.__data,P),typeof u!="number"&&typeof u!="boolean"&&!u.isMatrix3&&!ArrayBuffer.isView(u)&&(P+=E.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(b,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,S.__data)}}function T(S,l,L){typeof S=="number"||typeof S=="boolean"?l[0]=S:S.isMatrix3?(l[0]=S.elements[0],l[1]=S.elements[1],l[2]=S.elements[2],l[3]=0,l[4]=S.elements[3],l[5]=S.elements[4],l[6]=S.elements[5],l[7]=0,l[8]=S.elements[6],l[9]=S.elements[7],l[10]=S.elements[8],l[11]=0):ArrayBuffer.isView(S)?l.set(new S.constructor(S.buffer,S.byteOffset,l.length)):S.toArray(l,L)}function N(S,l,L,U){const M=S.value,b=l+"_"+L;if(U[b]===void 0)return typeof M=="number"||typeof M=="boolean"?U[b]=M:ArrayBuffer.isView(M)?U[b]=M.slice():U[b]=M.clone(),!0;{const P=U[b];if(typeof M=="number"||typeof M=="boolean"){if(P!==M)return U[b]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(P.equals(M)===!1)return P.copy(M),!0}}return!1}function C(S){const l=S.uniforms;let L=0;const U=16;for(let b=0,P=l.length;b<P;b++){const _=Array.isArray(l[b])?l[b]:[l[b]];for(let u=0,E=_.length;u<E;u++){const I=_[u],D=Array.isArray(I.value)?I.value:[I.value];for(let k=0,z=D.length;k<z;k++){const G=D[k],O=R(G),x=L%U,B=x%O.boundary,J=x+B;L+=B,J!==0&&U-J<O.storage&&(L+=U-J),I.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=L,L+=O.storage}}}const M=L%U;return M>0&&(L+=U-M),S.__size=L,S.__cache={},this}function R(S){const l={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(l.boundary=4,l.storage=4):S.isVector2?(l.boundary=8,l.storage=8):S.isVector3||S.isColor?(l.boundary=16,l.storage=12):S.isVector4?(l.boundary=16,l.storage=16):S.isMatrix3?(l.boundary=48,l.storage=48):S.isMatrix4?(l.boundary=64,l.storage=64):S.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(l.boundary=16,l.storage=S.byteLength):je("WebGLRenderer: Unsupported uniform value type.",S),l}function m(S){const l=S.target;l.removeEventListener("dispose",m);const L=a.indexOf(l.__bindingPointIndex);a.splice(L,1),i.deleteBuffer(r[l.id]),delete r[l.id],delete s[l.id]}function f(){for(const S in r)i.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:h,update:c,dispose:f}}const lb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let di=null;function hb(){return di===null&&(di=new tu(lb,16,16,Pr,wi),di.name="DFG_LUT",di.minFilter=dn,di.magFilter=dn,di.wrapS=Ni,di.wrapT=Ni,di.generateMipmaps=!1,di.needsUpdate=!0),di}class cb{constructor(e={}){const{canvas:t=I_(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:g=!1,outputBufferType:w=Ln}=e;this.isWebGLRenderer=!0;let T;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=n.getContextAttributes().alpha}else T=a;const N=w,C=new Set([Zc,Yc,$c]),R=new Set([Ln,Mi,Js,Qs,Wc,Xc]),m=new Uint32Array(4),f=new Int32Array(4),S=new de;let l=null,L=null;const U=[],M=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let _=!1,u=null,E=null,I=null,D=null;this._outputColorSpace=kn;let k=0,z=0,G=null,O=-1,x=null;const B=new Dt,J=new Dt;let j=null;const ie=new dt(0);let ue=0,fe=t.width,K=t.height,ne=1,ae=null,le=null;const xe=new Dt(0,0,fe,K),ve=new Dt(0,0,fe,K);let ge=!1;const Te=new nu;let ye=!1,Se=!1;const Ge=new _t,De=new de,He=new Dt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function Ae(){return G===null?ne:1}let te=n;function we(W,re){return t.getContext(W,re)}let Pe,X,v,y,A,V,q,Q,$,oe,Re,Ce,Me,Ee,ze,qe,it,ee,Ue,_e,Le,Ne,be;try{const W={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gc}`),t.addEventListener("webglcontextlost",xt,!1),t.addEventListener("webglcontextrestored",et,!1),t.addEventListener("webglcontextcreationerror",yt,!1),te===null){const re="webgl2";if(te=we(re,W),te===null)throw we(re)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ve()}catch(W){throw t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",yt,!1),rt("WebGLRenderer: "+W.message),W}function Ve(){Pe=new hS(te),Pe.init(),Le=new eb(te,Pe),X=new jw(te,Pe,e,Le),v=new Qx(te,Pe),X.reversedDepthBuffer&&g&&v.buffers.depth.setReversed(!0),E=te.createFramebuffer(),I=te.createFramebuffer(),D=te.createFramebuffer(),y=new fS(te),A=new Ox,V=new jx(te,Pe,v,A,X,Le,y),q=new lS(P),Q=new p1(te),Ne=new Jw(te,Q),$=new cS(te,Q,y,Ne),oe=new pS(te,$,Q,Ne,y),ee=new dS(te,X,V),ze=new eS(A),Re=new Bx(P,q,Pe,X,Ne,ze),Ce=new ab(P,A),Me=new zx,Ee=new qx(Pe),it=new Kw(P,q,v,oe,T,h),qe=new Jx(P,oe,X),be=new ob(te,y,X,v),Ue=new Qw(te,Pe,y),_e=new uS(te,Pe,y),y.programs=Re.programs,P.capabilities=X,P.extensions=Pe,P.properties=A,P.renderLists=Me,P.shadowMap=qe,P.state=v,P.info=y}N!==Ln&&(b=new gS(N,t.width,t.height,o,r,s));const Be=new rb(P,te);this.xr=Be,this.getContext=function(){return te},this.getContextAttributes=function(){return te.getContextAttributes()},this.forceContextLoss=function(){const W=Pe.get("WEBGL_lose_context");W&&W.loseContext()},this.forceContextRestore=function(){const W=Pe.get("WEBGL_lose_context");W&&W.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(W){W!==void 0&&(ne=W,this.setSize(fe,K,!1))},this.getSize=function(W){return W.set(fe,K)},this.setSize=function(W,re,pe=!0){if(Be.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=W,K=re,t.width=Math.floor(W*ne),t.height=Math.floor(re*ne),pe===!0&&(t.style.width=W+"px",t.style.height=re+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,W,re)},this.getDrawingBufferSize=function(W){return W.set(fe*ne,K*ne).floor()},this.setDrawingBufferSize=function(W,re,pe){fe=W,K=re,ne=pe,t.width=Math.floor(W*pe),t.height=Math.floor(re*pe),this.setViewport(0,0,W,re)},this.setEffects=function(W){if(N===Ln){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(W){for(let re=0;re<W.length;re++)if(W[re].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(W||[])},this.getCurrentViewport=function(W){return W.copy(B)},this.getViewport=function(W){return W.copy(xe)},this.setViewport=function(W,re,pe,he){W.isVector4?xe.set(W.x,W.y,W.z,W.w):xe.set(W,re,pe,he),v.viewport(B.copy(xe).multiplyScalar(ne).round())},this.getScissor=function(W){return W.copy(ve)},this.setScissor=function(W,re,pe,he){W.isVector4?ve.set(W.x,W.y,W.z,W.w):ve.set(W,re,pe,he),v.scissor(J.copy(ve).multiplyScalar(ne).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(W){v.setScissorTest(ge=W)},this.setOpaqueSort=function(W){ae=W},this.setTransparentSort=function(W){le=W},this.getClearColor=function(W){return W.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(W=!0,re=!0,pe=!0){let he=0;if(W){let ce=!1;if(G!==null){const Oe=G.texture.format;ce=C.has(Oe)}if(ce){const Oe=G.texture.type,Ke=R.has(Oe),We=it.getClearColor(),$e=it.getClearAlpha(),Qe=We.r,at=We.g,ft=We.b;Ke?(m[0]=Qe,m[1]=at,m[2]=ft,m[3]=$e,te.clearBufferuiv(te.COLOR,0,m)):(f[0]=Qe,f[1]=at,f[2]=ft,f[3]=$e,te.clearBufferiv(te.COLOR,0,f))}else he|=te.COLOR_BUFFER_BIT}re&&(he|=te.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),pe&&(he|=te.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),he!==0&&te.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(W){W.setRenderer(this),u=W},this.dispose=function(){t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",yt,!1),it.dispose(),Me.dispose(),Ee.dispose(),A.dispose(),q.dispose(),oe.dispose(),Ne.dispose(),be.dispose(),Re.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",Wi),Be.removeEventListener("sessionend",zt),Tt.stop()};function xt(W){W.preventDefault(),mo("WebGLRenderer: Context Lost."),_=!0}function et(){mo("WebGLRenderer: Context Restored."),_=!1;const W=y.autoReset,re=qe.enabled,pe=qe.autoUpdate,he=qe.needsUpdate,ce=qe.type;Ve(),y.autoReset=W,qe.enabled=re,qe.autoUpdate=pe,qe.needsUpdate=he,qe.type=ce}function yt(W){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",W.statusMessage)}function cn(W){const re=W.target;re.removeEventListener("dispose",cn),Bt(re)}function Bt(W){Ot(W),A.remove(W)}function Ot(W){const re=A.get(W).programs;re!==void 0&&(re.forEach(function(pe){Re.releaseProgram(pe)}),W.isShaderMaterial&&Re.releaseShaderCache(W))}this.renderBufferDirect=function(W,re,pe,he,ce,Oe){re===null&&(re=nt);const Ke=ce.isMesh&&ce.matrixWorld.determinantAffine()<0,We=dr(W,re,pe,he,ce);v.setMaterial(he,Ke);let $e=pe.index,Qe=1;if(he.wireframe===!0){if($e=$.getWireframeAttribute(pe),$e===void 0)return;Qe=2}const at=pe.drawRange,ft=pe.attributes.position;let Je=at.start*Qe,bt=(at.start+at.count)*Qe;Oe!==null&&(Je=Math.max(Je,Oe.start*Qe),bt=Math.min(bt,(Oe.start+Oe.count)*Qe)),$e!==null?(Je=Math.max(Je,0),bt=Math.min(bt,$e.count)):ft!=null&&(Je=Math.max(Je,0),bt=Math.min(bt,ft.count));const Yt=bt-Je;if(Yt<0||Yt===1/0)return;Ne.setup(ce,he,We,pe,$e);let Ft,Ct=Ue;if($e!==null&&(Ft=Q.get($e),Ct=_e,Ct.setIndex(Ft)),ce.isMesh)he.wireframe===!0?(v.setLineWidth(he.wireframeLinewidth*Ae()),Ct.setMode(te.LINES)):Ct.setMode(te.TRIANGLES);else if(ce.isLine){let tn=he.linewidth;tn===void 0&&(tn=1),v.setLineWidth(tn*Ae()),ce.isLineSegments?Ct.setMode(te.LINES):ce.isLineLoop?Ct.setMode(te.LINE_LOOP):Ct.setMode(te.LINE_STRIP)}else ce.isPoints?Ct.setMode(te.POINTS):ce.isSprite&&Ct.setMode(te.TRIANGLES);if(ce.isBatchedMesh)if(Pe.get("WEBGL_multi_draw"))Ct.renderMultiDraw(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount);else{const tn=ce._multiDrawStarts,Ze=ce._multiDrawCounts,Ht=ce._multiDrawCount,pt=$e?Q.get($e).bytesPerElement:1,an=A.get(he).currentProgram.getUniforms();for(let An=0;An<Ht;An++)an.setValue(te,"_gl_DrawID",An),Ct.render(tn[An]/pt,Ze[An])}else if(ce.isInstancedMesh)Ct.renderInstances(Je,Yt,ce.count);else if(pe.isInstancedBufferGeometry){const tn=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,Ze=Math.min(pe.instanceCount,tn);Ct.renderInstances(Je,Yt,Ze)}else Ct.render(Je,Yt)};function Hi(W,re,pe,he){u!==null&&W.isNodeMaterial&&u.setObject(he,W),ye===!0&&ze.setState(W,pe,!1),W.transparent===!0&&W.side===Di&&W.forceSinglePass===!1?(W.side=En,W.needsUpdate=!0,Fn(W,re,he),W.side=Cr,W.needsUpdate=!0,Fn(W,re,he),W.side=Di):Fn(W,re,he)}this.compile=function(W,re,pe=null){pe===null&&(pe=W),u!==null&&u.renderStart(W,re,pe),L=Ee.get(pe),L.init(re),M.push(L),pe.traverseVisible(function(ce){ce.isLight&&ce.layers.test(re.layers)&&(L.pushLight(ce),ce.castShadow&&L.pushShadow(ce))}),W!==pe&&W.traverseVisible(function(ce){ce.isLight&&ce.layers.test(re.layers)&&(L.pushLight(ce),ce.castShadow&&L.pushShadow(ce))}),L.setupLights(),u!==null&&u.updateLights(L.state.lightsArray),Se=this.localClippingEnabled,ye=ze.init(this.clippingPlanes,Se),ye===!0&&ze.setGlobalState(this.clippingPlanes,re),u!==null&&qe.render(L.state.shadowsArray,pe,re);const he=new Set;return W.traverse(function(ce){if(!(ce.isMesh||ce.isPoints||ce.isLine||ce.isSprite))return;const Oe=ce.material;if(Oe)if(Array.isArray(Oe))for(let Ke=0;Ke<Oe.length;Ke++){const We=Oe[Ke];Hi(We,pe,re,ce),he.add(We)}else Hi(Oe,pe,re,ce),he.add(Oe)}),L=M.pop(),u!==null&&u.renderEnd(),he},this.compileAsync=function(W,re,pe=null){const he=this.compile(W,re,pe);return new Promise(ce=>{function Oe(){if(he.forEach(function(Ke){const $e=A.get(Ke).currentProgram;($e===void 0||$e.isReady())&&he.delete(Ke)}),he.size===0){ce(W);return}setTimeout(Oe,10)}Pe.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Nt=null;function kt(W){Nt&&Nt(W)}function Wi(){Tt.stop()}function zt(){Tt.start()}const Tt=new J0;Tt.setAnimationLoop(kt),typeof self<"u"&&Tt.setContext(self),this.setAnimationLoop=function(W){Nt=W,Be.setAnimationLoop(W),W===null?Tt.stop():Tt.start()},Be.addEventListener("sessionstart",Wi),Be.addEventListener("sessionend",zt),this.render=function(W,re){if(re!==void 0&&re.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;u!==null&&u.renderStart(W,re);const pe=Be.enabled===!0&&Be.isPresenting===!0,he=b!==null&&(G===null||pe)&&b.begin(P,G);if(W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),re.parent===null&&re.matrixWorldAutoUpdate===!0&&re.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(re),re=Be.getCamera()),W.isScene===!0&&W.onBeforeRender(P,W,re,G),L=Ee.get(W,M.length),L.init(re),L.state.textureUnits=V.getTextureUnits(),M.push(L),Ge.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),Te.setFromProjectionMatrix(Ge,vi,re.reversedDepth),Se=this.localClippingEnabled,ye=ze.init(this.clippingPlanes,Se),l=Me.get(W,U.length),l.init(),U.push(l),Be.enabled===!0&&Be.isPresenting===!0){const Ke=P.xr.getDepthSensingMesh();Ke!==null&&Wn(Ke,re,-1/0,P.sortObjects)}Wn(W,re,0,P.sortObjects),l.finish(),u!==null&&u.updateLights(L.state.lightsArray),P.sortObjects===!0&&l.sort(ae,le),Ie=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1,Ie&&it.addToRenderList(l,W),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ye===!0&&ze.beginShadows();const ce=L.state.shadowsArray;if(qe.render(ce,W,re),ye===!0&&ze.endShadows(),(he&&b.hasRenderPass())===!1){const Ke=l.opaque,We=l.transmissive;if(L.setupLights(),re.isArrayCamera){const $e=re.cameras;if(We.length>0)for(let Qe=0,at=$e.length;Qe<at;Qe++){const ft=$e[Qe];ci(Ke,We,W,ft)}Ie&&it.render(W);for(let Qe=0,at=$e.length;Qe<at;Qe++){const ft=$e[Qe];Xi(l,W,ft,ft.viewport)}}else We.length>0&&ci(Ke,We,W,re),Ie&&it.render(W),Xi(l,W,re)}G!==null&&z===0&&(V.updateMultisampleRenderTarget(G),V.updateRenderTargetMipmap(G)),he&&b.end(P),W.isScene===!0&&W.onAfterRender(P,W,re),Ne.resetDefaultState(),O=-1,x=null,M.pop(),M.length>0?(L=M[M.length-1],V.setTextureUnits(L.state.textureUnits),ye===!0&&ze.setGlobalState(P.clippingPlanes,L.state.camera)):L=null,U.pop(),U.length>0?l=U[U.length-1]:l=null,u!==null&&u.renderEnd()};function Wn(W,re,pe,he){if(W.visible===!1)return;if(W.layers.test(re.layers)){if(W.isGroup)pe=W.renderOrder;else if(W.isLOD)W.autoUpdate===!0&&W.update(re);else if(W.isLightProbeGrid)L.pushLightProbeGrid(W);else if(W.isLight)L.pushLight(W),W.castShadow&&L.pushShadow(W);else if(W.isSprite){if(!W.frustumCulled||W.intersectsFrustum(Te)){he&&He.setFromMatrixPosition(W.matrixWorld).applyMatrix4(Ge);const Ke=oe.update(W),We=W.material;We.visible&&l.push(W,Ke,We,pe,He.z,null,re)}}else if((W.isMesh||W.isLine||W.isPoints)&&(!W.frustumCulled||W.intersectsFrustum(Te))){const Ke=oe.update(W),We=W.material;if(he&&(W.boundingSphere!==void 0?(W.boundingSphere===null&&W.computeBoundingSphere(),He.copy(W.boundingSphere.center)):(Ke.boundingSphere===null&&Ke.computeBoundingSphere(),He.copy(Ke.boundingSphere.center)),He.applyMatrix4(W.matrixWorld).applyMatrix4(Ge)),Array.isArray(We)){const $e=Ke.groups;for(let Qe=0,at=$e.length;Qe<at;Qe++){const ft=$e[Qe],Je=We[ft.materialIndex];Je&&Je.visible&&l.push(W,Ke,Je,pe,He.z,ft,re)}}else We.visible&&l.push(W,Ke,We,pe,He.z,null,re)}}const Oe=W.children;for(let Ke=0,We=Oe.length;Ke<We;Ke++)Wn(Oe[Ke],re,pe,he)}function Xi(W,re,pe,he){const{opaque:ce,transmissive:Oe,transparent:Ke}=W;L.setupLightsView(pe),ye===!0&&ze.setGlobalState(P.clippingPlanes,pe),he&&v.viewport(B.copy(he)),ce.length>0&&Tn(ce,re,pe),Oe.length>0&&Tn(Oe,re,pe),Ke.length>0&&Tn(Ke,re,pe),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function ci(W,re,pe,he){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[he.id]===void 0){const Je=Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[he.id]=new ri(1,1,{generateMipmaps:!0,type:Je?wi:Ln,minFilter:Tr,samples:Math.max(4,X.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}const Oe=L.state.transmissionRenderTarget[he.id],Ke=he.viewport||B;Oe.setSize(Ke.z*P.transmissionResolutionScale,Ke.w*P.transmissionResolutionScale);const We=P.getRenderTarget(),$e=P.getActiveCubeFace(),Qe=P.getActiveMipmapLevel();P.setRenderTarget(Oe),P.getClearColor(ie),ue=P.getClearAlpha(),ue<1&&P.setClearColor(16777215,.5),P.clear(),Ie&&it.render(pe);const at=P.toneMapping;P.toneMapping=_i;const ft=he.viewport;if(he.viewport!==void 0&&(he.viewport=void 0),L.setupLightsView(he),ye===!0&&ze.setGlobalState(P.clippingPlanes,he),Tn(W,pe,he),V.updateMultisampleRenderTarget(Oe),V.updateRenderTargetMipmap(Oe),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let bt=0,Yt=re.length;bt<Yt;bt++){const Ft=re[bt],{object:Ct,geometry:tn,material:Ze,group:Ht}=Ft;if(Ze.side===Di&&Ct.layers.test(he.layers)){const pt=Ze.side;Ze.side=En,Ze.needsUpdate=!0,qi(Ct,pe,he,tn,Ze,Ht),Ze.side=pt,Ze.needsUpdate=!0,Je=!0}}Je===!0&&(V.updateMultisampleRenderTarget(Oe),V.updateRenderTargetMipmap(Oe))}P.setRenderTarget(We,$e,Qe),P.setClearColor(ie,ue),ft!==void 0&&(he.viewport=ft),P.toneMapping=at}function Tn(W,re,pe){const he=re.isScene===!0?re.overrideMaterial:null;for(let ce=0,Oe=W.length;ce<Oe;ce++){const Ke=W[ce],{object:We,geometry:$e,group:Qe}=Ke;let at=Ke.material;at.allowOverride===!0&&he!==null&&(at=he),We.layers.test(pe.layers)&&qi(We,re,pe,$e,at,Qe)}}function qi(W,re,pe,he,ce,Oe){u!==null&&ce.isNodeMaterial&&u.setObject(W,ce),W.onBeforeRender(P,re,pe,he,ce,Oe),W.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,W.matrixWorld),W.normalMatrix.getNormalMatrix(W.modelViewMatrix),ce.onBeforeRender(P,re,pe,he,W,Oe),ce.transparent===!0&&ce.side===Di&&ce.forceSinglePass===!1?(ce.side=En,ce.needsUpdate=!0,P.renderBufferDirect(pe,re,he,ce,W,Oe),ce.side=Cr,ce.needsUpdate=!0,P.renderBufferDirect(pe,re,he,ce,W,Oe),ce.side=Di):P.renderBufferDirect(pe,re,he,ce,W,Oe),W.onAfterRender(P,re,pe,he,ce,Oe)}function Fn(W,re,pe){re.isScene!==!0&&(re=nt);const he=A.get(W),ce=L.state.lights,Oe=L.state.shadowsArray,Ke=ce.state.version,We=Re.getParameters(W,ce.state,Oe,re,pe,L.state.lightProbeGridArray),$e=Re.getProgramCacheKey(We);let Qe=he.programs;he.environment=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?re.environment:null,he.fog=re.fog;const at=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap;he.envMap=q.get(W.envMap||he.environment,at),he.envMapRotation=he.environment!==null&&W.envMap===null?re.environmentRotation:W.envMapRotation,Qe===void 0&&(W.addEventListener("dispose",cn),Qe=new Map,he.programs=Qe);let ft=Qe.get($e);if(ft!==void 0){if(he.currentProgram===ft&&he.lightsStateVersion===Ke)return Yi(W,We),ft}else We.uniforms=Re.getUniforms(W),u!==null&&W.isNodeMaterial&&u.build(W,pe,We),W.onBeforeCompile(We,P),ft=Re.acquireProgram(We,$e),Qe.set($e,ft),he.uniforms=We.uniforms;const Je=he.uniforms;return(!W.isShaderMaterial&&!W.isRawShaderMaterial||W.clipping===!0)&&(Je.clippingPlanes=ze.uniform),Yi(W,We),he.needsLights=Zi(W),he.lightsStateVersion=Ke,he.needsLights&&(Je.ambientLightColor.value=ce.state.ambient,Je.lightProbe.value=ce.state.probe,Je.sunLights.value=ce.state.sun,Je.sunLightShadows.value=ce.state.sunShadow,Je.directionalLights.value=ce.state.directional,Je.directionalLightShadows.value=ce.state.directionalShadow,Je.spotLights.value=ce.state.spot,Je.spotLightShadows.value=ce.state.spotShadow,Je.rectAreaLights.value=ce.state.rectArea,Je.ltc_1.value=ce.state.rectAreaLTC1,Je.ltc_2.value=ce.state.rectAreaLTC2,Je.pointLights.value=ce.state.point,Je.pointLightShadows.value=ce.state.pointShadow,Je.hemisphereLights.value=ce.state.hemi,Je.sunShadowMatrix.value=ce.state.sunShadowMatrix,Je.sunShadowCascade.value=ce.state.sunShadowCascade,Je.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,Je.spotLightMatrix.value=ce.state.spotLightMatrix,Je.spotLightMap.value=ce.state.spotLightMap,Je.pointShadowMatrix.value=ce.state.pointShadowMatrix),he.lightProbeGrid=L.state.lightProbeGridArray.length>0,he.currentProgram=ft,he.uniformsList=null,ft}function $i(W){if(W.uniformsList===null){const re=W.currentProgram.getUniforms();W.uniformsList=so.seqWithValue(re.seq,W.uniforms)}return W.uniformsList}function Yi(W,re){const pe=A.get(W);pe.outputColorSpace=re.outputColorSpace,pe.batching=re.batching,pe.batchingColor=re.batchingColor,pe.instancing=re.instancing,pe.instancingColor=re.instancingColor,pe.instancingMorph=re.instancingMorph,pe.skinning=re.skinning,pe.morphTargets=re.morphTargets,pe.morphNormals=re.morphNormals,pe.morphColors=re.morphColors,pe.morphTargetsCount=re.morphTargetsCount,pe.numClippingPlanes=re.numClippingPlanes,pe.numIntersection=re.numClipIntersection,pe.vertexAlphas=re.vertexAlphas,pe.vertexTangents=re.vertexTangents,pe.toneMapping=re.toneMapping}function fr(W,re){if(W.length===0)return null;if(W.length===1)return W[0].texture!==null?W[0]:null;S.setFromMatrixPosition(re.matrixWorld);for(let pe=0,he=W.length;pe<he;pe++){const ce=W[pe];if(ce.texture!==null&&ce.boundingBox.containsPoint(S))return ce}return null}function dr(W,re,pe,he,ce){re.isScene!==!0&&(re=nt),V.resetTextureUnits();const Oe=re.fog,Ke=he.isMeshStandardMaterial||he.isMeshLambertMaterial||he.isMeshPhongMaterial?re.environment:null,We=G===null?P.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Mt.workingColorSpace,$e=he.isMeshStandardMaterial||he.isMeshLambertMaterial&&!he.envMap||he.isMeshPhongMaterial&&!he.envMap,Qe=q.get(he.envMap||Ke,$e),at=he.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,ft=!!pe.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),Je=!!pe.morphAttributes.position,bt=!!pe.morphAttributes.normal,Yt=!!pe.morphAttributes.color;let Ft=_i;he.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Ft=P.toneMapping);const Ct=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,tn=Ct!==void 0?Ct.length:0,Ze=A.get(he),Ht=L.state.lights;if(ye===!0&&(Se===!0||W!==x)){const Rt=W===x&&he.id===O;ze.setState(he,W,Rt)}let pt=!1;he.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Ht.state.version||Ze.outputColorSpace!==We||ce.isBatchedMesh&&Ze.batching===!1||!ce.isBatchedMesh&&Ze.batching===!0||ce.isBatchedMesh&&Ze.batchingColor===!0&&ce._colorsTexture===null||ce.isBatchedMesh&&Ze.batchingColor===!1&&ce._colorsTexture!==null||ce.isInstancedMesh&&Ze.instancing===!1||!ce.isInstancedMesh&&Ze.instancing===!0||ce.isSkinnedMesh&&Ze.skinning===!1||!ce.isSkinnedMesh&&Ze.skinning===!0||ce.isInstancedMesh&&Ze.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&Ze.instancingColor===!1&&ce.instanceColor!==null||ce.isInstancedMesh&&Ze.instancingMorph===!0&&ce.morphTexture===null||ce.isInstancedMesh&&Ze.instancingMorph===!1&&ce.morphTexture!==null||Ze.envMap!==Qe||he.fog===!0&&Ze.fog!==Oe||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==ze.numPlanes||Ze.numIntersection!==ze.numIntersection)||Ze.vertexAlphas!==at||Ze.vertexTangents!==ft||Ze.morphTargets!==Je||Ze.morphNormals!==bt||Ze.morphColors!==Yt||Ze.toneMapping!==Ft||Ze.morphTargetsCount!==tn||!!Ze.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,Ze.__version=he.version);let an=Ze.currentProgram;pt===!0&&(an=Fn(he,re,ce),u&&he.isNodeMaterial&&u.onUpdateProgram(he,an,Ze));let An=!1,ui=!1,Xn=!1;const At=an.getUniforms(),Wt=Ze.uniforms;if(v.useProgram(an.program)&&(An=!0,ui=!0,Xn=!0),he.id!==O&&(O=he.id,ui=!0),Ze.needsLights){const Rt=fr(L.state.lightProbeGridArray,ce);Ze.lightProbeGrid!==Rt&&(Ze.lightProbeGrid=Rt,ui=!0)}if(An||x!==W){v.buffers.depth.getReversed()&&W.reversedDepth!==!0&&(W._reversedDepth=!0,W.updateProjectionMatrix()),At.setValue(te,"projectionMatrix",W.projectionMatrix),At.setValue(te,"viewMatrix",W.matrixWorldInverse);const qn=At.map.cameraPosition;qn!==void 0&&qn.setValue(te,De.setFromMatrixPosition(W.matrixWorld)),X.logarithmicDepthBuffer&&At.setValue(te,"logDepthBufFC",2/(Math.log(W.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&At.setValue(te,"isOrthographic",W.isOrthographicCamera===!0),x!==W&&(x=W,ui=!0,Xn=!0)}if(Ze.needsLights&&(Ht.state.sunShadowMap.length>0&&At.setValue(te,"sunShadowMap",Ht.state.sunShadowMap,V),Ht.state.directionalShadowMap.length>0&&At.setValue(te,"directionalShadowMap",Ht.state.directionalShadowMap,V),Ht.state.spotShadowMap.length>0&&At.setValue(te,"spotShadowMap",Ht.state.spotShadowMap,V),Ht.state.pointShadowMap.length>0&&At.setValue(te,"pointShadowMap",Ht.state.pointShadowMap,V)),ce.isSkinnedMesh){At.setOptional(te,ce,"bindMatrix"),At.setOptional(te,ce,"bindMatrixInverse");const Rt=ce.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),At.setValue(te,"boneTexture",Rt.boneTexture,V))}ce.isBatchedMesh&&(At.setOptional(te,ce,"batchingTexture"),At.setValue(te,"batchingTexture",ce._matricesTexture,V),At.setOptional(te,ce,"batchingIdTexture"),At.setValue(te,"batchingIdTexture",ce._indirectTexture,V),At.setOptional(te,ce,"batchingColorTexture"),ce._colorsTexture!==null&&At.setValue(te,"batchingColorTexture",ce._colorsTexture,V));const Bn=pe.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&ee.update(ce,pe,an),(ui||Ze.receiveShadow!==ce.receiveShadow)&&(Ze.receiveShadow=ce.receiveShadow,At.setValue(te,"receiveShadow",ce.receiveShadow)),(he.isMeshStandardMaterial||he.isMeshLambertMaterial||he.isMeshPhongMaterial)&&he.envMap===null&&re.environment!==null&&(Wt.envMapIntensity.value=re.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=hb()),ui){if(At.setValue(te,"toneMappingExposure",P.toneMappingExposure),Ze.needsLights&&pr(Wt,Xn),Oe&&he.fog===!0&&Ce.refreshFogUniforms(Wt,Oe),Ce.refreshMaterialUniforms(Wt,he,ne,K,L.state.transmissionRenderTarget[W.id]),Ze.needsLights&&Ze.lightProbeGrid){const Rt=Ze.lightProbeGrid;Wt.probesSH.value=Rt.texture,Wt.probesMin.value.copy(Rt.boundingBox.min),Wt.probesMax.value.copy(Rt.boundingBox.max),Wt.probesResolution.value.copy(Rt.resolution)}so.upload(te,$i(Ze),Wt,V)}if(he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(so.upload(te,$i(Ze),Wt,V),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&At.setValue(te,"center",ce.center),At.setValue(te,"modelViewMatrix",ce.modelViewMatrix),At.setValue(te,"normalMatrix",ce.normalMatrix),At.setValue(te,"modelMatrix",ce.matrixWorld),he.uniformsGroups!==void 0){const Rt=he.uniformsGroups;for(let qn=0,Ei=Rt.length;qn<Ei;qn++){const Ss=Rt[qn];be.update(Ss,an),be.bind(Ss,an)}}return an}function pr(W,re){W.ambientLightColor.needsUpdate=re,W.lightProbe.needsUpdate=re,W.sunLights.needsUpdate=re,W.sunLightShadows.needsUpdate=re,W.directionalLights.needsUpdate=re,W.directionalLightShadows.needsUpdate=re,W.pointLights.needsUpdate=re,W.pointLightShadows.needsUpdate=re,W.spotLights.needsUpdate=re,W.spotLightShadows.needsUpdate=re,W.rectAreaLights.needsUpdate=re,W.hemisphereLights.needsUpdate=re}function Zi(W){return W.isMeshLambertMaterial||W.isMeshToonMaterial||W.isMeshPhongMaterial||W.isMeshStandardMaterial||W.isShadowMaterial||W.isShaderMaterial&&W.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(W,re,pe){const he=A.get(W);he.__autoAllocateDepthBuffer=W.resolveDepthBuffer===!1,he.__autoAllocateDepthBuffer===!1&&(he.__useRenderToTexture=!1),A.get(W.texture).__webglTexture=re,A.get(W.depthTexture).__webglTexture=he.__autoAllocateDepthBuffer?void 0:pe,he.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(W,re){const pe=A.get(W);pe.__webglFramebuffer=re,pe.__useDefaultFramebuffer=re===void 0},this.setRenderTarget=function(W,re=0,pe=0){G=W,k=re,z=pe;let he=null,ce=!1,Oe=!1;if(W){const We=A.get(W);if(We.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(te.FRAMEBUFFER,We.__webglFramebuffer),B.copy(W.viewport),J.copy(W.scissor),j=W.scissorTest,v.viewport(B),v.scissor(J),v.setScissorTest(j),O=-1;return}else if(We.__webglFramebuffer===void 0)V.setupRenderTarget(W);else if(We.__hasExternalTextures)V.rebindTextures(W,A.get(W.texture).__webglTexture,A.get(W.depthTexture).__webglTexture);else if(W.depthBuffer){const at=W.depthTexture;if(We.__boundDepthTexture!==at){if(at!==null&&A.has(at)&&(W.width!==at.image.width||W.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(W)}}const $e=W.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Oe=!0);const Qe=A.get(W).__webglFramebuffer;W.isWebGLCubeRenderTarget?(Array.isArray(Qe[re])?he=Qe[re][pe]:he=Qe[re],ce=!0):W.samples>0&&V.useMultisampledRTT(W)===!1?he=A.get(W).__webglMultisampledFramebuffer:Array.isArray(Qe)?he=Qe[pe]:he=Qe,B.copy(W.viewport),J.copy(W.scissor),j=W.scissorTest}else B.copy(xe).multiplyScalar(ne).floor(),J.copy(ve).multiplyScalar(ne).floor(),j=ge;if(pe!==0&&(he=E),v.bindFramebuffer(te.FRAMEBUFFER,he)&&v.drawBuffers(W,he),v.viewport(B),v.scissor(J),v.setScissorTest(j),ce){const We=A.get(W.texture);te.framebufferTexture2D(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0,te.TEXTURE_CUBE_MAP_POSITIVE_X+re,We.__webglTexture,pe)}else if(Oe){const We=re;for(let $e=0;$e<W.textures.length;$e++){const Qe=A.get(W.textures[$e]);te.framebufferTextureLayer(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0+$e,Qe.__webglTexture,pe,We)}}else if(W!==null&&pe!==0){const We=A.get(W.texture);te.framebufferTexture2D(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0,te.TEXTURE_2D,We.__webglTexture,pe)}O=-1};function bi(W){const re=A.get(W);return(re.__readFormat!==W.format||re.__readType!==W.type)&&(re.__readFormat=W.format,re.__readType=W.type,re.__formatReadable=X.textureFormatReadable(W.format),re.__typeReadable=X.textureTypeReadable(W.type)),re}this.readRenderTargetPixels=function(W,re,pe,he,ce,Oe,Ke,We=0){if(!(W&&W.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=A.get(W).__webglFramebuffer;if(W.isWebGLCubeRenderTarget&&Ke!==void 0&&($e=$e[Ke]),$e){v.bindFramebuffer(te.FRAMEBUFFER,$e);try{const Qe=W.textures[We],at=Qe.format,ft=Qe.type;W.textures.length>1&&te.readBuffer(te.COLOR_ATTACHMENT0+We);const Je=bi(Qe);if(Je.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Je.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}re>=0&&re<=W.width-he&&pe>=0&&pe<=W.height-ce&&te.readPixels(re,pe,he,ce,Le.convert(at),Le.convert(ft),Oe)}finally{const Qe=G!==null?A.get(G).__webglFramebuffer:null;v.bindFramebuffer(te.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(W,re,pe,he,ce,Oe,Ke,We=0){if(!(W&&W.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=A.get(W).__webglFramebuffer;if(W.isWebGLCubeRenderTarget&&Ke!==void 0&&($e=$e[Ke]),$e)if(re>=0&&re<=W.width-he&&pe>=0&&pe<=W.height-ce){v.bindFramebuffer(te.FRAMEBUFFER,$e);const Qe=W.textures[We],at=Qe.format,ft=Qe.type;W.textures.length>1&&te.readBuffer(te.COLOR_ATTACHMENT0+We);const Je=bi(Qe);if(Je.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Je.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const bt=te.createBuffer();te.bindBuffer(te.PIXEL_PACK_BUFFER,bt),te.bufferData(te.PIXEL_PACK_BUFFER,Oe.byteLength,te.STREAM_READ),te.readPixels(re,pe,he,ce,Le.convert(at),Le.convert(ft),0),te.bindBuffer(te.PIXEL_PACK_BUFFER,null);const Yt=G!==null?A.get(G).__webglFramebuffer:null;v.bindFramebuffer(te.FRAMEBUFFER,Yt);const Ft=te.fenceSync(te.SYNC_GPU_COMMANDS_COMPLETE,0);return te.flush(),await P_(te,Ft,4),te.bindBuffer(te.PIXEL_PACK_BUFFER,bt),te.getBufferSubData(te.PIXEL_PACK_BUFFER,0,Oe),te.bindBuffer(te.PIXEL_PACK_BUFFER,null),te.deleteBuffer(bt),te.deleteSync(Ft),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(W,re=null,pe=0){const he=Math.pow(2,-pe),ce=Math.floor(W.image.width*he),Oe=Math.floor(W.image.height*he),Ke=re!==null?re.x:0,We=re!==null?re.y:0;V.setTexture2D(W,0),te.copyTexSubImage2D(te.TEXTURE_2D,pe,0,0,Ke,We,ce,Oe),v.unbindTexture()},this.copyTextureToTexture=function(W,re,pe=null,he=null,ce=0,Oe=0){let Ke,We,$e,Qe,at,ft,Je,bt,Yt;const Ft=W.isCompressedTexture?W.mipmaps[Oe]:W.image;if(pe!==null)Ke=pe.max.x-pe.min.x,We=pe.max.y-pe.min.y,$e=pe.isBox3?pe.max.z-pe.min.z:1,Qe=pe.min.x,at=pe.min.y,ft=pe.isBox3?pe.min.z:0;else{const Wt=Math.pow(2,-ce);Ke=Math.floor(Ft.width*Wt),We=Math.floor(Ft.height*Wt),W.isDataArrayTexture?$e=Ft.depth:W.isData3DTexture?$e=Math.floor(Ft.depth*Wt):$e=1,Qe=0,at=0,ft=0}he!==null?(Je=he.x,bt=he.y,Yt=he.z):(Je=0,bt=0,Yt=0);const Ct=Le.convert(re.format),tn=Le.convert(re.type);let Ze;re.isData3DTexture?(V.setTexture3D(re,0),Ze=te.TEXTURE_3D):re.isDataArrayTexture||re.isCompressedArrayTexture?(V.setTexture2DArray(re,0),Ze=te.TEXTURE_2D_ARRAY):(V.setTexture2D(re,0),Ze=te.TEXTURE_2D),v.activeTexture(te.TEXTURE0),v.pixelStorei(te.UNPACK_FLIP_Y_WEBGL,re.flipY),v.pixelStorei(te.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),v.pixelStorei(te.UNPACK_ALIGNMENT,re.unpackAlignment);const Ht=v.getParameter(te.UNPACK_ROW_LENGTH),pt=v.getParameter(te.UNPACK_IMAGE_HEIGHT),an=v.getParameter(te.UNPACK_SKIP_PIXELS),An=v.getParameter(te.UNPACK_SKIP_ROWS),ui=v.getParameter(te.UNPACK_SKIP_IMAGES);v.pixelStorei(te.UNPACK_ROW_LENGTH,Ft.width),v.pixelStorei(te.UNPACK_IMAGE_HEIGHT,Ft.height),v.pixelStorei(te.UNPACK_SKIP_PIXELS,Qe),v.pixelStorei(te.UNPACK_SKIP_ROWS,at),v.pixelStorei(te.UNPACK_SKIP_IMAGES,ft);const Xn=W.isDataArrayTexture||W.isData3DTexture,At=re.isDataArrayTexture||re.isData3DTexture;if(W.isDepthTexture){const Wt=A.get(W),Bn=A.get(re),Rt=A.get(Wt.__renderTarget),qn=A.get(Bn.__renderTarget);v.bindFramebuffer(te.READ_FRAMEBUFFER,Rt.__webglFramebuffer),v.bindFramebuffer(te.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let Ei=0;Ei<$e;Ei++)Xn&&(te.framebufferTextureLayer(te.READ_FRAMEBUFFER,te.COLOR_ATTACHMENT0,A.get(W).__webglTexture,ce,ft+Ei),te.framebufferTextureLayer(te.DRAW_FRAMEBUFFER,te.COLOR_ATTACHMENT0,A.get(re).__webglTexture,Oe,Yt+Ei)),te.blitFramebuffer(Qe,at,Ke,We,Je,bt,Ke,We,te.DEPTH_BUFFER_BIT,te.NEAREST);v.bindFramebuffer(te.READ_FRAMEBUFFER,null),v.bindFramebuffer(te.DRAW_FRAMEBUFFER,null)}else if(ce!==0||W.isRenderTargetTexture||A.has(W)){const Wt=A.get(W),Bn=A.get(re);v.bindFramebuffer(te.READ_FRAMEBUFFER,I),v.bindFramebuffer(te.DRAW_FRAMEBUFFER,D);for(let Rt=0;Rt<$e;Rt++)Xn?te.framebufferTextureLayer(te.READ_FRAMEBUFFER,te.COLOR_ATTACHMENT0,Wt.__webglTexture,ce,ft+Rt):te.framebufferTexture2D(te.READ_FRAMEBUFFER,te.COLOR_ATTACHMENT0,te.TEXTURE_2D,Wt.__webglTexture,ce),At?te.framebufferTextureLayer(te.DRAW_FRAMEBUFFER,te.COLOR_ATTACHMENT0,Bn.__webglTexture,Oe,Yt+Rt):te.framebufferTexture2D(te.DRAW_FRAMEBUFFER,te.COLOR_ATTACHMENT0,te.TEXTURE_2D,Bn.__webglTexture,Oe),ce!==0?te.blitFramebuffer(Qe,at,Ke,We,Je,bt,Ke,We,te.COLOR_BUFFER_BIT,te.NEAREST):At?te.copyTexSubImage3D(Ze,Oe,Je,bt,Yt+Rt,Qe,at,Ke,We):te.copyTexSubImage2D(Ze,Oe,Je,bt,Qe,at,Ke,We);v.bindFramebuffer(te.READ_FRAMEBUFFER,null),v.bindFramebuffer(te.DRAW_FRAMEBUFFER,null)}else At?W.isDataTexture||W.isData3DTexture?te.texSubImage3D(Ze,Oe,Je,bt,Yt,Ke,We,$e,Ct,tn,Ft.data):re.isCompressedArrayTexture?te.compressedTexSubImage3D(Ze,Oe,Je,bt,Yt,Ke,We,$e,Ct,Ft.data):te.texSubImage3D(Ze,Oe,Je,bt,Yt,Ke,We,$e,Ct,tn,Ft):W.isDataTexture?te.texSubImage2D(te.TEXTURE_2D,Oe,Je,bt,Ke,We,Ct,tn,Ft.data):W.isCompressedTexture?te.compressedTexSubImage2D(te.TEXTURE_2D,Oe,Je,bt,Ft.width,Ft.height,Ct,Ft.data):te.texSubImage2D(te.TEXTURE_2D,Oe,Je,bt,Ke,We,Ct,tn,Ft);v.pixelStorei(te.UNPACK_ROW_LENGTH,Ht),v.pixelStorei(te.UNPACK_IMAGE_HEIGHT,pt),v.pixelStorei(te.UNPACK_SKIP_PIXELS,an),v.pixelStorei(te.UNPACK_SKIP_ROWS,An),v.pixelStorei(te.UNPACK_SKIP_IMAGES,ui),Oe===0&&re.generateMipmaps&&te.generateMipmap(Ze),v.unbindTexture()},this.initRenderTarget=function(W){A.get(W).__webglFramebuffer===void 0&&V.setupRenderTarget(W)},this.initTexture=function(W){W.isCubeTexture?V.setTextureCube(W,0):W.isData3DTexture?V.setTexture3D(W,0):W.isDataArrayTexture||W.isCompressedArrayTexture?V.setTexture2DArray(W,0):V.setTexture2D(W,0),v.unbindTexture()},this.resetState=function(){k=0,z=0,G=null,v.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}const ub=.0524;function fb(i,e=ub){const t=i.filter(n=>Number.isFinite(n));return t.length?-(Math.min(...t)-e):0}const db={idle:["Breathing Idle","Idle"],speaking:["Talking","Lengthy Head Nod"],affirmative:["Head Nod Yes","Thoughtful Head Nod","Lengthy Head Nod"],negative:["Shrugging"],greeting:["Waving"]},pb=.35,mb=["LeftToeBase","RightToeBase"],gb=new Set(["affirmative","negative","greeting"]);function Rp(i,e="generated"){const{fps:t,frames:n,bones:r,quats:s}=i,a=new Float32Array(n);for(let h=0;h<n;h++)a[h]=h/t;const o=[];for(let h=0;h<r.length;h++){const c=new Float32Array(n*4);for(let d=0;d<n;d++){const p=(d*r.length+h)*4;c.set([s[p],s[p+1],s[p+2],s[p+3]],d*4)}o.push(new Po(`${r[h]}.quaternion`,a,c))}return new Ac(e,n/t,o)}class vb{constructor(e){this.options=e,this.scene=new ly,this.camera=new xn(32,1,.1,40),this.state="idle",this.clips=0,this.motion=null,this.face={},this.root=null,this.toes=[],this.foot=new de,this.time=0,this.mixer=null,this.actions=new Map,this.action=null,this.generated=null,this.speaking=[],this.speakIndex=0,this.morphs=[],this.clock=new f1,this.raf=0,this.loading=null,this.lost=!1,this.ownsRenderer=!e.renderer,this.renderer=e.renderer??new cb({canvas:e.canvas,antialias:!0,alpha:!0}),this.ownsRenderer&&this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio)),this.scene.add(new Ky(14020863,.85));const t=new Ga(14087679,1.5);t.position.set(-2,4,5),this.scene.add(t);const n=new Ga(14140064,1.1);n.position.set(3,1,2),this.scene.add(n);const r=new Ga(10475752,1.4);r.position.set(0,2.5,-4),this.scene.add(r),e.ground&&this.addGroundShadow(),this.camera.position.set(0,1.5,3.46),this.camera.lookAt(0,.89,0),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(e.canvas)}addGroundShadow(){this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=p0;const e=new Ga(16777215,.18);e.position.set(.25,6,.6),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),e.shadow.camera.top=2,e.shadow.camera.bottom=-2,e.shadow.camera.left=-1.5,e.shadow.camera.right=1.5,e.shadow.camera.near=1,e.shadow.camera.far=9,e.shadow.bias=-.002;const t=new Nn(new ra(24,24),new by({opacity:.5}));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,this.scene.add(e,e.target,t)}enter(...e){this.resize(),this.root?this.start():this.loading||(this.loading=this.load(e))}leave(){this.stop()}loseContext(){this.lost=!0,this.stop(),this.observer.disconnect(),this.ownsRenderer&&this.renderer.dispose()}setMotion(e){e!==this.motion&&(this.motion=e,this.play(e==="speaking"?this.generated??this.speaking[this.speakIndex]??this.actions.get(e):this.actions.get(e)))}setTrack(e){var n;const t=this.generated;if(t&&(t.stop(),(n=this.mixer)==null||n.uncacheClip(t.getClip()),this.actions.delete("speaking"),this.generated=null,this.action===t&&(this.action=null)),e&&this.mixer){const r=this.mixer.clipAction(Rp(e)).setLoop(io,1/0);this.actions.set("speaking",r),this.generated=r,this.motion==="speaking"&&this.play(r)}}setPaused(e){var t,n;e?this.stop():this.state==="ready"&&!this.lost&&!((n=(t=this.options).reduced)!=null&&n.call(t))&&this.start()}get trackTime(){return this.generated?this.generated.time:null}seekTrack(e){const t=this.generated;if(!t)return;const n=t.getClip().duration;t.time=(e%n+n)%n,this.raf||this.still()}setTrackRate(e){this.generated&&(this.generated.timeScale=e)}play(e){var t,n;!e||e===this.action||(e.reset(),e.play(),this.action&&this.action.crossFadeTo(e,pb,!1),this.action=e,(n=(t=this.options).reduced)!=null&&n.call(t)&&this.still())}onClipFinished(e){e===this.action&&(this.motion==="speaking"&&this.speaking.length>1?(this.speakIndex=(this.speakIndex+1)%this.speaking.length,this.play(this.speaking[this.speakIndex])):this.motion&&this.motion!=="idle"&&(this.motion="idle",this.play(this.actions.get("idle"))))}setFace(e){var t,n;this.face={...this.face,...e},(n=(t=this.options).reduced)!=null&&n.call(t)&&this.still()}clearFace(){var e,t;this.face={};for(const n of this.morphs)for(const r of Object.keys(n.index))n.influences[n.index[r]]=0;(t=(e=this.options).reduced)!=null&&t.call(e)&&this.render()}still(){var e;(e=this.mixer)==null||e.update(0),this.ground(),this.applyFace(),this.render()}ground(){!this.root||!this.toes.length||(this.root.position.y=0,this.root.updateWorldMatrix(!0,!0),this.root.position.y=fb(this.toes.map(e=>(e.getWorldPosition(this.foot),this.foot.y))))}async load(e){var t,n,r,s,a,o,h,c,d;this.state="loading",(n=(t=this.options).onState)==null||n.call(t,"loading");try{const{GLTFLoader:p}=await qv(async()=>{const{GLTFLoader:T}=await import("./GLTFLoader-CEwsVrLk.js");return{GLTFLoader:T}},__vite__mapDeps([0,1])),g=new p;let w=null;for(const[T,N]of e.entries())try{w=await g.loadAsync(N);break}catch(C){if(T===e.length-1)throw C}if(!w)throw new Error("no avatar asset");if(this.lost)return;if(this.root=w.scene,this.root.traverse(T=>{const N=T;N.isMesh&&this.options.ground&&(N.castShadow=!0),N.isMesh&&N.morphTargetDictionary&&N.morphTargetInfluences&&this.morphs.push({influences:N.morphTargetInfluences,index:N.morphTargetDictionary})}),(s=(r=this.options).onClips)==null||s.call(r,w.animations.map(T=>T.name)),w.animations.length||this.options.track){this.mixer=new u1(this.root);const T=C=>C.map(R=>w.animations.find(m=>m.name===R)).find(Boolean),N={...db,...this.options.clipFor};for(const[C,R]of Object.entries(N)){if(C==="speaking"&&!((a=this.options.clipFor)!=null&&a.speaking)&&!this.options.track){const S=R.map(l=>w.animations.find(L=>L.name===l)).filter(Boolean);if(S.length>1){this.speaking=S.map(l=>{const L=this.mixer.clipAction(l).setLoop(xc,1);return L.clampWhenFinished=!0,L});continue}}const m=T(R);if(!m)continue;const f=this.mixer.clipAction(m);gb.has(C)?(f.setLoop(xc,1),f.clampWhenFinished=!0):f.setLoop(io,1/0),this.actions.set(C,f)}this.mixer.addEventListener("finished",C=>this.onClipFinished(C.action)),this.clips=w.animations.length}if(this.options.track){const T=Rp(this.options.track),N=this.mixer.clipAction(T).setLoop(io,1/0);this.actions.set("speaking",N),this.generated=N}this.mixer&&this.play(this.actions.get("idle")??this.speaking[this.speakIndex]??this.actions.get("speaking"));for(const T of mb){const N=this.root.getObjectByName(T);N&&this.toes.push(N)}this.scene.add(this.root),this.state="ready",(h=(o=this.options).onState)==null||h.call(o,"ready"),this.start()}catch{this.loading=null,this.state="failed",(d=(c=this.options).onState)==null||d.call(c,"failed")}}start(){var t,n;if(this.stop(),this.clock.getDelta(),(n=(t=this.options).reduced)!=null&&n.call(t)){this.still();return}const e=()=>{var s;this.raf=requestAnimationFrame(e);const r=Math.min(.1,this.clock.getDelta());(s=this.mixer)==null||s.update(r),this.time+=r,this.ground(),this.applyFace(),this.render()};this.raf=requestAnimationFrame(e)}stop(){this.raf&&cancelAnimationFrame(this.raf),this.raf=0}applyFace(){for(const e of this.morphs)for(const[t,n]of Object.entries(this.face)){const r=e.index[t];r!==void 0&&(e.influences[r]=n)}}resize(){const{width:e,height:t}=this.options.canvas.getBoundingClientRect();!e||!t||this.lost||(this.ownsRenderer&&this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.render())}render(){this.lost||this.renderer.render(this.scene,this.camera)}}function _b(i){const e=document.createElement("canvas");e.width=768,e.height=832;const t=e.getContext("2d");t.fillStyle="#000",t.fillRect(0,0,e.width,e.height),t.strokeStyle="#fff",t.fillStyle="#fff",t.lineWidth=4,t.lineCap="round",t.lineJoin="round";for(const n of i)if(n.length){t.beginPath(),t.moveTo(n[0][0]*768,n[0][1]*832);for(const r of n.slice(1))t.lineTo(r[0]*768,r[1]*832);t.stroke(),n.length===1&&(t.beginPath(),t.arc(n[0][0]*768,n[0][1]*832,2,0,Math.PI*2),t.fill())}return e.toDataURL("image/png").split(",")[1]}class lu extends Error{constructor(e,t){super(e),this.status=t}}async function Bi(i,e,t){let n;try{n=await fetch(i,{method:t?"POST":"GET",signal:AbortSignal.any([e,AbortSignal.timeout(15e3)]),cache:"no-store",headers:t?{"Content-Type":"application/json"}:{},body:t?JSON.stringify(t):void 0})}catch(s){throw e.aborted?s:new Error("Cannot reach AI right now. Your sketch is kept. Please try again shortly.")}const r=await n.json().catch(()=>({}));if(!n.ok)throw new lu(typeof r.detail=="string"?r.detail:"AI is temporarily unavailable. Please try again shortly.",n.status);return r}async function sm(i){return Bi("/api/status",i)}function _o(i,e=850){return new Promise((t,n)=>{const r=()=>{clearTimeout(s),n(i.reason)},s=setTimeout(()=>{i.removeEventListener("abort",r),t()},e);i.aborted?r():i.addEventListener("abort",r,{once:!0})})}async function yb(i,e,t,n){const r=await Bi("/api/jobs",t,{sketch:_b(i),revision:e});if(r.revision!==e||typeof r.id!="string")throw new Error("The generation request does not match your sketch. Please try again.");const s=performance.now()+15e4;for(;performance.now()<s;){await _o(t);const a=await Bi(`/api/jobs/${encodeURIComponent(r.id)}`,t);if(a.revision!==e)throw new Error("The generated world does not match your current sketch. Please try again.");if(a.status==="failed")throw new Error(a.message||"Generation failed. Your sketch is kept. Please try again.");if(a.status==="complete"){if(typeof a.image!="string"||a.image.length>6e6||a.mime!=="image/webp")throw new Error("The generated image could not be opened. Please try again.");return a}n(Math.min(.99,Math.max(0,Number(a.progress)||0)))}throw new Error("Generation timed out. Your sketch is kept. Please try again shortly.")}const Cp=24e3,Mb="audio/pcm16-24000",Fs=600,Ip=24,wb=.4,Sb=6,xb=.15;async function bb(i,e){const t=performance.now()+9e4;for(;;)try{const n=await Bi("/api/space",e,{phase:i});for(;performance.now()<t;){const r=await Bi(`/api/jobs/${encodeURIComponent(n.id)}`,e);if(r.status==="failed")throw new Error(r.message||"The space is not ready. Please try again.");if(r.status==="complete")return;await _o(e,400)}throw new Error("The space took too long to prepare. Please try again shortly.")}catch(n){if(n instanceof lu&&n.status===429&&performance.now()<t){await _o(e,850);continue}throw n}}class Eb{constructor(e={}){Ye(this,"hooks");Ye(this,"context",null);Ye(this,"gain",null);Ye(this,"sources",new Set);Ye(this,"envelopes",[]);Ye(this,"controller",null);Ye(this,"next",0);Ye(this,"peak",0);Ye(this,"quiet",!1);this.hooks=e}get supported(){return typeof AudioContext<"u"}get muted(){return this.quiet}set muted(e){this.quiet=e,this.gain&&this.context&&this.gain.gain.setTargetAtTime(e?0:1,this.context.currentTime,.02)}get playing(){return!!this.context&&this.next>this.context.currentTime}level(){if(!this.context||this.context.state!=="running")return 0;const e=this.context.currentTime;for(const t of this.envelopes){const n=Math.floor((e-t.start)*Cp/Fs);if(!(n<0)&&n<t.levels.length)return Math.min(1,t.levels[n]*this.boost())}return 0}boost(){return Math.min(Sb,wb/Math.max(this.peak,.001))}async speak(e,t){return this.play(t,n=>Bi("/api/voice",n,{text:e,revision:t}),400)}async turn(e,t){return this.play(t,n=>Bi("/api/turn",n,e),150)}async warm(){this.supported&&await this.open()}async interrupt(e){try{await Bi("/api/interrupt",AbortSignal.timeout(5e3),{revision:e})}catch{}}async play(e,t,n){var a,o,h,c;if(this.stop(),!this.supported)return;const r=new AbortController,s=r.signal;this.controller=r;try{const d=await this.open(),p=await t(s);if(p.revision!==e||typeof p.id!="string")throw new Error("The voice does not match this page. Please try again.");let g=0;const w=performance.now()+12e4;for(;performance.now()<w;){const T=await Bi(`/api/jobs/${encodeURIComponent(p.id)}?after=${g}`,s);if(T.revision!==e)throw new Error("The voice does not match this page. Please try again.");(o=(a=this.hooks).onTurn)==null||o.call(a,T);for(const N of T.chunks??[])N.seq<g||N.mime!==Mb||typeof N.audio!="string"||(g=N.seq+1,this.schedule(d,N.audio));if(T.status==="failed")throw new Error(T.message||"The voice is unavailable right now. Please try again.");if(T.status==="complete"||T.status==="interrupted"||T.status==="incomplete")break;await _o(s,n)}if(performance.now()>=w)throw new Error("The voice took too long. Please try again shortly.");await this.drain(s)}catch(d){if(s.aborted)return;throw d}finally{this.controller===r&&(this.controller=null,(c=(h=this.hooks).onEnd)==null||c.call(h))}}stop(){var e;(e=this.controller)==null||e.abort();for(const t of this.sources)t.onended=null,t.stop(),t.disconnect();this.sources.clear(),this.envelopes=[],this.next=0,this.peak=0}async open(){return this.context||(this.context=new AudioContext,this.gain=this.context.createGain(),this.gain.gain.value=this.quiet?0:1,this.gain.connect(this.context.destination)),this.context.state!=="running"&&await Promise.race([this.context.resume(),new Promise(e=>setTimeout(e,400))]),this.context}schedule(e,t){var p,g;if(!this.gain)return;const n=atob(t),r=new Uint8Array(n.length);for(let w=0;w<n.length;w++)r[w]=n.charCodeAt(w);const s=new Int16Array(r.buffer,0,r.byteLength>>1);if(!s.length)return;const a=e.createBuffer(1,s.length,Cp),o=a.getChannelData(0),h=new Float32Array(Math.ceil(s.length/Fs));for(let w=0;w<s.length;w++){const T=s[w]/32768;o[w]=T,h[w/Fs|0]+=T*T}for(let w=0;w<h.length;w++)h[w]=Math.sqrt(h[w]/Math.min(Fs,s.length-w*Fs)),h[w]>this.peak&&(this.peak=h[w]);const c=Math.max(e.currentTime+xb,this.next);this.next=c+a.duration,this.envelopes.push({start:c,levels:h}),this.envelopes.length>Ip&&this.envelopes.splice(0,this.envelopes.length-Ip);const d=e.createBufferSource();d.buffer=a,d.connect(this.gain),d.onended=()=>this.sources.delete(d),this.sources.add(d),d.start(c),(g=(p=this.hooks).onAudio)==null||g.call(p,Math.max(0,(c-e.currentTime)*1e3))}drain(e){const t=this.context?(this.next-this.context.currentTime)*1e3+60:0;return t<=0?Promise.resolve():new Promise(n=>{const r=()=>{clearTimeout(s),e.removeEventListener("abort",r),n()},s=setTimeout(r,t);e.aborted?r():e.addEventListener("abort",r,{once:!0})})}}const br={frameMs:20,speechRms:.022,silenceRms:.014,silenceMs:700,minSegmentMs:450,maxSegmentMs:2e4,attackFrames:2,softStartRms:.016,softStartFrames:12,bargeInSpeechRms:.045,bargeInAttackFrames:8,guardMs:300};function Pp(){return{phase:"quiet",loudFrames:0,softFrames:0,quietMs:0,startedAt:0,guardUntil:0,wasPlaying:!1,dropped:0}}function Tb(i,e,t,n=br){const r=e||t<i.guardUntil;return{guarded:r,speech:r?Math.max(n.bargeInSpeechRms,n.speechRms*1.25):n.speechRms,attack:r?n.bargeInAttackFrames:n.attackFrames}}function Ab(i,e,t,n,r=br){i.wasPlaying&&!t&&(i.guardUntil=n+r.guardMs),i.wasPlaying=t;const{guarded:s,speech:a,attack:o}=Tb(i,t,n,r);if(i.phase==="speech"){i.quietMs=e>=r.silenceRms?0:i.quietMs+r.frameMs;const d=n+r.frameMs-i.startedAt>=r.maxSegmentMs;if(!d&&i.quietMs<r.silenceMs)return null;const p=i.startedAt,g=(d?n+r.frameMs:n+r.frameMs-i.quietMs)-p;return Rb(i),g<r.minSegmentMs?(i.dropped++,{type:"drop",at:n,from:p,ms:g}):{type:"offset",at:n,from:p,ms:g}}e>=a?(i.loudFrames++,i.softFrames++):!s&&e>=r.softStartRms?(i.softFrames++,i.loudFrames=0):(i.loudFrames=0,i.softFrames=0);const h=i.loudFrames>=o;return!h&&!(i.softFrames>=r.softStartFrames)?null:(i.startedAt=n-Math.max(i.loudFrames,i.softFrames)*r.frameMs,i.phase="speech",i.quietMs=0,i.loudFrames=0,i.softFrames=0,{type:s&&h?"barge":"onset",at:n,from:i.startedAt})}function Rb(i){i.phase="quiet",i.loudFrames=0,i.softFrames=0,i.quietMs=0,i.startedAt=0}/*!
 * ONNX Runtime Web v1.30.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var hu=Object.defineProperty,Cb=Object.getOwnPropertyDescriptor,Ib=Object.getOwnPropertyNames,Pb=Object.prototype.hasOwnProperty,Lb=(i=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(i,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):i)(function(i){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+i+'" is not supported')}),St=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}},No=(i,e)=>{for(var t in e)hu(i,t,{get:e[t],enumerable:!0})},Ub=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Ib(e))!Pb.call(i,r)&&r!==t&&hu(i,r,{get:()=>e[r],enumerable:!(n=Cb(e,r))||n.enumerable});return i},Ic=i=>Ub(hu({},"__esModule",{value:!0}),i),Bs,nr,yo,Lp,am,om=St(()=>{"use strict";Bs=new Map,nr=[],yo=(i,e,t)=>{if(e&&typeof e.init=="function"&&typeof e.createInferenceSessionHandler=="function"){let n=Bs.get(i);if(n===void 0)Bs.set(i,{backend:e,priority:t});else{if(n.priority>t)return;if(n.priority===t&&n.backend!==e)throw new Error(`cannot register backend "${i}" using priority ${t}`)}if(t>=0){let r=nr.indexOf(i);r!==-1&&nr.splice(r,1);for(let s=0;s<nr.length;s++)if(Bs.get(nr[s]).priority<=t){nr.splice(s,0,i);return}nr.push(i)}return}throw new TypeError("not a valid backend")},Lp=async i=>{let e=Bs.get(i);if(!e)return"backend not found.";if(e.initialized)return e.backend;if(e.aborted)return e.error;{let t=!!e.initPromise;try{return t||(e.initPromise=e.backend.init(i)),await e.initPromise,e.initialized=!0,e.backend}catch(n){return t||(e.error=`${n}`,e.aborted=!0),e.error}finally{delete e.initPromise}}},am=async i=>{let e=i.executionProviders||[],t=e.map(h=>typeof h=="string"?h:h.name),n=t.length===0?nr:t,r,s=[],a=new Set;for(let h of n){let c=await Lp(h);typeof c=="string"?s.push({name:h,err:c}):(r||(r=c),r===c&&a.add(h))}if(!r)throw new Error(`no available backend found. ERR: ${s.map(h=>`[${h.name}] ${h.err}`).join(", ")}`);for(let{name:h,err:c}of s)t.includes(h)&&console.warn(`removing requested execution provider "${h}" from session options because it is not available: ${c}`);let o=e.filter(h=>a.has(typeof h=="string"?h:h.name));return[r,new Proxy(i,{get:(h,c)=>c==="executionProviders"?o:Reflect.get(h,c)})]}}),Db=St(()=>{"use strict";om()}),lm,Nb=St(()=>{"use strict";lm="1.30.0"}),yh,rn,hm=St(()=>{"use strict";Nb(),yh="warning",rn={wasm:{},webgl:{},webgpu:{},versions:{common:lm},set logLevel(i){if(i!==void 0){if(typeof i!="string"||["verbose","info","warning","error","fatal"].indexOf(i)===-1)throw new Error(`Unsupported logging level: ${i}`);yh=i}},get logLevel(){return yh}},Object.defineProperty(rn,"logLevel",{enumerable:!0})}),Vt,Fb=St(()=>{"use strict";hm(),Vt=rn}),cm,um,Bb=St(()=>{"use strict";cm=(i,e)=>{let t=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);t.width=i.dims[3],t.height=i.dims[2];let n=t.getContext("2d");if(n!=null){let r,s;(e==null?void 0:e.tensorLayout)!==void 0&&e.tensorLayout==="NHWC"?(r=i.dims[2],s=i.dims[3]):(r=i.dims[3],s=i.dims[2]);let a=(e==null?void 0:e.format)!==void 0?e.format:"RGB",o=e==null?void 0:e.norm,h,c;o===void 0||o.mean===void 0?h=[255,255,255,255]:typeof o.mean=="number"?h=[o.mean,o.mean,o.mean,o.mean]:(h=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(h[3]=o.mean[3])),o===void 0||o.bias===void 0?c=[0,0,0,0]:typeof o.bias=="number"?c=[o.bias,o.bias,o.bias,o.bias]:(c=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(c[3]=o.bias[3]));let d=s*r,p=0,g=d,w=d*2,T=-1;a==="RGBA"?(p=0,g=d,w=d*2,T=d*3):a==="RGB"?(p=0,g=d,w=d*2):a==="RBG"&&(p=0,w=d,g=d*2);for(let N=0;N<s;N++)for(let C=0;C<r;C++){let R=(i.data[p++]-c[0])*h[0],m=(i.data[g++]-c[1])*h[1],f=(i.data[w++]-c[2])*h[2],S=T===-1?255:(i.data[T++]-c[3])*h[3];n.fillStyle="rgba("+R+","+m+","+f+","+S+")",n.fillRect(C,N,1,1)}if("toDataURL"in t)return t.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},um=(i,e)=>{let t=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),n;if(t!=null){let r,s,a;(e==null?void 0:e.tensorLayout)!==void 0&&e.tensorLayout==="NHWC"?(r=i.dims[2],s=i.dims[1],a=i.dims[3]):(r=i.dims[3],s=i.dims[2],a=i.dims[1]);let o=e!==void 0&&e.format!==void 0?e.format:"RGB",h=e==null?void 0:e.norm,c,d;h===void 0||h.mean===void 0?c=[255,255,255,255]:typeof h.mean=="number"?c=[h.mean,h.mean,h.mean,h.mean]:(c=[h.mean[0],h.mean[1],h.mean[2],255],h.mean[3]!==void 0&&(c[3]=h.mean[3])),h===void 0||h.bias===void 0?d=[0,0,0,0]:typeof h.bias=="number"?d=[h.bias,h.bias,h.bias,h.bias]:(d=[h.bias[0],h.bias[1],h.bias[2],0],h.bias[3]!==void 0&&(d[3]=h.bias[3]));let p=s*r;if(e!==void 0&&(e.format!==void 0&&a===4&&e.format!=="RGBA"||a===3&&e.format!=="RGB"&&e.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let g=4,w=0,T=1,N=2,C=3,R=0,m=p,f=p*2,S=-1;o==="RGBA"?(R=0,m=p,f=p*2,S=p*3):o==="RGB"?(R=0,m=p,f=p*2):o==="RBG"&&(R=0,f=p,m=p*2),n=t.createImageData(r,s);for(let l=0;l<s*r;w+=g,T+=g,N+=g,C+=g,l++)n.data[w]=(i.data[R++]-d[0])*c[0],n.data[T]=(i.data[m++]-d[1])*c[1],n.data[N]=(i.data[f++]-d[2])*c[2],n.data[C]=S===-1?255:(i.data[S++]-d[3])*c[3]}else throw new Error("Can not access image data");return n}}),Xa,fm,dm,pm,mm,gm,Ob=St(()=>{"use strict";cu(),Xa=(i,e)=>{if(i===void 0)throw new Error("Image buffer must be defined");if(e.height===void 0||e.width===void 0)throw new Error("Image height and width must be defined");if(e.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:t,width:n}=e,r=e.norm??{mean:255,bias:0},s,a;typeof r.mean=="number"?s=[r.mean,r.mean,r.mean,r.mean]:s=[r.mean[0],r.mean[1],r.mean[2],r.mean[3]??255],typeof r.bias=="number"?a=[r.bias,r.bias,r.bias,r.bias]:a=[r.bias[0],r.bias[1],r.bias[2],r.bias[3]??0];let o=e.format!==void 0?e.format:"RGBA",h=e.tensorFormat!==void 0&&e.tensorFormat!==void 0?e.tensorFormat:"RGB",c=t*n,d=h==="RGBA"?new Float32Array(c*4):new Float32Array(c*3),p=4,g=0,w=1,T=2,N=3,C=0,R=c,m=c*2,f=-1;o==="RGB"&&(p=3,g=0,w=1,T=2,N=-1),h==="RGBA"?f=c*3:h==="RBG"?(C=0,m=c,R=c*2):h==="BGR"&&(m=0,R=c,C=c*2);for(let S=0;S<c;S++,g+=p,T+=p,w+=p,N+=p)d[C++]=(i[g]+a[0])/s[0],d[R++]=(i[w]+a[1])/s[1],d[m++]=(i[T]+a[2])/s[2],f!==-1&&N!==-1&&(d[f++]=(i[N]+a[3])/s[3]);return h==="RGBA"?new Pn("float32",d,[1,4,t,n]):new Pn("float32",d,[1,3,t,n])},fm=async(i,e)=>{let t=typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement,n=typeof ImageData<"u"&&i instanceof ImageData,r=typeof ImageBitmap<"u"&&i instanceof ImageBitmap,s=typeof i=="string",a,o=e??{},h=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},c=d=>typeof HTMLCanvasElement<"u"&&d instanceof HTMLCanvasElement||d instanceof OffscreenCanvas?d.getContext("2d"):null;if(t){let d=h();d.width=i.width,d.height=i.height;let p=c(d);if(p!=null){let g=i.height,w=i.width;if(e!==void 0&&e.resizedHeight!==void 0&&e.resizedWidth!==void 0&&(g=e.resizedHeight,w=e.resizedWidth),e!==void 0){if(o=e,e.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=g,o.width=w}else o.tensorFormat="RGBA",o.height=g,o.width=w;p.drawImage(i,0,0),a=p.getImageData(0,0,w,g).data}else throw new Error("Can not access image data")}else if(n){let d,p;if(e!==void 0&&e.resizedWidth!==void 0&&e.resizedHeight!==void 0?(d=e.resizedHeight,p=e.resizedWidth):(d=i.height,p=i.width),e!==void 0&&(o=e),o.format="RGBA",o.height=d,o.width=p,e!==void 0){let g=h();g.width=p,g.height=d;let w=c(g);if(w!=null)w.putImageData(i,0,0),a=w.getImageData(0,0,p,d).data;else throw new Error("Can not access image data")}else a=i.data}else if(r){if(e===void 0)throw new Error("Please provide image config with format for Imagebitmap");let d=h();d.width=i.width,d.height=i.height;let p=c(d);if(p!=null){let g=i.height,w=i.width;return p.drawImage(i,0,0,w,g),a=p.getImageData(0,0,w,g).data,o.height=g,o.width=w,Xa(a,o)}else throw new Error("Can not access image data")}else{if(s)return new Promise((d,p)=>{let g=h(),w=c(g);if(!i||!w)return p();let T=new Image;T.crossOrigin="Anonymous",T.src=i,T.onload=()=>{g.width=T.width,g.height=T.height,w.drawImage(T,0,0,g.width,g.height);let N=w.getImageData(0,0,g.width,g.height);o.height=g.height,o.width=g.width,d(Xa(N.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return Xa(a,o);throw new Error("Input data provided is not supported - aborted tensor creation")},dm=(i,e)=>{let{width:t,height:n,download:r,dispose:s}=e,a=[1,n,t,4];return new Pn({location:"texture",type:"float32",texture:i,dims:a,download:r,dispose:s})},pm=(i,e)=>{let{dataType:t,dims:n,download:r,dispose:s}=e;return new Pn({location:"gpu-buffer",type:t??"float32",gpuBuffer:i,dims:n,download:r,dispose:s})},mm=(i,e)=>{let{dataType:t,dims:n,download:r,dispose:s}=e;return new Pn({location:"ml-tensor",type:t??"float32",mlTensor:i,dims:n,download:r,dispose:s})},gm=(i,e,t)=>new Pn({location:"cpu-pinned",type:i,data:e,dims:t??[e.length]})}),Er,Hs,Mh,vm,kb=St(()=>{"use strict";Er=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Hs=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Mh=!1,vm=()=>{if(!Mh){Mh=!0;let i=typeof BigInt64Array<"u"&&BigInt64Array.from,e=typeof BigUint64Array<"u"&&BigUint64Array.from,t=globalThis.Float16Array,n=typeof t<"u"&&t.from;i&&(Er.set("int64",BigInt64Array),Hs.set(BigInt64Array,"int64")),e&&(Er.set("uint64",BigUint64Array),Hs.set(BigUint64Array,"uint64")),n?(Er.set("float16",t),Hs.set(t,"float16")):Er.set("float16",Uint16Array)}}}),_m,ym,zb=St(()=>{"use strict";cu(),_m=i=>{let e=1;for(let t=0;t<i.length;t++){let n=i[t];if(typeof n!="number"||!Number.isSafeInteger(n))throw new TypeError(`dims[${t}] must be an integer, got: ${n}`);if(n<0)throw new RangeError(`dims[${t}] must be a non-negative integer, got: ${n}`);e*=n}return e},ym=(i,e)=>{switch(i.location){case"cpu":return new Pn(i.type,i.data,e);case"cpu-pinned":return new Pn({location:"cpu-pinned",data:i.data,type:i.type,dims:e});case"texture":return new Pn({location:"texture",texture:i.texture,type:i.type,dims:e});case"gpu-buffer":return new Pn({location:"gpu-buffer",gpuBuffer:i.gpuBuffer,type:i.type,dims:e});case"ml-tensor":return new Pn({location:"ml-tensor",mlTensor:i.mlTensor,type:i.type,dims:e});default:throw new Error(`tensorReshape: tensor location ${i.location} is not supported`)}}}),Pn,cu=St(()=>{"use strict";Bb(),Ob(),kb(),zb(),Pn=class{constructor(i,e,t){vm();let n,r;if(typeof i=="object"&&"location"in i)switch(this.dataLocation=i.location,n=i.type,r=i.dims,i.location){case"cpu-pinned":{let a=Er.get(n);if(!a)throw new TypeError(`unsupported type "${n}" to create tensor from pinned buffer`);if(!(i.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=i.data;break}case"texture":{if(n!=="float32")throw new TypeError(`unsupported type "${n}" to create tensor from texture`);this.gpuTextureData=i.texture,this.downloader=i.download,this.disposer=i.dispose;break}case"gpu-buffer":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from gpu buffer`);this.gpuBufferData=i.gpuBuffer,this.downloader=i.download,this.disposer=i.dispose;break}case"ml-tensor":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint64"&&n!=="int8"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from MLTensor`);this.mlTensorData=i.mlTensor,this.downloader=i.download,this.disposer=i.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof i=="string")if(n=i,o=t,i==="string"){if(!Array.isArray(e))throw new TypeError("A string tensor's data must be a string array.");a=e}else{let h=Er.get(i);if(h===void 0)throw new TypeError(`Unsupported tensor type: ${i}.`);if(Array.isArray(e)){if(i==="float16"&&h===Uint16Array||i==="uint4"||i==="int4")throw new TypeError(`Creating a ${i} tensor from number array is not supported. Please use ${h.name} as data.`);i==="uint64"||i==="int64"?a=h.from(e,BigInt):a=h.from(e)}else if(e instanceof h)a=e;else if(e instanceof Uint8ClampedArray)if(i==="uint8")a=Uint8Array.from(e);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(i==="float16"&&e instanceof Uint16Array&&h!==Uint16Array)a=new globalThis.Float16Array(e.buffer,e.byteOffset,e.length);else throw new TypeError(`A ${n} tensor's data must be type of ${h}`)}else if(o=e,Array.isArray(i)){if(i.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let h=typeof i[0];if(h==="string")n="string",a=i;else if(h==="boolean")n="bool",a=Uint8Array.from(i);else throw new TypeError(`Invalid element type of data array: ${h}.`)}else if(i instanceof Uint8ClampedArray)n="uint8",a=Uint8Array.from(i);else{let h=Hs.get(i.constructor);if(h===void 0)throw new TypeError(`Unsupported type for tensor data: ${i.constructor}.`);n=h,a=i}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");r=o,this.cpuData=a,this.dataLocation="cpu"}let s=_m(r);if(this.cpuData&&s!==this.cpuData.length&&!((n==="uint4"||n==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=n,this.dims=r,this.size=s}static async fromImage(i,e){return fm(i,e)}static fromTexture(i,e){return dm(i,e)}static fromGpuBuffer(i,e){return pm(i,e)}static fromMLTensor(i,e){return mm(i,e)}static fromPinnedBuffer(i,e,t){return gm(i,e,t)}toDataURL(i){return cm(this,i)}toImageData(i){return um(this,i)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(i){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let e=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=e,i&&this.disposer&&(this.disposer(),this.disposer=void 0),e}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(i){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return ym(this,i)}}}),Un,Mm=St(()=>{"use strict";cu(),Un=Pn}),Pc,wh,us,fs,ds,ps,wm=St(()=>{"use strict";hm(),Pc=(i,e)=>{(typeof rn.trace>"u"?!rn.wasm.trace:!rn.trace)||console.timeStamp(`${i}::ORT::${e}`)},wh=(i,e)=>{var r;let t=((r=new Error().stack)==null?void 0:r.split(/\r\n|\r|\n/g))||[],n=!1;for(let s=0;s<t.length;s++){if(n&&!t[s].includes("TRACE_FUNC")){let a=`FUNC_${i}::${t[s].trim().split(" ")[1]}`;e&&(a+=`::${e}`),Pc("CPU",a);return}t[s].includes("TRACE_FUNC")&&(n=!0)}},us=i=>{(typeof rn.trace>"u"?!rn.wasm.trace:!rn.trace)||wh("BEGIN",i)},fs=i=>{(typeof rn.trace>"u"?!rn.wasm.trace:!rn.trace)||wh("END",i)},ds=i=>{(typeof rn.trace>"u"?!rn.wasm.trace:!rn.trace)||console.time(`ORT::${i}`)},ps=i=>{(typeof rn.trace>"u"?!rn.wasm.trace:!rn.trace)||console.timeEnd(`ORT::${i}`)}}),Sm,Vb=St(()=>{"use strict";om(),Mm(),wm(),Sm=class xm{constructor(e){this.handler=e}async run(e,t,n){us(),ds("InferenceSession.run");let r={},s={};if(typeof e!="object"||e===null||e instanceof Un||Array.isArray(e))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof t=="object"){if(t===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(t instanceof Un)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(t)){if(t.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let c of t){if(typeof c!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(c)===-1)throw new RangeError(`'fetches' contains invalid output name: ${c}.`);r[c]=null}if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else{let c=!1,d=Object.getOwnPropertyNames(t);for(let p of this.outputNames)if(d.indexOf(p)!==-1){let g=t[p];(g===null||g instanceof Un)&&(c=!0,a=!1,r[p]=g)}if(c){if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else s=t}}else if(typeof t<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let c of this.inputNames)if(typeof e[c]>"u")throw new Error(`input '${c}' is missing in 'feeds'.`);if(a)for(let c of this.outputNames)r[c]=null;let o=await this.handler.run(e,r,s),h={};for(let c in o)if(Object.hasOwnProperty.call(o,c)){let d=o[c];d instanceof Un?h[c]=d:h[c]=new Un(d.type,d.data,d.dims)}return ps("InferenceSession.run"),fs(),h}async release(){return this.handler.dispose()}static async create(e,t,n,r){us(),ds("InferenceSession.create");let s,a={};if(typeof e=="string"){if(s=e,typeof t=="object"&&t!==null)a=t;else if(typeof t<"u")throw new TypeError("'options' must be an object.")}else if(e instanceof Uint8Array){if(s=e,typeof t=="object"&&t!==null)a=t;else if(typeof t<"u")throw new TypeError("'options' must be an object.")}else if(e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer){let d=e,p=0,g=e.byteLength;if(typeof t=="object"&&t!==null)a=t;else if(typeof t=="number"){if(p=t,!Number.isSafeInteger(p))throw new RangeError("'byteOffset' must be an integer.");if(p<0||p>=d.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${d.byteLength}).`);if(g=e.byteLength-p,typeof n=="number"){if(g=n,!Number.isSafeInteger(g))throw new RangeError("'byteLength' must be an integer.");if(g<=0||p+g>d.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${d.byteLength-p}].`);if(typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(typeof n<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof t<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(d,p,g)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,h]=await am(a),c=await o.createInferenceSessionHandler(s,h);return ps("InferenceSession.create"),fs(),new xm(c)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),uu,Gb=St(()=>{"use strict";Vb(),uu=Sm}),Hb=St(()=>{"use strict"}),Wb=St(()=>{"use strict"}),Xb=St(()=>{"use strict"}),qb=St(()=>{"use strict"}),$b={};No($b,{InferenceSession:()=>uu,TRACE:()=>Pc,TRACE_EVENT_BEGIN:()=>ds,TRACE_EVENT_END:()=>ps,TRACE_FUNC_BEGIN:()=>us,TRACE_FUNC_END:()=>fs,Tensor:()=>Un,env:()=>Vt,registerBackend:()=>yo});var Ur=St(()=>{"use strict";Db(),Fb(),Gb(),Mm(),Hb(),Wb(),wm(),Xb(),qb()}),fu=St(()=>{"use strict"}),bm={};No(bm,{default:()=>Em});var Sh,xh,Em,Yb=St(()=>{"use strict";var i;Om(),Ms(),du(),Sh="ort-wasm-proxy-worker",xh=((i=globalThis.self)==null?void 0:i.name)===Sh,xh&&(self.onmessage=e=>{let{type:t,in:n}=e.data;try{switch(t){case"init-wasm":pu(n.wasm).then(()=>{yu(n).then(()=>{postMessage({type:t})},r=>{postMessage({type:t,err:r})})},r=>{postMessage({type:t,err:r})});break;case"init-ep":{let{epName:r,env:s}=n;Mu(s,r).then(()=>{postMessage({type:t})},a=>{postMessage({type:t,err:a})});break}case"copy-from":{let{buffer:r}=n,s=wo(r);postMessage({type:t,out:s});break}case"create":{let{model:r,options:s}=n;wu(r,s).then(a=>{postMessage({type:t,out:a})},a=>{postMessage({type:t,err:a})});break}case"release":Su(n),postMessage({type:t});break;case"run":{let{sessionId:r,inputIndices:s,inputs:a,outputIndices:o,options:h}=n;xu(r,s,a,o,new Array(o.length).fill(null),h).then(c=>{c.some(d=>d[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:c},Eu([...a,...c]))},c=>{postMessage({type:t,err:c})});break}case"end-profiling":bu(n),postMessage({type:t});break;default:}}catch(r){postMessage({type:t,err:r})}}),Em=xh?null:e=>new Worker(e??In,{type:"module",name:Sh})}),Tm={};No(Tm,{default:()=>Am});async function Up(i={}){var sf,af;var e=i,t=!!globalThis.window,n=!!globalThis.WorkerGlobalScope,r=n&&((sf=self.name)==null?void 0:sf.startsWith("em-pthread"));e.mountExternalData=(F,H)=>{F.startsWith("./")&&(F=F.substring(2)),(e.Tb||(e.Tb=new Map)).set(F,H)},e.unmountExternalData=()=>{delete e.Tb,delete e.mc,delete e.lc,delete e.nc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;var s,a,o=(F,H)=>{throw H},h=import.meta.url,c="";if(t||n){try{c=new URL(".",h).href}catch{}n&&(a=F=>{var H=new XMLHttpRequest;return H.open("GET",F,!1),H.responseType="arraybuffer",H.send(null),new Uint8Array(H.response)}),s=async F=>{if(l(F))return new Promise((Z,Y)=>{var se=new XMLHttpRequest;se.open("GET",F,!0),se.responseType="arraybuffer",se.onload=()=>{se.status==200||se.status==0&&se.response?Z(se.response):Y(se.status)},se.onerror=Y,se.send(null)});var H=await fetch(F,{credentials:"same-origin"});if(H.ok)return H.arrayBuffer();throw Error(H.status+" : "+H.url)}}var d,p,g,w,T,N,C=console.log.bind(console),R=console.error.bind(console),m=C,f=R,S=!1,l=F=>F.startsWith("file://");function L(){Ae.buffer!=M.buffer&&G()}if(r){let F=function(H){try{var Z=H.data,Y=Z.Rb;if(Y==="load"){let se=[];self.onmessage=me=>se.push(me),N=()=>{postMessage({Rb:"loaded"});for(let me of se)F(me);self.onmessage=F};for(let me of Z.ac)e[me]&&!e[me].proxy||(e[me]=(...Fe)=>{postMessage({Rb:"callHandler",$b:me,args:Fe})},me=="print"&&(m=e[me]),me=="printErr"&&(f=e[me]));Ae=Z.fc,G(),p=Z.hc,J(),ha()}else if(Y==="run"){(function(se){var me=(L(),u)[se+52>>>2>>>0];se=(L(),u)[se+56>>>2>>>0],Qu(me,me-se),ot(me)})(Z.Qb),Oo(Z.Qb,0,0,1,0,0),He(),ci(Z.Qb),U||(U=!0);try{Pe(Z.dc,Z.Vb)}catch(se){if(se!="unwind")throw se}}else Z.target!=="setimmediate"&&(Y==="checkMailbox"?U&&Tn():Y&&(f(`worker: received unknown command ${Y}`),f(Z)))}catch(se){throw $u(),se}};var U=!1;self.onunhandledrejection=H=>{throw H.reason||H},self.onmessage=F}var M,b,P,_,u,E,I,D,k,z=!1;function G(){var F=Ae.buffer;e.HEAP8=M=new Int8Array(F),P=new Int16Array(F),e.HEAPU8=b=new Uint8Array(F),e.HEAP32=_=new Int32Array(F),e.HEAPU32=u=new Uint32Array(F),E=new Float32Array(F),I=new Float64Array(F),D=new BigInt64Array(F),new BigUint64Array(F)}function O(){z=!0,r?N():Ki.Va()}function x(F){throw f(F="Aborted("+F+")"),S=!0,F=new WebAssembly.RuntimeError(F+". Build with -sASSERTIONS for more info."),T==null||T(F),F}function B(){return{a:{T:cg,f:y,w:V,e:Re,k:Ce,h:Me,L:Ee,b:ze,G:qe,ua:ee,j:Ue,M:be,La:Ve,qa:Be,sa:xt,Ma:et,Ja:yt,Ca:cn,Ia:Bt,Z:Ot,ra:Hi,oa:Nt,Ka:kt,pa:Wi,Ra:zt,Fa:Tt,ma:qi,va:$i,ja:Yi,U:fr,Ea:ci,Oa:dr,za:pr,Aa:re,Ba:pe,xa:he,ya:ce,ka:We,Ta:Qe,Qa:ft,W:bt,V:Yt,Pa:at,F:Ft,Na:Ct,na:tn,u:Ke,H:Ze,S:Xn,la:At,ba:ui,Ua:Wt,Ga:Ei,Ha:Ss,ta:ge,I:zu,wa:Vu,Y:Gu,Da:Hu,X:Wu,$:$g,N:Gg,aa:qg,O:Vg,v:Ig,d:pg,m:fg,n:ug,r:bg,ca:Og,E:Bg,o:vg,P:kg,C:Hg,J:Fg,da:Ng,ea:Dg,z:Eg,fa:Lg,Q:Ug,ga:Pg,y:Rg,D:zg,c:dg,q:gg,i:mg,_:Yg,l:yg,p:Mg,s:_g,t:wg,x:Tg,R:Cg,A:Wg,K:Ag,B:Xg,ha:xg,ia:Sg,g:lg,a:Ae,Sa:xe}}}async function J(){function F(Y,se){return Ki=Y.exports,Ki=(function(){var me=Ki,Fe=ct=>()=>ct()>>>0,tt=ct=>vt=>ct(vt)>>>0;return(me=Object.assign({},me)).ub=Fe(me.ub),me.wb=tt(me.wb),me.Kb=tt(me.Kb),me.Lb=Fe(me.Lb),me.Pb=tt(me.Pb),me})(),Se.push(Ki.xb),Y=Ki,e._OrtInit=Y.Wa,e._OrtGetLastError=Y.Xa,e._OrtCreateSessionOptions=Y.Ya,e._OrtAppendExecutionProvider=Y.Za,e._OrtAddFreeDimensionOverride=Y._a,e._OrtAddSessionConfigEntry=Y.$a,e._OrtReleaseSessionOptions=Y.ab,e._OrtCreateSession=Y.bb,e._OrtReleaseSession=Y.cb,e._OrtGetInputOutputCount=Y.db,e._OrtGetInputOutputMetadata=Y.eb,e._OrtFree=Y.fb,e._OrtCreateTensor=Y.gb,e._OrtGetTensorData=Y.hb,e._OrtReleaseTensor=Y.ib,e._OrtCreateRunOptions=Y.jb,e._OrtAddRunConfigEntry=Y.kb,e._OrtReleaseRunOptions=Y.lb,e._OrtCreateBinding=Y.mb,e._OrtBindInput=Y.nb,e._OrtBindOutput=Y.ob,e._OrtClearBoundOutputs=Y.pb,e._OrtReleaseBinding=Y.qb,e._OrtRunWithBinding=Y.rb,e._OrtRun=Y.sb,e._OrtEndProfiling=Y.tb,la=Y.ub,Xu=e._free=Y.vb,qu=e._malloc=Y.wb,Oo=Y.zb,$u=Y.Ab,Yu=Y.Bb,Zu=Y.Cb,ko=Y.Db,Ku=Y.Eb,Ju=Y.Fb,ht=Y.Gb,xs=Y.Hb,Qu=Y.Ib,ot=Y.Jb,zo=Y.Kb,lt=Y.Lb,ju=Y.Mb,Vo=Y.Nb,ef=Y.Ob,tf=Y.Pb,nf=Y.yb,p=se,Ki}var H,Z=B();return e.instantiateWasm?new Promise(Y=>{e.instantiateWasm(Z,(se,me)=>{Y(F(se,me))})}):r?F(new WebAssembly.Instance(p,B()),p):(k??(k=e.locateFile?e.locateFile?e.locateFile("ort-wasm-simd-threaded.wasm",c):c+"ort-wasm-simd-threaded.wasm":new URL("/assets/ort-wasm-simd-threaded-DcHrbrbl.wasm",import.meta.url).href),H=await(async function(Y){var se=k;if(!d&&!l(se))try{var me=fetch(se,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(me,Y)}catch(Fe){f(`wasm streaming compile failed: ${Fe}`),f("falling back to ArrayBuffer instantiation")}return(async function(Fe,tt){try{var ct=await(async function(vt){if(!d)try{var on=await s(vt);return new Uint8Array(on)}catch{}if(vt==k&&d)vt=new Uint8Array(d);else{if(!a)throw"both async and sync fetching of the wasm failed";vt=a(vt)}return vt})(Fe);return await WebAssembly.instantiate(ct,tt)}catch(vt){f(`failed to asynchronously prepare wasm: ${vt}`),x(vt)}})(se,Y)})(Z),F(H.instance,H.module))}class j{constructor(H){Ye(this,"name","ExitStatus");this.message=`Program terminated with exit(${H})`,this.status=H}}var ie=F=>{F.terminate(),F.onmessage=()=>{}},ue=[],fe=0,K=null,ne=F=>{Te.length==0&&(Ie(),nt(Te[0]));var H=Te.pop();if(!H)return 6;ye.push(H),Ge[F.Qb]=H,H.Qb=F.Qb;var Z={Rb:"run",dc:F.cc,Vb:F.Vb,Qb:F.Qb};return H.postMessage(Z,F.Zb),0},ae=0,le=(F,H,...Z)=>{var Y,se=16*Z.length,me=lt(),Fe=zo(se),tt=Fe>>>3;for(Y of Z)typeof Y=="bigint"?((L(),D)[tt++>>>0]=1n,(L(),D)[tt++>>>0]=Y):((L(),D)[tt++>>>0]=0n,(L(),I)[tt++>>>0]=Y);return F=Yu(F,0,se,Fe,H),ot(me),F};function xe(F){if(r)return le(0,1,F);if(g=F,!(0<ae)){for(var H of ye)ie(H);for(H of Te)ie(H);Te=[],ye=[],Ge={},S=!0}o(0,new j(F))}function ve(F){if(r)return le(1,0,F);ge(F)}var ge=F=>{if(g=F,r)throw ve(F),"unwind";xe(F)},Te=[],ye=[],Se=[],Ge={},De=F=>{var H=F.Qb;delete Ge[H],Te.push(F),ye.splice(ye.indexOf(F),1),F.Qb=0,Zu(H)};function He(){Se.forEach(F=>F())}var nt=F=>new Promise(H=>{F.onmessage=se=>{var me=se.data;if(se=me.Rb,me.Ub&&me.Ub!=la()){var Fe=Ge[me.Ub];Fe?Fe.postMessage(me,me.Zb):f(`Internal error! Worker sent a message "${se}" to target pthread ${me.Ub}, but that thread no longer exists!`)}else se==="checkMailbox"?Tn():se==="spawnThread"?ne(me):se==="cleanupThread"?Wn(()=>{De(Ge[me.ec])}):se==="loaded"?(F.loaded=!0,H(F)):me.target==="setimmediate"?F.postMessage(me):se==="uncaughtException"?F.onerror(me.error):se==="callHandler"?e[me.$b](...me.args):se&&f(`worker sent an unknown command ${se}`)},F.onerror=se=>{throw f(`worker sent an error! ${se.filename}:${se.lineno}: ${se.message}`),se};var Z,Y=[];for(Z of[])e.propertyIsEnumerable(Z)&&Y.push(Z);F.postMessage({Rb:"load",ac:Y,fc:Ae,hc:p})});function Ie(){var F=new Worker((()=>{let H=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new H("ort.wasm.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});Te.push(F)}var Ae,te=[],we=F=>{var H=te[F];return H||(te[F]=H=nf.get(F)),H},Pe=(F,H)=>{ae=0,F=we(F)(H),0<ae?g=F:ko(F)},X=[],v=0;function y(F){var H=new $(F>>>=0);return(L(),M)[H.Sb+12>>>0]==0&&(q(H,!0),v--),Q(H,!1),X.push(H),tf(F)}var A=0,V=()=>{ht(0,0);var F=X.pop();ju(F.Wb),A=0};function q(F,H){H=H?1:0,(L(),M)[F.Sb+12>>>0]=H}function Q(F,H){H=H?1:0,(L(),M)[F.Sb+13>>>0]=H}class ${constructor(H){this.Wb=H,this.Sb=H-24}}var oe=F=>{var H=A;if(!H)return xs(0),0;var Z=new $(H);(L(),u)[Z.Sb+16>>>2>>>0]=H;var Y=(L(),u)[Z.Sb+4>>>2>>>0];if(!Y)return xs(0),H;for(var se of F){if(se===0||se===Y)break;if(ef(se,Y,Z.Sb+16))return xs(se),H}return xs(Y),H};function Re(){return oe([])}function Ce(F){return oe([F>>>0])}function Me(F,H,Z,Y){return oe([F>>>0,H>>>0,Z>>>0,Y>>>0])}var Ee=()=>{var F=X.pop();F||x("no exception to throw");var H=F.Wb;throw(L(),M)[F.Sb+13>>>0]==0&&(X.push(F),Q(F,!0),q(F,!1),v++),Vo(H),A=H};function ze(F,H,Z){var Y=new $(F>>>=0);throw H>>>=0,Z>>>=0,(L(),u)[Y.Sb+16>>>2>>>0]=0,(L(),u)[Y.Sb+4>>>2>>>0]=H,(L(),u)[Y.Sb+8>>>2>>>0]=Z,Vo(F),v++,A=F}var qe=()=>v;function it(F,H,Z,Y){return r?le(2,1,F,H,Z,Y):ee(F,H,Z,Y)}function ee(F,H,Z,Y){if(F>>>=0,H>>>=0,Z>>>=0,Y>>>=0,!globalThis.SharedArrayBuffer)return 6;var se=[];return r&&se.length===0?it(F,H,Z,Y):(F={cc:Z,Qb:F,Vb:Y,Zb:se},r?(F.Rb="spawnThread",postMessage(F,se),0):ne(F))}function Ue(F){throw A||(A=F>>>0),A}var _e=globalThis.TextDecoder&&new TextDecoder,Le=(F,H=0,Z,Y)=>{var se=H>>>=0;if(Z=se+Z,Y)Y=Z;else{for(;F[se]&&!(se>=Z);)++se;Y=se}if(16<Y-H&&F.buffer&&_e)return _e.decode(F.buffer instanceof ArrayBuffer?F.subarray(H,Y):F.slice(H,Y));for(se="";H<Y;)if(128&(Z=F[H++])){var me=63&F[H++];if((224&Z)==192)se+=String.fromCharCode((31&Z)<<6|me);else{var Fe=63&F[H++];65536>(Z=(240&Z)==224?(15&Z)<<12|me<<6|Fe:(7&Z)<<18|me<<12|Fe<<6|63&F[H++])?se+=String.fromCharCode(Z):(Z-=65536,se+=String.fromCharCode(55296|Z>>10,56320|1023&Z))}}else se+=String.fromCharCode(Z);return se},Ne=(F,H,Z)=>(F>>>=0)?Le((L(),b),F,H,Z):"";function be(F,H,Z){return r?le(3,1,F,H,Z):0}function Ve(F,H){if(r)return le(4,1,F,H)}function Be(F,H){if(r)return le(5,1,F,H)}function xt(F,H,Z){if(r)return le(6,1,F,H,Z)}function et(F,H,Z){return r?le(7,1,F,H,Z):0}function yt(F,H){if(r)return le(8,1,F,H)}function cn(F,H,Z){if(r)return le(9,1,F,H,Z)}function Bt(F,H,Z,Y){if(r)return le(10,1,F,H,Z,Y)}function Ot(F,H,Z,Y){if(r)return le(11,1,F,H,Z,Y)}function Hi(F,H,Z,Y){if(r)return le(12,1,F,H,Z,Y)}function Nt(F){if(r)return le(13,1,F)}function kt(F,H){if(r)return le(14,1,F,H)}function Wi(F,H,Z){if(r)return le(15,1,F,H,Z)}var zt=()=>x("");function Tt(F){Oo(F>>>0,!n,1,!t,131072,!1),He()}var Wn=F=>{if(!S)try{if(F(),!(0<ae))try{r?la()&&ko(g):ge(g)}catch(H){H instanceof j||H=="unwind"||o(0,H)}}catch(H){H instanceof j||H=="unwind"||o(0,H)}},Xi=!Atomics.waitAsync||((af=globalThis.navigator)==null?void 0:af.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function ci(F){F>>>=0,Xi||(Atomics.waitAsync((L(),_),F>>>2,F).value.then(Tn),F+=128,Atomics.store((L(),_),F>>>2,1))}var Tn=()=>Wn(()=>{var F=la();F&&(ci(F),Ju())});function qi(F,H){(F>>>=0)==H>>>0?setTimeout(Tn):r?postMessage({Ub:F,Rb:"checkMailbox"}):(F=Ge[F])&&F.postMessage({Rb:"checkMailbox"})}var Fn=[];function $i(F,H,Z,Y,se){for(H>>>=0,se>>>=0,Fn.length=0,Z=se>>>3,Y=se+Y>>>3;Z<Y;){var me;me=(L(),D)[Z++>>>0]?(L(),D)[Z++>>>0]:(L(),I)[Z++>>>0],Fn.push(me)}return(H?rf[H]:hg[F])(...Fn)}var Yi=()=>{ae=0};function fr(F){F>>>=0,r?postMessage({Rb:"cleanupThread",ec:F}):De(Ge[F])}function dr(F){}function pr(F,H){F=-9007199254740992>F||9007199254740992<F?NaN:Number(F),H>>>=0,F=new Date(1e3*F),(L(),_)[H>>>2>>>0]=F.getUTCSeconds(),(L(),_)[H+4>>>2>>>0]=F.getUTCMinutes(),(L(),_)[H+8>>>2>>>0]=F.getUTCHours(),(L(),_)[H+12>>>2>>>0]=F.getUTCDate(),(L(),_)[H+16>>>2>>>0]=F.getUTCMonth(),(L(),_)[H+20>>>2>>>0]=F.getUTCFullYear()-1900,(L(),_)[H+24>>>2>>>0]=F.getUTCDay(),F=(F.getTime()-Date.UTC(F.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(L(),_)[H+28>>>2>>>0]=F}var Zi=F=>F%4==0&&(F%100!=0||F%400==0),bi=[0,31,60,91,121,152,182,213,244,274,305,335],W=[0,31,59,90,120,151,181,212,243,273,304,334];function re(F,H){F=-9007199254740992>F||9007199254740992<F?NaN:Number(F),H>>>=0,F=new Date(1e3*F),(L(),_)[H>>>2>>>0]=F.getSeconds(),(L(),_)[H+4>>>2>>>0]=F.getMinutes(),(L(),_)[H+8>>>2>>>0]=F.getHours(),(L(),_)[H+12>>>2>>>0]=F.getDate(),(L(),_)[H+16>>>2>>>0]=F.getMonth(),(L(),_)[H+20>>>2>>>0]=F.getFullYear()-1900,(L(),_)[H+24>>>2>>>0]=F.getDay();var Z=(Zi(F.getFullYear())?bi:W)[F.getMonth()]+F.getDate()-1|0;(L(),_)[H+28>>>2>>>0]=Z,(L(),_)[H+36>>>2>>>0]=-60*F.getTimezoneOffset(),Z=new Date(F.getFullYear(),6,1).getTimezoneOffset();var Y=new Date(F.getFullYear(),0,1).getTimezoneOffset();F=0|(Z!=Y&&F.getTimezoneOffset()==Math.min(Y,Z)),(L(),_)[H+32>>>2>>>0]=F}function pe(F){F>>>=0;var H=new Date((L(),_)[F+20>>>2>>>0]+1900,(L(),_)[F+16>>>2>>>0],(L(),_)[F+12>>>2>>>0],(L(),_)[F+8>>>2>>>0],(L(),_)[F+4>>>2>>>0],(L(),_)[F>>>2>>>0],0),Z=(L(),_)[F+32>>>2>>>0],Y=H.getTimezoneOffset(),se=new Date(H.getFullYear(),6,1).getTimezoneOffset(),me=new Date(H.getFullYear(),0,1).getTimezoneOffset(),Fe=Math.min(me,se);return 0>Z?(L(),_)[F+32>>>2>>>0]=+(se!=me&&Fe==Y):0<Z!=(Fe==Y)&&(se=Math.max(me,se),H.setTime(H.getTime()+6e4*((0<Z?Fe:se)-Y))),(L(),_)[F+24>>>2>>>0]=H.getDay(),Z=(Zi(H.getFullYear())?bi:W)[H.getMonth()]+H.getDate()-1|0,(L(),_)[F+28>>>2>>>0]=Z,(L(),_)[F>>>2>>>0]=H.getSeconds(),(L(),_)[F+4>>>2>>>0]=H.getMinutes(),(L(),_)[F+8>>>2>>>0]=H.getHours(),(L(),_)[F+12>>>2>>>0]=H.getDate(),(L(),_)[F+16>>>2>>>0]=H.getMonth(),(L(),_)[F+20>>>2>>>0]=H.getYear(),F=H.getTime(),BigInt(isNaN(F)?-1:F/1e3)}function he(F,H,Z,Y,se,me,Fe){return r?le(16,1,F,H,Z,Y,se,me,Fe):-52}function ce(F,H,Z,Y,se,me){if(r)return le(17,1,F,H,Z,Y,se,me)}var Oe={},Ke=()=>performance.timeOrigin+performance.now();function We(F,H){if(r)return le(18,1,F,H);if(Oe[F]&&(clearTimeout(Oe[F].id),delete Oe[F]),!H)return 0;var Z=setTimeout(()=>{delete Oe[F],Wn(()=>Ku(F,performance.timeOrigin+performance.now()))},H);return Oe[F]={id:Z,oc:H},0}var $e=(F,H,Z)=>{var Y=(L(),b);if(H>>>=0,0<Z){var se=H;Z=H+Z-1;for(var me=0;me<F.length;++me){var Fe=F.codePointAt(me);if(127>=Fe){if(H>=Z)break;Y[H++>>>0]=Fe}else if(2047>=Fe){if(H+1>=Z)break;Y[H++>>>0]=192|Fe>>6,Y[H++>>>0]=128|63&Fe}else if(65535>=Fe){if(H+2>=Z)break;Y[H++>>>0]=224|Fe>>12,Y[H++>>>0]=128|Fe>>6&63,Y[H++>>>0]=128|63&Fe}else{if(H+3>=Z)break;Y[H++>>>0]=240|Fe>>18,Y[H++>>>0]=128|Fe>>12&63,Y[H++>>>0]=128|Fe>>6&63,Y[H++>>>0]=128|63&Fe,me++}}Y[H>>>0]=0,F=H-se}else F=0;return F};function Qe(F,H,Z,Y){F>>>=0,H>>>=0,Z>>>=0,Y>>>=0;var se=new Date().getFullYear(),me=new Date(se,0,1).getTimezoneOffset();se=new Date(se,6,1).getTimezoneOffset();var Fe=Math.max(me,se);(L(),u)[F>>>2>>>0]=60*Fe,(L(),_)[H>>>2>>>0]=+(me!=se),F=(H=tt=>{var ct=Math.abs(tt);return`UTC${0<=tt?"-":"+"}${String(Math.floor(ct/60)).padStart(2,"0")}${String(ct%60).padStart(2,"0")}`})(me),H=H(se),se<me?($e(F,Z,17),$e(H,Y,17)):($e(F,Y,17),$e(H,Z,17))}var at=()=>Date.now();function ft(F,H,Z){return Z>>>=0,0<=F&&3>=F?(F===0?F=Date.now():F=performance.timeOrigin+performance.now(),F=Math.round(1e6*F),(L(),D)[Z>>>3>>>0]=BigInt(F),0):28}var Je=[];function bt(F,H,Z){F>>>=0,H>>>=0,Z>>>=0,Je.length=0;for(var Y;Y=(L(),b)[H++>>>0];){var se=Y!=105;Z+=(se&=Y!=112)&&Z%8?4:0,Je.push(Y==112?(L(),u)[Z>>>2>>>0]:Y==106?(L(),D)[Z>>>3>>>0]:Y==105?(L(),_)[Z>>>2>>>0]:(L(),I)[Z>>>3>>>0]),Z+=se?8:4}return rf[F](...Je)}var Yt=()=>{};function Ft(F,H){return f(Ne(F>>>0,H>>>0))}var Ct=()=>{throw ae+=1,"unwind"};function tn(){return 4294901760}var Ze=()=>navigator.hardwareConcurrency,Ht={},pt=F=>{for(var H=0,Z=0;Z<F.length;++Z){var Y=F.charCodeAt(Z);127>=Y?H++:2047>=Y?H+=2:55296<=Y&&57343>=Y?(H+=4,++Z):H+=3}return H},an=F=>{var H;return(H=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(F))?+H[1]:(H=/:(\d+):\d+(?:\)|$)/.exec(F))?2147483648|+H[1]:0},An=F=>{for(var H of F)(F=an(H))&&(Ht[F]=H)};function ui(){var F=Error().stack.toString().split(`
`);return F[0]=="Error"&&F.shift(),An(F),Ht.Xb=an(F[3]),Ht.bc=F,Ht.Xb}function Xn(F){if(!(F=Ht[F>>>0]))return 0;var H;if(H=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(F))F=H[1];else if(H=/^\s+at (.*) \(.*\)$/.exec(F))F=H[1];else{if(!(H=/^(.+?)@/.exec(F)))return 0;F=H[1]}Xu(Xn.Yb??0),H=pt(F)+1;var Z=qu(H);return Z&&$e(F,Z,H),Xn.Yb=Z,Xn.Yb}function At(F){F>>>=0;var H=(L(),b).length;if(F<=H||4294901760<F)return!1;for(var Z=1;4>=Z;Z*=2){var Y=H*(1+.2/Z);Y=Math.min(Y,F+100663296);e:{Y=(Math.min(4294901760,65536*Math.ceil(Math.max(F,Y)/65536))-Ae.buffer.byteLength+65535)/65536|0;try{Ae.grow(Y),G();var se=1;break e}catch{}se=void 0}if(se)return!0}return!1}function Wt(F,H,Z){if(F>>>=0,H>>>=0,Ht.Xb==F)var Y=Ht.bc;else(Y=Error().stack.toString().split(`
`))[0]=="Error"&&Y.shift(),An(Y);for(var se=3;Y[se]&&an(Y[se])!=F;)++se;for(F=0;F<Z&&Y[F+se];++F)(L(),_)[H+4*F>>>2>>>0]=an(Y[F+se]);return F}var Bn,Rt={},qn=()=>{var Y;if(!Bn){var F,H={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((Y=globalThis.navigator)==null?void 0:Y.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(F in Rt)Rt[F]===void 0?delete H[F]:H[F]=Rt[F];var Z=[];for(F in H)Z.push(`${F}=${H[F]}`);Bn=Z}return Bn};function Ei(F,H){if(r)return le(19,1,F,H);F>>>=0,H>>>=0;var Z,Y=0,se=0;for(Z of qn()){var me=H+Y;(L(),u)[F+se>>>2>>>0]=me,Y+=$e(Z,me,1/0)+1,se+=4}return 0}function Ss(F,H){if(r)return le(20,1,F,H);F>>>=0,H>>>=0;var Z=qn();for(var Y of((L(),u)[F>>>2>>>0]=Z.length,F=0,Z))F+=pt(Y)+1;return(L(),u)[H>>>2>>>0]=F,0}function zu(F){return r?le(21,1,F):52}function Vu(F,H,Z,Y,se){return r?le(22,1,F,H,Z,Y,se):52}function Gu(F,H,Z,Y){return r?le(23,1,F,H,Z,Y):52}function Hu(F,H,Z,Y){return r?le(24,1,F,H,Z,Y):70}var og=[null,[],[]];function Wu(F,H,Z,Y){if(r)return le(25,1,F,H,Z,Y);H>>>=0,Z>>>=0,Y>>>=0;for(var se=0,me=0;me<Z;me++){var Fe=(L(),u)[H>>>2>>>0],tt=(L(),u)[H+4>>>2>>>0];H+=8;for(var ct=0;ct<tt;ct++){var vt=F,on=(L(),b)[Fe+ct>>>0],$n=og[vt];on===0||on===10?((vt===1?m:f)(Le($n)),$n.length=0):$n.push(on)}se+=tt}return(L(),u)[Y>>>2>>>0]=se,0}function lg(F){return F>>>0}r||(function(){for(var F=e.numThreads-1;F--;)Ie();ue.push(async()=>{var H=(async function(){if(!r)return Promise.all(Te.map(nt))})();fe++,await H,--fe==0&&K&&(H=K,K=null,H())})})(),r||(Ae=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),G()),e.wasmBinary&&(d=e.wasmBinary),e.stackSave=()=>lt(),e.stackRestore=F=>ot(F),e.stackAlloc=F=>zo(F),e.setValue=function(F,H,Z="i8"){switch(Z.endsWith("*")&&(Z="*"),Z){case"i1":case"i8":(L(),M)[F>>>0]=H;break;case"i16":(L(),P)[F>>>1>>>0]=H;break;case"i32":(L(),_)[F>>>2>>>0]=H;break;case"i64":(L(),D)[F>>>3>>>0]=BigInt(H);break;case"float":(L(),E)[F>>>2>>>0]=H;break;case"double":(L(),I)[F>>>3>>>0]=H;break;case"*":(L(),u)[F>>>2>>>0]=H;break;default:x(`invalid type for setValue: ${Z}`)}},e.getValue=function(F,H="i8"){switch(H.endsWith("*")&&(H="*"),H){case"i1":case"i8":return(L(),M)[F>>>0];case"i16":return(L(),P)[F>>>1>>>0];case"i32":return(L(),_)[F>>>2>>>0];case"i64":return(L(),D)[F>>>3>>>0];case"float":return(L(),E)[F>>>2>>>0];case"double":return(L(),I)[F>>>3>>>0];case"*":return(L(),u)[F>>>2>>>0];default:x(`invalid type for getValue: ${H}`)}},e.UTF8ToString=Ne,e.stringToUTF8=$e,e.lengthBytesUTF8=pt;var la,Xu,qu,Oo,$u,Yu,Zu,ko,Ku,Ju,ht,xs,Qu,ot,zo,lt,ju,Vo,ef,tf,nf,Ki,hg=[xe,ve,it,be,Ve,Be,xt,et,yt,cn,Bt,Ot,Hi,Nt,kt,Wi,he,ce,We,Ei,Ss,zu,Vu,Gu,Hu,Wu],rf={1042604:(F,H,Z,Y,se)=>{if(e===void 0||!e.Tb)return 1;if((F=Ne(Number(F>>>0))).startsWith("./")&&(F=F.substring(2)),!(F=e.Tb.get(F)))return 2;if(H=Number(H>>>0),Z=Number(Z>>>0),Y=Number(Y>>>0),H+Z>F.byteLength)return 3;try{let me=F.subarray(H,H+Z);switch(se){case 0:(L(),b).set(me,Y>>>0);break;case 1:e.ic?e.ic(Y,me):e.kc(Y,me);break;default:return 4}return 0}catch{return 4}},1043428:()=>typeof wasmOffsetConverter<"u"};function cg(){return typeof wasmOffsetConverter<"u"}function ug(F,H,Z,Y){var se=lt();try{return we(F)(H,Z,Y)}catch(me){if(ot(se),me!==me+0)throw me;ht(1,0)}}function fg(F,H,Z){var Y=lt();try{return we(F)(H,Z)}catch(se){if(ot(Y),se!==se+0)throw se;ht(1,0)}}function dg(F){var H=lt();try{we(F)()}catch(Z){if(ot(H),Z!==Z+0)throw Z;ht(1,0)}}function pg(F,H){var Z=lt();try{return we(F)(H)}catch(Y){if(ot(Z),Y!==Y+0)throw Y;ht(1,0)}}function mg(F,H,Z){var Y=lt();try{we(F)(H,Z)}catch(se){if(ot(Y),se!==se+0)throw se;ht(1,0)}}function gg(F,H){var Z=lt();try{we(F)(H)}catch(Y){if(ot(Z),Y!==Y+0)throw Y;ht(1,0)}}function vg(F,H,Z,Y,se,me,Fe){var tt=lt();try{return we(F)(H,Z,Y,se,me,Fe)}catch(ct){if(ot(tt),ct!==ct+0)throw ct;ht(1,0)}}function _g(F,H,Z,Y,se,me){var Fe=lt();try{we(F)(H,Z,Y,se,me)}catch(tt){if(ot(Fe),tt!==tt+0)throw tt;ht(1,0)}}function yg(F,H,Z,Y){var se=lt();try{we(F)(H,Z,Y)}catch(me){if(ot(se),me!==me+0)throw me;ht(1,0)}}function Mg(F,H,Z,Y,se){var me=lt();try{we(F)(H,Z,Y,se)}catch(Fe){if(ot(me),Fe!==Fe+0)throw Fe;ht(1,0)}}function wg(F,H,Z,Y,se,me,Fe){var tt=lt();try{we(F)(H,Z,Y,se,me,Fe)}catch(ct){if(ot(tt),ct!==ct+0)throw ct;ht(1,0)}}function Sg(F,H,Z,Y,se,me,Fe){var tt=lt();try{we(F)(H,Z,Y,se,me,Fe)}catch(ct){if(ot(tt),ct!==ct+0)throw ct;ht(1,0)}}function xg(F,H,Z,Y,se,me,Fe,tt){var ct=lt();try{we(F)(H,Z,Y,se,me,Fe,tt)}catch(vt){if(ot(ct),vt!==vt+0)throw vt;ht(1,0)}}function bg(F,H,Z,Y,se){var me=lt();try{return we(F)(H,Z,Y,se)}catch(Fe){if(ot(me),Fe!==Fe+0)throw Fe;ht(1,0)}}function Eg(F,H,Z){var Y=lt();try{return we(F)(H,Z)}catch(se){if(ot(Y),se!==se+0)throw se;ht(1,0)}}function Tg(F,H,Z,Y,se,me,Fe,tt){var ct=lt();try{we(F)(H,Z,Y,se,me,Fe,tt)}catch(vt){if(ot(ct),vt!==vt+0)throw vt;ht(1,0)}}function Ag(F,H,Z,Y,se,me,Fe,tt,ct,vt,on,$n){var Ti=lt();try{we(F)(H,Z,Y,se,me,Fe,tt,ct,vt,on,$n)}catch(Ai){if(ot(Ti),Ai!==Ai+0)throw Ai;ht(1,0)}}function Rg(F,H,Z){var Y=lt();try{return we(F)(H,Z)}catch(se){if(ot(Y),se!==se+0)throw se;return ht(1,0),0n}}function Cg(F,H,Z,Y,se,me,Fe,tt,ct){var vt=lt();try{we(F)(H,Z,Y,se,me,Fe,tt,ct)}catch(on){if(ot(vt),on!==on+0)throw on;ht(1,0)}}function Ig(F){var H=lt();try{return we(F)()}catch(Z){if(ot(H),Z!==Z+0)throw Z;ht(1,0)}}function Pg(F,H){var Z=lt();try{return we(F)(H)}catch(Y){if(ot(Z),Y!==Y+0)throw Y;return ht(1,0),0n}}function Lg(F,H,Z,Y){var se=lt();try{return we(F)(H,Z,Y)}catch(me){if(ot(se),me!==me+0)throw me;ht(1,0)}}function Ug(F){var H=lt();try{return we(F)()}catch(Z){if(ot(H),Z!==Z+0)throw Z;return ht(1,0),0n}}function Dg(F,H,Z,Y){var se=lt();try{return we(F)(H,Z,Y)}catch(me){if(ot(se),me!==me+0)throw me;ht(1,0)}}function Ng(F,H,Z,Y,se){var me=lt();try{return we(F)(H,Z,Y,se)}catch(Fe){if(ot(me),Fe!==Fe+0)throw Fe;ht(1,0)}}function Fg(F,H,Z,Y,se,me){var Fe=lt();try{return we(F)(H,Z,Y,se,me)}catch(tt){if(ot(Fe),tt!==tt+0)throw tt;ht(1,0)}}function Bg(F,H,Z,Y,se,me){var Fe=lt();try{return we(F)(H,Z,Y,se,me)}catch(tt){if(ot(Fe),tt!==tt+0)throw tt;ht(1,0)}}function Og(F,H,Z,Y,se,me){var Fe=lt();try{return we(F)(H,Z,Y,se,me)}catch(tt){if(ot(Fe),tt!==tt+0)throw tt;ht(1,0)}}function kg(F,H,Z,Y,se,me,Fe,tt){var ct=lt();try{return we(F)(H,Z,Y,se,me,Fe,tt)}catch(vt){if(ot(ct),vt!==vt+0)throw vt;ht(1,0)}}function zg(F,H,Z,Y,se){var me=lt();try{return we(F)(H,Z,Y,se)}catch(Fe){if(ot(me),Fe!==Fe+0)throw Fe;return ht(1,0),0n}}function Vg(F,H,Z,Y){var se=lt();try{return we(F)(H,Z,Y)}catch(me){if(ot(se),me!==me+0)throw me;ht(1,0)}}function Gg(F,H,Z,Y){var se=lt();try{return we(F)(H,Z,Y)}catch(me){if(ot(se),me!==me+0)throw me;ht(1,0)}}function Hg(F,H,Z,Y,se,me,Fe,tt,ct,vt,on,$n){var Ti=lt();try{return we(F)(H,Z,Y,se,me,Fe,tt,ct,vt,on,$n)}catch(Ai){if(ot(Ti),Ai!==Ai+0)throw Ai;ht(1,0)}}function Wg(F,H,Z,Y,se,me,Fe,tt,ct,vt,on){var $n=lt();try{we(F)(H,Z,Y,se,me,Fe,tt,ct,vt,on)}catch(Ti){if(ot($n),Ti!==Ti+0)throw Ti;ht(1,0)}}function Xg(F,H,Z,Y,se,me,Fe,tt,ct,vt,on,$n,Ti,Ai,Zg,Kg){var Jg=lt();try{we(F)(H,Z,Y,se,me,Fe,tt,ct,vt,on,$n,Ti,Ai,Zg,Kg)}catch(Go){if(ot(Jg),Go!==Go+0)throw Go;ht(1,0)}}function qg(F,H,Z){var Y=lt();try{return we(F)(H,Z)}catch(se){if(ot(Y),se!==se+0)throw se;ht(1,0)}}function $g(F,H,Z){var Y=lt();try{return we(F)(H,Z)}catch(se){if(ot(Y),se!==se+0)throw se;ht(1,0)}}function Yg(F,H,Z,Y){var se=lt();try{we(F)(H,Z,Y)}catch(me){if(ot(se),me!==me+0)throw me;ht(1,0)}}function ha(){if(0<fe)K=ha;else if(r)w==null||w(e),O();else{for(var F=ue;0<F.length;)F.shift()(e);0<fe?K=ha:(e.calledRun=!0,S||(O(),w==null||w(e)))}}return r||(Ki=await J(),ha()),e.PTR_SIZE=4,z?e:new Promise((F,H)=>{w=F,T=H})}var Am,Dp,Zb=St(()=>{"use strict";var i,e;Am=Up,Dp=(e=(i=globalThis.self)==null?void 0:i.name)==null?void 0:e.startsWith("em-pthread"),Dp&&Up()}),bh,Lc,Np,In,Rm,qa,Fp,Bp,Eh,Op,Th,Cm,Ah,Im,du=St(()=>{"use strict";fu(),bh=typeof location>"u"?void 0:location.origin,Lc=import.meta.url>"file:"&&import.meta.url<"file;",Np=()=>{if(Lc){let i=URL;return new URL(new i("ort.wasm.bundle.min.mjs",import.meta.url).href,bh).href}return import.meta.url},In=Np(),Rm=()=>{if(In&&!In.startsWith("blob:"))return In.substring(0,In.lastIndexOf("/")+1)},qa=(i,e)=>{try{let t=e??In;return(t?new URL(i,t):new URL(i)).origin===bh}catch{return!1}},Fp=(i,e)=>{let t=e??In;try{return(t?new URL(i,t):new URL(i)).href}catch{return}},Bp=(i,e)=>`${e??"./"}${i}`,Eh=async i=>{let e=await(await fetch(i,{credentials:"same-origin"})).blob();return URL.createObjectURL(e)},Op=async i=>(await import(i)).default,Th=(Yb(),Ic(bm)).default,Cm=async()=>{if(!In)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(qa(In))return[void 0,Th()];let i=await Eh(In);return[i,Th(i)]},Ah=(Zb(),Ic(Tm)).default,Im=async(i,e,t,n)=>{let r=Ah&&!(i||e);if(r)if(In)r=qa(In)||n&&!t;else if(n&&!t)r=!0;else throw new Error("cannot determine the script source URL.");if(r)return[void 0,Ah];{let s="ort-wasm-simd-threaded.mjs",a=i??Fp(s,e),o=t&&a&&!qa(a,e),h=o?await Eh(a):a??Bp(s,e);return[o?h:void 0,await Op(h)]}}}),Rh,$a,Os,Ch,kp,zp,Vp,pu,Gt,Ms=St(()=>{"use strict";du(),$a=!1,Os=!1,Ch=!1,kp=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},zp=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Vp=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},pu=async i=>{if($a)return Promise.resolve();if(Os)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Ch)throw new Error("previous call to 'initializeWebAssembly()' failed.");Os=!0;let e=i.initTimeout,t=i.numThreads;if(i.simd!==!1){if(i.simd==="relaxed"){if(!Vp())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!zp())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let n=kp();t>1&&!n&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+t+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),i.numThreads=t=1);let r=i.wasmPaths,s=typeof r=="string"?r:void 0,a=r==null?void 0:r.mjs,o=(a==null?void 0:a.href)??a,h=r==null?void 0:r.wasm,c=(h==null?void 0:h.href)??h,d=i.wasmBinary,[p,g]=await Im(o,s,t>1,!!d||!!c),w=!1,T=[];if(e>0&&T.push(new Promise(N=>{setTimeout(()=>{w=!0,N()},e)})),T.push(new Promise((N,C)=>{let R={numThreads:t};if(d)R.wasmBinary=d,R.locateFile=m=>m;else if(c||s)R.locateFile=m=>c??s+m;else if(o&&o.indexOf("blob:")!==0)R.locateFile=m=>new URL(m,o).href;else if(p){let m=Rm();m&&(R.locateFile=f=>m+f)}g(R).then(m=>{Os=!1,$a=!0,Rh=m,N(),p&&URL.revokeObjectURL(p)},m=>{Os=!1,Ch=!0,C(m)})})),await Promise.race(T),w)throw new Error(`WebAssembly backend initializing failed due to timeout: ${e}ms`)},Gt=()=>{if($a&&Rh)return Rh;throw new Error("WebAssembly is not initialized yet.")}}),Jn,Mo,Ut,mu=St(()=>{"use strict";Ms(),Jn=(i,e)=>{let t=Gt(),n=t.lengthBytesUTF8(i)+1,r=t._malloc(n);return t.stringToUTF8(i,r,n),e.push(r),r},Mo=(i,e,t,n)=>{if(typeof i=="object"&&i!==null){if(t.has(i))throw new Error("Circular reference in options");t.add(i)}Object.entries(i).forEach(([r,s])=>{let a=e?e+r:r;if(typeof s=="object")Mo(s,a+".",t,n);else if(typeof s=="string"||typeof s=="number")n(a,s.toString());else if(typeof s=="boolean")n(a,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},Ut=i=>{let e=Gt(),t=e.stackSave();try{let n=e.PTR_SIZE,r=e.stackAlloc(2*n);e._OrtGetLastError(r,r+n);let s=Number(e.getValue(r,n===4?"i32":"i64")),a=e.getValue(r+n,"*"),o=a?e.UTF8ToString(a):"";throw new Error(`${i} ERROR_CODE: ${s}, ERROR_MESSAGE: ${o}`)}finally{e.stackRestore(t)}}}),Pm,Kb=St(()=>{"use strict";Ms(),mu(),Pm=i=>{let e=Gt(),t=0,n=[],r=i||{};try{if((i==null?void 0:i.logSeverityLevel)===void 0)r.logSeverityLevel=2;else if(typeof i.logSeverityLevel!="number"||!Number.isInteger(i.logSeverityLevel)||i.logSeverityLevel<0||i.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${i.logSeverityLevel}`);if((i==null?void 0:i.logVerbosityLevel)===void 0)r.logVerbosityLevel=0;else if(typeof i.logVerbosityLevel!="number"||!Number.isInteger(i.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${i.logVerbosityLevel}`);(i==null?void 0:i.terminate)===void 0&&(r.terminate=!1);let s=0;return(i==null?void 0:i.tag)!==void 0&&(s=Jn(i.tag,n)),t=e._OrtCreateRunOptions(r.logSeverityLevel,r.logVerbosityLevel,!!r.terminate,s),t===0&&Ut("Can't create run options."),(i==null?void 0:i.extra)!==void 0&&Mo(i.extra,"",new WeakSet,(a,o)=>{let h=Jn(a,n),c=Jn(o,n);e._OrtAddRunConfigEntry(t,h,c)!==0&&Ut(`Can't set a run config entry: ${a} - ${o}.`)}),[t,n]}catch(s){throw t!==0&&e._OrtReleaseRunOptions(t),n.forEach(a=>e._free(a)),s}}}),Gp,Hp,Wp,Mr,Xp,Lm,Jb=St(()=>{"use strict";Ms(),mu(),Gp=i=>{switch(i){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${i}`)}},Hp=i=>{switch(i){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${i}`)}},Wp=i=>{i.extra||(i.extra={}),i.extra.session||(i.extra.session={});let e=i.extra.session;e.use_ort_model_bytes_directly||(e.use_ort_model_bytes_directly="1"),i.executionProviders&&i.executionProviders.some(t=>(typeof t=="string"?t:t.name)==="webgpu")&&(i.enableMemPattern=!1)},Mr=(i,e,t,n)=>{let r=Jn(e,n),s=Jn(t,n);Gt()._OrtAddSessionConfigEntry(i,r,s)!==0&&Ut(`Can't set a session config entry: ${e} - ${t}.`)},Xp=async(i,e,t)=>{let n=e.executionProviders;for(let r of n){let s=typeof r=="string"?r:r.name,a=[];switch(s){case"webnn":if(s="WEBNN",Mr(i,"session.disable_quant_qdq","1",t),Mr(i,"session.disable_qdq_constant_folding","1",t),typeof r!="string"){let p=r==null?void 0:r.deviceType;p&&Mr(i,"deviceType",p,t)}break;case"webgpu":if(s="JS",typeof r!="string"){let p=r;if(p!=null&&p.preferredLayout){if(p.preferredLayout!=="NCHW"&&p.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${p.preferredLayout}`);Mr(i,"preferredLayout",p.preferredLayout,t)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let o=Jn(s,t),h=a.length,c=0,d=0;if(h>0){c=Gt()._malloc(h*Gt().PTR_SIZE),t.push(c),d=Gt()._malloc(h*Gt().PTR_SIZE),t.push(d);for(let p=0;p<h;p++)Gt().setValue(c+p*Gt().PTR_SIZE,a[p][0],"*"),Gt().setValue(d+p*Gt().PTR_SIZE,a[p][1],"*")}await Gt()._OrtAppendExecutionProvider(i,o,c,d,h)!==0&&Ut(`Can't append execution provider: ${s}.`)}},Lm=async i=>{let e=Gt(),t=0,n=[],r=i||{};Wp(r);try{let s=Gp(r.graphOptimizationLevel??"all"),a=Hp(r.executionMode??"sequential"),o=typeof r.logId=="string"?Jn(r.logId,n):0,h=r.logSeverityLevel??2;if(!Number.isInteger(h)||h<0||h>4)throw new Error(`log severity level is not valid: ${h}`);let c=r.logVerbosityLevel??0;if(!Number.isInteger(c)||c<0||c>4)throw new Error(`log verbosity level is not valid: ${c}`);let d=typeof r.optimizedModelFilePath=="string"?Jn(r.optimizedModelFilePath,n):0;if(t=e._OrtCreateSessionOptions(s,!!r.enableCpuMemArena,!!r.enableMemPattern,a,!!r.enableProfiling,0,o,h,c,d),t===0&&Ut("Can't create session options."),r.executionProviders&&await Xp(t,r,n),r.enableGraphCapture!==void 0){if(typeof r.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${r.enableGraphCapture}`);Mr(t,"enableGraphCapture",r.enableGraphCapture.toString(),n)}if(r.freeDimensionOverrides)for(let[p,g]of Object.entries(r.freeDimensionOverrides)){if(typeof p!="string")throw new Error(`free dimension override name must be a string: ${p}`);if(typeof g!="number"||!Number.isInteger(g)||g<0)throw new Error(`free dimension override value must be a non-negative integer: ${g}`);let w=Jn(p,n);e._OrtAddFreeDimensionOverride(t,w,g)!==0&&Ut(`Can't set a free dimension override: ${p} - ${g}.`)}return r.extra!==void 0&&Mo(r.extra,"",new WeakSet,(p,g)=>{Mr(t,p,g,n)}),[t,n]}catch(s){throw t!==0&&e._OrtReleaseSessionOptions(t)!==0&&Ut("Can't release session options."),n.forEach(a=>e._free(a)),s}}}),jr,ao,es,Um,Dm,gu,vu,Nm,Fm=St(()=>{"use strict";jr=i=>{switch(i){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${i}`)}},ao=i=>{switch(i){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${i}`)}},es=(i,e)=>{let t=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][i],n=typeof e=="number"?e:e.reduce((r,s)=>r*s,1);return t>0?Math.ceil(n*t):void 0},Um=i=>{switch(i){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${i}`)}},Dm=i=>{switch(i){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${i}`)}},gu=i=>i==="float32"||i==="float16"||i==="int32"||i==="int64"||i==="uint32"||i==="uint8"||i==="bool"||i==="uint4"||i==="int4",vu=i=>i==="float32"||i==="float16"||i==="int32"||i==="int64"||i==="uint32"||i==="uint64"||i==="int8"||i==="uint8"||i==="bool"||i==="uint4"||i==="int4",Nm=i=>{switch(i){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${i}`)}}}),_u,Bm=St(()=>{"use strict";fu(),_u=async i=>{if(typeof i=="string"){let e=await fetch(i);if(!e.ok)throw new Error(`failed to load external data file: ${i}`);let t=e.headers.get("Content-Length"),n=t?parseInt(t,10):0;if(n<1073741824)return new Uint8Array(await e.arrayBuffer());{if(!e.body)throw new Error(`failed to load external data file: ${i}, no response body.`);let r=e.body.getReader(),s;try{s=new ArrayBuffer(n)}catch(o){if(o instanceof RangeError){let h=Math.ceil(n/65536);s=new WebAssembly.Memory({initial:h,maximum:h}).buffer}else throw o}let a=0;for(;;){let{done:o,value:h}=await r.read();if(o)break;let c=h.byteLength;new Uint8Array(s,a,c).set(h),a+=c}return new Uint8Array(s,0,n)}}else return i instanceof Blob?new Uint8Array(await i.arrayBuffer()):i instanceof Uint8Array?i:new Uint8Array(i)}}),qp,yu,Mu,wr,$p,Ih,wo,wu,Su,Ph,xu,bu,Eu,Om=St(()=>{"use strict";Ur(),Kb(),Jb(),Fm(),Ms(),mu(),Bm(),qp=(i,e)=>{Gt()._OrtInit(i,e)!==0&&Ut("Can't initialize onnxruntime.")},yu=async i=>{qp(i.wasm.numThreads,Dm(i.logLevel))},Mu=async(i,e)=>{var n,r;(r=(n=Gt()).asyncInit)==null||r.call(n);let t=i.webgpu.adapter;if(e==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(t){if(typeof t.limits!="object"||typeof t.features!="object"||typeof t.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let s=i.webgpu.powerPreference;if(s!==void 0&&s!=="low-power"&&s!=="high-performance")throw new Error(`Invalid powerPreference setting: "${s}"`);let a=i.webgpu.forceFallbackAdapter;if(a!==void 0&&typeof a!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(t=await navigator.gpu.requestAdapter({powerPreference:s,forceFallbackAdapter:a}),!t)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(e==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment")},wr=new Map,$p=i=>{let e=Gt(),t=e.stackSave();try{let n=e.PTR_SIZE,r=e.stackAlloc(2*n);e._OrtGetInputOutputCount(i,r,r+n)!==0&&Ut("Can't get session input/output count.");let s=n===4?"i32":"i64";return[Number(e.getValue(r,s)),Number(e.getValue(r+n,s))]}finally{e.stackRestore(t)}},Ih=(i,e)=>{let t=Gt(),n=t.stackSave(),r=0;try{let s=t.PTR_SIZE,a=t.stackAlloc(2*s);t._OrtGetInputOutputMetadata(i,e,a,a+s)!==0&&Ut("Can't get session input/output metadata.");let o=Number(t.getValue(a,"*"));r=Number(t.getValue(a+s,"*"));let h=t.HEAP32[r/4];if(h===0)return[o,0];let c=t.HEAPU32[r/4+1],d=[];for(let p=0;p<c;p++){let g=Number(t.getValue(r+8+p*s,"*"));d.push(g!==0?t.UTF8ToString(g):Number(t.getValue(r+8+(p+c)*s,"*")))}return[o,h,d]}finally{t.stackRestore(n),r!==0&&t._OrtFree(r)}},wo=i=>{let e=Gt(),t=e._malloc(i.byteLength);if(t===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${i.byteLength}.`);return e.HEAPU8.set(i,t),[t,i.byteLength]},wu=async(i,e)=>{var p,g,w;let t,n,r=Gt();Array.isArray(i)?[t,n]=i:i.buffer===r.HEAPU8.buffer?[t,n]=[i.byteOffset,i.byteLength]:[t,n]=wo(i);let s=0,a=0,o=0,h=[],c=[],d=[];try{if([a,h]=await Lm(e),(e==null?void 0:e.externalData)&&r.mountExternalData){let L=[];for(let U of e.externalData){let M=typeof U=="string"?U:U.path,b=typeof U=="string"?U:U.data;L.push(_u(b).then(P=>{r.mountExternalData(M,P)}))}await Promise.all(L)}for(let L of(e==null?void 0:e.executionProviders)??[])if((typeof L=="string"?L:L.name)==="webnn"){if(r.shouldTransferToMLTensor=!1,typeof L!="string"){let U=L,M=U==null?void 0:U.context,b=U==null?void 0:U.gpuDevice,P=U==null?void 0:U.deviceType,_=U==null?void 0:U.powerPreference;M?r.currentContext=M:b?r.currentContext=await r.webnnCreateMLContext(b):r.currentContext=await r.webnnCreateMLContext({deviceType:P,powerPreference:_})}else r.currentContext=await r.webnnCreateMLContext();break}s=await r._OrtCreateSession(t,n,a),(p=r.webgpuOnCreateSession)==null||p.call(r,s),s===0&&Ut("Can't create a session."),(g=r.jsepOnCreateSession)==null||g.call(r),r.currentContext&&(r.webnnRegisterMLContext(s,r.currentContext),r.currentContext=void 0,r.shouldTransferToMLTensor=!0);let[T,N]=$p(s),C=!!(e!=null&&e.enableGraphCapture),R=[],m=[],f=[],S=[],l=[];for(let L=0;L<T;L++){let[U,M,b]=Ih(s,L);U===0&&Ut("Can't get an input name."),c.push(U);let P=r.UTF8ToString(U);R.push(P),f.push(M===0?{name:P,isTensor:!1}:{name:P,isTensor:!0,type:ao(M),shape:b})}for(let L=0;L<N;L++){let[U,M,b]=Ih(s,L+T);U===0&&Ut("Can't get an output name."),d.push(U);let P=r.UTF8ToString(U);m.push(P),S.push(M===0?{name:P,isTensor:!1}:{name:P,isTensor:!0,type:ao(M),shape:b})}return wr.set(s,[s,c,d,null,C,!1]),[s,R,m,f,S]}catch(T){throw c.forEach(N=>r._OrtFree(N)),d.forEach(N=>r._OrtFree(N)),o!==0&&r._OrtReleaseBinding(o)!==0&&Ut("Can't release IO binding."),s!==0&&r._OrtReleaseSession(s)!==0&&Ut("Can't release session."),T}finally{r._free(t),a!==0&&r._OrtReleaseSessionOptions(a)!==0&&Ut("Can't release session options."),h.forEach(T=>r._free(T)),(w=r.unmountExternalData)==null||w.call(r)}},Su=i=>{var h,c,d;let e=Gt(),t=wr.get(i);if(!t)throw new Error(`cannot release session. invalid session id: ${i}`);let[n,r,s,a,o]=t;a&&(o&&e._OrtClearBoundOutputs(a.handle)!==0&&Ut("Can't clear bound outputs."),e._OrtReleaseBinding(a.handle)!==0&&Ut("Can't release IO binding.")),(h=e.jsepOnReleaseSession)==null||h.call(e,i),(c=e.webnnOnReleaseSession)==null||c.call(e,i),(d=e.webgpuOnReleaseSession)==null||d.call(e,i),r.forEach(p=>e._OrtFree(p)),s.forEach(p=>e._OrtFree(p)),e._OrtReleaseSession(n)!==0&&Ut("Can't release session."),wr.delete(i)},Ph=async(i,e,t,n,r,s,a=!1)=>{if(!i){e.push(0);return}let o=Gt(),h=o.PTR_SIZE,c=i[0],d=i[1],p=i[3],g=p,w,T;if(c==="string"&&(p==="gpu-buffer"||p==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(a&&p!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(p==="gpu-buffer"){let R=i[2].gpuBuffer;T=es(jr(c),d);{let m=o.jsepRegisterBuffer;if(!m)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');w=m(n,s,R,T)}}else if(p==="ml-tensor"){let R=i[2].mlTensor;T=es(jr(c),d);let m=o.webnnRegisterMLTensor;if(!m)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');w=m(n,R,jr(c),d)}else{let R=i[2];if(Array.isArray(R)){T=h*R.length,w=o._malloc(T),t.push(w);for(let m=0;m<R.length;m++){if(typeof R[m]!="string")throw new TypeError(`tensor data at index ${m} is not a string`);o.setValue(w+m*h,Jn(R[m],t),"*")}}else{let m=o.webnnIsGraphInput,f=o.webnnIsGraphOutput;if(c!=="string"&&m&&f){let S=o.UTF8ToString(r);if(m(n,S)||f(n,S)){let l=jr(c);T=es(l,d),g="ml-tensor";let L=o.webnnCreateTemporaryTensor,U=o.webnnUploadTensor;if(!L||!U)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let M=await L(n,l,d);U(M,new Uint8Array(R.buffer,R.byteOffset,R.byteLength)),w=M}else T=R.byteLength,w=o._malloc(T),t.push(w),o.HEAPU8.set(new Uint8Array(R.buffer,R.byteOffset,T),w)}else T=R.byteLength,w=o._malloc(T),t.push(w),o.HEAPU8.set(new Uint8Array(R.buffer,R.byteOffset,T),w)}}let N=o.stackSave(),C=o.stackAlloc(4*d.length);try{d.forEach((m,f)=>o.setValue(C+f*h,m,h===4?"i32":"i64"));let R=o._OrtCreateTensor(jr(c),w,T,C,d.length,Nm(g));R===0&&Ut(`Can't create tensor for input/output. session=${n}, index=${s}.`),e.push(R)}finally{o.stackRestore(N)}},xu=async(i,e,t,n,r,s)=>{var u,E,I;let a=Gt(),o=a.PTR_SIZE,h=wr.get(i);if(!h)throw new Error(`cannot run inference. invalid session id: ${i}`);let c=h[0],d=h[1],p=h[2],g=h[3],w=h[4],T=h[5],N=e.length,C=n.length,R=0,m=[],f=[],S=[],l=[],L=[],U=a.stackSave(),M=a.stackAlloc(N*o),b=a.stackAlloc(N*o),P=a.stackAlloc(C*o),_=a.stackAlloc(C*o);try{[R,m]=Pm(s),ds("wasm prepareInputOutputTensor");for(let G=0;G<N;G++)await Ph(t[G],f,l,i,d[e[G]],e[G],w);for(let G=0;G<C;G++)await Ph(r[G],S,l,i,p[n[G]],N+n[G],w);ps("wasm prepareInputOutputTensor");for(let G=0;G<N;G++)a.setValue(M+G*o,f[G],"*"),a.setValue(b+G*o,d[e[G]],"*");for(let G=0;G<C;G++)a.setValue(P+G*o,S[G],"*"),a.setValue(_+G*o,p[n[G]],"*");(u=a.jsepOnRunStart)==null||u.call(a,c),(E=a.webnnOnRunStart)==null||E.call(a,c);let D;D=await a._OrtRun(c,b,M,N,_,C,P,R),D!==0&&Ut("failed to call OrtRun().");let k=[],z=[];ds("wasm ProcessOutputTensor");for(let G=0;G<C;G++){let O=Number(a.getValue(P+G*o,"*"));if(O===S[G]||L.includes(S[G])){k.push(r[G]),O!==S[G]&&a._OrtReleaseTensor(O)!==0&&Ut("Can't release tensor.");continue}let x=a.stackSave(),B=a.stackAlloc(4*o),J=!1,j,ie=0;try{a._OrtGetTensorData(O,B,B+o,B+2*o,B+3*o)!==0&&Ut(`Can't access output tensor data on index ${G}.`);let ue=o===4?"i32":"i64",fe=Number(a.getValue(B,ue));ie=a.getValue(B+o,"*");let K=a.getValue(B+o*2,"*"),ne=Number(a.getValue(B+o*3,ue)),ae=[];for(let ve=0;ve<ne;ve++)ae.push(Number(a.getValue(K+ve*o,ue)));a._OrtFree(K)!==0&&Ut("Can't free memory for tensor dims.");let le=ae.reduce((ve,ge)=>ve*ge,1);j=ao(fe);let xe=g==null?void 0:g.outputPreferredLocations[n[G]];if(j==="string"){if(xe==="gpu-buffer"||xe==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let ve=[];for(let ge=0;ge<le;ge++){let Te=a.getValue(ie+ge*o,"*"),ye=a.getValue(ie+(ge+1)*o,"*"),Se=ge===le-1?void 0:ye-Te;ve.push(a.UTF8ToString(Te,Se))}k.push([j,ae,ve,"cpu"])}else if(xe==="gpu-buffer"&&le>0){let ve=a.jsepGetBuffer;if(!ve)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ge=ve(ie),Te=es(fe,le);if(Te===void 0||!gu(j))throw new Error(`Unsupported data type: ${j}`);J=!0,k.push([j,ae,{gpuBuffer:ge,download:a.jsepCreateDownloader(ge,Te,j),dispose:()=>{a._OrtReleaseTensor(O)!==0&&Ut("Can't release tensor.")}},"gpu-buffer"])}else if(xe==="ml-tensor"&&le>0){let ve=a.webnnEnsureTensor,ge=a.webnnIsGraphInputOutputTypeSupported;if(!ve||!ge)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(es(fe,le)===void 0||!vu(j))throw new Error(`Unsupported data type: ${j}`);if(!ge(i,j,!1))throw new Error(`preferredLocation "ml-tensor" for ${j} output is not supported by current WebNN Context.`);let Te=await ve(i,ie,fe,ae,!1);J=!0,k.push([j,ae,{mlTensor:Te,download:a.webnnCreateMLTensorDownloader(ie,j),dispose:()=>{a.webnnReleaseTensorId(ie),a._OrtReleaseTensor(O)}},"ml-tensor"])}else if(xe==="ml-tensor-cpu-output"&&le>0){let ve=a.webnnCreateMLTensorDownloader(ie,j)(),ge=k.length;J=!0,z.push((async()=>{let Te=[ge,await ve];return a.webnnReleaseTensorId(ie),a._OrtReleaseTensor(O),Te})()),k.push([j,ae,[],"cpu"])}else{let ve=Um(j),ge=new ve(le);new Uint8Array(ge.buffer,ge.byteOffset,ge.byteLength).set(a.HEAPU8.subarray(ie,ie+ge.byteLength)),k.push([j,ae,ge,"cpu"])}}finally{a.stackRestore(x),j==="string"&&ie&&a._free(ie),J||a._OrtReleaseTensor(O)}}g&&!w&&(a._OrtClearBoundOutputs(g.handle)!==0&&Ut("Can't clear bound outputs."),wr.set(i,[c,d,p,g,w,!1]));for(let[G,O]of await Promise.all(z))k[G][2]=O;return ps("wasm ProcessOutputTensor"),k}finally{(I=a.webnnOnRunEnd)==null||I.call(a,c),a.stackRestore(U),f.forEach(D=>a._OrtReleaseTensor(D)),S.forEach(D=>a._OrtReleaseTensor(D)),l.forEach(D=>a._free(D)),R!==0&&a._OrtReleaseRunOptions(R),m.forEach(D=>a._free(D))}},bu=i=>{let e=Gt(),t=wr.get(i);if(!t)throw new Error("invalid session id");let n=t[0],r=e._OrtEndProfiling(n);r===0&&Ut("Can't get an profile file name."),e._OrtFree(r)},Eu=i=>{let e=[];for(let t of i){let n=t[2];!Array.isArray(n)&&"buffer"in n&&e.push(n.buffer)}return e}}),ir,Sn,Zr,ks,zs,Ya,Lh,Za,Sr,xr,Yp,km,zm,Vm,Gm,Hm,Wm,Xm,qm=St(()=>{"use strict";Ur(),Om(),Ms(),du(),ir=()=>!!Vt.wasm.proxy&&typeof document<"u",Zr=!1,ks=!1,zs=!1,Za=new Map,Sr=(i,e)=>{let t=Za.get(i);t?t.push(e):Za.set(i,[e])},xr=()=>{if(Zr||!ks||zs||!Sn)throw new Error("worker not ready")},Yp=i=>{switch(i.data.type){case"init-wasm":Zr=!1,i.data.err?(zs=!0,Lh[1](i.data.err)):(ks=!0,Lh[0]()),Ya&&(URL.revokeObjectURL(Ya),Ya=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let e=Za.get(i.data.type);i.data.err?e.shift()[1](i.data.err):e.shift()[0](i.data.out);break}default:}},km=async()=>{if(!ks){if(Zr)throw new Error("multiple calls to 'initWasm()' detected.");if(zs)throw new Error("previous call to 'initWasm()' failed.");if(Zr=!0,ir())return new Promise((i,e)=>{Sn==null||Sn.terminate(),Cm().then(([t,n])=>{try{Sn=n,Sn.onerror=s=>e(s),Sn.onmessage=Yp,Lh=[i,e];let r={type:"init-wasm",in:Vt};!r.in.wasm.wasmPaths&&(t||Lc)&&(r.in.wasm.wasmPaths={wasm:new URL("/assets/ort-wasm-simd-threaded-DcHrbrbl.wasm",import.meta.url).href}),Sn.postMessage(r),Ya=t}catch(r){e(r)}},e)});try{await pu(Vt.wasm),await yu(Vt),ks=!0}catch(i){throw zs=!0,i}finally{Zr=!1}}},zm=async i=>{if(ir())return xr(),new Promise((e,t)=>{Sr("init-ep",[e,t]);let n={type:"init-ep",in:{epName:i,env:Vt}};Sn.postMessage(n)});await Mu(Vt,i)},Vm=async i=>ir()?(xr(),new Promise((e,t)=>{Sr("copy-from",[e,t]);let n={type:"copy-from",in:{buffer:i}};Sn.postMessage(n,[i.buffer])})):wo(i),Gm=async(i,e)=>{if(ir()){if(e!=null&&e.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return xr(),new Promise((t,n)=>{Sr("create",[t,n]);let r={type:"create",in:{model:i,options:{...e}}},s=[];i instanceof Uint8Array&&s.push(i.buffer),Sn.postMessage(r,s)})}else return wu(i,e)},Hm=async i=>{if(ir())return xr(),new Promise((e,t)=>{Sr("release",[e,t]);let n={type:"release",in:i};Sn.postMessage(n)});Su(i)},Wm=async(i,e,t,n,r,s)=>{if(ir()){if(t.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(r.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return xr(),new Promise((a,o)=>{Sr("run",[a,o]);let h=t,c={type:"run",in:{sessionId:i,inputIndices:e,inputs:h,outputIndices:n,options:s}};Sn.postMessage(c,Eu(h))})}else return xu(i,e,t,n,r,s)},Xm=async i=>{if(ir())return xr(),new Promise((e,t)=>{Sr("end-profiling",[e,t]);let n={type:"end-profiling",in:i};Sn.postMessage(n)});bu(i)}}),Uh,Zp,$m,Qb=St(()=>{"use strict";Ur(),qm(),Fm(),fu(),Bm(),Uh=(i,e)=>{switch(i.location){case"cpu":return[i.type,i.dims,i.data,"cpu"];case"gpu-buffer":return[i.type,i.dims,{gpuBuffer:i.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[i.type,i.dims,{mlTensor:i.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${i.location} for ${e()}`)}},Zp=i=>{switch(i[3]){case"cpu":return new Un(i[0],i[2],i[1]);case"gpu-buffer":{let e=i[0];if(!gu(e))throw new Error(`not supported data type: ${e} for deserializing GPU tensor`);let{gpuBuffer:t,download:n,dispose:r}=i[2];return Un.fromGpuBuffer(t,{dataType:e,dims:i[1],download:n,dispose:r})}case"ml-tensor":{let e=i[0];if(!vu(e))throw new Error(`not supported data type: ${e} for deserializing MLTensor tensor`);let{mlTensor:t,download:n,dispose:r}=i[2];return Un.fromMLTensor(t,{dataType:e,dims:i[1],download:n,dispose:r})}default:throw new Error(`invalid data location: ${i[3]}`)}},$m=class{async fetchModelAndCopyToWasmMemory(i){return Vm(await _u(i))}async loadModel(i,e){us();let t;typeof i=="string"?t=await this.fetchModelAndCopyToWasmMemory(i):t=i,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Gm(t,e),fs()}async dispose(){return Hm(this.sessionId)}async run(i,e,t){us();let n=[],r=[];Object.entries(i).forEach(p=>{let g=p[0],w=p[1],T=this.inputNames.indexOf(g);if(T===-1)throw new Error(`invalid input '${g}'`);n.push(w),r.push(T)});let s=[],a=[];Object.entries(e).forEach(p=>{let g=p[0],w=p[1],T=this.outputNames.indexOf(g);if(T===-1)throw new Error(`invalid output '${g}'`);s.push(w),a.push(T)});let o=n.map((p,g)=>Uh(p,()=>`input "${this.inputNames[r[g]]}"`)),h=s.map((p,g)=>p?Uh(p,()=>`output "${this.outputNames[a[g]]}"`):null),c=await Wm(this.sessionId,r,o,a,h,t),d={};for(let p=0;p<c.length;p++)d[this.outputNames[a[p]]]=s[p]??Zp(c[p]);return fs(),d}startProfiling(){}endProfiling(){Xm(this.sessionId)}}}),Ym={};No(Ym,{OnnxruntimeWebAssemblyBackend:()=>Dc,initializeFlags:()=>Uc,wasmBackend:()=>Zm});var Uc,Dc,Zm,jb=St(()=>{"use strict";Ur(),qm(),Qb(),Uc=()=>{(typeof Vt.wasm.initTimeout!="number"||Vt.wasm.initTimeout<0)&&(Vt.wasm.initTimeout=0);let i=Vt.wasm.simd;if(typeof i!="boolean"&&i!==void 0&&i!=="fixed"&&i!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${i}". Reset it to \`false\` and ignore SIMD feature checking.`),Vt.wasm.simd=!1),typeof Vt.wasm.proxy!="boolean"&&(Vt.wasm.proxy=!1),typeof Vt.wasm.trace!="boolean"&&(Vt.wasm.trace=!1),typeof Vt.wasm.numThreads!="number"||!Number.isInteger(Vt.wasm.numThreads)||Vt.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Vt.wasm.numThreads=1;else{let e=typeof navigator>"u"?Lb("node:os").cpus().length:navigator.hardwareConcurrency;Vt.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},Dc=class{async init(i){Uc(),await km(),await zm(i)}async createInferenceSessionHandler(i,e){let t=new $m;return await t.loadModel(i,e),t}},Zm=new Dc});Ur();Ur();Ur();var eE="1.30.0";{let i=(jb(),Ic(Ym)).wasmBackend;yo("cpu",i,10),yo("wasm",i,10)}Object.defineProperty(Vt.versions,"web",{value:eE,enumerable:!0});const Kr=512,Jr=64,Kp=16e3,tE=.5,nE=.35;class iE{constructor(){Ye(this,"session",null);Ye(this,"state",new Float32Array(256));Ye(this,"context",new Float32Array(Jr));Ye(this,"buffer",new Float32Array(Kr));Ye(this,"filled",0);Ye(this,"busy",!1);Ye(this,"prob",0);Ye(this,"speaking",!1);Ye(this,"failed",!1)}get ready(){return!!this.session}get probability(){return this.prob}get speech(){return this.speaking}async load(e){if(!(this.session||this.failed))try{Vt.wasm.wasmPaths={wasm:`${e}assets/ort/ort-wasm-simd-threaded.wasm`},Vt.wasm.numThreads=1,this.session=await uu.create(`${e}assets/silero_vad.onnx`,{executionProviders:["wasm"]})}catch(t){this.failed=!0,console.warn("Silero VAD unavailable; falling back to the energy detector",t)}}push(e,t){if(!this.session||t!==Kp)return;let n=0;for(;n<e.length;){const r=Math.min(Kr-this.filled,e.length-n);for(let s=0;s<r;s++)this.buffer[this.filled+s]=e[n+s]/32768;if(this.filled+=r,n+=r,this.filled===Kr){const s=this.buffer.slice();this.filled=0,this.score(s)}}}async score(e){if(!(!this.session||this.busy)){this.busy=!0;try{const t=new Float32Array(Jr+Kr);t.set(this.context,0),t.set(e,Jr);const n=await this.session.run({input:new Un("float32",t,[1,Jr+Kr]),state:new Un("float32",this.state,[2,1,128]),sr:new Un("int64",BigInt64Array.from([BigInt(Kp)]),[])});this.state=new Float32Array(n.stateN.data),this.context=e.slice(Kr-Jr),this.prob=n.output.data[0],this.speaking=this.speaking?this.prob>=nE:this.prob>=tE}catch(t){this.failed=!0,this.session=null,console.warn("Silero VAD stopped; falling back to the energy detector",t)}finally{this.busy=!1}}}reset(){this.state=new Float32Array(256),this.context=new Float32Array(Jr),this.filled=0,this.prob=0,this.speaking=!1}}const Km="6F.1",Jp=16e3,rE="assets/capture.worklet.js",sE=30,aE="mirror-capture";function oE(i,e){const t=new Uint8Array(44+i.byteLength),n=new DataView(t.buffer),r=(s,a)=>{for(let o=0;o<a.length;o++)n.setUint8(s+o,a.charCodeAt(o))};return r(0,"RIFF"),n.setUint32(4,36+i.byteLength,!0),r(8,"WAVE"),r(12,"fmt "),n.setUint32(16,16,!0),n.setUint16(20,1,!0),n.setUint16(22,1,!0),n.setUint32(24,e,!0),n.setUint32(28,e*2,!0),n.setUint16(32,2,!0),n.setUint16(34,16,!0),r(36,"data"),n.setUint32(40,i.byteLength,!0),t.set(new Uint8Array(i.buffer,i.byteOffset,i.byteLength),44),new Blob([t],{type:"audio/wav"})}class Dh{constructor(e=()=>!1){Ye(this,"silero",new iE);Ye(this,"gated",0);Ye(this,"onSegment");Ye(this,"onEvent");Ye(this,"context",null);Ye(this,"stream",null);Ye(this,"node",null);Ye(this,"vad",Pp());Ye(this,"ring",[]);Ye(this,"held",[]);Ye(this,"opened",0);Ye(this,"preroll",0);Ye(this,"revision",0);Ye(this,"rate",Jp);Ye(this,"clock",0);Ye(this,"frames",0);Ye(this,"segments",0);this.audible=e}get listening(){return this.context!==null}get speaking(){return this.vad.phase==="speech"}get sampleRate(){return this.rate}get stats(){return{frames:this.frames,segments:this.segments,dropped:this.vad.dropped,rate:this.rate}}static get supported(){var e;return!!((e=navigator.mediaDevices)!=null&&e.getUserMedia)&&typeof AudioContext<"u"&&"audioWorklet"in AudioContext.prototype}async open(e){if(!this.context){this.revision=e,this.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,channelCount:1}});try{this.context=new AudioContext({sampleRate:Jp}),this.silero.load("/"),await this.context.audioWorklet.addModule(`/${rE}?v=${Km}`),this.node=new AudioWorkletNode(this.context,aE),this.node.port.onmessage=({data:n})=>this.message(n);const t=this.context.createGain();t.gain.value=0,this.context.createMediaStreamSource(this.stream).connect(this.node),this.node.connect(t),t.connect(this.context.destination),this.context.state!=="running"&&await this.context.resume()}catch(t){throw this.close(),t}}}close(){var t,n,r;this.held=[],this.ring=[],this.preroll=0,this.vad=Pp(),this.silero.reset(),this.frames=0,this.clock=0,(t=this.node)==null||t.port.close(),(n=this.node)==null||n.disconnect(),this.node=null;for(const s of((r=this.stream)==null?void 0:r.getTracks())??[])s.stop();this.stream=null;const e=this.context;this.context=null,e&&e.close()}feed(e,t=!1){const n=Math.round(this.rate*br.frameMs/1e3);for(const r of e)this.handle(r,new Int16Array(n).fill(Math.round(r*32767)),this.clock+=br.frameMs,t)}message(e){if(typeof e.rate=="number"){this.rate=e.rate;return}if(typeof e.rms!="number"||!e.pcm||!this.context)return;this.silero.push(e.pcm,this.rate);let t=e.rms;this.silero.ready&&!this.silero.speech&&this.vad.phase==="quiet"&&(t=0,this.gated++),this.handle(t,e.pcm,this.context.currentTime*1e3,this.audible())}get gatedFrames(){return this.gated}handle(e,t,n,r){var a;this.frames++,this.ring.push(t),this.ring.length>sE&&this.ring.shift(),this.held.length&&this.held.push(t);const s=Ab(this.vad,e,r,n);s&&((a=this.onEvent)==null||a.call(this,s),s.type==="offset"?this.deliver(s,n):s.type==="drop"?this.held=[]:this.collect(s,n))}collect(e,t){const n=Math.max(0,Math.round((t-e.from)/br.frameMs));this.held=this.ring.slice(Math.max(0,this.ring.length-n)),this.opened=e.from,this.preroll=this.held.length*br.frameMs}deliver(e,t){var d;const n=this.held;if(this.held=[],!n.length)return;let r=0;for(const p of n)r+=p.length;const s=Math.min(r,Math.round(e.ms/1e3*this.rate)),a=new Int16Array(s);let o=0;for(const p of n){const g=Math.min(p.length,s-o);if(g<=0)break;a.set(p.subarray(0,g),o),o+=g}if(!o)return;this.segments++;const h=Math.round(this.opened),c=Math.round(t+br.frameMs);(d=this.onSegment)==null||d.call(this,oE(a.subarray(0,o),this.rate),{revision:this.revision,onsetMs:h,offsetMs:c,prerollMs:this.preroll,vadMs:Math.max(0,c-h-e.ms),segmentMs:e.ms,bytes:o*2})}}const lE=1100,hE=3e3;function cE({segmentMs:i,turns:e,interrupted:t}){return i<lE?"skip":t?"interrupt":i>=hE?"long":e>0?"followup":"short"}const Qp=500,Nh=6,uE=1200,fE=3500;function dE(i){return i.arrayBuffer().then(e=>{const t=new Uint8Array(e);let n="";for(let r=0;r<t.length;r+=32768)n+=String.fromCharCode(...t.subarray(r,r+32768));return btoa(n)})}class pE{constructor(e,t={}){Ye(this,"started",0);Ye(this,"revision",0);Ye(this,"history",[]);Ye(this,"pending",null);Ye(this,"timings",{});Ye(this,"finished",{});Ye(this,"mic","off");Ye(this,"turn","idle");Ye(this,"vadPhase","quiet");Ye(this,"listener",null);Ye(this,"next",null);Ye(this,"cut",!1);Ye(this,"cutMs",null);Ye(this,"dropped",0);Ye(this,"epoch",0);Ye(this,"partial","");Ye(this,"continueTimer",null);Ye(this,"incomplete",!1);this.voice=e,this.hooks=t}static get canListen(){return Dh.supported}get busy(){return!!this.pending}get listening(){return this.mic==="open"}get turns(){return this.history.slice()}get lastTimings(){return{...this.finished}}get droppedSegments(){return this.dropped}get gatedFrames(){var e;return((e=this.listener)==null?void 0:e.gatedFrames)??0}get speechModelReady(){var e;return!!((e=this.listener)!=null&&e.silero.ready)}get partialWords(){return this.partial}get shown(){return this.mic==="open"&&this.vadPhase==="speech"?"hearing":this.turn!=="idle"?this.turn:this.mic==="open"?"listening":"off"}project(){var e,t;(t=(e=this.hooks).onState)==null||t.call(e,this.shown)}async toggle(e){var t,n,r,s;if(this.mic==="open"){this.closeMic(),this.project();return}if(!Dh.supported){(n=(t=this.hooks).onMessage)==null||n.call(t,"This browser cannot open a microphone, so the conversation cannot start.");return}this.next=null,this.revision=e,this.mic="open",this.project();try{await this.capture().open(e)}catch{this.mic="off",this.project(),(s=(r=this.hooks).onMessage)==null||s.call(r,"The microphone is blocked, so the conversation cannot start. Check this site's permissions in the browser.")}}feed(e){this.mic==="open"&&this.capture().feed(e,!this.voice.muted&&this.voice.playing)}capture(){if(!this.listener){const e=new Dh(()=>!this.voice.muted&&this.voice.playing);e.onEvent=t=>this.onVad(t),e.onSegment=(t,n)=>this.segment(t,n),this.listener=e}return this.listener}closeMic(){var t;const e=this.mic==="open"&&this.turn!=="idle";this.epoch++,this.mic="off",this.vadPhase="quiet",this.next=null,this.pending=null,this.partial="",this.continueTimer&&(window.clearTimeout(this.continueTimer),this.continueTimer=null),this.turn="idle",this.history=[],(t=this.listener)==null||t.close(),this.voice.stop(),e&&this.voice.interrupt(this.revision)}onVad(e){var t,n;e.type==="onset"||e.type==="barge"?(this.vadPhase="speech",e.type==="barge"?this.cutReply():this.turn==="thinking"&&((n=(t=this.hooks).onMessage)==null||n.call(t,"Thinking… you can keep talking."))):this.vadPhase="quiet",this.project()}cutReply(){if(this.cut)return;this.cut=!0;const e=performance.now();this.voice.stop(),this.turn!=="idle"&&this.voice.interrupt(this.revision).then(()=>{this.cutMs=Math.round(performance.now()-e)})}segment(e,t){var r,s;if(this.mic==="off"||t.revision!==this.revision)return;const n={audio:e,meta:t,closedAt:performance.now(),retried:!1};if(!this.pending&&!this.next){this.send(n);return}if(this.next){this.dropped++;return}this.next=n,(s=(r=this.hooks).onMessage)==null||s.call(r,"Heard you. One moment.")}async send(e){const t=this.epoch;this.begin(e.meta,e.closedAt);const n=cE({segmentMs:e.meta.segmentMs,turns:this.history.length/2,interrupted:this.cutMs!==null||this.cut});try{const r=this.partial;await this.submit({audio:await dE(e.audio),mime:e.audio.type,scene:n,...r?{prefix:r}:{}})}catch(r){t===this.epoch&&this.fail(r,e)}}async finishPartial(){var n,r;const e=this.partial;if(this.continueTimer=null,!e||this.mic!=="open"||this.pending)return;const t=this.epoch;this.started=performance.now(),this.timings={...this.timings,forced:1};try{await this.submit({text:e,force:!0,scene:"skip"})}catch(s){t===this.epoch&&((r=(n=this.hooks).onMessage)==null||r.call(n,s instanceof Error?s.message:"The conversation is unavailable right now."))}}observe(e){var t,n,r,s,a,o;this.pending&&(this.mark("poll"),e.visitor&&!this.pending.visitor&&(this.pending.visitor=e.visitor,this.mark("asr"),(n=(t=this.hooks).onTurn)==null||n.call(t,{...this.pending,done:!1})),typeof e.reply=="string"&&e.reply!==this.pending.reply&&(this.pending.reply=e.reply,this.mark("reply"),(s=(r=this.hooks).onTurn)==null||s.call(r,{...this.pending,done:!1})),e.message&&((o=(a=this.hooks).onMessage)==null||o.call(a,e.message)),e.emotion&&this.timings.emotion!==e.emotion&&(this.timings.emotion=e.emotion),e.status==="incomplete"&&(this.incomplete=!0),(e.status==="transcribing"||e.status==="thinking"||e.status==="speaking")&&(this.turn=e.status,this.project()))}markAudio(e=0){this.pending&&(this.mark("chunk"),this.mark("audible",e))}markViseme(e){this.pending&&e>.02&&this.mark("viseme")}reset(){this.closeMic(),this.timings={},this.finished={},this.project()}begin(e,t){this.started=performance.now();const n=this.cutMs;this.cutMs=null,this.timings={vad_ms:e.vadMs,segment_ms:e.segmentMs,preroll_ms:e.prerollMs,queue_ms:Math.max(0,Math.round(this.started-t)),interrupt_ms:n,poll_ms:null,asr_ms:null,reply_ms:null,chunk_ms:null,audible_ms:null,viseme_ms:null,total_ms:null,scene:null,emotion:null}}mark(e,t=0){!this.started||this.timings[`${e}_ms`]!==null||(this.timings[`${e}_ms`]=Math.round(performance.now()-this.started+t))}async submit(e){var n,r,s,a,o,h;const t=this.epoch;this.voice.stop(),this.turn="sending",this.cut=!1,this.pending={visitor:"",reply:""},this.incomplete=!1,this.continueTimer&&(window.clearTimeout(this.continueTimer),this.continueTimer=null),this.project(),(r=(n=this.hooks).onTurn)==null||r.call(n,{...this.pending,done:!1}),typeof e.scene=="string"&&(this.timings.scene=e.scene);try{await this.voice.turn({...e,revision:this.revision,history:this.history.slice(-Nh)},this.revision)}finally{if(t!==this.epoch)return;const c=this.pending;this.pending=null,this.turn="idle",this.timings.total_ms=Math.round(performance.now()-this.started),this.finished={...this.timings},c&&this.incomplete?(this.partial=c.visitor,this.incomplete=!1,(a=(s=this.hooks).onTurn)==null||a.call(s,{visitor:"",reply:"",done:!0}),this.continueTimer=window.setTimeout(()=>{this.finishPartial()},fE)):c&&(this.partial="",this.push(c.visitor,c.reply),(h=(o=this.hooks).onTurn)==null||h.call(o,{...c,done:!0}));const d=this.next;this.next=null,this.project(),d&&this.send(d)}}push(e,t){e&&this.history.push({role:"user",content:e.slice(0,Qp)}),t&&this.history.push({role:"assistant",content:t.slice(0,Qp)}),this.history.length>Nh*2&&this.history.splice(0,this.history.length-Nh*2)}fail(e,t){var r,s,a,o;const n=e instanceof lu&&e.status===429;if(n&&this.mic==="open"&&!t.retried){t.retried=!0,(s=(r=this.hooks).onMessage)==null||s.call(r,"The digital human is still busy. Asking again in a moment…"),window.setTimeout(()=>{this.mic==="open"&&this.send(t)},uE);return}(o=(a=this.hooks).onMessage)==null||o.call(a,n?"The digital human is with another visitor. Please try again shortly.":e instanceof Error?e.message:"The conversation is unavailable right now. Please try again."),this.project()}}const mE=.045,gE=.11;function vE(i,e,t){const n=1-Math.exp(-Math.max(t,0)/(e>i?mE:gE));return i+(e-i)*n}function _E(i){const e=Math.sin(i*127.1)*43758.5453;return e-Math.floor(e)}function yE(i,e=4.3,t=.13){const n=Math.floor(i/e),r=(i-(n+_E(n)*.55)*e)/t;return r<0||r>1?0:Math.sin(r*Math.PI)}function jp(i,e,t){const n=Math.min(1,Math.max(0,i)*2.4)*.55,r=yE(e);if(!t)return{jawOpen:n,eyeBlinkLeft:r,eyeBlinkRight:r};const s=Math.sin(e*6.1)*.5+.5,a=Math.sin(e*2.7+1.3)*.5+.5;return{jawOpen:n,jawForward:n*.18,mouthClose:n*.3,mouthFunnel:n*s*.75,mouthPucker:n*(1-s)*.5,mouthLowerDownLeft:n*.65,mouthLowerDownRight:n*.65,mouthSmileLeft:n*a*.35,mouthSmileRight:n*a*.35,cheekSquintLeft:n*.12,cheekSquintRight:n*.12,browInnerUp:.05+Math.sin(e*.43)*.04+n*.12,eyeBlinkLeft:r,eyeBlinkRight:r}}const ME={"#projects":"These are the things I have been building — graded RL environments for computer-use agents, multimodal speaker attribution, and this mirror itself.","#research":"My ALIFE 2026 paper argues diffusion-based humanoids are the first architectures where self-awareness is a serious scientific question. Ask me about it.","#about":"I am Anthony Li — an ML engineer with six years in production, most recently on Microsoft 365 Copilot. The full resume is here if you want it."},wE="You came back. I had to wake the models up, and here I am.",SE=3e5;function xE(i,e){let t=e+i,n=!1,r=!1;return{note(s){t=s+i,n=!1,r=!1},pause(){n=!0},due(s){return n||r||s<t?!1:(r=!0,!0)},get fired(){return r}}}const ke=i=>document.getElementById(i),qt=ke("app"),mn=ke("drawing-canvas"),Jt=mn.getContext("2d"),ti=ke("world-canvas"),Tu=ke("mirror-frame"),bE=["watch","draw","example","undo","clear"].map(i=>ke(i));let ln=[],yn=null,Qt=null,Et=null,Fo=!1,sn=!1,ni=0,_n=null,Gn=null,Qn=0,rr=null,Ys=null,Mn=matchMedia("(prefers-reduced-motion: reduce)").matches,wn="draw",mi=0,ms=1,So=[],Hn;function $t(i){ke("status").textContent=i}function bn(i){wn=i,qt.classList.remove("world","fracture","entering","drawing","generating","preparing"),i!=="draw"&&qt.classList.add(i),qt.dataset.state=i;const e={draw:"01 / Draw a line",drawing:"01 / Your sketch",generating:"02 / AI is imagining",preparing:"03 / Preparing the cracks",world:"02 / Your world",fracture:"03 / Following your lines",entering:"03 / Step through",portfolio:"The other side / Welcome"};ke("mode-label").textContent=e[i]??e.draw,document.querySelectorAll(".journey-step").forEach(t=>t.classList.toggle("active",t.dataset.step===(["preparing","fracture","entering","portfolio"].includes(i)?"fracture":["world","generating"].includes(i)?"world":"draw"))),oa()}function Rr(i){sn=i,oa()}function oa(){bE.forEach(i=>i.disabled=sn||!Fo),ke("stroke-count").textContent=`${ln.length} ${ln.length===1?"stroke":"strokes"}`,ke("undo").disabled=sn||!!_n||!ln.length,ke("clear").disabled=sn||!!_n||!ln.length,ke("example").disabled=sn||!!_n,ke("watch").disabled=sn||!ln.length,ke("watch").textContent=wn==="generating"?"Generating…":_n?"Break the mirror ↗":"Generate a world ↗",ke("draw").hidden=!_n,ke("cancel").hidden=wn!=="generating",ke("transition-skip").hidden=!sn||wn==="generating",ke("generation-progress").hidden=wn!=="generating",ke("mirror-instruction").hidden=!!ln.length||!!yn||wn!=="draw",mn.style.pointerEvents=sn||_n?"none":"auto"}function Jm(){const i=mn.getBoundingClientRect();if(!i.width||!i.height)return;const e=Math.min(devicePixelRatio,2);mn.width=Math.round(i.width*e),mn.height=Math.round(i.height*e),Jt.setTransform(e,0,0,e,0,0),xi()}function xi(){const{width:i,height:e}=mn.getBoundingClientRect();Jt.clearRect(0,0,i,e);const t=yn?[...ln,yn]:ln;let r=t.reduce((s,a)=>s+Math.max(a.length-1,1),0)*ms;Jt.lineCap="round",Jt.lineJoin="round";for(const s of t){if(!s.length||r<=0)break;Jt.beginPath(),Jt.moveTo(s[0][0]*i,s[0][1]*e),s.length===1&&(Jt.lineTo(s[0][0]*i+.1,s[0][1]*e),r--);for(let a=1;a<s.length&&r>0;a++,r--){const o=Math.min(1,r),h=s[a-1],c=s[a];Jt.lineTo((h[0]+(c[0]-h[0])*o)*i,(h[1]+(c[1]-h[1])*o)*e)}Jt.strokeStyle=mi?`rgba(209, 250, 255, ${.6+mi*.4})`:"rgba(204, 225, 220, .75)",Jt.lineWidth=mi?1.3+mi:1.25,Jt.shadowColor="#72e1ff",Jt.shadowBlur=mi*17,Jt.stroke(),Jt.shadowBlur=0}if(mi&&So.length&&ms>=1){Jt.lineWidth=.65,Jt.strokeStyle=`rgba(175, 227, 238, ${mi*.48})`;for(const s of So)Jt.beginPath(),Jt.moveTo(s[0][0]*i,s[0][1]*e),Jt.lineTo(s[1][0]*i,s[1][1]*e),Jt.stroke()}}function Qm(i){const e=mn.getBoundingClientRect();return[Math.max(.002,Math.min(.998,(i.clientX-e.left)/e.width)),Math.max(.002,Math.min(.998,(i.clientY-e.top)/e.height))]}mn.addEventListener("pointerdown",i=>{if(!(sn||!Fo||_n||!i.isPrimary||i.button!==0)){if(ln.length>=24){$t("You can draw up to 24 strokes. Undo a stroke or clear the canvas to continue.");return}bn("drawing"),yn=[Qm(i)],mn.setPointerCapture(i.pointerId),xi()}});mn.addEventListener("pointermove",i=>{if(!yn||sn||yn.length>=500)return;const e=Qm(i),t=yn[yn.length-1];Math.hypot(e[0]-t[0],e[1]-t[1])>.003&&yn.push(e),xi()});function jm(){yn&&(ln.push(yn),ni++,yn=null,oa(),xi(),$t("When you are ready, choose “Generate a world”."))}mn.addEventListener("pointerup",jm);mn.addEventListener("pointercancel",()=>{yn=null,bn(ln.length?"drawing":"draw"),xi()});mn.addEventListener("lostpointercapture",jm);function Au(i){sn||(ni++,_n=null,Qt==null||Qt.reset(),delete qt.dataset.generation,delete qt.dataset.seed,delete qt.dataset.pieces,delete qt.dataset.fractureMode,ke("generation-status").textContent="A few lines can begin a new world",qt.classList.remove("loaded"),ke("world-backdrop").style.backgroundImage="",document.documentElement.style.removeProperty("--world-image"),Hn.getContext("2d").clearRect(0,0,Hn.width,Hn.height),Qt==null||Qt.replaceSource(Hn),mn.style.opacity="1",ti.style.opacity="",yn=null,ln=i?Gv():[],So=[],mi=0,ms=1,bn(i?"drawing":"draw"),oa(),xi())}ke("draw").onclick=()=>{Au(!1),mn.focus(),Tu.scrollIntoView({behavior:Mn?"instant":"smooth",block:"center"}),$t("Canvas cleared. Draw a few lines to begin a new world.")};ke("clear").onclick=()=>{Au(!1),$t("Canvas cleared.")};ke("example").onclick=()=>{Au(!0),$t("Example added. Choose “Generate a world” to bring it to life.")};ke("undo").onclick=()=>{ln.pop(),ni++,bn(ln.length?"drawing":"draw"),xi()};function eg(){++Qn,Gn==null||Gn.abort(),Gn=null,Rr(!1),bn(ln.length?"drawing":"draw"),$t("Waiting canceled. Your sketch is kept; the current generation may need a moment to finish.")}ke("cancel").onclick=eg;async function EE(){if(sn||!ln.length)return;const i=ln.map(r=>r.map(s=>[...s])),e=ni,t=++Qn;Gn=new AbortController;const n=Gn.signal;Rr(!0),bn("generating"),ke("progress").value=0,ke("progress-copy").textContent="Your world is taking shape…",$t("Creating a world from your sketch. Give it a moment.");try{if(zi==="rest"){if(ke("progress-copy").textContent="The mirror is waking up…",await Pu("replay")&&(zi="entrance"),t!==Qn||ni!==e)return;ke("progress-copy").textContent="Your world is taking shape…",Du()}const r=await yb(i,e,n,a=>{t===Qn&&(ke("progress").value=a,ke("progress-copy").textContent=`Your world is taking shape… ${Math.round(a*100)}%`)});if(t!==Qn||ni!==e)return;const s=new Image;if(s.src=`data:${r.mime};base64,${r.image}`,await s.decode(),t!==Qn||ni!==e)return;Hn.width=s.width,Hn.height=s.height,Hn.getContext("2d").drawImage(s,0,0),Qt==null||Qt.replaceSource(Hn),ke("world-backdrop").style.backgroundImage=`url(${s.src})`,document.documentElement.style.setProperty("--world-image",`url(${s.src})`),_n={strokes:i,revision:e},qt.dataset.generation="ai",qt.dataset.seed=String(r.seed),qt.classList.add("loaded"),ms=0,xi(),Gn=null,Rr(!1),bn("world"),ke("generation-status").textContent=`Generated from your sketch · ${Math.round(r.seconds)}s`,$t("Your world is ready. Choose “Break the mirror” to open it along your lines.")}catch(r){if(t!==Qn)return;Gn=null,Rr(!1),bn("drawing"),$t(r instanceof Error?r.message:"Generation failed. Your sketch is kept. Please try again.")}}function TE(i){return new Promise(e=>{rr=new Worker(new URL("/assets/fracture.worker-CBuP76uh.js",import.meta.url),{type:"module"});let t=!1;const n=s=>{t||(t=!0,clearTimeout(r),rr==null||rr.terminate(),rr=null,Ys=null,e(s))},r=setTimeout(()=>n(null),1800);Ys=()=>n(null),rr.onmessage=s=>n(s.data.fracture??null),rr.onerror=()=>n(null),rr.postMessage(i)})}function Fh(i,e,t){return new Promise(n=>{const r=performance.now();function s(a){if(e!==Qn){n(!1);return}const o=Math.min(1,(a-r)/i);t(o),o<1?requestAnimationFrame(s):n(!0)}requestAnimationFrame(s)})}async function AE(){if(sn||!Fo||!_n||_n.revision!==ni)return;const i=_n.strokes,e=++Qn;Rr(!0),bn("preparing"),$t("Preparing cracks along your sketch…"),zi!=="space"&&Pu("entered"),Tu.scrollIntoView({behavior:Mn?"instant":"smooth",block:"center"});const t=Mn?null:await TE(i);if(e!==Qn)return;const n=!!Qt&&!!t&&!t.fallback;if(qt.dataset.fractureMode=n?"mesh":"fade",qt.dataset.pieces=String((t==null?void 0:t.pieces.length)??0),n)try{Qt.prepare(t),So=t.extensions}catch{Qt==null||Qt.reset(),qt.dataset.fractureMode="fade"}if(bn("world"),ms=0,mi=1,$t(Mn?"Entering with reduced motion.":"Your lines are lighting up across the world you created."),!await Fh(Mn?150:1400,e,s=>{ms=s,xi()}))return;if(Mn){oi();return}if(!await Fh(550,e,s=>{mi=.75+Math.sin(s*Math.PI)*.25,xi()}))return;bn("fracture"),$t(qt.dataset.fractureMode==="mesh"?"Light follows your lines, opening the other side.":"Your sketch gently opens the way inside.");const r=qt.dataset.fractureMode==="mesh";await Fh(2300,e,s=>{r&&(Qt==null||Qt.setProgress(s)),mn.style.opacity=String(Math.max(0,1-s*7)),r||(ti.style.opacity=String(1-s)),s>.63&&(bn("entering"),ke("flash").style.opacity=String(Math.sin((s-.63)/.37*Math.PI)*.18))})&&(ke("flash").style.opacity="0",oi())}ke("watch").onclick=()=>_n?AE():EE();function RE(){ti.style.opacity="",ti.parentElement!==ke("space-stage")&&(ti.parentElement,ti.nextSibling,ke("space-stage").appendChild(ti)),Et==null||Et.enter("/assets/model-clips.glb","/assets/model.glb")}let e0=0;function CE(){Et==null||Et.setMotion("greeting"),window.clearTimeout(e0),e0=window.setTimeout(()=>{wn==="portfolio"&&(Et==null||Et.setMotion("idle"))},5200)}let zi="entrance",Zs=null,tg="idle",as=0,Ws=0;const t0=!matchMedia("(max-width: 720px)").matches&&!matchMedia("(pointer: coarse)").matches;let IE=0;const ws=()=>performance.now()+IE,PE=SE,gs=xE(PE,ws());for(const i of["pointerdown","keydown","wheel","touchstart","scroll"])window.addEventListener(i,()=>gs.note(ws()),{capture:!0,passive:!0});let Bo=!1;const Dn=new Eb({onAudio:i=>{xo("speaking"),as||ig(),Et==null||Et.setMotion("speaking"),Lr.markAudio(i)},onEnd:()=>{xo("idle"),rg(),wn==="portfolio"&&(Et==null||Et.setMotion("idle"))},onTurn:i=>{gs.note(ws()),Lr.observe(i)}});function xo(i){tg=i,qt.dataset.voice=i,ng()}function ng(){ke("stop-voice").hidden=tg==="idle",ke("mute").hidden=!Dn.supported,ke("mute").setAttribute("aria-pressed",String(Dn.muted)),ke("mute").innerHTML=`${Dn.muted?"Unmute":"Mute"} <span aria-hidden="true">${Dn.muted?"✕":"♪"}</span>`}function ig(){if(rg(),Mn){Et==null||Et.setFace(jp(.3,0,t0));return}let i=performance.now();const e=t=>{as=requestAnimationFrame(e);const n=Math.min(.1,(t-i)/1e3);i=t,Ws=vE(Ws,Dn.level(),n),Lr.markViseme(Ws),Et==null||Et.setFace(jp(Ws,t/1e3,t0))};as=requestAnimationFrame(e)}function rg(){as&&cancelAnimationFrame(as),as=0,Ws=0,Et==null||Et.clearFace()}const Bh=ke("dialogue-transcript"),oo=ke("listen"),LE={off:"Start the conversation, then just talk — in English. One visitor at a time.",listening:"Listening… just talk, in English. One visitor at a time.",hearing:"Hearing you… stop talking to send it.",sending:"Sending your words…",transcribing:"Transcribing…",thinking:"Thinking…",speaking:"Speaking… talk over it to cut in."},UE="The conversation is not ready yet. The digital human can still speak its own lines.";let Nc="off",bo=!1,pi=null;const Lr=new pE(Dn,{onState:i=>{Nc=i,Ru()},onTurn:i=>DE(i),onMessage:i=>$t(i)});function Ru(){qt.dataset.dialogue=Nc;const i=Lr.listening;oo.setAttribute("aria-pressed",String(i)),oo.innerHTML=i?'Stop listening <span aria-hidden="true">◼</span>':'Start listening <span aria-hidden="true">◉</span>',oo.disabled=!bo,ke("dialogue-hint").textContent=bo?LE[Nc]:UE}function DE(i){pi||(pi={visitor:document.createElement("p"),reply:document.createElement("p")},pi.visitor.className="visitor",pi.reply.className="reply",Bh.append(pi.visitor,pi.reply)),pi.visitor.hidden=!0,pi.reply.textContent=i.reply,pi.reply.hidden=!i.reply,i.done&&(pi=null),Bh.scrollTop=Bh.scrollHeight}async function NE(){var i,e;try{bo=!!((e=(i=(await sm(AbortSignal.timeout(1e4))).dialogue)==null?void 0:i.chat)!=null&&e.ready)}catch{bo=!1}Ru()}oo.addEventListener("click",()=>{Lr.toggle(ni)});async function sg(i){if(gs.note(ws()),ke("spoken-text").textContent=i,!Dn.supported){$t("This browser cannot play audio. The words are on screen.");return}xo("loading"),ig();try{await Dn.speak(i,ni)}catch(e){$t(e instanceof Error?e.message:"The voice is unavailable right now. The words stay on screen.")}}const Cu="Welcome to the other side. Browse the work, or ask the digital Anthony about it.";let os=null,Fc=null,Iu=null;function Pu(i){if(os){if(Fc===i)return os;Zs==null||Zs.abort()}else if(Iu===i)return Promise.resolve(!0);return FE(i)}function FE(i){const e=new AbortController;return Zs=e,Fc=i,os=bb(i,e.signal).then(()=>(Iu=i,i==="entered"&&Dn.warm(),!0),t=>(e.signal.aborted||$t(t instanceof Error?t.message:"AI is temporarily unavailable. Please try again shortly."),!1)).finally(()=>{Zs===e&&(os=null,Fc=null)}),os}const BE="The session ended while the page was away. Reconnect to continue.";function OE(i){Bo=!0,ke("session-copy").textContent=i,ke("session-note").textContent="";const e=ke("reconnect");e.disabled=!1,ke("session-ended").hidden=!1,e.focus({preventScroll:!0})}function kE(){Bo=!1,ke("session-ended").hidden=!0,ke("session-note").textContent=""}ke("reconnect").onclick=async()=>{const i=ke("reconnect");if(i.disabled=!0,ke("session-note").textContent="Waking the digital human…",!await Pu("entered")){ke("session-note").textContent="The digital human did not wake up. Please try again.",i.disabled=!1;return}zi="space",kE(),gs.note(ws()),ke("space-title").focus({preventScroll:!0}),$t(Cu),NE(),await sg(wE)};setInterval(()=>{},1e3);async function zE(i){{$t(Cu);return}}function oi(i=""){if(++Qn,Ys==null||Ys(),Gn==null||Gn.abort(),Gn=null,yn=null,Rr(!1),bn("portfolio"),ke("entrance").hidden=!0,ke("space").hidden=!1,RE(),ke("skip").hidden=!0,ke("transition-skip").hidden=!0,ke("flash").style.opacity="0",i||history.replaceState(null,"","#space"),$t(Cu),ke("space-title").focus({preventScroll:!0}),window.scrollTo({top:0,behavior:"instant"}),VE(i),zi==="space"){ag[i]&&sg(ME[i]);return}zi="space",xo("idle"),Ru(),zE()}function Lu(){{history.replaceState(null,"","#space"),oi();return}}ke("skip").onclick=()=>oi();ke("transition-skip").onclick=()=>oi();ke("replay").onclick=Lu;ke("stop-voice").onclick=()=>{Dn.stop(),$t("The voice is stopped. The words stay on screen.")};ke("mute").onclick=()=>{Dn.muted=!Dn.muted,ng(),$t(Dn.muted?"Audio muted. The words stay on screen.":"Audio on.")};document.querySelector(".identity").onclick=i=>{i.preventDefault(),Lu()};document.addEventListener("keydown",i=>{i.key==="Escape"&&sn&&(wn==="generating"?eg():oi())});document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){if(gs.pause(),!Lr.listening)return;Lr.toggle(ni),$t("The microphone closed with the page. Start listening again to continue.");return}gs.note(ws()),Du()});const ag={"#projects":["01 / PROJECTS","From Sketch to World",`
    <p>This site is the first project: draw a few lines and Scribble ControlNet guides SDXL to imagine a world from your sketch, then the mirror breaks along your own strokes and you step inside. The digital human sharing this space is the second pipeline — a 3D avatar that speaks with a cloned voice and gestures learned from real talks.</p>
    <h3>Selected work</h3>
    <ul>
      <li><b>WebTask Arena</b> — deterministic, seed-reproducible, server-graded RL environments for computer-use agents, with named-subgoal reward functions and a contract-test suite. FastAPI, Docker, deployed on Hugging Face Spaces. <a href="https://github.com/xiningli/webtask-arena">github.com/xiningli/webtask-arena ↗</a></li>
      <li><b>UI-TARS Webtask Eval</b> — graded evaluation of UI-TARS-1.5-7B (4-bit, single 16 GB GPU) over a Playwright screenshot-to-action loop with vLLM-served Qwen2.5-VL; failure modes diagnosed from recorded trajectories and fed back into reward design. <a href="https://github.com/xiningli/uitars-webtask-eval">github.com/xiningli/uitars-webtask-eval ↗</a></li>
      <li><b>CASA</b> — speech/audio + multimodal ML in a private research collaboration: every subtitle line attributed to its on-screen speaker by fusing ECAPA voice embeddings, ArcFace recognition, and active-speaker detection under a von Mises–Fisher posterior, with leakage-free splits and a blind gold-standard protocol enforced as CI gates.</li>
    </ul>`],"#research":["02 / RESEARCH","Dreaming Itself",`
    <p>First-author paper at <b>ALIFE 2026</b> (ISAL / MIT Press): <b>Dreaming Itself: Diffusion Models as the Structural Substrate for Self-Awareness in Humanoid Robots</b>.</p>
    <p>Three major theories of self-awareness — Friston's Free Energy Principle, Metzinger's Phenomenal Self-Model, and Damasio's two-level self — converge on one structural motif: a generative prior, a prediction-error signal, and a self/world boundary. The paper argues each is structurally present in diffusion-based robot action models and absent from reactive feedforward policies: the denoising step corresponds to an Active Inference belief update, the noise schedule to a precision schedule, and the LLM + Diffusion stack of current humanoids to Damasio's core-self / extended-self distinction. The claim is architectural — the hard problem of consciousness remains open — but current humanoid designs are among the first in the right structural class for self-awareness to be a scientifically non-trivial question.</p>
    <ul class="detail-links">
      <li><a href="https://direct.mit.edu/isal/proceedings/isal2026/38/125/138158">Proceedings, MIT Press ↗</a></li>
      <li><a href="/assets/alife-2026-dreaming-itself.pdf">Read the paper (PDF)</a></li>
      <li><a href="https://github.com/xiningli/dreaming-together">Companion code ↗</a></li>
    </ul>`],"#about":["03 / ABOUT","Anthony (Xining) Li",`
    <p>Software engineer in applied ML and ML infrastructure — speech/audio, reinforcement learning, and generative models — with six years shipping production systems at worldwide scale. At Microsoft I was the on-call Designated Responsible Individual for Microsoft 365 Copilot Business Chat: triaging Sev-2+ incidents, building the telemetry and monitoring that kept the service honest, and designing a human-in-the-loop RLHF/DPO cycle that fine-tuned a computer-use evaluation agent. Before that: distributed systems in Go at Kidoz, Hadoop-scale data pipelines at Apple, and statistical modeling at HG Insights — a purchase-propensity model that lifted sales leads 20% in A/B testing, patent pending.</p>
    <h3>Experience</h3>
    <ul>
      <li><b>Microsoft</b> — Software Engineer, M365 Copilot Business Chat · 2022 – 2026</li>
      <li><b>Kidoz</b> — Backend Engineer · 2022</li>
      <li><b>Apple</b> (contract) — Big Data DevOps Engineer · 2019 – 2021</li>
      <li><b>HG Insights</b> — Data Scientist · 2018 – 2019</li>
    </ul>
    <h3>Education</h3>
    <ul>
      <li><b>University of British Columbia</b> — MEL, Dependable Software Systems · 2022</li>
      <li><b>UC Santa Barbara</b> — M.A. Statistics · 2019 · B.S. Financial Mathematics &amp; Statistics · 2017</li>
    </ul>
    <ul class="detail-links">
      <li><a href="/assets/xining-li-resume.pdf">Full résumé (PDF)</a></li>
      <li><a href="https://github.com/xiningli">github.com/xiningli ↗</a></li>
      <li><a href="mailto:xininglica@gmail.com">xininglica@gmail.com</a></li>
    </ul>`]};function VE(i){const e=ag[i];document.querySelector(".space-content").hidden=!!e,ke("space-detail").hidden=!e,e&&(ke("detail-number").textContent=e[0],ke("detail-title").textContent=e[1],ke("detail-copy").innerHTML=e[2],ke("detail-title").focus({preventScroll:!0}))}ke("detail-back").onclick=()=>{location.hash="space"};window.addEventListener("hashchange",()=>{location.hash?oi(location.hash):Lu()});function Uu(){const i=ke("motion");i.setAttribute("aria-pressed",String(Mn)),i.innerHTML=`Motion <span>${Mn?"Reduced":"On"}</span>`}ke("motion").onclick=()=>{Mn=!Mn,Uu(),sn&&Mn&&wn!=="generating"&&oi()};matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",i=>{Mn=i.matches,Uu(),sn&&Mn&&wn!=="generating"&&oi()});Uu();new ResizeObserver(Jm).observe(Tu);async function GE(){Hn=document.createElement("canvas"),Hn.width=768,Hn.height=832;try{Qt=new Hv(ti,Hn,()=>{ti.style.display="none",Qt=null,qt.dataset.renderer="fallback",Et==null||Et.loseContext(),Et=null,delete qt.dataset.avatar,sn&&wn!=="generating"&&oi()}),qt.dataset.renderer="webgl";const i=fetch("/assets/speaking.track.json").then(e=>e.ok?e.json():null).catch(()=>null);Et=new vb({renderer:Qt.renderer,canvas:ti,reduced:()=>Mn,onState:e=>{qt.dataset.avatar=e,e==="ready"&&(i.then(t=>{t&&Et&&Et.setTrack(t)}),wn==="portfolio"&&CE())}})}catch{qt.dataset.renderer="fallback",ti.style.display="none"}Fo=!0,Rr(!1),bn("draw"),oa(),Jm();{ke("dialogue-panel").hidden=!0,ke("voice-panel").hidden=!0,ke("generation-status").textContent="Static preview — the live version draws worlds and talks on my own GPU.",$t("Static preview. The digital human and the portfolio are live; the AI backend is not."),oi();return}}async function Du(){try{const i=await sm(AbortSignal.timeout(1e4));return _n||(ke("generation-status").textContent=i.ready?i.busy?"AI is busy · You can start drawing":"AI is ready · A new world with every sketch":i.loading?"AI is starting · You can start drawing":i.phase==="rest"?"The mirror is resting. It wakes when you draw.":"AI is offline · Your sketch stays on the canvas"),HE(i.phase),i}catch{_n||(ke("generation-status").textContent="AI is offline · Your sketch stays on the canvas");return}}function HE(i){if(!(os||Bo||i===zi)){if(Iu=null,wn!=="portfolio"){zi=i;return}i==="rest"&&(zi="rest",OE(BE))}}ke("build").textContent=Km;GE();let WE=0;setInterval(()=>{sn||Bo||document.visibilityState==="hidden"||wn==="portfolio"&&++WE%2||Du()},15e3);export{vy as $,jE as A,li as B,dt as C,Ga as D,Nn as E,sT as F,tT as G,G0 as H,eT as I,nT as J,iT as K,aa as L,rT as M,ma as N,Zt as O,lT as P,yi as Q,Xh as R,kn as S,YE as T,_a as U,wt as V,xn as W,JE as X,su as Y,V0 as Z,Ac as _,KE as a,co as a0,bc as a1,k0 as a2,pn as a3,Z0 as a4,iu as a5,Po as a6,Mt as a7,Cr as a8,sa as a9,cr as aa,Gi as ab,ZE as b,hT as c,fo as d,oT as e,_t as f,de as g,Vd as h,aT as i,cT as j,si as k,QE as l,Tr as m,kl as n,g_ as o,dn as p,hn as q,qh as r,Ni as s,Sy as t,ur as u,wy as v,Iy as w,Di as x,z0 as y,Lt as z};
