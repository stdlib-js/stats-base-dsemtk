// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("path")):"function"==typeof define&&define.amd?define(["path"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).dsemtk=e(r.require$$0)}(this,(function(r){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var i=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,i="";for(e=0;e<r;e++)i+="0";return i}function a(r,e,i){var t=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=i?r+n(a):n(a)+r,t&&(r="-"+r)),r}var o=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function s(r){var e,i,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,n=parseInt(i,10),!isFinite(n)){if(!t(i))throw new Error("invalid integer. Value: "+i);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(i=(-n).toString(e),r.precision&&(i=a(i,r.precision,r.padRight)),i="-"+i):(i=n.toString(e),n||r.precision?r.precision&&(i=a(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===c.call(r.specifier)?c.call(i):o.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function p(r){return"string"==typeof r}var l=Math.abs,u=String.prototype.toLowerCase,f=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,w=/^(\d+)$/,b=/^(\d+)e/,y=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function E(r){var e,i,n=parseFloat(r.arg);if(!isFinite(n)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+i);n=r.arg}switch(r.specifier){case"e":case"E":i=n.toExponential(r.precision);break;case"f":case"F":i=n.toFixed(r.precision);break;case"g":case"G":l(n)<1e-4?((e=r.precision)>0&&(e-=1),i=n.toExponential(e)):i=n.toPrecision(r.precision),r.alternate||(i=g.call(i,m,"$1e"),i=g.call(i,v,"e"),i=g.call(i,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=g.call(i,d,"e+0$1"),i=g.call(i,h,"e-0$1"),r.alternate&&(i=g.call(i,w,"$1."),i=g.call(i,b,"$1.e")),n>=0&&r.sign&&(i=r.sign+i),i=r.specifier===f.call(r.specifier)?f.call(i):u.call(i)}function k(r){var e,i="";for(e=0;e<r;e++)i+=" ";return i}function x(r,e,i){var t=e-r.length;return t<0?r:r=i?r+k(t):k(t)+r}var S=String.fromCharCode,j=isNaN,_=Array.isArray;function $(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function V(r){var e,i,t,n,o,c,l,u,f;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,u=0;u<r.length;u++)if(p(t=r[u]))c+=t;else{if(e=void 0!==t.precision,!(t=$(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(n=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,j(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,j(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=s(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!j(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=j(o)?String(t.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=E(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=a(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=x(t.arg,t.width,t.padRight)),c+=t.arg||"",l+=1}return c}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,i,t,n;for(i=[],n=0,t=T.exec(r);t;)(e=r.slice(n,T.lastIndex-t[0].length)).length&&i.push(e),i.push(A(t)),n=T.lastIndex,t=T.exec(r);return(e=r.slice(n)).length&&i.push(e),i}function I(r){return"string"==typeof r}function C(r){var e,i,t;if(!I(r))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(i=new Array(arguments.length))[0]=e,t=1;t<i.length;t++)i[t]=arguments[t];return V.apply(null,i)}var O,R=Object.prototype,Z=R.toString,P=R.__defineGetter__,L=R.__defineSetter__,N=R.__lookupGetter__,W=R.__lookupSetter__;O=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?i:function(r,e,i){var t,n,a,o;if("object"!=typeof r||null===r||"[object Array]"===Z.call(r))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof i||null===i||"[object Array]"===Z.call(i))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(N.call(r,e)||W.call(r,e)?(t=r.__proto__,r.__proto__=R,delete r[e],r[e]=i.value,r.__proto__=t):r[e]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(r,e,i.get),o&&L&&L.call(r,e,i.set),r};var G=O;function q(r,e,i){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:i})}var B=Object,U=/./;function X(r){return"boolean"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return M&&"symbol"==typeof Symbol.toStringTag}var D=Object.prototype.toString;var J=Object.prototype.hasOwnProperty;var H,K="function"==typeof Symbol?Symbol:void 0,Q="function"==typeof K?K.toStringTag:"";H=z()?function(r){var e,i,t,n,a;if(null==r)return D.call(r);i=r[Q],a=Q,e=null!=(n=r)&&J.call(n,a);try{r[Q]=void 0}catch(e){return D.call(r)}return t=D.call(r),e?r[Q]=i:delete r[Q],t}:function(r){return D.call(r)};var Y=H,rr=Boolean,er=Boolean.prototype.toString;var ir=z();function tr(r){return"object"==typeof r&&(r instanceof rr||(ir?function(r){try{return er.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Y(r)))}function nr(r){return X(r)||tr(r)}function ar(r){return"number"==typeof r}function or(r){var e,i="";for(e=0;e<r;e++)i+="0";return i}function cr(r,e,i){var t=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=i?r+or(n):or(n)+r,t&&(r="-"+r)),r}q(nr,"isPrimitive",X),q(nr,"isObject",tr);var sr=String.prototype.toLowerCase,pr=String.prototype.toUpperCase;function lr(r){var e,i,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,t=parseInt(i,10),!isFinite(t)){if(!ar(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(i=(-t).toString(e),r.precision&&(i=cr(i,r.precision,r.padRight)),i="-"+i):(i=t.toString(e),t||r.precision?r.precision&&(i=cr(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===pr.call(r.specifier)?pr.call(i):sr.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function ur(r){return"string"==typeof r}var fr=Math.abs,gr=String.prototype.toLowerCase,dr=String.prototype.toUpperCase,hr=String.prototype.replace,wr=/e\+(\d)$/,br=/e-(\d)$/,yr=/^(\d+)$/,vr=/^(\d+)e/,mr=/\.0$/,Er=/\.0*e/,kr=/(\..*[^0])0*e/;function xr(r){var e,i,t=parseFloat(r.arg);if(!isFinite(t)){if(!ar(r.arg))throw new Error("invalid floating-point number. Value: "+i);t=r.arg}switch(r.specifier){case"e":case"E":i=t.toExponential(r.precision);break;case"f":case"F":i=t.toFixed(r.precision);break;case"g":case"G":fr(t)<1e-4?((e=r.precision)>0&&(e-=1),i=t.toExponential(e)):i=t.toPrecision(r.precision),r.alternate||(i=hr.call(i,kr,"$1e"),i=hr.call(i,Er,"e"),i=hr.call(i,mr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=hr.call(i,wr,"e+0$1"),i=hr.call(i,br,"e-0$1"),r.alternate&&(i=hr.call(i,yr,"$1."),i=hr.call(i,vr,"$1.e")),t>=0&&r.sign&&(i=r.sign+i),i=r.specifier===dr.call(r.specifier)?dr.call(i):gr.call(i)}function Sr(r){var e,i="";for(e=0;e<r;e++)i+=" ";return i}function jr(r,e,i){var t=e-r.length;return t<0?r:r=i?r+Sr(t):Sr(t)+r}var _r=String.fromCharCode,$r=isNaN,Vr=Array.isArray;function Tr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Ar(r){var e,i,t,n,a,o,c,s,p;if(!Vr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(ur(t=r[s]))o+=t;else{if(e=void 0!==t.precision,!(t=Tr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,$r(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,$r(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=lr(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!$r(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=$r(a)?String(t.arg):_r(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=xr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=cr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=jr(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var Fr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ir(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Cr(r){var e,i,t,n;for(i=[],n=0,t=Fr.exec(r);t;)(e=r.slice(n,Fr.lastIndex-t[0].length)).length&&i.push(e),i.push(Ir(t)),n=Fr.lastIndex,t=Fr.exec(r);return(e=r.slice(n)).length&&i.push(e),i}function Or(r){return"string"==typeof r}function Rr(r){var e,i,t;if(!Or(r))throw new TypeError(Rr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Cr(r),(i=new Array(arguments.length))[0]=e,t=1;t<i.length;t++)i[t]=arguments[t];return Ar.apply(null,i)}function Zr(){return new Function("return this;")()}var Pr="object"==typeof self?self:null,Lr="object"==typeof window?window:null,Nr="object"==typeof global?global:null,Wr="object"==typeof globalThis?globalThis:null;var Gr=function(r){if(arguments.length){if(!X(r))throw new TypeError(Rr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Zr()}if(Wr)return Wr;if(Pr)return Pr;if(Lr)return Lr;if(Nr)return Nr;throw new Error("unexpected error. Unable to resolve global object.")}(),qr=Gr.document&&Gr.document.childNodes,Br=Int8Array;function Ur(){return/^\s*function\s*([^(]*)/i}var Xr,Mr=/^\s*function\s*([^(]*)/i;q(Ur,"REGEXP",Mr),Xr=Array.isArray?Array.isArray:function(r){return"[object Array]"===Y(r)};var zr=Xr;function Dr(r){return"number"==typeof r}function Jr(r){var e,i="";for(e=0;e<r;e++)i+="0";return i}function Hr(r,e,i){var t=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=i?r+Jr(n):Jr(n)+r,t&&(r="-"+r)),r}var Kr=String.prototype.toLowerCase,Qr=String.prototype.toUpperCase;function Yr(r){var e,i,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,t=parseInt(i,10),!isFinite(t)){if(!Dr(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(i=(-t).toString(e),r.precision&&(i=Hr(i,r.precision,r.padRight)),i="-"+i):(i=t.toString(e),t||r.precision?r.precision&&(i=Hr(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===Qr.call(r.specifier)?Qr.call(i):Kr.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function re(r){return"string"==typeof r}var ee=Math.abs,ie=String.prototype.toLowerCase,te=String.prototype.toUpperCase,ne=String.prototype.replace,ae=/e\+(\d)$/,oe=/e-(\d)$/,ce=/^(\d+)$/,se=/^(\d+)e/,pe=/\.0$/,le=/\.0*e/,ue=/(\..*[^0])0*e/;function fe(r){var e,i,t=parseFloat(r.arg);if(!isFinite(t)){if(!Dr(r.arg))throw new Error("invalid floating-point number. Value: "+i);t=r.arg}switch(r.specifier){case"e":case"E":i=t.toExponential(r.precision);break;case"f":case"F":i=t.toFixed(r.precision);break;case"g":case"G":ee(t)<1e-4?((e=r.precision)>0&&(e-=1),i=t.toExponential(e)):i=t.toPrecision(r.precision),r.alternate||(i=ne.call(i,ue,"$1e"),i=ne.call(i,le,"e"),i=ne.call(i,pe,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=ne.call(i,ae,"e+0$1"),i=ne.call(i,oe,"e-0$1"),r.alternate&&(i=ne.call(i,ce,"$1."),i=ne.call(i,se,"$1.e")),t>=0&&r.sign&&(i=r.sign+i),i=r.specifier===te.call(r.specifier)?te.call(i):ie.call(i)}function ge(r){var e,i="";for(e=0;e<r;e++)i+=" ";return i}function de(r,e,i){var t=e-r.length;return t<0?r:r=i?r+ge(t):ge(t)+r}var he=String.fromCharCode,we=isNaN,be=Array.isArray;function ye(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function ve(r){var e,i,t,n,a,o,c,s,p;if(!be(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(re(t=r[s]))o+=t;else{if(e=void 0!==t.precision,!(t=ye(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,we(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,we(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=Yr(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!we(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=we(a)?String(t.arg):he(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=fe(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Hr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=de(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var me=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ee(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function ke(r){var e,i,t,n;for(i=[],n=0,t=me.exec(r);t;)(e=r.slice(n,me.lastIndex-t[0].length)).length&&i.push(e),i.push(Ee(t)),n=me.lastIndex,t=me.exec(r);return(e=r.slice(n)).length&&i.push(e),i}function xe(r){return"string"==typeof r}function Se(r){var e,i,t;if(!xe(r))throw new TypeError(Se("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=ke(r),(i=new Array(arguments.length))[0]=e,t=1;t<i.length;t++)i[t]=arguments[t];return ve.apply(null,i)}function je(r){return null!==r&&"object"==typeof r}var _e=function(r){if("function"!=typeof r)throw new TypeError(Se("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var i,t;if(!zr(e))return!1;if(0===(i=e.length))return!1;for(t=0;t<i;t++)if(!1===r(e[t]))return!1;return!0}}(je);function $e(r){var e,i,t,n;if(("Object"===(i=Y(r).slice(8,-1))||"Error"===i)&&r.constructor){if("string"==typeof(t=r.constructor).name)return t.name;if(e=Mr.exec(t.toString()))return e[1]}return je(n=r)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":i}q(je,"isObjectLikeArray",_e);var Ve="function"==typeof U||"object"==typeof Br||"function"==typeof qr?function(r){return $e(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?$e(r).toLowerCase():e};var Te,Ae,Fe=Object.getPrototypeOf;Ae=Object.getPrototypeOf,Te="function"===Ve(Ae)?Fe:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===Y(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ie=Te;function Ce(r){return null==r?null:(r=B(r),Ie(r))}function Oe(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===Y(r))return!0;r=Ce(r)}return!1}function Re(r,e,i,t){var n,a,o,c,s,p;if(s=r-e,r<=0||s<=0)return NaN;if(1===r||0===t)return 0;for(a=t<0?(1-r)*t:0,n=0,o=0,p=0;p<r;p++)n+=(c=i[a])*c,o+=c,a+=t;return(n-o/r*o)/s}q(Re,"ndarray",(function(r,e,i,t,n){var a,o,c,s,p,l;if(p=r-e,r<=0||p<=0)return NaN;if(1===r||0===t)return 0;for(o=n,a=0,c=0,l=0;l<r;l++)a+=(s=i[o])*s,c+=s,o+=t;return(a-c/r*c)/p}));var Ze,Pe=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return Oe(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,r.join)(__dirname,"./native.js")),Le=Ze=Oe(Pe)?Re:Pe;const{ndarray:Ne}=Ze;var We=Math.sqrt;function Ge(r,e,i,t){return We(Le(r,e,i,t)/r)}return q(Ge,"ndarray",(function(r,e,i,t,n){return We(Ne(r,e,i,t,n)/r)})),Ge}));
//# sourceMappingURL=index.js.map
