// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("path")):"function"==typeof define&&define.amd?define(["path"],t):(r="undefined"!=typeof globalThis?globalThis:r||self).dsemtk=t(r.require$$0)}(this,(function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,c=o.__defineSetter__,a=o.__lookupGetter__,f=o.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,e){var n,l,p,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(a.call(r,t)||f.call(r,t)?(n=r.__proto__,r.__proto__=o,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),p="get"in e,y="set"in e,l&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(r,t,e.get),y&&c&&c.call(r,t,e.set),r};var l=e;function p(r,t,e){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var y=/./;function s(r){return"boolean"==typeof r}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return b&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var j=Object.prototype.hasOwnProperty;var _,g="function"==typeof Symbol?Symbol.toStringTag:"";_=v()?function(r){var t,e,n,o,u;if(null==r)return d.call(r);e=r[g],u=g,t=null!=(o=r)&&j.call(o,u);try{r[g]=void 0}catch(t){return d.call(r)}return n=d.call(r),t?r[g]=e:delete r[g],n}:function(r){return d.call(r)};var m=_,w=Boolean.prototype.toString;var h=v();function O(r){return"object"==typeof r&&(r instanceof Boolean||(h?function(r){try{return w.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===m(r)))}function E(r){return s(r)||O(r)}function S(){return new Function("return this;")()}p(E,"isPrimitive",s),p(E,"isObject",O);var P="object"==typeof self?self:null,A="object"==typeof window?window:null,T="object"==typeof global?global:null;var q=function(r){if(arguments.length){if(!s(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return S()}if(P)return P;if(A)return A;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),B=q.document&&q.document.childNodes,N=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var x,C=/^\s*function\s*([^(]*)/i;p(k,"REGEXP",C),x=Array.isArray?Array.isArray:function(r){return"[object Array]"===m(r)};var V=x;function F(r){return null!==r&&"object"==typeof r}var G=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!V(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(F);function L(r){var t,e,n,o;if(("Object"===(e=m(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=C.exec(n.toString()))return t[1]}return F(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}p(F,"isObjectLikeArray",G);var M="function"==typeof y||"object"==typeof N||"function"==typeof B?function(r){return L(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?L(r).toLowerCase():t};var R,$,D=Object.getPrototypeOf;$=Object.getPrototypeOf,R="function"===M($)?D:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===m(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var I=R;function J(r){return null==r?null:(r=Object(r),I(r))}function U(r,t,e,n){var o,u,i,c,a,f;if(a=r-t,r<=0||a<=0)return NaN;if(1===r||0===n)return 0;for(u=n<0?(1-r)*n:0,o=0,i=0,f=0;f<r;f++)o+=(c=e[u])*c,i+=c,u+=n;return(o-i/r*i)/a}p(U,"ndarray",(function(r,t,e,n,o){var u,i,c,a,f,l;if(f=r-t,r<=0||f<=0)return NaN;if(1===r||0===n)return 0;for(i=o,u=0,c=0,l=0;l<r;l++)u+=(a=e[i])*a,c+=a,i+=n;return(u-c/r*c)/f}));var X,z=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===m(r))return!0;r=J(r)}return!1}(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,r.join)(__dirname,"./native.js")),H=X=z instanceof Error?U:z;const{ndarray:K}=X;var Q=Math.sqrt;function W(r,t,e,n){return Q(H(r,t,e,n)/r)}return p(W,"ndarray",(function(r,t,e,n,o){return Q(K(r,t,e,n,o)/r)})),W}));
//# sourceMappingURL=index.js.map
