"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=i(function(w,u){
var p=require('@stdlib/stats-base-dvariancetk/dist'),y=require('@stdlib/math-base-special-sqrt/dist');function x(e,r,t,a){return y(p(e,r,t,a)/e)}u.exports=x
});var q=i(function(z,v){
var f=require('@stdlib/stats-base-dvariancetk/dist').ndarray,j=require('@stdlib/math-base-special-sqrt/dist');function l(e,r,t,a,k){return j(f(e,r,t,a,k)/e)}v.exports=l
});var c=i(function(A,o){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=n(),_=q();R(d,"ndarray",_);o.exports=d
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=c(),s,m=O(E(__dirname,"./native.js"));b(m)?s=g:s=m;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
