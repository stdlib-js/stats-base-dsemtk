// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(r){var e,n,s;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,s=parseInt(n,10),!isFinite(s)){if(!t(n))throw new Error("invalid integer. Value: "+n);s=0}return s<0&&("u"===r.specifier||10!==e)&&(s=4294967295+s+1),s<0?(n=(-s).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=s.toString(e),s||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var u=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,b=/^(\d+)e/,w=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=f.call(n,y,"$1e"),n=f.call(n,v,"e"),n=f.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=f.call(n,g,"e+0$1"),n=f.call(n,d,"e-0$1"),r.alternate&&(n=f.call(n,h,"$1."),n=f.call(n,b,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===p.call(r.specifier)?p.call(n):l.call(n)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function k(r,e,t){var n=e-r.length;return n<0?r:r=t?r+E(n):E(n)+r}var x=String.fromCharCode,j=isNaN,S=Array.isArray;function _(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function A(r){var e,t,n,a,o,u,l,p,f;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",l=1,p=0;p<r.length;p++)if(c(n=r[p]))u+=n;else{if(e=void 0!==n.precision,!(n=_(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,j(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,j(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!j(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=j(o)?String(n.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=k(n.arg,n.width,n.padRight)),u+=n.arg||"",l+=1}return u}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,t,n,i;for(t=[],i=0,n=V.exec(r);n;)(e=r.slice(i,V.lastIndex-n[0].length)).length&&t.push(e),t.push($(n)),i=V.lastIndex,n=V.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){return"string"==typeof r}function O(r){var e,t,n;if(!F(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=T(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return A.apply(null,t)}var I,C=Object.prototype,R=C.toString,P=C.__defineGetter__,Z=C.__defineSetter__,L=C.__lookupGetter__,N=C.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(r,e)||N.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(r,e,t.get),o&&Z&&Z.call(r,e,t.set),r};var W=I;function G(r,e,t){W(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function M(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){if(this instanceof r){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(e,t);return new n}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}function B(r,e){for(var t=0,n=r.length-1;n>=0;n--){var i=r[n];"."===i?r.splice(n,1):".."===i?(r.splice(n,1),t++):t&&(r.splice(n,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}var U=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,X=function(r){return U.exec(r).slice(1)};function z(){for(var r="",e=!1,t=arguments.length-1;t>=-1&&!e;t--){var n=t>=0?arguments[t]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,e="/"===n.charAt(0))}return(e?"/":"")+(r=B(er(r.split("/"),(function(r){return!!r})),!e).join("/"))||"."}function q(r){var e=D(r),t="/"===tr(r,-1);return(r=B(er(r.split("/"),(function(r){return!!r})),!e).join("/"))||e||(r="."),r&&t&&(r+="/"),(e?"/":"")+r}function D(r){return"/"===r.charAt(0)}function J(){var r=Array.prototype.slice.call(arguments,0);return q(er(r,(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function H(r,e){function t(r){for(var e=0;e<r.length&&""===r[e];e++);for(var t=r.length-1;t>=0&&""===r[t];t--);return e>t?[]:r.slice(e,t-e+1)}r=z(r).substr(1),e=z(e).substr(1);for(var n=t(r.split("/")),i=t(e.split("/")),a=Math.min(n.length,i.length),o=a,s=0;s<a;s++)if(n[s]!==i[s]){o=s;break}var c=[];for(s=o;s<n.length;s++)c.push("..");return(c=c.concat(i.slice(o))).join("/")}function K(r){var e=X(r),t=e[0],n=e[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."}function Q(r,e){var t=X(r)[2];return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t}function Y(r){return X(r)[3]}var rr={extname:Y,basename:Q,dirname:K,sep:"/",delimiter:":",relative:H,join:J,isAbsolute:D,normalize:q,resolve:z};function er(r,e){if(r.filter)return r.filter(e);for(var t=[],n=0;n<r.length;n++)e(r[n],n,r)&&t.push(r[n]);return t}var tr="b"==="ab".substr(-1)?function(r,e,t){return r.substr(e,t)}:function(r,e,t){return e<0&&(e=r.length+e),r.substr(e,t)},nr=M(Object.freeze({__proto__:null,basename:Q,default:rr,delimiter:":",dirname:K,extname:Y,isAbsolute:D,join:J,normalize:q,relative:H,resolve:z,sep:"/"}));var ir=Object,ar=/./;function or(r){return"boolean"==typeof r}var sr="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function cr(){return sr&&"symbol"==typeof Symbol.toStringTag}var ur=Object.prototype.toString;var lr=Object.prototype.hasOwnProperty;var pr,fr="function"==typeof Symbol?Symbol:void 0,gr="function"==typeof fr?fr.toStringTag:"";pr=cr()?function(r){var e,t,n,i,a;if(null==r)return ur.call(r);t=r[gr],a=gr,e=null!=(i=r)&&lr.call(i,a);try{r[gr]=void 0}catch(e){return ur.call(r)}return n=ur.call(r),e?r[gr]=t:delete r[gr],n}:function(r){return ur.call(r)};var dr=pr,hr=Boolean,br=Boolean.prototype.toString;var wr=cr();function vr(r){return"object"==typeof r&&(r instanceof hr||(wr?function(r){try{return br.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===dr(r)))}function yr(r){return or(r)||vr(r)}function mr(r){return"number"==typeof r}function Er(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function kr(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+Er(i):Er(i)+r,n&&(r="-"+r)),r}G(yr,"isPrimitive",or),G(yr,"isObject",vr);var xr=String.prototype.toLowerCase,jr=String.prototype.toUpperCase;function Sr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!mr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=kr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=kr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===jr.call(r.specifier)?jr.call(t):xr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function _r(r){return"string"==typeof r}var Ar=Math.abs,Vr=String.prototype.toLowerCase,$r=String.prototype.toUpperCase,Tr=String.prototype.replace,Fr=/e\+(\d)$/,Or=/e-(\d)$/,Ir=/^(\d+)$/,Cr=/^(\d+)e/,Rr=/\.0$/,Pr=/\.0*e/,Zr=/(\..*[^0])0*e/;function Lr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!mr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Ar(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Tr.call(t,Zr,"$1e"),t=Tr.call(t,Pr,"e"),t=Tr.call(t,Rr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Tr.call(t,Fr,"e+0$1"),t=Tr.call(t,Or,"e-0$1"),r.alternate&&(t=Tr.call(t,Ir,"$1."),t=Tr.call(t,Cr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===$r.call(r.specifier)?$r.call(t):Vr.call(t)}function Nr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Wr(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Nr(n):Nr(n)+r}var Gr=String.fromCharCode,Mr=isNaN,Br=Array.isArray;function Ur(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Xr(r){var e,t,n,i,a,o,s,c,u;if(!Br(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",s=1,c=0;c<r.length;c++)if(_r(n=r[c]))o+=n;else{if(e=void 0!==n.precision,!(n=Ur(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,Mr(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,Mr(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=Sr(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Mr(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Mr(a)?String(n.arg):Gr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Lr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=kr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Wr(n.arg,n.width,n.padRight)),o+=n.arg||"",s+=1}return o}var zr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function qr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Dr(r){var e,t,n,i;for(t=[],i=0,n=zr.exec(r);n;)(e=r.slice(i,zr.lastIndex-n[0].length)).length&&t.push(e),t.push(qr(n)),i=zr.lastIndex,n=zr.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Jr(r){return"string"==typeof r}function Hr(r){var e,t,n;if(!Jr(r))throw new TypeError(Hr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Dr(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return Xr.apply(null,t)}function Kr(){return new Function("return this;")()}var Qr="object"==typeof self?self:null,Yr="object"==typeof window?window:null,re="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ee="object"==typeof re?re:null,te="object"==typeof globalThis?globalThis:null;var ne=function(r){if(arguments.length){if(!or(r))throw new TypeError(Hr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Kr()}if(te)return te;if(Qr)return Qr;if(Yr)return Yr;if(ee)return ee;throw new Error("unexpected error. Unable to resolve global object.")}(),ie=ne.document&&ne.document.childNodes,ae=Int8Array;function oe(){return/^\s*function\s*([^(]*)/i}var se,ce=/^\s*function\s*([^(]*)/i;G(oe,"REGEXP",ce),se=Array.isArray?Array.isArray:function(r){return"[object Array]"===dr(r)};var ue=se;function le(r){return"number"==typeof r}function pe(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function fe(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+pe(i):pe(i)+r,n&&(r="-"+r)),r}var ge=String.prototype.toLowerCase,de=String.prototype.toUpperCase;function he(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!le(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=fe(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=fe(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===de.call(r.specifier)?de.call(t):ge.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function be(r){return"string"==typeof r}var we=Math.abs,ve=String.prototype.toLowerCase,ye=String.prototype.toUpperCase,me=String.prototype.replace,Ee=/e\+(\d)$/,ke=/e-(\d)$/,xe=/^(\d+)$/,je=/^(\d+)e/,Se=/\.0$/,_e=/\.0*e/,Ae=/(\..*[^0])0*e/;function Ve(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!le(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":we(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=me.call(t,Ae,"$1e"),t=me.call(t,_e,"e"),t=me.call(t,Se,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=me.call(t,Ee,"e+0$1"),t=me.call(t,ke,"e-0$1"),r.alternate&&(t=me.call(t,xe,"$1."),t=me.call(t,je,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===ye.call(r.specifier)?ye.call(t):ve.call(t)}function $e(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Te(r,e,t){var n=e-r.length;return n<0?r:r=t?r+$e(n):$e(n)+r}var Fe=String.fromCharCode,Oe=isNaN,Ie=Array.isArray;function Ce(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Re(r){var e,t,n,i,a,o,s,c,u;if(!Ie(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",s=1,c=0;c<r.length;c++)if(be(n=r[c]))o+=n;else{if(e=void 0!==n.precision,!(n=Ce(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,Oe(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,Oe(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=he(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Oe(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Oe(a)?String(n.arg):Fe(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Ve(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=fe(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Te(n.arg,n.width,n.padRight)),o+=n.arg||"",s+=1}return o}var Pe=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ze(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Le(r){var e,t,n,i;for(t=[],i=0,n=Pe.exec(r);n;)(e=r.slice(i,Pe.lastIndex-n[0].length)).length&&t.push(e),t.push(Ze(n)),i=Pe.lastIndex,n=Pe.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Ne(r){return"string"==typeof r}function We(r){var e,t,n;if(!Ne(r))throw new TypeError(We("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Le(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return Re.apply(null,t)}function Ge(r){return null!==r&&"object"==typeof r}var Me=function(r){if("function"!=typeof r)throw new TypeError(We("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!ue(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Ge);function Be(r){var e,t,n,i;if(("Object"===(t=dr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ce.exec(n.toString()))return e[1]}return Ge(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}G(Ge,"isObjectLikeArray",Me);var Ue="function"==typeof ar||"object"==typeof ae||"function"==typeof ie?function(r){return Be(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Be(r).toLowerCase():e};var Xe,ze,qe=Object.getPrototypeOf;ze=Object.getPrototypeOf,Xe="function"===Ue(ze)?qe:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===dr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var De=Xe;function Je(r){return null==r?null:(r=ir(r),De(r))}function He(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===dr(r))return!0;r=Je(r)}return!1}function Ke(r,e,t,n){var i,a,o,s,c,u;if(c=r-e,r<=0||c<=0)return NaN;if(1===r||0===n)return 0;for(a=n<0?(1-r)*n:0,i=0,o=0,u=0;u<r;u++)i+=(s=t[a])*s,o+=s,a+=n;return(i-o/r*o)/c}G(Ke,"ndarray",(function(r,e,t,n,i){var a,o,s,c,u,l;if(u=r-e,r<=0||u<=0)return NaN;if(1===r||0===n)return 0;for(o=i,a=0,s=0,l=0;l<r;l++)a+=(c=t[o])*c,s+=c,o+=n;return(a-s/r*s)/u}));var Qe,Ye=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return He(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,nr.join)("/home/runner/work/stats-base-dsemtk/stats-base-dsemtk/node_modules/@stdlib/stats-base-dvariancetk/lib","./native.js")),rt=Qe=He(Ye)?Ke:Ye;const{ndarray:et}=Qe;var tt=Math.sqrt;function nt(r,e,t,n){return tt(rt(r,e,t,n)/r)}function it(r,e,t,n,i){return tt(et(r,e,t,n,i)/r)}G(nt,"ndarray",it);export{nt as default,it as ndarray};
//# sourceMappingURL=mod.js.map
